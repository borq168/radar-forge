# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 03:03 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-07-23

## Daily Cross-Tool Overview
All four tracked tools maintained significant activity on July 23, 2026. Claude Code shipped a stable release with background subagent and accessibility improvements, while OpenAI Codex rapidly iterated through four alpha releases and merged 20 pull requests spanning agent orchestration and plugin infrastructure. Kimi Code delivered a minor release adding ACP thinking‑effort selection and saw the highest PR activity (50 updates), largely addressing session reliability and model routing. OpenCode released no new version but progressed 20 PRs and closed numerous issues, focusing on provider compatibility and session management. The day’s discussions highlight a shared push toward multi‑agent architectures, better instruction customization, and urgent demand for usage transparency.

## Activity Comparison

| Tool         | Issues Updated | PRs (filed/merged/active) | Releases                                                |
|--------------|----------------|----------------------------|---------------------------------------------------------|
| Claude Code  | 50             | 9 filed                    | v2.1.218 (stable)                                       |
| OpenAI Codex | 50             | 20 merged                  | rust‑v0.146.0‑alpha.1 through alpha.4                   |
| Kimi Code    | 32             | 50 updated                 | 0.29.0 (thinking‑effort support for ACP clients)        |
| OpenCode     | 50             | 20 progressed (mixed)      | None (only a verification video for a PR)               |

*PR counts reflect the nature of each tool’s process: Claude Code’s are opened, OpenAI Codex’s are merged, Kimi Code’s are those that saw activity (opened, updated, or merged), and OpenCode’s are a mix of opened and merged.*

## Shared Feature Directions

