# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-16 00:22 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Daily Comparison Report — 2026-07-16

## 1. Daily Cross-Tool Overview
All four tracked AI CLI tools shipped new releases on this active day. Claude Code delivered a minor patch (v2.1.211), OpenAI Codex pushed three rapid Rust‑engine alphas, Kimi Code landed a patch (v0.24.2), and OpenCode released v1.18.2 with subagent and UI changes. Issue and PR volumes varied widely: Codex and OpenCode saw 50+ issues and 40–50+ pull requests each, Kimi Code focused heavily on PRs (50) with few issues (6), and Claude Code had 50 issues but only 4 PRs. Community attention concentrated on agent orchestration costs, desktop‑app reliability, context‑overflow handling, and plugin/ecosystem interoperability.

## 2. Activity Comparison

| Tool | Issues Updated | PRs Updated/Opened | Releases |
|------|----------------|---------------------|----------|
| Claude Code | 50 | 4 (all open) | v2.1.211 (minor) |
| OpenAI Codex | 50 | 43 | rust‑v0.145.0‑alpha.{12,13,14} (pre‑release) |
| Kimi Code | 6 | 50 | v0.24.2 (patch) |
| OpenCode | 50+ | 50+ | v1.18.2 (minor) |

*Counts are as reported in the 24‑hour digest window. “50+” reflects the digest stating “over 50”.*

## 3. Shared Feature Directions
Requirements appearing across multiple tool communities today:

- **Agent orchestration control** – Claude Code users report massive token‑cost overhead for spawned subagents and request agent‑to‑agent communication; Codex revealed a forced subagent‑model constraint (all subagents forced to GPT‑5.6 Sol); OpenCode added a configurable `subagent_depth` depth limit. All three communities are grappling with cost, model selection, and nesting governance in multi‑agent workflows.
- **Context management and compaction reliability** – Claude Code’s compaction drops the skills system reminder; OpenCode has overflow‑detection gaps and compaction‑failure hard‑blocks; Codex preserved paginated history for subagents to avoid context inconsistency. Keeping context within limits while preserving critical metadata is a cross‑tool concern.
- **Plugin and extension interoperability** – Claude Code PRs add a code‑quality pipeline plugin and an official‑marketplace‑only config; Codex now imports Cursor settings, MCP servers, and agents; OpenCode enables dynamic Effect tools from external plugins and normalizes provider message schemas; Kimi Code revives custom agent file support and works on ACP extension methods. Bridging to external tools and enabling custom plugins is a recurring theme.
- **Desktop‑app and IDE reliability** – Codex had multiple Windows‑specific crashes (ARM64, serialport lockups); OpenCode experienced a WSL notification server crash and UI layout regressions; Kimi Code users noted dark‑theme contrast issues and VS Code plugin incompatibility. Desktop integration stability remains a shared pain point.
- **Cross‑provider model compatibility** – Codex MCP tools break on custom providers due to namespace wrapping; Kimi Code fixed regressions for Anthropic‑compatible model detection; OpenCode normalized message content types for Cloudflare Workers AI. Consistent behaviour across different inference backends is actively being addressed.

## 4. Differentiation Analysis

- **Claude Code** – Focused on enterprise‑oriented account management (multi‑account switching), plugin marketplace security, and agent fan‑out cost visibility. The community is vocal about agent orchestration economics and desktop VS‑Code integration gaps.
- **OpenAI Codex** – Rapidly iterating on a Rust rewrite, with heavy Windows‑desktop fixes (ARM64 crashes, addon‑load lag), MCP capability propagation, and direct competitor imports (Cursor). Its activity reveals a push to stabilise a new engine while maintaining desktop and integration surface.
- **Kimi Code** – Despite low issue volume, the maintainers are closing a high number of PRs addressing silent crashes, auth bypasses, web‑UI regressions, and skill‑loading reliability. The tool appears focused on hardening fundamentals (diagnostics, security, web UI) rather than expanding feature breadth.
- **OpenCode** – Distinguishes itself through aggressive model‑agnostic abstraction (plugins for system prompt selection, dynamic tools) and deep attention to session integrity (overflow fixes, prompt‑leak isolation). Desktop UI changes caused immediate regressions, but fixes are being applied quickly.

