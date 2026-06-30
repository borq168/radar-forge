# AI CLI Tools Community Digest 2026-06-30

> Generated: 2026-06-30 00:32 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report (2026-06-30)

## 1. Daily Cross-Tool Overview
Today's activity across the AI CLI ecosystem is heavily focused on terminal UI rendering stability, context window management, and execution security. OpenAI Codex maintainers pushed extensive security patches for Git and shell execution boundaries, while Gemini CLI and Qwen Code addressed infinite reasoning loops and subagent context leakage. Meanwhile, Claude Code and GitHub Copilot CLI released minor updates targeting organization defaults and plugin coexistence, though both continue to face community friction regarding sandbox performance and terminal rendering artifacts.

## 2. Activity Comparison

| Tool | Issues Count | PR Count | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 3 | Released (v2.1.196) |
| **OpenAI Codex** | 10 | 10 | Released (v0.142.4, v0.143.0-alpha.31) |
| **Gemini CLI** | 10 | 10 | Released (v0.51.0-nightly) |
| **GitHub Copilot CLI** | 10 | 0 | Released (v1.0.66-2) |
| **Kimi Code CLI** | 1 | 0 | No release |
| **OpenCode** | 10 | 10 | No release specified |
| **Qwen Code** | 10 | 10 | No release (nightly CI failed) |

