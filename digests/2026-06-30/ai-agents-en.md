# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 375 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-30 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-06-30

## 1. Today's Activity Brief
On 2026-06-30, OpenClaw saw high development velocity with 375 issues updated (304 open/active, 71 closed) and 500 pull requests updated (447 open, 53 merged/closed). Activity heavily concentrated on channel integration hardening (Telegram, Discord, Signal, iMessage), session state and transcript storage refactoring, and tool schema validation. No new releases were published today.

## 2. Releases
None.

## 3. Project Progress
Today saw 53 PRs merged/closed and 71 issues closed, reflecting significant cleanup and stabilization efforts.
*   **Closed Issues**: Notable resolutions include [#81525](https://github.com/openclaw/openclaw/issues/81525) (media-understanding silently routing images to non-vision models), [#88548](https://github.com/openclaw/openclaw/issues/88548) (GitHub Copilot static default model list shadowing live discovery), [#91592](https://github.com/openclaw/openclaw/issues/91592) (`memory_search` "index scope changed" error after force rebuild), and [#95500](https://github.com/openclaw/openclaw/issues/95500) (plugin model provider resolution failing in isolated cron sessions).
*   **Merged/Closed PRs**: Includes [#95051](https://github.com/openclaw/openclaw/pull/95051) and [#97875](https://github.com/openclaw/openclaw/pull/97875), which address delivering durable reasoning replies for Telegram.
*   **Advancing Open PRs**: Major architectural PRs progressing include [#96625](https://github.com/openclaw/openclaw/pull/96625) (refactoring sessions and transcripts to SQLite storage, XL size) and [#89469](https://github.com/openclaw/openclaw/pull/89469) (inheriting requester model for subagents). A large batch of schema and tool-list hardening PRs by @vincentkoc (e.g., [#89539](https://github.com/openclaw/openclaw/pull/89539), [#89529](https://github.com/openclaw/openclaw/pull/89529), [#89493](https://github.com/openclaw/openclaw/pull/89493)) are also advancing through review.

## 4. Community Hot Topics
*   **Cross-Platform Desktop Apps**: Issue [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Clawdbot Apps) remains the most active discussion with 110 comments and 81 👍. Users are requesting feature parity with the existing macOS/iOS/Android apps.
*   **Session State & Concurrency**: Issue [#86538](https://github.com/openclaw/openclaw/issues/86538) (Session write-lock timeouts block subagent delivery lanes) has 18 comments, highlighting architectural bottlenecks in session JSONL write-locks affecting subagent and cron lanes.
*   **DeepSeek Caching Regression**: Issue [#94518](https://github.com/openclaw/openclaw/issues/94518) (DeepSeek cache hit rate <10% after 6.x upgrade) has 8 👍 and 6 comments, with users reporting that boundary-aware caching broke prefix matching for DeepSeek V4 models.

## 5. Bugs & Stability
**Message Delivery & Silent Drops**
*   [#80520](https://github.com/openclaw/openclaw/issues/80520): Telegram messages silently dropped with no `sendMessage` logged (P1).
*   [#81484](https://github.com/openclaw/openclaw/issues/81484): Discord guild reply regression causing malformed send payloads and repeated outbound loops (P1).
*   [#80700](https://github.com/openclaw/openclaw/issues/80700): Followup agent silent-drops on billing/quota rejection without user-facing notice (P1).

**Latency & Performance Regressions**
*   [#82070](https://github.com/openclaw/openclaw/issues/82070): CLI commands experiencing ~14s cold-start regression after 2026.5.12 update (P1).
*   [#95121](https://github.com/openclaw/openclaw/issues/95121): Codex OAuth/Appserver turns spending ~28s after prompt submission for tiny replies (P2).
*   [#80607](https://github.com/openclaw/openclaw/issues/80607): Non-default multi-agent uses `embedded_run` instead of direct session, causing 10-17s latency (P2).

**Runtime & Execution Failures**
*   [#91363](https://github.com/openclaw/openclaw/issues/91363): Isolated cron consistently fails with "LLM request failed" on model-call-started phase (P1).
*   [#97877](https://github.com/openclaw/openclaw/issues/97877): `empty-error-retry` blocked by `hadPotentialSideEffects`, causing silent terminal failures on transient 5xx errors (P1).
*   [#79752](https://github.com/openclaw/openclaw/issues/79752): Discord HTTP responses fail with gzip not decompressed under Node v26 on macOS (P1).

**Security & Authorization Fixes (Open PRs)**
*   [#97961](https://github.com/openclaw/openclaw/pull/97961): fix(imessage): require authorization for group actions (P0).
*   [#97952](https://github.com/openclaw/openclaw/pull/97952): fix(codex): require admin for native controls.
*   [#97944](https://github.com/openclaw/openclaw/pull/97944): fix(exec): harden script preflight carrier unwrapping to prevent shell-bleed patterns.

## 6. Feature Request Clusters
*   **Channel-Specific Enhancements**:
    *   *Telegram*: [#79077](https://github.com/openclaw/openclaw/issues/79077) requests support for Telegram's May-7 bot-to-bot and guest-bot modes. PR [#97806](https://github.com/openclaw/openclaw/pull/97806) lays the bot-to-bot policy foundation.
    *   *Signal*: PR [#95718](https://github.com/openclaw/openclaw/pull/95718) adds native Signal reply quotes.
    *   *Discord*: PR [#96106](https://github.com/openclaw/openclaw/pull/96106) surfaces Anthropic reasoning and pre-tool commentary on Discord.
*   **Plugin & Skill Ecosystem**:
    *   [#80213](https://github.com/openclaw/openclaw/issues/80213) requests a skill author-defined setup hook (`setup.script` in SKILL.md) for post-install scripts.
    *   [#81913](https://github.com/openclaw/openclaw/issues/81913) requests a stable plugin SDK surface for installed skill workflows to prevent reliance on internal `src/agents/*` paths.
*   **Subagent & Routing Architecture**:
    *   [#81061](https://github.com/openclaw/openclaw/issues/81061) requests a `before_route_inbound_message` hook for pre-routing interception.
    *   PR [#89469](https://github.com/openclaw/openclaw/pull/89469) introduces model inheritance for subagents (`model: "inherit"`).

## 7. User Feedback Summary
Users are expressing frustration over "silent drops" where messages fail to deliver or retry without notifying the sender across Telegram, Discord, and quota rejections. Latency is a major pain point, with multiple independent reports of 10-28 second delays in CLI cold starts, Codex OAuth turns, and multi-agent embedded runs. The Node v26 upgrade has caused unexpected gzip decompression failures for some macOS users. Conversely, there is strong and sustained demand for Linux and Windows desktop clients to match the macOS experience.

## 8. Backlog Watch
*   [#75](https://github.com/openclaw/openclaw/issues/75): Linux/Windows Clawdbot Apps (Open since 2026-01-01, 110 comments, P2) - High community interest but lacks maintainer implementation.
*   [#81061](https://github.com/openclaw/openclaw/issues/81061): Hook: `before_route_inbound_message` (Open since 2026-05-12, marked stale, P2) - Architectural request for pre-routing interception.
*   [#80176](https://github.com/openclaw/openclaw/issues/80176): JSONL session-replay harness (Open since 2026-05-10, P3) - Part of the Codex×Pi parity Phase 5, waiting on drift classifier dependency.
*   [#80040](https://github.com/openclaw/openclaw/issues/80040): Cascading failure involving invalidated OAuth, duplicate tool execution, and cold-cache bootstrap (Open since 2026-05-10, P2) - Complex multi-part bug needing product decision.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: 2026-06-30

## 1. Daily Cross-Project Overview
On 2026-06-30, the tracked AI agent ecosystem saw no new releases, with development efforts concentrated on messaging channel integrations, context optimization, and execution security patching. OpenClaw dominated the activity volume, focusing heavily on multi-channel delivery hardening and session storage refactoring, while NanoBot and Zeroclaw addressed critical execution security vulnerabilities and provider compatibility bugs. PicoClaw maintained a smaller footprint, prioritizing privacy-centric messaging gateways and LLM cost-tracking features. Overall, cross-project friction points today centered around silent message drops, context/token cost management, and tool-call serialization errors.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases | Activity Note |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 375 | 500 | None | High velocity; channel hardening, session refactoring, schema validation. |
| **NanoBot** | 7 | 32 | None | Moderate; context optimization, A2A delegation, security patches. |
| **Zeroclaw** | 50 | 50 | None | Moderate; provider compatibility, WASM plugins, channel integrations. |
| **PicoClaw** | 3 | 3 | None | Low; privacy gateways, LLM cost tracking, minor bug closures. |

## 3. OpenClaw Compared With Peers
*   **Activity Volume**: OpenClaw’s development velocity (375 issues, 500 PRs) vastly exceeds its peers, indicating a much larger maintainer and contributor base. Zeroclaw maintains a steady mid-tier pace (50/50), while NanoBot (7/32) and PicoClaw (3/3) operate with significantly smaller daily footprints.
*   **Technical Focus**: OpenClaw is currently deep in architectural refactoring (migrating session states to SQLite) and hardening complex multi-channel delivery pipelines. In contrast, NanoBot is focused on agent-to-agent (A2A) mechanics and context compaction, Zeroclaw is advancing a WASM plugin architecture and broad provider compatibility, and PicoClaw is targeting decentralized messaging and edge cost-tracking.
*   **Community Surface Area**: OpenClaw’s community is highly active and demanding, driving massive discussion threads for cross-platform desktop parity and reporting complex concurrency/latency regressions. The peer projects have more focused communities dealing with specific integration friction, security bypasses, or niche protocol requests.

## 4. Shared Technical Focus Areas
*   **Messaging Channel Integrations & Delivery**: All projects are actively expanding or fixing messaging gateways. OpenClaw is hardening Telegram, Discord, Signal, and iMessage; Zeroclaw is adding Inkbox and GitHub channels while fixing WhatsApp and Telegram; PicoClaw has an open PR for DeltaChat and user requests for SimpleX/Tox.
*   **Silent Drops & Message Routing Failures**: Message delivery reliability is a shared pain point. OpenClaw users report silent drops on Telegram/Discord and quota rejections; Zeroclaw users report agents sending literal "NO_REPLY" strings or empty messages; NanoBot is fixing a WeChat relay bug that silently drops streaming `tool_use` IDs.
*   **Context, Token Costs, and Caching**: Managing LLM operational costs is driving updates across the board. NanoBot is merging context compaction modules and fixing prompt-caching invalidations; PicoClaw has open PRs for AWS Bedrock prompt caching and per-turn token tracking; OpenClaw is troubleshooting a DeepSeek cache hit rate regression.
*   **Subagent & Multi-Agent Architecture**: OpenClaw is advancing subagent model inheritance and pre-routing hooks, while NanoBot is introducing native A2A peer delegation and configurable model presets for subagents.

## 5. Differentiation Analysis
*   **Feature Focus**: OpenClaw prioritizes omnichannel delivery, persistent session state, and complex routing. NanoBot emphasizes lightweight execution, A2A delegation, and context microcompacting. Zeroclaw focuses on extensible WASM plugins, broad provider support, and Standard Operating Procedure (SOP) engines. PicoClaw targets privacy/decentralized messaging and granular LLM observability.
*   **Target Users**: OpenClaw targets power users needing robust, persistent multi-channel assistants with desktop app parity. NanoBot targets developers needing cost-efficient, highly delegating background agents. Zeroclaw targets enterprise/prosumer users needing extensible plugin ecosystems and procedural memory. PicoClaw targets privacy-conscious users and edge-deployment scenarios.
*   **Technical Architecture**: OpenClaw relies on heavy session state management (transitioning to SQLite) and complex delivery lanes. NanoBot utilizes filesystem queues and aggressive context truncation to maintain a lightweight footprint. Zeroclaw is building a WASM-first plugin host with OCI registries. PicoClaw focuses on lightweight web panels and direct provider API integrations.

## 6. Community Activity Notes
*   **Tier 1 (High Activity)**: **OpenClaw**. With 375 issues and 500 PRs updated, it exhibits massive ongoing development, high community reporting volume, and complex architectural debates.
*   **Tier 2 (Moderate Activity)**: **Zeroclaw** and **NanoBot**. Both show steady development and active bug triage. Zeroclaw (50/50) is heavily focused on provider/channel integrations, while NanoBot (7/32) is pushing concentrated PR batches for security and context optimization.
*   **Tier 3 (Low Activity)**: **PicoClaw**. With only 3 issues and 3 PRs updated, daily movement is minimal, consisting mostly of stale or slow-moving feature requests and minor bug closures.
*   *Note: No projects in the tracked ecosystem published new releases today.*

## 7. Evidence-Backed Observations
*   **Observation 1: Messaging channel reliability and silent failures are primary ecosystem pain points.**
    *Evidence*: OpenClaw reports P1 silent drops on Telegram/Discord and followup agent quota rejections; Zeroclaw reports agents sending literal "NO_REPLY" strings and empty messages when conditions aren't met; NanoBot is patching a WeChat relay bug that silently drops tool IDs.
*   **Observation 2: LLM context limits and token costs are driving immediate architectural optimizations.**
    *Evidence*: NanoBot merged fixes for prompt-caching invalidation and opened PRs for standalone command-output compaction; PicoClaw opened PRs for AWS Bedrock prompt caching and per-turn token tracking; OpenClaw is actively debugging a DeepSeek V4 cache hit rate regression.
*   **Observation 3: Execution containment and credential security require continuous patching across agent frameworks.**
    *Evidence*: NanoBot is patching an `ExecTool` path extraction bypass and MCP credential leakage; Zeroclaw is fixing a WASM plugin mutex poison and gating sub-tool execution with access policies; OpenClaw is hardening script preflight carrier unwrapping to prevent shell-bleed patterns.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-06-30

## 1. Today's Activity Brief
In the last 24 hours, NanoBot saw moderate activity with 7 issues updated (4 open, 3 closed) and 32 pull requests updated (22 open, 10 merged/closed). Development efforts heavily focused on context window optimization, subagent/Agent-to-Agent (A2A) delegation mechanics, and patching security/stability bugs in the execution and configuration pipelines. Additionally, several PRs were introduced to improve WebUI functionalities and refine the "Dream" memory consolidation prompts.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
While 10 PRs were merged or closed, the provided data highlights the closure of several key issues and one notable PR:
*   **Closed Issues**:
    *   [#660](https://github.com/HKUDS/nanobot/issues/660): Addressed community concerns regarding the project's "ultra-lightweight" claim versus its Node.js and Python Dockerfile dependencies.
    *   [#4222](https://github.com/HKUDS/nanobot/issues/4222): Resolved a bug where `max_messages` truncation and microcompacting continuously invalidated prefix/prompt caching.
    *   [#4597](https://github.com/HKUDS/nanobot/issues/4597): Closed a test issue.
*   **Closed PRs**:
    *   [#4502](https://github.com/HKUDS/nanobot/pull/4502): The "Add gateway webhook triggers" PR was closed, likely superseded by the newly opened [#4591](https://github.com/HKUDS/nanobot/pull/4591) which introduces session-bound local triggers via a filesystem queue.

## 4. Community Hot Topics
*   **Dependency Bloat vs. "Ultra-Lightweight" Branding**: Issue [#660](https://github.com/HKUDS/nanobot/issues/660) remains the most discussed item with 15 comments and 5 👍 reactions. Users questioned the inclusion of Node.js alongside Python in the Dockerfile, contradicting the "ultra-lightweight" marketing. The issue is now closed, indicating maintainers have either addressed the dependency or clarified the architectural requirements.
*   **Context & Cost Optimization**: PRs [#4581](https://github.com/HKUDS/nanobot/pull/4581) and [#4588](https://github.com/HKUDS/nanobot/pull/4588) represent a concerted effort to reduce input tokens and context usage. These PRs introduce standalone command-output compaction modules and route common command families through focused compactors to lower API costs and extend the utility of low-context models.

## 5. Bugs & Stability
*   **[High/Security] ExecTool Path Extraction Bypass**: Issue [#4592](https://github.com/HKUDS/nanobot/issues/4592) / PR [#4594](https://github.com/HKUDS/nanobot/pull/4594). The shell command guard failed to treat `=` as a valid preceding delimiter for absolute paths. Commands like `curl --output=/etc/passwd` bypassed workspace containment checks. A fix PR is open.
*   **[High/Security] MCP Credential Leakage**: PR [#4584](https://github.com/HKUDS/nanobot/pull/4584). MCP server URLs carrying secrets in userinfo or query strings were being logged in raw form during validation and connection paths. A fix PR is open to redact these credentials.
*   **[High/Data Corruption] Tool Call ID Overwrites**: Issue [#4595](https://github.com/HKUDS/nanobot/issues/4595) / PR [#4596](https://github.com/HKUDS/nanobot/pull/4596). `StreamingFileEditTracker.apply_final_call_ids()` was overwriting correct `tool_call.id` values for non-file-edit tools during parallel streaming, causing permanent session poisoning. A fix PR is open.
*   **[Medium/Stability] Config Migration Crash**: PR [#4583](https://github.com/HKUDS/nanobot/pull/4583). `load_config()` crashed during tool-key migration if the `tools` or `exec` sections were explicitly set to `null` rather than absent. A fix PR is open.
*   **[Medium/Integration] WeChat Relay Bug**: PR [#4567](https://github.com/HKUDS/nanobot/pull/4567). The WeChat channel was silently dropping the `streaming` config field, forcing non-streaming API calls which caused upstream Anthropic-compatible relays to drop `tool_use` IDs. A fix PR is open to stream LLM calls and buffer reply delivery.

## 6. Feature Request Clusters
*   **Subagent & A2A Collaboration**:
    *   PR [#4571](https://github.com/HKUDS/nanobot/pull/4571) introduces native Agent-to-Agent (A2A) peer delegation with cross-delegation depth guards, moving beyond anonymous background subagents.
    *   PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) allows subagents to use configurable model presets (different provider/model/temperature than the parent).
    *   PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) adds a `pending_queue` to `process_direct` to properly inject subagent results mid-turn.
*   **Execution & Environment Control**:
    *   Issue [#4580](https://github.com/HKUDS/nanobot/issues/4580) requests `conda` virtual environment compatibility and wrappers for subprocess execution.
    *   PR [#4591](https://github.com/HKUDS/nanobot/pull/4591) adds workspace-scoped external triggers bound to chat sessions via a local filesystem queue.
*   **Advanced Reasoning**:
    *   Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) requests automatic reasoning effort escalation (default + escalated levels) utilizing the `reasoningEffort` config field.

## 7. User Feedback Summary
*   **Cost and Context Limits**: Users are actively feeling the pain of high token costs and context window exhaustion. This is evidenced by the closure of the prompt-caching invalidation bug ([#4222](https://github.com/HKUDS/nanobot/issues/4222)) and the opening of multiple optimization PRs ([#4581](https://github.com/HKUDS/nanobot/pull/4581), [#4588](https://github.com/HKUDS/nanobot/pull/4588)) aimed at compacting oversized subagent announcements and noisy exec outputs.
*   **Developer Environment Friction**: Issue [#4580](https://github.com/HKUDS/nanobot/issues/4580) highlights that the default subprocess execution path lacks virtual environment support, forcing users to manually manage environments outside of NanoBot's `exec` tool.
*   **Onboarding/Setup Clarity**: PR [#4573](https://github.com/HKUDS/nanobot/pull/4573) notes that users waste time during `nanobot setup` when trying to use an OAuth provider, as it wasn't intuitively set as the main provider by default.

## 8. Backlog Watch
*   **Subagent Enhancements**: PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) (configurable model presets for subagents) and PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) (pending_queue for subagent result injection) were both created on 2026-06-11 and remain open. These are critical for the broader A2A architecture being built in [#4571](https://github.com/HKUDS/nanobot/pull/4571).
*   **Reasoning Effort Escalation**: Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) (created 2026-06-20) requesting automatic reasoning effort escalation remains open without an attached PR, requiring maintainer design input.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest (2026-06-30)

## 1. Today's Activity Brief
On 2026-06-30, the Zeroclaw project saw 50 issues updated (43 open/active, 7 closed) and 50 pull requests updated (40 open, 10 merged/closed), with no new releases published. Development activity heavily concentrated on provider compatibility fixes (OpenAI, Anthropic, Groq, Kimi), channel integrations (Telegram, WhatsApp, Inkbox, GitHub), and advancing the WASM plugin architecture. Maintainers and contributors also actively addressed critical bugs related to native tool calling serialization and system prompt tool-availability mismatches across different runtime entry points.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Several issues and PRs were closed or merged, advancing channel features and fixing provider quirks:
- **WhatsApp & Cron Fixes**: Closed [#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379) (opt-in passive group context for WhatsApp Web) and [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) (cron/heartbeat delivery sending literal "NO_REPLY" text to channels).
- **Provider & Tool Fixes**: Closed [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327) (native tool calling image markers inflating token counts) and [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) (vision_provider silently ignored for inbound images).
- **PR Closures**: Closed PR [#8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441) (adding tool name to native tool-result messages for Groq compatibility) and PR [#8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436) (documenting `max_history_messages` hard cap alongside whole-turn trim).

## 4. Community Hot Topics
- **Provider Streaming Errors**: Issue [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (11 comments) reports a 400 Bad Request when using the kimi-code provider in streaming chat calls due to missing `reasoning_content` in the assistant payload.
- **System Prompt Tool Mismatches**: Issue [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (9 comments) highlights that system prompts incorrectly state "No tools are available" to reasoning models across various entry points (channels, gateway, WebSocket), despite native/MCP tools being present in the request.
- **Computer-Use RFC**: Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6 comments) proposes adding desktop screen interaction and input control, reflecting user demand for local GUI automation capabilities.
- **A2A Agent Discovery**: Issue [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) (5 comments) discusses implementing `.well-known/agent-card.json` for multi-agent installs to enable interoperability with external agent systems.

## 5. Bugs & Stability
*Severity 1 / Priority 1 (Workflow Blocked):*
- [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600): Kimi-code provider streaming failure (400 Bad Request).
- [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) & [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054): Native/MCP tools unavailable on OpenAI/Anthropic turns due to system prompt mismatches. (Related fix PR [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) is open to centralize deferred-MCP access policy).
- [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Telegram channel configuration fails; bot does not respond despite quickstart setup.
- [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334): `skills install` CLI targets `data_dir`, which multi-agent runtimes do not load, breaking skill installation.

*Severity 2 / Priority 2 (Degraded Behavior):*
- [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410): Channel tasks lack a first-class intentional no-reply outcome, causing visible empty responses when conditions aren't met.
- [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800): ZeroCode TUI keybindings are misleading or unreachable on macOS.
- [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904): `always-inject` SKILL.md frontmatter fails in compact prompt mode.

*Notable Fix PRs:*
- [#8510](https://github.com/zeroclaw-labs/zeroclaw/pull/8510): Omits empty assistant tool-call content in OpenAI-compatible requests to prevent strict backend rejections.
- [#8149](https://github.com/zeroclaw-labs/zeroclaw/pull/8149): Tolerates mutex poison in the WASM plugin host to prevent host application panics during plugin HTTP handling.
- [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960): Gates `execute_pipeline` sub-tool execution with per-agent `ToolAccessPolicy` to fix a security bypass.

## 6. Feature Request Clusters
- **Channel Integrations**: PR [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) adds a native Inkbox channel (email, SMS, voice, iMessage). PR [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504) introduces a GitHub channel with SOP ingress. PR [#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427) adds native location pin support for WhatsApp Web, and PR [#8440](https://github.com/zeroclaw-labs/zeroclaw/pull/8440) adds per-channel inbound debounce for Telegram.
- **WASM & Plugin Architecture**: Multiple RFCs and trackers aim to mature the plugin system, including [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) (hybrid skills + WASM tools), [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) (OCI registries for plugin storage), [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) (Wasm-first default runtime), and tracker [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314).
- **Agent Memory & Context**: PR [#8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508) adds MCP resources-as-context and named-prompt rendering. PR [#8509](https://github.com/zeroclaw-labs/zeroclaw/pull/8509) and [#8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461) expand the SOP (Standard Operating Procedure) engine with procedural memory workshops and filesystem event sources.

## 7. User Feedback Summary
- **Configuration & Onboarding**: Users report friction with Telegram setup, where the CLI claims channels are configured but the bot remains unresponsive ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)). Multi-agent skill installation is also broken due to directory targeting issues ([#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)).
- **UX & TUI**: macOS users find the ZeroCode TUI help and keybindings misleading or unreachable in certain input states ([#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)).
- **Agent Behavior**: Users are frustrated by agents sending literal "NO_REPLY" strings or empty messages when conditional tasks evaluate to false, prompting requests for a first-class silent/no-reply outcome ([#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)).

## 8. Backlog Watch
- [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074): (Created 2026-04-24) Tracks 153 commits lost in a bulk revert (`c3ff635`) that need recovery. This is a high-risk data-loss issue requiring maintainer attention.
- [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157): (Created 2026-04-27) Nextcloud Talk integration uses the wrong bot message API, causing response failures.
- [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557): (Created 2026-05-10) Reconciling runtime model switching with the provider structure before v0.8.0 hardens semantics.
- [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) & [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462): Both RFCs are tagged `needs-maintainer-review`, covering OCI-compliant plugin registries and OTel runtime policies for LLM/tool content.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### 1. Today's Activity Brief
On 2026-06-30, PicoClaw saw updates across 3 issues and 3 pull requests, with no new releases published. Issue activity included the closure of a legacy iOS Safari compatibility bug and ongoing discussions around privacy-focused messaging gateways and LLM provider integrations. All three updated pull requests remain open, focusing on DeltaChat gateway support, AWS Bedrock prompt caching, and granular token usage tracking.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
No pull requests were merged today. One issue, [#3090](https://github.com/sipeed/picoclaw/issues/3090), regarding a UI panel failure on Safari for iOS versions below 16.4, was closed. The closed issue was marked as `[stale]`, indicating it was likely closed due to inactivity rather than a direct code fix in today's updates.

### 4. Community Hot Topics
The most active discussion is on issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) (4 comments, 1 👍), where a user is requesting support for privacy-focused messaging gateways like SimpleX, Wire, or Tox. This highlights a community interest in expanding PicoClaw's communication channels toward decentralized or secure networks. Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) also saw notable discussion (3 comments) regarding legacy iOS browser compatibility prior to being closed.

### 5. Bugs & Stability
*   **Medium Severity:** [#3153](https://github.com/sipeed/picoclaw/issues/3153) - When using Volcengine's `doubao-seed-2.0-pro` model, tool calls occasionally leak to the user as raw `<seed:tool_call>` XML text instead of being executed by the agent. This disrupts the agent workflow and exposes backend formatting. No fix PR is currently linked.
*   **Low Severity / Closed:** [#3090](https://github.com/sipeed/picoclaw/issues/3090) - The web panel failed to function on Safari for iOS versions below 16.4. This issue was closed today (marked stale).

### 6. Feature Request Clusters
*   **Alternative Messaging Gateways:** Users are requesting privacy-centric or decentralized messaging integrations. Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) requests SimpleX, Wire, or Tox. Concurrently, PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) is open to add a DeltaChat gateway, showing active development in expanding supported communication protocols.
*   **LLM Observability and Cost Optimization:** Two open PRs by @loafoe target better tracking and optimization of LLM usage. PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) introduces AWS Bedrock Converse API prompt caching via explicit cache points to reduce input costs. PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) adds per-turn input/output token usage emission on finalized messages for downstream tracking.

### 7. User Feedback Summary
Users are actively seeking to deploy PicoClaw across diverse messaging platforms, with specific requests for decentralized networks (SimpleX, Tox) indicating use cases where data sovereignty and privacy are priorities. On the provider side, users integrating Volcengine's Doubao Seed model are experiencing friction due to raw XML tool-call leaks, which degrades the end-user experience. Additionally, the push for granular token tracking and prompt caching in open PRs reflects a user base highly conscious of LLM operational costs and observability.

### 8. Backlog Watch
Several items updated today are marked as `[stale]` or have been open for multiple weeks without merging, requiring maintainer review:
*   **PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)** (feat: add deltachat gateway) - Open since June 8.
*   **Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093)** (Feature: SimpleX or tox) - Open since June 10, marked stale.
*   **PR [#3156](https://github.com/sipeed/picoclaw/pull/3156)** (feat: emit per-turn LLM token usage) - Open since June 22, marked stale.
*   **Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153)** (Bug: Volcengine tool call leak) - Open since June 22, marked stale.

</details>