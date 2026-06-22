# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-22 00:36 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Community Comparison — 2026-06-22

## 1. Daily Cross-Tool Overview

Today saw three rapid-fire alpha releases from OpenAI Codex and a minor patch from Qwen Code, while OpenCode and Qwen Code led in pull-request volume (46–50 updated each). Claude Code and Gemini CLI had no releases, with low PR activity. Community discussion centered on API reliability, Windows platform gaps, and session state fragility across multiple tools. GitHub Copilot CLI and Kimi Code CLI showed minimal activity; Kimi had no updates at all.

---

## 2. Activity Comparison

| Tool               | Issues Updated (today) | PRs Updated (today) | Releases (today) |
|--------------------|------------------------|----------------------|-------------------|
| Claude Code        | ~10 (hot issues)       | 2                    | 0                 |
| OpenAI Codex       | 50                     | 39                   | 3 (alpha)         |
| Gemini CLI         | 30                     | 18                   | 0                 |
| GitHub Copilot CLI | 10                     | 1 (likely spam)      | 0                 |
| Kimi Code CLI      | 0                      | 0                    | 0                 |
| OpenCode           | 50                     | 50                   | 0                 |
| Qwen Code          | 21 (closed) + open     | 46                   | 1 (v0.18.5)       |

*Note: Issue/PR counts are as reported in each digest. Claude Code digest listed only hot issues, not a total count.*

---

## 3. Shared Feature Directions

