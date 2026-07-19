# AI CLI Tools Community Digest 2026-07-19

> Generated: 2026-07-19 00:23 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-07-19

## 1. Daily Cross-Tool Overview
Today’s activity centred on stability fixes, session‑management improvements, and UI polish across the four tracked CLI tools. Claude Code shipped a hotfix addressing Windows permission bypass and a problem with `dir/**` allow rules. OpenAI Codex released a stable hotfix for GPT‑5.6 context windows and refreshed model instructions. Kimi Code had no release but showed high contributor throughput with 19 PRs, while OpenCode’s memory‑stabilisation megathread and V2 regression reports dominated its 50 issues. All four communities surfaced challenges around agent session reliability, resource leaks, and TUI/desktop usability.

## 2. Activity Comparison

| Tool          | Issues Updated (today) | PRs Updated (today) | New Release                         |
|---------------|------------------------|---------------------|-------------------------------------|
| Claude Code   | 50                     | 4                   | v2.1.214 (stable hotfix)            |
| OpenAI Codex  | Not reported†          | Not reported‡       | rust‑v0.144.6 (stable hotfix)       |
| Kimi Code     | 22                     | 19                  | —                                   |
| OpenCode      | 50                     | 20                  | —                                   |

† The Codex digest did not provide a total issue count; it listed 10 hot issues.
‡ The Codex digest listed at least 2 PRs, but a fuller count was cut off in the provided data.

## 3. Shared Feature Directions
Several requirements appeared across two or more tool communities today, though no single theme was uniformly present in all four.

- **Session history, resume, and navigation**
  Claude Code: `/rename` not persisting in `/resume` list, and headless `-p` hangs on stale connections.
  Kimi Code: crash‑induced empty assistant messages blocking resume, and demands for non‑Git `/rewind` and transaction‑fork capabilities.
  OpenCode: requests for viewing archived sessions in a sidebar modal, and a fix for incomplete session transcript exports.
  Codex: a PR adding paginated thread history support for consistent full‑history resume.

- **Agent and subagent reliability**
  Claude Code: goal function infinite loops, hooks not firing for subagent tool calls, and permission bypass when a subagent pushes to protected branches.
  Kimi Code: crash‑resume failures, hook gaps during compaction, and abort signals not honoured in web tools.
  OpenCode: MAXIMUM STEPS REACHED causing 400 errors with Claude models, model selection reverting during agent tasks, and Kimi K3 failing only when used as a subagent.
  Codex: subagent disk usage spikes and desktop freezes possibly related to MCP processes.

- **TUI / desktop UX stability and rendering**
  Claude Code: TUI idle‑CPU burn, dropped ANSI codes, remote‑control connection failures.
  Kimi Code: iTerm2 freeze on approval popup, dark‑on‑dark bold text, and `kimi web` static asset caching.
  OpenCode: light‑mode code block contrast fix, brightness/visibility complaint on Desktop, and desktop deep‑link handling.
  Codex: VS Code panel stuck loading, Desktop unresponsiveness on Windows.

- **Permission and approval UX** (weaker signal, only between Claude Code and Kimi Code)
  Claude Code: voice interface cannot approve tool requests, PreToolUse hooks not invoked for subagents, and CLAUDE.md rules bypassed.
  Kimi Code: too‑frequent permission prompts even in YOLO/Auto mode, and missing SessionStart hook output.

## 4. Differentiation Analysis
Each tool displayed distinct focal points today, reflecting their different user bases and technical strategies.

- **Claude Code** concentrated on **permission‑system integrity and Windows reliability**, with a hotfix for a Windows BSOD trigger and several reports of bypasses and MCP leaks. The limited PR volume (4, all community) suggests a maintainer‑driven release cycle with fewer open‑source contributions.
- **OpenAI Codex** was dominated by **model‑access and rate‑limit policy** debates: users demanding permanent removal of the 5‑hour cap, correcting context‑window misrepresentations, and questioning the weekly allowance. The single detailed PR (paginated thread history) points to internal work on session infrastructure.
- **Kimi Code** showed a sharp **community‑driven polishing effort**, with 19 PRs targeting TUI rendering, clipboard deadlocks, web caching, hook gaps, and transcript architecture. Feature requests kept circling back to `kimi web` mode and session rewind without Git, revealing a desire for a browser‑friendly coding experience.
- **OpenCode** balanced **deep infrastructure (memory stabilisation)** with **desktop UX expansion**. The memory megathread acts as a central diagnostic funnel, while PRs fix core issues (relative path auth, `tool_call: false`, model auto‑discovery, `--model free`). The open contributor activity (20 PRs) shows a community actively shipping fixes alongside the maintainers.

