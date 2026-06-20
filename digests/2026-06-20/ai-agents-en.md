# OpenClaw Ecosystem Digest 2026-06-20

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-20 00:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

## OpenClaw Project Digest — 2026-06-20

### 1. Today's Activity Brief
Activity remains high: **500 issues** and **500 pull requests** were updated in the last 24 hours, with **58** issues closed and **43** PRs merged/closed. A new beta release **v2026.6.9-beta.1** shipped with richer Telegram delivery, including HTML formatting, markdown preservation, and better progress rendering. The most active threads continue to center on session-state migration, memory leak in the gateway, and cron/compaction reliability regressions.

### 2. Releases
- **v2026.6.9-beta.1** — [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9-beta.1)
  - **Highlights:** Telegram now sends rich HTML, preserves markdown and sticker paths, renders progress drafts and command output more faithfully, and fixes mention/spooled handler routing. Covers issues #93286, #93164, #93124, #93364, #9313.
  - No breaking changes or migration notes explicitly called out.

### 3. Project Progress
**43 PRs were merged or closed today** (exact list not provided). Notable open PRs with recent activity that likely progressed toward merge include:
- **#91800** — [fix(tools): propagate external content provenance to policy hooks](https://github.com/openclaw/openclaw/pull/91800) (size L, P2)
- **#93883** — [refactor(feishu): remove card note footer](https://github.com/openclaw/openclaw/pull/93883) (size XL, P2)
- **#95137** — [test(docker): stabilize build signal probe](https://github.com/openclaw/openclaw/pull/95137) (merged, XS, P2)
- **#95140** — [fix: auto-populate lossless-claw llm policy from summaryModel](https://github.com/openclaw/openclaw/pull/95140) (size M, gateway)

### 4. Community Hot Topics
The following issues and PRs generated the most discussion and reactions:

- **#88838** (31 comments) — [Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838)
  Underlying need: avoid a single large, high-risk rewrite by using branch-by-abstraction for the runtime-state migration to SQLite. The community is closely watching how this refactor rolls out.

- **#85333** (13 comments, 👍1) — [openclaw doctor --fix 4-5x slower on 2026.5.20 vs 2026.5.19](https://github.com/openclaw/openclaw/issues/85333)
  Performance regression with path traversal bottleneck. Users need predictable CLI tooling performance in production.

- **#91588** (12 comments, P0) — [Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days](https://github.com/openclaw/openclaw/issues/91588)
  Critical stability concern: repeated OOM kills cause `launchd-handoff` restart cycles. No fix PR linked yet.

- **#91363** (6 comments, 👍4) — [Isolated cron consistently fails with "LLM request failed"](https://github.com/openclaw/openclaw/issues/91363)
  Multiple users report isolated cron jobs hang or time out; the thread has the highest reaction count today.

- **#93794** (5 comments, 👍8) — [Messages on v2026.6.8 no longer supported on Telegram Web](https://github.com/openclaw/openclaw/issues/93794) (closed)
  Rapidly resolved regression, but attracted many upvotes, indicating high sensitivity to Telegram delivery regressions.

### 5. Bugs & Stability
**Critical (P0):**
- **#91588** — [Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588) — RSS grows from ~350MB to 15.5GB; OOM kills. No fix PR yet.
- **#90378** — [Cron store silently migrated from JSON to SQLite; new jobs default to delivery.mode=announce causing channel errors](https://github.com/openclaw/openclaw/issues/90378) — P0 with data-loss potential. Linked PR open.

**High (P1):**
- **#92043** — [180s compaction timeout is a single wall clock with no partial-progress reuse](https://github.com/openclaw/openclaw/issues/92043) — Legitimate long compactions fail identically every turn.
- **#91009** — [Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes](https://github.com/openclaw/openclaw/issues/91009) — Stalls gateway RPC.
- **#92460** — [Isolated cron completion announcer drops explicit delivery.channel](https://github.com/openclaw/openclaw/issues/92460) — Requires live repro.
- **#93905** — [/usage no longer works in Telegram](https://github.com/openclaw/openclaw/issues/93905) — Regression on 2026.6.8, usage footer missing.
- **#91212** — [Delivery-recovery starts before channel transport is ready after restart](https://github.com/openclaw/openclaw/issues/91212) — Messages silently lost.

**Fix PRs exist for some bugs:**
- **#95129** (open) — [fix(cron): persist failure alert delivery status](https://github.com/openclaw/openclaw/pull/95129) — addresses cron failure alert reliability.
- **#95007** (open) — [fix(telegram): render progress draft rows as plain readable text](https://github.com/openclaw/openclaw/pull/95007) — fixes #95002.
- **#95130** (open) — [fix: prevent Claude ACP sessions from failing on primitive adapter frames](https://github.com/openclaw/openclaw/pull/95130) — closes #90404.
- **#94256** (open) — [fix(redact): stop over-masking kebab identifiers as Apple app-specific passwords](https://github.com/openclaw/openclaw/pull/94256).

