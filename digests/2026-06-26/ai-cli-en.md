# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-26 00:35 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Comparison — 2026-06-26

## 1. Daily Cross-Tool Overview

Six AI CLI tools showed activity on 2026-06-26, with **Gemini CLI** and **Qwen Code** leading in PR volume (33+ and 50 active PRs respectively) while **OpenCode** shipped the most notable new capability (session snapshots and revert controls). **Claude Code** shipped a permissions-classification enhancement but faced a cluster of regressions (mouse clicks in Terminal.app, permission bypass on macOS). **OpenAI Codex** released multiple Rust versions and the first `codex-zsh` plugin, but community energy was dominated by rate-limit and quota-drain bugs with high upvote counts. **GitHub Copilot CLI** had no releases but saw authentication loss on session resume as the most-commented issue. **Kimi Code CLI** was the least active, with only two new bug reports and no code changes.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PR Activity | Releases (24h) | Maintainer Signal |
|---|---|---|---|---|
| **Claude Code** | ~50 updated | 1 merged (staleness timeout) | v2.1.193 | Moderate – closed 1 PR, active triage on regressions |
| **OpenAI Codex** | 4+ new (high comment volume) | 10 important PRs active | rust-v0.142.2, multiple alphas, codex-zsh-v0.1.0 | Moderate – PRs show CI/infra improvements |
| **Gemini CLI** | 50 active issues | 33 open PRs, ~10 notable | v0.50.0-preview.1, v0.49.0 stable, nightly | High – security fix backported, many bug-fix PRs |
| **Copilot CLI** | 31 updated | 1 opened (config files) | None | Low – no maintainer responses flagged on top issues |
| **Kimi Code CLI** | 2 new issues | None | None | None – no maintainer activity observed |
| **OpenCode** | High (megathread active) | ~10 active PRs | v1.17.11 | High – memory megathread with maintainer requests |
| **Qwen Code** | 22 updated | 50+ active PRs, ~10 notable | v0.19.2-nightly | Moderate – active CI/autofix workflow improvements |

---

## 3. Shared Feature Directions

Requirements appearing across multiple tools today:

