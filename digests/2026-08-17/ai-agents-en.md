# OpenClaw Ecosystem Digest 2026-08-17

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-08-17 03:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-17

## Today’s Activity Brief
In the past 24 hours, 500 issues were updated (413 open, 87 closed) and 500 pull requests were updated (337 open, 163 merged/closed). One new release was published: a CPU profile archive for PR #124528. The project continues to see a high volume of bug reports and feature requests, particularly around subagent reliability, Codex integration, and session state management. Several critical fix PRs landed today, while many long-standing issues remain under maintainer review.

---

## Releases

### pr-124528-profiles
- **URL**: https://github.com/openclaw/openclaw/releases/tag/pr-124528-profiles
- A CPU profile archive captured from the bounded three-node, twelve-concurrent-turn Gateway rig used for PR #124528. Contains representative “before” and exact-head “after” Gateway profiles for the event-loop hotspot comparison. This is not a versioned release but a supporting artifact for performance analysis.

---

## Project Progress
Today, 163 PRs were merged or closed. Notable closed PRs include:

- **#119067** – fix(slack): keep reasoning in one partial preview (closed). Prevents multiple stale Slack messages during reasoning-streaming.
  https://github.com/openclaw/openclaw/pull/119067

- **#118716** – fix(gateway): retain agent model override provenance (closed). Fixes agent-initiated model changes being persisted as user overrides.
  https://github.com/openclaw/openclaw/pull/118716

- **#118682** – fix(gateway): project effective session reasoning (closed). Hides reasoning in the control UI when reasoning is inherited but not explicitly set.
  https://github.com/openclaw/openclaw/pull/118682

- **#118668** – fix(media): clean empty host staging directories (closed). Prevents accumulation of empty media staging directories.
  https://github.com/openclaw/openclaw/pull/118668

- **#120900** – feat(ui): review install policy warnings (closed). Allows administrators to review and acknowledge plugin install policy warnings in the control UI.
  https://github.com/openclaw/openclaw/pull/120900

- **#111870** – [Bug]: @openclaw/codex fails to register in CLI context (closed).
  https://github.com/openclaw/openclaw/issues/111870

- **#91212** – [Bug]: delivery-recovery 0 recovered / N failed after gateway restart (closed).
  https://github.com/openclaw/openclaw/issues/91212

- **#92433** – [Bug]: Subagent completion silently dropped when announce steers into a requester run that ends before processing it (closed).
  https://github.com/openclaw/openclaw/issues/92433

Several new fix PRs were opened today, including:

- **#124953** – fix(agents): record interrupted trajectory ending for restart-marked sessions.
  https://github.com/openclaw/openclaw/pull/124953

- **#124994** – fix(gateway): prevent large history from blocking chat startup.
  https://github.com/openclaw/openclaw/pull/124994

- **#124964** – fix(agents): flush memory after CLI and gateway turns.
  https://github.com/openclaw/openclaw/pull/124964

- **#124976** – fix(codex): report dynamic tool audit starts once.
  https://github.com/openclaw/openclaw/pull/124976

---

## Community Hot Topics
The most active issues (by comment count) reflect deep engagement with reliability and performance problems:

- **#116201** (67 comments) – Realtime voice work can retain unbounded provider and consult state.
  https://github.com/openclaw/openclaw/issues/116201
  *Underlying need: hard ownership bounds for voice session resources to prevent resource leaks under slow/stalled conditions.*

- **#44925** (32 comments) – Subagent completion silently lost — no retry, no notification on timeout.
  https://github.com/openclaw/openclaw/issues/44925
  *Persistent pain point: subagent orchestration has multiple failure modes causing silent data loss.*

- **#42475** (27 comments) – Feature: Per-agent cost budget enforcement at the gateway level.
  https://github.com/openclaw/openclaw/issues/42475
  *Demand for operator-controlled spending caps without external monitoring.*

- **#91009** (21 comments) – Codex PreToolUse native hook relay spawns CPU-bound processes and stalls gateway RPC.
  https://github.com/openclaw/openclaw/issues/91009
  *High severity: Codex integration can cause gateway-wide CPU starvation.*

- **#87744** (18 comments) – Codex-backed Telegram turns repeatedly time out waiting for turn/completed.
  https://github.com/openclaw/openclaw/issues/87744
  *Reliability regression on 2026.5.27 affecting production Telegram bots.*

