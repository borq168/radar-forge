# OpenClaw Ecosystem Digest 2026-06-24

> Issues: 187 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-24 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

## OpenClaw Project Digest — 2026-06-24

*Generated from GitHub issues and PRs updated in the last 24 hours.*

---

### 1. Today’s Activity Brief

The project saw high activity with **187 issues updated** (141 open, 46 closed) and **500 PRs updated** (472 open, 28 merged/closed). No new releases were published. The busiest threads focused on session‑state corruption, replay‑safe `thinking` blocks, compaction timeouts, and a cluster of regressions introduced in the recent 6.x releases. Eight high‑severity issues were closed today, including the cron contamination bug ( #90991 ), the ACPX TypeError ( #90404 ), and the Feishu post‑compaction disappearance ( #76729 ). Several PRs remain blocked on maintainer review or author input.

---

### 2. Releases

No new releases were published in the last 24 hours.

---

### 3. Project Progress

**Issues closed today** (from the top‑commented set):

- [ #90991 ](https://github.com/openclaw/openclaw/issues/90991) (P1) – Cron scheduled trigger contaminating global runtime state
- [ #90404 ](https://github.com/openclaw/openclaw/issues/90404) (P1) – ACPX `TypeError: Cannot use in operator`
- [ #95760 ](https://github.com/openclaw/openclaw/issues/95760) (P2) – NVIDIA Build provider mid‑stream cut
- [ #76729 ](https://github.com/openclaw/openclaw/issues/76729) (P1) – Feishu replies lost after compaction
- [ #92273 ](https://github.com/openclaw/openclaw/issues/92273) (P1) – Tool Search breaking pre‑compaction memory flush
- [ #90643 ](https://github.com/openclaw/openclaw/issues/90643) (P2) – Discord mention aliases escaping fenced code
- [ #93465 ](https://github.com/openclaw/openclaw/issues/93465) (P1) – Windows ACPX runtime spawn EINVAL
- [ #68780 ](https://github.com/openclaw/openclaw/issues/68780) (P3) – Plugin allowlist empty warning

These closures indicate fixes have been shipped for several long‑standing session‑lifecycle and provider incompatibility bugs.

**28 PRs were merged or closed** today, though none of the highest‑commented PRs appear among them (the large feature PRs remain open). This suggests most merged work was smaller bugfixes or cleanup.

---

### 4. Community Hot Topics

**Most active issues** (by comment count, all updated in the last 24h):

1. [ #88838 ](https://github.com/openclaw/openclaw/issues/88838) (35 comments, P1) – **SQLite migration via accessor seam** – Track core session/

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-24

## 1. Daily Cross-Project Overview

Today saw highly uneven activity across the tracked projects. **OpenClaw** dominated with 187 issues and 500 PRs updated, though no new release was cut; the project focused on closing eight high-severity bugs and managing regressions from recent 6.x releases. **NanoBot** shipped **v0.2.2** with 140 merged PRs emphasizing durability improvements, while also accumulating new bug reports around Telegram display and tool-calling loops. **Zeroclaw** closed two high-priority security issues (WASM environment variable access and SSRF protection) and restored Matrix room management, but four new S1 bugs were reported. **PicoClaw** had the lightest day with six merged fixes addressing tool-call parsing and WhatsApp stability, plus two new platform-specific crash reports. No project published a major architectural RFC or new release beyond NanoBot’s v0.2.2.

## 2. Activity Comparison

| Project    | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Release Today | Activity Note |
|------------|------------------------------|---------------------------|---------------|---------------|
| OpenClaw   | 187 (141 open, 46 closed)   | 500 (472 open, 28 merged) | None          | High volume; 8 P1 bugs closed; cluster of regression reports in 6.x |
| NanoBot    | 11 (7 open, 4 closed)       | 39 (32 open, 7 merged)    | **v0.2.2**    | Shipped durability release; 21 new contributors since last release |
| Zeroclaw   | 33 (20 open, 13 closed)     | 50 (31 open, 19 merged)   | None          | Security fixes closed; 4 new S1 bugs; feature restoration (Matrix, /thinking) |
| PicoClaw   | 3 (2 open, 1 closed)        | 17 (11 open, 6 merged)    | None          | Light day; fixes for Doubao, WhatsApp, LINE; 2 new crash bugs |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw’s 500 PRs and 187 issues updated dwarf all other projects combined (NanoBot: 39/11, Zeroclaw: 50/33, PicoClaw: 17/3). This reflects OpenClaw’s role as the core reference implementation with the largest contributor base.

**Technical focus:** OpenClaw today centered on session-state corruption, replay-safe `thinking` blocks, compaction timeouts, and 6.x regressions — all runtime-internal reliability concerns. Peer projects focused more on provider compatibility (NanoBot: Kimi, OpenCode; Zeroclaw: Groq; PicoClaw: Doubao), channel-specific bugs (Telegram, WhatsApp, QQ), and security hardening (Zeroclaw: env_read, SSRF; PicoClaw: CSRF protection).

**Community surface area:** OpenClaw’s most active issue (#88838, SQLite migration via accessor seam) had 35 comments, while no peer project issue exceeded 6 comments. This suggests OpenClaw sustains the deepest technical discussions among contributors, while peer projects have faster triage cycles with smaller discussion threads.

**PR throughput:** Despite high volume, OpenClaw merged only 28 of 500 PRs (5.6% merge rate today). NanoBot merged 7 of 39 (18%), Zeroclaw 19 of 50 (38%), and PicoClaw 6 of 17 (35%). This may indicate OpenClaw has a larger backlog or a stricter review process; data does not reveal whether this is a bottleneck or deliberate pacing.

## 4. Shared Technical Focus Areas

**Tool-calling reliability** appeared across all four projects:
- **NanoBot:** #2298 (endless tool-calling loops, open since March) and #4473 (Kimi tool_use ID deduplication, fixed via PR #4474)
- **Zeroclaw:** #8219 (Groq multi-turn tool loop failure, S1, open)
- **PicoClaw:** #3154 (Doubao Seed tool calls leaked as XML, fixed)
- **OpenClaw:** Tool Search breaking pre-compaction memory flush (#92273, closed)

**Provider compatibility** was active in three projects:
- **NanoBot:** Kimi Coding Plan (#4463), OpenCode Zen/Go (#4475)
- **Zeroclaw:** Groq gpt-oss-120b failure (#8219)
- **PicoClaw:** Doubao Seed tool call parsing (#3154, fixed), DeepSeek-v4-flash-free repeated execution (#3159)

**Mobile and terminal platform issues** surfaced in three projects:
- **NanoBot:** iOS Safari composer zoom (#4388, PR #4471)
- **Zeroclaw:** macOS keybinding conflicts (#8075)
- **PicoClaw:** Android/Termux process hook crash (#3164, S1)

**Memory and state management** was active in three projects:
- **OpenClaw:** Session-state corruption, compaction timeouts, memory flush
- **NanoBot:** Eager consolidation (PR #4402), provenance gating (PR #4424), lifecycle wiki writer (PR #4477)
- **Zeroclaw:** Relationship memory workflows (#8251, RFC)

## 5. Differentiation Analysis

**Target user base:**
- **OpenClaw** addresses core infrastructure developers building AI agent runtimes; its issues focus on deep internal correctness (compaction, session lifecycle, WASM plugin isolation).
- **NanoBot** targets personal AI assistant users with emphasis on durability (segmented transcripts), mobile WebUI (PWA, iOS zoom fix), and consumer chat channels (Telegram, Dream cron).
- **Zeroclaw** positions as a multi-channel, multi-protocol platform with strong security posture (env_read allowlist, SSRF protection, capability-gated WASI) and channel breadth (Matrix, DingTalk, QQ, WeChat, Feishu).
- **PicoClaw** serves embedded/edge device users (Pico hardware) and CLI/terminal-first deployers, with Android/Termux support and remote WebSocket agent mode.

**Architecture and feature velocity:**
- **NanoBot** shipped a release today with 140 merged PRs — the highest single-release throughput of any tracked project. This suggests a lower-friction merge process and rapid iteration.
- **Zeroclaw** closed 19 PRs today (38% merge rate) and closed two security issues, but also accumulated 4 new S1 bugs, indicating active development with ongoing stability challenges.
- **PicoClaw** had the smallest absolute activity but the highest proportion of fixes relative to new features (5 of 6 merged PRs were fixes), suggesting a maintenance-focused day.
- **OpenClaw** had the largest raw activity but the lowest merge-to-open ratio, possibly due to size/complexity of the PRs under review or a bottleneck in maintainer bandwidth.

**Security posture:**
- **Zeroclaw** explicitly addressed two privilege-escalation vectors (WASM env_read, SSRF) and has ongoing RFCs for capability-gated hardware access (#8187) and per-agent environment variables (#8226). No other project had comparable security-focused closures today.
- **PicoClaw** added CSRF protection for its launcher setup endpoint (PR not identified by number in the digest)
- **OpenClaw** and **NanoBot** did not highlight security fixes in today’s activity.

## 6. Community Activity Notes

**Tier 1 — Highest volume:** OpenClaw (187 issues, 500 PRs updated). Community discussion depth is significantly higher than peers.

**Tier 2 — Moderate volume with release activity:** NanoBot (11 issues, 39 PRs, released v0.2.2) and Zeroclaw (33 issues, 50 PRs). Both show steady contributor engagement but smaller discussion threads.

**Tier 3 — Lower volume:** PicoClaw (3 issues, 17 PRs). Activity focused on targeted fixes; limited community discussion.

**New contributor growth:** NanoBot explicitly noted 21 new contributors since its last release, indicating healthy on-ramping. Other projects did not report new contributor counts.

**Backlog aging:** NanoBot’s #2298 (endless tool loops, 3+ months), Zeroclaw’s #6074 (153 lost commits, needing contributors), and PicoClaw’s PR #2975 (Telegram reply-as-mention, open since May 30) represent long-unresolved items across three projects. OpenClaw’s backlog was not characterized by age data in today’s digest.

## 7. Evidence-Backed Observations

**1. Tool-calling reliability is a cross-project pain point.** All four projects had activity today related to tool-call loop detection, deduplication, or serialization failures. This spans large models (Groq, DeepSeek), small/local models (NanoBot #2298), and provider-specific endpoints (Kimi, Doubao). No project appears to have a complete solution.

**2. Edge/embedded and mobile platforms continue to produce crash-level bugs.** NanoBot’s iOS zoom issue, PicoClaw’s Android/Termux crash, and Zeroclaw’s keybinding conflicts on macOS all represent platform-specific failures in the user interface or runtime layer. These are not theoretical — they block usage on specific devices.

**3. Security hardening is unevenly distributed.** Zeroclaw and PicoClaw addressed security items today (WASM access control, SSRF, CSRF), while OpenClaw and NanoBot had no security-related closures. Given that OpenClaw is the core reference implementation, the absence of security fixes may indicate either lower reported vulnerability density or a different triage prioritization.

**4. Release cadences differ significantly.** NanoBot shipped a release today with 140 merged PRs; the other three projects had no releases. This suggests NanoBot operates on a shorter release cycle with more frequent integration of community contributions, while OpenClaw and Zeroclaw may batch changes into larger, less frequent releases.

**5. Community discussion depth correlates with project scale.** OpenClaw issues attract 20–35 comments per hot thread; no peer project issue exceeded 6 comments. This is consistent with OpenClaw having a larger user base of core developers who engage in detailed technical debate, while peer projects have faster resolution cycles with less discussion.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-24

## Today's Activity Brief
NanoBot saw elevated activity with 11 issues updated (7 open, 4 closed) and 39 PRs updated (32 open, 7 merged/closed). The project shipped **v0.2.2** with 140 merged PRs and 21 new contributors, focused on durability improvements like segmented WebUI transcripts and forked chat reply reliability. A significant cluster of work targeted provider compatibility (Kimi Coding, OpenCode Zen/Go), WebUI mobile experience (PWA support, iOS zoom fix), and memory subsystem enhancements (eager consolidation, provenance gating, lifecycle wiki writer). Community attention concentrated on tool-calling loop mitigation, Telegram display regressions, and Dream skill duplication.

## Releases
**v0.2.2** shipped today. Headline theme is **durability**:
- WebUI conversation transcripts are now segmented instead of stored in a single fragile file
- Forked chats preserve replies more reliably
- 140 PRs merged since previous release, 21 new contributors
- No breaking changes or migration notes explicitly documented in the release announcement

## Project Progress
**7 PRs merged/closed today**, spanning fixes, tests, and a feature:

- **fix(provider): deduplicate parallel tool_use ids** ([PR #4474](https://github.com/HKUDS/nanobot/pull/4474)) — closed; fixes Kimi Coding endpoint duplicate ID errors
- **test(exec): cover git commands in workspace subdirectories** ([PR #4393](https://github.com/HKUDS/nanobot/pull/4393)) — closed; regression test for restrictToWorkspace git flows
- **fix(context): fall back to default memory bootstrap** ([PR #4387](https://github.com/HKUDS/nanobot/pull/4387)) — closed; loads project-local AGENTS.md while falling back to default workspace for SOUL.md/USER.md
- **test(mcp): use resolvable timeout regression URL** ([PR #4417](https://github.com/HKUDS/nanobot/pull/4417)) — closed; CI/CD test reliability fix
- **fix(config): preserve dream cron when saving config** ([PR #4478](https://github.com/HKUDS/nanobot/pull/4478)) — open; DreamConfig.cron was silently removed on config saves
- **feat: add lifecycle wiki memory writer** ([PR #4477](https://github.com/HKUDS/nanobot/pull/4477)) — open; Dream-only memory wiki with validation

## Community Hot Topics

**Most active issue: #2298 — Breaking endless tool calling loops** ([link](https://github.com/HKUDS/nanobot/issues/2298))
- 5 comments, created 2026-03-20, still open
- User reports smaller/local models enter infinite tool-call loops repeating the same action
- Request for loop-detection heuristics (e.g., detect repeated identical tool calls and intervene)
- No maintainer resolution noted in updates; oldest long-unresolved issue in active set

**Telegram display regressions: #4470** ([link](https://github.com/HKUDS/nanobot/issues/4470))
- 1 comment, created 2026-06-23, still open
- Two bugs since v0.2.2: (1) newlines ignored in Telegram messages, (2) message flickering/constant editing during streaming
- **Fix PR exists: #4472** ([link](https://github.com/HKUDS/nanobot/pull/4472)) — skips sendRichMessage when streaming preview is active

**Long-running feature request: #2305 — Support hiding reasoning step display** ([link](https://github.com/HKUDS/nanobot/issues/2305))
- Created 2026-03-20, recently closed
- User wanted toggle to hide reasoning steps output while keeping reasoning enabled
- Closed without note on resolution path; may have been superseded by thinking tag handling work

## Bugs & Stability

### High Severity
1. **Telegram display bugs (newlines + flickering)** — #4470 ([link](https://github.com/HKUDS/nanobot/issues/4470))
   - Root cause: sendRichMessage integration (Bot API 10.1) introduced in v0.2.2
   - Fix PR #4472 ([link](https://github.com/HKUDS/nanobot/pull/4472)) open, authored by @axelray-dev

2. **Infinite tool-calling loops** — #2298 ([link](https://github.com/HKUDS/nanobot/issues/2298))
   - Affects smaller/local models primarily
   - No fix PR identified; issue has been open since March

3. **WebUI renders `<thinking/>` tags as visible text** — #4465 ([link](https://github.com/HKUDS/nanobot/issues/4465))
   - Leaks model control/template text into frontend
   - No fix PR open yet

### Medium Severity
4. **Heartbeat sends messages even when instructed not to** — #4410 ([link](https://github.com/HKUDS/nanobot/issues/4410), closed)
   - Regression after upgrade from v0.15; references `agent/loop.py` lines 1008-1009
   - Closed, likely fixed in v0.2.2

5. **MCP streamable HTTP generator crash on reconnect** — #4441 ([link](https://github.com/HKUDS/nanobot/pull/4441), open)
   - `RuntimeError` due to cancel scope task mismatch
   - PR #4441 proposes force-close fix

6. **Duplicated tool_use IDs with Kimi Coding endpoint** — #4473 ([link](https://github.com/HKUDS/nanobot/issues/4473), closed)
   - Fixed via PR #4474 ([link](https://github.com/HKUDS/nanobot/pull/4474))

### Low Severity
7. **iOS Safari composer zoom** — PR #4471 ([link](https://github.com/HKUDS/nanobot/pull/4471), open)
   - Fix sets textarea font size to 16px to prevent auto-zoom
   - References issue #4388

8. **Dream cursor not advancing when Dream disabled** — PR #4481 ([link](https://github.com/HKUDS/nanobot/pull/4481), open)
   - Causes prompt bloat over time; references issue #4242

## Feature Request Clusters

### Provider Ecosystem Expansion
- **Kimi Coding Plan support** — Issue #4463 ([link](https://github.com/HKUDS/nanobot/issues/4463))
  - Paid Coding Plan endpoint via Anthropic-compatible API; requires tool_use ID deduplication fix
- **OpenCode Zen and OpenCode Go providers** — Issue #4475 ([link](https://github.com/HKUDS/nanobot/issues/4475)), PR #4476 ([link](https://github.com/HKUDS/nanobot/pull/4476))
  - Adds curated coding-optimized and low-cost model sources
- **Custom provider thinking/reasoning configuration** — PR #4482 ([link](https://github.com/HKUDS/nanobot/pull/4482))
  - Allows non-standard thinking parameters for providers like VolcEngine/Doubao

### WebUI Mobile & PWA
- **PWA support** — Issue #4457 ([link](https://github.com/HKUDS/nanobot/issues/4457), closed), Issue #4479 ([link](https://github.com/HKUDS/nanobot/issues/4479), open), PR #4480 ([link](https://github.com/HKUDS/nanobot/pull/4480), open)
  - Manifest, service worker, offline caching, mobile home screen installation
- **Mobile sidebar swipe gesture** — Issue #4479, PR #4480
  - Side panel touch gesture for mobile navigation

### Memory & Knowledge Management
- **Dream should update existing workspace skills** — Issue #4467 ([link](https://github.com/HKUDS/nanobot/issues/4467))
  - User frustration: Dream creates duplicate skills on each run instead of merging improvements
  - No fix PR identified
- **Lifecycle wiki memory writer** — PR #4477 ([link](https://github.com/HKUDS/nanobot/pull/4477))
  - Dream-only memory wiki with expiry, corrections, supersession support
- **Opt-in eager consolidation** — PR #4402 ([link](https://github.com/HKUDS/nanobot/pull/4402), open)
  - Archives conversation slices into `memory/history.jsonl` after responses
- **Archive facts with provenance context** — PR #4424 ([link](https://github.com/HKUDS/nanobot/pull/4424), open)
  - Includes MEMORY.md excerpts and source-discipline rules in consolidation prompts

### Cron & Subagent Enhancements
- **Cron job model presets** — PR #4416 ([link](https://github.com/HKUDS/nanobot/pull/4416), open)
  - Per-run provider/model/context-window overrides without mutating live agent model
- **Subagent spawn model override** — PR #4415 ([link](https://github.com/HKUDS/nanobot/pull/4415), open)
  - Optional model parameter on spawn tool

## User Feedback Summary

**Pain points (dissatisfaction):**
- **Telegram regression** (#4470): v0.2.2 broke newline handling and introduced flickering during streaming; user reports single continuous block output
- **iOS auto-zoom** (#4388, PR #4471): composer zooms on focus in Safari, frustrating mobile use
- **Thinking tags visible** (#4465): model control text leaks into chat UI; user perceives it as a display bug
- **Dream skill duplication** (#4467): user who maintains custom workflow skills finds Dream "always" creates new copies instead of updating existing ones
- **Heartbeat unwanted messages** (#4410): user sought no-message behavior; upgrade broke expected quiet operation

**Satisfaction / positive signals:**
- v0.2.2 release notes emphasize durability improvements that address long-standing reliability concerns
- 21 new contributors since last release suggests healthy community growth
- Multiple contributors (@zpljd258, @chengyongru, @axelray-dev, @yu-xin-c) have multiple active PRs, indicating sustained engagement

**Common thread:** Several users are running NanoBot in production-like settings (daily custom skills, heartbeat-based monitoring, mobile access) and encountering issues that surface at the intersection of new features and real-world usage patterns.

## Backlog Watch

1. **#2298 — Endless tool calling loops** ([link](https://github.com/HKUDS/nanobot/issues/2298))
   - Opened 2026-03-20 (3+ months ago), 5 comments, still open
   - Core reliability issue for users of smaller/local models
   - No fix PR or maintainer triage notes visible; may need prioritization

2. **#2305 — Hiding reasoning step display** ([link](https://github.com/HKUDS/nanobot/issues/2305))
   - Opened 2026-03-20, recently closed without resolution notes
   - May have been superseded by #4465 (thinking tag rendering); unclear if intent was fully addressed

3. **#4410 — Heartbeat sends messages after upgrade** ([link](https://github.com/HKUDS/nanobot/issues/4410))
   - Closed, but root cause (`agent/loop.py` lines 1008-1009) not publicly documented as fixed
   - May re-emerge for other users on similar upgrade paths

*(No new issues created today that lack maintainer response within expected timeframe.)*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-24

## Today’s Activity Brief
In the past 24 hours, the project saw 33 issues updated (20 open/active, 13 closed) and 50 pull requests updated (31 open, 19 merged or closed). No new releases were published. Notable closures include two high‑risk security items – an `env_read` allowlist for WASM plugins (#5919) and SSRF protection for the `zc_http_request` host function (#5918) – as well as a bug fix for MCP tools missing from Zerocode TUI sessions (#8193). On the PR side, a large change restored Matrix room management capabilities (#8068), and a cascade fix for provider/channel alias deletions was merged (#8074). Several new S1‑severity bugs were reported, including a Groq provider multi‑turn tool loop failure and a missing bundled skill loading on new sessions.

## Releases
None.

## Project Progress
**Closed/merged PRs (19 total):**
- **feat(channels): restore Matrix room management tool** (#8068 by @Audacity88) – Restores room creation and invite APIs with typed visibility enums.
- **feat(channels): restore per‑sender /thinking overrides** (#8011 by @Audacity88) – Brings back `/thinking off|minimal|low|medium|high|max` commands.
- **fix(gateway): cascade provider and channel alias deletes** (#8074 by @Audacity88) – Prevents dangling references when aliased config map keys are deleted.
- **fix(providers): coalesce stripped compatible history roles** (#7931 by @Audacity88) – Normalizes prompt‑guided history after native‑tool stripping.
- **fix(test): make control‑plane PID liveness tests deterministic** (#8242 by @Audacity88) – Replaces magic PID assumption with a deterministic predicate.
- Additional closed PRs include documentation link gate checks (#8195), version mismatch detection in zerocode (#8186), Node container‑base explicit selection (#8105), and gettext `.po` submodule implementation (#8143).

**Key closed issues:**
- #5919 (allowlist for `zc_env_read` WASM plugin access)
- #5918 (SSRF protection for `zc_http_request`)
- #8193 (MCP tools missing in TUI while gateway sees them)
- #2091 (Telegram poll error leaking Bot API token in logs)
- #7531 (streaming card messages for QQ/DingTalk/WeChat/Feishu)
- #7769 (wiring recovered Matrix room‑management APIs to a client)
- #7742 (refresh system prompt after tool dispatcher swap)

## Community Hot Topics
Most active issues by comment count (all with 3–6 comments, zero reactions today):

- **#5919 (CLOSED) – `zc_env_read` allowlist** (6 comments) – Discussion on restricting plugin access to environment variables.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5919)

- **#8193 (CLOSED) – MCP tools missing from TUI** (4 comments) – Two users reported that discovered MCP tools were not appearing in Zerocode TUI sessions. The fix was merged.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)

- **#8043 (OPEN) – RFC: Retire standalone `aardvark-sys` crate** (3 comments) – Discusses folding the crate into `zeroclaw-hardware`.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)

- **#6943 (OPEN) – RFC: Deconflict Plugin System Goals in FND‑001** (3 comments) – Proposes replacing Extism with a direct wasmtime component model host.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)

- **#2091 (CLOSED) – Telegram poll error leaking Bot API token** (3 comments) – S3 bug with token appearing in log URL segments.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2091)

## Bugs & Stability
**S1 (workflow blocked) bugs reported today:**
- **#8151 (OPEN)** – Deferred image attachment in Matrix loses re‑loadable reference; bot later denies seeing it. No fix PR yet.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)
- **#8219 (OPEN, in‑progress)** – `gpt-oss-120b` on Groq fails native multi‑turn tool loops (`tool_call_id` serialized null; `reasoning_content` rejected).
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8219)
- **#8202 (OPEN, in‑progress)** – `refreshed_new_session_system_prompt` missing bundled skill loading; new sessions exclude skill bundle skills.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8202)
- **#8054 (OPEN, blocked)** – System prompt tool‑availability mismatch across all entry points (follow‑up to #7756). Needs broader fix after the direct runtime path was addressed.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)

**S2 (degraded behavior) bugs:**
- **#8236 (OPEN)** – `voice_wake.rs` missing `subject` field in `ChannelMessage` literal, breaks `--all-features` build.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8236)
- **#8186 (CLOSED)** – Zerocode TUI should detect daemon/TUI version mismatch during connect.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8186)
- **#7742 (CLOSED)** – System prompt not refreshed after tool dispatcher swap.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7742)

**S3 (minor) bugs:**
- #2091 (CLOSED) – Telegram token leak in logs.

## Feature Request Clusters
Requests observed in the last 24 hours, grouped by domain:

**Security & Config**
- **Per‑agent environment variables** (#8226 by @susyabashti) – Declarative env map to isolate secrets per agent.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)
- **In‑app upgrade with supervised restart** (#8170, RFC by @NiuBlibing) – Allow upgrading from the web dashboard.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)
- **Capability‑gated WASI hardware host functions** (#8187, RFC by @Audacity88) – Plugin access to GPIO, SPI, etc.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)
- **Scoped zero‑downtime reload for security policy and channel config** (#7897, RFC by @Audacity88).
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)

**Channels & Streaming**
- **DingTalk streaming message support** (#8228 by @jokewithme110) – Reduce latency for long completions.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)
- **Unified slash‑command registries** (#7929, RFC by @NiuBlibing) – Replace three hardcoded registries with a single gateway‑served catalogue.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)

**Runtime & Tools**
- **Independent delegate mode for specialist handoffs** (#8238 by @vrurg) – Allow specialist agents to run under their own policy and toolset.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)
- **Surface relationship memory as user‑facing workflows** (#8251 by @Audacity88) – Build on restored knowledge graph actions.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8251)

**UI / TUI**
- **Keybinds vs. OS globals** (#8075 by @tidux) – Default keybind conflicts on macOS (ctrl+up) and terminal‑restricted binds.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8075)

**Architecture**
- **Retire `aardvark-sys` crate** (#8043, RFC by @JordanTheJet) – Fold into `zeroclaw-hardware`.
- **Deconflict plugin system goals** (#6943, RFC by @bheatwole) – Move to direct wasmtime component model host.

**Related PRs:**
- #8000 (feat: improve zerocode UI – browse mode badge, auto‑exit, etc.)
- #8068 (Matrix room management)
- #8011 (/thinking overrides)
- #8074 (cascade deletes)

## User Feedback Summary
- **Tool availability mismatch:** Multiple users (via #8054) report that the system prompt tells reasoning models “No tools are available” even when native/MCP tools are present. The root cause is fixed for the direct runtime path, but other entry points (channels, WebSocket, multimodal) still exhibit the same mismatch.
- **Streaming latency:** DingTalk users (@jokewithme110) request streaming message support to reduce wait time for long completions; other Chinese IM channels (QQ, WeChat, Feishu) have already received streaming card messages (#7531, closed).
- **Per‑agent isolation:** @susyabashti highlights the need to inject environment variables per agent to isolate secrets; current execution contexts share a global environment.
- **Delegate mode limitations:** @vrurg reports that the delegation implemented in #7590 does not allow specialist agents to run with independent policies/tools; an explicit “independent delegate mode” is requested.
- **Keybinding conflicts:** @tidux reports that macOS users face default key conflicts (ctrl+up) and some PC keybinds are forbidden in terminals.
- **Memory workflows:** @Audacity88 notes that long‑term memory tools exist but lack documented user‑facing workflows; users cannot easily navigate knowledge graph relationships.

## Backlog Watch
Items flagged as needing maintainer attention or stuck:

- **#8043 (OPEN, needs‑maintainer‑review)** – RFC to retire `aardvark-sys` crate (updated today, 3 comments, no maintainer response).
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)
- **#8170 (OPEN, needs‑maintainer‑review)** – RFC for in‑app upgrade with supervised restart.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)
- **#8187 (OPEN, needs‑maintainer‑review)** – RFC for capability‑gated WASI hardware host functions.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)
- **#8228 (OPEN, needs‑maintainer‑review)** – DingTalk streaming message support.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)
- **#8226 (OPEN, needs‑author‑action)** – Per‑agent environment variables; awaiting author follow‑up.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)
- **#8054 (OPEN, blocked)** – System prompt mismatch across entry points; blocked pending broader fix.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)
- **#6074 (OPEN, help wanted)** – Audit of 153 commits lost in a bulk revert; recovery effort needs contributors.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
- **#7432 (OPEN)** – v0.9.0 tracker with 134 open items; serves as public coordination for auth, security, gateway boundaries.
  [Issue Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest – 2026-06-24

### 1. Today's Activity Brief
Over the past 24 hours, PicoClaw saw updates to 3 issues (2 open, 1 closed) and 17 pull requests (11 open, 6 merged/closed). No new releases were cut. Key merged fixes addressed tool call parsing for Doubao Seed models, WhatsApp WebSocket stability, and lint-clean error handling. Two new bugs were reported: process hooks crashing on Android/Termux and repeated task execution with certain model configurations. An important security PR adds cross-site request protection for the launcher setup endpoint.

### 2. Releases
No new releases were published.

### 3. Project Progress (Merged/Closed PRs Today)
The following PRs were merged or closed, all updated on 2026-06-23:

- **#3154** – `fix(openai_compat): recover Doubao Seed tool calls leaked as <seed:to…`
  Fixes issue #3153 where Volcengine Doubao Seed models occasionally embed tool calls as raw XML inside `message.content` instead of using the standard `tool_calls` field.
  ([PR #3154](https://github.com/sipeed/picoclaw/pull/3154))

- **#3162** – `fix(whatsapp): add reconnection and async message processing`
  Adds goroutine-based message processing, pong handler, read deadline, and auto-reconnection with exponential backoff to prevent automatic WebSocket disconnections.
  ([PR #3162](https://github.com/sipeed/picoclaw/pull/3162))

- **#3059** – `fix: explicitly ignore Close() errors in error paths and retry loops`
  Silences linter warnings by using `_ =` for ignored `Close()` errors on files, HTTP bodies, and PTY resources in error paths.
  ([PR #3059](https://github.com/sipeed/picoclaw/pull/3059))

- **#3054** – `fix(line): add ok checks for sync.Map type assertions in Send`
  Prevents panics from unchecked type assertions on `sync.Map` values in LINE channel messaging.
  ([PR #3054](https://github.com/sipeed/picoclaw/pull/3054))

- **#3047** – `fix(web): restore full JSONL history for session detail`
  Adds a detail-only JSONL session reader that ignores `meta.Skip`, so archived messages are visible in the session detail endpoint while keeping the list endpoint efficient.
  ([PR #3047](https://github.com/sipeed/picoclaw/pull/3047))

- **#2888** – `PR: 55N10E/picoclaw-1#1 Fix/tool config load image reaction` (closed, stale)
  Older fix for tool configuration loading; closed after inactivity.
  ([PR #2888](https://github.com/sipeed/picoclaw/pull/2888))

### 4. Community Hot Topics
The most active item in terms of comments is the now-closed **issue #3015** (4 comments) describing a QQ channel connection failure on Windows after a release build. The user reported a token retrieval timeout when starting `picoclaw gateway`. A maintainer may have provided guidance; the issue was closed as stale.

Other items had no comments but received notable attention via PRs:
- **#3164** (open bug: process hooks crash on Android/Termux)
- **#3159** (open bug: repeated task execution)
- **#3161** (open PR: keep deny patterns active for custom allow rules)

The underlying need from #3015 is reliable Windows support for non-Pico channels, while #3164 highlights platform-specific crashes on mobile/terminal environments.

### 5. Bugs & Stability
Three bugs were active in the last 24h, ranked by severity:

| # | Issue | Severity | Description | Fix PR Exists? |
|---|-------|----------|-------------|----------------|
| 3164 | [OPEN] Process hooks crash gateway on Android/Termux (v0.2.9) | **High** – crashes within 2 seconds of startup even with minimal "hello world" hook | None yet |
| 3159 | [OPEN] Repeated task execution when using DeepSeek-v4-flash-free via OpenCode Zen | **Medium** – model repeats previous task before answering new query | None yet |
| 3015 | [CLOSED] QQ channel connection failure on Windows | **Medium** – token retrieval timeout for `bots.qq.com` | Closed as stale |

Other fixes merged today address stability: WhatsApp reconnection (#3162), Doubao tool call parsing (#3154), and LINE channel type assertion panic (#3054).

### 6. Feature Request Clusters
Several PRs proposing new functionality were updated but remain open:

- **Remote Pico WebSocket mode for agent**
  PR #3118 adds a `--remote` flag to `picoclaw agent` allowing connection via WebSocket to a remote gateway, while preserving local behavior.
  ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118))

- **Android ADB remote operations tool**
  PR #3157 introduces an experimental ADB-backed tool for device listing, screenshots, UI hierarchy, tap/swipe/text input, and key events—without exposing arbitrary shell execution.
  ([PR #3157](https://github.com/sipeed/picoclaw/pull/3157))

- **AWS Bedrock prompt caching**
  PR #3163 leverages Bedrock Converse API cache points for system, tools, and messages to reduce input costs by caching prefixes.
  ([PR #3163](https://github.com/sipeed/picoclaw/pull/3163))

- **Telegram group reply as mention**
  PR #2975 (open since May 30) treats replying to a bot message in group chats as equivalent to `@mention` when `mention_only: true` is set.
  ([PR #2975](https://github.com/sipeed/picoclaw/pull/2975))

No user-requested feature issues were filed in the last 24h; these PRs represent ongoing feature work.

### 7. User Feedback Summary
- **#3015 (closed):** A Windows user encountered a token retrieval timeout when connecting to QQ channel after a release build. Pico channel worked normally, indicating a channel-specific regression. The issue was closed as stale without a confirmed fix.
- **#3164 (new):** An Android/Termux user reports that any process hook (even a trivial “hello world”) causes the gateway to crash within two seconds of startup. No maintainer response yet.
- **#3159 (new):** A user on Debian 13 with DeepSeek-v4-flash-free (via OpenCode Zen) observes that the AI repeats the previous task (e.g., fetching US news) when asked a new question about French news, suggesting a context or task deduplication problem.

No positive feedback or satisfaction signals were recorded in the 24-hour window.

### 8. Backlog Watch
The following items may need maintainer attention due to age, lack of response, or unresolved status:

- **PR #2975** – `feat(telegram): treat reply to bot message as mention in group chats`
  Open since May 30, 2026, with no comments or maintainer review.
  ([PR #2975](https://github.com/sipeed/picoclaw/pull/2975))

- **Issue #3164** – Process hooks crash on Android/Termux (filed 2026-06-23) – no response yet.
  ([Issue #3164](https://github.com/sipeed/picoclaw/issues/3164))

- **Issue #3159** – Repeated task execution (filed 2026-06-23) – no response yet.
  ([Issue #3159](https://github.com/sipeed/picoclaw/issues/3159))

- **PR #3118** – Remote Pico WebSocket mode for agent (open since June 12) – no maintainer activity.
  ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118))

- **PR #3115** – Fix inline data URL media extraction (open since June 12) – no maintainer comments.
  ([PR #3115](https://github.com/sipeed/picoclaw/pull/3115))

No issues older than a month remain open aside from #2975.

</details>