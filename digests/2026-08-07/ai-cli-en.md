# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:10 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-07

## Daily Cross-Tool Overview

Today's activity across the four tracked AI CLI tools shows moderate to high engagement, with 150+ issues updated across all tools and 95+ PRs in motion. OpenAI Codex shipped a minor release (rust‑v0.147.0) with portable Agent Plugins and conversation sectioning, while Kimi Code released v0.34.0 adding cache-expiry reminders for long-idle sessions. The dominant cross-cutting concern is session reliability: Claude Code, Codex, and Kimi Code all have active bugs around session limits, compaction, or state corruption. OpenCode is the outlier, with its community overwhelmingly focused on a persistent upstream provider blocking issue that has gone unresolved for over two weeks.

## Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release in 24h |
|------|---------------------|-------------------|----------------|
| Claude Code | 50 | 3 | None |
| OpenAI Codex | 50 | 32 | rust‑v0.147.0 |
| Kimi Code | ~15–20 (estimated) | ~10 | v0.34.0 |
| OpenCode | 50 | 50 | None |

**Notes:** Claude Code and Codex both report exactly 50 issues updated. OpenCode has the highest PR volume (50), while Codex leads in combined PR+release activity. Kimi Code's counts are estimated from the digest's "high volume" description and listed items; its release is the smallest in scope (minor cache-expiry reminder).

## Shared Feature Directions

Several requirements appear across multiple tool communities today:

