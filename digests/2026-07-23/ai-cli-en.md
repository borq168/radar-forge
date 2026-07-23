# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 03:54 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

## Daily Cross-Tool Overview
Today’s activity was dominated by a high volume of issue updates and pull requests across all four tools. Claude Code shipped a patch release focused on background code reviews and accessibility, while OpenAI Codex delivered four alpha iterations of its Rust CLI. Kimi Code released a minor version enabling thinking‑effort control for ACP clients, and OpenCode saw a surge of issue closures and PRs that extended its desktop API and fixed provider‑specific bugs.

## Activity Comparison
| Tool          | Issues Updated | PRs Opened/Active | Release Status                     |
|---------------|----------------|-------------------|------------------------------------|
| Claude Code   | 50             | 9                 | Patch v2.1.218                     |
| OpenAI Codex  | 50             | 10                | Four alpha releases (rust‑v0.146.0) |
| Kimi Code     | 32             | 50                | Minor v0.29.0                      |
| OpenCode      | N/A¹           | 9                 | No product release (verification only) |

¹ *OpenCode digest did not provide a total issue count; multiple closures were noted.*

## Shared Feature Directions
**Model selection and subagent routing** – Every community is actively working on or requesting better model control. Claude Code users want model pinning and subagent model selection; Codex has a critical regression in multi‑agent model overrides; Kimi Code is building dual‑model routing and a configurable subagent model; OpenCode requests auto‑discovery of local models from OpenAI‑compatible endpoints.

**Session lifecycle management** – All four tools show demand for more robust session handling. Claude Code needs fork prevention and session completion; Codex wants workspace‑scoped chat history; Kimi Code addresses corrupted session indexes and unrecoverable sessions; OpenCode added session archival and fork‑from‑message features.

**Quota and usage transparency** – Codex and Kimi Code users explicitly request real‑time quota display in the status line, and both report faster‑than‑expected depletion. Claude Code has related auto‑compact and usage‑limit issues, indicating a cross‑tool need for clearer consumption feedback.

**Cross‑surface connectivity** – Multiple tools are bridging experiences between web, desktop, CLI, and IDE. Claude Code wants to share conversation context from web to CLI; Kimi Code extends ACP for client‑side thinking‑effort control; OpenCode is expanding its API surface for desktop project and shell management.

## Differentiation Analysis
**Claude Code** continues to focus on safety, extensibility via plugins, and accessibility (screen‑reader support, sandbox hardening). Its community is heavily engaged in desktop‑app parity and plugin publishing.

**OpenAI Codex** emphasizes multi‑agent workflows, analytics, and platform stability (Windows, remote SSH). The rapid alpha releases and automated PR merges (Copyberry) suggest a high‑velocity, analytics‑driven development cycle.

**Kimi Code** stands out with its Chinese‑language community and strong investment in ACP (Agent Communication Protocol), dual‑model routing, and multi‑instance reliability. The 50 active PRs indicate aggressive feature development around cost‑aware model dispatching and session recovery.

**OpenCode** prioritizes multi‑provider flexibility (Mistral, Bedrock, Qwen) and is building a rich desktop API. Its focus on local model discovery and canonical tool outcomes signals a developer‑centric, open‑ecosystem approach.

