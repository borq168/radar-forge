# OpenClaw Ecosystem Digest 2026-07-09

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-07-09 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-09

## 1. Today’s Activity Brief
In the last 24 hours, the OpenClaw repository recorded 500 issue updates (44 closed, 456 open/active) and 500 pull request updates (97 merged/closed, 403 open). No new releases were published. Among the most-discussed items, a long-standing P1 bug about text leakage between tool calls to messaging channels continues to draw attention, and two closed PRs delivered the “extended-stable” update channel support and a fix for silent tool-only turn delivery on Telegram. The overall activity reflects sustained community engagement around session reliability, message delivery correctness, and security hardening.

## 2. Releases
None.

## 3. Project Progress
Two notable PRs were closed (merged) today:
- **[#99811](https://github.com/openclaw/openclaw/pull/99811) feat(update): support extended-stable package updates** — Introduces a canonical `extended-stable` channel for installing and inspecting the trailing supported-month npm release without altering the `stable` channel (maps to `latest`). Closes #99808 and relates to #99352.
- **[#79631](https://github.com/openclaw/openclaw/pull/79631) fix: inject completion acknowledgment when tool-only turns produce no text** — Resolves a Telegram delivery silence where model turns consisting entirely of tool calls (no visible text) left no message in the chat. A completion acknowledgment is now injected.

These advances address operator update workflows and channel delivery completeness.

## 4. Community Hot Topics
The following issues and PRs generated the most discussion today (by comment count):

**Issues**
- **[#25592](https://github.com/openclaw/openclaw/issues/25592) [P1] Text between tool calls leaks to messaging channels** — 35 comments. Agent internal narration and error handling text bleeds into Slack/iMessage/Telegram. A linked fix PR exists but is awaiting maintainer review and product decision.
- **[#44925](https://github.com/openclaw/openclaw/issues/44925) [P1] Subagent completion silently lost** — 21 comments. Multiple failure modes where subagent results are dropped without retry or notification; a fix PR is open.
- **[#85333](https://github.com/openclaw/openclaw/issues/85333) [P1] `openclaw doctor --fix` 4-5× slower on 2026.5.20** — 15 comments. A session snapshot path traversal bottleneck caused a regression from 55s to 229s+. No fix PR yet.
- **[#45740](https://github.com/openclaw/openclaw/issues/45740) [P2] gh-issues skill: untrusted issue body injected directly into sub-agent prompt** — 14 comments. Security concern about raw issue bodies being placed into prompts without sanitization.
- **[#48003](https://github.com/openclaw/openclaw/issues/48003) [P1] Steer mode does not inject messages mid-turn** — 14 comments. A regression from commit `9889c6da5` broke the `steer` queue mode, preventing mid-turn message injection.

**Pull Requests**
- **[#98236](https://github.com/openclaw/openclaw/pull/98236) [do not merge] refactor: flip sessions and transcripts to sqlite storage** — Large multi-domain PR tracking the session/transcript storage migration, extensively labeled.
- **[#101866](https://github.com/openclaw/openclaw/pull/101866) fix(sessions): ground assistant transcript media refs before replay** — Security-focused fix that redacts unverified media paths.
- **[#102197](https://github.com/openclaw/openclaw/pull/102197) improve: warn before non-ClawHub plugin installs** — Cross-channel UX improvement to raise awareness of untrusted plugin sources.

*Underlying needs*: Users are pushing for reliable session state handling, airtight security around prompt injection, stable multi-agent orchestration, and more predictable message delivery across all supported channels.

## 5. Bugs & Stability
Multiple high-impact bugs and regressions are active, many with fix PRs already linked:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| P1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | Open (linked) |
| P1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost, no retry/notification | Open (linked) |
| P1 | [#85333](https://github.com/openclaw/openclaw/issues/85333) | `doctor --fix` 4-5× slower on 2026.5.20 | None |
| P1 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode mid-turn injection broken | Open (linked) |
| P1 | [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable: concurrent agent add/config overwrites, session-lock failures | Open (linked) |
| P1 | [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic path bricks long tool-use threads (Invalid signature in thinking block) | Open (linked) |
| P0 | [#43661](https://github.com/openclaw/openclaw/issues/43661) | Session hangs indefinitely on compaction timeout, duplicate message sends | None |
| P0 | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live docs ahead of release (Heartbeat IsolatedSessions not available in 2026.3.13) | None |

Several other regressions (e.g., [#38327](https://github.com/openclaw/openclaw/issues/38327) Vertex AI crash, [#38439](https://github.com/openclaw/openclaw/issues/38439) webchat avatar 404) remain unresolved, though fix PRs are in progress. Orphaned lock files not cleared on restart ([#49603](https://github.com/openclaw/openclaw/issues/49603)) and sandbox no-new-privileges failures ([#43996](https://github.com/openclaw/openclaw/issues/43996)) add to the stability backlog.

## 6. Feature Request Clusters
Recurring user requests and their related work:

- **Per-agent cost budgets** ([#42475](https://github.com/openclaw/openclaw/issues/42475)) — Daily/monthly spend enforcement at the gateway level, complementing existing per-session cost tracking.
- **Append mode for `write` tool** ([#40001](https://github.com/openclaw/openclaw/issues/40001)) — Prevent data loss from isolated cron sessions overwriting shared files; a revived PR ([#77127](https://github.com/openclaw/openclaw/pull/77127)) is ready for maintainer review.
- **Lifecycle hooks** ([#43454](https://github.com/openclaw/openclaw/issues/43454)) — Event-driven triggers for subagent completion, tool call thresholds, turn completion.
- **MathJax/LaTeX support in Control UI** ([#42840](https://github.com/openclaw/openclaw/issues/42840)) — Strong demand (9 👍) for rendering formulas.
- **YAML config support** ([#45758](https://github.com/openclaw/openclaw/issues/45758)) — alternative to JSON5 for readability.
- **Durable natural-language rule learning** ([#41366](https://github.com/openclaw/openclaw/issues/41366)) — multi-agent group chat rule persistence.
- **Private network fetch opt-in** ([#39604](https://github.com/openclaw/openclaw/issues/39604)) — `tools.web.fetch.allowPrivateNetwork` for internal addresses.
- **Distributed Agent Runtime** ([#42026](https://github.com/openclaw/openclaw/issues/42026)) — separation of control plane and agent compute.

Several PRs already tackle parts of these clusters: append mode (#77127), lifecycle hooks (#43454 is only a request), and internal allowlisting (#39604).

## 7. User Feedback Summary
Users consistently report frustration with:

- *Session reliability* — subagent results disappearing, sessions becoming unresponsive after compaction timeouts, lock file orphans blocking restarts.
- *Message delivery correctness* — internal tool traces and intermediate text leaking to user-facing channels, media attachments lost before final outbound payload.
- *Performance regressions* — `doctor --fix` taking 4× longer in 2026.5.20, heartbeat retries blocking Telegram during active conversations.
- *Security concerns* — prompt injection through untrusted issue bodies, lack of outbound metadata sanitisation, and leaked internal commentary.
- *Tool completeness* — no append mode for writes, browser tool lacking CSS selector support, image generation completion delivery failures.

Praise exists for the community’s responsiveness (many bugs have linked PRs), but the volume of P1/P0 issues suggests a project under heavy real-world load where edge-case robustness is lagging.

## 8. Backlog Watch
Important items lingering without resolution (some stale, all awaiting maintainer action):

- **[#25592](https://github.com/openclaw/openclaw/issues/25592)** (P1, created Feb 24, still open with 35 comments) — tool-call text leakage; fix PR exists but needs product/security decision.
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** (P1, Mar 13, 21 comments) — silent subagent completion loss; linked PR open.
- **[#45740](https://github.com/openclaw/openclaw/issues/45740)** (P2, Mar 14) — security: untrusted issue body injection; needs security review.
- **[#41744](https://github.com/openclaw/openclaw/issues/41744)** (P1, Mar 10, stale) — Feishu media loss; fix PR exists but stalled.
- **[#43549](https://github.com/openclaw/openclaw/issues/43549)** (P2, Mar 12) — Telegram channel wedged by bad session JSON; recovery guidance absent.
- **[#46252](https://github.com/openclaw/openclaw/issues/46252)** (P2, Mar 14, stale) — cost dashboard undercounting spend for `/new` users; fix PR open.

Many `needs-maintainer-review` items across both issues and PRs suggest a maintainer bottleneck for final approval and integration.

---

## Cross-Ecosystem Comparison

## 1. Daily Cross-Project Overview
On July 9, 2026, the four tracked open-source agent assistants recorded a wide spread of activity levels. OpenClaw saw massive issue and PR traffic (500 updates each), centered on session reliability, message delivery correctness, and security hardening. NanoBot quickly resolved a trio of localhost token security vulnerabilities and landed enhancements like non‑interactive configuration refresh and a WebUI diff view. Zeroclaw closed a batch of persistent bugs (model‑switch persistence, skills CLI paths) and opened a major architectural RFC proposing WASM runtime plugins for channels and tools. PicoClaw had a quiet day with three merged PRs improving gateway robustness, adding a Grafana Alertmanager channel, and fixing image embedding for Anthropic vision models.

## 2. Activity Comparison
| Project   | Issues (updates) | Pull Requests (updates) | Release | Activity Note |
|-----------|------------------|-------------------------|---------|---------------|
| OpenClaw  | 500 (44 closed)  | 500 (97 merged/closed)  | None    | High‑volume session and message‑correctness threads; many P0/P1 bugs with open fix PRs awaiting review. |
| NanoBot   | 8 (7 closed)     | 29 (12 merged/closed)   | None    | Security‑driven day; localhost token vulnerabilities fixed within hours, plus several feature merges. |
| Zeroclaw  | 50 (10 closed)   | 50 (21 merged/closed)   | None    | Bug fixes, TodoWrite tracker landed, WASM plugin RFC opened, model‑catalog credentials fix merged. |
| PicoClaw  | 2 (0 closed)     | 3 (3 merged/closed)     | None    | Low‑noise day; gateway fallback, Alertmanager channel, and Anthropic vision fix merged. |

## 3. OpenClaw Compared With Peers
- **Activity volume** – OpenClaw’s 500 issue and PR updates each dwarf the combined totals of the other three projects. The repository is operating at an order‑of‑magnitude higher scale.
- **Technical focus** – OpenClaw’s discussions revolve around deep reliability concerns at scale: session lock orphans, compaction timeouts, multi‑agent orchestration instability, and delivery‑channel text leakage. The other projects are handling smaller‑scale correctness issues (Zeroclaw’s lost user messages, NanoBot’s MCP reconnect crashes, PicoClaw’s hardware‑specific failures).
- **Community surface area** – OpenClaw exhibits a large, active community with many linked fix PRs, but also a visible maintainer bottleneck (many `needs-maintainer-review` tags). NanoBot’s rapid security turnaround shows centralized, effective maintainer response. Zeroclaw balances steady PR throughput with forward‑looking RFCs. PicoClaw has the smallest public footprint.

## 4. Shared Technical Focus Areas
- **Security hardening around agent‑accessible data and local services** – Three projects addressed related concerns today: NanoBot sealed unauthenticated localhost API token minting (issues #4825‑#4827); OpenClaw debated sanitization of untrusted issue bodies injected into sub‑agent prompts (#45740); Zeroclaw proposed a `.ignore` file to protect sensitive workspace files from agent access (#8424).
- **Tool and channel reliability improvements** – Multiple projects fixed scenarios where messages or tool outputs were lost or misattributed: OpenClaw injected completion acknowledgments for tool‑only turns on Telegram (#79631); Zeroclaw corrected `model_switch` persistence (#6173) and fixed skills CLI paths on multi‑agent installs (#8334); PicoClaw embedded image media so Anthropic vision models actually see attached images (#3234).
- **Plugin/extension safety and architecture** – Zeroclaw issued a major RFC to move channels and tools from compile‑time features to WASM runtime plugins (#8850), while OpenClaw merged a cross‑channel warning before installing non‑ClawHub plugins (#102197). Both reflect a desire for safer, more flexible extension mechanisms.

## 5. Differentiation Analysis
- **Feature focus** – OpenClaw emphasizes multi‑agent orchestration, broad channel support (Slack, iMessage, Telegram), and enterprise‑level reliability. NanoBot prioritizes easy local‑first usage with a built‑in WebUI, guided channel setup, and quick iteration (Python). Zeroclaw is developer‑oriented, with ZeroCode RPC, durable task tracking, and a future WASM plugin model in Rust. PicoClaw serves niche hardware environments (NanoKVM) and monitoring integration (Alertmanager).
- **Target users** – OpenClaw targets operators running complex, long‑lived agent deployments. NanoBot appeals to individual users and small teams who want a quick‑to‑deploy assistant. Zeroclaw aims at developers building custom automation with strong multi‑tenancy needs. PicoClaw addresses embedded/IoT and infrastructure‑monitoring use‑cases.
- **Technical architecture** – OpenClaw is a large codebase with an ongoing SQLite storage migration (#98236). NanoBot is a Python agent with config‑driven refresh and WebUI. Zeroclaw leverages Rust, compile‑time features, and is evolving toward WASM runtime plugins. PicoClaw is a lightweight agent with gateway‑level reliability fallbacks and custom C/io‑heavy integrations for constrained devices.

## 6. Community Activity Notes
- **High activity** – OpenClaw (hundreds of daily updates, but large proportion of tickets remain open or await review).
- **Medium activity** – NanoBot and Zeroclaw (tens of updates each, with a mix of immediate fixes, new features, and longer‑term RFCs).
- **Low activity** – PicoClaw (only a handful of updates, all involving merges of older PRs).
- No project published a new release today; the day’s work was entirely development and issue triage.

## 7. Evidence‑Backed Observations
- **OpenClaw’s maintainer bottleneck is a recurring pattern** – Multiple P0/P1 issues have open fix PRs that are stalled waiting for review (e.g., #25592, #44925), and the `needs-maintainer-review` label appears frequently. This contrasts with NanoBot’s same‑day closure of security vulnerabilities.
- **Prompt injection and file‑access safety are emerging as shared concerns** – OpenClaw’s untrusted issue‑body injection (#45740) and Zeroclaw’s `.ignore` proposal (#8424) indicate that the ecosystem is grappling with how agents should safely handle external input and local files.
- **WASM‑based plugin runtimes are gaining momentum** – Zeroclaw’s detailed RFC (#8850) and OpenClaw’s plugin‑source warning (#102197) show interest in moving toward safer, dynamically‑loaded extensions, though implementation maturity differs between projects.
- **Message and tool reliability remains a cross‑project pain point** – OpenClaw’s text‑leakage (#25592) and tool‑turn silence (#79631), Zeroclaw’s lost user messages (#6034), and PicoClaw’s dropped images (fixed by #3234) all point to ongoing challenges in delivering complete, clutter‑free outputs to users.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-07-09

### 1. Today’s Activity Brief
In the past 24 hours, the repository saw **8 issue updates** (1 open, 7 closed) and **29 pull request updates** (17 open, 12 merged or closed). No new releases were published. The day’s dominant theme was security: three related vulnerabilities around localhost WebUI token issuance were disclosed and immediately addressed by maintainers. Alongside this, a cluster of enhancements landed, including non‑interactive config refresh, WebUI diff view, guided setup flows, and new core tools.

### 2. Releases
None.

### 3. Project Progress
Six pull requests were closed today, reflecting immediate fixes and a documentation refresh:

- **Security token fix** – `fix(webui): gate bootstrap API token issuance` ([#4849](https://github.com/HKUDS/nanobot/pull/4849)) closed, restricting WebUI bootstrap to authorized secrets.
- **Refactoring** – `refactor(agent): extract turn hook assembly` ([#4848](https://github.com/HKUDS/nanobot/pull/4848)) moved hook logic to a dedicated module, improving modularity.
- **Documentation** – `docs: improve search entry pages` ([#4850](https://github.com/HKUDS/nanobot/pull/4850)) added new guide pages for chat apps, WebUI, MCP, and gateway deployment.
- **Non‑interactive config** – `Feature: non-interactive config refresh with 'nanobot onboard --refresh'` ([#4852](https://github.com/HKUDS/nanobot/pull/4852)) introduced a flag to update configuration without prompts.
- **Node bump** – `chore: bump to node 24` ([#4460](https://github.com/HKUDS/nanobot/pull/4460)) closed as a maintenance task.
- **Telegram vision** – A very old PR `feat: add vision support for image recognition in Telegram` ([#12](https://github.com/HKUDS/nanobot/pull/12)) was closed, though it is unclear if it was merged or superseded.

### 4. Community Hot Topics
The most commented-on issue of the day was a stale architectural discussion about prompt prefix preservation ([#2463](https://github.com/HKUDS/nanobot/issues/2463), 13 comments), which was closed without resolution. However, the true hot spot was the trio of security advisories filed simultaneously by **@YLChen-007**:

- [#4825](https://github.com/HKUDS/nanobot/issues/4825) – Unauthenticated localhost token minting via `/webui/bootstrap`
- [#4826](https://github.com/HKUDS/nanobot/issues/4826) – API bearer tokens issued to any localhost process
- [#4827](https://github.com/HKUDS/nanobot/issues/4827) – Embedded WebUI bootstrap without authentication

All three were closed within a day, and the fix PR [#4849](https://github.com/HKUDS/nanobot/pull/4849) was merged immediately. The community’s underlying need is a secure, zero‑configuration loopback experience that does not accidentally expose tokens to other local processes.

### 5. Bugs & Stability
**Critical (resolved)**
- **Localhost WebUI token vulnerability** (issues [#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827)) – any local process could obtain a fully privileged API token. Fixed by PR [#4849](https://github.com/HKUDS/nanobot/pull/4849), which splits bootstrap tokens and enforces secret verification. A follow‑up PR [#4856](https://github.com/HKUDS/nanobot/pull/4856) (open) restores safe localhost access while hardening remote protection.
- **Unauthenticated `/v1/chat/completions`** ([#4078](https://github.com/HKUDS/nanobot/issues/4078)) – the OpenAI‑compatible endpoint accepted requests without any auth. Closed today, presumably fixed via the same WebUI token gate.

**Medium (resolved)**
- **Missing `aiohttp` for Slack** ([#4829](https://github.com/HKUDS/nanobot/issues/4829)) – the Slack extras in `pyproject.toml` omitted `aiohttp`, preventing the plugin from loading. Reported and closed without a linked PR, but presumably a dependency fix was applied.

**Open (unresolved)**
- **MCP reconnect crashes** – PRs [#4764](https://github.com/HKUDS/nanobot/pull/4764) (isolation of cancel scopes) and [#4843](https://github.com/HKUDS/nanobot/pull/4843) (deferred stale stack cleanup) remain open, aiming to stop gateway crashes when MCP sessions expire.
- **Zombie process reaping** – PR [#4840](https://github.com/HKUDS/nanobot/pull/4840) addresses zombie children on all subprocess exit paths; it is still open.

### 6. Feature Request Clusters
Several proposals and their corresponding PRs appeared today:

- **Non‑interactive config refresh** – requested in [#4851](https://github.com/HKUDS/nanobot/issues/4851) and implemented by [#4852](https://github.com/HKUDS/nanobot/pull/4852) (merged). Users need automated configuration updates in CI/CD or self‑updating systems.
- **Guided channel setup** – PR [#4855](https://github.com/HKUDS/nanobot/pull/4855) introduces guided flows for Feishu, WebSocket, and WhatsApp, with per‑assistant enablement. This addresses the friction of manual plumbing for channel integration.
- **RTK command rewriter** – PR [#4854](https://github.com/HKUDS/nanobot/pull/4854) adds an opt‑in `tools.exec.rtk` to rewrite commands before sandbox execution, useful for users who need command transformation pipelines.
- **Core timer tool** – PR [#4853](https://github.com/HKUDS/nanobot/pull/4853) brings `nano_timer` for time, timezone, and calendar queries, a common request for autonomous agent scheduling.
- **File‑edit diff in WebUI** – PR [#4828](https://github.com/HKUDS/nanobot/pull/4828) renders file changes as unified diffs, not just line counts, improving transparency.

### 7. User Feedback Summary
- **Security‑conscious users** quickly flagged the missing localhost protection; the rapid turnaround was appreciated but highlighted a design gap between “no‑password localhost” convenience and process isolation.
- **Automation‑oriented users** pushed for non‑interactive config refresh (via `--refresh`) and override of Docker build extras (PR [#4857](https://github.com/HKUDS/nanobot/pull/4857)). These requests stem from deployment in containerised and CI environments where manual steps are untenable.
- **MCP instability** remains a pain point: reconnect loops still crash the gateway, as shown by two open fix PRs with no merge yet. Users expect more robust long‑running MCP connections.
- **LangSmith integration** was reported as broken after a recent update, and the README was clarified in PR [#4847](https://github.com/HKUDS/nanobot/pull/4847) (still open), indicating a gap between documentation and reality.

### 8. Backlog Watch
- **Architectural prompt prefix issue** ([#2463](https://github.com/HKUDS/nanobot/issues/2463)) – 13 comments, closed as stale but unresolved. It describes a mismatch between persisted conversation history and the actual prompt sent, undermining OpenAI compatibility. No fix is in sight.
- **Minimax‑m2.7 via Ollama Cloud failure** ([#2450](https://github.com/HKUDS/nanobot/issues/2450)) – closed, but the cloud‑hosted model still had second‑request failures; unclear if permanently fixed.
- **Discord forwarded messages** – PR [#2873](https://github.com/HKUDS/nanobot/pull/2873) (from April 6) remains open; it preserves message text when `referenced_message` arrives without `message_snapshots`, a long‑standing Discord edge case.
- **MCP reconnect fixes** – both [#4764](https://github.com/HKUDS/nanobot/pull/4764) and [#4843](https://github.com/HKUDS/nanobot/pull/4843) are open, indicating that the gateway crash on session timeout is not yet fully resolved despite multiple attempts.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-07-09

## 1. Today’s Activity Brief
In the last 24 hours, 50 issues were updated (40 open/active, 10 closed) and 50 pull requests were updated (29 open, 21 merged/closed). No new releases were published. Notable completed work includes fixes for the model-catalog provider alias credentials, a web UI navigation entry for Skills, and the closure of several long-standing bugs. The community also opened a significant architectural RFC (Issue #8850) proposing a move from compile-time feature flags to runtime-installable WASM plugins for channels and tools.

## 2. Releases
None.

## 3. Project Progress
Several fixes and features were merged or closed today:

- **Closed Issues (fixes merged or resolved)**
  - [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) – Feishu channel only called LLM, not Agent; now closed.
  - [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) – `model_switch` tool did not persist across turns; gateway/UI path ignored it.
  - [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) – `skills install/list/remove` targeted wrong data_dir on multi-agent installs.
  - [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) – Agent couldn’t use environment variables as `http_request` secrets.
  - [#7690](https://github.com/zeroclaw-labs/zeroclaw/issues/7690) – Provider tests for responses‑wire option propagation added.
  - [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) – Approval attribution carried via global side channel corrected.

- **Merged/Closed Pull Requests (selected)**
  - [#8861](https://github.com/zeroclaw-labs/zeroclaw/pull/8861) – Fixed model-catalog to use real API keys for credential-sensitive OpenAI-compatible providers, so native `/models` is available in the UI/CLI.
  - [#8795](https://github.com/zeroclaw-labs/zeroclaw/pull/8795) – Added a “Skills” navigation entry to the left sidebar in the web dashboard, making the existing `/skills` page reachable without direct URL.
  - [#8639](https://github.com/zeroclaw-labs/zeroclaw/pull/8639) – Implemented TodoWrite/TodoTracker for ZeroCode (RPC + ACP + durable persistence), a live read‑only task tracker.
  - [#8870](https://github.com/zeroclaw-labs/zeroclaw/pull/8870) – Fixed flaky `zeroclaw-log` tests by flushing async writes during reinit.
  - [#8867](https://github.com/zeroclaw-labs/zeroclaw/pull/8867) – Wrapped `SqliteMemory` embedder in `Arc` and added flush before log reinit test assertions, unblocking CI.

## 4. Community Hot Topics
The most discussed items today:

- **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) (13 comments)** – “zeroclaw does not know it can add cron.” Users expect the agent to understand that it has the `zeroclaw cron` tool when asked to schedule tasks. Underlying need: agent tool awareness and natural‑language scheduling.
- **[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) (7 comments)** – “单轮对话以及多轮对话会出现丢失 user message的现象” (Lost user messages in single and multi‑turn conversations). A data‑loss bug with `Qwen3.5‑35B` via a custom provider returning 400 errors. Need: reliable message delivery.
- **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) (7 comments)** – RFC for a `.ignore` file mechanism to protect workspace‑internal sensitive files (`.env`, configs) from agent access. Users want granular, Git‑ignore‑like file protection.
- **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (4 comments, opened today)** – Major RFC to move optional channels & tools from compile‑time features to WASM runtime plugins, allowing a stock binary to gain capabilities without recompilation. High community interest due to its architectural scope.
- **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) (5 comments)** – Support per‑agent custom environment variables for identity/parameter/token multi‑tenancy across process lanes and shared MCP instances.
- **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (4 comments)** – RFC for an OpenAI Chat Completions compatibility adapter, letting Open WebUI and similar clients connect without custom adapters.

## 5. Bugs & Stability
Several high‑severity bugs remain open:

- **S0 – Data loss / security risk**
  - [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) – `reasoning_content` not passed back in agentic tool‑call loops with Xiaomi thinking‑mode models (mimo‑v2.5). **No fix PR.**
  - [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) – Anthropic provider added via Quickstart is unavailable in chat until reset. **Needs reproduction; no fix PR.**

- **S1 – Workflow blocked**
  - [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) – Lost user messages when using Qwen3.5‑35B custom provider.
  - [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) – Telegram messages not clearly addressed to the assistant; llama.cpp interaction broken.
  - [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) – macOS app (15.7.7) cannot detect granted permissions, shows empty page, or disappears. **No fix PR.**

- **S2 – Degraded behavior**
  - [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) – Context overflow causes hallucination / topic drift in long conversations. **Stale and needs reproduction.**
  - [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) – Channels supervisor crashloops when all configured channels have `enabled=false`. **Blocked and needs author action.**

Several fix PRs are open that address related areas: [#8819](https://github.com/zeroclaw-labs/zeroclaw/pull/8819) fixes MCP tool filter classification, [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) shares the MCP registry across heartbeat ticks, and [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) corrects a misnamed property in Telegram bind‑error messages.

## 6. Feature Request Clusters
Recurring themes in open enhancements and RFCs:

- **Plugin / WASM runtime**
  - [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) – Move channels/tools to runtime WASM plugins.
  - [#8852](https://github.com/zeroclaw-labs/zeroclaw/pull/8852) – Actually run installed WASM channel plugins (stacked PR).
  - [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) – Host‑mediated outbound WebSocket for channel plugins.
  - [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) – Use OCI registries as plugin storage and discovery.

- **Security & multi‑tenancy**
  - [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) – `.ignore` file for workspace file protection.
  - [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) – Per‑agent env vars and secrets.
  - [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) – Plugin permission, config, and secrets model RFC.

- **Compatibility & integration**
  - [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) – OpenAI Chat Completions adapter.
  - [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) – Wire‑protocol‑first provider model RFC.

- **Tooling enhancements**
  - [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) – Enhance `file_read` with line caps, charset detection, PDF, notebook awareness.
  - [#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831) – Discord channel interaction‑surface parity (embeds, slash options, components, voice).

## 7. User Feedback Summary
Directly from issues:

- **Pain points**
  - Agent unaware of its own `cron` tool, misleading users into thinking scheduling is impossible ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)).
  - Messages silently lost in multi‑turn conversations with custom/Qwen providers ([#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)).
  - `model_switch` tool does not persist, confusing users who expect an immediate effect ([#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173), now closed).
  - Skills CLI commands broken for multi‑agent setups ([#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334), closed).
  - Environment variables unusable as HTTP request secrets ([#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553), closed).
  - Quickstart wizard omits port for webhook channel config ([#7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215), PR still open and stale).
  - macOS desktop app broken on latest macOS ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)).
  - Context overflow leads to hallucination ([#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517)).
  - Android Termux setup not straightforward ([#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)).

- **Positive signs**
  Several annoyances were fixed today: Feishu agent routing, Skills sidebar navigation, provider test coverage, and CI test flakiness. The TodoWrite tracker landed, and the agenda is shaping around WASM plugins and multi‑tenancy.

## 8. Backlog Watch
Issues and PRs that have been stalled or need maintainer attention:

- **[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** – Cron tool awareness; 13 comments, opened April 18, marked `stale‑candidate` and `blocked` with `needs‑author‑action`.
- **[#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)** – Reasoning content loss (S0); marked `stale‑candidate`, `

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-09

## Today’s Activity Brief
- **2 open issues** were updated in the last 24h, both remain unresolved: a **bug preventing OpenAI GPT from working on NanoKVM** (#3195) and a **feature request for streaming output on QQ channels** (#3201, marked stale).
- **3 pull requests were closed/merged** today, advancing gateway reliability, adding a Grafana Alertmanager channel, and fixing image embedding for Anthropic vision models.
- No new releases were published.
- Activity was concentrated on code merges, while user-facing issues and one longstanding feature request saw no follow-up.

## Releases
None.

## Project Progress
Three pull requests were merged/closed today, delivering concrete improvements:

1. **Gateway reliability** – PR #2278 ([`feat(gateway): fallback to wildcard bind with CIDR allowlist when loopback bind fails`](https://github.com/sipeed/picoclaw/pull/2278)) implements a controlled fallback policy when loopback binding isn’t available (e.g., in certain containers). The gateway now falls back to binding on all interfaces if the CIDR allowlist is configured, improving startup robustness.
2. **New channel for Grafana alerts** – PR #2251 ([`feat(channels): add Grafana Alertmanager webhook channel`](https://github.com/sipeed/picoclaw/pull/2251)) introduces an input-only `grafana_alertmanager` channel that parses Alertmanager webhook payloads and can trigger specific skills. This opens PicoClaw to monitoring and incident-response workflows.
3. **Anthropic vision model fix** – PR #3234 ([`CHORE (anthropic_messages): embed image media in user messages so vision models can see them`](https://github.com/sipeed/picoclaw/pull/3234)) corrects a bug where images loaded via `load_image` were dropped before reaching the model; now media URLs are embedded in user messages, enabling vision-capable Anthropic models to actually see attached images.

## Community Hot Topics
- **#3195** ([BUG] OpenAI GPT does not work on NanoKVM with default config](https://github.com/sipeed/picoclaw/issues/3195)) is the most commented item (2 comments, updated today). The reporter tried using `gpt-5.4` on a NanoKVM with stock configuration and all interactions returned errors. No workaround or maintainer diagnosis has been provided yet.
- **#3201** ([Feature] Support streaming output for QQ channel](https://github.com/sipeed/picoclaw/issues/3201)) requests real-time token streaming for QQ (the channel currently lacks the `StreamingCapable` interface). The issue is labeled `stale` and has received only 1 comment, suggesting it may be at risk of closure without maintainer engagement.

## Bugs & Stability
- **Critical/High** – #3195: OpenAI LLM integration is broken on NanoKVM with default configuration. Users on this platform cannot use PicoClaw for GPT-based conversations. No fix PR exists; the root cause is unknown.
- **Medium/improvement** – The image-dropping bug for Anthropic vision models (fixed by PR #3234) was resolved today, so no open stability issue remains for that scenario.

## Feature Request Clusters
- **Streaming support for QQ channel** (#3201) – This remains the lone open feature request today. The need is to align QQ with Telegram and WebSocket channels that already support incremental output, improving UX for QQ bot users. No associated PR is open, and the issue is stale.
- (The merged PRs represent completed feature work: gateway resilience and Alertmanager channel.)

## User Feedback Summary
- **NanoKVM user blocked** – A new user (#3195) attempted to set up PicoClaw on a NanoKVM with the documented model list, but the integration immediately fails. This suggests a gap in compatibility or documentation for this newly supported hardware (NanoKVM 2.4.0).
- **QQ channel users want streaming** – The request (#3201) indicates that lack of streaming degrades the experience compared to Telegram, where token-by-token display is expected.
- No other explicit feedback was recorded today.

## Backlog Watch
- **Issue #3201** (QQ streaming) has been stale and unattended; its low activity and `stale` label indicate a risk of automatic closure without a maintainer response.
- The recently merged PRs #2278 and #2251 were originally opened **3 months ago** (April 2026), suggesting that long-lived contributions do eventually get attention, but the project may have a slow review cadence for community PRs.
- The active bug #3195 lacks any maintainer acknowledgment; if it persists, it could deter new NanoKVM users.

</details>