## 3. Shared Feature Directions
*   **Context Compaction & Window Management:** Multiple communities are struggling with automated context summarization. OpenAI Codex users report "amnesia" where the model forgets mid-task progress post-compaction (#5957). OpenCode is dealing with infinite auto-compaction loops halting generation (#30680). Qwen Code users are requesting configurable, cheaper models specifically for compaction tasks (#5956) and fixing compression threshold calculations (#5957).
*   **Terminal UI (TUI) Rendering & Input Friction:** Terminal rendering remains a shared pain point. GitHub Copilot CLI users are frustrated by alt-screen modes (#1799), ghost characters (#3959), and raw mouse movement spam (#3972). Qwen Code faces severe scrolling jumps and flickering on Windows/Linux (#5941, #5971). Claude Code's flicker-free rendering broke multiline inputs in iTerm2 (#72392), and Kimi Code users report cross-platform friction with mobile/desktop line-break inputs (#2479).
*   **Subagent & Background Execution Reliability:** As tools adopt multi-agent architectures, state leakage and hanging are common. Gemini CLI's generalist agent hangs indefinitely (#21409) and subagents mask interruptions as success (#22323). Qwen Code is patching subagents that leak internal `<analysis>` XML tags into the parent context (#6023). OpenAI Codex users are requesting asynchronous `monitor` tools to wake agents on background events without turn-driven polling (#29922).

## 4. Differentiation Analysis
*   **Feature Focus:** OpenAI Codex is heavily prioritizing security hardening, specifically isolating the agent from malicious repository-controlled Git and shell configurations. Gemini CLI is focused on core agent stability (enforcing strict turn limits, stripping thought leakage) and AST-aware codebase navigation. OpenCode is deeply invested in its V2 architecture migration and expanding Model Context Protocol (MCP) APIs. Claude Code is focusing on enterprise administration (organization default models) and sandbox configurations.
*   **Target Users:** Claude Code and GitHub Copilot CLI show strong enterprise signals, with requests for org-wide defaults, multi-account switching, and server-managed settings. OpenCode and Qwen Code cater to power users and self-hosters managing multiple providers, daemons, and custom channels (e.g., GLM-5.x routing, DingTalk/Feishu integrations). Kimi Code uniquely highlights mobile and cross-platform form-factor considerations.
*   **Technical Approach:** OpenAI Codex is built in Rust (evident from `rust-v0.142.4` tags) and focuses on strict OS-level process boundaries. OpenCode utilizes TypeScript/Bun (migrating to Bun canary to bypass Windows segfaults) and a generated Promise client. Gemini CLI leverages GCP infrastructure (Cloud Run, Firestore) for its Caretaker Agent triage worker. Qwen Code utilizes a daemon architecture for background channel workers and V8 memory management.

## 5. Community Activity Notes
*   **Activity by Count:** OpenAI Codex, Gemini CLI, OpenCode, and Qwen Code are the most active repositories today, each tracking 10 hot issues and 10 updated PRs. Claude Code and GitHub Copilot CLI also have 10 tracked issues but significantly lower PR activity (3 and 0, respectively). Kimi Code CLI is largely dormant with only 1 issue and 0 PRs.
*   **Releases:** Claude Code, OpenAI Codex, Gemini CLI, and GitHub Copilot CLI successfully shipped updates. Qwen Code's automated nightly build failed in CI due to Docker integration issues, while OpenCode and Kimi Code had no releases.
*   **Maintainer Response:** OpenAI Codex and Gemini CLI maintainers are highly responsive, actively merging critical security and stability patches (e.g., Codex Git boundary hardening, Gemini 15-turn recursive limits). Qwen Code maintainers are actively pushing TUI and daemon fixes. Conversely, GitHub Copilot CLI had 0 PRs updated despite 10 hot issues, indicating a potential lag in maintainer triage for reported TUI and Windows MCP regressions.

## 6. Evidence-Backed Observations
1.  **Context compaction is a primary vector for agent instability:** Across multiple tools, automated context summarization is causing severe workflow disruptions. Evidence includes OpenAI Codex models losing track of edited files post-compaction (#5957), OpenCode entering infinite compaction loops (#30680), and Qwen Code failing to trigger auto-compression before API 400 errors due to miscalculated token budgets (#5957).
2.  **Sandbox and execution boundaries require OS-specific handling:** Tools are struggling to abstract OS-level execution differences. Claude Code's sandbox ignores `.gitignore` and causes multi-minute hangs on large workspaces (#68587). OpenAI Codex is explicitly patching Windows PowerShell parser trusts (#30628) and `CreateProcessAsUserW` failures (#20570). GitHub Copilot CLI's MCP servers fail on Windows when using `.bat`/`.cmd` arguments (#3958).
3.  **Rate limiting and token metering UX are causing widespread user distrust:** Users across multiple platforms report discrepancies between UI meters and actual hard limits. Claude Code Max users hit hard limits at 71% UI usage (#23030). OpenAI Codex Pro users observe 5-hour limits triggering after only 41 minutes (#30002). Qwen Code users report avoidable prompt-cache misses inflating costs on Anthropic endpoints (#5942).
4.  **Regarding a unified cross-tool MCP standardization push, there is no clear cross-tool signal today:** While MCP is mentioned in Claude Code, GitHub Copilot CLI, and OpenCode, the issues are highly fragmented and specific to individual tool implementations (e.g., Copilot's Windows `.bat` regression, OpenCode's OAuth token refresh races, Claude's GitHub remote MCP OAuth failure on Linux), rather than a shared ecosystem push for standardization.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest: 2026-06-30

## 1. Today's Update Brief
The Claude Code repository saw moderate activity over the last 24 hours, highlighted by the release of v2.1.196 which introduces organization default models and readable session names. Community discussions remain heavily focused on resolving sandbox performance bottlenecks, OAuth integration bugs, and addressing false-positive cybersecurity safety blocks in specialized development workflows.

## 2. Releases
**v2.1.196**
*   **Organization Default Models:** Added support for organization-wide default models. Admins can configure this in the org console, and it appears as "Org default" (or "Role default") in the `/model` selector when a user hasn't set a personal preference.
*   **Readable Session Names:** Introduced readable default names for sessions at startup, making them easier to identify and manage in the UI.

## 3. Hot Issues
1.  **[FEATURE] Multi-account management in Desktop app** ([#18435](https://github.com/anthropics/claude-code/issues/18435))
    *   *Workflow/Impact:* Users managing both personal and enterprise accounts currently face high friction when switching contexts. This request seeks easy profile switching within the Desktop app.
    *   *Reaction:* Highly requested with 616 👍 and 122 comments.
2.  **[BUG] GitHub remote MCP server OAuth failure on Linux** ([#3433](https://github.com/anthropics/claude-code/issues/3433))
    *   *Workflow/Impact:* Blocks Linux users from authenticating and connecting to GitHub's remote MCP server, severely limiting tool integration for a large segment of the user base.
    *   *Reaction:* 138 👍 and 57 comments indicating widespread frustration.
3.  **[BUG] Cowork virtiofs FUSE mount serves stale files on Windows** ([#38993](https://github.com/anthropics/claude-code/issues/38993))
    *   *Workflow/Impact:* Host-side file changes are not reflected in the VM, causing developers to work with truncated or stale codebases during Cowork sessions.
    *   *Reaction:* 32 comments from affected Windows users troubleshooting workarounds.
4.  **[BUG] Rate limit triggered at 71% session usage** ([#23030](https://github.com/anthropics/claude-code/issues/23030))
    *   *Workflow/Impact:* Max plan ($200) users are hitting hard rate limits while the `/usage` command still shows 29% remaining capacity, abruptly halting active coding sessions.
    *   *Reaction:* 13 👍 and 10 comments discussing billing and metering discrepancies.
5.  **[BUG] VS Code extension ignores sandbox settings** ([#64061](https://github.com/anthropics/claude-code/issues/64061))
    *   *Workflow/Impact:* The Bash sandbox configured in `settings.json` fails to activate in the VS Code extension, forcing users to deal with approval fatigue or abandon the IDE integration.
    *   *Reaction:* 4 comments highlighting the gap between CLI and IDE behavior.
6.  **[BUG] Cybersecurity safety-filter false positives** ([#72373](https://github.com/anthropics/claude-code/issues/72373), [#72357](https://github.com/anthropics/claude-code/issues/72357), [#72350](https://github.com/anthropics/claude-code/issues/72350))
    *   *Workflow/Impact:* Developers writing code for drone telemetry, flight UIs, and video processing are experiencing session-halting blocks due to overly aggressive "cyber" safety filters.
    *   *Reaction:* Multiple duplicate reports filed in a single day by the same user attempting to bypass the blocks.
7.  **[BUG] Sandbox directory walk causes multi-minute startup hangs** ([#68587](https://github.com/anthropics/claude-code/issues/68587))
    *   *Workflow/Impact:* Enabling `sandbox.enabled: true` triggers a synchronous, single-threaded recursive walk of the entire working tree on every prompt, ignoring `.gitignore` and freezing large workspaces.
    *   *Reaction:* Detailed technical breakdown provided by the author; recognized as a major performance blocker.
8.  **[BUG] Windows Desktop app forces PowerShell in interactive shell** ([#72389](https://github.com/anthropics/claude-code/issues/72389))
    *   *Workflow/Impact:* The `!` interactive shell command ignores `defaultShell:"bash"` configurations, forcing PowerShell and breaking cross-platform shell script workflows.
    *   *Reaction:* Author notes previous reports were auto-closed by bots without fixes, expressing frustration with the triage process.
9.  **[BUG] Flicker-free rendering breaks Shift+Enter in iTerm2** ([#72392](https://github.com/anthropics/claude-code/issues/72392))
    *   *Workflow/Impact:* A recent rendering update broke the Shift+Enter shortcut for multiline inputs in iTerm2, degrading the terminal UX for macOS users.
    *   *Reaction:* Reported on the latest v2.1.196 build, indicating a fresh regression.
10. **[BUG] Live token counter absent during thinking phase** ([#72346](https://github.com/anthropics/claude-code/issues/72346))
    *   *Workflow/Impact:* The ↓ tokens counter no longer displays during the model's thinking phase, making it impossible for users to distinguish between a stuck API call and ongoing background reasoning.
    *   *Reaction:* Noted as a recent regression from the previous weekend.

## 4. Key PR Progress
*(Note: Only 3 PRs were updated in the last 24 hours)*

1.  **Gateway GCP example: Agent Platform rebrand and README cleanup** ([#72363](https://github.com/anthropics/claude-code/pull/72363)) - *Closed*
    *   Updates prose references from Vertex AI to the new Agent Platform branding across GCP example READMEs, scripts, and Terraform comments while retaining legacy terms for searchability.
2.  **Add Claude Gateway on GCP example deployment assets** ([#72361](https://github.com/anthropics/claude-code/pull/72361)) - *Closed*
    *   Adds reference deployment artifacts and Terraform assets for running Claude Gateway on Google Cloud, accompanying the official documentation walkthrough.
3.  **docs(examples/hooks): note Bash tool_input payload fields** ([#72264](https://github.com/anthropics/claude-code/pull/72264)) - *Open*
    *   Updates the `bash_command_validator_example.py` hook documentation to clarify that the `PreToolUse` Bash payload also exposes `run_in_background`, `description`, and `timeout` fields, not just `command`.

## 5. Feature Request Clusters
*   **Account & Session Management:** Strong demand for better multi-tenant workflows, specifically the ability to manage and easily switch between multiple Claude accounts within the Desktop app ([#18435](https://github.com/anthropics/claude-code/issues/18435)). Users also request a left sidebar UI featuring Pinned, Current Works, and Recents for improved session navigation ([#72366](https://github.com/anthropics/claude-code/issues/72366)).
*   **Enterprise Networking & Gateways:** Requests for deeper support for strict enterprise APIM gateways, including custom paths, payload injection, and SSE fallbacks to accommodate complex corporate network topologies ([#62973](https://github.com/anthropics/claude-code/issues/62973)).
*   **Granular Usage Metering:** Users want the UI usage meters to reflect model-specific sub-quotas (e.g., Opus-specific rate limits) rather than just general rolling window capacities, which currently leads to misleading UX when limits are hit ([#72372](https://github.com/anthropics/claude-code/issues/72372)).

## 6. Developer Pain Points
*   **Sandbox Performance & Configuration Friction:** The sandbox feature is currently a major source of friction. Developers report severe performance degradation, including synchronous full-tree directory walks that ignore `.gitignore` and cause multi-minute hangs ([#68587](https://github.com/anthropics/claude-code/issues/68587)), as well as unbounded memory growth leading to OOM kills when traversing nested `node_modules` ([#72367](https://github.com/anthropics/claude-code/issues/72367)). Furthermore, IDE integrations like VS Code fail to respect sandbox configurations entirely ([#64061](https://github.com/anthropics/claude-code/issues/64061)).
*   **Overzealous Safety Filters:** Developers working in specialized hardware and robotics domains (e.g., drone telemetry, flight UIs, video processing) are facing session-halting false positives from the cybersecurity safety filter. This blocks authorized, routine work and requires manual intervention to bypass ([#72373](https://github.com/anthropics/claude-code/issues/72373), [#72358](https://github.com/anthropics/claude-code/issues/72358)).
*   **Terminal & TUI Rendering Regressions:** Terminal users are experiencing a cluster of UI bugs, including flicker-free rendering breaking the Shift+Enter shortcut in iTerm2 ([#72392](https://github.com/anthropics/claude-code/issues/72392)), text truncation at the right edge in tmux ([#72371](https://github.com/anthropics/claude-code/issues/72371)), and the loss of the live token counter during the thinking phase ([#72346](https://github.com/anthropics/claude-code/issues/72346)).
*   **Authentication & Integration Failures:** OAuth flows remain unreliable for several integrations. Linux users cannot connect to GitHub's remote MCP server via OAuth ([#3433](https://github.com/anthropics/claude-code/issues/3433)), and Google/Gmail connectors frequently display a "Connected" status in the UI without actually triggering the OAuth flow or linking the account ([#72375](https://github.com/anthropics/claude-code/issues/72375)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-30

## 1. Today's Update Brief
Today's repository activity is heavily dominated by a comprehensive security hardening effort, with numerous PRs targeting Git and shell execution boundaries to prevent repository-controlled exploits. Concurrently, the issue tracker highlights persistent community friction regarding context compaction disrupting long-running tasks and aggressive rate-limit accounting on Pro and Business tiers.

## 2. Releases
*   **[rust-v0.142.4](https://github.com/openai/codex/releases/tag/rust-v0.142.4)**: A minor maintenance release containing only internal chores with no user-facing changes.
*   **[rust-v0.143.0-alpha.31](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.31)**: The latest alpha release has been published for early testing.

## 3. Hot Issues
1.  **[Burning tokens very fast (#14593)](https://github.com/openai/codex/issues/14593)**: A highly active thread (626 comments) where VS Code Business users report rapid token depletion, sparking extensive discussion on usage metrics and background polling.
2.  **[Codex desktop app for Linux (#11023)](https://github.com/openai/codex/issues/11023)**: The most upvoted issue (658 👍) requesting a native Linux desktop app, driven by power consumption and usability issues on macOS laptops.
3.  **[SQLite feedback logs consume SSD endurance (#28224)](https://github.com/openai/codex/issues/28224)**: Users reported the CLI writing ~640 TB/year in feedback logs. While largely mitigated in v0.142.0 via merged PRs, it remains a hot discussion topic for SSD wear concerns.
4.  **[Auto compaction causes GPT-5-Codex to lose the plot (#5957)](https://github.com/openai/codex/issues/5957)**: Enterprise users report that automatic context compaction causes the model to forget it is mid-task, lose track of edited files, and halt execution.
5.  **[Server-side quota over-reports consumption (#30002)](https://github.com/openai/codex/issues/30002)**: Pro users observe that 5-hour usage limits are triggering after only ~41 minutes and ~1.35M tokens, compared to the expected ~156M tokens.
6.  **[Legacy phone number verification blocks auth (#25749)](https://github.com/openai/codex/issues/25749)**: Users with valid Google OAuth and MFA are locked out of the Codex app because it demands SMS verification for an inaccessible legacy phone number.
7.  **[Customizable status line (#17827)](https://github.com/openai/codex/issues/17827)**: A popular feature request (78 👍) to add a customizable TUI status line (similar to Claude Code) displaying real-time token usage, model name, and context window stats.
8.  **[macOS accumulates zombie MCP/Computer Use processes (#25744)](https://github.com/openai/codex/issues/25744)**: Long-running macOS sessions leak unreaped child processes, leading to severe HID lag and WindowServer/TCC stalls.
9.  **[Windows Desktop creates empty .git and spawns repetitive git processes (#29492)](https://github.com/openai/codex/issues/29492)**: Windows users report the desktop app generating empty `.git` folders and getting stuck in infinite `git.exe` polling loops in non-git workspaces.
10. **[Feature: agent-callable `monitor` tool (#29922)](https://github.com/openai/codex/issues/29922)**: A request for a background event monitor tool that wakes Codex on logs, file changes, or CI events without relying on turn-driven polling.

## 4. Key PR Progress
*Note: Today's PR activity is heavily focused on security, specifically isolating Codex from malicious or unintended repository-controlled Git and shell configurations.*

1.  **[Require approval for generic Git commands (#28714)](https://github.com/openai/codex/pull/28714)**: Addresses security findings that argv-only "read-only Git" classifications are unsafe due to repository discovery and TTY state variables.
2.  **[Fail closed on executable Git worktree helpers (#27914)](https://github.com/openai/codex/pull/27914)**: Prevents internal Git worktree operations from executing repository-selected content filters and merge drivers during patch application.
3.  **[Deny implicit transport for local-only Git operations (#29470)](https://github.com/openai/codex/pull/29470)**: Stops local Git commands from lazily fetching missing objects across network boundaries via repository-configured promisor remotes.
4.  **[Harden fake shell approval boundaries (#30631)](https://github.com/openai/codex/pull/30631)**: Prevents model-selected, nested path-qualified shells from inheriting the trust of inner safe commands (like `ls`) to bypass sandbox expansions.
5.  **[Trust only system PowerShell parsers on Windows (#30628)](https://github.com/openai/codex/pull/30628)**: Blocks repository-controlled `pwsh.exe` or `powershell.exe` from executing before approval and sandbox boundaries by strictly trusting system parsers.
6.  **[Keep default-branch discovery on local refs (#28761)](https://github.com/openai/codex/pull/28761)**: Prevents passive default-branch discovery (like `git remote show`) from crossing network boundaries via repository-selected SSH or credential helpers.
7.  **[Isolate marketplace Git transport from workspace config (#28760)](https://github.com/openai/codex/pull/28760)**: Ensures marketplace `git ls-remote` or clone operations do not inherit untrusted `url.*.insteadOf` configurations from the current workspace.
8.  **[Fix core tool-search rollout poisoning (#30618)](https://github.com/openai/codex/pull/30618)**: Prevents malformed `tool_search_call.arguments` from being persisted verbatim, which previously broke cold resumes and follow-up turns.
9.  **[Trace and reduce remote first-turn latency (#30632)](https://github.com/openai/codex/pull/30632)**: Propagates W3C trace context across Core and exec-server RPC, adding stage-level spans to identify and remove avoidable waits in remote execution.
10. **[Move to shared ElicitationService (#30627)](https://github.com/openai/codex/pull/30627)**: Consolidates MCP elicitations into a session-level service so the model cannot continue executing while waiting for user input on parallel tool calls.

## 5. Feature Request Clusters
*   **TUI/UX Customization & Parity**: Developers are requesting deeper terminal UI customization, specifically a configurable status line for real-time metrics ([#17827](https://github.com/openai/codex/issues/17827)), options to disable autoscroll during long responses ([#23517](https://github.com/openai/codex/issues/23517)), and Claude Code-style remote control via mobile apps ([#27565](https://github.com/openai/codex/issues/27565)).
*   **Platform-Specific Desktop Apps**: There is strong demand for a native Linux desktop application to bypass macOS power/performance issues ([#11023](https://github.com/openai/codex/issues/11023)), alongside requests to fix Windows-specific desktop quirks like repetitive git polling ([#29492](https://github.com/openai/codex/issues/29492)) and blank editor panels ([#21863](https://github.com/openai/codex/issues/21863)).
*   **Asynchronous Agent Capabilities**: Users want Codex to be more reactive rather than strictly turn-driven. Requests include an agent-callable `monitor` tool to wake the agent on background CI/log events ([#29922](https://github.com/openai/codex/issues/29922)) and more granular configuration for multi-agent delegation policies ([#30493](https://github.com/openai/codex/pull/30493)).

## 6. Developer Pain Points
*   **Context Compaction Amnesia**: A major source of frustration is the automatic context compaction mechanism. Developers report that when the context window compacts, the model frequently forgets its mid-task progress, loses track of recently edited files, and ignores `AGENTS.md` rules, sometimes causing task progress to regress significantly ([#5957](https://github.com/openai/codex/issues/5957), [#29356](https://github.com/openai/codex/issues/29356), [#25792](https://github.com/openai/codex/issues/25792)).
*   **Aggressive and Inaccurate Rate Limiting**: Pro and Business tier users are experiencing severe quota over-reporting. Observations include 5-hour limits burning in under an hour ([#30002](https://github.com/openai/codex/issues/30002)), rapid token burn rates in VS Code ([#14593](https://github.com/openai/codex/issues/14593)), and immediate "Model at capacity" errors blocking both new and existing sessions ([#30575](https://github.com/openai/codex/issues/30575), [#30577](https://github.com/openai/codex/issues/30577)).
*   **Windows OS Process and Sandbox Friction**: Windows users face distinct environment issues, including sandbox `CreateProcessAsUserW` failures ([#20570](https://github.com/openai/codex/issues/20570)), stuck `git.exe` polling processes degrading performance ([#29408](https://github.com/openai/codex/issues/29408)), and consistently slow thread switching in the Desktop app ([#29187](https://github.com/openai/codex/issues/29187)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-06-30

## 1. Today's Update Brief
The Gemini CLI project published its June 29 nightly build alongside significant core agent stability fixes, specifically targeting infinite reasoning loops and thought leakage in chat history. Community discussions and maintainer triage heavily focused on refining the Auto Memory system, improving subagent reliability, and hardening sandbox file-write permissions to prevent unintended configuration modifications.

## 2. Releases
- **v0.51.0-nightly.20260629.gae0a3aa7b**: Automated nightly release incorporating the latest core fixes and dependency updates.
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)

## 3. Hot Issues
1. **Subagent recovery masks interruptions as success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): The `codebase_investigator` subagent reports a `GOAL` success status even when it hits the maximum turn limit before completing analysis, hiding interruptions from the user.
2. **Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): Deferring to the generalist agent for simple tasks like folder creation causes the CLI to hang forever. Instructing the model to avoid subagents currently acts as the only workaround. (8 👍)
3. **Shell execution stuck on "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): The CLI frequently hangs and displays "Awaiting user input" after executing simple, non-interactive shell commands that have already completed. (3 👍)
4. **Robust component level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)): An epic tracking the expansion of "behavioral evals" to ensure robust testing across 6 supported Gemini models, building on previous evaluation infrastructure.
5. **Assess impact of AST-aware file reads and mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): Investigation into using AST-aware tools to precisely read method bounds, which would reduce token noise and prevent misaligned file reads.
6. **Underutilization of custom skills and sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)): Users report that Gemini rarely invokes custom skills (e.g., Gradle, Git) or sub-agents autonomously, requiring explicit prompting to use them.
7. **Deterministic redaction for Auto Memory** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): A security concern where Auto Memory sends local transcripts to the extraction model before redaction occurs, risking secret exposure in the model context.
8. **Auto Memory retrying low-signal sessions** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): The memory extraction agent leaves low-signal sessions marked as unprocessed if it decides not to read them, causing them to be retried indefinitely.
9. **400 error with >128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)): The agent crashes with a 400 error when more than 128 (up to 400) tools are available in the environment, highlighting a need for smarter tool scoping.
10. **Agent should discourage destructive behavior** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)): The model occasionally uses destructive commands like `git reset --force` or modifies databases directly, necessitating guardrails for safer alternatives.

## 4. Key PR Progress
1. **Limit recursive reasoning turns per request** ([#28164](https://github.com/google-gemini/gemini-cli/pull/28164)): Implements a strict 15-turn limit for recursive reasoning in the core agent to protect local CPU resources and API quotas from infinite loops.
2. **Strip thoughts from scrubbed history turns** ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971)): Resolves "Thought Leakage" where internal model monologues leaked into plain-text history, which previously confused the model and triggered infinite loop monologues.
3. **Defensive path resolution for at-reference files** ([#28053](https://github.com/google-gemini/gemini-cli/pull/28053)): Fixes a critical bug where filesystem tools failed with "File not found" when the model passed paths prefixed with `@` (e.g., `@policies/new-policies.txt`).
4. **Harden file-write scope for sandbox/auto-accept** ([#28215](https://github.com/google-gemini/gemini-cli/pull/28215)): *[CLOSED]* Addressed a sandbox escape vulnerability where auto-accept writes could modify `.gemini/` and `.gitconfig`, making subsequent launches overly permissive.
5. **Cloud Run webhook ingestion for Caretaker Agent** ([#28015](https://github.com/google-gemini/gemini-cli/pull/28015)): Implements a Cloud Run service to ingest GitHub webhooks, verify signatures, store issues in Firestore, and publish metadata to Pub/Sub.
6. **Caretaker Agent triage worker foundation** ([#28163](https://github.com/google-gemini/gemini-cli/pull/28163)): Introduces the core foundational modules for the Caretaker Agent Triage Worker, split into modular PRs for easier review.
7. **Show ellipsis on multi-line edit snippets** ([#28126](https://github.com/google-gemini/gemini-cli/pull/28126)): UI improvement that appends `...` to edit descriptions when content is hidden, preventing multi-line edits from looking like single-line changes.
8. **Exclude transient CI files from workspace context** ([#28216](https://github.com/google-gemini/gemini-cli/pull/28216)): Updates `WorkspaceContext` to explicitly ignore dynamically generated GitHub Actions credential files (`gha-creds-*.json`).
9. **Bound web search tool latency** ([#27910](https://github.com/google-gemini/gemini-cli/pull/27910)): Adds a 120-second local timeout to the `google_web_search` utility, aborting the request and returning a clear error to prevent infinite hangs.
10. **Forward SIGINT/SIGTERM during relaunch** ([#28202](https://github.com/google-gemini/gemini-cli/pull/28202)): *[CLOSED]* Fixes an issue where pressing Ctrl+C during an update/relaunch killed the parent process but left the child process orphaned.

## 5. Feature Request Clusters
- **AST-Aware Codebase Navigation:** Multiple requests propose integrating AST-aware CLI tools to map codebases, read method bounds precisely, and reduce token noise during file reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Subagent Trajectory and Context Visibility:** Users want better visibility into subagent execution. Requests include exposing subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and ensuring `/bug` reports capture subagent context rather than just the main session ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Agent Self-Awareness and Configuration Adherence:** Requests for the agent to better understand its own CLI flags and hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), and for subagents (like the browser agent) to strictly respect `settings.json` overrides such as `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## 6. Developer Pain Points
- **Agent Hanging and Infinite Loops:** A major source of friction is the CLI hanging during routine operations. Developers report the generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands getting stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and web searches blocking the thread. Maintainers are actively responding with strict turn limits and timeouts ([#28164](https://github.com/google-gemini/gemini-cli/pull/28164), [#27910](https://github.com/google-gemini/gemini-cli/pull/27910)).
- **Auto Memory Inefficiencies and Privacy Risks:** The background Auto Memory system is generating complaints for wasting compute on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently failing on invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and posing security risks by processing unredacted transcripts ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Overly Permissive or Messy File Operations:** Users are frustrated by the agent's tendency to create temporary scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), execute destructive commands like `git reset --force` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and the security implications of auto-accepting writes to sensitive configuration folders like `.gemini/` ([#28215](https://github.com/google-gemini/gemini-cli/pull/28215)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-06-30

## 1. Today's Update Brief
The GitHub Copilot CLI received a minor patch (v1.0.66-2) focused on plugin skill coexistence, LSP log visibility, and integration settings. Community issue activity remains high with 28 updated tickets, heavily centered around terminal rendering artifacts, Windows-specific MCP regressions, and session management edge cases.

## 2. Releases
**v1.0.66-2**
*   **Plugin & Integration Enhancements:** Allowed skills with identical names from different plugins to coexist, and enabled integrations to read and write CLI user settings.
*   **Diagnostics:** Added the ability to view LSP server logs via `/lsp logs` and `read_agent`.
*   **UX Improvements:** Introduced prompts to install the `gh` CLI when it is missing in GitHub repositories, and added GitHub attachment variants to prompt rendering.

## 3. Hot Issues
1.  **[Windows MCP Regression] v1.0.66 fails to start stdio MCP servers with .bat/.cmd args** ([#3958](https://github.com/github/copilot-cli/issues/3958))
    *   *Workflow/Impact:* Breaks local MCP server initialization on Windows when the command is a batch file with arguments, causing immediate child process death.
2.  **[Enterprise] Feature: org server-managed settings (incl. `env`) for local CLI** ([#3909](https://github.com/github/copilot-cli/issues/3909))
    *   *Workflow/Impact:* Org admins currently lack a mechanism to centrally push configuration and environment variables to developers' local CLI installs, limiting enterprise standardization.
3.  **[Terminal Rendering] How to turn off alt-screen views?** ([#1799](https://github.com/github/copilot-cli/issues/1799))
    *   *Workflow/Impact:* The recently introduced alt-screen mode is causing terminal workflow disruptions. High community engagement (10 comments, 7 upvotes) indicates a strong desire for a toggle to revert to the original mode.
4.  **[Networking/Auth] MCP OAuth re-auth repeatedly fails on Windows** ([#3973](https://github.com/github/copilot-cli/issues/3973))
    *   *Workflow/Impact:* HTTP MCP servers using OAuth get stuck in a re-auth failure state on Windows when the cached loopback redirect port falls into an excluded TCP port range, requiring manual cache clearing.
5.  **[Agent Tools] `web_fetch` TypeError: fetch failed** ([#3948](https://github.com/github/copilot-cli/issues/3948))
    *   *Workflow/Impact:* The `web_fetch` tool consistently fails with a TypeError regardless of proxy settings, breaking agent workflows that require reading external HTML/web content.
6.  **[TUI Rendering] UI displaying continuous stream of mouse movement characters** ([#3972](https://github.com/github/copilot-cli/issues/3972))
    *   *Workflow/Impact:* On initial load, the TUI often renders a raw stream of characters representing mouse movements instead of a functioning interface, requiring a restart or redraw.
7.  **[Sessions] CloudQueryError prevents `/chronicle standup`** ([#3904](https://github.com/github/copilot-cli/issues/3904))
    *   *Workflow/Impact:* The `/chronicle standup` command fails entirely on cloud internal server errors, ignoring available local fallback data due to DuckDB-style timestamp predicate issues.
8.  **[Sessions/Agents] `session_store_sql` silently returns empty for local sync** ([#2654](https://github.com/github/copilot-cli/issues/2654))
    *   *Workflow/Impact:* When session sync is set to "local", the SQL tool remains in the agent's system prompt but returns 0 rows, confusing the agent without indicating that the cloud store is disabled.
9.  **[Input/Editor] Ctrl+G should expand paste tokens to full text in `$EDITOR`** ([#3936](https://github.com/github/copilot-cli/issues/3936))
    *   *Workflow/Impact:* When `compactPaste` collapses large blocks into tokens, pressing Ctrl+G to edit in `$EDITOR` writes the literal token string rather than expanding it, breaking the external editor workflow.
10. **[TUI Rendering] Visual artifacts / "ghost" characters remain after deleting text** ([#3959](https://github.com/github/copilot-cli/issues/3959))
    *   *Workflow/Impact:* Backspacing in the CLI prompt fails to completely clear terminal cells, leaving floating "ghost" characters that disrupt the visual interface.

## 4. Key PR Progress
*No pull requests were updated in the last 24 hours.*

## 5. Feature Request Clusters
*   **Session Organization & Visibility:** Users are requesting better ways to manage growing session lists. Requests include adding user-defined searchable tags ([#3970](https://github.com/github/copilot-cli/issues/3970)), displaying plan status indicators/badges on list items ([#3969](https://github.com/github/copilot-cli/issues/3969)), showing session retention/expiration dates ([#3963](https://github.com/github/copilot-cli/issues/3963)), and providing a full file-tree browser for repository-backed sessions ([#3971](https://github.com/github/copilot-cli/issues/3971)).
*   **Enterprise Configuration:** A push for centralized, server-managed settings and environment variables that can be pushed directly to local CLI installations by organization admins ([#3909](https://github.com/github/copilot-cli/issues/3909)).
*   **Editor Integration Parity:** Requests to improve external editor integration, specifically expanding compact paste tokens into full text when invoking `$EDITOR` ([#3936](https://github.com/github/copilot-cli/issues/3936)).

## 6. Developer Pain Points
*   **Terminal UI & Rendering Glitches:** Developers are experiencing significant friction with the TUI. Pain points include the inability to disable the new alt-screen mode ([#1799](https://github.com/github/copilot-cli/issues/1799)), ghost characters lingering after text deletion ([#3959](https://github.com/github/copilot-cli/issues/3959)), raw mouse movement characters spamming the UI on startup ([#3972](https://github.com/github/copilot-cli/issues/3972)), and trackpad scrolling inadvertently selecting previous prompts instead of scrolling the window ([#3957](https://github.com/github/copilot-cli/issues/3957)).
*   **Windows-Specific Regressions:** Windows users are facing distinct environment hurdles. The v1.0.66 update introduced a regression breaking stdio MCP servers that use `.bat`/`.cmd` files with arguments ([#3958](https://github.com/github/copilot-cli/issues/3958)). Additionally, MCP OAuth loopback port conflicts ([#3973](https://github.com/github/copilot-cli/issues/3973)) and git symlink resolution failures during plugin installation ([#2286](https://github.com/github/copilot-cli/issues/2286)) remain unresolved.
*   **Session State & Agent Confusion:** There is ongoing frustration with session lifecycle management. Users report orphaned sessions running indefinitely ([#2364](https://github.com/github/copilot-cli/issues/2364), [#3600](https://github.com/github/copilot-cli/issues/3600)), while agents are being confused by silent failures in local SQL session stores ([#2654](https://github.com/github/copilot-cli/issues/2654)) and cloud query errors that block local data fallbacks ([#3904](https://github.com/github/copilot-cli/issues/3904)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-06-30

### 1. Today's Update Brief
Activity for the Kimi Code CLI repository was minimal over the last 24 hours, with no new releases, merged pull requests, or extensive issue discussions. The sole update is a single enhancement request focused on improving cross-platform keyboard input handling for multi-line prompts.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*Only 1 issue was updated in the last 24 hours.*

* **[#2479] [enhancement] Bad usage of return and enter for desktop and mobile** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2479))
  * **Workflow & Impact:** This issue highlights friction in the prompt input workflow across different form factors. On mobile devices, pressing "Enter" immediately submits the prompt, making it impractical to draft multi-line instructions. On desktop, users are required to use `Shift+Enter` to create a new line.
  * **Community Reaction:** Opened by [@Dealazer](https://github.com/Dealazer) on 2026-06-29. It currently has 0 comments and 0 upvotes, indicating it is a newly surfaced observation awaiting maintainer or community triage.

### 4. Key PR Progress
*No pull requests were updated or merged in the last 24 hours.*

### 5. Feature Request Clusters
*Based on today's limited data, only one feature request cluster was observed:*

* **Cross-Platform Input & Submission Handling:** Users are requesting a more intuitive and unified approach to line breaks and prompt submission. The primary ask is to decouple the "new line" action from the "submit" action on mobile keyboards, and potentially re-evaluate the `Shift+Enter` requirement on desktop to align with standard text area behaviors ([#2479](https://github.com/MoonshotAI/kimi-cli/issues/2479)).

### 6. Developer Pain Points
* **Mobile Multi-line Prompting:** Drafting complex, multi-line prompts on mobile phones is currently described as "nearly impossible" because the default mobile keyboard "Enter" key immediately triggers prompt submission rather than inserting a line break.
* **Desktop Line-Break Friction:** Desktop users experience minor but recurring friction when writing prompts, as they must consistently remember to use the `Shift+Enter` shortcut to insert new lines, which differs from the single-press enter behavior found in many standard chat applications.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## Today's Update Brief
Today's activity in the OpenCode repository centers on the ongoing V2 architecture migration, specifically transitioning the TUI to the new `@opencode-ai/client` and defining V2 shell and session APIs. Maintainers are also expanding Model Context Protocol (MCP) capabilities, including prompt support and server logging, while addressing concurrency hazards in V2 MCP OAuth. Meanwhile, the community reports persistent prompt caching and routing issues with GLM-5.x models via the OpenCode Go gateway.

## Hot Issues
1. **[CLOSED] Auto-compaction loop and generation halt ([#30680](https://github.com/anomalyco/opencode/issues/30680))**: OpenCode enters an infinite auto-compaction loop and stops generating responses, even in empty folders, severely disrupting session stability.
2. **[OPEN] Hangs with local Ollama provider ([#22132](https://github.com/anomalyco/opencode/issues/22132))**: The local Ollama provider hangs on simple prompts despite the underlying `/v1/chat/completions` endpoint functioning correctly, blocking local development workflows.
3. **[OPEN] GLM-5.2 prompt cache drops on opencode-go ([#33998](https://github.com/anomalyco/opencode/issues/33998))**: Users experience intermittent prompt cache drops to ~500 tokens for GLM-5.2 via the opencode-go gateway, even when system prompts remain byte-identical.
4. **[OPEN] GitHub Copilot provider broken ([#33696](https://github.com/anomalyco/opencode/issues/33696))**: Fresh authorization flows for the GitHub Copilot provider fail to discover any models, completely breaking the integration for affected users.
5. **[OPEN] GLM-5.1 prompt cache drops to 0 ([#31348](https://github.com/anomalyco/opencode/issues/31348))**: Similar to GLM-5.2, GLM-5.1 experiences random cache read drops to 0 in long-running workflows, causing unexpected cost spikes compared to stable providers like DeepSeek V4 Flash.
6. **[OPEN] GLM-5.2 rejects `instructions` field ([#33490](https://github.com/anomalyco/opencode/issues/33490))**: The GLM-5.2 model via OpenCode Go throws an "Extra inputs are not permitted" error when the `instructions` field is passed, requiring provider-level payload sanitization.
7. **[OPEN] Track TUI migration to @opencode-ai/client ([#34359](https://github.com/anomalyco/opencode/issues/34359))**: A core tracking issue for moving the V2 TUI from the legacy `@opencode-ai/sdk/v2` client to the new generated Promise client, outlining supported call-site migrations.
8. **[OPEN] Add session-scoped keyed context contributions ([#34380](https://github.com/anomalyco/opencode/issues/34380))**: A design discussion on allowing embedders to attach app-owned context to an OpenCode session without polluting global agent identity or standard user transcripts.
9. **[OPEN] Desktop loses sessions after profile reset ([#34471](https://github.com/anomalyco/opencode/issues/34471))**: macOS Desktop users lose access to chat history after a profile reset, even though the local `opencode.db` SQLite file still contains the session and message data.
10. **[OPEN] V2 MCP OAuth token refresh races ([#34523](https://github.com/anomalyco/opencode/issues/34523))**: Tracks concurrency hazards and cross-location/cross-process credential refresh races in the V2 MCP OAuth implementation, explicitly deferred from the initial auth rollout. *(See also [#34526](https://github.com/anomalyco/opencode/issues/34526), [#34520](https://github.com/anomalyco/opencode/issues/34520))*

## Key PR Progress
1. **[OPEN] Add LLM and session observability hooks ([#33523](https://github.com/anomalyco/opencode/pull/33523))**: Introduces four observability hooks to the plugin SDK, allowing plugins to monitor real LLM streams, tool execution, and agent runs.
2. **[OPEN] Expose shell API group ([#34534](https://github.com/anomalyco/opencode/pull/34534))**: Exposes the generated client shell group as `api.shells` and migrates TUI shell list/remove operations to the new generated Promise client.
3. **[OPEN] Add free model resolution for `--model free` ([#34060](https://github.com/anomalyco/opencode/pull/34060))**: Adds a `--model free` flag to `opencode run` and the TUI, which randomly selects zero-cost OpenCode Zen models per session.
4. **[OPEN] Support MCP prompts ([#34531](https://github.com/anomalyco/opencode/pull/34531))**: Exposes MCP prompt definitions and implements `MCP.prompts()` and `MCP.prompt(...)` across connected servers with stable sorting.
5. **[OPEN] Queue busy prompts after interrupt ([#34530](https://github.com/anomalyco/opencode/pull/34530))**: Fixes a TUI bug where the full-screen interface would incorrectly accept and process another prompt while the current session was still busy or interrupting.
6. **[OPEN] Use Bun canary for beta channel ([#33822](https://github.com/anomalyco/opencode/pull/33822))**: Updates CI to use the Bun canary build for the beta channel to bypass segfaults present in Bun 1.3.14 on Windows.
7. **[OPEN] Add timeline layout continuity coverage ([#34533](https://github.com/anomalyco/opencode/pull/34533))**: Adds a production-build test suite for timeline layout continuity, stabilizing anchoring, context disclosure states, and keyboard/nested-scroll ownership.
8. **[CLOSED] Sanitize registered tool names ([#34512](https://github.com/anomalyco/opencode/pull/34512))**: Sanitizes core tool names using MCP-style replacement rules for both application and location-scoped tool registrations.
9. **[CLOSED] Clean up MCP stdio descendants ([#34525](https://github.com/anomalyco/opencode/pull/34525))**: Ensures descendant processes for stdio MCP transports are properly terminated before closing the SDK client or transport.
10. **[CLOSED] Expose models.dev modes as models ([#34521](https://github.com/anomalyco/opencode/pull/34521))**: Projects models.dev experimental modes as separate model IDs instead of variants, preserving mode request overrides and tiered pricing.

## Feature Request Clusters
* **V2 API and Architecture Expansion**: Multiple requests focus on fleshing out the V2 API surface, including exposing V2 config update endpoints ([#34450](https://github.com/anomalyco/opencode/issues/34450)), implementing V2 session forking from specific message boundaries ([#34430](https://github.com/anomalyco/opencode/issues/34430)), defining V2 shell backgrounding semantics ([#34366](https://github.com/anomalyco/opencode/issues/34366)), and adding V2 reasoning/thinking option support ([#34488](https://github.com/anomalyco/opencode/issues/34488)).
* **Plugin and Extensibility Enhancements**: Developers are requesting deeper plugin integrations, such as exposing worktree lifecycle events (create, remove, reset) to plugins ([#15680](https://github.com/anomalyco/opencode/issues/15680)) and supporting the `disable-model-invocation: true` field in `SKILL.md` frontmatter to prevent skills from being auto-invoked by the model ([#11972](https://github.com/anomalyco/opencode/issues/11972), [#34498](https://github.com/anomalyco/opencode/issues/34498)).
* **UI/UX and TUI Improvements**: Quality-of-life requests for the terminal and desktop interfaces include adding LaTeX rendering to the TUI ([#11655](https://github.com/anomalyco/opencode/issues/11655)), providing workspace delete scripts for database-backed webapps ([#17427](https://github.com/anomalyco/opencode/issues/17427)), and adding an option to disable automatic prompt draft restoration when starting a new session ([#34446](https://github.com/anomalyco/opencode/issues/34446)).

## Developer Pain Points
* **Provider-Specific Caching and Routing Failures**: Users running long-running agent workflows report severe prompt caching degradation and parameter rejection (e.g., the `instructions` field) when using GLM-5.1 and GLM-5.2 via the OpenCode Go gateway ([#33998](https://github.com/anomalyco/opencode/issues/33998), [#31348](https://github.com/anomalyco/opencode/issues/31348), [#33490](https://github.com/anomalyco/opencode/issues/33490)). These drops lead to unexpected cost spikes and require manual provider switching.
* **Local and Third-Party Provider Instability**: Core coding workflows are frequently interrupted by integration failures, notably the TUI hanging with local Ollama setups ([#22132](https://github.com/anomalyco/opencode/issues/22132)) and broken authentication/model discovery for the GitHub Copilot provider ([#33696](https://github.com/anomalyco/opencode/issues/33696)).
* **State and Session Management Bugs**: Developers express frustration with state corruption and UI lockups, including the TUI entering infinite auto-compaction loops ([#30680](https://github.com/anomalyco/opencode/issues/30680)), the Desktop app losing session history after profile resets ([#34471](https://github.com/anomalyco/opencode/issues/34471)), and persistent UI error states (red status dots) that require clean reinstalls to clear ([#34532](https://github.com/anomalyco/opencode/issues/34532)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-06-30

## 1. Today's Update Brief
The Qwen Code repository saw high activity focused on TUI rendering stability, daemon channel management, and context window optimizations. While no new official releases were published due to a failed nightly CI build, maintainers advanced key pull requests addressing subagent tag leakage, authentication persistence, and autonomous loop execution.

## 2. Releases
*No new stable releases. (Note: The automated nightly build `v0.19.3-nightly.20260629` failed in CI due to Docker integration issues [#5969](https://github.com/QwenLM/qwen-code/issues/5969)).*

## 3. Hot Issues
1. **[API Error: No stream activity for 120000ms](https://github.com/QwenLM/qwen-code/issues/5975)**: Users on v0.19.3 report frequent 120-second stream timeouts immediately following the "Thought for 2s" phase, resulting in no output and requiring manual retries.
2. **[Anthropic provider prompt-cache misses](https://github.com/QwenLM/qwen-code/issues/5942)**: Side-queries and conversation breakpoints are causing avoidable prompt-cache misses when routed to Anthropic-protocol endpoints, significantly inflating API costs compared to native Claude Code.
3. **[TUI scrolling jumps to top on Windows](https://github.com/QwenLM/qwen-code/issues/5941)** & **[TUI continuous scrolling/flickering on Linux](https://github.com/QwenLM/qwen-code/issues/5971)**: Severe interactive CLI rendering bugs where mouse wheel scrolling jumps to the top during generation (Windows) or causes infinite repetitive scrolling from the first message (Linux).
4. **[MCP installation OOM crash on macOS](https://github.com/QwenLM/qwen-code/issues/6004)**: The CLI crashes with a V8 memory allocation failure (Scavenge during sweeping) when executing the installation of certain MCP servers like `dsphper/lanhu-mcp`.
5. **[Auto enter Plan mode from Yolo mode regression](https://github.com/QwenLM/qwen-code/issues/5970)**: Starting the agent in YOLO mode (`qwen -y`) unexpectedly reverts to Plan mode, halting autonomous execution to ask for file read permissions.
6. **[/auth config changes don't persist to new sessions](https://github.com/QwenLM/qwen-code/issues/5979)**: Updating model provider configurations via `/auth` works for the current session, but new sessions fail with 401 errors, indicating the new API keys are not saved properly.
7. **[read_file UI downgrade hides file names](https://github.com/QwenLM/qwen-code/issues/6014)**: The UI now only displays "read 1 file" instead of showing the actual file name, reducing transparency during agent execution.
8. **[Subagent leaks `<analysis>`/`<summary>` tags](https://github.com/QwenLM/qwen-code/issues/6023)**: Internal XML-style tags from subagent final results are leaking into the parent context, breaking daemon UI markdown rendering and polluting the conversation history.
9. **[GLM-5.2 leaks thinking text as normal output](https://github.com/QwenLM/qwen-code/issues/6007)**: When using the GLM-5.2 model via an OpenAI-compatible provider, internal reasoning and stray `</think>` tags are emitted as visible assistant output.
10. **[Configurable compaction model request](https://github.com/QwenLM/qwen-code/issues/5956)**: Users request a `model.compactionModel` setting to use cheaper, smaller models for context auto-compaction, preventing expensive primary models from burning context windows on summarization.

## 4. Key PR Progress
1. **[Sanitize subagent result tags](https://github.com/QwenLM/qwen-code/pull/6027)**: Strips internal `<analysis>` blocks from subagent transcripts before feeding them back into the parent agent context, fixing UI rendering breaks.
2. **[Prioritize auth-modified env vars](https://github.com/QwenLM/qwen-code/pull/5980)**: Fixes the `/auth` persistence bug by ensuring environment variables modified during a session take precedence over system env vars in subsequent sessions.
3. **[Autonomous mode for bare /loop](https://github.com/QwenLM/qwen-code/pull/5991)**: Upgrades the `/loop` command so that running it without a prompt or interval arms a self-paced autonomous loop for background task maintenance.
4. **[Replace all emoji with Unicode text symbols in TUI](https://github.com/QwenLM/qwen-code/pull/5999)**: Completes the TUI emoji cleanup by replacing width-2 emojis with width-1 Unicode text symbols to fix terminal alignment and rendering glitches.
5. **[Default to virtualized terminal history](https://github.com/QwenLM/qwen-code/pull/5738)**: Turns on the in-app scrollable history viewport by default for interactive CLI sessions to improve scrollback performance.
6. **[Subtract reserved output tokens for compression thresholds](https://github.com/QwenLM/qwen-code/pull/5957)**: Fixes a bug where auto-compression failed to trigger before API 400 errors when `max_tokens` escalated to 64K, by correctly calculating the effective input budget.
7. **[Web-shell mobile sidebar drawer](https://github.com/QwenLM/qwen-code/pull/6003)**: Replaces the hidden sidebar on mobile viewports with an overlay drawer pattern, enabling session switching on mobile browsers.
8. **[Route suggestion-level /review findings to updatable PR comment](https://github.com/QwenLM/qwen-code/pull/5786)**: Consolidates non-critical "Suggestion" review findings into a single, patchable issue comment, keeping critical findings as inline code comments.
9. **[Resumable /acp session stream](https://github.com/QwenLM/qwen-code/pull/5852)**: Wires the `/acp` Streamable-HTTP session event stream into the daemon's event-replay engine, supporting `Last-Event-ID` for seamless reconnects.
10. **[Secret Disclosure mandate for broad file tasks](https://github.com/QwenLM/qwen-code/pull/5550)**: Adds safeguards to prevent the agent from sweeping secret-bearing files (like `.env` or private keys) into world-readable destinations during broad copy/sync tasks.

## 5. Feature Request Clusters
* **Daemon & Channel Management**: Strong push for expanding `qwen serve` capabilities, including hot-reloadable channels for DingTalk/Feishu/Telegram ([#6010](https://github.com/QwenLM/qwen-code/issues/6010)), daemon-managed channel workers via CLI flags ([#5976](https://github.com/QwenLM/qwen-code/issues/5976)), and HTTPS/TLS support for secure LAN access ([#6001](https://github.com/QwenLM/qwen-code/issues/6001)).
* **Autonomous & Background Execution**: Requests to enhance background automation, such as adding autonomous modes to `/loop` ([#5990](https://github.com/QwenLM/qwen-code/issues/5990)) and implementing a comprehensive hot-reload system for skills, MCP, and LSP servers without restarting the session ([#3696](https://github.com/QwenLM/qwen-code/issues/3696)).
* **Cost & Context Optimization**: Focus on reducing API spend and managing context efficiently, including configurable compaction models ([#5956](https://github.com/QwenLM/qwen-code/issues/5956)), inline model switching via `/model <id> <prompt>` ([#5967](https://github.com/QwenLM/qwen-code/issues/5967)), and extending bundled skills without copying the whole file ([#2379](https://github.com/QwenLM/qwen-code/issues/2379)).
* **UI/UX & Accessibility**: Improvements for diverse environments, such as mobile-responsive web shells ([#6000](https://github.com/QwenLM/qwen-code/issues/6000)), excluding line numbers when copying code blocks from the TUI ([#6024](https://github.com/QwenLM/qwen-code/issues/6024)), and project-local todo persistence ([#5928](https://github.com/QwenLM/qwen-code/pull/5928)).

## 6. Developer Pain Points
* **TUI Rendering Instability**: Terminal UI rendering remains a major friction point. Developers report severe scrolling glitches (jumping to the top on Windows, infinite scrolling on Linux) and UI flicker during compact mode transitions, disrupting the core interactive CLI experience.
* **API & Streaming Timeouts**: Following the v0.19.3 update, users are frustrated by frequent "No stream activity" and "Streaming setup timeout" errors, particularly when the model enters a thinking phase and fails to emit chunks within the hardcoded time limits.
* **Context & Token Inefficiencies**: Developers are highly sensitive to token billing and context management. Pain points include avoidable prompt-cache misses with Anthropic providers, inaccurate subagent token counting, and the high cost of using the primary active model for auto-compaction summarization.
* **State & Configuration Persistence**: Workflow continuity is frequently broken by state management bugs, notably `/auth` API key updates failing to persist to new sessions (resulting in 401 errors) and daemon memory remaining empty after long-running background sessions.

</details>