# AI CLI Tools Community Digest 2026-07-31

> Generated: 2026-07-31 00:26 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-07-31

## 1. Daily Cross-Tool Overview
Today’s activity across the four tracked AI CLI tools ranged from release-driven momentum (OpenCode, Kimi Code, OpenAI Codex) to a quieter maintainer presence (Claude Code). Three tools shipped new versions: OpenCode released v1.18.10 with Modal model discovery, Kimi Code published v0.31.0 adding plugin-contributed custom agents, and Codex tagged an alpha Rust CLI (0.147.0-alpha.2). Claude Code closed only one pull request and had no release. Community issue discussions clustered around MCP interoperability, agent lifecycle control, and cross-platform UI stability.

## 2. Activity Comparison

| Tool | Issues Updated | PRs Processed | Release Status |
|------|----------------|---------------|----------------|
| Claude Code | 50 | 1 (closed, no merge) | None in 24 hours |
| OpenAI Codex | 50 | 50 | rust-v0.147.0-alpha.2 |
| Kimi Code | 29 | 47 | v0.31.0 (plugin-contributed custom agents) |
| OpenCode | 50 | 50 | v1.18.10 (Modal model discovery, desktop fixes) |

## 3. Shared Feature Directions
Multiple tools show overlapping requirements or pain points:

- **MCP tool schema compatibility across providers**
  Claude Code’s Cowork GitHub connector is broken (OAuth DCR unsupported), and Kimi Code’s Anthropic provider rejects tools with `oneOf`/`anyOf`/`allOf`. Codex users demand flattened MCP namespaces for non-OpenAI providers (Ollama, LM Studio, OpenRouter). MCP interoperability when mixing APIs and tools is a shared, unresolved friction point.

- **Agent lifecycle & sandboxing gaps**
  Claude Code: `TaskStop` doesn’t kill child subagents (750k tokens wasted), background agent transcripts become unresumable. Codex: `gpt-5.6-luna` is blocked from V2 multi-agent workflows. Kimi Code: agent timeout description mismatch and disabled MCP tools not filtered. OpenCode: plan mode can escape restrictions via `cat > file` in bash. All four tools exhibit weaknesses in agent boundary enforcement, tool gating, and task spawning/termination.

- **Cross-platform UI/UX instability**
  Claude Code: iOS sessions auto-archive, making mobile Code unusable. Codex: Windows desktop app frequently freezes, crashes on Browser Use. Kimi Code: TUI scroll locks during output, scroll resets after tool permission prompts. OpenCode: plugin dependency errors break the main screen after upgrade. Desktop, mobile, and terminal experiences all show fragility.

- **Authentication and account management**
  Claude Code users request multi-account switching on mobile (530 upvotes). Codex OAuth authentication fails at issuer validation. OpenCode GitHub OAuth login fails with empty email. Payment method update is broken in Claude Code. Identity and billing infrastructure problems are evident across several communities.

## 4. Differentiation Analysis

- **Claude Code** focuses heavily on **Cowork sessions** (data loss, GitHub connector, iOS archive) and **background agent reliability**, with a large feature request for multi-account identity. Its community is vocal about billing transparency and memory/resource bugs (ugrep 4–17 GB). The repo shows high issue volume but low maintainer throughput (1 PR today).

- **OpenAI Codex** is advancing **Rust CLI tooling**, **enterprise automation plan support**, and **exec-server policy routing**. Differentiators include tool-free thread mode, parallel MCP calls, and a dedicated V8 runtime isolation. The community is preoccupied with Windows desktop stability, rate-limit perception, and MCP tool namespace flattening for non-OpenAI models.

- **Kimi Code** emphasizes **plugin-contributed custom agents**, a **workspace-scoped agent registry**, and **capability domains** (kimi-cu, kimi-webbridge). The team rapidly fixes TUI scroll/UX issues and adds third-party provider catalog fallback. Its lower issue count but high PR count suggests a responsive maintenance cycle around a v2 agent core.

