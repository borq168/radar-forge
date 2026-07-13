# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-13 00:24 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-07-13

## 1. Daily Cross-Tool Overview
On 13 July 2026, the four tracked AI CLI tools showed comparable issue activity (50 updated each for Claude Code, OpenAI Codex, and OpenCode; 6 new for Kimi Code). No major versioned releases were published except for a patch from Kimi Code. Community attention centred on model‑access quirks with the newest flagship models (GPT‑5.6 family, Claude Fable 5), persistent Windows‑specific stability gaps, and configuration‑inheritance regressions. OpenCode stood out with an unusually high PR count (50) addressing a wide range of fixes, while Kimi Code’s smaller but focused PR flow continued landing pieces of its v2 agent engine.

## 2. Activity Comparison

| Tool           | Issues (updated/new) | Active PRs | New Releases        |
|----------------|----------------------|------------|---------------------|
| Claude Code    | 50                   | 3          | None                |
| OpenAI Codex   | 50                   | 3          | None                |
| Kimi Code      | 6 (all new)          | 10         | v0.23.6 (patch)     |
| OpenCode       | 50                   | 50         | None (automated evidence tags only) |

*Note: “Active PRs” counts those updated or merged during the period; issues numbers from digests reflect community‑filed topics, not necessarily fixed items.*

## 3. Shared Feature Directions
**Requirements appearing across multiple tool communities today:**
- **Windows platform robustness** — Claude Code (permissions not respected, sandbox crash), Codex (freezing, in‑app browser crash, remote pairing stuck), Kimi Code (MSYS2 shell detection failure), OpenCode (Plan/Build switch broken on Windows). All need better first‑class Windows support.
- **Model selection and override control** — Claude Code (Fable 5 advisor unavailable above 100K tokens, forced model downgrade for pet food analysis), Codex (Sol locks all sub‑agents to itself, Luna model not found via OAuth), OpenCode (GPT‑5.6 Luna 404, Copilot header missing for Sol/Terra). Users want predictable and configurable model routing without silent overrides.
- **Configuration hierarchy and inheritance** — Claude Code (allow‑rules not matching `~/.claude/` paths), Codex (sub‑agent model inheritance ignores custom settings), OpenCode (v2 config only loads from `$HOME`, child repository ignores shared workspace configuration). A common need for transparent, hierarchical config merging.
- **Session state persistence** — Claude Code (stale state after compaction, session lifecycle), Kimi Code (goal status disappears on web refresh), OpenCode (database growth to 13 GB, no pruning), Codex (remote SSH session list empty despite existing threads). Users expect durable session state across reloads and long runs.
- **Output formatting and terminal UX** — Claude Code (word‑wrap toggle request), Kimi Code (wide markdown table scrolling), OpenCode (copy‑to‑clipboard broken). Fine‑grained control over how tool output is rendered remains a repeated ask.

## 4. Differentiation Analysis
- **Claude Code** is distinct in its focus on safety‑classifier behaviour (AUP false positives, pronoun‑memory bias), permission‑model precision (bypass modes, allow‑rule scoping), and deep integration with Anthropic‑specific model features (advisor tool, Fable 5). Its community debates ethics‑adjacent trust issues that do not appear in the other trackers.
- **OpenAI Codex** centres on multi‑agent orchestration (`multi_agent_v2`), cost management (wait tool token burn, model‑inheritance cost spikes), and desktop‑app stability (WebSocket reconnect loops, VSCode shortcuts). Its sub‑agent model locking is a uniquely Codex friction point tied to the Sol rollout.
- **Kimi Code** is comparatively lighter; today’s activity revolves around web UI polish, CLI ergonomics (daemonisation convention), internationalization, and landing the `agent-core-v2` engine behind a flag. It shows a younger ecosystem investing in onboarding (marketplace, Windows kit detection) rather than complex permission or safety layers.
- **OpenCode** differentiates through multi‑provider support (OpenAI, Ollama, GitHub Copilot as backends) and a high‑velocity community‑driven PR process (50 PRs). Its pain points span kernel‑level crashes, database bloat, and v2 config discovery — indicative of a tool that is both broad in surface and actively iterating its architecture.

## 5. Community Activity Notes
- **Issue volume:** Claude Code, Codex, and OpenCode each recorded ~50 issue updates, signalling sustained community engagement. Kimi Code’s 6 new issues reflect a smaller but equally active user base.
- **PR velocity:** OpenCode dominated with 50 active PRs (many merges), followed by Kimi Code (10 PRs). Claude Code and Codex had only 3 PRs each, all minor. This suggests OpenCode and Kimi Code maintainers are in a rapid iteration phase, while Claude Code and Codex are in a quieter patch‑accumulation mode.
- **Releases:** Only Kimi Code shipped a user‑facing update (v0.23.6, a minor behaviour change). No other tool produced a versioned release today.
- **Maintainer responsiveness:** OpenCode’s PRs directly addressed top‑voted issues (config loading, model headers, database error preservation), indicating prompt response. Claude Code’s open PRs came from a non‑core contributor, while core‑team action remained absent on long‑standing items. Codex had a core‑contributor TUI feature PR and a security fix merged, showing selective but present engagement.