- **#115908** (15 comments) – Session transcript projection reconcile can livelock under sustained writes.
  https://github.com/openclaw/openclaw/issues/115908
  *Core session stability issue: synchronous rebuild can stall the event loop for tens of seconds.*

Additional high-traffic issues include #38327 (Google Vertex regression), #74586 (AM memory_search aborts), #86215 (Codex OAuth refresh wedges), #109490 (codex app-server turn interrupted), #84516 (long replies truncated), #67777 (subagent delivery lost), #53408 (write/exec tool parameters dropped), and #88657 (DeepSeek V4 Flash incomplete turn).

---

## Bugs & Stability
The following bugs are ranked by severity (P1) and impact. Many have no fix PR yet; associated fix PRs are noted where available.

| Issue | Severity | Impact | Fix PR? |
|-------|----------|--------|---------|
| #116201 – Realtime voice unbounded state | P1 | Resource leak, session-state | None |
| #44925 – Subagent completion silently lost | P1 | Data loss, message loss | None |
| #91009 – Codex CPU-bound processes | P1 | Crash-loop, gateway stall | None |
| #87744 – Codex Telegram timeout | P1 | Message loss, session-state | None |
| #115908 – Session transcript livelock | P1 | Main thread stall, all transports blocked | None |
| #38327 – Google Vertex regression | P1 | Auth-provider, crash | None |
| #74586 – AM memory_search aborts | P1 | Session-state | None |
| #86215 – Codex OAuth refresh wedges | P1 | Auth-provider, message loss | None |
| #109490 – Codex app-server turn interrupted | P1 | Message loss | None |
| #84516 – Long agent replies truncated | P1 | Message loss | None |
| #67777 – Subagent completion delivery lost | P1 | Message loss | None |
| #53408 – Write/exec tool parameters dropped | P1 | Session-state | None |
| #88657 – DeepSeek incomplete turn | P2 | Message loss | None |
| #112423 – SQLite transcript cleanup blocks | P1 | Event loop freeze | None |
| #45494 – Cron jobs silently time out | P2 | Reliability | None |
| #46786 – tools.elevated breaks exec routing | P1 | Security impact | None |
| #97616 – Leaked hook/tool child processes | P1 | Performance degradation | None |
| #86612 – Docker restart loop | P1 | Crash-loop | None |
| #92433 – Subagent completion dropped (closed) | P2 | Session-state | Fixed in #92433 |
| #91212 – Delivery-recovery fails (closed) | P1 | Message loss | Fixed in #91212 |

**Fix PRs today for related bugs**:
- #124953 (interrupted trajectory) – addresses #104950.
- #124994 (large history startup) – addresses session startup blocking.
- #124964 (memory flush) – addresses silent memory accumulation.
- #124976 (dynamic tool audit starts) – addresses instrumentation duplication.
- #103201 (memory session sync deletes/re-embeds) – addresses #40919, still open.
- #109493 (worker workspaces recovery) – still open.

---

## Feature Request Clusters
Multiple feature requests appeared in today’s top issues, clustering around a few themes:

**Cost Management & Budgeting**
- #42475 – Per-agent cost budget enforcement at the gateway.
- #33975 – Fallback approval mode + model attribution.

**Context & Session Control**
- #22438 – Tiered bootstrap file loading for progressive context control.
- #45501 – Configurable `session.resetPrompt` startup message.
- #116010 – Remove hard 128k context cap per model.

**Multi-Agent & Fleet Operations**
- #71058 – Support for multiple Azure/Teams bots on a single gateway.
- #124926 – `infer image generate` unusable in multi-agent fleet (needs agent selector).
- #43564 – ACP session skill context injection for Codex/Pi agents.

**Security & Permissions**
- #74594 – RFC: Skill Capability Manifests v0.
- #124909 – Session permission modes with worktree-scoped defaults (PR open).
- #60841 – toolsAllow cannot re-expose core tools in embedded cron runs.

**UX & Observability**
- #39406 – Suppress transient tool error warnings.
- #45565 – Route gateway lifecycle warnings to dedicated channel.
- #120449 – tools.loopDetection detections not surfaced to model or transcript.
- #88087 – Poor UX for long-running background tasks.

**Channel & Transport**
- #123984 – Telegram per-message context control with `/ignore` (PR open).
- #115076 – Webchat text+image misclassification.

---

