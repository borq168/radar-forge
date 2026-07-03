# AI CLI Tools Community Digest 2026-07-03

> Generated: 2026-07-03 00:28 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem: Daily Cross-Tool Comparison Report (2026-07-03)

## 1. Daily Cross-Tool Overview
Today's activity across the AI CLI ecosystem was heavily focused on stabilizing multi-agent orchestration, resolving infinite execution loops, and addressing cross-platform terminal rendering friction. Maintainers for OpenAI Codex and Gemini CLI pushed significant security and reliability patches, specifically hardening Git execution boundaries and limiting recursive reasoning turns. Meanwhile, communities across Claude Code, OpenAI Codex, and OpenCode expressed shared frustrations over opaque billing metering, sudden quota depletion, and silent model fallbacks.

## 2. Activity Comparison

| Tool | Issues Count | PR Count | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 4 | v2.1.199 released |
| **OpenAI Codex** | 10 | 10 | 2 alpha releases (rust-v0.143.0-alpha.33/34) |
| **Gemini CLI** | 10 | 10 | v0.51.0-nightly released |
| **GitHub Copilot CLI** | 10 | 2 | v1.0.69-0 released |
| **Kimi Code CLI** | 2 | 1 | No new releases |
| **OpenCode** | 10 | 10 | No explicit new release today |
| **Qwen Code** | 10 | 10 | v0.19.5 & v0.19.4-nightly released |

## 3. Shared Feature Directions

