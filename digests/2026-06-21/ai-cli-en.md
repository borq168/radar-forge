# AI CLI Tools Community Digest 2026-06-21

> Generated: 2026-06-21 00:36 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report based on today’s community digest summaries.

---

### AI CLI Developer Tools – Cross-Tool Comparison Report (2026-06-21)

**1. Daily Cross-Tool Overview**

Today’s activity across the seven tracked AI CLI tools reflects a community focused on stabilization and bug fixing, with a significant number of issues and pull requests targeting regression bugs and compatibility gaps. Multiple projects shipped minor releases or patches, with **OpenCode** (v1.17.9) and **Qwen Code** (v0.18.4) addressing agent-step-limit and input validation bugs, respectively. A clear shared theme emerged around **subagent/agent lifecycle issues** and **network/reconnect reliability**, affecting user trust in long-running sessions across Claude Code, Gemini CLI, and OpenCode. While feature requests for sandboxing, context visibility, and MCP enhancements appeared across multiple tools, no single new feature direction dominated the day.

**2. Activity Comparison**

| Tool | Issues Updated (24h) | PRs Active (24h) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | Heavy (10 hot issues) | 4 PRs | Yes: v2.1.185 |
| **OpenAI Codex** | Very High (50 issues) | 20 PRs (1 revert) | Yes: rust-v0.142.0-alpha.7 |
| **Gemini CLI** | High (50 issues) | 10 PRs | None |
| **GitHub Copilot CLI** | Moderate (13 issues) | 3 PRs | None |
| **Kimi Code CLI** | Low (2 closed items) | 1 PR (updated) | None |
| **OpenCode** | Very High (50 issues) | 10+ PRs | Yes: v1.17.9 |
| **Qwen Code** | Moderate-High (10 hot issues) | 10 PRs (majority merged) | Yes: v0.18.4 |

**3. Shared Feature Directions**

Several feature requirements appeared across multiple tool communities today.

