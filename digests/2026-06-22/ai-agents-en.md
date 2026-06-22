# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-22 00:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-22

## Today's Activity Brief

The project saw exceptionally high activity with 500 issues and 500 pull requests updated in the last 24 hours. Two new releases shipped: `v2026.6.10-beta.1` focused on agent turn and session state reliability, and `v2026.6.9` improved Telegram delivery formatting and HTML table normalization. A critical regression was reported today where upgrading to v2026.6.9 silently relocates the memory vector store without migration, forcing a full 1499-file re-embed with no upgrade-time warning.

---

## Releases

### v2026.6.10-beta.1 — openclaw 2026.6.10-beta.1
- **More reliable agent turns and session state:** Preserves pending subagent completion announcements, keeps chat history transcripts non-empty, maintains media index alignment, restarts dormant follow-up drains, and resolves compaction model aliases consistently.
- **No breaking changes or migration notes documented.**

### v2026.6.9 — openclaw 2026.6.9
- **Richer Telegram delivery:** Telegram now sends rich HTML, preserves rich markdown and sticker paths, renders progress drafts and command output more faithfully, normalizes HTML tables safely, and keeps mentions and spooled handlers on the right delivery path.
- **Known regression (reported today):** See #95495 — memory vector store silently relocated from `~/.openclaw/memory/main.sqlite` to `~/.openclaw/agents/main/agent/openclaw-agent.sqlite` without migration, requiring full re-embed on upgrade.

---

## Project Progress

### Merged/Closed PRs Today

**#95618** — [CLOSED] Fix retry success runtime state reconciliation
  Fixes background worker/session runs where earlier terminal error projections could survive cleanup or be replaced in the wrong direction, causing incorrect state. *Author: @khalil-omer*

**#68936** — [CLOSED] Autofix: add PR review autofix pipeline + Windows daemon
  Adds a Claude Agent SDK-based pipeline that addresses PR review comments automatically, plus a Windows background daemon for gateway supervision. *Author: @shadowleaf-studios*

### Notable Open PRs with Recent Activity

- **#95620** — [OPEN] feat(dreaming): add language config option for localized dream diaries *(new today)*
- **#95614** — [OPEN] fix(memory-wiki): preserve human notes block on source re-ingest
- **#95611** — [OPEN] fix(codex): run native post-tool middleware — fixes native Codex relay skipping loaded tool-result middleware
- **#95604** — [OPEN] feat(discord): show subagent progress — adds visible feedback when an assistant delegates to sub-agents
- **#95479** — [OPEN] feat(feishu): configure card footer — allows customization of the agent card metadata footer
- **#95333** — [OPEN] fix #95279: trusted inbound-decoration contract — strips/dedups sentinel markers without forgeable text heuristics
- **#95313** — [OPEN] fix(slack): allow channel-id reads for name-allowlisted channels
- **#95305** — [OPEN] fix #95219: stabilize historical tool result truncation between turns for prompt cache prefix stability
- **#95289** — [OPEN] fix: bound Codex Telegram turns fail after `/codex bind` on OAuth refresh
- **#95007** — [CLOSED] fix(telegram): render progress draft rows as plain readable text

---

## Community Hot Topics

### Most Active Issues

**#86538** [P1, Bug] Session write-lock timeouts block subagent delivery lanes
  *12 comments · 1 reaction* — Session JSONL write-lock timeouts block main, cron-nested, and subagent lanes with insufficient owner diagnostics.
  https://github.com/openclaw/openclaw/issues/86538

**#86519** [P1, Regression] Agent repeats identical replies 2-10x on Telegram after 5.20 update
  *10 comments · 1 reaction* — User reports duplicate replies persisting across versions, reduced from 8-10x to 2-3x but still not fully fixed.
  https://github.com/openclaw/openclaw/issues/86519

**#90354** [P2, Feature] Add bounded/validated append semantics for pre-compaction memory flush
  *8 comments · 1 reaction* — Request for hard guardrails on pre-compaction memory flush writes including append size limits, post-write validation, and silent failure handling.
  https://github.com/openclaw/openclaw/issues/90354

**#92043** [P1, Bug] 180s compaction timeout is a single wall clock with no partial-progress reuse
  *8 comments · 1 reaction* — The lowered default compaction timeout (900s→180s) causes legitimate long compactions to fail identically every turn with no partial progress reuse.
  https://github.com/openclaw/openclaw/issues/92043

**#92460** [P1, Bug] Isolated cron completion announcer drops explicit delivery.channel
  *8 comments · 1 reaction* — Cron jobs with explicit `delivery.mode: "announce"` and `delivery.channel` still fail with "Channel is required" on the isolated-cron completion path.
  https://github.com/openclaw/openclaw/issues/92460

### Underlying Needs

