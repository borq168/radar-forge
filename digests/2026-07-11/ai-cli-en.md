# AI CLI Tools Community Digest 2026-07-11

> Generated: 2026-07-11 00:23 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

## Cross-Tool Comparison Report – 2026-07-11

### 1. Daily Cross-Tool Overview
Today’s activity was driven by rapid model evolution and platform-specific reliability challenges. **OpenAI Codex** shipped two alpha CLI snapshots and saw intense issue volume around subagent model control and Windows stability. **Claude Code** released a TUI quality-of-life update and saw a single thread on session limits attract 792 comments, the most vocal user feedback of the day. **Kimi Code** patched a web notification bug and responded to multiple fixes, while **OpenCode** had no release but tackled TUI modal standardisation, V2 managed-service hiccups, and a wave of PR cleanup. Across all four tools, integration friction with the newest model generations (Fable 5, GPT‑5.6 variants) featured prominently.

### 2. Activity Comparison

| Tool          | Notable Issues (today) | Notable PRs (today) | Release Status                                                        |
|---------------|------------------------|----------------------|-----------------------------------------------------------------------|
| Claude Code   | 10                     | 6 (open)             | **v2.1.206** – directory suggestions, `/doctor` `CLAUDE.md` check, push auto‑allow |
| OpenAI Codex  | 10 (of 50 updated)     | 10 (mixed open/merged)| **rust‑v0.145.0‑alpha.3** & **‑alpha.4** (CLI alpha snapshots)        |
| Kimi Code     | 9                      | 10 (mixed closed/open)| **@moonshot‑ai/kimi‑code@0.23.5** (patch – duplicate notification fix) |
| OpenCode      | 10 (of 30 updated)     | 10 (mixed + cleanup)  | None                                                                  |

*Counts reflect the issues and pull requests highlighted as noteworthy in each community digest.*

### 3. Shared Feature Directions
Requirements appearing across multiple tool communities today:

- **New‑model compatibility** (all tools): Claude Code users face Fable 5 advisor failures and silent tool storms; Codex reports GPT‑5.6 Sol forcing all subagents to Sol and Spark rejecting `reasoning.summary`; OpenCode sees GPT‑5.6 Luna returning 404 and Sol‑fast reasoning errors; Kimi Code requests official GPT‑5.6‑sol support. The common need is faster, more robust onboarding of the latest generation of models without breakage.
- **MCP tool reliability & permission flows** (Claude Code, Codex): Chrome MCP popups never rendering on Windows (Claude Code) and custom MCP server tools not appearing in desktop threads (Codex) point to a shared desire for dependable MCP connectivity and permission UX across operating systems.
- **Windows platform stability** (Claude Code, Codex, OpenCode): Codex’s desktop app freezes the entire Windows shell; OpenCode’s TUI fails on startup when `.opencode` exists; Claude Code’s MCP permission popup is absent on Windows. Together they signal that Windows is a common source of unresolved reliability gaps.
- **TUI/IDE interface polish** (Claude Code, Kimi Code, OpenCode): Accidental mouse‑click triggers in Claude Code’s TUI, Kimi Code’s VS Code front‑end throttling after streaming finishes, and OpenCode’s V2 TUI modal inconsistencies reveal a cross‑tool need for more refined terminal/IDE interaction models.

### 4. Differentiation Analysis
- **Claude Code** is tightly coupled to Anthropic’s models, with distinctive features such as `/doctor` hygiene checks on `CLAUDE.md` and server‑side advisor support. It remains a terminal‑first tool aimed at power users in incident response and heavy TUI workflows. Its community is pushing for an open‑source release, but the codebase currently stays closed.
- **OpenAI Codex** differentiates through multi‑agent orchestration (MultiAgent V2, subagent spawning) and a unified desktop app merging ChatGPT and Codex. Its broad target includes Pro subscribers who leverage Computer Use and

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-11

## Today's Update Brief
One CLI release shipped (v2.1.206) with quality-of-life improvements for directory navigation, `CLAUDE.md` hygiene, and PR workflow. The issue tracker saw high activity driven by a single marathon thread on session limits (792 comments) alongside fresh bug reports touching Fable 5 behavior, TUI rendering, and MCP integration. Six pull requests were opened or updated—none merged yet—covering security-pattern hardening, documentation, Windows tooling, and a community open-source effort.

## Releases
- **v2.1.206**
  - `/cd` now suggests directory paths, matching the behavior of `/add-dir`.
  - `/doctor` gained a check that proposes trimming checked-in `CLAUDE.md` files by removing content Claude can derive from the codebase itself.
  - `/commit-push-pr` auto-allows `git push` to the repo’s configured upstream, streamlining the final push step.

