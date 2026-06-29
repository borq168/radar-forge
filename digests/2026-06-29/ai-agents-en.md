# OpenClaw Ecosystem Digest 2026-06-29

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-29 00:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-29

## Today's Activity Brief

The OpenClaw repository saw 500 issues and 500 pull requests updated in the last 24 hours, with a net of 62 issues closed and 67 PRs merged/closed. A new beta release, v2026.6.11-beta.2, shipped with improved channel controls including Slack relay mode, native Mattermost queue commands, and per-DM model overrides. The most active discussion continues to center on the SQLite session/transcript storage migration (Path 3), with the implementation PR #96625 now consolidating the remaining work. Multiple small UTF-16 truncation fixes across Discord, Mattermost, iMessage, Matrix, Feishu, and Tlon channels were opened in a coordinated push today.

## Releases

- **v2026.6.11-beta.2** (2026-06-29)
  - **Highlights**:
    - **Slack relay mode** — allows Slack channels to operate in relay mode for easier automation. (#94707)
    - **Native Mattermost `/oc_queue`** — adds native queue command support for Mattermost. (#95546)
    - **Per-DM model overrides** — enables per-direct-message model configuration overrides. (#95120)
  - Thanks to @sjf-oa, @amknight, @xydigit-zt, @thomaszta, and @gandalf-at-lerian.
  - No breaking changes or migration notes documented in this digest's release data.

## Project Progress

### Merged/Closed PRs Today (67 total, selected notable closures)

**Session & Transcript Improvements**
- **#83184** — [Closed] Heartbeat-driven agent replies leave `pendingFinalDelivery` stuck, blocking subsequent heartbeats. Fix merged.
- **#86827** — [Closed] Group chat session stuck in 'failed' state silently drops all subsequent messages. Fix merged.

**Channel Fixes**
- **#79308** — [Closed] Telegram group replies sent to wrong `chat_id` (DM instead of group). Fix merged.
- **#85822** — [Closed] Silent ~48s post-run lane retention on Discord turns. Fix merged.

**Security & Config**
- **#92479** — [Closed] Zen provider ships no model catalog — every model must be hand-registered. Fix merged.
- **#49104** — [Closed] Telegram HTML `parse_mode` silently truncates responses containing angle-bracket tags. Fix merged.

**Docs & Tooling**
- **#90547** — [Closed] Map guanbear clawtributor emails. Docs tooling fix merged.

## Community Hot Topics

### Most Active Issues

1. **#88838** — [OPEN, 36 comments] Track core session/transcript SQLite migration via accessor seam
   - *Underlying need*: The SQLite storage migration (Path 3) is the top community concern. The active implementation PR #96625 is now the sole remaining work lane. Users are closely tracking the consolidation from the earlier 3.1b/3.2 stack into this single implementation.
   - [GitHub](https://github.com/openclaw/openclaw/issues/88838)

2. **#77598** — [OPEN, 22 comments] Track live dev agent behavior and trajectory
   - *Underlying need*: 24-hour observational monitoring of Pash's dev agent. Community interest in understanding agent behavior without human steering. The issue documents running observation notes.
   - [GitHub](https://github.com/openclaw/openclaw/issues/77598)

3. **#88312** — [OPEN, 18 comments, 4 👍] [Bug]: Codex app-server turn-completion stall regression (2026.5.27)
   - *Underlying need*: A regression in the Codex app-server causing multi-tool agent turns to fail with "Codex stopped before confirming the turn was complete." Users need this fixed as it affects the ChatGPT Plus integration. Regression from a previously fixed issue (#84076).
   - [GitHub](https://github.com/openclaw/openclaw/issues/88312)

### Most Active PRs (by comment count - top 30 all show `undefined` comments, none received discussion today)

All top-30 PRs have `undefined` comment counts, indicating they are not actively discussed in comments. Activity is measured by updates rather than conversation.

## Bugs & Stability

### Critical / P1 Bugs

1. **#88312** — [P1] Codex app-server turn-completion stall regression (2026.5.27) — regresses #84076
   - *Status*: Open, needs maintainer review and live repro. No fix PR yet.
   - [GitHub](https://github.com/openclaw/openclaw/issues/88312)

2. **#74484** — [P1] Gateway pairing scope deadlock: CLI cannot approve/reject auto-reissued over-scoped repair requests
   - *Status*: Open, needs maintainer and product decision. Long-standing (since April 29).
   - [GitHub](https://github.com/openclaw/openclaw/issues/74484)

3. **#55334** — [P1] `sessions.json` unbounded growth causes gateway OOM
   - *Status*: Open since March 26. Needs maintainer review and product decision.
   - [GitHub](https://github.com/openclaw/openclaw/issues/55334)

4. **#75593** — [P1] Subagents list still empty after spawn (v2026.4.29) — continuation of #71495
   - *Status*: Open, linked PR open (#? not specified in data).
   - [GitHub](https://github.com/openclaw/openclaw/issues/75593)

5. **#74586** — [P1] AM embedded run aborts memory_search tool calls; classifies as timeout
   - *Status*: Open, needs live repro.
   - [GitHub](https://github.com/openclaw/openclaw/issues/74586)

6. **#76038** — [P1] Stuck Session Recovery dual failure + long session preprocessing times
   - *Status*: Open, needs live repro.
   - [GitHub](https://github.com/openclaw/openclaw/issues/76038)

7. **#73182** — [P1] Reasoning default silently flipped to on for Claude models — doubles Anthropic spend
   - *Status*: Open since April 28. Needs maintainer and product decision.
   - [GitHub](https://github.com/openclaw/openclaw/issues/73182)

8. **#76042** — [P1] Clean install of new versions since 2026.5.xx is not possible
   - *Status*: Open, needs maintainer review and more info.
   - [GitHub](https://github.com/openclaw/openclaw/issues/76042)

9. **#75380** — [P1] `provider-payload.jsonl` and `cache-trace.jsonl` grow unbounded — no rotation policy
   - *Status*: Open since May 1. Needs security review.
   - [GitHub](https://github.com/openclaw/openclaw/issues/75380)

10. **#79552** — [P1] Android node sends events before websocket handshake completes, causing notification loss
    - *Status*: Open, source repro available.
    - [GitHub](https://github.com/openclaw/openclaw/issues/79552)

### High-Severity Regressions (P1)

- **#88312** — Codex turn-completion stall (2026.5.27)
- **#76042** — Clean install impossible since 2026.5.xx
- **#77930** — Discord channel not loaded in 2026.5.4 (beta.2/beta.3) — regression matrix documented
- **#77642** — 5.3 regression: duplicate answers + "missing tool result" synthetic errors
- **#77733** — Bare `/new` and `/reset` no longer trigger persona greeting in 2026.5.3

### Security-Related Bugs

- **#74484** — Gateway pairing scope deadlock
- **#78308** — Channel-mediated approval for MCP tool calls (Feature)
- **#75380** — Unbounded diagnostic JSONL logs
- **#73182** — Reasoning default flipped to on
- **#78493** — `sudo openclaw update` creates mixed ownership, `doctor` overwrites config
- **#77467** — MiniMax Portal OAuth token cannot auto-refresh
- **#78301** — Plugin loader silent failures on legacy/invalid contracts
- **#94147** — macOS app: `CLLocationManager` rebuilt every second causing TCC permission spam

### Issues with Fix PRs Today

- **#97591** — Fix `limitHistoryTurns` dropping `compactionSummary` (PR open, AI-assisted)
- **#97594** — Cap codex native-subagent completion delivery retries (PR open, AI-assisted)
- **#96469** — Fail closed when config is unreadable before full-file write (PR open)
- **#97157** — Validate GitHub skill commit is an immutable sha before download (PR open)
- **#95359** — Refuse owner-qualified ClawHub force install over a different owner (PR open)

## Feature Request Clusters

### 1. SQLite Transcript/Session Seams (Cluster)

Requested by @100yenadmin across multiple issues:
- **#79902** — Add companion-friendly SQLite transcript/session seams on database-first runtime
- **#79903** — Expose durable session lineage and sessionId discovery
- **#79904** — Add cursored SQLite transcript read API
- **#79905** — Add typed transcript projections and companion rebuild contract
- *Related*: Core tracking issue #88838 (Path 3 consolidation)
- *Active PR*: #96625 — `refactor: flip sessions and transcripts to sqlite storage`

### 2. Channel-Mediated Approval for MCP Tool Calls

- **#78308** — Channel-mediated approval for MCP tool calls (consent envelope)
- *Status*: Open, needs security review and product decision

### 3. Gateway-Lite Mode

- **#86881** — Gateway-lite mode without an AI harness for deterministic deployments
- *Status*: Open, needs security review

### 4. Telegram Bot-to-Bot and Guest-Bot Modes

- **#79077** — Support for Telegram bot-to-bot and guest-bot modes (Telegram May-7 2026 release)
- *Status*: Open, needs live repro. 8 👍 — high interest.

### 5. Cross-Backend Conversation Context Preservation

- **#79047** — Preserve conversation context across cross-backend model switches
- *Status*: Open, needs live repro

### 6. i18n / Localization

- **#79458** — i18n fields for slash command descriptions
- **#79034** — Control UI metadata not localized for non-English users
- **#61960** — PR: require i18n postprocess before skip (open since April 6)

### 7. Sessions Cleanup Improvements

- **#77941** — Native sessions cleanup support for orphan/unindexed transcript archive/prune

### 8. Per-Agent Default Overrides

- **#74643** — PR: accept per-agent elevatedDefault overrides (open since April 29, needs proof)

## User Feedback Summary

### Pain Points

- **Session reliability**: Multiple reports of sessions entering stuck/failed states silently dropping messages (#86827 closed, #76038 open). Users experience invisible failures where messages go unanswered.
- **Localization gaps**: Chinese-speaking users (among others) see untranslated technical metadata in Control UI and English-only slash command descriptions (#79034, #79458).
- **Security/credential friction**: MiniMax OAuth tokens cannot auto-refresh (#77467), `sudo` update creates file ownership problems (#78493), and reasoning silently flipped to on for Claude models doubles spend (#73182).
- **WebChat rendering**: Some assistant messages fail to render in WebChat while TUI works fine (#77136), causing users to think responses were lost.
- **Clean install barrier**: Since 2026.5.xx, fresh installations are extremely slow or impossible (#76042), blocking new users.

### Satisfactions (from release highlights)

- Users appreciate the new Slack relay mode and Mattermost native queue commands for easier channel automation.
- Per-DM model overrides give operators more granular control over agent behavior.

## Backlog Watch

### Long-Unanswered Important Issues

1. **#55334** — [P1, Created 2026-03-26] `sessions.json` unbounded growth causes gateway OOM
   - *Status*: Needs maintainer review and product decision. No PR.
   - [GitHub](https://github.com/openclaw/openclaw/issues/55334)

2. **#45718** — [P2, Created 2026-03-14] Session bloat: `skillsSnapshot` and `systemPromptReport` accumulated on every run
   - *Status*: Needs maintainer review and product decision. No PR.
   - [GitHub](https://github.com/openclaw/openclaw/issues/45718)

3. **#74484** — [P1, Created 2026-04-29] Gateway pairing scope deadlock
   - *Status*: Needs maintainer review, product decision, security review, and live repro.
   - [GitHub](https://github.com/openclaw/openclaw/issues/74484)

4. **#79077** — [P2, Created 2026-05-07] Telegram bot-to-bot and guest-bot mode support (8 👍)
   - *Status*: Needs maintainer review, product decision, security review, and live repro.
   - [GitHub](https://github.com/openclaw/openclaw/issues/79077)

5. **#79902** — [P2, Created 2026-05-09] Companion-friendly SQLite transcript/session seams
   - *Status*: Needs maintainer review and product decision.
   - [GitHub](https://github.com/openclaw/openclaw/issues/79902)

### Stale PRs Needing Maintainer Attention

- **#74643** — [PR, Created 2026-04-29] Per-agent `elevatedDefault` overrides — needs real behavior proof, no updates in 60+ days
- **#61960** — [PR, Created 2026-04-06] i18n postprocess before skip — waiting on author for over 80 days
- **#88681** — [PR, Created 2026-05-31] Runtime plugin startup stalls name in-flight plugins — ready for maintainer look since last update today

### Critical PRs Ready for Maintainer Look

- **#88681** — Runtime plugin startup stalls name in-flight plugins (proof supplied, sufficient)
- **#97591** — Fix `limitHistoryTurns` dropping `compactionSummary` (proof sufficient, AI-assisted)
- **#97478** — Migrate Tool Search gateway E2E into QA Lab flow (proof sufficient)
- **#92294** — Keep OpenClaw exec when native surface has no environment (proof sufficient)
- **#92957** — Add `agents.setDefault` RPC method (proof sufficient)
- **#97157** —

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-29

## 1. Daily Cross-Project Overview

Today’s activity was dominated by the larger projects: **OpenClaw** processed 500 issues and 500 PRs, shipping a new beta release, while **ZeroClaw** saw 50 issues and 50 PRs updated with no release. **NanoBot** had moderate activity (7 issues, 23 PRs) focused on WebUI stability and new features, and **PicoClaw** remained quiet with one merge and one stale issue closed. All projects demonstrated continued community interest in session reliability, channel polish, and per-agent configurability.

## 2. Activity Comparison

| Project    | Issues updated | PRs updated | Release today | Activity note |
|------------|----------------|-------------|---------------|---------------|
| OpenClaw   | 500            | 500          | Yes (v2026.6.11-beta.2) | Highest volume; net 62 issues closed, 67 PRs merged/closed |
| ZeroClaw   | 50             | 50           | No            | High volume; 10 issues closed, 3 PRs merged; heavy test contribution wave |
| NanoBot    | 7              | 23           | No            | Moderate; 1 issue closed, 10 PRs merged; new feature PRs active |
| PicoClaw   | ~1 (stale cleanup) | ~2 (1 merged, 1 open) | No | Low; single merge for image compression, no new releases |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues+PRs is an order of magnitude larger than any peer. ZeroClaw is next at 50, NanoBot at 30 combined.
- **Release cadence**: Only OpenClaw shipped a release today (beta.2). Others remain on existing stable versions.
- **Technical scope**: OpenClaw touches core infrastructure (SQLite session migration, channel layer fixes across 7+ platforms, security hardening). ZeroClaw focuses on governance RFCs and WASM plugin hosting; NanoBot on WebUI and voice; PicoClaw on protocol-level signals.
- **Community surface area**: OpenClaw has many P1 bugs with no fix PRs (10 listed); ZeroClaw has a strong test-contribution wave; NanoBot has a single high-interest feature request (#4010 voice output) with no maintainer response; PicoClaw is quiet.

## 4. Shared Technical Focus Areas

- **Session and storage reliability**
  - OpenClaw: SQLite session/transcript migration (#88838, PR #96625).
  - NanoBot: Legacy session-file repair (#4566 closed), prompt-cache invalidation (#4222).
  - ZeroClaw: SQLite default memory backend silently degrades without embeddings (#8386, P1).

- **Channel and delivery fixes**
  - OpenClaw: Telegram group reply fix, Discord retention fix, Mattermost queue, Slack relay mode.
  - NanoBot: WebUI stuck‑streaming fix (#4565), WeChat streaming dropped (#4567).
  - ZeroClaw: Telegram spam fix (#8446), Matrix streaming request (#8442).
  - PicoClaw: Turn‑completion signal for WebSocket protocols (#2984).

- **Per-agent customization**
  - OpenClaw: Per-DM model overrides (released in beta).
  - NanoBot: Subagent model override PR (#4570).
  - ZeroClaw: Per-agent environment variables (#8226), MCP scoping (#7733).

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Scale / maturity** | Core reference; broadest channel support (7+ platforms); complex session + security model | Lightweight assistant; WebUI-focused; voice input exists | Governance-heavy; WASM plugin future; new channels (Inkbox) | Minimalist; simplex channel; image compression |
| **Target user** | Power users, integrators, multi-channel operators | End-users, web-first; GitHub-hosted | Developers, deployers, multi-tenant shops | Edge / low-resource devices (SiPEED hardware) |
| **Release style** | Frequent betas with explicit migration notes | Stable releases only (v0.2.2); no beta today | No release today; pre-v0.8.x | No recent releases |
| **Community growth indicators** | Many critical bugs unresolved; high comment volume on issues | Feature requests (voice) with no maintainer reply | Many test-only PRs from external contributors; RFC governance | Silent project with one stale issue closed |

## 6. Community Activity Notes

- **High activity tier**: OpenClaw and ZeroClaw (hundreds of items, multiple contributors). OpenClaw has both the most merged work and most unresolved P1 bugs. ZeroClaw shows healthy test contribution onboarding (Alix-007, llagy009) but also several long‑standing issues (#2128, #7462).
- **Moderate activity tier**: NanoBot. Active PRs for new features (subagent model, A2A delegation), but overall issue count low. Voice output request (#4010) is the most‑commented topic.
- **Low activity tier**: PicoClaw. Only one merge (image compression) and one stale issue closed. No new community discussion.

No project shows signs of stagnation; all have open work lanes.

## 7. Evidence‑Backed Observations

1. **Session/storage reliability is a cross-project pain point.** OpenClaw consolidates SQLite migration; NanoBot fixes legacy session corruption; ZeroClaw has a P1 for missing embeddings in SQLite default. Each project is investing in storage foundations independently.
2. **Channel improvements remain the most frequent fix category.** Telegram, Matrix, WebUI, Slack, Mattermost – all projects delivered at least one channel fix today. This suggests that multi-channel robustness is a persistent challenge for AI assistant frameworks.
3. **Per-agent model and environment configurability is emerging as a shared feature demand.** OpenClaw shipped per-DM model overrides; NanoBot has an open PR for subagent model override; ZeroClaw has a request for per-agent env vars. The community wants granular control over agent behavior and cost.
4. **ZeroClaw’s governance RFC culture is unique among peers.** Issues like #6808 (work lanes) and #8396 (wire-protocol-first) indicate an active community shaping project structure. No comparable RFC activity appears in OpenClaw, NanoBot, or PicoClaw today.
5. **PicoClaw’s turn‑completion protocol request (#2984) highlights a standardization gap.** Users want a deterministic end‑of‑response signal. While OpenClaw and NanoBot have internal mechanisms (e.g., `turn.complete` in WebSocket), no project yet publishes a cross-platform specification for this signal.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-29

## 1. Today's Activity Brief

Over the past 24 hours, NanoBot saw **7 issues updated** (6 open, 1 closed) and **23 pull requests updated** (13 open, 10 merged/closed). No new releases were published. Activity concentrated in three areas: a new feature proposal for voice output (the most-commented issue), a batch of stability fixes for the WebUI and session handling, and several open PRs targeting prompt-cache efficiency and subagent model overrides. The closed PRs include a fix for WebUI stuck‑streaming after self‑restart, a security hardening of shell command allowlists, and support for skill subdirectory organization.

## 2. Releases

**No new releases** were made today. The latest stable release remains **v0.2.2** (as referenced in issue #4500). No migration notes or breaking changes to report.

## 3. Project Progress — Merged/Closed PRs

Nine PRs were merged or closed today (among the top 20 shown; two additional closed PRs are not listed due to low comment count). Key items:

- **Skill subdirectory support** ([PR #4504](https://github.com/HKUDS/nanobot/pull/4504)) — enables grouping user‑added skills in `~/.nanobot/workspace/skills/` into subdirectories for better organization.
- **MCP image-to-artifact delivery** ([PR #4542](https://github.com/HKUDS/nanobot/pull/4542)) — MCP tools returning `ImageContent` blocks now render as artifacts instead of embedding raw base64 in tool‑result strings.
- **WebUI stuck streaming fix** ([PR #4565](https://github.com/HKUDS/nanobot/pull/4565)) — resolves issue #4500 where gateway self‑restart left the UI in a perpetual “processing” state and the stop button reported “No active task to stop”.
- **Cron guard against unavailable store** ([PR #4564](https://github.com/HKUDS/nanobot/pull/4564)) — public cron APIs now handle missing storage gracefully.
- **Legacy session‑file repair** ([PR #4566](https://github.com/HKUDS/nanobot/pull/4566)) — `list_sessions` no longer silently drops session files with corrupt legacy filenames.
- **Harden tool‑call path against malformed relay responses** ([PR #4569](https://github.com/HKUDS/nanobot/pull/4569)) — adds validation for missing or non‑string tool names to prevent crashes and repeated error loops.
- **Repository guidelines** ([PR #4575](https://github.com/HKUDS/nanobot/pull/4575)) — introduces contributing documentation.
- **Documentation / CONTRIBUTORS.md** ([PR #2120](https://github.com/HKUDS/nanobot/pull/2120)) — merges updated contributor documentation and skills overview.

## 4. Community Hot Topics

The most‑commented and most‑reacted issue today is **[#4010: Feature proposal: text-to-speech / voice output support](https://github.com/HKUDS/nanobot/issues/4010)** (created May 26, updated yesterday, 2 comments, 2 👍). The user ( @olgagaga) notes that NanoBot already understands voice input but cannot speak back, leaving a conversational gap on channels that natively support voice notes. The issue argues that adding voice output closes the loop with minimal new surface area because the hardest channel‑side work is already done.

**[Issue #4500](https://github.com/HKUDS/nanobot/issues/4500)** (closed today, 2 comments) was also active; it reported the WebUI stuck‑streaming bug that was fixed in PR #4565.

No pull request accumulated more than a few comments (comment counts are not listed for PRs in the provided data), but **[PR #4581](https://github.com/HKUDS/nanobot/pull/4581)** (context‑usage reduction) and **[PR #4571](https://github.com/HKUDS/nanobot/pull/4571)** (native A2A peer delegation) received attention as new feature work.

## 5. Bugs & Stability

Three bug‑related items were active today, ranked by potential impact:

1. **Prompt / prefix‑cache invalidation (high severity)** — **[Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)** reports that `max_messages` truncation and micro‑compacting shift the message prefix on nearly every turn, defeating prompt caching and increasing costs. A fix PR **[#4568](https://github.com/HKUDS/nanobot/pull/4568)** (block‑aligned replay‑window eviction) is open and addresses the `max_messages` half of the problem.

2. **Security: allowlist bypass via chained commands** — **[Issue #4521](https://github.com/HKUDS/nanobot/issues/4521)** (referenced in PR #4562) described how `exec.allowPatterns` using `re.search()` on the raw command string allowed payloads like `echo allowlisted && touch /tmp/evil` to pass validation. **[PR #4562](https://github.com/HKUDS/nanobot/pull/4562)** (open) splits the command into segments and validates each against allowlists.

3. **WebUI stuck‑streaming (fixed)** — **[Issue #4500](https://github.com/HKUDS/nanobot/issues/4500)** (Bug 2 and Bug 3) was closed today with the merge of PR #4565, which clears stale streaming state after WebSocket reconnects and improves stop‑button reliability.

Additional fixes: **[PR #4567](https://github.com/HKUDS/nanobot/pull/4567)** (open) addresses a WeChat channel bug where `streaming` was silently dropped, forcing non‑streaming delivery that could trigger upstream relay issues.

## 6. Feature Request Clusters

Several feature requests have corresponding open PRs or recent activity:

- **Voice output / text-to-speech** — [#4010](https://github.com/HKUDS/nanobot/issues/4010) (no PR yet). User demand is clear from the discussion and reactions.
- **Subagent model override** — [#4231](https://github.com/HKUDS/nanobot/issues/4231) proposes a `model` parameter for the `spawn` tool. **[PR #4570](https://github.com/HKUDS/nanobot/pull/4570)** (open) implements this.
- **Native A2A delegation** — [#4179](https://github.com/HKUDS/nanobot/issues/4179) (partially addressed) asks for agent‑to‑agent collaboration. **[PR #4571](https://github.com/HKUDS/nanobot/pull/4571)** (open) introduces a peer‑delegation mechanism with depth guards.
- **Message buffering/debounce for group chats** — [#3938](https://github.com/HKUDS/nanobot/issues/3938) (no PR yet). The author reports pain with multiple rapid messages triggering separate agent turns in Feishu and Telegram groups.
- **Conda environment support for subprocesses** — [#4580](https://github.com/HKUDS/nanobot/issues/4580) (just opened, no PR). Requests a wrapper and configuration for virtual environments in the `exec` subsystem.
- **Session timestamps in sidebar + markdown export** — [#4579](https://github.com/HKUDS/nanobot/issues/4579) (just opened, no PR). Two UX improvements for the WebUI.
- **Dream duplicate‑skill guard** — The fix PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) (open) adds a write guard to prevent Dream from creating duplicate skill directories, directing the agent to edit existing skills instead.

## 7. User Feedback Summary

Real user pain points and use cases voiced today:

- **Voice output**: Users want a complete audio conversational loop, especially on channels that support voice notes. The current text‑only replies are seen as an incomplete experience.
- **Group‑chat reliability**: Running NanoBot in shared Feishu/Telegram groups causes unwanted multiple triggers and lack of debounce, especially in collaborative settings.
- **Subagent flexibility**: Power users need to route sub‑tasks to different models (e.g., cheap model for simple classification, expensive model for complex reasoning). The current `spawn` inherits the main agent’s model, limiting cost optimisation.
- **Cost and performance**: The prefix‑cache invalidation bug (#4222) directly raises token costs and reduces the lifespan of low‑context models. Users appreciate the context‑reduction PR #4581 as a partial solution.
- **WebUI UX**: After a server restart or reconnect, the UI can appear frozen with no way to stop a “stuck” generation. The fix (#4565) was welcomed.
- **Development environment**: One user explicitly requested conda/pip‑virtualenv support for executed subprocesses, indicating real‑world deployment in scripted environments.

No expressions of strong dissatisfaction were recorded; most feedback is constructive feature requests or bug reports.

## 8. Backlog Watch

Two issues have been open for over a month without maintainer response or a linked PR:

- **[#3938: Add message buffering/debounce for group chat channels](https://github.com/HKUDS/nanobot/issues/3938)** (created May 20, 1 comment, last updated June 28). The author described concrete pain points but has received no acknowledgment from maintainers.
- **[#4010: Feature proposal: voice output](https://github.com/HKUDS/nanobot/issues/4010)** (created May 26, 2 comments, 2 👍). Despite being the most‑discussed issue today, no maintainer has replied or marked it for consideration.

Additionally, **[#4231: Subagent model override](https://github.com/HKUDS/nanobot/issues/4231)** (created June 7) now has an open PR (#4570), so it is no longer unattended.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-29

## 1. Today's Activity Brief

In the last 24 hours, **50 issues** were updated (40 open/active, 10 closed) and **50 pull requests** were updated (47 open, 3 merged/closed). No new releases were published. Activity is spread across governance RFCs (e.g. #6808 on work lanes), bug fixes (Telegram spam, CI token failures), and a large wave of test-only PRs (XS/S size) contributed by multiple first-time contributors. The project remains in a high-velocity state with significant infrastructure work in progress for WASM plugin hosting, SOP (Standard Operating Procedure) enforcement, and a new Inkbox channel.

## 2. Releases

No new releases today.

## 3. Project Progress

**Merged/closed PRs today (3 identified in top 20):**

- [#8446 – fix(telegram): stay silent for unauthorized senders in group chats](https://github.com/zeroclaw-labs/zeroclaw/pull/8446) (closed) – Prevents Telegram group spam from operator-approval prompts.
- [#8432 – bug(ci): package publish tokens fail late when push access is missing](https://github.com/zeroclaw-labs/zeroclaw/pull/8432) (closed) – Fixes late failure in release workflows.
- [#8275 – bug(ci): Scoop manifest does not register zerocode](https://github.com/zeroclaw-labs/zeroclaw/pull/8275) (closed) – Adds missing shim for `zerocode.exe`.

**Bugs closed today:**
- [#6360 – Bug: Prompt Caching does not work with telegram](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) (closed) – Root cause identified and resolved.
- [#8366 – Bug: Heartbeat engine reads HEARTBEAT.md from data_dir instead of agent workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) (closed).
- [#7996 – Feature: Add configurable temporary-file cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/7996) (closed as wontfix).
- [#7852 – Tracker: v0.8.2 skills platform](https://github.com/zeroclaw-labs/zeroclaw/issues/7852) (closed).

**Test coverage additions:** Multiple test-only PRs were opened by contributors `@Alix-007` and `@llagy009`, covering MediaAttachment classification, JSON-RPC helpers, provider alias predicates, web-search routing, serial-path allowlists, board registry edge cases, importance scoring, session key sanitization, and tool manifest validation. These PRs are open and awaiting review.

## 4. Community Hot Topics

- [#6808 – RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (12 comments) – A widely-discussed governance RFC aiming to simplify issue routing and label management. Accepted and in rollout for v0.8.x.
- [#2128 – Bug: Cron and heartbeat delivery still send NO_REPLY sentinel text](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) (4 comments) – Persistent issue since February where the literal string "NO_REPLY" is sent to channels instead of being suppressed. Underlying need for silent cron/heartbeat notifications.
- [#8226 – Feature: support per-agent custom environment variables configuration](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) (4 comments) – User request for `runtime_context` and `runtime_secrets` blocks to handle multi-tenancy across lanes and MCP instances. Needs author action.
- [#6943 – RFC: Deconflict Plugin System Goals in FND-001](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) (4 comments) – Proposal to replace Extism with a direct wasmtime component model host. Underpins the v0.8.3 WASM plugin program.
- [#8386 – Bug: SQLite is the default memory backend but quickstart never requires/prompts an embedding model](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) (1 comment, priority P1) – Critical onboarding inconsistency: hybrid search silently degrades to keyword-only when embeddings are missing. Urgent user pain point.
- [#8396 – RFC: Wire-Protocol-First Provider Model](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) (1 comment) – Proposes making `wire_api` the primary organizing axis for provider configuration, aiming to reduce confusion in the provider model.

## 5. Bugs & Stability

**Priority P1 (critical):**

| Issue | Description | Status |
|-------|-------------|--------|
| [#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386) | SQLite memory backend default → hybrid search degrades to keyword-only without embeddings | Open, needs maintainer response |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows (Unix-only commands, path semantics, console encoding) | Open since June 10, no fix PR yet |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` parsed but never enforced at runtime – per-agent MCP scoping is a silent no-op | Open, in progress, affects security isolation |

**Priority P2 (important):**

- [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) – NO_REPLY sentinel text sent to channels (open since Feb 27)
- [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) – Misleading keybindings / help in ZeroCode TUI, especially on macOS
- [#8432](https://github.com/zeroclaw-labs/zeroclaw/issues/8432) – CI package publish tokens failing late (already fixed in PR#8432, closed today)

**Closed today without fix (wontfix):** [#7996](https://github.com/zeroclaw-labs/zeroclaw/issues/7996) – Configurable temporary-file cleanup declined.

## 6. Feature Request Clusters

- **Telegram channel improvements** – Three nearly simultaneous requests:
  - [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) – Implement Telegram Bot API 10.1 Rich Messages
  - [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) – Add multi-message streaming support (per-paragraph)
  - [#8446](https://github.com/zeroclaw-labs/zeroclaw/pull/8446) – Already merged fix for unauthorized sender spam
- **Matrix streaming** – [#8442](https://github.com/zeroclaw-labs/zeroclaw/issues/8442) requests a `single_message` mode, and a corresponding PR [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) is open.
- **Per-agent environment isolation** – [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) proposes `runtime_context` / `runtime_secrets` blocks. Related to [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) (MCP scoping no-op).
- **File protection** – [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) RFC for `.ignore` file mechanism to protect sensitive files from AI agent access.
- **New channel: Inkbox** – PR [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) adds full email/SMS/voice/iMessage channel with Quickstart onboarding.
- **CI/security hardening** – PRs [#8157](https://github.com/zeroclaw-labs/zeroclaw/pull/8157) (Semgrep + CodeQL) and issues [#8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056) / [#8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057) (split from #7675) add required and scheduled security jobs.

## 7. User Feedback Summary

**Pain points expressed:**
- **Onboarding confusion:** Default SQLite memory backend silently degrades search when no embedding model is configured (P1, #8386).
- **Channel noise:** NO_REPLY sentinel text sent to Telegram and other channels (#2128); unauthorized senders in Telegram groups caused operator-approval prompts to be publicly visible (fixed in #8446).
- **Windows exclusion:** 74 test failures on Windows are not caught by CI, blocking Windows users from contributing (#7462).
- **Security gaps:** The `mcp_bundles` field appears in Config but has no runtime effect, making multi-agent isolation an illusion (#7733).
- **macOS UX:** ZeroCode keybindings are misleading or unreachable on macOS (#7800).
- **Missing CLI tools:** Scoop manifest did not register `zerocode.exe` (fixed in #8275).

**Satisfaction indicators:**
- Quick closure of #6360 (Telegram prompt caching) and #8366 (heartbeat path) shows maintainer responsiveness.
- The large number of test-only PRs from external contributors suggests a welcoming environment for quality improvements.

## 8. Backlog Watch

- [#6074 – audit: track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (open since April 24) – Critical for code-recovery audit; no visible progress.
- [#2128 – NO_REPLY sentinel text](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) (open since Feb 27) – Long-standing annoyance for cron/heartbeat users; accepted and in-progress but stale.
- [#7462 – Windows test failures](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (open since June 10) – Priority P1 with no associated PR; maintainers have not yet allocated resources.
- [#7733 – MCP bundling silent no-op](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) (open since June 15) – Security-relevant isolation field has no effect; listed as in-progress but no fix PR yet.
- [#8226 – per-agent environment variables](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) – `needs-author-action` label applied; author has not responded since filing.
- [#8057 – CI: scheduled security jobs](https://github.com/zeroclaw-labs/zeroclaw/issues/8057) – In progress but no PR merged; would benefit from maintainer nudging.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-29

## Today’s Activity Brief
Project activity was light, with one issue closed (stale cleanup) and one pull request merged. No new releases were published. The merged PR adds configurable image compression to the vision pipeline, and an open PR introduces a new simplex channel type. The community’s most active discussion centered on the need for an explicit turn‑completion signal in the WebSocket protocol.

## Releases
No new releases.

## Project Progress
- **Merged/Closed PRs**
  - [#2964 – Feat/image input compression](https://github.com/sipeed/picoclaw/pull/2964)
    Adds an optional multi‑level compression policy for inbound images before building the model payload. Previously only `max_media_size` was enforced, which could lead to oversized requests. The feature is now available in the main branch.

- **Open PRs**
  - [#3193 – Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)
    Introduces a new channel type (`simplex`) as a non‑breaking feature. No comments or reactions have been posted yet.

## Community Hot Topics
- **Most active issue**
  [#2984 – [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/pull/2984)
  *Status:* Closed (stale)
  *Activity:* 4 comments, 2 👍 reactions
  The request asks for a deterministic signal (e.g., `turn.complete`) so external WebSocket clients know when the agent has finished processing. Current events (`message.create`, `typing.stop`) are insufficient for reliable end‑of‑turn detection. Although closed as stale, the lack of an alternative solution may resurface.

## Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours.

## Feature Request Clusters
Two feature areas appeared in today’s data, though not necessarily related:

1. **Turn‑completion protocol signal** (issue #2984) – users want a server‑side event that unambiguously marks the end of an agent response.
2. **Simplex channel support** (PR #3193) – adds a unidirectional channel type, potentially for simple notification or logging use cases.
3. **Image input compression** (PR #2964) – already merged; allows administrators to set compression levels (e.g., resize, quality) per channel.

No clustering beyond individual requests was observed.

## User Feedback Summary
- **Pain point (protocol clarity)** – External developers found the current WebSocket event sequence ambiguous for determining when the agent is done. The request in #2984 highlights a clear need for a formal end‑of‑turn indicator.
- **Use case (image handling)** – Large inbound images could cause excessive model payload sizes. The merged PR responds to this by offering configurable compression, which was previously a manual workaround.

## Backlog Watch
No long‑unanswered issues or PRs currently demand maintainer attention. The closed stale issue (#2984) remains unresolved, but without active discussion it is not considered a backlog priority at this time. PR #3193 is new and awaiting review.

</details>