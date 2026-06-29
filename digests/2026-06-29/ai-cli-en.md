# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-29 00:33 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Developer Tools Cross-Tool Comparison Report — 2026-06-29

## 1. Daily Cross-Tool Overview

Today's activity reveals two dominant themes: **cost accounting failures** (OpenAI Codex, Claude Code, Qwen Code) and **subagent/multi-agent reliability gaps** (Gemini CLI, Claude Code, OpenCode). OpenAI Codex saw the highest community engagement—337 upvotes on a single rate-limit bug—while Gemini CLI shipped a nightly security fix and Qwen Code released a patch. Claude Code and OpenCode both reported significant plugin ecosystem friction. Copilot CLI and Kimi Code remained comparatively quiet, with no releases and minimal maintainer engagement. No tool signaled a major new version or breaking change today.

## 2. Activity Comparison

| Tool | New/Updated Issues Today | Active PRs Today | Release Today |
|------|--------------------------|------------------|---------------|
| **Claude Code** | 6 new issues filed | 5 PRs updated | None |
| **OpenAI Codex** | 50 open issues (updated) | 36 PRs updated | None |
| **Gemini CLI** | 50 open issues (updated) | 30 PRs updated | 1 nightly (security fix) |
| **Copilot CLI** | 7 issues updated | 1 PR (closed, trivial) | None |
| **Kimi Code** | 2 issues updated | 0 PRs | None |
| **OpenCode** | 50 issues updated | 50 PRs updated | None |
| **Qwen Code** | 24 issues updated | 41 PRs active | v0.19.3 patch + nightly |

**Notable:** OpenAI Codex and OpenCode share identical open-issue counts (50 each), but OpenCode leads in PR activity (50 vs. 36). Kimi Code is the least active tool by every metric.

## 3. Shared Feature Directions

**Requirements appearing across multiple tool communities today:**

