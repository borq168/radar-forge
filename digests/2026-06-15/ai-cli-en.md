# AI CLI Tools Community Digest 2026-06-15

> Generated: 2026-06-15 02:51 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross-Tool Comparison Report — 2026-06-15

## 1. Daily Cross-Tool Overview

Activity across the six tracked AI CLI tools remained high today, with Claude Code, OpenAI Codex, OpenCode, and Qwen Code each reporting 50+ issues and 50+ PRs updated. No tools shipped a new release except OpenCode (v1.17.7 patch). The most urgent cross-tool pattern is a cluster of agent recursion and safety bugs—Claude Code and Gemini CLI both have open critical issues about sub-agents spawning uncontrollably or hanging without recovery. Several tools (Claude Code, OpenCode, Kimi Code) share reports of broken copy-paste in the TUI on multiple platforms. Windows-specific stability problems persist across OpenAI Codex and Claude Code, with crash-on-launch and blank-screen regressions reported in the last 48 hours.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Notable Activity Signal |
|------|---------------------|-------------------|---------------|------------------------|
| **Claude Code** | 50 | 5 | None | 2 critical subagent recursion bugs filed; kernel memory leak on macOS |
| **OpenAI Codex** | 50+ | 50+ | None | Windows app crashes after June 12 update; token consumption complaints |
| **Gemini CLI** | ~10 | 10 | None | Multiple P1 agent-hang bugs; bulk dependency updates (53 packages) |
| **Copilot CLI** | 8 | 0 | None | Session poisoning from malformed attachments; UI layout bug |
| **Kimi Code** | 3 | 4 | None | Rate-limiting transparency issue on paid plan; system prompt conflict |
| **OpenCode** | 50+ | 50+ | **v1.17.7** | Plugin client and shell tool fixes; DeepSeek price reduction adopted |
| **Qwen Code** | 27 | 50+ | None | Trojan security alert; release workflow failed; OAuth free-tier debate |

**Key**: "50+" indicates at least 50 items, per digest reporting. Exact counts may exceed this threshold.

## 3. Shared Feature Directions

