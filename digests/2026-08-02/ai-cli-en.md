# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 03:56 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-08-02

## 1. Daily Cross-Tool Overview

Claude Code and OpenAI Codex each saw no new releases today, while OpenCode shipped v1.18.11 with two critical bugfixes (MCP SSE reconnect loops and reasoning field handling). Kimi Code also had no release but maintained high PR activity (50 updates). Community attention across all tools is concentrated on safety guardrail false positives (Claude Code Fable 5), Windows sandbox and WSL reliability (Codex, Kimi Code), MCP/plugin infrastructure issues (OpenCode, Codex, Claude Code), and billing/usage transparency (Claude Code, Codex). Session corruption and data loss remain recurring pain points across all four tools.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Notable Hot Issue Count |
|---|---|---|---|---|
| **Claude Code** | 10 new issues filed | 3 closed PRs | None | #83233 (Fable 5 guardrails) — 2 comments, filed today |
| **OpenAI Codex** | 50 open issues | 11 PRs updated | None | #24510 (High CPU, 28 comments), #35420 (OneDrive disconnects, 23 comments) |
| **Kimi Code** | 48 issues | 50 PRs | None | #2532 (DeepSeek prefix cache miss, new), #2411 (Web code block regression) |
| **OpenCode** | 50 issues | 50 PRs | **v1.18.11** | #24342 (sub-agent freeze, 13 comments), #9674 (tool_call rendering, 19 comments) |

