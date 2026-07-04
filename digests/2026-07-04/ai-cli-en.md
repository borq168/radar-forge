# AI CLI Tools Community Digest 2026-07-04

> Generated: 2026-07-04 00:27 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem: Daily Cross-Tool Comparison Report (2026-07-04)

## 1. Daily Cross-Tool Overview
Today's activity across the AI CLI ecosystem was heavily focused on subagent reliability, execution sandboxing, and terminal UI refinements. Claude Code and OpenCode saw the highest critical issue volumes, grappling with severe memory leaks in multi-agent workflows and SaaS billing integration errors, respectively. Meanwhile, OpenAI Codex and Gemini CLI maintainers shipped extensive security and sandbox hardening patches, and Qwen Code advanced its daemon UI and KV-cache optimizations. GitHub Copilot CLI and Kimi Code CLI saw minimal to no codebase changes, with Copilot users primarily reporting TUI and BYOK authentication regressions.

## 2. Activity Comparison

| Tool | Issues (Updated/Hot) | PRs (Updated/Merged) | Releases |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Hot | 7 (4 substantive, 2 dupes, 1 junk) | 2 (v2.1.200, v2.1.201) |
| **OpenAI Codex** | 10 Hot | 10 | 1 (rust-v0.143.0-alpha.35) |
| **Gemini CLI** | 10 Hot | 10 | 1 (v0.51.0-nightly) |
| **GitHub Copilot CLI**| 31 updated (10 Hot) | 0 | 0 |
| **Kimi Code CLI** | 0 | 0 | 0 |
| **OpenCode** | 10 Hot | 10 | 0 |
| **Qwen Code** | 10 Hot | 10 | 3 (v0.19.6, nightly, cua-driver) |

## 3. Shared Feature Directions
*   **Subagent Orchestration & Reliability:** Multiple communities are struggling with multi-agent state and resource management. Claude Code users report OOM crashes and unbounded memory growth in nested subagents; Gemini CLI users note subagents masking `MAX_TURNS` failures and hanging indefinitely; OpenCode maintainers are patching sub-agent task ID surfacing for interrupted sessions.
*   **Execution Sandboxing & Security Hardening:** Securing the shell execution environment is a shared priority. OpenAI Codex merged multiple PRs for Windows sandbox and Git transport isolation; Gemini CLI downgraded shell parameter expansion to require confirmation and proposed zero-dependency OS sandboxing; Qwen Code patched a subprocess isolation bypass in its `transform_data` tool.
*   **Model Context Protocol (MCP) Integration:** As MCP adoption grows, specification and integration edge cases are surfacing. GitHub Copilot CLI users reported ignored cursor-based pagination in `tools/list`; OpenCode is actively wiring its V2 execute tool for MCP; Gemini CLI fixed cross-server resource confusion and documented environment variable expansion for MCP servers.
*   **Context Compaction & Memory Management:** Long-running task reliability is being hindered by context management bugs. OpenAI Codex users report automatic compaction dropping `AGENTS.md` rules; Qwen Code is dealing with KV-cache invalidation during tool searches; Claude Code users experience session wedging after manual `/compact` commands.

## 4. Differentiation Analysis
*   **Claude Code:** Focuses heavily on developer workflow guardrails (e.g., changing default idle timeouts to prevent auto-continuation, shifting default permissions to "Manual") and scaling multi-agent architectures. Target users appear to be enterprise developers requiring strict safety controls and complex subagent fan-out.
*   **OpenAI Codex:** Highly focused on execution security, Git transport isolation, and Windows environment hardening. The technical approach prioritizes strict trust boundaries and preventing sandbox escapes, catering to autonomous coding agents operating in enterprise Git workflows.
*   **Gemini CLI:** Emphasizes native OS integration (zero-dependency sandboxing, AST-aware file reads) and preventing "thought leakage" in agent histories. The approach targets developers wanting deep, precise codebase navigation and lightweight shell execution.
*   **OpenCode:** Driving a major V2 architecture shift centered around MCP and TUI Form services. Currently, its differentiation is heavily tied to customizable MCP ecosystems and interactive TUI prompts, though it is currently bogged down by SaaS/billing friction.
*   **Qwen Code:** Focuses on regional/enterprise integrations (WeCom intelligent robots, Taobao mirror sync), KV-cache optimization, and daemon web-UIs. It targets enterprise users in specific regions and developers deploying self-hosted/local models.
*   **GitHub Copilot CLI:** Currently focused on terminal personalization (custom themes, alt-screen toggles) and Bring Your Own Key (BYOK) provider support. It targets GitHub ecosystem users wanting deep terminal customization and custom model routing, though development velocity appears stalled today.

## 5. Community Activity Notes
*   **Highest Code Output:** Qwen Code (3 releases, 10 PRs), OpenAI Codex (10 PRs, 1 alpha release), and Gemini CLI (10 PRs, 1 nightly release) demonstrated the highest maintainer code output today.
*   **Highest User Friction:** Claude Code and OpenCode show the most critical user-facing friction. Claude Code's subagent OOM crashes and OpenCode's billing/subscription errors are driving high engagement and urgent bug reports.
*   **Activity Gap:** GitHub Copilot CLI had 31 issues updated but zero PRs merged or updated, indicating a temporary gap between user reports and maintainer code output. Kimi Code CLI recorded zero activity across all metrics.

## 6. Evidence-Backed Observations
1.  **Subagent orchestration is hitting resource and state limits:** Evidence from Claude Code (OOM crashes, memory leaks in nested fan-outs), Gemini CLI (subagents masking `MAX_TURNS` limits, generalist agent hangs), and OpenCode (sub-agent task ID interruption handling) indicates that scaling multi-agent workflows is currently straining CLI resource management and state tracking.
2.  **Execution sandboxing remains a primary security battleground, particularly on Windows:** OpenAI Codex (Windows sandbox errors, PowerShell parser hardening), Qwen Code (`transform_data` isolation bypass), and Gemini CLI (shell parameter expansion security) all show active efforts to patch sandbox escapes and secure shell execution environments.
3.  **Context window and compaction mechanics are degrading long-running task reliability:** OpenAI Codex (context compaction forgetting `AGENTS.md` rules), Qwen Code (KV-cache invalidation on tool search, incorrect context window calculations), and Claude Code (manual `/compact` wedging sessions) demonstrate that managing LLM context over long sessions remains a fragile component across tools.
4.  **No clear cross-tool signal on TUI standardization:** While GitHub Copilot CLI users are requesting alt-screen toggles and custom themes, and OpenCode is integrating V2 Form services into its TUI, these are isolated UX preferences rather than a unified ecosystem direction. Terminal UI development remains highly fragmented and tool-specific.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest: 2026-07-04

