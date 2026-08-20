# AI CLI Tools Community Digest 2026-08-20

> Generated: 2026-08-20 00:42 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-20

## 1. Daily Cross-Tool Overview

All four tracked AI CLI tools saw elevated community activity today, with 169 combined issues and 127 combined PRs touched across the ecosystem. Claude Code shipped a minor release (v2.1.236) with cross-session messaging and a new environment variable, while OpenAI Codex released two Rust alpha versions without changelogs. Kimi Code and OpenCode published no new releases. Platform-specific reliability bugs dominate across all tools—Windows stability, process management on macOS, and authentication failures appear in every tracker. The AGENTS.md standardization request at Claude Code (4,659 👍) remains the single most-voted feature across any tool this month, though it was closed without a resolution comment. OpenCode shows the highest combined issue+PR activity (100 items), while Kimi Code has the most PRs (50) but fewer issues (19).

---

## 2. Activity Comparison

| Metric | Claude Code | OpenAI Codex | Kimi Code | OpenCode |
|---|---|---|---|---|
| **Issues updated/opened (24h)** | 50 | 50 | 19 | 50 |
| **PRs updated (24h)** | 1 | 26 | 50 | 50 |
| **Releases today** | v2.1.236 | rust-v0.149.0-alpha.1, rust-v0.149.0-alpha.2 | None | None |
| **Release type** | Stable | Alpha | — | — |
| **Notable feature** | `ANTHROPIC_DEFAULT_MODEL` env var, cross-session `notify_when_idle` | No changelog provided | — | — |
| **Most active issue** | #6235 (AGENTS.md, 4,659 👍) | #39136 (Browser plugin init, 41 👍) | #2712 (TUI input box scroll, 5 👍) | #37852 (Silent aborted streams, 56 👍) |
| **Maintainer response signal** | Low (1 PR, closed AGENTS.md without resolution) | High (26 merged PRs, mostly automated) | Moderate (50 PRs, active architecture work) | High (50 PRs, multiple closed fixes) |

---

## 3. Shared Feature Directions

