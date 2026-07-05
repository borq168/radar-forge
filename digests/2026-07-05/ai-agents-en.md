# OpenClaw Ecosystem Digest 2026-07-05

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-07-05 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-07-05

## 1. Today's Activity Brief
Over the past 24 hours, the OpenClaw repository recorded high activity with 500 issues updated (460 open/active, 40 closed) and 500 pull requests updated (348 open, 152 merged/closed). Development and community discussions heavily focused on stabilizing multi-agent orchestration, resolving channel-specific media and encoding regressions, and addressing gateway memory leaks. No new releases were published during this period.

## 2. Releases
None.

## 3. Project Progress
Several notable PRs were closed or merged to address runtime, gateway, and TUI stability:
- [#100047](https://github.com/openclaw/openclaw/pull/100047) (Closed): Fixed `truncateCloseReason` dropping partial UTF-8 code points, preventing mojibake in WebSocket close reasons.
- [#100114](https://github.com/openclaw/openclaw/pull/100114) (Closed): Handled metadata-free final replies in the QA channel.
- [#89078](https://github.com/openclaw/openclaw/pull/89078) (Closed): Superseded by [#100123](https://github.com/openclaw/openclaw/pull/100123), which implements a queue-mode busy guard and queues prompts in the TUI while the agent is busy, resolving blocked user inputs.
- [#100026](https://github.com/openclaw/openclaw/pull/100026) (Closed): Repaired session cleanup and allowed staged media through symlinked directories.
- [#100083](https://github.com/openclaw/openclaw/pull/100083) (Closed): Chore update for oxlint tsgolint dependencies.

## 4. Community Hot Topics
- **Subagent Orchestration Failures**: [#44925](https://github.com/openclaw/openclaw/issues/44925) (20 comments) highlights silent losses of subagent completions without retries or notifications, pointing to a critical need for robust task state management and timeout handling in multi-agent setups.
- **Multi-Encoding File Handling**: [#48788](https://github.com/openclaw/openclaw/issues/48788) (18 comments) proposes a centralized filename encoding utility to handle Shift-JIS, EUC-KR, and GB18030 across channel adapters, driven by Feishu Chinese filename misreads.
- **Context Window Optimization**: [#22438](https://github.com/openclaw/openclaw/issues/22438) (17 comments) requests tiered bootstrap file loading to prevent wasting LLM tokens on unreferenced workspace files during sub-agent and cron sessions.
- **ClawHub Ecosystem Friction**: [#50090](https://github.com/openclaw/openclaw/issues/50090) (15 comments) discusses the gap between the promise of community skill development and the current practical friction in publishing, maintaining, and discovering skills.

## 5. Bugs & Stability
*Severity: P0*
- [#99594](https://github.com/openclaw/openclaw/issues/99594): Cloud instance incorrectly shows "out of credits" despite a $109 positive balance and active Pro plan, blocking all chat attempts.

*Severity: P1*
- [#43367](https://github.com/openclaw/openclaw/issues/43367): Multi-agent orchestration instability, including concurrent `agents add` config overwrites and session-lock failures.
- [#54155](https://github.com/openclaw/openclaw/issues/54155): Gateway memory leak growing from 389MB to 14.7GB over 4 days of continuous operation.
- [#44905](https://github.com/openclaw/openclaw/issues/44905): Discord channel leaks internal LLM tool-call traces (e.g., `NO_REPLY`, raw JSON arguments) to end-users.
- [#49876](https://github.com/openclaw/openclaw/issues/49876): Cron sessions deliver hallucinated output instead of failing cleanly when tool calls fail.
- [#43661](https://github.com/openclaw/openclaw/issues/43661): Session hangs indefinitely and triggers duplicate message sends when context compaction times out.
- [#22676](https://github.com/openclaw/openclaw/issues/22676): Signal daemon `stop()` race condition on SIGUSR1 restart causes orphaned processes and send failures.
- [#47975](https://github.com/openclaw/openclaw/issues/47975) & [#52249](https://github.com/openclaw/openclaw/issues/52249): Subagent sessions persist after completion, leaving main/parent sessions unresponsive or stuck until manual UI refresh.
*Note: PR [#100118](https://github.com/openclaw/openclaw/pull/100118) attempts to fix model fallback timeouts, and [#100119](https://github.com/openclaw/openclaw/pull/100119) addresses inbound media download failures across multiple channels.*

## 6. Feature Request Clusters
- **Security & Sandboxing**: Requests for mechanical pre-response enforcement hooks ([#13583](https://github.com/openclaw/openclaw/issues/13583)) and filesystem sandboxing configurations ([#7722](https://github.com/openclaw/openclaw/issues/7722)) to restrict agent access in high-stakes environments.
- **Channel & Media Enhancements**: Telegram Business Bot support ([#20786](https://github.com/openclaw/openclaw/issues/20786)), WhatsApp message backfill after reconnection ([#50093](https://github.com/openclaw/openclaw/issues/50093)), and MathJax/LaTeX rendering in the Control UI ([#42840](https://github.com/openclaw/openclaw/issues/42840)).
- **Architecture & Runtime**: Proposals for a Distributed Agent Runtime separating the control plane from agent compute ([#42026](https://github.com/openclaw/openclaw/issues/42026)), and a Multi-Session Architecture with shared LLM and isolated sessions ([#48874](https://github.com/openclaw/openclaw/issues/48874)).
- **Cost & Observability**: Per-agent cost budget enforcement at the gateway level ([#42475](https://github.com/openclaw/openclaw/issues/42475)) and missing trace context in plugin hooks for distributed tracing ([#50291](https://github.com/openclaw/openclaw/issues/50291)).

## 7. User Feedback Summary
- **Pain Points**: Users report severe frustration with multi-agent orchestration, citing silent failures, lost subagent completions, and stuck parent sessions. Long-running gateway instances suffer from memory leaks and context compaction timeouts that lead to infinite retry loops and duplicate messages.
- **Use Cases**: Operators are deploying OpenClaw for parallel coding batches, automated cron jobs, and multi-channel routing (Telegram, Feishu, Discord, WhatsApp, Signal).
- **Dissatisfaction**: Security-conscious users are concerned about raw GitHub issue bodies being injected directly into sub-agent prompts without sanitization ([#45740](https://github.com/openclaw/openclaw/issues/45740)) and internal tool-call traces leaking into public Discord channels. Additionally, users noted sloppy regressions, such as hardcoded local workspace paths (`/Users/wangtao`) being merged into the codebase ([#51429](https://github.com/openclaw/openclaw/issues/51429)).

## 8. Backlog Watch
- [#7722](https://github.com/openclaw/openclaw/issues/7722) (Created Feb 3): Filesystem Sandboxing Config. Critical for enterprise and secure deployments; currently lacks maintainer direction.
- [#13583](https://github.com/openclaw/openclaw/issues/13583) (Created Feb 10): Pre-response enforcement hooks (hard gates). Necessary for quant/finance and security workflows where soft prompt rules are insufficient.
- [#20786](https://github.com/openclaw/openclaw/issues/20786) (Created Feb 19): Telegram Business Bot support. High community interest (6 👍) but remains open.
- [#42026](https://github.com/openclaw/openclaw/issues/42026) (Created Mar 10): RFC for Distributed Agent Runtime. Major architectural proposal requiring maintainer review and product decisions.
- [#33413](https://github.com/openclaw/openclaw/issues/33413) (Created Mar 3): Slack tool-level progress in assistant thread status. Highly requested UX improvement to replace static "is typing..." indicators.

---

## Cross-Ecosystem Comparison

## 1. Daily Cross-Project Overview
On 2026-07-05, the tracked AI agent ecosystem exhibited varied development volumes, with OpenClaw and Zeroclaw driving high-volume architectural and stability updates, while NanoBot and PicoClaw focused on targeted protocol and channel fixes. No project published a new release today. Cross-project engineering efforts heavily targeted multi-agent orchestration stability, Model Context Protocol (MCP) reliability, and channel-specific integration friction.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Factual Activity Note |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (460 open, 40 closed) | 500 (348 open, 152 merged/closed) | None | High-volume stability, orchestration, and gateway memory fixes. |
| **NanoBot** | 3 (1 open, 2 closed) | 12 (5 open, 7 merged/closed) | None | Targeted MCP execution, provider concurrency, and WebUI fixes. |
| **Zeroclaw** | 50 (39 open, 11 closed) | 50 (48 open, 2 merged/closed) | None | "Goal mode" architecture refactoring and provider bug resolution. |
| **PicoClaw** | 4 (3 open, 1 closed) | 7 (5 open, 2 closed/merged) | None | Agent routing fixes and Matrix encryption modernization proposals. |

## 3. OpenClaw Compared With Peers
OpenClaw dominates in raw activity volume, processing 10x to 100x more issues and PRs than its peers, reflecting a significantly larger community surface area and maintainer throughput. Technically, OpenClaw is deeply focused on complex multi-agent orchestration, gateway memory management, and broad multi-channel media encoding. In contrast, Zeroclaw is prioritizing autonomous "Goal mode" architecture and WASM plugin distribution; NanoBot is refining MCP tool execution and WebUI UX; and PicoClaw is addressing edge-case platform deployments (Android, Matrix cryptography). OpenClaw also surfaces a higher density of P0/P1 severity bugs today, particularly regarding cloud billing logic and long-running gateway memory leaks, indicating the strain of operating at a larger scale.

## 4. Shared Technical Focus Areas
*   **Multi-Agent & Subagent Management**: OpenClaw is tackling subagent orchestration failures and session persistence bugs ([#44925](https://github.com/openclaw/openclaw/issues/44925), [#47975](https://github.com/openclaw/openclaw/issues/47975)). NanoBot is proposing configurable MCP inheritance for specialist subagents ([#4697](https://github.com/HKUDS/nanobot/pull/4697)), and Zeroclaw is advancing trusted goal tools and delegation boundaries ([#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)).
*   **Channel Integration & Cryptography**: PicoClaw and Zeroclaw are both addressing Matrix channel integrations (PicoClaw focusing on `vodozemac` encryption migration [#3088](https://github.com/sipeed/picoclaw/issues/3088), Zeroclaw on single-message progress drafts [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)). OpenClaw and NanoBot are expanding broader channel support (Telegram/WhatsApp vs. Mattermost/DingTalk).
*   **Context & Memory Optimization**: OpenClaw is exploring tiered bootstrap file loading to save tokens ([#22438](https://github.com/openclaw/openclaw/issues/22438)), Zeroclaw is fixing cron jobs that incorrectly recall memory context ([#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695)), and PicoClaw recently closed an agent memory loss bug ([#3150](https://github.com/sipeed/picoclaw/issues/3150)).

## 5. Differentiation Analysis
*   **OpenClaw**: Targets high-throughput, multi-channel enterprise/prosumer deployments requiring robust multi-agent orchestration, strict security sandboxing, and complex media/encoding handling.
*   **Zeroclaw**: Focuses on autonomous execution ("Goal mode"), advanced observability (OTel trace correlation), and extensible architectures (OCI-compliant WASM plugins), appealing to developers building complex, self-directed agent workflows.
*   **NanoBot**: Prioritizes developer experience and UX, focusing on smooth WebUI streaming, MCP protocol stability, and seamless local/cloud provider token management.
*   **PicoClaw**: Appears tailored for lightweight, edge, or mobile deployments (evidenced by Android service issues) with a strong emphasis on secure, decentralized messaging channels like Matrix.

## 6. Community Activity Notes
*   **Tier 1 (High Volume)**: OpenClaw (500 issues/500 PRs) and Zeroclaw (50 issues/50 PRs) demonstrate active, high-throughput development cycles with large open backlogs and frequent maintainer triage.
*   **Tier 2 (Moderate/Low Volume)**: NanoBot (3 issues/12 PRs) and PicoClaw (4 issues/7 PRs) show steady but lower-volume maintenance. PicoClaw, in particular, has several community PRs marked as stale awaiting review.
*   **Releases**: All four projects are in active development or stabilization phases today, with zero new releases published across the ecosystem.

## 7. Evidence-Backed Observations
1.  **Subagent Delegation is a Primary Scaling Bottleneck**: OpenClaw's P1 bugs regarding silent subagent failures and stuck parent sessions, combined with NanoBot's P1 feature proposal for subagent MCP inheritance and Zeroclaw's "Goal mode" delegation boundaries, indicate that managing child-agent state, tool access, and timeouts is a shared ecosystem challenge.
2.  **MCP (Model Context Protocol) is Critical but Fragile**: NanoBot spent significant effort fixing MCP tool execution crashes and reconnect panics ([#4652](https://github.com/HKUDS/nanobot/issues/4652), [#4302](https://github.com/HKUDS/nanobot/issues/4302)), while Zeroclaw resolved a major S1 blocker where MCP tools were missing from TUI sessions ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)), highlighting the protocol's central but unstable role in current agent toolchains.
3.  **Security and Sandboxing are Evolving from Soft to Hard Gates**: OpenClaw users are requesting mechanical pre-response enforcement hooks and filesystem sandboxing ([#13583](https://github.com/openclaw/openclaw/issues/13583), [#7722](https://github.com/openclaw/openclaw/issues/7722)), while Zeroclaw is patching SOP engine logic flaws that bypass approval gates ([#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)). This shows a shift toward strict, deterministic security controls in agent runtimes.
4.  **Provider Fragmentation Requires Constant Maintenance**: Provider-specific serialization and context bugs remain a continuous tax on maintainers. Zeroclaw fixed context compression and empty tool list errors for MiniMax and vLLM ([#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361), [#7862](https://github.com/zeroclaw-labs/zeroclaw/issues/7862)), while NanoBot patched a GitHub Copilot token race condition ([#4677](https://github.com/HKUDS/nanobot/issues/4677)), demonstrating that multi-provider support requires continuous, granular patching.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### Today's Activity Brief
On 2026-07-05, NanoBot recorded moderate development activity with 3 issues updated (1 open, 2 closed) and 12 pull requests updated (5 open, 7 merged/closed). Maintainer and contributor efforts heavily focused on stabilizing MCP (Model Context Protocol) tool execution, resolving provider token race conditions, and refining WebUI rendering for narrow viewports. No new releases were published today.

### Project Progress
Seven pull requests were merged or closed today, advancing several stability and configuration fixes:
- **[MCP Stability]** [#4666](https://github.com/HKUDS/nanobot/pull/4666): Contained malformed MCP tool results and marked timeouts/cancellations as structured errors, preventing process crashes.
- **[Provider Stability]** [#4684](https://github.com/HKUDS/nanobot/pull/4684): Guarded GitHub Copilot token refresh with `asyncio.Lock` to prevent race conditions under concurrent requests.
- **[Core Stability]** [#4653](https://github.com/HKUDS/nanobot/pull/4653): Restored crash-durable atomic writes in the pairing module by properly fsyncing temporary files and parent directories.
- **[Gateway/Channels]** [#4690](https://github.com/HKUDS/nanobot/pull/4690): Handled Windows stop fallback to prevent tracebacks when `CTRL_BREAK_EVENT` is rejected. [#4646](https://github.com/HKUDS/nanobot/pull/4646): Ensured the DingTalk stream task is properly canceled and closed during shutdown.
- **[Configuration]** [#4692](https://github.com/HKUDS/nanobot/pull/4692): Serialized `model_presets` as `modelPresets` (camelCase) to align with documentation while maintaining backward compatibility.
- **[Maintenance]** [#4695](https://github.com/HKUDS/nanobot/pull/4695): Routine upstream merge.

### Community Hot Topics
- **MCP Execution Crashes**: Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) (3 comments) highlighted that the nanobot process crashes immediately when an MCP tool call returns an error or empty data. This was addressed and closed via PR [#4666](https://github.com/HKUDS/nanobot/pull/4666).
- **Subagent MCP Inheritance**: PR [#4697](https://github.com/HKUDS/nanobot/pull/4697) is a highly active P1 feature proposal. Currently, spawned subagents only get built-in tools and must re-implement database/search access via raw shell calls. This PR introduces configurable MCP inheritance so specialist subagents can securely inherit the main agent's MCP servers.

### Bugs & Stability
**High Severity (P1 / Crashes & Data Loss)**
- **MCP Tool Exceptions**: Process crashed directly on MCP tool call exceptions ([#4652](https://github.com/HKUDS/nanobot/issues/4652)). *Status: Fixed by [#4666](https://github.com/HKUDS/nanobot/pull/4666).*
- **Pairing Atomic Writes**: A regression caused `_write_text_atomic` to lose crash durability ([#4653](https://github.com/HKUDS/nanobot/pull/4653)). *Status: Fixed.*

**Medium Severity (P2 / Concurrency & UX)**
- **Copilot Token Race Condition**: Concurrent chat calls triggered a check-then-act race condition when refreshing expired GitHub Copilot tokens ([#4677](https://github.com/HKUDS/nanobot/issues/4677)). *Status: Fixed by [#4684](https://github.com/HKUDS/nanobot/pull/4684).*
- **WebUI Viewport Clipping**: On mobile-width browsers, the conversation column and composer were forced wider than `100vw`, causing horizontal scrolling and clipped output ([#4694](https://github.com/HKUDS/nanobot/pull/4694)). *Status: Open.*
- **Windows Gateway Stop**: `nanobot gateway stop` crashed with `OSError: [WinError 87]` on Windows when the background process rejected the break event ([#4690](https://github.com/HKUDS/nanobot/pull/4690)). *Status: Fixed.*
- **DingTalk Shutdown**: The DingTalk stream task was not properly stopped during shutdown, swallowing `CancelledError` ([#4646](https://github.com/HKUDS/nanobot/pull/4646)). *Status: Fixed.*

### Feature Request Clusters
- **Subagent Tool Access**: Users and contributors requested better tool access for subagents without relying on raw shell calls. PR [#4697](https://github.com/HKUDS/nanobot/pull/4697) proposes config-driven MCP inheritance for specialist subagents.
- **Channel Integrations**: PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) adds Mattermost channel support, featuring real-time WebSocket messaging with auto-reconnect and progressive streaming edits.
- **WebUI Streaming UX**: PR [#4696](https://github.com/HKUDS/nanobot/pull/4696) introduces a buffered rAF scheduler for smooth Markdown streaming reveal, adding subtle animations and punctuation pauses to improve readability. PR [#4698](https://github.com/HKUDS/nanobot/pull/4698) standardizes `oauth_cli_kit` error messages across CLI and WebUI.

### User Feedback Summary
- **Frustration with MCP Instability**: Users reported that nanobot completely crashes rather than gracefully handling MCP tool errors, empty data, or session reconnects.
- **Mobile WebUI Layout Issues**: Users accessing the WebUI on narrow or mobile viewports experienced broken layouts, where long markdown or links forced horizontal scrolling and clipped the input composer.
- **Windows Process Management**: Windows users encountered raw Python tracebacks instead of clean shutdown messages when stopping the gateway service.

### Backlog Watch
- **[Bug] Gateway crashes after MCP reconnect** ([#4302](https://github.com/HKUDS/nanobot/issues/4302)): Open since June 11. The gateway crashes when attempting to reconnect to an MCP server after a session termination. This remains unresolved and requires maintainer attention, especially given the related fixes to MCP tool exceptions in #4666.
- **[Enhancement] Mattermost channel support** ([#4459](https://github.com/HKUDS/nanobot/pull/4459)): Open since June 22. A comprehensive PR adding Mattermost integration that is awaiting review/merge.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**1. Today's Activity Brief**
On 2026-07-05, the Zeroclaw project recorded 50 updated issues (39 open/active, 11 closed) and 50 updated pull requests (48 open, 2 merged/closed). Development efforts were heavily concentrated on breaking down the "Goal mode" architecture into reviewable pull requests, resolving provider-specific serialization and context bugs, and improving the ZeroCode TUI experience. No new releases were published during this period.

**2. Releases**
No new releases were published in the last 24 hours.

**3. Project Progress**
While 2 PRs were merged/closed (specific titles not detailed in the daily snapshot), 11 issues were closed, resolving several critical workflow blockers and degraded behaviors:
*   **Provider & Runtime Fixes**: Closed [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) (context compression dropping tool calls for MiniMax), [#7862](https://github.com/zeroclaw-labs/zeroclaw/issues/7862) (OpenAI-compat providers sending empty tool lists causing vLLM 400 errors), and [#8359](https://github.com/zeroclaw-labs/zeroclaw/issues/8359) (memory embeddings failing to refresh after provider profile changes).
*   **Core & Gateway**: Closed [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (MCP tools missing from TUI sessions despite gateway visibility) and [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) (Scheduled Jobs edit interface returning API 422 errors).
*   **Localization & Docs**: Closed [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917) (untranslated `file_download` tool strings), [#7139](https://github.com/zeroclaw-labs/zeroclaw/issues/7139) (missing i18n keys for chat toolbar buttons), and [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) (SOP audit memory keys acting as a silent no-op).
*   **Plugin System**: Closed [#8636](https://github.com/zeroclaw-labs/zeroclaw/issues/8636) (follow-ups from third-party validation of plugin authoring guides).

**4. Community Hot Topics**
*   **[RFC] Work Lanes, Board Automation, and Label Cleanup ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))**: With 13 comments, this accepted governance RFC is actively rolling out. It aims to streamline issue routing and reduce manual maintainer overhead as the project scales.
*   **[Tracker] Goal mode implementation split stack ([#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681))**: Generating 7 comments, this tracker coordinates the migration of the massive `feat/goal-mode` branch into smaller, reviewable PRs, indicating a major architectural push for autonomous agent capabilities.
*   **MCP tools missing from TUI sessions ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193))**: Previously the hottest issue with 15 comments regarding an S1 workflow blocker where TUI sessions failed to receive discovered MCP tools. This was closed today, indicating the fix has been integrated.

**5. Bugs & Stability**
*   **S1/P1 (Critical/High Severity)**:
    *   [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654): `skill-review` fork panics with an out-of-range slice index, causing a daemon SIGSEGV (crash) after tool-heavy turns.
    *   [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675): Malformed native tool-call arguments are sent unvalidated to OpenRouter/OpenAI-format providers, resulting in 400 errors and empty replies.
    *   [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678): Security/Logic flaw in the SOP engine where `advance_step` lacks a run-status guard, allowing a driver to bypass an approval gate via `sop_advance`.
*   **S2/P2 (Degraded Behavior)**:
    *   [#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) & [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832): The outbound leak detector misclassifies legitimate generated filenames/paths as high-entropy secrets and redacts them. *Note: Fix PR [#8723](https://github.com/zeroclaw-labs/zeroclaw/pull/8723) is currently open to preserve generated file references.*
    *   [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695): Cron jobs still recall memory context even when the `uses_memory = false` flag is set.
    *   [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615): Compatible providers silently delete content due to unconditional `<think>` tag stripping.
    *   **ZeroCode TUI Bugs**: [#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664) (Copy button includes Markdown fences), [#8646](https://github.com/zeroclaw-labs/zeroclaw/issues/8646) (Logs detail pane hides event attributes), and [#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644) (Code turns complete with no visible assistant output).

**6. Feature Request Clusters**
*   **Goal Mode & Autonomous Execution**: A massive cluster of PRs is advancing the "Goal" architecture, including [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) (goal controller and verifier), [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) (trusted goal tools and delegation boundaries), and [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) (channel goal command admission).
*   **Channel Integrations**: PR [#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) adds an OpenAI Bridge channel for OpenAI-compatible HTTP endpoints. PR [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) introduces single-message progress drafts for Matrix, and PR [#8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) adds a Gitea/Forgejo provider for the Git forge channel.
*   **Observability**: Issue [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) requests turn-level OpenTelemetry trace correlation to nest LLM, tool, and memory spans under a single turn trace.
*   **WASM Plugin Distribution**: RFC [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) proposes using OCI-compliant container registries (via `wasm-pkg-client` and `cosign`) to replace JSON index files for WASM plugin storage and discovery.

**7. User Feedback Summary**
*   **Provider Quirks & Compatibility**: Users continue to hit edge cases with specific LLM providers. MiniMax users faced broken multi-turn tool loops due to context compression ([#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)), while OpenRouter users experienced silent failures from malformed JSON arguments ([#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)). PR [#8721](https://github.com/zeroclaw-labs/zeroclaw/pull/8721) also addresses Anthropic Claude 4+ safety refusals returning HTTP 200 but empty content.
*   **Security False Positives**: The high-entropy leak detector is causing friction by redacting legitimate MD5-hashed or randomly generated filenames (e.g., WeChat media files), breaking downstream tool usage ([#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832), [#8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722)).
*   **TUI/ZeroCode UX Friction**: Users reported annoyance with the ZeroCode TUI copying raw Markdown fences when using the copy button ([#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664)) and confusion when code turns complete successfully but yield no visible assistant output ([#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644)).

**8. Backlog Watch**
*   **[OPEN] Add config option to disable LeakDetector high-entropy token redaction ([#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832))**: Opened on 2026-03-27. Despite 4 comments and a related new issue today (#8722), a configuration toggle to disable this heuristic remains unimplemented.
*   **[OPEN] Turn-level OTel trace correlation ([#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641))**: Opened on 2026-05-13. A highly desired observability feature for debugging complex agent turns that has seen discussion but lacks a merged implementation.
*   **[OPEN] RFC: OCI-Compliant Container Registries as the Plugin Storage ([#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497))**: Opened on 2026-06-11. A major architectural proposal for the WASM plugin system that is currently marked as `status:blocked`.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest - 2026-07-05

## 1. Today's Activity Brief
In the last 24 hours, PicoClaw saw moderate activity with 4 issues updated (3 open, 1 closed) and 7 pull requests updated (5 open, 2 closed/merged). Development efforts primarily focused on fixing agent session routing, addressing Matrix channel encryption errors, and proposing runtime configuration overrides for individual agents. No new releases were published, and several community-contributed chore and localization PRs remain in a stale state awaiting review.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Two pull requests were closed/merged today, addressing agent session management and test stability:
*   **[CLOSED] fix(agent): clear routed agent session ([#3224](https://github.com/sipeed/picoclaw/pull/3224))**: Fixed a bug where the `/clear` command would incorrectly clear the default agent's session instead of the currently routed non-default agent's session when multiple agents are configured.
*   **[CLOSED] Revert "test: cover sandbox fs Windows path handling" ([#3221](https://github.com/sipeed/picoclaw/pull/3221))**: Reverted PR #3158 due to an import error introduced in `pkg/providers/openai_compat/provider.go`.

## 4. Community Hot Topics
*   **[Feature] use vodozemac instead of libolm ([#3088](https://github.com/sipeed/picoclaw/issues/3088))**: This high-priority, help-wanted issue (4 comments, 2 👍) proposes replacing the unmaintained and insecure `libolm` library with its official replacement, `vodozemac`, for Matrix encryption. It suggests making `libolm` optional at compile time.
*   **[BUG] 它给自己整失忆了 / Agent memory loss ([#3150](https://github.com/sipeed/picoclaw/issues/3150))**: Now closed and marked stale, this issue (4 comments) reported a bug where the agent would lose its context/memory during operation.

## 5. Bugs & Stability
*   **Android Service Launch Failure ([#3182](https://github.com/sipeed/picoclaw/issues/3182))**: A user reported that the Android version fails to launch the service despite having full app permissions, and the settings menu does not allow changing the file path.
*   **Matrix Encryption Misconfiguration ([#3194](https://github.com/sipeed/picoclaw/issues/3194))**: Users are encountering a "Received encrypted message but crypto is not enabled" error when running the Matrix gateway, indicating potential friction in crypto setup or state management.
*   **Test Regression ([#3221](https://github.com/sipeed/picoclaw/pull/3221))**: A recent test coverage PR for Windows sandbox filesystem paths had to be reverted because it broke the build with an import error in the OpenAI compatibility provider.

## 6. Feature Request Clusters
*   **Agent Customization & Routing**:
    *   PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) introduces support for agent-specific runtime overrides, allowing `agents.list` entries to define custom `max_tokens`, summarization thresholds, and `split_on_marker` settings.
    *   PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) improves the multi-agent experience by fixing the `/clear` command routing.
*   **Security & Cryptography**: Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) pushes for modernizing the Matrix encryption stack by migrating to `vodozemac`.

## 7. User Feedback Summary
User feedback highlights friction in deployment and configuration across different platforms. Android users are struggling with basic service initialization and path configuration permissions ([#3182](https://github.com/sipeed/picoclaw/issues/3182)). Matrix integration users are facing unclear error states regarding end-to-end encryption ([#3194](https://github.com/sipeed/picoclaw/issues/3194)). Additionally, core agent reliability was questioned due to context-loss bugs ([#3150](https://github.com/sipeed/picoclaw/issues/3150)), though that specific report is now closed.

## 8. Backlog Watch
Maintainer attention is needed for several items that have been open since late June and are now marked as `[stale]`:
*   **High-Priority Stale Issue**: [#3088](https://github.com/sipeed/picoclaw/issues/3088) (Migrate to `vodozemac`) has been open since June 9 and is tagged `priority: high` and `help wanted`.
*   **Stale Community PRs**: Four PRs by `@chengzhichao-xydt` have been open since June 27 without visible review activity:
    *   [#3192](https://github.com/sipeed/picoclaw/pull/3192): Bump goreleaser base images to Alpine 3.23.
    *   [#3191](https://github.com/sipeed/picoclaw/pull/3191): Remove duplicate `build/` entry in `.gitignore`.
    *   [#3190](https://github.com/sipeed/picoclaw/pull/3190): Sync missing i18n locale keys for `bn-in` and `cs`.
    *   [#3189](https://github.com/sipeed/picoclaw/pull/3189): Ignore `resp.Body.Close()` errors in the LINE channel.

</details>