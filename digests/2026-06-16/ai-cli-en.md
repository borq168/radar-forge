# AI CLI Tools Community Digest 2026-06-16

> Generated: 2026-06-16 02:52 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-06-16

## 1. Daily Cross-Tool Overview

Today saw **three stable releases** (Claude Code v2.1.178, Codex v0.140.0, Copilot CLI v1.0.63) and **two alpha/preview releases** (Codex v0.141.0-alpha, Qwen Code v0.18.1-preview). Bug-fixing momentum was concentrated on **cross-platform compatibility** (Windows path handling across Claude Code, Codex, and Copilot CLI), **security hardening** (Gemini CLI SSRF protections, Kimi Code proxy gaps), and **session/data integrity** (Claude Code desktop update data loss, OpenCode memory bloat, Kimi Code session resumption). Activity was highest in Claude Code, OpenCode, and Qwen Code by combined issue+PR volume, while Kimi Code showed the lowest activity with only 2 PRs and 4 updated issues.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (24h) | Releases Today | Notable Release |
|------|---------------------|-------------------|----------------|-----------------|
| **Claude Code** | 50 | 23 | 1 stable | v2.1.178 — `Tool(param:value)` syntax, nested skills |
| **OpenAI Codex** | 50 | 50 | 2 alpha + 1 stable | v0.140.0 — token usage views, `/goal` attachments, session deletion |
| **Gemini CLI** | 50 | 27 | 0 | — |
| **GitHub Copilot CLI** | 44 | 1 | 1 stable | v1.0.63 — blocked image error messages, sorted `--help` |
| **Kimi Code CLI** | 4 | 2 | 0 | — |
| **OpenCode** | 50+ | 50+ | 0 | — |
| **Qwen Code** | 34 | 50 | 2 stable + 1 preview + 1 nightly | v0.18.1 — daemon opt-in for direct shell; desktop-v0.0.4 — MCP persistence |

## 3. Shared Feature Directions

