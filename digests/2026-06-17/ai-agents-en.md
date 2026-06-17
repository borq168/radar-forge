# OpenClaw Ecosystem Digest 2026-06-17

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-17 00:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-17

## 1. Today's Activity Brief

OpenClaw saw high activity today with 500 issues and 500 PRs updated in the last 24 hours. Of those, 466 issues remain open/active with 34 closed, while 362 PRs are open and 138 have been merged or closed. Two releases (v2026.6.8 and v2026.6.8-beta.2) were published, both focusing on richer channel delivery for Telegram and WhatsApp. The most active discussion continues around issue #75 (Linux/Windows Clawdbot Apps, 109 comments), while several P0 and P1 bugs around session state and message loss remain open and actively discussed.

## 2. Releases

**v2026.6.8** (and **v2026.6.8-beta.2**, identical changelog) — `openclaw 2026.6.8`

**Highlights:**
- Telegram rendering improvements: structured text with tables, lists, expandable blockquotes, preserved intentional line breaks, and CLI-backed replies
- WhatsApp now honors configured ACP bindings

Reference: [#92679](https://github.com/openclaw/openclaw/issues/92679), [#931](https://github.com/openclaw/openclaw/issues/931)

No breaking changes or migration notes were mentioned in the release notes.

## 3. Project Progress

Three PRs were closed/merged today:

- **#68936** ([closed](https://github.com/openclaw/openclaw/pull/68936)) — Autofix: add PR review autofix pipeline + Windows daemon (author: [@shadowleaf-studios](https://github.com/shadowleaf-studios))
- **#93773** ([closed](https://github.com/openclaw/openclaw/pull/93773)) — fix(ui): scope Skill Workshop proposals to selected agent (author: [@TurboTheTurtle](https://github.com/TurboTheTurtle))
- **#93779** ([closed](https://github.com/openclaw/openclaw/pull/93779)) — fix(webchat): skip textarea resize during IME composition to eliminate typing lag (author: [@joelnishanth](https://github.com/joelnishanth))

Several open PRs with "proof: supplied" status continue advancing:

- **#93820** ([open](https://github.com/openclaw/openclaw/pull/93820)) — fix(imessage): recognize MiniMax mm: reasoning tags in reflection guard
- **#93823** ([open](https://github.com/openclaw/openclaw/pull/93823)) — fix(whatsapp): keep opening text chunk when first media fails on multi-chunk reply
- **#93822** ([open](https://github.com/openclaw/openclaw/pull/93822)) — fix(slack): forward identity (username/icon) to chat.update for edited messages
- **#93821** ([open](https://github.com/openclaw/openclaw/pull/93821)) — fix(qmd): strip mcporter daemon startup logs from stdout before JSON.parse
- **#93819** ([open](https://github.com/openclaw/openclaw/pull/93819)) — fix: show 0 instead of ? for context tokens on fresh session
- **#93815** ([open](https://github.com/openclaw/openclaw/pull/93815)) — Suppress internal source-reply final statuses

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| Issue | Comments | Reactions | Summary |
|-------|----------|-----------|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 109 | 👍 79 | Linux/Windows Clawdbot Apps — long-running request for desktop app support beyond macOS/iOS/Android |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 30 | 👍 1 | P0: Track core session/transcript SQLite migration via accessor seam — high-priority infrastructure work |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 19 | 👍 1 | Bug: Subagent completion silently lost — multiple failure modes for subagent orchestration |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 17 | 👍 0 | Bug: Signal daemon stop() race condition on SIGUSR1 restart — orphaned processes |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 16 | 👍 1 | Bug: Agent replies to previous message instead of current (session context confusion) — **closed** |

### Underlying Needs

The most active discussions reveal several persistent user concerns:
- **Cross-platform parity**: Issue #75 (109 comments, 79 👍) shows strong demand for Linux and Windows Clawdbot apps, indicating the macOS/iOS/Android focus leaves a significant user base unserved
- **Session reliability**: Multiple top-voted issues (#88838, #44925, #32296, #58450) revolve around session context, message loss, and subagent orchestration failures — users are experiencing silent failures in production
- **Subagent orchestration fragility**: Issues #44925, #67777, and #43367 all describe distinct failure modes where subagent completions are lost or results are not delivered back to the requesting session

## 5. Bugs & Stability

### Critical (P0) Issues

- **#88838** ([open](https://github.com/openclaw/openclaw/issues/88838)) — Track core session/transcript SQLite migration via accessor seam. Impact: session-state, message-loss. This is a foundational infrastructure issue marked as highest priority. No fix PR linked yet.

### High Severity (P1) Issues

- **#44925** ([open](https://github.com/openclaw/openclaw/issues/44925)) — Subagent completion silently lost on timeout — no retry, no notification, no auto-restart. Impact: session-state, message-loss. Labels: `needs-maintainer-review`, `needs-product-decision`
- **#22676** ([open](https://github.com/openclaw/openclaw/issues/22676)) — Signal daemon stop() race condition on SIGUSR1 restart causes orphaned processes and send failures. Linked PR open. Impact: message-loss, crash-loop
- **#62505** ([open](https://github.com/openclaw/openclaw/issues/62505)) — Coding Agent never completes anything — regression from 2026.4.2. Impact: session-state, message-loss. Linked PR open
- **#43367** ([open](https://github.com/openclaw/openclaw/issues/43367)) — Multi-agent orchestration unstable: concurrent config overwrites, session-lock failures, detached child work. Needs live repro
- **#63216** ([open](https://github.com/openclaw/openclaw/issues/63216)) — Repeated hard resets on same session despite high reserveTokensFloor; retry loop re-injects bootstrap context. Needs live repro
- **#54155** ([open](https://github.com/openclaw/openclaw/issues/54155)) — Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation. Needs maintainer review
- **#65538** ([open](https://github.com/openclaw/openclaw/issues/65538)) — [Accessibility] Screen readers announce every token during streaming due to aria-live="polite". Needs live repro
- **#65624** ([open](https://github.com/openclaw/openclaw/issues/65624)) — Mattermost slash commands default to cleartext callback URLs exposing reusable command tokens (CVSS 7.6/8.6). Needs security review
- **#65374** ([open](https://github.com/openclaw/openclaw/issues/65374)) — Built-in dreaming system contaminates agent identity in multi-agent setups — cross-agent memory pooling. Source repro available
- **#64810** ([open](https://github.com/openclaw/openclaw/issues/64810)) — Heartbeat/system events can interrupt and swallow in-progress replies in Telegram topic sessions. Needs live repro
- **#58957** ([open](https://github.com/openclaw/openclaw/issues/58957)) — Model switch can fail silently when carried-over session context is too large. Needs maintainer review

### Fix PRs in Progress

Several P1 bugs have associated open PRs with supplied proof:
- **#93056** ([open PR](https://github.com/openclaw/openclaw/pull/93056)) — fix(agents): sync stale this.model snapshot after /model switch (fixes #92415)
- **#93620** ([open PR](https://github.com/openclaw/openclaw/pull/93620)) — fix(openai-completions): preserve reasoning_content on assistant messages for OpenRouter providers
- **#93786** ([open PR](https://github.com/openclaw/openclaw/pull/93786)) — fix(plugins): treat refreshable catalogs as requiring runtime discovery (fixes #93775)
- **#59336** ([open PR](https://github.com/openclaw/openclaw/pull/59336)) — fix: Config Raw mode permanently disabled due to round-trip check regression (fixes #59330)
- **#85505** ([open PR](https://github.com/openclaw/openclaw/pull/85505)) — fix(cli-runner): add host-only CLI auth epoch mode
- **#58373** ([open PR](https://github.com/openclaw/openclaw/pull/58373)) — fix(agents): bootstrap non-main models.json on skip to prevent Unknown model after agents.create
- **#50520** ([open PR](https://github.com/openclaw/openclaw/pull/50520)) — fix(outbound): strip inbound metadata before delivery (fixes #39847)

## 6. Feature Request Clusters

### Multi-Agent / Per-Agent Configuration
- **#63829** ([open](https://github.com/openclaw/openclaw/issues/63829), 9 👍) — Per-agent memory-wiki vault configuration for isolated knowledge bases
- **#66252** ([open](https://github.com/openclaw/openclaw/issues/66252)) — Per-agent TTS/STT configuration overrides for multi-language support
- **#67420** ([open PR](https://github.com/openclaw/openclaw/pull/67420)) — feat(memory): per-agent dreaming control (addressing OOM when all agents dream simultaneously)

### Security & Access Control
- **#39604** ([open](https://github.com/openclaw/openclaw/issues/39604), 9 👍) — Add tools.web.fetch.allowPrivateNetwork for private network access
- **#78308** ([open](https://github.com/openclaw/openclaw/issues/78308)) — Channel-mediated approval for MCP tool calls (consent envelope)
- **#64046** ([open](https://github.com/openclaw/openclaw/issues/64046)) — Support for sensitive data masking/de-identification in config files, logs, and UI
- **#39065** ([open PR](https://github.com/openclaw/openclaw/pull/39065)) — Security: add configurable unpaired DM responses

### Channel & Delivery Enhancements
- **#54531** ([open](https://github.com/openclaw/openclaw/issues/54531)) — Force reply to originating channel (Telegram/Discord/WhatsApp)
- **#50093** ([open](https://github.com/openclaw/openclaw/issues/50093)) — WhatsApp: Backfill missed messages after reconnection
- **#81061** ([open](https://github.com/openclaw/openclaw/issues/81061), 3 👍) — Hook: before_route_inbound_message for channel bridging/proxying
- **#52640** ([open](https://github.com/openclaw/openclaw/issues/52640), 2 👍) — Persistent task-status surface for long-running channel turns
- **#63930** ([open](https://github.com/openclaw/openclaw/issues/63930)) — Support Anthropic advisor tool (beta server-side tool)
- **#93516** ([open PR](https://github.com/openclaw/openclaw/pull/93516)) — feat(matrix): add configurable apiPrefix for non-standard homeserver API paths

### Platform Expansion
- **#75** ([open](https://github.com/openclaw/openclaw/issues/75), 79 👍) — Linux/Windows Clawdbot Apps (longest-standing feature request, since 2026-01-01)

### Memory & Context Management
- **#88504** ([open PR](https://github.com/openclaw/openclaw/pull/88504)) — feat(memory): add multi-slot memory role architecture (XL size, multiple merge-risk labels)
- **#54373** ([open](https://github.com/openclaw/openclaw/issues/54373)) — RFC: Context Provenance — add source/volatility metadata to injected context segments

## 7. User Feedback Summary

### Pain Points (Reported Today)

**Session Reliability:**
- "Subagent task orchestration has multiple failure modes where results are silently lost" (#44925)
- "The agent responds to the previous user message instead of the current message" (#32296, closed)
- "An agent turn can end promising a follow-up without actually starting any action" (#58450)
- "Coding Agent never completes anything (worked in 2026.4.2 and earlier)" (#62505)
- "Repeated hard resets on same session key despite high reserveTokensFloor" (#63216)

**Performance & Resource Usage:**
- "Gateway memory grows unbounded over time (~50-100 MB/min)" (#55334) — sessions.json accumulation
- "Gateway memory leak: 389MB → 14.7GB over 4 days" (#54155)
- "Every new session starts with 20-30% of context already consumed by bootstrap files" (#67419)

**Channel-Specific Issues:**
- "Space/Group messages silently ignored (DMs work correctly)" on Google Chat (#58514)
- "Feishu channel fails with tenant_access_token error when HTTP proxy is configured" (#48949)
- "Restart storm from telegram.retry.jitter type mismatch" (#52130)
- "WhatsApp: opening text chunk dropped when first media fails on multi-chunk reply" — fix PR #93823 open

**Configuration & Onboarding:**
- "${XDG_CONFIG_HOME} is not processed when installing a skill" (#53628)
- "OPENCLAW_HOME set to ~/.openclaw creates nested directory ~/.openclaw/.openclaw" (#45765)
- "TypeError during openclaw onboard when replacing Telegram token" (#67366)

**User Satisfaction Signals:**
- The release notes highlight improved Telegram rendering (tables, lists, blockquotes) — this addresses long-standing complaints about message formatting
- Several fix PRs (especially #93819 for `/status` showing `?` instead of `0`, and #93779 for IME typing lag) demonstrate responsiveness to user-reported UX issues

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Oldest First)

- **#75** ([open since 2026-01-01](https://github.com/openclaw/openclaw/issues/75), 109 comments, 79 👍) — Linux/Windows Clawdbot Apps. Labels: `help wanted`, `needs-maintainer-review`, `needs-product-decision`. This has been open for over 5 months with no maintainer decision despite being the most-requested feature.

- **#44925** ([open since 2026-03-13](https://github.com/openclaw/openclaw/issues/44925), 19 comments) — Subagent completion silently lost. Labels: `needs-maintainer-review`, `needs-product-decision`, `needs-live-repro`. Critical P1 bug with no maintainer review or fix PR.

- **#43367** ([open since 2026-03-11

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report – 2026-06-17

## 1. Daily Cross-Project Overview

OpenClaw dominated activity with ~500 issues and 500 PRs updated, plus two releases (v2026.6.8 and beta). NanoBot and Zeroclaw showed moderate activity (9–36 issues, 23–50 PRs), while PicoClaw published a nightly build and merged a batch of low-level fixes. Common themes across projects include session/context reliability, channel-specific delivery repairs, and emerging security hardening efforts. No single breakthrough or ecosystem-wide shift is visible; rather, each project focused on incremental improvements and bug triage.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Releases Published Today | Activity Note |
|------------|----------------|-------------|-------------------------|---------------|
| OpenClaw   | 500 (466 open, 34 closed) | 500 (362 open, 138 merged/closed) | v2026.6.8, v2026.6.8-beta.2 | Very high – two releases, heavy community discussion |
| NanoBot    | 9 (5 open, 4 closed) | 23 (9 open, 14 merged/closed) | None | Moderate – WebUI automation view merged, several bugs fixed |
| Zeroclaw   | 36 (35 open, 1 closed) | 50 (37 open, 13 merged/closed) | None | Moderate – focus on v0.8.1 integration, gateway, and documentation complaints |
| PicoClaw   | 15 (13 open, 2 closed) | 16 (3 open, 13 merged/closed) | nightly v0.2.9-nightly | Moderate – nightly build, several stability/security PRs merged |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume is an order of magnitude higher than the other three projects combined. Its release cadence (two releases in one day) and the longevity of feature request #75 (Linux/Windows desktop apps, 109 comments, 79 👍) indicate a much larger community surface area. Technically, OpenClaw’s daily digest highlights **session reliability** and **subagent orchestration** as primary pain points (P0/P1 bugs for message loss, session context confusion, gateway memory leaks), while NanoBot, Zeroclaw, and PicoClaw each address narrower subsets: WebUI usability, tool execution consistency, and low-level process stability, respectively. OpenClaw also shows a broader range of channel integrations (Telegram, WhatsApp, Slack, iMessage, Feishu) compared to peers.

## 4. Shared Technical Focus Areas

- **Session reliability & state persistence** – All four projects contain issues or fixes related to session context, message loss, or transcript persistence.
  - OpenClaw: P0 bug #88838 (SQLite migration), #44925 (subagent completion lost), #63216 (hard resets).
  - NanoBot: #4242 (dream cursor not advancing), #4374 (SOUL.md write asymmetry).
  - Zeroclaw: #7753 (channel session persistence race), #7799 (blank transcript on resume).
  - PicoClaw: #2990 (merged – full session history for WebUI).

- **Channel-specific delivery fixes** – Each project merged or discussed PRs to fix channel message formatting, media handling, or authentication.
  - OpenClaw: Telegram tables/blockquotes, WhatsApp ACP bindings, Slack identity forwarding.
  - NanoBot: WhatsApp voice note conversion (PR #4353).
  - Zeroclaw: Discord slash reconcile persistence (#7784), Slack/Discord missing from prebuilt binaries (#7787).
  - PicoClaw: Telegram forum topic chat ID fix (#3135).

- **Security hardening** – Several projects report or address security concerns, though approach varies.
  - OpenClaw: #65624 (cleartext callback tokens), #78308 (MCP consent envelope), #39604 (private network access).
  - Zeroclaw: RFC #7675 (hardened CI / SBOM).
  - PicoClaw: 15 security advisories filed by @YLChen-007 (SSRF, symlink races, CSRF).

- **Tool execution consistency** – Multiple projects show bugs where tools are not sent to models or profile settings are ignored.
  - OpenClaw: #63930 (Anthropic advisor tool), #93620 (reasoning content preservation).
  - Zeroclaw: #7756 (MCP tools unavailable on certain providers), #7796 (max_tool_iterations ignored).
  - PicoClaw: #2987 (tool_call messages dropped during streaming, now fixed).

## 5. Differentiation Analysis

- **OpenClaw** – Positions as the core reference project with broadest feature surface: multi-agent orchestration, cross-platform (macOS/iOS/Android only currently), and high-volume community. Its day’s activity includes both feature work (rich Telegram rendering) and critical session infrastructure issues.
- **NanoBot** – Focuses on WebUI automation management (merged #4330), installer robustness (macOS PEP 668 fix, Debian container issue), and context caching. User base appears more self-hosted, with concerns about Dream mode control and workspace security.
- **Zeroclaw** – Concentrates on v0.8.1 integration (tracker #6970), gateway WebSocket decoupling (#7759), and tool execution profile respect. Documentation quality is a prominent pain point (#7758, #7762).
- **PicoClaw** – Emphasizes low-level stability (panic recovery, error handling) and security audits. The batch of 15 security advisories from a single researcher is unique among peers. Nightly build cadence indicates rapid iteration but fewer feature requests.

## 6. Community Activity Notes

- **High activity** – OpenClaw (500 issues, 500 PRs, 2 releases).
- **Moderate activity** – Zeroclaw (36 issues, 50 PRs), NanoBot (9 issues, 23 PRs), PicoClaw (15 issues, 16 PRs).
- **Release pattern** – Only OpenClaw and PicoClaw published releases today; NanoBot and Zeroclaw did not cut new versions.
- **Community engagement depth** – OpenClaw’s issue #75 (Linux/Windows apps) has 109 comments and 79 reactions, dwarfing the most-discussed items in other projects (NanoBot #4360: 6 comments, Zeroclaw #6808: 11, PicoClaw #2404: 12). This suggests OpenClaw’s user base is both larger and more vocal about cross-platform parity.

## 7. Evidence-Backed Observations

1. **Session reliability is a cross-cutting challenge.** Every project has open bugs or recently merged fixes addressing lost context, duplicate turns, or state corruption. OpenClaw’s P0/P1 issues, NanoBot’s dream cursor and workspace write asymmetry, Zeroclaw’s session persistence race, and PicoClaw’s full history fix all point to a shared pain point in agent memory management.

2. **Channel-specific bug fixes dominate daily PRs.** Across all projects, the majority of merged PRs target individual channels (Telegram, WhatsApp, Slack, Discord, Email). This reflects the complexity of supporting multiple messaging platforms and the iterative nature of delivery hardening.

3. **Security interest is rising but fragmented.** Zeroclaw’s CI hardening RFC (#7675) and PicoClaw’s 15 security advisories filed on June 9 contrast with OpenClaw’s ongoing security issues (cleartext tokens, MCP consent). NanoBot’s security focus appears lower. No coordinated security response or disclosure is visible today.

4. **Documentation quality is a notable pain point in Zeroclaw but not echoed elsewhere.** Zeroclaw’s #7758 (“it doesn’t matter how good the code is if the documentation is crap”) and #7762 (cron docs missing) stand out, while other projects’ digests do not report similar complaints. This is a project-specific gap.

5. **Cross-platform parity demand is unique to OpenClaw.** The long-standing request for Linux/Windows desktop apps (#75, open since January 2026, 79 👍) has no equivalent in NanoBot, Zeroclaw, or PicoClaw, suggesting those projects either already support those platforms or focus on web/headless operation. No clear cross-project signal for other platform trends emerges.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-17

## Today’s Activity Brief
- **9 issues** were updated in the last 24 hours (5 open, 4 closed), and **23 pull requests** were updated (9 open, 14 merged/closed).
- No new releases were published today.
- The project merged fixes for two long-standing bugs (stream idle timeout validation, empty-response duplicate turns) and shipped a WebUI automation management view.
- Community reports highlighted a persistent installer crash in Debian containers, a workspace SOUL.md read/write asymmetry, and proxy configuration issues with local model servers.
- Several PRs landed addressing installation, context caching, memory delivery, and MCP notification handling.

## Releases
*None.* No new releases were cut today.

## Project Progress (Merged/Closed PRs)
14 PRs were merged or closed today. Notable advances:

- **WebUI automation management** – PR #4330 adds a first-class “Automations” section in the WebUI (filter, search, run, pause/resume, delete user automations; system jobs remain read-only).
- **Stream idle timeout validation** – PR #4363 (merged) centralises `resolve_stream_idle_timeout_s()` to reject invalid/malformed `NANOBOT_STREAM_IDLE_TIMEOUT_S` values, fixing #4065.
- **Empty-response duplicate turn fix** – PR #4358 (merged) passes `persist_user_message=False` on retry, preventing duplicate user turns when API returns empty, fixing #4079.
- **macOS installer fix** – PR #4368 (merged) avoids system-wide pip installs on externally-managed Python (PEP 668) by preferring virtualenv, uv, pipx, or a `~/.nanobot/venv` fallback.
- **Idle auto-compact default** – PR #4370 (merged) changes the default `idleCompactAfterMinutes` from 0 to 15 minutes, enabling automatic context compaction after inactivity.
- **Dream empty-run explanation** – PR #4369 (merged) replaces the opaque `/dream` no-history response with a helpful message pointing users to idle auto-compact.
- **Recent-history token-based digest** – PR #4352 (merged) switches the recent-history digest cap from 32k characters to a token-aware limit, preventing overshoot with CJK or code-heavy text.
- **Kimi K2.7 thinking support** – PR #4361 (merged) adds K2.7 model IDs to the thinking allowlist and applies Moonshot temperature override.
- **WebUI LAN connectivity** – PR #4364 (merged) fixes WebUI stuck-on-connecting when accessed from a LAN via Vite dev server, by overriding the WebSocket URL.
- **Documentation installer command pattern** – PR #4365 (merged) replaces `sh -c "$(curl ...)"` with `curl ... | sh` for safer embedding in Dockerfiles.
- **Bridge node_modules ignore** – PR #4355 (merged) adds `bridge/node_modules/` to `.gitignore`.
- **Embeddings API support** (closed, #3401) – merged earlier, but updated today; adds first-class embeddings endpoints for OpenAI-compatible providers.
- **WebUI auto-compact transcript** – PR #4247 (merged) ensures on-demand transcript compaction when file exceeds 8 MB limit, preventing history disappearance.

## Community Hot Topics
Most-discussed issues and PRs (by comment count or recency):

- **#4360** [OPEN] Installer fails with “end of file unexpected” in Debian container. Author `@The-Markitecht` reports that the `pip: 20: Syntax error` occurs after package installation. 6 comments, no fix PR yet.
  → [Issue link](https://github.com/HKUDS/nanobot/issues/4360)

- **#4242** [OPEN] Disabling `dream.enabled` still injects full history into system prompt via Recent History section. `@skyline75489` reports that the dream cursor never advances because `dream.run()` is never called. 1 comment.
  → [Issue link](https://github.com/HKUDS/nanobot/issues/4242)

- **#4371** [OPEN] PR to add a `# breakpoint` before Recent History in system prompt to improve caching. `@sumleo` proposes a structural change that could reduce token costs for consecutive calls. 0 comments, but notable as a potential performance improvement.
  → [PR link](https://github.com/HKUDS/nanobot/pull/4371)

- **#4375** [OPEN] Git commands blocked by workspace security guard in subdirectories within allowed workspace. `@jjmanrique` describes blocked `git add/commit/push`. No comments yet.
  → [Issue link](https://github.com/HKUDS/nanobot/issues/4375)

- **#4374** [OPEN] Project workspaces: `SOUL.md`/`USER.md` read from project root but written to default workspace – read/write asymmetry. `@maximilize` identifies the bug.
  → [Issue link](https://github.com/HKUDS/nanobot/issues/4374)

## Bugs & Stability
New bugs reported today (2026-06-16/17) grouped by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | #4375 | Git commands blocked by workspace security guard in subdirectories, even when within allowed workspace boundary. | No fix PR yet. |
| **Medium** | #4374 | SOUL.md/USER.md write path asymmetry in project workspaces: agent reads from project root but writes to default workspace, causing inconsistent state. | No fix PR yet. |
| **Medium** | #4360 | Installer crashes on fresh Debian 13 container with `Syntax error: end of file unexpected` during pip command. Created yesterday, 6 comments, no fix. | No fix PR yet. |
| **Medium** | #4366 | Local model servers (Ollama, llama.cpp, vLLM) broken when host has proxy environment variables set; httpx routes all traffic through proxy. | PR #4367 open (fixes by disabling proxy for local endpoints). |
| **Low** | #4372 (PR) | MCP malformed progress notifications missing `params.progressToken` cause `ClientSession` errors. | PR #4372 (open) filters malformed progress notifications. |
| **Low** | #4353 (PR) | WhatsApp voice notes (`.ogg`/`.opus`) cause empty STT with some providers. | PR #4353 (open) adds ffmpeg conversion to WAV 16k mono. |

Earlier bugs fixed via merged PRs today: stream idle timeout parsing (#4065 → #4363), empty-response duplicate turns (#4079 → #4358), Dream empty-run confusion (reported through #4369 fix, not tied to one issue).

## Feature Request Clusters
Several user requests and related PRs were active today:

- **Workspace security / read-only file paths** – #4375 (Git blocked) and #4053 (open PR to keep read-only roots out of write paths) show ongoing interest in more flexible workspace security rules.
- **Local model proxy configuration** – #4366 and PR #4367 address the need to bypass proxies for local endpoints while respecting them for cloud calls.
- **Dream & history management** – #4242 (dream cursor standstill) and #4371 (system prompt caching breakpoint) reflect user desire for more efficient and predictable history handling.
- **Installer robustness** – #4360 (Debian container crash) and PR #4368 (macOS externally-managed Python) show community demand for installers that work across modern Linux and macOS environments.
- **Accessibility / LAN WebUI** – PR #4364 fixes LAN connectivity, a common pain point for users self-hosting on local networks.

## User Feedback Summary
- **Pain points**:
  - Installer still fragile on minimal Docker images (Debian 13) – user had to manually debug a shell syntax error.
  - Workspace security guard overblocks legitimate Git operations in subdirectories – user wants more precise path allowance.
  - Project workspaces cause silent state corruption when `SOUL.md` is written to wrong location.
  - Proxy environment variables break local model servers – user must unset proxy to use Ollama.
  - Disabling Dream does not stop full history injection – user expected Dream-free operation to reduce token usage.
- **Satisfaction indicators**:
  - Quick turnaround on stream idle timeout and empty-response fixes (issues filed May 29, fixed June 16).
  - Positive reception of WebUI automation view (PR #4330 merged) – adds requested feature.
  - macOS installation fix for PEP 668 is welcomed by users on newer Python installations.
  - Informative Dream empty-run message (PR #4369) reduces user confusion.

## Backlog Watch
Issues and PRs that remain open without significant maintainer response or recent activity:

- **#4242** (2026-06-08) – Dream cursor not advancing when disabled; affects users who want to disable Dream without losing history control. 1 comment, no maintainer reply yet.
- **#3662** (PR, 2026-05-06) – Token estimation avoiding network loads; aims to improve offline/resource-constrained operation. No merge activity since May. Could benefit from maintainer review.
- **#4053** (PR, 2026-05-29) – Keep read-only roots out of write paths; complements #4375. Still open, updated today without merge. Needs decision on approach.
- **#4375** (2026-06-17) – Git command blocked by workspace security – fresh but important for multi-directory workflows; no response yet.
- **#4360** (2026-06-16) – Installer crash on Debian 13; 6 comments from user and community but no maintainer confirmation or fix PR. Risk of deterring new users on Debian.

All links: as provided in the data. Maintainer attention on the installer issue and the dream-cursor-standstill bug would improve newcomer experience and feature consistency.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-17

## Today's Activity Brief

In the past 24 hours, Zeroclaw saw 36 issues updated (35 open, 1 closed) and 50 pull requests updated (37 open, 13 merged/closed). No new releases were published. The project remains focused on v0.8.1 integration work, configuration improvements, and hardening of the gateway and runtime systems. A single bug report about documentation quality was closed, while several critical bugs involving tool execution, channel session persistence, and prebuilt binary features were filed and are under active investigation.

## Releases

No new releases.

## Project Progress

**Merged/Closed PRs (13 total, partial list):**
- [#7784](https://github.com/zeroclaw-labs/zeroclaw/pull/7784) — fix(discord): persist slash reconcile state + read shared stores from data_dir (closed, L-sized).
- [#7734](https://github.com/zeroclaw-labs/zeroclaw/pull/7734) — feat(skills): expose frontmatter tags in the editor + slash-command toggle (closed, S-sized).

These represent concrete improvements to Discord channel durability and skill editor usability. The remaining 11 merged/closed PRs are not shown in the top-20 listing but collectively contribute to ongoing stabilization across multiple components.

## Community Hot Topics

- [RFC: Work Lanes, Board Automation, and Label Cleanup (#6808)](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — 11 comments. This governance RFC proposes workflow automation for issue triage, project board management, and label cleanup. It has been accepted and rollout is in progress. The high engagement reflects maintainer interest in streamlining project operations as the codebase grows.

- [Tracker: v0.8.1 integration/channel/provider/tool queue and history (#6970)](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — 3 comments. Operational tracker for the v0.8.1 release, coordinating additive integrations across channels, providers, and tools.

- [Bug: It doesn't matter how good the code is if the documentation is crap (#7758)](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) — 2 comments, closed. A sharp user complaint about missing configuration documentation, which was quickly closed (likely after a fix was applied or acknowledged).

- [Feature: Decouple gateway WebSocket lifetime from agent turn lifecycle (#7759)](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) — 2 comments. Requests that client disconnects do not cancel in-flight agent turns. The issue is marked priority:p1 and status:in-progress.

- [Bug: No pairing code shown when running gateway start on alternate port (#5266)](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) — 2 comments. A long-standing bug (filed April 3) that still lacks a pairing-code display when using non-default ports. A fix PR [#7798](https://github.com/zeroclaw-labs/zeroclaw/pull/7798) was opened today.

## Bugs & Stability

**Severity S1 (workflow blocked):**
- [Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns (#7756)](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) — Tools registered but not sent to model on certain providers. No fix PR yet.
- [Code history can send non-alternating Anthropic messages (#7804)](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) — Long sessions produce adjacent same-role messages causing 400 errors. No fix PR yet.
- [Direct agent turns ignore runtime-profile max_tool_iterations (#7796)](https://github.com/zeroclaw-labs/zeroclaw/issues/7796) — Tool iteration limit always defaults to 10 regardless of profile. No fix PR yet.
- [Prebuilt v0.8.0 binaries ship without Slack/Discord channel features (#7787)](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) — Regression from 0.7.x; Slack not functional in official release. No fix PR yet.
- [Channel session persistence: pre-existing per-session ordering race (#7753)](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) — Concurrent processing of same-sender messages causes session-store corruption. No fix PR yet.
- [Resumed Code sessions reopen with blank transcript (#7799)](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) — Visible transcript empty after resume. No fix PR yet.

**Severity S2 (degraded behavior):**
- [git_operations gives no recovery hint outside a repository (#7810)](https://github.com/zeroclaw-labs/zeroclaw/issues/7810) — Low-context error message.
- [Channel turns ignore runtime-profile strict/parallel tool flags (#7809)](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) — Channel message turns bypass profile settings.
- [CLI secret prompts give no feedback after paste (#7808)](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) — No visual confirmation when entering encrypted secrets.
- [Active Code sessions cannot switch agents directly (#7803)](https://github.com/zeroclaw-labs/zeroclaw/issues/7803) — No mechanism to change agent mid-session.

**Fix PRs in progress for reported bugs:**
- [#7798](https://github.com/zeroclaw-labs/zeroclaw/pull/7798) — fix(gateway): surface pairing-code recovery when already paired on alternate port (addresses #5266).
- [#7778](https://github.com/zeroclaw-labs/zeroclaw/pull/7778) — fix(agent): emit pending tool_call at dispatch so live cards render.
- [#7681](https://github.com/zeroclaw-labs/zeroclaw/pull/7681) — fix(runtime): detect no-progress loops across interleaved tool calls.
- [#7773](https://github.com/zeroclaw-labs/zeroclaw/pull/7773) — fix(runtime): route native tool narration to stderr.
- [#7767](https://github.com/zeroclaw-labs/zeroclaw/pull/7767) — fix(channels/email): stabilize missing message ids.
- [#7656](https://github.com/zeroclaw-labs/zeroclaw/pull/7656) — fix(memory): include recall windows in retrieval cache key.

## Feature Request Clusters

- **WebSocket and Gateway Enhancements:** Users request decoupling WebSocket lifetime from agent turns ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)) and supporting free-form `ask_user` over the gateway WebSocket ([#7776](https://github.com/zeroclaw-labs/zeroclaw/issues/7776)). A related PR for A2A agent discovery ([#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763)) is intentionally targeted at v0.8.2.

- **Configuration and Deletion UX:** A feature to support typed delete-with-cascade for aliased config entries ([#7175](https://github.com/zeroclaw-labs/zeroclaw/issues/7175)) has a foundation PR open ([#7785](https://github.com/zeroclaw-labs/zeroclaw/pull/7785)). Additionally, per-agent opt-in Dream Mode with chat and gateway views is requested ([#7794](https://github.com/zeroclaw-labs/zeroclaw/issues/7794)).

- **Cron and Documentation:** Missing cron documentation and inability to run cron jobs with a specific model ([#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)) is a user-facing gap.

- **Skill and Tool Improvements:** A PR exposes the session key to shell tools as `ZEROCLAW_SESSION_ID` ([#7813](https://github.com/zeroclaw-labs/zeroclaw/pull/7813)), and skill-directory loading caching is proposed ([#7786](https://github.com/zeroclaw-labs/zeroclaw/pull/7786)). The skill tags editor and slash-command toggle were merged ([#7734](https://github.com/zeroclaw-labs/zeroclaw/pull/7734)).

## User Feedback Summary

The most prominent user pain point today is **documentation quality**. Issue [#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) (closed) states bluntly: *"It doesn't matter how good the code is if the documentation is crap."* The user reported being completely blocked from writing a configuration file. This is corroborated by [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) (cron documentation missing) and [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) (no feedback on secret input).

Other pain points:
- **Missing features in prebuilt binaries**: Slack/Discord channels absent in v0.8.0 ([#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)).
- **Tool execution inconsistencies**: MCP tools not received by some providers ([#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)), `git_operations` poor error message ([#7810](https://github.com/zeroclaw-labs/zeroclaw/issues/7810)), and profile flags ignored by channels ([#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809)).
- **UI/UX frustrations**: Keybinding help misleading on macOS ([#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)), blank transcript on session resume ([#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799)), approval overlay theme mismatch ([#7807](https://github.com/zeroclaw-labs/zeroclaw/issues/7807)), and empty queue pause hint ([#7805](https://github.com/zeroclaw-labs/zeroclaw/issues/7805)).

Overall sentiment reflects significant frustration with usability and missing documentation, balanced by active maintainer responses and ongoing fixes.

## Backlog Watch

- [RFC: Hardened CI pipeline — supply-chain scanning, provenance, and SBOM generation (#7675)](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) — Filed June 15, marked `needs-maintainer-review`. No maintainer response yet. This is a security-focused proposal that could benefit from maintainer prioritization.

- [Bug: No pairing code shown when running gateway start on alternate port (#5266)](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) — Open since April 3 (over 2 months). A fix PR [#7798](https://github.com/zeroclaw-labs/zeroclaw/pull/7798) was opened today, but the issue has been without progress for a long time.

- [Bug: cron session_target=main still runs in an isolated cron session (#6648)](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) — Open since May 14, status accepted but no comments since initial filing. May be waiting for implementation.

- [Bug: Generated i18n catalogs translate code literals and invent docs content (#6407)](https://github.com/zeroclaw-labs/zeroclaw/issues/6407) — Open since May 5, status in-progress. No visible PRs or comments recently; may be stalled.

- [RFC: Work Lanes, Board Automation, and Label Cleanup (#6808)](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — Accepted and rollout in progress, but the issue remains open and active.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-17

## Today's Activity Brief
Activity remained high over the past 24 hours: 15 issues were updated (13 still open, 2 closed) and 16 pull requests were updated (3 open, 13 merged/closed). The project published a new nightly build (v0.2.9-nightly). The bulk of issue activity came from a batch of security advisories filed on June 9 (now stale), while pull request activity focused on bug fixes, stability improvements (panic recovery, error handling), and two minor feature additions.

## Releases
- **nightly (v0.2.9-nightly.20260616.c1ff5aa6)** – Automated nightly build. No breaking changes or migration notes provided. Full changelog: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).

## Project Progress
The following PRs were merged or closed today, representing concrete improvements:

- **Features**
  - [#3137](https://github.com/sipeed/picoclaw/pull/3137) – `feat: allow configured remote cron commands` – Adds `tools.cron.command_allowed_remotes` to permit selected remote channels or remote commands.
  - [#3120](https://github.com/sipeed/picoclaw/pull/3120) – `feat(config): add RegisterChannelSettings hook for out-of-tree channels` – Makes PicoClaw extensible for third‑party channels without forking.

- **Bug fixes**
  - [#3135](https://github.com/sipeed/picoclaw/pull/3135) – `fix(telegram): use compositeChatID in InboundContext.ChatID for forum topics` – Resolves Telegram forum replies incorrectly going to #General.
  - [#3132](https://github.com/sipeed/picoclaw/pull/3132) – `fix: add panic recovery to core-path goroutines` – Prevents a single panicked goroutine from crashing the whole process.
  - [#3127](https://github.com/sipeed/picoclaw/pull/3127) – `fix: explicitly ignore Close() errors on directory file descriptors`.
  - [#3129](https://github.com/sipeed/picoclaw/pull/3129) – `fix(tts): explicitly ignore file.Close() error in write error path`.
  - [#3130](https://github.com/sipeed/picoclaw/pull/3130) – `fix(seahorse): handle json.Marshal errors in grep and expand tools`.
  - [#2990](https://github.com/sipeed/picoclaw/pull/2990) – `fix(web): read full session history for Web UI display` – Users can now see all previous messages in a session.
  - [#2988](https://github.com/sipeed/picoclaw/pull/2988) – `fix(agent): use summarize_token_percent config for context compression` – The `/context` command now respects the configured percentage.
  - [#2987](https://github.com/sipeed/picoclaw/pull/2987) – `fix(channels): exclude tool_calls from auxiliary message filtering` – Prevents tool_call messages from being dropped during streaming.
  - [#2983](https://github.com/sipeed/picoclaw/pull/2983) – `fix(agent): retry empty llm response` – Retries when an OpenAI‑compatible provider returns a semantically empty response.

- **Documentation**
  - [#3096](https://github.com/sipeed/picoclaw/pull/3096) – `docs: add PicoPaw banners to READMEs`.

Three open PRs remain active:
  - [#3116](https://github.com/sipeed/picoclaw/pull/3116) – Completing `turn.done` lifecycle.
  - [#3115](https://github.com/sipeed/picoclaw/pull/3115) – Fixing inline data URL media extraction for generic tool output.
  - [#3136](https://github.com/sipeed/picoclaw/pull/3136) – Fix Gemini provider to send both camelCase and snake_case fields.

## Community Hot Topics
- **Most commented issue:** [#2404](https://github.com/sipeed/picoclaw/issues/2404) – `[Feature] Add in config to send streaming HTTP request` – 12 comments, 1 👍. The user wants a `"streaming": true` config option to enable streaming HTTP requests to LLM backends (akin to OpenAI’s `stream=True`). It remains open since April and is marked `stale`.
- **Batch of security disclosures:** Issues [#3070](https://github.com/sipeed/picoclaw/issues/3070)–[#3082](https://github.com/sipeed/picoclaw/issues/3082) (15 items) filed by @YLChen-007 on June 9 all received a single comment each today (likely a maintainer acknowledgment). They cover SSRF bypass, approval hook symlink races, command whitelist escapes, CSRF, and channel authorization bypasses. These issues have not yet been resolved.

## Bugs & Stability
- **Newly reported (and quickly closed):**
  - [#3134](https://github.com/sipeed/picoclaw/issues/3134) – `[BUG] not support su -c 'echo OK'` – Using `su -c` in the agent gateway caused a crash. Closed after 2 comments (likely a duplicate or config issue).
  - [#3110](https://github.com/sipeed/picoclaw/issues/3110) – `[BUG] Telegram adapter ignores message_thread_id in Forum topics` – Fixed in PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) (merged today).
- **Stability improvements from today’s merged PRs:** panic recovery in critical goroutines ([#3132](https://github.com/sipeed/picoclaw/pull/3132)), explicit error handling in file operations, and better handling of empty LLM responses and JSON marshal failures.
- **Security vulnerabilities:** The 15 open security reports (see Backlog Watch) represent the most severe stability threats, though no active exploit has been confirmed.

## Feature Request Clusters
- **Streaming HTTP requests** – Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) requests a configurable `streaming` flag for LLM backends. No related PR exists yet.
- **Remote cron commands** – Merged PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) adds the ability to restrict cron commands to specific remote channels.
- **Out-of-tree channels** – Merged PR [#3120](https://github.com/sipeed/picoclaw/pull/3120) provides a `RegisterChannelSettings` hook for third‑party channel modules.
- **Cron remote control** – Merged PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) adds `command_allowed_remotes` config.

## User Feedback Summary
- **Streaming support** – A user explicitly compared PicoClaw’s lack of streaming to Python’s OpenAI client, indicating a feature gap for users who need real‑time LLM output.
- **Telegram forum topic frustration** – Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110) reported that replies in Telegram forums were sent to the default topic instead of the correct thread. The user expressed dissatisfaction but the fix was merged within days.
- **Security community engagement** – The extensive set of security issues from @YLChen-007 suggests growing external security review and a perceived need for hardening, though only one maintainer comment has been recorded per issue.

## Backlog Watch
- **Security report backlog** – 15 stale security issues (IDs [#3068](https://github.com/sipeed/picoclaw/issues/3068) through [#3082](https://github.com/sipeed/picoclaw/issues/3082)) filed on June 9 remain open with no fix commits or detailed maintainer responses. These cover SSRF bypasses, authorization bypasses, CSRF, and symlink races. They represent the largest unattended block of issues by a single reporter.
- **Stale streaming feature request** – Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) (opened April 7) has 12 comments but no assigned milestone or linked PR. Stale label applied.
- **Open PRs needing review:** [#3116](https://github.com/sipeed/picoclaw/pull/3116) (turn.done lifecycle), [#3115](https://github.com/sipeed/picoclaw/pull/3115) (inline data URL fix), and [#3136](https://github.com/sipeed/picoclaw/pull/3136) (Gemini provider fix) have not yet been merged.

</details>