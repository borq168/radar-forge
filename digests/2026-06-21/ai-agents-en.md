# OpenClaw Ecosystem Digest 2026-06-21

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-21 00:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-21

## Today's Activity Brief
Today saw extremely high activity: 500 issues updated (480 open, 20 closed) and 500 PRs updated (471 open, 29 merged/closed) in the last 24 hours, with no new releases. The project continues to show intense community engagement and maintainer response, particularly around session state integrity, message delivery reliability, and performance regressions from the v2026.5.20 and v2026.6.x updates. The majority of top-commented issues involve crashes, data loss, or incorrect behavior in core session/transcript handling, compaction, subagent orchestration, and channel-specific bugs on Telegram, Matrix, and Codex.

## Releases
No new releases today. The latest stable remains at the version reported in the data (2026.6.x series).

## Project Progress
29 pull requests were merged or closed in the last 24 hours. Notable merged/closed items visible in the top data:

- **PR #68936 (CLOSED)** — Adds a PR review autofix pipeline using the Claude Agent SDK subscription plus a Windows daemon for gateway supervision.
  [https://github.com/openclaw/openclaw/pull/68936](https://github.com/openclaw/openclaw/pull/68936)

- **PR #94087 (CLOSED)** — Fixes heartbeat runner leaking private final replies to Telegram in `message_tool_only` mode.
  [https://github.com/openclaw/openclaw/pull/94087](https://github.com/openclaw/openclaw/pull/94087)

- **Issue #91949 (CLOSED)** — A bug where `invalid_request_error` from Anthropic killed the session instead of triggering fallback was closed, though no linked fix PR is visible in the top items.
  [https://github.com/openclaw/openclaw/issues/91949](https://github.com/openclaw/openclaw/issues/91949)

Additionally, many open PRs are in active states: several are marked "👀 ready for maintainer look" (e.g., #93087, #92957, #95431, #95432, #95393, #95278, #95226, #95132) or "🛠️ actively grinding" (e.g., #95267, #92946, #95424). The project is shipping fixes and features daily.

## Community Hot Topics
The most commented issues reveal three clusters of concern:

### Session state and message loss
- **#88838 (31 comments)** — Tracking core session/transcript SQLite migration via an accessor seam. The community is discussing a branch-by-abstraction approach to avoid a large, high-risk rewrite.
  [https://github.com/openclaw/openclaw/issues/88838](https://github.com/openclaw/openclaw/issues/88838)

- **#85333 (13 comments)** — `openclaw doctor --fix` 4–5x slower on 2026.5.20 due to a session snapshot path traversal bottleneck.
  [https://github.com/openclaw/openclaw/issues/85333](https://github.com/openclaw/openclaw/issues/85333)

- **#92201 (10 comments)** — Anthropic thinking signatures intermittently invalid on replay; recovery wrapper never fires.
  [https://github.com/openclaw/openclaw/issues/92201](https://github.com/openclaw/openclaw/issues/92201)

### Duplicate replies and cron failures
- **#86519 (10 comments)** — Agent repeats identical replies 2–10x on Telegram after the 5.20 update.
  [https://github.com/openclaw/openclaw/issues/86519](https://github.com/openclaw/openclaw/issues/86519)

- **#84583 (9 comments)** — Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` when user is actively chatting.
  [https://github.com/openclaw/openclaw/issues/84583](https://github.com/openclaw/openclaw/issues/84583)

### Compaction and subagent delivery
- **#92043 (8 comments)** — Compaction timeout is a single wall clock with no partial-progress reuse, causing identical failures on every turn.
  [https://github.com/openclaw/openclaw/issues/92043](https://github.com/openclaw/openclaw/issues/92043)

- **#92460 (8 comments)** — Isolated cron completion announcer drops `delivery.channel` on final controller return.
  [https://github.com/openclaw/openclaw/issues/92460](https://github.com/openclaw/openclaw/issues/92460)

Also active: **#91363 (6 comments, 4 👍)** — Isolated cron consistently fails with "LLM request failed" on model-call-started phase.
[https://github.com/openclaw/openclaw/issues/91363](https://github.com/openclaw/openclaw/issues/91363)

## Bugs & Stability
Multiple P1 regressions and crashers were reported or updated today. Severe issues include:

- **Telegram polling silent crash loop** — #93375: After transient network timeout, polling exits silently and health monitor cannot recover.
  [https://github.com/openclaw/openclaw/issues/93375](https://github.com/openclaw/openclaw/issues/93375)

- **Matrix channel dispatch broken** — #90325: TypeError reading `run` on undefined in v2026.6.1.
  [https://github.com/openclaw/openclaw/issues/90325](https://github.com/openclaw/openclaw/issues/90325)

- **Internal reasoning leakage** — #91804: Since 2026.6.5, agent thinking is exposed to users.
  [https://github.com/openclaw/openclaw/issues/91804](https://github.com/openclaw/openclaw/issues/91804)

- **Session-level model snapshot never refreshed** — #92415: After `/model` switch, `AgentSession.this.model` keeps a reference to the previous model.
  [https://github.com/openclaw/openclaw/issues/92415](https://github.com/openclaw/openclaw/issues/92415)

- **Subagent completion delivered as raw worker output** — #90840: Regression where child raw output goes to chat instead of parent summary.
  [https://github.com/openclaw/openclaw/issues/90840](https://github.com/openclaw/openclaw/issues/90840)

- **Codex PreToolUse relay stalls gateway** — #91009: CPU-bound `openclaw-hooks` processes consume 100% CPU.
  [https://github.com/openclaw/openclaw/issues/91009](https://github.com/openclaw/openclaw/issues/91009)

- **Active-memory circuit breaker pollutes main session** — #90082: Fallback prompt injected into main session.
  [https://github.com/openclaw/openclaw/issues/90082](https://github.com/openclaw/openclaw/issues/90082)

- **Gateway slow under multi-session load** — #92057: Timeouts and delays on multi-agent setups.
  [https://github.com/openclaw/openclaw/issues/92057](https://github.com/openclaw/openclaw/issues/92057)

Several fix PRs exist in the top list: #95414 (trailing spaces in JSON keys), #95328 (stale per-channel origin fields), #95356 (release stuck Telegram ingress claims), #95267 (Windows QMD backslash stripping), #95221 (EADDRNOTAVAIL mis-handling), #95424 (whitespace-padded cron keys), #95154 (unresumable notice for nondeliverable channels). The fix pipeline is active.

## Feature Request Clusters
Community feature requests focus on:

### Session/memory improvements
- **#90354** — Add bounded/validated append semantics for pre-compaction memory flush.
  [https://github.com/openclaw/openclaw/issues/90354](https://github.com/openclaw/openclaw/issues/90354)

- **#90916** — Topic-session families for one assistant across multiple context lanes.
  [https://github.com/openclaw/openclaw/issues/90916](https://github.com/openclaw/openclaw/issues/90916)

- **#92105** — Configurable page groups for memory-wiki with custom index directories and recursive scanning.
  [https://github.com/openclaw/openclaw/issues/92105](https://github.com/openclaw/openclaw/issues/92105)

- **#14785** — Reduce tool schema token overhead (~3,500 tok/session).
  [https://github.com/openclaw/openclaw/issues/14785](https://github.com/openclaw/openclaw/issues/14785)

### Provider and channel integration
- **#86655 (PR)** — Add `claude-bridge` app-server harness extension for Anthropic model parity.
  [https://github.com/openclaw/openclaw/pull/86655](https://github.com/openclaw/openclaw/pull/86655)

- **#94707 (PR)** — Add Slack relay mode for incoming messages via external router.
  [https://github.com/openclaw/openclaw/pull/94707](https://github.com/openclaw/openclaw/pull/94707)

- **#92957 (PR)** — Add `agents.setDefault` RPC method for changing default agent via gateway.
  [https://github.com/openclaw/openclaw/pull/92957](https://github.com/openclaw/openclaw/pull/92957)

- **#90703 (PR)** — Support compat reasoning levels for thinking `xhigh` with OpenAI-compatible models.
  [https://github.com/openclaw/openclaw/pull/90703](https://github.com/openclaw/openclaw/pull/90703)

### Kubernetes docs
- **#91455** — Documentation update for Kubernetes deployment.
  [https://github.com/openclaw/openclaw/issues/91455](https://github.com/openclaw/openclaw/issues/91455)

## User Feedback Summary
Users are reporting significant regressions and stability issues following the 2026.5.20 and 2026.6.x updates. Pain points include:

- **Performance regression** – `doctor --fix` slowdown (4–5x) and general slowdown under multi-session load.
- **Duplicate/stuck messages** – Repeated replies on Telegram, lost announcements on cron delivery, silent crash loops on polling, and channel deadlocks.
- **Session state corruption** – Stale session claims, unstuck recovery aborting long runs, model snapshot not updated after `/model`, subagent output delivered raw.
- **Compact/compaction problems** – Timeout wall clock, safeguard mode letting sessions grow to context ceiling, compaction failing silently on Codex.
- **Integration-specific issues** – Matrix broken, Telegram polling crashes, Google Chat tool-trace leaks, LiteLLM cache retention ignored, Zen provider missing model catalog.

Users express frustration but are actively contributing fixes (many PRs from community members). The high number of P1 issues indicates the project is in a phase of rapid iteration after a major release, with the community driving much of the stabilization.

## Backlog Watch
The following important issues and PRs have been open for extended periods or lack maintainer response:

- **#14785 (Feb 12)** — Tool schema token overhead reduction (3,500 tok/session). Labeled `needs-product-decision`.
  [https://github.com/openclaw/openclaw/issues/14785](https://github.com/openclaw/openclaw/issues/14785)

- **#85333 (May 22)** — Doctor performance regression. Still labeled `needs-maintainer-review` and `needs-product-decision`. No fix PR linked.
  [https://github.com/openclaw/openclaw/issues/85333](https://github.com/openclaw/openclaw/issues/85333)

- **#84583 (May 20)** — Cron announce delivery takeover error. Labeled `needs-product-decision` but has

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-21

## 1. Daily Cross-Project Overview

Today’s tracked projects show a wide disparity in activity volume, with OpenClaw dominating via 500+ issues and 500+ PRs updated, while Zeroclaw and NanoBot maintain moderate levels (50 and 18 PRs, respectively), and PicoClaw remains nearly static. No project issued a stable release, though PicoClaw published a nightly build. Across all four projects, reliability and channel-specific integration bugs are the most common themes, with concurrency, reasoning configuration, and performance optimization appearing as secondary cross-cutting concerns.

## 2. Activity Comparison

| Project | Issues Updated (Open/Closed) | PRs Updated (Open/Merged/Closed) | Releases | Activity Note |
|---------|------------------------------|----------------------------------|----------|---------------|
| **OpenClaw** | 500 (480 open, 20 closed) | 500 (471 open, 29 merged/closed) | None | Extremely high activity; dominated by regression reports (session state, compaction, channel-specific crashes) and active fix pipelines. |
| **NanoBot** | 5 (all open) | 18 (14 open, 4 merged/closed) | None | Moderate activity; focused on concurrency safety (`run()` hook race), performance caching (token estimation), and Telegram/WhatsApp fixes. |
| **Zeroclaw** | 50 (44 open, 6 closed) | 50 (40 open, 10 merged/closed) | None | Significant activity; foundational PRs for OIDC authentication and observability, plus merges for Docker CI, provider compatibility, and channel stability. |
| **PicoClaw** | 2 (both open, no new) | 1 (open, no merger) | Nightly v0.3.0-nightly.20260620 | Low activity; only stale updates on token consumption bug and WebSocket protocol request. |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated in 24 hours dwarfs Zeroclaw (50/50), NanoBot (5/18), and PicoClaw (2/1). This reflects a much larger community surface area and an intense phase of post-release stabilization.
- **Technical focus**: OpenClaw’s top issues concentrate on **session/transcript integrity**, **message duplication**, **compaction timeouts**, and **channel-specific regressions** (Telegram, Matrix, Codex). Peers address more architectural or feature-level items: Zeroclaw is progressing OIDC, observability, and skills platform work; NanoBot fixes concurrency and caching; PicoClaw remains on edge-device protocol questions.
- **Community surface area**: OpenClaw shows dozens of top-commented issues with maintainer interaction (e.g., #88838 branching strategy, #85333 performance bottleneck). Zeroclaw’s hot topics include RFC discussions (work lanes, OIDC). NanoBot has focused technical discussions on design trade-offs. PicoClaw has no recent maintainer replies.

## 4. Shared Technical Focus Areas

Requirements appearing across multiple projects today:

- **Channel-specific message delivery and reliability**
  - OpenClaw: duplicate replies on Telegram (#86519), Matrix channel dispatch broken (#90325), Telegram polling silent crash (#93375).
  - NanoBot: Telegram `sendRichMessage` support requested (#4422), error detection improvement (PR #4423).
  - Zeroclaw: Telegram voice cache fix (#7795), streaming card messages for QQ/DingTalk (#7531), cron job repeated launches (#6037).
  - PicoClaw: explicit turn completion signal for WebSocket clients (#2984).

- **Reasoning and thinking configuration**
  - OpenClaw: Anthropic thinking signatures intermittently invalid on replay (#92201).
  - NanoBot: automatic reasoning effort escalation (#4419), custom provider thinking parameters (#4429).
  - Zeroclaw: `reasoning_content` not passed back with Xiaomi thinking models (#6672).

- **Performance and resource optimization**
  - OpenClaw: `doctor --fix` slowdown (#85333), compaction timeout no partial reuse (#92043), gateway slow under multi-session load (#92057).
  - NanoBot: `estimate_prompt_tokens` redundant JSON serialization (#4420, PRs #4421, #4428).
  - Zeroclaw: default 32k context budget exceeded (#5808), memory emphasis degrading cron performance (#5844).
  - PicoClaw: configurable image compression for vision pipeline (PR #2964).

- **Memory/compaction/session state management**
  - OpenClaw: session SQLite migration (#88838), compaction safeguard mode (#92043), stale session model snapshot (#92415).
  - NanoBot: memory cursor monotonicity (PR #4256), dream cursor not advancing fix (PR #4321).
  - Zeroclaw: Dream Mode memory consolidation (#5849), memory emphasis too high (#5844).
  - PicoClaw: continuous token consumption when evolution enabled (#3012) — related to memory/state management.

- **Concurrency and race conditions**
  - OpenClaw: cron announce delivery takeover (#84583), session claim takeover (#86519 related).
  - NanoBot: `Nanobot.run()` concurrency race on hooks (#4408, PRs #4409, #4425).
  - Zeroclaw: cron jobs launched repeatedly while still running (#6037).

## 5. Differentiation Analysis

- **Feature focus**: OpenClaw is the most broadly integrated (Telegram, Matrix, Codex, Google Chat) with heavy emphasis on core session integrity and compaction. Zeroclaw is investing in **security** (OIDC, local auth) and **observability** (OTel, trace ID). NanoBot focuses on **convenience and rapid prototyping** (Python SDK expansion, CLI TUI, reasoning effort presets). PicoClaw is unique in targeting **edge/embedded devices** (image compression, evolution mode, WebSocket protocol for lightweight clients).

- **Target users**: OpenClaw addresses full-featured agent developers running multiple channels and long-running sessions. Zeroclaw leans toward enterprise and security-conscious deployments. NanoBot seems attractive to individual developers and small bot operators. PicoClaw targets users with limited compute (esp. Sipeed/ESP32 ecosystem).

- **Technical architecture**: OpenClaw and Zeroclaw share a similar service- daemon pattern, but Zeroclaw adds a skills platform and explicit authentication layers. NanoBot uses a lighter-weight, hook-based concurrency model with contextvars. PicoClaw emphasizes a minimal footprint and nightly rolling releases.

## 6. Community Activity Notes

Based solely on today’s counts and releases, activity separates into four tiers:

- **Tier 1 (Very high)**: OpenClaw — 500 issues, 500 PRs updated.
- **Tier 2 (Moderate)**: Zeroclaw — 50 issues, 50 PRs updated.
- **Tier 3 (Low)**: NanoBot — 5 issues, 18 PRs updated.
- **Tier 4 (Very low)**: PicoClaw — 2 issues, 1 PR updated (one nightly release).

No project issued a stable release. PicoClaw’s nightly is the only new artifact.

## 7. Evidence-Backed Observations

1. **Post-release stabilization is the dominant activity pattern**: OpenClaw’s top-commented issues are all regressions from the v2026.5.20 and 2026.6.x updates. Zeroclaw’s merged PRs today include multiple fixes for bugs that emerged after recent versions (streaming decode hang, infinite tool-call loop, Telegram cache violation). Both projects show high fix throughput.

2. **Channel-specific reliability is a cross-project pain point**: 6 of the 7 most-commented OpenClaw issues involve Telegram, Matrix, or Codex failures. NanoBot has two Telegram-related items today (rich message request, error detection PR). Zeroclaw has a Telegram voice cache fix and multiple channel enhancement requests. PicoClaw’s only feature request is a protocol signal for WebSocket clients.

3. **Reasoning/thinking configuration is an emerging unmet need**: Three of four projects have open requests or bugs around reasoning content forwarding or configuration (OpenClaw #92201, NanoBot #4419/#4429, Zeroclaw #6672). This suggests a gap in the combined ecosystem’s handling of model-specific reasoning parameters.

4. **Concurrency and racing bugs appear in both OpenClaw and NanoBot**: While the scale differs, both projects have issues where concurrent operations (cron vs. user chat, multiple `run()` calls) cause session takeovers, duplicate messages, or hook corruption. This is a systemic risk for multi-session agent frameworks.

5. **Performance optimization requests are concrete and user-reported**: OpenClaw’s `doctor --fix` slowdown, NanoBot’s token estimation caching, and Zeroclaw’s context budget exceedance are all cited with specific measurements (e.g., 4–5× slower, 3,500 tok/session overhead). These are not theoretical — users are hitting hard limits in production.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-21

## 1. Today's Activity Brief
A total of 5 open issues and 18 pull requests (14 open, 4 merged/closed) were updated in the last 24 hours. No new releases were tagged. Notable activity clusters around concurrency safety in `Nanobot.run()` (issue #4408 and related PRs #4409, #4425) and performance caching for token estimation (issue #4420, PRs #4421, #4428). Two bugs in memory cursor and MCP server shutdown were fixed and closed. The community submitted several feature requests for reasoning effort configuration, Telegram `sendRichMessage` support, and subagent result aggregation.

## 2. Releases
*No new releases. Omitted.*

## 3. Project Progress
Four PRs were closed (presumably merged) in the last 24 hours:
- **#4303** (`fix(mcp): close tracked generators in _close_server to prevent GC crash`) – Closed. Prevents a `RuntimeError` when a `streamableHttp` MCP server session terminates and reconnects.
- **#4321** (`fix: advance dream cursor when Dream is disabled to prevent prompt bloat`) – Closed. Ensures the dream cursor is advanced even when dream is disabled, avoiding duplication of history entries in prompts.
- **#4426** (`feat(channels): add iMessage channel via Photon Spectrum`) – Closed. Adds an iMessage channel using a sidecar Node.js process (similar pattern to WhatsApp bridge).
- **#4427** (`fix(webui): prevent iOS Safari auto-zoom on textarea focus`) – Closed. Increases mobile textarea font-size to 16px to stop automatic page zoom on iOS.

Remaining open PRs include fixes for concurrency hooks (#4409, #4425), performance improvements (#4421, #4428, #2428?), memory cursor monotonicity (#4256), WhatsApp LID mapping (#4407), Telegram error detection (#4423), and several feature additions (onboarding wizard #4395, subagent aggregation #4414, cron model presets #4416, archive provenance context #4424, CLI TUI #4329, Python SDK expansion #4296).

## 4. Community Hot Topics
- **Issue #4408** (`Nanobot.run()` per-run hooks not concurrency-safe) – 2 comments. The bug describes a race condition where concurrent `run()` calls overwrite each other’s hook lists. Two fix PRs emerged: #4409 (draft, passes hooks as arguments) and #4425 (uses `contextvars`). The discussion shows careful evaluation of design trade-offs (mutating shared state vs. method signature change).
- **Issue #4420** (performance: `estimate_prompt_tokens` re-encodes tool definitions) – 1 comment. User reports noticeable latency in their nanobee project. Two independent PRs (#4421, #4428) both propose caching the serialized JSON or encoding.
- **Issue #4419** (automatic reasoning effort escalation) – 1 comment. User requests a multi-level reasoning effort configuration for models that support it (e.g., OpenAI, DeepSeek). No PR yet.
- **Issue #4422** (Telegram Bot API `sendRichMessage` support) – 0 comments but directly followed by PR #4423 (fix for rich capability error detection) which is open.

## 5. Bugs & Stability
| Severity | Bug | Status | Details |
|----------|-----|--------|---------|
| **High** | `Nanobot.run()` concurrency race on `_extra_hooks` (issue #4408) | Open | Two fix PRs in review (#4409, #4425). Can cause per-run hooks to be lost or mixed across sessions. |
| **Medium** | `estimate_prompt_tokens` redundant JSON serialization (issue #4420) | Open | Performance regression; duplicates `json.dumps(tools)` on every call (up to 3× per turn). PRs #4421 and #4428 provide solutions. |
| **Low** | Telegram `_is_rich_capability_error` over-matches transient errors (PR #4423 description) | Open (PR) | Previously set permanent disable of rich send on `chat not found` errors. PR narrows matching. |
| **Fixed** | MCP generator crash during reconnect (PR #4303) | Closed | Caused `RuntimeError` in asyncio cancel scope. Fix merges tracked generators into close. |
| **Fixed** | Dream cursor not advancing when dream disabled (PR #4321) | Closed | Led to prompt history duplication and token bloat. |

No new bugs were reported as closed without a fix.

## 6. Feature Request Clusters
- **Reasoning / Thinking Effort Configuration**
  - #4429: Allow custom providers to set non-standard thinking parameters (e.g., VolcEngine `thinking` object).
  - #4419: Automatic difficulty escalation with default and escalated levels (works with `reasoningEffort`).
  No corresponding PRs yet, but the two requests directly complement each other.

- **Telegram Rich Message Support**
  - #4422: Request to support `sendRichMessage` for tables, task lists, collapsible details, math blocks.
  - PR #4423 (open) refines error detection for rich capability, indirectly preparing for the feature.

- **Subagent Aggregation**
  - PR #4414 (open): Adds `subagentResultMode` with an `aggregated` option to buffer results and emit one combined message after a session task set completes.

- **Cron Job Enhancements**
  - PR #4416 (open): Allows cron jobs to specify a `model_preset` for per-run provider/model overrides without mutating the live agent model.

- **Onboarding / CLI Experience**
  - PR #4395 (open): Improves `nanobot onboard` wizard with TTY detection, JetBrains-inspired palette, and edit-history preservation.
  - PR #4329 (open): Adds inline TUI for `nanobot agent` command, with fallback to classic mode.

## 7. User Feedback Summary
- **Concurrency safety pain point**: User @waelantar found that repeated concurrent `run()` calls with different session keys can clobber hook lists. This points to real-world usage where multiple sessions are handled by a single bot instance.
- **Performance degradation**: User @codeLong1024 reports noticeable latency in their nanobee project due to redundant token re‑encoding. They explicitly request caching at the tiktoken level.
- **Provider flexibility gaps**: User @gkd2323c cannot use thinking mode with custom providers (e.g., Doubao) because nanobot’s reasoning parameter is hard‑coded to OpenAI’s format.
- **Telegram feature gap**: User @zpljd258 wants native rich message rendering (tables, math) not supported by current HTML parse mode.
- **WhatsApp onboarding friction**: PR #4407 author @franciscomaestre notes that the first message from a WhatsApp LID contact is not resolved to a phone number, affecting `allowFrom` filtering. This is a usability issue for production bots.

## 8. Backlog Watch
- **PR #4256** (`fix(memory): keep history cursor monotonic`) – Created 2026-06-08, still open after 13 days. Addresses cursor allocation when the history is compacted or stale. Likely requires maintainer review to avoid integration conflicts with other memory changes.
- **PR #4296** (`feat(sdk): expand Python SDK runtime controls`) – Created 2026-06-11, open for 10 days. Adds `RunResult`, session clients, and richer API. A significant SDK extension that may need careful code review.
- **PR #4329** (`feat(cli): add inline TUI for nanobot agent`) – Created 2026-06-13, open for 8 days. Large TUI implementation; no maintainer comments visible.
- **Issue #4408** (concurrency bug) – While there are active fix PRs, the core issue remains unresolved. Both draft #4409 and new #4425 need final review.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-21

## 1. Today's Activity Brief

In the last 24 hours, 50 issues and 50 pull requests were updated. Of those issues, 44 remain open and 6 were closed; 40 PRs are open and 10 were merged or closed. No new releases were published. Notable activity includes the opening of foundational PRs for OIDC authentication (#8063) and enhanced observability (#8065, #8066), continued work on the Dream Mode memory consolidation feature (#5849), and a batch of bug-fix merges across Docker CI, provider compatibility, and channel stability. The project’s v0.9.0 auth tracker (#7432) now lists 131 open items, and the v0.8.2 skills platform tracker (#7852) remains active.

## 2. Releases

None.

## 3. Project Progress

The following PRs were merged or closed today, reflecting concrete fixes and minor improvements:

| PR | Type | Summary |
|----|------|---------|
| [#7932](https://github.com/zeroclaw-labs/zeroclaw/pull/7932) | fix(docker) | Corrected Node 24 digest pins in Dockerfile and Debian Dockerfile |
| [#8036](https://github.com/zeroclaw-labs/zeroclaw/pull/8036) | test(runtime) | Pinned system prompt in cache-hit test to eliminate date-based flake |
| [#7616](https://github.com/zeroclaw-labs/zeroclaw/pull/7616) | fix(providers) | Stripped assistant reasoning content on outbound replay for Groq |
| [#7877](https://github.com/zeroclaw-labs/zeroclaw/issues/7877) | bug(tool) | External coding tools now resolve relative `working_directory` from workspace instead of daemon cwd (closed) |
| [#7795](https://github.com/zeroclaw-labs/zeroclaw/issues/7795) | bug(channel) | Telegram `static_voice_peers` cache SSOT violation fixed (closed) |
| [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) | bug(provider) | Streaming decode error hang from custom HTTP provider resolved (closed) |
| [#5883](https://github.com/zeroclaw-labs/zeroclaw/issues/5883) | bug(daemon) | macOS service start failure fixed (closed) |
| [#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686) | bug(channel) | QQ message command documentation gap addressed (closed) |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | bug(agent) | Infinite tool-call loop on Termux/Android fixed (closed) |

Several open PRs are actively advancing features:

- [#8004](https://github.com/zeroclaw-labs/zeroclaw/pull/8004) makes cost budget configuration reloadable instead of frozen at boot.
- [#8001](https://github.com/zeroclaw-labs/zeroclaw/pull/8001) introduces the `SopRunStore` trait + in-memory backend for durable run-state storage.
- [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) lands the foundational `Principal` type and `AuthProvider` seam (first deliverable of RFC #7141).
- [#8065](https://github.com/zeroclaw-labs/zeroclaw/pull/8065) adds `trace_id` correlation and per-call cost recording to log events.
- [#8066](https://github.com/zeroclaw-labs/zeroclaw/pull/8066) adds opt-in LLM request payload capture (default off) to the observability surface.

## 4. Community Hot Topics

Issues with the highest comment activity reflect a mix of feature requests, governance RFCs, and user-facing bugs:

| Issue | Comments | Summary |
|-------|----------|---------|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | 18 | **Dream Mode** – periodic memory consolidation and reflective learning (enhancement, in-progress) |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 13 | User reports the agent doesn’t know it can add cron jobs (bug, needs repro) |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 11 | **RFC: Work Lanes, Board Automation, and Label Cleanup** – accepted, rollout in progress |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 6 | **OIDC Authentication Provider support** – tracking issue for v0.9.0 security work |
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 6 | Too much emphasis on memory degrades cron-job performance (p1 bug, accepted) |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | 5 | `reasoning_content` not passed back in tool-call loops with Xiaomi thinking models (S0 severity, blocked) |
| [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) | 5 | Make channel reply-intent precheck configurable (light model, timeout, timing log) |

The community is actively engaged in shaping the v0.9.0 security architecture (OIDC, work lanes) and pushing for improvements to memory handling, cron awareness, and reasoning model support.

## 5. Bugs & Stability

### New high-severity bugs reported today

- [#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) – **ReadSkillTool looks in `data_dir` instead of agent workspace** (S2). When the agent calls `read_skill("<name>")` in compact skills mode, the tool returns "Unknown skill" because skills reside in the agent workspace, not the data directory. No fix PR yet.

- [#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) – **Zerocode keybinds conflict with OS globals on macOS** (S2). Default keybind `ctrl+up` conflicts with macOS system global keybind; discussion with maintainer surfaced past issues with terminal-only forbidden binds. No fix PR yet.

### Ongoing high-severity bugs with accepted status

- [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) – Memory emphasis too high (p1, S2) – no open fix PR.
- [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) – Default 32k context budget exceeded by system prompt + tool definitions on iteration 1 (p1, S1) – no open fix PR.
- [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) – Cron jobs launched repeatedly while still running (p1, S1) – no open fix PR.
- [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) – `reasoning_content` not forwarded with Xiaomi thinking models (S0, blocked/needs author action).

### Fix PRs in progress for other bugs

- [#7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973) – Self-contained context-compression summary provider (fixes #7964).
- [#7921](https://github.com/zeroclaw-labs/zeroclaw/pull/7921) – Deterministic same-timestamp pagination via byte-offset cursor.
- [#8004](https://github.com/zeroclaw-labs/zeroclaw/pull/8004) – Makes cost budget reloadable instead of frozen at boot.
- [#8014](https://github.com/zeroclaw-labs/zeroclaw/pull/8014) – Stops duplicating streamed narration before native tool calls.
- [#8048](https://github.com/zeroclaw-labs/zeroclaw/pull/8048) – Keeps tool-result content under context pressure and honors `history_pruning` config.

## 6. Feature Request Clusters

### Authentication & Security
Multiple requests center on pluggable authentication:
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) – OIDC Auth Provider (RFC, accepted, tracking for v0.9.0)
- [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) – Local username/password AuthProvider (child of #7141)
- PR [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) implements the `Principal` type and `AuthProvider` seam – the first concrete deliverable.

### Observability & Monitoring
A strong push for richer instrumentation:
- [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) – RFC: Structured Observability with OTel trace correlation and bridge refactoring (in-progress)
- [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) – Turn-level OTel trace correlation (accepted)
- PRs [#8065](https://github.com/zeroclaw-labs/zeroclaw/pull/8065) and [#8066](https://github.com/zeroclaw-labs/zeroclaw/pull/8066) implement trace_id correlation, per-call cost, and opt-in LLM request payload capture.

### Skills Platform
- [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852) – Tracker for v0.8.2 skills platform (registries, effective-skill resolution, audit visibility)
- [#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) – Request to include ZeroClaw docs inside Docker images so agents can answer usage questions (accepted, p3)
- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) – Opt-in LSP support for coding workflows (RFC, blocked)

### Channel & Messaging Enhancements
- [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) – Streaming card messages for QQ/DingTalk/WeChat/Feishu (accepted, p2)
- [#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) – Voice satellite (ESP32/smartphone/PWA) + approval buttons (accepted, p3)
- [#605

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-21

## Today's Activity Brief

In the past 24 hours, PicoClaw saw updates to 2 open issues and 1 open pull request, with no new issues or PRs created. A single nightly release (v0.3.0-nightly.20260620.287853ab) was published, containing changes from the `main` branch since the last stable v0.3.0 tag. No items were closed or merged today. The repository remains stable in terms of activity volume, though several tickets have been flagged as stale due to lack of recent maintainer responses.

## Releases

**Nightly Build (2026-06-20)**
– Version: `v0.3.0-nightly.20260620.287853ab`
– Description: Automated unstable build with changes merged from `v0.3.0` to `main`.
– Full Changelog: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
– No breaking changes or migration notes were documented in the release.

## Project Progress

**No pull requests were merged or closed today.** The only PR updated in the last 24h is still open:

- [#2964 [Open] Feat/image input compression](https://github.com/sipeed/picoclaw/pull/2964) – Configurable inbound image compression for the vision pipeline; remains in review.

No feature advancement or bug fix was committed to the main branch today.

## Community Hot Topics

The two updated issues continue to attract attention:

- [#3012 [Open] [BUG] Continuous consumption of tokens every minute when evolution is enabled](https://github.com/sipeed/picoclaw/issues/3012)
  *4 comments, 0 reactions*
  User reports persistent token usage after enabling evolution mode (Draft, Code Path Trigger). The issue is stale (last maintainer reply unknown), affecting v0.2.9 on FreeBSD with MiniMax.

- [#2984 [Open] [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/issues/2984)
  *3 comments, 2 thumbs up*
  A feature request asking for a deterministic “turn complete” event for external WebSocket clients. The current event set (`message.create`, `message.update`, `typing.stop`) lacks an explicit signal, making it hard to know when the agent has finished processing.

The PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) has no comments but touches on a practical need – controlling image pre-processing before model payloads.

## Bugs & Stability

Only one bug was reported in the tracked issues:

- [#3012 – Continuous token consumption with evolution enabled](https://github.com/sipeed/picoclaw/issues/3012)
  **Severity:** High (unnecessary token spend with potential cost implications)
  **Status:** Open, stale (no response from maintainers since creation)
  **Fix PR:** None currently linked.

No crashes, regressions, or new bugs were introduced today.

## Feature Request Clusters

Two independent feature areas are visible in today’s data:

1. **Protocol completeness** – [#2984](https://github.com/sipeed/picoclaw/issues/2984) requests an explicit “turn completion” signal for WebSocket clients. This would benefit external tool integrations that need reliable agent turn tracking.
2. **Vision pipeline tuning** – [#2964](https://github.com/sipeed/picoclaw/pull/2964) proposes a configurable image compression stage before model inference. This complements existing `max_media_size` limits and adds multi-level compression policy.

No other clusters emerged from today’s activity.

## User Feedback Summary

From the open issues:

- A user (xpader) running v0.2.9 on FreeBSD with MiniMax is experiencing **unexpected token consumption** every minute when evolution is enabled, creating a cost and usability concern.
- Another user (Brook-sys) highlights a **lack of deterministic turn completion** in the WebSocket protocol, making integration with external clients less reliable.
- The image compression PR (by afjcjsbx) addresses a **need for finer-grained control over inbound media size/quality** beyond a single `max_media_size` limit – particularly important for high-resolution images from channels.

No positive feedback or satisfaction signals were recorded today.

## Backlog Watch

All three updated items have been open for 16–24 days and are marked as stale. None show recent maintainer comments:

| Ticket | Type | Created | Last Updated | Days Open |
|--------|------|---------|--------------|-----------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Bug | 2026-06-05 | 2026-06-20 | 16 |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Feature | 2026-06-02 | 2026-06-20 | 19 |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | PR | 2026-05-28 | 2026-06-20 | 24 |

These items represent both a significant bug and two requested improvements. Maintainer attention is needed to avoid further stagnation, particularly for the token consumption bug which can directly affect users’ operational costs.

</details>