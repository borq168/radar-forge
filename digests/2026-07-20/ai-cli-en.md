# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 02:58 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

## 1. Daily Cross-Tool Overview
On 2026-07-20 no new releases shipped across the four tracked tools, but the issue trackers and pull request queues were highly active. Claude Code saw a spike in Windows regressions and a flurry of configuration and documentation fixes. OpenAI Codex continued to struggle with Windows desktop stability and bot-driven TUI performance patches. Kimi Code balanced session-reliability bugs with maintainer-led feature work on model scoping and PWA support. OpenCode closed a security gap (open redirect) while shipping core fixes for SQLite corruption, empty provider outputs, and provider compatibility, alongside a large internal refactoring effort.

## 2. Activity Comparison

| Tool            | Issues Updated Today | Pull Requests (Updated/Created) | Release Status |
|-----------------|----------------------|---------------------------------|----------------|
| Claude Code     | 50                   | 17                              | None (v2.1.215)|
| OpenAI Codex    | 50 (top 30 shown)    | 17 (merged)                     | None           |
| Kimi Code       | 23                   | 24 (active)                     | None           |
| OpenCode        | Not quantified; ≥10 highlighted | ≥10 (significant merges/PRs)    | None           |

*Note:* OpenCode’s digest does not provide total numeric counts but lists 10 “Hot Issues” and 10 “Key PR Progress” items, indicating a comparably busy day.

## 3. Shared Feature Directions

