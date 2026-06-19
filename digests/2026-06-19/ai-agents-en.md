# OpenClaw Ecosystem Digest 2026-06-19

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-19 00:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-19

## Today's Activity Brief

In the last 24 hours, OpenClaw saw high activity: 500 issues updated (475 open/active, 25 closed) and 500 pull requests updated (464 open, 36 merged/closed). No new releases were published. The most active discussions centre on QA tool‑defaults parity, a new SQLite transcript/session runtime, MCP tool‑call approval, persistent Telegram message drops, and multi‑agent performance. No PRs from today’s top‑comment list were merged, but 36 PRs were closed/merged overall. Critical regression reports include a 14‑second CLI cold‑start overhead on Linux, gzip decompression failure under Node v26, and a Feishu compaction bug that drops assistant messages.

## Releases

*None in this 24‑hour window.*

## Project Progress

Of the 500 PRs updated in the last 24 hours, 36 were merged or closed (details not visible in the top‑30 snapshot). All top‑30 PRs by comment count remain open. Notable PRs that advanced (but are still open) include:

- **#88551** – Skip auth gate for CLI‑owned transport (ready for maintainer look)
- **#90885** – Resolve compaction model alias to canonical ref (ready for maintainer look)
- **#82951** – Redact sensitive headers in standalone debug proxy (ready for maintainer look)
- **#94235** – Preserve Google Chat thread reply target through delivery (ready for maintainer look)
- **#94697** – Verify process group leader before using group kill (ready for maintainer look)
- **#94708** – Changed‑file lint checks (ready for maintainer look)
- **#94700** – Fold HTTP API script proof into QA Lab (ready for maintainer look)
- **#94717** – Add snapshot plugin CLI (ready for maintainer look)

Several smaller fixes landed in “needs proof” status, including a Telegram voice typing cue (#94384), workspace checkpoints (#83415, large PR refactoring), and a Windows CLI shim fix (#94718). The `feat(compaction): add identifier survival validation` PR (#75336) remains open after fixes for two security/correctness issues found during review.

## Community Hot Topics

The following issues have drawn the most comments and reactions over the past 24 hours (activity reflects ongoing discussion, not necessarily newly created):

| Issue | Comments | 👍 | Summary |
|-------|----------|----|---------|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) QA tool‑defaults suite conflates Codex‑native tools with OpenClaw dynamic tool parity | 17 | 1 | Clarifies that the reported “tool dropout” is actually a QA harness issue, not a broad runtime bug. |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) Add companion‑friendly SQLite transcript/session seams on database‑first runtime | 13 | 2 | Umbrella feature for exposing canonical runtime state without scraping opaque blobs. |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) Channel‑mediated approval for MCP tool calls (consent envelope) | 13 | 1 | Proposes an `/approve <id>` pipeline for MCP tools, similar to shell‑exec gate. |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) Force reply to originating channel (Telegram/Discord/WhatsApp) | 11 | 1 | Long‑standing request (March) to ensure agent responses are sent back to the correct messaging channel. |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) Telegram messages silently dropped, no sendMessage logged | 11 | 3 | P1 critical bug affecting many users; still awaiting a complete fix. |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) Heartbeat‑driven agent replies leave `pendingFinalDelivery` stuck | 8 | 3 | Blocks subsequent heartbeats; linked to an open PR. |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) Support Telegram guest‑bot and bot‑to‑bot modes (May 7 release) | 8 | 8 | Feature request with strong community backing; needs product decision. |

The core themes emerging from these discussions are **message delivery reliability** (Telegram drops, heartbeat stalls, channel routing), **transcript/session data access** (SQLite API), and **security boundaries** (MCP approval, auth provider complications).

## Bugs & Stability

The following bugs and regressions were among the most active in the last 24 hours, ranked by reported severity (P1/P2). Many of these are older issues still being debated or awaiting fix PRs.

### Critical / P1 issues

- **#80520** – Telegram messages silently dropped (P1, 11 comments, 3 👍). No sendMessage logged; affects multiple users. Related PR #85403 (suppress message‑tool reply previews) is open but waiting on author.
- **#83184** – Heartbeat‑driven agent replies cause `pendingFinalDelivery` stuck (P1, 8 comments, 3 👍). Linked to an open PR.
- **#81484** – Discord guild reply regression in 2026.5.7: malformed payloads and repeated outbound loops (P1, 5 comments). Open PR exists.
- **#76729** – Feishu replies disappear from webchat after compaction rotation (P1, 4 comments). PR #94720 opened today attempts to fix this by preserving the last assistant reply before compaction boundary.
- **#82070** – CLI commands ~14s cold‑start regression after 2026.5.12 update on Linux (P1, 4 comments). Root cause still under investigation.
- **#81567** – GPT‑4o agent sessions exit after single text response instead of continuing tool‑use loop (P1, 4 comments). Product decision needed.
- **#79752** – Discord (and other) HTTP responses fail with `Unexpected token` due to gzip not decompressed under Node v26 on macOS (P1, 5 comments). Affects any HTTP client using the runtime.
- **#79308** – Telegram group replies sent to wrong chat_id (DM instead of group) in 2026.5.7 (P1, 5 comments).

