# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-15 00:20 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

**1. Daily Cross-Tool Overview**
Today’s activity across the four tracked CLI tools is characterised by patch releases and rapid iteration on both agents and user interfaces. Claude Code shipped three patches (screen‑reader mode, timing feedback, dialog fixes); OpenAI Codex delivered a stable patch and four alpha snapshots while closing high‑impact regressions; Kimi Code published a minor export release and a patch, backed by 50 updated PRs heavily focused on agent‑core‑v2 goal hardening; OpenCode dealt with the fallout of its Desktop v2 migration, releasing a hotfix and a wave of UI‑related fixes. Issue tracker noise was elevated for Claude Code and OpenAI Codex (50 updates each), while Kimi Code saw light issue activity but very high PR volume, and OpenCode’s community backlash was concentrated on new‑layout regressions.

**2. Activity Comparison**

| Tool         | Issues Updated (today) | PRs Mentioned  | Releases (today / recent)                                    |
|--------------|------------------------|----------------|--------------------------------------------------------------|
| Claude Code  | 50                     | —              | v2.1.208, v2.1.209, v2.1.210 (3 patches)                    |
| OpenAI Codex | 50                     | 9              | rust‑v0.144.4 (stable patch) + 4 alpha builds (0.145.0‑a8–11) |
| Kimi Code    | 8                      | 50             | @moonshot-ai/kimi-code@0.24.0 (minor), @0.24.1 (patch)      |
| OpenCode     | 10+ hot issues discussed| 7              | Desktop v1.18.0 (major), v1.18.1 (hotfix)                    |

*Notes:* Claude Code PR count was not reported; issue “50 updates” refers to items with new activity. OpenCode’s issue count is a lower‑bound based on hot‑issue selections; the full tracker activity was not quantified.

**3. Shared Feature Directions**

