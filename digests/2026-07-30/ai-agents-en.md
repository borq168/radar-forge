# OpenClaw Ecosystem Digest 2026-07-30

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-07-30 00:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-30

## 1. Today’s Activity Brief
In the last 24 hours, **500 issues** were updated (438 remain open/active, 62 closed) and **500 pull requests** were updated (91 merged/closed, 409 remain open). No new releases were published. The activity is dominated by high-severity bug reports, particularly around the Codex app‑server integration, OAuth credential handling, gateway stability, and session‑state management, with many issues carrying `P1` and `🦞 diamond lobster` ratings. A significant number of open PRs are in the “ready for maintainer look” state, suggesting an active community fixing and iterating on the platform.

## 2. Releases
*None today.*

## 3. Project Progress
Among the 91 closed/merged PRs, the provided top‑30 list includes two closed items:
- **#116025** — `fix(doctor): fail closed on unknown channel schema for groupAllowFrom migration` — prevents a production breakage during OpenClaw beta upgrades. ([link](https://github.com/openclaw/openclaw/pull/116025))
- **#116137** — `fix: avoid Swift contention on hosted release runs` — stabilises macOS CI by avoiding parallel test conflicts. ([link](https://github.com/openclaw/openclaw/pull/116137))

Several other PRs are marked as “ready for maintainer look” and address critical fixes:
- **#116057** — stop MEMORY.md compaction from deleting user headings. ([link](https://github.com/openclaw/openclaw/pull/116057))
- **#116128** — fix `apply_patch` rewriting bytes on hunk context lines. ([link](https://github.com/openclaw/openclaw/pull/116128))
- **#116142** — preserve outbound delivery settlement for Mattermost. ([link](https://github.com/openclaw/openclaw/pull/116142))
- **#89419** — allow explicit main agent bindings when `agents.list` is non‑empty. ([link](https://github.com/openclaw/openclaw/pull/89419))
- **#116133** — redact sensitive headers in standalone debug proxy captures. ([link](https://github.com/openclaw/openclaw/pull/116133))
- **#116104** — fix chat Send/Stop responsiveness on mobile. ([link](https://github.com/openclaw/openclaw/pull/116104))

## 4. Community Hot Topics
The most commented issues in the last 24 hours reflect critical reliability concerns:

1. **#91009** (18 comments) – Codex PreToolUse native hook relay spawns CPU‑bound processes and stalls the gateway RPC. Severe impact on message delivery and can cause crash loops. ([link](https://github.com/openclaw/openclaw/issues/91009))
2. **#86996** (15 comments) – Active Memory + Codex app‑server path causes long response latency, hook timeouts, startup aborts, and event‑loop stalls. ([link](https://github.com/openclaw/openclaw/issues/86996))
3. **#39476** (13 comments) – A2A `sessions_send` can call back to the requester, causing duplicate messages in the channel. ([link](https://github.com/openclaw/openclaw/issues/39476))
4. **#84516** (11 comments) – Codex app‑server truncates long agent replies at ~1000 chars with no error indication. ([link](https://github.com/openclaw/openclaw/issues/84516))
5. **#88657** (10 comments) – DeepSeek V4 Flash produces incomplete turns (`payloads=0`, `stopReason=stop`) after a version upgrade. ([link](https://github.com/openclaw/openclaw/issues/88657))
6. **#86215** (10 comments) – Codex OAuth refresh failures can wedge an agent for hours without clear alerting. ([link](https://github.com/openclaw/openclaw/issues/86215))

*Underlying needs:* The community is focused on **Codex integration stability**, **session and message delivery guarantees**, **auth provider resilience**, and **model‑specific behaviour regressions**. Many users are deploying OpenClaw in production (Telegram, cron, home automation) and expect reliable operations.

## 5. Bugs & Stability
The following high‑severity bugs were active today, many with fix PRs already linked:

- **#91009** (P1, diamond lobster) – CPU‑bound `openclaw‑hooks` processes stall gateway; fix PR exists. ([link](https://github.com/openclaw/openclaw/issues/91009))
- **#86996** (P1, diamond lobster) – Active Memory + Codex causes latency, timeouts, stalls; fix PR exists. ([link](https://github.com/openclaw/openclaw/issues/86996))
- **#89315** (P1, silver shellfish) – Gateway heap grows unbounded, killed by OOM on long‑running Linux deployments; no fix PR visible. ([link](https://github.com/openclaw/openclaw/issues/89315))
- **#112423** (P1, silver shellfish) – Large SQLite transcript cleanup blocks the gateway event loop. ([link](https://github.com/openclaw/openclaw/issues/112423))
- **#84516** (P1, silver shellfish) – Codex replies silently truncated at ~1000‑1100 chars; fix PR exists. ([link](https://github.com/openclaw/openclaw/issues/84516))
- **#86215** (P1, platinum hermit) – OAuth refresh failures wedge agents for hours. ([link](https://github.com/openclaw/openclaw/issues/86215))
- **#89095** (P1, diamond lobster) – Sub‑agent run timeout silently drops the completion event; no parent notification. ([link](https://github.com/openclaw/openclaw/issues/89095))
- **#97616** (P1, regression) – Hook/tool child processes leak as zombies, degrading runtime. ([link](https://github.com/openclaw/openclaw/issues/97616))
- **#88955** (P1, regression) – qqbot WebSocket reconnection causes “Outbound not configured” error. ([link](https://github.com/openclaw/openclaw/issues/88955))