**1. Windows platform parity** – Every tool with significant activity today had Windows-specific issues reported.
- **Claude Code**: Windows sandbox missing (#46740), “Server is busy” error (#52765), directory navigation bugs (#54461).
- **OpenAI Codex**: Standalone installer request (#13993, 74 comments), WSL agent failure (#16815), sandbox regressions (#26158, #29178).
- **GitHub Copilot CLI**: ARM64 crash (#3687), no standalone installer (implied by other issues).
- **OpenCode**: TUI crash on Windows (#32706), CORS preflight routing (#31041).
- **Qwen Code**: Path handling bugs (trailing separators, UNC paths, sibling directory confusion) fixed today.

**2. Session reliability and recovery** – Multiple tools reported bugs where sessions fail silently, hang, or corrupt state.
- **Claude Code**: Model silently switches mid-session (#69772), OAuth corruption on transient errors (#61912).
- **OpenAI Codex**: Context exhaustion on fresh threads (#9046), aggressive compaction (#29330).
- **Gemini CLI**: Subagent false success on MAX_TURNS (#22323), generalist agent hangs (#21409).
- **OpenCode**: Kernel panic on macOS (#32002), agent ignores instructions (#33216).
- **Qwen Code**: Repetitive identical tool calls terminating sessions (#5019), resume truncation (#5555).

**3. Billing and cost transparency** – Commercial tools face user backlash over pricing changes and opaque cost metrics.
- **OpenAI Codex**: Rate-limit cost spike 10–20× (#28879, most commented issue today).
- **GitHub Copilot CLI**: Quota subtraction error (5% instead of 2%, #3881), request for OpenTelemetry cost metrics (#3778).
- No analogous reports from open-source tools (OpenCode, Qwen Code), which use user-provided API keys.

**4. MCP ecosystem improvements** – PRs and issues across tools indicate active investment in MCP protocol support.
- **Claude Code**: HTTP MCP connector fails with Atlassian (#69035).
- **Gemini CLI**: PRs for MCP OAuth refresh (#27889), MIME type sniffing (#27878), schema normalization (#27888).
- **OpenCode**: PR for MCP resource subscription API (#29355), cap on tool count to avoid 500 errors (#32998).
- **Qwen Code**: PR for MCP server hot-reload on settings change (#5561).

**5. Auto-approval and safety modes** – Power-user demand for faster approval flows contrasts with safety concerns.
- **OpenCode**: YOLO mode PR (#33279) and feature request (#11831) – auto-approve all permission prompts with explicit deny rules.
- **Qwen Code**: Bug where `exit_plan_mode` auto-executes without confirmation (#5574) – a safety regression.

---

## 4. Differentiation Analysis

| Tool             | Primary Focus Area Today                                | Target User Signal                                    |
|------------------|----------------------------------------------------------|-------------------------------------------------------|
| Claude Code      | API reliability, multi-account profile switching        | Professional users managing multiple orgs/identities  |
| OpenAI Codex     | Cost regression, Windows sandbox, thread performance    | Plus-plan developers hit by pricing changes           |
| Gemini CLI       | Subagent reliability, MCP OAuth, AST-aware code nav     | Google Cloud/Vertex AI ecosystem users                |
| GitHub Copilot CLI| Billing accuracy, ARM64 stability, hook discoverability | GitHub Enterprise/VS Code integration users           |
| OpenCode         | Session data portability, YOLO mode, Zen API CORS       | Open-source enthusiasts, multi-model power users      |
| Qwen Code        | Path handling, testing CI, voice dictation, loop detection | Chinese ecosystem and API-agnostic developers         |

**Key differentiators**:
- **Cost sensitivity**: Only Codex and Copilot CLI saw billing concerns – the former from a 10–20× spike, the latter from a quota error.
- **Multi-account management**: Claude Code’s top-voted feature (#18435, 601 👍) has no direct equivalent in other tools.
- **Testing infrastructure**: Qwen Code explicitly addresses CI gaps (fake model server, integration test automation) – a rare focus.
- **Voice input**: Qwen Code’s `/voice` command PR is unique among the tracked tools today.

---

## 5. Community Activity Notes

**Highest activity by volume**:
- **OpenAI Codex** (50 issues, 39 PRs, 3 releases) and **OpenCode** (50 issues, 50 PRs) tied for raw engagement.
- **Qwen Code** (46 PRs, 1 release, 21 closed issues) showed sustained maintainer response.

**Highest maintainer responsiveness**:
- **Qwen Code** merged numerous path-handling fixes and an opt-in plan mode fix within hours.
- **OpenAI Codex** shipped three rapid alpha builds, indicating active development despite no public resolution on the cost spike.
- **Gemini CLI** merged a workspace publishing fix and has 10 open PRs, but no PRs merged today.

**Lowest activity**:
- **Claude Code**: only 2 PRs active, no release, a PR open for 11 months (#4943). Community frustration visible in multiple open issues with no maintainer replies.
- **GitHub Copilot CLI**: 1 PR (likely spam), 10 issues (some closed quickly). Maintainer attention appears minimal.
- **Kimi Code CLI**: no activity at all.

**Notable delayed responses**:
- Claude Code’s shell completions PR (#4943) has been open since August 2025 with no merge; renewed activity today may indicate pending review.
- OpenCode’s `/reload` slash command PR (#9871) has been open since January 2026.

---

## 6. Evidence-Backed Observations

**1. Windows platform parity is the most consistent cross-tool pain point.**
Every tool with updates today has at least one Windows-specific bug or feature request. Claude Code, Codex, Copilot CLI, OpenCode, and Qwen Code all had Windows issues filed or fixed. No tool claims full Windows feature parity.

**2. Session reliability and recovery is a shared concern across all tools with activity.**
Bugs involving false successes, hangs, state corruption, context exhaustion, or model switching appear in every digest. The severity ranges from minor annoyance (Claude Code model switch) to fatal (Gemini CLI indefinite hangs, OpenCode kernel panic). No tool demonstrates robust session fault tolerance.

**3. Cost and billing transparency is a growing concern for commercial tools only.**
OpenAI Codex users report a 10–20× cost increase (#28879) with no official response. GitHub Copilot CLI users report incorrect quota subtraction (#3881) and request OpenTelemetry cost metrics (#3778). Open-source tools (OpenCode, Qwen Code, Gemini CLI [free tier] ) have no analogous reports, as users bring their own API keys.

**4. MCP ecosystem development is accelerating across multiple tools simultaneously.**
Today’s data shows active PRs for MCP OAuth refresh (Gemini CLI), MIME type sniffing (Gemini CLI), resource subscription (OpenCode), tool count capping (OpenCode), and hot-reload (Qwen Code). The concurrent investment suggests MCP is becoming a standard integration layer rather than a single-vendor protocol.

**5. Qwen Code and OpenCode show the highest PR velocity and maintainer engagement today.**
Qwen Code released a patch, closed 21 issues, and has 46 PRs updated – many from maintainers. OpenCode had 50 PRs updated, including multiple long-standing feature PRs rebased and reopened (MCP resource subscription, skills API, /reload command). This contrasts with Claude Code (low PR activity, older PRs stalled) and Copilot CLI (near-zero maintainer activity).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-22

## Today's Update Brief

No new releases in the past 24 hours. Community activity is dominated by a fresh wave of API outage reports (issues #69942, #69785) filed today, alongside continued discussion on the top-voted feature request for multi-account profile switching in Claude Desktop. Two open pull requests are in review, one of which has been open for nearly 11 months.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

1. **[#18435 — Multi-account profile switching in Claude Desktop](https://github.com/anthropics/claude-code/issues/18435)**
   *Status: Open | Comments: 118 | 👍: 601*
   The most popular open feature request by a wide margin. Users managing work and personal Claude accounts want a UI-level profile switcher rather than manually re-authenticating. The 601 upvotes and sustained discussion since January indicate strong, consistent demand from professional users.

2. **[#52765 — "Server is busy" error on Windows (Cowork Desktop)](https://github.com/anthropics/claude-code/issues/52765)**
   *Status: Open | Comments: 14 | 👍: 2*
   Windows users on Cowork (Claude's collaborative mode) report a persistent "Server is busy" error with no recovery path. The issue has been updated today, suggesting maintainer attention or new reports from users still affected after two months.

3. **[#37994 — Desktop update breaks LAN SSH/network access on macOS](https://github.com/anthropics/claude-code/issues/37994)**
   *Status: Open | Comments: 11 | 👍: 4*
   A March 23 update enabled `OPERON_SANDBOXED_NETWORK=1` by default, blocking all local network tools (SSH, SCP, curl to LAN hosts). Affects users who rely on Claude to manage local infrastructure. No fix has been confirmed after three months.

4. **[#54461 — Desktop app: cannot change working directory or open new chat on Windows](https://github.com/anthropics/claude-code/issues/54461)**
   *Status: Open | Comments: 8 | 👍: 4*
   Windows Desktop users are stuck in initial working directories with no way to start new chat sessions. Updated today, suggesting this remains unresolved since late April.

5. **[#69942 — Anthropic API: Service Unavailable error](https://github.com/anthropics/claude-code/issues/69942)**
   *Status: Open, filed today | Comments: 5 | 👍: 10*
   Fresh outage report with rapid upvotes. A single user on macOS/VSCode reports "api is down" with no error details. The 10 thumbs-up in hours suggests widespread impact on morning workflows.

6. **[#69772 — Model silently switches from 1M to non-1M Opus mid-session](https://github.com/anthropics/claude-code/issues/69772)**
   *Status: Open | Comments: 5 | 👍: 2*
   Intermittent bug where the active model is swapped to a non-1M variant without user knowledge, causing unrecoverable API errors. Session must be killed; `--resume` does not help. Includes a repro case from the reporter.

7. **[#61912 — OAuth refresh corrupts credentials during transient 5xx responses](https://github.com/anthropics/claude-code/issues/61912)**
   *Status: Open | Comments: 5 | 👍: 0*
   On Linux, a temporary Cloudflare 5xx during OAuth token refresh can corrupt stored credentials, leading to permanent 401 loops across sessions. Users must manually clear auth state. A dangerous edge case for automated workflows.

8. **[#68996 — Session-as-process primitive: spawn, communicate, and terminate isolated sessions programmatically](https://github.com/anthropics/claude-code/issues/68996)**
   *Status: Open | Comments: 3 | 👍: 0*
   Request for a first-class API to spawn isolated Claude Code subprocesses with stdin/stdout communication and PID lifecycle management. Currently parallel sessions require manual terminal management. Low engagement but notable for agentic workflow developers.

9. **[#69035 — HTTP MCP connector to Atlassian fails with "Invalid context provided"](https://github.com/anthropics/claude-code/issues/69035)**
   *Status: Open, updated today | Comments: 2 | 👍: 2*
   Atlassian MCP servers using `/v1/mcp/authv2` fail while `/v1/sse` works with the same account. Reports on Windows. Points to a regression in the MCP connector's auth context handling.

10. **[#69793 — `xargs rm -rf` without null delimiter causes data loss on paths with spaces](https://github.com/anthropics/claude-code/issues/69793)**
    *Status: Open | Comments: 2 | 👍: 0*
    A model behavior report: Claude generated an `xargs rm -rf` pipeline without `-0` or null delimiter, causing data loss when file paths contained spaces. High severity despite low discussion — the model is producing destructive commands without safe defaults.

## Key PR Progress

1. **[#69916 — fix: print error message before silent exit in edit-issue-labels.sh](https://github.com/anthropics/claude-code/pull/69916)**
   *Status: Open, filed yesterday*
   Fixes silent failure in the Claude Issue Triage workflow script when called without required arguments. Small but important for maintainer tooling reliability.

2. **[#4943 — feat: add shell completions (bash, zsh, fish)](https://github.com/anthropics/claude-code/pull/4943)**
   *Status: Open, filed August 2025 | Updated today*
   Long-standing PR providing static completion scripts for three major shells. Has been open for nearly 11 months with no merge. The most recent activity (today) may indicate renewed maintainer interest or a pending review.

*Note: Only 2 PRs were active in the last 24 hours. No other meaningful PR progress to report.*

## Feature Request Clusters

**Multi-Account & Profile Management**
Multiple requests (#18435, #69939) around managing identities and sessions. The flagship request (profile switching) has 601 upvotes and 118 comments. A related bug report (#69939) describes duplicate metadata records corrupting the chat history ordering, which tangentially affects multi-session workflows.

**Programmatic Session Control**
Issue #68996 requests a spawned-session primitive for agentic workflows. This aligns with earlier feature requests like #61537 (updating MCP server headers mid-session) and #61533 (viewed/unviewed state tracking for completed sessions). Together they suggest growing interest in treating Claude Code sessions as programmable, observable resources.

**Platform Parity for Windows**
Windows users continue to request native sandbox support (#46740, closed but referenced) and report auth/tool failures (#52765, #54461, #69035). The gap between macOS/Linux and Windows feature support remains a recurring topic.

## Developer Pain Points

**API Reliability and Transparent Failures**
Two outage reports filed today (#69942, #69785) alongside a model-switching bug (#69772) that silently breaks sessions. Developers express frustration at opaque errors and lack of recovery paths — sessions must be killed and restarted with no debugging context.

**Session State Fragility**
Multiple issues describe state corruption scenarios: OAuth tokens corrupted by transient errors (#61912), metadata duplication breaking chat ordering (#69939), and lock files that permanently disable features after crashes (#50694). These erode trust in long-running sessions for production work.

**Windows-Specific Gaps**
Windows users face persistent authentication failures (#52765), missing sandbox isolation (#46740), directory navigation bugs (#54461), and MCP connector issues (#69035). The cumulative effect positions Windows as a second-class platform despite the growing user base.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-22

## Today’s Update Brief

Three rapid-fire Rust alpha releases landed today (0.142.0-alpha.8 through .10), while the community continued to surface a major cost-regression issue that has ballooned into the most commented item on the tracker. Activity remains high: 50 issues and 39 PRs updated in the last 24 hours, with a strong signal around Windows sandbox regressions, performance degradation from excessive logging, and a sustained push for IDE-integrated diff/approval workflows.

## Releases

Three consecutive Rust alpha builds were published today:
- **rust-v0.142.0-alpha.8** through **rust-v0.142.0-alpha.10** — all with minimal changelog entries ("Release 0.142.0-alpha.X"). The rapid succession suggests either a hotfix train or automated patch builds. No new features or breaking changes were documented.

## Hot Issues

**1. Rate-limit cost spike (gpt-5.5, Plus plan)** — [#28879](https://github.com/openai/codex/issues/28879)
- **What happened:** Starting June 16, users on the Plus plan report that Codex on gpt-5.5 drains the 5-hour budget in 2–3 prompts instead of 20+. Session logs show per-token consumption increased 10–20×.
- **Impact:** Major: directly affects daily usability for Plus subscribers.
- **Community:** 96 comments, 188 👍 — the most active issue today. No maintainer resolution posted yet.

**2. Windows standalone installer request** — [#13993](https://github.com/openai/codex/issues/13993)
- **Request:** Many Windows users cannot use the Microsoft Store due to corporate policies, offline environments, or system restrictions. They want a traditional `codex-setup.exe`.
- **Impact:** Blocks adoption in enterprise/controlled Windows environments.
- **Community:** 74 comments, 153 👍. Maintainers have not committed.

**3. IDE-integrated diff/approval** — [#2998](https://github.com/openai/codex/issues/2998)
- **Request:** Port the CLI's red/green diff-and-approve flow into the IDE extension sidebar — not just terminal.
- **Impact:** Improves workflow for developers who prefer visual diffing over terminal.
- **Community:** 62 comments, 197 👍. One of the oldest open feature requests (Aug 2025).

**4. Context window exhaustion on fresh threads** — [#9046](https://github.com/openai/codex/issues/9046)
- **Issue:** Codex reports "ran out of room in model's context window" immediately after starting a new thread, with seemingly minimal history.
- **Impact:** Fatal: thread becomes unrecoverable for the session.
- **Community:** 37 comments, low reaction count (1 👍) but high frustration.

**5. ChatGPT integration** — [#2153](https://github.com/openai/codex/issues/2153)
- **Request:** Allow moving sessions between Codex CLI and ChatGPT web UI to use web search and brainstorming features, then bring results back.
- **Impact:** Bridges two OpenAI products for research-to-implementation flow.
- **Community:** 37 comments, 149 👍.

**6. Project conversations hidden after 50** — [#21128](https://github.com/openai/codex/issues/21128)
- **Bug:** Desktop app only displays the most recent 50 conversations globally, making older project threads disappear from the UI.
- **Impact:** Loss of working memory for active projects.
- **Community:** 29 comments, 17 👍.

**7. Bitdefender blocking PowerShell commands** — [#28971](https://github.com/openai/codex/issues/28971)
- **Bug:** Codex repeatedly attempts a PowerShell command that is blocked by Bitdefender antivirus, preventing tool execution.
- **Impact:** Blocks Windows Pro users with common third-party AV.
- **Community:** 17 comments, 8 👍.

**8. WSL agent mode fails on Windows** — [#16815](https://github.com/openai/codex/issues/16815)
- **Bug:** Switching to WSL agent environment fails with "AbsolutePathBuf deserialized without a base path."
- **Impact:** Blocks Windows users who rely on WSL for Linux toolchains.
- **Community:** 12 comments, 9 👍.

**9. SQLite logging writes ~640 TB/year, consuming SSD endurance** — [#28224](https://github.com/openai/codex/issues/28224)
- **Bug:** Continuous writes to `~/.codex/logs_2.sqlite` and WAL files produce extreme I/O (640 TB/year estimated on one machine).
- **Impact:** Accelerates SSD wear; may cause system stalls.
- **Community:** 10 comments, 29 👍. Significant performance concern.

**10. Context compaction triggered on every request** — [#29330](https://github.com/openai/codex/issues/29330)
- **Bug:** The "Context automatically compacted" message appears on every request, interrupting the agent mid-operation. Observed on Mac Silicon.
- **Impact:** Breaks flow for Plus users; reduces effective session length.
- **Community:** 3 comments; very recent (filed today).

## Key PR Progress

**1. Safety buffering events to app-server clients** — [#29371](https://github.com/openai/codex/pull/29371)
- Decodes and deduplicates `safety_buffering` metadata from Responses API SSE/WebSocket so the desktop app can render in-progress safety review state.

**2. Decouple cell creation from observation (code-mode refactor series)** — [#29290](https://github.com/openai/codex/pull/29290), [#29291](https://github.com/openai/codex/pull/29291), [#29292](https://github.com/openai/codex/pull/29292), [#29310](https://github.com/openai/codex/pull/29310)
- A coordinated set of four PRs restructuring how `SessionRuntime` manages cell creation, observation, and transport-neutral execution. These decouple session protocol from in-process actors, paving the way for remote transport hosting.

**3. Speed up thread resume** — [#29357](https://github.com/openai/codex/pull/29357)
- Parses rollout files on a blocking worker; reuses loaded history and deduplicates reads. Targets slow local thread resume, a known pain point.

**4. Speed up thread list with lightweight SQLite** — [#29355](https://github.com/openai/codex/pull/29355)
- Routes `thread/list` through a SQLite projection that reads only the fields required for list display, avoiding full thread materialization.

**5. Separate thread names and repair ownership** — [#29352](https://github.com/openai/codex/pull/29352)
- Separates explicit thread names from history-derived titles in SQLite; adds a lightweight list projection with canonical parent metadata.

**6. Optimize thread resume and fork** — [#29367](https://github.com/openai/codex/pull/29367)
- Adds checkpoint-bounded rollout reconstruction and reverse recent-turn reads. Avoids full long-thread materialization for excluded or recent-page responses.

**7. Allow sandbox to consume MCP sandbox state** — [#29358](https://github.com/openai/codex/pull/29358)
- Lets `codex sandbox` accept the same JSON shape from `codex/sandbox-state-meta` so MCP servers (like `node_repl`) can forward sandbox state without understanding its internals.

**8. Avoid redundant rollout reads for history** — [#29109](https://github.com/openai/codex/pull/29109)
- When SQLite or an active writer already provides a rollout path, `LocalThreadStore` no longer builds a redundant summary before parsing the same file for full history.

**9. Optimize filesystem thread listing** — [#29035](https://github.com/openai/codex/pull/29035)
- The filesystem fallback for `thread/list` previously read a rollout summary before checking `SessionMeta` fields. This PR reorders the logic to reject threads by metadata first, reducing parse overhead in directories with many subagent rollouts.

**10. Apply sandbox intent inside remote exec servers** — [#29113](https://github.com/openai/codex/pull/29113)
- Completes the split from PR #29108: the executor now interprets and enforces portable sandbox intent (paths, OS sandbox implementation) rather than requiring the orchestrator to handle filesystem-level details.

## Feature Request Clusters

**Windows platform parity** persists as the dominant cluster:
- Standalone Windows installer (`codex-setup.exe`) — [#13993](https://github.com/openai/codex/issues/13993) (74 comments)
- Custom storage path for Desktop chats — [#24534](https://github.com/openai/codex/issues/24534)
- WSL agent mode fixes — [#16815](https://github.com/openai/codex/issues/16815)
- Remove visible PowerShell console windows during background polling — [#26613](https://github.com/openai/codex/issues/26613)

**Session and context management** continues to be a recurring theme:
- IDE-integrated diff/approval — [#2998](https://github.com/openai/codex/issues/2998)
- ChatGPT integration for seamless web-to-CLI workflow — [#2153](https://github.com/openai/codex/issues/2153)
- Resolvable context window exhaustion (not fatal) — [#9046](https://github.com/openai/codex/issues/9046), [#28920](https://github.com/openai/codex/issues/28920)

## Developer Pain Points

**Rate-limit pricing instability** — [#28879](https://github.com/openai/codex/issues/28879) is the single most impactful issue today, with users reporting a 10–20× cost increase without any change in their plan or usage pattern. No official response yet.

**Windows sandbox regressions** are accumulating: sandbox setup fails (os error 740, [#26158](https://github.com/openai/codex/issues/26158)), proxy env breaks `apply_patch` ([#29178](https://github.com/openai/codex/issues/29178)), Computer Use sandbox policy is missing ([#29267](https://github.com/openai/codex/issues/29267)), and `\\?\` namespace paths break pnpm/Node ([#13845](https://github.com/openai/codex/issues/13845)).

**Aggressive context compaction** — multiple reports ([#9046](https://github.com/openai/codex/issues/9046), [#28920](https://github.com/openai/codex/issues/28920), [#29330](https://github.com/openai/codex/issues/29330)) of context window errors appearing prematurely or on every request, often rendering threads unrecoverable.

**Excessive logging I/O** — [#28224](https://github.com/openai/codex/issues/28224) quantifies the issue at ~640 TB/year of SQLite writes, a concrete SSD endurance concern. Compounded by [#29177](https://github.com/openai/codex/issues/29177) reporting system stalls from localized I/O on Windows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-22

## Today's Update Brief

No new releases landed in the past 24 hours. Activity remains focused on triaging open issues and reviewing pull requests, with 30 issues and 18 PRs updated. The community continues to report agent reliability concerns, particularly around subagent lifecycle handling and shell command execution edge cases.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   P1 epic tracking the evolution of behavioral evals from a single test concept (introduced in #15300) to 76 tests across 6 supported Gemini variants. The issue discusses evaluation infrastructure improvements needed to scale component-level testing. Community reaction: low engagement (0 👍), but maintains high maintainer attention.

2. **[#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   P2 epic investigating whether AST-aware tools (reading method bounds, navigating code structure) can reduce turn count and token waste. Could affect codebase navigation accuracy. 1 👍 from community.

3. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**
   P1 bug: `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting the maximum turn limit before performing any analysis. This misleads users into believing analysis completed. 2 👍, significant reliability concern.

4. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
   P1 bug: When the CLI defers to the generalist agent, it hangs indefinitely (up to an hour). Workaround exists (instruct model not to use subagents). 8 👍 — highest community reaction among open issues, indicating widespread impact.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   P2 bug: Custom skills and sub-agents are rarely invoked autonomously by the model, even for closely related tasks. User reports explicit instruction is required. Core usability concern for customization features.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   P2 security bug: Auto Memory sends transcript content to the extraction model before redaction logic runs, and can log existing skill definitions. Data exposure risk flagged by maintainer.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
   P2 bug: Sessions the extraction agent chooses to skip remain "unprocessed" and get surfaced repeatedly, causing redundant work. Affects long-running usage with Auto Memory enabled.

8. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**
   P1 bug: Simple CLI commands (that do not await input) cause the shell to appear stuck post-execution. 3 👍, reproducible across multiple environments.

9. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   P1 bug: `browser_agent` reports GOAL success despite failing silently in Wayland display environments. 1 👍, blocks Linux Wayland users.

10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**
    P2 customer issue: The model occasionally uses `git reset` or `--force` flags when safer alternatives exist. Community suggests better awareness of destructive operations on databases and version control. 1 👍.

## Key PR Progress

1. **[#28063 — fix: resolve workspace publish failures and scheduler event loop starvation](https://github.com/google-gemini/gemini-cli/pull/28063)**
   Merged. Fixes NPM lifecycle script conflicts during workspace publishing and prevents scheduler starvation. Affects release pipeline reliability.

2. **[#28059 — fix(cli): don't let an unreadable .env (EACCES) break extension loading](https://github.com/google-gemini/gemini-cli/pull/28059)**
   Open. Root-cause fix for extensions failing when workspace `.env` is unreadable (sandbox EACCES). Includes Cloud Shell path hardening.

3. **[#27744 — fix(web-fetch): resolve DNS before SSRF guard to block hostname-to-private-IP bypass](https://github.com/google-gemini/gemini-cli/pull/27744)**
   Open. Mitigates SSRF bypass via wildcard DNS services (e.g., `nip.io`) that resolve to private IPs. Security-sensitive fix.

4. **[#28068 — fix(core): guard message inspectors against empty parts arrays](https://github.com/google-gemini/gemini-cli/pull/28068)**
   Open. `isFunctionCall()` and `isFunctionResponse()` returned `true` for `parts: []` due to JavaScript's vacuous `[].every()`. This misclassification could cause downstream logic errors.

5. **[#27878 — fix(core): sniff MCP image MIME types](https://github.com/google-gemini/gemini-cli/pull/27878)**
   Open. WebP images from Figma MCP were mislabeled as `image/png`, causing HTTP 400 errors at the Gemini API. Implements binary signature sniffing.

6. **[#27889 — fix(core): refresh MCP OAuth with stored client ID](https://github.com/google-gemini/gemini-cli/pull/27889)**
   Open. Auto-discovered MCP servers lack static `oauth.clientId`, breaking token refresh after `/mcp auth`. Persists discovered client ID in token metadata.

7. **[#27887 — fix(cli): honor custom theme border.default when terminal reports OSC 11 background](https://github.com/google-gemini/gemini-cli/pull/27887)**
   Open. Documented `border.default` and `border.focused` theme colors were not applied on terminals reporting background color via OSC 11.

8. **[#27885 — fix(vscode-ide-companion): register all activate() disposables](https://github.com/google-gemini/gemini-cli/pull/27885)**
   Open. Two activation disposables in the VS Code extension were never added to `context.subscriptions`, causing resource leaks.

9. **[#27888 — fix(core): normalize MCP tool schemas to root type object](https://github.com/google-gemini/gemini-cli/pull/27888)**
   Open. MCP servers advertising input schemas without root `type: "object"` are rejected by strict JSON Schema validators (Vertex AI strict mode). Adds normalization.

10. **[#27886 — fix(core): respect .gitignore and .geminiignore in session_context directory tree](https://github.com/google-gemini/gemini-cli/pull/27886)**
    Open. The `<session_context>` directory tree built by `getDirectoryContextString()` did not apply ignore rules, potentially including irrelevant files in context.

## Feature Request Clusters

**AST-aware codebase navigation**
Multiple issues (#22745, #22746) investigate whether AST-aware file reads, search, and mapping can improve tool call precision and reduce token waste. Suggests demand for smarter, structure-aware context gathering rather than line-based reads.

**Better subagent visibility and debugging**
Issues such as #22598 (subagent trajectory in `/chat share`), #21763 (bugreport missing subagent context), and #21432 (agent self-awareness about its own CLI flags) reflect a desire for more transparency into subagent decisions, failures, and logs.

**MCP Elicitation and multi-step support**
Issue #22249 requests Gemini CLI to handle interactive MCP tools requiring user input (elicitation), rather than failing with "Method not found." This points to growing interest in conversational MCP workflows that the current tool-calling model does not support.

## Developer Pain Points

- **Agent instability:** Multiple high-priority bugs (hangs, false success reports, subagent permission bypass) create a unreliable experience, especially for automated or long-running tasks.
- **Auto Memory system issues:** Low-signal retry loops (#26522), missing deterministic redaction (#26525), and silent invalid patch skipping (#26523) indicate quality and reliability gaps in the memory persistence feature.
- **Shell execution problems:** Commands getting stuck post-execution (#25166) and terminal buffer corruption after external editors (#24935) disrupt basic workflows.
- **Browser agent fragility:** Wayland failures (#21983), settings.json override ignoring (#22267), and aggressive lock strategies (#22232) limit cross-platform browser automation reliability.
- **Destructive behavior risk:** Users report the model occasionally performs unsafe operations (forced git resets, destructive flags) without adequate guardrails (#22672).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-22

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity centred on ten open and closed issues and a single pull request, with notable discussion around a Windows ARM64 crash, incorrect quota subtraction, and missing visibility into plugin hooks and context window usage.

## Releases
None.

## Hot Issues
1. **#1665 – [CLOSED] Support Copilot CLI Plugins Scoped to Project or Repository**
   *[link](https://github.com/github/copilot-cli/issues/1665)*
   High-demand feature (👍17) requesting per-project plugin installation instead of global per-user. Closed after implementation? The issue remains a reference for similar requests.

2. **#3687 – [OPEN] `copilot.exe` Fatal-Exit Under Load on Windows ARM64**
   *[link](https://github.com/github/copilot-cli/issues/3687)*
   Reproducible BEX64 crash when multiple sessions start concurrently (e.g., Windows Terminal tab restore) under memory pressure. Impacts ARM64 users; 6 comments, low upvotes but high severity.

3. **#3871 – [CLOSED] No Way to List Installed Hooks**
   *[link](https://github.com/github/copilot-cli/issues/3871)*
   Users cannot enumerate hook-based plugins, unlike MCP servers (`copilot mcp list`). Closed, but highlights a missing CLI surface.

4. **#3861 – [OPEN] Sandbox Capabilities Documented but Non‑Functional**
   *[link](https://github.com/github/copilot-cli/issues/3861)*
   Per‑host filtering (`allowedHosts`/`blockedHosts`) and cross‑platform isolation claims do not match actual behaviour. Affects security‑conscious developers.

5. **#3867 – [CLOSED] No Context Window Visibility or Compaction Notification**
   *[link](https://github.com/github/copilot-cli/issues/3867)*
   Users want a token‑usage indicator and a notification when context compaction occurs; currently silent. Closed, but remains a common request.

6. **#3874 – [OPEN] VS Code Agent `preToolUse` Hook Denial Does Not Work**
   *[link](https://github.com/github/copilot-cli/issues/3874)*
   Hooks that deny specific commands are ignored when running from VS Code. Affects plugin‑based access control workflows.

7. **#3778 – [OPEN] Feature Request: Emit Cost / Premium‑Request Metric via OpenTelemetry**
   *[link](https://github.com/github/copilot-cli/issues/3778)*
   Parity request with `claude_code.cost.usage`. Currently only token/usage metrics are exported; billing metrics are missing for cost tracking.

8. **#3881 – [OPEN] Quota Subtraction Incorrect (5% Instead of 2%)**
   *[link](https://github.com/github/copilot-cli/issues/3881)*
   User reports a 5% deduction (instead of 2%) on a premium request with a 6× multiplier. Billing/account‑related; no response yet.

9. **#3879 – [OPEN] Status Line Conflates "Generating" with "Idle + Background Work"**
   *[link](https://github.com/github/copilot-cli/issues/3879)*
   The status line shows “Working / Waiting for background agents” even when the parent agent is idle, making it unsafe for users to type. Terminal UX bug.

10. **#3882 – [CLOSED] Invalid / Spam**
    *[link](https://github.com/github/copilot-cli/issues/3882)*
    Blank issue; closed quickly.

## Key PR Progress
Only one pull request was updated in the last 24 hours:

- **#3880 – [OPEN] beyond the streets of america**
  *[link](https://github.com/github/copilot-cli/pull/3880)*
  Appears to be a non‑functional PR containing unrelated UI component code. No comments or approvals. Likely spam or misplaced.

## Feature Request Clusters
- **Project‑scoped plugin configuration** (#1665, #3871, #3861 indirectly) — users want plugins and sandbox rules to be defined per repository, not globally per user.
- **Billing and cost transparency** (#3778, #3881) — requests for OpenTelemetry cost metrics and accurate quota‑usage reporting.
- **Context window awareness** (#3867) — need for token counters and compaction notifications in chat sessions.

## Developer Pain Points
- **Windows ARM64 stability** (#3687) — reproducible crash under concurrent session load; no fix available.
- **Security documentation vs. reality** (#3861) — sandbox features documented but non‑functional.
- **Hook and plugin discoverability** (#3871, #3874) — no CLI for listing hooks, and `preToolUse` denial broken in VS Code.
- **UX ambiguity** (#3879) — status line misleads users into thinking they can type when background agents are running.
- **Billing inaccuracies** (#3881) — quota subtraction errors causing loss of premium requests.

*All links point to the corresponding GitHub issue or PR.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – June 22, 2026

**Today's Update Brief**
No releases were published in the last 24 hours. Community activity remains high: 50 issues and 50 PRs were updated, with notable discussions around Zen API CORS failures, Copilot Claude Opus 4.8 tool-call parsing, and a kernel panic on macOS. Several long-running feature PRs have been rebased and reopened, while a new YOLO permission mode PR landed in the TUI.

---

## Hot Issues (Top 10)

1. **[#1522 – Qwen3 & Kimi K2 keep stopping mid-chat](https://github.com/anomalyco/opencode/issues/1522)** (Closed, 10 comments, 👍7)
   Users report that after some turns the models stop calling tools and loop when told to continue. Using OpenRouter as provider. Attached screen recording shows the issue.

2. **[#14292 – Save conversations & session data to project folder](https://github.com/anomalyco/opencode/issues/14292)** (Closed, 10 comments, 👍16)
   Request to persist session data (currently in `~/.opencode`) to the working directory instead, making it portable and shareable.

3. **[#11831 – YOLO Mode: auto-approve all permission prompts](https://github.com/anomalyco/opencode/issues/11831)** (Closed, 9 comments, 👍30)
   Highly voted feature for power users who trust OpenCode actions. Respects explicit `deny` rules while skipping all “ask” prompts.

4. **[#10908 – Add RTL support for Arabic & other RTL languages](https://github.com/anomalyco/opencode/issues/10908)** (Closed, 9 comments, 👍7)
   Enhances accessibility for Hebrew, Persian, Urdu. Existing Arabic translations exist but lack proper RTL layout in the UI.

5. **[#30192 – "no provider available" error with Claude Opus 4.6 via Zen](https://github.com/anomalyco/opencode/issues/30192)** (Open, 8 comments, 👍3)
   Since May 28, Claude Opus 4.6 returns “no provider available” while other Zen models work. TUI usage.

6. **[#31041 – Zen API endpoints return 404 on CORS preflight (OPTIONS)](https://github.com/anomalyco/opencode/issues/31041)** (Open, 7 comments, 👍2)
   All Zen API paths (`/zen/v1/*`, `/zen/go/v1/*`) fail OPTIONS requests with a 404 HTML page, blocking browser-based clients. POST endpoints work fine.

7. **[#31247 – Copilot Claude Opus 4.8 emits pseudo tool-call text](https://github.com/anomalyco/opencode/issues/31247)** (Open, 6 comments)
   The model returns unstructured text that looks like a tool call instead of a structured tool call object, causing parse errors downstream.

8. **[#32002 – Kernel panic via EndpointSecurity – opencode.exe](https://github.com/anomalyco/opencode/issues/32002)** (Open, 2 comments)
   macOS 26.3 crash in `data.kalloc.1024` zone exhaustion. Apparent memory leak in EndpointSecurity kext triggered by opencode.

9. **[#32706 – TUI crash: "An error occurred in Effect.tryPromise"](https://github.com/anomalyco/opencode/issues/32706)** (Open, 2 comments, 👍2)
   Immediate crash on startup in OpenCode ≥1.17.0. Windows, but also affects other platforms. Reproducible with `--pure --print-logs`.

10. **[#33216 – OpenCode repeatedly ignores instructions and loops responses](https://github.com/anomalyco/opencode/issues/33216)** (Open, 1 comment)
    User describes a recurring bug where clear instructions are ignored and the agent repeats previous responses instead of following the request.

---

## Key PR Progress (Top 10)

1. **[#33287 – Fix VirtualTimelineRow crash on undefined initialItem/row](https://github.com/anomalyco/opencode/pull/33287)** (Open)
   Prevents renderer crash `TypeError: Cannot read properties of undefined (reading 'size')`. Closes #33285.

2. **[#33246 – Make system prompt immutable after session creation](https://github.com/anomalyco/opencode/pull/33246)** (Open)
   Caches system prompt per session ID to avoid unnecessary re-reading and re-sending. Closes #29672.

3. **[#33284 – Restore markdown heading hierarchy in Desktop/web chat](https://github.com/anomalyco/opencode/pull/33284)** (Open)
   All heading levels (h1–h6) previously shared a single 14px rule. Now restores proper font-size cascade. Closes #16046.

4. **[#30849 – Strip MiniMax trailing tool_call leak suffix](https://github.com/anomalyco/opencode/pull/30849)** (Open)
   Sanitizer removes leaked tool-call marker suffix from MiniMax assistant text. Closes #30684.

5. **[#33270 – Simplify runner transitions](https://github.com/anomalyco/opencode/pull/33270)** (Open)
   Refactors session turn retries from mutually recursive functions to an iterative, exhaustive transition loop. Improves correctness.

6. **[#29355 – Add MCP resource subscription API with autoprompt](https://github.com/anomalyco/opencode/pull/29355)** (Open)
   Implements resource-subscription slice of full MCP client capabilities. Rebased and reopened after earlier closure.

7. **[#29356 – Expose skills API to plugins via PluginInput.skills](https://github.com/anomalyco/opencode/pull/29356)** (Open)
   Lets plugins access the compiled skills system. Closes #18688. Rebased from earlier PR.

8. **[#32998 – Cap OpenAI Responses tool count to avoid 500 server_error](https://github.com/anomalyco/opencode/pull/32998)** (Open)
   Prevents backend rejection when many MCP servers flood the tool list. Closes #33006.

9. **[#9871 – Add /reload slash command](https://github.com/anomalyco/opencode/pull/9871)** (Open)
   Hot-reloads config, plugins, MCP servers without restarting TUI. Queues reload if sessions are active. Long-standing feature (since Jan).

10. **[#33279 – Add YOLO permission mode to TUI](https://github.com/anomalyco/opencode/pull/33279)** (Open)
    Makes `--yolo` the canonical auto-approval flag for both `opencode run` and the base TUI command. Exposes permission mode as `"auto" | "normal"`.

---

## Feature Request Clusters

**Session & Data Management**
- Save session data to project folder (#14292)
- Session rename support (#32375)
- Proper checkpoints (not just undo) (#33286)

**Accessibility & Internationalization**
- RTL layout for Arabic, Hebrew, Persian, Urdu (#10908)
- Persian language support (#32810)
- RTL text rendering in desktop app (#32726)

**Model & Provider Reliability**
- YOLO/auto-approve mode to skip permission prompts (#11831, #33279)
- Better error handling for specific model lines (Claude Opus, Qwen, Kimi, DeepSeek) – multiple issues
- Provider fallback or retry on “no provider available” (#30192)

**Plugin & MCP Ecosystem**
- Expose skills API to plugins (#29356, #18688)
- MCP resource subscription API (#29355)
- Per-model limit overrides for custom configurations (#29354, #21564)

---

## Developer Pain Points

- **Model looping / ignoring instructions** – Multiple reports (Qwen3, Kimi K2, general) where agents fail to follow user prompts and repeat previous responses.
- **“No provider available” errors** – Affects Claude Opus 4.6 via Zen; inconsistent availability of newer models (4.7, 4.8) even when listed.
- **CORS preflight routing bugs** – Zen API endpoints block all browser-based clients, breaking third-party integrations.
- **Renderer/TUI crashes** – Frequent crashes on startup (`Effect.tryPromise`), navigation (`VirtualTimelineRow`), and after updates (blank white page).
- **Inconsistent UTF-8 handling** – Read tool crashes on invalid UTF-8 while Edit tool silently corrupts data (#33068).
- **Payment/subscription friction** – Multiple users report card declines for OpenCode Go subscription (Italy, other regions). No clear support channel.
- **Regression of sanitised message placeholder** – The string `[System: Empty message content sanitised to satisfy protocol]` reappears in GLM-5.2 conversations despite being previously fixed (#33280).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-22

## Today's Update Brief

Qwen Code released v0.18.5 with a single core fix making plan mode opt-in, while the community and maintainers closed 21 issues and landed numerous bug fixes across file operations, CLI rendering, CI reliability, and security. PR activity remains high (46 updated PRs), with notable work on voice dictation, agent resurrection, and testing infrastructure.

---

## Releases

- **[v0.18.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5)** – Fix: plan mode prompt now requires explicit opt-in (`fix(core): require opt-in for plan mode prompt`). Also removes a duplicate gitdiff untracked count test case.
- **v0.18.3-nightly.20260621** – Pre-release snapshot carrying the same plan mode opt-in fix and test cleanup.

---

## Hot Issues (10 selected)

1. **[#4888](https://github.com/QwenLM/qwen-code/issues/4888) – IDEA plugin: question text not showing**
   *Status: OPEN | Created: 2026-06-09 | Comments: 10*
   When Qwen asks a question inside IntelliJ IDEA, the question text is invisible and user input fields don't appear — only Submit/Cancel buttons. Affects all interactive workflows in the IDE. No maintainer response yet.

2. **[#5019](https://github.com/QwenLM/qwen-code/issues/5019) – Long-context tasks: repetitive tool calls terminate session**
   *Status: OPEN | Priority: P2 | Comments: 4*
   Under long-running tasks, the model repeatedly calls the same tool with identical arguments, triggering an API-level `InternalError` and session termination. Labeled `duplicate` and `welcome-pr`. PR #5573 now addresses the root cause.

3. **[#5434](https://github.com/QwenLM/qwen-code/issues/5434) – Extension marketplace misclassifies uppercase HTTP(S) schemes**
   *Status: CLOSED | Priority: P2 | Comments: 4*
   URLs like `HTTPS://github.com/...` are not recognized as valid marketplace sources due to case-sensitive parsing. Fixed by maintainer @tt-a1i.

4. **[#5518](https://github.com/QwenLM/qwen-code/issues/5518) – `bundle restore` rejects trailing directory separators**
   *Status: CLOSED | Priority: P2 | Comments: 4*
   Passing a target directory with trailing slash causes `restoreFiles()` to throw a spurious "Path escapes target directory" error. Simple prefix-match logic issue. Fixed.

5. **[#5562](https://github.com/QwenLM/qwen-code/issues/5562) – CLI input box background breaks on wrapped lines**
   *Status: CLOSED | Priority: P3 | Comments: 3*
   In the interactive TUI, multi-line input shows discontinuous background color where lines wrap. Community reporter [@yiliang114] filed with screenshot. Fix PR #5568 landed.

6. **[#5555](https://github.com/QwenLM/qwen-code/issues/5555) – `--resume` space-preview truncates thinking block**
   *Status: CLOSED | Priority: P2 | Comments: 3*
   Using Space to preview a resumed session shows thinking content cut off mid-render. JSONL data is intact; CLI rendering is the problem. Fixed via Ink `Static` component.

7. **[#5559](https://github.com/QwenLM/qwen-code/issues/5559) – Fake model responses for no-AK integration tests**
   *Status: OPEN | Priority: P2 | Comments: 3*
   Request to add a lightweight OpenAI-compatible fake server so integration tests can run in PR CI without real API keys. PR #5560 is already implementing this.

8. **[#5540](https://github.com/QwenLM/qwen-code/issues/5540) – Resume completed background sub-agents**
   *Status: OPEN | Comments: 3*
   Background sub-agents are single-shot: once `completed`, `send_message` hard-fails. Users want the ability to revive completed agents. PR #5556 proposes a solution with TTL cleanup.

9. **[#5219](https://github.com/QwenLM/qwen-code/issues/5219) – Integration tests don't run on PR/merge**
   *Status: OPEN | Priority: P2 | Comments: 3*
   E2E integration tests only execute in the nightly release pipeline, so PRs that break tests merge green. Community is pushing for CI improvements to catch regressions earlier.

10. **[#5574](https://github.com/QwenLM/qwen-code/issues/5574) – `exit_plan_mode` auto-executes without confirmation**
    *Status: OPEN | Priority: P2 | Comments: 1*
    Entering plan mode via Shift+Tab (cycle through approval modes) causes the `exit_plan_mode` tool to execute the plan immediately without user confirmation. Affects safety of plan-based workflows.

---

## Key PR Progress (10 selected)

1. **[#5553](https://github.com/QwenLM/qwen-code/pull/5553) – Keep bare fast model on current auth**
   *Status: CLOSED*
   Prevents legacy `fastModel: "coder-model"` from resolving to Qwen OAuth when the active auth is OpenAI-compatible. Maintains explicit auth-qualified selectors like `qwen-oauth:coder-model`.

2. **[#5502](https://github.com/QwenLM/qwen-code/pull/5502) – Voice dictation with native capture**
   *Status: OPEN*
   Adds `/voice [hold|tap|off|status]` command for voice input, with hold mode (Space to talk) and tap mode. Includes `/model --voice` for transcription model selection and streaming support.

3. **[#5573](https://github.com/QwenLM/qwen-code/pull/5573) – Always-on guard for consecutive identical tool calls**
   *Status: OPEN*
   Promotes the duplicate-tool-call check from opt-in loop detection to always-on, halting runaway identical-call loops regardless of `skipLoopDetection` setting. Addresses #5019.

4. **[#5557](https://github.com/QwenLM/qwen-code/pull/5557) – Artifact tool for interactive HTML pages**
   *Status: OPEN*
   Adds an experimental `artifact` tool that lets the model publish self-contained HTML pages locally via `file://` URL. No network use; pages open automatically.

5. **[#5030](https://github.com/QwenLM/qwen-code/pull/5030) – Resume interrupted turns without synthetic "continue"**
   *Status: OPEN*
   After resume/crash, the assistant turn is reconstructed from persisted chat history without injecting a fake `"continue"` user message. Three classification shapes.

6. **[#5560](https://github.com/QwenLM/qwen-code/pull/5560) – Fake OpenAI server for no-AK integration tests**
   *Status: OPEN*
   Lightweight fixture-based fake server supporting streaming, `tool_calls`, and request capture. Moves `qwen serve` streaming to shared helpers. Solves #5559.

7. **[#5556](https://github.com/QwenLM/qwen-code/pull/5556) – Revivable background sub-agents + TTL**
   *Status: OPEN*
   Sending a message to a `completed` background sub-agent restores its persisted transcript, appends the instruction, and runs the resume path. Adds TTL cleanup for old transcripts.

8. **[#5126](https://github.com/QwenLM/qwen-code/pull/5126) – Vision Bridge: transcribe images for text-only models**
   *Status: OPEN*
   Automatic fallback: when model is text-only, images are sent to an auto-selected vision-capable model, transcribed to text, and then forwarded to the primary model.

9. **[#5561](https://github.com/QwenLM/qwen-code/pull/5561) – MCP server hot-reload on settings change**
   *Status: OPEN*
   Editing `mcpServers` in `settings.json` now live-connects/disconnects MCP servers without restart. Addresses long-standing UX gap (#3696).

10. **[#5571](https://github.com/QwenLM/qwen-code/pull/5571) – Enable loop detection by default, lower threshold**
    *Status: OPEN*
    Changes `skipLoopDetection` default from `true` to `false` so all users benefit from duplicate-tool-call protection. Reduces hard cap from 100 to a lower value. Fixes #5019.

---

## Feature Request Clusters

**Resume & Recovery Improvements**
Issues #5540, #5555, and PRs #5030, #5556 together indicate strong community interest in making session resumption (both for main turns and background agents) more robust and predictable. Users want to revive completed agents and see full context on resume.

**Testing Infrastructure**
Issues #5559, #5219, #5549 all call for better CI and testing: a fake model server for PR CI, running integration tests earlier in the pipeline, and automated fix triggers for release failures. The community is actively contributing implementations (PR #5560, #5551).

**CI/CD Automation**
Issues #5549 and #5570 request tighter automation: auto-triggering Qwen Autofix on release failures, and chaining VS Code Companion plugin publishing after CLI releases. PR #5572 implements the latter.

---

## Developer Pain Points

1. **Silent CI failures** – Integration tests not running on PRs (#5219) means regressions go undetected until release time. Non-interactive loop detection also exits successfully without signaling failure (#5554). Both lead to wasted debugging time.

2. **Path handling bugs** – Multiple issues in today's data (#5518, #5506, #5522, #5516, #5538) show that file path normalization across platforms remains fragile: trailing separators, sibling directory confusion, UNC path handling, and symlink safety all required fixes this week.

3. **Plugin/extension compatibility** – The IDEA plugin question display bug (#4888) and VS Code UNC path handling (#5538) highlight that IDE integrations lag behind CLI in polish. Community reporters are active but waiting on maintainer triage.

---

*Generated from GitHub data: github.com/QwenLM/qwen-code*

</details>