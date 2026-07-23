/**
 * LLM invocation and file output helpers.
 * Supports OpenAI-compatible chat/completions endpoints.
 */

import fs from "node:fs";
import path from "node:path";

const DEFAULT_OPENAI_BASE_URL = "https://api.openai.com/v1";
const DEFAULT_MODEL = "gpt-4.1-mini";
const THINK_BLOCK_PATTERNS = [
  /<think\b[^>]*>[\s\S]*?<\/think>\s*/gi,
  /^```(?:think|thinking)\s*\n[\s\S]*?^```\s*/gim,
];

function getConfiguredLlmConcurrency(): number {
  const raw = Number(process.env["LLM_CONCURRENCY"] ?? "");
  if (Number.isFinite(raw) && raw >= 1) return Math.floor(raw);
  return 5;
}

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = getConfiguredLlmConcurrency();
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s
const FETCH_TIMEOUT_MS = 90_000; // 90 s — covers slow cross-border links without blocking slots for minutes

function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

function isRetryableLlmError(err: unknown): boolean {
  if (is429(err)) return true;

  const text = String(err).toLowerCase();
  const cause = (err as { cause?: unknown }).cause;
  const causeText = cause ? String(cause).toLowerCase() : "";
  const causeCode = (cause as { code?: string })?.code?.toLowerCase() ?? "";

  return (
    text.includes("timed out") ||
    text.includes("fetch failed") ||
    text.includes("aborted") ||
    text.includes("returned empty output") ||
    text.includes("returned no usable output") ||
    text.includes("rate limit") ||
    causeText.includes("etimedout") ||
    causeText.includes("econnrefused") ||
    causeText.includes("econnreset") ||
    causeText.includes("enotfound") ||
    causeText.includes("eai_again") ||
    causeText.includes("socket hang up") ||
    causeCode === "etimedout" ||
    causeCode === "econnrefused" ||
    causeCode === "econnreset" ||
    causeCode === "enotfound" ||
    causeCode === "eai_again" ||
    causeCode === "und_err_connect_timeout" ||
    causeCode === "und_err_headers_timeout" ||
    causeCode === "und_err_body_timeout"
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function getOpenAiCompatibleApiKey(): string {
  return process.env["OPENAI_API_KEY"] ?? process.env["ANTHROPIC_API_KEY"] ?? "";
}

export function getLlmBaseUrl(): string {
  return (
    process.env["OPENAI_BASE_URL"] ??
    process.env["ANTHROPIC_BASE_URL"] ??
    DEFAULT_OPENAI_BASE_URL
  ).replace(/\/$/, "");
}

function getOpenAiCompatibleModel(): string {
  return process.env["OPENAI_MODEL"] ?? process.env["ANTHROPIC_MODEL"] ?? DEFAULT_MODEL;
}

export function getLlmRuntimeLabel(): string {
  return `openai-compatible:${getOpenAiCompatibleModel()} @ ${getLlmBaseUrl()}`;
}

export function getLlmConfigurationError(): string {
  return "Missing required environment variable: OPENAI_API_KEY";
}

export function hasLlmCredentials(): boolean {
  return getOpenAiCompatibleApiKey().length > 0;
}

export function stripThinkBlocks(content: string): string {
  let cleaned = content.replace(/\r\n/g, "\n");

  for (const pattern of THINK_BLOCK_PATTERNS) {
    cleaned = cleaned.replace(pattern, "");
  }

  return cleaned
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractTextContent(content: unknown): string {
  const text = stringifyTextContent(content).trim();
  if (text) return text;
  if (typeof content === "string") return text;
  throw new Error("Unexpected response type from LLM");
}

function stringifyTextContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") return part;
        if (
          part &&
          typeof part === "object" &&
          "type" in part &&
          part.type === "text" &&
          "text" in part &&
          typeof part.text === "string"
        ) {
          return part.text;
        }
        return "";
      })
      .join("");
  }
  throw new Error("Unexpected response type from LLM");
}

