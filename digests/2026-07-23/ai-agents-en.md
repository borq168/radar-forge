# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 472 | PRs: 500 | Projects covered: 2 | Generated: 2026-07-23 03:54 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-23

## 1. Today’s Activity Brief
OpenClaw saw very high repository activity in the last 24 hours, with 472 issues updated (323 open, 149 closed) and 500 pull requests updated (298 open, 202 merged/closed). No new releases were published. The top issues remain dominated by recurring feature requests for Linux/Windows desktop apps and a cluster of performance, crash, and channel-specific bugs. Maintainers closed a handful of notable PRs today, including a UI sidebar refactor, a CI watcher utility, and a frozen-target CI fix.

## 2. Releases
No new releases.

## 3. Project Progress
Three pull requests were merged or closed today, all authored by core maintainers:

- **UI sidebar session data ownership refactor** [#112853](https://github.com/openclaw/openclaw/pull/112853) (closed) – moved sidebar session and catalog data into a reactive controller, following earlier extractions of the render boundary and attention logic. Reduces coupling in the web UI’s session management.
- **CI watcher with mergeable and attach prechecks** [#112821](https://github.com/openclaw/openclaw/pull/112821) (closed) – added a repository-bound CI watcher that checks merge readiness, head movement, conflicts, and workflow runs while limiting API quota consumption.
- **CI fix for frozen targets** [#112860](https://github.com/openclaw/openclaw/pull/112860) (closed) – skipped the new OpenClawKit suite for frozen release candidates whose workflows do not declare it, preventing a false CI failure during full release validation.

## 4. Community Hot Topics
The most active issues by comment count and reactions reveal both long-standing feature hunger and acute operational pain:

- **Linux/Windows desktop apps** [#75](https://github.com/openclaw/openclaw/issues/75) (115 comments, 80 👍) – the most-requested feature across all platforms; macOS, iOS, and Android already have native UIs, but Linux and Windows are missing.
- **`openclaw doctor --fix` 4–5× performance regression** [#85333](https://github.com/openclaw/openclaw/issues/85333) (17 comments, 1 👍) – a path traversal bottleneck in session snapshot code made the fix command 229+ seconds instead of 55s between v2026.5.19 and 2026.5.20.
- **Pre-response enforcement hooks (hard gates)** [#13583](https://github.com/openclaw/openclaw/issues/13583) (16 comments, 2 👍) – users in high-stakes (quant/finance, security) workflows want the agent mechanically prevented from answering until required tool calls are made, not just prompted.
- **Codex PreToolUse native hook relay CPU stall** [#91009](https://github.com/openclaw/openclaw/issues/91009) (15 comments, 2 👍) – spawning `openclaw-hooks` processes for each pre‑tool‑use event blocks gateway RPC and consumes 100%+ CPU.
- **Masked secrets (use API keys without seeing them)** [#10659](https://github.com/openclaw/openclaw/issues/10659) (15 comments, 4 👍) – prevents agents from leaking raw credentials via prompt injection.

## 5. Bugs & Stability
Several high-severity regressions and crashes remain open, while a few older P0/P1 items were closed.

### Open P0 / critical
- **Gateway fails to start after update to 2026.7.1** [#108435](https://github.com/openclaw/openclaw/issues/108435) (P0, regression) – systemd, ollama, and manual launch all fail with `Error: gateway did not start on 127.0.0.1:18789`. No fix PR yet.

### Open P1 regressions & crashes
- **Cron tool schema incompatible with llama.cpp grammar‑constrained calling** [#108580](https://github.com/openclaw/openclaw/issues/108580) (P1, regression) – all chat requests fail, not just cron calls; a linked PR is open.
- **QQBot WebSocket reconnection causes “Outbound not configured” error** [#88955](https://github.com/openclaw/openclaw/issues/88955) (P1, regression) – after 30‑min QQ session timeout, outbound adapter is not re‑registered. Linked PR open.
- **Feishu streaming card full‑content updates cause severe latency** [#91941](https://github.com/openclaw/openclaw/issues/91941) (P1, regression) – long replies cause CardKit update latency to grow sharply.
- **Subagent run completion leaks raw worker output to chat user** [#90840](https://github.com/openclaw/openclaw/issues/90840) (P1, regression) – child output is delivered to the QQBot direct chat instead of being summarized for the parent agent.
- **Screen readers announce every streaming token** [#65538](https://github.com/openclaw/openclaw/issues/65538) (P1, accessibility) – `aria-live="polite"` causes continuous fragmented speech; linked PR open.
- **WhatsApp auto‑reply fails with “No active WhatsApp Web listener”** [#110504](https://github.com/openclaw/openclaw/issues/110504) (P1, closed) – a durable delivery path regression (extending #52781) was fixed.
- **Codex harness mirrored‑session‑history read fails for ephemeral sessions** [#99947](https://github.com/openclaw/openclaw/issues/99947) (P1) – cleanup retires a shared app‑server client while other turns are in flight.
- **Compaction timeout (180s) blocks entire pipeline with no partial reuse** [#92043](https://github.com/openclaw/openclaw/issues/92043) (P1) – any compaction that legitimately needs >180s fails identically every turn.

### Closed high‑severity items
- **macOS app install icon not clickable** [#98674](https://github.com/openclaw/openclaw/issues/98674) (P0, regression) – closed via linked PR.
- **`sessions_spawn` fails with missing `operator.write` scope** [#77807](https://github.com/openclaw/openclaw/issues/77807) (P1) – closed.
- **Gateway restart loop on macOS after 2026.5.18** [#83968](https://github.com/openclaw/openclaw/issues/83968) (P1) – closed.
- **Model fallback chain not triggered on provider‑wide quota exhaustion** [#85103](https://github.com/openclaw/openclaw/issues/85103) (P1) – closed.

## 6. Feature Request Clusters
User‑requested capabilities and linked PRs beyond the hot‑topic list:

- **Multi‑account Teams bot support** [#112811](https://github.com/openclaw/openclaw/pull/112811) (PR) – enables multiple bot identities per gateway (related to [#71058](https://github.com/openclaw/openclaw/issues/71058)).
- **Hosting profiles** [#107765](https://github.com/openclaw/openclaw/pull/107765) (PR, stacked) – standard profiles for Android, web UI, gateway, CLI, Docker. Depends on readiness conditions [#104018](https://github.com/openclaw/openclaw/pull/104018).
- **Readiness conditions and providers** [#104018](https://github.com/openclaw/openclaw/pull/104018) (PR) – lets hosts/operators define custom readiness criteria (RFC 0023).
- **Shell precheck gate for cron jobs** [#112375](https://github.com/openclaw/openclaw/pull/112375) (PR) – skip LLM when no work is found, saving token costs.
- **Portable agent policy settings** [#112773](https://github.com/openclaw/openclaw/pull/112773) (PR) – lets Claw manifests select built‑in tool profiles, define `allow`/`deny`, and set memory‑search behavior.
- **Onboarding migration staging** [#112798](https://github.com/openclaw/openclaw/pull/112798) (PR) – imports are staged and verified before promotion, avoiding partial writes to live config.
- **Signal channel: local/existing server setup guide** [#112863](https://github.com/openclaw/openclaw/pull/112863) (PR) – adds detection, validation, and recovery for non‑managed signal‑cli setups.
- **Composable termination algebra + GSAR grounding scorer** [#75165](https://github.com/openclaw/openclaw/pull/75165) (long‑standing PR) – adds a modular termination system for

---

## Cross-Ecosystem Comparison

## Cross-Project Comparison Report — 2026-07-23

### 1. Daily Cross-Project Overview
Today’s activity was heavily concentrated in the OpenClaw repository, which saw hundreds of issue and pull request updates alongside a few merged maintenance PRs. The downstream LobsterAI project was much quieter, with only a handful of merged bug fixes and the triage closure of stale feature requests and a stale issue. No new releases were published by either project. The most concrete shared technical concern visible today is gateway stability, with OpenClaw grappling with a critical start-up regression and LobsterAI shipping a guard against Out‑of‑Memory crashes in the OpenClaw gateway it consumes.

### 2. Activity Comparison

| Project        | Issues Updated              | PRs Updated                     | New Releases | Activity Note                                                                                   |
|----------------|-----------------------------|---------------------------------|--------------|-------------------------------------------------------------------------------------------------|
| **OpenClaw**   | 472 (323 open, 149 closed)  | 500 (298 open, 202 merged/closed) | None         | Extremely high volume; dominated by feature requests, regressions, and UI/CI infrastructure PRs. |
| **LobsterAI**  | 1 (closed as stale)         | 5 (3 merged, 2 closed stale)    | None         | Low volume; entirely maintenance-oriented with targeted fixes and stale backlog cleanup.         |

### 3. OpenClaw Compared With Peers
OpenClaw’s activity today was orders of magnitude larger than LobsterAI’s in raw counts (472 vs 1 issues, 500 vs 5 PRs). The nature of activity also differs: OpenClaw’s issue tracker and PR queue reflect a broad, multi-stakeholder community debating long‑standing feature requests (desktop apps, hard‑gate enforcement, masked secrets) and surfacing critical regressions (gateway start failures, performance drops). LobsterAI’s work was narrowly scoped — three merged fixes for an installer, a modal stacking bug, and an OOM crash guard in the OpenClaw gateway, plus the closure of two stale feature PRs and one stale issue. There is no sign of upstream collaboration from LobsterAI into OpenClaw today; the downstream fix is a self‑contained workaround.

### 4. Shared Technical Focus Areas
- **Gateway stability and transcript size management**
  OpenClaw has a P0 regression where the gateway fails to start after update [#108435](https://github.com/openclaw/openclaw/issues/108435), a performance regression in `openclaw doctor --fix` [#85333](https://github.com/openclaw/openclaw/issues/85333), and a compaction timeout that blocks pipelines [#92043](https://github.com/openclaw/openclaw/issues/92043). LobsterAI merged PR [#2375] that guards against JS heap‑out‑of‑memory crashes when the gateway loads an oversized transcript, and prevents zombie reconnects after an OOM restart. Both projects are thus contending with gateway robustness and the handling of large conversation histories.

- **Scheduled tasks / cron**
  OpenClaw has a shell precheck gate for cron jobs [#112375](https://github.com/openclaw/openclaw/pull/112375) (merged) to skip LLM invocations when no work is found. LobsterAI had a feature request and PR for cron custom scheduling, agent selection, and duplicate name validation (issue [#1348], PR [#1347]), both closed as stale. The overlap indicates a user need for flexible, validated scheduling, but the status of implementation differs markedly.

- **Windows platform support**
  OpenClaw has a long‑standing, highly‑voted request for a Windows desktop app [#75](https://github.com/openclaw/openclaw/issues/75). LobsterAI merged a Windows installer hardening PR [#2377] to improve update robustness. Both are concrete Windows‑related activities, though one is a user‑facing feature request and the other a maintenance hardening.

### 5. Differentiation Analysis
- **Feature focus**
  OpenClaw is an extensible, multi‑channel AI agent framework with plugins, tool hooks, custom channels (QQ, Feishu, WhatsApp, Teams, Signal), and a public gateway/CLI. Its feature requests span security (masked secrets, pre‑response gates), developer tooling (CI, hosting profiles, composable termination), and platform parity (desktop apps). LobsterAI is a downstream personal AI assistant application that uses the OpenClaw gateway and adds application‑layer features like scheduled tasks, cowork export, and skills management. Today’s merged PRs for LobsterAI are UI and installer fixes, while its attempted feature work (skills, cron) was abandoned.

- **Target users**
  OpenClaw targets developers, integrators, and power users who build and extend agent workflows. LobsterAI targets end‑users of a personal assistant product, with a focus on simplicity and pre‑built features.

- **Technical architecture**
  OpenClaw’s changes today touch gateway internals, CI, reactive UI controllers, and channel adapters. LobsterAI’s changes are constrained to its renderer (Electron‑like UI), installer, and a defensive layer around the OpenClaw gateway. LobsterAI does not modify the OpenClaw core itself; it applies patches in its own codebase.

### 6. Community Activity Notes
Based solely on today’s counts and releases, the projects fall into distinct activity tiers:
- **OpenClaw** — *High activity*: hundreds of issues and PRs updated, multiple active discussions with 15+ comments on hot topics, and a mix of user‑raised regressions and maintainer‑authored PRs.
- **LobsterAI** — *Low activity*: only one issue closure and five PRs (two of which were stale), no active discussions, and a triage‑oriented day.

No releases were published by either project, so release cadence is not a differentiator today.

### 7. Evidence-Backed Observations
1. **Gateway stability is a shared pain point.** OpenClaw has an open P0 start‑up regression and multiple performance‑related bugs; LobsterAI, as a consumer, had to implement its own workaround for OOM crashes caused by large transcripts. This signals that the underlying gateway’s robustness is critical for both the core project and downstream applications.

2. **Scheduled task capabilities are a recurring request, but progress is stalled in one project.** OpenClaw merged a cost‑saving shell precheck for cron jobs, while LobsterAI’s more comprehensive cron scheduling feature (with an agent selector and duplicate name validation) was closed as stale. The need exists in both ecosystems, but implementation maturity is uneven.

3. **Windows support remains a cross‑project concern, though in different forms.** OpenClaw’s community continues to demand a full Windows desktop app (115 comments, 80 👍), while LobsterAI hardened its Windows installer. This shows complementary but distinct platform needs: end‑user distribution vs. core application availability.

4. **UI improvements are being made in both projects, but at different architectural levels.** OpenClaw refactored its sidebar session data ownership into a reactive controller (a structural change), while LobsterAI fixed a modal stacking conflict with a portal mount. The former is a longer‑term maintainability investment, the latter a quick remediation.

5. **No clear cross‑project signal of new feature alignment or coordinated change.** The only direct interaction is LobsterAI’s mitigation of an OpenClaw gateway bug. Otherwise, the projects operate at separate layers of the stack, and today’s data does not reveal any emerging joint standard or convergence.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

## 1. Today’s Activity Brief

On 2026-07-22 the LobsterAI repository saw no new releases, but 5 pull requests were merged or closed, and 1 issue was closed. Three PRs that landed today bring targeted fixes: Windows installer hardening, a modal stacking fix for the cowork export UI, and an OOM crash guard for oversized transcripts in the OpenClaw gateway. Two older feature PRs (skills management and scheduled task cron/agent integration) were closed as stale, and the corresponding issue about duplicate scheduled task name validation was also closed as stale after four months of inactivity. The day’s activity was entirely maintenance-oriented, with no feature additions surviving the triage.

## 2. Releases

No new releases were published today.

## 3. Project Progress

All five PRs updated today were closed; three were merged fixes, and two were abandoned stales.

- **[#2377] feat: windows update installer hardening** – Merged. Hardens the Windows update installer flow (area: renderer, main, platform: windows). Author: @fisherdaddy.
- **[#2376] fix(cowork): render export modal above sidebar** – Merged. Mounts the export options modal via a body portal to avoid stacking context conflicts with the sidebar. Author: @liuzhq1986.
- **[#2375] fix(openclaw): guard against oversized transcript OOM crashes** – Merged. Prevents the gateway from loading an oversized active transcript, classifies JS heap‑out‑of‑memory gateway crashes, and ignores stale client generations after a heap‑OOM restart to avoid zombie reconnects. Author: @fisherdaddy.
- **[#1346] Feat/skills management** – Closed as stale. Originally opened on 2026‑04‑02, referenced PR #846 and aimed to “optimize PR according to official requirements”. No merge activity.
- **[#1347] feat(scheduledTask): 新增 Cron 自定义调度、Agent 选择器及交互体验优化** – Closed as stale. Also opened on 2026‑04‑02, this PR added cron custom scheduling, Agent/Model binding, and UX unification for scheduled tasks. The branch was stale and closed without merging.

## 4. Community Hot Topics

The only item with any comments is the now‑closed issue [#1348] [stale] 定时任务名称重复没有校验 (Duplicate scheduled task name not validated). It received 2 comments since its creation on 2026‑04‑02 and was closed today as stale. The underlying need is clear: users want built‑in validation to prevent duplicate names when creating or editing scheduled tasks, which currently lack a uniqueness check. The issue was not addressed in the codebase before being closed.

## 5. Bugs & Stability

- **Critical – Gateway OOM crash from oversized transcripts**
  PR [#2375] directly addresses a JS heap‑out‑of‑memory crash in the OpenClaw gateway when loading an oversized active transcript. The fix blocks turns before the gateway loads the transcript, classifies the OOM, and prevents zombie reconnects after a restart. This resolves a production‑level crash.

- **Low – Export modal stacking conflict**
  PR [#2376] fixes a visual bug where the cowork export options modal could be obscured by the sidebar due to stacking context conflicts. The fix mounts the modal via a body portal.

- **Hardening – Windows installer robustness**
  PR [#2377] was not a bug report but a proactive hardening of the Windows update installer, which may prevent future installation or update failures.

No open crash or regression reports were filed today.

## 6. Feature Request Clusters

The closure of issue [#1348] and stale PR [#1347] reveals a cluster of requests around scheduled task management:

- **Duplicate name validation** – Users want the system to reject duplicate names when creating/editing scheduled tasks (issue [#1348]).
- **Cron custom scheduling, Agent selection, UX improvements** – PR [#1347] proposed a comprehensive enhancement including a visual cron builder, raw expression mode, Agent/Model binding, and unified form interactions.

Both items were closed as stale without implementation, indicating that the scheduled task module remains a focus area for user requests but has not received maintainer attention recently.

## 7. User Feedback Summary

- **Unaddressed pain points**: The community has expressed a clear need for better scheduled task validation (name uniqueness) and more flexible scheduling (cron expressions, Agent binding). These requests were acknowledged only through the stale closure of the corresponding issue and PR, which may signal dissatisfaction with the response time.
- **Positive responsiveness**: Today’s three merged PRs show that the team is actively fixing critical crashes (OOM) and minor UI issues (modal stacking), as well as hardening the installer. These fixes address real‑world stability and usability problems.
- **Mixed signal**: While immediate bug fixes were delivered, longer‑standing feature requests from April 2026 were closed without action, potentially leaving users who contributed those proposals feeling ignored.

## 8. Backlog Watch

The following items had been open for approximately four months and were closed today with no resolution, indicating they fell through the cracks:

- **[#1348] [stale] 定时任务名称重复没有校验** – Feature request / validation issue, no fix implemented.
- **[#1347] [stale] feat(scheduledTask): …** – Complete feature PR, abandoned.
- **[#1346] [stale] Feat/skills management** – Skills management feature PR, abandoned.

These items represent potential backlog debt that was written off rather than revived. If the underlying needs are still valid, maintainers may want to re‑evaluate whether they should be re‑opened or re‑prioritised.

</details>