### 6. Feature Request Clusters
- **Per-agent memory isolation:**
  - **#63829** (10 comments, 👍9) — [Per-agent memory-wiki vault configuration](https://github.com/openclaw/openclaw/issues/63829) — Strong community demand for multi-agent memory isolation. No direct PR.
  - **#91259** (4 comments) — [Drop redundant agent-id scoping from collection names](https://github.com/openclaw/openclaw/issues/91259) — related cleanup.

- **Per-channel / per-DM model overrides:**
  - **#53638** (6 comments, 👍2) — [Per-channel / per-group / per-DM model override in config](https://github.com/openclaw/openclaw/issues/53638).
  - **#95120** (open) — [Add directUserId support for per-DM model override](https://github.com/openclaw/openclaw/pull/95120) — directly implements the request.

- **Topic-session families:**
  - **#90916** (7 comments) — [Topic-session families for one assistant across multiple named context lanes](https://github.com/openclaw/openclaw/issues/90916) — P2, needs product decision.

- **External reranker support:**
  - **#92725** (open, size XL) — [External reranker for memory-core](https://github.com/openclaw/openclaw/pull/92725) — adds user-configurable external reranker support beyond built-in MMR and QMD.

### 7. User Feedback Summary
- **Performance regressions are a recurring pain point:** Multiple users report `doctor --fix` slowdowns (4-5x), compaction timeouts, and gateway OOM under load.
- **Cron reliability is frustrating:** Several related issues (#91363, #92460, #92369, #90595) describe cron jobs failing silently, alerts firing spuriously, and subagent orchestration breaking in isolated sessions. The community needs a robust cron pipeline.
- **Channel-specific delivery regressions annoy users:** Telegram Web support broke (#93794), Matrix crashed (#90325), and Feishu/Codex delivery recovery fails after restart (#91212). Each had high reaction counts.
- **Memory/compaction behavior still fragile:** Users report the `active-memory` plugin breaks prompt caching (#91223), the circuit breaker is too aggressive (#90082), and sessions hit context limits with no recovery (#90639).
- **Documentation and validation friction:** Kubernetes deployment docs are considered awkward (#91455), and `config validate` rejects plugin-owned channel extensions (#92884).

### 8. Backlog Watch
The following open issues have been awaiting maintainer attention for weeks or months, with no recent fix PR:

- **#63829** (Created 2026-04-09) — [Per-agent memory-wiki vault configuration](https://github.com/openclaw/openclaw/issues/63829) — P1, needs product decision and security review; 9 👍.
- **#53638** (Created 2026-03-24) — [Per-channel / per-group / per-DM model override](https://github.com/openclaw/openclaw/issues/53638) — P2, linked PR open but not merged.
- **#46656** (Created 2026-03-14) — [Webchat / Control UI inline button support](https://github.com/openclaw/openclaw/issues/46656) — P2, needs product decision and security review; 1 👍.
- **#78640** (Created 2026-05-06) — [EPERM on Windows persists after retry logic](https://github.com/openclaw/openclaw/issues/78640) — P1, memory index atomic reindex fails on Windows 11; 2 👍.
- **#39245** (Created 2026-03-07) — [fix(agents): normalize mangled tool names and IDs from OpenAI-compatible providers](https://github.com/openclaw/openclaw/pull/39245) — Open PR awaiting real-behavior-proof for months.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-20

## 1. Daily Cross-Project Overview

Across the four tracked projects, today’s activity ranged from low (PicoClaw) to very high (OpenClaw). OpenClaw processed 500 issues and 500 PRs, released a new beta with richer Telegram formatting, and contended with critical P0 bugs including a gateway memory leak. NanoBot and ZeroClaw saw moderate activity with focus on cron/notification reliability, subagent overrides, and multi-agent stabilization; ZeroClaw shipped a patch release v0.8.1 with 207 commits. PicoClaw merged a single configuration bug fix and remains at low activity with several stale PRs. Common themes across projects include cron reliability, memory/state management challenges, and community demand for per-model or per-channel configuration.

## 2. Activity Comparison

| Project    | Issues Updated (24h) | PRs Updated (24h) | Release Status              | Activity Note |
|------------|----------------------|-------------------|-----------------------------|---------------|
| OpenClaw   | 500                  | 500               | v2026.6.9-beta.1            | High activity: major beta release, 58 issues closed, 43 PRs merged. |
| NanoBot    | 9                    | 33                | None                        | Moderate activity: 19 PRs merged, focus on cron and subagent features. |
| ZeroClaw   | 50                   | 50                | v0.8.1 released             | Moderate activity: patch release with 207 commits, 3 PRs merged. |
| PicoClaw   | 4                    | 7                 | Nightly build v0.3.0-nightly | Low activity: 1 PR merged, 6 open PRs with no recent maintainer review. |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated dwarf all peers (NanoBot: 9/33, ZeroClaw: 50/50, PicoClaw: 4/7). It also closed 58 issues and merged 43 PRs, versus single-digit merges elsewhere.
- **Technical focus**: OpenClaw’s digest highlights deep infrastructure work: SQLite migration for session state, gateway memory leak (RSS 350MB→15.5GB), compaction regressions, and Telegram delivery improvements. In contrast, NanoBot focuses on MCP transport timeouts, Discord rewrite, and subagent orchestration; ZeroClaw on multi-agent runtime stabilization, Discord components, and OIDC auth; PicoClaw on Windows path bugs and SSRF fixes.
- **Community surface area**: OpenClaw’s hot topics include 31 comments on a migration issue (#88838) and 13+ comments on several P0/P1 bugs. NanoBot’s most discussed issue had 5 comments, ZeroClaw’s 6, PicoClaw’s 6. This indicates significantly larger community engagement on OpenClaw.

## 4. Shared Technical Focus Areas

The following requirements appear in multiple projects today (evidence from each digest):

- **Cron / job reliability**:
  - OpenClaw: #91363 (isolated cron fails), #90378 (cron store migration breaking defaults)
  - NanoBot: #4410 (unwanted heartbeat messages after cron refactor), #4013 (stream stalls)
  - ZeroClaw: #6037 (cron job duplication while still running)
  - PicoClaw: no cron-related items

- **Channel delivery & formatting**:
  - OpenClaw: released HTML formatting for Telegram (#93286 etc.), regression on Telegram Web (#93794)
  - NanoBot: requested Telegram Bot API 10.1 rich messages (#4413)
  - ZeroClaw: prebuilt binaries missing Slack/Discord channels (#7787)
  - PicoClaw: requested Telegram permission control by chat type (#3114)

- **Memory / state management**:
  - OpenClaw: gateway memory leak (#91588), compaction timeout (#92043), context budget issues
  - NanoBot: workspace asymmetry causing agent update loss (#4374), empty responses not falling back (#4287)
  - ZeroClaw: memory emphasis overrides current prompt (#5844), 32k context budget exceeded (#5808)
  - PicoClaw: “memory loss” report (#3150)

- **Per-model / per-channel configuration overrides**:
  - OpenClaw: per-channel model override (#53638) with related PR #95120
  - NanoBot: per-run model presets for cron (#4378, PR #4416), subagent model override (#4415), per-model context window (#4389)
  - ZeroClaw: runtime model switching (mentioned in v0.8.1 fixes)
  - PicoClaw: none today

- **Multi-agent capabilities**:
  - OpenClaw: per-agent memory wiki vault (#63829)
  - NanoBot: subagent aggregated result mode (#4414), subagent model override (#4415)
  - ZeroClaw: multi-agent runtime stabilization in v0.8.1
  - PicoClaw: Agent Collaboration Bus PR (#2937, open since May)

## 5. Differentiation Analysis

Based on today’s data, key differences in focus, target users, and architecture:

- **OpenClaw** – Largest community and deepest infrastructure changes. Appears to be the core reference project with a broad user base; engineering efforts center on robust delivery (Telegram HTML, cron reliability) and major migration (SQLite refactor). Likely targets production deployments requiring high stability.
- **NanoBot** – Smaller but actively innovating on extensibility: MCP transport, cron model overrides, subagent modes, and a fresh Discord rewrite. Community requests are for more control (formatting, heartbeat configuration, workspace handling). Target users appear to be developers integrating custom agents and channels.
- **ZeroClaw** – Released v0.8.1 with heavy emphasis on stabilizing its multi-agent runtime and channel stack (Discord components, Slack/Discord availability). Forward-looking items like OIDC auth and MCP dashboard suggest enterprise-grade ambitions. Target users building multi-agent systems with channel integration.
- **PicoClaw** – Lowest activity; appears to be a lightweight or embedded variant. Issues are small but specific (Windows path bug, SSRF fix, memory loss). Long-standing feature requests (attachment support #348) and the Agent Collaboration PR indicate a desire to grow, but maintainer capacity appears limited.

Technical architecture differences (inferred from library references): OpenClaw uses Go (gateway, hooks); NanoBot uses Python (Pydantic, HTTPX, discord.py); ZeroClaw uses Rust (rumqttc, rustls-webpki); PicoClaw likely Go (fs.FS, type assertions). This influences tooling and community.

## 6. Community Activity Notes

**High activity tier** – OpenClaw: 500 issues, 500 PRs, beta release, 58 issues closed, 43 PRs merged. Multiple hot issues with 10+ comments each, critical P0 bugs under discussion.

**Moderate activity tier** – NanoBot: 9 issues, 33 PRs, 19 PRs merged, no release. ZeroClaw: 50 issues, 50 PRs, patch release v0.8.1, 3 PRs merged. Both have a handful of hot issues with 5-6 comments.

**Low activity tier** – PicoClaw: 4 issues, 7 PRs, 1 PR merged, nightly release. Open PRs have no maintainer review for 11–13 days. Most discussed issue has 6 comments.

(No maturity scoring is applied; tiering is based solely on today’s counts and release activity.)

## 7. Evidence-Backed Observations

1. **Cron reliability is a cross-project pain point**: Three of four projects (OpenClaw, NanoBot, ZeroClaw) have open issues or recent updates specifically about cron job failures, duplicate execution, or unwanted notifications. This indicates a shared challenge in scheduling agent tasks reliably.

2. **Telegram is a priority channel**: All four projects show Telegram-related items today: OpenClaw improved formatting, NanoBot requested rich messages, PicoClaw requested permission controls, and ZeroClaw’s Telegram fixes (e.g., voice peer caching #7982) were part of its patch. Telegram likely represents a large user base.

3. **Memory and state management remains fragile across the ecosystem**: Each project has distinct but related memory/state issues: OpenClaw’s gateway leak and compaction timeout, NanoBot’s workspace asymmetry, ZeroClaw’s memory emphasis and context budget exceedances, PicoClaw’s memory loss report. None have a complete fix evident today.

4. **Multi-agent features are actively developed in all projects**: OpenClaw (per-agent memory isolation), NanoBot (subagent overrides and aggregated results), ZeroClaw (multi-agent runtime stabilization), PicoClaw (agent collaboration bus PR). This suggests a common trajectory toward supporting multiple collaborating agent instances.

5. **User feedback shows regression pain after recent upgrades**: OpenClaw (doctor --fix 4-5x slower on 2026.5.20), NanoBot (stream timeout after upgrade to 0.2.0, unwanted heartbeat after recent refactor), ZeroClaw (prebuilt binaries missing Slack/Discord after v0.8.0). Users across projects are sensitive to breaking changes and expect stable releases.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-20

## 1. Today's Activity Brief
In the last 24 hours, 9 issues were updated (3 still open, 6 closed) and 33 pull requests were updated (14 open, 19 merged/closed). No new releases were published. Active work focused on the cron system, subagent model overrides, MCP transport timeouts, and a new `SuspendTurn` mechanism for async/human-in-the-loop flows. The community also raised concerns about unwanted heartbeat messages after a recent refactor and requested richer Telegram message formatting.

## 2. Releases
*None.*

## 3. Project Progress
Major merged/closed PRs in the last 24 hours include:

- **#4138** – Adds `tools.file.enable` toggle for built-in filesystem tools, matching the pattern used by `exec` and `web` tool groups. ([PR #4138](https://github.com/HKUDS/nanobot/pull/4138))
- **#4230** – Sets an explicit HTTPX timeout for `streamableHttp` MCP transport, preventing indefinite hangs during startup. ([PR #4230](https://github.com/HKUDS/nanobot/pull/4230))
- **#4246** – `delete_session` now also removes legacy session files from `~/.nanobot/sessions/` to prevent history revival after deletion. ([PR #4246](https://github.com/HKUDS/nanobot/pull/4246))
- **#4342** – Fixes Feishu channel to correctly read card content delivered via WebSocket, resolving a placeholder-rendering bug. ([PR #4342](https://github.com/HKUDS/nanobot/pull/4342))
- **#4394** – Routes OpenAI image edits with reference images to `/images/edits` and adds proper multipart uploads for GPT Image models. ([PR #4394](https://github.com/HKUDS/nanobot/pull/4394))
- **#2655** – Complete Discord channel rewrite using `discord.py 2.x` with slash commands, UI components, and agent tools (merged after long review). ([PR #2655](https://github.com/HKUDS/nanobot/pull/2655))

Open PRs showing active development include an inline TUI for the CLI agent ([#4329](https://github.com/HKUDS/nanobot/pull/4329)), per-run model overrides for cron jobs ([#4416](https://github.com/HKUDS/nanobot/pull/4416)) and subagents ([#4415](https://github.com/HKUDS/nanobot/pull/4415)), and an aggregated result mode for parallel subagents ([#4414](https://github.com/HKUDS/nanobot/pull/4414)).

## 4. Community Hot Topics
- **Issue #4013** (closed) – “Error calling LLM: stream stalled for more than 90 seconds” received 5 comments. The user reported the error after upgrading from 0.1.5 to 0.2.0 and expressed frustration that it “renders any real work useless.” The root cause appears to be a hardcoded timeout. ([Issue #4013](https://github.com/HKUDS/nanobot/issues/4013))
- **Issue #4374** (closed) – “Project workspaces: SOUL.md/USER.md are read from the project but written to the default workspace” had 3 comments. This asymmetry was causing agent updates to be lost when switching workspaces. A fix was merged. ([Issue #4374](https://github.com/HKUDS/nanobot/issues/4374))
- **Issue #4389** (closed) – Request for per-model `contextWindowTokens` for fallback models. The current global setting cannot trim prompts for smaller-context fallbacks, leading to truncation failures. 2 comments. ([Issue #4389](https://github.com/HKUDS/nanobot/issues/4389))
- **Issue #4287** (closed) – “Empty model responses not triggering fallback to alternative models”. DeepSeek occasionally returns empty completions, which the system treats as non-fallbackable. 2 comments. ([Issue #4287](https://github.com/HKUDS/nanobot/issues/4287))

## 5. Bugs & Stability
### Critical
- **#4410** (open) – After upgrade from v0.15 to recent release, the agent sends unwanted messages even when `ask LLM` instructions say not to. The user suspects a regression in `agent/loop.py` lines 1008–1009. A fix PR [#4412](https://github.com/HKUDS/nanobot/pull/4412) is already open to suppress routine cron job notifications. ([Issue #4410](https://github.com/HKUDS/nanobot/issues/4410))
- **#4013** (closed) – Stream stalled for >90 seconds on LLM call; hardcoded timeout considered a regression in v0.2.0. ([Issue #4013](https://github.com/HKUDS/nanobot/issues/4013))

### High
- **#4345** (closed) – Image-strip fallback leaks the file path into the model prompt and makes the model hallucinate seeing an image it never received. ([Issue #4345](https://github.com/HKUDS/nanobot/issues/4345))
- **#4287** (closed) – Empty responses from DeepSeek are not triggering fallback to alternative models, causing silent failures. ([Issue #4287](https://github.com/HKUDS/nanobot/issues/4287))

### Medium
- **#4052** (closed) – MCP `notifications/progress` messages cause Pydantic validation errors in v0.2.0 because the validator only accepts a fixed set of notification types. ([Issue #4052](https://github.com/HKUDS/nanobot/issues/4052))
- **#4374** (closed) – Project workspace read/write asymmetry for `SOUL.md` / `USER.md`. ([Issue #4374](https://github.com/HKUDS/nanobot/issues/4374))

## 6. Feature Request Clusters
Several feature requests emerged, with corresponding PRs already in progress:

| Request | Issue | Related PR(s) |
|---|---|---|
| Heartbeat tasks deliver results to the channel where the task was added | [#4418](https://github.com/HKUDS/nanobot/issues/4418) | – |
| Telegram Bot API 10.1 rich messages (advanced formatting) | [#4413](https://github.com/HKUDS/nanobot/issues/4413) | – |
| Per-model `contextWindowTokens` for fallback models | [#4389](https://github.com/HKUDS/nanobot/issues/4389) | – |
| SuspendTurn tool – pause a turn for async / human-in-the-loop continuations | – | [#4411](https://github.com/HKUDS/nanobot/pull/4411) |
| Cron job model presets (per-run provider/model/context overrides) | [#4378](https://github.com/HKUDS/nanobot/issues/4378) | [#4416](https://github.com/HKUDS/nanobot/pull/4416) |
| Subagent spawn model override | – | [#4415](https://github.com/HKUDS/nanobot/pull/4415) |
| Subagent aggregated result mode | – | [#4414](https://github.com/HKUDS/nanobot/pull/4414) |
| Inline TUI for `nanobot agent` | – | [#4329](https://github.com/HKUDS/nanobot/pull/4329) |
| Improved onboard wizard (JetBrains-inspired palette, draft preservation) | – | [#4395](https://github.com/HKUDS/nanobot/pull/4395) |
| Manual heartbeat trigger | – | [#3590](https://github.com/HKUDS/nanobot/pull/3590) |
| Dream update scope controls (disable or restrict memory/context) | – | [#3591](https://github.com/HKUDS/nanobot/pull/3591) |

## 7. User Feedback Summary
- **Upgrade pain**: Several users reported regressions after upgrading to 0.2.x, including stream timeouts ([#4013](https://github.com/HKUDS/nanobot/issues/4013)), unwanted heartbeat messages ([#4410](https://github.com/HKUDS/nanobot/issues/4410)), and empty responses not triggering fallback ([#4287](https://github.com/HKUDS/nanobot/issues/4287)).
- **Workspace asymmetry**: A power user noted that `SOUL.md` / `USER.md` are read from the project directory but written to the default workspace, causing agent instructions to be lost across workspace switches ([#4374](https://github.com/HKUDS/nanobot/issues/4374)).
- **Fallback model limitations**: Request for per-model context window to avoid truncation when falling back to smaller models ([#4389](https://github.com/HKUDS/nanobot/issues/4389)).
- **Positive note**: The user who reported the stream timeout issue still said the project is “very good (way to say ty)”, indicating overall satisfaction despite the bug.

## 8. Backlog Watch
The following pull requests have been open for over two weeks without recent maintainer review or merge:

- **#1945** – XMPP channel support (opened March 12, last updated June 19). This is a substantial new channel integration that has not been merged or commented on by maintainers in recent weeks. ([PR #1945](https://github.com/HKUDS/nanobot/pull/1945))
- **#3591** – Dream update scope controls (opened May 2, last updated June 19). Adds important guardrails for automatic memory consolidation. ([PR #3591](https://github.com/HKUDS/nanobot/pull/3591))
- **#3590** – Manual heartbeat trigger (opened May 2). ([PR #3590](https://github.com/HKUDS/nanobot/pull/3590))
- **#3662** – Avoid network loads during token estimation (opened May 6). Addresses offline-host compatibility. ([PR #3662](https://github.com/HKUDS/nanobot/pull/3662))

All remain open with no clear blockers noted. Maintainers may wish to review these to avoid community frustration.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-20

## Today’s Activity Brief
- **50 issues** were updated in the last 24 hours (42 open/active, 8 closed), and **50 pull requests** were updated (47 open, 3 merged/closed).
- A new patch release **v0.8.1** was published, stabilising the multi-agent runtime, channels, and provider stack with 207 commits and 123 bug fixes.
- Major work continues on Discord interaction components, MCP tooling, runtime model switching, and authentication. The project also saw a spike in bug reports around configuration persistence, binary regressions, and provider compatibility.

---

## Releases
### v0.8.1 (patch on v0.8.x)
- **Scope**: First patch on the v0.8.x line, focused on stabilizing the multi-agent runtime, channels, and provider stack introduced in v0.8.0.
- **Contents**: 207 commits from 45 contributors (46 new features, 123 bug fixes).
- **Notable fixes included**: runtime model switching reconciliation, context compression summary provider, Discord slash-command localization and guild scoping, gateway cron pause/resume, and MCP child-process leak.
- **Migration**: Operators should upgrade from v0.7.x or v0.8.0 directly; no breaking changes are called out in the release notes.
- **Link**: [v0.8.1 Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.1)

---

## Project Progress
- **Merged/closed PRs (3 total)**: The top 20 PRs by comment count are all open; the 3 merged/closed PRs today are not individually listed. Notable open PRs that are close to merging:
  - [feat(channels/discord): interaction components — buttons, selects, modals (#7965)](https://github.com/zeroclaw-labs/zeroclaw/pull/7965) – XL risk, high-priority Discord UI surface.
  - [fix(agent): self-contained context-compression summary provider (#7973)](https://github.com/zeroclaw-labs/zeroclaw/pull/7973) – Resolves context compression provider isolation bug (#7964).
  - [feat(onboard): chat-based conversational setup assistant (#8033)](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) – Revives `zeroclaw onboard` as an interactive setup tool.
- Several infrastructure and CI PRs landed: Docker base-image pin resolution, cost config reloadability, HMAC tool-receipt wiring across all agent paths.

---

## Community Hot Topics
Issues with the most comments and reactions:

1. **#7787** – [Prebuilt v0.8.0 binaries ship without Slack/Discord channel features](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) (6 comments, 1 👍)
   *Regression from 0.7.x; Slack/Discord channels missing from official binaries. High priority (P1).*

2. **#5844** – [Too much emphasis on memory](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) (6 comments)
   *System prompt overweights memory over current prompt, especially in cron jobs. Accepted and still open.*

3. **#7141** – [OIDC Authentication Provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (5 comments)
   *Tracking issue for pluggable auth; target v0.9.0. High interest from community.*

Underlying needs: users expect out-of-the-box channel support, better memory prioritization, and enterprise-grade authentication.

---

## Bugs & Stability
High-severity bugs reported or updated today (ranked by risk):

- **#7787 (risk:high)** – Prebuilt binaries missing Slack/Discord channels. Fix expected in next patch.
- **#6302 (risk:high)** – Gemini 400 error due to history serializer placing assistant tool_call before first user turn. Accepted (P1).
- **#5808 (risk:high)** – Default 32k context budget exceeded immediately by system prompt + tool definitions, causing perpetual preemptive trim. Accepted (P1).
- **#6037 (risk:high)** – Cron jobs can be launched repeatedly while still running. Accepted (P1), no fix PR yet.
- **#6841 (risk:medium)** – `vision_provider` silently ignored; images routed to fallback. Accepted (P1).
- **#7907 (risk:high)** – Agent rename can move owned state before config persistence. Open, no PR.
- **#7941 (risk:high)** – Agent delete can purge owned state before config persistence (mirror of #7907). Open.
- **#5869 (risk:high)** – Security advisory cluster from `rumqttc` pinning old `rustls-webpki`. Blocked by upstream.

Fix PRs exist for some:
- [#7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973) fixes context compression provider isolation.
- [#7982](https://github.com/zeroclaw-labs/zeroclaw/pull/7982) fixes Telegram voice peer config caching.
- [#7983](https://github.com/zeroclaw-labs/zeroclaw/pull/7983) handles file-descriptor exhaustion in IPC accept loop.
- [#8023](https://github.com/zeroclaw-labs/zeroclaw/pull/8023) stops MCP stdio child-process leak.

---

## Feature Request Clusters
User-requested features and related PRs (not predictions):

- **Unified slash-command registries** – [Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) proposes a single gateway-served catalogue across web UI, zerocode TUI, and channel runtime.
- **Configurable reply-intent precheck** – [Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) asks for smaller/faster model + timeout for channel prechecks.
- **Slack thread context hydration** – [Issue #6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) wants `conversations.replies` backfill on first mention.
- **OIDC authentication** – [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) tracking issue for v0.9.0.
- **MCP dashboard** – [Issue #7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) tracker for v0.8.3 web/plugin-management surfaces.
- **Decouple gateway WebSocket from agent turn** – [Issue #7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) to allow background turns and reconnect.
- **Configurable temporary-file cleanup** – [Issue #7996](https://github.com/zeroclaw-labs/zeroclaw/issues/7996) for storage-constrained deployments.
- **Chat-based setup assistant** – [PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) implements conversational `zeroclaw onboard`.

---

## User Feedback Summary
Reported pain points and use cases from today’s data:

- **Regression frustration**: Prebuilt v0.8.0 binaries missing Slack/Discord channels (issue #7787) – users had to downgrade to v0.7.5.
- **Memory system override**: “Too much emphasis on memory” (#5844) – especially in cron jobs, agents ignore current prompt.
- **Gemini compatibility**: 400 errors due to history order (#6302) block Gemini users.
- **Cron job duplication**: Jobs run multiple times if execution exceeds poll interval (#6037).
- **Android Termux setup**: Cannot install on Termux (#7911) – unknown Linux aarch64 binary.
- **Cost tracking gaps**: Model cost not captured for schedules, CLI, web agents (#5221, now closed).
- **Docs access**: Users want Docker images to include ZeroClaw documentation so agents can answer configuration questions (#7950).

No strong positive sentiment was evident; the community is actively reporting blockers and regressions.

---

## Backlog Watch
Long-unanswered important issues needing maintainer attention:

- **#5844** (memory emphasis) – Open since April, accepted P1, no closure in sight.
- **#5808** (context budget exceeded) – Open since April, accepted P1, no fix PR.
- **#4721** (log to stderr) – Open since March, accepted P2, no stale, no fix PR.
- **#5869** (security advisory from rumqttc) – Blocked by upstream, but no workaround communicated.
- **#6841** (vision_provider ignored) – Accepted P1 since May, no PR.
- **#6037** (cron duplicate) – Accepted P1 since April, no fix PR.
- **#7911** (Android Termux support) – Needs author action; maintainers have not responded.

These issues represent unresolved regressions and feature gaps that may affect user trust if left unaddressed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-20

## 1. Today's Activity Brief
Over the last 24 hours, PicoClaw saw activity on **4 open issues** (none closed), **7 pull requests** updated (6 open, 1 merged/closed), and a new **nightly release**. The merged PR (#2956) fixes a channel configuration merge bug. The nightly build `v0.3.0-nightly.20260619.287853ab` is an automated, potentially unstable snapshot. A notable SSRF fix PR (#3143) was opened, and several existing bug-fix PRs (type assertions, Matrix user ID parsing, MCP flag parsing) remain open but stale.

## 2. Releases
**Nightly Build (v0.3.0-nightly.20260619.287853ab)**
A fully automated nightly release, tagged as `v0.3.0-nightly.20260619.287853ab`. The project advises that this build is unstable and should be used with caution. No breaking changes or migration notes are provided in the release description.
🔗 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

## 3. Project Progress
Only one PR was merged/closed today:

- **#2956 (closed)** – *fix: preserve channel enabled state when merging security.yml*
  Merged on 2026-06-19. Fixes a regression where channels explicitly enabled in `config.json` were disabled after loading `.security.yml` without an `enabled` field.
  🔗 https://github.com/sipeed/picoclaw/pull/2956

No other PRs have been merged in the last 24 hours. Six bug-fix PRs remain open (see section 5).

## 4. Community Hot Topics
The most active issues (by comments and reactions) are:

- **#2472 – `list_dir` returns "invalid argument" on Windows**
  6 comments, 1 👍. Users are reporting a cross‑platform path separator mismatch when using `os.Root` with `fs.FS`. Workarounds discussed but no official fix merged yet.
  🔗 https://github.com/sipeed/picoclaw/issues/2472

- **#3114 – Telegram channel permission control by chat type**
  1 comment, 1 👍. Requests a granular permission model (private chat, group, channel) for Telegram to prevent dangerous tool execution in group/channel contexts. Strong community interest.
  🔗 https://github.com/sipeed/picoclaw/issues/3114

- **#3150 – Memory/state loss issue (Chinese report)**
  New issue with description “它给自己整失忆了” (loosely “it lost its memory”). 2 comments, minimal details provided. The symptom suggests session or context loss, but reproduction steps are missing.
  🔗 https://github.com/sipeed/picoclaw/issues/3150

## 5. Bugs & Stability
Bugs reported or updated in the last 24 hours, ranked by severity:

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **High** | #3143 (PR) | SSRF guard bypass via ISATAP IPv6 literals embedding private IPv4 addresses. Fix adds IP classifier recognition. | Yes (open PR #3143) |
| **Medium** | #2472 | Windows `list_dir` fails due to backslash vs. forward slash in `fs.FS` path handling. | No fix PR yet |
| **Low/Unknown** | #3150 | User reports “memory loss” – likely session/state corruption. No clear reproducer. | No fix PR |

Other bug-fix PRs still open (all stale):

- #3091 – Unchecked type assertion in OpenAI compat native search
- #3053 – Unchecked type assertion in `lockStoreFile`
- #3048 – MCP `add` command misinterprets root flags as positional arguments
- #3045 – Matrix user IDs with colon rejected by `allow_from` (fixes #3044)

These PRs have received no maintainer comments for 11–13 days.

## 6. Feature Request Clusters
Two feature requests received updates:

- **#348 – General Attachment Support**
  High-priority roadmap item: enable PicoClaw to handle textual, multimedia, and document attachments across IM channels (Telegram, Discord, etc.). Last updated 2026-06-19. No linked PR.
  🔗 https://github.com/sipeed/picoclaw/issues/348

- **#3114 – Telegram permission levels by conversation type**
  Requests separate allow/deny rules for private chats, groups, and channels. No related PR.

A large feature PR (#2937 – *Agent Collaboration Bus*) remains open and stale since May 24. It introduces inter‑agent mailboxes, threads, structured envelopes, and permission‑aware delivery. No recent activity.

## 7. User Feedback Summary
Real pain points surfaced in today’s data:

- **Windows compatibility**: The `list_dir` bug (#2472) frustrates Windows users who cannot use file system tools without workarounds.
- **Fine‑grained Telegram permissions**: Users want to safely deploy PicoClaw in groups without risking shell execution from any member (#3114).
- **Configuration surprises**: The merged PR #2956 addressed a scenario where enabling a channel in `config.json` was silently lost after loading environment‑specific credentials.
- **Matrix identity parsing**: The fix #3045 was validated by issue #3044, where standard Matrix IDs (`@alice:example.com`) were incorrectly rejected.
- **Memory/state loss**: The Chinese‑language issue #3150 suggests a possible crash or context reset, but lacks sufficient detail for diagnosis.

No appreciable satisfaction or praise was recorded in today’s items.

## 8. Backlog Watch
Several important items have gone unacknowledged or uncommented by maintainers for more than two weeks:

| Item | Created | Last Updated | Status |
|------|---------|--------------|--------|
| #2472 – Windows `list_dir` bug | 2026-04-10 | 2026-06-19 | Open, 6 comments, no maintainer response |
| #348 – Attachment support (high priority) | 2026-02-17 | 2026-06-19 | Open, 4 comments, no recent follow‑up |
| #2937 – Agent Collaboration PR | 2026-05-24 | 2026-06-19 | Open, no reviewer comments |
| #3045 – Matrix user ID fix PR | 2026-06-07 | 2026-06-19 | Open, no maintainer review |
| #3048 – MCP flag parsing fix PR | 2026-06-07 | 2026-06-19 | Open, no maintainer review |
| #3053 – LockStore type assertion fix PR | 2026-06-08 | 2026-06-19 | Open, no maintainer review |
| #3091 – OpenAI compat type assertion fix PR | 2026-06-10 | 2026-06-19 | Open, no maintainer review |

The Windows path issue (#2472) and the high‑priority attachment feature (#348) are particularly notable for their age and lack of update. The five open stale PRs, all addressing robust error handling or parsing fixes, await maintainer triage.

</details>