1. **Session context and cost transparency** – Claude Code (#54750, false 100% session limit), Codex (#35463, quota draining by subagents), and OpenCode (#6152, 129 👍 for session context breakdown) all have users asking for better visibility into usage, limits, and context window utilization. Kimi Code's compaction token counting fix (#2699) addresses a related accuracy issue.

2. **Permission system refinement** – Claude Code (#6527, ask list ignored when Bash allowed; #76718, compound-command prompting) and OpenCode (#40945, permission pattern matching bug) both have active bugs around permission controls being either too permissive or too noisy. This is a power-user concern for automation and multi-session workflows.

3. **Windows-specific stability** – Claude Code (Cowork service, desktop crashes, ECONNRESET), Codex (zombie processes #33776, MCP memory leaks #33531), and Kimi Code (WSL clipboard paste #1962) all report Windows platform issues. OpenCode's upstream block affects all platforms but Windows reports are more specific.

4. **TUI/UX improvements** – Codex (#21653, multi-line status line), Kimi Code (#2712, fixed input box; #2705, timestamp layout), and OpenCode (#1168, clickable links) all have requests for better terminal user interface interaction patterns.

5. **MCP tooling and lifecycle** – Codex (#20883, project-scoped MCP pool; #37273, handler reuse) and Kimi Code (#2661, schema validation with `anyOf`/`type`) both have active work on MCP server management and schema compatibility. Claude Code's plugin development PRs (#84427, #84381) touch adjacent validation concerns.

## Differentiation Analysis

**Claude Code** continues to invest in plugin development tooling (three new PRs on validation scripts) and permission system granularity. Its community is vocal about the `ask` list being overridden by broad `Bash` allowance — a design choice that prioritizes convenience over control. The tool's session limit behavior (#54750) suggests a server-side synchronization model that differs from local-only accounting in other tools.

**OpenAI Codex** is the most active in infrastructure hardening this week: 10 PRs span sandbox, MCP lifecycle, OAuth recovery, and streaming reliability. The release of portable Agent Plugins signals a move toward composable, shareable agent capabilities. Codex's community reports the most severe Windows process leaks (287+ orphaned processes per session) and the subtlest state bugs (compaction promoting partial output #35355).

**Kimi Code** stands out for session reliability problems at scale: high-context degradation (~500K tokens), ESC-induced wedging, and auto-compaction abandoning in-flight work. The tool's community is smaller but reports critical blocking bugs that directly impact long-running agentic workflows. The Web UI is treated as a second-class citizen (source not in main repo), limiting community contribution.

**OpenCode** is dominated by a single infrastructure issue: the "Request blocked by upstream provider" error affecting both Go and Zen subscriptions for over two weeks with no official fix. This overshadows otherwise active development work (50 PRs, including TUI prompt management, tool output bounding, and session lifecycle fixes). The tool's subscription model creates a different support burden than the API-key-based models of Claude Code, Codex, and Kimi Code.

## Community Activity Notes

- **Highest PR activity:** OpenCode (50 PRs) and Codex (32 PRs) lead, with Claude Code notably low (3 PRs) despite 50 issues updated.
- **Most active maintainer response:** Codex has the most merged PRs and infrastructure fixes (sandbox, MCP, OAuth). Kimi Code has 5+ open PRs awaiting merge. OpenCode has active PRs but no resolution on the top blocker.
- **Most controversial issue:** OpenCode's upstream provider block (#38257, #38218, #38195, #39827 — 4+ issues, 100+ combined comments, 45+ 👍). No official response from maintainers.
- **Most upvoted feature request:** OpenCode #6152 (session context breakdown, 129 👍) and #1168 (clickable links, 119 👍) are the highest across all tools today.
- **Release activity:** Codex and Kimi Code shipped releases; Claude Code and OpenCode did not.

## Evidence-Backed Observations

1. **Session reliability is a cross-tool pain point.** Claude Code (false 100% limit #54750, session rename corruption #73638), Codex (compaction promoting partial output #35355, tool handler loss #28080), and Kimi Code (high-context degradation #2622, ESC wedging #2691, auto-compaction abort #2680) all have active bugs that make long-running agentic sessions unreliable. This is the strongest common theme across tools today.

2. **Windows platform quality lags behind macOS/Linux.** Claude Code (desktop crashes, Cowork service, ECONNRESET), Codex (zombie processes #33776, MCP memory leaks #33531), and Kimi Code (WSL clipboard issues #1962) all report platform-specific bugs. Codex's Windows issues are the most severe (287+ orphaned processes per session). No tool today has a Windows-focused release or fix.

3. **Permission and access control systems are undifferentiated and buggy.** Claude Code's `ask` list is silently overridden (#6527), compound commands trigger excessive prompts (#76718), and OpenCode's permission patterns fail on absolute paths (#40945). None of the tools appear to have a well-documented, reliable permission model for power users running parallel or automated sessions.

4. **MCP/plugin infrastructure is being actively developed but not yet stable.** Codex is investing in MCP handler reuse (#37273), process pooling (#20883), and OAuth recovery (#37337). Kimi Code has schema validation fixes (#2662, #2661). Claude Code is improving plugin validation scripts (#84427, #84381). The activity suggests the ecosystem is converging on MCP as a standard, but compatibility issues (schema validation, lifecycle management) remain common.

5. **OpenCode's upstream provider block is an outlier event.** No other tool reports a similar infrastructure-level failure. The lack of official response for 2+ weeks, combined with subscription activation failures (#40234), suggests either a systemic backend issue or a support capacity problem. This is the single most disruptive issue across all tools today, affecting both paid and free tiers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-07

## Today’s Update Brief

No new releases were published in the last 24 hours. Activity on the issue tracker was moderate, with 50 items updated (including a batch of stale documentation issues closed by the bot). Three new pull requests were opened, all targeting plugin development tooling. Community attention remains focused on permission system friction, Windows desktop stability, and surprising session limit behavior.

## Releases

*None in the last 24 hours.*

## Hot Issues

Ten noteworthy issues from the last day, ordered by community engagement.

1. **[#6527 – [BUG] ask list is ignored when "Bash" is in allow list](https://github.com/anthropics/claude-code/issues/6527)**
   Platform: Linux. When `Bash` is allowed, the `ask` list is completely ignored — every command that should be gated by `ask` is silently allowed. 23 comments, 19 👍. This breaks granular permission control for users who want to allow bash in general but ask for specific commands.

2. **[#57371 – [Feature] Provide a way to disable the bundled Cowork background service on Windows](https://github.com/anthropics/claude-code/issues/57371)**
   42 👍, 18 comments. Users who don’t use Cowork want to disable `CoworkVMService` to reduce resource usage and avoid conflicts with other software. No official option currently exists.

3. **[#54750 – [BUG] Claude Code shows 100% session limit despite low visible local usage](https://github.com/anthropics/claude-code/issues/54750)**
   macOS. The session limit bar claims exhaustion, blocking further usage, even when local usage meters show minimal consumption. 16 comments, 9 👍. Likely a synchronization issue with the server-side counter.

4. **[#76248 – [BUG] Cloud/Cowork sessions: git proxy now blocks all pushes](https://github.com/anthropics/claude-code/issues/76248)**
   A mid-session change broke PAT-based git pushes to repositories not in the session’s authorized set. 14 comments, 5 👍. Users report that providing their own fine-grained PAT no longer works, breaking existing workflows.

5. **[#79584 – [BUG] Assistant text emitted before a tool call is intermittently never rendered](https://github.com/anthropics/claude-code/issues/79584)**
   Windows 11. When the assistant sends text followed by a tool call (e.g., `AskUserQuestion`), the text sometimes disappears. 9 comments, 7 👍. Critical for plugin-driven workflows that rely on explanatory text before prompts.

6. **[#73638 – [BUG] Session rename mid-server-tool-call injects a turn that permanently corrupts the transcript](https://github.com/anthropics/claude-code/issues/73638)**
   Renaming a session while a `server_tool_use` is in flight inserts a synthetic user turn into the transcript, causing a 400 error on every subsequent prompt. 9 comments. No workaround besides restoring a backup.

7. **[#26581 – [Feature] System notifications when Claude needs attention or completes tasks](https://github.com/anthropics/claude-code/issues/26581)**
   Request for OS-level notifications (VSCode, terminal bell) when Claude finishes a task or needs user input. 32 👍, 8 comments. Users want to multitask without constantly checking the terminal.

8. **[#78775 – [Regression] Desktop app: session time-range filter only appears when Group by is set to State](https://github.com/anthropics/claude-code/issues/78775)**
   Windows/macOS. The time-range filter is hidden unless the user changes the grouping to “State”. 23 👍, 7 comments. Annoying regression that reduces discoverability.

9. **[#76718 – [BUG] Compound-command permission prompting makes multi-session orchestration unusable](https://github.com/anthropics/claude-code/issues/76718)**
   Windows. Bash permission prompts fire on every segment of a compound command, even when individual commands are allowlisted. 7 comments, 700+ approvals over two days for one user. Makes parallel orchestration workflows untenable.

10. **[#84194 – [BUG] ECONNRESET on streaming API calls with bundled Bun HTTP client](https://github.com/anthropics/claude-code/issues/84194)**
    Windows. The built-in HTTP client fails on streaming connections, while Node.js/curl succeed. 5 comments. Survives reinstall, suggesting a deeper networking issue.

## Key PR Progress

Only three PRs were updated in the last 24 hours, all opened on 2026-08-06.

- **[#84600 – Enable frontend-design plugin at project scope](https://github.com/anthropics/claude-code/pull/84600)**
  Registers the official `frontend-design` skill from the marketplace via `.claude/settings.json` so it loads automatically for anyone using Claude Code in this repo. Includes a link to the Claude Code session that generated the change.

- **[#84427 – fix(plugin-dev): prevent validate-agent.sh exiting on first warning](https://github.com/anthropics/claude-code/pull/84427)**
  Follow-up to #76985. The validator script used `((error_count++))` which returns non-zero exit code under `set -e`, causing the script to abort after the first warning. Now uses a safer pattern to continue validation.

- **[#84381 – fix(plugin-dev): handle wrapped hook schemas and optional matchers in validate-hook-schema.sh](https://github.com/anthropics/claude-code/pull/84381)**
  Improves the hook schema validator to correctly detect hook handlers defined under a top-level `"hooks"` wrapper, and to handle optional matchers. Ensures accurate validation of `hooks.json` configurations.

## Feature Request Clusters

Several recurring themes emerged from the issue tracker, though no single theme dominates the volume.

- **Agent state notification** – Multiple requests for better awareness of Claude’s status: system-level notifications (#26581), terminal tab title updates (#71369), and proactive context compaction (#33026, closed). Users want to multitask effectively without polling the terminal.

- **Permission system refinements** – The `ask` list being ignored when `Bash` is allowed (#6527) and the excessive compound-command prompting (#76718) both point to a desire for more predictable and less noisy permission controls, especially for power users running parallel sessions.

- **Platform-specific quality** – Windows users continue to report desktop stability issues (Cowork service, crashes, MSIX self-bricking) and ask for better control over bundled services (#57371, #81664, #81123). macOS users request recovery of the `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` functionality (#72173).

- **Session and cost transparency** – The false 100% session limit (#54750) and the lack of clear documentation on prompt caching and model switching costs (#48087, #48090, closed) indicate users want more reliable usage meters and better documentation of cost implications.

## Developer Pain Points

The following frustrations recurred across multiple reports:

- **Permission system is too chatty** – Compound commands trigger individual prompts even when the constituent commands are allowed. The `ask` list is silently overridden by global `Bash` allowance. Both issues make automation and multi-session orchestration painful.

- **Session limits are unreliable** – The 100% limit bug blocks work without visible local usage, and there is no clear way to diagnose or reset the counter.

- **Windows platform is fragile** – Desktop crashes during browser preview, MSIX packages entering a broken state after GPU failures, the Cowork service running without a disable option, and the ECONNRESET on streaming API calls all point to a less polished experience on Windows compared to macOS/Linux.

- **Streaming and network reliability** – The bundled Bun HTTP client failing where Node.js succeeds (#84194) and the stalled stream watchdog behavior (documentation gap, #47623 closed) suggest ongoing issues with long-running streaming connections.

- **Documentation gaps persist** – A large batch of closed documentation issues (30+ items) confirms that many features (sandboxing, session resumption, plugin auto-install, etc.) are either missing or outdated in the official docs. While these were closed as stale, the underlying gaps remain unless the docs were updated.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-08-07

## Today’s Update Brief

One new release (rust‑v0.147.0) shipped with portable Agent Plugins and conversation‑sectioning features. The issue tracker remains active: 50 issues updated in the last 24 hours, with Windows‑specific bugs (zombie processes, memory leaks, WMI storms) and MCP/subagent reliability problems dominating. The pull request queue saw 32 updates, many from automated bots, focusing on sandbox hardening, OAuth recovery, telemetry reloading, and MCP handler reuse.

## Releases

### rust‑v0.147.0
- **New Features**
  - Install portable Agent Plugins and search across local, personal, workspace, and remote plugin catalogs. (#36544, #36409, #36919, #36796)
  - Organize conversations into persistent, manually ordered sections and browse long transcripts incrementally. (#35722, #36007, #36380, #36948)

## Hot Issues

1. **[#33776 – Windows: ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe, causing WMI storms and DWM degradation](https://github.com/openai/codex/issues/33776)**
   *Workflow:* Desktop app on Windows. *Impact:* 287+ orphaned processes per session, leading to system sluggishness and UI freezes. *Reaction:* 27 👍, 32 comments; users report the issue persists across versions.

2. **[#28080 – Desktop thread tools intermittently lose handlers (“No handler registered”)](https://github.com/openai/codex/issues/28080)**
   *Workflow:* Active code‑execution session on Windows. *Impact:* Tool calls fail mid‑session, forcing restarts. *Reaction:* 21 comments, 2 👍; maintainers have acknowledged but not yet resolved.

3. **[#20883 – Codex Desktop should use project‑scoped MCP process pool instead of per‑session](https://github.com/openai/codex/issues/20883)**
   *Workflow:* Opening multiple chats in the same project spawns duplicate MCP servers. *Impact:* Resource waste and potential port conflicts. *Reaction:* 17 comments, 4 👍; community backs a pooled approach.

4. **[#26820 – CLI cannot acquire Chrome extension backend while app UI works](https://github.com/openai/codex/issues/26820)**
   *Workflow:* Terminal‑based CLI vs. Desktop app on same machine. *Impact:* CLI users lose browser automation capabilities. *Reaction:* 12 comments, 9 👍; not a profile or manifest issue.

5. **[#21653 – Support multi‑line status line in TUI](https://github.com/openai/codex/issues/21653)**
   *Workflow:* CLI TUI with many status items. *Impact:* Long status lines are truncated; no line‑break support. *Reaction:* 58 👍, 12 comments; highly requested enhancement.

6. **[#33531 – MCP suites persist after subagents complete, reaching 10.9 GB private memory](https://github.com/openai/codex/issues/33531)**
   *Workflow:* Windows Desktop app with subagents. *Impact:* Memory exhaustion, system slowdown. *Reaction:* 5 comments, 1 👍; a critical resource leak.

7. **[#19694 – Desktop model picker filters out models returned from model_catalog_json](https://github.com/openai/codex/issues/19694)**
   *Workflow:* Custom model selection. *Impact:* Users cannot see/use available models. *Reaction:* 35 👍, 14 comments; closed but still affecting many.

8. **[#35355 – Compaction can promote partial output from interrupted commands into falsely confirmed task state](https://github.com/openai/codex/issues/35355)**
   *Workflow:* Long‑running CLI session with interruptions. *Impact:* Incorrect state persists across turns, eroding trust. *Reaction:* 5 comments, 0 👍; subtle but serious logical bug.

9. **[#37192 – OAuth fallback silently uses hardcoded “dummy” API key after network change, causing 401](https://github.com/openai/codex/issues/37192)**
   *Workflow:* CLI with ChatGPT OAuth. *Impact:* Silent authentication failure; no user prompt. *Reaction:* 4 comments, 0 👍; security and usability concern.

10. **[#35463 – Codex subagents drain full week quota overnight – usage counting broken](https://github.com/openai/codex/issues/35463)**
    *Workflow:* Pro subscribers using subagents. *Impact:* Quota exhausted rapidly, service unavailable. *Reaction:* 4 comments, 0 👍; likely related to subagent usage accounting.

## Key PR Progress

1. **[#37354 – Retry busy app‑server test executable spawns](https://github.com/openai/codex/pull/37354)**
   *Fix:* Retries `ExecutableFileBusy` errors up to twice with 10 ms delay. Improves test reliability.

2. **[#37352 – Configure default code‑mode exec yield timeout](https://github.com/openai/codex/pull/37352)**
   *Feature:* Adds `features.code_mode.default_exec_yield_time_ms` (default 30 s) and removes hardcoded fallback.

3. **[#37349 – Mount a minimal /dev in full‑filesystem Bubblewrap sandboxes](https://github.com/openai/codex/pull/37349)**
   *Fix:* Overlays minimal `/dev` to prevent host device tree inheritance in network‑isolated sandboxes.

4. **[#37348 – Add rollout migration tooling and background migration](https://github.com/openai/codex/pull/37348)**
   *Feature:* `codex migrate-rollouts` command with dry‑run, apply, thread filtering, and progress output.

5. **[#37344 – Fix subagent MCP startup status settling](https://github.com/openai/codex/pull/37344)**
   *Fix:* Clears cached MCP startup expectations for active subagents, preventing TUI from showing “running” indefinitely.

6. **[#37337 – Recover MCP servers after OAuth reauthentication](https://github.com/openai/codex/pull/37337)**
   *Fix:* Allows Streamable HTTP MCP servers to restart after OAuth credential refresh without client restart.

7. **[#37335 – Fully repaint inline viewports after history overlap](https://github.com/openai/codex/pull/37335)**
   *Fix:* Resolves stale terminal characters in composer during inline‑mode resize by clearing full viewport.

8. **[#37279 – Avoid cloning immutable metadata on tool search cache hits](https://github.com/openai/codex/pull/37279)**
   *Optimization:* Tracks immutable deferred tools by runtime identity, reducing unnecessary metadata rebuilds.

9. **[#37273 – Reuse MCP handlers across sampling steps](https://github.com/openai/codex/pull/37273)**
   *Optimization:* Caches MCP tool handlers per session for the lifetime of a stable binding, reducing repeated schema construction.

10. **[#37345 – Send model routing hints to the Codex backend](https://github.com/openai/codex/pull/37345)**
    *Feature:* Adds `x-codex-routing-hint` header with model and service tier on requests, compaction, and WebSocket handshakes.

## Feature Request Clusters

- **MCP & Subagent Infrastructure**
  Multiple requests ask for better lifecycle management: a project‑scoped MCP process pool (#20883), strict delegation ceilings (#36381), and configurable MCP startup timeouts. The PRs on handler reuse (#37273) and startup settling (#37344) show active work in this area.

- **Terminal UI & Notification Improvements**
  Users want multi‑line status lines (#21653), configurable notification focus behavior (#13979), and a default shell selector for Windows (#16579). These are complementary to the existing TUI enhancements.

- **Windows‑Specific Configuration**
  The ability to set the default session shell (#16579) and improve sandbox setup (elevated UAC prompts #31556, WSL bwrap #24873) are recurring asks. Many Windows issues also involve process leaks and sandbox resource management.

## Developer Pain Points

- **Windows Stability & Resource Leaks**
  The most frequent class of bugs: zombie process leaks (taskkill, conhost, ChatGPT.exe), high memory usage from MCP survivors, and WMI storms. Issues #33776, #33531, #37247, #37236 all report similar symptoms across different Windows versions.

- **Process & Resource Management**
  Failures in subagent quota counting (#35463), MCP memory leaks (#33531), and orphaned processes (#33776) indicate that lifecycle management for spawned children is fragile.

- **Authentication & Rate‑Limit Handling**
  Silent OAuth fallback to dummy keys (#37192), incorrect usage‑limit blocking after reset (#37250), and quota draining by subagents (#35463) erode trust in the billing/accounting system.

- **Session & State Consistency**
  Compaction promoting partial output (#35355), checkpoint prose overriding real state (#37325), and tool handler loss (#28080) point to deeper issues in how the system tracks and verifies task progress.

- **Sandbox & Security**
  Windows elevated sandbox re‑arming WFP firewall on every command (#31556), missing `/dev` in Bubblewrap (#37349 was a fix), and WSL bwrap incompatibility (#24873) show that sandbox environments are still not fully robust across platforms.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-07

## Today's Update Brief
A moderate activity day with one minor release (v0.34.0) and a high volume of issue and PR activity. The community is actively reporting session reliability problems at high context fill, TUI rendering bugs, and MCP schema compatibility issues, while maintainers are merging fixes for compaction token counting, search index isolation, and plugin lifecycle semantics.

## Releases
- **v0.34.0** ([diff](https://github.com/MoonshotAI/kimi-code/compare/0.33.0...0.34.0)): Minor change — shows a cache-expiry reminder when resuming a long-idle session. Changelog includes 3 features, 4 polish items, and 15 bug fixes.

## Hot Issues

1. **#2622 – Agent reliability degrades at high context fill (~500K tokens)** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2622)
   - **Affected workflow**: Long-running agentic sessions with multi-step code changes. Users observe repetitive action loops, no escalation to the user, and instruction drift once context exceeds roughly 500K tokens.
   - **Impact**: High. Sessions become unusable, wasting tokens and time. The threshold is operator-measured, not documented.
   - **Community**: 6 comments. No maintainer resolution yet.

2. **#2709 – TUI renders Arabic in logical order instead of shaped RTL** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2709)
   - **Affected workflow**: Any user typing Arabic (or other RTL scripts) in the TUI. The editor strings are sent directly to the terminal without a bidirectional display transform.
   - **Impact**: Medium. Affects Arabic-speaking users and any project with mixed RTL/LTR content.
   - **Community**: 2 comments. Verified on both v0.33.0 and current main.

3. **#2691 – ESC mid-stream permanently wedges the session** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2691)
   - **Affected workflow**: Pressing ESC while the agent is generating a response. The next request fails with a 400 error: "Invalid assistant message: content or tool_calls must be set."
   - **Impact**: High. Session is permanently stuck; user must start a new session.
   - **Community**: 0 comments, but reported on v0.32.0/0.33.0 with third-party providers.

4. **#2705 – Optimize TUI message timestamp display layout** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2705)
   - **Affected workflow**: Viewing message timestamps in the TUI. Current layout wastes screen space with indented layouts, lacks completion duration, and has no live toggle.
   - **Impact**: Low. Enhancement request, but addresses a common visual annoyance.
   - **Community**: 0 comments. Detailed proposal from a community contributor.

5. **#2661 – MCP tool schema validation fails with `type` next to `anyOf`** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2661)
   - **Affected workflow**: Using any MCP tool server that declares a schema with both `type` and `anyOf` at the same level. Results in a 400 error: "not a valid moonshot flavored json schema."
   - **Impact**: High. Breaks the official Notion MCP server and any similar schema pattern.
   - **Community**: 1 comment. Already has a fix PR open (#2662).

6. **#2680 – Auto compaction causes agent to abandon in-flight request and re-execute earliest message** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2680)
   - **Affected workflow**: Long sessions with auto compaction enabled. When compaction fires mid-turn, the agent stops working on the current question and starts executing the session's very first message.
   - **Impact**: High. Complete loss of current work, wasted tokens, user confusion.
   - **Community**: 0 comments. Critical behavioral bug.

7. **#2688 – `@file` mention always searching and listing directory** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2688)
   - **Affected workflow**: Using `@file` to reference a file in the TUI. The mention always lists the directory instead of directly inserting the file path.
   - **Impact**: Medium. Reduces efficiency of file referencing; agent must rediscover files with `ls`/`find`.
   - **Community**: 0 comments. Has a fix PR (#2711).

8. **#2687 – Kimi Code hangs indefinitely when sending first prompt** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2687)
   - **Affected workflow**: Any user with an AI Platform API account sending the first prompt. The CLI hangs indefinitely.
   - **Impact**: High. Blocks initial use for some users.
   - **Community**: 0 comments. No root cause identified yet.

9. **#2624 – Unable to login** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2624)
   - **Affected workflow**: Users trying to log in via the CLI. The "models endpoint" fails, preventing authentication.
   - **Impact**: High. Blocks all usage for affected users.
   - **Community**: 1 comment. User is on v0.6.7 (old version).

10. **#2712 – TUI input box doesn't stay fixed when scrolling history** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2712)
    - **Affected workflow**: Scrolling up to view long conversation history, code output, or agent reasoning. The input box scrolls away, forcing users to scroll back down to type.
    - **Impact**: Medium. Frequent interruption of flow during long sessions.
    - **Community**: 0 comments. Clear UX pain point described in detail.

## Key PR Progress

1. **#2662 – Hoist `type` into `anyOf`/`oneOf` branches** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2662)
   - **Fixes**: #2661. When an MCP tool schema declares `type` next to `anyOf`, the schema is now valid by hoisting `type` into each branch.
   - **Status**: Open, with focused diff.

2. **#2249 – Stop empty-payload images from poisoning sessions** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2249)
   - **Fixes**: #2209. Zero-byte images from failed clipboard reads were entering session history as `data:image/png;base64,`, causing provider rejections.
   - **Status**: Open. Addresses a critical data corruption issue.

3. **#2711 – Resolve `@` file mentions to absolute paths on send** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2711)
   - **Fixes**: #2688. The model now receives a signal that the mentioned file exists at a specific location, eliminating the need for `ls`/`find` rediscovery.
   - **Status**: Open. Direct improvement to file referencing workflow.

4. **#2499 – Back off idle goal continuations** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2499)
   - **Fixes**: #1977. When an active goal produces consecutive text-only turns while waiting on an external condition, the goal driver now backs off instead of launching another full-context model request.
   - **Status**: Open. Prevents infinite token consumption loops.

5. **#1962 – Paste clipboard images on WSL when WSLg only offers BMP** — [Link](https://github.com/MoonshotAI/kimi-code/pull/1962)
   - **Fixes**: #1961. On WSL with WSLg, pasting images (e.g., Win+Shift+S screenshots) now works by allowing BMP format and converting it.
   - **Status**: Open. Critical for Windows/WSL users.

6. **#2701 – Isolate full-text search index from session index and main thread** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2701)
   - **Problem**: Global full-text search index shared the Node main process with the TUI, causing UI freezes during large search generation or WAL replay.
   - **Status**: Closed. Merged for improved performance.

7. **#2699 – Count compaction tokens on full-request basis** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2699)
   - **Problem**: After compaction, reported token counts were far below the real context size, making the context-size gauge inaccurate.
   - **Status**: Closed. Merged to fix inaccurate token reporting.

8. **#2708 – Rework changelog curation rules** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2708)
   - **Problem**: User-facing changelog kept nearly every perceivable entry, producing walls of narrow fixes (e.g., 15 bug-fix bullets in 0.34.0).
   - **Status**: Closed. Docs-only change to reduce noise in changelogs.

9. **#2707 – Strip unsupported media only for explicit capability matrices** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2707)
   - **Problem**: `downgradeUnsupportedMedia` treated `UNKNOWN_CAPABILITY` as text-only, stripping media from uncatalogued providers (e.g., `SingleModelProvider` default).
   - **Status**: Open. Prevents false media stripping for multimodal models.

10. **#2706 – Expose global MCP auth status** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2706)
    - **Problem**: Hosts could list global MCP configuration but couldn't read persisted OAuth authorization state without reaching into private credential storage.
    - **Status**: Open. SDK enhancement for transparent auth state access.

## Feature Request Clusters

- **Enhanced TUI Interaction**: Multiple requests for TUI improvements, including a fixed input box during scroll (#2712), optimized timestamp display (#2705), and keyboard shortcuts for backgrounding tasks (#2684).
- **Web UI Improvements**: Requests for mobile browser adaptation (#2676), fix for plan mode auto-exit (#2658), and permission mode sync fix (#1386).
- **Localization & Internationalization**: Requests for Brazilian Portuguese localization (#2685), Arabic RTL rendering fix (#2709), and Chinese (zh-CN) UI refinements (#2676).
- **Background Task Management**: Users want the ability to put running tasks in the background (like Claude Code's Ctrl+B) to free up the TUI (#2684).
- **MCP & Plugin Integration**: Requests for better MCP tool schema validation (#2661), exposing MCP auth status (#2706), and open-sourcing the Web UI for community plugin contribution (#2667).

## Developer Pain Points

- **Session Stability Issues**: Recurring reports of sessions becoming wedged or unreliable after ESC interrupts (#2691), auto-compaction (#2680), or high context fill (#2622). These are critical blockers for long-running workflows.
- **Login & Provider Compatibility**: Users face login failures (#2624) and indefinite hangs on first prompt (#2687), particularly with third-party OpenAI-compatible providers. The old v0.6.7 login issue suggests some users are stuck on outdated versions.
- **Cross-Platform Issues**: Windows/WSL users report clipboard image paste failures (#1962), npm-global install detection failures (#1356), and file mention path issues (#2688).
- **Web UI as Second-Class Citizen**: The Web UI has its own bugs (permission sync #1386, plan mode auto-exit #2658, mobile adaptation #2676) and its source code is not in the main repo, making community contributions harder.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-07

## Today’s Update Brief
Activity remains high, with 50 issues and 50 PRs updated in the last 24 hours. The dominant theme is a widespread “Request blocked by upstream provider” error affecting both OpenCode Go and Zen subscriptions, persisting for over two weeks with no official fix. On the development side, multiple PRs landed around TUI prompt management, tool output bounding, and session lifecycle improvements, while the community continues to push for long-standing feature requests around session context and cross-project navigation.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **#38257 – OpenCode Go: return 401 Request blocked by upstream provider**
   *Author: @lizijiangyyjx* – 44 comments, 11 👍
   The most commented issue on the blocking problem. All Go-tier models fail at `/chat/completions` while `/v1/models` works. The author suspects a server-side issue.
   https://github.com/anomalyco/opencode/issues/38257

2. **#38218 – bug(opencode-go): All subscription models return “Request blocked by upstream provider”**
   *Author: @1335907208* – 31 comments, 13 👍
   Similar report – every model under Go subscription fails.
   https://github.com/anomalyco/opencode/issues/38218

3. **#38195 – 401 AuthError: Request blocked by upstream provider**
   *Author: @faustkuroki* – 24 comments, 17 👍
   Includes additional detail: free models work, but all Go models fail on both Desktop and Hermes (Windows/macOS).
   https://github.com/anomalyco/opencode/issues/38195

4. **#6152 – [FEATURE]: Session context usage (similar to /context in Claude)**
   *Author: @mtymek* – 22 comments, 129 👍
   A highly upvoted feature request for a TUI dialog that shows a breakdown of the current session’s context window.
   https://github.com/anomalyco/opencode/issues/6152

5. **#31932 – [FEATURE]: Cross-project session list / picker for TUI**
   *Author: @mskadu* – 15 comments, 6 👍
   Users want a `/sessions` command that works across multiple repos, not just the current project.
   https://github.com/anomalyco/opencode/issues/31932

6. **#40234 – 订阅opencode go之后套餐没有生效**
   *Author: @MrLiaoy* – 13 comments, 0 👍
   Subscription activation failure after payment – shows “no payment method” even though email confirms purchase.
   https://github.com/anomalyco/opencode/issues/40234

7. **#14332 – Amazon Bedrock Opus 4.6 compaction failure**
   *Author: @inventumamet* – 13 comments, 8 👍
   Error when attempting to modify `thinking` or `redacted_thinking` blocks in the latest assistant message.
   https://github.com/anomalyco/opencode/issues/14332

8. **#1168 – Feature Request: Make Links Clickable (Ctrl+Left Click to Open)**
   *Author: @jay-tau* – 11 comments, 119 👍
   Long-standing request for clickable URLs in the terminal/desktop interface.
   https://github.com/anomalyco/opencode/issues/1168

9. **#39827 – [Zen] AuthError: “Request blocked by upstream provider” — all Zen models broken**
   *Author: @juanmah98* – 9 comments, 4 👍
   Reports that the same blocking error also affects Zen (free) tier; direct API keys work fine.
   https://github.com/anomalyco/opencode/issues/39827

10. **#40502 – [Bug] Web interface does not auto-refresh conversations in real-time**
    *Author: @afonsoft* – 7 comments, 0 👍
    New messages are not visible until a manual page refresh.
    https://github.com/anomalyco/opencode/issues/40502

## Key PR Progress
1. **#40971 – feat(tui): expose prompt action commands**
   Author: @mustfsb – Adds stable TUI commands for form and permission prompts (`form.option.previous`, `permission.accept`, etc.).
   https://github.com/anomalyco/opencode/pull/40971

2. **#40929 – feat(core): bound tool output**
   Author: @rekram1-node – Enforces configurable line and byte limits on local tool output; retains full truncated text in managed files.
   https://github.com/anomalyco/opencode/pull/40929

3. **#40922 – feat(tui): queue prompts with option enter**
   Author: @opencode-agent[bot] – Makes Enter steer the active response, Option+Enter queues prompts; queued work appears in a compact dock.
   https://github.com/anomalyco/opencode/pull/40922

4. **#40969 – fix(llm): treat empty tool call identity in stream deltas as absent**
   Author: @Curzibn – Fixes streaming failures on Alibaba DashScope and similar providers that send empty `id` on continuation deltas.
   https://github.com/anomalyco/opencode/pull/40969

5. **#40943 – fix(ai): preserve Responses item IDs**
   Author: @rekram1-node – Ensures response item IDs for reasoning, assistant messages, etc. are preserved regardless of `store` setting.
   https://github.com/anomalyco/opencode/pull/40943

6. **#40965 – fix(ai): support streams without finish reasons**
   Author: @rekram1-node – Adds `compatibility.requireFinishReason` option to handle providers that omit finish reasons.
   https://github.com/anomalyco/opencode/pull/40965

7. **#40964 – fix(api): require session selection**
   Author: @opencode-agent[bot] – Now requires `agent` and `model` when creating a session via the V2 API; rejects fresh CLI sessions without selection.
   https://github.com/anomalyco/opencode/pull/40964

8. **#40940 – docs: explain projects and sessions in the getting started guide**
   Author: @tnspacetime – Adds a new section clarifying how sessions relate to projects.
   https://github.com/anomalyco/opencode/pull/40940

9. **#40954 – fix(core): reload changed skill sources**
   Author: @kitlangton – Hot reloads local skill directories (global and project-scoped) on file changes, invalidating cached catalogs.
   https://github.com/anomalyco/opencode/pull/40954

10. **#40956 – fix(session): restart the loop for queued input stranded by an interrupt**
    Author: @zhihanliu-collab – Fixes silent dropping of queued input when a turn is interrupted (Esc or abort).
    https://github.com/anomalyco/opencode/pull/40956

## Feature Request Clusters
Several feature requests recur across multiple issues:

- **Session context visualization** – #6152, #37760, #38973. Users want a breakdown of context window usage, session stats, and full-text search across session contents.
- **Cross-project session management** – #31932, #38973. The request for a global session picker (not scoped to a single project) appears in multiple threads.
- **Clickable links** – #1168. A long-standing ask with 119 👍 for Ctrl+click to open URLs.
- **Privacy and telemetry transparency** – #39875 (44 👍) requests reversal of silent removal of Go privacy wording and provider attribution, plus adding telemetry and retention to the privacy policy.
- **Configurable mid-run prompt delivery** – #32157 (67 👍) asks for a first-class distinction between `queue`, `steer`, and `break` for prompts submitted while a turn is running.

## Developer Pain Points
- **Ongoing upstream provider block** – At least six distinct issues (e.g., #38257, #38218, #38195, #39827, #40055, #38473) report that all subscription models (Go and Zen) return `401 Request blocked by upstream provider`. This has been ongoing since July 21–22, with no official response or fix. The issue affects multiple platforms (Desktop, Hermes, CLI) and both paid and free tiers, though free models sometimes work. It is the single largest source of frustration in today’s data.
- **Subscription activation failures** – #40234 and #40055 describe payments being accepted but subscriptions not taking effect, with errors like “No payment method.”
- **TUI freezes/garbled output** – #35494 (Debian 13, XFCE) and #11748 (PowerShell after CLI exit) report terminal issues that require `kill -9` or cause garbled display.
- **Permission rule matching bug** – #40945 points out that `permission.edit` patterns are matched against worktree-relative paths, making absolute or `~` patterns silently never match (fail-open for deny rules).

</details>