*   **Agent Loop & Timeout Controls:** Multiple communities are demanding stricter controls over agent execution loops and timeouts. Claude Code users want to prevent `AskUserQuestion` from auto-advancing after 60s (#73125); OpenAI Codex users request a setting to disable the 60s auto-resolve for questions (#28969); Gemini CLI maintainers merged a strict 15-turn limit for recursive reasoning (#28164); and Qwen Code introduced an opt-in per-tool-call execution timeout (#6124).
*   **Multi-Agent Visibility & Hierarchy:** As workflows grow more complex, users need better visibility into sub-agent execution. Claude Code sees requests for an Agent Hierarchy Dashboard (#24537); Gemini CLI users want sub-agent trajectory visibility for debugging (#22598); OpenCode merged a fix to notify parent sessions when sub-agents finish (#35041); and Qwen Code introduced configurable nested sub-agents with a TUI tree view (#6189, #6191).
*   **Billing, Quotas, and Routing Transparency:** Opaque metering and silent fallbacks are causing friction across several tools. Claude Code users report unexplained weekly limit jumps (#69430) and silent 200K context clamping (#73646); OpenAI Codex users report 5-hour limits draining in minutes (#30918); and OpenCode users flagged silent fallback billing to Claude Haiku via OpenRouter (#10272) and duplicate webhook credit grants (#28402).
*   **Cross-Platform Terminal & Clipboard UX:** Terminal rendering and clipboard handling remain persistent pain points, particularly on Windows. GitHub Copilot CLI is dealing with scrollbar text misalignment (#3501) and macOS image paste failures (#4013); Kimi Code CLI is fixing Windows terminal clipboard media handling (#2481); and Qwen Code is addressing garbled text on non-UTF-8 Windows consoles (#6214).

## 4. Differentiation Analysis

*   **OpenAI Codex:** Today's engineering effort is distinctly focused on security and sandboxing. All 10 highlighted PRs deal with hardening Git and shell execution boundaries (e.g., centralizing repository authority, blocking custom merge drivers, trusting only system PowerShell parsers), indicating a strong target focus on enterprise security and preventing repository-controlled exploits.
*   **Gemini CLI:** Development is heavily skewed toward agent reliability, memory processing, and codebase navigation. PRs and issues focus on AST-aware file reads, fixing Auto Memory redaction/low-signal retries, and preventing thought leakage into plain-text history, catering to users running long-running, autonomous codebase analysis tasks.
*   **Qwen Code:** Differentiates through deep multi-channel integrations and background automation. Today's activity highlights built-in adapters for Enterprise WeChat/WeCom and QQ Bot, alongside requests for a local always-on `/schedule` daemon, targeting users who want AI agents integrated into enterprise IM and cron-based background workflows.
*   **OpenCode:** Focuses heavily on Desktop App UX and multi-provider routing. PRs target browser-style tab management and VS Code diff integrations, while issues highlight provider-specific routing fixes (xAI cache keys, DeepSeek limit adjustments), appealing to desktop-first users managing multiple LLM providers.
*   **Claude Code & GitHub Copilot CLI:** Activity is more centered on core TUI stability, permission toggles, and immediate interactive workflow blockers (e.g., connection drops, MCP pagination, hook executions), reflecting a focus on the day-to-day interactive coding experience.

## 5. Community Activity Notes

*   **High Maintainer Engagement:** OpenAI Codex, Gemini CLI, OpenCode, and Qwen Code demonstrated high maintainer activity, each progressing 10 PRs focused on substantial core logic, security, and feature additions.
*   **Low PR Volume / High Issue Friction:** Claude Code and GitHub Copilot CLI saw high issue engagement (10 hot issues each) but very low PR volume (4 and 2 PRs, respectively). Notably, GitHub Copilot CLI's 2 PRs were non-substantive or spam submissions, indicating a potential bottleneck in community contributions or maintainer bandwidth for public PR merging.
*   **Lowest Overall Activity:** Kimi Code CLI had the quietest day, with only 2 hot issues and 1 PR, focusing strictly on resolving an infinite file-reading loop and a Windows clipboard fix.
*   **Release Cadence:** 5 out of the 7 tracked tools shipped new releases or nightlies today, showing a rapid iteration cycle across the broader ecosystem.

## 6. Evidence-Backed Observations

1.  **Agent execution loops and hangs are a primary friction point across the ecosystem.**
    *   *Evidence:* Claude Code (`AskUserQuestion` 60s timeout auto-continuing, #73125), OpenAI Codex (60s auto-resolve interrupting workflows, #28969), Gemini CLI (generalist agent infinite hangs, #21409; shell commands stuck on "Waiting input", #25166), GitHub Copilot CLI (Plan→Compact→Re-Plan infinite loop, #3158), and Kimi Code CLI (infinite file-reading loop, #640).
2.  **Windows and WSL environments continue to experience disproportionate terminal, rendering, and integration regressions.**
    *   *Evidence:* Claude Code (frequent mid-response connection drops in WSL, #69415), OpenAI Codex (severe UI freezing on Windows 11, #20214; WSL `node_repl` missing, #30486), GitHub Copilot CLI (scrollbar breaking text alignment on Windows, #3501; `.claude` hooks failing via PowerShell, #4001), and Qwen Code (garbled shell output on non-UTF-8 Windows consoles, #6214).
3.  **Sub-agent orchestration is transitioning from flat execution to hierarchical, nested structures.**
    *   *Evidence:* Claude Code (requests for Agent Hierarchy Dashboard, #24537), Gemini CLI (requests for sub-agent trajectory visibility, #22598), OpenCode (merged PR to notify parent when sub-agents finish, #35041), and Qwen Code (merged PR for configurable nested sub-agents and TUI tree view, #6189, #6191).
4.  **Opaque billing metering and silent model fallbacks are causing widespread user distrust.**
    *   *Evidence:* Claude Code (weekly limit jumping to 100% in an hour, #69430; silent 200K context clamping on 1M plan, #73646), OpenAI Codex (5-hour limits draining to 0% in 6 minutes, #30918), and OpenCode (silent fallback to Haiku via OpenRouter, #10272; duplicate webhook credits, #28402).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest - 2026-07-03

## 1. Today's Update Brief
The Claude Code repository saw moderate activity over the last 24 hours, highlighted by the release of v2.1.199 which introduces stacked slash-skill invocations and resolves SSL proxy retry burns. Community discussion remains heavily focused on multi-agent workflow coordination, TUI interaction timeouts, and context window/billing anomalies on the Max plan.

## 2. Releases
**v2.1.199**
*   **Stacked Slash-Skills:** Invocations like `/skill-a /skill-b do XYZ` now load all leading skills (up to 5) instead of just the first one, improving complex prompt routing.
*   **SSL Certificate Fixes:** Resolved issues where TLS-inspecting proxies, missing `NODE_EXTRA_CA_CERTS`, or expired certificates caused silent retry burns before displaying actionable guidance to the user.

## 3. Hot Issues
*(Top 10 noteworthy issues based on engagement and impact)*

1.  **[BUG] AskUserQuestion: "No response after 60s — continued without an answer"** ([#73125](https://github.com/anthropics/claude-code/issues/73125))
    *   **Workflow/Impact:** The TUI `AskUserQuestion` tool times out after 60 seconds and auto-continues, breaking interactive agentic loops and forcing unintended actions.
    *   **Reaction:** Extremely high engagement (56 comments, 206 👍), indicating widespread frustration with interactive prompt timeouts across Linux/VSCode/Bedrock environments.
2.  **Inter-session communication for multi-Claude workflows** ([#24798](https://github.com/anthropics/claude-code/issues/24798))
    *   **Workflow/Impact:** Users running parallel Claude Code sessions for different modules lack a native way to sequence higher-level processes with dependencies.
    *   **Reaction:** 53 comments and 18 👍; a long-standing request (since Feb 2026) highlighting the need for better multi-agent orchestration.
3.  **[BUG] API Error: Connection closed mid-response** ([#69415](https://github.com/anthropics/claude-code/issues/69415))
    *   **Workflow/Impact:** Frequent mid-response connection drops in VSCode/WSL environments make the tool unusable for extended tasks.
    *   **Reaction:** 12 comments and 43 👍, reflecting severe friction for WSL-based developers.
4.  **[FEATURE] Agent Hierarchy Dashboard** ([#24537](https://github.com/anthropics/claude-code/issues/24537))
    *   **Workflow/Impact:** Requests a unified real-time visualization (TUI + Desktop) for multi-agent workflows to track dependencies and execution states.
    *   **Reaction:** 13 comments and 15 👍; underscores the growing complexity of user-defined agent swarms.
5.  **Add runtime keyboard shortcuts for permission mode toggling** ([#11825](https://github.com/anthropics/claude-code/issues/11825))
    *   **Workflow/Impact:** Users want to toggle permission modes (e.g., auto-approve) via keyboard shortcuts during runtime without restarting the session.
    *   **Reaction:** 7 comments and 22 👍, showing strong demand for faster TUI UX controls.
6.  **[BUG] Windows Desktop app shows sessions in sidebar but all message content missing** ([#53717](https://github.com/anthropics/claude-code/issues/53717))
    *   **Workflow/Impact:** Following an auto-update, the Windows Desktop app fails to persist content to `claude-code-sessions` JSONL files, resulting in total session data loss.
    *   **Reaction:** 14 comments and 6 👍; a critical data-loss bug for Windows Desktop users.
7.  **[BUG] Weekly Limit Jumped From ~50% to 100% in less than an hour** ([#69430](https://github.com/anthropics/claude-code/issues/69430))
    *   **Workflow/Impact:** Users on the Max20x plan are experiencing rapid, unexplained depletion of their weekly usage limits.
    *   **Reaction:** 7 comments and 4 👍; highlights billing and metering anxieties among heavy users.
8.  **[BUG] Fable 5 / native-1M sessions silently clamp to a 200K context window** ([#73646](https://github.com/anthropics/claude-code/issues/73646))
    *   **Workflow/Impact:** On the Max plan, `claude-fable-5` sessions silently restrict the context window to 200K instead of the advertised 1M, with no user-facing notice or recovery path.
    *   **Reaction:** Newly filed (0 comments), but represents a critical undocumented limitation for large-codebase workflows.
9.  **[Bug] Accidental mouse clicks on selection prompts misfire** ([#71468](https://github.com/anthropics/claude-code/issues/71468))
    *   **Workflow/Impact:** In the fullscreen TUI renderer, accidental mouse clicks trigger selection/permission prompts. The current mitigation breaks fullscreen scrollback.
    *   **Reaction:** 4 comments and 14 👍, pointing to persistent TUI mouse-handling edge cases.
10. **Multiple Claude Code sessions in same repo can silently swap each other's branch** ([#60295](https://github.com/anthropics/claude-code/issues/60295))
    *   **Workflow/Impact:** Running two sessions in the same working directory on different branches causes one session's `git checkout` to silently alter the other's working tree, corrupting the mental model of the state.
    *   **Reaction:** 4 comments; a significant state-management hazard for parallel agentic coding.

## 4. Key PR Progress
*(Note: Only 4 PRs were updated in the last 24 hours; all are listed below.)*

1.  **fix: remove statsig.anthropic.com from init-firewall.sh** ([#72451](https://github.com/anthropics/claude-code/pull/72451))
    *   Removes an unresolvable hostname from the firewall allowlist. Previously, `init-firewall.sh` would fail and exit during devcontainer startup if any hostname lookup failed.
2.  **docs: fix GitHub capitalization in README** ([#73476](https://github.com/anthropics/claude-code/pull/73476))
    *   Corrects a minor typo ("Github" to "GitHub") in the README to match standard branding.
3.  **docs: fix Github -> GitHub typo in README** ([#72866](https://github.com/anthropics/claude-code/pull/72866))
    *   A duplicate documentation PR addressing the same "Github" capitalization typo in the README.
4.  **Create Cha** ([#72543](https://github.com/anthropics/claude-code/pull/72543))
    *   Minimal/empty PR description; appears to be a draft or accidental submission.

## 5. Feature Request Clusters
*   **Multi-Agent & Multi-Session Coordination:** Users are heavily requesting tools to manage parallel Claude sessions. This includes direct inter-session communication for dependency sequencing ([#24798](https://github.com/anthropics/claude-code/issues/24798)), unified Agent Hierarchy Dashboards for visualizing sub-agents ([#24537](https://github.com/anthropics/claude-code/issues/24537)), and safer concurrent execution in the same repository without git branch swapping ([#60295](https://github.com/anthropics/claude-code/issues/60295)).
*   **TUI/UX and Interaction Controls:** There is a clear demand for more granular control over the Terminal UI. Requests include runtime keyboard shortcuts to toggle permission modes ([#11825](https://github.com/anthropics/claude-code/issues/11825)), preventing `AskUserQuestion` from auto-advancing while the user is actively typing ([#73650](https://github.com/anthropics/claude-code/issues/73650)), and fixing mouse-click misfires in fullscreen mode ([#71468](https://github.com/anthropics/claude-code/issues/71468)).

## 6. Developer Pain Points
*   **Context, Billing, and Safety False Positives:** Users on the Max plan are reporting silent context window clamping (1M down to 200K for Fable 5 in [#73646](https://github.com/anthropics/claude-code/issues/73646)) and rapid weekly limit depletion ([#69430](https://github.com/anthropics/claude-code/issues/69430)). Additionally, overzealous safety classifiers are triggering false positives on routine code reviews ([#73649](https://github.com/anthropics/claude-code/issues/73649)) and non-agentic messages ([#73648](https://github.com/anthropics/claude-code/issues/73648)).
*   **Network and Connection Instability:** Developers are experiencing frequent "Connection closed mid-response" errors in VSCode/WSL ([#69415](https://github.com/anthropics/claude-code/issues/69415)). On macOS Apple Silicon, the background daemon supervisor is respawning every ~52 seconds, causing constant agent disconnects and task failures ([#72233](https://github.com/anthropics/claude-code/issues/72233)).
*   **State and Data Loss in Desktop/CLI:** The Windows Desktop app is suffering from state persistence issues, including losing message content after auto-updates ([#53717](https://github.com/anthropics/claude-code/issues/53717)), sessions getting stuck on 'working' spinners after background agents complete ([#73267](https://github.com/anthropics/claude-code/issues/73267)), and unrecoverable startup errors when working directories no longer exist ([#71837](https://github.com/anthropics/claude-code/issues/71837)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-07-03

## 1. Today's Update Brief
The OpenAI Codex repository saw concentrated engineering efforts focused on hardening Git execution boundaries and sandboxing patch applications to prevent repository-controlled helper exploits. Meanwhile, the community continues to report high-impact desktop app performance issues, particularly regarding Windows/WSL integration, alongside recurring anomalies in usage quota accounting.

## 2. Releases
Two new alpha releases, [rust-v0.143.0-alpha.33](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.33) and [rust-v0.143.0-alpha.34](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.34), were published in the last 24 hours. Detailed changelogs are not yet available for these pre-release iterations.

## 3. Hot Issues
1. **[Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**: The highest-voted issue (680 👍). Users are requesting a native Linux desktop app because the current macOS app suffers from severe power consumption issues that make it unusable on laptops.
2. **[SQLite feedback logs can write ~640 TB/year](https://github.com/openai/codex/issues/28224)**: A critical performance bug where feedback logs rapidly consumed SSD endurance. The issue is largely resolved in v0.142.0 via three merged PRs that reduced log volume by 85%.
3. **[WebSocket upgrade succeeds then server closes with 1008 Policy](https://github.com/openai/codex/issues/13041)**: A connectivity bug on Arch Linux where the WebSocket transport upgrades successfully but is immediately closed by server policy, causing a reconnect loop and fallback to HTTPS.
4. **[Codex replies to earlier messages instead of latest one](https://github.com/openai/codex/issues/8648)**: A context-tracking regression in multi-message conversations where the assistant loses track of the latest prompt and responds to older messages.
5. **[High GPU usage while the app is “thinking”](https://github.com/openai/codex/issues/16857)**: macOS ARM users report high GPU usage and battery drain caused by a minor, continuous UI animation during the model's "thinking" phase.
6. **[Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**: Windows users report severe UI freezing and stuttering in the desktop app despite having sufficient system resources (e.g., Ryzen 5, 32GB RAM).
7. **[Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)**: CLI users are requesting a configuration option to disable the 60-second timeout that automatically resolves pending questions, which interrupts complex workflows.
8. **[Windows Desktop: Chrome/Computer Use enabled but mcp__node_repl__js is not exposed](https://github.com/openai/codex/issues/30486)**: A bug where the bundled Computer Use plugins appear enabled on Windows, but the required JavaScript execution tool is missing, blocking browser automation.
9. **[Desktop Codex cannot open older chat sessions after recent update](https://github.com/openai/codex/issues/26104)**: A session management bug on Windows 11 where historical chat threads fail to load following a recent app update.
10. **[Usage limits draining abnormally fast on Plus](https://github.com/openai/codex/issues/30918)**: Users report the 5-hour usage limit jumping from 70% to 100% in under 6 minutes during ordinary interactive use, indicating a potential accounting or metering bug.

## 4. Key PR Progress
*Note: A significant portion of today's PR activity is dedicated to a comprehensive security refactor of Git and shell execution boundaries by @bookholt-oai and @evawong-oai.*

1. **[Centralize repository authority for Git helper launches](https://github.com/openai/codex/pull/30896)**: Creates an operation-scoped authority to validate Git executables once, preventing post-check metadata changes and significantly speeding up multi-step operations on Windows.
2. **[Derive effective patch paths through Git](https://github.com/openai/codex/pull/30837)**: Improves patch safety checks by relying on Git to resolve paths for renames and copies, ensuring policy checks guard the correct files.
3. **[Block selected Git filters before staging patch paths](https://github.com/openai/codex/pull/30850)**: Prevents Git from recursing into unchecked files and running repository-selected filters during the staging boundary.
4. **[Block selected merge drivers before three-way patch application](https://github.com/openai/codex/pull/30854)**: Ensures `git apply --3way` does not execute custom, repository-controlled merge drivers that could damage unrelated staged work.
5. **[Confine staged patch paths to the parent worktree](https://github.com/openai/codex/pull/30844)**: Resolves parent directories to prevent Git staging from following symlinks, junctions, or submodules outside the validated worktree.
6. **[Bind Git worktree helpers to a trusted executable](https://github.com/openai/codex/pull/30833)**: Forces internal worktree helpers to use a single, absolute native Git executable, preventing PATH hijacking by repository-controlled binaries.
7. **[Trust only system PowerShell parsers on Windows](https://github.com/openai/codex/pull/30628)**: Hardens command parsing on Windows by strictly using system-level PowerShell, preventing the execution of fake `powershell.exe` or `pwsh.exe` binaries placed in the repository.
8. **[Harden fake shell approval boundaries](https://github.com/openai/codex/pull/30631)**: Ensures the approval cache accounts for the wrapper shell used to execute a command, preventing models from bypassing approvals via shell wrappers.
9. **[Support interleaved response items](https://github.com/openai/codex/pull/30876)**: Preserves reasoning item IDs during streaming so that reasoning summaries can continue accurately even when final-answer events interleave.
10. **[Add configurable multi-agent mode hint text](https://github.com/openai/codex/pull/30493)**: Allows deployments to configure a stable delegation policy hint text for Multi-agent V2, overriding the default reasoning-effort-based instructions.

## 5. Feature Request Clusters
* **Cross-Platform Desktop Expansion**: There is strong, sustained demand for a native Linux desktop application ([#11023](https://github.com/openai/codex/issues/11023)) to provide an alternative to the macOS app's power consumption issues and to better support desktop Linux workflows.
* **CLI Workflow & Timeout Customization**: Developers are requesting finer control over CLI interactions, specifically the ability to disable the 60-second auto-resolve timeout for agent questions ([#28969](https://github.com/openai/codex/issues/28969)) and to expose Computer Use as a first-class CLI capability rather than just a desktop plugin ([#20851](https://github.com/openai/codex/issues/20851)).
* **Advanced Git Worktree Management**: Users want the ability to select and attach to existing Git worktrees when starting a new conversation in the desktop app, rather than being forced to create a new worktree every time ([#22316](https://github.com/openai/codex/issues/22316)).

## 6. Developer Pain Points
* **Quota and Billing Anomalies**: A recurring source of frustration is the usage metering system. Multiple developers report their 5-hour or weekly limits draining to 0% abnormally fast, or depleting entirely with zero messages sent ([#30918](https://github.com/openai/codex/issues/30918), [#30943](https://github.com/openai/codex/issues/30943), [#12747](https://github.com/openai/codex/issues/12747)), causing sudden workflow halts.
* **Windows Desktop & WSL Integration Friction**: The Windows desktop app is plagued by performance issues, including severe UI stuttering ([#20214](https://github.com/openai/codex/issues/20214)) and system temperature spikes ([#30055](https://github.com/openai/codex/issues/30055)). Furthermore, WSL integration remains brittle, with tools like `node_repl` failing to expose correctly ([#30486](https://github.com/openai/codex/issues/30486)) and image attachments saving to Windows Temp directories where the WSL agent cannot access them ([#27552](https://github.com/openai/codex/issues/27552)).
* **Model Context Degradation**: Users are experiencing reliability drops with newer models (e.g., GPT-5.5), noting that the agent frequently loses track of the conversation state, replies to older messages instead of the latest prompt ([#8648](https://github.com/openai/codex/issues/8648)), or introduces regressions into previously working code ([#24431](https://github.com/openai/codex/issues/24431)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-07-03

## 1. Today's Update Brief
The repository saw high activity focused on agent reliability, subagent execution, and Auto Memory processing. A new nightly release was published addressing a path escape vulnerability, while significant PR progress was made on core tool fixes, recursive reasoning limits, and security patches for OAuth and MCP integrations.

## 2. Releases
- **v0.51.0-nightly.20260702.gff00dacd9**: This nightly release includes a fix for a symbolic link directory escape vulnerability in the memory import processor ([Release Notes](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260701.g7f00c5fe5...v0.51.0-nightl)).

## 3. Hot Issues
1. **Subagent recovery after MAX_TURNS** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): The `codebase_investigator` subagent falsely reports `status: "success"` when hitting turn limits, hiding interruptions and incomplete analysis.
2. **Generalist agent hangs** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): Deferring to the generalist agent causes infinite hangs, even for simple tasks like folder creation, requiring users to explicitly disable subagents.
3. **Robust component level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)): An epic tracking the expansion of behavioral evaluation tests across supported Gemini models to ensure component-level reliability.
4. **Assess AST-aware file reads/search** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): Investigation into using AST-aware tools to reduce token noise, improve method boundary reading, and navigate codebases more precisely.
5. **Gemini does not use skills/sub-agents enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)): Users report that the model ignores custom skills and sub-agents unless explicitly instructed to use them, even for highly relevant tasks.
6. **Shell command execution gets stuck** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): The CLI frequently hangs and displays "Waiting input" after simple shell commands have already completed successfully.
7. **Add deterministic redaction and reduce Auto Memory logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): Auto Memory sends local transcripts to the extraction model before redaction occurs, creating a risk of secret leakage in the model context.
8. **Stop Auto Memory from retrying low-signal sessions** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): Unprocessed low-signal sessions remain in the index and are repeatedly surfaced for processing, wasting resources.
9. **Browser subagent fails in Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)): The browser agent terminates with a `GOAL` success reason but fails to execute properly in Wayland display server environments.
10. **Gemini CLI encounters 400 error with > 128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)): The API returns a 400 error when too many tools are in scope, highlighting a need for smarter tool limiting and scoping.

## 4. Key PR Progress
1. **Bypass LLM correction for JSON/IPYNB** ([#28223](https://github.com/google-gemini/gemini-cli/pull/28223)): Fixes a critical failure where `write_file` and `replace` tools corrupted Jupyter Notebook and JSON files by bypassing LLM correction for these formats.
2. **Add support for AGENTS.md out of the box** ([#28240](https://github.com/google-gemini/gemini-cli/pull/28240)): Updates the core `memoryTool` to include `AGENTS.md` alongside `GEMINI.md` as default context files without requiring explicit user configuration.
3. **Limit recursive reasoning turns** ([#28164](https://github.com/google-gemini/gemini-cli/pull/28164)): Implements a strict 15-turn limit per user request in the reasoning engine to prevent infinite loops and protect local CPU and API quotas.
4. **Avoid splitting emoji when truncating** ([#28224](https://github.com/google-gemini/gemini-cli/pull/28224)): Fixes UTF-16 surrogate pair splitting in `sanitizeForDisplay` that caused replacement characters to render when truncating strings with emojis.
5. **Show ellipsis on multi-line edit snippets** ([#28126](https://github.com/google-gemini/gemini-cli/pull/28126)): Appends `...` to `EditToolInvocation` descriptions when content is hidden, preventing multi-line edits from looking like single-line changes in the UI.
6. **Avoid keep-alive socket reuse during OAuth** ([#28103](https://github.com/google-gemini/gemini-cli/pull/28103)): Fixes "Premature close" errors during Google Sign-in on recent Node.js versions patched for CVE-2026-48931.
7. **Strip thoughts from scrubbed history turns** ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971)): Resolves thought leakage where internal model monologues bled into plain-text history, causing the model to emulate scratchpad thoughts in subsequent turns.
8. **Wrap read_mcp_resource output** ([#27979](https://github.com/google-gemini/gemini-cli/pull/27979)): Wraps MCP resource text with `wrapUntrusted()` before passing it to the model, maintaining security consistency with other MCP tools.
9. **Decode response body using charset** ([#27996](https://github.com/google-gemini/gemini-cli/pull/27996)): Fixes `web-fetch` ignoring `Content-Type` charsets, resolving garbled text on non-UTF-8 sites (e.g., GBK, ISO-8859-1).
10. **Report cached and thought tokens in ACP** ([#27986](https://github.com/google-gemini/gemini-cli/pull/27986)): Adds cached and reasoning token counts to `PromptResponse.usage` for ACP servers, fixing cost overestimations by clients.

## 5. Feature Request Clusters
- **AST-Aware Codebase Navigation**: Requests to integrate AST-aware tools for file reading, searching, and mapping to reduce token noise, improve method boundary precision, and enhance the `codebase_investigator` ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Subagent Trajectory Visibility**: Requests to make subagent execution paths and contexts visible and shareable via `/chat share` and `/bug` reports to aid in debugging, evaluation, and transparency ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Agent Self-Awareness and Configuration**: Requests for the agent to better understand its own CLI flags, hotkeys, and mechanics, as well as strictly respecting `settings.json` overrides like `maxTurns` for subagents ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## 6. Developer Pain Points
- **Agent Hanging and Infinite Loops**: Developers frequently report the CLI hanging during shell command execution ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), generalist agent deferrals ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), or getting stuck in interactive prompts like Vite app creation ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Auto Memory Processing Flaws**: Frustration with Auto Memory repeatedly retrying low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently skipping invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and potential secret leakage before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Destructive or Messy Workspace Behavior**: Complaints about the model generating temporary edit scripts in random directories, complicating clean commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and using destructive commands like `git reset --force` when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: 2026-07-03

## 1. Today's Update Brief
The GitHub Copilot CLI shipped a minor release (v1.0.69-0) focused on sandbox path completions and session/MCP performance optimizations. Community issue activity remains high, dominated by terminal rendering bugs, MCP integration edge cases, and Bring Your Own Key (BYOK) configuration friction, while pull request activity was limited to non-substantive submissions.

## 2. Releases
**v1.0.69-0**
*   **Added:** File and folder completion to `/sandbox` path entries.
*   **Fixed:**
    *   Backgrounded session branch labels now update correctly in the Sessions split view when the working directory changes.
    *   Skipped unnecessary MCP reloads when returning to an already-loaded session to improve performance.
    *   Prevented the `tgrep` indexer from running unnecessarily in the background.

## 3. Hot Issues
1.  **[Plan→Compact→Re-Plan infinite loop](https://github.com/github/copilot-cli/issues/3158)**: A high-severity bug where the agent enters an infinite loop (217 cycles observed) of compacting and re-reading context at ~75% capacity without executing code.
2.  **[Model "gpt-5.3-codex" is not available](https://github.com/github/copilot-cli/issues/3997)**: Users are blocked from running the agent due to a runtime `-32603` error stating the `gpt-5.3-codex` model is unavailable during session creation.
3.  **[MCP `tools/list` pagination not followed](https://github.com/github/copilot-cli/issues/4006)**: The CLI ignores the `nextCursor` in MCP `tools/list` responses, silently dropping tools on subsequent pages and violating the MCP specification.
4.  **[Scroll bar makes text unalign on Windows](https://github.com/github/copilot-cli/issues/3501)**: The introduction of a vertical scrollbar has broken text rendering and alignment for Windows users across both Windows Console Host and Windows Terminal.
5.  **[.claude/settings.json hooks fail on Windows](https://github.com/github/copilot-cli/issues/4001)**: Hooks are executed via PowerShell instead of bash, and `$CLAUDE_PROJECT_DIR` is not set, breaking compatibility with the expected hook contract.
6.  **[Incorrectly switches back to previous model after BYOK](https://github.com/github/copilot-cli/issues/3978)**: After running out of AIC and switching to a BYOK configuration, resuming a session causes the CLI to automatically revert to the previous default model.
7.  **[macOS: Ctrl+V image paste fails with raw image data](https://github.com/github/copilot-cli/issues/4013)**: Pasting raw image data (e.g., from SnagIt or Preview) via Ctrl+V is a no-op on macOS, though drag-and-drop file references work correctly.
8.  **[Screen-reader does not echo typed characters](https://github.com/github/copilot-cli/issues/3993)**: An accessibility regression where screen readers fail to echo characters typed in the Copilot prompt, preventing visually impaired users from reviewing or correcting input.
9.  **[copilot plugin install does not register plugin MCP servers](https://github.com/github/copilot-cli/issues/4004)**: When installing a plugin that ships with an `.mcp.json` file, the servers are copied to the installation directory but never registered in `~/.copilot/mcp-config.json`.
10. **[`/new` discards in-memory usage statistics](https://github.com/github/copilot-cli/issues/3994)**: Starting a new session with `/new` abandons `modelMetrics` without triggering a `session.shutdown` event, resulting in permanent loss of token usage telemetry.

## 4. Key PR Progress
*Note: Only 2 PRs were updated in the last 24 hours, and both appear to be non-substantive, test, or spam submissions. No major feature or fix PRs were progressed in this window.*
1.  **[beyond the streets of amaerica](https://github.com/github/copilot-cli/pull/3880)**: Contains unrelated React/Next.js UI component code (`ArtistCard`). Appears to be a mistaken or spam submission.
2.  **[1000Add initial console log for greeting](https://github.com/github/copilot-cli/pull/3873)**: A trivial or test PR adding a basic console log. No substantial CLI logic changes.

## 5. Feature Request Clusters
*   **Custom Models & BYOK Enhancements**: Users are requesting the ability to configure custom model endpoints in the CLI similar to VS Code's Language Models panel ([#4003](https://github.com/github/copilot-cli/issues/4003)), as well as better support for reasoning effort flags when using custom BYOK configurations ([#4012](https://github.com/github/copilot-cli/issues/4012)).
*   **MCP & Plugin Management**: Requests include running the `/init` command non-interactively for shell scripts ([#4011](https://github.com/github/copilot-cli/issues/4011)), adding persistent command deny-rules to `permissions-config.json` ([#3995](https://github.com/github/copilot-cli/issues/3995)), and providing warnings when MCP servers with identical names are registered across different plugins ([#3893](https://github.com/github/copilot-cli/issues/3893)).
*   **Terminal UX & Parity**: Developers want parity with other CLI tools, such as expanding paste tokens to full text in `$EDITOR` via Ctrl+G ([#3936](https://github.com/github/copilot-cli/issues/3936)), clarifying the functional differences between `/clear` and `/new` in tooltips ([#3569](https://github.com/github/copilot-cli/issues/3569)), and allowing extensions to render live, refreshing panels in the terminal ([#3979](https://github.com/github/copilot-cli/issues/3979)).

## 6. Developer Pain Points
*   **Terminal Rendering & Clipboard Friction**: The new scrollbar implementation is causing significant UX issues, including text misalignment on Windows ([#3501](https://github.com/github/copilot-cli/issues/3501)) and corrupting mouse-selection copies by appending the scrollbar glyph (`┃`) to every line ([#4009](https://github.com/github/copilot-cli/issues/4009)). Additionally, clipboard operations fail silently in browser-based VSCode Server environments ([#3996](https://github.com/github/copilot-cli/issues/3996)) and mislead users with "Copied to clipboard" notifications when text is merely selected without the Shift key ([#4010](https://github.com/github/copilot-cli/issues/4010)).
*   **Agent State & Telemetry Instability**: Developers are frustrated by agent loops that consume context without executing tasks ([#3158](https://github.com/github/copilot-cli/issues/3158)), session state bugs that revert BYOK model selections ([#3978](https://github.com/github/copilot-cli/issues/3978)), and billing entity errors that block memory saves in enterprise setups ([#4005](https://github.com/github/copilot-cli/issues/4005)).
*   **Cross-Platform Permission & Hook Execution**: Windows users face compounding friction with permissions, notably `.claude/settings.json` hooks failing due to PowerShell execution instead of bash ([#4001](https://github.com/github/copilot-cli/issues/4001)), and `allowed-tools: shell` failing to auto-approve compound commands using `&&` or `|` ([#3165](https://github.com/github/copilot-cli/issues/3165)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### 1. Today's Update Brief
Activity on the Kimi Code CLI repository was light over the last 24 hours, with no new releases published and minimal pull request volume. Community engagement primarily focused on troubleshooting an infinite file-reading loop in the agent execution and resolving network routing issues with Tailscale, alongside a targeted fix for Windows terminal clipboard handling.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[OPEN] [#640] [bug] Kimi CLI stuck in reading one file again and again and stuck in a loop**
    *   **Workflow & Impact:** Disrupts the core coding workflow by causing the CLI agent to hang in an infinite loop when repeatedly reading a single file. This blocks user interaction and wastes compute resources.
    *   **Context & Reaction:** The user is running version 0.76 on Linux (Arch) using a custom Anthropic endpoint with the `mimo-v2-flash` model. The issue has generated active discussion with 16 comments as users and maintainers investigate the agent's context-handling behavior.
    *   **Link:** [github.com/MoonshotAI/kimi-cli/issues/640](https://github.com/MoonshotAI/kimi-cli/issues/640)
*   **[CLOSED] [#1111] [bug] kimi web use tailscale websocket connecttion error**
    *   **Workflow & Impact:** Prevents users on macOS (Darwin arm64) from establishing a WebSocket connection to the Kimi web interface when routing traffic through Tailscale, breaking secure/remote access workflows.
    *   **Context & Reaction:** Reported on version 1.12.0. The issue was closed after 2 comments, indicating a likely resolution or workaround was identified for the Tailscale routing conflict.
    *   **Link:** [github.com/MoonshotAI/kimi-cli/issues/1111](https://github.com/MoonshotAI/kimi-cli/issues/1111)

### 4. Key PR Progress
*   **[OPEN] [#2481] fix(shell): read clipboard media on BracketedPaste for Windows terminals**
    *   **Description:** Addresses a silent failure when pasting binary content (such as images) in Windows Terminal and VS Code's integrated terminal. Because these terminals handle `Ctrl+V` internally and emit a `BracketedPaste` event, binary data cannot be carried as plain text. This PR updates `_handle_bracketed_paste()` to properly intercept and process the media content.
    *   **Link:** [github.com/MoonshotAI/kimi-cli/pull/2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)

### 5. Feature Request Clusters
No distinct feature request clusters were identified in today's data. Recent issue activity was strictly focused on bug resolution, agent execution stability, and platform-specific compatibility fixes rather than new feature proposals.

### 6. Developer Pain Points
*   **Agent Execution Loops and Hangs:** Developers experience significant friction when the AI agent fails to progress and gets trapped in repetitive actions (e.g., reading the same file infinitely). This halts productivity and requires manual intervention to kill the process (#640).
*   **Environment and Network Compatibility Friction:** Users encounter silent failures or connection drops when operating the CLI in non-standard environments. Specific pain points include WebSocket routing conflicts with secure mesh networks like Tailscale (#1111) and clipboard paste failures for binary data in Windows-based terminal emulators (#2481).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## Today's Update Brief
Activity over the last 24 hours highlights a strong push toward refining the OpenCode Desktop app's window management and V2 core architecture, alongside active troubleshooting for Windows-specific regressions and provider routing bugs. Maintainers and contributors are heavily focused on stabilizing session log replay, subagent notifications, and tab navigation, while the community continues to report performance bottlenecks and billing anomalies in the latest CLI and Desktop builds.

## Hot Issues
1. **[FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction** ([#28846](https://github.com/anomalyco/opencode/issues/28846)) - *90 comments, 82 👍*. A highly engaged discussion requesting subscription limit adjustments to reflect DeepSeek's pricing drop, highlighting user sensitivity to token economics and subscription value.
2. **[FEATURE]: VS Code Integration for Reviewing OpenCode Code Changes (Diff Preview)** ([#8003](https://github.com/anomalyco/opencode/issues/8003)) - *16 comments, 73 👍*. Users report that previewing large file modifications in the TUI is painful, driving strong demand for a native VS Code diff integration to improve the code review workflow.
3. **Zen API endpoints return 404 on CORS preflight (OPTIONS)** ([#31041](https://github.com/anomalyco/opencode/issues/31041)) - *8 comments*. A critical routing bug where CORS preflight requests to Zen API endpoints return 404 HTML pages, completely blocking browser-based clients from connecting.
4. **New Layout and Designs breaks Plan/Build switching** ([#31972](https://github.com/anomalyco/opencode/issues/31972)) - *6 comments*. Enabling the new layout feature flag on Windows 10 breaks both the UI toggle and `Ctrl+.` shortcut for switching between Plan and Build modes, blocking core workflows.
5. **OpenCode Go hangs forever after "build" on Windows (v1.17.13)** ([#35035](https://github.com/anomalyco/opencode/issues/35035)) - *3 comments*. A severe regression in v1.17.13 where Windows users experience indefinite hangs after the build phase across multiple Go subscription models (glm-5.2, qwen3.6-plus).
6. **Desktop app hangs and crashes when rendering large session diff summary** ([#33106](https://github.com/anomalyco/opencode/issues/33106)) - *3 comments*. The Electron main process becomes unresponsive and crashes on macOS arm64 when attempting to render existing sessions with large diff histories, pointing to memory/rendering limits.
7. **[bug] Hidden calls Haiku** ([#10272](https://github.com/anomalyco/opencode/issues/10272)) - *9 comments*. Users report silent fallback billing to Claude Haiku 4.5 via OpenRouter when MiniMax M2.1 is explicitly selected, raising concerns about transparent model routing and billing.
8. **High resource usage after updating from 1.17.11 to 1.17.13** ([#35009](https://github.com/anomalyco/opencode/issues/35009)) - *2 comments*. Reports of significant performance regressions in the latest CLI update, with RAM usage spiking to ~1GB RSS and 75GB virtual memory during normal conversations.
9. **V2 runner has no native route for @ai-sdk/xai models, dropping prompt cache key** ([#35034](https://github.com/anomalyco/opencode/issues/35034)) - *1 comment*. The V2 session runner lacks a branch for xAI catalog models, causing `UnsupportedApiError` and dropping prompt cache keys, which degrades Grok performance and increases costs.
10. **Duplicate webhook delivery grants free credits** ([#28402](https://github.com/anomalyco/opencode/issues/28402)) - *1 comment*. A backend vulnerability where Stripe webhook handlers lack idempotency protection, allowing automatic retries to insert duplicate payment rows and grant unintended free credits.

## Key PR Progress
1. **feat(desktop): reopen closed tabs, cmd+w close tab, background tab open** ([#35010](https://github.com/anomalyco/opencode/pull/35010)) - Introduces browser-style tab management to the desktop/v2 tab strip, adding `⇧⌘T` to reopen closed tabs and `Cmd+W` to close them.
2. **feat(core): deterministic session log replay with synced watermark** ([#35040](https://github.com/anomalyco/opencode/pull/35040)) - Replaces the moving-boundary `log.caught_up` marker with a fixed `log.synced` watermark, making reconnect-safe log replay deterministic while preserving live tail delivery.
3. **fix(session): notify parent when subagents finish** ([#35041](https://github.com/anomalyco/opencode/pull/35041)) - Emits a synthetic task result to the parent session when a child session finishes, ensuring background completion flows correctly through the child hierarchy.
4. **feat(desktop): add recently closed projects to home** ([#34926](https://github.com/anomalyco/opencode/pull/34926)) - Adds a "Recently closed" projects list to the desktop home view to improve project switching and recovery workflows.
5. **fix(opencode): send xai prompt cache routing key** ([#35030](https://github.com/anomalyco/opencode/pull/35030)) - Fixes xAI prompt caching by sending a stable conversation identifier (`x-grok-conv-id`), ensuring requests are routed to the server holding the cached prefixes.
6. **feat(app): terminal improvements** ([#34747](https://github.com/anomalyco/opencode/pull/34747)) - Integrates `dnd-kit` tabs into the terminal panel for better navigation and resolves underlying terminal layout issues.
7. **feat(app): align tool call UI with v2** ([#34931](https://github.com/anomalyco/opencode/pull/34931)) - Updates the sub-agent and tool call UI components to align with the V2 design system and visual standards.
8. **feat(opencode): support per-variant limit overrides** ([#34815](https://github.com/anomalyco/opencode/pull/34815)) - Allows model config variants to carry specific `limit` overrides, enabling setups like a 200k-context preset alongside standard limits for the same model.
9. **feat(tui): clear prompt input on double escape** ([#35036](https://github.com/anomalyco/opencode/pull/35036)) - Adds a TUX UX improvement that clears the prompt input when the user presses Escape twice, streamlining prompt resets.
10. **feat(app): improvements to model search** ([#34954](https://github.com/anomalyco/opencode/pull/34954)) - Normalizes separators and punctuation in the composer model picker, allowing queries like `gpt 5`, `gpt-5`, and `gpt5` to match correctly.

## Feature Request Clusters
*   **Desktop Navigation & Window Management:** Users are requesting more robust desktop app navigation, including browser-style tab management (reopen closed tabs, background opening), "Recently closed" project lists, and improved folder pickers with nested search capabilities ([#35010](https://github.com/anomalyco/opencode/pull/35010), [#34926](https://github.com/anomalyco/opencode/pull/34926), [#35039](https://github.com/anomalyco/opencode/issues/35039)).
*   **IDE & External Editor Integrations:** There is a strong desire to offload heavy UI tasks to established IDEs, specifically requesting a VS Code integration for reviewing large code diffs rather than relying on the TUI ([#8003](https://github.com/anomalyco/opencode/issues/8003)).
*   **First-Class Provider & Search Integrations:** Requests to treat web search as a first-class capability via an integration API, alongside better native routing and per-variant limit overrides for specific providers like xAI ([#35038](https://github.com/anomalyco/opencode/issues/35038), [#34815](https://github.com/anomalyco/opencode/pull/34815)).
*   **V2 Core Architecture & Observability:** Internal and community-driven pushes to formalize V2 event schemas, audit trackers, and deterministic log replay to support more complex multi-agent workflows ([#35021](https://github.com/anomalyco/opencode/issues/35021), [#35040](https://github.com/anomalyco/opencode/pull/35040)).

## Developer Pain Points
*   **Desktop App Performance & Stability:** The Electron-based desktop app is suffering from memory leaks and renderer crashes, particularly when handling large session histories, heavy contexts, or large diff summaries ([#33106](https://github.com/anomalyco/opencode/issues/33106), [#35026](https://github.com/anomalyco/opencode/issues/35026)).
*   **Windows-Specific Regressions:** Windows users are disproportionately affected by recent updates, reporting broken UI toggles for Plan/Build modes, CLI hangs during the build phase, and raw JSON rendering on startup ([#31972](https://github.com/anomalyco/opencode/issues/31972), [#35035](https://github.com/anomalyco/opencode/issues/35035), [#35032](https://github.com/anomalyco/opencode/issues/35032)).
*   **Billing & Routing Surprises:** Developers are frustrated by silent fallbacks to cheaper models (like Haiku) via OpenRouter, unexpected credit limit errors on "free" models, and backend webhook idempotency flaws that mess with account credits ([#10272](https://github.com/anomalyco/opencode/issues/10272), [#12219](https://github.com/anomalyco/opencode/issues/12219), [#28402](https://github.com/anomalyco/opencode/issues/28402)).
*   **Session Resilience & Context Overhead:** Sessions frequently fail to recover after network interruptions (especially when subagents are delegated), and local `llama.cpp` performance is severely degraded when automatic session title generation is enabled ([#35029](https://github.com/anomalyco/opencode/issues/35029), [#33126](https://github.com/anomalyco/opencode/issues/33126)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-07-03

## 1. Today's Update Brief
The Qwen Code repository saw active development focusing on channel integrations, sub-agent nesting, and performance optimizations. Maintainers shipped v0.19.5 with daemon and web-shell stability fixes, while the community heavily engaged in refining background automation, multi-platform UI rendering, and CI/CD packaging pipelines.

## 2. Releases
- **v0.19.5 & v0.19.4-nightly**: Hardened the daemon-managed channel worker ([#6098](https://github.com/QwenLM/qwen-code/pull/6098)) and deferred web-shell session creation until the first prompt to improve startup performance and resource allocation.

## 3. Hot Issues
1. **Incorrect Context Window Calculation** ([#6144](https://github.com/QwenLM/qwen-code/issues/6144)): Users reported Qwen-Code miscalculating the context window for Qwen3-Coder instances, directly affecting token management and long-context workflows.
2. **Mobile Web-Shell Jank** ([#6181](https://github.com/QwenLM/qwen-code/issues/6181)): Session switching on mobile web-shells causes severe UI freezing due to full transcript rendering and uncompressed history loads triggering during drawer animations.
3. **Auth Config Persistence Bug** ([#5979](https://github.com/QwenLM/qwen-code/issues/5979)): Modifying model provider configurations via `/auth` works for the current session but reverts and throws 401 errors in subsequent new sessions.
4. **Thinking Output Streaming Broken** ([#6175](https://github.com/QwenLM/qwen-code/issues/6175)): OpenAI-compatible models outputting `reasoning_content` display "Thought for 0s" and fail to stream the thinking process in the UI.
5. **VSCode Companion Release Failure** ([#6199](https://github.com/QwenLM/qwen-code/issues/6199)): The CI pipeline for the VSCode extension failed because `vsce` falsely flagged a bundled Slack token regex as a leaked secret.
6. **Follow-up Suggestion Filtering** ([#6077](https://github.com/QwenLM/qwen-code/issues/6077)): The interactive follow-up suggestion engine mistakenly filters out valid sentences containing abbreviations, incorrectly identifying them as multiple sentences.
7. **Windows Console Garbled Text** ([#6214](https://github.com/QwenLM/qwen-code/issues/6214)): `run_shell_command` outputs garbled text on Windows when the console code page is not set to UTF-8.
8. **Daemon UI for Vision Model** ([#6195](https://github.com/QwenLM/qwen-code/issues/6195)): Users requested UI support in the daemon to select and persist the vision bridge model, which is currently only configurable via CLI flags.
9. **Local Always-On Schedule Daemon** ([#6112](https://github.com/QwenLM/qwen-code/issues/6112)): A highly engaged request to add a `/schedule` command and companion daemon for running cron tasks locally without an open interactive session.
10. **QQ Bot Streaming & Cron Issues** ([#6094](https://github.com/QwenLM/qwen-code/issues/6094)): Identified interaction issues between cron jobs and `blockStreaming` in the QQ Bot adapter, leading to duplicate messages and instruction timing bugs.

## 4. Key PR Progress
1. **Nested Sub-Agents** ([#6189](https://github.com/QwenLM/qwen-code/pull/6189)): Introduces configurable nesting depth for sub-agents, allowing them to spawn their own sub-agents up to a defined limit (default 5).
2. **Sub-Agent TUI Tree View** ([#6191](https://github.com/QwenLM/qwen-code/pull/6191)): Updates the CLI TUI to display nested sub-agents as a hierarchical tree rather than a flat list, improving background task visibility.
3. **WeCom Channel Adapter** ([#6210](https://github.com/QwenLM/qwen-code/pull/6210)): Adds a built-in Enterprise WeChat (WeCom) channel adapter for custom applications, handling callbacks, decryption, and message routing.
4. **Glob Traversal Performance** ([#6123](https://github.com/QwenLM/qwen-code/pull/6123)): Optimizes the `glob` tool by pruning ignored directories during traversal rather than post-filtering, significantly speeding up file discovery.
5. **OpenAI Reasoning Preservation** ([#6192](https://github.com/QwenLM/qwen-code/pull/6192)): Fixes streaming thought descriptions for OpenAI-compatible models by preserving raw `reasoning_content` instead of applying Gemini-style structured parsing.
6. **QQ Bot Group & Streaming Fixes** ([#6206](https://github.com/QwenLM/qwen-code/pull/6206), [#6204](https://github.com/QwenLM/qwen-code/pull/6204)): Overhauls the QQ Bot adapter with group message handling, keyword triggers, idle-flush buffering, and stale-callback protection.
7. **Dataviz Bundled Skill** ([#6198](https://github.com/QwenLM/qwen-code/pull/6198)): Adds a `dataviz` skill to provide chart/dashboard design guidance and a local palette validation script for the experimental Artifact tool.
8. **Per-Tool-Call Execution Timeout** ([#6124](https://github.com/QwenLM/qwen-code/pull/6124)): Introduces an opt-in, configurable execution timeout at the `CoreToolScheduler` layer to prevent hanging tool calls.
9. **Autofix ECS Runners** ([#6207](https://github.com/QwenLM/qwen-code/pull/6207)): Routes heavy Qwen Autofix agent CI jobs to dedicated self-hosted ECS runners to improve pipeline reliability and speed.
10. **CUA Driver Sync** ([#6212](https://github.com/QwenLM/qwen-code/pull/6212)): Syncs the vendored `cua-driver` from 0.6.8 to 0.7.0, introducing action-time modality and honest verification for UI automation.

## 5. Feature Request Clusters
- **Background Automation & Daemons**: Strong interest in decoupling tasks from interactive sessions. Requests include a local always-on `/schedule` daemon ([#6112](https://github.com/QwenLM/qwen-code/issues/6112)), daemon-managed channel workers via `qwen serve` ([#5976](https://github.com/QwenLM/qwen-code/issues/5976)), and configurable expiration for recurring cron/loop jobs ([#6167](https://github.com/QwenLM/qwen-code/issues/6167)).
- **Enterprise & IM Channel Integrations**: Expanding multi-platform communication. Developers are requesting built-in adapters for Enterprise WeChat/WeCom ([#6208](https://github.com/QwenLM/qwen-code/issues/6208)), proactive send support for DingTalk channel loops ([#6168](https://github.com/QwenLM/qwen-code/issues/6168)), and enhanced QQ Bot group messaging ([#6094](https://github.com/QwenLM/qwen-code/issues/6094)).
- **UI Accessibility & Design Guidance**: Improving non-CLI interfaces. Requests include full keyboard navigation and screen-reader accessibility for web-shell list dialogs ([#6127](https://github.com/QwenLM/qwen-code/issues/6127)), daemon UI for vision model selection ([#6195](https://github.com/QwenLM/qwen-code/issues/6195)), and design-guidance skills for the Artifact tool ([#6190](https://github.com/QwenLM/qwen-code/issues/6190)).

## 6. Developer Pain Points
- **Context & Token Overhead**: Developers are frustrated by inefficient token usage. Issues highlight incorrect context window calculations for specific models ([#6144](https://github.com/QwenLM/qwen-code/issues/6144)) and a massive ~22k token fixed overhead for minimal input system prompts, resulting in a 0.2% signal-to-noise ratio ([#6097](https://github.com/QwenLM/qwen-code/issues/6097)).
- **Cross-Platform Rendering & Packaging**: Environment-specific bugs continue to disrupt workflows. Pain points include garbled shell output on non-UTF-8 Windows consoles ([#6214](https://github.com/QwenLM/qwen-code/issues/6214)), fatal launch errors on macOS due to missing sandbox `.sb` files ([#6089](https://github.com/QwenLM/qwen-code/issues/6089)), and severe UI flickering in Linux terminal emulators like xterm and alacritty ([#6137](https://github.com/QwenLM/qwen-code/issues/6137)).
- **CI/CD & Distribution Friction**: Packaging and release pipelines are facing avoidable blockers. The VSCode extension release was halted by false-positive secret scanning ([#6199](https://github.com/QwenLM/qwen-code/issues/6199)), the npm package was flagged by security scanners due to bundled install hooks ([#6163](https://github.com/QwenLM/qwen-code/issues/6163)), and users report outdated versions in Homebrew and Taobao npm mirrors ([#6187](https://github.com/QwenLM/qwen-code/issues/6187), [#6218](https://github.com/QwenLM/qwen-code/issues/6218)).

</details>