- **Subagent / Agent Control & Transparency**
  - *Claude Code (#68619)*: Infinite subagent recursion leading to token burn.
  - *Gemini CLI (#21409, #22323)*: Generalist agent hangs and false success reporting on max turns.
  - *GitHub Copilot CLI (#3875)*: Subagent spawning fails under specific `deferTools` configurations.
  - *OpenCode (#33128, #15080)*: Infinite session compaction loops and requests for configurable subagent timeouts.
  - **Common Need**: Users demand more control over agent lifecycle (spawning, termination, fallback behavior) and clear reporting on agent status.

- **MCP / Plugin Integration Gaps**
  - *Claude Code (#19054)*: MCP servers ignored by VS Code extension.
  - *OpenAI Codex (#29189)*: Sandbox metadata regression broke MCP tools (e.g., `node_repl`, `@Browser`).
  - *Gemini CLI (#27878)*: MCP image MIME type handling causing errors.
  - *GitHub Copilot CLI (#3871, #3872)*: No command to list hooks; silent failures on misconfigured hook events.
  - **Common Need**: MCP and plugin support remains fragile across surfaces. Users request better stability, debug tooling, and feature parity between CLI and IDE extensions.

- **Terminal & UI UX Regressions**
  - *Claude Code (#61675, #65669)*: No collapse control for long prompts; session folder loss after update.
  - *GitHub Copilot CLI (#3876, #3869, #3868)*: Mouse tracking disabled on exit; cramped `/ask` text box; app hangs on right-click.
  - *OpenCode (#27589)*: TUI fails on Alpine Linux (musl).
  - **Common Need**: Terminal and TUI polish is a recurring pain point, affecting core daily usability.

- **Session Management & Visibility**
  - *Claude Code (#69764)*: Mobile-triggered session transcripts not persisted.
  - *OpenAI Codex (#25319)*: Request for per-workspace chat isolation in VS Code.
  - *GitHub Copilot CLI (#3867, #3877)*: Request for context window indicator and auto-allow permissions.
  - *OpenCode (#6152, #8501)*: Session context breakdown TUI and expandable pasted text.
  - **Common Need**: Users want better visibility into session state, token usage, and history management.

**4. Differentiation Analysis**

Today’s data shows each tool’s distinct focus, though the community concerns reveal overlap.

- **Claude Code** is currently prioritizing **operational stability**, with fixes for stream-stall timeouts, hookify, and workflow bugs. The community is deeply concerned with the **subagent recursion bug** (#68619) and **Linux API connection instability** (#69358), suggesting a user base heavily reliant on autonomous background agents on server infrastructure.
- **OpenAI Codex** is in a **response mode** following a critical sandbox metadata regression (#29189) that blocked browser automation tools. The community’s high engagement on cost transparency (#28879) and the large volume of PRs (especially the revert PR #29268) indicate a focus on platform integrity after a breaking change.
- **Gemini CLI** shows a sustained high level of activity around **agent behavior refinement** and **security hardening**. The focus on preventing agent hang loops (#21409) and infinite web search retries (#28037), along with critical CVE patches, points to a development emphasis on reliability and safety.
- **GitHub Copilot CLI** has the lowest issue/PR count but a strong signal on **plugin and UX polish**. The requests for better hook discoverability (#3871) and persistent permissions (#3877) highlight a maturing product where users want to fine-tune defaults and debug integrations.
- **Kimi Code CLI** remains in a quiet phase, with only two items updating. The closed issues on Windows extraction (#2462) and clickable symbols (#2440) suggest recent fixes, but low activity overall.
- **OpenCode** features the most diverse activity. The community is highly engaged on **radical extensibility** (Android/Termux support, shared terminal panes) and **performance for local models** (skip-title config). This contrasts with more enterprise-focused tools (e.g., GitHub Copilot) and suggests a user base of power users and enthusiasts optimizing for edge cases.
- **Qwen Code** is undergoing a **systematic security and input validation refactor**. The large cluster of issues around URL case-sensitivity and path prefix matching (#5442, #5462, etc.) shows deep work on defensive coding. This is a lower-level, but critical, differentiator for reliability in multi-provider environments.

**5. Community Activity Notes**

- **Highest Issue/PR Volume**: **OpenAI Codex** and **OpenCode** both saw very high activity with 50 issues each. OpenAI Codex’s activity is crisis-driven (sandbox regression), while OpenCode’s is a mix of bug reports, feature PRs, and ongoing development.
- **New Releases**: Three tools shipped releases. **OpenCode** (v1.17.9) and **Qwen Code** (v0.18.4) were patch releases addressing specific bugs. **Claude Code** (v2.1.185) was a minor UX improvement. **OpenAI Codex** also published an alpha release without notes.
- **Maintainer Response**: **Qwen Code** had the highest PR merge rate, with 7+ PRs merged today, indicating strong maintainer activity. **Gemini CLI** also shows active maintenance with 10 PRs in progress. In contrast, **Kimi Code CLI** and **GitHub Copilot CLI** show minimal maintainer interaction.
- **Community Hangover**: The **sandboxPolicy regression** in OpenAI Codex (#29189) is the single highest-engagement bug cluster today, with over 10 duplicate reports and a hotfix revert PR. This is a clear "all hands on deck" incident for the OpenAI team.

**6. Evidence-Backed Observations**

1.  **Subagent and agent lifecycle management is a cross-cutting pain point.** Multiple independent reports of infinite loops, false success reporting, and permission bypassing across Claude Code, Gemini CLI, and GitHub Copilot CLI suggest that current agent orchestration logic lacks robust guardrails and state reporting. This is a general ecosystem challenge, not a single-tool deficiency.

2.  **MCP integration is still a fragile area across multiple surfaces.** The combination of Claude Code’s VS Code MCP gap, OpenAI Codex’s sandbox metadata regression, and Gemini CLI’s MCP image handling bug shows that MCP support, while a selling point, is not yet mature enough for reliable daily use across different editors and operating systems.

3.  **Terminal and TUI user experience is a general pain point.** Reports of mouse tracking disabled, cramped text boxes, app hangs on right-click, database corruption after update, and TUI failures on non-standard Linux distros (Alpine/musl) appear across Claude Code, Copilot CLI, and OpenCode. Basic UI/UX reliability remains a blocker for many users.

4.  **Input validation and path safety are a focus for Qwen Code, but a silent issue elsewhere.** The large cluster of URL case-sensitivity bugs fixed in Qwen Code today has no direct parallel in other tools’ top issues. This suggests that while Qwen Code is actively hardening against these vulnerabilities, other tools may have similar latent issues that have not yet been exploited or reported.

5.  **Configuration state and default behavior are a persistent source of friction.** Users across Copilot CLI (auto-allow permissions, default mode), Claude Code (CLAUDE.md instruction disregard), and OpenCode (ignored env vars, session title generation) are frustrated by tools not reliably applying user-configured defaults. This undermines trust in predictable, reproducible sessions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-21

## Today's Update Brief

A single release went out today (v2.1.185) with a UX improvement to stream-stall timeout messaging. Community bug reports remain intense: a critical subagent recursion issue (🔥 55 upvotes, 19 comments) and an MCP-VS Code integration gap (26 upvotes, 21 comments) are driving most of the discussion. Four pull requests were opened in the last 24 hours, all targeting bug fixes in hookify, workflows, and documentation.

## Releases

**v2.1.185** — The stream-stall hint now reads *«Waiting for API response · will retry in …»* instead of *«No response from API · Retrying in …»*, and triggers after 20 seconds of silence instead of 10 seconds. A small but user-facing comfort improvement for intermittent API connections.

## Hot Issues

1. **#69358 – `No Response From API` on Linux (regression)**
   [Issue link](https://github.com/anthropics/claude-code/issues/69358)
   Users on versions 2.1.181 and 2.1.183 are hitting persistent "No Response From API" errors on Linux. With 55 upvotes and 19 comments, this is the highest-engagement open issue. Impact: total work stoppage for affected users. The regression label suggests a recent change broke something in the API transport layer.

2. **#19054 – MCP Servers not used in VS Code extension**
   [Issue link](https://github.com/anthropics/claude-code/issues/19054)
   Claude Code for VS Code completely ignores configured MCP servers. 26 upvotes, 21 comments. Since MCP tool integration is a major selling point, this blocks an entire category of workflows (database access, file system operations, custom tooling) for VS Code users.

3. **#68619 – Subagent recursion causing infinite token burn (critical)**
   [Issue link](https://github.com/anthropics/claude-code/issues/68619)
   Subagents spawn 50+ levels deep, ignoring the `CLAUDE_CODE_FORK_SUBAGENT=0` flag. Permission denials trigger *more* agent spawning instead of stopping. Commenters report agents fetching individual files from GitHub repos via HTTP, grossly inflating token usage. 18 comments, 5 upvotes.

4. **#60339 – CLAUDE.md instructions not consistently applied**
   [Issue link](https://github.com/anthropics/claude-code/issues/60339)
   The model intermittently violates explicit instructions from `~/.claude/CLAUDE.md` even when the file is loaded at session start. 8 comments. This undermines trust in project-level configuration.

5. **#61114 – Desktop app crashes on launch (unsigned binary, macOS arm64)**
   [Issue link](https://github.com/anthropics/claude-code/issues/61114)
   Desktop app v1.8089.1 bundles a Claude Code 2.1.142 binary that is unsigned or malformed, causing immediate crash on macOS arm64. 7 comments. Workaround: users cannot launch the desktop app at all.

6. **#68789 – Background daemon sessions fail permanently on transient socket errors**
   [Issue link](https://github.com/anthropics/claude-code/issues/68789)
   When a background agent session encounters a transient network error (`The socket connection was closed unexpectedly`), the daemon marks the session as permanently `failed` rather than retrying with backoff. No auto-reconnect, no manual restart. 4 comments.

7. **#69802 – `ExitWorktree` reports success but orphans worktree**
   [Issue link](https://github.com/anthropics/claude-code/issues/69802)
   After `ExitWorktree (remove)`, the worktree directory, admin entry, and branch remain. Intermittently corrupts the parent repo's `core.bare` setting. 2 comments but filed today with a clear reproduction environment (macOS, git 2.50.1).

8. **#61675 – `/goal` long prompt has no collapse control**
   [Issue link](https://github.com/anthropics/claude-code/issues/61675)
   When using `/goal` with a long prompt, there is no "Show less" control, and the long prompt overlay hides task status/messages. 2 comments. A UI clarity issue that affects day-to-day workflow visibility.

9. **#65669 – Session folders/groups reset after desktop app update**
   [Issue link](https://github.com/anthropics/claude-code/issues/65669)
   On Windows, organizing sessions into folders/groups is erased every time the app updates. 2 comments, 1 upvote. Data-loss concern for power users who rely on session organization.

10. **#69764 – Mobile-triggered session lost (transcript not persisted to host)**
    [Issue link](https://github.com/anthropics/claude-code/issues/69764)
    A session started from the Claude mobile app that executes commands locally on Windows is never saved to the host machine. Transcripts vanish — not in Recents, not in `claude sessions list`. 2 comments, critical for mobile power users.

## Key PR Progress

Only 4 pull requests were active in the last 24 hours. Notable items:

1. **#69727 – fix(hookify): match file rules against Write tool content**
   [PR link](https://github.com/anthropics/claude-code/pull/69727)
   Hookify file rules (e.g., `pattern: console\.log\(`) never fired when Claude created a new file via the `Write` tool. Root cause: `config_loader` inferred the field name `new_text` for `event: file`, but `Write` tool content lives in a different field. Fix aligns the field mapping.

2. **#69716 – fix(workflows): send Statsig event time in milliseconds**
   [PR link](https://github.com/anthropics/claude-code/pull/69716)
   The `claude-dedupe-issues.yml` workflow sent Statsig `time` as epoch **seconds** (string), but Statsig's API expects epoch **milliseconds** (number). Sibling workflow already does it correctly. Fix normalizes the format.

3. **#69698 – fix(hookify): use root-relative imports to fix marketplace install**
   [PR link](https://github.com/anthropics/claude-code/pull/69698)
   When installing hookify from the marketplace, imports were resolving incorrectly. Fix switches to root-relative imports. (PR description truncated in source data.)

4. **#69710 – docs: Update plugins README to use recommended install methods**
   [PR link](https://github.com/anthropics/claude-code/pull/69710)
   The plugins README still referenced `npm install -g @anthropic-ai/claude-code`, which is deprecated. Updated to match the top-level README's recommended `curl` install method for macOS/Linux. (Closed.)

## Feature Request Clusters

Feature request activity is low today, with only isolated requests appearing in the top 30 issues:

- **Session Management MCP** (#66126): Requesting a `create_session` tool in the session management MCP server to programmatically create new persistent sessions, complementing existing `list_sessions`, `archive_session`, and `send_message` tools. 2 comments, no strong cluster yet.
- **Windows User Isolation** (#61202): Running the Windows app as a different user for security sandboxing. 2 comments (stale).
- **Mobile Companion Control** (#58029): A dedicated mobile app to remotely control Claude Code sessions, separate from the existing phone-as-keyboard flow. 2 comments (stale).

None of these show repeated filing across multiple issues, so no identifiable cluster emerges today.

## Developer Pain Points

Several recurring frustrations appear in today's data:

- **API connection instability on Linux**: Issue #69358 (55 upvotes) and #61320 both report persistent "No Response From API" and `ConnectionRefused` errors, especially on Linux. The regression label on #69358 suggests a recent deployment issue.
- **CLAUDE.md instruction disregard**: Issues #60339 and #61296 both report that models (especially Opus) ignore explicit instructions from `CLAUDE.md`. This undermines project-level configuration and forces manual correction.
- **Desktop app crashes & data loss**: Multiple reports of desktop app crashes on macOS (#61114, unsigned binary) and OOM crashes on large transcripts (#50238). Session data loss on Windows (#69764, #65669) and session file corruption (#20367) compound the reliability concerns.
- **MCP integration gaps**: VS Code extension ignores MCP servers (#19054), managed plugin MCP dependencies not installed (#60130), and OAuth flow state loss (#69797) collectively indicate MCP support is fragile across desktop and extension surfaces.
- **Subagent / agent lifecycle bugs**: Issue #68619 (infinite recursion, token burn) and #61210 (LSP tool not propagated to subagents) show that subagent spawning and tool propagation remain problematic. Session state corruption when toggling plan mode (#61300) adds to agent unpredictability.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-21

## Today's Update Brief
A new alpha release (`rust-v0.142.0-alpha.7`) was published without changelog details. Issue activity surged around a sandbox metadata regression in the latest Codex Desktop (26.616), with 15+ reports across macOS and Windows of `node_repl/js` failing with a missing `sandboxPolicy` field. A hotfix revert PR was opened. Rate-limit cost changes and a persistent reconnect loop also drew significant community attention.

## Releases
- **rust-v0.142.0-alpha.7** ([GitHub](https://github.com/openai/codex/releases))
  Alpha release 0.142.0-alpha.7. No additional release notes provided.

## Hot Issues
(10 selected from 50 items, ordered by community engagement)

1. [#2847 – A way to exclude sensitive files](https://github.com/openai/codex/issues/2847)
   **[enhancement, sandbox]** Author: @mkusaka | 👍 409 | 💬 78
   **Workflow**: Developers want a `.codexignore` mechanism (repo-local + global) to prevent the agent from reading or sending sensitive files.
   **Impact**: High adoption potential; many users expressed need for compliance and security.

2. [#29189 – Codex Desktop 26.616 node_repl fails: missing sandboxPolicy](https://github.com/openai/codex/issues/29189)
   **[bug, mcp, sandbox, app, browser]** Author: @bobchristof-gp | 👍 63 | 💬 55
   **Workflow**: Chrome plugin / browser automation broken after update; `node_repl` reports `codex/sandbox-state-meta: missing field sandboxPolicy`.
   **Impact**: Blocks `@Chrome`, `@Browser`, `@Computer` for many users on macOS. Multiple duplicates filed.

3. [#28879 – Rate-limit cost per token jumped ~10-20x since June 16](https://github.com/openai/codex/issues/28879)
   **[bug, rate-limits, app]** Author: @mihneaptu | 👍 67 | 💬 35
   **Workflow**: Plus plan users on `gpt-5.5` see their 5h budget drained in 2–3 prompts instead of 20+.
   **Impact**: Directly affects daily productivity; users request transparency on token pricing changes.

4. [#18960 – Frequent reconnect loop in Codex App](https://github.com/openai/codex/issues/18960)
   **[bug, connectivity]** Author: @GGBondBlueWhale | 👍 35 | 💬 49
   **Workflow**: Streaming failures cause WebSocket closures before response completion; app enters reconnect loop.
   **Impact**: Intermittent but frustrating; affects macOS Pro users.

5. [#5181 – Semantic codebase indexing and search](https://github.com/openai/codex/issues/5181)
   **[enhancement, agent]** Author: @dineshkumarkummara | 👍 45 | 💬 20
   **Workflow**: CLI lacks first-class semantic search for medium/large codebases, making it hard to locate relevant code.
   **Impact**: Boosted productivity for agentic coding; community eager for built-in RAG.

6. [#22898 – Codex mobile shows running desktop as offline](https://github.com/openai/codex/issues/22898)
   **[bug, app, remote]** Author: @GGBondBlueWhale | 👍 40 | 💬 14
   **Workflow**: iOS app displays desktop as offline; “Reconnect” button does nothing.
   **Impact**: Remote desktop feature unusable for mobile users.

7. [#25319 – Scope Codex VS Code chats to current workspace/project](https://github.com/openai/codex/issues/25319)
   **[enhancement, extension, session]** Author: @omry | 👍 34 | 💬 12
   **Workflow**: VS Code extension shows chat history from all projects; users want per-workspace isolation.
   **Impact**: Cleaner workflow for multi-project developers.

8. [#15299 – Support inbound MCP notifications routed into active CLI session](https://github.com/openai/codex/issues/15299)
   **[enhancement, mcp]** Author: @jasny | 👍 6 | 💬 10
   **Workflow**: External channels (e.g., CI, chat) cannot push messages into a running Codex CLI session via MCP.
   **Impact**: Limits automations and integrations.

9. [#29000 – Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS](https://github.com/openai/codex/issues/29000)
   **[bug, CLI]** Author: @RainLib | 👍 7 | 💬 7
   **Workflow**: CLI terminates with “trace trap” on x86_64 macOS.
   **Impact**: Blocks users on older Mac hardware.

10. [#28248 – Windows sandbox fails all read operations after power outage](https://github.com/openai/codex/issues/28248)
    **[bug, windows-os, sandbox, app]** Author: @romansydiuk-dev | 👍 1 | 💬 4
    **Workflow**: After a power loss, sandbox permanently denies file reads due to corrupted ACLs.
    **Impact**: Data loss risk; requires manual cleanup.

## Key PR Progress
(10 from 20 PRs, ordered by relevance)

1. [#29268 – Revert "Scope MCP sandbox metadata to server environment (#28914)"](https://github.com/openai/codex/pull/29268)
   **Author**: @celia-oai
   **Description**: Reverts the commit suspected of causing the `missing sandboxPolicy` regression. Critical hotfix for the current outage.

2. [#26229 – Add protected data mode to core and app server](https://github.com/openai/codex/pull/26229)
   **Author**: @bbrunner-oai
   **Description**: Introduces a core-managed Protected Data Mode. MCP tool results can activate it; persists across resume, fork, and rollout. Requires explicit opt-in for connector calls.

3. [#29266 – Route image generation writes through ExecutorFileSystem](https://github.com/openai/codex/pull/29266)
   **Author**: @won-openai
   **Description**: Moves generated-image directory and file writes into `ExecutorFileSystem` while preserving `CODEX_HOME/generated_images` destination.

4. [#29259 – Prototype mcp_history thread hint injection](https://github.com/openai/codex/pull/29259)
   **Author**: @pakrym-oai
   **Description**: Tests whether the harness can invoke `mcp_history` during initial context construction to expose thread hints without a model tool call.

5. [#29249 – Migrate environment context to model world state](https://github.com/openai/codex/pull/29249)
   **Author**: @pakrym-oai
   **Description**: Adds a typed, replayable model world-state slice for environments, integrated with existing initial-context and settings-diff paths.

6. [#29255 – Add configurable token budget compaction reminder](https://github.com/openai/codex/pull/29255)
   **Author**: @pakrym-oai
   **Description**: Gives the model a configurable wrap-up prompt before automatic context compaction. Prevents abrupt loss of context.

7. [#29143 – Restore custom Windows runner with hermetic LLVM 0.7.9](https://github.com/openai/codex/pull/29143)
   **Author**: @anp-oai
   **Description**: Fixes CI for Windows argument-comment-lint jobs by upgrading LLVM to 0.7.9 and returning to the custom runner.

8. [#29263 – Expose Sites preview from Linux sandbox](https://github.com/openai/codex/pull/29263)
   **Author**: @epanero-openai
   **Description**: Adds an opt-in `sites_preview` exec flag reserving port 4173 for Sites local previews, reachable by a sidecar browser.

9. [#28845 – Support plugin agent roles](https://github.com/openai/codex/pull/28845)
   **Author**: @charlesgong-openai
   **Description**: Enables plugins to bundle TOML-based agent roles. Adds manifest support and `spawn_agent` with namespaced `agent_type` values.

10. [#27102 – Centralize Plugin Analytics Metadata](https://github.com/openai/codex/pull/27102)
    **Author**: @jameswt-oai
    **Description**: Moves `PluginTelemetryMetadata` construction into `PluginsManager`, aligning with future remote identity enrichment.

## Feature Request Clusters
- **Sensitive file exclusion** (e.g., #2847, plus multiple duplicates): Users repeatedly request `.codexignore`-style controls to prevent agent access to credentials, keys, or private configurations.
- **Semantic codebase indexing** (e.g., #5181): Demand for first-class semantic search inside the CLI to handle medium-to-large projects without manual prompting.
- **Workspace-scoped chat sessions** (e.g., #25319): VS Code extension users want per-project history isolation rather than a global conversation list.
- **Inbound MCP notifications** (e.g., #15299): Developers seek the ability to push external events into an active Codex CLI session, enabling CI/CD and chat integrations.

## Developer Pain Points
- **SandboxPolicy regression** – the most active bug cluster: after upgrading to Codex Desktop 26.616, `node_repl` (and dependent tools like browser automation and Computer Use) fails with `missing field sandboxPolicy` on both macOS and Windows. Multiple reports (#29189, #29193, #29219, #29205, #29215, #29227, #29242, #29251, #29274, #29241, #29267, #29269) and the revert PR (#29268) indicate a recent change broke sandbox metadata propagation.
- **Rate-limit cost spike** (#28879): Unannounced change in per-token consumption on Plus/Pro plans, drastically reducing usable prompts per budget.
- **Reconnect loop** (#18960): Persistent WebSocket failures disrupt long-running sessions; no workaround described.
- **Windows compatibility gaps**: Issues include sandbox ACL corruption after power loss (#28248), lack of WSL support (#26424), and repeated permission prompts (#29117).
- **CLI crash on Intel macOS** (#29000): SIGTRAP on x86_64 devices makes the CLI unusable for a subset of users.
- **Mobile remote desktop unreliability** (#22898): iOS app cannot detect or reconnect to a running desktop instance.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-06-21

## Today's Update Brief

Activity remains steady with no new releases, but 15 pull requests and 50 updated issues reflect ongoing refinement of agent behavior, security hardening, and documentation updates. Community reports continue to surface around agent hang loops, permission bypasses, and memory system quirks, while maintainers are actively merging fixes for MCP image handling, shell command parsing, and prompt template corruption.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[Generalist agent hangs (P1, Bug, 7 comments, 8 👍)](https://github.com/google-gemini/gemini-cli/issues/21409)**
   Users report `gemini-cli` hangs indefinitely when deferring to the generalist sub-agent for simple tasks like folder creation. Workaround: instructing the model not to use sub-agents. Remains open for retesting after three months.

2. **[google_web_search loops indefinitely on empty results (P2, Bug, 6 comments)](https://github.com/google-gemini/gemini-cli/issues/28037)**
   Newly filed (2026-06-19) — the web search tool enters an infinite retry loop when queries return zero relevant results. A direct repro case is provided with a Korean query. No maintainer response yet in the issue.

3. **[Subagent recovery after MAX_TURNS falsely reports GOAL success (P1, Bug, 6 comments, 2 👍)](https://github.com/google-gemini/gemini-cli/issues/22323)**
   The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit without doing any analysis. Misleading success reporting undermines trust in agent outputs.

4. **[Shell command execution stuck on "Waiting input" after completion (P1, Bug, 4 comments, 3 👍)](https://github.com/google-gemini/gemini-cli/issues/25166)**
   After executing simple CLI commands that complete successfully, Gemini CLI remains stuck showing the command as active and awaiting input. Affects basic shell workflows.

5. **[Gemini does not use skills and sub-agents autonomously (P2, Bug, 6 comments)](https://github.com/google-gemini/gemini-cli/issues/21968)**
   Users report custom skills and sub-agents are almost never invoked unless explicitly instructed. Even when descriptions match the task, the agent defaults to generic approaches.

6. **[Browser agent fails under Wayland (P1, Bug, 4 comments, 1 👍)](https://github.com/google-gemini/gemini-cli/issues/21983)**
   The browser sub-agent crashes on Wayland display servers, preventing web automation on Linux systems using modern display protocols.

7. **[Auto Memory retries low-signal sessions indefinitely (P2, Bug, 5 comments)](https://github.com/google-gemini/gemini-cli/issues/26522)**
   Auto Memory only marks sessions as processed when the extraction agent reads the transcript. Sessions the agent decides to skip remain in the index and are re-surfaced endlessly, creating unnecessary API calls.

8. **[400 error with >128 tools configured (P2, Bug, 3 comments)](https://github.com/google-gemini/gemini-cli/issues/24246)**
   When more than approximately 128 tools are enabled, Gemini CLI encounters HTTP 400 errors. Users expect smarter tool scoping instead of a hard limit crash.

9. **[Sub-agents running without permission since v0.33.0 (P2, Bug, 2 comments)](https://github.com/google-gemini/gemini-cli/issues/22093)**
   After upgrading to v0.33.0, sub-agents (like generalist) began executing even when agent mode is set to "disabled" in all configurations. The user expected only MCP functionality.

10. **[Corruption after exiting external editors in terminalBuffer mode (P2, Bug, 1 comment)](https://github.com/google-gemini/gemini-cli/issues/24935)**
    The terminal display becomes corrupted after exiting external editors. A full screen refresh on the Ink side is needed.

## Key PR Progress

1. **[fix(core): sniff MCP image MIME types (size/l, P1)](https://github.com/google-gemini/gemini-cli/pull/27878)**
   Implements local image signature sniffing (magic bytes) for MCP tool images. Fixes HTTP 400 errors when Figma MCP returns WebP images mislabeled as PNG.

2. **[fix(core): cap pending tool responses (size/m, P1)](https://github.com/google-gemini/gemini-cli/pull/27870)**
   Prevents crashes from oversized tool results that remain pending as `functionResponse`. Supersedes auto-closed PR #27868.

3. **[fix(core): preserve dollar sequences in prompt template substitutions (size/m)](https://github.com/google-gemini/gemini-cli/pull/28055)**
   Fixes corruption of content containing `$$`, `$'`, or `$&` in skill, sub-agent, or tool descriptions during system prompt template substitution.

4. **[fix(core): strip trailing periods from error URLs (size/s, P2, help wanted)](https://github.com/google-gemini/gemini-cli/pull/28054)**
   Removes sentence-ending periods attached to HTTP(S) URLs in error messages so rendered links remain clickable.

5. **[fix(cli): don't crash in Cloud Shell when .env is unreadable (size/m, P2)](https://github.com/google-gemini/gemini-cli/pull/28059)**
   Wraps `fs.readFileSync` for `.env` files with error handling to prevent early startup crashes in sandboxed Cloud Shell environments.

6. **[feat(cli): add native drag-and-drop and Cmd+V clipboard image pasting (size/m/l, P3)](https://github.com/google-gemini/gemini-cli/pull/27859)**
   Adds first-class terminal drag-and-drop and clipboard image pasting (Cmd+V/Ctrl+V) for visual multimodal input in standard terminal emulators.

7. **[fix(ci): add --ignore-scripts to npm publish commands (size/xs)](https://github.com/google-gemini/gemini-cli/pull/28063)**
   Prevents redundant `prepare` script execution during CI workspace publishing. Reduces nightly release failures.

8. **[fix: upgrade shell-quote to 1.8.4 (CVE-2026-9277, CRITICAL)](https://github.com/google-gemini/gemini-cli/pull/27856)**
   Fixes critical vulnerability in `shell-quote` package detected by Trivy scanner. Likely exploitable via crafted shell arguments.

9. **[fix: upgrade vitest to 4.1.0 / 3.2.6 (CVE-2026-47429, CRITICAL)](https://github.com/google-gemini/gemini-cli/pull/27857)**
   Patches critical vulnerability in vitest testing framework. Addresses risk in CI/CD pipelines.

10. **[Add JSON output for eval inventory (size/l)](https://github.com/google-gemini/gemini-cli/pull/28058)**
    Adds `--json` flag to the eval inventory command for machine-readable output using relative paths. Useful for CI and automated checks.

## Feature Request Clusters

**Agent tool use and configuration**
Multiple issues request better agent self-awareness of available tools, skills, and configuration. [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) asks for accurate CLI flag and hotkey recall. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) wants autonomous skill usage without explicit instruction. [#23705](likely from the broader set) requests smarter tool scoping to avoid the 128-tool limit.

**Native image and file operations**
Users continue requesting richer file interactions. [#27859](https://github.com/google-gemini/gemini-cli/pull/27859) implements drag-and-drop image support. [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) experiments with native file tools for task tracking. AST-aware file reads and codebase mapping are tracked in [#22745](https://github.com/google-gemini/gemini-cli/issues/22745).

**Browser agent resilience**
Multiple requests target browser sub-agent reliability: session takeover and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), settings.json override compliance ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and Wayland compatibility ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).

## Developer Pain Points

- **Agent hang and loop behavior**: Repeated reports of the generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) and the web search tool entering infinite retry loops ([#28037](https://github.com/google-gemini/gemini-cli/issues/28037)).
- **Sub-agent autonomy and permissions**: Sub-agents either fail to invoke skills autonomously ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) or run without user permission after upgrades ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Terminal and editor integration**: Shell command execution getting stuck ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), terminal corruption after external editor use ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and Wayland display failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) disrupt core workflows.
- **Memory system reliability**: Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently skips invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and lacks deterministic secret redaction before sending content to models ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-06-21

### 1. Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remained high with 13 issues updated and 3 pull requests processed. Bugs around terminal rendering, plugin hook discoverability, and session permissions dominated the conversation, alongside a few notable feature requests for session‑usage tracking and context‑window visibility.

### 2. Releases
None in the last 24 hours.

### 3. Hot Issues (10 selected)

1. **[#3876 – Mouse tracking is incorrectly disabled on exit](https://github.com/github/copilot-cli/issues/3876)**
   *Area: input-keyboard, terminal-rendering*
   Upon CLI exit, the terminal loses mouse scrolling because mouse button‑event tracking is turned off without restoring the previous state. The user diagnosed the problem with Copilot itself. One comment confirms the bug.
   🟢 *Impact*: Annoying for any user who relies on mouse scroll after a session.

2. **[#3871 – No way to list installed hooks](https://github.com/github/copilot-cli/issues/3871)**
   *Area: plugins*
   Unlike MCP servers (`copilot mcp list`), there is no command or TUI surface to enumerate installed hooks (plugin‑bundled or individual). The reporter asks for `copilot hooks list` or an equivalent.
   🟢 *Impact*: Reduces discoverability of a core plugin feature.

3. **[#3872 – Hook config with mis‑cased event key is silently dropped](https://github.com/github/copilot-cli/issues/3872)**
   *Area: plugins, configuration*
   If a hook configuration (e.g., `PreToolUse` vs `PreToolUse`) uses a non‑camelCase key, the CLI silently ignores it. Only a debug‑level log is emitted, so users never see a warning.
   🔴 *Impact*: Hard‑to‑debug silent failures for plugin authors and users.

4. **[#3878 – Revert back to Plan mode after a plan is implemented](https://github.com/github/copilot-cli/issues/3878)**
   *Area: agents*
   The user wants `Plan` to be the default mode, but after a plan is implemented in Autopilot, the session stays in Autopilot instead of returning to Plan. No comments yet.
   🟡 *Impact*: Workflow friction for users who prefer an iterative plan‑then‑code cycle.

5. **[#3877 – Auto‑allow permissions on session start](https://github.com/github/copilot-cli/issues/3877)**
   *Area: permissions, configuration*
   Feature request to add a persistent setting (e.g., `permissions.auto_allow_all`) that automatically runs `/allow-all` when a new session starts. No comments.
   🟡 *Impact*: Productivity gain for users who trust the tool and dislike repetitive prompts.

6. **[#3875 – Unable to spawn subagents with `mai‑code‑1‑flash‑picker` when `deferTools: never` is set](https://github.com/github/copilot-cli/issues/3875)**
   *Area: agents, models*
   Spawning a subagent with the flash‑picker model fails only when `deferTools: never` is configured for certain MCP servers. The bug seems model‑pairing‑related. No comments yet.
   🔴 *Impact*: Blocks usage of a specific sub‑agent model under a common configuration.

7. **[#3874 – VS Code agent `preToolUse` agent hook denial does not work](https://github.com/github/copilot-cli/issues/3874)**
   *Area: permissions, plugins*
   A hook that denies specific commands via `PreToolUse` does not function when running a chat session from VS Code (version 1.125.1, Copilot Chat v0.53.1). No comments.
   🔴 *Impact*: Hooks for security or policy enforcement are ineffective in the most popular editor.

8. **[#3867 – No context window visibility or compaction notification](https://github.com/github/copilot-cli/issues/3867)**
   *Area: context-memory*
   Users have no UI indicator of token usage or remaining context window length. Context compaction occurs silently. Request for a visible progress bar or notification.
   🟡 *Impact*: Surprise performance issues or degraded quality as context fills.

9. **[#3869 – `/ask` feature unusable due to cramped text box](https://github.com/github/copilot-cli/issues/3869)**
   *Area: terminal-rendering*
   The answer from `/ask` is displayed in a very small text area, forcing users to scroll through code and details a few lines at a time.
   🟡 *Impact*: Severely reduces usability of a core chat feature.

10. **[#3868 – App hangs when right‑clicking a chat/session with multiple open](https://github.com/github/copilot-cli/issues/3868)**
    *Area: sessions*
    Right‑clicking any session in the sidebar freezes the entire application when multiple chats/sessions are open. Affects version 1.0.64-0.
    🔴 *Impact*: Critical UX bug for power users managing multiple concurrent sessions.

### 4. Key PR Progress (3 items)

1. **[#1014 – Document Esc key behavior fix for interactive prompt cancellation](https://github.com/github/copilot-cli/pull/1014)** (CLOSED)
   Adds a changelog entry for v0.0.385 documenting that pressing Esc now returns to the option picker instead of auto‑selecting "No". Already merged.

2. **[#3873 – Add initial console log for greeting](https://github.com/github/copilot-cli/pull/3873)** (OPEN)
   A small starter PR that adds a simple greeting log on startup. No comments yet.

3. **[#2587 – Add automated issue classification with GitHub Agentic Workflows](https://github.com/github/copilot-cli/pull/2587)** (CLOSED)
   Introduces an AI‑powered workflow that automatically applies `area:` labels and the `triage` label when issues are opened or reopened. Merged earlier, mentioned here because it addresses the same topic as the (likely spam) issue #3870.

### 5. Feature Request Clusters

- **Session management & transparency**
  Several requests ask for better visibility into session state: session‑usage metrics (tokens, cost) [#1240](https://github.com/github/copilot-cli/issues/1240), context‑window indicators [#3867](https://github.com/github/copilot-cli/issues/3867), and the ability to delete remote agent sessions [#3072](https://github.com/github/copilot-cli/issues/3072). Users want more control and observability.

- **Permission & configuration defaults**
  Multiple users request persistent settings to reduce repetitive approvals: auto‑allow permissions on session start [#3877](https://github.com/github/copilot-cli/issues/3877) and automatic reversion to Plan mode after Autopilot execution [#3878](https://github.com/github/copilot-cli/issues/3878). These share a common theme of configurable default workflows.

- **Plugin/hooks discoverability**
  While MCP servers have a dedicated `list` command, hooks have no equivalent [#3871](https://github.com/github/copilot-cli/issues/3871). This gap is highlighted alongside the silent‑drop bug [#3872](https://github.com/github/copilot-cli/issues/3872), suggesting the hooks subsystem lacks tooling for debugging and enumeration.

### 6. Developer Pain Points

- **Silent configuration failures** – Hook events with mis‑cased keys are ignored at normal log levels [#3872](https://github.com/github/copilot-cli/issues/3872). This is a recurring friction point: the system should surface misconfiguration warnings to users and plugin authors.

- **Terminal UX regressions** – Mouse tracking disabled on exit [#3876](https://github.com/github/copilot-cli/issues/3876), cramped answer display in `/ask` [#3869](https://github.com/github/copilot-cli/issues/3869), and app hangs on right‑click [#3868](https://github.com/github/copilot-cli/issues/3868) all point to terminal and UI polish issues that degrade daily use.

- **Model/agent compatibility** – Spawning subagents fails under specific `deferTools` configurations [#3875](https://github.com/github/copilot-cli/issues/3875), and VS Code agent hooks for denial don’t work at all [#3874](https://github.com/github/copilot-cli/issues/3874). These are high‑impact for teams relying on custom agent workflows and security policies.

- **Discoverability gaps** – No command to list hooks [#3871](https://github.com/github/copilot-cli/issues/3871) means plugin authors cannot easily verify installation or debug their integrations, creating a barrier to adoption.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-21

## Today’s Update Brief
Activity remained low over the past 24 hours with no new releases or freshly filed issues. Two previously opened items saw updates: a closed bug about VS Code extension extraction on Windows Git Bash and a closed feature request for clickable symbol references. One pull request addressing system proxy support was also updated.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **#2462 – [CLOSED] Windows + Git Bash: VS Code extension fails to extract bundled CLI because `tar` cannot handle zip**
   *Author: @yplgame | Updated: 2026-06-20*
   The bundled CLI inside the VS Code extension is a `.zip` file, but the extraction script uses `tar`, which fails on MSYS2/Git Bash. This blocks Windows users from using the extension directly.
   **Link:** [Issue #2462](https://github.com/MoonshotAI/kimi-cli/issues/2462)

2. **#2440 – [CLOSED] Clickable symbol / line references in Kimi Code chat panel**
   *Author: @ElPrg | Updated: 2026-06-20*
   While inline file paths are clickable, function/method names are not. The community requested jump-to-definition functionality for code symbols mentioned in chat responses.
   **Link:** [Issue #2440](https://github.com/MoonshotAI/kimi-cli/issues/2440)

## Key PR Progress
1. **#2063 – [CLOSED] feat(config): add `default_skills` config for auto-activating skills on session start**
   *Author: @maxBRT | Updated: 2026-06-20*
   Merged after a two-month review. Introduces a `default_skills` field in the config schema, enabling users to define skills that are automatically activated at the start of every new session. Implements feature request #2062.
   **Link:** [PR #2063](https://github.com/MoonshotAI/kimi-cli/pull/2063)

2. **#2463 – [OPEN] fix: respect system proxy settings in FetchURL**
   *Author: @itxaiohanglover | Updated: 2026-06-20*
   `aiohttp.ClientSession` does not read `HTTP_PROXY`/`HTTPS_PROXY` environment variables by default, causing `Connection reset by peer` errors in proxied environments. This PR manually applies proxy settings from environment variables.
   **Link:** [PR #2463](https://github.com/MoonshotAI/kimi-cli/pull/2463)

## Feature Request Clusters
- **Clickable code symbols in chat** (Issue #2440): Users want to click on function/method names in AI responses to jump to their definition, similar to how file paths already open the editor. Only one issue in this batch, but it represents a common UX improvement for chat‑based tools.

## Developer Pain Points
- **Windows + Git Bash compatibility** (Issue #2462): The VS Code extension incorrectly assumes `tar` can extract `.zip` files on MSYS2, blocking Windows users from using the bundled CLI. The issue is closed, suggesting a fix was applied.
- **Proxy configuration gaps** (PR #2463): The tool silently ignores system proxy environment variables, causing connectivity failures in corporate or restricted networks. The open PR aims to add explicit proxy support.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-21

## 1. Today's Update Brief
The project shipped a **v1.17.9 patch release** with key agent-step-limit and provider detection fixes, while community activity remains high with 50 issues and 50 PRs updated in the last 24 hours. Noteworthy new PRs add **Android/Termux support**, a **skip-title config** for local models, and a **shared terminal pane** proposal. Long-standing requests for agent sandboxing, Alpine Linux support, and session context visibility continue to draw significant discussion.

## 2. Releases
**v1.17.9** — [Full changelog](https://github.com/anomalyco/opencode/releases/tag/v1.17.9)

- **Bugfixes**:
  - Agent step limits now force a final text response instead of failing mid-run.
  - Devstral model detection fixed for provider IDs with varied casing (@Robin1987China).
  - Custom HTTP headers are now passed to Copilot model requests.
- **Improvements**:
  - Added `high` … (truncated in source data).

No other releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Community Attention)

1. **[#2242] Is there a way to sandbox the agent?**
   - Author: @edmBernard | 77 comments | 55 👍
   - Requests a capability to restrict terminal commands to the current directory (like macOS seatbelt).
   - **Impact**: Core security and containment for multi-project workflows.
   - [Link](https://github.com/anomalyco/opencode/issues/2242)

2. **[#27589] TUI fails on Alpine Linux (musl) — `getcontext` symbol not found**
   - Author: @ncopa | 36 comments | 12 👍
   - Regression in v1.14.50; worked in v1.14.48.
   - **Impact**: Full TUI breakage on musl-based distros (common in Docker/CI).
   - [Link](https://github.com/anomalyco/opencode/issues/27589)

3. **[#8501] Allow expanding pasted text (`[Pasted ~1 lines]`)**
   - Author: @berenar | 26 comments | 183 👍
   - Wants to see full pasted content instead of summary, especially for editing.
   - **Impact**: Workflow friction when reviewing AI-suggested edits.
   - [Link](https://github.com/anomalyco/opencode/issues/8501)

4. **[#6152] Session context usage breakdown (like `/context` in Claude)**
   - Author: @mtymek | 19 comments | 112 👍
   - Proposes a TUI dialog displaying the session’s context window composition.
   - **Impact**: Helps users manage token budgets and avoid context overflow.
   - [Link](https://github.com/anomalyco/opencode/issues/6152)

5. **[#21643] Socket connection closed unexpectedly**
   - Author: @adamw199112 | 16 comments | 1 👍
   - API connection error with verbose hint. Many users hit similar network/fetch issues.
   - **Impact**: Blocks all API-based usage.
   - [Link](https://github.com/anomalyco/opencode/issues/21643)

6. **[#29462] Skills tool injects all discovered skills with no upper bound**
   - Author: @kaushikgopal | 11 comments | 0 👍
   - Large skill libraries (100k+) bloat the system prompt every turn.
   - **Impact**: Performance degradation and token waste.
   - [Link](https://github.com/anomalyco/opencode/issues/29462)

7. **[#31755] MiniMax direct API caching broken / OpenRouter BYOK OK**
   - Author: @Biotrioo | 10 comments | 0 👍
   - Caching regression possibly linked to new thinking toggle.
   - **Impact**: Increased cost and rate-limit consumption for MiniMax users.
   - [Link](https://github.com/anomalyco/opencode/issues/31755)

8. **[#32444] GLM-5.2 thinking-effort variants not exposed due to blanket `glm` exclusion**
   - Author: @imranshaiedi-byte | 9 comments | 15 👍
   - `variants()` returns `{}` for any model ID containing `"glm"`, blocking High/Max effort levels.
   - **Impact**: GLM users cannot use different reasoning modes.
   - [Link](https://github.com/anomalyco/opencode/issues/32444)

9. **[#31119] Error: `no such column: name`**
   - Author: @AndrewShear | 7 comments | 5 👍
   - Database schema mismatch after upgrading to v1.16.2; prevents app launch.
   - **Impact**: Users stuck after update with no clear migration path.
   - [Link](https://github.com/anomalyco/opencode/issues/31119)

10. **[#7675] Install script ignores `OPENCODE_INSTALL_DIR`**
    - Author: @grgong | 7 comments | 7 👍
    - Hardcodes `$HOME/.opencode/bin`, ignoring documented env vars.
    - **Impact**: Breaks custom/non-default installations and package managers.
    - [Link](https://github.com/anomalyco/opencode/issues/7675)

## 4. Key PR Progress

1. **[#33010] feat: add Android/Termux support**
   - Adds `platformMap` entries for `"android"`, proper postinstall handling, and publish support. Closes 4 issues (#961, #10504, #21043, #30248).
   - [Link](https://github.com/anomalyco/opencode/pull/33010)

2. **[#33166] fix: Skip bun version check for nix version**
   - Works around a bug in bun 1.3.14 that breaks Nix builds. Hacks similar to those used in nixpkgs.
   - [Link](https://github.com/anomalyco/opencode/pull/33166)

3. **[#33164] feat: Allow editing project settings for non-git projects**
   - Removes the git-repo requirement for editing project settings in Desktop. Closes #33165.
   - [Link](https://github.com/anomalyco/opencode/pull/33164)

4. **[#32896] fix(compaction): reserve full output headroom**
   - Removes a 20K reservation cap when computing usable input capacity for `limit.input` models. Closes #32656.
   - [Link](https://github.com/anomalyco/opencode/pull/32896)

5. **[#32340] chore: upgrade Effect to beta 83**
   - Updated synchronized Effect packages and migrated `Schema.Defect` values to new constructor API.
   - [Link](https://github.com/anomalyco/opencode/pull/32340)

6. **[#33162] feat(cli): add `--yolo` permission alias**
   - Exposes `--dangerously-skip-permissions` as `--yolo` and supports `OPENCODE_DANGEROUSLY_SKIP_PERMISSIONS` env var.
   - [Link](https://github.com/anomalyco/opencode/pull/33162)

7. **[#28540] fix(opencode): keep TUI interactive with piped stdin**
   - Fixes a long-standing issue (since #387, #24195, #3930) where piped stdin broke TUI interaction.
   - [Link](https://github.com/anomalyco/opencode/pull/28540)

8. **[#18306] feat(opencode): add Open WebUI provider**
   - Adds a new provider for Open WebUI, building on prior work. Closes #13537.
   - [Link](https://github.com/anomalyco/opencode/pull/18306)

9. **[#33148] feat(opencode): allow skipping session title generation via config**
   - Adds `skip-title` option to model config, saving time on slow local models. Closes #33140.
   - [Link](https://github.com/anomalyco/opencode/pull/33148)

10. **[#33160] fix(mcp): prevent null parameters in MCP tool calls for OpenAI-compatible providers**
    - Fixes null value issues when tools have only a `description` without `type`. Affects MiniMax and others. Closes #21080.
    - [Link](https://github.com/anomalyco/opencode/pull/33160)

## 5. Feature Request Clusters

Several high-engagement feature requests share common themes:

- **Agent Isolation / Security**
  - #2242 (sandbox agent commands), #33132 (shared terminal pane for human+agent). Both focus on controlling agent scope or visibility.

- **Context & Prompt Management**
  - #6152 (session context breakdown TUI), #8501 (expand pasted text), #29462 (skills tool truncation). Users want better transparency and control over what goes into the prompt.

- **Local Model Optimisation**
  - #33140 / #33148 (skip session title generation), #7078 (connect local Ollama). Slower local models need to avoid unnecessary LLM calls.

- **Error Recovery & Resilience**
  - #15080 (configurable timeout for subagent tasks), #1326 (multiple API keys with fallback). Users hit failures during long sessions and want automatic retry/fallback.

- **GLM/Variant Exclusions**
  - #32444, #18598 (GLM models excluded from reasoning variants). Multiple users report that GLM models are blocked from variant toggles, limiting their use cases.

## 6. Developer Pain Points

The most frequent frustrations reported in today’s data:

- **Alpine Linux / musl incompatibility** (#27589): A regression broke the TUI on musl systems, blocking a significant portion of server/container users.
- **API connection failures** (#21643, #31755): Socket closures and caching regressions disrupt usage, especially with newer providers like MiniMax.
- **Database schema errors after upgrade** (#31119): Users upgrading to a recent version find their app completely unusable with no clear recovery steps.
- **Installation & environment variable gaps** (#7675, #25390): The install script and plugin paths ignore documented env vars, causing friction for custom setups.
- **GLM model exclusions** (#32444, #18598): Repeated exclusion of GLM models from reasoning variants frustrates users of Z.AI/GLM.
- **Session compaction loops** (#33128): Occasional infinite compaction cycles reported, hinting at a deeper resource management bug.
- **MCP tool parameter corruption** (#33160): Null parameters for tools without explicit type break OpenAI-compatible providers — affects users of MiniMax and similar.
- **Paste (Ctrl+V) not working on Windows** (#18104): Basic editor interaction broken for Windows users.
- **Billing / subscription invisibility** (#29248, #33102): Payment issues and orphaned workspaces generate support overhead.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是基于你提供的GitHub数据生成的Qwen Code社区日报。

---

# Qwen Code 社区日报 | 2026-06-21

## 1. 今日更新简报
今日社区活动非常活跃，修复了大量与输入验证和路径安全相关的 Bug。核心团队和贡献者解决了多个由大小写敏感 URL 和弱路径边界检查引起的问题，并发布了一个补丁版本。同时，社区也提出了新的功能需求，例如恢复实时思维链流。

## 2. 版本发布
今日发布了 **v0.18.4** 及其预览版 **v0.18.4-preview.0**。
- **主要变更**: 主要修复了核心模块中文件历史记录跟踪 `sed` 编辑的问题。同时包含了此前 v0.18.3 发布的流水线更新。
- 链接: [v0.18.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.4) | [v0.18.4-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.4-preview.0)

## 3. 热门议题
以下是今日受到关注的十个议题，主要集中在一系列由 URL 大小写不敏感和路径前缀匹配问题引发的安全与配置 Bug。

- **#5442: Qwen OAuth 端点规范化前缀对大写 URL 方案处理不当**
  - **详情**: OAuth 端点检查 URL 时，未将 `HTTPS://` 视为有效协议，导致生成错误的 `https://HTTPS://...` 地址，认证失败。
  - **影响**: 影响使用大写协议头的自定义 OAuth 服务认证流程。
  - **评论**: 6 | 链接: [Issue #5442](https://github.com/QwenLM/qwen-code/issues/5442)

- **#5462: 绝对 Favicon URL 大小写问题被当作相对路径处理**
  - **详情**: 解析 HTML favicon 链接时，将 `HTTPS://...` 误判为相对路径，导致生成错误的图标地址。
  - **影响**: 导致使用了大写协议的网站在终端或桌面端无法正确显示图标。
  - **评论**: 5 | 链接: [Issue #5462](https://github.com/QwenLM/qwen-code/issues/5462)

- **#5444: `@file` 临时目录异常匹配了兄弟路径前缀**
  - **详情**: `@file` 命令的路径安全检查使用 `startsWith` 匹配，导致 `/tmp/qwen/tmp-other/file` 这类兄弟路径被错误放行，可能造成文件泄露。
  - **影响**: 这是一个安全修复，防止用户通过`@file`指令访问到指定临时目录之外的文件。
  - **评论**: 5 | 链接: [Issue #5444](https://github.com/QwenLM/qwen-code/issues/5444)

- **#5440: 安装检测通过项目根前缀匹配，缺少路径边界**
  - **详情**: 判断是否为本地 Git 或 `node_modules` 安装时，使用了原始的前缀匹配，可能将路径名为 `/project/node_modules-extra` 的目录也误认为是安装目录。
  - **影响**: 可能导致开发模式下功能检测或配置加载异常。
  - **评论**: 5 | 链接: [Issue #5440](https://github.com/QwenLM/qwen-code/issues/5440)

- **#5465: DingTalk 反应将大写 Webhook URL 视为对话 ID**
  - **详情**: 钉钉集成模块中将 `HTTPS://` 开头的 Webhook URL 误判为对话 ID，导致消息发送和反应功能异常。
  - **影响**: 影响了使用大写协议配置钉钉集成的用户。
  - **评论**: 5 | 链接: [Issue #5465](https://github.com/QwenLM/qwen-code/issues/5465)

- **#5451: HTTP 市场源错误使用了 HTTPS 客户端**
  - **详情**: 加载 `http://` 开头的扩展市场源时，错误地调用了 HTTPS 客户端，导致请求失败。
  - **影响**: 使用了纯 HTTP 协议自建扩展市场的用户无法加载插件。
  - **评论**: 5 | 链接: [Issue #5451](https://github.com/QwenLM/qwen-code/issues/5451)

- **#5472: (开放) 恢复实时全窗格思考流 (v0.18.2 回归)**
  - **详情**: 用户反馈在 v0.18.4 版本中，此前修复的实时思维链功能（通过 Ctrl+O）虽然在对话结束后可以查看，但在实时流式输出时不再显示。
  - **影响**: 影响了用户期望在 AI 生成过程中实时看到其思考过程的体验。
  - **评论**: 5 | 👍: 1 | 链接: [Issue #5472](https://github.com/QwenLM/qwen-code/issues/5472)

- **#5436: npm 扩展注册表获取对大写 HTTPS URL 处理不当**
  - **详情**: 与 #5451 类似，npm 扩展注册表的 URL 检测也是大小写敏感的，导致 `HTTPS://...` 被错误路由到 HTTP 客户端或匹配失败。
  - **影响**: 可能影响所有配置了自定义 npm registry 或使用了重定向 URL 的扩展下载。
  - **评论**: 4 | 链接: [Issue #5436](https://github.com/QwenLM/qwen-code/issues/5436)

- **#5447: 供应商基础 URL 选项匹配忽略尾随斜杠变体**
  - **详情**: 选择特定 API 供应商的 Base URL 时，`https://api.example.com` 和 `https://api.example.com/` 被视为不同选项，后者匹配失败导致回退到默认值。
  - **影响**: 用户配置 URL 时若习惯性添加斜杠，会导致自定义提供商配置失效。
  - **评论**: 4 | 链接: [Issue #5447](https://github.com/QwenLM/qwen-code/issues/5447)

- **#5449: 供应商检测通过 URL 子串匹配导致误判**
  - **详情**: ModelScope 和 OpenRouter 的供应商检测基于 URL 中包含 `modelscope` 或 `openrouter.ai` 等子串判断。这可能导致包含这些关键词的自定义 API 被误分类。
  - **影响**: 可能导致模型兼容性或特定 API 调用行为异常。
  - **评论**: 4 | 链接: [Issue #5449](https://github.com/QwenLM/qwen-code/issues/5449)

## 4. 关键 PR 进展
以下是今日合并或活跃的十个重要 PR，显示了社区在性能优化、新特性和漏洞修复上的工作。

- **#5539: (开放) 重构: 用 preset 中的 customHeaders 替换 OpenRouter/Requesty 提供商类**
  - **详情**: 提议移除独立的 OpenRouter 和 Requesty 提供商类，改用统一的 `customHeaders` 配置字段。这是一次重要的架构简化。
  - **意义**: 降低扩展新供应商的门槛，使配置更简洁。
  - 链接: [PR #5539](https://github.com/QwenLM/qwen-code/pull/5539)

- **#5502: (开放) 功能: 支持语音听写，含原生捕获、流式传输和偏差**
  - **详情**: 增加了 `/voice` 命令，支持按住说话、点击切换等模式，并可通过 `/model --voice` 选择转录模型。这是一个重量级新功能。
  - **意义**: 极大丰富了交互方式，为移动或便捷输入场景提供了有力支持。
  - 链接: [PR #5502](https://github.com/QwenLM/qwen-code/pull/5502)

- **#5432: (已合并) 性能: 直接从 .git 读取当前 git 分支，替代 git 命令**
  - **详情**: 通过直接读取 `.git/HEAD` 文件来获取分支名，避免每次都执行 `git rev-parse` 命令，优化了 CLI 状态栏的性能。
  - **意义**: 对于大型 Git 仓库，能显著降低渲染延迟。
  - 链接: [PR #5432](https://github.com/QwenLM/qwen-code/pull/5432)

- **#5478: (已合并) 功能: 添加 Requesty 提供商**
  - **详情**: 增加了对 Requesty 模型网关的首选支持，用户可直接配置使用 Requesty 上的模型。
  - **意义**: 扩展了可用的第三方模型提供商生态。
  - 链接: [PR #5478](https://github.com/QwenLM/qwen-code/pull/5478)

- **#5473: (已合并) 修复: 处理截断的远程输入文件**
  - **详情**: 修复了 `--input-file` 在外部进程截断并重写文件后，无法读取新指令的 Bug。
  - **意义**: 显著提升了非交互式场景（如 CI/CD 管道）下的健壮性。
  - 链接: [PR #5473](https://github.com/QwenLM/qwen-code/pull/5473)

- **#5245: (开放) 修复: 在 Windows 上隐藏空的原生会话**
  - **详情**: 修复了两个 Windows 特定问题：`~\` 路径展开和空原生会话的显示。
  - **意义**: 持续改善跨平台体验，特别是 Windows 用户的桌面端使用。
  - 链接: [PR #5245](https://github.com/QwenLM/qwen-code/pull/5245)

- **#5494: (已合并) 修复: 不要将空零件消息视为函数调用/响应**
  - **详情**: 修复了当消息的 `parts` 数组为空时，`isFunctionResponse` 等判断函数发生误判的情况。
  - **意义**: 修复了一个由于 JavaScript `[].every(...)` 特性导致的逻辑错误，避免空消息被错误处理。
  - 链接: [PR #5494](https://github.com/QwenLM/qwen-code/pull/5494)

- **#5488: (开放) 使用 VS Code 主题令牌优化伴侣滚动条**
  - **详情**: 一个关注 UI/UX 的 PR，旨在使聊天界面的滚动条在深色/浅色主题下都能有良好的可见性。
  - **意义**: 用户驱动的体验改进，解决了部分主题下滚动条难以发现的问题。
  - 链接: [PR #5488](https://github.com/QwenLM/qwen-code/pull/5488)

- **#5511: (已合并) 修复: 验证通用 OAuth token 响应**
  - **详情**: 为通用 OAuth 流程增加了更严格的验证，包括拒绝空 `access_token` 以及对 `expires_in` 字段的严格解析。
  - **意义**: 提升了 OAuth 集成的安全性。
  - 链接: [PR #5511](https://github.com/QwenLM/qwen-code/pull/5511)

- **#5509: (已合并) 修复: 严格解析桌面端服务器端口**
  - **详情**: 增加了 `parseServerPort` 辅助函数，对所有涉及端口解析的项（如 `CRAFT_RPC_PORT`）进行严格校验，防止无效值被使用。
  - **意义**: 提高了桌面端后端启动的稳定性和错误报告清晰度。
  - 链接: [PR #5509](https://github.com/QwenLM/qwen-code/pull/5509)

## 5. 特性请求聚类
今日的特性请求主要集中在以下几个方面：

- **交互与可用性**:
  - **实时思维流**: Issue #5472 请求恢复并增强实时思维链（Chain of Thought）的显示功能，希望在 AI 思考时就能看到内容，而非事后查看。
  - **语音输入**: PR #5502 实现了语音听写功能，这是一个用户呼声很高的增强，旨在提升交互效率。

- **配置与灵活性**:
  - **新供应商支持**: PR #5539 和 #5478 都指向了用户对更多第三方模型供应商（如 Requesty）的支持需求，以及对供应商配置方式的简化期盼。

## 6. 开发者痛点
今日的议题和 PR 集中反映了以下开发者痛点：

- **输入验证不足**: 这是今日最显著的问题。大量 Bug（如 Issues #5483, #5499, #5495, #5490, #5492, #5474, #5479）都源于 `parseInt` 等宽松的解析器，它们会静默地处理格式错误的输入（如 `1.5s`, `2k`, `0x10`），导致难以诊断的隐性故障。开发者希望系统能够严格拒绝非法输入并给出清晰的错误提示。
- **路径/URL 安全检测脆弱**: 今天关闭的多个 Bug（如 #5442, #5444, #5440, #5465 等）都指向了同一类问题：使用大小写敏感的 `startsWith` 或原始的子串 `includes` 来进行安全或路径判断。这导致攻击者可以通过大小写变换或构造相似路径名来绕过安全检查。开发者正系统性地将所有此类检查替换为更健壮的方案（如先转为小写、增加路径分隔符判断）。
- **URL 大小写遵循不佳**: 今天修复的 Bug 中，至少有7个直接与大小写敏感有关。开发者显然正忙于对全代码库进行审计，将所有 URL 检查操作（如 `startsWith("http")`）替换为大小写不敏感的实现。

</details>