**Observation:** OpenCode is the only tool with a release today. Kimi Code and OpenCode both show exceptionally high PR activity (50 each), while Claude Code has the lowest issue/PR volume but the highest per-issue community engagement (197 upvotes on #24726).

---

## 3. Shared Feature Directions

**Session Management & Persistence** (all four tools)
- **Claude Code:** Session rename mid-tool-call corrupts transcripts (#73638); idle sessions leave 100% CPU child processes (#75630)
- **Codex:** Context auto-compaction without consent (#31033); closed side chats unrecoverable (#27716)
- **Kimi Code:** Request for cross-session persistent memory (#843); slash commands only at input start (#2497)
- **OpenCode:** Subagent view missing from TUI (#15223); session list sidebar requested (#30489)

**Configuration & Customization** (Claude Code, Kimi Code, OpenCode)
- **Claude Code:** Disable VS Code auto-attach (#24726, 197👍); configurable worktree directory (#27282)
- **Kimi Code:** Custom system prompt restoration (#517); slash commands in mid-prompt (#2497)
- **OpenCode:** Spinner text customization (#40030 PR); collapsible provider groups in model picker

**Model Provider Flexibility & Billing** (Claude Code, Codex, OpenCode)
- **Claude Code:** Billing confusion — usage credits consumed while plan allowance remains (#80750); model setting not honored at session start (#82466)
- **Codex:** Service tier configuration (#2916, 54👍); custom provider unusable with existing chats (#29156)
- **OpenCode:** Subagent models ignored with GitHub Copilot provider (#20859); thinking block signature lost on model change (#22813)

**Voice & Accessibility** (Claude Code, Codex)
- **Claude Code:** TTS readback + voice mode for Remote Control (#42700, 22👍)
- **Codex:** Voice transcription for TUI using OpenAI models (#14630, 49👍)

**Plugin & Marketplace Infrastructure** (Codex, OpenCode, Kimi Code)
- **Codex:** Portable Agent Plugin installation (#36544, merged); MCP catalog limit raised to 2,048 (#36534, merged)
- **OpenCode:** Unified marketplace PR (#40108); native Bedrock Mantle support (#40119)
- **Kimi Code:** Repository structure reorganization proposals (#2517-#2527 from @CaffeinatedFeline)

---

## 4. Differentiation Analysis

**Claude Code** is the most safety-focused tool today, with a significant spike in Fable 5 guardrail false-positive reports (5+ issues filed today). It also has the highest community engagement on specific feature requests (197 upvotes on a VS Code auto-attach toggle). The embedded ugrep shim continues to cause WSL2-specific OOM crashes, a unique technical architecture decision that creates platform-specific pain.

**OpenAI Codex** shows the most Windows-specific friction: OneDrive workspace disconnects, WSL sandbox failures, power-outage ACL corruption, and missing Linux binaries. The MCP process leak issue (#25015) and high CPU from unbounded thread metadata (#24510) suggest scalability challenges in the Desktop app. Codex also has the strongest voice transcription request (49👍), indicating a more explicit accessibility focus than other tools.

**Kimi Code** is the most plugin/hooks-oriented tool, with active PRs improving hook payloads (#2443, #2502) and ACP sub-agent visibility (#2484). The DeepSeek prefix cache issue (#2532, being fixed by #2533) demonstrates strong optimization focus on cost efficiency. The repository restructuring proposals (#2517-#2527) suggest a maturing codebase undergoing systematic cleanup.

**OpenCode** is the most release-active tool today with v1.18.11. It shows the strongest MCP infrastructure work (SSE reconnect fix, unified marketplace PR, Bedrock Mantle support). The refactoring from `LLM.*` to `AI.*` naming (#40073) indicates deliberate API stabilization. OpenCode has the most balanced cross-platform attention — macOS, Linux, and Windows issues all appear.

---

## 5. Community Activity Notes

**Most Active by Issue/PR Count:** Kimi Code and OpenCode are tied at 50 PRs each, with Codex at 50 issues and 11 PRs. Claude Code has the lowest raw volume but the highest engagement per issue.

**Most Active Maintainer Response:** OpenCode has the most responsive maintainer chain — 8 of 10 highlighted PRs were merged or closed today. Codex merged 7 PRs today. Claude Code had 3 merged PRs (all internal tooling, not user-facing fixes). Kimi Code had 5 closed PRs.

**Hottest New Issue:** Claude Code's Fable 5 guardrail false positives (#83233) and related reports (#83232, #83245, #83244) represent a concentrated spike of community frustration — filed today, multiple reports describing the same silent model downgrade behavior.

**Longest-Standing Unresolved Request:** Claude Code's VS Code auto-attach toggle (#24726, 6 months old, 197👍) has no maintainer response, contrasting with Kimi Code's #2346 (context length display) which is unaddressed but newer.

---

## 6. Evidence-Backed Observations

**1. Safety guardrail tuning is producing significant false-positive friction in Claude Code specifically.** At least 5 issues filed today (#83233, #83232, #83245, #83244, #83241) describe identical symptoms: Fable 5 silently downgrading sessions to Opus 5 when performing routine sysadmin, desktop automation, and file operations. Users report no visibility into what was flagged, no review path, and no consent mechanism. This is a concentrated pattern with no equivalent in other tools today.

**2. Windows and WSL reliability remains the weakest cross-platform experience across all tools.** Codex has 4+ Windows-specific issues (sandbox ACL corruption, OneDrive disconnects, missing WSL binary, injected `slash_tmp` paths). Claude Code has a WSL2-specific V8 heap OOM from the ugrep shim (#54394). Kimi Code has two Windows/WSL bugs (path sanitization #2418, image paste #2425). OpenCode is the only tool without notable Windows-specific issues in today's data.

**3. Model provider configuration friction is a shared pain point across three tools.** Claude Code users report model settings ignored at session start (#82466). Codex users report custom providers unusable with existing chats (#29156). OpenCode users report subagent models overridden by the orchestrator provider (#20859). This suggests that multi-provider and multi-model workflows are increasingly common but poorly supported by current configuration architectures.

**4. Session corruption and data loss issues appear across all four tools, indicating a systemic reliability gap.** Claude Code: mid-tool-call rename corrupts transcripts (#73638). Codex: context auto-compaction without consent (#31033). Kimi Code: no cross-session memory persistence (#843). OpenCode: sub-agent freezes requiring restart (#24342). Each tool has a different failure mode, but the common thread is irreversible loss of session state.

**5. Plugin and marketplace infrastructure is a growing investment area for OpenCode and Codex, less so for Claude Code and Kimi Code.** OpenCode merged a unified marketplace PR (#40108) and native Bedrock Mantle support (#40119). Codex merged portable plugin installation (#36544) and increased MCP catalog limits (#36534). Claude Code's plugin-related PRs today were internal tooling (ralph-wiggum, security-guidance docs). Kimi Code's PRs focus on core agent and TUI improvements, not plugin infrastructure.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-02

## Today's Update Brief

No new releases landed in the last 24 hours, but community activity remained high with 10 new issues filed and 3 closed pull requests merged. The most active conversations center on Fable 5 safety-guardrail false positives, a WSL2 OOM regression from the embedded ugrep shim, and a long-running request for VS Code extension auto-attach configuration.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

**1. VS Code extension: add setting to disable auto-attach of open file/selection**
[#24726](https://github.com/anthropics/claude-code/issues/24726) — 64 comments, 197 👍
The most-upvoted open feature request. Users want the ability to disable the VS Code extension's automatic context attachment (current file content, selection). The request is 6 months old with no maintainer response yet. High community demand suggests this is a significant workflow friction point for VS Code users.

**2. Embedded ugrep wrapper amplifies regex backtracking into V8-heap-OOM (8 GB ceiling) — host freezes on WSL2**
[#54394](https://github.com/anthropics/claude-code/issues/54394) — 19 comments
A critical bug report with a detailed root-cause analysis. The v2.1.117 change that routes `grep` through the embedded `ugrep` inside the `claude` binary causes regex backtracking to exhaust the V8 heap (8 GB limit) rather than the OS-level OOM killer. The reporter traces the failure path from `grep` → `exec -a ugrep` → V8 allocation → host freeze. Impacts WSL2 users specifically; persists across multiple versions.

**3. TTS readback of responses + voice mode for Remote Control sessions**
[#42700](https://github.com/anthropics/claude-code/issues/42700) — 13 comments, 22 👍
Request for text-to-speech readback of Claude's responses, particularly for Remote Control sessions. The reporter highlights accessibility needs and hands-free use cases. No maintainer response.

**4. Configurable worktree directory location with sibling directory support**
[#27282](https://github.com/anthropics/claude-code/issues/27282) — 11 comments, 55 👍
Users want to configure where Claude Code places git worktrees, specifically the ability to use a sibling directory (outside the repo) instead of the default `.git/worktrees` location. The reporter cites Claude's own recommendation for sibling directories. No maintainer response.

**5. Regression: "Last Activity" filter missing when grouping sessions by Project**
[#80279](https://github.com/anthropics/claude-code/issues/80279) — 10 comments, 13 👍
The "Last Activity" filter disappeared from the session sidebar when grouping by Project after the desktop app auto-updated from 2.1.209 to 2.1.217. The filter is still present when grouping by other criteria. Affects project organization workflow for users managing many sessions.

**6. Session rename mid-server-tool-call permanently corrupts the transcript**
[#73638](https://github.com/anthropics/claude-code/issues/73638) — 8 comments
A reproducible bug: renaming a session while a `server_tool_use` call is in flight injects a synthetic user turn into the transcript, corrupting the message ordering. After this, every prompt returns a 400 error. The reporter provides a clear reproduction case and links to a related issue. No maintainer response.

**7. Default model in settings.json not honored at session start; `/model` does not reliably switch**
[#82466](https://github.com/anthropics/claude-code/issues/82466) — 6 comments
The `"model"` setting in `settings.json` (e.g., `"claude-fable-5[1m]"`) is ignored at session launch, and the in-session `/model` command also fails to reliably switch models. The reporter notes the setting worked in previous versions. Impacts users who rely on model-specific workflows.

**8. Fable 5 guardrails false-positive on routine sysadmin work → silent downgrade to Opus 5**
[#83233](https://github.com/anthropics/claude-code/issues/83233) — 2 comments (filed today)
Fable 5's safety guardrails repeatedly flag routine systems-administration and desktop-automation tasks, silently switching the session to Opus 5 with no indication of what was flagged or why. The reporter notes the model selection is changed without consent. This is one of several similar reports filed today (see also #83232, #83245, #83244).

**9. Usage credits consumed while plan allowance remains; enabling extra usage prevents the 5-hour window from starting**
[#80750](https://github.com/anthropics/claude-code/issues/80750) — 2 comments, 2 👍
Claude Code is consuming usage credits (extra usage) while the plan's included allowance remains largely untouched. Worse, enabling extra usage prevents the 5-hour plan window from starting. The reporter notes this is a re-report of a previously closed issue (#64949). Billing confusion is a recurring theme.

**10. Idle VS Code sessions leave native-binary/claude child spinning at 100% CPU for days**
[#75630](https://github.com/anthropics/claude-code/issues/75630) — 1 comment
A VS Code extension bug: leaving a session idle causes the `claude` native binary child process to consume 100% CPU indefinitely. The reporter notes the process persists even after closing VS Code, requiring manual termination. Impact on battery life and system resources.

## Key PR Progress

No open pull requests were active in the last 24 hours. Three closed PRs were merged (all from the same author, addressing internal tooling):

**1. fix: repair issue-automation telemetry and dead days_back input**
[#77442](https://github.com/anthropics/claude-code/pull/77442) — Closed
Fixes three correctness issues in the issue-automation workflows: Statsig events timestamped in 1970, a dead `days_back` input parameter, and a template-syntax error in the inspection workflow. Correcting these improves the reliability of automated issue triage and metric collection.

**2. docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest**
[#77439](https://github.com/anthropics/claude-code/pull/77439) — Closed
Updates the `marketplace.json` and `README.md` for the security-guidance plugin to reflect the v2.0.0 rewrite. Previously the listing files still described the v1.0.0 plugin, which could cause confusion for users browsing available plugins.

**3. fix(ralph-wiggum): make stop hook's jq error handling reachable under set -e**
[#77443](https://github.com/anthropics/claude-code/pull/77443) — Closed
Fixes a bug in the `ralph-wiggum` plugin's stop hook where `jq` error handling was unreachable due to `set -euo pipefail`. The `$?` check would never succeed because `set -e` would terminate the script before the check. Now captures `jq` output in a variable before checking the exit code.

## Feature Request Clusters

**Accessibility & Voice Interaction**
Multiple requests for TTS readback of responses (#42700), voice mode for Remote Control sessions, and screen-reader compatibility. The common thread is enabling hands-free or eyes-free interaction with Claude Code, particularly for users with accessibility needs or those who use Remote Control sessions.

**Configuration & Customization**
Recurring requests for more configurable behavior: disabling VS Code auto-attach (#24726, 197 👍), configurable worktree directory location (#27282, 55 👍), and read-only API token scopes for usage monitoring (#81015). Users want finer-grained control over Claude Code's behavior without resorting to workarounds.

**Billing & Usage Transparency**
Multiple requests for clearer visibility into usage billing: read-only scope for `claude setup-token` (#81015), better indication of what model is being used and why, and separation of plan allowance from extra usage. Users report confusion about when credits are consumed and why.

## Developer Pain Points

**Safety Guardrail False Positives (Fable 5)**
A significant spike in reports today: at least 5 issues (#83233, #83232, #83245, #83244, #83241) describe Fable 5's safety classifier blocking legitimate development work (sysadmin tasks, OS development, desktop automation, GitHub issue checking, file deletions). The common complaints are: no indication of what was flagged, no review path, and silent model downgrade without consent. This appears to be a new or recently tightened classifier that is producing high false-positive rates for routine operations.

**Embedded ugrep / grep Shim Performance Regression**
The v2.1.117 change to route `grep` through an embedded `ugrep` inside the `claude` binary continues to cause problems. Two issues today (#54394, #82230) report OOM conditions from regex backtracking—one on WSL2 (V8 heap OOM, host freeze) and one on Linux (29 GB RSS allocation). The common cause is bounded quantifiers on both sides of an alternation. The embedded approach appears to lose the OS-level OOM protection that native `grep` would provide.

**Session Corruption & Data Loss**
Two issues (#73638, #81306) describe session corruption: renaming mid-tool-call permanently corrupts the transcript, and desktop crashes can wedge the MSIX package requiring manual removal and loss of local app data. Both are high-severity because they result in irreversible data loss.

**Billing Confusion**
Issue #80750 (re-report of a stale-closed issue) and #83242 describe users being charged usage credits while their plan allowance remains, or being unable to use included models (Fable 5) without drawing from credits. The lack of transparent billing indicators is a persistent frustration.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

## Today's Update Brief

No new releases landed in the last 24 hours, but the community remains highly active with 50 open issues and 11 pull requests updated. The most discussed topics center on Windows sandbox failures, MCP process leaks, desktop session corruption, and feature requests for voice transcription and service-tier control. Two PRs merged today addressed portable Agent Plugin installation and MCP catalog scaling.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. High CPU from unbounded thread metadata (#24510)
[Issue](https://github.com/openai/codex/issues/24510)
Codex Desktop's `app-server` sustains high CPU/GPU usage when the local profile accumulates many active threads with large `title`, `preview`, and `first_user_message` metadata in `~/.codex/state_5...`. 28 comments, 0 upvotes. Affects users with long-running sessions.

### 2. OneDrive-backed workspace causes stream disconnects (#35420)
[Issue](https://github.com/openai/codex/issues/35420)
On Windows, when the selected workspace is OneDrive-backed and OneDrive is degraded, Codex/Work streams repeatedly disconnect with `stream disconnected before completion`. 23 comments. Two request IDs provided for the failure pattern.

### 3. Missing Linux binary breaks WSL agent on Windows (#28103)
[Issue](https://github.com/openai/codex/issues/28103)
MSIX build 26.609.4994.0 is missing the Linux `codex` binary in `app/resources`, so "Run agent in WSL" fails immediately. 7 comments, 23 upvotes — high community interest.

### 4. Context auto-compaction ruins sessions (#31033)
[Issue](https://github.com/openai/codex/issues/31033)
Codex Desktop automatically compacts context without user consent, consuming resets and wasting allowance. 9 comments. Reported as critical by a Pro user on Windows 11.

### 5. Sandbox fails read operations after power outage (#28248)
[Issue](https://github.com/openai/codex/issues/28248)
After a power outage during an active task, all file read operations in the Windows sandbox fail with "apply deny-read ACLs." 8 comments, 5 upvotes. No recovery path documented.

### 6. Closed side chats cannot be reopened (#27716)
[Issue](https://github.com/openai/codex/issues/27716)
Once a side chat is closed, there is no way to reopen it, making side-chat history unrecoverable. 7 comments, 11 upvotes. Affects macOS and Pro plan.

### 7. Subagent MCP process stacks leak on Linux (#25015)
[Issue](https://github.com/openai/codex/issues/25015)
Codex app-server starts additional stdio MCP process stacks when spawning subagents, and after `close_agent` some child process trees remain alive. 6 comments. Leads to linear memory growth.

### 8. TUI falsely reports "MCP startup interrupted" (#36486)
[Issue](https://github.com/openai/codex/issues/36486)
The TUI intermittently shows servers as not initialized when they actually connected successfully. Running `/mcp` afterwards shows all tools available. 2 comments. A lag handler mislabels events.

### 9. Prolite account usage jumps 0%→97% in one day (#36528)
[Issue](https://github.com/openai/codex/issues/36528)
A Prolite user's weekly usage went from 0% to 97% in a single day with unstable reset windows. 2 comments. Urgent metering bug reported.

### 10. Desktop custom providers unusable with existing chats (#29156)
[Issue](https://github.com/openai/codex/issues/29156)
Codex Desktop cannot use custom model providers with existing chat history and the model picker in a sane way. 5 comments, 17 upvotes. Related to #10867 but specific to Desktop.

## Key PR Progress

### 1. Support portable Agent Plugins throughout installation (#36544)
[PR](https://github.com/openai/codex/pull/36544)
**Merged today.** Allows Agent Plugins with dotted names or version strings that don't fit legacy directory-safe formats to be installed correctly. By @copyberry[bot].

### 2. Raise MCP catalog item limit to 2,048 (#36534)
[PR](https://github.com/openai/codex/pull/36534)
**Merged.** Increases the maximum collected items across paginated MCP tool/resource/resource-template discovery from 1,024 to 2,048. By @copyberry[bot].

### 3. Drop parent MCP lifecycle events from forked agent history (#30977)
[PR](https://github.com/openai/codex/pull/30977)
**Merged.** Excludes inherited `McpToolCallBegin` and `McpToolCallEnd` events when constructing forked agent history, preventing duplicate tool execution state in child rollouts. By @chess-oai.

### 4. Support two-stroke TUI key chords (#36511)
[PR](https://github.com/openai/codex/pull/36511)
**Merged.** Adds support for two-stroke bindings like `ctrl-x ctrl-s` in TUI keymap configuration, with pending chord hints. By @copyberry[bot].

### 5. Retain attempted tool metadata across prompts (#36507)
[PR](https://github.com/openai/codex/pull/36507)
**Merged.** Reattaches recorded `executed_tool_calls` metadata when an output is included in a subsequent prompt, bounded to 32 KiB with truncation reporting. By @copyberry[bot].

### 6. Increase remote plugin bundle size limits (#36485)
[PR](https://github.com/openai/codex/pull/36485)
**Merged.** Raises max download from 50 MiB to 100 MiB and max extracted bundle from 250 MiB to 512 MiB. By @copyberry[bot].

### 7. Avoid querying terminal size on every TUI redraw (#36482)
[PR](https://github.com/openai/codex/pull/36482)
**Merged.** Caches terminal dimensions on resize events and reuses them for ordinary draws, reducing TUI overhead. By @copyberry[bot].

### 8. Extract exec-server request dispatching (#36440)
[PR](https://github.com/openai/codex/pull/36440)
**Merged.** Moves JSON-RPC request/notification/response/error handling into a dedicated `RequestDispatcher`, keeping the connection loop lightweight. By @copyberry[bot].

### 9. Extract apps cache logic into ConnectorRuntimeManager (#31471)
[PR](https://github.com/openai/codex/pull/31471)
**Open.** Refactors Codex Apps tools cache behind `ConnectorRuntimeManager` and `ConnectorRuntimeContext` with immutable snapshots, scoped by account and workspace. By @mzeng-openai.

### 10. Store guardian transcript boundary on review session (#15261)
[PR](https://github.com/openai/codex/pull/15261)
**Open.** Stores the parent transcript checkpoint on the cached guardian review session, so follow-up reviews only include transcript since the last terminal guardian review. By @charley-oai.

## Feature Request Clusters

### Voice & Input
- **Voice transcription for TUI** (#14630, 49 👍, 19 comments): Users want native voice transcription in the CLI using OpenAI's models instead of the generic dictation model.
- **Two-stroke key chords** (#36511, merged today): Adds TUI keyboard shortcuts for power users.

### Context Management
- **Compact context and implement plan** (#18490, 4 👍, 13 comments): Users want a "compact context" option in Plan Mode rather than "clear context," to retain session memory.
- **Context auto-compaction control** (#31033, 9 comments): Users want explicit opt-in for context compaction to prevent session corruption.

### Configuration & Customization
- **OpenAI service tier support** (#2916, 54 👍, 20 comments): Request for `service_tier` config to control API cost/latency.
- **Custom provider improvements** (#29156, 17 👍, 5 comments): Desktop needs better support for custom model providers with existing chats.

### UI/UX
- **Reopen closed side chats** (#27716, 11 👍, 7 comments): Side-chat history is unrecoverable after closing.
- **Portable Agent Plugins** (#36544, merged): Allows plugins with versioned or dotted names to install.

## Developer Pain Points

1. **Windows sandbox and workspace reliability**: Multiple issues around sandbox failures after power loss (#28248), missing WSL binaries (#28103), OneDrive-backed workspace disconnects (#35420), and injected `slash_tmp` root mapping to `C:\tmp` (#33806).

2. **MCP process leaks**: Subagent stdio MCP helper trees accumulate indefinitely under `app-server` (#17574, #25015), causing linear memory growth on both Darwin and Linux.

3. **Session corruption and data loss**: Context auto-compaction without consent (#31033), cannot reopen closed side chats (#27716), stale `updatedAt` in thread metadata (#28870), and paginated history dropping rollout records (#35746).

4. **Stream disconnections and transport errors**: Frequent `stream disconnected before completion` errors on Windows (#35420, #29087), with `Transport error: network error: error decoding response body`.

5. **Desktop crashes and high resource usage**: High CPU from unbounded thread metadata (#24510), main-process crash from oversized rollout JSONL (#22004), native `codex.exe` crashes with `0xc0000409` (#31989), and crashes from ambient suggestions prefetching large subagent rollouts (#35799).

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区日报 | 2026-08-02

---

## 1. Today's Update Brief

今日社区活动活跃，共有 **48 个 Issue** 和 **50 个 PR** 在 24 小时内更新。没有发布新版本，但社区提交了大量修复、功能增强和重构建议。尤其值得关注的是，有多个 PR 正在解决 **DeepSeek 前缀缓存**、**Web 端代码块渲染回归** 和 **WSL 图像粘贴** 等关键问题；同时，一批系统性的 **仓库结构重组** 议题（由 @CaffeinatedFeline 提出）正在策划中。

---

## 2. Releases

**无新版本发布。** 上一个版本为 v0.31.1。

---

## 3. Hot Issues (Top 10)

1. **#160 - [CLOSED] 是否还支持 Kimi CLI Web 交互**
   - 作者: @ikillery
   - 一个长期讨论（5月发起）最终关闭，社区希望保留基于浏览器的 Kimi CLI 交互方式，认为这是一种创新。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/160

2. **#306 - [CLOSED] 配置 DeepSeek 模型的 `max_output_size` 后报错 400**
   - 作者: @chengkeen
   - 通过 `/provider` 添加 DeepSeek 后，自动写入的 `max_output_size` 导致请求返回 400 错误。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/306

3. **#517 - [CLOSED] 自定义 system.md 提示词**
   - 作者: @thecannabisapp
   - 用户希望恢复自定义系统提示词，认为新版默认提示词不如自己之前的配置。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/517

4. **#2346 - [OPEN] 在 Zed ACP 中显示上下文长度使用情况**
   - 作者: @Radiant303
   - 用户在 Zed 编辑器中通过 ACP 使用 Kimi Code，希望像 Codex 一样显示当前 token 用量和剩余量。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/2346

5. **#1487 - [OPEN] 生成时终端向上滚动导致跳转**
   - 作者: @Olyno
   - 在 Linux 终端中，当 AI 生成内容时，向上滚动查看历史时终端会跳回顶部。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/1487

6. **#2418 - [OPEN] 遥测路径脱敏对非 ASCII 主目录、UNC 路径和 `C:/` 拼写失效**
   - 作者: @LHMQ878
   - 隐私数据擦除函数 `cleanTelemetryString` 在 Windows 和国际化路径下存在泄漏风险。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/2418

7. **#2411 - [OPEN] Web: markstream-vue 升级导致代码块回退到基础渲染器**
   - 作者: @nothankyouzzz
   - `markstream-vue` 从 1.0.4 升级到 1.0.7 后，Web 端代码块渲染失去增强效果，回退到普通 `<pre>`。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/2411

8. **#843 - [OPEN] 原生持久记忆 / hooks 或自定义 MCP 支持无状态会话**
   - 作者: @AzazelSensei
   - 用户反映每逢新会话，AI 无法记住之前的决策或项目笔记，请求支持持久化记忆。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/843

9. **#2497 - [OPEN] 支持在 prompt 中间使用 slash 命令**
   - 作者: @BB-fat
   - 目前 slash 命令只能放在输入的最开头，用户希望能在自然语言 prompt 中间嵌入 `/skill` 等命令。
   - 链接: https://github.com/MoonshotAI/kimi-code/issues/2497

10. **#2532 - [OPEN] DeepSeek 前缀缓存每次新会话都未命中，首轮浪费约 19.5k tokens**
    - 作者: @daofazhiran
    - 用户发现每次新会话，DeepSeek 的前缀缓存都失效，导致首轮大量 token 浪费。
    - 链接: https://github.com/MoonshotAI/kimi-code/issues/2532

---

## 4. Key PR Progress (Top 10)

1. **#2533 - [OPEN] perf(agent-core): 移除系统提示中的动态时间戳，恢复前缀缓存命中**
   - 作者: @daofazhiran
   - 直接解决 #2532 问题，通过消除每次启动时变化的时间戳，让 DeepSeek 等模型的前缀缓存重新生效。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2533

2. **#2443 - [CLOSED] feat(hooks): 在 Stop 负载中包含最终助手消息**
   - 作者: @ousamabenyounes
   - Stop hooks 现在可以检查即将结束的助手回复，用于验证或条件拒绝。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2443

3. **#2462 - [CLOSED] feat(tui): 支持多行状态命令**
   - 作者: @ousamabenyounes
   - `status_line.command` 现在可以保留多行输出，方便自定义 HUD 显示。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2462

4. **#2484 - [CLOSED] feat(acp-adapter): 通过 ACP 转发子代理生命周期和流**
   - 作者: @esempe
   - 修复 ACP 协议下子代理工作不可见的问题，现在客户端能看到子代理的进度。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2484

5. **#2512 - [CLOSED] fix(web): 为 markstream-vue 代码块添加 stream-diffs 依赖**
   - 作者: @mangeshraut712
   - 修复 #2411，通过添加 `stream-diffs` 依赖恢复 Web 端代码块增强渲染。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2512

6. **#2516 - [OPEN] fix(agent-core-v2): 脱敏 Unicode、UNC 和 C:/ 路径**
   - 作者: @mangeshraut712
   - 修复 #2418，完善遥测路径脱敏逻辑，覆盖边缘情况。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2516

7. **#2510 - [OPEN] fix(cli): WSL 图像粘贴使用 PowerShell STA 和 PNG 格式**
   - 作者: @mangeshraut712
   - 修复 #2425，WSL 下粘贴图像时改用 PowerShell STA 模式，确保剪贴板 API 正常工作。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2510

8. **#2508 - [OPEN] fix(kosong): 跳过空的 OpenAI 兼容推理流值**
   - 作者: @mangeshraut712
   - 修复 #2506，当 OpenAI 兼容流在推理结束后仍发送空 `reasoning_content` 时，不再记录无意义的 `think` 部分。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2508

9. **#2491 - [CLOSED] feat(tui): 将最后一条用户消息固定在视口顶部**
   - 作者: @lucastononro
   - 借鉴 Claude Code，当 AI 长时间生成时，用户最后输入的 prompt 始终固定在屏幕顶部，方便对照。
   - 链接: https://github.com/MoonshotAI/kimi-code/pull/2491

10. **#2502 - [OPEN] fix(agent-core): 将 PreToolUse 输出追加到上下文**
    - 作者: @xushun007
    - 修复 #2107，PreToolUse hooks 成功时输出的信息现在会传递给模型，而非被丢弃。
    - 链接: https://github.com/MoonshotAI/kimi-code/pull/2502

---

## 5. Feature Request Clusters

- **Web 界面 / 桌面端需求**
  - 多个用户（#160, #39, #91）持续呼吁支持 Web UI 和桌面端，认为浏览器交互体验优于纯 CLI。
- **会话持久化与记忆**
  - #843 和 #820 要求实现跨会话的持久记忆或自定义 session_id，以便在长期项目中保持上下文。
- **自定义提示词与技能**
  - #517 和 #2497 用户希望恢复自定义 system prompt 能力，并支持在 prompt 中间嵌入 slash 命令以调用技能。
- **上下文长度与 token 显示**
  - #35 和 #2346 分别请求在 CLI 和 Zed ACP 中显示 token 吞吐速度、上下文窗口用量。
- **仓库结构重组**
  - @CaffeinatedFeline 提出了一整套结构化重组方案（#2517-#2527），涵盖顶级布局、Diátaxis 文档结构、Agent 技能打包格式、清理策略等，表明社区对代码规范和可维护性有较高关注。

---

## 6. Developer Pain Points

- **DeepSeek 前缀缓存问题**
  - #2532 和 #2533 显示动态时间戳导致每次新会话缓存未命中，浪费大量 token，正在被修复。
- **Web 端代码块渲染回归**
  - #2411 被 #2512 修复，但升级导致的意外回退影响了依赖 Web 界面的用户。
- **Windows 和 WSL 兼容性问题**
  - #2418（路径脱敏）和 #2425（WSL 图像粘贴）暴露了 Windows 环境下的多处 bug，但已有 PR 在修复。
- **空推理流导致日志污染**
  - #2506 显示 OpenAI 兼容模型在推理结束后仍发送空 `reasoning_content`，引发不必要的 think 日志记录，已被 #2508 修复。
- **多行空编辑删除误判**
  - #2427 和 #2511 指出，当模型尝试删除 3 行以上的内容但提供空字符串时，默认被拒绝，需通过 `allow_large_delete=true` 显式允许。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

## Today’s Update Brief
The project shipped **v1.18.11** with two critical bugfixes (MCP SSE reconnect loops and reasoning field handling). 50 issues and 50 pull requests were updated in the last 24 hours, with a strong focus on TUI stability, model provider configuration, and plugin infrastructure. A new marketplace PR and native Bedrock Mantle support indicate active work on extensibility and cloud provider coverage.

## Releases
**v1.18.11** — [Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.11)
- **Core bugfixes:**
  - Stopped MCP SSE connections from getting stuck in reconnect loops after server error responses.
  - Fixed provider model configs that use interleaved reasoning fields like `reasoning_text` or custom field names.
- **Desktop bugfixes:**
  - Open external links in the system browser (fixes a regression where links were not handled).

## Hot Issues (10 noteworthy)

1. **#10661** — TUI system theme not found on macOS
   *Status:* Closed, 21 comments, 4 👍
   User cannot find the system theme in `/theme` list. Likely a path/naming issue.
   [Link](https://github.com/anomalyco/opencode/issues/10661)

2. **#9674** — `<tool_call>` tag renders incorrectly, breaks conversation flow
   *Status:* Closed, 19 comments, 8 👍
   With Oh My Open Code plugin, tool_call tags fail to render after long sessions, causing automatic progression to fail.
   [Link](https://github.com/anomalyco/opencode/issues/9674)

3. **#459** — Privacy and data collection clarification request
   *Status:* Closed, 16 comments, 58 👍
   User requests explicit documentation about local-first nature and data handling. High community interest.
   [Link](https://github.com/anomalyco/opencode/issues/459)

4. **#24342** — Main & sub-agents randomly freeze (frontend shows “thinking”)
   *Status:* Closed, 13 comments, 4 👍
   Unpredictable freeze where the UI hangs on “thinking” while the LLM inference has already terminated. Reproducible in consistent workflows.
   [Link](https://github.com/anomalyco/opencode/issues/24342)

5. **#20859** — Subagent models ignored when using GitHub Copilot provider
   *Status:* Closed, 7 comments, 1 👍
   All premium requests are billed to the orchestrator model (Claude Opus) despite subagent model configuration. Billing discrepancy.
   [Link](https://github.com/anomalyco/opencode/issues/20859)

6. **#21282** — Downloaded superpowers plugin but `/skills` doesn’t show available skills
   *Status:* Closed, 7 comments, 3 👍
   Plugin installed but skills not visible; likely plugin registration or directory issue.
   [Link](https://github.com/anomalyco/opencode/issues/21282)

7. **#29909** — Feature request: show live token counts and TPS in footer
   *Status:* Closed, 7 comments, 7 👍
   User wants real-time input/output token counts and rolling tokens-per-second in the TUI footer.
   [Link](https://github.com/anomalyco/opencode/issues/29909)

8. **#22813** — Thinking block signature lost when model differs, breaking multi-turn extended thinking
   *Status:* Closed, 6 comments, 10 👍
   Anthropic extended thinking fails mid-conversation because the thinking block signature is not preserved across model changes.
   [Link](https://github.com/anomalyco/opencode/issues/22813)

9. **#15223** — Feature request: subagents view in TUI
   *Status:* Closed, 5 comments, 10 👍
   No way to see spawned subagents in TUI; users must manually know session IDs.
   [Link](https://github.com/anomalyco/opencode/issues/15223)

10. **#26217** — TUI blank screen in non-pure mode with external plugin (macOS)
    *Status:* Closed, 5 comments, 0 👍
    `opencode` fails to render TUI when an external plugin is configured, but works with `--pure`.
    [Link](https://github.com/anomalyco/opencode/issues/26217)

## Key PR Progress (10 important)

1. **#40109** — docs: Add oc-supermemory-redux plugin to ecosystem documentation
   *Status:* Open
   Adds a new plugin to the official ecosystem list.
   [Link](https://github.com/anomalyco/opencode/pull/40109)

2. **#40030** — feat(tui): add spinnerVerbs config to customize TUI spinner text
   *Status:* Open
   Closes #19401 – lets users customize the verb shown next to the TUI spinner via `tui.json`.
   [Link](https://github.com/anomalyco/opencode/pull/40030)

3. **#40120** — docs(go): update DeepSeek privacy policy
   *Status:* Closed
   Marks DeepSeek V4 Flash as not used for training, zero-day retention, and documents monthly ZDR agreement.
   [Link](https://github.com/anomalyco/opencode/pull/40120)

4. **#40110** — fix(app): prevent Enter from sending/interrupting on empty input
   *Status:* Closed
   Fixes #40106 – both desktop and web app now ignore Enter on empty prompt, preventing accidental submission or abort.
   [Link](https://github.com/anomalyco/opencode/pull/40110)

5. **#40077** — feat(plugin): wrap native session HTTP
   *Status:* Open
   Replaces `session.request` mutation hook with `session.http` for a complete request-response exchange, supporting Effect and Promise plugin contracts.
   [Link](https://github.com/anomalyco/opencode/pull/40077)

6. **#40119** — feat(ai): add native Bedrock Mantle support
   *Status:* Open
   Adds native Amazon Bedrock Mantle Chat and Responses provider using OpenAI-compatible protocols, bearer auth, and SigV4 signing.
   [Link](https://github.com/anomalyco/opencode/pull/40119)

7. **#40073** — refactor(ai): align multimodal naming
   *Status:* Closed
   Renames `LLMError` to `AIError`, moves runtime identities from `LLM.*` to `AI.*`, and rebrands shared IDs and services.
   [Link](https://github.com/anomalyco/opencode/pull/40073)

8. **#40108** — feat(opencode): add unified marketplace
   *Status:* Open
   Closes #28696 – implements a broad package model and shared runtime for Desktop, Web, TUI, CLI, and API clients.
   [Link](https://github.com/anomalyco/opencode/pull/40108)

9. **#35838** — fix(tool): decode webfetch bodies using declared charset via iconv-lite
   *Status:* Open
   Closes #35752 – `webfetch` now respects `charset` in `Content-Type` header instead of always decoding as UTF-8.
   [Link](https://github.com/anomalyco/opencode/pull/35838)

10. **#40115** — fix(todo): retry SQLITE_BUSY/LOCKED on parallel todowrite calls
    *Status:* Closed
    Closes #40020 – prevents crashes when subagents call `todowrite` concurrently by retrying on `SQLITE_BUSY`/`SQLITE_LOCKED`.
    [Link](https://github.com/anomalyco/opencode/pull/40115)

## Feature Request Clusters

Several feature requests share common themes:

- **TUI Session & Subagent Visibility**
  - #15223: Subagents view in TUI sidebar
  - #30489: Session list sidebar in TUI (similar to desktop)
  - #29909: Live token counts and TPS in footer
  - #15026: Collapsible provider groups in model picker

- **Plugin and Marketplace**
  - #40108 (PR) adds a unified marketplace
  - #21282 reports plugin installation issues – shows need for better plugin discovery and registration UX

- **Non-Git Rollback / Undo**
  - #30422: Rollback mechanism that does not rely on Git
  - #29005: Reverting doesn’t actually revert changes – frustration with current revert behavior

- **LSP & Tooling**
  - #12522: First-party TypeScript-Go LSP support
  - #30442: LSP server not available for certain file types

- **Customization & Controls**
  - #40030 (PR) adds spinner text customization
  - #29196: Support Kitty keyboard protocol for shifted printable keys

## Developer Pain Points

- **Freezes and Unresponsiveness**
  #24342 (main/sub-agent freeze), #28844 (desktop renderer hangs on large sessions), #26159 (session unresponsive due to timestamp skew), #30126 (high CPU/memory on ARM64) – users frequently encounter non-recoverable hangs that require restart or data loss.

- **Model Provider Configuration Friction**
  #20859 (subagent models ignored with GitHub Copilot), #29545 (GPT-5.4 not supported via Cloudflare gateway), #22813 (thinking block lost on model change) – configuring and maintaining consistent behavior across providers remains a pain point.

- **Plugin Incompatibility**
  #21282 (superpowers plugin skills not visible), #26217 (TUI blank screen with external plugin) – plugins often break the TUI or fail to register correctly.

- **Revert / Undo Not Working**
  #29005 (revert does nothing) – a basic safety feature that users expect to work reliably.

- **Session Management Gaps**
  #29581 (home sessions hidden from `/sessions`), #28407 (session not found in headless mode) – session listing and retrieval have edge cases that break workflows.

- **Performance & Memory**
  #30126 (2.5GB memory on ARM64), #28844 (renderer hang on large message counts) – resource usage is a concern for long-running sessions.

</details>