## 1. Today's Update Brief
The Claude Code repository saw high activity addressing agent memory management, user interaction timeouts, and permission defaults, highlighted by the release of v2.1.200 and v2.1.201. Developers are actively reporting out-of-memory (OOM) crashes during multi-subagent workflows and requesting better configuration for idle timeouts, while maintainers shipped fixes to prevent auto-continuation without user input.

## 2. Releases
*   **[v2.1.201](https://github.com/anthropics/claude-code/releases/tag/v2.1.201)**: Claude Sonnet 5 sessions no longer use the mid-conversation system role for harness reminders.
*   **[v2.1.200](https://github.com/anthropics/claude-code/releases/tag/v2.1.200)**: `AskUserQuestion` dialogs no longer auto-continue by default; users must now opt into an idle timeout via `/config`. The "default" permission mode has been changed to "Manual" across the CLI, `--help`, VS Code, and JetBrains integrations.

## 3. Hot Issues
1.  **[BUG] AskUserQuestion: "No response after 60s — continued without an answer" ([#73125](https://github.com/anthropics/claude-code/issues/73125))**
    *   *Impact:* The tool auto-selected default answers after 60 seconds of idle time, executing unintended actions. This highly upvoted issue (353 👍) drove the default behavior change in v2.1.200.
2.  **[FEATURE] Sync Skills between Claude Desktop and Claude Code CLI ([#20697](https://github.com/anthropics/claude-code/issues/20697))**
    *   *Impact:* Developers are frustrated by fragmented skill management across environments, requesting a unified sync mechanism (125 👍).
3.  **[FEATURE] Support diff comparison against branches other than main ([#23626](https://github.com/anthropics/claude-code/issues/23626))**
    *   *Impact:* Limits code review and PR workflows for developers working on feature branches, as the tool currently defaults to comparing against `main` (78 👍).
4.  **[BUG] OOM crash under multi-subagent load: subagent CLI processes grow to ~6.5 GB RSS each ([#74001](https://github.com/anthropics/claude-code/issues/74001))**
    *   *Impact:* Running 5–7 background agents causes individual CLI child processes to consume massive memory, leading to host-level OOM kills on Linux machines.
5.  **[BUG] Deeply-nested subagent fan-out causes unbounded memory growth → host-level OOM ([#74035](https://github.com/anthropics/claude-code/issues/74035))**
    *   *Impact:* A self-reported crash analysis showing that nested subagent orchestration leaks memory, compounding the multi-subagent OOM issues.
6.  **[Bug] Assistant hallucinates fake user/system turns with stop_reason=null ([#70315](https://github.com/anthropics/claude-code/issues/70315))**
    *   *Impact:* A persistent regression on Opus 4.8 where the model hallucinates conversation turns, breaking the interaction flow and rendering the model unusable for the reporter.
7.  **[BUG] Desktop app ignores `permissions.allow` rules ([#73587](https://github.com/anthropics/claude-code/issues/73587))**
    *   *Impact:* The Desktop app prompts for every action, even in allowed directories, breaking automated workflows and ignoring user configurations.
8.  **[BUG] Worktree isolation inflates spawned-shell env past ARG_MAX → E2BIG ([#74032](https://github.com/anthropics/claude-code/issues/74032))**
    *   *Impact:* Dispatching a subagent with worktree isolation corrupts the parent session's environment variables, causing all subsequent Bash tool calls to fail unrecoverably.
9.  **[BUG] Contradictory 'session limit resets at X' times; background subagents die terminally ([#74006](https://github.com/anthropics/claude-code/issues/74006))**
    *   *Impact:* Rate limit projections silently roll forward and provide contradictory reset times, while background subagents fail without notifying the parent session.
10. **[BUG] Desktop app: session permanently wedged after manual /compact ([#74017](https://github.com/anthropics/claude-code/issues/74017))**
    *   *Impact:* Triggering a manual `/compact` in the Desktop app causes the session to hang indefinitely due to a deferred local-command echo tracking failure.

## 4. Key PR Progress
*(Note: 7 PRs were updated in the last 24h; 4 are substantive, 2 are closed duplicates, and 1 is invalid/junk).*

1.  **fix(security-guidance): allow null findings in StructuredOutput schema ([#74021](https://github.com/anthropics/claude-code/pull/74021))**
    *   Fixes the agentic commit reviewer's `FINDINGS_SCHEMA` to accept `null` when no vulnerabilities are found, preventing wasted retry turns.
2.  **enhance(feature-dev): add system design patterns to code-architect agent ([#74010](https://github.com/anthropics/claude-code/pull/74010))**
    *   Adds system design pattern analysis, edge cases, and operational context steps to the `code-architect` agent in the `feature-dev` plugin.
3.  **fix(plugin-dev): use "asks to" in skill-development descriptions ([#74009](https://github.com/anthropics/claude-code/pull/74009))**
    *   Standardizes plugin-dev skill descriptions by replacing "wants to" with "asks to" for consistency across all 7 plugins.
4.  **fix init-firewall.sh crash from ipset when a domain resolves to repeated IPs ([#42701](https://github.com/anthropics/claude-code/pull/42701))**
    *   Adds the `-exist` switch to `ipset` to prevent devcontainer launch failures when a domain resolves to duplicate IP addresses.
5.  *Closed Duplicate:* [#74007](https://github.com/anthropics/claude-code/pull/74007) (Duplicate of #74010).
6.  *Closed Duplicate:* [#73999](https://github.com/anthropics/claude-code/pull/73999) (Duplicate of #74009).
7.  *Invalid/Junk:* [#66854](https://github.com/anthropics/claude-code/pull/66854) (Title: "toekn", empty body).

## 5. Feature Request Clusters
*   **Timeout and Idle Configuration:** Multiple requests to configure or disable the 60-second idle timeout for `AskUserQuestion` auto-continue ([#73125](https://github.com/anthropics/claude-code/issues/73125), [#73487](https://github.com/anthropics/claude-code/issues/73487)) and to make the `idle_prompt` notification hook timeout configurable ([#13922](https://github.com/anthropics/claude-code/issues/13922)).
*   **Cross-Platform & Environment Syncing:** Requests to sync Skills seamlessly between Claude Desktop and the CLI ([#20697](https://github.com/anthropics/claude-code/issues/20697)), alongside requests for native binary support for Linux RISC-V (`riscv64`) architectures ([#59813](https://github.com/anthropics/claude-code/issues/59813)).
*   **Git & Diff Enhancements:** Support for running diff comparisons against branches other than `main` to better support feature-branch workflows ([#23626](https://github.com/anthropics/claude-code/issues/23626)).
*   **Terminal UI Navigation:** Requests for a native way to jump/navigate to previous user prompts within the current conversation without relying on slow terminal scrollback ([#63901](https://github.com/anthropics/claude-code/issues/63901)).

## 6. Developer Pain Points
*   **Subagent Memory Leaks & Orchestration Failures:** The most critical technical pain point is the instability of background subagents. Developers report unbounded memory growth leading to host-level OOM crashes ([#74001](https://github.com/anthropics/claude-code/issues/74001), [#74035](https://github.com/anthropics/claude-code/issues/74035)). Additionally, subagents frequently fail silently, get stuck in "Running" states indefinitely ([#73916](https://github.com/anthropics/claude-code/issues/73916)), or suffer from contradictory rate-limit projections ([#74006](https://github.com/anthropics/claude-code/issues/74006)).
*   **Overzealous Auto-Continuation:** Prior to v2.1.200, the `AskUserQuestion` tool auto-selecting default answers after 60 seconds of inactivity caused severe workflow disruptions, executing unintended code paths without user consent ([#73125](https://github.com/anthropics/claude-code/issues/73125)).
*   **Desktop App Integration Regressions:** Users of the Claude Desktop app are experiencing significant friction, including the app ignoring `permissions.allow` rules ([#73587](https://github.com/anthropics/claude-code/issues/73587)), failing to render user-facing hook feedback that the CLI handles correctly ([#66555](https://github.com/anthropics/claude-code/issues/66555)), and permanently wedging after manual `/compact` commands ([#74017](https://github.com/anthropics/claude-code/issues/74017)).
*   **Safety Guardrail False Positives:** Developers are reporting that routine code reviews, infrastructure tasks, and simple bug-fix audits are being incorrectly flagged by content safety guardrails. This forces fallback to older models (like Opus 4.8) or blocks work entirely, causing frustration over "demo-like" reliability in production environments ([#74047](https://github.com/anthropics/claude-code/issues/74047), [#74046](https://github.com/anthropics/claude-code/issues/74046), [#74045](https://github.com/anthropics/claude-code/issues/74045)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-07-04

## 1. Today's Update Brief
The OpenAI Codex repository saw active maintenance heavily focused on extensive sandbox, Git transport, and execution security hardening, alongside a new alpha release. Community discussions are currently dominated by API routing errors involving the `X-OpenAI-Internal-Codex-Responses-Lite` header on GPT-5.5, alongside user observations regarding reasoning-token clustering and context compaction regressions during long tasks.

## 2. Releases
- **[rust-v0.143.0-alpha.35](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.35)**: A new alpha version (`0.143.0-alpha.35`) was published in the last 24 hours. No detailed changelog was provided in the release notes.

## 3. Hot Issues
1. **[#30224](https://github.com/openai/codex/issues/30224) - `X-OpenAI-Internal-Codex-Responses-Lite` model unsupported error**: The API returns a model unsupported error when using this internal header. This is currently the most discussed issue (68 comments), heavily impacting Plus subscribers on Windows.
2. **[#30364](https://github.com/openai/codex/issues/30364) - GPT-5.5 reasoning-token clustering degrading complex tasks**: Users observed `gpt-5.5` responses disproportionately clustering at exactly 516, 1034, and 1552 reasoning tokens, coinciding with lower overall reasoning quality (37 comments, 53 👍).
3. **[#7291](https://github.com/openai/codex/issues/7291) - VSCode extension fails to revert changes**: A persistent bug in the VSCode extension (v0.4.46) on macOS where Codex fails to properly revert applied code changes (47 comments).
4. **[#20214](https://github.com/openai/codex/issues/20214) - Codex App freezes/stutters on Windows 11**: The desktop application frequently stutters despite sufficient system resources (AMD Ryzen 5, 32GB RAM), disrupting the local development workflow (27 comments, 40 👍).
5. **[#30009](https://github.com/openai/codex/issues/30009) - `apply_patch` fails with Windows sandbox error**: File edits through the agent fail on Windows due to a sandbox-related error, blocking core autonomous coding functionality (21 comments).
6. **[#25792](https://github.com/openai/codex/issues/25792) - Context compaction forgets AGENTS rules**: A critical long-task reliability issue where automatic context compaction drops `AGENTS.md` rules, causing task progress to regress from 97% back to 42% (12 comments).
7. **[#30406](https://github.com/openai/codex/issues/30406) - GPT-5.5 fails with Responses-Lite while GPT-5.4 works**: Following a macOS app update, selecting GPT-5.5 immediately fails with the Responses-Lite unsupported error, while GPT-5.4 functions normally (10 comments).
8. **[#26429](https://github.com/openai/codex/issues/26429) - Computer Use plugin unavailable after Desktop restart**: The Computer Use plugin repeatedly disappears and becomes unavailable after restarting Codex Desktop on macOS (9 comments).
9. **[#31054](https://github.com/openai/codex/issues/31054) - Desktop consumes Exec quota while idle**: Users report that leaving Codex Desktop open causes Exec quota to continuously decrease (~1% at regular intervals) even with no visible background activity or user interaction (2 comments).
10. **[#30137](https://github.com/openai/codex/issues/30137) - Perceived intelligence reduction in GPT-5.5**: Pro users report that GPT-5.5 feels downgraded to 5.3 levels of intelligence over the last few days, struggling with previously manageable tasks (6 comments).

## 4. Key PR Progress
1. **[#31058](https://github.com/openai/codex/pull/31058) - Retry model capacity errors**: Implements retries for structured model-capacity failures on the same turn (up to three times) with jittered delays of 30s, 2m, and 5m.
2. **[#30854](https://github.com/openai/codex/pull/30854) - Block selected merge drivers before three-way patch application**: Prevents `git apply --3way` from running custom, repository-selected merge drivers that could damage unrelated staged work.
3. **[#30628](https://github.com/openai/codex/pull/30628) - Trust protected PowerShell parsers and reject untrusted wrappers**: Hardens Windows execution by ensuring model- or repository-selected PowerShell executables cannot bypass command-policy and approval checks.
4. **[#28760](https://github.com/openai/codex/pull/28760) - Isolate marketplace Git transport from workspace config**: Prevents marketplace clone/fetch operations from inheriting untrusted workspace URL rewrites, SSH commands, or credential helpers.
5. **[#29470](https://github.com/openai/codex/pull/29470) - Deny implicit transport for local-only Git operations**: Ensures local metadata, diff, and patch operations in partial clones do not unexpectedly contact a remote via transport helpers.
6. **[#30896](https://github.com/openai/codex/pull/30896) - Centralize repository authority for Git helper launches**: Creates an operation-scoped trust boundary for Git executables to speed up and secure multi-step operations, particularly on Windows.
7. **[#30844](https://github.com/openai/codex/pull/30844) - Confine staged patch paths to the parent worktree**: Resolves parent directories for patch paths to prevent Git staging from following symlinks, junctions, or submodules outside the validated worktree.
8. **[#30990](https://github.com/openai/codex/pull/30990) - Harden namespace-aware executable policy matching**: Prevents sandbox bypasses on Windows by correctly handling verbatim and device paths that preserve trailing periods/spaces.
9. **[#30488](https://github.com/openai/codex/pull/30488) - Show reset details in redemption picker**: Updates the CLI to display available reset credits, their expiration dates, and consumption order when users open the redemption menu.
10. **[#30983](https://github.com/openai/codex/pull/30983) - Isolate one-shot command approval retries**: Ensures that a one-shot approval decision authorizes only the specific callback that requested it, preventing it from entering the session approval cache.

## 5. Feature Request Clusters
- **Subagent and Model Routing Customization**: Requests to allow spawned subagents to run with a different model, provider, or named profile than the parent session, enabling more granular control over multi-agent workflows ([#14039](https://github.com/openai/codex/issues/14039)).
- **Multi-Repository Workspace Support**: Requests for the Codex App to natively support parent workspace folders that contain multiple independent Git repositories, facilitating monorepo or multi-project management ([#26338](https://github.com/openai/codex/issues/26338)).
- **Cross-Client Synchronization**: Feature requests for real-time state and session synchronization between the Codex Desktop App and the Codex CLI/Client to allow seamless handoffs between interfaces ([#31062](https://github.com/openai/codex/issues/31062)).

## 6. Developer Pain Points
- **API Routing and Model Availability**: There is widespread frustration regarding the `X-OpenAI-Internal-Codex-Responses-Lite` header rejecting GPT-5.5. This breaks workflows for Plus and Pro users across macOS, Windows, and the CLI ([#30224](https://github.com/openai/codex/issues/30224), [#30406](https://github.com/openai/codex/issues/30406), [#30595](https://github.com/openai/codex/issues/30595)).
- **Context Compaction and Long-Task Reliability**: Developers are hitting walls with automatic context compaction. Issues include the system forgetting `AGENTS.md` rules, causing massive task progress regressions ([#25792](https://github.com/openai/codex/issues/25792)), and aggressive compaction triggering prematurely ([#31033](https://github.com/openai/codex/issues/31033)).
- **Windows Sandbox and Execution Quirks**: Windows users face persistent friction, including `apply_patch` sandbox failures ([#30009](https://github.com/openai/codex/issues/30009)), visible PowerShell windows flashing during background polling ([#26613](https://github.com/openai/codex/issues/26613)), and Exec quota draining while the desktop app is completely idle ([#31054](https://github.com/openai/codex/issues/31054)).
- **Model Behavior Observations**: Users are closely monitoring GPT-5.5 for potential regressions, specifically noting fixed-boundary reasoning-token clustering (516/1034/1552) that degrades complex task performance ([#30364](https://github.com/openai/codex/issues/30364)) and a general perceived drop in baseline intelligence ([#30137](https://github.com/openai/codex/issues/30137)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-07-04

## 1. Today's Update Brief
The Gemini CLI repository saw active maintenance focusing on agent reliability, security policies, and core execution fixes. A new nightly release introduced the caretaker egress cloud run service skeleton, while open pull requests addressed thought leakage, shell parameter expansion security, and MCP resource resolution.

## 2. Releases
*   **v0.51.0-nightly.20260703.gf7af4e518**: This nightly build merges the caretaker egress cloud run service skeleton ([#28167](https://github.com/google-gemini/gemini-cli/pull/28167)), providing a lightweight HTTP server to receive verified action event messages pushed via Cloud Pub/Sub from the Triage Worker.

## 3. Hot Issues
1.  **Subagent MAX_TURNS masking** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hits the maximum turn limit before completing analysis, hiding interruptions.
2.  **Zero-Dependency OS Sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)): A proposal to leverage Gemini 3's native bash affinity by chaining standard POSIX tools in a zero-dependency sandboxed environment to improve security and UX.
3.  **Component Level Evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)): An epic tracking the expansion of behavioral evaluation tests across supported Gemini models to ensure robust component-level testing.
4.  **AST-aware file reads and mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): Investigation into using AST-aware tools for precise method bound reading and codebase mapping to reduce token noise and misaligned reads.
5.  **Generalist agent hangs** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): The CLI hangs indefinitely (up to an hour) when deferring to the generalist subagent for simple tasks like folder creation.
6.  **Underutilization of skills and sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)): Users report the model ignores custom skills and sub-agents unless explicitly instructed to use them, even for highly related tasks.
7.  **Auto Memory low-signal retries** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): Auto Memory indefinitely retries processing low-signal sessions that the extraction agent intentionally skips, causing them to be surfaced repeatedly.
8.  **Shell execution "Waiting input" hang** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): Simple CLI commands complete successfully, but the shell interface remains stuck in an "Awaiting user input" state.
9.  **Browser subagent Wayland failure** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)): The browser subagent fails to initialize or complete tasks when running in Wayland display server environments.
10. **Native file tools for task tracker** ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000)): Experimentation with using native file tools instead of current mechanisms for creating and maintaining the internal task tracker.

## 4. Key PR Progress
1.  **Shell parameter expansion security** ([#28175](https://github.com/google-gemini/gemini-cli/pull/28175)): Downgrades allowlisted shell commands containing parameter expansion to require confirmation in interactive mode, and denies them entirely in YOLO/non-interactive mode.
2.  **Thought leakage fix** ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971)): Strips internal monologues and reasoning thoughts from scrubbed history turns to prevent the model from emulating scratchpad thoughts or entering infinite loop monologues.
3.  **Bot patch artifact approval** ([#28178](https://github.com/google-gemini/gemini-cli/pull/28178)): Requires an explicit approval marker before the publish job consumes `bot-changes.patch`, keeping the reasoning-to-publish boundary fail-closed.
4.  **MCP env expansion docs** ([#28248](https://github.com/google-gemini/gemini-cli/pull/28248)): Documents supported (`$VAR`, `${VAR}`) and unsupported (`{{VAR}}`, `~`) environment variable expansion syntax for `mcpServers`.
5.  **ls ignore globs relative path** ([#28247](https://github.com/google-gemini/gemini-cli/pull/28247)): Updates `ls` ignore patterns to match against workspace-relative paths using `picomatch` for proper `**` glob support.
6.  **VS Code diff tab focus** ([#28183](https://github.com/google-gemini/gemini-cli/pull/28183)): Fixes an issue where approving a file edit in the VS Code companion extension closes the diff preview and steals keyboard focus from the integrated terminal.
7.  **AGENTS.md out-of-the-box support** ([#28240](https://github.com/google-gemini/gemini-cli/pull/28240)): Updates the core `memoryTool` to include `AGENTS.md` alongside `GEMINI.md` as a default context file without requiring explicit `settings.json` configuration.
8.  **Stale update_topic calls** ([#28153](https://github.com/google-gemini/gemini-cli/pull/28153)): Prevents orphaned `update_topic` tool calls from overwriting the shared `topicState` singleton after a user runs `/clear` to reset the session.
9.  **Skill resource .gitignore respect** ([#28149](https://github.com/google-gemini/gemini-cli/pull/28149)): Ensures skill folder structure listings respect `.gitignore` and `.geminiignore` when sharing available resources with the model.
10. **MCP resource cross-server confusion** ([#28143](https://github.com/google-gemini/gemini-cli/pull/28143)): Fixes `read_mcp_resource` returning the wrong server's content when multiple MCP servers expose a resource at the exact same URI.

## 5. Feature Request Clusters
*   **Agent Autonomy & Tool Usage:** Requests for the model to proactively use custom skills and sub-agents without explicit prompting ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and experiments with using native file tools for task tracking ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
*   **Advanced Codebase Navigation:** Investigations into AST-aware file reads, search, and mapping to improve context precision, reduce token noise, and navigate codebases more effectively ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
*   **Execution Environment & Sandboxing:** Proposals to leverage the model's bash affinity via zero-dependency OS sandboxing and post-execution intent routing to improve security without compromising UX ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
*   **Observability & Sharing:** Requests to make subagent trajectories visible and shareable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and include subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

## 6. Developer Pain Points
*   **Execution Hangs & Stuck Prompts:** Developers frequently report the CLI hanging indefinitely. This occurs when deferring to the generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), when simple shell commands complete but remain stuck in "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and during interactive prompts like Vite app creation ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
*   **Subagent & Agent Reliability:** Subagents mask failures by reporting "GOAL" success after hitting `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), ignore `settings.json` overrides like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and sometimes run without permission despite being disabled in config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
*   **Destructive & Messy Workspace Behavior:** The model occasionally uses destructive commands like `git reset --force` when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) and generates temporary edit scripts in random directories, creating cleanup overhead for clean commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Auto Memory Inefficiencies:** The Auto Memory system struggles with low-signal session retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silent skipping of invalid inbox patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and potential secret leakage before redaction occurs in the model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest (2026-07-04)

## 1. Today's Update Brief
The GitHub Copilot CLI repository saw moderate issue activity over the last 24 hours, with 31 issues updated and no new releases or pull requests. Community focus centered on terminal rendering quirks, Bring Your Own Key (BYOK) authentication regressions, and Model Context Protocol (MCP) integration bugs.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **Disable Alt-Screen Views ([#1799](https://github.com/github/copilot-cli/issues/1799))**
   Users are requesting a way to revert the recently introduced alt-screen TUI mode, citing workflow disruptions. This issue has gathered significant engagement (11 comments, 7 👍).
2. **Model "gpt-5.3-codex" Unavailable ([#3997](https://github.com/github/copilot-cli/issues/3997))**
   A runtime error (`session.create failed`) is blocking users from running Copilot as an agent with the `gpt-5.3-codex` model, halting code generation workflows.
3. **Custom Theme Support ([#1504](https://github.com/github/copilot-cli/issues/1504))**
   A highly requested feature (20 👍) asking for the ability to create, configure, and share custom JSON-based themes via the `/theme` command.
4. **Repeated CLI Crashes on Windows ([#4026](https://github.com/github/copilot-cli/issues/4026))**
   A severe stability issue where the native runtime crashes unpredictably during interactive use on Windows. The reporter notes this has been unresolved across multiple versions since May 2026.
5. **BYOK Rejected in `--acp` Mode ([#4016](https://github.com/github/copilot-cli/issues/4016))**
   A regression in versions 1.0.61–1.0.68 where custom providers configured via `COPILOT_PROVIDER_*` are rejected with an "Authentication required" error during headless `--acp --stdio` sessions.
6. **Voice Mode ASR Models Fail Silently ([#4024](https://github.com/github/copilot-cli/issues/4024))**
   The `/voice` command successfully captures audio, but all three bundled `nemotron` speech models return empty transcriptions due to a suspected routing bug in Foundry Local Core.
7. **MCP `tools/list` Pagination Ignored ([#4006](https://github.com/github/copilot-cli/issues/4006))**
   The CLI fails to follow the MCP specification for cursor-based pagination. If an MCP server returns a `nextCursor`, subsequent pages of tools are silently dropped.
8. **`web_fetch` Fails with HTTP Proxies ([#4019](https://github.com/github/copilot-cli/issues/4019))**
   The built-in web retrieval tools and `/research` command fail in corporate WSL environments that require mandatory HTTP proxies, blocking enterprise web-agent workflows.
9. **Session Recall Crosses Project Boundaries ([#4025](https://github.com/github/copilot-cli/issues/4025))**
   A context/privacy bug where asking a fresh CLI session to recall recent work returns history from a completely different project, due to global recency ordering in `~/.copilot/session-state.json`.
10. **TUI Rendering Corrupted When Adding MCP Server ([#4014](https://github.com/github/copilot-cli/issues/4014))**
    Running `/mcp add` on Windows causes severe visual corruption in the terminal interface, making it difficult to configure new MCP servers.

## 4. Key PR Progress
No pull requests were updated or merged in the last 24 hours.

## 5. Feature Request Clusters
* **Terminal UI and Customization:** Users are heavily focused on tailoring the TUI experience. Requests include adding custom shareable themes ([#1504](https://github.com/github/copilot-cli/issues/1504)), providing a toggle to disable the new alt-screen buffer ([#1799](https://github.com/github/copilot-cli/issues/1799)), and adding configurable scroll-speed/sensitivity settings for trackpad users ([#4018](https://github.com/github/copilot-cli/issues/4018)).
* **Headless and Non-Interactive Automation:** Developers want to integrate the CLI deeper into CI/CD and shell scripts. This includes requests to run `/init` in a non-interactive batched mode without hanging ([#4011](https://github.com/github/copilot-cli/issues/4011)), and fixing headless `--agent` dispatch so that `web`/`search` tool aliases correctly bind to tools ([#4023](https://github.com/github/copilot-cli/issues/4023)).
* **Asynchronous Slash Commands:** There is a push to make read-only slash commands like `/mcp show` and `/plugin list` execute asynchronously (similar to `/tasks`) so they can be checked without interrupting the agent's turn ([#3829](https://github.com/github/copilot-cli/issues/3829)).

## 6. Developer Pain Points
* **Clipboard and Mouse Selection Friction:** The new TUI scrollbar is corrupting mouse-selected text copies by appending padding spaces and a `┃` glyph to every line ([#4009](https://github.com/github/copilot-cli/issues/4009)). Additionally, macOS users report misleading "Copied to clipboard" notifications when selecting text without the Shift key ([#4010](https://github.com/github/copilot-cli/issues/4010)), and touch scrolling is entirely broken on Windows ([#3570](https://github.com/github/copilot-cli/issues/3570)).
* **BYOK and Custom Model Configuration:** Developers utilizing Bring Your Own Key (BYOK) setups are facing multiple roadblocks. Beyond the `--acp` authentication regression ([#4016](https://github.com/github/copilot-cli/issues/4016)), users are hitting errors when applying `--reasoning-effort max` to specific custom cloud models like `glm-5.2` ([#4012](https://github.com/github/copilot-cli/issues/4012)).
* **Plugin and Marketplace State Desync:** The plugin management system is exhibiting state contradictions. Users report being unable to remove registered plugins because the CLI falsely claims they are "not registered," despite being installed and usable ([#4021](https://github.com/github/copilot-cli/issues/4021)). Furthermore, IDE auto-connect falsely skips sessions as "already in use" after forking and closing a session ([#4020](https://github.com/github/copilot-cli/issues/4020)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-04

## 1. Today's Update Brief
Today's repository activity focuses heavily on advancing the V2 architecture, specifically wiring the execute tool for V2 MCP and integrating the new Form service into the TUI. Developers also submitted critical fixes for bash tool execution hangs and TUI performance, while the issue tracker saw a high volume of user reports regarding OpenCode Go subscription billing errors and free-tier model limits.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues
1. **[High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086)**: Users report severe CPU spikes over the last week, degrading performance to the point where running multiple sessions causes system-wide lag and slow mouse cursor reactions.
2. **[Insufficient balance in free model](https://github.com/anomalyco/opencode/issues/35142)**: Users attempting to use the "DeepSeek V4 Flash Free" model via the Sisyphus Ultraworker plugin are hitting insufficient balance errors, blocking free-tier workflows.
3. **[GitHub Copilot provider broken](https://github.com/anomalyco/opencode/issues/33696)**: After clearing the cache and completing the auth flow, the GitHub Copilot provider fails to discover any models, breaking integration for Copilot subscribers.
4. **[`/exit` in PowerShell exits the terminal](https://github.com/anomalyco/opencode/issues/26038)**: Typing `/exit` within the OpenCode TUI while using PowerShell inadvertently closes the entire PowerShell terminal window instead of just exiting the application.
5. **[`pkill -f` causes tool call hang in TUI](https://github.com/anomalyco/opencode/issues/25664)**: Executing commands like `pkill -f vim` via the bash tool causes the tool call to hang indefinitely until timeout, stalling the agent's execution loop.
6. **[Custom providers fail on Desktop (Electron)](https://github.com/anomalyco/opencode/issues/31909)**: Custom npm providers that function correctly in the CLI (Bun) fail immediately on OpenCode Desktop with a `ProviderInitError` due to an ESM directory import bug.
7. **[Cannot paste image path as text](https://github.com/anomalyco/opencode/issues/19892)**: When pasting a valid image path into the TUI for models that don't support images, the path is automatically parsed into an `[image1]` tag instead of remaining plain text.
8. **[Agent modifies files massively without validation](https://github.com/anomalyco/opencode/issues/35244)**: A user reports the agent ignored specific constraints (adding links to a menu) and aggressively modified dozens of unrelated files (CSP, SEO, JSON-LD) without creating backups.
9. **[Server keeps stale `project.worktree` after rename](https://github.com/anomalyco/opencode/issues/35240)**: When a project folder is renamed on the server host, the server retains the stale worktree path, causing remote Desktop clients to continuously attempt reopening the dead path.
10. **[OpenCode Go subscription isn't working](https://github.com/anomalyco/opencode/issues/35252)**: Multiple users (#35252, #35191, #35215) report that despite having active OpenCode Go subscriptions, they are receiving "Free Usage Exceeded" errors or upstream request failures when trying to use paid models.

## 4. Key PR Progress
1. **[feat(core): wire execute tool for v2 mcp](https://github.com/anomalyco/opencode/pull/35232)**: Makes `execute` the default MCP exposure path in V2, backing the core execute tool with CodeMode over MCP tools while preserving child call metadata.
2. **[fix(shell): bound bash-tool hangs via scope teardown](https://github.com/anomalyco/opencode/pull/35245)**: Resolves the bash tool hanging indefinitely when subprocesses fork grandchildren by implementing scope teardown instead of relying solely on Node's `close` event.
3. **[feat(tui): render forms and route question tool](https://github.com/anomalyco/opencode/pull/35189)**: Integrates the V2 Form service into the TUI, migrating the question tool to create forms via `Form.Service.ask` for better interactive prompts.
4. **[feat(tui): compact shell progress output](https://github.com/anomalyco/opencode/pull/35247)**: Publishes semantic progress snapshots from shell tools and renders them as a compact TUI progress bar, eliminating raw redraw spam in the terminal.
5. **[feat(console): enforce 10mb request body limit on zen api](https://github.com/anomalyco/opencode/pull/35237)**: Caps Zen API request bodies at 10MB, rejecting oversized declared content-lengths before reading to prevent resource exhaustion from arbitrarily large context payloads.
6. **[fix: surface task_id in interrupted tool error text](https://github.com/anomalyco/opencode/pull/35222)**: Includes the `task_id` in the error text when a sub-agent session is aborted, allowing the LLM to resume interrupted sub-agents via the Task tool.
7. **[feat(codemode): add OpenAPI tool adapter](https://github.com/anomalyco/opencode/pull/35192)**: Introduces an OpenAPI 3.x document to CodeMode tool subtree adapter, generating one tool per operation while keeping auth strictly outside model visibility.
8. **[fix(provider): apply config model cost overrides at runtime](https://github.com/anomalyco/opencode/pull/17645)**: Fixes a runtime gap where custom model prices defined in the configuration were resolved but not actually applied during execution.
9. **[docs: add oh-my-loop to ecosystem](https://github.com/anomalyco/opencode/pull/35075)**: Adds `oh-my-loop`, an external loop controller for OpenCode, to the Projects section of the English and Simplified Chinese ecosystem documentation.
10. **[fix(tui): expand MCP server errors in dialog](https://github.com/anomalyco/opencode/pull/35243)**: Improves the MCP server dialog by sorting servers by attention needed (auth prompts first) and allowing users to expand rows to view full error messages.

## 5. Feature Request Clusters
* **V2 Architecture & MCP Integration**: Requests to port MCP lifecycle/status APIs to V2 ([#34435](https://github.com/anomalyco/opencode/issues/34435)), design the CodeMode runtime and MCP adapter ([#34787](https://github.com/anomalyco/opencode/issues/34787)), and implement Human-in-the-Loop (HITL) approval gates after plan composition ([#35239](https://github.com/anomalyco/opencode/issues/35239)).
* **Provider & Configuration Flexibility**: Support for `{env:VAR}` expansion in provider/model headers ([#35253](https://github.com/anomalyco/opencode/issues/35253), [#28527](https://github.com/anomalyco/opencode/issues/28527)), respecting `disable-model-invocation: true` in `SKILL.md` frontmatter ([#34498](https://github.com/anomalyco/opencode/issues/34498)), and returning pre-allocated assistant message IDs in async prompts ([#22925](https://github.com/anomalyco/opencode/issues/22925)).
* **UI/UX & Workflow Enhancements**: Auto-syncing projects in the Web UI from the server ([#13626](https://github.com/anomalyco/opencode/issues/13626)), marking threads as unread in the Desktop app ([#30348](https://github.com/anomalyco/opencode/issues/30348)), and auto-expanding matched directories in the explore tool results tree ([#35208](https://github.com/anomalyco/opencode/issues/35208)).

## 6. Developer Pain Points
* **Billing and Subscription Access**: A significant cluster of complaints revolves around OpenCode Go subscription failures. Users with active paid plans are incorrectly hitting "Free Usage Exceeded" limits or upstream provider failures, while free-tier users are blocked by "Insufficient Balance" errors on models advertised as free.
* **Performance and Resource Management**: Developers are frustrated by severe CPU spikes in recent versions that cause system-wide lag, as well as the bash tool hanging indefinitely when executing commands that spawn background processes or use specific flags like `pkill -f`.
* **Agent Autonomy and Safety**: Users report the agent ignoring strict scoping instructions, aggressively modifying unrelated files without creating backups, and lacking necessary human-in-the-loop checkpoints to review generated plans before code execution.
* **Desktop/Electron Quirks**: Desktop users face distinct friction points, including custom npm providers failing due to ESM import bugs, conversation history disappearing after updates, and UI state bugs where previous messages erroneously append to new sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-07-04

## 1. Today's Update Brief
The Qwen Code repository saw active development over the last 24 hours, focusing on daemon UI enhancements, KV-cache optimization, and environment variable handling. Maintainers addressed several critical bugs related to process isolation, context window miscalculations, and authentication state leakage, while advancing integrations like the WeCom channel and multi-folder workspace support.

## 2. Releases
- **v0.19.6 & v0.19.5-nightly**: Addressed mobile session-switch jank in the web-shell by memoizing the timeline signature and using replay-first dispatch. Also included a fix for macOS seat handling. ([v0.19.6 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6))
- **cua-driver-rs-v0.7.0**: Released prebuilt binaries for the relative-coordinate fork. Includes a codesigned and notarized universal binary for macOS, alongside unsigned builds for Linux (glibc 2.31+) and Windows. ([cua-driver-rs-v0.7.0 Release](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.0))

## 3. Hot Issues
1. **Incorrect Context Window Calculation**: Users setting up local Qwen3-Coder 64k instances reported incorrect context window calculations, disrupting long-context workflows. ([#6144](https://github.com/QwenLM/qwen-code/issues/6144))
2. **KV-Cache Invalidation on Tool Search**: Using `tool_search` for deferred tools invalidates the LLM server's KV-cache on every load, causing noticeable performance and latency hits. ([#6265](https://github.com/QwenLM/qwen-code/issues/6265))
3. **High Token Consumption in `/review`**: The `/review` skill was observed consuming unexpectedly large amounts of tokens, impacting cost and context limits. ([#6264](https://github.com/QwenLM/qwen-code/issues/6264))
4. **Dropped Empty Tool Call Arguments**: Streaming tool calls with empty `arguments` strings are silently dropped, triggering infinite "Model stream ended with empty response text" retry loops. ([#6249](https://github.com/QwenLM/qwen-code/issues/6249))
5. **Subprocess Isolation Bypass in `transform_data`**: A security concern was raised where `transform_data` fails to enforce filesystem and network isolation wrappers when launching transform scripts. ([#6282](https://github.com/QwenLM/qwen-code/issues/6282))
6. **Agent Terminating Host Processes**: When asked to stop a specific backend Node.js process, the agent occasionally terminates all Node.js processes, including its own host environment. ([#6246](https://github.com/QwenLM/qwen-code/issues/6246))
7. **Environment Variable Shadowing**: API keys configured via `/auth` in `settings.env` are silently shadowed by `.env` files or empty-string env vars on restart, causing persistent 401 errors. ([#6283](https://github.com/QwenLM/qwen-code/issues/6283))
8. **Plan Mode Content Leakage**: Content submitted via `exit_plan_mode` leaks into subsequent assistant responses instead of being cleanly processed and cleared. ([#6237](https://github.com/QwenLM/qwen-code/issues/6237))
9. **Taobao Mirror Sync Delay**: The Taobao npm mirror fell three versions behind, disrupting installations for users relying on the regional registry. ([#6218](https://github.com/QwenLM/qwen-code/issues/6218))
10. **OAuth 504 Gateway Timeout**: Users experienced critical 504 Gateway Timeouts during the Qwen OAuth authentication flow, blocking tool access. ([#6251](https://github.com/QwenLM/qwen-code/issues/6251))

## 4. Key PR Progress
1. **Daemon Status Dashboard**: Adds a web-shell UI page backed by `GET /daemon/status` to visualize sessions, permissions, and runtime health in a single dashboard. ([#6272](https://github.com/QwenLM/qwen-code/pull/6272))
2. **WeCom Intelligent Robot Channel**: Rewrites the WeCom channel to use the official intelligent robot API mode via WebSocket, removing the need for custom callback servers. ([#6224](https://github.com/QwenLM/qwen-code/pull/6224))
3. **Multi-Folder Workspace Support**: Updates CLI file system boundary checks to support multi-folder VSCode workspaces, preventing false `path_outside_workspace` rejections. ([#6278](https://github.com/QwenLM/qwen-code/pull/6278))
4. **Anthropic Prompt-Cache Preservation**: Preserves the `tools` array in side-queries to maintain identical prompt-cache keys, preventing cache eviction cascades. ([#6225](https://github.com/QwenLM/qwen-code/pull/6225))
5. **Auth 401 Fix**: Resolves persistent 401 errors after API key changes by fixing empty-string env var blocking and improving settings reload logic. ([#6284](https://github.com/QwenLM/qwen-code/pull/6284))
6. **Model Fallback Chain**: Introduces a configurable fallback chain to auto-switch to backup models when the primary model hits capacity or availability errors. ([#6273](https://github.com/QwenLM/qwen-code/pull/6273))
7. **Proxy-Tool for KV-Cache**: Replaces the dynamic tool list update with a universal dispatch proxy-tool, keeping the API tool list stable to preserve LLM KV-cache prefixes during `tool_search`. ([#6268](https://github.com/QwenLM/qwen-code/pull/6268))
8. **Enforce `transform_data` Isolation**: Routes `transform_data` scripts through existing session-tool isolation wrappers to enforce network and filesystem write restrictions. ([#6285](https://github.com/QwenLM/qwen-code/pull/6285))
9. **Windows cmd.exe UTF-8 Fix**: Adds a UTF-8 prefix for `cmd.exe` to prevent garbled text output on Windows systems using non-UTF-8 console code pages. ([#6216](https://github.com/QwenLM/qwen-code/pull/6216))
10. **Disable Qwen Thinking on Non-DashScope**: Passes `chat_template_kwargs` to correctly disable the thinking mode for hybrid-thinking Qwen models on self-hosted OpenAI-compatible servers. ([#6271](https://github.com/QwenLM/qwen-code/pull/6271))

## 5. Feature Request Clusters
- **Daemon & Web Shell UI Enhancements**: Requests for a browser-based daemon status dashboard ([#6252](https://github.com/QwenLM/qwen-code/issues/6252)), pluggable visual chart rendering (ECharts) in Markdown output ([#6226](https://github.com/QwenLM/qwen-code/issues/6226)), and daemon UI support for selecting the vision bridge model ([#6195](https://github.com/QwenLM/qwen-code/issues/6195)).
- **Channel Integrations & Automation**: Adding a built-in Enterprise WeChat/WeCom intelligent robot channel adapter ([#6208](https://github.com/QwenLM/qwen-code/issues/6208)) and enabling proactive channel loop tools for recurring reminders ([#6287](https://github.com/QwenLM/qwen-code/pull/6287)).
- **Local Diagnostics & Debugging**: Improving local-first debug txt diagnostics to capture API/SSE failure ring buffers without auto-reporting sensitive data ([#4421](https://github.com/QwenLM/qwen-code/issues/4421), [#6277](https://github.com/QwenLM/qwen-code/pull/6277)).
- **Performance & Token Optimization**: Skipping no-op `max_tokens` escalation for high-output models ([#5939](https://github.com/QwenLM/qwen-code/issues/5939)) and tracking npm package size to keep registry installs reliable ([#6231](https://github.com/QwenLM/qwen-code/issues/6231)).

## 6. Developer Pain Points
- **Token & Context Window Friction**: Developers are frustrated by incorrect context window calculations for local models ([#6144](https://github.com/QwenLM/qwen-code/issues/6144)) and unexpected token drain from built-in skills like `/review` ([#6264](https://github.com/QwenLM/qwen-code/issues/6264)).
- **State & Context Leakage**: Conversational context is occasionally polluted by UI and state bugs, such as edit tool diff summaries repeatedly appending to subsequent responses ([#5894](https://github.com/QwenLM/qwen-code/issues/5894)) and Plan Mode content leaking into later replies ([#6237](https://github.com/QwenLM/qwen-code/issues/6237)).
- **Authentication & Environment Quirks**: Configuring API keys remains brittle, with `.env` files silently shadowing `settings.env` ([#6283](https://github.com/QwenLM/qwen-code/issues/6283)), OAuth flows timing out ([#6251](https://github.com/QwenLM/qwen-code/issues/6251)), and VSCode quickpick dropdowns losing focus during `/auth` ([#6230](https://github.com/QwenLM/qwen-code/issues/6230)).
- **Process Management & Sandbox Escapes**: The agent struggles with process ownership, sometimes killing its own host Node.js processes when asked to stop a specific task ([#6246](https://github.com/QwenLM/qwen-code/issues/6246)). Additionally, sandbox escapes in `transform_data` raise security concerns for desktop users ([#6282](https://github.com/QwenLM/qwen-code/issues/6282)).

</details>