### High‑severity / P2 issues with active discussion

- **#94583** – Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` when user is actively chatting (P2, 8 comments). Race condition between cron and user session.
- **#81607** – minimax‑portal: “No text output returned” when response has thinking + text content blocks (P2, 5 comments).
- **#80036** – Chrome MCP existing‑session `profile=user` reports ready but all page tools time out (P2, 5 comments).
- **#78602** – Browser plugin: persistent `targetId` mismatch + `AbortError` with chrome‑mcp transport (P2, 5 comments).
- **#78041** – Cold‑path auth resolution ~4s on every cold dispatch, warm 2–4ms (P2, 4 comments, updated today).
- **#81934** – Multiple critical failures after updating to 2026.5.12 on macOS (Gmail, Dropbox, PDF generation) (P2, 4 comments). Regression.
- **#82678** – String `none}` truncates tool calls and assistant responses (P2, 4 comments). Security‑related.
- **#82250** – macOS LaunchAgent `KeepAlive=true` restarts after clean already‑running gateway exit (P1, 4 comments).
- **#79451** – `tools.deny` not enforced for claude‑cli backend MCP — agents can call denied MCP tools (P1, 4 comments). Security issue.
- **#83461** – Catalog discovery sends `GET /models` without auth when apiKey is a non‑secret marker (P2, 4 comments, updated today).

### Observability / Infrastructure

- **#79603** – Add handshake phase logging to gateway/ws subsystem (P3, 5 comments). Request for better diagnostics.
- **#79552** – Android node sends events before WebSocket handshake completes, causing notification loss (P1, 5 comments).

**Fix PRs in progress:**

- #94720 (Feishu compaction fix) opened today.
- #94719 – Fix stale `claudeCodeVersion` user‑agent causing OAuth failures.
- #94718 – Fix Windows CLI shim resolution.
- #85403 – Telegram message‑tool reply suppression (waiting on author).
- #74235 – Google Chat thread reply preservation (ready for maintainer look).

## Feature Request Clusters

The following feature areas received the most attention through issues and PRs:

### SQLite transcript/session API (#79902, #79904, #79903, #79905)
A set of four interrelated feature requests by `@100yenadmin` proposes companion‑friendly SQLite seams (cursored read API, session lineage, typed projections) on top of the new database‑first runtime. These are all umbrella items awaiting product decision and maintainer review. No PRs yet.

### MCP tool‑call approval pipeline (#78308, #80213, #81913)
- #78308: Channel‑mediated approval for MCP tool calls (consent envelope). Has linked PR open.
- #80213: Skill author‑defined setup hook (run script on install/update). Linked PR open.
- #81913: Expose stable plugin SDK surface for installed skill workflows. Linked PR open.

These share a common goal of extending OpenClaw’s security and extensibility model for MCP and third‑party integrations.

### i18n / localization (#79458, #79034, #81333)
- #79458: Add i18n fields for slash command descriptions (Discord, Telegram).
- #79034: Control UI metadata not localized for non‑English users.
- #81333 (PR): Translate Nodes page to Simplified Chinese — still waiting on author.

Community interest, especially from Chinese‑speaking users.

### Multi‑agent / subagent improvements (#81061, #80607, #78055, #76927)
- #81061: `before_route_inbound_message` hook for pre‑routing interception.
- #80607: Non‑default multi‑agent uses `embedded_run` instead of direct session — 10–17s latency.
- #78055: Subagent announce delivers stale output and may inherit unrelated history.
- #76927 (PR): Queue subagent completion announces — waiting on proof.

## User Feedback Summary