### Authentication & Billing Reliability
- **Claude Code** (#70958, #54179, #71476): Sub-agent auth staleness, cross-session token invalidation, billing misrouting
- **OpenAI Codex** (#25749, #20320, #17265): Broken phone verification, MCP OAuth token refresh failures
- **Copilot CLI** (#3596, #3680): Authentication loss on session resume

### Sub-Agent / Multi-Agent Correctness
- **Claude Code** (#70958): Sub-agent 401 misreported as user interruption
- **Gemini CLI** (#22323): Subagent falsely reports goal success after MAX_TURNS
- **OpenCode** (#33967): Plan mode bash permission bypass via subagents

### Windows-Specific Stability
- **Claude Code** (#53247): Desktop fails to launch after crash (orphaned job object)
- **OpenAI Codex** (#29200, #30009, #30050): Sandbox installer dialogs, memory pressure destabilization
- **Copilot CLI** (#3501, #3534): Scroll bar rendering, WSL2 ARM64 clipboard quoting
- **Qwen Code** (#5873): PowerShell process leak until OOM

### Token/Context Management Pain
- **Claude Code** (#71478, #51088, #71461): VS Code session resumption, auto-compact loops, Fleet mode burn
- **OpenAI Codex** (#5957, #29947): Auto-compaction loses state, compaction+resume burns context
- **OpenCode** (#17557): `/compact` command increases context instead of reducing it

### MCP Tooling Evolution
- **OpenAI Codex** (#28978, #17265): MCP input schema regression, OAuth token refresh
- **Gemini CLI** (#27979, #28143): Untrusted content handling, cross-server URI confusion
- **OpenCode** (#33977): MCP timeout split into startup and request budgets

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|
| **Primary focus this week** | Permission governance, auth reliability | Rate-limit/cost debugging, MCP runtime | Agent reliability, memory system, AST tools | Session auth, plugin hooks, enterprise config | Session snapshots, memory diagnostics | Extension ecosystem, voice dictation, CI automation |
| **Target user emphasis** | Enterprise / compliance-sensitive | Power users with budgets | Developers needing reliable automation | GitHub ecosystem, enterprise orgs | Plugin/SDK developers | Open-source community, multi-model |
| **Technical differentiator** | `autoMode.classifyAllShell` for all shell commands | First `codex-zsh` plugin, MCP runtime separation | Dependency injection refactor, AST-aware reads | PreToolUse plugin hooks, enterprise settings | Session snapshots with file revert | Bundled extension creator skill, daemon API |
| **Biggest risk visible** | Regression in mouse/TUI on macOS | Unacknowledged rate-limit root cause | Agent hangs and deceptive success reports | No releases, low maintainer response | Windows segfault in Bun | PowerShell memory leak on Windows |

---

## 5. Community Activity Notes

- **Most release activity**: **OpenAI Codex** (multiple Rust versions + zsh plugin) and **Gemini CLI** (preview + stable + nightly).
- **Most PR activity**: **Qwen Code** (50+ active PRs) and **Gemini CLI** (33 open PRs). Both have large, sustained engineering efforts.
- **Highest community frustration**: **OpenAI Codex** rate-limit issues (#28879: 302 👍, #29955: 23 comments in one day) and **Claude Code** macOS permissions bypass (#61415: 63 comments, 24 👍).
- **Most responsive maintainers**: **Gemini CLI** (security fix backported, active bug-fix PRs) and **OpenCode** (maintainer engagement on memory megathread).
- **Least responsive**: **Copilot CLI** (no maintainer responses noted on top issues, 1 housekeeping PR) and **Kimi Code CLI** (zero maintainer activity).
- **Notable shift**: **Claude Code** increased stale/autoclose timeout from 14 to 90 days, indicating a longer triage horizon and reduced issue churn.

---

## 6. Evidence-Backed Observations

1. **Authentication and billing bugs are the most painful cross-tool problem today.** Claude Code (token invalidation, billing misrouting), OpenAI Codex (verification broken, MCP OAuth expiry), and Copilot CLI (auth loss on resume) all have high-engagement issues. These are not feature gaps but regressions that block core workflows.

2. **Windows stability is a recurring weakness across at least four tools.** Claude Code (crash on restart), Qwen Code (PowerShell memory leak), OpenAI Codex (sandbox dialogs, memory pressure), and Copilot CLI (scroll bar, clipboard) all have Windows-specific issues that are either recent regressions or long-standing open bugs. The Qwen Code PowerShell leak (#5873) is particularly severe (OOM crashes).

3. **Sub-agent / multi-agent correctness remains immature across the board.** Claude Code misreports auth failures, Gemini CLI reports false success on subagent max-turns, and OpenCode has permission bypass in plan mode. None of the tools appear to have solved reliable sub-agent execution and failure reporting.

4. **Rate-limit and quota accounting is a major trust issue for OpenAI Codex specifically.** Multiple issues (#28879, #29955, #30002) with high upvotes and comments report dramatic cost jumps (10-20x), instant quota drain, and server-side over-reporting. No maintainer root-cause acknowledgment was noted today, which amplifies community frustration.

5. **The push toward more granular token/context controls is consistent across tools.** Claude Code (auto-compact governance requests), OpenCode (`/compact` fix needed), Qwen Code (configurable auto-compact threshold PR), and Gemini CLI (AST-aware reads to reduce token waste) all signal that users are demanding more control over how these tools consume context windows, rather than relying on black-box compaction.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-26

## Today’s Update Brief

The team shipped **v2.1.193** with a new `autoMode.classifyAllShell` setting and improved denial reporting. Issue activity remains high (50 updated items), with the community focused on permission-mode regressions, unexpected token consumption, and auth staleness in agents. The sole merged PR extends stale/autoclose timeouts from 14 to 90 days, signaling a shift toward more patient issue triage.

## Releases

**v2.1.193** — Released 2026-06-26

- Added `autoMode.classifyAllShell` setting to route **all** Bash/PowerShell commands through the auto-mode classifier (previously only arbitrary-code-execution patterns).
- Auto-mode denial reasons now appear in the transcript, the denial toast, and `/permissions` recent denials.
- The changelog also mentions `cla` (likely truncated); full notes at [v2.1.193](https://github.com/anthropics/claude-code/releases/tag/v2.1.193).

## Hot Issues (10 most noteworthy)

1. **[#61415 – Bypass Permissions can’t be enabled on macOS](https://github.com/anthropics/claude-code/issues/61415)** — *Bug, 63 comments, 24 👍*
   Affected workflow: users on macOS Desktop who want “Bypass Permissions” mode see it revert to “Accept Edits” with error “Permission mode couldn’t be changed.” Highly upvoted and actively discussed.

2. **[#61869 – API error: Usage credits required for 1M context window with opus-plan](https://github.com/anthropics/claude-code/issues/61869)** — *Bug (closed), 61 comments, 16 👍*
   Users selecting the `opus-plan` model hit a crediting wall. The issue was closed, but the high engagement indicates confusion around model availability and credit requirements.

3. **[#39636 – Cowork VM guest kernel never boots on ARM64 (Snapdragon X Plus)](https://github.com/anthropics/claude-code/issues/39636)** — *Bug (open), 29 comments, 9 👍*
   Windows ARM users cannot start Cowork VMs – connection timeout every attempt. Long-running issue (since March) with no fix yet.

4. **[#53247 – Desktop fails to launch on Windows after crash (orphaned job object)](https://github.com/anthropics/claude-code/issues/53247)** — *Bug (open), 6 comments, 5 👍*
   After a crash, the app cannot restart until logoff/reboot. HRESULT 0x80070020 in AppModel-Runtime. Impacts daily productivity.

5. **[#71478 – VS Code extension resumes huge sessions without warning, exhausts Max usage](https://github.com/anthropics/claude-code/issues/71478)** — *Bug (open), 4 comments*
   VS Code extension silently restores massive session contexts, burning through token allowances. Reported just yesterday.

6. **[#54179 – Multiple SSH sessions on same remote host invalidate each other’s auth token](https://github.com/anthropics/claude-code/issues/54179)** — *Bug (open), 3 comments, 2 👍*
   macOS Desktop GUI SSH: opening a second session to the same host hangs all sessions due to token collision. Clear repro.

7. **[#70958 – Sub-agent 401 reported as “Request interrupted by user”](https://github.com/anthropics/claude-code/issues/70958)** — *Bug (open), 2 comments, 1 👍*
   Auth expiry in sub-agents is misrepresented to the parent agent, masking the real failure reason. Confusing for multi-agent workflows.

8. **[#71465 – Mouse clicks stop responding in TUI on Terminal.app v2.1.193](https://github.com/anthropics/claude-code/issues/71465)** — *Bug (open), 2 comments*
   Regression in latest release: mouse interactions (links, agent selection) broken in macOS Terminal. Likely a high-priority fix needed.

9. **[#71463 – Safety block halts read-only firewall audit](https://github.com/anthropics/claude-code/issues/71463)** — *Bug (open), 2 comments*
   Auto-mode classifier false-positive: blocks `nft` read operations during a defensive-hardening audit, preventing legitimate security work.

10. **[#71476 – Team subscription billed to API credits after forced re-login](https://github.com/anthropics/claude-code/issues/71476)** — *Bug (open), 1 comment*
    After a “re-login to Claude Console,” billing switches from Team plan to API credits, draining the wrong balance. Immediate cost impact.

## Key PR Progress

Only **one pull request** was updated in the last 24 hours:

- **[#63686 – Bump stale and autoclose timeouts from 14 to 90 days](https://github.com/anthropics/claude-code/pull/63686)**
  Merged (closed). Changes both the `stale` label application and the autoclose period to 90 days of inactivity – a substantial increase from the previous 14-day window. This suggests maintainers are adopting a longer triage horizon, reducing churn of still-relevant issues.

## Feature Request Clusters

- **Localization / Accessibility** — Multiple items request UI localization (Japanese permission dialogs [#71479](https://github.com/anthropics/claude-code/issues/71479)) and keyboard shortcuts for screen-reader users ([#71470](https://github.com/anthropics/claude-code/issues/71470)). No maintainer response yet.

- **Sub-agent labeling** — Users want stable, dispatch-time labels for Agent/Task-tool-spawned subagents in Agent View ([#71292](https://github.com/anthropics/claude-code/issues/71292)) – currently subagents get generic names.

- **Token-waste governance** — Recurring requests for first-class controls to prevent token waste: suppressing `TaskCreate` reminders when plan files exist ([#62323](https://github.com/anthropics/claude-code/issues/62323)), reducing re-reading of files and large shell dumps ([#61835](https://github.com/anthropics/claude-code/issues/61835)).

- **OpenTelemetry docs** — [#71457](https://github.com/anthropics/claude-code/issues/71457) notes that `claude_code.assistant_response` and `OTEL_LOG_ASSISTANT_RESPONSES` are missing from official monitoring docs.

## Developer Pain Points

- **Unexpected token consumption** — Multiple reports of auto-compact loops ([#51088](https://github.com/anthropics/claude-code/issues/51088)), VS Code extension resuming huge sessions ([#71478](https://github.com/anthropics/claude-code/issues/71478)), and Fleet mode burning through allowances on simple type-checking ([#71461](https://github.com/anthropics/claude-code/issues/71461)). High frustration.

- **Auth & billing confusion** — Stale tokens in sub-agents ([#70958](https://github.com/anthropics/claude-code/issues/70958)), cross-session SSH token invalidation ([#54179](https://github.com/anthropics/claude-code/issues/54179)), and Team plans accidentally charging API credits ([#71476](https://github.com/anthropics/claude-code/issues/71476)) create unpredictable cost and workflow disruption.

- **Permission mode reliability** — The macOS Desktop bypass-permissions bug ([#61415](https://github.com/anthropics/claude-code/issues/61415)) is the most-upvoted open issue, indicating safe-mode settings are not sticking for a large subset of users.

- **False positive safety blocks** — The auto-mode classifier blocks legitimate read-only security audits ([#71463](https://github.com/anthropics/claude-code/issues/71463)), eroding trust in the harness for devops/security workflows.

- **Opus model degradation** — [#70267](https://github.com/anthropics/claude-code/issues/70267) reports Opus has become “lobotomized and slow” in recent days – anecdotal but accumulating upvotes (4).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-26

## Today's Update Brief
The team pushed multiple Rust releases (v0.142.2, v0.143.0-alpha.16–25) and the first `codex-zsh` plugin (v0.1.0). Community attention remains focused on a cluster of rate-limit and quota-drain bugs, with four new issues opened in the last 24 hours alone. On the PR side, infrastructure improvements (CI gating, terminal rollout durability) and MCP/plugin runtime refinements dominate changes.

---

## Releases
- **[rust-v0.142.2](https://github.com/openai/codex/releases/tag/rust-v0.142.2)** – MCP tools now use tool search by default when supported; macOS authentication clients can honor system proxy/PAC/WPAD settings.
- **[rust-v0.142.1](https://github.com/openai/codex/releases/tag/rust-v0.142.1)** – Added opt-in Windows system proxy support for authentication (PAC, WPAD, static proxies, bypass rules).
- **rust-v0.143.0-alpha.21/22/25** – Pre-release alpha versions, no changelog details.
- **[codex-zsh-v0.1.0](https://github.com/openai/codex/releases/tag/codex-zsh-v0.1.0)** – First release of the Codex Zsh plugin.

---

## Hot Issues (10 Noteworthy)

1. **[#28879](https://github.com/openai/codex/issues/28879) – Rate-limit cost per token jumped ~10-20x since June 16**
   Affects: ChatGPT Plus users on `gpt-5.5`. The 5h budget drains in 2–3 prompts instead of 20+. 152 comments, 302 👍. Team has not yet acknowledged root cause.

2. **[#25749](https://github.com/openai/codex/issues/25749) – Verification required for inaccessible legacy phone number**
   Users logged in via Google OAuth are forced to verify a phone number they can no longer access, with no recovery path. 64 comments, 38 👍.

3. **[#9203](https://github.com/openai/codex/issues/9203) – Please make `/undo` back**
   Long-standing request (50 comments, 296 👍). Users miss the ability to revert unintended file deletions/modifications, especially when Git tracking is absent.

4. **[#20320](https://github.com/openai/codex/issues/20320) – Phone verification asks for code but never sends one**
   New users unable to upgrade to Pro because the verification flow is broken. 43 comments.

5. **[#25719](https://github.com/openai/codex/issues/25719) – macOS Desktop repeatedly triggers `syspolicyd`/`trustd` CPU/memory runaway**
   After using computer-use features, system daemons consume excessive resources until reboot. 34 comments, 54 👍. Affects Plus users.

6. **[#5957](https://github.com/openai/codex/issues/5957) – Auto-compaction causes GPT-5-Codex to forget mid-task**
   Context compaction drops edits and task state, forcing restarts. Enterprise user, 31 comments. Workflow: long coding sessions.

7. **[#28978](https://github.com/openai/codex/issues/28978) – Desktop app v26.616: new conversations fail with "missing field `inputSchema`"**
   Regression in MCP tool calling. CLI with same config works. 25 comments. Pro subscribers blocked from starting conversations.

8. **[#29955](https://github.com/openai/codex/issues/29955) – Quota drained instantly: 100 credits gone after 1 message**
   Pro*5 user reports 5h limit drops to 0% in a single turn. 23 comments, opened today.

9. **[#17265](https://github.com/openai/codex/issues/17265) – MCP OAuth tokens not auto-refreshed even when refresh token is stored**
   MCP tool calls fail after access token expires. Team has not responded with fix. 19 comments, 39 👍.

10. **[#30002](https://github.com/openai/codex/issues/30002) – Server-side quota accounting over-reports after 5h reset**
    Pro account hit limit again after 41 min / ~1.35M tokens, whereas full window should allow ~156M tokens. 19 comments, opened today.

---

## Key PR Progress (10 Important)

1. **[#30146](https://github.com/openai/codex/pull/30146) – Add single required CI gate**
   Replaces many GitHub statuses with one stable `pr-ci` workflow covering Bazel, blob size, rust CI, etc. Aims to reduce CI flakiness.

2. **[#30145](https://github.com/openai/codex/pull/30145) – Reuse walk inventory for environment skill metadata**
   Optimizes environment skill discovery by reusing the file walk result instead of a second scan. Improves startup time.

3. **[#29375](https://github.com/openai/codex/pull/29375) – Support npm marketplace plugin sources**
   Fixes deserialization bug that blocked npm-backed plugins from appearing in `plugin list --available`. Now npm sources are loadable.

4. **[#30093](https://github.com/openai/codex/pull/30093) – Project selected plugin runtime by environment availability**
   Separates stable plugin metadata from live MCP runtime state, preventing stale runtime references during environment switches.

5. **[#30127](https://github.com/openai/codex/pull/30127) – Route MCP elicitation to its live runtime**
   Handles race conditions when environment availability changes mid-MCP call (e.g., while user review is pending). Prevents broken tool calls.

6. **[#30109](https://github.com/openai/codex/pull/30109) – Test selected capabilities across availability and resume**
   End-to-end integration tests for World State, executor skills, MCP processes, and resume with `deferred_executor` enabled.

7. **[#30141](https://github.com/openai/codex/pull/30141) – Load hook-backed user instructions**
   Resolves user-level instructions at the same lifecycle boundary as global `AGENTS.md`, enabling dynamic instruction injection.

8. **[#29927](https://github.com/openai/codex/pull/29927) – Add `history_mode` to thread**
   Introduces `legacy` vs `paginated` history mode for thread metadata, stored in both JSONL and SQLite. Enables future UI improvements.

9. **[#29683](https://github.com/openai/codex/pull/29683) – Managed new-thread model settings**
   Admins can set persistent defaults for model, reasoning effort, and service tier in the Desktop App’s new-thread dialog. User can override.

10. **[#30144](https://github.com/openai/codex/pull/30144) – Fix terminal rollout durability**
    Closes a window where `TurnComplete`/`TurnAborted` events could be delivered before being flushed, causing data loss on ordered remote writers.

---

## Feature Request Clusters

- **Undo / Rollback** – Several requests for `/undo` restoration ([#9203](https://github.com/openai/codex/issues/9203), 296 👍). Users want safe revert of file changes without Git.
- **Accessibility** – Screen-reader-friendly TUI mode ([#20489](https://github.com/openai/codex/issues/20489)) to improve VoiceOver experience.
- **Update Control** – Ability to disable automatic app updates ([#18546](https://github.com/openai/codex/issues/18546)).
- **Remote Linux Headless** – Support for headless Linux hosts from Codex mobile without keeping a desktop app online ([#23200](https://github.com/openai/codex/issues/23200), 21 👍).
- **`exec resume` without prompt** – Allow resuming active goals without injecting a synthetic `continue` ([#24016](https://github.com/openai/codex/issues/24016)).

---

## Developer Pain Points

- **Rate-limit / Quota drain** – At least seven open issues (e.g., [#28879](https://github.com/openai/codex/issues/28879), [#29955](https://github.com/openai/codex/issues/29955), [#30002](https://github.com/openai/codex/issues/30002)) report excessive consumption, token-cost jumps, or server-side over-reporting. High community frustration.
- **Authentication / Phone verification** – Broken verification flows ([#25749](https://github.com/openai/codex/issues/25749), [#20320](https://github.com/openai/codex/issues/20320)) block login and upgrades.
- **macOS Desktop performance** – `syspolicyd`/`trustd` runaway CPU ([#25719](https://github.com/openai/codex/issues/25719), [#28071](https://github.com/openai/codex/issues/28071)) forces reboots after computer-use sessions.
- **MCP token refresh** – OAuth tokens not auto-refreshing ([#17265](https://github.com/openai/codex/issues/17265)) breaks MCP tool calls mid-session.
- **Windows sandbox compatibility** – Desktop app shows sandbox installer dialogs on every `apply_patch` ([#29200](https://github.com/openai/codex/issues/29200), [#30009](https://github.com/openai/codex/issues/30009)), and can destabilize Windows under memory pressure ([#30050](https://github.com/openai/codex/issues/30050)).
- **Context compaction / forgetfulness** – Auto-compaction loses task state ([#5957](https://github.com/openai/codex/issues/5957)), and compaction+resume still burns high context ([#29947](https://github.com/openai/codex/issues/29947)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-26

## Today's Update Brief

The project saw high activity with two new releases (v0.50.0-preview.1 and v0.49.0 stable), 33 open PRs, and 50 active issues. The **v0.50.0-preview.1** release introduces dependency injection for the tool registry, while the stable v0.49.0 is primarily a maintenance release. A critical path traversal vulnerability fix was backported to the nightly channel, and the team is actively addressing several long-standing agent reliability bugs.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.50.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)** | Preview | Tool registry DI refactor; CI fixes for release verification (binary shadowing, npm ignore scripts) |
| **[v0.49.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0)** | Stable | Dependabot cooldown for npm packages; version bump; infrastructure improvements |
| **[v0.49.0-nightly.20260625.gd845bc5d4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0-nightly.20260625.gd845bc5d4)** | Nightly | **Security fix**: path traversal prevention during skill installation; pending tools & trust overrides fix |

---

## Hot Issues

### 1. [Subagent recovery falsely reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, Bug)
`codebase_investigator` subagent reports `status: "success"` even when it hits the turn limit before doing any analysis. This masks a real interruption as a completed goal. **Impact**: Users get misleading success signals from subagents that never actually completed their work. **Reaction**: 2 👍, 8 comments — the community is asking for honest failure reporting.

### 2. [Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) (P1, Epic)
Tracks follow-up work on behavioral eval tests introduced in issue #15300. Currently 76 behavioral eval tests exist across 6 supported Gemini models. **Impact**: Foundation for measuring regressions across model versions.

### 3. [Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) (P2, Epic)
Investigates whether AST-aware tools can improve codebase navigation — more precise method bounds, reduced token noise, reduced turns from misaligned reads. **Impact**: Could significantly reduce token consumption and improve code understanding.

### 4. [Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, Bug)
When Gemini CLI defers to the generalist agent for simple tasks (e.g., folder creation), it hangs forever (up to 1 hour reported). Workaround: instructing the model not to use subagents. **Reaction**: 8 👍, 7 comments — widespread frustration.

### 5. [Gemini doesn't use skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, Bug)
Custom skills (gradle, git) exist with clear descriptions, but the model almost never invokes them unless explicitly instructed. **Impact**: Users invest in skill creation that goes unused by the agent.

### 6. [Shell execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, Bug)
Simple CLI commands hang after completion, still showing "Awaiting user input". **Impact**: Blocks automation workflows. **Reaction**: 3 👍, 4 comments — reproducible and frustrating.

### 7. [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) (P1, Bug)
Browser agent terminates with GOAL reason but fails on Wayland display servers. **Impact**: Linux users on Wayland cannot use browser automation.

### 8. [400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) (P2, Bug)
When more than 400 tools are available (likely threshold is 128), CLI encounters a 400 error. **Impact**: Power users with many MCP servers or skills hit this limit.

### 9. [Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) (P2, Bug)
If the extraction agent decides a session is too low-signal to process, it remains unprocessed and gets re-surfaced repeatedly. **Impact**: Infinite retry loops in background extraction.

### 10. [Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, Customer Issue)
Model occasionally uses dangerous commands (`git reset`, `--force`) when safer alternatives exist. **Impact**: Risk of data loss, especially during database operations.

---

## Key PR Progress

### 1. [Cloud Run webhook ingestion service for Caretaker Agent](https://github.com/google-gemini/gemini-cli/pull/28015) (XL)
Implements a webhook service that ingests GitHub webhooks, verifies signatures, stores issues in Firestore, and publishes to Pub/Sub. **Impact**: Enables automated issue triaging infrastructure.

### 2. [Strip thoughts from scrubbed history to prevent thought leakage](https://github.com/google-gemini/gemini-cli/pull/27971) (M/L)
Fixes a critical bug where the model's internal monologue leaks into plain-text history turns, causing infinite loop monologues in subsequent turns. **Impact**: Prevents model confusion and hallucination cascades.

### 3. [Wrap read_mcp_resource output with wrapUntrusted()](https://github.com/google-gemini/gemini-cli/pull/27979) (S)
Ensures MCP resource text is treated as untrusted content, consistent with MCP tool handling. **Impact**: Security consistency for MCP integrations.

### 4. [Ignore stale update_topic calls after session reset](https://github.com/google-gemini/gemini-cli/pull/28153) (M)
Prevents orphaned `update_topic` tool calls from writing to topic state after `/clear` resets the session. **Impact**: Fixes topic state corruption on session boundaries.

### 5. [Respect .gitignore/.geminiignore in skill resource listing](https://github.com/google-gemini/gemini-cli/pull/28149) (S)
When building a skill's folder structure for the model, now properly excludes files matching `.gitignore`/`.geminiignore`. **Impact**: Reduces noise and prevents exposing irrelevant files to the model.

### 6. [Fix Docker multi-stage build artifact copying](https://github.com/google-gemini/gemini-cli/pull/28148) (XS)
The Dockerfile was copying `.tgz` artifacts from the wrong stage, breaking the runtime image. **Impact**: Docker-based deployments now work correctly.

### 7. [Prevent bad NPM releases and promote job crashes](https://github.com/google-gemini/gemini-cli/pull/28147) (M)
Reorders verification so integration tests run *before* npm publish, preventing dangling releases without GitHub tags. **Impact**: Stops the release pipeline from leaving broken states on npm.

### 8. [Detect available editors lazily to avoid slow startup](https://github.com/google-gemini/gemini-cli/pull/28144) (M)
`EditorSettingsManager` now probes editors lazily instead of at module scope, eliminating startup delay on Windows where `execSync` per editor is expensive. **Impact**: Faster CLI startup, especially on Windows.

### 9. [Resolve MCP resources by server to prevent cross-server confusion](https://github.com/google-gemini/gemini-cli/pull/28143) (L)
Fixes `read_mcp_resource` returning content from the wrong server when two MCP servers expose the same URI. **Impact**: Critical for users with multiple MCP servers.

### 10. [Honor GOOGLE_CLOUD_LOCATION for Vertex AI with API key](https://github.com/google-gemini/gemini-cli/pull/28142) (M)
Fixes a bug where `GOOGLE_CLOUD_LOCATION` is silently ignored when using API key auth with Vertex AI, routing to global endpoint instead. **Impact**: Regional compliance and latency improvements for Vertex AI API key users.

---

## Feature Request Clusters

### Auto Memory Improvements
Multiple issues from @SandyTao520 target the Auto Memory system:
- **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)**: Stop retrying low-signal sessions indefinitely
- **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)**: Surface or quarantine invalid inbox patches
- **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)**: Add deterministic redaction and reduce logging
- **[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)**: General memory system quality improvements

The cluster focuses on making the memory system more robust — preventing infinite retries, validating patches, and ensuring secrets are redacted before model context.

### AST-Aware Coding Tools
Two related EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) explore using AST-aware tools for file reading, search, and codebase mapping. The intent is to replace naive line-based reads with precisely-bounded method reads, reducing token consumption and improving code understanding quality.

### Subagent Trajectory Visibility
Request [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) asks that subagent trajectories be visible via `/chat share`. Currently trajectories are saved but inaccessible, making evaluation and debugging difficult.

### Agent Self-Awareness
Issue [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) proposes that the agent understand its own hotkeys, CLI flags, and mechanics well enough to act as its own expert guide — answering user questions about usage accurately.

---

## Developer Pain Points

1. **Agent reliability**: The top frustration cluster — agent hangs ( [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) ), shell execution getting stuck ( [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) ), and subagents failing silently ( [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) , [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) ) are the most upvoted and commented issues.

2. **Subagent misuse**: The model either doesn't use custom skills/subagents at all ( [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) ) or uses them without permission ( [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) ). Both behaviors frustrate users who want predictable agent behavior.

3. **Shell execution problems**: Beyond the "Waiting input" hang ( [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) ), users report the model creating temp scripts in random directories ( [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) ) and getting stuck at interactive prompts ( [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) ).

4. **Destructive commands**: Multiple users report the agent using `--force` , `git reset` , or dangerous database operations when safer alternatives exist ( [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) ).

5. **Platform friction**: Browser agent fails on Wayland ( [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) ), slow startup on Windows due to eager editor detection ( [#28144](https://github.com/google-gemini/gemini-cli/issues/28144) ), and terminal corruption after external editor exit ( [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) ).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-26

## Today’s Update Brief

No new releases were published in the last 24 hours, but the community remained active with 31 issues updated and 1 pull request opened. The most active discussions centered on authentication failures in resumed sessions, plugin hook limitations, Windows rendering regressions, and requests for better model/theme visibility. A single PR adds basic project configuration files.

---

## Releases

*None in the last 24 hours.*

---

## Hot Issues (10 selected)

### 1. [#700 – Provide a way to list all currently supported models](https://github.com/github/copilot-cli/issues/700)
**Area:** models
**Workflow:** Users want a simple command like `copilot --list-models` to see available models and multiplier info without trial-and-error. Currently no discoverable CLI flag exists.
**Impact:** 14 comments, 4 👍 – long-standing request (opened Dec 2025) with steady traction.

### 2. [#2643 – `preToolUse` silent rewrite still shows confirmation dialog](https://github.com/github/copilot-cli/issues/2643)
**Area:** plugins
**Workflow:** Plugin hooks that call `updatedInput` with `permissionDecision: allow` are supposed to bypass user confirmation, but Copilot CLI v1.0.24+ still prompts on every rewritten command. Breaks automation for plugin authors.
**Impact:** 12 comments, 2 👍 – maintainer has not confirmed fix yet.

### 3. [#3596 – Error loading model list: Not authenticated (resumed sessions)](https://github.com/github/copilot-cli/issues/3596)
**Area:** authentication, sessions, models
**Workflow:** Resuming a session with `--resume` causes `/model` to fail with "Not authenticated", while new sessions work fine. Blocks model switching mid-conversation.
**Impact:** 7 comments, 11 👍 – high community engagement; root cause unclear.

### 4. [#3501 – Scroll bar makes text unalign on Windows](https://github.com/github/copilot-cli/issues/3501)
**Area:** platform-windows, terminal-rendering
**Workflow:** After the vertical scroll bar was introduced (v50-ish), text alignment breaks on Windows Console Host and Terminal. User reports Copilot cannot self-help to disable it.
**Impact:** 5 comments, 9 👍 – visual regression affecting Windows workflow.

### 5. [#3534 – `/copy` fails on WSL2 ARM64 due to `cmd.exe` quoting bug](https://github.com/github/copilot-cli/issues/3534)
**Area:** input-keyboard, platform-windows
**Workflow:** Clipboard operation (`/copy`) on WSL2 ARM64 triggers `clip.exe exited with code 1`. Root cause: quoting in `cmd.exe` wrapper introduced in v1.0.55-1.
**Impact:** 4 comments, 4 👍 – blocks clipboard workflow for ARM WSL users.

### 6. [#3636 – Voice mode cannot be enabled due to model catalog fetch failure on corporate VPN](https://github.com/github/copilot-cli/issues/3636)
**Area:** networking, models
**Workflow:** Using `/voice` fails when the CLI cannot reach the voice STT model catalog. Enterprise users behind VPNs are completely blocked from voice mode.
**Impact:** 3 comments, 5 👍 – networking bug with no workaround other than disabling VPN.

### 7. [#3909 – Enterprise/org server-managed settings for local CLI](https://github.com/github/copilot-cli/issues/3909)
**Area:** enterprise, configuration
**Workflow:** Org admins cannot centrally push environment variables or settings to local Copilot CLI installs – only cloud agents support org secrets.
**Impact:** 2 comments, 0 👍 – new request but addresses a real gap for enterprise deployments.

### 8. [#2123 – Fine-grained per-element theming](https://github.com/github/copilot-cli/issues/2123)
**Area:** theming-accessibility
**Workflow:** Users want to customize border colors, chevrons, prompt vs response foreground independently, not just dark/light presets.
**Impact:** 1 comment, 1 👍 – modest support but reflects growing desire for terminal UI personalization.

### 9. [#3935 – Theme ignored in VSCode terminal (v1.0.64/65)](https://github.com/github/copilot-cli/issues/3935)
**Area:** theming-accessibility
**Workflow:** Since v1.0.64, the CLI always shows light theme inside VSCode terminal regardless of user's editor theme (dark, solarized).
**Impact:** 0 comments, 0 👍 – brand new bug, no workaround yet.

### 10. [#3931 – Session resume missing recent sessions](https://github.com/github/copilot-cli/issues/3931)
**Area:** sessions
**Workflow:** `--resume` or `/resume` shows many sessions but not the most recent ones worked on the previous day. Users lose continuity.
**Impact:** 0 comments, 0 👍 – fresh frustration, no maintainer response yet.

---

## Key PR Progress

Only one pull request was updated in the last 24 hours:

### [#3928 – Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928)
**Author:** @tpsaint
**Status:** Open, no comments
**Summary:** Adds a basic `.gitignore` and settings configuration file to the repository. Likely a housekeeping contribution; impact on end-users is minimal.

*No other PRs are active. The repository saw very little code change activity today.*

---

## Feature Request Clusters

Several recurring themes emerged from today’s issue data:

- **Model management & visibility**
  Requests to list models (#700), fix model picker on resumed sessions (#3596, #3680), display monthly AIC quota (#3932), and show per-turn timestamps (#3930).

- **Plugin & MCP ergonomics**
  Silent command rewriting (#2643), MCP enable/disable from interactive menu (#2956, #3564), asynchronous slash commands (#3829), and MCP server instructions being ignored (#1579).

- **Theming & terminal UX**
  Per-element theming (#2123), VSCode theme regression (#3935), scroll bar alignment (#3501), and mouse tracking issues (#3876).

- **Enterprise & org controls**
  Server-managed settings for local CLI (#3909), MCP server blocked by policy (#3934), and Azure DevOps integration for "Up next" panel (#3794).

- **Session reliability**
  Missing sessions in resume list (#3931), Escape behavior with queued prompts (#3692), and queued vs pending message ambiguity (#3919).

---

## Developer Pain Points

- **Authentication state loss on session resume** – Two separate issues (#3596, #3680) report that `/model` fails with "Not authenticated" after `--resume`, while all other commands work. This blocks model switching mid-session.
- **Theme detection broken in VSCode terminal** – v1.0.64+ ignores user theme (#3935), a regression affecting a large user base.
- **Plugin silent rewrite broken** – The `preToolUse` hook cannot bypass confirmation even with `permissionDecision: allow` (#2643), frustrating plugin authors trying to automate workflows.
- **Platform-specific regressions** – Windows scroll bar alignment (#3501) and WSL2 ARM64 clipboard quoting (#3534) are recent regressions with no quick fix yet.
- **Enterprise policy blocking** – Custom MCP servers flagged as "blocked by policy" (#3934) without clear cause, plus voice mode unreachable on VPN (#3636).
- **Session continuity issues** – Users cannot reliably resume the most recent session (#3931), breaking long-running workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-26

## Today's Update Brief

Activity on the Kimi Code CLI repository was low today, with no new releases or pull requests in the past 24 hours. Two new bug issues were opened, both filed yesterday, reporting interface rendering instability and MCP tool compatibility problems. The community’s focus remains on stability and UI reliability in the current v0.19.2 release.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### #2475 — [bug] MCP tools
- **Author:** [@ptyll](https://github.com/ptyll)
- **Created:** 2026-06-25 | **Updated:** 2026-06-25 | **Comments:** 0 | **👍:** 0
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2475
- **Summary:** The user reports that an MCP server with 212 tools (with descriptions) causes issues. Running Kimi Code CLI v0.19.2 on Windows with subscription plan and model k2.7.
- **Affected Workflow / Impact:** Developers relying on MCP servers with a large number of tools may experience failures or degraded behavior when querying tool descriptions. This affects agentic or tool-use workflows.
- **Community Reaction:** No comments or reactions yet; likely a niche but impactful bug for heavy MCP users.

### #2474 — [bug] kimi code cli界面一直在各种抖动，莫名其妙重新从头渲染整个对话
- **Author:** [@yudichimiantiao](https://github.com/yudichimiantiao)
- **Created:** 2026-06-25 | **Updated:** 2026-06-25 | **Comments:** 0 | **👍:** 0
- **Link:** https://github.com/MoonshotAI/kimi-cli/issues/2474
- **Summary:** On Linux (kernel 5.10), using K2.7 Code Thinking model, the CLI interface keeps shaking and inexplicably re-renders the entire conversation from scratch.
- **Affected Workflow / Impact:** Terminal-based interaction with the CLI becomes nearly unusable due to constant repainting and visual instability. This directly impacts user experience for Linux developers.
- **Community Reaction:** No comments or reactions yet; likely affects a subset of Linux users with specific terminal environments or configurations.

## Key PR Progress

None observed today.

## Feature Request Clusters

No feature requests were filed in the last 24 hours. Both new issues are bug reports.

## Developer Pain Points

- **Terminal rendering instability on Linux:** Issue #2474 describes persistent UI shaking and full conversation re-renders, making the CLI difficult to use for extended sessions. This is a recurring problem that degrades the interactive experience.
- **Large MCP tool sets causing failures:** Issue #2475 suggests that MCP servers with many tools (212 in this case) may overwhelm the client, either due to parsing, prompt construction, or model interaction limits. This affects developers building complex tool-augmented agents.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the **OpenCode Community Digest** for **2026-06-26**.

---

## OpenCode Community Digest

**Date:** 2026-06-26

### 1. Today’s Update Brief

Activity remains high with the release of **v1.17.11**, which introduces session snapshots and revert controls, alongside notable stability work. The community is heavily focused on a **Windows segmentation fault regression** in v1.17.10 and a **large memory megathread** collecting heap snapshots for diagnostics. Several high-quality PRs landed around bug fixes for plan mode, MCP timeout configuration, and UI improvements.

### 2. Releases

- **v1.17.11** (just released): Introduces **session snapshots and revert controls**, allowing users to roll a session back to an earlier message, including file changes. Also fixes a bug where the MCP OAuth URL was not printed in certain scenarios, ensuring manual sign-in remains functional.

### 3. Hot Issues

1.  **#20695 – Memory Megathread [OPEN]** *(103 comments, 74 👍)*
    - **What:** A central tracking issue for memory problems. The maintainers are specifically asking for **heap snapshots**, not LLM-suggested fixes.
    - **Impact:** Widespread performance degradation affecting long-running sessions.
    - **Community:** High engagement; users are providing diagnostic data.
    - *Link:* [Issue #20695](https://github.com/anomalyco/opencode/issues/20695)

2.  **#33742 – v1.17.10 crash with Bun segfault on Windows [OPEN]** *(45 comments, 40 👍)*
    - **What:** A critical regression where upgrading to v1.17.10 causes native segmentation faults in embedded Bun on Windows. v1.17.9 remains stable.
    - **Impact:** Blocks Windows users from upgrading; forces downgrades.
    - **Community:** Strong signal; the fix (using Bun canary) is already in a PR (#33822).
    - *Link:* [Issue #33742](https://github.com/anomalyco/opencode/issues/33742)

3.  **#15585 – Free model "free usage exceed" error [CLOSED]** *(52 comments, 13 👍)*
    - **What:** Users on free LLM models (e.g., "Big Pickle") hit an unexpected usage limit after long sessions.
    - **Impact:** Blocks users relying on free tier models for productivity.
    - **Community:** High frustration; resolved on 2026-06-25.
    - *Link:* [Issue #15585](https://github.com/anomalyco/opencode/issues/15585)

4.  **#16610 – Start-up hang when inotify instances exhausted [OPEN]** *(14 comments, 7 👍)*
    - **What:** OpenCode hangs if `.git` repos exist and the system runs out of inotify watches.
    - **Impact:** Linux users with many repos or low `max_user_instances` get stuck on launch.
    - **Community:** Long-standing issue; still open.
    - *Link:* [Issue #16610](https://github.com/anomalyco/opencode/issues/16610)

5.  **#8145 – Multiple account login & round-robin load balancing [OPEN]** *(7 comments, 19 👍)*
    - **What:** Feature request to log in with multiple Codex OAuth accounts, enabling round-robin load balancing.
    - **Impact:** Developer workflow; users want to maximize API rate limits.
    - **Community:** High 👍 count; clear demand for OAuth multi-account support.
    - *Link:* [Issue #8145](https://github.com/anomalyco/opencode/issues/8145)

6.  **#33399 – Random 99-100% CPU utilization [OPEN]** *(6 comments)*
    - **What:** The CLI process periodically spikes to 100% CPU, making the application unresponsive.
    - **Impact:** Severe performance degradation; effectively dead during spikes.
    - **Community:** Users reporting since v1.3.3; root cause unclear.
    - *Link:* [Issue #33399](https://github.com/anomalyco/opencode/issues/33399)

7.  **#17557 – `/compact` command does not compress, increases context [OPEN]** *(5 comments, 1 👍)*
    - **What:** The `/compact` command fails to reduce context; token count increases instead.
    - **Impact:** Breaks an essential workflow for managing long sessions.
    - **Community:** Bug report with clear before/after evidence.
    - *Link:* [Issue #17557](https://github.com/anomalyco/opencode/issues/17557)

8.  **#31051 – Emit `tui.session.select` event on in-TUI session switches [OPEN]** *(6 comments, 1 👍)*
    - **What:** Plugin developers cannot detect when users switch sessions inside the TUI.
    - **Impact:** Breaks plugins that rely on session-based state tracking.
    - **Community:** Plugin ecosystem request.
    - *Link:* [Issue #31051](https://github.com/anomalyco/opencode/issues/31051)

9.  **#33828 – Blank screen on Windows after install [OPEN]** *(6 comments)*
    - **What:** Fresh `npm install -g opencode-ai` on Windows shows a completely blank screen.
    - **Impact:** Blocks new Windows users from onboarding.
    - **Community:** Recent report; no workaround yet.
    - *Link:* [Issue #33828](https://github.com/anomalyco/opencode/issues/33828)

10. **#33952 – Git Changes causes huge API call delay [OPEN]** *(2 comments)*
    - **What:** Enabling the "Git Changes" feature introduces ~3-minute delays before API calls are sent.
    - **Impact:** Critical for users with large Git histories; makes TUI unusable.
    - **Community:** High impact for heavy VCS users.
    - *Link:* [Issue #33952](https://github.com/anomalyco/opencode/issues/33952)

### 4. Key PR Progress

1.  **#33822 – Use Bun canary for beta channel** *(OPEN)*
    - **What:** Proposes switching the Windows beta channel to Bun canary to fix the segfault crash in v1.17.10.
    - **Status:** Open; directly addresses the #33742 regression.
    - *Link:* [PR #33822](https://github.com/anomalyco/opencode/pull/33822)

2.  **#33918 – Include v2 plugin skills in legacy skill list** *(OPEN)*
    - **What:** Fixes #33896 by ensuring v2 plugin-registered skills appear in the `/skills` command and instance skill API.
    - **Status:** Open; important for plugin compatibility.
    - *Link:* [PR #33918](https://github.com/anomalyco/opencode/pull/33918)

3.  **#33967 – Deny bash in plan mode; scope subagent permissions** *(OPEN)*
    - **What:** Closes #22641; prevents unrestricted bash execution in plan mode by explicitly denying the "bash" permission, not just "edit".
    - **Status:** Open; addresses a security/permission bypass.
    - *Link:* [PR #33967](https://github.com/anomalyco/opencode/pull/33967)

4.  **#33977 – Split MCP timeout into startup and request budgets** *(OPEN)*
    - **What:** Replaces a single MCP timeout with separate `timeout.startup` and `timeout.request` values, with per-server overrides.
    - **Status:** Open; improves reliability of MCP connections.
    - *Link:* [PR #33977](https://github.com/anomalyco/opencode/pull/33977)

5.  **#33979 – Stabilize titlebar tab alignment** *(OPEN)*
    - **What:** Fixes tab alignment in the v2 titlebar by using proper flexbox layout instead of asymmetric padding.
    - **Status:** Open; UI polish.
    - *Link:* [PR #33979](https://github.com/anomalyco/opencode/pull/33979)

6.  **#33974 – Enable auto-accept in session settings** *(OPEN)*
    - **What:** Fixes the session settings dialog to properly scope to the active tab's server and session lineage.
    - **Status:** Open; improves multi-server UX.
    - *Link:* [PR #33974](https://github.com/anomalyco/opencode/pull/33974)

7.  **#33969 – Fix TUI compact number rounding overflow** *(CLOSED)*
    - **What:** Fixes a bug where values between 999,950 and 999,999 were incorrectly displayed as "1000.0K" instead of "1.0M".
    - **Status:** Closed; merged.
    - *Link:* [PR #33969](https://github.com/anomalyco/opencode/pull/33969)

8.  **#33932 – Add "Rename Session" to right-click context menu** *(CLOSED)*
    - **What:** Adds the ability to rename sessions from the UI context menu.
    - **Status:** Closed; likely merged.
    - *Link:* [PR #33932](https://github.com/anomalyco/opencode/pull/33932)

9.  **#12721 – Add tokens per second to response footer** *(OPEN)*
    - **What:** Adds a `tok/s` counter to assistant message footers to help compare model/provider speed.
    - **Status:** Open; useful performance transparency feature.
    - *Link:* [PR #12721](https://github.com/anomalyco/opencode/pull/12721)

10. **#32370 – Linux clipboard selection support** *(OPEN)*
    - **What:** Adds support for copying selected text to the Linux clipboard (fixes #29963).
    - **Status:** Open; long-requested feature for Linux users.
    - *Link:* [PR #32370](https://github.com/anomalyco/opencode/pull/32370)

### 5. Feature Request Clusters

- **Multi-Account & OAuth Management:**
    - Multiple requests for storing secrets in system credential stores (#4318) and supporting multiple Codex OAuth accounts with round-robin load balancing (#8145).
    - Demand for configurable `OAUTH_CALLBACK_HOST` (#33966) for proxy setups.
- **Session & Metadata:**
    - Requests for richer session metadata in the SDK (#33964) and the ability to rename sessions from the UI (#33932, now resolved via PR).
    - Need for event emission on session navigation in the TUI (#31051).
- **Model Discovery & Configuration:**
    - Requests for LM Studio auto-detection of models via the `/v1/models` endpoint (#23327) and the ability to blacklist/whitelist provider models (#33972, resolved via docs PR).

### 6. Developer Pain Points

- **Windows Stability:** The **Bun segfault on Windows** (#33742) was the most impactful bug today, affecting a large number of users and forcing downgrades.
- **Performance Regression:** The **99-100% CPU utilization** issue (#33399) and the **Git Changes delay** (#33952) are causing severe slowdowns in standard workflows.
- **Context Management:** The **`/compact` command failure** (#17557) remains a pain point for developers managing long sessions.
- **Start-up and Onboarding:** New users on Windows face **blank screen issues** (#33828), and Linux users face **start-up hangs** due to inotify limits (#16610).
- **Permission & Security:** The **plan mode bash bypass** (#33967) highlights a need for more granular permission controls.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-26, structured as requested.

---

## Qwen Code Community Digest – 2026-06-26

### 1. Today's Update Brief

A single nightly release (`v0.19.2-nightly.20260625`) was published with a fix for `web_fetch` JSON fallback handling. Community activity remains high, with 22 issues updated in the last 24 hours and 50 pull requests active, indicating strong ongoing development and user engagement. Notable points of friction include a widely-reported Windows PowerShell memory leak and repeated requests for configurable timeout behavior for agent-initiated commands.

### 2. Releases

- **[v0.19.2-nightly.20260625.b2f11b735](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735)**: A nightly build containing a single fix: `fix(core): allow web_fetch JSON fallback`.
    - **Key Change**: This fix addresses an issue where web fetching could fail if the initial parsing of the response as JSON was unsuccessful. The fallback mechanism has been corrected to handle these edge cases.

### 3. Hot Issues (Top 10)

1.  **[#401](https://github.com/QwenLM/qwen-code/issues/401) [OPEN] [P1] ✕ [API Error: Streaming setup timeout after 6s]**
    - **Workflow**: CLI API interactions.
    - **Impact**: Users face a hard timeout that stops streaming responses, hindering work on larger codebases or complex queries.
    - **Community**: 10 comments, indicating this is a stubborn issue affecting multiple users. A workaround was suggested (increase timeout in config), but the root cause remains under investigation.

2.  **[#5873](https://github.com/QwenLM/qwen-code/issues/5873) [OPEN] [P1] 难绷逆天BUG：用一次工具开一个powershell 并且不再关闭 直到OOM (Critical Bug: New PowerShell Process for Each Tool Use Until OOM)**
    - **Workflow**: Windows shell tool execution.
    - **Impact**: A critical memory leak on Windows. Every tool call spawns a new PowerShell process that is never terminated, leading to an Out-of-Memory (OOM) crash.
    - **Community**: This high-severity bug has ignited strong frustration. It's tagged `status/ready-for-agent`, suggesting it's a top priority for automated or manual fix.

3.  **[#5838](https://github.com/QwenLM/qwen-code/issues/5838) [OPEN] [P2] Allow user to adjust agent initiated cmd timeout.**
    - **Workflow**: Agent-driven automation.
    - **Impact**: Agents performing long-running tasks (e.g., build, deploy) hit a hard timeout, causing failures and lost progress.
    - **Community**: 5 comments. The request is clear and the rationale is well-supported. Assigned `welcome-pr`, inviting external contributors.

4.  **[#5867](https://github.com/QwenLM/qwen-code/issues/5867) [OPEN] [P2] feat(memory): add a git-shared "team" tier to auto-memory**
    - **Workflow**: Collaborative development.
    - **Impact**: Auto-memory is currently user- and project-private. A "team" tier would allow facts and learnings to be shared across a team using the same git repository.
    - **Community**: 3 comments, with a well-defined proposal for the implementation.

5.  **[#5866](https://github.com/QwenLM/qwen-code/issues/5866) [OPEN] [P2] feat(web-shell): live syntax highlighting for streaming code blocks**
    - **Workflow**: Web Shell user experience.
    - **Impact**: Code blocks displayed in the web shell currently lack syntax highlighting during streaming, reducing readability.
    - **Community**: 2 comments. The author has a working implementation and is seeking an RFC on the approach before submitting a PR.

6.  **[#5875](https://github.com/QwenLM/qwen-code/issues/5875) [OPEN] [P2] improve skill command name auto-complete matching**
    - **Workflow**: CLI skill execution.
    - **Impact**: Users must type the exact prefix of a skill name for autocomplete. This is slow and error-prone for users with many skills.
    - **Community**: 1 comment, but a clear and simple feature request to improve discoverability.

7.  **[#5861](https://github.com/QwenLM/qwen-code/issues/5861) [CLOSED] [P1] Context compression request should use stream=true to avoid gateway timeout**
    - **Workflow**: Long-running sessions that trigger context compression.
    - **Impact**: Non-streaming compression requests on large contexts can hit gateway timeouts, breaking the session.
    - **Community**: A clear, actionable bug report. It was closed quickly, suggesting the fix (making compression streaming) is straightforward.

8.  **[#5840](https://github.com/QwenLM/qwen-code/issues/5840) [CLOSED] Internal error: Connection error (VSCode Extension)**
    - **Workflow**: VSCode Companion Extension.
    - **Impact**: The extension failed to connect, rendering it inoperable.
    - **Community**: 4 comments. Closed as `need-information`, implying the initial report lacked details needed to reproduce the issue.

9.  **[#5641](https://github.com/QwenLM/qwen-code/issues/5641) [CLOSED] [P2] Qwen Code repeats completed shell tool results on current npm latest**
    - **Workflow**: Shell tool execution with a deterministic OpenAI-compatible provider.
    - **Impact**: A severe bug where the agent sees duplicate results from a completed shell call, causing confusion and incorrect actions.
    - **Community**: 4 comments. Closed, indicating a fix has been identified or is in progress. This is a high-impact issue for users on the latest npm version.

10. **[#5629](https://github.com/QwenLM/qwen-code/issues/5629) [OPEN] feat(core): surface PreToolUse hook 'ask' as a TUI confirmation**
    - **Workflow**: Tool use permissions (security & UX).
    - **Impact**: The `PreToolUse` hook's `ask` decision is treated as a denial, bypassing the user's ability to approve a sensitive action.
    - **Community**: A long-standing issue with a linked PR in progress, reflecting a desire for a more granular and interactive permission model.

### 4. Key PR Progress (Top 10)

1.  **[#5828](https://github.com/QwenLM/qwen-code/pull/5828) [OPEN] feat(core): add bundled extension creator skill**
    - **What it does**: Introduces a pre-installed skill that guides agents through the creation of Qwen Code extensions, covering scaffolding, customization, MCP servers, and more.
    - **Why it matters**: Lowers the barrier for developers to create and extend Qwen Code's capabilities.

2.  **[#5860](https://github.com/QwenLM/qwen-code/pull/5860) [OPEN] ci(autofix): loosen issue candidate filters so the agent finds work**
    - **What it does**: Modifies the automated bug-fix CI workflow to more broadly identify candidate issues for automated resolution.
    - **Why it matters**: Directly addresses low auto-fix rates by adjusting the criteria, making the CI agent more effective at tackling reported bugs.

3.  **[#5856](https://github.com/QwenLM/qwen-code/pull/5856) [OPEN] feat(desktop): voice dictation in the desktop app**
    - **What it does**: Brings the `/voice` dictation feature to the desktop application, adding a microphone button and recording bar UI.
    - **Why it matters**: Extends an important accessibility and productivity feature to a major platform.

4.  **[#4242](https://github.com/QwenLM/qwen-code/pull/4242) [OPEN] fix(cli): map rewind turns after compression**
    - **What it does**: Corrects the turn-count mapping after a conversation is compressed, so the `/rewind` command navigates to the correct history state.
    - **Why it matters**: Fixes a confusing and long-standing bug that broke undo/redo navigation in long sessions.

5.  **[#5874](https://github.com/QwenLM/qwen-code/pull/5874) [CLOSED] perf(cli): skip spawnSync wrapper for `qwen serve`**
    - **What it does**: Optimizes the `qwen serve` startup by importing the daemon code directly instead of spawning a new Node.js process via `spawnSync`.
    - **Why it matters**: A performance improvement that reduces startup latency for the daemon mode.

6.  **[#5629](https://github.com/QwenLM/qwen-code/pull/5629) [OPEN] feat(core): surface PreToolUse hook 'ask' as a TUI confirmation**
    - **What it does**: Remediates the bug in Issue #5629, allowing an 'ask' permission decision from a `PreToolUse` hook to be surfaced to the user as a native TUI confirmation prompt.
    - **Why it matters**: Improves security and user agency by enabling a granular "ask before running" permission model for tools.

7.  **[#5848](https://github.com/QwenLM/qwen-code/pull/5848) [OPEN] feat(ui): add ui.history.collapsePreviewCount to show last N turns when resuming collapsed sessions**
    - **What it does**: Implements a new setting requested in Issue #5759. When sessions are resumed in collapsed mode, this setting keeps a configurable number of recent turns visible for immediate context.
    - **Why it matters**: Solves the "black box" problem of collapsed sessions, allowing users to get oriented quickly.

8.  **[#5849](https://github.com/QwenLM/qwen-code/pull/5849) [OPEN] feat(cli): support @extension mention in input autocomplete**
    - **What it does**: Adds `@extension` autocomplete to the CLI, allowing users to quickly find and reference installed extensions.
    - **Why it matters**: Improves discoverability and ease of use for the extension ecosystem.

9.  **[#5868](https://github.com/QwenLM/qwen-code/pull/5868) [OPEN] feat(core): add configurable auto-compact threshold and Stop hook context usage**
    - **What it does**: Implements #4025, allowing users to configure a threshold for automatic context compression and to hook into the process.
    - **Why it matters**: Provides more control over how the tool manages context window limits, which is critical for long-running agentic tasks.

10. **[#4422](https://github.com/QwenLM/qwen-code/pull/4422) [OPEN] feat(cli): TUI display optimization — compact-first, Ctrl+O transcript, subagent rework**
    - **What it does**: A major overhaul of the Terminal UI, introducing a compact default layout, a frozen transcript overlay, and re-architected subagent view.
    - **Why it matters**: A significant UX upgrade aimed at making the CLI interface cleaner, more informative, and less visually noisy. In progress for over a month, indicating a large-scale change.

### 5. Feature Request Clusters

- **Agent / Loop Mode Improvements (3 issues)**: There is a clear desire to make the agent and loop modes more robust and configurable.
    - [#5838](https://github.com/QwenLM/qwen-code/issues/5838): User-configurable timeout for agent commands.
    - [#5841](https://github.com/QwenLM/qwen-code/issues/5841): `/loop` mode should use event-driven wake-ups (from monitors/background tasks) as a primary path, not just timers.
    - [#5868](https://github.com/QwenLM/qwen-code/issues/5868) (PR): Configurable auto-compaction threshold for long-running tasks.

- **Session Management & Daemon API (3 issues)**: Users are pushing for richer remote control and monitoring of live sessions.
    - [#5855](https://github.com/QwenLM/qwen-code/issues/5855): A `GET /session/:id/status` endpoint to check the status of a single session by ID (already closed with a merged PR).
    - [#5863](https://github.com/QwenLM/qwen-code/issues/5863): Enhance the above endpoint to return live turn-phase, active tools, and pending permissions.
    - [#5759](https://github.com/QwenLM/qwen-code/issues/5759) / [#5848](https://github.com/QwenLM/qwen-code/pull/5848): A preview count setting for collapsed session resume.

### 6. Developer Pain Points

1.  **Windows Stability (Critical)**: The highest friction point is the severe PowerShell process leak (Issue #5873), which causes OOM crashes. Coupled with issues like the duplicate shell results (Issue #5641), Windows users are experiencing significant reliability problems.

2.  **Configuration Timeouts (High Frequency)**: The issue of timeouts is a recurring theme. From the API streaming setup (Issue #401) to agent-initiated commands (Issue #5838), users need a more flexible and configurable approach to prevent mid-task failures.

3.  **CI/Merge Quality**: There is frustration with PRs being merged with "stale" CI checks, leading to broken `main` branches (Issue #4805). This suggests a desire for stronger merge-gate processes like merge queues or requiring up-to-date branches.

4.  **Voice & Audio Integration Complexity**: While a new feature, the rollout of voice dictation has introduced packaging and distribution challenges, particularly for users with mirror or private registries (Issue #5742). This indicates that the feature's infrastructure is not yet mature.

</details>