## 6. Evidence-Backed Observations
1. **Windows reliability is a cross‑tool friction point.** Every digest contained multiple active Windows‑specific bugs or regressions: IDE permissions, sandbox crashes, app freezes, browser‑webview crashes, shell‑detection failures, and UI‑toggle breakage. This pattern spans all four tools and is not isolated to a single platform implementation.
2. **Rollout of flagship models creates a wave of access and compatibility issues.** Claude Fable 5’s advisor failure above 100K tokens and safety‑based downgrades, Codex’s forced Sol sub‑agent assignment and Luna 404, and OpenCode’s need for a Copilot header fix to reach GPT‑5.6 models all emerged concurrently, indicating a transient period of model‑provider tuning that affects end users.
3. **Configuration resolution bugs are a shared class of regression.** Across tools, users report that allow‑rules, model overrides, and config files are silently ignored or loaded only from unexpected directories. This suggests that hierarchical config discovery is an area where multiple projects are struggling with edge cases (symlinks, nested repos, environment variables).
4. **Long‑running session health is deteriorating.** OpenCode databases ballooning to 13 GB without pruning, Claude Code’s post‑compaction state corruption, and Kimi Code’s goal‑state loss after refresh all point to storage and memory management not yet designed for extended, continuous use. Users are hitting limits that suggest the tools’ session models need explicit lifecycle management.
5. **The community is pushing beyond single‑shot code generation toward agentic, multi‑modal, and multi‑model pipelines.** Kimi Code’s v2 engine, Codex’s multi‑agent v2 and automation‑delivery requests, and OpenCode’s extensive provider‑agnostic model handling show that the developer audience expects these CLI tools to orchestrate complex, long‑lived workflows rather than merely answer prompts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-13

---

## 1. Today's Update Brief