The most commented issues reveal concentrated demand for **session state reliability** and **message delivery guarantees**. Users are experiencing message loss, duplicate delivery, and stuck sessions across multiple channels (Telegram, cron, subagent orchestrations). The thread of issues around compaction and write-lock timeouts suggests core infrastructure scaling issues for larger or longer-running sessions.

---

## Bugs & Stability

### New Today (2026-06-22)

**#95495** [P1, Regression] — 2026.6.9 silently relocates memory store with no migration
  Upgrading from 2026.6.8 to 2026.6.9 moves the memory vector store location without warning, forcing a full 1499-file re-embed. User reports no upgrade-time notification or migration.
  *Comments: 6 · Reactions: 1*
  https://github.com/openclaw/openclaw/issues/95495

### Recent High-Severity (Updated Today)

**#95248** [P1] — `release_lane` is a no-op when claim held by a live worker; stuck Telegram inbound events block agent response until gateway restart
  The diagnostic `release_lane` action logs `released=0` but does not actually release claims held by live workers, leaving Telegram lanes guarded indefinitely.
  https://github.com/openclaw/openclaw/issues/95248

**#93375** [P1] — Telegram polling enters silent crash loop after transient network timeout; health monitor cannot recover
  After a timeout connecting to api.telegram.org, the polling worker exits silently and restarts every 10-15 minutes with each new process also failing. No recovery path.
  https://github.com/openclaw/openclaw/issues/93375

**#91804** [P1] — Internal reasoning leakage in 2026.6.5
  Since upgrading to 2026.6.5, internal agent reasoning/thinking is exposed to users in every response — a major privacy and UX regression.
  https://github.com/openclaw/openclaw/issues/91804

**#91363** [P1] — Isolated cron consistently fails with "LLM request failed" on model-call-started phase
  Cron jobs with `sessionTarget: "isolated"` fail consistently regardless of `timeoutSeconds` setting; model requests never reach the provider.
  https://github.com/openclaw/openclaw/issues/91363

### Regression Patterns