## 5. Community Activity Notes
- **Most issues updated**: Claude Code and Codex tied at 50 each; OpenCode slightly higher with “over 50”.
- **Most PRs processed**: OpenCode (50+) and Kimi Code (50) led in PR volume, signalling intensive backend work. Codex was also high (43), driven by automated merges in the alpha cycle. Claude Code had only 4 PRs.
- **Release activity**: All tools published at least one release. Codex delivered three alphas within the window, indicating continuous integration of sandboxing and MCP fixes. OpenCode’s release was the most feature‑rich (subagent depth, shortcuts, reasoning defaults).
- **Maintainer responsiveness**: Kimi Code maintainers closed multiple critical security and crash PRs; Codex closed many sandbox/import PRs; OpenCode closed permisson‑scope, overflow, and notification fixes; Claude Code maintainers opened new PRs but none were merged in the window.

## 6. Evidence‑Backed Observations

1. **Agent spawning and cost management is an emerging cross‑tool problem** – Claude Code’s token‑prolific subagent startup, Codex’s forced homogeneous subagent model, and OpenCode’s newly introduced depth limit all indicate that scaling agent teams safely and affordably is an unresolved challenge.

2. **Desktop‑app stability regressions are acute in Codex and OpenCode** – Codex faces multiple Windows‑specific native‑addon and ARM64 crashes; OpenCode has WSL‑triggered crashes and UI element disappearance. These are not isolated bugs but a pattern of desktop‑surface fragility on non‑macOS platforms.

3. **Context‑window management continues to cause loss‑of‑state failures** – Claude Code loses the skills block upon compaction, OpenCode encounters overflow‑detection gaps that block sessions, and Codex had to explicitly preserve paginated subagent history. These failures undermine session trust across all tools.

4. **Import bridges and plugin ecosystems are being actively built** – Codex adding Cursor import, OpenCode’s dynamic tool registration, Claude Code’s plugin pipeline, and Kimi Code’s revived agent files all reflect a race to absorb users from neighbouring tools and make it easier to bring custom functionality in.

5. **All four projects are maintaining a daily release cadence** – Whether minor, patch, or pre‑release, every tool shipped today, underscoring an environment of rapid, continuous delivery. This pace suggests that evaluation of any one tool’s stability may require tracking several releases per week.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-16

## Today’s Update Brief
The community remains highly active with 50 issues updated and 4 new PRs opened. The standout item is a minor release (v2.1.211) that improves stream-json output for subagents and hardens permission-preview security. Agent orchestration bugs, multi-account management, and plugin quality-of-life improvements continue to drive discussion.

## Releases