- **Robust session persistence & resume:** Kimi Code (#1925 session_index.jsonl corruption), OpenCode (#37822 SQLite auto-recovery) and Claude Code (indirectly through thread poisoning reports, though less explicit) all show demand for reliable long-lived sessions. OpenAI Codex’s base64 tool-call thread poisoning (#18629) also surfaces a similar fragility—corrupted history that prevents clean resumption.
- **Model discovery and configuration control:** OpenCode (#6231 auto-discover models from OpenAI-compatible endpoints), Kimi Code (#1928 per-workspace subagent model bindings) and Claude Code (#79285 model selector missing in Routines) point to a common user need for fine-grained, automated model management.
- **Cross‑platform TUI/desktop stability (especially Windows):** Claude Code’s Windows regressions (new bug reports), OpenAI Codex’s Windows crashes/hangs (issues #25719, #20214, #33780, etc.), Kimi Code’s WSL clipboard breakage (#316) and OpenCode’s Windows ARM64 TUI failure (#19130) all reveal persistent friction across these tools on Windows.
- **External integration reliability:** Claude Code’s MCP connector bugs (ElevenLabs 404 #63815, Gmail permissions #77210), Kimi Code’s broken wind-allskill plugin (#1909) and OpenCode’s provider compatibility fixes (empty output #37843, NVIDIA NIM hang #37833) show that connecting to outside services remains fragile and error‑prone across the ecosystem.

## 4. Differentiation Analysis

- **Claude Code** is tightly woven into Anthropic’s MCP ecosystem, with many issues revolving around MCP server configuration, plugin packaging, and reserved namespaces. Features like Routines and slash commands (e.g., `/verify`, `/code-review`) target the solo developer who wants to codify repeatable workflows.
- **OpenAI Codex** is heavily anchored in the full-featured desktop application and VS Code extension, with the vast majority of reported problems being Windows performance, Electron-level crashes, and IDE integration (workspace‑scoped chats, editor tabs). The maintainer activity leans on an automated bot for TUI optimizations.
- **Kimi Code** positions itself as a Claude–code–alternative with unique session‑management primitives (`/rewind` without Git, multi‑instance write fencing) and emerging web‑desktop convergence through PWA support. Its community focuses on configuration correctness and cross‑platform input handling.
- **OpenCode** emphasizes provider abstraction, multi‑model compatibility, and a Rust‑based TUI. Today’s PRs show deep attention to LLM streaming deltas, context overflow detection, and internal architecture refactors, clearly aimed at developers who run a variety of backends and want a lightweight, performant terminal agent.

## 5. Community Activity Notes

- **Claude Code** logged 50 issue updates, many from Windows users, and 17 PRs—mostly documentation and config‑safety fixes from maintainers and contributors.
- **OpenAI Codex** also recorded 50 updated issues (heavily Windows‑skewed) and 17 merged PRs, the bulk authored by the `@copyberry[bot]` focusing on TUI rendering and memory efficiency, with only one external contributor PR.
- **Kimi Code** had fewer issue updates (23) but a higher PR count (24), indicating active maintainer‑driven development on streaming, VS Code multi‑question flows, and subagent model bindings.
- **OpenCode** did not give totals, but the 10 highlighted issues and 10 key PRs include critical fixes (security, database corruption, empty provider output) and a significant refactor, pointing to sustained maintainer responsiveness.
- No tool released a new version today.

## 6. Evidence-Backed Observations

1. **Windows reliability is the most prominent cross‑tool friction.** Every tool’s digest today surfaced Windows‑specific crashes, hangs, or broken interactions (Claude Code new Win regressions, Codex’s HID/powershell/polling storms, Kimi WSL clipboard, OpenCode ARM64 TUI dlopen). This is not a single-tool issue but a consistent pattern across AI CLI and desktop experiences.
2. **TUI performance and memory efficiency are receiving sustained maintainer attention.** OpenAI Codex’s bot PRs explicitly target cloning avoidance and caching in the TUI, OpenCode is refactoring util packages and fixing render‑loop stalls, Kimi Code patches clipboard deadlocks and output flushing. These are not sporadic; multiple tool teams are actively optimizing terminal rendering.
3. **Session corruption and unrecoverable states remain a developer pain point.** Kimi’s JSONL corruption (#1925), Codex’s thread poisoning from base64 images (#18629), and OpenCode’s need for SQLite auto‑recovery (#37822) all indicate that long‑running AI agent sessions are still brittle; recovery from a bad state often requires process restarts or manual intervention.
4. **Model‑configuration UX is undergoing a round of refinement.** The requests for auto‑discovery (OpenCode), per‑workspace bindings (Kimi), and visible model selectors in Routines (Claude Code) suggest that users are moving beyond simple single‑model defaults and now demand more granular, context‑aware control without manual setup.
5. **Plugin and tool‑connector ecosystems are error‑prone.** Documentation errors (Claude Code’s plugin `.mcp.json` example), missing runtimes (Kimi’s Python SDK), and permission/OAuth misconfigurations (Claude Gmail, Kimi deny‑over‑allow rules) show that the plug‑in model, while powerful, frequently fails due to configuration and runtime‐packaging gaps—not just code bugs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-20

## Today’s Update Brief
No new releases landed in the last 24 hours, but the issue tracker saw a burst of **50 issues updated** (with a notable spike in Windows regressions) and **17 pull requests** mostly focused on documentation alignment, config-safety fixes, and contributor tooling. The conversation today is shaped by a handful of UX enhancement requests around the terminal interface and a string of new bug reports from Windows users that point to freshly introduced CLI and editor breakage.

## Releases
None in the past 24 hours. The current version remains **2.1.215**.

## Hot Issues

1. **[Keep the mascot visible during chat sessions](https://github.com/anthropics/claude-code/issues/70722)**
   - **Workflow affected:** TUI enjoyment; the crab mascot “Clawd” disappears after a session starts.
   - **Impact:** Users feel the animated character adds personality and want it to stay throughout the session.
   - **Community reaction:** 7 comments and a few 👍; the request is lighthearted but has sustained engagement since June.

2. **[MCP docs missing that `workspace` is a reserved server name](https://github.com/anthropics/claude-code/issues/56154)**
   - **Workflow affected:** Configuring MCP servers; users unknowingly try to use `workspace` which silently behaves as a built-in and causes confusion.
   - **Impact:** Wasted troubleshooting time; the docs now need to surface this reserved name explicitly.
   - **Community reaction:** Closed after being addressed with a doc update; 3 comments.

3. **[Account suspension after Claude Code CLI usage — appeal pending 3+ weeks](https://github.com/anthropics/claude-code/issues/51670)**
   - **Workflow affected:** Account access; a user reports suspension while using the CLI on Windows, with no resolution for weeks.
   - **Impact:** Blocked access to AI services, eroding trust in the automated safety system.
   - **Community reaction:** 3 comments, with users sharing similar experiences; closed but the frustration lingers.

4. **[Plugin `.mcp.json` example uses `mcpServers` wrapper incorrectly](https://github.com/anthropics/claude-code/issues/63694)**
   - **Workflow affected:** Plugin authors trying to provide MCP servers via plugins; the documented format is wrong, causing silent failures.
   - **Impact:** Copy-paste adoption of the example breaks MCP server loading.
   - **Community reaction:** 2 comments; closed after the doc was corrected.

5. **[ElevenLabs MCP connector TTS tools all return 404](https://github.com/anthropics/claude-code/issues/63815)**
   - **Workflow affected:** Users relying on the hosted ElevenLabs connector for text-to-speech hit a URL construction bug that makes every call 404.
   - **Impact:** All voice synthesis integrations blocked; the connector appears broken despite the endpoint being correct.
   - **Community reaction:** 2 comments; closed after the connector fix.

6. **[Private repo 404 via GitHub connector after org↔personal transfer](https://github.com/anthropics/claude-code/issues/72447)**
   - **Workflow affected:** Continuous integration / code access; a transferred private repo becomes inaccessible, and the backend index never re-syncs.
   - **Impact:** The only workaround is re-authenticating or waiting indefinitely.
   - **Community reaction:** 2 comments; closed.

7. **[Per-project MCP exclusions (disable global servers for a project)](https://github.com/anthropics/claude-code/issues/68605)**
   - **Workflow affected:** Developers who have global MCPs (e.g., Slack, Grafana) but want to silence them in specific repositories.
   - **Impact:** No opt-out mechanism; the noise from unwanted tools pollutes specific project sessions.
   - **Community reaction:** 1 comment and 👍; feature request remains open.

8. **[Gmail MCP custom server returns “The caller does not have permission” after OAuth grant](https://github.com/anthropics/claude-code/issues/77210)**
   - **Workflow affected:** Setting up a custom Gmail MCP with one’s own Google Cloud project; despite a successful OAuth flow, permission errors persist.
   - **Impact:** Blocks Gmail integration for users who need full control over the credential scope.
   - **Community reaction:** 1 comment and 👍; closed after resolving the OAuth scope issue.

9. **[Any way to let Claude run /verify and /code-review on its own again?](https://github.com/anthropics/claude-code/issues/79282)**
   - **Workflow affected:** Automated quality checks; after updating to 2.1.215, Claude no longer automatically triggers `/verify` or `/code-review` during sessions.
   - **Impact:** Developers must now remember to manually invoke these commands, slowing down iterative work.
   - **Community reaction:** Fresh issue with no comments yet; the author notes the change may be intentional but would like an option.

10. **[Routines: model selector missing from create and edit forms](https://github.com/anthropics/claude-code/issues/79285)**
    - **Workflow affected:** Web/desktop app users creating or editing Routines; the documented model selector is absent, so routines silently fall back to a default model.
    - **Impact:** Loss of control over which model executes the routine, potentially affecting performance and cost.
    - **Community reaction:** Opened today with 0 comments; clearly a regression.

## Key PR Progress

1. **[Guard isolated worktree to prevent spawn from mutating parent repo](https://github.com/anthropics/claude-code/pull/79237)**
   - Fixes a bug where `spawn_task/chip` creates a directory that is not a real git worktree, causing `git checkout -b` to run on the shared main checkout and corrupt the repository state.

2. **[Remove stray `re` syntax error and close `_extract_field` in rule_engine.py](https://github.com/anthropics/claude-code/pull/79211)**
   - A dangling `re` statement left after a `UnicodeDecodeError` handler broke the rule engine module, causing hooks to error out and incorrectly flag computational work.

3. **[Strip ANSI escape fragments from model value before persisting](https://github.com/anthropics/claude-code/pull/79210)**
   - The `/model` picker was saving a styled display string with ANSI bold fragments (`[1m`) into `settings.json`, corrupting the model identifier; now strips escapes.

4. **[Quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands](https://github.com/anthropics/claude-code/pull/54094)**
   - When the plugin root path contains spaces, unquoted expansion caused `/bin/sh` word-splitting and hook failures across five in-tree plugins.

5. **[Honor thumbs-down from any user when skipping duplicate auto-close](https://github.com/anthropics/claude-code/pull/79151)**
   - The dedupe bot’s comment promises anyone can prevent automatic closure by downvoting, but the auto-close logic only considered a thumbs-down from the issue author.

6. **[Add mandatory `hookify.` prefix to example rule filenames](https://github.com/anthropics/claude-code/pull/79148)**
   - The hookify loader requires rule files to start with `hookify.`, but all four shipped examples omitted it, leading to silently ignored rules when users copied them.

7. **[Use `disable-model-invocation` to hide Ralph Wiggum commands from model invocation](https://github.com/anthropics/claude-code/pull/79140)**
   - The ralph-wiggum commands used a key the CLI never reads (`hide-from-slash-command-tool`), risking self-invoked infinite loops if the model called them via the Skill tool.

8. **[Do not abort `validate-settings.sh` when no lowercase frontmatter keys match](https://github.com/anthropics/claude-code/pull/79131)**
   - The script exited `1` with zero diagnostics on structurally valid settings where frontmatter keys were not all-lowercase (e.g., `Enabled: true`), due to `grep` returning no match under `pipefail

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-20

## Today’s Update Brief
No new releases shipped in the past 24 hours, but the issue tracker saw robust activity with 50 updated issues (top 30 shown) and 17 pull requests merged, almost all focused on TUI and rendering performance optimisations. The day’s updates continue to reflect user friction around desktop app stability, resource consumption, and platform‑specific process handling.

## Releases
None in the last 24 hours.

## Hot Issues
*Picked for impact, reproduction reports, and community reactions (👍/comments).*

1. **macOS: `syspolicyd`/`trustd` CPU & memory runaway**
   [#25719](https://github.com/openai/codex/issues/25719) • 67 comments • 👍 260
   Codex Desktop repeatedly triggers Apple’s trust evaluation services, causing persistent high CPU and memory growth on Apple Silicon Macs. Many users report degraded system performance while the app is running.

2. **Windows: Frequent freezes/stutters despite sufficient resources**
   [#20214](https://github.com/openai/codex/issues/20214) • 54 comments • 👍 68
   The Windows 11 Pro app becomes unresponsive or stutters even with 32 GB RAM; the root cause appears tied to process polling loops or internal HID handling.

3. **Windows: App hangs on launch – HID device enumeration blocks main thread**
   [#33780](https://github.com/openai/codex/issues/33780) • 39 comments • 👍 8
   On Windows 11 Home, `HID.node` → `hid.dll` enumeration of Human Interface Devices can block the Electron main thread indefinitely if a single HID device doesn’t respond, leaving the app Not Responding.

4. **Windows: Browser Use crash in `chrome.dll` (0xC0000005)**
   [#32683](https://github.com/openai/codex/issues/32683) • 25 comments • 👍 7
   Opening a page using the in‑app Browser Use feature causes `ChatGPT.exe` to crash with an access violation in Chrome’s rendering layer, reproducible across Pro‑tier accounts.

5. **Windows: `serialport.node` delay‑load failures cause severe UI lag**
   [#33375](https://github.com/openai/codex/issues/33375) • 46 comments • 👍 30 (closed)
   Repeated failures to delay‑load `serialport.node` generated significant UI stutter; the issue was closed but highlighted the fragile initialization chain.

6. **Windows: Periodic ~15 s AppHang / ~10 s responsive cycle**
   [#33884](https://github.com/openai/codex/issues/33884) • 15 comments • 👍 0
   After updating to version 26.715, users see a predictable hang‑and‑recover cycle that degrades the desktop experience even when the app is idle.

7. **Windows: Repeated `ChatGPT.exe` crashes (0xc06d007f) cause system‑wide micro‑freezes**
   [#33541](https://github.com/openai/codex/issues/33541) • 7 comments • 👍 6
   Background crashes of `ChatGPT.exe` trigger brief OS‑level stutters, with Event Viewer logging Application Error 1000 followed by Windows Error Reporting.

8. **Windows: `taskkill.exe`/`conhost.exe` process storms and WMI failures**
   [#33776](https://github.com/openai/codex/issues/33776) • 10 comments • 👍 9
   Codex Desktop spawns hundreds of `taskkill` and `conhost` processes, creating WMI provider storms and degrading the Desktop Window Manager.

9. **Windows: High CPU from per‑second `powershell.exe` process polling**
   [#25453](https://github.com/openai/codex/issues/25453) • 12 comments • 👍 2
   The desktop app spawns a short‑lived PowerShell process every second to poll system state, causing sustained high CPU even without active coding.

10. **Tool‑call thread poisoning via inline base64 images**
    [#18629](https://github.com/openai/codex/issues/18629) • 10 comments • 👍 1
    Persisting large `data:image/...;base64` payloads in session history eventually makes the thread unstable and causes `{"detail":"Bad Request"}` on resume, as well as possible inflated token usage.

## Key PR Progress
*All except #30235 are authored by `@copyberry[bot]` and focus on TUI/memory efficiency.*

1. **`[#34234]` Avoid redundant TUI subagent metadata requests** – Skips unnecessary backfills for fresh/‑forked threads, keeping navigation responsive while preserving resume behaviour.
2. **`[#34224]` Avoid cloning file changes in TUI diff rendering** – Reworks `DiffSummary` handling to borrow data instead of cloning, reducing allocations during diff display.
3. **`[#34223]` Cache finalized Markdown history rendering** – Caches rendered Markdown lines for agent messages and plans to avoid re‑rendering at the same width, boosting transcript scrolling performance.
4. **`[#34222]` Avoid buffering replay‑irrelevant thread notifications** – Drops large payloads (raw response items, realtime audio) from the TUI replay buffer, saving memory and preventing buffer eviction of useful events.
5. **`[#34218]` Track TUI command completion separately from output** – Fixes premature deactivation of streaming commands by separating output presence from command completion status.
6. **`[#34217]` Keep incremental rendering with visualization context** – Preserves incremental Markdown rendering even when an inline visualization context is active, avoiding full re‑renders.
7. **`[#34216]` Speed up TUI Markdown layout** – Bulk table width allocation and span‑aware URL detection substantially improve layout performance.
8. **`[#34206]` Avoid retaining decoded MCP images in history cells** – Releases decoded image content after validation, preventing memory bloat from large MCP image outputs.
9. **`[#34204]` Avoid cloning buffered TUI history lines** – Borrows hyperlink‑aware batch data instead of cloning the entire line vector on insertion.
10. **`[#30235]` Kill timed‑out Git status process groups** (by @tamird) – Ensures that child `git` processes spawned through wrappers are terminated when the 5‑second timeout expires, reducing orphan process proliferation.

## Feature Request Clusters
- **Workspace‑scoped chats** – [#25319](https://github.com/openai/codex/issues/25319) (15 comments, 👍47) asks for VS Code chat history to be filtered by workspace/project so that threads from one project don’t pollute another.
- **Full editor tab sessions** – [#20951](https://github.com/openai/codex/issues/20951) (10 comments, 👍30) wants Codex sessions to open as standard VS Code editor tabs, similar to how Claude Code operates, instead of only in the sidebar panel.
- **Reliable Remote‑SSH support** – [#27597](https://github.com/openai/codex/issues/27597) (10 comments, 👍3) reports that the IDE extension fails to load in VS Code Remote‑SSH environments while the CLI works, highlighting a need for seamless remote development parity.

## Developer Pain Points
- **Desktop platform instability:** Heavy clusters of Windows‑specific crashes, UI hangs, and process leaks (HID enumeration, serialport, `taskkill`, `git.exe`, `powershell` polling). macOS also suffers from `syspolicyd`/`trustd` resource runaway.
- **Long‑thread and session state corruption:** Persistent window after resuming old threads, including base64 tool‑output poisoning and missing newly available tools/subagent runtimes.
- **Tool and sandbox integration glitches:** `apply_patch` failures on Windows sandboxes, MCP server discovery stalling when no resources are exposed, and stale marketplace plugin versions after updates.
- **VS Code extension stability:** Blank panel unless launched with `--disable-extension`, plus desire for richer UI (tabs, workspace scoping) and consistent remote development behaviour.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest – 2026-07-20

## 1. Today’s Update Brief
The repository saw **23 Issues updated and 24 Pull Requests active** (top 20 shown by comment count), with no new releases on this date. Community attention focused heavily on session reliability concerns, configuration correctness, and cross‑platform usability, while maintainer‑led PRs addressed output streaming, VS Code multi‑question flows, subagent model bindings, and web UI performance.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 noteworthy items)
*Selected for their impact on workflows, number of comments/reactions, or the severity of the bug reported.*

1. **#108 – /rewind feature request**
   Users want a `/rewind` command (similar to Claude Code) that does not require a Git repository. This long‑standing enhancement has **7 comments and 6 👍**, indicating strong community demand for non‑destructive session backtracking.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/108

2. **#316 – Image paste shortcut broken in WSL + Windows Terminal / Warp**
   In Windows 11 WSL2 environments, `Ctrl+V` / `Alt+V` etc. do not insert an image placeholder in the TUI. With **6 comments** this is a persistent friction point for users on Windows‑hosted Linux workspaces.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/316

3. **#1915 – Show absolute reset time alongside countdown in /usage**
   The `/usage` command currently only displays a relative countdown (e.g. “resets in 2h 30m”). The request asks for the local date/time of reset as well, making quota planning more predictable.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1915

4. **#1869 – `[services.moonshot_fetch]` config defined but never read**
   In the `agent-core-v2` engine, web **fetch** ignores its dedicated configuration section, even though the schema and docs define it. This mismatch confuses operators who expect fetch behavior to be configurable like search.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1869

5. **#1901 – Permission rules: deny overrides allow regardless of order**
   The documented “first matching rule takes effect” policy does not hold: deny rules consistently override allow rules. This can silently lock down operations that admins intended to permit, undermining permission management.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1901

6. **#1902 – macOS desktop app: Command+W does not work**
   In the Kimi desktop app (3.1.2) on macOS, `Cmd+W` fails to close the current tab/window, with no corresponding menu item. A basic macOS UX expectation is broken.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1902

7. **#1883 – CLI hangs indefinitely due to clipboard native module deadlock on macOS**
   The clipboard native dependency (`clipboard.darwin-universal.node`) can deadlock, freezing the entire Kimi Code process. Versions 0.26–0.27 affected, across all models.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1883

8. **#1917 – APIConnectionError becomes permanent until process restart**
   After a transient network error, the HTTP client enters a wedged state where retries never open new sockets. The only recovery is killing the process, disrupting long‑running sessions.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1917

9. **#1925 – session_index.jsonl loses newlines, causing session.not_found on resume**
   Corrupted JSONL formatting makes session resumption fail even though the session directory is intact. This is a data‑loss–adjacent bug that frustrates users trying to continue previous work.
   🔗 https://github.com/MoonshotAI/kimi-code/issues/1925

10. **#1909 – wind-allskill plugin completely broken: missing Python SDK**
    The Wind financial data plugin fails with `NETWORK_ERROR` because the required `agent_gw` Python package is not pre‑installed in the managed runtime. Users cannot fix this themselves, blocking the entire integration.
    🔗 https://github.com/MoonshotAI/kimi-code/issues/1909

## 4. Key PR Progress (10 important PRs)
*Fixes, features, and performance improvements that were updated or created in the last 24 hours.*

1. **#1933 – Scope thinking effort to the current session**
   Prevents the TUI/web UI from leaking a chosen thinking effort into the global config, keeping session‑level model selections isolated.
   🔗 https://github.com/MoonshotAI/kimi-code/pull/1933

2. **#1919 – Flush stream‑json output**
   Fixes headless mode where the final assistant message could be lost on exit when the consumer is slow or piped (resolves #1897).
   🔗 https://github.com/MoonshotAI/kimi-code/pull/1919

3. **#1918 – Preserve multi‑question answers in VS Code**
   The VS Code extension now correctly walks through all questions in an `AskUserQuestion` request instead of dropping everything after the first answer (resolves #1880).
   🔗 https://github.com/MoonshotAI/kimi-code/pull/1918

4. **#1928 – Per‑workspace subagent model bindings**
   Introduces `[subagent.<type>]` configuration and a `/subagent-model` command so that subagent model/effort selection is user‑controlled, not dictated by the calling LLM (resolves #1927).
   🔗 https://github.com/MoonshotAI/kimi-code/pull/1928

5. **#1929 – PWA support for kimi web**
   Adds light/dark manifests and a `--pwa` flag, making `kimi web` installable as a standalone Progressive Web App.
   🔗 https://github.com/MoonshotAI/kimi-code/pull/1929

6. **#1920 – Multi‑instance session lease, write fencing, and fs/watch reliability**
   Addresses data corruption risks when multiple `kimi web` instances share the same home directory by introducing session leasing and write fencing.
   🔗 https://github.com/MoonshotAI/kimi-code/pull/1920

7. **#1914 – Show local reset time alongside countdown in /usage**
   Displays “resets in 2h 30m (at 14:30)” for usage rows that have an absolute reset timestamp (resolves #1915).
   🔗 https://github.com/MoonshotAI/k

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-20

## Today’s Update Brief
A busy day of issue reports and pull request activity with no new releases. The community continues to surface UX rough edges in the TUI/desktop app, provider compatibility gaps, and a range of reliability bugs, while maintainers and contributors push fixes for SQLite corruption, empty provider outputs, external path authorization, and multi-platform support.

## Releases
None in the last 24 hours.

## Hot Issues
1. **[#6231] Auto-discover models from OpenAI-compatible provider endpoints** (25 comments, 182 👍)
   Users want OpenCode to automatically populate available models from local providers like LM Studio, Ollama, and llama.cpp instead of manually listing them in `opencode.json`. The request has strong community backing.
   🔗 https://github.com/anomalyco/opencode/issues/6231

2. **[#7801] Plan Mode + Question tool can auto switch to Build mode** (8 comments, 26 👍)
   After confirming a plan-mode prompt, users expect an automatic transition to build mode. Currently they must manually switch, leading to repeated confirmation steps.
   🔗 https://github.com/anomalyco/opencode/issues/7801

3. **[#9955] TUI has too much padding everywhere and unnecessary large height elements** (8 comments, 17 👍)
   Vertical space in the TUI is poorly utilized, with multiple bars and excessive spacing that reduces the usable chat area. Several users compare it unfavorably to other CLI agents.
   🔗 https://github.com/anomalyco/opencode/issues/9955

4. **[#19130] Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error** (11 comments, 8 👍)
   The native ARM64 binary on Windows 11 works for non-interactive commands but the TUI fails to start. Debug details indicate a bun:ffi dlopen issue tied to the TCC runtime.
   🔗 https://github.com/anomalyco/opencode/issues/19130

5. **[#35265] ResourceExhausted: Worker local total request limit reached** (9 comments)
   Users hit provider rate limits even after reviewing existing mitigations. Several report needing better built-in rate limiting or retry logic rather than relying on external plugins.
   🔗 https://github.com/anomalyco/opencode/issues/35265

6. **[#37803] TUI screen goes completely black when agent starts working (render loop silently stalls)** (3 comments)
   The entire TUI goes black after sending a prompt, though keyboard input still works. Switching terminal tabs restores the display. This suggests a render loop stall without crash.
   🔗 https://github.com/anomalyco/opencode/issues/37803

7. **[#37745] OpenAI cache writes always reported as 0** (2 comments)
   Since OpenAI began charging for cache writes, OpenCode’s usage reporting shows 0 for writes while cache reads are accurate, causing billing-blindness.
   🔗 https://github.com/anomalyco/opencode/issues/37745

8. **[#37790] OpenCode Go subscription paid but workspace shows “Insufficient balance”** (2 comments)
   A successful Stripe payment leaves the workspace in an unusable state, blocking Go features. Indicates a billing state sync failure.
   🔗 https://github.com/anomalyco/opencode/issues/37790

9. **[#36441] 2.0: Scope event streams and bound event payloads** (3 comments)
   Maintainer @kitlangton flags that the v2 `/api/event` stream is process-global, causing N² event processing when multiple TUIs are open. This is a design concern for 2.0 scalability.
   🔗 https://github.com/anomalyco/opencode/issues/36441

10. **[#37807] Open redirect in console /auth/authorize via continue parameter (CWE-601)** (2 comments, closed)
   A security researcher reported an open redirect in the console auth route. The issue was promptly closed (fixed) within hours.
    🔗 https://github.com/anomalyco/opencode/issues/37807

## Key PR Progress
1. **[#37845] chore(core): add location startup diagnostics** — Adds diagnostics for cold start stalls, supporting performance investigations (#37793, #37794).
   🔗 https://github.com/anomalyco/opencode/pull/37845

2. **[#37822] fix(core): auto-recover corrupted sqlite database on startup** — Implements automatic recovery when SQLite DB is malformed, preventing startup crashes.
   🔗 https://github.com/anomalyco/opencode/pull/37822

3. **[#37843] fix(core): fail empty provider output** — A step that finishes with no text and no tool calls now properly fails instead of appearing as a successful completion.
   🔗 https://github.com/anomalyco/opencode/pull/37843

4. **[#37840] fix(llm): expand context overflow patterns** — Adds recognition of more provider context-window error formats to trigger appropriate overflow handling.
   🔗 https://github.com/anomalyco/opencode/pull/37840

5. **[#37842] fix(ai): tolerate empty-string tool call id/name in streaming deltas** — Fixes compatibility with APIs (DashScope, GLM-5.2) that send empty strings for tool call IDs.
   🔗 https://github.com/anomalyco/opencode/pull/37842

6. **[#37708] fix(ai): preserve compatible reasoning details** — Assembles streamed `reasoning_details` from OpenAI Chat compatible providers into complete items, improving reasoning trace visibility.
   🔗 https://github.com/anomalyco/opencode/pull/37708

7. **[#37839] fix(core): authorize relative external paths** — Allows `apply_patch`/`edit` to work on sibling locations reachable via `../` when authorized, closing a previously overly strict path check.
   🔗 https://github.com/anomalyco/opencode/pull/37839

8. **[#37833] fix(provider): add NVIDIA NIM DeepSeek request compatibility** — Resolves hanging requests with DeepSeek V4 models on NVIDIA NIM by adjusting request formatting.
   🔗 https://github.com/anomalyco/opencode/pull/37833

9. **[#37828] refactor: extract shared util package** — Major internal refactor extracting `@opencode-ai/util` from Core, enabling cleaner dependency boundaries and reducing cross-package imports.
   🔗 https://github.com/anomalyco/opencode/pull/37828

10. **[#37696] feat(opencode): use adaptive thinking effort for Kimi family on Anthropic** — Adds support for Moonshot/Kimi’s adaptive thinking contract when routed through Anthropic-compatible endpoints.
    🔗 https://github.com/anomalyco/opencode/pull/37696

## Feature Request Clusters
- **Provider/Model Discovery & Configuration Automation**
  Issues #6231 (auto-discover models from endpoints) and #37774 (improve musl packages) point to a desire for smoother setup and less manual configuration for open-source and local provider ecosystems.
- **Agent Session Control**
  #7801 (auto switch plan→build), #27511 (suspend/resume agent execution), and #36654 (subagent session resume) all request finer-grained control over agent lifecycle and mode transitions.
- **TUI/Desktop UX Polishing**
  #9955 (vertical space optimization), #37829 (missing folder picker shortcut), #37825 (tooltip keybind display), and #26459 (clipboard in web terminals) reflect ongoing friction in the user interface across different platforms.
- **Billing & Usage Transparency**
  #37745 (cache write reporting) and #37790 (subscription state inconsistency) indicate a need for more reliable billing/usage data and subscription sync.

## Developer Pain Points
- **TUI responsiveness and stability** (#37803 black screen, #19130 Windows ARM64 crash, #22422 memory leak warnings) continue to be high-friction areas, especially on non-mainstream platforms and during agent execution.
- **Provider error handling** (#35265 rate limits without built-in mitigation, #36826 obscure “unexpected server error” on DeepSeek) frustrate users who must debug opaque failures themselves.
- **Quirks in agent behavior** (#20699 duplicate messages, #37826 broken markdown from Qwen models) reduce trust in output reliability.
- **Subscription and payment inconsistencies** (#37790) block usage immediately, generating urgent support requests.
- **Desktop-specific gaps** (#37829 shortcut missing in new layout, #37825 tooltip raw keys, #26459 clipboard broken in browser-based terminals) erode the out-of-the-box experience on the desktop app.

</details>