# OpenClaw Ecosystem Digest 2026-06-28

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-28 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

```
# OpenClaw Project Digest — 2026-06-28

**Data source:** GitHub (github.com/openclaw/openclaw)
**Report scope:** 24 hours ending 2026-06-28

---

## 1. Today's Activity Brief
The repository saw exceptionally high surface activity — 500 issues and 500 PRs updated in the last 24 hours. Of those, 14 issues and 53 PRs were closed/merged. No new releases were published. The majority of open issues (~486) carry the label `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`, indicating a substantial backlog awaiting maintainer triage across session-state integrity, message delivery, and security boundaries. A full-day spike in PR updates suggests continued contributor momentum on both bug fixes and feature work, but the closure rate remains low relative to the open queue.

---

## 2. Releases
**None.** No new releases were tagged in the last 24 hours.

---

## 3. Project Progress
53 PRs were merged or closed today. Notable items among the top-30-by-comment set:

| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Autofix: add PR review autofix pipeline + Windows daemon | **CLOSED** | Adds an automated pipeline using the Claude Agent SDK to address PR review comments, plus a Windows background daemon that supervises the OpenClaw gateway. Core autofix logic (~785 lines) fetches review comments, generates fixes, and pushes updates. |
| [#97334](https://github.com/openclaw/openclaw/pull/97334) | fix(daemon): pin Node heap ceiling via CLI flag for managed services | **CLOSED** | Fixes [#96203](https://github.com/openclaw/openclaw/issues/96203) by adding a CLI flag to cap Node heap. Supersedes an earlier approach using `NODE_OPTIONS` which was blocked by security filters. |
| [#97075](https://github.com/openclaw/openclaw/pull/97075) | Doctor: expose gateway runtime findings | **CLOSED** | Adds structured health checks for gateway reachability and daemon service state, surfaced as `HealthFinding` records with redacted sensitive URL material. |
| [#97337](https://github.com/openclaw/openclaw/pull/97337) | fix(ui): show cron job model selection in quick-create and job list/detail | **OPEN** | Supersedes [#95341](https://github.com/openclaw/openclaw/pull/95341), fixes [#93507](https://github.com/openclaw/openclaw/issues/93507). Allows users to choose a model when creating cron jobs from the Web UI quick-create flow. |
| [#97336](https://github.com/openclaw/openclaw/pull/97336) | fix path to Discord Developer Mode in setup guide | **OPEN** | Small docs fix correcting a stale file path in the Discord setup guide. |
| [#90239](https://github.com/openclaw/openclaw/pull/90239) | Add session history family lookup | **OPEN** | Enables `chat.history` and `sessions_history` tool to read across reset transcripts when a session family is available via `usageFamilySessionIds`. |
| [#90259](https://github.com/openclaw/openclaw/pull/90259) | Add reset family carryover summaries | **OPEN** | Depends on #90239. Ensures compaction summaries from prior reset archives are carried forward into the active transcript so the agent doesn't start with empty context after a reset. |

---

## 4. Community Hot Topics
Issues and PRs with the highest engagement (comments or reactions) in today's data:

| Item | Title | Comments | 👍 | Highlights |
|------|-------|----------|----|------------|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Centralized filename encoding utility for multi-encoding Content-Disposition handling | 18 | 1 | Long-running discussion (since March) on proper architectural solution for filename encoding across channel adapters, beyond the current UTF-8 fix. Labels include `impact:data-loss`. |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Agent can promise a later follow-up without starting any actual follow-up action | 15 | 3 | User-facing behavior where the agent verbally commits to a follow-up but schedules no background task or cron job. High user frustration visible in comments. |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic) | 15 | 1 | Anthropic thinking blocks with invalid signatures survive persistence and fail recovery because the error text is genericized. Dated 2026-06-11, still open. |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | Community Skill Development & ClawHub | 15 | 2 | Ecosystem-level feature request for a community skill marketplace. Discussion identifies a wide gap between promise and current reality ("Driftnet has been..."). |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent never completes anything (regression) | 14 | 1 | Regression — a coding agent that worked in `2026.4.2` now produces only vague status updates. Labels include `regression` and `P1`. |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault configuration | 10 | 9 | High community demand (9 👍) for isolating knowledge wikis per agent in multi-agent setups. |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX support in Control UI | 8 | 7 | Strong user desire for rendering mathematical formulas in the web UI. |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay removed with no cross-machine replacement (regression) | 6 | 5 | Regression in v2026.3.22 — removal of the extension-based browser relay broke managed hosting providers who relied on cross-machine browser control. |

The common thread across hot topics is **reliability of agent behavior after a session boundary** — resets, follow-ups, compaction, and context carryover dominate the most-discussed issues.

---

## 5. Bugs & Stability

### Critical / P1 Issues (active today)

| Issue | Title | Impact | Fix PR? |
|-------|-------|--------|---------|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent never completes anything (regression, worked in 2026.4.2) | session-state, message-loss | No open fix PR |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets on same session key despite high reserveTokensFloor | session-state, message-loss | No open fix PR |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Streaming thinking signatures invalid on replay (Anthropic); recovery never fires | session-state, message-loss, auth-provider | No open fix PR |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths still bypass CLI dispatch on latest main | session-state, security, auth-provider | No open fix PR |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | Agent fails to send response back to originating channel (Telegram/Discord/WhatsApp) | session-state, security, message-loss | No open fix PR |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json unbounded growth causes gateway OOM | session-state, crash-loop | No open fix PR |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP parent session stuck until refresh when yielded waiting for child completion | session-state, message-loss | No open fix PR |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak: 389MB → 14.7GB over 4 days | session-state, crash-loop | No open fix PR |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes strips operator scopes unconditionally for non-local token-auth clients (regression) | security, message-loss, auth-provider | Linked PR open (not specified which) |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay removed with no cross-machine replacement (regression) | security | No open fix PR |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | Unhandled Playwright assertion error in CRSession._onMessage crashes Gateway | session-state, crash-loop | No open fix PR |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | Discord routing / mention-gating regression | session-state, message-loss | No open fix PR |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | Google Chat: Space/Group messages silently ignored (DMs work) | session-state, message-loss | Linked PR open |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | Embedded runner "Network connection lost" when LLM generates large tool call parameters | session-state, message-loss | No open fix PR |

### Notable Closed Issue
[#95833](https://github.com/openclaw/openclaw/issues/95833) — **Subagent abort-settle fails to release .jsonl.lock, permanently breaking the session** (P1, diamond lobster). Subagent runs exceeding `stuckSessionAbortMs` timeout without releasing the session lock file, rendering the session permanently broken. Closed today after resolution.

### Critical / P1 Issues — Active Fix PRs Under Review
| Issue | Title | Fix PR | Status |
|-------|-------|--------|--------|
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets on same session key | N/A | Needs live repro |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes strips operator scopes | [#?](https://github.com/openclaw/openclaw/issues/51396) (linked PR open) | Needs maintainer review |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | Google Chat space/group messages ignored | [#?](https://github.com/openclaw/openclaw/issues/58514) (linked PR open) | Needs live repro |

### Severity Assessment
The single most severe unresolved pattern is **session-state corruption or message loss after a lifecycle event** (reset, compaction, subagent timeout, lock file leak). At least 6 active P1 issues share this root pattern, and none have a merged fix.

---

## 6. Feature Request Clusters

### Multi-Agent Isolation & Configuration
- [#63829](https://github.com/openclaw/openclaw/issues/63829) — Per-agent memory-wiki vault configuration (9 👍)
- [#35203](https://github.com/openclaw/openclaw/issues/35203) — Multi-Agent Collaboration Enhancement RFC (capability profiling, shared blackboard, layered memory)
- [#48874](https://github.com/openclaw/openclaw/issues/48874) — Multi-Session

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-28

## 1. Daily Cross-Project Overview

Today’s activity across the four tracked projects was dominated by **OpenClaw**, which saw 500 issues and 500 PRs updated — the highest volume by an order of magnitude — though closure rates remained low (53 PRs merged/closed). **NanoBot** closed 29 PRs and 7 issues, including two security advisories, showing strong maintenance velocity. **Zeroclaw** updated 46 issues and 50 PRs, with 12 issues and 3 PRs closed, and continues to advance structured RFCs around supply chain security and a Wasm plugin runtime. **PicoClaw** had the lowest activity (3 issues, 7 PRs) but merged a significant agent collaboration feature and a minor MCP fix. No new releases were published by any project today.

## 2. Activity Comparison

| Project | Issues Updated (open/closed) | PRs Updated (open/closed/merged) | Release Status | Activity Note |
|---------|-------------------------------|----------------------------------|----------------|---------------|
| **OpenClaw** | 500 total (14 closed) | 500 total (53 closed/merged) | None | Exceptionally high surface activity; ~486 open issues carry `clawsweeper:needs-maintainer-review` or `needs-product-decision` labels; low closure rate relative to open queue. |
| **NanoBot** | 8 (1 open, 7 closed) | 47 (18 open, 29 merged/closed) | None | Active bug fixing and security patching (7 bugs closed, 2 security advisories resolved); one major open bug (#4500) with a pending fix PR. |
| **Zeroclaw** | 46 (34 open, 12 closed) | 50 (47 open, 3 merged/closed) | None | Moderate activity with many high-risk/large PRs under review; milestones v0.8.3 and v0.9.0 coordinate feature work; 10 issues closed as `invalid`. |
| **PicoClaw** | 3 (1 new bug open, 2 closed as stale) | 7 (5 open, 2 merged/closed) | None | Low-volume day; merged agent collaboration bus and MCP argument parsing fix; one new bug (#3194) reported. |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume (500 issues + 500 PRs) dwarfs the other three projects combined. However, its closure velocity is proportionally low: only ~2.8% of issues and ~10.6% of PRs were closed today, suggesting a **sizable backlog** (486 open issues awaiting triage). In contrast, NanoBot closed 87.5% of its updated issues and 61.7% of its PRs, and Zeroclaw closed 26% of issues (though only 6% of PRs). OpenClaw’s technical focus is heavily on **session-state integrity and message loss** — at least six active P1 issues share this root pattern, with no merged fixes. Neither NanoBot nor Zeroclaw have as many unremediated P1 bugs; NanoBot resolved its critical security issues, and Zeroclaw’s active bugs (#5808, #6360) are accepted with no fix PR yet but less severe labeling. OpenClaw’s community surface area is also much larger in terms of comments and reactions per issue, with several long-running discussions (e.g., #48788 with 18 comments, #58450 with 15). The other projects show smaller but more resolved discussions.

## 4. Shared Technical Focus Areas

- **Session reliability and state handling** — Appears in all four projects. OpenClaw has multiple P1 bugs around session corruption, compaction, and reset behavior (e.g., #62505, #63216, #92201). NanoBot fixed session key collision (#4533) and corrupted session files (#3712), but still has an open bug (#4500) where self-restart leaves the WebUI stuck. Zeroclaw is tracking context budget overflow (#5808) and missing prompt caching on Telegram (#6360), both impacting session continuity. PicoClaw merged an agent collaboration bus (#2937) that introduces durable inter-agent messaging, indicating attention to stateful coordination.

- **Security hardening** — NanoBot closed two security advisories (#4521 shell-chain bypass, #4518 login-shell secrets leak). Zeroclaw has active RFCs for supply chain signing (#8177) and SLSA provenance (#8277). OpenClaw’s critical issues include security boundaries (#57326 CLI bypass, #51396 scope stripping) and a regression in browser relay (#53599). PicoClaw has no security-specific work today but saw a stale-closed feature request about Telegram permission control (#3114).

- **MCP (Model Context Protocol) integration** — Zeroclaw has an open feature request (#4467) to expose MCP resources and prompts beyond tools, and a related PR for OpenRouter model fallbacks (#8138). PicoClaw merged a fix for `mcp add` argument parsing (#3048). OpenClaw and NanoBot did not show MCP-specific activity today, though NanoBot’s streaming fixes (e.g., #4531, #4530) touch on provider interactions that may involve MCP boundaries.

- **Memory and context management** — OpenClaw’s per-agent memory-wiki vault (#63829, 9 👍) and reset carryover summaries (#90259) reflect demand for isolated memory. NanoBot’s PR #4554 adds write guard for duplicate skill creation, and #4556 wires model override for Dream consolidation. Zeroclaw’s #5844 (accepted bug) and #5808 (context budget) directly address memory-prompt balance and context sizing. PicoClaw has no explicit memory work today.

- **Channel-specific issues** — OpenClaw has P1 bugs on Discord routing (#44502), Google Chat silent ignores (#58514), and Telegram/Discord/WhatsApp response failures (#54531). NanoBot’s WebUI stuck on self-restart (#4500) is a channel/user-interface bug. Zeroclaw has prompt caching broken on Telegram (#6360) and a passive WhatsApp group context PR (#8389). PicoClaw adds a simplex channel type (#3193) and LINE error handling (#3189), and reported a Matrix encrypted message bug (#3194).

## 5. Differentiation Analysis

- **OpenClaw** positions itself as the core reference implementation, reflected in its enormous issue/PR volume and the scale of its contributor base. Its technical focus is on **agent lifecycle stability** (session resets, compaction, memory carryover) with many unaddressed P1 bugs. Community engagement is highest, but maintainer triage capacity appears strained.

- **NanoBot** emphasizes rapid bug fixing and security responsiveness, with 29 PRs merged today. It is the only project that closed two security advisories in 24 hours. Its community is smaller but vocal about the “ultra-lightweight” claim (#660) and WebUI reliability (#4500). Feature work is incremental (cron silent mode, stream coalescing fixes) rather than large architectural changes.

- **Zeroclaw** is the most architecturally ambitious, with structured RFCs for supply chain security (#8177), Wasm plugin runtime (#8135), and goal-mode control plane (#8393). Its development is organized around milestones (v0.8.3, v0.9.0) and it has the highest proportion of large, high-risk PRs. The focus is on platform-level capabilities (provenance, plugin isolation, bounded autonomous sessions) rather than day-to-day bug fixing.

- **PicoClaw** is the smallest project, targeting embedded/edge use cases (as indicated by its name and Docker/arm64 work). Today’s activity is minimal but includes a significant merged feature (agent collaboration bus) and a new channel (simplex). It appears to be in a stable feature addition phase with few reported bugs.

## 6. Community Activity Notes

**Tier 1 – Very High Volume, Low Closure**
- **OpenClaw**: 500 issues, 500 PRs updated; only 14 issues and 53 PRs closed. Community hot topics concentrate on session reliability and follow-through failures. No releases.

**Tier 2 – Moderate Volume, High Closure**
- **NanoBot**: 8 issues, 47 PRs updated; 7 issues and 29 PRs closed. Security fixes and bug patches dominate. One high-severity open bug (#4500). No releases.

**Tier 3 – Moderate Volume, Low-Moderate Closure**
- **Zeroclaw**: 46 issues, 50 PRs updated; 12 issues and 3 PRs closed. Many open PRs under review; RFCs attract commenters. No releases.

**Tier 4 – Low Volume**
- **PicoClaw**: 3 issues, 7 PRs updated; 2 issues and 2 PRs closed. One new bug filed (#3194). No releases.

*No maturity scoring applied as all projects lack recent releases.*

## 7. Evidence-Backed Observations

1. **Session reliability is the most pervasive cross-project concern.** OpenClaw has at least six active P1 bugs related to session state corruption or message loss after lifecycle events (e.g., reset, compaction, subagent timeout). NanoBot’s open bug #4500 involves WebUI stuck after self-restart, and its fixed bugs #4533 (session key collision) and #3712 (corrupted session files) directly address session file integrity. Zeroclaw’s #5808 and #6360 deal with context budget and prompt caching, both impacting session consistency. PicoClaw’s merged agent collaboration bus (#2937) introduces durable mailboxes, a form of session-persistent state.

2. **Security hardening is active across multiple projects, but with different scopes.** NanoBot resolved two critical security issues today (#4521, #4518). Zeroclaw is in the RFC stage for supply chain signing and SLSA provenance (#8177, #8277). OpenClaw has several unaddressed security-critical bugs (e.g., #57326, #51396, #53599). PicoClaw has no security-specific activity. This suggests a spectrum from reactive patching (NanoBot) to proactive architectural hardening (Zeroclaw) to backlogged security debt (OpenClaw).

3. **No project shipped a release today, despite high activity.** All four projects are between releases. OpenClaw and Zeroclaw have significant open PRs and bugs that could justify a release, while NanoBot and PicoClaw have smaller changesets. The absence of releases may indicate a common dependency freeze or integration testing phase, or simply a mid-cycle day.

4. **MCP (Model Context Protocol) support is expanding in two projects.** Zeroclaw explicitly wants to expose MCP resources and prompts (#4467, 4 👍), and has an OpenRouter fallbacks PR (#8138). PicoClaw fixed an MCP argument parsing bug (#3048). OpenClaw and NanoBot do not show MCP-specific activity today, but given the protocol’s growing adoption, this may be an area to watch for future convergence.

5. **Community demand for better memory and context management is visible across all projects.** OpenClaw has per-agent memory-wiki vault (#63829, 9 👍), reset carryover (#90259), and discussions about memory emphasis (#58450). NanoBot improved Dream consolidation (#4554, #4556) and session file handling. Zeroclaw’s accepted bug #5844 (memory over-prioritization in cron) and #5808 (context budget overflow) are direct requests. PicoClaw’s agent collaboration bus (#2937) implies memory persistence needs. This cluster reflects an industry-wide challenge of maintaining agent context across conversations and sessions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-28

## 1. Today's Activity Brief

Over the last 24 hours, NanoBot saw 8 issues updated (1 still open, 7 closed) and 47 pull requests updated (18 open, 29 merged/closed). No new releases were tagged. The project’s maintainers and contributors closed 7 bug reports and merged 29 PRs, covering session file collisions, Anthropic content‑type validation, stream coalescing, and tool‑call ID deduplication. Two security advisories (#4521, #4518) were also closed after fixes landed. A major open bug (#4500) about WebUI stuck streaming after self‑restart received a fix PR (#4565) still under review.

## 2. Releases

**No new releases.** The latest tagged release remains v0.2.2.

## 3. Project Progress

The following PRs were merged or closed (many resolved long‑standing bugs) in the past 24 hours:

| PR | Title | Summary |
|----|-------|---------|
| [#4533](https://github.com/HKUDS/nanobot/pull/4533) | fix: prevent session key collision on disk (#4057) | Replaces lossy `:`→`_` sanitization with a safe replacement, fixing collisions between keys like `telegram:a_b` and `telegram:a:b`. |
| [#4532](https://github.com/HKUDS/nanobot/pull/4532) | fix: validate content block type in Anthropic assistant blocks (#4060) | Ensures every assistant content block includes a `type` field before sending to the Anthropic API. |
| [#4531](https://github.com/HKUDS/nanobot/pull/4531) | fix: include \_stream\_id in stream delta coalescing key (#4063) | Prevents merging deltas from different streams in the same chat by adding `_stream_id` to the grouping key. |
| [#4530](https://github.com/HKUDS/nanobot/pull/4530) | fix: deduplicate tool call IDs in non-stream parser (#4059) | Applies the same duplicate‑ID normalization used in the streaming parser to the non‑stream path. |
| [#4523](https://github.com/HKUDS/nanobot/pull/4523) | test: fix flaky test\_keeps\_n\_most\_recent due to identical mtimes | Adds a tie‑breaker to `prune_dream_sessions` sorting to handle sub‑millisecond timestamp collisions. |
| [#4225](https://github.com/HKUDS/nanobot/pull/4225), [#4357](https://github.com/HKUDS/nanobot/pull/4357) | feat(cron): silent mode and lock\_recipient | Two PRs adding a `silent` flag to cron jobs so background monitoring tasks do not auto‑deliver responses when there is nothing to report. |
| [#3712](https://github.com/HKUDS/nanobot/pull/3712) | fix: handle corrupted session files where last\_consolidated exceeds message count | Gracefully recovers from session files with corrupt consolidation metadata. |

Other merged items include security fixes (see section 5) and minor chore/test improvements.

## 4. Community Hot Topics

- **#660 – “Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency”**
  [Issue](https://github.com/HKUDS/nanobot/issues/660) — Closed. 14 comments, 5 👍. The user questioned the “ultra‑lightweight” claim because both Python *and* Node.js are required. The project maintainers likely addressed this in the discussion; the issue is now closed.

- **#4500 – “WebUI:self-restart leaves stuck streaming, stop button reports 'No active task to stop'”**
  [Issue](https://github.com/HKUDS/nanobot/issues/4500) — Open. 2 comments. The reporter describes a concrete bug where a gateway self‑restart leaves the UI stuck in “processing” state. A fix PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) was opened on 2026‑06‑27 and is still under review.

- **#4521 / #4518 – Security advisories**
  Both closed. [#4521](https://github.com/HKUDS/nanobot/issues/4521) describes a shell‑chain bypass of `exec.allowPatterns`; [#4518](https://github.com/HKUDS/nanobot/issues/4518) warns about default login‑shell execution leaking secrets from startup files. Both were fixed by PR [#4562](https://github.com/HKUDS/nanobot/pull/4562) and other commits.

## 5. Bugs & Stability

| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| **#4500** – WebUI stuck after self‑restart; stop button unresponsive | High – breaks user experience on reconnect | Open | [#4565](https://github.com/HKUDS/nanobot/pull/4565) (under review) |
| **#4521** – Shell‑chain bypass in `exec.allowPatterns` allows unintended command execution | Critical – security vulnerability | Closed | [#4562](https://github.com/HKUDS/nanobot/pull/4562) (merged) |
| **#4518** – Login‑shell execution reintroduces secrets from startup files | High – security, information disclosure | Closed | [#4562](https://github.com/HKUDS/nanobot/pull/4562) |
| **#4057** – Session key collision on disk (lossy filename sanitization) | Medium – data loss / session overwrite | Closed | [#4533](https://github.com/HKUDS/nanobot/pull/4533) |
| **#4060** – Anthropic provider emits assistant blocks without required `type` field | Medium – API rejection | Closed | [#4532](https://github.com/HKUDS/nanobot/pull/4532) |
| **#4063** – Stream delta coalescing ignores `_stream_id`, merges distinct streams | Medium – corrupted streaming output | Closed | [#4531](https://github.com/HKUDS/nanobot/pull/4531) |
| **#4059** – Non‑stream parser preserves duplicate tool call IDs | Low – may cause duplicate tool invocations | Closed | [#4530](https://github.com/HKUDS/nanobot/pull/4530) |

Additionally, a flaky test was fixed in [#4523](https://github.com/HKUDS/nanobot/pull/4523) and session corruption handling improved in [#3712](https://github.com/HKUDS/nanobot/pull/3712).

## 6. Feature Request Clusters

Several feature requests and corresponding PRs were active in the past 24 hours:

- **Memory & Dream enhancements** – PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) adds a write guard to prevent duplicate skill creation; PR [#4556](https://github.com/HKUDS/nanobot/pull/4556) wires `model_override` for Dream consolidation; PR [#4555](https://github.com/HKUDS/nanobot/pull/4555) introduces per‑session model presets.
- **Web search provider** – PR [#4406](https://github.com/HKUDS/nanobot/pull/4406) (open) adds Serper.dev as a new web search backend.
- **MCP image delivery** – PR [#4542](https://github.com/HKUDS/nanobot/pull/4542) (open) enables MCP tools to return image content as artifacts instead of base64 strings.
- **Cron silent mode** – Already merged in [#4225](https://github.com/HKUDS/nanobot/pull/4225) / [#4357](https://github.com/HKUDS/nanobot/pull/4357); users wanted background monitoring jobs that only alert on failure.
- **Agent reliability** – PR [#4534](https://github.com/HKUDS/nanobot/pull/4534) (open) adds verification gates and provider recovery to the agent loop.
- **Clarification tool** – PR [#4527](https://github.com/HKUDS/nanobot/pull/4527) (open) introduces a `ask_clarification` tool for multi‑turn disambiguation.

A long‑standing issue [#660](https://github.com/HKUDS/nanobot/pull/660) about the “ultra‑lightweight” claim and Node.js dependency was closed, though no visible changes to dependencies were noted in this digest.

## 7. User Feedback Summary

- **Lightweight claim questioned** – In [#660](https://github.com/HKUDS/nanobot/issues/660), a user expressed dissatisfaction with the project’s “ultra‑lightweight” self‑description, pointing out that the Dockerfile requires both Python and Node.js. The issue received 5 👍 from the community. It is now closed.
- **WebUI reconnection pain** – In [#4500](https://github.com/HKUDS/nanobot/issues/4500), a user reported that after a gateway self‑restart the UI remains stuck in a processing state and the stop button becomes non‑functional. This is a clear user experience regression; a fix PR is under review.
- **Security concerns** – The two security reports [#4521](https://github.com/HKUDS/nanobot/issues/4521) and [#4518](https://github.com/HKUDS/nanobot/issues/4518) came from external researchers. Both were quickly addressed, indicating responsive maintainer handling.
- **Cron silent mode** – The merge of `silent` mode (PRs [#4225](https://github.com/HKUDS/nanobot/pull/4225), [#4357](https://github.com/HKUDS/nanobot/pull/4357)) likely satisfies a common request for background monitoring without noisy auto‑replies.

## 8. Backlog Watch

- **Issue #4500** – Open since 2026‑06‑24, remains the most user‑visible open bug. Fix PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) exists but is not yet merged. No maintainer response in the issue thread (only 2 comments total). This needs attention to avoid further user frustration.

- **PR #4371** – “fix(cache): add breakpoint before Recent History so the stable system prefix caches” – Open since 2026‑06‑16, no recent activity. This PR aims to improve context cache hit rates by separating the growing recent‑history block. Could benefit from review/merge.

- **PR #4353** – “fix(transcription): convert audio to WAV 16k mono before STT” – Open since 2026‑06‑15, no maintainer comments. This addresses a real problem with WhatsApp voice notes failing on some STT providers.

- **Static analysis of “ultra‑lightweight” claim** – No further action is pending (issue closed), but if the project continues to require both runtimes, the marketing language may draw periodic criticism. No maintainer commitment to removing Node.js was visible in this digest.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-28

## Today's Activity Brief

Activity remains high with 46 issues and 50 PRs updated in the last 24 hours. Of the issues, 34 remain open/active and 12 were closed; among PRs, 47 are open and 3 were merged or closed. No new releases were published. The v0.8.3 milestone tracker (#7320) continues to coordinate a large body of work across WASM plugins, skills platform, MCP dashboard, and operator-management surfaces, while the v0.9.0 milestone (#7432) tracks auth, security, and gateway work. The most active conversations involve supply chain security (#8177, #8058), a Wasm-first plugin runtime (#8135), and a proposed goal mode for bounded autonomous sessions (#8303).

## Releases

No new releases today.

## Project Progress

- **Skills path fix** (#8335, open) — JordanTheJet submitted a fix to make `skills install`/`list`/`remove` bundle-aware, resolving a mismatch between `data_dir` and per-agent workspace paths. This is a high-risk, medium-size PR that addresses a runtime bug.
- **SLSA provenance attestation** (#8277, open) — ConYel added SLSA Build L3 provenance attestation to the release pipeline via `actions/attest-build-provenance`, implementing Phase A of RFC #8177.
- **Dependency deduplication** (#8225, open) — A small CI fix bumps `strum`/`strum_macros` to unify on the 0.28 version already pulled by `object 0.39.1`.
- **Anthropic streaming serialization fix** (#8148, open) — Mazhuima submitted a fix to propagate serialization errors in `build_streaming_request()` rather than panicking via `.expect()`.
- **Inkbox channel** (#8384, open) — Dimavrem22 added Inkbox (email + SMS + voice + iMessage) as a native ZeroClaw channel with Quickstart onboarding.
- **Bulk project-management closures** — A series of 10 issues (#8371–#8378) were closed as `invalid`; these appear to be structured task tracking items for a DMS/GST extraction project, not core ZeroClaw bugs.

## Community Hot Topics

### Most Active Issues

- **#8177** (open, 10 comments) — RFC for supply chain signing with hardware-backed PGP, hermetic builds, and SLSA provenance. This is a structured proposal following the StageX model, linked to the existing hardened CI pipeline. The high comment count and risk/security tags indicate strong community interest in release integrity.
- **#5844** (closed, 7 comments) — Bug report about the system prompt placing "too much emphasis on memory" at the expense of the current prompt, especially in cron jobs. Closed as accepted; likely will see a fix in an upcoming patch.
- **#5808** (open, 6 comments) — S1 bug where the default 32k context budget is exceeded by ~3.3× on the first iteration due to system prompt + tool definitions. The discussion focuses on raising the default or dynamically sizing the budget. No fix PR linked yet.
- **#6360** (open, 4 comments) — S2 bug where prompt caching works over CLI but not over Telegram, forcing full re-processing. Users report degraded performance on Telegram.
- **#4879** (closed, 4 comments, 2 👍) — S1 bug where Gemini CLI OAuth succeeds but subsequent requests fail with `rate_limited` errors. Marked closed; presumed fixed.

### Most Active PRs (by label count and risk tags)

No PRs in the top-20 list show a comment count; all are listed as `undefined`. Risk and size annotations indicate several high-risk, large-PR items are under active development.

- **#8389** (open, risk:high, size:L) — Adding passive WhatsApp group context fields to the channel message model, with coordinated changes across multiple channel implementations.
- **#8338** (open, risk:high, size:XL) — ACP multiple-choice elicitation for the ACP channel and Zerocode Code tab. This is a large feature but the author notes it is still a draft spec and no client editor implements the client half.
- **#8393** (open) — Architecture Decision Record (ADR-008) for goal-mode control-plane, documenting durable architectural direction.
- **#8399** (open, risk:high, size:M) — Live SOP step executor that wires agent-started SOP actions into a scoped queue.

**Underlying needs reflected in these conversations**: users are requesting stronger supply-chain security guarantees (provenance, signing), better runtime stability (context budget sizing, prompt caching parity across channels), and new interaction models (goal mode, SOP automation, MCP resource/prompt support).

## Bugs & Stability

### S1 — Workflow Blocked

- **#5808** (open, 6 comments) — Default 32k context budget exceeded by ~3.3× on first iteration, causing "perpetual preemptive trim." No fix PR exists yet. The comment thread suggests a default raise to at least 128k or dynamic sizing is being considered.
- **#4879** (closed, 4 comments) — Gemini CLI OAuth failure after successful authentication. Marked closed; no details on the fix in the top-30 list.

### S2 — Degraded Behavior

- **#5844** (closed, 7 comments) — System prompt over-prioritizes memory over current prompt content, especially in cron jobs. Accepted; likely awaiting implementation.
- **#6360** (open, 4 comments) — Prompt caching broken on Telegram channel. User reports observed logs from LLM server about missing cache data.
- **#8047** (closed, 3 comments) — `ReadSkillTool` looks in `data_dir` but skills live in agent workspace, causing "Unknown skill" responses. Closed; PR #8335 (open) is the proposed fix.

### Other Bug Reports (within 24h)

No new S1/S2 bugs reported today. The PR #8148 (Anthropic serialization) and #8335 (skills path) address previously reported issues.

## Feature Request Clusters

### Supply Chain Security
- **#8177** (open) — RFC: hardware PGP, hermetic builds, SLSA provenance (10 comments)
- **#8058** (open) — CI: release-only cosign signing, SBOM publication (4 comments)
- **#8277** (open) — PR adding SLSA provenance attestation to release pipeline
- **Activity drivers**: Users and maintainers are aligned on hardening the release pipeline with verifiable artifacts.

### Wasm Plugin Runtime
- **#8135** (open) — RFC: Wasm-first plugin runtime, default-on, capability enforcement, signed distribution (2 comments)
- **#7314** (open) — Tracker for v0.8.3 WASM plugin program
- **#8368** (open, DO NOT MERGE) — PR replacing extism with direct wasmtime component-model host
- **Activity drivers**: The project is actively migrating from extism to wasmtime, with signed module distribution and fine-grained permission models under discussion.

### Goal Mode / Autonomous Sessions
- **#8303** (open, 3 comments, 1 👍) — RFC: bounded autonomous session work with completion, pause, cancellation, or budget exhaustion
- **#8393** (open) — ADR for goal-mode control-plane architecture
- **Activity drivers**: Users want a first-class durable mode for pursuing objectives without interactive turns, complementing cron and delegation.

### MCP Resources & Prompts
- **#4467** (open, 3 comments, 4 👍) — Feature request to expose MCP resources and prompts, not just tools
- **Activity drivers**: Current MCP integration is tool-only; users need access to MCP resources and prompt templates for richer agent capabilities.

### Channel-Specific Enhancements
- **#8379** (open, 2 comments) — Passive group context for WhatsApp Web
- **#8389** (open) — PR implementing the above with coordinated channel model changes
- **#8138** (open, 3 comments) — OpenRouter model fallbacks array support
- **#8397** (open) — Expose per-cron-job `uses_memory` flag in CLI and tools
- **Activity drivers**: Users need better channel integration (WhatsApp group context), provider failover (OpenRouter), and memory control for cron jobs.

## User Feedback Summary

- **Context budget pain** (#5808, #6360): Users report the default 32k context is unusable for real workloads, with system prompt + tool definitions alone exceeding the limit. Telegram users are hit harder due to missing prompt caching.
- **Memory vs. prompt balance** (#5844): A user reports that cron jobs give "too much value" to stale memories, distorting responses. This was accepted as a bug.
- **Gemini OAuth frustration** (#4879): OAuth flow succeeds but subsequent API calls are rate-limited, blocking a provider path. This was closed but the root cause is not publicly documented.
- **Autonomy vs. tool execution** (#6434, closed): A user with `autonomy level = "full"` found shell tool calls were silently refused; this S1 blocker was accepted.
- **Skills discoverability** (#8047, closed): Users calling `read_skill` got "Unknown skill" because the tool searched the wrong directory; a fix PR (#8335) is in progress.
- **Feature demand for structured automation**: The goal mode RFC (#8303) and SOP automation PRs (#8391, #8399, #8400) reflect users wanting more structured, auditable workflows beyond the current turn-based and cron models.
- **No notable sentiment on project direction or maintainer responsiveness** appears in today's data.

## Backlog Watch

Items that have been open for extended periods without maintainer action or with stale/inactive author status:

- **#4879** (Gemini CLI OAuth, closed) — Opened 2026-03-28, closed today. Root-cause details are not visible; users may need follow-up documentation.
- **#5808** (context budget, opened 2026-04-16) — 6 comments, accepted, but no fix PR linked. This is a priority:P1 S1 blocker that impacts all new users with default config.
- **#5844** (memory emphasis, opened 2026-04-17) — Accepted but no implementation PR exists.
- **#6360** (Telegram prompt caching, opened 2026-05-04) — Accepted, no fix PR visible.
- **#4467** (MCP resources/prompts, opened 2026-03-24) — 4 👍, accepted, marked in-progress, but the assigned PR list does not include a specific implementation PR.
- **PR #5187** (arm64 Docker target, opened 2026-04-02) — Has `needs-author-action` and `stale-candidate` labels; no recent maintainer engagement. This is a multi-month-old PR adding a widely-requested platform target.
- **PR #6966** (prompt/completion capture on LLM spans, opened 2026-05-27) — Also `needs-author-action` and `stale-candidate`. The original implementation exists in a downstream fork; upstreaming appears stalled.

*Note: The v0.8.3 (#7320) and v0.9.0 (#7432) tracker issues are actively maintained by @Audacity88 and serve as coordination surfaces rather than stalled items.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-28

## Today’s Activity Brief
Three issues and seven pull requests were updated in the last 24 hours. One new bug (#3194) was reported regarding Matrix encrypted messages received without crypto enabled; two older issues were closed as stale. Two PRs were merged/closed, including a fix for argument parsing in `mcp add` and a larger feature branch for inter‑agent collaboration. Five new PRs remain open, covering a new `simplex` channel type, LINE channel error handling, Docker image updates, gitignore cleanup, and internationalisation key syncing.

## Releases
No new releases were published today.

## Project Progress
The following pull requests were **merged/closed** today:
- **[#3048 – fix(mcp): reject unknown pre-positional flags in add](https://github.com/sipeed/picoclaw/pull/3048)** (closed, stale) – Fixes `mcp add` argument parsing when root‑level flags like `--no-color` are passed before the subcommand.
- **[#2937 – Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937)** (closed, stale) – Introduces a durable inter‑agent communication bus with per‑agent mailboxes, collaboration threads, structured message envelopes, and permission‑aware delivery.

Newly opened PRs (all from 2026-06-27):
- **[#3193 – Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)** – New channel integration (feature).
- **[#3189 – fix(line): explicitly ignore resp.Body.Close() errors in Send and classifySDKError](https://github.com/sipeed/picoclaw/pull/3189)** – Cleanup of error handling in the LINE channel.
- **[#3192 – chore(docker): bump goreleaser base images from alpine:3.21 to 3.23](https://github.com/sipeed/picoclaw/pull/3192)** – Infrastructure update.
- **[#3191 – chore: remove duplicate build/ entry in .gitignore](https://github.com/sipeed/picoclaw/pull/3191)** – Config cleanup.
- **[#3190 – fix(i18n): sync missing locale keys from en.json to bn-in and cs translations](https://github.com/sipeed/picoclaw/pull/3190)** – Adds missing translation keys (`chat.dropImagesActive`, `chat.disableCodeWrap`, `chat.enableCodeWrap`) with fallback to English.

## Community Hot Topics
The most active issue today is **[#2472 – BUG: list_dir returns "invalid argument" on Windows](https://github.com/sipeed/picoclaw/issues/2472)** (closed, 7 comments, 1 👍). The user reported that platform-specific backslashes are passed directly to Go's `os.Root`, causing `invalid argument` errors. The issue was resolved (stale‑closed), indicating the fix has been merged or the bug was addressed.

The closed feature request **[#3114 – Telegram 渠道按对话类型（私聊/群组/频道）的权限分级控制](https://github.com/sipeed/picoclaw/issues/3114)** (2 comments, 1 👍) received support for granular permission control in Telegram channels by conversation type. Although closed as stale, it reflects ongoing user interest in safer channel‑level access control.

## Bugs & Stability
- **[#3194 – [BUG] Received encrypted message but crypto is not enabled](https://github.com/sipeed/picoclaw/issues/3194)** (open, 0 comments) – User running picoclaw v0.2.4-9 with Matrix reports that an encrypted message was received while crypto support is not enabled. This is a moderate‑severity bug because it may lead to unhandled messages or silent failures. No fix PR exists yet.
- **[#3189](https://github.com/sipeed/picoclaw/pull/3189)** explicitly ignores `resp.Body.Close()` errors in the LINE channel, which is a low‑severity stability improvement.
- The Windows path bug (#2472) has been closed, resolving cross‑platform compatibility.

## Feature Request Clusters
- **Agent collaboration** – PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) was merged, adding an internal collaboration bus for multi‑agent coordination.
- **New channel type** – PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) adds a `simplex` channel type (details not yet available).
- **Telegram permission control** – Issue [#3114](https://github.com/sipeed/picoclaw/issues/3114) requests per‑conversation‑type (private/group/channel) permission control, closed as stale but may be revisited.

## User Feedback Summary
- **Windows compatibility pain**: The `list_dir` bug (#2472) caused frustration for Windows users; it has been addressed.
- **Telegram safety concerns**: The user behind #3114 highlighted that without conversation‑type separation, dangerous tools (e.g., `exec`, `write_file`) could be triggered in group chats by allowed users or even anyone if the config is permissive.
- **Matrix encrypted messages**: The user reporting #3194 encountered an unexpected encrypted message while crypto was not enabled, indicating a potential configuration mismatch or missing feature detection.

## Backlog Watch
No long‑unanswered important issues or PRs requiring maintainer attention are currently evident. All recently active issues have been closed, and open items are either newly filed or in early review.

</details>