## Hot Issues *(10 noteworthy items)*

1. **#38335 · Claude Max plan session limits exhausting abnormally fast (CLI usage)**
   *Affected workflow:* daily interactive coding with Max plan; users report the limit is reached in a fraction of the expected turns since late March.
   *Impact:* blocks work mid-session, forcing restarts or fallback to other tools.
   *Community reaction:* 792 comments, 468 👍 — the single most vocal thread on the tracker.
   [View](https://github.com/anthropics/claude-code/issues/38335)

2. **#66960 · Fable 5 silent tool calls then AskUserQuestion about never-shared findings during incident response**
   *Affected workflow:* high-stakes incident response where the model spent 16 minutes executing silent tool calls, then popped a question referencing information it had never shown the user.
   *Impact:* broken situational awareness, delayed resolution, eroded trust in autonomous mode.
   *Community reaction:* 9 comments, 5 👍.
   [View](https://github.com/anthropics/claude-code/issues/66960)

3. **#49979 · Chrome MCP: navigate/read_page denied on all domains from Claude Desktop (Windows) — no approval popup**
   *Affected workflow:* using the `Claude_in_Chrome` MCP tools to browse specific domains; the permission popup never renders, so all navigations are rejected.
   *Impact:* complete blockage of browser-integration tasks from Windows Desktop.
   *Community reaction:* 9 comments, 2 👍 — referenced multiple duplicates.
   [View](https://github.com/anthropics/claude-code/issues/49979)

4. **#71539 · Mouse click to refocus terminal triggers permission prompt unintentionally**
   *Affected workflow:* developers who click into the TUI to regain focus; the click lands on a permission or tool-approval button and immediately accepts/dismisses it.
   *Impact:* accidental execution of actions, security/reliability concern.
   *Community reaction:* 8 comments, 17 👍.
   [View](https://github.com/anthropics/claude-code/issues/71539)

5. **#70539 · Feature Request: scroll-only mouse mode (disable clicks, preserve wheel scroll)**
   *Affected workflow:* full-screen TUI usage where stray clicks expand/collapse tool output or hit sensitive buttons.
   *Impact:* forces all-or-nothing mouse handling, leading to accidental UI interactions.
   *Community reaction:* 7 comments, 68 👍 — high upvotes signal strong demand.
   [View](https://github.com/anthropics/claude-code/issues/70539)

6. **#74260 · Assistant text blocks silently dropped after thinking blocks — missing from transcript JSONL**
   *Affected workflow:* Fable 5 adaptive thinking; text emitted mid-turn is sometimes never rendered and absent from the JSONL transcript.
   *Impact:* data loss; debugging and auditing rely on transcripts, making this a reliability problem.
   *Community reaction:* 5 comments, no 👍 yet but flagged as data-loss.
   [View](https://github.com/anthropics/claude-code/issues/74260)

7. **#70438 · AskUserQuestion widget renders only header then hangs in VS Code extension (macOS)**
   *Affected workflow:* Skills that invoke AskUserQuestion in the VS Code extension chat panel; the question card never appears, session hangs indefinitely.
   *Impact:* blocks interactive flows in the IDE, limiting mixed TUI/editor workflows.
   *Community reaction:* 4 comments, 3 👍.
   [View](https://github.com/anthropics/claude-code/issues/70438)

8. **#76189 · Advisor (Fable 5) returns “unavailable” if any prior tool call exists in transcript**
   *Affected workflow:* using the server-side advisor with `claude-fable-5`; any previous tool call (even `Bash(ls)`) makes the advisor error out with “unavailable”.
   *Impact:* fundamentally breaks the advisor feature for Fable 5; Opus advisor works fine.
   *Community reaction:* 3 comments, 1 👍 — recent high-severity regression.
   [View](https://github.com/anthropics/claude-code/issues/76189)

9. **#71792 · `--dangerously-load-development-channels` drops inbound MCP server channels**
   *Affected workflow:* MCP servers using `claude/channel` capabilities; outbound tools work, but inbound notifications never arrive.
   *Impact:* silent failure of channel-based async communication, hard to diagnose.
   *Community reaction:* 2 comments, 2 👍.
   [View](https://github.com/anthropics/claude-code/issues/71792)

10. **#76528 · Configurable mouse interaction levels for interactive prompts (new today)**
    *Affected workflow:* refocus clicks interpreted as option selection in AskUserQuestion/permission dialogs.
    *Impact:* same accidental-accept class as #71539 but specifically targeting prompts.
    *Community reaction:* 1 comment, opened today.
    [View](https://github.com/anthropics/claude-code/issues/76528)

## Key PR Progress *(6 open pull requests)*
- **#41447 · feat: open source claude code ✨** — long-running community effort to open-source the tool; references five linked issues.
  [View](https://github.com/anthropics/claude-code/pull/41447)
- **#76475 · Flag innerHTML/outerHTML += append sink in security-guidance** — patches the XSS detection pattern to catch `element.innerHTML += userInput` (currently missed by substring match).
  [View](https://github.com/anthropics/claude-code/pull/76475)
- **#76394 · Add Claude Code Launcher – Windows CLI Application** — introduces a PowerShell-based launcher with 14 interactive menu options for Windows users.
  [View](https://github.com/anthropics/claude-code/pull/76394)
- **#76298 · docs: document Remote Control background-task panel** — updates Remote Control docs to describe the web/mobile background-task panel and task status sync from v2.1.205.
  [View](https://github.com/anthropics/claude-code/pull/76298)
- **#76289 · examples/hooks: demonstrate compound-command pre-flight with deny-and-steer** — extends the bash validator example to detect command chaining, pipelines, and substitution with allowlist steering.
  [View](https://github.com/anthropics/claude-code/pull/76289)
- **#76274 · security-guidance: resolve review paths against the repo root, harden findings-array contract** — fixes path handling in security reviewers to prevent relative/absolute path mismatches.
  [View](https://github.com/anthropics/claude-code/pull/76274)

## Feature Request Clusters
- **Mouse interaction control**
  Multiple issues call for finer-grained mouse handling: scroll-only mode to prevent accidental clicks (#70539), configurable interaction levels for permission/prompt dialogs (#76528), and a fix for focus clicks triggering actions (#71539). These indicate a friction point in TUI mouse integration that defaults are too aggressive.

- **MCP robustness**
  Recurring problems with Chrome MCP popup not rendering on Windows (#49979) and inbound channels silently dropped (#71792) suggest that MCP connectivity and permission flows still have platform-specific gaps.

## Developer Pain Points
- **Session limit exhaustion on Max plan (#38335)** is the dominant pain point, with hundreds of users reporting that limits are reached far faster than expected since late March. The thread has become a central gathering place for frustration.
- **Fable 5 reliability concerns** surface in multiple reports: silent tool-call storms (#66960), advisor “unavailable” after any tool use (#76189), and dropped assistant text (#74260). Combined with a set of low-quality closed issues expressing anger about model “execution” and “hallucinations,” there is a palpable undercurrent of dissatisfaction with Fable 5’s determinism and transparency in extended sessions.
- **TUI rendering glitches** (lost text blocks, hanging AskUserQuestion widget, accidental click actions) erode confidence in the terminal interface, especially when transcripts are missing information needed for debugging.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-11

## Today’s Update Brief
Two new CLI alpha releases arrived (`0.145.0-alpha.3` and `0.145.0-alpha.4`). Issue activity remained high with 50 updated issues and 50 pull requests, the most commented centering on GPT‑5.6 Sol subagent restrictions, Windows desktop performance, and rate‑limit failures. Several merged PRs directly address model reasoning‑summary compatibility, thread persistence, and Windows line‑ending preservation.

## Releases
- **rust‑v0.145.0‑alpha.4** — `0.145.0-alpha.4` (no additional notes)
- **rust‑v0.145.0‑alpha.3** — `0.145.0-alpha.3`

Both are CLI alpha snapshots; changelogs were not included in the release notes.

## Hot Issues
1. **GPT‑5.6 Sol forces all subagents to use Sol – no model selection**
   [#31814](https://github.com/openai/codex/issues/31814) | 32 comments, 👍81
   When the parent uses `gpt‑5.6‑sol`, MultiAgent V2 spawns all subagents as Sol instances, ignoring user‑configured models. High‑end token costs cannot be avoided for lightweight sub‑tasks. Community reaction is strong, with many expecting per‑subagent model choice.

2. **Codex App freezes/stutters on Windows 11 Pro despite sufficient resources**
   [#20214](https://github.com/openai/codex/issues/20214) | 31 comments, 👍45
   A long‑running performance complaint: the desktop app frequently hangs on up‑to‑date Windows 11 machines. Users with Plus/Pro subscriptions report the app becoming unresponsive, sometimes demanding Settings to be opened to recover. The issue has persisted since April.

3. **Windows shell/UI freezes until Codex Settings is opened**
   [#16374](https://github.com/openai/codex/issues/16374) | 26 comments, 👍10
   The Codex desktop app intermittently freezes the entire Windows shell; opening Codex Settings stops the freeze. A bizarre but reproducible workaround indicates a deeper compositing/messaging bug.

4. **Add setting to disable the 60‑second auto‑resolve for questions**
   [#28969](https://github.com/openai/codex/issues/28969) | 21 comments, 👍104
   CLI users are frustrated that contextual questions auto‑accept after 60 seconds with no opt‑out. The feature request has overwhelming support; many find the timer too short for reading or context gathering.

5. **Rate‑limit reset fails and wastes one reset**
   [#31606](https://github.com/openai/codex/issues/31606) | 23 comments, 👍25
   Pro users report that clicking “reset” decrements the available reset count but does not restore limits. This is a direct loss of a paid quota and has been widely reproduced.

6. **Desktop UX regressions in the unified ChatGPT/Codex app**
   [#31862](https://github.com/openai/codex/issues/31862) | 15 comments, 👍1
   After the July 9 merge of ChatGPT and Codex into a single macOS app (version `26.707.30751`), users report layout inconsistencies, missing features, and degraded navigation. Early feedback from Pro subscribers is negative.

7. **Computer Use crashes at launch on macOS 15.7.7 (missing Swift Concurrency symbol)**
   [#32032](https://github.com/openai/codex/issues/32032) | 14 comments, 👍9
   The native Computer Use helper fails to start due to a dyld symbol resolution error. The symptom is identical to a previously known issue, and it affects users who rely on MCP/UI control flows.

8. **Multiple paid accounts: limits drain after one prompt, company credits burned in a day**
   [#31668](https://github.com/openai/codex/issues/31668) | 6 comments, 👍0
   A possible billing‑impacting regression where entire monthly quotas are consumed within a single day. Multiple independent accounts are affected, and the author has linked earlier related reports.

9. **GPT‑5.3 Codex Spark fails with “Unsupported parameter: reasoning.summary”**
   [#31846](https://github.com/openai/codex/issues/31846) | 6 comments, 👍13
   The app sends `reasoning.summary` to the Spark model, which does not support it, causing immediate failures. This mirrors the now‑closed CLI issue #13009 but still occurs in the desktop app.

10. **Custom stdio MCP server tools not exposed to Desktop threads**
    [#19425](https://github.com/openai/codex/issues/19425) | 14 comments, 👍2
    A custom MCP server is discovered and its tools are listed successfully, yet the tools never appear in desktop conversations or `tool_search`. The bug blocks local tool integrations for desktop users.

## Key PR Progress
- **Respect model support for reasoning summaries** [#32290](https://github.com/openai/codex/pull/32290)
  Adds model metadata to omit `reasoning.summary` when unsupported. Directly fixes the Spark/O1‑family parameter error from #31846 and #13009.

- **Persist paginated items in the local thread store** [#32289](https://github.com/openai/codex/pull/32289)
  Thread store learns to create paginated threads while keeping them unsupported through the app‑server API. Preserves history mode filtering for live append.

- **Make GPT‑5.6 Sol the default Bedrock model** [#32288](https://github.com/openai/codex/pull/32288)
  Prioritises Sol, Terra, and Luna variants in the Amazon Bedrock catalog, making Sol the default provisioned model and updating default reasoning levels.

- **Clarify waiting behavior in safety buffering prompts** [#32286](https://github.com/openai/codex/pull/32286)
  Renames a prompt button to “Dismiss and keep waiting” and adds explanatory footer text, improving the safety‑check UX when responses are delayed.

- **Allow restricting subagent environments** [#31662](https://github.com/openai/codex/pull/31662)
  Adds `environment_ids` to `spawn_agent` (v1 and v2), allowing callers to constrain which environments child agents can see, with fork inheritance and ordering preserved.

- **Preserve line endings when applying patches (Windows)** [#30882](https://github.com/openai/codex/pull/30882)
  Behind a feature flag, patch application detects and preserves CRLF/CR/LF terminators. A critical step toward reliable code edits on Windows.

- **Speed up reverse history search** [#30887](https://github.com/openai/codex/pull/30887)
  Replaces one‑entry‑at‑a‑time file scanning with a batched prefetch, dramatically reducing latency and disk I/O when scrolling CLI history backwards.

- **Retry model capacity errors with backoff** [#31058](https://github.com/openai/codex/pull/31058)
  Sampling and remote compaction now keep the turn alive for up to three retries (30s/2min/5min) when the model returns structured overload signals, preventing unnecessary turn failures.

- **Support harness‑only personality “none”** [#31631](https://github.com/openai/codex/pull/31631)
  Strips the `# Personality` section from catalog‑provided model instructions when personality is set to `none`, giving developers full control over model tone.

- **Require elevated‑only Windows policy for network proxies** [#31437](https://github.com/openai/codex/pull/31437)
  Windows proxy enforcement no longer escalates to the elevated backend unless the sandbox level itself is elevated, avoiding unexpected UAC prompts.

## Feature Request Clusters
- **Subagent configurability**
  Users want to assign different models to subagents (`#31814`), re‑enable custom agent selection in CLI (`#26363` closed), and restrict subagent environments (`#31662` partially addresses). A thread selector for subagents is also requested (`#30813`).
- **Timer & UX customisation**
  Disable the 60‑second auto‑resolve for questions (`#28969`), restore missing ChatGPT Projects in the unified sidebar (`#31878`), and fix general desktop UX regressions (`#31862`).
- **Windows desktop performance & stability**
  Multiple overlapping reports of freezes, stutters, and kernel‑pool growth: `#20214`, `#16374`, `#29821`, `#31212`. Users expect a reliable Windows experience.
- **Rate‑limit & billing reliability**
  Failing resets (`#31606`) and sudden credit exhaustion (`#31668`) undermine trust in paid plans.

## Developer Pain Points
- **Windows App instability** remains the most persistent complaint, with the desktop client causing system‑wide UI freezes, stuttering, and high kernel usage even on well‑resourced machines.
- **Subagent model inheritance** forces expensive models onto every spawned agent, eliminating cost‑optimised workflows. Developers cannot downgrade subagents.
- **Inflexible auto‑resolve** forces CLI users to accept answers within 60 seconds with no way to extend or disable the timer, disrupting review‑heavy workflows.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-11

## Today’s Update Brief
Steady release cadence continues with a patch that silences a duplicate notification bug on the web side. The issue tracker saw 9 active reports focused on UI glitches, quota visibility, and the VS Code extension’s regression, while PR activity brought a wave of closed fix-ups and several interesting feature branches opening.

## Releases
**@moonshot-ai/kimi-code@0.23.5** *(patch)*
- Fixed duplicate “Turn finished” desktop notifications in the Kimi Web client by single-sourcing the session status events (PR [#1542](https://github.com/MoonshotAI/kimi-code/pull/1542) by @wbxl2000).

## Hot Issues
1.  **[#1500] Regression: VS Code extension quality & performance degradation in 2.7**
    User reports that Kimi Code 2.7 in VS Code ignores explicit instructions, hallucinates changes, and wastes tokens on unnecessary reasoning compared to 2.5. No response yet from maintainers. (1 comment, 0 👍)
    *Impact: Workflow reliability for VS Code users is noticeably worse after the upgrade.*

2.  **[#1538] ESC to close search popup kills the running task**
    Pressing `Esc` to dismiss the search sessions popup simultaneously terminates any currently executing task in Kimi Web. The key conflict affects macOS/Safari (and likely other browsers). No comments yet.
    *Impact: Users lose in-progress work when accidentally closing search; needs a scoped key handler.*

3.  **[#1541] KimiWeb: “Mode” button unresponsive when creating a new conversation inside a workspace**
    Clicking the mode selector during workspace new-dialog flow does nothing, blocking ability to switch modes. Reported fresh today with no response.
    *Affected workflow: Web users can’t easily change the interaction mode when starting a task inside a workspace.*

4.  **[#1171] Feature request: display quota/usage in the CLI bottom status bar**
    Suggests showing weekly usage and 5h limit with progress bars in the TUI footer (e.g., `本周用量： ████░░░░░░ 40%`). Has 1 👍 and a comment from another user supporting it. Originally from June 28 but updated yesterday.
    *Desire: Avoiding surprise quota exhaustion during long sessions.*

5.  **[#1544] AI-generated conversation titles instead of using the first message**
    Web-side request: automatically summarize the conversation using local AI capability to create a meaningful title, rather than defaulting to the first sentence (which often doesn’t reflect the topic). No votes yet, but raises a common UX pain.
    *Impact: Easier navigation of history when past chats become unrepresentative.*

6.  **[#1537] VS Code frontend still throttles rendering after backend has finished streaming all tokens**
    Even after the model finishes sending, the extension applies a fixed typing delay before showing the full response, slowing down perceived responsiveness. No comments.
    *Impact: Delays reading the complete answer; undermines streaming performance gains.*

7.  **[#1366] Docs: how to create a custom registry api.json**
    Open for a week with 4 comments and 1 👍. Users understand they can import providers via custom registry, but documentation lacks guidance on generating the `api.json` file. Author is seeking examples or tooling.
    *Impact: Power users wanting to bring custom model backends are blocked by missing recipe.*

8.  **[#1539] Plugin loader registers CHANGELOG.md as a skill named “CHANGELOG”**
    The official `kimi-datasource` plugin ships a `CHANGELOG.md` without YAML frontmatter; the skill loader treats it as a skill, producing a spurious skill entry with description `# Changelog`. No duplicates, but a mild pollution of the skill list.
    *Impact: Confusing to users who see a non-functional skill; indicates loader should require frontmatter or ignore certain files.*

9.  **[#1532] Support gpt-5.6-sol model**
    Straightforward request to add the new GPT-5.6-sol model to Kimi Code’s provider catalog. No additional details. No upvotes yet.
    *Impact: Users who have access to that model cannot easily use it within Kimi Code.*

## Key PR Progress
1.  **[#1542] (closed) fix(kimi-web): single-source session status to stop duplicate turn-end notifications**
    Merged fix that eliminated duplicate desktop notifications; shipped in v0.23.5.

2.  **[#1536] (closed) fix: refuse unsupported image formats instead of poisoning sessions**
    Previously, AVIF, HEIC, BMP, TIFF, ICO images were sent to providers even though they don’t accept them, leading to silent failures. Now the system refuses them upfront with a clear error. (by @RealKai42)

3.  **[#1535] (closed) fix(web): hide injected system asides in user message bubbles**
    Large image uploads triggered a server-side compression note that leaked as visible `<system>Image compressed …</system>` text in the user’s chat bubble. The fix hides these system asides from the UI. (by @wbxl2000)

4.  **[#1534] (closed) fix: classify web search http errors**
    WebSearch now differentiates between authentication, authorization, timeout, and server errors instead of lumping everything as a generic network failure. This gives users clearer diagnostics when search fails. (by @blablabiu)

5.  **[#1530] (closed) feat: harden LLM API fault tolerance against 429 and overload**
    Long-running eval runs no longer die on a single 429/overload/stream interruption; the system now retries gracefully instead of aborting the entire turn. (by @sailist)

6.  **[#1531] (closed) fix(agent-core-v2): preserve turn result details**
    Corrected an internal inconsistency where turn result metadata (step counts, cancellation causes) was lost during loop execution in the new v2 agent engine. (by @kermanx)

7.  **[#1529] (open) feat(auth): add ChatGPT Plus/Pro OAuth provider**
    New device-code OAuth flow lets users log in with their ChatGPT Plus/Pro subscriptions and fetch their available Codex model catalog. A built-in fallback ensures the feature degrades gracefully when the catalog can’t be retrieved. (by @qipenglin)

8.  **[#1441] (open) feat(v2): land agent-core-v2 engine and kap-server behind experimental flag**
    Integration PR that introduces the core v2 agent engine and the kap-server; gated behind an experimental flag for early testing.

9.  **[#1543] (open) feat(tui): run interactive shell on agent-core-v2 with deferred session creation**
    Moves the interactive terminal UI onto the new v2 agent engine via a facade, enabling deferred session creation. Still in progress, targets the `kimi-code-v2` branch.

10. **[#1493] (open) feat(tui): support external status line command**
    Allows the TUI footer to be rendered by an external command that receives session, model, and context metadata via stdin JSON, falling back to the built-in indicator if the command fails or times out. (by @yearth)

## Feature Request Clusters
- **Quota & usage visibility** (Issue [#1171](https://github.com/MoonshotAI/kimi-code/issues/1171)): Users want always‑visible usage bars and reset timers in the CLI/TUI to avoid sudden limits.
- **AI‑powered conversation titles** (Issue [#1544](https://github.com/MoonshotAI/kimi-code/issues/1544)): Leverage local AI to generate descriptive titles for web‑side chats, replacing the unreliable first‑message default.
- **New model support** (Issue [#1532](https://github.com/MoonshotAI/kimi-code/issues/1532)): Requests for specific cutting‑edge models like GPT‑5.6‑sol.
- **Custom registry tooling/documentation** (Issue [#1366](https://github.com/MoonshotAI/kimi-code/issues/1366)): Need a clear recipe or tool to generate the `api.json` for custom provider registries.

## Developer Pain Points
- **VS Code extension regression:** Version 2.7 degraded instruction‑following, performance, and token efficiency vs. 2.5 ([#1500](https://github.com/MoonshotAI/kimi-code/issues/1500)). Combined with a frontend rendering throttle even after the backend finishes ([#1537](https://github.com/MoonshotAI/kimi-code/issues/1537)), the VS Code experience feels slower and less reliable.
- **Web UI interaction bugs:** Multiple new reports today highlight small but disruptive glitches—modal key bindings that kill tasks ([#1538](https://github.com/MoonshotAI/kimi-code/issues/1538)) and a dead mode button in workspace context ([#1541](https://github.com/MoonshotAI/kimi-code/issues/1541))—eroding polishing confidence.
- **Plugin system quirks:** The loader treating a root‑level `CHANGELOG.md` as a skill ([#1539](https://github.com/MoonshotAI/kimi-code/issues/1539)) shows the need for more robust Markdown‑skill detection (requiring frontmatter or ignore lists).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-07-11

### Today’s Update Brief
The repository saw significant issue activity with 30 updated items (top 30 by comment count) and a burst of pull request housekeeping, including a wave of `automated-pr-cleanup` closures. Notable focus areas include the V2 branch TUI experience, model provider incompatibilities, and recurring performance/crash reports. Several meaningful contributor PRs opened or merged today, targeting service status reporting, token capping, and Git discovery optimisation.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues
1. **Mobile version of OpenCode** [#10288](https://github.com/anomalyco/opencode/issues/10288) (14 comments, 👍89)
   Request for an Android/iOS or Web UI for on-the-go AI coding assistance. The terminal-only nature limits mobility, and the community strongly supports a mobile-friendly offering.

2. **Integrated browser for desktop** [#26772](https://github.com/anomalyco/opencode/issues/26772) (12 comments)
   Proposal to embed a browser workspace in the OpenCode Desktop TUI, allowing direct inspection and interaction with web applications without leaving the tool.

3. **Xcode ACP ignores opencode.json model selection** [#34743](https://github.com/anomalyco/opencode/issues/34743) (12 comments)
   When using the ACP agent from Xcode 27 beta, OpenCode defaults to the `big-pickle` model instead of the one specified in `opencode.json` or the TUI picker, blocking custom model workflows for Apple developers.

4. **GPT-5.6 Luna model not found with ChatGPT OAuth** [#36140](https://github.com/anomalyco/opencode/issues/36140) (11 comments, 👍44)
   The new `gpt-5.6-luna` model is listed but returns HTTP 404 when using OAuth, while other models work. This frustrates users trying to adopt the latest model via their existing subscription.

5. **SQLite database corruption on NFS with concurrent sessions** [#14970](https://github.com/anomalyco/opencode/issues/14970) (10 comments, 👍19)
   Running multiple OpenCode sessions on an NFS-mounted home directory corrupts `opencode.db`, making the tool unusable. Affects shared filesystem environments and CI setups.

6. **Unify modal interaction and visual behavior in V2 TUI** [#36302](https://github.com/anomalyco/opencode/issues/36302) (5 comments)
   An audit of 37 dialog components revealed inconsistencies in interaction models and state handling. This issue serves as a decision surface for standardising the V2 TUI’s modal patterns.

7. **V2 managed-service restart causes reconnect herd and resource spikes** [#36285](https://github.com/anomalyco/opencode/issues/36285) (3 comments)
   Automatic update restarts the shared service, disconnecting all TUIs and triggering concurrent graph bootstrapping, resulting in slow rendering and partial state. Performance impact under investigation.

8. **GPT-5.6 Sol-fast/high repeatedly fails with `reasoning part rs_*:0 not found`** [#36241](https://github.com/anomalyco/opencode/issues/36241) (3 comments)
   On macOS, streaming reasoning from `openai/gpt-5.6-sol-fast` aborts mid-response, preventing reliable use of that model variant.

9. **Windows TUI fails when `.opencode` directory already exists** [#35828](https://github.com/anomalyco/opencode/issues/35828) (3 comments, 👍2)
   On Windows, the TUI startup crashes with `Unexpected server error` if a project’s `.opencode` directory already exists from a prior run, pointing to a race in state loading.

10. **TUI autocomplete ignores file listings inside configured references** [#34040](https://github.com/anomalyco/opencode/issues/34040) (3 comments, 👍2)
    When a reference alias points to an external directory, autocomplete stops at the alias name and does not list nested files, reducing productivity for users who rely on reference shortcuts.

### Key PR Progress
Many PRs were automatically closed today as part of a cleanup campaign; notable active and recently merged PRs include:

1. **fix(cli): report mismatched service status** [#36275](https://github.com/anomalyco/opencode/pull/36275) (open)
   Replaces misleading output from `service status` with explicit JSON inspection states, correctly reporting a running daemon even when its version differs from the CLI.

2. **fix(core): cap session output tokens** [#36333](https://github.com/anomalyco/opencode/pull/36333) (open)
   Caps V2 provider turns at 32K output tokens to match existing runtime behavior, preventing models from consuming full context windows.

3. **refactor(core): combine git discovery queries** [#36321](https://github.com/anomalyco/opencode/pull/36321) (closed)
   Merges multiple Git metadata queries into a single `git rev-parse` call and adds coverage for worktree-less repositories, improving startup performance.

4. **feat(codemode): support promise chaining with .then/.catch/.finally** [#36304](https://github.com/anomalyco/opencode/pull/36304) (closed)
   Extends the CodeMode sandbox with standard promise chaining, building on earlier combinators.

5. **test(core): add CodeMode search fixture catalog** [#36332](https://github.com/anomalyco/opencode/pull/36332) (open)
   Registers 200 temporary tools across 20 namespaces for end-to-end testing of V2 CodeMode’s search and tool invocation.

6. **fix(app): space review navigation groups** [#36330](https://github.com/anomalyco/opencode/pull/36330) (open)
   Aligns file-tree/navigation spacing to the 12px review control-group grid, keeping previous/next arrows flush.

7. **feat(nix): enable nix CI in v2 branch** [#36329](https://github.com/anomalyco/opencode/pull/36329) (open)
   Adds the `v2` branch to the Nix hash CI workflow, fulfilling a frequent Nix user request.

8. **Enable Nix CI workflows on v2 branch** [#34670](https://github.com/anomalyco/opencode/pull/34670) (closed)
   Earlier version of the same Nix CI inclusion; now superseded by #36329.

9. **feat: discover nested plugin index entrypoints under .opencode/plugin** [#31641](https://github.com/anomalyco/opencode/pull/31641) (closed – automated cleanup)
   Extended auto-discovery to nested `index.{js,ts}` entrypoints, expanding plugin organisation options.

10. **fix(opencode): propagate tool.definition hook parameter modifications to MCP tools** [#31685](https://github.com/anomalyco/opencode/pull/31685) (closed – automated cleanup)
    Ensured that parameter modifications made by a `tool.definition` hook are fully applied to MCP tools, fixing a hook granularity bug.

### Feature Request Clusters
- **Mobile / Web access**: Priority on a mobile version (#10288) or a web-based UI, reflecting demand for on-the-go access.
- **Integrated browser**: Request for a built-in browser workspace in the desktop TUI (#26772), signalling a desire for a more self-contained development environment.
- **Interactive steering**: Following GPT-5.4’s capabilities, the community asked for steering support within OpenCode (#19205; closed but highly upvoted).
- **TUI UX polish for V2**: A cluster of issues aims to smooth the V2 TUI experience—unifying modal behaviour (#36302), adding discoverable return navigation from subagent views (#36322), and fixing non-functional fork modals (#36323).
- **Nix support for V2 branch**: Repeated request to include Nix CI and hashes for the `v2` branch (#36328, earlier #34671) so Nix users can test the latest development version.

### Developer Pain Points
- **Model/provider breakage**: Multiple reports of new or specific models failing (GPT-5.6 Luna 404, GPT-5.6 Sol-fast reasoning part errors, GitHub Copilot 400 for all models), making it hard to rely on advertised model support. Xcode integration ignoring local config adds to provider inconsistency.
- **Database corruption on shared filesystems**: SQLite corruption when using NFS or concurrent sessions (#14970) and startup failures due to unhandled `database is locked` errors (#33320) remain unresolved, impacting team and CI setups.
- **Windows TUI fragility**: The Windows client fails when a `.opencode` directory already exists, blocking simple restarts (#35828).
- **V2 managed-service stability**: Restarts during updates trigger herd reconnects, cold cache boots, and delayed readiness (#36285), degrading the V2 user experience.
- **Autocomplete gaps**: References to external directories do not provide file-level autocompletion (#34040), slowing down users who depend on these shortcuts.
- **Misleading assistant claims**: The AI assistant sometimes gives false information about session persistence, leading to data loss assumptions (#36326).

</details>