## User Feedback Summary
Real user pain points and use cases from today’s data:

- **Subagent reliability** is the most common frustration: completions are silently lost, timeouts are not retried, and state can appear finished before the work is done (issues #44925, #67777, #92433, #106704).
- **Codex integration** remains fragile: CPU-bound processes (#91009), turn timeouts (#87744), OAuth refresh wedges (#86215), truncated replies (#84516), and turn interruption (#109490) are all blocking production use.
- **Session transcript performance** issues: livelock under writes (#115908), SQLite cleanup blocking the event loop (#112423), and large history blocking startup (#124994) cause gateway stalls.
- **Provider

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-17

## 1. Daily Cross-Project Overview

Today’s activity across the two tracked projects shows a stark contrast in scale and focus. OpenClaw processed 500 issues and 500 PRs with 163 merges, centered on core infrastructure reliability, subagent orchestration, and Codex integration bugs. Youdao Lobster merged 13 PRs focused on UI/UX polish, configuration fixes, and a runtime upgrade, with zero new issues filed and six stale issues remaining untouched. While OpenClaw’s community is deeply engaged in diagnosing P1 production blockers, Lobster’s activity is concentrated on incremental feature delivery and bug fixes for its desktop application layer.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
|---------|---------------|-------------|----------------|---------------|
| **OpenClaw** | 500 (413 open, 87 closed) | 500 (337 open, 163 merged/closed) | 1 artifact release (CPU profile, not versioned) | High-velocity bug reporting and fix cycle; 13 P1 bugs with no fix PRs; deep community discussion on reliability |
| **Youdao Lobster** | 6 (all stale from April, 0 new) | 15 (13 merged, 2 open) | No release | Low issue volume; focused UI/UX improvements; persistent unresolved bugs from April |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw’s 500 issues and 500 PRs dwarf Lobster’s 6 issues and 15 PRs by two orders of magnitude. This reflects OpenClaw’s role as a core reference platform with a large, active contributor base versus Lobster’s smaller, application-level project.

**Technical focus:** OpenClaw’s activity is dominated by foundational infrastructure issues — subagent lifecycle reliability, session state integrity, Codex integration, and gateway performance. Lobster’s work is entirely at the UI/UX and configuration layer: scroll-to-bottom buttons, copy buttons, Esc key handling, session list grouping, and log sanitization. No Lobster work touches the core agent runtime.

**Community surface area:** OpenClaw’s top issues have 15–67 comments each, with maintainers engaged in diagnosing P1 bugs. Lobster’s top issues have 1–2 comments, with no maintainer responses on several critical bugs (Ollama, MCP engines, document conversion). OpenClaw’s community is actively shaping the platform’s reliability roadmap; Lobster’s community is waiting for fixes.

## 4. Shared Technical Focus Areas

**Session state management:** Both projects show requirements for better session lifecycle control. OpenClaw has multiple P1 bugs on session transcript livelock (#115908), SQLite cleanup blocking (#112423), and large history blocking startup (#124994). Lobster’s #1653 reports a group policy being repeatedly overwritten to `allowlist`, suggesting a configuration persistence bug in session-level settings.

**Agent orchestration / coordination:** OpenClaw’s top pain points are subagent completions silently lost (#44925, #67777, #92433) and per-agent cost budget enforcement (#42475). Lobster’s #1644 requests a feature for the main agent to orchestrate other agents via markdown workflows, with a comment that “agents are currently unaware of each other.” Both see multi-agent coordination as an unmet need, though at different levels of abstraction.

**Cost visibility and control:** OpenClaw has a long-running feature request for per-agent cost budget enforcement at the gateway (#42475, 27 comments). Lobster delivered a stats dashboard with execution count and success rate for scheduled tasks (#1679), which provides cost-adjacent visibility. Both projects are responding to user demand for operational control and observability.

**Per-agent workspace isolation:** OpenClaw’s #118716 fix (agent model override provenance) and Lobster’s #1668 merge (per-agent working directory) both address the need for agents to have distinct, isolated configurations. The underlying requirement — separating agent state from user state — appears in both.

## 5. Differentiation Analysis

| Dimension | OpenClaw | Youdao Lobster |
|-----------|----------|----------------|
| **Primary target user** | Developers building/deploying agent infrastructure; operators managing gateways and fleets | End-users and power users running a desktop AI assistant application |
| **Feature focus** | Subagent reliability, Codex integration, session state, gateway performance, provider support | UI polish, multi-session management, scheduled tasks, per-agent configuration, i18n |
| **Technical architecture** | Distributed, multi-node gateway with event loop, subagent orchestration, Codex RPC, provider abstraction | Desktop application (likely Electron) wrapping an OpenClaw runtime; UI is the primary surface |
| **Community engagement model** | High-volume issue reporting, deep debugging, maintainer-driven fix PRs | Lower volume; users report bugs and feature requests with limited maintainer interaction |
| **Release cadence** | Continuous high volume (1 artifact release today, multiple fix PRs landed) | No release today; incremental PR merges without a packaged release |

**Key observation:** OpenClaw is the platform; Lobster is a client. Lobster’s upgrades to the OpenClaw runtime (#1663) demonstrate this dependency. The two projects are not competing — they serve different layers of the stack.

## 6. Community Activity Notes

**High activity tier:** OpenClaw — 500+ issues and PRs updated, 1 supporting artifact release, deep community discussion (15–67 comments per top issue), multiple fix PRs landed.

**Moderate activity tier:** Youdao Lobster — 15 PRs (13 merged), 6 stale issues, 0 releases, minimal community engagement on open issues.

**No low activity tier observed** in the tracked projects today.

## 7. Evidence-Backed Observations

1. **Subagent reliability is the dominant cross-project pain point.** OpenClaw has 4+ P1 bugs on subagent completion loss, delivery drops, and silent timeouts (#44925, #67777, #92433, #106704). Lobster’s #1644 requests agent orchestration features, implicitly acknowledging that agents cannot currently coordinate. Users in both projects are experiencing multi-agent failures as a primary blocker.

2. **Codex integration is a specifically OpenClaw pain point with no counterpart in Lobster.** OpenClaw has 5+ P1 Codex-related bugs active today (#91009, #87744, #86215, #109490, #84516) covering CPU starvation, timeouts, OAuth wedges, and message truncation. Lobster’s digest contains no mention of Codex, consistent with its application-layer focus.

3. **UX polish is the clear focus of Lobster’s current development cycle.** Seven of the 13 merged PRs today are UI/UX improvements (scroll-to-bottom, regenerate, copy buttons, Esc close, context menu, session grouping, stats dashboard). This batch delivery suggests a coordinated push to address user complaints about missing standard chat-app features, rather than ad-hoc fixes.

4. **Session state management is a shared concern at different levels.** OpenClaw’s issues are at the core infrastructure level (livelock, SQLite blocking, large history startup). Lobster’s issue is at the application configuration layer (group policy overwrite). Both indicate that session persistence and lifecycle are not yet fully solved in either project.

5. **No clear cross-project signal on cost management or security.** While OpenClaw has a feature request for cost budget enforcement (#42475) and security-related issues (tools.elevated routing, #46786; leaked child processes, #97616), Lobster’s digest shows no parallel activity. These remain OpenClaw-specific concerns with no cross-project evidence today.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# Project Digest for 2026-08-17

## 1. Today's Activity Brief
Today saw 15 pull requests updated, with 13 merged/closed and 2 still open. The merged batch includes a wide range of UI/UX enhancements (scroll-to-bottom button, regenerate button, copy buttons for tool results, Esc key support for modals, context menu, session list grouping, stats dashboard) and important bug fixes (log sanitization, OpenClaw upgrade, provider link migration, agent working directory). Six open issues were updated, all stale from April, with no new issues filed. No new releases were published.

## 2. Releases
No new releases occurred today.

## 3. Project Progress
**Merged/Closed PRs (13 items):**

- **UI/UX improvements:**
  - [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) – Added floating "scroll to bottom" button in cowork chat.
  - [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) – Added "regenerate" button on AI reply messages.
  - [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) – Added copy buttons to tool execution results (Bash, diff, standard tools).
  - [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) – Unified Esc key close on all modal components.
  - [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) – Added Windows right‑click context menu for opening directories.
  - [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) – Grouped cowork session list by time periods (Today, Yesterday, etc.).
  - [#1679](https://github.com/netease-youdao/LobsterAI/pull/1679) – Added stats dashboard (execution count, success rate, trend chart) to scheduled task run history.

- **i18n & settings fixes:**
  - [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) – Fixed hardcoded English tooltips in multiple buttons, now properly internationalized.
  - [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) – Updated Qwen provider links from DashScope to Bailian console.
  - [#1669](https://github.com/netease-youdao/LobsterAI/pull/1669) – Fixed "Test Connection" button disable logic and custom provider display name in test results.

- **Bug fixes & stability:**
  - [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) – Sanitized logs to redact API keys, tokens, and other sensitive data on export.
  - [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) – Upgraded OpenClaw runtime to v2026.4.12 and the WeChat plugin to 2.1.8, fixing a `resolvePreferredOpenClawTmpDir` error.
  - [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) – Added per‑agent working directory configuration (non‑main agents), with database migration.

**Open PRs (2 items):**
- [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) – Show agent name and description on welcome area for non‑main agents.
- [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) – Fix provider prefix preservation for slashed model IDs (e.g., `deepseek-ai/DeepSeek-V4-Flash`).

## 4. Community Hot Topics
- **Issue [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)** – "groupPolicy为啥每过一会就被覆盖为allowlist" (2 comments). User reports that the group policy keeps being overwritten to `allowlist` after a short time. No maintainer response yet.
- **Issue [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)** – "ollama的本地模型没法使用". User cannot use Ollama models (Qwen3, Gemma4) – error shown. Screenshots indicate a connection or parsing failure. No fix PRs directly linked.
- **Issue [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)** – "许愿：期望增加基于md的工作流的功能". Feature request for main agent to orchestrate other agents via markdown workflows. User notes that agents are currently unaware of each other.

These issues have low activity (1–2 comments each) but represent persistent user pain points.

## 5. Bugs & Stability
- **High severity:**
  - [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) – Ollama local models unusable (error on call). No fix PR.
  - [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) – Non‑SSE MCP engines cannot be found/used. No fix PR.
  - [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) – MD‑to‑Word conversion fails with "sse response finish reason: full". No fix PR.
- **Medium severity:**
  - [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) – Group policy repeatedly overwritten. No fix.
  - [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) – Saving a scheduled task shows "还有内容未保存" even though it saves successfully. Likely UI/validation bug.
- **Fixed today:**
  - Log sanitization ([#1661](https://github.com/netease-youdao/LobsterAI/pull/1661)) prevents sensitive data leakage.
  - OpenClaw upgrade ([#1663](https://github.com/netease-youdao/LobsterAI/pull/1663)) fixes a runtime error.
  - Settings page fixes ([#1669](https://github.com/netease-youdao/LobsterAI/pull/1669)) improve test connection logic.

## 6. Feature Request Clusters
- **Agent orchestration / workflow:** Issue [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) requests the ability to compose agents into markdown‑based workflows. No related PRs today.
- **Per‑agent working directory:** Merged PR [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) directly addresses user requests for isolated workspace per agent.
- **Session management improvements:** Merged PRs [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) (time‑based grouping) and [#1679](https://github.com/netease-youdao/LobsterAI/pull/1679) (stats dashboard) respond to user feedback on session and task history usability.
- **Non‑main agent welcome page:** Open PR [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) adds dynamic agent name/description, a common request for multi‑agent clarity.

## 7. User Feedback Summary
- **Positive:** The batch of UI polish PRs (scroll‑to‑bottom, regenerate, copy, Esc close, context menu) addresses common complaints about missing standard chat‑app features. The log sanitization fix is a direct response to privacy concerns.
- **Negative/frustration:** Several critical bugs remain unresolved for months (Ollama, MCP engines, document conversion). Users report that basic functionality is broken for local models and non‑SSE MCP, which may hinder adoption for power users. The group policy overwrite issue (#1653) suggests a configuration persistence bug.
- **Feature requests:** Users want better agent coordination, per‑agent workspaces (now delivered), and session/statistics improvements (now delivered). The welcome page personalization is also in progress.

## 8. Backlog Watch
- **Stale open issues (all from April, updated today but still open):**
  - [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) – group policy overwrite (no maintainer comment).
  - [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) – Ollama models unusable.
  - [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) – false "not saved" warning on timer.
  - [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) – workflow feature request (no official response).
  - [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) – non‑SSE MCP broken.
  - [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) – MD‑to‑Word conversion error.
- **Open PRs needing attention:**
  - [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) – Welcome area personalization (awaiting merge).
  - [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) – Provider preservation for slashed model IDs (fix for a potential regression, created Aug 7, updated Aug 16).

</details>