- **Cost safeguards and usage transparency** — Claude Code (#72127, burned 5x plan; #32503, `/usage` failing), OpenAI Codex (#28879, 337👍; #29955, instant quota drain), Qwen Code (#5964, 30M-token zombie session; #5942, Anthropic cache misses). Users across three platforms report financial exposure from opaque cost consumption.

- **Subagent/multi-agent visibility and control** — Claude Code (#72127, Workflow spawning 8-10 parallel agents without confirmation), Gemini CLI (#22323, subagent falsely reports success; #27862, PR to preserve executing subagent tool calls in UI; #21409, generalist agent hangs), OpenCode (#29778, subagent edit permission inheritance fix). The need to see, audit, and limit subagent behavior is shared.

- **Session artifact reuse and handoff** — Claude Code (#72037 PR, handover plugin exporting session context), OpenCode (feature requests for session lifecycle hooks #5409), Qwen Code (#5889, `/loop` task file; #5852 PR, resumable SSE sessions). Tools are converging on structured session output for cross-session and cross-LLM transfer.

- **Sensitive file and secret management** — OpenAI Codex (#2847, 447👍, `.codexignore` request; still the most upvoted feature), Gemini CLI (#26525, secrets sent to models before redaction; #27744, SSRF guard DNS bypass fix), Claude Code (#64301, sandbox escaping `!` but no direct file exclusion request). The threat model differs (sandbox vs. ignore files vs. redaction) but the underlying concern—preventing unintended data exposure—is consistent.

- **Plugin/skill ecosystem friction** — Claude Code (#42142, Desktop missing `/plugin` command; #72162, plugin updates not picked up by reload), OpenCode (#34228, inconsistent skill exposure across sessions; #34356 PR, plugin contribution via SDK). Both tools struggle with lifecycle management and model awareness of installed capabilities.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|----------|-----------|
| **Primary pain point** | Plugin lifecycle & cost surprises | Rate-limit accounting bugs | Agent reliability & subagent hangs | Model compatibility & copy/paste | Token waste & UI regressions |
| **Security approach** | Plugin-based policy gates (protect-mcp PR) | `.codexignore` demanded by community | Deterministic redaction (buggy), SSRF fixes | Plan mode bypass reported | `--insecure` flag, no systematic guardrails yet |
| **Multi-agent model** | Workflow tool spawning parallel agents | Multi-agent mode hint text (PR #30493) | Subagent hierarchy with configurable maxTurns | Subagent permission inheritance | Channel-resident agent (RFC #5888) |
| **Target audience emphasis** | Plugin developers, desktop users | Paid subscribers (Pro/Plus), Windows users | Evaluators and agent chaining | Open-source, self-hosted model users | Local LLM users, Chinese-language market |
| **Release cadence** | Moderate (no release today) | Moderate (no release today, but active PRs) | Nightlies with targeted fixes | High PR throughput, no release | Patch + nightly same day |

**Key differentiators:**
- **OpenAI Codex** is the only tool where a single accounting bug (#28879) dominates all community conversation (337👍, 194 comments). No other tool has this level of concentrated user backlash.
- **Gemini CLI** has the most structured evaluation infrastructure (#24353, 76 tests across 6 models) and the only cross-tool effort to track subagent reliability via explicit bug reports and UI PRs.
- **Qwen Code** is the only tool shipping both a patch and a nightly today, and the only one with a dedicated CI pipeline for automated bug fixing (#5860).
- **Claude Code** has the most active plugin ecosystem development (protect-mcp, handover plugin PRs) but also the most friction around plugin lifecycle management.
- **Kimi Code** and **Copilot CLI** show minimal maintainer engagement; both have critical bugs (infinite loop, proxy block) with months-long open durations.

## 5. Community Activity Notes

**Highest raw issue/PR counts:** OpenAI Codex and OpenCode both show 50 open issues and 36-50 PRs updated. Qwen Code (24 issues, 41 PRs) and Gemini CLI (50 issues, 30 PRs) follow.

**Most urgent community sentiment:** OpenAI Codex's rate-limit bug (#28879) has the strongest reaction (337👍, 194 comments) across all tools. Claude Code's Workflow cost burn (#72127) ranks highest in severity due to direct financial impact. Gemini CLI's generalist agent hang (#21409) is the most upvoted issue on that tool (8👍) but at lower absolute scale.

**Maintainer responsiveness:**
- **Gemini CLI** shows the most active review patterns: `help-wanted` labels on 4 PRs, `priority/p1` on 2 PRs, and closed PRs today (#27744, #28064).
- **OpenCode** has 50 PRs updated, but several are `closed` (e.g., #34356, #29876), suggesting active merging.
- **Qwen Code** merged a patch and has 10 PRs in active review.
- **Claude Code** maintainer responses are "not visible" in issue data per the digest, though 5 PRs were updated.
- **Copilot CLI** and **Kimi Code** have no maintainer responses on current open issues.

**Release activity:** Only Gemini CLI (nightly security fix) and Qwen Code (v0.19.3 patch) released today. All other tools had zero releases.

## 6. Evidence-Backed Observations

1. **Cost accounting bugs are the highest-severity cross-tool concern today.** OpenAI Codex (#28879, #29955, #30002—three separate reports of 10-20× over-consumption), Claude Code (#72127—entire 5x plan burned in ~5 minutes), and Qwen Code (#5964—30M tokens consumed by zombie session) all involve direct financial loss with no user recourse. This is the only issue cluster spanning three tools with concrete financial impact.

2. **Subagent and multi-agent workflows are producing reliability bugs that erode trust in autonomous operation.** Gemini CLI's generalist agent hangs (#21409, upvoted highest on that tool), subagent "success" false reporting (#22323), and shell command "Waiting input" state (#25166) are joined by Claude Code's unbounded parallel agent spawning (#72127) and OpenCode's subagent permission inheritance bug (#29778). The pattern: users cannot rely on subagents to complete tasks, succeed correctly, or stay within cost boundaries.

3. **Cross-platform support is uneven across all tools, with Windows and Linux being the consistent weak spots.** Windows-specific failures include OpenAI Codex sandbox launch (#29072), Claude Code OAuth cert issue (#71766), Copilot CLI path formatting (#3815), and Qwen Code stream parsing (#7692). Linux issues include Claude Code sandbox `!` corruption (#64301) and Gemini CLI Wayland browser failure (#21983). macOS has fewer reports but still sees IDE shortcut interception (Claude Code #39429).

4. **Plugin and skill lifecycle management is an emerging pain point that no tool has fully solved.** Claude Code lacks `/plugin` on Desktop (#42142), plugin updates don't propagate (#72162), and the bundled `claude-api` skill can inject 184k tokens (#72166). OpenCode reports inconsistent skill exposure across sessions (#34228) and has a PR to fix plugin contribution (#34356). The contrast between active plugin development (Claude Code's two new plugin PRs) and broken lifecycle commands suggests the ecosystem is moving faster than the platform tooling.

5. **Token waste and context management is a cross-cutting concern, but solutions are tool-specific and immature.** Qwen Code reports Anthropic cache misses (#5942), full prompt reprocessing (#5736), context-length 400 errors (#5950), and has a PR (#5957) to subtract output from compression thresholds. Claude Code's skill bloat (#72166) and context inspect request (#72035) show same concern. OpenAI Codex's SQLite logging throughput (#28224, 403👍) is a different kind of resource waste but shares the "unexpected consumption" theme. No tool has a systematic solution; fixes are reactive and per-bug.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-29

## Today's Update Brief

Activity was moderate, with 6 new issues filed today and no new releases. A notable cluster of reports around **unexpected cost consumption** (a Workflow tool burning an entire 5x plan silently) and **context‑window debugging** (request for a command to inspect exact context contents) dominated the fresh conversations. Several closed stale issues were updated, but maintainer responses were not visible in the data.

## Hot Issues

1. [#42142 – *Claude Code Desktop Doesn't Have /plugin Command*](https://github.com/anthropics/claude-code/issues/42142)
   **Workflow affected:** Plugin marketplace management on the desktop app.
   **Impact:** Users cannot add plugins, and the model hallucinates about a `/plugin` command that doesn't exist on the desktop.
   **Reaction:** 8 👍, 9 comments — the top‑voted open issue today.

2. [#32503 – */usage command fails with rate_limit_error*](https://github.com/anthropics/claude-code/issues/32503)
   **Workflow affected:** Checking usage and limits.
   **Impact:** The `/usage` dialog opens but immediately errors out, preventing users from monitoring their API consumption.
   **Reaction:** 13 👍, 9 comments.

3. [#70672 – *Granular mouse control options: disable click-selection while preserving scroll*](https://github.com/anthropics/claude-code/issues/70672)
   **Workflow affected:** Linux TUI interaction.
   **Impact:** The recent addition of mouse click support in menus feels intrusive; users want the ability to keep scroll but disable accidental selections.
   **Reaction:** 18 👍 — the most upvoted open feature request today.

4. [#39429 – *macOS system shortcuts (Cmd+H, Cmd+M) not working when Claude panel is focused*](https://github.com/anthropics/claude-code/issues/39429)
   **Workflow affected:** IDE (VSCode) integration on macOS.
   **Impact:** Common window management shortcuts are intercepted and lost, hindering multitasking.
   **Reaction:** 6 👍, 7 comments.

5. [#72127 – *Workflow tool burned entire 5x plan in ~5 minutes with no warning*](https://github.com/anthropics/claude-code/issues/72127)
   **Workflow affected:** Agent‑driven research tasks using Workflow spawning multiple parallel agents.
   **Impact:** A simple request launched 8–10 parallel agents without confirmation, consuming an entire 5x plan in minutes. Cost management is a critical pain point.
   **Reaction:** 3 comments, but high severity due to financial impact.

6. [#72166 – *claude-api skill injects entire ~184k‑token reference in one message*](https://github.com/anthropics/claude-code/issues/72166)
   **Workflow affected:** Using the bundled `claude-api` skill.
   **Impact:** The skill emits its full bundle as a single ~735 KB / 184k‑token user message, breaking the session (cannot even run `/compact`).
   **Reaction:** Closed as duplicate, but highlights systemic skill‑bloating risk.

7. [#64301 – *Bash sandbox (bubblewrap) corrupts `!` to `\!` in commands*](https://github.com/anthropics/claude-code/issues/64301)
   **Workflow affected:** Linux users running agentic workflows with the Bash sandbox enabled.
   **Impact:** Every command with `!` gets backslash‑escaped, making the sandbox effectively unusable for history‑based or shell‑expansion workflows.
   **Reaction:** 2 👍, 2 comments.

8. [#71766 – *OAuth login/refresh fails with UNABLE_TO_GET_ISSUER_CERT*](https://github.com/anthropics/claude-code/issues/71766)
   **Workflow affected:** Authentication on Windows/Linux (new Let’s Encrypt certificate chain).
   **Impact:** Users cannot log in or refresh tokens, blocking all API access from affected platforms.
   **Reaction:** 1 comment, but a regression that can halt usage entirely.

9. [#72162 – *`/plugin marketplace update` + `/reload-plugins` does not pick up pushed plugin changes*](https://github.com/anthropics/claude-code/issues/72162)
   **Workflow affected:** Plugin developers updating their plugins on the marketplace.
   **Impact:** Changes pushed to the marketplace are not reflected after the official update and reload commands, forcing users to restart or manually re‑install.
   **Reaction:** 2 comments.

10. [#61929 – *Claude Code makes major design decisions silently but asks for confirmation on trivial things*](https://github.com/anthropics/claude-code/issues/61929)
    **Workflow affected:** General agentic development.
    **Impact:** The model’s judgment about when to ask permission is inverted — significant architectural choices happen without user input, while trivial confirmations interrupt flow.
    **Reaction:** 6 comments, closed as stale.

## Key PR Progress

Only five pull requests were updated in the last 24 hours. The most notable:

- [#72000 – *docs: update plugin install instructions to recommended installers*](https://github.com/anthropics/claude-code/pull/72000)
  Documentation improvement for plugin setup.

- [#72014 – *Add protect-mcp plugin: fail-closed Cedar policy gate + signed receipts*](https://github.com/anthropics/claude-code/pull/72014)
  A new plugin that blocks MCP tool calls before execution if they violate Cedar policies, and produces offline‑verifiable receipts. Sits alongside the existing `security-guidance` plugin.

- [#72037 – *Add handover plugin: export session context for LLM-to-LLM handoffs*](https://github.com/anthropics/claude-code/pull/72037)
  Exports the current session context as a structured markdown file, intended for transfer to another Claude session or a different LLM.

- [#41447 – *feat: open source claude code ✨*](https://github.com/anthropics/claude-code/pull/41447)
  A long‑standing PR (opened March 31) that claims to close several issues. Still open.

- [#62315 – *Fix hookify event filtering in pre/post hooks*](https://github.com/anthropics/claude-code/pull/62315)
  Closed bugfix for event filtering in the hook system.

## Feature Request Clusters

- **Plugin marketplace and lifecycle management**
  Multiple requests call for better plugin support on Desktop (no `/plugin` command), and for reliable update/refresh mechanisms. (#42142, #72162, #72000 docs PR)

- **Context window transparency**
  Users want a dedicated debug command to inspect the exact content and order of the context window, especially when building custom hooks and orchestration systems. (#72035)

- **Session artifact reuse**
  Two related ideas: saving a finished chat as a reusable skill or agent (#72121) and exporting session context for handoff to another LLM (#72037).

- **Granular input control**
  On Linux, users request the ability to separate mouse‑click selection from mouse‑wheel scrolling in the TUI. (#70672)

- **Cost and usage safeguards**
  Several reports highlight a need for warnings or opt‑in prompts before expensive operations (e.g., Workflow spawning many sub‑agents), and for reliable `/usage` monitoring. (#72127, #32503)

## Developer Pain Points

1. **Cost management blind spots** — `/usage` fails with rate limits; Workflow and agent spawning can silently burn plans without warning. Users feel financially exposed.

2. **Plugin ecosystem confusion** — Desktop app lacks `/plugin` commands; CLI commands for adding MCP servers with environment variables are broken (`claude mcp add -e` still fails, #62332); pushed plugin updates are not picked up by reload commands.

3. **Model judgment inconsistencies** — Inverted confirmation patterns (major decisions taken silently, trivial actions requiring approval) and recent‑context bias (incorrectly resolving ambiguous identifiers) erode trust in autonomous operation.

4. **Platform‑specific regressions** — macOS shortcut interception, Linux sandbox corruption of `!` in commands, Windows OAuth certificate failures, and WSL2 JetBrains lockfile rejection are all unresolved platform issues.

5. **Skill bloat and context pollution** — The bundled `claude-api` skill can inject a ~184k‑token dump in one message, breaking the session entirely. There is no built‑in safeguard against skill content exceeding reasonable context limits.

6. **Security false positives** — Legitimate activities like local telnet debugging or APK analysis are interrupted by safety‑filter blocks, with no easy override mechanism.

*This digest is generated automatically from GitHub data and does not represent official Anthropic communications.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-29

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remains high, with 50 open issues and 36 pull requests updated today. The most discussed topics are a suspected rate-limit accounting bug that drains Pro/Plus budgets in just a few prompts (issue #28879, 337 👍), and a SQLite logging write amplification issue that has already been partially addressed by merged PRs (#28224, 403 👍).

## Releases
None.

---

## Hot Issues (10 selected)

1. **#28879 – Rate-limit cost per token jumped ~10–20x since June 16**
   Plus/Pro users report their 5‑hour budget consumed in 2–3 prompts after June 16. Session logs show per‑token consumption rising 10–20× with no model change.
   *Workflow:* All Codex app usage on `gpt-5.5`. *Impact:* Severe – makes paid plans unusable for many. *Community:* 194 comments, 337 👍.
   [GitHub](https://github.com/openai/codex/issues/28879)

2. **#28224 – SQLite feedback logs can write ~640 TB/year and rapidly consume SSD endurance**
   Identified excessive TRACE‑level logging to `logs.sqlite`. Three PRs were merged that reduced log volume by 85% (released in 0.142.0). Issue now closed by the reporter.
   *Workflow:* All Codex Desktop sessions. *Impact:* High – SSD wear and performance degradation. *Community:* 97 comments, 403 👍.
   [GitHub](https://github.com/openai/codex/issues/28224)

3. **#2847 – Feature request: `.codexignore` for excluding sensitive files**
   Wanted for over a year: a repo‑local and global ignore mechanism to prevent the agent from reading or sending sensitive files (e.g., `.env`, `node_modules` for context only).
   *Workflow:* Sandbox agent interactions. *Impact:* Privacy/security. *Community:* 86 comments, 447 👍.
   [GitHub](https://github.com/openai/codex/issues/2847)

4. **#29955 – 100 credits gone after 1 message, 5h limit reset to 0%**
   Pro*5 user reports instant quota drain after a single message. Similar to #28879.
   *Workflow:* Codex app with Pro*5 subscription. *Impact:* High – immediate denial of service. *Community:* 30 comments.
   [GitHub](https://github.com/openai/codex/issues/29955)

5. **#30002 – Server-side quota accounting over‑reports consumption after reset**
   After a 5‑hour reset, a Pro account burned through the limit in ~41 minutes on only 1.35M tokens (normally ~156M tokens).
   *Workflow:* Pro subscription, `gpt-5.5`. *Impact:* Confirms systematic accounting issue. *Community:* 28 comments.
   [GitHub](https://github.com/openai/codex/issues/30002)

6. **#29072 – Windows sandbox: apply_patch fails because `codex-windows-sandbox-setup.exe` can’t launch from package path**
   Every `apply_patch` call fails with a sandbox launch error on Windows.
   *Workflow:* Codex app on Windows, tool-calls. *Impact:* Blocks code patching on Windows. *Community:* 25 comments.
   [GitHub](https://github.com/openai/codex/issues/29072)

7. **#24510 – Desktop high CPU from unbounded active‑thread metadata**
   Large numbers of threads with heavy metadata (`title`, `preview`) cause sustained high CPU/GPU.
   *Workflow:* Codex Desktop with many concurrent threads. *Impact:* Performance degradation. *Community:* 24 comments.
   [GitHub](https://github.com/openai/codex/issues/24510)

8. **#17320 – Excessive SQLite WAL writes during streaming due to TRACE logs ignoring `RUST_LOG`**
   TRACE logs are written even when `RUST_LOG` does not enable TRACE, causing heavy I/O during streaming responses.
   *Workflow:* IDE extension (VSCode/VSCodium). *Impact:* SSD wear, latency. *Community:* 16 comments, 36 👍.
   [GitHub](https://github.com/openai/codex/issues/17320)

9. **#30364 – GPT-5.5 reasoning‑token clustering at 516/1034/1552 may degrade complex-task performance**
   Anomalous distribution of `reasoning_output_tokens` at fixed boundaries; likely reduces effective reasoning for complex prompts.
   *Workflow:* Codex app using `gpt-5.5`. *Impact:* Model behavior quality. *Community:* 12 comments, 12 👍.
   [GitHub](https://github.com/openai/codex/issues/30364)

10. **#30405 – Windows Codex 26.623 still persists high‑frequency TRACE logs**
    Even after the fixes for #17320 and #28224, TRACE logs continue to be written to `logs_2.sqlite` WAL on Windows.
    *Workflow:* Windows Desktop app. *Impact:* Unresolved I/O waste. *Community:* 6 comments.
    [GitHub](https://github.com/openai/codex/issues/30405)

---

## Key PR Progress (10 selected)

1. **#29740 – Use model metadata for skills usage instructions**
   Adds `include_skills_usage_instructions` metadata field and enables it for `gpt-5.5`. Removes hardcoded model matching.
   [GitHub](https://github.com/openai/codex/pull/29740)

2. **#30492 – Fix slash command popup dismissal**
   After pressing Escape to close a slash‑command popup, the next sync pass reopens it. This PR records the dismissed token and suppresses the popup until the token changes.
   [GitHub](https://github.com/openai/codex/pull/30492)

3. **#30482 – Add “writes” app approval mode**
   New `AppToolApproval` mode: read‑only tools skip approval, all other tools prompt. Configurable via `[apps._default].default_tools_approval_mode`.
   [GitHub](https://github.com/openai/codex/pull/30482)

4. **#30493 – Add configurable multi‑agent mode hint text**
   Allows deployments to set a stable hint text for multi‑agent V2 irrespective of reasoning effort. Feature `features.multi_agent_mode_hint_text`.
   [GitHub](https://github.com/openai/codex/pull/30493)

5. **#30491 – Update safety check links**
   Refreshes Bio/Cyber safety URLs in TUI and adds missing “Learn more” action. Follow‑up to #30317.
   [GitHub](https://github.com/openai/codex/pull/30491)

6. **#30490 – Fix TUI: clear completed safety buffering prompt**
   Previously the safety‑buffering modal remained visible after a turn completed. Now it is cleared automatically.
   [GitHub](https://github.com/openai/codex/pull/30490)

7. **#30487 – Fall back from unsupported reasoning effort**
   If a cross‑thread message sets a reasoning effort (`max`) unsupported by the model (e.g., only supports up to `xhigh`), Codex now falls back gracefully instead of failing.
   [GitHub](https://github.com/openai/codex/pull/30487)

8. **#30488 – Show reset details in redemption picker**
   Loads reset‑credit details (expiry, which credit is consumed) when the user opens the Redeem usage limit reset UI.
   [GitHub](https://github.com/openai/codex/pull/30488)

9. **#30395 – Expose rate‑limit reset credit details via app‑server**
   Adds v2 API fields for available credits, expiry times, and a way to consume a selected credit. Enables the redemption picker in PR #30488.
   [GitHub](https://github.com/openai/codex/pull/30395)

10. **#30480 – Fix TUI: avoid duplicate unicode keyboard input**
    Stops requesting Kitty alternate‑key reporting that Codex does not consume. Fixes duplicate non‑ASCII input in Windows Terminal and Warp.
    [GitHub](https://github.com/openai/codex/pull/30480)

---

## Feature Request Clusters

- **Sensitive file exclusion (#2847, #28969)**
  The most upvoted request (447 👍) is for a `.codexignore` mechanism. A second request asks for a setting to disable the automatic 60‑second auto‑resolve for questions. Both would give users more control over agent context and session flow.

- **Rate‑limit transparency (#28879, #29955, #30002, #30395)**
  Users urgently want detailed, accurate quota information – this is a cluster of both bugs and features. PRs #30488 and #30395 directly address the request for per‑credit expiry and consumption visibility.

- **Multi‑agent control (#30493, #30217, #30228)**
  Multiple PRs improve multi‑agent mode hint text, thread‑selected skill exposure, and agent list pruning. The community has not surfaced explicit feature requests here yet, but the rate of development indicates internal prioritization.

- **Windows sandbox & tool‑call reliability (#29072, #10090, #29427, #30486)**
  Ongoing pain on Windows: sandbox executable launch fails, elevated sandbox causes `(no output)`, and MCP tools (`node_repl`) not exposed. These are bug reports that double as feature requests for robust Windows support.

---

## Developer Pain Points

- **Rate‑limit accounting bugs** dominate the conversation: multiple reports of 10–20× over‑consumption, instant quota exhaustion, and server‑side over‑reporting. This is the single most disruptive issue for paying users.
- **SQLite logging overhead** continues to frustrate even after partial fixes: TRACE logs bypass `RUST_LOG` and still write heavy WAL files on Windows (#30405, #17320, #28224).
- **Windows‑specific sandbox and path issues** cause frequent failures for Windows users: sandbox setup fails, Git `@{u}` parsed as hashtable by PowerShell, and stale `\\?\` path mismatches block automations.
- **Performance regressions**: high CPU from unbounded thread metadata (#24510) and disabled Git review UI (#30484) are unexplained degradations.
- **Reasoning token clustering (#30364)** raises concerns about model quality – the fixed‑boundary pattern may limit complex reasoning for GPT‑5.5 users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-29

## Today's Update Brief

Activity remains high with 50 open issues and 30 PRs updated in the last 24 hours. A single nightly release shipped a security fix for the sensitive path blocklist. The community continues to report agent reliability problems, while maintainers are actively reviewing several PRs targeting subagent UI visibility, A2A server stability, and terminal interaction fixes.

## Releases

**v0.51.0-nightly.20260628.gae0a3aa7b** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260628.gae0a3aa7b)
- **Security fix:** Enforces case-insensitive matching for sensitive path blocklist and VS Code HITL (human-in-the-loop) pathways
- Only one change; no new feature work in this nightly

## Hot Issues

1. **#22323 – Subagent falsely reports GOAL success after hitting MAX_TURNS** — The `codebase_investigator` agent reports `status: "success"` when it actually hit the turn limit before doing any work. This masks real interruptions from users and evals. 8 comments, 2 👍. [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#19873 – Leverage model's bash affinity via zero-dependency OS sandboxing** — Epic proposing that Gemini 3 models' native bash capabilities be exposed through sandboxed execution with post-execution intent routing. Aims to let the model chain POSIX tools securely. 8 comments, 1 👍. [Issue](https://github.com/google-gemini/gemini-cli/issues/19873)

3. **#24353 – Robust component-level evaluations** — Tracks expansion of the behavioral eval framework (originally #15300) which now has 76 tests across 6 Gemini models. Requests more structured component-level evaluation infrastructure. 7 comments. [Issue](https://github.com/google-gemini/gemini-cli/issues/24353)

4. **#22745 – Assess AST-aware file reads, search, and mapping** — Investigates whether AST-aware tools could reduce token usage and turn counts by reading precise method bounds instead of whole files. 7 comments, 1 👍. [Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#21409 – Generalist agent hangs indefinitely** — The generalist subagent hangs forever on simple tasks like folder creation. Users report waiting up to an hour before cancelling. Workaround: instructing the model not to use subagents. 7 comments, 8 👍 (highest reaction count). [Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

6. **#21968 – Gemini underuses custom skills and subagents** — Users report that the model does not invoke custom skills (e.g., gradle, git) unless explicitly instructed, even when the task is clearly related. 6 comments. [Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **#26525 / #26522 / #26523 – Auto Memory quality issues** — Three related bugs from @SandyTao520: (a) secrets are sent to models before redaction, (b) low-signal sessions are retried indefinitely, (c) invalid memory patches are silently skipped. 5 comments each. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)

8. **#25166 – Shell command hangs with "Waiting input" after completion** — Simple shell commands (no interactive prompts) remain stuck in "Awaiting user input" state after finishing. 4 comments, 3 👍. [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **#21983 – Browser subagent fails on Wayland** — The browser agent fails with "Termination Reason: GOAL" but provides no useful output on Wayland systems. 4 comments, 1 👍. [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

10. **#24246 – 400 error when >128 tools available** — Gemini CLI returns a 400 error when more than 128 tools are enabled, suggesting the agent needs smarter tool scoping. 3 comments. [Issue](https://github.com/google-gemini/gemini-cli/issues/24246)

## Key PR Progress

1. **#28192 – Bump lint-staged 16.1.6 → 17.0.8** — Dependabot update (open). [PR](https://github.com/google-gemini/gemini-cli/pull/28192)

2. **#28191 – Bump @google/genai 1.30.0 → 2.9.0** — Major version bump for the GenAI SDK (closed/merged). [PR](https://github.com/google-gemini/gemini-cli/pull/28191)

3. **#27754 – Fix A2A server crash on 501 response** — Adds missing `return` after sending 501 in `/tasks/metadata` endpoint, preventing `ERR_HTTP_HEADERS_SENT` crash. Help wanted, 1 comment. [PR](https://github.com/google-gemini/gemini-cli/pull/27754)

4. **#27755 – Migrate A2A tests to vi.stubEnv()** — Replaces direct `process.env` mutations in A2A server tests with vitest's `vi.stubEnv()` per project conventions. Help wanted. [PR](https://github.com/google-gemini/gemini-cli/pull/27755)

5. **#27860 – Fix slash-command conflict deduplication** — Ensures that resolved-then-reappearing conflicts are re-notified, rather than being permanently suppressed. Help wanted. [PR](https://github.com/google-gemini/gemini-cli/pull/27860)

6. **#27863 – Prioritize structured display titles in tool invocation** — Fixes tool invocation output to prefer structured display titles over raw function names. Priority/p1, help wanted. [PR](https://github.com/google-gemini/gemini-cli/pull/27863)

7. **#27862 – Preserve executing subagent tool calls in UI** — Ensures subagent tool calls remain visible in the UI while executing, rather than disappearing. Help wanted. [PR](https://github.com/google-gemini/gemini-cli/pull/27862)

8. **#27744 – Fix SSRF guard DNS bypass** — Resolves DNS before checking SSRF blocklist, preventing hostnames like `127.0.0.1.nip.io` from bypassing private IP guards. Closed. [PR](https://github.com/google-gemini/gemini-cli/pull/27744)

9. **#28064 – Document `ask` decision in BeforeTool hook** — Updates hooks reference to document that `BeforeTool` supports `decision: "ask"` to force user confirmation. Closed. [PR](https://github.com/google-gemini/gemini-cli/pull/28064)

10. **#28183 – Preserve terminal focus when closing VS Code diff tabs** — Prevents the VS Code companion extension from stealing keyboard focus from the integrated terminal after approving file edits. Priority/p1, open. [PR](https://github.com/google-gemini/gemini-cli/pull/28183)

## Feature Request Clusters

**Agent self-awareness and introspection** — Multiple requests ask the agent to understand its own capabilities, hotkeys, CLI flags, and when it should or should not delegate to subagents. Users want the model to act as its own expert guide (#21432, #21968).

**AST-aware code tooling** — Two related epics (#22745, #22746) explore using AST-aware reads, search, and codebase mapping to reduce token usage and turn count. Proposes tools like tilth or glyph for precise method-boundary reads.

**Memory system improvements** — Three related issues (#26516, #26522, #26523, #26525) request deterministic redaction, retry limits for low-signal sessions, and better handling of invalid memory patches. Users want the Auto Memory system to be more transparent and less aggressive.

**Subagent visibility and debuggability** — Users want subagent trajectories visible in `/chat share` (#22598), included in `/bug` reports (#21763), and preserved in the UI during execution (#27862).

**Security and destructive behavior guardrails** — Requests to block dangerous git operations (#22672), improve SSRF protection (#27744), and add deterministic secret redaction before model context (#26525).

## Developer Pain Points

**Agent reliability remains the top frustration.** The generalist agent hanging (#21409), subagents falsely reporting success after hitting limits (#22323), and shell commands stuck in "Waiting input" (#25166) are recurring, high-signal issues affecting daily workflows.

**Subagent configuration inconsistencies.** Users report subagents running despite being disabled in settings (#22093), ignoring `settings.json` overrides like `maxTurns` (#22267), and failing on Wayland (#21983). The symlink agent discovery bug (#20079) further complicates custom agent setup.

**Memory system opacity.** The Auto Memory feature silently retries low-signal sessions (#26522), skips invalid patches without feedback (#26523), and sends sensitive content to models before redaction (#26525). Developers want better visibility and control over what gets remembered.

**Terminal and UI glitches.** Corruption after exiting external editors (#24935), high-performance flicker on terminal resize (#21924), and the `get-shit-done` output hook crash (#22186) indicate ongoing polish work needed in the interactive experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## Copilot CLI Community Digest — 2026-06-29

### 1. Today’s Update Brief
No new releases were published in the last 24 hours. Seven issues and one pull request were updated, highlighting persistent bugs around proxy networking, terminal output handling, and system stability, alongside several feature requests for session management improvements.

### 2. Releases
None in the last 24 hours.

### 3. Hot Issues
1. **#2978** – `session.create` fails with "fetch failed" in SDK headless mode behind corporate proxy.
   *Affected workflow:* Using `@github/copilot-sdk` v0.3.0 (CLI v1.0.36) in headless mode behind an HTTP proxy. The CLI receives proxy env vars, but `undici` fails to reach `api.github.com`.
   *Impact:* Blocked for enterprise users in proxied environments. No maintainer response yet.
   [GitHub](https://github.com/github/copilot-cli/issues/2978)

2. **#3964** (Closed) – Copying soft-wrapped output still drops space at wrap boundary on v1.0.65.
   *Affected workflow:* Selecting and copying text from terminal output that wraps lines. Words at wrap points get glued together.
   *Impact:* Incomplete fix of #3666, users report the bug persists after update. Closed as fixed but likely needs re‑opening.
   [GitHub](https://github.com/github/copilot-cli/issues/3964)

3. **#3971** – Feature Request: Full file‑tree browser for repository‑backed sessions.
   *Affected workflow:* Repository‑backed sessions only show a git Changes view; users want the same file‑tree panel that folder‑backed sessions provide.
   *Reaction:* New issue, no comments yet.
   [GitHub](https://github.com/github/copilot-cli/issues/3971)

4. **#3970** – Feature Request: User‑defined tags on sessions (searchable and filterable).
   *Affected workflow:* Managing many sessions across features/repos without a way to categorize beyond name.
   *Reaction:* New feature request, no discussion yet.
   [GitHub](https://github.com/github/copilot-cli/issues/3970)

5. **#3969** – Feature Request: Plan status indicators (badge/symbol) on session list items.
   *Affected workflow:* No visual cue for the stage of each session’s plan; requires opening each session to check.
   *Reaction:* New request, no comments.
   [GitHub](https://github.com/github/copilot-cli/issues/3969)

6. **#3967** – Copilot disappeared while working in two terminals; now reports "not installed" on Ubuntu 24.04.
   *Affected workflow:* User lost access mid‑session, likely due to an installation path or environment issue. No details on recovery.
   *Reaction:* New bug, no maintainer response.
   [GitHub](https://github.com/github/copilot-cli/issues/3967)

7. **#3815** – Debug logs saved to location missing a `\` on Windows.
   *Affected workflow:* Copying the log path from the output causes an invalid path when pasted into Windows Explorer.
   *Impact:* Minor UX bug, open since 2026-06-15.
   [GitHub](https://github.com/github/copilot-cli/issues/3815)

### 4. Key PR Progress
1. **#3968** (Closed) – Rename changelog.md to changelog.md.
   A trivial PR that appears to be a mistake (identical file names). No discussion or maintainer action.
   [GitHub](https://github.com/github/copilot-cli/pull/3968)

### 5. Feature Request Clusters
- **Session Navigation & Organization**
  Three requests target session management: a full file‑tree browser for repository sessions (#3971), user‑defined tags for filtering (#3970), and plan‑status badges on session list items (#3969). These suggest users are scaling their usage and need better visual cues and categorization.

### 6. Developer Pain Points
- **Proxy/Networking Blockers** – #2978 remains a critical issue for enterprise users relying on corporate proxies. No fix or workaround has been provided.
- **Output Copy Bugs** – #3964 shows that soft‑wrap copy issues persist across versions, affecting everyday terminal interaction.
- **Stability & Environment Issues** – #3967 (disappearing installation on Ubuntu) and #3815 (Windows path formatting) highlight cross‑platform reliability gaps.
- **Low Maintainer Engagement** – Most open issues lack maintainer responses or triage labels, leaving community‐reported bugs unresolved.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-29

## Today's Update Brief

GitHub activity was very low today. No new releases or pull requests were published, and only two open issues received updates. Both issues are lingering bugs — one causing infinite file-reading loops and the other reporting high memory consumption in the VS Code extension — with the most recent comments occurring on June 28.

## Releases

None.

## Hot Issues

Only two issues were updated in the last 24 hours; both are covered below.

1. **[Bug] Kimi CLI stuck in reading one file again and again and stuck in a loop**
   [#640](https://github.com/MoonshotAI/kimi-cli/issues/640)
   **Author:** [@isbafatima90-arch](https://github.com/isbafatima90-arch) | **Created:** 2026-01-19 | **Updated:** 2026-06-28 | **Comments:** 15 | **👍:** 1
   **Affected workflow:** Running Kimi CLI v0.76 with a custom Anthropic endpoint (`mimo-v2-flash` model) on Arch Linux. The CLI enters an infinite loop repeatedly reading the same file without progressing.
   **Impact:** Blocks any file-based analysis or processing; user cannot interrupt the process.
   **Community reaction:** 15 comments suggesting workarounds (restart, configuration changes) but no maintainer fix yet. The issue has been open for 5 months with sporadic activity.

2. **[Bug] kimi code vscode 插件很耗内存 / Kimi code VS Code plug-in consumes a lot of memory**
   [#1592](https://github.com/MoonshotAI/kimi-cli/issues/1592)
   **Author:** [@xiaochonzi](https://github.com/xiaochonzi) | **Created:** 2026-03-26 | **Updated:** 2026-06-28 | **Comments:** 1 | **👍:** 0
   **Affected workflow:** Running the Kimi Code VS Code extension (v0.4.5) on macOS (Darwin 23.6.0, arm64). After executing a long task, memory usage grows excessively, degrading editor performance.
   **Impact:** Users may experience system slowdowns or forced restarts of VS Code.
   **Community reaction:** Only one comment; no maintainer response yet.

## Key PR Progress

None.

## Feature Request Clusters

No new feature requests were observed in today’s data. The two updated issues are strictly bug reports, not feature proposals. No clustering is possible.

## Developer Pain Points

- **Infinite loop bug (Issue #640):** A persistent bug that renders the CLI unusable for certain custom endpoint configurations. The long open duration (5 months) and lack of resolution may erode trust in the tool’s reliability.
- **Memory leak in VS Code extension (Issue #1592):** High memory consumption during long tasks affects developer workflow, especially on memory-constrained machines. The single comment suggests low community engagement on this issue, but it represents a significant usability concern.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-29

## Today’s Update Brief
No releases were published in the last 24 hours. The community remained highly active, with 50 issues and 50 pull requests updated — covering model compatibility bugs (Gemma-4, MiniMax, Zhipu), subscription activation failures, and a long‑standing request for Cursor CLI integration. Several important fixes landed for the TUI, MCP OAuth flow, and desktop session cost display.

## Releases
None.

## Hot Issues

1. **[#2072 – Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)**
   *74 comments, 186 👍*
   User request to support Cursor’s CLI as a provider. The API is undocumented and likely not public, but the huge reaction signals strong demand. *Status: open.*

2. **[#13984 – Can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984)**
   *50 comments, 23 👍*
   Clipboard operations fail – “copied to clipboard” message appears but paste yields nothing. Affects core editor workflow across platforms. *Status: open.*

3. **[#21034 – Gemma-4-26b and Gemma-4-31b interaction issues leading to tool loops/failures](https://github.com/anomalyco/opencode/issues/21034)**
   *19 comments, 20 👍*
   Even with latest tokenizer fixes and engines (LM Studio 0.4.9, llama.cpp 2.11.0), Gemma-4 models are unusable in OpenCode. *Status: open.*

4. **[#7692 – [Bug, Windows] JSON Parse Error with Zhipu GLM-4.7: stream chunks concatenated incorrectly](https://github.com/anomalyco/opencode/issues/7692)**
   *13 comments, 3 👍*
   Streaming parser fails on chunk boundaries, producing invalid JSON. *Status: closed — fix likely included in a recent build.*

5. **[#5565 – Every so often the agent/model starts returning weird stuff](https://github.com/anomalyco/opencode/issues/5565)**
   *12 comments*
   Intermittent gibberish output – user suspects injected code/repo corruption. Hard to reproduce but concerning. *Status: closed.*

6. **[#26772 – [FEATURE] Integrated browser for desktop](https://github.com/anomalyco/opencode/issues/26772)**
   *10 comments, 3 👍*
   Request to embed a browser workspace for inspecting and interacting with local dev servers. *Status: open.*

7. **[#32420 – Paid Go subscription — charged but not activated (bug confirmed by many)](https://github.com/anomalyco/opencode/issues/32420)**
   *10 comments*
   Users report being charged $10 for OpenCode Go but subscription remains inactive; API keys fail and email support unreachable. Referenced multiple identical reports (#32153). *Status: closed.*

8. **[#34228 – Bug: opencode exposes an unstable, incomplete subset of project skills to the model](https://github.com/anomalyco/opencode/issues/34228)**
   *8 comments*
   With 35 valid skills configured, the model sees an inconsistent subset between sessions, breaking reproducibility. *Status: closed.*

9. **[#30680 – OpenCode immediately enters auto-compaction loop and stops generating responses](https://github.com/anomalyco/opencode/issues/30680)**
   *8 comments*
   Auto‑compaction triggers repeatedly, consuming tokens and eventually freezing responses – occurs even in empty folders. *Status: closed.*

10. **[#33399 – opencode utilization at 99-100% randomly – opencode unresponsive](https://github.com/anomalyco/opencode/issues/33399)**
    *7 comments*
    Random CPU spikes to 100% make the CLI unresponsive to keyboard input. Not present before version 1.3.3. *Status: open.*

## Key PR Progress

1. **[#34356 – feat(sdk-next): let embedders contribute plugins via `opencode.plugin`](https://github.com/anomalyco/opencode/pull/34356)**
   *Closed* – Allows embedded SDK users to register plugins through the ordinary discovery flow instead of a side channel. Enables agent transforms and custom updaters.

2. **[#34336 – feat(core): add v2 manual compaction](https://github.com/anomalyco/opencode/pull/34336)**
   *Open* – Implements manual session compaction via the existing compact endpoint, sharing logic with automatic compaction. Includes tests and generated client updates.

3. **[#29876 – fix(tui): integrate ServerAuth headers into transport configuration for external served TUI thread](https://github.com/anomalyco/opencode/pull/29876)**
   *Closed* – Fixes `OPENCODE_SERVER_PASSWORD` breaking TUI with `--mdns` or `--hostname`. Restricts external mode to explicit CLI flags.

4. **[#34355 – fix(app): suppress middle-click tab auxclick](https://github.com/anomalyco/opencode/pull/34355)**
   *Open* – Prevents unintended middle‑button actions after closing a titlebar tab via mousedown. Adds document‑level coverage and gesture tests.

5. **[#34352 – fix(app): register export logs globally](https://github.com/anomalyco/opencode/pull/34352)**
   *Open* – Moves `logs.export` into the shared app command registration so it works outside the legacy layout. Regression test included.

6. **[#34353 – fix(core): fallback to ripgrep when fff fails](https://github.com/anomalyco/opencode/pull/34353)**
   *Open* – Preserves file search functionality when `fff` initialisation fails by reusing ripgrep. Prevents silent empty search results.

7. **[#30849 – fix(opencode): strip MiniMax trailing tool_call leak suffix](https://github.com/anomalyco/opencode/pull/30849)**
   *Open* – Adds a sanitizer for MiniMax responses that leak a tool‑call marker suffix at the end of assistant text.

8. **[#34351 – fix(app): wrap `model.set` in `startTransition`](https://github.com/anomalyco/opencode/pull/34351)**
   *Closed* – Defers model changes as a non‑urgent Solid transition, keeping the desktop UI responsive during provider switches.

9. **[#29778 – fix(opencode): granular subagent edit permission inheritance](https://github.com/anomalyco/opencode/pull/29778)**
   *Closed* – Fixes over‑aggressive deny‑rule inheritance in subagents, restoring expected permissions.

10. **[#28887 – feat(desktop): Display stored totals for Tokens and Cost in Desktop Session Context](https://github.com/anomalyco/opencode/pull/28887)**
    *Closed* – Resolves the issue where session cost/token totals changed depending on scroll position, by using stored aggregated values.

## Feature Request Clusters

- **IDE / Editor Integration**
  Strong push for Cursor CLI support (#2072) and compatibility with `.claude/CLAUDE.md` project files (#17436).

- **In-App Browser & Preview**
  Multiple users request an embedded browser for local dev server inspection – as a standalone workspace (#26772) or with visual click‑to‑edit like Codex (#30755). A PR (#19038) has already been merged to add a basic browser.

- **Configuration & Hooks**
  Recurring calls for session lifecycle hooks – e.g. `SessionStart` (#5409) – and progressive loading of `AGENTS.md` files from read tool calls (#34341).

- **Utilities**
  Request for a request log viewer (#34330) to browse and copy past interaction text.

- **Model Provider Enhancements**
  Users ask for improved handling of reasoning models (NVIDIA NIM DeepSeek v4 #24264), updated Elixir language server (#15512), and deeper support for Gemma‑4 (#21034).

## Developer Pain Points

- **Model‑Specific Failures** – Gemma‑4 causes tool loops (#21034), MiniMax leaks tool‑call suffixes (#30849), Zhipu GLM‑4.7 breaks streaming on Windows (#7692), and NVIDIA NIM reasoning models hang without extra `chat_template_kwargs` (#24264).
- **Performance & Stability** – Random 100% CPU usage (#33399) and auto‑compaction loops (#30680) render the CLI unresponsive.
- **Subscription & Billing Bugs** – Paid Go subscriptions charged but not activated (#32420) and a separate report of slow/failed responses on Go (#34347) erode trust in monetisation.
- **Copy / Paste Failure** – Clipboard not working in the CLI (#13984) blocks a fundamental workflow.
- **Session and Config Inconsistencies** – Skills exposed to the model change between sessions (#34228), switching models mid‑session crashes with a SQLite constraint error (#31606), and the desktop app shows wrong cost totals until scrolling (#28836).
- **Security Gaps** – Agents in Plan mode bypass restrictions to execute commands like `gh issue comment` (#34190).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-29

## 1. Today's Update Brief

A patch release v0.19.3 went out last night with a single core fix for `web_fetch` JSON fallback, while nightly builds continue to track the same change. The issue tracker saw 24 updated items, with several high‑priority bugs reported around token waste (zombie sessions burning 30k tokens, Anthropic cache misses) and UI regressions (Chinese input failure, terminal overwriting, scroll jumps). 41 pull requests are active, including a multiplayer channel agent RFC, auto‑update command, and a fix for context‑length overflow.

## 2. Releases

- **[v0.19.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3)** — Patch release. Fixes `web_fetch` to fall back to JSON parsing when the response is not valid plain text.
- **[v0.19.2-nightly.20260628.714513df2](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260628.714513df2)** — Nightly build, same fix as v0.19.3.

No other version changes in the last 24 hours.

## 3. Hot Issues (10)

1. **#5736** – [Full prompt reprocessing in recent update?](https://github.com/QwenLM/qwen-code/issues/5736)
   *User reports that after updating, local LLM forces a full prompt re‑process on almost every continuation step. 7 comments, no maintainer resolution yet.*
   **Affected workflow:** Local LLM users with llama.cpp – increased latency and token usage.

2. **#5800** – [CLI: last line of tall replies overwritten on completion](https://github.com/QwenLM/qwen-code/issues/5800)
   *In default Static mode, the final line of a multi‑page assistant reply disappears as soon as generation finishes. Upstream Ink bug #973.*
   **Impact:** Reply truncation in standard CLI mode; 6 comments, labelled `welcome-pr`.

3. **#5837** – [Agent response cut off mid‑stream](https://github.com/QwenLM/qwen-code/issues/5837)
   *Agent reply stops after “Dependencies added:” although debug logs show the full content. Screenshot attached.*
   **Affected workflow:** Agent mode users (likely Windows). 6 comments, `need-information`.

4. **#5683** – [Subagent token counting accuracy issue](https://github.com/QwenLM/qwen-code/issues/5683)
   *Sub‑agent token consumption shown as 29xx k tokens, far exceeding the allowed limit without any error.*
   **Impact:** Token over‑counting (or genuine over‑consumption) undermines budget monitoring. 4 comments.

5. **#5964** – [Zombie session burns 30M tokens overnight](https://github.com/QwenLM/qwen-code/issues/5964)
   *A zombie agent ran for 8 hours unattended, consuming DeepSeek balance. The session lacked a timeout log and auto‑disconnect.*
   **Severity:** P1; user funds drained silently. 3 comments, `need-retesting`.

6. **#5942** – [Anthropic provider: avoidable prompt‑cache misses inflate cost](https://github.com/QwenLM/qwen-code/issues/5942)
   *Side‑queries use a different prefix; conversation breakpoint sits on the moving last message. Claude Code does not suffer this.*
   **Impact:** Higher cost for Anthropic‑backed users. 3 comments.

7. **#5950** – [400 error: context length exceeded](https://github.com/QwenLM/qwen-code/issues/5950)
   *Request rejected because tokens (text+tool+output) exceeded 131k limit. User asks for better error handling or auto‑compression.*
   **Affected workflow:** Long sessions with high `max_tokens`. 3 comments.

8. **#5958** – [Web Shell input editor not working on mobile browsers](https://github.com/QwenLM/qwen-code/issues/5958)
   *CodeMirror fails on iOS Safari / Android Chrome when using `qwen serve`. Input field is non‑functional.*
   **Impact:** Mobile users cannot use the web shell. 3 comments, `welcome-pr`.

9. **#5966** – [UI intermittent Chinese input failure](https://github.com/QwenLM/qwen-code/issues/5966)
   *Chinese IME stops working periodically, forcing user to type only pinyin. No error logged.*
   **Affected workflow:** Chinese‑language users (v0.19.3). 2 comments, `need-information`.

10. **#5941** – [Scroll wheel jumps to top during generation](https://github.com/QwenLM/qwen-code/issues/5941)
    *Scrolling up one tick while output is streaming teleports to the top of the terminal.*
    **Impact:** Loss of reading position. 3 comments, `welcome-pr`.

## 4. Key PR Progress (10)

1. **[#5888](https://github.com/QwenLM/qwen-code/pull/5888)** – `feat(channels): qwen tag — RFC + Phase 0 (multiplayer channel‑resident agent)`
   *Introduces a channel‑resident agent that lives in chat groups (DingTalk first), built on existing channel adapters and daemon. Includes RFC and first implementation phase.*

2. **[#5780](https://github.com/QwenLM/qwen-code/pull/5780)** – `feat: add qwen update and /update commands with auto‑update support`
   *Adds CLI `qwen update` and slash command `/update` to check and install new releases automatically (standalone) or guide manual update (npm).*

3. **[#5791](https://github.com/QwenLM/qwen-code/pull/5791)** – `fix(cli): auto‑select custom input on Enter in multi‑select questions`
   *Fixes a UX bug where pressing Enter in a multi‑select prompt didn’t activate the “custom” option.*

4. **[#5963](https://github.com/QwenLM/qwen-code/pull/5963)** – `fix(core): only spawn memory recall when auto‑memory is enabled`
   *Prevents unnecessary memory recall calls when the auto‑memory feature is turned off.*

5. **[#5928](https://github.com/QwenLM/qwen-code/pull/5928)** – `feat(config): add todosDirectory setting for project‑local todo persistence`
   *Allows users to store todos inside the project directory (e.g. `.qwen/todos`) so they can be git‑committed and synced.*

6. **[#5852](https://github.com/QwenLM/qwen-code/pull/5852)** – `feat(daemon,sdk): resumable /acp session stream (Last‑Event‑ID)`
   *Wires SSE `id:` lines into session events so a reconnect can resume from the last delivered event.*

7. **[#5890](https://github.com/QwenLM/qwen-code/pull/5890)** – `feat(loop): inject a .qwen/loop.md task file at fire time via sentinels`
   *Adds durable task list support for `/loop` – model can read/write a Markdown file that survives across ticks.*

8. **[#5860](https://github.com/QwenLM/qwen-code/pull/5860)** – `ci(autofix): loosen issue candidate filters so the agent finds work`
   *Fixes the automated bug‑fixing CI pipeline that was always finding zero candidates.*

9. **[#5738](https://github.com/QwenLM/qwen-code/pull/5738)** – `fix(cli): default to virtualized terminal history`
   *Turns in‑app scrollable history on by default for new users; can still be disabled via `ui.useTerminalBuffer`.*

10. **[#5957](https://github.com/QwenLM/qwen-code/pull/5957)** – `fix(core): subtract reserved output tokens from context window for compression thresholds`
    *Prevents auto‑compression from ignoring the output budget, which caused 400 errors when `max_tokens` was large (e.g. 64K).*

## 5. Feature Request Clusters

Several recurring themes emerged from issues and PR discussions this week:

- **Session Management & Continuity**
  Multiple requests for smarter session resumption (#4679, #5030), durable loop tasks (#5889, #5890), and a proper `/new` fix (#5949). Users want uninterrupted turn continuation without synthetic “continue” messages.

- **Model Switching & Compaction**
  #5967 proposes an inline `/model <id> <prompt>` command. #5956 asks for a separate compaction model to avoid burning expensive context on summarization. Both reflect a desire for finer control over which model handles which phase.

- **Voice Dictation**
  #5796 and #5856 request bringing voice input (currently CLI‑only) to the web shell and desktop UI. The desktop PR #5856 was merged today.

- **Configuration & Security**
  #5962 adds an `--insecure` flag to skip TLS verification for self‑signed endpoints. #5928 adds `todosDirectory`. #5847 introduces runtime context injection for per‑turn system reminders. These show demand for local‑friendly and customizable setups.

- **Performance & Cost**
  #5942 (Anthropic cache misses), #5950 (context length overflow), #5736 (full prompt reprocessing) all point to token waste. Automated compaction improvements (#5957) are being merged, but users still report unexpected costs.

## 6. Developer Pain Points

- **Token Waste** is the loudest theme: zombie sessions burning 30M tokens (#5964), avoidable Anthropic cache misses (#5942), context‑length 400 errors (#5950), and subagent counting inaccuracies (#5683). Many of these involve API cost surprises, especially for pay‑per‑token backends.

- **UI Regressions** plague the latest releases: Chinese IME stops working (#5966), scroll wheel jumps to top (#5941), last line of output hidden (#5800), mobile web shell broken (#5958), and `/new` sometimes not working (#5949). Users express frustration with “Node.js” specifically in one report.

- **Configuration Surprises** – #5819 (model auto‑upgraded to expensive tier after update) and #5680 (session timeout accepting invalid values) indicate that setting changes can silently affect behavior or waste money.

- **Accuracy & Trust** – Statusline context percentage is known to be inaccurate (#4025), and subagent token counting is off (#5683). Users cannot rely on these UI hints to manage context usage.

- **No Maintainer Responses** – Several open bugs (e.g., #5736, #5837, #5966) have multiple comments but no official resolution or even a triage note, which may compound frustration.

</details>