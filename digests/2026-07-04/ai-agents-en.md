# OpenClaw Ecosystem Digest 2026-07-04

> Issues: 232 | PRs: 500 | Projects covered: 4 | Generated: 2026-07-04 00:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-07-04

## 1. Today's Activity Brief
Over the last 24 hours, the OpenClaw repository recorded substantial activity with 232 issues updated (146 open/active, 86 closed) and 500 pull requests updated (455 open, 45 merged/closed). Development efforts are heavily concentrated on refactoring core storage mechanisms to SQLite, hardening multi-agent session reliability, and addressing critical message delivery and context compaction bugs. No new releases were published today, as maintainers and contributors focus on stabilizing the `2026.6.x` branch and resolving foundational runtime regressions.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
While 45 PRs were merged or closed today, several notable open and closed PRs highlight ongoing structural and stability improvements:
- **UI & HTTP Context Fixes**: Multiple PRs addressing broken "Copy path" functionality on plain-HTTP deployments were closed/merged, including [#98764](https://github.com/openclaw/openclaw/pull/98764) and [#98780](https://github.com/openclaw/openclaw/pull/98780), ensuring clipboard operations work outside secure contexts.
- **Storage Refactor**: PR [#98236](https://github.com/openclaw/openclaw/pull/98236) proposes flipping sessions and transcripts to SQLite storage, replacing legacy JSON/JSONL files to improve runtime performance and data integrity.
- **Security & Lifecycle**: PR [#99530](https://github.com/openclaw/openclaw/pull/99530) introduces approval requirements for OpenClaw lifecycle commands executed via `exec`, closing a security boundary gap.
- **Provider Failover**: PR [#99164](https://github.com/openclaw/openclaw/pull/99164) aims to classify Anthropic and OpenAI safety refusals as failover-eligible, preventing silent agent loop failures when a primary model refuses a prompt.
- **Build & Refactoring**: Closed PR [#99678](https://github.com/openclaw/openclaw/pull/99678) fixed build issues by forwarding default exports through stable runtime aliases, while [#99715](https://github.com/openclaw/openclaw/pull/99715) consolidated image data URL formatting across media-generation providers.

## 4. Community Hot Topics
- **Tool Call Text Leakage**: Issue [#25592](https://github.com/openclaw/openclaw/issues/25592) (33 comments) highlights a major UX and security flaw where internal agent processing text (e.g., error handling, narration) between tool calls leaks into external messaging channels like Slack and iMessage.
- **Codex Worker Hardening**: Issue [#99551](https://github.com/openclaw/openclaw/issues/99551) (14 comments) tracks a sprint to harden Codex/OpenClaw worker failure modes and prevent runaway processes without exposing private transcripts.
- **Context Compaction Timeouts**: Issue [#92043](https://github.com/openclaw/openclaw/issues/92043) (11 comments) discusses how the 180s compaction timeout causes legitimately long summarizations to fail identically every turn, breaking long-context sessions and causing infinite retry loops.
- **Multi-Agent Collaboration RFC**: Issue [#35203](https://github.com/openclaw/openclaw/issues/35203) (9 comments) proposes capability profiling, shared blackboards, and token cost governance to address information silos and uncontrolled token consumption in multi-agent setups.

## 5. Bugs & Stability
**Critical / Crash-Loop**
- **Node 26 Gateway Crash**: [#99263](https://github.com/openclaw/openclaw/issues/99263) - Gateway crashes with `ERR_INVALID_STATE` on Node 26 when handling inbound image media due to the garbage collector prematurely closing a `FileHandle`.
- **Missing Reentrancy Guard**: [#98416](https://github.com/openclaw/openclaw/issues/98416) - `v2026.6.11` dist is missing a reentrancy guard, causing reply session initialization conflicts and state corruption.
- **Vertex AI Regression**: [#38327](https://github.com/openclaw/openclaw/issues/38327) - Regression in `2026.3.2` causing "Cannot convert undefined or null to object" when using `google-vertex/gemini-3.1-pro-preview`.

**High Severity / Message Loss**
- **Stranded Final Messages**: [#85714](https://github.com/openclaw/openclaw/issues/85714) - Agent's final `agent_message` gets stranded when the LLM forgets to call the configured delivery tool, with no fallback from `task_complete`.
- **WebChat/iOS Delivery Failure**: [#97983](https://github.com/openclaw/openclaw/issues/97983) - iOS/WebChat messages append to the transcript but fail to trigger or deliver assistant replies.
- **Tool Output Degradation**: [#96857](https://github.com/openclaw/openclaw/issues/96857) & [#99241](https://github.com/openclaw/openclaw/issues/99241) - Normal tool text outputs randomly degrade to `(see attached image)` placeholders, blinding the agent to command outputs.

**Medium Severity / Regressions**
- **Empty Tool Outputs**: [#98528](https://github.com/openclaw/openclaw/issues/98528) (Closed) - Tool outputs returning empty after the first call per turn in `2026.6.11`.
- **Stale Module Imports**: [#92241](https://github.com/openclaw/openclaw/issues/92241) - Gateway holds stale module import paths after an update/rollback, silently dropping inbound messages.

## 6. Feature Request Clusters
- **Multi-Agent & Memory Management**: Users are requesting deeper multi-agent orchestration. Issue [#35203](https://github.com/openclaw/openclaw/issues/35203) proposes shared blackboards and layered memory, while [#55401](https://github.com/openclaw/openclaw/issues/55401) requests per-agent plugin configuration overrides to prevent global config collisions in multi-agent deployments.
- **UI/UX & Accessibility**: Issue [#75947](https://github.com/openclaw/openclaw/issues/75947) calls for a UI quality update based on UX scoring, noting the config pages are dense and hard to navigate. PR [#94813](https://github.com/openclaw/openclaw/pull/94813) addresses some of this by improving session key display for long identifiers in the Control UI.
- **Provider & Auth Resilience**: Issue [#47910](https://github.com/openclaw/openclaw/issues/47910) requests provider fallback by failure class to quarantine auth-broken providers, avoiding latency wasted on known-bad auth states during failover chains.

## 7. User Feedback Summary
Users are experiencing significant friction with **message delivery and context management** in long-running or multi-tool sessions. The leakage of internal tool-call text to external channels ([#25592](https://github.com/openclaw/openclaw/issues/25592)) is a major UX and privacy concern for enterprise users. Additionally, users report that aggressive or failing context compaction ([#92043](https://github.com/openclaw/openclaw/issues/92043), [#78562](https://github.com/openclaw/openclaw/issues/78562)) and tool outputs degrading into unreadable image placeholders ([#96857](https://github.com/openclaw/openclaw/issues/96857)) severely disrupt agent autonomy. Mobile and WebChat users also note unreliable reply triggering ([#97983](https://github.com/openclaw/openclaw/issues/97983)), indicating a reliability gap between local CLI execution and remote channel integrations.

## 8. Backlog Watch
- **Stale Module Imports After Rollback**: Issue [#92241](https://github.com/openclaw/openclaw/issues/92241) highlights a critical operational bug where the gateway holds stale module import paths after an update/rollback, silently dropping inbound messages. This requires urgent maintainer attention for deployment reliability.
- **Hardcoded Sandbox Limits**: Issue [#40880](https://github.com/openclaw/openclaw/issues/40880) notes that the sandbox media staging limit (`MEDIA_MAX_BYTES`) is hardcoded at 5 MB and not user-configurable, blocking legitimate large-file workflows.
- **Telegram Quote/Reply Context**: Issue [#88032](https://github.com/openclaw/openclaw/issues/88032) requests making Telegram quote/reply context a first-class durable contract rather than a split prompt/runtime patch, addressing long-standing integration drift that requires local patching to function.

---

## Cross-Ecosystem Comparison

## 1. Daily Cross-Project Overview
Across the four tracked AI agent projects, development activity on July 4, 2026, was heavily concentrated on stabilizing long-running sessions, refining multi-agent orchestration, and resolving external channel integration failures. OpenClaw dominated in raw development volume with extensive core refactoring and bug fixing, while PicoClaw was the only project to publish a new release (v0.3.1). NanoBot and Zeroclaw focused on specialized architectural enhancements, specifically targeting session-scoped memory management, out-of-process plugin execution, and visual standard operating procedure (SOP) authoring.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Factual Activity Note |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 232 (146 open, 86 closed) | 500 (455 open, 45 merged/closed) | No release | Heavy refactoring (SQLite storage), multi-agent reliability, and message delivery bug fixes. |
| **NanoBot** | 29 (27 open, 2 closed) | 38 (32 open, 6 merged/closed) | No release | Focus on context/memory management, Anthropic OAuth integration, and MCP tool stability. |
| **Zeroclaw** | 36 (32 open, 4 closed) | 50 (44 open, 6 merged/closed) | No release | Advancing WASM plugin architecture, visual SOP authoring, and governance RFCs. |
| **PicoClaw** | 2 (2 open) | 17 (12 open, 5 merged/closed) | **v0.3.1 released** | Addressing WhatsApp/Matrix connection stability and expanding channel routing capabilities. |

## 3. OpenClaw Compared With Peers
OpenClaw exhibits a significantly larger community surface area and development velocity, processing over 700 combined issues and PRs compared to the 30-80 range seen in NanoBot, Zeroclaw, and PicoClaw. Technically, OpenClaw is deeply focused on foundational runtime regressions, core storage refactoring (migrating sessions to SQLite via [#98236](https://github.com/openclaw/openclaw/pull/98236)), and fixing critical message delivery leaks. In contrast, peers are targeting more specialized architectural layers: Zeroclaw is building out-of-process WASM plugin hosts and visual SOPs, NanoBot is refining session-scoped memory and "Dream" self-improvement systems, and PicoClaw is strictly focused on channel bridge stability and basic multi-agent routing.

## 4. Shared Technical Focus Areas
*   **Multi-Agent Orchestration & Routing**: All four projects are actively developing or fixing inter-agent communication. OpenClaw is proposing shared blackboards and token governance ([#35203](https://github.com/openclaw/openclaw/issues/35203)), NanoBot is requesting native A2A peer orchestration ([#4179](https://github.com/HKUDS/nanobot/issues/4179)), Zeroclaw is defining "Work Lanes" ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)), and PicoClaw is building an Agent Collaboration Bus with isolated mailboxes ([#2937](https://github.com/sipeed/picoclaw/pull/2937)).
*   **Context Window & Memory Management**: Agents are struggling with long sessions across the board. OpenClaw faces infinite retry loops from compaction timeouts ([#92043](https://github.com/openclaw/openclaw/issues/92043)), NanoBot users report the agent forgetting its own questions during consolidation ([#4044](https://github.com/HKUDS/nanobot/issues/4044)), and Zeroclaw is adding UI visibility and CLI flags specifically for cron job memory management ([#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676)).
*   **Channel Integration Stability**: Multiple projects are troubleshooting silent disconnects and message delivery failures in external IM channels. OpenClaw is fixing WebChat/iOS delivery failures ([#97983](https://github.com/openclaw/openclaw/issues/97983)), NanoBot is addressing Telegram long polling hangs ([#3626](https://github.com/HKUDS/nanobot/issues/3626)), and PicoClaw is resolving WhatsApp websocket drops and Matrix sync loop exits ([#3178](https://github.com/sipeed/picoclaw/issues/3178)).

## 5. Differentiation Analysis
*   **OpenClaw** operates as a high-volume, general-purpose runtime focused on enterprise-grade stability, addressing deep runtime regressions (Node 26 crashes, reentrancy guards) and strict security boundaries (lifecycle command approvals via [#99530](https://github.com/openclaw/openclaw/pull/99530)).
*   **Zeroclaw** differentiates through structured workflow automation, emphasizing visual SOP authoring ([#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)), bounded autonomous "Goal Mode" ([#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393)), and secure out-of-process WASM plugin execution.
*   **NanoBot** targets personal and team assistant use cases with a strong emphasis on continuous self-improvement (the "Dream" system), session-scoped memory for shared IM channels, and mobile-first WebUI/PWA experiences.
*   **PicoClaw** functions primarily as a lightweight, channel-agnostic routing bridge, prioritizing resilient connections to diverse messaging platforms (WhatsApp, Matrix, DeltaChat, Simplex) over complex internal reasoning architectures.

## 6. Community Activity Notes
*   **Tier 1 (High Volume)**: OpenClaw (232 issues, 500 PRs). Demonstrates massive concurrent development, high community reporting volume, and extensive backlog churn.
*   **Tier 2 (Moderate Volume)**: Zeroclaw (36 issues, 50 PRs) and NanoBot (29 issues, 38 PRs). Show steady, active development with focused PR merges, architectural RFC discussions, and targeted issue tracking.
*   **Tier 3 (Low Volume / Release Focus)**: PicoClaw (2 issues, 17 PRs). Exhibits lower daily issue/PR churn but achieved a concrete deployment milestone with the v0.3.1 release.

## 7. Evidence-Backed Observations
1.  **Silent Channel Disconnects are a Pervasive Pain Point**: Multiple projects (OpenClaw's WebChat/iOS failures, NanoBot's Telegram hanging, PicoClaw's WhatsApp/Matrix drops) are actively fixing bugs where IM integrations silently fail or hang without triggering process restarts. This indicates a shared technical struggle with long-running websocket and polling reliability in external messaging APIs.
2.  **Multi-Agent Architectures are Transitioning from Ad-Hoc to Structured**: Rather than simple prompt chaining, projects are formalizing multi-agent setups with strict boundaries. OpenClaw is proposing shared blackboards and token governance, Zeroclaw is defining "Work Lanes", NanoBot is requesting native A2A peer orchestration, and PicoClaw is building structured message envelopes and isolated mailboxes.
3.  **Provider Failover and Auth Resilience Require Better Handling**: OpenClaw is classifying safety refusals as failover-eligible ([#99164](https://github.com/openclaw/openclaw/pull/99164)) and requesting quarantine for auth-broken providers ([#47910](https://github.com/openclaw/openclaw/issues/47910)), while PicoClaw is introducing configurable default fallback chains in the Web UI ([#3200](https://github.com/sipeed/picoclaw/pull/3200)). This shows a shared need to handle unreliable upstream LLM APIs and rate limits gracefully.
4.  Regarding a unified ecosystem shift toward local/on-device model execution, there is **no clear cross-project signal** in today's data; discussions and PRs remain heavily focused on cloud provider integrations (e.g., Anthropic OAuth in NanoBot, OpenRouter in Zeroclaw) and API failover chains.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### Today's Activity Brief
In the last 24 hours, the NanoBot project saw 29 updated issues (27 open, 2 closed) and 38 updated pull requests (32 open, 6 closed/merged), with no new releases published. Development efforts heavily focused on memory and context management, provider integrations (Anthropic OAuth, OpenCode), and stability fixes for MCP tool execution and Windows gateway processes. Community engagement remains high around long-term memory consolidation, multi-agent orchestration, and mobile WebUI improvements.

### Project Progress
- **Provider & Auth**: Closed PR [#4632](https://github.com/HKUDS/nanobot/pull/4632) introduces an Anthropic OAuth provider for Claude subscription users. PR [#4687](https://github.com/HKUDS/nanobot/pull/4687) updates the stale default Anthropic model to `claude-sonnet-4-6`, and PR [#4685](https://github.com/HKUDS/nanobot/pull/4685) fixes a 400 error by omitting the temperature parameter for `sonnet-5`.
- **CLI & WebUI**: PR [#4688](https://github.com/HKUDS/nanobot/pull/4688) adds a safe `nanobot webui` first-run launcher command. PRs [#4396](https://github.com/HKUDS/nanobot/pull/4396) and [#4691](https://github.com/HKUDS/nanobot/pull/4691) implement and polish optional plugin-style controls for heavier chat and provider features.

### Community Hot Topics
- **Context & Memory Loss**: Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) (6 comments) and [#4307](https://github.com/HKUDS/nanobot/issues/4307) (4 comments) highlight severe context window pressure where the agent forgets its own questions or wipes delivery messages during post-turn consolidation. Users need more robust context eviction strategies that preserve conversational continuity.
- **Tool Call Parsing**: Issue [#4061](https://github.com/HKUDS/nanobot/issues/4061) (6 comments) discusses OpenAI-compatible providers emitting tool calls as plain text markup instead of structured JSON, causing tool dispatch failures.
- **Session-Level Memory**: Issue [#3744](https://github.com/HKUDS/nanobot/issues/3744) (5 comments) requests architectural solutions for generating `USER.md` and `MEMORY.md` when multiple IM users share a single agent instance, indicating a need for multi-tenant or session-scoped memory.

### Bugs & Stability
- **MCP Crashes (High)**: Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) reports the Nanobot process crashing immediately when an MCP tool call returns an error or empty data. Fix PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) wraps MCP result rendering to contain malformed tool results. Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) also notes gateway-level crashes during MCP reconnects.
- **Windows Gateway (Medium)**: Issue [#4511](https://github.com/HKUDS/nanobot/issues/4511) details inconsistencies when restarting the gateway with the `--background` flag on Windows. Fix PR [#4690](https://github.com/HKUDS/nanobot/pull/4690) handles the Windows stop fallback to prevent `OSError: [WinError 87]`.
- **Context Continuity (Medium)**: Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) reports short-term memory loss where the conversational thread snaps. Fix PR [#4280](https://github.com/HKUDS/nanobot/pull/4280) adjusts context building to preserve message history continuity under pressure.
- **Subagent Cronjobs (Medium)**: Issue [#4290](https://github.com/HKUDS/nanobot/issues/4290) reports cronjobs ending early when a subagent is spawned, preventing the main agent from processing the subagent's result.
- **Telegram Hanging (Low/Medium)**: Issue [#3626](https://github.com/HKUDS/nanobot/issues/3626) reports Telegram long polling silently hanging due to network issues, leaving the bot alive but unresponsive to inbound updates.

### Feature Request Clusters
- **Memory & Dream System**: Users request a read-only `search_history` tool ([#4440](https://github.com/HKUDS/nanobot/issues/4440), PR [#4439](https://github.com/HKUDS/nanobot/pull/4439)), gating archive facts with provenance context (PR [#4621](https://github.com/HKUDS/nanobot/pull/4621)), and preventing the Dream system from creating duplicate skills ([#4467](https://github.com/HKUDS/nanobot/issues/4467), PR [#4554](https://github.com/HKUDS/nanobot/pull/4554)).
- **Multi-Agent Orchestration**: Requests include allowing subagents to access MCP services ([#4166](https://github.com/HKUDS/nanobot/issues/4166)), aggregating subagent notifications to prevent LLM hallucinations ([#4279](https://github.com/HKUDS/nanobot/issues/4279)), and native Agent-to-Agent (A2A) peer orchestration ([#4179](https://github.com/HKUDS/nanobot/issues/4179)).
- **Channels & Integrations**: PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) adds Mattermost channel support. Issue [#4431](https://github.com/HKUDS/nanobot/issues/4431) requests a heartbeat-specific model override to reduce API costs.
- **WebUI & Mobile**: Requests for WebUI cron job management ([#4218](https://github.com/HKUDS/nanobot/issues/4218)), PWA support with mobile swipe gestures ([#4479](https://github.com/HKUDS/nanobot/issues/4479)), and improved mobile responsive layouts ([#4693](https://github.com/HKUDS/nanobot/issues/4693)).

### User Feedback Summary
- **Pain Points**: Users are frustrated by the agent's "short-term memory loss" and context wiping during long sessions, which breaks conversational continuity. The `exec` tool's hardcoded deny patterns for dangerous commands lack a user authorization override mechanism ([#3887](https://github.com/HKUDS/nanobot/issues/3887)), limiting advanced administrative use cases. Mobile WebUI users report horizontal clipping and poor viewport constraints ([#4693](https://github.com/HKUDS/nanobot/issues/4693)).
- **Use Cases**: Running multiple isolated instances on a single machine organized by folder ([#4390](https://github.com/HKUDS/nanobot/issues/4390)), deploying the agent in team environments via shared IM channels ([#3744](https://github.com/HKUDS/nanobot/issues/3744)), and utilizing the Dream system for continuous self-improvement without generating redundant skill files.
- **Satisfaction/Dissatisfaction**: There is notable dissatisfaction with the Dream system's "hunger problem" and lack of real-time learning ([#3973](https://github.com/HKUDS/nanobot/issues/3973)), as well as the WebUI lacking basic cron job management controls compared to the CLI ([#4218](https://github.com/HKUDS/nanobot/issues/4218)).

### Backlog Watch
- [#3626](https://github.com/HKUDS/nanobot/issues/3626) **Telegram long polling silently hangs** (Created: 2026-05-05) - A persistent network handling issue where the bot stops receiving updates without crashing.
- [#3744](https://github.com/HKUDS/nanobot/issues/3744) **session级别MEMORY功能请求** (Created: 2026-05-11) - Architectural question on handling multi-user session memory in shared IM channels.
- [#3887](https://github.com/HKUDS/nanobot/issues/3887) **Add user authorization mechanism for dangerous command detection** (Created: 2026-05-18) - Long-standing request to balance safety guards with user overrides in the `exec` tool.
- [#3973](https://github.com/HKUDS/nanobot/issues/3973) **Dream System: Hunger Problem & Lack of Real-time Learning** (Created: 2026-05-23) - Core limitations in the self-improvement mechanism relying solely on `history.jsonl`.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-07-04

## 1. Today's Activity Brief
In the last 24 hours, the Zeroclaw repository saw 36 issues updated (32 open/active, 4 closed) and 50 pull requests updated (44 open, 6 merged/closed). Development efforts heavily focused on advancing the plugin architecture (including out-of-process WASM execution and git-catalog skill routing), refining Standard Operating Procedure (SOP) visual authoring, and addressing critical memory and stability regressions. Governance and architecture RFCs regarding Work Lanes, OIDC authentication, and autonomous Goal Mode continue to drive active discussion and implementation. No new releases were published today.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Project Progress
**Closed Issues:**
- [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542): Consecutive OOM in WSL2 (S0 severity) was closed, with related memory-growth and backoff fixes addressed in separate trackers.
- [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140): Hybrid skills + WASM tools plugin capability closed.
- [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756): Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns closed.
- [#8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554): Security hardening of the skill zip extractor against zip-bomb inflation closed.

**Active PRs Advancing Features:**
- [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393): Implementation of durable "Goal Mode" for bounded autonomous session work on the task control plane.
- [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590): Visual SOP authoring surfaces with channel fan-in, tests, and documentation.
- [#8661](https://github.com/zeroclaw-labs/zeroclaw/pull/8661): Prototype for executing WASM plugins out-of-process via a `zeroclaw-plugin-host` sidecar.
- [#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638): Replaces the built-in ClawHub source with a general git-catalog `--skill` selector.

## 4. Community Hot Topics
- **RFC: Work Lanes, Board Automation, and Label Cleanup ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))**: (13 comments) Active governance discussion on routing work without manual overhead and cleaning up labels for the 0.8.x rollout.
- **Windows Test Failures ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))**: (8 comments) Highlights 74 failing tests on Windows 11 (Simplified Chinese, code page 936) due to Unix-only test commands, path semantics, and console encoding.
- **RFC: OIDC authentication provider support ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))**: (7 comments) Tracking the pluggable authentication-provider work targeted for v0.9.0.
- **RFC: Goal mode for bounded autonomous session work ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303))**: (3 comments) Defining a first-class durable mode for pursuing user objectives until completion, pause, or budget exhaustion.

## 5. Bugs & Stability
- **SIGSEGV in skill-review fork ([#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654))**: (P1/High) The background skill-review fork panics with an out-of-range slice index, taking down the entire agent process (SIGSEGV) after a tool-heavy turn.
- **MCP/tool-schema cloning OOM ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642))**: (P1/High) Unbounded RSS growth in the agent loop driven by MCP/tool-schema cloning (split from the WSL2 OOM tracker).
- **Malformed native tool-call arguments ([#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675))**: (P1/High) Unvalidated JSON arguments sent verbatim to OpenRouter/OpenAI-format providers cause 400 errors and empty replies.
- **Headless SOP steps marked Completed without executing ([#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631))**: (P1/High) Deterministic SOPs started by headless triggers record false-green audit trails and block real driven runs during the cooldown window.
- **SOP Approval Gate Bypass ([#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678))**: (P2/Medium) `advance_step` lacks a run-status guard, allowing a driver to bypass an approval gate via `sop_advance`.
- **SSE Parser EOF Truncation ([#8663](https://github.com/zeroclaw-labs/zeroclaw/pull/8663))**: (Fix PR Open) Guards SSE parsers against treating socket EOF as a clean end of stream, preventing mid-response truncation.
- **WhatsApp Web device linking broken ([#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627))**: (P1/High) Native Web mode device linking is blocked by WhatsApp's new passkey/SHORTCAKE companion-linking gate.

## 6. Feature Request Clusters
- **Cron Job Memory Management**:
  - Issues [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) and [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) request exposing the `uses_memory` flag for cron jobs in the CLI, tools, and web gateway UI.
  - PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) implements the CLI, tool, and gateway API exposure for this flag.
- **Plugin System & WASM Execution**:
  - Issue [#8636](https://github.com/zeroclaw-labs/zeroclaw/issues/8636) tracks follow-ups from third-party plugin validation.
  - PRs [#8641](https://github.com/zeroclaw-labs/zeroclaw/pull/8641) and [#8662](https://github.com/zeroclaw-labs/zeroclaw/pull/8662) fix feature-graph config seeding and degraded-section visibility.
- **Context Window Visibility**:
  - PR [#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) adds a model context window usage bar to the ZeroCode TUI, gateway chat, and CLI interactive mode.

## 7. User Feedback Summary
- **Cross-Platform Friction**: Windows users face significant friction with 74 test failures related to path semantics and console encoding ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)), indicating CI/CD gaps for non-Linux environments.
- **Web Dashboard & UX Inconsistencies**: Users report that configured SOPs are not detected by the agent runtime in the web dashboard chat session ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)). Additionally, the reload banner shows persistent drift for environment-overridden secrets, causing confusion in multi-agent deployments ([#8645](https://github.com/zeroclaw-labs/zeroclaw/issues/8645)).
- **ZeroCode TUI Quirks**: Minor but annoying UX bugs include code-block copying including Markdown fences ([#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664)), transcript highlights not dismissing on blank side clicks ([#8652](https://github.com/zeroclaw-labs/zeroclaw/issues/8652)), and completed Code turns showing no visible assistant output ([#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644)).

## 8. Backlog Watch
- **RFC: Work Lanes, Board Automation, and Label Cleanup ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))**: Created May 20. Highly active (13 comments), needs continued governance alignment as the 0.8.x rollout progresses.
- **WhatsApp Web Linking Blocker ([#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627))**: Created July 2, currently `status:blocked`. Requires investigation into WhatsApp's new passkey/SHORTCAKE gate, which completely breaks native Web mode device linking.
- **Reconcile cargo-audit ignores and wasmtime-wasi CVEs ([#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519))**: Created June 30. 22 RustSec advisories are failing the CI `cargo audit` step due to drift between `audit.toml` and `deny.toml`. Needs security/maintainer attention to remediate or explicitly ignore CVEs.
- **Harden /model --agent scope with per-sender authorization ([#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044))**: Created June 20. A security gap where any sender who can message the agent can change the effective model for all users of that agent without per-sender authorization checks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-07-04

## 1. Today's Activity Brief
Over the last 24 hours, PicoClaw saw moderate activity with 2 issues updated (both remaining open) and 17 pull requests updated (12 open, 5 closed/merged). A new release, v0.3.1, was published, incorporating new provider support and store lock assertions. Development focus is currently heavily directed toward improving connection stability for long-running channel integrations (WhatsApp, Matrix) and expanding multi-agent and channel routing capabilities.

## 2. Releases
**v0.3.1**
*   **Changes**: This release merges the NearAI provider integration ([#2917](https://github.com/sipeed/picoclaw/pull/2917)), adds type assertions for codex store locks ([#3053](https://github.com/sipeed/picoclaw/pull/3053)), and includes an additional merged PR ([#30](https://github.com/sipeed/picoclaw/pull/30)).
*   **Migration/Breaking Changes**: None explicitly detailed in the release notes.

## 3. Project Progress
Five pull requests were closed or merged today, reflecting both shipped features and backlog cleanup:
*   **Shipped in v0.3.1**: NearAI provider support ([#2917](https://github.com/sipeed/picoclaw/pull/2917)) and codex store lock type assertions ([#3053](https://github.com/sipeed/picoclaw/pull/3053)).
*   **Backlog Cleanup (Closed as Stale/Superseded)**:
    *   [#3223](https://github.com/sipeed/picoclaw/pull/3223) (agent clear routing) was closed in favor of the updated [#3224](https://github.com/sipeed/picoclaw/pull/3224).
    *   [#3128](https://github.com/sipeed/picoclaw/pull/3128) (ignoring `resp.Body.Close()` errors in web search providers) was closed.
    *   [#3142](https://github.com/sipeed/picoclaw/pull/3142) (clearing `ForUser` in sub-turn `ToolResult` to prevent duplicate messages) was closed.
    *   [#3063](https://github.com/sipeed/picoclaw/pull/3063) (DeltaChat gateway) was closed, likely superseded by the ongoing DeltaChat refactor in [#3222](https://github.com/sipeed/picoclaw/pull/3222).
    *   [#3156](https://github.com/sipeed/picoclaw/pull/3156) (emitting per-turn LLM token usage) was closed.

## 4. Community Hot Topics
*   **WhatsApp Websocket Stability**: Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) highlights silent websocket disconnects. This has triggered two distinct fix PRs: [#3179](https://github.com/sipeed/picoclaw/pull/3179) (focusing on async dispatch and read deadlines) and [#3220](https://github.com/sipeed/picoclaw/pull/3220) (implementing exponential backoff reconnection).
*   **Agent Collaboration Bus**: PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) proposes a major architectural addition for inter-agent communication, introducing per-agent mailboxes, isolated session threads, and structured message envelopes.
*   **Model Fallback Chains**: PR [#3200](https://github.com/sipeed/picoclaw/pull/3200) introduces a configurable default fallback chain for models in the Web UI, allowing users to reorder and persist fallback models via the backend API.

## 5. Bugs & Stability
*   **High Severity (Connection Drops)**:
    *   **WhatsApp**: Websocket bridge silently disconnects after 2-3 days without recovery ([#3178](https://github.com/sipeed/picoclaw/issues/3178)). Fix PRs: [#3179](https://github.com/sipeed/picoclaw/pull/3179), [#3220](https://github.com/sipeed/picoclaw/pull/3220).
    *   **Matrix**: Sync loop exits permanently on network disruption or homeserver restart; systemd `Restart=on-failure` does not trigger because the main process stays alive ([#3219](https://github.com/sipeed/picoclaw/pull/3219)). Fix PR: [#3219](https://github.com/sipeed/picoclaw/pull/3219).
*   **Medium Severity (Routing & Config)**:
    *   **Agent Routing**: The `/clear` command incorrectly clears the default agent session instead of the currently routed non-default agent session ([#3224](https://github.com/sipeed/picoclaw/pull/3224)).
    *   **Config Migration**: v2 to v3 config migration fails with an `unknown field(s): build_info` error because `legacyDiagnosticConfig` lacks the `BuildInfo` field ([#3218](https://github.com/sipeed/picoclaw/pull/3218)).
    *   **Android**: Service fails to launch on Android despite full permissions, and users cannot change the storage path from settings ([#3182](https://github.com/sipeed/picoclaw/issues/3182)).
*   **Low Severity (Testing/Reverts)**:
    *   Reverted Windows sandbox filesystem path handling tests due to a log import error in the OpenAI compatibility provider ([#3221](https://github.com/sipeed/picoclaw/pull/3221)).

## 6. Feature Request Clusters
*   **Channel Integrations & Access Control**:
    *   Addition of a Simplex channel type ([#3193](https://github.com/sipeed/picoclaw/pull/3193)).
    *   Refactoring and cleaning up the DeltaChat implementation, dropping legacy features and password-based email configs ([#3222](https://github.com/sipeed/picoclaw/pull/3222)).
    *   Adding role-based access control (`allow_roles`) for Discord, allowing interaction based on role IDs without requiring privileged intents ([#3217](https://github.com/sipeed/picoclaw/pull/3217)).
*   **Provider Compatibility**:
    *   Recovering Volcengine Doubao Seed `<seed:tool_call>` XML blocks from OpenAI-compatible responses and stripping them from user-visible content ([#3165](https://github.com/sipeed/picoclaw/pull/3165)).

## 7. User Feedback Summary
*   **Pain Points**: Users deploying PicoClaw in Docker (e.g., with Go 1.25.11 and deepseek-v4-pro) report frustration with WhatsApp websocket timeouts that require manual intervention ([#3178](https://github.com/sipeed/picoclaw/issues/3178)). Android users are blocked from using the app due to service launch failures and rigid path settings ([#3182](https://github.com/sipeed/picoclaw/issues/3182)).
*   **Use Cases**: The presence of multiple agent routing bugs ([#3224](https://github.com/sipeed/picoclaw/pull/3224)) and the Agent Collaboration Bus PR ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) indicate active use cases involving complex, multi-agent workflows where session isolation and inter-agent messaging are required.

## 8. Backlog Watch
*   **Stale Bot / Backlog Cleanup**: Several PRs closed today ([#3128](https://github.com/sipeed/picoclaw/pull/3128), [#3142](https://github.com/sipeed/picoclaw/pull/3142), [#3156](https://github.com/sipeed/picoclaw/pull/3156)) and both open issues ([#3178](https://github.com/sipeed/picoclaw/issues/3178), [#3182](https://github.com/sipeed/picoclaw/issues/3182)) carry the `[stale]` tag. Maintainers should verify if the underlying problems addressed by the closed stale PRs (specifically duplicate message delivery in spawn sub-turns and per-turn LLM token usage tracking) still require resolution.
*   **Unanswered Issues**: Both [#3178](https://github.com/sipeed/picoclaw/issues/3178) (WhatsApp timeout) and [#3182](https://github.com/sipeed/picoclaw/issues/3182) (Android launch failure) have been open since 2026-06-26 with minimal comments (1 and 2, respectively) and no official maintainer assignment or response visible in the summaries.

</details>