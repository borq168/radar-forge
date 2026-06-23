# AI CLI Tools Community Digest 2026-06-23

> Generated: 2026-06-23 00:34 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-23

## 1. Daily Cross-Tool Overview

Today saw moderate-to-high activity across the tracked AI CLI tools, with **OpenAI Codex** and **Qwen Code** leading in community engagement volume. Four of seven tools shipped releases: Claude Code (v2.1.186), OpenAI Codex (v0.142.0 stable), GitHub Copilot CLI (v1.0.64-2/-3), and Kimi Code (v1.48.0). A dominant cross-cutting theme is **MCP lifecycle fragility** — three tools (Claude Code, Copilot CLI, Kimi Code) have active issues about MCP servers failing to start, stalling, or consuming excessive resources. A **rate-limit cost regression** at OpenAI Codex (Issue #28879, 239 👍) is the single most-upvoted pain point across all tools today. Qwen Code is notable for an unusual surge of 20+ automated input-validation PRs from a single contributor, prompting a maintainer to draft batch-detection guards.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Opened (24h) | Release Today |
|---|---|---|---|
| **Claude Code** | ~50 open items updated | 4 new PRs | v2.1.186 |
| **OpenAI Codex** | 10 hot issues tracked (high activity on #28879) | ~10 key PRs | v0.142.0 stable + 4 alphas |
| **Gemini CLI** | 10 hot issues tracked (stable activity) | 10 new PRs | None |
| **GitHub Copilot CLI** | 19 updates across issue tracker | 0 PRs updated | v1.0.64-2, v1.0.64-3 |
| **Kimi Code** | 6 new issues filed | 3 PRs (2 closed) | v1.48.0 |
| **OpenCode** | 10 hot issues (Memory Megathread at 99 comments) | 10 key PRs (3 merged) | None |
| **Qwen Code** | 50 issues updated | 50 PRs (~25 merged) | v0.18.5-nightly |

**Notable counts**: Qwen Code's 50 PRs is an outlier driven by automated contributor @tt-a1i (11+ validation PRs). Claude Code's 50 updated items reflects high ongoing issue churn. OpenCode's Memory Megathread (#20695) passed 99 comments with no resolution.

---

## 3. Shared Feature Directions

### MCP Lifecycle & Reliability (4 tools)
- **Claude Code**: #64366 (unbounded MCP fan-out causing kernel panics), #70156 (subagents stalling waiting for MCP approval), #70015 (request for lazy MCP startup flag)
- **GitHub Copilot CLI**: #3887 (MCP install fails to interpolate variables), #3162 (false policy blocks on registry-listed servers), #1579 (MCP server instructions ignored)
- **Kimi Code**: #2457 (deleted MCP servers auto-discovered causing 400 errors), #2469 (wrong working directory in `kimi web`), #2464 (MCP not loaded in ACP mode)
- **OpenCode**: #28567 (request for full MCP spec support: roots, sampling), #32832 (image attachments broken in MCP tools)

### Session & Context Persistence (3 tools)
- **Claude Code**: #53717 (session content lost after auto-update), #12908, #69003, #70175 (data loss after disk-full or update)
- **OpenAI Codex**: #15347 (thread history lost on workspace move), #14370 (threads hidden after app restart)
- **Kimi Code**: #1283 (persistent memory across sessions — oldest open feature request, Feb 2026)

### Terminal UI & Rendering (3 tools)
- **Claude Code**: #18170 (copy/paste includes unwanted indentation, 265 👍), #29937 (tmux corruption)
- **Gemini CLI**: #25166 (shell hang showing "Waiting input" after completion), #21924 (terminal resize flicker)
- **OpenCode**: #32574 (tool call start times implausibly close to end), #32046 (renderer freezes on large diffs)

### Cross-Platform Compatibility Gaps (3 tools)
- **Claude Code**: #50270 (Termux/Android broken since v2.1.113 — glibc dependency), #51143 (Windows blank screen)
- **OpenAI Codex**: #14461 (WSL startup crash on Windows), #13846 (mapped network drives losing threads)
- **GitHub Copilot CLI**: #2337 (WSL credential manager integration)

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|---|
| **Primary focus today** | MCP auth UX, Cowork reliability | Pricing/rate-limit regression, session log bloat | Subagent reliability, memory system quality | Proxy support, MCP registration fixes | MCP configuration bugs, tool-call force-stop | Memory leaks, VCS integration, worker crashes | Input validation hardening, provider customization |
| **Target user** | Power users, multi-agent workflows | Plus/Pro plan subscribers | Enterprise, GCP-integrated teams | GitHub ecosystem, CI pipelines | MoonshotAI platform users | Plugin developers, advanced users | Open-source community, custom providers |
| **Release cadence** | Rapid patches (v2.1.186) | Weekly stable + alpha trains | Slower (no release today) | Multiple patches (v1.0.64-2/-3) | Occasional patches (v1.48.0) | No release today — PR-driven | Nightly releases |
| **Technical approach** | Native binary, glibc-dependent | Rust-based, Electron UI | Node.js, GCP-native | TypeScript, GitHub integration | TypeScript, reasoning-focused | TypeScript, plugin architecture | TypeScript, ACP protocol |
| **Key differentiator today** | CLI-first MCP auth flow | Usage credit management UI | AST-aware tooling investigation | Inline image rendering | Force-stop on tool-call loops | Standalone v2 session flow | Hot-reload MCP servers |

---

## 5. Community Activity Notes

**Highest raw issue/PR volume**: **Qwen Code** (50 issues, 50 PRs) — though ~40% of PRs are automated validation fixes from one contributor (@tt-a1i). **Claude Code** maintains high churn but low resolution velocity on long-standing bugs.

**Most active single issue**: **OpenAI Codex #28879** (rate-limit cost regression, 239 👍, 117 comments) — no maintainer resolution posted yet. This is the strongest community consensus on a problem across all tracked tools today.

**Release leaders**: **GitHub Copilot CLI** shipped two patches (v1.0.64-2 and v1.0.64-3) addressing proxy support, inline images, and session resume fixes. **Claude Code** added CLI-based MCP authentication. **OpenAI Codex** released v0.142.0 stable with usage-credit management.

**Maintainer responsiveness gaps**:
- **Claude Code**: #18170 (copy/paste indentation, 265 👍, open since Jan) and #50270 (Android broken, since April) have no resolution.
- **Kimi Code**: #1283 (memory system) has no maintainer response since Feb.
- **OpenCode**: Memory Megathread #20695 explicitly asks users not to suggest AI fixes — no resolution yet.

**Spam/automation concerns**: Qwen Code maintainers observed 20 automated PRs in one day and drafted PR #5723 to add batch-detection guards. OpenCode also saw several closed issues flagged as spam.

---

## 6. Evidence-Backed Observations

1. **MCP server lifecycle is the most fragile cross-tool integration point.** Four tools have open issues where MCP servers fail to start, stall, consume unbounded memory, or misbehave across subagent/Cowork sessions. The specific failure modes differ (Claude Code: kernel panics from fan-out; Copilot CLI: false policy blocks; Kimi Code: zombie servers; OpenCode: missing image rendering), but the underlying pattern is consistent: MCP tooling is still maturing and introduces brittleness in multi-agent or long-running workflows.

2. **Session data durability is a persistent concern across at least three tools.** Multiple issues describe lost conversation history after updates, disk-full events, workspace moves, or app restarts. The failure modes are similar (content deleted from persisted files, threads dissociated from paths, empty JSONL after migration), suggesting a systemic gap in checkpointing or recovery design rather than isolated bugs.

3. **Input validation hardening is a concentrated effort at Qwen Code today.** The 11+ PRs from @tt-a1i targeting fractional/negative/invalid numeric parameters (max connections, max sessions, timeouts, file offsets) indicate either systematic fuzzing or automated audit tooling. Maintainers merged most fixes rapidly but also flagged concern about review noise, suggesting this is a burst of automated contribution rather than an ongoing process.

4. **Rate-limit and cost regressions are the top user frustration at OpenAI Codex.** Issue #28879 (10–20× per-token cost jump with no model change) has 239 👍 and 117 comments — the highest engagement of any single issue across all tracked tools today. No maintainer fix has been published, and the issue is only 7 days old. This contrasts with Claude Code #53915 (generic rate-limit errors) which has similar user reports but lower community engagement.

5. **No strong cross-tool signal for a unified feature direction.** While MCP lifecycle appears as a shared pain point, the specific approaches differ (Claude Code adds CLI auth; Kimi Code struggles with config loading; OpenCode requests spec compliance). No tool's feature today suggests convergence on a standard, and no "killer feature" is emerging across multiple implementations.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-23

## Today's Update Brief

A minor release (v2.1.186) shipped with CLI-based MCP authentication and workflow status filtering. Issue activity remains high (50 open items updated in 24h), with four new PRs opened and several severe bug reports filed today including a managed-settings zeroing bug on Linux and iOS/iPadOS crash regressions.

## Releases

**v2.1.186** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.186)

- `claude mcp login <name>` / `claude mcp logout <name>`: authenticate MCP servers from the CLI without opening the interactive `/mcp` menu. Supports `--no-browser` stdin redirect for SSH completions.
- Press `f` in the `/workflows` agent to filter by status.

## Hot Issues

**#18170 — Copy/paste from terminal includes unwanted indentation and trailing spaces**
[Link](https://github.com/anthropics/claude-code/issues/18170)
124 comments · 265 👍 · Open since January
Selecting any output includes leading tabs (matching the `>` prompt indentation) and trailing spaces. Workflow impact: forces manual cleanup on every paste. Community reaction: heavily upvoted, no maintainer resolution posted.

**#36151 — Multi-account switching in Claude Mobile app without shared email**
[Link](https://github.com/anthropics/claude-code/issues/36151)
103 comments · 369 👍
Users with multiple accounts (e.g., work + personal) cannot switch without using the same email. The top-voted open feature request. No maintainer response visible.

**#50270 — v2.1.113+ broken on Termux/Android: native binary requires glibc, no JS fallback**
[Link](https://github.com/anthropics/claude-code/issues/50270)
55 comments · 51 👍
The switch from a JS entry point to a native glibc binary blocks all Android/Termux usage. Android reports `process.platform` as `android`, not `linux`, so the binary is never selected correctly. Regression from v2.1.113. No fix released despite being open since April.

**#53915 — API Error: Server is temporarily limiting requests (not your usage limit)**
[Link](https://github.com/anthropics/claude-code/issues/53915)
60 comments · 20 👍
Users receiving rate-limit errors that are explicitly _not_ personal usage caps. Affects Windows, VS Code integration, and API workflows. No root cause confirmed by maintainers.

**#60226 — Self-identified blocking gaps do not gate output**
[Link](https://github.com/anthropics/claude-code/issues/60226)
45 comments
Claude states why its analysis is unfounded, then completes the analysis anyway in the same response. The model flags its own missing information but proceeds without it. Structurally distinct from act-first bias issues according to the reporter. Active discussion on model behavior.

**#29937 — Terminal rendering corruption in tmux**
[Link](https://github.com/anthropics/claude-code/issues/29937)
23 comments · 50 👍
Text overlaps and overwrites previous output inside tmux sessions. Reporter ruled out tmux config. Affects Ubuntu with `tmux-256color`. Open since March.

**#64366 — Unbounded MCP server fan-out across Cowork/agent sessions exhausts RAM and kernel-panics macOS**
[Link](https://github.com/anthropics/claude-code/issues/64366)
16 comments · 4 panics reported
MCP server processes multiply across Cowork sessions without limit, causing system-wide crashes on M2 Max / 32 GB. Reporter experienced four kernel panics and a forced power-off. macOS specific.

**#51143 — Windows persistent blank/white screen**
[Link](https://github.com/anthropics/claude-code/issues/51143)
15 comments · 12 👍
Claude Desktop shows a blank white screen on Windows. Cowork mode unusable. Multiple reinstalls have no effect. Open since April.

**#53717 — Windows: session content missing after auto-update**
[Link](https://github.com/anthropics/claude-code/issues/53717)
10 comments · 4 👍
Sessions appear in the sidebar but all message content is gone after auto-update. JSONL persistence files exist but are empty. Data-loss severity.

**#70156 — Subagents stall waiting for MCP servers to be approved when merged into worktrees**
[Link](https://github.com/anthropics/claude-code/issues/70156)
4 comments · Filed today
Subagents in git worktrees wait indefinitely for MCP server approval prompts that never resolve. Newly filed, no resolution.

## Key PR Progress

**#70173 — fix(commit-commands): detect [gone] branches with `git branch -vv`**
[Link](https://github.com/anthropics/claude-code/pull/70173)
Fixes `/clean_gone` doing nothing: `git branch -v` never shows `[gone]` (needs `-vv`), and `[gone]` can appear anywhere in the line, not just in the grep-matched column. Open, no comments.

**#63686 — Bump stale and autoclose timeouts from 14 to 90 days**
[Link](https://github.com/anthropics/claude-code/pull/63686)
Extends issue lifecycle from 14 to 90 days. Still open after 24 days. If merged, would reduce automatic closure of long-standing bugs.

**#70074 — docs: fix stale marketplace name in plugin-dev README**
[Link](https://github.com/anthropics/claude-code/pull/70074)
Fixes #70064: replaces 3 references from `claude-code-marketplace` to `claude-code-plugins`. Documentation maintenance.

**#70066 — docs(plugin-dev): update marketplace install docs**
[Link](https://github.com/anthropics/claude-code/pull/70066)
Updates install instructions to use the official marketplace name, replaces `cc --plugin-dir` with `claude --plugin-dir`, and clarifies contribution wording. Open.

## Feature Request Clusters

**MCP lifecycle control** — #70015 requests a `lazy` flag for MCP servers to register without starting at session boot. Related to #70156 (subagents blocked by unapproved MCP servers) and #64366 (unbounded MCP process fan-out). Users want opt-in, per-server startup control.

**Multi-account & identity management** — #36151 (mobile account switching) is the highest-voted request. #70077 (macOS login token not written to Keychain on device-code flow) suggests broader auth reliability concerns.

**Session & context persistence** — Multiple issues (#12908, #53717, #69003, #70175) report lost conversation history or context across updates, disk-full scenarios, or multi-day sessions. A cluster around data durability and recovery paths.

## Developer Pain Points

- **Data loss after updates**: Three open issues (#12908, #53717, #69003) describe sessions or content disappearing after auto-updates or disk-full conditions, with no recovery path. Affects macOS and Windows.
- **MCP server reliability in multi-agent workflows**: #64366 (kernel panic from unbounded MCP fan-out), #70156 (subagent stalls on approval), and #58924 (silently skipped `.mcp.json`) create a brittle experience for anyone using Cowork or subagents with MCP.
- **Platform regressions on Android and Windows**: #50270 (Termux entirely broken since v2.1.113) and #51143 (blank screen on Windows) have been open for weeks with no resolution, blocking users on non-primary platforms.
- **Terminal rendering issues**: #18170 (indented copy/paste) and #29937 (tmux corruption) degrade the terminal UX daily for CLI users and are both high-vote, long-standing issues.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-23

## Today's Update Brief

A new stable release (v0.142.0) shipped today with usage-credit management and reorganized plugin browsing. The community is intensely focused on a confirmed 10–20x rate-limit cost regression in gpt-5.5 (Issue #28879, 239 👍, 117 comments). Maintainers merged fixes for the SQLite log bloat issue and progressed code-mode retry safety, MCP tool error metrics, and cross-platform proxy routing.

## Releases

**rust-v0.142.0** — Stable release with two new features:
- `/usage` can now show and redeem earned usage-limit reset credits, with confirmation, retry, and refreshed availability states. (#28154, #28793)
- `/plugins` now organizes remote plugins into **OpenAI Curated**, **Workspace**, and **Shared with me** sections, with eligible turns able to recommend plugins.

Four alpha versions also published (v0.142.0-alpha.11, .12, v0.143.0-alpha.1, .2) with no separate changelog entries.

## Hot Issues

1. **[#28879 – Rate-limit cost per token jumped ~10-20x since June 16](https://github.com/openai/codex/issues/28879)** — Plus plan users on gpt-5.5 report their 5h budget drains in 2-3 prompts instead of 20+. Session logs confirm `limit-% consumed per token` increased 10–20× with no model/plan change. 239 👍, 117 comments. **Most active issue today.**

2. **[#3962 – Play a sound when Codex finishes a prompt/task](https://github.com/openai/codex/issues/3962)** — Long-running enhancement request. Users want an optional audible completion notification when switching away from Codex. 177 👍, 52 comments.

3. **[#28224 – SQLite feedback logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224)** — **ClOSED today** after two merged PRs (#29432, #29457) reduced logs by ~85%. Original report detailed SSD endurance concerns from unbounded logging. 251 👍.

4. **[#11984 – App UI gets extremely slow during long sessions](https://github.com/openai/codex/issues/11984)** — Electron UI degrades noticeably over sessions with many messages. Multiple Pro users confirm the issue across macOS. 30 comments.

5. **[#15347 – Support moving/remapping a workspace folder without losing thread history](https://github.com/openai/codex/issues/15347)** — When a workspace is moved or copied, importing the new path doesn't carry over threads. Threads exist locally but remain tied to the old path. 26 👍.

6. **[#18299 – Display dot files and folders (.agents/.codex etc)](https://github.com/openai/codex/issues/18299)** — File viewer on the right side hides all dotfiles, making it hard to manage `.agents` configurations or `.codex` settings. 29 👍.

7. **[#14461 – Windows Codex cannot start with terminalShell=wsl](https://github.com/openai/codex/issues/14461)** — App crashes on launch when WSL mode is configured. Affects Plus users on Windows 10/11 with WSL workflows.

8. **[#24948 – Session logs grow to 700MB-2GB from compaction history](https://github.com/openai/codex/issues/24948)** — Repeated compaction cycles and raw tool output bloat CLI session logs to gigabytes. Reported on gpt-5.5/Pro, macOS.

9. **[#14370 – macOS Codex Desktop hides existing workspace threads](https://github.com/openai/codex/issues/14370)** — Sidebar only shows 1 thread for workspaces with multiple threads after app restart. Enterprise user, confirmed reproducible.

10. **[#28504 – Pro account missing Codex reset bank and invite referral entitlement](https://github.com/openai/codex/issues/28504)** — $200/month Pro subscribers cannot access usage reset banks or referral credits. Windows Store user, 6 comments.

## Key PR Progress

1. **[#29509 – App-server protocol compatibility check](https://github.com/openai/codex/pull/29509)** — New CI check that rejects backwards-incompatible changes to the stable app-server protocol. Compares generated schemas against base revision, detects removed methods/fields. Infrastructure reliability.

2. **[#29505 – Prewarm Guardian after permission switches](https://github.com/openai/codex/pull/29505)** — When a settings update routes approvals to Guardian, the review session is prewarmed to avoid startup latency. Reuses existing startup path, covers standalone updates and new-turn settings.

3. **[#29493 – MCP: accept foreign absolute cwd for remote stdio](https://github.com/openai/codex/pull/29493)** — Fixes remote stdio MCP servers on Windows where a Windows absolute path was rejected by POSIX orchestrator. Cross-platform MCP reliability.

4. **[#29419 – Reject remote images at app-server ingress](https://github.com/openai/codex/pull/29419)** — HTTP(S) image URLs are now rejected in turn/start, turn/steer, and thread/inject_items handlers. Security hardening against dynamic-tool attempted injection of remote images.

5. **[#28976 – Add MCP tool call error metrics](https://github.com/openai/codex/pull/28976)** — Counts `CallToolResult.isError` responses as failed calls (not successful transport-level), adds `codex.mcp.call.error` metric with tool and error-type dimensions. Observability improvement.

6. **[#28992 – Improved expired Bedrock credential errors](https://github.com/openai/codex/pull/28992)** — Amazon Bedrock's `401` with `Signature expired:` is now surfaced as a clear credential-expired error with recovery instructions instead of a generic `unexpected status`. Better user experience for AWS credential users.

7. **[#29498 – Instrument rollout persistence bytes](https://github.com/openai/codex/pull/29498)** — Adds 1%-sampled metrics for per-item and per-thread JSON byte totals before/after filtering. Helps diagnose how persistence size relates to the recent session log bloat concerns.

8. **[#29397 – code-mode: make create and observe retry-safe](https://github.com/openai/codex/pull/29397)** — Adds `idempotency_key` fields to wire requests so lost create/observe responses can be retried without starting duplicate cells. Core IPC reliability.

9. **[#29400 – code-mode: type cells by execution capability](https://github.com/openai/codex/pull/29400)** — Introduces distinct cell types for `wait`, `wait_to_pending`, and `resume` to prevent invalid lifecycle combinations. Type safety for cell execution.

10. **[#29398 – code-mode: use client cell ids and linear observations](https://github.com/openai/codex/pull/29398)** — Replaces host-generated cell IDs with compact 16-character `CellId` values to reduce protocol state. Ties cell identity to Core's existing thread identity.

## Feature Request Clusters

**Audio & Notifications** — Two longstanding requests: optional completion sound (#3962, 177 👍) and desktop notifications for permission prompts (#17716). Users working across multiple windows want audible/visual signals when Codex finishes or needs approval.

**File Path Handling** — Multiple requests cluster around non-ASCII paths: percent-encoded markdown file links (#15499), Chinese character paths cannot open (#15711, bilingual report), dot files hidden (#18299). Impacted workflow: viewing and opening files with special characters or hidden config files.

**Windows-Specific Workflows** — Recurring requests for proper Windows support: mapped network drives losing threads (#13846), WSL mode startup failure (#14461), idle processes not cleaning up (#13970), Store app crash on update (#15179). Windows users report persistent instability.

## Developer Pain Points

1. **Rate-limit cost regression (Issue #28879)** — This is the dominant pain point today. Users report their Plus plan budget drops from 20+ prompts to 2-3 per session with no model/plan change. Session logs show 10–20× higher per-token consumption. No maintainer resolution posted yet; issue has 239 👍.

2. **Session log bloat** — Two active issues report unbounded growth: SQLite feedback logs (#28224, now partially fixed) and CLI session logs reaching 700MB–2GB (#24948). Both impact SSD endurance and disk space.

3. **Approval prompt spam** — A newly filed issue (#29043) reports that full-access workspaces now prompt for approval on every action after a recent update, breaking the "approve once" flow.

4. **Thread persistence fragility** — Multiple reports of thread history being lost or hidden after workspace moves (#15347), app restarts (#14370), or service incidents (#14396). Threads remain stored locally but fail to associate with their workspace path.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-06-23

## Today's Update Brief

Activity remained focused on bug fixes and infrastructure hardening, with 10 new pull requests opened and several merges completed today. No new releases were published in the last 24 hours. The issue tracker shows stable engagement on agent reliability, terminal UI regressions, and memory system quality improvements.

## Releases

_No new releases in the last 24 hours._

## Hot Issues

1. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, 7 comments, 0 👍)
   EPIC tracking the evolution from behavioral evals (76 tests across 6 Gemini models) toward a more comprehensive component-level evaluation framework. Affects the entire evaluation infrastructure for agent workflows. Community reaction limited due to 🔒 maintainer-only scope.

2. **[#22745 – Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, 7 comments, 1 👍)
   Investigates whether AST-aware tools (e.g., reading method bounds in one call) reduce turns, token noise, and misaligned reads. Directly impacts codebase navigation accuracy and cost. Single 👍 suggests modest community interest.

3. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 7 comments, 2 👍)
   Critical bug: `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even after hitting the maximum turn limit without performing any analysis. Misleads users into thinking work was completed. Two 👍 indicates community concern.

4. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 7 comments, 8 👍)
   Long-standing issue: the generalist agent hangs indefinitely on simple tasks (e.g., folder creation). Workaround: disable subagent delegation. **Eight** 👍 shows this is a high-impact frustration for many users.

5. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, 6 comments, 0 👍)
   Anecdotal but structural: custom skills and sub-agents are rarely invoked autonomously, even for closely related tasks (e.g., git/gradle skills ignored during version control work). Suggests a prompting or routing gap in the agent orchestration layer.

6. **[#26525 – Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, 5 comments, 0 👍)
   Privacy/security: Auto Memory sends transcript content to the extraction model before redaction occurs. Service can also log existing skills/agents. No community engagement (🔒), but affects all users of memory features.

7. **[#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments, 0 👍)
   Auto Memory only marks a session as processed when the extraction agent successfully reads the transcript. Low-signal sessions skipped by the agent remain unprocessed and reappear, causing infinite retries. No engagement but impacts memory stability.

8. **[#25166 – Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 4 comments, 3 👍)
   Frequent hang: simple CLI commands finish but the UI shows them as active and awaiting input. Affects all shell command workflows. Three 👍 and P1 status indicate strong consensus on severity.

9. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 4 comments, 1 👍)
   Browser agent crashes on Wayland display servers with `Termination Reason: GOAL`. Linux Wayland users cannot use browser automation. Single 👍, but 🔒 scope may suppress visibility.

10. **[#20079 – ~/.gemini/agents symlinks not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2, 4 comments, 0 👍)
    Symlinks in `~/.gemini/agents/` are silently ignored. Affects users who manage agent definitions via dotfiles or symlink-based workflows. No community engagement.

## Key PR Progress

1. **[#28065 – Bump node google-auth-library to 10.8.1](https://github.com/google-gemini/gemini-cli/pull/28065)** (XS, open)
   Follow-up dependency bump to pick up a bugfix in the Google Cloud Node library. Affects all GCP-authenticated workflows.

2. **[#28000 – Fix Jupyter Notebook and JSON corruption in write_file](https://github.com/google-gemini/gemini-cli/pull/28000)** (M, **closed**)
   Critical fix: `write_file` silently corrupted `.ipynb` and JSON files, causing Colab/JupyterLab to discard changes. Now merged.

3. **[#28015 – Implement Cloud Run webhook ingestion service for Caretaker](https://github.com/google-gemini/gemini-cli/pull/28015)** (L, open)
   Infrastructure PR: new `Caretaker Agent` service that ingests GitHub webhooks, verifies signatures, stores issues via Firestore, and publishes to Pub/Sub. Enables automated issue triage.

4. **[#28053 – Defensive path resolution for @-prefixed file references](https://github.com/google-gemini/gemini-cli/pull/28053)** (XL, open)
   Production fix: `read_file`, `replace`, `write_file` fail with "File not found" when the model passes a path like `@policies/new-policies.txt`. Also fixes macOS tests.

5. **[#28100 – Fix Disposables leaked by comma operators in VS Code extension](https://github.com/google-gemini/gemini-cli/pull/28100)** (S, open)
   Memory leak: `(A, B)` in `context.subscriptions.push()` collapsed to just `B`, leaving the first Disposable unregistered. Affects VS Code companion extension stability.

6. **[#28099 – Show descriptive sandbox label in footer](https://github.com/google-gemini/gemini-cli/pull/28099)** (S, open)
   macOS sandbox UX fix: footer now shows the actual seatbelt profile name instead of hardcoded "current process". Closes #26697.

7. **[#27916 – Validate GCP project ID format in memory](https://github.com/google-gemini/gemini-cli/pull/27916)** (M, open)
   Prevents Auto Memory from storing invalid display names/aliases, which caused 403 and `CONSUMER_INVALID` errors. Directly improves enterprise reliability.

8. **[#27971 – Strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** (M, open)
   Fixes "Thought Leakage": the model's internal reasoning monologue leaks into plain-text history, causing the model to mimic scratchpad thoughts or enter infinite loops. Surge of activity with 3 comments.

9. **[#28096 – Drop late tool calls after SIGINT cancellation](https://github.com/google-gemini/gemini-cli/pull/28096)** (M, open)
   Closes #28091: a SIGINT delivered mid-turn could still execute late provider tool-call chunks, running side effects after the user cancelled. Defensive concurrency fix.

10. **[#28094 – Deep-merge user and workspace settings in A2A server](https://github.com/google-gemini/gemini-cli/pull/28094)** (M, open)
    Shallow spread (`{ ...userSettings, ...workspaceSettings }`) silently dropped nested sections (`tools`, `telemetry`, etc.). Now uses deep merge. Impacts A2A server configuration.

## Feature Request Clusters

**AST-aware tooling** (#22745, #22746): Multiple EPICs propose investigating AST-aware file reads, search, and codebase mapping to reduce token cost and improve read precision. The community engagement is low (single 👍), but this is a maintainer-driven initiative.

**Subagent trajectory visibility** (#22598, #21432): Users want to see subagent trajectories via `/chat share` and want the CLI to understand its own flags/hotkeys. Two separate requests, both with limited engagement (1-2 👍).

**Agent safety and destructive behavior prevention** (#22672, #23571): Concerns about the model using `--force` flags, `git reset`, or creating random tmp scripts. Users want safer defaults and gentler destructive operations. Low engagement but the concerns are recurring.

**Browser agent resilience** (#22232): Request for automatic session takeover and lock recovery when a browser profile is locked by orphaned processes. Currently a "fail-fast" strategy breaks persistent sessions. Single request, no community votes.

## Developer Pain Points

- **Subagent reliability**: False `GOAL` success on `MAX_TURNS` (#22323), generalist agent hangs (#21409), and subagents not using custom skills (#21968) erode trust in autonomous agent workflows.
- **Permissions ignored**: Agents running without permission post-upgrade (#22093) and `settings.json` overrides being ignored (#22267) create confusion around configuration governance.
- **Terminal UI regressions**: High frequency of terminal resize flicker (#21924), external editor corruption (#24935), and shell hang after command completion (#25166) degrade the interactive experience.
- **Memory system fragility**: Indefinite retries of low-signal sessions (#26522), secret exposure before redaction (#26525), and silent skipping of invalid patches (#26523) make the memory system unpredictable for production use.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-06-23

## Today's Update Brief

Two patch releases (v1.0.64-2 and v1.0.64-3) landed today, adding HTTP(S) proxy support, inline image rendering, and conversation scrollbar settings. The issue tracker saw 19 updates, with a strong focus on MCP registration bugs, authentication errors during session resumption, and feature requests for elapsed-time indicators. No pull requests were updated in the last 24 hours.

---

## Releases

**v1.0.64-3** ([release link](https://github.com/github/copilot-cli/releases/tag/v1.0.64-3))
- **Added**: Set an HTTP(S) proxy via user setting.
- **Fixed**: Resume sessions by name even when the name contains spaces.
- **Fixed**: Hide unsupported slash commands in remote-hosted sessions.

**v1.0.64-2** ([release link](https://github.com/github/copilot-cli/releases/tag/v1.0.64-2))
- **Added**: Setting to hide the conversation scrollbar.
- **Added**: Inline image rendering in the CLI.
- **Added**: Argument-hint frontmatter support for skills.
- **Added**: OpenTelemetry – chat spans after successful compaction now carry `gen_ai.conversation.compacted=true`, and the summary is emitted as a `CompactionPart`.

---

## Hot Issues (10 selected)

1. **#1632 – Support subfolders for skills** ([link](https://github.com/github/copilot-cli/issues/1632))
   *Workflow*: Organizing custom skills. Users with many skills want to group them into subfolders, but the CLI rejects non‑flat layouts.
   *Impact*: Power‑users managing 10+ skills face clutter.
   *Reaction*: 20 👍, 8 comments – a long‑standing request (Feb 2026) still open.

2. **#3162 – 1.0.42 falsely reports registry‑listed MCP servers as blocked by policy** ([link](https://github.com/github/copilot-cli/issues/3162))
   *Workflow*: Installing MCP servers from the public registry.
   *Impact*: False‑negative policy block prevents legitimate server use.
   *Reaction*: Closed after 7 comments – likely fixed in a subsequent release.

3. **#3596 – Error loading model list on session resume** ([link](https://github.com/github/copilot-cli/issues/3596))
   *Workflow*: Resuming a specific session, then using `/model`.
   *Impact*: Users must start a new session to change models.
   *Reaction*: 11 👍, 6 comments, still open – affects v1.0.56 (older version, but no fix yet).

4. **#3278 – Display per‑response elapsed time** ([link](https://github.com/github/copilot-cli/issues/3278))
   *Workflow*: Long‑running autopilot tasks (minutes).
   *Impact*: No visibility into generation duration.
   *Reaction*: 1 👍, 2 comments – feature request with clear use case.

5. **#2399 – Use sparse checkout for plugin installs** ([link](https://github.com/github/copilot-cli/issues/2399))
   *Workflow*: Installing plugins from Git repos.
   *Impact*: Full clone wastes bandwidth and disk space (CI files, docs).
   *Reaction*: 0 👍, 2 comments – performance optimisation idea.

6. **#2337 – WSL must use git‑credential‑manager for token storage** ([link](https://github.com/github/copilot-cli/issues/2337))
   *Workflow*: Logging in on WSL.
   *Impact*: Warning shown when GCM is already configured but CLI may not use it.
   *Reaction*: 2 👍, 1 comment – platform‑specific UX issue.

7. **#3111 – Add a timer** ([link](https://github.com/github/copilot-cli/issues/3111))
   *Workflow*: Observing agent “thinking” time.
   *Impact*: Users want to know how long the agent is reasoning.
   *Reaction*: 1 👍, 1 comment – overlaps with #3278.

8. **#3887 – `/mcp` install does not interpolate `packageArguments` variables** ([link](https://github.com/github/copilot-cli/issues/3887))
   *Workflow*: Installing MCP servers from registry with variable placeholders (e.g. `{ado_org}`).
   *Impact*: Raw placeholders written to config instead of actual values.
   *Reaction*: 0 comments, opened today – fresh bug.

9. **#3886 – Restarting Copilot uses AI credits** ([link](https://github.com/github/copilot-cli/issues/3886))
   *Workflow*: Using `/restart`, `/resume`, or `/update`.
   *Impact*: Consumes ~174 credits per restart, even though no new request was made.
   *Reaction*: 0 comments, opened today – potential billing concern.

10. **#1579 – Copilot CLI ignores MCP server “instructions”** ([link](https://github.com/github/copilot-cli/issues/1579))
    *Workflow*: Initialization lifecycle where server returns instructions for LLM.
    *Impact*: CLI discards useful hints, reducing response quality.
    *Reaction*: 3 👍, 0 comments – old (Feb) but still open.

---

## Key PR Progress

No pull requests were updated in the last 24 hours.

---

## Feature Request Clusters

- **Elapsed‑time indicators**
  Three issues request timers: #3278 (per‑response), #3111 (agent thinking), #3055 (shell tool execution). Users want real‑time feedback during long operations.

- **Skills organisation**
  #1632 asks for subfolder support to manage large skill collections.

- **Internationalisation**
  #3883 proposes i18n for the top 10 languages, targeting menus, prompts, errors, and help text.

- **Plugin/MCP installation improvements**
  #2399 suggests sparse checkout to reduce clone size. #3887 points to missing variable interpolation in MCP registry installs.

---

## Developer Pain Points

- **Authentication state loss** (#3596): Resuming a session can lose authentication, breaking `/model` – a frustrating interruption.
- **False policy blocks for MCP servers** (#3162): Even registry‑listed servers may be incorrectly marked as blocked, eroding trust in policy enforcement.
- **Credit “leakage” on restart** (#3886): Users report unexpected AI credit consumption when simply restarting or resuming a session – unclear if it’s a bug or intentional.
- **Input area scroll issues** (#3885): Long text doesn’t scroll properly inside the input field, hampering multi‑line editing.
- **Unnecessary permission prompts** (historical #2693, #1110): Even benign commands like `2>/dev/null` still trigger permission dialogs, slowing workflows.
- **Lack of documentation for enterprise sandbox policies** (#3884): No clear guide on how to configure local sandbox via Intune/MDM.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-23

## Today's Update Brief

A patch release (1.48.0) shipped today, addressing a reasoning-content round-trip bug and introducing force-stop logic for repeated tool calls. Six new issues emerged, with the majority reporting MCP server configuration problems across `kimi web`, `kimi acp`, and workspace-relative tooling, suggesting an ongoing rough edge in the MCP integration layer.

## Releases

**v1.48.0** — [Full Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.48.0)
- `fix(kosong)`: round-trip empty reasoning content
- `feat(soul)`: escalate repeated-tool-call reminders and force-stop on dead-end streak
- Internal chore: version bumps for kimi-cli (1.48.0) and kosong (0.54.0)

## Hot Issues

### #1283 [Enhancement] Memory System — Persistent context across sessions
- **Author**: [@CatKang](https://github.com/CatKang) | Created: Feb 27 | Updated: Jun 22 | 💬 6
- **Workflow**: When developers restart the CLI, prior project context, patterns, and preferences are lost.
- **Impact**: Forces users to re-explain project conventions each session; blocks workflows that depend on evolving understanding of large codebases.
- **Reaction**: 0 👍 but 6 comments indicate sustained interest. No maintainer response visible since creation.
- **Link**: [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### #2457 [Bug] Auto-discovery of deleted MCP server causes unfixable 400 errors
- **Author**: [@xavier2sy8827-cmyk](https://github.com/xavier2sy8827-cmyk) | Created: Jun 16 | Updated: Jun 22 | 💬 1
- **Workflow**: User removes an MCP server configuration, but Kimi Code CLI continues discovering and attempting to connect to it, returning persistent 400 errors.
- **Impact**: Effectively bricks the MCP integration for that user until a workaround is found.
- **Reaction**: 0 👍, but a single comment suggests the issue is reproducible.
- **Link**: [Issue #2457](https://github.com/MoonshotAI/kimi-cli/issues/2457)

### #2469 [Bug] `kimi web` starts MCP servers from CLI installation directory
- **Author**: [@Zehee](https://github.com/Zehee) | Created: Jun 22 | 💬 0
- **Workflow**: Launching `kimi web` starts MCP servers relative to the CLI binary directory rather than the user's working directory.
- **Impact**: Workspace-relative MCP tools (e.g., file-scoped tools relying on `cwd`) break because the server inherits the wrong base path.
- **Reaction**: Fresh report, no comments.
- **Link**: [Issue #2469](https://github.com/MoonshotAI/kimi-cli/issues/2469)

### #2468 [Bug] CLI hangs after detached child-process tool call
- **Author**: [@N0zoM1z0](https://github.com/N0zoM1z0) | Created: Jun 22 | 💬 0
- **Workflow**: Running commands via a tool that spawns a detached child process causes the CLI to hang indefinitely.
- **Impact**: Blocks any workflow relying on long-running background processes (e.g., dev servers, watchers).
- **Reaction**: Fresh, no engagement.
- **Link**: [Issue #2468](https://github.com/MoonshotAI/kimi-cli/issues/2468)

### #2465 [Bug] `kosong`: `reasoning_effort: null` on wire breaks strict APIs
- **Author**: [@0xbentang](https://github.com/0xbentang) | Created: Jun 22 | 💬 0
- **Workflow**: When thinking is set to "off", `OpenAILegacy` provider emits `"reasoning_effort": null` which is invalid per the OpenAI spec.
- **Impact**: Strict API servers reject the request, and the thinking mode is not actually disabled.
- **Reaction**: Fresh, detailed analysis provided.
- **Link**: [Issue #2465](https://github.com/MoonshotAI/kimi-cli/issues/2465)

### #2464 [Bug] `kimi acp` does not load MCP servers
- **Author**: [@Tasktivity](https://github.com/Tasktivity) | Created: Jun 22 | 💬 0
- **Workflow**: Using `--mcp-config-file` under `kimi acp` results in no MCP tools available, while the same config works in interactive mode.
- **Impact**: Blocks ACP users from using custom MCP tools, effectively breaking non-interactive/automated workflows.
- **Reaction**: Fresh, no comments.
- **Link**: [Issue #2464](https://github.com/MoonshotAI/kimi-cli/issues/2464)

## Key PR Progress

### #2471 [OPEN] `feat(tools):` Add Monitor tool for per-line stdout streaming
- **Author**: [@Nitjsefnie](https://github.com/Nitjsefnie) | Created: Jun 22
- **Description**: Proposes a `Monitor` tool that streams stdout per-line, as a complement to the existing background-tool. No prior issue filed.
- **Status**: Open, awaiting maintainer feedback.
- **Link**: [PR #2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)

### #2467 [CLOSED] `chore(release):` Bump kimi-cli to 1.48.0, kosong to 0.54.0
- **Author**: [@sailist](https://github.com/sailist) | Created: Jun 22
- **Description**: Internal version bumps; changelog entries intentionally omitted.
- **Status**: Merged/Closed.
- **Link**: [PR #2467](https://github.com/MoonshotAI/kimi-cli/pull/2467)

### #2466 [CLOSED] `feat(soul):` Escalate repeated-tool-call reminders and force-stop on dead-end streak
- **Author**: [@jackfish212](https://github.com/jackfish212) | Created: Jun 22
- **Description**: Ports repeated-tool-call handling from kimi-code: after 3+ consecutive identical tool calls, injects escalating reminders (r1/r2/r3) and force-stops the turn at the dead-end limit.
- **Status**: Merged via release 1.48.0.
- **Link**: [PR #2466](https://github.com/MoonshotAI/kimi-cli/pull/2466)

## Feature Request Clusters

**Persistent Memory System** — Issue #1283 requests a full memory layer that persists context, project patterns, and user preferences across sessions, spanning both automatic (AI-managed) and manual (user-defined) memory. This is the most-commented feature request in the dataset and has been open since February without maintainer response.

**Streaming Tool Output** — PR #2471 proposes a `Monitor` tool for per-line stdout streaming, responding to the lack of real-time feedback from the existing background-tool workflow.

## Developer Pain Points

**MCP Server Configuration Fragility** — Three distinct issues today (#2457, #2469, #2464) all relate to MCP servers not behaving as expected: auto-discovery of deleted servers, incorrect working directory in `kimi web`, and complete absence of MCP tools in ACP mode. This suggests the MCP lifecycle and configuration loading need hardening.

**API / Provider Compatibility** — Issue #2465 highlights a schema violation in the `OpenAILegacy` provider, and the fix for empty reasoning content in release 1.48.0 confirms that reasoning-related wire protocol handling has been a recurring surface for bugs.

**CLI Hangs / Deadlocks** — Issue #2468 reports a hang after detached child-process tool calls, joining a pattern of lifecycle management issues in tool execution (the PR #2466 directly addresses tool-call loops).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-23

---

## Today's Update Brief

No new releases were published in the past 24 hours. Community activity remains high: the central **Memory Megathread** (#20695) passed 99 comments, and multiple “Worker has been terminated” crash reports continue to surface. Several closed issues and PRs from the last day appear to be spam or compliance-test submissions, but the maintainers merged important fixes for TUI autocomplete scoping (#33458) and image-attachment regression (#32832). A major PR introducing a standalone v2 session flow (#33281) is in review.

---

## Releases

None (no new versions in the last 24h).

---

## Hot Issues

### 1. Memory Megathread (#20695) — *Open*
**99 comments, 72 👍**
Central tracking issue for scattered memory-leak reports. The thread explicitly asks users *not* to suggest AI‑generated fixes but to collect heap snapshots. No maintainer resolution yet.
[github.com/anomalyco/opencode/issues/20695](https://github.com/anomalyco/opencode/issues/20695)

### 2. MCP tool can no longer return image attachments (#32832) — *Closed*
**22 comments**
Regression from v1.17.5: images returned by MCP tools are no longer rendered. Confirmed working in v1.17.4. Likely a serialization or rendering bug.
[github.com/anomalyco/opencode/issues/32832](https://github.com/anomalyco/opencode/issues/32832)

### 3. Full MCP client capabilities (#28567) — *Open*
**17 comments, 24 👍**
Feature request to bring OpenCode’s MCP client up to the latest specification (roots, sampling, etc.). Community interest is high, no maintainer commitment yet.
[github.com/anomalyco/opencode/issues/28567](https://github.com/anomalyco/opencode/issues/28567)

### 4. Ephemeral one-off sessions for `opencode run` (#4489) — *Open*
**12 comments, 12 👍**
Proposal for session‑less execution mode. Author is willing to implement if UX design is agreed. No maintainer response yet.
[github.com/anomalyco/opencode/issues/4489](https://github.com/anomalyco/opencode/issues/4489)

### 5. Worker terminated when running multiple subagents (#28015) — *Closed*
**11 comments**
Session switching breaks under parallel sub‑agents; “Worker has been terminated” error. User cannot resume existing sessions. Likely a worker lifecycle bug.
[github.com/anomalyco/opencode/issues/28015](https://github.com/anomalyco/opencode/issues/28015)

### 6. Add `tui.footer.items` plugin hook for persistent status (#18969) — *Open*
**9 comments, 3 👍**
Alternative to using toasts for persistent displays (token counters, TPS). Plugin authors request a dedicated status line hook.
[github.com/anomalyco/opencode/issues/18969](https://github.com/anomalyco/opencode/issues/18969)

### 7. Cross-project session list / picker for TUI (#31932) — *Open*
**6 comments**
`/sessions` is scoped to current project; users working across repos need a unified session manager.
[github.com/anomalyco/opencode/issues/31932](https://github.com/anomalyco/opencode/issues/31932)

### 8. Worker has been terminated (crash on first message) (#32694) — *Open*
**6 comments, 4 👍**
Every conversation crashes after the first reply. User isolated the crash to a basic code question.
[github.com/anomalyco/opencode/issues/32694](https://github.com/anomalyco/opencode/issues/32694)

### 9. Tool call start time incorrectly reported (#32574) — *Open*
**6 comments, 5 👍**
Timing block shows “start” and “end” times that are implausibly close together. Suspected defect in time‑reset logic.
[github.com/anomalyco/opencode/issues/32574](https://github.com/anomalyco/opencode/issues/32574)

### 10. MCP tool `object` parameters serialized as strings (#28472) — *Closed*
**6 comments**
Parameters typed `object` become JSON strings, causing validation errors in MCP tools. Fixed in v1.17.7?
[github.com/anomalyco/opencode/issues/28472](https://github.com/anomalyco/opencode/issues/28472)

---

## Key PR Progress

### 1. fix(tui): scope file autocomplete to session (#33458) — *Merged*
Author: @thdxr
Reactively limits file autocomplete and mention paths to the current session’s project location. Fixes confusion when working across multiple repos.
[github.com/anomalyco/opencode/pull/33458](https://github.com/anomalyco/opencode/pull/33458)

### 2. feat(cli): add standalone v2 session flow (#33281) — *Open*
Author: @thdxr
Introduces `--standalone` mode that spawns an authenticated private server for the TUI, using v2 API and `DataProvider`. Potential foundation for future session architecture.
[github.com/anomalyco/opencode/pull/33281](https://github.com/anomalyco/opencode/pull/33281)

### 3. fix(app): ignore stale project roots when navigating (#30685) — *Open*
Author: @ulises-jeremias
Prevents crash when a previously used project directory has been moved (e.g., OneDrive sync). Closes #30462.
[github.com/anomalyco/opencode/pull/30685](https://github.com/anomalyco/opencode/pull/30685)

### 4. feat(tui): add native status line template system (#13885) — *Merged*
Author: @diegomarino
Users can define per‑target template strings in config, resolved server‑side. Long‑standing feature finally merged.
[github.com/anomalyco/opencode/pull/13885](https://github.com/anomalyco/opencode/pull/13885)

### 5. feat(vcs): add git commit/push/pull/stage/unstage/log API endpoints (#28828) — *Merged*
Author: @gaboolic
Exposes VCS operations via backend API – a prerequisite for a Git UI in the desktop app (requests #15886, #26558).
[github.com/anomalyco/opencode/pull/28828](https://github.com/anomalyco/opencode/pull/28828)

### 6. feat(app): edit files directly in the app (#33017) — *Open*
Author: @felipegenef
Adds an edit mode for files opened in the desktop app, allowing inline changes without going through the AI. Popular request.
[github.com/anomalyco/opencode/pull/33017](https://github.com/anomalyco/opencode/pull/33017)

### 7. fix(core): preserve queue after provider failure (#33460) — *Open*
Author: @kitlangton
Prevents queued work from being lost when a provider call fails. Distinguishes between terminal, continued, and completed outcomes.
[github.com/anomalyco/opencode/pull/33460](https://github.com/anomalyco/opencode/pull/33460)

### 8. feat(http-recorder): prepare independent beta release (#33454) — *Open*
Author: @kitlangton
Gives `@opencode-ai/http-recorder` its own versioning and release lifecycle, separate from the main OpenCode release train.
[github.com/anomalyco/opencode/pull/33454](https://github.com/anomalyco/opencode/pull/33454)

### 9. feat(core): make system prompt immutable after session creation (#33246) — *Open*
Author: @0byte-coding
Caches system prompt per session ID to prevent accidental modification mid‑session. Closes #29672.
[github.com/anomalyco/opencode/pull/33246](https://github.com/anomalyco/opencode/pull/33246)

### 10. fix(tui): preserve worker rejection handling (#33448) — *Open*
Author: @rekram1-node
Restores `unhandledRejection` listener that was lost during logging migration, preventing worker crashes from unreported errors.
[github.com/anomalyco/opencode/pull/33448](https://github.com/anomalyco/opencode/pull/33448)

---

## Feature Request Clusters

- **Git integration in desktop/TUI**
  Multiple issues (#15886, #26558) ask for a native Git panel for staging, committing, and pushing without terminal or AI commands. The VCS API PR (#28828) lays backend groundwork.

- **MCP client improvements**
  Several requests center on bringing MCP support to spec: full client capabilities (#28567), correct serialization of `object` parameters (#28472), and image‑rendering fixes (#32832).

- **Session management**
  Ephemeral one‑off sessions (#4489), cross‑project session picker (#31932), and recovery of stranded pre‑migration sessions (#33447) – users want more flexible session handling.

- **Plugin/TUI extensions**
  Persistent status bar hooks (#18969), scrollbar visibility (#33411), and plugin‑loading reliability (#33455) indicate growing demand for a richer plugin API.

- **Provider diversity**
  Requests to add Mistral AI and Together AI support (#33457, #33456) and a rate‑limiting middleware for strict‑quota providers (#33459) show users are integrating many non‑OpenAI providers.

---

## Developer Pain Points

- **“Worker has been terminated” crashes**
  Two independent reports (#28015, #32694) describe session‑killing crashes with the same error, affecting both multi‑subagent and single‑session workflows. High frustration due to loss of work.

- **Memory leaks**
  The megathread (#20695) and a server‑mode report (#33213) detail heap growth to multiple GiB over hours/days, requiring restarts. No fix yet.

- **TUI usability regressions**
  Scrollbar hidden by default (#33411), renderer freezes on large diffs (#32046), and broken image rendering (#32832) degrade the user experience.

- **Plugin loading broken since v1.17.0**
  Plugins listed in config are silently skipped (#33455) – no error, no warning. Affects all plugins.

- **Billing confusion**
  A user reported paying $25 but only receiving $5 Go subscription credit, with the remainder stuck as “Zen balance” (#33451). Suggests unclear billing logic.

- **Time/start reporting bugs**
  Tool call start times are implausibly close to end times (#32574), making timing diagnostics unreliable.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-23

## Today's Update Brief

A high-activity day driven primarily by a wave of input validation PRs from an automated contributor, alongside continued maintenance work. The project saw one nightly release, 50 updated issues (many focused on integer/parameter validation gaps), and 50 pull requests—nearly half of which were merged. Community discussion centered on provider customization, tool-call UX polish, and environment variable handling.

---

## Releases

**v0.18.5-nightly.20260622.6bc3f853e** — Cherry-pick release with a single changelog entry: chore release prep for v0.18.5 and an automated VSCode companion publishing step.

https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5-nightly.20260622.6bc3f853e

---

## Hot Issues (Top 10 by discussion activity)

### 1. #5090 — Decouple Provider Identity from SDK Protocol
**Workflow:** Custom provider configuration.
**Impact:** Currently `providerId` is an enum limiting user extensions. This request proposes free-form string IDs + a separate `Protocol` enum for SDK routing.
**Reaction:** 6 comments, closed after maintainer engagement.
https://github.com/QwenLM/qwen-code/issues/5090

### 2. #3877 — Missing API Key Error Despite .env File
**Workflow:** CLI authentication on startup. Users set `OPENCODE_GO_API_KEY` in `~/.qwen/.env` but are forced into the auth wizard.
**Impact:** Blocks headless/non-interactive usage.
**Reaction:** 5 comments, open for 48 days — a long-standing pain point.
https://github.com/QwenLM/qwen-code/issues/3877

### 3. #5708 — Session List Cursor Accepts Negative/Unsafe Values
**Workflow:** Paginated session listing.
**Impact:** Numeric cursors from `mtimeMs` are not validated against the valid cursor range, allowing malformed requests.
**Reaction:** 5 comments, includes companion PR #5709.
https://github.com/QwenLM/qwen-code/issues/5708

### 4. #5656 — Move Tool-Use Summaries to Loading Indicator
**Workflow:** Tool-call UX with fast-model configurations.
**Impact:** Summary labels ("Fixed NPE in UserService") currently clutter conversation history as separate messages. Request moves them to the loading indicator area.
**Reaction:** 5 comments, tagged with `roadmap/terminal-ux`.
https://github.com/QwenLM/qwen-code/issues/5656

### 5. #4814 — UI Should Make Custom Provider Model Addition Easier
**Workflow:** First-launch wizard for custom providers.
**Impact:** Third-party provider flow (e.g., OpenRouter) presents a dropdown; custom provider users must manually edit JSON configurations with no equivalent UX.
**Reaction:** 5 comments, closed after maintainer acknowledgment.
https://github.com/QwenLM/qwen-code/issues/4814

### 6. #5713 — Semi-Invisible Cursor in Alacritty Terminal
**Workflow:** CLI/TUI usage in Alacritty.
**Impact:** Cursor visibility differs significantly between Alacritty (nearly invisible) and xterm (clear), affecting usability on this popular terminal.
**Reaction:** 4 comments, needs more information.
https://github.com/QwenLM/qwen-code/issues/5713

### 7. #5634 — Autofix Tier-1 Trusts Unreliable Label Signal
**Workflow:** CI triage automation.
**Impact:** The `status/ready-for-agent` label can be influenced by untrusted issue text, causing the autofix pipeline to fast-track issues without human signal verification.
**Reaction:** 4 comments, flagged as security-relevant.
https://github.com/QwenLM/qwen-code/issues/5634

### 8. #5641 — Repeated Shell Tool Results with OpenAI-Compatible Providers
**Workflow:** Deterministic provider response handling.
**Impact:** Completed shell tool call results are re-submitted to the LLM after already being returned, causing infinite loops or duplicate outputs.
**Reaction:** 4 comments, reproducible against the latest npm package.
https://github.com/QwenLM/qwen-code/issues/5641

### 9. #5563 — MCP `--scope` Default Documentation Mismatch
**Workflow:** CLI `mcp add` command.
**Impact:** Documentation (Chinese) states the default is `project`, but code defaults to `user`. Confuses users configuring MCP scopes.
**Reaction:** 4 comments, closed after PR #5589.
https://github.com/QwenLM/qwen-code/issues/5563

### 10. #5611 — `web_fetch` Cannot Fetch JSON APIs (HTTP 415)
**Workflow:** Tool-call web fetching.
**Impact:** `web_fetch` sends only `text/*` Accept headers, so JSON-only endpoints (e.g., GitHub REST API) return 415 Unsupported Media Type.
**Reaction:** 3 comments, identified as a clear gap.
https://github.com/QwenLM/qwen-code/issues/5611

---

## Key PR Progress (Top 10 by significance)

### 1. #5724 — Isolate ACP Integration Tests via QWEN_HOME
**Author:** @wenshao
**Description:** Spawns each ACP integration test with a per-agent `QWEN_HOME` to eliminate parallel-settings race conditions. Test-only change.
https://github.com/QwenLM/qwen-code/pull/5724

### 2. #5723 — Strengthen PR Gate with Batch Detection
**Author:** @pomelo-nwu
**Context:** In response to 20 automated PRs in one day (11 validation-noise PRs, per author). This PR adds batch detection, problem-existence checks, and red-flag patterns to the maintainer review gate.
https://github.com/QwenLM/qwen-code/pull/5723

### 3. #5678 — Validate IDE Server Port Env Var
**Author:** @tt-a1i
**Fix:** `QWEN_CODE_IDE_SERVER_PORT` now accepted only as a valid TCP port (1–65535); invalid values are ignored.
https://github.com/QwenLM/qwen-code/pull/5678

### 4. #5681 — Reject Non-Positive Recap Thresholds
**Author:** @tt-a1i
**Fix:** Rejects 0 and negative `sessionRecapAwayThresholdMinutes` values in web/daemon setting updates.
https://github.com/QwenLM/qwen-code/pull/5681

### 5. #5707 — Reject Fractional Max Connections
**Author:** @tt-a1i
**Fix:** Prevents fractional `maxConnections` from being passed to the daemon listener.
https://github.com/QwenLM/qwen-code/pull/5707

### 6. #5719 — Validate list maxEntries as Positive Integer
**Author:** @he-yufeng
**Fix:** Applies `parse_error` rejection for `Infinity`/`NaN`/floats/zero/negative values on workspace file-system `list()`.
https://github.com/QwenLM/qwen-code/pull/5719

### 7. #5705 — Reject Fractional Max Sessions
**Author:** @tt-a1i
**Fix:** ACP session bridge now rejects fractional `maxSessions` values.
https://github.com/QwenLM/qwen-code/pull/5705

### 8. #5703 — Validate MCP Add Timeout
**Author:** @tt-a1i
**Fix:** `--timeout` now requires a positive integer at argument parsing time; invalid values fail before persistence.
https://github.com/QwenLM/qwen-code/pull/5703

### 9. #4653 — Configurable Agent Ignore Files
**Author:** @shenyankm
**Feature:** Adds support for `.agentignore` and `.aiignore` alongside `.qwenignore`, plus `context.ignoreFiles` configuration. Open since May 31.
https://github.com/QwenLM/qwen-code/pull/4653

### 10. #5561 — Hot-Reload MCP Servers on Settings Change
**Author:** @water-in-stone
**Feature:** Editing `mcpServers` (or `mcp.allowed`/`mcp.excluded`) in `settings.json` now live-connects/disconnects MCP servers without restart.
https://github.com/QwenLM/qwen-code/pull/5561

Also notable: **#5699**, **#5696**, **#5693**, **#5691** — a series of PRs by @tt-a1i fixing integer/float schema mismatches across tool definitions (shell, LSP, read_file, monior). These were all merged rapidly.

---

## Feature Request Clusters

### Custom Provider UX
Multiple requests aim to simplify custom provider configuration: arbitrary string IDs for providers (#5090), better in-wizard model addition flows (#4814), and more intuitive env var handling (#3877). A recurring theme is that third-party providers (OpenRouter, etc.) have polished UX, while custom providers require manual JSON editing.

### Tool-Call Usability
#5656 (move summaries to loading indicator) and #5641 (repeated shell results) both touch the same core pain: tool-call output handling in the TUI is not yet refined. The first is a UX polish request, the second a correctness bug, but both indicate the team is iterating on the agent interaction model.

### ACP/Daemon Service Expansion
#5677 tracks remaining CLI commands that need ACP (Agent Communication Protocol) remote behavior: `cd`, permissions, trust, LSP, `setup-github`. This is an infrastructure-facing request from a power user tracking the daemonization migration.

---

## Developer Pain Points

**Input validation gaps dominate today's data.** Eleven issues opened by @tt-a1i all target cases where numeric parameters accept fractional, negative, or otherwise invalid values (max sessions, max connections, read_file offsets, LSP positions, timeouts). This suggests either an automated validation audit or a systematic fuzzing effort. The maintainers merged most fixes rapidly, but the volume (20 PRs from one account in one day) prompted PR #5723 to establish batch-detection guards.

**Environmental variable handling remains a recurring frustration.** Issue #3877 has been open since May 6 and still lacks a fix — users expect `~/.qwen/.env` to be respected automatically, but the CLI enters an auth wizard instead.

**CI/triage reliability concerns.** Issues #5634 (autofix label trust) and both #5697/#5695 (triage skipping issues with CI fixtures or JSON stack traces) suggest the automated issue management pipeline has edge cases that cause either silent escalations or silent skips.

</details>