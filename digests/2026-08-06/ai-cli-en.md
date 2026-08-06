# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 01:45 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-06

## 1. Daily Cross-Tool Overview

Today saw concurrent releases across all four tracked tools: Claude Code v2.1.223, OpenAI Codex (rust‑v0.146.1 plus five alpha snapshots), Kimi Code v0.33.0, and OpenCode v1.18.14. Issue tracker activity was similar in volume (approximately 50 updates each), with Claude Code, Codex, and OpenCode reporting ~50 issues updated in the last 24 hours, while Kimi Code noted a “significant spike” without a precise count. Pull request activity was highest in Codex (43 total PRs, mostly automated merges), while the other three each highlighted 10 key PRs in their digests. Maintainer response patterns varied: Codex had several triaged threads and active PR merges, OpenCode had multiple merged PRs, whereas Claude Code and Kimi Code showed fewer maintainer resolutions on hot issues.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | Noteworthy PRs | Release Status |
|------|----------------------|----------------|----------------|
| Claude Code | ~50 | 10 key PRs listed | v2.1.223 (patch) |
| OpenAI Codex | ~50 | 43 total (mostly bot merges) | rust‑v0.146.1 + 5 alpha |
| Kimi Code | Not specified (~10 hot, likely 50+) | 10 key PRs | v0.33.0 (minor) |
| OpenCode | ~50 | 10 key PRs | v1.18.14 (patch) |

*Note: Kimi Code digest did not provide an overall issue update count; the “hot issues” list includes 10 items, but the text indicates a broader spike.*

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