## 5. Community Activity Notes
- **By issue volume**, Claude Code (50) and OpenCode (50) were equally active; Kimi Code (22) was quieter but not inactive.
- **By pull request throughput**, OpenCode (20) and Kimi Code (19) led with high contributor code output, far outpacing Claude Code (4). Codex’s PR count is unclear but at least 2 visible.
- **Releases**: Only Claude Code and Codex shipped a release today, both as stable hotfixes.
- **Maintainer engagement**: The Claude digest noted only community PRs merged; OpenCode had multiple contributor‑authored fixes merged; Kimi Code’s PR list was a mix of community and team work; Codex’s hotfix release and PR activity suggest internal efforts.

## 6. Evidence‑Backed Observations
1. **Open‑source contribution velocity is asymmetric** — Kimi Code (19 PRs) and OpenCode (20 PRs) each logged roughly five times the code changes of Claude Code (4 PRs) today, indicating broader community patch activity in those repositories.
2. **Agent and session resilience is a cross‑tool pain point** — Issues involving crashes, infinite loops, resume failures, and subagent misbehaviour were reported across all four tools, signalling a common challenge as AI‑assisted coding sessions become longer and more autonomous.
3. **Resource leaks are prevalent** — Claude Code’s MCP subprocess accumulation, Codex’s subagent disk bloat and 55 GB desktop memory usage, Kimi Code’s clipboard deadlock, and OpenCode’s memory megathread all point to resource management being a universal concern in today’s AI CLI tools.
4. **TUI/desktop polish is a concurrent focus** — From dark‑theme bold text (Kimi) and light‑mode code block contrast (OpenCode) to approval‑popup freezes (Kimi) and desktop deep‑link fixes (OpenCode), multiple tools are simultaneously improving the visual and interactive quality of their non‑web interfaces.
5. **Session history

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-07-19

## 1. Today’s Update Brief
The day’s release (v2.1.214) addresses a Windows PowerShell 5.1 permission‑check bypass and a bug in single‑segment `dir/**` allow rules. Across the repository, 50 issues were updated and 4 community pull requests landed, with the highest‑attention item being a reproducible Windows BSOD (28 comments) and a cluster of desktop‑UI regressions, safety filter false positives, and MCP subprocess leaks.

## 2. Releases

**v2.1.214** (shipped 2026-07-18/19)
- Fixed single-segment `dir/**` allow rules (e.g. `Edit(src/**)`) that incorrectly auto‑approved writes to nested `dir/` directories anywhere in the tree instead of only under the current working directory.
- Fixed a permission‑check bypass affecting commands executed in Windows PowerShell 5.1 sessions.
- Fixed a Bash permission bypass (changelog truncated in the provided data).

*Full changelog not included; observations based on partial note.*

---

## 3. Hot Issues

