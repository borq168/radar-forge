# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-26 00:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-26

## Today's Activity Brief

In the past 24 hours, 500 issues were updated (477 open, 23 closed) and 500 pull requests were updated (414 open, 86 merged/closed). No new releases were published. Notable activity includes a large merge/close ratio on PRs (86 resolved), with several critical fixes progressing: a Discord tool-call leak patch (#96106) is open and under review, a Chrome extension regression (#53599) remains open without a linked PR, and multiple memory-leak/stability bugs continue to receive maintainer attention. The community remains highly engaged on long-standing feature requests around skill ecosystems, multi-session architecture, and security hardening.

## Releases

No new releases. (Latest release data not provided.)

## Project Progress

The following pull requests were merged or closed today (among the top 30 by comment count):

- **#68936** (CLOSED) — *Autofix: add PR review autofix pipeline + Windows daemon*
  Adds an automated pipeline using Claude Agent SDK to address review comments, plus a Windows background daemon to supervise the gateway.

- **#96143** (CLOSED) — *fix(plugins): avoid spurious npm spec error after metadata failure*
  Prevents confusing second error when an npm metadata lookup fails for range-style plugin specs.

- **#61329** (CLOSED) — *ui: default usage view to last 7 days instead of today-only*
  Changes the Control UI Usage dashboard default from a single-day to a 7-day rolling window.

Additionally, multiple open PRs received updates, including security-bound response-read limits (#96875, #96874, #96873), Codex integration fixes (#96818, #96872), and UX improvements for cron validation (#96516, #96826).

## Community Hot Topics

The most active issues (by comment count) reveal recurring pain points:

- **#48788** (18 comments) — Centralized filename encoding utility for multi-encoding `Content-Disposition` handling.
  Users need a robust solution for Chinese, Japanese, and Korean filenames across channel adapters.

- **#63918** (17 comments) — Cron `agentTurn` sends `thinking=none` to OpenAI models that only support `thinking=minimal`.
  A clear gap in cron job configuration validation.

- **#58450** (15 comments) — Agent promises a follow-up without actually starting any background action.
  Users report unreliable agent behavior that undermines trust.

- **#50090** (15 comments) — Community Skill Development & ClawHub ecosystem improvements.
  The promise of a skill marketplace remains unfulfilled; driftnet, security, and documentation gaps are highlighted.

- **#51429** (12 comments) — Hardcoded developer workspace path (`/Users/wangtao`) merged into the codebase.
  A severe regression affecting all installations after a certain version.

These issues reflect strong demand for reliability, ecosystem maturity, and prompt engineering safety.

## Bugs & Stability

High-severity bugs reported (P1 with `impact:security`, `crash-loop`, `session-state`, `data-loss`):

| Issue | Title | Severity | Fix PR exists? |
|-------|-------|----------|----------------|
| **#63918** | Cron `thinking=none` sent to `gpt-5-nano` | P1 | No linked PR |
| **#63216** | Repeated hard context-overflow resets despite high `reserveTokensFloor` | P1, crash-loop | No |
| **#55334** | `sessions.json` unbounded growth → gateway OOM | P1, crash-loop | No |
| **#54155** | Gateway memory leak: 389MB → 14.7GB over 4 days | P1, crash-loop | No |
| **#53599** | Chrome extension browser relay removed, no cross-machine replacement | P1, regression | No |
| **#52186** | ElevenLabs TTS generates audio but OpenAI voice plays instead | P1, regression | No |
| **#44905** | Discord leaks internal tool-call traces (NO_REPLY, raw JSON) | P1, security | #96106 (open) may address |
| **#91009** | Codex PreToolUse hook spawns CPU-bound processes, stalls gateway | P1, crash-loop | No |
| **#53540** | "Network connection lost" when LLM generates large tool-call parameters | P1, session-state | No |
| **#52130** | Restart storm from Telegram retry type mismatch + misleading diagnostics | P1, crash-loop | No |

Several P2 issues with `impact:security` remain open, e.g., #45740 (GitHub issue body injection), #57326 (CLI bypass), #65624 (Mattermost cleartext callback URLs), #64046 (sensitive data in cleartext), and #51396 (scope stripping regression).

No fix PRs have been merged for the above P1 bugs today, but #96106 (Discord tool-call leak fix) is in review and #96818 (Codex native tool completion abort) addresses a related crash reported in #96452.

## Feature Request Clusters

User-requested features and related PRs (none of these have been merged today):

- **Skill & Ecosystem**
  #50090 (ClawHub marketplace), #50199 (skill priority configuration), #60572 (multi-slot memory architecture), #63930 (Anthropic advisor tool support)

- **Session & Context Management**
  #48874 (multi-session architecture), #52640 (persistent task-status surface for long-running turns), #58818 (guarantee last N raw messages survive compaction), #54373 (context provenance metadata), #51028 (session sorting by meaningful activity)

- **Security & Compliance**
  #56349 (unbypassable outbound policy enforcement), #64046 (sensitive data masking), #64664 (approvals lost on restart), #64438 (remote reranker endpoint support)

- **Performance & Reliability**
  #50739 (system event priority/bypass-queue mode), #63990 (multi-index embedding with model-aware failover)

No PRs advancing these features were updated today; they remain in discussion or awaiting product decisions.

## User Feedback Summary

Users express frustration around several themes:

- **Stability**: Repeated hard resets, memory leaks growing to >14GB, cron jobs failing silently or hallucinating output.
- **Security**: Discord leaking raw tool-call JSON, Mattermost tokens in cleartext URLs, GitHub issue injection, hardcoded developer paths in released code.
- **Regression**: Chrome extension removal broke managed hosting, TTS voice mismatch after an update, scope stripping broke backend clients.
- **Ecosystem**: The ClawHub skill marketplace is underdelivered; users want better skill management, priority, and vetting.
- **Internationalization**: File-encoding handling for non-Latin scripts is a recurring pain point across channels.

Overall sentiment is cautious: the project is actively developed and responsive, but a backlog of high-severity bugs undermines reliability for production use.

## Backlog Watch

Several important issues have been open for months without resolution or linked fix PRs:

- **#44905** (2026-03-13) — Discord tool-call leak (P1 security). No merged fix; #96106 is in review but not yet merged.
- **#50090** (2026-03-19) — ClawHub ecosystem (P2). No committed PR.
- **#51429** (2026-03-21) — Hardcoded workspace path (P2 regression). No linked PR.
- **#55334** (2026-03-26) — `sessions.json` unbounded growth (P1 crash-loop). No fix PR.
- **#53599** (2026-03-24) — Chrome extension removal (P1 regression). No fix PR.
- **#54155** (2026-03-25) — Gateway memory leak (P1). No fix PR.
- **#63216** (2026-04-08) — Repeated hard resets (P1). No fix PR.

These issues have significant user impact and should be prioritized. The maintainer team appears aware (many are tagged `clawsweeper:needs-maintainer-review`), but progress on merging fixes remains slow for the most critical items.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-26

## 1. Daily Cross-Project Overview

All four projects reported no new releases today, with activity concentrated on issue triage, security fixes, and ongoing PR reviews. OpenClaw dominated raw volume with 500 issues and 500 PRs updated, though no critical P1 bugs received merged fixes. NanoBot saw concentrated security work, with 8+ bypass reports against MCP and exec guardrails submitted and actively patched. ZeroClaw progressed architecture RFCs (work lanes, Wasm-first plugins, goal mode) while closing a S0 delegate bypass. PicoClaw showed lower activity but landed fixes for sub-agent duplication, token waste, and Matrix identity parsing. A common pattern across projects is the tension between feature velocity and stability — long-standing P1 bugs in OpenClaw remain unaddressed, while NanoBot and ZeroClaw responded rapidly to newly disclosed vulnerabilities.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
|---------|---------------|-------------|----------------|---------------|
| **OpenClaw** | 500 (477 open, 23 closed) | 500 (414 open, 86 merged/closed) | No new release | High volume; 86 PRs resolved but no P1 security fixes merged |
| **NanoBot** | 22 (11 open, 11 closed) | 38 (24 open, 14 merged/closed) | No new release | Security-focused day; 8+ MCP/exec bypass reports submitted with fix PRs |
| **ZeroClaw** | 49 (most updated, context counts not available) | 50 (1 merged/closed) | No new release | Architecture-heavy day; 2 release trackers in progress (v0.8.2, v0.9.0) |
| **PicoClaw** | 3 (1 open) | 19 (6 merged/closed) | No new release | Stability fixes landed; low issue volume but responsive maintenance |

## 3. OpenClaw Compared With Peers

**Activity Volume**: OpenClaw's 500 issues and 500 PRs updated vastly exceed all peers (next highest: ZeroClaw at ~50 each). However, the resolution rate tells a different story — only 86 PRs merged/closed versus 414 still open, and zero P1 bug fixes merged today. NanoBot and ZeroClaw show higher closure rates relative to their volume.

**Technical Focus**: OpenClaw's activity spans user interface (usage view defaults), plugin metadata fixes, and pipeline automation — a broad surface area reflecting its role as the core reference implementation. In contrast, NanoBot's day was dominated by security hardening, ZeroClaw by architecture RFCs, and PicoClaw by targeted bug fixes. OpenClaw has more feature requests (skill ecosystem, multi-session architecture) that remain in discussion without committed PRs.

**Community Surface Area**: OpenClaw's most active issues (Discord tool-call leak, cron thinking validation, session.json growth) reflect production deployment pain points. NanoBot's community was reactive to security disclosures with coordinated reporter-maintainer interaction. ZeroClaw's community engagement centers on RFCs (work governance, supply-chain signing) — suggesting a more design-oriented user base. PicoClaw's small issue count suggests either a narrower user base or effective triage.

**Shared Pattern**: All projects show that security/permission bugs get faster responses than reliability bugs. NanoBot's MCP bypasses received fix PRs within hours; ZeroClaw's delegate bypass was closed same-day. OpenClaw's Discord leak (#44905, open since March) and sessions.json growth (#55334, open since March) remain unmerged — a disparity worth noting.

## 4. Shared Technical Focus Areas

**Security Configuration and Permissions Isolation** — Appearing in three projects:
- **OpenClaw**: Discord tool-call leak (#44905, P1 security); Mattermost cleartext callback URLs (#65624); unbypassable outbound policy enforcement requested (#56349)
- **NanoBot**: MCP `enabledTools` allowlist bypass (8+ variants, critical); `exec.allowPatterns` bypass (6 variants, critical)
- **ZeroClaw**: Delegate tool allowlist bypass (#8279, S0, closed with fix); translations-map leak-repair regression (#8312, S2)

**Memory and State Management** — Appearing in two projects:
- **OpenClaw**: Gateway memory leak 389MB→14.7GB (#54155, P1 crash-loop); `sessions.json` unbounded growth → OOM (#55334, P1 crash-loop); repeated hard context-overflow resets (#63216, P1 crash-loop)
- **ZeroClaw**: MCP stdio child process accumulation on daemon (#5903, open since April); orphan leak ~48 processes/day

**Long-Standing Unresolved Bugs** — Appearing in two projects:
- **OpenClaw**: Multiple P1 crash-loop bugs open since March-April without linked fix PRs (#44905, #55334, #54155, #63216, #53599)
- **PicoClaw**: `libolm` to `vodozemac` migration (#3088, open since June 9, no maintainer response)

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Primary Focus** | Reference implementation, broadest feature surface | Security hardening, MCP tool ecosystem | Architectural evolution (Wasm, plugins, governance) | Lightweight agent, multi-platform deployment |
| **Target User Profile** | Production deployers, plugin developers, enterprise operators | Security-conscious developers, hobbyists, bot operators | Developers building custom agent pipelines, plugin authors | SBC/edge device users, Matrix/Telegram communities |
| **Architecture Emphasis** | Monolithic gateway with plugin SDK | Modular with subagent delegation | Wasm-first plugin runtime, unified catalog vision | Minimal core, external integrations |
| **Release Cadence** | No public release timeline observed | No public timeline; responsive to security issues | Two active release trackers (v0.8.2, v0.9.0) with defined scopes | No release timeline; fixes merged as they land |
| **Community Process** | High volume, slow resolution on P1 bugs | Fast security response; feature PRs from core contributors | RFC-driven design; formal work lanes governance | Small community, responsive maintainer fixes |

**Key Differentiators Today**:
- ZeroClaw is the only project with explicit release trackers and governance RFCs in rollout — suggesting more structured release management.
- NanoBot is the only project where a single vulnerability cluster (MCP/exec bypass) dominated the day's activity — indicating either active adversarial testing or weak initial guardrails.
- OpenClaw has the widest gap between community engagement (500 issues) and actionable progress on critical bugs — no P1 crash-loop fix merged today despite months-old reports.
- PicoClaw is the only project with no security-critical issues reported today.

## 6. Community Activity Notes

**High Activity Tier** (100+ issues/PRs):
- **OpenClaw**: 1000 items updated; 86 PRs resolved. Community highly active but P1 bug resolution is a bottleneck. Feature requests remain in discussion without committed implementation.

**Medium Activity Tier** (20-100 items):
- **ZeroClaw**: ~100 items updated; 1 PR merged. Heavy RFC activity but low closure rate on bugs. Release trackers suggest upcoming cadence changes.
- **NanoBot**: 60 items updated; 14 PRs merged. High closure rate on security issues, lower on feature PRs. Strong reporter-maintainer interaction.

**Lower Activity Tier** (<20 issues):
- **PicoClaw**: 22 items updated; 6 PRs merged. Small but responsive. No community unrest visible.

**Note on Maturity Signals**: These activity levels reflect a single day and should not be extrapolated to project maturity or community health. NanoBot's security spike could indicate either strong vulnerability discovery or weak initial security posture — today's data alone cannot distinguish. ZeroClaw's low PR closure rate may reflect RFC phase where implementation has not yet landed. Cross-referencing multiple daily digests would be needed for trend analysis.

## 7. Evidence-Backed Observations

**1. Security boundary hardening is the dominant cross-project activity today.**
NanoBot received 8+ exploit submissions against MCP and exec allowlists, with immediate fix PRs submitted. ZeroClaw closed a S0 delegate bypass. OpenClaw has an open Discord leak fix (#96106) under review. All three projects are actively addressing permission enforcement gaps — suggesting the ecosystem is in a phase of discovering and patching access-control vulnerabilities.

**2. Architecture complexity management is a shared challenge.**
OpenClaw's P1 crash-loop bugs (memory leak, sessions.json unbounded growth, repeated resets) point to systemic stability issues under load. ZeroClaw's MCP orphan process leak (open since April) and translations-map regression show similar long-tail stability problems. PicoClaw's low bug count may reflect smaller deployment scale rather than superior architecture. No project today demonstrated a merged fix for a long-standing production stability bug.

**3. Technical debt handling varies significantly across projects.**
NanoBot and ZeroClaw closed security bugs on the same day they were reported. OpenClaw has multiple P1 bugs open since March with no linked fix PRs. PicoClaw's libolm migration request (#3088) has no maintainer response after 17 days. This suggests different prioritization frameworks — NanoBot/ZeroClaw favor rapid incident response, while OpenClaw and PicoClaw may have slower review cycles or resource constraints.

**4. Feature development continues despite stability gaps.**
ZeroClaw advanced Wasm-first plugin RFCs, goal mode, and supply-chain signing — all significant architecture changes. OpenClaw received PRs for autofix pipelines, cron validation UX, and Windows daemon support. NanoBot has open PRs for PWA, subagent aggregation, and memory consolidation. Only PicoClaw showed purely fix-oriented activity. The data does not show evidence of intentional stability sprints or bug-bashing periods in any project.

**5. No clear cross-project signal for a dominant architectural direction.**
OpenClaw remains a monolithic gateway. ZeroClaw is pursuing Wasm-first plugin decomposition. NanoBot focuses on subagent delegation. PicoClaw on lightweight external integrations. Each project's architectural choices reflect its target use case and community, not a converging ecosystem standard. The "everything is a plugin" vision is explicit only in ZeroClaw and part of OpenClaw's skill ecosystem requests — but implementation approaches diverge.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-26

## 1. Today's Activity Brief
In the last 24 hours, 22 issues were updated (11 open, 11 closed) and 38 pull requests were updated (24 open, 14 merged/closed). No new releases were published. A significant cluster of security reports (8+ issues) from @YLChen-007 details bypasses in the MCP `enabledTools` allowlist and the `exec` tool’s `allowPatterns` guard, with several associated fix PRs already submitted. On the feature front, multiple enhancement PRs from @yu-xin-c advance subagent, memory, and cron capabilities. A WebUI PWA and mobile sidebar swipe PR (#4494) and an MCP idle‑timeout auto‑kill PR (#4506) are also under review.

## 2. Releases
No new releases today.

## 3. Project Progress
The following pull request was merged or closed today (the only explicitly closed PR in the provided data):

- **[PR #4493 – fix(webui): WebM→WAV conversion for Xiaomi MiMo ASR transcription](https://github.com/HKUDS/nanobot/pull/4493)** – Resolves transcription failures caused by the MiMo ASR API’s lack of WebM/Opus support. The fix is scoped to the `xiaomi_mimo` provider and uses the Web Audio API for frontend conversion. Closes issue #4492.

A total of 14 PRs were merged/closed today; the remaining 13 are not listed in the top-20 set.

Closed issues that likely correspond to merged fixes include:

- [MCP `enabledTools` bypass variants](https://github.com/HKUDS/nanobot/issues/4517) (#4517, #4434, #4435) – all closed, presumably by PR #4524.
- [Custom provider thinking style](https://github.com/HKUDS/nanobot/issues/4429) (#4429) – closed.
- [Dream cursor bug](https://github.com/HKUDS/nanobot/issues/4242) (#4242) – closed.
- [DingTalk rich text and timeout](https://github.com/HKUDS/nanobot/issues/4497) (#4497) – closed.
- [Telegram web regression](https://github.com/HKUDS/nanobot/issues/4488) (#4488) – closed.
- [Subagent `fail_on_tool_error` config](https://github.com/HKUDS/nanobot/issues/4198) (#4198) – closed.
- [Empty response handling](https://github.com/HKUDS/nanobot/issues/1710) (#1710) – closed.
- [HVTracker badge request](https://github.com/HKUDS/nanobot/issues/4503) (#4503) – closed.

## 4. Community Hot Topics
The most active topic by volume is a coordinated set of **security advisory reports** from @YLChen-007 covering two major attack surfaces:

- **MCP `enabledTools` scope bypass** – Issues [#4519](https://github.com/HKUDS/nanobot/issues/4519) (open), [#4517](https://github.com/HKUDS/nanobot/issues/4517) (closed), [#4434](https://github.com/HKUDS/nanobot/issues/4434) (closed), [#4435](https://github.com/HKUDS/nanobot/issues/4435) (closed) document that resource and prompt wrappers were registered even when `enabledTools: []` was set. A fix PR [#4524](https://github.com/HKUDS/nanobot/pull/4524) is open.
- **`exec.allowPatterns` bypass** – Issues [#4521](https://github.com/HKUDS/nanobot/issues/4521), [#4520](https://github.com/HKUDS/nanobot/issues/4520), [#4518](https://github.com/HKUDS/nanobot/issues/4518), [#4516](https://github.com/HKUDS/nanobot/issues/4516), [#4515](https://github.com/HKUDS/nanobot/issues/4515), [#4514](https://github.com/HKUDS/nanobot/issues/4514) (all open) detail multiple bypass methods: shell chaining, login-shell secret leakage, comment-tail stripping, and wrapper prefix injection. A fix PR [#4526](https://github.com/HKUDS/nanobot/pull/4526) is open.

These reports received the most attention from maintainers, with immediate fix PRs submitted for many of them.

Other notable discussions:

- **Windows system‑service restart issues** – User @Quincy-Zh reported two bugs ([#4511](https://github.com/HKUDS/nanobot/issues/4511), [#4513](https://github.com/HKUDS/nanobot/issues/4513)) involving `--background` and NSSM‑managed services. Both are open with one comment each.

- **PWA and mobile sidebar** – PR [#4494](https://github.com/HKUDS/nanobot/pull/4494) (open) from @zpljd258 adds PWA support and a mobile swipe gesture for the sidebar, addressing issue [#4479](https://github.com/HKUDS/nanobot/issues/4479). This has drawn attention as a user‑facing enhancement for mobile WebUI users.

## 5. Bugs & Stability
Reported bugs, ranked by severity:

| Severity | Issue / Bug | Status |
|----------|------------|--------|
| **Critical** | **MCP `enabledTools` allowlist bypass** – Resource and prompt wrappers registered despite deny‑all policy. Multiple independent bypass variants identified. | 1 open (#4519), 3 closed (#4517, #4434, #4435). Fix PR [#4524](https://github.com/HKUDS/nanobot/pull/4524) open. |
| **Critical** | **`exec.allowPatterns` multiple bypasses** – Shell chaining, comment‑tail stripping, login‑shell secret exposure, wrapper prefix injection. | 6 open issues (#4521, #4520, #4518, #4516, #4515, #4514). Fix PR [#4526](https://github.com/HKUDS/nanobot/pull/4526) open. |
| **High** | **Windows background/restart inconsistency** – `--background` generates JSON/log files that become stale after `/restart`. | Open: [#4511](https://github.com/HKUDS/nanobot/issues/4511). |
| **High** | **NSSM system‑service restart failure** – Port‑occupied loop or service stops while bot stays alive. | Open: [#4513](https://github.com/HKUDS/nanobot/issues/4513). |
| **Medium** | **Telegram Web “message not supported” regression** – Rich messages break Telegram Web compatibility. | Closed: [#4488](https://github.com/HKUDS/nanobot/issues/4488) (likely fixed). |
| **Low** | **WebUI voice transcription failure** – MiMo ASR rejects WebM/Opus. | Closed via PR [#4493](https://github.com/HKUDS/nanobot/pull/4493). |
| **Low** | **DingTalk timeout and unsupported rich text** – HTTP timeout and unhandled `richText` messages. | Closed: [#4497](https://github.com/HKUDS/nanobot/issues/4497). |
| **Low** | **“No response to give” with Qwen 3.5** – Empty response handling. | Closed: [#1710](https://github.com/HKUDS/nanobot/issues/1710). |
| **Low** | **Dream cursor not advancing when disabled** – Recent history still injected. | Closed: [#4242](https://github.com/HKUDS/nanobot/issues/4242). |

Several additional non‑security fixes are proposed in open PRs:

- **[#4531](https://github.com/HKUDS/nanobot/pull/4531)** – Fix `_stream_id` coalescing for overlapping streams.
- **[#4532](https://github.com/HKUDS/nanobot/pull/4532)** – Validate content block type in Anthropic assistant blocks.
- **[#4533](https://github.com/HKUDS/nanobot/pull/4533)** – Prevent session key collision on disk (`:` vs `_` conflict).
- **[#4530](https://github.com/HKUDS/nanobot/pull/4530)** – Deduplicate tool call IDs in non‑stream parser.
- **[#4522](https://github.com/HKUDS/nanobot/pull/4522)** – Add generic repeated‑tool‑call guard for all tools.
- **[#4523](https://github.com/HKUDS/nanobot/pull/4523)** – Fix flaky test due to identical mtimes.
- **[#4441](https://github.com/HKUDS/nanobot/pull/4441)** – Force‑close `streamable_http` generator on reconnect failure.
- **[#4510](https://github.com/HKUDS/nanobot/pull/4510)** – Skip malformed tool calls with non‑string name.

## 6. Feature Request Clusters
Several feature requests and associated PRs are active today:

| Feature | Issue / PR | Status |
|---------|-----------|--------|
| **PWA support + mobile sidebar swipe** | [#4479](https://github.com/HKUDS/nanobot/issues/4479) / PR [#4494](https://github.com/HKUDS/nanobot/pull/4494) | Open |
| **`ask_clarification` tool** | [#4508](https://github.com/HKUDS/nanobot/issues/4508) | Open – no PR yet |
| **Custom provider thinking style** | [#4429](https://github.com/HKUDS/nanobot/issues/4429) | Closed – likely merged |
| **Subagent `fail_on_tool_error` config** | [#4198](https://github.com/HKUDS/nanobot/issues/4198) | Closed |
| **Subagent aggregated result mode** | PR [#4414](https://github.com/HKUDS/nanobot/pull/4414) | Open |
| **Subagent spawn model override** | PR [#4415](https://github.com/HKUDS/nanobot/pull/4415) | Open |
| **Cron job model presets** | PR [#4416](https://github.com/HKUDS/nanobot/pull/4416), fixes [#4378](https://github.com/HKUDS/nanobot/issues/4378) | Open |
| **Eager memory consolidation** | PR [#4402](https://github.com/HKUDS/nanobot/pull/4402) | Open |
| **Memory archive with provenance context** | PR [#4424](https://github.com/HKUDS/nanobot/pull/4424) | Open |
| **Heartbeat trigger command** |

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-26

## Today's Activity Brief

ZeroClaw saw heavy activity with 49 issues and 50 PRs updated in the last 24 hours, though only one PR was merged or closed. The project remains in a zero-release period (no new versions published today) with work concentrated across two active release trackers: **v0.8.2** (release support, 37 items) and **v0.9.0** (auth, security, breaking changes, 116 items). Two high-severity security bugs surfaced: a delegate tool allowlist bypass rated S0 (data loss/security risk) and a translations-map leak-repair regression rated S2. Several major RFCs were accepted and are now in rollout, including work lanes governance, in-app upgrades from the web dashboard, and goal mode for bounded autonomous sessions.

---

## Releases

**None** — No new releases were published today.

---

## Project Progress

Only one PR was merged or closed in the last 24 hours, but several significant PRs remain open and actively reviewed:

**Closed/Merged Items:**
- **#6714** — [Closed] Feature: Remove remote-markdown-link block from skill audit (false-positive fix accepted) — https://github.com/zeroclaw-labs/zeroclaw/issues/6714
- **#7873** — [Closed] Tracker: Telegram media groups should dispatch as one agent request — https://github.com/zeroclaw-labs/zeroclaw/issues/7873
- **#8154** — [Closed] Bug: Kimi Code provider targets dead endpoint (404 regression) — https://github.com/zeroclaw-labs/zeroclaw/issues/8154
- **#8279** — [Closed] Bug: delegate bypasses parent's tool allowlist (S0 severity, closed with fix) — https://github.com/zeroclaw-labs/zeroclaw/issues/8279
- **#8236** — [Closed] Bug: voice_wake.rs missing `subject` field breaks `--all-features` build — https://github.com/zeroclaw-labs/zeroclaw/issues/8236
- **#7087** — [Closed] Bug: `zeroclaw models set` falls through to doctor instead of saving config — https://github.com/zeroclaw-labs/zeroclaw/issues/7087

**Notable Open PRs (significant feature/architecture work):**
- **#8304** — Out-of-band approval plane with fail-closed timeout and PriorityBased gate fix (part of SOP milestone tracker #8288) — https://github.com/zeroclaw-labs/zeroclaw/pull/8304
- **#8173** — In-app upgrade with auto-restart from web dashboard (implements RFC #8170) — https://github.com/zeroclaw-labs/zeroclaw/pull/8173
- **#8313** — Skills default to compact injection, deprecate full mode — https://github.com/zeroclaw-labs/zeroclaw/pull/8313
- **#8335** — Make skills install/list/remove bundle-aware (fixes broken multi-agent skill management) — https://github.com/zeroclaw-labs/zeroclaw/pull/8335
- **#8237** — Add opt-in MCP support for standalone ACP sessions — https://github.com/zeroclaw-labs/zeroclaw/pull/8237

---

## Community Hot Topics

Most commented issues and PRs today reveal three underlying concerns: **governance/workflow automation**, **supply-chain security**, and **runtime architecture simplification**.

**Top Issues by Comment Count:**
- **#6808** — RFC: Work Lanes, Board Automation, and Label Cleanup (11 comments) — https://github.com/zeroclaw-labs/zeroclaw/issues/6808
  - Accepted governance RFC now in rollout. Proposes structured work lanes to reduce maintainer manual overhead. Rev. 4 signals iterative refinement.

- **#8177** — RFC: Supply chain signing — hardware PGP, hermetic builds, and SLSA provenance (8 comments) — https://github.com/zeroclaw-labs/zeroclaw/issues/8177
  - Expands Phase 3 of hardened CI pipeline (#7675). Heavy architectural discussion about multi-party quorum and offline signing.

- **#6165** — RFC: Prefer a lighter ZeroClaw core through external integrations (5 comments) — https://github.com/zeroclaw-labs/zeroclaw/issues/6165
  - Long-running discussion (since April) about removing dedicated integrations code in favor of skill-based external integrations. Accepted but rollout unclear.

- **#8238** — Feature: Add independent delegate mode for specialist handoffs (4 comments) — https://github.com/zeroclaw-labs/zeroclaw/issues/8238
  - Follow-up to the S0 delegate bypass bug (#8279). Users want explicit independent delegation with separate policies.

- **#5903** — Bug: MCP stdio child processes accumulate on daemon with heartbeat (4 comments) — https://github.com/zeroclaw-labs/zeroclaw/issues/5903
  - Long-standing orphan process leak (since April). Still open and accepted, no fix PR in active review.

**Top Issue by Reactions:**
- **#8132** — RFC: Replace React/Vite web UI build with Rust→Wasm framework (1 👍) — https://github.com/zeroclaw-labs/zeroclaw/issues/8132
- **#8303** — RFC: Goal mode for bounded autonomous session work (1 👍) — https://github.com/zeroclaw-labs/zeroclaw/issues/8303

**Takeaway:** The community is actively shaping ZeroClaw's security posture (SLSA, signing) and runtime architecture (Wasm-first, lighter core, goal mode). The governance RFC (#6808) has the deepest engagement, suggesting maintainer workflow pain is a top concern.

---

## Bugs & Stability

**Critical (S0 — Data loss / Security risk):**
- **#8279** — [CLOSED] delegate bypasses parent's tool allowlist — sub-agent can invoke tools the parent policy excludes (S0) — https://github.com/zeroclaw-labs/zeroclaw/issues/8279
  - High-impact security bypass. Closed with fix.

**High (P1 — Workflow blocked):**
- **#8154** — [CLOSED] Kimi Code provider targets dead endpoint (404) — https://github.com/zeroclaw-labs/zeroclaw/issues/8154
  - Provider regression. Fixed with URL correction.
- **#8312** — [OPEN] fill-translations leak-repair leaves stale translations-map entries that re-ship leaked text via write_po (S2, P1) — https://github.com/zeroclaw-labs/zeroclaw/issues/8312
  - New narrow data-loss path. Distinct from #8039. No linked fix PR yet.

**Medium (P2 — Degraded behavior):**
- **#5903** — [OPEN] MCP stdio child processes accumulate on daemon (orphan leak per heartbeat tick) — https://github.com/zeroclaw-labs/zeroclaw/issues/5903
  - Unresolved since April. 48+ orphan processes per day at default interval.
- **#5514** — [OPEN] Telegram gateway appends each subsequent image per request when sending multiple images — https://github.com/zeroclaw-labs/zeroclaw/issues/5514
  - No fix PR linked. Affects multi-image workflows.
- **#7737** — [OPEN] Approval attribution depends on channel-global side channel — concurrent approvals can overwrite state — https://github.com/zeroclaw-labs/zeroclaw/issues/7737
- **#8327** — [NEW] Native tool calling: `[IMAGE:data:...]` markers sent as plain text, inflating token count — https://github.com/zeroclaw-labs/zeroclaw/issues/8327
  - New today. Significant token waste with image tools.

**Low (S2/S3 — Minor):**
- **#8236** — [CLOSED] voice_wake.rs missing `subject` field breaks `--all-features` build — Fixed.
- **#7087** — [CLOSED] `zeroclaw models set` routes to doctor instead of saving config — Fixed.
- **#8334** — [NEW] `skills install`/`list`/`remove` target `data_dir` which no multi-agent runtime loads — https://github.com/zeroclaw-labs/zeroclaw/issues/8334
  - Core UX flow ("pull a skill and use it") broken on multi-agent installs. Fix PR #8335 open.

**Stability Fix PRs In Review:**
- **#8329** — Fix runtime forwarding of narration emitted after native tool call — https://github.com/zeroclaw-labs/zeroclaw/pull/8329
- **#8323** — Stabilize response-cache timestamp tests — https://github.com/zeroclaw-labs/zeroclaw/pull/8323
- **#8242** — Make control-plane PID liveness tests deterministic — https://github.com/zeroclaw-labs/zeroclaw/pull/8242
- **#8115** — Fail fast when gateway address is already in use — https://github.com/zeroclaw-labs/zeroclaw/pull/8115
- **#8317** — Cool down rate-limited provider fallback entries — https://github.com/zeroclaw-labs/zeroclaw/pull/8317

---

## Feature Request Clusters

**1. Delegate/Specialist Handoff Improvements**
- **#8238** — Independent delegate mode for specialist handoffs (new, 4 comments) — https://github.com/zeroclaw-labs/zeroclaw/issues/8238
- **#7743** — Support explicit target-profile authority for delegate handoffs (accepted) — https://github.com/zeroclaw-labs/zeroclaw/issues/7743
- **#8309** — SkillForge (#144) is orphaned — wire up with safe defaults or remove — https://github.com/zeroclaw-labs/zeroclaw/issues/8309
  - Cluster suggests users want richer delegation models and existing infrastructure is incomplete.

**2. Wasm-first / Plugin Architecture**
- **#8135** — RFC: Wasm-first plugin runtime — default-on, capability enforcement, signed distribution — https://github.com/zeroclaw-labs/zeroclaw/issues/8135
- **#7497** — RFC: OCI registries as plugin storage and discovery — https://github.com/zeroclaw-labs/zeroclaw/issues/7497
- **#8187** — RFC: Capability-gated WASI hardware host functions for plugins (accepted) — https://github.com/zeroclaw-labs/zeroclaw/issues/8187
- **#8132** — RFC: Replace React/Vite with Rust→Wasm framework — https://github.com/zeroclaw-labs/zeroclaw/issues/8132
  - Major architectural shift underway. Multiple RFCs in flight with maintainer attention.

**3. Goal Mode / Autonomous Session Work**
- **#8303** — RFC: Goal mode for bounded autonomous session work (accepted, 1 👍) — https://github.com/zeroclaw-labs/zeroclaw/issues/8303
  - Users want a first-class durable mode for pursuing objectives until completion, pause, or budget exhaustion.

**4. Provider/Model Improvements**
- **#8138** — Support OpenRouter model fallbacks array in provider config (needs maintainer review) — https://github.com/zeroclaw-labs/zeroclaw/issues/8138
  - Users want automatic failover across models.

**5. "Everything is a Plugin" Vision**
- **#6489** — Feature: "Everything is a plugin" — phased path to unified plugin catalog (accepted) — https://github.com/zeroclaw-labs/zeroclaw/issues/6489
  - Long-term architectural direction to collapse integrations and plugins into one system.

---

## User Feedback Summary

**Pain Points (user-reported issues):**
- **Skill management flow is broken for multi-agent installs** — `skills install`/`list`/`remove` writes to a directory no runtime loads (https://github.com/zeroclaw-labs/zeroclaw/issues/8334). Fix PR #8335 open.
- **Skill audit false positives** — Remote markdown link block flagged legitimate skills (https://github.com/zeroclaw-labs/zeroclaw/issues/6714). Now closed/fixed.
- **MCP orphan process leak** persists since April with no fix PR (https://github.com/zeroclaw-labs/zeroclaw/issues/5903). Affects daemon stability.
- **Telegram multi-image handling** sends separate messages per image instead of consolidating media groups (https://github.com/zeroclaw-labs/zeroclaw/issues/5514, tracker #7873 closed).
- **ACP sessions are toolless** — agents could converse but never loaded MCP servers (https://github.com/zeroclaw-labs/zeroclaw/pull/8237 addresses this).
- **`zeroclaw models set` redirected to doctor** instead of saving config (https://github.com/zeroclaw-labs/zeroclaw/issues/7087, now fixed).
- **Image tool calls inflate token count** — `[IMAGE:data:...]` markers sent as plain text, causing base64 token waste (https://github.com/zeroclaw-labs/zeroclaw/issues/8327, filed today).

**Positive Signals:**
- Users are submitting well-structured RFCs with implementation plans (#8177, #8135, #8303).
- High engagement on governance and automation RFCs (#6808) suggests maintainers are responsive to community process feedback.

---

## Backlog Watch

**Long-unanswered Items Needing Maintainer Attention:**
- **#5903** — MCP child process leak (since April 19, 2026). Accepted and no-stale, but no fix PR. ~48 orphans/day. — https://github.com/zeroclaw-labs/zeroclaw/issues/5903
- **#6165** — Lighter core through external integrations (since April 27, 2026). Accepted RFC but rollout unclear. — https://github.com/zeroclaw-labs/zeroclaw/issues/6165
- **#6489** — "Everything is a plugin" vision (since May 6, 2026). Accepted but no implementation milestones. — https://github.com/zeroclaw-labs/zeroclaw/issues/6489
- **#8309** — Skill

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-26

## 1. Today's Activity Brief

Over the past 24 hours, 3 issues were updated (1 remains open) and 19 pull requests saw activity, of which 6 were merged or closed. No new releases were published. Fixes landed for duplicate message delivery in sub-agents, evolution token waste, and Matrix identity parsing; a flurry of dependency bumps (Copilot SDK, Telego, LINE bot SDK, and others) were also merged. The single open issue with high priority asks to replace unmaintained `libolm` with `vodozemac`.

## 2. Releases

None. No new releases were tagged in the period.

## 3. Project Progress

Merged/closed PRs today (excluding pure dependency bumps) advanced stability and correctness:

- **#3092** – `fix(skills_install)`: Added `ok` checks for type assertions on `version` and `force` arguments to prevent silent zero‑value fallbacks.
  [PR #3092](https://github.com/sipeed/picoclaw/pull/3092)

- **#3045** – `fix(identity)`: Fixed `allow_from` fallthrough for Matrix user IDs containing a colon (e.g., `@alice:example.com`).
  [PR #3045](https://github.com/sipeed/picoclaw/pull/3045)

- **#3169** – `fix(evolution)`: Skipped cold‑path scheduling for heartbeat turns, preventing token waste in draft‑mode evolution.
  [PR #3169](https://github.com/sipeed/picoclaw/pull/3169)

- **#3166** – `fix(openai_compat)`: Replaced a stray `log.Printf` call with the package’s structured logger, fixing a build failure.
  [PR #3166](https://github.com/sipeed/picoclaw/pull/3166)

- **#3168** – `fix(model)`: Properly return body read errors when fetching model lists from a non‑200 response, avoiding misleading HTTP error messages.
  [PR #3168](https://github.com/sipeed/picoclaw/pull/3168)

Dependency bumps merged:
- `github.com/github/copilot-sdk/go` → 1.0.2 (#3145).
- Several other bump PRs remain open (see #3177, #3176, #3174, #3175, #3173).

## 4. Community Hot Topics

Two closed issues attracted the most discussion:

- **#1757** (10 comments, closed) – User on RPi Zero W reported a channel error when asking the agent to perform a task “every hour of the day”. The error occurred with Telegram channel and cron‑based scheduling. The fix is already in place.
  [Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)

- **#3012** (5 comments, closed) – User reported continuous token consumption every minute when Evolution mode is enabled (MiniMax provider, FreeBSD). The issue was resolved.
  [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)

- **#3088** (3 comments, 2 👍, open) – Feature request to replace `libolm` with `vodozemac` due to maintainability and security concerns. This remains the most‑voted open item.
  [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| High | Channel error in cron‑based task repetition (#1757) | Closed | Included in earlier fixes |
| Medium | Continuous token consumption with Evolution (#3012) | Closed | Provided |
| Low | Build failure in `openai_compat` (`undefined: log`) (#3166) | Fixed | #3166 |
| Low | Silent type‑assertion failures in `skills_install` (#3092) | Fixed | #3092 |
| Low | Potential panic from `sync.Map` type assertions in LINE channel | Open | #3171 |
| Low | Base64 encoder resource leak on `io.Copy` error path | Open | #3170 |

No critical regressions were reported today. Several small robustness PRs (#3172, #3171, #3170) are still open.

## 6. Feature Request Clusters

- **End‑to‑end encryption migration**: Issue #3088 requests replacing the unmaintained `libolm` with `vodozemac`, the official replacement. The author also suggests making `libolm` optional at compile time. No PR has been submitted yet.

- **New communication channels**:
  - PR #3063 (open) adds a **DeltaChat gateway** (new feature, non‑breaking).
  - PR #3118 (open) adds a **remote Pico WebSocket mode** for the `picoclaw agent` command.

- **Inline data URL handling**: PR #3115 (open) fixes a session‑history corruption bug where base64 encoded images in plain text tool output were mistakenly treated as media attachments.

## 7. User Feedback Summary

- **Pain point**: Cron‑based task scheduling on constrained hardware (RPi Zero W) produced channel errors; the fix appears to have resolved this for the reporter.
- **Pain point**: Evolution mode in draft configuration wasted tokens on every heartbeat; the fix in #3169 addresses this.
- **Pain point**: Matrix user IDs with colons (standard format `@user:server`) were rejected by the `allow_from` filter; fixed in #3045.
- **Security concern**: Community member explicitly flagged `libolm` as unmaintained and insecure, requesting migration to `vodozemac` (issue #3088, 2 👍).
- **Satisfaction**: Several bugs were fixed quickly after being reported, indicating responsive maintenance.

## 8. Backlog Watch

- **Issue #3088** – [open, help wanted, priority: high, stale]
  Request to switch from `libolm` to `vodozemac`. Created 2026-06-09, last updated 2026-06-25. No maintainer response or assignee yet. This is the most important open issue needing attention.
  [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)

- No other open issues or PRs show signs of prolonged neglect; all open items have been updated within the last week.

</details>