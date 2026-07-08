# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-07-08 00:55 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-08

## 1. Today’s Activity Brief
Over the past 24 hours, the repository saw **500 issue updates** (380 open/active, 120 closed) and **500 pull request updates** (355 open, 145 merged/closed). No new releases were published. High-severity, long-standing issues around message loss, sub‑agent reliability, and tool output corruption continue to draw maintainer and community attention, while several fix PRs targeting critical session‑state and delivery bugs are under active review.

## 2. Releases
None.

## 3. Project Progress
Among PRs updated today, two were closed (no explicit merge confirmation in the data, but both are now closed):

- [#68936](https://github.com/openclaw/openclaw/pull/68936) – Autofix: PR review autofix pipeline + Windows background daemon (XL change, now closed).
- [#101931](https://github.com/openclaw/openclaw/pull/101931) – Refactor(memory-wiki): localize internal helper types (XS cleanup, closed).

Many open PRs are in advanced stages:
- [#101928](https://github.com/openclaw/openclaw/pull/101928) (P1) – Fixes session write‑lock deadlock during overflow‑recovery compaction.
- [#101611](https://github.com/openclaw/openclaw/pull/101611) – Swift 6.2 concurrency fix for the SQLite transcript cache.
- [#97485](https://github.com/openclaw/openclaw/pull/97485) – Proposed iteration budget safety feature for agent loops (XL, re‑review loop active).
- [#101521](https://github.com/openclaw/openclaw/pull/101521) – Fix for dropped `sessions_send` announcements on non‑plugin transports.
- [#88992](https://github.com/openclaw/openclaw/pull/88992) – Recovery of stranded replies in `message_tool_only` mode.
- [#101910](https://github.com/openclaw/openclaw/pull/101910) – Bound terminal reply‑run settlement to prevent permanent session wedging.

## 4. Community Hot Topics
The most commented issues (sorted by activity) point to persistent reliability and security gaps.

- [#25592](https://github.com/openclaw/openclaw/issues/25592) (33 comments, 🦞 diamond lobster)
  **Text between tool calls leaks to public messaging channels.**
  Processing output, error text, and inter‑tool narration appear in Slack, iMessage, etc. Underlying need: clean separation of internal agent reasoning from user‑facing messages.

- [#44925](https://github.com/openclaw/openclaw/issues/44925) (21 comments, 🦞 diamond lobster)
  **Subagent completion silently lost** – no retry, no notification, no auto‑restart on timeout.
  Exposes fragility in task orchestration; users want guaranteed delivery or at least observable failure.

- [#11829](https://github.com/openclaw/openclaw/issues/11829) (20 comments, 🦞 diamond lobster)
  **Security roadmap for protecting API keys from agent access.**
  Multi‑layer secret protection still missing; community pushes for comprehensive key sandboxing.

- [#22676](https://github.com/openclaw/openclaw/issues/22676) (17 comments, 🦞 diamond lobster)
  **Signal daemon stop() race condition on restart** leading to orphaned processes and send failures.
  Impacts reliability of Signal channel during config changes.

- [#85333](https://github.com/openclaw/openclaw/issues/85333) (15 comments, 🐚 platinum hermit)
  **Performance regression in `openclaw doctor --fix`** – 4‑5× slower on 2026.5.20 vs 2026.5.19.
  Operation-time regression affecting production maintenance workflows.

- [#29387](https://github.com/openclaw/openclaw/issues/29387) (14 comments, 🦞 diamond lobster)
  **Bootstrap files in per‑agent `agentDir` silently ignored.**
  Configuration confusion causing unexpected agent behaviour.

- [#99241](https://github.com/openclaw/openclaw/issues/99241) (13 comments, 🐚 platinum hermit)
  **Tool text outputs collapse into “(see attached image)” placeholders**, making stdout/stderr unreadable for the agent.
  Breaks long‑running or ANSI‑heavy workflows.

- [#39604](https://github.com/openclaw/openclaw/issues/39604) (13 comments, 🦞 diamond lobster, 11 👍)
  **Feature request: opt‑in private network access for `web_fetch`.**
  High user demand for fetching internal resources.

- [#43367](https://github.com/openclaw/openclaw/issues/43367) (13 comments, 🦞 diamond lobster)
  **Multi‑agent orchestration unstable** – concurrent `agents add` overwrites, session‑lock failures, detached child work.
  Users attempting parallel agent tasks hit fundamental coordination problems.

- [#31583](https://github.com/openclaw/openclaw/issues/31583) (13 comments, 🦞 diamond lobster, 2 👍)
  **`exec` tool does not inherit `skills.entries.*.env` environment variables.**
  Blocks injection of secrets/config into executed subprocesses, a security and usability gap.

## 5. Bugs & Stability
Severe bugs (P1, many with `impact:message-loss`, `impact:security`, `impact:crash-loop`) remain open. Where fix PRs exist they are noted.

- **Message/content leakage bugs**
  - [#25592](https://github.com/openclaw/openclaw/issues/25592) – Tool‑interleaved text leaks to channels. `linked-pr-open` label, fix not yet merged.
  - [#96857](https://github.com/openclaw/openclaw/issues/96857) – Tool outputs degrade to image placeholder. No fix PR visible; still in diagnosis.
  - [#99241](https://github.com/openclaw/openclaw/issues/99241) – Similar image‑attachment issue; needs live reproduction.

- **Agent‑orchestration & session‑state corruption**
  - [#44925](https://github.com/openclaw/openclaw/issues/44925) – Subagent results lost. Linked PR is open, awaiting maintainer review.
  - [#43367](https://github.com/openclaw/openclaw/issues/43367) – Multi‑agent concurrent failures. Linked PR open.
  - [#94846](https://github.com/openclaw/openclaw/issues/94846) – Cron isolated agent turn skipped delivery after early error. P2 but impact:message‑loss.

- **Crash‑loop / process‑management regressions**
  - [#22676](https://github.com/openclaw/openclaw/issues/22676) – Signal daemon orphan processes. Linked PR open.
  - [#38327](https://github.com/openclaw/openclaw/issues/38327) – “Cannot convert undefined or null to object” with Geminis 3 model; regression on 2026.3.2. No fix PR listed; needs investigation.

- **Configuration & environment isolation failures**
  - [#29387](https://github.com/openclaw/openclaw/issues/29387) – Bootstrap files ignored when `agent

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison – 2026-07-08

## 1. Daily Cross-Project Overview
Today’s data shows a stark activity gradient: OpenClaw recorded hundreds of issue and pull request updates, while the three peer projects (NanoBot, Zeroclaw, PicoClaw) each saw fewer than 50 total item updates. No project released a new version. Several severe reliability and security issues are reported concurrently across projects, particularly around tool output integrity, unauthenticated access, and performance regressions. Bug-fix pull requests were opened or advanced for many of these, but merge velocity varies significantly.

## 2. Activity Comparison

| Project   | Issues Updated (Open/Active, Closed) | PR Updates (Open, Merged/Closed) | New Release? | Activity Note |
|-----------|--------------------------------------|----------------------------------|--------------|--------------|
| OpenClaw  | 500 (380 open, 120 closed)          | 500 (355 open, 145 closed)      | No           | Very high-volume; large number of long-standing P1 bugs and ongoing reviews |
| NanoBot   | 12 (9 open, 3 closed)               | 29 (20 open, 9 closed)          | No           | Moderate; several channel regressions and a security disclosure cluster |
| Zeroclaw  | 23 (19 open, 4 closed)              | 50 (44 open, 6 closed)          | No           | Moderate; active bug-fix PRs and discussion on security/enhancement RFCs |
| PicoClaw  | 7 (5 open, 2 closed)                | 4 (3 open, 1 closed)            | No           | Low; most open items stale, no completed fixes, contributor PRs not landed |

## 3. OpenClaw Compared With Peers
- **Activity volume:** OpenClaw’s daily issue/PR counts (500/500) are an order of magnitude larger than any peer. The gap reflects a repository with a large user base reporting many defects and a high rate of patch submission.
- **Technical focus:** OpenClaw’s most-commented items centre on backend reliability (message leakage, sub‑agent result loss, session‑state corruption) and comprehensive security hardening (API key protection). Peers tend to focus on individual channel regressions (NanoBot), tool‑filtering correctness and Windows stability (Zeroclaw), or provider‑specific tool‑call bugs (PicoClaw).
- **Community surface area:** OpenClaw’s issue list spans transport layers, multi‑agent orchestration, session persistence, and model‑specific crashes. NanoBot’s surface area is channel and WebUI fixes; Zeroclaw’s is MCP tooling, policy gating, and UX polish; PicoClaw’s is narrow, with several stale items and few new reports.

## 4. Shared Technical Focus Areas
Multiple projects show requirements in the same areas today:

- **Tool / message output integrity** – Raw tool‑call text leaking to channels (OpenClaw #25592, PicoClaw #3153) and tool outputs collapsing into placeholders or being silently swallowed (OpenClaw #99241, NanoBot #4805). The problem manifests differently but appears across OpenClaw, NanoBot, and PicoClaw.
- **Security hardening against unauthenticated access and bypasses** – NanoBot’s unauthenticated WebUI token minting (#4825–#4827), Zeroclaw’s closed bypass of approval gates (#8678) and ongoing discussion about shell command confirmation tiers (#7155), and OpenClaw’s long‑standing API‑key sandboxing request (#11829) all point to a cross‑project need for stronger default security and policy enforcement.
- **Performance/resource regressions** – OpenClaw reports a 4‑5× slowdown in `openclaw doctor --fix` (#85333) and unbounded memory growth from tool‑schema cloning (#8642, also Zeroclaw). NanoBot had a hard‑coded 90‑second stream stall (#4013, closed today). Zeroclaw’s unbounded RSS growth (#8642) and Windows port zombies (#8800) reflect resource‑management gaps.
- **Agent‑orchestration reliability** – Sub‑agent completion loss (OpenClaw #44925), concurrent multi‑agent coordination failures (OpenClaw #43367), and context‑erasure on agent stop (Zeroclaw #8794) share the theme of fragile task state management. NanoBot’s group allowlist regression (#4823) is a lighter manifestation of session‑scope integrity.

## 5. Differentiation Analysis
- **Feature focus:** OpenClaw is a heavy‑duty core agent platform with multi‑transport messaging, sophisticated session management, and sub‑agent orchestration. NanoBot emphasizes lightweight multi‑channel chat bots with a built‑in WebUI and recent goal‑management modes. Zeroclaw targets tool‑driven agents with advanced MCP integration, visual SOP authoring, and fine‑grained policy controls. PicoClaw is oriented toward embedded/hardware targets (NanoKVM, ADB) and a limited set of message channels.
- **Target users:** OpenClaw’s issues suggest production operators and developers managing complex, always‑on agents. NanoBot’s users are often self‑hosters integrating into messaging apps; the regressions affect everyday chat. Zeroclaw’s feature requests (confirmation tiers, hot‑reload logs, prebuilt channel packs) appeal to operators who need tunable safety and deployment convenience. PicoClaw’s user base appears smaller and less served; reports focus on provider‑hardware combinations.
- **Technical architecture:** OpenClaw exhibits the largest surface area—session stores, transport plugins, agent loops, tool execution pipelines. Zeroclaw shows a similarly broad factor with MCP deferred access, tool‑filter groups, and SOP tooling. NanoBot’s architecture is simpler, facing issues like missing dependencies and simplistic tool validation. PicoClaw’s codebase, from the available data, has unfinished integrations and incomplete provider support.

## 6. Community Activity Notes
Using today’s counts only:

- **Very high activity:** OpenClaw (hundreds of updates, many contributors)
- **Moderate activity:** Zeroclaw and NanoBot (tens of updates, multiple merged fixes/features, active discussion on security and regressions)
- **Low activity:** PicoClaw (single‑digit updates, mostly stale, no merged fixes today)

No releases were made by any project today, so momentum is purely represented by issue/PR flow.

## 7. Evidence-Backed Observations
- **Tool output integrity is a recurring problem across projects.** OpenClaw and PicoClaw both suffer from raw tool‑call or inter‑tool text leaking into user‑facing outputs; NanoBot’s swallowed tool validation errors similarly hide failure from users. The commonality suggests that handling of assistant‑internal versus user‑visible output is a non‑trivial design challenge for agent systems of varying scale.
- **Security vulnerabilities around authentication and approval bypasses were disclosed in multiple projects today.** NanoBot’s unauthenticated token issuance and Zeroclaw’s closed milestone for approval bypass (plus ongoing confirmation‑tier discussion) indicate that proper access control remains an active maintenance burden, not a solved problem. OpenClaw’s long‑standing security roadmap request reinforces this.
- **Performance and resource regressions are interfering with production stability.** Each of OpenClaw, NanoBot, and Zeroclaw reported a distinct regression or unbounded resource growth today, suggesting that rapid iteration without sufficient performance regression safeguards impacts user experience across projects.
- **OpenClaw’s workload is qualitatively and quantitatively different from its peers.** Its issue/PR volume and the severity profile (multiple diamond‑lobster issues, many `impact:message-loss` and `impact:security` labels) reflect a project operating at a much larger scale, with a correspondingly larger maintenance overhead. Peer projects exhibit focused, channel‑ or feature‑specific bursts rather than the sustained high‑severity backlog seen in OpenClaw.
- **PicoClaw shows signs of low maintenance momentum.** Multiple open items are stale, contributor pull requests have been closed without merge, and no core fixes advanced today. This contrasts sharply with the other three projects where maintainers or contributors actively pushed patches and closed issues.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-08

## 1. Today’s Activity Brief
In the last 24 hours the NanoBot repository saw 12 issue updates (9 active, 3 closed) and 29 pull request updates (20 open, 9 merged/closed). No new release was published. Activity concentrated on stability fixes, channel regressions, and a cluster of security disclosures about the embedded WebUI token issuance. Several P1 (priority) PRs were opened addressing bugs, while multiple channel-related improvements and one major security advisory chain drew attention.

## 2. Releases
No new releases today.

## 3. Project Progress
Three pull requests were merged/closed, advancing the codebase:

- **Feishu new-session divider** – [#4763](https://github.com/HKUDS/nanobot/pull/4763) (closed) adds a divider message for `/new` commands in Feishu p2p chats, suppressing the duplicate text bubble.
- **Provider-hosted web search** – [#3743](https://github.com/HKUDS/nanobot/pull/3743) (closed) introduces opt-in support for provider-hosted web search (e.g., Azure OpenAI Responses API), complementing the feature request [#3741](https://github.com/HKUDS/nanobot/issues/3741).
- **Agent callback refactor** – [#3232](https://github.com/HKUDS/nanobot/pull/3232) (closed) simplifies task done-callback logic and restores accidentally deleted code blocks from a prior sync.

## 4. Community Hot Topics
The most discussed items (comment count) signal community pain points and maintainer attention:

- **[#4013](https://github.com/HKUDS/nanobot/issues/4013) [closed] Error calling LLM: stream stalled for more than 90 seconds** (6 comments) – a user upgrading from 0.1.5post2 to 0.2.0 encountered a hard‑coded stream stall that broke long-running tasks. The issue attracted substantial discussion before being closed.
- **[#4823](https://github.com/HKUDS/nanobot/issues/4823) [open] WhatsApp groups regression** (3 comments) – after updating to 0.2.2, the bot started responding in all groups, ignoring `allowFrom` group‑id entries. A fix PR [#4834](https://github.com/HKUDS/nanobot/pull/4834) was quickly opened.
- **[#4829](https://github.com/HKUDS/nanobot/issues/4829) [open] aiohttp missing in Slack dependencies** (2 comments) – the missing `aiohttp` package prevents the Slack plugin from running; fixed immediately by PR [#4830](https://github.com/HKUDS/nanobot/pull/4830).

Additionally, a trio of security‑related issues ([#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827)) reported by @YLChen-007 about unauthenticated token minting via `/webui/bootstrap` received zero comments so far, but their severity makes them a focal point.

## 5. Bugs & Stability
Critical bugs reported today, ordered by severity:

- **Security: Unauthenticated WebUI token issuance** – [#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827). Any local process can call `GET /webui/bootstrap` on loopback to obtain a valid API bearer token when no `tokenIssueSecret` or static `token` is set. No fix PRs yet.
- **Tool validation errors silently swallowed** – [#4805](https://github.com/HKUDS/nanobot/issues/4805). `suppress(Exception)` in `AgentRunner._run_tool()` hides critical validation failures. Fix PR [#4837](https://github.com/HKUDS/nanobot/pull/4837) replaces the blanket suppression with explicit logging.
- **Crash on multimodal messages** – [#4800](https://github.com/HKUDS/nanobot/issues/4800). Unconditional `.strip()` on non‑string `msg.content` (list‑form multimodal blocks) crashes two code paths. Fixed in the same PR [#4837](https://github.com/HKUDS/nanobot/pull/4837).
- **WhatsApp group allowlist broken** – [#4823](https://github.com/HKUDS/nanobot/issues/4823). Regression in 0.2.2: responses leak into all groups. Fix PR [#4834](https://github.com/HKUDS/nanobot/pull/4834).
- **WebUI first message can misroute** – [#4835](https://github.com/HKUDS/nanobot/issues/4835). A queued landing‑page message may be sent to an unrelated existing chat. Fix PR [#4836](https://github.com/HKUDS/nanobot/pull/4836).
- **Missing Slack dependency (aiohttp)** – [#4829](https://github.com/HKUDS/nanobot/issues/4829). Resolved by PR [#4830](https://github.com/HKUDS/nanobot/pull/4830).
- **(Closed) Stream stall error** – [#4013](https://github.com/HKUDS/nanobot/issues/4013) was closed today; it had been a persistent issue for one user since the 0.2.0 upgrade.

Other stability-related fixes opened today include zombie process reaping ([#4840](https://github.com/HKUDS/nanobot/pull/4840)) and `CancelledError` handling in MCP shutdown ([#4842](https://github.com/HKUDS/nanobot/pull/4842)).

## 6. Feature Request Clusters
User‑visible feature work that appeared today:

- **WebUI enhancements** – diff view for file edits ([#4828](https://github.com/HKUDS/nanobot/pull/4828)), document attachment support ([#4771](https://github.com/HKUDS/nanobot/pull/4771)), and prompt rail layout fix ([#4831](https://github.com/HKUDS/nanobot/pull/4831)).
- **Goal management** – sustained goals are gated behind an explicit runtime mode ([#4833](https://github.com/HKUDS/nanobot/pull/4833)), replacing always‑visible `long_task`/`complete_goal` tools with `create_goal`/`update_goal`.
- **Channel improvements** – Feishu session divider ([#4763](https://github.com/HKUDS/nanobot/pull/4763), merged), Telegram HTML overflow chunks ([#4839](https://github.com/HKUDS/nanobot/pull/4839)), QQ exponential reconnect backoff ([#4838](https://github.com/HKUDS/nanobot/pull/4838)), Matrix untrusted device cross‑signing gap ([#4841](https://github.com/HKUDS/nanobot/issues/4841)).
- **CLI usability** – proper handling of CSI‑u Shift+Enter to avoid raw escape dumps ([#4832](https://github.com/HKUDS/nanobot/pull/4832)).
- **Provider‑hosted tool support** – completed with [#3743](https://github.com/HKUDS/nanobot/pull/3743) (merged).
- **MCP server management** – idle‑timeout auto‑kill ([#4506](https://github.com/HKUDS/nanobot/pull/4506), open) and reconnect isolation ([#4764](https://github.com/HKUDS/nanobot/pull/4764), open).

## 7. User Feedback Summary
- **Positive sentiment** – user @mxnbf (in [#4013](https://github.com/HKUDS/nanobot/issues/4013)) noted the 0.1.5post2 version “has been very good (way to say ty)”, indicating appreciation for earlier stability.
- **Upgrade‑related friction** – the same user experienced a hard stream‑stall after moving to 0.2.0, and later ran into WhatsApp regressions in 0.2.2 ([#4823](https://github.com/HKUDS/nanobot/issues/4823)), suggesting that recent releases introduced breaking channel behavior.
- **Stability concerns** – reports of crashes on multimodal content ([#4800](https://github.com/HKUDS/nanobot/issues/4800)) and swallowed tool errors ([#4805](https://github.com/HKUDS/nanobot/issues/4805)) reflect gaps in error handling.
- **Security awareness** – @YLChen-007 filed three coordinated disclosures about the WebUI bootstrap endpoint, showing community vigilance.

## 8. Backlog Watch
Items that remain open without clear resolution, flagged for maintainer attention:

- **[#4669](https://github.com/HKUDS/nanobot/pull/4669) – Require API key for `serve`** (open since 2026-07-02, security, P1). Fixes [#4078](https://github.com/HKUDS/nanobot/issues/4078). No merge yet, though it addresses a critical auth gap.
- **[#4506](https://github.com/HKUDS/nanobot/pull/4506) – MCP server idle‑timeout auto‑kill** (open since 2026-06-25, marked conflict). Aims to prevent zombie MCP processes but has a merge conflict.
- **[#4764](https://github.com/HKUDS/nanobot/pull/4764) – Isolate MCP reconnect cancel scopes** (open since 2026-07-05, conflict). The fix works but the author notes the implementation is not ideal.
- **[#4771](https://github.com/HKUDS/nanobot/pull/4771) – Document attachments in WebUI** (open since 2026-07-06, conflict). Awaiting conflict resolution.

The three new WebUI security advisories ([#4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827)), though just opened, need an immediate response to prevent local token exposure.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## Zeroclaw Project Daily Digest – 2026-07-08

### Today’s Activity Brief
The repository saw 23 issue updates (19 open/active, 4 closed) and 50 pull request updates (44 open, 6 merged or closed) in the last 24 hours. No new releases were published. Bug reports concerning tool-filter groups, memory growth, and Windows port zombies remain active, while several fix PRs (e.g., for MCP tool-filtering, skills-tool bypass) were opened today. Two high-profile RFCs (#7155 shell confirmation, #8798 wire-protocol consolidation) continue to generate discussion.

### Releases
None.

### Project Progress
Six pull requests were merged or closed today, though the top-20-by-comment list (all open) does not include their details. Similarly, four issues were closed:
- **#6970** (`v0.8.1 integration/channel/provider/tool tracker`) – closed (operational tracker).
- **#8678** (`advance_step` bypass affects approval gates) – closed (resolved, presumably via a security fix).
- **#8815** (Feature: `skill_manage.create` action) – closed (feature implemented).
- **#8782** (Bump crossbeam-epoch to clear RUSTSEC-2026-0204) – closed (dependency fix).

Open PRs that appear to directly address reported bugs also advanced, including:
- **#8817** (Arc-share tool schemas to stop per-iteration clone churn, fixing #8642)
- **#8819** (classify `tool_filter_groups` targets by MCP origin, fixing #6699)
- **#8805** (align skill prompt callable-tool set with registry, fixing #8804)
- **#8788** (apply `excluded_tools` denylist to skill-registered tools, fixing #8787)

### Community Hot Topics

**Issues with most comments:**
- [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` no-op for real MCP tools (9 comments) – Core usability gap; users expect filter groups to work on MCP-backed tools. PR #8819 was opened today to address this.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) RFC: per-execution confirmation tier for high-risk shell commands (6 comments) – High interest in finer-grained security policy similar to Claude Code’s allow/ask/deny.
- [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) Publish full-channel prebuilt assets (5 comments) – Users want a prebuilt bundle that includes all channels to avoid confusion when configuring unsupported ones.
- [#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) Hot-reload log persistence/rotation config (3 comments) – Operator desire to avoid daemon restarts; PR #8816 was opened to implement this.

**Notable PRs (no comment counts available):**
- **#8690** gate `/model --agent` behind per-sender authorization (P1) – Security hardening for agent scope.
- **#8496** centralize deferred-MCP access policy – Architectural fix for MCP access enforcement.
- **#8590** SOP visual authoring with channel fan-in (size XL) – Large feature branch for SOP tooling.

### Bugs & Stability

**High Severity (S1/S2):**
- **#8794** [S1] Stopping the agent mid-work erases tool calls and thinking from context – Workflow-blocking bug reported today, no fix PR yet.
- **#6699** [P1, high risk] `tool_filter_groups` no-op – Open since May; fix PR #8819 opened today.
- **#8642** [P1, high risk] Unbounded RSS growth from MCP/tool-schema cloning – Open; fix PR #8817 opened today.
- **#8678** [P1, high risk] `advance_step` can bypass approval gate – Closed today (fix assumed merged).
- **#8800** [S2] Windows: killed zeroclaw process leaves port zombie – Reported today; no fix PR.
- **#8804** [S2] Skills prompt advertises tool set that doesn’t match registry – Fix PR #8805 opened today.
- **#8787** [S2] Skill-registered tools bypass `allowed_tools`/`excluded_tools` – Fix PR #8788 opened today.
- **#8797** Documentation error in bind-telegram setup (unknown config key) – Reported today.
- **#8810** Documentation wrong in Telegram example – Reported today.

**Minor (S3):**
- **#8792** Left sidebar missing Skills navigation entry.
- **#8791** Sidebar width causes horizontal scrollbar.

### Feature Request Clusters

- **Security & Policy Improvements:** RFC #7155 (shell command confirmation tiers), PR #8235 (runtime-profile prompt_injection_mode override), PR #8690 (per-sender authorization for `/model --agent`).
- **Configuration & Operations:** #8314 (hot-reload log config, PR #8816), #7952 (publish full-channel prebuilts), PR #8676 (expose `uses_memory` flag for cron jobs).
- **Channels & Integration:** PR #8384 (native Inkbox channel – email, SMS, voice, iMessage), PR #8337 (herdr agent reporting integration), issue #7952 (prebuilt channel packs).
- **Tooling & Extensibility:** #8815 (closed – `skill_manage.create` action), PR #8821 (metered max-iteration summary via `run_model_query`), PR #8496 (centralized MCP access policy), PR #8590 (visual SOP authoring, run overlays, channel fan-in).
- **UX Improvements:** #8803 (collapse completed turn steps in dashboard), #8798 (consolidate /ws/chat and /acp onto single wire protocol), sidebar fixes (#8792, #8791).

### User Feedback Summary

- A persistent pain point is that many tool-filter and access-control mechanisms either fail silently for MCP tools (#6699) or bypass policies for skill-defined tools (#8787). Community members (@Nillth, @IftekharUddin) have submitted fixes, but they remain unmerged.
- Users running on Windows report a zombie port condition after the agent is killed (#8800), making the daemon fail to restart.
- Telegram and documentation issues (#8797, #8810) indicate gaps in onboarding flows; users expect accurate, tested setup instructions.
- The web dashboard UI is missing expected navigation elements (Skills link missing) and has layout bugs (sidebar scrollbar), suggesting a desire for polish before stable release.
- High interest in operational controls like hot-reloading config (#8314) and command confirmation gates (#7155) shows user base expects production-grade safety.
- Contributions from multiple external developers (@NiuBlibing, @IftekharUddin, @Nillth, @wangmiao0668000666, @fanchanghu) on bug fixes and features indicate a growing contributor ecosystem.

### Backlog Watch

The following items have been open for an extended period without a merged resolution and may benefit from maintainer attention:
- **#6699** `tool_filter_groups` no-op (opened 2026-05-16, 9 comments). Fix PR #8819 was just opened; needs review.
- **#7155** Confirmation tier RFC (opened 2026-06-03, 6 comments). No implementation PR yet; feature may require design approval.
- **#7952** Full-channel prebuilts (opened 2026-06-19, 5 comments). No PR; the enhancement request may need resource allocation.
- **#8736** SOP authoring surface tracker – task-level issue, but linked to the large XL PR #8590; might act as a visibility placeholder.
- Several open PRs with `needs-author-action` labels (e.g., #8337 herdr integration, #8384 Inkbox channel) suggest maintainers awaiting contributor updates.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest — 2026-07-08**

---

### 1. Today’s Activity Brief
In the last 24 hours the repository recorded 7 issue updates and 4 pull request updates.
Of the issues, 5 remain open (all marked `[stale]` except one fresh bug report) and 2 were closed.
Pull requests saw 3 stays open and 1 closed (the Android ADB tool PR, closed as stale).
No new releases were published; the project remains at the previously known versions.

---

### 2. Releases
*No new releases.*

---

### 3. Project Progress
- **No pull requests were merged today.**
  The only closed PR, [#3157](https://github.com/sipeed/picoclaw/pull/3157) (`feat: add Android ADB remote operations tool`), was closed as stale without merging — the experimental feature did not advance.

- **Open fix/improvement PRs** (not yet merged):
  - [#3226](https://github.com/sipeed/picoclaw/pull/3226) attempts to stop `write_file` from encouraging destructive overwrite (linked to bug #3150).
  - [#3222](https://github.com/sipeed/picoclaw/pull/3222) refactors the DeltaChat integration, and [#3233](https://github.com/sipeed/picoclaw/pull/3233) provides backward‑compatibility follow‑up for that refactor.

Today’s pipeline therefore shows paused feature integration and no completed fixes.

---

### 4. Community Hot Topics
The most discussed item (though now closed) is:
- [#3093](https://github.com/sipeed/picoclaw/issues/3093) **“I need SimpleX or tox”** – 5 comments, 1 👍
  A user requested gateway support for SimpleX, Wire, or Tox. The issue was closed by the stale bot after no maintainer response; users may still desire decentralised messaging backends.

Active bugs with the most engagement:
- [#3153](https://github.com/sipeed/picoclaw/issues/3153) **Volcengine Doubao Seed tool calls leak raw `<seed:tool_call>` text** – 3 comments, open & stale
  Users report that with certain model plans tool invocations sometimes appear as unexecuted XML in the output, breaking the agent experience.

These items highlight interest in new messaging channels and reliable tool‑call handling for Doubao‑based models.

---

### 5. Bugs & Stability
Ranked by user‑visible impact:

1. **[#3153](https://github.com/sipeed/picoclaw/issues/3153) – Tool call leakage on Volcengine Doubao Seed**
   *Status: OPEN, stale; no fix PR linked.*
   Output contains raw `<seed:tool_call>` blocks instead of executing them. Severity: high — breaks agent function for that model/provider combination.

2. **[#3195](https://github.com/sipeed/picoclaw/issues/3195) – OpenAI GPT does not work on NanoKVM**
   *Status: OPEN, stale; no fix PR.*
   The new NanoKVM integration (feature in NanoKVM 2.4.0) fails with gpt-5.4. Severity: high for NanoKVM users trying OpenAI models.

3. **[#3232](https://github.com/sipeed/picoclaw/issues/3232) – Rate limiting doesn’t work if no fallback models is configured**
   *Status: OPEN (new); no fix PR.*
   RPM config is ignored when only `agents.defaults.model_name` is set and no fallback list exists. Severity: medium — affects throttling in single‑model setups.

4. **[#3159](https://github.com/sipeed/picoclaw/issues/3159) – Task repetition (closed stale)**
   *Status: CLOSED (stale), originally reported for deepseek-v4-flash-free.*
   The agent re‑executed a previous task before handling a new request, suggesting a caching or context reuse issue. Closed without resolution.

5. **[#3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197) – Codex & Antygravity OAuth login not working**
   *Status: OPEN, stale; vague reports by same author.*
   Login with two external services fails. No details beyond “not working”, making triage difficult. Severity: medium for affected services.

A fix PR (open) exists for a related but distinct tool flaw: [#3226](https://github.com/sipeed/picoclaw/pull/3226) targets `write_file`’s destructive‑overwrite coaching issue (#3150).

---

### 6. Feature Request Clusters
- **Decentralised messaging gateways**
  Closed [#3093](https://github.com/sipeed/picoclaw/issues/3093) requested SimpleX / Tox / Wire support, but it was stale‑closed. No implementation PR emerged.

- **Android device remote operations**
  [#3157](https://github.com/sipeed/picoclaw/pull/3157) (ADB tools) was closed as stale — the feature did not land. Interest exists in controlling physical devices from the agent.

- **Model/provider integration improvements**
  Multiple reports indicate incomplete integration (Volcengine Doubao tool calls, NanoKVM+OpenAI, OAuth for Codex/Antygravity). The community wants equal functionality across supported back‑ends.

- **Rate limiting without fallback**
  [#3232](https://github.com/sipeed/picoclaw/issues/3232) suggests that users expect rate limits to work even when a single model is configured, without requiring a fallback chain.

---

### 7. User Feedback Summary
- **Pain points:**
  Users on Volcengine’s Doubao Seed plan see raw tool‑call XML leaks (unusable agent). NanoKVM users cannot get OpenAI models to work at all. Repetitive task execution creates confusion. OAuth logins for external services are failing. Rate limiting is ineffective in simple configurations.

- **Disappointment:**
  The stale‑closing of [#3093](https://github.com/sipeed/picoclaw/issues/3093) without maintainer comment suggests a lack of engagement on feature requests. The Android ADB feature was similarly closed without progress, possibly frustrating contributors.

- **Expectations:**
  Users expect the documented configuration methods to work across all listed providers and deployment targets (like NanoKVM). Gaps in compatibility lead to immediate “not working” reports with minimal diagnostics.

---

### 8. Backlog Watch
These items have gone unanswered for weeks and merit maintainer attention:

- **[#3153](https://github.com/sipeed/picoclaw/issues/3153) – Volcengine Doubao tool call leakage**
  Opened 2026-06-22, now stale, 3 comments, no acknowledged response. Core functionality broken for a provider.

- **[#3195](https://github.com/sipeed/picoclaw/issues/3195) – NanoKVM OpenAI failure**
  Opened 2026-06-30, stale, 2 comments. Affects a recently advertised NanoKVM integration.

- **[#3093](https://github.com/sipeed/picoclaw/issues/3093) – SimpleX/Tox gateway request**
  Opened 2026-06-10, closed stale 2026-07-07 without interaction. May resurface as community demand.

- **Open PRs pending review:**
  [#3222](https://github.com/sipeed/picoclaw/pull/3222) (large DeltaChat refactor) and [#3233](https://github.com/sipeed/picoclaw/pull/3233) (backward compat) are recent, but earlier PRs like [#3157](https://github.com/sipeed/picoclaw/pull/3157) highlight a pattern of contributors’ work being stale‑closed, which could discourage future submissions.

</details>