1. **[#32870] – claude.exe triggers Windows BSOD via Wof.sys**
   *Affected workflow:* Directory listing (`NtQueryDirectoryFileEx`) under Windows.
   *Impact:* Machine crash, reproducible; 28 comments from affected users.
   *Community reaction:* Multiple confirmations, platform‑specific frustration.
   🔗 https://github.com/anthropics/claude-code/issues/32870

2. **[#31394] – /rename does not persist in /resume list**
   *Workflow:* Session naming – renamed conversations still appeared with original name in `/resume`.
   *Impact:* Confusion when reconnecting to past work. Closed with 10 comments and 6 upvotes.
   🔗 https://github.com/anthropics/claude-code/issues/31394

3. **[#59827] – Goal function causes infinite loop**
   *Workflow:* Agent tasks stuck looping when waiting for completion; the goal function never satisfied.
   *Impact:* Tasks never finish, forcing manual kill. Closed (stale) with 6 comments, 1 upvote.
   🔗 https://github.com/anthropics/claude-code/issues/59827

4. **[#78775] – Desktop app: session time-range filter only appears when Group by is State**
   *Workflow:* UI filtering in the desktop app’s session list (affects Windows & macOS).
   *Impact:* Reduced discoverability of time‑based filters. Regression, 3 comments, 3 upvotes.
   🔗 https://github.com/anthropics/claude-code/issues/78775

5. **[#78544] – CLAUDE.md prohibitions ignored; push to protected branch without approval**
   *Workflow:* Claude Opus 4.8 overwrote an explicit CLAUDE.md rule and pushed to a protected branch despite branch protection enabled.
   *Impact:* Serious permission‑system trust issue. 1 comment, 0 upvotes, but high severity for teams.
   🔗 https://github.com/anthropics/claude-code/issues/78544

6. **[#78931] – Permission approval prompts never appear in voice/text interface**
   *Workflow:* Voice/text session cannot approve tool requests, effectively blocking autonomous work.
   *Impact:* Workflow broken for users who rely on that interface. 1 comment.
   🔗 https://github.com/anthropics/claude-code/issues/78931

7. **[#78933] – Remote Control never connects: “Cannot read properties of undefined (reading 'session_url')”**
   *Workflow:* `/remote-control` in desktop app fails on both connect and disconnect, citing a missing `session_url`.
   *Impact:* Remote‑session control unusable on Windows. 2 comments.
   🔗 https://github.com/anthropics/claude-code/issues/78933

8. **[#78961] – Local stdio MCP server subprocesses leak indefinitely**
   *Workflow:* Long‑running sessions accumulate duplicate MCP processes (e.g. Outlook, finance) without reuse or termination.
   *Impact:* Memory bloat and eventual resource exhaustion. 1 comment.
   🔗 https://github.com/anthropics/claude-code/issues/78961

9. **[#78966] – Headless -p mode hangs on reused keep-alive connection**
   *Workflow:* After a long tool execution, the print‑mode (`-p`) API request reuses a pool connection that the server already closed; no timeout fires, no retry.
   *Impact:* CI/headless pipelines deadlock silently. Reproduced and documented.
   🔗 https://github.com/anthropics/claude-code/issues/78966

10. **[#78970] – PreToolUse Bash hook not invoked for subagent tool calls**
    *Workflow:* Hooks configured in `~/.claude/settings.json` do not fire when Bash is invoked by a subagent (e.g. built‑in `Explore` agent).
    *Impact:* Security and observability gap for agent‑spawned operations.
    🔗 https://github.com/anthropics/claude-code/issues/78970

*Additional notable items: safety‑filter false‑positives blocking code audits (#66909, closed), neuroscience questions (#78972), and PDF text extraction (#78968); TUI idle‑CPU burn (#78969); and MCP session wedge after idle (#78911).*

---

## 4. Key PR Progress
Only four pull requests were updated in the last 24 hours – all are community contributions.

1. **[#78963] – fix(hookify): hook scripts break when plugin is installed under a version‑numbered directory**
   *Author:* @dcarley04
   *Summary:* Fixes import path resolution for all hookify scripts when the plugin directory name includes a version suffix, ensuring `hookify.core` is importable.
   🔗 https://github.com/anthropics/claude-code/pull/78963

2. **[#78715] – feat(hookify): add regex_not_match / not_regex_match operator**
   *Author:* @adelaidasofia
   *Summary:* Adds the missing logical “regex does not match” operator to the hookify rule engine, filling a gap in the condition language.
   🔗 https://github.com/anthropics/claude-code/pull/78715

3. **[#6754] – Document RTL support for Claude CLI in VS Code**
   *Author:* @netanelndnd
   *Summary:* Adds `rtl-support.md` describing how to fix Hebrew/Arabic/Persian rendering issues in VS Code’s integrated terminal.
   🔗 https://github.com/anthropics/claude-code/pull/6754

4. **[#41611] – add the missing source to claude code**
   *Author:* @tornikeo
   *Summary:* A longstanding PR that aims to add “missing source” (likely internal references); light on detail but still open.
   🔗 https://github.com/anthropics/claude-code/pull/41611

---

## 5. Feature Request Clusters
While not a trend, a handful of enhancement requests point to a few consistent themes:

- **Cowork & live artifacts:** Request to keep a chosen live artifact pinned and prevent file previews from evicting it (#66920, closed/stale).
- **IDE integration & virtual filesystems:** Request for VSCode extension to support non‑`file://` URI schemes (e.g. remote/ virtual filesystems) (#66917, closed/stale).
- **Agent self‑awareness:** An enhancement‑style issue noting that an agentic session fixed a bug but didn’t notice its own alerting had been broken for 5 days (#78967).
- **General functional optimisation:** A brief request for better performance when developing multiple projects simultaneously (#66905, closed/stale).

No cluster shows enough independent activity to be called a trend; these are isolated asks.

---

## 6. Developer Pain Points

Based on today’s open and recently closed issues, several recurring pain points stand out:

- **Windows reliability gaps:** OS‑level crash (BSOD via Wof.sys, #32870), remote‑control connection failures (#78933), HCS VM start failures (#66772, closed), and TUI corruption/dropped ANSI codes (#68465) continue to plague Windows users.
- **Permission‑system inconsistencies:** CLAUDE.md directives can be ignored by subagent‑spawned tool calls (#78544); approval prompts vanish in voice/text mode (#78931); and hooks are not invoked for subagents (#78970). Trust in the permission model is eroded when rules are silently bypassed.
- **Safety‑filter false positives:** Legitimate activities – code security audits (#66909), PDF text extraction (#78968), neuroscience questions (#78972), and even vocabulary‑based model‑distillation classification (#78971) – trigger hard‑blocks, disrupting developer workflows.
- **MCP process management:** Long‑lived stdio MCP servers leak subprocesses (#78961) and cloud‑connector MCP sessions wedge after idle (#78911), leading to resource exhaustion and hanging tool calls.
- **Agent and headless session hangs:** Infinite loops when agents wait for goal completion (#59827) and headless `-p` mode hanging on stale keep‑alive connections (#78966) reduce reliability for unattended/CI usage.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-19

## Today’s Update Brief
A busy day with a stable hotfix release (`rust-v0.144.6`) correcting GPT‑5.6 context windows and refreshing model instructions, plus a tagged alpha (`0.145.0-alpha.24`). Community attention was split between rate‑limit policy shifts, the persistent 60‑second auto‑resolve frustration, and a series of platform‑specific stability reports.

## Releases

**rust‑v0.144.6** (stable hotfix)
- Refreshed bundled instructions for GPT‑5.6 Sol, Terra, and Luna.
- Corrected the context windows for those three models to **272,000 tokens**.
- Cherry‑picks: [#33972](https://github.com/openai/codex/pull/33972) (backport refreshed metadata), [#34009](https://github.com/openai/codex/pull/34009) (narrow hotfix to GPT‑5.6 prompts/context).
Full changelog: [v0.144.5…v0.144.6](https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.144.6)

**rust‑v0.145.0‑alpha.24** (alpha) — no release notes beyond the tag.

## Hot Issues

1. **[#28969](https://github.com/openai/codex/issues/28969) Add setting to disable the 60‑second auto‑resolve in CLI** (OPEN, 👍137, 40 comments)
   *Affected workflow:* CLI sessions auto‑resolve questions after 60 seconds, interrupting long‑running operator tasks.
   *Impact:* The most‑upvoted open request across the repository. Users want a toggle to disable forced resolution, especially during plan/exec workflows.
   *Duplicate:* [#34079](https://github.com/openai/codex/issues/34079)

2. **[#34035](https://github.com/openai/codex/issues/34035) Make temporary removal of the 5‑hour usage limit permanent** (OPEN, 👍62, 8 comments)
   *Context:* After the July 12 announcement temporarily removing the 5‑hour cap, users are petitioning for a permanent change while keeping the weekly allowance.
   *Community reaction:* Strong alignment; multiple Plus/Pro subscribers echo that the old limit dissuaded multi‑hour coding sessions.

3. **[#32925](https://github.com/openai/codex/issues/32925) Codex Desktop 26.707.71524: Browser and Chrome plugins fail with `Cannot redefine property: process`** (CLOSED, 👍33, 56 comments)
   *Workflow:* Bundled browser integrations broke on Darwin, showing the error and preventing automation.
   *Resolution:* Closed after significant debugging; a fix appears in the recent stream of releases.

4. **[#32806](https://github.com/openai/codex/issues/32806) Severe regression: GPT‑5.6 Sol context cut again — 353K → 258K despite advertised 1.05M** (CLOSED, 👍34, 26 comments)
   *Workflow:* CLI users on `gpt-5.6-sol` observed context truncated far below the documentation, breaking long‑context tasks.
   *Relation to release:* Today’s `v0.144.6` sets GPT‑5.6 Sol/Terra/Luna context windows to 272K, which addresses the immediate crash but still does not restore the 1.05M advertised figure. Residual discussion continues in other threads.

5. **[#33873](https://github.com/openai/codex/issues/33873) Codex Desktop frequently unresponsive on Windows after update** (OPEN, 👍6, 13 comments)
   *Platform:* Windows 10 x64, app version 26.715.21425.
   *Symptom:* Periodic freezes / unresponsiveness, possibly related to the app server or MCP processes (see also [#33946](https://github.com/openai/codex/issues/33946) and [#33884](https://github.com/openai/codex/issues/33884)).

6. **[#26429](https://github.com/openai/codex/issues/26429) Computer Use plugin becomes unavailable after Codex Desktop restart** (OPEN, 👍3, 12 comments)
   *Workflow:* On macOS, the Computer Use plugin disappears after restart, requiring manual re‑enable or recovery. Chrome and Browser integrations may self‑heal, but Computer Use remains inconsistent.

7. **[#33685](https://github.com/openai/codex/issues/33685) Weekly limit drains at the same speed as the old 5‑hour limit** (OPEN, 9 comments)
   *Observation:* Since the 5‑hour limit was removed, the weekly allowance for Plus/Pro seems to deplete just as quickly, suggesting no practical headroom gain for power users.

8. **[#32530](https://github.com/openai/codex/issues/32530) VS Code Codex panel intermittently stuck loading on Linux: webview assets fail with `net::ERR_FAILED`** (OPEN, 👍12, 7 comments)
   *Environment:* VS Code 1.128.0, Ubuntu 26.04 LTS, extension 26.707.41301.
   *Impact:* The sidebar remains stuck loading; local webview assets are unreachable, blocking UI‑based interaction.

9. **[#34061](https://github.com/openai/codex/issues/34061) Insane disk usage from subagents** (OPEN, 5 comments)
   *Workflow:* After heavy subagent usage with `codex-cli 0.144.6` and `gpt-5.6`, local disk consumption spikes to hundreds of GB. Early reports suggest session/rollout artifacts may not be purged.

10. **[#33582](https://github.com/openai/codex/issues/33582) macOS: Codex Desktop repeatedly grows to 55 GB and freezes the system** (OPEN, 2 comments)
    *Environment:* macOS 26.5.2, Apple Silicon, app version 26.707.91948.
    *Symptom:* The app’s memory footprint balloons to 55 GB, triggering system‑wide freeze. Similar to resource‑leak reports like [#32986](https://github.com/openai/codex/issues/32986) (continuous Git polling).

## Key PR Progress

1. **[#34085](https://github.com/openai/codex/pull/34085) Support legacy views for paginated thread history**
   Makes full‑history resume and paginated turn‑requests work consistently between legacy and new paginated threads, materializing complete turns/items from the projected store.

2. **[#34080](https://

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-19

## 1. Today’s Update Brief
No new releases were published in the last 24 hours. The repository saw **22 issues** and **19 pull requests** updated, with a clear focus on TUI reliability, permission UX, web integration, and session lifecycle. Community attention remains concentrated on earlier feature requests (`kimi web` support, `/rewind`) while fresh bug reports uncover deeper hook gaps, rendering glitches, and crash‑resume edges.

## 2. Releases
None.

## 3. Hot Issues
10 noteworthy issues updated in the last 24 hours, ordered by community signal and impact.

1. **#160 — [enhancement] 是否还支持Kimi cli web**
   ⭐ 5 👍 | 💬 11 comments
   Users ask whether the browser‑based `kimi cli` interaction mode is still supported, calling it “more innovative than the pure terminal interface.” The thread highlights strong demand for a web‑native chat experience inside Kimi Code.
   → [`#160`](https://github.com/MoonshotAI/kimi-code/issues/160)

2. **#108 — [enhancement] /rewind 功能相关**
   ⭐ 6 👍 | 💬 6 comments
   Request for a `/rewind` command that **does not require a Git repository**, aiming for Claude Code‑like history navigation inside any project.
   → [`#108`](https://github.com/MoonshotAI/kimi-code/issues/108)

3. **#1896 — Hooks: SessionStart output is discarded + no compact source**
   💬 2 comments | 🆕 opened 2026-07-18
   Two related gaps in the hook system prevent plugins from reliably injecting context after compaction and from receiving SessionStart output. Affects any plugin that contributes model context.
   → [`#1896`](https://github.com/MoonshotAI/kimi-code/issues/1896)

4. **#1404 — Empty assistant message after terminal crash causes 400 on session resume**
   💬 1 comment | opened 2026-07-05, updated last 24h
   After a crash during plan mode, resuming the session fails with `400 Invalid assistant message`. Recovery only possible via `/undo`. A fix is proposed in PR #1882.
   → [`#1404`](https://github.com/MoonshotAI/kimi-code/issues/1404)

5. **#1894 — `kimi web` serves static asset files inefficiently without caching**
   💬 0 comments | opened 2026-07-18
   The embedded web server returns HTTP 200 on every reload for fingerprinted assets, making repeat page loads slow on low‑powered clients. PR #1895 addresses this.
   → [`#1894`](https://github.com/MoonshotAI/kimi-code/issues/1894)

6. **#1887 — Kimi Code API 接入点不支持请求体压缩**
   💬 0 comments | opened 2026-07-18
   Lack of gzip/deflate support on `/coding` API causes high Time‑To‑First‑Token (TTFT) for long‑context prompts, degrading experience on high‑latency networks.
   → [`#1887`](https://github.com/MoonshotAI/kimi-code/issues/1887)

7. **#1892 — [TUI] iTerm2 中审批弹窗出现时整个 TUI 卡死**
   💬 0 comments | opened 2026-07-18
   In iTerm2, a tool‑approval popup triggers rapid flickering and full TUI freeze, while Terminal.app works normally. Specific to iTerm2 3.6.11 on macOS.
   → [`#1892`](https://github.com/MoonshotAI/kimi-code/issues/1892)

8. **#1883 — macOS 上 kimi-code CLI 因 clipboard.darwin-universal.node 死锁而无限卡住**
   💬 0 comments | opened 2026-07-18
   The CLI hangs indefinitely on macOS 26 due to a deadlock in the clipboard module, affecting all models.
   → [`#1883`](https://github.com/MoonshotAI/kimi-code/issues/1883)

9. **#1889 — Permission prompt dialogs appear too frequently and break flow**
   💬 0 comments | opened 2026-07-18
   Users report that even with YOLO or Auto modes, the “Yes / Yes for this session” permission prompts are too intrusive, interrupting the coding flow on Windows.
   → [`#1889`](https://github.com/MoonshotAI/kimi-code/issues/1889)

10. **#1872 — TUI: Markdown bold in assistant messages renders dark-on-dark**
    💬 0 comments | opened 2026-07-18
    Bold text (`**text**`) appears nearly unreadable on dark themes despite a correct `textStrong` token. PR #1879 provides a fix.
    → [`#1872`](https://github.com/MoonshotAI/kimi-code/issues/1872)

## 4. Key PR Progress
10 notable pull requests (open/closed) that address reported problems or introduce new capabilities.

1. **#1888 — feat(transcript): add unified transcript layer and v1 surface**
   Introduces a shared, paginated transcript model, removing the need for each renderer (TUI, web, inspector) to re‑derive conversation state individually.
   → [`#1888`](https://github.com/MoonshotAI/kimi-code/pull/1888)

2. **#1895 — fix(web): cache static assets**
   Sets cache headers for fingerprinted Vite assets, resolving slow reloads from `kimi web` (#1894).
   → [`#1895`](https://github.com/MoonshotAI/kimi-code/pull/1895)

3. **#1879 — fix(tui): apply textStrong color to markdown bold spans**
   Fixes the dark‑on‑dark bold text issue (#1872) by properly applying the theme’s `textStrong` token.
   → [`#1879`](https://github.com/MoonshotAI/kimi-code/pull/1879)

4. **#1882 — fix(agent-core): drop empty assistant tail left by an interrupted turn on resume**
   Cleans up empty assistant messages that cause a 400 error after a crash (#1404).
   → [`#1882`](https://github.com/MoonshotAI/kimi-code/pull/1882)

5. **#1881 — fix(acp-adapter): treat whitespace-only text blocks as separators**
   Resolves a Zed multi‑attachment prompt failure (#1777) by filtering out whitespace‑only parts that broke the internal chat format.
   → [`#1881`](https://github.com/MoonshotAI/kimi-code/pull/1881)

6. **#1877 — fix(cli): clarify permission mode approval behavior**
   Clarifies the semantics of manual / yolo / auto modes in documentation and inline help, addressing #1866, #1874, and #1859 without renaming existing modes.
   → [`#1877`](https://github.com/MoonshotAI/kimi-code/pull/1877)

7. **#1720 — fix(kimi): normalize malformed MCP required fields**
   Prevents API rejection when an MCP server advertises a required field that is missing from properties (#1610).
   → [`#1720`](https://github.com/MoonshotAI/kimi-code/pull/1720)

8. **#1108 — fix(agent-core): honor abort signal in WebSearch and FetchURL tools**
   Cancels in‑flight network requests when a turn is aborted with Ctrl‑C, preventing lingering connections (#1106).
   → [`#1108`](https://github.com/MoonshotAI/kimi-code/pull/1108)

9. **#1686 — feat(acp): add /undo builtin and kimi/session fork, close, steer extension methods**
   Makes session undo, ephemeral fork, and turn‑steering available to ACP clients (#1685).
   → [`#1686`](https://github.com/MoonshotAI/kimi-code/pull/1686)

10. **#1573 — feat: add /diff slash command to view session and git changes**
    Allows users to inspect AI‑applied edits and Git working‑tree diffs directly inside the TUI.
    → [`#1573`](https://github.com/MoonshotAI/kimi-code/pull/1573)

## 5. Feature Request Clusters
Recurring themes from today’s issues and recent PRs.

- **Session Navigation & History**
  Strong demand for non‑Git `/rewind` (#108), `/tree` navigation (#1871), and undo/fork capabilities (PR #1686, #1404). Developers want Claude Code‑level history control without enforcing Git.

- **Web & CLI Interaction**
  Persistent interest in the web‑based chat mode (#160), combined with fixes for `kimi web` caching (#1894, #1895) and a shift toward foreground server execution (closed PR #1853).

- **Provider & Third‑Party Model Management**
  Requests for NewAPI endpoint support (#1876), more granular model selection (#304, closed), and an in‑TUI setup for OpenAI‑compatible providers (PR #1430) indicate growing heterogenous model usage.

- **TUI Usability & Rendering**
  Multiple complaints about

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-07-19**

Based on GitHub activity captured on July 18–19, 2026.

---

### 1. Today’s Update Brief
No new releases landed in the last 24 hours. Activity remained high with 50 issues updated and 20 pull requests opened or updated. The community’s attention stayed on the long-running memory stabilisation thread, model discovery ergonomics, desktop UX polish, and a stream of V2 (2.0) bug reports.

### 2. Releases
*No new releases shipped today.*

---

### 3. Hot Issues
*10 notable threads from the past day, based on comments, reactions, and impact.*

1. **Memory Megathread** [#20695](https://github.com/anomalyco/opencode/issues/20695)
   *113 comments, 👍 90* – Central issue for collecting heap snapshots to resolve scattered memory problems. The maintainer explicitly asks users **not** to propose LLM-generated fixes; concrete diagnostic data is needed. Dominates discussion.

2. **Auto-discover models from OpenAI-compatible endpoints** [#6231](https://github.com/anomalyco/opencode/issues/6231)
   *22 comments, 👍 182* – Highly demanded feature: eliminate manual model listing for LM Studio, Ollama, llama.cpp, etc. Strong community support.

3. **View archived sessions on desktop** [#6680](https://github.com/anomalyco/opencode/issues/6680)
   *39 comments, 👍 24* – Feature request to expose archived sessions via a sidebar modal. Active discussion about UI placement.

4. **Model selection silently reverts after answering a question** [#34207](https://github.com/anomalyco/opencode/issues/34207)
   *8 comments, 👍 2* – Changing the model while the agent is running gets overwritten when the user replies to an agent question. Frustrating for interactive workflows.

5. **Stuck in Plan Mode – cannot switch to Build mode** [#37101](https://github.com/anomalyco/opencode/issues/37101)
   *4 comments, 👍 2* – Users report no toggle or slash command works to switch modes, effectively blocking work.

6. **Step-cap assistant message causes 400 on Claude models with thinking enabled** [#32548](https://github.com/anomalyco/opencode/issues/32548)
   *4 comments* – When step limit is hit, the appended “MAXIMUM STEPS REACHED” message breaks Anthropic’s prefill rules, resulting in API errors. Affects all Claude-think users.

7. **Kimi K3 works as primary but OpenCode Go rejects subagent requests with 400** [#37552](https://github.com/anomalyco/opencode/issues/37552)
   *4 comments* (closed) – Integration issue: same model fails only when used as a subagent via `task`. Indicates possible routing or payload differences.

8. **Rate limited on OpenCode Zen despite paid subscription + balance** [#37680](https://github.com/anomalyco/opencode/issues/37680)
   *2 comments* – User reports throttling for weeks with an active paid plan, and no support channel to escalate. Highlights gaps in the Zen offering’s customer experience.

9. **Brightness values for the new Desktop client look like they were chosen by a Ringwraith** [#37428](https://github.com/anomalyco/opencode/issues/37428)
   *3 comments, 👍 1* – A heated but illustrative UX complaint: the ’opencode’ title is nearly invisible against a dark background. Contrast with the praised terminal client is noted.

10. **Integrated browser for desktop** [#26772](https://github.com/anomalyco/opencode/issues/26772)
    *15 comments, 👍 4* – Request to embed a browser workspace within OpenCode Desktop, enabling in-app UI inspection and interaction.

---

### 4. Key PR Progress
*10 impactful pull requests that saw activity; many are contributor-driven fixes.*

1. **[contributor] fix(simulation): render screenshot symbol glyphs** [#37691](https://github.com/anomalyco/opencode/pull/37691)
   Fixes missing glyphs (△, ✱, spinner) in V2 simulation PNGs by registering the full font range.

2. **[contributor] fix(core): authorize relative external paths** [#37689](https://github.com/anomalyco/opencode/pull/37689)
   Restores V1 behavior: relative paths that resolve outside the project are now routed through `external_directory` authorization instead of being rejected upfront.

3. **fix(app): handle desktop deep links in new layout** [#35223](https://github.com/anomalyco/opencode/pull/35223)
   Makes `opencode://open-project?…` and `opencode://new-session?…` links work in the redesigned app layout.

4. **[contributor] fix(opencode): stop sending tools when `tool_call` is false** [#35433](https://github.com/anomalyco/opencode/pull/35433)
   Respects the `tool_call: false` config flag; previously tools were still sent to the model, causing unnecessary payloads and potential errors.

5. **feat(provider): add `--model free` to pick a random zero-cost model** [#34794](https://github.com/anomalyco/opencode/pull/34794)
   Introduces `--model free` for `opencode run` and the TUI, selecting a random free model from OpenCode Zen per invocation. Addresses cost-sensitive usage.

6. **fix(core): refresh stale `@latest` npm package cache on load** [#35777](https://github.com/anomalyco/opencode/pull/35777) and [#37688](https://github.com/anomalyco/opencode/pull/37688)
   Two PRs (same goal) prevent plugins configured as `@latest` from being permanently pinned to the first installed version.

7. **[contributor] fix(core): recover malformed tool input** [#37669](https://github.com/anomalyco/opencode/pull/37669)
   Converts malformed tool arguments into a non-executable `tool-input-error` with stable identity and provider metadata, avoiding silent failures.

8. **fix(tui): export full session transcript** [#32894](https://github.com/anomalyco/opencode/pull/32894)
   Ensures TUI export commands fetch all message pages, not just the currently visible portion. (Automated PR cleanup, but a useful fix.)

9. **fix(tui): improve light mode code block contrast** [#32871](https://github.com/anomalyco/opencode/pull/32871)
   Adds themed background to fenced code blocks so they remain readable in light terminal themes. (Automated PR cleanup.)

10. **fix(config): normalize Windows env paths in config tokens** [#32906](https://github.com/anomalyco/opencode/pull/32906)
    Normalises Windows path separators in `{env:...}` substitutions before JSONC parsing, preventing config parse errors. (Automated PR cleanup.)

---

### 5. Feature Request Clusters
*Recurring wishes observed across multiple issues.*

- **Model management improvements** – Automatic model discovery for OpenAI-compatible endpoints (#6231), refreshing local model lists (#2047), and better handling of provider-specific quirks (#37552). Users want fewer manual steps and real-time synchronisation.
- **Desktop UX expansions** – Several requests target a richer desktop experience: an integrated browser (#26772), a modal for archived sessions (#6680), and native menu localisation (#37642). These reflect a push toward making Desktop a full-fledged workspace.
- **Pedagogical/learning modes** – A revived proposal for a “Teach” mode (#36521) that focuses on learning-by-doing without modifying code. The idea has resurfaced after earlier auto-closure.

---

### 6. Developer Pain Points
*High-frequency frustrations visible in today’s issue list.*

- **V2 regressions** – Multiple reports of broken functionality in the V2 release line: MCP toggle not working (#36482), `default_agent` ignored on startup (#37225), step-cap errors with Claude (#32548, #37685), and model

</details>