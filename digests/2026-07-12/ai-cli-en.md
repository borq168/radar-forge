# AI CLI Tools Community Digest 2026-07-12

> Generated: 2026-07-12 00:24 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

## 1. Daily Cross-Tool Overview

Claude Code shipped **v2.1.207** expanding auto-mode to all major cloud providers and fixing a terminal freeze; community attention was split between Windows compat issues, MCP stability, and cost-control requests. OpenAI Codex had no release but merged **20 PRs**—predominantly infrastructure hardening, subagent execution fixes, and multi-tenant safety—while top issues demanded a Linux desktop app and flagged a massive SSD-wear bug. Kimi Code showed steady development with **20 PRs** that land an experimental `agent-core-v2` engine, bring full client‑side i18n, and polish the web UI’s scroll/resume behaviour. OpenCode matched Codex’s issue count with **50 issues and 50 PRs** updated, driven by user requests for an automation‑friendly permissions flag (`--dangerously-skip-permissions`), model auto‑discovery, and fixes for CPU usage regressions.

## 2. Activity Comparison

| Tool | Issues Updated | PRs Updated | New Release |
|------|----------------|--------------|--------------|
| **Claude Code** | 50 | 5 | **Yes** – v2.1.207 |
| **OpenAI Codex** | 50 | 20 (merged) | No |
| **Kimi Code** | 3 | 20 | No |
| **OpenCode** | 50 | 50 | No |

## 3. Shared Feature Directions

- **Windows platform support**
  Claude Code (missing Cowork HCS service, data‑dir relocation, screenshot timeouts), OpenCode (Windows clipboard fix PR, stale session‑path and autocomplete fixes), and Codex (Windows executable resolution PR) all demonstrate that Windows remains a second‑class platform with multiple tool‑specific breakages. Demand for fixes is high across communities.

- **Automation & headless/CI‑friendly operation**
  Claude Code’s auto‑mode now available on all cloud providers and a request to fork while the agent works; OpenCode’s `--dangerously-skip-permissions` YOLO‑mode issue (91 👍); Codex’s headless remote Linux host request for mobile control and the merged restricted‑tools PR for hosted threads. All three indicate a clear user need to run unattended or with relaxed permissions.

- **Session context & integration ergonomics**
  Claude Code requests terminal‑title scripting and `session_name` in hook JSON; OpenCode wants a `/btw` command (inspired by Claude Code); Kimi Code asks for a `/copy` command for partial output export. Users across multiple tools want richer, scriptable session metadata and easier ways to share or act on conversation state.

- **Model interoperability & control**
  Kimi Code’s inability to disable thinking on third‑party OpenAI‑compatible providers; OpenCode’s auto‑discover models from local providers and `--model free` proposal; Codex’s issue where GPT‑5.6 Sol forces all subagents to be Sol instances. Users need fine‑grained, predictable control when mixing or discovering models beyond the default provider.

## 4. Differentiation Analysis

- **Claude Code** focuses on enterprise platform completeness and cost‑safety. It expands provider‑native auto‑mode, fixes terminal‑streaming glitches, and the community raises MCP/plugin reliability and Windows parity as core pain points. The small PR count (5) and a single release suggest incremental, stability‑oriented cadence.

- **OpenAI Codex** emphasises infrastructure scalability and execution engine correctness. The 20 merged PRs harden subagent environments, caching, sandbox preservation, and multi‑tenant tool isolation. Top issues reveal a feature‑gap in Linux desktop support and a critical resource‑wear problem (SQLite logs). Its maintainer activity is high and internally driven.

- **Kimi Code** is advancing a next‑generation agent runtime (`agent-core-v2`) while heavily polishing the **web UI** for reliability and session resumption. The largest PR adds full i18n (Chinese/English), a distinct targeting of bilingual users. The focus on TUI migration to v2 and user‑requested shortcuts (Ctrl+Y for YOLO) signals a product‑stage transition.

- **OpenCode** displays a **community‑first, feature‑parity momentum**. It chases UX features from established tools (`/btw`), aggressively pushes automation (`--dangerously-skip-permissions`), and tackles local‑model ecosystem pain (Ollama hangs, model discovery). Many PRs are community fixes (Windows clipboard, TUI config loading) and the high PR count includes several stale/cleanup items, indicating broad but uneven contributor effort.

## 5. Community Activity Notes