- **Customizable instructions and prompt context**
  Claude Code (permission/rules transparency, focus‑mode confusion), Kimi Code (multiple `Agent.md` files, directory‑specific rules), OpenCode (custom system prompts, #7101).

- **Agent orchestration and subagent model routing**
  OpenAI Codex (multi‑agent v2, thread pinning for agent conversations), Kimi Code (dual‑model routing for subagents, #1996), OpenCode (plugin hook isolation and parallel session fixes, #28958).

- **UI/UX personalization**
  OpenAI Codex (customizable status line, #17827), Kimi Code (TUI title toggle, Chinese localization, #1941), OpenCode (TUI theme V2 loading, roll‑call command, #38433).

- **Usage and billing transparency**
  OpenAI Codex (weekly usage limit draining, #33685), Kimi Code (quota depleting faster, #2072, #872), Claude Code (model lock‑in and usage‑plan confusion, #79410, #80210).

- **ACP (Agent Communication Protocol) integration**
  Kimi Code (ACP thinking‑effort support, error‑handling fix for ACP clients, #2076, #1992), OpenCode (issue requesting ACP‑backed agents, #28991).

- **Session management and recovery**
  OpenCode (fork to new session, #25582; orphan session recovery, #38432), Kimi Code (session index recovery, #2074), OpenAI Codex (thread pinning, #34840).

## Differentiation Analysis

- **Claude Code** focuses on security‑first sandboxing, seamless integration with the Claude.ai ecosystem, and developer productivity enhancements such as background subagents and a plugin marketplace. Target users are individual developers and teams invested in Anthropic’s platform.

- **OpenAI Codex** emphasizes enterprise‑grade agentic workflows, deep VS Code integration, and robust infrastructure (Rust app server, SQLite, batch metadata APIs). Its multi‑agent v2, thread pinning, and plugin caching signal a focus on heavy, long‑running agent sessions in professional development environments.

- **Kimi Code** is tailored to the Chinese market and Moonshot AI’s model family, with strong demand for Chinese localization, cost‑efficient model routing (dual‑model subagents), and ACP client support. The community is particularly sensitive to quota consumption and config consistency.

- **OpenCode** stands out as a provider‑agnostic, open‑source alternative with high extensibility (plugins, ACP, theme system) and TUI‑first design. It addresses a wide array of model compatibility issues and encourages community contributions, making it attractive for power users who need to mix providers and customize extensively.

## Community Activity Notes

- **Claude Code** and **OpenAI Codex** tied for the highest number of issue updates (50 each), with Claude Code’s discussion driven by sandbox regressions and steering parity, and Codex’s by the auto‑resolve timeout and status‑line requests.
- **Kimi Code** had the most PR activity (50 updated), indicating a very active development day, though with fewer issues (32). The release of 0.29.0 and numerous fixes for ACP, session recovery, and proxy issues show rapid response to community pain points.
- **OpenCode** maintained a high PR count (20) and closed many issues, but released no new version. Its activity focused on provider‑specific fixes (Bedrock, Qwen, Kimi) and session/TUI improvements.
- Maintainer responsiveness was visible across all tools: Claude Code merged a user‑requested `/planwith` command and addressed auto‑compaction bugs; OpenAI Codex merged 20 PRs in a day; Kimi Code’s PRs directly resolved several open issues (#2076, #2074, #2081); OpenCode’s maintainers opened and reviewed PRs for model compatibility and session recovery.

## Evidence-Backed Observations

1. **Multi‑agent and subagent orchestration is a cross‑tool development priority.**
   OpenAI Codex’s multi‑agent v2 and thread pinning, Kimi Code’s dual‑model routing for subagents, and OpenCode’s fixes for plugin hook isolation in parallel sessions all point to a

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

### 1. Today’s Update Brief
Activity remains high with **50 issues updated** (top 30 shown) and **9 pull requests** filed in the last 24 hours. A new release, **v2.1.218**, ships one notable workflow change and an accessibility improvement. The community is actively discussing a long-standing desktop tool‑call bug, steering parity, and a wave of sandbox regression reports.

### 2. Releases
**v2.1.218** – [Release notes](https://github.com/anthropics/claude-code/releases/v2.1.218)
- `/code-review` now runs as a **background subagent**, so review work no longer clogs the conversation and properly targets stacked slash commands.
- Added screen‑reader announcements for deleted text (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).

### 3. Hot Issues
*Top 10 by comment volume, reflecting current developer attention.*

1. **[#80002] macOS: Claude Desktop never dispatches `tools/call` to the first‑party Filesystem extension** (57 comments, 25 👍)
   *Closed bug.* Tools/list succeeds but tools/call never fires, breaking filesystem operations. The thread contains extensive debugging logs and workarounds.
   **[Link](https://github.com/anthropics/claude-code/issues/80002)**

2. **[#13843] Share conversation context from Claude.ai to Claude Code** (25 comments, 99 👍)
   *Open enhancement.* Users want to transfer a planning conversation from the web app to a local coding session to avoid re‑explaining context.
   **[Link](https://github.com/anthropics/claude-code/issues/13843)**

3. **[#71726] Desktop app: inject queued messages mid‑task between tool calls (steering parity)** (9 comments, 16 👍)
   *Open enhancement.* The CLI/TUI supports steering during a run; the Desktop app queues messages until the turn finishes, creating a frustrating delay.
   **[Link](https://github.com/anthropics/claude-code/issues/71726)**

4. **[#77966] Claude account /login OAuth loop — state parameter dropped after redirect** (8 comments, 6 👍)
   *Open bug on Linux.* Users get stuck in an infinite login loop because the OAuth state is lost, preventing authentication.
   **[Link](https://github.com/anthropics/claude-code/issues/77966)**

5. **[#78933] Remote Control never connects: “Cannot read properties of undefined (reading 'session_url')”** (8 comments, 0 👍)
   *Open bug on Windows.* `/remote-control` fails both on connect and disconnect, rendering the feature unusable on Desktop.
   **[Link](https://github.com/anthropics/claude-code/issues/78933)**

6. **[#50894] Focus mode hides substantive assistant messages, not just tool output** (5 comments, closed)
   *Closed bug.* The “focus” mode intended to suppress tool logs also hides direct answers, causing confusion.
   **[Link](https://github.com/anthropics/claude-code/issues/50894)**

7. **[#80404] Event‑loop starvation causing ~200% CPU spin and input lag after hibernate/resume** (4 comments, new)
   *Open bug on Windows.* After waking from sleep, Claude Code spins two cores and eventually self‑terminates; likely the same libuv loop bug as a previous macOS report.
   **[Link](https://github.com/anthropics/claude-code/issues/80404)**

8. **[#80263] Plugin “cortex” published but never appears in marketplace; pending resubmission will create a duplicate** (3 comments)
   *Open bug.* A plugin shows as Published in the console but is invisible in the directory, leading to risk of a duplicate entry.
   **[Link](https://github.com/anthropics/claude-code/issues/80263)**

9. **[#79997] 2.1.216 sandbox regression: “bwrap: Can't mkdir /opt/.claude”** (3 comments, 2 👍)
   *Open bug.* Non‑root installs under root‑owned directories fail because the sandbox cannot create the mount directory, breaking every Bash tool call.
   **[Link](https://github.com/anthropics/claude-code/issues/79997)**

10. **[#68674] Desktop app Cloudflare Turnstile 403 loop on Windows 11** (3 comments)
    *Open bug.* The login screen triggers an endless Turnstile challenge, blocking all access.
    **[Link](https://github.com/anthropics/claude-code/issues/68674)**

### 4. Key PR Progress
*All 9 pull requests updated in the last 24 hours.*

1. **[#18217] feat(plugins): add `/planwith` command for inline plan mode prompts** (Closed)
   Adds a command that accepts a plan prompt inline, removing the two‑step toggle‑then‑type workflow.
   **[Link](https://github.com/anthropics/claude-code/pull/18217)**

2. **[#80353] docs(gcp): stop on checksum mismatch**
   Hardens the GCP gateway deployment script to fail cleanly when the downloaded binary fails checksum verification.
   **[Link](https://github.com/anthropics/claude-code/pull/80353)**

3. **[#80326] Add account profiles plugin**
   An experimental plugin that manages isolated `CLAUDE_CONFIG_DIR` environments for switching between personal, work, and client accounts.
   **[Link](https://github.com/anthropics/claude-code/pull/80326)**

4. **[#80294] docs: fix 1 broken link(s) via archive.org**
   Replaces a broken npm link in the README with an archived snapshot.
   **[Link](https://github.com/anthropics/claude-code/pull/80294)**

5. **[#80241] fix: Console scrolling top of history when Claude adds text**
   Addresses a UI bug where the console jumps to the top when new text is appended.
   **[Link](https://github.com/anthropics/claude-code/pull/80241)**

6. **[#80229] docs: fix 1 broken link(s) via archive.org**
   Another broken‑link fix using Wayback Machine snapshots.
   **[Link](https://github.com/anthropics/claude-code/pull/80229)**

7. **[#80196] fix: Auto‑compact never triggers despite “100% context used”**
   Attempts to resolve a bug where auto‑compaction fails even when the statusline reports full context usage.
   **[Link](https://github.com/anthropics/claude-code/pull/80196)**

8. **[#80195] fix: Instantly hitting usage limits with Max subscription**
   Addresses premature usage‑limit errors on the Max plan.
   **[Link](https://github.com/anthropics/claude-code/pull/80195)**

9. **[#80112] Make devcontainer firewall init resilient to DNS resolution failures**
   Prevents a transient DNS failure for one allowed domain from aborting the entire firewall setup.
   **[Link](https://github.com/anthropics/claude-code/pull/80112)**

### 5. Feature Request Clusters
*Recurring patterns from open issues, not a roadmap forecast.*

- **Steering & mid‑task control**
  Multiple requests seek to bring the Desktop app’s message injection to parity with the CLI (immediate steering between tool calls). #71726, #77724.

- **Agent lifecycle management**
  Users want to mark background agent sessions as “completed” or dismiss them without further interaction. #66202.

- **Cross‑surface context sharing**
  Strong desire to move a conversation from Claude.ai directly into a Claude Code session, preserving planning context. #13843.

- **Large repository support**
  A request for shallow/partial clone support in cloud environments to avoid cloning huge repos unnecessarily. #80414.

- **Permission & sandbox transparency**
  Requests for clearer permission controls (e.g., force‑disable synchronized output, #80411) and consistent sandbox glob handling (#80410).

### 6. Developer Pain Points
*Recurring frustrations observed in today’s issue tracker.*

- **Sandbox regressions** (since v2.1.216) make Bash tools unusable for non‑root installs and exhibit silent Edit/Bash inconsistencies (#79997, #80410).
- **Authentication loops** plague Linux and Windows Desktop users, with OAuth state loss and Turnstile 403s blocking login (#77966, #68674).
- **Usage‑plan confusion** causes model lock‑ins (Fable 5) and contradictory availability messages, especially for Max subscribers (#79410, #80382, #80409, #80210).
- **Desktop app stability** issues include blank‑screen/webview hangs after updates and Remote Control failures (#80403, #78933).
- **Tool availability bugs** such as missing Task tools despite being enabled, and first‑party extension dispatch failures, disrupt workflows (#80002, #80213).
- **Focus mode** inadvertently hides genuine assistant answers, reducing trust in the feature (#50894).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-07-23

### Today’s Update Brief
A quiet day for releases but a busy one for issue discussions and merges. The `rust-v0.146.0` alpha series hit four iterations in 24 hours, while the team merged 20 pull requests covering thread pinning, plugin metadata caching, Free-plan image generation restrictions, and a fix for user input loss during MCP startup. The issue tracker saw 50 updates, with the top 10 by engagement highlighting pain around auto-resolve behaviour, persistent SQLite logging, and a memory leak from orphaned MCP processes.

### Releases
- **rust-v0.146.0-alpha.1 through alpha.4** — four consecutive alpha releases tagged within the last 24 hours. No release notes beyond the version numbers.
  [alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.1) · [alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.2) · [alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3) · [alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.4)

### Hot Issues
1. **[#28969](https://github.com/openai/codex/issues/28969) – Add setting to disable the 60-second auto-resolve for questions**
   *Area: CLI, plan mode* | 53 comments, 151 👍
   Users report that the agent auto-resolves questions after 60 seconds, interrupting workflows. A configurable timeout is highly requested.

2. **[#17827](https://github.com/openai/codex/issues/17827) – Customizable status line**
   *Area: TUI, config* | 31 comments, 119 👍
   Request for a user-configurable status line (token usage, model, rate limits, Git branch) like Claude Code’s, driven by a shell script snippet.

3. **[#27458](https://github.com/openai/codex/issues/27458) – Timeout while waiting for user input**
   *Area: CLI, sandbox* | 12 comments, 43 👍
   Codex appears to timeout during interactive sessions in WSL2, causing premature termination of tasks that require user input.

4. **[#12491](https://github.com/openai/codex/issues/12491) – MCP child processes not reaped — 1300+ zombies, 37GB memory leak**
   *Area: app, MCP, plugins* | 27 comments, 5 👍
   The GUI wrapper leaves MCP processes as zombies after task completion, leaking memory and eventually degrading system performance.

5. **[#29532](https://github.com/openai/codex/issues/29532) – Persistent SQLite TRACE log churn on macOS**
   *Area: app-server, performance* | 44 comments, 8 👍
   After upgrading to rust‑v0.142.0, SQLite trace logs continue to flood `logs_2.sqlite`, despite partial fixes for related issues.

6. **[#21639](https://github.com/openai/codex/issues/21639) – Hooks no longer run after Codex Desktop update**
   *Area: app, hooks, regression* | 23 comments, 6 👍
   A regression where user-defined hooks stop executing after a desktop app update, impacting automation workflows.

7. **[#33685](https://github.com/openai/codex/issues/33685) – Weekly usage limit draining like the old 5‑hour limit**
   *Area: extension, rate-limits* | 19 comments, 9 👍
   Users observe that the weekly allowance depletes at the same rate as the previous 5‑hour cap, even with normal use of GPT‑5.5 High.

8. **[#25319](https://github.com/openai/codex/issues/25319) – Scope VS Code chats to the current workspace/project**
   *Area: extension, session* | 17 comments, 47 👍
   Feature request to keep chat history and thread context scoped per workspace, avoiding cross‑project contamination.

9. **[#32031](https://github.com/openai/codex/issues/32031) – Multi-agent v2 spawn_agent hides model overrides**
   *Area: CLI, subagent, config* | 5 comments, 14 👍
   A critical UX regression: the default schema for multi-agent v2 makes model selection undiscoverable, and the natural override call fails.

10. **[#29122](https://github.com/openai/codex/issues/29122) – Stable IDE extension ships a prerelease CLI with “Code mode” silently active**
    *Area: extension, model-behavior, tool-calls* | 4 comments, 0 👍
    The stable VS Code extension bundles a pre‑release CLI that enables an under‑development “Code mode,” breaking long‑running MCP calls and needlessly consuming tokens while waiting.

### Key PR Progress (all merged today)
1. **[#34852](https://github.com/openai/codex/pull/34852) – Wake sleeping threads for queued agent mail**
   Ensures idle threads resume when agent work arrives, even if the message would normally remain queued without triggering a turn.

2. **[#34851](https://github.com/openai/codex/pull/34851) – Use batch metadata for plugin app summaries**
   Loads plugin app metadata through the authenticated batch API, splitting requests into batches of 100 and falling back to cached data on failure.

3. **[#34850](https://github.com/openai/codex/pull/34850) – Disable image generation for Free-plan accounts**
   Skips registering the `image_generation` tool when the account plan is Free, while leaving other eligibility checks intact.

4. **[#34849](https://github.com/openai/codex/pull/34849) – Cache remote plugin catalogs by scope**
   Caches remote plugin catalogs on disk with a three‑hour TTL, scoped per account, and refreshes stale entries in the background.

5. **[#34847](https://github.com/openai/codex/pull/34847) – Use Guardian model limits for review sessions**
   Fixes context‑window and compaction overrides so Guardian review sessions use the correct model’s limits, not those of the parent model.

6. **[#34846](https://github.com/openai/codex/pull/34846) – Allow custom providers to opt into standalone web search**
   Adds `supports_standalone_web_search` provider setting, enabling the `web.run` tool for custom Responses providers that declare support.

7. **[#34845](https://github.com/openai/codex/pull/34845) – Track multi-agent mode in world state**
   Persists the effective multi‑agent mode in world state, so setup instructions survive history changes without re‑emission.

8. **[#34840](https://github.com/openai/codex/pull/34840) – Add persisted thread pinning to the app server**
   Introduces `isPinned` in thread metadata, a `thread/list` filter, and cursor‑based pagination, allowing users to pin and unpin threads.

9. **[#34839](https://github.com/openai/codex/pull/34839) – Preserve user input when MCP startup is interrupted**
   Prevents loss of user input when a turn is interrupted before MCP tools finish starting, by recording the input in the step snapshot.

10. **[#34819](https://github.com/openai/codex/pull/34819) – Enable git attribution across Codex entry points**
    Installs the git attribution extension in the app server, MCP server, and CLI prompt‑input, so workspace policy controls instructions for commit/PR attribution.

### Feature Request Clusters
- **TUI/App customization** – Customizable status line (#17827), inline file diffs display (#24513), and a toggle for the auto‑resolve timeout (#28969) are recurring asks for desktop and CLI UI parity.
- **Session organisation** – Users want workspace‑scoped chats (#25319), thread pinning (now delivered in #34840), and better control over

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

**Kimi Code Community Digest — 2026-07-23**

---

### 1. Today’s Update Brief
A minor release `0.29.0` shipped today with a single improvement: ACP clients can now select a thinking-effort level. The repository remains highly active: 32 issues were updated and 50 pull requests saw activity in the last 24 hours, covering fixes, new features, and internal refactors.

---

### 2. Releases
**@moonshot-ai/kimi-code@0.29.0**
- [#1992](https://github.com/MoonshotAI/kimi-code/pull/1992) – Support selecting a thinking effort level from ACP clients ([@RealKai42](https://github.com/RealKai42)).

---

### 3. Hot Issues
*Issues with the most discussion and impact, selected from the top 30 updated today.*

1. **Interactive sessions ignore `[[hooks]]` and `[[permission.rules]]`**
   [#2070](https://github.com/MoonshotAI/kimi-code/issues/2070) (5 💬) – Config rules work in headless mode (`-p`) but are entirely ignored in interactive sessions, creating a serious permission inconsistency. No workaround yet.

2. **MCP server crash due to `NO_PROXY` injection**
   [#1931](https://github.com/MoonshotAI/kimi-code/issues/1931) (2 💬) – stdio MCP children inherit `[::1]` in `NO_PROXY`, which causes Python `httpx`-based servers to crash on startup. Workaround: manually strip the entry.

3. **Skill silently dropped when description exceeds undocumented length limit**
   [#1972](https://github.com/MoonshotAI/kimi-code/issues/1972) (2 💬) – No warning, no error; skills just disappear from the model’s available list. Debugging is extremely difficult.

4. **Session permanently bricked after a single “high risk” rejection**
   [#2080](https://github.com/MoonshotAI/kimi-code/issues/2080) (1 💬) – After ~5 hours of normal work, a 400 rejection causes all subsequent turns to fail; the session cannot be recovered. Suspected false positive.

5. **Excessive input token consumption in auto mode (18.3M tokens in one session)**
   [#2031](https://github.com/MoonshotAI/kimi-code/issues/2031) (1 💬) – Using K3 in auto mode resulted in enormous token usage, raising billing concerns. Users request better visibility into why tokens are consumed.

6. **Membership quota depletes much faster after recent release**
   [#2072](https://github.com/MoonshotAI/kimi-code/issues/2072) (0 💬) – Multiple users report that weekly quota burns through noticeably faster with 0.29.0 for both K3 and K2.7 models.

7. **Confusing permission descriptions, TUI and web UI contradict each other**
   [#1866](https://github.com/MoonshotAI/kimi-code/issues/1866) (1 💬, 👍1) – The wording of `/auto` and `/yolo` permissions is inconsistent across the TUI and web, leading to user confusion about what is actually allowed.

8. **Chinese (i18n) localization for the TUI**
   [#1941](https://github.com/MoonshotAI/kimi-code/issues/1941) (1 💬, 👍2) – Request for Simplified Chinese translations of all TUI text, slash commands, and settings. Currently everything is English-only.

9. **Memory management: multiple rules files and directory-specific rules**
   [#2084](https://github.com/MoonshotAI/kimi-code/issues/2084) (0 💬) – Inspired by Claude Code’s rules system, this asks for support of multiple `Agent.md` files and per-directory context rules to avoid a single monolithic file.

10. **ACP adapter swallows non-auth failures as `end_turn`**
    [#1813](https://github.com/MoonshotAI/kimi-code/issues/1813) (1 💬) – Quota 403s and other provider errors are reported as a successful empty turn to ACP clients, breaking agentic workflows.

---

### 4. Key PR Progress
*Notable pull requests that address community pain points or add new capabilities.*

1. **feat(agent-core-v2): generated config and wire-protocol manifests**
   [#2086](https://github.com/MoonshotAI/kimi-code/pull/2086) – Adds a single-view listing of all config sections, scopes, defaults, and wire-protocol definitions for the v2 engine, making it easier to survey the system.

2. **feat(tui): add `/titleon` and `/titleoff` to toggle session title in footer**
   [#2019](https://github.com/MoonshotAI/kimi-code/pull/2019) – Lets users see the session title while working, helping distinguish forked sessions.

3. **fix(provider): ensure OpenAI tool schemas use array `required`**
   [#2085](https://github.com/MoonshotAI/kimi-code/pull/2085) – Fixes compatibility with Moonshot-flavored JSON Schema when using `providers.*.type = "openai"`.

4. **fix(mcp): keep stdio child no-proxy entries runtime-safe**
   [#2081](https://github.com/MoonshotAI/kimi-code/pull/2081) – Resolves #1931 by sanitizing `[::1]` from `NO_PROXY` without breaking Node’s IPv6 loopback behavior.

5. **fix(acp): surface failed turns to clients**
   [#2076](https://github.com/MoonshotAI/kimi-code/pull/2076) – Fixes #1813 and #1865; non-auth failures (quota, upstream errors) will now properly report as failures instead of `end_turn`.

6. **fix(kap-server): cache successful password verification**
   [#2077](https://github.com/MoonshotAI/kimi-code/pull/2077) – Avoids repeated bcrypt on every API request when using password auth, drastically improving speed on low-power hosts.

7. **fix(session): recover concatenated session index records**
   [#2074](https://github.com/MoonshotAI/kimi-code/pull/2074) – Fixes #1925; sessions that lost their newline separator in `session_index.jsonl` can now be recovered instead of failing with `session.not_found`.

8. **feat(agent-core): dual-model-routing for subagents**
   [#1996](https://github.com/MoonshotAI/kimi-code/pull/1996) – Allows the main agent to use a top-tier reasoning model while subagents run on cheaper/faster models, addressing #568.

9. **feat(config): add `disabled_skills` denylist**
   [#1983](https://github.com/MoonshotAI/kimi-code/pull/1983) – Allows users to disable specific skills from shared directories without deleting them from disk.

10. **fix(web): settle subagent entries stuck at “running” after interruption**
    [#1969](https://github.com/MoonshotAI/kimi-code/pull/1969) – Fixes #1963; subagent rows in the web UI will no longer remain in a running state after disconnect or sleep.

---

### 5. Feature Request Clusters
*Themes that appear across multiple issues today, without predicting roadmap commitments.*

- **Internationalization / Chinese localization**
  [#1941](https://github.com/MoonshotAI/kimi-code/issues/1941) – TUI Chinese translation; also mentioned in plugin suggestions [#2059](https://github.com/MoonshotAI/kimi-code/issues/2059) (no Chinese settings).

- **Memory & context management**
  [#2084](https://github.com/MoonshotAI/kimi-code/issues/2084) – Multiple rules files, directory-specific rules.
  [#2075](https://github.com/MoonshotAI/kimi-code/issues/2075) – General memory provider mechanism for cross-session integration.

- **Quota / usage transparency**
  [#872](https://github.com/MoonshotAI/kimi-code/issues/872) – Display 5-hour and weekly quota alongside context usage.
  [#2072](https://github.com/MoonshotAI/kimi-code/issues/2072) – Reports of faster quota depletion.

- **Subagent model selection & workflow control**
  [#2078](https://github.com/MoonshotAI/kimi-code/issues/2078) – Architect/developer model split and LLM quorum.
  [#2067](https://github.com/MoonshotAI/kimi-code/issues/2067) – Dynamic workflows like Claude Code’s “ultracode” mode.

- **Link interaction & UI polish**
  [#2051](https://github.com/MoonshotAI/kimi-code/issues/2051) – Cmd/Ctrl+click to open links in terminal.
  [#2059](https://github.com/MoonshotAI/kimi-code/issues/2059) – VS Code plugin improvements: Chinese, “always allow” mode, plan mode UX.

- **Plugin ecosystem**
  [#2063](https://github.com/MoonshotAI/kimi-code/issues/2063) – Support installing plugins from GitLab.
  [#2053](https://github.com/MoonshotAI/kimi-code/issues/2053) – Add Eden AI as a known provider.

---

### 6. Developer Pain Points
*Recurring frustrations and high-frequency requests visible in today’s issue tracker.*

- **Config inconsistency between interactive / headless and TUI / web**
  [#2070](https://github.com/MoonshotAI/kimi-code/issues/2070) (hooks & permissions ignored), [#1866](https://github.com/MoonshotAI/kimi-code/issues/1866) (permission descriptions contradict). Users struggle to trust the permission system.

- **Silent failures without diagnostics**
  [#1972](https://github.com/MoonshotAI/kimi-code/issues/1972) (skill dropped), [#2080](https://github.com/MoonshotAI/kimi-code/issues/2080) (session bricked), [#1813](https://github.com/MoonshotAI/kimi-code/issues/1813) (ACP errors swallowed). Lack of warnings makes debugging time-consuming.

- **Token and quota overconsumption**
  [#2031](https://github.com/MoonshotAI/kimi-code/issues/2031) (18.3M input tokens), [#2047](https://github.com/MoonshotAI/kimi-code/issues/2047) (stuttering words), [#2072](https://github.com/MoonshotAI/kimi-code/issues/2072) (quota depleting faster). Users need better tools to understand and control costs.

- **Proxy and MCP connectivity issues**
  [#1931](https://github

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-07-23

### Today’s Update Brief
The repository saw 50 issues updated (many closed) and 20 pull requests progressed, with several merges and new proposals. No new version was released; the only release artifact was a PR verification video for [#38252](https://github.com/anomalyco/opencode/pull/38252). Activity clustered around session reliability, model compatibility, and prompt-caching fixes.

---

### Releases
- **pr-38252-videos**: A set of before/after verification recordings for PR #38252. No feature or patch release was published today.

---

### Hot Issues
*10 noteworthy issues from the last 24 hours, representing user pain points and feature discussions.*

1. **#7101 — Allow custom system prompts in global, project or custom directories**
   [CLOSED] · 35 comments · 👍 123
   Users wanted to override or extend the default system prompt per-project or globally. The high engagement and vote count show strong community demand for prompt customisation.
   🔗 https://github.com/anomalyco/opencode/issues/7101

2. **#25582 — Add “Fork to new session” from message timeline in OpenCode Desktop**
   [CLOSED] · 9 comments · 👍 5
   Requested parity with the fork action already available in the TUI, allowing users to branch a conversation from a specific message in the desktop app.
   🔗 https://github.com/anomalyco/opencode/issues/25582

3. **#21911 — AI edits strip all generics in TypeScript**
   [CLOSED] · 8 comments · 👍 0
   After removing `oh-my-opencode`, the edit tool started removing generic type parameters from TS files. The issue was attributed to the tool’s behaviour, not a specific model.
   🔗 https://github.com/anomalyco/opencode/issues/21911

4. **#16560 — Qwen3.5-122b-a10b via Nvidia: “System message must be at the beginning”**
   [CLOSED] · 6 comments · 👍 2
   A recurring error when using Qwen models through the Nvidia provider. Multiple similar reports (#20785, #20813) indicate a systemic message ordering problem with Qwen-compatible APIs.
   🔗 https://github.com/anomalyco/opencode/issues/16560

5. **#28961 — Model does not actively update the todowrite list during task execution**
   [CLOSED] · 6 comments · 👍 2
   The agent rarely calls `todowrite` and often fails to mark items as completed, leaving the todo list inaccurate. This undermines progress tracking in long sessions.
   🔗 https://github.com/anomalyco/opencode/issues/28961

6. **#18890 — Sessions from different non-git directories are mixed when using `--continue`**
   [CLOSED] · 4 comments · 👍 0
   All non-git directories share the same project ID, causing `--continue` to resume the wrong session. This broke workflows for users working outside of git repos.
   🔗 https://github.com/anomalyco/opencode/issues/18890

7. **#25490 — Desktop memory grows to 3–4GB with multiple workspaces/session tabs on Windows**
   [CLOSED] · 4 comments · 👍 0
   Memory usage inflated after recent desktop updates, leading to crashes in Tauri/Solid. Impacted users with many tabs or workspaces.
   🔗 https://github.com/anomalyco/opencode/issues/25490

8. **#26662 — Internal server error: unhashable type: ‘dict’ with Kimi K2.6 via Nvidia NIM**
   [CLOSED] · 4 comments · 👍 0
   The model returned a `reasoning_content` field as a dict in streaming deltas, which the parser could not handle, causing indefinite retries.
   🔗 https://github.com/anomalyco/opencode/issues/26662

9. **#28958 — Plugin hook rejection aborts unrelated parallel sessions**
   [CLOSED] · 3 comments · 👍 2
   An async rejection in a plugin hook was treated as an `onInterrupt`, cascading a session abort to sibling sessions in the same fiber tree. This broke parallel subagent setups.
   🔗 https://github.com/anomalyco/opencode/issues/28958

10. **#28984 — Renderer process crashes (exitCode 5) when connecting to a remote server**
    [CLOSED] · 3 comments · 👍 0
    The desktop app’s renderer hung and was killed by the OS when connecting to a remote server, with an infinite recursion in `constructMessageRows`.
    🔗 https://github.com/anomalyco/opencode/issues/28984

---

### Key PR Progress
*10 notable pull requests that landed or opened today, showcasing fixes, features, and refactors.*

1. **#38427 — fix(ai): normalize Bedrock cache usage**
   [CLOSED] · @opencode-agent[bot]
   Aligns Bedrock token accounting with AWS prompt-caching semantics, deriving correct input usage from cache reads/writes.
   🔗 https://github.com/anomalyco/opencode/pull/38427

2. **#38424 — fix(provider): select prompt cache keys by SDK**
   [OPEN] · @rekram1-node
   Routes cache keys based on the underlying AI SDK package (e.g., `promptCacheKey` vs `prompt_cache_key`) rather than provider ID, avoiding misconfiguration for DeepInfra, Cerebras, and generic compat endpoints.
   🔗 https://github.com/anomalyco/opencode/pull/38424

3. **#38433 — feat(opencode): add roll-call command**
   [OPEN] · @cbrunnkvist
   Introduces a `roll-call` command to test connectivity and latency for multiple text models, useful for validating provider setup.
   🔗 https://github.com/anomalyco/opencode/pull/38433

4. **#38432 — fix(session): recover orphan assistant scaffolds**
   [OPEN] · @iandraves
   Handles assistant scaffolds that were persisted but left orphaned by interruptions or setup failures, preventing stuck sessions.
   🔗 https://github.com/anomalyco/opencode/pull/38432

5. **#38401 — fix(core): load dynamic models for generation**
   [CLOSED] · @kitlangton
   Enables `/api/generate` to use models backed by dynamically loaded AI SDK packages, fixing failures for models like Gemini that previously errored with “Unsupported package”.
   🔗 https://github.com/anomalyco/opencode/pull/38401

6. **#38430 — refactor(tui): load native V2 themes**
   [OPEN] · @jlongster
   Theme registry now retains raw V1/V2 documents and decodes V2 themes on demand, improving theme system robustness and caching.
   🔗 https://github.com/anomalyco/opencode/pull/38430

7. **#38428 — fix(core): skip ahead by counting newlines when reading at a high offset**
   [OPEN] · @weiconghe
   Addresses slow reading of large files at high line offsets by using newline counting instead of scanning the entire file from the start.
   🔗 https://github.com/anomalyco/opencode/pull/38428

8. **#38423 — feat(ai): preserve raw finish reasons**
   [OPEN] · @rekram1-node
   Exposes both normalized and raw finish reasons on step-finish events, making underlying provider stop reasons (e.g., content_filter) available for tooling.
   🔗 https://github.com/anomalyco/opencode/pull/38423

9. **#38420 — feat(opencode): add --no-project-instructions switch and OPENCODE_DISABLE_PROJECT_INSTRUCTIONS**
   [OPEN] · @patrickpassosb
   Provides a CLI flag and environment variable to disable project-level instructions, intended for automated review environments that treat repo instructions as untrusted input.
   🔗 https://github.com/anomalyco/opencode/pull/38420

10. **#38414 — fix(core): migrate named agent colors**
    [CLOSED] · @jlongster
    Preserves legacy named agent colors when migrating to V1 config schema, preventing colour loss after upgrade.
    🔗 https://github.com/anomalyco/opencode/pull/38414

---

### Feature Request Clusters
Recurring themes from today’s issues that may shape future development:

- **Prompt & Instruction Customisation**
  #7101 (system prompts), #38420 (CLI flag to disable project instructions) indicate a desire for more granular control over the prompt context.

- **Session Management**
  #25582 (fork to new session), #29002 (auto-rename sessions after N messages), #29060 (historical session list) all seek improvements in how sessions are created, titled, and navigated.

- **Tooling & Slash Commands**
  #29017 (a built-in `cp` tool), #29030 (new `/effort` and `/goal` commands), #38433 (roll-call) reflect a push for more native utility commands and agent interaction patterns.

- **Agent & Plugin Interoperability**
  #28991 (support ACP-backed agents as a backend), #22831 (expose message bodies to plugin hooks) aim to extend OpenCode’s extensibility and integration with other agent frameworks.

- **Syntax Highlighting & Language Support**
  #28965 (F# WASM for syntax highlighting) fills a gap in supported languages.

---

### Developer Pain Points
High-frequency frustrations and recurring bugs that surfaced today:

- **Model Compatibility & Message Ordering**
  Multiple Qwen models (#16560, #20785, #20813) fail with “system message must be at the beginning”. Kimi K2.6 (#26662) causes parsing errors. These issues disrupt workflows with non-OpenAI providers.

- **Edit Tool Regressions**
  The edit tool strips generics in TypeScript (#21911) and sometimes garbles text due to line-number prefix contamination (#18031). This undermines trust in automated code changes.

- **Session & Workspace State Corruption**
  Non-git sessions are mixed up (#18890), workspace creation can leave orphaned DB records (#29057), and session list commands fail to show historical sessions (#29060). Data integrity remains a concern.

- **Desktop Performance & Stability**
  High memory usage on Windows (#25490), app lag (#29024), and renderer crashes when connecting to remote servers (#28984) affect the desktop experience, especially for power users with multiple workspaces.

- **Plugin Isolation**
  A plugin hook rejection aborts unrelated parallel sessions (#28958), indicating that error boundaries in the plugin execution model need improvement.

- **UI Quirks**
  The input field no longer supports Ctrl+A/Select All properly (#25637), and Home/End keys stop working when the side panel is open (#29053). These small but persistent issues degrade the editing experience.

---

*End of digest. All items are based on data publicly available on the OpenCode repository as of 2026-07-23.*

</details>