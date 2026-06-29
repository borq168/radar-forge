# AI CLI Tools Community Digest 2026-06-30

> Generated: 2026-06-29 22:49 UTC | Tools covered: 7

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
Today's activity across the AI CLI ecosystem is heavily focused on resolving context management flaws, with multiple tools addressing auto-compaction data loss, infinite reasoning loops, and memory persistence. Security and sandbox hardening remain a priority, evidenced by extensive Git transport and PowerShell isolation updates in OpenAI Codex, alongside sandbox escape patches in Gemini CLI. Additionally, developers across several platforms are reporting significant friction with terminal UI rendering glitches, MCP authentication failures, and unexpected token consumption spikes tied to specific model providers.

## 2. Activity Comparison

| Tool | Issues (Updated/Hot) | PRs (Noted) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 50 updated | 2 | None |
| **OpenAI Codex** | 10 hot | 10 | `rust-v0.142.4` (internal chores) |
| **Gemini CLI** | 10 hot | 10 | `v0.51.0-nightly` (automated) |
| **GitHub Copilot CLI** | 28 updated | 0 | `v1.0.66-2` (patch) |
| **Kimi Code CLI** | 1 updated | 0 | None |
| **OpenCode** | 10 hot | 10 | None reported |
| **Qwen Code** | 10 hot | 10 | None |

## 3. Shared Feature Directions

