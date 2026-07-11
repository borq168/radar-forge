# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 419 | PRs: 500 | Projects covered: 2 | Generated: 2026-07-11 00:23 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Daily Project Digest — 2026-07-11

## 1. Today’s Activity Brief
Over the last 24 hours the project recorded **419 issue updates** (227 open, 192 closed) and **500 pull request updates** (339 open, 161 merged/closed). No new releases were cut. Discussions were dominated by long-standing stability concerns (gateway memory leak, session-state corruption, prompt-cache breakage) and a large volume of new, small-scope fixes from community contributors. Machine‑assisted labelling (`clawsweeper`, `issue‑rating`) remains heavily used to triage impact.

## 2. Releases
None.

## 3. Project Progress
**161 pull requests were merged or closed** in the last 24 hours; details of individual merged PRs are not included in today’s top-30 list, so no concrete shipped features can be confirmed from this snapshot. The open PR landscape shows a heavy focus on **bug fixes and hardening**:
- Gateway and plugin ownership enforcement (`sessions.patch` cross‑plugin safety, PR #103534)
- Memory and cache corrections (blank search preflight, empty document‑extractor scope, max‑thinking config – PRs #103728, #103731, #103614)
- Channel‑specific fixes for Slack, Discord, Feishu, QQBot, Telegram (PRs #103995, #103562, #102804, #102897, #97828)
- Canvas A2UI validation and Google Meet transcript retention (PRs #103713, #103811)
- Large, cross‑cutting PRs around embedded prompt‑cache stability (#102189) and MCP OAuth token refresh (#96120) are still under proof.

## 4. Community Hot Topics
The most active threads by comment count:

- **[#99241] Tool outputs sometimes render as image attachments and become unreadable to the agent** (20 comments, 🐚 platinum hermit)
  ANSI‑heavy tool results collapse into an opaque image placeholder, making the agent blind to its own stdout/err. Long‑running workflows are fundamentally broken.
  *Underlying need:* reliable text‑mode tool output delivery for ANSI‑intensive environments.

- **[#102175] Embedded prompt cache breaks across room-event, policy, and Responses boundaries** (16 comments, 🦞 diamond lobster)
  Session‑derived prompt cache is lost when a session crosses policy/compaction/memory boundaries, wasting tokens and degrading continuity. A draft fix exists (#102189).
  *Need:* durable, cross‑boundary cached context for embedded sessions.

- **[#91588] Critical Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, OOM crashes** (15 comments, 🐚 platinum hermit)
  Still open, with no fix PR linked. Users repeatedly report OOM killer restarts.
  *Underlying dissatisfaction:* the gateway is not yet safe for unattended long‑running operation.

- **[#12602] Slack Block Kit support for agent messages** (14 comments, 🌊 off‑meta tidepool)
  Strong demand for richer messaging beyond markdown in Slack; no linked implementation yet.

- **[#63829] Per-agent memory‑wiki vault configuration** (13 comments, 🦞 diamond lobster, CLOSED)
  Closed without merge; interest was high (10 👍). Likely the feature is still wanted, but the issue reached staleness.

## 5. Bugs & Stability
Today’s data highlights **multiple P0/P1 regressions and data‑loss bugs**, many of which lack fix PRs or are only in early proof stages.

| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| P0 | [#91588] Gateway OOM, RSS grows to 15.5 GB | No | Most critical runtime stability problem, still open |
| P0 | [#101763] Hosted model selector corrupts model ID string (dot vs dash) | No | Affects Molty hosted users, model calls fail entirely |
| P1 | [#99241] Tool output rendered as unreadable image attachment | No | Agent loses visibility; high impact on session‑state and message‑loss |
| P1 | [#84569] WhatsApp session stalls on long model_call, never delivers reply | No | Requests stall for 120–240s, then incomplete turn with 0 payloads |
| P1 | [#83959] Codex app‑server startup retries exhaust before replacement is ready | No | Crash‑loop risk |
| P1 | [#85714] Agent’s final message stranded when LLM forgets delivery tool | Closed | Was closed; no PR linked directly, but possible side fix? |
| P1 | [#99681] Discord plugin does not auto‑reconnect after WS 1006 | Closed | Now closed; fix presumably merged |
| P1 | [#87109] Gateway heap leaks to 1GB+ idle, cron jobs fail silently | No | Similar to OOM leak, cron‑specific impact |
| P1 | [#102175] Embedded prompt‑cache breakage | Open PR #102189 | Fix under proof, high risk for embedded sessions |

**Regression alerts:** #102175 is explicitly tagged as a regression, and #99681 (Discord reconnect) was a recent regression that has been closed. Memory leak #91588 and #87109 continue to affect all long‑running instances.

## 6. Feature Request Clusters
No single theme dominates, but several clusters emerge:

- **Channel‑surface improvements:** Slack Block Kit (#12602), Feishu text sanitisation (#90684), WhatsApp sticker send (#7476), human‑readable session names in Telegram (#7406).
- **Agent execution controls:** maxTurns/maxToolCalls (#9912), Ralph Loop per‑agent max iterations (#6890), raise/remove 3‑minute CLI watchdog cap (#40982).
- **Multi‑agent concurrency & observability:** multi‑lane sub‑agent spawning (#10467), queue_status tool (#9797), visibility into own channel messages from DM (#7359).
- **Security & audit:** file‑system sandboxing with allowed/deny paths (#7722), inverted `minSecurity` logic that weakens session security (#91283) — the latter is closed.
- **Accessibility & UX:** disable emojis/unicode in TUI (#9637), auto‑linkify URLs in tool cards (#8812), dynamic ack reaction emojis (#8508).
- **Plugin ecosystem:** node‑registered agent tools (#8287), `configPatch` in plugin manifest for one‑step setup (#6792), batch API support for background tasks (#9865).

**Related PRs of note:** #103995 (Slack commentary lane independent of tool progress), #103811 (Google Meet full transcript retention), #103534 (cross‑plugin session‑patch enforcement) — these address adjacent needs but not the exact requests above.

## 7. User Feedback Summary
- **Stability frustration:** Users are running into memory exhaustion and silent cron failures on vanilla macOS setups (#87109, #91588). “I need to restart the gateway every day” is a palpable sentiment.
- **Message‑loss pain:** Several reports describe silent drops (Telegram file deadlock #27984 closed, Discord init conflicts #102381 fix PR #103562, WhatsApp stalls #84569). Inability to trust delivery is a recurring complaint.
- **Configuration blind spots:** Users want better guardrails — bounded memory flushes (#90354), persistent provider cooldown that ignores billing recovery (#70903), and clearer context‑overflow messages (#9409).
- **Desire for richer agent‑channel interaction:** Slack Block Kit, custom reasoning formatting per channel (#8913), and dynamic emoji reactions (#8508) all indicate that plain‑text replies feel too primitive for professional use.
- **Documentation and tooling gaps:** Flaky test reports on WSL (#7057), no dev channel npm distribution (#7669), and OAuth refresh fragility (#8673) are small but persistent developer‑experience drains.

## 8. Backlog Watch
These important items have been open for months with high priority and substantial discussion, yet remain without a merged fix or clear resolution:

- **[#91588]** (P0, gateway OOM) — open since 2026-06-09, 15 comments, no fix PR linked.
- **[#40982]** (P1, 3‑min CLI watchdog kills long agent runs) — open since 2026-03-09, 5 comments, linked PR exists but not merged.
- **[#87109]** (P1, idle gateway heap growth to 1GB+) — open since 2026-05-27, 8 comments, no fix.
- **[#84569]** (P1, WhatsApp session silence on long calls) — open since 2026-05-20, 10 comments, no fix.
- **[#12602]** (P2, Slack Block Kit) — open since 2026-02-09, 14 comments, maintainer review requested but no movement.
- **[#44749]** (P1, concurrent allow‑always approvals losing allowlist entries, data‑loss race) — closed, but no resolution indicated; was a data‑loss race.
- **[#70903]** (provider cooldown blocks user after billing recovery) — open since 2026-04-24, 6 comments, linked PR open but no merge.

*End of digest.*

---

## Cross-Ecosystem Comparison

## 1. Daily Cross-Project Overview
In the last 24 hours OpenClaw recorded exceptionally high volume—419 issue updates and 500 PR updates—driven by community-led bug-fixing and no new release, while Youdao LobsterAI merged 10 pull requests, including one feature and several fixes, and closed a release branch without publishing assets. Both projects are addressing configuration and state integrity issues in multi-agent scenarios, though at vastly different scales and technical layers.

## 2. Activity Comparison
| Project | Issue Updates | PR Updates | Merged/Closed PRs | Release Status | Activity Note |
|----------|--------------|------------|-------------------|----------------|---------------|
| OpenClaw | 419 (227 open, 192 closed) | 500 (339 open, 161 closed) | 161 merged/closed | None | Heavy bug-fix and hardening PRs; multiple P0/P1 regressions still unfixed. |
| LobsterAI | 3 (2 open, 1 closed) | 17 (7 open, 10 closed) | 10 merged/closed | No release; release branch merged | Steady fixes plus one co-work feature; significant multi-agent config bug open. |

## 3. OpenClaw Compared With Peers
- **Activity volume:** OpenClaw’s daily counts eclipse LobsterAI’s (419 vs 3 issue updates, 500 vs 17 PR updates), highlighting a larger, more active contributor base.
- **Technical focus:** OpenClaw concentrates on core runtime stability—gateway memory leaks, prompt-cache breakage, session-state integrity, and multi-channel communication reliability. LobsterAI focuses on co-work UX, enterprise IM task routing, and local multi-agent persona configuration.
- **Community surface area:** OpenClaw’s discussions reach 20 comments per thread, with machine-assisted triage (`clawsweeper`, `issue‑rating`). LobsterAI’s issue comments are minimal (max 3), and several community PRs have been stale for months.

## 4. Shared Technical Focus Areas
- **Multi-agent configuration safety:** OpenClaw had a closed (unmerged) request for per-agent memory-wiki vaults (#63829); LobsterAI currently faces a regression where editing one agent’s `USER.md` overwrites all others (#2293). Both signal the need for isolated, durable per-agent identity data.
- **Memory/index reliability:** OpenClaw is working to make embedded prompt caches survive session boundaries (#102175, #102189); LobsterAI migrated FTS-only indexes across agents to guarantee consistency (#2311).
- **Channel-specific robustness:** OpenClaw patched Discord, Slack, Feishu, QQBot, and Telegram delivery; LobsterAI fixed WeCom/DingTalk group ID casing and IM task routing (#2314, #2306).

## 5. Differentiation Analysis
- **Feature focus:** OpenClaw is a general-purpose AI agent gateway and runtime with a broad plugin ecosystem; LobsterAI is a desktop AI assistant for enterprise collaboration with scheduled tasks and IM integration (WeCom, DingTalk).
- **Target users:** OpenClaw serves developers operating persistent, long-running agent deployments; LobsterAI targets business teams performing co‑work and automated messaging.
- **Technical architecture:** OpenClaw’s issues expose gateway OOMs, session/prompt caching, and MCP OAuth handling. LobsterAI’s changes involve Electron/Windows UI quirks, FTS migration, and local agent file state.

## 6. Community Activity Notes
- **OpenClaw:** Extremely active—419 issue updates, 500 PR updates, 161 PRs merged/closed in a day. Hot topics draw double-digit comments; triage automation indicates a mature community pipeline.
- **LobsterAI:** Low-end activity with 3 issue updates and 17 PR updates. Community contributions exist (e.g., session time grouping, MCP JSON import) but most remain without maintainer response for months.

## 7. Evidence-Backed Observations
- **Multi-agent data isolation** is a concern in both projects: OpenClaw’s closed per-agent vault request and LobsterAI’s active `USER.md` overwrite bug show that maintaining independent agent identities and configuration is an area requiring attention.
- **Stability problems differ in scale but not in impact:** OpenClaw deals with systemic OOM crashes and prompt-cache regressions that break long-running services, while LobsterAI’s fixes address UI state loss and task routing correctness—both are core reliability work.
- **Community involvement is notably asymmetric:** OpenClaw’s contributor-driven fixes and active discussion threads contrast with LobsterAI’s small number of comments and multiple stale community PRs.
- **Channel integration is a recurring investment:** OpenClaw’s channel fixes span Discord, Slack, Feishu, and more; LobsterAI’s enterprise IM fixes (WeCom, DingTalk) reflect a narrower but similarly important delivery surface.
- **No clear cross-project trend** beyond the shared concern for configuration integrity and channel robustness; the two projects operate at different maturity and scale.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# Youdao LobsterAI Project Digest – 2026-07-11

## 1. Today’s Activity Brief
In the last 24 hours the repository recorded 3 issue updates (2 open, 1 closed) and 17 pull request updates (7 open, 10 closed). Maintainers merged a batch of fixes and one new feature, while a closed release branch (`Release/2026.7.8`) suggests a version is being prepared. The sole new bug report concerns multi‑agent `USER.md` files being overwritten on restart. Activity was concentrated on co‑work, scheduled‑task routing, and memory indexing improvements.

## 2. Releases
No new release was published. A release branch (`Release/2026.7.8`) was merged ([#2317](https://github.com/netease-youdao/LobsterAI/pull/2317)) but no official release notes or artifacts are available.

## 3. Project Progress – Merged/Closed PRs
Ten pull requests were closed today, bringing several fixes and one feature:

- **New feature:** Co‑work folder context attachments – users can now drop local folders as prompt context ([#2310](https://github.com/netease-youdao/LobsterAI/pull/2310)).
- **Co‑work fixes:**
  - Connected queued follow‑up coordinator across sessions and when minimized ([#2315](https://github.com/netease-youdao/LobsterAI/pull/2315)).
  - Submit only the selected queued steer to preserve FIFO order ([#2313](https://github.com/netease-youdao/LobsterAI/pull/2313)).
  - Fixed `askuser` state loss when minimizing the app ([#2312](https://github.com/netease-youdao/LobsterAI/pull/2312)).
- **Scheduled tasks:**
  - Preserved WeCom/DingTalk group ID casing and fixed compatibility for previously saved lowercase targets ([#2314](https://github.com/netease-youdao/LobsterAI/pull/2314)).
  - Repaired IM group task routing, filtering candidates by agent binding and migrating legacy announce jobs ([#2306](https://github.com/netease-youdao/LobsterAI/pull/2306)).
- **Memory/index:** Migrated FTS‑only indexes for all agents to ensure consistency ([#2311](https://github.com/netease-youdao/LobsterAI/pull/2311)).
- **Build & UI:**
  - Made null‑byte stripping ES2020‑compatible ([#2309](https://github.com/netease-youdao/LobsterAI/pull/2309)).
  - Prevented title‑bar logo compression on Windows ([#2316](https://github.com/netease-youdao/LobsterAI/pull/2316)).

A release preparation branch (`Release/2026.7.8`) was also closed ([#2317](https://github.com/netease-youdao/LobsterAI/pull/2317)).

## 4. Community Hot Topics
- **Multi‑agent `USER.md` overwritten bug** [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) (3 comments) – the user provided detailed reproduction steps and noted the bug appeared after a recent update. The discussion reflects a clear need for independent per‑agent configuration, currently broken.
- **Stale feature request: session list time grouping** [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) (1 comment) – the request is backed by a community PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338), but both have remained without maintainer feedback since April.

## 5. Bugs & Stability
- **Active regression – `USER.md` overwritten in multi‑agent setups**
  [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) (open, unassigned). Editing one agent’s “About you” field or directly modifying its `USER.md` causes all other agents’ `USER.md` files to be replaced with the main agent’s content after a restart. The issue was added after a recent update and currently has no fix PR in sight. **Severity: high** – it breaks per‑agent personalization entirely.

- **Old unresponsive toggle – scheduled task switch cannot be turned off**
  [#1392](https://github.com/netease-youdao/LobsterAI/issues/1392) was closed today as stale without a resolution. The original bug (certain task switches unresponsive) remains unaddressed.

- **Fixed today**
  Several bugs that could cause state loss or incorrect behaviour were resolved: `askuser` minimize state loss ([#2312](https://github.com/netease-youdao/LobsterAI/pull/2312)), queued steer mis‑submission ([#2313](https://github.com/netease-youdao/LobsterAI/pull/2313)), follow‑up coordinator disconnection ([#2315](https://github.com/netease-youdao/LobsterAI/pull/2315)), and IM group casing/routing errors ([#2314](https://github.com/netease-youdao/LobsterAI/pull/2314), [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306)).

## 6. Feature Request Clusters
Open feature‑related issues and PRs cluster around improving the co‑work session sidebar and MCP/Scheduled‑task flexibility:

- **Session list time grouping** – requested in [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) with a community PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) (stale).
- **Error status red dot badge** – PR [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) (stale) aiming to visually mark error sessions.
- **Scheduled task “workdays” option** – PR [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) (stale).
- **MCP config JSON paste import** – PR [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) (stale) for rapid server configuration.
- **Folder context attachments** – merged today ([#2310](https://github.com/netease-youdao/LobsterAI/pull/2310)).

Taken together, users want richer session‑list organisation and more convenient configuration.

## 7. User Feedback Summary
- **Primary pain point:** Multi‑agent personalisation is broken. User `@yepcn` ([#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)) provided a clear reproduction: editing one agent’s `USER.md` or “About you” field silently replaces all agents’ files with the main agent’s content after restart. This makes separate agent personas impossible and is seen as a regression.
- **Unresolved toggle bug:** `@zqgittest` reported that some scheduled task switches could not be turned off ([#1392](https://github.com/netease-youdao/LobsterAI/issues/1392)); the issue was auto‑closed as stale without action, potentially leaving the reporter dissatisfied.
- **Usability request:** `@MaoQianTu` wants time‑based session grouping ([#1337](https://github.com/netease-youdao/LobsterAI/issues/1337)) to navigate large histories – a need echoed by many AI chat product users.

## 8. Backlog Watch
Several significant community contributions and issues have received no maintainer engagement for months:

- **Session time grouping** – issue [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) & PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) (since April, no response).
- **Error state badges** – PR [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) (stale since April).
- **i18n, Escape, delete fixes for cowork** – PR [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) (stale since April).
- **Workdays schedule option** – PR [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) (stale).
- **MCP JSON import** – PR [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) (stale).
- **Dependabot CI updates** – [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275), [#1276](https://github.com/netease-y

</details>