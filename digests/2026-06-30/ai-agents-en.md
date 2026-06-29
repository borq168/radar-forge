# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 354 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-29 22:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-06-30

## 1. Today's Activity Brief
Over the past 24 hours, OpenClaw recorded 354 updated issues (277 open/active, 77 closed) and 500 updated pull requests (443 open, 57 merged/closed). The project published `v2026.6.11-beta.2`, introducing enhanced channel control features like Slack relay mode and native Mattermost commands. Maintainer activity heavily focused on hardening the agent-core against unreadable tool descriptors, resolving subagent delivery cascades, and addressing provider-specific latency regressions.

## 2. Releases
- **v2026.6.11-beta.2**:
  - **Highlights**: Expanded channel control capabilities, including Slack relay mode, native Mattermost `/oc_queue` support, and per-DM model overrides to facilitate channel automation and tuning (#94707, #95546, #95120).

## 3. Project Progress
- **Merged/Closed PRs & Issues**:
  - Fixed Ollama Cloud tool calls failing on the second turn due to JSON object serialization in replay ([#96474](https://github.com/openclaw/openclaw/pull/96474)).
  - Resolved an issue where heartbeat-driven agent replies left `pendingFinalDelivery` stuck, blocking subsequent heartbeats ([#83184](https://github.com/openclaw/openclaw/issues/83184)).
  - Fixed the GitHub Copilot provider where a static default model list shadowed live entitlement discovery ([#88548](https://github.com/openclaw/openclaw/issues/88548)).
  - Addressed a memory search failure where `scopeHash` mismatched after a `--force` rebuild ([#91592](https://github.com/openclaw/openclaw/issues/91592)).
  - Closed a performance bug causing a silent ~48s gap between `embedded run done` and `lane task done` on Discord turns ([#85822](https://github.com/openclaw/openclaw/issues/85822)).
  - Required admin or explicit owner authority before Talk Voice persists a new voice selection to prevent unauthorized changes ([#97874](https://github.com/openclaw/openclaw/pull/97874)).

## 4. Community Hot Topics
- **Linux/Windows Clawdbot Apps** ([#75](https://github.com/openclaw/openclaw/issues/75)): With 110 comments and 81 👍, this long-standing issue requests feature-parity desktop apps for Linux and Windows, matching the existing macOS/iOS/Android nodes.
- **Session write-lock timeouts block subagent delivery lanes** ([#86538](https://github.com/openclaw/openclaw/issues/86538)): 18 comments. Users report that JSONL write-lock timeouts block main and subagent lanes, surfacing as delivery failures without sufficient owner diagnostics.
- **QA tool-defaults suite conflates Codex-native tools** ([#80319](https://github.com/openclaw/openclaw/issues/80319)): 17 comments. Clarifies that a perceived broad Codex runtime tool dropout was actually a QA harness/mock-provider architecture issue rather than a runtime failure.
- **Telegram messages silently dropped** ([#80520](https://github.com/openclaw/openclaw/issues/80520)): 11 comments. The gateway processes messages but fails to log or execute the `sendMessage` API call, resulting in lost replies and user confusion.

## 5. Bugs & Stability
*Severity: High (P1 / Message Loss / Regressions)*
- **Node v26 Gzip Regression**: Discord and other HTTP responses fail with `Unexpected token '\u001f'` because gzip is not decompressed under Node v26 on macOS ([#79752](https://github.com/openclaw/openclaw/issues/79752)).
- **DeepSeek Cache Hit Drop**: Cache hit rate fell below 10% after the 6.x upgrade due to boundary-aware caching breaking prefix matching ([#94518](https://github.com/openclaw/openclaw/issues/94518)).
- **Empty-Error-Retry Blocked**: Transient 5xx errors silently fail if any prior tool call in the session set `hadPotentialSideEffects` to true ([#97877](https://github.com/openclaw/openclaw/issues/97877)).
- **Subagent Completion Routing**: Subagent completion spawns a fresh run on the parent's route instead of resuming the yielded session ([#81490](https://github.com/openclaw/openclaw/issues/81490)).
- **Silent Drops on Quota Rejection**: Followup agents silently drop messages when hitting billing/quota limits, providing no user-facing notice ([#80700](https://github.com/openclaw/openclaw/issues/80700)).
- **CLI Cold-Start Regression**: CLI commands take ~14s to complete after the 2026.5.12 update on Linux ([#82070](https://github.com/openclaw/openclaw/issues/82070)).

*Severity: Medium (P2 / Provider & Tooling)*
- **Codex OAuth Latency**: Trivial `gpt-5.5` turns through the Codex/OAuth path spend ~28s after prompt submission ([#95121](https://github.com/openclaw/openclaw/issues/95121)).
- **macOS TCC Permission Spam**: The macOS app rebuilds `CLLocationManager` every second, causing continuous TCC permission requests ([#94147](https://github.com/openclaw/openclaw/issues/94147)).
- **Tool Output Degradation**: Normal tool text outputs degrade to `(see attached image)` placeholders in agent context ([#96857](https://github.com/openclaw/openclaw/issues/96857)).
- **MiniMax Usage Semantics**: Usage count field semantics are inverted, displaying % left as % used ([#81156](https://github.com/openclaw/openclaw/issues/81156)).

## 6. Feature Request Clusters
- **Channel & Gateway Architecture**:
  - Support for Telegram's new bot-to-bot and guest-bot modes released in May 2026 ([#79077](https://github.com/openclaw/openclaw/issues/79077)).
  - Request for a "Gateway-lite" mode that runs channel gateways, webhooks, and cron without loading the AI harness for deterministic deployments ([#86881](https://github.com/openclaw/openclaw/issues/86881)).
  - Addition of a `before_route_inbound_message` hook for pre-routing interception ([#81061](https://github.com/openclaw/openclaw/issues/81061)).
- **Plugin & Skill SDK**:
  - Exposing a stable public SDK surface for plugins operating on installed skills ([#81913](https://github.com/openclaw/openclaw/issues/81913)).
  - Adding a `setup.script` hook in SKILL.md frontmatter for post-install/update scripts ([#80213](https://github.com/openclaw/openclaw/issues/80213)).
- **Session & State Management**:
  - Adding companion-friendly SQLite transcript/session seams on top of the database-first runtime ([#79902](https://github.com/openclaw/openclaw/issues/79902)).
  - Implementing a JSONL session-replay harness for testing agents against real session histories ([#80176](https://github.com/openclaw/openclaw/issues/80176)).

## 7. User Feedback Summary
- **Pain Points**: Users are experiencing significant latency regressions, notably a 10-15s synchronous block during the embedded-run "auth" stage ([#75782](https://github.com/openclaw/openclaw/issues/75782)) and a 14s CLI cold-start overhead ([#82070](https://github.com/openclaw/openclaw/issues/82070)). Message loss remains a critical frustration, with Telegram messages dropping silently ([#80520](https://github.com/openclaw/openclaw/issues/80520)) and Discord guild replies entering repeated outbound loops ([#81484](https://github.com/openclaw/openclaw/issues/81484)). The Node v26 upgrade silently breaking gzip decompression has caused unexpected HTTP parsing failures for Discord users ([#79752](https://github.com/openclaw/openclaw/issues/79752)).
- **Use Cases**: Developers are building deterministic, non-AI deployments using OpenClaw purely for webhook and cron routing ([#86881](https://github.com/openclaw/openclaw/issues/86881)). There is also active development of companion apps that require direct SQLite access to session transcripts without scraping opaque blobs ([#79902](https://github.com/openclaw/openclaw/issues/79902)).

## 8. Backlog Watch
- **Linux/Windows Clawdbot Apps** ([#75](https://github.com/openclaw/openclaw/issues/75)): Opened on 2026-01-01, this remains the most commented and upvoted issue, highlighting a persistent gap in cross-platform desktop support.
- **Pre-routing Interception Hook** ([#81061](https://github.com/openclaw/openclaw/issues/81061)): Opened on 2026-05-12. The lack of a `before_route_inbound_message` hook limits channel bridging and proxying architectures, requiring maintainer product decisions.
- **CLI Subagent Metadata** ([#80286](https://github.com/openclaw/openclaw/issues/80286)): Opened on 2026-05-10. `sessions --json` missing `spawnedBy` and `status` fields blocks external tools from reasoning about subagent lineage.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: 2026-06-30

## 1. Daily Cross-Project Overview
On 2026-06-30, the tracked AI agent ecosystem exhibited highly asymmetric activity levels, with OpenClaw dominating in volume while NanoBot, Zeroclaw, and PicoClaw maintained focused, lower-volume development. OpenClaw was the only project to publish a new release, emphasizing channel control and gateway automation, whereas the other projects concentrated on advancing PR pipelines without new releases. Cross-project technical efforts heavily targeted LLM inference cost reduction, multi-agent/subagent routing complexities, and the expansion of decentralized or niche messaging gateways.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 354 | 500 | `v2026.6.11-beta.2` | High volume; focus on channel control, subagent routing, and provider latency regressions. |
| **Zeroclaw** | 50 | 50 | None | Moderate volume; focus on SOP event engine, WASM plugins, and reasoning model tool serialization. |
| **NanoBot** | 5 | 31 | None | Moderate PR activity; focus on security hardening, A2A delegation, and context compaction. |
| **PicoClaw** | 3 | 3 | None | Low volume; focus on decentralized messaging gateways and AWS Bedrock cost optimization. |

## 3. OpenClaw Compared With Peers
*   **Activity Volume:** OpenClaw’s daily footprint (354 issues, 500 PRs) dwarfs the other three projects combined. This indicates a significantly larger maintainer workforce and a broader user base generating diverse bug reports and feature requests.
*   **Technical Focus:** OpenClaw's development is heavily oriented toward broad channel integration (Slack, Mattermost, Telegram) and runtime hardening (Node v26 regressions, session write-locks). In contrast, peers are more specialized: Zeroclaw is building structured execution (SOP) and WASM isolation, NanoBot is optimizing context windows and local execution security, and PicoClaw is integrating privacy-centric gateways.
*   **Community Surface Area:** OpenClaw’s community reports a wide array of environmental regressions (CLI cold starts, macOS TCC spam, Discord gzip failures). Peer communities have tighter, more specific feedback loops, such as NanoBot users scrutinizing Docker image bloat and API costs, or Zeroclaw users reporting TUI keybinding friction and Telegram quickstart failures.

## 4. Shared Technical Focus Areas
*   **Inference Cost & Context Optimization:** Multiple projects are actively addressing token costs and context limits. NanoBot is developing standalone compaction modules for large tool outputs (#4581, #4588) and fixing prompt caching invalidation (#4222). PicoClaw is implementing AWS Bedrock prompt caching (#3163) and per-turn token telemetry (#3156). OpenClaw is addressing a DeepSeek cache hit drop regression (#94518).
*   **Multi-Agent & Subagent Routing:** The ecosystem is moving beyond simple agent spawning to complex routing. OpenClaw is fixing subagent completion routing (#81490) and session write-lock timeouts (#86538). NanoBot is introducing Agent-to-Agent (A2A) peer delegation with depth guards (#4571). Zeroclaw is proposing A2A discovery via `.well-known/agent-card.json` (#7218).
*   **Messaging Gateway Expansion:** All projects are expanding their communication surfaces. OpenClaw added Slack relay and Mattermost support in its latest release. Zeroclaw is adding native Inkbox and WhatsApp Web location support. PicoClaw is integrating decentralized protocols like DeltaChat, SimpleX, and Tox.

## 5. Differentiation Analysis
*   **Feature Focus:** OpenClaw focuses on enterprise-grade channel automation, session state management, and broad provider compatibility. Zeroclaw emphasizes deterministic, structured execution via its SOP event engine and secure WASM-based plugins. NanoBot targets lightweight, secure local execution with aggressive memory and context hygiene. PicoClaw focuses on privacy-centric messaging and strict cost/usage telemetry.
*   **Target Users:** OpenClaw serves power users and developers needing extensive channel bridging and complex subagent orchestration. Zeroclaw appeals to developers building structured workflows and secure, isolated tool environments. NanoBot serves cost-conscious developers needing secure local execution. PicoClaw attracts privacy-focused users and those integrating with decentralized networks.
*   **Technical Architecture:** OpenClaw utilizes a database-first runtime with JSONL/SQLite session seams. Zeroclaw is pushing a WASM-first plugin architecture and an event-driven SOP engine. NanoBot relies on a Python/Node.js stack with standalone compaction modules. PicoClaw operates as a lightweight gateway focusing on specific provider API integrations.

## 6. Community Activity Notes
*   **Tier 1 (High Activity):** **OpenClaw** (354 issues, 500 PRs, 1 release). The sheer volume of updates and the publication of a beta release demonstrate a large, highly active maintainer and user base.
*   **Tier 2 (Moderate Activity):** **Zeroclaw** (50 issues, 50 PRs) and **NanoBot** (5 issues, 31 PRs). Zeroclaw shows balanced issue/PR engagement. NanoBot shows high PR throughput relative to its low issue count, indicating active internal or contributor-driven development rather than high user-reported friction.
*   **Tier 3 (Low Activity):** **PicoClaw** (3 issues, 3 PRs). Minimal daily footprint, suggesting a smaller community or a project in a quiet maintenance and niche development phase.

## 7. Evidence-Backed Observations
1.  **Inference cost and context window management are immediate, shared priorities.**
    *Evidence:* NanoBot’s context compaction PRs (#4581, #4588) and prompt caching fixes (#4222); PicoClaw’s AWS Bedrock caching PR (#3163) and token telemetry (#3156); OpenClaw’s DeepSeek cache hit regression (#94518).
2.  **Multi-agent architectures are transitioning from simple background spawning to complex, guarded routing and delegation.**
    *Evidence:* OpenClaw fixing subagent completion routing (#81490) and session write-locks (#86538); NanoBot introducing A2A peer delegation with cross-delegation depth guards (#4571); Zeroclaw proposing A2A discovery standards (#7218).
3.  **Security and execution containment remain critical friction points in agent tooling.**
    *Evidence:* NanoBot patching an ExecTool workspace bypass (#4592) and MCP credential leakage (#4584); Zeroclaw enforcing payload safety ingress for its SOP engine (#8502) and pushing WASM-first plugins (#8135) for runtime isolation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## Today's Activity Brief
In the last 24 hours, NanoBot saw updates across 5 issues (3 open, 2 closed) and 31 pull requests (21 open, 10 merged/closed). Development activity is heavily concentrated on security hardening for execution and MCP integrations, context window optimization to reduce API token costs, and advancing multi-agent (A2A) collaboration capabilities. Several WebUI enhancements and provider configuration fixes are also actively in review.

## Project Progress
While no new releases were published, several foundational features and fixes advanced through the PR pipeline:
- **Multi-Agent & Subagents**: PR [#4571](https://github.com/HKUDS/nanobot/pull/4571) introduces native Agent-to-Agent (A2A) peer delegation with cross-delegation depth guards, moving beyond simple background spawning.
- **WebUI Enhancements**: PR [#4587](https://github.com/HKUDS/nanobot/pull/4587) adds Markdown export for WebUI sessions, and PR [#4586](https://github.com/HKUDS/nanobot/pull/4586) enables session timestamps by default.
- **Provider & Gateway**: PR [#4578](https://github.com/HKUDS/nanobot/pull/4578) adds provider-scoped proxy configurations for OpenAI-compatible clients. PR [#4502](https://github.com/HKUDS/nanobot/pull/4502) (gateway webhook triggers) was closed, and PR [#4570](https://github.com/HKUDS/nanobot/pull/4570) (per-subagent model override) was closed as a duplicate of broader A2A efforts.

## Community Hot Topics
- **Docker Image Bloat vs. "Ultra-lightweight" Claim**: Issue [#660](https://github.com/HKUDS/nanobot/issues/660) generated the most discussion (15 comments, 5 👍) regarding the contradiction between the project's "ultra-lightweight" description and its Dockerfile requiring both Python and Node.js. The issue is now closed.
- **Reasoning Effort Escalation**: Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) requests a feature to automatically escalate the `reasoningEffort` parameter for reasoning models based on task complexity, highlighting user interest in dynamic compute allocation.

## Bugs & Stability
- **[Security] ExecTool Workspace Bypass**: Issue [#4592](https://github.com/HKUDS/nanobot/issues/4592) reports that the shell command guard fails to extract absolute paths following an `=` sign (e.g., `curl --output=/etc/passwd`), bypassing workspace containment. Fix proposed in PR [#4594](https://github.com/HKUDS/nanobot/pull/4594).
- **[Security] MCP Credential Leakage**: PR [#4584](https://github.com/HKUDS/nanobot/pull/4584) fixes a vulnerability where MCP server URLs containing userinfo or query string tokens were being logged in plain text during connection/validation.
- **[Stability] Config Migration Crash**: PR [#4583](https://github.com/HKUDS/nanobot/pull/4583) addresses a crash in `load_config()` where tool-key migration fails if the `tools` or `exec` sections are explicitly set to null.
- **[Integration] WeChat Relay Bug**: PR [#4567](https://github.com/HKUDS/nanobot/pull/4567) fixes an issue where the WeChat channel silently dropped `streaming` configs, forcing a non-streaming API that broke upstream Anthropic-compatible relays dropping `tool_use` IDs.
- **[Performance] Prompt Caching Invalidation**: Issue [#4222](https://github.com/HKUDS/nanobot/issues/4222) (now closed) detailed how `max_messages` truncation and microcompacting continuously mutated the message prefix, defeating LLM prompt caching.

## Feature Request Clusters
- **Context & Cost Optimization**: PR [#4581](https://github.com/HKUDS/nanobot/pull/4581) and PR [#4588](https://github.com/HKUDS/nanobot/pull/4588) introduce standalone compaction modules to prune, compress, and process large tool outputs (JSON, diffs, logs) before injecting them into the context, directly addressing token costs.
- **Memory & Dream Agent Hygiene**: PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) adds a write guard to prevent the Dream agent from creating duplicate skill directories. PR [#4589](https://github.com/HKUDS/nanobot/pull/4589) updates the Dream prompt with memory hygiene directives to curb `MEMORY.md` bloat and prevent fact rot.
- **Execution Environments**: Issue [#4580](https://github.com/HKUDS/nanobot/issues/4580) requests native support and convenient wrappers for using `conda` virtual environments in subprocess execution, rather than relying on the default system path.

## User Feedback Summary
Users are highly sensitive to API costs and context window limits, driving multiple community PRs focused on aggressive token reduction and output compaction (`#4581`, `#4588`). There is also noticeable friction in initial provider setup; PR [#4573](https://github.com/HKUDS/nanobot/pull/4573) addresses user complaints that OAuth logins do not automatically set the authenticated provider as the main default, wasting setup time. Additionally, the community actively scrutinizes the project's deployment footprint, as evidenced by the pushback on Docker image dependencies (`#660`).

## Backlog Watch
- **Subagent Routing & Injection**: PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) (configurable model presets for subagents) and PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) (pending_queue for subagent result injection) have been open since June 11. These are critical for advanced multi-agent workflows and require maintainer review.
- **Reasoning Model Configuration**: Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) (automatic reasoning effort escalation) remains open and needs design input on how to implement dynamic effort scaling without breaking existing agent configurations.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-06-30

## 1. Today's Activity Brief
In the last 24 hours, the Zeroclaw repository saw high activity with 50 issues updated (43 open/active, 7 closed) and 50 pull requests updated (40 open, 10 merged/closed). No new releases were published. Development efforts are heavily concentrated on expanding the SOP (Standard Operating Procedure) event engine, advancing the WASM-first plugin architecture, and resolving critical provider/tool serialization bugs that affect reasoning models and native tool calling.

## 2. Releases
*None.*

## 3. Project Progress
Several notable PRs and issues were closed or merged today, advancing core runtime stability and channel integrations:
*   **SOP Engine Advancements**: Closed PR [#8502](https://github.com/zeroclaw-labs/zeroclaw/pull/8502) completed payload safety ingress for the SOP engine, and [#8493](https://github.com/zeroclaw-labs/zeroclaw/pull/8493) enforced step scope and mode events during live execution.
*   **Provider & Tool Fixes**: Closed PR [#8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441) fixed compatible providers (like Groq) rejecting native tool-result messages missing a `name` field. Closed issue [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327) resolved a bug where `[IMAGE:data:...]` markers in tool results were sent as plain text, inflating token counts.
*   **Channel & Routing Fixes**: Closed issue [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) fixed cron and heartbeat tasks from sending the literal "NO_REPLY" sentinel text to channels. Closed issue [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) fixed inbound images being silently routed to fallback providers instead of the configured `vision_provider`.
*   **Documentation**: Closed PR [#8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436) updated runtime docs to clarify the `max_history_messages` hard cap alongside whole-turn trimming.

## 4. Community Hot Topics
The most discussed items today highlight user friction with provider integrations and architectural RFCs for future capabilities:
*   **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (11 comments)**: An S1 bug where using the `kimi-code` provider in streaming chat calls results in a 400 Bad Request due to missing `reasoning_content` when thinking is enabled.
*   **[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (9 comments)**: A P1 bug where the system prompt tells reasoning models "No tools are available" despite native/MCP tools being present in the request. This mismatch affects multiple entry points (channels, gateway, WebSocket).
*   **[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6 comments)**: An RFC proposing "Computer-use" support, allowing agents to capture screenshots and send mouse/keyboard events to control the local desktop GUI.
*   **[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) & [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) (5 comments each)**: Discussions around misleading/unreachable ZeroCode TUI keybindings on macOS, and an RFC for A2A (Agent-to-Agent) discovery via `.well-known/agent-card.json` for multi-agent installs.

## 5. Bugs & Stability
*   **S1 - Workflow Blocked**:
    *   [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600): Kimi-code provider streaming fails with 400 Bad Request.
    *   [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505): Telegram channel cannot be configured; `zeroclaw channels doctor` claims channels are not set up even after quickstart configuration.
*   **P1 - High Priority**:
    *   [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756): Native/MCP tools are unavailable on OpenAI Responses/reasoning and Anthropic turns depending on the model.
    *   [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054): System prompt tool-availability mismatch across entry points. (Note: PR [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) is open to centralize deferred-MCP access policy to address surface 1(b) of this issue).
    *   [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312): `fill-translations` leak-repair leaves stale map entries that re-ship leaked text.
*   **S2 - Degraded Behavior**:
    *   [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410): Channel tasks lack a first-class intentional no-reply outcome, causing visible empty responses when conditions aren't met.
    *   [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904): `always-inject` SKILL.md frontmatter no longer works in compact prompt mode.

## 6. Feature Request Clusters
*   **WASM & Plugin Architecture**: A major push to make WASM the default plugin runtime. Active RFCs and trackers include [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) (Wasm-first plugin runtime), [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) (OCI-compliant registries for plugin storage), [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) (hybrid skills + WASM tools), and tracker [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314).
*   **SOP (Standard Operating Procedure) Engine**: Heavy feature work on the SOP event fan-in and execution. Open PRs include [#8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504) (GitHub channel with SOP ingress), [#8506](https://github.com/zeroclaw-labs/zeroclaw/pull/8506) (consume CAS run claims), and [#8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461) (filesystem SOP event source).
*   **New Channels & Integrations**: PR [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) adds a native Inkbox channel (email, SMS, voice, iMessage). PR [#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427) adds native location pin support for WhatsApp Web. PR [#8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508) adds MCP resources-as-context and named-prompt rendering.
*   **Observability & CI Security**: RFC [#8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462) proposes runtime policies for OTel LLM and tool content. Issues [#8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056) and [#8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057) outline required PR gates and scheduled jobs for CodeQL, cargo audit, and Trivy.

## 7. User Feedback Summary
*   **Onboarding & Configuration Friction**: Users are reporting complete blockers when setting up Telegram via the quickstart/CLI, with the daemon failing to recognize the configuration ([#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)).
*   **UI/UX Discoverability**: macOS users note that ZeroCode TUI help and keybindings advertise actions that are unreachable or misleading in the current input state ([#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)).
*   **Channel Noise**: Users expressed frustration over automated cron/heartbeat tasks and conditional channel tasks spamming chats with literal "NO_REPLY" strings or empty messages when no action was required ([#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128), [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)).
*   **Group Chat Context**: WhatsApp Web users requested the ability to store unaddressed group messages as passive context without triggering an agent turn, which was addressed and closed today ([#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)).

## 8. Backlog Watch
*   **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**: *Audit and recover 153 commits lost in bulk revert c3ff635.* Created on April 24, this technical debt item tracks bug fixes and features that were accidentally rolled back during a master branch restoration. It requires maintainer attention to cherry-pick lost work.
*   **[#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)**: *Nextcloud Talk use correct bot message API.* Created on April 27, this S3 bug notes that the wrong bot message API URL is being constructed, causing response failures.
*   **[#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557)**: *Reconcile runtime model switching with provider structure for v0.8.0.* Created on May 10, this enhancement is critical before v0.8.0 hardens provider/config semantics, as model-switch behavior currently spans multiple disjointed surfaces.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-30

## 1. Today's Activity Brief
On 2026-06-30, PicoClaw recorded moderate activity with 3 issues and 3 pull requests updated in the last 24 hours. No new releases were published. The day's updates center on community-driven efforts to expand messaging gateway integrations, optimize AWS Bedrock inference costs, and improve LLM token telemetry. Additionally, one stale bug report regarding legacy iOS Safari compatibility was closed, while discussions continue around agent execution reliability with specific regional LLM providers.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
No pull requests were merged today. One issue, [#3090](https://github.com/sipeed/picoclaw/issues/3090), detailing a UI panel failure on Safari for iOS versions below 16.4, was closed. The three open pull requests (#3063, #3156, #3163) remain under review or in progress, focusing on new gateway integrations, token usage telemetry, and AWS Bedrock prompt caching.

## 4. Community Hot Topics
*   **Messaging Gateway Integrations:** Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) (4 comments, 1 👍) requests support for SimpleX, Wire, or Tox gateways. This aligns with PR [#3063](https://github.com/sipeed/picoclaw/pull/3063), which proposes adding a DeltaChat gateway, indicating active community interest in expanding decentralized and privacy-focused messaging protocols.
*   **AWS Bedrock Cost Optimization:** PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) introduces prompt caching via explicit cache points for the AWS Bedrock Converse API. This highlights a contributor-driven effort to reduce inference costs by caching system prompts and tools, billing reads at approximately 0.1× the standard input rate.

## 5. Bugs & Stability
*   **LLM Tool Call Parsing Failure (Medium Severity):** Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) reports that when using PicoClaw v0.2.8 with Volcengine's `doubao-seed-2.0-pro` model, tool calls occasionally leak to the user as raw `<seed:tool_call>` XML text instead of being executed by the agent. This disrupts the agent workflow. No fix PR is currently linked.
*   **Legacy iOS Safari UI Bug (Closed):** Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090) detailed a login and panel rendering failure on Safari for iOS versions below 16.4 (tested on PicoClaw v0.2.9). This issue has been closed, suggesting it was either resolved, deemed out-of-scope for legacy browsers, or addressed in a recent update.

## 6. Feature Request Clusters
*   **Decentralized/Alternative Messaging Gateways:** Users are requesting support for privacy-centric networks like SimpleX, Wire, and Tox ([#3093](https://github.com/sipeed/picoclaw/issues/3093)). Concurrently, a community PR is actively adding DeltaChat support ([#3063](https://github.com/sipeed/picoclaw/pull/3063)).
*   **LLM Telemetry and Cost Management:** Contributors are pushing for better visibility and control over LLM usage. PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) adds per-turn input/output token usage emission to the Pico channel for downstream tracking, while PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) implements AWS Bedrock prompt caching to lower API billing costs.

## 7. User Feedback Summary
*   **Agent Execution Reliability:** Users integrating specific LLM providers, such as Volcengine's Doubao Seed, are experiencing friction when the agent fails to parse and execute tool calls, exposing raw XML to the end-user instead of performing the requested action ([#3153](https://github.com/sipeed/picoclaw/issues/3153)).
*   **Mobile Accessibility:** There is ongoing feedback regarding the web panel's compatibility with older mobile environments, specifically Safari on iOS < 16.4, though the related issue was recently closed without detailed public resolution notes ([#3090](https://github.com/sipeed/picoclaw/issues/3090)).
*   **Cost and Usage Tracking:** Contributors operating PicoClaw at scale are actively seeking ways to monitor exact token consumption per turn and reduce API costs through provider-specific features like Bedrock caching ([#3156](https://github.com/sipeed/picoclaw/pull/3156), [#3163](https://github.com/sipeed/picoclaw/pull/3163)).

## 8. Backlog Watch
*   **PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) (DeltaChat Gateway):** Opened on June 8 by @trufae, this feature PR has been open for over three weeks and requires maintainer review to determine if the new gateway integration aligns with the project's architectural roadmap.
*   **Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) (Volcengine Tool Call Leak):** Marked as stale, this bug affects agent execution reliability for Volcengine users and needs triage to determine if a parser update, regex fallback, or provider-specific workaround is required.
*   **PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) (Token Usage Telemetry):** Also marked as stale, this PR by @loafoe provides valuable telemetry for downstream consumers and awaits maintainer feedback on the implementation details and message schema.

</details>