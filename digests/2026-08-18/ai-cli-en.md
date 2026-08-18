# AI CLI Tools Community Digest 2026-08-18

> Generated: 2026-08-18 00:42 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-18

## 1. Daily Cross-Tool Overview

Today saw a mix of small releases (Claude Code patch v2.1.234, Codex alpha rust‑v0.148.0‑alpha.21) and no releases from Kimi Code or OpenCode. Issue and PR activity was moderate to high across all four tools, with Windows‑specific bugs, subagent reliability, and MCP integration appearing as recurring themes. Claude Code and Codex showed stronger maintainer response (multiple merged PRs), while Kimi Code and OpenCode had several open issues without maintainer replies.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated/Active (24h) | Release Today | Notable Maintenance Signal |
|------|----------------------|--------------------------|---------------|----------------------------|
| **Claude Code** | ~50 items (issues+PRs) | 10 selected PRs merged | v2.1.234 | Five PRs from same contributor merged; many PRs merged |
| **Codex** | ~50 items | 10 selected PRs merged (incl. 6‑PR Otel proxy series) | rust‑v0.148.0‑alpha.21 | High PR throughput; agents dashboard and queue command landed |
| **Kimi Code** | 18 issues | 44 PRs active | None | No maintainer responses on top‑rated issues; PRs still open |
| **OpenCode** | 50 issues | 50 PRs updated | None | Several PRs merged (shimmer fix, MCP token serialization, refactor) |

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