interface OpenAiCompatibleChoice {
  message?: {
    content?: unknown;
  };
  delta?: {
    content?: unknown;
  };
}

interface OpenAiCompatibleResponse {
  error?:
    | string
    | {
        message?: string;
        type?: string;
        code?: string;
      };
  choices?: OpenAiCompatibleChoice[];
}

function formatLlmApiError(data: OpenAiCompatibleResponse, fallback: string): string {
  const error = data.error;
  if (typeof error === "string" && error.trim()) return error.trim();
  if (error && typeof error === "object") {
    const parts = [error.message, error.type, error.code].filter(
      (part): part is string => typeof part === "string" && part.trim().length > 0,
    );
    if (parts.length > 0) return parts.join(" ");
  }
  return fallback;
}

function parseJsonObject(text: string): OpenAiCompatibleResponse {
  return JSON.parse(text) as OpenAiCompatibleResponse;
}

function parseSseDataMessages(text: string): string[] {
  const messages: string[] = [];
  let current: string[] = [];

  function flush(): void {
    if (current.length === 0) return;
    const message = current.join("\n").trim();
    if (message && message !== "[DONE]") messages.push(message);
    current = [];
  }

  for (const rawLine of text.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trimEnd();
    if (line === "") {
      flush();
      continue;
    }
    if (line.startsWith("data:")) {
      current.push(line.slice("data:".length).trimStart());
    }
  }

  flush();
  return messages;
}

function extractStreamContent(body: string): string {
  let output = "";
  let lastParsedChunk: OpenAiCompatibleResponse | undefined;

  for (const message of parseSseDataMessages(body)) {
    const chunk = parseJsonObject(message);
    lastParsedChunk = chunk;

    if (chunk.error) {
      throw new Error(`LLM API stream error: ${formatLlmApiError(chunk, message)}`);
    }

    for (const choice of chunk.choices ?? []) {
      const content = choice.delta?.content ?? choice.message?.content;
      if (content === undefined || content === null) continue;
      output += stringifyTextContent(content);
    }
  }

  const trimmed = output.trim();
  if (trimmed) return trimmed;
  if (lastParsedChunk) throw new Error("LLM API returned no usable output");
  throw new Error("LLM API returned empty stream");
}

function extractCompletionContent(data: OpenAiCompatibleResponse): string {
  if (data.error) {
    throw new Error(`LLM API error: ${formatLlmApiError(data, JSON.stringify(data))}`);
  }

  const content = data.choices?.[0]?.message?.content;
  return extractTextContent(content);
}

async function callOpenAiCompatibleLlm(prompt: string, maxTokens: number): Promise<string> {
  const apiKey = getOpenAiCompatibleApiKey();
  if (!apiKey) throw new Error("Missing required environment variable: OPENAI_API_KEY");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  let resp: Response;
  try {
    resp = await fetch(`${getLlmBaseUrl()}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: getOpenAiCompatibleModel(),
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
        max_tokens: maxTokens,
      }),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
  const body = await resp.text();

  if (!resp.ok) {
    throw new Error(`LLM API ${resp.status}: ${body}`);
  }

  const contentType = resp.headers.get("content-type") ?? "";
  if (contentType.includes("text/event-stream") || body.trimStart().startsWith("data:")) {
    return extractStreamContent(body);
  }

  return extractCompletionContent(parseJsonObject(body));
}

export async function callLlm(prompt: string, maxTokens = 4096): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      return stripThinkBlocks(await callOpenAiCompatibleLlm(prompt, maxTokens));
    } catch (err) {
      if (attempt < MAX_RETRIES && isRetryableLlmError(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s after: ${String(err)}`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  const cleanedContent = stripThinkBlocks(content);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, cleanedContent, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: "zh" | "en" = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return lang === "en"
    ? `\n\n---\n*This digest is auto-generated by [Radar Forge](https://github.com/${digestRepo}).*`
    : `\n\n---\n*本日报由 [Radar Forge](https://github.com/${digestRepo}) 自动生成。*`;
}