**Pain points repeatedly expressed:**
- **Message loss:** Telegram (#80520), Discord (#81484), Slack (#78061) — responses generated but never delivered. Users frustrated by silent failures.
- **Regressions after updates:** Multiple users reported breaking changes in 2026.5.7 and 2026.5.12 (gzip, CLI cold‑start, Discord, Chrome MCP).
- **Auth and configuration friction:** Cold‑auth latency (#78041), OAuth invalidation cascades (#80040), undocumented hard‑coded timeouts (#75648), and opaque plugin loader failures (#78301).
- **Telegram group threading:** Replies sent to wrong chat or losing reply context (#79308, #82002).
- **Compaction bugs:** Lost assistant messages after rotation (#76729) and stale subagent deliveries (#78055).
- **Multi‑agent performance:** 10–17

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-19

## 1. Daily Cross-Project Overview

Today saw a wide disparity in activity volume across the four tracked projects. OpenClaw dominated with 500 issues and 500 PRs updated, reflecting a large community and ongoing critical bug triage. Zeroclaw showed significant bug-fix effort (50 PRs, 15 merged) ahead of its v0.8.1 release. NanoBot maintained steady feature development with 25 PRs, while PicoClaw remained low-activity, focusing almost entirely on automated dependency bumps. No project published a new release today. Security and reliability issues appeared across multiple projects, notably message delivery failures and credential/access control vulnerabilities.

## 2. Activity Comparison

| Project   | Issues Updated | PRs Updated | New Releases | Activity Note |
|-----------|----------------|-------------|--------------|---------------|
| OpenClaw  | 500 (475 open, 25 closed) | 500 (464 open, 36 merged/closed) | None | Very high activity; heavy bug triage, security discussions, and feature PRs waiting for maintainer review. |
| Zeroclaw  | 29 (28 open, 1 closed) | 50 (35 open, 15 merged/closed) | None | High activity; intense bug-fix batch and hardening tasks for upcoming v0.8.1 release. |
| NanoBot   | 5 (4 open, 1 closed) | 25 (20 open, 5 merged/closed) | None | Moderate activity; several feature PRs merged (WebUI, memory consolidation, sandbox). |
| PicoClaw  | 2 (1 open, 1 closed) | 15 (7 merged, 8 open) | None | Low activity; predominantly dependency bumps (14 of 15 PRs) plus one bug fix for web search logging. |

## 3. OpenClaw Compared With Peers

- **Activity volume:** OpenClaw’s scale (500 issues/500 PRs) is an order of magnitude larger than Zeroclaw (29/50) and two orders larger than NanoBot (5/25) and PicoClaw (2/15). This reflects a much larger contributor base, user community, and issue surface.
- **Community surface area:** Top OpenClaw issues draw 10–17 comments and multiple upvotes; no other project’s top issue exceeds 7 comments. OpenClaw is the only project where critical P1 bugs (Telegram drops, heartbeat stalls) generate sustained multi-week discussion.
- **Technical focus:** OpenClaw’s activity spans broad reliability (message delivery, compaction, cold-start), security (MCP approval, auth, tool gating), and new runtime infrastructure (SQLite transcript API). Peers concentrate on narrower concerns: NanoBot on memory and simplified UI, Zeroclaw on a specific release bug-fix cycle, PicoClaw on dependency upkeep and niche fixes.
- **PR maturity:** OpenClaw’s top PRs remain open awaiting maintainer review; merged PRs are a small fraction (36/500). In contrast, Zeroclaw and NanoBot merged a higher proportion (15/50 and 5/25), indicating faster review cycles in smaller projects.

## 4. Shared Technical Focus Areas

**Message delivery reliability:**
- OpenClaw: Telegram messages silently dropped (#80520), Discord regression (#81484), heartbeat stalls (#83184)
- PicoClaw: Duplicate messages from async sub‑agent (spawn) completion (#3094, fix PR #3142)

**Security and access control:**
- OpenClaw: MCP tool-call approval pipeline (#78308), `tools.deny` not enforced for claude-cli backend (#79451)
- Zeroclaw: Execute pipeline bypasses per-agent tool gating — confused deputy risk (#7947 – S0), credential redaction improvements (#7826)
- PicoClaw: SSRF bypass via ISATAP IPv6 in `web_fetch` (#3143, not a tracked issue but fix exists)

**Memory/context consolidation:**
- OpenClaw: Feishu compaction bug drops assistant messages (#76729), SQLite transcript/session seams (#79902)
- NanoBot: Post-turn consolidation wipes agent’s own delivery message (#4307), eager consolidation PR (#4402)

**Internationalization (i18n):**
- OpenClaw: Request for i18n fields on slash commands (#79458), control UI localization gap (#79034)
- Zeroclaw: File download tool strings untranslated in zh-CN/ja/es/fr (#7917), translation catalog refresh for v0.8.1 (#7939)

## 5. Differentiation Analysis

- **Target user base:** NanoBot explicitly aims for “normies” with simplified multi-instance UI and onboard wizard improvements. OpenClaw assumes a more technical user base comfortable with CLI, transport layers, and database seams. Zeroclaw and PicoClaw appear developer-oriented (PicoClaw’s lack of feature requests suggests a mature, maintenance-heavy project).
- **Technical architecture:** OpenClaw is the core reference implementation (likely Node/TypeScript) with a broad channel matrix. Zeroclaw (Rust-based, inferred from memory/storage focus) and PicoClaw (Go, from dependency listing) follow different language stacks. NanoBot appears Python-focused (sandbox via bwrap, memory consolidation).
- **Feature focus:** OpenClaw invests in runtime infrastructure (SQLite transcript, MCP approval), while NanoBot prioritizes WebUI simplification and memory consolidation. Zeroclaw’s bug-fix batch addresses core reliability (shell hang, credential redaction, Windows portability). PicoClaw’s only non-dependabot PRs today are a web search logging fix and an SSRF guard – no strategic feature work.
- **Community engagement style:** OpenClaw has long-running issues and PRs awaiting maintainer decisions, indicating a bottleneck. NanoBot maintainers respond quickly (multiple PRs opened and merged same day as issue reports). Zeroclaw maintainers are actively merging bug fixes but have some S0/S1 issues without fix PRs yet.

## 6. Community Activity Notes

- **Very High (OpenClaw):** 500 issues, 500 PRs updated. No release. Activity dominated by open PRs awaiting review, critical P1 bugs, and feature umbrella discussions.
- **High (Zeroclaw):** 29 issues, 50 PRs updated. No release. Intense bug fix block ahead of v0.8.1; 15 PRs merged today.
- **Moderate (NanoBot):** 5 issues, 25 PRs updated. No release. Balanced feature/ bug-fix work with several merges; maintainer responsive.
- **Low (PicoClaw):** 2 issues, 15 PRs updated. No release. Almost entirely automated dependency bumps; only one human-authored fix (web search logging) merged.

No project published a release today. No project showed signs of stalled development; even PicoClaw maintains dependency freshness.

## 7. Evidence-Backed Observations

1. **Security and access control vulnerabilities are a cross-project concern.** OpenClaw (#79451, #78308), Zeroclaw (#7947, #7826), and PicoClaw (#3143) all reported or fixed security-related issues involving tool execution gates, credential exposure, or SSRF. This suggests a shared challenge as AI agents gain more integration capabilities.

2. **Message delivery reliability remains a persistent pain point across at least two projects.** OpenClaw faces multiple P1 channel drops (Telegram, Discord), while PicoClaw’s only community-reported bug today is duplicate sub-agent messages. Both affect user trust in agent responses.

3. **Memory/context consolidation bugs directly impact conversation continuity.** NanoBot’s delivery message wipe (#4307) and OpenClaw’s compaction loss (#76729) both cause users to lose assistant replies or follow-up references. The user frustration is explicit in both projects.

4. **Project activity scales with community size, but review bottlenecks become visible.** OpenClaw’s 464 open PRs and top PRs waiting for maintainer look contrast with Zeroclaw (35 open PRs) and NanoBot (20 open PRs), where review cycles are shorter. Smaller projects can merge fixes faster.

5. **i18n/localization is an emerging common interest, not yet a high-priority focus.** OpenClaw and Zeroclaw each have multiple i18n-related issues/PRs open, but none have been resolved today. No project has shipped a full localization feature; engagement suggests user demand but maintainer capacity is constrained.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-19

## Today's Activity Brief
5 issues were updated in the last 24 hours (4 open, 1 closed). 25 pull requests were updated (20 open, 5 merged/closed). No new releases were published. Activity centred on memory consolidation fixes, workspace path symmetry, concurrency safety in the SDK, and multiple UI‑simplification PRs aimed at non‑technical users.

## Releases
*None.*

## Project Progress
**Merged / closed PRs today:**
- [#4403](https://github.com/HKUDS/nanobot/pull/4403) – `feat(webui): make Firecrawl a keyless Web Data app` (merged)
- [#4400](https://github.com/HKUDS/nanobot/pull/4400) – `ci: skip docs-only changes` (merged)
- [#4391](https://github.com/HKUDS/nanobot/pull/4391) – `feat(feishu): add QR scan-to-create bot CLI login feishu command` (merged)
- [#1391](https://github.com/HKUDS/nanobot/pull/1391) – `feat: add consolidation_model for cheaper memory consolidation` (closed/merged, created March 1, updated today)
- The bug report [#4375](https://github.com/HKUDS/nanobot/issues/4375) ("Git Command Execution Blocked by Workspace Security Policy") was also closed; the fix was handled in earlier PR [#4380](https://github.com/HKUDS/nanobot/pull/4380).

**Features that advanced:**
- **Sandbox execution** – [#4404](https://github.com/HKUDS/nanobot/pull/4404) adds configurable extra `bwrap` bind roots (e.g. `~/.local/bin`).
- **Memory** – [#4402](https://github.com/HKUDS/nanobot/pull/4402) introduces opt‑in “eager consolidation”, archiving conversation slices after each response without trimming the live session.
- **Web search** – [#4406](https://github.com/HKUDS/nanobot/pull/4406) adds a Serper.dev provider; [#4405](https://github.com/HKUDS/nanobot/pull/4405) allows Keenable search without an API key.
- **Channels** – [#4407](https://github.com/HKUDS/nanobot/pull/4407) seeds WhatsApp LID→phone mappings on startup; [#4353](https://github.com/HKUDS/nanobot/pull/4353) converts audio to WAV 16k mono before STT.
- **UI / onboarding** – [#4399](https://github.com/HKUDS/nanobot/pull/4399) adds `hidden_settings_sections`; [#4395](https://github.com/HKUDS/nanobot/pull/4395) improves the onboard wizard flow; [#4396](https://github.com/HKUDS/nanobot/pull/4396) adds optional feature enablement for CLI/WebUI.

## Community Hot Topics
The most commented issues are:
- [#4307](https://github.com/HKUDS/nanobot/issues/4307) (3 comments) – Bug: post‑turn consolidation wipes the agent’s own delivery message, breaking user follow‑ups.
- [#4374](https://github.com/HKUDS/nanobot/issues/4374) (2 comments) – Read/write asymmetry in project workspaces: `SOUL.md`/`USER.md` are read from the project root but written to the default workspace.

No PRs received more than 0 comments in the data.

## Bugs & Stability
| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#4307](https://github.com/HKUDS/nanobot/issues/4307) | High | Context consolidation archives the assistant’s own delivery message, losing user follow‑up references when `context_window_tokens` is modest. | [#4373](https://github.com/HKUDS/nanobot/pull/4373) (open) preserves delivery context |
| [#4408](https://github.com/HKUDS/nanobot/issues/4408) | High | `Nanobot.run()` per‑run hooks mutate a shared `_extra_hooks` dict, causing clobbering under concurrency. | [#4409](https://github.com/HKUDS/nanobot/pull/4409) (draft) passes hooks via `process_direct` |
| [#4374](https://github.com/HKUDS/nanobot/issues/4374) | Medium | Project‑workspace `SOUL.md`/`USER.md` are read from the per‑turn project root but written to the default workspace (asymmetry). | [#4387](https://github.com/HKUDS/nanobot/pull/4387) (open) falls back to default memory bootstrap |
| [#4375](https://github.com/HKUDS/nanobot/issues/4375) | Medium | Git commands blocked by workspace security guard inside subdirectories. | Closed; fix already merged in [#4380](https://github.com/HKUDS/nanobot/pull/4380) |

## Feature Request Clusters
- **Simplified UI for “normies”** – Issue [#4390](https://github.com/HKUDS/nanobot/issues/4390) requests hiding UI settings for multi‑instance deployments. PR [#4399](https://github.com/HKUDS/nanobot/pull/4399) (`hidden_settings_sections`), [#4395](https://github.com/HKUDS/nanobot/pull/4395) (improved onboard wizard), and [#4396](https://github.com/HKUDS/nanobot/pull/4396) (optional feature enablement) all land in this cluster.
- **Memory/consolidation improvements** – PR [#4402](https://github.com/HKUDS/nanobot/pull/4402) (eager consolidation) and [#4373](https://github.com/HKUDS/nanobot/pull/4373) (delivery‑aware consolidation) directly respond to bugs and long‑standing feature requests (#2604, #4307).
- **Sandbox / execution flexibility** – PR [#4404](https://github.com/HKUDS/nanobot/pull/4404) (extra bwrap bind roots) addresses issue [#4107](https://github.com/HKUDS/nanobot/issues/4107).
- **Web search backends** – PR [#4406](https://github.com/HKUDS/nanobot/pull/4406) (Serper.dev) and [#4405](https://github.com/HKUDS/nanobot/pull/4405) (Keenable without API key) expand provider choice.

## User Feedback Summary
- **Frustration with memory consolidation** – Two active bugs ([#4307](https://github.com/HKUDS/nanobot/issues/4307), [#4408](https://github.com/HKUDS/nanobot/issues/4408)) directly affect agent reliability; users report lost follow‑up messages and concurrency‑related hook clobbering.
- **Workspace UX inconsistency** – Issue [#4374](https://github.com/HKUDS/nanobot/issues/4374) highlights a “read/write asymmetry” that confuses users who expect project‑local `SOUL.md` changes to persist in the project folder.
- **Demand for simplified multi‑instance management** – Issue [#4390](https://github.com/HKUDS/nanobot/issues/4390) explicitly asks for hiding UI settings to make multi‑instance setups accessible to non‑technical users. The response from maintainers is positive, with several related PRs opened the same day.
- **Git workspace restriction** – Issue [#4375](https://github.com/HKUDS/nanobot/issues/4375) (now closed) was a concrete pain point for users trying to run git commands in subdirectories.

## Backlog Watch
- [#4307](https://github.com/HKUDS/nanobot/issues/4307) – Bug opened June 12, fix PR [#4373](https://github.com/HKUDS/nanobot/pull/4373) is open but not merged. Needs review.
- [#4374](https://github.com/HKUDS/nanobot/issues/4374) – Opened June 16; fix PR [#4387](https://github.com/HKUDS/nanobot/pull/4387) open since June 17.
- [#4392](https://github.com/HKUDS/nanobot/pull/4392) – PR for making tool microcompaction configurable (addresses #4307 indirectly) open since June 17 with no comments.
- [#1391](https://github.com/HKUDS/nanobot/pull/1391) – A long‑dormant PR for `consolidation_model` was closed today. While merged, its long open time (March 1 → June 18) may indicate maintainer bandwidth constraints on older contributions.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-19

## Today's Activity Brief

Over the past 24 hours, 29 issues were updated (28 open, 1 closed) and 50 pull requests were touched (35 open, 15 merged/closed). No new releases were cut. Notable activity includes a heavy batch of bug-fix PRs addressing process memory limits, shell hang, CLI approval tty, and credential redaction, plus the version bump PR toward the upcoming v0.8.1 release. The project remains in an intense bug-fix and hardening phase ahead of that release.

## Releases

No new releases today.

## Project Progress

Fifteen PRs were merged or closed today. Key changes:

- **fix(cli): flag configured channels missing from binary** ([#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848)) – Adds inventory view for channels not compiled into the binary.
- **fix(provider): trace native tool delivery decisions** ([#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933)) – Adds DEBUG diagnostics for tool delivery booleans across OpenAI, Responses, Anthropic, and compatible providers.
- **docs(i18n): refresh fluent strings and mdbook catalogs for v0.8.1** ([#7939](https://github.com/zeroclaw-labs/zeroclaw/pull/7939)) – Regenerates translation catalogs for the upcoming release.
- **fix(runtime): route stdout diagnostics through logs** ([#7934](https://github.com/zeroclaw-labs/zeroclaw/pull/7934)) – Moves cron deletion diagnostics to structured logs instead of raw stdout.
- **fix(tests): cover Windows path and shell portability** ([#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906)) – Makes shell-tool env tests platform-aware.
- **fix(runtime): auto-include discovered MCP tools in risk_profile allowed_tools** ([#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547)) – Ensures MCP tools appear in agent tool lists when risk_profile has explicit allowed_tools.
- **fix(runtime/agent): move credential redaction to the rendering layer** ([#7826](https://github.com/zeroclaw-labs/zeroclaw/pull/7826)) – Prevents scrubbed credentials from appearing in model-visible output.
- **fix(docs): preserve protected literals in translations** ([#7774](https://github.com/zeroclaw-labs/zeroclaw/pull/7774)) – Broadens preservation of product/provider/protocol names in mdBook PO catalogs.

These PRs address critical bugs (credential leakage, MCP tool visibility, Windows portability) and prepare the codebase for the 0.8.1 release.

## Community Hot Topics

The most active issues by comment count:

- **#2079 – Restore GitHub as a native channel** (7 comments) – A long-standing feature request (since Feb 2026) to add GitHub as a first-class channel. The discussion remains active, with maintainers having accepted the proposal.
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)

- **#7694 – feat(memory): cover storage-reader timestamp and ordering edge cases** (4 comments) – A help-wanted issue for deterministic memory-storage tests; accepted for v0.8.1.
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7694)

- **#5221 – Model cost not captured for schedules, command line and web agents** (4 comments) – A bug that affects cost tracking; maintainers are investigating.
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)

- **#6970 – v0.8.1 integration/channel/provider/tool queue and history** (3 comments) – Operational tracker for the integration pipeline.
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)

- **#6971 – RFC: Security UX, runtime credential boundaries, and isolation defaults** (3 comments) – A design RFC for improving security posture.
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)

- **#7787 – Prebuilt v0.8.0 binaries ship without Slack/Discord channel features (regression)** (3 comments, 👍1) – A high-priority regression that blocks Slack/Discord users; maintainers have accepted and are working on a fix.
  [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)

The underlying theme is a mix of integration feature requests, cost-tracking quality-of-life issues, and security design discussions.

## Bugs & Stability

Several critical bugs were reported or updated today (many with corresponding fix PRs):

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **S0** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` bypasses per-agent tool gating (confused deputy security risk) | Not yet |
| **S1** | [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) | Agent delete purges owned state before config persistence | Not yet |
| **S1** | [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) | Agent rename moves owned state before config persistence | Yes ([#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940)) |
| **S1** | [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns | Partially addressed by [#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) (diagnostics) |
| **S1** | [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) | Code history can send non-alternating Anthropic messages (400 error) | Not yet |
| **S1** | [#7871](https://github.com/zeroclaw-labs/zeroclaw/issues/7871) | Shell tool can hang when grandchild processes inherit pipe handles | Yes ([#7935](https://github.com/zeroclaw-labs/zeroclaw/pull/7935)) |
| **S1** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows (Unix-only commands, path semantics, console encoding) | Partially addressed by [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) |
| **S1** | [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | v0.8.0 binaries missing Slack/Discord (regression) | See [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) (inventory flag) |
| **S2** | [#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949) | [[embedding_routes]] silently degrades to NoopEmbedding | Not yet |
| **S2** | [#7892](https://github.com/zeroclaw-labs/zeroclaw/issues/7892) | CLI approval prompt ignores controlling terminal when stdin detached | Yes ([#7936](https://github.com/zeroclaw-labs/zeroclaw/pull/7936)) |
| **S3** | [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917) | i18n: file_download tool strings untranslated in non-English locales | Not yet |

The two S0/S1 security issues ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) and [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804)) are particularly concerning and lack fix PRs as of today.

## Feature Request Clusters

The following feature requests were newly opened or updated today:

- **Effort-based local/cloud model routing** ([#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)) – Allows simple turns to stay local and harder turns to escalate to a cloud model. Accepted.
- **Realtime voice-host channel** ([#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)) – Backend-agnostic WebSocket client for external voice hosts (CrispASR, Wyoming). Accepted.
- **Voice satellite (ESP32 / smartphone / PWA**) ([#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944)) – Physical device for mic/speaker/approval buttons talking to the voice host. Tied to #7943. P3.
- **Unify slash-command registries across web UI, TUI, and channel runtime** ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)) – Replace three independent registries with a single catalogue.
- **Persist embedding identity and auto-migrate vectors** ([#7948](https://github.com/zeroclaw-labs/zeroclaw/issues/7948)) – Store embedding model info in DB to detect changes and migrate vectors.
- **Include ZeroClaw docs in Docker images** ([#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950)) – So agents can answer usage questions.
- **RFC: Native context compression as a provider pipeline decorator** ([#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)) – Still awaiting author action.

These cluster around three themes: (1) **Voice/Realtime** – voice-host channel and satellite device; (2) **Config & UX** – slash command unification, embedding persistence, local/cloud routing; (3) **Documentation** – in-Docker docs for agents.

## User Feedback Summary

User-reported pain points from today's data:

- **Android Termux installation** ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)) – Precompiled binary not available for `linux aarch64`; user asks for support in setup.
- **Missing Slack/Discord in v0.8.0 binaries** ([#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)) – Regression from 0.7.x; forces downgrade to use Slack.
- **Agents can't answer ZeroClaw config questions** ([#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950)) – User requests docs inclusion in Docker images.
- **i18n gap for file_download tool** ([#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917)) – Strings fall back to English in zh-CN/ja/es/fr.
- **Embedding routes silently dead** ([#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949)) – User reports that `[[embedding_routes]]` configuration has no effect.
- **Slash-command inconsistency** ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)) – Three separate registries cause confusion.
- **Windows test failures** ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) – 74 failing tests block Windows deployment.
- **Anthropic message non-alternating** ([#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804)) – Blocks Code/ACP sessions with Anthropic.
- **Shell hang with grandchild processes** ([#7871](https://github.com/zeroclaw-labs/zeroclaw/issues/7871)) – Tool blocks indefinitely.
- **Security bypass in execute_pipeline** ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)) – User reports confused-deputy vulnerability.
- **Process memory OOM** ([#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)) – Shell subprocesses can OOM the container; fix PR [#7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937) caps memory at 512 MiB by default.

Overall, users are experiencing regressions, missing features, and security-critical bugs, but the maintainer team is actively responding with fix PRs.

## Backlog Watch

Several important issues have been open for an extended period with no resolution:

- **#2079 – Restore GitHub as a native channel** – Opened Feb 27, 2026. Accepted but no PR yet. High risk, P2.
- **#5221 – Model cost not captured** – Opened Apr 2, 2026. No fix PR assigned. P2.
- **#6971 – Security UX RFC** – Opened May 27, 2026. Awaiting decisions. P2.
- **#7175 – Typed delete-with-cascade for aliased entries** – Opened Jun 3, 2026. Accepted, no

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-19

## Today’s Activity Brief
In the past 24 hours, 2 issues were updated (1 open, 1 closed) and 15 pull requests were touched (7 closed/merged, 8 still open). No new releases were published. Two non‑dependency PRs were active: one closed fix for clearer logging in the Brave web search tool, and two open fixes addressing an SSRF bypass in `web_fetch` and a duplicate‑message bug in async sub‑agent (`spawn`) workflows. The project’s dependency landscape saw several bumps, including a major version upgrade for the GitHub Copilot SDK (from 0.2.0 to 1.0.2).

## Releases
*None.* No new versions were tagged or published on this date.

## Project Progress
Seven pull requests were closed/merged today, the majority being automated dependency updates:

- **#3144** – `build(deps): bump actions/checkout from 6 to 7` (dependabot, merged)
  [https://github.com/sipeed/picoclaw/pull/3144](https://github.com/sipeed/picoclaw/pull/3144)
- **#3146** – `build(deps): bump golang.org/x/term from 0.43.0 to 0.44.0` (dependabot, merged)
  [https://github.com/sipeed/picoclaw/pull/3146](https://github.com/sipeed/picoclaw/pull/3146)
- **#3147** – `build(deps): bump github.com/Azure/azure-sdk-for-go/sdk/azidentity from 1.13.1 to 1.14.0` (dependabot, merged)
  [https://github.com/sipeed/picoclaw/pull/3147](https://github.com/sipeed/picoclaw/pull/3147)
- **#3149** – `build(deps): bump github.com/anthropics/anthropic-sdk-go from 1.46.0 to 1.50.2` (dependabot, merged)
  [https://github.com/sipeed/picoclaw/pull/3149](https://github.com/sipeed/picoclaw/pull/3149)
- **#3148** – `build(deps): bump golang.org/x/sys from 0.45.0 to 0.46.0` (dependabot, merged)
  [https://github.com/sipeed/picoclaw/pull/3148](https://github.com/sipeed/picoclaw/pull/3148)
- **#3107** – `build(deps): bump github.com/github/copilot-sdk/go from 0.2.0 to 1.0.1` (dependabot, merged)
  [https://github.com/sipeed/picoclaw/pull/3107](https://github.com/sipeed/picoclaw/pull/3107)
- **#3141** – `fix(web_search): add diagnostic logging for Brave empty results` (closed/merged, author @jincheng-xydt)
  [https://github.com/sipeed/picoclaw/pull/3141](https://github.com/sipeed/picoclaw/pull/3141)

The merged fix #3141 adds logging to help diagnose silent failures when the Brave search API returns HTTP 200 but zero results, a direct response to closed bug #3125.

## Community Hot Topics
The most active issue today is **#3094**, which has 2 comments and concerns duplicate messages from async sub‑agent (`spawn`) tasks:

- **#3094** [OPEN] [stale] **“异步子代理(spawn)任务完成时，ForUser字段被同时用于直接推送和主代理汇总，导致重复消息”**
  Author: @v2up-32mb
  Created: 2026-06-10 | Updated: 2026-06-18
  [https://github.com/sipeed/picoclaw/issues/3094](https://github.com/sipeed/picoclaw/issues/3094)

A corresponding open PR **#3142** (`fix(spawn): clear ForUser in sub-turn ToolResult to prevent duplicate messages`) provides a concrete fix, indicating the community’s pain point is being actively addressed.

No other issues or PRs today received multiple comments or reactions. The remaining 13 PRs are all automated dependency bumps with zero comments.

## Bugs & Stability

| Severity | Bug | Status | Fix PR | Notes |
|----------|-----|--------|--------|-------|
| **High** | Duplicate messages on async sub‑agent completion (#3094) | Open, stale (last updated Jun 18) | #3142 (open) | Affects user‑facing messaging channels (Feishu, Telegram). Root cause identified in `subturn.go`. |
| **Medium** | `web_search` tool fails silently when using Brave API key from `.security.yml` (#3125) | Closed (no comments) | #3141 (merged) | The fix added diagnostic logging but the underlying response‑interpretation issue may still exist; logging helps debugging. |
| **Low** | SSRF bypass via ISATAP IPv6 literals in `web_fetch` (referenced in PR #3143) | Not a tracked issue; fix PR exists | #3143 (open) | Reported indirectly via issue #3074 (not in today’s data). PR teaches IP classifier to recognize embedded private IPv4 addresses. |

## Feature Request Clusters
No explicit user‑requested features appeared in today’s issues. However, the dependency bumps contain minor version upgrades that may bring new capabilities:

- **Copilot SDK** (`github.com/github/copilot-sdk/go`): Two bumps are in view: #3107 (merged to 1.0.1) and the newly open #3145 (from 0.2.0 to 1.0.2). A jump from pre‑1.0 to 1.x suggests the project is consuming a now‑stable SDK; the new version may include breaking changes or new features.
  [https://github.com/sipeed/picoclaw/pull/3145](https://github.com/sipeed/picoclaw/pull/3145)
- **Frontend dependencies** (vite, shadcn, eslint, typescript-eslint) have open bumps awaiting review/merge, bringing non‑breaking improvements and bug fixes.

## User Feedback Summary
- **Duplicate messages (#3094):** Users reported receiving two identical messages when an async sub‑agent finishes — one raw, one formatted by the main agent. This degrades the chat experience on platforms like Feishu/Telegram. The author @v2up-32mb clearly described the replication steps and the expectation that only the cleaned‑up summary should be delivered.
- **Web search silent failure (#3125):** After the migration of API keys to `.security.yml`, the Brave search stopped returning results without any error. The fix adds diagnostic logging to surface such failures, but users still need to manually check logs to understand the problem.
- **SSRF guard bypass (implicit):** The fix in #3143 indicates a relevant security concern for users who fetch private network resources via the web tool. No direct user complaint was captured today, but maintainer @lc6464 is proactively hardening the guard.

## Backlog Watch
The following items would benefit from maintainer attention:

- **Issue #3094** – duplicate messages bug. Open for 9 days, marked stale, yet a fix PR (#3142) is open. Review and merge of #3142 would close this bug.
  [https://github.com/sipeed/picoclaw/issues/3094](https://github.com/sipeed/picoclaw/issues/3094)
  [https://github.com/sipeed/picoclaw/pull/3142](https://github.com/sipeed/picoclaw/pull/3142)

- **Dependabot PRs (open, stale):** Five dependency bump PRs for the frontend have been open since June 11 and are marked stale (#3100, #3101, #3103, #3104, #3105). While these are auto‑generated, they contain minor/patch updates that improve security and stability.
  [https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+label%3Astale+created%3A%3E%3D2026-06-11](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aopen+label%3Astale+created%3A%3E%3D2026-06-11)

- **PR #3143** – SSRF bypass fix for ISATAP IPv6. Open for one day, waiting for review.
  [https://github.com/sipeed/picoclaw/pull/3143](https://github.com/sipeed/picoclaw/pull/3143)

- **PR #3145** – Copilot SDK major bump (0.2.0 → 1.0.2). Freshly opened; should be reviewed for any breaking changes.
  [https://github.com/sipeed/picoclaw/pull/3145](https://github.com/sipeed/picoclaw/pull/3145)

</details>