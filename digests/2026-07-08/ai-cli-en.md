# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 00:55 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

## Cross‑Tool Community Comparison — 2026‑07‑08

### 1. Daily Cross‑Tool Overview
Today saw a high volume of activity across the major AI CLI tools, with six of the seven tracked projects shipping at least one release. Issue and pull‑request counts were dominated by OpenAI Codex, OpenCode, and Qwen Code (each ≥33 issues, ≤50 PRs), while Copilot CLI had a busy issue tracker but no PRs. Shared themes included urgent work on agent/reliability, hooks/plugin surfaces, cost‑transparency tooling, and sandbox‑policy controls. Kimi Code remained nearly silent with only one stale issue.

### 2. Activity Comparison

| Tool               | Issues (updated/new)      | PRs (updated)       | Releases (last 24 h)                     |
|--------------------|---------------------------|---------------------|------------------------------------------|
| Claude Code        | N/A (10 hot issues)       | 3                   | v2.1.204, v2.1.203                       |
| OpenAI Codex       | 50                        | 50                  | rust‑v0.143.0‑alpha.39, .38              |
| Gemini CLI         | N/A (10 hot issues)       | N/A (10 key PRs)    | v0.51.0‑nightly.20260707.g15a9429b6     |
| GitHub Copilot CLI | 28                        | 0                   | v1.0.69, v1.0.69‑3                       |
| Kimi Code CLI      | 1                         | 0                   | None                                     |
| OpenCode           | 50                        | 50                  | v1.17.15                                 |
| Qwen Code          | 33                        | 50                  | v0.19.7, v0.19.7‑nightly, v0.19.6‑preview.0 |

*Where total issue/PR counts were not provided, the number of listed hot/key items is shown for context.*

### 3. Shared Feature Directions

