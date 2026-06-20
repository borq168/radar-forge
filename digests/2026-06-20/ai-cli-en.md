# AI CLI Tools Community Digest 2026-06-20

> Generated: 2026-06-20 00:33 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Developer Tools: Cross-Tool Comparison Report — 2026-06-20

## Daily Cross-Tool Overview

Activity across the six tracked AI CLI tools was mixed: **OpenCode** and **Qwen Code** led in combined issue and PR updates (100+ each), while **Kimi Code** saw virtually no community movement. **Claude Code** released one minor safety patch (v2.1.183) and continues to dominate in raw issue engagement, with several critical bugs (subagent recursion, API response failures) drawing heavy discussion. **OpenAI Codex** shipped three Rust alpha releases and maintained high PR throughput (20+), but faced mounting complaints about rate-limit cost spikes. **Gemini CLI** published no releases but processed 74 PRs and issues, with agent reliability and file-system corruption bugs dominating. **GitHub Copilot CLI** released a small patch (v1.0.64-1) adding `/branch` and experimental worktree support, but had zero PR activity. Across tools, shared concerns around **subagent reliability**, **cost transparency**, and **cross-platform friction** continue to surface.

---

## Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release(s) (24h) | Notable |
|------|----------------------|-------------------|------------------|---------|
| Claude Code | 30+ | 1 | v2.1.183 (patch) | High-severity subagent and API-response bugs |
| OpenAI Codex | 30 | 20 | 3 alpha (v0.142.0-a.4–.6) | Rate-limit cost spike, MCP integration pain |
| Gemini CLI | 50 | 24 | None | Agent hangs, file corruption, OAuth fixes |
| GitHub Copilot CLI | 15 | 0 | v1.0.64-1 (patch) | `/branch` alias, experimental worktree |
| Kimi Code CLI | 0 | 1 | None | Single PR addressing proxy handling |
| OpenCode | 50+ | 50+ | None | Memory megathread, sandboxing, Android support |
| Qwen Code | 43 | 50 | None | Multi-agent crashes, Windows path bugs |

---

## Shared Feature Directions

