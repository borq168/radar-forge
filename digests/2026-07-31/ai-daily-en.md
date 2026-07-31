# AI Ecosystem Daily Brief 2026-07-31

> Sources: 6 generated report(s) | Generated: 2026-07-31 00:26 UTC

Source reports:
- AI CLI Tools Digest: `ai-cli-en.md`
- Skills Ecosystem Highlights: `ai-skills-en.md`
- AI Agents Ecosystem Digest: `ai-agents-en.md`
- Official AI Content Report: `ai-web-en.md`
- GitHub AI Trending Digest: `ai-trending-en.md`
- Hacker News AI Community Digest: `ai-hn-en.md`

---

# AI Ecosystem Daily Brief 2026-07-31

## 1. At a Glance
- [CLI] OpenCode released v1.18.10 (Modal model discovery, desktop fixes) and Kimi Code shipped v0.31.0 (plugin-contributed custom agents).
- [CLI] Claude Code closed only 1 PR, no release; users report iOS sessions auto-archive, and the Cowork GitHub connector is broken (OAuth DCR unsupported).
- [CLI] MCP tool schema compatibility issues reported across multiple tools: Claude Code’s Cowork connector, Kimi Code’s Anthropic provider rejecting `oneOf`/`anyOf`/`allOf`, and Codex users demanding flattened MCP namespaces for non-OpenAI providers.
- [Agents] OpenClaw merged a fix for global update version selection (#116585) and a new CLI command to remove model auth profiles (#99381).
- [Agents] Top OpenClaw issues: text between tool calls leaks to messaging channels (#25592, 38 comments), and crash-loop breaker regression permanently suppresses Discord/WhatsApp (#115326, 20 comments).
- [Skills] Claude Skills PR #1298 fixes `run_eval.py` always reporting 0% recall, a core evaluation tool; independent reproductions linked to issue #556.
- [Skills] Codex Skills PR fetch failed with 404; no data from the `openai/plugins` repository today.
- [Official] OpenAI announces lower pricing for GPT‑5.6 Luna and Terra variants; no specific price points or benchmarks provided.
- [Official] Cloudflare’s migration of cdnjs to its Developer Platform completed June 23, 2026, now serving 9 billion requests/day at a 98.6% cache hit rate.
- [GitHub] `openwork` (+915 stars) leads as an open‑source alternative to Claude Cowork; `ECC` (+804 stars) optimizes coding agent performance across Claude Code, Codex, and others.
- [GitHub] Hugging Face’s `speech-to-speech` (+628 stars) enables local voice agents; `last30days-skill` (+378 stars) researches topics across Reddit, X, YouTube, HN, and Polymarket.
- [HN] GPT‑5.6 discussion dominates with 477 points, 307 comments; Agent‑Manager (Tmux TUI for coding agents) scores 91 points.

## 2. Browse by Theme

**Developer Tools**
- OpenCode v1.18.10 adds Modal model discovery; Kimi Code v0.31.0 introduces plugin‑contributed custom agents; Codex tagged an alpha Rust CLI (0.147.0‑alpha.2).
- Cross‑platform UI fragility: Claude Code iOS sessions auto‑archive, Codex Windows desktop app freezes, Kimi Code TUI scroll locks, OpenCode plugin dependency errors break the main screen.
- Agent‑Manager (HN score 91) offers a Tmux TUI to manage Claude Code, Codex, and OpenCode sessions.
- `claude-account` (HN score 43) lets users switch Claude Code accounts without re‑logging.
- LZRAVEN reimplementation (HN) demonstrates AI‑driven reverse engineering passing conformance tests.

**Agent Projects**
- OpenClaw: 500 issues/PRs updated, no new release. Key merges: version selection fix (#116585), model auth profile removal (#99381). Open high‑priority PRs include Android work preservation (#116593), meeting bot memory growth (#116589), Google Chat thread handling (#116370).
- `openwork` (GitHub, +915 stars) – open‑source Cowork alternative powered by opencode.
- `ECC` (GitHub, +804 stars) – performance‑optimization harness for coding agents.
- `speech-to-speech` (GitHub, +628 stars) – Hugging Face library for local voice agents.
- `chrome-devtools-mcp` (GitHub, +80 stars) – brings Chrome DevTools to agentic workflows.

**Skills & Workflows**
- Claude Skills: PR #1298 (run_eval.py 0% recall fix), PR #514 (document‑typography skill), PR #538 (case‑sensitive file reference fix), PR #486 (ODT skill), PR #210 (frontend‑design skill clarity), PR #83 (skill‑quality and security analyzers), PR #541 (DOCX tracked change collision fix).
- Codex Skills data missing due to 404 on `openai/plugins` pulls.
- OpenClaw’s community skill development frustration (#50090, 15 comments); `ClawHub` gap remains a recurring topic.
- `last30days-skill` (GitHub) synthesizes multi‑platform research into a grounded summary.

**Official Updates**
- OpenAI: “Advancing the price‑performance frontier with GPT‑5.6” announces lower pricing for Luna and Terra; no technical details in excerpt.
- Cloudflare: cdnjs now runs wholly on the Developer Platform; 12% of websites, avg 108k req/s, 330+ data centers, 98.6% cache hit rate.

**GitHub Hot List**
- Top new stars: `openwork` (+915), `ECC` (+804), `speech-to-speech` (+628), `last30days-skill` (+378), `AI-For-Beginners` (+155), `chrome-devtools-mcp` (+80).
- Continually active: `AutoGPT` (185k stars), `ollama` (177k stars), `dify` (150k stars), `MoneyPrinterTurbo` (100k stars).

**HN Discussions**
- GPT‑5.6 release: 477 points, 307 comments, heavy price‑performance debate.
- Anthropic cybersecurity incidents: models autonomously hacked three companies in controlled tests (64 points, 47 comments).
- Distillation censorship transfer: demonstration that DeepSeek distillation removes censorship guard (78 points, 56 comments).
- Agent‑Manager, claude‑account, and LZRAVEN tools attracted practical developer interest.

## 3. Follow‑Up Watch
- **OpenCode v1.18.10 & Kimi Code v0.31.0** (CLI report) – newly released; check for post‑release bug reports or community feedback in the next days.
- **OpenClaw crash‑loop breaker regression (#115326)** (Agents report) – unresolved P1, no fix PR yet; suppresses Discord/WhatsApp permanently.
- **Claude Skills run_eval.py fix (#1298)** (Skills report) – open since June 2026, affects core description‑optimization tooling; if merged, could improve skill quality iteration.
- **GPT‑5.6 pricing details** (Official & HN reports) – no concrete price points released; watch for official documentation or benchmark results.
- **openwork & ECC** (GitHub report) – brand‑new repos with explosive first‑day star growth; early adoption and issues may reveal viability.
- **Claude Code multi‑account switching request** (CLI report) – 530 upvotes on mobile; strong community demand may prompt maintainer response.

## 4. Detailed Report Index
| Report | What to read it for | Local filename |
|--------|---------------------|----------------|
| AI CLI Tools Digest | Cross‑tool activity, releases, shared pain points (MCP, agent lifecycle, UI) | `ai-cli-en.md` |
| Skills Ecosystem Highlights | Claude Skills PRs and fixes; Codex Skills data missing | `ai-skills-en.md` |
| AI Agents Ecosystem Digest | OpenClaw activity, bugs, community hot topics | `ai-agents-en.md` |
| Official AI Content Report | OpenAI GPT‑5.6 pricing, Cloudflare cdnjs migration | `ai-web-en.md` |
| GitHub AI Trending Digest | Fast‑growing AI repos: openwork, ECC, speech‑to‑speech, etc. | `ai-trending-en.md` |
| Hacker News AI Community Digest | GPT‑5.6 discussion, Agent‑Manager, Anthropic safety, distillation | `ai-hn-en.md` |

## 5. Data Gaps
- **Codex Skills** (`openai/plugins`): PR fetch failed with GitHub API 404, so no skill data from the OpenAI plugins repository for today.
- **Anthropic official content**: No new articles or analyzable content in this cycle.