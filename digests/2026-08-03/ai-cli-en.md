# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 00:25 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-03

## 1. Daily Cross-Tool Overview

No new releases were published today for any of the four tracked AI CLI tools. Community activity remained high across all projects, with a combined total of 158 issues and 70 pull requests updated in the last 24 hours. Common themes include desktop stability issues (Claude Code, Codex, OpenCode), data loss and configuration inconsistencies (Claude Code, Kimi Code), and token/context management concerns (Claude Code, Codex, Kimi Code, OpenCode). Subagent observability and context window visibility emerged as shared feature requests between Kimi Code and OpenCode.

## 2. Activity Comparison

| Tool | Issues Updated | PRs Updated | Release Today |
|------|---------------|-------------|--------------|
| Claude Code | 30 | 3 | None |
| OpenAI Codex | 50 | 5 | None |
| Kimi Code | 28 | 12 | None |
| OpenCode | 50 | 50 | None |

*Note: Counts reflect items opened, updated, or commented on within the past 24 hours as reported in each digest.*

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

- **Subagent observability and control** — Kimi Code ([#2131](https://github.com/MoonshotAI/kimi-code/issues/2131)) requests subagents as first-class observable sessions, while OpenCode ([#38966](https://github.com/anomalyco/opencode/issues/38966)) has requests for per-subagent steering and cancellation. Both communities want live monitoring and individual management of subagents.

- **Context window visibility** — Kimi Code ([#2346](https://github.com/MoonshotAI/kimi-code/issues/2346)) requests a visible token usage counter in the Zed ACP interface, and OpenCode ([#6152](https://github.com/anomalyco/opencode/issues/6152)) has a long-standing request for a context window breakdown TUI dialog (125 👍). Both reflect a need for developers to manage token budgets.

- **Memory and cross-session persistence** — Kimi Code ([#843](https://github.com/MoonshotAI/kimi-code/issues/843), [#2075](https://github.com/MoonshotAI/kimi-code/issues/2075)) requests native memory mechanisms for cross-session state, and OpenCode’s Memory Megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695)) is the most active issue (121 comments) with 94 👍. Both communities are pushing for better agent memory.

- **Desktop stability on Windows** — Codex reports multiple Windows-specific issues (slow performance [#23198](https://github.com/openai/codex/issues/23198), sandbox failures [#10090](https://github.com/openai/codex/issues/10090), Computer Use screenshot failures [#25178](https://github.com/openai/codex/issues/25178)), Kimi Code has a UNC path crash ([#2540](https://github.com/MoonshotAI/kimi-code/issues/2540)), and OpenCode has desktop first-launch hangs ([#38222](https://github.com/anomalyco/opencode/issues/38222), [#40170](https://github.com/anomalyco/opencode/issues/40170)). This is a shared pain point rather than a feature request.

## 4. Differentiation Analysis

- **Claude Code** is currently focused on model-level issues (Opus 5/xhigh effort incompatibility, Hangul substitution, degenerate repetition loops) and session traceability (session URLs in commits). Its community is split on privacy vs. traceability. The bundled ugrep memory spike and desktop crash requiring reinstall point to unresolved infrastructure stability.

- **OpenAI Codex** is dominated by the Linux desktop request (905 👍, 197 comments) and a cluster of Windows-specific bugs. The community shows strong demand for project-scoped chats and MCP server reliability. Subscription and rate-limit anomalies are a recurring concern. Codex appears to target enterprise users with sandboxing and Computer Use features.

- **Kimi Code** is undergoing a wave of monorepo restructuring proposals (22 issues from one contributor) and has a critical behavioral inconsistency between interactive and headless sessions (#2070). The community emphasizes hooks, permission rules, and cross-platform fixes (macOS file descriptors, Windows UNC paths, WezTerm rendering). Technical approach includes a v1/v2 engine split and DeepSeek integration.

- **OpenCode** is heavily engaged in resource management (memory leaks, temporary file leaks, AbortSignal listener leaks) with 50 PRs today. The community is pushing for plugin/hook extensibility (per-MCP trust, request-scoped model hooks) and TUI enhancements. The Effect-based config refactoring suggests a move toward more rigorous runtime architecture.

## 5. Community Activity Notes

- **OpenCode** is the most active today by total updated items (100 issues+PRs), with 50 PRs indicating strong maintainer or contributor output. Several PRs addressing memory leaks and process handling were closed, suggesting active investigation.

- **OpenAI Codex** has the second-highest issue activity (50 issues) and the most active single feature request (Linux desktop, 905 👍). However, maintainer responses are absent in several threads (e.g., subscription anomalies [#29968](https://github.com/openai/codex/issues/29968)).

- **Kimi Code** has a high PR-to-issue ratio (12 PRs for 28 issues) and many small, targeted fixes (tilde expansion, buffering race, type coercion). The WezTerm rendering fix and DeepSeek cache miss fix are well-documented.

- **Claude Code** has the lowest activity count (33 items) but includes several high-severity bugs (data loss, desktop crashes, model hallucination). Maintainer response is missing on a two-month-old session URL issue (#66504) and a crash requiring reinstall (#83403).

## 6. Evidence-Backed Observations

1. **Desktop stability is a cross-cutting pain point across three tools.** Claude Code reports a crash after ~5 hours requiring full reinstall ([#83403](https://github.com/anthropics/claude-code/issues/83403)). Codex has multiple Windows-specific bugs (slow performance, sandbox failures, Computer Use failures). OpenCode has two reports of desktop first-launch hangs on Windows ([#38222](https://github.com/anomalyco/opencode/issues/38222), [#40170](https://github.com/anomalyco/opencode/issues/40170)). No tool has a fully stable desktop experience on all platforms.

2. **Token and context management problems appear in all four tools.** Claude Code has a degenerate repetition loop wasting 32k tokens ([#82803](https://github.com/anthropics/claude-code/issues/82803)) and xhigh effort bugs. Codex has subagent disk usage hitting 10+ GB ([#34061](https://github.com/openai/codex/issues/34061)) and a 372K effective context cap vs. 1.05M model spec ([#31860](https://github.com/openai/codex/issues/31860)). Kimi Code has DeepSeek prefix-cache misses wasting 19.5k tokens per session ([#2532](https://github.com/MoonshotAI/kimi-code/issues/2532)). OpenCode has system-reminder placement breaking prompt cache ([#23595](https://github.com/anomalyco/opencode/issues/23595)) and 125 👍 for a context usage UI ([#6152](https://github.com/anomalyco/opencode/issues/6152)). This is the strongest cross-tool signal.

3. **Data loss and silent configuration failures are widespread.** Claude Code has three issues: mobile input lost on background ([#71603](https://github.com/anthropics/claude-code/issues/71603)), queued messages lost on session switch ([#77010](https://github.com/anthropics/claude-code/issues/77010)), and desktop crash requiring reinstall. Kimi Code has hooks and permission rules silently ignored in interactive mode ([#2070](https://github.com/MoonshotAI/kimi-code/issues/2070)). Codex has OneDrive stream disconnections causing data loss ([#35420](https://github.com/openai/codex/issues/35420)). Users report unexpected data loss across diverse workflows.

4. **Subagent observability and control is an emerging common requirement**, appearing in both Kimi Code ([#2131](https://github.com/MoonshotAI/kimi-code/issues/2131)) and OpenCode ([#38966](https://github.com/anomalyco/opencode/issues/389

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-03

## Today's Update Brief

Issue activity is moderate with 30 open/updated items, but no new releases shipped in the last 24 hours. A cluster of Opus 5 / xhigh effort bugs is drawing attention, alongside several reports of silent data loss on session switches and mobile backgrounding. Three pull requests are open, two focused on plugin documentation fixes.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

**1. Session URL appended to commit messages by default** ([#66504](https://github.com/anthropics/claude-code/issues/66504))
*Workflow:* Every commit and PR description generated by Claude Code includes a session URL; users must actively opt out. *Impact:* 44 👍, 11 comments. The community is split — some find it useful for traceability, others consider it a privacy leak and clutter in commit history. *Status:* Open for two months, maintainers have not yet responded.

**2. Opus 4.8: "xhigh" effort fails when thinking is disabled** ([#76689](https://github.com/anthropics/claude-code/issues/76689))
*Workflow:* Users with `alwaysThinkingEnabled: true` and `effortLevel: "xhigh"` get intermittent 400 errors. *Impact:* 10 comments, 11 👍. The bug affects VS Code extension versions 2.1.205–2.1.207. *Status:* Open, no fix yet.

**3. Mobile (Pixel 8 Pro): typed input silently discarded on background** ([#71603](https://github.com/anthropics/claude-code/issues/71603))
*Workflow:* User types while the agent is busy; the input becomes an unconfirmed draft. When the app is backgrounded, the draft is lost without warning. *Impact:* 6 comments, 3 👍. Silent data loss is a high-severity UX issue. *Status:* Open since June 26.

**4. Degenerate repetition loop — single token repeated ~32k times** ([#82803](https://github.com/anthropics/claude-code/issues/82803))
*Workflow:* Agent emits one token (e.g., "court") ~32,000 times until max_tokens, then terminates as a "normal" response with no error. *Impact:* 4 comments. Reproduces across two model generations. *Status:* Open since July 31.

**5. Opus 5 substitutes wrong Hangul syllables** ([#82588](https://github.com/anthropics/claude-code/issues/82588))
*Workflow:* Korean text generated by `claude-opus-5` contains incorrect but valid Hangul syllables — not mojibake. *Impact:* 3 comments. The reporter notes zero occurrences in 31,542 messages from other models. *Status:* Open, updated today.

**6. Desktop crashes near 5-hour usage limit, requires full reinstall** ([#83403](https://github.com/anthropics/claude-code/issues/83403))
*Workflow:* After ~5 hours of use, the Desktop app crashes. On reopening, it fails to load — only a full reinstall resolves the issue. *Impact:* 3 comments. *Status:* Opened yesterday, no maintainer response.

**7. Queued messages and unsent drafts lost on session switch** ([#77010](https://github.com/anthropics/claude-code/issues/77010))
*Workflow:* Switching sessions in the web UI or Desktop app silently discards any queued (pending) messages and unsubmitted draft text. *Impact:* 3 comments. *Status:* Open since July 12.

**8. Web Remote Control renders internal security envelope as chat bubble** ([#80454](https://github.com/anthropics/claude-code/issues/80454))
*Workflow:* In `claude.ai/code` remote viewing of a local CLI agent session, the internal peer-message authority envelope is rendered as a visible chat bubble. *Impact:* 3 comments. The reporter notes this is the 4th report of the same root cause since February 2026. *Status:* Open.

**9. WebSearch always returns HTTP 400 with xhigh/max effort on Opus 5** ([#83364](https://github.com/anthropics/claude-code/issues/83364))
*Workflow:* Every `WebSearch` tool call fails with 400 when session effort is set to `xhigh` or `max` on Opus 5. Regression from v2.1.219 default flip. *Impact:* 1 comment, but closely related to #76689. *Status:* Open since yesterday.

**10. Bundled ugrep balloons to 9–14 GB RSS** ([#83342](https://github.com/anthropics/claude-code/issues/83342))
*Workflow:* Claude Code's shell integration routes `grep` calls to a bundled `ugrep` binary. A bounded-interval BRE pattern causes RSS to spike to 9–14 GB. *Impact:* 2 comments. Affects Linux x86_64 with `ugrep 7.5.0`. *Status:* Open since yesterday.

## Key PR Progress

**1. docs(plugin-dev): add MessageDisplay hook guidance** ([#83374](https://github.com/anthropics/claude-code/pull/83374))
Adds documentation for the `MessageDisplay` hook event, which was missing from the bundled Hook Development skill's trigger descriptions and quick-reference table. Includes streaming field guidance. *Status:* Open, no comments.

**2. Fix code-review plugin posting to GitHub without --comment flag** ([#26056](https://github.com/anthropics/claude-code/pull/26056))
Strengthens guardrails so the model stops at terminal output when `--comment` is not provided. Adds a top-level behavioral rule, gates steps 8–9 with explicit conditionals, and a NEVER-post note. Related to #16606. *Status:* Open since February, no comments.

**3. fix(plugin-dev): make skill-reviewer frontmatter valid YAML** ([#48343](https://github.com/anthropics/claude-code/pull/48343))
Rewrites the `skill-reviewer` frontmatter description as a YAML block scalar to fix parsing. Related to #40370. *Status:* Open since April, no comments.

## Feature Request Clusters

**Session and commit metadata control** — Multiple requests ask for opt-in rather than opt-out behavior for session URLs in commits (#66504), and for sensible branch naming templates (#69909). Users want granular control over what metadata Claude Code attaches to version control operations.

**Multi-provider and multi-account support** — BYOK support for OpenAI, Gemini, OpenRouter etc. (#68840) and email-based account switching (#69906) both received multiple 👍. The community wants to use Claude Code with non-Anthropic models or manage separate work/personal accounts without logging out.

**Cross-session and cross-instance communication** — Requests for native cross-instance communication (#69912, closed as duplicate) and background session recovery when working directories are deleted (#69902) suggest users are building multi-session workflows and want robust session lifecycle management.

## Developer Pain Points

**Opus 5 / xhigh effort incompatibility** — Two separate bugs (#76689, #83364) show that the "xhigh" effort level is incompatible with thinking-disabled configurations on both Opus 4.8 and Opus 5. The error message is inconsistent, and the `WebSearch` tool is entirely non-functional at these effort levels on Opus 5.

**Session data loss** — Three distinct issues (#71603, #77010, #82854) report silent data loss: typed drafts lost on mobile background, queued messages lost on session switch, and `/usage` blocking remote-control sessions. The common pattern is that user input is silently discarded with no recovery mechanism.

**Desktop crashes and plugin update failures** — The crash at the 5-hour mark requiring full reinstall (#83403), the macOS Tahoe crash from disk-writes (#65239, closed stale), and the git-marketplace plugin auto-update failure (#73673) point to unresolved stability issues in the Desktop app, particularly around long-running sessions and plugin lifecycle management.

**Model hallucination of tool results** — Issue #68990 (closed stale) where the agent fabricated successful tool results for Edit calls that never executed, and the degenerate repetition loop (#82803), suggest that the model's self-consistency checks on tool execution are sometimes bypassed, producing misleading output.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-03

## Today's Update Brief

No new releases were published in the last 24 hours, but community activity remained high with 50 updated issues and 5 pull requests. The strongest signal continues to be the **Linux desktop app request** (#11023), which now has 905 reactions and 197 comments, indicating sustained demand for a native Linux client. A cluster of Windows-specific bugs—particularly around sandbox permissions, Computer Use, and in-app browser crashes—dominated the issue tracker today.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#11023] Codex desktop app for Linux** — Enhancement request for a native Linux desktop client. The author notes that the macOS app is nearly unusable due to a power-consumption bug, and a Linux version would bypass that issue entirely. The thread has 905 👍 and 197 comments, making it the most-requested feature in the tracker. [Link](https://github.com/openai/codex/issues/11023)

2. **[#3550] Scope Codex chats to VS Code projects/workspaces** — Request to make VS Code extension chats project-scoped instead of global. The current global Recent Tasks list makes it hard to keep sessions organized across multiple projects. 78 👍, 31 comments, closed with no merged fix visible. [Link](https://github.com/openai/codex/issues/3550)

3. **[#19425] Custom stdio MCP server tools not exposed to Desktop threads** — Regression in `0.124.0-alpha.2`: the Desktop app discovers MCP servers and lists tools, but never exposes them to threads or `tool_search`. Blocks any workflow relying on custom stdio MCP servers. 27 comments. [Link](https://github.com/openai/codex/issues/19425)

4. **[#21700] Computer Use Chrome extension unavailable in the Chrome Web Store** — The Chrome extension used by Codex Desktop's Computer Use feature shows an error page in the web store. No offline installer is provided. Users on Windows cannot use Computer Use/Chrome integration. 27 comments, 24 👍. [Link](https://github.com/openai/codex/issues/21700)

5. **[#35420] Work/Codex stream disconnects on OneDrive-backed Windows workspaces** — Requests repeatedly fail with "stream disconnected before completion" when the workspace is on a OneDrive folder whose service is degraded. Affects any Windows developer using OneDrive for syncing workspaces. 26 comments. [Link](https://github.com/openai/codex/issues/35420)

6. **[#10090] `elevated_windows_sandbox` causes all agent commands to fail with `(no output)`** — Sandboxed agent commands fail silently with `CreateProcessAsUserW failed: 5 (access denied)`. The bug has been open since January 2026 with 22 comments and 7 👍. [Link](https://github.com/openai/codex/issues/10090)

7. **[#23198] Codex Desktop on Windows is extremely slow** — The app is reported as "extremely slow" even when the machine is otherwise fine. The issue appears isolated to the Codex app, not the OS or hardware. 47 👍, 21 comments. [Link](https://github.com/openai/codex/issues/23198)

8. **[#25178] Windows Computer Use screenshot fails on Windows 10 22H2** — `get_window_state` calls that request a screenshot fail with `SetIsBorderRequired failed: 0x80004002`. The agent can list windows and send input but cannot capture screenshots, blocking visual grounding. 21 comments, 12 👍. [Link](https://github.com/openai/codex/issues/25178)

9. **[#34061] Insane Codex Disk Usage from Subagents** — Subagent sessions produce enormous disk usage, with one user reporting 10.2 GB of rollout JSONL for a single thread. The issue is traced to compacted records storing inline base64 PNG data URLs. 17 comments. [Link](https://github.com/openai/codex/issues/34061)

10. **[#29968] Pro20x subscription usage appears to be like that of Plus** — User reports that a Pro 20x subscription is being rate-limited and consuming weekly limits as if it were a Plus plan. No explanation from maintainers in the thread. 16 comments, 15 👍. [Link](https://github.com/openai/codex/issues/29968)

## Key PR Progress

1. **[#36635] Expose onboarding hints in login completion notifications** — Accepts a new `onboarding_entrypoint` suffix on OAuth state, returning parsed callback metadata without leaking it to the client. Closed. [Link](https://github.com/openai/codex/pull/36635)

2. **[#36632] Preserve SQLite thread metadata during goal mutations** — Stops rollout reconciliation from overwriting SQLite-only thread metadata (e.g., thread preview) when setting or clearing a goal. Prevents data loss. Closed. [Link](https://github.com/openai/codex/pull/36632)

3. **[#31781] Bound executor-controlled HTTP response buffering** — Adds a byte-level cap on streamed HTTP responses from the remote exec-server (an untrusted process). Prevents memory exhaustion attacks via large JSON-RPC frames. Open, code-reviewed. [Link](https://github.com/openai/codex/pull/31781)

4. **[#31817] Update models.json** — Automated update of model definitions. Open. [Link](https://github.com/openai/codex/pull/31817)

5. **[#36544] Support portable Agent Plugins throughout installation** — Updates packaging and installation paths to handle dotted names and version strings that don't fit the legacy directory-safe format. Closed. [Link](https://github.com/openai/codex/pull/36544)

## Feature Request Clusters

- **Linux Desktop App** (#11023): The dominant feature request by a wide margin. 905 👍, 197 comments. Users want a native Linux client, partly because the macOS app has a power-consumption issue that makes it unusable on laptops.

- **Project/Workspace-Scoped Chats** (#3550): Multiple requests to scope VS Code extension chats to the active workspace, so that the Recent Tasks list doesn't mix sessions from different projects. 78 👍.

- **Remote Control / Mobile Sync** (#27565): Users want a `/remote-control`-style feature (like Claude Code) that lets them transfer sessions between CLI, desktop, and mobile without SSH tunnels. 12 👍, 9 comments.

- **Customizable Session Retention** (#6015): Request for periodic cleanup of old conversation history files based on a user-defined retention window. Currently, every session is retained indefinitely. 15 👍.

- **SSH Remote Workspace Support** (#21509): Users want first-class SSH remote workspace support in Codex Desktop, not just running CLI over SSH manually. 2 👍, 6 comments.

## Developer Pain Points

- **Windows Performance and Stability**: Multiple open issues report that Codex Desktop on Windows is extremely slow (#23198, 47 👍), crashes during browser tab teardown (#34239, #35210), and fails at sandboxed command execution (#10090, #33114). Computer Use on Windows is also broken for screenshot capture (#25178) and Chrome extension installation (#21700).

- **Excessive Token/Credit Consumption**: Several users report that non-productive model turns (wait/status polling, high-frequency code-mode polling) consume significant credits (#35259, #32309). One Pro20x user reports their subscription being treated as Plus (#29968). The "insane disk usage" from subagents (#34061, 17 comments) is also tied to uncontrolled token and storage growth.

- **Context and Memory Management**: Long-running, image-heavy threads bloat session files to 10+ GB due to inline base64 PNG data URLs (#34863). The GPT-5.6 Sol model is capped at 372K effective context vs. a 1.05M model spec (#31860, 25 👍). Users want customizable session retention (#6015) to manage disk growth.

- **Subscription and Rate-Limit Anomalies**: Several users report billing and rate-limit inconsistencies (#29968, #29895) where higher-tier plans appear to be throttled like lower-tier plans. No official response in the threads.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-03

## Today's Update Brief

No new releases were published in the last 24 hours, but community activity remains high with 28 issues and 12 pull requests updated. The conversation is dominated by a large wave of monorepo restructuring proposals from a single contributor (22 issues), alongside several critical bug fixes and feature requests for hooks, memory, and subagent management.

## Releases

*None* — No new versions were published in the last 24 hours.

## Hot Issues

1. **#2070 [Open] Interactive sessions ignore [[hooks]] and [[permission.rules]] from config.toml; headless (-p) sessions enforce them** — *Author: [@seasonmsg](https://github.com/seasonmsg)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2070) | 👍 0
   A critical behavioral inconsistency: a user with 45 permission rules and 2 hooks reports that interactive sessions completely bypass the configured security policy, while headless (`-p`) sessions enforce them correctly. The issue has been open since July 22 and has 9 comments, indicating active discussion but no resolution yet. This affects anyone relying on hooks for approval workflows or permission gating in interactive mode.

2. **#1326 [Open] feat(hooks): let hooks participate in the approval decision** — *Author: [@rullerzhou-afk](https://github.com/rullerzhou-afk)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/1326) | 👍 3
   A feature request with 3 upvotes from a developer building a desktop pet that visualizes agent activity. The author praises the permission event design but wants hooks to be able to block or approve PermissionRequests. This reflects a growing demand for richer programmatic control over agent behavior.

3. **#2346 [Open] Support displaying context length usage in Zed ACP like Codex** — *Author: [@Radiant303](https://github.com/Radiant303)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2346) | 👍 0
   A UI enhancement request with a screenshot showing Codex's context window indicator. The user wants a visible token usage counter in the Zed ACP interface, which would help developers manage model context limits more effectively.

4. **#2131 [Open] Treat subagents as first-class observable sessions** — *Author: [@kaile9](https://github.com/kaile9)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2131) | 👍 2
   Two upvotes for making subagents visible and manageable: users want to attach to a subagent's live event stream, stop/steer/resume it individually. Currently subagents are opaque, which limits debugging and coordination in multi-agent workflows.

5. **#2543 [Open] feat(cli): expand a leading tilde in KIMI_CODE_HOME** — *Author: [@tagadearpit](https://github.com/tagadearpit)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2543) | 👍 0
   A subtle but common configuration pitfall: if a user sets `KIMI_CODE_HOME="~/.local/share/kimi-code"`, the literal `~` is not expanded, causing the path to resolve incorrectly. The fix is simple and has already been submitted as PR #2544.

6. **#2542 [Open] fix(agent-core): macOS file descriptor exhaustion in workspace scanner** — *Author: [@mbuckaway](https://github.com/mbuckaway)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2542) | 👍 0
   A macOS-specific resource exhaustion bug where the workspace scanner leaks file descriptors, potentially causing agent crashes on large projects. The contributor follows the project's guidelines by opening an issue for discussion before coding.

7. **#2540 [Open] Chat preflight fails on UNC (network share) workspaces: stat '\\server\.git\' throws UNKNOWN (Windows)** — *Author: [@no7749](https://github.com/no7749)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2540) | 👍 0
   A Windows-specific bug where extensions fail entirely when the workspace is on a network share (UNC path). The author provides a detailed diagnosis and patch guide, making this a well-documented report for Windows users.

8. **#2538 [Open] WezTerm: inline images degrade to a one-row sliver** — *Author: [@nothankyouzzz](https://github.com/nothankyouzzz)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2538) | 👍 0
   A terminal rendering bug in WezTerm where inline images (e.g., pasted image thumbnails) shrink to a single row. The root cause is the vendored pi-tui emitting a one-shot kitty placement that WezTerm doesn't handle during transcript redraws. A fix is already proposed in PR #2539.

9. **#2534 [Open] [tools].disabled is ignored by the default terminal CLI** — *Author: [@huahuadeliaoliao](https://github.com/huahuadeliaoliao)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2534) | 👍 0
   A configuration parsing bug: the `[tools].disabled` setting in `config.toml` is silently ignored by the v1 engine. The v2 engine handles it correctly, but v1 users have no way to disable tools. A fix is in progress via PR #2537.

10. **#2532 [Open] DeepSeek prefix-cache misses on every new session — first turn wastes ~19.5k tokens** — *Author: [@daofazhiran](https://github.com/daofazhiran)* | [Link](https://github.com/MoonshotAI/kimi-code/issues/2532) | 👍 0
    A performance issue with DeepSeek API: the system prompt contains a dynamic timestamp that changes every session, causing prefix-cache misses and wasting ~19.5k tokens on the first turn. A fix is proposed in PR #2533.

## Key PR Progress

1. **#2544 [Open] feat(cli): expand tilde in KIMI_CODE_HOME** — *Author: [@tagadearpit](https://github.com/tagadearpit)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2544) | 👍 0
   Resolves issue #2543. Expands `~` to the home directory, handles `~/...` and `~\...` forms, and leaves `~other/...` unchanged. Includes unit tests.

2. **#2263 [Open] fix(kaos): treat a leading ] in a glob character class as a literal** — *Author: [@LHMQ878](https://github.com/LHMQ878)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2263) | 👍 0
   Fixes a glob parsing bug where `[]` (a character class containing a literal `]`) was incorrectly parsed because the scanner mistook the first `]` as the terminator.

3. **#987 [Closed] feat(agent-core): add Monitor tool for real-time per-line stdout streaming** — *Author: [@Nitjsefnie](https://github.com/Nitjsefnie)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/987) | 👍 0
   A long-running PR (created June 22) that was closed today. Adds a Monitor tool for real-time stdout streaming, addressing the gap that the existing `/tasks` flow is poll-based.

4. **#2537 [Open] fix(agent-core): honor [tools].disabled config in v1 engine** — *Author: [@C0d3N1nja97342](https://github.com/C0d3N1nja97342)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2537) | 👍 0
   Resolves issue #2534. The v1 engine's `KimiConfigSchema` has no typed `tools` field, so the `[tools]` section was landing in `config.raw` and never read. This PR reads it properly.

5. **#2452 [Open] fix(web): missing cache headers for web UI static assets** — *Author: [@bowenliang123](https://github.com/bowenliang123)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2452) | 👍 0
   Adds `Cache-Control`, `ETag`, and `Last-Modified` headers to web UI static assets served by kap-server, improving browser caching behavior.

6. **#2541 [Open] fix(agent-core): preserve Bash stdout after process exit** — *Author: [@barkure](https://github.com/barkure)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2541) | 👍 0
   Resolves issue #2426. Fixes a race condition where `ProcessBackgroundTask` allowed only 250ms for stdout/stderr streams to end after process exit, causing data loss.

7. **#2500 [Open] fix: enable AJV coerceTypes to handle string-typed numeric tool args** — *Author: [@lekifier](https://github.com/lekifier)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2500) | 👍 0
   Enables AJV's `coerceTypes` option so that string-typed numeric parameters (e.g., `"line_offset": "3"`) are accepted and coerced, preventing otherwise valid tool calls from being rejected.

8. **#2539 [Open] fix(pi-tui): prefer iTerm2 inline images over kitty on WezTerm** — *Author: [@nothankyouzzz](https://github.com/nothankyouzzz)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2539) | 👍 0
   Resolves issue #2538. Switches WezTerm to use iTerm2's inline image protocol instead of kitty's, which was causing images to degrade to a one-row sliver.

9. **#2132 [Open] fix(cli): make kimi web and rotate-token access URLs clickable** — *Author: [@bowenliang123](https://github.com/bowenliang123)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2132) | 👍 0
   Adds terminal hyperlink support to the URLs printed by `kimi web` and `kimi web rotate-token`, making them clickable in supported terminals.

10. **#2202 [Open] feat(tui): support mouse text selection in prompt editor** — *Author: [@FeiZhuLulu](https://github.com/FeiZhuLulu)* | [Link](https://github.com/MoonshotAI/kimi-code/pull/2202) | 👍 0
    Adds mouse support for text selection in the prompt editor, addressing the slow editing experience of long multi-line prompts with only keyboard navigation.

## Feature Request Clusters

1. **Memory and Persistence** — Issues #843 and #2075 both request native memory mechanisms for cross-session state. Users want the agent to remember decisions, lessons, and project notes across sessions, and want a backend-agnostic memory provider comparable to Hermes Agent or OpenClaw.

2. **Subagent Observability** — Issue #2131 requests that subagents become first-class observable sessions, allowing users to attach, monitor, and manage individual swarm members. This reflects a broader need for transparency in multi-agent workflows.

3. **Agent Skill Bundle Format** — Issues #2526 and related restructuring issues (from @CaffeinatedFeline) propose standardizing agent skills into a portable bundle format with `SKILL.md`, `scripts/`, and `references/` directories, suggesting a push toward ecosystem interoperability.

4. **Context Window Visibility** — Issue #2346 requests a visible context length indicator in the Zed ACP interface, similar to Codex. This is a recurring UX request for developers managing token budgets.

## Developer Pain Points

1. **Configuration Inconsistency** — The most critical pain point is the behavioral gap between interactive and headless sessions (#2070), where hooks and permission rules are silently ignored in interactive mode. This is a security concern as well as a usability bug.

2. **Cross-Platform Compatibility** — Multiple issues affect Windows (UNC path crashes, #2540; tilde expansion, #2543) and macOS (file descriptor exhaustion, #2542). The WezTerm rendering bug (#2538) also highlights terminal-specific issues.

3. **Performance & Token Waste** — The DeepSeek prefix-cache miss (#2532) and the AJV type coercion problem (#2500) both cause unnecessary token consumption, either through cache misses or rejected tool calls.

4. **Terminal UX** — The prompt editor's lack of mouse support (#2202) and non-clickable URLs (#2132) are small but persistent friction points for daily CLI users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-03

## 1. Today's Update Brief

Activity remains high with 50 issues and 50 pull requests updated in the last 24 hours. The community is heavily focused on resource management problems (memory leaks, temporary file buildup, disk space exhaustion) and Desktop first-launch hang bugs. Memory-related issues continue to dominate conversation, with the Memory Megathread now at 121 comments. No new releases were published today.

## 2. Releases

*No new releases in the last 24 hours.*

## 3. Hot Issues

1. **Memory Megathread (#20695)** — 121 comments, 94 👍
   Central tracking thread for all memory leak reports. Maintainers are requesting heap snapshots rather than LLM-generated guesses. This is the most active issue in the project.
   https://github.com/anomalyco/opencode/issues/20695

2. **Temporary .so files leak in /tmp (#28089)** — 7 comments, 7 👍
   Linux users report OpenCode leaking hundreds of GB of temporary shared object files in `/tmp` with no cleanup. Affects long-running deployments.
   https://github.com/anomalyco/opencode/issues/28089

3. **libopentui temporary copies consume 207 GiB (#39876)** — 2 comments
   Darwin user reports ~58,935 temporary `libopentui.dylib` copies in `$TMPDIR` consuming 207.4 GiB. Related to the above .so leak but on macOS.
   https://github.com/anomalyco/opencode/issues/39876

4. **Desktop 1.18.4 hangs indefinitely on first-launch onboarding (Windows) (#38222)** — 6 comments
   CLI works fine but Desktop app remains stuck on loading screen. Sidecar reports server ready, but onboarding flow never completes.
   https://github.com/anomalyco/opencode/issues/38222

5. **Desktop 1.18.11 remains on splash during first-launch onboarding (#40170)** — 2 comments (CLOSED)
   Similar Windows hang reported for a newer version. Splash overlay persists despite Home screen being fully rendered behind it.
   https://github.com/anomalyco/opencode/issues/40170

6. **`<system-reminder>` keeps moving, breaking prompt cache (#23595)** — 7 comments, 11 👍
   OpenCode moves `<system-reminder>` tokens around, invalidating llama.cpp's prompt cache. Causes unnecessary reprocessing in local inference.
   https://github.com/anomalyco/opencode/issues/23595

7. **OpenAI cache writes always reported as 0 (#37745)** — 4 comments
   Since OpenAI started charging for cache writes, OpenCode reports 0 writes. Cache reads work fine, suggesting the write counter isn't being tracked.
   https://github.com/anomalyco/opencode/issues/37745

8. **Request blocked by upstream provider (#40055)** — 4 comments
   User with official Go plan sees "Request blocked by upstream provider" across multiple accounts. No clear resolution yet.
   https://github.com/anomalyco/opencode/issues/40055

9. **Zen: gpt-5.6-luna / gpt-5.6-terra fail with HTTP 403 (#39831)** — 3 comments, 1 👍
   Latest GPT-5.6 models consistently fail via Zen provider while older models work. Separate report (#40162) indicates these models may be geo-restricted from Hong Kong.
   https://github.com/anomalyco/opencode/issues/39831
   https://github.com/anomalyco/opencode/issues/40162

10. **Session context usage feature request (#6152)** — 20 comments, 125 👍
    Long-standing request for a TUI dialog showing context window breakdown (similar to Claude's `/context`). One of the most-upvoted feature requests.
    https://github.com/anomalyco/opencode/issues/6152

## 4. Key PR Progress

1. **feat(opencode): Allow per-MCP-server trust configuration (#40125)** — OPEN
   Implements granular trust settings per MCP server. Closes 5 related issues (#40111, #23506, #14696, #26862, #1694). Significant for security-conscious users.
   https://github.com/anomalyco/opencode/pull/40125

2. **fix(tui): let the prompt Down arrow reach the end of the text (#40163)** — OPEN
   Fixes cursorOffset measurement for newlines and tabs in the TUI textarea, allowing cursor navigation to the last line.
   https://github.com/anomalyco/opencode/pull/40163

3. **feat(plugin): add request-scoped chat.model hook (#40188)** — OPEN
   Adds a plugin hook that fires before provider/model resolution, allowing plugins to override the model for individual requests. Addresses #18793 and #24006.
   https://github.com/anomalyco/opencode/pull/40188

4. **feat: add support for Solidity file type and highlighting (#38200)** — OPEN
   Adds Solidity (.sol) syntax highlighting support. Author's description flagged as potentially AI-generated.
   https://github.com/anomalyco/opencode/pull/38200

5. **fix(queue): prevent pending resolver leak on abandoned iteration (#34977)** — CLOSED
   Fixes memory leak where `for await...of` loops that break early leave resolver callbacks in memory indefinitely.
   https://github.com/anomalyco/opencode/pull/34977

6. **fix(skill): show skills without descriptions instead of saying none available (#34976)** — CLOSED
   Fixes bug where skills missing descriptions were filtered out entirely, showing "No skills available" even when skills exist.
   https://github.com/anomalyco/opencode/pull/34976

7. **fix(process): prevent AbortSignal listener leak on pre-aborted signal (#34975)** — CLOSED
   Fixes listener leak when `spawn()` is called with already-aborted signals; listeners were never auto-removed.
   https://github.com/anomalyco/opencode/pull/34975

8. **fix(rpc): reject pending calls when target disconnects (#34974)** — CLOSED
   Fixes hung promises when a Worker emits `error` or `messageerror` — pending RPC calls now reject instead of hanging forever.
   https://github.com/anomalyco/opencode/pull/34974

9. **fix(session): preserve raw running tool state (#34959)** — CLOSED
   Preserves raw tool input while a legacy v1 tool is running, fixing state loss during tool execution.
   https://github.com/anomalyco/opencode/pull/34959

10. **refactor(core): resolve database and websearch config through Effect Config (#34935)** — CLOSED
    Moves core runtime config from `process.env` snapshots to Effect `Config` system. Consolidates work onto the v2 branch.
    https://github.com/anomalyco/opencode/pull/34935

## 5. Feature Request Clusters

- **Memory and context management tools**: Multiple requests for memory compaction awareness hooks (#30116), context window breakdown UI (#6152), and better system-reminder placement (#23595). Community wants more visibility into and control over context usage.

- **Subagent management**: Requests for per-subagent steering, cancellation, and abort controls (#38966). Users running long agent sessions want to intervene on individual subagents without restarting the entire session.

- **Session management improvements**: Requests for session listing with `--resume` flag (#35023, closed), and better session diff visibility in the sidebar (#32852). Users want more session lifecycle control.

- **Plugin and hook extensibility**: Requests for per-MCP-server trust configuration (#40125), request-scoped model hooks (#40188), and CSS override hooks for desktop theming (#40177). Community is pushing for more customization points.

- **Provider-specific features**: DeepSeek v4-flash Responses API support (#39829), Bedrock Mantle model fixes (#40075), and Copilot credential persistence (#40183). Users want parity with provider-specific APIs.

## 6. Developer Pain Points

- **Memory leaks and resource exhaustion** dominate the bug reports: temporary `.so`/`.dylib` files accumulating in `/tmp` (hundreds of GB), unresolved resolver callbacks, and AbortSignal listener leaks. Multiple PRs today address these, suggesting maintainers are actively investigating.

- **Desktop first-launch hangs** on Windows are a recurring theme (#38222, #40170). Both versions 1.18.4 and 1.18.11 are affected, and the root cause appears to be in the onboarding flow rather than the CLI.

- **TUI crashes and rendering issues**: Undefined property access errors (`U.r`), sidebar not showing modified files, and TUI blanks on startup continue to frustrate users.

- **Provider compatibility gaps**: OpenAI cache writes not tracked, DeepSeek URL changes not reflected in docs, Zen provider blocking specific models, Bedrock Mantle endpoints not substituting environment variables — each provider has its own integration issue.

- **Authentication/re-authentication friction**: Users report being asked for API keys every time they switch providers despite keys being stored (#33775), and Copilot re-auth prompts every session despite stored credentials (#40183).

</details>