- **OpenCode** distinguishes itself with **automatic Modal model discovery**, **plan mode** (though sandbox escapes exist), and **desktop app UX refinements** (attachments, toasts, tabs). It faces provider overloads (GPT-5.6 Sol), plugin dependency breakage after upgrades, and session list/project dialog gaps in the web UI.

## 5. Community Activity Notes
- **Highest PR throughput**: OpenAI Codex and OpenCode both processed 50 PRs; Kimi Code close behind with 47. Codex’s PRs included automated merges for enterprise features, exec-server routing, and code mode isolation. OpenCode’s PRs addressed TUI improvements, session directory inheritance, and multiple fixes. Kimi’s PRs were largely fix-forward (scroll, tool schema, catalog fallback).
- **Most releases**: Three tools shipped releases today (OpenCode, Kimi, Codex alpha). Claude Code had no release.
- **Maintainer responsiveness**: Kimi Code and OpenCode closed multiple user-reported issues with fixes shipped or in PRs. Codex merged a wide range of improvements. Claude Code’s single closed PR was a test/spam submission, and no maintainer replies were noted on top issues, indicating a slower response cycle on this date.

## 6. Evidence-Backed Observations
1. **MCP tool interoperability is a cross-tool pain point** — Claude Code, Codex, and Kimi Code all have active issues where MCP tools fail or are rejected due to provider-specific schema constraints or namespace handling.
2. **Agent lifecycle and sandboxing remain immature** — All four tools show defects in stopping sub-agents, spawning with correct models, enforcing plan-mode restrictions, or filtering disabled tools, indicating that multi-agent runtime controls are not yet robust.
3. **UI stability is fragile across platforms** — Windows (Codex), iOS (Claude Code), TUI (Kimi Code), and desktop app (OpenCode) all exhibit breakage after updates or under normal usage, pointing to quality-assurance gaps in cross-platform delivery.
4. **Authentication and billing infrastructure is a recurring source of user friction** — Multi-account, OAuth, payment update, and rate-limit perception issues are distributed across tools, suggesting foundational identity and monetization challenges.
5. **No clear cross-tool signal on token waste or billing caps** — While Claude Code and Codex have token-burn complaints, the evidence is not consistent across all four tools; it remains a tool-specific rather than ecosystem-wide observation.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-31

## Today's Update Brief

A moderate-activity day with 50 issues updated and 1 pull request closed. No new releases shipped in the past 24 hours. The issue tracker remains dominated by Cowork session reliability concerns, background-agent lifecycle bugs, and a long-running multi-account feature request that continues to attract heavy community engagement (148 comments, 530 upvotes).

---

## Releases

*No new releases in the past 24 hours.*

---

## Hot Issues

