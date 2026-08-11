# OpenClaw Ecosystem Digest 2026-08-11

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-08-11 01:02 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-11

## 1. Today's Activity Brief

The project saw extremely high activity with 500 issues and 500 pull requests updated in the last 24 hours. Of those, 409 issues remain open/active, 91 were closed, and 154 PRs were merged or closed. No new releases were published. The most discussed topics include recurrent silent reply failures (issue #121058, 47 comments), a long-standing feature request for memory trust tagging (#7707, 33 comments), and a P1 regression causing duplicate Telegram replies after the 5.20 update (#86519, 15 comments). Several large feature branches from maintainer @galiniliev are in progress, introducing memory authorization contracts and identity protocols.

## 2. Releases

No new releases were published today.

## 3. Project Progress

While the top 30 open PRs by comment count are all still open, 154 PRs were merged or closed in the last 24 hours. Notable open PRs advancing toward merge include:

- **#121647** (fix: context-engine durable state stalls in long sessions) – aims to close #121623 by preventing a `too-large` classification from permanently blocking the durable outbox after sessions exceed 20k events or 8 MiB.
- **#121601** (fix: open terminals no longer delay gateway updates) – adds an optional `terminalPolicy` to allow gateway updates even when a terminal session is active.
- **#121601** (fix: open terminals no longer delay gateway updates) – adds an optional `terminalPolicy` to allow gateway updates even when a terminal session is active.
- **#121652** (fix(ui): open the session companion from one header toggle) – addresses a UI friction issue where the companion required three interactions.
- **#121153** (feat(memory): add trusted channel ingress context) – part of a multi-PR stack by @galiniliev to build a memory authorization system; currently waiting on author.
- **#121743** (chore(release): sign rebased 2026.8.1 beta.2 candidate) – a staging PR for the next beta release.

Several other PRs are in “ready for maintainer look” status, including #121779 (refactor turn latency ownership), #121780 (defer non-startup imports), #121627 (restrict multimodal indexing), and #121768 (eliminate export name collisions).

## 4. Community Hot Topics

The most active issues and PRs by comment count and reactions reveal recurring user concerns:

- **#121058** – [OPEN] *Silent reply failures still recurring after #116277 closed* (47 comments, 0 👍)
  Users report that the monitoring cron continues to log failures even after the previous fix was closed. The issue remains unresolved, indicating the root cause may be deeper.
  [Link](https://github.com/openclaw/openclaw/issues/121058)

- **#7707** – [OPEN] *Feature Request: Memory Trust Tagging by Source* (33 comments, 0 👍)
  A long-standing request (since Feb 2026) to tag agent memory entries by trust level based on origin. Underlying need: prevent memory poisoning from untrusted content. The issue is labeled with `needs-maintainer-review` and `needs-product-decision`.
  [Link](https://github.com/openclaw/openclaw/issues/7707)

- **#22438** – [OPEN] *feat: Tiered bootstrap file loading for progressive context control* (18 comments, 0 👍)
  Users want to avoid wasting LLM tokens on bootstrap files that are never referenced. The feature would allow tiered loading per session.
  [Link](https://github.com/openclaw/openclaw/issues/22438)

- **#86519** – [CLOSED] *[Bug]: Agent repeats identical replies 2-10x on Telegram after 5.20 update* (15 comments, 1 👍)
  A regression that was partially mitigated but not fully fixed. The issue was closed, but the underlying problem may still affect some users.
  [Link](https://github.com/openclaw/openclaw/issues/86519)

- **#42475** – [OPEN] *[Feature]: Per-agent cost budget enforcement at the gateway level* (14 comments, 1 👍)
  Operators request daily/monthly caps to prevent runaway spend without external monitoring. Has a linked PR open.
  [Link](https://github.com/openclaw/openclaw/issues/42475)

- **#115908** – [OPEN] *Session transcript projection reconcile can livelock under sustained writes* (13 comments, 0 👍)
  A P1 bug causing main thread stalls; no fix PR is linked yet.
  [Link](https://github.com/openclaw/openclaw/issues/115908)

- **#40001** – [OPEN] *Write tool lacks append mode — isolated cron sessions destroy shared files* (12 comments, 1 👍)
  Data loss caused by overwrite in cron sessions; has a linked PR open.
  [Link](https://github.com/openclaw/openclaw/issues/40001)

- **#27445** – [OPEN] *`announceTarget` option for sub-agent completion announce routing* (12 comments, 5 👍)
  Sub-agent orchestration workflows are blocked by the lack of routing control.
  [Link](https://github.com/openclaw/openclaw/issues/27445)

- **#47975** – [OPEN] *Subagent sessions persist after completion, main session becomes unresponsive* (10 comments, 1 👍)
  A P1 bug causing the main session to hang; no fix PR linked.
  [Link](https://github.com/openclaw/openclaw/issues/47975)

- **#92516** – [OPEN] *Containerized/self-hosted deploys can't use externalized channel plugins* (10 comments, 1 👍)
  Unbundled channel plugins cannot be trusted in self-hosted setups due to `openKeyedStore` gating.
  [Link](https://github.com/openclaw/openclaw/issues/92516)

## 5. Bugs & Stability

### P1 (Critical) Bugs

| Issue | Summary | Fix PR? | Comments |
|-------|---------|---------|----------|
| #115908 | Session transcript projection reconcile can livelock, stalling all channels | No PR linked | 13 comments |
| #40001 | Write tool lacks append mode – cron sessions destroy shared files | Linked PR open | 12 comments |
| #47975 | Subagent sessions persist after completion, main session unresponsive | No PR linked | 10 comments |
| #86519 | Duplicate Telegram replies after 5.20 update (closed, but severity remains) | Closed | 15 comments |
| #97616 | Zombie processes from unreaped hook/tool child processes | No PR linked | 7 comments |
| #89278 | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout | No PR linked | 9 comments |
| #119087 | Gateway cold start regressed ~2.5x from 2026.7.1-beta.1 to 2026.7.2-beta.7 | No PR linked | 8 comments |
| #111010 | Detached native Codex subagents lose hook relay when parent turn releases | No PR linked | 7 comments |
| #83598 | anthropic:claude-cli OAuth refresh still dead-ends main lane despite #73682 fix | No PR linked | 6 comments |
| #98702 | Inherited OpenAI OAuth rejected at provider for built-in runtime | No PR linked | 6 comments |
| #113181 | Cron delivery.mode="none" + isolated agent → silent no-op | No PR linked | 5 comments |
| #118793 | Claude CLI "session limit" error dies without triggering fallback | No PR linked | 5 comments |
| #119333 | request_user_input exposed in Default mode but rejected at runtime | No PR linked | 5 comments |

### P2 Bugs (Selected)

- #121058: Silent reply failures still recurring (47 comments, no fix PR)
- #96242: Multiple independent paths cause duplicate Telegram messages (closed, but underlying issue may persist)
- #45494: Cron agent jobs silently time out during sustained LLM API outages (9 comments)
- #40919: Performance degradation in session memory sync: full delete-reinsert pattern (5 comments)
- #119796: Windows vitest teardown fails with EBUSY on agent state DB (7 comments)

### Notable Stability Observations

- The **silent reply failure** (#121058) is the most commented issue, indicating that the previous fix for #116277 was insufficient.
- Several **OAuth refresh** and **auth provider** bugs persist (e.g., #89278, #83598, #98702), affecting both cron and main channel traffic.
- **Zombie process accumulation** (#97616) is a regression that degrades runtime over time.
- **Gateway cold start** regression (#119087) impacts containerized deployments with limited resources.

## 6. Feature Request Clusters

The following feature requests have accumulated significant user interest and are often accompanied by linked PRs or maintainer labels:

| Issue | Title | Comments | 👍 | Key Labels | Linked PR? |
|-------|-------|----------|----|------------|------------|
| #7707 | Memory Trust Tagging by Source | 33 | 0 | needs-product-decision, needs-security-review | No |
| #22438 | Tiered bootstrap file loading for progressive context control | 18 | 0 | linked-pr-open | Yes |
| #42475 | Per-agent cost budget enforcement at the gateway level | 14 | 1 | linked-pr-open | Yes |
| #27445 | `announceTarget` option for sub-agent completion announce routing | 12 | 5 | linked-pr-open | Yes |
| #15032 | Per-spawn tool restrictions for sub-agents | 7 | 0 | linked-pr-open, needs-product-decision | Yes |
| #40786 | Add .gitignore-like exclude patterns to backup CLI | 9 | 1 | linked-pr-open | Yes |
| #33413 | Slack: Show tool-level progress in assistant thread status | 8 | 3 | No linked PR | No |
| #38568 | Inject context window % into system prompt runtime section | 6 | 2 | No linked PR | No |
| #28300 | Theme Customization System – Preset Themes + Custom Theme Studio | 6 | 5 | No linked PR | No |
| #26037 | Ali bailian coding plan support (thinking/reasoning enabled) | 5 | 4 | linked-pr-open | Yes |
| #9986 | Trigger model fallback on context length exceeded | 5 | 0 | No linked PR | No |
| #45323 | Slack-Style @Mention Autocomplete in Control UI Chat | 5 | 1 | No linked PR | No |
| #117178 | Confirm disruptive lifecycle actions in Control UI and apps | 4 | 0 | No linked PR | No |
| #68618 | Sender name alias mapping for Feishu channel | 4 | 1 | No linked PR | No |

**Cluster analysis:** The most prominent cluster is **memory security and trust** (#7707, and the entire memory authorization PR stack from @galiniliev: #121153, #121154, #121152, #121151, #120690). These are large, multi-PR features that are still in progress (status: “waiting on author”). Another cluster is **sub-agent control** (#27445, #15032, #47975) – users want to restrict sub-agent tools, route completion announcements, and prevent sub-agent sessions from persisting after completion. **Cost and context management** is also a recurring theme (#42475, #22438, #38568, #9986).

## 7. User Feedback Summary

**Pain points expressed in today’s data:**

- **Recurring bugs without permanent fixes:** Silent reply failures (#121058) and duplicate messages (#86519, #96242) are affecting user trust in the platform.
- **Data loss:** The `write` tool lacking append mode (#40001) causes shared files to be overwritten by cron sessions, leading to silent data loss.
- **Cron job reliability:** Multiple cron-related issues (e.g., #45494, #82662, #113181) show that isolated cron agents often fail silently or timeout, especially under API outages.
- **OAuth and auth refresh issues:** Several users report that OAuth refresh works partially but cron/background tasks fail (e.g., #89278, #83598, #98702). This is a significant blocker for self-hosted and production deployments.
- **Sub-agent management:** Users find sub-agent sessions leak resources, block the main session, and lack tool restriction capabilities (#47975, #15032, #27445).
- **Zombie processes:** Accumulation of unreaped child processes (#97616) degrades runtime performance over time.
- **Cold start regression:** Gateway startup time increased 2.5x on low-resource containers (#119087), impacting auto-scaling and fast restarts.
- **Windows-specific issues:** Ctrl+C not working (#93081), EBUSY on test teardown (#119796), and media handling gaps (#121676) show platform gaps.
- **UX friction:** Users want more control over notification routing (#45565), suppression of transient tool errors (#39406), and better progress indicators in Slack (#33413).

**Satisfaction indicators:**

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-11

## 1. Daily Cross-Project Overview

OpenClaw saw extremely high activity with 500 issues and 500 PRs updated, though no new release was published. LobsterAI had a quieter day with 1 issue and 34 PRs updated, but delivered a concentrated burst of merged work from its maintainer covering cowork UX improvements and OpenClaw stability fixes. Both projects shared a concrete dependency: LobsterAI merged a fix for a false tool-loop guard in OpenClaw code (#2454), indicating shared code or integration. Neither project published a release today.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Published | Activity Note |
|---------|----------------------|-------------------|-------------------|---------------|
| OpenClaw | 500 (409 open, 91 closed) | 500 (154 merged/closed) | No | Massive volume; 47-comment bug (#121058) unresolved; large feature stacks from maintainer @galiniliev in progress |
| LobsterAI | 1 (closed stale) | 34 (20 merged/closed, 14 open) | No | Low volume; all merged work from maintainer @fisherdaddy; community issue #1243 closed without fix |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw dominates by orders of magnitude — 500 issues vs. 1, 500 PRs vs. 34. This reflects its role as the core reference project with a larger user and contributor base.

**Community surface area:** OpenClaw has active community discussion with multiple issues accumulating 10–47 comments. LobsterAI had zero community discussion today; the only touched issue was closed as stale.

**Technical focus:** OpenClaw's activity is distributed across memory authorization, context engine stability, sub-agent control, and cost management. LobsterAI's work is concentrated on cowork UX, OpenClaw integration fixes, and Windows runtime repairs.

**Bug severity:** Both projects have unresolved high-severity bugs. OpenClaw has 13 P1 bugs with no fix PR, including silent reply failures and livelocks. LobsterAI's #1243 (gateway restart loop) was closed without a fix.

## 4. Shared Technical Focus Areas

**OpenClaw tool-loop guard fix:** LobsterAI PR #2454 (`fix(openclaw): stop tool-loop guard from killing legitimate polling`) directly addresses OpenClaw's polling logic. This is a bug fix that was merged today, indicating shared code between the projects.

**Provider runtime stability:** Both projects had fixes for provider/API failures being swallowed. OpenClaw's #121058 (silent reply failures) remains unresolved. LobsterAI's #2470 (`fix(openclaw): surface provider runtime failures on late chat error`) was merged today.

**Windows platform issues:** OpenClaw has a Windows-specific bug (#119796, EBUSY on test teardown). LobsterAI merged a Windows runtime fix (#2467, stale pip shims on upgrade).

## 5. Differentiation Analysis

**Scope and audience:** OpenClaw is a broad reference implementation with concerns spanning memory security, sub-agent orchestration, cost enforcement, and multiple channel plugins. LobsterAI is a focused desktop client with a narrower surface area — cowork collaboration, renderer UX, and platform integration.

**Maintainer velocity:** In OpenClaw, the maintainer (@galiniliev) has large feature stacks still in progress (memory authorization, identity protocols). In LobsterAI, the maintainer (@fisherdaddy) merged 7 PRs today, delivering completed features (cowork collapse, file cards, shortcuts) and OpenClaw fixes. LobsterAI shows higher completion velocity on a smaller scope.

**Community engagement:** OpenClaw has a self-sustaining community reporting bugs, requesting features, and commenting on issues. LobsterAI's community interaction is minimal — the only issue touched today was closed without maintainer response.

**Technical architecture:** OpenClaw is the core runtime with gateway, memory, and channel abstractions. LobsterAI appears to embed or depend on OpenClaw (evidenced by PRs fixing OpenClaw code directly), adding a desktop UI layer for cowork features.

## 6. Community Activity Notes

**Tier 1 (Very High):** OpenClaw — 500 issues, 500 PRs, 154 merged, multiple active discussions with 10–47 comments.

**Tier 2 (Low):** LobsterAI — 1 issue, 34 PRs, 20 merged, zero community discussion threads.

No releases were published by either project today.

## 7. Evidence-Backed Observations

1. **Recurring silent failures are the most commented issue across both projects.** OpenClaw's #121058 (47 comments) reports that the previous fix for silent reply failures was insufficient. LobsterAI's #2470, merged today, fixes a related problem where provider runtime errors were swallowed. The pattern suggests that failure propagation in the tool-call pipeline is a persistent challenge.

2. **LobsterAI's work today is almost entirely inward-facing (maintainer-driven), not community-driven.** All 7 merged PRs were authored by @fisherdaddy. The only community issue (#1243) was closed as stale. This contrasts with OpenClaw, where community members are actively reporting bugs and requesting features.

3. **Both projects have unresolved platform-specific bugs.** OpenClaw has Windows test teardown failures (#119796) and media handling gaps (#121676). LobsterAI has a Windows-specific gateway restart loop (#1243, closed stale) and merged a Windows pip shim fix (#2467). No macOS or Linux-specific issues were evident in today's data.

4. **No new releases were published by either project.** OpenClaw has a staging PR for a beta candidate (#121743) but did not cut a release. LobsterAI also had no release. This may indicate a period of consolidation before the next version cycle.

5. **Memory security and trust is a developing feature cluster in OpenClaw with no counterpart in LobsterAI.** OpenClaw has a multi-PR stack from @galiniliev building memory authorization contracts and identity protocols, plus a long-standing feature request for memory trust tagging (#7707, 33 comments). LobsterAI shows no activity in this area.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# LobsterAI Project Digest – 2026-08-11

## 1. Today's Activity Brief

- **1 issue** was updated (closed as stale); **34 pull requests** were updated (20 closed/merged, 14 open). No new releases were published.
- The only issue touched today was a stale bug (#1243) about the `qwen-portal-auth` plugin causing gateway restarts – it was closed without a fix.
- The project saw a concentrated burst of merged PRs from maintainer @fisherdaddy, covering cowork features, OpenClaw stability fixes, and Windows runtime repairs.
- A large batch of dependency bump PRs (Vite, React, Mermaid, etc.) were opened by Dependabot, many still open.

## 2. Releases

No new releases today.

## 3. Project Progress – Merged/Closed PRs

The following PRs were merged or closed today (all authored by @fisherdaddy unless noted):

| PR | Title | Area |
|----|-------|------|
| #2472 | feat: cowork activity group collapse | renderer, cowork |
| #2471 | feat(cowork): render submitted file attachments as clickable cards | renderer, cowork |
| #2454 | fix(openclaw): stop tool-loop guard from killing legitimate polling | main, openclaw |
| #2467 | fix(python-runtime): repair stale pip shims on Windows runtime upgrade | main, platform:windows |
| #2466 | Fix/renderer init ipc stall retry | renderer, build, main, openclaw |
| #2470 | fix(openclaw): surface provider runtime failures on late chat error | main, openclaw |
| #2469 | feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing | renderer, cowork |
| #2468 | refactor(cowork): unify streaming loading indicators into single | renderer, cowork |
| #1766, #1764, #1763 | chore(deps-dev): bump vite, react-dom, @vitejs/plugin-react (Dependabot) | build |

**Key advances:**
- **Cowork UX improvements**: Activity group collapse, file attachment cards, unified loading indicators, and new keyboard shortcuts.
- **OpenClaw stability**: Fixed a false tool-loop guard that killed legitimate polling (#2454); fixed missing provider runtime errors that were swallowed (#2470).
- **Windows runtime**: Resolved stale pip shims that could break Python environment upgrades (#2467).
- **Renderer**: Fixed a stall in IPC initialization with retry logic (#2466).

## 4. Community Hot Topics

The only issue touched today was **#1243** (closed, 2 comments). It reported a persistent bug where `qwen-portal-auth` plugin configuration would cycle, causing the OpenClaw gateway to restart every 5–20 minutes. The issue was closed with a `[stale]` label, meaning it was not actively addressed. No PRs or comments on this issue today.

No PRs accumulated comments today (all show `Comments: undefined`). No community discussion threads were active.

## 5. Bugs & Stability

| Issue # | Severity | Description | Status | Fix PR |
|---------|----------|-------------|--------|--------|
| #1243 | High | `qwen-portal-auth` plugin config loop causes gateway restart every 5–20 min. Reported on Windows, LobsterAI 2026.4.1. | Closed as stale | None |
| – | Medium | Tool-loop guard incorrectly killed legitimate polling in OpenClaw | Fixed in #2454 | #2454 (merged) |
| – | Medium | Stale pip shims survived Windows runtime upgrades, causing broken Python env | Fixed in #2467 | #2467 (merged) |
| – | Medium | Renderer IPC stall on startup | Fixed in #2466 | #2466 (merged) |
| – | Low | Late chat errors were swallowed by a stale tool-failure notice in OpenClaw | Fixed in #2470 | #2470 (merged) |

No new bug reports were filed today. The highest-severity bug (#1243) remains unfixed, only closed due to staleness.

## 6. Feature Request Clusters

Several cowork-related features were merged today, all from maintainer @fisherdaddy:

- **Right-click context menu for local file links** (PR #2473, open) – adds actions: open-with, save-as, copy path/contents, reveal in folder. This is a new feature still in review.
- **Activity group collapse** (PR #2472, merged) – allows collapsing cowork activity groups.
- **File attachment cards** (PR #2471, merged) – non-image attachments are now displayed as rich cards instead of plain text.
- **Collapse-agent-tasks shortcut** (PR #2469, merged) – keyboard shortcut and modifier key support while typing.

These form a cluster of UX improvements in the cowork (collaboration) area. No user-requested features were explicitly mentioned in issues today.

## 7. User Feedback Summary

- The only direct user feedback recorded is the bug report #1243, describing a severe disruption: gateway restarts every 5–20 minutes accompanied by a popup “AI 引擎正在启动网关...”. The issue was closed without resolution, which may indicate user dissatisfaction if the problem persists.
- No other user comments, reactions, or satisfaction signals were captured today.

## 8. Backlog Watch

- **Issue #1243** (closed stale) – no fix was applied; the bug may still affect users on older versions. No maintainer response was recorded.
- **Open PR #2452** (fix: preserve provider for slashed model ids) – open since 2026-08-07, no comments or updates. This addresses a data integrity issue where model IDs containing `/` lose their provider prefix.
- **Open PR #2473** (right-click context menu) – newest feature PR, awaiting review.
- **Dependabot PRs** (e.g., #2465, #2464, #2463, #2462, #2461, #2460, #2459) – all opened today, still open. These bump major versions of build tools and dependencies (Vite 8, React 19, Mermaid 11, etc.). No maintainer action yet.

No long-unanswered issues from the community were identified beyond the now-closed #1243.

</details>