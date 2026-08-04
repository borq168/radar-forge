# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 01:00 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools — 2026-08-04

## 1. Daily Cross-Tool Overview

Today saw moderate-to-high activity across all four tracked tools, with a combined **177 issues updated** and **121 PRs updated** in the last 24 hours. Three tools shipped releases: Claude Code (v2.1.221, VSCode Focus view), OpenAI Codex (two alpha releases, no public changelog), and OpenCode (v1.18.12, Azure reasoning fix). Kimi Code had no release but advanced 33 PRs. Common themes include Windows‑specific instability (Claude Code, Codex), rate‑limit and cost‑visibility gaps (Claude Code, Codex, Kimi Code), and multi‑agent coordination requests (all four tools). Silent failures—where the tool gives no feedback during errors—appear in every community’s top issues.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (today) |
|------|----------------------|-------------------|------------------|
| **Claude Code** | 50 | 2 | 1 (v2.1.221) |
| **OpenAI Codex** | 50 | 36 | 2 (alpha) |
| **Kimi Code** | 27 | 33 | 0 |
| **OpenCode** | 50 | 50 | 1 (v1.18.12) |

*Note: Codex’s PR count reflects 36 merged PRs, primarily internal infrastructure. OpenCode’s PR count includes both open and closed contributions.*

## 3. Shared Feature Directions

Requirements appearing in **two or more** tool communities today:

