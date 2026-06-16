# OpenClaw Ecosystem Digest 2026-06-16

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-16 02:52 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-16

## 1. Today's Activity Brief

OpenClaw saw high activity across 500 updated issues and 500 updated pull requests in the last 24 hours, with 83 PRs merged or closed and 29 issues resolved. A new beta release (v2026.6.8-beta.2) shipped with richer Telegram and WhatsApp channel delivery, including structured rich text support and improved CLI backend handling. A critical P0 memory leak issue (#91588) was filed reporting gateway RSS growth from ~350MB to 15.5GB over 2-3 days, with no fix PR yet. Maintainer attention is spread across approximately 471 active issues and 417 open PRs, many needing product decisions or security reviews.

## 2. Releases

One new release: **v2026.6.8-beta.2** (openclaw 2026.6.8-beta.2)

Highlights include:
- **Telegram channel delivery improvements**: structured rich text with tables, lists, expandable blockquotes, preserved intentional line breaks
- **WhatsApp channel delivery improvements**: richer, less brittle message formatting
- Prompt-preserving CLI backend delivery
- Retired native draft migration
- Safer rich-media handling

No breaking changes or migration notes were included in the release data.

## 3. Project Progress

83 PRs were merged or closed today. Key areas of advancement visible in the open PR landscape include:

- **Channel plugin fixes**: Multiple PRs address Feishu channel dispatch crashes (#93472), Feishu message deduplication (#93449), and Telegram rich message structure support (#93458)
- **Gateway stability**: PR #92726 replaces Windows cmd handoff with Node.js subprocess for gateway restart; PR #92751 constrains legacy transcript path resolution
- **Tools and hooks**: PR #91800 adds structured external-content provenance to `before_tool_call` hooks; PR #92016 composes live hook registry view for tool-call hooks (fixes silent hook bypass after upgrade)
- **CLI improvements**: PR #91807 adds `--file` support to `image generate` command; PR #90861 preserves `sessions_yield` over MCP
- **Memory/state management**: PR #92577 deduplicates consecutive assistant messages in session-memory hook; PR #93194 preserves prompt-released session metadata; PR #92774 drops retained session fence text after prompt lock reacquire
- **Plugin loading**: PR #93470 loads externally-installed channel plugins at gateway startup (previously non-bundled channel plugins were silently skipped)
- **Error handling**: PR #93310 adds structured custom error handler via `OPENCLAW_ERROR_HANDLER` environment variable
- **Cron**: PR #93471 fixes abort classification for aborted isolated agent runs (previously reported as successful)

## 4. Community Hot Topics

**Most commented issues:**
- [#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) (109 comments, 79 👍) — Long-running request for desktop app support beyond macOS/iOS/Android, created January 2026, still open
- [#25592 — Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) (32 comments) — UX problem where internal processing output gets routed to Slack/iMessage as visible messages
- [#9443 — Request: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443) (25 comments) — User submitted via AI assistant requesting precompiled APK downloads
- [#32473 — Control UI requires device identity (use HTTPS or localhost secure context)](https://github.com/openclaw/openclaw/issues/32473) (17 comments, 5 👍) — Regression bug with VPS/Docker deployment for Brave integration
- [#22676 — Signal daemon stop() race condition on SIGUSR1 restart](https://github.com/openclaw/openclaw/issues/22676) (17 comments) — Orphaned processes and send failures during config-triggered restarts
- [#22438 — Tiered bootstrap file loading for progressive context control](https://github.com/openclaw/openclaw/issues/22438) (17 comments) — Feature request to reduce token waste on files agents never reference

**Most reacted issues:**
- #75 (79 👍) — Cross-platform app demand
- #39604 — Add `tools.web.fetch.allowPrivateNetwork` (9 👍)
- #6615 — Add denylist support for exec-approvals (7 👍)

**Active PR discussions:**
- #89985 — Preserve local package overrides during updates (ready for maintainer look, merge-risk: compatibility + security-boundary)
- #93216 — Run `message_sending` on all channel agent-reply deliveries (P1, Telegram-visible proof, merge-risk: message-delivery + security-boundary)
- #93194 — Preserve prompt-released session metadata (ready for maintainer look, merge-risk: session-state)

## 5. Bugs & Stability

**Critical:**
- **#91588** (P0, open): Gateway memory leak — RSS grows from 350MB to 15.5GB over 2-3 days, causing repeated OOM kills. Newly filed 2026-06-09. **No fix PR exists.**

**High severity (P1, open, with impact:message-loss or crash-loop):**
- **#25592** (P1): Text between tool calls leaks to messaging channels — significant UX problem
- **#22676** (P1): Signal daemon `stop()` race condition on SIGUSR1 restart — orphaned processes and send failures. Linked PR open
- **#32296** (P1): Agent replies to previous message instead of current message — session context confusion
- **#29387** (P1): Bootstrap files in `agentDir` are silently ignored — only workspace directory files injected
- **#39476** (P1): A2A `sessions_send` causes duplicate messages when target agent calls back
- **#31583** (P1, regression): `exec` tool does not inherit `skills.entries.*.env` environment variables
- **#40611** (P1): Heartbeat drift fix causes aggressive retry blocking Telegram during active conversations
- **#38327** (P1, regression): "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview
- **#41165** (P1): Telegram DMs still land in agent:main:main, polluting heartbeat/main session
- **#41744** (P1): Feishu read image tool result loses media before final outbound payload

**Regressions reported today:**
- #32473 — Control UI requires device identity (HTTPS/localhost) — regression on VPS/Docker
- #31583 — `exec` tool env inheritance broken in recent update
- #38439 — Webchat avatar endpoint returns 404 even with valid IDENTITY.md avatar
- #41201 — Control UI Avatar not displaying (broken image)
- #38327 — Google Vertex/Gemini model crashes after update to 2026.3.2

**New bugs filed today (2026-06-16):**
- #93472 fix PR addresses Feishu channel dispatch crash after 2026.6.6 upgrade — `TypeError: Cannot read properties of undefined (reading 'run')`

## 6. Feature Request Clusters

**Session state and context management** (most active cluster):
- #22438 — Tiered bootstrap file loading (17 comments)
- #32296 — Session context confusion bug (15 comments)
- #29387 — Bootstrap files in agentDir ignored (14 comments)
- #27445 — `announceTarget` option for sub-agent completion routing (11 comments)
- #40418 — Automated session memory preservation & synthesis (7 comments)
- #22358 — Post-subagent completion extension hook (12 comments)

**Security and access control:**
- #10659 — Masked secrets to prevent agent from accessing raw API keys (13 comments, 4 👍)
- #39604 — Allow private network access in `web_fetch` (13 comments, 9 👍)
- #6731 — Safe/unsafe ClawdBot sandbox modes (12 comments)
- #7707 — Memory trust tagging by source (12 comments)
- #7722 — Filesystem sandboxing config via `tools.fileAccess` (7 comments, 4 👍)
- #6615 — Denylist support for exec-approvals (7 comments, 7 👍)
- #13583 — Pre-response enforcement hooks/hard gates (11 comments, 2 👍)
- #37634 — Keep sandbox workspaces writable when `workspaceAccess: none` (9 comments, 6 👍)

**Multi-platform and delivery:**
- #75 — Linux/Windows apps (109 comments, 79 👍) — consistently highest-demand feature
- #9443 — Prebuilt Android APK releases (25 comments)
- #12602 — Slack Block Kit support (13 comments)
- #33102 — TUI `--deliver` flag default config support (6 comments)
- #20786 — Telegram Business Bot support (8 comments, 6 👍)

**Observability and governance:**
- #35203 — Multi-agent collaboration enhancement RFC (8 comments)
- #38626 — Subagent lifecycle observability + async supervision controls (6 comments)
- #42026 — Distributed agent runtime RFC (6 comments, 3 👍)
- #33413 — Slack tool-level progress in assistant thread status (8 comments, 3 👍)

**Related PRs in progress:**
- #91800 — Propagate external content provenance to policy hooks (response to security concerns)
- #92764 — Render tool progress text from `stream:item` events (addresses observability gap)
- #93194 — Preserve prompt-released session metadata (session state fix)
- #93310 — Structured custom error handler via env variable

## 7. User Feedback Summary

**Pain points expressed:**
- **Missing platforms**: Users on Linux and Windows lack native app support (#75, 79 👍, oldest active enhancement). Android users want prebuilt APKs (#9443, 25 comments)
- **Memory leaks and crashes**: P0 memory leak forcing daily restarts (#91588, filed 3 days ago). Users experiencing repeated OOM kills
- **Session confusion**: Agent responding to wrong messages (#32296), bootstraps ignored (#29387), duplicate messages in A2A workflows (#39476)
- **Deployment friction**: Control UI requiring HTTPS/localhost breaks VPS/Docker setups (#32473); Docker + sandbox workspace binding failures (#31331)
- **Security gaps**: Users request masked secrets (#10659), filesystem sandboxing (#7722), exec denylists (#6615), private network access (#39604), memory trust tagging (#7707)
- **Onboarding gaps**: Memory/embedding setup not included in onboarding wizard (#16670, 8 comments)

**Use cases driving feature requests:**
- Agent cooperation: multi-agent workflows with proper orchestration (#35203, #42026, #27445)
- Enterprise deployment: environment migration, config backup/restore (#13616)
- Content moderation: reaction-triggered agent turns for polling/choice patterns (#17840)
- Observability: subagent lifecycle visibility for ops teams (#38626)
- Platform-specific: Telegram Business integration (#20786), Slack Block Kit (#12602), Feishu plugin pagination (#37626)

**Satisfaction signals:**
- Active community engagement: many issues have linked PRs in progress
- Quick response to regressions: multiple PRs filed same day for issues reported this week
- Plugin ecosystem growth: new channel driver (Crabline #91502), externally-installed plugin support (#93470)

## 8. Backlog Watch

**Issues needing maintainer attention (tagged `needs-maintainer-review` and/or `needs-product-decision`):**

- **#75** (created 2026-01-01) — Linux/Windows apps. P2, 109 comments, 79 👍. Stalled since January with no clear product decision
- **#25592** (2026-02-24) — Text between tool calls leaks. P1, 32 comments. Multiple maintainer tags but no fix PR
- **#9443** (2026-02-05) — Prebuilt Android APK releases. 25 comments. No product decision visible
- **#10659** (2026-02-06) — Masked secrets. P1, 13 comments, 4 👍. Needs security review + product decision
- **#29387** (2026-02-28) — Bootstrap files in agentDir ignored. P1, 14 comments, 5 👍. Needs security review + product decision
- **#6731** (2026-02-02) — Safe/unsafe ClawdBot mode. P1, 12 comments. Needs security review + product decision
- **#13616** (2026-02-10) — Backup/restore utility. 8 comments. Needs security review
- **#22438** (2026-02-21) — Tiered bootstrap loading. 17 comments. Needs product decision
- **#35203** (2026-03-05) — Multi-agent collaboration RFC. 8 comments. Needs maintainer review + product decision
- **#42026** (2026-03-10) — Distributed agent runtime RFC. 6 comments, 3 👍. Needs security review

**Stale PRs needing maintainer action:**
- **#12581** (2026-02-09) — Emit session prune lifecycle event. 5 months stale. Waiting on author. Merge-risk: compatibility + security-boundary + availability
- **#78664** (2026-05-06) — Cache provider tool schema normalization. 6 weeks stale. Waiting on author. Merge-risk: compatibility

**New critical item:**
- **#91588** (2026-06-09, P0) — Gateway memory leak. Filed 7 days ago, 12 comments. No fix PR yet. Severity warrants priority maintainer response.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-16

## 1. Daily Cross-Project Overview

OpenClaw dominated activity volume with 500 updated issues and 500 updated pull requests, plus a new beta release (v2026.6.8-beta.2) and a P0 memory leak (#91588) filed three days ago. NanoBot had moderate activity (4 issues, 25 PRs updated, 4 merged) with no release but two new bug-fix PRs targeting empty‑response retries and sustained‑goal context. Zeroclaw saw 50 issues and 50 PRs updated, 1 merged, and no release; efforts concentrated on security hardening (MCP scoping silent no‑op, SSL cert handling) and channel improvements (Mattermost WebSocket, Slack hydration). PicoClaw had the lowest activity (3 issues, 13 PRs, 3 merged) but published a nightly build (v0.2.9-nightly) and merged security diagnostics for a CIDR allowlist bypass. Common threads across all projects included channel plugin fixes, session and context management bugs, and ongoing security concerns.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Release(s) Today           | Activity Note |
|------------|----------------|-------------|----------------------------|---------------|
| OpenClaw   | 500            | 500         | v2026.6.8-beta.2           | Very high volume; 83 PRs merged/closed, 29 issues resolved |
| NanoBot    | 4              | 25          | None                       | Moderate; 4 PRs merged, focus on bug fixes and feature PRs |
| Zeroclaw   | 50             | 50          | None                       | Moderate; 1 PR merged, many open PRs for security and channels |
| PicoClaw   | 3              | 13          | v0.2.9-nightly.20260616    | Low; 3 PRs merged, focus on code hardening and diagnostics |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated far exceeds the other three projects combined (57 issues, 88 PRs). This reflects its role as the core reference implementation.
- **Community surface area**: OpenClaw has the most active community discussions (e.g., #75 with 109 comments, #25592 with 32 comments). No other project shows issues with triple-digit comments.
- **Technical focus**: OpenClaw’s digest emphasizes gateway stability (P0 memory leak), channel delivery (Telegram/WhatsApp structured text), and extensive feature-request clusters (session state, security, multi-platform). Peers are more narrowly focused: NanoBot on fallback/retry logic and WebUI parity; Zeroclaw on security scoping and multi‑agent routing; PicoClaw on defensive coding and diagnostics.
- **Release maturity**: OpenClaw ships a beta release with changelog; NanoBot and Zeroclaw had no releases; PicoClaw only a nightly build.

## 4. Shared Technical Focus Areas

Requirements appearing across multiple projects today:

- **Channel plugin fixes and enhancements**:
  - OpenClaw: Feishu dispatch crash (#93472), Telegram rich text (#93458), WhatsApp formatting improvements.
  - NanoBot: Feishu card content fix (#4342), WhatsApp blue ticks (#4354).
  - Zeroclaw: Mattermost WebSocket listener (#7098), Slack thread hydration (#6055), WhatsApp reactions (#7535).
  - PicoClaw: QQ channel Windows failure (#3015), Telegram reply-as-mention (#2975).

- **Session and context management**:
  - OpenClaw: Session context confusion (#32296), bootstrap files ignored (#29387), session memory preservation (#40418).
  - NanoBot: Sustained goal context missing (#4286, fix in #4359), session replay‑window history (#4349).
  - Zeroclaw: Session persistence ordering race (#7753), system prompt not refreshed after tool swap (#7742).

- **Security and access control**:
  - OpenClaw: Masked secrets (#10659), private network access (#39604), exec denylist (#6615).
  - Zeroclaw: MCP scoping silent no‑op (#7733), self-signed certificate handling (#551, #1458).
  - PicoClaw: CIDR allowlist bypass (#3069) – closed with diagnostics rather than code fix.

- **Multi‑agent routing and collaboration**:
  - OpenClaw: A2A sessions_send duplicates (#39476), multi‑agent collaboration RFC (#35203).
  - NanoBot: Goal continuation for sustained tasks (#4286, #4359).
  - Zeroclaw: Multi‑agent routing (#2767), A2A agent discovery (#7218).

## 5. Differentiation Analysis

- **Feature focus**:
  - OpenClaw is a full‑featured reference agent with emphasis on channel delivery, session state, and cross‑platform apps.
  - NanoBot prioritizes lean deployment with extensive provider integrations (Mistral, Anthropic, Keenable) and WebUI parity.
  - Zeroclaw concentrates on security boundaries (MCP scoping, SSL), multi‑database session backends (Postgres, Oracle, MySQL), and CI hardening.
  - PicoClaw targets lightweight/edge deployments (RISC‑V support, nightly builds) with a focus on code quality and defensive programming.

- **Target users**:
  - OpenClaw: General users and developers seeking a customizable agent with broad platform support.
  - NanoBot: Developers and power users who want a minimal, fast‑iterating agent with strong provider and tool support.
  - Zeroclaw: Enterprise and security‑conscious users needing strict isolation, audit trails, and compliance features.
  - PicoClaw: Users on resource‑constrained or embedded systems (RISC‑V, low‑power devices).

- **Technical architecture**:
  - OpenClaw uses a Node.js gateway with plugin system; Zeroclaw is Rust‑based with WebAssembly considerations (#7674).
  - NanoBot is Python‑based with a focus on simplicity and provider flexibility.
  - PicoClaw is Go‑based with emphasis on concurrency safety and minimal dependencies.

## 6. Community Activity Notes

Based only on today’s counts and releases:

- **Tier 1 – Highest activity**: OpenClaw (500 issues, 500 PRs updated, 83 merged, 1 beta release).
- **Tier 2 – Moderate activity**: NanoBot (4 issues, 25 PRs, 4 merged) and Zeroclaw (50 issues, 50 PRs, 1 merged).
- **Tier 3 – Low activity**: PicoClaw (3 issues, 13 PRs, 3 merged, 1 nightly release).

No project showed signs of stagnation; all had open PRs and issues receiving attention.

## 7. Evidence-Backed Observations

1. **Channel plugin stability is a cross‑project concern.** Today’s data shows four projects each addressing channel‑specific bugs and features: OpenClaw fixed Feishu dispatch crashes and Telegram formatting; NanoBot fixed Feishu card parsing and added WhatsApp blue ticks; Zeroclaw added Mattermost WebSocket support and Slack hydration; PicoClaw has an unresolved QQ channel failure on Windows. This indicates ongoing investment in multi‑platform delivery.

2. **Context and session management bugs are prevalent across implementations.** OpenClaw reports session context confusion (#32296) and bootstrap file injection failures (#29387); NanoBot has a missing sustained‑goal context (#4286) that disrupted long‑running tasks; Zeroclaw identified a per‑session ordering race (#7753) and a system‑prompt refresh issue (#7742). These independent reports suggest that stateful agent behavior remains a challenging area for all projects.

3. **Security hardening is being addressed reactively rather than proactively.** OpenClaw has community requests for masked secrets, filesystem sandboxing, and exec denylists but no corresponding merged PRs today. Zeroclaw discovered that MCP scoping is a silent no‑op (#7733) – a critical isolation gap – with no fix yet. PicoClaw’s CIDR bypass (#3069) was closed with improved diagnostics only, leaving the structural vulnerability unresolved. No project shipped a security‑focused release today.

4. **Multi‑agent routing and collaboration is a growing community demand.** OpenClaw’s A2A duplicate message bug (#39476) and multi‑agent collaboration RFC (#35203) show active discussion. Zeroclaw’s most‑upvoted open issue (#2767, 9 👍) requests multi‑agent routing similar to OpenClaw. NanoBot’s sustained‑goal fix (#4359) addresses a key requirement for multi‑step agent cooperation. This pattern, while not yet a trend (only single‑day data), is consistent across three of the four projects.

5. **Lightweight/edge deployment is a niche but active area.** PicoClaw’s nightly build and RISC‑V support, coupled with Zeroclaw’s WebAssembly‑first RFC (#7674) to eliminate Node.js dependencies, indicate that some users value minimal resource footprint and reduced supply‑chain risk. No other projects show equivalent focus on embedded or low‑dependency architectures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-06-16

### 1. Today’s Activity Brief

Over the past 24 hours, 4 issues were updated (3 open, 1 closed) and 25 pull requests were updated (21 open, 4 merged/closed). No new releases were published. The development pace remains high, with two new PRs filed today addressing critical bugs (#4358 on empty‑response retry and #4359 on goal‑continuation context) and a flurry of infrastructure enhancements (WebUI automations, audit tooling, WhatsApp blue ticks, and a new Keenable search provider).

### 2. Releases

None.

### 3. Project Progress

Four PRs were merged or closed today. Notable closed PR:

- [#4348] [CLOSED] **fix(session): keep auto compact suffix on user turn** — Ensures idle auto‑compaction does not trim a user turn in the middle of a long assistant/tool exchange, preserving correct replay history. (Author: @chengyongru)

Additional PRs that advanced today (still open) include:

- [#4359] **fix(agent): refresh goal continuation context** — Resolves the “sustained goal” missing context reported in #4286 by passing a dynamic goal provider from `AgentLoop`.
- [#4358] **fix(api): avoid duplicate user turn on empty‑response retry (#4079)** — Prevents re‑recording the user message when DeepSeek (or others) return empty completions.

### 4. Community Hot Topics

- [#4287] [OPEN] **Empty model responses not triggering fallback to alternative models** – 2 comments. User @glebov reports that nanobot correctly detects empty completions from DeepSeek but classifies them as “non‑fallbackable”. The community has discussed retry logic; #4358 directly addresses this by preventing duplicate turns on retry.

- [#4286] [OPEN] **Nanobot reporting unexpected missing “sustained goal” context** – 1 comment. User @fablau describes repeated failures when creating an article. #4359 (filed today) is a targeted fix that lazily resolves goal continuation text.

- [#4322] [OPEN] **NameError: ‘session_key’ not defined in context.py after merge** – 1 comment. A crash on startup caused by a merge commit that extracted `_build_memory_context` without moving the `session_key` variable. The issue has a root‑cause analysis but no fix PR yet.

### 5. Bugs & Stability

**High severity**

- [#4322] **NameError: session_key crash on startup** – Blocks agent initialization after merging `fix/prompt-caching`. No fix PR filed; maintainer awareness appears present.

**Medium severity**

- [#4287] **Empty model responses not fallbackable** – Silent failure mode for primary model; workaround is manual retry. PR #4358 fixes a side effect (duplicate user turn) but does not change fallback classification. The bug report remains open.

- [#4286] **Missing sustained goal context** – Persistent failure for long‑running tasks. PR #4359 is in review and should resolve the root cause.

**Closed / fixed**

- [#4309] **`/v1/chat/completions` always returns zero usage tokens** – Closed. Fixed in a prior merge; token tracking is now reported accurately.

**Other bugfix PRs open today** (all filed 2026-06-15 or 16):
- [#4346] **fix(providers): mark stripped images as unviewable instead of leaking the path** – Closes #4345 (path leak).
- [#4349] **fix(session): preserve user turns in replay‑window history** – Prevents LLM replay from starting mid‑turn.
- [#4352] **fix(context): cap recent‑history digest by tokens, not characters** – Avoids context exceedance with CJK text.
- [#4342] **fix(feishu): support reading WebSocket rendered card content** – Structural mismatches for Feishu card display.

### 6. Feature Request Clusters

Multiple feature PRs are under review, each addressing distinct user needs:

- **Observability & Auditing** – [#4320] adds a configurable `AuditTool` to log agent actions (supports SQLite/JSON output). Still open.
- **WebUI Enhancements** – [#4330] introduces an automation management view (list, filter, pause, delete automations). [#4313] closes the parity gap between WebUI settings and `config.json` (temperature, tool limits, dream fields, etc.).
- **Channel Integrations** – [#4354] enables WhatsApp read receipts (blue ticks). [#4342] fixes Feishu card parsing.
- **Provider Improvements** – [#4351] adds better Mistral support (correct reasoning_effort values, multimodal, tool‑id sanitization). [#4356] also sanitizes tool IDs for the Anthropic API. [#4350] adds Keenable as a built‑in web search provider.
- **Task & Cron** – [#4357] introduces a `silent` flag for cron jobs so they only respond when there is something worth reporting.
- **Infrastructure** – [#4344] refactors config schema and agent‑loop boundaries to keep tool config models co‑located and avoid circular imports. [#4303] fixes a crash when MCP generators are not closed properly.

### 7. User Feedback Summary

Reported pain points reflect production use:

- @glebov ( #4287 ): “DeepSeek sometimes returns empty responses … classifying as non‑fallbackable.” Users expect the fallback mechanism to cover all provider errors.
- @fablau ( #4286 ): Repeated failure on article creation due to missing “sustained goal” context — trust in long‑running tasks is reduced.
- @professionelle‑hypnose ( #4322 ): “NameError crashes the agent during startup” — merge discipline and testing gaps cause regressions.
- @alx1379 ( #4309, closed): Token usage zero in API endpoint — fixed, but the issue indicates that monitoring/observability matters to users.

Overall satisfaction appears tempered by these bugs, but the community is actively providing fixes (PRs #4359, #4358, #4346, etc.) and feature additions (audit, automation UI, new providers).

### 8. Backlog Watch

No issues or PRs are deeply stalled; however, the following items may benefit from maintainer review or triage:

- [#4322] **NameError crash** – Open since June 13, root cause identified but no fix PR. Likely high priority.
- [#4303] **MCP generator crash** – Open since June 11, awaiting review; root cause and fix are clear.
- [#4320] **AuditTool** – Open since June 12, uncontroversial but may need architectural approval.
- [#4313] **WebUI/config parity** – Open since June 12, sizeable PR covering many settings; maintainer feedback expected.
- [#4287] **Empty‑response fallback** – Open since June 10; PR #4358 only partially addresses it. A maintainer decision on classification of “empty response” as fallbackable is pending.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-16

## Today’s Activity Brief

In the last 24 hours, 50 issues and 50 pull requests were updated across the Zeroclaw repository. 4 issues were closed and 1 pull request was merged/closed. No new releases were published. Activity was concentrated on security hardening (SSL cert handling, MCP scoping), multi-agent routing, channel improvements (Mattermost WebSocket, Slack thread hydration), infrastructure expansions (multi-database session backends), and numerous CI and testing refinements.

## Releases

No new releases were published today.

## Project Progress

**Merged/Closed PRs (1):**
- [#7669](https://github.com/zeroclaw-labs/zeroclaw/pull/7669) (closed) – CI: run macOS and Windows build legs as `cargo check` instead of a full binary link, speeding up cross-platform validation.

**Other Notable PRs (still open):**
- [#7424](https://github.com/zeroclaw-labs/zeroclaw/pull/7424) – Fix wildcard `allowed_private_hosts = ["*"]` in `web_fetch` to cover DNS-resolved private hosts.
- [#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) – Add opt-in WebSocket listener mode for Mattermost channel (reduces polling latency).
- [#7640](https://github.com/zeroclaw-labs/zeroclaw/pull/7640) – Fix OAuth credential fallback bug when delegating to a sub-agent.
- [#7727](https://github.com/zeroclaw-labs/zeroclaw/pull/7727) – Surface non-fatal config warnings in `zeroclaw doctor` diagnostics.
- [#7732](https://github.com/zeroclaw-labs/zeroclaw/pull/7732) – Authenticate WebSocket handshake in `self-test` to fix false 401 errors.
- [#7485](https://github.com/zeroclaw-labs/zeroclaw/pull/7485) – Fix Doctor validation of custom model providers.
- [#7532](https://github.com/zeroclaw-labs/zeroclaw/pull/7532) – Fix config save round-trip loss from mismatched serde defaults.
- [#7535](https://github.com/zeroclaw-labs/zeroclaw/pull/7535) – Implement `add_reaction` and `remove_reaction` for WhatsApp Web.
- [#7495](https://github.com/zeroclaw-labs/zeroclaw/pull/7495) – Add per-channel `ack_reactions` override for Lark/Feishu.
- [#7637](https://github.com/zeroclaw-labs/zeroclaw/pull/7637) – Auto-normalize agent alias input in quickstart wizard.
- [#7671](https://github.com/zeroclaw-labs/zeroclaw/pull/7671) – Add `/clear` session reset command for Telegram.
- [#7670](https://github.com/zeroclaw-labs/zeroclaw/pull/7670) – Add tests for Windows shell code page decoding.
- [#7706](https://github.com/zeroclaw-labs/zeroclaw/pull/7706) – Fill provider configuration documentation placeholders.
- [#7638](https://github.com/zeroclaw-labs/zeroclaw/pull/7638) – Route remaining hardcoded English strings through CLI i18n.
- [#7550](https://github.com/zeroclaw-labs/zeroclaw/pull/7550) – Centralize Node.js version to `.nvmrc`, upgrade to Node 24.
- [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) – Add multi-database session backends (Postgres, Oracle, MySQL, Db2).
- [#7754](https://github.com/zeroclaw-labs/zeroclaw/pull/7754) – Optimize documentation publishing (dedupe assets, drop print pages).

## Community Hot Topics

1. **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) – Multi-Agent Routing** (9 👍, 6 comments)
   High-demand feature for routing incoming messages to isolated agents per channel account, similar to OpenClaw. Gaining community interest.

2. **[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) – MCP scoping is a silent no-op** (1 comment, high risk)
   Critical security concern: per-agent `mcp_bundles` field is parsed but never enforced at runtime. Community flagged this as a silent isolation bypass.

3. **[#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) – RFC: Native context compression decorator** (3 comments)
   Proposal for a `CompressionDecorator` to reduce LLM request payloads. Active discussion on implementation details.

4. **[#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) – RFC: WebAssembly-first, eliminate Node.js from build/runtime** (1 comment)
   Supply-chain risk reduction proposal to replace Node.js dependencies (web UI build, npm packages) with pure Rust/WebAssembly solutions.

5. **[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) – Make channel reply-intent precheck configurable** (5 comments)
   Request to use a smaller/faster model for reply intent classification and add timeouts/logging.

## Bugs & Stability

**High-severity bugs reported today (2026-06-15 to 2026-06-16):**

| Issue | Description | Severity | Fix PR Exists? |
|-------|-------------|----------|----------------|
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` parsed but not enforced at runtime – per-agent MCP scoping is a silent no-op | S2 (degraded, security) | No |
| [#7741](https://github.com/zeroclaw-labs/zeroclaw/issues/7741) | Response cache skips multimodal normalization; cache hit for `[IMAGE:...]` markers | S2 | No |
| [#7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742) | System prompt not refreshed after tool dispatcher swap mid-session | S2 | No |
| [#7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) | Channel session persistence has a per-session ordering race: concurrent same-sender workers | Not yet labeled, high impact | No |
| [#7739](https://github.com/zeroclaw-labs/zeroclaw/issues/7739) | Email OAuth refresh lacks retry/backoff (transient failures) | S2 | No |
| [#7738](https://github.com/zeroclaw-labs/zeroclaw/issues/7738) | Email parsing uses random UUID fallback when `Message-ID` missing – breaks IMAP dedup | S2 | No |

**Previously reported bugs with ongoing activity:**
- [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) – Allow insecure HTTPS for OpenAI-compatible endpoints (still open, 4 comments).
- [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) – `zeroclaw check` 401 on WebSocket despite valid auth (blocked waiting for reproduction).
- [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) – `skill_manage patch` ignores cooldown (closed but root cause related to missing production code path).

## Feature Request Clusters

**Multi-Agent and Routing:**
- [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) – Multi-Agent Routing (9 👍).
- [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) – RFC: A2A agent discovery via `.well-known/agent-card.json`.
- [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) – Explicit target-profile authority for delegate handoffs.

**Security & Certificate Handling:**
- [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) – Local CA support for custom inference providers (closed).
- [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) – Allow insecure HTTPS (still open).
- [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) – Hardened CI pipeline with supply-chain scanning, provenance, SBOM.
- [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) – WebAssembly-first, eliminate Node.js.

**Channel Improvements:**
- [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) – Configurable reply-intent precheck (light model + timeout).
- [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) – Slack thread history hydration on first mention.
- [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) – Allow aliases to be renamed in TUI.
- [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) – More flexible edit strings (arrow navigation, typo fix).

**Configuration & Usability:**
- [#7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749) – Per-agent `prompt_injection_mode` override.
- [#7746](https://github.com/zeroclaw-labs/zeroclaw/issues/7746) – Document how to load/switch existing zerocode sessions.

## User Feedback Summary

- **Security concerns raised:** Multiple users reported pain around self-signed certificates and lack of CA configuration ([#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458), [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551)).
- **Multi-agent isolation needs:** Community request for isolated agent workspaces and channel binding ([#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)) – a direct use-case from OpenClaw.
- **Configuration round-trip bugs:** User discovered that saving and reloading config silently drops fields due to serde default mismatches ([#7498](https://github.com/zeroclaw-labs/zeroclaw/issues/7498) fixed by [#7532](https://github.com/zeroclaw-labs/zeroclaw/pull/7532)).
- **CLI frustration:** Quickstart wizard missing port field blocked webhook channel setup ([#7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) fixed by [#7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215)); capitalized agent alias silently fails at end of wizard ([#7637](https://github.com/zeroclaw-labs/zeroclaw/pull/7637) applies auto-normalization).
- **Session loading unclear:** User asked how to load existing zerocode sessions; docs are missing ([#7746](https://github.com/zeroclaw-labs/zeroclaw/issues/7746)).

## Backlog Watch

**High-risk issues needing maintainer attention:**
- [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) – RFC: Native context compression decorator (needs-maintainer-review, 3 comments).
- [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) – RFC: WebAssembly-first, eliminate Node.js (needs-maintainer-review, 1 comment).
- [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) – RFC: Hardened CI pipeline (needs-maintainer-review, 1 comment).
- [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) – `zeroclaw check` 401 despite valid auth (blocked, needs-author-action, stale).
- [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) – Allow insecure HTTPS for OpenAI-compatible endpoints (status: blocked, 4 comments, since Feb 2026).

**Stale PRs awaiting author action:**
- [#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) – Mattermost WebSocket (needs-author-action, stale-candidate).
- [#7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215) – Quickstart port field (needs-author-action).
- [#7532](https://github.com/zeroclaw-labs/zeroclaw/pull/7532) – Config serde defaults (needs-author-action).
- [#7638](https://github.com/zeroclaw-labs/zeroclaw/pull/7638) – CLI i18n (needs-author-action).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-16

## Today’s Activity Brief

- **3 issues** updated in the last 24 hours (1 open, 2 closed).
- **13 pull requests** updated (10 open, 3 merged/closed).
- **1 nightly release** published (`v0.2.9-nightly.20260616.c1ff5aa6`).

The day’s work focused heavily on code quality and defensive programming, with a series of PRs from contributor **@chengzhichao-xydt** adding explicit error handling for `Close()` calls, type assertion checks, and panic recovery in goroutines. Two PRs were merged: an improvement to launcher allowlist bypass diagnostics and a UI hint for the web chat composer. The security issue #3069 (CIDR bypass via same-host proxy) was closed after diagnostics were enhanced in PR #3126.

## Releases

**Nightly Build**
`v0.2.9-nightly.20260616.c1ff5aa6`
[Full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
*This is an automated, potentially unstable build. Use with caution.*

No stable release or migration notes were published today.

## Project Progress (Merged/Closed PRs)

Three PRs were merged or closed in the last 24 hours:

1. **#3126 – `fix(web): improve launcher allowlist bypass diagnostics`** (merged)
   Enhances logging around `allow_localhost_bypass` settings, making it clearer when bindings may allow CIDR bypass through same-host proxies or tunnels. This directly addresses security advisory #3069.

2. **#3097 – `feat: add shift-enter hint below chat composer`** (merged)
   Adds a visible “Shift + Enter” hint below the web chat composer when the user has typed content. Improves discoverability of multi-line input without occupying input space.

3. **#3096 – `docs: add PicoPaw banners to READMEs`** (merged)
   Updates documentation with new project branding banners.

## Community Hot Topics

- **#2887** [CLOSED] – `.deb version on RISC-V is not functional with OpenAI model` (10 comments)
  Reported by @s0me0ne-unkn0wn. The issue was closed as stale after a month without resolution. User reported that GPT-5.4 calls fail on RISC-V Debian. No fix PR was linked.

- **#3015** [OPEN] – `QQ channel connection fails on Windows` (3 comments)
  Reported by @cuandada. Token retrieval timeout when running `picoclaw gateway` on Windows. Pico channel works. No maintainer response visible. Last updated 2026-06-15.

- **#3069** [CLOSED] – Security: `allowed_cidrs` bypass via same-host reverse proxy (0 comments)
  Immediately closed after PR #3126 improved diagnostics. The underlying vulnerability (reliance on `RemoteAddr`) may still exist but now produces clearer logs.

## Bugs & Stability

### Highest severity – Security
- **#3069** (closed): CIDR allowlist bypass. Addressed by improved logging (PR #3126) rather than a structural fix. No code change to the trust model.

### Functional bugs
- **#3015** (open): QQ channel connection timeout on Windows – likely a platform-specific network issue. No workaround noted.
- **#2887** (closed stale): RISC-V OpenAI integration failure – not resolved, but could be addressed in future nightly builds.

### Stability improvements (PRs in flight)
Multiple PRs by @chengzhichao-xydt add explicit error handling and type assertion checks that prevent panics in edge cases:
- **#3132** (open): Panic recovery in core goroutines.
- **#3059**, **#3054**, **#3128**, **#3127**, **#3129**, **#3131**, **#3130**: Ignoring `Close()` errors, adding `ok` checks, handling `json.Marshal` failures. These are reactive to linter warnings and unlikely to cause current observed crashes but improve robustness.

## Feature Request Clusters

- **Web UI improvements**
  PR #3097 (merged) adds Shift+Enter hint. No related open feature requests.

- **Messaging platform enhancements**
  - **#2975** (open PR): Treat reply-to-bot as mention in Telegram group chats (author: @Jlan45).
  - **#3015** (open issue): QQ channel connectivity on Windows – could be considered a bug, but user is effectively requesting Windows platform parity.

- **Session history behavior**
  **#3047** (open PR): Restore full JSONL history for session detail endpoint, allowing archived messages to appear in GET /api/sessions/{id}. Still under review.

## User Feedback Summary

- **RISC-V user** (@s0me0ne-unkn0wn): Debian package for v0.2.8 fails to use OpenAI models – issue closed without fix. Might indicate lack of official RISC-V support or a regression that needs investigation.
- **Windows user** (@cuandada): QQ channel unusable after Windows release build. Pico channel works, suggesting a platform-specific dependency issue.
- **Security researcher** (@YLChen-007): Reported a bypass in the launcher’s network allowlist. The project responded with improved diagnostics (PR #3126) rather than a code fix.
- **Code quality contributors** (@chengzhichao-xydt, @SiYue-ZO): Multiple PRs submitted to silence linter warnings and prevent potential panics – indicates community interest in hardening the project.

## Backlog Watch

- **#3015** (open, last maintainer activity unknown): QQ channel Windows failure. No maintainer comment yet. Requires attention to diagnose the token retrieval timeout.
- **#2975** (open PR for Telegram reply-as-mention): Created 2026-05-30, last updated 2026-06-15 – no review comments. Maintainer review needed.
- **#3047** (open PR for session history): Created 2026-06-07, last updated 2026-06-15 – no review comments. Feature could affect user experience if merged.
- Several stale-label PRs (#3059, #3054, #2975) remain untouched by maintainers. These are primarily code cleanup; they may be low priority but accumulating.

</details>