*   **Context Compaction & Memory Management:** Users across multiple tools are struggling with context summarization. OpenAI Codex users report "amnesia" and lost operational continuity during long tasks (#5957, #29356); Claude Code users lose pasted inputs during auto-compact (#63162); OpenCode users report per-agent compaction breaking local workflows (#34510); and Qwen Code maintainers merged a PR to fix compression threshold calculations (#5957) while users request better daemon memory persistence (#5968).
*   **MCP (Model Context Protocol) Integration & Auth:** As MCP adoption grows, cross-platform execution and authentication friction is evident. Claude Code faces Linux OAuth blocks (#3433); GitHub Copilot CLI struggles with Windows `.bat` execution (#3958) and OAuth loopback ports (#3973); OpenCode is hardening V2 MCP OAuth concurrency (#34523) and fixing stdio process leaks (#34525); Qwen Code is adding glob patterns for MCP allowlists (#6012).
*   **Terminal UI (TUI) Rendering & Interaction:** Complex agent outputs are stressing TUI engines. GitHub Copilot CLI users report ghost characters (#3959) and mouse movement character streams (#3972); Qwen Code users face scroll wheel jumps (#5941) and overwritten last lines (#5800). In response, OpenCode and Qwen Code are actively merging PRs to add mouse support, alternate-screen interactions, and keyboard navigation.
*   **Background Agents & Autonomous Execution:** Tools are expanding unattended execution capabilities, but facing stability issues. Claude Code (#63022) and GitHub Copilot CLI (#2364) users report background agents getting stuck in infinite loops; Gemini CLI users report generalist agent hangs (#21409); meanwhile, Qwen Code is proactively adding autonomous bare `/loop` modes (#5991) and daemon channel workers.

## 4. Differentiation Analysis

*   **OpenAI Codex:** Engineering focus is heavily skewed toward enterprise security, sandboxing, and Git transport isolation (e.g., denying implicit transport, restricting PowerShell AST parsing). Target users appear to be enterprise teams requiring strict execution boundaries and auditability.
*   **Gemini CLI:** Differentiates through deep codebase navigation and sub-agent orchestration. Feature requests heavily emphasize AST-aware tools for precise method mapping (#22745) and specialized sub-agent routing, targeting developers working in massive, complex repositories.
*   **OpenCode:** Highly focused on multi-provider routing, V2 architecture migration, and parallel multi-agent dispatch. It caters to power users and embedders who need granular control over diverse LLM backends (e.g., GLM-5.x, local Ollama) and complex session forking.
*   **GitHub Copilot CLI:** Deeply integrated with GitHub workflows (e.g., `gh` CLI prompts, PR draft commits) and enterprise org-managed settings. It targets teams already embedded in the GitHub ecosystem seeking seamless PR and issue-cycle automation.
*   **Qwen Code:** Emphasizes background daemon automation, web-shell capabilities, and multi-agent execution flows. It appeals to developers looking to run unattended CI/PR maintenance loops and manage persistent background channels.
*   **Claude Code:** Focuses heavily on desktop/VM environment integration (Windows Cowork, WSL2), MCP workflows, and strict safety/security classifiers, targeting users running complex local environments and external tool integrations.

## 5. Community Activity Notes

*   **Issue Volume:** Claude Code (50 updated issues) and GitHub Copilot CLI (28 updated issues) show the highest raw issue activity, driven largely by bug reports and stale ticket triage.
*   **Engineering Velocity:** OpenAI Codex, Gemini CLI, OpenCode, and Qwen Code all demonstrate robust maintainer output, with ~10 PRs each addressing core architecture, security hardening, and TUI features.
*   **Releases:** GitHub Copilot CLI shipped a functional patch (v1.0.66-2) addressing plugin coexistence and LSP logs. OpenAI Codex released a maintenance build, and Gemini CLI published its daily nightly. Claude Code, Kimi, OpenCode, and Qwen had no new releases.
*   **Maintainer Response:** OpenCode and Qwen Code maintainers are actively merging fixes for provider-specific routing and TUI rendering. OpenAI Codex maintainers are heavily engaged in merging security-hardening PRs, while GitHub Copilot CLI maintainers appear focused on issue triage and patch releases rather than new PR generation.

## 6. Evidence-Backed Observations

1.  **Context compaction remains a primary source of workflow disruption.**
    *Evidence:* OpenAI Codex users report lost operational continuity (#5957, #29356); Claude Code users lose pasted inputs during auto-compact (#63162); OpenCode users report per-agent compaction breaking local workflows (#34510); Qwen Code merged a PR to fix compression threshold calculations (#5957).
2.  **MCP adoption is surfacing cross-platform authentication and execution friction.**
    *Evidence:* Claude Code faces Linux OAuth blocks (#3433); GitHub Copilot CLI struggles with Windows `.bat` execution (#3958) and OAuth loopback ports (#3973); OpenCode is hardening V2 MCP OAuth concurrency (#34523) and fixing stdio process leaks (#34525); Qwen Code is adding glob patterns for MCP allowlists (#6012).
3.  **Terminal UI (TUI) rendering engines are struggling with complex agent outputs and alternate screen modes.**
    *Evidence:* GitHub Copilot CLI users report ghost characters (#3959) and mouse movement character streams (#3972); Qwen Code users face scroll wheel jumps (#5941) and overwritten last lines (#5800); OpenCode and Qwen Code are actively merging PRs to add mouse support and keyboard navigation to their TUIs to mitigate these interaction failures.
4.  **Provider-specific routing quirks are causing unexpected cost spikes and output corruption.**
    *Evidence:* OpenAI Codex users report a 10-20x token burn rate increase on GPT-5.5 (#28879); OpenCode users face GLM-5.x prompt cache drops to zero (#33998); Qwen Code users report Anthropic prompt-cache misses inflating costs (#5942) and GLM-5.2 leaking internal thinking tags into final outputs (#6007).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest: 2026-06-30

## 1. Today's Update Brief
Activity on the `anthropics/claude-code` repository remains steady with 50 issues updated in the last 24 hours, though a significant portion of older tickets were closed as stale. Community discussion is heavily focused on authentication, MCP integrations, and background agent execution bugs, while maintainers processed documentation and deployment example PRs.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
* **[#3433](https://github.com/anthropics/claude-code/issues/3433)**: Linux users are unable to connect to GitHub's remote MCP server using OAuth authentication. This highly discussed issue (57 comments, 138 👍) blocks MCP workflows on Ubuntu.
* **[#38993](https://github.com/anthropics/claude-code/issues/38993)**: Windows Cowork users report that the virtiofs FUSE mount serves truncated or stale files, preventing host-side file changes from reflecting in the VM.
* **[#69641](https://github.com/anthropics/claude-code/issues/69641)**: WSL2 users face deployment failures where the Desktop SSH remote BinaryDeployment pushes a `linux-x64-musl` binary to a `glibc` host, resulting in a "statx: symbol not found" error.
* **[#72356](https://github.com/anthropics/claude-code/issues/72356)**: IntelliJ users on macOS report that agents running in an execution loop experience corrupted state, disrupting automated agent workflows.
* **[#72350](https://github.com/anthropics/claude-code/issues/72350)**: A cybersecurity safety-filter false positive halted routine GUI work on a drone telemetry ground-station HUD, blocking authorized development.
* **[#62114](https://github.com/anthropics/claude-code/issues/62114)**: macOS Desktop app users are forced into 1M context mode for Sonnet 4.6 with no 200k option, blocking usage when credits are unavailable.
* **[#63022](https://github.com/anthropics/claude-code/issues/63022)**: The background agent UI "Stop" button acts as a no-op for stuck agents on Windows, causing processes to consume tokens indefinitely.
* **[#62340](https://github.com/anthropics/claude-code/issues/62340)**: A regression in version 2.1.150 broke pasting (`Ctrl+Shift+V`) in GNOME Terminal on Linux/Wayland.
* **[#63162](https://github.com/anthropics/claude-code/issues/63162)**: VSCode users report that Auto-Compact loses extensive user input pasted into the conversation history right before processing.
* **[#56188](https://github.com/anthropics/claude-code/issues/56188)**: macOS users with usernames ending in a period (`.`) encounter false positive security warnings for "suspicious Windows path pattern" on every write.

## 4. Key PR Progress
* **[#72264](https://github.com/anthropics/claude-code/pull/72264)**: An open documentation PR updates the `bash_command_validator_example.py` hook to clarify that the `PreToolUse` Bash payload exposes additional fields like `run_in_background`, `description`, and `timeout`, not just `command`.
* **[#72361](https://github.com/anthropics/claude-code/pull/72361)**: A closed PR proposed adding reference deployment artifacts and Terraform examples for running Claude Gateway on Google Cloud Platform (GCP).

## 5. Feature Request Clusters
* **Session and Context Management**: Users are requesting better control over session context and history. Requests include allowing session display names via CLI/hooks ([#62754](https://github.com/anthropics/claude-code/issues/62754)), fixing `/clear` to actually reset context usage rather than just history ([#62784](https://github.com/anthropics/claude-code/issues/62784)), and preventing project memory from being orphaned when a repository directory is renamed or moved ([#72359](https://github.com/anthropics/claude-code/issues/72359)).
* **Model and Prompt Flexibility**: Developers want more granular control over model selection and UI limits. This includes requests for a one-shot model override for single prompts without switching the entire session ([#72362](https://github.com/anthropics/claude-code/issues/72362)), and expanding the `/powerup` command to show the full catalog of lessons rather than capping it at ~10 ([#63136](https://github.com/anthropics/claude-code/issues/63136)).

## 6. Developer Pain Points
* **Background Agent and Bash Execution Bugs**: Multiple issues highlight severe bugs with the Bash tool and background agents. Reports include Bash commands returning no output ([#41722](https://github.com/anthropics/claude-code/issues/41722)), hanging or routing all commands to background tasks that never complete ([#52933](https://github.com/anthropics/claude-code/issues/52933), [#57260](https://github.com/anthropics/claude-code/issues/57260)), and the inability to stop stuck background agents ([#63022](https://github.com/anthropics/claude-code/issues/63022)).
* **Context and Auto-Compact Data Loss**: Developers are frustrated by the Auto-Compact feature dropping or contaminating context. Issues detail losing large pasted inputs right before processing ([#63162](https://github.com/anthropics/claude-code/issues/63162)) and context contamination with unrelated data after auto-compacting ([#63157](https://github.com/anthropics/claude-code/issues/63157)).
* **Overzealous Security and Safety Filters**: False positives in security and safety classifiers are blocking legitimate work. Examples include safety blocks on drone telemetry GUI work ([#72350](https://github.com/anthropics/claude-code/issues/72350)), auto-mode classifiers mislabeling Azure DevOps PR votes ([#63164](https://github.com/anthropics/claude-code/issues/63164)), and macOS usernames triggering suspicious Windows path warnings ([#56188](https://github.com/anthropics/claude-code/issues/56188)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-30

## 1. Today's Update Brief
Today's activity is heavily dominated by internal security and sandboxing hardening, with multiple PRs addressing Git transport isolation and PowerShell execution boundaries. On the community side, developers are highly vocal about sudden spikes in token consumption rates and persistent context compaction amnesia during long-running tasks.

## 2. Releases
- **rust-v0.142.4**: This release contains only internal chores and maintenance. No user-facing changes or new features were included. ([Changelog](https://github.com/openai/codex/compare/rust-v0.142.3...rust-v0.142.4))

## 3. Hot Issues
1. **[bug, rate-limits] Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x** ([#28879](https://github.com/openai/codex/issues/28879)): Users report that starting June 16, the limit-percentage consumed per token increased 10-20x on GPT-5.5, draining 5-hour budgets in just 2-3 prompts. (197 comments, 340 👍)
2. **[bug, rate-limits] Burning tokens very fast** ([#14593](https://github.com/openai/codex/issues/14593)): A long-running thread detailing rapid token depletion on the VS Code extension, with users struggling to understand the consumption metrics on Business plans. (626 comments, 276 👍)
3. **[enhancement, app] Codex desktop app for Linux** ([#11023](https://github.com/openai/codex/issues/11023)): High demand for a native Linux desktop application, driven by macOS power consumption issues and a desire for better desktop integration. (132 comments, 658 👍)
4. **[bug, CLI, performance] SQLite feedback logs can write ~640 TB/year** ([#28224](https://github.com/openai/codex/issues/28224)): Though largely mitigated in v0.142.0 via merged PRs, this issue remains highly active as users discuss SSD endurance impacts from verbose local logging. (107 comments, 406 👍)
5. **[bug, context] Auto compaction causes GPT-5-Codex to lose the plot** ([#5957](https://github.com/openai/codex/issues/5957)): Automatic context compaction causes the model to forget it is mid-task, lose track of edited files, and halt execution entirely. (32 comments)
6. **[bug, model-behavior, context] Context compaction loses operational continuity** ([#29356](https://github.com/openai/codex/issues/29356)): Similar to #5957, users report that long tasks in the Desktop app break when context is compacted, requesting that the last 5 operational steps be preserved verbatim. (14 comments)
7. **[enhancement, sandbox] A way to exclude sensitive files** ([#2847](https://github.com/openai/codex/issues/2847)): *Closed.* Highly upvoted request for a `.codexignore` mechanism to explicitly prevent the agent from reading or sending sensitive paths to the model. (90 comments, 456 👍)
8. **[bug, rate-limits, app] Selected model is at capacity** ([#30575](https://github.com/openai/codex/issues/30575)) & **GPT-5.4 mini immediately reports “Model at capacity”** ([#30577](https://github.com/openai/codex/issues/30577)): Multiple reports of Pro and Business users being blocked from using GPT-5.4 and GPT-5.4 mini due to sudden capacity errors on both new and existing sessions.
9. **[bug, windows-os, sandbox, app] Windows Desktop creates empty .git folder, spawns git repetitively** ([#29492](https://github.com/openai/codex/issues/29492)): The Windows app continuously spawns `git.exe` polling processes and creates empty `.git` directories in non-git projects, degrading performance. (9 comments)
10. **[bug, CLI, tool-calls] codex-cli 0.142.3 crashes with SIGTRAP on tool calls on Intel macOS** ([#30306](https://github.com/openai/codex/issues/30306)): A regression on Intel Macs where invoking `web_search` or local shell tools causes a native `Trace/BPT trap: 5` crash, interrupting the conversation. (4 comments)

## 4. Key PR Progress
1. **Deny implicit transport for local-only Git operations** ([#29470](https://github.com/openai/codex/pull/29470)): Prevents Git commands that only inspect local state from lazily fetching objects across network boundaries via promisor remotes.
2. **Require approval for generic Git commands** ([#28714](https://github.com/openai/codex/pull/28714)): Tightens the CLI allowlist by requiring explicit user approval for generic Git commands, as argv-only "read-only" classification was deemed unsafe.
3. **Fail closed on executable Git worktree helpers** ([#27914](https://github.com/openai/codex/pull/27914)): Prevents internal Git worktree operations from executing repository-selected content filters and merge drivers during patch application.
4. **Trust only system PowerShell parsers on Windows** ([#30628](https://github.com/openai/codex/pull/30628)): Fixes a security flaw where a repository-controlled `pwsh.exe` could execute before sandbox boundaries by restricting AST parsing to system-level PowerShell paths.
5. **Isolate marketplace Git transport from workspace config** ([#28760](https://github.com/openai/codex/pull/28760)): Ensures marketplace Git operations do not inherit untrusted `url.*.insteadOf` rules from the active workspace repository.
6. **elicitations: Move to shared ElicitationService** ([#30627](https://github.com/openai/codex/pull/30627)): Centralizes MCP elicitations to prevent code-mode tool results from returning to the model while the system is still waiting for user input.
7. **fix(core): prevent tool-search rollout poisoning** ([#30618](https://github.com/openai/codex/pull/30618)): Fixes an issue where malformed `tool_search_call.arguments` from the Responses service were persisted verbatim, permanently breaking session rollouts.
8. **disable Nagle on Rendezvous WebSockets** ([#30269](https://github.com/openai/codex/pull/30269)): Unconditionally disables Nagle's algorithm for exec-server WebSocket connections to reduce latency.
9. **Add generated token auth to app-server WebSockets** ([#30315](https://github.com/openai/codex/pull/30315)): Implements 256-bit URL-safe connection tokens for app-server WebSocket listeners to secure local connections.
10. **Apply current permissions before goal continuations** ([#30604](https://github.com/openai/codex/pull/30604)): Ensures approval policies, sandbox policies, and named permissions are resolved and applied to a live thread before goal state becomes visible to lifecycle hooks.

## 5. Feature Request Clusters
- **Platform Parity & Desktop Apps:** Strong community push for a native Linux desktop app ([#11023](https://github.com/openai/codex/issues/11023)) to match macOS/Windows offerings, alongside requests for better remote control capabilities via mobile apps similar to Claude Code ([#27565](https://github.com/openai/codex/issues/27565)).
- **Session UX & Commands:** Users are requesting quality-of-life session commands, specifically a built-in `/recap` command to summarize long sessions and a `/btw` alias for side-flows ([#18884](https://github.com/openai/codex/issues/18884)).
- **Cloud Cost Attribution:** Enterprise and cloud users are requesting better cost attribution mechanisms, specifically support for Amazon Bedrock projects to track inference costs by team or workload ([#27613](https://github.com/openai/codex/issues/27613)).
- **Context & Memory Control:** Ongoing requests for explicit user control over context compaction and the ability to define `.codexignore` files to protect sensitive local data from being read by the agent ([#2847](https://github.com/openai/codex/issues/2847), [#29356](https://github.com/openai/codex/issues/29356)).

## 6. Developer Pain Points
- **Token Burn & Rate Limit Frustration:** The most acute pain point is the perceived 10-20x increase in token consumption rates on GPT-5.5, causing Plus and Business plan budgets to drain after just a few prompts ([#28879](https://github.com/openai/codex/issues/28879), [#14593](https://github.com/openai/codex/issues/14593)).
- **Context Compaction Amnesia:** Developers running long, complex tasks are highly frustrated by automatic context compaction. When triggered, the model frequently forgets AGENTS rules, loses operational continuity, and abandons mid-task file edits ([#5957](https://github.com/openai/codex/issues/5957), [#25792](https://github.com/openai/codex/issues/25792), [#29356](https://github.com/openai/codex/issues/29356)).
- **Windows Desktop Performance & Glitches:** Windows users report significant friction with the desktop app, including slow thread switching ([#29187](https://github.com/openai/codex/issues/29187)), stuck `git.exe` polling processes consuming resources ([#29408](https://github.com/openai/codex/issues/29408)), and sandbox creation failures ([#20570](https://github.com/openai/codex/issues/20570)).
- **Model Capacity Blocking:** Intermittent but disruptive "Model at capacity" errors are preventing users from accessing GPT-5.4 and GPT-5.4 mini, halting workflows entirely ([#30575](https://github.com/openai/codex/issues/30575), [#30577](https://github.com/openai/codex/issues/30577)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-06-30

## 1. Today's Update Brief
The Gemini CLI project published its latest nightly build with ongoing maintenance heavily focused on agent stability, context management, and security hardening. Recent activity highlights significant engineering efforts to prevent infinite reasoning loops, resolve "thought leakage" in chat history, and restrict auto-accept file writes to prevent potential sandbox escapes.

## 2. Releases
- **v0.51.0-nightly.20260629.gae0a3aa7b**: Automated nightly release containing the latest merged fixes and incremental updates.
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)

## 3. Hot Issues
1. **Subagent recovery after MAX_TURNS reported as success** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) - The `codebase_investigator` subagent incorrectly reports `status: "success"` and `Termination Reason: "GOAL"` even when it hits the maximum turn limit before completing analysis, masking interruptions.
2. **Generalist agent hangs** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) - Users report the CLI hanging indefinitely when deferring to the generalist agent for simple tasks like folder creation. Instructing the model to avoid subagents currently serves as the only workaround.
3. **Shell command execution gets stuck with "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) - A recurring P1 bug where the CLI hangs and shows "Awaiting user input" after executing simple, non-interactive shell commands that have already completed.
4. **Leverage model's bash affinity via Zero-Dependency OS Sandboxing** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) - A major architectural enhancement proposing the use of native POSIX tools (`grep`, `sed`, `awk`) within a zero-dependency OS sandbox to better align with Gemini 3's training while maintaining security.
5. **Add deterministic redaction and reduce Auto Memory logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) - Addresses a security concern where Auto Memory reads local transcripts and sends them to the background extraction agent before secrets are redacted, risking context leakage.
6. **Gemini CLI encounters 400 error with > 128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) - The agent fails with a 400 error when more than 128 (or 400, as noted in the description) tools are available, highlighting a need for smarter tool scoping and pagination.
7. **Assess the impact of AST-aware file reads, search, and mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) - An epic investigating the integration of AST-aware tools to precisely read method bounds, reduce token noise, and improve codebase navigation.
8. **Browser subagent fails in Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) - The browser agent consistently fails and terminates with a "GOAL" reason when running in Wayland display server environments.
9. **Agent should stop/discourage destructive behavior** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) - Users request guardrails to prevent the model from executing destructive commands like `git reset --force` or modifying databases without safer alternatives or explicit warnings.
10. **Gemini does not use skills and sub-agents enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) - Anecdotal reports indicate the model ignores custom skills and sub-agents unless explicitly instructed, failing to route tasks to specialized tools automatically.

## 4. Key PR Progress
1. **Limit recursive reasoning turns per single user request** ([#28164](https://github.com/google-gemini/gemini-cli/pull/28164)) - Implements a strict 15-turn limit for recursive reasoning to protect local CPU resources and API quotas from infinite loops.
2. **Strip thoughts from scrubbed history turns and resolve thought leakage** ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971)) - Fixes a critical issue where the model's internal monologues leaked into plain-text history, causing the model to emulate scratchpad thoughts in subsequent turns.
3. **Harden file-write scope: stop sandbox/auto-accept writes to .gemini** ([#28215](https://github.com/google-gemini/gemini-cli/pull/28215)) - *Closed/Merged.* Prevents the agent from writing to the `.gemini/` folder under auto-accept mode, closing a sandbox escape vector via prompt injection.
4. **Resolve defensive path resolution for at-reference files** ([#28053](https://github.com/google-gemini/gemini-cli/pull/28053)) - Fixes a production bug where filesystem tools failed with "File not found" when the model passed paths prefixed with `@`.
5. **Implement Cloud Run webhook ingestion service for Caretaker** ([#28015](https://github.com/google-gemini/gemini-cli/pull/28015)) - Adds a Cloud Run entry point for GitHub webhooks, verifying payloads and publishing sanitized issue metadata to GCP Pub/Sub for the Caretaker Agent.
6. **Trust dialog discloses the hook shape that never runs** ([#27915](https://github.com/google-gemini/gemini-cli/pull/27915)) - *Closed/Merged.* Fixes a security flaw where the workspace-trust dialog displayed the inverse of the hooks that actually executed, hiding arbitrary shell execution risks.
7. **Bound web search tool latency** ([#27910](https://github.com/google-gemini/gemini-cli/pull/27910)) - *Closed/Merged.* Adds a 120-second local timeout around the `google_web_search` utility, aborting hung requests and returning clear errors so the agent can recover.
8. **Show ellipsis on multi-line edit snippets** ([#28126](https://github.com/google-gemini/gemini-cli/pull/28126)) - Updates `EditToolInvocation.getDescription()` to append `...` when multi-line edits hide content, improving UI clarity for code modifications.
9. **Forward SIGINT/SIGTERM/SIGQUIT to child process during relaunch** ([#28202](https://github.com/google-gemini/gemini-cli/pull/28202)) - *Closed/Merged.* Ensures that pressing Ctrl+C during an update/relaunch properly kills the child process instead of leaving it orphaned.
10. **Validate GCP project ID format and prevent alias extraction in memory** ([#27916](https://github.com/google-gemini/gemini-cli/pull/27916)) - *Closed/Merged.* Prevents Auto Memory from storing invalid GCP project display names, which previously caused 403 and `CONSUMER_INVALID` API errors.

## 5. Feature Request Clusters
- **AST-Aware Codebase Navigation:** Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) request the integration of AST-aware CLI tools (such as `tilth` or `glyph`) to map codebases, read precise method bounds, and reduce token noise compared to standard text searches.
- **Subagent Visibility and Telemetry:** Developers are asking for better observability into subagent operations. Requests include exposing subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), including subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and improving the agent's "self-awareness" of its own CLI flags and hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **Auto Memory Refinement:** A cluster of issues ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) focuses on stabilizing the Auto Memory system by stopping infinite retries on low-signal sessions, quarantining invalid inbox patches, and reducing unnecessary background logging.

## 6. Developer Pain Points
- **Agent Hangs and Infinite Loops:** The most frequent usability frustration involves the CLI becoming unresponsive. This manifests as the generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands getting stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), or the model entering infinite reasoning loops (addressed in PR [#28164](https://github.com/google-gemini/gemini-cli/pull/28164)).
- **Destructive and Unpredictable File Operations:** Users are frustrated by the agent's tendency to create temporary scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) and execute destructive commands like `git reset --force` without warnings or safer alternatives ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Context and History Corruption:** "Thought leakage," where internal monologues bleed into plain-text history ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971)), and incorrect `\n` escape behaviors ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)) confuse the model in subsequent turns, noticeably degrading output quality and requiring manual context resets.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest (2026-06-30)

## 1. Today's Update Brief
The GitHub Copilot CLI received a minor patch (v1.0.66-2) focused on plugin skill coexistence, LSP log visibility, and integration settings. Issue activity remains high with 28 updated issues, heavily centered around terminal UI (TUI) rendering glitches, Windows-specific MCP regressions, and session management bugs.

## 2. Releases
**v1.0.66-2**
*   **Plugin & Integration Improvements:** Allowed skills with identical names from different plugins to coexist. Enabled integrations to read and write CLI user settings.
*   **Debugging & Logging:** Added the ability to view LSP server logs via `/lsp logs` and `read_agent`.
*   **Workflow Enhancements:** Introduced prompts to install the `gh` CLI when it is missing in GitHub repositories, and added GitHub attachment variants to prompt rendering.

## 3. Hot Issues
1.  **[#3958] Windows: v1.0.66 fails to start stdio MCP servers (.bat/.cmd with args)**
    *   *Workflow/Impact:* A regression in v1.0.66 prevents Windows users from launching MCP servers configured with `.bat` or `.cmd` files and arguments, breaking custom tool integrations.
2.  **[#1799] How to turn off alt-screen views?**
    *   *Workflow/Impact:* The recently introduced alt-screen mode is disrupting terminal multiplexer workflows and history navigation, prompting users to seek a way to revert to the original inline mode.
3.  **[#3972] UI is often displaying a continuous stream of characters representing mouse movements**
    *   *Workflow/Impact:* A severe TUI rendering bug where mouse movements output raw character streams on first load, rendering the interface temporarily unusable.
4.  **[#3959] Visual artifacts / "ghost" characters remain rendered in TUI after deleting text**
    *   *Workflow/Impact:* When backspacing in the prompt, deleted characters remain visually on screen, causing confusion during prompt editing.
5.  **[#2364] [CLOSED] Copilot Agent session keeps running indefinitely**
    *   *Workflow/Impact:* A critical bug where Coding Agent sessions get stuck in an infinite running state, failing to commit or finalize draft PRs, consuming unnecessary compute.
6.  **[#3909] Feature: enterprise/org server-managed settings for the local Copilot CLI**
    *   *Workflow/Impact:* Org admins currently lack a mechanism to centrally push configuration and environment variables to developers' local CLI installs, hindering enterprise standardization.
7.  **[#3973] MCP OAuth re-auth repeatedly fails on Windows (loopback redirect port excluded)**
    *   *Workflow/Impact:* Blocks MCP server authentication on Windows when the CLI attempts to reuse a cached OAuth registration tied to a dynamically assigned port that falls into an excluded TCP range.
8.  **[#3948] Any web_fetch: TypeError: fetch failed**
    *   *Workflow/Impact:* The `web_fetch` tool consistently fails with a TypeError regardless of proxy settings, preventing agents from retrieving external web context.
9.  **[#3904] CloudQueryError prevents /chronicle standup despite local fallback data**
    *   *Workflow/Impact:* The `/chronicle standup` command crashes when the cloud session store returns an internal server error, even though local fallback data is available.
10. **[#2654] `session_store_sql` silently returns empty when session sync is set to local**
    *   *Workflow/Impact:* When local session sync is enabled, the `session_store_sql` tool remains in the agent's system prompt but returns 0 rows, potentially causing agents to hallucinate or fail when querying session history.

## 4. Key PR Progress
*No pull requests were updated in the last 24 hours. Current development focus appears to be on issue triage, bug fixing, and patch releases.*

## 5. Feature Request Clusters
*   **Session Management & Organization:** Users are requesting better ways to navigate and track sessions. Requests include a full file-tree browser for repository-backed sessions ([#3971](https://github.com/github/copilot-cli/issues/3971)), visual plan status indicators/badges on session list items ([#3969](https://github.com/github/copilot-cli/issues/3969)), user-defined searchable tags for sessions ([#3970](https://github.com/github/copilot-cli/issues/3970)), and visibility into session retention/expiration dates ([#3963](https://github.com/github/copilot-cli/issues/3963)).
*   **Enterprise Configuration:** Administrators are requesting the ability to push server-managed settings and environment variables directly to local CLI installations, rather than relying solely on cloud-hosted Codespaces secrets ([#3909](https://github.com/github/copilot-cli/issues/3909)).
*   **Editor Input Parity:** Users want `Ctrl+G` to expand compacted paste tokens into full text when opening the prompt in `$EDITOR`, matching the behavior of other CLI coding tools ([#3936](https://github.com/github/copilot-cli/issues/3936)).

## 6. Developer Pain Points
*   **Terminal UI (TUI) Rendering Glitches:** The TUI is experiencing multiple rendering regressions. Users report "ghost" characters remaining after deletion ([#3959](https://github.com/github/copilot-cli/issues/3959)), raw character streams appearing from mouse movements ([#3972](https://github.com/github/copilot-cli/issues/3972)), and trackpad scrolling incorrectly selecting previous prompts instead of scrolling the window ([#3957](https://github.com/github/copilot-cli/issues/3957)). The new alt-screen mode is also causing friction ([#1799](https://github.com/github/copilot-cli/issues/1799)).
*   **Windows-Specific Edge Cases & Regressions:** Windows users are facing distinct blockers, including v1.0.66 breaking `.bat`/`.cmd` MCP server execution ([#3958](https://github.com/github/copilot-cli/issues/3958)), MCP OAuth re-authentication failing due to loopback port exclusions ([#3973](https://github.com/github/copilot-cli/issues/3973)), and plugin installations failing to resolve git symlinks ([#2286](https://github.com/github/copilot-cli/issues/2286)).
*   **Session State & Timestamp Bugs:** Session management remains buggy, with reports of agents running indefinitely ([#2364](https://github.com/github/copilot-cli/issues/2364)), orphaned sessions lingering for months ([#3600](https://github.com/github/copilot-cli/issues/3600)), and the session picker displaying timestamps offset by 56 years (showing 1970) ([#2376](https://github.com/github/copilot-cli/issues/2376)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### 1. Today's Update Brief
Activity on the Kimi Code CLI repository was minimal over the last 24 hours, with no new releases or pull requests recorded. The sole update is a newly opened enhancement issue addressing keyboard input behaviors and newline handling across mobile and desktop interfaces.

### 2. Releases
*(Omitted: No new releases in the last 24 hours)*

### 3. Hot Issues
*Note: Only 1 issue was updated in the last 24 hours.*

*   **[OPEN] [#2479] Bad usage of return and enter for desktop and mobile** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2479))
    *   **Workflow & Impact:** The current input mapping forces mobile users to submit prompts immediately upon pressing the "Enter" button, making multi-line text entry impractical. On desktop, users are required to use "Shift+Enter" to create a new line. This significantly degrades the mobile typing experience and introduces minor friction during desktop prompt composition.
    *   **Community Reaction:** Newly opened by [@Dealazer](https://github.com/Dealazer) with no comments or upvotes yet.

### 4. Key PR Progress
No pull requests were updated or merged in the last 24 hours.

### 5. Feature Request Clusters
*Given the low volume of issues today, no distinct feature clusters have emerged. The single feature request observed is:*

*   **Cross-Platform Input Mapping Adjustments:** A request was made to modify the "Enter" and "Return" key behaviors to better suit different hardware form factors. Specifically, the user suggests decoupling the "send prompt" action from the standard "Enter" key on mobile devices to allow for easier multi-line text composition without accidental submissions.

### 6. Developer Pain Points
*   **Mobile Usability Friction:** The strict mapping of the "Enter" key to prompt submission on mobile devices renders extended text input and prompt editing highly tedious, effectively making the tool impractical for phone-based usage.
*   **Desktop Newline Friction:** Desktop users experience minor workflow interruptions by being forced to use the "Shift+Enter" combination for standard line breaks during prompt composition, rather than a standard "Enter" keystroke.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 1. Today's Update Brief
Development activity is heavily focused on the V2 architecture migration, specifically transitioning the TUI to the new `@opencode-ai/client`, implementing MCP OAuth concurrency safeguards, and defining V2 shell backgrounding semantics. Concurrently, the community is reporting significant friction with GLM-5.x provider integrations via OpenCode Go, including prompt cache drops and parameter rejections, alongside persistent local Ollama hanging issues and macOS Desktop UI bugs.

## 2. Hot Issues
1. **Certificate Verification Failures** ([#8601](https://github.com/anomalyco/opencode/issues/8601)): Users are encountering "unknown certificate verification error" across multiple AI providers, blocking API connections and preventing Gemini 3 login. This high-traffic issue (28 comments) indicates a systemic SSL/TLS handling problem in the runtime.
2. **Local Ollama Provider Hangs** ([#22132](https://github.com/anomalyco/opencode/issues/22132)): OpenCode 1.4.3 hangs on simple prompts when using a local Ollama provider configured via `@ai-sdk/openai-compatible`, even though direct `/v1/chat/completions` calls work fine. This severely disrupts local LLM workflows.
3. **GLM-5.x Prompt Cache Drops** ([#33998](https://github.com/anomalyco/opencode/issues/33998), [#31348](https://github.com/anomalyco/opencode/issues/31348)): Users report that GLM-5.1 and GLM-5.2 via the opencode-go gateway experience intermittent prompt cache drops to 0 or ~500 tokens, despite stable system prompts. This causes massive, unexpected cost spikes compared to DeepSeek V4 Flash.
4. **GLM-5.2 Parameter Rejection** ([#33490](https://github.com/anomalyco/opencode/issues/33490)): The GLM-5.2 model via OpenCode Go rejects the `instructions` field ("Extra inputs are not permitted"), causing provider errors and blocking usage for Z.AI/Zhipu routing.
5. **V2 TUI Client Migration** ([#34359](https://github.com/anomalyco/opencode/issues/34359)): A tracking issue for moving the V2 TUI from the legacy `@opencode-ai/sdk/v2` to the new generated Promise client in `@opencode-ai/client`, requiring call-site renames and shape migrations.
6. **Session Cost Tracking for Sub-agents** ([#4925](https://github.com/anomalyco/opencode/issues/4925)): A highly upvoted, now-closed discussion requesting that the session cost display include tokens used by sub-agents, rather than just the primary agent, to provide accurate cost visibility.
7. **Desktop Session History Loss** ([#34471](https://github.com/anomalyco/opencode/issues/34471)): After resetting the Desktop profile to fix an "Interrupted" prompt bug on macOS, users lose access to all previous chat history in both Desktop and Web interfaces, despite the data remaining in `opencode.db`.
8. **V2 MCP OAuth Concurrency Hazards** ([#34523](https://github.com/anomalyco/opencode/issues/34523), [#34520](https://github.com/anomalyco/opencode/issues/34520)): Tracking deferred concurrency hardening for V2 MCP OAuth. The initial implementation ignores cross-location and cross-process credential refresh races, which could lead to token corruption in multi-instance setups.
9. **Per-agent Compaction Breaking Local Workflows** ([#34510](https://github.com/anomalyco/opencode/issues/34510)): A bug report/feature request noting that recent per-agent compaction controls are breaking established local model workflows, likely due to context window miscalculations or aggressive truncation.
10. **macOS Desktop Settings Menu Failure** ([#34507](https://github.com/anomalyco/opencode/issues/34507), [#34506](https://github.com/anomalyco/opencode/issues/34506)): Users on OpenCode Desktop v1.17.11 for macOS are unable to open the Settings menu via the menubar or the `CMD + ,` shortcut, blocking configuration changes.

## 3. Key PR Progress
1. **Clean up MCP stdio descendants** ([#34525](https://github.com/anomalyco/opencode/pull/34525)): Fixes process leaks by terminating descendant processes for stdio MCP transports before closing the SDK client, reusing the cleanup path for failed startup teardowns.
2. **Sanitize registered tool names** ([#34512](https://github.com/anomalyco/opencode/pull/34512)): Applies MCP-style replacement rules to sanitize registered core tool names, ensuring consistent and valid model-facing tool identifiers across application and location scopes.
3. **Expose models.dev modes as models** ([#34521](https://github.com/anomalyco/opencode/pull/34521)): Projects models.dev experimental modes as separate model IDs rather than variants, preserving mode request overrides and tiered pricing structures.
4. **Dispatch subtasks in parallel** ([#29819](https://github.com/anomalyco/opencode/pull/29819)): Refactors the `runLoop` to execute multiple spawned sub-agents in parallel rather than sequentially awaiting each `handleSubtask()`, significantly improving multi-agent throughput.
5. **Serialize mcp-auth.json writes** ([#29820](https://github.com/anomalyco/opencode/pull/29820)): Fixes a race condition in `McpAuth.set()` and `remove()` by serializing writes, preventing concurrent token refreshes from corrupting the JSON file with overlapping writes.
6. **Bound compaction request payload** ([#29860](https://github.com/anomalyco/opencode/pull/29860)): Modifies the `/compact` command to bound the payload size, ensuring very large sessions compact successfully instead of overflowing the context window during the summarization request.
7. **Keep plugin PTY environment route local** ([#34519](https://github.com/anomalyco/opencode/pull/34519)): Refactors the PTY environment routing to keep `PluginPtyEnvironment.layer` as the explicit route-local exception, removing redundant generic providers from embedded HTTP routes.
8. **Remove core service layer exports** ([#34518](https://github.com/anomalyco/opencode/pull/34518)): Internalizes foundational service implementation layers behind nodes and removes default layer exports, tightening the core architecture's encapsulation.
9. **Add wl-paste text read for Wayland** ([#29881](https://github.com/anomalyco/opencode/pull/29881)): Fixes silent clipboard paste failures on Wayland systems lacking `xsel`/`xclip` by implementing a fallback to `wl-paste` for text reading in the TUI.
10. **Keyboard navigation for user messages** ([#29931](https://github.com/anomalyco/opencode/pull/29931)): Introduces a keyboard focus mode in the TUI for navigating user messages, allowing users to trigger message actions without relying on the mouse.

## 4. Feature Request Clusters
* **V2 Architecture & API Expansion:** Multiple issues track the build-out of the V2 API, including requests for session forking from specific message boundaries ([#34430](https://github.com/anomalyco/opencode/issues/34430)), exposing V2 config update endpoints ([#34450](https://github.com/anomalyco/opencode/issues/34450)), adding V2 reasoning/thinking option support ([#34488](https://github.com/anomalyco/opencode/issues/34488)), and defining shell backgrounding semantics for the V2 bash tool ([#34366](https://github.com/anomalyco/opencode/issues/34366)).
* **Skill & Agent Customization:** Users are requesting deeper control over agent behaviors, specifically asking for support for the `disable-model-invocation: true` field in `SKILL.md` frontmatter to prevent skills from being auto-invoked by the model ([#11972](https://github.com/anomalyco/opencode/issues/11972), [#34498](https://github.com/anomalyco/opencode/issues/34498)). There is also a push for session-scoped keyed context contributions to allow embedders to attach app-owned context ([#34380](https://github.com/anomalyco/opencode/issues/34380)).
* **TUI & Desktop UX Enhancements:** Requests focus on quality-of-life improvements, such as rendering LaTeX in the TUI ([#11655](https://github.com/anomalyco/opencode/issues/11655)), adding an option to disable automatic prompt draft restoration when starting a new session ([#34446](https://github.com/anomalyco/opencode/issues/34446)), and fixing model variant selection in the TUI ([#34487](https://github.com/anomalyco/opencode/issues/34487)).

## 5. Developer Pain Points
* **Provider Integration & Cost Spikes:** The most acute frustration centers on GLM-5.x models via the OpenCode Go gateway. Intermittent prompt cache drops to zero ([#31348](https://github.com/anomalyco/opencode/issues/31348), [#33998](https://github.com/anomalyco/opencode/issues/33998)) and strict parameter rejections ([#33490](https://github.com/anomalyco/opencode/issues/33490)) are causing unexpected financial costs and blocking usage.
* **Local LLM & Compatibility Blockers:** Developers relying on local inference are blocked by OpenCode hanging with Ollama providers ([#22132](https://github.com/anomalyco/opencode/issues/22132)) and per-agent compaction controls breaking local model context workflows ([#34510](https://github.com/anomalyco/opencode/issues/34510)).
* **Desktop App State & UI Bugs:** macOS Desktop users are highly frustrated by the Settings menu failing to open entirely ([#34507](https://github.com/anomalyco/opencode/issues/34507)), and by a destructive bug where resetting the profile to fix connection issues results in the complete loss of visible session history ([#34471](https://github.com/anomalyco/opencode/issues/34471)).
* **Network & Startup Crashes:** Persistent "unknown certificate verification error" messages are blocking access to multiple AI providers ([#8601](https://github.com/anomalyco/opencode/issues/8601)), while unhandled `Effect.tryPromise` errors are preventing the CLI from starting up altogether for some users ([#32684](https://github.com/anomalyco/opencode/issues/32684), [#34469](https://github.com/anomalyco/opencode/issues/34469)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### 1. Today's Update Brief
The Qwen Code repository saw high activity over the last 24 hours, focusing heavily on TUI rendering stability, daemon lifecycle management, and background automation features. Developers actively troubleshooted streaming timeouts, context compression logic, and provider-specific quirks, while maintainers advanced web-shell capabilities, multi-agent execution flows, and MCP integrations.

### 2. Releases
*(No new releases in the past 24 hours.)*

### 3. Hot Issues
1. **[Anthropic prompt-cache misses inflate cost](https://github.com/QwenLM/qwen-code/issues/5942)**: When routed to Anthropic endpoints, side-queries and moving conversation breakpoints cause prompt-cache misses, significantly inflating API costs compared to native implementations.
2. **[API Error: No stream activity for 120s](https://github.com/QwenLM/qwen-code/issues/5975)**: Following the v0.19.3 upgrade, users frequently experience 120-second stream timeouts after the initial thinking phase, stalling output and requiring manual retries.
3. **[MCP installation OOM crash on macOS](https://github.com/QwenLM/qwen-code/issues/6004)**: The CLI crashes with a V8 allocation failure (Scavenge during sweeping) while installing certain MCP servers, highlighting memory management limits during tool setup.
4. **[TUI last line overwritten in Static mode](https://github.com/QwenLM/qwen-code/issues/5800)**: In the default static render path, if an assistant reply is taller than the terminal height, the last line is briefly printed and then overwritten/hidden upon completion.
5. **[Auto enter Plan mode from Yolo mode regression](https://github.com/QwenLM/qwen-code/issues/5970)**: The agent unexpectedly downgrades from Yolo mode to Plan mode, repeatedly asking for file read permissions and failing to write the instructed plan markdown.
6. **[GLM-5.2 leaks thinking text as normal output](https://github.com/QwenLM/qwen-code/issues/6007)**: When using GLM-5.2 via OpenAI-compatible providers with high `max_tokens`, internal reasoning and stray `</think>` tags leak into the visible assistant response.
7. **[TUI scroll wheel jumps to top during generation](https://github.com/QwenLM/qwen-code/issues/5941)**: Scrolling up slightly while the model is generating content causes the terminal view to abruptly jump to the very top instead of scrolling smoothly.
8. **[Downgraded `read_file` UI hides filenames](https://github.com/QwenLM/qwen-code/issues/6014)**: A recent update changed the `read_file` tool output to simply display "read 1 file" without showing the actual filename, reducing workflow transparency.
9. **[`/auth` config changes fail in new sessions](https://github.com/QwenLM/qwen-code/issues/5979)**: Modifying model provider configurations via `/auth` works for the active session, but opening a new session results in 401 authentication errors.
10. **[Daemon memory empty after long sessions](https://github.com/QwenLM/qwen-code/issues/5968)**: Despite consuming massive amounts of tokens over long conversations, the server fails to persist memory automatically unless the `/memory` command is explicitly invoked.

### 4. Key PR Progress
1. **[Keep serve health responsive before runtime load](https://github.com/QwenLM/qwen-code/pull/6013)**: Defers the heavy runtime graph initialization until after the first `/health` probe is flushed, preventing startup timeouts and keeping the fast path responsive.
2. **[Subtract reserved output tokens for compression thresholds](https://github.com/QwenLM/qwen-code/pull/5957)**: Fixes a bug where auto-compression failed to trigger before 400 errors by correctly subtracting reserved output tokens (e.g., 64K) from the total context window calculation.
3. **[Add autonomous mode for a bare `/loop`](https://github.com/QwenLM/qwen-code/pull/5991)**: Enables a bare `/loop` command (without prompts or intervals) to arm a self-paced autonomous loop, allowing the agent to maintain PRs or fix CI unattended.
4. **[Add mouse click & hover in alternate-screen mode](https://github.com/QwenLM/qwen-code/pull/6011)**: Introduces mouse interactions for the TUI when Virtualized History is enabled, allowing clicks and hovers in select menus, dialogs, and permission prompts.
5. **[Queue prompts while turns are running in web-shell](https://github.com/QwenLM/qwen-code/pull/6005)**: Implements server-side FIFO queuing for the web shell, ensuring messages submitted during an active turn are accepted and managed rather than lost in local UI state.
6. **[Resumable `/acp` session stream](https://github.com/QwenLM/qwen-code/pull/5852)**: Wires the `/acp` Streamable-HTTP session event stream to support standard SSE `Last-Event-ID`, allowing clients to seamlessly resume sessions after reconnecting.
7. **[Support glob patterns in MCP allowed/excluded lists](https://github.com/QwenLM/qwen-code/pull/6012)**: Adds `*` and `?` glob pattern support to `mcp.allowed` and `mcp.excluded` settings, eliminating the need to manually enumerate every server name.
8. **[Make non-VP transcript scrollable during multi-agent runs](https://github.com/QwenLM/qwen-code/pull/6015)**: Fixes root causes that locked the transcript scroll during rich multi-agent executions (like `/review`), preventing the view from snapping back to the bottom.
9. **[Replace ambiguous-width icons and add thinking indicators](https://github.com/QwenLM/qwen-code/pull/5974)**: Replaces the `✦` character with `◆` to fix East Asian width misalignment in the TUI, and adds mathematical reasoning icons (`∵` / `∴`) for thinking states.
10. **[Allow subagents to exit plan mode](https://github.com/QwenLM/qwen-code/pull/6026)**: Fixes approval-mode overrides so subagents can correctly transition out of plan mode after `exit_plan_mode` succeeds, rather than being stuck in a fixed getter state.

### 5. Feature Request Clusters
* **Background Automation & Daemon Channels**: Users are requesting robust background execution capabilities, including daemon-managed channel workers (`qwen serve --channel`), hot-reloadable channels for messaging apps, and autonomous bare `/loop` modes to keep tasks running without active supervision ([#5976](https://github.com/QwenLM/qwen-code/issues/5976), [#6010](https://github.com/QwenLM/qwen-code/issues/6010), [#5990](https://github.com/QwenLM/qwen-code/issues/5990)).
* **Web Shell & Mobile UX**: Enhancements for the browser-based interface are highly requested, specifically mobile-friendly sidebars for session management, HTTPS/TLS support to enable secure contexts (required for voice input), and better prompt queuing ([#6000](https://github.com/QwenLM/qwen-code/issues/6000), [#6001](https://github.com/QwenLM/qwen-code/issues/6001)).
* **Context & Memory Management**: Requests focus on cost and efficiency, such as supporting configurable compaction models to prevent expensive models from burning context on summarization, and improving automatic memory persistence in daemon mode ([#5956](https://github.com/QwenLM/qwen-code/issues/5956), [#5968](https://github.com/QwenLM/qwen-code/issues/5968)).
* **CLI & TUI Ergonomics**: Developers want smoother terminal workflows, including inline model switching (`/model <id> <prompt>`), excluding line numbers when copying code blocks to clipboard, and comprehensive hot-reload systems for skills and MCPs without restarting sessions ([#5967](https://github.com/QwenLM/qwen-code/issues/5967), [#6024](https://github.com/QwenLM/qwen-code/issues/6024), [#3696](https://github.com/QwenLM/qwen-code/issues/3696)).

### 6. Developer Pain Points
* **Streaming & Timeout Instability**: Developers are frustrated by frequent "Streaming setup timeout" and "No stream activity for 120000ms" errors. These timeouts disrupt long-running generations and require manual retries, particularly noted after recent version upgrades.
* **TUI Rendering Glitches**: The terminal UI suffers from several jarring bugs. Scroll wheels jumping to the top during generation, the last lines of long replies being overwritten, and continuous scrolling/spamming on Linux environments severely degrade the interactive experience.
* **Provider-Specific Quirks & Costs**: Users are annoyed by Anthropic prompt-cache misses inflating API costs, GLM-5.2 leaking internal thinking tags into final outputs, and local OpenAI backends triggering unnecessary follow-up suggestions.
* **State & Configuration Persistence**: Configuration changes lack reliability across sessions. Modifications made via `/auth` failing to persist to new sessions (resulting in 401 errors), and daemon memory failing to save automatically after long conversations, force developers into tedious manual workarounds.

</details>