- **Multi‑agent coordination primitives** – Claude Code (#24798, #76727) asks for cross‑session dependency sequencing; OpenAI Codex (#35097) reports incompatibility between new models and sub‑agent spawning; Kimi Code (#2547) proposes a “kimiteam” supervisor model; OpenCode (#13715) highlights nested sub‑agent permission hangs. All four communities are seeking first‑party ways to orchestrate parallel or hierarchical agent workflows.

- **Rate‑limit and cost transparency** – Claude Code’s most‑upvoted feature (#13585, 115 👍) requests CLI quota queries; OpenAI Codex has multiple issues (#33685, #32791) about confusing weekly vs. 5‑hour limit draining; Kimi Code (#2025) reports that 429 errors produce no visible feedback. Users want programmatic visibility into usage limits and clear error messages when throttled.

- **Session persistence / continuity** – Claude Code (#24798) indirectly touches on carrying state across sessions; Kimi Code (#2567) fixes session‑recovery tool loss; OpenCode (#16077) directly requests loading previous conversation context from a local file. The need to resume work across sessions without losing context is consistent.

- **Windows and WSL integration reliability** – Claude Code (#80468) reports a fresh Windows crash; OpenAI Codex has multiple Windows‑specific bugs (#20214 stuttering, #28919 missing remote control, #29639 WSL Node REPL failure, #35119 WSL Git detection regression). Kimi Code and OpenCode did not report Windows‑specific issues today, but the pattern across the other two tools is notable.

- **Silent failure / no‑feedback states** – Claude Code (#83687 stop hook silently discarded, #82323 PreToolUse inert with no signal); Kimi Code (#2025 429 spinning, #2570 multi‑step stalls with no user feedback); OpenCode (#40319 endless retries without error surfacing). Users consistently report that the tool does not surface errors, stalls, or configuration problems, leaving them unable to diagnose issues.

## 4. Differentiation Analysis

- **Claude Code** focuses on **plugin‑developer tooling** (documentation PRs for hook semantics, marketplace sources) and **VSCode integration** (new Focus view). Its top feature request (CLI quota) targets CI/CD and automation users. Community discussion is heavy on multi‑session orchestration and real‑time steering—suggesting a power‑user base running complex, parallel workflows.

- **OpenAI Codex** emphasizes **MCP conformance** and **internal infrastructure** (36 merged PRs, mostly config refactoring, sandbox hardening, and transport improvements). Its feature requests lean toward **multi‑account support** and **rate‑limit transparency**. The flood of Windows + WSL integration bugs (5+ issues) indicates a growing but underserved Windows user base, while the sub‑agent model compatibility issue (#35097) shows friction between new model releases and agent tooling.

- **Kimi Code** is the most **Web UI / TUI‑focused** tool today, with 7 of 10 hot issues related to rendering, memory leaks, or scroll behavior in the browser or terminal. It also has the strongest **localization** signal (Japanese text rendering, long Mermaid labels with CJK). The community’s PR activity is heavily focused on **agent‑core‑v2** (lifecycle hooks, token counting, custom agent identity, ACP server) – suggesting a major internal engine rewrite is in progress.

- **OpenCode** stands out for **session persistence** and **UI customization** (vertical tabs, clickable links, permission keybindings). Its top issue (persistent session memory) and high upvote on clickable links (118 👍) reveal a user base that values everyday UX polish. The tool also has the most **PRs overall** (50), with a balanced mix of fixes (Unicode equivalence, event log compaction) and features (workspace flows, browser preview). Connection‑related bugs (certificate errors, endless retries) are a recurring pain point.

## 5. Community Activity Notes

- **OpenCode** leads in total PR activity (50) and had a patch release. Its issue tracker is also active (50 updated). Maintainer responsiveness appears moderate: several PRs were closed today, including a fix for Azure reasoning and a safe‑defaults security patch.

- **OpenAI Codex** matched the 50‑issue mark and had the most PRs merged (36), though all authored by the internal `copyberry[bot]` and described as internal infrastructure. No public maintainer comments on hot issues were visible; the community is left with many open Windows and WSL bugs.

- **Claude Code** also saw 50 issues updated but only 2 documentation PRs. The most‑commented issue (#24798, 61 comments) and highest‑upvoted issue (#13585, 115 👍) have no maintainer resolution. One new issue (#83687) was verified as not fixed in the latest release, suggesting maintainers are reading but not yet acting.

- **Kimi Code** had the lowest issue count (27) but a high PR count (33) with several fixes already merged or open (e.g., header leak fix #2581, Mermaid overflow fix #2578). The community is actively contributing, and maintainers are merging. The lack of a release today suggests fixes are accumulating for a future release.

## 6. Evidence‑Backed Observations

1. **Multi‑agent coordination is a cross‑tool requirement.** All four tools have at least one issue or feature request explicitly about sequencing, spawning, or communicating between parallel agent sessions (Claude Code #24798, #76727; Codex #35097; Kimi Code #2547; OpenCode #13715). The need is not just for sub‑agents but for first‑party dependency management and conflict resolution.

2. **Rate‑limit and cost visibility is the most‑upvoted unmet need across tools.** Claude Code’s #13585 (115 👍) is the highest‑upvoted open feature request in its tracker. Codex has two issues (#33685, #32791) with active debate about limit behavior. Kimi Code’s #2025 (no feedback on 429) receives consistent complaints. No tool today provides a dedicated CLI command to query usage or quota.

3. **Silent failures are a pervasive user frustration.** Three of the four tools have issues where the tool stalls, retries, or discards configuration without surfacing an error message (Claude Code #83687, #82323; Kimi Code #2025, #2570; OpenCode #40319). This pattern degrades trust and debugging ability, especially in headless or CI/CD workflows.

4. **Windows and WSL integration remains fragile for two tools.** Claude Code has a fresh Windows crash (#80468); Codex reports five separate Windows‑specific bugs today, including stuttering, missing features, and WSL path mismatches. Kimi Code and OpenCode do not report Windows issues, suggesting either narrower Windows user

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-04

## Today's Update Brief

One new release shipped today (v2.1.221) bringing a VSCode Focus view that hides tool activity behind per-turn summaries. The issue tracker remains active with 50 items updated in the last 24 hours, including a long-running discussion on inter-session communication now at 61 comments. Two documentation PRs advanced, focused on plugin-dev hook semantics and Git LFS marketplace sources.

## Releases

**v2.1.221** — [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)

Two changes:
- **VSCode Focus view**: New chat-menu toggle that collapses tool activity into an expandable per-turn summary, with a live running-tool indicator. Toggle via `Ctrl+Alt+F` or the "Claude Code: Toggle Focus view" command.
- **Linux sandbox credentials**: Added `mode: "mask"` for sandbox credential files.

## Hot Issues

1. **#24798 — Inter-session communication for multi-Claude workflows** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/24798)
   *61 comments, 20 👍*
   Feature request for sequencing work across siloed Claude sessions. The author describes running multiple parallel sessions on large projects with no first-party way to coordinate dependencies. Community discussion has been active for 6 months; this is the most-commented open issue.

2. **#5674 — Persistent ECONNRESET Errors on macOS** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/5674)
   *52 comments, 48 👍*
   Long-standing macOS-specific network disconnection bug. User reports it breaks long-running tasks, while Windows and Linux on the same network work fine. High community upvote count indicates widespread impact.

3. **#71542 — GitHub connector links successfully but cannot access content** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/71542)
   *48 comments, 42 👍*
   Recent regression affecting all repository access (public and private) after OAuth authorization succeeds. User reports this is account-wide, not repo-specific. Actively reported since late June.

4. **#30492 — Real-time steering: priority message channel** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/30492)
   *31 comments, 60 👍*
   Users want the ability to redirect Claude mid-execution during multi-step workflows without aborting. The problem is that once a complex pipeline starts, there's no way to course-correct until it finishes or fails.

5. **#13585 — Add Quota Information Access to CLI** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/13585)
   *24 comments, 115 👍*
   The most-upvoted open feature request. Users want CLI commands to query available token/API quota, currently only visible in the desktop UI. High demand from CI/CD and automation users.

6. **#80468 — Claude Desktop App Crashing After Latest Update on Windows** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/80468)
   *12 comments*
   Fresh Windows crash bug. Reported July 23, no maintainer resolution yet. 0 👍 suggests limited reproduction, but it's a stability issue for affected users.

7. **#65687 — Unexpected token usage spike while inactive** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/65687)
   *10 comments, 1 👍*
   Cost-related bug: token consumption continues even when Claude Code is idle. User reports billing concerns. Updated today, suggesting ongoing investigation.

8. **#76727 — Cross-session coordination for independently-launched sessions** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/76727)
   *9 comments*
   Heavy users running many independent sessions against one repo want a coordination primitive beyond the current PreToolUse `deny` hook approach. The author notes silent holes in the current build-it-yourself kit.

9. **#81015 — Read-only usage scope on `claude setup-token`** [OPEN]
   [Link](https://github.com/anthropics/claude-code/issues/81015)
   *4 comments, 3 👍*
   `claude setup-token` mints tokens scoped `user:inference` but the usage endpoint requires `user:profile`, causing 403 errors. User wants a `usage:read` grant or similar.

10. **#83687 — Stop hook exit-2 verdict silently discarded** [OPEN]
    [Link](https://github.com/anthropics/claude-code/issues/83687)
    *2 comments*
    Filed today. A Stop hook verdict is silently dropped when a turn ends on a tool result with a pending ScheduleWakeup. No `stop_hook_summary` is logged. Verified not fixed in v2.1.221.

## Key PR Progress

*Note: Only 2 PRs were updated in the last 24h. Both are documentation-only.*

1. **#83374 — docs(plugin-dev): document MessageDisplay streaming semantics** [OPEN]
   [Link](https://github.com/anthropics/claude-code/pull/83374)
   Adds `MessageDisplay` to the Hook Development skill's trigger description, event guidance, and quick-reference table. Currently omitted from docs despite being a supported hook event.

2. **#77977 — docs(plugin-dev): document skipLfs marketplace sources** [OPEN]
   [Link](https://github.com/anthropics/claude-code/pull/77977)
   Documents the `skipLfs` option for `github` and `git` marketplace source objects in plugin-dev guidance. References #63035.

## Feature Request Clusters

**Multi-session orchestration** — Two separate requests (#24798, #76727) ask for first-party coordination between parallel Claude Code sessions. Users running multiple sessions against the same repo need dependency sequencing, shared state, and conflict resolution primitives.

**Real-time intervention** — Issue #30492 asks for a priority message channel to redirect Claude mid-execution. This complements the orchestration requests: users want to steer a single session without waiting for completion.

**Cost visibility** — Issue #13585 (quota CLI access) and #81015 (read-only usage scope) both ask for better programmatic cost tracking. The high upvote count on #13585 (115 👍) suggests this is a broad pain point, particularly for CI/CD and team usage scenarios.

**GitHub integration reliability** — Issues #71542 and #80874 both report GitHub connector failures after OAuth authorization succeeds. One is a read-access regression, the other a write-access failure. The common pattern is that OAuth handshake completes but API calls fail.

## Developer Pain Points

**Network errors on macOS** — Issue #5674 has been open for a year and remains a top-voted bug. ECONNRESET errors specifically on macOS, not reproducible on Windows or Linux. A related desktop-in-app variant (#77733) was filed in July.

**Authentication token churn** — Two issues (#59460, #83677) describe OAuth token problems: MCP DCR re-registration orphaning refresh tokens, and mobile attach failures after desktop token rotation. The pattern is that token lifecycle management has rough edges across the desktop/mobile/MCP ecosystem.

**Silent failures** — Issues #83687 (stop hook verdict discarded) and #82323 (PreToolUse hook inert with no signal) both describe scenarios where Claude Code fails silently. No error message, no log entry, no visible signal — the system simply doesn't do what the user configured.

**Windows-specific instability** — Multiple Windows bugs in the current top issues: crash on latest update (#80468), sub-agent hangs in tmux (#83366), and missing HCS services (#80584). The platform-specific nature suggests testing gaps for Windows users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

## Today's Update Brief

Two minor alpha releases (`rust-v0.147.0-alpha.6` and `rust-v0.147.0-alpha.1.2`) landed today, though neither includes changelog detail. Issue activity remains high with 50 items updated in the last 24 hours, dominated by Windows-specific bugs, subagent/model compatibility problems, and persistent rate-limit confusion. A large batch of 36 pull requests was merged, primarily internal infrastructure work (config layer refactoring, MCP conformance gates, sandbox hardening) authored by the `copyberry[bot]`.

## Releases

- **`rust-v0.147.0-alpha.6`** — Minor bump; no changelog provided.
- **`rust-v0.147.0-alpha.1.2`** — Minor bump; no changelog provided.

Both releases are listed as "Release 0.147.0-alpha.6" and "Release 0.147.0-alpha.1.2" respectively, with no further detail.

---

## Hot Issues

### 1. **Codex App freezes/stutters on Windows 11 Pro** [#20214](https://github.com/openai/codex/issues/20214)
- **What:** User reports heavy stuttering in the Codex App on Windows 11 Pro, despite having an AMD Ryzen 5 5600 and 32 GB RAM. The app becomes unresponsive for seconds at a time during active sessions.
- **Impact:** Makes the desktop app nearly unusable for users with adequate hardware. 78 👍 and 88 comments indicate a widespread issue.
- **Community:** Multiple affected users chiming in with similar specs; no maintainer resolution posted yet.

### 2. **Stream disconnects with OneDrive-backed workspaces** [#35420](https://github.com/openai/codex/issues/35420)
- **What:** Work/Codex surface streams repeatedly disconnect when the selected Windows workspace is OneDrive-synced and OneDrive is in a degraded state. Error: `stream disconnected before completion`.
- **Impact:** Blocks users who rely on OneDrive for project sync. 30 comments, but 0 👍, suggesting a narrow but painful edge case.
- **Community:** User provided request IDs for debugging; no maintainer response visible.

### 3. **Windows app missing "control other devices" tab** [#28919](https://github.com/openai/codex/issues/28919)
- **What:** The Settings > Connections tab in the Windows Codex App lacks the "control other devices" option, preventing remote device management.
- **Impact:** Pro users on Windows cannot use remote control features. 26 comments, 30 👍.
- **Community:** Users are comparing macOS and Windows feature parity; the bug has been open since June 18.

### 4. **Weekly limit draining like the old 5-hour limit** [#33685](https://github.com/openai/codex/issues/33685)
- **What:** After the 5-hour limit was removed, the weekly limit is dropping at the same rate the old 5-hour limit did. User reports normal usage (GPT-5.5 High) burning through the weekly cap quickly.
- **Impact:** Confusing and potentially regressive rate-limiting behavior. 25 comments, 10 👍.
- **Community:** Multiple users confirming the same pattern; unclear if this is a display bug or actual usage accounting change.

### 5. **Add RTL support for Arabic & Hebrew** [#19504](https://github.com/openai/codex/issues/19504)
- **What:** Request for native Right-to-Left text direction support in both Codex and Chat panels. Arabic text renders incorrectly regarding alignment, punctuation, and reading direction.
- **Impact:** Excludes a large user base. 24 comments, 19 👍. Tagged with "Papercuts 2026" and "Broken flow" labels.
- **Community:** Persistent request since April; no implementation visible.

### 6. **gpt-5.6-luna marked as MultiAgent V1, rejected by V2 spawn_agent** [#35097](https://github.com/openai/codex/issues/35097)
- **What:** The CLI rejects `gpt-5.6-luna` as a subagent because the model is tagged `MultiAgent V1`, while `spawn_agent` now requires V2. Error: "spawn_agent rejects it."
- **Impact:** Blocks users of the new Luna model from using subagent workflows. 14 comments, 37 👍 — high community attention.
- **Community:** Users are frustrated that a new model is immediately incompatible with modern agent tooling.

### 7. **Browser Use Node REPL fails in WSL workspace** [#29639](https://github.com/openai/codex/issues/29639)
- **What:** The `node_repl` MCP server auto-generated by the Windows Desktop app runs a Windows binary even when the project lives on WSL. Tool calls send Linux/WSL paths to a Windows executable, causing failures.
- **Impact:** Cross-platform WSL workflows are broken for browser automation. 14 comments, 3 👍.
- **Community:** Maintainers have acknowledged the issue; no fix yet.

### 8. **WSL repositories marked as non-Git in latest app** [#35119](https://github.com/openai/codex/issues/35119)
- **What:** Codex App version `26.721.3404` reports valid WSL repositories as "non-Git" and shows "Git is unavailable," breaking version-control features. Previous version worked.
- **Impact:** Regresses WSL-based development. 14 comments, 13 👍.
- **Community:** Users are comparing working vs. broken versions; maintainer tagged.

### 9. **GPT-5.6 Sol catalog-capped at 372K vs 1.05M spec** [#31860](https://github.com/openai/codex/issues/31860)
- **What:** The Codex App enforces a 372K context window for GPT-5.6 Sol, while the model specification supports 1.05M. The effective usable context after overhead is ~353K.
- **Impact:** Users on Pro subscriptions cannot leverage the full model context. 14 comments, 26 👍.
- **Community:** High visibility; users are disappointed by the discrepancy.

### 10. **Bubblewrap sandbox fails on Ubuntu 24.04** [#29908](https://github.com/openai/codex/issues/29908)
- **What:** `apply_patch` and managed sandbox commands fail on Ubuntu 24.04 due to Bubblewrap loopback/userns errors. The sandbox setup fails before the command runs.
- **Impact:** Linux users on modern Ubuntu cannot use core sandbox features. 13 comments, 0 👍 (narrower audience, but blocking).
- **Community:** User provided detailed environment info; no resolution.

---

## Key PR Progress

### 1. **Dual-WebSocket transport for code mode** [#36812](https://github.com/openai/codex/pull/36812)
- **What:** Adds an optional `dual-websocket-v1` capability. Large nested-tool callbacks occupy a dedicated WebSocket, preventing delays on unrelated session operations in code mode.
- **Why:** Addresses a performance bottleneck where tool calls block other session activity.

### 2. **Per-environment login shell policy** [#36811](https://github.com/openai/codex/pull/36811)
- **What:** Stores and exposes the `allow_login_shell` setting per turn environment, letting shell tools use login shells when permitted.
- **Why:** Improves flexibility for environments that require login shell initialization.

### 3. **MCP client conformance regression gates** [#36810](https://github.com/openai/codex/pull/36810)
- **What:** Adds a harness that runs the Codex executable against a pinned MCP conformance suite across protocol versions, transports, and OAuth scenarios.
- **Why:** Prevents regressions in MCP client compliance.

### 4. **Git process tree termination on timeout** [#36793](https://github.com/openai/codex/pull/36793)
- **What:** Runs Git metadata commands in a dedicated process group on Unix or a Job Object on Windows, so timed-out commands kill all child processes.
- **Why:** Prevents orphaned Git helper processes after timeout.

### 5. **Agent Plugins MCP config parsing** [#36796](https://github.com/openai/codex/pull/36796)
- **What:** Adds `parse_agent_plugin_mcp_config` to convert Agent Plugins v1 `mcp.json` files into Codex MCP server configuration.
- **Why:** Enables compatibility with the Agent Plugins ecosystem.

### 6. **Per-surface MCP tool exposure controls** [#36781](https://github.com/openai/codex/pull/36781)
- **What:** Adds `omit_tools_from` to MCP server config, allowing servers to opt out of direct exposure, tool search, or Code Mode calls independently.
- **Why:** Gives MCP server authors fine-grained control over where their tools appear.

### 7. **Audio preparation utility crate** [#36807](https://github.com/openai/codex/pull/36807)
- **What:** Extracts audio input canonicalization and token estimation into a new `codex-utils-audio` workspace crate.
- **Why:** Reduces duplication in audio handling across the codebase.

### 8. **Avoid reinjecting permissions after command approvals** [#36800](https://github.com/openai/codex/pull/36800)
- **What:** Tracks approved command prefixes separately from stable permissions, emitting only newly approved prefixes after an exec-policy amendment.
- **Why:** Reduces token overhead in permission-granting workflows.

### 9. **Raise host-owned Codex Apps catalog limit to 8,192** [#36772](https://github.com/openai/codex/pull/36772)
- **What:** Raises the catalog item limit for host-owned `codex_apps` registrations from 2,048 to 8,192.
- **Why:** Codex Apps tool catalogs can exceed the standard MCP limit; tool search must remain functional.

### 10. **Identify agents by name in token budget context** [#36815](https://github.com/openai/codex/pull/36815)
- **What:** Replaces thread IDs in `<context_window>` metadata with the session's canonical agent path (e.g., `/root`, `/subagent-name`).
- **Why:** Improves debugging and monitoring of token budget usage across subagent sessions.

---

## Feature Request Clusters

### Multi-Account / Multi-Identity Support
- **Issue [#12029](https://github.com/openai/codex/issues/12029):** Ability to use more than one account (personal + corporate) in the VS Code extension. 62 👍, 12 comments.
- **Issue [#30418](https://github.com/openai/codex/issues/30418):** Gmail connector should support multiple named accounts. 5 👍, 4 comments.
- **Observation:** Users consistently request the ability to switch between accounts without logging out, both for authentication and for connector-level multi-account access.

### RTL / Internationalization
- **Issue [#19504](https://github.com/openai/codex/issues/19504):** Full RTL text direction support for Arabic & Hebrew. 19 👍, 24 comments.
- **Observation:** This is a long-standing Papercuts-labeled request. No movement in the PRs suggests it remains unaddressed.

### Rate Limit Transparency
- **Issue [#28985](https://github.com/openai/codex/issues/28985):** Account-wide Codex usage attribution by client, session, and timestamp. 0 👍, 2 comments.
- **Issue [#33685](https://github.com/openai/codex/issues/33685):** Weekly limit draining like the old 5-hour limit (confusing behavior).
- **Issue [#32791](https://github.com/openai/codex/issues/32791):** Five-hour limit disappeared from Plus; only weekly limit shown.
- **Observation:** Users are confused about what limits apply, how they are calculated, and how to audit usage across clients.

---

## Developer Pain Points

### Windows + WSL Integration Fragility
A recurring theme in today's data: the Windows Codex App has trouble with WSL workspaces. Issues include:
- **Node REPL fails with WSL-specific paths** ([#29639](https://github.com/openai/codex/issues/29639))
- **WSL repos marked as non-Git** ([#35119](https://github.com/openai/codex/issues/35119))
- **Clipboard screenshots unavailable to agent in WSL** ([#30529](https://github.com/openai/codex/issues/30529))
- **File-edit approval buttons unresponsive in Remote SSH** ([#34652](https://github.com/openai/codex/issues/34652))

### Subagent / Model Compatibility Confusion
Multiple issues report that the new `gpt-5.6-luna` model is incompatible with `spawn_agent` (MultiAgent V1 vs V2 tagging) ([#35097](https://github.com/openai/codex/issues/35097), [#34700](https://github.com/openai/codex/issues/34700), [#34964](https://github.com/openai/codex/issues/34964)). This is a clear friction point for users adopting new models.

### Rate Limit Ambiguity
Users cannot determine whether they are subject to a 5-hour limit, a weekly limit, or both ([#32791](https://github.com/openai/codex/issues/32791)). The weekly limit is reported to drain at the same rate as the old 5-hour limit, causing confusion about whether the system is actually changed ([#33685](https://github.com/openai/codex/issues/33685)).

### Sandbox and Resource Management
- **Bubblewrap failures on Ubuntu 24.04** ([#29908](https://github.com/openai/codex/issues/29908)) block Linux sandbox.
- **Sandbox helpers unresolved on Windows** ([#28457](https://github.com/openai/codex/issues/28457)).
- **Concurrent sessions leak workspace root** ([#24224](https://github.com/openai/codex/issues/24224)).

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区摘要 — 2026-08-04

## 今日更新简报

今日社区活动较为活跃，共有 27 个 Issue 和 33 个 PR 更新。主要集中在 **Web UI 的渲染与性能问题**（内存泄漏、Mermaid 图表溢出、长会话 DOM 泄露）和 **CLI/TUI 的稳定性问题**（终端自动滚动、流式请求挂起、内存泄漏）。此外，关于 `--effort` CLI 标志、自定义 Agent 身份等新功能也有多项 PR 提交。

## 发布

（无）

## 热门 Issue

1. **#1487 [Terminal jumps to top when scrolling up during generation](https://github.com/MoonshotAI/kimi-code/issues/1487)** — Linux 用户反馈在 Kimi Code 生成内容时，向上滚动终端会“自动跳回顶部”，严重影响阅读输出。该问题在 0.23.1 版本已存在，7 月 8 日报告至今仍为 Open 状态，社区有 5 条讨论。

2. **#2168 [tui 会自动跳到最顶](https://github.com/MoonshotAI/kimi-code/issues/2168)** — 与 #1487 高度相似，macOS (iTerm2) 用户反馈 TUI 在输出结束后频繁跳回顶部。影响范围覆盖多平台，说明 TUI 的滚动行为稳定性仍需改进。

3. **#2577 [web: Long mermaid labels overflow their node boxes](https://github.com/MoonshotAI/kimi-code/issues/2577)** — Web UI 中 Mermaid 图表的长标签（尤其是 CJK 文本）会溢出节点框并导致重叠。该问题影响中文、日文用户的图表可视化体验，已有一条对应的修复 PR #2578。

4. **#2556 [TUI memory leak: `!` shell output entries grow unbounded](https://github.com/MoonshotAI/kimi-code/issues/2556)** — TUI 的内存泄漏问题：`!` shell 命令的输出记录会无限增长，折叠后的条目永远不会被回收。影响长时间会话的重度 shell 用户，可能导致内存占用持续升高。

5. **#2582 [VS Code extension: session degrades to manual mode after idle re-attach](https://github.com/MoonshotAI/kimi-code/issues/2582)** — VS Code 扩展在闲置约 80 分钟后重新连接，`yolo` 模式会自动降级为手动审批模式，每次 Bash 调用都需要用户手动确认。严重影响自动化工作流。

6. **#2570 [Multi-step agent tasks stall for hours with zero user-visible feedback](https://github.com/MoonshotAI/kimi-code/issues/2570)** — 多步骤 Agent 任务（10+ 步）可能出现长达数小时的无响应，首令牌时间（TTFT）高达 243 秒，且 429 限流重试循环无任何用户反馈。这是影响 agent 可靠性的关键问题。

7. **#2025 [429 rate-limit gives no user feedback — CLI just spins for minutes](https://github.com/MoonshotAI/kimi-code/issues/2025)** — 当请求触发 429 限流时，CLI 仅显示旋转动画，无任何错误提示，用户无法判断是否卡死。该问题在 0.28.1 仍存在，对用户感知影响较大。

8. **#2548 [Web UI: unbounded DOM node / listener / heap growth in long sessions](https://github.com/MoonshotAI/kimi-code/issues/2548)** — 长会话中 Web UI 存在 DOM 节点、事件监听器、堆内存的无限增长，无列表虚拟化，每个实例都注册全局滚动监听器。这是 Web UI 性能的重大隐患。

9. **#2575 [web: Japanese text renders with Chinese glyph variants](https://github.com/MoonshotAI/kimi-code/issues/2575)** — Web UI 中日语消息的汉字会显示为中文字形，原因是缺少 `lang="ja"` 声明和日语字体栈。影响日语用户的阅读体验。

10. **#2576 [Device identity headers are forwarded to kimi-typed providers on third-party base URLs](https://github.com/MoonshotAI/kimi-code/issues/2576)** — 当使用第三方 `base_url` 时，`X-Msh-Device-Id` 等主机身份头会被错误转发，存在隐私泄露风险。已有对应修复 PR #2581。

## 关键 PR 进展

1. **#2581 [fix(kosong): forward full host headers only to first-party endpoints](https://github.com/MoonshotAI/kimi-code/pull/2581)** — 修复设备身份头泄露问题（#2576）。改为仅对第一方端点转发完整主机头，第三方代理/Gateway 不再接收 `X-Msh-*` 身份信息。

2. **#2407 [feat(cli): add built-in Computer Use and WebBridge capabilities](https://github.com/MoonshotAI/kimi-code/pull/2407)** — 将 Kimi Computer Use 和 WebBridge 集成到 CLI 内置功能，无需额外安装插件或运行时，简化使用流程。这是一个较大的功能增强。

3. **#2573 [feat(agent-core-v2): add custom agent identity](https://github.com/MoonshotAI/kimi-code/pull/2573)** — 允许自定义 Agent 名称，包括系统提示中的自称、User-Agent 和 MCP 客户端名称，便于将 Kimi Code 嵌入其他产品。

4. **#2578 [fix(web): keep long mermaid labels inside their nodes](https://github.com/MoonshotAI/kimi-code/pull/2578)** — 修复 Mermaid 图表长标签溢出问题（#2577），通过修改 SVG 清理逻辑保留 CSS 软换行，同时调整 node rect 尺寸。

5. **#2567 [fix(agent-core): replay v2 profile.bind records so resumed sessions keep their tools](https://github.com/MoonshotAI/kimi-code/pull/2567)** — 修复 v2 引擎会话恢复后工具丢失的问题（生产环境中观察到 `tools_count=0`）。通过重放 `profile.bind` 记录确保恢复后的会话保留工具列表。

6. **#2571 [feat(acp): add experimental agent-core-v2 ACP server (kimi acp-v2)](https://github.com/MoonshotAI/kimi-code/pull/2571)** — 为 Zed 等编辑器添加基于 v2 引擎的 ACP 服务器，支持最新的工具系统、生命周期钩子和最新模型。

7. **#2565 [feat: /fork no longer switches to the forked session](https://github.com/MoonshotAI/kimi-code/pull/2565)** — 修改 `/fork` 行为：不再自动切换到新 fork 的会话，避免关闭源会话并中断正在运行的任务（如构建、监听）。fork 后仅复制消息，用户可手动切换。

8. **#2563 [feat(agent-core-v2): add tokenCounting service with strategy config and measured anchors](https://github.com/MoonshotAI/kimi-code/pull/2563)** — 为 v2 引擎添加可配置的 token 计数服务，支持字符估计、provider 报告、混合策略和固定锚点测量，用户可配置统计方式。

9. **#2558 [feat(agent-core-v2): add lifecycle hook events and enrich hook payloads](https://github.com/MoonshotAI/kimi-code/pull/2558)** — 为 v2 引擎添加生命周期钩子事件，并丰富钩子负载（增加 `model`、`provider`、`tools`、`action` 等字段），便于外部监控工具使用。

10. **#2574 [fix: make CloudAppender shutdown durable](https://github.com/MoonshotAI/kimi-code/pull/2574) 与 #2572 [feat(config): add deprecation mechanism and rename loop retry limit](https://github.com/MoonshotAI/kimi-code/pull/2572)** — 前者修复 CloudAppender 关闭时的数据丢失问题，后者重命名配置项 `max_retries_per_step` 为 `max_attempts_per_step` 并引入配置弃用机制。

## 功能请求集群

- **CLI 标志与配置增强**：多名用户请求支持 `--effort` CLI 标志（#2535, #2569），以及让目标模式（goal mode）的续问间隔可配置（#2568）。
- **Web UI 功能增强**：用户希望从 Web UI 的队列中直接将消息注入到正在运行的 turn（#2270），以及让 `/auto` 命令在 Agent 处理期间也能排队生效（#2580）。
- **技能与插件管理**：请求支持运行时技能源开关和按名称排除技能（#2549），以及维护国内可访问的 models.dev 镜像或内置离线列表（#2561）。
- **Agent 协作模式**：有用户提出 `kimiteam` 实验性玩法，让主模型担任“主管”分配任务（#2547），体现对多 Agent 协作的需求。

## 开发者痛点

- **终端体验问题**：多平台用户反馈 TUI 自动滚动问题（#1487, #2168），以及 Mermaid 图表渲染异常（#2577），影响开发过程中的信息获取。
- **内存与性能问题**：TUI 和 Web UI 均存在内存泄漏（#2556, #2548），长会话中 DOM 和事件监听器无限增长，影响长时间运行的会话。
- **无反馈的卡死与限流**：429 限流和 stream 挂起时 CLI 完全无反馈（#2025, #2570, #1050），用户无法判断是卡死还是正常等待，这是最突出的体验问题之一。
- **状态不一致与模式降级**：VS Code 扩展在闲置重连后 `yolo` 模式降级（#2582），以及 Web UI 中已完成子 agent 显示为“运行中”（#1963），影响自动化工作流的可靠性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-08-04

## 1. Today’s Update Brief
A moderate‑activity day with **one patch release** (v1.18.12) fixing Azure GPT‑5.5+ reasoning, desktop composer lag, and project search scope. **50 issues** and **50 PRs** were updated in the last 24 hours, with the community focusing on persistent session memory, vertical tabs, and nested subagent permission hangs. Several connection‑related bugs and a new feature request for file‑attachment context also surfaced.

## 2. Releases
**v1.18.12** – [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.12)
- **Core**: Fixed Azure GPT‑5.5+ completion requests failing when reasoning is enabled.
- **Desktop**: Reduced composer lag when drafts include large pasted images/attachments.
- **Desktop**: Project search now matches any known recent project (previously only the first five).

## 3. Hot Issues
*10 noteworthy issues, ranked by comment count.*

1. **#16077 – [FEATURE] Persistent Session Memory**
   *Author: @ronique501-a11y* | 12 comments · 3 👍
   Request to load previous conversation context from a local file at startup, enabling continuity between CLI sessions.
   *Workflow:* CLI‑based AI companions. Community strongly in favour of session persistence.
   [Link](https://github.com/anomalyco/opencode/issues/16077)

2. **#36942 – [FEATURE]: Vertical tabs**
   *Author: @SkyElianneLavoie* | 10 comments · 16 👍
   New UI forces horizontal tabs, making it hard to see more than 5 session titles. Request for vertical layout.
   *Workflow:* Desktop UI navigation. High community support (16 👍).
   [Link](https://github.com/anomalyco/opencode/issues/36942)

3. **#1168 – Feature Request: Make Links Clickable (Ctrl+Left Click to Open)**
   *Author: @jay-tau* | 10 comments · 118 👍
   Long‑standing request (since 2025) for Ctrl+left click to open URLs in default browser.
   *Workflow:* Any output containing URLs. Very high community demand (118 👍).
   [Link](https://github.com/anomalyco/opencode/issues/1168)

4. **#13715 – Permission asks from nested subagent sessions silently hang**
   *Author: @ro-hansolo* | 10 comments · 24 👍
   When a subagent spawns another subagent requiring permission (e.g., bash), the TUI never renders the prompt, causing an infinite hang.
   *Workflow:* Multi‑agent tool calls. Affects all agent‑based workflows.
   [Link](https://github.com/anomalyco/opencode/issues/13715)

5. **#12710 – [FEATURE]: {cmd:} config placeholder for credential helpers**
   *Author: @taulfsime* | 5 comments · 2 👍
   Currently config supports `{env:VAR}` and `{file:…}` but not a shell command placeholder.
   *Workflow:* Dynamic credential injection.
   [Link](https://github.com/anomalyco/opencode/issues/12710)

6. **#39207 – GitHub OAuth login fails with empty email param**
   *Author: @asmartin-ai* | 4 comments · 1 👍
   Sign‑in via GitHub fails server‑side because the email parameter is empty.
   *Workflow:* Authentication. Blocks account creation for some users.
   [Link](https://github.com/anomalyco/opencode/issues/39207)

7. **#40314 – Unable to connect to the first certificate**
   *Author: @papakojo16* | 4 comments · 0 👍
   Every request fails with “unable to connect to the first certificate” on MTN Broadband.
   *Workflow:* Network connectivity. Likely TLS/certificate chain issue.
   [Link](https://github.com/anomalyco/opencode/issues/40314)

8. **#20600 – Desktop app v1.3.13 randomly scrolls to middle of conversation during chat**
   *Author: @elinx* | 4 comments · 2 👍
   Intermittent jump to mid‑conversation while typing.
   *Workflow:* Desktop chat UX. Disrupts user experience.
   [Link](https://github.com/anomalyco/opencode/issues/20600)

9. **#40319 – OpenCode keeps attempting connection to unreachable provider without giving a connection error**
   *Author: @grantwilliams-ai* | 3 comments · 0 👍
   `opencode run` retries endlessly (60+ seconds) without surfacing an error when provider baseURL is unreachable.
   *Workflow:* Custom provider configuration.
   [Link](https://github.com/anomalyco/opencode/issues/40319)

10. **#39414 – Zen signup fails after successful Google and GitHub authentication: Invalid email**
    *Author: @BillPetrak* | 3 comments · 0 👍
    Authentication redirects back to a blank page / “Invalid email”.
    *Workflow:* Zen account creation.
    [Link](https://github.com/anomalyco/opencode/issues/39414)

## 4. Key PR Progress
*10 important PRs updated in the last 24 hours.*

1. **#40144 – fix(tui): reject unavailable project destinations**
   *Author: @leizd* | Closed
   Prevents selection of deleted project directories in the TUI project picker.
   [Link](https://github.com/anomalyco/opencode/pull/40144)

2. **#40198 – fix(opencode): match canonically equivalent Unicode in patches**
   *Author: @leizd* | Open
   Adds canonical Unicode equivalence matching to fix patch verification failures when file content uses different normalisation forms.
   [Link](https://github.com/anomalyco/opencode/pull/40198)

3. **#36710 – fix(core): bound event log compaction**
   *Author: @chubes4* | Open
   Adds read‑only status and dry‑run bounded compaction for event logs, preventing unbounded growth.
   [Link](https://github.com/anomalyco/opencode/pull/36710)

4. **#40340 – test(opencode): cover Azure completion reasoning**
   *Author: @opencode-agent[bot]* | Closed
   Adds tests for Azure GPT‑5.5/5.6 reasoning‑effort paths.
   [Link](https://github.com/anomalyco/opencode/pull/40340)

5. **#40188 – feat(plugin): add request-scoped chat.model hook**
   *Author: @millsydotdev* | Open
   Allows plugins to replace the model for a single request before provider resolution.
   [Link](https://github.com/anomalyco/opencode/pull/40188)

6. **#38790 – feat(app): add workspace flows to new layout**
   *Author: @Hona* | Open
   Adds local/new/existing workspace selection for new sessions with persisted drafts and search.
   [Link](https://github.com/anomalyco/opencode/pull/38790)

7. **#40334 – feat(tui): make permission mode keybind configurable**
   *Author: @CasualDeveloper* | Open
   Allows users to bind a custom key to toggle the permission mode (auto‑approve toggle).
   [Link](https://github.com/anomalyco/opencode/pull/40334)

8. **#40337 – feat(desktop): localhost browser preview for sessions**
   *Author: @armando0614* | Open
   Adds an in‑app browser panel to preview the dev server of the current session.
   [Link](https://github.com/anomalyco/opencode/pull/40337)

9. **#40316 – fix(core): apply safe defaults to all agents**
   *Author: @rekram1-node* | Closed
   Moves external‑directory and `.env` read policies into universal agent defaults, improving security for custom agents.
   [Link](https://github.com/anomalyco/opencode/pull/40316)

10. **#40265 – fix: gpt-5.5+ in combination with azure fails with reasoningEffort**
    *Author: @frederiknsgo* | Closed
    Patches the Azure completion path to handle the reasoning effort parameter introduced in v1.18.12.
    [Link](https://github.com/anomalyco/opencode/pull/40265)

## 5. Feature Request Clusters
*Recurring themes from today’s issues.*

- **Session Persistence & Continuity** (#16077, #12710, #35348)
  Users want to carry conversation history between sessions, store credentials via shell commands, and see millisecond‑precision timestamps.

- **UI Customisation** (#36942, #1168, #31399, #40335)
  Vertical tabs, clickable links, and a graphical interface for Skills & MCP servers are frequently requested. A desktop MCP setup GUI is specifically mentioned.

- **File & Context Attachment** (#40341, #38932)
  Need to attach arbitrary file types (PDF, Office docs) as tool‑accessible context. Also, large‑text paste handling is an issue.

- **Permission & Agent Workflow** (#13715, #40334)
  Nested subagent permission hangs and the desire for configurable keybindings for permission mode.

## 6. Developer Pain Points
*Recurring frustrations or high‑frequency bugs.*

- **Connection & Provider Issues**
  Certificate errors (#40314), endless retries without error (#40319, #40330), and DNS/network failures not surfaced in TUI.

- **UI Scroll & Viewport Bugs**
  Random scroll jumps during chat (#20600, #17996, #29094) – re‑opened multiple times. Reading history mid‑response is still broken.

- **Authentication & Sign‑up**
  GitHub OAuth fails with empty email (#39207), Zen sign‑up blank (#39414), invitation code expiration (#40295).

- **Version Mismatch**
  Desktop update does not update the CLI, causing session sync issues (#35122).

- **Localisation & Rendering**
  Mixed Arabic‑script + Latin text renders scrambled in TUI (#40286). DeepSeek V4 Flash produces corrupted “Q” characters during long tool‑assisted generations (#40321).

</details>