1. **[#36151 [FEATURE] Multi-account switching in Claude Mobile app without shared email](https://github.com/anthropics/claude-code/issues/36151)**
   - **148 comments | 👍 530 | Open**
   - The most-engaged issue on the tracker. Users want the ability to switch between multiple Claude accounts (e.g., personal and work) on mobile without using a shared email address. This has been open since March 2026 with sustained community pressure. The problem statement focuses on the mobile app's lack of account-switching compared to web workflows.

2. **[#82728 Scheduled one-shots: 6 of 6 failed — 3 never dispatched, 3 killed mid-tool-call and recorded as successful](https://github.com/anthropics/claude-code/issues/82728)**
   - **3 comments | 👍 0 | Open (filed 2026-07-30)**
   - A consolidated report covering six simultaneous failures on one machine. Three scheduled tasks were never dispatched but remained armed; three were killed mid-tool-call yet incorrectly recorded as successful. The mid-tool-call hang behavior is flagged as a known recurring issue. Duplicates #82729, #82730, #82731 were closed in favor of this master issue.

3. **[#77730 Background agent and task IDs stop resolving across a session-identity boundary](https://github.com/anthropics/claude-code/issues/77730)**
   - **7 comments | 👍 0 | Open (filed 2026-07-15)**
   - Background agent transcripts become unresumable after crossing a session-identity boundary, forcing full-context respawns and unnecessary token burn. Reporter is a Claude Max subscriber using Fable 5 model with kaleido custom subagents. Transcripts and outputs remain on disk but are unreachable through normal session commands.

4. **[#82104 TaskStop does not stop subagent children: 750k tokens billed after kill](https://github.com/anthropics/claude-code/issues/82104)**
   - **2 comments | 👍 0 | Open (filed 2026-07-28)**
   - Three compounding defects: `TaskStop` on a parent agent does not terminate child agents, children keep running and billing, and there is no live usage visibility or cap. The reporter documented 750,460 tokens consumed after the parent was killed. This is a significant billing-protection gap for users running multi-agent workflows.

5. **[#43719 Auto-update wiped my Cowork session disk — need my projects restored](https://github.com/anthropics/claude-code/issues/43719)**
   - **5 comments | 👍 2 | Open (filed 2026-04-05)**
   - Tagged `data-loss`, `regression`, `area:cowork`, `area:desktop`. An auto-update wiped the user's Cowork session disk, destroying project state. This issue has been open for nearly four months with limited progress, indicating a persistent data-durability concern for Cowork users.

6. **[#59854 Cowork — GitHub connector unusable: OAuth DCR unsupported, UI shows misleading state, Disconnect button dead](https://github.com/anthropics/claude-code/issues/59854)**
   - **5 comments | 👍 12 | Open (filed 2026-05-17)**
   - The Cowork GitHub connector is broken across multiple dimensions: OAuth Dynamic Client Registration is unsupported, the UI misleadingly shows a connected state, and the Disconnect button is non-functional. The 12 upvotes suggest this is affecting a meaningful number of Cowork users who rely on GitHub integration.

7. **[#71616 All newly-created Code sessions auto-archive on iOS and become inaccessible from mobile app](https://github.com/anthropics/claude-code/issues/71616)**
   - **4 comments | 👍 1 | Open (filed 2026-06-26)**
   - A platform-specific blocker for iOS users: every new Code session immediately auto-archives and cannot be accessed from the mobile app. This makes Claude Code effectively unusable for iOS-based development workflows.

8. **[#78834 Bundled ugrep allocates 4-17 GB to search a 64 KB file when pattern has trailing `.{N}` bound](https://github.com/anthropics/claude-code/issues/78834)**
   - **3 comments | 👍 0 | Open (filed 2026-07-18)**
   - A memory-exhaustion bug in the bundled ugrep engine on Linux/WSL2. Specific regex patterns with trailing bounded repetition cause memory allocation at ~230 MB/s for tens of seconds before responding. Two measured cases: one allocated 4 GB, another 17 GB, both for tiny 64 KB files. Tagged `perf:memory`.

9. **[#80973 Cannot update payment method — "connection to link account has been closed"](https://github.com/anthropics/claude-code/issues/80973)**
   - **2 comments | 👍 0 | Open (filed 2026-07-24)**
   - Billing infrastructure issue: users are unable to update payment methods. The support system (Fin) reports the account as Free tier while the actual plan is Max 5x, suggesting an account-state synchronization problem between billing and support systems.

10. **[#77549 AskUserQuestion breaks after web/async session resume — aborts instantly or requires 2-7× answers](https://github.com/anthropics/claude-code/issues/77549)**
    - **1 comment | 👍 1 | Open (filed 2026-07-14)**
    - After resuming a web/async session, `AskUserQuestion` tool calls exhibit two failure modes: immediate abort with "Tool permission stream closed before response received" or requiring the user to answer the same question 2-7 times before it registers. Tagged `area:permissions`, `area:claude-code-web`.

---

## Key PR Progress

Only one PR was updated in the last 24 hours:

- **[#82555 Claude/youtube instagram mcp yn2u6s](https://github.com/anthropics/claude-code/pull/82555)** — **Closed** without merge. Submitted by a first-time contributor with no description. The title suggests a YouTube/Instagram MCP integration attempt, but the lack of any summary or code explanation indicates this was likely a test or spam submission and was closed without review.

---

## Feature Request Clusters

*No new feature requests were filed in the last 24 hours beyond the clusters already represented by existing issues. The following patterns emerge from the updated issue set:*

- **Multi-account / identity management**: #36151 (148 comments, 530 👍) remains the dominant feature request. Users want account switching on mobile without shared emails, reflecting a broader need for identity flexibility across the Claude product surface.
- **In-memory / ephemeral storage for background tasks**: #82734 requests an option to keep background task outputs in memory rather than writing to disk, driven by sensitive-data concerns. This is a single request but aligns with broader security-conscious usage patterns.
- **Agent lifecycle controls**: #69391 (closed as stale) requested a `blocking` or `priority` field in agent frontmatter, mirroring the blocking-requirement behavior already available in skills. The closure suggests this may have been superseded or deprioritized.

---

## Developer Pain Points

1. **Cowork session durability**: Multiple issues (#43719 data-loss, #71616 iOS auto-archive, #59854 GitHub connector broken) point to fragility in Cowork session persistence across updates, platforms, and integrations. Users are losing work and project state through auto-updates and platform-specific archive behavior.

2. **Background agent reliability**: A cluster of issues (#82728 scheduled one-shots failing, #77730 transcripts becoming unresumable, #82104 subagent children not stopping on parent kill) indicates systemic problems with background task lifecycle management. Users are experiencing token waste, silent failures, and billing surprises.

3. **Billing and payment infrastructure**: #80973 (payment method update broken) and #82104 (750k tokens billed after kill, no spending cap) suggest gaps in billing controls and account management tooling. Users lack visibility into live token consumption and cannot reliably manage payment methods.

4. **Resource management**: #78834 (ugrep allocating 4-17 GB for tiny files) demonstrates a pathological memory behavior in bundled tooling that can destabilize developer machines, particularly on resource-constrained environments like WSL2.

5. **Cross-platform permission UX**: #79527 (`--agents` silently accepts invalid JSON unlike `--settings`/`--mcp-config`), #79575 (`/fork` blocked even with `--dangerously-skip-permissions`), and #77549 (`AskUserQuestion` broken after session resume) all reflect inconsistent permission and validation behavior across flags, platforms, and session types.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-07-31**

---

### 1. Today’s Update Brief
Today’s repository activity saw 50 issues updated and 50 pull requests processed. A new Rust CLI alpha release (0.147.0-alpha.2) was tagged, and a batch of automated merges delivered improvements ranging from enterprise plan support to streaming buffer optimizations. The community’s attention remains on Windows desktop stability, OAuth authentication failures, and MCP interoperability across providers.

---

### 2. Releases
- **rust-v0.147.0-alpha.2** — A new alpha release of the Codex CLI was published. No changelog is provided, but the bump suggests ongoing iteration on the Rust-based toolchain.
  Release: [0.147.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.2)

---

### 3. Hot Issues (Top 10 by community engagement)

| # | Issue | Impact & Reaction |
|---|-------|-------------------|
| **#20214** | **Codex App frequently freezes/stutters on Windows 11 Pro** despite sufficient system resources. Users report severe UI lag during normal operation. (83 comments, 77 👍) | High-impact usability regression on Windows; many users confirm the issue across multiple versions. |
| **#31573** | **OAuth authentication fails at issuer validation** with Codex CLI 0.143.0. (31 comments, 66 👍) | Blocks login for users relying on OAuth flows; critical for CLI-based workflows. |
| **#32683** | **Windows app crashes in `CrBrowserMain` when Browser Use opens a page** (access violation in `chrome.dll`). (29 comments, 8 👍) | Crashes when in-app browser is used, breaking web automation tasks. |
| **#26234** | **Flatten MCP namespace tools for non-OpenAI providers** (Ollama, LM Studio, OpenRouter). Proprietary namespace serialization prevents models from calling MCP tools. (27 comments, 40 👍) | Locks out many local/gateway setups; developers demand tool parity. |
| **#33685** | **Weekly limit drains at the same speed as the old 5-hour limit** even with conservative usage. (24 comments, 10 👍) | Users feel the new rate-limit model is not more generous in practice. |
| **#13200** | **`codex mcp login` fails for Slack official MCP** with “Dynamic client registration not supported”. (10 comments, 58 👍) | Enterprise users cannot connect to a widely used MCP server; long-standing block. |
| **#35481** | **Codex Diff shows “Oops, an error has occurred” in VS Code** (extension 26.721.41059). (6 comments, 31 👍) | Breaks code review inside the editor; high reaction count suggests widespread breakage. |
| **#23257** | **Desktop compaction repeatedly embeds full image base64** in compacted checkpoints, bloating context. (8 comments, 5 👍) | Wastes tokens and money; context management is broken for image-heavy sessions. |
| **#35097** | **`gpt-5.6-luna` is marked as MultiAgent V1, so V2 `spawn_agent` rejects it.** (6 comments, 13 👍) | Prevents use of the latest Luna model in multi-agent workflows; version mismatch. |
| **#27716** | **Closed side chats cannot be reopened**, making side-chat history effectively unrecoverable. (6 comments, 10 👍) | Loss of important context; users expect recoverable chat sessions. |

---

### 4. Key PR Progress (10 notable changes)

- **#31458** — *exec-server: route remote network policy decisions*
  Routes executor-local proxy policy decisions back to the core policy decider, preserving attribution for Guardian decisions.
  [PR #31458](https://github.com/openai/codex/pull/31458)

- **#31922** — *core: add tool-free thread mode*
  Opt-in `tool_free` feature for lightweight helper threads; prevents MCP startup and tool enumeration for sessions that don’t need tools (e.g., title generation).
  [PR #31922](https://github.com/openai/codex/pull/31922)

- **#31471** — *(1/4) Extract apps cache logic into ConnectorRuntimeManager*
  Refactors the Codex Apps tools cache behind a new `ConnectorRuntimeManager` to scope contexts by account/workspace and discard stale snapshots.
  [PR #31471](https://github.com/openai/codex/pull/31471)

- **#31591** — *Enable parallel tool calls for Codex Apps*
  Adds a feature flag to allow the host-owned `codex_apps` MCP server to make parallel tool calls (disabled by default).
  [PR #31591](https://github.com/openai/codex/pull/31591)

- **#31472** — *codex-mcp: serialize connector runtime refreshes*
  Introduces an async lock per connector runtime context to serialize `tools/list` refreshes and avoid redundant work.
  [PR #31472](https://github.com/openai/codex/pull/31472)

- **#36217** — *Run code mode exclusively through the standalone host*
  Moves the V8 runtime into a dedicated `codex-code-mode-runtime` crate, removing the embedded fallback and isolating code execution.
  [PR #36217](https://github.com/openai/codex/pull/36217)

- **#36228** — *Support Enterprise automation account plans*
  Recognizes `enterprise_cbp_automation` as an Enterprise workspace plan across auth, backend, and rate-limit APIs.
  [PR #36228](https

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-31

## Today’s Update Brief
The repository saw a new minor release (v0.31.0) delivering plugin-contributed custom agent discovery, alongside 29 issue updates and 47 pull requests in the past 24 hours. Activity concentrated on TUI scroll/redraw fixes, Anthropic/MCP tool schema compatibility, and several long-running session quality-of-life improvements.

## Releases
**@moonshot-ai/kimi-code@0.31.0** ([changeset](https://github.com/MoonshotAI/kimi-code/pull/2403))
- **Minor Change:** Added support for plugin-contributed custom agents, discovered automatically ([#2365](https://github.com/MoonshotAI/kimi-code/pull/2365)). Plugin authors can now surface custom agents that Kimi Code’s runtime discovers and makes available to users.

## Hot Issues
1. [#2212](https://github.com/MoonshotAI/kimi-code/issues/2212) **Scroll locks during AI output**
   Users cannot scroll the TUI while content streams; the view jumps to the top. Affects Linux TUI; 7 comments, 2 👍.

2. [#2298](https://github.com/MoonshotAI/kimi-code/issues/2298) **Third-party provider catalog fetch fails**
   Adding a provider from “known third party” throws an error when `https://models.dev/api.json` is unreachable (common in some regions). 3 comments.

3. [#2296](https://github.com/MoonshotAI/kimi-code/issues/2296) **Scroll position resets after tool permission**
   Approving a tool permission prompt forces the TUI scroll to the top, discarding reading position. 3 comments.

4. [#2328](https://github.com/MoonshotAI/kimi-code/issues/2328) **Anthropic provider rejects MCP tools with `oneOf`/`anyOf`/`allOf`**
   Tools using top-level JSON Schema combinators cause a 400 error from the Anthropic API, breaking entire sessions. 2 comments.

5. [#2325](https://github.com/MoonshotAI/kimi-code/issues/2325) **Continuous compaction loop on startup (openai_responses)**
   With self-hosted setup using `openai_responses`, Kimi 0.29.2 enters an infinite compaction loop, preventing normal use. 1 👍.

6. [#2367](https://github.com/MoonshotAI/kimi-code/issues/2367) **WebUI code block rendering broken**
   In v0.30.0 WebUI, code blocks display incorrectly (image attached). 2 comments.

7. [#2422](https://github.com/MoonshotAI/kimi-code/issues/2422) **File mention always shows “无匹配” (no match)**
   On the web new-session composer, `@` file mention returns no results regardless of input. 1 comment.

8. [#2420](https://github.com/MoonshotAI/kimi-code/issues/2420) **Agent tool timeout description mismatch**
   The v1 Agent tool description tells the model a 30-minute timeout, but the actual default is 2 hours. 1 comment.

9. [#2421](https://github.com/MoonshotAI/kimi-code/issues/2421) **`[tools].disabled` does not filter MCP tools**
   Disabling MCP tools via config has no effect; they are still sent to the model. 1 comment.

10. [#1977](https://github.com/MoonshotAI/kimi-code/issues/1977) **Goal mode burns tokens waiting for external conditions**
    In goal mode, the agent re-injects the full prompt every few seconds while waiting for external events, wasting tokens. 1 comment.

## Key PR Progress
1. [#2403](https://github.com/MoonshotAI/kimi-code/pull/2403) **Release packages (0.31.0)**
   Changeset release PR that published the minor version with plugin-contributed custom agents.

2. [#2338](https://github.com/MoonshotAI/kimi-code/pull/2338) **fix(anthropic): omit incompatible tool schemas**
   Detects and omits MCP tools with top-level `oneOf`/`anyOf`/`allOf` to avoid 400 errors from the Anthropic API. Fixes #2328.

3. [#2416](https://github.com/MoonshotAI/kimi-code/pull/2416) **fix(cli): fall back to built-in catalog when fetch fails**
   Uses the embedded catalog snapshot when `models.dev` is unreachable, resolving the third-party provider error. Fixes #2298.

4. [#2414](https://github.com/MoonshotAI/kimi-code/pull/2414) **fix(tui): preserve scrollback when closing dialogs**
   Removes the `ESC[3J` wipe that erased terminal scrollback, keeping reading history after permission prompts. Fixes #2296.

5. [#2428](https://github.com/MoonshotAI/kimi-code/pull/2428) **fix(agent-core): align Agent timeout description**
   Updates the model-facing tool description to the actual 2-hour default. Fixes #2420.

6. [#2423](https://github.com/MoonshotAI/kimi-code/pull/2423) **fix: filter disabled MCP tools during registration**
   Ensures `[tools].disabled` patterns are applied to MCP tools, preventing them from reaching the model. Fixes #2421. Also includes the timeout description fix.

7. [#2432](https://github.com/MoonshotAI/kimi-code/pull/2432) **feat(tui): MCP channel TUI render**
   Adds a TUI rendering path for MCP channel push notifications, making the v2 engine’s push mechanism visible in the terminal. Resolves #2431.

8. [#2366](https://github.com/MoonshotAI/kimi-code/pull/2366) **feat(agent-core-v2): Workspace domain and agent-profile registry**
   Introduces a Workspace tier to the scope tree, enabling shared catalogs, MCP connections, and tool policy across agents. Closed.

9. [#2407](https://github.com/MoonshotAI/kimi-code/pull/2407) **feat(agent-core-v2): built-in capabilities (kimi-cu, kimi-webbridge)**
   Adds a capability domain with readiness detection and REST routes, wired into the plugin marketplace for seamless installs.

10. [#2369](https://github.com/MoonshotAI/kimi-code/pull/2369) **fix(kimi-web

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026-07-31**

---

### 1. Today’s Update Brief
Release **v1.18.10** landed with automatic Modal model discovery and several desktop usability improvements. The repository saw **50 issues** and **50 PRs** updated in the past 24 hours, with high activity around provider overloads, post-upgrade breakage, and TUI/App quality-of-life fixes.

---

### 2. Releases
**v1.18.10** (latest)
- **Core:** Automatically discover available Modal models. ([@devennavani](https://github.com/devennavani))
- **Desktop:**
  - Prevent adding the same attachment more than once.
  - Always show the new session button.
  - Improved toast notifications (better stacking, dismissal, mobile layout).
  - Refined tab hover/active styling.

---

### 3. Hot Issues
*Top 10 noteworthy issues from the last 24 hours, sorted by impact and community reaction.*

1.  **#39653 — GPT-5.6 Sol server overloaded errors**
    Users hit repetitive “server overloaded” errors with the Sol model (Pi & Codex unaffected). 16 comments, 10 👍.
    [View issue](https://github.com/anomalyco/opencode/issues/39653)

2.  **#39288 — Plugin dependency error after upgrade to 1.18.8**
    `AutoScroller plugin depends on Scroller plugin` breaks the main screen immediately after updating. 6 comments, 1 👍.
    [View issue](https://github.com/anomalyco/opencode/issues/39288)

3.  **#38655 — Can’t switch between plan and build modes after update**
    The mode toggle is stuck; the AI always responds in build mode, preventing planning-only workflows. 5 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/38655)

4.  **#39491 — Plan mode can write and edit files via bash**
    A model (Claude Sonnet 4.6) ignored plan mode restrictions and used `cat > SKILL.md` to write files, defeating the sandbox. 4 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/39491)

5.  **#27837 — Web UI session list empty in web server mode**
    Left panel shows no sessions despite `/api/session` returning data correctly. 4 comments, 2 👍 (older issue, still open).
    [View issue](https://github.com/anomalyco/opencode/issues/27837)

6.  **#39655 — Web UI shows “No folders found” despite backend returning projects**
    The Open Project dialog and home page fail to display available projects, breaking onboarding. 4 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/39655)

7.  **#39527 — Extremely slow response times**
    Responses take up to an hour even for simple prompts like “hi, how are you”. Uninstalling/reinstalling didn’t help. 4 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/39527)

8.  **#39165 — SQLite NOT NULL constraint crash after /model switch**
    Changing the model mid-session corrupts message sequencing, causing a persistent `session_message.seq` crash. 2 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/39165)

9.  **#39207 — GitHub OAuth login fails with empty email parameter**
    “Continue with GitHub” results in SQL error because the email field is empty during account creation. 3 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/39207)

10. **#37566 — Corrupted executable on Windows (npm install -g)**
    The global binary wrapper is incompatible with Windows, and the internal binary crashes on startup. 2 comments.
    [View issue](https://github.com/anomalyco/opencode/issues/37566)

---

### 4. Key PR Progress
*10 notable pull requests that introduce fixes, features, or refactors.*

1.  **#39753 — TUI: inherit session directory for new sessions**
    `/new` now uses the

</details>