### Agent Recursion / Subagent Depth Controls
- **Claude Code**: Issues [#68430](https://github.com/anthropics/claude-code/issues/68430) and [#68110](https://github.com/anthropics/claude-code/issues/68110) report sub-agents recursively spawning 50+ levels deep with no depth or count limits, ignoring configuration flags.
- **Gemini CLI**: Issue [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) reports generalist agent hangs when deferring to sub-agents; [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) reports sub-agents reporting success despite hitting MAX_TURNS without doing actual work.
- **Observation**: Both communities are asking for configurable max depth, token budgets, and cost caps per agent tree. This is the strongest cross-tool signal this week.

### TUI Copy-Paste Failures
- **Claude Code**: [#66192](https://github.com/anthropics/claude-code/issues/66192) — keyboard copy-paste broken on macOS TUI (1 week old).
- **OpenCode**: [#13984](https://github.com/anomalyco/opencode/issues/13984) — cannot copy and paste in CLI (open since February, 48 comments).
- **Kimi Code**: PR [#2018](https://github.com/MoonshotAI/kimi-cli/pull/2018) (merged) adds `Alt+V` paste fallback for Windows Terminal, where `Ctrl+V` is intercepted.
- **Observation**: Basic clipboard functionality is a recurring pain point across three tools, with no universal solution yet. OpenCode has a new PR ([#32370](https://github.com/anomalyco/opencode/pull/32370)) targeting Linux PRIMARY buffer.

### Windows Stability Issues
- **OpenAI Codex**: [#27979](https://github.com/openai/codex/issues/27979) and [#27367](https://github.com/openai/codex/issues/27367) — desktop app fails to open or exits immediately after June 12 update.
- **Claude Code**: [#51143](https://github.com/anthropics/claude-code/issues/51143) — blank/white screen on Windows Desktop, 2 months without fix.
- **Kimi Code**: Multiple merged PRs this period (#2020, #839) addressing Windows log rotation and configurable shell, suggesting ongoing catch-up.
- **Observation**: Windows support remains inconsistent across tools, with platform-specific regressions persisting for weeks to months.

### Message Queuing / Non-Interruptive Task Execution
- **Claude Code**: [#50246](https://github.com/anthropics/claude-code/issues/50246) (92 👍) — most-upvoted open feature request for queuing prompts while busy.
- **OpenCode**: [#5305](https://github.com/anomalyco/opencode/issues/5305) (13 👍) — plugin hook for instant TUI commands that execute without waiting for agent response.
- **Observation**: Users across tools want the ability to queue work or run lightweight commands without blocking on agent response. No maintenance response yet from Claude Code on implementation priority.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----------|
| **Primary target** | Professional developers, heavy agent usage | VS Code users, paid subscribers | Google ecosystem, enterprise | GitHub ecosystem, CI/CD | Competitive with Claude Code | Plugin-extensible, multi-provider | Alibaba/China market, cost-sensitive |
| **Strongest pain today** | Agent recursion safety, kernel memory leaks | Windows crashes, token burn | Agent hangs, subagent reliability | Session poisoning from malformed input | Rate limiting transparency, Windows UX | TUI copy-paste, MCP environment leaks | Trojan false positive, configuration friction |
| **Active maintainer response** | Low (many issues 2-3mo open, auto-fix PRs via NVIDIA AI) | Moderate (PRs in progress) | Low (P1 bugs open for weeks) | Low (8 issues, 0 PRs) | Low (rate-limit issue unresolved) | Moderate (v1.17.7 shipped today) | Moderate (several CI fixes in flight) |
| **Community engagement per issue** | High (some issues 92👍, 607 comments) | Very high (#14593: 607 comments, 268👍) | Low-moderate (8👍 max) | Low (7👍 max) | Low (0-1 upvotes) | Moderate (79👍 max on price issue) | High (135 comments on free-tier debate) |
| **Unique feature signals** | Subagent depth controls, message queue mode | Linux desktop app request, MCP timeout bugs | AST-aware tooling, Auto Memory noise | BYOK model discovery, Azure DevOps inbox | Project context auto-load, system prompt isolation | MCP full client capabilities, DeepSeek cache optimization | OAuth free-tier policy, trojan security audit |

**Key differentiators today**:
- **Claude Code** is dealing with the most acute safety crisis (agent recursion, kernel memory leak), but has the most organized feature request clusters.
- **OpenAI Codex** has the highest-volume community engagement (607 comments on token burn) but also the broadest platform regression surface (Windows, MCP, safety flags).
- **Gemini CLI** is focused on internal evaluation infrastructure and dependency upgrades, with less visible community demand.
- **Copilot CLI** has the lightest activity of all tracked tools, with only 8 issues and 0 PRs today.
- **OpenCode** is the only tool to ship a release today, and is actively responding to the DeepSeek price reduction with usage limit adjustments.
- **Qwen Code** has an unusual mix of security alerts (trojan detection, sandbox bypass) and pricing policy debate, suggesting growing pains under higher adoption.

## 5. Community Activity Notes

**By raw volume**: OpenAI Codex, OpenCode, and Claude Code are tied at 50+ issues each updated today. Qwen Code has 27 issues but 50+ PRs. Gemini CLI shows ~10 issues and 10 PRs. Copilot CLI and Kimi Code have notably lower traffic (8 and 3 issues respectively).

**By release activity**: Only OpenCode shipped a release (v1.17.7). Qwen Code reports a failed nightly release workflow.

**By maintainer response signal**: OpenCode appears most responsive (shipped a release, closed several issues quickly including the DeepSeek price adjustment). Claude Code and Gemini CLI have multiple P1/P2 bugs open for weeks without resolution. OpenAI Codex has significant PR activity (50+ PRs) suggesting ongoing development despite the Windows crash issues.

**By urgency of new reports**: Claude Code's two subagent recursion bugs (#68430, #68110) filed in the last 48 hours and marked CRITICAL represent the most immediately concerning pattern. OpenAI Codex's Windows crash reports (#27979, #27367) affect a large user base with no posted workaround.

## 6. Evidence-Backed Observations

1. **Agent safety is the most pressing cross-tool gap this week.** Claude Code has two critical reports of unbounded subagent spawning (50+ levels, exponential fan-out) with no depth or cost limits. Gemini CLI reports sub-agents that hang indefinitely or silently report success after failure. Both communities are independently requesting configurable recursion limits, token budgets, and cost caps. This is a systemic issue in the agent architecture, not a single-tool bug.

2. **TUI copy-paste is a chronically under-served basic UX need.** Three separate tools (Claude Code, OpenCode, Kimi Code) have active reports or fixes about broken clipboard operations. OpenCode's issue is 4 months old; Claude Code's is 1 week old. The diversity of platforms affected (macOS, Linux PRIMARY buffer, Windows Terminal) suggests the problem is in terminal emulator interaction rather than a single tool's implementation.

3. **Windows platform support is consistently weaker than macOS across the ecosystem.** OpenAI Codex has two separate crash-on-launch reports after the June 12 update. Claude Code has a 2-month-old blank-screen regression. Kimi Code has multiple Windows-specific fixes merged in this period. Copilot CLI's Windows experience is not reported as broken, but given the low issue volume, absence of evidence is not evidence of absence.

4. **Token consumption and cost transparency complaints are concentrated in the most-used tools.** OpenAI Codex's top issue (#14593, 607 comments, 268👍) is about unexpectedly fast token burn. Claude Code has billing confusion issues (#32544, 14👍) and the most expensive subagent recursion bugs. Qwen Code has per-task token logging in progress (#5118) and free-tier policy debate. The correlation suggests that as tools gain adoption, users hit cost walls that are poorly communicated.

5. **Session/data reliability issues recur across multiple tools without clear resolution timelines.** Claude Code has session cleanup data loss (#41458, 2.5 months open), file truncation without warning (#53940), and zero-byte agent outputs. OpenAI Codex has attachment poisoning that corrupts entire sessions (#3791). Gemini CLI has repeated tool-call results ballooning context (#5101). No tool has a posted fix or timeline for any of these issues.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-15

## Today's Update Brief

No new releases shipped in the last 24 hours. Issue activity remains high, with **50 open issues** updated today, concentrated around agent recursion bugs, memory/pty leaks, and model hallucination problems (raw `<invoke>` text, malformed tool calls). Two new high-urgency reports surfaced: Opus 4.8 silent failures (#68510) and a macOS 26.5.1 kernel zone leak (#66020).

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#53940 — Cowork Edit/Write tools silently truncate files via byte-conservation buffer cap](https://github.com/anthropics/claude-code/issues/53940)**
   *31 comments · 12 👍*
   Files written by Cowork's Edit/Write tools are silently truncated when they exceed a fixed byte-conservation buffer. The truncation is deterministic and occurs at all file sizes, making it easy to lose data without warning. The maintainer has not confirmed a fix timeline.

2. **[#50246 — Feature Request: Message queue mode](https://github.com/anthropics/claude-code/issues/50246)**
   *28 comments · 92 👍*
   The most-upvoted open feature request. Users want to queue messages/tasks while Claude is busy, instead of being forced to interrupt mid-task. Multiple companion requests exist (#64204 for VSCode). No maintainer response indicating implementation priority.

3. **[#41458 — `cleanupPeriodDays: 99999` ignored — 490 sessions deleted](https://github.com/anthropics/claude-code/issues/41458)**
   *16 comments · 1 👍*
   Despite setting `cleanupPeriodDays: 99999`, a user lost 490 sessions in a single cleanup cycle. Marked as regression and data-loss. Still open after 2.5 months — a concerning signal for session persistence reliability.

4. **[#32544 — Extra usage charged despite available plan capacity + false rate limit errors](https://github.com/anthropics/claude-code/issues/32544)**
   *15 comments · 14 👍*
   Users report being charged for API calls when their plan has remaining capacity. False rate-limit errors also appear, redirecting users to upgrade plans they don't need. Still unresolved after 3 months.

5. **[#51143 — Desktop persistent blank/white screen on Windows](https://github.com/anthropics/claude-code/issues/51143)**
   *13 comments · 12 👍*
   Windows users experience an unusable blank/white screen in Claude Desktop. Cowork mode is entirely broken. Multiple reinstalls have no effect. The issue is almost 2 months old with no fix.

6. **[#63870 — Bash tool calls emitted as raw `<invoke>` text instead of executing](https://github.com/anthropics/claude-code/issues/63870)**
   *11 comments · 13 👍*
   The model is outputting literal `<invoke>` XML as text rather than executing it as a tool call. The reporter provides JSONL evidence of 23 malformed calls from one session. Related duplicates exist (#61122, #61367, #62344, #63616), suggesting a systemic model behavior regression.

7. **[#66192 — Copy-paste does not work on macOS](https://github.com/anthropics/claude-code/issues/66192)**
   *11 comments · 10 👍*
   A basic UX failure: keyboard-driven copy-paste breaks in the TUI on macOS. The issue is a week old.

8. **[#68430 — Subagent spawning bugs cause infinite recursion and massive token burn](https://github.com/anthropics/claude-code/issues/68430)**
   *7 comments*
   Marked **CRITICAL**. Subagents recursively spawn child agents 50+ levels deep, ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`. Permission denials trigger further spawning instead of stopping. Agents fetch individual files from GitHub repos via HTTP, compounding token usage. Filed yesterday.

9. **[#66020 — macOS 26.5.1 kernel zone leak (`data.kalloc.1024`) from Claude Code CLI](https://github.com/anthropics/claude-code/issues/66020)**
   *7 comments*
   A kernel memory zone leak that grows from 21 to 1,027 allocations/second with agent load. Panics at ~20GB. Only affects macOS 26.5.1. Technical depth is high — requires understanding of XNU kalloc zones to reproduce.

10. **[#68110 — General-purpose sub-agents recursively spawn unbounded child agents](https://github.com/anthropics/claude-code/issues/68110)**
    *4 comments · 2 👍*
    The `Agent` tool with `general-purpose` sub-agents leads to exponential fan-out: each sub-agent can itself use the `Agent` tool. No depth or count limits enforced. Filed 2 days ago; combined with #68430 suggests a pressing agent-safety gap.

## Key PR Progress

Only **5 PRs** were updated in the last 24 hours — an unusually low count:

1. **[#68423 — fix(scripts): don't auto-close assigned issues in sweep](https://github.com/anthropics/claude-code/pull/68423)**
   Fixes the stale-issue sweeper so it skips assigned issues during the `closeExpired` stage (it already skips them in `markStale`). Prevents maintainer-assigned issues from being auto-closed.

2. **[#67699 — Fix: Claude autonomously ran background scripts calling a paid external API](https://github.com/anthropics/claude-code/pull/67699)**
   Bounty: $29. Addresses a safety bug where Claude independently executed background scripts that made paid external calls. Implemented via NVIDIA AI (automated).

3. **[#67409 — Fix: Account downgraded due to billing error](https://github.com/anthropics/claude-code/pull/67409)**
   Bounty: $200. Fixes a billing regression where accounts were incorrectly downgraded. Also automated implementation via NVIDIA AI.

4. **[#67722 — Fix: Claude autonomously ran background scripts (closed)](https://github.com/anthropics/claude-code/pull/67722)**
   Closed. A duplicate/submission related to #67699, likely superseded.

5. **[#1 — Create SECURITY.md (closed)](https://github.com/anthropics/claude-code/pull/1)**
   The very first PR on the repo, mysteriously updated yesterday (2026-06-14), 16 months after creation. Likely a metadata/merge event rather than substantive change.

## Feature Request Clusters

- **Message Queue / Sequential Task Execution**
  Requested in #50246 (92 👍) and #64204 (VSCode extension). Users want to queue prompts while Claude is busy, rather than interrupting active tasks. High community demand.

- **Subagent Depth & Cost Controls**
  Multiple reports (#68430, #68110) highlight the lack of recursion limits on the `Agent` tool. Users want configuration for max subagent depth, token budgets, and cost caps per agent tree.

- **Window Capture / Appshots-style Integration**
  #68498 requests full-window text capture (including scrolled content) using macOS accessibility APIs, similar to OpenAI Codex's Appshots feature.

- **Conversation Scoping Per Project**
  #68495 asks for project-scoped conversation lists. The current UI shows all conversations across all projects by default, which leaks context between unrelated work.

## Developer Pain Points

- **Agent recursion / runaway token consumption** is the most urgent pattern this week. Two critical reports (#68430, #68110) were filed within 48 hours describing exponential subagent spawning with no depth limits. Combined with a kernel memory leak (#66020) and pty exhaustion (#66434, #65995), resource management appears to be the weakest area of the current build.

- **Malformed tool call responses** — both as raw `<invoke>` text (#63870) and with stray prefixes (#68472, #68354) — suggest a model-level regression in tool-call generation. Multiple duplicates and cross-platform reports (macOS, Windows) indicate this is not environment-specific.

- **Billing and rate-limit confusion** persists (#32544, #68502), with users being charged incorrectly or hitting false rate limits. The HTTP 529 overloaded error being presented as "Rate limited" (#68502) misleads users into believing they need to upgrade their plan.

- **Session data loss** remains a recurring pain point across multiple issues (#41458 for cleanup, #53940 for file truncation, #68496 for zero-byte agent outputs). Users lack confidence that their work persists correctly.

- **Platform-specific regressions** on Windows (#51143 blank screen, #68504 latest version not running) and macOS (#66192 copy-paste broken, #68461 iTerm2 render corruption) suggest CI coverage gaps for non-primary platforms.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-15

## Today’s Update Brief
No new releases were published in the last 24 hours, but community activity remains high with 50+ issues and 50+ pull requests updated. The most pressing concerns involve Windows app crashes after recent updates, false‑positive cybersecurity flags blocking normal workflows, and persistent performance complaints around token consumption and response speed.

## Releases
*None*

## Hot Issues

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
   *607 comments | 👍 268*
   A Business subscriber on VS Code reports unexpectedly high token consumption. The thread has grown into the most active issue on the repository, with many users sharing similar experiences. No official resolution has appeared.

2. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**
   *107 comments | 👍 568*
   A long‑standing enhancement request asking for a native Linux desktop app. The author cites a macOS power‑consumption bug that makes the current app unusable on their Mac, and wants to switch to Linux.

3. **[#21527 – codex is really too slow](https://github.com/openai/codex/issues/21527)**
   *29 comments | 👍 17*
   A Pro user reports that both the VS Code extension and the desktop app are unacceptably slow, with model responses taking too long to appear.

4. **[#27979 – Windows Codex App no longer opens after update](https://github.com/openai/codex/issues/27979)**
   *21 comments | 👍 6*
   After the June 12 update (build 26.609.4994.0), the desktop app on Windows fails to start entirely. Several users confirm the same regression. The issue is still open.

5. **[#25500 – Projects sidebar shows “No chats” for older conversations](https://github.com/openai/codex/issues/25500)**
   *18 comments | 👍 2*
   The Desktop app’s Projects sidebar fails to list non‑archived conversations from older projects, making navigation difficult.

6. **[#27817 – False positive cybersecurity flag on authorized tax filing](https://github.com/openai/codex/issues/27817)**
   *16 comments*
   A user’s normal personal finance / tax‑filing conversation was flagged as “possible cybersecurity risk” and interrupted. The user was directed to a dedicated program for approval.

7. **[#28015 – False positive safety check blocks local repo maintenance in CLI](https://github.com/openai/codex/issues/28015)**
   *16 comments*
   Codex CLI repeatedly flags routine DevOps tasks (e.g., checking branches, pruning stashes) as cybersecurity risks, inserting extra safety prompts during paid sessions.

8. **[#23840 – Computer Use MCP initialize times out from Desktop but works from Terminal](https://github.com/openai/codex/issues/23840)**
   *9 comments*
   The `computer‑use` MCP server fails to initialise within the Desktop app (timeout), while the same client handshake succeeds from a terminal. The issue persists across multiple Desktop versions.

9. **[#27367 – Codex desktop app immediately exits on Windows 10 after update](https://github.com/openai/codex/issues/27367)**
   *9 comments*
   A second Windows crash report: the desktop app closes instantly after launch on Windows 10 22H2, while the CLI continues to work. The issue is still open.

10. **[#28180 – Remotion causes syspolicyd/trustd 100% CPU, freezing system](https://github.com/openai/codex/issues/28180)**
    *5 comments | Closed*
    Using Codex to generate animations via Remotion triggers macOS security daemons (`syspolicyd`, `trustd`) to consume 100% CPU, freezing the system. The issue was closed, but no workaround is documented.

## Key PR Progress

1. **[#28008 – Add external agent import result accounting](https://github.com/openai/codex/pull/28008)**
   Gives clients a stable import ID to correlate immediate responses with eventual completion notifications, plus artifact‑type accounting.

2. **[#26315 – Materialize child MITM CA bundles](https://github.com/openai/codex/pull/26315)**
   Part of a stack to manage MITM certificate authorities; this PR materialises child‑selected CA material into immutable, managed bundles.

3. **[#25888 – Prepare managed child MITM CA env](https://github.com/openai/codex/pull/25888)**
   Continuation of the MITM CA stack; prepares environment variables for child processes to use the managed CA bundles.

4. **[#27963 – Reference writable roots from environment context](https://github.com/openai/codex/pull/27963)**
   Deduplicates writable‑root paths by removing them from the developer permissions message and referencing the structured `<filesystem>` context instead.

5. **[#28143 – Expose rate‑limit reset credits](https://github.com/openai/codex/pull/28143)**
   Adds a backend API for reading and redeeming personal rate‑limit reset credits, laying groundwork for a `/usage` TUI flow.

6. **[#27640 – Support multi‑tool install requests](https://github.com/openai/codex/pull/27640)**
   Expands `request_plugin_install` to accept a list of install targets or categories, enabling the model to request multiple tool installations in one turn.

7. **[#28235 – Add request user input auto‑resolution timer](https://github.com/openai/codex/pull/28235)**
   Implements automatic resolution of `request_user_input` prompts after a configurable timeout, with a visible countdown and auto‑submission of an empty answer.

8. **[#28154 – Add rate‑limit reset redemption to /usage](https://github.com/openai/codex/pull/28154)**
   Builds on #28143 to let CLI users view and redeem rate‑limit reset credits through the `/usage` command.

9. **[#28232 – Add workspace headline statusline item](https://github.com/openai/codex/pull/28232)**
   Introduces a TUI status‑line item that displays workspace messages for Enterprise ChatGPT/Codex users, refreshing every 10 seconds.

10. **[#27794 – Remove terminal resize reflow flag gates](https://github.com/openai/codex/pull/27794)**
    Cleans up stale configuration flags after the `terminal_resize_reflow` feature has been fully rolled out. No runtime code change.

## Feature Request Clusters

- **Linux Desktop App** (#11023, 👍 568) remains the most upvoted feature request. Users cite macOS power/performance issues as a primary motivation.
- **Renaming Task/Thread Titles** (#12564, closed but still requested) – users want the ability to rename conversations in the extension’s history panel for better navigation.
- **Spellcheck Toggle** (#25431) – on Windows, the built‑in spellcheck cannot be disabled; users request a settings switch.
- **Persistent Terminal Title Marker** (#21958) – users running multiple AI CLI tools simultaneously want Codex CLI to set a distinctive, persistent identifier in the terminal window title.
- **WSL Agent Binary** (#28103) – the Windows MSIX build is missing the Linux `codex` binary, breaking the “Run agent in WSL” feature.

## Developer Pain Points

- **Performance & Latency** (*#21527, #20840, #14593*): multiple reports of slow response times and high token consumption, with users feeling their premium subscriptions are not delivering expected speed.
- **Windows Desktop Crashes** (*#27979, #27367, #25807*): the June 12 update broke the desktop app for several Windows users – the app either fails to open, exits immediately, or is missing critical binaries.
- **False‑positive Safety Checks** (*#27817, #28015, #28230*): legitimate development and personal‑finance tasks are repeatedly flagged as cybersecurity risks, interrupting paid sessions and requiring manual overrides.
- **MCP Tool Timeouts & Resource Leaks** (*#23840, #26956*): the Desktop app fails to initialise MCP servers that work from the CLI, and Codex sometimes never sends stop signals to MCP tools after an interrupt.
- **Disk Space Bloat** (*#27536*): on macOS, the `code_sign_clone` directory in the system temp folder can grow to 62 GB+ across auto‑updates, with no automatic cleanup.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-15

## Today's Update Brief

No new releases were published today. Activity focused on continued triage of agent reliability bugs, with several long-standing P1 issues receiving updated comments. The repository saw a notable flurry of automated dependency update PRs, including a bulk update bumping 53 npm packages and several major version bumps (puppeteer-core to v25, @google/genai to v2.8, undici to v8.4).

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — Epic tracking follow-up work on behavioral evals. 76 tests exist across 6 Gemini models; goal is to make these evaluation components reliable and reusable. P1, 7 comments.

2. **[Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — Epic investigating whether AST-aware tooling improves codebase mapping precision and reduces token noise. P2, 7 comments, 1 👍.

3. **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — Agent hangs indefinitely when deferring to sub-agents. Workaround: instruct model not to use sub-agents. P1, 7 comments, 8 👍 — highest community reaction in the set.

4. **[Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — `codebase_investigator` subagent reports `status: "success"` even after hitting turn limits without performing analysis. Masks real failures. P1, 6 comments.

5. **[Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — Anecdotal report that custom skills and sub-agents are rarely invoked autonomously despite relevant descriptions. P2, 6 comments.

6. **[Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory sends transcripts to model context before redaction; proposes deterministic redaction. P2, 5 comments.

7. **[Stop Auto Memory from retrying low-signal sessions](https://github.com/google-gemini/gemini-cli/issues/26522)** — Sessions not read by extraction agent remain unprocessed and resurface repeatedly. P2, 5 comments.

8. **[Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** — Simple CLI commands hang post-execution while showing active state. P1, 4 comments, 3 👍.

9. **[Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser agent crashes on Wayland systems. P1, 4 comments.

10. **[Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** — Model occasionally uses `git reset` or `--force` when safer alternatives exist. Requests awareness of dangerous operations on databases and infrastructure. P2, 3 comments, 1 👍.

## Key PR Progress

1. **[fix: keep array tool results out of structuredContent](https://github.com/google-gemini/gemini-cli/pull/27730)** — Prevents JSON arrays from being copied into `structuredContent`, fixes calendar-style payload handling. P1, area/extensions. Fixes #27725.

2. **[fix(core): keep auto visible without preview access](https://github.com/google-gemini/gemini-cli/pull/27718)** — The top-level `auto` model alias now remains visible when dynamic model config is enabled, even for users without preview access. P2, area/core.

3. **[Fix telemetry metric attribute truncation](https://github.com/google-gemini/gemini-cli/pull/27729)** — Truncates metric attributes to 1024 chars to prevent GCP export errors that flooded terminal with stack traces. P2, area/enterprise. Fixes #27728.

4. **[Implement non-invasive UX Journey testing framework](https://github.com/google-gemini/gemini-cli/pull/23030)** — Introduces "UX Journey" framework for verifying React component presence in terminal without manual instrumentation. Size/l, now closed/stale.

5. **[Add new interactive policies dialog](https://github.com/google-gemini/gemini-cli/pull/22456)** — Replaces text-based `/policies` output with a tabbed, searchable dialog. Size/xl, now closed/stale.

6. **[Bump npm-dependencies group with 53 updates](https://github.com/google-gemini/gemini-cli/pull/27925)** — Bulk dependency update across 53 packages including ACP SDK, Octokit, and Vitest config. Size/xl.

7. **[Bump puppeteer-core from 24.39.0 to 25.1.0](https://github.com/google-gemini/gemini-cli/pull/27931)** — Major version bump for browser subagent dependency. Size/l.

8. **[Bump @google/genai from 1.30.0 to 2.8.0](https://github.com/google-gemini/gemini-cli/pull/27929)** — Major version bump for the core GenAI SDK integration. Size/m.

9. **[Bump undici from 7.24.5 to 8.4.0](https://github.com/google-gemini/gemini-cli/pull/27928)** — Major version bump for HTTP client library. Size/m.

10. **[Bump google-auth-library from 9.15.1 to 10.7.0](https://github.com/google-gemini/gemini-cli/pull/27926)** — Major version bump for authentication library. Size/m.

## Feature Request Clusters

**AST-aware tooling**: Three linked issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) propose using AST-aware CLIs for codebase mapping, file reads, and search. The goal is reduced token overhead and improved method-level precision.

**Agent self-awareness**: [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests that the CLI understand its own hotkeys, flags, and capabilities, enabling it to act as its own guide. Includes requests for accurate self-documentation.

**Destructive operation guardrails**: [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) and related requests ask for the agent to recognize and discourage destructive git commands and database modifications, preferring safer alternatives.

**Improved evaluation infrastructure**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23166](https://github.com/google-gemini/gemini-cli/issues/23166), and [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) collectively request more reliable, stable, and always-passing internal evaluation tests that track quality trends over time.

## Developer Pain Points

- **Agent hangs and stuck execution**: Multiple P1 bugs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) report that the CLI becomes unresponsive—either hanging on sub-agent delegation or stuck on completed shell commands. High community upvote count (8, 3) indicates these are felt broadly.

- **Subagent permission and recovery issues**: Bugs [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) and [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) highlight frustration with sub-agents running without permission (since v0.33.0) and silent failure reporting (GOAL success despite MAX_TURNS).

- **Tool execution reliability**: Issues [#27598](https://github.com/google-gemini/gemini-cli/issues/27598) and [#27597](https://github.com/google-gemini/gemini-cli/issues/27597) (both closed as need-information) describe systemic degradation in tool-calling accuracy, requiring multiple corrective prompts for simple tasks.

- **Auto Memory noise and retries**: The cluster of issues from [@SandyTao520](https://github.com/SandyTao520) ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) points to a persistent pain with the memory system: secrets exposed before redaction, infinite retries on low-signal sessions, and silent skipping of invalid patches.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-06-15

**Today's Update Brief**
Activity on the copilot-cli repo was light today, with **8 issues** updated in the last 24 hours and no new releases. The community reported fresh bugs around session poisoning from malformed attachments and a UI inconsistency in prompt input layout, while two feature requests surfaced for extending BYOK model discovery and Azure DevOps integration. One spam issue was closed.

**Releases**
*None* – no new versions were published in the last 24 hours.

## Hot Issues

All 8 issues updated today are listed below, ordered roughly by age and severity.

1. **#956 – Agent skills scripts executed in wrong folder**
   *Author: [@msundman78](https://github.com/msundman78) | Created: 2026-01-13 | Updated: 2026-06-14*
   Bug: when referencing `scripts/myscript.sh` in a skill, the CLI does not resolve the path relative to the skill’s directory as specified by the Agent Skills specification. Affects developers building custom agent skills.
   👎 2 likes, 6 comments ([link](https://github.com/github/copilot-cli/issues/956))

2. **#3558 – Duplicate Item Errors**
   *Author: [@psulightning](https://github.com/psulightning) | Created: 2026-05-28 | Updated: 2026-06-14*
   Persistent `CAPIError: 400 – Duplicate item found` during processing, likely related to context-memory or model calls. Symptoms break multi-turn sessions.
   👍 7 likes, 4 comments ([link](https://github.com/github/copilot-cli/issues/3558))

3. **#3797 – Different prompt input box layout in two cmd tabs**
   *Author: [@kunalk16](https://github.com/kunalk16) | Created: 2026-06-15 | Updated: 2026-06-15*
   Visual inconsistency: two command tabs in the same window show different prompt box layouts (screenshots attached). Likely a rendering bug in the TUI.
   👍 0 likes, 1 comment ([link](https://github.com/github/copilot-cli/issues/3797))

4. **#3796 – [CLOSED] hhhhhhh**
   *Author: [@TAREQ097H](https://github.com/TAREQ097H) | Created: 2026-06-14 | Updated: 2026-06-14*
   Spam issue with no content; closed as invalid.
   ([link](https://github.com/github/copilot-cli/issues/3796))

5. **#3795 – Feature request: opt-in model discovery for BYOK / custom providers**
   *Author: [@aosama](https://github.com/aosama) | Created: 2026-06-14 | Updated: 2026-06-14*
   Users of BYOK mode must manually set `COPILOT_MODEL` or `--model`. Requesting a way for the CLI to query the custom endpoint for available models, reducing manual configuration.
   👍 0 likes, 0 comments ([link](https://github.com/github/copilot-cli/issues/3795))

6. **#3794 – Add Azure DevOps work items to Up next**
   *Author: [@OmerMicro](https://github.com/OmerMicro) | Created: 2026-06-14 | Updated: 2026-06-14*
   The “Up next” panel (cross-session inbox) shows only GitHub issues/PRs. Users with Azure DevOps repos see an empty inbox; request to surface ADO work items alongside GitHub items.
   👍 0 likes, 0 comments ([link](https://github.com/github/copilot-cli/issues/3794))

7. **#3791 – Malformed attachment poisons session; all subsequent turns fail with 400**
   *Author: [@jay-tau](https://github.com/jay-tau) | Created: 2026-06-14 | Updated: 2026-06-14*
   A password-protected `.xlsx` (type: malformed/unsupported) triggers a CAPI 400 error that persists for all later turns in the same session, even after removing the attachment. Session recovery requires full restart.
   👍 0 likes, 0 comments ([link](https://github.com/github/copilot-cli/issues/3791))

8. **#3793 – Gibberish bug report (hex trace)**
   *Author: [@ja552588](https://github.com/ja552588) | Created: 2026-06-14 | Updated: 2026-06-14*
   Issue contains only a hex string with no description. Likely low-quality or automated submission.
   👍 0 likes, 0 comments ([link](https://github.com/github/copilot-cli/issues/3793))

## Key PR Progress

*None* – no pull requests were updated in the last 24 hours.

## Feature Request Clusters

Two distinct feature requests appeared today, both still in triage with no maintainer response:

- **Model discovery for custom providers** (#3795): Users want the CLI to automatically detect models when using a BYOK endpoint, removing the need to hardcode model IDs.
- **Azure DevOps integration with “Up next”** (#3794): Extending the cross-session inbox to support work items from Azure DevOps projects, mirroring GitHub issue/PR tracking.

No other strong clusters emerged from today’s data.

## Developer Pain Points

- **Session instability from malformed input** (#3791, #3558): Attachments and duplicate item IDs can permanently corrupt a session, forcing a restart. The high reaction count on #3558 (7 👍) indicates this is a common frustration, especially during longer development sessions.
- **Agent skill path resolution** (#956): Developers building custom agent skills encounter an unexpected working directory, contradicting the official Agent Skills spec. This fix has been pending since January 2026.
- **UI inconsistencies** (#3797): Even minor layout differences between tabs can disrupt muscle memory for frequent CLI users.

*All data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-15

## 1. Today's Update Brief
Moderate activity with 3 issues and 4 pull requests updated in the last 24 hours. No new releases were published. Community attention is split between a closed feature request for automatic project‑context loading, a contentious open issue about severe rate‑limiting on the paid plan, and a bug report about system prompt conflicts. Most pull requests are older Windows‑oriented fixes that were recently touched.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

| Issue | Summary | Workflow Impact | Community Reaction |
|-------|---------|----------------|-------------------|
| [#850](https://github.com/MoonshotAI/kimi-cli/issues/850) **[Closed]** | **Feature Request: Auto‑load project context** – User wants Kimi CLI to automatically detect and read `AGENTS.md`, `.cursorrules`, or similar project‑level rules at session start, similar to Claude Code’s `CLAUDE.md`. | Developers must manually reinstruct the assistant each session; no project‑wide conventions are picked up. | +1 upvote, 3 comments; closed without visible resolution. |
| [#2123](https://github.com/MoonshotAI/kimi-cli/issues/2123) **[Open]** | **Severe rate‑limiting / quota depletion** – User reports that the advertised “300–1200 requests per 5 hours” is not met; actual usage caps at ~60+ calls. No clear quota breakdown is provided, only a vague percentage. User has requested a refund without success. | Paid subscription is almost unusable for sustained development work; the lack of transparent quotas breaks trust. | 0 upvotes, 2 comments; user expresses frustration with both functionality and support. |
| [#2451](https://github.com/MoonshotAI/kimi-cli/issues/2451) **[Open]** | **System prompt conflicts with user’s workflow** – User on `k2.7-coding` model finds that the hardcoded system prompt overrides their own strict guidelines mentioned in a separate configuration file. | Custom instructions are ignored, breaking the user’s intended workflow and forcing workarounds. | No comments yet; just opened (2026‑06‑14). |

## 4. Key PR Progress

| PR | Title | What It Does | Status |
|----|-------|--------------|--------|
| [#2452](https://github.com/MoonshotAI/kimi-cli/pull/2452) **[Open]** | `fix(tools): fail StrReplaceFile when a multi‑edit hunk is unmatched` | Changes the replace logic so that an error is raised as soon as any single edit hunk fails to match, rather than silently applying only the partial set. | Opened 2026‑06‑14; 0 comments. |
| [#2018](https://github.com/MoonshotAI/kimi-cli/pull/2018) **[Closed]** | `feat: add Alt+V paste support for Windows Terminal` | Provides a fallback key binding (`Alt+V`) for pasting in Windows Terminal, which intercepts `Ctrl+V` for its own paste. | Merged; addresses a long‑standing Windows UX gap. |
| [#2020](https://github.com/MoonshotAI/kimi-cli/pull/2020) **[Closed]** | `fix: use per‑process log filenames to prevent rotation lock on Windows` | Replaces the single shared `kimi.log` with `kimi.{pid}.log` to avoid `PermissionError` when multiple processes run concurrently. | Merged; improves Windows stability. |
| [#839](https://github.com/MoonshotAI/kimi-cli/pull/839) **[Closed]** | `feat(shell): add configurable shell support for Windows` | Allows users on Windows to choose a custom shell (e.g., PowerShell, cmd, git bash) instead of the default. | Merged; expands Windows compatibility. |

## 5. Feature Request Clusters
- **Automatic project‑context discovery**
  Issue [#850](https://github.com/MoonshotAI/kimi-cli/issues/850) (closed) and similar unlisted requests indicate a desire for Kimi CLI to recognise and load project‑specific rules (`AGENTS.md`, `.cursorrules`, etc.) without manual intervention. This mirrors a pattern already established by competitor tools.

- **Custom system prompt / instructions isolation**
  Issue [#2451](https://github.com/MoonshotAI/kimi-cli/issues/2451) (open) points to a broader need: users want their own guidelines to take precedence over the built‑in system prompt, or at least to be able to merge the two in a predictable way.

## 6. Developer Pain Points
- **Rate‑limiting transparency & enforcement** – Issue [#2123](https://github.com/MoonshotAI/kimi-cli/issues/2123) highlights a major trust issue: paid subscribers experience far lower throughput than advertised, with opaque quota indicators and difficulty obtaining refunds.
- **Inadequate Windows support** – Although several Windows‑specific PRs have been merged (paste fallback, per‑process logs, configurable shell), the existence of these fixes suggests that the Windows experience has historically lagged.
- **Loss of user‑defined workflow control** – The system prompt conflict (issue [#2451](https://github.com/MoonshotAI/kimi-cli/issues/2451)) and the absence of auto‑loaded project context (issue [#850](https://github.com/MoonshotAI/kimi-cli/issues/850)) together show that current customization options are insufficient for many professional setups.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 15, 2026.

---

## OpenCode Community Digest — 2026-06-15

### Today's Update Brief
A new patch release (v1.17.7) went out, fixing several plugin client and ACP shell tool regressions. Community activity remained high, with 50 issues and 50 pull requests updated in the last 24 hours, including significant discussion around the permanent DeepSeek V4 Pro price reduction and persistent copy/paste problems in the CLI.

### Releases
- **[v1.17.7](https://github.com/anomalyco/opencode/releases/tag/v1.17.7)**: Bugfix release focused on the plugin system and shell tools. **Bugfixes**: Plugin client requests now reuse the active server instead of assuming the default local port. ACP shell tool calls show the command and working directory from the start. Plugin-provided shell environment variables now apply to PTY sessions. **Improvements**: MCP client handling.

### Hot Issues
1. **[#28846 — Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)** [CLOSED]
   - **Impact**: If adopted, this directly reduces user costs for OpenCode Go subscribers. Community reaction was strongly positive (77 comments, 79 👍), indicating high demand for passing provider savings to end users. The issue is already closed, suggesting maintainers acted on it quickly.

2. **[#13984 — Can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984)** [OPEN]
   - **Impact**: Blocks a fundamental terminal workflow for many users across all platforms. With 48 comments and 20 👍, this is a long-standing (since February) high-frustration issue that has not yet been resolved in the TUI.

3. **[#15585 — When use a free model "free usage exceed" appeared](https://github.com/anomalyco/opencode/issues/15585)** [CLOSED]
   - **Impact**: Affected users of free-tier models (like "Big Pickle") who ran into hard usage caps during long sessions. The 48 comments suggest the error messaging was confusing. Closed status implies a fix or clarification was deployed.

4. **[#5305 — Plugin Hook for Instant TUI Commands](https://github.com/anomalyco/opencode/issues/5305)** [OPEN]
   - **Impact**: Would allow plugins to register commands that execute instantly without waiting for an agent response (e.g., `:format`, `:lint`). A foundational plugin system enhancement with steady community interest (18 comments, 13 👍).

5. **[#28957 — "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)** [OPEN]
   - **Impact**: Affects long-running sessions using "writing-plans" skill, likely causing disruptive timeouts. User reports it appears to be a session-level infrastructure issue, not a model error. 13 comments, low 👍 indicates it may be niche but severe for those affected.

6. **[#28567 — Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)** [OPEN]
   - **Impact**: Community is requesting alignment with the latest MCP specification (20\*\*). This is a significant feature request (11 comments, 21 👍) as MCP is core to the tool's extensibility.

7. **[#32172 — Add GLM-5.2 model support for Z.AI provider](https://github.com/anomalyco/opencode/issues/32172)** [OPEN]
   - **Impact**: Would enable OpenCode users with Z.AI Coding Plans to access Zhipu's latest reasoning model. A recent request (June 13) with 7 comments, indicating fast community follow-up.

8. **[#28202 — Plugin async prompts can overlap with Web prompt_async and create same-parent assistant siblings](https://github.com/anomalyco/opencode/issues/28202)** [CLOSED]
   - **Impact**: A tricky concurrency bug in the Web UI that could result in corrupted session histories (duplicate assistant messages). 6 comments, 4 👍. Closed, so a fix was likely merged.

9. **[#26412 — Custom OpenAI-compatible provider: "Expected 'function.name' to be a string" on streaming tool call chunks](https://github.com/anomalyco/opencode/issues/26412)** [OPEN]
   - **Impact**: Blocks all tool use (Read, Edit, Bash) for users running custom vLLM backends. A hard blocker for self-hosters. 6 comments.

10. **[#11829 — Recursive Language Model (RLM) Context Management](https://github.com/anomalyco/opencode/issues/11829)** [OPEN]
    - **Impact**: Proposes a paradigm shift—treating context as an external environment queried programmatically rather than managed inside a single window. Significant architectural proposal with 6 comments and 11 👍.

### Key PR Progress
1. **[#32370 — Linux clipboard selection](https://github.com/anomalyco/opencode/pull/32370)** [OPEN]
   - Fresh PR adding support for Linux PRIMARY buffer selection. Targets the long-standing clipboard issue (#13984 ecosystem).

2. **[#29967 — feat(opencode): add linux_clipboard_selection config](https://github.com/anomalyco/opencode/pull/29967)** [CLOSED]
   - A previous attempt at the same Linux clipboard feature. Closed after merge, likely superseded by #32370 or already released.

3. **[#31848 — fix(desktop): use server-side picker for all HTTP connections](https://github.com/anomalyco/opencode/pull/31848)** [OPEN]
   - Fixes a desktop app regression where `directoryPickerKind` incorrectly used a local file picker over HTTP connections. Closes #25264.

4. **[#31993 — fix(app): restore desktop open menu](https://github.com/anomalyco/opencode/pull/31993)** [OPEN]
   - Restores the "Open in" control in the desktop session header after two overlapping regressions. Closes #29875 and #29951.

5. **[#32245 — fix(mcp): stop idle OAuth callback server](https://github.com/anomalyco/opencode/pull/32245)** [CLOSED]
   - Fixes a resource leak where the MCP OAuth callback listener and its port were never released after authentication. Closes related issues around port contention.

6. **[#32241 — fix(tui): render move errors inline](https://github.com/anomalyco/opencode/pull/32241)** [OPEN]
   - Improves TUI UX by rendering error states (loading, success, error) inside the `DialogSelect` shell, replacing abrupt exits. Keeps the user in-context with recovery guidance.

7. **[#31867 — feat: improve deepseek prompt cache reuse](https://github.com/anomalyco/opencode/pull/31867)** [OPEN]
   - Enhances DeepSeek prompt caching by preventing the current date injection from breaking cache keys. A performance and cost optimization for DeepSeek users.

8. **[#32367 — fix: create worktrees from empty git repos](https://github.com/anomalyco/opencode/pull/32367)** [OPEN]
   - Fixes a bug where `git worktree add` fails on repos with no commits. Closes #20910.

9. **[#32302 — fix(opencode): forward parent attachments to subagents](https://github.com/anomalyco/opencode/pull/32302)** [OPEN]
   - Fixes attachment handoff for `@mention` subagents in the `task` path, ensuring parent-provided files are available to subagents.

10. **[#32364 — fix: reset terminal modes on tui shutdown](https://github.com/anomalyco/opencode/pull/32364)** [OPEN]
    - Fixes terminal state corruption on exit by ensuring `destroyRenderer()` resets terminal modes before OpenTUI teardown. Closes #20458.

### Feature Request Clusters
- **MCP Ecosystem Expansion**: Multiple requests center on improving MCP support, including full client capabilities for the latest spec (#28567), fixing environment variable leakage to MCP subprocesses (#31778), and handling non-standard JSON Schema formats from Rust-derived MCP servers (#31002).
- **Model & Provider Integration**: A clear pattern of users requesting support for newly released models: DeepSeek V4 Pro cost pass-through (#28846), GLM-5.2 for Z.AI (#32172), and Composer 2.5 for xAI/Grok (#31475). This suggests a fast-moving model landscape and community expectation of rapid support.
- **TUI & UX Enhancements**: Recurring requests for better session management—user-defined session flags/tags (#30763), saving/bookmarking prompts (#24017), an "Allow always" confirmation toggle (#19528), and making compaction revertible (#32368).
- **Plugin System Depth**: Requests to extend plugin capabilities, such as a hook for instant TUI commands (#5305) and fixing asynchronous prompt overlap in the Web UI (#28202).

### Developer Pain Points
- **Clipboard/Selection Issues**: The inability to copy and paste reliably in the TUI (especially on Linux) is a top frustration (#13984, #32370).
- **Session & Instance Management Bugs**: Recurring reports of session state corruption, such as dual `InstanceStore.Service` materialization (#29772), subagent session ID/directory inheritance failures (#30355), and silent no-op aborts when running as a server (#29894).
- **Plugin & SDK Inconsistencies**: Multiple reports of plugins behaving differently in server vs. TUI modes, including silent drops of permission replies (#28037, fixed by #28152) and overlapping async prompts in the Web UI (#28202).
- **Environment Leakage**: The discovery that MCP server subprocesses receive the full `process.env` (#31778) is a critical security concern for developers running plugins with sensitive credentials.
- **Desktop and TUI Crashes**: Users are reporting frequent "EditBuffer is destroyed" errors after v1.17.7 (#32348) and unexpected window termination on desktop (#32334).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-15, based on the provided GitHub data.

---

## Qwen Code Community Digest — 2026-06-15

### 1. Today's Update Brief

Activity remains high, with 27 issues and 50 pull requests updated in the last 24 hours. Key themes include ongoing security audits (Trojan detection, side-effect execution), daemon stability fixes, and a new release workflow failure. A contentious feature request regarding the OAuth free tier policy reduction remains the most commented-on topic.

### 2. Releases

No new releases in the last 24 hours.

### 3. Hot Issues (Top 10 by relevance and community impact)

1.  **[#3203] Qwen OAuth Free Tier Policy Adjustment** (*feature-request*)
    Proposes reducing the daily free quota from 1,000 to 100 requests and eventually closing the free tier. With 135 comments, this is the most active topic, indicating significant community pushback and discussion. [Link](https://github.com/QwenLM/qwen-code/issues/3203)

2.  **[#3267] Requests limits overview** (*feature-request*)
    A user on the free plan reports hitting the (supposed) 1,000 request limit prematurely without completing a single task. The issue highlights confusion around rate limiting and the need for clearer usage tracking. [Link](https://github.com/QwenLM/qwen-code/issues/3267)

3.  **[#5055] Trojan:JS/ShaiWorm.DBA!MTB** (*bug, security*)
    A user reports that Windows Defender flags the VSIX package for the VSCode extension as a trojan. This is a serious security concern that requires an immediate audit of the build pipeline to rule out false positives or a supply chain issue. [Link](https://github.com/QwenLM/qwen-code/issues/5055)

4.  **[#4218] MCP Server "filesystem" shows connected, but tools are not available** (*bug*)
    A configuration issue on Windows where the UI shows a successful MCP connection, but the model does not receive the tool definitions. This affects a core workflow for integrating external tools like filesystem access. [Link](https://github.com/QwenLM/qwen-code/issues/4218)

5.  **[#5080] Alibaba Cloud Standard API Key (sk-xxx) mixed with Token Plan endpoint causes 401** (*bug*)
    A configuration conflict where using a standard API key with a "Token Plan" provider endpoint results in authentication errors. This creates a poor user experience for users of the Alibaba Cloud (Bailian) backend. [Link](https://github.com/QwenLM/qwen-code/issues/5080)

6.  **[#5102] Qwen Code executes a provider-requested side effect despite the permission-contract probe** (*bug, security*)
    A security finding where a shell command requested by the provider was executed under the non-interactive CLI configuration, bypassing the permission-contract probe. This raises concerns about the robustness of the sandbox mechanism. [Link](https://github.com/QwenLM/qwen-code/issues/5102)

7.  **[#5101] Qwen Code carries repeated large tool results through provider history** (*bug, performance*)
    A core loop issue where repeated tool calls with large outputs are sent back to the provider, leading to ballooning request context. This is a critical performance and token consumption bug. [Link](https://github.com/QwenLM/qwen-code/issues/5101)

8.  **[#5119] When the agent wants to run a sudo command there is no way to allow it** (*feature-request*)
    A user request for a permission dialogue that can handle `sudo` commands, as the current behavior forces users to manually copy-paste commands. This limits the agent's ability to automate system-level tasks. [Link](https://github.com/QwenLM/qwen-code/issues/5119)

9.  **[#5117] Release Failed for v0.18.0-nightly.20260615.91476134a** (*bug*)
    The nightly release workflow has failed. This is a blocking issue that affects the distribution of the latest code and fixes. [Link](https://github.com/QwenLM/qwen-code/issues/5117)

10. **[#5099] Qwen Code sends duplicate tool-result history for a reused tool-call id** (*bug*)
    A bug report detailing that when a provider reuses a tool-call ID across turns, Qwen Code sends duplicate results back. This can corrupt the conversation state for the provider. [Link](https://github.com/QwenLM/qwen-code/issues/5099)

### 4. Key PR Progress (Top 10 by importance)

1.  **[#5121] fix release integration env controls**
    Aims to fix the recent nightly release failures by ensuring debug-log assertions and environment controls are properly passed into the Docker sandbox. [Link](https://github.com/QwenLM/qwen-code/pull/5121)

2.  **[#4866] refactor(ci): split PR triage into 4-job pipeline**
    A significant CI refactor to replace a monolithic triage skill with a staged pipeline of resolve, product-decision, review, and release jobs. Aims to improve triage reliability and parallelism. [Link](https://github.com/QwenLM/qwen-code/pull/4866)

3.  **[#5120] fix(core): skip auto-title generation when history has no user message**
    Adds a guard to prevent auto-title generation for daemon sessions with empty histories, which could lead to broken UI states. [Link](https://github.com/QwenLM/qwen-code/pull/5120)

4.  **[#5094] feat(core): Workflow P4a — extractAndStripMeta + meta on RunOutcome**
    Implements the first half of the Dynamic Workflows port, focusing on extracting and stripping metadata from run outcomes. This is a large architectural change aiming to make agent behavior more configurable. [Link](https://github.com/QwenLM/qwen-code/pull/5094)

5.  **[#5118] feat(web-shell): per-task token & time detail on completed todos**
    Adds visibility into the cost and duration of completed tasks in the web-shell, providing users with granular usage metrics. [Link](https://github.com/QwenLM/qwen-code/pull/5118)

6.  **[#5001] feat(cli): add optional [HH:MM:SS] timestamp before each assistant turn**
    Introduces a new setting to display timestamps in the CLI, improving the audit trail and user context. [Link](https://github.com/QwenLM/qwen-code/pull/5001)

7.  **[#4850] feat(extensions): interactive multi-tab /extensions manager**
    A major UI overhaul for the extensions manager, adding tabs for Installed, Discover, and Sources to streamline the full lifecycle of extension management. [Link](https://github.com/QwenLM/qwen-code/pull/4850)

8.  **[#4841] fix(cli): close @path completion dropdown on Enter accept**
    A UX fix for the CLI where the autocomplete dropdown for file paths would remain open after selecting a suggestion with Enter. [Link](https://github.com/QwenLM/qwen-code/pull/4841)

9.  **[#4989] ci: add scheduled autofix workflow for stale bug issues** (*CLOSED*)
    An automated CI workflow that attempts to autonomously fix stale, unattended bug reports using Qwen Code itself. This is an interesting experiment in AI-driven maintenance. [Link](https://github.com/QwenLM/qwen-code/pull/4989)

10. **[#3012] chore: upgrade @google/genai SDK to v1.48.0**
    Updates the Google AI SDK to unlock support for the latest models. Indicates ongoing effort to support new provider features. [Link](https://github.com/QwenLM/qwen-code/pull/3012)

### 5. Feature Request Clusters

*   **Security & Permissions (Cluster A):** A consistent theme of requests to harden the execution sandbox. This includes allowing `sudo` commands (**#5119**), fixing permission bypasses (**#5102**), and addressing antivirus false positives (**#5055**).
*   **Token & Cost Transparency (Cluster B):** Users are actively requesting better visibility into consumption. This includes requests for clearer rate limits (**#3267**), per-task token/time logging (**#5118**), and exposure of token usage in `/stats` (**#4564**). The discussion around the free tier policy (**#3203**) amplifies this need.
*   **MCP & Tool Integration (Cluster C):** Multiple reports indicate friction in the MCP setup workflow, particularly on Windows, where tools connect but are not usable by the model (**#4218**). There is also demand for deeper integration within subagent teams (**#5100**).
*   **UI/UX Refinements (Cluster D):** Minor but persistent requests for UI improvements, such as the statusline wrapping (**#5064**), showing the active model in the footer (**#5104**), and adding timestamps to CLI output (**#5001**).

### 6. Developer Pain Points

*   **Pricing & Access Confusion:** The proposed free-tier reduction (**#3203**) and reports of unclear rate limiting (**#3267**) are creating significant user frustration and uncertainty about the service's future cost model.
*   **Security & Trust:** The trojan detection report (**#5055**), even if a false positive, is a major trust issue. Coupled with the sandbox bypass report (**#5102**), this signals a serious need for security hardening to maintain developer confidence.
*   **Configuration Friction:** Users are experiencing friction with basic configuration, particularly around API key/endpoint mismatches for Alibaba Cloud (**#5080**) and MCP server setup on Windows (**#4218**).
*   **Core Loop Performance & Robustness:** Critical bugs in the core loop (duplicate tool results **#5099**, repeated large tool results **#5101**) are causing token waste, performance degradation, and potential provider-side errors.

</details>