## Community Activity Notes
- **Total PR count**: Kimi Code led with 50 active PRs, far outpacing the others.
- **Issue volume**: Claude Code and OpenAI Codex both reported 50 issue updates, indicating high bug‑report traffic.
- **Release cadence**: OpenAI Codex pushed four alpha versions in a single day, the fastest iteration today; Claude Code and Kimi Code each delivered a single increment.
- **Maintainer responsiveness**: Claude Code closed a high‑impact extension bug (#80002), Codex merged multiple agent/analytics PRs, Kimi Code merged a series of fixes for session corruption and ACP failures, and OpenCode closed a batch of long‑standing feature requests (#7101, #25582, #28961).

## Evidence‑Backed Observations
1. **Model routing is a cross‑tool priority** – Every tool’s community or codebase is actively addressing how to assign different models to main agents vs. subagents, indicating a maturing expectation for cost‑efficient and task‑appropriate model selection.
2. **Session robustness is a universal concern** – Issues about session corruption, accidental forks, recovery from failures, and scoped history appear in all four digests, showing that as sessions grow longer, their reliability becomes a critical user need.
3. **Plugin ecosystems are encountering scale‑related friction** – Claude Code’s publishing pipeline stalls, Kimi Code’s plugin installation requests, and OpenCode’s plugin hook bugs all suggest that plugin systems are expanding but not yet fully reliable.
4. **Quota visibility is a recurring request** – Dedicated issues in Codex and Kimi Code, plus related auto‑compact problems in Claude Code, point to a shared user desire for real‑time, in‑interface consumption tracking.
5. **Multi‑surface integration is gaining traction** – Claude Code’s web‑to‑CLI sharing, Kimi Code’s ACP client support, and OpenCode’s desktop API expansion all reflect a move toward seamless workflows across different application surfaces.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-23

## Today’s Update Brief
The community saw a new patch release (v2.1.218) that moves code reviews to a background subagent and adds screen-reader support for deleted text. Activity remains high: 50 issues were updated in the last 24 hours, with a mix of serious regressions, high-demand enhancements, and plugin‑ecosystem friction. Nine pull requests were opened, including an account‑profiles plugin and several fixes for docs, sandbox, and console behaviour.

---

## Releases

**v2.1.218** (released 2026-07-23)
- `/code-review` now runs as a **background subagent**, so review work no longer fills the main conversation and keeps stacked slash commands as its review target.
- Added screen‑reader announcements for word and line deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`) to improve accessibility.

---

## Hot Issues (10 most noteworthy)

1. **[#80002] [CLOSED] macOS: Claude Desktop never dispatches tools/call to the first‑party Filesystem extension**
   *57 comments, 25 👍*
   The Filesystem extension was invisible to the agent (tools/list succeeded, but no tools/call). This affected all Desktop workflows that rely on the extension for file access. The issue was closed today, indicating a fix was delivered.
   [Link](https://github.com/anthropics/claude-code/issues/80002)

2. **[#13843] [OPEN] Share conversation context from Claude.ai to Claude Code**
   *25 comments, 99 👍*
   Users want to start a plan on the web (Claude.ai) and seamlessly continue it in Claude Code without manual copy‑paste. The high number of upvotes shows strong demand for cross‑surface context sharing.
   [Link](https://github.com/anthropics/claude-code/issues/13843)

3. **[#71726] [OPEN] Desktop app: inject queued messages mid‑task between tool calls (CLI steering parity)**
   *9 comments, 16 👍*
   The Desktop app queues messages until the end of the current turn, while the CLI/TUI can inject them between tool calls (“steering”). This feature gap frustrates users who want to redirect a running agent mid‑task.
   [Link](https://github.com/anthropics/claude-code/issues/71726)

4. **[#77966] [OPEN] Linux: OAuth loop — state parameter dropped after “sign in again to continue” redirect**
   *8 comments, 6 👍*
   The login flow breaks on Linux (IntelliJ platform) when the OAuth state parameter is lost, trapping users in an endless re‑authentication loop.
   [Link](https://github.com/anthropics/claude-code/issues/77966)

5. **[#79997] [OPEN] 2.1.216 sandbox regression: `bwrap: Can't mkdir /opt/.claude`**
   *3 comments, 2 👍*
   The sandbox update fails for non‑root installs under root‑owned directories, breaking every Bash tool call. Combined with #79606, this represents a widespread sandbox‑stability regression.
   [Link](https://github.com/anthropics/claude-code/issues/79997)

6. **[#78253] [OPEN] Bash tool fails with `spawn E2BIG` — sandbox profile size grows with working‑tree file count**
   *1 comment, 5 👍*
   Large repositories trigger a sandbox argument‑size overflow, causing all Bash tool calls to fail silently. The bug is a direct blocker for users of monorepos or large projects.
   [Link](https://github.com/anthropics/claude-code/issues/78253)

7. **[#80424] [OPEN] Phantom user message: response fabricates user’s reply and fake instructions to disable safety rules**
   *0 comments, 0 👍 (new)*
   Reproduced 7 times in 2 days on Windows (VSCode extension): Claude’s response continues past end‑of‑turn and generates a fake user reply, including permissions and instructions to disable safety rules. This is a high‑severity safety concern.
   [Link](https://github.com/anthropics/claude-code/issues/80424)

8. **[#80404] [OPEN] Event‑loop starvation causing ~200% CPU spin and input lag after hibernate/resume**
   *4 comments, 0 👍*
   On Windows, idle sessions spin two CPU cores after resume from sleep/hibernate. The libuv event loop gets stuck with `uv_backend_timeout() == 0`, leading to severe input lag and eventual self‑termination.
   [Link](https://github.com/anthropics/claude-code/issues/80404)

9. **[#80055] [OPEN] Cannot purchase API credits — payment fails despite successful card authorization (Japan)**
   *3 comments, 0 👍*
   Multiple cards, including a newly issued credit card, are rejected after successful authorization. This blocks users in Japan from buying API credits, effectively cutting off paid usage.
   [Link](https://github.com/anthropics/claude-code/issues/80055)

10. **[#80263] [OPEN] Plugin submissions stuck at “Published” but never appear in the directory**
    *5 comments, 0 👍*
    Plugins reach “Published” status in the Claude Console but never propagate to the public plugin directory. The issue also requests removal of duplicate entries, highlighting a broken publishing pipeline.
    [Link](https://github.com/anthropics/claude-code/issues/80263)

---

## Key PR Progress (9 pull requests)

1. **[#18217] [CLOSED] feat(plugins): add /planwith command for inline plan mode prompts**
   Introduced a `/planwith` slash command that accepts a prompt directly, removing the two‑step toggle‑and‑prompt flow. The PR was closed (not merged) after review.
   [Link](https://github.com/anthropics/claude-code/pull/18217)

2. **[#80353] [OPEN] docs(gcp): stop on checksum mismatch**
   Hardens the GCP gateway deployment guide so the sequence exits immediately if the downloaded binary fails checksum verification.
   [Link](https://github.com/anthropics/claude-code/pull/80353)

3. **[#80326] [OPEN] Add account profiles plugin**
   Adds an experimental `account-profiles` plugin that manages isolated `CLAUDE_CONFIG_DIR` environments for personal, work, or client accounts on a single machine.
   [Link](https://github.com/anthropics/claude-code/pull/80326)

4. **[#80294] [OPEN] docs: fix 1 broken link via archive.org**
   Fixes a broken outbound link in docs using a Wayback Machine snapshot (confidence 0.66).
   [Link](https://github.com/anthropics/claude-code/pull/80294)

5. **[#80241] [OPEN] fix: Console scrolling top of history when Claude adds text**
   Automatically submitted PR (EMP_Agent) that resolves the console scrolling issue where the view jumps to the top when new output appears.
   [Link](https://github.com/anthropics/claude-code/pull/80241)

6. **[#80229] [OPEN] docs: fix 1 broken link via archive.org**
   Another automated broken‑link fix using archive.org snapshots.
   [Link](https://github.com/anthropics/claude-code/pull/80229)

7. **[#80196] [OPEN] fix: Auto‑compact never triggers despite “100% context used”**
   PR targeting the bug where auto‑compact fails to activate even when the statusline reports full context usage (v2.1.153, Max subscription, 200K mode).
   [Link](https://github.com/anthropics/claude-code/pull/80196)

8. **[#80195] [OPEN] fix: Instantly hitting usage limits with Max subscription**
   Aims to resolve the issue where users with a Max subscription hit usage limits immediately after starting a session.
   [Link](https://github.com/anthropics/claude-code/pull/80195)

9. **[#80112] [OPEN] Make devcontainer firewall init resilient to DNS resolution failures**
   Hardens the firewall setup script so a transient DNS failure for one allowed domain does not abort the entire container initialization.
   [Link](https://github.com/anthropics/claude-code/pull/80112)

---

## Feature Request Clusters

- **Steering and mid‑task message injection**
  Multiple requests call for the Desktop app to support injecting messages between tool calls (like the CLI) rather than queuing until the end of the turn. Issues #71726 and #77724 both ask for this behaviour, with #77724 specifically requesting an immediate‑injection option.

- **Model selection and session consistency**
  Users want the model to be pinned or warned when resuming a session (#76363), and they report that Dispatch sessions lock to Fable 5 with no way to switch after hitting limits (#79410). This cluster highlights a need for reliable model persistence and graceful fallback.

- **Plugin publishing and directory propagation**
  Plugins that reach “Published” status never appear in the directory (#80263), and pending submissions remain stuck due to name‑collision bugs (#80423). The repeated requests suggest a broken publishing pipeline that blocks plugin authors.

- **Agent session lifecycle management**
  Requests include the ability to mark agent sessions as completed/dismissed (#66202) and preventing accidental session forks when resuming from multiple terminals (#80427). This cluster reflects a desire for tighter control over background agent

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-07-23

**Today’s Update Brief**
The repository saw a flurry of activity with 4 alpha releases of the Rust CLI (v0.146.0 series) and a heavy issue tracker load (50 issues updated). PRs were dominated by automated merges from Copyberry, delivering a mix of agent improvements, analytics, plugin caching, and platform fixes. The community remains focused on Windows stability, rate-limit concerns, and feature requests around the plan-mode auto-resolve timer.

---

### Releases
**rust-v0.146.0-alpha.1 → alpha.4**
Four sequential alpha releases of the Rust CLI were published today. No specific release notes are provided, but the rapid iteration suggests active development of the upcoming v0.146.0 feature set.

---

### Hot Issues
1. **[#28969](https://github.com/openai/codex/issues/28969) – Add setting to disable auto-resolve in 60 seconds for questions**
   - 53 comments, 151 👍 | Author: @antoyo
   - The `/plan` workflow auto-resolves user questions after 60 seconds, breaking intentional question-and-answer flows. Users demand a permanent config toggle to disable this behavior.
   - *Impact:* Makes plan mode unusable for long-running interactive clarification.

2. **[#29532](https://github.com/openai/codex/issues/29532) – Persistent SQLite log churn on macOS after rust-v0.142.0**
   - 44 comments, 8 👍 | Author: @pwukun
   - Despite a partial fix, `~/.codex/logs_2.sqlite` still grows rapidly due to internal trace logging. This affects disk usage and I/O on macOS.
   - *Impact:* Ongoing performance degradation for macOS users.

3. **[#17827](https://github.com/openai/codex/issues/17827) – Customizable status line**
   - 31 comments, 119 👍 | Author: @pkondaurov
   - Request to port Claude Code’s customizable TUI status line (token usage, model, git branch, etc.) to Codex CLI.
   - *Impact:* High demand for at-a-glance session context in the terminal.

4. **[#31573](https://github.com/openai/codex/issues/31573) – OAuth authentication fails at issuer validation**
   - 19 comments, 45 👍 | Author: @NiceWaffel
   - OAuth-based authentication (e.g., for MCP servers) fails during issuer validation, blocking login.
   - *Impact:* Breaks MCP integrations that rely on OAuth.

5. **[#33685](https://github.com/openai/codex/issues/33685) – Weekly limit draining like the old 5-hour limit**
   - 19 comments, 9 👍 | Author: @mikk73
   - Users report that the weekly usage cap is consumed just as fast as the previous 5-hour limit, even with standard GPT-5.5 High usage.
   - *Impact:* Erodes trust in the new rate-limit model.

6. **[#25319](https://github.com/openai/codex/issues/25319) – Scope VS Code chats to the current workspace/project**
   - 17 comments, 47 👍 | Author: @omry
   - Chat history is global, not per-project. Users want a workspace-scoped experience to avoid context pollution.
   - *Impact:* Hinders multi-project workflows in the IDE extension.

7. **[#27597](https://github.com/openai/codex/issues/27597) – IDE extension fails to load in VS Code Remote-SSH**
   - 16 comments, 4 👍 | Author: @lucastdeoliveira1-bit
   - The Codex extension crashes in remote development environments, while the CLI works fine.
   - *Impact:* Blocks remote development with the VS Code extension.

8. **[#32031](https://github.com/openai/codex/issues/32031) – [Critical UX regression] multi-agent v2 spawn_agent hides model overrides**
   - 5 comments, 14 👍 | Author: @lidge-jun
   - The multi-agent v2 mode makes sub-agent model selection undiscoverable and rejects natural override calls.
   - *Impact:* Breaks advanced multi-agent workflows for Sol/Terra models.

9. **[#33778](https://github.com/openai/codex/issues/33778) – Windows Desktop spawns hundreds of taskkill.exe / conhost.exe during tool execution**
   - 8 comments, 3 👍 | Author: @WangZhehao37
   - Process explosion during local tool calls degrades system performance on Windows.
   - *Impact:* Severe performance and resource issue on Windows.

10. **[#34743](https://github.com/openai/codex/issues/34743) – Codex Ultra mode is just wasting usage**
    - 2 comments, 0 👍 | Author: @shad0wlan
    - Ultra mode consumes the entire weekly limit in ~2.5 hours without meaningful output.
    - *Impact:* Users lose trust in high-cost modes.

---

### Key PR Progress
1. **[#34852](https://github.com/openai/codex/pull/34852) – Wake sleeping threads for queued agent mail**
   - Ensures idle agent threads with durable sleeps are woken when new work arrives, even if the message would normally stay queued.

2. **[#34849](https://github.com/openai/codex/pull/34849) – Cache remote plugin catalogs by scope**
   - Introduces on-disk caching of remote plugin catalogs (global/user/workspace) with a 3-hour TTL and background refresh, improving plugin list responsiveness.

3. **[#34850](https://github.com/openai/codex/pull/34850) – Disable image generation for Free-plan accounts**
   - Prevents the `image_generation` tool from being registered when the account is on the Free plan, while retaining other authorization checks.

4. **[#34846](https://github.com/openai/codex/pull/34846) – Allow custom providers to opt into standalone web search**
   - Adds a `supports_standalone_web_search` provider setting, enabling custom models to use the `web.run` tool when web search is enabled.

5. **[#34845](https://github.com/openai/codex/pull/34845) – Track multi-agent mode in world state**
   - Persists the effective multi-agent mode in world state, avoiding re-emission of setup hints after history changes.

6. **[#34840](https://github.com/openai/codex/pull/34840) – Add persisted thread pinning to the app server**
   - Switches `isPinned` from a local-only flag to a persisted thread property, with filters and pagination support in `thread/list`.

7. **[#34839](https://github.com/openai/codex/pull/34839) – Preserve user input when MCP startup is interrupted**
   - Fixes a bug where interrupting a turn while MCP tools were starting could drop the user’s input from conversation history.

8. **[#34819](https://github.com/openai/codex/pull/34819) – Enable git attribution across Codex entry points**
   - Installs the git attribution extension in the app server, MCP server, and debug tool, allowing workspace policy to control commit/PR attribution instructions.

9. **[#34835](https://github.com/openai/codex/pull/34835) – Track compaction time in turn profiles**
   - Adds `compaction_ms` to turn analytics, measuring manual and automatic compaction as a separate phase instead of idle time.

10. **[#34831](https://github.com/openai/codex/pull/34831) – Flush analytics before in-process app server shutdown**
    - Ensures turn-completion analytics are delivered before shutdown, preventing loss of telemetry data.

---

### Feature Request Clusters
- **Disable auto-resolve timer entirely**
  Issues [#28969](https://github.com/openai/codex/issues/28969) and [#34310](https://github.com/openai/codex/issues/34310) both request a permanent setting to stop the 60-second automatic resolution of questions during `/plan` mode. Users find the feature disruptive and want a global off switch.

- **Customizable TUI status line**
  [#17827](https://github.com/openai/codex/issues/17827) gathers significant community backing (119 👍) for exposing real-time session info like token usage, model, and git branch in the CLI’s status bar.

- **RTL language support**
  [#19504](https://github.com/openai/codex/issues/19504) requests full right-to-left text rendering for Arabic and Hebrew in the app and chat panels.

- **Workspace‑scoped chat history**
  [#25319](https://github.com/openai/codex/issues/25319) asks for per-project chat isolation in the VS Code extension, preventing cross-project context leakage.

- **Inline diff display in Desktop App**
  [#24513](https://github.com/openai/codex/issues/24513) wants the Desktop app to show file diffs directly in the conversation, matching the CLI’s behavior.

---

### Developer Pain Points
- **Windows platform instability**
  Recurring problems: sandbox setup failures ([#22428](https://github.com/openai/codex/issues/22428), [#32876](https://github.com/openai/codex/issues/32876)), extension webview crashes ([#14745](https://github.com/openai/codex/issues/14745)), excessive process spawning during tool calls ([#33778](https://github.com/openai/codex/issues/33778)), and silent background update exits ([#33321](https://github.com/openai/codex/issues/33321)). Windows users face a fragmented and often broken experience.

- **Remote development gaps**
  The VS Code extension fails in Remote-SSH environments ([#27597](https://github.com/openai/codex/issues/27597)), and remote-control desktop projects are missing from the sidebar on macOS ([#31407](https://github.com/openai/codex/issues/31407)). This forces remote developers to fall back to the CLI.

- **Rate-limit and usage unpredictability**
  The new weekly limit is perceived as draining just as fast as the old 5-hour cap ([#33685](https://github.com/openai/codex/issues/33685)), and Ultra mode burns through the entire allotment in a few hours with little output ([#34743](https://github.com/openai/codex/issues/34743)). This erodes confidence in high‑intensity workflows.

- **Plan mode under‑mining**
  The auto‑resolve timer ([#28969](https://github.com/openai/codex/issues/28969)) and occasional plan‑mode violations ([#32594](https://github.com/openai/codex/issues/32594)) make the plan workflow unreliable for deliberate, step‑by‑step development.

- **Multi‑agent model selection broken**
  Critical UX regression in v2 multi‑agent mode ([#32031](https://github.com/openai/codex/issues/32031)) prevents users from overriding sub‑agent

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-23

## Today’s Update Brief
The repository saw a new minor release (`0.29.0`) enabling ACP clients to select a thinking effort level. Activity remains high with 32 issues updated and 50 pull requests active in the last 24 hours, reflecting ongoing work on multi-instance reliability, subagent model routing, and a series of developer experience hardening.

## Releases
- **`@moonshot-ai/kimi-code@0.29.0`**
  *Minor Changes* — Support selecting a thinking effort level from ACP clients ([#1992](https://github.com/MoonshotAI/kimi-code/pull/1992), thanks [@RealKai42](https://github.com/RealKai42)). This allows ACP integrations to control the reasoning depth of the model.

## Hot Issues
*(Top 10 noteworthy issues by impact and discussion)*

1. **Interactive sessions ignore hooks and permission rules**
   [#2070](https://github.com/MoonshotAI/kimi-code/issues/2070) (5 comments)
   `[[hooks]]` and `[[permission.rules]]` from `config.toml` are enforced in headless (`-p`) mode but silently ignored in interactive TUI sessions. This breaks automated guardrails and agent moderation for users relying on the TUI. Author reports 45 rule entries and 2 hooks being bypassed.

2. **stdio MCP child `NO_PROXY` injection crashes Python servers**
   [#1931](https://github.com/MoonshotAI/kimi-code/issues/1931) (2 comments)
   When an HTTP proxy is set, stdio MCP children inherit `[::1]` in `NO_PROXY`, which `httpx` (Python) treats as an invalid port, crashing the server before the handshake. Affects any MCP server built on `httpx` under a proxy environment.

3. **Feature request: display quota remainders in the status line**
   [#872](https://github.com/MoonshotAI/kimi-code/issues/872) (2 comments, 👍 2)
   Users want the 5-hour and weekly quota limits (shown by `/status`) directly in the TUI status line alongside context usage, for both API-key and OAuth users. High demand for proactive quota visibility.

4. **Terminal jumps to top when scrolling during generation**
   [#1487](https://github.com/MoonshotAI/kimi-code/issues/1487) (2 comments)
   On Linux (Fedora) with TUI, scrolling up while output is streaming causes the terminal to snap back to the top, making it impossible to read earlier content during long generations.

5. **Permission descriptions (`/auto`, `/yolo`) are confusing and contradictory**
   [#1866](https://github.com/MoonshotAI/kimi-code/issues/1866) (1 comment, 👍 1)
   The Chinese and English descriptions of permission modes in TUI vs. web interface are inconsistent, leading to user confusion about what each mode actually allows.

6. **Session permanently bricked after a `400 “high risk”` rejection**
   [#2080](https://github.com/MoonshotAI/kimi-code/issues/2080) (1 comment)
   After one false-positive high-risk rejection, every subsequent turn in the same session fails with the same error, with no recovery path. The flagged content is stuck in the conversation, forcing a session restart.

7. **TUI flickers when opening `/usage` while agents status box is live-updating**
   [#2039](https://github.com/MoonshotAI/kimi-code/issues/2039) (1 comment)
   On Alacritty terminal, the TUI flickers/flashes when the agents status box is being updated, especially when opening the `/usage` panel. Reduces usability.

8. **`/exit` command priority is too low**
   [#2007](https://github.com/MoonshotAI/kimi-code/issues/2007) (1 comment)
   The frequently used `/exit` command requires typing the full word because other commands with higher priority match the partial input `/ex`. Users expect it to be the first suggestion.

9. **Feature request: Cmd/Ctrl+click to open links in terminal**
   [#2051](https://github.com/MoonshotAI/kimi-code/issues/2051) (1 comment)
   URLs in the terminal output are not clickable; users want standard terminal link-opening behavior (Cmd/Ctrl+click) to quickly follow references.

10. **ACP adapter swallows non-auth failures (quota 403) as `end_turn`**
    [#1813](https://github.com/MoonshotAI/kimi-code/issues/1813) (1 comment)
    When a quota or upstream error occurs, the ACP adapter resolves the turn as a successful `end_turn` instead of surfacing an error, leaving clients unaware of failures. Related: [#1865](https://github.com/MoonshotAI/kimi-code/issues/1865) also reporting that failed turns are not surfaced.

## Key PR Progress
*(Top 10 important pull requests by feature or fix significance)*

1. **feat: support a configurable secondary model for subagents**
   [#2064](https://github.com/MoonshotAI/kimi-code/pull/2064) by [@7Sageer](https://github.com/7Sageer)
   Introduces a `subagent_model` config to let subagents run on a cheaper/faster model than the main agent, addressing cost and capacity concerns.

2. **fix(acp): surface failed turns to clients**
   [#2076](https://github.com/MoonshotAI/kimi-code/pull/2076) by [@shizhigu](https://github.com/shizhigu)
   Changes ACP `turn.ended` handling so that non-auth failures (quota, upstream errors) now properly report as errors instead of `end_turn`. Fixes #1813 and #1865.

3. **feat: multi‑instance session lease, write fencing, and fs/watch reliability**
   [#1920](https://github.com/MoonshotAI/kimi-code/pull/1920) by [@7Sageer](https://github.com/7Sageer)
   Hardens shared `KIMI_CODE_HOME` usage with session leases, write fencing, and improved file‑system watch reliability, preventing corruption when multiple Kimi Code servers share the same home directory.

4. **feat(agent-core): include recent messages in Stop hook payload**
   [#1299](https://github.com/MoonshotAI/kimi-code/pull/1299) by [@Liewzheng](https://github.com/Liewzheng)
   Extends the Stop hook to include the recent user/assistant messages, enabling external memory systems (e.g., Mimir) to learn from the current turn.

5. **fix(kap-server): cache successful password verification**
   [#2077](https://github.com/MoonshotAI/kimi-code/pull/2077) by [@shizhigu](https://github.com/shizhigu)
   Eliminates repeated bcrypt cost‑12 verification on every authenticated request, significantly speeding up Kimi Web startup and refresh on low‑power hosts. Fixes #1904.

6. **fix(session): recover concatenated session index records**
   [#2074](https://github.com/MoonshotAI/kimi-code/pull/2074) by [@shizhigu](https://github.com/shizhigu)
   Adds a recovery path for `session_index.jsonl` lines that lost their newline separator, preventing `session.not_found` errors on resume. Fixes #1925.

7. **fix(tui): enable terminal progress in VS Code**
   [#2073](https://github.com/MoonshotAI/kimi-code/pull/2073) by [@shizhigu](https://github.com/shizhigu)
   Recognizes `TERM_PROGRAM=vscode` so that OSC 9;4 progress updates (working/idle status) now appear in VS Code’s terminal tabs.

8. **feat: add ChatGPT Plus/Pro OAuth provider**
   [#1529](https://github.com/MoonshotAI/kimi-code/pull/1529) by [@qipenglin](https://github.com/qipenglin)
   Implements OpenAI device‑code OAuth login for ChatGPT Plus/Pro subscriptions, including credential storage, token refresh, and catalog fetching.

9. **feat(agent-core): dual‑model‑routing — separate subagent model and thinking effort**
   [#1996](https://github.com/MoonshotAI/kimi-code/pull/1996) by [@kassieclaire](https://github.com/kassieclaire)
   Allows the main agent to use a top‑tier reasoning model while dispatching subagents to faster, cheaper models, with independent thinking effort controls.

10. **fix(agent): isolate workspace baseline from trusted system prompt**
    [#2049](https://github.com/MoonshotAI/kimi-code/pull/2049) by [@Ram-Pavith](https://github.com/Ram-Pavith)
    Addresses a security concern by separating trusted host rules from workspace‑injected content (AGENTS.md, listings, skills) in the system prompt, reducing prompt injection risk.

## Feature Request Clusters
*(Recurring themes from today’s issues, without roadmap predictions)*

- **Quota and usage transparency** – Multiple requests to display 5‑hour/weekly quota remainders in the status line ([#872](https://github.com/MoonshotAI/kimi-code/issues/872)) and reports of faster quota depletion after recent releases ([#2072](https://github.com/MoonshotAI/kimi-code/issues/2072)).
- **Chinese (i18n) localization** – Requests for a full Chinese TUI interface ([#1941](https://github.com/MoonshotAI/kimi-code/issues/1941), 👍 2) and VS Code plugin Chinese settings ([#2059](https://github.com/MoonshotAI/kimi-code/issues/2059)).
- **Memory and rules management** – Desire for multi‑file memory systems like Claude Code’s `.claude/rules` ([#2084](https://github.com/MoonshotAI/kimi-code/issues/2084)) and a general memory provider mechanism for cross‑session integration ([#2075](https://github.com/MoonshotAI/kimi-code/issues/2075)).
- **Advanced agent orchestration** – Interest in “ultracode” / dynamic workflows as in Claude Code ([#2067](https://github.com/MoonshotAI/kimi-code/issues/2067)), architect/developer model separation ([#2078](https://github.com/MoonshotAI/kimi-code/issues/2078)), and quorum strategies.
- **Rate‑limit handling** – Requests to improve the retry experience when hitting provider rate limits, inspired by external agents like `pi` ([#2087](https://github.com/MoonshotAI/kimi-code/issues/2087)).
- **Clickable links in terminal** – Enable Cmd/Ctrl+click for URLs in TUI output ([#2051](https://github.com/MoonshotAI/kimi-code/issues/2051)).
- **Plugin installation from GitLab** – Extend `/plugins install` to support GitLab repository URLs ([#2063](https://github.com/MoonshotAI/kimi-code/issues/2063)).

## Developer Pain Points
*(Recurring developer frustrations and high‑frequency requests visible in today’s data)*

- **Config inconsistency between interactive and headless sessions** – Hooks and permission rules are ignored in the TUI, breaking automated guardrails ([#2070](https://github.com/MoonshotAI/kimi-code/issues/2070)).
- **MCP stdio proxy crashes** – `NO_PROXY` injection with `[::1]` kills Python `httpx`‑based MCP servers, making MCP integration fragile under proxy setups ([#1931](https://github.com/MoonshotAI/kimi-code/issues/1931)).
- **Unrecoverable session failures** – A single `400 “high risk”` rejection bricks the entire session with no way to clear the flagged content ([#2080](https://github.com/MoonshotAI/kimi-code/issues/2080)).
- **Quota and token consumption surprises** – Reports of excessive token usage in auto mode ([#2031](https://github.com/MoonshotAI/kimi-code/issues/2031)) and faster quota depletion after upgrades ([#2072](https://github.com/MoonshotAI/kimi-code/issues/2072

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-23

## Today’s Update Brief
The repository saw a large volume of issue closures and fresh pull-request activity today. A notable cluster of provider‑side fixes (Mistral, Bedrock, Qwen) landed alongside a broad set of new API surface features for desktops and sessions. The community continues to push for better model discovery, session management, and tool reliability.

## Releases
- **pr-38252-videos** — Verification recordings for PR #38252. No new product version was released.

## Hot Issues

### 1. Auto-discover models from OpenAI-compatible endpoints
**#6231** | [OPEN] | 30 comments · 👍 185
[@ochsec](https://github.com/ochsec) requests that local providers like LM Studio, Ollama, and llama.cpp be automatically detected so users don’t have to manually list every model in `opencode.json`. The high upvote count signals strong demand for a smoother onboarding experience with local models.
🔗 https://github.com/anomalyco/opencode/issues/6231

### 2. Custom system prompts in global, project, or custom directories
**#7101** | [CLOSED] | 35 comments · 👍 123
[@dan-and](https://github.com/dan-and) asked for the ability to define custom system prompts that can be loaded from different configuration scopes. The feature was closed after extensive discussion, likely because it was implemented or addressed.
🔗 https://github.com/anomalyco/opencode/issues/7101

### 3. “System message must be at the beginning” with Qwen models
**#16560**, **#20785**, **#20813** | [CLOSED]
Multiple users reported that Qwen models (qwen3.5-122b-a10b, Qwen3.5-397B-A17B, Qwen3.6-plus) return an API error when the system message is not at the start of the conversation. The issue was seen across different providers (Nvidia, custom APIs) and even with image inputs. All three issues are now closed, indicating a server‑side or parsing fix.
🔗 [#16560](https://github.com/anomalyco/opencode/issues/16560) · [#20785](https://github.com/anomalyco/opencode/issues/20785) · [#20813](https://github.com/anomalyco/opencode/issues/20813)

### 4. Model does not update todowrite list during task execution
**#28961** | [CLOSED] | 6 comments · 👍 2
[@smithyyang](https://github.com/smithyyang) observed that models rarely call the `todowrite` tool to update task lists, leaving items stuck in “in_progress” even after the work is done. The problem was acknowledged and closed, likely with a prompt or tool‑call improvement.
🔗 https://github.com/anomalyco/opencode/issues/28961

### 5. Agent hallucinates the `cp` tool – request for a native copy command
**#29017** | [CLOSED] | 5 comments
[@Flamefire](https://github.com/Flamefire) reported that the agent repeatedly invents a `cp` tool. The request to make it a built‑in was closed, suggesting the team addressed the hallucination or added the tool.
🔗 https://github.com/anomalyco/opencode/issues/29017

### 6. Fork to new session from message timeline
**#25582** | [CLOSED] | 9 comments · 👍 5
[@adrian15](https://github.com/adrian15) wanted the ability to fork a session from any message in the timeline, mirroring the existing `--fork-session` CLI flag. The feature request was closed, possibly implemented.
🔗 https://github.com/anomalyco/opencode/issues/25582

### 7. Plugin hook rejection aborts unrelated parallel sessions
**#28958** | [CLOSED] | 3 comments · 👍 2
[@ririnto](https://github.com/ririnto) discovered that an asynchronous plugin rejection can propagate through the fiber tree and kill healthy sibling sessions. The bug was fixed, improving the stability of parallel sub‑agent workloads.
🔗 https://github.com/anomalyco/opencode/issues/28958

### 8. Desktop local server connection drops unexpectedly
**#38419** and **#37233** | [OPEN]
After the v1.18.4 update, users report that the local server status indicator turns red after a period of inactivity, making the agent unresponsive. The issue remains open and is affecting daily workflow.
🔗 [#38419](https://github.com/anomalyco/opencode/issues/38419) · [#37233](https://github.com/anomalyco/opencode/issues/37233)

### 9. `webfetch` permission with object syntax crashes server on startup
**#29041** | [CLOSED] | 2 comments
Using the object/pattern syntax for `webfetch` permissions in `opencode.jsonc` caused a server crash. The bug was reproduced and fixed.
🔗 https://github.com/anomalyco/opencode/issues/29041

### 10. Expose prompt/output message bodies to plugin `chat.message` hook
**#22831** | [CLOSED] | 3 comments
[@michael-schienbein-fhr](https://github.com/michael-schienbein-fhr) requested that the full user‑prompt and assistant‑output bodies be available in the `chat.message` hook, distinct from a previous transform‑oriented request. The issue was closed, suggesting the hook was extended.
🔗 https://github.com/anomalyco/opencode/issues/22831

## Key PR Progress

### 1. API surface expansion stack (multiple PRs)
A series of new features for the current API was opened by [@Brendonovich](https://github.com/Brendonovich):
- **#38443** — Project metadata updates (name, icon)
- **#38440** — Durable session archival and unarchive
- **#38442** — Expose repository branch metadata (Git and Mercurial)
- **#38441** — List available shells and issue short‑lived PTY connection tokens
- **#38438** — Identify command sources (config, plugin, MCP)
- **#38437** — Server location paths (home, state, config, worktree)
- **#38444** — Regenerate Effect and Promise clients for the new endpoints

These PRs collectively extend the desktop API with richer session, project, and shell management.

### 2. Fix Mistral prompt cache key serialization
**#38448** | [CLOSED]
[@rekram1-node](https://github.com/rekram1-node) upgraded the Mistral SDK and patched the provider to correctly serialize `promptCacheKey` as `prompt_cache_key`. Wire‑level coverage was added.
🔗 https://github.com/anomalyco/opencode/pull/38448

### 3. Preserve raw finish reasons across providers
**#38423** | [OPEN]
[@rekram1-node](https://github.com/rekram1-node) introduces a normalized/raw pair for finish reasons on `step-finish` and `finish` events, preserving raw reasons from OpenAI, Anthropic, Gemini, and Bedrock.
🔗 https://github.com/anomalyco/opencode/pull/38423

### 4. Turn token usage diagnostics in TUI
**#38398** | [OPEN]
[@jlongster](https://github.com/jlongster) adds per‑turn token usage summaries directly in the TUI, grouping consecutive tool‑continuation steps and highlighting cache‑read drops.
🔗 https://github.com/anomalyco/opencode/pull/38398

### 5. Fix: dynamic model loading for `/api/generate`
**#38401** | [CLOSED]
[@kitlangton](https://github.com/kitlangton) fixed a bug where models backed by dynamically loaded provider packages (e.g., Gemini) failed on stateless generate requests.
🔗 https://github.com/anomalyco/opencode/pull/38401

### 6. Canonicalize tool outcomes in V2 core
**#38367** | [OPEN]
[@kitlangton](https://github.com/kitlangton) refactors parallel tool‑result representations into a single canonical outcome, separating machine‑validated output from model‑facing content.
🔗 https://github.com/anomalyco/opencode/pull/38367

### 7. Fix: finalize assistant messages on failure
**#38432** | [OPEN]
[@iandraves](https://github.com/iandraves) adds cleanup for assistant messages that were created during a provider‑turn that later fails, preventing incomplete conversation state.
🔗 https://github.com/anomalyco/opencode/pull/38432

### 8. Roll‑call command for connectivity testing
**#38433** | [OPEN]
[@cbrunnkvist](https://github.com/cbrunnkvist) introduces a `roll-call` command that tests connectivity and latency for all matching text models, aimed at diagnosing model‑selection issues.
🔗 https://github.com/anomalyco/opencode/pull/38433

### 9. Fix: Bedrock cache usage normalization
**#38427** | [CLOSED]
[@opencode-agent[bot]](https://github.com/opencode-agent[bot]) corrected the interpretation of Bedrock Converse `inputTokens` as non

</details>