- **Cost and usage visibility** – Requests for built‑in token/cost tracking appeared in Claude Code (`claude usage`), OpenCode (TUI token display #13003), and Qwen Code (token consumption of `/review` #6264). All three communities want real‑time consumption metrics directly in the CLI.
- **Hooks/plugin extensibility** – Claude Code already offers hooks; OpenAI Codex aims for “full Claude Code hook parity” (#21753); Copilot CLI struggles with `preToolUse` hook behavior (#2643, #4001); Qwen Code added `MessageDisplay` streaming hook (#6488) and is fixing `PreToolUse` permission handling; OpenCode introduced a `session.hook("request", …)` PR (#35794). Hooks are a primary integration surface across tools.
- **Agent and sub‑agent reliability** – Multiple tools reported agent hangs, false success reports, or resume failures: Claude Code (#75043 nested subagents), Gemini CLI (#21409 generalist agent hangs, #22323 subagent false success), Copilot CLI (agent reversion #4047), and Qwen Code (sub‑agent parallel limit #5176, `/rewind` after compress #6318).
- **Sandbox and policy controls** – Copilot CLI released bypass controls for file edits and `web_fetch`, and had issues on sandbox network behavior. Gemini CLI hardened macOS sandbox (`~/.gitconfig` read‑only) and proposed zero‑dependency OS sandboxing (#19873). Sandboxing as a user‑visible feature is advancing in both.
- **Semantic code understanding** – Gemini CLI (#22745) and OpenAI Codex (#31504) both requested AST‑aware or LSP‑based file analysis to improve agent accuracy.
- **Windows platform friction** – Broken copy‑paste (Claude Code #61021), hook execution (Copilot CLI #4001), shell tool failure (Qwen Code #6298), and binary corruption (OpenCode #27963) underline that Windows support remains brittle across the ecosystem.

### 4. Differentiation Analysis

- **Enterprise IM channel bots** – Qwen Code stands out with active development for WeCom, DingTalk, and QQ Bot integrations, targeting Chinese enterprise messaging.
- **Billing model and plan management** – Claude Code uniquely grapples with Max plan token spikes, silent allocation changes, and monthly cap enforcement; no other tool shows a comparable volume of billing‑related issues.
- **Desktop TUI vs. terminal CLI** – OpenCode focuses heavily on desktop‑app UX (model picker tooltips, tray minimization, voice input requests) and binary packaging, whereas most others are primarily terminal‑based.
- **Sandbox architecture** – Copilot CLI and Gemini CLI are the two tools explicitly exposing sandbox policies as a user‑configurable control surface (bypass approvals, OS‑level restrictions), while others do not surface sandbox controls to the same degree.
- **Hook‑surface parity** – OpenAI Codex explicitly frames its hook roadmap as catching up to Claude Code, while other tools implement hooks independently without referencing a competitor’s surface.
- **Evaluation infrastructure** – Gemini CLI is the only project today with visible investment in automated evaluation tooling (behavioural evals, coverage reports, Caretaker triage bot).

### 5. Community Activity Notes

- **Highest raw counts**: OpenAI Codex, OpenCode, and Qwen Code each updated 50 issues and 50 PRs (of which 50 each for Codex/OpenCode, 33/50 for Qwen), making them the most numerically active repositories today.
- **Release frequency**: Six of seven tools shipped releases, ranging from multiple patch releases (Claude Code, Copilot CLI) to broad stabilization (OpenCode, Qwen Code) and rapid alpha/nightly tags (Codex, Gemini CLI).
- **Maintainer responsiveness**: Qwen Code shows rapid issue closure (e.g., Windows shell tool fix, `tool_search` KV‑cache invalidation) and SDK expansion. Gemini CLI’s Caretaker triage automation indicates an investment in automated issue handling.
- **Lowest activity**: Kimi Code CLI had only a single issue update and no PRs or releases, reflecting a quiet day.

### 6. Evidence‑Backed Observations

1. **Agent reliability is a cross‑ecosystem fragility.** Four tools (Claude Code, Gemini CLI, Copilot CLI, Qwen Code) had active issues about subagent hangs, false completion notifications, or session‑resume breakage, pointing to a shared architectural challenge in stateful agent orchestration.
2. **Cost/usage transparency is a growing must‑have.** Three independent tools (Claude Code, OpenCode, Qwen Code) had highly‑voted requests for in‑tool token or cost displays, indicating that users now expect financial observability as a built‑in primitive.
3. **Windows is still a second‑class citizen.** Windows‑specific bugs—hook failures, binary corruption, shell incompatibility, copy‑paste breakage—appeared in four separate tools’ issue trackers, showing that cross‑platform quality lags behind Linux/macOS.
4. **Hook surfaces are becoming table stakes.** Every major CLI tool except

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-08

## Today’s Update Brief
Two patch releases landed in the last 24 hours, fixing a headless-hook streaming regression and adding login-expiry warnings. Meanwhile the issue tracker is heavily focused on abrupt token-usage increases on the Max plan and a collection of agent-orchestration, cost transparency, and terminal-UI bugs. Copy-paste breakage in the VS Code terminal is drawing renewed attention, and a just-reported nested-subagent bug shows that background task management still has sharp edges.

## Releases
- **v2.1.204**
  Fixed hook events not streaming during `SessionStart` hooks in headless sessions — a regression that could cause remote workers to be idle-reaped mid-hook.
- **v2.1.203**
  Added a warning when your login is about to expire (avoids interrupted background sessions); a grey ⏸ badge now appears in the footer during manual permission mode; and the session now displays additional working directories.

## Hot Issues
1. [#41506 – Max Plan Token Usage Increased ~3-5× Unilaterally](https://github.com/anthropics/claude-code/issues/41506)
   After March 28–29, users on the $100/month Max plan started seeing 3–5× higher token burn without config changes. 51 comments, 26 👍 — the most active cost thread.

2. [#38029 – Abnormal Usage on Session Resume](https://github.com/anthropics/claude-code/issues/38029)
   Resuming a session appears to trigger excessive token consumption (macOS). 23 comments, 33 👍 — users suspect a billing bug in resume logic.

3. [#33978 – Feature Request: Built-in `claude usage` Command](https://github.com/anthropics/claude-code/issues/33978)
   Consolidates over 10 open issues asking for a native usage-analytics CLI. 18 comments, 10 👍; the community wants real-time token tracking.

4. [#28927 – Silent Billing Change: 1M Context Moved to Extra-Usage Only](https://github.com/anthropics/claude-code/issues/28927)
   Since v2.1.51, 1M-context models consume Extra Usage instead of the Max plan allocation, with no changelog or in-app notice. 16 comments, 19 👍 — JSONL evidence supplied.

5. [#45810 – Marketplace Update Button Disabled When Outdated](https://github.com/anthropics/claude-code/issues/45810)
   The Update button in the plugin marketplace is greyed out even when a newer version exists, breaking the update flow. 13 comments, 5 👍.

6. [#61021 – Cannot Select Text to Copy/Paste in VS Code Terminal](https://github.com/anthropics/claude-code/issues/61021)
   A recent change broke left-click-and‑Ctrl+C text selection specifically while Claude Code is running inside the VS Code terminal (Windows). 9 comments, 7 👍 — a productivity blocker.

7. [#75043 – Nested Subagents: Children Are Always Async; Completion Notifications Lost on Resume](https://github.com/anthropics/claude-code/issues/75043)
   Subagents spawned by another subagent ignore `run_in_background` and never notify the parent. After resume, `TaskStop` fails with ownership errors. 7 comments, open yesterday.

8. [#66887 – Fable 5 Thinking Blocks Render as Empty Stubs in VS Code Extension](https://github.com/anthropics/claude-code/issues/66887)
   Thinking-block content is invisible and unclickable in the VS Code extension for v2.1.170+ on Windows. 4 comments, 1 👍.

9. [#23579 – Monthly Spend Limit Exceeded Despite $50 Cap](https://github.com/anthropics/claude-code/issues/23579)
   A user’s hard limit of $50 was ignored and extra charges accrued. 4 comments, 1 👍 — one of several “limits not enforced” reports.

10. [#75411 – Malformed Tool-Use Calls: Missing `antml:` Namespace Prefix](https://github.com/anthropics/claude-code/issues/75411)
   Opus 4.8 1M sometimes emits tool calls with a malformed opening tag, causing the harness to reject the tool and never run it. VS Code extension, 2 comments.

## Key PR Progress
- **[#73476](https://github.com/anthropics/claude-code/pull/73476) — docs: fix GitHub capitalization in README**
  Simple typo fix (“Github” → “GitHub”). Doc-only, no functional impact.
- **[#75252](https://github.com/anthropics/claude-code/pull/75252) — docs: clarify plugin MCP configuration scope**
  Clarifies that per-plugin `mcpServers` config is separate from user‑level allow/deny lists. Re‑opened after a prior fork deletion.
- **[#41453](https://github.com/anthropics/claude-code/pull/41453) — examples(hooks): safe Stop hook wrapper with PID lock and timeout**
  Adds a reference Python wrapper to run post‑session background tasks from a Stop hook without runaway processes, addressing #41393.

(Only 3 PRs were updated in the past 24 hours.)

## Feature Request Clusters
- **Usage Monitoring & Billing Controls**
  #33978 (`claude usage` command), #23579 (enforced limits), #28927 (silent billing changes) – developers want transparent, real-time cost visibility and reliable caps.
- **Agent Orchestration & Session Resume**
  #75043 (nested subagents async, lost notifications), #74529 (`/resume` fails with live background tasks) – better control over subagent hierarchy, background task lifecycles, and session re-attachment.
- **Terminal UI & VS Code Integration**
  #61021 (broken copy‑paste), #75484 (shell‑mode bang placement), #75482 (fullscreen leaks terminal escape codes) – a set of ergonomic regressions that hamper daily use.
- **Plugin & MCP Configuration UX**
  #45810 (disabled Update button), #75481 (Zapier MCP OAuth loop) – smoother update flows and less brittle OAuth setup for integrations.
- **Safety Filter False Positives**
  #75489 (blocked while examining own repo), #75488 (drone protocol analysis flagged), #75478 (web dev flagged) – repeated false‑positive cybersecurity blocks that halt legitimate work.

## Developer Pain Points
- **Cost unpredictability** is the dominant pain point with the highest engagement. Users report unexplained token spikes on the Max plan, billing changes that bypass monthly limits, and a general lack of in‑tool usage analytics.
- **Subagent chaining is fragile.** Nested agents behave asynchronously by default, fail to notify parents, and cannot be reliably `TaskStop`-ed after a session resume — making complex workflows unreliable.
- **Terminal and clipboard interaction is regressing.** Text selection/copy in VS Code’s terminal is broken for many Windows users, and `fullscreen` mode leaks raw escape codes into piped output.
- **Safety filters occasionally block legitimate code‑audit and web‑dev tasks**, forcing developers to work around the tool.
- **Missing or delayed UI feedback** (login expiry warnings, manual-mode indicator, marketplace Update button) leaves users unaware of state changes until something fails.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026-07-08**

---

### 1. Today’s Update Brief
The repository saw 50 issues updated and 50 pull requests modified in the past 24 hours. Two new alpha releases were published (`rust-v0.143.0-alpha.39` and `0.143.0-alpha.38`), both lacking detailed release notes. A high-engagement model-behavior issue (#30364) continues to dominate discussion with 154 comments, while a stream of PRs target MCP connector stability, approval routing, and installation detection.

---

### 2. Releases
- **`rust-v0.143.0-alpha.39`** – tagged with no additional description.
- **`rust-v0.143.0-alpha.38`** – tagged with no additional description.

No changelog or functional summary was provided for either release.

---

### 3. Hot Issues (top 10 by impact and activity)

1. **[#30364](https://github.com/openai/codex/issues/30364)** – *GPT-5.5 reasoning-token clustering at 516/1034/1552 may degrade complex task performance*
   **Impact:** Model responses frequently hit exact token counts, correlating with lower reasoning quality. Highly voted (👍251) and discussed. **Community reaction:** Users demand investigation into rate-limit or architecture side effects.

2. **[#21753](https://github.com/openai/codex/issues/21753)** – *Full Claude Code Hook Parity (29+)*
   **Impact:** Umbrella request to expand Codex hooks to cover every major lifecycle event for automation. 26 comments, 19 👍. **Community reaction:** Developers want a complete automation surface; discussion focuses on event naming and payload design.

3. **[#12115](https://github.com/openai/codex/issues/12115)** – *Dynamically loading nested AGENTS.md*
   **Impact:** Users want Codex to load project instructions from child directories on demand, similar to Claude Code. 23 comments, 83 👍. **Community reaction:** Strong demand for improved project-file hierarchy awareness.

4. **[#25792](https://github.com/openai/codex/issues/25792)** – *Context compaction forgets AGENTS rules: task progress jumps from 97% back to 42%*
   **Impact:** Long-running tasks lose context after automatic compaction, resetting progress and ignoring critical instructions. 13 comments. **Community reaction:** Frustration from users who rely on extended agent sessions; seen as a severe reliability issue.

5. **[#28969](https://github.com/openai/codex/issues/28969)** – *Add setting to disable the auto-resolve in 60 seconds for questions*
   **Impact:** CLI users cannot opt out of the 60-second auto-answer, causing unwanted actions. 12 comments, 88 👍. **Community reaction:** Widespread agreement that a configuration toggle is needed.

6. **[#23574](https://github.com/openai/codex/issues/23574)** – *VS Code extension allocates ~1M inotify watches on large Linux workspaces*
   **Impact:** Massive file-watcher overhead degrades IDE performance and may hit system limits. 9 comments, 9 👍. **Community reaction:** Developers with large monorepos consider this a blocker.

7. **[#24086](https://github.com/openai/codex/issues/24086)** – *Locked Computer Use fails with cgWindowNotFound on Mac mini M4 + Studio Display*
   **Impact:** The locked-computer-use feature is broken on specific Apple Silicon hardware, returning window errors only when locked. 10 comments, 9 👍. **Community reaction:** Users seek quick resolution to restore remote-control capability.

8. **[#31499](https://github.com/openai/codex/issues/31499)** – *Windows Desktop app-server spawns duplicate MCP stdio process pools (183 node.exe / 13 GB memory)*
   **Impact:** Repeated process leaks cause severe memory growth on Windows. 3 comments. **Community reaction:** Alarmed by system resource consumption; eager for a fix given prior related issues.

9. **[#31504](https://github.com/openai/codex/issues/31504)** – *LSP support would improve cross-file project understanding*
   **Impact:** Request to integrate Language Server Protocol for richer semantic awareness across files. 2 comments. **Community reaction:** Seen as a natural next step for agent accuracy in larger codebases.

10. **[#30360](https://github.com/openai/codex/issues/30360)** – *VS Code extension crashes on startup: “maximum of 3 prompts is supported”*
    **Impact:** Extension fails immediately after installation, blocking usage. 4 comments, 1 👍. **Community reaction:** Affected users pinpoint a validation limit that may conflict with custom skill prompts.

---

### 4. Key PR Progress (notable changes from the past 24 hours)

1. **[#31509](https://github.com/openai/codex/pull/31509)** – *Support SQLite-disabled degraded mode*
   Restores a feature flag to disable SQLite for environments like NFS homes, skipping state-database init and checks.

2. **[#30887](https://github.com/openai/codex/pull/30887)** – *Speed up reverse history search*
   Replaces one-entry-at-a-time history fetches with a batched approach, dramatically improving search responsiveness.

3. **[#30463](https://github.com/openai/codex/pull/30463)** – *Fix autocomplete targeting between mentions*
   Corrects cursor-position logic so that `$unbound-skill` is targeted instead of the token to its right when between mentions.

4. **[#31507](https://github.com/openai/codex/pull/31507)** – *Batch remote skill discovery reads*
   Introduces a generic batched file-read primitive to reduce per-skill RPCs during remote thread startup.

5. **[#31500](https://github.com/openai/codex/pull/31500)** – *Move code-mode to hosted mode by default*
   Promotes the hosted code-mode runtime to stable, with an opt-out flag retained for in‑process execution.

6. **[#31460](https://github.com/openai/codex/pull/31460)** – *Centralize tool review routing*
   Consolidates approval resolution across PermissionRequest hooks, Guardian, and user review paths for clearer routing.

7. **[#31472](https://github.com/openai/codex/pull/31472)** – *Serialize connector runtime refreshes*
   Adds a per‑connector lock to prevent concurrent MCP tool-list refreshes, returning a committed snapshot.

8. **[#31476](https://github.com/openai/codex/pull/31476)** – *Capture request-stable connector runtime tools*
   Introduces a feature-gated snapshot mechanism so that connector tool lists remain stable for the duration of a model sampling step.

9. **[#31487](https://github.com/openai/codex/pull/31487)** – *Add app/installed runtime snapshot API*
   Exposes a v2 API that reads the connector runtime snapshot, applying global, workspace, local, and MCP‑tool policies.

10. **[#31503](https://github.com/openai/codex/pull/31503)** – *Detect Codex installs managed by pnpm*
    Ensures the CLI recognizes pnpm‑managed global installs, so that `doctor` and update flows use the correct package manager instead of falling back to npm.

---

### 5. Feature Request Clusters
- **Context & memory improvements:** Nested AGENTS.md loading (#12115), explicit memory writability (#19195), context compaction fidelity (#25792).
- **Hooks & automation surface:** Full Claude Code hook parity (#21753), disable auto-resolve (#28969).
- **Remote & SSH authentication:** Better key auth for remote connections (#22857), Android-to‑Desktop connectivity (#25595).
- **Cross‑file intelligence:** LSP integration (#31504) to improve project-level understanding.
- **Windows stability:** Repeated calls for fixes of process leaks (#31499, #16786) and desktop app restarts (#29787).

---

### 6. Developer Pain Points
- **Model behavior degradation:** GPT‑5.5 token‑clustering bug (#30364) and context compaction that discards rules (#25792) are eroding trust in long‑running agent tasks.
- **Windows desktop reliability:** Memory leaks from duplicate MCP processes (#31499), taskbar freezes (#31236), and failure to restart after updates (#29787) make the Windows app hard to use for daily work.
- **IDE extension performance:** Excessive inotify watches (#23574) and startup crashes (#30360) disrupt VS Code workflows on Linux.
- **Connectivity & session loss:** Unsendable messages (#25127, #29632) and vanished conversations (#25397, #29868) repeatedly block basic app usage.
- **Remote & locked‑computer use bugs:** Locked Computer Use fails on specific Mac hardware (#24086), and trusted access status remains unclear (#31505).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-08

## 1. Today’s Update Brief
Today’s activity is concentrated on a single nightly release with two targeted fixes, while the issue tracker and pull requests show sustained work on agent reliability, sandboxing, evaluation tooling, and the new Caretaker Triage automation. Community feedback highlights recurring pain with subagent interruptions, agent hangs, and model escape‑sequence handling.

## 2. Releases
**v0.51.0-nightly.20260707.g15a9429b6**
- **Sandbox hardening:** `~/.gitconfig` is now read‑only inside the macOS sandbox to prevent accidental writes ([#28221](https://github.com/google-gemini/gemini-cli/pull/28221)).
- **Core string handling:** Escape sequences in string literals are preserved for modern models, fixing a long‑standing rendering class of bugs ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)).

## 3. Hot Issues
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery reports GOAL success despite hitting MAX_TURNS**
   The `codebase_investigator` subagent falsely claims success when it reaches the turn limit without performing analysis. This masks failures during long‑running investigations and has drawn 10 comments and 2 👍 from maintainers.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via zero-dependency OS sandboxing**
   A design proposal (8 comments) to let Gemini 3 models use native POSIX tools inside a secure sandbox, avoiding extra tool abstractions. The idea aims to unlock the models’ native chaining abilities while preserving user safety.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component‑level evaluations**
   P1 epic (7 comments) tracking expansion of behavioral evals from 76 tests to cover more components. Maintainers are working on CI‑integrated, model‑specific regression detection to catch regressions earlier.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess AST‑aware file reads, search, and mapping**
   Investigation (7 comments, 1 👍) into whether AST‑aware tools can reduce token noise and misaligned reads. This ties directly to the `codebase_investigator` improvements and overall accuracy of code exploration.

5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs**
   A high‑signal bug (7 comments, 8 👍) where delegating to the generalist agent freezes forever, even for simple tasks like folder creation. Users report that instructing the model *not* to use subagents works around the issue, pointing to a subagent dispatch deadlock.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Model does not use skills and sub‑agents enough**
   Six comments highlight that Gemini rarely invokes custom skills or sub‑agents unless explicitly instructed, lowering the perceived value of the extensibility system. The issue suggests the routing prompt needs tuning.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Auto Memory retries low‑signal sessions indefinitely**
   The background extraction agent keeps re‑processing sessions that it decides are low‑signal, causing infinite retries. Five comments from the Auto Memory team indicate a need for a “deduplication/ignore” mechanism.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution stuck with “Waiting input” after command completes**
   Four comments, 3 👍. Simple CLI commands (e.g., `ls`) appear to hang with the prompt “Awaiting user input” even though the process has exited. This repeatedly blocks interactive workflows.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails on Wayland**
   Four comments, 1 👍. The browser subagent terminates with GOAL but produces no useful output on Wayland‑based Linux desktops, limiting the feature for a significant user segment.

10. **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) – Experiment with native file tools for task tracking**
    An enhancement request (4 comments) to replace the current structured task tracker with native file‑based tooling, potentially simplifying state management and making task workflows more transparent.

## 4. Key PR Progress
1. **[#28307](https://github.com/google-gemini/gemini-cli/pull/28307) – feat(caretaker‑triage): LLM triage orchestrator, GCS debug logger, and container build**
   Closed. Implements the LLM orchestration core for the Caretaker Triage Worker, including a structured debug logger writing to GCS and the Docker build definition.

2. **[#28306](https://github.com/google-gemini/gemini-cli/pull/28306) – feat(caretaker‑triage): main worker execution loop and egress action publisher**
   Open. Introduces the Cloud Run Job entry point (`main.py`) and the Pub/Sub egress publisher, completing the triage worker’s run loop. The LLM orchestrator is stubbed for a follow‑up.

3. **[#28303](https://github.com/google-gemini/gemini-cli/pull/28303) – feat(caretaker‑egress): octokit GitHub action handler for egress service**
   Open. Part 2 of the Caretaker Egress Service, adding Octokit‑based GitHub App authentication so the agent can post comments and assign labels automatically.

4. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) – feat(evals): add tool call formatter and integrate failure summaries**
   Open. When an eval fails, the runner now prints a numbered timeline of tool calls with arguments and error details directly in the failure output, dramatically speeding up debugging.

5. **[#28169](https://github.com/google-gemini/gemini-cli/pull/28169) – feat(evals): add eval coverage report command**
   Open. New `npm run eval:coverage` command cross‑references eval inventory tool references against the tool registry, revealing which built‑in tools lack behavioural test coverage.

6. **[#28304](https://github.com/google-gemini/gemini-cli/pull/28304) – fix(privacy): show a clear message when the account has no Code Assist tier**
   Open. Replaces a raw backend error message with a user‑friendly explanation for Workspace/Enterprise accounts that don’t have a consumer Code Assist tier, improving the `/privacy` dialogue.

7. **[#27200](https://github.com/google-gemini/gemini-cli/pull/27200) – fix(extensions): retry transient directory cleanup failures**
   Open. Adds retry logic for extension update cleanup on Windows, where file‑lock timing can cause spurious failures. Fixes issue [#18884](https://github.com/google-gemini/gemini-cli/issues/18884).

8. **[#28089](https://github.com/google-gemini/gemini-cli/pull/28089) – feat(core): implement MCP elicitation (form + url) capability**
   Closed. Ads MCP‑spec elicitation (both form and URL modes) to the core MCP client, enabling interactive prompts from MCP servers (addresses [#28074](https://github.com/google-gemini/gemini-cli/issues/28074)).

9. **[#28094](https://github.com/google-gemini/gemini-cli/pull/28094) – fix(a2a‑server): deep‑merge user and workspace settings**
   Closed. Switches `loadSettings()` from a shallow spread to a deep merge, fixing cases where a workspace setting would silently drop an entire nested section like `tools` or `fileFiltering`.

10. **[#28096](https://github.com/google-gemini/gemini-cli/pull/28096) – fix(core): drop late tool calls after SIGINT cancellation**
    Closed. Prevents a race condition where a tool‑call chunk arriving after a user SIGINT still executes a side effect. The fix discards those late calls, closing [#28091](https://github.com/google-gemini/gemini-cli/issues/28091).

## 5. Feature Request Clusters
- **Subagent observability & debugging**
  Requests to expose subagent trajectories in `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), include subagent context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and fix the browser agent’s settings‑override bug ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)). Users want insight into what subagents are doing and why they fail.

- **AST‑aware tooling for code exploration**
  Two linked issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) propose AST‑based file reads, search, and codebase mapping to reduce token waste and improve precision. The community sees this as a path to more reliable codebase investigation.

- **Agent self‑awareness & accuracy**
  Several requests aim to make the agent understand its own capabilities: accurate CLI flags, hotkeys, and sandbox descriptions ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), and better recognition of available skills/sub‑agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)). This cluster reflects a desire for models that can self‑troubleshoot and guide users correctly.

- **Sandbox & security hardening**
  Proposals for zero‑dependency OS sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) and deterministic redaction for Auto Memory ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) indicate a clear community priority on strengthening the security surface without sacrificing model performance.

- **Robust evaluation infrastructure**
  The EPIC for component‑level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) and companion ideas like using native file tools for task tracking ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) show a strong internal and community push for systematic regression testing.

## 6. Developer Pain Points
- **Agent hangs & stuck shell prompts**
  Multiple reports of the generalist agent hanging indefinitely ([#21409](https://

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-08

## 1. Today’s Update Brief
The day after the v1.0.69 release, a quick follow-up patch v1.0.69-3 landed with improved sandbox bypass controls for file edits and `web_fetch`. The issue tracker saw 28 new or updated items, dominated by reports around plugin reliability, sandbox networking, Windows behavior, and TUI hangs on network filesystems — signaling a busy pre‑release stabilisation phase.

## 2. Releases
**v1.0.69** (2026-07-07)
- Built‑in file edits now show a *(sandbox policy)* badge (instead of “sandboxed”) to reflect the best‑effort policy rather than a strict OS‑level sandbox.
- Plugin extensions can be reloaded without restarting the session.
- A new `/plugins` dashboard is available for managing installed plugins.

**v1.0.69-3** (2026-07-07)
- Built‑in file edits can bypass the sandbox when explicitly approved.
- `web_fetch` respects the active sandbox network policy (blocking disallowed outbound/local targets) and, when the host opts in via `sandbox.allowBypass`, lets you approve a one‑time bypass from the fetch prompt.

## 3. Hot Issues
1. **Bring back the old GitHub Copilot in the CLI commands** [#53](https://github.com/github/copilot-cli/issues/53)
   *75 👍, 37 comments* — The most‑reacted issue; users want the legacy Copilot CLI commands restored to avoid breaking workflows. Community has started building alternatives (e.g., `shell-ai`).

2. **preToolUse: confirmation dialog appears even with `permissionDecision: allow`** [#2643](https://github.com/github/copilot-cli/issues/2643)
   *2 👍, 12 comments* — When a `preToolUse` hook rewrites a command with `permissionDecision: allow`, Copilot still shows an interactive confirmation on every rewrite. Blocks silent hook‑based command modification.

3. **/research can’t write its research report** [#3123](https://github.com/github/copilot-cli/issues/3123)
   *5 👍, 5 comments* — The `/research` agent fails to save the Markdown report, complaining that the “create” tool is not available. Directly breaks the research agent’s primary output step.

4. **Windows: `.claude/settings.json` hooks fail due to execution via PowerShell and missing `$CLAUDE_PROJECT_DIR`** [#4001](https://github.com/github/copilot-cli/issues/4001)
   *0 👍, 3 comments* — Hooks that work with Claude Code’s contract fail‑closed on Windows, breaking every hook‑based automation for Windows users.

5. **TUI hangs at ‘Loading: N skills’ on NFS/GPFS due to SIGCHLD race** [#4053](https://github.com/github/copilot-cli/issues/4053)
   *1 comment, opened today* — When the home directory is on a network filesystem, spawning `which gh` from a Tokio worker under heavy concurrency triggers a SIGCHLD race, freezing the UI. Affects shared‑filesystem environments like HPC clusters.

6. **Free Copilot becoming unstable, inconsistent and dangerous** [#4055](https://github.com/github/copilot-cli/issues/4055)
   *1 comment, opened today* — User reports a severe degradation of the free tier: stubborn, ignoring prompts and memory, erratic behaviour, making it untrustworthy for real work.

7. **/resume broken for all non‑git sessions** [#4054](https://github.com/github/copilot-cli/issues/4054)
   *1 comment, opened today* — Sessions started outside a git repository store `repository = '/'`; the resume picker’s git gate then prevents selecting them, making `/resume` useless for those sessions.

8. **`explore` tool hardcodes `gpt-5.4-mini`, ignoring custom/DeepSeek API configuration** [#3954](https://github.com/github/copilot-cli/issues/3954)
   *1 👍, 1 comment* — The `explore` tool bypasses the user’s configured model (e.g., DeepSeek endpoint) and always sends `gpt-5.4-mini`, causing failures when the API key only covers custom models.

9. **Non‑interactive mode: late‑connecting MCP server injects empty user message** [#4038](https://github.com/github/copilot-cli/issues/4038)
   *1 comment, opened today* — With an MCP server that provides ≥7 tools, `copilot -p "..."` appends an empty user turn, causing the model to answer the empty prompt (often echoing tool lists). Breaks scripted non‑interactive use.

10. **Docker stdio MCP servers duplicated on /new and /resume** [#4049](https://github.com/github/copilot-cli/issues/4049)
    *0 👍, opened today* — Running `/new` or `/resume` spawns a new set of Docker‑based stdio MCP clients without tearing down the previous ones, causing accumulation within the same CLI process lifetime.

## 4. Key PR Progress
No pull requests were opened or updated in the last 24 hours.

## 5. Feature Request Clusters
- **Sandbox policy & bypass controls** — Multiple issues ask for finer‑grained sandbox bypass approvals, especially for `web_fetch` and file edits. The v1.0.69‑3 patch directly addresses this, but user requests persist for clearer policy indication and per‑tool bypass persistence.
- **Plugin lifecycle & integration** — Requests for interactive input variables (`${input:...}`) in plugin manifests [#4042](https://github.com/github/copilot-cli/issues/4042), reliable enterprise plugin sync [#4039](https://github.com/github/copilot-cli/issues/4039), and skills automatically becoming slash commands [#4048](https://github.com/github/copilot-cli/issues/4048). The new `/plugins` dashboard (v1.0.69) shows progress in this area.
- **Agent behaviour & persistence** — Custom agent selection reverting mid‑session [#4047](https://github.com/github/copilot-cli/issues/4047), the `/delegate` command ignoring branch parameters [#2729](https://github.com/github/copilot-cli/issues/2729), and the earlier multi‑agent workflow request [#1389](https://github.com/github/copilot-cli/issues/1389) (closed) highlight demand for more reliable agent orchestration.
- **MCP server management** — Recurring patterns around stdio server process leaks [#3440](https://github.com/github/copilot-cli/issues/3440), duplication [#4049](https://github.com/github/copilot-cli/issues/4049), and late‑connection side‑effects [#4038](https://github.com/github/copilot-cli/issues/4038) point to the need for robust MCP lifecycle handling.
- **Cross‑platform reliability** — Windows‑specific problems (hooks [#4001](https://github.com/github/copilot-cli/issues/4001), sandbox requirements [#4046](https://github.com/github/copilot-cli/issues/4046)), NFS‑related hangs [#4053](https://github.com/github/copilot-cli/issues/4053), and file‑encoding changes [#3604](https://github.com/github/copilot-cli/issues/3604) suggest growing demand for first‑class Windows and network‑filesystem support.
- **UX polish** — `ask_user` tool should support an external editor (Ctrl‑G) for long answers [#4050](https://github.com/github/copilot-cli/issues/4050), model picker UI obscuration [#4043](https://github.com/github/copilot-cli/issues/4043), and rendering glitches like random text in the input field [#4051](https://github.com/github/copilot-cli/issues/4051).

## 6. Developer Pain Points
- **Sandbox friction** is the top operational annoyance. Users must approve bypasses for file edits and `web_fetch` individually, and the policy can block legitimate workflows in restricted environments (e.g., IPv4‑only sandboxes cause `web_fetch` to fail [#4041](https://github.com/github/copilot-cli/issues/4041)). The recent bypass improvements are welcome but don’t eliminate the confirmation burden for repeated tasks.
- **Plugin installation and discovery remain brittle** — enterprise‑managed plugins may be marked enabled but never synced to disk [#4039](https://github.com/github/copilot-cli/issues/4039), and skills from repo‑level plugins do not appear as slash commands [#4048](https://github.com/github/copilot-cli/issues/4048).
- **MCP process management is leaky**: leftover child processes after disconnect [#3440](https://github.com/github/copilot-cli/issues/3440) and duplication on resume [#4049](https://github.com/github/copilot-cli/issues/4049) consume resources and can lead to subtle state errors in long‑running CLI sessions.
- **Non‑interactive mode reliability** suffers from edge cases like empty message injection [#4038](https://github.com/github/copilot-cli/issues/4038) and the lack of a reliable way to resume non‑git sessions [#4054](https://github.com/github/copilot-cli/issues/4054), impeding CI/scripted usage.
- **Windows users face a second‑class experience** — hooks are broken, sandbox documentation is unclear, and even the voice installer fails due to a private NuGet feed dependency [#4035](https://github.com/github/copilot-cli/issues/4035).
- **Model configuration bypasses** (hardcoded `gpt-5.4-mini` in `explore`) [#3954](https://github.com/github/copilot-cli/issues/3954) undermine trust when users have set up custom providers, and the desire for BYOK in ACP server mode [#4037](https://github.com/github/copilot-cli/issues/4037) shows that enterprise users need consistent model routing.
- **Long‑standing regret** over the removal of the original simple `gh copilot` commands [#53](https://github.com/github/copilot-cli/issues/53) persists, with 75 upvotes and a homegrown replacement already built by the community.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-08

## Today’s Update Brief
A very quiet day in the kimi-cli repository, with only one existing issue receiving an update. No new releases or pull requests were merged or submitted in the last 24 hours. The sole activity is a low‑velocity feature request around Figma MCP integration.

## Hot Issues
Only one issue was updated in the reporting window, but it reflects a specific developer ask.

- **#1604 [enhancement] Figma MCP Support**
  *Opened by @maoxian-1 on 2026-03-27, updated 2026-07-07, 1 comment, 2 👍*
  The user requests first‑class support for Figma’s MCP (Model Context Protocol) catalog directly within kimi-cli. Currently, using Figma MCP requires manual pre‑registration on the Figma side, and the user would like kimi-cli to handle that registration or offer a built‑in integration, eliminating the extra configuration step. The discussion has minimal engagement so far.
  🔗 [Issue #1604](https://github.com/MoonshotAI/kimi-cli/issues/1604)

## Key PR Progress
No pull requests were updated or opened in the last 24 hours.

## Feature Request Clusters
Based on the limited data, one feature request area can be identified:

- **External MCP server integration** – The solitary request targets deeper, turnkey support for popular third‑party MCP servers (Figma) so that users do not need to manually pre‑register and wire up these services. This indicates an appetite for out‑of‑the‑box MCP endpoint configurations.

## Developer Pain Points
The core friction highlighted today is the **manual pre‑registration overhead** when connecting kimi-cli to an MCP‑compatible external service like Figma. Users familiar with the MCP ecosystem expect the CLI to streamline or automate the handshake, rather than requiring a separate, service‑specific setup step. While only one voice raised this, the underlying desire for reduced integration friction is clear.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Today’s Update Brief
The repository recorded **50 issues** and **50 pull requests** updated in the last 24 hours, alongside the release of **v1.17.15**. Activity leans heavily on V2 core fixes—especially around session recovery, tool rendering, and provider metadata—while the issue tracker reflects a persistent cluster of macOS Terminal contrast bugs and fresh reports of desktop crashes and migration pain.

### Releases
- **v1.17.15** ([release notes](https://github.com/anomalyco/opencode/releases/tag/v1.17.15))
  - *Core bugfixes*: Better classification of Z.ai context-window overflow errors so oversized requests surface the correct failure mode; more graceful handling of unavailable config directories.
  - *Desktop improvement*: Model details tooltips are restored in the model picker.

### Hot Issues
*Issues with high comment counts, community engagement, or direct impact on usability.*

1. **[#6823](https://github.com/anomalyco/opencode/issues/6823) – CLI colors have low contrast on macOS Terminal (black / Pro theme)** (closed, 16 comments, 17 👍)
   macOS built-in Terminal with the Pro (black) theme renders CLI text nearly unreadable. This long-standing accessibility gap drew sustained attention and was finally resolved.

2. **[#27963](https://github.com/anomalyco/opencode/issues/27963) – v1.15.3 corrupted executable on Windows** (open, 10 comments, 5 👍)
   Windows 10/11 users receive an “invalid application” error when launching the shipped binary. The report spans multiple versions, indicating a recurring packaging or signing issue.

3. **[#35009](https://github.com/anomalyco/opencode/issues/35009) – High resource usage after updating from 1.17.11 to 1.17.13** (open, 9 comments, 2 👍)
   A single conversation session can consume ~1 GB RSS and 75 GB virtual memory, with CPU spiking to 22%. Users perceive a regression in resource efficiency post-update.

4. **[#13003](https://github.com/anomalyco/opencode/issues/13003) – [FEATURE] Display token usage information in the TUI** (open, 8 comments, 42 👍)
   A highly upvoted request to surface token counts (input, output, remaining budget) directly in the TUI, reducing the need for external monitoring.

5. **[#34743](https://github.com/anomalyco/opencode/issues/34743) – opencode ACP from Xcode 27 beta 2 ignores model config** (open, 8 comments)
   The custom ACP agent always uses the default model (`big-pickle`) despite `opencode.json` or TUI selection, breaking workflows that rely on local models via LMStudio or Ollama.

6. **[#28590](https://github.com/anomalyco/opencode/issues/28590) – writeOsc52 broken under GNU screen** (open, 8 comments, 2 👍)
   Clipboard copying treats GNU screen as tmux, sending the wrong DCS sequence and omitting chunking. A fix was previously proposed but closed prematurely.

7. **[#35556](https://github.com/anomalyco/opencode/issues/35556) – V2: first Location can expose an empty plugin generation** (open, 7 comments)
   A race condition in `PluginSupervisor` can leave initial Location-scoped requests with no plugin tools, causing fallback to `shell`. This tracks the transient startup race.

8. **[#35772](https://github.com/anomalyco/opencode/issues/35772) – Desktop v1.17.14 Provider.list() TypeError crash** (open, 3 comments)
   On every startup, the desktop app throws `TypeError: Cannot read properties of undefined (reading 'provider')`, resulting in a blank model/provider list.

9. **[#35750](https://github.com/anomalyco/opencode/issues/35750) – Upgrade to 1.17.x hides pre-existing sessions** (open, 2 comments)
   Migrating from 1.14.x hides older sessions because a new `path` column is not back-filled, effectively losing access to work history.

10. **[#35779](https://github.com/anomalyco/opencode/issues/35779) – Thread renaming behavior is not user friendly** (closed, 4 comments)
    Renaming threads in the desktop app is confusing; the old behavior (and the new layout) makes it easy to accidentally overwrite thread names or lose context.

### Key PR Progress
*Notable pull requests opened or updated in the last 24 hours, focusing on core and desktop changes.*

1. **[#35820](https://github.com/anomalyco/opencode/pull/35820) – fix(core): resume sessions after restart**
   Introduces durable recording of session execution outcomes and auto‑resumes interrupted sessions on server restart, using `EffectFlock` for cross‑process coordination.

2. **[#35755](https://github.com/anomalyco/opencode/pull/35755) – test(core): reproduce explorer tool leak**
   Adds failing regression tests for the #35556 race condition that causes `explore` to leak `shell` when plugin activation is delayed.

3. **[#35793](https://github.com/anomalyco/opencode/pull/35793) – refactor(schema): apply session review decisions**
   Normalizes V2 session, message, agent, and skill contracts; updates runtime behaviour for flat shell messages, streaming tool state, and status‑discriminated compaction.

4. **[#35815](https://github.com/anomalyco/opencode/pull/35815) – fix(desktop): apply stale remote session fallback on all platforms**
   Extends a previously Darwin‑only stale‑URL guard to all platforms, preventing desktop crashes when a persisted remote session URL no longer exists.

5. **[#35819](https://github.com/anomalyco/opencode/pull/35819) – fix(core): steer manual compaction**
   Allows manual compaction to interrupt an active session, drain pending work, and immediately run compaction, with deduplication of duplicate requests.

6. **[#35818](https://github.com/anomalyco/opencode/pull/35818) – fix(core): skip non-vcs location watcher**
   Prevents the `LocationWatcher` from starting when no VCS metadata exists, replacing a failing non‑Git watcher expectation with a regression test.

7. **[#35817](https://github.com/anomalyco/opencode/pull/35817) – fix(core): preserve provider metadata namespaces**
   Preserves complete, namespaced provider metadata (e.g., reasoning) instead of indexing it by provider ID, maintaining compatibility across AI SDK and native routes.

8. **[#35812](https://github.com/anomalyco/opencode/pull/35812) – fix(core): preserve AI SDK provider metadata**
   Ensures provider‑specific continuation data (thought signatures, tool‑call IDs) is retained when lowering canonical LLM messages into AI SDK prompts.

9. **[#35794](https://github.com/anomalyco/opencode/pull/35794) – feat(plugin): add session request hook**
   Introduces `session.hook("request", ...)` allowing plugins to mutate system messages, messages, and tools before each provider request; also skips failed plugins during activation.

10. **[#34794](https://github.com/anomalyco/opencode/pull/34794) – feat(provider): add --model free to pick a random zero-cost model**
    Adds support for `--model free` in CLI and TUI, randomly selecting one of the OpenCode Zen zero‑cost models per run.

### Feature Request Clusters
*Recurring enhancement themes visible in today’s issue tracker, without predicting roadmap.*

- **Desktop quality‑of‑life features**
  Issues demand **tray minimization** ([#35775](https://github.com/anomalyco/opencode/issues/35775)), **voice/speech input** ([#33300](https://github.com/anomalyco/opencode/issues/33300)), **suspend/resume** for agent runs ([#27511](https://github.com/anomalyco/opencode/issues/27511)), and **token usage display** in the TUI ([#13003](https://github.com/anomalyco/opencode/issues/13003)). All point to a desire for more ergonomic, persistent, and information‑rich desktop UX.

- **Plugin lifecycle and extendability**
  A request for **session‑lifecycle context hooks** ([#28695](https://github.com/anomalyco/opencode/issues/28695)) aims to let plugins maintain state across session start/stop. The newly opened PR [#35794](https://github.com/anomalyco/opencode/pull/35794) already adds a `session.hook("request", ...)`, partially addressing this demand.

- **Command/skill discoverability**
  [#35756](https://github.com/anomalyco/opencode/issues/35756) suggests using `$<skill-name>` syntax (like Codex) to trigger skills, with a pop‑up picker, improving discovery compared to the current `/skill` approach.

### Developer Pain Points
*Friction areas with multiple reports or notable frustration in the last 24 hours.*

- **macOS Terminal readability**
  A long‑running wave of reports ([#6823](https://github.com/anomalyco/opencode/issues/6823), [#4461](https://github.com/anomalyco/opencode/issues/4461), [#20584](https://github.com/anomalyco/opencode/issues/20584), [#4721](https://github.com/anomalyco/opencode/issues/4721), [#6923](https://github.com/anomalyco/opencode/issues/6923), [#10054](https://github.com/anomalyco/opencode/issues/10054)) shows that macOS built‑in Terminal with the Pro (black) theme renders text white‑on‑white or black‑on‑black, making the TUI unusable. While some are closed, the recurrence suggests theme handling still needs hardening.

- **Windows binary corruption**
  [#27963](https://github.com/anomalyco/opencode/issues/27963) remains open, with users across multiple Windows versions unable to launch the shipped executable. This points to a CI/packaging deficiency.

- **Post‑update resource bloat**
  [#35009](https://github.com/anomalyco/opencode/issues/35009) reflects a clear regression: after moving from 1.17.11 to 1.17.13, memory and CPU usage become excessive, hampering normal use.

- **Session migration failures**
  [#35750](

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-08

## 1. Today's Update Brief
The community saw a burst of activity with 33 issues and 50 pull requests updated in the past 24 hours. Three releases were published—v0.19.7 (stable), v0.19.7-nightly, and v0.19.6-preview.0—all carrying the WeCom channel documentation update. Key discussions centered on daemon multi‑workspace support, token consumption of the `/review` skill, and a wave of SDK enhancements that expose transport options and control APIs.

## 2. Releases

**v0.19.7** – Stabilized release incorporating earlier nightly changes. Notable changes visible from the truncated notes:
- `fix(triage): strengthen PR gate with batch detection, problem existence check, and red flag patterns` ([#5723](https://github.com/QwenLM/qwen-code/pull/5723))
- `feat(review): rou…` (feature improvement for code review; details truncated)
- `docs(channels): add WeCom to channels overview` ([#6490](https://github.com/QwenLM/qwen-code/pull/6490))

**v0.19.7-nightly.20260708** – Nightly build with the same WeCom docs update.

**v0.19.6-preview.0** – Preview release also containing the WeCom documentation addition.

All three releases confirm that the Enterprise WeChat (WeCom) intelligent robot channel is now officially documented in the channels overview.

## 3. Hot Issues

1. **[#6378 – RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**
   *19 comments* | Author: @doudouOUC
   A detailed RFC proposing a shift from the current `1 daemon = 1 workspace` model to a multi‑workspace daemon while preserving backwards compatibility. High engagement with discussion around environment isolation and per‑workspace configuration. This is a core architectural change that would affect all daemon‑based workflows (ACP, web shell, etc.).

2. **[#6264 – /review skill consume large amount of tokens](https://github.com/QwenLM/qwen-code/issues/6264)**
   *8 comments* | Author: @pumano
   Users report the `/review` skill consumes excessive tokens, sometimes spiking into hundreds of thousands per invocation. The issue has attracted attention from performance‑conscious developers using local LLMs, with suggestions for caching and limiting context windows.

3. **[#6312 – Reduce per-session overhead on the daemon session-creation path](https://github.com/QwenLM/qwen-code/issues/6312)**
   *5 comments* | Author: @doudouOUC
   A tracking issue for performance improvements in `qwen serve`. Each new session/load/re‑resume re‑runs the same synchronous I/O and object construction, causing noticeable latency. This is a key pain point for headless daemon deployments.

4. **[#6298 – Shell tool fails on Windows when command produces stdout output](https://github.com/QwenLM/qwen-code/issues/6298)**
   *5 comments* | Closed | Author: @haomin1996
   The `run_shell_command` tool broke on Windows because it pipes output through `cat`, which doesn’t exist in `cmd.exe`. Fixed after triage; impacts all Windows users of the shell tool.

5. **[#6265 – `tool_search` invalidates LLM server KV-cache on every deferred-tool load](https://github.com/QwenLM/qwen-code/issues/6265)**
   *5 comments* | Closed | Author: @Aleks-0
   Every call to `tool_search` caused a full KV‑cache invalidation, significantly slowing down responses for users relying on deferred tools. Fix provided, marking a notable performance win.

6. **[#6384 – hard limit: 0 when env-configured model reserves its full default context window for output](https://github.com/QwenLM/qwen-code/issues/6384)**
   *5 comments* | Author: @tanzhenxin
   A bug where the effective context window becomes zero for certain model configurations, causing immediate API errors. The workaround is to manually adjust system prompts, but a proper fix is sought.

7. **[#6318 – Unable to /rewind after /compress even when rewinding to non-compressed position](https://github.com/QwenLM/qwen-code/issues/6318)**
   *4 comments* | Closed | Author: @fantasyz
   After a `/compress`, `/rewind` refused to go back to earlier turns, even those before the compression point. This limited session navigation after memory management actions.

8. **[#6488 – feat: add MessageDisplay hook event for mid-turn streaming (CLI + ACP)](https://github.com/QwenLM/qwen-code/issues/6488)**
   *3 comments* | Author: @yanchenko
   A request for a new hook that fires *during* assistant streaming, not just at the end of a turn. There is high interest from developers building custom UI/integration layers that need incremental updates.

9. **[#6321 – PreToolUse hook permissionDecision: “ask” is silently denied](https://github.com/QwenLM/qwen-code/issues/6321)**
   *3 comments* | Author: @system0shock
   The documented `permissionDecision: "ask"` in `PreToolUse` hooks never shows a confirmation prompt; it behaves like a denial. This breaks security workflows that depend on user interaction.

10. **[#5176 – Allow sub-agent max parallel count setting and queue the rest](https://github.com/QwenLM/qwen-code/issues/5176)**
    *4 comments* | Closed | Author: @fantasyz
    A request to limit the number of concurrent sub‑agents and queue excess ones, crucial for users running local LLMs with limited resources. The closure indicates it was implemented or a duplicate was addressed.

## 4. Key PR Progress

1. **[#6493 – fix(web-shell): count daemon sessions in Daemon Status usage dashboard](https://github.com/QwenLM/qwen-code/pull/6493)**
   Ensures the Web Shell’s usage dashboard correctly counts sessions that originate via the daemon, not just those from the persisted `usage_record.jsonl`. Improves monitoring for deployers.

2. **[#6416 – feat(cli): Add serve env isolation and total admission](https://github.com/QwenLM/qwen-code/pull/6416)**
   Introduces runtime‑local environment snapshots for `qwen serve`, threading them into workspace‑scoped status/config consumers. This is step one toward multi‑workspace serving guardrails.

3. **[#6481 – fix(scripts): handle missing NPM dist-tags gracefully in release versioning](https://github.com/QwenLM/qwen-code/pull/6481)**
   Fixes the release workflow failure from #6476 by making the versioning script resilient to missing NPM dist‑tags, preventing future scheduled release breakages.

4. **[#6482 – feat(serve): Bound replay snapshot history](https://github.com/QwenLM/qwen-code/pull/6482)**
   Adds a bounded in‑memory replay window to live daemon sessions, trimming snapshots by a serialized‑byte cap. Essential for memory stability on long‑running daemons.

5. **[#6491 – feat(sdk): expose transport and query options in both SDKs](https://github.com/QwenLM/qwen-code/pull/6491)**
   Consolidates 11 earlier PRs, adding options like `fork_session`, `max_tool_calls`, and others to the TypeScript and Python SDKs. This significantly expands SDK flexibility.

6. **[#6421 – fix(cli): bound the live streaming-table pending height](https://github.com/QwenLM/qwen-code/pull/6421)**
   Fixes three rendering defects in the streaming table: scroll‑to‑top lock, stall‑then‑dump, and header flash, all triggered by wide/long tables. Improves CLI UX noticeably.

7. **[#6492 – feat(sdk): add control request methods for effort, models, usage, context](https://github.com/QwenLM/qwen-code/pull/6492)**
   Adds SDK methods for runtime reasoning‑effort switching, model listing, usage records, and context window calculations. Enables rich programmatic control previously only available via CLI flags.

8. **[#6431 – fix(daemon): surface workspace memory task error details](https://github.com/QwenLM/qwen-code/pull/6431)**
   Enhances error reporting for async workspace memory tasks, exposing a detailed `error.details` field alongside the stable `error.message`. Aids debugging in daemon environments.

9. **[#6446 – fix(channel): Relay ACP permission requests](https://github.com/QwenLM/qwen-code/pull/6446)**
   Channels (e.g., DingTalk, WeCom) now correctly route ACP permission requests back to the chat, rather than auto‑approving. Critical for secure interactive channel bots.

10. **[#6489 – feat(hooks): add MessageDisplay hook for mid-turn streaming](https://github.com/QwenLM/qwen-code/pull/6489)**
    Implements the requested `MessageDisplay` hook, firing repeatedly during streaming. This unblocks real‑time UI integrations in both the terminal and ACP/IDE clients.

## 5. Feature Request Clusters

- **Multi‑workspace daemon support** – Several issues (#6378, #6312, #6416) and PRs orbit the idea of one daemon serving multiple workspaces, with environment isolation and per‑session overhead reduction as immediate sub‑goals.
- **Sub‑agent resource controls** – Requests for concurrent sub‑agent limits and queuing (#5176) alongside general performance/token management for agent workflows (#6264) indicate a desire for finer resource governance.
- **Streaming hooks & real‑time integration** – The `MessageDisplay` hook (#6488, PR #6489) and requests for mid‑turn event delivery reflect a need to build richer, streaming‑aware extensions and channel bots.
- **Model hot‑key toggling** – Direct model switching via hotkey (#6442, PR #6486) is a small but popular UX improvement, with a PR already up for review.
- **Extended SDK control surfaces** – The SDK‑oriented PRs (#6491, #6492) mirror a strong push to expose all CLI flags as programmatic options, covering sandboxing, safe mode, worktree, and slash‑command management.
- **Channel improvements** – WeCom (#6208, #6490), DingTalk (#6443), and QQ Bot (#6457) enhancements suggest sustained investment in making Qwen Code a first‑class citizen in enterprise messaging platforms.

## 6. Developer Pain Points

- **Token economy and context window management** – The `/review` skill’s token drain (#6264), PDF overflow (#6408), and the “hard limit: 0” bug (#6384) all highlight the difficulty users face in staying within model context limits.
- **Session management brittleness** – Inability to `/rewind` after `/compress` (#6318), stale memory index after `/remember` (#6487), and session list reordering in daemon mode (#6438) erode trust in session reliability.
- **Windows tooling gaps** – Shell commands fail due to reliance on Unix‑specific utilities (#6298), and extension install issues (#6334) persist, making Windows a second‑class experience.
- **Hook and permission confusion** – PreToolUse `ask` never triggering (#6321) and missing streaming hooks (#6488) impede developers trying to build custom safety or UI layers.
- **Authentication and subscription friction** – Several support issues (#6477, #6475) report difficulty activating plans, often tied to token‑plan endpoints on non‑standard base URLs. The OAuth login URL formatting (#6428) also remains a minor irritant.

The day’s activity underscores a maturing tool that is rapidly expanding its channel and SDK footprint, while still patching critical performance and cross‑platform gaps.

</details>