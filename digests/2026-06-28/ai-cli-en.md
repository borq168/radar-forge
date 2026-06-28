# AI CLI Tools Community Digest 2026-06-28

> Generated: 2026-06-28 00:32 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison — 2026-06-28

## 1. Daily Cross-Tool Overview

Activity was broad but uneven across the seven tracked tools. OpenAI Codex, OpenCode, and Qwen Code each saw 50+ PRs updated, while Claude Code and Gemini CLI showed moderate issue activity with few PRs. No tool shipped a major stable release today; only OpenAI Codex and Qwen Code pushed alpha/nightly builds. A common pattern across multiple tools was platform-specific regressions (Windows and Linux issues appeared in Claude Code, Copilot CLI, OpenAI Codex, OpenCode, and Qwen Code), and safety/security concerns (false positives, secret exposure, permission bypasses) appeared in three separate tool communities. Kimi Code CLI showed zero activity for the second consecutive day.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today |
|---|---|---|---|
| Claude Code | 50 | 2 | None |
| OpenAI Codex | 50 | 50 | 3 alpha (Rust) |
| Gemini CLI | 50 | 18 | None |
| GitHub Copilot CLI | 15 | 3 | None |
| Kimi Code CLI | 0 | 0 | None |
| OpenCode | 50 | 50 | None |
| Qwen Code | 27 | 50 | 1 nightly |

*Note: "Issues updated" and "PRs updated" counts include both new and updated items. All counts are from the provided digests.*

---

## 3. Shared Feature Directions

Several feature requirements appeared across multiple tool communities today:

