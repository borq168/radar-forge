# OpenClaw Ecosystem Digest 2026-08-19

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-08-19 00:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-19

## 1. Today's Activity Brief

OpenClaw saw its highest single-day activity level in recent memory, with 500 issues and 500 pull requests updated in the last 24 hours. Of those, 35 issues were closed and 118 PRs were merged or closed. No new releases were published today. The project remains heavily focused on database stability (SQLite corruption, migration, and snapshot issues), gateway event-loop health, and Signal channel integration, with a flurry of maintainer-reviewed PRs landing across the UI, CLI, and agent runtime layers.

## 2. Releases

**None.**

No new releases were cut today. The last release appears to be `2026.7.1-2` (referenced in several issue environments). A beta tag `2026.8.1-beta.2` is mentioned in issue #124788 as having been deployed via autoupdate.

## 3. Project Progress

**118 PRs were merged/closed today.** Notable closed or merged items include:

- **#126071** — `fix(test): run the shared Control UI lane on the cross-file cleanup runner` — resolves flaky UI test failures that occurred on unrelated PRs.
- **#116489** — `feat(security): require acknowledgement for install policy warnings` — adds a `warn` return value for `security.installPolicy` commands, forcing interactive CLI users to acknowledge warnings before proceeding.
- **#120900** — `feat(ui): review install policy warnings` — Control UI now allows authenticated admins to review and acknowledge install-policy warnings during plugin installation.
- **#103231** — Closed: `claude-cli` backend `ownsNativeCompaction` assumption was false for `claude -p` sessions — sessions grew past 200% context and recovery paths failed silently.

**Still-open PRs advancing key features:**
- **#126084** — `refactor(agents): consolidate session auth selection behind prepared-facts facade` — P1 fix for subagent dispatch and session auth selection logic.
- **#126088** — `feat(secrets): add explicit protected and agent-readable access` — P1 PR introducing explicit access modes for shared secrets.
- **#126007** — `feat(ui): explain decision receipts in Activity` — large UI improvement for explaining agent decision receipts in the web UI.
- **#118169, #124015, #119341** — Signal channel improvements: QR-based first account linking, port collision detection, generic QR setup steps.

Several PRs are **waiting on author** for updates: #125822, #119341, #117712, #123209, #123535, #123356, #126088, #121569, #126030, #126068, #122628, #126082.

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Summary |
|-------|----------|---------|
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | 23 | Running notes for a 24-hour live watch of Pash's dev agent behavior — observational, non-interventional. |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 16 | Large SQLite transcript cleanup blocks the gateway event loop. **P1, diamond lobster.** |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | 15 | **CLOSED** — CLI startup preflight could corrupt live state DB while gateway was running. **P0, silver shellfish.** |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 14 | "Cannot convert undefined or null to object" regression with google-vertex/gemini-3.1-pro-preview in 2026.3.2. **P1, platinum hermit.** |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 14 | Feature request: companion-friendly SQLite transcript/session seams on top of database-first runtime. |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | 13 | SQLite snapshot restore lacks end-to-end crash and identity guarantees. **P1, gold shrimp.** |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | 12 | Main agent blocked by persistent workspace-state migration after Anthropic auth recovery. **P1, platinum hermit.** |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 12 | Feature: isolate subagent completion from parent context; return only status + child session link. |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | 11 | DeepSeek V4 Flash incomplete turn (payloads=0, tools=2) in 2026.5.27/28. |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | 11 | Codex app-server startup retries can exhaust before replacement server is ready. **P1, diamond lobster.** |