**Standardized project guidance file**
- **Claude Code** (#6235, 4,659 👍): Request to adopt AGENTS.md standard for cross-tool compatibility, currently blocked by CLAUDE.md being Claude-specific.
- **OpenAI Codex** (#36068): Users note that the AGENTS.md documentation references a non-existent source file path, indicating the standard is being referenced but not yet properly implemented.

**Multi-agent and session management**
- **Claude Code**: Multiple requests for named sessions (#69836), agent-hours metrics (#88085), and multi-account switching (#36151).
- **OpenAI Codex**: Subagent version compatibility issues (#34301) block Luna agent usage on Windows.
- **Kimi Code**: Adds `fork` parameter to the Agent tool (#3007) for context-preserving subagent spawning.
- **OpenCode**: Switch model for all agents in PLAN+BUILD mode (#3028), session renaming (#25848).

**MCP/ACP protocol reliability**
- **Kimi Code**: Five issues today target ACP protocol gaps—provider error surfacing (#3107), truncated permission requests (#3106), missing Grep/Glob support (#3081), stdio MCP type handling (#3069), and tool-select capability declarations (#3090).
- **OpenAI Codex**: MCP process spawning on Windows (#38754) leaves unreaped processes; OAuth issuer flexibility requested (#38944).
- **OpenCode**: MCP connections rate-limit after idle periods (#43530).

**Platform-specific reliability**
- **Windows**: Crashes, authentication failures, native host registration, and process management issues appear in all four tools.
- **macOS**: Zombie processes and unbounded worker spawning affect Codex (#25744, #38455) and Claude Code (Cowork VM boot failure on ARM64, #39636).
- **Linux**: Bubblewrap compatibility (#39404, Codex) and Wayland window display (#42681, OpenCode).

**File editing and tool reliability**
- **Claude Code**: Auto-mode system prompt forces Bash/sed/heredoc over Edit/Write tools (#87575, #88041), breaking `/rewind` and tool choice.
- **Kimi Code**: Guards against stale writes (#3096) to prevent data loss on externally modified files.
- **OpenCode**: Plugin tool input decoding errors from version mismatches (#43460).

---

## 4. Differentiation Analysis

**Claude Code** is the most mature CLI with the largest community engagement (4,659 👍 on a single issue). Its focus today is on model flexibility (new env var, model quality complaints) and cross-session orchestration—a direction none of the other tools are pursuing. The user base skews toward power users who want granular control over system prompts, delegation policies, and tool choice, and who are vocal when those are overridden.

**OpenAI Codex** is the most infrastructure-heavy tool, with 26 merged PRs today—mostly automated refactors, security patches (Git command isolation, #39524), and platform bug fixes. The community is overwhelmingly focused on Computer Use reliability and Windows/macOS process management. Codex appears to be the primary tool for browser automation and multi-agent subagent workflows, with the most platform-specific integration surface.

**Kimi Code** is the most protocol-focused tool, with heavy investment in the ACP (Agent Communication Protocol) server and agent-core-v2 architecture. The small issue count (19) relative to PRs (50) suggests a development team actively building out infrastructure rather than a large user community. The TUI and VS Code plugin fixes (scroll behavior, long-running chat timeout) indicate a developing UX that still needs polish.

**OpenCode** balances the highest combined activity (100 items) with a mature feature set. The community is vocal about billing accuracy (multiple Go subscription complaints) and V2 stability issues. OpenCode's PRs show the most deliberate UX improvements (optimistic prompt rendering, modular session UI, skill UX, session renaming). The tool has the broadest platform coverage (Linux, Wayland, desktop, web, TUI) and the most active contributor community.

---

## 5. Community Activity Notes

**Highest issue volume**: Claude Code, OpenAI Codex, and OpenCode each had 50 issues updated today. Kimi Code had fewer (19) but notably lower community engagement (fewer comments, fewer upvotes across the board).

**Highest PR volume**: Kimi Code and OpenCode both had 50 PRs updated. OpenAI Codex had 26 (mostly automated). Claude Code had only 1 PR, indicating very low maintainer activity relative to issue volume.

**Most responsive maintainers**: OpenAI Codex (26 merged PRs, 10 picked for review) and OpenCode (50 PRs, multiple closed fixes). Kimi Code's 50 PRs include significant architecture work (agent-core-v2, MCP management plane) suggesting sustained development effort.

**Least responsive maintainers**: Claude Code—only 1 PR touched today, and the most-voted issue (#6235, AGENTS.md) was closed without a resolution comment. The gap between community demand (4,659 👍) and maintainer response is the largest across all four tools.

**Notable community engagement**: Claude Code's AGENTS.md issue has 360 comments and 4,659 👍—an order of magnitude more than any other issue across all tools today. OpenAI Codex's #39136 (browser plugin) has 78 comments and 41 👍. OpenCode's #37852 (silent failures) has 19 comments and 56 👍.

---

## 6. Evidence-Backed Observations

**Platform-specific issues remain the dominant pain point across all four tools.**
Windows stability bugs appear in every tracker: Claude Code crashes (#85199), Codex browser plugin init (#39136), Kimi Code web UI startup (#3065), and OpenCode session restarts on Copilot rejection (#42089). macOS resource leaks (Codex #25744, #38455) and Linux Wayland support (OpenCode #42681) add further evidence that cross-platform reliability is the single most consistent unmet need.

**The desire for cross-tool compatibility standards is growing, with AGENTS.md as the most visible signal.**
Claude Code's #6235 (4,659 👍) is the largest community request across any tool today. Codex's #36068 confirms that AGENTS.md is being referenced but not properly implemented. None of the tools have fully adopted the standard, but the community demand is clear and sustained.

**System prompt injection and tool-choice overrides are a recurring source of power-user frustration.**
Claude Code has three issues (#80988, #87575, #88041) where auto-mode injects instructions that override user preferences (delegation policy, tool selection, rewind compatibility) with no opt-out. This pattern—where the tool prioritizes speed over user control—is a notable tension point in the developer experience.

**Multi-agent and subagent workflows are being actively built across all tools, but version compatibility and process management lag behind.**
Claude Code requests cross-session messaging (#69836). Codex has subagent version mismatches (#34301). Kimi Code adds a `fork` parameter for context preservation (#3007). OpenCode exposes valid subagent IDs (#43282). The infrastructure is being built, but platform-specific issues (Windows process management, macOS zombie processes) are creating bottlenecks.

**Billing transparency is an emerging concern, primarily in OpenCode but with echoes in Claude Code.**
OpenCode has multiple complaints about Go subscription usage not matching client-recorded usage (#43416, #41976, #43424, #43409). Claude Code requests agent-hours metrics (#88085). The other tools have no explicit billing-related issues today, but the pattern of usage-based billing without transparent metering is a potential risk across the ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-20

## Today's Update Brief
Version 2.1.236 shipped with a new `ANTHROPIC_DEFAULT_MODEL` environment variable and cross-session messaging. 50 issues were updated in the last 24 hours, with the most active being a closed feature request for AGENTS.md support (360 comments, 4,659 👍). Only one pull request was touched today.

## Releases
**v2.1.236** — [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)
- Added `ANTHROPIC_DEFAULT_MODEL` environment variable: sets the model for new sessions; `/model` pick still overrides and persists across restarts (unlike `ANTHROPIC_MODEL`).
- Added `notify_when_idle` to cross-session `SendMessage`: allows one Claude Code session to ask another.

## Hot Issues (10 of 50)

1. **[#6235 — Feature Request: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)**
   *CLOSED | 360 comments | 4,659 👍*
   Request to adopt the emerging `AGENTS.md` standard (used by Codex, Amp, Cursor) so that Claude Code's project guidance works across tools. CLAUDE.md is currently too specific to Claude Code. Closed as completed? The label is `[CLOSED]` but no resolution comment is shown.

2. **[#36151 — Multi-account switching in Claude Mobile app](https://github.com/anthropics/claude-code/issues/36151)**
   *OPEN | 160 comments | 610 👍*
   Users want to switch between accounts without sharing an email. Affects mobile workflows; high community demand.

3. **[#32479 — GitHub Connector not recognized by Claude Desktop](https://github.com/anthropics/claude-code/issues/32479)**
   *OPEN | 89 comments | 140 👍*
   Bug: GitHub Connector appears connected in Claude Desktop settings but Claude does not see it. Breaks repository access workflows.

4. **[#39636 — Cowork VM guest kernel never boots on Snapdragon X Plus (ARM64)](https://github.com/anthropics/claude-code/issues/39636)**
   *CLOSED | 40 comments | 10 👍*
   Windows ARM64 users cannot use Cowork mode; connection timeout on every attempt. Affects new Snapdragon X hardware.

5. **[#80988 — `heron_brook` prompt section overrides user delegation policy](https://github.com/anthropics/claude-code/issues/80988)**
   *OPEN | 30 comments | 57 👍*
   System prompt section injected in v2.1.219 forces "Do not call the AgentTool unless the user requested it" for Opus 5 only, silently overriding user-configured delegation settings with no opt-out. Power users report frustration.

6. **[#77136 — Claude Opus 4.8/5.0 language quality issues](https://github.com/anthropics/claude-code/issues/77136)**
   *OPEN | 30 comments | 196 👍*
   Users report Opus 4.8's language as "toxic/unpleasant" and Opus 5.0 as "incoherent". High upvotes indicate widespread dissatisfaction with model behavior.

7. **[#29017 — Conversation history lost in VSCode extension](https://github.com/anthropics/claude-code/issues/29017)**
   *OPEN | 30 comments | 20 👍*
   Bug: VSCode extension loses conversation history, disrupting long coding sessions.

8. **[#85199 — Claude Desktop repeatedly crashes on Windows](https://github.com/anthropics/claude-code/issues/85199)**
   *OPEN | 29 comments | 4 👍*
   Requires "Advanced Options → Repair" to recover. Affects Windows native users.

9. **[#87575 — Auto mode causes /rewind to silently fail on Bash-edited files](https://github.com/anthropics/claude-code/issues/87575)**
   *OPEN | 7 comments | 3 👍*
   Auto mode's system prompt tells the model to edit files with Bash, which silently defeats the `/rewind` command. Reproducible on WSL2. Filed two days ago.

10. **[#88041 — Auto-mode "bashFirst" system prompt instructs sed/heredoc instead of Edit/Write tools](https://github.com/anthropics/claude-code/issues/88041)**
    *OPEN | 2 comments | 2 👍*
    Hardcoded template in CLI binary forces file edits via Python scripts/sed/heredoc rather than using proper Edit/Write tools. User discovered the raw template in the binary. Affects reliability of file operations.

## Key PR Progress
Only one pull request was updated in the last 24 hours:

- **[#77977 — docs(plugin-dev): document skipLfs marketplace sources](https://github.com/anthropics/claude-code/pull/77977)**
  *OPEN | 0 comments*
  Adds documentation for the `skipLfs` option in `github` and `git` marketplace source objects, with examples for GitHub shorthand and generic Git URLs that skip Git LFS downloads. Ref #63035. Docs-only change.

## Feature Request Clusters
Recurring themes from today's issue set:

- **Standardized project guidance file** — #6235 (AGENTS.md) received overwhelming support (4,659 👍), indicating strong desire for cross-tool compatibility.
- **Multi-account and session management** — #36151 (multi-account switching), #69836 (named sessions via `--session` flag), #88085 (agent-hours metric for team labor tracking).
- **Remote access and SSH** — #84967 requests outbound SSH from Claude Code Remote (web) sessions for VPS management.
- **Model flexibility** — #76478 requests Fable model usage for reverse engineering of obsolete devices; #77136 asks for better model language quality.
- **Cost and rate limits** — #62426 (rate limits blocking multi-agent workflows even on highest paid tier), #88085 (agent-hours metric).

## Developer Pain Points
- **Auto-mode system prompt overreach** — Two issues (#80988, #87575, #88041) report that auto-mode injects instructions that override user preferences (delegation policies, tool choice, `/rewind` compatibility). No opt-out exists.
- **Model quality and behavior** — #77136 highlights dissatisfaction with both Opus 4.8 and 5.0 language quality. High upvotes (196) suggest broad impact.
- **Windows stability** — Multiple bugs affect Windows native: crashes (#85199), rendering corruption (#79025), Ctrl-C exit failure (#88097), double-Ctrl-C wedge (#88097).
- **Security and sandbox gaps** — #77045 (sandbox `allowedDomains` not enforced on macOS), #84634 (Read tool ignores `permissions.deny` rules), #80660 (data loss from unverified `robocopy /MOVE` + `Remove-Item -Recurse -Force`).
- **Authentication and token handling** — #88054 (OAuth token not refreshed after 24h, killing remote-control sessions), #88024 (auth failure on macOS in certain environments).
- **VSCode extension issues** — #29017 (conversation history lost), #88095 (persistent 1px horizontal scrollbar from empty error element).
- **Rate limits for multi-agent** — #62426 reports blocking on highest paid tier with 5–6 concurrent instances.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-20

## Today’s Update Brief
Two Rust alpha releases (v0.149.0-alpha.1 and v0.149.0-alpha.2) landed today with no accompanying changelog. The issue tracker saw elevated activity, with 50 open/updated items and 26 PRs merged – mostly automated refactors and test additions by the `copyberry[bot]`. Windows and macOS reliability bugs continue to dominate, particularly around Computer Use, MCP helpers, and authentication.

## Releases
- **[rust-v0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)** – 0.149.0-alpha.1
- **[rust-v0.149.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.2)** – 0.149.0-alpha.2

Both are alpha releases with no further details in the provided data.

## Hot Issues (10 picked)

1. **#39136 – Codex built-in browser plugin initialization fails: Trusted RPC dependency not within a trusted code path**
   [Issue](https://github.com/openai/codex/issues/39136) – **78 comments, 41 👍**
   *Affected workflow:* In-app browser on Windows. RPC trust check fails during plugin init, blocking any browser-based automation.
   *Community reaction:* High engagement; user reports presence of the error even after clean installs.

2. **#38455 – macOS: App repeatedly spawns Computer Use workers and crashes with V8 OOM**
   [Issue](https://github.com/openai/codex/issues/38455) – **30 comments, 12 👍**
   *Affected workflow:* Computer Use on macOS. 187 worker threads spawn before crash, reproducing 98 seconds after launch.
   *Community reaction:* Users report regression from build 26.730.61639; telemetry shows 78 unexplained spawns.

3. **#25178 – Windows Computer Use screenshot fails when `SetIsBorderRequired` is called**
   [Issue](https://github.com/openai/codex/issues/25178) – **28 comments, 15 👍**
   *Affected workflow:* Computer Use on Windows 10 22H2. Screenshot capture fails with `0x80004002` (unsupported interface).
   *Community reaction:* Long-standing issue (since May); several workarounds attempted but no official fix.

4. **#38350 – Recurring scheduled tasks disable themselves after successful runs without user authorization**
   [Issue](https://github.com/openai/codex/issues/38350) – **20 comments, 0 👍**
   *Affected workflow:* ChatGPT Web scheduled tasks. Tasks randomly switch to “paused” post-execution.
   *Community reaction:* User reports four unrelated tasks disabled simultaneously; no explicit trigger.

5. **#25744 – macOS: Codex accumulates Computer Use / MCP helper processes and unreaped zombie children**
   [Issue](https://github.com/openai/codex/issues/25744) – **20 comments, 3 👍**
   *Affected workflow:* Long-running sessions on macOS. Zombie processes cause HID lag, WindowServer/TCC stalls.
   *Community reaction:* Multiple users confirm resource leak; process count grows unbounded.

6. **#39239 – Windows: `thread/archive` fails with “os error 2” after `thread/resume` stores a `\\?\` path**
   [Issue](https://github.com/openai/codex/issues/39239) – **17 comments, 0 👍**
   *Affected workflow:* Thread archiving on Windows. Verbatim paths (\\?\) break equality checks, preventing archive.
   *Community reaction:* Root cause identified as path-equality mismatch; workaround is manual path conversion.

7. **#33493 – Local compaction v2 retains unbounded input_image payloads, causing repeated auto-compaction**
   [Issue](https://github.com/openai/codex/issues/33493) – **17 comments, 4 👍**
   *Affected workflow:* Image-heavy threads on macOS. Compaction runs repeatedly because old images are never evicted.
   *Community reaction:* Users report 10+ compaction cycles in a single session; performance degrades significantly.

8. **#28950 – Windows: Chrome plugin install fails to create Native Messaging Host**
   [Issue](https://github.com/openai/codex/issues/28950) – **12 comments, 0 👍**
   *Affected workflow:* Browser control via Chrome extension on Windows. Native host registration fails silently.
   *Community reaction:* Extension itself installs, but interactive actions (click/type) are blocked.

9. **#38754 – Windows: Local stdio MCP servers repeatedly spawned and not reaped within a single task**
   [Issue](https://github.com/openai/codex/issues/38754) – **10 comments, 2 👍**
   *Affected workflow:* MCP tool usage on Windows. Each turn spawns a new server process; old ones never terminate.
   *Community reaction:* Process count rises linearly with turns; task becomes slower over time.

10. **#34301 – GPT Sol and Terra threads cannot spawn Luna subagents due to Luna Multi Agent version**
    [Issue](https://github.com/openai/codex/issues/34301) – **10 comments, 34 👍**
    *Affected workflow:* Multi-agent setups on Windows. Subagent spawning fails with version mismatch error.
    *Community reaction:* High upvote count; users blocked from using Luna agents on Windows.

## Key PR Progress (10 picked)

1. **[#39524 – Stop treating Git commands as inherently safe](https://github.com/openai/codex/pull/39524)**
   *Fix:* Removes Git commands from the known-safe classification on Unix and Windows, because repository config can execute arbitrary helpers. Improves security posture.

2. **[#39523 – Persist thread section moves before the first turn](https://github.com/openai/codex/pull/39523)**
   *Fix:* Non-ephemeral threads with no turns yet are now flushed to storage when moved into a section, preventing them from disappearing from section-filtered lists.

3. **[#39520 – Isolate automatic plugin Git operations](https://github.com/openai/codex/pull/39520)**
   *Fix:* Background marketplace/plugin refreshes no longer inherit repository-local Git config, protecting against malicious redirects.

4. **[#39410 – Refresh expired AWS credentials for Bedrock](https://github.com/openai/codex/pull/39410)**
   *Feature:* Adds `aws.auth_refresh` provider configuration with customizable command and timeout, allowing Bedrock sessions to recover from expired credentials mid-request.

5. **[#39404 – Support FD mounts with older system Bubblewrap versions](https://github.com/openai/codex/pull/39404)**
   *Fix:* Detects `--ro-bind-fd` support and falls back to alternative mount methods for older Bubblewrap installations on Linux.

6. **[#39474 – Consolidate Guardian extensions into `codex-guardian-v2`](https://github.com/openai/codex/pull/39474)**
   *Refactor:* Moves the Guardian thread lifecycle contributor and subagent-spawn context into a single extension, reducing redundant extension points.

7. **[#39452 – Remove the feature gate for async user messages](https://github.com/openai/codex/pull/39452)**
   *Feature:* `send_user_message_async` is now available to root agents whenever the model supports it, without requiring an explicit feature flag.

8. **[#39510 – Track built-in control tool calls in analytics](https://github.com/openai/codex/pull/39510)**
   *Enhancement:* Emits `codex_control_tool_call_event` for built-in tools (`request_user_input`, `update_plan`, etc.), enabling better telemetry.

9. **[#39514 – Use stored item types when materializing turn summaries](https://github.com/openai/codex/pull/39514)**
   *Fix:* Selects summary items using the materialized `item_type` column instead of parsing JSON, with fallback for older rows.

10. **[#39497 – Correct normalized dynamic tool coverage across response modes](https://github.com/openai/codex/pull/39497)**
    *Test/Refactor:* Validates normalized dynamic tool visibility for both Responses and Responses Lite, improving test coverage.

## Feature Request Clusters
- **MCP OAuth flexibility** – [#38944](https://github.com/openai/codex/issues/38944) requests a per-server trusted issuer override for remote MCP servers whose issuer metadata mismatches the authorization server.
- **Documentation accuracy** – [#36068](https://github.com/openai/codex/issues/36068) notes that `AGENTS.md` points to a non-existent source file path; users ask for updated references.
- **Multi-agent subagent versioning** – [#34301](https://github.com/openai/codex/issues/34301) (also a bug) highlights the need for better version compatibility reporting when spawning Luna agents.

## Developer Pain Points
- **Windows reliability** – Multiple issues (browser plugin init, Computer Use screenshot, thread archiving, MCP server spawning) show recurring platform-specific failures, especially around native host registration and process management.
- **macOS resource leaks** – Zombie processes and unbounded worker spawning (Computer Use, MCP) cause system lag, memory pressure, and crashes.
- **Authentication instability** – [#39170](https://github.com/openai/codex/issues/39170) reports the Windows app losing authentication within seconds after enabling Advanced Account Security; [#39555](https://github.com/openai/codex/issues/39555) describes skills being lost during auth verification 503s.
- **Scheduled task reliability** – [#38350](https://github.com/openai/codex/issues/38350) shows tasks randomly disabling themselves, undermining user trust in automations.
- **Performance degradation during thinking** – [#39450](https://github.com/openai/codex/issues/39450) reports severe mouse lag on Windows while Codex is processing, affecting interactive use.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-20

## Today's Update Brief

No new releases were published today. Community activity remains high, with 19 issues and 50 pull requests updated in the past 24 hours. The project continues to see concentrated work on the ACP (Agent Communication Protocol) server and agent-core-v2 architecture, alongside steady bug fixes across the TUI, VS Code plugin, and web UI.

---

## Hot Issues

1. **#1523 — Support ChatGPT Plus/Pro OAuth as a login provider**
   *Workflow:* Users with a ChatGPT Plus/Pro subscription want to use it directly from Kimi Code without manually configuring an API-key provider.
   *Impact:* For users who pay for ChatGPT, the current setup requires a separate billing/auth path, adding friction to adoption.
   *Community:* 4 👍, 2 comments. Open since July 9, last updated yesterday.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/1523)

2. **#3080 — Emit token usage events in stdout stream-json output**
   *Workflow:* When running `kimi` with `stream-json` output, there is no way to programmatically obtain token usage from stdout.
   *Impact:* Downstream tooling and CI pipelines cannot track token consumption without parsing stderr or reimplementing telemetry.
   *Community:* 0 👍, 1 comment. Filed yesterday.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3080)

3. **#2712 — TUI input box detached from view when scrolling up through long conversations**
   *Workflow:* In the TUI, when scrolling up to review earlier conversation history, the input box scrolls out of view, forcing users to scroll back down to type, then back up to continue reading.
   *Impact:* Frequent context switching breaks flow, especially during long agent sessions with extensive reasoning or multiple file diffs.
   *Community:* 5 👍, 1 comment. Open since August 7.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/2712)

4. **#3107 — ACP server: surface provider errors on session/prompt**
   *Workflow:* When the LLM provider returns a 4xx/5xx/rate-limit/connection-error, the ACP `session/prompt` call resolves with `{ stopReason: 'end_turn' }` and no JSON-RPC error, making it invisible to ACP clients.
   *Impact:* Custom ACP clients (e.g., JetBrains plugin) see a normal-looking "turn ended, no content" outcome and cannot distinguish provider failures from genuine empty responses.
   *Community:* 0 comments. Filed today.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3107)

5. **#3106 — ACP server: include full bash command in permission requests**
   *Workflow:* ACP `session/request_permission` for a Bash tool call only shows the first 50 characters of `args.command`, truncating the rest with `…`.
   *Impact:* Custom ACP clients cannot see the full command before deciding to allow or deny, undermining security.
   *Community:* 0 comments. Filed today.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3106)

6. **#3100 — Web UI: turn file-change cards show no stats/diff for Write calls and replace_all Edits**
   *Workflow:* In the web UI, per-turn "N files changed" summary cards fail to show `+x/-y` stats for Write calls, and clicking the card opens the raw file instead of a diff view.
   *Impact:* Developers cannot quickly assess the scope of file changes in the web interface.
   *Community:* 0 comments. Filed yesterday.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3100)

7. **#3090 — tool-select inert on K3: `dynamically_loaded_tools` capability not declared in the served model catalog**
   *Workflow:* The experimental `tool-select` flag (progressive tool disclosure) cannot take effect on K3 because the model catalog never declares the `select_tools`/`dynamically_loaded_tools` capability.
   *Impact:* MCP tool schemas are still sent in every request even with the flag enabled, defeating the purpose of the feature.
   *Community:* 0 comments. Filed yesterday.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3090)

8. **#3087 — Session permanently bricked after provider rejects an image with generic 400**
   *Workflow:* When a provider rejects an image request with HTTP 400 and a generic error message (`Invalid request.`), the media-strip recovery introduced in 0.23.5/0.24.0 does not engage because `isImageFormatError` only matches a fixed set of message patterns.
   *Impact:* The turn fails as non-recoverable, blocking the session.
   *Community:* 0 comments. Filed yesterday.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3087)

9. **#3081 — ACP: Grep/Glob blocked: "ACP runtime only supports interactive Bash tool processes"**
   *Workflow:* In an ACP session, the built-in Grep and Glob tools always fail with the error "ACP runtime only supports interactive Bash tool processes", while Read works fine.
   *Impact:* ACP clients (e.g., Zed) cannot use file search tools, limiting functionality.
   *Community:* 0 comments. Filed yesterday.
   [View issue](https://github.com/MoonshotAI/kimi-code/issues/3081)

10. **#3069 — ACP server: stdio MCP server without "type" throws "does not declare a runtime identity"**
    *Workflow:* Running `kimi-code acp` as an ACP agent from an ACP client fails when a stdio MCP server configuration does not include a `type` field.
    *Impact:* Users cannot connect MCP servers that omit the `type` field, which some server definitions do.
    *Community:* 0 comments. Filed yesterday.
    [View issue](https://github.com/MoonshotAI/kimi-code/issues/3069)

---

## Key PR Progress

1. **#3103 — Introduce agent-domain model/effect architecture in agent-core-v2**
   *Summary:* Refactors `agent-core-v2` to introduce a domain model and effect architecture, migrating todo/usage/token-counting subsystems. This is an internal architecture refactor aimed at clearer separation of concerns.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3103)

2. **#3102 — Fix transcript: fold mid-turn task notifications into current turn on cold rebuild**
   *Summary:* Fixes a cold rebuild bug where background-task completion notices opened a new turn, splitting the logical turn and reordering user/assistant messages.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3102)

3. **#3099 — Turn /tower into a mode parallel to plan mode**
   *Summary:* Adds the `tower` experimental mode as a parallel to plan mode, with its own feature flag registration. Overlaps with PR #3050 for flag wiring.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3099)

4. **#3002 — Add the unified MCP management plane**
   *Summary:* Adds a unified MCP management plane for agent-core-v2, following up on the v1 unification. Aims to centralize MCP server registration and configuration.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3002)

5. **#3096 — Guard Edit and Write against stale or unread files**
   *Summary:* Adds guards against stale writes: after an agent reads a file, any external change to the file on disk will now be detected before the agent overwrites it, preventing data loss.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3096)

6. **#3007 — Add a fork parameter to the Agent tool**
   *Summary:* Adds a `fork` parameter to the Agent tool, allowing subagents to be spawned with context from the current conversation rather than zero context, reducing re-briefing overhead.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3007)

7. **#3034 — Add remote control web tunnel**
   *Summary:* Adds client-side support for accessing a local Kimi web session through a remote control tunnel, enabling `kimi web` to be reached from outside the local machine.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3034)

8. **#3044 — Fix TUI: keep a held Up key from crossing into prompt history**
   *Summary:* Fixes a bug where holding ↑ to reach the top of a long unsent draft would fire key-repeat events that cross into prompt history, potentially dropping the unsent draft.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3044)

9. **#3032 — Fix VS Code: keep long-running chat streams alive**
   *Summary:* Fixes a VS Code extension bug where chat requests running longer than ten minutes were rejected by the generic Bridge timeout, even though the engine turn was still active.
   [View PR](https://github.com/MoonshotAI/kimi-code/pull/3032)

10. **#3098 — Fix VS Code: restore live context usage on v2**
    *Summary:* Fixes the VS Code extension where the context-window usage indicator could disappear or remain frozen after switching to the v2 engine.
    [View PR](https://github.com/MoonshotAI/kimi-code/pull/3098)

---

## Feature Request Clusters

**ACP protocol enhancements** (multiple issues today):
- Request to surface provider errors in ACP `session/prompt` (#3107)
- Request to include full bash commands in permission requests (#3106)
- Request to support Grep/Glob in ACP sessions (#3081)
- Request to handle stdio MCP servers without a `type` field (#3069)

**Web UI fixes** (multiple issues today):
- File-change cards showing no stats/diff for Write calls and replace_all Edits (#3100)
- Web UI failing to start on Windows (#3065)
- Blank session titles in web project session list (#3068)

**System prompt stability** (one detailed RFC):
- Request to make system-prompt renders deterministic by removing `new Date().toISOString()` from the prompt, which breaks server-side prefix caching (#3105)

---

## Developer Pain Points

- **ACP error handling**: Provider errors and truncated permission requests make it difficult for ACP clients to make informed decisions about safety and error recovery.
- **TUI scrolling**: The input box scrolling out of view during long conversations remains a persistent flow interruption, with 5 👍 on the feature request.
- **Model compatibility**: The `tool-select` feature is inert on K3, and the `[thinking]` effort setting resets to `high` after switching models, indicating configuration persistence issues.
- **Session recovery**: Media-strip recovery for image rejection fails on generic error messages, and sessions can become permanently bricked.
- **Task list display**: The TaskList component drops the newest tasks and reports the truncated count as the total, making it unreliable for tracking task progress.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-20

## Today's Update Brief
Activity remains high with 50 issues and 50 PRs updated in the last 24 hours. The community is largely focused on billing accuracy complaints for the Go subscription plan, alongside a cluster of V2 stability bugs (subagent tool failures, MCP rate-limiting, TUI paste issues). A notable contributor PR simplifies the interrupt continuation state machine, and a new feature PR introduces optimistic prompt rendering with client-minted IDs.

## Releases
No new versions published in the last 24 hours.

## Hot Issues

1. **#37852 – Aborted provider stream recorded as clean stop**
   When a provider stream terminates mid-generation without a finish reason or usage chunk, the assistant message is recorded with `finish=unknown`, zero tokens, and no text part. The agent loop exits normally, and no error is surfaced. 19 comments, 56 👍.
   [Link](https://github.com/anomalyco/opencode/issues/37852)

2. **#3028 – Switch model for all agents** (closed)
   User requests that switching the model in PLAN+BUILD agent set should apply to both modes, or at least suggest switching the second mode. 15 comments.
   [Link](https://github.com/anomalyco/opencode/issues/3028)

3. **#25848 – [FEATURE]: add session renaming**
   Request to rename sessions manually via `/rename` or `opencode session rename`. 13 comments.
   [Link](https://github.com/anomalyco/opencode/issues/25848)

4. **#13626 – [FEATURE]: Auto-sync projects in web UI from server**
   When opening OpenCode Web on a new device, projects should be fetched from the server automatically. 12 comments, 15 👍.
   [Link](https://github.com/anomalyco/opencode/issues/13626)

5. **#9296 – Experimental plan mode handover -> build uses plan agent's model** (closed)
   Planned with GPT-5.2, handover to build errored with GPT-5.2 instead of configured opus-4.5. 8 comments, 11 👍.
   [Link](https://github.com/anomalyco/opencode/issues/9296)

6. **#43416 – Usage-based billing doesn't match total subscription usage**
   User subscribed on Aug 17, used ~$9 in three days, but Go subscription shows only $20. 6 comments.
   [Link](https://github.com/anomalyco/opencode/issues/43416)

7. **#40253 – Deepseek V4 FLASH (New) OpenCode Go don't work** (closed)
   Deepseek V4 FLASH model returns an error requiring an opt-in for China-hosted models. 6 comments.
   [Link](https://github.com/anomalyco/opencode/issues/40253)

8. **#42089 – [2.0] v2 provider: HTTP 400 from Copilot model restarts active session** (closed)
   GitHub Copilot rejecting `gpt-5.6-sol` on `/chat/completions` causes the session to restart repeatedly, interrupting tool calls. 4 comments.
   [Link](https://github.com/anomalyco/opencode/issues/42089)

9. **#37047 – Compaction hallucinating project details after update** (closed)
   After upgrading to v1.18.0, compaction produces a completely hallucinated session summary unrelated to the original session. 4 comments.
   [Link](https://github.com/anomalyco/opencode/issues/37047)

10. **#43295 – Web UI V2 prompt controls overlap the send button on narrow displays**
    On narrow viewports, agent/model/variant controls render over the submit button, making it impossible to send. 4 comments.
    [Link](https://github.com/anomalyco/opencode/issues/43295)

## Key PR Progress

1. **#42810 – refactor(core): simplify interrupt continuation** (closed)
   Replaces the run coordinator's continuation state machine with a three-line post-cleanup check in `SessionExecution`.
   [Link](https://github.com/anomalyco/opencode/pull/42810)

2. **#43345 – refactor(session-ui): modularize session rendering**
   Moves `SessionDocument`, message, action, timeline projection, and reconciliation logic out of App into `@opencode-ai/session-ui`.
   [Link](https://github.com/anomalyco/opencode/pull/43345)

3. **#43520 – feat(client): optimistic prompt admission with client-minted IDs** (closed)
   Prompt sends become idempotent and render instantly on enter, using a client-minted inbox ID that reconciles with the server echo.
   [Link](https://github.com/anomalyco/opencode/pull/43520)

4. **#42681 – fix(desktop): show window on did-finish-load fallback for Wayland** (closed)
   Adds a Linux-only fallback that reveals the window on `did-finish-load` when Wayland's `window-show` event doesn't fire.
   [Link](https://github.com/anomalyco/opencode/pull/42681)

5. **#43539 – fix(app): show header for untitled sessions**
   The timeline header was gated on session title/parent ID, so newly persisted root sessions had no visible header.
   [Link](https://github.com/anomalyco/opencode/pull/43539)

6. **#43536 – Feat/capability abstraction**
   Adds a global capability-preference abstraction, initially used only for skills, keeping mutable user preferences out of Skill.Internal.
   [Link](https://github.com/anomalyco/opencode/pull/43536)

7. **#43523 – feat: better skill UX** (closed)
   Improves the skill UI experience, though the PR description is minimal.
   [Link](https://github.com/anomalyco/opencode/pull/43523)

8. **#43282 – fix(core): expose valid subagent IDs in the subagent tool**
   The `subagent` tool's `agent` field now lists valid agent IDs instead of a generic description, preventing invalid agent selection.
   [Link](https://github.com/anomalyco/opencode/pull/43282)

9. **#43460 – fix(core): decode plugin tool input with the schema's own instance**
   Fixes `Invalid tool input` errors when a config plugin bundles a different `effect` version than the server.
   [Link](https://github.com/anomalyco/opencode/pull/43460)

10. **#42485 – fix(tui): load local plugins via SEA-safe import**
    Switches the TUI plugin loader from raw `import()` to the existing `importModule` helper, fixing crashes in Node SEA binaries.
    [Link](https://github.com/anomalyco/opencode/pull/42485)

## Feature Request Clusters

**Session Management & UX**
- Manual session renaming (`/rename` or `opencode session rename`) – #25848
- Auto-sync projects from server to web UI on new device – #13626
- Keyboard shortcut to switch agents (e.g., build/plan) in the desktop app – #41742
- Sound or notification when agent requires user approval – #43493
- Configurable half-page scrolling in the diff viewer – #43267

**Billing & Usage Transparency**
- Multiple users report that the Go subscription quota is exhausted far faster than the client-recorded usage suggests, with requests for visible cache-read billing and a local cost meter that matches the server – #43416, #41976, #43424, #43409

**Platform & Integration**
- MERGE Gateway provider icon missing from the sprite – #42014
- Runtime base path support for reverse proxy deployments – #28326 (PR)
- Hot-reload of skills, commands, agents, and config on file change – #43538 (PR)

## Developer Pain Points

- **Silent failures**: Provider streams that abort without finish reason or usage data are recorded as clean stops, losing user work without any error log or notification (#37852). Compaction can also hallucinate project summaries (#37047).
- **Billing inaccuracies**: Multiple Go subscribers see the monthly quota exhausted in days while the local client shows only a fraction of that usage, with cache-read billing undocumented and invisible (#41976, #43416, #43424, #43409).
- **V2 stability issues**: Subagent tool calls fail when `prompt_cache_retention` is injected (#43367), Copilot model rejections cause session restarts (#42089), MCP connections rate-limit after idle periods (#43530), and the desktop app crash-loops on PTY session 404 and backend disconnect (#40755).
- **TUI and desktop UX quirks**: The "Type your own answer" field in the TUI doesn't accept Ctrl+V paste (#43516), pending permission prompts are lost after detach/reattach (#36604), and the desktop window doesn't show on Wayland without a fallback (#42681).

</details>