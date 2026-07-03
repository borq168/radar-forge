# OpenClaw Ecosystem Digest 2026-07-03

> Issues: 192 | PRs: 500 | Projects covered: 4 | Generated: 2026-07-03 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-07-03

## 1. Today's Activity Brief
Over the last 24 hours, the OpenClaw repository saw high activity with 192 updated Issues (112 open/active, 80 closed) and 500 updated Pull Requests (446 open, 54 merged/closed). The project released a new beta version introducing GPT-5.6 support and external harness attachments. Community discussions and maintainer efforts heavily focused on isolating internal agent reasoning from external messaging channels, resolving Codex integration regressions, and patching memory/OOM vulnerabilities in sandbox and provider environments.

## 2. Releases
**v2026.7.1-beta.1**
- **OpenAI GPT-5.6 support:** OpenClaw now recognizes the GPT-5.6 model family across catalog, capability, and runtime selection paths ([#98333](https://github.com/openclaw/openclaw/issues/98333)).
- **External harness attachment:** Introduced `openclaw attach`, allowing users to launch an external harness against an existing Gateway session.

## 3. Project Progress
Recent merged, closed, and actively worked PRs indicate progress in several key areas:
- **Privacy & Security Boundaries:** Fixed a critical privacy bug where private long-term workspace memory could leak into shared group or delegated sessions by default ([#99225](https://github.com/openclaw/openclaw/pull/99225)). Addressed OOM vulnerabilities by bounding SSH sandbox command output buffering to 16 MiB ([#98829](https://github.com/openclaw/openclaw/pull/98829)) and limiting Google Vertex ADC token response body reads ([#98507](https://github.com/openclaw/openclaw/pull/98507)).
- **QA & Channel Integrations:** Expanded Crabline QA test coverage to include Matrix ([#99265](https://github.com/openclaw/openclaw/pull/99265)), Mattermost ([#99264](https://github.com/openclaw/openclaw/pull/99264)), and Signal ([#99262](https://github.com/openclaw/openclaw/pull/99262)) message normalization.
- **Mobile & UI:** Advanced Android chat command controls and slash-command pickers ([#98796](https://github.com/openclaw/openclaw/pull/98796)), and improved Telegram prompt context deduplication to prevent duplicated assistant replies ([#99133](https://github.com/openclaw/openclaw/pull/99133)).
- **Maintainer Workflows:** Proposed a stable backport release workflow skill ([#99266](https://github.com/openclaw/openclaw/pull/99266)) and an automated PR review autofix pipeline utilizing the Claude Agent SDK ([#68936](https://github.com/openclaw/openclaw/pull/68936)).

## 4. Community Hot Topics
- **Internal Text Leakage to Messaging Channels** ([#25592](https://github.com/openclaw/openclaw/issues/25592)): With 33 comments, this P1 issue highlights that text generated between tool calls (e.g., error handling, narration) is incorrectly routed to active messaging channels like Slack or iMessage. This underscores a strong user need for strict separation between agent processing logs and external-facing UI.
- **Codex App-Server Turn-Completion Stall** ([#88312](https://github.com/openclaw/openclaw/issues/88312)): A highly discussed regression (19 comments) where multi-tool agent turns reliably fail with "Codex stopped before confirming the turn was complete" on the Codex app-server. A fix is being iterated in PR [#99217](https://github.com/openclaw/openclaw/pull/99217).
- **Multi-Agent Collaboration RFC** ([#35203](https://github.com/openclaw/openclaw/issues/35203)): An ongoing architectural discussion (9 comments) proposing capability profiling, shared blackboards, layered memory boundaries, and token cost governance to manage complex multi-agent deployments.
- **Assistant Self-Inserting Fabricated User Turns** ([#99253](https://github.com/openclaw/openclaw/issues/99253)): A safety and rendering anomaly where the assistant generates a fake timestamped user message and replies to it within the same output block, raising concerns about transcript integrity.

## 5. Bugs & Stability
**Critical / P1 Regressions & Crashes:**
- **Message Routing:** Text between tool calls leaks to messaging channels ([#25592](https://github.com/openclaw/openclaw/issues/25592)).
- **Session State & Compaction:** Concurrent agent-to-agent turns fork the session tree, causing Anthropic to reject requests and permanently poisoning the transcript ([#98790](https://github.com/openclaw/openclaw/issues/98790)). Subagent completion events are silently dropped when the requester run ends prematurely ([#92433](https://github.com/openclaw/openclaw/issues/92433)).
- **Codex Integration:** Telegram turns repeatedly time out waiting for `turn/completed` ([#87744](https://github.com/openclaw/openclaw/issues/87744)); Codex app-server turn-completion stall ([#88312](https://github.com/openclaw/openclaw/issues/88312)).
- **Auth & State:** `v2026.6.11` missing reentrancy guard causes reply session initialization conflicts ([#98416](https://github.com/openclaw/openclaw/issues/98416)). Embedded runner intermittently fails on Anthropic thinking signature replays ([#92201](https://github.com/openclaw/openclaw/issues/92201)).

**Mobile & Client Stability:**
- **iOS:** Voice Wake crashes when reinstalling mic tap during active Talk/screen recording ([#99093](https://github.com/openclaw/openclaw/issues/99093) - Closed). WebChat messages append to transcript but fail to trigger assistant replies ([#97983](https://github.com/openclaw/openclaw/issues/97983)).
- **Android:** Node sends events before WebSocket handshake completes, losing notifications ([#79552](https://github.com/openclaw/openclaw/issues/79552) - Closed).
- **Rendering:** Tool results containing Cyrillic UTF-8 incorrectly render as image attachments in webchat ([#99186](https://github.com/openclaw/openclaw/issues/99186) - Closed). Large tool outputs poison subsequent results as `(no output)` ([#99168](https://github.com/openclaw/openclaw/issues/99168) - Closed).

## 6. Feature Request Clusters
- **Multi-Agent & Memory Architecture:**
  - Auto-discovery of agent configurations from external workspaces ([#32530](https://github.com/openclaw/openclaw/issues/32530)).
  - Auto-generate session titles via AI summarization instead of truncating the first message ([#77165](https://github.com/openclaw/openclaw/issues/77165)).
- **Provider Routing & Enterprise Auth:**
  - Provider fallback by failure class to quarantine auth-broken providers rather than treating all failures equally ([#47910](https://github.com/openclaw/openclaw/issues/47910)).
  - Support for GitHub Enterprise data-residency Copilot auth (`*.ghe.com`) (PR [#99221](https://github.com/openclaw/openclaw/pull/99221)).
- **Platform UX & Accessibility:**
  - Floating agent bubbles (Clawi) for macOS to visualize running agents ([#11623](https://github.com/openclaw/openclaw/issues/11623)).
  - Apple CarPlay support for the official iOS app ([#97993](https://github.com/openclaw/openclaw/issues/97993)).
  - UI quality and ergonomics update for dense configuration pages ([#75947](https://github.com/openclaw/openclaw/issues/75947)).

## 7. User Feedback Summary
- **Agent Output Formatting:** Users are frustrated by "internal" agent outputs (thinking blocks, tool acknowledgments, error handling) leaking into external chat interfaces like Slack and Telegram. This breaks the illusion of a polished assistant and clutters communication channels.
- **Mobile Onboarding & Permissions:** Friction remains in mobile app setup and daily use. Users report confusing states when Android lacks camera permissions for QR scanning ([#98044](https://github.com/openclaw/openclaw/issues/98044)), when iOS Photos permission is set to "Limited Access" ([#99046](https://github.com/openclaw/openclaw/issues/99046)), and when Android setup fails to distinguish between stale credentials and pending approvals ([#98046](https://github.com/openclaw/openclaw/issues/98046)).
- **Long-Running Session Reliability:** Advanced users running multi-agent setups or long cron jobs report that context compaction and sub-agent drain mechanisms occasionally corrupt the session tree or drop messages, requiring manual session resets.

## 8. Backlog Watch
- **Opaque Image Tool Errors** ([#73148](https://github.com/openclaw/openclaw/issues/73148)): Open since late April. The `image` tool fails with a generic "Failed to optimize image" error when the optional `sharp` native dependency is missing, confusing users during environment setup.
- **Hardcoded Sandbox Media Limits** ([#40880](https://github.com/openclaw/openclaw/issues/40880)): Open since March. The 5 MB `MEDIA_MAX_BYTES` limit for sandbox staging is hardcoded, preventing users from processing larger PDFs or presentations without modifying compiled dist files.
- **MSTeams Per-Thread Session Forcing** ([#81084](https://github.com/openclaw/openclaw/issues/81084)): Open since May. Channel-bound agents in Microsoft Teams are forced into per-thread sessions, breaking use cases where an agent needs to maintain a single state across an entire channel. Awaiting product decision.
- **Active-Memory Gateway Overload** ([#72015](https://github.com/openclaw/openclaw/issues/72015)): Open since late April. The official `active-memory` plugin blocks replies and overloads multi-agent gateways during QMD boot initialization. Awaiting maintainer review.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: 2026-07-03

## 1. Daily Cross-Project Overview
On 2026-07-03, the tracked AI agent ecosystem recorded high development velocity, led by OpenClaw’s 500 updated PRs and a new beta release introducing GPT-5.6 support. Across the projects, maintainers prioritized security hardening, memory and context compaction safeguards, and messaging channel stability, with notable fixes targeting SSRF, OOM vulnerabilities, and long-polling disconnects. NanoBot and Zeroclaw focused heavily on architectural expansions like plugin systems and Git-based SOP ingress, while PicoClaw concentrated on routine dependency updates and resolving critical configuration migration blockers.

## 2. Activity Comparison

| Project | Issues (New/Updated) | PRs (Updated) | Release Status | Activity Note |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 192 | 500 | `v2026.7.1-beta.1` released | High volume; focused on privacy boundaries, GPT-5.6 support, mobile QA, and channel integrations. |
| **NanoBot** | 97 | 62 | None | High velocity; focused on SSRF protection, memory corruption fixes, and provider compatibility. |
| **Zeroclaw** | 37 | 50 | None | Moderate volume; focused on Git forge channels, persistent memory architecture, and cross-platform stability. |
| **PicoClaw** | 2 (new) | 25 | Nightly build only | Low volume; focused on Dependabot updates, sandbox security, and Matrix/LINE channel fixes. |

## 3. OpenClaw Compared With Peers
*   **Activity Volume:** OpenClaw leads significantly in raw activity (192 issues, 500 PRs) compared to NanoBot (97/62), Zeroclaw (37/50), and PicoClaw (2/25). It is also the only project to publish a versioned release today.
*   **Technical Focus:** OpenClaw’s development is heavily weighted toward UI/UX polish, mobile client stability (iOS/Android), and strict isolation between internal agent reasoning and external messaging channels. In contrast, NanoBot and Zeroclaw are prioritizing backend extensibility (plugin systems, Git/SOP ingress) and core memory architecture.
*   **Community Surface Area:** OpenClaw addresses a broader end-user surface area, fielding requests for Apple CarPlay, floating macOS bubbles, and mobile onboarding friction. Conversely, Zeroclaw and NanoBot deal more frequently with developer and operator concerns, such as WSL2 OOM crashes, Windows shell semantics, and multi-tenant privacy isolation.

## 4. Shared Technical Focus Areas
*   **Messaging Channel Stability & Integration:** All four projects are actively addressing channel reliability. OpenClaw is expanding QA for Matrix/Mattermost/Signal and fixing Telegram context deduplication; NanoBot is fixing Matrix stream interleaving and Telegram long-polling hangs; Zeroclaw is addressing WhatsApp Web passkey breakages; PicoClaw is fixing Matrix sync silent deaths and LINE channel panics.
*   **Memory & Context Management:** OpenClaw is fixing session state compaction forks and private memory leaks; NanoBot is preventing history compaction from deleting "Dream" entries and stopping unauthorized Dream writes; Zeroclaw is advancing its persistent memory architecture ("Epic A") and memory-context injection.
*   **Security & Sandbox Execution:** OpenClaw bounded SSH sandbox output to prevent OOM; NanoBot pinned validated DNS for SSRF checks and enforced outbound message policies; Zeroclaw added zip-bomb inflation guards and stdin caps; PicoClaw enforced `exec` deny patterns to prevent sandbox escapes.
*   **Provider Routing & Compatibility:** OpenClaw added GPT-5.6 support; NanoBot fixed Claude Sonnet 5 temperature parameter rejections and added Anthropic OAuth; PicoClaw improved structural tool-call extraction for Volcengine Doubao Seed XML formats.

## 5. Differentiation Analysis
*   **OpenClaw:** Targets end-users and prosumers with a strong emphasis on polished UI/UX, native mobile apps, and seamless integration into daily communication channels (Slack, iMessage, Telegram). Its architecture focuses heavily on gateway sessions, external harnesses, and multi-agent collaboration.
*   **NanoBot:** Targets developers and multi-tenant operators, emphasizing extensibility (plugin system RFC), local LLM support (Ollama), and strict privacy/isolation in group chats (WhatsApp, Telegram).
*   **Zeroclaw:** Targets enterprise and DevOps workflows, focusing on Git forge integrations, Standard Operating Procedure (SOP) ingress, and persistent memory architectures for complex, long-running agent tasks.
*   **PicoClaw:** Functions as a lighter, highly sandboxed agent gateway. It targets self-hosters needing strict execution boundaries, lightweight channel routing, and straightforward configuration management.

## 6. Community Activity Notes
*   **Tier 1 (High Activity & Releases):** OpenClaw (192 issues, 500 PRs, beta release).
*   **Tier 2 (High/Moderate Activity, No Releases):** NanoBot (97 issues, 62 PRs), Zeroclaw (37 issues, 50 PRs).
*   **Tier 3 (Low Activity, Nightly Only):** PicoClaw (2 new issues, 25 PRs, nightly build).

## 7. Evidence-Backed Observations
*   **Observation 1: Messaging channel integrations are a primary source of instability across the ecosystem.**
    *   *Evidence:* OpenClaw (#25592 internal text leaking to channels, #87744 Telegram timeouts), NanoBot (#3626 Telegram long-polling hangs, #4068 Matrix interleaving), Zeroclaw (#8627 WhatsApp Web device linking broken), PicoClaw (#3203 Matrix sync silent death, #3171 LINE panics).
*   **Observation 2: Memory and context compaction mechanisms are causing data corruption and state loss.**
    *   *Evidence:* OpenClaw (#98790 concurrent turns forking session trees, #99225 private memory leaking), NanoBot (#4055 history compaction deleting entries, #4075 Dream writes overwriting skills), Zeroclaw (#8570 active work on persistent memory "Epic A" to address durable store needs).
*   **Observation 3: Security hardening is heavily focused on preventing sandbox escapes and unauthorized outbound actions.**
    *   *Evidence:* OpenClaw (#98829 bounding SSH sandbox output), NanoBot (#4671 SSRF DNS rebinding fixes, #4668 outbound message policies), Zeroclaw (#8574 zip-bomb inflation guards, #8463 stdin caps), PicoClaw (#3161 `exec` deny pattern enforcement).
*   **Observation 4: Cross-platform and environment-specific execution remains a persistent friction point for operators.**
    *   *Evidence:* NanoBot (#4544 Windows `exec` shell semantics), Zeroclaw (#7462 Windows test failures, #5542 WSL2 OOM crashes), PicoClaw (#3158 sandbox filesystem handling of OS-specific relative paths on Windows).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026-07-03)

## 1. Today's Activity Brief
In the last 24 hours, the NanoBot repository recorded high development velocity with 97 updated issues (94 open/active, 3 closed) and 62 updated pull requests (34 open, 28 merged/closed). Maintainers and contributors focused heavily on security hardening, provider compatibility fixes, and core agent loop stability. A significant batch of PRs addressed SSRF protection, outbound message authorization, and context compaction safeguards, while community discussions centered on extensibility and multi-tenant privacy. No new releases were published during this period.

## 2. Releases
None.

## 3. Project Progress
- **Security & Authorization**: PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) pins validated DNS for SSRF checks to prevent DNS rebinding. PR [#4668](https://github.com/HKUDS/nanobot/pull/4668) enforces outbound message policies to block unauthorized cross-target sends, and PR [#4669](https://github.com/HKUDS/nanobot/pull/4669) mandates an API key before starting the OpenAI-compatible server.
- **Provider & Model Compatibility**: PR [#4685](https://github.com/HKUDS/nanobot/pull/4685) omits the `temperature` parameter for Claude Sonnet 5 to prevent 400 errors. PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) fixes a race condition in GitHub Copilot token refresh, and PR [#4632](https://github.com/HKUDS/nanobot/pull/4632) introduces Anthropic OAuth support.
- **Agent Core & Memory**: PR [#4667](https://github.com/HKUDS/nanobot/pull/4667) protects user skills from unauthorized Dream writes, while PR [#4664](https://github.com/HKUDS/nanobot/pull/4664) prevents history compaction from deleting Dream entries. PR [#4673](https://github.com/HKUDS/nanobot/pull/4673) grounds memory audit records in actual git diffs.
- **Tool Execution & Parsing**: PR [#4662](https://github.com/HKUDS/nanobot/pull/4662) normalizes text-format tool call markup for OpenAI-compatible providers. PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) safely contains malformed MCP tool results.
- **Channel Integrations**: PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) adds Mattermost channel support, and PR [#4659](https://github.com/HKUDS/nanobot/pull/4659) isolates Matrix stream buffers to prevent interleaved messages.

## 4. Community Hot Topics
- **Nanobot Radar Finding ([#4657](https://github.com/HKUDS/nanobot/issues/4657))**: A tracking issue for 13 independently validated bugs and security gaps with no open PRs. This highlights a community-driven effort to triage technical debt and ensure critical issues are not lost in the backlog.
- **Plugin System for Agent Extensibility ([#2231](https://github.com/HKUDS/nanobot/issues/2231))**: A highly discussed feature request for a plugin architecture similar to Copilot CLI or Claude Code, indicating a strong user desire for modular, third-party extensibility without modifying core code.
- **Anthropic OAuth ([#4604](https://github.com/HKUDS/nanobot/issues/4604))**: Users requested OAuth support for Claude subscriptions to avoid managing Console API keys. This need is directly addressed by the newly opened PR [#4632](https://github.com/HKUDS/nanobot/pull/4632).
- **Automatic Reasoning Effort Escalation ([#4419](https://github.com/HKUDS/nanobot/issues/4419))**: Discussion around dynamically adjusting reasoning depth based on task complexity, reflecting advanced usage patterns of reasoning models and the need for cost/latency optimization.

## 5. Bugs & Stability
- **Security: SSRF and Outbound Messaging (High)**: SSRF vulnerabilities in URL validation and lack of outbound recipient authorization in the `message` tool were reported. Fix PRs: [#4671](https://github.com/HKUDS/nanobot/pull/4671) and [#4668](https://github.com/HKUDS/nanobot/pull/4668).
- **Context & Memory Corruption (High)**: Dream writes overwriting user skills ([#4075](https://github.com/HKUDS/nanobot/issues/4075)) and history compaction deleting Dream entries ([#4055](https://github.com/HKUDS/nanobot/issues/4055)). Fix PRs: [#4667](https://github.com/HKUDS/nanobot/pull/4667) and [#4664](https://github.com/HKUDS/nanobot/pull/4664).
- **Provider Compatibility (Medium)**: Claude Sonnet 5 rejecting the `temperature` parameter ([#4683](https://github.com/HKUDS/nanobot/issues/4683)) and OpenAI-compatible text-format tool calls failing to parse ([#4061](https://github.com/HKUDS/nanobot/issues/4061)). Fix PRs: [#4685](https://github.com/HKUDS/nanobot/pull/4685) and [#4662](https://github.com/HKUDS/nanobot/pull/4662).
- **Channel Disconnects (Medium)**: Telegram long polling silently hanging ([#3626](https://github.com/HKUDS/nanobot/issues/3626)) and Matrix stream buffer interleaving ([#4068](https://github.com/HKUDS/nanobot/issues/4068)). Fix PR for Matrix: [#4659](https://github.com/HKUDS/nanobot/pull/4659). The Telegram issue remains open.
- **Windows Execution Inconsistencies (Low/Medium)**: `exec` tool routing single-line to `cmd.exe` and multi-line to PowerShell ([#4544](https://github.com/HKUDS/nanobot/issues/4544)), and `--background` gateway state mismatch ([#4511](https://github.com/HKUDS/nanobot/issues/4511)). No open fix PRs specifically linked for these in today's data.

## 6. Feature Request Clusters
- **Extensibility & External Agents**: Users are requesting a formal plugin system ([#2231](https://github.com/HKUDS/nanobot/issues/2231)) and the ability to call external agents like OpenCode/Codex ([#3436](https://github.com/HKUDS/nanobot/issues/3436)). PR [#4686](https://github.com/HKUDS/nanobot/pull/4686) adds canonical OpenCode provider support.
- **Voice & Multimodal**: Requests for text-to-speech/voice output ([#4010](https://github.com/HKUDS/nanobot/issues/4010)) and pipeline latency metrics for voice interactions ([#3257](https://github.com/HKUDS/nanobot/issues/3257)).
- **Channel & Routing Enhancements**: Requests to override models per conversation ([#4253](https://github.com/HKUDS/nanobot/issues/4253)), per-chat group policy overrides for Telegram ([#3309](https://github.com/HKUDS/nanobot/issues/3309)), and broadcasting MCP tool messages across all channels ([#3343](https://github.com/HKUDS/nanobot/issues/3343)).
- **Context Management**: Embedding-based context compression ([#2937](https://github.com/HKUDS/nanobot/issues/2937)) and trusting LLM parallel tool calls for scheduling ([#3096](https://github.com/HKUDS/nanobot/issues/3096)).

## 7. User Feedback Summary
- **Privacy & Isolation**: Users running NanoBot in multi-tenant or group environments (WhatsApp, Telegram) report privacy leaks due to shared workspaces ([#2836](https://github.com/HKUDS/nanobot/issues/2836)) and request human-handoff pauses to prevent the bot from overriding manual replies ([#2837](https://github.com/HKUDS/nanobot/issues/2837)).
- **Platform-Specific Friction**: Windows users face shell semantics issues with the `exec` tool ([#4544](https://github.com/HKUDS/nanobot/issues/4544)). DingTalk users report file upload and @mention separation preventing file processing ([#3344](https://github.com/HKUDS/nanobot/issues/3344)).
- **Observability**: Users express frustration over the lack of granular latency metrics for voice pipelines ([#3257](https://github.com/HKUDS/nanobot/issues/3257)) and the inability to trigger or debug heartbeats on-demand ([#3437](https://github.com/HKUDS/nanobot/issues/3437)).
- **Reliability**: Ollama tool calling is reported as broken due to formatting issues ([#2829](https://github.com/HKUDS/nanobot/issues/2829)), and email checking is inconsistent ([#2954](https://github.com/HKUDS/nanobot/issues/2954)).

## 8. Backlog Watch
- **Plugin System ([#2231](https://github.com/HKUDS/nanobot/issues/2231))**: Open since March 2026, this foundational architecture request has 5 comments but no linked PR, indicating a significant gap in extensibility.
- **Telegram Long Polling Hangs ([#3626](https://github.com/HKUDS/nanobot/issues/3626))**: Open since May 2026, this silent failure mode severely impacts bot reliability in production and lacks a fix PR.
- **WhatsApp Workspace Isolation ([#2836](https://github.com/HKUDS/nanobot/issues/2836))**: Open since April 2026, this privacy issue regarding shared workspaces across different chats remains unresolved.
- **Ollama Tool Calling Broken ([#2829](https://github.com/HKUDS/nanobot/issues/2829))**: Open since April 2026, blocking local LLM users from utilizing agent tools effectively.
- **WebSocket vs Webhooks for Proactive Delivery ([#3559](https://github.com/HKUDS/nanobot/issues/3559))**: Open since April 2026, highlighting architectural limitations in multi-tenant proactive messaging.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-07-03

## 1. Today's Activity Brief
On 2026-07-03, the Zeroclaw repository recorded 37 updated issues (33 open/active, 4 closed) and 50 updated pull requests (30 open, 20 merged/closed). No new releases were published. Activity centered on expanding channel integrations (Git forge/SOP ingress), advancing the persistent memory architecture, and addressing critical stability, security, and cross-platform issues across Windows, WSL2, and WhatsApp Web environments.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
While 20 PRs were merged or closed in the last 24 hours, the active open PR pipeline shows significant architectural and feature advancements:
*   **Git Forge Channels & SOP Ingress**: A stacked 3-PR series ([#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609), [#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611), [#8618](https://github.com/zeroclaw-labs/zeroclaw/pull/8618)) is introducing a provider-agnostic Git channel core with GitHub and Gitea/Forgejo providers, alongside a channel-sourced SOP-ingress substrate.
*   **Memory Architecture**: PR [#8570](https://github.com/zeroclaw-labs/zeroclaw/pull/8570) introduces "Epic A" of the persistent-memory path, adding a durable store seam with supersede, dedup, and budget features. PR [#8619](https://github.com/zeroclaw-labs/zeroclaw/pull/8619) unifies memory-context injection keyed on `TurnOrigin` ingress provenance.
*   **Security & Audit**: PR [#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547) removes the `rag-pdf` feature to clear a `ttf-parser` vulnerability (RUSTSEC-2026-0192). PR [#8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574) adds regression tests for zip-bomb inflation guards, and PR [#8463](https://github.com/zeroclaw-labs/zeroclaw/pull/8463) caps interactive CLI stdin lines to 1 MiB to prevent unbounded allocations.
*   **Skills CLI**: PR [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) makes the `skills install/list/remove` commands bundle-aware to fix multi-agent runtime loading.

## 4. Community Hot Topics
*   **MCP Tools Visibility in TUI** ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)): 14 comments. Users report that while the gateway successfully discovers MCP tools, they are missing from Zerocode TUI sessions, blocking terminal-based workflows.
*   **Work Lanes and Board Automation RFC** ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)): 13 comments. An ongoing governance RFC to streamline issue routing, work lanes, and label cleanup without adding manual maintainer overhead.
*   **Windows Test Failures** ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)): 7 comments. 74 test failures on Windows 11 (Simplified Chinese, code page 936) due to Unix-only commands, path semantics, and console encoding. CI currently only runs on Linux.
*   **WSL2 Consecutive OOM** ([#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)): 6 comments. Severe out-of-memory crashes in the runtime daemon under WSL2, resulting in the process being killed by the OS.

## 5. Bugs & Stability
*   **Severity S0 (Data Loss/Security Risk)**:
    *   Consecutive OOM in WSL2 ([#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)): The runtime daemon is repeatedly killed by the OOM killer. No fix PR is currently linked.
*   **Severity S1 (Workflow Blocked)**:
    *   MCP tools missing from TUI sessions ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)): Gateway discovers tools, but TUI does not receive them.
    *   Source install with `embedded-web` fails ([#8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632)): Gateway build script invokes npm before the generated web API client (`api-generated.ts`) exists, breaking clean source builds.
    *   WhatsApp Web device linking broken ([#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)): WhatsApp's new passkey/SHORTCAKE companion-linking gate prevents device linking from completing in the native channel.
*   **Severity S2 (Degraded Behavior)**:
    *   74 test failures on Windows ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)): Path and encoding issues. (Related PR [#8604](https://github.com/zeroclaw-labs/zeroclaw/pull/8604) statically links the MSVC CRT to improve Windows binary portability).
    *   Gemini 400 history serializer error ([#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)): Assistant `tool_call` emitted before the first `user` turn, violating Gemini's strict API invariants.
    *   Headless deterministic SOP steps recorded as Completed without executing ([#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)): Creates a false-green audit trail in the SOP engine.
    *   `skills install` targets wrong `data_dir` ([#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)): Multi-agent runtime doesn't load from the targeted global directory.

## 6. Feature Request Clusters
*   **Git & SOP Ingress Integration**: Implementation of Git-based channels and Standard Operating Procedure (SOP) fan-in. PRs [#8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609), [#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611), and [#8618](https://github.com/zeroclaw-labs/zeroclaw/pull/8618) provide the GitHub/Gitea providers and SOP ingress substrates.
*   **OpenAI-Compatible API Endpoint**: Requests to expose agent capabilities via an OpenAI-compatible chat completions endpoint to support standard clients like Open WebUI and LobeChat ([#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550), [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)).
*   **Per-Agent Environment Variables**: Request to support custom env vars and masked secrets per agent to resolve multi-tenancy issues across shared MCP instances ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)).
*   **Context Window Visibility**: PR [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) adds a model context window usage bar to the TUI, gateway chat, and CLI interactive modes.

## 7. User Feedback Summary
*   **Cross-Platform Friction**: Windows and WSL2 users are experiencing significant stability issues, ranging from localized test failures and MSVC runtime dependencies to severe OOM crashes in the daemon.
*   **Multi-Agent Skill Management**: Users report that the `skills` CLI installs to a global `data_dir` that multi-agent runtimes ignore, breaking the expected "pull and use" workflow for skills.
*   **External Service Breakages**: The WhatsApp Web integration is currently broken due to upstream changes in WhatsApp's device linking flow (passkey gates), highlighting the fragility of companion-linking channels.
*   **UI/UX Gaps**: TUI users are frustrated that MCP tools discovered by the gateway do not propagate to the TUI session, creating a disjointed experience between the web dashboard/gateway and the terminal interface.

## 8. Backlog Watch
*   **WSL2 OOM Crashes** ([#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)): Opened in April 2026, this S0 severity issue remains open with 6 comments and no linked fix PR.
*   **Full-Channel Prebuilt Assets** ([#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)): Opened in mid-June, currently blocked. Users want optional full-channel binary bundles to avoid confusion when configuring non-default channels.
*   **Per-Agent Custom Env Vars** ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)): Blocked RFC. Critical for multi-tenancy and shared MCP instances.
*   **OpenAI-Compatible Endpoint** ([#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)): Blocked RFC. Highly requested for integrating with standard UI clients.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-07-03

## 1. Today's Activity Brief
Over the last 24 hours, PicoClaw saw moderate activity with 2 new issues opened and 25 pull requests updated (11 open, 14 closed/merged). The day's development was heavily focused on routine dependency updates via Dependabot, alongside targeted security and sandbox execution fixes. Additionally, contributors submitted fixes for messaging channel integrations (Matrix, LINE) and OpenAI-compatible tool calling, while a new automated nightly build was published.

## 2. Releases
- **Nightly Build**: [`v0.3.1-nightly.20260702.2cf030d2`](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)
  - This is an automated nightly build and may be unstable. No new stable releases were published today.

## 3. Project Progress
Several maintenance, security, and testing PRs were closed/merged today:
- **Security & Execution**: Closed PR [#3160](https://github.com/sipeed/picoclaw/pull/3160) rejects cross-site launcher setup requests to protect the first-run dashboard password store. PR [#3161](https://github.com/sipeed/picoclaw/pull/3161) ensures `exec` deny patterns remain active even when a command matches a custom allow rule, preventing sandbox escapes.
- **Testing**: PR [#3158](https://github.com/sipeed/picoclaw/pull/3158) was closed after adding regression coverage for sandbox filesystem handling of OS-specific relative paths on Windows.
- **Dependencies**: Multiple Dependabot PRs were closed, updating `anthropic-sdk-go` ([#3209](https://github.com/sipeed/picoclaw/pull/3209)), `golang.org/x/crypto` ([#3210](https://github.com/sipeed/picoclaw/pull/3210)), `copilot-sdk/go` ([#3177](https://github.com/sipeed/picoclaw/pull/3177)), and frontend packages like `shadcn`, `react-i18next`, `typescript-eslint`, and `@vitejs/plugin-react`.
- **Integrations**: PR [#3063](https://github.com/sipeed/picoclaw/pull/3063), which proposed adding a DeltaChat gateway, was closed without merging.

## 4. Community Hot Topics
- **Config Migration Blocker**: Issue [#3206](https://github.com/sipeed/picoclaw/issues/3206) highlights a critical failure during v2→v3 config migration, where the parser falsely flags `build_info` and `session.dm_scope` as unknown fields, breaking `picoclaw status`.
- **Matrix Channel Stability**: Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203) reports that the Matrix `/sync` long-polling loop dies permanently after network disruptions without triggering systemd restarts.
- **OpenAI Compat Tool Calls**: PR [#3165](https://github.com/sipeed/picoclaw/pull/3165) aims to recover Volcengine Doubao Seed `<seed:tool_call>` XML blocks from OpenAI-compatible responses, stripping leaked XML from user-visible content.

## 5. Bugs & Stability
- **[High] Config Migration Failure**: [#3206](https://github.com/sipeed/picoclaw/issues/3206) - v2→v3 config migration fails on fresh installs and upgrades, preventing the application from loading `config.json`. No fix PR is currently linked.
- **[High] Matrix Sync Silent Death**: [#3203](https://github.com/sipeed/picoclaw/issues/3203) - The Matrix integration lacks reconnection logic, causing the bot to silently stop responding after network/homeserver disruptions. No fix PR is currently linked.
- **[Medium] LINE Channel Panics**: [#3171](https://github.com/sipeed/picoclaw/pull/3171) (Open) - Adds `ok` checks for `sync.Map` type assertions in the LINE channel's `Send` method to prevent potential runtime panics from unexpected map value types.

## 6. Feature Request Clusters
- **Messaging Channel Expansions & Fixes**: Users and contributors are actively working on channel reliability and expansion. This includes the closed DeltaChat gateway proposal ([#3063](https://github.com/sipeed/picoclaw/pull/3063)), the Matrix reconnection logic request ([#3203](https://github.com/sipeed/picoclaw/issues/3203)), and LINE channel stability improvements ([#3171](https://github.com/sipeed/picoclaw/pull/3171)).
- **LLM Provider Compatibility**: PR [#3165](https://github.com/sipeed/picoclaw/pull/3165) addresses the need for better structural tool-call extraction when using OpenAI-compatible endpoints that return proprietary XML formats (like Volcengine Doubao Seed).

## 7. User Feedback Summary
- **Upgrade Friction**: Users attempting to upgrade to v3 or run fresh installs of the latest release are hitting immediate blockers due to strict config validation ([#3206](https://github.com/sipeed/picoclaw/issues/3206)), leading to a poor first-run or upgrade experience.
- **Production Reliability**: Operators running PicoClaw as a systemd service are dissatisfied with the Matrix integration's lack of internal reconnection logic ([#3203](https://github.com/sipeed/picoclaw/issues/3203)), as silent loop deaths require manual intervention rather than automatic service recovery.

## 8. Backlog Watch
Several PRs were explicitly tagged as `[stale]` by contributors, indicating they need maintainer review or cleanup:
- **Open Stale PRs**:
  - [#3165](https://github.com/sipeed/picoclaw/pull/3165): Fix for recovering Seed XML tool calls in OpenAI compat.
  - [#3171](https://github.com/sipeed/picoclaw/pull/3171): Fix for LINE channel `sync.Map` type assertion panics.
- **Closed Stale PRs**: PRs [#3160](https://github.com/sipeed/picoclaw/pull/3160) (auth cross-site), [#3161](https://github.com/sipeed/picoclaw/pull/3161) (exec deny patterns), and [#3158](https://github.com/sipeed/picoclaw/pull/3158) (sandbox fs tests) were closed today, suggesting maintainers are clearing out the stale backlog.

</details>