Several regressions track back to the v2026.5.20–v2026.6.1 release window, with ongoing partial fixes in subsequent releases. The duplicate Telegram reply issue (#86519) and Codex mid-turn client closure (#86214) are both marked as "fix-shape-clear" and "needs-maintainer-review," indicating fix PRs have been shaped but not yet merged or reviewed. No fix PRs are directly linked to the new memory relocation regression (#95495) at this time.

---

## Feature Request Clusters

### Topic-Session Families / Multi-Context Lanes
- **#90916** [P2] — Topic-session families for one assistant across multiple named context lanes with isolated transcript contexts while sharing durable memory through explicit family-level rules
  https://github.com/openclaw/openclaw/issues/90916

### Subagent Orchestration Improvements
- **#92369** [P2] — Subagent orchestration in cron isolated sessions: no reliable way to spawn, wait, and aggregate results
  https://github.com/openclaw/openclaw/issues/92369

### Memory & Compaction Guardrails
- **#90354** [P2] — Bounded/validated append semantics for pre-compaction memory flush (append size limits, validation, silent failure handling)
  https://github.com/openclaw/openclaw/issues/90354

### Configuration & Extensibility
- **#91455** [P3] — Kubernetes documentation update (requesting Helm chart or improved deployment docs)
  https://github.com/openclaw/openclaw/issues/91455
- **#92884** [P2] — `config validate` rejects plugin-owned channel schema extensions before plugin metadata can extend bundled schemas
  https://github.com/openclaw/openclaw/issues/92884
- **#93120** [P2] — Make Gemini TPM/RPM rate-limit retries configurable (currently hardcoded; regex misclassification prevents retries)
  https://github.com/openclaw/openclaw/issues/93120

### Related Open PRs
- **#95620** — Language config option for localized dream diaries *(new today)*
- **#95479** — Configurable Feishu card footer
- **#95321** — Configurable WebChat history text cap
- **#51762** — Configurable default agent ID (escape "main" prison)

---

## User Feedback Summary

### Expressed Pain Points

- **Session write-lock timeouts** block delivery lanes without adequate diagnostics (#86538)
- **Duplicate Telegram replies** 2-10x per message, partially reduced but not fixed (#86519)
- **Compaction timeouts** fail without partial progress reuse, making legitimate slow compactions unrecoverable (#92043)
- **Memory store relocation** in v2026.6.9 forces full re-embed with zero warning (#95495)
- **Codex OAuth refresh** succeeds but cron/heartbeat fail with 10s timeout (#89278)
- **Internal reasoning leakage** exposes private agent thinking to end users (#91804)
- **Message delivery silently lost** after gateway restart or cron completion (#91212, #92460)
- **Stuck Telegram lanes** with no recovery except full gateway restart (#95248)
- **Telegram polling crash loop** after network timeout with no recovery (#93375)
- **Poor UX for long-running background tasks** on low-resource droplets — user reports abandoning a DigitalOcean deployment (#88087)

### Positive Signals

- Two releases shipped in a single day, with active work on Telegram delivery quality and session state preservation
- High PR volume (479 open PRs) suggests an active contributor base despite the volume of open issues
- Multiple fixes in the pipeline for session stabilization, memory-wiki preservation, and Discord subagent visibility

---

## Backlog Watch

### Long-Standing Issues Needing Maintainer Attention

**#86214** [P1] — Codex app-server client closes mid-turn during image/tool requests with large `logs_2.sqlite`
  *Created 2026-05-24 · Updated today · 7 comments* — Blocked by "needs-live-repro" label despite clear diagnostic in summary.
  https://github.com/openclaw/openclaw/issues/86214

**#67915** [P2, stale] — Local assistant attachments shown as "Unavailable — Outside allowed folders" despite correct server config
  *Created 2026-04-17 · Updated today · 6 comments* — Marked stale; still reproducible in current versions.
  https://github.com/openclaw/openclaw/issues/67915

**#80176** [P3] — JSONL session-replay harness (Codex×Pi parity Phase 5)
  *Created 2026-05-10 · Updated today · 5 comments* — Part of a larger parity tracking effort; no visible progress on parent issues.
  https://github.com/openclaw/openclaw/issues/80176

### PRs with Stale or Waiting Status

Several PRs remain in "waiting on author" status for extended periods:
- **#69346** — fix(embedded-runner): actionable diagnostic for empty-stream config errors (since April 20)
- **#68986** — fix: normalize visible assistant output before delivery (since April 19)
- **#68967** — feat(googlechat): add sessionThread option (since April 19)
- **#67080** — feat(plugins): narrow gateway route loads from manifests (since April 15)
- **#66150** — fix: drop stale operational alerts from transcript mirror (since April 13)

These have accumulated but not been actively driven forward, suggesting contributor bandwidth constraints or review bottlenecks.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-22

## 1. Daily Cross-Project Overview

Today's activity shows OpenClaw dominating in raw volume (500 issues, 500 PRs, two releases) while NanoBot and Zeroclaw showed moderate but focused activity (34 combined issues, 84 combined PRs). PicoClaw saw minimal movement with 5 issues and 4 PRs. All projects except PicoClaw had at least one high-severity security or data-integrity bug reported or addressed today. No project published a stable release; OpenClaw shipped two beta/patch releases, while PicoClaw issued an automated nightly build.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases Today | Notable Activity |
|---------|---------------|-------------|----------------|------------------|
| OpenClaw | 500 | 500 | v2026.6.10-beta.1, v2026.6.9 | Memory store silently relocated without migration (#95495); two high-severity regressions reported |
| NanoBot | 10 | 34 | None | Two MCP security bypasses filed and fix-PR'd same-day (#4435, #4434); streaming session bricking bug (#4442) drew two competing fix PRs |
| Zeroclaw | 41 | 50 | None | S0 bug: Anthropic provider unavailable after Quickstart (#8094); Intel Mac install regression fixed within hours (#8095→#8096) |
| PicoClaw | 5 | 4 | v0.3.0-nightly.20260621.287853ab | Two configuration parsing bugs closed (#3044, #3041); critical token-drain bug remains open (#3012) |

## 3. OpenClaw Compared With Peers

**Activity volume**: OpenClaw's 500/500 issue/PR count is an order of magnitude higher than any peer (next: Zeroclaw at 41/50). This reflects its role as the core reference project with a larger contributor base, but also a higher regression rate — two of today's most impactful reports (memory relocation, duplicate replies) are regressions from recent stable releases.

**Technical surface area**: OpenClaw's reported issues span session state, message delivery, compaction, memory, and five distinct channel integrations (Telegram, Discord, Slack, Feishu, cron). Peers are narrower: NanoBot focused on MCP security and streaming reliability; Zeroclaw on installation, Docker, and channel configuration; PicoClaw on gateway-specific bugs.

**Community surface area**: OpenClaw issues average 6-12 comments and show maintainer engagement (fix PRs linked, diagnostics clear). NanoBot had two security reports that drew fix PRs within hours — faster maintainer response time. Zeroclaw closed several high-severity bugs same-day but has an open S0 with no fix PR yet. PicoClaw's critical token-drain bug (#3012) has no maintainer response after 17 days.

## 4. Shared Technical Focus Areas

**Memory/Vector Store Reliability**
- **OpenClaw**: #95495 — memory vector store relocation without migration forces full re-embed
- **NanoBot**: #4408 (closed) — concurrency bug in per-run hooks corrupted shared state; PRs around env-var resolution in config paths

**Streaming/Session Reliability**
- **OpenClaw**: #86519 — duplicate Telegram replies (2-10x); #92043 — compaction timeout with no partial-progress reuse
- **NanoBot**: #4442 — duplicate `tool_use` IDs in streamed Anthropic responses permanently brick sessions; two fix PRs same-day
- **Zeroclaw**: #7756 — Native/MCP tools unavailable on certain model turns

**Channel/Platform Integration**
- **OpenClaw**: Active work on Telegram rich formatting, Discord subagent progress, Slack channel-id reads
- **NanoBot**: Telegram rich messages support implemented (#4413→#4422); Mattermost request revived (#1011)
- **Zeroclaw**: Lark ack_reactions fixed (#7724); Mattermost WebSocket mode PR exists (#7098); OneBot/NapCat request (#2503) still open
- **PicoClaw**: SimpleX/Tox protocol request (#3093) with one 👍

**Security/Configuration Guardrails**
- **NanoBot**: Two MCP allowlist bypass reports filed and fix-PR'd today (#4435/#4436, #4434)
- **OpenClaw**: #95495 — silent migration with no upgrade warning; #95248 — stuck lanes with no recovery
- **Zeroclaw**: #6613 — request for stronger pairing codes; #8115 — fail fast on gateway address conflict (new PR)

## 5. Differentiation Analysis

**OpenClaw — Core Reference / High-Volume Platform**
- Largest contributor base, broadest channel support, most release activity
- Carries the most regressions per release, suggesting high change velocity and testing gaps
- Technical focus: session state, compaction, memory, multi-channel delivery guarantees

**NanoBot — Security-Conscious / Fast-Response**
- Security bugs received fix PRs within hours — fastest maintainer response today
- Focus on provider compatibility (Anthropic streaming, MCP tool registration)
- Smaller community but more focused technical output per contributor

**Zeroclaw — Installation / Platform Stability**
- Today's activity centered on installation regressions (macOS Intel, Docker) rather than runtime features
- Growing channel integration work (Lark, Slack, Mattermost) indicates broadening deployment scope
- Has largest backlog of accepted but unimplemented features across peers (napcat, webhook transforms)

**PicoClaw — Lightweight Gateway / Nightly Builds**
- Automated nightly releases (no patch releases like peers)
- Smallest issue/PR volume; two critical bugs open with limited maintainer visibility
- Focus on configuration correctness and gateway protocol support

## 6. Community Activity Notes

**High activity** (500+ issues/PRs combined, with releases): OpenClaw
- Multiple regression reports filed and discussed same-day; high contributor engagement

**Moderate activity** (10-50 issues/PRs combined, no releases): NanoBot, Zeroclaw
- NanoBot had targeted, high-impact activity (security bugs drawn from external researcher)
- Zeroclaw showed steady triage and patch velocity on installation issues

**Low activity** (≤10 issues/PRs combined): PicoClaw
- Two bugs closed, one nightly build, no major discussion threads

No project showed evidence of contributor burnout, maintainer absence, or community decline. All four projects had at least some maintainer or PR activity today.

## 7. Evidence-Backed Observations

1. **Memory/compaction infrastructure is a cross-project pain point**: OpenClaw's migration regression (#95495) and compaction timeout (#92043), combined with NanoBot's concurrency hook bug (#4408, closed) and Zeroclaw's context-compression tool-loss bug (#6361), all point to persistent engineering challenges around session state and vector storage across projects.

2. **Security vulnerabilities in MCP/model integration are being actively surfaced**: NanoBot received two MCP allowlist bypass reports from what appears to be an external security researcher. OpenClaw's memory relocation (#95495) could be classified as a data-integrity issue. No project has an explicit security response policy or advisory process visible in today's data.

3. **Channel integration demand concentrates on self-hosted alternatives**: PicoClaw's SimpleX/Tox request (#3093), Zeroclaw's OneBot/NapCat request (#2503, 9 comments), and NanoBot's revived Mattermost request (#1011, 4 👍) all point to unmet demand for open-source, self-hostable communication backends. Telegram, Discord, and Slack coverage appears adequate across all four projects.

4. **Session reliability problems cluster around two patterns**: (a) duplicate/leaked messages (OpenClaw #86519, NanoBot #4442) and (b) session stuckness with no recovery path (OpenClaw #95248, #93375, #91363; Zeroclaw #8094). Both patterns appear across projects with no shared root cause visible.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-22

## Today's Activity Brief

The project saw a surge in pull request activity today, with 34 PRs updated in the last 24 hours (14 merged/closed) and 10 issues updated (3 closed). Two high-severity security vulnerabilities regarding MCP `enabledTools` bypasses were reported and immediately attracted fix PRs. A critical streaming bug causing permanent session bricking on Anthropic-family providers was also reported and addressed by two competing fix PRs on the same day. The maintainer team appears to be actively responding to community bug reports, though the PR queue remains heavily weighted toward open items (20 open vs. 14 merged/closed). No new releases were published.

## Releases
None. No new versions of NanoBot were released today.

## Project Progress

**Merged/Closed PRs (14 total, select highlights):**
- [#4323](https://github.com/HKUDS/nanobot/pull/4323) (closed): Fix for transcription pipeline where `${VAR}` env-var templates were not resolved before config lookup, causing silent failures with providers like Groq.
- [#4324](https://github.com/HKUDS/nanobot/pull/4324) (closed): Fix for WebUI settings read paths showing raw `${VAR}` template strings instead of resolved credential values.
- [#4325](https://github.com/HKUDS/nanobot/pull/4325) (closed): Companion fix for WebUI settings update paths, ensuring env-var templates are resolved before comparison.
- [#4316](https://github.com/HKUDS/nanobot/pull/4316) (closed): New TTS configuration system with multi-provider support (OpenAI, Groq/Orpheus, ElevenLabs), exposed through WebUI settings.

**Closed Issues:**
- [#4408](https://github.com/HKUDS/nanobot/issues/4408): Concurrency bug in `Nanobot.run()` per-run hooks (shared `_extra_hooks` clobbered under concurrent calls) was closed.
- [#4422](https://github.com/HKUDS/nanobot/issues/4422): Telegram Bot API 10.1 `sendRichMessage` support was implemented and closed.
- [#4420](https://github.com/HKUDS/nanobot/issues/4420): Performance optimization for `estimate_prompt_tokens` — redundant tiktoken encoding of tool definitions on every call — was closed.

## Community Hot Topics

- [#1011](https://github.com/HKUDS/nanobot/issues/1011) (Mattermost Bot): This stale issue from February 2026 received an update after four months. It has 4 👍 reactions, the highest of any issue today. The author notes Discord requires new server setup, Telegram raises privacy concerns (sharing chats with Russia), Slack is enterprise, and WhatsApp requires business accounts, expressing a desire for Mattermost as an open-source self-hosted channel.

- [#4435](https://github.com/HKUDS/nanobot/issues/4435) & [#4434](https://github.com/HKUDS/nanobot/issues/4434) (MCP Security): Both filed by the same reporter today, these describe a `enabledTools` allowlist bypass where resources and prompts from MCP servers are registered unconditionally, even when `enabledTools: []` is set to deny-all. Two fix PRs ([#4436](https://github.com/HKUDS/nanobot/pull/4436), [#4443](https://github.com/HKUDS/nanobot/pull/4443)) were opened within hours of the reports, suggesting high maintainer awareness of the issue.

- [#4442](https://github.com/HKUDS/nanobot/issues/4442): Duplicate `tool_use` IDs in streamed Anthropic responses permanently bricking sessions received two fix PRs on the same day ([#4444](https://github.com/HKUDS/nanobot/pull/4444), [#4443](https://github.com/HKUDS/nanobot/pull/4443)).

## Bugs & Stability

**Critical Severity:**
- **Duplicate tool_use IDs in streamed responses** ([#4442](https://github.com/HKUDS/nanobot/issues/4442)): A streaming Anthropic-family provider can yield the same `tool_use` block twice in one assistant turn. The runner persists it verbatim, causing HTTP 400 ("tool_use ids must be unique") on every subsequent turn in that session — effectively bricking the session permanently. **Two fix PRs exist**: [#4444](https://github.com/HKUDS/nanobot/pull/4444) by the bug reporter, and [#4443](https://github.com/HKUDS/nanobot/pull/4443) by a different contributor.

**High Severity:**
- **MCP `enabledTools` allowlist bypass** ([#4435](https://github.com/HKUDS/nanobot/issues/4435), [#4434](https://github.com/HKUDS/nanobot/issues/4434)): Both documented as a security advisory. The per-server MCP allowlist only gates `list_tools()`, leaving `list_resources()` and `list_prompts()` unguarded. A deny-all or restrictive config can leak sensitive MCP capabilities to the model. **Fix PR exists**: [#4436](https://github.com/HKUDS/nanobot/pull/4436) gates resource and prompt registration behind `enabledTools`.

**Medium Severity:**
- **MCP streamable_http reconnection crash** ([#4441](https://github.com/HKUDS/nanobot/pull/4441)): Gateway crashes with `RuntimeError: Attempted to exit cancel scope in a different task than it was entered in` when an MCP server session terminates and reconnection code runs. A fix PR is open.

**Closed/Resolved:**
- **Concurrency safety in per-run hooks** ([#4408](https://github.com/HKUDS/nanobot/issues/4408)): Mutating shared `self._loop._extra_hooks` under concurrent `Nanobot.run()` calls was fixed and closed.

## Feature Request Clusters

- **Mattermost / Self-hosted channels** ([#1011](https://github.com/HKUDS/nanobot/issues/1011)): Long-standing request for Mattermost integration, updated today. No associated PR, 4 👍. Indicates unmet demand for self-hosted communication channels.

- **Telegram Rich Messages** ([#4413](https://github.com/HKUDS/nanobot/issues/4413), closed [#4422](https://github.com/HKUDS/nanobot/issues/4422)): Request for Telegram Bot API 10.1 rich message support (tables, task lists, collapsible details, math blocks) — implemented and closed.

- **Read-only search history tool** ([#4440](https://github.com/HKUDS/nanobot/issues/4440), PR [#4439](https://github.com/HKUDS/nanobot/pull/4439)): Proposal for a `search_history` tool to query `memory/history.jsonl` without loading it into context. PR exists and is open.

- **Heartbeat model override** ([#4431](https://github.com/HKUDS/nanobot/issues/4431)): Request for a heartbeat-specific model override so heartbeats can use cheaper/dedicated models instead of the main agent model.

- **Cron job enhancements** (PR [#4225](https://github.com/HKUDS/nanobot/pull/4225)): Silent mode and `lock_recipient` for scheduled jobs, currently open.

- **TTS configuration system** (PR [#4316](https://github.com/HKUDS/nanobot/pull/4316)): Multi-provider TTS support (OpenAI, Groq, ElevenLabs) — merged today.

- **Read-only sessions** (PR [#4271](https://github.com/HKUDS/nanobot/pull/4271)): Skip LLM processing for sessions marked as read-only (e.g., welcome pages, announcements) — open.

## User Feedback Summary

- **Performance pain point**: A user reported `estimate_prompt_tokens` causing slow responses due to redundant tiktoken encoding of tool definitions on every call, despite caching at the Python object layer. This was fixed ([#4420](https://github.com/HKUDS/nanobot/issues/4420)).

- **Channel compatibility frustration**: One user on issue [#1011](https://github.com/HKUDS/nanobot/issues/1011) expressed dissatisfaction with all current channel options (Discord = gaming-focused, Telegram = privacy concerns with Russia, Slack = enterprise product, WhatsApp = requires business account), requesting an open-source self-hosted alternative in Mattermost.

- **Session reliability**: A user reported Anthropic sessions silently stopping due to duplicate tool_use IDs, with no recovery mechanism ([#4442](https://github.com/HKUDS/nanobot/issues/4442)). Two fix PRs appeared same-day.

- **Configuration confusion**: Multiple PRs today addressed env-var template resolution issues in transcription configs and WebUI settings ([#4323](https://github.com/HKUDS/nanobot/pull/4323), [#4324](https://github.com/HKUDS/nanobot/pull/4324), [#4325](https://github.com/HKUDS/nanobot/pull/4325)), indicating users encountered silent failures when credentials were stored as `${VAR}` templates.

- **Security awareness**: Two security reports filed today by an apparent security researcher suggest external auditing of the MCP integration is happening, potentially indicating real-world deployment concerns.

## Backlog Watch

- **[#1011](https://github.com/HKUDS/nanobot/issues/1011) (Mattermost Bot)**: Open since February 22, 2026 (4 months), with 4 👍 and only 1 comment from the author. No maintainer response or PR. This is the highest-voted issue today with no resolution path visible.

- **[#4092](https://github.com/HKUDS/nanobot/pull/4092) (OpenAI-compatible tool call parsing)**: Open PR since May 29, 2026 (24 days), with no comments from maintainers. Fixes two issues (#4059, #4061) related to non-stream tool-call parsing and structured tool call conversion. Unclear why it remains open and uncommented.

- **[#3869](https://github.com/HKUDS/nanobot/pull/3869) (DeepSeek message hardening)**: Open PR since May 16, 2026 (37 days). Addresses multiple DeepSeek-specific message validation issues including null content 400 errors and `"(empty)"` placeholder leakage. No maintainer comments visible.

- **MCP streamable_http crash** ([#4441](https://github.com/HKUDS/nanobot/pull/4441)): Filed today but addresses a "gateway crashes" issue that likely affects users in production with MCP server reconnection scenarios. No comments from maintainers yet.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-22

## 1. Today's Activity Brief
Over the past 24 hours, 41 issues and 50 pull requests were updated. Of those, 10 issues were closed and 9 PRs were merged/closed. No new releases were published. Activity centered on fixing installation and Docker build regressions, closing several high-severity bugs, and advancing features for channel integration (Lark, Slack, Mattermost) and configuration visibility. A significant S0‑severity bug regarding Anthropic provider availability in the Quickstart flow was reported and remains open.

## 2. Releases
None.

## 3. Project Progress (Merged/Closed PRs & Issues)
**Notable merged/closed PRs this period:**
- **#8096** – Fix `install.sh` to detect Intel vs Apple Silicon on macOS, preventing “bad CPU type in executable” errors on Intel Macs.
- **#7845** – Add regression test for poisoned activated‑tool lock recovery.
- **#7859** – Cover blank‑input turn rejection in runtime tests.
- **#7724** – Respect `ack_reactions` config in Lark/Feishu channel.
- **#7819** – Base missing‑skill suggestions on effective tool set (fixes over‑suggestion).
- **#7855** (open) – Surface `model_routes` and `embedding_routes` via Configurable so dashboard can discover them.
- **#8115** (new, open) – Fail fast when the gateway address is already in use, replacing silent degradation.

**Closed issues** include Docker build failure (#8089), Intel Mac install regression (#8095), agent rename state‑persistence bug (#7907), approval overlay theme bug (#7807), and several test‑coverage tasks.

## 4. Community Hot Topics
- **RFC: Work Lanes, Board Automation, and Label Cleanup** (#6808, 11 comments) – Governance proposal to reduce manual overhead in issue routing; accepted and rollout in progress.
- **“where is napcat channel”** (#2503, 9 comments) – User confusion about finding OneBot/NapCat channel option; request has been open since March.
- **Webhook transforms** (#2467, 6 comments) – Request to support custom payload inspection; remains open with no PR yet.
- **Tool‑calling memory consolidation** (#4760, 4 comments) – Proposal to use an internal tool instead of parsing JSON for memory output; accepted.
- **Prompt‑triggered install suggestions** (#6289, 4 comments) – Appears related to the now‑merged fix in #7819.

## 5. Bugs & Stability
**New/updated bugs reported today (2026-06-21/22):**
- **#8094** (S0 – data loss / security risk) – Anthropic provider added via Quickstart is unavailable in chat until a daemon reset; no fix PR yet.
- **#8095** (S1, **closed**) – `install.sh` installs arm64 on Intel Macs; fixed in #8096.
- **#8089** (S1, **closed**) – Dockerfile builds fail due to missing `aardvark-sys/build.rs`.
- **#7907** (S1, **closed**) – Agent rename mutates owned state before config persists; fix merged.
- **#7756** (S1) – Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns; open.
- **#6361** (S1) – Context compression drops tool calls/results for OpenAI‑compatible providers, causing tool loops; in progress.
- **#4879** (S1) – Gemini CLI OAuth not working; open with 2 reactions.
- **#7810** (S2) – git_operations gives no recovery hint outside a repository; fix PR #7835 waiting on author action.
- **#7898** (S1) – Rust native browser snapshots break under WebDriver; no fix PR yet.
- **#7896** (S2) – Groq native tool messages missing tool name; no fix PR yet.

**Fix PRs that address bugs:**
- #7835 (git_operations recovery hint), #8114 (Windows workspace‑prefixed path normalization), #8115 (gateway address conflict), #8112 (Docker Node base tag derivation).

## 6. Feature Request Clusters
- **Channel/Platform Extensions** – Multiple requests for additional integrations: OneBot/napcat (#2503), Mattermost WebSocket mode (#7098), Slack outbound attachment upload (#7170), Lark media markers (#8113). PRs exist for the latter three.
- **Observability** – Turn‑level OTel trace correlation (#6641) and full prompt/completion capture on LLM spans (#6642) are both accepted and tracked.
- **Security & Configuration** – Stronger pairing codes (alphanumeric, 32 chars, #6613), explicit Node container‑base major selection (#8105), surface model/embedding routes in config API (#7855).
- **Local‑First & Small Models** – Compact prompt mode with strict parsing (#5287) has 3 comments and 2 thumbs‑up; still in progress.
- **Tool & Skill Discovery** – User‑configured extra skill registries (#7827 PR) and prompt‑triggered install suggestions (#6289) are being worked.

## 7. User Feedback Summary
- **Pain points** continue around provider compatibility (Gemini OAuth, MiniMax tool loops, MCP tool not receiving on certain models). Several S1 bugs remain unresolved.
- **Installation friction** on macOS Intel (#8095) and Docker builds (#8089) caused blocked workflows; both were promptly fixed.
- **Channel‑specific issues** (Telegram prompt caching, Lark ack_reactions, Mattermost polling latency) show users are actively deploying across multiple platforms.
- **Positive signal**: quick turn‑around on regression fixes (e.g., Intel install fix merged within hours) and growing community contributions (8 different authors in today’s PR list).

## 8. Backlog Watch
- **#2503** (napcat/OneBot channel) – Created 2026-03-02, 9 comments, accepted but no PR or maintainer update in months.
- **#2467** (webhook transforms) – Created 2026-03-02, 6 comments, accepted but no PR.
- **#4760** (tool‑calling memory consolidation) – Created 2026-03-26, accepted, still open.
- **#5287** (local‑first mode) – Created 2026-04-04, in progress with no PR yet.
- **#6074** (track 153 lost commits) – Created 2026-04-24, still gathering information; maintainer‑owned.
- **#8043** (RFC to retire aardvark‑sys crate) – Created 2026-06-20, 2 comments, awaiting maintainer review.

These items represent long‑standing accepted proposals or critical bugs that have not yet been actioned.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-22

## 1. Today's Activity Brief

Five issues were updated in the last 24 hours (three remain open, two were closed). Four pull requests received updates (three open, one closed). One automated nightly release was published (v0.3.0-nightly.20260621.287853ab). Two bugs were fixed (Matrix `allow_from` parsing and `mcp add` flag handling), while a critical token‑consumption bug and a Safari compatibility issue remain open and active.

## 2. Releases

- **nightly** – `v0.3.0-nightly.20260621.287853ab`
  Automated build against `main`. No manual changelog; see [full comparison](https://github.com/sipeed/picoclaw/compare/v0.3.0...main).
  *Note:* unstable, no breaking changes or migration notes provided.

## 3. Project Progress

- **PR #2565** ([closed](https://github.com/sipeed/picoclaw/pull/2565)) – Fix for `GroupTriggerConfig.MentionOnly` being incorrectly omitted when set to `false`. The Go `omitempty` tag caused the field to be silently dropped; the fix preserves an explicit `mention_only=false` in configuration loads.
- **Issue #3044** ([closed](https://github.com/sipeed/picoclaw/issues/3044)) – `allow_from` now works correctly with Matrix user IDs containing colons (`@localpart:domain`).
- **Issue #3041** ([closed](https://github.com/sipeed/picoclaw/issues/3041)) – `mcp add` no longer mis‑parses global flags into positional arguments, fixing HTTP/SSE server registration and server name handling.

## 4. Community Hot Topics

- **#3012** [OPEN] – *“Continuous consumption of tokens every minutes when evolution is enabled”* (5 comments, 0 👍)
  User reports unexpected token drain on FreeBSD with MiniMax provider. The issue has been active since June 5 and received a comment today, indicating ongoing investigation.
  [Link](https://github.com/sipeed/picoclaw/issues/3012)

- **#3093** [OPEN] – *“I need SimpleX or tox”* (2 comments, 1 👍)
  Feature request for adding a gateway to SimpleX, Wire, or Tox protocols. One user reacted positively but no maintainer response is visible.
  [Link](https://github.com/sipeed/picoclaw/issues/3093)

- **#3152** [OPEN] – PR *“add installation instructions to picoclaw skills search”* (0 comments, 0 👍)
  Aims to output installation steps when searching for skills. No discussion yet.
  [Link](https://github.com/sipeed/picoclaw/pull/3152)

## 5. Bugs & Stability

| Issue | Status | Severity | Summary |
|-------|--------|----------|---------|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | **Open** | Critical | Continuous token consumption every minute when Evolution is enabled (draft mode, code path trigger). No fix PR yet. |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | **Open** (stale) | Medium | PicoClaw panel does not work on Safari iOS <16.4. Raspberry Pi OS environment. No fix PR. |
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) | **Closed** | Low | `allow_from` failed for Matrix user IDs with colons. Now fixed (presumably via an unlinked PR or commit). |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | **Closed** | Low | `mcp add` mis‑parsed global flags, breaking HTTP/SSE adds and naming stdio servers. Fix may be in the nightly build. |

No new crash or regression reports were opened today.

## 6. Feature Request Clusters

- **New gateway protocols**: [#3093](https://github.com/sipeed/picoclaw/issues/3093) requests SimpleX, Wire, or Tox protocol support. No related PR exists.
- **Skill installation UX**: PR [#3152](https://github.com/sipeed/picoclaw/pull/3152) proposes showing installation instructions in `picoclaw skills search` output. No counter‑proposals or related issues.

No other feature requests appeared in today’s activity.

## 7. User Feedback Summary

- **Pain point – token economy**: Evolution mode can silently drain tokens every minute (issue #3012). The reporter provided a detailed environment (FreeBSD, v0.2.9, MiniMax) but no fix has been linked.
- **Platform compatibility**: Safari on older iOS versions fails to load the panel (#3090). The user is on Raspberry Pi OS (Debian 13).
- **Configuration correctness**: Two closed bugs (#3044, #3041) show that configuration parsing (Matrix IDs, `mcp add` flags) was fragile – both were fixed today.
- **General sentiment**: No explicit praise or frustration beyond the bugs. The one reaction (+1) on #3093 signals interest in broader protocol support.

## 8. Backlog Watch

- **#3012** – Token‑consumption bug. No maintainer response in the thread. High impact, open since June 5.
- **#3093** – Gateway protocol request. No maintainer comment or milestone.
- **#3090** – Safari iOS compatibility bug. stale label indicates low priority; only two comments.
- **Dependency PRs** – [#3103](https://github.com/sipeed/picoclaw/pull/3103) (typescript-eslint bump) and [#3105](https://github.com/sipeed/picoclaw/pull/3105) (eslint bump) have been open since June 11 and carry the `stale` label. No maintainer review.

All stalled items lack recent maintainer activity beyond the automated label updates.

</details>