- **Agent orchestration and sub‑agent control**
  Claude Code: multi‑agent collaboration across machines (#28300) and `cwd` parameter for Task subagents (#12748).
  OpenAI Codex: sub‑agent model lock‑in with GPT‑5.6 Sol (#31814).
  Kimi Code: live sub‑agent roster persistence on page refresh (PR #1719) and ACP undo/fork/close support (#1685).
  *All three* communities are actively working on more flexible, multi‑agent and lifecycle controls.

- **Desktop UI refresh and resulting regressions**
  OpenCode: Desktop v2 layout broke tab identification (#36936), Plan/Build toggle (#31972), and session history (#36971).
  Claude Code: added screen‑reader mode and elapsed‑time counter, but also encountered a dialog‑blocking regression in background agents (v2.1.209).
  *Multiple tools* are shipping UI changes that introduce friction alongside accessibility improvements.

- **External provider and API compatibility**
  OpenAI Codex: MCP session reuse, serialized stdin writes, OAuth issuer validation issues, and Bedrock login support.
  Kimi Code: per‑model extra request parameters (#1674) and handling of third‑party OpenAI‑compatible function call arguments (#1455).
  *Both* are investing in robust, configurable integration with non‑first‑party API providers.

**4. Differentiation Analysis**

- **Claude Code** remains focused on developer‑power‑user customisation: hook-like permission warnings (`Write`→`Edit`), Vim‑style insert remaps, agent‑to‑agent protocols, and project‑local memory storage in `.claude`. Its patch‑driven cadence today addressed accessibility and agent session polish.
- **OpenAI Codex** stands out for its broad model‑ecosystem work: GPT‑5.4→5.6 migration, Bedrock login, workspace spend controls, and MCP tool‑catalogue reuse. The community pain points are centered on subscription‑tier limit confusion, desktop stability, and model‑specific regressions (context window, sub‑agent model lock‑in).
- **Kimi Code** is heavily investing in the reliability of its agent‑core‑v2 goal engine (schema validation, budget alignment, persistence) and in web/TUI polish. It uniquely offers worktree‑based session isolation (`-w` flag) and ACP adapter improvements, signaling a focus on team‑scale, durable agent sessions.
- **OpenCode** is currently consumed by the Desktop v2 transition, aiming to modernise the editor‑like interface while juggling compatibility with Claude Code hooks and Copilot integration. Its feature requests cluster around UI control (vertical tabs, inline editing, session history) and on‑the‑fly compaction of context.

**5. Community Activity Notes**

- **Highest issue tracker volume:** Claude Code and OpenAI Codex, each with 50 updated items. Both saw high‑impact regressions addressed or closed (advisor model breakage, context‑window reduction).
- **Highest PR throughput:** Kimi Code with 50 PRs updated, overwhelmingly targeting agent‑core‑v2 fixes and telemetry.
- **Release frequency:** Claude Code shipped 3 patches in 24 hours; OpenAI Codex published 4 alpha builds in parallel; OpenCode pushed one major version and an immediate bugfix.
- **Maintainer responsiveness:** OpenAI Codex closed two loud regressions (#32925, #32806) within the digest window; OpenCode landed multiple fixes for V2 layout complaints; Claude Code rapidly iterated on a dialog bug.

**6. Evidence‑Backed Observations**

1. **Model‑specific regressions and lock‑in events are a common disruptor today.** Claude Code’s Fable advisor is broken for a key model combination, OpenAI Codex’s GPT‑5.6 Sol context window was secretly halved, and its sub‑agent model selection is opaque. Users across tools are losing trust in guarantees when switching or combining models.

2. **Agent lifecycle management — including sub‑agent creation, working directories, roster persistence, and session forking — is an active cross‑tool concern.** Concrete issues and PRs appear in Claude Code, Kimi Code, and OpenAI Codex, suggesting that the next wave of CLI assistants must offer fine‑grained control over multi‑agent execution rather than a single‑shot, single‑directory model.

3. **Desktop UI overhauls are a high‑risk activity.** OpenCode’s V2 migration broke critical navigation elements and triggered immediate user backlash; Claude Code’s dialog guard regression in background agents required a revert. Even incremental accessibility improvements (screen‑reader mode) are shipping alongside regressions that demand quick follow‑up patches.

4. **MCP and external provider interoperability is receiving sustained engineering investment.** OpenAI Codex is adding serialisation safeguards, reusing tool catalogues, and supporting Bedrock; Kimi Code is addressing third‑party function‑call compatibility and per‑model parameter injection. This indicates that CLI tools are moving beyond single‑provider convenience toward multi‑provider reliability.

5. **Telemetry and observability tooling is quietly advancing.** Kimi Code enriched events with `turn_id` and `agent_id`; OpenAI Codex added tool‑search diagnostics to `/feedback`. While no unified trend yet, the parallel work suggests a growing need for debugging and monitoring agent‑level behaviour in production‑scale usage.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-15

## Today’s Update Brief
Three patch releases landed in the past 24 hours (v2.1.208–210), delivering an opt-in screen reader mode, a live elapsed‑time counter for long‑running tools, and a fix for dialogs being blocked in background agent sessions. The issue tracker saw 50 updates, including a high‑visibility bug around the Fable advisor model and a wave of new feature requests for multi‑agent orchestration, project‑local storage, and Windows tool compatibility.

## Releases
- **v2.1.210** – Added a live elapsed‑time counter to the collapsed tool summary line so long‑running tool calls visibly tick instead of appearing stuck. Also added a startup warning for permission rules using `Write(path)`, `NotebookEdit(path)`, and `Glob(path)`, directing users toward `Edit(path)` or `Read(path)` instead.
- **v2.1.209** – Fixed an issue where `/model` and other dialogs were blocked in `claude agents` background sessions (reverted an overly broad guard).
- **v2.1.208** – Introduced screen reader mode: opt‑in plain‑text rendering for screen reader users via `--ax-screen-reader`, `CLAUDE_AX_SCREEN_READER=1`, or `"axScreenReader": true` in settings. Added a `vimInsertModeRemaps` setting to map two‑key insert‑mode sequences like `jj` to Escape.

## Hot Issues
1. **Advisor always “unavailable” with Fable 5 advisor**
   [#73365](https://github.com/anthropics/claude-code/issues/73365) – 83 comments, 153 👍
   The Fable 5 advisor (when using Opus 4.8 as main model) is reported as permanently unavailable across all sessions. This blocks a core feature for users who rely on the model‑level advisor; the thread shows wide frustration and repeated reproduction attempts.
   *Impact: Model‑dependent workflow broken for many users.*
2. **Multi‑agent collaboration across machines (Agent‑to‑Agent protocol)**
   [#28300](https://github.com/anthropics/claude-code/issues/28300) – 35 comments
   A feature request asking for a native protocol to let agents collaborate across separate machines and processes. The discussion explores use‑cases like distributed task coordination, secure message passing, and resource sharing across Claude Code instances.
   *Impact: Would open up architectures for teams using multiple Claude Code environments.*
3. **Add `cwd` parameter to Task tool for subagent working directory**
   [#12748](https://github.com/anthropics/claude-code/issues/12748) – 13 comments, 26 👍
   The request is for a `cwd` parameter on the Task tool so subagents can be launched in a specific directory (e.g., a Git worktree). Currently, subagents always start in the parent’s working directory, which complicates monorepo and worktree‑based workflows.
   *Impact: Heavy demand from users with complex directory layouts.*
4. **Store project memory files in the project‑local `.claude` folder**
   [#25947](https://github.com/anthropics/claude-code/issues/25947) – 6 comments, 29 👍
   Project memory is currently stored in a global, encoded‑path directory. Users want memory to live inside the project’s own `.claude/memory/` folder, making it versionable and portable.
   *Impact: Simplifies sharing project‑specific knowledge within a team.*
5. **jdtls‑lsp plugin fails on Windows due to invalid file URI format**
   [#17643](https://github.com/anthropics/claude-code/issues/17643) – 17 comments, 19

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

1. **Today's Update Brief**
   The repository shipped a stable patch `rust-v0.144.4` (no user-facing changes) and published four `0.145.0` alpha snapshots (`.8`, `.9`, `.10`, `.11`), signaling rapid iteration on the next feature release. The issue tracker saw 50 items updated in the past day, with a high-volume regression (#32806) and a browser plugin failure (#32925) being closed. Pull-request activity centered on rate-limit workspace controls, MCP session reuse, GPT-5.4 deprecation, and Amazon Bedrock login.

2. **Releases**
   - **rust-v0.144.4** – Chore-only patch, no user-facing changes.
   - **rust-v0.145.0-alpha.8, .9, .10, .11** – Four rapid alpha builds for the upcoming `0.145.0` series; no detailed changelogs provided.

3. **Hot Issues**
   - **[#31814](https://github.com/openai/codex/issues/31814)** – *GPT-5.6 Sol subagent model lock-in* (66 comments, 148 👍)
     GPT-5.6 Sol forces all sub-agents to also be Sol instances because `MultiAgent V2` hides spawn metadata, making it impossible to specify different models for subagents. Users with complex task chains are blocked.
   - **[#32925](https://github.com/openai/codex/issues/32925)** – *Browser/Chrome plugin crashes with `Cannot redefine property: process`* (52 comments, 31 👍) **Closed**
     Bundled browser integration and Chrome extension failed on startup with a property redefinition error in Desktop build `26.707.71524`. The closure today indicates a resolution.
   - **[#32806](https://github.com/openai/codex/issues/32806)** – *Severe context-window regression for GPT-5.6 Sol* (22 comments, 23 👍) **Closed**
     Advertised 1.05M token context was slashed to ~258K. Closed after maintainer engagement, likely with a fix shipped.
   - **[#28969](https://github.com/openai/codex/issues/28969)** – *Auto-resolve timeout for questions needs a disable setting* (34 comments, 118 👍)
     CLI questions auto-resolve after 60 seconds, causing loss of context. Strong community support for a configurable or disable option.
   - **[#32040](https://github.com/openai/codex/issues/32040)** – *Windows in-app browser hangs/closes Codex after Picture-in-Picture failure* (25 comments, 8 👍)
     Opening the built-in browser may freeze or terminate the desktop app, especially when a PiP session fails.
   - **[#31846](https://github.com/openai/codex/issues/31846)** – *GPT-5.3 Codex Spark rejects `reasoning.summary` parameter* (19 comments, 28 👍)
     Model receives unsupported parameter error, blocking usage on Pro subscriptions.
   - **[#25463](https://github.com/openai/codex/issues/25463)** – *Desktop project threads vanish from UI while session data remains on disk* (16 comments, 1 👍)
     Conversations disappear from the project view and search, even though JSONL files are intact, leading to data recovery headaches.
   - **[#29968](https://github.com/openai/codex/issues/29968)** – *Pro20x rate-limit anomalies appear like Plus limits* (16 comments, 14 👍)
     Users report usage caps inconsistent with their subscription tier, causing throttled work.
   - **[#20880](https://github.com/openai/codex/issues/20880)** – *App silently creates empty `~/Documents/Codex` on every launch* (16 comments, 36 👍)
     Persistent clutter that users must manually delete; no project content is ever placed there.
   - **[#31573](https://github.com/openai/codex/issues/31573)** – *OAuth authentication fails at issuer validation* (9 comments, 24 👍)
     MCP OAuth breaks for custom providers, preventing tool integration.

4. **Key PR Progress**
   - **[#33187](https://github.com/openai/codex/pull/33187)** – Honor workspace spend controls in rate-limit handling, preventing out-of-order updates from overriding hard stops.
   - **[#33184](https://github.com/openai/codex/pull/33184)** – Reuse MCP tool catalogs across sessions so unchanged stdio servers skip re-initialisation, reducing session start latency.
   - **[#33180](https://github.com/openai/codex/pull/33180)** – Serialize concurrent MCP stdin writes with a semaphore to avoid JSON-RPC corruption.
   - **[#33177](https://github.com/openai/codex/pull/33177)** – Support model catalog templates for Guardian policy prompts, enabling templated safety instructions.
   - **[#33173](https://github.com/openai/codex/pull/33173)** – Migrate GPT-5.4 and GPT-5.4-mini to GPT-5.6 variants (Terra/Luna), hiding the older models from selection.
   - **[#33170](https://github.com/openai/codex/pull/33170)** – Add Amazon Bedrock login support in the app server, including credential validation and provider selection.
   - **[#33166](https://github.com/openai/codex/pull/33166)** – Defer Noise environment connections until explicit registration, avoiding premature WebSocket connections.
   - **[#31343](https://github.com/openai/codex/pull/31343)** – Add metadata-only `app/read` for fast, consistent reads of app IDs without rebuilding runtime state.
   - **[#31466](https://github.com/openai/codex/pull/31466)** – Capture tool-search pipeline diagnostics in `/feedback`, replacing ad-hoc debugging with a bounded per-thread snapshot.
   - **[#33156](https://github.com/openai/codex/pull/33156)** – Run detached reviews as review-agent turns, granting clients standard steering, tool, and permission behavior.

5. **Feature Request Clusters**
   - **Customization & quality-of-life** – The community is asking repeatedly for control over the 60-second auto-resolve timeout (#28969), stop the unwanted `~/Documents/Codex` folder creation (#20880), and restore the Option+Space quick chat shortcut (#31925).
   - **IDE-like Git workspace** – Requests for a richer Git experience with branch tree, commit graph, and changed-file explorer (#30919).
   - **Accessibility** – A first-class “Read Aloud” feature for responses, matching ChatGPT’s capability (#20957).
   - **MCP & integration capabilities** – Need for `openai/form` request support in the desktop client (#31849) so integrations like the Sites design picker can function.

6. **Developer Pain Points**
   - **Context and model regressions** – Sudden context window reductions (#32806) and subagent model lock-in (#31814) erode trust in model-specific guarantees.
   - **Desktop instability** – Frequent crashes or hangs tied to browser use (#32040, #32399), and Windows sandbox permission failures (#31220).
   - **Session and project visibility** – Threads disappearing from UI despite data existing on disk (#25463), remote project sync gaps (#27284), and projects not appearing after updates (#32969).
   - **Subscription & rate-limit confusion** – Pro‑tier users seeing Plus‑like limits (#29968, #30221) and high rate-limit hit rates that fail tasks.
   - **Plugin and tooling pains** – Browser plugin init failures (#32925, #32935), stale plugin links breaking Chrome extension (#31904), and OAuth issuer validation blocking MCP setups (#31573).

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

## Kimi Code Community Digest — 2026-07-15

### Today’s Update Brief
Two patch/minor releases landed yesterday, including a v2 session export feature and a fix for goal completion summaries. Issue activity was modest (8 issues updated) while the PR pipeline remained heavy with 50 PRs updated; the top 20 focused heavily on agent-core-v2 goal lifecycle hardening, web UI polish, and telemetry improvements.

### Releases
- **@moonshot-ai/kimi-code@0.24.0** (minor)
  Adds v2 session export support for packaging diagnostic zip archives ([#1441](https://github.com/MoonshotAI/kimi-code/pull/1441)).
- **@moonshot-ai/kimi-code@0.24.1** (patch)
  Preserves goal completion summaries and shows untyped LLM errors with richer context ([#1678](https://github.com/MoonshotAI/kimi-code/pull/1678)).

### Hot Issues
1. **[#1653 [bug] 项目级 Skill 未自动加载到 Available Skills 列表](https://github.com/MoonshotAI/kimi-code/issues/1653)**
   A project-level skill (`.kimi/skills/...`) does not appear in the Available Skills list on Windows 11 with v0.23.6 and model kimi-k2.6. This blocks skill reuse in larger projects.

2. **[#1717 功能建议：Kimi Code Web 支持无工作区启动选项](https://github.com/MoonshotAI/kimi-code/issues/1717)**
   Feature request to allow starting a conversation without a workspace, useful for quick, unrelated micro-tasks that currently get polluted by workspace context scanning.

3. **[#1541 [CLOSED] [Bug] KimiWeb 工作区新建对话时点击模式按钮无响应](https://github.com/MoonshotAI/kimi-code/issues/1541)**
   (Closed) The mode button was unresponsive when starting a new conversation from a workspace in KimiWeb on macOS. Resolved within the reporting window.

4. **[#1455 openai_responses should treat final function-call arguments as authoritative](https://github.com/MoonshotAI/kimi-code/issues/1455)**
   Third-party OpenAI-compatible providers’ final function call arguments are being ignored; Kimi Code should treat the last call’s arguments as definitive to maintain compatibility with servers like krill/gpt-5.4.

5. **[#1585 [bug] plan模式总是被自动关闭](https://github.com/MoonshotAI/kimi-code/issues/1585)**
   Plan mode is closing automatically before the user can review the generated plan on Ubuntu 24.04 with v0.23.4, causing the model to assume consent and proceed. Affects plan review workflow.

6. **[#1705 [Bug] Mouse wheel scroll up jumps to top of session view](https://github.com/MoonshotAI/kimi-code/issues/1705)**
   On Windows 11 + PowerShell 7.6.3, scrolling up during task execution frequently jumps to the top of the session (Welcome page), making it nearly impossible to review previous output.

7. **[#1685 ACP: expose undo and session fork/close (btw support)](https://github.com/MoonshotAI/kimi-code/issues/1685)**
   The ACP adapter lacks surface for `undo` and session fork/close operations, despite the underlying node SDK supporting them. Host embedding `kimi acp` cannot trigger these actions.

8. **[#1674 Support protocol-aware per-model extra request parameters](https://github.com/MoonshotAI/kimi-code/issues/1674)**
   Request for a configuration surface to inject safe, provider-specific request body parameters (e.g., `service_tier: "priority"` for OpenAI) on a per-model basis, currently impossible via `config.toml`.

### Key PR Progress
1. **[#1694 fix(agent-core-v2): validate goal records](https://github.com/MoonshotAI/kimi-code/pull/1694)**
   Adds schema validation for persisted goal records; prevents crashes from malformed enums, negative counters, or non-finite values during session recovery.

2. **[#1719 fix(kap-server): carry live subagent roster in session snapshot](https://github.com/MoonshotAI/kimi-code/pull/1719)**
   Ports the v1 swarm roster fix to v2: mid-swarm page refresh no longer loses the member list, as the snapshot now includes live subagent data.

3. **[#1718 fix(kimi-web): don’t abort session on Escape when dialog is open](https://github.com/MoonshotAI/kimi-code/pull/1718)**
   Stops the Escape key from simultaneously closing a dialog (e.g., session search) and aborting the running session in the conversation pane (fixes #1538).

4. **[#1716 fix(tui): highlight diff preview rows](https://github.com/MoonshotAI/kimi-code/pull/1716)**
   Adds themed background colors to added/removed diff lines and a gutter divider, improving readability on dark and image-backed terminals.

5. **[#1693 fix(kimi-web): resume paused goals](https://github.com/MoonshotAI/kimi-code/pull/1693)**
   (Closed) Fixes a regression where resuming a paused goal in the web UI did not start a new turn; now properly requests a continuation.

6. **[#1695 fix(agent-core-v2): persist active goal time](https://github.com/MoonshotAI/kimi-code/pull/1695)**
   (Closed) Prevents wall-clock drift after crash recovery by persisting the active goal’s interval anchor; ensures accurate goal budget tracking.

7. **[#1692 fix(agent-core-v2): align goal turn budgets](https://github.com/MoonshotAI/kimi-code/pull/1692)**
   (Closed) Corrects an off-by-one where a goal with a turn budget of N could only use N-1 full turns; the final turn now completes before the goal is marked blocked.

8. **[#1675 feat(telemetry): emit turn_id and agent_id on turn and tool events](https://github.com/MoonshotAI/kimi-code/pull/1675)**
   Improves telemetry attribution by adding missing `turn_id` and `agent_id` fields to turn/tool events, enabling reliable per-agent session analytics.

9. **[#1712 feat(kimi-code): keep print-mode goal runs alive until goal settles](https://github.com/MoonshotAI/kimi-code/pull/1712)**
   (Closed) Ensures `kimi -p "/goal ..."` stays running until the goal finishes, preventing premature exit on the experimental engine.

10. **[#818 feat(kimi-code): add -w, --worktree [name] flag for isolated sessions](https://github.com/MoonshotAI/kimi-code/pull/818)**
    Long-running PR to bring worktree-based session isolation to Kimi Code CLI, aligning with legacy Kimi CLI expectations (closes #828).

### Feature Request Clusters
- **Workspace‑less & session lifecycle controls**
  Users want the ability to start sessions without a workspace (#1717) and to manage session undo/fork/close via ACP (#1685). Both point to a desire for more flexible session orchestration beyond the current directory‑bound model.

- **Provider & model‑specific configuration**
  Requests for per‑model extra parameters (#1674) and better handling of third‑party OpenAI‑compatible function call arguments (#1455) indicate a need for a richer, protocol‑aware configuration layer that accommodates diverse provider APIs.

### Developer Pain Points
- **Plan mode prematurely closing** (#1585) forces users to race the UI and breaks the review‑driven workflow.
- **Terminal UI scroll instability** (#1705) on Windows makes reviewing long agent output nearly impossible, degrading trust in task monitoring.
- **Skill auto‑loading gaps** (#1653) prevent project‑specific skills from appearing, forcing manual workarounds or repeated configuration.
- **Workspace dependency for quick ad‑hoc tasks** (#1717) adds overhead and noise, with users having to explicitly instruct the agent to ignore the project context.
- **Third‑party provider compatibility** (#1455) remains fragile when final function‑call values are not treated as authoritative, limiting the usable ecosystem beyond first‑party subscriptions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-15

## 1. Today’s Update Brief
The day is dominated by the aftermath of Desktop v2 migration (v1.18.0) and a hotfix (v1.18.1). The issue tracker shows strong user pushback on the new tab layout, missing Plan/Build toggles, and CPU regressions. Meanwhile, a flurry of PRs aims to add long‑requested session‑management UI, fix provider quirks, and stabilise the V2 theme work.

## 2. Releases
- **[v1.18.1](https://github.com/anomalyco/opencode/releases/tag/v1.18.1)** (Desktop)
  Bugfix: corrected spacing between model provider sections in Settings.
- **[v1.18.0](https://github.com/anomalyco/opencode/releases/tag/v1.18.0)** (Desktop)
  – Completed the Desktop v2 migration with upgrade handling and first‑launch onboarding.
  – Added a setting to switch between the new and old Desktop layouts during the transition.
  – Bugfix: file views using the wrong background (note: issue text incomplete).

## 3. Hot Issues
1. **[#30086](https://github.com/anomalyco/opencode/issues/30086) High CPU usage in newer versions**
   29 comments, 15 👍. Users report severe CPU spikes after recent updates; previously 10+ sessions ran fine, now 3 sessions cause system lag. Affects all workflows that rely on multiple concurrent sessions.

2. **[#28957](https://github.com/anomalyco/opencode/issues/28957) “Upstream idle timeout exceeded”**
   20 comments, 2 👍. Session and model idle timeouts appear when using the “writing-plans” skill, often on macOS Tahoe / M4. The error message points to infrastructure‑level connection drops.

3. **[#12472](https://github.com/anomalyco/opencode/issues/12472) Native Claude Code hooks compatibility**
   16 comments, 37 👍. Users want `PreToolUse`, `PostToolUse`, `Stop` hooks from Claude Code’s `~/.claude/settings.json` to work natively in OpenCode, complementing existing `CLAUDE.md` and skills support. High demand from power‑user workflows.

4. **[#25239](https://github.com/anomalyco/opencode/issues/25239) Expose GitHub Copilot “Auto” option in model selector**
   16 comments, 14 👍. Request to surface the Copilot “Auto” model routing (the agent‑selected model) directly in the UI, instead of manually configuring a fallback chain.

5. **[#36936](https://github.com/anomalyco/opencode/issues/36936) Desktop: new tab layout makes tab titles unusable**
   10 comments, 5 👍. Opened today. The V2 layout reduces visible session titles; users can’t identify tabs. Reverting to v1.17 fixes it. Many consider it a regression rather than a deliberate design.

6. **[#32747](https://github.com/anomalyco/opencode/issues/32747) @‑file mentions do not include files created after startup**
   10 comments, 8 👍. New files added after OpenCode starts are missing from the TUI `@` picker. A restart is required to recognise them, disrupting iterative coding.

7. **[#31972](https://github.com/anomalyco/opencode/issues/31972) New Layout breaks Plan/Build toggle**
   8 comments, 7 👍. On Windows 10 with the new layout enabled, neither the UI button nor the `Ctrl+.` shortcut switches Plan/Build mode. A core workflow feature is now non‑functional for affected users.

8. **[#9541](https://github.com/anomalyco/opencode/issues/9541) Edit files directly and QoL changes for Desktop**
   11 comments, 0 👍. A long‑standing collection of desktop UX requests: inline file editing, better workspace navigation, and general quality‑of‑life improvements.

9. **[#36942](https://github.com/anomalyco/opencode/issues/36942) Vertical tabs**
   3 comments, 2 👍. Opened today. Request to allow vertical tabs after the V2 forced horizontal tabs, improving session title visibility and navigation.

10. **[#36971](https://github.com/anomalyco/opencode/issues/36971) Session history not loading on home page**
    2 comments, 0 👍. After today’s update, the home screen fails to render the session history list. Fresh sessions are affected, breaking quick resumption of past work.

## 4. Key PR Progress
1. **[#36542](https://github.com/anomalyco/opencode/pull/36542) fix(core): tolerate AlreadyExists in FSUtil.ensureDir**
   Prevents spurious errors when config directories already exist, addressing race‑condition crashes in v1.17.15+.

2. **[#36894](https://github.com/anomalyco/opencode/pull/36894) fix(core): expand reasoning option variants**
   Maps reasoning effort/budget across providers, adds correct toggle variants (`none`/`high`/`max`) and output‑limit clamping, improving reasoning model compatibility.

3. **[#36950](https://github.com/anomalyco/opencode/pull/36950) feat(tui): add V2 theme system**
   Introduces Effect‑based theme contracts, hue aliases, and V1‑to‑V2 migration; foundational for future TUI theming.

4. **[#35405](https://github.com/anomalyco/opencode/pull/35405) fix(llm): unflatten Gemini tool call args**
   Handles dot‑bracket notation (e.g., `questions[0].header`) from Gemini models, restoring correct tool argument nesting.

5. **[#36970](https://github.com/anomalyco/opencode/pull/36970) fix: send max‑steps instruction as user message, not assistant**
   Corrects the role of the “wrap up now” prompt when hitting step caps, preventing models from treating it as a completion.

6. **[#36964](https://github.com/anomalyco/opencode/pull/36964) feat: one‑click context compaction button**
   Adds a compaction button near the context usage indicator, invoking `/compact` without the command palette.

7. **[#36965](https://github.com/anomalyco/opencode/pull/

</details>