- **Session and transcript portability** – Claude Code (#81946, #66504) wants project-relative, shareable transcripts. OpenCode added session export as JSON (PR #40781) and has a cross-project session picker request (#31932). Kimi Code users want session resume from any working directory (#2637). All three indicate a growing need for decoupling session data from a single machine or project root.

- **MCP (Model Context Protocol) reliability** – Every tool had at least two MCP-related issues or PRs today: Claude Code (self-signed certificate workaround PR #84138), Codex (zombie processes #12491, tools not exposed #19425, macOS auth failure #34684), Kimi Code (stale OAuth registration #2606, schema parsing with Notion #2661), OpenCode (OAuth race condition fix #40768, re-login dynamic client fix #40769). MCP integration remains a cross-tool pain point, particularly around authentication, process lifecycle, and schema compatibility.

- **Safety filter false positives** – Claude Code users report automatic downgrade from Opus 5 to Opus 4.8 during legitimate security testing (#84361, #84353, #84340). Codex users report cybersecurity safety filters blocking static analysis and fuzz testing (#37161). Both communities request clearer flagging criteria and an appeal mechanism.

- **Billing and usage transparency** – Claude Code has multiple issues about phantom consumption and incorrect model attribution (#82506, #84360, #84358, #84359). OpenCode has a feature request for a public usage API (#16017) and a request for crypto payment (#23153). Users in both communities want programmatic access to metering data.

- **Computer-use / automation capabilities** – Kimi Code made Computer Use a built-in plugin (v0.33.0) and merged Windows support (PR #2652). OpenCode has a new feature request for computer and browser automation (#40782). This suggests a nascent interest in extending CLI tools beyond code editing into autonomous desktop interaction.

## 4. Differentiation Analysis

- **Claude Code** – Focuses on enterprise governance (marketplace wildcards, managed settings, org-level allow/block). The most heated topics today are billing accuracy and safety flagging, indicating a user base that is sensitive to cost attribution and compliance. The tool also has a strong session/transcript management theme, with users requesting project-portable histories.

- **OpenAI Codex** – The most release-heavy tool today (six alpha/patch releases). Emphasis is on MCP hardening, cyber-model safety defaults, and Windows stability. The top feature request (undo at 373 👍) is a clear signal that users value reliable rollback over new capabilities. The large number of automated PR merges suggests a mature CI pipeline and fast iteration cadence.

- **Kimi Code** – Stands out for its attention to agent reliability at high context windows (~500K tokens, #2622) – a unique concern not seen in the other digests. The community is also heavily invested in TUI/Web UI quality (terminal scroll bugs, ghost sub-agents, color rendering). The addition of Computer Use as a built-in plugin and the Windows support PR indicate a platform expansion strategy.

- **OpenCode** – The most community-driven feature request list, with prominent demands for a VS Code extension (#11176, 134 👍), crypto payments, and cross-project session management. The V2 Workspaces PR (#40784) shows a shift toward remote sandboxed execution environments, differentiating from the purely local approach of the other tools. Local LAN provider discovery (PR #27554) also targets users running local LLMs.

## 5. Community Activity Notes

- **Highest issue count** – Claude Code, Codex, and OpenCode each reported ~50 issues updated, with Kimi Code not specifying a number but noting a spike. By raw count, all four are roughly comparable.

- **Highest PR activity** – Codex leads with 43 total PRs (mostly automated merges from bots). The other three highlighted 10 key PRs each, but total PR counts are likely lower.

- **Release velocity** – Codex released the most versions (6), followed by Claude Code and OpenCode (1 each), and Kimi Code (1). All are shipping regularly.

- **Maintainer responsiveness** – OpenCode had several PRs merged today (e.g., Computer Use on Windows, session export, V2 Workspaces, MCP race fixes). Codex also had active merges (e.g., #37191, #37190, #37189). Claude Code showed PR updates but no new merges in today’s digest. Kimi Code had one merged PR (#2652) and several open ones; maintainer responses on hot issues were absent (e.g., #2622 has no official reply).

- **User engagement on issues** – The most popular open feature request across all tools is Codex’s `/undo` (#9203, 373 👍), followed by OpenCode’s VS Code extension (#11176, 134 👍) and Claude Code’s session URL opt-out (#66504, 46 👍). High-reaction issues in Kimi Code are lower (max 8 👍 on hot issues), but the community is actively filing detailed bug reports.

## 6. Evidence-Backed Observations

1. **MCP integration is a persistent cross-tool stability challenge.** Every tool reported at least two MCP-related bugs or fixes today. Common failure modes include OAuth credential lifecycle, process reaping, schema parsing, and platform-specific authentication. This is a shared infrastructure pain point that affects all tools targeting the MCP ecosystem.

2. **Session portability is a growing demand across three tools.** Claude Code, OpenCode, and Kimi Code all have open issues or PRs today that decouple session storage from a single working directory or machine. Users want to resume sessions from different directories, share transcripts with teammates, and export session data. This is a clear signal of evolving usage patterns toward multi-repo, multi-machine, and team workflows.

3. **Safety filter false positives are a concern for Claude Code and Codex.** Both communities report legitimate security testing and research tasks being blocked or causing automatic model downgrades. The lack of transparent flagging criteria and an appeal process is a cited frustration. No similar reports appear in Kimi Code or OpenCode today.

4. **Billing and usage metering complaints are concentrated in Claude Code and, to a lesser extent, OpenCode.** Multiple Claude Code issues today describe phantom consumption, incorrect model attribution, and unauthorized plan changes. OpenCode users are requesting a public usage API and alternative payment methods. Codex and Kimi Code digests do not contain similar billing-related threads.

5. **Windows stability remains a distinctive pain point for Codex.** Codex has multiple high-severity Windows-specific bugs today (GPU process crashes, Sysmon driver BSOD, WMI storms). Kimi Code added Windows support for Computer Use today, but no Windows-specific bugs are reported. Claude Code and OpenCode have no Windows-related issues in today’s digest. This suggests Codex has a larger Windows user base or broader platform testing exposure.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-06

## Today's Update Brief

A new patch release (v2.1.223) shipped with marketplace wildcard support and agent lifecycle warnings. Bug activity is elevated: 50 issues updated in the last 24 hours, with several threads exceeding 10 comments each. Billing/usage accounting bugs and false-positive safety flags are the most heated topics today.

## Releases

**v2.1.223** — released 2026-08-06
[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)

- Added owner wildcard entries (`"owner/*"`) to `strictKnownMarketplaces` and `blockedMarketplaces` managed settings, enabling org-level allow/block of marketplace repos
- Added warning when workflow agents, forked skills, slash commands, or resumed background agents are triggered

## Hot Issues

**1. [BUG] Session limit consumed without using** — [#82506](https://github.com/anthropics/claude-code/issues/82506)
*17 comments, 7 👍*
User reports Claude Max usage quota being consumed when no active session is running. Heavy discussion about metering accuracy. Multiple users corroborating similar phantom consumption. No maintainer resolution yet.

**2. [FEATURE] Session URL appended to commit messages by default — should be opt-in** — [#66504](https://github.com/anthropics/claude-code/issues/66504)
*12 comments, 46 👍*
Every commit message and PR description includes a Claude Code session URL without user consent. The community strongly wants this opt-in. Highest-reacted open issue today.

**3. [BUG] Cowork Desktop (macOS): AskUserQuestion card never renders** — [#58750](https://github.com/anthropics/claude-code/issues/58750)
*11 comments, 5 👍*
Yellow-dot badge shows pending, but the UI card never appears. On app quit, the request silently resolves as "Dismissed." Blocks Cowork workflows on macOS entirely.

**4. [BUG] Opus 4.8 language is toxic; Opus 5.0 drives incoherence** — [#77136](https://github.com/anthropics/claude-code/issues/77136)
*8 comments, 8 👍*
User reports Opus 4.8 produces unpleasant, aggressive language, while Opus 5.0 suffers from incoherent responses. Community discussion comparing model behavior across versions.

**5. [BUG] Claude Desktop crashes near 5-hour usage limit, then requires full reinstall** — [#83403](https://github.com/anthropics/claude-code/issues/83403)
*7 comments*
Desktop app crashes at ~5-hour mark, then refuses to reopen. Requires full reinstall to recover. No workaround identified.

**6. [BUG] `--continue` cannot find sessions created by `-p`** — [#82536](https://github.com/anthropics/claude-code/issues/82536)
*7 comments*
Interactive resume (`--continue`) fails to locate sessions started via `-p` (prompt mode). Breaks session handoff workflows.

**7. [BUG] Windows GPU process crash (exitCode 101457950) kills the whole app** — [#83744](https://github.com/anthropics/claude-code/issues/83744)
*4 comments*
Claude Desktop 1.24012.11.0 on Windows: GPU process crash terminates the entire application. No mitigation available.

**8. [BUG] "Always allow" Chrome permission never persists** — [#74715](https://github.com/anthropics/claude-code/issues/74715)
*4 comments*
Claude-in-Chrome "Always allow" site permission is always stored as `duration:"once"`. Approved sites list stays empty, causing repeated prompts on every browser action.

**9. [FEATURE] Make session transcripts project-portable while keeping scratch files local** — [#81946](https://github.com/anthropics/claude-code/issues/81946)
*3 comments, 1 👍*
Wants transcripts stored relative to project (shareable), while temp scratch files remain local and keyed by session ID. Addresses team collaboration gaps.

**10. [FEATURE] Allow disabling the left-arrow detach-to-background gesture** — [#84348](https://github.com/anthropics/claude-code/issues/84348)
*1 comment, filed today*
Pressing ← on empty chat input arms a detach gesture that cannot be remapped or disabled. Users want a setting or rebindable keybinding action.

## Key PR Progress

**#41661** — [Add 14 Revolutionary Claude Code Plugins](https://github.com/anthropics/claude-code/pull/41661)
*Open since March, updated today*
Adds 14 plugin directories covering security, performance, architecture, and fullstack automation. Updates marketplace.json to 27 total plugins. Large contribution awaiting review.

**#16929** — [Fix code-review --comment flag for GitHub posting](https://github.com/anthropics/claude-code/pull/16929)
*Open since January, updated today*
Fixes `/code-review` command posting inline comments to GitHub by default. Terminal output is now default; `--comment` flag required for GitHub posting.

**#84138** — [Workaround for self-signed certificate error in Cowork](https://github.com/anthropics/claude-code/pull/84138)
*Filed yesterday*
Fixes SSL certificate issue in Cowork when running under Bun-based runtime. Bun does not load system certificates on macOS, causing "Self-signed certificate detected" errors.

**#84004** — [Fix plugin-dev frontmatter parsing](https://github.com/anthropics/claude-code/pull/84004)
*Filed yesterday*
Fixes `sed`-based frontmatter parser that restarts on every later `---` line. Now parses only the opening YAML block, handling horizontal rules in Markdown bodies correctly.

## Feature Request Clusters

**Session and Transcript Portability**
Multiple requests (e.g., #81946, #66504) ask for transcript storage that is project-relative and team-shareable, with session metadata that doesn't leak local paths. Users want to share session context across machines and team members.

**Usage and Billing Transparency**
Several new issues today (#84360, #84358, #84359, #82506) report phantom usage consumption, incorrect model attribution (Opus 5 usage attributed to Fable 5), and unauthorized Max upgrades. Community frustration is high around opaque metering.

**Model Behavior and Safety Flagging**
Multiple reports (#84361, #84353, #84340) describe false-positive safety flags during legitimate security testing, causing automatic downgrade from Opus 5 to Opus 4.8. Users want clearer flagging criteria and a way to contest automatic downgrades.

## Developer Pain Points

**Billing and Usage Accounting Bugs** — Four issues filed today involve incorrect usage attribution, phantom quota consumption, and unauthorized plan upgrades. The metering system appears to have systemic accuracy problems.

**False-Positive Safety Flags** — Multiple users conducting authorized penetration testing report being silently downgraded to Opus 4.8. The safety flagging lacks transparency and has no appeal mechanism.

**Permission Prompt Loops** — Both the Chrome extension (#74715, #84355) and macOS TCC dialog (#79867) have persistent "always allow" bugs that cause repeated prompts, disrupting workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-06

## Today’s Update Brief
Six alpha releases and a patch release (rust‑v0.146.1) landed in the last 24 hours, addressing a cyber‑model safety default. The issue tracker saw 50 updates, with notable memory‑leak and process‑storm bugs on Windows, and a high‑demand `/undo` feature request nearing 400 👍. The pull request queue was active with 43 items, mostly automated bot merges focusing on MCP handshake hardening, skill‑system refactoring, and rollout migration.

---

## Releases

- **rust‑v0.146.1** — Bug‑fix release backporting safer automatic‑review defaults for cyber‑capable models and explaining permission changes in the terminal interface. ([Full changelog](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1))
- **rust‑v0.147.0‑alpha.6.5, .10, .11, .12, .13** — Five sequential alpha releases of the 0.147 branch. No per‑release changelogs were provided; these are likely continuous integration snapshots.

---

## Hot Issues

**#9203 — [enhancement] Please make `/undo` back**
[Issue](https://github.com/openai/codex/issues/9203)
70 comments · 373 👍
Users report losing untracked file changes or uncommitted modifications when Codex acts unexpectedly. The `/undo` command was removed and is sorely missed. The thread remains open with high community engagement.

**#12491 — [bug] MCP child processes not reaped — 1300+ zombies, 37GB memory leak**
[Issue](https://github.com/openai/codex/issues/12491)
32 comments · 5 👍
Codex.app GUI (v0.98.0) fails to clean up MCP subprocesses after task completion, leading to zombie processes and a massive memory leak. Affects Pro users running o3 via the GUI.

**#33776 — [bug] Windows Desktop spawns hundreds of `taskkill.exe`/`conhost.exe`, causing WMI storms and DWM degradation**
[Issue](https://github.com/openai/codex/issues/33776)
30 comments · 27 👍
A severe Windows‑specific performance regression where the desktop app repeatedly launches process‑killer utilities, saturating WMI and degrading the Desktop Window Manager. High community impact.

**#19425 — [bug] Custom stdio MCP server discovered but tools not exposed to Desktop threads**
[Issue](https://github.com/openai/codex/issues/19425)
29 comments · 5 👍
A regression in Desktop/App Server 0.124.0‑alpha.2: MCP servers that pass `tools/list` are not exposing their tools to thread execution. Developers reliant on custom MCP servers are blocked.

**#23979 — [bug] Local project conversation history missing after update**
[Issue](https://github.com/openai/codex/issues/23979)
26 comments · 5 👍
After an update on macOS, multiple local project histories disappeared from the UI. Underlying data remains in `state_5.sqlite`, but the UI no longer shows them. Users concerned about data loss.

**#31035 — [bug] Windows Codex Desktop reinstalls SysmonDrv v13.22, causing BSODs**
[Issue](https://github.com/openai/codex/issues/31035)
23 comments · 0 👍
Codex Desktop appears to re‑install Sysinternals Sysmon (`SysmonDrv.sys`) on Windows even after forced uninstall, leading to kernel crashes. WinDbg analysis points to SysmonDrv as the crash culprit.

**#37002 — [bug] Unable to install after clicking Update in the Codex app**
[Issue](https://github.com/openai/codex/issues/37002)
20 comments · 1 👍
A fresh blocker: users on macOS 12 cannot install the app after clicking the update button. No error details provided in the dialog.

**#32177 — [bug] Text‑log attachment can trigger “Request blocked” and poison subsequent turns**
[Issue](https://github.com/openai/codex/issues/32177)
14 comments · 16 👍
Attaching a plain‑text log to an established session can cause the model to enter a “Request blocked” state that persists across turns, effectively poisoning the conversation. Affects ChatGPT Team subscribers.

**#34684 — [bug] `codex mcp login` fails on macOS with “No authorization support detected”**
[Issue](https://github.com/openai/codex/issues/34684)
10 comments · 5 👍
The same `codex mcp login` command works on Linux but fails instantly on macOS arm64 against a spec‑compliant OAuth 2.0 server. Developer workflow for MCP authentication is broken on macOS.

**#37161 — [bug] Severe false positives in cybersecurity request filtering**
[Issue](https://github.com/openai/codex/issues/37161)
5 comments · 1 👍
The cybersecurity safety filter blocks legitimate tasks such as static analysis, fuzz testing, and vulnerability detection. Researchers and security engineers report high false‑positive rates.

---

## Key PR Progress

**#37191 — Preserve legacy semantics during rollout migration**
[PR](https://github.com/openai/codex/pull/37191)
Ensures historical rollbacks, compaction checkpoints, and subagent copies are preserved when migrating legacy JSONL rollouts into paginated history – preventing unintended changes to visible conversation threads.

**#37190 — Interrupt cyber model turns after one Guardian denial**
[PR](https://github.com/openai/codex/pull/37190)
Adds a circuit‑breaker policy for models with `cyber` specialty: the model turn is interrupted after the first Guardian denial, while other models retain existing thresholds. Centralizes the safety‑gating logic.

**#37189 — Track multi‑agent usage hints in world state**
[PR](https://github.com/openai/codex/pull/37189)
Stores multi‑agent usage hints in world state so resumed sessions can pick up the correct configuration even if the saved history predates hint tracking.

**#37188 — Reserve the `tool_search` namespace for the search tool**
[PR](https://github.com/openai/codex/pull/37188)
Prevents namespace tools named `tool_search` from colliding with the built‑in search tool. Collisions are recorded for strict handling.

**#37168 — Bound remote MCP handshake HTTP requests**
[PR](https://github.com/openai/codex/pull/37168)
Fixes a scenario where a streamable HTTP MCP handshake could time out while its executor‑backed request continued, blocking the serial executor. Now tracks the remaining initialization deadline.

**#37167 — Expose session sources to MCP contributors**
[PR](https://github.com/openai/codex/pull/37167)
Adds `session_source()` to the MCP contribution context, enabling thread‑scoped MCP resolution and correct propagation through initial setup, per‑step resolution, and runtime refreshes.

**#37166 — Keep textarea cursors and rendering inside the viewport**
[PR](https://github.com/openai/codex/pull/37166)
Reserves a continuation row for the insertion point when a logical line exactly fills the textarea width, preventing cursor and rendering overflow.

**#37157 — Harden named session lookup in the TUI**
[PR](https://github.com/openai/codex/pull/37157)
Shares exact‑name candidate lookup between resume and archive commands, preferring valid SQLite names and recovering legacy index names without overwriting newer metadata.

**#37151 — Coalesce concurrent Git status scans**
[PR](https://github.com/openai/codex/pull/37151)
Shares an in‑flight `git status --porcelain` invocation among concurrent workspace metadata requests for the same repository root, reducing redundant I/O.

**#37149 — Project orchestrator skills through world state**
[PR](https://github.com/openai/codex/pull/37149)
Moves the orchestrator skill catalog from thread context into its own `orchestrator_skills` world‑state section, keeping unchanged catalogs incremental across turns.

---

## Feature Request Clusters

- **Undo / rollback for file operations** — The most popular request (#9203, 373 👍) asks for a `/undo` command to revert accidental file deletions or modifications. Several related comments mention missing undo in the TUI and CLI.
- **Per‑thread model and reasoning effort control** — Issue #34278 requests a per‑thread “Auto” mode that routes both model selection and reasoning effort. The thread includes maintainer triage notes and independent reproductions on macOS/Windows.
- **Accessibility improvements** — Issue #34211 highlights screen‑reader (JAWS) failures: chat names not read, new messages not treated as headings. VoiceOver and NVDA users also reported issues on the same thread.

---

## Developer Pain Points

- **Windows stability and performance** — Multiple high‑severity bugs (#33776, #31035, #35352, #35635, #35737) point to recurring issues with GPU process crashes, SwiftShader library blocks, Sysmon driver installations, and MSIX package corruption. Windows developers face frequent crashes and degraded performance.
- **MCP integration fragility** — Issues #12491 (zombie processes), #19425 (tools not exposed), #34684 (macOS auth failure), and #32101 (tool_search omitted) indicate that MCP server lifecycle and tool exposure remain inconsistent across platforms and app versions.
- **Session and context poisoning** — Bugs #32177 (text‑log attachment blocks request), #32533 (reasoning effort change strands session), and #33493 (unbounded image payloads cause repeated compaction) show that session state can be easily corrupted or stuck, requiring manual compaction or restart.
- **Safety filter over‑blocking** — Issue #37161 adds to a pattern of false positives in cybersecurity filtering, affecting legitimate research and development tasks.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

Here is the Kimi Code community digest for 2026-08-06.

---

## Kimi Code Community Digest — 2026-08-06

### 1. Today's Update Brief

The community saw a significant spike in activity, with a new minor release (v0.33.0) introducing Kimi Computer Use and WebBridge as built-in official market plugins. However, the bulk of the discussion centered on critical bugs related to agent reliability at high context windows, MCP integration issues, and various TUI/Web UI glitches, alongside a new hiring announcement from the core team.

### 2. Releases

**New Version: v0.33.0**
- **Change:** Added Kimi Computer Use and Kimi WebBridge as built-in official market plugins. ([PR #2407](https://github.com/MoonshotAI/kimi-code/pull/2407))

### 3. Hot Issues

1.  **Agent reliability degrades at high context fill (~500K tokens)** ([#2622](https://github.com/MoonshotAI/kimi-code/issues/2622))
    - **Workflow:** Long-running, multi-step agentic sessions.
    - **Impact:** At ~500K tokens, the agent enters repetitive action loops, fails to escalate on errors, and drifts from the original instruction. This is a critical blocker for users attempting complex, long-form code generation.
    - **Community:** 5 comments with detailed analysis of the behavior, but no official maintainer response yet.

2.  **Terminal jumps to top during generation** ([#1487](https://github.com/MoonshotAI/kimi-code/issues/1487)) & **Windows-specific scroll bar jump** ([#2167](https://github.com/MoonshotAI/kimi-code/issues/2167))
    - **Workflow:** TUI interaction during active code generation.
    - **Impact:** Users are forced to manually scroll back down every time the agent generates output, disrupting the review process. Confirmed on Linux and Windows, suggesting a core TUI rendering issue.
    - **Community:** Long-standing issues (created July) with no resolution, causing visible frustration.

3.  **Ghost sub-agent in task panel after background task rejection** ([#2673](https://github.com/MoonshotAI/kimi-code/issues/2673))
    - **Workflow:** Multi-agent sessions where the background task limit is hit.
    - **Impact:** A rejected sub-agent appears as a permanent "running" entry in the task panel that cannot be stopped. This is a UI state synchronization bug that can confuse users about the actual system state.
    - **Community:** Created today, zero comments.

4.  **400 `unknown variant image_url` error from text-only providers** ([#2669](https://github.com/MoonshotAI/kimi-code/issues/2669))
    - **Workflow:** Using a non-vision model (e.g., DeepSeek) as a secondary model after a vision-capable model has added images to the history.
    - **Impact:** The entire conversation becomes poisoned. Every subsequent turn fails with a 400 error because the provider cannot handle the `image_url` content type. This breaks any workflow that switches between vision and text-only models.
    - **Community:** Clear bug report with a workaround (clearing history), but no official fix.

5.  **MCP OAuth: Stale DCR client registration causes authorization failure** ([#2606](https://github.com/MoonshotAI/kimi-code/issues/2606))
    - **Workflow:** Using MCP servers with OAuth authentication.
    - **Impact:** The tool reuses a stale client registration, leading to an "Invalid redirect URI" error. Users must manually delete credential files to fix it, which is a poor developer experience.
    - **Community:** Closed as a known issue, but the underlying problem of credential lifecycle management remains.

6.  **Incorrect text colors in 8-color terminals** ([#2671](https://github.com/MoonshotAI/kimi-code/issues/2671))
    - **Workflow:** Running Kimi Code in a Docker container or a minimal Linux environment with `TERM=xterm`.
    - **Impact:** Text is unreadable due to incorrect color mapping, making the tool effectively unusable in these common CI/CD or containerized scenarios.
    - **Community:** New issue with clear reproduction steps.

7.  **`kimi upgrade` silently exits 0 without upgrading in non-TTY** ([#2629](https://github.com/MoonshotAI/kimi-code/issues/2629))
    - **Workflow:** Automated CI/CD pipelines or wrapper scripts that call `kimi upgrade`.
    - **Impact:** Automation cannot detect a failed upgrade because the exit code is 0. This is a silent failure that can lead to outdated versions running in production environments.
    - **Community:** Request for a `--no-tty` flag or a non-zero exit code.

8.  **Invalid `max_tokens` sent to DeepSeek provider** ([#2656](https://github.com/MoonshotAI/kimi-code/issues/2656))
    - **Workflow:** Using a custom model configuration with a third-party OpenAI-compatible provider.
    - **Impact:** The CLI sends a `max_tokens` value that the provider rejects, causing a 400 error. This highlights a mismatch between Kimi Code's internal defaults and the actual capabilities of third-party models.
    - **Community:** New issue, likely related to model capability discovery.

9.  **Cannot resume session from a different working directory** ([#2637](https://github.com/MoonshotAI/kimi-code/issues/2637))
    - **Workflow:** `kimi -r <sessionId>` from a different directory.
    - **Impact:** The tool refuses to resume and prints a message instructing the user to `cd` back. This is a workflow blocker for users who organize their projects or use a global session manager.
    - **Community:** Feature request with a clear use case.

10. **Web UI: Plan mode auto-exits after starting a new session** ([#2658](https://github.com/MoonshotAI/kimi-code/issues/2658))
    - **Workflow:** Using the Web UI with Plan mode enabled.
    - **Impact:** The Plan mode is immediately disabled as soon as the user sends a message, effectively making the feature unusable in the web portal.
    - **Community:** New bug report with a clear workaround (use CLI).

### 4. Key PR Progress

1.  **fix(agent-core): honor `[tools].disabled` config in v1 engine** ([#2537](https://github.com/MoonshotAI/kimi-code/pull/2537))
    - **Fix:** The v1 engine was ignoring the `[tools].disabled` section in `config.toml`. This PR ensures tool disabling works across both engines.
    - **Status:** Open, with 0 comments. A critical fix for users who want to restrict agent capabilities.

2.  **fix(kosong,agent-core-v2): hoist type into anyOf/oneOf branches** ([#2662](https://github.com/MoonshotAI/kimi-code/pull/2662))
    - **Fix:** Resolves the 400 error with the Notion MCP server (Issue #2661). The fix sanitizes JSON schemas where `type` is placed alongside `anyOf`/`oneOf`.
    - **Status:** Open. This is a direct fix for a high-impact bug blocking MCP integrations.

3.  **feat: add default_swarm_mode config option** ([#2670](https://github.com/MoonshotAI/kimi-code/pull/2670))
    - **Feature:** Adds a `default_swarm_mode` setting to `config.toml`, allowing users to start every session in swarm mode automatically.
    - **Status:** Open. Addresses a popular feature request (Issue #720).

4.  **feat(agent-core-v2): persist the last turn outcome into session metadata for cold listings** ([#2666](https://github.com/MoonshotAI/kimi-code/pull/2666))
    - **Feature:** After a server restart, the session list will now show the outcome of the last turn (e.g., "failed", "completed") without needing to open the session.
    - **Status:** Open. Improves the recovery and debugging experience.

5.  **feat(tui): support inline multi-skill activation anywhere in a prompt** ([#2665](https://github.com/MoonshotAI/kimi-code/pull/2665))
    - **Feature:** Allows users to invoke a skill (e.g., `/skill:code-review`) anywhere in the input, not just at the beginning.
    - **Status:** Open. Directly addresses a long-standing feature request (Issue #1736).

6.  **fix: classify context-overflow 401 responses correctly** ([#2655](https://github.com/MoonshotAI/kimi-code/pull/2655))
    - **Fix:** Some models return a 401 when the context window is exceeded. This PR correctly classifies those errors so the system handles them as a context overflow, not an authentication failure.
    - **Status:** Open. Prevents infinite retry loops in specific scenarios.

7.  **feat(kimi-code): support Kimi Computer Use on Windows** ([#2652](https://github.com/MoonshotAI/kimi-code/pull/2652))
    - **Feature:** Extends the built-in Computer Use capability to Windows x64.
    - **Status:** **Closed** (Merged). A significant platform expansion.

8.  **docs: align cli option behavior** ([#2668](https://github.com/MoonshotAI/kimi-code/pull/2668))
    - **Docs:** Corrects the CLI documentation to reflect the current validation rules, specifically that `--yolo` and `-p` (prompt mode) are incompatible.
    - **Status:** Open. Reduces user confusion from contradictory documentation.

9.  **feat(tui): add cache-expiry hint dialog for resumed and idle sessions** ([#2646](https://github.com/MoonshotAI/kimi-code/pull/2646))
    - **Feature:** When resuming a long-idle session, the TUI will warn the user that the server-side context cache has likely expired, leading to a slower and more expensive request.
    - **Status:** Open. Improves transparency and user expectations.

10. **fix(webview-ui): break long unbroken text in markdown table cells** ([#2651](https://github.com/MoonshotAI/kimi-code/pull/2651))
    - **Fix:** Resolves a Web UI rendering issue where long URLs or base64 strings in markdown tables would break the layout.
    - **Status:** Open. A direct fix for a visual bug (Issue #2560).

### 5. Feature Request Clusters

- **Web UI Enhancements:** Multiple requests for the Web UI, including a file panel for previewing files ([#2660](https://github.com/MoonshotAI/kimi-code/issues/2660)), open-sourcing the Web UI source code ([#2667](https://github.com/MoonshotAI/kimi-code/issues/2667)), and supporting PDF rendering. The community is actively using the web portal and wants it to be a more complete IDE-like experience.
- **Skill Activation Flexibility:** A clear cluster around making skill invocation more flexible. Requests include inline skill activation in the middle of a prompt ([#1736](https://github.com/MoonshotAI/kimi-code/issues/1736)) and the ability to chain multiple skills in a single command.
- **Session and Workflow Management:** Several requests for better session management, including global session resume from any directory ([#2637](https://github.com/MoonshotAI/kimi-code/issues/2637)), a default swarm mode configuration ([#720](https://github.com/MoonshotAI/kimi-code/issues/720), resolved by PR #2670), and syntax highlighting for diff output.
- **Platform and API Compatibility:** Recurring requests for better support for custom models and third-party providers, including improved error messages for `max_tokens` issues and handling of non-standard API responses.

### 6. Developer Pain Points

- **Context is the new memory ceiling:** The most significant pain point identified is the sharp degradation of agent reliability at high context fills (~500K tokens). This is a fundamental limitation that affects the core promise of long-running, autonomous agents. The lack of a graceful degradation or automatic session management is a major frustration.
- **MCP and API Integration is Brittle:** MCP OAuth credential management ([#2606](https://github.com/MoonshotAI/kimi-code/issues/2606)) and JSON schema parsing errors ([#2661](https://github.com/MoonshotAI/kimi-code/issues/2661)) are creating friction for users trying to integrate third-party tools. The error handling for OpenAI-compatible providers is also inconsistent, leading to cryptic 400 errors.
- **TUI/CLI is the primary interface, but it's fragile:** Terminal scroll issues ([#1487](https://github.com/MoonshotAI/kimi-code/issues/1487), [#2167](https://github.com/MoonshotAI/kimi-code/issues/2167)), ghost sub-agent states ([#2673](https://github.com/MoonshotAI/kimi-code/issues/2673)), and color rendering problems ([#2671](https://github.com/MoonshotAI/kimi-code/issues/2671)) are high-frequency, low-severity bugs that collectively degrade the developer experience.
- **The "silent failure" problem:** The `kimi upgrade` issue ([#2629](https://github.com/MoonshotAI/kimi-code/issues/2629)) highlights a broader pattern where the tool fails silently, making it difficult for automation and CI/CD pipelines to detect problems.
- **Mode consistency:** Users are confused by the interplay between `--yolo`, `-p` (prompt mode), and Plan mode, especially when the documentation and actual behavior of the CLI are out of sync. The Web UI's Plan mode aut-exit ([#2658](https://github.com/MoonshotAI/kimi-code/issues/2658)) is a specific example of a mode bug.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-08-06

## Today’s Update Brief
The community saw moderate activity with one patch release (v1.18.14) focused on login simplification and error resilience. The issue tracker received 50 updates, with the top threads revolving around API access, editor integration, and model availability. Pull requests landed key infrastructure work for V2 workspace execution, session export, and MCP authentication fixes.

---

## Releases
**v1.18.14** – [Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.14)
- **Core Improvements:** Simplified xAI login to a single device‑code flow, improving headless and remote usage.
- **Bugfixes:** Preserved structured mid‑stream provider errors (allowing compatible providers to retry); added retries for transient provider and network errors.

---

## Hot Issues (10 noteworthy)

1. **#16017 – [FEATURE] Add Go plan usage/balance API endpoint**
   *Author: @StephanMeijer* · [Issue](https://github.com/anomalyco/opencode/issues/16017)
   Requests a public API to expose rolling/weekly/monthly usage data (currently only visible in the dashboard). **Impact:** Power users and automated billing workflows. **Reaction:** 126 👍, 32 comments – high demand.

2. **#11176 – [FEATURE] Official OpenCode VS Code extension**
   *Author: @c2b247* · [Issue](https://github.com/anomalyco/opencode/issues/11176)
   Would make OpenCode a native VS Code extension, avoiding terminal overhead. **Impact:** Broader adoption among VS Code users. **Reaction:** 134 👍, 27 comments – the most popular open feature request.

3. **#39845 – DeepSeek V4 Flash suddenly requires “Enable models hosted in China”**
   *Author: @capi* · [Issue](https://github.com/anomalyco/opencode/issues/39845)
   Mid‑session access to DeepSeek V4 Flash was blocked, requiring explicit opt‑in for China‑hosted models. **Impact:** Breaks workflows for users who were unaware of the flag. **Reaction:** 22 👍, 17 comments.

4. **#23153 – [FEATURE] Pay Go with crypto**
   *Author: @suse-coder* · [Issue](https://github.com/anomalyco/opencode/issues/23153)
   Requests cryptocurrency payment support for OpenCode Go subscriptions. **Impact:** Expands payment options, especially for privacy‑conscious users. **Reaction:** 36 👍, 16 comments.

5. **#31932 – [FEATURE] Cross‑project session list / picker for TUI**
   *Author: @mskadu* · [Issue](https://github.com/anomalyco/opencode/issues/31932)
   The `/sessions` command is currently scoped to one project; users working across repos need a unified picker. **Impact:** Multi‑repo workflows. **Reaction:** 6 👍, 14 comments.

6. **#34498 – [FEATURE] Respect `disable-model-invocation: true` in SKILL.md frontmatter**
   *Author: @yooo1999* · [Issue](https://github.com/anomalyco/opencode/issues/34498)
   Seeks parity with Claude Code and Cursor: allow skills to disable model invocation via frontmatter. **Impact:** More control over skill behavior. **Reaction:** 49 👍, 13 comments.

7. **#8058 – [CLOSED] Add HTTP Streamable transport support for remote MCP servers**
   *Author: @chindris-mihai-alexandru* · [Issue](https://github.com/anomalyco/opencode/issues/8058)
   Currently only SSE transport is supported for remote MCP; HTTP Streamable would enable compatibility with servers like Sanity. **Reaction:** 0 👍, 10 comments – closed, but the discussion indicates continued interest.

8. **#37564 – [FEATURE] “Auto mode” LLM model classifier auto‑approval for permissions**
   *Author: @dylbarne* · [Issue](https://github.com/anomalyco/opencode/issues/37564)
   Suggests a classifier that automatically approves permissions in auto mode, similar to other agentic tools. **Impact:** Reduces friction in fully automated runs. **Reaction:** 12 👍, 6 comments.

9. **#40759 – `/sessions` does not work anymore (v1.18.14 regression)**
   *Author: @widepatch* · [Issue](https://github.com/anomalyco/opencode/issues/40759)
   After updating to v1.18.14, switching sessions via `/sessions` wipes the chat history. **Impact:** Critical – users lose context. **Reaction:** 0 👍, 2 comments – urgent bug report.

10. **#40782 – [FEATURE] Add computer‑use capability for computer and browser automation**
    *Author: @storagess* · [Issue](https://github.com/anomalyco/opencode/issues/40782)
    Requests built‑in ability to control the computer and browser, similar to Codex. **Impact:** Expands OpenCode into automation and agentic tasks. **Reaction:** 0 👍, 1 comment – early stage.

---

## Key PR Progress (10 important)

1. **#40784 – feat(core): hosted workspace execution with modal driver**
   *Author: @kitlangton* · [PR](https://github.com/anomalyco/opencode/pull/40784)
   Introduces V2 Workspaces: durable execution environments (machines with a root, not just repos). Uses the existing runner graph. **Impact:** Foundation for remote sandboxed sessions.

2. **#40781 – feat(app): export session as JSON from UI**
   *Author: @Hona* · [PR](https://github.com/anomalyco/opencode/pull/40781)
   Adds “Export…” to the session dropdown, Context tab button, and `/export` command – exports full transcript as JSON. **Impact:** Useful for debugging, sharing, or archiving sessions.

3. **#38790 – [beta] feat(app): add workspace flows to new layout**
   *Author: @Hona* · [PR](https://github.com/anomalyco/opencode/pull/38790)
   Implements Local/New/Existing workspace selection for new sessions, including long‑list search and branch context. **Impact:** Key UX for V2 workspace management.

4. **#40590 – feat: support GITHUB_TOKEN auth in install script**
   *Author: @rwenz2004* · [PR](https://github.com/anomalyco/opencode/pull/40590)
   Fixes anonymous GitHub API rate limits during installation by accepting `GITHUB_TOKEN`. **Impact:** Smoother CI/CD and offline installs. Closes #40589.

5. **#40723 – feat(core): migrate v1 data to v2**
   *Author: @thdxr* · [PR](https://github.com/anomalyco/opencode/pull/40723)
   Adds REST‑triggered V1 session history migration with resumable progress, imports V2 session data and legacy credentials. **Impact:** Users can upgrade from V1 to V2 without losing history.

6. **#40772 – fix(opencode): report a missing auth method instead of crashing**
   *Author: @shoemoney* · [PR](https://github.com/anomalyco/opencode/pull/40772)
   Prevents a crash when `ProviderAuth.authorize` indexes into an empty hook table. **Impact:** Graceful error handling for missing auth methods. Closes #40774.

7. **#40768 – fix(mcp): survive a cross‑process OAuth refresh race on connect**
   *Author: @justprosh* · [PR](https://github.com/anomalyco/opencode/pull/40768)
   Two processes sharing the same MCP credential row could cause refresh token rotation failures. **Impact:** More robust multi‑session environments. Closes #34520.

8. **#40769 – fix(mcp): reuse the registered dynamic client on re‑login**
   *Author: @justprosh* · [PR](https://github.com/anomalyco/opencode/pull/40769)
   `MCPOAuth.authorize` was performing dynamic client registration on every re‑login, causing issues. **Impact:** Stabilises MCP OAuth flows. Closes #40767.

9. **#40765 – [contributor] refactor(core): deduplicate Copilot endpoint routing**
   *Author: @kitlangton* · [PR](https://github.com/anomalyco/opencode/pull/40765)
   Reuses `shouldUseResponsesApi` from the shared Copilot provider package instead of maintaining a duplicate in Core. **Impact:** Cleaner code, fewer divergence points.

10. **#27554 – feat(opencode): local LAN provider discovery + auto‑discover models**
    *Author: @androidand* · [PR](https://github.com/anomalyco/opencode/pull/27554)
    Adds mDNS, UPnP, and manual discovery for local OpenAI‑compatible servers, auto‑importing their models. **Impact:** Enables seamless use of local LLMs (e.g., Ollama, LM Studio). Closes #6231, #27553.

---

## Feature Request Clusters

- **Editor Integration** – Multiple requests for an official VS Code extension (#11176) and a complete desktop workflow for Anthropic‑compatible providers (#34004).
- **Session Management** – Cross‑project session picker (TUI) (#31932, #35581), session status tags (#21590), and session export (#40781).
- **Payment & Billing** – Crypto payments for Go subscription (#23153) and a public API for usage/balance (#16017).
- **MCP Enhancements** – HTTP Streamable transport (#8058), MCP sampling support (#11948), and TaskMarket integration (#40722).
- **Autocomplete & UX** – Skill invocation in mid‑prompt (#40689), skills appearing in root `/` autocomplete (#40720), slash command autocomplete mid‑line (#40719), and TUI reference file listing (#34040).
- **Model & Provider Controls** – Respect `disable-model-invocation` in SKILL.md (#34498), auto‑sync LiteLLM models (#29308), and auto‑approval classifier for permissions (#37564).
- **Computer‑Use / Automation** – Built‑in computer and browser automation (#40782) and multi‑agent parallel workflow visualisation (#40564).

---

## Developer Pain Points

- **Session History Regressions** – The `/sessions` command wiping context after v1.18.14 (#40759) and empty session list on Web UI for Windows (#40399) are critical blockers.
- **Memory & Performance** – High memory usage on macOS (M2, 16GB) with many processes (#40779) and unresponsive mouse clicks while OpenCode runs (#40780).
- **Rules Persistence** – Global `~/.config/opencode/AGENTS.md` rules are repeatedly forgotten across sessions (#40348).
- **Model Access Conflicts** – DeepSeek V4 Flash suddenly requiring China opt‑in (#39845) and Forbidden errors on all models except DeepSeek and longcat (#40633).
- **Missing Features** – No official VS Code extension (#11176), no crypto payment option (#23153), and no cross‑project session picker (#31932) are recurring pain points.
- **Skill & Autocomplete Limitations** – Skills not shown in root `/` autocomplete, and autocomplete not triggering mid‑line (both #40719, #40720).

</details>