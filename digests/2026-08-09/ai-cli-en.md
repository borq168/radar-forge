# AI CLI Tools Community Digest 2026-08-09

> Generated: 2026-08-09 01:01 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report – 2026-08-09

## 1. Daily Cross-Tool Overview

Activity was high across all four tracked AI CLI tools. Claude Code and OpenAI Codex shipped new releases (two patch releases and one alpha patch, respectively), while Kimi Code and OpenCode had no new releases. Issue queues were heavily updated: Codex and OpenCode each saw 50 issues updated, Claude Code 30+, and Kimi Code 13. Pull request activity was strongest in OpenCode (50 PRs updated) and Codex (15 PRs), though many Codex PRs were closed by automation. Common themes across tools include subagent lifecycle bugs, MCP reliability problems, Windows stability issues, and user demand for better interaction control during model execution.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today |
|------|----------------------|-------------------|---------------|
| Claude Code | 30+ | 1 | Yes (2 patches: v2.1.225, v2.1.226) |
| OpenAI Codex | 50 | 15 | Yes (1 alpha: rust-v0.148.0-alpha.5) |
| Kimi Code | 13 | 7 | No |
| OpenCode | 50 | 50 | No |

*Note: “Issues Updated” includes both new and existing issues with recent activity. OpenCode reports “50 open issues and 50 PRs updated” – the issue count may include older items with new comments.*

## 3. Shared Feature Directions

