# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 00:25 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-05

## Daily Cross-Tool Overview

Today's activity across AI CLI tools shows a split between steady-state maintenance and acute incident response. **Claude Code** and **OpenAI Codex** saw routine patch cycles and infrastructure work, while **OpenCode** is managing a widespread DeepSeek V4 Flash outage affecting both Free and Go-tier users, with over 15 issues filed in 24 hours. **Kimi Code** had the most productive day by PR volume, merging 10 pull requests focused on MCP OAuth fixes and memory leak corrections. A notable cross-tool observation: three of four tools have active issues around MCP server lifecycle management, authentication failures, or documentation gaps.

## Activity Comparison

| Metric | Claude Code | OpenAI Codex | Kimi Code | OpenCode |
|---|---|---|---|---|
| **Issues Updated (24h)** | 50 | 50 | 19 | ~15+ (DeepSeek-only) |
| **Active PRs** | 3 | 10 (mostly bot merges) | 10 (non-bot) | 10 |
| **Releases Today** | v2.1.222 (patch) | 4 alpha releases (0.147.0-a.6.1–a.7) | v0.32.0 (minor) | v1.18.12, v1.18.13 (patches) |
| **Maintainer Response Visibility** | Low (no resolution on top issues) | Moderate (bot-driven PRs, no visible maintainer comments) | High (10 PRs merged, active issue responses) | Moderate (PRs under review, incident ongoing) |
| **Top Issue Attention** | Windows relaunch bug (#42776, 117 comments) | `/undo` restoration (#9203, 372 👍) | Subagent timer glitch (#2154, 2 comments) | DeepSeek V4 Flash failures (multiple issues, 15+ reports) |

## Shared Feature Directions

**MCP (Model Context Protocol) Reliability** — Appears across three tools:
- **Claude Code** (#83981): Duplicate frontmatter schemas between custom skills and plugin skills; SSH sessions omitting plugin hooks.
- **OpenAI Codex** (#19425, #30408, #36673): MCP tools not exposed to Desktop threads, per-thread process leaks (9+ GB RSS), intermittent handler registration failures.
- **Kimi Code** (#2606, #2620): Stale OAuth client registration blocking MCP authorization; PRs addressing re-registration and redirect URI mismatches.

**Right-to-Left (RTL) and Internationalization Support** — Both **Claude Code** (#38005, 90 👍) and **OpenCode** (v1.18.13 release notes, fixed RTL layout in Desktop) are addressing RTL rendering. Claude Code remains a high-upvoted open request; OpenCode shipped a fix today.

**Session Continuity / History Visibility** — **OpenAI Codex** (#21079) requests CLI sessions appear in Desktop history. **Kimi Code** (#2602) reports session resume layout bugs. **Claude Code** (#80834) has background tasks that never notify completion. All three face gaps in session state management across interfaces.

**Undo / Rollback Safety Net** — **OpenAI Codex** (#9203, 372 👍) is the strongest signal, but **Claude Code**'s v2.1.222 patch (fixing destructive git commands in worktree-isolated sessions) addresses a related concern: preventing unintended permanent changes. **Kimi Code** has no equivalent undo feature request visible.

**Configurable TUI Behavior** — **Claude Code** (#13378, 72 👍) wants configurable indent and wrapping; **Kimi Code** (#2587) reports CJK text overflow; **OpenCode** (#15771) adds configurable paste summary thresholds. All three tools have users requesting terminal output customization.

## Differentiation Analysis

**Platform Focus**:
- **Claude Code** has the most visible Windows-specific issues (6+ in top 30), including desktop relaunch failure, PowerShell syntax errors, and voice playback degradation. Windows users are a significant but poorly served segment.
- **OpenAI Codex** also has Windows-specific issues (auto-update restart failure, hidden history after provider switch) but fewer quantitative reports.
- **Kimi Code** and **OpenCode** show no Windows-specific pain points in today's data, suggesting macOS/Linux dominance or smaller Windows user bases.

**Model Provider Strategy**:
- **Claude Code** is tied to Anthropic's Claude models; issues reference `claude-fable-5` and interleaved thinking bugs.
- **OpenAI Codex** is OpenAI's own tool, but issues mention custom provider switching and Amazon Bedrock compaction support.
- **Kimi Code** uses Moonshot AI's own models (kimi-k3, k3-256k) but also has ACP adapter for third-party backends.
- **OpenCode** is the most provider-agnostic: supports multiple models, and today's DeepSeek V4 Flash outage demonstrates the operational risk of multi-provider dependency.

**Community and Maintainer Dynamics**:
- **Claude Code** shows high user engagement (117 comments on Windows bug, 72 👍 on TUI config) but low maintainer responsiveness—no resolution on top issues, only 3 PRs active.
- **OpenAI Codex** is dominated by automated bot activity (PRs from `copyberry[bot]`), with no visible human maintainer comments in hot issues. The `/undo` demand (372 👍) has no maintainer response.
- **Kimi Code** is the most responsive: 10 PRs merged today, maintainer comments visible on issues, and a clear pattern of closing issues with fixes.
- **OpenCode** is in incident-response mode for DeepSeek, with multiple fix PRs under review and moderate engagement.

**Security and Isolation**:
- **Claude Code** v2.1.222 explicitly addresses worktree session isolation and tool restriction bypass—a focus on preventing destructive operations.
- **OpenAI Codex** #36960 adds directory trust prompts before project-local config takes effect.
- **Kimi Code** #2581 fixes host header forwarding to third-party endpoints.
- **OpenCode** has no security-focused changes today.

## Community Activity Notes

**Kimi Code** is the most active tool by meaningful PR volume (10 non-bot PRs, 10 merged) and maintainer engagement. The MCP OAuth fix cluster (4 PRs for 3 issues) shows concentrated response to a specific pain point.

**OpenCode** has the highest incident intensity: 15+ DeepSeek V4 Flash issues in 24 hours, with a clear pattern of blank responses, HTTP 500/403, and wrong model version serving. The community is actively reporting across Free and Go tiers.

**Claude Code** has the highest issue volume (50 updated) but the lowest maintainer engagement. The Windows relaunch bug (#42776) is a four-month-old thread with 117 comments and no resolution.

**OpenAI Codex** is in a quiet infrastructure phase. The 10 PRs are all bot-driven internal changes; no human-visible feature development or bug fixes for end-user issues. The top community demand (/undo restoration) has no maintainer response.

## Evidence-Backed Observations

1. **MCP lifecycle management is a cross-tool reliability gap.** Three of four tools (Claude Code, OpenAI Codex, Kimi Code) have active issues about MCP process leaks, stale registrations, handler registration failures, or documentation gaps. No tool has a complete, reliable MCP implementation yet.

2. **Data loss reports are recurring across tools.** Claude Code has silent text block drops (#74260), OpenAI Codex has missing undo and hidden history after provider switch (#31625, #9203), and Kimi Code has context overflow misreported as auth error (#2613). These are distinct bugs but share a pattern of reducing user trust in session fidelity.

3. **Windows stability remains a persistent weakness for Claude Code and OpenAI Codex.** Both tools have multiple Windows-specific blocking issues: desktop relaunch failure, orphaned processes, auto-update crashes. Kimi Code and OpenCode show no equivalent Windows pain points, which may reflect platform prioritization or smaller user bases.

4. **RTL and internationalization support is a shared gap now being addressed.** Claude Code's #38005 (90 👍) is the highest-upvoted feature request, while OpenCode shipped RTL fixes in v1.18.13 today. This is a clear cross-tool priority for reaching Hebrew and Arabic-speaking developer communities.

5. **No clear cross-tool signal on model provider strategy.** While OpenCode's DeepSeek V4 Flash outage is the biggest single event today, it's a provider-specific incident rather than a trend. The other tools operate on distinct model stacks with no shared provider dependency visible in today's data.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-05

## Today's Update Brief

A minor patch release (v2.1.222) shipped today addressing two security-related tool isolation fixes. Issue activity remains high with 50 items updated in the last 24 hours, including a four-month-old Windows relaunch bug (#42776) that continues to attract comments (117 total). Three pull requests were active, including a documentation contribution for plugin streaming semantics and a symlink fix for Linux installs.

## Releases

**v2.1.222** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

- Fixed worktree-isolated sessions and their subagents being able to run destructive git commands against the main checkout; isolation now applies to file edits and Bash in every session type.
- Fixed PreToolUse auto-allow hooks bypassing tool restrictions in background agent tasks.

## Hot Issues

1. **#42776 — [BUG] Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock**
   [Link](https://github.com/anthropics/claude-code/issues/42776)
   *Comments: 117 | 👍: 51*
   A long-standing Windows issue (filed April 2026) where the desktop app cannot relaunch because a previous process holds a file lock. The thread has become a magnet for user frustration, with 117 comments and no maintainer resolution visible. Affects the core desktop workflow of restarting after updates or crashes.

2. **#38005 — RTL (Right-to-Left) Support for Hebrew & Arabic in Claude Desktop / Cowork**
   [Link](https://github.com/anthropics/claude-code/issues/38005)
   *Comments: 41 | 👍: 90*
   The most-upvoted open feature request. Users in Hebrew and Arabic markets cannot use Claude Code for any text-heavy workflow because the TUI and Cowork views don't support RTL rendering. Labeled `duplicate` and `enhancement`, but no milestone or assignee visible.

3. **#74260 — Assistant text blocks silently dropped when followed by more thinking in the same turn**
   [Link](https://github.com/anthropics/claude-code/issues/74260)
   *Comments: 24 | 👍: 15*
   A data-loss bug in adaptive thinking mode: when a `text` block is followed by a `thinking` block in the same turn, the text block is never rendered and is missing from transcript JSONL. Affects model `claude-fable-5` with interleaved thinking. Has a `has repro` label and detailed reproduction steps.

4. **#23704 — [BUG] Read tool's PDF support requires poppler-utils but it's undocumented**
   [Link](https://github.com/anthropics/claude-code/issues/23704)
   *Comments: 15 | 👍: 19*
   The Read tool claims PDF support but silently depends on `pdftoppm` from `poppler-utils`, which is absent from most container images and CI environments. No error message guides users to install the dependency. No maintainer response since filing in February 2026.

5. **#13378 — 2-space indent and hard wrap at 80 breaks copy-paste**
   [Link](https://github.com/anthropics/claude-code/issues/13378)
   *Comments: 15 | 👍: 72*
   A long-running TUI usability complaint: code blocks are rendered with 2-space indentation and hard-wrapped at 80 columns, which corrupts code when pasted into editors. Users want configurable indentation and wrapping. No maintainer confirmation of a fix.

6. **#61021 — Can no longer easily select text to copy and paste**
   [Link](https://github.com/anthropics/claude-code/issues/61021)
   *Comments: 15 | 👍: 11*
   A regression in the VSCode terminal integration: selecting text by mouse and copying with Ctrl+C no longer works when Claude Code is running. Affects a core developer workflow. Filed May 2026, still open.

7. **#72248 — Workflow tool delivers JSON args as string instead of parsed object**
   [Link](https://github.com/anthropics/claude-code/issues/72248)
   *Comments: 9 | 👍: 0*
   When a Workflow tool receives `args` as a JSON object, the workflow script receives a JSON-encoded string instead of a parsed object. Contradicts the documented "verbatim" contract. A `has repro` bug with clear impact on programmatic workflow tool usage.

8. **#72123 — [BUG] Read Out Loud / Play voice degrades mid-playback**
   [Link](https://github.com/anthropics/claude-code/issues/72123)
   *Comments: 7 | 👍: 1*
   Windows desktop audio playback of assistant responses degrades mid-stream: volume softens, speed increases, voice quality changes, then fades. No workaround documented.

9. **#82131 — Autocompact is thrashing: context refilled to limit within 3 turns**
   [Link](https://github.com/anthropics/claude-code/issues/82131)
   *Comments: 3 | 👍: 0*
   A performance issue where autocompact triggers repeatedly in rapid succession (3 compactions in 3 turns), each time the context refilling immediately. Reduces the usefulness of compaction and adds latency.

10. **#80834 — Background Bash "You will be notified when it completes" is false for subagents that stop**
    [Link](https://github.com/anthropics/claude-code/issues/80834)
    *Comments: 2 | 👍: 2*
    When a subagent stops, the background Bash tool copy offers to notify the user but never does. Shell tasks orphan while agent children correctly resume the parent. A subtle workflow break for users relying on background tasks.

## Key PR Progress

Only three PRs were active in the last 24 hours. Activity is low.

1. **#83890 — Create pylint.yml**
   [Link](https://github.com/anthropics/claude-code/pull/83890)
   A new GitHub Actions workflow for running pylint. No review comments or maintainer response yet.

2. **#83374 — docs(plugin-dev): document MessageDisplay streaming semantics**
   [Link](https://github.com/anthropics/claude-code/pull/83374)
   Adds `MessageDisplay` to the bundled Hook Development skill's trigger description, event guidance, and quick-reference table. Addresses a documentation gap where a supported hook event was omitted from plugin development guidance.

3. **#83738 — Fix/83484 symlink path expansion**
   [Link](https://github.com/anthropics/claude-code/pull/83738)
   Fixes a Linux install issue where `claude install` creates a broken symlink `~/.local/bin/claude` containing a literal `%h` placeholder instead of the expanded home directory path. References issue #83484.

## Feature Request Clusters

- **RTL / Internationalization** — Led by #38005 (90 👍), users in Hebrew and Arabic markets are blocked from using Claude Code for text-heavy workflows. No other locale-specific issues appear in the top 30, suggesting this is a focused but significant gap for a specific user population.

- **Configurable TUI behavior** — Multiple requests for customization: indent width and line wrapping (#13378, 72 👍), text selection behavior in terminals (#61021), and persistent project tag derivation from folder names (#81628). These cluster around the experience of reading and copying code from the TUI.

- **Documentation gaps** — Undocumented dependencies (#23704, poppler-utils for PDF reading), undocumented frontmatter schema differences between custom skills and plugin skills (#83981), and no guidance on common HTTP error codes from the WebFetch tool (#83984). Users frequently discover required dependencies or schema rules only by failure.

- **Model selection persistence** — #80614 reports that `/model` selections are not persisted across restarts, falling back to a different Sonnet model. This conflicts with the UI's confirmation message that the selection was "saved as your default."

## Developer Pain Points

- **Windows-specific issues dominate** — At least 6 of the top 30 issues are Windows-only: desktop relaunch failure (#42776), Bash tool syntax errors on PowerShell (#83243), orphaned processes, voice playback degradation, MCP server duplication, and startup crashes in v2.1.221 (#83982). Windows users are encountering blocking issues across installation, runtime, and core tool workflows.

- **Data loss and context corruption** — Multiple independent reports of silent data loss: text blocks dropped during interleaved thinking (#74260), fabricated user turns inside assistant messages (#79293), compaction thrashing that wastes context (#82131), and injected system annotations in Bash tool results (#74651). These are difficult to debug and erode trust in session fidelity.

- **Background and subagent workflow fragility** — Background Bash tasks that never notify completion (#80834), backgrounding an interactive session that drops all prior context (#83971), and subagents that can bypass isolation (#42776's root cause in the release notes). Users who rely on async or multi-agent workflows are hitting subtle state management bugs.

- **Plugin and hook ecosystem friction** — Desktop SSH sessions omitting plugin hooks (#83643), duplicate frontmatter schemas between custom skills and plugin skills (#83981), and notification hooks not firing for permission prompts in VS Code (#55875). Plugin developers and advanced users face inconsistent behavior across session types.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-05

## Today’s Update Brief
Four Rust-based alpha releases (0.147.0-alpha.6.1 through 0.147.0-alpha.7) were published in the last 24 hours. The issue tracker saw 50 items updated, with the most active thread (68 comments) demanding the return of the `/undo` command. Pull requests are dominated by automated bot merges focusing on internal infrastructure, Cursor session import improvements, and security hardening.

---

## Releases
- **rust-v0.147.0-alpha.6.1**, **rust-v0.147.0-alpha.6.3**, **rust-v0.147.0-alpha.6.4**, **rust-v0.147.0-alpha.7** – No changelog details provided beyond the version bump. Likely iterative fixes for the Rust-based CLI/exec-server.

---

## Hot Issues (10 Noteworthy)

### #9203 – [OPEN] Please make "/undo" back
**Author:** @SunRunAway · **Comments:** 68 · **👍:** 372
**Workflow:** CLI/terminal session. `/undo` was removed; users rely on it to revert accidental file deletions or modifications not tracked by git.
**Impact:** High. Many users report data loss.
**Community reaction:** 372 upvotes, multiple requests to restore.
https://github.com/openai/codex/issues/9203

### #16857 – [OPEN] High GPU usage while the app is “thinking” due to tiny useless animation
**Author:** @homm · **Comments:** 38 · **👍:** 46
**Workflow:** Desktop app on macOS. An idle animation keeps GPU busy during model reasoning.
**Impact:** Battery drain and fan noise on Apple Silicon.
**Community reaction:** Users share power consumption logs.
https://github.com/openai/codex/issues/16857

### #19425 – [OPEN] Custom stdio MCP server discovered but tools not exposed to Desktop threads
**Author:** @arbenl · **Comments:** 28 · **👍:** 5
**Workflow:** MCP integration in Desktop. Tools are listed but not usable in threads.
**Impact:** Blocks MCP-based workflows. Regression suspected in app-server 0.124.0-alpha.2.
https://github.com/openai/codex/issues/19425

### #30408 – [OPEN] MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)
**Author:** @kkkayye · **Comments:** 22 · **👍:** 6
**Workflow:** Desktop app-server spawns MCP processes for each thread; they accumulate indefinitely.
**Impact:** Memory exhaustion on long-running sessions.
https://github.com/openai/codex/issues/30408

### #28080 – [OPEN] Desktop thread tools intermittently lose handlers (`No handler registered`)
**Author:** @Hogna67 · **Comments:** 16 · **👍:** 2
**Workflow:** Windows Desktop. Active session suddenly fails to invoke tools.
**Impact:** Interrupts developer workflows.
https://github.com/openai/codex/issues/28080

### #21079 – [OPEN] Make Codex CLI sessions available in Codex Desktop history
**Author:** @lancewillett · **Comments:** 15 · **👍:** 13
**Workflow:** Cross-platform session continuity. CLI sessions are invisible to Desktop.
**Impact:** Users want a unified history.
https://github.com/openai/codex/issues/21079

### #29787 – [CLOSED] Codex app doesn't restart after update
**Author:** @kendonB · **Comments:** 12 · **👍:** 2
**Workflow:** Windows App auto-update – click update button, app closes but never reopens.
**Impact:** Requires manual relaunch or restart.
https://github.com/openai/codex/issues/29787

### #31625 – [OPEN] Desktop on Windows hides local history after switching custom OpenAI-compatible providers
**Author:** @QiuYe-123 · **Comments:** 6 · **👍:** 0
**Workflow:** Changing custom model provider causes history to disappear.
**Impact:** Data loss – users must re-import sessions.
https://github.com/openai/codex/issues/31625

### #36673 – [OPEN] Desktop intermittently exposes thread tools without registered handlers
**Author:** @futurenowlabs · **Comments:** 2 · **👍:** 0
**Workflow:** Model sees `list_threads`, `read_thread`, etc. but invocation fails with “No handler registered”.
**Impact:** Sporadic workflow disruption.
https://github.com/openai/codex/issues/36673

### #36988 – [CLOSED] Desktop Browser Use iab bootstrap fails with `Cannot redefine property: process`
**Author:** @srt54558 · **Comments:** 2 · **👍:** 0
**Workflow:** In-app browser (IAB) fails to initialize on macOS.
**Impact:** Browser Use feature unusable.
https://github.com/openai/codex/issues/36988

---

## Key PR Progress (10 Important)

### #36993 – Support `includeTurns` reads for paginated threads
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** Allows clients using `thread/read` with `includeTurns: true` to get the full legacy view even when history is stored paginated.
https://github.com/openai/codex/pull/36993

### #36992 – Allow injecting model catalog caches
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** Adds a public `ModelsCache` contract so providers can supply custom cache implementations.
https://github.com/openai/codex/pull/36992

### #36990 – Remove legacy collaboration mode variants
**Status:** Closed · **Author:** copyberry[bot]
**Cleanup:** Deletes hidden `PairProgramming` and `Execute` modes, simplifying prompt templates.
https://github.com/openai/codex/pull/36990

### #36987 – Add opt-in concurrent exec-server request dispatch
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** `--concurrent-requests <COUNT>` flag to prevent long-running requests from blocking health checks.
https://github.com/openai/codex/pull/36987

### #36986 – Add process-scoped PSP routing for ChatGPT requests
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** Hidden `--psp` flag to route ChatGPT requests through a specific PSP, with `oai-chat-psp=true` cookie.
https://github.com/openai/codex/pull/36986

### #36984 – Support configured ChatGPT cookies in HTTP clients
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** `HttpClientFactory` can now carry additional ChatGPT cookies, enabling cookie-based authentication.
https://github.com/openai/codex/pull/36984

### #36981 – Enable remote compaction for Amazon Bedrock
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** Amazon Bedrock provider now uses v1 compaction endpoint.
https://github.com/openai/codex/pull/36981

### #36976 – Honor explicit-only orchestrator skills
**Status:** Closed · **Author:** copyberry[bot]
**Fix:** Skills with `allow_implicit_invocation: false` are no longer exposed in the model-visible catalog.
https://github.com/openai/codex/pull/36976

### #36966 – Allow disabling the built-in image viewer
**Status:** Closed · **Author:** copyberry[bot]
**Feature:** New stable flag `features.view_image` (default enabled) to omit the `view_image` tool.
https://github.com/openai/codex/pull/36966

### #36960 – Prompt before trusting local project directories
**Status:** Closed · **Author:** copyberry[bot]
**Security:** Users must explicitly trust a directory before project-local config, hooks, and exec policies take effect.
https://github.com/openai/codex/pull/36960

---

## Feature Request Clusters

- **Undo/rollback functionality** – The high‑demand request to restore `/undo` (issue #9203, 372 👍) is the clearest cluster. Users want a safety net for unintended file changes.
- **Session continuity across CLI and Desktop** – Several issues (#21079, #14722, #25741) ask for CLI sessions to appear in Desktop history, and for the ability to resume sessions across devices.
- **Custom model provider improvements** – Issues #31625 and #28080 touch on history loss and tool handler failures when switching providers or using custom OpenAI-compatible endpoints.
- **MCP server lifecycle management** – Multiple MCP‑related bugs (#19425, #30408, #36673) point to missing process cleanup, handler registration, and tool exposure.

---

## Developer Pain Points

- **Data loss from missing undo** – Currently the most upvoted complaint (372 👍). Users who rely on git‑untracked workspaces feel vulnerable.
- **GPU drain from idle animation** – macOS users report the app consumes significant GPU resources even when idling, hurting battery life.
- **MCP process leaks** – Orphaned per‑thread MCP processes can accumulate to 9+ GB RSS, requiring manual cleanup.
- **Windows‑specific inconsistencies** – Many issues from @kendonB (e.g., archive not working, incorrect config file resolution, slow startup) indicate ongoing platform stability gaps on Windows and WSL.
- **Intermittent tool handler failures** – Both #28080 and #36673 describe a “No handler registered” error that breaks sessions mid‑flow, making the desktop app unreliable for critical work.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-05

## Today's Update Brief

A productive day with 19 active issues and 42 pull requests, driven by a new v0.32.0 release and a concentrated burst of MCP OAuth fixes from the community. The maintainer team merged 10 PRs, primarily addressing MCP authentication reliability, TUI memory leaks, and provider compatibility. Three new bug reports emerged around agent reliability degradation at high context fill and terminal rendering issues on macOS.

## Releases

**@moonshot-ai/kimi-code@0.32.0** — Minor release adding telemetry/event infrastructure: `TurnStarted`, `UserPromptQueued`, `TaskStarted`, and `SessionHeartbeat` events. No breaking changes. ([Release link](https://github.com/MoonshotAI/kimi-code/pull/2592))

---

## Hot Issues

**1. [#2154 — TUI Subagent Panel Timer Glitch](https://github.com/MoonshotAI/kimi-code/issues/2154)** (OPEN, 2 comments)
Foreground subagents that have completed remain listed as "running" in the TUI side panel, with elapsed timers that never stop (and occasionally go negative). This affects visual feedback for users managing parallel agent workflows. The panel's "N 运行中" count quickly becomes inaccurate, making it difficult to track actual agent state.

**2. [#2582 — VS Code Yolo Mode Degradation After Idle](https://github.com/MoonshotAI/kimi-code/issues/2582)** (CLOSED, 2 comments)
A session started in `yolo` mode silently degrades to manual approval after ~80 minutes of idle time. Every Bash tool call triggers a confirmation prompt, even commands matching the user's own approval rules. Affects VS Code extension v0.6.7 users who rely on long-running autonomous sessions.

**3. [#2606 — MCP OAuth Stale Client Registration](https://github.com/MoonshotAI/kimi-code/issues/2606)** (OPEN, 1 comment)
Dynamic client registration (DCR) credentials are persisted and reused across sessions. When the OAuth provider expires or drops the registration, authorization fails with "Invalid redirect URI" until the user manually deletes `credentials/mcp/<key>-client.json`. Blocks MCP OAuth flows in long-lived setups.

**4. [#2613 — Context Overflow Misreported as Auth Error](https://github.com/MoonshotAI/kimi-code/issues/2613)** (OPEN, 1 comment)
On the 256K context model (`kimi-code/k3-256k`), context-overflow errors (HTTP 401 "supports only 256K context") are incorrectly surfaced as JSON-RPC error -32000 ("Authentication required"). This is particularly confusing because the session works fine on the unlimited model, making the root cause non-obvious.

**5. [#2589 — Image Paste Broken in Ghostty Terminal](https://github.com/MoonshotAI/kimi-code/issues/2589)** (OPEN, 1 comment)
`Ctrl-V` image paste does not work in Ghostty on macOS, despite the UI hint showing "Image in clipboard — Ctrl+V to paste". Drag-and-drop is also unsupported. Affects macOS users who rely on Ghostty as their primary terminal.

**6. [#1911 — TUI and -p Mode Hang on kimi-k3 (Max Effort)](https://github.com/MoonshotAI/kimi-code/issues/1911)** (OPEN, 1 comment, 1 👍)
Both interactive TUI and non-interactive `-p` mode hang indefinitely on the `kimi-k3` model with `max` effort. `Ctrl+C`/`Esc` are unresponsive for 10+ minutes. The agent also exceeds instructed scope. This has been open since July 19, suggesting a persistent issue with the "max effort" model path.

**7. [#1855 — ACP Adapter Missing Token Usage Reporting](https://github.com/MoonshotAI/kimi-code/issues/1855)** (OPEN, 1 comment)
The ACP adapter leaves `PromptResponse.usage` empty and emits no `usage_update` events on `turn.ended`. Downstream ACP clients (Multica, OpenCode, Claude Code using Kimi as backend) have zero visibility into token consumption, making cost tracking and debugging impossible.

**8. [#2587 — CJK Text Overflow in TUI](https://github.com/MoonshotAI/kimi-code/issues/2587)** (OPEN, 1 comment)
Chinese/Japanese/Korean characters render beyond the terminal edge in TUI mode, with no wrapping applied. Characters are clipped on the right side. Affects v0.31.1 on macOS Ghostty (xterm-256color). Blocks CJK users from reading assistant output.

**9. [#2622 — Agent Reliability Degrades at ~500K Context Fill](https://github.com/MoonshotAI/kimi-code/issues/2622)** (OPEN, 0 comments)
New issue: across multiple long-running sessions, agents show a sharp reliability drop when context fill passes ~500K tokens. Symptoms include repetitive action loops, no escalation, and instruction drift. The same workflow works correctly below that threshold. This is a critical observation for users running complex multi-step code changes.

**10. [#2455 — Hook & Permission Parity Gaps vs Claude Code](https://github.com/MoonshotAI/kimi-code/issues/2455)** (OPEN, 0 comments)
A detailed mapping of hook and permission surface gaps between Kimi Code and Claude Code v2.1.220. Missing features include: split output channels, `suppressOutput`, `ask/defer` decisions, `updatedInput`, missing events, and dead ask rules. Blocks faithful porting of Claude Code plugin suites.

---

## Key PR Progress

**1. [#2621 — Fix TUI Memory Leak from Shell Transcripts](https://github.com/MoonshotAI/kimi-code/pull/2621)** (OPEN)
Trims shell-only transcript turns and caps stored output. Addresses unbounded memory growth when a session relies on `!` shell commands. The echo and output accumulate in transcript entries without cleanup, leading to OOM over long sessions. (Fixes #2556)

**2. [#2581 — Forward Host Headers Only to First-Party Endpoints](https://github.com/MoonshotAI/kimi-code/pull/2581)** (OPEN)
Fixes a privacy issue where `X-Msh-Device-Id` and other host identity headers were forwarded to third-party base URLs that happen to use a Kimi-type provider definition. The fix checks the actual endpoint origin, not just the provider type. (Fixes #2576)

**3. [#2533 — Drop Dynamic Timestamp from System Prompt](https://github.com/MoonshotAI/kimi-code/pull/2533)** (OPEN)
Removes a dynamic timestamp from the system prompt to restore prefix-cache hits. Every request currently gets a unique prompt prefix due to the changing timestamp, preventing prompt caching from working effectively. Benchmarks are pending.

**4. [#2620 — Re-register OAuth Client on Redirect URI Mismatch](https://github.com/MoonshotAI/kimi-code/pull/2620)** (OPEN)
Fixes the stale DCR registration problem (#2606) by re-registering the OAuth client when its redirect URI no longer matches. The root cause is that `startCallbackServer()` binds a random free port per flow, but the stored registration still points to the first flow's port.

**5. [#2612 — Bound Project Skill-Root Watch FD Footprint](https://github.com/MoonshotAI/kimi-code/pull/2612)** (OPEN)
Fixes file-descriptor exhaustion on macOS when a skill folder contains a very large file tree (e.g., bundling a Python runtime). After reaching the FD limit, every spawn fails with `EBADF` and all tools stop working. (Fixes #2542)

**6. [#2573 — Custom Agent Identity](https://github.com/MoonshotAI/kimi-code/pull/2573)** (CLOSED, merged)
Adds the ability to override the agent's self-naming in system prompts, User-Agent headers, and MCP client name. Enables running Kimi Code as part of another product without confusing the model or external services about the calling agent's identity.

**7. [#2610 — Session Thinking Effort Flag](https://github.com/MoonshotAI/kimi-code/pull/2610)** (OPEN)
Adds a CLI flag to override thinking effort when starting or resuming a session, without needing to modify `config.toml`. Supports different effort levels for interactive use, one-shot prompts, scripts, and CI. (Resolves #2535)

**8. [#2604 — Persistent Index Generations for MiniDB](https://github.com/MoonshotAI/kimi-code/pull/2604)** (CLOSED, merged)
A reliability and performance program for the embedded database backing global message search. Adds persistent index generations, lifecycle hardening, and recovery mechanisms. The global search (`POST /api/v1/search`) now handles crashes and rebuilds more gracefully.

**9. [#2593 — Engine-Native Image References via kimi-file://](https://github.com/MoonshotAI/kimi-code/pull/2593)** (OPEN, draft)
Proposes replacing base64-encoded images in prompts with native `kimi-file://` URIs that the model can re-read after context projection. Currently, pasted images are inlined as base64 data URLs with no on-disk file, making it impossible for the model to reference them after the context is compacted.

**10. [#2564 — Announce Date Changes via System Reminder](https://github.com/MoonshotAI/kimi-code/pull/2564)** (CLOSED, merged)
The v2 system prompt is rendered at profile bind and after compaction, but the date goes stale after midnight in long-lived sessions. This PR adds a system reminder when the date changes, keeping the model's temporal awareness accurate.

---

## Feature Request Clusters

**MCP Management Improvements**
Three closed issues today (#2619, #2617, #2618) were withdrawn by the same author, but the underlying requests are clear: users want CLI surfaces for MCP provisioning (editing `mcp.json` by hand is the only option), project-level hook configuration (currently global-only), and the ability to combine `--yolo`/`--auto` with `-p` for fully autonomous print-mode runs. The withdrawal suggests these may be planned or in discussion internally.

**Batch/Queued Message Merging**
[#2588](https://github.com/MoonshotAI/kimi-code/issues/2588) requests that queued messages be batched into a single API request, similar to Claude Code's behavior. Currently, each queued message triggers a separate API call after the current turn completes, which is wasteful and slow with thinking-intensive models.

**Image Paste & Terminal Compatibility**
[#2589](https://github.com/MoonshotAI/kimi-code/issues/2589) (Ghostty) and general image paste support gaps suggest a broader request for terminal-agnostic clipboard integration. The `kimi-file://` media resolver PR (#2593) may address the underlying architecture, but terminal-specific paste handling remains a surface issue.

**Hook & Permission Parity**
[#2455](https://github.com/MoonshotAI/kimi-code/issues/2455) systematically documents gaps vs Claude Code's hook surface. The maintainer response is not yet visible, but the level of detail suggests this is a reference document for the team's roadmap planning.

---

## Developer Pain Points

**MCP OAuth Reliability** — Three issues today (#2606, #2605, #2607) and four corresponding PRs (#2620, #2608, #2609, #2616) all focused on OAuth flow bugs. The stale client registration, missing auth opt-in on v2, and missing deadline propagation are blocking users who need MCP servers with OAuth authorization.

**Context Management Confusion** — The 256K context overflow misreported as an auth error (#2613) and the sharp reliability drop at ~500K fill (#2622) both point to a broader problem: users lack clear signals about context limits and degradation thresholds. The confusing error message turns a simple capacity issue into a debugging rabbit hole.

**TUI Rendering Bugs** — Two issues today (#2154 subagent timer glitch, #2587 CJK overflow) and the session resume layout bug (#2602) indicate ongoing TUI polish work. The subagent timer issue is particularly impactful for users running parallel agent workflows.

**VS Code Extension Stability** — The yolo mode degradation after idle (#2582) erodes trust in the extension's long-running session handling. Users who rely on `yolo` for autonomous operation face unexpected interruptions that require manual intervention.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-08-05

## Today’s Update Brief
Two patch releases (v1.18.12, v1.18.13) shipped, fixing RTL layout in the Desktop app and Azure GPT-5.5 reasoning issues in Core. The community is heavily focused on widespread DeepSeek V4 Flash failures across OpenCode Go and Free tiers, with more than 15 issues filed in the last 24 hours. Several PRs targeting stream retry and xAI authentication are under review.

## Releases
- **v1.18.13** – TUI: GitHub pull request reviews now include the PR number and URL in context. Desktop: fixed several right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions; fixed shared RTL behavior such as directional icons.
  [Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)

- **v1.18.12** – Core: fixed Azure GPT-5.5+ completion requests failing when reasoning is enabled (contributed by @frederiknsgo). Desktop: reduced composer lag when drafts include large pasted images or attachments; project search now matches any known recent project instead of only the first five.
  [Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.12)

## Hot Issues (10 selected)
1. **#16017 – [FEATURE] Add Go plan usage/balance API endpoint** – Requests rolling/weekly/monthly windows for subscription usage data. 126 👍, 29 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/16017)

2. **#39845 – DeepSeek V4 Flash requires “Enable models hosted in China”** – Mid-session change forces opt-in for China-hosted models, blocking users. 22 👍, 15 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/39845)

3. **#40480 – OpenCode Go deepseek-v4-flash returns HTTP 500** – Direct API call fails while mimo-v2.5 works fine on the same key. 3 👍, 8 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/40480)

4. **#40483 – DeepSeek v4 Flash Free returns blank response in Desktop on Windows 11** – UI shows thinking animation and completion sound but no text rendered. 0 👍, 7 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/40483)

5. **#40485 – deepseek-v4-flash via opencode-go returns 403/hangs** – Works on deepseek-v4-pro and minimax-m3 with the same key. 6 👍, 6 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/40485)

6. **#40409 – OpenCode Go deepseek-v4-flash serves wrong model version** – Returns V3.2 (knowledge cutoff 2025-05) instead of V4 Flash 0731. 0 👍, 5 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/40409)

7. **#38723 – `opencode run` intermittently hangs during init** – ~56% failure rate, no output or error, only way out is external timeout. 1 👍, 4 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/38723)

8. **#40171 – Go service /v1/responses emits incomplete SSE stream** – Missing events for Codex-style clients; streaming broken. 2 👍, 3 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/40171)

9. **#40525 – Desktop app stuck on ECONNREFUSED 127.9.9.9:443** – Clean install loops with connection refused error. 0 👍, 2 comments.
   [Issue](https://github.com/anomalyco/opencode/issues/40525)

10. **#40471 – Agents not replying** – Agent stuck at thinking, no response. 0 👍, 13 comments (closed as duplicate).
    [Issue](https://github.com/anomalyco/opencode/issues/40471)

## Key PR Progress (10 selected)
1. **#40538 – fix(core): use xAI device authentication** – Replaces loopback OAuth with RFC 8628 device flow for SuperGrok. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40538)

2. **#40537 – fix(opencode): use xAI device authentication** – Same change as #40538 but targeted at the opencode package. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40537)

3. **#40535 – fix: retry empty incomplete streams** – Retries terminal-less streams classified as invalid provider output. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40535)

4. **#40230 – fix(opencode): register solid transform from any cwd** – Fixes black screen when running from source outside repo. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40230)

5. **#40403 – feat(session): auto-compact stale sessions resumed after idle** – Reduces cost of resuming long sessions. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40403)

6. **#40509 – fix(core): gate durable event persistence** – Adds option to disable durable events for V1 and HTTP runtimes. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40509)

7. **#40427 – [beta] some experimental perf improvements** – Reduces renderer blocking tasks on Home startup. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40427)

8. **#40531 – fix(opencode): retry empty unknown responses** – Detects and retries attempts that finish without producing content. Open.
   [PR](https://github.com/anomalyco/opencode/pull/40531)

9. **#30472 – fix(tui): support copying over ssh with `set-clipboard on` tmux config** – Long-standing clipboard fix for Wayland/Tmux environments. Open.
   [PR](https://github.com/anomalyco/opencode/pull/30472)

10. **#15771 – feat(tui): add configurable paste summary thresholds** – Introduces `paste_min_lines` and `paste_min_length` settings. Open.
    [PR](https://github.com/anomalyco/opencode/pull/15771)

## Feature Request Clusters
- **Go Plan Usage API** – Several requests for a public endpoint exposing subscription usage data (rolling/weekly/monthly). #16017 is the primary ticket.
- **Configurable Exit Confirmation** – Users on macOS want a confirmation dialog before quitting with Ctrl+D to avoid accidental exits (#40510).
- **Flatpak Auto-Update Support** – Request to gate the desktop app’s auto-updater when running as a Flatpak, using the Flatpak UpdateMonitor portal (#39670).

## Developer Pain Points
- **DeepSeek V4 Flash Outage / Misconfiguration** – Over a dozen reports in 24 hours: model returning blank responses, HTTP 500/403, wrong model version, and sudden China-hosted requirement. Affects both Free and Go plan users.
- **Intermittent Hangs on `opencode run`** – ~56% failure rate with no error output, requiring manual timeout (#38723).
- **Clipboard Issues in Terminal/SSH** – Copy-on-select fails in Tmux on Kitty/Linux, and WSL clipboard paths are missing (#36646, #9999, #30472).
- **Incomplete SSE Streams** – Go service’s `/v1/responses` endpoint missing critical events for OpenAI-compatible clients (#40171).

</details>