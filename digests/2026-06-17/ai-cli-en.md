# AI CLI Tools Community Digest 2026-06-17

> Generated: 2026-06-17 00:38 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Developer Tools: Cross-Tool Comparison Report — 2026-06-17

## 1. Daily Cross-Tool Overview

Today's activity across seven tracked AI CLI tools shows a landscape focused on reliability hardening and security fixes, with patch releases shipping for Claude Code (v2.1.179), GitHub Copilot CLI (v1.0.63), and Qwen Code (v0.18.1-preview/nightly). OpenAI Codex published four Rust alpha releases but no stable update. The dominant cross-cutting theme is **multi-agent coordination failures** and **session context degradation**, with Claude Code, Gemini CLI, and Copilot CLI all reporting bugs where sub-agents lose configuration inheritance or fail to terminate properly. Token consumption transparency and billing confusion remain top-engagement issues across both Claude Code and OpenAI Codex, while Qwen Code and OpenCode show growing community demand for session lifecycle automation features (e.g., `/loop`, `/goal`). No tool shipped a major new feature today; the focus is overwhelmingly on bug fixes, security hardening, and incremental quality-of-life improvements.

---

## 2. Activity Comparison

| Tool | Issues Updated/Opened (24h) | PRs Updated/Opened (24h) | Release(s) Today | Maintainer Response Level |
|---|---|---|---|---|
| **Claude Code** | ~50 open/updated (10 highlighted) | 10 highlighted (mostly security/hooks) | **v2.1.179** (patch) | High — multiple CLOSED fixes, ongoing discussion |
| **OpenAI Codex** | 10 highlighted from top 30 | 10 highlighted (automations, skills, config) | **4x rust-v0.141.0-alpha.x** | Moderate — active PR work, top issue (#14593) unresolved |
| **Gemini CLI** | 10 highlighted | 10 highlighted (security, MCP, terminal) | **None** | High — maintainers investigating several bugs |
| **GitHub Copilot CLI** | 10 highlighted | **None** | **v1.0.63** (patch) | Moderate — minor release, no PR activity |
| **Kimi Code CLI** | 4 updated (2 new bugs) | 1 open (stalled 2+ months) | **None** | Low — no maintainer responses on open issues |
| **OpenCode** | 10+ updated (30+ total) | 10 highlighted (MiniMax, OAuth, desktop) | **None** | High — PRs merged, active discussions |
| **Qwen Code** | 10 highlighted | 10 highlighted (terminal, loop, QQ Bot) | **v0.18.1-preview.0 + nightly** | High — several PRs merged, issues closed |

**Key observations:**
- Claude Code has the highest raw issue/PR volume and shipped a patch fixing three bugs.
- OpenAI Codex has the most active thread (#14593 with 612 comments) but the issue remains unresolved.
- Kimi Code CLI shows the weakest maintainer engagement — no responses on open issues or the stalled PR.
- Gemini CLI and Qwen Code show strong security-focused PR activity despite no stable release from Gemini.

---

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities today:

### Multi-Agent Coordination & Sub-Agent Configuration Inheritance
- **Claude Code** (#59309, #29423): Sub-agents do not load CLAUDE.md or `.claude/rules/`; configuration silently ignored.
- **Gemini CLI** (#22323): Sub-agent falsely reports success after hitting MAX_TURNS, masking interruptions.
- **GitHub Copilot CLI** (#3812): Sub-agents lost access to MCP tools; top-level agent still works.
- **Qwen Code** (#5180): Sub-agent crashes mid-task during long (12h+) sessions.
- **OpenCode**: No direct equivalent today, but session lifecycle automation requests (#27167, #18001) address similar orchestration gaps.

### Session Context Degradation / Compaction Issues
- **Claude Code** (#19471, #59309, #44166): CLAUDE.md instructions lost or weakened after context compaction; multiple closed issues but community still reporting workarounds.
- **OpenAI Codex** (#21128): Desktop silently hides conversations beyond the recent-50 window.
- **Gemini CLI**: No direct compaction bug today, but thought leakage fix (#27971) addresses context purity.
- **OpenCode** (#32615): Infinite compaction loop on empty git repos burning tokens.

### Token Consumption Transparency & Billing Confusion
- **OpenAI Codex** (#14593, 612 comments): Users reporting unexpectedly fast token burn; missing context indicator (#23794) recently closed.
- **Claude Code** (#52135, #65514): Max-plan quota depletion concerns; Pro users blocked from 1M context despite low usage.
- **GitHub Copilot CLI** (#3819): Rate limit error message lacks timezone information.
- **OpenCode** (#21470): Reports OpenCode itself consuming more CPU than model API calls.

### Agent Reliability & Hang Prevention
- **Gemini CLI** (#21409): Generalist agent hangs indefinitely on simple tasks.
- **Qwen Code** (#5210): `exit_plan_mode` frozen for 7+ hours.
- **GitHub Copilot CLI** (#3687): `copilot.exe` fatal abort on Windows ARM64 under load.

### Feature Parity Requests (Claude Code as Benchmark)
- **Qwen Code** (#4882): Port Claude Code's terminalSequence hooks and ScheduleWakeup.
- **Qwen Code** (#4721): Port Claude Code's Dynamic Workflows / Ultracode multi-agent execution.
- **OpenCode** (#27167, #18001): `/goal` and `/loop` commands similar to Claude Code's session management patterns.

---

## 4. Differentiation Analysis

### Feature Focus Differences
| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|---|---|---|---|---|---|---|---|
| Primary concern | Sub-agent config, billing | Token burn, session loss | Agent hangs, security | Authorization fatigue | Onboarding, MCP persistence | Session lifecycle, provider compat | OAuth free tier, sub-agent stability |
| Release cadence | Frequent patches | Alpha rust releases | No stable release | Minor patches | No recent releases | No recent releases | Preview/nightly |

### Target User Segments
- **Claude Code**: Power users running autonomous multi-agent workflows; Pro/Max subscribers sensitive to billing.
- **OpenAI Codex**: Broad paid user base (Business/Pro); focus on IDE integration and desktop app reliability.
- **Gemini CLI**: Google Cloud / Vertex AI users; security-conscious; Linux/Wayland users.
- **GitHub Copilot CLI**: Enterprise GitHub users; permission management; multi-platform (Windows ARM64 issues).
- **Kimi Code CLI**: Chinese market (no evidence of international focus); minimalist feature set.
- **OpenCode**: Provider-agnostic users; local/hybrid LLM setups; experimental features.
- **Qwen Code**: Chinese developer ecosystem (QQ Bot, WeChat); feature chasers comparing to Claude Code.

### Technical Approach Differences
- **Claude Code**: Structured project rules (CLAUDE.md) as first-class configuration; compaction tooling built-in but fragile.
- **OpenAI Codex**: Rust core refactoring; managed config enforcement (#28409); automation service in PR stack (#28609-28620).
- **Gemini CLI**: Security-first approach — path traversal fixes (#27966), atomic token writes (#27664), MCP cross-server URI scoping (#27964).
- **OpenCode**: Provider flexibility focus — MiniMax compatibility fixes, LAN provider discovery (#27554), fallback model chains (#27939).
- **Qwen Code**: Platform adapters (QQ Bot) and `/loop` automation — differentiating for Chinese chatops workflows.

---

## 5. Community Activity Notes

### Most Active Communities (by engagement)
1. **OpenAI Codex** — #14593 (612 comments) dominates; session history loss (#21128, #27353) also active.
2. **Claude Code** — 50 issues/10 PRs in 24h; high engagement on billing and sub-agent bugs.
3. **OpenCode** — #27167 (50 comments, 87 👍) shows strong sentiment for session goals.

### Release Activity
- **Claude Code** and **GitHub Copilot CLI** shipped stable patches with user-facing fixes.
- **OpenAI Codex** shipped 4 alpha builds in rapid succession — likely CI/CD experiments or hotfix rolls.
- **Qwen Code** shipped preview + nightly — stable release workflow failed (#5150).
- **Gemini CLI**, **Kimi Code CLI**, **OpenCode**: No releases today.

### Maintainer Responsiveness
- **High**: Claude Code (multiple issues closed), Gemini CLI (active investigation comments), Qwen Code (PRs merged same day).
- **Moderate**: OpenAI Codex (PRs open, but top bug unresolved), GitHub Copilot CLI (minor release, no PRs).
- **Low**: Kimi Code CLI (no maintainer response on open issues or stalled PR #1771).

### Emerging Patterns
- **Security hardening surge**: Gemini CLI (#27966, #27664, #27964, #27971), Claude Code (#68689, #68786, #68785), Qwen Code (#5196) all shipping security fixes today — suggests coordinated or coincidental focus.
- **Windows-specific friction**: Copilot CLI (#3687 — ARM64 crash), Qwen Code (#5055 — Trojan false positive), Kimi Code (#2457 — MCP on Windows 10) — Windows users face disproportionate reliability issues across tools.

---

## 6. Evidence-Backed Observations

### 1. Sub-agent configuration inheritance is a systemic weakness across tools
Three independent bug reports today — Claude Code (#59309, #29423), Gemini CLI (#22323), and Copilot CLI (#3812) — describe sub-agents that lose access to parent-level configuration (CLAUDE.md, MCP tools, settings overrides). This is not a single-tool issue but a fundamental architectural challenge in multi-agent orchestration that remains unresolved across the ecosystem.

### 2. Token consumption and billing transparency remain the highest-engagement concerns
OpenAI Codex #14593 (612 comments) and Claude Code #52135/#65514 (28 combined comments) represent the most-discussed issues in their respective repos. Users across both platforms report feeling unable to predict or control costs, with missing context/token indicators compounding the frustration. No tool has shipped a definitive solution.

### 3. Agent reliability (hangs, false-success reports, crashes) is the top developer pain point
Four tools report agent-related reliability failures today: Gemini CLI (#21409 hang, #22323 false success), Qwen Code (#5210 7-hour freeze, #5180 crash), and Copilot CLI (#3687 crash). These are not edge cases but reproducible, blocking bugs that erode trust in autonomous workflows.

### 4. Claude Code is being used as a feature benchmark by other tool communities
Qwen Code explicitly references Claude Code's ScheduleWakeup (#4882) and Dynamic Workflows (#4721) as desired features. OpenCode's `/goal` and `/loop` requests (#27167, #18001) mirror Claude Code session management. This suggests Claude Code's feature set is becoming a de facto reference point, though the data does not indicate whether this is driven by migration from other tools or independent convergence.

### 5. Security fixes are shipping across tools simultaneously, but from different threat models
Gemini CLI focuses on path traversal and token write atomicity; Claude Code addresses symlink escape and shell injection; Qwen Code treats `/dev/tcp` as network sockets. While all qualify as "security hardening," each tool addresses different attack surfaces, reflecting divergent architectural priorities rather than a coordinated threat response. No clear cross-tool signal of a common vulnerability pattern.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-17

## Today's Update Brief

A patch release (v2.1.179) shipped fixing mid-stream connection drops, WSL2 mouse scrolling, and a sandbox hardening issue. Community discussion remains active, with 50 open/updated issues and 18 pull requests in the last 24 hours. Two persistent pain points dominate the conversation: **CLAUDE.md instructions being lost after context compaction** (multiple closed/fixed issues but still cited) and **multi-agent coordination bugs** surfaced in a detailed post-mortem.

## Releases

- **[v2.1.179](https://github.com/anthropics/claude-code/releases/tag/v2.1.179)** — *today*
  - Fixed mid-stream connection drops: partial responses are now preserved instead of showing a raw error; spinner no longer stuck at "running tool".
  - Fixed mouse-wheel scrolling in WSL2 under Windows Terminal and VS Code (regression in 2.1.172).
  - Fixed a sandbox `denyR` (presumed sandbox restriction — full description truncated in data).

## Hot Issues

1. **[[BUG] CLAUDE.md instructions completely ignored after context compaction](https://github.com/anthropics/claude-code/issues/19471)** — *CLOSED* — High impact (27 comments). Users report that after context compaction, project‑level CLAUDE.md rules are lost, causing the model to forget coding conventions and workflow instructions. The issue was filed in January 2026 but only recently closed—likely a fix shipped in a prior release, though community frustration remains high (9 👍).

2. **[[FEATURE] JetBrains need some love - a real Claude AI Assist interface plugin](https://github.com/anthropics/claude-code/issues/47166)** — *OPEN* — 24 comments. A long‑standing request for a first‑class JetBrains plugin. Users feel the existing integration is lacking compared to VS Code, and the issue has been tagged duplicate, suggesting multiple similar requests.

3. **[[BUG] Usage credits required for 1M context - Pro plan blocked despite 17% usage](https://github.com/anthropics/claude-code/issues/65514)** — *OPEN* — 16 comments. Pro plan users hitting an unexpected credit wall when requesting 1M context even with ample remaining usage. The issue touches billing logic (area:cost) and may be platform‑specific (Windows, VS Code).

4. **[Post-mortem 2026-04-28: 12 multi-agent coordination bugs surfaced across a single autonomous-overnight cycle](https://github.com/anthropics/claude-code/issues/54393)** — *OPEN* — 15 comments. A detailed bug catalog from an overnight autonomous run highlighting 12 distinct coordination failures between subagents. Already cited as a reference for future multi‑agent fixes.

5. **[[BUG] Max (20x) weekly limit depletes disproportionately — 51% mid-week, ~17% within minutes of session reset](https://github.com/anthropics/claude-code/issues/52135)** — *CLOSED* — 14 comments. Max‑plan users report faster‑than‑expected quota consumption. Closed (likely addressed), but the severity (4 👍) indicates a sensitive billing area.

6. **[[BUG] CLAUDE.md rules not propagated to Agent subagents and weakened after context compaction](https://github.com/anthropics/claude-code/issues/59309)** — *CLOSED* — 12 comments. Similar to #19471 but focused on subagents. The issue confirms that subagents do not inherit CLAUDE.md rules, and compaction reduces adherence. Closed, but the pattern suggests incomplete remediation.

7. **[[BUG] Task subagents do not load project CLAUDE.md or .claude/rules/ — project configuration silently ignored](https://github.com/anthropics/claude-code/issues/29423)** — *CLOSED* — 11 comments. Another variant of the subagent configuration problem, closed with 6 👍. Users continue to report workarounds.

8. **[[MODEL] System prompt "Output efficiency" section causes action-before-understanding bias, degrading code quality](https://github.com/anthropics/claude-code/issues/32508)** — *CLOSED* — 11 comments. A detailed analysis of how a specific system prompt section encourages premature action over thorough analysis, leading to lower‑quality code. Closed with 9 👍.

9. **[[BUG] Desktop extension installs silently fail on macOS Tahoe 26.5 — no error, no feedback](https://github.com/anthropics/claude-code/issues/68484)** — *OPEN* — 9 comments. Users on macOS 26.5 (likely a future version) report extensions failing to install with no error message. Tagged `invalid` by maintainers, but community is still discussing.

10. **[[BUG] skill-creator eval/optimizer leaks MCP child processes via headless 'claude -p' — exhausted memory, forced hard reboot](https://github.com/anthropics/claude-code/issues/68933)** — *OPEN* — 3 comments. A newly filed, severe bug: the skill‑creator plugin spawns a headless `claude -p` process per test query, each booting MCP servers, leading to memory exhaustion. Only 3 comments but high urgency.

## Key PR Progress

1. **[Enable PowerShell tool on macOS and Linux when pwsh is available](https://github.com/anthropics/claude-code/pull/46351)** — *CLOSED* — This long‑standing PR (filed April 10) finally closed today, finally enabling the PowerShell tool on non‑Windows platforms when PowerShell 7+ is installed. Closes issue #45963.

2. **[feat(bug-reporter): add /bug command to file GitHub issues from the terminal](https://github.com/anthropics/claude-code/pull/68707)** — *OPEN* — Introduces a `/bug` slash command that lets users file GitHub issues directly from the Claude Code terminal, streamlining bug reporting without leaving the session.

3. **[fix(security-guidance): block symlink escape in extensibility config reads](https://github.com/anthropics/claude-code/pull/68689)** — *OPEN* — Hardens security by preventing symlink traversal attacks when reading plugin/hook configuration files.

4. **[fix(plugin-dev): avoid shell injection in test-hook.sh via stdin redirection](https://github.com/anthropics/claude-code/pull/68786)** — *OPEN* — Fixes a shell injection vulnerability in the hook testing script where `$TEST_INPUT` could be maliciously crafted to inject commands.

5. **[fix(plugin-dev): hook JSON to stdout, tighten su* glob, fix CI detection and JSON injection in examples](https://github.com/anthropics/claude-code/pull/68785)** — *OPEN* — Multiple fixes to example hook scripts: corrects output streams, tightens glob patterns, fixes CI detection, and prevents JSON injection in `validate-bash.sh`.

6. **[fix(scripts): add error message to edit-issue-labels.sh when called with no label arguments](https://github.com/anthropics/claude-code/pull/68787)** — *OPEN* — Improves developer experience by printing a clear error instead of silently exiting with code 1.

7. **[fix(scripts): break pagination when page is not full, not only when empty](https://github.com/anthropics/claude-code/pull/68673)** — *OPEN* — Optimizes pagination logic in GitHub scripts to stop fetching when a page is partially filled, reducing API calls.

8. **[fix(ralph-wiggum): strip control characters before promise comparison](https://github.com/anthropics/claude-code/pull/68679)** — *OPEN* — Sanitizes control characters that could break promise comparison in the Ralph‑Wiggum testing framework.

9. **[fix(security-guidance): normalize CLAUDE_PLUGIN_ROOT path separators on Windows](https://github.com/anthropics/claude-code/pull/68694)** — *OPEN* — Addresses Windows‑specific path separator issues in plugin root resolution.

10. **[fix(ralph-wiggum): guard PROMPT_PARTS expansion against set -u on bash 3.x (macOS)](https://github.com/anthropics/claude-code/pull/68702)** — *OPEN* — Ensures compatibility with macOS’s default bash 3.x by guarding against unset variable expansion errors.

## Feature Request Clusters

- **JetBrains IDE plugin** — Multiple issues (#47166, #61306) request a dedicated JetBrains plugin with feature parity to VS Code. The community considers the existing integration insufficient and requests an official plugin.

- **Desktop app ↔ CLI parity** — Users want the desktop app to support the same `/ide` command as the CLI (#61306) for seamless IDE integration. Also, the desktop’s persistent “Fable 5 unavailable” banner lacks a dismiss option (#68578).

- **In‑session remote control** — A request (#60699) to enable remote control on already‑running sessions without starting a new one, for easier automation and remote management.

- **Determinism mechanism for automation** — Issue #58933 asks for an in‑session flag or mode that ensures deterministic outputs, so that automated pipelines can rely on consistent results without switching to the Agent SDK.

- **Effort level environment variables** — A shared‑host admin use case (#55598) requests environment variables to set default and max effort levels, enabling administrators to enforce resource limits in multi‑tenant setups.

## Developer Pain Points

- **CLAUDE.md degradation after compaction** — Despite multiple closed issues (#19471, #59309, #44166), users still report that context compaction loses or weakens CLAUDE.md rules. The lack of a compaction exemption option forces workarounds like manual re‑injection.

- **Subagent configuration isolation** — Subagents (both task‑level and agent‑view) do not inherit CLAUDE.md, `.claude/rules/`, or user‑level configuration. This limits multi‑agent workflows and forces users to duplicate instructions.

- **Usage credit/billing confusion** — Max‑plan users see disproportionate quota consumption (#52135), Pro users are blocked from 1M context despite low usage (#65514). The billing model remains opaque.

- **Headless process resource leaks** — The skill‑creator’s eval harness spawns multiple `claude -p` instances that each boot MCP servers, leading to memory exhaustion (#68933). Users are forced to hard reboot.

- **Worktree session management bugs** — Two issues (#62309, #62431) highlight confusing defaults and accidental removal of worktrees when multiple sessions are active, causing data loss.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-17

## Today’s Update Brief
Four Rust component alpha releases landed today, while the community remains heavily focused on a long‑running rate‑limit/token‑burning issue and a spate of session‑history and computer‑use reliability bugs. On the development side, a large stacked PR series for a new “automations” service was opened, along with improvements to plugin/skill loading concurrency and managed config enforcement.

## Releases
- **[rust-v0.141.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.1)**
- **[rust-v0.141.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.2)**
- **[rust-v0.141.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.3)**
- **[rust-v0.141.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.4)**

All four commits bear the generic message “Release 0.141.0-alpha.x” without further detail. This rapid succession of alpha bump releases suggests continuous deployment of fixes or experiments in the Rust‑based core.

## Hot Issues
*(10 noteworthy issues from the top 30 by comment count)*

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
   *Labels: bug, rate-limits*
   **Impact:** 612 comments, 269 👍 — the most active issue on the repo. Users on Business/Pro subscriptions report unexpectedly high token consumption during routine use, with some seeing daily quotas exhausted within hours. The thread includes extensive data collection and speculation about model selection or context handling. No official resolution yet.
   **Affected workflow:** IDE extension (VS Code) on Windows.

2. **[#23794 – Codex Desktop no longer shows visible context/token usage indicator](https://github.com/openai/codex/issues/23794) *(CLOSED)*
   *Labels: bug, context, app*
   **Impact:** 169 comments, 168 👍. Recently closed; the missing indicator made it impossible for users to monitor their real‑time token burn, compounding frustration with the rate‑limit issue above. Being closed suggests a fix was shipped, but many users wanted it reopened.

3. **[#21128 – Codex Desktop silently hides project conversations outside the global recent‑50 window](https://github.com/openai/codex/issues/21128)**
   *Labels: bug, app, session*
   **Impact:** 26 comments, 17 👍. Users lose access to older project threads without warning, making the Desktop unreliable as long‑term working memory. A root‑cause analysis was contributed by the community, but no fix has been merged.

4. **[#28190 – rg is blocked by macOS](https://github.com/openai/codex/issues/28190)**
   *Labels: bug, CLI*
   **Impact:** 26 comments, 40 👍. Codex CLI’s bundled `rg` (ripgrep) binary is flagged by macOS Gatekeeper, preventing code search. Users must manually bypass security settings. The issue affects Pro users on macOS with gpt‑5.5.

5. **[#28507 – “Selected model is at capacity. Please try a different model.”](https://github.com/openai/codex/issues/28507)**
   *Labels: bug, rate-limits, app*
   **Impact:** 13 comments, 11 👍. A persistent capacity error for gpt‑5.5 on the Desktop app, especially during peak hours. Users report being forced to switch to slower models despite paying for Pro 5x.

6. **[#21211 – Thread navigation/loading slows from unbounded metadata and eager large‑history hydration](https://github.com/openai/codex/issues/21211)**
   *Labels: bug, app, session, performance*
   **Impact:** 11 comments, 2 👍. Detailed community analysis identifies SQLite bloat and eager hydration as root causes. Affects users with many sessions, causing multi‑second pauses when switching threads.

7. **[#25321 – Codex Desktop composer caret/input focus intermittently disappears on macOS](https://github.com/openai/codex/issues/25321)**
   *Labels: bug, app*
   **Impact:** 9 comments, 4 👍. The text input area loses keyboard focus until the app window is switched away and back. Reported on macOS 26.5 with Codex Desktop 26.527.

8. **[#27353 – Project chat history disappeared after latest Codex app update](https://github.com/openai/codex/issues/27353)**
   *Labels: bug, app, session*
   **Impact:** 9 comments, 3 👍. Multiple users report total loss of local chat history after the June 9 update (v26.608). No recovery method documented.

9. **[#27287 – Computer Use bootstrap fails on Windows: @oai/sky internal subpath is not exported](https://github.com/openai/codex/issues/27287)**
   *Labels: bug, windows-os, app, computer-use*
   **Impact:** 8 comments, 9 👍. A packaging/version mismatch between the Codex app and the bundled Computer Use plugin prevents the feature from initializing on Windows. A similar issue (#28121) was filed the next day.

10. **[#26341 – Codex triggers syspolicyd file descriptor leak on macOS, causing all DMG files to be reported as “damaged”](https://github.com/openai/codex/issues/26341)**
    *Labels: bug, app, performance*
    **Impact:** 3 comments (but high severity). A systemic macOS kernel‑level leak that makes all downloaded disk images unusable while Codex is running. Rare but critical for affected users.

## Key PR Progress
*(10 important pull requests from the top 20 by comment count)*

1. **[#28628 – Repair invalid skill frontmatter scalars](https://github.com/openai/codex/pull/28628)**
   *Author: @charlesgong-openai*
   Fixes parsing failures in the community skill marketplace where YAML scalars contain colons or special characters. Improves skill discoverability.

2. **[#28409 – Enforce exact managed config values](https://github.com/openai/codex/pull/28409)**
   *Author: @abhinav-oai*
   Extends the `requirements.toml` system with exact match enforcement for several settings (e.g., `sqlite_home`, `log_dir`), reducing misconfiguration in managed deployments.

3. **[#28629 – core: restore absolute turn context cwd](https://github.com/openai/codex/pull/28629)**
   *Author: @anp-oai*
   Reverts a serialization change that broke rollout reconstruction by storing `cwd` as `PathUri`. Keeps the durable field as an absolute string for backward compatibility.

4. **[#28609 – automations: add service groundwork and overview](https://github.com/openai/codex/pull/28609)**
   *Author: @eternal-openai*
   The first PR in a 12‑part stack (PRs #28609–#28620) introducing a new “automations” service. This one sets up the module skeleton, error types, and high‑level architecture.

5. **[#28624 – Load plugins and skill roots concurrently](https://github.com/openai/codex/pull/28624)**
   *Author: @mzeng-openai*
   Speeds up startup by loading up to 8 plugins and scanning up to 8 skill roots in parallel while preserving deterministic ordering.

6. **[#28148 – add experimental managed Amazon Bedrock login and logout](https://github.com/openai/codex/pull/28148)**
   *Author: @celia-oai*
   Adds experimental CLI endpoints for managing Amazon Bedrock credentials (login/logout) when using Codex‑managed API keys. Part of multi‑model support.

7. **[#28494 – add shared session token budgets](https://github.com/openai/codex/pull/28494)**
   *Author: @rka-oai*
   Introduces an opt‑in hard token budget that is shared across a root thread and all its descendant threads. Helps users prevent runaway token consumption.

8. **[#27982 – Start the guardian child session when parent session is started](https://github.com/openai/codex/pull/27982)**
   *Author: @jgershen-oai*
   Pre‑creates the “Guardian” child session during parent‑session init to reduce latency on first auto‑review. Uses the existing WebSocket prewarm.

9. **[#28411 – Add keyed shell environment rules to config](https://github.com/openai/codex/pull/28411)**
   *Author: @abhinav-oai*
   Adds a keyed `include`/`exclude` pattern syntax for shell environment variables in `config.toml`, superseding the old array‑based approach.

10. **[#28620 – automations: defer heartbeats for cooldown](https://github.com/openai/codex/pull/28620)**
    *Author: @eternal-openai*
    Part of the automations stack. Adds intelligent cooldown logic to avoid overwhelming the system when scheduled tasks fire in rapid succession.

## Feature Request Clusters
Several recurring enhancement requests appeared in today’s activity:

- **Session export / save**
  [#13267](https://github.com/openai/codex/issues/13267) asks for a `/export` command in TUI to dump the entire session. No official response.

- **PreToolUse approval hooks**
  [#28437](https://github.com/openai/codex/issues/28437) requests native support for `permissionDecision: "ask"` in hooks, so a tool call can trigger a human approval prompt. The author references a closed PR (#20702).

- **Documentation for uninstallation**
  [#28575](https://github.com/openai/codex/issues/28575) points out that the CLI has no documented uninstall procedure, leaving users to reverse‑engineer the removal steps.

- **Benevolent limit reset after outages**
  [#28541](https://github.com/openai/codex/issues/28541) requests a credit or limit reset for paid subscribers affected by the “Model at Capacity” error.

- **Improved token usage visibility**
  While [#23794](https://github.com/openai/codex/issues/23794) (context indicator) is closed, several commenters still advocate for a more persistent token monitor in the Desktop app.

## Developer Pain Points
*High‑frequency or high‑impact frustrations evident from today’s data:*

1. **Rate limits and token “burning”** — The #1 issue (#14593) with 612 comments dominates discussion. Users feel their paid quotas are consumed too quickly, often without clear correlation to actual work done.
2. **Session and chat history loss** — Multiple reports (#21128, #27353, #28606) describe conversations disappearing after updates or when sessions exceed an arbitrary limit, eroding trust in the Desktop app as a persistent workspace.
3. **Computer Use unreliability** — On both Windows and macOS, the bundled Computer Use plugin frequently fails to initialize due to packaging mismatches, missing exports, or runtime detection errors (#27287, #28121, #22927, #18803).
4. **macOS Gatekeeper / file‑descriptor leaks** — CLI binaries like `rg` are blocked by security policies (#28190), and the app itself can trigger a kernel‑level leak rendering all DMGs unusable (#26341).
5. **Windows‑specific update and performance regressions** — The Desktop app fails to relaunch after updates (#24047), and recent builds cause RAM saturation during session hydration (#28524).
6. **Lack of clear uninstall documentation** — As noted in #28575, the CLI leaves no trace of its own removal instructions, forcing users to search or ask AI for help.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-17

## Today’s Update Brief
No new releases were published in the last 24 hours, but the repository saw elevated activity across both issues and pull requests. Maintainers focused on security hardening (path traversal fixes, atomic token writes) and core reliability (thought leakage, terminal corruption), with several high-priority bugs moving toward resolution.

## Releases
*None in the last 24 hours.* (Previous release: see prior digest)

---

## Hot Issues

**1. Generalist agent hangs indefinitely**
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — `area/agent`, `kind/bug`
**Impact:** Simple file/folder creation tasks cause the generalist agent to hang forever when it defers to sub-agents. Users report waiting up to an hour before cancelling. The workaround is to instruct the model not to use sub-agents.
**Reaction:** 8 👍, 7 comments — one of the community’s most upvoted open bugs.

**2. Sub-agent MAX_TURNS recovery falsely reports success**
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — `area/agent`, `kind/bug`
**Impact:** When a sub-agent hits its turn limit before doing analysis, it reports `status: "success"` and `Termination Reason: "GOAL"`, masking the actual interruption. This corrupts task tracking and reduces trust in agent reporting.
**Reaction:** 2 👍, 6 comments — maintainers are investigating.

**3. Shell command execution stuck after completion**
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — `area/core`, `kind/bug`, `effort/medium`
**Impact:** After executing simple CLI commands, Gemini CLI hangs while still showing the shell as active and "Awaiting user input." Occurs for commands that cannot possibly prompt for input.
**Reaction:** 3 👍, 4 comments — multiple users confirm this is consistently reproducible.

**4. Gemini does not use custom skills and sub-agents autonomously**
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — `area/agent`, `kind/bug`
**Impact:** Users who define custom skills (e.g., Git, Gradle) report that Gemini almost never invokes them unprompted, even when performing highly related tasks. Explicit instruction is required.
**Reaction:** 6 comments — the core pain point is that skill declarations feel useless.

**5. AST-aware file reads, search, and codebase mapping epic**
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — `area/agent`, `kind/customer-issue`
**Impact:** This epic investigates whether AST-aware tooling (reading method bounds precisely, searching by syntax shape, mapping codebases) can reduce token waste, reduce turn count, and improve agent correctness.
**Reaction:** 1 👍, 7 comments — linked sub-issues #22746 and #22747 are also active.

**6. Redaction happens after secrets are already in model context**
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — `area/security`, `kind/bug`
**Impact:** Auto Memory reads local transcripts and sends content to the extraction model before redacting secrets. The extraction prompt instructs redaction only after content is already exposed. Additionally, skill execution logs may contain secrets.
**Reaction:** 5 comments — a clear security design concern.

**7. Auto Memory retries low-signal sessions indefinitely**
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — `area/agent`, `kind/bug`
**Impact:** Sessions that the extraction agent decides not to read (low-signal) remain unprocessed and can be surfaced repeatedly. This wastes API calls and clogs the memory pipeline.
**Reaction:** 5 comments — part of a broader memory system quality push.

**8. Browser agent fails on Wayland**
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — `area/agent`, `kind/bug`, `agent/browser`
**Impact:** The browser sub-agent fails immediately on Wayland display servers, reporting termination without useful error details. A significant blocker for Linux users on modern desktop environments.
**Reaction:** 1 👍, 4 comments — no workaround found.

**9. Model frequently creates tmp scripts in random directories**
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) — `area/agent`, `kind/bug`
**Impact:** When restricted from shell execution, the model generates many temporary edit scripts scattered across the filesystem. This creates cleanup overhead and pollutes commit workspaces.
**Reaction:** 3 comments — users want the model to consolidate writes.

**10. Browser agent ignores settings.json overrides (maxTurns, etc.)**
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — `area/agent`, `kind/bug`
**Impact:** Global and project-level `settings.json` overrides (e.g., `maxTurns`) are correctly read by the AgentRegistry but never passed to the browser agent runtime. Settings become effectively dead config.
**Reaction:** 3 comments — a long-standing config fidelity issue.

---

## Key PR Progress

**1. Fix thought leakage in scrubbed history turns**
[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) — `core`, `size/m`
Strips internal reasoning thoughts from plain-text history turns before they can confuse the model on subsequent turns, preventing infinite loop monologues. Surgical fix to a subtle regression.

**2. Enforce case-insensitive sensitive path blocklist**
[#27966](https://github.com/google-gemini/gemini-cli/pull/27966) — `security`, `size/m`
Implements a strict case-insensitive blocklist for `.git`, `.env`, and `node_modules` to close a prompt-injection bypass. Also adds VS Code human-in-the-loop protection. Closes a critical security gap.

**3. Atomic MCP OAuth token writes**
[#27664](https://github.com/google-gemini/gemini-cli/pull/27664) — `security`, `size/m`
Writes MCP OAuth token files through a temp file + atomic rename to prevent corruption on crash. Covers delete-path and cleanup-on-failure in the same fix. Closes #27663.

**4. Fix MCP OAuth refresh for auto-discovered servers**
[#27889](https://github.com/google-gemini/gemini-cli/pull/27889) — `agent`, `size/m`
The refresh path used after `/mcp auth` was using the original server config, ignoring the persisted client ID from auto-discovery. Fixes token refresh for dynamically discovered servers without static `oauth.clientId`.

**5. Resolve cross-server MCP resource URI confusion**
[#27964](https://github.com/google-gemini/gemini-cli/pull/27964) — `mcp`, `size/m`
Prevents a second connected MCP server from silently shadowing a trusted server’s resource when both expose the same URI. Falls back to fail-closed and scopes the `read_mcp_resource` allow list.

**6. Scope flash model names per auth type for Vertex AI and Gateway**
[#27760](https://github.com/google-gemini/gemini-cli/pull/27760) — `agent`, `size/s`, *closed*
Fixed `hasGemini35FlashGAAccess()` to use the correct flash model name per backend. Vertex AI accepts `gemini-3.5-flash`; others still use `gemini-3-flash`. Resolves model-not-found errors on Vertex AI.

**7. Pin all dependencies and enforce 14-day update cooldown**
[#27948](https://github.com/google-gemini/gemini-cli/pull/27948) — `dependencies`, `size/xl`
Strips all `^`/`~` semver ranges, pins to exact versions, and enforces a 14-day cooldown for automated bumps. Aimed at preventing supply-chain surprises and stabilizing CI.

**8. Fix tmux false positive background detection**
[#27572](https://github.com/google-gemini/gemini-cli/pull/27572) — `cli`, `size/m`, *closed*
Correctly detects terminal background inside tmux (especially via mosh) to avoid inappropriate theme switching. Root cause was tmux not forwarding background-color capabilities.

**9. Keep `auto` model alias visible without preview access**
[#27718](https://github.com/google-gemini/gemini-cli/pull/27718) — `core`, `size/s`
The top-level `auto` alias was incorrectly hidden when preview-only aliases were filtered out. Now remains visible for all users; only true preview aliases are suppressed.

**10. Preserve newlines when truncating multi-line text**
[#27959](https://github.com/google-gemini/gemini-cli/pull/27959) — `core`, `size/s`, *closed*
The `truncateString` helper used a regex without the `dotAll` flag, causing newlines to be silently stripped. All line terminators are now preserved during truncation.

---

## Feature Request Clusters

**1. AST-aware tooling for code understanding**
Three linked issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) propose using AST-aware CLIs for file reads, searches, and codebase mapping. The goal is to read method bounds in one call, navigate symbolically, and reduce token waste compared to line-based tools.

**2. Memory system reliability and security**
A cluster of issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) targets Auto Memory’s current shortcomings: secrets exposed before redaction, infinite retries on low-signal sessions, and silent skipping of invalid memory patches. The community and maintainers agree the system needs a deterministic, auditable redesign.

**3. Browser agent resilience and configuration**
Issues [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) and [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) request better configuration propagation (settings.json overrides ignored) and automatic session takeover for locked browser profiles. The current "fail-fast" strategy on persistent sessions is seen as too brittle.

---

## Developer Pain Points

- **Agent reliability failures are the top frustration.** The generalist agent hang (#21409), false-success sub-agent recovery (#22323), and shell command hangs (#25166) collectively erode trust in the CLI’s ability to complete autonomous tasks.
- **Terminal integration remains fragile.** Corruption after exiting external editors (#24935), flickering on resize (#21924), and Wayland browser incompatibility (#21983) are recurring frontend issues that break the user experience on modern setups.
- **Security and data integrity are active concerns.** Secrets leaking into model context before redaction (#26525), case-insensitive path bypass for `.git`/`.env` (#27966), and MCP cross-server URI shadowing (#27964) show the project still closing critical attack surfaces.
- **Configuration and customization friction persists.** Skills and sub-agents are ignored unless explicitly instructed (#21968), `settings.json` overrides are silently dropped for browser agent (#22267), and symlinked agent files are not recognized (#20079). Developers feel their customizations are wasted effort.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-17

## Today's Update Brief

A minor release (v1.0.63) shipped yesterday with two user‑facing fixes. 19 issues were updated in the last 24 hours, including several new bug reports around permissions, model behavior, and session management. No pull requests were touched. Community activity is moderate, with a few long‑running concerns (Windows crashes, authorization fatigue) still drawing comments.

## Releases

**v1.0.63** (2026‑06‑15)
[Full release](https://github.com/github/copilot-cli/releases/tag/v1.0.63)

- Blocked image attachments now show a clear explanation (enable vision in policy, switch model, or try a different image) instead of a confusing error.
- Options in `--help` output are now sorted alphabetically, including options with two dashes.

## Hot Issues (10 noteworthy)

1. **#3687 — `copilot.exe` fatal abort (BEX64) on Windows ARM64 under load**
   [Open] [area:sessions, area:platform-windows]
   The interactive CLI hard‑crashes when multiple sessions start simultaneously (e.g., terminal tab restore) under memory pressure. 5 comments, 1 👍.
   **Impact:** Windows ARM64 users lose work unexpectedly; no graceful shutdown.
   https://github.com/github/copilot-cli/issues/3687

2. **#1168 — Authorization fatigue: excessive prompts during a single request**
   [Open] [area:permissions]
   A single high‑level request can trigger more than a dozen consecutive authorization prompts. 2 comments, 2 👍.
   **Impact:** Frustrating workflow disruption, especially for power users executing complex tasks.
   https://github.com/github/copilot-cli/issues/1168

3. **#3813 — Garbled copy‑paste in VS Code Terminal (Japanese text)**
   [Closed] [area:input-keyboard, area:terminal-rendering]
   Pasting Copilot CLI output from VS Code Terminal results in garbled text; works fine in iTerm2. 2 comments.
   **Impact:** Affected users cannot reliably copy code blocks from the terminal.
   https://github.com/github/copilot-cli/issues/3813

4. **#3828 — `ContentExclusionFilter.isExcluded` crash**
   [Open] [area:non-interactive, area:tools]
   `rg` tool crashes with `TypeError: Cannot read properties of undefined (reading 'isExcluded')`. 1 comment.
   **Impact:** Non‑interactive tool execution fails with an unhelpful stack trace.
   https://github.com/github/copilot-cli/issues/3828

5. **#3821 — `/update` from a resumed session leaves conflicting flags**
   [Open] [area:sessions, area:installation]
   Running `/update` while resuming a session (`copilot -r`) causes the CLI to restart with both `--session-id` and `-r` set, breaking the resumed session. 1 comment.
   **Impact:** Users lose session state after an update.
   https://github.com/github/copilot-cli/issues/3821

6. **#3730 — Support enterprise‑managed custom models in Copilot CLI**
   [Open] [area:enterprise, area:models]
   Enterprise custom models configured in the admin dashboard work in VS Code but are unavailable in the CLI. 1 comment, 4 👍 (highest engagement).
   **Impact:** Enterprise users cannot use their approved models via the CLI.
   https://github.com/github/copilot-cli/issues/3730

7. **#3518 — Add ability to unarchive/restore an archived project session**
   [Open] [area:sessions]
   Accidental archiving of long‑running orchestrator sessions with checkpoint summaries cannot be undone. 1 comment, 3 👍.
   **Impact:** Users lose accumulated context permanently.
   https://github.com/github/copilot-cli/issues/3518

8. **#3812 — Sub‑agents lost access to MCP tools**
   [Open] [area:agents, area:mcp]
   Custom sub‑agents can no longer see or use MCP tools; top‑level agent still works. 1 comment.
   **Impact:** Multi‑agent workflows relying on MCP are broken.
   https://github.com/github/copilot-cli/issues/3812

9. **#3826 — “Operation cancelled by user” re‑injected as a user message**
   [Open] [area:input-keyboard]
   Cancelling a turn (Esc/Ctrl‑C) causes the cancellation message to be sent back to the model as a new user message. 0 comments.
   **Impact:** The model “replies” to the cancellation, confusing conversation state.
   https://github.com/github/copilot-cli/issues/3826

10. **#3825 — `--allow-all` read permissions leak to UI dispatcher and wedge TUI**
    [Open] [area:permissions]
    Using `--allow-all` with `-i` or `--resume` causes read permission requests to be sent to the UI dispatcher, freezing the terminal input box. 0 comments.
    **Impact:** Non‑interactive or resumed sessions become unusable.
    https://github.com/github/copilot-cli/issues/3825

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Clusters

- **Enterprise & custom model support** (#3730): Users want centrally‑managed custom models to appear as model options in the CLI, matching other Copilot clients.
- **Session lifecycle improvements** (#3518, #3821): Requests for unarchiving sessions, better handling of updates during resumed sessions, and overall session persistence.
- **Plugin / skill configuration** (#3822, #3820, #3829): Community asks for `skillDirectories` to work at repo level, better documentation for command hook matchers, and making read‑only slash commands (`/mcp show`, `/plugin list`) asynchronous.
- **Asynchronous commands** (#3829): Read‑only slash commands should execute immediately rather than waiting for the agent turn.

## Developer Pain Points

- **Authorization fatigue** (#1168): Repeated permission prompts during a single request remain a top frustration.
- **Crashes and hangs** (#3687, #3828, #3825): Fatal aborts on Windows ARM64, tool crashes, and TUI freezes disrupt workflow.
- **Model configuration mismatches** (#3824, #3823): Sub‑agents silently using different models than configured, and reasoning effort downgrades without notification.
- **Session and update edge cases** (#3821, #3518): Lost session state after updates, inability to restore archived sessions.
- **Cancellation confusion** (#3826): The cancellation message being re‑injected as user input creates conversational noise.
- **Rate limit clarity** (#3819): The rate limit error message lacks timezone information, making it hard to know when the limit resets.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-17

## Today's Update Brief
Activity was moderate, with four issues and one pull request updated in the last 24 hours. No new releases were published. Two open bugs were reported—a frustrating onboarding UX and a persistent MCP auto‑discovery conflict—while a long‑standing PR fixing a 400 error for tool messages remains open awaiting review.

## Releases
No new releases in the last 24 hours.

## Hot Issues

### 1. [#2456 – Bug: Fresh install reports "LLM not set" with no guidance to run login](https://github.com/MoonshotAI/kimi-cli/issues/2456)
- **Status:** Open, 0 comments
- **Summary:** After a Homebrew install (`brew install kimi-cli` v1.47), running any command immediately fails with `LLM not set` and offers no hint that `kimi login` is required. This breaks first‑run experience.
- **Impact:** Blocks all new users unable to discover the login step intuitively.
- **Community reaction:** No engagement yet (reported today).

### 2. [#2457 – Kimi Code CLI auto-discovers MCP server after user deleted it, causing unfixable 400 errors](https://github.com/MoonshotAI/kimi-cli/issues/2457)
- **Status:** Open, 0 comments
- **Summary:** After deleting an MCP server configuration, the CLI continues to auto‑discover and attach it to every session. The server endpoint returns 400 errors, and there is no way to permanently remove it.
- **Impact:** Affects users who manage MCP servers dynamically; the bug breaks any workflow reliant on clean server configuration.
- **Community reaction:** Reported today on Windows 10 x64, Kimi Code CLI v0.15.0. No workaround noted yet.

### 3. [#1327 – [enhancement] More Steps per turn By Default](https://github.com/MoonshotAI/kimi-cli/issues/1327)
- **Status:** Open, 3 comments
- **Summary:** The default step limit (100) is too low; users hit `Max number of steps reached: 100` while context is only ~34.5% full. Suggests raising the default or making it configurable out of the box.
- **Impact:** Interrupts long reasoning sessions, forcing users to manually adjust config or restart.
- **Community reaction:** Opened in March, last updated yesterday. No maintainer response yet. Low 👍 (0).

### 4. [#1632 – Feature Request: Option to hide thinking content while using thinking models](https://github.com/MoonshotAI/kimi-cli/issues/1632)
- **Status:** Closed, 2 comments, 3 👍
- **Summary:** When using thinking‑enabled models (e.g. `kimi-k2-thinking-turbo`), the real‑time grey thinking text is always shown. Users want a flag to suppress it for cleaner output while still using the improved reasoning.
- **Impact:** Workflow disruption for users who want silent reasoning; currently no toggle exists.
- **Community reaction:** Closed (merged or rejected? Not clear from data). Two comments, positive vote count.

## Key PR Progress

### 1. [#1771 – fix: always stringify tool message content in Chat Completions provider](https://github.com/MoonshotAI/kimi-cli/pull/1771)
- **Status:** Open, no comments
- **Summary:** Fixes issue #1762 where tool messages with multiple `ContentPart` objects (e.g. a system reminder + actual output) are sent as an array to the OpenAI‑compatible API, causing a `400: Failed...` error. The PR converts such arrays to a single JSON‑stringified string.
- **Impact:** Critical for users relying on tool‑oriented workflows (e.g., code generation with system reminders). Without this fix, tool calls fail silently or with errors.
- **Maintainer activity:** Last updated yesterday (June 16) – author pushed a change. No reviewer or merge yet.

## Feature Request Clusters

- **Default step limit and thinking visibility**
  Two recurring requests: (1) increase or make configurable the default steps-per-turn limit (#1327); (2) add an option to hide the real‑time thinking output from thinking‑capable models (#1632). Both center on user control over CLI verbosity and session length. No roadmap indicators exist.

## Developer Pain Points

- **Poor onboarding UX** – The CLI provides zero guidance after a fresh install; users hit `LLM not set` without any reference to `kimi login`. (#2456)
- **MCP server auto‑discovery persistence** – Deleting an MCP server does not prevent the CLI from re‑discovering and using it, leading to unfixable 400 errors. (#2457)
- **No workarounds documented** for the MCP issue, and the tool‑message stringify fix (#1771) has stalled for over two months, affecting anyone using tool‑calling with the OpenAI provider.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-06-17

### 1. Today’s Update Brief
Active day with one new release and 30+ issues/PRs updated. A major feature request for native session goals (50 comments, 87 👍) continues to dominate discussion, while several MiniMax integration bugs and a new compaction loop on empty repos surfaced. PR activity focused on provider compatibility (MiniMax, ChatGPT OAuth, MCP schema sanitization) and desktop file-watcher safety. No releases shipped in the last 24 hours.

### 2. Releases
*None in the last 24 hours.*

---

### 3. Hot Issues

1. **[#27167 – Feature: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)**
   *Comments: 50 | 👍 87*
   High-engagement request for a persistent session goal/lifecycle feature. Community feedback strongly supports replacing manual prompting with a dedicated `/goal` command.

2. **[#18001 – Feature: Implement /loop command for automated iterative task execution](https://github.com/anomalyco/opencode/issues/18001)**
   *Comments: 9 | 👍 27*
   Users want a `/loop` to run repetitive tasks without writing long prompts each time. Complements the session goal concept.

3. **[#21470 – OpenCode is heavily CPU-bound](https://github.com/anomalyco/opencode/issues/21470)**
   *Comments: 11 | 👍 10*
   Reports that OpenCode itself consumes more CPU than model API calls (with Gemini 3.1). The issue has over 1.5M tokens used internally, suggesting overhead in context management.

4. **[#8345 – zsh: illegal hardware instruction  opencode](https://github.com/anomalyco/opencode/issues/8345)**
   *Comments: 15 | 👍 6*
   Persistent crash on macOS for OpenCode 1.1.19. Likely a binary compilation mismatch with older Apple Silicon or Intel chips.

5. **[#25832 – opencode cannot read images anymore](https://github.com/anomalyco/opencode/issues/25832)**
   *Comments: 13 | 👍 4*
   Regression after April 29: model fails to read PNG/JPG with `Bad ...` error. Affects workflows that rely on visual context.

6. **[#28957 – Bug: "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)**
   *Comments: 15 | 👍 0*
   Timeout when using the `writing-plans` skill on macOS Tahoe. Appears to be an infrastructure-level connection issue between client and model service.

7. **[#2047 – LM Studio Failure to refresh models](https://github.com/anomalyco/opencode/issues/2047)**
   *Comments: 17 | 👍 4*
   Adding/removing models in LM Studio does not refresh the OpenCode model list even after re-authentication. Requesting a manual refresh option.

8. **[#32615 – Infinite clarification/compaction loop on empty git repo](https://github.com/anomalyco/opencode/issues/32615)**
   *Comments: 3*
   New bug: OpenCode enters a loop on a repo containing only `.git/`, burning tokens without progress. Both a correctness and cost-control issue.

9. **[#32444 – GLM-5.2 thinking-effort variants (High/Max) not exposed](https://github.com/anomalyco/opencode/issues/32444)**
   *Comments: 2 | 👍 6*
   `ProviderTransform.variants()` returns `{}` for any model with `"glm"` in its ID, hiding the High/Max thinking levels that Z.AI supports.

10. **[#32608 – OpenCode Go: minimax-m3 fails with "tool call result does not follow tool call" (2013)](https://github.com/anomalyco/opencode/issues/32608)**
    *Comments: 2*
    (Representative of three parallel MiniMax reports #32608, #32611, #32614) Switching a session with existing tool history to MiniMax M3 triggers a 400 error. Fresh sessions work fine.

---

### 4. Key PR Progress

1. **[#32609 – fix(provider): sanitize MiniMax tool result text](https://github.com/anomalyco/opencode/pull/32609)**
   Open. Direct fix for #32608: strips provider-specific fields from tool results that MiniMax rejects.

2. **[#32610 – fix(desktop): skip file watcher on $HOME and filesystem root](https://github.com/anomalyco/opencode/pull/32610)**
   Open. Prevents inotify subscribe timeouts and CPU spikes by ignoring broad roots. Includes Flatpak workaround.

3. **[#32604 – fix(session): preserve reasoning part type on model switch](https://github.com/anomalyco/opencode/pull/32604)**
   Open. Avoids mass prefix cache invalidation when switching between models, reducing delays.

4. **[#32612 – fix(codex): exclude `-pro` models from ChatGPT-account model list](https://github.com/anomalyco/opencode/pull/32612)**
   Open. Prevents selection of `gpt-5.5-pro` which always fails on OAuth accounts.

5. **[#27554 – feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)**
   Open. Uses mDNS and other methods to discover local OpenAI-compatible servers (LM Studio, Ollama, etc.) and auto-add their models.

6. **[#32592 – fix(opencode): send system context as structured messages on OpenAI OAuth path](https://github.com/anomalyco/opencode/pull/32592)**
   Merged. Fixes a compatibility bug where system/instruction context was flattened into a single field for OAuth requests.

7. **[#26861 – fix(tui): Old messages disappearing during long sessions](https://github.com/anomalyco/opencode/pull/26861)**
   Open. Implements lazy-scroll loading and avoids trimming messages that haven't been rendered, addressing a years-old issue (#7380).

8. **[#32193 – fix(core): fix mentions for files in hidden folders](https://github.com/anomalyco/opencode/pull/32193)**
   Open. Extends `@ file` mention to work in directories starting with `.` (hidden folders).

9. **[#27939 – feat(session): add configurable fallback model chain](https://github.com/anomalyco/opencode/pull/27939)**
   Merged. Allows defining a prioritized list of models; if the primary fails or is rate-limited, OpenCode tries the next in chain.

10. **[#27919 – fix(session): break infinite compaction loop](https://github.com/anomalyco/opencode/pull/27919)**
    Merged. Prevents the session loop from spinning endlessly when compression cannot fit context within the token limit, saving API credits.

---

### 5. Feature Request Clusters

- **Session Lifecycle & Automation**
  Several requests for commands that manage session goals (`/goal`, #27167), iterative loops (`/loop`, #18001), and fallback model chains (#27939). These aim to reduce manual prompting for repetitive or long-running tasks.

- **Plugin System Enhancements**
  Users want a middleware-style pipeline (#5148) and regex-based permissions (#11397). PRs addressing plugin auto-install configuration (#27918) and mutable spec refresh (#27940) show ongoing investment in plugin flexibility.

- **UI/UX Customizability**
  Requests for layout swapping (#16349), configurable session picker limits (#20754), and fixes for the new layout breaking Plan/Build switching (#31972) indicate a desire for more user-controlled interface behavior.

- **Provider Compatibility

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-06-17**.

---

## 1. Today's Update Brief

Today's activity is moderate, centered on final polish for the upcoming **v0.18.1** release. Two patch variants were published (one preview, one nightly) with the same two fixes: a warning for oversized context instructions and CLI documentation corrections. On the issue tracker, user energy is split between an aggressive **OAuth free tier downsizing**, a recurring **terminal exit bug**, and a significant number of **CI/business automation feature requests** (specifically around the `/loop` command). A **QQ Bot channel adapter** PR is ready for merge, highlighting a growing focus on Chinese developer platform integration.

## 2. Releases
Two releases were published within the last 24 hours:
- **[v0.18.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-preview.0)**: Contains a fix to warn on oversized context instructions (by @he-yufeng) and a doc fix for stale defaults, CLI syntax, and tool naming drift.
- **[v0.18.1-nightly.20260616.a68b2e1e7](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-nightly.20260616.a68b2e1e7)**: Contains the same two changes as the preview release.

**Note:** The release workflow for the stable **v0.18.1** failed on 2026-06-15 ([#5150](https://github.com/QwenLM/qwen-code/issues/5150)), which likely explains the delay in pushing a stable release today.

## 3. Hot Issues (10 noteworthy items)

1. **OAuth Free Tier Downsize** ([#3203](https://github.com/QwenLM/qwen-code/issues/3203))
   - **Workflow:** Users relying on the Qwen OAuth free tier.
   - **Issue:** A proposal to cut the daily free quota from 1,000 to **100 requests/day** and eventually close the free entry point entirely.
   - **Impact:** High; 136 comments indicate strong community pushback. Still open after 2 months.

2. **QQ Bot Channel Adapter** ([#5201](https://github.com/QwenLM/qwen-code/issues/5201))
   - **Workflow:** Messaging/chatops via QQ.
   - **Issue:** A feature request for an official `@qwen-code/channel-qqbot` adapter, complete with WebSocket Gateway support.
   - **Status:** PR is ready (#5202); very likely to land soon, expanding China-specific integration.

3. **`/model` Shows Discontinued OAuth Model** ([#5160](https://github.com/QwenLM/qwen-code/issues/5160))
   - **Workflow:** CLI model switching.
   - **Issue:** Bug: Even when OAuth is not configured, `/model` displays a discontinued "qwen-oauth coder-model" as the first entry, causing user confusion.
   - **Status:** Closed. A fix was merged in PR [#5167](https://github.com/QwenLM/qwen-code/pull/5167) by @he-yufeng.

4. **Exit Plan Mode Frozen for 7+ Hours** ([#5210](https://github.com/QwenLM/qwen-code/issues/5210))
   - **Workflow:** Plan mode (AUTO/YOLO).
   - **Issue:** User reports `exit_plan_mode` gets stuck for 7+ hours when using `qwen3.7-max`, failing to switch to yolo mode.
   - **Impact:** Critical for power users relying on multi-agent execution. Partially addressed by PR #5188.

5. **Sub-Agent Parallel Count Limit Request** ([#5176](https://github.com/QwenLM/qwen-code/issues/5176))
   - **Workflow:** Local LLM / multi-agent execution.
   - **Issue:** Request for a setting to limit parallel sub-agents with a pending queue, to avoid overloading local resources.
   - **Status:** Open; reflects a real pain point for self-hosted users.

6. **Stale Worktree Marker Blocks Cleanup** ([#5208](https://github.com/QwenLM/qwen-code/issues/5208))
   - **Workflow:** Git worktree session management.
   - **Issue:** Bug: A stale `.qwen-session` marker prevents `exit_worktree` from cleaning up a worktree created by a different session.
   - **Status:** Open; a clear UX regression in multi-session workflows.

7. **Auto-Update Fails on Old glibc (CentOS 7)** ([#5206](https://github.com/QwenLM/qwen-code/issues/5206))
   - **Workflow:** CLI auto-update on Linux.
   - **Issue:** The auto-update silently migrates from npm install to standalone installer when npm prefix is root-owned, but fails on CentOS 7 (glibc 2.17).
   - **Impact:** Blocks updates for users on legacy enterprise Linux.

8. **Localization of Hardcoded English UI Strings** ([#5186](https://github.com/QwenLM/qwen-code/issues/5186))
   - **Workflow:** Web-shell internationalization.
   - **Issue:** Several user-facing strings in `packages/web-shell/client` bypass the i18n system, breaking non-English UI.
   - **Status:** Open; welcome for PRs from the community.

9. **Sub-Agent Crashes Mid-Task** ([#5180](https://github.com/QwenLM/qwen-code/issues/5180))
   - **Workflow:** Multi-agent / `/swarm` execution.
   - **Issue:** A sub-agent performing actual work crashes halfway through a 12-hour session. The parent issue involves project management delegation.
   - **Status:** Open; appears to be a stability issue under long-running tasks.

10. **Persistent API Connection Error** ([#3050](https://github.com/QwenLM/qwen-code/issues/3050))
    - **Workflow:** API connectivity (Qwen 3.6+).
    - **Issue:** User reports `fetch failed` errors repeatedly with no resolution. The issue has been open since April but received no maintainer response.
    - **Impact:** User-unfriendly; no repro or resolution provided.

## 4. Key PR Progress (10 important PRs)

1. **[fix: terminal stuck in SGR mouse mode after exit](https://github.com/QwenLM/qwen-code/pull/5213)** (by @Eric-GoodBoy-Tech)
   - **Merge Status:** ✅ Closed.
   - **Summary:** Fixes a bug where `Ctrl+C` leaves the terminal in mouse-tracking mode, making scrolling unusable. Uses `writeSync` in the exit handler.

2. **[Wire prompt-only /loop to self-paced wakeups](https://github.com/QwenLM/qwen-code/pull/5197)** (by @qqqys)
   - **Merge Status:** Open.
   - **Summary:** Step 2 of aligning `/loop` with Claude Code: `/loop <prompt>` now runs immediately and schedules exactly one future continuation instead of a recurring cron job.

3. **[Second-resolution session wakeup engine](https://github.com/QwenLM/qwen-code/pull/5182)** (by @qqqys)
   - **Merge Status:** Open.
   - **Summary:** Step 1 of the `/loop` alignment. Adds a `CronScheduler` for session-scoped, non-durable, second-resolution wakeups.

4. **[feat(channel): add QQ Bot channel adapter](https://github.com/QwenLM/qwen-code/pull/5202)** (by @Eric-GoodBoy-Tech)
   - **Merge Status:** Open.
   - **Summary:** Adds an official QQ Bot adapter with WebSocket Gateway, joining the existing Telegram/WeChat/DingTalk/Feishu line-up.

5. **[fix(cli): skip highlightAuto for unlabeled code blocks with box-drawing/CJK content](https://github.com/QwenLM/qwen-code/pull/5198)** (by @yuanyuanAli)
   - **Merge Status:** ✅ Closed.
   - **Summary:** Improves code rendering by detecting CJK/box-drawing characters and falling back to plain text, avoiding garbled syntax highlighting.

6. **[fix: strengthen exit_plan_mode descriptions to prevent empty plan](https://github.com/QwenLM/qwen-code/pull/5188)** (by @Alex-ai-future)
   - **Merge Status:** ✅ Closed.
   - **Summary:** Toughens the schema for `exit_plan_mode` to reject empty `plan` parameters, reducing wasted retry turns caused by the model sending empty strings.

7. **[fix(cli): hide unconfigured discontinued OAuth model](https://github.com/QwenLM/qwen-code/pull/5167)** (by @he-yufeng)
   - **Merge Status:** ✅ Closed.
   - **Summary:** Fixes #5160: the `/model` picker now hides the discontinued OAuth model when the user is not using OAuth.

8. **[fix(plan-gate): isolate gate agent AbortSignal from parent](https://github.com/QwenLM/qwen-code/pull/5185)** (by @CubeLander)
   - **Merge Status:** Open.
   - **Summary:** Fixes an infinite retry loop in the Plan Approval Gate review agent when using `exit_plan_mode` in AUTO/YOLO mode.

9. **[fix(core): read SHORT-typed TIFF dimensions correctly on big-endian](https://github.com/QwenLM/qwen-code/pull/5209)** (by @he-yufeng)
   - **Merge Status:** ✅ Closed.
   - **Summary:** Fixes a bug where TIFF dimension parsing failed on big-endian files, affecting image tokenization for certain image formats.

10. **[fix(permissions): do not model /dev/tcp and /dev/udp redirects as file I/O](https://github.com/QwenLM/qwen-code/pull/5196)** (by @warmjademe)
    - **Merge Status:** ✅ Closed.
    - **Summary:** Security fix: Treats `bash` network pseudo-devices (e.g., `/dev/tcp/evil.com/9000`) as network sockets, not file reads/writes, preventing false permission prompts or unsafe permissions.

## 5. Feature Request Clusters

- **Sub-agent Control & Queuing** (e.g., [#5176](https://github.com/QwenLM/qwen-code/issues/5176)): Multiple requests for configurable parallelism limiting and pending queues for sub-agents, driven by users running local LLMs with constrained resources.

- **Background Automation & Self-Pacing** (e.g., [#5124](https://github.com/QwenLM/qwen-code/issues/5124), [#5184](https://github.com/QwenLM/qwen-code/issues/5184), [#5156](https://github.com/QwenLM/qwen-code/issues/5156)): A coordinated cluster of issues building toward a `/loop` command that supports self-paced, non-blocking background execution, aligning with Claude Code’s `ScheduleWakeup` feature.

- **Multi-Agent Orchestration & Dynamic Workflows** (e.g., [#4721](https://github.com/QwenLM/qwen-code/issues/4721)): Requests to port Claude Code’s **Dynamic Workflows / Ultracode** feature as a third tier of multi-agent execution, beyond the existing `/swarm` tool.

- **Feature Parity with Claude Code** (e.g., [#4882](https://github.com/QwenLM/qwen-code/issues/4882)): Specific requests to implement `terminalSequence` fields on hooks and other minor CC features. This suggests a segment of the community is actively comparing the two tools.

## 6. Developer Pain Points

1. **API Connectivity Issues (Unresolved):** Issue [#3050](https://github.com/QwenLM/qwen-code/issues/3050) shows a user unable to use Qwen 3.6+ due to persistent `fetch failed` errors. The issue has been open since April with no maintainer response, creating a poor user experience that erodes trust.

2. **Exit Plan Mode Deadlock:** Issue [#5210](https://github.com/QwenLM/qwen-code/issues/5210) (and PR #5185) highlight a core workflow bug where `exit_plan_mode` gets stuck in an infinite loop or freeze, making the CLI unusable for hours. This is a critical UX issue for heavy users of the plan mode.

3. **Sub-Agent Instability Under Load:** Issue [#5180](https://github.com/QwenLM/qwen-code/issues/5180) describes sub-agents crashing mid-execution during long (>12h) sessions. For developers relying on autonomous agents, this is a blocking stability concern.

4. **Windows & Legacy Linux Compatibility Gaps:** Issues like [#5206](https://github.com/QwenLM/qwen-code/issues/5206) (CentOS 7 auto-update failure) and [#5055](https://github.com/QwenLM/qwen-code/issues/5055) (VSIX flagged as Trojan on Windows) show ongoing friction for developers on non-bleeding-edge platforms.

</details>