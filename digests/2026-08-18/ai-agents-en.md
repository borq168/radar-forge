# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-08-18 00:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-18

## Today’s Activity Brief
Over the past 24 hours, the OpenClaw repository saw heavy activity with **500 issues** and **500 pull requests** updated. Of those, **17 issues were closed** and **123 PRs were merged or closed**. No new releases were published. Maintainers are actively triaging a large backlog of open items, with several high-priority bugs and feature requests receiving recent attention. The project remains in a high-velocity development phase, with many open issues tagged `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision`.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
**123 pull requests** were merged or closed today. Notable merged PRs include:

- [#125324](https://github.com/openclaw/openclaw/pull/125324) — **fix(codex): degraded-engine continuity no longer projects the whole context window per turn** (P1, closed). Addresses a performance regression where the Codex app-server runtime could render the entire uncompacted transcript into a single turn input.
- [#125474](https://github.com/openclaw/openclaw/pull/125474) — **fix(cli): accept --port across automation commands** (P2, closed). Enables users to specify a non-default Gateway port when running automation commands.
- [#120900](https://github.com/openclaw/openclaw/pull/120900) — **feat(ui): review install policy warnings** (P2, closed). Adds a Control UI surface for administrators to review and acknowledge plugin install policy warnings.
- [#116489](https://github.com/openclaw/openclaw/pull/116489) — **feat(security): require acknowledgement for install policy warnings** (P2, closed). Implements the backend security mechanic for acknowledging install policy warnings.

## Community Hot Topics
The most active issues and PRs by comment count and reactions:

- **Issue [#77598](https://github.com/openclaw/openclaw/issues/77598)** — “Track live dev agent behavior and trajectory” (23 comments, 1 👍). A running notes issue for a 24-hour observational watch of a developer agent. Community interest in agent behavior transparency.
- **Issue [#91009](https://github.com/openclaw/openclaw/issues/91009)** — “Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes” (20 comments, 2 👍). Critical performance bug causing high CPU load and gateway RPC stalls.
- **Issue [#68596](https://github.com/openclaw/openclaw/issues/68596)** — “Configurable streaming watchdog timeout threshold” (15 comments, 8 👍). Strong demand for customisable timeout settings when using models with extended reasoning.
- **Issue [#62505](https://github.com/openclaw/openclaw/issues/62505)** — “Coding Agent never completes anything” (15 comments, 1 👍). Regression affecting core agent functionality.
- **Issue [#38327](https://github.com/openclaw/openclaw/issues/38327)** — “Cannot convert undefined or null to object in google-vertex/gemini-3.1-pro-preview” (14 comments, 3 👍). Long-standing regression since 2026.3.2.
- **Issue [#42840](https://github.com/openclaw/openclaw/issues/42840)** — “Add MathJax/LaTeX Support to Control UI” (8 comments, 10 👍). Most upvoted feature request in the list.

These issues reflect immediate user pain points: performance regressions, missing configuration flexibility, and lack of UI polish.

## Bugs & Stability
Several high-severity bugs remain open, many with the `P1` priority:

- **CPU-bound process spawn** — [#91009](https://github.com/openclaw/openclaw/issues/91009) (P1, open). Spawning `openclaw-hooks` processes that consume 100%+ CPU. No fix PR linked.
- **Coding Agent never completes** — [#62505](https://github.com/openclaw/openclaw/issues/62505) (P1, regression). Worked in 2026.4.2, broken in later versions. No fix PR.
- **Google Vertex null object error** — [#38327](https://github.com/openclaw/openclaw/issues/38327) (P1, regression). Affects `gemini-3.1-pro-preview` since 2026.3.2. No fix PR.
- **memory_search tool call abort** — [#74586](https://github.com/openclaw/openclaw/issues/74586) (P1). Memory search tool calls misclassified as timeout despite model completion. No fix PR.
- **Zombie process accumulation** — [#97616](https://github.com/openclaw/openclaw/issues/97616) (P1, regression). OpenClaw leaks unreaped hook/tool child processes, causing runtime degradation. No fix PR.
- **SQLite corruption in tasks registry** — [#71689](https://github.com/openclaw/openclaw/issues/71689) (P1). Gateway startup fails due to malformed `tasks/runs.sqlite`. No fix PR.
- **Mixed ownership after sudo update** — [#78493](https://github.com/openclaw/openclaw/issues/78493) (P1). Running `sudo openclaw update` leaves files with mixed root/user ownership; `doctor` overwrites config. No fix PR.
- **Tool parameters silently dropped** — [#53408](https://github.com/openclaw/openclaw/issues/53408) (P1). After long conversations, `write` and `exec` tools receive empty arguments. No fix PR.

Several other P1 bugs (e.g., #86215, #50093, #39476, #67777, #72015, #53540, #45224, #70903) remain open without linked fix PRs. The project currently has a high number of unresolved critical regressions.

## Feature Request Clusters
User-requested features that generated multiple comments or related PRs:

- **Configurable streaming watchdog timeout** — [#68596](https://github.com/openclaw/openclaw/issues/68596) (15 comments, 8 👍). A common request from users of long-reasoning models.
- **Per-agent dreaming configuration** — [#67413](https://github.com/openclaw/openclaw/issues/67413) (9 comments, 5 👍). Users want control over which agents run memory-core dreaming to avoid OOM kills.
- **Per-agent TTS/STT overrides** — [#66252](https://github.com/openclaw/openclaw/issues/66252) (9 comments). Multi-language support.
- **YAML config file support** — [#45758](https://github.com/openclaw/openclaw/issues/45758) (9 comments). Readability request.
- **UI quality update** — [#75947](https://github.com/openclaw/openclaw/issues/75947) (8 comments). Users find the UI hard to navigate.
- **Configurable upload size limit** — [#71142](https://github.com/openclaw/openclaw/issues/71142) (8 comments). Hardcoded 5MB limit in Control UI.
- **MathJax/LaTeX rendering** — [#42840](https://github.com/openclaw/openclaw/issues/42840) (8 comments, 10 👍). Strong demand for scientific communication.
- **Skill priority configuration** — [#50199](https://github.com/openclaw/openclaw/issues/50199) (8 comments). Overlapping skills without selection rules.
- **Prune orphaned sessions** — [#49259](https://github.com/openclaw/openclaw/issues/49259) (8 comments). Dashboard cleanup.
- **Multi-index embedding memory** — [#63990](https://github.com/openclaw/openclaw/issues/63990) (7 comments, 1 👍). Resilient provider failover.
- **Multi-slot memory architecture** — [#60572](https://github.com/openclaw/openclaw/issues/60572) (7 comments, 3 👍). Multiple memory providers simultaneously.
- **Fallback model chain for compaction/LCM** — [#56781](https://github.com/openclaw/openclaw/issues/56781) (7 comments). Avoid silent failures when primary model is rate-limited.
- **Persistent task-status surface** — [#52640](https://github.com/openclaw/openclaw/issues/52640) (7 comments, 2 👍). For long-running channel turns.
- **Durable natural-language rule learning** — [#41366](https://github.com/openclaw/openclaw/issues/41366) (7 comments). Multi-agent group chat stability.

Several PRs address related features: #118591 (multi-pointer gesture ownership), #124429 (inherit skill allowlists), #125444 (durable progress card on Android), #123356 (slash command arguments in composer), #80396 (media token warning in code blocks). These are open and waiting for review.

## User Feedback Summary
Users express both satisfaction and frustration:

**Satisfaction:**
- [#73537](https://github.com/openclaw/openclaw/issues/73537) — A user thanks the team, noting OpenClaw has become part of their daily workflow (family/business assistant via Telegram, Home Assistant). They request production-readiness stability labels.

**Pain points:**
- **Hardcoded developer path** — [#51429](https://github.com/openclaw/openclaw/issues/51429) (12 comments). A user found a hardcoded working space path (`/Users/wangtao`) in the code that was merged and published. This caused OpenClaw to create a directory with that name.
- **Streaming watchdog warnings** — [#68596](https://github.com/openclaw/openclaw/issues/68596) (15 comments). Frequent “no stream updates for 30s” messages.
- **Context bloat** — [#67419](https://github.com/openclaw/openclaw/issues/67419) (10 comments). Bootstrap files re-injected every turn, wasting 20-30% tokens.
- **Session state loss** — Multiple issues (#62505, #74586, #67777, etc.) report agent runs that never complete or lose state.
- **Auth provider frustrations** — [#86215](https://github.com/openclaw/openclaw/issues/86215) (11 comments) describes Codex OAuth refresh failures wedging agents for hours. [#70903](https://github.com/openclaw/openclaw/issues/70903) (7 comments) notes persistent provider cooldown that blocks users after billing recovery.
- **UI complexity** — [#75947](https://github.com/openclaw/openclaw/issues/75947) (8 comments) calls the UI “hard to navigate and understand.”
- **RTL rendering issues** — [#68105](https://github.com/openclaw/openclaw/issues/68105) (7 comments) — Hebrew/Arabic punctuation renders on wrong side in outbound replies.

## Backlog Watch
Several important issues and PRs have been open for months without maintainer action:

- **Issue [#38327](https://github.com/openclaw/openclaw/issues/38327)** — “Cannot convert undefined or null to object” (P1, created 2026-03-06). Last updated 2026-08-18; still open, no fix PR. Affects google-vertex users.
- **Issue [#62505](https://github.com/openclaw/openclaw/issues/62505)** — “Coding Agent never completes anything” (P1, created 2026-04-07). No fix PR.
- **Issue [#68596](https://github.com/openclaw/openclaw/issues/68596)** — “Configurable streaming watchdog timeout threshold” (P2, created 2026-04-18). High community demand.
- **Issue [#74704](https://github.com/openclaw/openclaw/issues/74704)** — “SDK: stabilize app-client happy path for agents, sessions, runs” (P2, created 2026-04-30). Tagged `maintainer` and `clawsweeper-recovery-stuck`.
- **Issue [#50291](https://github.com/openclaw/openclaw/issues/50291)** — “Plugin Hooks: Missing trace context for observability” (P2, created 2026-03-19). Tagged `stale`.
- **PR [#79185](https://github.com/openclaw/openclaw/pull/79185)** — “fix(tts/xiaomi): support Token Plan TTS endpoint” (P2, created 2026-05-08). Still open, needs proof.
- **PR [#80396](https://github.com/openclaw/openclaw/pull/80396)** — “fix(media): warn when MEDIA: token is skipped inside fenced code block” (P2, created 2026-05-10). Waiting on author.
- **PR [#117712](https://github.com/openclaw/openclaw/pull/117712)** — “build(deps): bump the actions group” (P2, created 2026-08-02). Dependabot rebasing, waiting on author.

Many issues carry the `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels, indicating the maintainer team is still triaging a large backlog. The substantial number of P1 regressions without fix PRs suggests the project is under significant pressure to stabilise current features while also addressing community requests.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-18

## 1. Daily Cross-Project Overview

Today’s activity across the two tracked projects shows a stark contrast in scale. OpenClaw processed **500 issues and 500 pull requests** in the last 24 hours, with 123 PRs merged or closed, but no new release. Youdao Lobster saw a smaller but concentrated surge of **21 PRs updated**, 18 of which were merged or closed, also without a new release. Both projects are in a consolidation phase, but OpenClaw is simultaneously dealing with a large backlog of critical regressions (multiple P1 bugs without fixes) while Youdao Lobster is merging long-pending UX and integration improvements. No cross-project release or coordinated activity was observed.

## 2. Activity Comparison

| Metric | OpenClaw | Youdao Lobster |
|--------|----------|----------------|
| Issues updated (today) | ~500 (17 closed) | 0 new; 7 open (all stale since April) |
| PRs updated (today) | ~500 (123 merged/closed) | 21 (18 merged/closed) |
| Release status | No new release | No new release |
| Factual activity note | High-velocity triage; maintainers actively closing PRs but many P1 bugs remain open | Cleanup of old PRs; focus on merging UX improvements and new provider integrations |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s issue/PR count is an order of magnitude larger than Youdao Lobster’s, reflecting its role as a core reference project with a much larger contributor base.
- **Technical focus**: OpenClaw is heavily occupied with performance regressions (CPU-bound hooks, context bloat, tool call aborts) and core infrastructure stability. Youdao Lobster is focused on end-user desktop experience (editor context menus, session grouping, per-agent working directories, context menu registration).
- **Community surface area**: OpenClaw’s community is highly active and vocal, with dozens of long-running discussions, feature requests, and bug reports. Youdao Lobster’s community is quieter; only one new issue today (a cross-platform communication proposal) and all other bugs are stale.
- **Maintainer responsiveness**: OpenClaw maintainers are triaging and closing many PRs but have not yet addressed several high-severity regressions (e.g., #62505, #91009). Youdao Lobster maintainers are merging old PRs but have not responded to any of the 7 open bugs raised in April.

## 4. Shared Technical Focus Areas

Both projects exhibit activity in the following areas today:

- **Multi-agent configuration**: OpenClaw has feature requests for per-agent dreaming, skill priority, and multi-slot memory. Youdao Lobster merged PR #1668 (per-agent working directory) and has an open feature request for multi-agent orchestration (#1644). Both communities want more granular control over individual agent behavior.
- **Model provider expansion**: OpenClaw users are demanding support for long-reasoning models (configurable streaming watchdog timeout #68596) and facing regressions with Google Vertex. Youdao Lobster is actively adding new providers: DeepSeek Harness (DSH) and OrcaRouter, with PRs merged today.
- **Stability and performance**: Both projects have unresolved stability issues. OpenClaw has multiple P1 regressions (e.g., coding agent never completes, CPU-bound processes, SQLite corruption). Youdao Lobster has 4 high/medium-severity bugs from April (Ollama load failure, MCP incompatibility, cron save error) with no fixes.

## 5. Differentiation Analysis

- **Target users**: OpenClaw serves as a developer-facing core reference implementation, with a heavy emphasis on CLI, gateway, and plugin infrastructure. Youdao Lobster is a consumer desktop application (likely aimed at Chinese users given NetEase affiliation) with a polished UI, chat interface, and Windows integration.
- **Feature focus**: OpenClaw’s current priorities are core stability (fixing context bloat, CPU leaks, tool parameter drops) and security (install policy warnings). Youdao Lobster’s priorities are UX polish (context menus, scroll-to-bottom, session grouping) and local model execution (DSH, Ollama).
- **Technical architecture**: OpenClaw is a modular, plugin-based system with a separate gateway and runtime (Codex). Youdao Lobster is a monolithic Electron app that bundles the runtime and UI together, with a platform-specific focus (Windows shell integration, Chinese cloud services).
- **Community language**: OpenClaw’s discussions are in English; Youdao Lobster’s issue #2500 and some PRs are in Chinese, indicating a different primary language base.

## 6. Community Activity Notes

- **High activity tier**: OpenClaw (hundreds of issues and PRs updated, dozens closed, strong community engagement on multiple threads).
- **Moderate activity tier**: Youdao Lobster (21 PRs updated, 18 merged, but no new issues and stale community discussion).
- Both projects have no new releases today; the most recent releases predate this digest.

## 7. Evidence-Backed Observations

1. **Both projects are actively merging PRs, but critical bug backlogs remain unaddressed.** OpenClaw has 10+ P1 regressions without fix PRs (e.g., #62505, #91009, #38327). Youdao Lobster has 4 open bugs from April with no maintainer response. The pace of bug resolution lags behind PR merging.

2. **Multi-agent configurability is a shared community demand.** OpenClaw’s feature requests (#67413 per-agent dreaming, #50199 skill priority, #60572 multi-slot memory) and Youdao Lobster’s merged PR (#1668 per-agent working directory) and open feature request (#1644 multi-agent workflow) indicate that users of both projects want finer-grained control over agent behavior.

3. **Model provider integration activity diverges by maturity.** OpenClaw is dealing with regressions in existing providers (Google Vertex, Gemini), while Youdao Lobster is actively adding new providers (DSH, OrcaRouter). This reflects different lifecycle stages: OpenClaw is stabilizing a mature ecosystem, while Youdao Lobster is expanding its capabilities.

4. **Community engagement differs significantly in volume and tone.** OpenClaw’s community is vocal, filing detailed feature requests and bug reports with high comment counts (e.g., #68596 with 15 comments, #42840 with 10 👍). Youdao Lobster’s community is less active, with only one new issue today and stale discussions. This suggests either a smaller user base or a less engaged community.

5. **No clear cross-project signal for a unified industry trend.** The two projects’ activities are largely independent, with no shared events, coordinated releases, or joint feature announcements. The only common theme is a general interest in multi-agent flexibility, which is too broad to call a trend based on two projects.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# Youdao Lobster Project Digest — 2026-08-18

## 1. Today's Activity Brief

Today saw a surge of activity with 21 PRs updated in the last 24 hours, of which 18 were merged or closed, indicating a major cleanup of stale work and minor feature completions. The issue tracker remains quiet with 7 open issues, all stale (last updated in April), and no new bugs reported today. No new releases were cut. The project appears to be in a consolidation phase, with maintainers focusing on merging long-pending improvements and documentation updates across the renderer, main, and OpenClaw areas.

## 2. Releases

No new releases were published today. The latest release remains the previous version.

## 3. Project Progress

18 PRs were merged or closed today, reflecting a broad cleanup of the backlog. Key feature advances:

- **DSH Engine Integration** — Multiple PRs by @fisherdaddy (#2506, #2505, #2502) added DeepSeek Harness (dsh) as a runtime option, including process launcher, engine integration, and setup documentation. This is a significant new capability for running DeepSeek models locally.
- **OrcaRouter Provider Integration** — PR #2504 (open) adds OrcaRouter as a first-class LLM provider, mirroring OpenRouter integration, enabling Anthropic/OpenAI-compatible model access via namespaced IDs.
- **Editor Context Menu** — PR #2503 adds Cut/Copy/Paste/Select All context menus for text inputs in the main window.
- **Skill Upgrade Overlay** — PR #2501 fixes the skill upgrade progress overlay to render correctly across the full app shell.
- **Cowork Chat UX Improvements** (from April backlog, now merged):
  - Floating "scroll to bottom" button (#1636)
  - "Regenerate" button for AI replies (#1637)
  - i18n fixes for button tooltips (#1639)
  - Copy buttons for tool execution results (#1640)
  - Esc key support for all modals (#1641)
- **Right-Click Menu** — PR #1642 adds Windows shell context menu registration for launching LobsterAI from any directory.
- **Log Sanitization** — PR #1661 fixes sensitive data leakage (API keys, tokens) in exported logs.
- **OpenClaw Upgrade** — PR #1663 upgrades runtime to v2026.4.12 and WeChat plugin to 2.1.8.
- **Qwen Console Link Migration** — PR #1667 updates settings links from deprecated DashScope to Alibaba Cloud's Bailian platform.
- **Per-Agent Working Directory** — PR #1668 allows each non-main agent to have an independent working directory, with fallback to default.
- **Settings Page Fixes** — PR #1669 fixes "Test Connection" button disabling logic and custom provider name display.
- **Session List Grouping** — PR #1675 groups Cowork sessions by time period (Today, Yesterday, 7 days, 30 days, monthly).

## 4. Community Hot Topics

The most active discussion today is around **cross-platform Agent communication**:

- **Issue #2500** — "VOKO：让 AI Agent 跨平台即时通信与群协作" (1 comment, created 2026-08-17). The author of the VOKO open-source project proposes integrating their "AI Agent cross-platform communication layer" to enable A2A (Agent-to-Agent) messaging across different frameworks and IM channels. This reflects a growing community interest in agent interoperability and multi-agent collaboration, though the maintainers have not yet responded.

The remaining 6 issues are all stale (last updated 2026-04-13/14), with no new community engagement today.

## 5. Bugs & Stability

No new bugs were reported today. All 7 open issues are stale from April 2026 and remain unaddressed:

| Issue | Problem | Severity | Status |
|-------|---------|----------|--------|
| #1653 | `groupPolicy` keeps being overwritten to `allowlist` | Medium | Open, no maintainer response |
| #1635 | Ollama local models (Qwen3, Gemma4) fail to load | High | Open, no maintainer response |
| #1643 | "Unsaved content" error when saving cron tasks | Medium | Open, no maintainer response |
| #1662 | Non-SSE MCP engines cannot be found | High | Open, no maintainer response |
| #1671 | MD to Word conversion halfway fails with "sse response finish reason: full" | Medium | Open, no maintainer response |

No fix PRs are associated with these bugs. The long backlog of unresolved bugs is a concern for project stability.

## 6. Feature Request Clusters

Several feature requests and related PRs emerged today:

- **Multi-Agent Orchestration** — Issue #1644 requests the ability for main agent to orchestrate other agents via a markdown-based workflow, enabling complex task decomposition. While no direct PR addresses this, PR #1668 (per-agent working directory) and PR #1660 (non-main agent welcome area) incrementally improve multi-agent UX.
- **Cross-Platform Agent Communication** — Issue #2500 proposes a full integration with VOKO for A2A messaging. No PR exists yet.
- **DSH Runtime** — Multiple PRs (#2506, #2505, #2502) add DeepSeek Harness support, a user-requested feature for local model execution.
- **OrcaRouter Provider** — PR #2504 adds a new LLM provider, responding to demand for gateway-based model access.

## 7. User Feedback Summary

Based on the stale issues and today's PRs, user feedback reveals several pain points:

- **Configuration Instability** — Users report that `groupPolicy` settings are silently overwritten (#1653), causing frustration with access control.
- **Local Model Compatibility** — Ollama models fail to load (#1635), a significant blocker for users wanting local inference.
- **Save/Validation Confusion** — The "unsaved content" error (#1643) causes false alarms during task creation.
- **MCP Ecosystem Gaps** — Non-SSE MCP engines are incompatible (#1662), limiting tool integration.
- **Missing Workflow Features** — Users want agent orchestration and workflow capabilities (#1644).

On the positive side, the merged UX improvements (scroll-to-bottom, regenerate, copy buttons, context menus) address long-standing complaints about the Cowork chat interface, indicating that the maintainers are responsive to basic usability feedback.

## 8. Backlog Watch

Several critical issues and PRs are languishing without maintainer attention:

- **Issue #1635** (Ollama models fail, high severity) — No maintainer comment since April 12. This is a blocking issue for local model users.
- **Issue #1662** (Non-SSE MCP engines unusable, high severity) — No maintainer comment since April 14.
- **Issue #1653** (groupPolicy overwrite, medium severity) — No maintainer comment since April 13.
- **Issue #1644** (Multi-agent workflow, feature request) — No maintainer response. This is a high-value feature that could differentiate the project.
- **PR #1277** (Dependency update for electron group) — Open since April 2, with no maintainer review. Electron version bump from 40.2.1 to 43.4.0 is a significant security and compatibility update.
- **PR #1660** (Non-main agent welcome area) — Open since April 13, pending review and merge.

The maintainers' focus on merging old PRs today is encouraging, but the lack of response to user-reported bugs and feature requests risks alienating the community.

</details>