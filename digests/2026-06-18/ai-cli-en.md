# AI CLI Tools Community Digest 2026-06-18

> Generated: 2026-06-18 00:39 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-18

## 1. Daily Cross-Tool Overview

Today saw a mix of patch releases and feature work across the six tracked AI CLI tools, with **OpenCode**, **Qwen Code**, and **GitHub Copilot CLI** each shipping new versions, while **Kimi Code CLI** had no releases or merged PRs. Community activity remained high on **OpenCode** (50 issues and 50 PRs updated) and **Qwen Code** (49 issues, 50 PRs), whereas **Claude Code** and **Gemini CLI** saw concentrated attention on specific regressions and hangs. Permission bypass regressions, agent stability, and MCP extensibility emerged as cross-cutting concerns, while multi-agent coordination features advanced notably in the Codex and OpenCode ecosystems.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today |
|------|----------------------|-------------------|---------------|
| Claude Code | 10 notable (total N/S) | 5 | v2.1.181 |
| OpenAI Codex | 30+ | 20+ | Two Rust alphas |
| Gemini CLI | ~50 items (issues+PRs) | ~10 key PRs highlighted | v0.48.0-preview.0 |
| GitHub Copilot CLI | 34 | 0 | v1.0.64-0 |
| Kimi Code CLI | 2 (new, no discussion) | 0 | None |
| OpenCode | 50 | 50 | v1.17.8 |
| Qwen Code | 49 | 50 | v0.18.1 → v0.18.3 (4 releases) |

*Note: Counts reflect what each digest explicitly reported; Claude Code and Gemini CLI did not provide separate totals for issues and PRs.*

## 3. Shared Feature Directions

