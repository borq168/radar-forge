# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-08-08 00:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-08

## 1. Today's Activity Brief

The project saw very high activity with 500 issues and 500 pull requests updated in the last 24 hours. Of these, 31 issues were closed and 93 PRs were merged or closed. No new releases were published. The maintainer team and contributors focused on addressing several P0 and P1 bugs, including a critical gateway memory leak, a DB migration failure blocking gateway startup, and premature session compaction causing data loss. A cluster of small fixes landed from multiple contributors, targeting Windows process handling, Ollama streaming, CI lint compliance, and UI improvements. The `Codex worker runaway hardening` tracker (#99551) and several thread-switching/branch errors remained active areas of discussion.

---

## 2. Releases

**No new releases today.** The latest release remains the previous version; no version bumps or release notes were published.

---

## 3. Project Progress

**Merged/closed PRs today (93 total):** Notable completed items include:

- **#120400** (closed, `fix(agents): carry complete tool args from content_block_start input`) — a small fix for Discord progress draft rendering of tool names, closed as "too-many-prs" per triage label.
- **#92884** (closed, `config validate rejects plugin-owned channel schema extensions`) — a P2 bug fix where config validation rejected plugin channel extensions before plugin metadata could extend the schema.
- **#119009** (closed, `Runaway model-call retry loop bills $204`) — a P1 billing incident where a Discord channel retried model calls every 8-17 seconds for hours, undetected by stalled-request detection because each retry reset the progress clock.

**PRs in active review or proof stage (notable):**

- **#120044** (`fix(gateway): usage.status no longer waits on provider HTTP`) — XL-sized fix for the Usage page blocking on cold provider cache, needs proof.
- **#119778** (`fix(gateway): return retryable chat send error during transcript rebuild`) — ClawSweeper-autofix for a `chat.send` lifecycle error, ready for maintainer look.
- **#120001** (`fix(codex): keep native subagent tools available after parent turns end`) — fixes loss of hook-backed tools for Codex subagent workers after parent turn ends, addressing issues #111010 and #118534.
- **#120401** and **#120399** — CI lint compliance fixes for embedded-runner registry test file line limits, both opened by maintainer [@joshavant] and [@steipete].
- **#120087** (`fix(slack): route Enterprise Grid messages by workspace`) — XL-sized fix for Slack Enterprise Grid workspace routing, needs proof.

---

## 4. Community Hot Topics

The most active discussions today (by comment count):

1. **#116277** (129 comments, CLOSED) — **DeepSeek v4 Flash silent reply failure.** A diamond-lobster-rated P1 bug where the model silently fails to generate a reply, posting a generic fallback "No reply was generated for this message." The community extensively discussed reproduction and impact on Telegram group messaging. The issue was closed, suggesting a fix was applied or the root cause identified.

2. **#116201** (59 comments, OPEN) — **Realtime voice work can retain unbounded provider and consult state.** A diamond-lobster P1 bug flagged by maintainer [@vincentkoc]. The core concern is that realtime voice sessions lack hard ownership bounds, allowing superseded consult work, large provider frames, and pre-ready audio to accumulate undetected under slow or bursty conditions.

3. **#7707** (29 comments, OPEN) — **Memory Trust Tagging by Source.** Feature request open since February 2026, requesting that agent memory entries be tagged by trust level based on origin (user commands vs. web scrapes vs. third-party skills). The community continues to push for this as a defense against memory poisoning attacks. Still needs maintainer review and product decision.

4. **#77598** (23 comments, OPEN) — **Track live dev agent behavior and trajectory.** A maintainer-monitored running notes issue for a 24-hour observation of Pash's dev agent (started 2026-05-04). The watch is observational — no steering or reconfiguration — and is documenting agent behavior and trajectory patterns.

5. **#91588** (22 comments, OPEN) — **Critical gateway memory leak.** A P0 diamond-lobster bug where RSS grows from 350MB to 15.5GB over 2-3 days, causing repeated OOM kills and launchd-handoff restart cycles. The community is actively discussing reproduction and mitigation strategies.

**Underlying needs:** The community is deeply concerned about silent failures (model replies, memory leaks, voice state bloat) that erode trust in the system. There is also a strong desire for better observability (cost tracking, memory trust, agent behavior monitoring) and defensive mechanisms against resource exhaustion and poisoning.

---

## 5. Bugs & Stability

**P0 (Critical):**

- **#91588** — **Gateway memory leak (RSS 350MB → 15.5GB).** Repeated OOM crashes. No fix PR linked yet. Impact: crash-loop, session-state.
- **#119263** — **Agent DB v14→v15 migration fails: 'no such column: entry_valid'.** Gateway refuses to start after update. Linked PRs exist. Impact: crash-loop, session-state, release-blocker.
- **#118772** — **2026.7.1+ sessionEntry.totalTokens inflation causes premature compaction at 4–8% of context window.** Data loss from compaction firing too early. Linked PRs exist. Impact: session-state, data-loss.
- **#101290** — **CLI startup preflight can corrupt live state DB while gateway is running.** "database disk image is malformed" on macOS. No linked fix PR. Impact: data-loss, session-state.

**P1 (High):**

- **#116277** (CLOSED) — DeepSeek v4 Flash silent reply failure. Fallback message posted, no reply generated. **Fix appears to be merged/closed.**
- **#119087** — **Gateway cold start regressed ~2.5x** from 2026.7.1-beta.1 to 2026.7.2-beta.7 on 1-vCPU container. Needs info from maintainer.
- **#86684** — **sessions_yield subagent wake can compact parent branch at low context usage.** Parent session compacted while parked at 65k/1.05M context. Linked PR open.
- **#85030** — **MCP tools not injected into subagent (sessions_spawn) sessions.** All configuration methods ignored; subagent receives only built-ins. High community reaction (6 👍).
- **#115700** — **chat.send rejected with "thread switched branches" after model completes.** Stale expectedLeafEntryId not refreshed. Linked PR open.
- **#116022** — **beta.5 /new reuses stable session ID and cannot recover a retired Codex binding tombstone.** Session permanently unusable after binding becomes tombstone.
- **#119009** (CLOSED) — $204.74 runaway model-call retry loop over two incidents. **Closed, fix applied.**
- **#86012** — **LINE channel messages silently lost** due to reply token expiry + missing push fallback safeguards. Linked PR open, but needs live repro.
- **#86050** — **Gateway buffers claude-cli stream events; surfaces only see final assembled message.** Regression. Linked PR open.

**P2 (Medium):**

- **#67419** — Session context bloat: bootstrap files re-injected every turn, wasting 20-30% tokens.
- **#88079** — WebChat: reasoning_content not streamed for Kimi Code & DeepSeek Reasoner. No-linked-fix PR, recovery stuck.
- **#90789** — Claude CLI backend: "No response requested." placeholder leaves Telegram turn fully silent.
- **#93917** — genericRepeat critical/circuit-breaker never fires when exec results vary slightly.
- **#94939** — 6.x state migration leaves channel conversation-store SQLite empty (0 bytes).
- **#99586** — Runtime tool surface returns blank body after gateway-touching operations.
- **#108379** — Duplicate assistant generation attempts for Xiaomi MiMo provider.
- **#74378** — OpenClaw CLI commands remain alive as node.exe processes on Windows.

**Regression cluster:** Multiple regressions were reported today, notably in gateway cold start time (#119087), claude-cli stream buffering (#86050), and context compaction behavior (#86684, #118772).

---

## 6. Feature Request Clusters

**Security & Trust:**

- **#7707** (29 comments, Feb 2026) — Memory Trust Tagging by Source. Still awaiting maintainer review and product decision. No associated PR.
- **#78308** (16 comments, May 2026) — Channel-mediated approval for MCP tool calls (consent envelope). Needs security review.

**Session & Memory Management:**

- **#22438** (18 comments, Feb 2026) — Tiered bootstrap file loading for progressive context control. Linked PR open.
- **#45608** (11 comments, Mar 2026) — Pre-reset agentic memory flush on `/new` and daily reset. Needs security review.
- **#95724** (6 comments, Jun 2026) — Index memory by source directory, not by agent — eliminate duplicate vector stores.
- **#99583** (7 comments, Jul 2026) — Intelligent Session Auto-Titling: lazy generation, cheap models, topic-aware renames.

**Observability & Cost:**

- **#13219** (7 comments, Feb 2026) — Per-model usage logging for cost tracking. Linked PR open.
- **#75380** (6 comments, May 2026) — provider-payload.jsonl and cache-trace.jsonl grow unbounded — no rotation policy.

**Integrations & Channels:**

- **#87325** (8 comments, May 2026) — Support Azure Foundry GPT Realtime Talk via gateway relay.
- **#81061** (7 comments, May 2026) — Hook: before_route_inbound_message for channel bridging/proxying.
- **#17840** (6 comments, Feb 2026) — Opt-in reaction-triggered agent turns.

**Cluster observation:** The strongest recurring themes are **memory/context security** (trust tagging, approval envelopes, memory flush on reset) and **operational control** (cost tracking, log rotation, session auto-titling, bootstrap file tiering). No single feature has a merged PR today.

---

## 7. User Feedback Summary

**Pain points expressed today:**

- **Silent failures erode trust:** Multiple users reported issues where the system fails without any visible error or observability — DeepSeek v4 Flash posting a fallback (#116277), LINE messages silently lost (#86012), claude-cli placeholder causing silent turns (#90789), and runaway retry loops costing $204 without detection (#119009). Users explicitly note that silent failures are worse than crash errors because they go unnoticed.

- **Hardcoded paths exposed:** A user reported that someone hardcoded `/Users/wangtao` into the codebase, which was merged and published, causing OpenClaw to create a directory with a stranger's name on their system (#51429). This is a clear breach of trust and quality expectations.

- **Context window waste:** Users report that 20-30% of tokens are wasted on re-injected bootstrap files every turn (#67419), and that compaction thresholds are absolute rather than relative to model context windows, causing mismatches when switching models (#87136).

- **Windows-specific pain:** A user reported that CLI commands remain alive as `node.exe` processes after execution (#74378), and another reported `EBUSY` unlink errors on Windows during test teardown (#119796).

- **Upgrade friction:** A user reported that upgrading from 2026.7.1 to 2026.7.2 broke their gateway entirely due to a DB migration failure (#119263). Another reported that the new `/new` command cannot recover a retired Codex binding tombstone (#116022).

**Satisfaction signals:**

- Several users gave thumbs-up reactions to bug reports, suggesting they share the same pain and want fixes.
- The community remains engaged in detailed reproduction steps and debugging (e.g., #116277 had 129 comments and was closed, implying resolution).
- The maintainer team is actively reviewing and merging PRs, with several ClawSweeper autofixes landing today.

---

## 8. Backlog Watch

**Issues needing maintainer attention (long-unanswered, important):**

- **#7707** (Feb 2026, 29 comments) — Memory Trust Tagging. Needs maintainer review and product decision. No PR linked. This is the oldest high-engagement feature request still open.
- **#22438** (Feb 2026, 18 comments) — Tiered bootstrap file loading. Needs maintainer review and product decision. Linked PR open.
- **#45608** (Mar 2026, 11 comments) — Pre-reset agentic memory flush. Needs maintainer review and product decision. Needs security review.
- **#51429** (Mar 2026, 13 comments) — Hardcoded path exposed. Needs maintainer review and product decision. Source repro provided.
- **#67419** (Apr 2026, 11 comments) — Bootstrap file re-injection wasting tokens. Needs maintainer review and product decision.
- **#78308** (May 2026, 16 comments) — MCP tool call approval envelope. Needs security review.
- **#81061** (May 2026, 7 comments) — Before_route_inbound_message hook. Needs maintainer review and product decision.
- **#85030** (May 2026, 10 comments) — MCP tools not injected into subagents. Needs maintainer review and product decision. Needs live repro.
- **#86012** (May 2026, 6 comments) — LINE messages silently lost. Needs live repro. Linked PR open but recovery stuck.
- **#87325** (May 2026, 8 comments) — Azure Foundry GPT Realtime Talk support. Needs security review.

**PRs needing

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-08

## 1. Daily Cross-Project Overview

Today, the OpenClaw project saw extremely high activity with 500 issues and 500 pull requests updated, including 31 issues closed and 93 PRs merged/closed. The project continues to address critical P0 bugs (gateway memory leak, DB migration failure, premature session compaction) and is actively reviewing several large fixes. The Youdao LobsterAI project shipped a new release (2026.8.7) with conversation search improvements and LaTeX math rendering, while merging six PRs and addressing a new bug report about model IDs with slashes. Both projects show community concern about silent failures and provider compatibility, though at very different scales of activity.

## 2. Activity Comparison

| Metric | OpenClaw | Youdao LobsterAI |
|--------|----------|------------------|
| Issues updated | 500 (31 closed) | 7 (4 open, 3 closed) |
| PRs updated | 500 (93 merged/closed) | 7 (1 open, 6 merged/closed) |
| Release today | None | 2026.8.7 (shipped 2026-08-07) |
| Activity note | Very high; maintainers and community focused on P0/P1 bugs, CI lint, and community discussions | Moderate; release activity, targeted fixes, and a few new issues |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume is two orders of magnitude larger than LobsterAI’s today (500 vs. 7 issues updated). OpenClaw’s digest covers a broad technical surface: gateway, agents, codex, channels, CLI, and CI. LobsterAI’s digest is narrower, focusing on the Electron client, Cowork features, and plugin configuration. OpenClaw has multiple P0 bugs (gateway memory leak, DB migration failure, data loss from compaction) that are actively discussed and being fixed; LobsterAI’s highest-severity open bug is a WASM memory crash and database corruption risk (Issue #1273) that has been stale since April. Community engagement on OpenClaw is far higher, with 129 comments on a single issue today, while LobsterAI’s most commented issue had 1 comment.

## 4. Shared Technical Focus Areas

- **Silent failures and lack of observability**: Both projects have issues where the system fails without clear error feedback. In OpenClaw, DeepSeek v4 Flash silent reply failure (#116277, closed) and runaway retry loops costing $204 (#119009, closed) were heavily discussed. In LobsterAI, a new bug reports “execution produces no output, no error” (#2447), and a stale issue documents silent message loss in LINE channels (OpenClaw #86012). Users in both communities express frustration with failures that are not visible.
- **Provider/model ID compatibility**: OpenClaw has issues with MCP tools not injected into subagent sessions (#85030) and custom provider handling. LobsterAI has a bug where model IDs containing slashes (e.g., `deepseek-ai/DeepSeek-V4-Flash`) cannot be selected in the UI (#2443), with a fix PR open (#2452). Both projects are working to improve compatibility with third-party providers.
- **Database stability and data loss risks**: OpenClaw has a P0 DB migration failure that blocks gateway startup (#119263) and a compaction bug that causes premature data loss (#118772). LobsterAI has a stale high-severity issue about WASM memory crashes and database corruption under high-frequency writes (#1273). Both projects have active unresolved risks to data integrity.
- **Memory and resource management**: OpenClaw’s P0 gateway memory leak (#91588) and runaway retry loops are mirrored in LobsterAI’s WASM memory out-of-bounds crashes. Users in both communities are concerned about resource exhaustion, though OpenClaw’s scale is more severe.

## 5. Differentiation Analysis

- **Feature focus**: OpenClaw is a core agent platform with a focus on gateway infrastructure, agent lifecycle, channel integrations, and context management. LobsterAI is a client-side application (Electron) focused on user experience: conversation search, LaTeX math rendering, IM analytics, and plugin installation. LobsterAI’s release today reflects incremental UX improvements, while OpenClaw is tackling deep system-level bugs.
- **Target users**: OpenClaw serves developers and operators who run agent infrastructure (gateway, codex, subagents, channels). LobsterAI serves end-users who interact with agents through a GUI, with emphasis on Cowork and IM features. The user feedback in LobsterAI is about input box editing, skill installation, and per-agent model binding – all UI-level concerns.
- **Technical architecture**: OpenClaw is a multi-service system (gateway, agents, codex workers, database) with complex state management and migration paths. LobsterAI is a standalone desktop app with a lightweight backend, using SQLite via WASM. Their bug profiles reflect this: OpenClaw deals with distributed state issues (session compaction, thread switching, DB migration across versions), while LobsterAI deals with local UI rendering, Electron-specific issues (Windows installer, drag regions), and WASM memory limits.

## 6. Community Activity Notes

- **Very high activity tier**: OpenClaw (500 issues, 500 PRs, 93 merged/closed, ~129 comments on top issue, multiple P0 discussions)
- **Moderate activity tier**: Youdao LobsterAI (7 issues, 7 PRs, 6 merged/closed, 1 release, brief discussions)

## 7. Evidence-Backed Observations

1. **Silent failures are a cross-project pain point**: Both OpenClaw and LobsterAI have at least one issue today where the system completes an action without producing any visible result or error. User comments in both projects explicitly state that silent failures erode trust (OpenClaw #116277, #119009; LobsterAI #2447). This is not a single project’s concern.

2. **Provider/model ID compatibility is a recurring friction**: Both projects have open bugs or PRs related to handling model IDs with special characters or provider prefixes. OpenClaw’s #85030 (MCP tools not injected into subagents) and LobsterAI’s #2443 (slashed model IDs unusable in UI) both involve provider configuration. The fixes are being actively developed, but the issue is not new.

3. **Database stability risks are unresolved in both projects**: OpenClaw has a P0 DB migration failure (#119263) and a compaction bug causing data loss (#118772). LobsterAI has a stale high-severity issue about WASM memory crashes and database corruption (#1273, last updated today). No definitive fix has been merged for either project’s database issues as of today.

4. **OpenClaw’s community is far more active and vocal**: The volume of issues, PRs, and comments on OpenClaw is two orders of magnitude larger than LobsterAI’s today. This reflects the scale of the project and its user base, but also indicates a higher rate of incident discovery and community debugging effort. LobsterAI’s community is smaller but still engaged, reviving stale issues and reporting new bugs.

5. **No clear cross-project signal about a single emerging trend**: While both projects share concerns about silent failures and provider compatibility, each project’s top issues are distinct (OpenClaw: memory leak, DB migration, compaction; LobsterAI: input box editing, per-agent binding, skill installation). The commonalities are general software quality themes rather than a shared technical direction.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# Youdao LobsterAI Project Digest — 2026-08-08

## 1. Today's Activity Brief

The project shipped a new release (2026.8.7) with enhancements to Cowork conversation search and LaTeX math rendering, alongside several bug fixes. Seven issues were updated in the last 24 hours (4 open, 3 closed), and seven pull requests were updated (1 open, 6 merged/closed). Community activity centered on a new bug report about model ID parsing with slashes, a feature request for input box editing mode, and a recurring issue about silent execution failures. The most notable merged PRs addressed a Windows installer crash, Markdown LaTeX math delimiter support, and a fix for the OpenClaw provider prefix being lost when model IDs contain slashes.

## 2. Releases

**LobsterAI 2026.8.7** was released on 2026-08-07.

Changes:
- **feat(cowork):** add title-bar conversation search (PR [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435))
- **feat:** markdown latex math delimiters (PR [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449))
- **fix(win-installer):** rescue null watchdog exit code via extractor (PR [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446))

No breaking changes or migration notes were documented.

## 3. Project Progress

Six PRs were merged or closed today:

- **Release/2026.8.5** (PR [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451)) — Merged release branch into `main`, adding in-conversation search to Cowork, improved math rendering, IM analytics, OpenClaw configuration, plugin installation, and Windows installation/update reliability.
- **Fix fullscreen code toolbar** (PR [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450)) — Kept fullscreen overlay outside Electron title bar drag regions on Windows.
- **Fix Markdown LaTeX math delimiters** (PR [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)) — Improved math rendering in Markdown.
- **Fix chat search** (PR [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448)) — Incremental fix for Cowork conversation search.
- **Fix plugin-index-managed keys** (PR [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445)) — Stripped plugin-index-managed keys from `config.set` in OpenClaw.
- **Fix Windows installer watchdog** (PR [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)) — Rescued null watchdog exit code via extractor.

## 4. Community Hot Topics

**Most active issues and PRs today:**

- **Issue #2447** ([link](https://github.com/netease-youdao/LobsterAI/issues/2447)) — "执行没有出结果，也没有错误信息" (Execution produces no output, no error message). Opened 2026-08-07, 1 comment. This issue describes a situation where an action appears to complete without any visible result or error feedback, which is a significant usability barrier.

- **Issue #2443** ([link](https://github.com/netease-youdao/LobsterAI/issues/2443)) — "模型 ID 含斜杠的自定义 Provider 无法在界面中使用" (Custom Provider with slashes in model ID unusable in UI). Opened 2026-08-06, 1 comment. Reports that SiliconFlow and similar OpenAI-compatible providers with model IDs containing `/` (e.g., `deepseek-ai/DeepSeek-V4-Flash`) cannot be selected in the settings UI, though the provider works programmatically.

- **PR #2452** ([link](https://github.com/netease-youdao/LobsterAI/pull/2452)) — "[area: main] fix(openclaw): preserve provider for slashed model ids" ([OPEN]). Opened 2026-08-07. Directly addresses issue #2443 by preserving the OpenClaw provider prefix when model IDs contain slashes.

- **Stale issue #1265** ([link](https://github.com/netease-youdao/LobsterAI/issues/1265)) — "基于AGENT绑定IM 机器人和模型" (Bind IM bots and models per agent). Updated 2026-08-07. Requests per-agent configuration for IM bot and model assignments, enabling multi-agent teams with specialized roles and models.

**Underlying needs:** Users are pushing for more granular control over agent configurations (per-agent models, per-agent IM bots) and better handling of edge cases in provider/model ID parsing. The repeated reactivation of stale issues suggests these are long-standing pain points.

## 5. Bugs & Stability

**Bugs reported or updated today, ranked by severity:**

1. **High — WASM memory crash and database corruption risk** (Issue #1273, [link](https://github.com/netease-youdao/LobsterAI/issues/1273), updated 2026-08-07). This stale issue describes `memory access out of bounds` crashes in `sql.js` under high-frequency writes, and non-atomic `save()` causing database corruption if interrupted. No fix PR is linked; the issue remains open.

2. **High — Execution returns no output or error** (Issue #2447, [link](https://github.com/netease-youdao/LobsterAI/issues/2447), opened 2026-08-07). This is a new report of a silent failure mode where the system completes an action but produces no visible result or error. No fix PR yet.

3. **Medium — Model ID with slashes unusable in UI** (Issue #2443, [link](https://github.com/netease-youdao/LobsterAI/issues/2443), opened 2026-08-06). A fix PR (#2452) is open. This affects all OpenAI-compatible providers with slash-containing model IDs.

4. **Low — Self-built skill not appearing in skill panel** (Issue #1195, [link](https://github.com/netease-youdao/LobsterAI/issues/1195), updated 2026-08-07). A stale bug about skills being installed to the wrong directory and not appearing after restart. No fix PR linked.

## 6. Feature Request Clusters

- **Input box editing mode** (Issue #2444, [link](https://github.com/netease-youdao/LobsterAI/issues/2444), opened 2026-08-07). User requests a toggle to switch between "Enter to send" (current) and "Enter for newline, Ctrl+Enter to send", with a possible expanded editor mode. No related PR.

- **Per-agent IM bot and model binding** (Issue #1265, [link](https://github.com/netease-youdao/LobsterAI/issues/1265), updated 2026-08-07). Requests that different agents can be assigned different IM bots and different models, enabling multi-agent teams with specialized roles. No related PR.

- **Model ID with slash support** (Issue #2443, [link](https://github.com/netease-youdao/LobsterAI/issues/2443), opened 2026-08-06). While primarily a bug report, this also represents a feature request for broader compatibility with OpenAI-compatible providers. PR #2452 is open.

## 7. User Feedback Summary

- **Frustration with silent failures:** Issue #2447 highlights a situation where users get no feedback on execution — no output, no error. This is a serious usability concern, especially for complex workflows.

- **Pain with input formatting:** Issue #2444 describes the inconvenience of needing `Shift+Enter` for line breaks in long prompts, with accidental sends being a common frustration. Users want configurable keybindings.

- **Provider compatibility issues:** Issue #2443 shows that users trying to use popular providers like SiliconFlow encounter a UI bug that blocks model selection. The community self-identified the root cause (slash in model ID) and the fix is in review.

- **Stale but persistent issues:** Issues #1195, #1263, #1265, and #1273 were all updated today despite being stale. This suggests users are still affected by these problems and are active in the community, monitoring for progress.

## 8. Backlog Watch

- **Issue #1195** ([link](https://github.com/netease-youdao/LobsterAI/issues/1195)) — "自建skill被安装到OpenClaw的skill目录下" (Self-built skill installed to wrong directory, not visible). Stale since April 2026, updated today. No maintainer response or fix PR. This affects users who create and install custom skills, a core onboarding flow.

- **Issue #1273** ([link](https://github.com/netease-youdao/LobsterAI/issues/1273)) — "sql.js (WASM) 高频操作导致 memory access out of bounds 崩溃及数据库损坏风险" (WASM memory crash and database corruption). Stale since April 2026, updated today. No maintainer response or fix PR. This is a high-severity stability issue that can cause data loss.

- **Issue #1265** ([link](https://github.com/netease-youdao/LobsterAI/issues/1265)) — "基于AGENT绑定IM 机器人和模型" (Per-agent IM bot and model binding). Stale since April 2026, updated today. No maintainer response or fix PR. This feature request is important for multi-agent use cases.

- **Issue #2444** ([link](https://github.com/netease-youdao/LobsterAI/issues/2444)) — "输入框编辑模式" (Input box editing mode). New, opened 2026-08-07. No maintainer response yet. Addresses a common UX pain point.

- **Issue #2447** ([link](https://github.com/netease-youdao/LobsterAI/issues/2447)) — "执行没有出结果，也没有错误信息" (Execution produces no output or error). New, opened 2026-08-07. No maintainer response yet. This is a potential high-severity bug needing investigation.

</details>