A moderate activity day with 50 issues updated and 3 pull requests filed, but zero new releases. The top threads center on a long-running VSCode permissions bug (#15921, 28 comments), an advisor-tool regression when using `claude-fable-5` with large transcripts (#67609, 20 comments, 38 👍), and a popular word-wrapping feature request (#43113, 51 👍). Several stale issues from the early-June AUP/safety-classifier surge were auto-closed overnight.

---

## 2. Releases

*No new releases in the past 24 hours.*

---

## 3. Hot Issues

### #15921 — VSCode Extension: `.claude/settings.local.json` Permissions Not Respected (Windows)
**28 comments | 28 👍 | Open since 2025-12-31**
Bash/Write/Edit tools in the VSCode extension ignore `bypassPermissions` mode and `settings.local.json` rules entirely, prompting for every operation despite explicit allow rules. Affects core IDE workflow on Windows. A repro case has been confirmed but no fix has landed after 7+ months.
→ https://github.com/anthropics/claude-code/issues/15921

### #67609 — Advisor Tool Returns "unavailable" with `claude-fable-5` Above ~100K Tokens
**20 comments | 38 👍 | Open since 2026-06-11**
The server-side advisor tool fails reliably when the transcript exceeds roughly 100K tokens and the model is `claude-fable-5`. Below that threshold the same configuration works. Effectively disables the advisor in long-running sessions on Anthropic's flagship model.
→ https://github.com/anthropics/claude-code/issues/67609

### #43113 — Feature Request: Emit Long Lines and Let Terminal Handle Word Wrapping
**10 comments | 51 👍 | Open since 2026-04-03**
Users want a flag to stop Claude Code from inserting hard newlines into prose/markdown output, deferring wrapping to the terminal emulator instead. The current behavior breaks copy-paste, search, and resizing workflows. Strong community support; no maintainer response yet.
→ https://github.com/anthropics/claude-code/issues/43113

### #57132 — Allow Rules Under `~/.claude/` Show as Loaded but Don't Match at Runtime (Linux)
**9 comments | Open since 2026-05-08**
Allow rules targeting paths under `~/.claude/` in `settings.json` are displayed as active in `/permissions` output but never actually match at runtime, triggering permission prompts for every edit. Affects all four access types (bash, write, edit, read). A subtle config-trust regression.
→ https://github.com/anthropics/claude-code/issues/57132

### #52477 — Claude Overrides Explicit Pronouns in User Memory (Bias)
**8 comments | 2 👍 | Open since 2026-04-23**
Users report that Claude rewrites pronoun preferences stored in memory, defaulting to male-coded pronouns despite explicit user instructions to the contrary. Persists across sessions and models. Low reaction count but touches on model-behavior trust.
→ https://github.com/anthropics/claude-code/issues/52477

### #76094 — Cowork Sandbox `sdk_install` Crashes on Windows (Regression SDK 2.1.181 → 2.1.202)
**5 comments | Open since 2026-07-09**
The Cowork sandbox VM guest crashes with "connection forcibly closed" during `sdk_install` on Windows. Confirmed regression between SDK versions 2.1.181 and 2.1.202. Blocks sandboxed multi-agent workflows for Windows users.
→ https://github.com/anthropics/claude-code/issues/76094

### #76694 — Cowork: "Choose a Folder" Context Menu Replaced by Chat-Style Upload-Only Menu (macOS)
**4 comments | Open since 2026-07-11**
After the Chat/Cowork merge, the desktop app's context menu for new Cowork projects lost the "Choose a folder" option, leaving only a chat-style knowledge-upload menu. Breaks project-scoped workflows on macOS.
→ https://github.com/anthropics/claude-code/issues/76694

### #76743 — Windows: Click-to-Focus Activates Pending Permission Dialog Option
**4 comments | Open since 2026-07-11**
On Windows, clicking a Claude Code window to regain focus when a permission prompt is pending inadvertently submits whatever button the cursor lands on (approve/reject). Classic focus-stealing / click-through UX bug with security implications.
→ https://github.com/anthropics/claude-code/issues/76743

### #65873 — False-Positive Safety/AUP Interruptions During Legitimate Trading-App Development
**5 comments | Closed (stale) | Created 2026-06-06**
Developing a personal algorithmic-trading app against the Hyperliquid testnet repeatedly triggered AUP safety pauses. The classifier appeared to flag financial-domain vocabulary despite testnet-only usage. Closed as stale alongside several other June-6 AUP reports (#65846, #65890, #65891, #65892).
→ https://github.com/anthropics/claude-code/issues/65873

### #77006 — Model Automatically Downgraded from Fable 5 to Opus 4.8 for Pet Food Content Analysis
**1 comment | Open since 2026-07-12**
User analyzing pet food ingredient labels and specifications reports the model being forcibly downgraded from Claude Fable 5 to Opus 4.8, apparently due to a "biology hazard" classification trigger. Highlights ongoing tension between safety classifiers and legitimate non-code content analysis.
→ https://github.com/anthropics/claude-code/issues/77006

---

## 4. Key PR Progress

*Only 3 PRs were active in the reporting period; all are small fixes or documentation changes.*

### #76986 — Fix: Preserve Existing Labels When Auto-Closing Duplicate Issues
**Author: @AliAltivate | Open**
The `auto-close-duplicates.ts` script currently replaces the entire label set with `['duplicate']` when closing an issue. This PR changes the behavior to append the `duplicate` label while preserving any existing labels (e.g., `bug`, `platform:windows`), preventing metadata loss.
→ https://github.com/anthropics/claude-code/pull/76986

### #76985 — Fix: Read Full Multi-Line Description in `validate-agent.sh`
**Author: @AliAltivate | Open**
The agent validation script's `grep`-based frontmatter extraction only captured the first line of multi-line `description` fields. This PR switches to an `awk`-based parser that reads until the next YAML key or `---` delimiter, fixing false validation failures for agents with paragraph-length descriptions.
→ https://github.com/anthropics/claude-code/pull/76985

### #15165 — Update README.md (Closed)
**Author: @nicholasoxford | Closed**
Updated a broken documentation link in the README. A minor housekeeping PR from late December 2025 that was finally closed during this period.
→ https://github.com/anthropics/claude-code/pull/15165

---

## 5. Feature Request Clusters

**Terminal Output & Rendering Control**
Multiple issues request finer control over how Claude Code formats terminal output. The most prominent is #43113 (51 👍) asking for a flag to emit long prose lines and defer wrapping to the terminal. Related: #77003 requests model/effort/mode indicators in the VSCode extension chat input to match desktop-app parity, and #75196 flags missing RTL text rendering support for Persian/Arabic/Hebrew in the chat panel.

**Session Lifecycle Management**
Users want more deliberate control over sessions. #58215 (closed) requested that agent-view sessions require manual completion or archiving rather than auto-completing. #77011 (closed same-day) demanded auto-save on every interaction with a default session name without requiring manual `/rename` commands. These signal friction around session persistence and state management.

**Permissions Model Refinements**
Several requests touch on permissions UX: bypass-permissions mode inconsistencies (#15921), allow-rule matching gaps (#57132), and the permanent-vs-session scoping confusion called out in #65848. Users want predictability in when and how permission rules apply, particularly in IDE integrations.

---

## 6. Developer Pain Points

**AUP / Safety Classifier False Positives**
A cluster of issues—mostly filed around June 5–6, 2026 and now closed as stale—reported AUP interruptions during legitimate development: trading-app code (#65873), RMM/remote-desktop tools (#65846), Minecraft modding (#65891), git push operations (#65892), and even pet food label analysis (#77006). The classifier appears to over-trigger on cybersecurity-adjacent and biology-adjacent vocabulary. A fresh issue (#77002) on simple arithmetic queries suggests the problem hasn't been fully resolved.

**Windows Platform Friction**
Windows-specific bugs remain a recurring theme: IDE permissions not respected (#15921), PowerShell locale-dependent failures (#59833), Cowork sandbox regressions (#76094), click-through permission dialogs (#76743), desktop launch failures after updates (#65072), and MSIX migration orphaned shortcuts (#76980). Windows users face a notably higher defect surface than macOS or Linux counterparts.

**Post-Compaction / Long-Session State Corruption**
Issues like #50724 (stale skill arguments re-surfacing after compaction) and #63792 (dynamic tool loading mutating signed thinking blocks) indicate edge cases around context window management where internal state can become inconsistent, leading to dropped user messages or 400 API errors. These are hard to reproduce but disruptive when they occur.

**Model Availability & Context Limitations**
Users on paid Max plans report hitting "1M context required" errors on Sonnet 4.6 despite setting context to Medium (#63817, #65818), and the advisor tool becomes unavailable on Fable 5 above 100K tokens (#67609). These suggest either opaque context-accounting or capacity-gating that contradicts user-facing controls.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-13

## Today’s Update Brief
No new releases were published. The issue tracker saw 50 items updated, with heavy attention on sub-agent model control after the GPT-5.6 Sol rollout, a long‑standing WebSocket reconnect loop, and several Windows‑specific stability problems. Three pull requests were active, delivering an auth‑tampering fix, a TUI prompt‑editing feature, and a composer completion improvement.

---

## Releases
No new releases in the past 24 hours.

---

## Hot Issues

1. **[GPT‑5.6 Sol cannot specify subagent models, forcing all subagents to also be Sol instances](https://github.com/openai/codex/issues/31814)**
   - **Affected workflow:** Multi‑agent orchestration with `multi_agent_version = "v2"`. GPT‑5.6 Sol’s model metadata forces `MultiAgentV2` and hides sub‑agent model selection, so every spawned sub‑agent is locked to Sol.
   - **Impact:** Developers who rely on cheaper or specialised models for sub‑agents (e.g., Luna mini) face unexpected cost and latency spikes. Manual overrides are ignored.
   - **Community reaction:** 56 comments, 121 👍 — one of the most active threads, with many workaround requests and complaints about silent configuration overrides.

2. **[Frequent reconnect loop in Codex App: websocket closed by server before response.completed](https://github.com/openai/codex/issues/18960)**
   - **Affected workflow:** All streaming interactions in the desktop app. The WebSocket is torn down prematurely, causing infinite reconnection loops.
   - **Impact:** Users on macOS (Pro subscription) see constant “Reconnecting…” banners and lost streaming responses, making the app unusable for hours.
   - **Community reaction:** 51 comments, 39 👍 — a long‑standing regression with many corroborating reports.

3. **[Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources](https://github.com/openai/codex/issues/20214)**
   - **Affected workflow:** General app responsiveness. Stutters during typing, model switching, and even idle periods, despite 32 GB RAM and a Ryzen 5600.
   - **Impact:** Windows users on Plus subscriptions experience laggy UI that gets worse over time, requiring frequent app restarts.
   - **Community reaction:** 34 comments, 48 👍 — consistent frustration, with several users sharing video recordings.

4. **[Built‑in `wait` tool capped at ~50s causes massive token burn on long waits (multi_agent_v2 re‑samples every 50s)](https://github.com/openai/codex/issues/32640)**
   - **Affected workflow:** CLI automations that need to wait for external processes (CI, deploys). The `wait` tool caps at ~50 seconds, forcing the agent to repeatedly re‑invoke and burn context tokens.
   - **Impact:** Token usage balloons when waiting for tasks longer than 50 s (e.g., `npm install`, DB migration). No native way to extend the timeout.
   - **Community reaction:** 4 comments (fresh issue), but high relevance given the Plus Plan’s token caps. First reports indicate a 3–5× token increase for typical long waits.

5. **[Tool‑backed subagents silently inherit Sol Ultra instead of custom agent model settings](https://github.com/openai/codex/issues/32587)**
   - **Affected workflow:** App sessions that define custom sub‑agent models. When tools spawn sub‑agents, the `model` override is ignored and Sol Ultra is used.
   - **Impact:** Custom‑model instructions are silently discarded; expensive models run where cheaper alternatives were intended. No visible warning.
   - **Community reaction:** 2 comments, but filed shortly after the GPT‑5.6 Sol rollout — likely part of the broader model‑inheritance problem.

6. **[Codex App SSH remote project shows “No chats” while remote threads exist in state DB](https://github.com/openai/codex/issues/27284)**
   - **Affected workflow:** Remote development via SSH. The app’s session list is empty even though the remote Codex CLI server has valid threads in its state DB.
   - **Impact:** Users cannot resume or review previous conversations on remote machines, forcing them to re‑start work from scratch.
   - **Community reaction:** 8 comments, 4 👍 — reported with multiple version combos (macOS host, Linux remote).

7. **[Codex Desktop in‑app Browser crashes the main app during webview navigation](https://github.com/openai/codex/issues/30178)**
   - **Affected workflow:** Windows Desktop’s built‑in Chromium‑based browser. Navigation within the webview causes the entire app process to exit without error.
   - **Impact:** Computer Use / Browser features are unusable, and crashes may lose unsaved state in other parts of the app.
   - **Community reaction:** 10 comments, no 👍 yet, but detailed reproduction steps provided.

8. **[fetch‑codex‑manual.mjs fails after codex‑manual.md redirect drops x‑content‑sha256](https://github.com/openai/codex/issues/31984)**
   - **Affected workflow:** The built‑in `openai‑docs` skill helper can no longer fetch the Codex manual because the publish redirect to `learn.chatgpt.com` removes the expected integrity header.
   - **Impact:** CLI skills that need the manual (e.g., doc‑aware suggestions) break silently, degrading assistant knowledge.
   - **Community reaction:** 5 comments, 13 👍 — quick diagnosis, with a temporary workaround shared.

9. **[VS Code extension Shift+Tab no longer toggles Plan Mode after latest update](https://github.com/openai/codex/issues/32147)**
   - **Affected workflow:** IDE extension’s Plan Mode toggle shortcut. The keybinding stopped working on Windows.
   - **Impact:** Frequent Plan Mode users must reach for the mouse, slowing down iterative planning.
   - **Community reaction:** 6 comments, 6 👍 — acknowledged as a regression immediately after the extension update.

10. **[Windows Remote Control gets permanently stuck in “Reconnecting…” with no way to recover remotely](https://github.com/openai/codex/issues/31973)**
    - **Affected workflow:** QR‑based pairing between ChatGPT mobile and Windows Codex Desktop. The connection never recovers after a transient network drop, and the remote user cannot trigger a re‑pair.
    - **Impact:** Users must physically return to the host machine to restart the app.
    - **Community reaction:** 5 comments, no 👍 — but emphasises the fragility of the remote pairing on Windows.

---

## Key PR Progress

Only three pull requests were updated in the last 24 hours; all are summarised below.

1. **[preserve PAT auth against host token injection](https://github.com/openai/codex/pull/29898) (CLOSED)**
   - Blocks `account/login/start` calls that carry `chatgptAuthTokens` while personal‑access‑token authentication is active. Adds an end‑to‑end regression test for bearer token injection and 401 recovery. Strengthens CLI security against host‑side tampering.

2. **[feat(tui): edit previous prompts using session forks](https://github.com/openai/codex/pull/30504) (OPEN)**
   - Implements prompt editing in the TUI by branching the conversation instead of destructive `thread/rollback`. This keeps source thread history intact and avoids mutation‑based loss of turns. A core contributor’s feature that many CLI users have requested.

3. **[Improve composer completion target resolution](https://github.com/openai/codex/pull/32628) (CLOSED, automated)**
   - Refines `@` and `$` completion targeting in the composer, handling atomic text elements and line breaks, and preferring the nearest editable mention when file, skill, and plugin candidates compete. A bot‑generated polish that reduces mis‑completions.

---

## Feature Request Clusters

- **Automation triggers & delivery** — Users want explicit “Run now” on existing automations ([#28064](https://github.com/openai/codex/issues/28064)) and the ability to deliver all runs into a single persistent thread instead of creating a new chat each time ([#29184](https://github.com/openai/codex/issues/29184)). Both aim to make scheduled Codex agents more practical for continuous monitoring.

- **Local instruction overlays (AGENTS.local.md)** — A request to add additive `AGENTS.local.md` files, `@`‑reference expansion, and source attribution similar to Claude Code ([#28739](https://github.com/openai/codex/issues/28739)). The goal is finer‑grained project customisation without forking global agent definitions.

---

## Developer Pain Points

- **Windows‑specific stability & feature gaps** — Freezing/stuttering ([#20214](https://github.com/openai/codex/issues/20214)), in‑app browser crashes ([#30178](https://github.com/openai/codex/issues/30178)), missing MCP `node_repl` tool ([#30486](https://github.com/openai/codex/issues/30486) – now closed), and remote pairing failures ([#31387](https://github.com/openai/codex/issues/31387), [#31973](https://github.com/openai/codex/issues/31973)) continue to make Windows a second‑class experience.

- **Sub‑agent model inheritance overriding user settings** — Multiple issues ([#31814](https://github.com/openai/codex/issues/31814), [#32587](https://github.com/openai/codex/issues/32587), [#31097](https://github.com/openai/codex/issues/31097)) show that GPT‑5.5/‑5.6 models force `MultiAgentV2` and silently lock sub‑agents to expensive Sol models, ignoring custom configurations. This frustrates both cost‑conscious developers and power users who rely on model diversity.

- **WebSocket reconnect loops** — The long‑standing [#18960](https://github.com/openai/codex/issues/18960) continues to disrupt streaming sessions, with no permanent fix in sight despite 51 comments.

- **Token waste on built‑in tools** — The `wait` tool’s 50 s cap ([#32640](https://github.com/openai/codex/issues/32640)) causes disproportionate token consumption on long waits, while CLI SQLite lock contention ([#20213](https://github.com/openai/codex/issues/20213)) can dead‑lock multi‑terminal usage.

- **Documentation fetch integrity** — The recent redirect change dropping `x‑content‑sha256` broke the official manual retrieval ([#31984](https://github.com/openai/codex/issues/31984)), highlighting fragility in skill helpers that depend on external endpoints.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

**Kimi Code Community Digest – 2026-07-13**
Daily snapshot of development activity across the MoonshotAI/kimi-code repository.

---

### 1. Today’s Update Brief
The community focused heavily on web UI fixes (auth, token persistence, table rendering, reconnection state) and progress toward the v2 agent engine. A patch release (v0.23.6) shipped a minor prompting behaviour change, while a flurry of PRs landed experimental v2 engine support and Windows MSYS2 detection. Six new issues spanned CLI ergonomics, Windows kit detection, and API quirks.

---

### 2. Releases
**@moonshot-ai/kimi-code@0.23.6** (patch)
- [#1550](https://github.com/MoonshotAI/kimi-code/pull/1550) — When a question prompt is dismissed, the assistant now treats it as the user choosing not to answer, avoiding stalled workflows.

---

### 3. Hot Issues (all 6 from the last 24h)
1. **[#1560 – kimi web: Bad DX and Unix CLI convention violation](https://github.com/MoonshotAI/kimi-code/issues/1560)**
   `kimi web` forces daemon-style backgrounding without a flag; a user argues this violates modern Unix CLI expectations where daemonization must be explicit (`--daemon`/`-d`).
2. **[#1584 – web刷新后，goal状态丢失](https://github.com/MoonshotAI/kimi-code/issues/1584)**
   After refreshing the web UI, the current goal status disappears and only reappears on the next goal update—poor UX during long sessions.
3. **[#1579 – Windows bash detection fails with native MSYS2 git](https://github.com/MoonshotAI/kimi-code/issues/1579)**
   Kimi Code fails to start on Windows when git is installed via a native MSYS2 environment (ucrt64/clang64/clangarm64). The shell probe only knew the legacy `mingw64` prefix.
4. **[#1569 – API /usages totalQuota field returns bug](https://github.com/MoonshotAI/kimi-code/issues/1569)**
   `GET /coding/v1/usages` always returns `"totalQuota": 99`, regardless of the actual monthly quota, breaking any quota-aware integrations.
5. **[#1568 – Document Windows Git Bash path pitfalls](https://github.com/MoonshotAI/kimi-code/issues/1568)**
   Requests docs/diagnostics for failures caused by Windows-native commands emitting Windows-style paths (e.g. `E:\...`) when Kimi Code executes through Git Bash.
6. **[#1566 – Feature Request: Open marketplace JSON submission/review process](https://github.com/MoonshotAI/kimi-code/issues/1566)**
   Asks for a community process to submit and review plugin marketplace entries, opening the ecosystem beyond personal/team custom URLs.

---

### 4. Key PR Progress (10 notable pull requests)
1. **[#1441 feat(v2): land agent-core-v2 engine and kap-server behind experimental flag](https://github.com/MoonshotAI/kimi-code/pull/1441)** (closed)
   Integrates the new `agent-core-v2` and `kap-server`, toggled by an experimental flag—a major step toward the v2 runtime.
2. **[#1543 feat(tui): run interactive shell on agent-core-v2 with deferred session creation](https://github.com/MoonshotAI/kimi-code/pull/1543)**
   Wires the TUI to `agent-core-v2` via a new facade, replacing the legacy SDK integration.
3. **[#1359 refactor: route v2 context changes through context ops](https://github.com/MoonshotAI/kimi-code/pull/1359)**
   Separates context mutations (append, remove, compact, undo) from wire replay concerns in the v2 agent, cleaning up ownership.
4. **[#1561 feat(i18n): add multi-language internationalization support (zh/en)](https://github.com/MoonshotAI/kimi-code/pull/1561)**
   Community contribution: lightweight i18n engine with Chinese and English locales across CLI, TUI, and Web UI.
5. **[#1573 feat: add /diff slash command to view session and git changes](https://github.com/MoonshotAI/kimi-code/pull/1573)**
   In-app `/diff` command to review AI tool edits and git working-tree changes without leaving the TUI.
6. **[#1567 fix(web): persist server access token across tabs and browser restarts](https://github.com/MoonshotAI/kimi-code/pull/1567)** (closed)
   Stops the frequent re‑entry of access tokens by persisting the server token in local storage.
7. **[#1574 fix(web): keep connecting splash and retry first-load auth check](https://github.com/MoonshotAI/kimi-code/pull/1574)** (closed)
   Fixes a transient first-visit redirect to `/login` by retrying the auth check and showing a connecting splash.
8. **[#1475 fix(web): auto-enable default thinking effort when switching to an effort-capable model](https://github.com/MoonshotAI/kimi-code/pull/1475)** (closed)
   When switching to a model that supports thinking effort, the control now automatically enables the default effort instead of staying off.
9. **[#1577 fix(web): wide markdown tables scroll internally and break out on desktop](https://github.com/MoonshotAI/kimi-code/pull/1577)** (closed)
   Wraps wide markdown tables in a scroll container so they remain readable without breaking the message layout.
10. **[#1580 fix(kaos): detect bash when git comes from a native MSYS2 toolchain](https://github.com/MoonshotAI/kimi-code/pull/1580)**
    Extends the bash-finding logic to recognise new MSYS2 environments (clang64, ucrt64, clangarm64), fixing #1579.

---

### 5. Feature Request Clusters
- **CLI behaviour / foreground vs. daemon** – explicit control over backgrounding (`kimi web` default daemonisation).
- **Web session resilience** – preserving goal state across refreshes and improving reconnection UX.
- **Windows toolchain support** – broader shell detection for MSYS2 variants and documentation of path pitfalls.
- **Community plugin ecosystem** – open submission/review for the plugin marketplace JSON.
- **In-app developer tooling** – a `/diff` command to inspect changes directly.
- **API correctness** – accurate quota reporting in the `/usages` endpoint.

---

### 6. Developer Pain Points
- **Web authentication friction**: transient login redirects on first visit and repeated token re‑entry, now partially addressed by #1574 and #1567.
- **Web state loss**: refreshing the web interface clears the current goal display, forcing users to wait for the next update cycle.
- **Windows startup failures**: Kimi Code cannot detect bash when git is from a native MSYS2 toolchain, blocking use on those setups.
- **Inaccurate API quotas**: the `totalQuota` field stuck at 99 undermines any programmatic usage monitoring or cost controls.
- **Surprise backgrounding**: `kimi web` running as a daemon by default breaks scripting patterns and violates user expectations of modern CLI tools.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-07-13

### Today’s Update Brief
The repository saw no versioned releases today, but activity remained high: 50 issues were updated and 50 pull requests were touched, with many discussions around newly introduced GPT-5.6 models, a surge of OpenCode v2 early‑adopter feedback, and long‑standing pain points like clipboard behaviour and database growth. Two automated verification evidence artefacts were generated for PRs #36567 and #36516.

### Releases
*No new official version released in the last 24 hours. The tagged ‘releases’ (`pr-36567-evidence`, `pr-36516-evidence`) are automated verification snapshots, not user‑facing binaries.*

---

### Hot Issues

1. **Copy To Clipboard is not working** [#4283](https://github.com/anomalyco/opencode/issues/4283)
   *Open, 113 comments, 105 👍*
   Users cannot copy text selected in the OpenCode response pane. The issue persists across versions (1.0.62 and later) and terminals, severely disrupting everyday copy‑paste workflows. The community has provided extensive OS/environment details and workarounds, but no fix is yet available.

2. **GPT-5.6 Luna returns model not found with ChatGPT OAuth** [#36140](https://github.com/anomalyco/opencode/issues/36140)
   *Open, 24 comments, 84 👍*
   `gpt-5.6-luna` is listed under the built‑in OpenAI provider, but requests fail with HTTP 404 despite the same OAuth account working for `gpt-5`. The issue is reproducible in a clean checkout and affects multiple users, blocking access to the latest model for OAuth‑based ChatGPT accounts.

3. **OpenCode 1.4.3 hangs with local Ollama provider on simple prompts** [#22132](https://github.com/anomalyco/opencode/issues/22132)
   *Open, 15 comments, 5 👍*
   When using a local Ollama backend through `@ai-sdk/openai-compatible`, simple prompts (e.g., `cinema mode`) cause the session to hang, even though direct `/v1/chat/completions` calls succeed. This makes local experimentation unreliable and is a blocker for offline‑first workflows.

4. **[URGENT] Zen paid balance still hits FreeUsageLimitError** [#33318](https://github.com/anomalyco/opencode/issues/33318)
   *Open, 8 comments, 0 👍*
   Users who have added a paid Zen balance encounter “Free usage exceeded” errors within an hour, despite active credits. The daily free‑usage limit logic appears to ignore paid balances, effectively locking users out of the service they paid for.

5. **New Layout and Designs — Plan/Build switch broken** [#31972](https://github.com/anomalyco/opencode/issues/31972)
   *Open, 7 comments, 6 👍*
   With the “New Layout and Designs” feature flag enabled, toggling between Plan and Build modes stops working under Windows 10. Both the UI button and `Ctrl+.` shortcut become unresponsive, breaking the core Plan/Build workflow for users who opted into the new UI.

6. **Kernel panic (zone map exhaustion) via EndpointSecurity** [#32002](https://github.com/anomalyco/opencode/issues/32002)
   *Open, 5 comments, 0 👍*
   A reproducible kernel panic on macOS 26.3 linked to `opencode.exe` exhausting the `data.kalloc.1024` zone through the EndpointSecurity kext. This is a system‑wide crash that forces a reboot, making OpenCode dangerous on affected macOS installations.

7. **Unbounded growth of the `event` table: opencode.db reaches 13GB+** [#33356](https://github.com/anomalyco/opencode/issues/33356)
   *Open, 4 comments, 0 👍*
   The local SQLite database grows without limit because historical `message.updated.1` snapshots are never pruned. Two long‑running instances reached 13 GB each, filling a 22 GB volume to 99% and causing disk‑full errors. Multiple related reports (#33356, #32005, #16777) confirm this is widespread.

8. **v2 config: child repositories cannot combine global and shared workspace configuration** [#36539](https://github.com/anomalyco/opencode/issues/36539)
   *Open, 3 comments, 0 👍*
   In OpenCode v2, the background service ignores the shared workspace configuration (`OPENCODE_CONFIG_DIR`) when launched inside a child git repository. Only the repository‑local config is applied, breaking setups that rely on a common configuration across nested projects.

9. **2.0 cli: global config only loads when cwd is $HOME** [#36485](https://github.com/anomalyco/opencode/issues/36485)
   *Open, 3 comments, 0 👍*
   The v2 CLI (`opencode2`) loads `~/.config/opencode/opencode.jsonc` only when the working directory is exactly `$HOME`; running from any subfolder (e.g., `~/dev/project`) silently ignores global MCP servers, instructions, and settings.

10. **2.0 TUI crash: 404 on /vcs/diff** [#36510](https://github.com/anomalyco/opencode/issues/36510)
    *Open, 2 comments, 0 👍*
    The v2 TUI crashes with a 404 error when fetching VCS diff information from the local server. This prevents viewing diffs and may be related to incorrect URL encoding or a missing backend endpoint.

---

### Key PR Progress

1. **fix(core): merge model.request.headers into SDK options** [#36579](https://github.com/anomalyco/opencode/pull/36579)
   Custom headers (`User-Agent`, `x-api-key`) defined in provider configuration are currently dropped before reaching the SDK. This PR ensures they are merged, restoring compatibility with services like AgentRouter and `@ai-sdk/anthropic`.

2. **fix(core): preserve sqlite error details** [#36570](https://github.com/anomalyco/opencode/pull/36570)
   Addresses the database growth issue (#33356) by preserving original SQLite error messages instead of the generic “Failed to execute statement”, making it easier to diagnose compaction and storage failures.

3. **fix(core): load config across git boundaries** [#36577](https://github.com/anomalyco/opencode/pull/36577)
   Reverts a V1 regression and makes v2 config discovery search ancestor directories across project/git boundaries, fixing the child‑repository configuration problem (#36539).

4. **fix(app): prevent terminal mount from stealing focus** [#36576](https://github.com/anomalyco/opencode/pull/36576)
   Terminals will no longer automatically steal input focus on mount; focus is now only given for explicit actions like Ctrl+backtick or terminal tab selection, improving multitasking in the UI.

5. **fix(github-copilot): set Copilot-Integration-Id header to vscode-chat** [#36574](https://github.com/anomalyco/opencode/pull/36574)
   Newer GPT‑5.6 models (`gpt-5.6-luna`, `sol`, `terra`) return 403 Forbidden from the Copilot chat completion endpoint without the `Copilot-Integration-Id: vscode-chat` header. This PR adds that header, restoring access (#36575).

6. **fix(opencode): support mise-managed upgrades** [#36573](https://github.com/anomalyco/opencode/pull/36573)
   OpenCode can now apply updates for installations managed by the `mise` version manager, which were previously detected but not upgradeable because mise was treated as a non‑upgradeable package manager (#36572).

7. **feat(tui): add agent picker preview** [#36571](https://github.com/anomalyco/opencode/pull/36571)
   The agent picker now shows a preview pane with the selected agent’s description and model name, alongside the existing model picker, giving a clearer overview when switching agents.

8. **fix(core): tolerate AlreadyExists in FSUtil.ensureDir** [#36542](https://github.com/anomalyco/opencode/pull/36542)
   Fixes a race‑condition crash introduced in v1.17.15 where `ensureDir` would fail when the directory already existed, resolving startup errors under certain concurrence scenarios (#35828).

9. **fix(core): avoid duplicate image bytes in tool events** [#36524](https://github.com/anomalyco/opencode/pull/36524)
   Reduces storage bloat by preventing image tool output from storing the same base64 bytes in both `structured.content` and the model‑visible `content[]` array, addressing #36343.

10. **fix(tui): restore clicked reverted prompt** [#36567](https://github.com/anomalyco/opencode/pull/36567)
    Clicking the revert action on a user message now properly restores the message content (including file and agent references) into the prompt, matching the behaviour of the `/undo` command.

---

### Feature Request Clusters

- **Pedagogical / Guide Modes**
  Renewed interest

</details>