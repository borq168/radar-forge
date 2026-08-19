# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-19 00:42 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-08-19

## 1. Daily Cross-Tool Overview

Today saw one patch release from Claude Code (v2.1.235), a significant feature release from OpenAI Codex (rust-v0.148.0 with TUI export and session forking), and three patch releases from Kimi Code (v0.37.0–0.37.2). OpenCode had no new releases. Community activity was high across all four tools, with 50 issues updated in the last 24 hours for Claude Code, Codex, and OpenCode each, and 20 for Kimi Code. Cross-tool patterns include persistent billing/ quota complaints, Windows-specific platform bugs, and demand for better session management and TUI usability.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today |
|------|---------------------|-------------------|----------------|
| Claude Code | 50 | 1 (stalled since March) | v2.1.235 (patch) |
| OpenAI Codex | 50 | 10 (active) | rust-v0.148.0 (major feature) + 2 alpha patches |
| Kimi Code | 20 | 10 (active) | v0.37.0, v0.37.1, v0.37.2 (patches) |
| OpenCode | 50 | 10 (active) | None |

## 3. Shared Feature Directions

**Session lifecycle management** appears across multiple tools:
- **Claude Code**: Cross-session `send_message` reliability issues (#86279) and requests for session management improvements.
- **OpenAI Codex**: Shipped session forking and archive/restore in rust-v0.148.0; community requests for bulk export and session search.
- **Kimi Code**: `/undo` not rolling back TodoList state (#3058) — a session state consistency issue.
- **OpenCode**: Pause/resume commands request (#7226) and stuck session bugs (#43277, #43296).

**Billing/ quota transparency** is a cross-tool pain point:
- **Claude Code**: July 17 billing incident (#81703) with unclear reimbursement.
- **OpenAI Codex**: No specific billing issue today, but quota management is relevant.
- **Kimi Code**: Quota consumed by auth failures (#3014), requests for quota visibility in status line (#872).
- **OpenCode**: Multiple billing bugs — Zen balance not lifting free caps (#33495), quota exhaustion after cache drops (#42935), inconsistent percentage displays (#43023).

**Windows-specific platform issues** persist across all tools:
- **Claude Code**: MSIX update failure (#76357), Dispatch tab missing on Windows 11 (#77071).
- **OpenAI Codex**: Browser control Trusted RPC error (#39136), WSL Git detection regression (#35119).
- **Kimi Code**: VS Code extension regressions on Windows after agent-core-v2 (#3059).
- **OpenCode**: Windows detached-child hang fix in PR #29831.

**TUI/UI usability improvements** requested across tools:
- **Claude Code**: VSCode focus stealing (#32726), sorting bugs in Desktop (#56060).
- **OpenAI Codex**: Subagent cards stuck visible (#23930), blank webview on Linux (#32041).
- **Kimi Code**: Input line scrolling away (#875, #2195, #2721), fullscreen mode request.
- **OpenCode**: TUI scrolling during streaming (#7648), prompt drag-and-drop issues (#43308).

## 4. Differentiation Analysis

**Feature focus:**
- **Claude Code** emphasizes agent collaboration (Cowork VM, cross-session messaging) and memory systems, but today's community feedback suggests these features are unstable on Intel Macs and Windows.
- **OpenAI Codex** invested heavily in TUI capabilities (export, session forking, draft prompts during init) and security hardening (Guardian V2, OAuth metadata, exec approval binding). The tool shows the strongest focus on enterprise-grade security and multi-account workflows.
- **Kimi Code** is focused on multi-skill prompting (shipped in 0.37.0), subagent detail panels, and experimental flow features. The community is small but vocal about TUI ergonomics.
- **OpenCode** has the most community-driven provider expansion (Qwen3, CommandCode, SCX.ai) and the deepest set of billing issues. The tool appears to be the most open-source community-oriented.

**Target users:**
- Claude Code and OpenAI Codex appear to target enterprise/professional developers with multi-agent workflows and security features.
- Kimi Code seems focused on individual developers using TUI and VS Code, with a lighter feature set.
- OpenCode's community is actively requesting new model providers, suggesting a user base that values provider flexibility and cost control.

**Technical approach:**
- Claude Code and Kimi Code both use agent-core-v2 architectures, with Kimi Code's PR #3038 introducing a declarative flow system.
- OpenAI Codex has the most active security hardening pipeline (Guardian V2, OAuth, exec approval).
- OpenCode has the most open PR pipeline with community contributors fixing bugs across core, session, and UI layers.

## 5. Community Activity Notes

**By issue count:** Claude Code, OpenAI Codex, and OpenCode each had 50 issues updated in 24 hours; Kimi Code had 20.

**By PR activity:** OpenAI Codex (10 active PRs), Kimi Code (10), and OpenCode (10) all show strong development activity. Claude Code has only 1 PR, stalled since March, indicating a maintainer team focused on bug triage rather than community contributions.

**By release pace:** OpenAI Codex shipped the most significant feature release (rust-v0.148.0) with TUI export and session forking. Kimi Code shipped three patches with targeted fixes. Claude Code shipped one patch. OpenCode had no releases.

**Maintainer responsiveness:** OpenAI Codex maintainers are actively debugging the Windows Trusted RPC issue (#39136) with 63 comments. OpenCode has active PR merges. Claude Code has no maintainer response on high-community issues like VSCode focus stealing (#32726, 52 👍). Kimi Code closed the alternate screen issue (#2195) with a workaround but has no response on several new bugs.

## 6. Evidence-Backed Observations

**1. Billing and quota issues are the most cross-cutting pain point, affecting user trust across all tools.**
- Claude Code: July 17 billing incident (#81703) with unclear reimbursement status.
- Kimi Code: Auth failures consuming quota (#3014), no quota visibility in status line (#872).
- OpenCode: Three separate billing bugs (#33495, #42935, #43023) with Zen balance, quota exhaustion, and inconsistent displays.
While OpenAI Codex had no specific billing issue today, the pattern across three of four tools is notable.

**2. Windows platform stability remains a significant gap across all four tools.**
- Every tool has at least one Windows-specific bug reported in the last 24 hours, ranging from update failures (Claude Code #76357) to browser control errors (Codex #39136) to VS Code extension regressions (Kimi Code #3059) to shell hang issues (OpenCode #29831). This suggests a systemic quality gap in Windows support across the ecosystem.

**3. Session state management is a common reliability challenge, especially for multi-agent workflows.**
- Claude Code's cross-session messaging (#86279), OpenAI Codex's phantom threads (#28276) and lost prompts (#25928), Kimi Code's undo inconsistency (#3058), and OpenCode's stuck sessions (#43277, #43296) all point to session state corruption or management failures. This is a core reliability issue that affects user trust in AI-assisted coding workflows.

**4. Community-driven provider/model expansion is strongest in OpenCode, while Claude Code and Codex focus on internal features.**
- OpenCode's community filed requests for Qwen3.8-27B (#42729), CommandCode (#26338), and SCX.ai (#42520) today. Kimi Code has a request for native OAuth support (#2850). In contrast, Claude Code and OpenAI Codex community issues focus on fixing existing features rather than adding new providers. This reflects different community compositions and tool maturity levels.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-19

## Today’s Update Brief

Anthropic shipped one patch release (v2.1.235) with a new spellcheck setting and two cache-layer fixes. Community activity is high: 50 issues updated in the last 24 hours, overwhelmingly driven by a cluster of Cowork VM regressions on Intel Macs and cross-session messaging bugs. The only open pull request remains stalled since March.

## Releases

- **v2.1.235** — Adds an optional `spellcheck` setting that underlines misspelled words in the prompt input, using `aspell`, `hunspell`, or `ispell`. Fixes two bugs: whole-prompt-cache invalidation when a language server disconnects/reconnects mid-session, and a nested-m fix (details truncated in changelog).
  [Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)

## Hot Issues

*Pick of 10 most impactful issues from the last 24 hours.*

1. **#76357 – Windows MSIX update fails with “Another program is currently using this file”**
   *Affected workflow:* Claude Desktop on Windows (Microsoft Store/MSIX) cannot apply updates; app becomes unlaunchable until reboot. 26 comments, 6 👍. Community frustration is high because the issue recurs every update and has been open since July 10.
   [Issue](https://github.com/anthropics/claude-code/issues/76357)

2. **#32726 – VSCode extension: panel steals focus on output**
   *Affected workflow:* Users in other editor tabs lose focus when Claude finishes a response. 14 comments, 52 👍 (highest 👍 in today’s data). Request for a configurable option to prevent auto-focus.
   [Issue](https://github.com/anthropics/claude-code/issues/32726)

3. **#13689 – Model fails to follow instructions in longer sessions**
   *Affected workflow:* Claude Code ignores or misinterprets rules specified in CLAUDE.md over time. 13 comments, 7 👍. General complaint about instruction-following degradation, no maintainer response visible.
   [Issue](https://github.com/anthropics/claude-code/issues/13689)

4. **#81703 – July 17 mass billing incident: credits charged despite plan allowance**
   *Affected workflow:* Users on paid plans were charged $604.71 in automatic recharges for usage that should have been covered. 12 comments, 0 👍. Anthropic acknowledged the incident but reimbursement status is unclear.
   [Issue](https://github.com/anthropics/claude-code/issues/81703)

5. **#56060 – Desktop: “Sort by: Recency” has no effect when “Group by: Project”**
   *Affected workflow:* Conversation list sorting is broken in the Desktop app. 12 comments, 12 👍. Filed as a bug in the CLI tracker (closest venue).
   [Issue](https://github.com/anthropics/claude-code/issues/56060)

6. **#87503 – Cowork VM connection timeout after update to 1.32352.0 on Intel Mac**
   *Affected workflow:* Cowork virtual machines no longer boot on Intel Macs; host hangs at “usernet: calling AcceptBess”. 11 comments. Regression confirmed by multiple users.
   [Issue](https://github.com/anthropics/claude-code/issues/87503)

7. **#73468 – macOS sandbox unusable: `sandbox-exec -p` exceeds ARG_MAX with many git worktrees**
   *Affected workflow:* Every sandboxed command fails with `E2BIG` on macOS. 9 comments, 5 👍. Environment-specific but blocks all sandbox usage for users with large git worktrees.
   [Issue](https://github.com/anthropics/claude-code/issues/73468)

8. **#86279 – Cross-session `send_message` never delivers, leaves target session hung**
   *Affected workflow:* Agent-to-agent message appears successful but target session spins indefinitely. 4 comments, 1 👍. Core agent workflow broken for Windows users.
   [Issue](https://github.com/anthropics/claude-code/issues/86279)

9. **#77071 – Dispatch tab completely missing from Claude Desktop sidebar (Windows 11, Pro plan)**
   *Affected workflow:* Pro plan users on Windows 11 cannot see the Dispatch tab; UI regression. 10 comments, 1 👍.
   [Issue](https://github.com/anthropics/claude-code/issues/77071)

10. **#87783 – Auto memory persists claims but not observations; no source tracking**
    *Affected workflow:* The memory system records what a note says but not where it read it from, making it impossible to distinguish drifted vs. never-bound notes. 1 comment, 0 👍 (new). Highlights a design gap in the auto-memory feature.
    [Issue](https://github.com/anthropics/claude-code/issues/87783)

## Key PR Progress

Only one open pull request was updated in the last 24 hours:

- **#41611 – “add the missing source to claude code”**
  *Author:* @tornikeo. No comments. Summary is vague; likely a documentation or meta fix. Stalled since March 31.
  [PR](https://github.com/anthropics/claude-code/pull/41611)

No other PRs were active. This suggests the maintainer team is focused on bug triage rather than merging community contributions.

## Feature Request Clusters

Recurring requests from today’s issues (without predicting roadmap):

- **Cowork VM stability on Intel Macs** — Multiple issues (#87503, #87512, #87642, #87759) describe identical regressions after a bundle update. Users request a rollback or a fix for the NVMe disk enumeration and guest boot hang.
- **Cross-session messaging reliability** — Several reports (#86279, #86608, #87323, #87694) detail `send_message` not actually delivering to the target session or freezing it. This is a core feature for agent coordination.
- **Windows update/deployment** — #76357 and #73107 both describe the same MSIX update lock issue. Users want a reliable update mechanism without requiring a reboot.
- **Billing incident resolution** — #81703 and #83062 demand transparent reconciliation for auto-recharge overcharges on Individual plans.
- **Model instruction following** — #13689 and #87469 (CLAUDE.md rules ignored in long sessions) show a persistent desire for better adherence to user-defined rules.
- **Auto-memory transparency** — #87783 requests that the memory system store source provenance (which file/context a note was read from).
- **VSCode integration** — #32726 (focus stealing) is a long-standing UI request with high community support.

## Developer Pain Points

Today’s data highlights several recurring frustrations:

1. **Windows update breakage** — The MSIX package update failure (#76357) has been open for over a month, forcing users to reboot for every update. This is the highest-comment issue.
2. **Intel Mac Cowork regression** — A bundle update broke VM booting for all Intel Mac users, with no workaround or rollback. Multiple duplicate reports indicate a wide impact.
3. **Cross-session messaging unreliability** — Agent-to-agent messaging is a key feature for multi-agent workflows, but users report it silently fails or freezes the target session. Demo-breaking for power users.
4. **macOS sandbox ARG_MAX** — The sandbox implementation on macOS fails for users with large git repositories, making the entire security feature unusable for many.
5. **Billing surprises** — Automated recharges for supposedly included usage erode trust, especially when the incident is acknowledged but not resolved.
6. **VSCode focus stealing** — Despite being open since March and having 52 👍, the issue has no maintainer response. This is a common pain point for editor-focused developers.

---

*Digest generated from `github.com/anthropics/claude-code` data. All links are to the respective GitHub issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-19

## Today's Update Brief

Today saw a significant release in the `rust-v0.148.0` branch, bringing TUI export and session forking capabilities. The community remains highly active with 50 issues and 50 pull requests updated in the last 24 hours, though a cluster of Windows-specific browser control bugs and MCP process lifecycle issues dominates the discussion. The long-standing Markdown export feature request (issue #2880) was finally closed as shipped after nearly a year of community demand.

## Releases

### rust-v0.148.0
- **TUI Markdown Export** — `/export` command copies complete TUI conversations to clipboard or writes to a new file. (#37358)
- **Session Forking** — `codex exec fork` creates forked sessions; TUI resume picker now supports archive/restore. (#37367, #37369, #37371)
- **Draft Prompts During Init** — Compose prompts while the TUI initializes, reducing perceived startup latency.

### rust-v0.148.0-alpha.23 & rust-v0.148.0-alpha.22
- Maintenance releases with no public changelog details.

## Hot Issues

### 1. [#39136 — Codex built-in browser plugin initialization fails: Trusted RPC dependency error](https://github.com/openai/codex/issues/39136)
**63 comments | 👍 20**
*Affected workflow:* Windows users trying to use the in-app browser for web-based tasks.
The browser plugin crashes on startup with a "Trusted RPC dependency is not within a trusted code path" error. Multiple users report the same stack trace on Windows 10/11. The issue is generating significant debugging activity from maintainers.

### 2. [#32041 — VS Code extension opens blank webview on Linux](https://github.com/openai/codex/issues/32041)
**56 comments | 👍 3**
*Affected workflow:* Linux users relying on the VS Code extension for inline AI assistance.
Version 26.5707.* renders a completely blank webview; rolling back to 26.5623 restores functionality but loses Sol 5.6 model support. Persistent across multiple Linux distributions.

### 3. [#2880 — Copy/Export Message as Markdown (CLOSED)](https://github.com/openai/codex/issues/2880)
**31 comments | 👍 78**
*Affected workflow:* Developers needing to document AI-assisted code or share conversations.
After 353 days, this feature request was closed with the release of rust-v0.148.0. Community reaction is strongly positive; the high upvote count reflects pent-up demand for documentation workflows.

### 4. [#30408 — MCP server processes leak: never cleaned up (9+ GB RSS)](https://github.com/openai/codex/issues/30408)
**29 comments | 👍 8**
*Affected workflow:* Heavy users of MCP tools across multiple conversations.
Codex app-server spawns a full MCP process set per thread but never kills them on archive/close. Users report 9+ GB RSS accumulation over time. This is a persistent performance bug with no fix yet.

### 5. [#20500 — Support multiple named accounts per app/connector](https://github.com/openai/codex/issues/20500)
**28 comments | 👍 107**
*Affected workflow:* Developers working with multiple GitHub/GitLab/cloud accounts.
Feature request for explicit account selection with hard privacy boundaries. The highest-upvoted open issue today, indicating strong demand for multi-identity workflows.

### 6. [#25928 — Submitted prompts randomly disappear before entering queue](https://github.com/openai/codex/issues/25928)
**27 comments | 👍 18**
*Affected workflow:* Cursor IDE users on Windows submitting prompts that vanish.
Prompts are silently dropped before reaching the queue. Users report frustration with lost work, especially during long coding sessions.

### 7. [#23930 — Subagent cards remain stuck/visible after close](https://github.com/openai/codex/issues/23930)
**26 comments | 👍 5**
*Affected workflow:* Users managing multiple subagents in the Codex desktop app.
Completed subagents remain visible in the UI even after the backend reports no live agent. Confusing UX that forces manual cleanup.

### 8. [#35119 — Valid WSL repositories marked as non-Git on Windows](https://github.com/openai/codex/issues/35119)
**23 comments | 👍 17**
*Affected workflow:* Windows developers using WSL2 for projects.
Codex 26.721.3404 reports "Git is unavailable" for valid WSL ext4 repositories. Regression from 26.715.10079. Blocks project context features.

### 9. [#39173 — Fails to control browser (in app or Chrome)](https://github.com/openai/codex/issues/39173)
**21 comments | 👍 10**
*Affected workflow:* Windows users needing browser automation for web tasks.
Same Trusted RPC dependency error as #39136. Closed as duplicate but contributed additional diagnostic data.

### 10. [#28276 — Failed to archive conversation + phantom threads](https://github.com/openai/codex/issues/28276)
**19 comments | 👍 3**
*Affected workflow:* Users trying to maintain clean conversation histories.
"Failed to archive conversation" error plus threads appearing without any identifiable origin. Suggests session state corruption.

## Key PR Progress

### 1. [#39322 — Enforce workspace restrictions for header authentication](https://github.com/openai/codex/pull/39322)
Validates externally supplied header credentials against configured ChatGPT workspace restrictions using the `chatgpt-account-id` header. Rejects missing or disallowed account IDs.

### 2. [#39320 — Expand OAuth metadata redirect test coverage](https://github.com/openai/codex/pull/39320)
Adds tests for same-origin redirects, cross-origin rejection, and redirect cycle timeout. Improves OAuth security posture.

### 3. [#39319 — Add the async user message tool](https://github.com/openai/codex/pull/39319)
Introduces `send_user_message_async` for root agents, enabling async message delivery without ending the current turn. Supports the new async-message feature flag.

### 4. [#39316 — Support Edu Plus and Edu Pro account plans](https://github.com/openai/codex/pull/39316)
Recognizes `edu_plus` and `edu_pro` as distinct education workspace plans across authentication, rate limiting, and account schemas.

### 5. [#39315 — Evict guardian transcript entries in cacheable chunks](https://github.com/openai/codex/pull/39315)
Changes Guardian transcript eviction to use a bounded buffer and evict half of applicable entries, improving cache stability during streaming.

### 6. [#39314 — Run hooks with the captured session environment](https://github.com/openai/codex/pull/39314)
Captures the process environment at hook registry creation time and reuses the snapshot across config reloads. Prevents live environment changes from affecting hook execution.

### 7. [#39311 — Bind unified exec approvals to shell executables](https://github.com/openai/codex/pull/39311)
Security fix: unfamiliar executables that ignore their arguments no longer inherit trust from inner commands. Evaluates executables alongside parsed commands during approval checks.

### 8. [#39307 — Fail closed on Guardian V2 risk scoring errors](https://github.com/openai/codex/pull/39307)
Treats configuration, serialization, and classification errors as elevated risk rather than retaining a low-risk result. Hardens security boundary.

### 9. [#39304 — Keep Guardian v2 risk scores in memory](https://github.com/openai/codex/pull/39304)
Stops writing Guardian v2 scores to rollout history. Resumed/forked threads are treated as having no prior score, triggering normal classification review.

### 10. [#39296 — Enable MCP tool hooks in Codex sessions](https://github.com/openai/codex/pull/39296)
Executes `mcp_tool` hook handlers through the shared MCP runtime. Restricts hook calls to connected, cataloged, and policy-allowed tools; unavailable servers fail immediately.

## Feature Request Clusters

### TUI and Session Management
Multiple requests for enhanced session lifecycle control are being addressed by the new `rust-v0.148.0` features (export, fork, archive). The community continues to request:
- Bulk export/archive of multiple sessions
- Session search/filtering in the TUI resume picker
- Named session bookmarks

### Multi-Account and Identity Management
Issue #20500 (107 👍) leads a cluster of requests for multi-account support. Users want:
- Multiple named accounts per connector (GitHub, GitLab, etc.)
- Hard privacy boundaries between accounts
- Explicit account selection per conversation

### MCP Stability and Resource Management
The MCP process leak (#30408) and related issues drive requests for:
- Proper cleanup of per-thread MCP processes
- Configurable MCP server lifecycle policies
- Resource usage reporting per MCP server

### Windows/Linux Platform Parity
Windows-specific bugs dominate the open issues list. Users request:
- WSL Git repository detection fixes
- Chrome extension registry key installation
- Integrated terminal PTY startup reliability
- Voice chat fork context preservation

## Developer Pain Points

**Windows browser control is broken.** Multiple issues (#39136, #39173, #39318, #39236) report the same Trusted RPC dependency error. The Chrome repair flow does not rebuild the configuration. Impacted users cannot use web automation or browser-based tools.

**MCP server processes are never cleaned up.** Issue #30408 and #38754 describe MCP processes accumulating unboundedly across threads, consuming 9+ GB RSS. No fix has been released despite the issue being over a month old.

**Subagent UI state is unreliable.** Issues #23930 and #35209 report completed subagents remaining visible in "Active" or "Working" status. Users must manually verify agent state, adding friction to multi-agent workflows.

**Context compaction fails on Windows.** Issue #38370 reports a 404 error on `/responses/compact` when conversations reach the automatic compaction threshold, potentially losing context history.

**Session state corruption is common.** Issues #28276, #25928, and #39269 describe lost prompts, failed archiving, and phantom threads. These suggest underlying session management instability that affects user trust in the tool.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-19

## Today's Update Brief

Three patch releases (0.37.0–0.37.2) shipped in the last 24 hours, bringing multi-skill prompting, image-paste fixes, and subagent detail panel improvements. Community activity is high: 20 issues and 50 PRs were updated, with a strong cluster of TUI usability complaints and a rising number of VS Code extension bugs reported after the agent-core-v2 rollout.

## Releases

- **v0.37.2** — Patch: Subagent detail panel now keeps the working process fully expanded during execution. ([#3061](https://github.com/MoonshotAI/kimi-code/pull/3061))
- **v0.37.1** — Patch: Fixes pasted images failing to reach the model on first send (legacy video resolver was shadowing the media resolver). ([#3053](https://github.com/MoonshotAI/kimi-code/pull/3053))
- **v0.37.0** — Minor: Activate multiple skills in a single prompt by typing `/` after whitespace — the skill selector now supports multi-select. ([#2935](https://github.com/MoonshotAI/kimi-code/pull/2935))

## Hot Issues

1. **#3014 — CLI returns 403 usage limit despite dashboard showing 0%**
   Author: [@rschafer777](https://github.com/rschafer777) | 6 comments | 👍 4
   **Workflow:** Quota enforcement / Login Device.
   **Impact:** Failed Login Device calls are consuming the 5h/weekly quota, but the dashboard shows no usage. The user is blocked from using the tool.
   **Reaction:** High urgency — users are being charged quota for auth failures, not model usage. ([Link](https://github.com/MoonshotAI/kimi-code/issues/3014))

2. **#872 — Display 5-hour and weekly quota remainders in status line**
   Author: [@MAB2908](https://github.com/MAB2908) | 4 comments | 👍 4
   **Workflow:** Status visibility.
   **Impact:** Users must run `/status` manually to see quota limits; the footer only shows context usage.
   **Reaction:** Persistent request with strong upvotes — a clear UX gap. ([Link](https://github.com/MoonshotAI/kimi-code/issues/872))

3. **#2195 — Option to disable alternate screen for SSH use**
   Author: [@rudidev08](https://github.com/rudidev08) | 3 comments | 👍 0
   **Workflow:** Remote SSH sessions.
   **Impact:** TUI uses alternate screen buffer, so terminal scrollback is lost.
   **Reaction:** Closed with a workaround — users must set `ALTERNATE_SCREEN=false`. ([Link](https://github.com/MoonshotAI/kimi-code/issues/2195))

4. **#2721 — Fullscreen TUI mode with mouse text selection**
   Author: [@zsj555](https://github.com/zsj555) | 2 comments | 👍 0
   **Workflow:** TUI interaction.
   **Impact:** Users want a toggleable fullscreen mode (like Claude Code) and mouse-based text selection/copy.
   **Reaction:** Feature request, no maintainer response yet. ([Link](https://github.com/MoonshotAI/kimi-code/issues/2721))

5. **#2850 — Proper OpenAI Codex (OAuth) subscription support**
   Author: [@xsyetopz](https://github.com/xsyetopz) | 1 comment | 👍 1
   **Workflow:** Third-party provider integration.
   **Impact:** Users currently rely on fragile `codex-proxy` to use Codex subscriptions; native OAuth is needed.
   **Reaction:** Community member has a working branch — maintainer interest unclear. ([Link](https://github.com/MoonshotAI/kimi-code/issues/2850))

6. **#2435 — Configurable footer line 2 & expose plan quotas**
   Author: [@YueDeity](https://github.com/YueDeity) | 1 comment | 👍 1
   **Workflow:** Custom status line.
   **Impact:** Footer line 2 is hardcoded and cannot be hidden; quote data is not exposed to `status_line.command`.
   **Reaction:** Follow-up to #2255 (shipped in 0.30.0) — gaps remain. ([Link](https://github.com/MoonshotAI/kimi-code/issues/2435))

7. **#875 — Pin input line and attached UI elements to the bottom**
   Author: [@MAB2908](https://github.com/MAB2908) | 1 comment | 👍 0
   **Workflow:** TUI scrolling.
   **Impact:** Input line moves up with conversation history, making it hard to track the current plan.
   **Reaction:** Duplicate of multiple other issues — strong UX pain. ([Link](https://github.com/MoonshotAI/kimi-code/issues/875))

8. **#3059 — VS Code extension 0.7.0: TodoList card no longer shows items when expanded**
   Author: [@passportermsn](https://github.com/passportermsn) | 0 comments | 👍 0
   **Workflow:** VS Code extension / agent-core-v2.
   **Impact:** TodoList tool card shows only "Todo list updated" after agent-core-v2 default switch; context usage % is frozen.
   **Reaction:** Regression from 0.6.x → 0.7.0 — no maintainer response yet. ([Link](https://github.com/MoonshotAI/kimi-code/issues/3059))

9. **#3058 — `/undo` does not roll back TodoList state**
   Author: [@dhnihaoya](https://github.com/dhnihaoya) | 0 comments | 👍 0
   **Workflow:** Undo/revert.
   **Impact:** Undoing a conversation turn leaves stale TodoList items, causing confusion.
   **Reaction:** Bug report, no response. ([Link](https://github.com/MoonshotAI/kimi-code/issues/3058))

10. **#3051 — Add "omp" to the coding-agent whitelist**
    Author: [@dlivxpr](https://github.com/dlivxpr) | 0 comments | 👍 0
    **Workflow:** Third-party agent integration.
    **Impact:** `omp` (oh-my-pi) users cannot use Kimi Coding membership without impersonating another client.
    **Reaction:** Request to whitelist an open-source agent fork. ([Link](https://github.com/MoonshotAI/kimi-code/issues/3051))

## Key PR Progress

1. **#3038 [OPEN] — Experimental flow feature (agent-core-v2)**
   Author: [@RealKai42](https://github.com/RealKai42)
   **Summary:** Introduces a declarative flow system that separates execution from acceptance — users can define stages, gates, and audit trails for long multi-stage tasks.
   **Significance:** Major architectural change for agent-core-v2; aims to solve self-approval and drift problems. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3038))

2. **#2943 [OPEN] — Hooks can answer tool approvals**
   Author: [@rullerzhou-afk](https://github.com/rullerzhou-afk)
   **Summary:** `PermissionRequest` hooks can now answer native tool approvals, not just observe them. External approval surfaces can fully automate the approval flow.
   **Significance:** Closes #1326 — a long-standing gap for automation users. ([Link](https://github.com/MoonshotAI/kimi-code/pull/2943))

3. **#3060 [OPEN] — WaitFor tool for background tasks**
   Author: [@chengluyu](https://github.com/chengluyu)
   **Summary:** In goal mode, the model can now explicitly wait for background sub-agents or bash tasks to finish, instead of ending the turn and hoping the next turn finds them done.
   **Significance:** Fixes a core goal-mode reliability issue. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3060))

4. **#3053 [CLOSED] — Fix legacy video resolver shadowing media resolver**
   Author: [@7Sageer](https://github.com/7Sageer)
   **Summary:** On the v2 engine, first-send pasted images failed because the legacy video resolver intercepted the `kimi-file://` reference before the media resolver could process it.
   **Significance:** Shipped in 0.37.1 — directly fixes a common image-paste workflow. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3053))

5. **#3054 [OPEN] — Collapse long `!` shell command output in TUI**
   Author: [@Grapedge](https://github.com/Grapedge)
   **Summary:** Long shell command output (build logs, file dumps) now collapses into a scrollable region instead of flooding the transcript.
   **Significance:** Addresses a major TUI readability issue. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3054))

6. **#3056 [OPEN] — Include `content` in assistant tool-call messages**
   Author: [@PaiduiXiaowangzi](https://github.com/PaiduiXiaowangzi)
   **Summary:** OpenAI-compatible gateways reject assistant messages with `tool_calls` but no `content` field. This PR adds `content: null` to comply with spec.
   **Significance:** Fixes #3017 — a breaking issue for custom providers. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3056))

7. **#3052 [OPEN] — Emit `null` content for assistant messages with no text**
   Author: [@RealKai42](https://github.com/RealKai42)
   **Summary:** Both OpenAI chat-completions history converters now emit `content: null` instead of dropping the key, fixing 400 errors from strict gateways.
   **Significance:** Duplicate fix for #3017, targeting the kosong package. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3052))

8. **#2995 [OPEN] — Hierarchical skill group selector with tab navigation**
   Author: [@creatiVision](https://github.com/creatiVision)
   **Summary:** The `/skill` command now supports hierarchical grouping (e.g. `cv/ops/semaphore`) with visual categories and tab navigation.
   **Significance:** Enhances the multi-skill prompting shipped in 0.37.0. ([Link](https://github.com/MoonshotAI/kimi-code/pull/2995))

9. **#3050 [OPEN] — Enable Tower through experimental flag**
   Author: [@bj456736](https://github.com/bj456736)
   **Summary:** Registers the `KIMI_CODE_EXPERIMENTAL_TOWER` flag to gate the Tower runtime, which was previously silent on current main.
   **Significance:** Unblocks Tower feature for testing. ([Link](https://github.com/MoonshotAI/kimi-code/pull/3050))

10. **#2862 [OPEN] — Support two OAuth login endpoints**
    Author: [@liruifengv](https://github.com/liruifengv)
    **Summary:** Allows the client to use separate OAuth hosts, managed API endpoints, and telemetry URLs for `.com` and `.cn` deployments.
    **Significance:** Infrastructure for multi-region support. ([Link](https://github.com/MoonshotAI/kimi-code/pull/2862))

## Feature Request Clusters

- **TUI scrolling & input pinning:** Multiple issues request the input box to stay pinned to the bottom while scrolling (e.g., #875, #891, #2959, #2960). Users working in SSH/Mosh sessions also request alternate screen toggling (#2195, #3035).
- **Quota visibility in status line:** Users want weekly/5h quota remainders displayed in the footer alongside context usage (#872, #2435).
- **Image/attachment handling:** Pasted images failing on first send (#3053) and zero-byte images poisoning sessions (#2249, #2979) are recurring pain points.
- **Subagent/provider consistency:** When changing providers in the web UI, subagent providers are not updated (#3041). Users also want the "New Conversation" button to not clear all active conversations (#3036).
- **VS Code extension stability:** Post-agent-core-v2 switch, the TodoList card is broken (#3059), context usage is frozen, and the "New Conversation" button clears all chats (#3036).

## Developer Pain Points

- **TUI usability:** The input box scrolling away is the single most-reported UX issue, with four separate issues filed in the last 24 hours alone. Users on remote sessions (SSH, Mosh) are particularly affected.
- **Quota ambiguity:** The 403 usage limit error (#3014) reveals a critical bug where auth failures consume quota. Combined with the lack of quota visibility in the status line, developers are flying blind on their usage.
- **VS Code extension regressions:** The agent-core-v2 rollout appears to have introduced regressions in the TodoList tool and context usage display, affecting users who upgraded from 0.6.x to 0.7.0.
- **Undo inconsistency:** The `/undo` command does not roll back TodoList state (#3058), breaking the expected undo workflow for task-oriented users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-08-19

### Today’s Update Brief
Activity remained high with 50 issues and 50 PRs updated in the last 24 hours. No new releases dropped. The community focused on billing/quotas (Zen & Go subscription inconsistencies), UI/UX polish (TUI scrolling, drag-and-drop, narrow viewport overlap), and model provider additions (Qwen3.8-27B, CommandCode, SCX.ai). Several long‑standing PRs from the “automated‑pr‑cleanup” batch advanced toward merge.

### Releases
None in the last 24 hours.

### Hot Issues (top 10 by comment count & community impact)

1. **#3787 — [CLOSED] [FEATURE]: Linear Agent**
   Request to integrate Linear Agents for automatic issue assignment. 17 comments, 34 👍.
   https://github.com/anomalyco/opencode/issues/3787

2. **#32149 — [OPEN] Opencode Stops Processing Requests Without Response**
   Application enters “thinking” state then hangs with no output. 15 comments, 6 👍.
   https://github.com/anomalyco/opencode/issues/32149

3. **#7648 — [CLOSED] Setting to prevent TUI scrolling when new messages are streamed-in**
   Users want to keep reading older output while the agent streams new content. 11 comments, 18 👍.
   https://github.com/anomalyco/opencode/issues/7648

4. **#26338 — [CLOSED] [FEATURE]: Add CommandCode as a Provider**
   Request to support CommandCode.ai as an authentication option. 9 comments, 36 👍.
   https://github.com/anomalyco/opencode/issues/26338

5. **#7226 — [CLOSED] [FEATURE]: implement a /resume and /pause command**
   Pause/resume for long agent sessions without interrupting the workflow. 8 comments, 28 👍.
   https://github.com/anomalyco/opencode/issues/7226

6. **#33495 — [OPEN] [BUG] Zen balance does not remove free usage cap; paid users still hit 200‑request/free usage limit**
   Users with active Zen balance ($20+) still get 429 errors. 7 comments, 1 👍.
   https://github.com/anomalyco/opencode/issues/33495

7. **#42729 — [OPEN] [FEATURE]: Add Qwen3.8-27B**
   Request to include Qwen3.8-27B in the OpenCode Go subscription catalog. 6 comments, 4 👍.
   https://github.com/anomalyco/opencode/issues/42729

8. **#37489 — [OPEN] [FEATURE]: Performance issue — Context cache invalidation when switching modes or during compaction**
   Significant performance degradation with local LLMs (vLLM, Ollama) due to repeated cache invalidation. 6 comments, 1 👍.
   https://github.com/anomalyco/opencode/issues/37489

9. **#43023 — [OPEN] Quota usage inconsistency: Monthly usage percentage exceeds Weekly usage percentage with mismatched cost statistics**
   Go subscription dashboard shows conflicting percentages and mismatched cost charts. 5 comments, 2 👍.
   https://github.com/anomalyco/opencode/issues/43023

10. **#42935 — [OPEN] OpenCode Go quota exhausted in ~20 minutes after DeepSeek V4 Flash cache reads suddenly dropped to 0**
    Suspicious caching/billing issue where usage jumped from 11% to 100% in minutes when cache reads vanished. 4 comments, 3 👍.
    https://github.com/anomalyco/opencode/issues/42935

### Key PR Progress (top 10 by impact)

1. **#42978 — [OPEN] fix(app): show current worktree branch**
   Ensures the Desktop sidebar correctly displays the branch for manually created Git worktrees.
   https://github.com/anomalyco/opencode/pull/42978

2. **#42520 — [OPEN] docs: add SCX.ai to the providers list**
   Documentation update to include SCX.ai as a supported provider.
   https://github.com/anomalyco/opencode/pull/42520

3. **#43314 — [OPEN] fix(session): degrade undecodable image attachments instead of failing the prompt**
   Images in unsupported formats (AVIF, HEIC, BMP, TIFF) no longer crash the entire prompt; they are gracefully degraded.
   https://github.com/anomalyco/opencode/pull/43314

4. **#29831 — [OPEN] fix(core): resolve spawn completion on exit, not only close (Windows detached‑child hang)**
   Prevents shell commands with background processes from hanging forever on Windows.
   https://github.com/anomalyco/opencode/pull/29831

5. **#43282 — [OPEN] fix(core): expose valid subagent IDs in the subagent tool**
   Closes #36761 — now lists valid agent names in the tool description.
   https://github.com/anomalyco/opencode/pull/43282

6. **#43310 — [CLOSED] fix(opencode): remove Qwen sampling defaults**
   Stops forcing `temperature: 0.55` and `top_p: 1` for all Qwen models, letting provider defaults apply.
   https://github.com/anomalyco/opencode/pull/43310

7. **#43309 — [OPEN] feat(opencode): make generated title length configurable**
   Adds `title_max_words` config option to cap auto‑generated session titles.
   https://github.com/anomalyco/opencode/pull/43309

8. **#43308 — [OPEN] fix(app): limit prompt drag state to files**
   Prevents accidental attachment of text selections or subagent cards when dragging into the prompt area.
   https://github.com/anomalyco/opencode/pull/43308

9. **#43306 — [OPEN] docs: add SuperCompress MCP server example**
   New MCP server documentation for compressing bulky context.
   https://github.com/anomalyco/opencode/pull/43306

10. **#37684 — [CLOSED] feat(mcp): bridge runtime‑added MCP tools into the core tool registry**
    Solves the primary user-facing prompt path for runtime MCP tools (follow‑up to #37308).
    https://github.com/anomalyco/opencode/pull/37684

### Feature Request Clusters
- **New model / provider support** — Multiple requests for Qwen3.8-27B (#42729), CommandCode (#26338), SCX.ai (#42520), and a console login CLI option (#43131). The community is actively pushing for broader model ecosystem coverage.
- **UI/UX improvements** — TUI scrolling behavior (#7648), pause/resume commands (#7226), Mermaid diagram detection in untagged fences (#43304), and narrow‑viewport prompt controls (#43295) show demand for a smoother, more customizable interface.
- **Agent workflow enhancements** — Linear Agent integration (#3787), configurable title length (#43309), and subagent tool improvements (#43282) reflect interest in better agent orchestration and session management.

### Developer Pain Points
- **Billing & quota bugs** dominate the open issues: Zen balance not lifting free‑tier caps (#33495, #43208), Go quota exhaustion after cache drops (#42935, #40031), and inconsistent quota percentages (#43023, #39891) are causing frustration and trust issues.
- **Performance and stability** — Context cache invalidation (#37489), event storage explosion (#41175), and stuck sessions (#43277, #43296) indicate core reliability problems, especially with local LLMs and long sessions.
- **Data integrity** — Message ID wraparound (#43303), malformed tool inputs (#37669), and re‑serialization of diffs (#42748) are subtle but serious bugs that can corrupt session history or inflate database size.
- **Path and project management** — Moving project directories breaks paths (#34737), and identical git remotes for different clones produce duplicate project IDs (#42315), complicating multi‑workspace workflows.

</details>