- **v2.1.211**
  - **New flag:** `--forward-subagent-text` and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` env var include subagent text and thinking in stream-json output.
  - **Security fix:** Permission previews relayed to chat channels now properly neutralise bidirectional-override, zero-width, and look-alike characters.

## Hot Issues

1. **Multi-account management in Desktop** [#18435](https://github.com/anthropics/claude-code/issues/18435)
   *131 comments · 657 👍*
   Users with personal and work accounts must log out and back in to switch profiles. The lack of easy switching breaks workflows that span organisations, forcing constant re-authentication. Strong community demand indicates this is a top friction point.

2. **Personal GitHub repos invisible on Web** [#18467](https://github.com/anthropics/claude-code/issues/18467)
   *25 comments · 65 👍*
   The Claude GitHub App only surfaces organisation repositories; personal repos are missing. This blocks developers who primarily work in personal accounts and undermines the web-based code experience.

3. **VS Code extension ignores `remoteControlAtStartup`** [#62149](https://github.com/anthropics/claude-code/issues/62149)
   *8 comments · 5 👍*
   A long-standing bug (re-filed after auto-duplicate closures) prevents remote‑control sessions from activating automatically when VS Code starts. Users who rely on headless/remote workflows must manually enable the setting every time.

4. **Agent fan-out costs ~47k uncached tokens per small task** [#77834](https://github.com/anthropics/claude-code/issues/77834)
   *2 comments · 0 👍 (fresh issue)*
   Agent orchestration pays a huge startup-token penalty (uncached system prompts) for every background task, leading to multi‑million‑token bills for trivial operations. Developers consider this a cost‑efficiency bug rather than intended behaviour.

5. **Session instances are invisible — “kids in a trenchcoat” problem** [#77463](https://github.com/anthropics/claude-code/issues/77463)
   *2 comments · 0 👍*
   Multiple surfaces (VS Code, TUI, remote‑control) can fork/resume the same session with no identity tracking, causing stale writes, divergence, and premium‑rate token burn. Core‑session visibility is requested to avoid silent corruption.

6. **Vim mode: Escape in INSERT clears the entire prompt** [#69181](https://github.com/anthropics/claude-code/issues/69181)
   *2 comments · 5 👍*
   On the agent screen, pressing Escape to switch from INSERT to NORMAL mode wipes the prompt instead of just changing modes. Vim‑mode users lose their input, making the agent UI unusable.

7. **Compaction drops the entire Available Skills system‑reminder** [#74990](https://github.com/anthropics/claude-code/issues/74990)
   *2 comments · 1 👍*
   `/compact` and auto‑compaction remove the skills reminder block, causing the model to forget available skills. Running `/reload‑skills` reports “no changes” but restores the block — a confusing workaround.

8. **Chrome: allow screenshot save to local filesystem** [#66077](https://github.com/anthropics/claude-code/issues/66077)
   *4 comments · 11 👍*
   Claude‑in‑Chrome can capture screenshots but users cannot save them locally during a session. This hinders debugging and documentation workflows where screenshots need to be stored for later review.

9. **Spell checking cannot be turned off on Windows** [#58693](https://github.com/anthropics/claude-code/issues/58693)
   *7 comments · 3 👍*
   The desktop app forces spell‑check, making entered text visually noisy and hard to read. No toggle exists, frustrating users who prefer raw text or have non‑English content.

10. **Agent‑to‑agent native communication** [#77932](https://github.com/anthropics/claude-code/issues/77932)
    *1 comment · 0 👍 (new)*
    A feature request for direct session‑to‑session (agent‑to‑agent) communication without manual message passing. Reflects growing interest in multi‑agent orchestration patterns.

## Key PR Progress

*(Only 4 PRs were updated in the last 24 hours; all are open.)*

1. **Add code‑quality‑pipeline plugin** [#77916](https://github.com/anthropics/claude-code/pull/77916)
   A skills‑based plugin defining two quality gates: a per‑file pipeline (lint → format → static analysis → unit test) and a pre‑merge gate. It provides a structured workflow to enforce code quality before merging.

2. **Settings example: official marketplace only** [#77709](https://github.com/anthropics/claude-code/pull/77709)
   Adds a sample config that restricts plugin marketplaces to the official Anthropic registry only. Useful for enterprise teams enforcing supply‑chain security.

3. **Fix validate‑settings.sh false‑pass on missing frontmatter** [#77705](https://github.com/anthropics/claude-code/pull/77705)
   The plugin‑dev validation script emitted a raw Bash error and then falsely passed when a settings file had no YAML frontmatter. This fix correctly detects the missing markers.

4. **claude‑compare** [#77613](https://github.com/anthropics/claude-code/pull/77613)
   A new tool/plugin (details minimal) likely to enable side‑by‑side comparison of outputs or sessions.

## Feature Request Clusters

- **Account & profile management:** Multi‑account switching ([#18435](https://github.com/anthropics/claude-code/issues/18435)), sync of `~/.claude/` settings across machines ([#66303](https://github.com/anthropics/claude-code/issues/66303) – closed), and programmatic session renaming ([#62806](https://github.com/anthropics/claude-code/issues/62806) – closed).
- **Agent discoverability & hot‑reload:** Custom agents created during a session are not visible until restart ([#66327](https://github.com/anthropics/claude-code/issues/66327) – closed), and agent‑to‑agent communication remains a desired primitive ([#77932](https://github.com/anthropics/claude-code/issues/77932)).
- **Startup UI customisation:** Suppressing or theming the interactive welcome banner (“Feature of the week” etc.) appears in [#65788](https://github.com/anthropics/claude-code/issues/65788) (closed).
- **Browser integration:** Saving screenshots locally in Claude‑in‑Chrome ([#66077](https://github.com/anthropics/claude-code/issues/66077)) continues to attract votes.

## Developer Pain Points

- **Agent cost and spawning behaviour:** Multiple reports (e.g., [#77834](https://github.com/anthropics/claude-code/issues/77834), [#65920](https://github.com/anthropics/claude-code/issues/659

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-07-16**

---

### 1. Today’s Update Brief
A triple release of alpha builds for the Rust-based Codex engine (`v0.145.0-alpha.12/13/14`) landed in the past 24 hours, signalling aggressive iteration. The repository saw **50 issues updated** and **43 pull requests processed**, dominated by automated merges that address Windows sandboxing, MCP capability propagation, subagent history, and session imports. Community attention concentrated on the forced subagent model constraint in GPT‑5.6 Sol and multiple Windows desktop crashes/performance regressions.

---

### 2. Releases
- **rust-v0.145.0-alpha.14** — Latest in a rapid series (alpha.12, alpha.13, alpha.14). No published changelog, but the neighbouring PRs suggest fixes and enhancements around sandbox metadata, MCP root propagation, and executor plugin concurrency.
- **rust-v0.145.0-alpha.13** — Intermediate alpha published alongside the others.
- **rust-v0.145.0-alpha.12** — First of the three alpha releases within the window.

*(All releases are pre-release alphas for the Rust codebase; production users are still on earlier stable CLI lines.)*

---

### 3. Hot Issues

1. **[#31814 [CLOSED] GPT-5.6 Sol forces all subagents to also be Sol instances](https://github.com/openai/codex/issues/31814)**
   *Affected workflow*: Multi-agent tasks where a GPT‑5.6 Sol main agent must spawn specialist subagents. The model metadata hard-codes `multi_agent_version = "v2"`, and MultiAgent V2 defaults `hide_spawn_agent_metadata` to `true`, which silently strips the ability to select other models for subagents.
   *Impact*: Users cannot run heterogeneous agent teams; every subagent runs as Sol, increasing cost and reducing task fit.
   *Community reaction*: Massive engagement — 79 comments, 153 👍. Marked as resolved, but many report the underlying model-metadata coupling remains.

2. **[#33381 [OPEN] Windows ARM64 app crash-loops on launch – serialport addon delay-load 0xC06D007F](https://github.com/openai/codex/issues/33381)**
   *Workflow*: Desktop app on Windows ARM64 surfaces the window for ~15 seconds then exits, producing a minidump each time.
   *Impact*: ARM64 users are completely blocked from using the desktop app.
   *Reaction*: 35 comments, 24 👍; users share crash dumps and confirm clean reinstall doesn’t help.

3. **[#33375 [OPEN] Repeated serialport.node delay-load failures cause severe UI lag on Windows](https://github.com/openai/codex/issues/33375)**
   *Workflow*: The Windows app becomes extremely laggy while repeatedly attempting to load the `serialport.node` native addon (which is not present/valid).
   *Impact*: App usability degrades sharply after the 26.707.9981.0 update.
   *Reaction*: 21 comments, 13 👍; users tie the issue to the same native dependency that crashes ARM64.

4. **[#23198 [OPEN] Codex Desktop on Windows is extremely slow even when the machine is idle](https://github.com/openai/codex/issues/23198)**
   *Workflow*: Normal app interaction (prompt input, response rendering) feels sluggish independently of system load.
   *Impact*: Persistent friction for Windows desktop users.
   *Reaction*: 16 comments, 44 👍; long-running thread with no resolution.

5. **[#28969 [OPEN] Add setting to disable the 60‑second auto‑resolve for questions](https://github.com/openai/codex/issues/28969)**
   *Workflow*: When the CLI asks a follow-up question, it auto-resolves with a default after 60 seconds, interrupting unattended sessions.
   *Impact*: Long-running batch jobs and automated pipelines yield undesired behavior.
   *Reaction*: 36 comments, 124 👍; strong demand for a configurable timeout.

6. **[#27284 [OPEN] Codex App SSH remote project shows “No chats” while threads exist in state DB](https://github.com/openai/codex/issues/27284)**
   *Workflow*: Remote SSH projects opened through the desktop app lose visibility of existing chat sessions, even though the state database retains them.
   *Impact*: Users cannot resume previous remote conversations from the sidebar.
   *Reaction*: 10 comments, 4 👍; confirmed across macOS and Linux remotes.

7. **[#32653 [OPEN] App crashes due to missing tool call result](https://github.com/openai/codex/issues/32653)**
   *Workflow*: After an update, an MCP tool call that fails to return a result causes the whole desktop app to crash with an error dialog.
   *Impact*: Sessions using MCP tools are unstable; any tool failure aborts the entire app.
   *Reaction*: 7 comments, 0 👍 but critical reliability regression.

8. **[#31826 [OPEN] Codex states a new version is required even when on the most recent version](https://github.com/openai/codex/issues/31826)**
   *Workflow*: The CLI erroneously prompts users to upgrade, despite running the latest release.
   *Impact*: Confusion and unnecessary support tickets.
   *Reaction*: 10 comments, 4 👍; affects users of `codex-cli 0.143.0` with GPT‑5.6‑Sol.

9. **[#23186 [OPEN] MCP tools wrapped in `type:"namespace"` break custom/local providers using strict tool schemas](https://github.com/openai/codex/issues/23186)**
   *Workflow*: When using a custom model provider with `wire_api = "responses"`, Codex wraps MCP tools inside a proprietary namespace envelope that the backend cannot unwrap.
   *Impact*: MCP is effectively unusable with self-hosted or third-party inference servers.
   *Reaction*: 2 comments but 14 👍; significant for advanced users bridging to local LLMs.

10. **[#33450 [OPEN] Windows app spawns 12–13 git.exe processes per second and recreates invalid empty .git directories](https://github.com/openai/codex/issues/33450)**
    *Workflow*: The desktop app enters a busy-loop creating thousands of `git.exe` instances and broken `.git` folders.
    *Impact*: High CPU usage and potential filesystem pollution; newly reported.
    *Reaction*: 1 comment, 1 👍; immediate attention due to severity.

---

### 4. Key PR Progress

1. **[#31781 [OPEN] Bound executor-controlled HTTP response buffering](https://github.com/openai/codex/pull/31781)**
   Imposes a total byte limit on streamed executor responses, preventing a remote peer from storing excessive data in the app-server. A security hardening currently under code review.

2. **[#33444 [CLOSED] Add external agent memory migration](https://github.com/openai/codex/pull/33444)**
   Adds a feature-gated `MEMORY` migration to the app-server protocol, copying project-specific Markdown memory files into the Codex memory extension workspace while preserving scope and detecting changes.

3. **[#33426 [CLOSED] Add Cursor support to setup import](https://github.com/openai/codex/pull/33426)**
   Extends the `/import` flow to detect and import Cursor settings, sandbox permissions, MCP servers, hooks, agents, and recent chat sessions, simplifying migration from Cursor.

4. **[#33427 [CLOSED] Propagate deferred environment capability roots to MCP](https://github.com/openai/codex/pull/33427)**
   Allows environments that load asynchronously to register capability roots on startup, then reliably supplies those roots to MCP servers, fixing a race where MCP tools lacked file access.

5. **[#33432 [CLOSED] Preserve paginated history for spawned subagents](https://github.com/openai/codex/pull/33432)**
   Ensures subagents inherit paginated history mode from the parent and properly carry over model context, addressing inconsistencies when forking threads.

6. **[#33445 [CLOSED] Select the elevated Windows sandbox for network proxies](https://github.com/openai/codex/pull

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest – 2026-07-16

## Today’s Update Brief
A patch release (`0.24.2`) landed with a cross-engine lifecycle alignment fix. Issue activity was light at 6 items, while the PR pipeline remained very active with 50 PRs updated, many closing critical bugs around crash diagnostics, auth bypass, and web UI regressions. The highlight is a strong push on stability, observability, and protocol coverage.

## Releases
**[@moonshot-ai/kimi-code@0.24.2](https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.24.2)**
Patch release. Aligned the `print_background_m` lifecycle across engines so that background messages are consistently printed in print mode ([#1704](https://github.com/MoonshotAI/kimi-code/pull/1704)).

## Hot Issues
1. **[#1653](https://github.com/MoonshotAI/kimi-code/issues/1653) [CLOSED] Project-level Skill not auto-loaded**
   A user reported that a skill placed under `.kimi/skills/guizang-ppt-skill/` did not appear in the Available Skills list on Windows 11 with version 0.23.6. The issue was resolved after maintainer review.

2. **[#1584](https://github.com/MoonshotAI/kimi-code/issues/1584) [CLOSED] Goal state lost after web refresh**
   Refreshing the browser would lose the current goal state until the next goal update, making long-running sessions frustrating. Addressed and closed.

3. **[#1726](https://github.com/MoonshotAI/kimi-code/issues/1726) [CLOSED] “closed”**
   A bug report that was immediately closed without further details; likely a duplicate or invalid submission.

4. **[#1736](https://github.com/MoonshotAI/kimi-code/issues/1736) [OPEN] Inline multi-skill activation in TUI**
   Request to support `/skill:…` commands anywhere in a prompt, not only at the very beginning. This would allow blending skills in natural multi-step conversations.

5. **[#1725](https://github.com/MoonshotAI/kimi-code/issues/1725) [OPEN] VS Code plugin compatibility**
   User states that the new Kimi Code (v0.24.1) is incompatible with the existing VS Code extension, questioning whether the extension is still maintained. No response yet.

6. **[#1721](https://github.com/MoonshotAI/kimi-code/issues/1721) [OPEN] Approve button hard to see on dark themes**
   The approve button lacks sufficient contrast on dark backgrounds, impacting usability in dark-themed setups (WSL, Windows).

## Key PR Progress
1. **[#1758](https://github.com/MoonshotAI/kimi-code/pull/1758) [CLOSED] Fix silent-exit vectors for unhandled rejections**
   Closed two paths where the CLI could exit without any log, mid-stream or idle, resolving a user report where the CLI died twice in 80 minutes with zero diagnostics.

2. **[#1757](https://github.com/MoonshotAI/kimi-code/pull/1757) [CLOSED] Preserve crash error in diagnostic logs**
   Ensures uncaughtException/unhandledRejection errors are properly logged before process.exit, so users and maintainers can actually see what went wrong.

3. **[#1746](https://github.com/MoonshotAI/kimi-code/pull/1746) [CLOSED] Align Anthropic-compatible model capabilities**
   Fixed a regression where custom-named Anthropic-compatible models were treated as legacy budget-thinking Claude models, breaking proper feature detection like `max_tokens` mapping.

4. **[#1753](https://github.com/MoonshotAI/kimi-code/pull/1753) [CLOSED] Close auth bypass via percent-encoded API paths**
   Security fix: a percent-encoded API path could bypass bearer-token authentication because the auth hook checked the raw URL. Routed matching now uses the decoded path.

5. **[#1744](https://github.com/MoonshotAI/kimi-code/pull/1744) [CLOSED] Web confirm dialogs now respond to Enter and await async actions**
   Fixed modal dialogs (e.g., archive session) so that pressing Enter confirms and the UI waits for async operations, preventing premature closure.

6. **[#1751](https://github.com/MoonshotAI/kimi-code/pull/1751) [CLOSED] Refactor session busy from agent activity**
   Removed a redundant five-state machine for session activity in v2 agent core; the session busy state is now derived directly from agent activity, reducing duplication and fixing stream regressions.

7. **[#1731](https://github.com/MoonshotAI/kimi-code/pull/1731) [CLOSED] Web: allow attaching any file type & fix CSP for remote access**
   Enabled file upload of any type and corrected Content Security Policy when the server is bound to a non-loopback address, solving issues for remote/SSH deployments.

8. **[#1686](https://github.com/MoonshotAI/kimi-code/pull/1686) [OPEN] ACP: /undo, session fork, close, steer extension methods**
   Adds undo, ephemeral fork for side conversations, and message steering into a running turn for ACP clients, leveraging existing SDK/kernel support.

9. **[#818](https://github.com/MoonshotAI/kimi-code/pull/818) [OPEN] Worktree flag (`-w, --worktree`) for isolated sessions**
   Brings back the worktree feature from legacy Kimi CLI, allowing multiple isolated sessions on the same repo without file conflicts.

10. **[#1735](https://github.com/MoonshotAI/kimi-code/pull/1735) [OPEN] Support custom agent files**
    Enables users to define custom system prompts and tool restrictions for agents, reviving previously removed `--agent`/`--agent-file` functionality.

## Feature Request Clusters
- **Skill system improvements**: users want skills to auto-load reliably ([#1653](https://github.com/MoonshotAI/kimi-code/issues/1653)) and to support inline multi-skill activation in a single TUI prompt ([#1736](https://github.com/MoonshotAI/kimi-code/issues/1736)).
- **IDE integration**: dissatisfaction over the current VS Code extension not working with the new Kimi Code ([#1725](https://github.com/MoonshotAI/kimi-code/issues/1725)) suggests a demand for modern editor support.
- **Dark theme accessibility**: contrast issues for interactive buttons ([#1721](https://github.com/MoonshotAI/kimi-code/issues/1721)) indicate the need for theme-aware styling.

## Developer Pain Points
- **Silent crashes and zero diagnostics** were a recurring pain until multiple fixes ([#1757](https://github.com/MoonshotAI/kimi-code/pull/1757), [#1758](https://github.com/MoonshotAI/kimi-code/pull/1758)) landed today; the absence of error logs made debugging impossible for both users and maintainers.
- **Web UI state loss on refresh** ([#1584](https://github.com/MoonshotAI/kimi-code/issues/1584)) and duplicate agent rows ([#1754](https://github.com/MoonshotAI/kimi-code/pull/1754)) eroded trust in long-running sessions.
- **Auth configuration sharp edges**: the auth bypass via percent-encoding ([#1753](https://github.com/MoonshotAI/kimi-code/pull/1753)) and a prior ACP auth issue for API-key users ([#934](https://github.com/MoonshotAI/kimi-code/pull/934)) highlight the complexity of supporting multiple credential types consistently.
- **Ecosystem fragmentation**: the VS Code plugin complaint and the request for custom agents reveal a community that wants the tool to fit into their existing workflows rather than requiring a monolithic new client.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-16

## Today's Update Brief
OpenCode shipped **v1.18.2** with core subagent depth limiting, improved Meta model reasoning defaults, and a new keyboard shortcut for Desktop. The community is highly active, with over 50 issues and 50 pull requests updated in the last 24 hours, many centred on regressions introduced by recent Desktop layout changes and deep compaction/overflow friction.

## Releases

**v1.18.2**
*Core*
- Subagents no longer launch nested subagents by default; a new configurable `subagent_depth` limit controls when nesting is allowed.
- Improved the default reasoning depth for Meta models.

*Desktop*
- Added `Mod+N` as an additional shortcut for opening a new tab.

## Hot Issues
1. [#36936 Desktop: new tab layout, titles don’t fit anymore](https://github.com/anomalyco/opencode/issues/36936) – The new tab design renders session titles invisible for many users, making it impossible to distinguish sessions. Received 14 comments and 11 👍, with several users confirming that reverting to 1.17 fixes the problem.

2. [#36997 Desktop v1.18.1 new layout hides Plan/Build agent switching UI](https://github.com/anomalyco/opencode/issues/36997) – The agent mode toggle (Plan/Build) completely disappeared after updating, leaving users unable to see or change the active agent. This created significant workflow disruption and accumulative confusion.

3. [#25239 Expose GitHub Copilot “Auto” option in model selector](https://github.com/anomalyco/opencode/issues/25239) – A long-standing feature request (19 comments, 14 👍) to support Copilot’s automatic model selection directly in the UI rather than requiring manual model picking. Activity remains persistent.

4. [#36942 Vertical tabs](https://github.com/anomalyco/opencode/issues/36942) – With the forced horizontal tab layout, users can only see a few sessions at a time. Request for vertical tabs gained 5 👍 and echoes broader complaints about the new UI.

5. [#21227 Display image attachments from tool results in chat UI](https://github.com/anomalyco/opencode/issues/21227) – Tool returns (e.g., `webfetch` or MCP image content) are not rendered inline, forcing users to open external files. This limits the assistant’s ability to describe images naturally (7 👍).

6. [#35587 Prompt leaks between sessions](https://github.com/anomalyco/opencode/issues/35587) – Users report that prompts from one session appear in the command history of another independent session, raising concerns about context isolation and privacy.

7. [#37165 `ctrl+p` shortcut completely unresponsive on Windows (v1.18.2)](https://github.com/anomalyco/opencode/issues/37165) – A regression in the latest release breaks the default `command_list` shortcut, confirmed on Windows with a working previous version (v1.17.20).

8. [#37171 Desktop crashes on restart: “Notification server not found: wsl:Ubuntu”](https://github.com/anomalyco/opencode/issues/37171) – A hard crash occurs under WSL when the notification server is not registered before the renderer initialises. The issue blocks restarts entirely for affected users.

9. [#32656 Output‑budget reservation capped at 20K for limit.input models, risking overflow](https://github.com/anomalyco/opencode/issues/32656) – The `usable()` function caps the output budget too low for models with an explicit `limit.input`, causing compaction to under‑reserve and potentially leading to silent overflow when the output is large.

10. [#17340 Session compaction fails with “context exceeds model limit” error](https://github.com/anomalyco/opencode/issues/17340) – Even after stripping media, sessions sometimes cannot compact because the raw context exceeds the model’s limit, blocking the session permanently. Observed on 128k models with ~145k tokens.

## Key PR Progress
1. [#37182 fix(webfetch): scope always‑allow to domain instead of all URLs](https://github.com/anomalyco/opencode/pull/37182) (closed) – Changes the “always allow” permission from a wildcard `*` to the current origin, preventing accidental global permission grants.

2. [#37194 fix(session): resolve session overflow detection timing gaps](https://github.com/anomalyco/opencode/pull/37194) – A comprehensive fix that addresses `isOverflow()` checking only previous-step tokens, the 20K output‑budget cap, missing post‑tool‑output overflow checks, and silent exits when compaction itself fails.

3. [#37141 feat(core): normalize tool and attachment images at settlement](https://github.com/anomalyco/opencode/pull/37141) – Resizes inline base64 images from all sources (plugin tools, MCP, user attachments) during settlement, preventing unbounded request body growth that causes 413 errors and session stalls.

4. [#37181 refactor(core): select system prompts through plugins](https://github.com/anomalyco/opencode/pull/37181) (closed) – Makes the default runner prompt model‑agnostic and shifts OpenAI, Anthropic, Meta, etc. prompt selection into granular plugins, consolidating GPT/Codex and restoring the V1 Muse Spark prompt.

5. [#37190 fix(notification): handle unavailable server during initialization](https://github.com/anomalyco/opencode/pull/37190) – Adds a fallback notification state so the renderer can load even when the WSL notification server is not yet registered, fixing crash #37171.

6. [#37192 feat(plugin): support dynamic Effect tools](https://github.com/anomalyco/opencode/pull/37192) – Allows external V2 Effect plugins to register dynamic tools without importing the host’s opaque `Tool.make`, lowering the barrier for third‑party tool contributions.

7. [#36850 fix(opencode): normalize cloudflare-workers-ai mixed message content types](https://github.com/anomalyco/opencode/pull/36850) – Cloudflare Workers AI rejects requests with inconsistent message content types; this PR normalises them so provider integration works reliably.

8. [#36752 fix(opencode): read cache write tokens from raw usage](https://github.com/anomalyco/opencode/pull/36752) – Anthropic models behind an OpenAI‑compatible gateway were reporting `cache.write: 0`, leading to billing inaccuracies. The PR corrects the token source.

9. [#35867 fix(skill): correct MCP local server env key to environment](https://github.com/anomalyco/opencode/pull/35867) – The built‑in `customize-opencode` skill used `"env"` instead of `"environment"` for MCP local server configuration, breaking copy‑paste onboarding for users.

10. [#37197 fix(nix): restore desktop integration](https://github.com/anomalyco/opencode/pull/37197) – Re‑enables Linux desktop entry, hicolor icons, and generated asset

</details>