- **Message queue / interrupt handling**: Claude Code (#50246, 198 👍) and Codex (`codex queue` command merged, issue #28969 on auto‑resolve) both address the desire to queue messages instead of interrupting active tasks.
- **Subagent / multi‑agent coordination**: Claude Code (#28300, multi‑agent collaboration), Codex (#15723, subagent wake‑up; #13491, intent inheritance), and Kimi Code (#3015, #2992, subagent status display) all report reliability gaps in delegated workflows.
- **Windows stability**: All four tools have at least one open Windows‑specific bug: Claude Code GPU crashes (0x060C201E), Codex Chrome plugin reinstall failure (#23283), Kimi Code `getModels` crash on Windows (#2981), OpenCode path/permission issues (#36681).
- **MCP / OAuth token management**: Codex (#17265, auto‑refresh) and OpenCode (#43074, serialized token refresh) both face token‑lifecycle challenges. OpenCode also has a per‑server trust PR (#40125).
- **Skill / context loading efficiency**: Claude Code (claude‑api skill saturating context, #63566, #87191) and Kimi Code (multi‑skill activation, PRs #2995, #2982) both grapple with how to load only relevant skills.
- **Model behavior and tool selection**: Claude Code (bash vs builtins, #19649) and Codex (model creating excessive verification layers, #39059) note that models sometimes choose suboptimal strategies.

## 4. Differentiation Analysis

- **Claude Code** emphasises a rich plugin/slash‑command ecosystem, skills, and desktop app stability. Its community is large and vocal about Windows GPU crashes and permission dialog UX. The plugin‑dev tooling and script validation PRs indicate a focus on extensibility.
- **Codex** leans heavily into agent management: a new `/agents` dashboard, `codex queue` command, and telemetry (proxy‑aware OTel) suggest enterprise‑scale, multi‑session workflows. The raised GPT‑5.6 context window (872k tokens) also targets power users.
- **Kimi Code** is more TUI‑focused, with feature requests for hierarchical skill selectors, folded message expansion, and loop trace metrics. It also has the most acute API connectivity issues (permanent client wedging, false 403 quota errors) with no maintainer response.
- **OpenCode** positions itself as an MCP‑first platform, with PRs for per‑MCP trust, serialized token refresh, and plugin transforms. Its pain points are more about infrastructure (endpoint retirement, billing) and Windows compatibility.

## 5. Community Activity Notes

- **Most active by issue count**: Claude Code, Codex, and OpenCode each reported ~50 items updated. Kimi Code had fewer issues (18) but a high number of active PRs (44).
- **Release cadence**: Claude Code and Codex shipped releases today; Kimi Code and OpenCode did not.
- **Maintainer responsiveness**: Claude Code and Codex had multiple PRs merged today, including from external contributors. Kimi Code had no maintainer replies on several high‑impact issues (e.g., #1917, #3014, #2981). OpenCode merged several PRs but left many open issues unaddressed.
- **Emerging discussion**: The message‑queue topic on Claude Code (#50246) is the highest‑reacted issue across all four tools today (198 👍). Codex’s agent dashboard and queue command were merged, suggesting implementers are moving quickly.

## 6. Evidence-Backed Observations

1. **Windows-specific bugs are a persistent cross‑tool pain point.** Every tool has at least one critical Windows issue (GPU crash, install failure, path handling, test reliability). No tool shows a clear advantage in Windows support today.
2. **Subagent and multi-agent reliability is a common concern, but solutions vary.** Claude Code and Codex are exploring explicit protocols and dashboards; Kimi Code is still fixing visual state bugs. The gap between “running” and “completed” subagent states is not yet well managed by any tool.
3. **MCP protocol maturity is still evolving.** Two tools (Codex, OpenCode) had token refresh and trust configuration PRs today. The other tools have less MCP surface area, but the pattern suggests that MCP reliability is a growing requirement as more tools adopt it.
4. **Skill and context loading inefficiencies are reported by multiple tools, but no unified solution.** Claude Code and Kimi Code both have open issues about loading unnecessary skill content (full API bundles, redundant language docs). This wastes tokens and frustrates users.
5. **No clear cross-tool signal for a single dominant trend.** Each tool is addressing different core pain points: Claude Code builds plugin ecosystem, Codex focuses on agent orchestration, Kimi Code polishes TUI and multi‑model support, OpenCode strengthens MCP infrastructure. The overlap is in foundational reliability (Windows, subagents, tokens) rather than a shared strategic direction.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-18

## Today’s Update Brief

A single patch release (v2.1.234) landed with two minor improvements: a new environment variable for per-project transcript directories and a keybinding action to clear selections. The issue tracker saw 50 updated items, with notable spikes in Windows GPU crash reports and a growing discussion around message queuing to avoid interrupting active tasks. Five pull requests from the same contributor (RerankerGuo) were merged, tightening script validation and plugin-dev tooling.

## Releases

**v2.1.234** (latest, 24h)
- Added `CLAUDE_CODE_PROJECT_DIR_NAME` environment variable — hosts that give each session its own config directory can now set a short name for the per-project transcript directory.
- Added `selection:clear` keybinding action so users can bind a key to clear an in-app selection.

[Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)

## Hot Issues (10 selected)

1. **[#50246 – Message queue mode](https://github.com/anthropics/claude-code/issues/50246)**
   *Closed, 60 comments, 198 👍*
   **Impact:** Users want to queue follow-up messages instead of interrupting an active task. This is the highest-reacted item in the tracker. The discussion explores how a queue could avoid derailing current work.

2. **[#80444 – Windows desktop app: fatal GPU crash (0x060C201E)](https://github.com/anthropics/claude-code/issues/80444)**
   *Open, 39 comments*
   **Impact:** The MSIX-based desktop app crashes when using the in-app browser tab, leaving the package unlaunchable until repair. Reproduced on multiple NVIDIA driver versions. High severity for Windows users.

3. **[#28300 – Multi-agent collaboration across machines](https://github.com/anthropics/claude-code/issues/28300)**
   *Open, 38 comments*
   **Impact:** A feature request for an agent-to-agent protocol allowing distributed Claude instances to collaborate. Active discussion, though no official signal yet.

4. **[#19649 – Model frequently uses Bash tools when builtin tools would suffice](https://github.com/anthropics/claude-code/issues/19649)**
   *Open, 27 comments, 97 👍*
   **Impact:** The model prefers `sed`/`grep` over the `Read`/`Grep` builtins, raising costs and risking side effects. Many users report similar behavior.

5. **[#81341 – GPU crash on Windows due to CIG + vendor-signed vk_swiftshader.dll](https://github.com/anthropics/claude-code/issues/81341)**
   *Open, 21 comments*
   **Impact:** Every browser preview triggers a GPU process crash (0x060C201E) because of signature enforcement (MicrosoftSignedOnly) conflicting with the bundled Vulkan driver. Linked to several other GPU crash issues.

6. **[#86298 – Cross-session messages silently dropped on Windows](https://github.com/anthropics/claude-code/issues/86298)**
   *Open, 13 comments*
   **Impact:** Messages sent between sessions are held for an approval the UI never shows, then expire after ~5 minutes. Regression since app 1.28929.0. Affects remote control / multi-session workflows.

7. **[#64568 – Esc in /btw mode rejects pending tool use instead of exiting mode](https://github.com/anthropics/claude-code/issues/64568)**
   *Open, 10 comments, 9 👍*
   **Impact:** Pressing Esc to exit `/btw` mode is intercepted by a pending tool-use prompt, causing accidental rejection. Users lose work because they intended to only leave the mode.

8. **[#63566 – /claude-api skill saturates context unconditionally](https://github.com/anthropics/claude-code/issues/63566)**
   *Closed, 8 comments, 9 👍*
   **Impact:** The bundled `claude-api` skill adds ~77% context overhead even from a neutral question, wasting tokens. Fixed in a later release (noted as closed).

9. **[#81343 – Single background subagent balloons to 9.5 GiB causing OOM](https://github.com/anthropics/claude-code/issues/81343)**
   *Open, 5 comments*
   **Impact:** A non-nested background subagent using `run_in_background: true` grew to 9.5 GiB RSS in ~100 seconds, triggering a kernel OOM on a 15.6 GiB Linux host. Memory leak suspected.

10. **[#87191 – /claude-api skill loads entire multi-language bundle (~230k tokens)](https://github.com/anthropics/claude-code/issues/87191)**
    *Closed, 4 comments, 1 👍*
    **Impact:** Invoking the skill in a Python project loaded docs for C#, Go, Java, PHP, Python, Ruby, TypeScript, and full API reference, wasting tokens. Fixed in v2.1.234? Not explicitly mentioned in release notes.

## Key PR Progress (10 selected)

1. **[#87395 – ralph-wiggum: prevent model self-invocation of /ralph-loop](https://github.com/anthropics/claude-code/pull/87395)**
   *Merged*
   A plugin fix: `hide-from-slash-command-tool` frontmatter key was not supported, so Claude could autonomously trigger `/ralph-loop` without user request. Now uses `disable-model-invocation` to block that.

2. **[#72451 – Remove statsig.anthropic.com from init-firewall.sh](https://github.com/anthropics/claude-code/pull/72451)**
   *Merged*
   The hostname no longer resolves, causing devcontainer startup failures. Removed from firewall allowlist.

3. **[#79131 – Don’t abort validate-settings.sh when no lowercase frontmatter keys match](https://github.com/anthropics/claude-code/pull/79131)**
   *Open*
   Prevents silent exit 1 when `grep` returns no matches. Also reports mixed-case keys that are skipped.

4. **[#30692 – Container isolation example with guard hook](https://github.com/anthropics/claude-code/pull/30692)**
   *Merged*
   Adds `examples/container/` showing how to run Claude Code inside Podman/Docker, with a `guard-destructive-git` hook that catches risky git operations.

5. **[#29284 – Clarify excludedCommands requires `:*` suffix](https://github.com/anthropics/claude-code/pull/29284)**
   *Merged*
   Updates docs: `"docker:*"` is required to match commands with arguments; bare `"docker"` only matches the command itself.

6. **[#84004 – Limit plugin-dev frontmatter parsing](https://github.com/anthropics/claude-code/pull/84004)**
   *Merged*
   Fixes `sed` range expression that restarted at every `---`, causing false parsing of body content as frontmatter.

7. **[#84003 – Propagate top-level failures in duplicate-maintenance scripts](https://github.com/anthropics/claude-code/pull/84003)**
   *Merged*
   Both scripts used `.catch(console.error)` which swallowed startup errors. Now returns a failing process status.

8. **[#83999 – Validate gh flag values in wrapper](https://github.com/anthropics/claude-code/pull/83999)**
   *Merged*
   Rejects incomplete `gh` commands like `gh issue list --limit` (missing value) that bypassed argument validation.

9. **[#83993 – Reject self-referential duplicates in comment-on-duplicates.sh](https://github.com/anthropics/claude-code/pull/83993)**
   *Merged*
   Prevents the script from proposing an issue as a duplicate of itself, which could cause infinite loops in automation.

10. **[#83992 – Assert expected hook decision in test-hook.sh](https://github.com/anthropics/claude-code/pull/83992)**
    *Merged*
    Adds `--expect allow|deny|ask` flag so tests can verify a hook actually denies what it should, rather than just ran.

## Feature Request Clusters

- **Message Queue & Interrupt Handling**
  Multiple users request the ability to queue messages while Claude is working, rather than interrupting. (#50246, also echoed in #86298 discussion about cross-session message drops)

- **Multi-Agent & Cross-Session Collaboration**
  Several requests for an agent-to-agent protocol (#28300) and better cross-session message reliability (#86298, #86237). Users want distributed Claude instances to collaborate or share state.

- **Tool Selection / Model Behavior**
  The model’s preference for Bash tools over builtins (#19649) continues to frustrate users. Also, the `claude-api` skill loading entire language bundles (#63566, #87191) drains context unnecessarily.

- **Permission Dialog UI Consistency**
  Two issues highlight confusing keyboard shortcuts: `1` means Approve in CLI but Deny in Windows desktop app (#73325), and the “No” digit varies between 2-option and 3-option dialogs (#83567). Users request stable, predictable shortcuts.

- **Desktop App Stability (Windows GPU Crashes)**
  A cluster of GPU crash reports (#80444, #81341, #85540) all showing error 0x060C201E, linked to CIG enforcement and the bundled SwiftShader DLL. The crashes can render the MSIX package unlaunchable until repair.

- **Skill Loading & Context Management**
  Besides the `claude-api` bundle issue, stacked slash-skill invocations (e.g., `claude -p "/skill1" "/skill2"`) load only the first skill (#87113), and headless mode with a failing `!`-preamble silently aborts (#87159). These degrade scripted CI/CD usage.

- **Configuration & Installation**
  Windows installation fails for all methods (npm, ps1, cmd, winget) with a “defines.json” syntax error (#85663). Also, AMD CPUs lacking AVX support are blocked (#86125). Permission rules with `$HOME` don’t expand when the config path is a symlink (#87139).

- **Slash Commands and /btw Mode**
  `Esc` in `/btw` mode rejects tool prompts (#64568), and forking a completed `/btw` response re-submits the original prompt instead of continuing (#87156). These make the `/btw` workflow error-prone.

## Developer Pain Points

- **Windows GPU crashes** are the most severe recurring issue: multiple open bugs with the same crash signature, leaving the app unusable until repair. The root cause (CIG + SwiftShader signature mismatch) is identified but not yet fixed.
- **Cross-session message reliability** is broken on Windows (held-for-approval timeout) and more generally (messages rendered but not delivered to runtime). This blocks remote control and multi-session workflows.
- **Memory leaks** in background subagents (9.5 GiB in 100s) and unconditional context saturation from skills undermine long-running tasks and CI pipelines.
- **Permission dialog inconsistency** between CLI and desktop app, plus unstable digit assignments, causes accidental denials that waste time.
- **Installation failures** on Windows continue to affect new users, with no workaround documented.
- **Skill loading inefficiencies** (entire API bundle for single-language projects, stacked skill invocations only loading the first) waste tokens and break automation scripts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-08-18

## Today’s Update Brief
One alpha release (rust‑v0.148.0‑alpha.21) landed today. The issue tracker shows 50 items updated in the last 24 h, with the most active threads focused on subagent wake‑up, OAuth token refresh, and a regression in remote control. On the PR side, a large six‑part series for proxy‑aware telemetry was merged, along with a new `/agents` dashboard, an increased GPT‑5.6 context window, and a `codex queue` command.

## Releases
- **rust‑v0.148.0‑alpha.21** — No changelog beyond the version bump.
  https://github.com/openai/codex/releases

## Hot Issues (10 selected by comment count)
1. **#28969 — Add setting to disable auto‑resolve in 60 s for questions**
   *79 comments, 195 👍*
   Users want control over the automatic resolution timer. The issue provides detailed version and model info (gpt‑5.5 on Linux). High community agreement.
   https://github.com/openai/codex/issues/28969

2. **#17265 — Codex does not auto‑refresh routed MCP OAuth tokens**
   *31 comments, 57 👍*
   A `refresh_token` is stored but never used; MCP tool calls fail after token expiry. Affects all routed MCP servers.
   https://github.com/openai/codex/issues/17265

3. **#37403 — Desktop cannot resume Remote Control / CLI thread: “already has an active writer”**
   *21 comments, 17 👍*
   Regression after a macOS client update on Aug 7. Users switching between mobile remote control and desktop sessions hit a write‑lock error.
   https://github.com/openai/codex/issues/37403

4. **#15723 — Background subprocesses/subagents do not wake the calling agent on completion**
   *18 comments, 8 👍*
   Subagents finish silently; the parent agent never resumes. Broke asynchronous workflows.
   https://github.com/openai/codex/issues/15723

5. **#17793 — Backspace deletes more than one character in TUI**
   *16 comments, 5 👍*
   Terminal input quirk on Kitty/Linux makes prompting harder.
   https://github.com/openai/codex/issues/17793

6. **#23418 — Mobile remote‑created worktree thread not associated with project in Desktop sidebar**
   *12 comments, 4 👍*
   Threads created via ChatGPT mobile remote control don’t appear in the Codex Desktop project sidebar, though they exist locally.
   https://github.com/openai/codex/issues/23418

7. **#13491 — Forked Worker Inherits Parent User Intent and Misinterprets It**
   *10 comments, 11 👍*
   Subagents accidentally treat parent intent as direct instruction, leading to recursive delegation attempts.
   https://github.com/openai/codex/issues/13491

8. **#31963 — zh‑CN renders both “xhigh” and “ultra” reasoning efforts as “极高”**
   *10 comments, 5 👍*
   i18n bug on Windows; two distinct effort levels share the same label.
   https://github.com/openai/codex/issues/31963

9. **#33282 — create_thread does not inherit auto‑approval mode for worktree tasks**
   *9 comments, 5 👍*
   When spawning new threads, the parent’s auto‑approval setting is lost, requiring manual re‑approval.
   https://github.com/openai/codex/issues/33282

10. **#23283 — Windows Chrome plugin reinstall does not create native messaging host**
    *8 comments, 2 👍*
    After uninstalling and reinstalling the Chrome plugin, the native messaging host registry entry is missing.
    https://github.com/openai/codex/issues/23283

## Key PR Progress (10 selected)
1. **#39114 — `codex agents` dashboard command** (closed)
   Adds a dedicated command to open the shared agents overview without starting a new session.
   https://github.com/openai/codex/pull/39114

2. **#39112 — Interactive task dashboard for agents overview** (closed)
   Lets users start tasks, rename, stop, and view details directly from the dashboard.
   https://github.com/openai/codex/pull/39112

3. **#39094 — `/agents` TUI dashboard** (closed)
   Full‑screen dashboard of root sessions with subagent status, search, and grouping.
   https://github.com/openai/codex/pull/39094

4. **#39092 — `codex queue` command** (closed)
   Queue a message for an existing session via `codex queue --thread <THREAD> --message <TEXT>`.
   https://github.com/openai/codex/pull/39092

5. **#39102 — Raise GPT‑5.6 maximum context window** (closed)
   Allows up to 872 k tokens for gpt‑5.6‑sol/terra/luna, with corresponding Bedrock entries.
   https://github.com/openai/codex/pull/39102

6. **#39101 — Update rmcp to 3.1.2** (closed)
   Upgrades MCP protocol library, removes local JSON‑RPC compatibility layer, adds OAuth metadata support.
   https://github.com/openai/codex/pull/39101

7. **#39100 — Avoid redundant terminal size queries** (closed)
   Passes cached screen size to history insertion, reducing terminal back‑end calls.
   https://github.com/openai/codex/pull/39100

8. **#39098 — Trace exec‑server requests** (closed)
   Adds OpenTelemetry spans for inbound exec‑server requests from receipt through completion.
   https://github.com/openai/codex/pull/39098

9. **#39103 — Drop capabilities from Linux sandbox processes** (closed)
   Adds `--cap-drop ALL` in bubblewrap, verifies empty capability sets before execution.
   https://github.com/openai/codex/pull/39103

10. **#39089 — Clarify external contribution policy** (closed)
    States that community contributions are best focused on detailed issue reports, not code changes.
    https://github.com/openai/codex/pull/39089

**Otel proxy series (6 PRs, merged)**
A multi‑PR effort (#39105‑#39109, #39091) makes all telemetry exports (OTLP, Statsig, Sentry) proxy‑aware. Highlights: blocking HTTP client with custom CAs, proxy‑aware async/blocking transports, removal of direct reqwest dependency from `codex-otel`, and propagation of proxy policy into elevated Windows sandbox.
https://github.com/openai/codex/pull/39105
https://github.com/openai/codex/pull/39106
https://github.com/openai/codex/pull/39107
https://github.com/openai/codex/pull/39108
https://github.com/openai/codex/pull/39109
https://github.com/openai/codex/pull/39091

## Feature Request Clusters
- **Agent management and visibility**
  Multiple requests for a dedicated agent dashboard, task handoff between ChatGPT mobile and Codex Desktop (#32519), and a queue command to message existing sessions. The PRs this week directly address this cluster.

- **Telemetry and observability**
  Opt‑in OTel logging for agent responses (#22230) and the proxy‑aware telemetry PRs show community demand for better monitoring, especially in enterprise environments.

- **TUI/CLI quality of life**
  Hide/collapse code snippets in progress output (#32817), include thread titles in terminal tab titles (#35626), and fix backspace behavior (#17793). These are small but persistent friction points.

- **Workflow automation**
  Controlling auto‑resolve (#28969), letting scheduled tasks stay enabled after successful runs (#38350), and inheriting auto‑approval in child threads (#33282) all point to a desire for more deterministic, less manual workflows.

## Developer Pain Points
- **Subagent coordination** — Subagents fail to wake parents (#15723) or misinterpret parent intent (#13491). These break parallel and async coding tasks.
- **Remote control and project association** — Threads created via mobile remote control don’t appear in the Desktop sidebar (#23418) and a regression prevents resuming remote sessions (#37403). Cross‑device workflows are fragile.
- **MCP token management** — OAuth tokens are not auto‑refreshed (#17265), and on Windows stdio MCP servers are repeatedly spawned without cleanup (#38754). MCP reliability remains a top concern.
- **Windows‑specific issues** — Chrome plugin reinstall fails (#23283), i18n labels are duplicated (#31963), auto‑approval inheritance is broken (#33282), and a persistent read loop causes system stutter (#38518). Windows users report a disproportionate number of regressions.
- **Migration and rollout stability** — The `migrate-rollouts` command can leave subagent threads with empty history (#38762) or drop thread names (#38761). These are low‑comment but high‑impact bugs for anyone upgrading.
- **Model behavior** — GPT‑5.6 Codex sometimes turns bounded codebase work into self‑reinforcing verification layers (#39059), and custom‑provider reasoning IDs are serialized incorrectly (#38855). Model‑specific regressions are being reported more frequently.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-18

## Today's Update Brief

No new releases were published in the last 24 hours. Community activity remains high with 18 issues updated and 44 pull requests active, mainly focused on bug fixes around sub-agent display states, API client recovery, and Bash tool directory handling. Several smaller PRs addressing Windows test reliability and VSCode command queuing also saw updates.

---

## Releases

No new versions in the last 24 hours.

---

## Hot Issues (10 selected)

### 1. [Bug] APIConnectionError becomes permanent until process restart — HTTP client wedges
**#1917** — [Link](https://github.com/MoonshotAI/kimi-code/issues/1917)
- **Affected workflow:** Any API-dependent operation (completion, tool calls, model listing) after a transient network interruption.
- **Impact:** Critical — once a `APIConnectionError` occurs, no subsequent retry opens a socket, requiring a full process restart to recover. Reported on v0.26.0 and v0.27.0, macOS (Apple Silicon, Node v26). No maintainer response yet.
- **Reaction:** 0 upvotes, 3 comments.

### 2. [Bug] Regression in 0.7.0: getModels crashes with “Cannot read properties of undefined (reading 'toLowerCase')”
**#2981** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2981)
- **Affected workflow:** `kimi` startup or configuration validation that calls `getModels` on Windows.
- **Impact:** High — the tool is unusable on Windows at v0.7.0. Reported on Windows with API provider. Has 2 comments; no maintainer resolution yet.
- **Reaction:** 0 upvotes.

### 3. [Bug] CLI returns 403 usage limit despite dashboard showing 0% — failed Login Device calls consuming 5h/weekly quota
**#3014** — [Link](https://github.com/MoonshotAI/kimi-code/issues/3014)
- **Affected workflow:** CLI login and ongoing usage on managed:kimi-code plans.
- **Impact:** High — users are blocked by false-positive 403 errors. The report suggests failed `Login Device` calls count toward the 5-hour weekly quota, leaving no allowance for actual work. Reproduced on Ubuntu 24.04 and Windows 11. 1 upvote, 1 comment (no maintainer reply).
- **Reaction:** 1 upvote.

### 4. [Bug] Switching from vision model to text-only model hangs the session
**#2986** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2986)
- **Affected workflow:** Changing the active model mid-session from a multimodal model to a text-only model (e.g., GLM-5.3).
- **Impact:** High — the session errors and becomes unresponsive, forcing a restart. MacOS, v0.36.1. No comments yet.
- **Reaction:** 0 upvotes.

### 5. [Enhancement] Pasted/dragged images sent inline to non-multimodal models, aborting the turn with provider 400
**#2999** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2999)
- **Affected workflow:** Web UI — drag-and-drop or paste image when a text-only model is active.
- **Impact:** Medium — the turn fails with a provider 400 error; the image should be degraded to a file reference. 0 upvotes, 0 comments.
- **Reaction:** 0 upvotes.

### 6. [Bug] Subagent panel shows completed subagents as “运行中” with ever-growing timers
**#3015** — [Link](https://github.com/MoonshotAI/kimi-code/issues/3015)
- **Affected workflow:** TUI subagent ("子Agent") panel — monitoring background/delegated tasks.
- **Impact:** Medium — users cannot distinguish running from finished subagents, making multi-agent workflows confusing. Windows 11, MINGW64, v0.36.0. No comments.
- **Reaction:** 0 upvotes.

### 7. [Bug] Running seed displayed after sub-agent task is completed
**#2992** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2992)
- **Affected workflow:** TUI — after a sub-agent completes, the "running" indicator persists.
- **Impact:** Medium — visual regression. Windows 10, v0.36.1. 0 comments.
- **Reaction:** 0 upvotes.

### 8. [Bug] ACP: scheduled (cron) turns emit no session/update events, so clients cannot tell the session is busy
**#2991** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2991)
- **Affected workflow:** ACP protocol — cron-triggered turns are invisible to the client.
- **Impact:** Medium — custom ACP clients (e.g., session multiplexers) cannot cancel or observe cron-triggered work, leading to conflicting interactive prompts. v0.36.1. 0 comments.
- **Reaction:** 0 upvotes.

### 9. [Enhancement] Show cache hit rate in Kimi Code Web
**#3000** — [Link](https://github.com/MoonshotAI/kimi-code/issues/3000)
- **What users want:** A visible cache hit rate indicator in the Web UI, similar to DeepSeek harness web.
- **Impact:** Low (feature request) — no progress indication. 0 upvotes, 0 comments.
- **Reaction:** 0 upvotes.

### 10. [Enhancement] Pair Kimi Code CLI with Kimi mobile app for cross-device session access
**#2984** — [Link](https://github.com/MoonshotAI/kimi-code/issues/2984)
- **What users want:** A first-class pairing flow to monitor and steer agent sessions from a phone, similar to Claude Code's mobile pairing.
- **Impact:** Low (feature request) — no current implementation. 0 upvotes, 0 comments.
- **Reaction:** 0 upvotes.

---

## Key PR Progress (10 selected)

### 1. feat(tui): add hierarchical skill group selector with tab navigation
**#2995** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2995)
- **What it does:** Adds a nested skill selection UI with tab navigation for categories (e.g., `cv/ops/semaphore`, `security/audit`). Addresses the problem of flat lists and cluttered grouping.
- **Status:** Open. 0 comments.
- **Author:** @creatiVision

### 2. fix(agent-core): keep Bash cwd applied to commands containing `&`
**#2957** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2957)
- **What it fixes:** Shell commands containing `&` (backgrounding) cause the `cd` prefix to be swallowed by Bash's AND-list parsing.
- **Status:** Open. Closes #2890.
- **Author:** @pucedoteth

### 3. fix(bash): honor cwd for backgrounded shell commands
**#2900** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2900)
- **What it fixes:** Same root cause as #2957 — alternative fix approach. The `cd <cwd> &&` prefix is backgrounded along with the first command when `&` is used.
- **Status:** Open. Resolves #2890.
- **Author:** @Fnine59

### 4. test(agent-core-v2): retry Windows cleanup, increase slow-test timeouts
**#2792** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2792)
- **What it does:** Improves Windows test reliability by retrying transient filesystem cleanup errors and increasing timeouts for slow/bind-mounted filesystems.
- **Status:** Open. Continued review.
- **Author:** @jonathansampson

### 5. feat(kimi-code): support automatic updates for native installations via staged swap
**#2994** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2994)
- **What it does:** Enables self-update for native single-binary (SEA) installations on Windows by implementing a staged swap mechanism.
- **Status:** Open. (Internal request, no linked issue).
- **Author:** @liruifengv

### 6. feat(kap-server): accept bundled skill activations on the prompt submission route
**#2982** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2982)
- **What it does:** Completes the multi-skill prompt feature (#1736) by exposing the bundled-submission capability through the kap-server HTTP API.
- **Status:** Open. Follow-up to #1736.
- **Author:** @chengluyu

### 7. fix(tui): make folded assistant messages expandable
**#2920** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2920)
- **What it fixes:** Completed turns in the TUI are replaced with a summary and cannot be expanded. This PR makes them expandable via `Ctrl+O`.
- **Status:** Open. Resolves #2904.
- **Author:** @yu-xin-c

### 8. feat(vis): add loop trace evaluation metrics
**#2897** — [Link](https://github.com/MoonshotAI/kimi-code/pull/2897)
- **What it does:** Adds metrics to the visualizer to quantify loop shapes (long exact runs, rotating reuse of small call alphabets) to help design breaker policies.
- **Status:** Open. Related to #2622.
- **Author:** @yu-xin-c

### 9. fix(vscode): preserve queued host commands
**#3013** — [Link](https://github.com/MoonshotAI/kimi-code/pull/3013)
- **What it fixes:** While a response streams, using "Insert now (steer)" on a queued slash command (e.g., `/auto`) sends it through the model steer path and removes it from the queue, preventing it from reaching the host command handler.
- **Status:** Open. Resolves #2580.
- **Author:** @LouisDM

### 10. fix(agent-core-v2): cap default subagent delegation at one level
**#3012** — [Link](https://github.com/MoonshotAI/kimi-code/pull/3012)
- **What it does:** Prevents the `Agent` tool from spawning recursively unbounded subagent chains (main → agent → agent → …). Default delegation is now limited to one level.
- **Status:** Open. No linked issue.
- **Author:** @sailist

---

## Feature Request Clusters

### Multi-Skill and Multi-Model Support
- **Inline multi-skill activation** (#1736, closed) — allowing `/skill:code-review` and `/skill:security-audit` in a single prompt. Now partially implemented in the TUI (PR #2995), with the HTTP API being added in PR #2982.
- **Image degradation for non-multimodal models** (#2999) — when a text-only model is active, paste/drag image should be sent as a file reference, not inline.
- **Model switching stability** (#2986) — switching from a vision model to a text-only model should not hang the session.

### Session State and Monitoring
- **Visible token usage for system prompts and tool calls** in Web UI (#2997).
- **Visible cache hit rate** in Web UI (#3000), similar to DeepSeek harness.
- **ACP event coverage for cron-triggered turns** (#2991) — clients need to know when a session is busy.
- **Subagent status accuracy** (#3015, #2992) — completed subagents should not show as "running".

### Cross-Device and Workflow Management
- **CLI ↔ mobile app pairing** (#2984) — monitor and steer sessions from a phone.
- **Git worktree directory re-rooting** (#3009) — session working directory should follow when entering a git worktree.

---

## Developer Pain Points

1. **API connectivity and quota management** — Issues #1917 (permanent HTTP client wedging) and #3014 (false 403 quota errors) are blocking users. The latter is especially concerning because failed login attempts consume quota, leaving no budget for actual work. No maintainer response on either.

2. **Model compatibility and switching** — At least three issues (#2981, #2986, #2999) relate to unexpected behavior when models are listed, changed, or used with incompatible capabilities. The `getModels` crash (#2981) on Windows is a full regression at v0.7.0.

3. **Sub-agent and session state management** — Two issues (#3015, #2992) report that the TUI shows subagents as "running" after completion. Combined with #2991 (cron events invisible to ACP clients), this makes multi-agent and background workflows unreliable to monitor.

4. **Working directory management** — Bash command handling with `&` (#2890, twin PRs #2957 and #2900) and git worktree path issues (#3009) both cause tools to execute commands in the wrong directory, leading to silent failures or write operations on

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-18

## Today's Update Brief

Activity is moderate with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were published. The most active discussions center on the legacy inference endpoint retirement (410 Gone errors), a long-running feature request for auto-switching between Plan and Build modes, and a cluster of Windows-specific installation and path-handling bugs. Several PRs landed to fix MCP token refresh serialization, session injection in `--continue`, and WAL journaling on network filesystems.

## Releases

No new versions released in the last 24 hours.

## Hot Issues

1. **#43105 — Legacy inference endpoint returning 410 Gone**
   *[CLOSED]* Author reports that the `https://opencode.ai/inference/v1` endpoint is retired, breaking all external CLI tools. Only the beta OpenCode 2 client works. Community confusion about migration path.
   https://github.com/anomalyco/opencode/issues/43105

2. **#7801 — Plan Mode + Question tool should auto-switch to Build mode**
   *[OPEN]* Long-running feature request (32 👍) asking Plan mode to automatically switch to Build mode after planning completes. The agent currently asks the user to switch manually. 11 comments, last updated today.
   https://github.com/anomalyco/opencode/issues/7801

3. **#22861 — Big Pickle stops response early at same spot**
   *[CLOSED]* User reports that asking Big Pickle to continue after an early stop fails — the model stops again at the identical point. No reproduction repo provided.
   https://github.com/anomalyco/opencode/issues/22861

4. **#40243 — ChatGPT OAuth rejects GPT-5.6 for EU-resident workspaces**
   *[CLOSED]* EU workspace with data residency enabled cannot use OAuth with GPT-5.6 models, while official Codex CLI works. Broken since 2026-08-13. 4 👍.
   https://github.com/anomalyco/opencode/issues/40243

5. **#33027 — MCP tools connected but not exposed to agent**
   *[OPEN]* MCP server `pdfrag` connects successfully and publishes 6 tools via `tools/list`, but the agent's tool list does not include them. Server responds correctly to MCP protocol.
   https://github.com/anomalyco/opencode/issues/33027

6. **#24153 — Feature request: unarchive/restore for archived sessions**
   *[OPEN]* Archiving is currently one-way — sessions disappear from the sidebar and cannot be restored. 11 👍, 8 comments.
   https://github.com/anomalyco/opencode/issues/24153

7. **#36681 — Windows path references and permissions not working**
   *[OPEN]* External directory path configuration fails on Windows. No documentation for Windows path syntax. Multiple permission-related issues filed by same author.
   https://github.com/anomalyco/opencode/issues/36681

8. **#43009 — Incorrect charging items (billing bug)**
   *[CLOSED]* User reports anomalous billing for DeepSeek-V4-Pro and DeepSeek-V4-Flash sessions. One session shows 292,911 tokens consumed for $0.3842. Asks for limit reset if bug confirmed.
   https://github.com/anomalyco/opencode/issues/43009

9. **#43102 — Endpoint is unavailable upstream**
   *[OPEN]* Two different models fail with "Upstream request failed: Endpoint is unavailable" in new sessions. No workaround reported.
   https://github.com/anomalyco/opencode/issues/43102

10. **#43146 — DeepSeek Flash V4 (Go gateway) stuck in endless reply loop**
    *[OPEN]* On Alpine Linux, the model repeats the same sentence indefinitely. Version 1.18.18.
    https://github.com/anomalyco/opencode/issues/43146

## Key PR Progress

1. **#43144 — Fix UI shimmer loop**
   *[CLOSED]* Adjusts shimmer animation gutters and highlight spread to keep the highlight fully outside short and long labels at both loop boundaries.
   https://github.com/anomalyco/opencode/pull/43144

2. **#43125 — Expose MCP server transforms to plugins**
   *[OPEN]* Decouples MCP server definitions from config, adds Agent-style `list`/`get`/`set`/`update`/`remove` transforms for Effect and Promise plugins.
   https://github.com/anomalyco/opencode/pull/43125

3. **#40125 — Per-MCP-server trust configuration**
   *[OPEN]* Allows per-server fingerprint pinning and `caFile` support for private CAs, addressing the inability to trust self-signed certs without global `insecure: true`.
   https://github.com/anomalyco/opencode/pull/40125

4. **#43142 — Support older previous-channel database schemas**
   *[OPEN]* Makes the V2 database importer tolerate older `opencode-next.db` schemas with optional project/session columns. Fixes #43139 and #41341.
   https://github.com/anomalyco/opencode/pull/43142

5. **#43141 — Disable WAL on network filesystems**
   *[OPEN]* Detects NFS, SMB/CIFS, 9P, and FUSE-backed directories via `statfs` and falls back to SQLite rollback journaling. Allow `OPENCODE_DB_WAL` override.
   https://github.com/anomalyco/opencode/pull/43141

6. **#43017 — Refactor app to use shared server data**
   *[CLOSED]* Migrates app consumers to the shared server data layer, removing duplicated session synchronization, reducers, and legacy caches.
   https://github.com/anomalyco/opencode/pull/43017

7. **#43140 — Skip in-flight sessions in `--continue` selection**
   *[OPEN]* Fixes #43133: `opencode run --continue` no longer injects prompts into sessions actively in use by another instance. Adds liveness check.
   https://github.com/anomalyco/opencode/pull/43140

8. **#43074 — Serialize MCP token refresh**
   *[CLOSED]* Prevents concurrent MCP clients from exchanging the same rotating OAuth refresh token, which caused intermittent `invalid_grant` failures.
   https://github.com/anomalyco/opencode/pull/43074

9. **#43136 — Settle pending Anthropic tool calls**
   *[OPEN]* Handles `message_stop` arriving without `content_block_stop` by settling pending tool blocks. Preserves malformed input as non-executable `tool-input-error`.
   https://github.com/anomalyco/opencode/pull/43136

10. **#43135 — Select Azure DeepSeek adapter**
    *[OPEN]* Closes #43106: Azure DeepSeek deployments now use the dedicated `deepseek()` adapter instead of the generic Azure chat adapter, enabling `reasoningEffort` variants.
    https://github.com/anomalyco/opencode/pull/43135

## Feature Request Clusters

- **Workflow automation**: Multiple requests for auto-switching between Plan/Build modes (#7801) and auto-pause/resume on rate-limit resets (#43126) suggest demand for more autonomous session management.
- **Session management**: Requests to unarchive sessions (#24153) and the ability to restore conversation history after endpoint failures indicate UX gaps in session lifecycle.

## Developer Pain Points

- **Windows compatibility**: Repeated issues with path handling, permission configuration, binary extraction, and cmdlet permissions (#36681, #36696, #40623, #41370, #41595). Multiple authors reporting similar problems.
- **MCP tool integration**: Tools connected via MCP but invisible to the agent (#33027), and token refresh race conditions (#43074), point to ongoing maturity issues in the MCP bridge.
- **Endpoint and infrastructure reliability**: Legacy endpoint retirement confusion (#43105), upstream unavailability (#43102), and model-specific failures (DeepSeek loops, Azure adapter selection) are creating unreliable first-run experiences.
- **Billing and usage limits**: Incorrect charging items (#43009) and conversation summarization hitting usage limits prematurely (#41990) suggest gaps in billing transparency and quota management.

</details>