**MCP reliability and management**
- Claude Code: MCP servers ignored in VS Code extension (#19054, open since January 2026).
- Kimi Code: Dropped streamable-HTTP MCP sessions after server restart, tools execute unintended calls (#2742, fix PR #2748 opened same day).
- OpenCode: MCP duplicate processes (#31554) and requests for TUI-based MCP server management (#38993).

**Subagent lifecycle and state management**
- Claude Code: Dispatch session locks (#79410) and memory recall failures (#81092).
- OpenAI Codex: Subagents rehydrated as “Working” after restart (#37563) and quota drain from subagent-heavy sessions (#35463).
- Kimi Code: Subagent panel shows completed tasks as “running” indefinitely (#2154) and no depth limit on recursive subagent spawning (#2725).

**Windows platform stability**
- Claude Code: GPU process crash on Windows (#81698, exit code 101457950) and kernel BSOD during VS Code session (#80912).
- OpenAI Codex: Five separate Computer Use issues on Windows, including approval prompt never appearing (#37180), window enumeration failure (#37383), and mouse stutter during startup (#33074).

**Model switching and cost transparency**
- Claude Code: Silent model switch from Sonnet to Opus causing $1,050 overcharge (#60093) and Fable 5 Max plan entitlement bug (#79337).
- OpenAI Codex: Esc-Esc Edit/Resume keyboard shortcut downgrades model from Ultra to xhigh without notification (#35292).

**User control during model execution**
- Claude Code: Most-liked feature request is message queue mode (#50246, 184 👍) – users want to queue input while Claude is working.
- Kimi Code: Streaming cannot be interrupted by ESC/Ctrl+C; TUI freezes after repeated tool calls (#2739).

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise security (workspace trust, CVP, cyber-safeguard), model management, desktop integration, cost controls | Enterprise teams, power users with complex workflows | Gateway spend-limit support, workspace trust prompts, MCP integration (but gaps in VS Code extension) |
| **OpenAI Codex** | TUI enhancements, Windows Computer Use, subagent sandboxing, SSH remote sessions | Developers using TUI, remote development, Windows users | gRPC code-mode host service, async hooks, workload identity token exchange, alpha releases with heavy automation |
| **Kimi Code** | MCP resilience, cross-session memory, permission rule semantics, TUI usability | Developers relying on MCP, needing persistent context, TUI-heavy workflows | Reacts quickly to regressions (fix PRs within hours), permission rule matcher overhaul, isolated profile catalogs |
| **OpenCode** | Session management (goals, branch tabs), plugin ecosystem, terminal compatibility, model provider compatibility | Users valuing extensibility, multi-branch workflows, diverse terminals | Plugin SDK v2, structured TUI regions, fish shell completion, focus on OpenCode Go and Chinese model providers |

## 5. Community Activity Notes

- **OpenCode** had the highest raw PR volume (50 updated) and sustained issue activity (50 items). Maintainers merged multiple TUI fixes, file-mutation authorization, and fish shell completion.
- **OpenAI Codex** showed heavy issue activity (50 items) and 15 PRs, most closed by the `copyberry[bot]` automation. Windows Computer Use bugs dominate the open tracker.
- **Claude Code** shipped two patch releases, but PR activity was unusually low (1 PR). The issue tracker has 30+ items updated, with strong community engagement on the Fable 5 entitlement bug (71 comments) and message queue feature request (184 👍).
- **Kimi Code** had the lowest issue count (13) but showed high maintainer responsiveness: fix PRs for all three regressions (#2744, #2745, #2742) were opened on the same day as the reports.

## 6. Evidence-Backed Observations

1. **MCP reliability is a cross-tool pain point.** Kimi Code reports dropped streamable-HTTP sessions (fix PR #2748), OpenCode reports duplicate MCP processes (#31554), and Claude Code’s VS Code extension ignores MCP servers entirely (#19054). This indicates that MCP integration is still maturing and lacks consistent reconnection or lifecycle management.

2. **Subagent state machines are fragile across tools.** Claude Code, Codex, and Kimi Code all have open bugs showing subagents stuck in incorrect states, rehydrating as “Working,” or lacking termination detection. No tool has a clean record here.

3. **Windows platform stability remains a significant blocker.** Claude Code and Codex both report severe Windows-specific crashes (GPU process crashes, kernel BSOD, app stutter, Computer Use failures). The other two tools (Kimi Code, OpenCode) did not surface Windows-specific issues today, but the two that did show clear gaps.

4. **Cost and model transparency is a recurring user concern.** Claude Code users report silent model switching with overcharges (#60093) and entitlement bugs (#79337). Codex users report unintended model downgrades (#35292). Neither tool provides clear in-session indicators of which model is active and at what cost.

5. **User demand for non-blocking interaction is growing.** Claude Code’s most-liked feature request (message queue, 184 👍) and Kimi Code’s issue about inability to cancel streaming (#2739) both reflect a desire to manage interaction without interrupting the model’s work. This is not yet a cross-tool feature direction (no evidence from Codex or OpenCode), but it is a strong signal in the Claude Code community.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-09

## Today's Update Brief

Two patch releases (v2.1.225, v2.1.226) shipped with gateway spend-limit support, workspace trust prompts for `claude agents`, and general reliability fixes. The issue tracker shows 30+ items updated in the last 24 hours, with a strong cluster around Fable 5 Max plan entitlement bugs, cyber-safeguard false positives, and Windows desktop app stability. Community demand remains high for message queue mode and desktop remote control capabilities.

## Releases

**v2.1.226** — Bug fixes and reliability improvements.

**v2.1.225** — Two new features:
- **Gateway spend-limit support**: Claude Code's usage warning now names the cap, its reset time, and the operator's message when a limit is reached (requires gateway on matching version).
- **Workspace trust prompt**: `claude agents` now prompts users for trust consent on untrusted directories, matching existing desktop app behavior.

## Hot Issues

1. **[#79337 — Fable 5 Max plan entitlement bug](https://github.com/anthropics/claude-code/issues/79337)** (71 comments, 23 👍)
   **Workflow**: Max plan users trying to use Fable 5 on 2026-07-20 (the day it became standard on Max) are told "usage credits required" and silently downgraded to Opus 4.8.
   **Impact**: Blocks access to the flagship model for users paying for it. High community engagement with no confirmed fix in the 2.1.225/226 releases.

2. **[#50246 — Message queue mode](https://github.com/anthropics/claude-code/issues/50246)** (50 comments, 184 👍)
   **Workflow**: Users want to queue messages while Claude is actively working, rather than interrupting mid-task.
   **Impact**: The most-liked open feature request. Currently the only option is to interrupt and risk derailing work.

3. **[#29006 — Remote control for desktop sessions](https://github.com/anthropics/claude-code/issues/29006)** (36 comments, 119 👍)
   **Workflow**: Enable remote control of Claude Code sessions from the Claude Desktop App.
   **Impact**: Second most-liked feature request. No maintainer response visible in the issue.

4. **[#19054 — MCP servers not used in VS Code extension](https://github.com/anthropics/claude-code/issues/19054)** (24 comments, 26 👍)
   **Workflow**: Claude Code For VS Code ignores MCP server configurations entirely.
   **Impact**: Blocks MCP-dependent workflows in the editor extension. Has been open since January 2026.

5. **[#81698 — Windows GPU process crash kills all sessions](https://github.com/anthropics/claude-code/issues/81698)** (15 comments)
   **Workflow**: Desktop app GPU process crash (exit code 101457950) on Windows kills the entire app and all running sessions.
   **Impact**: Complete data loss for in-flight sessions. Affects NVIDIA RTX 5080 GPUs with latest drivers.

6. **[#84352 — CVP-approved org still receives cyber blocks](https://github.com/anthropics/claude-code/issues/84352)** (13 comments)
   **Workflow**: Organization previously approved for Cyber Verification Program is again receiving safeguard blocks in Claude Code, while the portal shows "Under review."
   **Impact**: Enterprise compliance workflows blocked despite prior approval. No escalation path visible.

7. **[#83436 — Cyber-safeguard false positives on scientific computing](https://github.com/anthropics/claude-code/issues/83436)** (11 comments)
   **Workflow**: IR spectrometer calibration session triggers safeguard blocks on accumulated context, across both Opus 5 and Opus 4.8.
   **Impact**: Legitimate scientific work blocked by false positive safety filters. Pattern: blocks correlate with context length, not content.

8. **[#80058 — Dispatch disabled in macOS Desktop app](https://github.com/anthropics/claude-code/issues/80058)** (10 comments, 1 👍)
   **Workflow**: Dispatch functionality works on mobile but is disabled in the macOS Desktop app.
   **Impact**: macOS users cannot use Cowork/Dispatch features from the desktop.

9. **[#60093 — Model switched to Opus without consent, $1,050 overcharge](https://github.com/anthropics/claude-code/issues/60093)** (10 comments, closed)
   **Workflow**: User's backend model was switched from Sonnet to Opus without disclosure, resulting in $1,050 in charges over three days.
   **Impact**: Cost amplification due to silent model switching. Marked stale but highlights a recurring cost transparency concern.

10. **[#80912 — Windows BSOD in VS Code session](https://github.com/anthropics/claude-code/issues/80912)** (6 comments)
    **Workflow**: Kernel bugcheck 0x139 (KERNEL_SECURITY_CHECK_FAILURE) during VS Code + Claude Code session.
    **Impact**: System-level crash, not just app crash. Same signature as #30137, suggesting a recurring kernel-mode issue.

## Key PR Progress

Only one PR was updated in the last 24 hours:

- **[#77492 — fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77492)** (open, updated 2026-08-08)
  **Changes**: Makes file rules inspect content passed to the Write tool. Maps simple prompt rules to the current UserPromptSubmit payload while retaining the legacy configured field. Adds regression coverage for Write, Edit, and prompt rules.
  **Status**: Open, awaiting review. Addresses a gap where simple rules were inferred from absent fields.

No other PRs saw activity today. This is an unusually low PR volume for the repo.

## Feature Request Clusters

**Message Queue / Non-Interrupting Interaction** (#50246, #85082)
Users want to queue inputs while Claude is working, rather than interrupting. The multi-model orchestration feedback (#85082) shows power users are already running complex workflows that would benefit from non-blocking interaction.

**Remote Control & Desktop Integration** (#29006, #80058, #70564)
Demand for remote control of desktop sessions, mobile-to-desktop Cowork, and per-session MCP allowlists for remote runners. The Dispatch-on-macOS gap (#80058) and unconditional plugin loading on Cowork (#70564) are specific pain points.

**Workspace Trust & Security Prompts** (v2.1.225 release, #84352, #83436)
The new workspace trust prompt for `claude agents` is a positive step, but cyber-safeguard false positives (#83436, #84352) remain a significant enterprise blocker. Users want better targeting of safety filters and clear escalation paths for CVP-approved organizations.

**Model & Context Management** (#79337, #81693, #79410, #81092)
Multiple issues surface around model selection, context window reporting, and memory reliability. Fable 5 entitlement bugs (#79337), incorrect context window size reporting (#81693), dispatch session locks (#79410), and memory recall failures (#81092) all point to model dispatch and state management as a fragile area.

**Draft Persistence & Mobile UX** (#85131)
Typed messages in the Android app are silently discarded when switching conversations. No draft persistence, no warning. This is a quality-of-life issue for mobile-first users.

**Development History Hygiene** (#85130)
Users want Claude to stop inserting development context into code comments/docstrings by default, keeping it in git history instead.

## Developer Pain Points

1. **Cost transparency & silent model switching**: Multiple issues (#60093, #79337, #79410) describe scenarios where the model is switched without user consent, leading to unexpected charges or blocked access. The spend-limit warning in v2.1.225 addresses the gateway case but not the in-session model switching.

2. **False positive safety blocks**: Cyber-safeguard false positives (#83436, #84352) are blocking legitimate scientific and enterprise work. The "Under review" status of previously CVP-approved orgs (#84352) suggests a systemic issue with the verification pipeline.

3. **Windows stability**: GPU process crashes (#81698), kernel BSODs (#80912), and MSIX-specific bugs (#83028, #84199) make Windows a less reliable platform. The MSIX `EBUSY` plugin install issue (#67595) and private dir redirects (#84199) indicate filesystem virtualization problems.

4. **Session state management**: Mouse tracking persist after crashes (#84029), session IDs changing on `/clear` without re-running hooks (#70606), and memory recall failures (#81092) suggest the session lifecycle has edge cases that affect reliability.

5. **MCP integration gaps**: VS Code extension ignoring MCP servers (#19054) and unconditional plugin loading on Cowork (#70564) fragment the MCP experience across platforms.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-09

## Today's Update Brief

A single alpha patch release (`rust-v0.148.0-alpha.5`) landed today, while the repository saw heavy issue activity with 50 items updated in the last 24 hours. The PR queue was exceptionally active with 15 pull requests, most of which were closed by the `copyberry[bot]` automation, covering hook execution, identity management, and sandbox improvements. Windows Computer Use and app stability continue to dominate the open bug tracker.

## Releases

**`rust-v0.148.0-alpha.5`** – No changelog provided beyond the version bump. This is a pre-release alpha in the 0.148 series.

## Hot Issues

1. **#21653 – Multi-line status line in TUI** – [Link](https://github.com/openai/codex/issues/21653)
   *Workflow:* TUI users with rich status line configurations (e.g., branch, model, session info) see truncation when the line exceeds terminal width. *Impact:* Readability degrades in complex workflows. *Community:* 59 👍, 13 comments – strong demand for line wrapping.

2. **#27284 – SSH remote project shows "No chats" while threads exist** – [Link](https://github.com/openai/codex/issues/27284)
   *Workflow:* Codex App connecting to remote Linux SSH hosts. The sidebar fails to list threads even though the state DB has them. *Impact:* Remote development is effectively broken for affected users. 12 comments, cross-platform debugging ongoing.

3. **#37458 – VSCode extension fails to load on Windows** – [Link](https://github.com/openai/codex/issues/37458)
   *Workflow:* Opening VSCode after extension update. *Impact:* Complete loss of Codex functionality in the IDE. *Note:* 11 comments in 2 days – rapid escalation.

4. **#37180 – Windows Computer Use approval prompt never appears** – [Link](https://github.com/openai/codex/issues/37180)
   *Workflow:* `launch_app` tool call on Windows. *Impact:* Computer Use is blocked on Windows desktops. 8 comments, error `node_repl exec context not found`.

5. **#37383 – Computer Use fails with EnumWindows 0x80070003** – [Link](https://github.com/openai/codex/issues/37383)
   *Workflow:* Window/app discovery during Computer Use. *Impact:* Cannot enumerate running applications on Windows 11 Pro 25h2. 8 comments, 4 👍.

6. **#33074 – Windows app causes mouse stutter during startup** – [Link](https://github.com/openai/codex/issues/33074)
   *Workflow:* Launching Codex desktop or switching tasks. *Impact:* Severe system UX degradation. 9 👍, 6 comments – reproducible on clean Windows 11 installs.

7. **#35463 – Subagents drain full week quota overnight** – [Link](https://github.com/openai/codex/issues/35463)
   *Workflow:* Subagent-heavy sessions. *Impact:* Rate limit tracking is broken, consuming all Pro quota rapidly. 5 comments, involves `gpt-5.6-sol`.

8. **#37563 – Desktop rehydrates closed subagents as "Working"** – [Link](https://github.com/openai/codex/issues/37563)
   *Workflow:* Restarting Codex desktop with completed subagent sessions. *Impact:* Stale state persists, potentially confusing users and triggering false activity. 4 comments, 2 👍.

9. **#33479 – Relative write rules recursively expand until E2BIG** – [Link](https://github.com/openai/codex/issues/33479)
   *Workflow:* Using `:workspace_roots` relative write rules across turns. *Impact:* Process spawning fails with `E2BIG` after recursive expansion. 5 comments, 3 👍.

10. **#35292 – Esc-Esc Edit/Resume downgrades model from Ultra to xhigh** – [Link](https://github.com/openai/codex/issues/35292)
    *Workflow:* Using Edit/Resume keyboard shortcut in TUI on Windows. *Impact:* Unintentional model downgrade during prompt editing. Affects Windows TUI users on `gpt-5.6-sol`.

## Key PR Progress

1. **#37644 – Generalize hook handler execution** – [Link](https://github.com/openai/codex/pull/37644)
   Refactors hook routing to handle MCP tool inputs with TOML-incompatible values (e.g., `null`). Merged.

2. **#37641 – Use step context for command approval prefix rules** – [Link](https://github.com/openai/codex/pull/37641)
   Fixes approval rule lookup to use the active step context rather than stale turn state. Merged.

3. **#37622 – Include buffered turns when editing prompts** – [Link](https://github.com/openai/codex/pull/37622)
   Prompt editing now reconstructs buffered live turns before lookup, fixing a missing edit target. Merged.

4. **#37618 – Use step environments for Guardian approval reviews** – [Link](https://github.com/openai/codex/pull/37618)
   Ensures deferred environments are used for Guardian approval context, not stale turn snapshot. Merged.

5. **#37610 – Add workload identity token exchange support** – [Link](https://github.com/openai/codex/pull/37610)
   New `codex-workload-identity` crate for exchanging JWT assertions for ChatGPT credentials. Caches tokens, refreshes before expiry. Merged.

6. **#37607 – Prevent launch context from reaching child processes** – [Link](https://github.com/openai/codex/pull/37607)
   Marks `OPENAI_FEDERATION_RULE_ID` and `OPENAI_IDENTITY_TOKEN_FILE` as non-inheritable. Merged.

7. **#37533 – Support asynchronous command hooks** – [Link](https://github.com/openai/codex/pull/37533)
   Async hooks now run in background with per-session concurrency limit, not just `SessionEnd`. Merged.

8. **#37530 – Implement the gRPC code-mode host service** – [Link](https://github.com/openai/codex/pull/37530)
   Exports `GrpcCodeModeHost` with leased sessions, lifecycle ops, tool-call subscriptions, and notifications. Merged.

9. **#37527 – Terminate timed-out hook process trees** – [Link](https://github.com/openai/codex/pull/37527)
   Uses process groups (Unix) and job objects (Windows) to kill descendant processes of timed-out hooks. Merged.

10. **#37516 – Ignore reusable command approvals for cyber models** – [Link](https://github.com/openai/codex/pull/37516)
    Filters saved `allow` prefix rules for cyber-specialized models, while preserving other policy types. Merged.

## Feature Request Clusters

- **TUI Status Line Improvements:** Multiple requests for multi-line or wrapping status lines (#21653, #17103 for paste handling). Users want richer terminal UI without truncation.
- **Subagent Sandboxing & Delegation Control:** #36381 proposes host-enforced monotonic authority ceilings for subagents. Community interest in least-privilege delegation preflights.
- **Archive/Undo UX:** #30230 requests clearer undo distinction between Archive and Delete in the desktop app. Users find the current behavior destructive.

## Developer Pain Points

- **Windows Computer Use instability:** Five separate issues (#37180, #37383, #37281, #37595, #36645) report failures in app/window discovery, approval prompts, and session teardown. This is the single largest category of open bugs.
- **Subagent state management bugs:** #37563 (rehydration as Working), #35463 (quota drain), and #29886 (false handler errors) indicate systemic issues in subagent lifecycle tracking and rate limit accounting.
- **SSH/remote session state desync:** #27284 shows that remote project threads can be invisible to the UI despite existing in the database. This is a blocking issue for remote development adoption.
- **Performance degradation on Windows:** #33074 (mouse stutter) and #33371 (heartbeat CPU spike) suggest that the Windows application has resource management problems beyond typical CPU/disk saturation.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-09

## 1. Today’s Update Brief
Thursday saw moderate activity: 13 issues and 7 pull requests were updated. No new release was cut. The community reported several regressions in `0.34.0` (EMFILE crash on macOS, provider credential resolution failure in `-p` mode, dropped MCP sessions) and maintainers responded with targeted fixes. Feature requests continue to cluster around cross-session memory and MCP resilience.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 noteworthy)

### #2154 – Subagent panel shows completed foreground subagents as “running” indefinitely
**Impact:** TUI panel never clears finished parallel subagents; elapsed timer keeps incrementing and can show negative time.
**Reaction:** 3 comments, no maintainer resolution yet.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2154

### #2624 – Unable to login (0.6.7)
**Impact:** Users already logged into kimi on web cannot authenticate with the CLI.
**Reaction:** 2 comments, awaiting triage.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2624

### #2742 – Dropped streamable-HTTP MCP session: no auto-reconnect, tools execute different tools
**Impact:** After a server restart, the session is lost permanently; subsequent calls invoke unintended tools.
**Reaction:** 1 comment; a fix PR (#2748) was opened on the same day.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2742

### #2745 – `-p` refuses to start with env-supplied provider key (regression in 0.33.0)
**Impact:** Using `KIMI_API_KEY` or similar env vars fails with “provider X has no credential configured”. Same key in `config.toml` works.
**Reaction:** 0 comments; a fix PR (#2746) was opened immediately.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2745

### #2744 – agent-core-v2 watcher dies with EMFILE on macOS (any directory, 0.34.0)
**Impact:** Crashes on startup even in empty directories. Affects both TUI and `-p` mode. Legacy engine unaffected.
**Reaction:** 0 comments; acknowledged as a critical regression.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2744

### #2739 – Streaming cannot be interrupted by ESC/Ctrl+C; TUI freezes after repeated tool calls
**Impact:** Model generates infinite tool loops; user cannot cancel.
**Reaction:** 1 comment, unassigned.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2739

### #2728 – Permission-rule globs use path semantics, `*` never crosses `/`
**Impact:** Rules like `Bash(rm -rf*)` never match `rm -rf /tmp/x` because `*` stops at slash.
**Reaction:** Tied to #2070 and #2455; a fix PR (#2747) was opened.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2728

### #2713 – status_line payload lacks `thinkingEffort`; custom footers can’t reflect effort switches
**Impact:** Custom footer commands cannot display the current thinking effort because it’s missing from stdin JSON.
**Reaction:** 1 comment; a fix PR (#2741) was opened.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2713

### #2725 – Subagent can recursively spawn new subagents with no depth limit or duplicate detection
**Impact:** Infinite recursion potential; no guard against repeating the same sub-agent task.
**Reaction:** 0 comments, unaddressed.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/2725

### #1805 – TUI scroll jumps to top when scrolling up during session (0.26.0)
**Impact:** Users experience jarring auto-scroll to session start when using mouse wheel.
**Reaction:** 1 👍, 1 comment; still open.
**Link:** https://github.com/MoonshotAI/kimi-code/issues/1805

## 4. Key PR Progress (all 7 merged or open)

### #2746 – fix(agent-core-v2): resolve provider credentials from process env in the auth gate
**Status:** Open
**Fixes:** #2745
**Description:** `explainProviderEndpoint` was called with `{}` instead of defaulting to `process.env`.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2746

### #2748 – fix(agent-core): reconnect dropped streamable-HTTP MCP sessions on tool call
**Status:** Open
**Fixes:** #2742
**Description:** Re-establishes session before tool execution when the server restarts.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2748

### #2747 – fix: match permission rule glob subjects as opaque text
**Status:** Open
**Fixes:** #2728
**Description:** Switches from picomatch path semantics to opaque text matching so `*` matches slashes.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2747

### #2741 – fix(tui): include thinking effort in status line payload
**Status:** Open
**Fixes:** #2713
**Description:** Adds `thinkingEffort` to the JSON snapshot sent to custom footer commands.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2741

### #2740 – fix(agent-core): isolate builtin profile catalogs per session
**Status:** Closed (merged)
**Description:** Prevents profile catalog sharing between sessions, avoiding cross-session state leaks.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2740

### #2711 – fix(tui): resolve `@` file mentions to absolute paths on send
**Status:** Open
**Fixes:** #2688
**Description:** Injects a file existence signal so the agent doesn’t have to rediscover mentioned files.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2711

### #2710 – ci: release packages
**Status:** Open
**Description:** Automated PR from Changesets for publishing npm packages.
**Link:** https://github.com/MoonshotAI/kimi-code/pull/2710

## 5. Feature Request Clusters

- **Cross-session memory / persistent context**
  Issues #843 and #2075 both request a native memory provider mechanism (like Hermes Agent’s plugin) to carry decisions and notes between sessions. No built-in mechanism exists yet.

- **MCP session resilience**
  Issue #2742 (dropped streamable-HTTP sessions) and the corresponding fix PR #2748 highlight a growing need for automatic reconnection and graceful degradation when MCP servers restart.

- **Permission rule improvement**
  Issue #2728 (glob matching semantics) and the fix PR #2747 show that the permission system’s matcher needs to be command-aware rather than path-aware.

- **TUI usability enhancements**
  Multiple issues (#2154, #1805, #2743) complain about subagent panel states, scroll jumps, and auto-scroll to top. “Automatic scrolling to top” appears in two separate Chinese-language reports today.

## 6. Developer Pain Points

- **Regressions in 0.34.0**
  Three distinct regressions emerged today: EMFILE crash on macOS (#2744), provider credential denial in `-p` mode (#2745), and dropped MCP session handling (#2742). All three received immediate fix PRs, indicating the maintainers are responsive.

- **Authentication and credential management**
  Issue #2624 (inability to login) and #2745 (env var bypass) point to persistent friction in how the CLI discovers and validates API keys. Users expect environment variables to work without manual config.

- **Subagent lifecycle bugs**
  The subagent panel showing completed tasks as “running” (#2154) and the ability to spawn infinite subagents (#2725) suggest the subagent state machine lacks proper termination detection and depth limits.

- **Streaming interruption failure**
  Issue #2739 highlights a critical UX gap: the inability to cancel a streaming response when the model enters a tool-call loop. This affects all third-party providers.

- **Scroll glitches in TUI**
  Two separate reports (#1805, #2743) describe the TUI jumping to the top of the session history when the user tries to scroll up – a persistent annoyance.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-09

## 1. Today’s Update Brief
Activity remained high with **50 open issues and 50 PRs updated** in the last 24 hours. No new releases were published. Maintainers merged several TUI fixes and core stability patches, including a fish shell completion fix, file‑mutation authorization improvements, and a plugin hot‑reload test repair. The community continues to report provider‑specific bugs, especially around OpenCode Go’s model ID handling and Chinese model provider cost tracking.

## 2. Releases
None.

## 3. Hot Issues (10 noteworthy)

1. **#27167 – Native session goals with `/goal`**
   [Link](https://github.com/anomalyco/opencode/issues/27167)
   **Impact:** Long‑running feature request (69 comments, 128 👍). Proposes persistent session goals that survive across commands, addressing a gap in the current slash‑command system.
   **Community reaction:** Strong support, discussion ongoing.

2. **#13984 – Cannot copy and paste in OpenCode CLI**
   [Link](https://github.com/anomalyco/opencode/issues/13984)
   **Impact:** Affects everyday use – clipboard copy works but paste yields nothing. 55 comments, 27 👍.
   **Terminal-specific** (some users report success on Kitty/Alacritty).

3. **#14965 – Slow startup (Ghostty-specific)**
   [Link](https://github.com/anomalyco/opencode/issues/14965)
   **Impact:** Startup time regressed from instant to multiple seconds, only on Ghostty. 19 comments, 13 👍.
   **Community:** Users confirm it’s unique to Ghostty; other terminals unaffected.

4. **#33356 – Unbounded growth of the `event` table (13GB+)**
   [Link](https://github.com/anomalyco/opencode/issues/33356)
   **Impact:** SQLite database grows without limit on long‑running instances, filling disks. No retention/compaction policy. 15 comments, 4 👍.
   **Severity:** High – can cause out‑of‑disk errors.

5. **#30611 – Sessions fail on transient network errors instead of retrying**
   [Link](https://github.com/anomalyco/opencode/issues/30611)
   **Impact:** Only `ECONNRESET` is retried; other transient failures (e.g., DNS, TLS) abort the turn. 6 comments.
   **Affected workflow:** Agent sessions break on brief network blips.

6. **#32548 – Step‑cap assistant message causes 400 on Claude models with thinking**
   [Link](https://github.com/anomalyco/opencode/issues/32548)
   **Impact:** When an agent hits its step cap, the appended “MAXIMUM STEPS REACHED” assistant message is rejected by Anthropic’s API (thinking‑enabled models). 5 comments.

7. **#20989 – Random characters printed after exiting OpenCode**
   [Link](https://github.com/anomalyco/opencode/issues/20989)
   **Impact:** Terminal corruption – `Ctrl+C` does not stop the gibberish output. 5 comments, 2 👍.
   **Related:** #29021 (similar report).

8. **#38993 – Add/Remove MCP servers from the TUI with config persistence**
   [Link](https://github.com/anomalyco/opencode/issues/38993)
   **Impact:** Feature request – #37712 exposed MCP runtime controls over HTTP, but the TUI surface is missing. 5 comments.

9. **#41300 – Leading space in model name when using opencode-go/deepseek-v4-flash**
   [Link](https://github.com/anomalyco/opencode/issues/41300)
   **Impact:** API sends `" deepseek-v4-flash"` (leading space), causing HTTP 400. 4 comments, 1 👍.
   **Related:** #41306, #41314, #41322 (multiple reports of the same root cause).

10. **#40420 – gpt-5.6-luna via opencode-go returns `finish_reason: null` (no `[DONE]`)**
    [Link](https://github.com/anomalyco/opencode/issues/40420)
    **Impact:** Hermes Agent fails with every response from this model – streamed or non‑streamed. 3 comments.

## 4. Key PR Progress (10 important)

1. **#41343 – Fix codegen: write prettier‑stable generated manifests**
   [Link](https://github.com/anomalyco/opencode/pull/41343)
   **What:** Formats `.httpapi-codegen.json` through Prettier instead of raw `JSON.stringify`.
   **Why:** Last red CI job on v2.

2. **#41342 – TUI: show session branches in vertical tabs**
   [Link](https://github.com/anomalyco/opencode/pull/41342)
   **What:** Displays non‑default VCS branch next to the project name in vertical session tabs.
   **Impact:** Improves context for multi‑branch workflows.

3. **#12042 – Plugin SDK v2**
   [Link](https://github.com/anomalyco/opencode/pull/12042)
   **What:** Provides two SDK clients (v1 and v2) to avoid backwards‑compatibility issues and allow incremental adoption.
   **Status:** Long‑standing PR (Feb 2026) – still open.

4. **#7156 – Agent default variant handling in TUI and desktop**
   [Link](https://github.com/anomalyco/opencode/pull/7156)
   **What:** Respects an agent’s configured model variant in the app and TUI.
   **Closes:** #22065.

5. **#41189 – TUI: region structure for plugin slot placement**
   [Link](https://github.com/anomalyco/opencode/pull/41189)
   **What:** Replaces positional plugin slot names with structured regions, allowing plugins to insert relative to host parts.
   **Architectural change:** Enables more flexible plugin layout.

6. **#41202 – Authorize file mutations before locking**
   [Link](https://github.com/anomalyco/opencode/pull/41202)
   **What:** Permission check happens before acquiring file‑mutation locks, preventing deadlocks on denied operations.
   **Safety:** Critical for concurrent tool access.

7. **#41308 – TUI: align session tab shortcut labels**
   [Link](https://github.com/anomalyco/opencode/pull/41308)
   **What:** Makes session tab markers keyboard‑shortcut aware (1‑9, 0, subdued dot for >10).
   **UX:** Consistent two‑cell gutter.

8. **#41336 – CLI: add fish shell completion support**
   [Link](https://github.com/anomalyco/opencode/pull/41336)
   **What:** Fixes `opencode completion fish` emitting bash/zsh scripts. Adds proper fish syntax.
   **Closes:** #41232.

9. **#41335 – Escape literal wildcards and anchor patch insertions**
   [Link](https://github.com/anomalyco/opencode/pull/41335)
   **What:** Fixes wildcard matcher and patch insertion logic to handle literal `*` and anchor patterns.
   **Closes:** #41333.

10. **#35935 – Observability: add v2 genai tracing**
    [Link](https://github.com/anomalyco/opencode/pull/35935)
    **What:** Records OTLP traces for agent turns, model steps, transport, tools, retries, subagents, etc. Documents Dash0 setup.
    **Size:** Major feature (merged via automated cleanup).

## 5. Feature Request Clusters

- **Session Management & Goals**
  #27167 (native `/goal`), #31307 (session isolation when multiple instances share a project).
  Request: persistent session‑level objectives and private session states.

- **File Handling**
  #27689 (drag‑and‑drop Microsoft Office files), #41281 (mouse text selection unreadable in light mode).
  Request: expand supported file types and improve terminal text selection.

- **MCP & Plugin Management**
  #38993 (add/remove MCP servers from TUI), #34776 (plugin commands broken in Desktop), #31554 (MCP duplicate processes).
  Request: first‑class UI for MCP configuration and plugin reliability.

- **Model Provider Compatibility**
  #34877 (cost tracking $0 for Chinese providers), #41273 (Moonshot/Kimi hang), #41300/41306/41314/41322 (leading space in model name).
  Request: better support for non‑OpenAI providers, especially OpenCode Go and Chinese models.

- **Terminal & UI Enhancements**
  #37876 (help icon overlaps send button on narrow screens), #35649 (links wrapped across lines not clickable in Kitty), #41339 (plugin slash commands pass through as raw text).
  Request: responsive web UI, OSC 8 hyperlink support, regression fixes.

## 6. Developer Pain Points

- **Clipboard & Terminal Integrity**
  #13984 (paste not working), #20989/#29021 (random characters after exit).
  *Frustration:* core terminal interaction is broken for many users.

- **Performance & Data Bloat**
  #14965 (slow startup on Ghostty), #33356 (13GB+ SQLite event table), #41337 (bun CPU spike after hibernation).
  *Frustration:* resource usage degrades over time, no built‑in compaction.

- **Provider API Regressions**
  #41300 series (leading space in model name — multiple duplicates), #40420 (missing `finish_reason`), #32548 (Claude thinking step‑cap error).
  *Frustration:* OpenCode Go and popular third‑party models frequently break, requiring manual workarounds.

- **Plugin & Extension Instability**
  #41339 (plugin slash commands regression in Desktop), #34776 (ECC plugin incompatibility), #31554 (MCP duplicate processes).
  *Frustration:* plugin ecosystem is fragile, especially on Desktop.

- **Cross‑Platform Gaps**
  #41321 (PowerShell 7 MSIX not detected on Windows), #35649 (Kitty link wrapping), #14965 (Ghostty startup).
  *Frustration:* terminal‑specific and OS‑specific bugs slow down adoption across diverse environments.

</details>