**Session & Memory Lifecycle Management** appears across **4 tools**:
- **Claude Code** (#47023): Users request session compact/lifecycle hooks for external memory integration
- **OpenCode** (#27167): `/goal` command for persistent session objectives (84 👍, highest feature request)
- **Qwen Code** (#5147, #5154): Memory spikes on `/quit`; design debate on GC wrapper overhead
- **Codex** (PR #28421): Shell snapshots now bound to retained thread environments for cross-turn persistence

**Multi-Model/BYOK Selection Flexibility** appears in **3 tools**:
- **Claude Code** (#68165): Per-message model switching requested
- **Copilot CLI** (#3282): Multiple BYOK model capability in TUI (8 👍)
- **Qwen Code** (#5173): Model provider disambiguation fails when multiple providers share model IDs

**Sandboxing and Permission Controls** requested across **3 tools**:
- **OpenCode** (#2242): File/directory access restrictions for terminal commands (69 comments, 53 👍)
- **Claude Code** (#29045): Lightweight mode for desktop to reduce Hyper-V memory bloat
- **Codex** (#28435): Windows Computer Use install entry missing, blocking feature access

**Cross-Platform Path Handling** bugs active in **3 tools**:
- **Claude Code** (#68700): Windows backslash paths break plugin hooks
- **Codex** (#28094): WSL paths rewritten to `C:\` on Windows Desktop
- **Copilot CLI** (#3776, #3813): Mojibake/garbled text when pasting between Windows and WSL

**Terminal Rendering Issues** reported in **3 tools**:
- **Qwen Code** (#3979, #3949, #5159): Flickering in Ghostty, Tabby, and tmux scroll misrouting
- **Claude Code** (#12953): Mousewheel scrolls through input history instead of chat history (Windows TUI)
- **Copilot CLI** (#3769, #3780): Mangled streaming output and repeated character clusters (closed)

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|-----------|-------------|-------|------------|-------------|----------|-----------|
| **Primary focus this week** | Agent extensibility (hooks, permissions) | Token metrics, session continuity | Security hardening (SSRF, MCP OAuth) | Regression fixes, MCP reliability | Memory management, MCP parity | `/loop` lifecycle overhaul, terminal UX |
| **Target user** | Professional devs needing advanced agent control | Enterprise teams needing compliance/audit (Guardian) | Google Cloud ecosystem + security-conscious teams | GitHub ecosystem + enterprise policy users | Power users wanting community-driven innovation | Multi-provider setups, Qwen model users |
| **Key differentiator** | `Tool(param:value)` permission rules with wildcard | Guardian auto-review, interruptible sleep tool | DNS-level SSRF protection, air-gapped support | BYOK model support, GitHub OAuth integration | Highly active community (50+ daily PRs), sandboxing community pressure | Fast release cadence (4 versions today), `/loop` alignment |
| **Pain point density** | High (session data loss, ENOSPC false positives, resource growth) | Medium (WebSocket reconnects, cross-OS paths) | Medium (agent reliability, memory crashes) | Low (mostly closed regressions from v1.0.60) | High (memory bloat, billing failures, MCP gaps) | Medium (terminal flicker, model picker bugs) |

## 5. Community Activity Notes

**Highest Issue/PR Volume**: Claude Code, Codex, Gemini CLI, and OpenCode each showed **50+ issues and 20+ PRs** updated today. Qwen Code had fewer issues (34) but matched with 50 PRs, indicating active development work.

**Release Cadence**: Qwen Code led with **4 version events** (2 stable, 1 preview, 1 nightly). Claude Code and Codex each shipped 1 stable release. Copilot CLI shipped 1 stable + 1 pre-release. Gemini CLI, OpenCode, and Kimi Code had **no releases** today.

**Maintainer Response Quality**:
- **Claude Code**: Merged 5 bug-fix PRs across hooks, workflows, and triage automation
- **Gemini CLI**: Merged 3 security PRs (SSRF, MCP consolidation) and continues active security hardening
- **Copilot CLI**: Closed 6 open issues in 24h (regressions from v1.0.60)
- **Codex**: Merged or closed 7 PRs, including pre-tool-use permission approval (PR #20702)
- **Kimi Code**: 2 PRs opened but no maintainer responses visible on the 4 open issues
- **OpenCode**: 50+ PRs active but no stable release; billing/subscription issues (#32420, #32466) have no maintainer replies

**Lowest Activity**: Kimi Code had only **4 issues** and **2 PRs** updated, with no releases. The two opened PRs are from community contributor @logicwu0, not maintainers.

## 6. Evidence-Backed Observations

**1. Cross-platform Windows compatibility is a persistent pain point across the ecosystem**
Evidence: Claude Code (#68700), Codex (#28094, #28152), and Copilot CLI (#3776, #3813) all have open issues where path handling, terminal encoding, or WSL integration breaks for Windows users. Claude Code's recent influx of Windows-normalization PRs (@AZERDSQ131) suggests plugin features were tested primarily on macOS/Linux before shipping.

**2. Agent reliability and security hardening are moving in opposite directions by tool maturity**
Evidence: Gemini CLI merged 3 security-focused PRs today (SSRF protection, MCP OAuth blocking, DNS-level guard) while also having 3 open agent reliability bugs (hangs #21409, misreported success #22323, stuck shell #25166). Claude Code's most active PRs are hook/tool logic fixes rather than security hardening. This suggests Gemini CLI is in a security-audit phase while Claude Code is polishing agent extensibility.

**3. The community is converging on session lifecycle hooks as a missing primitive**
Evidence: Claude Code (#47023, 22 comments) and OpenCode (#27167, 84 👍, 49 comments) independently propose event-driven hooks for session compact, archive, and goal tracking. Both communities cite "3-tier memory architectures" (Claude Code) and "persistent objectives" (OpenCode) as the driving use case. No tool has implemented this yet, but both PRs are open and under discussion.

**4. Desktop app resource management is a growing friction point**
Evidence: Claude Code's Hyper-V VM memory bloat (#29045, 27 comments) and OpenCode's memory megathread (#20695, 97 comments, 65 👍) indicate that desktop applications are consuming disproportionate system resources relative to user expectations. Neither tool has shipped a lightweight mode, though both have active discussions.

**5. Few tools are addressing terminal rendering issues cross-platform**
Evidence: Qwen Code has 3 open flickering/scrolling issues across different terminals (Ghostty, Tabby, tmux), Claude Code has 1 Windows-specific scroll bug, and Copilot CLI closed 2 rendering issues today. The pattern suggests that rendering compatibility is tested primarily against a single terminal (iTerm2 on macOS for most tools) and breaks on alternatives. No tool has a cross-terminal compatibility layer or reported plans for one.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-16

## Today’s Update Brief
Anthropic shipped **v2.1.178** with a new `Tool(param:value)` syntax for permission rules (including wildcard support) and improved nested skills loading. The issue tracker saw heavy activity with **50 open/updated issues** and **23 pull requests**, the latter dominated by cross-platform fixes for Windows and macOS compatibility in the plugin ecosystem. A recurring cluster of ENOSPC false-positives on macOS continues to generate multiple duplicate bug reports.

## Releases
**v2.1.178** (latest)
- **`Tool(param:value)` syntax** — Permission rules can now match specific tool input parameters; e.g. `Agent(model:opus)` blocks Opus-powered subagents. Supports `*` wildcard.
- **Nested skills** — Skills placed in `.claude/skills` subdirectories now load when working on files inside those directories. On name clash, the nested skill takes precedence.
[Full release](https://github.com/anthropics/claude-code/releases/tag/v2.1.178)

## Hot Issues
10 noteworthy issues from the past 24 hours, ordered by comment count.

### 1. VS Code: setting to disable auto-attach of open file/selection
[#24726](https://github.com/anthropics/claude-code/issues/24726) — **53 comments | 163 👍**
A long-standing enhancement request (Feb 2026) asking for a VS Code setting to stop Claude Code from automatically attaching the active file or selection to every conversation. Community support is strong.

### 2. Desktop spawns 1.8 GB Hyper-V VM on every launch
[#29045](https://github.com/anthropics/claude-code/issues/29045) — **27 comments | 56 👍**
Even for chat-only use, the desktop app provisions a full Hyper-V VM (Windows) on launch, causing memory bloat. Users want a lightweight mode.

### 3. Proposal: expose compact/session lifecycle hooks for external memory
[#47023](https://github.com/anthropics/claude-code/issues/47023) — **22 comments | 4 👍**
Users building 3-tier memory architectures and knowledge graphs request hooks that fire on session compact and transcript access so they can plug in external memory without reinventing the wheel.

### 4. Desktop update deletes session history
[#48334](https://github.com/anthropics/claude-code/issues/48334) — **16 comments | 3 👍**
Updating the desktop app from v2.1.34/2.1.63/2.1.92 to v2.1.101 caused partial or full deletion of `sessions-index.json` and `.jsonl` session files across multiple projects. Data loss severity is high.

### 5. Mousewheel scrolls through input history instead of chat history
[#12953](https://github.com/anthropics/claude-code/issues/12953) — **16 comments | 14 👍**
On Windows TUI, mousewheel event misroutes to input history navigation. Long-standing bug (Dec 2025) with no fix yet.

### 6. ENOSPC false-positive on subprocess output capture (macOS)
[#63909](https://github.com/anthropics/claude-code/issues/63909) — **12 comments | 19 👍**
Bash tool reports “temp filesystem is full (0MB free)” when disk is not full. Commands with output silently lose data; workarounds not reliable. Multiple duplicates exist (#65166, #65915, #65067, #68383).

### 7. Unbounded MCP server fan-out across Cowork/agent sessions panics macOS
[#64366](https://github.com/anthropics/claude-code/issues/64366) — **12 comments | 0 👍**
Every Cowork or agent session spawns a fresh MCP server process; with no limit, an M2 Max/32GB machine experienced 4 kernel panics. Affects both desktop and CLI.

### 8. Opus 4.8 returns empty thinking blocks
[#63358](https://github.com/anthropics/claude-code/issues/63358) — **10 comments | 10 👍**
`claude-opus-4-8` returns thinking blocks with empty `thinking` field, so UI shows nothing. Regression seen in Opus 4.7 previously (#49268). Switching to Sonnet works.

### 9. CLI 2.1.154 breaks with API Error 422 – invalid role “system”
[#63423](https://github.com/anthropics/claude-code/issues/63423) — **8 comments | 2 👍**
The CLI sends a message with role `"system"` which the API rejects. Regression introduced in v2.1.154.

### 10. CLI sends literal `claude-opus-4-7[1m]` as model name on resume
[#60913](https://github.com/anthropics/claude-code/issues/60913) — **5 comments | 4 👍**
Selecting “Opus 4.7 (1M context)” via `/model` causes the CLI to store the display string verbatim, hitting API 404 on resume, then silently falling back to 200K context.

## Key PR Progress
10 important pull requests updated in the last 24 hours.

### 1. fix(triage): don't mark Claude Desktop issues as invalid
[#68678](https://github.com/anthropics/claude-code/pull/68678) — **Merged**
The triage bot was mislabeling Claude Desktop bug reports as invalid because its validity check explicitly excluded “Claude Desktop/Mobile apps”. Now fixed.

### 2. feat(bug-reporter): add `/bug` command to file GitHub issues from terminal
[#68707](https://github.com/anthropics/claude-code/pull/68707) — **Open**
A new plugin that keeps the bug-reporting flow inside the terminal. Auto-collects environment info and opens a structured issue draft. Targets `/feedback` replacement.

### 3. fix(ralph-wiggum): strip control characters before promise comparison
[#68679](https://github.com/anthropics/claude-code/pull/68679) — **Merged**
Ralph-loop’s Stop hook failed to detect `<promise>` tokens when the transcript contained terminal escape sequences. Now strips non-printable chars before matching.

### 4. fix(hookify): load only event:all rules for unknown tools, not all rules
[#68672](https://github.com/anthropics/claude-code/pull/68672) — **Merged**
When a tool name is not Bash/Edit/Write/MultiEdit, the hook engine left `event` as `None`, causing all rules to load. Fixed by initializing `event` to `'all'`.

### 5. fix(hookify): PostToolUse hooks cannot return `permissionDecision: deny`
[#68671](https://github.com/anthropics/claude-code/pull/68671) — **Merged**
The rule engine returned `deny` for both Pre- and Post-ToolUse. PostToolUse should only return `allow`. Fixed to return `None` for PostToolUse.

### 6. fix(workflows): correct pagination break condition and HTTP 2xx status check
[#68681](https://github.com/anthropics/claude-code/pull/68681) — **Merged**
Two workflow bugs: pagination loop broke only on empty page (should break when page < 100), and HTTP status check used `=== 2xx` string comparison instead of numeric range.

### 7. fix(learning-output-style): add bash prefix and normalize plugin root path for Windows
[#68700](https://github.com/anthropics/claude-code/pull/68700) — **Open**
Windows `CLAUDE_PLUGIN_ROOT` contains backslashes; the hook command was invoked as bare path. Added explicit `bash` prefix and path normalization.

### 8. fix(ralph-wiggum): guard PROMPT_PARTS expansion against `set -u` on bash 3.x (macOS)
[#68702](https://github.com/anthropics/claude-code/pull/68702) — **Open**
macOS ships bash 3.2. With `set -euo pipefail`, expanding an empty array trips `nounset`. `/ralph` command now aborts on macOS. Fix: use `${PROMPT_PARTS[@]+"${PROMPT_PARTS[@]}"}`.

### 9. fix(security-guidance): block symlink escape in extensibility config reads
[#68689](https://github.com/anthropics/claude-code/pull/68689) — **Open**
Security plugin reads user config files (`.claude/claude-security-guidance.md`, `.claude/security-patterns.*`) via `open()`. A symbolic link inside `.claude/` could escape the project root. Now resolved with symlink checking.

### 10. fix(hookify): rename shadowed `field` variable and fix inline dict comma parsing
[#68686](https://github.com/anthropics/claude-code/pull/68686) — **Open**
Two bugs: `field` variable shadowed `dataclasses.field` import, and inline dict comma parsing incorrectly treated commas inside strings as field separators.

## Feature Request Clusters
Several recurring enhancement themes emerged from today’s issues:

- **Session & memory management** — Multiple requests for session lifecycle hooks (#47023), archive/delete conversation (#65615), and configurable output limits for hooks (#51537) point to a desire for long-term memory integration without duplicating infrastructure.
- **Model selection flexibility** — Per-message model switching (#68165) and the “thinking block not displayed” regression (#63358) highlight demand for more granular control over which model is used for which turn.
- **UI/UX customization** — VS Code auto-attach disabling (#24726), keybinding overrides being ignored (#64804), and inverted thinking toggle (#49739) show growing need for configurable UI behavior.
- **Desktop app resource management** — Several issues request lightweight modes or manual VM lifecycle control (#29045, #65577, #63330) to reduce memory and disk overhead.

## Developer Pain Points
Frequently reported bugs affecting daily workflows:

- **False ENOSPC on macOS** — At least 6 open/duplicate issues (#63909, #65166, #65915, #65067, #68383, #63330). The Bash tool’s temp filesystem space check uses `statfs().bsize` which can report 0 on some macOS configurations, causing legitimate command output to be silently discarded. Users report intermittent failures across many different commands.
- **Session/data loss** — Desktop app updates delete session history (#48334). Multiple reports of lost work with no recovery path.
- **Unbounded resource growth** — MCP server fan-out across agent sessions (#64366) and VM disk images that never shrink (#65577) can cause system-level crashes or disk exhaustion.
- **Model name parsing regressions** — The CLI sending literal display strings (e.g. `claude-opus-4-7[1m]`) to the API (#60913) and empty thinking blocks on Opus 4.8 (#63358) degrade reliability of model switching.
- **Windows compatibility gaps** — Plugins break due to backslash paths (#68700), CRLF newlines (#68701), and Python stub conflicts (#68699). The influx of PRs from @AZERDSQ131 specifically targeting Windows normalization indicates recent plugin features were not thoroughly tested on that platform.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-16

## Today's Update Brief

Two alpha releases (0.141.0-alpha.1 and .2) and a stable v0.140.0 landed in the last 24 hours, introducing token usage views, oversized-text/image preservation in `/goal`, and permanent session deletion. Community activity remains high: the top‑30 issues list was updated with 50 total items, and 50 pull requests saw activity, including several cross‑OS path‑handling fixes and a new interruptible sleep tool for models.

## Releases

| Version | Summary |
|---------|---------|
| **rust‑v0.141.0‑alpha.2** | Alpha release (no changelog in commit). |
| **rust‑v0.141.0‑alpha.1** | Alpha release. |
| **rust‑v0.140.0** | **New Features**: `/usage` views (daily/weekly/cumulative token activity); `/goal` now preserves oversized text, large pasted blocks, and image attachments (including remote app‑server sessions); permanent session deletion added (partial feature). |
| rust‑v0.140.0‑alpha.22 / .21 / .20 | Pre‑release alphas. |

## Hot Issues (10 of 30 most discussed)

1. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**
   **Workflow**: macOS app users forced to Linux due to a previous issue (#10432). **Impact**: 583 👍, 112 comments – high demand for native Linux support. Community is actively discussing workarounds and potential Linux packaging.

2. **[#12661 – Markdown `file://` links open in default browser instead of VS Code](https://github.com/openai/codex/issues/12661)**
   **Workflow**: Clicking a local `.md` link in Codex extension output opens Edge, breaking the VS Code editor workflow. **Impact**: Windows users lose context switching. 47 comments, moderate upvotes.

3. **[#18960 – Frequent reconnect loop in Codex App](https://github.com/openai/codex/issues/18960)**
   **Workflow**: Streaming responses abort mid‑completion with WebSocket closure. **Impact**: Pro subscribers unable to finish long tasks. 42 comments, 33 👍. Several similar reports (e.g., #28295) suggest a broader connectivity incident.

4. **[#3355 – Error after MacBook sleep](https://github.com/openai/codex/issues/3355)**
   **Workflow**: Long‑running CLI tasks (≥30 seconds) fail when lid is closed. **Impact**: Repeated 37 comments over 9 months; still open. Users report needing to restart sessions after sleep.

5. **[#21527 – Codex is really too slow](https://github.com/openai/codex/issues/21527)**
   **Workflow**: Both VS Code extension and Desktop app exhibit high per‑turn latency. **Impact**: Strong negative sentiment (32 comments, 17 👍). No maintainer response yet.

6. **[#25719 – macOS `syspolicyd` / `trustd` CPU runaway](https://github.com/openai/codex/issues/25719)**
   **Workflow**: Codex Desktop triggers system daemon CPU/memory spikes. **Impact**: Mac users unable to keep the app open. 26 comments, 33 👍. A related report (#28071) suggests the issue persists in the latest build.

7. **[#27817 – False positive cybersecurity flag on finance/tax work](https://github.com/openai/codex/issues/27817)**
   **Workflow**: Normal tax filing conversations blocked by safety check. **Impact**: Blocks authorized, non‑security work. 18 comments; another similar issue (#28015) for CLI.

8. **[#28094 – WSL project paths rewritten to `C:\` under Windows Desktop](https://github.com/openai/codex/issues/28094)**
   **Workflow**: Desktop app treats `/home/project` as `C:\home\project`, losing project associations in WSL. **Impact**: Windows + WSL developers cannot use project chat features. 13 comments, likely under‑reported.

9. **[#25709 – Windows Desktop sluggish after update](https://github.com/openai/codex/issues/25709)**
   **Workflow**: App becomes near‑unusable post‑update; user suspects Windows Firewall interaction. **Impact**: 9 comments, 2 👍. Related to #27240 (WSL agent latency).

10. **[#28435 – Windows Computer Use install entry missing](https://github.com/openai/codex/issues/28435)**
    **Workflow**: Only Chrome listed in Computer Use settings; no install option. **Impact**: Blocks Windows users from Computer Use features. Created 16 hours ago, already 3 comments.

## Key PR Progress (10 of 20 most active)

1. **[#28421 – Bind shell snapshots to retained thread environments](https://github.com/openai/codex/pull/28421)**
   Moves shell snapshot storage from session‑scope to environment‑scope, allowing retained environments to keep snapshot work across turns.

2. **[#28429 – Add interruptible sleep tool](https://github.com/openai/codex/pull/28429)**
   New built‑in `sleep` tool (behind `sleep_tool` feature) so models can pause without blocking on a shell process. Interruptible on new turn input.

3. **[#28307 – Queue TUI follow‑ups through app‑server](https://github.com/openai/codex/pull/28307)**
   TUI now durably queues user messages via app‑server while a turn is running, improving reliability of follow‑ups.

4. **[#27982 – Start Guardian child session during parent init](https://github.com/openai/codex/pull/27982)**
   Creates Guardian (auto‑review) child at session start instead of on first review, reducing latency by leveraging WebSocket pre‑warm.

5. **[#20702 – Support `PreToolUse permissionDecision` ask](https://github.com/openai/codex/pull/20702)**
   Allows pre‑use hooks to escalate tool calls to human approval without weakening core policy. Closed and merged.

6. **[#28426 – Share resumed rollout history](https://github.com/openai/codex/pull/28426)**
   Eliminates multiple deep‑clones of rollout history when resuming threads, reducing memory pressure for long sessions.

7. **[#26334 – Retry transient Guardian reviewer failures](https://github.com/openai/codex/pull/26334)**
   Distinguishes infrastructure failures from policy denials; retries capacity, rate‑limit, and timeout errors before blocking an action. Closed.

8. **[#28034 – Add local credential broker](https://github.com/openai/codex/pull/28034)**
   Extends network proxy feature to inject real credentials only on MITM‑matched requests, keeping dummy tokens in child processes. Improves security for sandboxed execution.

9. **[#28367 – Use ApiPathString in app‑server filesystem permission paths](https://github.com/openai/codex/pull/28367)**
   Supports cross‑OS path representation (e.g., Windows paths on a Linux app‑server host) without exposing `PathUri` to users. Closed.

10. **[#28425 – Carry fork lineage in initial history](https://github.com/openai/codex/pull/28425)**
    Adds `ForkedHistory` alongside `ResumedHistory` to avoid relying on fallback plumbing for fork ancestry.

## Feature Request Clusters

- **Native Linux Desktop App** – The long‑standing request (#11023) remains the most upvoted and commented issue (583 👍). No official response yet.
- **Computer Use on Windows** – Multiple issues (#28435, #27046) report missing installation entries, broken remote file viewers, and UI problems. Suggests Windows Computer Use is not fully released.
- **Safety Check Tuning** – Two false‑positive cybersecurity flags (#27817, #28015) on legitimate finance/DevOps work. Users want per‑domain allow‑lists or better context awareness.

## Developer Pain Points

- **Performance degradation across platforms** – Several issues (macOS `syspolicyd`, Windows WSL latency, general slowness) indicate recent builds have introduced regressions in responsiveness and resource usage.
- **Cross‑OS path handling** – Windows + WSL path rewriting (#28094, #28152, #28146) and remote execution environment CWD mismatches are a recurring frustration for multi‑OS setups.
- **Session continuity** – Reconnect loops (#18960), sleep‑induced failures (#3355), and hidden resume sessions (#28263, #28423) disrupt long‑running workflows.
- **Missing Linux app** – Despite high demand, no official Linux desktop build or timeline has been announced.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-16

## Today's Update Brief

Activity remains high with 50 open issues and 27 PRs updated in the last 24 hours, though no new releases were published. The community continues to surface agent reliability bugs (hangs, misreported success states, subagent permission bypasses) while maintainers are actively merging security-focused PRs around SSRF protection and MCP OAuth hardening. Several dependency bumps and a critical nightly release CI fix also landed today.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#24353 — Robust component level evaluations** [OPEN, priority/p1]
   EPIC tracking the expansion of behavioral eval tests from the original 76 tests across 6 supported Gemini models. Requesting a more structured framework for component-level rather than end-to-end tests.
   https://github.com/google-gemini/gemini-cli/issues/24353

2. **#22745 — AST-aware file reads, search, and mapping** [OPEN, priority/p2]
   Tracks investigation into whether AST-aware tools (for reading method bounds, navigating code) reduce turn count, token noise, and improve precision. Community upvoted (1 👍).
   https://github.com/google-gemini/gemini-cli/issues/22745

3. **#21409 — Generalist agent hangs indefinitely** [OPEN, priority/p1]
   Agent hangs forever when deferring to the generalist subagent for simple operations like folder creation. Workaround exists (instruct model not to use subagents). 8 👍, highest community engagement on any issue.
   https://github.com/google-gemini/gemini-cli/issues/21409

4. **#22323 — Subagent recovery after MAX_TURNS reported as GOAL success** [OPEN, priority/p1]
   `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even though it hit the maximum turn limit before doing any analysis. Misleading status hides real interruption.
   https://github.com/google-gemini/gemini-cli/issues/22323

5. **#21968 — Gemini does not use skills and sub-agents enough** [OPEN, priority/p2]
   Custom skills and sub-agents are not being invoked autonomously despite relevant descriptions (gradle, git). Only works if user explicitly instructs the model. Indicates gap in tool selection heuristics.
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#26525 — Add deterministic redaction and reduce Auto Memory logging** [OPEN, priority/p2]
   Auto Memory reads local transcripts and sends content to the extraction model before redaction occurs. Secrets could leak into model context before sanitization. Also requests reduced debug logging.
   https://github.com/google-gemini/gemini-cli/issues/26525

7. **#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely** [OPEN, priority/p2]
   Sessions remain "unprocessed" if the extraction agent decides not to read them (low signal), causing repeated re-surfacing. No mechanism to mark sessions as reviewed-and-skipped.
   https://github.com/google-gemini/gemini-cli/issues/26522

8. **#25166 — Shell command execution gets stuck with "Waiting input" after command completes** [OPEN, priority/p1]
   Simple CLI commands complete but the terminal still shows the shell as active and awaiting user input. 3 👍, multiple reporters confirming the behavior across different platforms.
   https://github.com/google-gemini/gemini-cli/issues/25166

9. **#21983 — Browser subagent fails in Wayland** [OPEN, priority/p1]
   Browser agent terminates with "GOAL" status but actually fails silently on Wayland display servers. No specific error surface in user output.
   https://github.com/google-gemini/gemini-cli/issues/21983

10. **#27615 — Mac Cmd+Backspace deletes entire input without undo** [CLOSED (possible duplicate)]
    Mac keyboard shortcut behavior differs from expected: entire input deleted at once rather than last word. No undo (Cmd+Z) support. User requested standard Mac behavior or at least undo capability.
    https://github.com/google-gemini/gemini-cli/issues/27615

## Key PR Progress

1. **#27956 — Support GDC air-gapped Service Identity** [OPEN, size/m, area/security]
   Adds token exchange support for GDCH air-gapped environments, passing the `universe_domain` parameter after the underlying `google-auth-library` v10.7.0 update.
   https://github.com/google-gemini/gemini-cli/pull/27956

2. **#27572 — Fix tmux false positive background detection** [CLOSED, size/m]
   Regressed theme switching when running inside tmux (especially via mosh) due to incorrect `#ffffff` terminal background detection. Adds workaround for tmux-reported color values.
   https://github.com/google-gemini/gemini-cli/pull/27572

3. **#27603 — Add platform-aware shell guidance** [CLOSED, size/m, area/agent]
   Windows-specific inspection commands now included in the operational prompt instead of Unix-only examples. Fixes #27751.
   https://github.com/google-gemini/gemini-cli/pull/27603

4. **#27626 — Block private OAuth metadata URLs** [CLOSED, size/m, area/security]
   SSRF protection for MCP OAuth metadata discovery. Previously `fetch()` was called directly on OAuth metadata URLs that could come from remote MCP servers without validation.
   https://github.com/google-gemini/gemini-cli/pull/27626

5. **#27605 — Use consolidated MCP server lists in ACP and policy-engine paths** [CLOSED, size/s]
   Backfills the ACP and policy-engine code paths to use the consolidated allow/block lists (union/intersect across workspace scopes), closing the bypass vector where workspace settings could drop user-level entries.
   https://github.com/google-gemini/gemini-cli/pull/27605

6. **#27744 — Resolve DNS before SSRF guard to block hostname-to-private-IP bypass** [OPEN, size/m, size/l]
   `isBlockedHost()` was synchronous and only checked IP-literal hostnames. This PR adds DNS resolution before the SSRF check to catch wildcard DNS services (`127.0.0.1.nip.io`, `169.254.169.254` equivalents).
   https://github.com/google-gemini/gemini-cli/pull/27744

7. **#27739 — Prevent SSRF via DNS hostnames and redirects** [OPEN, size/m, size/l]
   Companion PR to #27744. Addresses redirect chain SSRF where an external redirect returns a private IP after the initial `isBlockedHost` check passes.
   https://github.com/google-gemini/gemini-cli/pull/27739

8. **#27954 — Bump OpenTelemetry dependencies** [OPEN, size/l, area/core]
   Dependabot batch update touching 15 OpenTelemetry packages including core, SDK trace, metrics, logs, and export paths.
   https://github.com/google-gemini/gemini-cli/pull/27954

9. **#27948 — Pin dependencies and enforce 14-day update cooldown** [OPEN, size/xl]
   Strips `^` and `~` ranges from all dependency fields across the monorepo, enforcing exact version pinning with a 14-day cooldown for automated updates. High-impact change for supply chain security.
   https://github.com/google-gemini/gemini-cli/pull/27948

10. **#27943 — Fix defensive path resolution for @-reference files** [OPEN, size/m, size/l]
    Files referenced via `@policies/new-policies.txt` syntax fail with "File not found" when tools attempt to read/write them. Root cause is `path.resolve` not matching the initial reference resolution.
    https://github.com/google-gemini/gemini-cli/issues/27943

## Feature Request Clusters

- **AST-aware tooling** (Issues #22745, #22746, #22747): Multiple EPICs and child issues propose replacing naive file reads/searches with AST-aware CLI tools (tilth, glyph, AST grep) to improve token efficiency and mapping accuracy for codebase navigation.

- **Agent self-awareness and configuration** (Issue #21432, part of #22745 EPIC): Requests for the agent to accurately describe its own CLI flags, hotkeys, and configuration options to end users, effectively turning itself into its own documentation source.

- **Auto Memory system quality** (Issues #26525, #26522, #26523, #26516): A cluster of related bugs around the Auto Memory feature: secret redaction timing, indefinite retry of low-signal sessions, silent skipping of invalid patches, and general quality tracking.

## Developer Pain Points

- **Agent reliability failures**: Hangs (#21409), misreported success states (#22323), subagents running without permission after v0.33.0 (#22093), and ignored settings.json overrides (#22267) — together these form the most active category of bug reports.

- **Destructive behavior concerns**: Multiple reports (#22672, #23571) about the model using `git reset`, `--force` flags, or scattering temporary scripts across the filesystem when safer alternatives exist.

- **Security and data leakage gaps**: The Auto Memory system sending content to model context before redaction (#26525), combined with SSRF vulnerabilities being patched today (#27626, #27744, #27739), indicates ongoing work to lock down data flows.

- **High memory usage and crashes**: Issue #27938 reports crashes under heavy GC pressure (>24 GB heap), and #22186 documents crashes specifically in the "get-shit-done" output hook during summary generation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-16

## Today's Update Brief

A new patch release (v1.0.63) shipped yesterday with improved error messaging for blocked image attachments and alphabetically sorted `--help` output. Issue activity remains high (44 total items, 12 updated in the last 24 hours), with several critical regressions from v1.0.60–v1.0.62 now closed. One new pull request was opened today.

---

## Releases

### v1.0.63 (2026-06-15)
- **Blocked image attachments** now display a descriptive error message with three actionable paths: enable vision via the "Editor preview features" policy, switch to a vision-capable model, or try a different image — instead of showing a confusing generic error.
- `--help` output options now sort alphabetically.

### v1.0.63-0 (pre-release, same day)
- **Added**: Press `w` in `/diff` to hide whitespace-only changes.
- **Added**: `deferTools` option in MCP server config — keeps a server's tools always available even when tool search is enabled.
- **Improved**: Reliability of OpenAI, Anthropic, and Azure OpenAI request handling.
- **Experimental**: `/rewind` no longer (description truncated in source data).

---

## Hot Issues

### 1. [#953 — Over-excessive permissions during authentication](https://github.com/github/copilot-cli/issues/953)
**Area**: authentication, permissions, enterprise
**Workflow**: When authenticating, the CLI requests Read/Write access to every repo and GitHub resource, even when a user only needs access to a single repository.
**Impact**: Enterprise users cannot scope the AI’s permissions granularly. Community requests for repo-level or org-level scoping controls. **7 comments, 3 👍**.

### 2. [#3727 — Regression: `additionalContext` from `userPromptSubmitted` hook no longer injected (v1.0.60)](https://github.com/github/copilot-cli/issues/3727)
**Area**: context-memory, plugins
**Workflow**: Plugins using the `userPromptSubmitted` hook to inject additional context into the planner worked in v1.0.59 but broke in v1.0.60.
**Impact**: Plugin authors cannot customize prompt context. **4 comments**. Remains open.

### 3. [#3282 — Add multiple BYOK model capability](https://github.com/github/copilot-cli/issues/3282)
**Area**: models, configuration
**Workflow**: Currently, only a single Bring-Your-Own-Key model can be configured via env var; switching models requires terminating the session.
**Impact**: Power users with multiple custom endpoints cannot switch between them in the TUI. **3 comments, 8 👍** — highest 👍 count among open issues.

### 4. [#3781 — Session unrecoverable after pasting image with non-multimodal model (CLOSED)](https://github.com/github/copilot-cli/issues/3781)
**Area**: sessions, models
**Workflow**: Pasted images on a non-vision model cause every subsequent prompt to fail with HTTP 400. Manual `events.jsonl` editing was the only workaround.
**Impact**: Session corruption requires user intervention. **Closed** — likely fixed in v1.0.63.

### 5. [#3756 — Third-party MCP servers blocked by org policy — duplicate of #1707 (CLOSED)](https://github.com/github/copilot-cli/issues/3756)
**Area**: enterprise, MCP
**Workflow**: Enterprise orgs enforce a Copilot policy that disables third-party MCP servers. Users see a blocking error regardless of their local config.
**Impact**: Enterprise adopters cannot use custom MCP servers. Marked as a duplicate.

### 6. [#3776 — UTF-8 text turns to mojibake when pasted from WSL/Ubuntu terminal to Windows](https://github.com/github/copilot-cli/issues/3776)
**Area**: input-keyboard, platform-windows
**Workflow**: Copilot CLI displays Slovak/Czech characters correctly in-terminal, but pasting the output into Windows applications or back into the prompt produces garbled text.
**Impact**: Cross-platform workflow friction for non-English users. **2 comments**.

### 7. [#3784 — Tokio reactor panic on Linux ARM64 after first message (CLOSED)](https://github.com/github/copilot-cli/issues/3784)
**Area**: platform-linux
**Workflow**: CLI starts normally on ARM64, but submitting a prompt causes an abort (exit 134) with a debug log line about WebSocket send.
**Impact**: ARM64 Linux users cannot use v1.0.62-1. **Closed** — likely patched.

### 8. [#3769 — Copilot CLI output has thread problems / mangled rendering (CLOSED)](https://github.com/github/copilot-cli/issues/3769)
**Area**: terminal-rendering
**Workflow**: Output in Agency mode appears mangled until response completion. Example included a screenshot of garbled rendering.
**Impact**: Affects readability during streaming. **2 comments, 3 👍**. Closed.

### 9. [#3716 — Regression: Function call fails with JSON schema validation error (CLOSED)](https://github.com/github/copilot-cli/issues/3716)
**Area**: models, tools
**Workflow**: Starting v1.0.60, tool function calls return a `$ref` validation error in "moonshot flavored json schema".
**Impact**: Blocks tool-using workflows. **Closed** — likely fixed.

### 10. [#3813 — Garbled text when pasting from VS Code Terminal (Japanese)](https://github.com/github/copilot-cli/issues/3813)
**Area**: input-keyboard, terminal-rendering
**Workflow**: Similar to #3776 but specific to VS Code Terminal on macOS with Japanese text. iTerm2 works correctly.
**Impact**: Non-English users on VS Code Terminal cannot copy output. **1 comment, newly opened**.

---

## Key PR Progress

**Only one PR was active in the last 24 hours:**

### [#3817 — kCreate "#" (OPEN)](https://github.com/github/copilot-cli/pull/3817)
**Author**: @edge500
**Description**: Appears to be a spam/test PR with minimal content ("aquellos"). No meaningful code changes. **No comments, 0 👍**.

---

## Feature Request Clusters

### BYOK / Custom Model Enhancements
Multiple requests center on improving Bring-Your-Own-Key model support:
- **Multi-model switching in TUI** (#3282, 8 👍)
- **Custom HTTP headers for BYOK endpoints** (#3399, 2 👍) — users need `X-Tenant-ID` or similar for enterprise LLM gateways.

### Session Management
- **Built-in tooling for managing concurrent sessions** (#2966) — power users running `--yolo --autopilot` across multiple repos need first-class multi-session management.
- **Session search by message content** (#3807) — `--resume` only matches session name and ID, not internal conversation text.
- **Unified history with VS Code Copilot Chat** (#3816) — CLI’s `/chronicle` does not ingest VS Code Chat sessions.

### Permission & Access Control
- **Granular OAuth scoping** (#953) — users want to restrict AI access to specific repos/orgs rather than full account read/write.

### Prompt Caching
- **Explicit prompt caching for Claude Sonnet** (#3808) — users want Anthropic’s caching optimization to reduce latency/cost on repeated context.

---

## Developer Pain Points

### Terminal Rendering & Encoding Issues
- **Mangled streaming output** (#3769, closed)
- **Repeated character clusters** during model streaming (#3780, closed)
- **Mojibake / garbled text when copying-pasting across platforms** (#3776, #3813) — especially affecting non-English languages.

### Regression Bugs After v1.0.60
- Hook plugin `additionalContext` dropped (#3727)
- Function call schema validation failure (#3716, closed)
- MCP stdio server infinite respawn loop (#3782, closed)
- Session wedge from oversized attachments (#3767, closed)
- `/chronicle standup` returns empty due to SQLite/DuckDB syntax mismatch (#3775, closed)

### Error Handling & Recovery Gaps
- Non-recoverable session after image paste on non-vision model (#3781, closed)
- No backoff on MCP server restart (#3782, closed)
- Deleted sessions still visible in `/chronicle` insights (#3811)
- `--resume` fails on case-sensitive repo name mismatch (#3694, closed)

### MCP / Enterprise Policy Blocks
- Third-party MCP servers silently blocked by org policy (#3756)
- Subagents losing access to MCP tools (#3812) — possibly related to deferred loading changes in recent releases.

---

*Data collected from github.com/github/copilot-cli issues, PRs, and releases updated as of 2026-06-16T00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-16

## Today's Update Brief

Activity remains moderate with no new releases but two pull requests addressing long-standing bugs related to session continuation and hook handling. Four open issues were updated, including a new high-risk compaction error and a proxy detection gap. No major feature announcements or breaking changes.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#2402] Error: [compaction.failed] APIStatusError: 400 — request rejected as high risk**
   *Affected workflow:* Compaction operation during conversation management.
   *Impact:* User on Windows (Kimi CLI 0.6.0, model Kimi-k2.6) receives a 400 error; compaction is cancelled. Risk classification suggests potential abuse-detection false positive.
   *Community reaction:* No upvotes; only author comments.
   🔗 [https://github.com/MoonshotAI/kimi-cli/issues/2402](https://github.com/MoonshotAI/kimi-cli/issues/2402)

2. **[#2303] UserPromptSubmit hook receives empty prompt when input comes from shell UI**
   *Affected workflow:* Custom hooks (e.g., regex-based triggers) used in interactive mode.
   *Impact:* `UserPromptSubmit` always receives `"prompt": ""` and empty `matcher_value`, breaking any hook logic that depends on actual user input. Affects macOS, model kimi-for-coding.
   *Community reaction:* One comment; no upvotes. A fix PR (#2454) was opened today.
   🔗 [https://github.com/MoonshotAI/kimi-cli/issues/2303](https://github.com/MoonshotAI/kimi-cli/issues/2303)

3. **[#2222] `kimi --continue` reports “No previous session found” despite visible history**
   *Affected workflow:* Session resumption via `--continue` flag.
   *Impact:* Running plain `kimi` in the same directory shows previous conversation, but `-C` fails. User on Windows (Kimi CLI 1.41.0, model k2.6).
   *Community reaction:* One comment; no upvotes. PR #2453 provides a fix.
   🔗 [https://github.com/MoonshotAI/kimi-cli/issues/2222](https://github.com/MoonshotAI/kimi-cli/issues/2222)

4. **[#2455] FetchURL does not read system proxy; fails behind firewall**
   *Affected workflow:* Tool calls that fetch external URLs.
   *Impact:* In a proxied/censored environment, `FetchURL` ignores system proxy settings, while `Shell`/`curl` work normally. User on Linux (WSL2) using K2.7 Code.
   *Community reaction:* No comments yet (opened yesterday).
   🔗 [https://github.com/MoonshotAI/kimi-cli/issues/2455](https://github.com/MoonshotAI/kimi-cli/issues/2455)

## Key PR Progress

1. **[#2454] fix(hooks): pass prompt text to UserPromptSubmit from structured input**
   *Fixes:* #2303.
   *Change:* In `KimiSoul._turn`, the hook text derivation now correctly extracts the plain-text prompt from structured input instead of defaulting to empty string. Regex-based hooks should now trigger as expected.
   *Author:* @logicwu0
   🔗 [https://github.com/MoonshotAI/kimi-cli/pull/2454](https://github.com/MoonshotAI/kimi-cli/pull/2454)

2. **[#2453] fix(session): resume latest session when last_session_id is missing**
   *Fixes:* #2222.
   *Change:* `Session.continue_` previously depended on `work_dir + last_session_id`; now falls back to scanning for the most recent session in the working directory when the ID is missing, aligning with the behaviour of plain `kimi`.
   *Author:* @logicwu0
   🔗 [https://github.com/MoonshotAI/kimi-cli/pull/2453](https://github.com/MoonshotAI/kimi-cli/pull/2453)

## Feature Request Clusters

No feature requests were updated in today’s data. All tracked issues are bug reports or regression fixes.

## Developer Pain Points

- **Session resumption inconsistency:** Users on multiple platforms report that `kimi --continue` fails even when history exists, forcing manual workarounds.
- **Hook reliability in interactive mode:** Custom prompt-processing hooks silently break in shell UI, undermining automation and tool integration.
- **Network isolation gaps:** The CLI’s `FetchURL` tool does not honour system proxy settings, creating a split‑environment problem for developers behind corporate or regional firewalls.
- **False-positive risk classification:** A compaction request was rejected as “high risk” with a 400 error, suggesting overly aggressive abuse detection that can block legitimate usage.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-16

## Today’s Update Brief

Activity remains high with 50+ issues and 50+ pull requests updated in the last 24 hours, though no new releases were published. The community is actively discussing memory management, sandboxing, session goals, and MCP integration. Several billing and sandbox-related issues continue to generate heat, while PRs focus on bug fixes and incremental feature additions.

## Releases

None in the last 24 hours.

---

## Hot Issues

1. [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)
   *Comments: 97 · 👍 65*
   Central memory issue tracking. Maintainers ask for heap snapshots, not LLM-generated solutions. Workflow: high memory use during agent sessions. Community actively contributing snapshots.

2. [#2242 Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242)
   *Comments: 69 · 👍 53*
   Requests file/directory access restrictions for terminal commands. Users compare with Gemini CLI and Codex CLI seatbelt. No official sandboxing feature yet.

3. [#27167 [FEATURE] Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)
   *Comments: 49 · 👍 84*
   Proposal for persistent session goals/lifecycle via a `/goal` command. High demand. Workflow: currently no built-in way to track session objectives.

4. [#6930 Using OpenCode with Anthropic OAuth violates ToS & Results in Ban](https://github.com/anomalyco/opencode/issues/6930)
   *Comments: 22 · 👍 14*
   User banned after upgrading Claude Max subscription via OAuth. Workflow: Anthropic OAuth integration perceived as risky. Community concerned about account bans.

5. [#27906 v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906)
   *Comments: 18 · 👍 13*
   Postinstall lifecycle scripts required, but Bun blocks them by default for global packages. Blocks Bun users from installing/updating OpenCode.

6. [#5374 [FEATURE] Show tokens/second](https://github.com/anomalyco/opencode/issues/5374)
   *Comments: 17 · 👍 81*
   Request for real-time token throughput display to compare providers/models. High community interest.

7. [#28567 [FEATURE] Full MCP client capabilities](https://github.com/anomalyco/opencode/issues/28567)
   *Comments: 14 · 👍 22*
   OpenCode’s MCP implementation lags behind the latest spec (e.g., missing `instructions`, `resource subscriptions`, `roots`). Community wants parity.

8. [#28957 [BUG] "Upstream idle timeout exceeded"](https://github.com/anomalyco/opencode/issues/28957)
   *Comments: 14 · 👍 0*
   Idle timeout errors when using "writing-plans" skill on macOS Tahoe. Infrastructure-level error, not clear if client or provider side.

9. [#19252 Build command freezes; AI does not continue after completion](https://github.com/anomalyco/opencode/issues/19252)
   *Comments: 10 · 👍 7*
   Agent executes build but then hangs indefinitely. Workflow: task completes but AI stalls. Users report on v1.3.2.

10. [#30869 bash.ts: hardcoded UTF-8 produces garbled output on non-UTF-8 systems](https://github.com/anomalyco/opencode/issues/30869)
    *Comments: 5 · 👍 1*
    On Windows with CJK locales, error messages (e.g., from compilers) are decoded as UTF-8 when they are actually GBK, producing garbled output.

---

## Key PR Progress

1. [#32499 fix(opencode): allow clearing session archive time](https://github.com/anomalyco/opencode/pull/32499)
   Adds ability to cancel session archiving. Closes #24153.

2. [#29150 fix(opencode): break auto-compact loop when compaction makes no progress](https://github.com/anomalyco/opencode/pull/29150)
   Prevents infinite auto-compaction when provider context limit is smaller than actual. Closes #28543.

3. [#32494 fix(opencode): include pr identity in github context](https://github.com/anomalyco/opencode/pull/32494)
   Adds PR number and URL to `<pull_request>` context from `opencode github run`. Fixes #32233.

4. [#31645 feat(cli): add progress feedback to upgrade command](https://github.com/anomalyco/opencode/pull/31645)
   Shows real-time download/install progress during `opencode upgrade`. Closes #31623.

5. [#32490 feat(mcp): append server instructions to context](https://github.com/anomalyco/opencode/pull/32490)
   Appends MCP server `InitializeResult.instructions` to session context. Part of MCP revision (refs #28567).

6. [#31644 fix(acp): register compact and summarize commands for visibility](https://github.com/anomalyco/opencode/pull/31644)
   Makes `/compact` and `/summarize` appear in autocomplete and `/help`. Closes #31636.

7. [#29006 docs(ecosystem): add opencode-datarobot-skills plugin](https://github.com/anomalyco/opencode/pull/29006)
   Documents a new plugin published on npm.

8. [#32489 fix(opencode): sanitize OpenAI MCP tool schemas](https://github.com/anomalyco/opencode/pull/32489)
   Strips unsupported JSON Schema keywords from MCP tool schemas for OpenAI compatibility. Fixes #32488.

9. [#28466 fix(opencode): ignore MCP resource file downloads](https://github.com/anomalyco/opencode/pull/28466)
   Prevents downloaded MCP resources from being tracked as project files. Closes #14753, #8920, #29245. (Closed/merged)

10. [#27673 fix(app): treat localhost HTTP servers as non-local for desktop workspace picking](https://github.com/anomalyco/opencode/pull/27673)
    Fixes workspace selection when Desktop connects to a server running in WSL. Closes #27674. (Closed/merged)

---

## Feature Request Clusters

- **Sandboxing & Permissions**
  Multiple requests for restricting agent file access and command execution (#2242, #16914). Community wants seatbelt-like functionality for macOS/Linux/Windows.

- **Session Goals & Lifecycle**
  #27167 proposes persistent session goals via `/goal`. Related requests include agent-scoped skill loading (#19344) and better session management (#27774 PR).

- **Performance Metrics**
  #5374 (tokens/second) and #21345 (reduce context token waste) show demand for transparency in token usage and latency.

- **MCP Parity**
  #28567 requests full MCP client support (instructions, resource subscriptions, roots). PR #32490 starts implementing server instructions.

- **Cost & Billing Visibility**
  #32487 (PR) adds configurable cost display currency. Issues #32420, #32482, #32466 highlight billing activation failures.

- **Tool & Model Awareness**
  #32457 suggests adding tool capabilities to system prompt so AI can answer accurately about its own features.

---

## Developer Pain Points

- **Memory Bloat** – #20695 megathread centralizes reports of high memory consumption. Community actively collecting heap snapshots.
- **Billing & Subscription Failures** – Several users (#32420, #32482, #32466) report paying for OpenCode Go but subscription not activating, with no response from support.
- **Timeout & Freeze Issues** – “Upstream idle timeout” errors (#28957, #31456) and build command freezing (#19252) disrupt workflows. Affects multiple models and skills.
- **Platform-Specific Bugs** – Bun install broken (#27906), non-UTF-8 garbled output on Windows (#30869), false positive antivirus detection (#32350). Each blocks a subset of users.
- **Provider Compatibility** – Anthropic OAuth bans (#6930) and DeepSeek V4-Pro silent failures (#28955) erode trust in provider integrations.
- **Sandboxing Still Missing** – #2242 (69 comments) remains unresolved, limiting use in shared or CI environments.
- **MCP Implementation Behind Spec** – #28567 highlights missing features; users may need to wait for full MCP client revision.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-16

## 1. Today's Update Brief

Several patch releases shipped today, including a stable v0.18.1 with a new daemon opt-in for direct session shell, and a desktop update (v0.0.4) fixing MCP server removal persistence. Community activity remains high: 34 issues and 50 pull requests were updated in the last 24 hours, with a notable surge in `/loop` alignment work (11 related issues/PRs) and continued reports of terminal flicker, OOM on `/quit`, and model-provider disambiguation problems.

## 2. Releases

Four version events landed in the past 24 hours:

- **[v0.18.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1)** — Stable release featuring `feat(daemon): gate direct session shell behind explicit opt-in` by @doudouOUC, plus the v0.18.0 release chore.
- **[v0.18.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-preview.0)** — Preview containing the oversized-context-instructions warning fix (by @he-yufeng) and documentation corrections for stale defaults, CLI syntax, and tool naming.
- **[v0.18.1-nightly.20260616.a68b2e1e7](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-nightly.20260616.a68b2e1e7)** — Nightly build carrying the same two fixes as the preview.
- **[desktop-v0.0.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.0.4)** — Desktop client update including `fix(cli): persist MCP server removals` and `fix(models): refresh raw model-derived defaults` by @Jerry2003826.

## 3. Hot Issues (10 selected)

1. **Virtualized History Mode makes history invisible** ([#5142](https://github.com/QwenLM/qwen-code/issues/5142)) — `OPEN`, 4 comments. In virtualized history mode, the input box disappears from the bottom and history only appears when pressing `/`. Affects keyboard-driven workflows heavily.

2. **Model list includes discontinued OAuth model when OAuth is not configured** ([#5160](https://github.com/QwenLM/qwen-code/issues/5160)) — `OPEN`, 3 comments. Running `/model` shows `qwen-oauth coder-model` (discontinued) as the first selectable entry even when the user has no OAuth provider configured, which is confusing and adds friction.

3. **Model provider disambiguation fails when multiple providers share the same model id** ([#5173](https://github.com/QwenLM/qwen-code/issues/5173)) — `OPEN`, 2 comments. If multiple `modelProviders.openai` entries register the same model id (e.g., `qwen3.7-max`) with different `baseUrl` values, the model picker does not persist the selection across sessions.

4. **OOM after /quit when managed auto-memory builds transcript from large text-only history** ([#5147](https://github.com/QwenLM/qwen-code/issues/5147)) — `OPEN`, 2 comments. Short sessions with large text histories can still hit V8 heap OOM on `/quit` despite earlier `structuredClone` fixes. Suspected root cause is the managed auto-memory background task.

5. **Trackpad scroll in tmux session triggers prompt history instead of viewport scrolling** ([#5159](https://github.com/QwenLM/qwen-code/issues/5159)) — `OPEN`, 2 comments. On macOS inside tmux, scrolling with a trackpad cycles through previous prompts (same as Up/Down arrow) instead of scrolling the conversation viewport. Blocks review of long conversations.

6. **exit_plan_mode fails with empty plan parameter, causing wasted retry turns** ([#5177](https://github.com/QwenLM/qwen-code/issues/5177)) — `OPEN`, 1 comment. The model sometimes calls `exit_plan_mode` with an empty plan, which fails validation and triggers the model to retry and waste 2–3 turns before succeeding.

7. **Discussion: does the cli-entry.js --expose-gc wrapper earn the extra process?** ([#5154](https://github.com/QwenLM/qwen-code/issues/5154)) — `OPEN`, 1 comment. A design discussion about whether the `--expose-gc` wrapper introduces enough value to justify the additional process overhead; unblocked by PR #5153.

8. **Cannot stop Qwen after rejecting a command** ([#3153](https://github.com/QwenLM/qwen-code/issues/3153)) — `OPEN`, 1 comment. If the user rejects a tool execution (e.g., a Python script), the model may continue suggesting the same action in a loop. Affects interactive troubleshooting sessions.

9. **Plan mode causes continuous screen flicker in Ghostty terminal** ([#3979](https://github.com/QwenLM/qwen-code/issues/3979)) — `OPEN`, 2 comments. Under plan mode, the Ghostty terminal flickers continuously after Qwen Code finishes a response. Reported on macOS arm64 with v0.15.6.

10. **Screen flicker in Tabby terminal on macOS** ([#3949](https://github.com/QwenLM/qwen-code/issues/3949)) — `OPEN`, 0 comments. Similar flickering issue in the Tabby terminal emulator; appears to be a repaint-loop problem affecting several terminal emulators.

## 4. Key PR Progress (10 selected)

1. **Safe mode flag for troubleshooting** ([#4943](https://github.com/QwenLM/qwen-code/pull/4943)) — Adds `--safe-mode` CLI flag (and env var `QWEN_CODE_SAFE_MODE`) to disable all user customizations (QWEN.md, hooks, extensions, MCP servers, subagents) for a clean baseline session.

2. **Web-shell mid-turn message delivery** ([#5175](https://github.com/QwenLM/qwen-code/pull/5175)) — Lets the web-shell hand a typed message into an already-running turn, rather than waiting for completion. Drains the message between tool batches.

3. **Interactive multi-tab /extensions manager** ([#4850](https://github.com/QwenLM/qwen-code/pull/4850)) — Replaces the flat `/extensions` list with an interactive three-tab manager (Installed, Discover, Sources) covering the full extension/MCP lifecycle.

4. **First slice of /loop alignment** ([#5148](https://github.com/QwenLM/qwen-code/pull/5148)) — Aligns the `/loop` command surface (`/proactive` alias, parameter flag for fixed-interval) and adds a task-file reader. Self-paced wakeups and cancellation deferred to child issues.

5. **Persist selected provider when multiple share a model id** ([#5179](https://github.com/QwenLM/qwen-code/pull/5179)) — Fixes #5173 by storing the selected provider's `baseUrl` alongside the model name in the model picker.

6. **Daemon status API** ([#5174](https://github.com/QwenLM/qwen-code/pull/5174)) — Adds a read-only `GET /daemon/status` endpoint for the `qwen serve` daemon, exposing session counts, permission pressure, transport metrics, and rate-limit state.

7. **Telemetry and channel docs fixes** ([#5172](https://github.com/QwenLM/qwen-code/pull/5172)) — Corrects MCP OAuth token storage path, fixes daemon UI event type count, and adds the Feishu community channel to the docs.

8. **Auto-retry transport stream errors before first chunk** ([#5171](https://github.com/QwenLM/qwen-code/pull/5171)) — Adds a bounded automatic retry for transport-level stream drops that occur before the first chunk is yielded, using the existing `classifyRetryError()` classification.

9. **Make subagent forking explicit** ([#5155](https://github.com/QwenLM/qwen-code/pull/5155)) — Forces forking to be explicit via `subagent_type: "fork"`; an omitted `subagent_type` now remains awaitable, preventing accidental forking when results are needed.

10. **Track supported sed edits in file history** ([#5141](https://github.com/QwenLM/qwen-code/pull/5141)) — Treats a narrow subset of single-file `sed -i` substitution commands as normal edit confirmations, previewing the diff and tracking the target file in file history.

## 5. Feature Request Clusters

**`/loop` lifecycle overhaul** — A large coordinated set (11 child issues from parent [#5124](https://github.com/QwenLM/qwen-code/issues/5124)) aims to align the `/loop` command surface with self-paced loop semantics. Requests include: loop task file lookup ([#5129](https://github.com/QwenLM/qwen-code/issues/5129)), wakeup scheduling ([#5130](https://github.com/QwenLM/qwen-code/issues/5130)), self-paced prompt-only loops ([#5131](https://github.com/QwenLM/qwen-code/issues/5131)), token-efficient tick templates ([#5132](https://github.com/QwenLM/qwen-code/issues/5132)), cancellation and status feedback ([#5134](https://github.com/QwenLM/qwen-code/issues/5134)), and comprehensive documentation ([#5135](https://github.com/QwenLM/qwen-code/issues/5135)).

**Improved model/provider management** — Several issues request better handling of multi-provider scenarios: disambiguation when providers share model ids ([#5173](https://github.com/QwenLM/qwen-code/issues/5173)), hide discontinued OAuth entries when not configured ([#5160](https://github.com/QwenLM/qwen-code/issues/5160)), and a configurable sub-agent max parallel count with a pending queue ([#5176](https://github.com/QwenLM/qwen-code/issues/5176)).

**Terminal UX issues across emulators** — Users continue to report flickering or incorrect scrolling behavior in specific terminal emulators (Ghostty [#3979](https://github.com/QwenLM/qwen-code/issues/3979), Tabby [#3949](https://github.com/QwenLM/qwen-code/issues/3949), tmux [#5159](https://github.com/QwenLM/qwen-code/issues/5159)), suggesting a need for terminal-detection or compatibility tweaks in the rendering layer.

## 6. Developer Pain Points

- **Terminal flickering across multiple emulators** — At least three distinct terminals (Ghostty, Tabby, and tmux) exhibit screen-flicker or incorrect scroll behavior, making extended sessions visually disruptive or unusable on macOS.
- **Memory spikes on exit with large histories** — Despite prior fixes, the `/quit` path still risks V8 OOM (issue [#5147](https://github.com/QwenLM/qwen-code/issues/5147)) due to managed auto-memory background processing.
- **Model picker not remembering provider selection** — When multiple providers offer the same model name, the selection is lost between sessions (issue [#5173](https://github.com/QwenLM/qwen-code/issues/5173)), forcing users to reconfigure repeatedly.
- **Limited control over sub-agent parallelism** — Users running local LLMs report resource exhaustion because all sub-agents run concurrently; a configurable max-parallel setting with a pending queue is requested ([#5176](https://github.com/QwenLM/qwen-code/issues/5176)).
- **Stuck in retry loops after rejecting tool execution** — Issue [#3153](https://github.com/QwenLM/qwen-code/issues/3153) (open since April) shows that rejecting a command does not break the model's retry loop, forcing users to kill the session.

</details>