- **Issue volume**: Claude Code (50), Codex (50), and OpenCode (50) had nearly identical issue activity; Kimi Code saw only 3 new issues but concentrated on pulling forward major PRs.
- **PR momentum**: OpenCode led with 50 PRs (many still open), Codex merged 20 PRs, Kimi Code had 20 PRs including a large i18n contribution and architectural PRs, Claude Code had only 5 community PRs. Codex’s merges were predominantly infrastructure hardening, indicating strong maintainer‑side development.
- **Release activity**: Only Claude Code shipped a release today. Codex, Kimi Code, and OpenCode accumulated changes but did not cut a new version in the 24‑hour window.
- **Maintainer responsiveness**: Codex’s maintainers were highly active (20 merged PRs with clear commit coherence). Kimi Code maintainers are active on the agent‑core‑v2 transition and web UI fixes. OpenCode’s maintainers appear more responsive to community contributions (multiple open PRs, some stale closures). Claude Code’s limited PR count and mostly bug‑report‑oriented hot issues suggest a smaller maintainer bandwidth in the period.

## 6. Evidence-Backed Observations

1. **Windows is a systemic cross‑tool pain point**
   Claude Code’s Cowork service missing, screenshot timeouts, and non‑relocatable data dir; OpenCode’s Windows clipboard fix and earlier session‑path/environment patches; Codex’s Windows exec‑resolution fix all reflect ongoing, unsolved Windows platform gaps that multiple communities must address independently.

2. **Users demand built‑in “unsafe” automation modes**
   Claude Code’s auto‑mode expansion (now on all clouds), OpenCode’s `--dangerously-skip-permissions` request with 91 👍, and Codex’s push for headless‑remote‑host operation show a shared, strong desire to trust tool actions in controlled environments without constant interactivity.

3. **MCP/plugin instability erodes trust across sessions**
   Claude Code’s duplicate plugin instances (409 errors), MCP server killed after 4 hours, and Codex’s curated plugin crash from a `defaultPrompt` length regression indicate that plugin‑ and tool‑server reliability is a fragile layer in long‑running or automated workflows for both tools.

4. **Resource over‑consumption triggers sharp community backlash**
   Codex’s SQLite feedback logs potentially writing 640 TB/year and wearing SSDs, OpenCode’s high CPU usage regression and idle‑poll burning 50% of a core, and Claude Code’s cost‑inflating retry loop (35× cost) all generated concentrated outrage and direct cost/damage reports. Developers actively measure and penalise tools that waste hardware or budget.

5. **Community‑led feature requests chase ergonomic parity across tools**
   OpenCode’s `/btw` command explicitly mimics Claude Code; Kimi Code’s `/copy` mirrors a Claude Code capability; Claude Code itself requests terminal‑title scripting like its own `statusLine`. This convergence suggests that the user base expects common interaction patterns and will demand them from every tool they adopt.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-07-12

## 1. Today's Update Brief
The community saw moderate activity with **50 issues updated** and **5 pull requests** in the last 24 hours. The headline release **v2.1.207** expands auto-mode availability to all major cloud providers and fixes a terminal freeze bug during long-form output streaming. Several high-engagement issues center on Windows platform friction, cost control, and MCP/plugin reliability.

## 2. Releases
**v2.1.207** (latest) shipped with two changes:
- **Auto mode** is now available without the `CLAUDE_CODE_ENABLE_AUTO_MODE` opt-in on Bedrock, Vertex AI, and Foundry. Users can disable it via the `disableAutoMode` setting.
- Fixed terminal freezing and keystroke lag that occurred when streaming responses containing very long lists, tables, or paragraphs.