**Underlying needs analysis:**
- **Gateway stability during heavy operations** (issues #112423, #83959, #124788): Users are experiencing event-loop blocking during SQLite transcript cleanup, Codex startup retries, and periodic 100-second blocks after beta.2 upgrade. The common pattern is synchronous I/O or long-running operations on the gateway thread, which should be async or offloaded.
- **State migration fragility** (issues #101290, #94939, #90378, #112395): Multiple reports of migrations corrupting, emptying, or silently changing state databases. Users demand better migration transparency, rollback guarantees, and preflight checks.
- **Model provider regressions** (issues #38327, #88657, #91223): New versions breaking previously working models (Gemini, DeepSeek), plus prompt cache collapse when active-memory plugin is enabled. Users want faster regression testing and model-specific compatibility testing.

## 5. Bugs & Stability

### Critical and High-Severity Bugs Reported or Updated Today

**P0 (Critical):**
- **#101290** (CLOSED) — CLI startup preflight corrupted live state DB while gateway was running. Closed as reproduced on non-main branch. Root cause: health-check commands caused "database disk image is malformed" on macOS. Vanilla SQLite control did not reproduce.
- **#112395** — Startup migration preflight blocks gateway after upgrade from 6.11 to 7.1; migration tables and leases are empty. Reported on 2026.7.1-2. **No fix PR yet.**

**P1 (High):**
- **#112423** — Large SQLite transcript cleanup blocks the gateway event loop. Reproduced on 2026.7.1-2. **No fix PR yet.**
- **#113306** — SQLite snapshot restore lacks end-to-end crash and identity guarantees. **No fix PR yet.**
- **#111498** — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery. **No fix PR yet.**
- **#83959** — Codex app-server startup retries can exhaust before replacement server is ready. **Linked PR open.**
- **#114211** — Matrix room agents can loop on visible no-reply output, restart recovery, and stale session replay. **No fix PR yet.**
- **#94939** — 6.x state migration leaves channel conversation-store SQLite empty (0 bytes). **Linked PR open.**
- **#91144** — Windows native CLI gateway Scheduled Task does not stay running. **Linked PR open.**
- **#90098** — Stack-safe large attachment handling for Control UI and gateway. **Linked PR open.**
- **#90378** — Cron store migrated to SQLite silently, new jobs default to wrong delivery mode. **Linked PR open.**
- **#114234** — Usage-cost refresh lock never releasable after container restart reusing PID. **Linked PR open.**
- **#112248** — `@openclaw/codex` plugin fails to register on gateway boot. **No fix PR yet.**
- **#124788** — beta.2 gateway: event loop blocks ~100s every ~10 min (anchored timer; string building + fs scan). **No fix PR yet.**
- **#114184** — Slack threads in same channel serialize — ingress lane key omits thread_ts. **Linked PR open.**
- **#124911** — Compaction reserveTokensFloor ignores model context window; adaptive helper exists but only used in error message. **No fix PR yet.**

**P2 (Medium):**
- **#75782** — Embedded-run "auth" stage takes 10–15s synchronously regardless of model auth profile state.
- **#88657** — DeepSeek V4 Flash incomplete turn in 2026.5.27/28.
- **#43374** — All LLM API calls time out simultaneously under multi-agent concurrency.
- **#90361** — Intermittent memory_search "index metadata is missing" despite valid builtin memory index.
- **#92186** — Foreground reply fence cancels delivery of completed replies to earlier concurrent group messages.
- **#91892** — Cron jobs stall during AI model calls (model_call:stream_progress never completes).
- **#117609** — Transient LLM/socket errors retried for channels/jobs but not for embedded-assistant stage.

**Regression patterns:** Multiple regressions are tied to the 6.x → 7.x migration path (database format changes, SQLite adoption) and model provider updates (DeepSeek V4 Flash, Gemini 3.1). The beta.2 gateway event-loop blocking (#124788) is a new regression affecting all users on that channel.

## 6. Feature Request Clusters

### Session and Transcript Management
- **#79902** — Companion-friendly SQLite transcript/session seams on top of database-first runtime (14 comments)
- **#96975** — Isolate subagent completion from parent context; return status + child session link only (12 comments)
- **#49259** — Prune stale orphaned sessions from Dashboard Sessions (7 comments)
- **#88032** — Telegram quote/reply context should be first-class, durable inbound contract (7 comments)

### Agent and Model Configuration
- **#10687** — Fully dynamic model discovery (OpenRouter + beyond) — 3 👍, 9 comments
- **#6757** — Agent-triggered context compaction (self-compact tool) — 2 👍, 8 comments
- **#8724** — Per-model generation timeout config — 5 comments
- **#124911** — Fix compaction reserveTokensFloor to respect model context window — 5 comments

### UI and User Experience
- **#75947** — UI quality update based on UX scoring — 2 👍, 8 comments
- **#91455** — Documentation update for Kubernetes — 8 comments
- **#46058** — Exploring a chat-first Android surface for OpenClaw — 6 comments
- **#39406** — Config option to suppress transient tool error warnings — 7 comments

### Provider and Auth
- **#45508** — Self-hosted STT/TTS provider support in webchat — 2 👍, 7 comments
- **#77467** — MiniMax Portal OAuth token cannot auto-refresh — 3 👍, 5 comments

### Memory and Compaction
- **#95724** — Index memory by source directory, not by agent — eliminate duplicate vector stores for same-workspace agents (6 comments)
- **#91223** — Active memory injection breaks prompt cache hit rate (99.9% → 22%) — 6 comments

## 7. User Feedback Summary

**Pain points expressed by users:**

1. **Database corruption and migration failures** — Multiple users report losing state, transcripts, or having empty databases after upgrade. One user (jarvis1982oc) had SQLite corruption 4 times in 5 days. Another user (xiaodongEdtech) found migration tables empty after upgrade from 6.11 to 7.1. Users want visible migration logs and rollback support.

2. **Performance degradation after upgrade** — A user on beta.2 (therealmacsteel) reports 100-second event-loop blocks every ~10 minutes, causing WebSocket disconnections. Users are frustrated by "silent" regressions that degrade responsiveness without clear error messages.

3. **Model-specific regressions** — Users report that DeepSeek V4 Flash stopped working between 5.26 and 5.27, Gemini 3.1-pro-preview broke in 3.2, and the active-memory plugin destroys prompt cache hit rates. Users want better model compatibility testing and faster rollback options.

4. **UI/UX friction** — Users describe the UI as "hard to read, navigate, and understand" (msbel5), with tool error warnings delivered to channels even when the agent retries successfully (neoclaw-latrobe), and Telegram quote/reply support requiring local runtime patching (jamesachurchill).

5. **Channel-specific issues** — WhatsApp group sends failing locally (elapx), Slack threads serializing in the same channel (grimmolf), Windows Scheduled Task not staying running (Hugues-Le-Roy), Matrix room agents looping on no-reply output (NossieUK).

**Satisfaction signals:** The closed P0 corruption bug (#101290) was resolved, and the community remains actively engaged with 23 comments on the dev agent observation thread. Multiple PRs are in "ready for maintainer look" status, indicating maintainers are responsive.

## 8. Backlog Watch

### Issues Needing Maintainer Attention (unanswered or stuck)

| Issue | Priority | Status |
|-------|----------|--------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | P1 | Needs live repro — "Cannot convert undefined or null to object" with Gemini 3.1. Open since March 2026. |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2 | Self-hosted STT/TTS support — needs maintainer review and product decision. Open since March 2026. |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | P2 | Agent-triggered context compaction — needs maintainer review and product decision.

---

## Cross-Ecosystem Comparison

## Cross-Project Comparison Report – 2026-08-19

### 1. Daily Cross-Project Overview

OpenClaw recorded its highest single-day activity in recent memory with 500 issues and 500 PRs updated, including 35 issues closed and 118 PRs merged. Youdao Lobster had a quieter day: 9 issues updated (none closed) and 19 PRs merged, including a batch of long-stale PRs from April. OpenClaw did not ship a new release, while Lobster published **LobsterAI 2026.8.18** yesterday with a new DeepSeek Harness engine. Both projects show active maintenance, but OpenClaw’s community engagement and bug-fix velocity far exceed Lobster’s.

### 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
|---------|---------------|-------------|----------------|---------------|
| OpenClaw | 500 (35 closed) | 500 (118 merged/closed) | No new release today | Highest single-day activity; 118 PRs merged across UI, CLI, agent runtime |
| Youdao Lobster | 9 (0 closed) | 19 (16 merged/closed) | Release 2026.8.18 published yesterday | 16 PRs merged, many from April backlog; all issues remain open |

### 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated is roughly 50× higher than Lobster’s 9 and 19 respectively.
- **Technical focus**: OpenClaw is heavily engaged in database stability (SQLite corruption, migration), gateway event-loop health, and model-provider regressions. Lobster’s focus is narrower: integration of a new optional AI engine (DSH), UI feature polish, and fixing long-standing crash bugs.
- **Community surface area**: OpenClaw has 10+ issues with double-digit comments, including a live watch thread on dev agent behavior (23 comments). Lobster’s most commented issue has only 2 replies, and zero maintainer responses on several open bugs.

### 4. Shared Technical Focus Areas

Both projects demonstrate attention to the following areas today:

- **Database stability and migration**: OpenClaw closed a P0 bug where CLI preflight corrupted the live state DB (#101290) and has multiple open P1 SQLite snapshot/cleanup issues. Lobster merged PR #1597 fixing SQLite foreign-key enforcement and cascade delete.
- **Model/engine flexibility**: OpenClaw is dealing with regressions in Gemini 3.1 and DeepSeek V4 Flash, while Lobster released a new DSH engine and has an open request for Hermes Agent support (#1614).
- **Agent configuration and session management**: OpenClaw merged PRs for subagent session auth selection (#126084) and agent-readable secrets (#126088). Lobster merged PRs for skills usage tracking (#1583) and session export improvements (#1615).

### 5. Differentiation Analysis

| Dimension | OpenClaw | Youdao Lobster |
|-----------|----------|----------------|
| **Primary user base** | English-speaking open-source community; global developers | Chinese-speaking users (Youdao ecosystem); potential for localized features |
| **Feature emphasis** | Gateway stability, agent runtime, database-first transcript management, multi-provider compatibility | UI polish (sidebar, settings, notifications), integration of new engines (DSH), scheduled task automation |
| **Technical architecture** | Core reference implementation; heavy reliance on SQLite and event-loop based gateway | Downstream fork with its own UI layer; uses LobsterAI as base; merges upstream fixes |
| **Community responsiveness** | High: maintainers actively reviewing PRs, closing issues, linking fixes | Low: several critical bugs (crash, custom model, skills) remain open without maintainer response since April |

### 6. Community Activity Notes

- **High activity**: OpenClaw – 500+ updates, 35 issues closed, 118 PRs merged, multiple hot topics with 10+ comments.
- **Low activity**: Youdao Lobster – 9 issues updated (all open), 19 PRs merged (mostly backlog), zero new issues filed today, no maintainer replies on outstanding bugs.

*Note: Activity tiers are based solely on today’s counts and release status. No maturity scoring is implied.*

### 7. Evidence-Backed Observations

1. **Database integrity is a cross-project concern**: Both projects addressed SQLite-related issues today – OpenClaw closed a P0 corruption bug and has multiple open P1 migration/cleanup issues; Lobster fixed foreign-key enforcement and cascade delete.
2. **Model/engine compatibility remains fragile**: OpenClaw logged regressions with Gemini 3.1 and DeepSeek V4 Flash; Lobster released a new engine (DSH) while a request for Hermes Agent support goes unanswered. Neither project shows a systematic approach to model regression testing.
3. **OpenClaw’s community scales with problem severity**: The most active issues (77598, 112423, 101290) correlate with P0/P1 bugs and user-facing blockers, not feature requests. Lobster’s community is less vocal, with the same critical bugs (client crash, custom model failure) attracting only 2 comments each.
4. **Lobster’s backlog is being addressed, but slowly**: 16 PRs from April were merged today, yet the original bug issues (e.g., #1622, #1627, #1632) remain open without a fix PR linked, suggesting the PRs may not fully resolve them or the tracker is not updated.
5. **No clear cross-project signal on UI/UX direction**: OpenClaw’s UI activity focuses on decision receipts and install policy warnings; Lobster’s UI work is on sidebar reorganization and avatar settings. These are project-specific improvements, not a shared pattern.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# Youdao Lobster Project Digest – 2026-08-19

## 1. Today's Activity Brief

In the last 24 hours, the project saw 9 issues updated (all open, none closed) and 19 PRs updated (3 open, 16 merged/closed). One new release, LobsterAI 2026.8.18, was published yesterday, introducing a DeepSeek Harness (DSH) engine integration and process launcher. Several long‑standing stale issues remain unaddressed, while a batch of older PRs (from April 2026) were finally merged today, including the scheduled‑task system notification feature, skills usage tracking, and SQLite foreign‑key fixes. The most active PRs today are the release merge (#2510) and the DSH update (#2509).

## 2. Releases

**LobsterAI 2026.8.18** – published 2026-08-18
[Release link](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.18) (not directly provided, but referenced as the latest release)

**What’s Changed:**
- `feat: dsh engine integration` – adds an opt‑in experimental DeepSeek Harness (DSH) as an alternative AI engine (PR #2502)
- `feat: update dsh to rc.7` – updates the DSH engine to release candidate 7 (PR #2509)
- `feat: dsh process launcher` – introduces a launcher component for the DSH process (PR description truncated)

No breaking changes or migration notes were mentioned in the release data. The release also includes all fixes and features merged into the `release/2026.8.17` branch (23 commits, 57 files changed, +7,004/-39).

## 3. Project Progress

The following PRs were merged or closed in the last 24 hours (all are listed as [CLOSED] with updated date 2026-08-18):

- **#2510** – Release 2026.8.17 merge into `main` (by @fisherdaddy)
- **#2509** – Update DSH to rc.7 (by @fisherdaddy)
- **#2481** – Sidebar: move task search to header actions (by @liuzhq1986)
- **#2425** – Settings: artifact auto‑preview toggle (by @liuzhq1986)
- **#2418** – Sidebar: multi‑agent task activity filter (by @liuzhq1986)
- **#2410** – Style: align Sites page layout with management views (by @liuzhq1986)
- **#2417** – Fix: copy success feedback for Sites (by @liuzhq1986)
- **#2508** – Fix: retry server model load after transient failures (by @fisherdaddy)
- **#2507** – Fix: cap cron run history page size (by @liuzhq1986)
- **#1583** – Feat: recently used skills tab with usage count tracking (by @BucleLiu)
- **#1597** – Fix: enable SQLite foreign keys, repair cascade delete (by @kayo5994)
- **#1615** – Feat: improve session export quality and add copy‑to‑clipboard (by @xuzx-code)
- **#1621** – Feat: system notification on scheduled task completion (by @noransu, closes #1620)
- **#1626** – Fix: OpenClaw gateway crash due to illegal config field and dialog flicker (by @xuzx-code)
- **#1629** – Feat: user avatar settings (by @BucleLiu)
- **#1631** – Feat: MCP quick‑add templates (by @BucleLiu)

These PRs represent significant feature additions (system notifications, avatar settings, MCP templates, skills usage tracking) and stability fixes (SQLite cascade, OpenClaw gateway, model loading retry, scheduled‑task history pagination). Many of these PRs were originally created in April and remained open until today.

## 4. Community Hot Topics

No issues or PRs generated more than 2 comments in the last 24 hours. The most discussed topics (by comment count) are:

- **#1614** – Request to add `hermes-agent` as an optional AI engine (2 comments, [link](https://github.com/netease-youdao/LobsterAI/issues/1614)) – user suggests supporting Hermes Agent similar to OpenClaw. No maintainer response.
- **#1622** – “无法添加自定义模型” (Cannot add custom model) – test failure after adding custom model (2 comments, [link](https://github.com/netease-youdao/LobsterAI/issues/1622)). No maintainer response.
- **#1627** – “一个稍微复杂的任务，客户端就崩了” (Client crashes on moderately complex tasks) (2 comments, [link](https://github.com/netease-youdao/LobsterAI/issues/1627)). No maintainer response.
- **#1632** – “切换成本地模型以后，原来的skill都不能用了” (Skills don’t work after switching to local model) (2 comments, [link](https://github.com/netease-youdao/LobsterAI/issues/1632)). No maintainer response.

The underlying need across these issues is **better model and engine flexibility** – users want to bring their own agents (Hermes), fix custom model integration, and avoid crashes and skill incompatibility when switching between cloud and local models.

## 5. Bugs & Stability

All bugs reported in the issue list are **stale** (last updated April 2026, re‑updated today only due to the data refresh). No new bugs were filed in the last 24 hours. The following open bugs remain unfixed:

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 无法添加自定义模型 (Custom model test failure) | Medium – blocks custom model usage | None |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 客户端崩溃 (Client crash on complex tasks) | High – crash | None |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | 切换本地模型后技能失效 (Skills broken after local model switch) | High – feature broken | None |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | 语言切换不完整 (Language switch incomplete) | Low – UI only | None |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 更新后首次启动崩溃 (First launch crash after update) | High – crash | None |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 会话/定时任务无法正常进行 (Sessions and scheduled tasks broken) | High – core functionality broken | None |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | 技能删除后列表未同步 (Skill deletion UI not synced) | Medium – UX bug | None |

Notably, PR #1626 (merged today) fixes a related OpenClaw gateway startup crash that was a P0 blocker, and PR #1597 fixes SQLite cascade delete – both address earlier bugs. However, the bug issues themselves remain open, indicating that the fixes may not have been released or the issues are not yet fully resolved.

## 6. Feature Request Clusters

The following feature requests were discussed (via issues) and several have corresponding PRs that were merged today:

- **Scheduled task system notifications** – Issue #1620 ([link](https://github.com/netease-youdao/LobsterAI/issues/1620)) requested OS‑native notifications when a scheduled task completes. PR #1621 (merged today) implements this feature.
- **Hermes Agent engine support** – Issue #1614 ([link](https://github.com/netease-youdao/LobsterAI/issues/1614)) proposes adding `hermes-agent` as an alternative AI engine. No PR has been opened.
- **Avatar settings** – Issue not explicitly listed, but PR #1629 (merged today) adds user avatar settings (predefined SVGs and local upload). This likely originated from internal feature requests.
- **MCP quick‑add templates** – No corresponding issue, but PR #1631 (merged today) adds three common MCP templates (File System, SQLite, Brave Search) for quick setup.
- **Skills usage tracking** – No issue, but PR #1583 (merged today) adds a “Recently Used” tab in the Skills page with usage count tracking.

The strongest cluster is around **system notifications** (which was requested and delivered) and **engine flexibility** (Hermes Agent request remains open).

## 7. User Feedback Summary

Real user pain points expressed in open issues:

- **Custom model integration is broken** – users cannot add custom models (test fails) and switching to local models causes pre‑installed skills to stop working. This is a significant usability gap.
- **Client crashes on complex tasks** – the app crashes when a task becomes moderately complex, likely due to resource exhaustion or memory issues.
- **UI inconsistencies** – language switch does not fully translate all pages, and skill deletion does not remove items from the list after a restart.
- **Startup crashes after updates** – at least one user reported that updating to the latest version causes immediate crash on first launch (macOS Intel).
- **Sessions and scheduled tasks broken** – both conversation and cron‑like features fail to execute, affecting core functionality for users who rely on automation.

On the positive side, the merged PRs this week show that the maintainers are actively addressing several long‑standing issues (OpenClaw gateway, SQLite cascade, session export, notification feature). Users who filed feature requests for notifications (#1620) and export improvements (#1615) will see their requests fulfilled in the upcoming release.

## 8. Backlog Watch

The following issues have been open for over 4 months (since April 2026) with no maintainer response or fix PR. They are marked as stale and remain active:

- **#1614** – Hermes Agent engine request (2026-04-10) – [link](https://github.com/netease-youdao/LobsterAI/issues/1614)
- **#1622** – Custom model test failure (2026-04-10) – [link](https://github.com/netease-youdao/LobsterAI/issues/1622)
- **#1627** – Client crash on complex tasks (2026-04-10) – [link](https://github.com/netease-youdao/LobsterAI/issues/1627)
- **#1632** – Skills broken after local model switch (2026-04-11) – [link](https://github.com/netease-youdao/LobsterAI/issues/1632)
- **#1586** – Language switch incomplete (2026-04-09) – [link](https://github.com/netease-youdao/LobsterAI/issues/1586)
- **#1587** – First launch crash after update (2026-04-09) – [link](https://github.com/netease-youdao/LobsterAI/issues/1587)
- **#1589** – Sessions and scheduled tasks broken (2026-04-09) – [link](https://github.com/netease-youdao/LobsterAI/issues/1589)
- **#1617** – Skill deletion UI not synced (2026-04-10) – [link](https://github.com/netease-youdao/LobsterAI/issues/1617)

These issues represent critical bugs and feature requests that have not received any public maintainer attention. The fact that multiple PRs from the same April timeframe were merged today suggests that maintainers may be working through the backlog, but these specific issues remain unaddressed and should be prioritized for a stable release.

Additionally, the open PR **#1277** ([link](https://github.com/netease-youdao/Lob

</details>