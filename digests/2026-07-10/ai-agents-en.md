# OpenClaw Ecosystem Digest 2026-07-10

> Issues: 500 | PRs: 500 | Projects covered: 2 | Generated: 2026-07-10 00:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-10

## 1. Today’s Activity Brief
Activity today was heavy on both the issue and pull-request side, with 500 issues and 500 PRs updated in the last 24 hours. No new releases were published, but the main branch saw a flurry of small fixes plus a multi-PR pet feature landing (Lobster pet series), and a maintainer-drove performance-workflow hardening. On the user side, conversation centred on a long‑standing subagent result‑loss bug, tool‑output rendering problems, and cron/heartbeat auth timeouts, with several P1 issues receiving fresh triage commentary.

## 2. Releases
No new releases were published in the reporting window.

## 3. Project Progress
The following pull requests were merged or closed today, advancing fixes and features:

- **Performance workflow hardening** — `fix: fail release performance when reports do not publish` ([#103126](https://github.com/openclaw/openclaw/pull/103126)) was closed; it ensures the performance workflow fails explicitly when the required Clawgrit baseline report is missing.
- **Browser tab fix** — `fix(browser): reject ambiguous tab references` ([#103119](https://github.com/openclaw/openclaw/pull/103119)) closed; prevents silent mis-targeting when a tab’s friendly reference collides with another’s raw target ID.
- **Remote CDP credential safeguard** — `fix(browser): keep remote CDP credentials out of responses` ([#103139](https://github.com/openclaw/openclaw/pull/103139)) closed; strips URL userinfo from error messages and profile responses on authenticated remote browser endpoints.
- **Lobster pet charm bundle** — `feat(webchat): lobster pet charm bundle — names, run celebrations, poke moods, night owl` ([#103149](https://github.com/openclaw/openclaw/pull/103149)) closed; the first of a series that gives the in‑UI pet individuality (naming, status‑based reactions, night‑owl mode).

Other PRs opened today are still in review or awaiting proof; notable among them: the Control UI plugin management feature ([#103176](https://github.com/openclaw/openclaw/pull/103176)), task delivery status normalization ([#103173](https://github.com/openclaw/openclaw/pull/103173), [#103174](https://github.com/openclaw/openclaw/pull/103174)), Lobsterdex collector ([#103172](https://github.com/openclaw/openclaw/pull/103172)), rare pet events ([#103154](https://github.com/openclaw/openclaw/pull/103154)), seasonal wardrobe ([#103158](https://github.com/openclaw/openclaw/pull/103158)), and pairing store migration to SQLite ([#103160](https://github.com/openclaw/openclaw/pull/103160)).

## 4. Community Hot Topics
The most active issues (by comment count) reflect ongoing pain around reliability and silent failures:

- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** (21 comments) – Subagent completion silently lost: no retry, no notification, no auto-restart on timeout. Users report multiple failure patterns where work disappears without trace; intensely discussed because it impacts trust in agentic workflows.
- **[#63918](https://github.com/openclaw/openclaw/issues/63918)** (18 comments, closed) – Cron `agentTurn` sending `thinking=none` to OpenAI models that reject it. A fix landed, but the discussion highlighted the need for model‑capability‑aware cron settings.
- **[#99241](https://github.com/openclaw/openclaw/issues/99241)** (15 comments) – Tool outputs rendering as image attachments instead of text, making results unreadable for the agent. Multiple users report the same on Discord and webchat after recent upgrades.
- **[#73148](https://github.com/openclaw/openclaw/issues/73148)** (15 comments, closed) – Opaque “Failed to optimize image” error when optional `sharp` is missing; the long thread pushed for a clearer fallback and dependency guidance.
- **[#48003](https://github.com/openclaw/openclaw/issues/48003)** (15 comments) – Steer mode not injecting messages mid‑turn for main sessions. Users want real‑time interruptibility; the root cause (commit `9889c6da5`) is identified but no final fix has shipped yet.
- **[#50090](https://github.com/openclaw/openclaw/issues/50090)** (15 comments) – Community Skill Development & ClawHub: the ecosystem gap between skill publishing and safe, discoverable consumption. The demand for curation, security review, and installation UX is high.

The top PRs did not accumulate many visible comments in the dataset, but the Lobster pet series (#103149, #103154, #103158, #103172) generated lively reactions; the maintainer is actively landing whimsical UX improvements that give the UI personality.

## 5. Bugs & Stability
Today’s data shows a high number of still‑open high‑severity bugs and regressions. The most critical, ranked by severity and impact, are:

- **P0 – already closed but relevant**: [#43661](https://github.com/openclaw/openclaw/issues/43661) – Session hangs indefinitely when compaction times out, causing repeated duplicate message sends. (Closed; fix landed earlier.)
- **P1 – session / message loss**:
  - `[Bug]: Subagent completion silently lost` [#44925](https://github.com/openclaw/openclaw/issues/44925) (open, linked‑PR‑open, many labels) – highest comment count; core failure of agent delegation.
  - `Tool outputs sometimes render as image attachments` [#99241](https://github.com/openclaw/openclaw/issues/99241) (open, needs‑product‑decision) – renders agent blind to tool results.
  - `Steer mode does not inject messages mid‑turn` [#48003](https://github.com/openclaw/openclaw/issues/48003) (open, linked‑PR‑open) – breaks real‑time control.
  - `Codex OAuth refresh succeeds but cron/heartbeat fail with 10s auth refresh timeout` [#89278](https://github.com/openclaw/openclaw/issues/89278) (open) – subtle auth timing leads to silent failures.
  - `Cron sessions deliver hallucinated output instead of failing cleanly` [#49876](https://github.com/openclaw/openclaw/issues/49876) (open, stale) – trust issue; hallucinated results sent to users.
  - `ACP parent session stuck until refresh` [#52249](https://github.com/openclaw/openclaw/issues/52249) (open) – parent session becomes unresponsive after child completion.
  - `WhatsApp session stalls on long model_call` [#84569](https://github.com/openclaw/openclaw/issues/84569) (open, linked‑PR‑open) – turn terminates empty, reply never delivered.
  - `Cron agent jobs silently time out during sustained API outages` [#45494](https://github.com/openclaw/openclaw/issues/45494) (open) – fast‑fail missing, jobs burn full timeout.
  - `Sandbox container exits immediately with no-new-privileges` [#43996](https://github.com/openclaw/openclaw/issues/43996) (open) – basic sandbox inaccessible.
  - `Gateway memory leak: 389MB → 14.7GB over 4 days` [#54155](https://github.com/openclaw/openclaw/issues/54155) (open) – critical for long‑running deployments.
  - `Embedded runner "Network connection lost" on large tool params` [#53540](https://github.com/openclaw/openclaw/issues/53540) (open) – timeout induced by parameter generation latency.

Several of these already have `clawsweeper:linked-pr-open`, indicating active fix attempts. However, many also carry `clawsweeper:needs-product-decision` or `needs-live-repro`, suggesting resolution remains stalled on triage or repro.

- **P2 / regression**:
  - `room_event forces message_tool_only despite visibleReplies=automatic` [#102175](https://github.com/openclaw/openclaw/issues/102175) (open, regression) – prompt cache destabilisation.
  - `Write/exec tool parameters silently dropped after long conversations` [#53408](https://github.com/openclaw/openclaw/issues/53408) (open) – parameters disappear.
  - `tools.elevated.enabled: true breaks exec routing logic` [#46786](https://github.com/openclaw/openclaw/issues/46786) (open) – all exec calls route to host.
  - `Session bloat: skillsSnapshot and systemPromptReport accumulate every run` [#45718](https://github.com/openclaw/openclaw/issues/45718) (open, linked‑PR‑open) – storage and context growth.

## 6. Feature Request Clusters
Several overlapping feature requests surfaced, and matching PRs were opened or closed today:

- **Plugin & skill management UI**:
  - Issue [#50090](https://github.com/openclaw/openclaw/issues/50090) (Community Skill Development & ClawHub) — wants discoverability, security, and install flow.
  - PR [#103176](https://github.com/openclaw/openclaw/pull/103176) (`feat: add Control UI plugin management`) directly addresses this, adding a UI surface for discovering, enabling, and installing plugins.
  - PR [#101864](https://github.com/openclaw/openclaw/pull/101864) (`feat(android): manage skills from settings`) extends skill management to Android.

- **Skill priority and selection**:
  - [#50199](https://github.com/openclaw/openclaw/issues/50199) requests configurable skill priority when multiple skills overlap. No PR yet.

- **Memory & session lifecycle**:
  - [#45608](https://github.com/openclaw/openclaw/issues/45608) wants a pre‑reset memory flush identical to pre‑compaction.
  - [#90354](https://github.com/openclaw/openclaw/issues/90354) asks for bounded/validated append semantics for the memory flush.
  - [#46252](https://github.com/openclaw/openclaw/issues/46252) (cost dashboard omits archive files) — a data‑completeness request.

- **Message routing & hooks**:
  - [#47167](https://github.com/openclaw/openclaw/issues/47167) wants skipped messages to still reach hooks for full‑history archive plugins.
  - [#50126](https://github.com/openclaw/openclaw/issues/50126) asks for consistent `message:sent` hook coverage.

- **Config and DX**:
  - [#45758](https://github.com/openclaw/openclaw/issues/45758) requests YAML config support; no linked PR.
  - [#45565](https://github.com/openclaw/openclaw/issues/45565) wants lifecycle warning routing to a dedicated channel.
  - [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML config request.

- **Channel‑specific improvements**:
  - [#52640](https://github.com/openclaw/openclaw/issues/52640) requests a persistent task‑status surface for long‑running channel turns (Discord first).
  - [#50093](https://github.com/openclaw/openclaw/issues/50093) asks for WhatsApp backfill after reconnection.
  - [#102082](https://github.com/openclaw/openclaw/pull/102082) (`fix(slack): suppress progress chrome sends`) tackles Slack clutter.

The Lobster pet series (PRs [#103149](https://github.com/openclaw/openclaw/pull/103149), [#103154](https://github.com/openclaw/openclaw/pull/103154), [#103158](https://github.com/openclaw/openclaw/pull/103158), [#103172](https://github.com/openclaw/openclaw/pull/103172)) is less a user request and more a maintainer-driven whimsy feature set, but it demonstrates the project’s willingness to invest in end‑user delight.

## 7. User Feedback Summary
User‑reported pain points remain dominated by **silent failures and lost information**:

- Subagent completions that disappear without trace (multiple failure modes) — high frustration, labelled “diamond lobster” for impact.
- Tool outputs turned into unreadable images, especially on Discord and long‑running workflows — users feel blind and unable to recover.
- Sessions get stuck or wedged (compaction, WhatsApp, ACP) with no clear recovery path, often requiring manual refresh or restart.
- Cron/heartbeat auth timeouts cause non‑obvious failures that only surface later; users want faster failure and clearer diagnostics.
- Configuration gotchas: `XDG_CONFIG_HOME` not expanded in skill install paths, `OPENCLAW_HOME` creating nested directories, `auth.order` ignored for some providers.
- The memory flush mechanism is appreciated, but users want it applied before `/reset` and `/new`, not just before compaction.
- Community skill ecosystem demand is high: users want ClawHub to be safer and more discoverable, with a UI for managing installed skills.

On a positive note, the maintainers are highly responsive: many issues have linked PRs, and a maintainer (steipete) landed multiple fixes and the pet series today, keeping momentum on both stability and user experience.

## 8. Backlog Watch
These long‑standing items need maintainer attention; several have the “stale” tag but impact is rated high:

- **WhatsApp backfill after reconnection** [#50093](https://github.com/openclaw/openclaw/issues/50093) (open since 2026‑03‑19, stale) — silent message loss remains unaddressed.
- **`${XDG_CONFIG_HOME}` is not processed when installing a skill** [#53628](https://github.com/openclaw/openclaw/issues/53628) (open since 2026‑03‑24, stale) — basic path expansion bug.
- **Cron sessions deliver hallucinated output** [#49876](https://github.com/openclaw/openclaw/issues/49876) (open, stale, P1) — trust and safety issue with no fix yet.
- **Inconsistent `message:sent` hook coverage** [#50126](https://github.com/openclaw/openclaw/issues/50126) (open, stale, P2) — blocks downstream plugin reliability.
- **System event priority/bypass‑queue mode** [#50739](https://github.com/openclaw/openclaw/issues/50739) (open, stale, P2) — events delay during provider incidents, undermining alerting.
- **Telegram restart storm from `telegram.retry.jitter` type mismatch** [#52130](https://github.com/openclaw/openclaw/issues/52130) (open, stale, P1) — stability risk.
- **Docker sandbox container name collision across multiple instances** [#51363](https://github.com/openclaw/openclaw/issues

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-07-10

## 1. Daily Cross-Project Overview
Today’s ecosystem activity split between an extremely high‑volume day on the OpenClaw core project (500 issues updated, 500 pull requests updated) and a steady, PR‑focused day on the Youdao Lobster desktop application (14 PRs updated, 11 merged). No releases shipped from either project. OpenClaw mixed stabilisation fixes (browser, session, tool output) with a whimsical pet‑charm feature series, while Lobster concentrated on cowork prompt hardening, OpenClaw‑gateway alignment, and sidebar enhancements. The projects intersected directly on subagent history consistency and steer handling.

## 2. Activity Comparison

| Project       | Issues Updated (today)    | PRs Updated (today) | Release Status | Activity Note                                                                 |
|---------------|---------------------------|---------------------|----------------|-------------------------------------------------------------------------------|
| OpenClaw      | 500                       | 500                 | None           | Massive maintenance cycle; many stability fixes + pet UI series, P1‑level triage |
| LobsterAI     | 1 closed, 4 stale open    | 14 (11 merged)      | None           | Desktop‑side integration improvements, open‑source backlog items still stale |

*Note: OpenClaw issue count reflects all issues touched in the 24‑hour window (newly opened, commented, or labelled). LobsterAI’s issue tracker activity was sparse; only one closure and four stale feature requests were noted.*

## 3. OpenClaw Compared With Peers
- **Activity volume**: OpenClaw’s issue/PR throughput (500 each) is an order of magnitude larger than Lobster’s 14 PRs. OpenClaw’s high‑comment issues (21 comments on subagent loss) indicate a broad, vocal user base; Lobster’s issues were low‑engagement.
- **Technical focus**: OpenClaw addressed deep agent infrastructure (session hangs, compaction timeouts, gateway memory leaks, cron auth, tool‑output rendering). Lobster focused on desktop‑client integration (prompt sanitisation, agent‑scoped local tools, sidebar pagination) and adapting to OpenClaw’s gateway API.
- **Community surface area**: OpenClaw’s community produced feature requests spanning plugin management UI, skill hubs, YAML config, and channel‑specific enhancements, with some receiving immediate PR follow‑up. Lobster’s community requests (timestamps, keyboard history, full‑text search, Markdown export) came from a single contributor and have been stale for months.

## 4. Shared Technical Focus Areas
- **Subagent reliability and history**: Both projects dealt with subagent result/history integrity. OpenClaw’s [#44925](https://github.com/openclaw/openclaw/issues/44925) (subagent completion silently lost) is a critical P1 bug with 21 comments. Lobster’s [#2299](https://github.com/netease-youdao/lobsterai/pull/2299) merged a fix to sync subagent child tool history via the gateway, recovering orphan results. The need for trustworthy subagent execution is evident in both codebases.
- **Steer‑mode / interrupt handling**: OpenClaw [#48003](https://github.com/openclaw/openclaw/issues/48003) tracks a long‑standing bug where steer mode fails to inject messages mid‑turn. Lobster PR [#2307](https://github.com/netease-youdao/LobsterAI/pull/2307) refined prompt modes and steer follow‑up handling, and [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) enabled attachment support during steer. Both projects are actively tuning how users interrupt and redirect agent behaviour.
- **OpenClaw‑gateway integration**: Lobster made multiple adjustments to align with OpenClaw: stripping null bytes from prompts ([#2308](https://github.com/netease-youdao/LobsterAI/pull/2308)), supporting agent‑scoped local tools ([#2303](https://github.com/netease-youdao/LobsterAI/pull/2303)), and explicitly disabling memory dreaming to keep gateway config clean ([#2301](https://github.com/netease-youdao/LobsterAI/pull/2301)). This shows Lobster treating OpenClaw as a core runtime dependency and adapting to its API.

## 5. Differentiation Analysis
- **Feature focus**: OpenClaw is a multi‑channel AI agent platform handling agentic workloads across Discord, WhatsApp, Telegram, and web chat, with built‑in sandbox, cron, memory, and plugin systems. LobsterAI is a desktop application (Windows‑native) that provides a cowork prompt interface backed by OpenClaw as a gateway; its features centre on the desktop UX (sidebar task management, agent display names, title bar branding).
- **Target users**: OpenClaw serves developers and operators deploying long‑running autonomous agents. LobsterAI targets desktop users who want an integrated assistant with local file and UI control, leveraging OpenClaw’s agent engine.
- **Technical architecture**: OpenClaw maintains its own gateway, webchat, and browser components, and is consumed as a standalone service. Lobster runs as a client that interacts with an OpenClaw instance, extending it with desktop‑specific capabilities (local tools, steer, attachments).

## 6. Community Activity Notes
- **Very high activity**: OpenClaw (500 issues + 500 PRs touched in 24 hours, with hot‑topic threads drawing 15–21 comments, and active maintainer‑driven PRs).
- **Moderate activity**: LobsterAI (14 PRs, 11 merged, low‑engagement issues, stale feature requests dating from early April 2026).
No release activity occurred in either project today.

## 7. Evidence‑Backed Observations
1. **Subagent trust is a cross‑project priority** — OpenClaw’s [#44925](https://github.com/openclaw/openclaw/issues/44925) (lost subagent completion, many labels, active fix attempt) and Lobster’s [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) (subagent tool history sync) both address the same class of problem: results from delegated agent turns disappearing or becoming unavailable.
2. **Steer/interrupt flows are still maturing** — OpenClaw has a known regression preventing mid‑turn message injection ([#48003](https://github.com/openclaw/openclaw/issues/48003)), and Lobster shipped multiple PRs to refine steer prompts and enable attachments during steer. Both projects are polishing real‑time agent interruption simultaneously.
3. **Desktop‑gateway integration is tightening** — Lobster’s string of PRs sanitising prompts, scoping tools, and managing OpenClaw config shows a deepening dependency; it is actively aligning with OpenClaw’s evolving gateway API.
4. **Community demand for history management is visible in both projects** — OpenClaw users want memory flush before `/reset` and full‑history hooks; Lobster’s stale feature requests ask for timestamps, keyboard history, and full‑text search. Users in both ecosystems are struggling with conversation review and retrieval.
5. **Whimsy vs. productivity features divide the projects** — OpenClaw’s maintainer landed a “Lobster pet charm bundle” series today (naming, reactions, night‑owl mode), while Lobster’s most‑requested features (Markdown export, search, timestamps) remain unimplemented and stale. No cross‑project signal links these; they illustrate different product priorities.

---

## Peer Project Reports

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# LobsterAI Project Digest – 2026-07-10

## Today’s Activity Brief
Activity was concentrated in pull requests: 14 PRs were updated, with 11 merged or closed and 3 still open. The issue tracker saw one closure (#1394, scheduled-task auto‑delete) and 4 stale feature requests remain open. No new releases were published. Merges today focused on cowork prompt sanitisation, OpenClaw tool routing, agent display names, sidebar task pagination, Windows title bar branding, and several subagent history fixes.

## Releases
None.

## Project Progress
Merged or closed PRs today advanced the desktop application and its OpenClaw gateway integration:

- **#2308** – fix(cowork): strip null bytes from prompts before OpenClaw gateway send
  *Prevents hard‑rejections when U+0000 persists in outbound payloads.*
- **#2307** – fix(cowork): refine prompt modes and steer follow‑up handling
  *Removes Plan Mode switch, repositions Goal/Steer status bars, fixes queued Steer follow‑up icons.*
- **#2305** – fix(cowork): prefer agent display names for subagents
  *Synchronises LobsterAI agent names into OpenClaw entries, used in chips, detail titles, and artifact panel.*
- **#2304** – feat(sidebar): improve task pagination and agent ordering
  *Adds incremental loading of agent task history, one‑row expand/collapse controls, and persistent drag‑sortable ordering.*
- **#2303** – fix(openclaw): support agent‑scoped local tools
  *Allows AskUserQuestion for non‑main desktop agents, enables image/video tools in child sessions, and blocks IM‑bound callbacks.*
- **#2302** – Liuzhq/windows status bar
  *Introduces a Windows‑only branded title bar with logo, native window controls, and collapsed‑sidebar actions.*
- **#2301** – fix(openclaw): explicitly disable memory dreaming
  *When LobsterAI dreaming is off, writes `dreaming.enabled=false` so OpenClaw removes stale managed dream cron jobs.*
- **#2300** – fix(cowork): support attachments in steer queue
  *Allows file attachments, dragged/pasted files, selected text, and images to be queued during steer.*
- **#2299** – fix(cowork): sync subagent child tool history
  *Parses gateway history into a shared helper so tool calls/results appear on child session pages, recovering orphan results.*
- **#1396** (stale, closed) – feat: enhance uninstall UX (Windows NSIS)
  *Adds AppData cleanup, forced directory removal, and running‑app detection before uninstall.*
- **#1397** (stale, closed) – fix(cowork): localize compact time suffixes in session list
  *Replaces hardcoded English time abbreviations with locale‑aware strings.*

## Community Hot Topics
- **#1394** [CLOSED] Scheduled tasks with “no repeat” are permanently deleted after first execution
  *2 comments, opened by @zqgittest. The task was immediately removed after a single run, even though the user expected it to stay for future editing. The issue has been closed, presumably resolved, but the rationale or fix is not detailed in the data.*
- **Stale feature requests from @MaoQianTu** (issues and PRs)
  Four issues (#1339, #1341, #1343, #1345) and two associated PRs (#1340, #1342) have been open since early April 2026. They request deeply felt UX improvements: message timestamps, keyboard history navigation, full‑text content search, and Markdown export. Although PRs exist for the first two, all items carry the `stale` label and have seen no visible maintainer response beyond the original submission.

## Bugs & Stability
- **#1394** – Scheduled task auto‑deletion on single non‑repeating run.
  *Severity: Moderate. Users could lose tasks they intended to keep for later editing. This was the only bug explicitly flagged today and is now closed.*

No crashes, regressions, or stability incidents were reported in today’s data.

## Feature Request Clusters
Four related feature requests filed by the same user (@MaoQianTu) paint a clear picture of desired usability enhancements in the Cowork chat interface:

1. **#1339 / #1340** – Display message timestamp on user bubbles (HH:MM, with full date on hover).
   *PR #1340 implements this, but remains open and stale.*
2. **#1341 / #1342** – Keyboard history navigation (Up/Down arrows) to recall previously sent messages.
   *PR #1342 implements a 50‑item history, also open and stale.*
3. **#1343** – Full‑text search of message content, not just conversation titles (Cmd/Ctrl+K).
   *No PR yet.*
4. **#1345** – Export conversation to a Markdown file (currently only screenshot export available).
   *No PR yet.*

These requests point to users wanting a more terminal‑like, information‑dense, and exportable chat experience.

## User Feedback Summary
- **Task scheduling confusion**: @zqgittest found the “one‑shot” task behaviour unexpected and disruptive.
- **Conversation history friction**: @MaoQianTu described difficulty reviewing long dialogues without timestamps, re‑entering similar commands repeatedly, and locating conversations by content rather than title.
- **Export limitations**: The absence of a text‑first export (Markdown) forces users to rely on screenshots, which is unsatisfactory for note‑taking and further processing.
- Overall, feedback centres on reducing repetitive manual work and improving information retrieval within the Cowork interface.

## Backlog Watch
Items that have been open for **3+ months** with no visible resolution activity and merit maintainer attention:

| Issue/PR | Title | Age (created) |
|----------|-------|---------------|
| #1339 | Message bubble missing timestamp display | 2026‑04‑02 |
| #1340 | PR: add timestamp to user message bubbles (closes #1339) | 2026‑04‑02 |
| #1341 | Input lacks arrow‑key history navigation | 2026‑04‑02 |
| #1342 | PR: implement Up/Down history navigation (closes #1341) | 2026‑04‑02 |
| #1343 | Search dialog cannot do full‑text message search | 2026‑04‑02 |
| #1345 | Session detail missing export to Markdown | 2026‑04‑02 |

All carry the `stale` label and have not advanced since filing. The two existing PRs (#1340, #1342) provide concrete implementation but have not been reviewed or merged. Resolving this cluster would address a consistent set of usability complaints from an engaged contributor.

---

*Links: [Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394) | [PRs #1340](https://github.com/netease-youdao/LobsterAI/pull/1340), [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | [Backlog issues](https://github.com/netease-youdao/LobsterAI/issues/1339) …*

</details>