## 3. Hot Issues
1. **[#74649] [BUG] Missing HCS services: vfpext – Cowork not working on Windows 11 Pro**
   *51 comments* | `bug` `platform:windows` `area:cowork`
   Users on Windows 11 Pro cannot use Cowork because the required `vfpext` HCS service is missing. The thread is highly active with diagnostic attempts, but no workaround has surfaced. This effectively blocks Cowork on a significant platform segment.

2. **[#17951] [FEATURE] Terminal Title Configuration (Script-Based, like statusLine)**
   *24 comments · 👍 32* | `enhancement`
   A longstanding request to allow the terminal title to be set dynamically via a script, analogous to the existing `statusLine` hook. Many users want to display session-specific info (branch, project name) in their tab/title bar. Strong community upvotes signal broad demand.

3. **[#36800] [BUG] Claude Code spawns duplicate channel plugin instances mid-session, causing 409 Conflict and tool loss**
   *16 comments · 👍 6* | `bug` `has repro` `platform:macos` `area:mcp` (CLOSED)
   A second Telegram channel plugin process would spawn ~3 minutes into a session with no crash trigger, leading to tool unavailability and 409 errors. The issue was recently closed, likely after a fix landed, but its high engagement shows the pain of MCP stability.

4. **[#57998] [FEATURE] CLAUDE_DATA_DIR env var or config key to relocate %APPDATA%\Claude\ on Windows**
   *10 comments · 👍 12* | `enhancement` `platform:windows` `area:desktop`
   Windows users cannot redirect the Claude data directory away from `%APPDATA%`. This causes problems in environments with redirected or space-constrained profiles. A clear, popular ask for portability and enterprise deployment.

5. **[#36058] Feature Request: Include `session_name` in hook input JSON**
   *6 comments · 👍 5* | `enhancement` `area:hooks` (CLOSED)
   Hooks receive `session_id` (random) but not the human-readable session name set via `/rename`. This makes desktop notifications and external integrations ambiguous. The issue was closed, suggesting it was addressed or planned, highlighting the need for richer hook contexts.

6. **[#40766] [BUG] `mcp__ide__getDiagnostics` available in CLI integrated terminal but missing from VSCode extension panel**
   *4 comments · 👍 7* | `bug` `has repro` `area:mcp` `area:ide` `platform:vscode` (CLOSED)
   The MCP diagnostic tool was visible in the CLI but not in the VSCode extension’s tool list, causing inconsistent IDE experience. The closure with 7 thumbs up indicates a resolved pain point for VSCode users.

7. **[#65636] [BUG] Oversized-image 400 error triggers a retry loop that invalidates prompt cache and inflates cost ~35×**
   *5 comments* | `bug` `area:cost` `area:core` (CLOSED)
   A costly bug where an oversized image paste triggered an infinite retry loop, blowing up API costs and cache efficiency. Its closure suggests a critical cost-of-use fix was delivered.

8. **[#76649] [BUG] Browser pane `computer { action: "screenshot" }` tool consistently times out after 30s on Windows**
   *1 comment* | `bug` `platform:windows` `area:tools` `regression` `area:desktop` (OPEN)
   A newly reported regression: the screenshot action in the browser pane always times out on Windows. Immediate impact on users leveraging the desktop tool for web automation.

9. **[#76769] [BUG] CC 2.1.207: stdio MCP server SIGINT’d + not respawned ~4h after spawn (regression from 2.1.206)**
   *1 comment* | `bug` `has repro` `platform:linux` `area:mcp` `regression` (OPEN)
   A regression in the latest release where a stdio MCP server is cleanly terminated after 4 hours and never restarted, leaving long-running sessions without tool support. This is critical for users relying on persistent MCP tools.

10. **[#76777] [FEATURE] Allow `/fork` while Claude is working**
    *1 comment* | `enhancement` `area:tui` `area:agents` (OPEN)
    Request to enable forking a session even when the agent is mid-task, rather than only during idle periods. Useful for parallel exploration without interrupting a running operation.

## 4. Key PR Progress
Only 5 PRs were updated in the last 24 hours; all are community contributions.

1. **[#39043] Remove “retro-futuristic” recommendation from Frontend Design Skill**
   by @t3dotgg. Open for several months, this PR removes a specific style recommendation from the frontend design skill. Minimal description (“Trust me on this one”); likely a content tweak.

2. **[#76673] fix: 再現性監査で確認した設計不具合を修正 (Fix design defects confirmed by reproducibility audit)**
   by @ktctakigawa. Closed PR addresses multiple internal design issues identified in an audit: issue triage logic, `invalid` label handling, session state isolation, and unreachable shell branches. Language suggests internal tooling improvements.

3. **[#76640] fix: load macOS system certificates and handle NO_PROXY blackhole for Bun runtime (closes #24470)**
   by @botbikamordehai2-sketch. Open PR targets an SSL issue on macOS when using the Bun runtime (introduced in v2.1.17+). Loads macOS system certificates and fixes proxy environment handling to resolve ‘Self-signed certificate’ errors.

4. **[#76581] fix(plugins): harden YAML, path, and symlink handling in scripts**
   by @1837620622. Open PR secures official plugin scripts against YAML frontmatter injection, path traversal, and symlink-based credential overwrite patterns. Focuses on `ralph-wiggum` setup among others.

5. **[#76576] fix(plugin-dev): align userConfig docs and hook validator with v2.1.207 shell-injection fix**
   by @1837620622. Open PR updates plugin development documentation and hook validators to match the new shell-injection restrictions introduced in v2.1.207 (`${user_config.*}` usage in shell commands).

## 5. Feature Request Clusters
- **Windows Platform Support**
  Recurring requests and bugs indicate strong demand for first-class Windows support: Cowork services missing (#74649), inability to relocate data dir (#57998), screenshot timeout (#76649), preview always failing with `ENOENT` (#68341), and attributions/config inconsistencies (#65657).

- **Session & Hook Observability**
  Developers want richer context passed to hooks and integrations: terminal title via script (#17951), `session_name` in hook JSON (#36058), and global, cross-project memory (#62026). These would enable more intelligent notifications and environment awareness.

- **Cost & Context Budget Management**
  Requests for spend threshold notifications (#74709) and automatic context usage introspection (#65696) highlight the need for proactive budget and context-window monitoring, especially after cost-inflating bugs (#65636).

- **Agent Workflow Enhancements**
  Quality-of-life improvements like forking during work (#76777) and finer control over tool denials in subagents (#65684) suggest users want more interactive session control.

## 6. Developer Pain Points
- **Windows reliability** is the most frequent source of frustration: broken cowork, fixed data paths, tool timeouts, and configuration inconsistencies. Multiple issues across different subsystems indicate that the Windows experience lags behind macOS/Linux.
- **MCP and plugin stability** causes tool loss and session degradation—duplicate plugin instances (#36800), server disconnection after 4h (#76769), and tools missing in the VSCode extension (#40766) erode trust in long-running sessions.
- **Cost and context management** remain opaque. Users encounter silent cost explosions from retry loops (#65636) and have no built-in way to monitor context usage (#65696) or receive spend alerts (#74709), leading to unexpected billing and interrupted workflows.
- **Headless/auth workflows** are problematic: authenticating on a headless server (#65506) and organization subscription denials (#65714) impede deployment in CI/remote environments.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-12

## 1. Today’s Update Brief
A busy day with **50 issues updated** and **20 pull requests merged**, driven primarily by a surge of community discussion and a raft of infrastructure/hardening PRs. No new releases were published in the last 24 hours, but significant changes landed around subagent execution, plugin caching, hosting tool restrictions, and several Windows/macOS crash fixes. The top issues reflect sustained demand for a Linux desktop app, frustration with rate-limit reliability, and sharp focus on GPT‑5.6 Sol’s subagent model steering.

## 2. Releases
None.

## 3. Hot Issues

1. **[#11023](https://github.com/openai/codex/issues/11023) – Codex desktop app for Linux**
   *Enhancement, App* | 👍 733 | 💬 164
   The most-requested feature: a native Linux desktop app. Users cite high power consumption on macOS (ref. #10432) and the ability to use always-on Linux workstations. The issue remains open with very high community engagement.

2. **[#28224](https://github.com/openai/codex/issues/28224) – SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance**
   *Bug, CLI, Performance* | 👍 432 | 💬 145
   A serious endurance risk for SSD-based machines. Three merged PRs reportedly fixed ~85% of the volume (0.142.0), but the issue remains open for residual writes. Community outrage is high; many measure actual disk writes in TB/month.

3. **[#20161](https://github.com/openai/codex/issues/20161) – Phone number verification doesn’t work**
   *Bug, Auth* | 👍 131 | 💬 205 (CLOSED)
   A long-running authentication issue where SSO login forces an unregistered phone number prompt. After 205 comments, the issue was finally closed; the resolution path is not detailed in the summary.

4. **[#31814](https://github.com/openai/codex/issues/31814) – GPT‑5.6 Sol cannot specify subagent models, forcing all subagents to also be Sol instances**
   *Bug, CLI, Subagent, Config* | 👍 102 | 💬 49
   GPT‑5.6 Sol activates MultiAgent V2 internally, which defaults `hide_spawn_agent_metadata` to `true`, blocking any model selection per subagent. Power users who rely on mixed-model workflows are heavily affected.

5. **[#28969](https://github.com/openai/codex/issues/28969) – Add setting to disable the 60-second auto-resolve for questions**
   *Bug, Enhancement, CLI, Config* | 👍 105 | 💬 26
   The CLI automatically resolves question prompts after 60 seconds, often losing context. The request for a toggle (e.g., `auto_resolve_seconds: 0`) has strong support from developers who need time to interact.

6. **[#31606](https://github.com/openai/codex/issues/31606) – Reset failed, did not apply and 1 reset is wasted**
   *Bug, Rate-limits, App* | 👍 39 | 💬 31
   Pro users report consuming a precious usage reset (from a limited bank) without effect, with the counter decremented. Direct impact on paid-plan trust.

7. **[#32032](https://github.com/openai/codex/issues/32032) – Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7 due to missing Swift Concurrency symbol**
   *Bug, App, Computer-use* | 👍 11 | 💬 20
   A dyld error (`Swift Concurrency`) stops the native Computer Use helper. Related to #22822; prevents MCP/UI initialization. Affects users on the latest macOS point release.

8. **[#28504](https://github.com/openai/codex/issues/28504) – Pro account missing Codex reset bank and invite/referral entitlement**
   *Bug, Rate-limits, App* | 👍 6 | 💬 7
   Continuously subscribed Pro users suddenly find no reset bank or referral bonus, despite a $200/month plan. Points to an account-level provisioning bug.

9. **[#23200](https://github.com/openai/codex/issues/23200) – Support headless remote Linux hosts for Codex mobile without requiring the desktop app to stay online**
   *Enhancement, iOS, Remote* | 👍 31 | 💬 6
   Developers running always-on Linux servers over SSH want mobile control without keeping a desktop app alive. The current mobile-remote architecture has no headless server component.

10. **[#28330](https://github.com/openai/codex/issues/28330) – Regression: newer VS Code Codex extension crashes on curated plugin ngs‑analysis defaultPrompt >128 chars**
    *Bug, Extension, Skills, App-server* | 👍 7 | 💬 6
    A length validation bug in the extension’s plugin loader leads to immediate crashes after fresh installs. Works in older version 26.602.71036; regression is blocking plugin users.

## 4. Key PR Progress

All listed PRs are merged/closed.

1. **[#31526](https://github.com/openai/codex/pull/31526) – Restrict hosted threads to server‑registered tools**
   Adds `server_registered_tools_only` feature with an exact MCP allowlist, preventing app-server clients from automatically including native/extension/collaboration tools. Critical for hosted multi‑tenant safety.

2. **[#30016](https://github.com/openai/codex/pull/30016) – Inherit current step environments in subagents**
   Subagents now use the environment snapshot from the *request that spawned them*, not the turn‑start context. Fixes deferred executor environments not being visible to spawned agents.

3. **[#29960](https://github.com/openai/codex/pull/29960) – Cache stable executor skills and project them per model step**
   Skills metadata is now discovered once and reused across sampling steps, avoiding repeated reads. Improves consistency and reduces I/O, especially with deferred environments.

4. **[#29946](https://github.com/openai/codex/pull/29946) – Cache stable plugin metadata separately from live MCP runtimes**
   Separates plugin manifest storage from live MCP process state. Enables safe rebuild of connections without re‑scanning the entire environment.

5. **[#32441](https://github.com/openai/codex/pull/32441) – Preserve parent sandbox enforcement for memory consolidation**
   The memory consolidation agent now inherits the full effective permission profile, including thread‑level and legacy sandbox overrides, preventing sandbox escapes during background consolidation.

6. **[#30036](https://github.com/openai/codex/pull/30036) – Make Windows executable resolution deterministic**
   Ensures that when no `lpApplicationName` is provided, the child process environment is applied *before* Windows resolves the executable, preventing PATH/PATHEXT race conditions.

7. **[#32460](https://github.com/openai/codex/pull/32460) – Emit thread‑idle lifecycle after guardian interrupts**
   Extensions now receive a `thread-idle` event when the guardian aborts a turn after repeated review denials. Enables clean teardown and monitoring hooks.

8. **[#31806](https://github.com/openai/codex/pull/31806) – Publish new releases to R2**
   Adds a shadow copy of all installer artifacts to Cloudflare R2 alongside GitHub Releases. Doesn’t change existing download URLs; improves resiliency.

9. **[#32312](https://github.com/openai/codex/pull/32312) – Require prefixes for outbound response item IDs**
   Introduces `ResponseItemId` with UUIDv7 suffixes and mandatory prefixes. Legacy unprefixed IDs remain deserializable but are no longer emitted, tightening protocol hygiene.

10. **[#30017](https://github.com/openai/codex/pull/30017) – Refresh turn diff roots from step context**
   The turn diff tracker now pulls repository roots

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest – 2026-07-12

## Today's Update Brief
Activity remained steady with 3 new issues and 20 pull requests active in the past 24 hours. No new releases were cut. The majority of work focused on web UI bug fixes, session reliability improvements, and landing experimental support for the agent-core-v2 engine alongside a substantial internationalisation contribution.

## Releases
None in the last 24 hours.

## Hot Issues
Only three issues were updated today; all are noteworthy for different user segments.

1. **Third‑party vendor thinking mode not disabled**
   [#1362](https://github.com/MoonshotAI/kimi-code/issues/1362) – When `[thinking] enabled = false` and using an OpenAI‑compatible provider (e.g. DeepSeek V4 Flash), the CLI omits the parameter rather than explicitly sending `reasoning_effort: "none"`. The model defaults to `"medium"` on the server side, causing unwanted thinking and wasted tokens. One community member provided supporting evidence with OpenCode. This affects any user mixing Kimi Code with alternative inference endpoints.
   **Impact**: thinking cannot be turned off; token cost and latency increase.
   **Reaction**: only one comment, no upvotes, but the root cause is clearly documented.

2. **`kimi web` daemonises by default, violating Unix CLI conventions**
   [#1560](https://github.com/MoonshotAI/kimi-code/issues/1560) – The web command runs in the background without an explicit flag. The author argues that the process should stay in the foreground and daemonisation must require `--daemon`/`--detach`, following modern Unix expectations.
   **Impact**: poor developer experience for those relying on process management or expecting foreground behaviour.
   **Reaction**: no comments yet; the issue is strongly worded but uncontested.

3. **Request for `/copy` command to export partial output as Markdown**
   [#1551](https://github.com/MoonshotAI/kimi-code/issues/1551) – Users want to copy a specific segment of the CLI output as Markdown, similar to the `/copy` command in Claude Code. Currently only `/export-md` exists, which dumps the entire session.
   **Impact**: extra friction when sharing small snippets.
   **Reaction**: no comments; a straightforward enhancement request.

## Key PR Progress

1. **Multi‑language internationalisation (client‑side)**
   [#1561](https://github.com/MoonshotAI/kimi-code/pull/1561) – Adds a lightweight i18n engine with Chinese and English locales, a locale selector for the TUI, and translations across CLI, TUI, and Web UI. This makes Kimi Code accessible to a broader audience and is the largest feature PR today.

2. **Prevent chat scroll yank while browsing history**
   [#1553](https://github.com/MoonshotAI/kimi-code/pull/1553) – Fixes two independent timing bugs in the web UI that caused the viewport to jump while the user scrolled through older messages (e.g. when images above the viewport load or content updates). The fix stabilises the scroll position.

3. **Escape key no longer interrupts running prompts**
   [#1559](https://github.com/MoonshotAI/kimi-code/pull/1559) – Resolves [#1538](https://github.com/MoonshotAI/kimi-code/issues/1538): pressing <kbd>Esc</kbd> to close the session-search popup (`Cmd`+`K`) was also terminating an active agent turn. The change scopes the keyboard handler correctly.

4. **Stop mid‑turn resync from duplicating prior steps**
   [#1558](https://github.com/MoonshotAI/kimi-code/pull/1558) – When reconnecting or resyncing during a streaming turn, the web UI would collapse all previous thinking blocks and tool calls into a single text blob, causing apparent duplication. This fix rebuilds the view model correctly from delta‑gap resync data.

5. **Preserve ReadMediaFile render after session resume**
   [#1552](https://github.com/MoonshotAI/kimi-code/pull/1552) – In the web UI, images rendered by `ReadMediaFile` were displayed as cards during streaming but degraded to a plain generic text block after a page reload. The fix ensures the media rendering survives session restart.

6. **Land agent‑core‑v2 engine and kap‑server behind experimental flag**
   [#1441](https://github.com/MoonshotAI/kimi-code/pull/1441) – Integration PR that introduces the new `agent-core-v2` engine and `kap-server`. It is gated behind an experimental flag, aiming to replace the legacy v1 backend. This is the core architectural evolution of the agent runtime.

7. **TUI interactive shell on agent‑core‑v2**
   [#1543](https://github.com/MoonshotAI/kimi-code/pull/1543) – Moves the terminal UI off the deprecated v1 SDK (`@moonshot-ai/kimi-code-sdk`) and onto `agent-core-v2` via a dedicated facade. Deferred session creation logic lands together with existing v2 context management.

8. **Keep `kimi -p` sessions alive for pending background work**
   [#1555](https://github.com/MoonshotAI/kimi-code/pull/1555) – Non‑interactive print mode previously terminated after the first response, even if an autonomous goal was still active or cron tasks were pending. This change waits for follow‑up turns and scheduled work to finish.

9. **FetchURL tool gains image downloading**
   [#1499](https://github.com/MoonshotAI/kimi-code/pull/1499) – Extends `FetchURL` to detect `image/*` content types, read the binary body, and return a base64 data URI in a vision‑ready format. Useful for agents that need to process images from arbitrary URLs.

10. **Ctrl+Y shortcut to toggle YOLO mode**
    [#1525](https://github.com/MoonshotAI/kimi-code/pull/1525) – Adds a keyboard shortcut (`Ctrl+Y`) to quickly enable/disable YOLO (auto‑approve) mode, responding to user requests for faster toggling during interactive sessions.

## Feature Request Clusters

- **CLI process management conventions** – Issue [#1560](https://github.com/MoonshotAI/kimi-code/issues/1560) demands `kimi web` remain foreground by default; daemonisation should be explicit. No other active request duplicates this, but it reflects a strong user expectation for Unix‑style behaviour.
- **Partial output export** – Issue [#1551](https://github.com/MoonshotAI/kimi-code/issues/1551) asks for a `/copy` command to grab selected output as Markdown, highlighting a gap between the full‑session `/export-md` and everyday snippet sharing.
- **Third‑party model interoperability** – Issue [#1362](https://github.com/MoonshotAI/kimi-code/issues/1362) indicates a need for precise control over reasoning effort when using non‑Kimi providers; the current omission of the parameter makes it impossible to turn off thinking on some servers.

## Developer Pain Points

- **Web UI stability and session resumption** – Multiple PRs target scroll jank, duplicate content on resync, media rendering loss, and keyboard handlers interfering with running prompts. These reflect ongoing friction in the web interface where reconnects and reloads often corrupt the view state.
- **Print‑mode session lifecycle** – The default termination after the first response, even when background work or follow‑up goals are pending, has been a recurring frustration; several PRs attempt to drain background commands and keep sessions alive.
- **Third‑party provider defaults** – Inability to disable thinking via standard configuration when using non‑Kimi models is a concrete pain point for users mixing providers, requiring them to resort to external workarounds.
- **Unix CLI conventions** – The web command’s unexpected daemonisation breaks muscle memory for users of modern tooling, causing confusion and prompting calls for explicit `--daemon` flags.
- **Missing partial content export** – The absence of a simple `/copy` command for selected output forces users to export entire sessions or manually copy from the terminal, adding unnecessary steps to a common workflow.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-12

**Today's Update Brief**
Activity remained high with 50 issues and 50 pull requests updated in the past 24 hours. No new releases were shipped. The community is demanding automation-friendly permission flags, better model discovery, and fixes for performance regressions; meanwhile V2 TUI fixes and Windows clipboard support advanced in PRs.

---

## Releases
*No new releases in the past 24 hours.*

---

## Hot Issues
Here are 10 noteworthy issues that drew the most attention or highlighted impactful workflows.

1. **[#8463 `--dangerously-skip-permissions` (YOLO mode)](https://github.com/anomalyco/opencode/issues/8463)**
   *28 comments, 91 👍*
   Users want a mode that skips all permission prompts for automated or trusted workflows. The heavy upvote count shows strong demand for headless/CI-friendly operation.

2. **[#16992 Add `/btw` command](https://github.com/anomalyco/opencode/issues/16992)**
   *18 comments, 153 👍*
   Inspired by Anthropic’s Claude Code, the proposal requests a built-in `/btw` command for quick conversational context. It’s the most-upvoted issue in the window, signaling that users value ergonomics from competing tools.

3. **[#36140 GPT-5.6 Luna returns “Model not found” with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)**
   *16 comments, 69 👍*
   The recently listed `gpt-5.6-luna` model is inaccessible via ChatGPT OAuth despite being listed in the built-in provider. A clean checkout reproduces the 404, while other models work. This breaks workflows relying on the Luna variant.

4. **[#6231 Auto-discover models from OpenAI-compatible providers](https://github.com/anomalyco/opencode/issues/6231)**
   *16 comments, 169 👍*
   Local providers (Ollama, LM Studio, llama.cpp) require manual model enumeration in `opencode.json`. The community has pushed for endpoint auto-discovery to reduce friction, making it one of the most-desired ergonomic improvements.

5. **[#30086 High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**
   *24 comments, 13 👍*
   A recent regression causes dramatic CPU spikes. Users who previously ran 10+ sessions concurrently now struggle with three. This is directly impacting developer multitasking and machine responsiveness.

6. **[#19466 CPU usage while idle (rate-limit wait)](https://github.com/anomalyco/opencode/issues/19466)**
   *14 comments, 11 👍*
   OpenCode burns ~50% of a single core even while waiting for API rate limits. The energy waste and thermal load are frustrating for users on laptops or shared machines.

7. **[#8816 Provide `llms.txt` and docs as Markdown](https://github.com/anomalyco/opencode/issues/8816)**
   *16 comments, 35 👍*
   Users want an official, parseable documentation map for LLM ingestion (like `llms.txt`) so that AI assistants can better understand OpenCode’s features and config.

8. **[#22132 OpenCode hangs with local Ollama provider on simple prompts](https://github.com/anomalyco/opencode/issues/22132)**
   *12 comments, 5 👍*
   Since version 1.4.3, the Ollama provider via `@ai-sdk/openai-compatible` hangs even for trivial prompts, while direct `/v1/chat/completions` works. This blocks fully local workflows.

9. **[#36465 “Revert message” silently modifies code](https://github.com/anomalyco/opencode/issues/36465)**
   *4 comments, 0 👍*
   The revert message button actually reverts code changes, not just the conversation. An accidental click on an old conversation broke the user’s Git history, highlighting a destructive UX gap without warning.

10. **[#29548 OpenAI provider headers timeout after 10000ms on 1.15.11](https://github.com/anomalyco/opencode/issues/29548)**
    *12 comments, 4 👍*
    Upgrading to 1.15.11 introduced a headers timeout for OpenAI requests; increasing `headerTimeout` works around it. This is a regression from 1.14.28 that broke existing setups.

---

## Key PR Progress
10 notable pull requests updated in the last 24 hours, reflecting active development and community fixes.

- **[#36470 fix(tui): Windows clipboard – use PowerShell directly for text paste](https://github.com/anomalyco/opencode/pull/36470)** (OPEN)
  Fixes Ctrl+V paste on Windows Terminal by avoiding premature `preventDefault`. Critical for Windows TUI users.

- **[#35405 fix(llm): unflatten Gemini tool call args with dot-bracket notation](https://github.com/anomalyco/opencode/pull/35405)** (OPEN)
  Resolves #35105 – Gemini sometimes returns flattened arguments like `questions[0].header`, which now get unflattened correctly.

- **[#36469 fix(tui): respect sidebar width threshold](https://github.com/anomalyco/opencode/pull/36469)** (OPEN)
  Removes an override that forced the sidebar open over session content in terminals ≤120 columns, restoring the width-awareness preference.

- **[#36468 fix(opencode): preserve valid empty JSON config](https://github.com/anomalyco/opencode/pull/36468)** (OPEN)
  Prevents insertion of a dangling comma when `$schema` is added to an empty config object, plus a regression test.

- **[#34794 feat(provider): add `--model free` to pick a random zero‑cost model](https://github.com/anomalyco/opencode/pull/34794)** (OPEN)
  Allows `opencode run --model free` (and TUI) to choose a random OpenCode Zen zero‑cost model per call, simplifying cost‑free experimentation.

- **[#35866 docs: update xAI branding to SpaceXAI](https://github.com/anomalyco/opencode/pull/35866)** (OPEN)
  Renames user‑visible xAI provider labels and model catalog entries to SpaceXAI, reflecting a branding change.

- **[#36466 fix(cli): load v2 TUI config](https://github.com/anomalyco/opencode/pull/36466)** (CLOSED)
  Fixes #36458 – V2 ignored the `tui.json` leader‑key setting; this ensures the global TUI config is loaded, restoring custom keymaps.

- **[#31947 fix(tui): restore terminal capability detection over SSH](https://github.com/anomalyco/opencode/pull/31947)** (CLOSED, automated cleanup)
  Attempted fix for broken TUI rendering over SSH (colors, tmux awareness) since 1.16.0. Closed as stale but remains a known pain point.

- **[#31946 fix: Windows session path, shell env, error message, and autocomplete](https://github.com/anomalyco/opencode/pull/31946)** (CLOSED, automated cleanup)
  Combined Windows fixes for subprocess paths, environment, error messages, and autocomplete issues. Stale but outlines Windows rough edges.

- **[#31955 feat(app): add local Whisper voice input](https://github.com/anomalyco/opencode/pull/31955)** (CLOSED, automated cleanup)
  Proposed multilingual voice input via local Whisper directly in the prompt composer. Stale PR indicates interest but not yet merged.

---

## Feature Request Clusters
Recurring themes in feature requests without predicting roadmap outcomes:

- **Automation & Permissions**
  YOLO mode ([#8463](https://github.com/anomalyco/opencode/issues/8463)) and configurable permission skips reflect the need for CI/headless usage.

- **Model Discovery & Zero‑Cost Access**
  Auto‑discovery of local models ([#6231](https://github.com/anomalyco/opencode/issues/6231)) and the `--model free` proposal ([#34794](https://github.com/anomalyco/opencode/pull/34794)) aim to lower setup friction.

- **Documentation & LLM‑Friendly Materials**
  Requests for `llms.txt` and Markdown docs ([#8816

</details>