*Key observation:* A cluster of regressions and cascading failures (e.g., #80040) suggests that the rapid release cadence occasionally introduces new stability issues, and the community is actively providing reproductions.

## 6. Feature Request Clusters
User‑requested features visible in today’s data:

- **Dynamic model discovery** (#10687, 9 comments, 👍3) – wants real‑time model catalog from providers like OpenRouter, rather than static lists. ([link](https://github.com/openclaw/openclaw/issues/10687))
- **Per‑model usage/cost tracking** (#13219, 7 comments, 👍1) – native aggregated logging for cost optimisation. ([link](https://github.com/openclaw/openclaw/issues/13219))
- **Image‑generation metadata capture** (#85461, 6 comments) – provider‑returned usage metadata for image generation. ([link](https://github.com/openclaw/openclaw/issues/85461))
- **Slack modal support** (#88154, 7 comments) – interactive workflows via Slack’s native modal UI. ([link](https://github.com/openclaw/openclaw/issues/88154))
- **Memory lifecycle curation** (#87660, 7 comments, 👍2) – LLM‑driven `MEMORY.md` curation with durable anchors. ([link](https://github.com/openclaw/openclaw/issues/87660))
- **Suppress sub‑agent announce** (#8299, 7 comments, 👍1) – config option to avoid chat clutter from sub‑agent summaries. ([link](https://github.com/openclaw/openclaw/issues/8299))
- **AI safety / observability events** (#82548, 7 comments) – first‑class signals for prompt injection, citation quality, etc. ([link](https://github.com/openclaw/openclaw/issues/82548))

Related PRs: #114841 renames `cron` tool to `automations` (RFC 0026), and #109009 enforces MEMORY.md privacy for shared channels.

## 7. User Feedback Summary
Users are running OpenClaw in production for **family and business assistants** (Telegram, cron jobs, Home Assistant), as noted in #73537. The main pain points are:
- **Unreliability of Codex OAuth** leading to silent failures and hours‑long agent wedges (#86215, #89278).
- **Message loss and truncated replies** (#84516, #86034, #92186, #92374) that erode trust in agent output.
- **Gateway crashes and resource leaks** (OOM #89315, zombies #97616, event‑loop blocking #112423) that make long‑running deployments fragile.
- **Model‑specific regressions** (DeepSeek #88657, Bedrock #88707) after minor version bumps.
- **Lack of clear observability** for auth failures, sub‑agent timeouts, and cost tracking.

Positive feedback is present (e.g., #73537 thanks the team), but the overall sentiment is that stability improvements are urgently needed, especially for the Codex and OAuth paths.

## 8. Backlog Watch
Items that have been open for weeks or months without resolution, and are labelled `stale` or `needs‑maintainer‑review`:

- **#39476** – A2A duplicate messages, open since 2026‑03‑08, stale, P1, no fix PR. ([link](https://github.com/openclaw/openclaw/issues/39476))
- **#10687** – Dynamic model discovery, open since 2026‑02‑06, P2, needs maintainer review. ([link](https://github.com/openclaw/openclaw/issues/10687))
- **#80040** – Cascading failure (OAuth → empty reply → duplicate tool exec), open since 2026‑05‑10, stale, P2. ([link](https://github.com/openclaw/openclaw/issues/80040))
- **#52526** – `agent --json` returns pre‑hook text, open since 2026‑03‑22, stale, P2, security‑tagged. ([link](https://github.com/openclaw/openclaw/issues/52526))
- **#82572** – PR to persist followup queues across restarts, open since 2026‑05‑16, awaiting proof. ([link](https://github.com/openclaw/openclaw/pull/82572))
- **#109009** – PR to exclude MEMORY.md from shared channel bootstrap, open since 2026‑07‑16, P0, needs proof. ([link](https://github.com/openclaw/openclaw/pull/109009))

These items represent important quality‑of‑life and security improvements that have not yet received maintainer action.

---

## Cross-Ecosystem Comparison

# Cross‑Project Comparison Report — 2026-07-30

## 1. Daily Cross‑Project Overview
Today’s data shows a stark contrast in activity and focus between the two projects. OpenClaw saw massive issue and pull‑request volume (500 issues and 500 PRs updated) driven by high‑severity reliability bugs in the Codex integration, gateway, and OAuth paths. LobsterAI had a moderate, maintainer‑driven day with 15 PRs updated, concentrating on cowork UI fixes, a feature addition, and a revert of a problematic release‑blocking change. No new releases were published by either project. Community engagement was present only in OpenClaw, where multiple issues received double‑digit comments from users.

## 2. Activity Comparison

| Project      | Issues Updated (Open / Closed) | PRs Updated (Merged/Closed / Open) | Release Status | Activity Note |
|--------------|--------------------------------|------------------------------------|----------------|---------------|
| OpenClaw     | 500 (438 open, 62 closed)      | 500 (91 merged/closed, 409 open)   | None today     | High volume; dominated by P1 stability bugs, many PRs waiting for maintainer review. |
| LobsterAI    | 0 new/updated                   | 15 (13 merged/closed, 2 open)       | None today     | Moderate; maintainer‑led cowork fixes and a revert of a release‑blocking feature. |

## 3. OpenClaw Compared With Peers
Based on today’s data, the differences are clear:

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated dwarf LobsterAI’s 0 issues and 15 PRs. This reflects OpenClaw’s wider deployment surface and the number of independent reporters and contributors.
- **Technical focus**: OpenClaw’s activity concentrates on production‑critical infrastructure — gateway OOM, event‑loop stalls, OAuth token refresh wedges, and message truncation. LobsterAI’s changes are almost entirely within the `cowork` area (UI fixes, input handling, modal stacking) and a safety‑contract revert.
- **Community surface area**: OpenClaw has an active, vocal user base running agents in production (Telegram, cron, Home Assistant) and filing detailed bug reports with reproductions. LobsterAI showed no public comments, reactions, or feature requests today; all PRs are authored by maintainers.
- **Backlog risk**: OpenClaw has several stale P1 items (e.g., #39476 A2A duplicate messages, open since March) and security‑tagged backlogs. LobsterAI has a four‑month‑old stale community PR (#1232) with no maintainer interaction.

## 4. Shared Technical Focus Areas
No overlapping technical requirements were observed across the projects today. OpenClaw’s feature requests (dynamic model discovery, per‑model cost tracking, Slack modals, memory curation) are oriented toward agent‑platform extensibility and observability. LobsterAI’s only feature addition was selected‑text tags in the cowork side chat, which is a developer‑UX enhancement. The two codebases do not share immediate technical needs in this snapshot.

## 5. Differentiation Analysis
- **Feature focus**: OpenClaw is a multi‑model, multi‑channel agent platform with plugin‑style integrations (Codex, Telegram, Slack, cron, home automation). LobsterAI is a desktop‑based AI companion (Electron) focused on the `cowork` experience, auth, and update management.
- **Target users**: OpenClaw serves end‑users who deploy and operate AI agents in personal or business workflows. LobsterAI targets developers using the tool as an IDE‑side companion, given the selected‑text context, export modal, and side‑chat mechanics.
- **Technical architecture**: OpenClaw’s recent pain points are infrastructure‑level (gateway heap, zombie processes, session‑state management, OAuth resilience). LobsterAI’s PRs address UI‑level concerns (scroll jumps, flicker, stacking context, caption button colors) and a client‑side run‑safety contract that was reverted due to byte‑accounting and runId mismatches.

## 6. Community Activity Notes
- **OpenClaw**: High community activity tier. Dozens of commenters on critical issues, multiple feature requests with votes, and many ready‑for‑maintainer PRs indicate a large, invested user base. Production pain points are being surfaced actively.
- **LobsterAI**: Low community activity tier. No public issue reports, zero comments or reactions, and all PRs are maintainer‑authored. The revert of a feature that caused release‑blocking issues was handled internally without visible community discussion.

No releases were made by either project today, so no delivery‑cadence comparison can be drawn.

## 7. Evidence‑Backed Observations
1. **OpenClaw is under significant production stability pressure.** Multiple P1 bugs with `diamond lobster` severity (Codex hook stalls, OAuth wedges, gateway OOM, message truncation) are active and have linked fix PRs. The community is providing detailed reproductions and demanding reliability improvements for deployed agents.

2. **LobsterAI’s development is tightly controlled and internally gated.** The revert of the run‑safety contract (#2403) after it caused release‑blocking issues shows a quality gate that caught problems before general release. The day’s work (cowork fixes, release branch merge) suggests a steady, if quiet, maintainer‑driven rhythm.

3. **No cross‑project technical synergy is visible today.** The feature requests and bug fixes in each project target entirely different domains (agent infrastructure vs. desktop IDE companion). There is no shared requirement or common integration point highlighted in the digests.

4. **OpenClaw’s maintainer review capacity may be a bottleneck.** With 409 open PRs and many marked “ready for maintainer look” alongside stale P1 issues, today’s data suggests a potential backlog in accepting community contributions.

5. **Both projects lack releases today, but the reasons differ.** OpenClaw’s absence likely reflects the focus on stabilizing critical bugs before a new cut. LobsterAI’s absence follows a release‑blocking revert that had to be undone, indicating a short‑term quality pause.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# LobsterAI Project Digest – 2026-07-30

## 1. Today’s Activity Brief
On 2026-07-30 the LobsterAI repository saw no new issues and no new releases. Pull request activity was high: 15 PRs were updated within the last 24 hours, of which 13 were merged or closed and 2 remain open. The majority of closed PRs came from maintainer `@liuzhq1986` and concentrated on the `cowork` area, delivering fixes, a feature enhancement, and a release branch integration. A notable revert by `@fisherdaddy` rolled back a recently introduced run-safety contract that had caused release-blocking issues.

## 2. Releases
No new releases detected.

## 3. Project Progress
The following PRs advanced the project today (all merged or closed unless noted):

- **Release branch merge**
  [#2407](https://github.com/netease-youdao/LobsterAI/pull/2407) – `Release/2026.7.24` branch was closed, integrating multiple area changes (renderer, build, docs, main, openclaw, skills, cowork, artifacts, Windows).

- **Cowork feature: selected text tags**
  [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) – `feat(cowork): add selected text tags to side chat` – adds removable context tags for selected text, supports direct sending and editing, with safeguards, diagnostics, and tests.

- **Cowork input handling improvement**
  [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) – `fix(cowork): improve side chat input handling` – accumulates selected text excerpts while the panel is open, removes product-level question length limit, and retains safety checks.

- **Cowork fixes**
  [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) – Export modal now mounts via body portal (avoids stacking context conflicts).
  [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) – Prevents scroll jumps on session refresh by scoping events and preserving message history.
  [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) – Stops periodic IM message flicker by comparing matching history windows during reconciliation.
  [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) – Email diagnostics now open in a new chat instead of being overridden by stale history or IM sessions.

- **Auth & UI fixes**
  [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) – `fix(auth): preserve local callback across login retries` – reuses the active callback server for repeated/concurrent attempts, with diagnostics and regression coverage.
  [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355) – Aligns Windows caption button hover colors with sidebar controls using theme-aware surface colors.

- **Updater configuration**
  [#2347](https://github.com/netease-youdao/LobsterAI/pull/2347) – Reduces automatic update check interval from 12 hours to 2 hours.

- **Refactor and revert**
  [#2404](https://github.com/netease-youdao/LobsterAI/pull/2404) – `Refactor/kimi k3 auto only compat` (closed, details not fully visible).
  [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) – `revert(openclaw): remove run-safety-contract gate for no-progress token burn` – reverts a client-side Run Safety feature (introduced in #2400) that caused release-blocking issues (receipt identity keying, false-success followups, compaction runId handling, byte-accounting mismatches). The revert restores prior behavior and updates the DeepSeek cache probe spec.

- **Long-standing LRU eviction fix merged**
  [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) – `fix(cowork): true LRU eviction for LLM memory judge cache` – corrects a documented-but-broken LRU policy; hot keys now move to the most-recent position on cache hit.

## 4. Community Hot Topics
No PRs or issues received comments or reactions today. The PR with the most recent activity is the open dependabot bump [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (electron group update), updated 2026-07-29 but with no interactions. The revert of the run-safety contract ([#2403](https://github.com/netease-youdao/LobsterAI/pull/2403)) indicates an internal quality gate failure, but no public discussion is visible.

## 5. Bugs & Stability
No new bugs were reported as issues. Several closed PRs address stability and regressions:

- **High severity (reverted feature):** The run-safety contract introduced in #2400 caused release-blocking issues (receipt identity keying, false-success followups, compaction runId handling, byte-accounting mismatches). Reverted by [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403).
- **Medium severity:** Side chat input handling was improved ([#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)) and export modal stacking was fixed ([#2376](https://github.com/netease-youdao/LobsterAI/pull/2376)).
- **Low severity:** Scroll jumps on session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)), IM message flicker ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)), Windows caption button hover color mismatch ([#2355](https://github.com/netease-youdao/LobsterAI/pull/2355)), and email diagnostics session override ([#2346](https://github.com/netease-youdao/LobsterAI/pull/2346)) were all resolved.
- **Cache correctness:** The LRU eviction bug in the LLM memory judge cache ([#1322](https://github.com/netease-youdao/LobsterAI/pull/1322)) was fixed.

## 6. Feature Request Clusters
No explicit feature requests were opened today. The only feature addition delivered was the selected text tags in the cowork side chat ([#2405](https://github.com/netease-youdao/LobsterAI/pull/2405)), which enhances context management for users selecting text while chatting. The related input handling improvement ([#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)) further refines the cowork experience.

## 7. User Feedback Summary
No direct user feedback is recorded in today’s activity. The concentration of cowork fixes (scroll, flicker, modal stacking, session isolation) suggests that recent user-facing issues in the cowork side chat were actively addressed. The revert of the run-safety feature indicates internal quality concerns rather than user-reported problems.

## 8. Backlog Watch
- **Open stale PR from April 1, 2026:** [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) – `fix(scheduledTask): 修复定时任务首次执行结果不推送到 UI 的问题` – A community contributor’s fix for a bug where a scheduled task’s first execution never sends `runUpdate` notifications to the UI. The root cause is a condition that skipped the update when `previousRunAtMs` was 0. The PR has been open for nearly four months with no maintainer interaction.
- **Dependabot electron bump (open):** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) – chore bump of electron from 40.2.1 to 43.2.0 and electron-builder. No conflicts detected, but no approval yet.

Both items could benefit from maintainer review to prevent stagnation.

</details>