- **Permission and Sandbox Control** – Users across tools request finer-grained, configurable permission models:
  - Claude Code: server-side feature flags override local bypass settings (#62205); mobile Remote Control ignores `--dangerously-skip-permissions` (#29214).
  - OpenAI Codex: false‑positive safety checks block routine DevOps (#28015); sandbox network access broken on Linux (#5041).
  - GitHub Copilot CLI: `preToolUse` silent rewrite still shows confirmations (#2643); whitelist for read-only tools (#1973).
  - OpenCode: sandboxing agent terminal to current directory (#2242).

- **Multi-Agent Coordination and Delegation** – Active feature requests and PRs for inter-agent communication and orchestration:
  - Claude Code: inter-session communication (#24798), cross-machine agent protocol (#28300), per-teammate configs (#23669).
  - OpenAI Codex: per-turn multi-agent delegation PR (#28685), thread-level multi-agent mode PR (#28792).
  - Gemini CLI: subagent hangs and false success masking (#22323, #21409).
  - OpenCode: multi-agent orchestration in isolated workspaces (#17994).
  - GitHub Copilot CLI: sub-agents lose MCP tools (#3812).

- **MCP & Plugin Ecosystem** – Extensibility through MCP servers and plugins is a common focus:
  - Claude Code: Slack connector single‑workspace limitation (#44243); MCP OAuth constraints (#69205).
  - OpenAI Codex: MCP trust identity PR (#27132), plugin namespace skill loading PR (#28608).
  - Gemini CLI: MCP charset encoding fix (#27771), untrusted wrapping for MCP resources (#27979).
  - GitHub Copilot CLI: `/mcp` registry browsing added (v1.0.64-0); plugins can provide MCP servers.
  - OpenCode: auto-discover models from OpenAI-compatible providers PR (#32731), LAN provider discovery PR (#27554).
  - Qwen Code: QQ Bot channel adapter PR (#5202), DeepSeek V4 preset correction (#5268).

- **Authentication and Session Stability** – Login loops, token expiry, and plan availability are

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-18

## 1. Today’s Update Brief

A new release (v2.1.181) shipped with prompt-based config setting and Apple Events sandbox opt-in, while community attention remains fixed on a critical hanging bug (#26224) and unresolved permission‑bypass regressions (#62205). Five pull requests were updated, including a frontend‑design skill refresh and fixes for code‑review and Docker setup.

## 2. Releases

**v2.1.181** — [Full release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.181)
Key changes:
- Added `/config key=value` syntax to set any setting from the prompt (works in interactive, `-p`, and Remote Control modes)
- Added `sandbox.allowAppleEvents` opt‑in setting that lets sandboxed commands send Apple Events on macOS
- Added `CLAUDE_CLIENT_P`… (truncated in source data)

## 3. Hot Issues (10 noteworthy)

### #26224 — [BUG] Claude Code is hanging / freezing for 5–20+ minutes
**Workflow affected:** Any interactive session; keyboard and UI become unresponsive.
**Impact:** 118 comments, 143 👍. The most active issue on the repo. User reports it occurs “on heaps of prompts” with no clear trigger.
**Community reaction:** High frustration; multiple users confirm reproduction across platforms. Maintainers have not yet posted a root cause.
[Issue link](https://github.com/anthropics/claude-code/issues/26224)

### #24798 — [Feature] Inter‑session communication for multi‑Claude workflows
**Workflow affected:** Users running multiple Claude Code sessions in parallel on the same project.
**Impact:** 35 comments, 16 👍. Request for a direct protocol to pass results and context between siloed sessions.
**Community reaction:** Strong support; users describe complex build pipelines that require coordination across sessions.
[Issue link](https://github.com/anthropics/claude-code/issues/24798)

### #29214 — [BUG] Remote Control: mobile app shows permission prompts despite `--dangerously-skip-permissions`
**Workflow affected:** Remote Control sessions where the user expects fully bypassed permission prompts on the mobile client.
**Impact:** 30 comments, 76 👍. The desktop‑side flag is not respected by the mobile interface, forcing repeated approvals.
**Community reaction:** Several users confirm the bug; one called it “a deal‑breaker for remote workflows.”
[Issue link](https://github.com/anthropics/claude-code/issues/29214)

### #44243 — [Feature] Support multiple Slack workspaces in the built‑in Slack connector
**Workflow affected:** Teams or consultants working across multiple Slack organizations.
**Impact:** 27 comments, 57 👍. The built‑in MCP connector currently supports only one workspace.
**Community reaction:** Frequent +1s; users describe workarounds like running multiple Claude instances.
[Issue link](https://github.com/anthropics/claude-code/issues/44243)

### #28300 — [Feature] Multi‑agent collaboration across machines (Agent‑to‑Agent protocol)
**Workflow affected:** Distributed multi‑agent systems where agents run on different hosts.
**Impact:** 26 comments. Request for a cross‑machine agent discovery and communication protocol.
**Community reaction:** Backed by a detailed problem statement; seen as a natural extension of the existing agent teams feature.
[Issue link](https://github.com/anthropics/claude-code/issues/28300)

### #23669 — [Feature] Agent Teams: support per‑teammate working directory, CLAUDE.md, and MCP configs
**Workflow affected:** Agent teams working across multiple repositories (e.g., microservices).
**Impact:** 24 comments, 28 👍. Teammates currently inherit the team lead’s entire configuration.
**Community reaction:** Users want each agent to operate in its own repo context with its own CLAUDE.md and MCP servers.
[Issue link](https://github.com/anthropics/claude-code/issues/23669)

### #61993 — [BUG] Sub‑agents cannot spawn other sub‑agents (Task/Agent primitive not exposed in nested contexts)
**Workflow affected:** Deeply nested agent workflows (e.g., a manager agent that spawns sub‑managers).
**Impact:** 18 comments. On Windows, the `Task`/`Agent` tool is unavailable after the first spawning level.
**Community reaction:** Users report they must flatten all sub‑agent trees, reducing parallelism.
[Issue link](https://github.com/anthropics/claude-code/issues/61993)

### #65514 — [BUG] Usage credits required for 1M context – Pro plan blocked despite 17% usage
**Workflow affected:** Users on the Pro plan who attempt to use the 1M context window.
**Impact:** 18 comments. Even with ample remaining usage credits, the system demands additional credits for extended context.
**Community reaction:** Marked as duplicate of related billing issues; users are confused about the credit policy.
[Issue link](https://github.com/anthropics/claude-code/issues/65514)

### #68721 — [BUG] 2.1.178: native team‑management tools TeamCreate / TeamDelete no longer surfaced (regression from 2.1.177)
**Workflow affected:** Users who manage agent teams via the built‑in `TeamCreate`/`TeamDelete` tools.
**Impact:** 6 comments, 4 👍. Marked as regression; the tools simply do not appear in the tool list after the update.
**Community reaction:** Users blocked from managing teams programmatically; easy to reproduce.
[Issue link](https://github.com/anthropics/claude-code/issues/68721)

### #62205 — [BUG] Root cause identified: GrowthBook A/B flags silently override `defaultMode: bypassPermissions` on macOS Desktop
**Workflow affected:** Users who configure `permissions.defaultMode: bypassPermissions` but still see “Accept Edits” prompts.
**Impact:** 6 comments, 1 👍. Detailed RCA shows that server‑side feature flags (`tengu_permission_friction`, `tengu_quill_harbor`) override local config via periodic sync.
**Community reaction:** Called “the real root cause” for a cluster of similar reports.
[Issue link](https://github.com/anthropics/claude-code/issues/62205)

## 4. Key PR Progress (all 5 PRs updated in the last 24h)

### #69226 — Update frontend‑design skill
Bumps plugin version to 1.1.0 with several improvements.
[PR link](https://github.com/anthropics/claude-code/pull/69226)

### #19867 — Fix code‑review: allow re‑reviews when new commits are pushed
Adds smarter skip logic and documents a `--force` flag to bypass the check. Addresses a common workflow blocker where reviews were skipped after new commits.
[PR link](https://github.com/anthropics/claude-code/pull/19867)

### #33443 — Fix Dockerfile to use native installer
Updates `.devcontainer/Dockerfile` to use Node 24.14 and the native installer instead of the deprecated npm installation.
[PR link](https://github.com/anthropics/claude-code/pull/33443)

### #60427 — Docs: use standard GitHub capitalization in README
Closed. A small documentation fix correcting product name casing.
[PR link](https://github.com/anthropics/claude-code/pull/60427)

### #60732 — Docs: polish plugins README wording
Closed. Tweaks one sentence for natural readability.
[PR link](https://github.com/anthropics/claude-code/pull/60732)

## 5. Feature Request Clusters

- **Multi‑session & multi‑agent coordination** — Several requests ask for better communication between independent Claude Code sessions (#24798, #28300) and fine‑grained control over agent team setups (#23669, #67485). Users want agents to be aware of each other’s state and outputs, especially when working across repositories or machines.

- **MCP & integration improvements** — The built‑in Slack connector’s single‑workspace limitation (#44243) and OAuth constraints for remote MCP servers (#69205) are recurring themes. Users operating in multi‑workspace or SSH environments find the current MCP ecosystem inflexible.

- **Project context & CLAUDE.md** — Users request the ability to switch project context mid‑session (#50302) and persistent project memory for the browser version (#67671). These mirror the existing CLAUDE.md workflow but ask for a more dynamic, session‑spanning mechanism.

- **UI/UX enhancements** — Small quality‑of‑life requests include animating the project name chip while idle (#62387), not stealing focus with `AskUserQuestion` (#59336), and improving visibility into background subagent activity (#67485). Accessibility concerns also appear, such as hardcoded colors in the thinking indicator (#69229).

## 6. Developer Pain Points

- **Hanging/freezing (issue #26224)** remains the most upvoted open bug. Users report unpredictable stalls lasting 5–20 minutes, with no acknowledged root cause yet.

- **Permission bypass regressions** — Despite the `--dangerously-skip-permissions` flag and local config, server‑side feature flags (#62205) and the Remote Control mobile client (#29214) override the user’s intent. This erodes trust in the permission configuration system.

- **Agent limitation chain** — Sub‑agents cannot spawn further sub‑agents (#61993), agent team management tools regressed (#68721), and the in‑process backend can replay task assignments (#68336). These issues collectively constrain complex multi‑agent workflows.

- **Environment pollution** — The VS Code extension sets `NoDefaultCurrentDirectoryInExePath=1` globally, affecting other extensions (#69227). This is a Windows‑specific but disruptive side effect.

- **Billing & credits confusion** — The 1M context window blocks Pro users even when they have usage credits remaining (#65514). Multiple duplicates indicate a widespread misunderstanding of the credit policy.

- **Terminal & TUI regressions** — Windows Terminal scroll blocking (#51393) and text display corruption (#68711) on macOS degrade the core editing experience. Both are reported as regressions tied to recent releases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-18

## Today's Update Brief
Two Rust alpha releases (0.141.0-alpha.5 and .6) landed today. The repository saw heavy triage activity: 30+ issues and 20+ pull requests updated in the past 24 hours, with several long-running bugs (reconnect loops, authentication failures, false‑positive safety checks) accumulating high comment counts and community engagement. A cluster of PRs focuses on multi‑agent delegation and plugin installation extensibility.

## Releases
- **rust‑v0.141.0‑alpha.6** – 0.141.0‑alpha.6
  [Release](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.6)
- **rust‑v0.141.0‑alpha.5** – 0.141.0‑alpha.5
  [Release](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.5)

No detailed changelogs provided; both are alpha releases of the Rust‑based CLI/engine.

## Hot Issues (Top 10 by comment count)

1. **#18960 – Frequent reconnect loop in Codex App**
   *[Bug, connectivity]* WebSocket closed by server before response completed; affects Pro users on macOS. 44 comments, 34 👍.
   [Link](https://github.com/openai/codex/issues/18960)

2. **#25670 – Authentication for Codex has literally broken**
   *[Bug, auth, CLI]* Multi‑layer verification (passkey, phone, authenticator app) loops indefinitely; old phone number blocks completion. 33 comments, 19 👍.
   [Link](https://github.com/openai/codex/issues/25670)

3. **#28190 – `rg` is blocked by macOS**
   *[Bug, CLI]* macOS security blocks ripgrep binary shipped with Codex CLI 0.139.0. Pro users on gpt‑5.5. 31 comments, 53 👍.
   [Link](https://github.com/openai/codex/issues/28190)

4. **#28015 – False positive cybersecurity safety check blocks normal repo maintenance**
   *[Bug, CLI, safety‑check]* Routine DevOps tasks (checking branches, logs) trigger prompts, interrupting paid sessions. 20 comments, 0 👍.
   [Link](https://github.com/openai/codex/issues/28015)

5. **#5041 – VS Code extension sandbox blocks network even with `danger‑full‑access`**
   *[Bug, extension, sandbox]* Linux: network access denied, persistent sandbox errors. Closed after long discussion. 12 comments, 10 👍.
   [Link](https://github.com/openai/codex/issues/5041)

6. **#25321 – Desktop composer caret/input focus intermittently disappears on macOS**
   *[Bug, app]* Focus lost after certain actions; requires app focus switch. 11 comments, 5 👍.
   [Link](https://github.com/openai/codex/issues/25321)

7. **#21839 – Existing sessions with full access now require repeated approvals**
   *[Bug, sandbox, app, session]* Regression introduced in recent builds; previously‑granted full‑access sessions show approval prompts again. 9 comments.
   [Link](https://github.com/openai/codex/issues/21839)

8. **#28422 – `image_gen` regression in CLI 0.140.0: generated image not saved when status remains “generating”**
   *[Bug, CLI, imagen]* Valid images not persisted; Windows, gpt‑5.4‑mini. 9 comments, 2 👍.
   [Link](https://github.com/openai/codex/issues/28422)

9. **#28071 – Desktop repeatedly exhausts `syspolicyd`; cannot relaunch without reboot**
   *[Bug, app, performance]* macOS system policy daemon overloaded; Codex Desktop 26.609.41114. 8 comments, 2 👍.
   [Link](https://github.com/openai/codex/issues/28071)

10. **#25921 – Crashpad pending dumps grow without limit (+5GB/day)**
    *[Bug, app, performance]* Continuous `.dmp` and `_sidecar.json` generation in `~/Library/Application Support/…/Crashpad/pending`. 8 comments, 1 👍.
    [Link](https://github.com/openai/codex/issues/25921)

## Key PR Progress

1. **#28813 – Pause active goals before Esc interrupts**
   Fixes #28104: active `/goal` now moves to paused state when interrupted via `Esc` (consistent with `Ctrl+C`).
   [Link](https://github.com/openai/codex/pull/28813)

2. **#28685 – Add per‑turn multi‑agent mode**
   Allows clients to select proactive delegation per turn instead of only through static guidance.
   [Link](https://github.com/openai/codex/pull/28685)

3. **#28792 – Expose thread‑level multi‑agent mode**
   Provides initial delegation selection when creating a thread, visible through lifecycle and settings APIs.
   [Link](https://github.com/openai/codex/pull/28792)

4. **#28806 – Optimize resume and fork history**
   Checkpoint‑backed resume and copy‑on‑write fork optimization; reduces cold `thread/resume` and `thread/fork` work.
   [Link](https://github.com/openai/codex/pull/28806)

5. **#28815 – Send stable IDs with managed auth requests**
   Passes `oaicom_stable_id` and `source_surface_stable_id` through auth flows for better session continuity.
   [Link](https://github.com/openai/codex/pull/28815)

6. **#28608 – Pass plugin namespace into skill loading**
   Preserves parsed plugin manifest namespace and uses it for skill name qualification and caching.
   [Link](https://github.com/openai/codex/pull/28608)

7. **#28822 – Add varlatency configuration**
   Gated feature for variable latency; resolves reminder interval and clock source.
   [Link](https://github.com/openai/codex/pull/28822)

8. **#28605 – Split plugin and skill warmup tracing**
   Promotes plugin config loading and skill config loading into separate info‑level spans with stable OpenTelemetry names.
   [Link](https://github.com/openai/codex/pull/28605)

9. **#27132 – Emit Trusted MCP App Identity on Tool‑Call Items**
   Provides stable connector and link identifiers for MCP apps, enabling backend consumption without reconstructing `link_id`.
   [Link](https://github.com/openai/codex/pull/27132)

10. **#27500 – Support `openai/form` extended form elicitations**
    Allows App Server clients to opt into `openai/form` MCP elicitations. Code finalized.
    [Link](https://github.com/openai/codex/pull/27500)

## Feature Request Clusters

- **Enhanced project/task organization** – Multiple requests for “Projects” in the Codex app with movable chats, shared memory, and uploaded files ([#13836](https://github.com/openai/codex/issues/13836)), plus surfacing chats awaiting attention at the top of the sidebar ([#20817](https://github.com/openai/codex/issues/20817)).
- **Improved user interaction during model work** – Suggestions to avoid swallowing typed input when the model asks a question ([#28551](https://github.com/openai/codex/issues/28551)) and feedback on /goal mode consuming too much of the weekly quota ([#28688](https://github.com/openai/codex/issues/28688)).
- **Remote/phone skills parity** – Repo‑local skills under `.agents/skills` do not surface as slash commands in the remote/phone composer ([#28754](https://github.com/openai/codex/issues/28754)).

## Developer Pain Points

- **Authentication and login loops** – Multiple verification layers (passkey, phone, authenticator) fail to complete, especially on older or business accounts ([#25670](https://github.com/openai/codex/issues/25670), [#28672](https://github.com/openai/codex/issues/28672)).
- **Reconnection and stability** – Frequent WebSocket disconnects in the app ([#18960](https://github.com/openai/codex/issues/18960)) and orphaned helper processes (SkyComputerUseClient, MCP subagents) accumulate on macOS ([#26293](https://github.com/openai/codex/issues/26293), [#17574](https://github.com/openai/codex/issues/17574)).
- **macOS‑specific blockers** – `rg` blocked by security ([#28190](https://github.com/openai/codex/issues/28190)), `syspolicyd` exhaustion ([#28071](https://github.com/openai/codex/issues/28071)), and missing computer‑use helper on Intel x64 ([#26842](https://github.com/openai/codex/issues/26842)).
- **False‑positive safety checks** – Normal repo maintenance tasks (e.g., checking branches) trigger unnecessary safety prompts disrupting paid sessions ([#28015](https://github.com/openai/codex/issues/28015)).
- **Rate‑limit surprises** – A public reset was applied immediately instead of being banked as expected ([#28811](https://github.com/openai/codex/issues/28811)); `/goal` mode high consumption concerns ([#28688](https://github.com/openai/codex/issues/28688)).
- **Context length errors after follow‑up** – VS Code extension fails with `context_length_exceeded` after `needs_follow_up=true` ([#28816](https://github.com/openai/codex/issues/28816)).
- **Plugin sandbox and installation** – Sandbox errors persist on Linux even with full‑access settings; Windows `node_repl` launch failures block Chrome plugin ([#5041](https://github.com/openai/codex/issues/5041), [#28753](https://github.com/openai/codex/issues/28753)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-18

## Today’s Update Brief

The project shipped **v0.48.0-preview.0**, primarily a dependency-management and CI-cooldown release. Issue activity remained high, with 50 items updated in the last 24 hours and 20 open PRs. User pain points continue to cluster around **agent hangs**, **subagent reliability**, and **subagent permission/scope bugs**, while maintainers advanced several cross-cutting fixes for security, MCP encoding, and macOS path handling.

---

## Releases

**v0.48.0-preview.0** — Release v0.48.0-preview.0
[View release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.48.0-preview.0)

- **Changes**: Bumped version to 0.48.0-nightly.20260609.g3a13b8eeb; enabled a cooldown period for npm dependency updates via Dependabot.
- **Changelog PR**: [PR #27999](https://github.com/google-gemini/gemini-cli/pull/27999) (auto-generated, awaiting review).

---

## Hot Issues (Top 10 by Comment Activity)

1. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   *Affected workflow*: Quality assurance for agent behaviors. The epic tracks 76 behavioral eval tests across 6 Gemini models; ongoing effort to make component-level evals deterministic.
   *Community reaction*: 0 👍, 7 comments. Maintainer-owned, no public dissent.

2. **[#22745 – Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   *Affected workflow*: Codebase navigation. Proposes using AST-aware tools (e.g., tilth, glyph) to reduce token noise and turns during method-bound reads.
   *Community reaction*: 1 👍, 7 comments. Strong interest from maintainers.

3. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
   *Affected workflow*: Any task that triggers the generalist subagent. Users report hangs lasting up to an hour; workaround is to disable subagent delegation.
   *Community reaction*: 8 👍, 7 comments. Highest 👍 count in today’s data. Reproducible, still needing retesting.

4. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   *Affected workflow*: `codebase_investigator` subagent. Agent reports `status: "success"` and `Termination Reason: "GOAL"` even when hitting turn limits—masking actual interruption.
   *Community reaction*: 2 👍, 6 comments. Bug confirmed, status set to `need-retesting`.

5. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   *Affected workflow*: Custom skill execution. Users author skills (Gradle, Git) but the model rarely invokes them unless explicitly instructed.
   *Community reaction*: 0 👍, 6 comments. Observational report from long-time user.

6. **[#26525 – Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   *Affected workflow*: Auto Memory reads local transcripts and sends them to the extraction model. Redaction happens *after* content is already in context; sensitive data may be logged.
   *Community reaction*: 0 👍, 5 comments. Area: security.

7. **[#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
   *Affected workflow*: Auto Memory marks sessions as “processed” only when the extraction agent calls `read_file`. If the agent skips a low-signal session, it remains unprocessed and can be re-surfaced in later runs.
   *Community reaction*: 0 👍, 5 comments. Related to [#26516](https://github.com/google-gemini/gemini-cli/issues/26516).

8. **[#25166 – Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**
   *Affected workflow*: Any shell command. Even trivial commands (e.g., `ls`) can leave the shell state as "Awaiting user input" after completion, freezing the agent.
   *Community reaction*: 3 👍, 4 comments. Effort/medium, P1 priority.

9. **[#21983 – Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   *Affected workflow*: Browser automation on Linux/Wayland. Agent terminates with "GOAL" but no useful output.
   *Community reaction*: 1 👍, 4 comments. Requires platform-specific fix.

10. **[#21000 – Experiment with native file tools for creating and maintaining the task tracker](https://github.com/google-gemini/gemini-cli/issues/21000)**
    *Affected workflow*: Task tracking. Proposes replacing agent-driven task file management with native file tools for better reliability.
    *Community reaction*: 0 👍, 4 comments. P3, customer-issue label.

---

## Key PR Progress (Top 10 by Impact)

1. **[#27948 – Pin dependencies and enforce 14-day update cooldown](https://github.com/google-gemini/gemini-cli/pull/27948)**
   *What*: Strips version ranges (`^`, `~`) across all dependency fields and adds a 14-day cooldown for Dependabot updates.
   *Why*: Reduces supply-chain risk and stabilizes CI.

2. **[#27997 – Remove references to deprecated consumer and free tiers](https://github.com/google-gemini/gemini-cli/pull/27997)**
   *What*: Deletes docs referencing Gemini Code Assist for individuals, Google AI Pro/Ultra, and the unpaid Free Tier (stopping service June 1).
   *Why*: Maintainers preparing for tier shutdown.

3. **[#27996 – Decode response body using charset from Content-Type header](https://github.com/google-gemini/gemini-cli/pull/27996)**
   *What*: `web-fetch` now respects `charset=gbk`, `iso-8859-1`, etc., instead of always decoding as UTF-8.
   *Why*: Fixes garbled text on Chinese, Japanese, and legacy sites.

4. **[#27987 – Throw FatalConfigError instead of process.exit in parseArguments](https://github.com/google-gemini/gemini-cli/pull/27987)**
   *What*: Replaces `process.exit(1)` with a thrown error, with help/version exit logic moved to `main()`.
   *Why*: Resolves Vitest hang in E2E tests for `--help`/`--version`.

5. **[#27994 – Insert skill/agent content literally in system prompt substitutions](https://github.com/google-gemini/gemini-cli/pull/27994)**
   *What*: Changes `String.prototype.replace` calls for `${AgentSkills}` and `${SubAgents}` placeholders to use the string form, not regex, so content containing `$` or other special patterns is not misinterpreted.
   *Why*: Prevents prompt injection / malformation from skill content.

6. **[#27859 – Add native drag-and-drop and Cmd+V clipboard image pasting](https://github.com/google-gemini/gemini-cli/pull/27859)**
   *What*: Integrates terminal-native image input (drag‑and‑drop + clipboard paste) for visual multimodal parity.
   *Why*: Addresses a long-standing limitation in terminal-based interactions.

7. **[#27986 – Report cached and thought tokens in PromptResponse.usage](https://github.com/google-gemini/gemini-cli/pull/27986)**
   *What*: ACP server now exposes `cached` and `thought` token counts per turn.
   *Why*: ACP clients were overstating cost (~3×) because all input was treated as uncached.

8. **[#27979 – Wrap read_mcp_resource output with wrapUntrusted()](https://github.com/google-gemini/gemini-cli/pull/27979)**
   *What*: MCP resource text is now wrapped with `wrapUntrusted()` before being passed to the model, matching the existing treatment of `mcp-tool` output.
   *Why*: Closes [issue #27983](https://github.com/google-gemini/gemini-cli/issues/27983) — consistency in untrusted input handling.

9. **[#27753 – Validate workflow_run origin before consuming E2E artifact](https://github.com/google-gemini/gemini-cli/pull/27753)**
   *What*: CI pipeline now checks `repo.full_name` and `sha` before pulling artifacts from workflow runs.
   *Why*: Fixes a fork artifact poisoning vulnerability that could let attacker code run with repository secrets.

10. **[#27771 – Fix MCP header encoding for non-ASCII values](https://github.com/google-gemini/gemini-cli/pull/27771)**
    *What*: MCP HTTP transports now encode header values containing Unicode (e.g., `mąka`) as valid `ByteString` before calling `fetch`.
    *Why*: Prevents discovery failures when headers contain non-ASCII characters. Fixes [#25668](https://github.com/google-gemini/gemini-cli/issues/25668).

---

## Feature Request Clusters

**AST-Aware Tooling**
Two related epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) propose using AST-aware tools for codebase reads, search, and mapping. The goal is to reduce token noise and turn count during method extraction and codebase navigation. Possible tools mentioned: *tilth* and *glyph*. No implementation timeline.

**Agent Self-Awareness & Proper Tool Usage**
Multiple users ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) request that the agent autonomously invoke custom skills and sub-agents rather than requiring explicit user instruction. A related request asks for the agent to document its own CLI flags, hotkeys, and execution mechanics for self-guidance.

**Browser Agent Resilience**
Two issues ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) call for better recovery from locked browser profiles, respect for `settings.json` overrides (e.g., `maxTurns`), and automatic session takeover when an orphaned process holds the profile lock.

**Memory System Quality**
Four related issues ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) cover Auto Memory bugs: indefinite retries on low-signal sessions, silent skipping of invalid memory patches, and the need for deterministic secret redaction before context injection.

---

## Developer Pain Points

**Agent Hangs & Stuck Behavior**
Users report two distinct hang patterns: the generalist agent hangs indefinitely on simple tasks ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), 8 👍), and shell commands remain in "Awaiting user input" state after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), 3 👍). Both are P1 bugs blocking day-to-day usage.

**Subagent Reliability**
Subagents falsely report success when hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), run without user permission after updates ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), and ignore `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)). These erode trust in autonomous delegation.

**Configuration & Symlink Handling**
Agents defined as symlinks in `~/.gemini/agents/` are not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)). Running from the home directory produces false duplicate-agent warnings ([#27995](https://github.com/google-gemini/gemini-cli/pull/27995), now closed). These friction points affect custom agent authoring workflows.

**Memory / Auto Memory Bugs**
The Auto Memory system retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silently drops invalid inbox patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and logs sensitive data before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)). Developers perceive this as a reliability and security gap.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-18

## Today's Update Brief
A new patch release (v1.0.64-0) shipped with several new commands and features, including `/diagnose`, `/mcp` registry browsing, and making `/security-review` generally available. Community activity remained high, with 34 issues updated in the last 24 hours—many centered on lingering effects of the June 16 Copilot outage and recurring frustrations around permission handling, MCP tool integration, and session management.

## Releases
**v1.0.64-0** — [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.64-0)
- Added `/diagnose` command to analyse session logs.
- Added `/mcp` registry installation for browsing and installing MCP servers.
- Removed `--experimental` flag for `/security-review`, making it available to all users.
- Copilot can now discover MCP servers provided by installed plugins.
- Added CSV output support for MCP tools.

## Hot Issues (10 selected by activity & impact)

1. **#2643 – `preToolUse` silent rewrite still shows confirmation dialog**
   [🔗](https://github.com/github/copilot-cli/issues/2643) – *10 comments, open*
   **Affected workflow:** Hook developers who want to silently rewrite commands via `updatedInput` and `permissionDecision: allow` still see an interactive confirmation on every rewritten command. Only `deny` is silent. No workaround exists.

2. **#1973 – Tool whitelist for Interactive Mode**
   [🔗](https://github.com/github/copilot-cli/issues/1973) – *10 comments, open, 👍20*
   **Affected workflow:** Interactive mode requires manual approval for every tool call (even read-only like `grep`, `cat`). Users want a configurable whitelist to avoid repetitive approval while still blocking destructive commands. High community demand.

3. **#254 – Persistent login loop**
   [🔗](https://github.com/github/copilot-cli/issues/254) – *9 comments, open*
   **Affected workflow:** Some users are repeatedly asked to log in even after successful authentication. Sessions lose credentials after Ctrl‑C. Affects Business accounts. No reliable fix yet.

4. **#3560 – Duplicate item ID error after tool call**
   [🔗](https://github.com/github/copilot-cli/issues/3560) – *5 comments, open*
   **Affected workflow:** Plain chat works, but any session that uses tool calls fails on the next turn with `"Duplicate item found with id fc_call_..."`. Sudden onset, persists across restarts. Likely a server-side regression.

5. **#3832 – All models shown as Blocked/Disabled after June 16 outage**
   [🔗](https://github.com/github/copilot-cli/issues/3832) – *5 comments, closed, 👍13*
   **Impact:** After the 17:45–18:15 UTC outage on June 16, the model selection interface lists every model as blocked. Users cannot start new sessions. Rapidly closed – likely resolved by GitHub, but highlights the outage’s secondary effects.

6. **#3831 – Transient API error retries stuck in loop**
   [🔗](https://github.com/github/copilot-cli/issues/3831) – *4 comments, closed*
   **Impact:** Users saw endless "Request failed due to a transient API error. Retrying…" messages, halting workflows mid‑step. Closed without public root cause, but likely related to the same outage.

7. **#3355 – Claude Opus 4.6 context capped at 200K vs native 1M**
   [🔗](https://github.com/github/copilot-cli/issues/3355) – *3 comments, open*
   **Affected workflow:** Deep technical sessions force frequent summarisation because the CLI limits context to 200K tokens despite the model supporting 1M. Users request configurable context window size.

8. **#3812 – Sub-agents cannot access MCP tools**
   [🔗](https://github.com/github/copilot-cli/issues/3812) – *2 comments, open*
   **Affected workflow:** Custom sub-agents lose visibility of MCP tools after an update. Top-level agent still works. Probable cause: deferred MCP tool loading breaks sub‑agent tool discovery.

9. **#3730 – Enterprise-managed custom models not available in CLI**
   [🔗](https://github.com/github/copilot-cli/issues/3730) – *2 comments, open*
   **Affected workflow:** Enterprise admins configure custom AI models in the Copilot Admin dashboard, but these models never appear in Copilot CLI. Requires separate configuration, breaking admin control.

10. **#3754 – `copilot --resume` fails silently with session names containing spaces**
    [🔗](https://github.com/github/copilot-cli/issues/3754) – *2 comments, open*
    **Affected workflow:** Using `copilot --resume "My Session"` exits with code 1 and no output. Only kebab-case names work. Contradicts documented behaviour.

## Key PR Progress
No pull requests were merged or updated in the last 24 hours.

## Feature Request Clusters
- **Finer-grained permission control** – Multiple requests for tool whitelisting (#1973), persistent `/instructions` opt‑out per repository (#3840), and a way to disable interactive mouse input (#3804).
- **Context & reasoning customization** – Users want configurable context windows for large‑model sessions (#3355) and a dedicated `/effort` command to quickly switch reasoning effort without changing models (#3074).
- **Plugin & MCP lifecycle improvements** – Requests for bulk plugin update (#3830), skill files that can declare additional MCP servers (#3292), and pre‑loading MCP tools at session start instead of lazy discovery (#3787).
- **Session & workspace UX** – Better `--resume` output (show folder path, #3837) and persistent model selection after outages.

## Developer Pain Points
- **Outage after‑effects** – The June 16 outage left users with blocked models (#3832) and transient retry loops (#3831). While closed, the incidents erode trust.
- **Login instability** – The persistent login loop (#254) remains unresolved after months, affecting daily use for some.
- **Unreliable tool call lifecycle** – Duplicate‑ID errors (#3560) and sub‑agent MCP tool loss (#3812) suggest fragility in the tool‑call pipeline, with no clear mitigation.
- **Silent failures & unhelpful errors** – `--resume` failures (#3754), malformed attachment poisoning (#3791), and content‑exclusion policy being incorrectly enforced (#3841) all produce cryptic or no output.
- **MCP OAuth credential attachment** – Drive MCP tools fail after successful reauth because credentials are not attached to requests (#3838), indicating a gap in credential propagation.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-06-18

## Today's Update Brief

Today's activity on the Kimi CLI repository is low, with two new issues opened but no new releases or pull requests merged in the last 24 hours. The community has submitted requests for session-mode switching and SSL certificate handling, but there has been no maintainer response or community discussion yet.

## Releases

None today.

## Hot Issues

1. **#2459 [Feature Request] 支持会话运行中切换执行模式（Agent ↔ 集群） / Supports switching execution mode during session running (Agent ↔ Cluster)**
   - Author: [@PresentXoX](https://github.com/PresentXoX) | Created: 2026-06-17 | Comments: 0 | 👍: 0
   - **Affected workflow:** Users who rely on both Agent (single-agent) and Cluster (multi-agent/parallel) modes cannot switch between them mid-session without restarting.
   - **Impact:** Medium – a quality-of-life improvement that could streamline complex multi-step workflows.
   - **Community reaction:** None yet.
   - **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2459

2. **#2458 [enhancement] Add option to ignore ssl certificate**
   - Author: [@dmorsin](https://github.com/dmorsin) | Created: 2026-06-17 | Comments: 0 | 👍: 0
   - **Affected workflow:** Users behind corporate antivirus or MITM proxies (e.g., organizational SSL inspection) cannot log in because the tool rejects the proxy's certificate.
   - **Impact:** Medium – blocks adoption for users in restricted enterprise environments.
   - **Community reaction:** None yet.
   - **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2458

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Clusters

Based on today's data, only two feature requests exist. However, they belong to distinct categories:

- **Workflow flexibility:** #2459 requests the ability to switch execution mode (Agent ↔ Cluster) while a session is active, suggesting a desire for more dynamic, user-controlled runtime configuration without restarting.
- **Network/compliance compatibility:** #2458 requests an option to ignore SSL certificate verification, targeting users in locked-down enterprise environments where HTTPS interception is enforced. This is a common request for tools that must operate behind corporate firewalls or security software.

Neither request has generated additional discussion or similar issues today. If multiple related requests accumulate in future digests, this section will expand accordingly.

## Developer Pain Points

Two distinct developer pain points emerged today:

1. **Workflow inflexibility:** Users want to change execution modes (Agent vs. Cluster) mid-session without restarting, indicating that the current session model is too rigid for complex multi-step tasks.
2. **Strict SSL enforcement:** Corporate/enterprise users face a hard block when the tool validates SSL certificates against proxies (e.g., antivirus MITM). The inability to bypass certificate checks prevents login entirely, making the tool unusable in common enterprise network setups.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-18

## Today’s Update Brief

One patch release (v1.17.8) landed today fixing session timeline performance and two provider-specific bugs. The community remains highly active with 50 issues and 50 PRs updated in the last 24 hours, led by a long-running thread about GPT response times (117 comments) and continued demand for sandboxed agent execution. Two PRs add native per-session goals, indicating interest in structured session lifecycle.

---

## Releases

**v1.17.8** — Core improvements and bugfixes
- Session timelines now load significantly faster and no longer flicker or scroll-jump.
- OpenAI-compatible providers correctly accept MCP tool schemas that previously failed validation (credit: @jquense).
- Cloudflare AI Gateway now receives the configured API key as expected (credit: @keefetang).

No other releases in the last 24 hours.
[View release](https://github.com/anomalyco/opencode/releases/tag/v1.17.8)

---

## Hot Issues (10 noteworthy)

1. **[#29079 – GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079)**
   *Opened May 24, 117 comments, 49 👍*
   Intermittent multi-minute response times for simple prompts on GPT-5.4. Affects user trust in session responsiveness. Community is actively discussing provider-side vs. client-side causes.

2. **[#2242 – Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)**
   *Opened Aug 25, 72 comments, 54 👍*
   Requests restriction of agent terminal commands to the current directory. References macOS seatbelt equivalents. High interest; no official solution yet.

3. **[#27589 – TUI fails on Alpine Linux (musl): getcontext symbol not found](https://github.com/anomalyco/opencode/issues/27589)**
   *Opened May 14, 33 comments, 12 👍*
   Regression from v1.14.48 to v1.14.50. Blocks use on musl-based distros. Affected users are waiting for a fix.

4. **[#11176 – [FEATURE] Official OpenCode VS Code extension](https://github.com/anomalyco/opencode/issues/11176)**
   *Opened Jan 29, 23 comments, 110 👍*
   Highest 👍 count on any open issue. Users want native VS Code integration rather than TUI or web-based alternatives.

5. **[#17994 – [FEATURE] Multi-agent orchestration in isolated workspaces](https://github.com/anomalyco/opencode/issues/17994)**
   *Opened Mar 17, 21 comments, 2 👍*
   Wants built-in “team of agents” with isolated file systems, similar to other coding tools. Low 👍 but sustained discussion.

6. **[#1852 – Commands that need sudo access hang the UI](https://github.com/anomalyco/opencode/issues/1852)**
   *Opened Aug 12, 12 comments, 11 👍*
   Agent hangs when prompting for sudo password. Despite being closed, the issue remains a pain point for Linux users.

7. **[#20902 – Bash tool hangs when command spawns background children](https://github.com/anomalyco/opencode/issues/20902)**
   *Opened Apr 3, 9 comments, 9 👍*
   `npm run build &` and similar patterns cause indefinite hang until timeout. Blocks use of background processes within sessions.

8. **[#19466 – OpenCode using CPU while waiting for API rate limits](https://github.com/anomalyco/opencode/issues/19466)**
   *Opened Mar 27, 9 comments, 8 👍*
   ~50% CPU usage on i9-14900 during “retrying in 18m” idle state. Suggests wasted resource consumption.

9. **[#8456 – [FEATURE] Automatically use different models based on task type](https://github.com/anomalyco/opencode/issues/8456)**
   *Opened Jan 14, 7 comments, 36 👍*
   Wants configurable model routing (e.g., cheap model for file search, strong model for code generation). High approval but no implementation yet.

10. **[#24817 – Ctrl+Z suspends OpenCode on Linux instead of undo](https://github.com/anomalyco/opencode/issues/24817)**
    *Opened Apr 28, 5 comments, 2 👍*
    SIGTSTP kills the TUI instead of performing undo. Updated today; simple keyboard-binding issue with no maintainer response yet.

---

## Key PR Progress (10 important PRs)

1. **[#32731 – Auto-discover models from OpenAI-compatible providers](https://github.com/anomalyco/opencode/pull/32731)**
   *Open, by @sethjones*
   Calls `GET /v1/models` on configured `baseURL` to populate model list automatically. Targets long-standing #6231.

2. **[#32742 – Add opencode-loop to ecosystem](https://github.com/anomalyco/opencode/pull/32742)**
   *Closed, by @ByBrave*
   Adds a plugin for Claude Code-style auto-continue with `/loop` commands and a daemon for idle-safe recurring tasks.

3. **[#29925 – Add Systematic plugin to ecosystem docs](https://github.com/anomalyco/opencode/pull/29925)**
   *Open, by @marcusrbrown*
   Documentation PR adding systematic to the plugins table.

4. **[#32612 – Exclude `-pro` models from ChatGPT-account model list](https://github.com/anomalyco/opencode/pull/32612)**
   *Open, by @devinoldenburg*
   Fixes #26115 and #32435 by filtering out GPT-5.5-pro from OAuth-account model selection (requests always fail).

5. **[#27554 – Local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)**
   *Open, by @androidand*
   Adds mDNS-based discovery for local OpenAI-compatible servers in `/connect`. Also implements model auto-discovery. Addresses both #6231 and #27553.

6. **[#28592 – Fix OSC52 clipboard passthrough under GNU screen](https://github.com/anomalyco/opencode/pull/28592)**
   *Open, by @lingfish*
   Corrects DCS passthrough for screen (previously only handled tmux). Closes #28590.

7. **[#32734 – Support OpenRouter model variants](https://github.com/anomalyco/opencode/pull/32734)**
   *Closed, by @JoeyKhd*
   Resolves variant-suffixed model IDs (`:free`, `:thinking`, etc.) by resolving them to base catalog entries while passing the full suffix to the OpenRouter API.

8. **[#20491 – Add Kiro (AWS) provider as bundled plugin](https://github.com/anomalyco/opencode/pull/20491)**
   *Open, by @NachoFLizaur*
   Adds Kiro provider via npm package `opencode-kiro`. Closes #9165 and #26680.

9. **[#27163 – Native session goals](https://github.com/anomalyco/opencode/pull/27163)**
   *Open, by @jorgitin02*
   Introduces per-session goals persisted server-side with CRUD via HTTP API. Closes #27167.

10. **[#32743 – Native per-session goals with `/goal` and autonomous pursuit](https://github.com/anomalyco/opencode/pull/32743)**
    *Open, by @dfredriksen*
    Similar to #27163 but adds `/goal` command, status lifecycle (active/paused/completed), and automatic goal pursuit by the agent. Closes #27167 and #29445.

---

## Feature Request Clusters

**Model & Provider Improvements**
- Auto-model selection based on task type (#8456, #32736)
- Provider-specific model variant support (GLM-5.2 #32172, #32444, #32620; OpenRouter variants #32734)
- Automatic model discovery from OpenAI-compatible endpoints (#32731, #27554)
- Support for additional providers (Devin #24072, GLM-5.2 in Ollama Cloud #32620)

**Session & Workspace Lifecycle**
- Session storage management: retention configuration, auto-archival, TTL (#16101, #32630)
- Per-session goals for structured agent tasks (#27163, #32743)
- Multi-agent orchestration with isolated workspaces (#17994)

**IDE Integration & Usability**
- Official VS Code extension (#11176)
- Runtime permission mode toggle (like Claude Code’s Shift+Tab) (#7928)
- Sandbox for agent terminal access (#2242)

---

## Developer Pain Points

- **High CPU usage while idle** – Several reports (e.g., #19466) note near-50% core usage during API retry waits, indicating missing backoff or sleep.
- **Hangs on background processes** – Bash tool times out when commands spawn child processes (#20902). Sudo prompts also cause hangs (#1852).
- **Lag and freezing in latest release** – Post-update to v1.17.8, multiple users report freezing on Windows 10 (#32746) and general lag.
- **Long GPT response times** – Intermittent multi-minute delays (#29079) disrupt workflow despite simple prompts.
- **Missing or broken model/provider support** – GLM-5.2 variants not exposed (#32444), `-pro` models shown but unusable (#32612), Cloudflare AI Gateway API key ignored (fixed in v1.17.8).
- **TUI regressions** – Alpine Linux not loading due to missing `getcontext` symbol (#27589). Logo display broken in web-based TUI (#23906).
- **SQLite corruption/growth** – A report shows 700MB SQLite file without cleanup (#32630). Column name error (`"data"` instead of string literal) causes all tools to fail (#32547).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-18

## Today’s Update Brief

The project shipped four releases in the last 24 hours (v0.18.1-preview.1 → v0.18.3), addressing CLI crash fixes, context‑size warnings, and documentation drift. Community activity remains high: 49 issues and 50 PRs were updated, with the most‑talked‑about thread (151 comments) pushing back against a proposed OAuth free‑tier quota reduction. Several widely‑upvoted issues point to ongoing authentication and API‑configuration pain points.

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.18.3** | Fix: stop CLI process after cancelled `ask_user_question` – ensures clean exit when user interrupts a permission prompt. |
| **v0.18.3-preview.0** | Same fix as v0.18.3 (pre‑release). |
| **v0.18.2** | Fix: warn when context instructions exceed size limits. Docs: update stale defaults, CLI syntax, and tool naming. |
| **v0.18.1-preview.1** | Same context‑size warning fix as v0.18.2 (pre‑release). |

**GitHub:** [Releases page](https://github.com/QwenLM/qwen-code/releases)

## Hot Issues

1. **OAuth Free Tier Policy Adjustment** [#3203](https://github.com/QwenLM/qwen-code/issues/3203) – Proposal to cut daily free quota from 1,000→100 requests and eventually close the free tier. 151 comments with strong community reaction. Affects all free‑tier OAuth users.

2. **Daily Token Consumption Statistics** [#4479](https://github.com/QwenLM/qwen-code/issues/4479) – Request for a dashboard showing per‑day token usage (one user reported 30M tokens in a single session). 16 comments, labelled `welcome-pr`.

3. **Unable to Add OpenAI‑Compatible Local LLM** [#3384](https://github.com/QwenLM/qwen-code/issues/3384) – User with Qwen3.6‑35B on VLLM cannot configure local provider despite following docs. 15 comments, still open.

4. **OAuth Session Persists After Switching to API Key** [#1855](https://github.com/QwenLM/qwen-code/issues/1855) – OAuth token remains active after user switches to a Coding Plan API key, causing 401 errors. Closed but has 14 comments and multiple affected users.

5. **401 Invalid Access Token / Token Expired** [#3335](https://github.com/QwenLM/qwen-code/issues/3335) – Recurring `401` errors with no clear expiry reason. 14 comments, closed as duplicate of #1855. 4 upvotes.

6. **Coding Plan “Temporarily Out of Stock”** [#3307](https://github.com/QwenLM/qwen-code/issues/3307) – Alibaba Cloud Coding Plan has been unavailable for a week. Frustrated users cannot purchase access. 10 comments, closed as non‑Qwen‑Code issue but still blocks users.

7. **API Connected but Fetch Fails** [#3914](https://github.com/QwenLM/qwen-code/issues/3914) – Connection error after apparently successful API key setup with OpenRouter. 9 comments, still open. 3 upvotes.

8. **OAuth Says Authenticated but Free Tier Quota Exceeded Immediately** [#3281](https://github.com/QwenLM/qwen-code/issues/3281) – OAuth flow reports success, yet any prompt fails with “free tier quota exceeded”. 9 comments, closed.

9. **Requests Limits Overview** [#3267](https://github.com/QwenLM/qwen-code/issues/3267) – Free‑tier user sees “limit reached” without completing any task. Requests clearer visibility into remaining quota. 8 comments, closed.

10. **`context.fileName` Setting Not Working** [#5267](https://github.com/QwenLM/qwen-code/issues/5267) – Custom file‑attachment settings in `settings.json` are ignored. 5 comments, open and recently updated. Affects users who auto‑attach project files.

## Key PR Progress

1. **Fix `context.fileName` Settings Schema** [#5269](https://github.com/QwenLM/qwen-code/pull/5269) – Corrects the generated VS Code schema so editors accept both single‑string and array formats. Opened today.

2. **Self‑Paced `/loop` with Prompt‑Only Wakeups** [#5197](https://github.com/QwenLM/qwen-code/pull/5197) – Makes `/loop <prompt>` a self‑paced session (no interval), scheduling at most one future continuation. Closes #5184.

3. **QQ Bot Channel Adapter** [#5202](https://github.com/QwenLM/qwen-code/pull/5202) – Adds a full WebSocket‑based QQ Bot channel (alongside Telegram/WeChat). Includes gateway reconnect and event handling.

4. **Follow‑Up Suggestion in Input Placeholder** [#5145](https://github.com/QwenLM/qwen-code/pull/5145) – Shows the model’s suggested next prompt in the input placeholder, using the fast model for generation.

5. **DeepSeek V4 Preset: Keep Text‑Only** [#5268](https://github.com/QwenLM/qwen-code/pull/5268) – Removes incorrect `image: true, video: true` from DeepSeek V4 defaults (DeepSeek V4 is text‑only).

6. **Daemon Idle Detection via `/health?deep=true`** [#4934](https://github.com/QwenLM/qwen-code/pull/4934) – Exposes `activePrompts`, `connectedClients`, `channelAlive` etc. for external schedulers to detect daemon idleness.

7. **Unify Session Title / displayName** [#5002](https://github.com/QwenLM/qwen-code/pull/5002) – Removes redundant `title` field; AI auto‑titles now persist to session JSONL. Public API changes are backward‑compatible.

8. **Second‑Resolution Session Wakeup Engine** [#5182](https://github.com/QwenLM/qwen-code/pull/5182) – A non‑durable, session‑scoped wakeup engine for `/loop`, separate from cron. Step 1 of Claude Code alignment.

9. **Resume Interrupted Turn Without Synthetic “continue”** [#5030](https://github.com/QwenLM/qwen-code/pull/5030) – After a crash or mid‑stream interruption, the assistant turn continues without injecting a fake user message. Classifies three continuation shapes.

10. **Vision Bridge: Image→Text for Text‑Only Models** [#5126](https://github.com/QwenLM/qwen-code/pull/5126) – Opt‑in feature: sends images to a multimodal model and passes the text description to the primary text‑only model.

## Feature Request Clusters

- **Token & Usage Visibility** – Multiple requests for daily token counters (#4479), quota overviews (#3267), and better limit‑exceeded messaging (#3281). Users want proactive transparency to avoid hitting caps unawares.
- **OAuth / Authentication Workflow** – Complaints about confusing OAuth‑to‑API‑key migration (#1855), “out of stock” Coding Plans (#3307), and sudden 401 errors (#3335). High overlap – users feel locked out without clear recovery.
- **Local & Custom Provider Support** – Difficulty adding OpenAI‑compatible local or third‑party models (#3384, #3914). Also request for UI wizard improvements for custom providers (#4814).
- **Provider Identity Decoupling** – Proposal to let `providerId` be a free‑form string and introduce a `Protocol` enum to separate identity from SDK routing (#5090). Would simplify multi‑provider setups.
- **Channel Adapters** – Active PR for QQ Bot (#5202) has community interest (#5201). Suggests demand for non‑English messenger integrations.
- **Vim & Keyboard‑Friendly UI** – Vim mode autocomplete navigation (#2561) and tmux trackpad scroll fix (#5159) reflect a developer‑centric UX push.

## Developer Pain Points

- **Authentication Shutdown** – Users who rely on the free OAuth tier face a proposed drastic quota cut (#3203) and are already seeing “limit reached” immediately (#3281). Combined with the sold‑out paid plan (#3307), many are stuck without any working access.
- **API Connection Failures** – Despite correct setup, `fetch failed` errors (#3914) and Node.js 26 incompatibility (#4274) block usage. Users often cannot determine whether the problem is client, network, or server.
- **Configuration Silent Failures** – Settings like `context.fileName` (#5267) are silently ignored. Model provider selection does not persist when multiple providers share the same model ID (#5173).
- **Tool Call Loops & Crashes** – Repetitive tool calls (#5237, #5234), OOM after `/quit` (#5147), and subagent task crashes (#5180) erode reliability for complex workflows.
- **UI/UX Regressions** – New collapsible thinking block in v0.18.2 has no expand shortcut (#5261). Trackpad scroll in tmux cycles prompts instead of scrolling (#5159). ExitPlanMode hangs (#5210).

</details>