**Subagent Lifecycle & Crash Recovery** — Appearing across **Claude Code** (#68619, recursive spawning), **Gemini CLI** (#21409, #22323, indefinite hangs and false success reports), and **Qwen Code** (#5180, #5239, sub-agent crashes with no notification). All three communities are experiencing agents that fail to report failures, hang silently, or spawn uncontrollably.

**Context Window & Token Visibility** — **Claude Code** (#65832), **Codex** (#9046), and **GitHub Copilot CLI** (#3867) all have requests to expose remaining token budget, compaction events, or context usage to the user or agent. Users report surprise degradation of reasoning quality without visibility.

**Permission & Safety System Hardening** — **Claude Code** (v2.1.183 blocks destructive git), **Codex** (#28988, #29117, permission loops), **Copilot CLI** (#2893, hooks bypassed under parallel dispatch), and **Gemini CLI** (#22672, discouraging destructive behavior) all show community pressure for more consistent, auditable permission models.

**MCP OAuth & Credential Management** — **Codex** (PR stack #29017–#29021, OAuth refresh serialization), **Gemini CLI** (#27889, MCP OAuth with stored client IDs), and **Copilot CLI** (#3455, MCP fetch failures on Windows) each address gaps in token lifecycle, auto-discovery, and cross-platform MCP reliability.

**Cost & Usage Transparency** — **Claude Code** (#69436, weekly limit jumps), **Codex** (#28879, 10–20× rate-limit cost spike), and **OpenCode** (#16017, public usage API endpoint) reveal users mistrusting or unable to audit consumption. The pattern suggests a systemic need for real-time cost telemetry.

**Platform Fragmentation (Windows, Linux, Containers)** — **Claude Code** (#26073, MSIX config path), **Codex** (#27979, Windows desktop crash), **Gemini CLI** (#21983, Wayland browser agent), **Copilot CLI** (#3455, Windows MCP), **OpenCode** (#31815, `xdg-open` in containers), and **Qwen Code** (#5386, Windows sandbox mounts) all report OS-specific breakage that erodes trust in cross-platform support.

---

## Differentiation Analysis

- **Claude Code** is positioning around **safety-first auto-mode** and **enterprise-grade permission granularity**, but the subagent recursion bug (#68619) undermines that narrative. The community is large and vocal, with feature requests (skill sync, model switching) showing high engagement but slow delivery.

- **OpenAI Codex** leans **Rust-native CLI** and **high PR throughput**, but cost volatility (#28879) and MCP provider incompatibility (#26234) create friction for paying users. The three alpha releases without changelogs suggest rapid iteration that is opaque to the community.

- **Gemini CLI** shows a **data-science and Jupyter-heavy user base**; the `write_file` corruption of `.ipynb` files (#28000) and Bash language tool bugs (#28053) are uniquely damaging for notebook workflows. The security-fix PR (#27753, CI artifact poisoning) indicates attention to supply-chain risk.

- **GitHub Copilot CLI** has the **lightest open-source engagement** (only 15 issues, zero PRs) and the narrowest feature set. The `/branch` alias and worktree support are incremental, not architectural.

- **Kimi Code CLI** is **nearly dormant** in community terms — a single PR addressing a known `aiohttp` library limitation mirrors its minimal footprint across all tracked attributes.

- **OpenCode** is the **most extensible platform** (plugin SDK, multiple provider presets, skill loading, Android/Termux support, LiteLLM integration). The memory megathread (#20695) and sandboxing request (#2242) reflect a user base that is pushing the tool into production-heavy, long-running workloads.

- **Qwen Code** focuses on **multi-agent orchestration** and **QQ bot integration**, distinguishing it as the only tool bridging CLI and social messaging. However, sub-agent crash recovery (#5180, #5239) and Windows path handling (#5386) are critical gaps for its ambitious workflow.

---

## Community Activity Notes

- **Highest issue engagement**: **Claude Code** (30+ issues, critical bug with 37 👍) and **OpenCode** (50+ issues, memory megathread with 71 👍). Claude Code’s #69358 (no API response) has broad impact; OpenCode’s #20695 is a centralized tracker for a systemic memory problem.

- **Highest PR throughput**: **OpenCode** (50+ PRs) and **Qwen Code** (50 PRs). OpenCode’s PRs span major features (Android support, skill picker, AI SDK migration); Qwen’s focus on bug fixes (MCP hooks, self-kill prevention, QQ bot reconnection) suggests stabilization phase.

- **Most responsive maintainers**: **Qwen Code** closed several issues and merged PRs (#5423, #5409, #5415, #5418) in the last 24h. **Claude Code** closed #69565 (TUI layout bug) but has high-stakes open issues with no resolution. **Gemini CLI** merged a Thai/Lao rendering fix (#25385) and added eval infrastructure (#28009, #28030).

- **Least responsive**: **Kimi Code CLI** (no issue updates, single orphan PR). **Copilot CLI** had zero PR activity and multiple closed issues with no explanation.

- **Release activity**: **Claude Code** (1 patch), **Codex** (3 alpha), **Copilot CLI** (1 patch). **Gemini**, **OpenCode**, **Qwen**, and **Kimi** had no releases.

---

## Evidence-Backed Observations

1. **Subagent reliability is a cross-tool pain point, not a differentiator.** Claude Code’s recursive spawning (#68619), Gemini CLI’s indefinite hangs (#21409), and Qwen Code’s silent sub-agent crashes (#5180, #5239) all describe agents that fail to report failure. No tool appears to have solved lifecycle management for sub-agents in production.

2. **Cost transparency is deteriorating faster than documentation can address it.** Claude Code (#69436, weekly limit jump), Codex (#28879, 10–20× token cost spike), and OpenCode (#16017, missing public API for usage) all report users experiencing unexpected budget depletion. The absence of standardized cost telemetry across tools is a systemic risk for adoption.

3. **MCP integration is the primary pain point for multi-provider setups.** Codex’s namespace flattening bug (#26234), Gemini CLI’s OAuth refresh failure (#27889), Copilot CLI’s Windows MCP fetch failure (#3455), and Qwen Code’s dead hook field (#5422) all point to MCP being the weak link in the toolchain, especially for non-default providers.

4. **Session management and recovery remain fragile across the board.** Claude Code (session name collision #69565), Copilot CLI (conflicting flags after `/update` #3821, socket hangs #3371), Gemini CLI (stalls on "Waiting input" #25166), and OpenCode (orphaned share with no revocation #32062) show that basic session lifecycle (resume, undo, timeout, termination) is inconsistently implemented.

5. **Permission and safety systems require more explicit user feedback.** Claude Code’s patch blocking destructive git commands, Codex’s permission-loop bug (#28988), Copilot CLI’s bypassed `preToolUse` hooks (#2893), and Gemini CLI’s request for encouragement against destructive behavior (#22672) all signal that current permission models are either too permissive, too noisy, or too opaque.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-20

## Today’s Update Brief
A single patch release (v2.1.183) shipped, focused on hardening auto‑mode safety around destructive git commands. Community activity remains high: 30+ issues saw updates in the last 24 hours, with a critical subagent infinite‑spawn bug and a widespread API‑response failure dominating discussion. Only one pull request was active over the period.

## Releases

### v2.1.183
- [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.183)
- **What’s changed:** Improved auto‑mode safety. Destructive git commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`) are now blocked when the user did not explicitly ask to discard local work. `git commit --amend` is blocked when the commit was not made by the agent during the current session.

## Hot Issues
*10 noteworthy issues updated in the last 24 hours, ordered by community engagement or severity.*

1. **[#68619 – [CRITICAL] Subagent spawning and pattern bugs trigger infinite recursion, infinite token usage](https://github.com/anthropics/claude-code/issues/68619)**
   *Open, 15 comments, 3 👍*
   Multiple regressions cause subagents to recursively spawn children 50+ levels deep, ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`. Permission denials trigger further spawning instead of stopping. Agents also fetch individual files from GitHub repos via HTTP, compounding cost. Users report catastrophic token burn.

2. **[#69358 – [BUG] No Response From API 2.1.181 (constantly)](https://github.com/anthropics/claude-code/issues/69358)**
   *Open, 12 comments, 37 👍*
   Linux users report the tool stops receiving API responses entirely after upgrading to v2.1.181, effectively halting all sessions. High reaction count suggests widespread impact.

3. **[#20697 – [FEATURE] Sync Skills between Claude Desktop and Claude Code CLI](https://github.com/anthropics/claude-code/issues/20697)**
   *Open, 34 comments, 118 👍*
   Long‑running request with very high community support. Users want custom skills created in Claude Desktop to be available in the CLI environment and vice versa, avoiding duplication.

4. **[#69436 – [BUG] You've hit your weekly limit · resets 8pm (America/Vancouver)](https://github.com/anthropics/claude-code/issues/69436)**
   *Open, 8 comments, 3 👍*
   A user on the Max 20x plan saw usage jump from 60 % to 100 % in 10 minutes with no corresponding activity. Questions around metering accuracy.

5. **[#15721 – [FEATURE] Automatic Model Switching for Plan Mode](https://github.com/anthropics/claude-code/issues/15721)**
   *Open, 20 comments, 36 👍*
   Requests for the tool to automatically switch to a cheaper model (e.g., Sonnet) for planning/reasoning steps and back to a more capable model for execution, reducing cost without manual intervention.

6. **[#26073 – [BUG] Windows MSIX: "Edit Config" opens wrong claude_desktop_config.json](https://github.com/anthropics/claude-code/issues/26073)**
   *Open, 18 comments, 31 👍*
   The MSIX packaged version of Claude Desktop opens the wrong config file for MCP servers, causing silent load failures. Reproducible across multiple Windows 11 installations.

7. **[#65832 – [FEATURE] Expose token usage to the model within sessions](https://github.com/anthropics/claude-code/issues/65832)**
   *Open, 5 comments, 0 👍*
   The agent has no visibility into its own token budget. This leads to silent degradation and shallow reasoning when context is near the limit. Request to surface remaining tokens to the model.

8. **[#60562 – [BUG] Server-side rate limits break parallel agent workflows](https://github.com/anthropics/claude-code/issues/60562)**
   *Open, 4 comments, 2 👍*
   Parallel agent dispatches hit server rate limits without automatic retry, breaking multi‑agent workflows. Workaround currently requires manual restart.

9. **[#67540 – [BUG] Code Review: claude[bot] reacts with 👀 but no check run is created](https://github.com/anthropics/claude-code/issues/67540)**
   *Open, 3 comments, 7 👍*
   Managed Code Review integration (no GitHub Actions workflow) shows the bot reacting but never posting a review or creating a check run. Affects Team plan users.

10. **[#69565 – [BUG] Session name overlaps with clock in input bar](https://github.com/anthropics/claude-code/issues/69565)**
    *Closed, 3 comments, 0 👍*
    TUI layout bug: when using `/rename`, the session name collides with the built‑in clock display, making both unreadable. Closed after reproduction (likely fixed in v2.1.183 or pending).

## Key PR Progress
Only one pull request received updates in the last 24 hours:

- **[#68673 – fix(scripts): break pagination when page is not full, not only when empty](https://github.com/anthropics/claude-code/pull/68673)**
  *Open, 0 comments, 0 👍*
  A community‑submitted fix for pagination logic in internal scripts. Currently no maintainer response.

No other PR activity was recorded for 2026-06-19/20.

## Feature Request Clusters
*Recurring themes from issue data, grouped without roadmap speculation.*

- **Skill/Configuration Sync**
  Multiple requests (led by #20697) ask for bidirectional sync between Claude Desktop and CLI for custom skills, MCP server configs, and permissions. Users want a single source of truth.

- **Model & Cost Optimisation**
  Several issues (#15721, #65832, #60529) centre on giving the user – or the agent itself – better visibility and control over model selection and token budgets. Automatic model switching per task and in‑session token awareness are the top asks.

- **Subagent Reliability**
  The subagent system is under scrutiny: recursive spawning (#68619), permission propagation failures (#32402, #51289), and orphaned sessions (#60860) are all reported. Users request robust guarding against runaway agents.

## Developer Pain Points
*High‑frequency or high‑friction issues visible in today’s data.*

- **Cost spikes and metering surprises** – The weekly limit jump (#69436) and session‑limit confusion (#69592) indicate that usage tracking is opaque or buggy, especially on Max plans.
- **Permission system complexity** – Subagents silently denying writes (#32402), permissions not propagating (#51289), and piped‑command approval friction (#46868) create a brittle UX.
- **Platform fragmentation** – Windows MSIX config paths (#26073), Linux API‑response failures (#69358), macOS orphaned sessions (#60860), and WSL/VSCode integration gaps (#60872) show uneven cross‑platform support.
- **Maintenance of stale issues** – A large number of closed/stale issues (e.g., #56740, #60870, #60825, #60865) suggest the maintainers are actively triaging but many fixes remain unreleased or re‑emerge.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-20

## Today’s Update Brief
Three Rust CLI alpha releases (v0.142.0-alpha.4 through .6) landed without visible changelogs. Community activity remains high: 30 tracked issues and 20 pull requests were updated in the last 24 hours, with notable spikes in reports around sudden rate-limit cost increases and persistent Windows desktop crashes after recent updates.

## Releases
- **rust-v0.142.0-alpha.4 / .5 / .6** – No release notes provided beyond the version bump. These appear to be iterative Rust CLI pre-releases.
  [Releases page](https://github.com/openai/codex/releases)

## Hot Issues (10 selected)
1. **#9046 – Context window exhaustion on fresh chat** (`swoiow`)
   A user with just one question gets “ran out of room in the model’s context window.” Comment count: 34, 👍 1. Suggests the context compression logic may be overly aggressive for short threads.
   [Issue](https://github.com/openai/codex/issues/9046)

2. **#11626 – CLI: Add `/rewind` checkpoint restore** (`Alek2077`, enhancement)
   Highly requested (👍 166) feature to revert both chat context and file edits from a checkpoint. Currently `Esc` only rewinds conversation.
   [Issue](https://github.com/openai/codex/issues/11626)

3. **#27979 – Windows App fails to open after update** (`SocialK`, closed)
   Version 26.609.4994.0 leaves users unable to launch the desktop app. High engagement (27 comments). Quickly closed, but other similar reports remain open.
   [Issue](https://github.com/openai/codex/issues/27979)

4. **#28988 – Full Access mode repeatedly asks for permission** (`praveshkhatana`, macOS)
   After update to 26.614.11602, every action triggers a permission request. Affected on Pro Max subscription. 24 comments, 👍 19.
   [Issue](https://github.com/openai/codex/issues/28988)

5. **#26867 – GitHub PR review stuck on deactivated workspace** (`montella1507`)
   After migrating from Business to Personal Pro, PR reviews still fail with “workspace is deactivated.” 22 comments, 👍 12.
   [Issue](https://github.com/openai/codex/issues/26867)

6. **#26234 – MCP tools not callable with non-OpenAI providers** (`LucaCappelletti94`)
   Flattening of MCP namespaces fails when using Ollama, LM Studio, or OpenRouter because Codex serialises tools in a proprietary namespace format that these providers don’t understand. 21 comments, 👍 28.
   [Issue](https://github.com/openai/codex/issues/26234)

7. **#28879 – Rate-limit cost per token jumped 10–20× since June 16** (`mihneaptu`)
   Plus plan users on gpt-5.5 report draining their 5‑hour budget in 2–3 prompts. Session logs confirm the per-token limit consumption spiked dramatically. 13 comments, 👍 15.
   [Issue](https://github.com/openai/codex/issues/28879)

8. **#17320 – Excessive SQLite WAL writes from TRACE logs ignoring `RUST_LOG`** (`piotrkacala`)
   The agent continuously writes to `logs_2.sqlite-wal` even when `RUST_LOG` should suppress debug output. Causes SSD wear. 12 comments, 👍 10.
   [Issue](https://github.com/openai/codex/issues/17320)

9. **#28224 – Codex feedback logs could write ~640 TB/year** (`1996fanrui`)
   `~/.codex/logs_2.sqlite` and associated WAL files produce enormous write amplification. 7 comments, 👍 11.
   [Issue](https://github.com/openai/codex/issues/28224)

10. **#29117 – Full Access permission loop on Windows CLI** (`raterolfrontback`)
    Similar to #28988 but on Windows with Codex CLI. 7 comments, 👍 10.
    [Issue](https://github.com/openai/codex/issues/29117)

## Key PR Progress (10 selected)
1. **#28787 – code-mode: transport-neutral session runtime** (`cconger`)
   Refactors session and cell lifecycle to decouple from protocol adapter, enabling future out‑of‑process transport. Reviewed but still open.
   [PR](https://github.com/openai/codex/pull/28787)

2. **#29149 – Use gnullvm for Windows Rust exec tools** (`anp-oai`)
   Moves Windows builds to a hermetic LLVM toolchain, avoiding breakage from system MSVC changes.
   [PR](https://github.com/openai/codex/pull/29149)

3. **#29154 – Allow resume and settings commands during tasks/MCP startup** (`etraut-openai`)
   `/resume` and settings commands are now permitted while a turn or MCP startup is in progress, reducing user frustration during slow MCP initialisation.
   [PR](https://github.com/openai/codex/pull/29154)

4. **#29150 – Remove bundled imagegen system skill** (`daniel-oai`, closed)
   Image generation moved to an installable plugin; the built‑in skill is removed with a regression assertion.
   [PR](https://github.com/openai/codex/pull/29150)

5. **#26707 – Add shared auth system proxy contract** (`canvrno-oai`)
   First step toward unified proxy support across platforms. Adds a common contract; Windows/macOS system proxy resolution still pending.
   [PR](https://github.com/openai/codex/pull/26707)

6. **#28918 – Make selected plugin roots URI-native** (`jif-oai`)
   Requires environment capability roots to be `file://` URIs, improving cross‑platform path handling (e.g., `file:///C:/plugins/foo`).
   [PR](https://github.com/openai/codex/pull/28918)

7. **#29050 – Align tonic and prost dependencies** (`apanasenko-oai`)
   Downgrades RPC deps to match monorepo versions, preventing Tokio runtime‑context panics in the app‑server integration.
   [PR](https://github.com/openai/codex/pull/29050)

8. **#28944 – Migrate skills usage guidance to model instructions** (`ani-oai`)
   Makes the “How to use skills” guidance conditional on model compatibility, avoiding outdated advice for new or unlisted models.
   [PR](https://github.com/openai/codex/pull/28944)

9. **#29065 – Add exact tool timing metadata** (`surajs-oai`)
   Introduces per‑tool execution timestamps, likely to improve telemetry and debugging.
   [PR](https://github.com/openai/codex/pull/29065)

10. **#29017..29021 – Serialize MCP OAuth refresh transactions** (`stevenlee-oai`, stack of 5 PRs)
    A coordinated set to prevent race conditions during OAuth token refresh. Includes rereading persisted credentials, serialising login/logout, and shared store coordination.
    [Base PR](https://github.com/openai/codex/pull/29018)

## Feature Request Clusters
- **Checkpoint/Rewind** – Multiple requests for a `/rewind` command that restores both conversation and code edits (#11626, 👍166). Users want a reliable way to undo not just chat but workspace changes.
- **Background service monitoring** – Allow the agent to monitor long‑running processes (builds, servers) without blocking further actions (#2062, 👍7).
- **Windows install location** – Request to choose a custom directory for the Codex desktop app (#21074).
- **Persistent permission model** – Several users ask for a way to grant Full Access once and stop the repeated “allow/deny” prompts (#28988, #29117, #27278).

## Developer Pain Points
- **Rate‑limit cost volatility** – Multiple reports of sudden jumps in per‑token limit consumption (#28879, #18357, #29152). Users on Plus and Pro plans see budgets drained in a handful of prompts with no change in usage pattern.
- **Windows desktop crashes after updates** – A string of issues (e.g., #27979, #27175, #28980) describe the app failing to open, consuming 99% RAM/CPU, or losing session history after automatic updates. @SocialK has filed many duplicates, suggesting a systemic regression in the Windows build pipeline.
- **Context window / compaction loops** – Reports of Codex getting stuck in a pre‑write compaction loop, repeatedly re‑reading instructions without executing edits (#27588). Also context exhaustion on trivial conversations (#9046).
- **Excessive logging and I/O** – SQLite WAL writes from the agent’s TRACE logs (#17320) and feedback logs (#28224) are alarming developers worried about SSD endurance. Users request a way to disable or limit log verbosity.
- **MCP integration friction** – The namespace‑flattening bug (#26234) makes Codex unusable with local or third‑party LLM providers. Users want the MCP tool format to be compatible with standard tools APIs.

---

*Generated from the [openai/codex](https://github.com/openai/codex) repository (data as of 2026-06-20 UTC).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-20

## Today's Update Brief

Activity remains steady with 24 pull requests and 50 issues updated in the last 24 hours, though no new releases were published. The community is primarily focused on agent reliability issues (hangs, subagent recovery bugs) and file system tooling corrections (Jupyter/JSON corruption, `@`-prefixed path resolution). Several high-priority PRs addressing MCP OAuth flow and CI security are nearing merge.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. Generalist agent hangs indefinitely
**#21409** — When Gemini CLI defers to the generalist agent, it hangs forever on simple operations (e.g., folder creation). Users report waiting up to an hour before cancelling. Workaround: instructing the model not to defer to sub-agents resolves the issue. 8 👍, 7 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

### 2. Subagent incorrectly reports GOAL success after max turns
**#22323** — The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit its maximum turn limit before doing any analysis, hiding the interruption from users. 2 👍, 6 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

### 3. Shell command execution stuck on "Waiting input" after completion
**#25166** — After executing simple CLI commands, Gemini hangs while showing the shell command as active and awaiting user input, even though the command has finished. Affects basic operations. 3 👍, 4 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

### 4. Browser subagent fails on Wayland
**#21983** — The browser subagent terminates with GOAL but produces no useful output on Wayland display servers. 1 👍, 4 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

### 5. Gemini does not use custom skills and sub-agents autonomously
**#21968** — Users report that Gemini rarely uses custom skills and sub-agents on its own, even for closely related tasks, unless explicitly instructed. The agent ignores skill descriptions for gradle, git, and other common workflows. 0 👍, 6 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

### 6. Auto Memory logs unredacted secrets before extraction
**#26525** — Auto Memory reads local transcripts and sends content to the extraction model before redaction happens. The service can also log existing skill configurations. 0 👍, 5 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

### 7. Auto Memory retries low-signal sessions indefinitely
**#26522** — Sessions remain unprocessed when the extraction agent decides not to read a low-signal transcript, causing repeated re-attempts without progress. 0 👍, 5 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

### 8. Agent should discourage destructive behavior
**#22672** — The model occasionally uses `git reset`, `--force` flags, or dangerous database operations when safer alternatives exist. Users want safeguards for complex git operations and resource management. 1 👍, 3 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

### 9. Browser Agent ignores settings.json overrides
**#22267** — Configuration overrides (e.g., `maxTurns`) provided in global or project-level `settings.json` are completely ignored by the Browser Agent. The AgentRegistry correctly reads settings during initialization but they are not applied. 0 👍, 3 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/22267)

### 10. 400 error with > 128 tools available
**#24246** — When more than 128 tools are available, Gemini CLI encounters a 400 error. Users expect the agent to limit tools in scope based on enabled tools. 0 👍, 3 comments.
[View Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

## Key PR Progress

### 1. Fix Jupyter Notebook and JSON corruption in write_file
**#28000** (Open) — Critical bug fix for `write_file` silently corrupting `.ipynb` and JSON files, causing Colab/JupyterLab to discard changes and revert to checkpoints. High-impact for data science workflows.
[View PR](https://github.com/google-gemini/gemini-cli/pull/28000)

### 2. Fix MCP OAuth refresh with stored client ID
**#27889** (Open, P1) — Resolves MCP OAuth refresh failures when auto-discovered servers have no static `oauth.clientId` in settings. The CLI now reads the client ID from persisted token metadata.
[View PR](https://github.com/google-gemini/gemini-cli/pull/27889)

### 3. Resolve `@`-prefixed path resolution in file tools
**#28053** (Open) — Comprehensive fix for `read_file`, `replace`, and `write_file` failing with "File not found" when the model passes paths prefixed with `@`. Also fixes macOS test compat.
[View PR](https://github.com/google-gemini/gemini-cli/pull/28053)

### 4. Validate workflow_run origin to prevent fork artifact poisoning
**#27753** (Open, P1, Security) — Fixes a CI vulnerability where forked PRs could run attacker-controlled code with repository secrets via `workflow_run` artifact poisoning. Critical for supply chain security.
[View PR](https://github.com/google-gemini/gemini-cli/pull/27753)

### 5. Fix MCP server name parsing with underscores
**#28033** (Open) — Adds longest-prefix matching to `parseMcpToolName`, fixing incorrect tool routing when MCP server names contain underscores. Regex `parseMcpToolName` stopped at the first underscore.
[View PR](https://github.com/google-gemini/gemini-cli/pull/28033)

### 6. Handle single-line descriptions in SKILL.md frontmatter
**#28042** (Open) — Fixes skill discovery silently failing when the `description` field in `SKILL.md` frontmatter is written on a single line without a trailing blank line. Affected skills were invisible in `/skills list`.
[View PR](https://github.com/google-gemini/gemini-cli/pull/28042)

### 7. Strip only trailing .json from checkpoint names
**#28044** (Open) — Fixes `name.replace('.json', '')` removing the *first* `.json` occurrence rather than the trailing extension, which corrupted checkpoint names for files containing `.json` in their basename.
[View PR](https://github.com/google-gemini/gemini-cli/pull/28044)

### 8. Fix Thai/Lao SARA AM width mismatch causing rendering bugs
**#25385** (Closed) — Corrects cursor desync, output duplication, and erratic line jumping in tmux caused by `string-width` reporting width 1 for characters terminals render as 2 columns. Merged.
[View PR](https://github.com/google-gemini/gemini-cli/pull/25385)

### 9. Strip trailing periods from error URLs
**#28054** (Open) — Removes sentence-ending periods attached directly to HTTP(S) URLs in error messages so rendered links remain navigable. Small UX fix.
[View PR](https://github.com/google-gemini/gemini-cli/pull/28054)

### 10. Add eval:inventory CLI command and JSON output
**#28009** and **#28030** (Closed) — Adds `npm run eval:inventory` for listing eval cases, with `--json` output for CI consumption. Enables better visibility into evaluation coverage.
[View PR #28009](https://github.com/google-gemini/gemini-cli/pull/28009) · [View PR #28030](https://github.com/google-gemini/gemini-cli/pull/28030)

## Feature Request Clusters

### Agent Self-Awareness and Configuration
Multiple requests ask the agent to understand its own mechanics: accurate CLI flags, hotkeys, and the ability to provide users with facts about its own operation and execution modes. (#21432)

### Subagent and Skill Usage
Users want better autonomous adoption of custom skills and sub-agents, with requests for the agent to proactively use defined tools without explicit instructions. (#21968)

### Evaluation Infrastructure
Several issues focus on stabilizing and enhancing evaluation reliability: making steering eval tests always pass, adding inventory commands, and improving overall evaluation quality and actionability. (#23313, #23166)

### Browser Agent Resilience
Requests include automatic session takeover from locked browser profiles, lock recovery, and proper application of `settings.json` overrides. (#22232, #22267)

## Developer Pain Points

- **Agent hangs and unrecoverable stalls**: The generalist agent hangs indefinitely on simple operations, and subagents incorrectly report success after hitting turn limits, masking failures. (#21409, #22323)
- **File system tool corruption**: `write_file` silently corrupts `.ipynb` and JSON files, and path resolution fails for `@`-prefixed references. (#28000, #28053)
- **Subagent permission and configuration issues**: Subagents activate without permission after updates, and the Browser Agent ignores critical settings overrides. (#22093, #22267)
- **MCP OAuth and token management**: Refresh flows fail for auto-discovered servers, and tokens are not written atomically, risking corruption. (#27889, #27664)
- **Configuration/skill discovery failures**: Skills with compact frontmatter are invisible, and symlinks in the agents directory are not recognized. (#28042, #20079)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-20

## Today’s Update Brief
A patch release (v1.0.64-1) shipped today with `/branch` as an alias for `/fork`, an experimental `--worktree` flag, and tab completion for `/agent n`. Community activity remains high: 15 issues were updated in the last 24 hours, including several newly filed triage items. No pull requests were merged or updated.

---

## Releases

### v1.0.64-1
- **Added**
  - `/branch` as an alias for `/fork` (matching Claude Code’s command naming).
  - Experimental `--worktree [name]` / `-w` flag (enable with `/experimental`) – creates or reuses a git worktree under `<repo>.worktrees/` and starts the session inside it.
  - Tab completion for `/agent n`.

---

## Hot Issues

1. **[#731] Incompatibility with Z shell and direnv: “Invalid session ID”**
   *Area: sessions* | Closed | 👍 14
   Session IDs are rejected when using Z shell with direnv (and possibly nix-direnv). Affects both v0.0.365 and v0.0.367.
   [Link](https://github.com/github/copilot-cli/issues/731)

2. **[#1665] Support Copilot CLI Plugins Scoped to Project or Repository (instead of per-user)**
   *Area: plugins, configuration* | Closed | 👍 17
   Plugins are currently installed globally per user. Request for repo/project‑scoped plugin loading to enable team‑specific tooling.
   [Link](https://github.com/github/copilot-cli/issues/1665)

3. **[#1901] autopilot_fleet plan approval may not activate fleet mode immediately (race condition)**
   *Area: non-interactive, agents* | Open
   Selecting “Accept plan and build on autopilot + /fleet” can leave the agent in interactive mode for up to 50 minutes before fleet mode activates.
   [Link](https://github.com/github/copilot-cli/issues/1901)

4. **[#3455] github-mcp-server fails with “fetch failed” on Windows since v1.0.51**
   *Area: platform-windows, networking, MCP* | Open
   The built‑in GitHub MCP server cannot connect after updating to v1.0.51; logs confirm no prior connection attempts. Windows‑specific.
   [Link](https://github.com/github/copilot-cli/issues/3455)

5. **[#2893] preToolUse hooks silently bypassed under parallel tool calls (timeout → allow fallback + serial dispatch)**
   *Area: permissions, plugins* | Open
   When a hook exceeds `timeoutSec`, the CLI stops waiting but the subprocess continues. Parallel tool dispatch then proceeds without the hook enforcing its rules.
   [Link](https://github.com/github/copilot-cli/issues/2893)

6. **[#3371] CLI silently hangs on stalled HTTPS sockets to api.github.com — no timeout, no log output**
   *Area: networking* | Open | 👍 1
   The `copilot` process can hang indefinitely with data stuck in TCP send buffers, producing zero log output or UI feedback.
   [Link](https://github.com/github/copilot-cli/issues/3371)

7. **[#3821] Running `/update` from a resumed session leaves conflicting `--session-id` and `--resume` flags**
   *Area: sessions, installation* | Closed
   After resuming a session with `copilot -r` and then running `/update`, the CLI restarts with both flags set, failing to resume properly.
   [Link](https://github.com/github/copilot-cli/issues/3821)

8. **[#3866] Thinking/reasoning text is unreadable on dark backgrounds (hardcoded dim color)**
   *Area: theming-accessibility* | Open
   The “Thinking…” reasoning text uses a hardcoded dark gray foreground, making it invisible on dark terminal backgrounds. Noticed since v1.0.6x.
   [Link](https://github.com/github/copilot-cli/issues/3866)

9. **[#3861] Docs present local sandbox capabilities as working, but they do not**
   *Area: permissions, networking* | Open
   The documentation and `/sandbox` UI claim per‑host filtering (`allowedHosts`/`blockedHosts`) provides “consistent isolation experience,” but these features do not actually function.
   [Link](https://github.com/github/copilot-cli/issues/3861)

10. **[#3864] Plugin cache_path stored as absolute path breaks in Docker/multi-HOME environments**
    *Area: plugins, configuration* | Open
    `cache_path` in `config.json` is hardcoded to the install‑time `$HOME`, causing sessionStart hooks to silently fail when `~/.copilot` is volume‑mounted into a Docker container with a different `$HOME`.
    [Link](https://github.com/github/copilot-cli/issues/3864)

---

## Key PR Progress
**No pull requests** were updated or merged in the last 24 hours.

---

## Feature Request Clusters

### Plugin & Configuration Scoping
- **Issue #1665** (closed) requests repo/project‑scoped plugin loading instead of global per‑user installation.
- **Issue #3864** (open) points out that plugin cache paths are absolute, breaking in Docker/multi‑HOME scenarios.
Together they indicate community desire for more flexible, environment‑aware plugin configuration.

### Session Context & Visibility
- **Issue #3867** (open, triage) asks for a context window usage indicator (tokens used/remaining) and notification when context compaction occurs.
- **Issue #3865** (open, triage) requests an LLM‑invocable `cd` tool that updates the working directory for subsequent tool calls (already partially supported via `/cd` but without agent control).
Both reflect a need for better awareness and management of session state and tool context.

### Platform & Environment Compatibility
- **Issue #3455** (Windows MCP failure) and **#3696** (Alpine/musl auto‑update wrong package) highlight gaps in cross‑platform testing.
- **Issue #3864** (Docker plugin path) and **#731** (Z shell + direnv) further illustrate friction in non‑standard environments.

---

## Developer Pain Points

- **Session management fragility** – issues with session ID validation (#731), conflicting flags after updates (#3821), and silent hangs during socket stalls (#3371) erode trust in session persistence and recovery.
- **Security/permissions bypasses** – `preToolUse` hooks are silently ignored under parallel tool dispatch (#2893); sandbox documentation claims capabilities that are not implemented (#3861).
- **Cross‑platform & container gaps** – Windows MCP connection broken (#3455), Alpine Linux auto‑update downloads wrong binary (#3696), Docker plugin paths break (#3864), and lack of CI for musl/Windows contributes to regressions.
- **Lack of user feedback** – no visible token usage or context compaction notifications (#3867), inaccessible reasoning text on dark themes (#3866), and no timeout indication for stalled connections (#3371).
- **Plugin ecosystem friction** – global plugin scope limits team adoption (#1665), hardcoded absolute paths break containers (#3864), and MCP schema mismatches with VS Code (#3835).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-20

## Today's Update Brief
Activity was low: no new releases or issues were updated in the last 24 hours, and one pull request (#2463) was opened to fix proxy handling in `FetchURL`. The community remains focused on resolving environment‑specific connectivity problems caused by missing proxy support in the HTTP client.

## Releases
*None*

## Hot Issues
No issues were updated in the last 24 hours.

## Key PR Progress
- **[#2463] fix: respect system proxy settings in FetchURL**
  Author: [@itxaiohanglover](https://github.com/itxaiohanglover)
  Created: 2026-06-19 | Updated: 2026-06-19 | Status: OPEN
  [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2463)
  **Summary:** `FetchURL` was ignoring `HTTP_PROXY` / `HTTPS_PROXY` environment variables because `aiohttp.ClientSession` does not read them by default. This caused `Connection reset by peer` errors in proxied environments. The PR adds explicit proxy configuration via `aiohttp.ClientSession`’s `trust_env` parameter to respect system‑wide proxy settings.

## Feature Request Clusters
No new feature requests were filed in the last 24 hours.

## Developer Pain Points
- **Proxy configuration absent from HTTP client** – The single open PR directly addresses a recurring frustration: `aiohttp.ClientSession` does not automatically pick up proxy environment variables, leading to surprising connection failures behind corporate or personal proxies. This is a well‑known limitation of the library, and the fix makes Kimi CLI more reliable in restricted network setups.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-20

## Today's Update Brief

No new releases were published in the last 24 hours, but the community remained highly active with 50+ issues and 50+ PRs receiving updates. The most discussed topics include a long-running memory megathread (98 comments), sandboxing/security concerns, and a growing cluster of cross-platform bugs affecting Linux, WSL, and container environments. Several PRs landed overnight addressing payment idempotency, skill loading, and UI polish.

## Releases

No new versions released in the past 24 hours.

## Hot Issues

1. **#20695 — Memory Megathread** [OPEN] [98 comments, 71 👍]
   Centralized tracking for scattered memory leak reports. Maintainers are requesting heap snapshots (manual or via an experimental snapshot tool). LLM-generated "solutions" are explicitly discouraged.
   *Affected workflow:* Long-running sessions consuming excessive RAM.
   https://github.com/anomalyco/opencode/issues/20695

2. **#2242 — Sandboxing the agent** [OPEN] [74 comments, 55 👍]
   User requests the ability to restrict terminal commands to the current project directory. Comparison to Gemini CLI / Codex CLI "seatbelt" on macOS. No equivalent exists in OpenCode yet.
   *Impact:* Security concern for users running untrusted code.
   https://github.com/anomalyco/opencode/issues/2242

3. **#988 — OAuth 2.1 for MCP remote** [CLOSED] [39 comments, 95 👍]
   Feature request for OAuth-based MCP server installation. Would eliminate manual secret management. Widely upvoted; now closed (likely shipped or superseded).
   https://github.com/anomalyco/opencode/issues/988

4. **#16017 — Go Plan usage/balance API endpoint** [OPEN] [19 comments, 70 👍]
   Request for a public API to expose subscription usage data (rolling/weekly/monthly windows). Dashboard already shows it but no programmatic access exists.
   https://github.com/anomalyco/opencode/issues/16017

5. **#32062 — Cannot unshare orphaned session** [CLOSED] [8 comments]
   Accidental share of sensitive data; local session deleted before unsharing. Share URL remains live with no revocation mechanism. `ON DELETE CASCADE` deleted the `session_share` row.
   *Security impact:* Data exposure with no recovery path.
   https://github.com/anomalyco/opencode/issues/32062

6. **#32444 — GLM-5.2 thinking-effort variants not exposed** [OPEN] [6 comments, 12 👍]
   Blanket `"glm"` exclusion in `ProviderTransform.variants()` blocks users from selecting High/Max thinking modes.
   *Affected workflow:* GLM-5.2 users missing planning/reasoning depth control.
   https://github.com/anomalyco/opencode/issues/32444

7. **#24817 — Ctrl+Z closes/suspends OpenCode on Linux** [OPEN] [6 comments, 3 👍]
   SIGTSTP sent instead of text undo. Basic terminal behavior conflict.
   *Affected environment:* Linux desktop users.
   https://github.com/anomalyco/opencode/issues/24817

8. **#31815 — `opencode web` fails in containers with `ENOENT: xdg-open`** [OPEN] [4 comments, 4 👍]
   Ugly error when `xdg-open` is missing in Docker/Podman images.
   *Affected workflow:* Container-based development.
   https://github.com/anomalyco/opencode/issues/31815

9. **#32965 — CPU spin at 100% after bootstrap** [OPEN] [4 comments]
   Main thread pins a single core at ~98–100% after model stream steps on large projects. No logs, ignores SIGTERM.
   *Impact:* System lockup requiring hard kill.
   https://github.com/anomalyco/opencode/issues/32965

10. **#29829 — Desktop missing terminal and "Open in Explorer" since v1.15.6** [OPEN] [4 comments, 13 👍]
    Embedded console terminal and "Open in Explorer" missing from Desktop app. Regression reported across multiple versions.
    https://github.com/anomalyco/opencode/issues/29829

## Key PR Progress

1. **#33038 — Native on-demand skill loading** [CLOSED]
   Introduces `type: core | non-core` frontmatter, `skills.autoLoad` config, and a `/skills` TUI dialog. Backend flow for loading selected skills on demand.
   https://github.com/anomalyco/opencode/pull/33038

2. **#33019 — Inline skill picker** [OPEN]
   Typing `$` as its own token opens a skill picker in the TUI. Closes #20982, refs multiple related issues.
   https://github.com/anomalyco/opencode/pull/33019

3. **#33010 — Android/Termux support** [OPEN]
   Adds `os.platform() === "android"` handling to postinstall, wrapper, and publish pipelines. Closes four separate Termux-related issues.
   https://github.com/anomalyco/opencode/pull/33010

4. **#29937 — LiteLLM plugin integration** [OPEN]
   Adds LiteLLM as a plugin via `LITELLM_BASE_URL` and optional API key. Syncs models dynamically.
   https://github.com/anomalyco/opencode/pull/29937

5. **#28387 — Aperture gateway provider (Tailscale AI)** [CLOSED]
   Adds Tailscale's Aperture as a built-in provider. Uses `APERTURE_BASE_URL` for configuration.
   https://github.com/anomalyco/opencode/pull/28387

6. **#32933 — AI SDK 6 migration & flag cleanup** [CLOSED]
   Replaces `.nullish()` with `.optional()`, removes legacy `experimental_` flags, consolidates JSON mode config.
   https://github.com/anomalyco/opencode/pull/32933

7. **#30211 — Fix config precedence after model hooks** [OPEN]
   Plugin `provider.models()` hook now runs before config merge, preventing user settings from being overwritten. Closes #25630.
   https://github.com/anomalyco/opencode/pull/30211

8. **#28403 — Payment webhook idempotency checks** [CLOSED]
   Stripe webhook handlers now deduplicate events; fixes duplicate credit additions on payment confirmations.
   https://github.com/anomalyco/opencode/pull/28403

9. **#28396 — Receipt URL ownership verification** [CLOSED]
   `Billing.generateReceiptUrl` now checks payment ownership before issuing Stripe receipt URL. Fixes IDOR vulnerability.
   https://github.com/anomalyco/opencode/pull/28396

10. **#33039 — Remove steering wrapper to avoid cache busting** [CLOSED]
    Sends in-run prompts as normal user messages instead of steering-only system reminders. Improves LLM input caching.
    https://github.com/anomalyco/opencode/pull/33039

## Feature Request Clusters

- **Voice Input** (#30634): Local-first speech-to-text or API-based voice prompt support. Single request, low engagement.
- **MCP Context & Schemas**: Inject session ID into MCP tool calls (#33035); expose provider-specific reasoning/thinking field schemas for custom models (#33013).
- **API & Provider Enhancements**: Go Plan usage/balance public endpoint (#16017); cost tracking for custom providers (#17223); ability to disconnect from a provider via CLI (#23923).
- **UI/UX Improvements**: Replace dropdown with separate Build/Plan buttons (#33011); add voice input (#30634); restore missing layout features in Desktop (#31878, #29829).
- **Security & Sharing**: Orphaned share revocation (#32062) — high impact but solved by a fix in progress; sandboxing still open (#2242).

## Developer Pain Points

- **Memory & Performance**: The memory megathread (#20695) remains the most active issue. CPU spin bug (#32965) and lag in v1.17.8 (#32746) compound concerns.
- **Cross-Platform Regressions**: Linux-specific issues (Ctrl+Z suspend #24817, `xdg-open` in containers #31815, WSL2 editor sync broken #29570, orphaned `index.lock` on Windows #29413) suggest insufficient platform testing before releases.
- **UI Regression Frequency**: Desktop app losing features (terminal, file tree, "Open in Explorer") across multiple versions (#29829, #31878) frustrates long-time users.
- **Cost & Billing Confusion**: Custom provider cost tracking stuck at $0 (#17223) and payment attribution bugs (#30276) erode trust in subscription features.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-20

## Today's Update Brief

No new releases were published in the last 24 hours. Community activity remained high with 43 issues and 50 pull requests updated, reflecting sustained focus on multi-agent reliability, Windows platform compatibility, and provider flexibility. The qqbot channel received multiple targeted fixes for reconnection and retry logic.

## Releases

*None in the last 24 hours. No new version was published.*

## Hot Issues

1. **[#5267 – `context.fileName` in setting file doesn't work](https://github.com/QwenLM/qwen-code/issues/5267)** (9 comments)
   User reports that customizing which files to attach to prompts via `settings.json` does not take effect. The issue is labeled `status/need-information` – maintainers are likely awaiting more details. Affects configuration workflow for users who want to control context attachments.

2. **[#5180 – Multi-agent task execution crashes mid-way](https://github.com/QwenLM/qwen-code/issues/5180)** (6 comments)
   A detailed session analysis shows that when a main agent delegates tasks to sub‑agents, the sub‑agent crashes without notifying the main session. The user describes a complex workaround involving file‑based monitoring. Highlights a critical gap in sub‑agent lifecycle management.

3. **[#5142 – CLI virtualized history mode not visible](https://github.com/QwenLM/qwen-code/issues/5142)** (5 comments)
   In the CLI TUI, the history is hidden until the `/` key is pressed, and the input box is mispositioned. The user expects a bottom‑aligned input and visible history. Impacts interactive CLI users relying on conversation history.

4. **[#4814 – UI should simplify adding new models for Custom Provider users](https://github.com/QwenLM/qwen-code/issues/4814)** (5 comments)
   After the initial setup wizard, there is no UI path to add new models to an existing Custom Provider. Users must edit JSON configurations manually. Request for a GUI‑based model management flow.

5. **[#3361 – Agent misinterprets shell output as empty despite successful execution](https://github.com/QwenLM/qwen-code/issues/3361)** (5 comments)
   Commands (e.g., `git`) run correctly and show output in the UI, but the agent treats the output as empty. This causes incorrect follow‑up decisions. Possibly an OpenAI‑compatible API integration issue.

6. **[#4854 – Let qwen-code process launch from a different location](https://github.com/QwenLM/qwen-code/issues/4854)** (4 comments, closed)
   Feature request to allow starting Qwen Code from one path and switching to a project directory, so that when the agent kills the project’s dev server, it does not kill itself. Closed with PR #5409 which blocks broad self‑kill commands.

7. **[#5422 – PostToolUse hook output field `updatedMCPToolOutput` is never consumed](https://github.com/QwenLM/qwen-code/issues/5422)** (4 comments)
   A hook interface declares a field that could rewrite MCP tool output, but the runtime never reads it. The user finds the field misleading. PR #5423 removes it.

8. **[#5263 – Auto‑generated skills should prompt before persisting](https://github.com/QwenLM/qwen-code/issues/5263)** (4 comments)
   Skills generated automatically during one‑time refactoring tasks are permanently saved without confirmation. The user wants a confirmation dialog.

9. **[#5239 – Weak communication between sub‑agent and main session](https://github.com/QwenLM/qwen-code/issues/5239)** (4 comments)
   Sub‑agents can crash or hang without the main session being notified. The user proposes a bidirectional notification mechanism. Related to #5180.

10. **[#4951 – Accuracy of token counters in statusline](https://github.com/QwenLM/qwen-code/issues/4951)** (4 comments)
    User questions whether the `in/out tokens` displayed in the status bar are accurate, reporting hundreds of thousands of tokens after a few exchanges. Likely a UI display or counting algorithm issue.

## Key PR Progress

1. **[#5398 – feat(web-shell): add extension management](https://github.com/QwenLM/qwen-code/pull/5398)** (open)
   Adds commands like `/extensions install` and a management UI for installing, enabling, disabling, and updating extensions from the web shell and daemon.

2. **[#5060 – Add TrustedRouter provider preset](https://github.com/QwenLM/qwen-code/pull/5060)** (open)
   Introduces a new third‑party provider preset for TrustedRouter, including constants, registry entry, and ownership tests.

3. **[#5423 – fix(hooks): remove the dead `updatedMCPToolOutput` field](https://github.com/QwenLM/qwen-code/pull/5423)** (closed)
   Resolves #5422 by deleting the unused field from the `PostToolUseOutput` interface, cleaning up the hooks API.

4. **[#4746 – fix(cli): preserve trustedFolders comments on save](https://github.com/QwenLM/qwen-code/pull/4746)** (closed)
   Ensures `trustedFolders.json` retains user comments and formatting when the file is updated, instead of being rewritten with plain `JSON.stringify()`.

5. **[#5409 – fix(core): block broad shell self‑kill commands](https://github.com/QwenLM/qwen-code/pull/5409)** (closed)
   Implements guard patterns to prevent `taskkill`, `killall`, and `pkill` from accidentally terminating the running `qwen-code` process. Directly addresses #4854.

6. **[#5415 – fix(channel): bound qqbot gateway reconnect retries](https://github.com/QwenLM/qwen-code/pull/5415)** (closed)
   Limits QQ Bot reconnect attempts when the gateway endpoint fails, preventing infinite 60‑second retries. Fixes #5410.

7. **[#5418 – fix(cli): narrow settings enum schemas](https://github.com/QwenLM/qwen-code/pull/5418)** (closed)
   Restricts `context.importFormat` to `tree`/`flat` and `advanced.dnsResolutionOrder` to `ipv4first`/`verbatim`, with regenerated VS Code settings schema and tests.

8. **[#4511 – docs(design): daemon side‑channel coordination](https://github.com/QwenLM/qwen-code/pull/4511)** (open)
   A design‑only proposal for cross‑client real‑time sync, outlining approach for A‑series follow‑ups. No implementation yet.

9. **[#4553 – feat: add PR gate review workflow using ecs‑qwen runner](https://github.com/QwenLM/qwen-code/pull/4553)** (open)
   Adds a GitHub Actions workflow that evaluates PR quality (template compliance, test inclusion, description checklist) automatically on new pull requests.

10. **[#5030 – feat(core,cli,sdk): resume an interrupted turn without synthetic "continue"](https://github.com/QwenLM/qwen-code/pull/5030)** (open)
    Allows resuming a session’s unfinished assistant turn after a crash or interruption without inserting a fake user message, using persisted history.

## Feature Request Clusters

- **Provider & Model Management**
  Users ask for easier model addition for Custom Providers (#4814), automatic switching between pro/flash models (#5225), and provider preset updates (e.g., missing GLM‑5.2 in Z.AI preset, #5393). Collectively point to a desire for more flexible provider configuration.

- **Multi‑Agent & Sub‑Agent Workflow**
  Multiple requests (#5180, #5239) highlight the need for robust sub‑agent lifecycle monitoring, bidirectional communication, and crash notification. The community is actively using multi‑agent setups and running into practical coordination problems.

- **UI/UX Improvements**
  Feature requests cover making thinking content expandable (#5408), showing estimated response time (#5366), confirming auto‑generated skills before saving (#5263), and adding a GUI for model management (#4814). These reflect a maturation of the product where polish touches matter.

- **Platform & Deployment**
  Users request the ability to run `qwen-code` from a different directory to avoid self‑kill scenarios (#4854, addressed by #5409). Also note token storage and session path issues on Windows (e.g., #5412).

## Developer Pain Points

- **Configuration Not Working as Documented** – Issue #5267 shows that `context.fileName` in settings does not work, breaking a documented feature.
- **Agent Misunderstands Tool Output** – #3361 demonstrates that successful shell commands are sometimes reported as empty, leading to bad agent decisions.
- **MCP Hooks Not Functionally Complete** – #5422 reveals a hook field that is declared but never consumed, misleading developers who try to use it.
- **Cross‑Platform Path Parsing Issues** – #5386 (sandbox mounts on Windows) and #5370 (grep drops matches on colon‑containing paths) show recurring Windows‑specific bugs.
- **Token Accounting Confusion** – #4951 indicates users do not trust the token counters in the status bar, which may misrepresent actual usage.
- **Multi‑Agent Stability** – Issues #5180 and #5239, both from the same user, describe sub‑agent crashes without notification, forcing workarounds that are fragile and complex.

</details>