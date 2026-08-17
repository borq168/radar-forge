# AI CLI Tools Community Digest 2026-08-17

> Generated: 2026-08-17 03:50 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-17

## 1. Daily Cross-Tool Overview

No new releases were published today for any of the four tracked tools (Claude Code, OpenAI Codex, Kimi Code, OpenCode). Activity levels varied significantly: OpenCode and Kimi Code saw the highest volume of issues and pull requests, while Claude Code had a low-activity day with only test-infrastructure fixes. A critical 48-bit message ID overflow was identified and closed in OpenCode, making it the most impactful event today. Across all tools, performance regressions, sandbox/security configuration pain points, and session management gaps continue to generate community discussion.

## 2. Activity Comparison

| Tool | Issues (today) | PRs (today) | Release |
|------|----------------|-------------|---------|
| Claude Code | 10 hot issues (mix open/closed) | 10 PRs (mostly closed) | None |
| OpenAI Codex | 30+ issues filed | 13 PRs (all merged) | None |
| Kimi Code | 17 issues updated | 31 PRs updated | None (v0.36.1) |
| OpenCode | 50 issues updated | 50 PRs updated | None |

## 3. Shared Feature Directions

- **Session lifecycle management**: Users across all four tools request configurable retention, deletion, archiving, and cross-session persistence. Claude Code (#62476, #84169, #87244), Codex (#25319, #26227), Kimi Code (#2356, #2984), and OpenCode (#32630, #24683) all contain related issues.
- **Subagent/agent configuration**: Multiple communities want per-agent model, effort, and working-directory control. Claude Code (#64706, #84171), Codex (#35463, #32283), Kimi Code (#1736, #2633), and OpenCode (#32730) show this pattern.
- **Sandbox/security false positives**: Users report that safety checks and sandbox masking block legitimate development work. Claude Code (#76558, #84139, #84160), Codex (#34306), and OpenCode (#8832) all have open complaints.
- **Performance regressions and resource leaks**: CPU spikes, spawn storms, memory leaks, and ID overflow are reported. Claude Code (#84192), Codex (#24510, #38455, #20864), Kimi Code (#2621), and OpenCode (#42955) all contain concrete performance bugs.
- **Install script and environment variable discrepancies**: OpenCode (#42974) and Claude Code (#55623) both have issues where documented installation paths or environment variables are ignored by shipped scripts.

## 4. Differentiation Analysis

**Claude Code** places strong emphasis on sandbox security and conversation management, with a TUI-focused polish and a growing Rust rewrite discussion. **OpenAI Codex** differentiates through deep VS Code extension integration, multi-account/auth support, and computer-use automation, while suffering from worker spawn storms and Windows-specific bugs. **Kimi Code** (Moonshot AI) targets the Chinese ecosystem with multi-skill activation, MCP management, and cross-device pairing, and shows the highest volume of merged PRs today. **OpenCode** (Go-based, open-source) focuses on session ID correctness, plugin pipeline extensibility, and Termux/Android compatibility, with a notably higher issue count due to the ID overflow outbreak.

**Target users**: Claude Code and Codex appeal to professional developers needing enterprise-grade security and session control. Kimi Code serves a China-centric developer base with strong model-switching and multi-agent features. OpenCode targets open-source and cross-platform users who want a lightweight Go CLI with custom plugin support.

## 5. Community Activity Notes

- **OpenCode** had the highest raw activity (50 issues, 50 PRs updated), largely driven by the 48-bit ID overflow bug that broke pre-existing sessions. Many issues were closed quickly, indicating active maintainer triage.
- **Kimi Code** showed the second-highest activity (17 issues, 31 PRs), with a focus on landing the multi-skill activation feature and fixing model-switching regressions. Maintainers merged several PRs from repeat contributors.
- **OpenAI Codex** had 30+ issues and 13 merged PRs (all from a single bot, `copyberry`), indicating a batch of infrastructure fixes. No new issues were closed by maintainers from the hot list.
- **Claude Code** had the lowest activity (10 PRs, all from one contributor, mostly script fixes) and no new releases. Several long-standing sandbox bugs remain open with no maintainer response on the most active issues.

## 6. Evidence-Backed Observations

1. **Session management is a cross-tool pain point, not a feature differentiator.** All four tools have multiple open issues about retention, archiving, deletion, and persistence. Users are reacting to silent data loss and lack of control rather than seeking new capabilities.

2. **Performance regressions are becoming systemic, not tool-specific.** CPU spikes, spawn storms, and memory leaks appear in three of four tools today. The OpenCode ID overflow is a unique case, but the pattern of unbounded resource usage (Codex’s `SkyComputerUseService`, Kimi’s shell-only transcript bloat, Claude Code’s terminal flickering) suggests similar architectural weaknesses.

3. **Sandbox and security configuration remains a source of frustration, not trust.** Communities report that safeguards block legitimate workflows (penetration testing, Git operations, system-level programming) while ignoring actual misconfigurations (permissions not respected, deny-list paths breaking tools). The gap between intended security and actual UX is wide.

4. **Model switching and configuration consistency is a recurring reliability issue.** Kimi Code and Claude Code both have active bugs where switching models mid-session causes crashes, corrupted state, or UI display errors. Codex has no analogous report today, but its subagent quota drain issue implies misconfiguration in another dimension.

5. **No clear cross-tool signal emerges for a dominant new feature direction.** While multi-skill activation (Kimi) and workspace scoping (Codex) are notable, they are not replicated across other tools today. The strongest shared signal is negative: users are demanding better session management, performance, and security configurability, not new capabilities.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-17

## Today's Update Brief

Low activity day with no new releases. Ten pull requests—mostly test-infrastructure fixes by a single contributor—were batch-closed alongside a handful of open feature requests and bug reports filed on August 5–6. The community continues to submit sandbox, performance, and conversation-management polishing requests, while several long-standing sandbox and agent bugs remain open with active reproduction.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

### 1. [BUG] Claude Code silently deletes conversation transcripts after 30 days by default
**#62476** — [OPEN] — 14 comments, 20 👍
Affects every user who relies on history for debugging or audit. The transcript deletion is default and silent, with no retention-configuration UI. The 20 upvotes suggest broad community demand for configurable retention.
https://github.com/anthropics/claude-code/issues/62476

### 2. [FEATURE] Change Default Plan Mode Exit Option
**#18599** — [CLOSED] — 14 comments, 38 👍
The highest-engagement closed item today. Users found the plan-mode exit flow confusing. The 38 upvotes indicate strong consensus, and the issue was closed, likely resolved in a prior release.
https://github.com/anthropics/claude-code/issues/18599

### 3. [BUG] Agent tool ignores `effort:` frontmatter in subagent .md files
**#64706** — [CLOSED] — 8 comments, 5 👍
Subagent `.md` files declaring `effort:` in frontmatter are overridden by the global `effortLevel` from settings. This breaks the intended per-agent effort control. Marked closed, suggesting a fix was shipped.
https://github.com/anthropics/claude-code/issues/64706

### 4. [BUG] `/goal` Stop hook emits markdown to stdout, fails JSON schema validation
**#62246** — [CLOSED] — 7 comments, 4 👍
The internal Stop hook spawned by `/goal` writes human-readable markdown instead of JSON, triggering validation failures. Closed, likely patched in a recent build.
https://github.com/anthropics/claude-code/issues/62246

### 5. [BUG] `.devcontainer/init-firewall.sh` fails DNS resolution on `statsig.anthropic.com`
**#55623** — [OPEN] — 6 comments, 17 👍
A blocking issue for devcontainer users: the startup script treats unresolvable hostnames as fatal, aborting container launch. The hostname `statsig.anthropic.com` has no public DNS record. 17 upvotes from a long-standing issue (May 2026).
https://github.com/anthropics/claude-code/issues/55623

### 6. [BUG] Sandbox masks nonexistent deny-listed paths as unreadable device nodes — breaks plain git
**#76558** — [OPEN] — 4 comments, 0 👍
WSL2 sandbox behavior: writing `.git/config.worktree` to a deny list causes the sandbox to present it as a device node, breaking git operations when `extensions.worktreeConfig` is enabled. A subtle but disruptive sandbox regression.
https://github.com/anthropics/claude-code/issues/76558

### 7. [BUG] Background tasks stay "Running" forever in the panel after completing
**#66955** — [CLOSED] — 3 comments, 2 👍
Background tasks (Bash with `run_in_background: true` and Agent tasks) never transition to completed state, accumulating across restarts. Closed, indicating a fix was deployed.
https://github.com/anthropics/claude-code/issues/66955

### 8. [FEATURE] Reimplement Claude Code in pure Rust to eliminate CPU spikes and terminal flickering
**#84192** — [OPEN] — 1 comment, 1 👍
A dramatic feature request from a developer in India, reporting that the TypeScript terminal layer causes massive idle CPU spikes and terminal flickering. The request suggests a full Rust rewrite—unlikely to be adopted, but the underlying performance complaint is concrete.
https://github.com/anthropics/claude-code/issues/84192

### 9. [FEATURE] Render color swatches next to color codes in assistant output
**#84144** — [OPEN] — 0 comments, 3 👍
A small but practical TUI enhancement: when Claude outputs a hex color code, the terminal should render a color swatch inline. 3 upvotes in the first day.
https://github.com/anthropics/claude-code/issues/84144

### 10. [FEATURE] Desktop app: make the conversation panel wider / support full-width layout
**#84260** — [OPEN] — 1 comment, 2 👍
The desktop app's conversation panel is too narrow for code-heavy conversations. Users want a full-width or resizable layout.
https://github.com/anthropics/claude-code/issues/84260

## Key PR Progress

### 1. fix(plugin-dev): limit frontmatter parsing
**#84004** — [CLOSED] — @RerankerGuo
Fixes a bug where `sed`-based frontmatter parsing restarted at every `---` in the document body, causing incorrect parsing when markdown contains horizontal rules.
https://github.com/anthropics/claude-code/pull/84004

### 2. fix(scripts): propagate top-level failures
**#84003** — [CLOSED] — @RerankerGuo
Both duplicate-maintenance scripts used `.catch(console.error)` which logged errors but resolved the promise successfully, masking startup and API failures. Now rejects properly.
https://github.com/anthropics/claude-code/pull/84003

### 3. fix(scripts): validate gh flag values
**#83999** — [CLOSED] — @RerankerGuo
The `gh` wrapper's argument parser could leave `skip_next=true` at end of input, forwarding incomplete commands like `gh issue list --limit` without the required value.
https://github.com/anthropics/claude-code/pull/83999

### 4. fix(scripts): validate label option values
**#83995** — [CLOSED] — @RerankerGuo
`--add-label` and `--remove-label` without a value previously caused an unbound variable error. Now validates before consuming the next positional argument.
https://github.com/anthropics/claude-code/pull/83995

### 5. fix(scripts): reject self-referential duplicates
**#83993** — [CLOSED] — @RerankerGuo
`comment-on-duplicates.sh` could propose the triggering issue as a duplicate of itself, posting a self-referential comment. Now rejects identical base and duplicate issue numbers.
https://github.com/anthropics/claude-code/pull/83993

### 6. fix(plugin-dev): assert expected hook decision
**#83992** — [CLOSED] — @RerankerGuo
Fixes #83800. `test-hook.sh` previously treated both allow and deny as success, masking hooks that allow when they should deny. Adds `--expect allow|deny|ask` flag.
https://github.com/anthropics/claude-code/pull/83992

### 7. fix(plugin-dev): report missing jq dependency
**#83990** — [CLOSED] — @RerankerGuo
Fixes #83802. `test-hook.sh` silently treated missing `jq` as invalid JSON. Now checks for `jq` before its first use and reports the missing dependency.
https://github.com/anthropics/claude-code/pull/83990

### 8. Create python-package-conda.yml
**#87125** — [OPEN] — @Salamyamadi
Adds a Conda-based Python package CI workflow. Low risk, likely a contribution to the project's CI tooling.
https://github.com/anthropics/claude-code/pull/87125

### 9. fix(security-guidance): make ** glob patterns match zero-depth paths
**#87079** — [OPEN] — @anishsamant
`glob_match` delegated to `fnmatch` where a bare `*` already crosses `/`, so `**/*.ts` silently excludes top-level files from security rules. Fixes the glob implementation to match at zero depth.
https://github.com/anthropics/claude-code/pull/87079

### 10. fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents
**#87077** — [OPEN] — @anishsamant
Every agent's description contained unquoted dialogue lines (e.g., `Daisy: "..."`) that YAML parsers interpret as nested mappings, causing empty frontmatter. Fixes by quoting.
https://github.com/anthropics/claude-code/pull/87077

## Feature Request Clusters

### Sandbox and Security Tooling
Multiple requests center on sandbox behavior: making deny-listed paths properly opaque without breaking git operations (#76558), relaxing safeguards for legitimate system-level programming on Windows (#84160), and bypassing safety filters for security auditing (#84139). A common thread: the sandbox is too aggressive or too opaque, making legitimate development workflows harder.

### Session and Conversation Management
The largest cluster this week. Requests include: configurable retention for conversation transcripts (#62476, #84169), archive/unarchive functionality with an Archived view (#84172, #87244), pinning sessions and custom sort order (#84368), and making the desktop conversation panel wider (#84260). Users want more control over their history.

### TUI and Terminal Display
Several small UI polish requests: color swatch rendering (#84144), keeping tool-call groups expanded while individual commands stay collapsed (#84181), showing the current model name in the CLI status bar (#84407), and collapsing the mid-turn user-message wrapper boilerplate (#84389).

### Performance and Reimplementation
A single but notable request to reimplement Claude Code in pure Rust (#84192) to eliminate CPU spikes and terminal flickering. Also: caching analysis results across PR iterations to reduce redundant token usage (#84204), and improving CLI performance for long-running operations (#84179).

### Model and Safeguard Configuration
Users want a discoverable model list with offline fallback (#84159), a confirmation gate before state-changing tool calls after a safeguards model fallback (#84446), and the ability to bypass or relax safeguards for specific use cases (#84139, #84160).

## Developer Pain Points

- **Conversation history silently deleted** after 30 days with no configurable retention or UI to recover archived chats (#62476, #84169, #87244).
- **Sandbox masking is too aggressive**: deny-listed paths presented as device nodes break git on WSL2 (#76558), and the startup firewall script fails on DNS resolution (#55623).
- **Performance issues in the terminal layer**: CPU spikes and flickering reported across platforms (#84192, #84179).
- **Safeguards triggering on legitimate development work**: multiple users report that security tooling, system-level programming, and Windows privilege management trigger false positives (#84139, #84160, #84221).
- **Agent and subagent behavior inconsistencies**: effort frontmatter ignored (#64706), working directory not per-agent (#84171), and background tasks accumulating in the panel (#66955).
- **Model management is opaque**: no way to enumerate older models from the picker, and no offline fallback when the API is down (#84159).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-17

## Today’s Update Brief
No new releases were published in the last 24 hours. The community filed 30+ issues and 13 pull requests, with a strong focus on performance regressions (CPU spikes, spawn storms, input lag) and several long-standing feature requests reaching high reaction counts. The maintainers merged a batch of PRs from the `copyberry` bot, addressing TUI behaviour, permission handling, network diagnostics, and shell variable policies.

## Releases
*None in the last 24 hours.*

## Hot Issues (10 Noteworthy)

1. **#24510 – High CPU from unbounded thread metadata**
   `[bug, app, session, app-server, performance]`
   Codex Desktop maintains high CPU/GPU usage when the local profile contains many active threads with large `title`/`preview` metadata.
   *29 comments, 0 reactions*
   [Link](https://github.com/openai/codex/issues/24510)

2. **#25319 – Scope VS Code chats to the current workspace/project**
   `[enhancement, extension, session]`
   Users want the VS Code extension to isolate chat history per workspace, avoiding cross-project context pollution.
   *29 comments, 62 👍*
   [Link](https://github.com/openai/codex/issues/25319)

3. **#20500 – Support multiple named accounts per app/connector**
   `[enhancement, codex-web, auth]`
   Requests explicit account selection and hard privacy boundaries for connecting multiple authorisations (e.g., GitHub, GitLab) within one Codex session.
   *27 comments, 107 👍*
   [Link](https://github.com/openai/codex/issues/20500)

4. **#24990 – ChatGPT login flow fails for Plus subscribers**
   `[bug, auth]`
   Paying ChatGPT Plus users cannot access Codex through the advertised login flow; both `codex login` methods redirect to a phone-verification page.
   *25 comments, 22 👍*
   [Link](https://github.com/openai/codex/issues/24990)

5. **#38455 – Computer Use worker spawn storm causes V8 OOM on macOS**
   `[bug, app, computer-use, performance]`
   App version 26.810.41047 repeatedly spawns `SkyComputerUseService` processes (187 threads at crash), leading to SIGABRT via `node::OOMErrorHandler`.
   *22 comments, 9 👍*
   [Link](https://github.com/openai/codex/issues/38455)

6. **#20864 – Desktop laggy from scanning all `~/.codex/sessions` files**
   `[bug, app, session, performance]`
   The app scans every session file on launch instead of respecting the Desktop-visible session index, causing noticeable slowdowns.
   *21 comments, 6 👍*
   [Link](https://github.com/openai/codex/issues/20864)

7. **#28855 – Windows input lag after launch/reopen**
   `[bug, windows-os, app, performance]`
   Codex Desktop on Windows causes intermittent whole-system mouse and keyboard lag, even with default plugins disabled.
   *20 comments, 20 👍*
   [Link](https://github.com/openai/codex/issues/28855)

8. **#34306 – Safety check falsely blocks cybersecurity requests**
   `[bug, CLI, safety-check]`
   The CLI refuses to show certain content with a “cybersecurity requests” warning, even for legitimate penetration testing or educational use.
   *15 comments, 9 👍*
   [Link](https://github.com/openai/codex/issues/34306)

9. **#26227 – Persist side chats as child threads attached to the main thread**
   `[enhancement, TUI, session]`
   Side chats are currently ephemeral; users want them saved and attached to the parent thread so they survive app restarts.
   *13 comments, 23 👍*
   [Link](https://github.com/openai/codex/issues/26227)

10. **#35463 – Subagents drain full week quota overnight**
    `[bug, rate-limits, CLI, subagent]`
    Pro 20x subscribers report that subagent usage is counted incorrectly, exhausting the weekly quota in a single session.
    *12 comments, 0 reactions*
    [Link](https://github.com/openai/codex/issues/35463)

## Key PR Progress (10 Important)

1. **#38921 – Compact successful command activity in the TUI**
   Groups consecutive successful commands into a single `Ran N commands` entry, preserving full transcripts for review.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38921)

2. **#38919 – Reject obsolete app-server permission profile fields**
   Stops silently ignoring the removed `permissionProfile` field, preventing clients from inadvertently bypassing permission settings.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38919)

3. **#38918 – Improve `codex doctor` network diagnostics**
   Probes the configured inference endpoint with Codex’s route-aware HTTP client, classifying TLS, proxy, DNS, and timeout failures.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38918)

4. **#38916 – Honor legacy `:project_roots` permission entries**
   Parses the old `:project_roots` token as an alias for `:workspace_roots`, preventing dropped filesystem restrictions on older profiles.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38916)

5. **#38913 – Stop rendering columns after filling their area**
   Optimises TUI rendering by halting column iteration once the bottom of the available area is reached.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38913)

6. **#38907 – Edit queued messages with Vim history-up**
   In Vim normal mode, using the history-up binding restores the latest queued follow-up for editing, then removes it from the queue.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38907)

7. **#38902 – Honor per-environment shell variable policies**
   Carries `ShellEnvironmentPolicy` in each resolved environment config, applying the correct policy for shell commands, user shell tasks, and unified exec.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38902)

8. **#38894 – Add working-directory commands to the TUI**
   Introduces `/cd [path]` to change the local session’s working directory without losing conversation history, with project config reloading.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38894)

9. **#38893 – Restore thread timestamp maxima independently**
   Loads `updated_at_ms` and `recency_at_ms` maxima with separate scalar subqueries, fixing a state initialisation bug when maxima belong to different threads.
   *Merged*
   [Link](https://github.com/openai/codex/pull/38893)

10. **#38840 – Identify Mac mini hosts in remote control handshakes**
    Sends `x-codex-host-device-kind: mac_mini` when the machine hardware profile matches “Mac mini”, improving remote control compatibility.
    *Merged*
    [Link](https://github.com/openai/codex/pull/38840)

## Feature Request Clusters

- **Workspace/Project Scoping** – Several requests ask for chat history isolation per workspace in the VS Code extension (#25319) and per-project working directories in the TUI (#38894, already merged).
- **Multi-Account/Auth Improvements** – The most-upvoted open issue (#20500, 107 👍) requests support for multiple named accounts per connector. The ChatGPT login flow (#24990) also remains a blocker for many Plus users.
- **Side Chat Persistence** – Users want side chats to be saved as child threads (#26227, 23 👍) rather than lost on session close.
- **Model & UI Customisation** – Requests include a keybinding to cycle through configured models (#31839), restoring subagent model/reasoning info in the panel (#32283), and an independent quick-ask popout window (#19680).
- **Documentation of 1M Context Window** – A recent issue (#38917) points out that the documented 1M-token context for GPT-5.6 Sol is not actually available in the CLI or Desktop app, creating confusion.

## Developer Pain Points

- **Performance Regressions** – Multiple reports of high CPU usage from unbounded thread metadata (#24510), session file scanning (#20864), and Windows input lag (#28855) indicate that the app’s process and state management needs optimisation.
- **Computer Use Worker Spawn Storms** – Two separate issues (#38455, #38760) describe macOS apps crashing or causing kernel panics due to unbounded `SkyComputerUseService` respawn loops. The maintainers have not yet merged a fix.
- **Rate Limiting & Quota Anomalies** – Subagents draining the entire weekly quota (#35463) and Pro 20x usage appearing like Plus (#29968) suggest misaccounting in the rate-limiting system.
- **Auth & Login Friction** – The ChatGPT login flow (#24990) and the inability to use multiple accounts per connector (#20500) frustrate users who rely on Codex across different services.
- **Windows-Specific Bugs** – Sandbox setup errors (#32315, #35864), input lag (#28855), and unresponsive file-edit buttons in Remote SSH (#34652) continue to plague Windows users.
- **Context Compaction & Encryption Issues** – Stale encryption keys can break threads permanently (#36704), and compaction can reintroduce completed work as pending (#38931), causing repeated investigation loops.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-17

## 1. Today's Update Brief

Daily activity remains high with 17 issues and 31 pull requests updated in the last 24 hours. No new releases were published. The community is focused on bug fixes for the v0.36.1 release (model switching crashes, session corruption, workspace trust) and landing follow-up work for the multi-skill activation feature. Several PRs from repeat contributors address long-standing UX issues in the TUI and VS Code extension.

## 2. Releases

No new releases in the last 24 hours. The latest version remains **0.36.1**.

---

## 3. Hot Issues

### Multi-skill activation in a single prompt (CLOSED)
**#1736** — [@shuizhongyueming](https://github.com/shuizhongyueming) proposed supporting inline skill activation mid-prompt (e.g., `/skill:code-review` anywhere in the input, not just at the start). This was closed as resolved by #2934 + #2935. The follow-up PR #2982 now exposes the feature through the kap-server API for the desktop client.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/1736)

### Usage manipulation concern
**#2758** — [@3xp10its](https://github.com/3xp10its) reports suspected usage manipulation in the VS Code extension (latest version, K3 model, Windows 11). The issue is vague but suggests a potential billing/security concern. Low community engagement (0 👍, 4 comments), but the maintainers have not closed it.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2758)

### Delete session option for web app
**#2356** — [@csteri](https://github.com/csteri) requests a "Delete session" option in the web app's session context menu (currently only has Copy, Rename, Fork, Export, Archive). This is a common UX gap; archived sessions accumulate without a clean deletion path.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2356)

### Session history lost when using `kimi -r`
**#2905** (CLOSED) — [@akeyz](https://github.com/akeyz) reports that resuming a session with `kimi -r` shows no previous conversation history on macOS with K3-256k. The issue was closed, but the fix is not visible in the latest release notes.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2905)

### Model switching from vision to text causes session freeze
**#2986** — [@jekhy](https://github.com/jekhy) reports that switching from a vision model to a pure text model (GLM-5.3) causes the session to crash with an error. This is a critical UX bug for users who need to toggle between model types mid-session.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2986)

### Paste video sends unresolved file:// URL, poisons session
**#2979** — [@alex-ca1123](https://github.com/alex-ca1123) reports that pasting a video into the TUI sends a `file://` URL to the model instead of the actual video content. The failed request permanently corrupts the session. This affects users on the Moonshot AI open platform API.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2979)

### Context cap UI not refreshing on model switch (first use)
**#2977** — [@Win-Hao](https://github.com/Win-Hao) reports that when a new user switches from the default model to K3 using `/model`, the footer context cap display remains at the previous model's value. This is a regression introduced in v0.33.0 (session lazy loading). A PR (#2978) is already open.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2977)

### Workspace trust not inherited by subdirectories
**#2976** — [@dmeiser](https://github.com/dmeiser) reports that launching Kimi Code in a subfolder of an already-trusted parent directory still shows the "Trust this folder?" prompt. This breaks workflows with dynamic worktrees (git worktree farms, CI-style directories). A PR (#2980) is open.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2976)

### CLI secondary model config key error
**#2975** — [@Sino-Huang](https://github.com/Sino-Huang) reports that setting a secondary model in CLI mode writes the wrong key to `config.toml`, preventing the configuration from being applied correctly.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2975)

### Skill script path resolution error
**#2974** — [@Sino-Huang](https://github.com/Sino-Huang) reports that script files inside Skill folders (e.g., from community skills like mattpocock's) are not resolved correctly, causing execution failures. This affects the Skill system's reliability.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2974)

---

## 4. Key PR Progress

### Workspace trust inheritance fix
**#2980** — [@atirna](https://github.com/atirna) fixes the subdirectory trust issue (#2976) by making workspace trust checks recognize a trusted parent directory for nested workspaces. Includes test updates.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2980)

### Bundled skill activation for kap-server
**#2982** — [@chengluyu](https://github.com/chengluyu) exposes the multi-skill activation engine (from #1736) on the kap-server `/api/v1` route, so the Kimi Code App desktop client can also use inline skill activation.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2982)

### Unify v1 MCP management plane
**#2858** — [@7Sageer](https://github.com/7Sageer) merges two MCP server sources (global and session-level) that currently only unify at session start. This PR unifies the management plane earlier, reducing startup complexity. Internal design doc referenced.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2858)

### Degrade media tool registration on stale model alias
**#2985** — [@bj456736](https://github.com/bj456736) fixes a startup error when a session references a model that no longer exists in `config.toml`. Instead of crashing, the media tool registration degrades gracefully.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2985)

### Tower command for multi-agent orchestration (CLOSED)
**#2633** — [@tpoisonooo](https://github.com/tpoisonooo) introduces a `/tower` command that orchestrates multiple agents working on the same repo simultaneously. Agents coordinate to avoid conflicts (e.g., not writing to the same file). This is a significant new feature for collaborative agent workflows.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2633)

### Fix Gemini tool-call thought signature
**#2914** — [@SeleneXX](https://github.com/SeleneXX) fixes Gemini model (e.g., gemini-3.7-flash thinking) tool-call failures caused by missing `thought_signature` in functionCall parts. The fix also preserves trailing user text order.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2914)

### Fix Bash cwd with `&` in commands
**#2957** — [@pucedoteth](https://github.com/pucedoteth) fixes a shell parsing bug where `cd` is swallowed when a command contains `&` (e.g., `cd /d && a & b`). The fix ensures the working directory is applied correctly.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2957)

### Omit incompatible tool schemas for Anthropic
**#2338** — [@ousamabenyounes](https://github.com/ousamabenyounes) filters out MCP tools with `oneOf`, `anyOf`, or `allOf` at the root of their input schema, which Anthropic rejects. This prevents a single incompatible tool from blocking all requests.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2338)

### Trim shell-only transcript turns and cap stored output
**#2621** — [@he-yufeng](https://github.com/he-yufeng) fixes a memory leak where sessions that use `!` shell commands grow unbounded. The PR trims shell-only transcript turns and caps stored output.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2621)

### Refresh context cap UI on model switch
**#2978** — [@Win-Hao](https://github.com/Win-Hao) fixes the footer context cap display not updating when switching models without an active session (#2977). The fix ensures the UI reflects the correct model's context limit.
[PR link](https://github.com/MoonshotAI/kimi-code/pull/2978)

---

## 5. Feature Request Clusters

### Cross-device session pairing
**#2984** — [@airvzxf](https://github.com/airvzxf) requests a first-class pairing flow between the Kimi Code CLI and the Kimi mobile app, allowing users to monitor and steer agent loops from their phone (similar to Claude Code's mobile pairing). This is a new feature request with no existing implementation.
[Issue link](https://github.com/MoonshotAI/kimi-code/issues/2984)

### Session management improvements
Multiple requests for better session lifecycle management:
- **#2356**: Delete session option in web app context menu
- **#2984**: Cross-device session pairing
- **#2968**: Cron task visibility and management (no user-facing UI for cron tasks created by the model)

### Multi-skill activation (now implemented)
**#1736** (CLOSED) — Landed as #2934 + #2935, with follow-up API exposure in #2982. This was a high-demand feature that is now shipped.

---

## 6. Developer Pain Points

### Model switching and session corruption
Several issues report crashes or freezes when switching models mid-session:
- **#2986**: Session freeze after switching from vision to text model
- **#2977**: Context cap UI not refreshing on model switch
- **#2905**: Session history lost when resuming with `kimi -r`

### File handling and media support
- **#2979**: Pasted video sends file:// URL, permanently corrupting session
- **#2974**: Skill script files not resolved correctly
- **#2972** (PR): UTF-8 multibyte files (Chinese, emoji) incorrectly classified as binary

### Configuration and trust issues
- **#2975**: CLI secondary model config key error
- **#2976**: Workspace trust not inherited by subdirectories
- **#2964**: Permission rules not working

### UI/UX regressions
- **#2965**: TodoList not showing content in VS Code extension v0.7.0 (v2 update)
- **#2977**: Context cap UI not refreshing on model switch
- **#2981**: `getModels` crash with "Cannot read properties of undefined (reading 'toLowerCase')" in v0.7.0

### Infrastructure and connection issues
- **#1917**: APIConnectionError becomes permanent until process restart (HTTP client wedges)
- **#1321**: WebSocket error on public servers using web UI

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-17

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remains high, with 50 issues and 50 pull requests updated. The most critical developments center on a **message ID overflow bug** that surfaced on August 14—multiple reports confirm that pre-existing sessions silently stop accepting new messages. A new issue also reports **corrupted output with DeepSeek V4 Flash**, and the install script’s documented environment variables are being ignored. Several infrastructure fixes (perf benchmarks, session command routing, MCP code mode compatibility) are being merged.

## Hot Issues

1. **#42970 – DeepSeek V4 Flash produces corrupted reasoning/output in OpenCode Go**
   *[OPEN] – 4 comments, 👍1*
   A fresh session with a simple `hi` prompt generates nonsensical output. The issue is not caused by project-specific instructions.
   [GitHub](https://github.com/anomalyco/opencode/issues/42970)

2. **#42969 – Payment succeeded but OpenCode-Go subscription not activated**
   *[OPEN, needs:compliance] – 3 comments*
   User reports successful payment but workspace still shows no active subscription, blocking API calls.
   [GitHub](https://github.com/anomalyco/opencode/issues/42969)

3. **#42974 – Install script ignores OPENCODE_INSTALL_DIR and XDG_BIN_DIR**
   *[OPEN] – 2 comments*
   The README documents a priority order for the installation directory, but the script hardcodes `$HOME/.opencode/bin`.
   [GitHub](https://github.com/anomalyco/opencode/issues/42974)

4. **#42955 – 48-bit ID overflow (2026-08-14) silently breaks every pre-existing session**
   *[CLOSED] – 2 comments*
   `Identifier.create()` truncates timestamps to 48 bits; the overflow means newly generated IDs sort before older ones, causing the session loop to exit without processing user input.
   [GitHub](https://github.com/anomalyco/opencode/issues/42955)

5. **#38791 – Run loop can never exit when message IDs are not time-sortable**
   *[CLOSED] – 7 comments*
   Sessions imported from third-party tools use non-chronological IDs, causing the run loop to stall until the provider returns a 400 error.
   [GitHub](https://github.com/anomalyco/opencode/issues/38791)

6. **#24476 – Web prompts stop after the first reply when client and server clocks differ**
   *[CLOSED] – 6 comments, 👍2*
   A clock skew between client and server in `opencode serve` causes subsequent messages to be stored but never trigger an assistant response.
   [GitHub](https://github.com/anomalyco/opencode/issues/24476)

7. **#21997 – UI Rendering: Thinking process visible but final response text hidden**
   *[CLOSED] – 5 comments, 👍4*
   The interface displays the model’s internal thinking but fails to show the actual answer, creating a loop where the AI appears to “think” forever.
   [GitHub](https://github.com/anomalyco/opencode/issues/21997)

8. **#32547 – Error: no such column: “data”**
   *[CLOSED] – 4 comments*
   All tool calls (bash, glob, grep, etc.) fail with a SQLite error because bare `data` is interpreted as a column name instead of a string literal.
   [GitHub](https://github.com/anomalyco/opencode/issues/32547)

9. **#10504 – OpenCode binary fails to run natively on Termux / Android aarch64**
   *[CLOSED] – 10 comments, 👍7*
   The official binary has the wrong interpreter and is non-PIE, making it incompatible with Termux on Android.
   [GitHub](https://github.com/anomalyco/opencode/issues/10504)

10. **#8832 – opencode not respecting permissions**
    *[CLOSED] – 17 comments, 👍9*
    Configuration file permissions for bash commands (e.g., `find`, `ls`) are ignored, allowing unauthorized command execution.
    [GitHub](https://github.com/anomalyco/opencode/issues/8832)

## Key PR Progress

1. **#42975 – fix(install): honor OPENCODE_INSTALL_DIR and XDG_BIN_DIR as documented**
   *[OPEN]*
   Directly addresses the install script bug. Reads the documented environment variables and falls back to the default path.
   [GitHub](https://github.com/anomalyco/opencode/pull/42975)

2. **#42978 – fix(app): show current worktree branch**
   *[OPEN]*
   Uses the active directory when resolving the branch name, so manually opened worktrees display the correct branch instead of the primary worktree’s.
   [GitHub](https://github.com/anomalyco/opencode/pull/42978)

3. **#42873 – fix(session): reference media parts by message and part id**
   *[OPEN]*
   Improves the placeholder text when a model cannot read an attached image, giving better guidance to users.
   [GitHub](https://github.com/anomalyco/opencode/pull/42873)

4. **#42971 – fix(core): keep nested MCP code mode tools direct**
   *[OPEN]*
   Adds an internal plugin to keep Cloudflare MCP tools direct by default, preventing nesting of one Code Mode inside another.
   [GitHub](https://github.com/anomalyco/opencode/pull/42971)

5. **#42949 – fix(app): render code mode executions**
   *[CLOSED]*
   Adds a dedicated Desktop renderer for Code Mode executions, showing an inline row with shimmer, code preview, and expandable output.
   [GitHub](https://github.com/anomalyco/opencode/pull/42949)

6. **#42966 – fix(session): use session selection for commands**
   *[OPEN]*
   Removes caller-supplied agent/model from slash command contracts and switches clients to the selected session agent/model before admitting commands.
   [GitHub](https://github.com/anomalyco/opencode/pull/42966)

7. **#42965 – fix(core): run HTTP hooks for session generate**
   *[CLOSED]*
   Attaches `SessionModelHttp.middleware` to session generate calls, ensuring HTTP middleware is applied on the generate path.
   [GitHub](https://github.com/anomalyco/opencode/pull/42965)

8. **#41478 – fix(tui): preserve model variants across sessions**
   *[CLOSED]*
   Captures the active model and variant before navigating to `/new`, then reapplies the selection when creating a new session.
   [GitHub](https://github.com/anomalyco/opencode/pull/41478)

9. **#42958 – fix(app): omit shell prompts when copying commands**
   *[CLOSED]*
   Makes leading `$` shell prompts non-selectable and strips them when copying, while preserving actual `$` characters inside commands.
   [GitHub](https://github.com/anomalyco/opencode/pull/42958)

10. **#37585 – fix(server): enforce event stream ownership and diagnostics**
    *[CLOSED]*
    Part of the 2.0 series; ensures event stream ownership is enforced server-side and adds diagnostic logging for debugging disconnect issues.
    [GitHub](https://github.com/anomalyco/opencode/pull/37585)

## Feature Request Clusters

- **Plugin Pipeline / Middleware** (#5148) – Users want a middleware-style data flow control system for plugins, beyond current event hooks.
- **Data Retention & Pruning** (#32630, #24683) – SQLite databases can grow to hundreds of MB; users request automatic deletion of old sessions and configurable retention policies.
- **Subagent Model/Effort Configuration** (#32730) – Requests to specify model and effort level when invoking subagents (e.g., `@explore`).
- **Inline Code Completion** (#19226) – Multiple users request “ghost text” autocompletion similar to Cursor/Copilot.
- **Context Window Management** (#24683) – Automatic compression of session context is reported as not triggering reliably, leading to severe bloat.

## Developer Pain Points

- **Message ID Overflow** – Multiple issues (e.g., #42955, #42798, #42731) confirm that the 48-bit ID space wrapped on 2026-08-14, silently breaking all pre-existing sessions. The root cause is in `Identifier.create()` and lexicographic comparison in `runLoop`.
- **SQLite “no such column: data”** – Two reports (#32547, #32714) show that bare `data` is interpreted as a column name, causing all tool calls to fail. Likely a string quoting regression.
- **`--pure` flag ineffective** (#31810) – The OMO plugin still loads even when `--pure` is passed, undermining the sandboxing feature.
- **Permissions not respected** (#8832) – Despite configuration, bash commands like `find` and `ls` are allowed, indicating a gap in the permission enforcement logic.
- **Termux incompatibility** (#10504) – The official binary uses a non-PIE executable and wrong interpreter, blocking use on Android devices.
- **Install script discrepancy** (#42974) – The script ignores documented environment variables, forcing users into a hardcoded path.

</details>