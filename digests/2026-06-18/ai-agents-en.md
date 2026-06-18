# OpenClaw Ecosystem Digest 2026-06-18

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-18 00:39 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-18

## 1. Today’s Activity Brief

The project saw heavy activity in the last 24 hours, with 500 issues and 500 pull requests updated. Of those, 11 issues were closed and 60 PRs were merged or closed. No new releases were published. Key topics included a critical P0 migration tracking issue, a long‑running request for Linux/Windows clawdbot apps, and multiple regression bugs affecting session state and message delivery.

## 2. Releases

No new releases today. The latest available version remains as previously distributed.

## 3. Project Progress

**Merged/closed PRs (60 total):** The data does not enumerate individual merged PRs, but notable open PRs continue to advance:
- [#93853](https://github.com/openclaw/openclaw/pull/93853) – Fixes memory embedding routing for providers with custom base URLs.
- [#93823](https://github.com/openclaw/openclaw/pull/93823) – Prevents WhatsApp chunk‑loss when first media fails.
- [#91988](https://github.com/openclaw/openclaw/pull/91988) – Preserves `BOOTSTRAP.md` in preseeded workspaces.
- [#88992](https://github.com/openclaw/openclaw/pull/88992) – Recovers stranded replies in `message_tool_only` mode.
- [#85249](https://github.com/openclaw/openclaw/pull/85249) – Guards against `undefined sourceDelivery` in the isolated cron executor.

Many of these PRs carry “ready for maintainer look” status, suggesting they are close to merging.

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) reflect broad community interest in platform expansion, core migration, and security:

- **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
  109 comments, 79 👍. A long‑standing request (since Jan 1) for desktop apps on Linux and Windows, matching the existing macOS/iOS/Android feature set. No recent maintainer response visible.

- **[#88838 – Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838)**
  30 comments, P0 label. A maintainer‑authored issue describing a branch‑by‑abstraction approach to avoid a risky monolithic migration. The highest‑severity open issue.

- **[#9443 – Request: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443)**
  25 comments, filed on behalf of a user by their AI assistant. Asks for pre‑compiled Android app downloads rather than requiring users to build from source.

- **[#32473 – Control UI requires device identity (secure context) regression](https://github.com/openclaw/openclaw/issues/32473)**
  17 comments, 5 👍. Users on VPS/Docker setups report that the control UI now requires HTTPS or localhost, causing failures after an update.

- **[#22676 – Signal daemon stop() race condition on SIGUSR1 restart](https://github.com/openclaw/openclaw/issues/22676)**
  17 comments, P1. A race condition leading to orphaned processes and send failures during gateway restarts.

- **[#10659 – Feature Request: Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)**
  13 comments, 4 👍. Proposes a system to let agents use API keys without being able to see them, preventing accidental leaks.

- **[#39604 – Add `tools.web.fetch.allowPrivateNetwork`](https://github.com/openclaw/openclaw/issues/39604)**
  13 comments, 9 👍. A popular request to allow agents to reach private network addresses via `web_fetch` when explicitly enabled.

Several other issues with 10–13 comments (e.g., #7707, #6731, #22358, #13583, #40001, #39476) show strong community interest in security, tool improvements, and multi‑agent features.

## 5. Bugs & Stability

The following bugs and regressions were reported or updated today, ranked by reported severity:

| Issue | Severity | Summary |
|-------|----------|---------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | **P0** | Core session/transcript SQLite migration (not a bug per se, but a tracked high‑risk migration path). |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | **P1** | Race condition on SIGUSR1 restart causes orphaned processes and send failures. Linked PRs open. |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | **P1** | Bootstrap files in `agentDir` are silently ignored; only workspace files are injected. |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | **P1** | Coding agent never completes anything – regression from 2026.4.2. Marked stale with linked PR. |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **P1** | “Cannot convert undefined or null to object” with `google-vertex/gemini-3.1-pro-preview` on 2026.3.2. |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | **P1** | Write tool lacks append mode; isolated cron sessions overwrite shared files. |
| [#75593](https://github.com/openclaw/openclaw/issues/75593) | **P1** | `/subagents list` still empty after spawn on v2026.4.29, despite previous fix. |
| [#85103](https://github.com/openclaw/openclaw/issues/85103) | **P1** | Model fallback chain not triggered on provider‑wide quota exhaustion. |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | **P1** | AM embedded run aborts `memory_search` tool calls, classifies as timeout despite model completion. |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | **P2** | Control UI requires device identity (regression) – affects non‑HTTPS/not‑localhost setups. |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | **P2** | `OPENCLAW_HOME` set to `~/.openclaw` causes nested `.openclaw/.openclaw` directory. Regression. |
| [#50248](https://github.com/openclaw/openclaw/issues/50248) | **P2** | `sessions cleanup --fix-missing` falsely prunes fresh cron sessions with valid transcripts. |
| [#76935](https://github.com/openclaw/openclaw/issues/76935) | **P2** | QQ Bot sends verbose/repetitive replies after upgrade to 2026.5.2. |

Several of these bugs have linked PRs (e.g., #22676, #62505, #40001, #75593, #32473) indicating active work.

## 6. Feature Request Clusters

Multiple user‑requested features cluster around these themes:

- **Security & Access Control**
  – [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets (prevent agent from reading raw API keys)
  – [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory trust tagging by source
  – [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem sandboxing via `tools.fileAccess`
  – [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist support for exec‑approvals
  – [#39979](https://github.com/openclaw/openclaw/issues/39979) Path‑scoped RWX permissions for exec/file tools
  – [#39604](https://github.com/openclaw/openclaw/issues/39604) Allow private network access for `web_fetch`
  – [#13583](https://github.com/openclaw/openclaw/issues/13583) Pre‑response enforcement hooks (hard gates)

- **Platform & Distribution**
  – [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows clawdbot apps
  – [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases
  – [#13597](https://github.com/openclaw/openclaw/issues/13597) AWS deployment guide

- **Agent & Multi‑Agent Enhancements**
  – [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap file loading for progressive context
  – [#35203](https://github.com/openclaw/openclaw/issues/35203) Multi‑agent collaboration: capability profiling, shared blackboard, layered memory, token governance
  – [#38626](https://github.com/openclaw/openclaw/issues/38626) Subagent lifecycle observability and async supervision
  – [#22358](https://github.com/openclaw/openclaw/issues/22358) Post‑subagent completion extension hook

- **Tool & Message Improvements**
  – [#14785](https://github.com/openclaw/openclaw/issues/14785) Reduce tool schema token overhead
  – [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit support
  – [#20786](https://github.com/openclaw/openclaw/issues/20786) Telegram Business Bot support
  – [#33413](https://github.com/openclaw/openclaw/issues/33413) Slack: show tool‑level progress in thread status
  – [#33102](https://github.com/openclaw/openclaw/issues/33102) TUI: add config for `--deliver` flag default
  – [#39406](https://github.com/openclaw/openclaw/issues/39406) Config option to suppress transient tool error warnings

- **Data Preservation & Recovery**
  – [#13616](https://github.com/openclaw/openclaw/issues/13616) Backup/restore utility for config, cron, session history
  – [#13700](https://github.com/openclaw/openclaw/issues/13700) Session snapshots (save/load checkpoints)

## 7. User Feedback Summary

Users expressed several clear pain points:

- **Regression frustration:** Multiple users (e.g., #32473, #62505, #38327, #45765) report that features that worked in earlier versions broke after updates. The coding agent regression in #62505 is particularly concerning – a user says it “just doesnt do anything” after working for weeks.
- **Missing platform support:** The top‑voted issue #75 (79 👍) for Linux/Windows apps has been open since January without a maintainer response in the data shown.
- **Configuration inconsistencies:** Users report that `agentDir` bootstrap files are ignored (#29387), `compaction.model` is ignored (#57901), and `cacheRetention` is ignored for LiteLLM‑proxied models (#37966).
- **Onboarding gaps:** #16670 notes that the setup wizard omits memory/embedding configuration, a critical feature.
- **Documentation needs:** #13597 requests structured AWS deployment guides.
- **Security concerns:** Several users request better sandboxing, secret masking, and permission models (see cluster above).

Overall sentiment is mixed: users value OpenClaw’s capabilities but are increasingly vocal about regressions and missing features that impact production use.

## 8. Backlog Watch

The following issues and PRs have been open for extended periods without evident maintainer action and are important to the community:

- **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** – Open since Jan 1, 109 comments, 79 👍. No maintainer response in the data. Highest community demand.
- **[#9443 – Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443)** – Open since Feb 5, 25 comments. No maintainer response.
- **[#10659 – Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)** – Open since Feb 6, 13 comments. Marked `needs‑maintainer‑review` and `needs‑product‑decision`.
- **[#7722 – Filesystem Sandboxing Config](https://github.com/openclaw/openclaw/issues/7722)** – Open since Feb 3, 7 comments. Marked `needs‑security‑review`.
- **[#6615 – Denylist for exec‑approvals](https://github.com/openclaw/openclaw/issues/6615)** – Open since Feb 1, 7 comments. 7 👍.
- **[#88838 – SQLite migration tracking (P0)](https://github.com/openclaw/openclaw/issues/88838)** – Open since June 1, but is a maintainer‑authored planning issue; likely being actively worked despite being listed here.

Among PRs, several marked “ready for maintainer look” (e.g., [#88992](https://github.com/openclaw/openclaw/pull/88992), [#91089](https://github.com/openclaw/openclaw/pull/91089), [#85249](https://github.com/openclaw/openclaw/pull/85249), [#68389](https://github.com/openclaw/openclaw/pull/68389)) have been awaiting review for days to weeks. The oldest PR in the top set, [#16544](https://github

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-18

## 1. Daily Cross-Project Overview

OpenClaw dominated activity volume with 500 issues and 500 PRs updated, though most were not closed. NanoBot landed 18 merged PRs today, the highest closure rate, focusing on workspace security, provider compatibility, and channel fixes. ZeroClaw processed 10 closed/merged PRs around config management, runtime threading, and CLI experience. PicoClaw shipped a silent nightly build while fixing two medium-severity bugs (OneBot SSRF, Gemini 3.5 Flash tool‑call). No project published a stable release today.

---

## 2. Activity Comparison

| Project | Issues (updated) | PRs (updated) | Releases | Activity Note |
|---------|------------------|---------------|----------|---------------|
| OpenClaw | 500 (11 closed) | 500 (60 merged/closed) | None | Heavy triage activity; 49 open PRs remain; P0 migration trackers active |
| NanoBot | 10 (3 closed) | 30 (18 merged/closed) | None | High merge efficiency; 12 open PRs; strong bug-fix cadence |
| ZeroClaw | 50 (1 closed) | 50 (10 merged/closed) | None | 40 open PRs; concentrated around v0.8.x/v0.9.0 milestone tracks |
| PicoClaw | 4 (2 closed) | 10 (6 merged/closed) | Nightly build | Smallest volume; maintenance‑focused; silent release |

---

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw's issue and PR update count (500 each) is an order of magnitude larger than ZeroClaw (50) and roughly 50x above NanoBot (30 PRs). This reflects OpenClaw's role as the core reference project with a larger contributor base and broader surface area.

**Technical focus:** While peer projects are shipping concrete bug fixes and feature PRs (e.g., NanoBot's Keenable search, ZeroClaw's CanvasStore threading fix), OpenClaw's open PR activity centers on regression patches, migration planning, and long‑standing community requests. No new feature PRs were merged in the tracked data.

**Community surface area:** OpenClaw shows the widest range of user pain points—regression frustration, missing platform support (Linux/Windows apps), onboarding gaps, and security requests. Peer projects show more contained, actionable issues (e.g., NanoBot's installer syntax error, PicoClaw's model compatibility).

---

## 4. Shared Technical Focus Areas

The following requirements appear across multiple projects in today's data:

- **Security & access control** — OpenClaw (#10659 masked secrets, #39604 private network access, #7722 filesystem sandboxing), ZeroClaw (#7902 HTTP DNS pinning against SSRF), PicoClaw (#3070 OneBot inbound media SSRF). NanoBot's merged PRs (#4202, #4053) also tightened filesystem write policies.

- **Platform & distribution expansion** — OpenClaw (#75 Linux/Windows clawdbot apps, #9443 prebuilt Android APK), NanoBot (#936 multi‑tenant gateway for multiple agents), ZeroClaw (#2079 GitHub native channel), PicoClaw (#3063 DeltaChat gateway, #3093 SimpleX/Tox). All projects face pressure to support more deployment environments.

- **Agent & multi‑agent orchestration** — OpenClaw (#35203 multi‑agent collaboration, #38626 subagent lifecycle), NanoBot (#936 multi‑tenant gateway), ZeroClaw (#6909 desktop computer‑use, #6954 cron pipeline routing). Multi‑agent patterns and agent‑environment interaction are active across three projects.

- **Tool & message improvement** — OpenClaw (#14785 reduce tool schema overhead, #12602 Slack Block Kit), NanoBot (#4354 WhatsApp read receipts, #4381 Feishu streaming), ZeroClaw (#2079 GitHub channel, #6055 Slack thread hydration), PicoClaw (#3139 Sogou search fix). Channel‑specific delivery and platform compatibility are common.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Target user** | Full‑stack developers; production deployments | Channel‑focused deployers; multi‑provider users | Modular orchestration; enterprise‑adjacent | Embedded/edge; minimal footprint |
| **Feature emphasis** | Migration planning; session/transcript persistence; regression management | Provider compatibility (Mistral, Keenable); workspace security; UI polish | WASM plugin hooks; cron/desktop interaction; security hardening | Lightweight nightly builds; protocol compatibility (OneBot, Gemini) |
| **Technical architecture** | Core reference; heavy SQLite migration in progress | Provider‑agnostic; strong channel abstraction | WASM plugin runtime; ACP event surface | Minimal dependencies; OneBot‑first messaging |
| **Release cadence** | No stable today; appears to prioritize PR merge velocity | No stable today; high fix‑landing rate | No stable today; milestone‑tracked (v0.8.1, v0.9.0) | Nightly build available; likely lower stability threshold |

---

## 6. Community Activity Notes

- **High activity tier:** OpenClaw — highest raw volume, widest issue surface, active regression triage.
- **Medium activity tier:** ZeroClaw — concentrated milestone work with clear RFC tracks; 40 open PRs suggest a backlog that maintainers are working through.
- **Low activity tier:** NanoBot — lower volume but highest closure rate; maintainers appear responsive and focused.
- **Very low activity tier:** PicoClaw — smallest community footprint; activity is maintenance‑focused with one silent nightly build.

No project released a stable version today. NanoBot and PicoClaw show the strongest signal of maintainer responsiveness to community bug reports.

---

## 7. Evidence-Backed Observations

**1. Security hardening is a cross-project theme.**
Today's data contains security‑relevant items in all four projects: OpenClaw (#10659 masked secrets, #39604 private network restriction), NanoBot (#4202, #4053 filesystem write policies), ZeroClaw (#7902 DNS pinning, #7853 Windows self‑update hardening, #7826 credential redaction corruption), PicoClaw (#3070 OneBot SSRF fix). This is not a single anecdote but a consistent pattern across the ecosystem.

**2. Multi-platform expansion pressure is real but unevenly addressed.**
Three projects have open feature requests for additional platforms or channels (OpenClaw Linux/Windows apps, Android APK; NanoBot multi‑tenant gateway; ZeroClaw GitHub channel; PicoClaw DeltaChat/SimpleX). No project shipped a new platform in today's data. The requests vary in age (OpenClaw #75 since January), suggesting these are sustained demands rather than transient asks.

**3. Regression management is a growing pain point across projects.**
OpenClaw has multiple P1 regression bugs (#62505 coding agent, #38327 Gemini provider, #45765 directory nesting) with user frustration evident. ZeroClaw's CanvasStore regression (#7563) was fixed today (#7678). NanoBot's installer failure (#4360) was closed but without a visible code fix. PicoClaw's Gemini 3.5 Flash compatibility issue was fixed promptly. The contrast in response speed (days vs. weeks) is notable.

**4. Long‑running community requests without maintainer response are common.**
OpenClaw #75 (Linux/Windows apps, 109 comments, since January) has no visible maintainer response. ZeroClaw #2079 (GitHub native channel, since February) is accepted but no PR. NanoBot #936 (multi‑tenant gateway, since February) has no maintainer reply. PicoClaw #3088 (vodozemac migration, high priority) has no maintainer engagement. This pattern suggests either capacity constraints or deliberate prioritization against feature work.

**5. Maintainer responsiveness varies significantly by project.**
NanoBot closed 18 PRs today and actively responded to community issues. PicoClaw fixed two reported bugs within the same day they were discussed. ZeroClaw closed 10 PRs with maintainer attention on structural issues. OpenClaw's 60 merged/closed PRs suggest maintainer work, but the gap between what users ask for (#75, #9443) and what gets merged remains large. This is not a value judgment but an observation of different project rhythms.

No clear cross-project signal for an emerging architectural standard or ecosystem inflection point was found in today's data.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-18

## Today’s Activity Brief

In the last 24 hours, 10 issues were updated (7 open, 3 closed) and 30 pull requests were updated (12 open, 18 merged/closed). No new releases were published. The project saw a strong burst of bug-fix landings, especially around workspace security, provider compatibility, and channel reliability, alongside several feature PRs adding new search providers and communication‑channel capabilities.

## Releases

None.

## Project Progress

**18 pull requests were merged or closed** today. Notable merged changes include:

- **Workspace & tool security**: [#4202](https://github.com/HKUDS/nanobot/pull/4202) and [#4053](https://github.com/HKUDS/nanobot/pull/4053) clarified filesystem write policies, keeping extra allowed directories read-only and preventing write tools from inheriting media‑dir access under workspace restriction. [#4380](https://github.com/HKUDS/nanobot/pull/4380) fixed `git` commands in workspace subdirectories by adjusting the shell safety guard.

- **Provider improvements**: [#4350](https://github.com/HKUDS/nanobot/pull/4350) added [Keenable](https://keenable.ai) as a web search provider. [#4351](https://github.com/HKUDS/nanobot/pull/4351) gave Mistral models dedicated handling for `reasoning_effort`, `max_tokens`, and tool‑call `stop` constraints. [#4367](https://github.com/HKUDS/nanobot/pull/4367) disabled proxy for local model servers automatically. [#4356](https://github.com/HKUDS/nanobot/pull/4356) sanitised tool IDs for the Anthropic API to prevent 400 errors.

- **Channel and UX fixes**: [#4354](https://github.com/HKUDS/nanobot/pull/4354) added WhatsApp read receipts (blue ticks). [#4381](https://github.com/HKUDS/nanobot/pull/4381) recovered failed Feishu streaming updates by reopening `streaming_mode`. [#4283](https://github.com/HKUDS/nanobot/pull/4283) corrected activity‑duration display in the WebUI. [#4349](https://github.com/HKUDS/nanobot/pull/4349) fixed replay‑window history trimming so LLM replays start at the correct user turn. [#4347](https://github.com/HKUDS/nanobot/pull/4347) improved model‑preset switching in MyTool.

- **Logging and noise**: [#4385](https://github.com/HKUDS/nanobot/pull/4385) now logs the primary model error before fallback. [#4386](https://github.com/HKUDS/nanobot/pull/4386) silenced unroutable CLI progress noise.

Several other bug‑fix and test PRs were also merged (e.g., [#4393](https://github.com/HKUDS/nanobot/pull/4393) – git test coverage, [#4385](https://github.com/HKUDS/nanobot/pull/4385) – error logging).

## Community Hot Topics

The most active issue today was **#4360** ([“end of file unexpected” during installer](https://github.com/HKUDS/nanobot/issues/4360)), which received **9 comments** and was closed after discussion. The bug affected fresh Debian containers running `pip`, and the community contributed to identifying the syntax error in the installer script.

Other active open issues (with 1–2 comments each) include:

- [#4389](https://github.com/HKUDS/nanobot/issues/4389) – Request for per‑model `contextWindowTokens` to handle different fallback‑model limits.
- [#4388](https://github.com/HKUDS/nanobot/issues/4388) – iOS Safari page zoom on input focus (WebUI).
- [#4376](https://github.com/HKUDS/nanobot/issues/4376) – Suggestion for a more user‑friendly onboarding wizard.
- [#4390](https://github.com/HKUDS/nanobot/issues/4390) – Request to hide UI settings for multi‑instance setups.

No PRs had comment counts reported, but several (e.g., [#4391](https://github.com/HKUDS/nanobot/pull/4391) Feishu QR login, [#4392](https://github.com/HKUDS/nanobot/pull/4392) tool microcompaction configurability) received attention from maintainers.

## Bugs & Stability

**Severity: Medium**

- **Installer failure**: [#4360](https://github.com/HKUDS/nanobot/issues/4360) – syntax error in pip script for Debian containers. **Closed** without a linked fix PR; discussion suggests it may have been a container‑environment issue rather than a code bug.

- **iOS Safari WebUI zoom**: [#4388](https://github.com/HKUDS/nanobot/issues/4388) – page auto‑zooms when tapping the input box, causing layout distortion. No fix PR yet; still open.

- **Fallback context window mismatch**: [#4389](https://github.com/HKUDS/nanobot/issues/4389) – when a fallback model has a smaller context window than the primary, NanoBot does not trim prompts accordingly, risking crashes on token overflow. No fix PR yet; filed as a feature request.

- **Session crash after merge**: [#4322](https://github.com/HKUDS/nanobot/issues/4322) – `NameError: session_key` after merging `fix/prompt-caching`. **Closed** likely resolved by code changes.

- **Local model proxy**: [#4366](https://github.com/HKUDS/nanobot/issues/4366) – local model servers fail when a system proxy is set. **Fixed** by [#4367](https://github.com/HKUDS/nanobot/pull/4367), merged today.

Several other bugs were closed with merged fix PRs (git subdirectory work, Feishu streaming, model error logging, CLI progress noise).

## Feature Request Clusters

The following feature requests were updated or opened in the last 24 hours:

| Theme | Issue / PR | Description |
|-------|------------|-------------|
| Multi‑agent orchestration | [#936](https://github.com/HKUDS/nanobot/issues/936) | Multi‑tenant gateway to run many agents in a single container (4 months old) |
| Configuration flexibility | [#4389](https://github.com/HKUDS/nanobot/issues/4389) | Per‑model `contextWindowTokens` for fallback behaviour |
| Onboarding UX | [#4376](https://github.com/HKUDS/nanobot/issues/4376) | User‑friendly wizard for non‑technical users |
| Multi‑instance management | [#4390](https://github.com/HKUDS/nanobot/issues/4390) | Hide UI settings / show options per‑instance folder |
| Scheduling / automation | [#4378](https://github.com/HKUDS/nanobot/issues/4378) | Cron‑level model or preset switching |
| Debugging | [#3437](https://github.com/HKUDS/nanobot/issues/3437) | On‑demand heartbeat trigger for testing |
| Channel features | [#4391](https://github.com/HKUDS/nanobot/pull/4391) | Feishu QR‑code bot creation (PR, open) |
| Search provider | [#4350](https://github.com/HKUDS/nanobot/pull/4350) | Keenable search integration (merged) |
| Provider compatibility | [#4351](https://github.com/HKUDS/nanobot/pull/4351) | Better Mistral support (merged) |

Most requests are still open; several merged PRs add concrete new functionality.

## User Feedback Summary

User pain points surfacing today:

- **Installer reliability**: The `end of file unexpected` failure in fresh Debian containers frustrates first‑time users.
- **Mobile UX**: iOS Safari zoom makes the WebUI nearly unusable for input on iPhones.
- **Complex configuration**: Several users (e.g., [#4376](https://github.com/HKUDS/nanobot/issues/4376), [#4390](https://github.com/HKUDS/nanobot/issues/4390)) find the wizard and multi‑instance setup too technical, requesting simpler defaults or hidden options.
- **Proxy handling**: Users running local models behind a proxy (e.g., Ollama) appreciate the fix in [#4367](https://github.com/HKUDS/nanobot/pull/4367) but also wanted the ability to configure proxy behaviour per‑endpoint.
- **Fallback robustness**: The absence of per‑model context‑window limits could cause silent failures for users relying on fallback models with smaller contexts.

Overall, users are actively reporting bugs and suggesting improvements; maintainers are responding quickly with fixes.

## Backlog Watch

Two long‑standing open issues appear to lack recent maintainer engagement:

- **[#936](https://github.com/HKUDS/nanobot/issues/936)** – *Feature Request: Add Multi‑Tenant Gateway for Multiple Agents*
  Created 2026-02-21 (almost 4 months ago). Last updated 2026-06-17 with a single comment from the author. No maintainer response or linked PR. The request is substantial but clearly relevant to users running multiple agents.

- **[#3437](https://github.com/HKUDS/nanobot/issues/3437)** – *RFC: On‑demand heartbeat trigger for debugging*
  Created 2026-04-25. Last updated 2026-06-17, also with only one comment (author). No maintainer reply. The RFC proposes a debugging feature for `HEARTBEAT.md` iteration.

Both issues would benefit from a maintainer triage comment or assignment to indicate whether they are under consideration.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-18

## Today’s Activity Brief

The project saw 50 issues and 50 pull requests updated in the last 24 hours, with 49 open issues and 40 open PRs remaining after 1 issue and 10 PRs were closed or merged. No new releases were published. Closed PRs include a config‑rename cascade (#7840), ACP event‑surface fixes (#7684), and a critical CanvasStore threading fix (#7678). Activity concentrates around the v0.8.x/v0.9.0 milestone trackers, the RFC for WASM plugin lifecycle hooks (#7822), and a steady stream of bug‑fix and feature PRs targeting Windows self‑update, Discord slash‑commands, and security hardening.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Ten PRs were closed or merged today. Highlights:

- **#7840** (closed) – `feat(config): rename_with_cascade for aliased entries (#7468)` – Adds typed delete‑with‑cascade and alias rename support; opened as a draft for CI, part of an 8‑PR stacked series.
- **#7684** (closed) – `fix(acp): surface history‑pruner and turn‑cancel as visible events` – Nicer rendering of system events (history pruning, cancellation) in the ACP surface.
- **#7678** (closed) – `fix(runtime): thread shared CanvasStore into WS chat and ACP agent sessions` – Fixes a regression where `/canvas` stayed empty after WebSocket sessions; the canvas tool was writing to a private default store instead of the shared store.
- **#7856** (open, fix merged?) – `fix(cli): add confirmation feedback after secret prompt input` – Adds a non‑sensitive confirmation echo after masked password prompts, addressing user confusion.
- Several other open PRs carry important fixes (see Bugs & Stability section).

## Community Hot Topics

The most discussed issues today (by comment count) are:

- **#6909** – RFC: Computer‑use support for desktop screen interaction and input control (6 comments). Users request capturing screenshots and sending mouse/keyboard events; this is a high‑risk, accepted RFC.
- **#2079** – Feature: Restore GitHub as a native channel (6 comments). Demand for a first‑class GitHub channel so agents can observe and act on repo activity without custom glue.
- **#6067** – Feature: Make channel reply‑intent precheck configurable (5 comments). Users want a smaller/faster model + timeout for the precheck to avoid blocking the main agent turn.
- **#6954** – RFC: Route scheduled tasks through the orchestrator message pipeline (4 comments). Root cause for several cron bugs (context, NO_REPLY, delivery); accepted RFC.
- **#2128** – Bug: Cron and heartbeat delivery still send NO_REPLY sentinel text (4 comments). The `NO_REPLY` literal is sent to channels instead of being suppressed.
- **#6970** – Tracker: v0.8.1 integration/channel/provider/tool queue (3 comments). Operational tracker for the next minor release.

PRs with evident community engagement include the Mattermost WebSocket mode (#7098), the A2A agent discovery surface (#7763), and the Discord rich‑embeds PR (#7833), though comment counts are not shown in the data.

## Bugs & Stability

| Issue/PR | Type | Severity | Description | Status |
|----------|------|----------|-------------|--------|
| #7563 (closed) | regression | S1 – blocked | CanvasStore broken in WS/ACP sessions after #6986; `/canvas` stays empty. | Closed by #7678 today. |
| #6105 | bug | S2 | Cron jobs run without context of the job; agent has no reference to the message. | Open, status:blocked (waiting on RFC #6954). |
| #2128 | bug | S2 | `NO_REPLY` literal delivered to channels instead of being suppressed. | Open, accepted. |
| #7737 | bug | S2 | Approval attribution depends on a global side channel; concurrent approvals can overwrite state. | Open, accepted. |
| #6698 | bug | S2 | Fluent locale files lag English app‑string sources (e.g., `zh-CN` missing `tools.ftl`). | Open, in‑progress. |
| #7902 (PR) | bug+security | high | HTTP tool DNS pinning to prevent SSRF. | Open. |
| #7853 (PR) | bug+fix | high | Windows self‑update broken (process‑image lock prevents binary swap); also hardens the pipeline. | Open. |
| #7819 (PR) | bug | high | Missing‑skill suggestions based on all registered tools, not effective tool set. | Open. |
| #7732 (PR) | bug | high | `zeroclaw self‑test` websocket probe fails 401 because it lacks auth header. | Open. |
| #7801 (PR) | bug | high | Gateway bind‑conflict path suggests a restart command without probing for an available port. | Open. |
| #7826 (PR) | bug | high | Credential redaction runs on the tool‑execution data path, corrupting tool outputs fed back to the model. | Open. |
| #7901 (PR) | bug | high | Repeated shell approval loops not bounded; added turn‑local guard. | Open. |

Additionally, the cron context bug (#6105) is blocked on RFC #6954 which would route cron through the message pipeline.

## Feature Request Clusters

Several feature request themes are visible in today’s data:

- **Desktop computer‑use** (#6909, RFC, accepted) – High‑risk, high‑demand feature for screenshot capture and mouse/keyboard control.
- **GitHub as native channel** (#2079, accepted, open since Feb) – Repeated community request; no PR yet.
- **Cron improvements** – #6954 (RFC), #6510 (announce mode to send only final message), #7887 (date‑range conditional schedules).
- **WASM plugin expansion** – #7822 (RFC for lifecycle hook subscriptions), #7314 (tracker for v0.8.2 WASM program).
- **Slack thread hydration** (#6055) – Backfill thread history on first mention.
- **Windows shell configuration** (#7089) – RFC to evaluate PowerShell/Git Bash vs cmd.exe.
- **Agent evaluation harness** (#7065) – `zeroclaw eval` with replay and live modes.
- **Security and config hot‑reload** (#7897) – Apply security policy and channel config changes without full daemon reload.
- **Intra‑family provider fallback notices** (#7883) – Users want to know when fallback used a different model within the same provider.
- **Image generation provider** (#7875) – Add RunPod/ComfyUI with provider‑scoped config.
- **Log rotation** (#7878) – Size/date/retention rotation for zeroclaw‑log JSONL files.
- **Milestone trackers**: v0.8.1 (#6970), v0.8.2 skills (#7852), v0.8.3 MCP dashboard (#7320), v0.9.0 auth/security (#7432).

## User Feedback Summary

User feedback captured in today’s issues reveals concrete pain points:

- **“No desktop GUI interaction”** (#6909) – “ZeroClaw currently has no ability to interact with the desktop GUI.”
- **“GitHub integration is a mess of custom glue”** (#2079) – Users want a first‑class channel for repo events.
- **“Agent has no context of the cron job it ran”** (#6105) – Causing confusion and broken workflows.
- **“NO_REPLY literal sent to channel”** (#2128) – Causes noisy notifications.
- **“Skill audit false positives on remote markdown links”** (#6714) – Legitimate skills fail audit because of documentation URLs ending in `.md`.
- **“Windows self‑update fails”** (#7853) – “Every `zeroclaw update` failed at the swap phase.”
- **“No visual feedback after secret prompt input”** (#7856) – Hidden password input is confusing.
- **“Can’t tell which configured channels are not compiled into the binary”** (#7848) – Users need visibility.
- **“Non‑English UI strings are missing”** (#6698) – Chinese (`zh-CN`) locale incomplete.

## Backlog Watch

Several important issues remain open with no recent maintainer action or progress:

- **#2079** – GitHub native channel (open since Feb 27, 4 months). Despite 6 comments and acceptance, no linked PR.
- **#2128** – Cron NO_REPLY bug (open since Feb 27). Accepted but not yet fixed.
- **#6067** – Channel preconfig precheck (open since Apr 24). Accepted, no PR.
- **#6105** – Cron context bug (blocked status). Depends on RFC #6954 which is still under discussion.
- **#6416** – Quickstart config validation (open since May 6). Accepted, low activity.
- **#6653** – Host‑architecture policy for emulated installs (open since May 14). Low comments, no PR.
- **#7065** – Agent evaluation harness (open since Jun 1). No PR yet.
- **#7089** – Windows shell evaluation (open since Jun 2). No PR yet.
- **#7887, #7878, #7875, #7883** – All opened yesterday (Jun 17) – too early to judge attention, but these are low‑priority (p3) and await triage.

The longest‑standing open issue in today’s sample is #2079 (Feb 27), followed by #2128 (same date). Both are accepted feature/bug requests but have not seen implementation work.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-18

## Today's Activity Brief
In the last 24 hours, 4 issues were updated (2 remain open, 2 closed) and 10 pull requests saw activity (4 open, 6 merged/closed). A nightly build (`v0.3.0-nightly.20260617.a16a1e15`) was released, tracking the `main` branch. Merged PRs addressed a Gemini 3.5 Flash tool‑call compatibility issue, a OneBot security vulnerability, a Sogou search parsing regression, and added a new NEAR AI Cloud provider. Two new open PRs introduced diagnostic logging for Brave search empty results and a fix for duplicate messages in spawn sub‑turns.

## Releases
- **Nightly Build** (`v0.3.0-nightly.20260617.a16a1e15`) — an automated, potentially unstable build from `main`.
  Full changelog: [v0.3.0…main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
  No breaking changes or migration notes provided.

## Project Progress (Merged/Closed PRs)
Six pull requests were closed/merged today:

- **#3136** — `fix(gemini): set both camelCase and snake_case thought_signature in tool call request body` (by @ZOOWH). Resolves Gemini 3.5 Flash tool‑execution failures by including both key formats.
- **#3140** — `fix(onebot): block private inbound media fetches` (by @lc6464). Closes security issue #3070 by reusing existing HTTP guard logic to prevent host‑side arbitrary fetch from private addresses.
- **#3139** — `fix(web): update sogou search regex to match new HTML structure` (by @SiYue-ZO). Fixes Sogou search parsing after HTML changes.
- **#2990** — `fix(web): read full session history for Web UI display` (by @yuxuan-7814). Fixes issue #2796 where only the last user message was shown in session history.
- **#3138** — `리뷰기능 추가` (review feature addition, by @AhatLi). Adds a review functionality (details in Korean; no English description).
- **#2917** — `feat(provider): add NEAR AI Cloud provider` (by @PierreLeGuen). Adds NEAR AI Cloud as an OpenAI‑compatible provider with model‑list fetch support.

## Community Hot Topics
- **#3088** (open, `[help wanted, priority: high]`): [Feature] use vodozemac instead of libolm.
  Received 2 👍 reactions and 1 comment. The request highlights maintainer awareness of libolm being unmaintained and insecure. The proposed solution makes vodozemac the default with libolm optional at compile time.
- **#3070** (closed): [Security] OneBot inbound media URL handling allows host‑side arbitrary fetch.
  Though closed (fixed by #3140), the issue received attention due to its security impact. The reporter ( @YLChen-007 ) detailed a vulnerability where attacker‑controlled media URLs could be used to fetch from the host’s private network.
- **#3111** (closed): [BUG] Tool execution fails with Gemini 3.5 Flash (Missing thought_signature in schema).
  Promptly resolved by #3136, but the bug report illustrates a common pain point when adapting to new model API changes.

## Bugs & Stability
- **Medium severity**: #3070 (OneBot SSRF) — **fixed** by #3140 (merged).
- **Medium severity**: #3111 (Gemini 3.5 Flash tool‑call failure) — **fixed** by #3136 (merged).
- **Low severity**: #3141 (open PR) — adds diagnostic logging for Brave search empty results, not a bug itself but helps diagnose silent failures.
- **Low severity**: #3142 (open PR) — fixes duplicate messages in spawn sub‑turn by clearing the `ForUser` field in `ToolResult`.

No crashes or regressions were reported today.

## Feature Request Clusters
- **New messaging protocols**:
  - #3063 (open PR) — adds DeltaChat gateway.
  - #3093 (open issue) — requests SimpleX, Wire, or Tox support.
- **Provider/model expansion**:
  - #2917 (merged) — NEAR AI Cloud provider.
  - #3088 (open, high priority) — switch from libolm to vodozemac.
- **UI/UX improvements**:
  - #3138 (merged) — review functionality.
  - #2990 (merged) — full session history in Web UI.
- **Tool / skill improvements**:
  - #3092 (open PR) — adds `ok` checks for version/force type assertions in skills installation.
  - #3139 (merged) — Sogou search regex update.
  - #3141 (open PR) — Brave search diagnostic logging.

## User Feedback Summary
- **Pain point**: libolm is unmaintained and insecure — users want migration to vodozemac (#3088).
- **Desired integrations**: Several users ask for new gateways (DeltaChat, SimpleX, Tox, Wire) (#3063, #3093).
- **Frustration with model compatibility**: Gemini 3.5 Flash tool‑call failure caused confusion until fixed (#3111).
- **Security concern**: The OneBot SSRF vulnerability (#3070) was reported and fixed; users likely affected by it.

## Backlog Watch
- **#3088** — High‑priority feature request (vodozemac) with 2 👍, help‑wanted label, no maintainer response yet.
- **#3092** — Open PR (skill install type checks) since June 10, no comments or approvals.
- **#3063** — DeltaChat gateway PR open since June 8, awaiting review.
- **#3093** — Feature request (SimpleX/tox) stale (no activity since June 10), no maintainer engagement.
- **#3141** & **#3142** — Very recent open PRs (June 17); should be reviewed promptly.

</details>