**Cross-device / team memory persistence** — Qwen Code (#5836, #5867) and OpenCode (#13877, session management) both have open requests for project-level or shareable memory/todo/plan state that survives across machines and team members. Claude Code's `.worktreeinclude` feature (#71913) also touches on file-sharing semantics, though at a lower level.

**File exclusion / sensitive file protection** — OpenAI Codex (#2847, `.codexignore`, 414👍) and Claude Code's safety-filter false positive reports (#71910 cluster) both reflect user demand for fine-grained control over what the agent can read or access. No tool fully addresses this today.

**Native Linux desktop app demand** — OpenAI Codex (#11023, 648👍) and Gemini CLI's browser control requests (#15956) both imply Linux users lack parity with macOS. Claude Code has no comparable issue, suggesting either better Linux support or lower Linux user base.

**Undo/rollback for agent actions** — OpenAI Codex (#9203, restore `/undo`, 300👍) and OpenCode (PR #34263, merged undo/redo/revert for V2 sessions) show dual interest in recovering from unintended agent changes.

**MCP/hook environment consistency** — Claude Code (#71924, missing `CLAUDE_PROJECT_DIR` on Windows), Gemini CLI (#28094, deep-merge for settings), and Copilot CLI (#3958, MCP server startup failure on Windows) all touch on environment variable and path handling for subprocesses and plugins.

---

## 4. Differentiation Analysis

**Claude Code** is the most safety-constrained tool today: the eight-drone-firmware false positive cluster suggests aggressive cybersecurity filtering that other tools do not report. It also shows the strongest emphasis on Windows parity gaps (notifications, environment variables, auth).

**OpenAI Codex** has the most intense cost/rate-limit community backlash — two issues with 186 and 29 comments on sudden budget drainage — a pain point absent from other tools. It is also the only tool with a dedicated `.codexignore` request reaching high reaction counts.

**Gemini CLI** focuses most heavily on agent orchestration reliability: P1 bugs for subagent hang, silent success misreporting, and shell command stuck states dominate. Its PR output is weighted toward security hardening (shell parameter expansion, approval guards) more than any other tool.

**GitHub Copilot CLI** is in a regression-recovery phase: multiple v1.0.65/v1.0.66 bugs (clipboard, MCP startup, hang) without a fix release in sight. Its issue volume (15) is lowest among active tools, suggesting either smaller user base or fewer feature requests.

**OpenCode** shows the most platform-diversity pain: WSL path confusion, ARM64 crashes, and server memory leaks (26 GiB heap) are unique to its ecosystem. It also shipped the most concrete user-facing PRs today (session rename, undo/redo).

**Qwen Code** is the most architectural-innovation focused: the multiplayer channel-resident agent (#5888), daemon-based Chrome extension revival (#5777), and resume-interrupted-turn API (#5030) represent deeper infrastructure changes than other tools' daily output.

---

## 5. Community Activity Notes

**Highest total volume**: OpenAI Codex and OpenCode each had 100 items (issues + PRs), driven by large PR stacks. OpenAI Codex's PR count (50) includes its MCP OAuth serialization series (4+ PRs), while OpenCode's includes the session management feature set.

**Most maintainer engagement**: Gemini CLI shows active maintainer response across multiple P1 bugs (#22323, #21409, #25166) with comments from project members. Claude Code has no visible maintainer comments on its top issues. OpenAI Codex maintainers remain silent on the rate-limit cost spike (#28879, 186 comments).

**Fastest issue resolution**: Claude Code closed #71924 (`CLAUDE_PROJECT_DIR` missing on Windows) and Qwen Code closed #5920 (session rewind bug) on the same day they were filed. OpenAI Codex's merged PRs (#30384, timeout change; #30291, environment info RPC) show internal prioritization that doesn't match community top issues.

**Quietest tool**: Kimi Code CLI had zero activity. This is a repeat pattern — no indication of project abandonment or otherwise.

**Release velocity**: Only OpenAI Codex (3 alpha releases, Rust package) and Qwen Code (1 nightly) shipped today. All others had no releases.

---

## 6. Evidence-Backed Observations

**1. Platform-specific regressions are the most common cross-tool pain point today.**
Windows issues appeared in Claude Code (auth failure #69706, missing env var #71924), Copilot CLI (clipboard #3949, MCP startup #3958), OpenAI Codex (sandbox failures #29072, #24259), OpenCode (path confusion #19473, #30895), and Qwen Code (cua-driver CPU leak #5922, scroll bug #5941). macOS regressions appeared in Copilot CLI (drag-drop #3955, trackpad scroll #3957). Linux issues appeared in Claude Code (instruction violations #57200) and Gemini CLI (Wayland browser subagent #21983). No single tool is free of platform bugs today.

**2. Safety and security concerns span three tools with different manifestations.**
Claude Code's safety-filter false positives (#71910 cluster) block legitimate drone/firmware development. Gemini CLI's secret exposure issue (#26525) describes pre-redaction data leakage in Auto Memory. Copilot CLI's `preToolUse` hook denial bypass (#3874) undermines plugin security. OpenAI Codex's `.codexignore` request (#2847) is the community's proposed solution to a similar problem. No tool appears to have a fully satisfactory approach to agent safety controls.

**3. Session and memory management is an emerging cross-tool pain point.**
Qwen Code has three issues (#5836, #5867, #5889) asking for cross-device persistent state. OpenCode has session rename, undo/redo, and the sessions picker limit (#13877). Gemini CLI's Auto Memory inefficiencies (#26522, #26523, #26525) show the same class of problem from the implementation side. The pattern suggests local-only state is becoming a bottleneck as users work across devices.

**4. Agent orchestration reliability remains fragile across multiple tools.**
Gemini CLI's P1 bugs (#21409, #25166, #22323) describe agent hangs and silent success misreporting. Claude Code's #57200 reports instruction violations persisting since May. OpenAI Codex's subagent hang (#24389, 8+ hours) and Qwen Code's write_file retry loops (#5756) both describe agents getting stuck in degenerate behavior. The "agent fails silently" pattern is the most concerning because it erodes user trust.

**5. Rate limiting and cost transparency is a high-severity issue affecting OpenAI Codex exclusively today.**
Issues #28879 (186 comments, 333👍) and #29955 (29 comments) describe sudden 10–20× rate-limit cost increases and instant budget exhaustion. No comparable issue appears in Claude Code, Gemini CLI, or any other tool. This appears to be a provider-side pricing or metering change rather than a tool-level bug.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-28

## Today's Update Brief

Activity remains high with **50 open/updated issues** tracked in the last 24 hours, though no new releases shipped. A significant cluster of **seven cybersecurity safety-filter false positive reports** from a single user (@sworrl) dominated yesterday's issue board, all involving blocked drone firmware and ground-station development work. Two minor PRs saw activity; the more substantial one fixes silent failure in an internal CI scripting tool.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#69706 — API Error: 401 Invalid authentication credentials (Windows)](https://github.com/anthropics/claude-code/issues/69706)**
   *21 comments, 10 👍*
   Sustained community discussion around persistent auth failures on Windows. Users report the error appears without clear trigger, affecting both CLI and VS Code extension sessions. Maintainer response status unclear.

2. **[#57200 — Claude ignores instructions and violates rules consistently (Linux)](https://github.com/anthropics/claude-code/issues/57200)**
   *9 comments, 5 👍*
   Long-running complaint (since May 8) about the model failing to follow user-provided instructions during coding sessions. No resolution or maintainer acknowledgment visible.

3. **[#71910 / #71901 / #71920 / #71912 / #71918 / #71917 / #71916 / #71919 — Safety-block false positives on drone firmware and ground-station work](https://github.com/anthropics/claude-code/issues/71910)**
   *3-4 comments each*
   @sworrl filed **eight separate reports** in a single day, all describing mid-session session halts due to the cybersecurity or AUP safety filters. Work includes USB protocol inspection, firmware version diffs, open-source ground station GUI builds, and protocol decoding. The user provides request IDs and argues these are authorized reverse-engineering tasks. Blocked sessions cannot be resumed — a "session-halted" severity. This is the most active single-user issue cluster in today's data.

4. **[#61665 — AskUserQuestion UI disappears when moving VS Code chat tab to new window](https://github.com/anthropics/claude-code/issues/61665)**
   *5 comments*
   Reproducible VS Code extension bug: dragging the Claude Code chat panel into a separate window causes the `AskUserQuestion` prompt to vanish with no way to re-show it. Closed as of today.

5. **[#67220 — Native Windows toast notifications](https://github.com/anthropics/claude-code/issues/67220)**
   *3 comments*
   Feature request for a `windows_toast` channel in `preferredNotifChannel`. Windows users currently lack OS-level notifications when tasks finish or when user input is needed — macOS and Linux already have this. Maintainers have not commented.

6. **[#71924 — CLAUDE_PROJECT_DIR not set in any subprocess on Windows/Claude Desktop](https://github.com/anthropics/claude-code/issues/71924)**
   *2 comments, closed*
   Documented environment variable is absent from all subprocess environments (Bash, PowerShell, MCP server processes) on Windows. Fast turnaround — closed same day, suggesting a fix or triage acknowledgment.

7. **[#71913 — Handle non-gitignored files in .worktreeinclude](https://github.com/anthropics/claude-code/issues/71913)**
   *2 comments*
   User requests that `.worktreeinclude` allow listing files that *aren't* gitignored, for cases where uncommitted utility scripts exist outside `.gitignore`. Currently the feature only works for gitignored files.

8. **[#71928 — Collapsible sticky prompt block in VS Code extension](https://github.com/anthropics/claude-code/issues/71928)**
   *1 comment*
   User finds the persistent "confirmation prompt block" (sticky prompt) takes up too much vertical space in the VS Code panel. Requests collapsible behavior to reclaim screen real estate.

9. **[#71926 — Fullscreen TUI mouse capture prevents standard clipboard selection](https://github.com/anthropics/claude-code/issues/71926)**
   *1 comment*
   Documentation bug: the terminal config docs describe terminal text selection working normally in fullscreen TUI mode, but on GNOME Terminal (Ubuntu), the mouse is fully captured. Users must Shift-drag to copy text, which is non-standard and undocumented.

10. **[#71925 — Usage-limit banner floors reset time misleadingly](https://github.com/anthropics/claude-code/issues/71925)**
    *1 comment*
    The usage-limit banner drops minutes by flooring to the largest whole unit. User reports "resets in 1h" shown when 1h 20m remained. Impact: users believe they have less idle time than reality.

## Key PR Progress

Only **2 PRs** saw activity in the last 24 hours. Human-significant contributions are minimal:

1. **[#68787 — fix(scripts): add error message to edit-issue-labels.sh](https://github.com/anthropics/claude-code/pull/68787)**
   Open. Addresses silent exit code 1 when the internal CI helper script receives no label arguments. Now writes an error message to stderr. Low user impact, but improves maintainability of Anthropic's own issue triage pipeline.

2. **[#71798 — (title: ".")](https://github.com/anthropics/claude-code/pull/71798)**
   Closed same day. No description. Appears to be a test/bot PR or accidental submission — no substantive changes.

## Feature Request Clusters

**Windows Native Notifications**
Multiple Windows users request OS-level toast notifications. Current `preferredNotifChannel` supports macOS (`terminal-bell`, `native`) and Linux, but Windows has no native option. [#67220](https://github.com/anthropics/claude-code/issues/67220)

**TUI/UI Affordance Improvements**
Users report frustration with the fullscreen TUI mode: accidental click-selection of options when trying to focus the window ([#71921](https://github.com/anthropics/claude-code/issues/71921)), lost ability to copy text without Shift-drag ([#71926](https://github.com/anthropics/claude-code/issues/71926)), and the confirmation sticky prompt consuming too much space in VS Code ([#71928](https://github.com/anthropics/claude-code/issues/71928)).

**MCP Environment Variable Consistency**
Two reports highlight missing or inconsistent environment variables in subprocesses: `CLAUDE_PROJECT_DIR` absent on Windows ([#71924](https://github.com/anthropics/claude-code/issues/71924)), and `set_permission_mode` storms from the `claude-in-chrome` MCP server when Chrome isn't running ([#71922](https://github.com/anthropics/claude-code/issues/71922)).

**Worktree / Workspace File Handling**
Users want more flexible `.worktreeinclude` semantics — allowing non-gitignored files ([#71913](https://github.com/anthropics/claude-code/issues/71913)) — and proper save-event propagation from Claude Code file edits to VS Code ([#62900](https://github.com/anthropics/claude-code/issues/62900), closed stale).

## Developer Pain Points

- **Safety-filter false positives blocking legitimate work** — The @sworrl cluster alone produced eight session-halting blocks in a single day, suggesting the cybersecurity filter may be overly aggressive on embedded-systems / IoT / drone development. Users report they cannot recover blocked sessions and must start over.
- **Authentication instability on Windows** — The #69706 401 error thread (21 comments) indicates a recurring auth issue that users cannot diagnose on their own, with no clear maintainer guidance visible.
- **Model behavior unpredictability** — #57200 (instruction violations) and #57692 (Opus 4.7 performance degradation post-Colossus-1) represent ongoing frustration with model reliability, each persisting for weeks without resolution.
- **Billing / entitlement confusion** — #55050 (closed stale) and #62898 (closed stale) both raised discrepancies between desktop and CLI billing behavior on Max plans. While closed, the pattern suggests users are surprised when the CLI meters usage differently than the desktop app.
- **Windows-specific gaps** — Missing toast notifications, missing `CLAUDE_PROJECT_DIR`, and the `claude-in-chrome` startup storm on Windows create a notably worse experience compared to macOS/Linux.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-28

## Today’s Update Brief
Three alpha releases (v0.143.0-alpha.27–29) went out for the Rust package, but no changelog details were published. Community activity remained high: 50 issues and 50 PRs were updated in the last 24 hours. Rate-limit cost complaints and Windows sandbox failures dominate the bug tracker, while a large stack of MCP OAuth concurrency fixes is in review.

## Releases
- **rust-v0.143.0-alpha.29** ([link](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29)) – Release only, no description.
- **rust-v0.143.0-alpha.28** ([link](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)) – Release only, no description.
- **rust-v0.143.0-alpha.27** ([link](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)) – Release only, no description.

No feature or fix notes were provided for these releases.

## Hot Issues (10 selected)

1. **Rate-limit cost per token jumped 10–20× since June 16**
   [#28879](https://github.com/openai/codex/issues/28879) – Users on Plus plan report their 5‑hour budget drains in 2–3 prompts, citing `token_count` / `rate_limits` logs. 186 comments, 333 👍.

2. **Linux Codex desktop app request**
   [#11023](https://github.com/openai/codex/issues/11023) – The newest high‑demand enhancement (648 👍). Users ask for a native Linux app because macOS suffers from power‑consumption issues (#10432).

3. **SQLite feedback logs can write ~640 TB/year**
   [#28224](https://github.com/openai/codex/issues/28224) – Aggressive logging was consuming SSD endurance. Update: three PRs (#29432, #29457, …) merged in 0.142.0 reduce logs by ~85%.

4. **Mechanism to exclude sensitive files**
   [#2847](https://github.com/openai/codex/issues/2847) – Request for `.codexignore` (repo‑global) to prevent agent from reading/sending sensitive paths. 414 👍.

5. **Request to restore `/undo` command**
   [#9203](https://github.com/openai/codex/issues/9203) – Undo was removed; users miss it for recovering accidentally deleted or modified files. 300 👍.

6. **Quota drained instantly: 100 credits gone after 1 message**
   [#29955](https://github.com/openai/codex/issues/29955) – Pro*5 users report the 5‑hour limit resets to 0% after a single turn. 29 comments.

7. **Windows sandbox: `apply_patch` fails because setup exe cannot launch from package path**
   [#29072](https://github.com/openai/codex/issues/29072) – Every `apply_patch` call fails on Windows due to path‑resolution issue in `codex-windows-sandbox-setup.exe`. 22 comments.

8. **VS Code extension blank central editor panel on Windows**
   [#21863](https://github.com/openai/codex/issues/21863) – Custom URI route uses `fsPath` incorrectly, resulting in an empty panel. 14 comments.

9. **`multi_agent_v1.close_agent` can hang for hours**
   [#24389](https://github.com/openai/codex/issues/24389) – Parent thread stuck >8 hours when closing an unresponsive subagent. 14 comments.

10. **Windows sandbox intermittently fails on ARM64 with `spawn setup refresh`**
    [#24259](https://github.com/openai/codex/issues/24259) – Even when `codex doctor` passes, sandbox setup fails. 13 comments.

## Key PR Progress (10 selected)

1. **[app-server] increase currentTime/read timeout**
   [#30384](https://github.com/openai/codex/pull/30384) – Raised external request timeout from 5 s → 10 s. Merged.

2. **[plugins] Enforce marketplace source policy at runtime**
   [#29691](https://github.com/openai/codex/pull/29691) – Blocks installed plugins from non‑compliant sources; filters discovery and snapshots. Merged after code review.

3. **[codex] disable Nagle on Rendezvous WebSockets**
   [#30269](https://github.com/openai/codex/pull/30269) – Unconditionally sets `disable_nagle=true` for exec‑server WebSocket connections to reduce latency. Open.

4. **[app-server] expose environment info RPC**
   [#30291](https://github.com/openai/codex/pull/30291) – Lets clients discover shell and working directory of named execution environments. Merged.

5. **Route MCP OAuth recovery through Codex**
   [#30294](https://github.com/openai/codex/pull/30294) – Part of a series serialising OAuth operations to prevent race conditions in token refresh. Open.

6. **Serialize MCP OAuth login and logout**
   [#30295](https://github.com/openai/codex/pull/30295) – Ensures sequential handling of login/logout to avoid credential corruption. Open.

7. **Report MCP OAuth Auto store drift**
   [#30296](https://github.com/openai/codex/pull/30296) – Detects and reports when persisted OAuth credentials diverge from runtime state. Open.

8. **core: stabilize synthesized call output IDs**
   [#30327](https://github.com/openai/codex/pull/30327) – Assigns a stable ID to “aborted” outputs so retries don’t create duplicate entries. Merged after code review.

9. **Make Apps guidance react to MCP availability**
   [#30226](https://github.com/openai/codex/pull/30226) – Moves generic Apps guidance to dynamic emission so it appears if MCP tools become available mid‑turn. Open.

10. **Preserve namespaces on custom tool calls**
    [#30302](https://github.com/openai/codex/pull/30302) – Maintains the optional namespace field during deserialisation and replay. Merged.

## Feature Request Clusters

- **Linux desktop app** – #11023 (648 👍) and related issues show strong demand for native Linux support.
- **File exclusion / `.codexignore`** – #2847 (414 👍), #24993 (8 👍) both request a way to prevent the agent from reading or uploading sensitive files.
- **Undo and safety** – #9203 (300 👍) asks to restore `/undo`. #24325 (5 comments) requests “ask before every edit” mode.
- **UI/UX improvements** – #26200 (clickable chips for subagents/threads), #24325 (edit confirmation), #26478 (spellcheck no guesses on Windows).
- **Rate-limit transparency** – Multiple issues (#28879, #29955, #18018) ask for better visibility into how credits and time budgets are consumed.

## Developer Pain Points

- **Rate-limit/credit spikes** – Three separate issues (##28879, #29955, #18018) report sudden budget drainage after June 16, affecting Plus and Pro*5 users. The lack of official response or fix is a top frustration.
- **Windows sandbox instability** – At least six active bugs cover failures in sandbox setup (#24259, #20570, #19190, #29072), polling overhead (#29408), and update/restart issues (#29787). The Windows platform remains the least reliable.
- **Authentication token problems** – #28672 describes repeated 401 errors and forced phone verification on Business accounts. #30254 reports auth.json corruption after long CLI sessions.
- **Missing Linux support** – Despite high demand (#11023), no official timeline for a Linux desktop app exists. Users work around macOS power issues or resort to CLI.
- **Performance degradation** – The SQLite log volume (#28224, now partially fixed) and Windows git polling (#29408) indicate background resource consumption that surprises developers.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-28

## Today's Update Brief

No new releases were cut in the last 24 hours. Issue activity remains intense, with 50 open issues (30 tracked by comment count) and 18 PRs updated, signaling continued heavy investment in agent reliability, security hardening, and developer experience fixes. Several high-priority bugs involving agent hangs, misreported success states, and memory system inefficiencies are receiving ongoing attention from maintainers.

## Releases

None in the last 24 hours.

## Hot Issues

**1. [Feature Proposal: Browser Control for Gemini CLI](https://github.com/google-gemini/gemini-cli/issues/15956)**
A major proposal to combine a Semantic Agent (Accessibility Tree-based) with a Visual Agent (screenshot-based Computer Use model) for web browser control. The hybrid design aims to optimize cost and speed. 14 comments, no reactions yet, but this is clearly a high-investment area given the ecosystem of browser-related issues.

**2. [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
P1 bug: `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when its own result confirms it hit the maximum turn limit before doing any analysis. This silently hides agent failure. 8 comments, 2 upvotes. Affects trust in agent results.

**3. [Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)**
P1 bug: When `gemini-cli` defers to the generalist agent, it hangs indefinitely on simple tasks like folder creation. Workaround: instructing the model not to use sub-agents resolves it. 7 comments, 8 upvotes (highest reaction count on this list). Community frustration is visible.

**4. [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
P1 EPIC tracking 76 behavioral eval tests across 6 supported Gemini models. The goal is systematic quality gates rather than ad-hoc testing. 7 comments. This signals a maturation of the testing infrastructure.

**5. [Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
P2 EPIC investigating whether AST-aware tools improve precision (reading method bounds, reducing turns from misaligned reads) and reduce token noise. 7 comments. Could significantly impact agent efficiency if adopted.

**6. [Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
P2 security bug: Auto Memory reads local transcripts and sends content to an extraction model *before* secrets are redacted. The extraction prompt instructs redaction only after content is already in context. Additionally, existing skill logs may leak data. 5 comments.

**7. [Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
P2 inefficiency: Auto Memory only marks sessions as processed when the extraction agent successfully reads the transcript. If the agent decides to skip a low-signal session, it remains unprocessed and can be surfaced repeatedly. 5 comments.

**8. [Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**
P1 bug: After executing simple shell commands (e.g., `ls`), Gemini hangs showing the command as active and awaiting input, even though the command has finished. 4 comments, 3 upvotes. Core workflow disruption.

**9. [Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
P1 platform bug: The browser subagent fails on Wayland display servers with `Termination Reason: GOAL` but no meaningful output. 4 comments. Affects Linux users specifically.

**10. [Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**
P2: The model occasionally uses dangerous commands (`git reset`, `--force`) when safer alternatives exist. Also needs safeguards for modifying production resources like databases. 3 comments, 1 upvote. Underlying theme: autonomous agent safety.

## Key PR Progress

**1. [fix(security): require approved bot patch artifacts](https://github.com/google-gemini/gemini-cli/pull/28178)**
Requires explicit approval before the bot publish job consumes `bot-changes.patch`. Rejected critique runs now remove stale artifacts. Fail-closed security boundary.

**2. [fix(policy): require confirmation for shell parameter expansion](https://github.com/google-gemini/gemini-cli/pull/28175)**
Downgrades shell commands using `$` expansion to require confirmation in interactive mode; denies entirely in YOLO mode. Adds regression tests for `echo` with literal dollar strings.

**3. [fix(agent): prevent silent scope expansion on task failure](https://github.com/google-gemini/gemini-cli/pull/28172) and [related fix](https://github.com/google-gemini/gemini-cli/pull/28171)**
Two PRs (size M and XL) addressing #28155: when asked to review specific lines, the agent silently expanded scope — running scripts and reading the full file without user approval. Reintroduces explicit guardrails in `mandateConfirm`.

**4. [fix(core): guard message inspectors against empty parts arrays](https://github.com/google-gemini/gemini-cli/pull/28068)**
Fixes a vacuously-true bug where `isFunctionCall()` and `isFunctionResponse()` returned `true` for messages with `parts: []`. Caused misclassification of model responses.

**5. [fix(core): buffer chat compression telemetry until SDK initialized](https://github.com/google-gemini/gemini-cli/pull/28093)**
`logChatCompression()` was emitting telemetry directly instead of via `bufferTelemetryEvent()`, causing premature emission before SDK setup completed.

**6. [fix(a2a-server): deep-merge user and workspace settings](https://github.com/google-gemini/gemini-cli/pull/28094)**
Shallow object spread (`{ ...userSettings, ...workspaceSettings }`) caused workspace settings to silently override entire nested sections (tools, telemetry, fileFiltering, experimental) instead of merging them.

**7. [fix(core): drop leading space from PascalCase markdown table headers](https://github.com/google-gemini/gemini-cli/pull/28049)**
Fixes a cosmetic but user-visible bug: `camelToSpace` left a stray leading space for keys starting with uppercase, e.g., `" User Id"`.

**8. [fix(core): strip only trailing .json from checkpoint names](https://github.com/google-gemini/gemini-cli/pull/28044)**
`name.replace('.json', '')` removed the *first* `.json` rather than the trailing extension, corrupting checkpoint names containing "json" in the filename body.

**9. [fix(mcp): longest-prefix matching for server names with underscores](https://github.com/google-gemini/gemini-cli/pull/28033)**
Fixes #27981: `parseMcpToolName` regex stopped at the first underscore, causing incorrect tool routing when MCP server names contain underscores.

**10. [fix(core-tools): defensive path resolution for @-reference files](https://github.com/google-gemini/gemini-cli/pull/28053)**
Large fix: filesystem tools (`read_file`, `replace`, `write_file`) were failing with "File not found" when the model passed paths prefixed with `@`. Also fixes macOS test failures.

## Feature Request Clusters

**Browser Control & Computer Use**
Multiple issues ([#15956](https://github.com/google-gemini/gemini-cli/issues/15956), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) indicate strong demand for the CLI to control web browsers, either directly or through a subagent. Requests cover persistent sessions, Wayland support, configuration overrides, and automatic lock recovery. This appears to be a major engineering focus.

**AST-Aware Code Understanding**
A pair of issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore using AST-aware tools for file reads, search, and codebase mapping. The motivation is reducing turns from misaligned reads and lowering token noise. Suggested starting points: `tilth` or `glyph` tools.

**Autonomous Agent Behavior & Sub-Agent Usage**
Several issues ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) describe inconsistent sub-agent activation — either not using them enough, or using them without permission. There is also a request for the agent to better understand its own capabilities (CLI flags, hotkeys).

**Sub-Agent Transparency & Debugging**
Issues ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) request that sub-agent trajectories be visible via `/chat share` and included in bug reports, enabling better debugging and evaluation of agent behavior.

## Developer Pain Points

1. **Agent hangs and hanging shell commands** — Multiple P1 bugs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) describe the CLI getting stuck indefinitely after simple commands or agent delegation. This is the most frequent severe UX issue.

2. **Silent failures and misreported success** — Bug [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) reveals that subagents can report "success" despite hitting turn limits. The `get-shit-done` output hook crash ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)) also produces no error context. Erodes trust in agent output.

3. **Sub-agent permission and reliability issues** — Agents running without permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) suggest sub-agent orchestration is fragile.

4. **Problematic shell behavior** — Destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), temp scripts in random locations ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and interactive prompt stalling ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) show the agent lacks guardrails for dangerous or messy shell operations.

5. **Memory system inefficiencies** — Auto Memory retrying low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), silent skip of invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and pre-redaction secret exposure ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) indicate the memory persistence layer needs significant hardening.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-06-28

### Today’s Update Brief
No new releases landed in the last 24 hours. Activity focused on 15 open issues and 3 pull requests, with several regressions reported for v1.0.65/v1.0.66 on Windows and macOS. Community engagement remains high around alt‑screen behavior and authentication on Linux.

### Releases
*No new versions were published in the last 24 hours.*

### Hot Issues (10 noteworthy)

1. **[#1799 – How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)**
   *Labels: area:configuration, area:terminal-rendering*
   User requests a way to revert to the original terminal mode after the recent alt-screen introduction. 10 comments, 7 👍.
   *Impact: Usability regression for terminal‑power users.*

2. **[#2165 – Ubuntu keychain support is broken](https://github.com/github/copilot-cli/issues/2165)**
   *Labels: area:platform-linux, area:authentication*
   Documentation points to an incorrect `secret-tool` fix; the workaround `sudo apt install ...` is incomplete. 2 comments, 20 👍.
   *Impact: Linux users unable to persist auth tokens.*

3. **[#3949 – Copy on Windows 11 does not work](https://github.com/github/copilot-cli/issues/3949)**
   *Labels: area:input-keyboard, area:platform-windows*
   Copilot claims content is on the clipboard, but nothing is actually copied. 2 comments.
   *Impact: Broken copy‑to‑clipboard workflow on Windows.*

4. **[#3958 – Windows: v1.0.66 fails to start stdio MCP servers with .bat/.cmd args](https://github.com/github/copilot-cli/issues/3958)**
   *Labels: triage*
   Regression from v1.0.65: child process dies with syntax error when `command` is a batch file with arguments. 1 comment.
   *Impact: Blocks MCP server usage on Windows for many common setups.*

5. **[#3962 – Latest copilot (1.0.65) not working](https://github.com/github/copilot-cli/issues/3962)**
   *Labels: triage*
   User reports the CLI hangs after startup banner; no further processing. 1 comment.
   *Impact: Complete failure for this user after update.*

6. **[#3874 – VS Code agent `preToolUse` hook denial does not work](https://github.com/github/copilot-cli/issues/3874)**
   *Labels: area:permissions, area:plugins*
   Even with a hook that denies all commands, the agent still executes tools. 1 comment.
   *Impact: Security hooks for plugin control ineffective.*

7. **[#3959 – Visual artifacts / ghost characters remain after deleting text](https://github.com/github/copilot-cli/issues/3959)**
   *Labels: triage*
   Terminal TUI fails to redraw correctly when backspacing; leftover characters persist. 0 comments.
   *Impact: Visual distraction and potential input errors.*

8. **[#3957 – Unable to scroll through history using trackpad on MBP](https://github.com/github/copilot-cli/issues/3957)**
   *Labels: triage*
   Trackpad scroll selects previous prompts instead of scrolling the message list. 0 comments.
   *Impact: macOS users lose natural scrolling behavior.*

9. **[#3672 – Ability to customize keyboard shortcut for `/voice` dictation toggle](https://github.com/github/copilot-cli/issues/3672)**
   *Labels: area:input-keyboard, area:configuration*
   Voice dictation is praised but the lack of configurable shortcut hinders workflow. 0 comments.
   *Impact: Usability request for power users.*

10. **[#3955 – Drag and drop of files no longer works in Copilot app (macOS regression)](https://github.com/github/copilot-cli/issues/3955)**
    *Labels: triage*
    Dropping a file from Finder prints nothing in the prompt; no attachment chip appears. 0 comments.
    *Impact: Common file‑attachment workflow broken on macOS.*

### Key PR Progress

*Only 3 PRs were updated in the last 24 hours. Highlights below.*

- **[#3928 – Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928)**
  Open. Author: @tpsaint. Aims to provide default `.gitignore` and settings files for Copilot CLI projects. No maintainer comments yet.

- **[#570 – [WIP] Add macOS installation instructions to README.md](https://github.com/github/copilot-cli/pull/570)**
  Closed. Author: @Copilot (automated). This long‑standing draft was updated but remains closed; no merge activity.

- **[#3737 – Jigg empire ai](https://github.com/github/copilot-cli/pull/3737)**
  Open. Author: @j2030aiNotez. Low‑quality/spam PR (“Let’s try this new method”). No meaningful changes.

### Feature Request Clusters

- **Alt‑screen / terminal mode preferences** (#1799) – Multiple users want to disable the new alt‑screen view and restore the original inline output.
- **Authentication & keychain fixes** (#2165) – Linux users need robust keychain support beyond `secret-tool`.
- **Custom keyboard shortcuts** (#3672) – Requests for configurable hotkeys, especially for voice dictation and other frequent actions.
- **Session retention visibility** (#3963) – Users want to know how long a session lasts and see expiration info in the status line.
- **Context‑aware / persistent agent memory** (#2778) – Interest in a `/btw`‑like command (from Claude Code) that queries agent context without corrupting the session.

### Developer Pain Points

- **Windows regressions** – Copy‑to‑clipboard (#3949) and MCP server startup (#3958) both broke in recent versions, affecting core Windows workflows.
- **macOS GUI/input regressions** – Trackpad scrolling (#3957) and drag‑and‑drop file attachment (#3955) stopped working in v1.0.65.
- **Terminal rendering bugs** – Alt‑screen toggle not optional (#1799) and ghost characters on deletion (#3959) degrade the CLI experience.
- **Plugin security bypass** – `preToolUse` hooks are ignored (#3874), undermining permission‑based agent control.

*All links point to the respective GitHub issue or PR.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-06-28

## 1. Today's Update Brief
Activity remained high with 50 issues and 50 PRs updated in the last 24h. No new releases were published. Merged PRs include session renaming (end‑to‑end), undo/redo/revert for V2 sessions, and a fix for non‑reducing compaction. Notable open issues highlight persistent WSL path confusion, ARM64 TUI crashes, memory leaks in long‑running server mode, and inconsistent skill exposure to models.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (10 selected)

1. **#23153 – Pay with crypto**
   [Issue](https://github.com/anomalyco/opencode/issues/23153)
   Feature request to support crypto payments for OpenCode Go. **13 comments, 👍24** – strong community interest.

2. **#13877 – TUI `/sessions` picker only shows recent sessions**
   [Issue](https://github.com/anomalyco/opencode/issues/13877)
   Sessions older than ~4 months are hidden from the picker, making session management difficult for long‑term users.

3. **#19473 – Desktop App sends UNC paths to WSL‑hosted server, breaking bash tools**
   [Issue](https://github.com/anomalyco/opencode/issues/19473)
   Windows UNC paths (`\\wsl.localhost\...`) are stored instead of POSIX paths, causing all bash tool calls to fail. **Workaround provided** but root cause not fixed.

4. **#12219 – Insufficient credits for tokens (OpenRouter)**
   [Issue](https://github.com/anomalyco/opencode/issues/12219)
   Error when using Kimi 2.5 Free model – user has 0 credits but model requests 32000 tokens. Impacts users on free/limited tiers.

5. **#19130 – Windows ARM64 native: TUI fails with bun:ffi dlopen TinyCC error**
   [Issue](https://github.com/anomalyco/opencode/issues/19130)
   Non‑interactive commands work, but TUI initialization crashes on Windows 11 ARM64. Affects ARM64 adopters.

6. **#33890 – Bun 1.3.14 segfault (SIGILL) on Linux x86_64**
   [Issue](https://github.com/anomalyco/opencode/issues/33890)
   Crash after short runtime on AMD EPYC with AVX‑512 support. Likely a Bun/compatibility issue.

7. **#30895 – Desktop v1.16.0 converts WSL `/mnt/c/...` to Windows C:\ path**
   [Issue](https://github.com/anomalyco/opencode/issues/30895)
   After opening a project, the path is rewritten to Windows style, breaking file/session lists. Similar to #19473.

8. **#33213 – Server mode accumulates anonymous JS heap; 26.8 GiB cgroup peak**
   [Issue](https://github.com/anomalyco/opencode/issues/33213)
   Long‑running `opencode serve` grows to 26.8 GiB memory + 2.86 GiB swap. Service restart drops usage. Serious stability concern for production deployments.

9. **#34228 – Project skills exposed inconsistently between sessions**
   [Issue](https://github.com/anomalyco/opencode/issues/34228)
   With 35 skills configured, only an unstable subset is passed to the model – varies per session. Breaks skill‑dependent workflows.

10. **#31125 – TUI sessions dialog can stay empty if opened before session list loads**
    [Issue](https://github.com/anomalyco/opencode/issues/31125)
    Async loading race condition – dialog shows “No results found” permanently if opened too early. **Closed** but worth noting as a UX regression.

## 4. Key PR Progress (10 selected)

1. **#34267 – Fix LLM system message collapse when plugin appends single entry**
   [PR](https://github.com/anomalyco/opencode/pull/34267)
   Bug fix: collapse logic incorrectly required `system.length > 2` instead of `> 1`. Closes #34243.

2. **#29881 – Add wl-paste text read for Wayland systems**
   [PR](https://github.com/anomalyco/opencode/pull/29881)
   Fixes paste (Ctrl+V) on Wayland without xsel/xclip. Open – pending merge.

3. **#34264 – Session rename end‑to‑end (merged)**
   [PR](https://github.com/anomalyco/opencode/pull/34264)
   Adds `Renamed` event, `POST /api/session/:id/rename` endpoint, and TUI integration. **Closed/merged** – answer to #25848.

4. **#34263 – Undo/redo/revert for V2 sessions (merged)**
   [PR](https://github.com/anomalyco/opencode/pull/34263)
   Wires staged revert API into TUI with busy‑guards. **Closed/merged.**

5. **#34261 – Guard non‑reducing compaction**
   [PR](https://github.com/anomalyco/opencode/pull/34261)
   Stops overflow recovery when compaction makes no progress. Fixes #27924.

6. **#34256 – Reject foreign directory hints before instance lookup**
   [PR](https://github.com/anomalyco/opencode/pull/34256)
   Prevents path confusion when multiple OpenCode instances are connected – targets WSL path issues (#30895, #19473).

7. **#34233 – WSL UI v2**
   [PR](https://github.com/anomalyco/opencode/pull/34233)
   New WSL UI with loading states and a `loader-v2` component. Open – feature.

8. **#34234 – Preserve attachment file paths**
   [PR](https://github.com/anomalyco/opencode/pull/34234)
   Pasted/dragged files retain filesystem paths so agents can access them directly. Closes #23801, #17488.

9. **#34242 – Prevent piped stdin from breaking TUI**
   [PR](https://github.com/anomalyco/opencode/pull/34242)
   Fixes UI corruption and keyboard input when stdin is piped. Closes multiple issues (#28538, #24195, #3871, #6220).

10. **#34227 – Account for partial Zen refunds**
    [PR](https://github.com/anomalyco/opencode/pull/34227)
    Stripe webhook now deducts actual refunded amount instead of full top‑up. Guards against double‑deduction on retries.

## 5. Feature Request Clusters

- **Session management**
  Multiple issues ask for session renaming (#25848), better session picker (show all sessions, not just recent – #13877), and the TUI sessions dialog race condition (#31125). PR #34264 now delivers renaming.

- **Payment & billing**
  #23153 requests crypto support for OpenCode Go. Also #34227 (partial refunds) and #12219 (credit limits) indicate billing friction.

- **Platform support**
  Requests for Windows ARM64 native TUI (#19130), Wayland clipboard (#29881), and proper WSL path handling (#19473, #30895) show demand for broader OS compatibility.

- **Model integration**
  Users want third‑party models in GitHub Copilot (#34030), updated NVIDIA NIM model lists (#34177), and better handling of model‑specific quirks (GLM‑5.2 image input bug #34113, minimax‑m3 chain‑of‑thought #34247).

## 6. Developer Pain Points

- **WSL/Windows path confusion** (#19473, #30895, #34256) – consistent theme: Desktop app translates paths incorrectly when connecting to a WSL server, breaking all file operations. Two open issues and a related PR show this is a top stability concern.

- **Memory and performance degradation**
  Server mode heap growth to 26 GiB (#33213), high CPU/memory in long sessions (#34226), and TUI freezes (#34214) – multiple reports of resource exhaustion without clear root cause.

- **Model‑specific failures**
  GLM‑5.1 prompt cache drops (#31348), GLM‑5.2 broken by image input (#34113), Gemini schema errors (#34130), Nemotron hangs (#34026), subagent fallback loop (#34043) – model compatibility is a recurring headache.

- **ARM64 crashes**
  Windows ARM64 TUI crash (#19130) and Linux/ARM64 SIGTRAP in web‑tree‑sitter (#34054) – two distinct crashes on the same architecture, limiting adoption.

- **Inconsistent skill exposure** (#34228) – project skills are unpredictably subsetted per session, undermining reliability of skill‑based automation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-28

## Today's Update Brief

Yesterday was a high-activity day across the Qwen Code repository, with one nightly release, 27 issues updated, and 50 pull requests in motion. The community is heavily focused on **session & memory persistence**, **daemon/serve mode feature completion**, and **cron/background automation usability**. Several high-comment-count issue discussions around multi-device sync and background task visibility suggest these are becoming key community pain points.

---

## Releases

**v0.19.2-nightly.20260627.d93bec905** — Small nightly release with one fix:
- `fix(core): allow web_fetch JSON fallback` — improves resilience when web_fetch responses are not valid JSON.

[View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905)

*Note: The full v0.19.2 release was also in progress (chore PR by `qwen-code-ci-bot`), but no stable tag is yet present in today's data.*

---

## Hot Issues (10 Selected)

#### 1. Session management — `/rewind` breaks conversation history on resume
- **#5920** ([CLOSED](https://github.com/QwenLM/qwen-code/issues/5920)): After resuming a session, all turns except the latest round are missing from the history bar. Root cause: `parentUuid` stored as `null` in `~/.qwen/projects/*` session files for `/rewind` turns.
- **Affected workflow**: Anyone resuming a long session after interruptions; history/context loss forces rework.
- **Community response**: 3 comments, fast closure — likely a hotfix in progress.

#### 2. Cross-device sync for todos, plans, memories
- **#5836** ([OPEN](https://github.com/QwenLM/qwen-code/issues/5836)): Currently todos/plans/memories reside under `~/.qwen/` (not under Git). User requests an option to persist them inside the project (`.qwen/todos` or `docs/todos`) for cross-device and multi-user sharing.
- **Affected workflow**: Developers working across multiple machines or in teams lose project state.
- **Community response**: 4 comments, trending — several users want shared project memory.

#### 3. `/loop` cron tasks fire with no visibility
- **#5823** ([OPEN](https://github.com/QwenLM/qwen-code/issues/5823)): The model's cron-powered `/loop` tasks run silently in the background; the model itself cannot list, inspect, or stop its own scheduled tasks. User reported surprise at a cron task still firing days later across fresh chat sessions.
- **Affected workflow**: Background automation users — no way to audit or manage scheduled work.
- **Community response**: 4 comments, `autofix/skip` tag suggests maintainers acknowledged complexity.

#### 4. Proposal: Revive Chrome Extension via daemon + WebUI
- **#5626** ([OPEN](https://github.com/QwenLM/qwen-code/issues/5626)): A detailed proposal to revive the Chrome Extension (original build #1432) using the new `qwen serve` daemon as backend, eliminating the Native Messaging host stack. Includes a PR in progress (#5777).
- **Affected workflow**: Browser-based coding assistance.
- **Community response**: 3 comments, linked to the ongoing PR — active development.

#### 5. Add `/model --vision` for fallback vision model
- **#5597** ([CLOSED](https://github.com/QwenLM/qwen-code/issues/5597)): Request to let users specify a secondary vision-capable model. When the primary model lacks vision support (e.g., Qwen3.7-max), Qwen Code auto-falls back to the vision model for image-based requests.
- **Affected workflow**: Users with text-only primary models who need occasional image understanding.
- **Community response**: Closed, 2 comments — likely implemented or merged into another scope.

#### 6. Telegram bot command support tracking
- **#5907** ([OPEN](https://github.com/QwenLM/qwen-code/issues/5907)): Tracking issue for completing Telegram bot command support — aligning bot menu commands with CLI/AI capabilities, enabling reliable remote chat workflows.
- **Affected workflow**: Telegram users of the `qwen serve` daemon.
- **Community response**: 3 comments, tracking ongoing work.

#### 7. cua-driver.exe high CPU usage when idle
- **#5922** ([CLOSED](https://github.com/QwenLM/qwen-code/issues/5922)): On Windows, `cua-driver.exe` (spawned for computer-use tools) continues consuming CPU even after agent tasks complete and Qwen Code is idle. User flagged as virus-like behavior.
- **Affected workflow**: Windows users of computer-use tools — degraded system performance.
- **Community response**: 3 comments, closed quickly suggesting a fix or known limitation.

#### 8. Add `.qwen/loop.md` task file for `/loop`
- **#5889** ([OPEN](https://github.com/QwenLM/qwen-code/issues/5889)): Proposal to add a durable, user-editable `.qwen/loop.md` file that the `/loop` command reads at each fire time, so users can edit loop tasks mid-run without restarting.
- **Affected workflow**: Long-running /loop users who need persistent, editable instructions.
- **Community response**: 3 comments, friendly discussion on implementation details.

#### 9. Track ACP gaps for cd, permissions, trust, lsp, setup-github
- **#5677** ([CLOSED](https://github.com/QwenLM/qwen-code/issues/5677)): A tracking issue for completing ACP (Agent Communication Protocol) support for `serve` mode — tracked `/cd`, `/permissions`, `/trust`, `/lsp`, and `setup-github`. Most are now marked as done with linked PRs.
- **Affected workflow**: Developers using `qwen serve` with ACP-compatible clients.
- **Community response**: 3 comments, structured progress tracking (checklist format).

#### 10. Scroll-to-top bug during model generation
- **#5941** ([OPEN](https://github.com/QwenLM/qwen-code/issues/5941)): On Windows, when the model is generating output, scrolling up even slightly jumps directly to the top of the conversation, rather than scrolling incrementally.
- **Affected workflow**: All users on Windows — disrupts reading ongoing responses.
- **Community response**: 2 comments; user reported version 0.19.2, win32 x64.

---

## Key PR Progress (10 Selected)

#### 1. Multiplayer channel-resident agent — "qwen tag"
- **#5888** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5888)): RFC + Phase 0 introducing a channel-resident, multiplayer agent that lives in chat groups (DingTalk-first). Built on existing channel adapters and `qwen serve` daemon. No new service — plugins into existing infra.
- **Significance**: Major architectural step — shifts Qwen Code from one-on-one to group/team collaboration.

#### 2. Error boundaries for web-shell
- **#5943** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5943)): Adds three layers of React error boundaries: generic reusable `ErrorBoundary`, message-level boundary per `MessageItem`, and top-level fallback. Prevents render crashes from white-screening the entire web shell.
- **Significance**: Stability improvement for the web embed.

#### 3. Voice dictation in desktop app
- **#5856** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5856)): Brings `/voice` dictation to the desktop app (matching CLI and Web Shell). Microphone button in composer with waveform, timer, stop/send controls.
- **Significance**: Unifies voice input across all client surfaces.

#### 4. Resume interrupted turn without synthetic "continue" message
- **#5030** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5030)): Adds first-class SDK/stream-json API for continuing an unfinished assistant turn after resume, crash, or mid-stream interruption — no more fake `"continue"` user message.
- **Significance**: Clean user experience for session recovery; still open after ~2 weeks.

#### 5. Chrome extension revival via daemon-direct architecture
- **#5777** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5777)): Revives browser extension as a thin client of local `qwen serve` daemon (instead of Native Messaging). Connects via HTTP+SSE using `@qwen/sdk`.
- **Significance**: Reopens browser integration path; tightly linked to #5626 and #5936.

#### 6. Normalize source slug validation errors
- **#5911** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5911)): Follow-up from #5829 CWE-22 fix — makes `config_validate` return structured results instead of uncaught generic failures for invalid/legacy slug paths.
- **Significance**: Security hardening for remaining path-traversal vectors.

#### 7. Loop guard for repeated shell inspection variants
- **#5944** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5944)): When the model repeatedly calls read-only shell commands like `git status` / `git diff` in a loop, Qwen Code now halts the run to prevent tool-use loops.
- **Significance**: Prevents runaway token waste and indefinite loops.

#### 8. Register Telegram bot command menu
- **#5919** ([CLOSED](https://github.com/QwenLM/qwen-code/pull/5919)): Registers CLI Telegram bot commands with Telegram's `setMyCommands` API, adds `/start` response and shared `/cancel` command for channel adapters.
- **Significance**: Improves Telegram user experience — menu now shows only supported commands.

#### 9. Support `/cd` command in ACP sessions
- **#5903** ([CLOSED](https://github.com/QwenLM/qwen-code/pull/5903)): Adds server-side `/cd` for ACP sessions — validates target directory, checks trust/sandbox, updates logical working directory.
- **Significance**: Completes ACP command alignment for serve mode.

#### 10. Reject non-positive sessionRecapAwayThresholdMinutes
- **#5945** ([OPEN](https://github.com/QwenLM/qwen-code/pull/5945)): Enforces `minimum: 1` on the session recap away-threshold setting, rejecting zero/negative values that would cause undefined behavior.
- **Significance**: Configuration hardening — prevents silent misconfiguration.

---

## Feature Request Clusters

### 1. Session & Memory Persistence (Cross-device & Team)
Multiple issues address the same underlying need: **project-related data (todos, plans, memories, loop tasks) should be shareable across devices and among team members**. Key examples:
- #5836 — persist todos/plans/memories under Git control
- #5867 — add git-shared "team" tier to auto-memory
- #5889 — persistent `.qwen/loop.md` task file

**Observation**: Three distinct feature requests converging on the same theme — the local-only storage model is reaching its limits as usage patterns move toward multi-device and team collaboration.

### 2. Daemon/Serve Mode & Multi-Channel Integration
A second cluster revolves around completing the `qwen serve` daemon as a universal backend:
- #5626 — Chrome extension via daemon + WebUI (with PR #5777)
- #5907 — Telegram bot command completion
- #5888 — Multiplayer channel-resident agent ("qwen tag")
- #5677 — ACP command gap tracking (mostly closed)
- #5936 — Research: Claude Chrome extension architecture for Qwen Code direction

**Observation**: The daemon architecture is actively being extended to support both browser and messaging channels, with Chrome extension and multiplayer agent being the most advanced efforts.

### 3. Max_tokens & Timeout Configuration
A third cluster addresses **control over model output limits and agent timeouts**:
- #5838 — Allow user-adjustable agent-initiated command timeout
- #5756 — Default 8K output cap truncates large outputs / write_file
- #5939 — Skip no-op max_tokens escalation for high-output models
- #5942 — Anthropic provider: prompt-cache misses inflate cost

**Observation**: Community frustration with default-too-low output limits and lack of configurable timeouts. Maintainer response in #5934 (changing default max_tokens from 8K to model's limit) appears in a related PR, suggesting ongoing work.

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|---|---|---|
| **Output truncation / write_file loops** — Default 8K cap causes repeated failed writes and retry loops | 2 issues (#5756, #5939) | High — wasted tokens, failed workflows |
| **Session history breaks on resume** — `/rewind` records with null parentUuid lose context | 1 issue (#5920) | High — forces users to re-explore |
| **Cross-device synchronization not possible** — todos/plans/memories are local-only | 3 issues (#5836, #5867, #5889) | Medium — growing pain for power users |
| **cua-driver.exe resource leak** — High CPU usage persists when idle on Windows | 1 issue (#5922) | Medium — performance degradation |
| **Scroll-to-top on output** — Windows users cannot scroll incrementally during generation | 1 issue (#5941) | Low-Medium — disrupts UX |
| **Repeated MCP schema format warnings** — `unknown format "uint64"` pollutes startup output | 1 issue (#5897) | Low — cosmetic but annoying |
| **Edit tool result summary sticks to every response** — "File changed" diff persistently re-appended | 1 issue (#5894) | Medium — visual clutter across turns |

The most frequently recurring frustration remains **the 8K default max_tokens cap**, which repeatedly triggers failed retry loops and wasted model costs — a theme that spans at least three issues/PRs in today's data alone.

</details>