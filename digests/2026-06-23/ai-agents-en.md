# OpenClaw Ecosystem Digest 2026-06-23

> Issues: 265 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-23 00:34 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-23

## 1. Today’s Activity Brief
In the last 24 hours, 265 issues were updated (178 open, 87 closed) and 500 pull requests were updated (435 open, 65 merged/closed). One new release was published: **v2026.6.10-beta.2**, focusing on automatic fast mode for short conversational turns and more reliable model routing. The project continues to see high community engagement, with several critical regressions and memory-related bugs top of mind.

## 2. Releases
- **v2026.6.10-beta.2** (openclaw 2026.6.10-beta.2):
  *Highlights:*
  - **Automatic fast mode for talks:** OpenClaw can enable fast mode for short conversational turns, then return to normal mode for longer runs with bounded fallback and delivery behavior. ([#85104](https://github.com/openclaw/openclaw/issues/85104))
  - **More reliable model routing:** (details truncated in release notes).
  - No breaking changes or migration notes were indicated in the release snippet.

## 3. Project Progress
65 pull requests were merged or closed today. Notable among the top-commented PRs:

- **Merged/Closed:**
  - [#95614](https://github.com/openclaw/openclaw/pull/95614) `fix(memory-wiki): preserve human notes block on source re-ingest` — prevents destruction of user-edited `## Notes` blocks when a wiki source is re-ingested.
  - [#95218](https://github.com/openclaw/openclaw/pull/95218) `fix(agents): bound provider JSON response reads` — adds a 16 MiB cap to JSON body parsing, matching existing binary/text bounded reads.
  - [#68936](https://github.com/openclaw/openclaw/pull/68936) `Autofix: add PR review autofix pipeline + Windows daemon` — automated pipeline for addressing review comments plus a Windows background supervisor.
  - [#95880](https://github.com/openclaw/openclaw/pull/95880) `ci: generalize QA profile evidence workflow` — moves the manual QA evidence workflow into a reusable form with a `qa_profile` input.
  - [#95765](https://github.com/openclaw/openclaw/pull/95765) `bug(onboard): external provider plugin install loops and skips selected auth flow` — fixes a first-time onboarding flow issue where provider auth prompts were skipped.

- **Still open but active:**
  - [#95688](https://github.com/openclaw/openclaw/pull/95688) `fix(feishu): parse interactive card text in merge_forward sub-messages` — adds handling for Feishu card sub-messages.
  - [#95722](https://github.com/openclaw/openclaw/pull/95722) `fix: normalize provider keys during model config merge` — prevents duplicate provider entries due to case mismatches.
  - [#84366](https://github.com/openclaw/openclaw/pull/84366) `Doctor: expose session lock findings` — adds stale session write-lock diagnostics to the `openclaw doctor` command.

## 4. Community Hot Topics
The most discuss issues and pull requests reveal two clusters: **session/transcript integrity** and **regression on model/provider interactions**.

- **Most commented issues:**
  - [#88838](https://github.com/openclaw/openclaw/issues/88838) (34 comments) – Tracking SQLite migration via accessor seam for core session/transcript storage. The third path is near completion; remaining work involves transcript/plugin-adjacent identity tail and SQLite adapters.
  - [#88312](https://github.com/openclaw/openclaw/issues/88312) (17 comments) – Regression: Codex app-server turn-completion stall returns in 2026.5.27, re-introducing a previously fixed issue (#84076).
  - [#86538](https://github.com/openclaw/openclaw/issues/86538) (13 comments) – Session write-lock timeouts blocking subagent delivery lanes, lacking owner diagnostics.
  - [#91588](https://github.com/openclaw/openclaw/issues/91588) (13 comments) – **Critical:** Gateway memory leak (RSS from 350MB to 15.5GB over days), causing repeated OOM crashes.
  - [#92201](https://github.com/openclaw/openclaw/issues/92201) (12 comments) – Anthropic thinking signatures intermittently invalid on replay in embedded runner.
  - [#90370](https://github.com/openclaw/openclaw/issues/90370) (11 comments) – Feature request: support PostgreSQL as alternative to hard-coded SQLite (has 👍2).

- **Most active PRs:** Many PRs in the top list have `comments: undefined` in the provided data, so exact counts are unavailable. However, several have been in progress for weeks and carry labels such as `needs proof` or `waiting on author`, indicating they are receiving attention but not yet merged.

## 5. Bugs & Stability
Several severe bugs are open, many rated **Platinum Hermit** (highest severity).

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak (RSS 350MB→15.5GB) | P0 / Platinum Hermit | Open, no new fix PR | None visible |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall regression | P1 / Platinum Hermit | Open, fix shape clear | Possibly [#85107](https://github.com/openclaw/openclaw/issues/85107) but regression reappeared |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent lanes | P1 / Diamond Lobster | Open, linked PR open | [#93858](https://github.com/openclaw/openclaw/issues/93858) (lazy fence) |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron fails with "LLM request failed" on model-call-started | P1 / Platinum Hermit | Open, no new fix PR | None visible |
| [#95495](https://github.com/openclaw/openclaw/issues/95495) | 2026.6.9 silently relocates memory store forcing full re-embed | P1 / Diamond Lobster | Open, linked PR open | Not yet |
| [#95623](https://github.com/openclaw/openclaw/issues/95623) | tool_use.id sanitizer misses OpenAI composite id on cross-provider failover → Anthropic 400 bricks session | P1 / Platinum Hermit | Open, no new fix PR | None |
| [#85743](https://github.com/openclaw/openclaw/issues/85743) | pendingFinalDelivery heartbeat replay loops forever with no cap | P1 / Diamond Lobster | Open, no new fix PR | None |
| [#93375](https://github.com/openclaw/openclaw/issues/93375) | Telegram polling silent crash loop after transient timeout – health monitor cannot recover | P1 / Diamond Lobster | Closed | Not specified |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turn (payloads=0, tools=2) | P2 / Diamond Lobster | Open, no new fix PR | None |

- **Regressions:** Two regressions were explicitly reported:
  - [#88312](https://github.com/openclaw/openclaw/issues/88312) (Codex stall)
  - [#95495](https://github.com/openclaw/openclaw/issues/95495) (memory store relocation without warning)
- **Fix PRs exist for:**
  - [#86538](https://github.com/openclaw/openclaw/issues/86538) has linked PR [#93858](https://github.com/openclaw/openclaw/issues/93858) (defer foreground fence)
  - [#95495](https://github.com/openclaw/openclaw/issues/95495) has an open linked PR

## 6. Feature Request Clusters
Several feature requests gathered support or discussion this period:

- **Alternative storage backend** – [#90370](https://github.com/openclaw/openclaw/issues/90370) (11 comments, 👍2) asks for PostgreSQL as an option instead of hard-coded SQLite. No PR yet.
- **Suppress sub-agent announce** – [#8299](https://github.com/openclaw/openclaw/issues/8299) (7 comments, 👍1) – wants a config flag to disable the sub-agent summary posting. Open since February.
- **Per-channel model override** – [#53638](https://github.com/openclaw/openclaw/issues/53638) (6 comments, 👍2) – allow model selection at channel/group/DM level. Closed (presumably implemented or superseded).
- **Telegram inline query support** – [#54794](https://github.com/openclaw/openclaw/issues/54794) (6 comments, 👍2) – enable `@botname query` from any chat. Stale.
- **Memory index by source directory, not by agent** – [#95724](https://github.com/openclaw/openclaw/issues/95724) (5 comments) – eliminate duplicate vector stores for agents sharing a workspace. No fix PR yet.
- **ACP session skill context injection** – [#43564](https://github.com/openclaw/openclaw/issues/43564) (4 comments) – inject skills into Codex/Pi/OpenCode session contexts. Open since March.

No PRs have been opened yet for these feature requests.

## 7. User Feedback Summary
Direct user statements from issues and PR comments highlight the following pain points:

- **Data loss and lack of migration** – “2026.6.9 silently relocates memory store with no migration, forcing a full re-embed (1499 files) with zero upgrade-time warning” ([#95495](https://github.com/openclaw/openclaw/issues/95495)).
- **Stability and crashes** – Gateway OOM kills due to memory leak ([#91588](https://github.com/openclaw/openclaw/issues/91588)) and Telegram polling crash loops ([#93375](https://github.com/openclaw/openclaw/issues/93375)).
- **Regressions frustrating users** – “Codex stopped before confirming the turn was complete” regression re-appearing ([#88312](https://github.com/openclaw/openclaw/issues/88312)).
- **Incomplete or broken provider integrations** – DeepSeek V4 Flash incomplete turns ([#88657](https://github.com/openclaw/openclaw/issues/88657)), NVIDIA Build provider stream cuts ([#95760](https://github.com/openclaw/openclaw/issues/95760)), Ollama remote streaming not consumed ([#94251](https://github.com/openclaw/openclaw/issues/94251)).
- **Configuration and secrets management** – Secrets audit misses LaunchAgent env file ([#92522](https://github.com/openclaw/openclaw/issues/92522)), self-hosted channel plugins cannot use externalized stores ([#92516](https://github.com/openclaw/openclaw/issues/92516)).
- **Onboarding issues** – External provider plugin install loops and skips auth flow ([#95765](https://github.com/openclaw/openclaw/issues/95765)).
- **Platform-specific issues** – macOS CLLocationManager permission spam ([#94147](https://github.com/openclaw/openclaw/issues/94147)), Windows QMD path mangling ([#92302](https://github.com/openclaw/openclaw/issues/92302)).

Positive feedback is absent from today’s dataset; the tone is predominantly problem-reporting.

## 8. Backlog Watch
Issues and PRs that have been open for extended periods with minimal progress or awaiting maintainer response:

- [#8299](https://github.com/openclaw/openclaw/issues/8299) – “Feature request: config option to suppress sub-agent announce” (created Feb 3, 2026, 7 comments, last updated today but no maintainer decision).
- [#54794](https://github.com/openclaw/openclaw/issues/54794) – “Telegram Inline Query Support” (created Mar 26, 2026, stale, 6 comments).
- [#43564](https://github.com/openclaw/openclaw/issues/43564) – “ACP Session Skill Context Injection” (created Mar 12, 2026, 4 comments, needs security review).
- [#78431](https://github.com/openclaw/openclaw/issues/78431) – “Discord: implement messages.statusReactions lifecycle” (created May 6, 2026, 5 comments, docs claim support but code missing).
- [#85773](https://github.com/openclaw/openclaw/issues/85773) – “

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-23

## 1. Daily Cross-Project Overview

Today's activity across the four tracked projects is dominated by heavy bug-fixing and stability work, with OpenClaw maintaining its outsized volume (500 PRs, 265 issues updated). NanoBot and PicoClaw both executed focused bug-fix sprints resulting in 12 and 34 merged PRs respectively, while ZeroClaw's activity is split between production bug patches and the emergence of a large architectural RFC wave around WebAssembly-first design. No project published a stable release today, though OpenClaw shipped a beta and PicoClaw pushed an automated nightly build. Cross-project signals for memory/storage reliability, provider integration bugs, and platform-specific issues (Windows, macOS) appear across multiple projects.

## 2. Activity Comparison

| Project | Issues (open/total updated) | PRs (merged+closed/total updated) | Release Today | Activity Note |
|---------|----------------------------|-----------------------------------|---------------|---------------|
| **OpenClaw** | 178 open, 265 total | 65 merged/closed, 500 total | v2026.6.10-beta.2 | Highest absolute volume; critical memory leak (#91588) and session regression (#88312) remain open |
| **NanoBot** | 2 open, 4 total | 12 merged/closed, 27 total | None | Focused bug sprint on gateway shutdown and WebUI fixes; v0.2.2 prepared but not released |
| **ZeroClaw** | 42 open, 50 total | 2 merged/closed, 50 total | None | RFC-heavy day; MCP tool visibility bug (S1) and context budget overflow (S1) active; Windows self-update fixed |
| **PicoClaw** | 2 active | 34 merged/closed, 44 total | v0.3.0-nightly | Highest merge ratio; type-assertion safety and JSONL crash-consistency fixed; Android ADB tool added |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw's 500 PRs and 265 issues dwarf the other projects combined (NanoBot: 27 PRs, ZeroClaw: 50, PicoClaw: 44). This reflects both a larger contributor base and a broader surface area of integrated systems.

**Technical focus:** OpenClaw is grappling with large-scale infrastructure problems (gateway memory leak growing RSS from 350MB to 15.5GB, session write-lock timeouts, SQLite migration) that indicate production deployment at scale. Peers are handling smaller-scope bugs: NanoBot fixes WebUI scroll behavior; PicoClaw adds type-assertion `ok` checks; ZeroClaw addresses MCP tool visibility in TUI.

**Community surface area:** OpenClaw shows the widest range of user-reported pain points (macOS permission spam, Windows path mangling, Telegram crash loops, multiple provider integration failures), suggesting a more diverse and demanding user base. ZeroClaw has visible RFC-driven community discussion around architecture decisions (Wasm, supply-chain signing), which the other projects lack.

**Release cadence:** OpenClaw and PicoClaw both shipped artifacts today (beta and nightly respectively). NanoBot prepared a release but didn't publish; ZeroClaw had no release activity.

## 4. Shared Technical Focus Areas

**Memory and storage reliability:**
- **OpenClaw:** Gateway memory leak (#91588, P0), memory store silent relocation requiring full re-embed (#95495), SQLite migration tracking (#88838)
- **PicoClaw:** JSONL memory store crash-consistency fix (#2907), session index hot-path cloning fix (#2913)
- **ZeroClaw:** Context budget overflow on first turn (#5808, S1) — a different class of memory management issue

**Provider integration stability:**
- **OpenClaw:** DeepSeek V4 Flash incomplete turns (#88657), Anthropic thinking signature invalidity (#92201), cross-provider tool_use.id sanitization failure (#95623), NVIDIA stream cuts (#95760), Ollama remote streaming not consumed (#94251)
- **NanoBot:** Duplicate `tool_use` IDs bricking sessions (PR #4443)
- **ZeroClaw:** Native/MCP tools unavailable on OpenAI/Anthropic turns (#7756, S1), Kimi Code endpoint dead (#8154)
- **PicoClaw:** Doubao Seed tool calls leaking as raw text (#3153)

**Session/state management:**
- **OpenClaw:** Session write-lock timeouts blocking subagent lanes (#86538), session/transcript storage migration (#88838), pendingDelivery heartbeat infinite loop (#85743)
- **NanoBot:** Gateway shutdown crash in WebSocket channel stop (fixed in #4456, #4454)
- **PicoClaw:** Session index hot-path cloning recovery (#2913)

**Platform-specific bugs:**
- **ZeroClaw:** Windows self-update repair (#7853, fixed), 74 Windows test failures (#7462)
- **OpenClaw:** Windows QMD path mangling (#92302), macOS CLLocationManager permission spam (#94147)
- **PicoClaw:** No Windows/macOS issues in today's data

## 5. Differentiation Analysis

**Feature focus:**
- **OpenClaw** is building toward multi-agent orchestration infrastructure (subagent lanes, session context injection, ACP skills). Its feature requests cluster around storage alternatives (PostgreSQL), channel-level model overrides, and memory index deduplication.
- **NanoBot** is optimizing end-user experience in WebUI (fork replay preservation, scroll following, PWA support) and channel integrations (Mattermost, DingTalk). Its feature requests are more consumer-facing (Telegram rich messages, user-friendly wizard, search history tool).
- **ZeroClaw** is undergoing an architectural re-evaluation: the RFC wave proposing WebAssembly-first runtime (#8132, #8135), supply-chain signing (#8177), and plugin system overhaul (#7420) signals a long-term bet on security-hardened, Node.js-independent design. Operational features (session TTL, OpenRouter fallback, local auth provider) are secondary.
- **PicoClaw** is targeting edge/device use cases (Android ADB remote ops tool, MiMo provider models). Its feature set is lighter, focused on reliability fixes and experimental mobile tooling.

**Target user base:**
- OpenClaw and ZeroClaw appear aimed at developers and operators running multi-agent deployments at scale. NanoBot and PicoClaw seem oriented toward individual users or smaller-team deployments, with simpler configuration surfaces.

**Technical architecture:**
- ZeroClaw is the only project actively discussing replacing its core runtime (Node.js/npm → WebAssembly). OpenClaw is deepening its existing architecture (SQLite → PostgreSQL migration path). NanoBot and PicoClaw show no architectural re-architecture signals.

## 6. Community Activity Notes

**Tier 1 – High activity:** **OpenClaw** (500 PRs, 265 issues, 1 release) — dominant in raw contribution volume. The number of open severe bugs (5+ rated Platinum Hermit/Diamond Lobster) is proportionally high, indicating the project may be struggling with regression management despite high throughput.

**Tier 2 – Moderate activity:** **ZeroClaw** (50 PRs, 50 issues) and **PicoClaw** (44 PRs, 2 issues) — comparable PR volumes, but ZeroClaw's RFC-driven discussion and open S1 bugs suggest higher community deliberation per PR. PicoClaw's 34 merged PRs out of 44 indicate higher closure efficiency.

**Tier 3 – Lower activity:** **NanoBot** (27 PRs, 4 issues) — lower absolute numbers but all 12 merged PRs were fixes merged the same day, suggesting active maintainer attention. No new issues were opened by the community, contrasting with the other three projects.

**Release maturity:** No project produced a stable release today. OpenClaw's beta tag and PicoClaw's nightly build indicate the most frequent artifact publishing. NanoBot prepared but did not publish; ZeroClaw had no release activity.

## 7. Evidence-Backed Observations

**1. Memory and storage reliability is a cross-project pain point.** OpenClaw's gateway memory leak (#91588) and memory store relocation bug (#95495), PicoClaw's JSONL crash-consistency fixes (#2907, #2913), and ZeroClaw's immediate context budget overflow (#5808) all involve data integrity or resource exhaustion. Three of four projects have open or recently fixed bugs in this category.

**2. Provider integration stability remains a recurring bottleneck.** Every project has at least one open bug involving model-provider interaction: OpenClaw (7+ provider-specific bugs), NanoBot (tool_use ID deduplication), ZeroClaw (MCP tools not reaching models, Kimi endpoint dead), PicoClaw (Doubao raw text leak). This suggests the multi-provider architecture across these projects is still fragile.

**3. Windows-specific issues are disproportionately unresolved.** OpenClaw has a QMD path mangling bug (#92302), ZeroClaw fixed its Windows self-update but still has 74 test failures (#7462). Neither NanoBot nor PicoClaw report Windows issues, but the pattern across the two larger projects indicates that Windows parity is not yet achieved.

**4. WebAssembly is emerging as a directional choice for one project, not an ecosystem trend.** ZeroClaw's cluster of RFCs (#8132, #8135, #8137) proposing Wasm-first runtime for both WebUI and plugins is the only architectural pivot in today's data. No other project references Wasm or similar runtime changes. Calling this an ecosystem trend would require evidence from additional projects.

**5. User feedback is dominated by problem reporting across all projects.** No positive user statements appear in today's data for any project. Common themes: data loss (OpenClaw #95495, PicoClaw #2907), crashes (OpenClaw #91588, NanoBot gateway shutdown), configuration surprises (ZeroClaw #5808 context budget, OpenClaw #95495 silent relocation), and broken integrations (ZeroClaw #8154, OpenClaw #88657). This is consistent with a daily digest that captures active issues rather than satisfaction surveys, but the complete absence of positive or neutral feedback is worth noting.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-23

## 1. Today’s Activity Brief

In the past 24 hours, the project saw **4 issues updated** (2 open, 2 closed) and **27 pull requests updated** (15 open, 12 merged/closed). No new releases were tagged. The development cadence was high, with a clear focus on **stability fixes**: gateway shutdown, MCP connection cleanup, WebUI fork reply preservation, and streaming tool-use deduplication. A release preparation PR (`v0.2.2`) was merged, but the release has not yet been formally published. The majority of activity came from core contributors (Re-bin, michaelxer, waelantar), alongside several enhancements for channel integrations (Mattermost, DingTalk) and a PWA feature for WebUI.

## 2. Releases

*No new releases today.*
PR [#4445](https://github.com/HKUDS/nanobot/pull/4445) (`chore(release): prepare v0.2.2`) was merged, bumping the package version and updating the README news section, but a corresponding GitHub release has not yet been created.

## 3. Project Progress

The following **12 pull requests were merged/closed** today (all labeled as closed or merged in the data). Key changes:

| PR | Title | Type |
|----|-------|------|
| [#4456](https://github.com/HKUDS/nanobot/pull/4456) | fix(gateway): tolerate cancelled channel tasks during shutdown | Fix |
| [#4454](https://github.com/HKUDS/nanobot/pull/4454) | fix: stabilize gateway shutdown and webui fork replay | Fix |
| [#4455](https://github.com/HKUDS/nanobot/pull/4455) | fix(webui): preserve fork replies during history refresh | Fix |
| [#4453](https://github.com/HKUDS/nanobot/pull/4453) | fix(webui): follow active turn output after send | Fix |
| [#4451](https://github.com/HKUDS/nanobot/pull/4451) | fix(webui): stabilize sent turn layout and dev reloads | Fix |
| [#4450](https://github.com/HKUDS/nanobot/pull/4450) | fix: close MCP stdio transports from agent task | Fix |
| [#4445](https://github.com/HKUDS/nanobot/pull/4445) | chore(release): prepare v0.2.2 | Chore |
| [#4448](https://github.com/HKUDS/nanobot/pull/4448) | chore(config): default context window to 200k | Enhancement |
| [#1461](https://github.com/HKUDS/nanobot/issues/1461) | [CLOSED] Feature Enhancement: unified daemon gateway semantic layer | Issue closed (non-PR) |
| [#4376](https://github.com/HKUDS/nanobot/issues/4376) | [CLOSED] enhancement: user friendly wizard | Issue closed (non-PR) |

Other closed PRs not listed in top-20 but present in the full data set: [#4457](https://github.com/HKUDS/nanobot/pull/4457) (PWA) was *not* closed according to the summary; the list shows it as open. The total closed/merged count is 12, which includes the above and additional minor commits.

**Summary of advances:**
- **Gateway shutdown stability**: multiple fixes prevent `CancelledError` and crash on shutdown.
- **WebUI responsiveness**: fixes for fork reply loss, scroll following, and layout shifts.
- **MCP reliability**: task-ownership corrected for stdio transports; duplicate `tool_use` IDs guarded; `enabledTools` now applies to resources and prompts.
- **Default context window** increased from 65K to 200K tokens.
- **Channel integrations**: DingTalk private-chat gating and sender mention (PR [#4446](https://github.com/HKUDS/nanobot/pull/4446)) was opened, not yet merged. Mattermost support (PR [#4459](https://github.com/HKUDS/nanobot/pull/4459)) remains open.

## 4. Community Hot Topics

*Issues and Pull Requests with the most discussion (comments), or those attracting multiple related contributions.*

- **[Issue #1461 – Unified daemon gateway semantic layer](https://github.com/HKUDS/nanobot/issues/1461)** (4 comments, now closed)
  Proposed a two-layer architecture for gateway daemonization, including restart/status/logs. This long-standing issue (opened Mar 2026) was closed today, possibly after the gateway stability fixes.

- **[Issue #4413 – Telegram Bot API 10.1 rich messages](https://github.com/HKUDS/nanobot/issues/4413)** (2 comments)
  Requests markdown-to-Telegram format conversion. No corresponding PR yet.

- **[Issue #4376 – User friendly wizard](https://github.com/HKUDS/nanobot/issues/4376)** (1 comment, 1 👍, now closed)
  Sought a simplified onboarding wizard for non-technical users. Likely addressed by merged work; no explicit PR linked.

- **PR cluster by @Re-bin**: 6 merged PRs in a single day (gateway, WebUI, MCP fixes) reflect a concentrated bug-fixing sprint. While comment counts are not listed, the volume signals intense maintainer activity around stability.

- **PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) – Mattermost channel support** received no comments but is a sizeable new integration (WebSocket + REST, streaming responses); likely to attract community interest once merged.

## 5. Bugs & Stability

*Ranked by severity based on impact and available fix PRs.*

**Critical (crashes during shutdown or session bricking):**
1. **Gateway shutdown crash** – `CancelledError` in `WebSocketChannel.stop()` and `RuntimeError` in `_close_server`. Fixed by PRs [#4456](https://github.com/HKUDS/nanobot/pull/4456) and [#4454](https://github.com/HKUDS/nanobot/pull/4454) (both merged).
2. **Duplicate `tool_use` IDs bricking sessions** – Streaming responses could persist duplicate IDs, causing HTTP 400 on subsequent turns. Fixed by PR [#4443](https://github.com/HKUDS/nanobot/pull/4443) (still open as of data snapshot).
3. **MCP reconnect crash** – Task cancellation scope error during reconnection. Fixed by PR [#4441](https://github.com/HKUDS/nanobot/pull/4441) (still open).

**High (incorrect behavior, data loss):**
4. **WebUI fork reply disappearance** – History refresh after fork could erase live assistant replies. Fixed by PR [#4455](https://github.com/HKUDS/nanobot/pull/4455) (merged).
5. **Pairing store type coercion** – Non-string sender IDs could be silently denied. Fixed by PR [#4433](https://github.com/HKUDS/nanobot/pull/4433) (still open).
6. **MCP `enabledTools` leak** – Resources/prompts registered even when tools were denied. Fixed by PRs [#4436](https://github.com/HKUDS/nanobot/pull/4436) and [#4452](https://github.com/HKUDS/nanobot/pull/4452) (both open).

**Medium (usability regressions):**
7. **WebUI scroll jump after send** – Fixed in PR [#4453](https://github.com/HKUDS/nanobot/pull/4453) (merged).
8. **Sent turn layout misalignment** – Fixed in PR [#4451](https://github.com/HKUDS/nanobot/pull/4451) (merged).

## 6. Feature Request Clusters

*Today’s data shows several user requests and corresponding PRs (open or merged). No strong clustering beyond individual items.*

- **Mattermost Integration** – Requested indirectly or directly; PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) adds full Mattermost channel support (WebSocket + REST, streaming).
- **Telegram Rich Messages** – Issue [#4413](https://github.com/HKUDS/nanobot/issues/4413) asks for markdown-to-Telegram conversion; no PR yet.
- **PWA Support for WebUI** – Issue [#4457](https://github.com/HKUDS/nanobot/issues/4457) and PR [#4458](https://github.com/HKUDS/nanobot/pull/4458) propose manifest and service worker. PR is open.
- **User-Friendly Wizard** – Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376) (closed) had a related PR? Not directly linked, but the problem statement matches the enhancement closed without a code change today.
- **Subagent Model Presets** – PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) (open since June 11) allows subagents to use different model presets. Still under review.
- **DingTalk Configibility** – PR [#4446](https://github.com/HKUDS/nanobot/pull/4446) adds `disable_private_chat` and sender mention for group replies.
- **Search History Tool** – PR [#4439](https://github.com/HKUDS/nanobot/pull/4439) adds a read-only `search_history` memory tool.

## 7. User Feedback Summary

*Direct user pain points and satisfaction signals extracted from issues and PR descriptions.*

- **Pain point: Complex onboarding** – Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376) explicitly states that `nanobot onboard --wizard` “assumes you know many technical details”, which is not user-friendly for non-technical users. The issue received 1 👍 and has been closed, suggesting a solution may have been identified or is being worked on elsewhere.
- **Pain point: Telegram formatting** – Issue [#4413](https://github.com/HKUDS/nanobot/issues/4413) points out that new Telegram rich messages are not supported; the user proposes a conversion function.
- **Pain point: Session bricking** – PR [#4443](https://github.com/HKUDS/nanobot/pull/4443) describes how duplicate `tool_use` IDs “permanently brick[ing] the session”, a severe problem that would frustrate users.
- **Pain point: Shutdown instability** – Multiple PRs (e.g., [#4454](https://github.com/HKUDS/nanobot/pull/4454)) mention gateway crashes during shutdown, which would negatively affect production deployments.
- **Satisfaction signals** – Rapid merging of bug fixes (especially by @Re-bin) indicates maintainer responsiveness. The number of PRs (27) suggests active community contribution, though many are from a small group of regular contributors.

## 8. Backlog Watch

*Important open issues and PRs that appear inactive or need maintainer review. No extremely old items were flagged in today’s data, but a few items with age or low activity are noted.*

- **[Issue #4413 – Telegram Bot API 10.1 rich messages](https://github.com/HKUDS/nanobot/issues/4413)** (opened Jun 19, 2 comments) – No PR or assignee; may be waiting for community contribution or maintainer prioritization.
- **[PR #4291 – Subagent model presets](https://github.com/HKUDS/nanobot/pull/4291)** (opened Jun 11, 0 comments) – A relatively old PR with no reviewer interaction. Could benefit from testing or feedback.
- **[PR #4397 – User-attention hint before mid-turn messages](https://github.com/HKUDS/nanobot/pull/4397)** (opened Jun 18, 0 comments) – A Chinese-described fix for LLM tool-chain interruption; no English summary or reviewer comments – may face language barrier.
- **[Issue #4440](https://github.com/HKUDS/nanobot/issues/4440)** (referenced by PR [#4439](https://github.com/HKUDS/nanobot/pull/4439) as the issue it closes) – Not in today’s issue list, but the PR author claims it closes that issue; if the issue was not updated recently, it may need a close check.

No pull requests or issues were labelled as stale or unanswered for more than a week, aside from [#4291](https://github.com/HKUDS/nanobot/pull/4291) (12 days).

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-23

## 1. Today's Activity Brief

In the last 24 hours, 42 of 50 updated issues remain open, with 8 closed; of 50 updated pull requests, 48 are open and 2 have been merged or closed. No new releases were published. The most active discussions revolve around MCP tool visibility in the TUI, context budget overflows, and a cluster of RFCs proposing a wholesale shift to WebAssembly-first runtimes and supply-chain signing. A large integration branch (`#8200`) was created for QA testing but explicitly marked as “DO NOT MERGE”.

## 2. Releases

None in the last 24 hours. The latest official release remains v0.8.1 (Debian container image mentioned in issue #8013).

## 3. Project Progress

Two pull requests were closed/merged today:

- **#7853** (merged) – Windows self‑update repair and update pipeline hardening. The previous `remove‑then‑copy` approach was fundamentally broken on Windows because a running binary cannot be deleted. The fix uses `MoveFileEx` with `MOVEFILE_DELAY_UNTIL_REBOOT` and a handoff strategy.
  *Author: @NiuBlibing*
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/7853

- **#7999** (merged) – ZeroCode now displays the active config directory in the Config pane header, helping users who run with `--config-dir` or `$ZEROCLAW_CONFIG_DIR`.
  *Author: @MaHaoHao-ch*
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/7999

Additionally, several high‑priority issues were closed (some via PRs in earlier days): #7420 (closed, plugin system RFC), #7674 (closed, Wasm‑first RFC), #8013 (closed, Discord channel disable bug), #7688 (closed, hook panic/cancellation tests), #6371 (closed, WhatsApp group allowlist), #6037 (closed, cron job concurrency bug).

## 4. Community Hot Topics

The following issues and PRs attracted the most discussion (by comment count or engagement):

- **#7420** (6 comments, CLOSED) – RFC: Native Dynamic‑Library Plugin System. Proposed replacing Extism with direct `libloading`/`dlopen` for Rust plugins, sparking debate on sandboxing vs. performance.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/7420

- **#7674** (5 comments, CLOSED) – RFC: WebAssembly‑first, eliminate Node.js from build and runtime. A comprehensive proposal to remove npm from both the web UI build and plugin runtime, driving multiple spinoff RFCs (#8132, #8135).
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/7674

- **#5808** (4 comments, OPEN) – Default 32k context budget is exceeded by system prompt + tool definitions on iteration 1, causing perpetual pre‑emptive trim. This S1 bug has been open since April and is still accepted/in‑progress.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/5808

- **#8193** (3 comments, OPEN) – MCP tools discovered by the gateway are missing from ZeroCode TUI sessions. Two users reported this S1 workflow blocker in discussion #8045. A fix PR (#8199) was opened today.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8193

- **#8177** (3 comments, OPEN) – RFC: Supply‑chain signing with hardware PGP, hermetic builds, and SLSA provenance. Part of the StageX security hardening track (#7675).
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8177

- **#8132** (2 comments, 1 👍, OPEN) – RFC: Replace React/Vite web UI build with Rust→Wasm framework (Dioxus, Leptos, or Yew). This spinoff from #7674 gained an upvote.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8132

## 5. Bugs & Stability

Several bugs with severity S1 (workflow blocked) were active in the last 24 hours:

- **#8193** (S1, OPEN) – MCP tools not received by ZeroCode TUI while gateway sees them. A fix PR #8199 was opened today.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8193

- **#7756** (S1, OPEN) – Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns. Tools register but the model never receives them.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/7756

- **#8154** (S1, OPEN) – Kimi Code (Moonshot) endpoint returns HTTP 404; the configured URL `https://api.moonshot.cn/coder/v1` is dead; the working URL is `https://api.kimi.com/coding/v1`.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8154

- **#5808** (S1, OPEN) – Context budget exceeded immediately on iteration 1 (see Hot Topics).
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/5808

- **#7462** (S2, OPEN) – 74 test failures on Windows 11 due to Unix‑only test commands, path semantics, and console encoding. CI only runs on Linux.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/7462

- **#6360** (S2, OPEN) – Prompt caching does not work with Telegram channel; full re‑processing forced every time.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/6360

**Fix PRs in flight today:**

- **#8023** – Fix: stop leaking MCP stdio child processes per heartbeat tick.
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/8023

- **#8128** – Add SSRF guard to `zc_http_request` host function in plugin runtime (prevents loopback/private‑network requests).
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/8128

- **#8009** – Wire HMAC tool receipts through all agent turn paths (ACP, gateway WS, CLI).
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/8009

- **#8196** – Refactor history pruning/compression into a single whole‑turn function with a visible RPC event; addresses silent context dropping.
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/8196

## 6. Feature Request Clusters

A large wave of RFCs and feature requests today coalesces around three themes:

**WebAssembly‑first migration**
- #8132: Replace React/Vite with Rust→Wasm web framework (Dioxus/Leptos/Yew).
- #8135: Make Wasm the default plugin runtime; signed, capability‑declaring modules.
- #8137: Scope plugin config per‑alias and remove raw environment variable access.
- #8128: SSRF guard for plugin HTTP host function (PR, already linked).
- Previous: #7674 (closed) was the umbrella RFC.

**Supply‑chain and CI hardening**
- #8177: Hardware PGP signing, hermetic builds, SLSA provenance.
- #8078: ZeroCode local pre‑submission gate that enforces contributor bar before code leaves machine.
- #8059, #8057, #8056: CI policy cleanup – audit, scheduled jobs, required PR gates.
- #8197: New CI job to run docs link gate in PR checks.

**Channel and authentication improvements**
- #8076: Local username/password `AuthProvider` for IdP‑less browser login.
- #8046: Optional Telegram webhook mode as alternative to long polling.
- #8134: Implementation of `session_ttl_hours` to auto‑truncate stale session history.
- #8138: OpenRouter model fallbacks array in provider config.
- #8125: Automatically set risk profile to `yolo` in quickstart to improve onboarding experience.

## 7. User Feedback Summary

Real user pain points surfaced in today’s data:

- **MCP tool visibility**: Two users in #8045 reported that MCP tools successfully connect and register at the gateway level but never appear in the ZeroCode TUI, blocking their workflow. (#8193)
- **Context budget surprise**: Users hitting the default 32k limit on the very first turn, forcing premature trimming and degraded responses. (#5808)
- **Agent disable not stopping Discord**: A user reported that setting `enabled = false` did not prevent the Discord channel from staying online and answering messages – S0 severity. (#8013, now closed with a fix.)
- **Telegram prompt caching broken**: CLI works fine, but Telegram always forces full re‑processing, wasting cost. (#6360)
- **Kimi Code endpoint dead**: Users on Moonshot’s Kimi model hit a 404 because the documented endpoint changed. (#8154)
- **Quickstart risk profile too restrictive**: Users unintentionally limit themselves during onboarding; request to mirror the forced‑unbounded runtime pattern. (#8125)
- **No way to scope WhatsApp bot to specific groups**: Operators want `allowed_groups` to prevent the bot from replying in unintended chats. (Closed #6371, feature now added.)
- **Windows update broken**: The self‑update command failed on Windows every time due to file locking. (#7853, now fixed.)
- **OpenRouter model fallback not supported**: Users cannot leverage OpenRouter’s multi‑model failover. (#8138)

Overall, users express frustration with configuration surprises (context budget, risk presets) and missing features that cause either workflow blocks or cost inefficiency.

## 8. Backlog Watch

Several open issues or PRs have been waiting for maintainer review or remain unresolved for extended periods:

- **#5808** (OPEN since April 16) – S1 context budget bug, accepted and in‑progress but no fix PR yet.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/5808

- **#7462** (OPEN since June 10) – 74 Windows test failures. Tagged `priority:p1` but no apparent progress.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/7462

- **#7756** (OPEN since June 16) – MCP tools unavailable on OpenAI/Anthropic turns. No fix PR yet.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/7756

- **#8177** (OPEN, needs‑maintainer‑review) – Supply‑chain signing RFC. No maintainer response yet.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8177

- **#8132** (OPEN, needs‑maintainer‑review) – Replace React/Vite with Rust→Wasm framework. No maintainer response.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8132

- **#8135** (OPEN, needs‑maintainer‑review) – Wasm‑first plugin runtime RFC. No maintainer response.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8135

- **#8043** (OPEN, needs‑maintainer‑review) – Retire standalone `aardvark-sys` crate.
  URL: https://github.com/zeroclaw-labs/zeroclaw/issues/8043

- **#7361** (OPEN since June 7) – Large PR implementing per‑turn output routing (`send_via`) and voice delivery fixes. Has not been merged.
  URL: https://github.com/zeroclaw-labs/zeroclaw/pull/7361

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-23

## 1. Today's Activity Brief
In the past 24 hours, 44 pull requests were updated (10 open, 34 merged/closed) and 2 issues were active. A new nightly build (v0.3.0-nightly.20260622.287853ab) was released, though it is marked as potentially unstable. Notable merges include fixes for type-assertion panics in `pkg/evolution` and `pkg/providers/openai_compat`, a JSONL memory store crash-consistency fix, a bus backpressure handling improvement, and support for MiMo provider common models. Two new feature PRs landed: an experimental Android ADB remote operations tool and a `spawn` command enhancement (`direct_reply` parameter). A bug report about Volcengine Doubao tool calls leaking as raw text was filed and immediately addressed by a fix PR.

## 2. Releases
- **Nightly Build**: `v0.3.0-nightly.20260622.287853ab` (automated, may be unstable)
  Full changelog: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

## 3. Project Progress
The following significant PRs were merged or closed today:
- **Type-assertion safety fixes** (merged):
  - [#3053](https://github.com/sipeed/picoclaw/pull/3053) – `lockStoreFile` type assertion in `pkg/evolution/store.go` (with `ok` check)
  - [#3091](https://github.com/sipeed/picoclaw/pull/3091) – `native_search` type assertion in `pkg/providers/openai_compat/provider.go`
- **JSONL memory store reliability** (merged):
  - [#2907](https://github.com/sipeed/picoclaw/pull/2907) – Fix metadata drift after crash
  - [#2913](https://github.com/sipeed/picoclaw/pull/2913) – Fix hot-path cloning and TTL refresh in session index
- **Bus backpressure** (merged): [#2906](https://github.com/sipeed/picoclaw/pull/2906) – Bounded waiting and per-stream drop statistics
- **MiMo provider models** (merged): [#2915](https://github.com/sipeed/picoclaw/pull/2915) – Add `mimo-v2.5` and `mimo-v2.5-pro` to CommonModels
- **Feature PRs** (merged):
  - [#3152](https://github.com/sipeed/picoclaw/pull/3152) – Add installation instructions to `picoclaw skills search`
  - [#3155](https://github.com/sipeed/picoclaw/pull/3155) – Add `direct_reply` parameter with `SkipInboundTurn` support for spawn async callbacks
  - [#3157](https://github.com/sipeed/picoclaw/pull/3157) – New experimental Android ADB remote operations tool (disabled by default)
- **Dependency bumps** (merged): [#3101](https://github.com/sipeed/picoclaw/pull/3101) (vite 8.0.13→8.0.16), [#3105](https://github.com/sipeed/picoclaw/pull/3105) (eslint 10.2.1→10.4.1), and several others.

## 4. Community Hot Topics
- **Feature request [#3093](https://github.com/sipeed/picoclaw/pull/3093)**: A user (@Damian-o2) asks for gateway support for SimpleX, Wire, or Tox. The issue has 3 comments and 1 👍, indicating moderate interest. No maintainer response yet.
- **Bug report [#3153](https://github.com/sipeed/picoclaw/pull/3153)**: Reports that Volcengine Doubao Seed tool calls are occasionally returned as raw `<seed:tool_call>` text. A fix PR ([#3154](https://github.com/sipeed/picoclaw/pull/3154)) was opened the same day, suggesting quick action. The issue has 0 comments but is directly linked to a PR.

## 5. Bugs & Stability
- **#3153** (open, medium severity): Doubao Seed tool call leak. The fix PR [#3154](https://github.com/sipeed/picoclaw/pull/3154) is already open and implements recovery logic.
- **Open type-assertion fixes** (stale, low severity):
  - [#3131](https://github.com/sipeed/picoclaw/pull/3131) – Add `ok` checks in `pkg/tools/registry.go`
  - [#3128](https://github.com/sipeed/picoclaw/pull/3128) – Ignore `resp.Body.Close()` errors in web search providers
- **Previously merged stability fixes** (no longer open): The type-assertion panics in `lockStoreFile` and `native_search` were fixed today. The JSONL store crash-consistency and session index hot-path cloning issues were resolved earlier (merged today).

## 6. Feature Request Clusters
- **Communication protocol gateways**: Issue [#3093](https://github.com/sipeed/picoclaw/pull/3093) requests SimpleX, Wire, or Tox gateways. No corresponding PR exists yet.
- **Android device interaction**: PR [#3157](https://github.com/sipeed/picoclaw/pull/3157) adds an experimental ADB-based Android remote operations tool. This aligns with a desire for mobile device control.
- **Remote agent mode**: PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) (stale, open) adds `--remote` flag to `picoclaw agent` for WebSocket-based remote operation.
- **Token usage transparency**: PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) (open) emits per-turn LLM token usage on finalized messages over the Pico channel.
- **Spawn callback improvements**: PR [#3155](https://github.com/sipeed/picoclaw/pull/3155) (merged) solves duplicate messages by introducing a `direct_reply` parameter, responding to issue #3094 (not visible in today's data).

## 7. User Feedback Summary
- A user (@ms8great) in [#3153](https://github.com/sipeed/picoclaw/pull/3153) reported a frustrating bug where tool calls are leaked as raw XML text, breaking the expected agent pipeline. The quick appearance of a fix PR suggests the team takes such issues seriously.
- In [#3093](https://github.com/sipeed/picoclaw/pull/3093), a user expressed a strong need for additional communication protocol gateways (SimpleX, Wire, Tox), likely for privacy or censorship resistance. The lack of maintainer response may indicate this is not currently prioritized.

## 8. Backlog Watch
- **Issues**:
  - [#3093](https://github.com/sipeed/picoclaw/pull/3093) (Feature: SimpleX/tox gateways) – open since June 10, 3 comments, no maintainer reply.
- **Pull Requests** (stale, open >10 days):
  - [#3118](https://github.com/sipeed/picoclaw/pull/3118) (Remote agent WebSocket mode) – last updated June 12.
  - [#3128](https://github.com/sipeed/picoclaw/pull/3128) (Web search body Close error ignore) – last updated June 15.
  - [#3131](https://github.com/sipeed/picoclaw/pull/3131) (Registry type assertion checks) – last updated June 15.
  - [#3104](https://github.com/sipeed/picoclaw/pull/3104) (Dependency bump shadcn) – last updated June 11.
  - [#3100](https://github.com/sipeed/picoclaw/pull/3100) (Dependency bump @vitejs/plugin-react) – last updated June 11.
  - [#3103](https://github.com/sipeed/picoclaw/pull/3103) (Dependency bump typescript-eslint) – last updated June 11.

</details>