# OpenClaw Ecosystem Digest 2026-06-15

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-15 02:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-15

## Today's Activity Brief

In the last 24 hours, 500 issues were updated (413 open/active, 87 closed) alongside 500 pull requests (418 open, 82 merged or closed). One new beta release was published: `v2026.6.8-beta.1`, focused on richer Telegram and WhatsApp delivery semantics. Bug reports continue to cluster around session state integrity, message loss, and auth provider edge cases — in particular, the Codex integration remains a recurring source of embedded-run stalls and silent truncation reports. Multiple P1 and P0 issues remain open with no linked fix PR, suggesting maintainer bandwidth is a bottleneck for several high-impact failure modes.

## Releases

**v2026.6.8-beta.1** — openclaw 2026.6.8-beta.1

The release notes describe improvements to Telegram and WhatsApp channel delivery:
- Telegram can now send structured rich text with tables, lists, and expandable blockquotes.
- Prompt-preserving CLI backend delivery was added.
- Retired native draft migration and safer rich-media boundaries are included.
- WhatsApp channel delivery became "richer and less brittle".

No breaking changes or explicit migration notes were published in the release summary. The full changelog and any upgrade instructions would need to be consulted at the release page.

## Project Progress

Several PRs were merged or closed in the last 24 hours:

- PR #93132 (closed): Fix resolving gateway token `SecretRef` against service environment during `doctor service drift` checks. Adds regression coverage for `OPENCLAW_GATEWAY_TOKEN` loaded from the gateway service file.
- PR #91076 (closed): Fix a 2026.6.1 regression where embedded Codex turns with a completed final `agentMessage` but an orphan native `tool.call` were incorrectly marked `promptError`, suppressing channel delivery of the composed assistant reply.

Key closed issues (with fix merged or resolved via other means):
- Issue #80380: Updating OpenClaw to use `gemini-3.1-flash-lite` instead of the preview variant (feature request, closed after release). 14 comments, 4 👍.
- Issue #81978: Fix for a Discord non-main session remaining marked `processing` after `run:completed`, delaying typing (closed, 7 comments).
- Issue #84137: Codex app-server post-tool raw assistant completion semantics evaluation (closed, 6 comments).
- Issue #83425: xAI OAuth `redirect_uri does not match any registered URI` bug (closed, 6 comments).
- Issue #85192: DeepSeek V4 `isSignedThinkingBlock` missing unsigned thinking blocks, causing reasoning-only retry failures (closed, 5 comments).
- Issue #91016: DeepSeek Prompt Cache complete invalidation after upgrade to 2026.6.1, causing significant cost increase (closed, 5 comments, 5 👍).
- Issue #90886: Gateway hangs at startup when a configured provider lacks credentials (closed, 6 comments).

