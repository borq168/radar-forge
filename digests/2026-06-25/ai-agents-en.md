# OpenClaw Ecosystem Digest 2026-06-25

> Issues: 346 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-25 00:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-25

## Today's Activity Brief

OpenClaw saw heavy activity across 346 issues and 500 pull requests in the last 24 hours, with 65 issues closed and 53 PRs merged or closed. Two new beta releases shipped (v2026.6.11-beta.1 and v2026.6.10) featuring improved channel control, automatic fast mode for conversations, and better model routing. GitHub user [@llagy009](https://github.com/llagy009) contributed a notable cluster of eight small fixes addressing UTF-16 surrogate pair truncation bugs across eight chat channel integrations (DuckDuckGo, QQbot, Slack, IRC, MSTeams, Synology Chat, and others), indicating a focused quality pass on message encoding correctness. Long-standing high-priority issues around session state corruption, memory store relocation, and subagent lifecycle bugs continued to receive maintainer attention with multiple linked PRs.

## Releases

### v2026.6.11-beta.1 (2026-06-11)
- **Channel control improvements:** Slack relay mode, native Mattermost `/oc_queue`, and per-DM model overrides for easier channel automation and tuning (PRs #94707, #95546, #95120). Thanks to @sjf-oa, @amknight, @xydigit-zt, @thomaszta, and @gandalf-at-lerian.
- Additional changes documented in the full release notes (truncated in source data).

### v2026.6.10 (2026-06-10)
- **Automatic fast mode for talks:** Enables fast mode for short conversational turns with bounded fallback and delivery behavior (PR #85104). Thanks @alexph-dev and @vincentkoc.
- **More reliable model routing:** Zai model synthesis improvements (details truncated in source data).

No explicit breaking changes or migration notes were included in the provided release descriptions.

## Project Progress

53 PRs were merged or closed today. Notable advances include:

- **Session lock safety:** PR [#90419](https://github.com/openclaw/openclaw/pull/90419) (merged) fixes force-release of session locks on `dispose()` to prevent orphan locks that can permanently block sessions.
- **Diagnostics for HTTP ingress:** PR [#96152](https://github.com/openclaw/openclaw/pull/96152) (merged) and PR [#96227](https://github.com/openclaw/openclaw/pull/96227) (closed) add `model.usage` diagnostic event emission for HTTP ingress paths (`/v1/responses`, `/v1/chat/completions`), closing a gap where token and cost data was invisible for REST API traffic.
- **Provider auth failure surfacing:** PR [#96599](https://github.com/openclaw/openclaw/pull/96599) (merged) surfaces authentication failures (HTTP 401) in channels so users see an error message instead of a silent non-response.
- **CI/maturity infrastructure:** PR [#96595](https://github.com/openclaw/openclaw/pull/96595) (merged) defaults maturity evidence workflow to full taxonomy profile. PR [#96594](https://github.com/openclaw/openclaw/pull/96594) (merged) clarifies maturity scorecard scoring to render coverage separately from quality/completeness.
- **Cron failure-alert persistence:** PR [#96601](https://github.com/openclaw/openclaw/pull/96601) (open, ready for maintainer) fixes a bug where enabling cron failure alerts with default parameters (`--failure-alert` without flags) silently stops firing after gateway restart due to store codec roundtrip loss.

## Community Hot Topics

### Most Active Issues

1. **Issue [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows Clawdbot Apps** (109 comments, 80 👍, open since Jan 1)
   - Long-running request for desktop app support on non-macOS platforms. User [@steipete](https://github.com/steipete) reports similar feature set to macOS as the goal. Labeled with multiple `clawsweeper:needs-*` tags including security review and product decision, suggesting maintainer bandwidth constraints.

2. **Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) — Track core session/transcript SQLite migration via accessor seam** (35 comments, P1, open since Jun 1)
   - Maintainer-tracked effort (Path 3) to move remaining direct session-store call sites behind accessors. Recent 3.1b work has proven several slices against live local gateway. This is an internal refactoring with high impact on session stability.

3. **Issue [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI requires device identity (HTTPS/localhost)** (17 comments, regression, P2)
   - User [@RafaelLee](https://github.com/RafaelLee) reports control UI broken on Hostinger VPS/Docker after Brave key configuration. `control ui requires device identity (use HTTPS or localhost secure context)` — impacts security-required deployments.

4. **Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) — Signal daemon stop() race condition** (17 comments, P1)
   - SIGUSR1 restarts can orphan processes and cause HTTP port/config lock conflicts. Root cause identified: `signal-cli` SIGTERM sent without waiting for exit.

5. **Issue [#96148](https://github.com/openclaw/openclaw/issues/96148) — Track iMessage source-reply latency instrumentation** (17 comments, P2)
   - Performance investigation for iMessage response latency, linked to PRs #95621 and #95942. New issue (created Jun 23) with active discussion.

### Most Active Pull Requests (by labels/activity, comment counts not shown)

- [#96583](https://github.com/openclaw/openclaw/pull/96583) — Guard out-of-range numeric HTML entities in DuckDuckGo extension (fixes `RangeError` crash on malformed entities)
- [#95996](https://github.com/openclaw/openclaw/pull/95996) — Keep yielded parent runs deferred until subagents settle (XL PR, P1, high merge risk across compatibility/session-state/message-delivery)
- [#95847](https://github.com/openclaw/openclaw/pull/95847) — Credit requester-consumed descendant completions in subagent lifecycle accounting (P1, L-sized fix)

## Bugs & Stability

### Critical/P1 Bugs Reported or Active Today

| Issue | Severity | Impact | Fix Status |
|-------|----------|--------|------------|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) — Signal daemon SIGUSR1 race → orphaned processes, send failures | **P1, crash-loop** | Message loss, process management failure | Open, `clawsweeper:linked-pr-open` |
| [#86827](https://github.com/openclaw/openclaw/issues/86827) — Group chat stuck in 'failed' state silently drops messages | **P1, message-loss** | All subsequent messages lost with no error | Open, `clawsweeper:linked-pr-open` |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode fails to inject messages mid-turn | **P1, message-loss** | Queue mode broken since March 3 commit | Open, `clawsweeper:linked-pr-open` |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write tool has no append mode; cron sessions overwrite files | **P1, data-loss** | Silent data loss in shared workspace files | Open, `clawsweeper:linked-pr-open` |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) — Active Memory + Codex → latency, timeouts, event-loop stalls | **P1, crash-loop** | Telegram DM unreliability with specific configs | Open, `clawsweeper:linked-pr-open` |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) — MCP tools not injected into subagent sessions | **P1, session-state** | MCP tool schemas silently ignored in spawned sessions | Open, `clawsweeper:needs-maintainer-review` |
| [#72031](https://github.com/openclaw/openclaw/issues/72031) — `image` tool fails for Bedrock with `aws-sdk` auth | **P1** | `requireApiKey` throws even when AWS creds available | Open, `clawsweeper:linked-pr-open` |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) — Google Chat Space/Group messages silently ignored | **P1, message-loss** | DMs work, groups fail silently | Open, `clawsweeper:needs-maintainer-review` |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) — Native Anthropic path: replaying `thinking` blocks bricks tool-use threads | **P1, message-loss** | HTTP 400 `Invalid signature in thinking block` | Open, `clawsweeper:linked-pr-open` |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) — Gateway heap grows to 1073MB+ at idle, cron jobs fail silently | **P1, crash-loop** | Memory pressure leads to silent cron failure | Open, `clawsweeper:needs-maintainer-review` |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) — Internal reasoning leakage in 2026.6.5 | **P1, security** | Agent reasoning exposed to users (privacy regression) | Open, `clawsweeper:needs-security-review` |
| [#39847](https://github.com/openclaw/openclaw/issues/39847) — Echo contamination: metadata not sanitized in delivery | **P1, security** | Metadata leaked to Discord | Open, `clawsweeper:linked-pr-open` |
| [#25574](https://github.com/openclaw/openclaw/issues/25574) — Config warnings logged repeatedly on reload, log spam | **P1, crash-loop** | Thousands of duplicate entries per reload | Open, `clawsweeper:linked-pr-open` |

### Regressions (Closed Today)

- [#95495](https://github.com/openclaw/openclaw/issues/95495) — **2026.6.9 silently relocates memory store** (CLOSED). Migration from `~/.openclaw/memory/main.sqlite` to `~/.openclaw/agents/main/agent/openclaw-agent.sqlite` with no upgrade-time warning, forcing full re-embed of 1499 files.
- [#95554](https://github.com/openclaw/openclaw/issues/95554) — **Telegram richMessages breaks paragraph breaks and table rendering** (CLOSED). Regression in v2026.6.9 vs v2026.6.8.
- [#88073](https://github.com/openclaw/openclaw/issues/88073) — **Feishu dispatch fails: `Cannot read properties of undefined (reading 'run')`** (CLOSED). Regression in v2026.5.27.

## Feature Request Clusters

### Channel-Specific Features
- **Slack Block Kit support** ([#12602](https://github.com/openclaw/openclaw/issues/12602)) — Allow agents to send rich interactive messages (CRM summaries, database results)
- **Telegram Business Bot support** ([#20786](https://github.com/openclaw/openclaw/issues/20786)) — Subscribe to `business_message`/`business_connection` updates
- **Reaction-triggered agent turns** ([#17840](https://github.com/openclaw/openclaw/issues/17840)) — Enable emoji reactions to wake agents for interactive patterns
- **WhatsApp message delete/revoke action** ([#14344](https://github.com/openclaw/openclaw/issues/14344)) — Allow agents to retract sent messages
- **Slack tool-level progress in thread status** ([#33413](https://github.com/openclaw/openclaw/issues/33413)) — Show currently running tool instead of static `"is typing..."`

### Security & Permissions
- **Filesystem sandboxing config** (`tools.fileAccess`) ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — Allowed/denied path restrictions
- **Denylist for exec-approvals** ([#6615](https://github.com/openclaw/openclaw/issues/6615)) — "Allow everything except X" policies (7 👍, strong community support)
- **Capability-based permissions for skills/tools** ([#12678](https://github.com/openclaw/openclaw/issues/12678)) — Default-deny for high-risk actions
- **Gateway-lite mode without AI harness** ([#86881](https://github.com/openclaw/openclaw/issues/86881)) — Deterministic deployments with only channel gateways, webhooks, cron

### Operations & Reliability
- **Backup/restore utility** for config, cron jobs, session history ([#13616](https://github.com/openclaw/openclaw/issues/13616))
- **Built-in auto-update** with configurable schedule, confirmation, post-update notification ([#12855](https://github.com/openclaw/openclaw/issues/12855))
- **Configurable lane wait diagnostic threshold** ([#14747](https://github.com/openclaw/openclaw/issues/14747)) — Hardcoded 2-second warning threshold causes noise for legitimate long-running cron jobs
- **Subagent lifecycle observability + async supervision** ([#38626](https://github.com/openclaw/openclaw/issues/38626)) — Deterministic visibility/control for async subagent workflows

### Feature PRs in Progress
- [#95604](https://github.com/openclaw/openclaw/pull/95604) — Show subagent progress in Discord (XL, P2, waiting on author)
- [#88504](https://github.com/openclaw/openclaw/pull/88504) — Multi-slot memory role architecture (XL, P2, ready for maintainer review)
- [#52664](https://github.com/openclaw/openclaw/pull/52664) — Expose `rawBody` on user messages in plugin hooks (P2, ready for maintainer review)
- [#95920](https://github.com/openclaw/openclaw/pull/95920) — Wire Crabline fake provider env for QA testing (L, P3, waiting on author)

## User Feedback Summary

### Pain Points Expressed

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-25

## 1. Daily Cross-Project Overview

OpenClaw dominated activity with 346 issues and 500 PRs updated, shipping two beta releases focusing on channel control and fast mode. NanoBot and Zeroclaw saw moderate activity (18–50 issues and 46–50 PRs each) with no new releases, while NanoBot merged 19 PRs (including new providers and MCP security fixes) and Zeroclaw closed a critical MCP scoping no‑op bug. PicoClaw had lower volume (13 issues closed, 8 PRs updated, none merged) but resolved 12 security advisories in a coordinated disclosure. Across all projects, MCP tool management, channel-specific regressions, and security hardening were recurring themes.

## 2. Activity Comparison

| Project   | Issues (updated / closed) | PRs (updated / merged) | Release status | Activity note |
|-----------|---------------------------|------------------------|----------------|---------------|
| OpenClaw  | 346 / 65 closed           | 500 / 53 merged/closed | Two beta releases | Heavy activity: channel encoding fixes, session lock safety, diagnostics, CI maturity. |
| NanoBot   | 18 / 8 closed             | 46 / 19 merged/closed  | None           | Moderate: Kimi Coding provider, MCP security bypass fixes, WebUI PWA, Telegram/DingTalk bug fixes. |
| Zeroclaw  | 50 / 6 closed             | 50 / 4 merged/closed   | None           | Moderate: MCP scoping fix merged, RBAC & OIDC discussions, MCP process leak still open. |
| PicoClaw  | 13 / 13 closed (all)      | 8 / 0 merged           | None           | Low: bulk closure of 12 security vulnerabilities, open PRs (DeltaChat, turn.done) stalled. |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume (346 issues, 500 PRs) is an order of magnitude higher than the next most active projects (NanoBot and Zeroclaw each with ~50). Its technical focus is notably broader: it covers deep channel integration (8 separate platform fixes in one contributor’s batch), session state migration, subagent lifecycle, and diagnostic emission for HTTP APIs. The community surface area is also larger — the bug table lists 13 P1 issues across message‑loss, crash‑loop, security, and data‑loss categories, whereas NanoBot and Zeroclaw each have fewer than 10 high‑severity bugs. PicoClaw’s activity is almost entirely security‑related. In summary, OpenClaw acts as the core reference project with the most comprehensive scope and highest churn, while peers address more targeted feature sets or hardening phases.

## 4. Shared Technical Focus Areas

Several requirements appear in multiple projects today:

- **MCP tool/context management**
  - OpenClaw: MCP tools not injected into subagent sessions (#85030).
  - NanoBot: MCP `enabledTools` bypasses (#4434, #4435) with fix PRs #4436, #4452.
  - Zeroclaw: MCP scoping no‑op fixed (#7733, PR #7747); MCP process leak (#5903).

- **Channel‑specific regressions & enhancements**
  - OpenClaw: DuckDuckGo QQbot/Slack/IRC/MSTeams/Synology Chat encoding fixes; Telegram DM instability.
  - NanoBot: Telegram empty messages (#4499); DingTalk timeout (#4497); Mattermost support (PR #4459).
  - Zeroclaw: Matrix image attachment loss (#8151, fixed); DingTalk streaming request (#8228); Telegram webhook (#8046).
  - PicoClaw: DeltaChat gateway (PR #3063, stalled).

- **Security hardening**
  - OpenClaw: Reasoning leakage (#91804), echo contamination (#39847), auth failure surfacing (PR #96599).
  - NanoBot: MCP bypass and fix; auth enforcement for OpenAI‑compatible API (#4490).
  - Zeroclaw: RBAC (#5982), OIDC (#7141), supply‑chain signing RFC (#8177), per‑sender authorization (#8044).
  - PicoClaw: 12 vulnerabilities closed (SSRF, CSRF, auth bypass, command injection, etc.).

- **Subprocess / daemon lifecycle**
  - OpenClaw: Subagent lifecycle bugs, orphan process race condition (#22676).
  - Zeroclaw: MCP stdio process leak (#5903).

- **Token/metadata diagnostics**
  - OpenClaw: `model.usage` events for HTTP ingress (PR #96152).
  - NanoBot: No explicit diagnostic feature.
  - Zeroclaw: No explicit diagnostic feature.

## 5. Differentiation Analysis

Key differences in focus, target users, and architecture visible today:

- **OpenClaw (core reference):** Broadest feature set and highest community engagement. Aggressively integrates new channels, session safety, and CI maturity. Target: full‑featured AI agent deployment for enthusiasts to enterprises seeking maximum flexibility.

- **NanoBot (lightweight, multi‑provider):** Emphasizes rapid provider support (Kimi Coding, OpenCode) and WebUI PWA. Active fix cycles for Telegram and DingTalk. Target: users who prioritize simplicity and broad model access over deep customization.

- **Zeroclaw (security‑oriented, enterprise):** Heaviest investment in authentication/RBAC, supply‑chain signing, and WASM plugin isolation. MCP runtime fixes and process leak resolution are systemic. Target: multi‑tenant production deployments and security‑conscious teams.

- **PicoClaw (embedded/edge, Sipeed hardware):** Smallest project with a specific hardware ecosystem. Security disclosure closure and stalled feature PRs suggest a maintenance‑heavy phase. Target: resource‑constrained devices and developers needing a minimal agent runtime.

## 6. Community Activity Notes

**Highest activity:** OpenClaw — 346 issues, 500 PRs, two releases. Community size and responsiveness are visibly larger than peers.

**Moderate activity:** NanoBot (18 issues, 46 PRs, no release) and Zeroclaw (50 issues, 50 PRs, no release). Both merged several PRs but did not ship new versions.

**Lower activity:** PicoClaw (13 issues, 8 PRs, no release). Activity was overwhelmingly security‑closure, with no merges and stalled feature PRs.

These tiers are based solely on today’s counts and release events; no broader maturity or quality inference is drawn.

## 7. Evidence‑Backed Observations

1. **MCP (Model Context Protocol) management is a cross‑project pain point.** Three of four projects have active bugs or security issues related to MCP: OpenClaw (missing injection in subagents), NanoBot (policy bypass), Zeroclaw (runtime scoping no‑op and process leak). This indicates that MCP integration remains unstable as adoption grows.

2. **Channel‑specific regressions are a recurring source of friction.** At least three projects (OpenClaw, NanoBot, Zeroclaw) reported bugs or fixes for Telegram, DingTalk, Matrix, or Feishu within the same 24‑hour window. These platforms appear to be where users encounter most breakage after new features or releases.

3. **Security hardening is a shared priority, but approaches differ.** OpenClaw and NanoBot address security reactively (bug fixes); Zeroclaw proactively designs authentication and supply‑chain features; PicoClaw completed a coordinated disclosure. No single pattern dominates, but all projects allocate resources to security work.

4. **No clear cross‑project signal around a single new trend.** Data shows incremental improvements and bug fixes rather than a new architectural shift or emerging capability common across projects. Observations are limited to recurring themes (MCP, channel bugs, security).

5. **OpenClaw’s community engagement volume significantly exceeds peers, but this does not necessarily indicate higher code quality or faster fix times.** The raw issue/PR counts reflect a larger user base and more feature requests, while smaller projects like Zeroclaw address similarly critical bugs (e.g., MCP scoping no‑op) with fewer contributions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for **NanoBot** generated for **2026-06-25**.

---

## NanoBot Project Digest – 2026-06-25

### 1. Today's Activity Brief
Activity remained high across the project, with 18 issues and 46 pull requests updated in the last 24 hours. The core team merged or closed 8 issues and 19 PRs, addressing regressions in Telegram and DingTalk channels, adding new provider support (Kimi Coding Plan, OpenCode), and landing a PWA feature for the WebUI. Security disclosures regarding MCP `enabledTools` bypasses (Issues #4434, #4435) attracted focused fix attempts (PRs #4436, #4452), while an older lightweight claim contradiction (Issue #660) continued to generate community discussion. No new releases were cut.

### 2. Releases
No new releases were published in this period.

### 3. Project Progress
Merged/closed PRs indicate several features and fixes advanced:
- **New Providers**: PR #4464 merged a dedicated `kimi_coding` provider for Kimi Coding Plan subscribers. PR #4475 added support for `opencode_zen` and `opencode_go` coding models.
- **WebUI Enhancements**: PR #4487 fixed multi-file `apply_patch` edit tracking in the WebUI. PR #4479 (PWA with mobile gestures) progressed but remains open.
- **Bug Fixes**: PR #4493 was opened to fix Xiaomi MiMo ASR transcription by adding client-side WebM-to-WAV conversion.
- **MCP Security**: PR #4436 and #4452 were opened to enforce `enabledTools` for MCP resources and prompts, addressing the security bypasses.
- **Workflow**: PR #4499 and #4470 (Telegram empty/broken messages) were closed with fixes likely in the pipeline.

### 4. Community Hot Topics
- **#660: Lightweight Claim Contradiction** ([Issue](https://github.com/HKUDS/nanobot/issues/660)) – With 11 comments and 5 👍, this remains the most controversial topic. The user challenges the "ultra-lightweight" tag due to a required Node.js dependency in the Dockerfile. It reflects growing community sensitivity about project bloat claims versus actual requirements.
- **#4434, #4435: MCP Security Bypasses** ([Issue #4434](https://github.com/HKUDS/nanobot/issues/4434), [#4435](https://github.com/HKUDS/nanobot/issues/4435)) – Dual disclosures of a critical flaw where `enabledTools: []` fails to block resource/prompt capabilities, allowing unauthorized model interactions. These received rapid attention and spawned fix PRs #4436 and #4452.
- **#4488: Telegram Web Incompatibility** ([Issue](https://github.com/HKUDS/nanobot/issues/4488)) – Caused by the new rich messages feature, this bug generated immediate user frustration on the web version, leading to fix PR #4505.

### 5. Bugs & Stability
- **Critical - Security Bypass**: Issues #4434 and #4435 (MCP `enabledTools` policy bypass) represent the highest severity, exposing server resources to the model even when allowlisted. Fix PRs #4436 and #4452 are in review.
- **High - Telegram Channel Empty Messages**: Issue #4499 ([Issue](https://github.com/HKUDS/nanobot/issues/4499)) reported that nanobot's Telegram replies arrive as empty bubbles despite correct gateway logs. The root cause appears to be the new rich message format. Fix PR #4505 and #4495 were opened.
- **Medium - DingTalk Timeout**: Issue #4497 ([Issue](https://github.com/HKUDS/nanobot/issues/4497)) reported HTTP timeouts when handling large files through the DingTalk channel. Fix PR #4501 addresses this by setting an explicit timeout.
- **Medium - WebUI Streaming Stuck**: Issue #4500 ([Issue](https://github.com/HKUDS/nanobot/issues/4500)) reported that self-restart leaves a stuck stream and a non-functional stop button.
- **Low - iOS Safari Zoom**: Issue #4388 ([Issue](https://github.com/HKUDS/nanobot/issues/4388)), now closed, reported UI distortion on iOS Safari when tapping the input field; this appears to have been resolved.

### 6. Feature Request Clusters
- **PWA & Mobile UX**: Issue #4479 ([Issue](https://github.com/HKUDS/nanobot/issues/4479)) adds manifest.json, service worker, and swipe gestures for mobile sidebar. The PR is open and under review.
- **Skill Organization**: PR #4504 ([PR](https://github.com/HKUDS/nanobot/pull/4504)) enables subdirectory grouping for user skills under `~/.nanobot/workspace/skills/`, a quality-of-life improvement for heavy users.
- **New Channels & Triggers**: PR #4459 ([PR](https://github.com/HKUDS/nanobot/pull/4459)) adds Mattermost channel support. PR #4502 ([PR](https://github.com/HKUDS/nanobot/pull/4502)) adds gateway webhook triggers for external integrations.
- **Authentication Guardrail**: Issue #4490 ([Issue](https://github.com/HKUDS/nanobot/issues/4490)) requests auth enforcement for the OpenAI-compatible API server when binding to non-loopback interfaces, seeking parity with the WS gateway.

### 7. User Feedback Summary
- **Satisfaction**: Users are actively contributing new features and bug fixes. The fast turnaround on Telegram and DingTalk bugs demonstrates responsive maintainer engagement.
- **Frustration**: The "ultra-lightweight" claim conflict (Issue #660) continues to cause dissatisfaction. MCP security bypasses (Issues #4434, #4435) raise trust concerns among privacy-conscious users. Telegram Web users report the rich messages feature broke basic message rendering (Issue #4488).
- **Use Cases**: Users are integrating nanobot into various platforms (Telegram, DingTalk, Mattermost) and workflow triggers (Webhooks, CLI), indicating a strong need for polyglot channel support and extensibility.

### 8. Backlog Watch
- **Issue #660: Lightweight Claim** ([Issue](https://github.com/HKUDS/nanobot/issues/660)) – Created 2026-02-14, last updated 2026-06-24. Despite 11 comments and 5 upvotes, there is no merged fix or maintainer response confirming how the Node.js dependency will be reconciled with the "ultra-lightweight" promise. This is the highest-profile unresolved community grievance.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-25

## Today's Activity Brief

Today's GitHub activity remains high, with **50 issues** and **50 PRs** updated in the last 24 hours. Of these, 44 issues remain open and 6 were closed; 46 PRs are still open while 4 have been merged or closed. No new releases were published. The project's focus continues to cluster around **security hardening** (authentication providers, per-sender RBAC, supply-chain signing), **WASM plugin infrastructure**, and **runtime stability** fixes. A new **v0.8.3 runtime stability tracker** (#8071) has been created to consolidate fixes across the agent loop, tools, memory, daemon, cron, and skills. The most active single thread today is a closed issue (#551) on insecure HTTPS requests to OpenAI-compatible endpoints, which was marked wontfix but continues to attract discussion.

## Releases

**No new releases today.**

## Project Progress

Four PRs were merged or closed in the last 24 hours:

- **[Merged/Closed] PR #7747 — fix(runtime): wire mcp_bundles into agent loop** — This critical fix enforces per-agent MCP server scoping, closing the silent no-op bug (#7733) where `mcp_bundles` was parsed correctly but never actually applied at runtime. Previously every agent received every MCP server unconditionally.
- **[Closed] Issue #8125 — Automatically set risk profile to yolo in quickstart** — Merged as an enhancement; quickstart onboarding now applies the `yolo` risk preset by default.
- **[Closed] Issue #8151 — Deferred image attachment loses re-loadable reference in Matrix channel** — Closed after fix; a bug where images sent via Matrix were not preserved in cached history for later turns.
- **[Closed] Issue #8075 — Keybinds vs OS globals (macOS)** — Closed after discussion and resolution.
- **[Closed] Issue #551 — Allow insecure HTTPS requests to OpenAI-compatible endpoints** — Closed as wontfix, despite continued user comments requesting the feature.

## Community Hot Topics

The following issues and PRs have attracted the most comments and engagement today:

1. **[#5982 — Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** (9 comments) — A high-risk enhancement request to add optional per-sender role-based access control, allowing a single ZeroClaw instance to serve customers, operators, and developers with isolated workspaces, tool sets, rate limits, and system prompts. This remains one of the most heavily discussed security features.

2. **[#7141 — OIDC Authentication Provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (6 comments) — Tracking issue for a pluggable authentication-provider seam targeting v0.9.0. This umbrella issue covers multiple deliverables including the AuthProvider trait and integration points.

3. **[#6289 — Prompt-triggered install suggestions for missing skills and plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** (5 comments) — A user experience enhancement that would detect when a user asks for a capability ZeroClaw could provide but hasn't installed, and suggest the installation. Related to the broader skills discoverability effort.

4. **[#8177 — RFC: Supply chain signing — hardware PGP, hermetic builds, and SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (5 comments) — A community RFC proposing hardware-backed PGP signing, multi-party quorum, offline signing, and Container Signature Format for release binaries and container images.

5. **[#551 — Allow insecure HTTPS requests to OpenAI-compatible endpoints](https://github.com/zeroclaw-labs/zeroclaw/issues/551)** (5 comments) — Although closed as wontfix, this issue continues to receive comments from users needing self-signed certificate support for OpenAI-compatible endpoints.

The **underlying needs** reflected in these hot topics include: (a) enterprise multi-tenancy and security isolation (RBAC, OIDC), (b) improved user onboarding and discovery (install suggestions), (c) supply-chain trust for production deployments, and (d) compatibility with non-standard infrastructure.

## Bugs & Stability

Several high-severity bugs are receiving active attention:

### Critical/P1 Bugs

- **[#5903 — MCP stdio child processes accumulate on daemon with heartbeat.enabled=true](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)** (P1) — Each heartbeat tick leaks one stdio child process; approximately 48 orphan MCP processes accumulate per day under default settings. Status: accepted.
- **[#8044 — Harden /model --agent scope with per-sender authorization](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)** (P1) — The `--agent` scope for model overrides changes the effective model for all users but lacks per-sender authorization. Status: accepted.
- **[#7733 — mcp_bundles never enforced at runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)** (P1) — Per-agent MCP scoping is a silent no-op. **Fix PR #7747 was merged/closed today**, resolving this issue.
- **[#7623 — Delegate tool provider key bleed persists after #7266](https://github.com/zeroclaw-labs/zeroclaw/issues/7623)** (P1) — Delegate tool to Codex/OAuth sub-agents still forwards the coordinator's API key instead of using the sub-agent's configured key. Status: in-progress, accepted.

### High-Severity Bugs (P2)

- **[#8151 — Matrix deferred image attachment lost in cached history](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)** (P1, now closed) — Bot later denies seeing a previously acked image. **Closed with fix today.**
- **[#7800 — Code help/keybindings misleading on macOS](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)** (P2) — ZeroCode TUI keybindings are confusing or unreachable, especially on macOS. Status: accepted.
- **[#8134 — session_ttl_hours config parameter unimplemented](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)** (P2) — Auto-truncation of stale session history is documented but not implemented. Status: in-progress.

## Feature Request Clusters

The following clusters of related feature requests are visible in today's data:

### Authentication, Authorization & Multi-tenancy

A large cluster of requests around access control and identity:
- **Per-sender RBAC** (#5982, 9 comments)
- **OIDC Authentication Provider** (#7141, 6 comments) — umbrella tracking issue
- **Local username/password AuthProvider** (#8076) — IdP-less browser login, child of #7141
- **Per-agent custom environment variables** (#8226) — `runtime_context` and `runtime_secrets` blocks for identity and token multi-tenancy
- **Extract require_auth to route-layer middleware** (#6250) — replacing per-handler auth checks

### CI/CD and Supply Chain Security

Multiple RFCs and CI improvements targeting hardened builds:
- **Supply chain signing** (#8177) — hardware PGP, hermetic builds, SLSA provenance (RFC)
- **cosign signing + SBOM publication** (#8058) — release-only CI work
- **deny.toml policy cleanup** (#8059) — advisory tracking, multiple versions, wildcard dependencies
- **zerocode pre-submission gate** (#8078) — local CI enforcement for contributors
- **cargo-audit step in PR gate** (PR #8129)

### WASM Plugin System Evolution

Continued work on the plugin architecture:
- **Hybrid skills + WASM tools** (#6140) — plugins shipping both SKILL.md and .wasm binary
- **Deconflict plugin system goals** (#6943, RFC) — replacing Extism with direct wasmtime component model host
- **WASM plugin lifecycle hook subscriptions** (#7822, RFC) — PluginCapability::Hook for agent lifecycle events
- **WASM component-model plugin host code** (PR #7928, size:XL) — initial implementation

### Channel & Communication Improvements

- **DingTalk streaming message support** (#8228)
- **Telegram webhook mode** (#8046) — alternative to long polling
- **session_ttl_hours auto-truncation** (#8134)
- **OpenRouter model fallbacks** (#8138)

## User Feedback Summary

Real user pain points and use cases captured in today's data:

1. **Multi-tenancy & isolation**: Users managing multiple client environments need per-sender RBAC with isolated workspaces, tools, rate limits, and prompts (#5982). This is the most actively discussed feature request.

2. **Self-signed certificates**: Despite the wontfix decision on #551, users continue to express a need for insecure HTTPS support or custom CA import for OpenAI-compatible endpoints behind self-signed certificates.

3. **Onboarding friction**: Users report bad experiences when unintentionally limited by restrictive risk profiles (#8125, now fixed). The quickstart now defaults to `yolo` risk.

4. **macOS usability**: Keybinding conflicts with OS globals and misleading help text in the TUI create frustration (#7800, #8075).

5. **Third-party integrations**: Users want OpenRouter model fallback arrays (#8138), Telegram webhook ingress (#8046), and DingTalk streaming (#8228) — reflecting a desire for better integration with existing infrastructure.

6. **Stability concerns**: The MCP process leak (#5903) and silent MCP scoping no-op (#7733, now fixed) highlight reliability issues in multi-tool deployments.

## Backlog Watch

The following important items appear to need maintainer attention:

1. **[#551 — Allow insecure HTTPS requests to OpenAI-compatible endpoints](https://github.com/zeroclaw-labs/zeroclaw/issues/551)** — Closed as wontfix on 2026-02-17 but still receiving user comments (5 today). The underlying need for self-signed certificate support remains unaddressed.

2. **[#5607 — Pre-hook skip gates for cron jobs and SOP triggers](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)** — Created 2026-04-10, status: blocked. A lightweight precondition gate feature that has not moved despite being accepted. No assignee visible.

3. **[#8138 — OpenRouter model fallbacks](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)** — Created 2026-06-22, marked `needs-maintainer-review`. Reasonable scoped addition to provider config without a responding maintainer.

4. **[#5903 — MCP stdio child process accumulation](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)** — P1 bug created 2026-04-19, still open with no associated fix PR despite being accepted and marked no-stale. One of the highest-severity unresolved bugs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-25

## Today's Activity Brief

In the past 24 hours, 13 issues were closed (12 security advisories from a coordinated disclosure and 1 enhancement, 1 general question) while no new issues were opened. Eight pull requests were updated but remain open; none were merged or closed. No new releases were published. The main event is the bulk closure of security vulnerabilities reported two weeks ago, indicating a coordinated fix deployment. Meanwhile, several open PRs continue to advance features and bug fixes.

## Releases

No new releases today.

## Project Progress

**No pull requests were merged or closed today.** All eight updated PRs remain open for review or further iteration. The project continues to process outstanding changes, including:

- **#3063** – DeltaChat gateway implementation (new feature, stale)
- **#3115** – Fix for inline data URL media extraction in tool output
- **#3116** – Complete turn.done lifecycle signaling
- **#3118** – Add remote Pico WebSocket mode to agent command
- **#3165** – Recover Seed XML tool calls in OpenAI compatibility
- **#3166** – Use structured logger for native_search warning
- **#3168** – Handle error response read failures in model list fetching
- **#3169** – Skip cold path for heartbeat turns in evolution

## Community Hot Topics

The most discussed issue today is the **closed enhancement request** for streaming HTTP request support:

- **#2404** – [Feature] Add in config to send streaming HTTP request
  (13 comments, 1 👍)
  Author: @OuSatoru
  Summary: Proposes adding a `"streaming": true` config option to enable streaming responses from LLM backends (similar to OpenAI Python client's `stream=True`). The discussion likely involved implementation details and configuration design.
  Link: https://github.com/sipeed/picoclaw/issues/2404

Otherwise, the 12 security issues (all closed, 2 comments each) were primarily author–maintainer exchanges, not broad community discussion.

## Bugs & Stability

Twelve **security vulnerabilities** were closed today, all reported on 2026-06-09 by @YLChen-007 and fixed/maintained as part of a coordinated disclosure. They cover a range of severity:

| Issue | Title | Key Risk |
|-------|-------|----------|
| #3082 | Feishu reply-context expansion bypasses `allow_from` | Authorization bypass |
| #3081 | Approval hook `cwd` symlink race in `exec` tool | Command injection / directory escape |
| #3079 | `exec` command whitelist allows jq environment disclosure | Information disclosure via bypassed deny patterns |
| #3078 | `web_fetch` SSRF protection bypass via HTTP proxy | Server-side request forgery |
| #3076 | WeCom group trigger policy bypass | Unauthorized message processing |
| #3075 | Untrusted local `skills/` metadata auto‑loaded into system prompt | Prompt injection via repo-local files |
| #3074 | `web_fetch` SSRF guard bypass via ISATAP IPv6 | Localhost/private network access |
| #3073 | Signed LINE webhook replay | Duplicate event execution |
| #3072 | CSRF in Launcher first‑run password setup | Local control-plane takeover |
| #3071 | Authenticated WebSocket clients can trigger `/reload` | Unauthorized configuration reload |
| #3068 | MQTT `allow_from` bypass via spoofed `client_id` | Authorization bypass |

All issues are marked `[stale]` and now closed, implying fixes have been applied or vulnerabilities addressed. No severity ratings are given in the original data, but the descriptions indicate critical to high impact. No regression reports or new bugs were opened today.

## Feature Request Clusters

- **Streaming HTTP requests (#2404)** : The only enhancement request closed today. User requested config-based streaming support for LLM backends. No PR linked, but the discussion may influence future designs.

- **DeltaChat gateway (PR #3063)** : Open PR adding a new gateway for DeltaChat messaging. This is a feature addition that has been open since June 8.

- **Remote Pico WebSocket mode (PR #3118)** : Open PR to allow the `picoclaw agent` command to connect to remote Pico WebSocket endpoints, expanding deployment flexibility.

- **PageAgent Vue/MVVM compatibility (#3167)** : A user inquiry about whether PageAgent supports Vue 2 + Element UI and similar MVVM frameworks. No feature request per se, but a common request pattern for enterprise users.

## User Feedback Summary

- **Positive/Neutral**: The enhancement request (#2404) shows a user actively engaging with the config system and proposing a useful feature (streaming). The closed security issues reflect responsible disclosure and prompt maintainer response (2-week turnaround).

- **Pain point / Question**: Issue #3167 asks whether PageAgent supports Vue/MVVM frameworks. The user describes issues with `v-model`, component state, and watchers in a Vue 2 admin system, indicating that real-world enterprise admin panels pose integration challenges for the DOM-based GUI agent. No maintainer response is visible in the data.

- **General observation**: All security issues were reported by a single researcher (YLChen-007), suggesting targeted auditing rather than widespread user frustration. The project appears to be in a security-hardening phase.

## Backlog Watch

The following open pull requests have been **stale for over two weeks** without being merged or receiving significant maintainer activity since their creation:

- **#3063** – feat: add deltachat gateway (created 2026-06-08, last updated 2026-06-24) – requires review and possible testing.
- **#3116** – fix(pico): complete turn.done lifecycle signaling (created 2026-06-12, last updated 2026-06-24) – addresses a known lifecycle gap.
- **#3115** – Fix inline data URL media extraction for generic tool output (created 2026-06-12, last updated 2026-06-24)
- **#3118** – Add remote Pico WebSocket mode to picoclaw agent (created 2026-06-12, last updated 2026-06-24)

These PRs represent significant features and fixes that could benefit the community. They need maintainer attention for review, testing, and merging.

</details>