Several P1-P2 PRs remain open with active work (e.g., #91988 preserving `BOOTSTRAP.md` in preseeded workspaces, #88908 forcing gateway exit on zombie shutdown processes, PR #85598 fixing memory-core dreaming private workspace boundary violations).

## Community Hot Topics

The following issues and PRs attracted the most community engagement (by comment count and reactions):

- [#80380](https://github.com/openclaw/openclaw/issues/80380) (CLOSED) — Updating to `gemini-3.1-flash-lite` GA. 14 comments, 4 👍. The underlying need: users want the project to track upstream model deprecation and availability quickly, with minimal manual config changes.

- [#84516](https://github.com/openclaw/openclaw/issues/84516) (OPEN, P1) — Codex app-server silently truncating long agent replies at ~1000-1100 chars with no error. 11 comments, 2 👍. The deep concern: headless agent replies lose content invisibly, undermining trust in the system for production use. No fix PR linked.

- [#85103](https://github.com/openclaw/openclaw/issues/85103) (OPEN, P1) — Model fallback chain not triggered on provider-wide quota exhaustion. 9 comments, 1 👍. Community concern: configured fallback chains are ineffective when the primary provider hits a global rate limit, meaning high-availability deployments are not actually available.

- [#85030](https://github.com/openclaw/openclaw/issues/85030) (OPEN, P1) — MCP tools not injected into subagent (`sessions_spawn`) sessions despite documented configuration. 8 comments, 3 👍. This highlights a gap between documented MCP exposure mechanisms and actual runtime behavior for subagent tool injection.

- [#83184](https://github.com/openclaw/openclaw/issues/83184) (OPEN, P1) — Heartbeat-driven agent replies leaving `pendingFinalDelivery` stuck, blocking subsequent heartbeats. 8 comments, 3 👍. This affects agents that rely on heartbeat-based proactive engagement (e.g., cron-driven check-ins).

- [#84903](https://github.com/openclaw/openclaw/issues/84903) (OPEN, P1) — Single stalled agent session blocking the entire Gateway event loop (session isolation failure). 8 comments, 2 👍. The underlying need: multi-agent deployments require true session-level fault isolation.

- [#88951](https://github.com/openclaw/openclaw/issues/88951) (OPEN, P1) — Duplicate message content after upgrading from 2026.5.4 to 2026.5.27. 8 comments, 1 👍. A regression affecting basic chat reliability.

- [#84882](https://github.com/openclaw/openclaw/issues/84882) (OPEN, P0) — memory-core Dreaming `normalized recall artifacts` silently deletes daily memory files (`memory/YYYY-MM-DD.md`). 6 comments, 2 👍. This is the highest-severity open bug today, with potential for permanent data loss. No fix PR linked.

- [#91016](https://github.com/openclaw/openclaw/issues/91016) (CLOSED, P1) — DeepSeek Prompt Cache failure after upgrade, costing approximately $6/hour. 5 comments, 5 👍. Significant user financial pain point, now closed — presumably with a fix in 2026.6.8-beta.1 or via a separate patch.

- [#84569](https://github.com/openclaw/openclaw/issues/84569) (OPEN, P1) — WhatsApp session stalls on long model calls, with reply never delivered. 6 comments, 3 👍. Linked PR open.

- [#77467](https://github.com/openclaw/openclaw/issues/77467) (OPEN, P1) — MiniMax Portal OAuth token cannot auto-refresh (refreshOAuth not implemented). 5 comments, 3 👍. Affects users relying on MiniMax as their primary model provider.

## Bugs & Stability

**P0 (Data Loss)**:
- [#84882](https://github.com/openclaw/openclaw/issues/84882) — memory-core Dreaming pipeline silently deletes daily memory files (`memory/YYYY-MM-DD.md`). No fix PR linked. Impact: `data-loss`.

**P1 (Message Loss / Session State / Crash Loop)**:
- [#84516](https://github.com/openclaw/openclaw/issues/84516) — Codex app-server: long agent replies silently truncated at ~1000-1100 chars (no error). No fix PR linked.
- [#85103](https://github.com/openclaw/openclaw/issues/85103) — Model fallback chain not triggered on provider-wide quota exhaustion. No fix PR linked.
- [#85251](https://github.com/openclaw/openclaw/issues/85251) — Codex app-server emits `turn/started` then goes silent; embedded run wedges for full stuck-session recovery window (360s). No fix PR linked.
- [#85126](https://github.com/openclaw/openclaw/issues/85126) — Control UI (TUI/WebChat) sessions auto-select wrong `authProfileOverride` at creation. No fix PR linked.
- [#84903](https://github.com/openclaw/openclaw/issues/84903) — Single stalled agent session blocks the entire Gateway event loop (isolation failure). No fix PR linked.
- [#88951](https://github.com/openclaw/openclaw/issues/88951) — Duplicate message content after upgrade to 2026.5.27. No fix PR linked.
- [#83959](https://github.com/openclaw/openclaw/issues/83959) — Codex app-server startup retries can exhaust before replacement server is ready. No fix PR linked.
- [#84536](https://github.com/openclaw/openclaw/issues/84536) — Preemptive context overflow silently kills embedded sessions without notifying users. No fix PR linked.
- [#84771](https://github.com/openclaw/openclaw/issues/84771) — Event loop saturation during startup: synchronous model-prewarm and session-locks block event loop for 28-64 seconds. No fix PR linked.
- [#85246](https://github.com/openclaw/openclaw/issues/85246) — UI Update button breaks Gateway when npm global + launchd (handoff deadlock). No fix PR linked.
- [#85030](https://github.com/openclaw/openclaw/issues/85030) — MCP tools not injected into subagent sessions. No fix PR linked.
- [#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron agent jobs silently time out during sustained LLM API outages instead of fast-failing (open since March). No fix PR linked.
- [#84569](https://github.com/openclaw/openclaw/issues/84569) — WhatsApp session stalls on long model calls. Linked PR open.
- [#84976](https://github.com/openclaw/openclaw/issues/84976) — Scheduled non-codex cron runs get re-executed on the codex primary model, duplicating side effects. No fix PR linked.
- [#92460](https://github.com/openclaw/openclaw/issues/92460) — Isolated cron completion announcer drops explicit `delivery.channel` on final controller return. No fix PR linked.
- [#83184](https://github.com/openclaw/openclaw/issues/83184) — Heartbeat-driven agent replies leave `pendingFinalDelivery` stuck, blocking subsequent heartbeats. No fix PR linked.

**P1 (Auth Provider / Crash Loop)**:
- [#90886](https://github.com/openclaw/openclaw/issues/90886) (CLOSED) — Gateway hangs at startup when a declared provider lacks credentials (regression).
- [#82662](https://github.com/openclaw/openclaw/issues/82662) — Isolated cron agentTurn fails with "setup timed out before runner start" — all fallback models exhausted. No fix PR linked.
- [#85027](https://github.com/openclaw/openclaw/issues/85027) — 2026.5.6 → 2026.5.19 upgrade left macOS LaunchAgent Gateway unrecoverable; Time Machine restore required. No fix PR linked.
- [#81917](https://github.com/openclaw/openclaw/issues/81917) — `openclaw dashboard` logs bare URL despite token auto-auth, can hang on Linux/KDE browser launch. No fix PR linked.

Several of these bugs are marked with the `clawsweeper:needs-maintainer-review` label, indicating they have been triaged but not yet assigned or scheduled for fix.

## Feature Request Clusters

**Memory and Retrieval Improvements**:
- [#44395](https://github.com/openclaw/openclaw/issues/44395) (OPEN, P2) — Proposes heading-aware chunking + entity extraction for memory search, replacing the current fixed-size character-count accumulation. Open since March.
- [#92105](https://github.com/openclaw/openclaw/issues/92105) (OPEN, P3) — Configurable page groups for memory-wiki with custom index directories and recursive scanning.
- [#56781](https://github.com/openclaw/openclaw/issues/56781) (OPEN, P2) — Request for fallback model chain for compaction and LCM summaryModel (analogous to agent chat fallback chains).

**Developer Experience and Tooling**:
- [#81913](https://github.com/openclaw/openclaw/issues/81913) (OPEN, P2) — Expose stable plugin SDK surface for installed skill workflows, so plugins can inspect SKILL.md metadata, resolve paths, and read config without broad `src/agents/*` exposure.
- [#74077](https://github.com/openclaw/openclaw/issues/74077) (OPEN, P3, stale) — Add a slash command to set preview streaming mode for the current chat/session without editing gateway config.
- [#85332](https://github.com/openclaw/openclaw/issues/85332) (OPEN, P3) — Add a slim Docker image mode with configurable APT package installation during container startup.

**Observability and Analytics**:
- [#85461](https://github.com/openclaw/openclaw/issues/85461) (OPEN, P2) — Capture image-generation provider usage metadata (cost, tokens) where the upstream response includes it.

**Channel and Delivery Enhancements**:
- [#91886](https://github.com/openclaw/openclaw/issues/91886) (CLOSED

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-15

## 1. Daily Cross-Project Overview

Today's data shows a significant activity gap between OpenClaw and its peers: OpenClaw processed 500+ issues and PRs, published a beta release, and addressed several high-severity regressions, yet also carries the largest backlog of unaddressed P0/P1 bugs. NanoBot merged 27 PRs across documentation, WebUI, and agent loop improvements but published no release. Zeroclaw processed 50 PRs and closed 28 issues, primarily driven by a single contributor’s batch of SMS, smart home, and model provider integrations. PicoClaw had the quietest day with 5 issues and 9 PRs, focusing on small error-handling fixes and one nightly build. Maintainer bandwidth appears to be the binding constraint across all projects, not code quality or community interest.

## 2. Activity Comparison

| Project | Issues Updated (Open/Closed) | PRs Updated (Open/Merged/Closed) | Release Published | Notable Activity |
|---------|------------------------------|----------------------------------|-------------------|------------------|
| **OpenClaw** | 500 (413 open, 87 closed) | 500 (418 open, 82 merged/closed) | v2026.6.8-beta.1 | Highest volume; 10+ P1 bugs with no fix PR; memory-core P0 data loss bug remains open |
| **NanoBot** | 5 (2 open, 3 closed) | 45 (18 open, 27 merged/closed) | None | Large batch of merged PRs covering docs, WebUI, agent loop, config validation |
| **Zeroclaw** | 42 (14 open, 28 closed) | 50 (47 open, 3 merged/closed) | None | Single contributor closed 14 feature integrations; delegate bugs remain S1 |
| **PicoClaw** | 5 (4 open, 1 closed) | 9 (4 open, 5 merged/closed) | v0.2.9-nightly.20260615 | Small day; 3 merged error-handling fixes; 3 high-severity bugs with no fix |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw’s 1,000+ updated items (issues + PRs) is 10x Zeroclaw, 20x NanoBot, and 100x PicoClaw by raw count. This reflects OpenClaw’s larger userbase and longer history, but also a higher bug-to-fix ratio: many P1 issues lack linked fix PRs, suggesting maintainers are overwhelmed.

**Technical focus differences:** OpenClaw’s bug reports cluster around session state integrity, message loss, auth provider edge cases, and Codex integration stalls. Peer projects face similar categories but at lower severity: NanoBot’s bugs are about token usage reporting and image fallback leaks; Zeroclaw’s are about delegate mode and config edge cases; PicoClaw’s are about tool failures and MCP flag parsing.

**Community surface area:** OpenClaw has 14 issues with >5 comments and >2 reactions. Zeroclaw has 2 such issues. NanoBot and PicoClaw have none. This suggests OpenClaw’s community is both larger and more vocal about unresolved problems. However, the engagement on Zeroclaw’s closed feature integrations (all by one author) indicates a different pattern: low discussion but high throughput for contributed code.

**Release cadence:** OpenClaw published a beta today; PicoClaw published a nightly; NanoBot and Zeroclaw published nothing. OpenClaw’s beta addresses Telegram/WhatsApp delivery and several regressions, but the release notes do not indicate fixes for the P0 memory deletion or the P1 Codex truncation bugs.

## 4. Shared Technical Focus Areas

**MCP tool injection to sub-agents/delegates** appears in two projects:

- **OpenClaw**: Issue #85030 (P1, open) — MCP tools not injected into subagent sessions despite documented configuration. No fix PR.
- **Zeroclaw**: PR #7608 (open) — Exposes deferred MCP tools to delegates, fixing issue #6136.
- **PicoClaw**: No direct equivalent, but PR #3120 adds `RegisterChannelSettings` for third-party channel registration without forking — a related extensibility pattern.

**Sub-agent/delegate session isolation** is a shared concern:

- **OpenClaw**: Issue #84903 (P1) — Single stalled agent session blocks entire Gateway event loop. No fix PR.
- **Zeroclaw**: Issue #7470 (S1) — Delegate mode rejects empty `allowed_tools` and same-profile gating blocks delegation. Fix PR #7592 exists but only adds documentation.
- **NanoBot**: PR #4293 (open) adds `pending_queue` to `process_direct` for subagent result injection.

**Platform-specific bugs** affect all projects:

- **OpenClaw**: Issue #85027 — macOS LaunchAgent Gateway unrecoverable after upgrade.
- **NanoBot**: PR #4339 — Mobile responsiveness fixes for WebUI.
- **Zeroclaw**: Issue #6847 — WhatsApp QR code not displaying; Docker setup barrier (#3642).
- **PicoClaw**: Issue #3090 — Panel UI broken on Safari iOS < 16.4.

**Configuration validation** is being improved across projects:

- **OpenClaw**: PR #93132 — Fix resolving gateway token from service environment.
- **NanoBot**: PR #4275 — Fail fast on invalid config files.
- **Zeroclaw**: PR #7617 — Warn on extra-nested provider alias tables; PR #7637 — Auto-normalize agent alias casing.
- **PicoClaw**: No equivalent today.

**Long-running session / cron job reliability** is a shared pain point:

- **OpenClaw**: Issue #45494 — Cron jobs silently time out during LLM API outages; issue #83184 — Heartbeats stuck in pendingFinalDelivery.
- **NanoBot**: PR #4299 — Cron jobs now carry creating session key for better scoping.
- **Zeroclaw**: PR #7384 — Pause/resume toggle for scheduled tasks.
- **PicoClaw**: No equivalent today.

No shared focus area appears across all four projects today.

## 5. Differentiation Analysis

**Feature focus:**
- **OpenClaw** is focused on core infrastructure: session state integrity, auth providers, gateway stability, memory-core reliability. Its latest beta adds richer Telegram/WhatsApp delivery semantics.
- **NanoBot** is investing in WebUI user experience (mobile responsiveness, automation management view, token usage heatmap) and agent loop refinements (session scoping, cron session binding).
- **Zeroclaw** is aggressively expanding integration surface: 4 SMS channels, 4 smart home/media tools, and 5 new model providers were all contributed and closed today by a single author. This suggests a strategy of lowering the barrier for external contributions.
- **PicoClaw** is in a maintenance and polish phase: small error-handling fixes, structured logging refactor, and a remote agent mode PR are the notable items. No new provider or channel integrations today.

**Target users:**
- **OpenClaw** appears to serve production deployments: its bug descriptions reference multi-agent setups, cron-driven agents, and high-availability concerns (fallback chains, session isolation). The P0 memory deletion bug suggests some users run long-term memory-critical systems.
- **NanoBot** has a more beginner-friendly posture: documentation overhaul, mobile UI fixes, and desktop notifications suggest a broader userbase including non-developers.
- **Zeroclaw** straddles both: its air-gapped execution RFC and S1 delegate bugs appeal to enterprise deployment concerns, while the batch of contributed integrations (SMS, smart home, media) suggests hobbyist/enthusiast use cases.
- **PicoClaw** seems targeted at embedded/edge users: nightly builds, remote agent mode via WebSocket, and the small footprint implied by its name suggest constrained environments.

**Technical architecture:**
- **OpenClaw** has the most complex architecture (Gateway, Codex app-server, memory-core, session isolation) and the highest bug severity profile.
- **NanoBot** uses a simpler agent loop with session scoping; its OpenAI-compatible endpoint is a notable differentiator for users wanting API compatibility.
- **Zeroclaw** is Rust-based (evidenced by type-driven config enums) and has a three-engine agent turn design that was just consolidated.
- **PicoClaw** is Go-based (structured logging refactor, `io.ReadAll` error handling) and adds WebSocket remote agent mode.

## 6. Community Activity Notes

**High activity tier:** OpenClaw. 500+ issues and 500+ PRs updated, 1 beta release, 14 issues with multi-comment engagement. However, high activity correlates with high unresolved bug count and maintainer bottleneck signals.

**Medium activity tier:** NanoBot and Zeroclaw. NanoBot merged 27 PRs but had no releases and low community engagement (zero issues with >5 comments). Zeroclaw processed 92 combined items but closed many contributed issues with low discussion; its RFCs (#6808, #6293) show governance-focused community interaction.

**Low activity tier:** PicoClaw. 5 issues, 9 PRs, 1 nightly build. Three unaddressed high-severity bugs with no maintainer response. Smallest community surface area.

**Contribution pattern:** Zeroclaw shows a distinct pattern: one prolific author (@theonlyhennygod) contributed 14 closed features today. No similar single-author batches appear in other projects. This suggests Zeroclaw has either a more welcoming contribution process or specific gaps that attracted a motivated contributor.

## 7. Evidence-Backed Observations

1. **Maintainer capacity is the binding constraint across all four projects.** OpenClaw has 10+ P1 bugs with no linked fix PR. Zeroclaw has S0 and S1 bugs with fix PRs that only add documentation. PicoClaw has three high-severity bugs with no maintainer response. NanoBot’s single open bug (#4309, zero usage tokens) has no maintainer response either. None of the projects show evidence of scaled maintainer teams matching community growth.

2. **Sub-agent and delegate isolation is a common unsolved problem.** OpenClaw (issue #84903, Gateway event loop blocked by single agent), Zeroclaw (issue #7470, delegate mode broken for empty tools), and NanoBot (PR #4293, adding subagent result injection) all touch this theme. No project has a fully functioning solution today. This suggests the community is using agents in increasingly complex topologies that the original architectures didn’t anticipate.

3. **Prolific external contributors can shift project priorities.** Zeroclaw received 14 feature integrations from one author today (SMS, smart home, model providers). OpenClaw saw none. PicoClaw closed a provider request as stale. This is not necessarily positive: it can create maintenance burden if contributed features lack ongoing testing or documentation.

4. **OpenClaw’s bug surface is qualitatively different from peers.** The presence of a P0 memory deletion bug (#84882), silent truncation (#84516), and session isolation failures (#84903) indicates users trust OpenClaw with production workloads where data loss and reliability failures are unacceptable. Peer projects’ bugs (NanoBot: token reporting; PicoClaw: tool failures) are more about user experience than data integrity.

5. **No clear cross-project signal for any single technology or feature.** While MCP tool injection appears in two projects, the implementations differ (OpenClaw: injection to subagents; Zeroclaw: exposure to delegates; PicoClaw: registerable channels). There is no convergen behavior across the ecosystem today. Each project is solving similar problems in architecturally distinct ways.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-15

## Today's Activity Brief
In the last 24 hours, 5 issues were updated (2 open, 3 closed) and 45 pull requests had activity (18 open, 27 merged/closed). No new releases were published. The maintainer team merged a large batch of PRs covering documentation, WebUI improvements, agent loop refinements, and configuration robustness. Two open bugs were reported: one about token usage always returning zero in the OpenAI‑compatible endpoint, and another where the image‑strip fallback leaks file paths into the model's context. A fix PR for the latter was opened today.

## Releases
No new releases.

## Project Progress
27 pull requests were merged or closed in the last 24 hours. Key advancements include:

* **Documentation overhaul** ([#4177](https://github.com/HKUDS/nanobot/pull/4177)) – Reworked onboarding docs with beginner‑friendly guides, CLI chooser, and deployment readiness.
* **Session scoping for recent history** ([#4274](https://github.com/HKUDS/nanobot/pull/4274)) – Added `session_key` metadata and filtered prompt injection by session (non‑unified mode).
* **Cron job session binding** ([#4299](https://github.com/HKUDS/nanobot/pull/4299)) – Automated cron tasks now carry the creating session key instead of `unified:default`.
* **Tool configuration rework** – Broke import cycles ([#4314](https://github.com/HKUDS/nanobot/pull/4314)), added `pathPrepend` for tool executables ([#4273](https://github.com/HKUDS/nanobot/pull/4273)), and added a `tools.file.enable` toggle ([#4138](https://github.com/HKUDS/nanobot/pull/4138)).
* **Agent loop fixes** – Finalize max‑iteration turns without tools ([#4269](https://github.com/HKUDS/nanobot/pull/4269)); added `pending_queue` to `process_direct` for subagent result injection ([#4293](https://github.com/HKUDS/nanobot/pull/4293) – still open).
* **WebUI improvements** – Mobile responsiveness fixes ([#4339](https://github.com/HKUDS/nanobot/pull/4339)), token usage heatmap rendering aligned to agent timezone ([#4248](https://github.com/HKUDS/nanobot/pull/4248)), and an automation management view ([#4330](https://github.com/HKUDS/nanobot/pull/4330) – still open).
* **Feishu channel** – Lazy‑loaded the `lark_oapi` SDK to avoid startup overhead ([#4277](https://github.com/HKUDS/nanobot/pull/4277)).
* **Desktop notifications** – Added support for streaming assistant replies ([#4210](https://github.com/HKUDS/nanobot/pull/4210)).
* **Config validation** – Fail fast on invalid config files ([#4275](https://github.com/HKUDS/nanobot/pull/4275)).
* **Telegram** – Fixed fenced code blocks broken across message chunks (issue [#4250](https://github.com/HKUDS/nanobot/pull/4250), closed).

## Community Hot Topics
No issues or PRs attracted multiple comments today. The most discussed item was the Anthropic provider bug ([#4333](https://github.com/HKUDS/nanobot/issues/4333), closed), where the deprecated `temperature` parameter was still sent to claude‑opus‑4‑8, causing HTTP 400 errors for all users of that model. The fix was merged and closed.

## Bugs & Stability
3 bugs reported or closed today (ranked by severity):

1. **Image‑strip fallback leaks file path and causes hallucination** ([#4345](https://github.com/HKUDS/nanobot/issues/4345), open) – The fallback text injected the local file path into the model’s context, making the model behave as if it saw the image. A fix PR ([#4346](https://github.com/HKUDS/nanobot/pull/4346), open) marks stripped images as “unviewable” instead. **Critical**.
2. **`/v1/chat/completions` always returns zero usage tokens** ([#4309](https://github.com/HKUDS/nanobot/issues/4309), open) – The OpenAI‑compatible endpoint hardcodes token usage to zero despite the agent loop tracking real counts. No fix PR yet. **High**.
3. **Anthropic `temperature` deprecated for opus‑4‑8** ([#4333](https://github.com/HKUDS/nanobot/issues/4333), closed) – Resolved and merged.

## Feature Request Clusters
* **Automation UI** ([#4330](https://github.com/HKUDS/nanobot/pull/4330), open) – Adds a WebUI view to list, filter, run, pause, and delete automations.
* **Tool configuration granularity** – Multiple PRs expanded tool enabling/disabling (`tools.file.enable` [#4138](https://github.com/HKUDS/nanobot/pull/4138)), path prepend ([#4273](https://github.com/HKUDS/nanobot/pull/4273)), and rejection of unknown parameters ([#4343](https://github.com/HKUDS/nanobot/pull/4343), open).
* **Mobile support** – UI responsiveness for small screens ([#4339](https://github.com/HKUDS/nanobot/pull/4339), merged).
* **Startup botIcon** – Closed enhancement request ([#4262](https://github.com/HKUDS/nanobot/issues/4262)) to display configured `botIcon` in agent mode at startup.

## User Feedback Summary
* A user reported that the Anthropic provider broke entirely for opus‑4‑8 and Fable models due to a deprecated parameter. The team responded and fixed within 2 days.
* Another user (alx1379) identified that the OpenAI‑compatible endpoint returns zero token usage, making it unusable for cost tracking or library integration. No maintainer response yet.
* The image‑strip fallback issue (BearMett) highlights a subtle but serious hallucination risk when images are rejected by the model. The same user authored the fix PR.
* User mraad requested the botIcon to be shown at startup – the issue was closed, suggesting it may have been implemented in a previous change.

## Backlog Watch
* **Issue #4309** (zero usage tokens) – Open since 2026‑06‑12 with no PR attached. With no maintainer response yet, this may require attention soon as it affects API consumers.
* No long‑unanswered items appear in today’s data.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-15

## Today's Activity Brief

In the last 24 hours, Zeroclaw saw 42 issues updated (14 open, 28 closed) and 50 pull requests updated (47 open, 3 merged/closed). No new releases were published. The project continues to process a large batch of recently submitted feature integrations (particularly SMS channels and model providers from a single prolific contributor) while maintainers focus on consolidating the agent turn engine, addressing production-blocking delegate bugs, and improving the quickstart and configuration UX. A significant RFC proposing air-gapped execution mode remains open for maintainer review.

## Releases

None.

## Project Progress

Three pull requests were merged or closed in the last 24 hours:

- **[#7384](https://github.com/zeroclaw-labs/zeroclaw/pull/7384) (merged)** — Added pause/resume toggle to scheduled tasks via the dashboard and HTTP API (`CronPatchBody` with `enabled` field). The data model and scheduler already supported the toggle; this PR wires it through the gateway layer.
- **[#7594](https://github.com/zeroclaw-labs/zeroclaw/pull/7594) (closed)** — Type-driven alias-ref pickers and self-declaring config enums. This internal representation change makes config field UX behavior follow from the Rust type rather than hardcoded path special-casing. Labeled `needs-author-action`.
- **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) (closed)** — RFC proposing unification of the three agent turn engines was executed as a single consolidation PR ([#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540)), which is noted in the issue as merged on 2026-06-13. The resolution followed maintainer direction for a single PR rather than phased migration.

Additionally, multiple fixes advanced in open PRs:
- Plugin install path alignment ([#7549](https://github.com/zeroclaw-labs/zeroclaw/pull/7549))
- Deferred MCP tool exposure to delegates ([#7608](https://github.com/zeroclaw-labs/zeroclaw/pull/7608))
- Profile tool iteration limit enforcement ([#7583](https://github.com/zeroclaw-labs/zeroclaw/pull/7583))
- Chinese locale sync with English source ([#7612](https://github.com/zeroclaw-labs/zeroclaw/pull/7612))

## Community Hot Topics

1. **Full Docker image request ([#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642))** — 13 comments, 3 👍. This closed enhancement asks for a single `full` Docker image with all feature flags compiled in (e.g., WhatsApp). The community discussion highlights that the default memory-conscious build creates a barrier for non-technical users. Despite being closed, the issue has significant engagement.

2. **RFC: Work Lanes, Board Automation, and Label Cleanup ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))** — 11 comments. A governance RFC proposing lightweight PR lanes and board-owned issue labeling to reduce manual maintainer overhead. Designated for 0.80-beta1.

3. **Delegate agentic mode rejects empty `allowed_tools` ([#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470))** — 7 comments, severity S1 (workflow blocked). This high-risk bug blocks practical multi-agent setups when `risk_profile.allowed_tools` is empty or when same-profile gating prevents delegation to stricter targets. Status: in-progress.

4. **Air-gapped execution mode RFC ([#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293))** — 5 comments, updated today. Proposes splitting ZeroClaw into an offline agent container and an online companion daemon communicating over a Unix socket. Labels include `needs-maintainer-review` and `status:blocked`.

## Bugs & Stability

### High/Critical Severity (S0–S1)

- **[#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) (S1)** — Delegate agentic mode rejects empty `allowed_tools`; same-profile gating blocks stricter delegated targets. Status: in-progress. Related fix PR exists: [#7592](https://github.com/zeroclaw-labs/zeroclaw/pull/7592) adds documentation for the requirement.
- **[#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) (S0, closed)** — Improper email channel config logic; labeled S0 (data loss / security risk). Fixed and closed.

### Medium Severity (S2–S3)

- **[#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) (S2)** — `show_tool_calls` is missing from channel config in schema v3. Status: in-progress.
- **[#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) (unrated, medium risk)** — QQ channel voice messages processed multiple times, creating duplicate entries in `brain.db`. Status: in-progress.
- **[#7608](https://github.com/zeroclaw-labs/zeroclaw/pull/7608) (fix PR)** — Exposes deferred MCP tools to delegates, fixing [#6136](https://github.com/zeroclaw-labs/zeroclaw/issues/6136).
- **[#7583](https://github.com/zeroclaw-labs/zeroclaw/pull/7583) (fix PR)** — Honors profile tool iteration limits in cron/CLI agent runs.
- **[#7616](https://github.com/zeroclaw-labs/zeroclaw/pull/7616) (fix PR)** — Strips assistant reasoning on outbound replay for Groq's OpenAI-compatible endpoint, which rejects `reasoning_content` on input messages.

### Configuration & User-Facing Bugs

- **[#7617](https://github.com/zeroclaw-labs/zeroclaw/pull/7617)** — Warns on extra-nested provider alias tables that silently drop fields (e.g., `[providers.models.zai.default.default]` instead of `[providers.models.zai.default]`).
- **[#7610](https://github.com/zeroclaw-labs/zeroclaw/pull/7610)** — Fixes quickstart not prompting for webhook port during channel setup.
- **[#7637](https://github.com/zeroclaw-labs/zeroclaw/pull/7637)** — Auto-normalizes agent alias input in quickstart to prevent silent failure from casing.
- **[#7640](https://github.com/zeroclaw-labs/zeroclaw/pull/7640)** — Prevents delegate OAuth credential fallback from using coordinator's incompatible global credential.

## Feature Request Clusters

### SMS Channel Integrations (All closed today, same author: @theonlyhennygod)

A batch of new SMS gateway channels was merged, following the architecture of the Twilio channel:
- **[#6494](https://github.com/zeroclaw-labs/zeroclaw/issues/6494)** — Vonage SMS (HMAC-SHA256 signature)
- **[#6452](https://github.com/zeroclaw-labs/zeroclaw/issues/6452)** — Sinch SMS (Bearer token auth)
- **[#6453](https://github.com/zeroclaw-labs/zeroclaw/issues/6453)** — Plivo SMS (HMAC-SHA256 with V3 nonce)
- **[#6451](https://github.com/zeroclaw-labs/zeroclaw/issues/6451)** — Telnyx SMS (Ed25519 signature)

### Smart Home / Media Integrations (All closed today, same author)

- **[#6477](https://github.com/zeroclaw-labs/zeroclaw/issues/6477)** — Sonos integration tool via official Control API
- **[#6476](https://github.com/zeroclaw-labs/zeroclaw/issues/6476)** — Shazam track identification via RapidAPI
- **[#6475](https://github.com/zeroclaw-labs/zeroclaw/issues/6475)** — Spotify tool via Web API (OAuth 2.0)
- **[#6450](https://github.com/zeroclaw-labs/zeroclaw/issues/6450)** — 8Sleep Pod control via cloud API
- **[#6449](https://github.com/zeroclaw-labs/zeroclaw/issues/6449)** — Philips Hue control via local Bridge v2 CLIP API

### New Model Providers (All closed today, same author)

- **[#6456](https://github.com/zeroclaw-labs/zeroclaw/issues/6456)** — Arcee AI (small specialist models)
- **[#6458](https://github.com/zeroclaw-labs/zeroclaw/issues/6458)** — Inception Labs / Mercury (diffusion-based language models)
- **[#6457](https://github.com/zeroclaw-labs/zeroclaw/issues/6457)** — Lambda AI Inference (GPU-cloud model catalog)
- **[#6455](https://github.com/zeroclaw-labs/zeroclaw/issues/6455)** — Featherless AI (serverless open-weight models)
- **[#6454](https://github.com/zeroclaw-labs/zeroclaw/issues/6454)** — Upstage Solar (Korean foundation model)

### Other Notable Requests

- **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (closed)** — Full Docker image with all features enabled, to lower the barrier for non-technical users.
- **[#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) (closed)** — Improve Nix flake to expose package and module outputs instead of just a toolchain.
- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (open)** — RFC for work lanes and board automation to streamline maintainer workflows.

## User Feedback Summary

**Pain Points & Complaints:**
- Docker setup remains a barrier: users explicitly request a single "full" image with all features (WhatsApp, etc.) compiled in, noting the default memory-conscious build creates a high entry threshold ([#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)).
- WhatsApp channel onboarding fails: QR code does not display, blocking setup ([#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)).
- Email channel config logic is broken: example configuration from GitHub causes errors if fields are missing, with S0 severity (data loss risk) ([#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528)).
- Delegate agentic mode is broken for empty `allowed_tools` and same-profile gating, blocking multi-agent workflows ([#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)).
- LLM double-invocation: one user request causes the LLM to be called twice repeatedly ([#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)).
- Gemini OAuth fails with "no valid arguments provided" due to project context parsing ([#5527](https://github.com/zeroclaw-labs/zeroclaw/issues/5527)).

**Satisfaction & Appreciation:**
- Positive sentiment in WhatsApp channel issue: "First of all thanks for all the hardwork done here. Greatly apprecited. Best tool out there. Wishing way more stars" ([#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)).

**Usage Patterns & Requests:**
- Strong demand for SMS gateway integrations (4 providers added in batch).
- Interest in smart home and media controls (Sonos, Hue, Spotify, Shazam, 8Sleep).
- Operators want more model provider diversity, including diffusion-based architectures (Inception Labs) and specialist small models (Arcee AI).

## Backlog Watch

- **[#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** — RFC for air-gapped execution mode. Labels include `needs-maintainer-review` and `status:blocked`. Last updated today, but no maintainer response yet. High-risk architectural change.
- **[#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)** — Track: evaluate `extra_args` validation/allowlist for security-affecting Codex CLI flags. Open since April 17, with `domain:security` label. Needs maintainer attention.
- **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — Audit tracking 153 commits lost in a bulk revert (c3ff635). Open since April 24

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest — 2026-06-15

### Today’s Activity Brief
- **5 issues** were updated in the last 24 hours (4 still open, 1 closed as stale).
- **9 pull requests** were updated (4 open, 5 merged/closed).
- A new **nightly build** (v0.2.9-nightly.20260615) was released.
- Merged PRs included several error-handling improvements (TTS, filesystem, evolution) and a refactor to structured logging.
- A new bug was reported: the `web_search` tool fails silently after the API‑key migration to `.security.yml`.

### Releases
**Nightly Build (v0.2.9-nightly.20260615.13a38bd1)**
- Automated build; may be unstable.
- Changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

### Project Progress
Merged/closed PRs today (all updated within the last 24h):

| PR | Title | Status |
|----|-------|--------|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Fix agent loop reload and panic cleanup stability | **Closed** (merged) |
| [#3121](https://github.com/sipeed/picoclaw/pull/3121) | refactor(openai_compat): replace log.Printf with structured logger | **Merged** |
| [#3122](https://github.com/sipeed/picoclaw/pull/3122) | fix(evolution): capture Close() error on write file in appendJSONLRecords | **Merged** |
| [#3123](https://github.com/sipeed/picoclaw/pull/3123) | fix(filesystem): explicitly ignore Close() error on directory file descriptor | **Merged** |
| [#3124](https://github.com/sipeed/picoclaw/pull/3124) | fix(tts): handle io.ReadAll error in error response path | **Merged** |

These merges improve stability (agent reload), error reporting (TTS, file I/O), and logging consistency.

### Community Hot Topics
- **Issue #2978** (closed stale) – [Add omniroute as provider](https://github.com/sipeed/picoclaw/issues/2978)
  *Comments: 2* — User requested integration of an external router (OmniRoute). No maintainer response; closed as stale.
- **Issue #3041** (open) – [`mcp add` mis-parses global flags into positionals (DisableFlagParsing)](https://github.com/sipeed/picoclaw/issues/3041)
  *Comments: 1* — Detailed reproduction; breaks HTTP/SSE tool adds and names stdio servers incorrectly. No fix PR yet.
- **Issue #3044** (open) – [allow_from fails for Matrix user IDs containing colon](https://github.com/sipeed/picoclaw/issues/3044)
  *Comments: 1* — Standard Matrix ID format silently rejected. No maintainer response.

### Bugs & Stability
| Severity | Issue / PR | Summary | Fix PR? |
|----------|------------|---------|---------|
| **High** | [#3125](https://github.com/sipeed/picoclaw/issues/3125) | `web_search` tool fails silently (returns `"No results"`) after migration of Brave API key to `.security.yml`. | No |
| **High** | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | `mcp add` cannot correctly parse global flags, preventing addition of HTTP/SSE tools and mis‑naming local tools. | No |
| **High** | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | Matrix channel `allow_from` silently rejects valid `@localpart:domain` user IDs. | No |
| **Medium** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Panel UI does not work on Safari iOS < 16.4. | No |
| **Low** | [#3123](https://github.com/sipeed/picoclaw/pull/3123) | Explicitly ignored `Close()` error on directory FD (cosmetic improvement). | Merged |
| **Low** | [#3122](https://github.com/sipeed/picoclaw/pull/3122) | Capture `Close()` error on write‑only file in evolution module. | Merged |
| **Low** | [#3124](https://github.com/sipeed/picoclaw/pull/3124) | Handle `io.ReadAll` error in TTS error‑response path. | Merged |

### Feature Request Clusters
- **Extensibility / Out‑of‑Tree Channels**
  PR [#3120](https://github.com/sipeed/picoclaw/pull/3120) (open) adds a `RegisterChannelSettings` hook so third‑party modules can register their own channels without forking PicoClaw.
- **Remote Agent Mode**
  PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) (open) introduces `picoclaw agent --remote ws://...` to connect to a remote PicoClaw instance over WebSocket.
- **Telegram Mention Detection**
  PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (open, stale) treats replying to a bot message as an @‑mention in group chats.
- **Provider Addition**
  Issue [#2978](https://github.com/sipeed/picoclaw/issues/2978) (closed stale) requested support for OmniRoute as a provider.

### User Feedback Summary
- **Pain point:** The migration of API keys to `.security.yml` broke the `web_search` tool (Brave API) without clear error messages. (Issue #3125)
- **Pain point:** Matrix integration is broken for standard user IDs – `allow_from` silently rejects messages. (Issue #3044)
- **Pain point:** Command‑line tooling regresses: `mcp add` cannot handle flags properly, blocking HTTP/SSE tool additions. (Issue #3041)
- **Satisfaction:** Several small error‑handling improvements from contributors were merged quickly, indicating a responsive maintainer team for bugfix PRs.
- **Unaddressed:** The stale closed issue #2978 (OmniRoute) suggests maintainers are not actively adding new providers without a PR.

### Backlog Watch
- **Issue #3044** (Matrix `allow_from` – created 2026‑06‑07, no maintainer comment)
- **Issue #3041** (`mcp add` flag parsing – created 2026‑06‑07, no maintainer comment)
- **PR #2975** (Telegram reply‑as‑mention – open since 2026‑05‑30, no recent activity) – may be waiting for review or further testing.
- **Issue #3090** (Safari panel – created 2026‑06‑10, no maintainer comment) – platform compatibility issue affecting mobile users.

</details>