# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-11 01:02 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-11

## 1. Daily Cross-Tool Overview

Today saw high activity across all four tracked AI CLI tools, with **OpenCode** and **Claude Code** each reporting 50 issues updated, **OpenAI Codex** 50 items, and **Kimi Code** 19 new issues. Pull request volume varied sharply: OpenCode led with 50 PRs updated, Kimi Code had 19 new PRs, OpenAI Codex 10 closed PRs, and Claude Code only 3. Two tools shipped releases (Claude Code v2.1.227, OpenCode v1.18.16), while OpenAI Codex published two alpha builds and Kimi Code had no new release. Windows stability, OAuth reliability, and session state management emerged as cross-cutting pain points, though each tool’s community focused on distinct feature clusters.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today |
|------|----------------------|-------------------|---------------|
| Claude Code | 50 | 3 (1 open, 2 closed) | v2.1.227 |
| OpenAI Codex | 50 (items) | 10 (all closed) | 2 alpha releases |
| Kimi Code | 19 (new) | 19 (new, 10 highlighted) | None |
| OpenCode | 50 | 50 | v1.18.16 |

*Note: “Updated” includes new issues, comments, and status changes. Counts are as reported in each digest.*

## 3. Shared Feature Directions

Requirements that appeared across multiple tool communities today:

- **Windows platform stability** – All four tools have active, high-severity Windows bugs: Claude Code (GPU crash, TUI corruption, install failures), OpenAI Codex (app freezes, extension resource errors, Computer Use broken), Kimi Code (ANSI rendering, V8 engine crash, network share errors), OpenCode (desktop menu accelerators, internal server errors). This is the most universally reported pain point.

- **Session/conversation state management** – Claude Code users request sync between CLI, desktop, and mobile apps (#28791, #15881). Kimi Code has issues for session deletion and workspace rewind (#108, #1926, #2356). OpenCode reports input box clearing when switching conversations (#36203). No tool offers seamless cross-session persistence today.

- **OAuth and authentication reliability** – Claude Code’s subscription-tier evaluation bug (#80749) and OpenAI Codex’s MCP credential friction (#37373, #37866) mirror Kimi Code’s detailed OAuth error classification and retry-budget issues (#2786, #2789). All three communities report authentication interruptions during long-running tasks.

- **Context window management** – Claude Code on compaction thrashing (#41984, #85668), OpenAI Codex on lost 372k context window (#34619), and OpenCode on DeepSeek V4 Flash capped at 200K instead of 1M (#40958). Users across tools want more control over context limits and compaction behavior.

- **Skill/plugin visibility** – Claude Code’s skill replay opt-out request (#85138) and Kimi Code’s `/skills` discovery command (#2780) both aim to give users insight into what skills are loaded and how they behave. OpenCode’s refactoring of skill service (PR #41622) addresses the same underlying need for configurability.

## 4. Differentiation Analysis

- **Claude Code** – Strong enterprise orientation: Max plan billing, Fable integration, CVP verification. Community focus is on session sync, keybinding customization, and compaction behavior. Maintainer response is measured (3 PRs, closed some issues). The tool is tightly coupled to Anthropic’s model ecosystem.

- **OpenAI Codex** – Heavily Windows-focused in reported issues (app freezes, Computer Use breakage, extension loading). Community requests center on restoring the large context window and improving remote control parity. All 10 PRs today were closed internal infrastructure (gRPC, Windows SDK, MCP OAuth), suggesting a systematic build-out rather than user-facing features.

- **Kimi Code** – Most community-driven: 19 new PRs, many from maintainers/contributors fixing bugs and adding features. Dominant themes are workspace management (rewind, remove-dir), OAuth robustness, and TUI polish. Lacks a release today, but the PR pipeline is the most active for user-facing changes.

- **OpenCode** – Highest total PR activity (50) with a clear refactoring wave moving filesystem logic out of core services. Releases are frequent (v1.18.16 today). Feature requests are diverse: copy markdown, worktree switching, exit splash opt-out, and model context tuning. The beta v2 pipeline (PR #41626) signals a major version in progress.

## 5. Community Activity Notes

- **By raw count**: OpenCode leads with 50 issues + 50 PRs updated. Claude Code and OpenAI Codex tie at 50 issues each, but Claude Code has only 3 PRs vs. Codex’s 10. Kimi Code has the smallest volume (19+19) but the highest proportion of new PRs to issues.

- **By release cadence**: OpenCode and Claude Code shipped stable releases; OpenAI Codex shipped alpha releases; Kimi Code had none. OpenCode’s release (v1.18.16) included config parsing fixes and desktop improvements. Claude Code’s release (v2.1.227) fixed a critical subscription-tier bug and a bash command failure.

- **By maintainer responsiveness**: OpenAI Codex’s 10 PRs all closed, suggesting active maintainer review. Claude Code’s 3 PRs (1 open, 2 closed) show lower engagement. Kimi Code’s 19 PRs are all open (many from maintainers themselves), indicating a backlog of unreviewed contributions. OpenCode’s 50 PRs include many merged (e.g., the `kitlangton` refactoring series), signaling sustained maintainer attention.

## 6. Evidence-Backed Observations

1. **Windows stability is the single largest cross-tool pain point.** Every digest lists at least two severe Windows-specific bugs (crashes, rendering failures, resource errors). This is not a trend but a present-day bottleneck affecting all four tools.

2. **OAuth and authentication flow issues are concentrated in Claude Code and Kimi Code.** Both communities reported misclassification of errors and insufficient retry budgets for long-running tasks. OpenAI Codex has MCP credential friction but not the same pattern. OpenCode’s digest does not mention OAuth problems.

3. **Context management (compaction, window limits, cap misconfiguration) is a shared but differently manifested concern.** Claude Code’s compaction thrashing, OpenAI Codex’s lost context window, and OpenCode’s misconfigured caps all reduce the effective working context. No tool has a satisfied community on this front.

4. **Community-driven feature development is strongest in Kimi Code and OpenCode.** Kimi Code’s 19 new PRs (many from maintainers) include workspace rewind, skill discovery, and quota display—all directly from feature requests. OpenCode’s refactoring wave was largely contributor-led (`kitlangton`). Claude Code and OpenAI Codex show fewer contributor PRs and more maintainer-closed infrastructure work.

5. **Session state persistence and sync remain unmet across all tools.** Despite high upvotes for Claude Code’s sync requests (#28791, #15881) and Kimi Code’s session management issues, no tool offers a seamless cross-device or cross-session history solution. This is a clear gap with no current workaround beyond manual export/import.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-11

## Today’s Update Brief
Anthropic shipped **v2.1.227** fixing a subscription-tier evaluation bug that incorrectly prompted Max plan users to enable usage credits for Fable, and a `claude-code-action` bash command failure. Community activity remains high: 50 issues updated in the last 24 hours, with 3 pull requests (one open for GitLab `/code-review` support). Several open bugs around usage-limit consumption, context compaction thrashing, and transcript loss are fresh from today.

---

## Releases

**v2.1.227** (latest)
[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.227)
- **Fixed:** Feature flags being evaluated without the user’s subscription tier when a session started with an expired login token, which could wrongly prompt Max plan users to enable usage credits for Fable.
- **Fixed:** Every Bash command failing under `claude-code-action` with `allowed_no`.

---

## Hot Issues (10 of 50)

### 1. CVP-approved organization still receives cyber safeguard blocks ([#84352](https://github.com/anthropics/claude-code/issues/84352))
- **Comments:** 32 | **👍:** 1
- **Impact:** Blocks enterprise users who have passed Anthropic’s Cyber Verification Program but still see safeguard restrictions in Claude Code. Verification Portal shows “Under review” despite prior approval email.
- **Community reaction:** High engagement; users are frustrated by the false positive, especially in regulated environments.

### 2. Sync conversation history between CLI and Claude Code desktop app ([#28791](https://github.com/anthropics/claude-code/issues/28791))
- **Comments:** 31 | **👍:** 120
- **Impact:** Users must manually export/import conversations between CLI and desktop. No shared history, breaking workflow continuity.
- **Community reaction:** The most upvoted open feature request. Many echo the pain of lost context.

### 3. Seamless session sharing between Claude Code and Claude Desktop ([#15881](https://github.com/anthropics/claude-code/issues/15881))
- **Comments:** 9 | **👍:** 60
- **Impact:** No direct way to share conversation context; users copy-paste or export files.
- **Community reaction:** Strong support; overlaps with #28791 but focuses on the desktop companion app.

### 4. Fable 5 gated behind “requires usage credits” in interactive TUI on Max plan ([#80749](https://github.com/anthropics/claude-code/issues/80749) — **CLOSED**)
- **Comments:** 8 | **👍:** 1
- **Impact:** Max plan users were incorrectly prompted to enable usage credits for Fable 5. This bug is now fixed in v2.1.227.
- **Community reaction:** The issue was closed after the fix; user analysis initially misidentified a regression, but the root cause matches the subscription-tier bug.

### 5. Cowork stale-cache corruption under Fable 5 ([#67585](https://github.com/anthropics/claude-code/issues/67585))
- **Comments:** 7 | **👍:** 1
- **Impact:** Host writes are clean on disk, but the sandbox read view truncates them. Full diagnosis and fix provided by the reporter.
- **Community reaction:** Well-documented report with reproduction steps; maintainers have not yet responded.

### 6. `claude-in-chrome` file_upload fails: `paths: expected array, received undefined` ([#84627](https://github.com/anthropics/claude-code/issues/84627))
- **Comments:** 7 | **👍:** 1
- **Impact:** The MCP tool for uploading files in Chrome fails on every call against valid file input elements.
- **Community reaction:** Multiple sessions confirmed; likely a type validation issue in the tool’s argument schema.

### 7. GPU process crash (exitCode 101457950) kills whole app on Windows ([#83744](https://github.com/anthropics/claude-code/issues/83744))
- **Comments:** 6 | **👍:** 0
- **Impact:** Desktop app crashes entirely when the GPU process fails, with no recovery.
- **Community reaction:** Single reporter, but the crash is severe (data loss). No maintainer reply yet.

### 8. Frequent premature compaction + infinite loop with Opus 4.6 on 1M context ([#41984](https://github.com/anthropics/claude-code/issues/41984) — **CLOSED**)
- **Comments:** 5 | **👍:** 3
- **Impact:** Context compaction fires too early, causing prompt freezing and infinite loops.
- **Community reaction:** Closed after investigation; likely a model-specific behavior that has been addressed.

### 9. Published Code artifacts not appearing in mobile app ([#78792](https://github.com/anthropics/claude-code/issues/78792))
- **Comments:** 5 | **👍:** 20
- **Impact:** Artifacts shared via `claude.ai/code/artifact/<id>` show on web and desktop, but are invisible on iOS/Android.
- **Community reaction:** High upvotes – mobile users see a gap in the artifact experience.

### 10. Spoofed “file was modified… don’t tell the user” system-reminder ([#74636](https://github.com/anthropics/claude-code/issues/74636))
- **Comments:** 5 | **👍:** 0
- **Impact:** A false system-reminder appears after Claude’s own Write/Edit tool calls, claiming the file was modified externally. Could confuse the model or cause incorrect behavior.
- **Community reaction:** Detailed report with reproduction steps; maintainers not yet engaged.

---

## Key PR Progress (3 total)

### 1. `/code-review` – Automatic GitHub/GitLab detection and GitLab support ([#34951](https://github.com/anthropics/claude-code/pull/34951) – **OPEN**)
- **Author:** @jangel97
- **Summary:** Adds multi-platform detection (GitHub/GitLab) for the `/code-review` command, including self-hosted GitLab instances. Addresses [#26932](https://github.com/anthropics/claude-code/issues/26932).
- **Status:** Open since March 2026; last updated today. Not yet merged.

### 2. Plugin: entroly-context for budget-aware context management ([#85464](https://github.com/anthropics/claude-code/pull/85464) – **CLOSED**)
- **Author:** @juyterman1000
- **Summary:** A community plugin that provides budget-aware context selection using Entroly, helping users manage codebases that exceed the context window.
- **Status:** Closed (merged or withdrawn? not indicated). No maintainer review comments visible.

### 3. Docs: enforce task tool and model metadata ([#9262](https://github.com/anthropics/claude-code/pull/9262) – **CLOSED**)
- **Author:** @FradSer
- **Summary:** Documents the `claude-3-5-haiku-latest` model parameter and requires the Task tool across commit workflows for context isolation.
- **Status:** Closed (likely merged). Documentation-only change.

---

## Feature Request Clusters

### Session & Conversation Sync
Two highly upvoted issues (##28791, ##15881) ask for seamless history sharing between Claude Code (CLI), the desktop app, and the Claude Desktop companion. No workaround exists beyond manual export/import.

### Keybinding Customization
- **Opt-in submit key** (#74655): Enter = newline, Mod+Enter = submit. Currently Enter always submits in some states, causing accidental sends.
- **Disable session switching** (#85667): Left/right arrow keys can accidentally switch sessions; an option to disable it is requested.

### Skill Replay Control
- **Frontmatter opt-out from post-compaction replay** (#85138): Skills are re-executed after compaction with stale `$ARGUMENTS`; users want a way to prevent this or skip replay entirely.

---

## Developer Pain Points

- **Subscription/usage confusion:** The Fable 5 credits bug (#80749) and rapid unexplained usage limit consumption (#85446) highlight ongoing friction with Max plan billing.
- **Context compaction thrashing:** Multiple reports (#85668, #41984) of autocompact firing too often, causing context refill in 3 turns and prompt freezing.
- **Transcript loss on Windows:** v2.1.227 introduced a regression (#85665) where interactive sessions no longer write transcript JSONL files.
- **TUI corruption:** Windows fullscreen TUI suffers from child-process console writes leaking into the buffer (#85651), and stale mouse tracking floods the composer after terminal handoff (#85290).
- **Plugin management:** Project-scoped plugins are overwritten across projects (#83767) due to a reconciliation bug.
- **SSH remote environments:** Binary upload fails on Synology DSM due to virtual root vs shell-resolved home path mismatch (#78493).
- **Mobile app gaps:** Artifacts (#78792) and likely other features missing from the mobile app.
- **Installation failures on Windows:** All install methods fail with a `defines.json` syntax error (#85663) for some Node.js installations.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-11

## Today’s Update Brief
Two new Rust alpha releases (0.148.0-alpha.6 and 0.147.0-alpha.6.6) were published today. The issue tracker saw 50 items updated in the last 24 hours, with Windows‑specific bugs dominating the top‑comment list. Pull requests focused on internal infrastructure: gRPC notification improvements, Windows SDK hermetic builds, and MCP OAuth regression tests.

## Releases
- [rust-v0.148.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6) — 0.148.0‑alpha.6
- [rust-v0.147.0-alpha.6.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6) — 0.147.0‑alpha.6.6

No changelog details were provided for either release.

## Hot Issues
1. **[#20214 – Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**
   *Author:* @squarepots • *Comments:* 93 • *👍:* 81
   The most‑voted issue: the desktop app becomes unresponsive despite high‑end hardware (AMD Ryzen 5 5600, 32 GB RAM). Affects Plus subscribers on Windows 11 Pro. No maintainer resolution yet.

2. **[#37458 – Codex extension fails to start: “The extension couldn’t load its resources”](https://github.com/openai/codex/issues/37458)**
   *Author:* @YeNai-ShaoXianChao • *Comments:* 31 • *👍:* 1
   VS Code extension shows a resource‑loading error on Windows x64. Extension version 26.803.41515. Users report needing to reinstall or revert.

3. **[#28919 – Windows Codex app missing “Control other devices” tab](https://github.com/openai/codex/issues/28919)**
   *Author:* @zi070410 • *Comments:* 28 • *👍:* 31
   Pro users on Windows cannot access the remote‑control settings tab. The feature works on macOS but is absent from the Windows app despite being advertised.

4. **[#37013 – Windows Computer Use reuses stale node_repl exec context](https://github.com/openai/codex/issues/37013)**
   *Author:* @metyatech • *Comments:* 18 • *👍:* 4
   Computer Use’s bundled client fails on subsequent JS calls because the `@oai/sky` transport is reused from a previous execution. Blocks multi‑step automation on Windows.

5. **[#37383 – Computer Use on Windows fails with 0x80070003](https://github.com/openai/codex/issues/37383)**
   *Author:* @dystopia78 • *Comments:* 13 • *👍:* 4
   App/window discovery fails with a file‑not‑found error during Computer Use sessions on Windows 11 Pro 25H2. Pro x5 subscriber.

6. **[#20930 – Codex App notification doesn’t work with remote connection](https://github.com/openai/codex/issues/20930)**
   *Author:* @yiteng-guo • *Comments:* 10 • *👍:* 16
   Notifications for turn completion are not delivered when the app is used via remote control (e.g., macOS desktop connecting to a remote Linux host).

7. **[#35613 – Code mode reports completion with live nested exec sessions but no model‑visible handles](https://github.com/openai/codex/issues/35613)**
   *Author:* @teamleaderleo • *Comments:* 6 • *👍:* 1
   *Closed.* Code mode can mark a cell as finished while a nested shell session is still active, leaving the model unaware of the running work.

8. **[#37403 – macOS regression: Desktop cannot resume Remote Control / CLI thread after update](https://github.com/openai/codex/issues/37403)**
   *Author:* @xkun1 • *Comments:* 5 • *👍:* 4
   After the August 7 update, resuming a CLI thread from the mobile remote control or local desktop fails with “already has an active writer”. Blocks hybrid workflows.

9. **[#34866 – gpt-5.6-sol: “Script completed” reported while nested shell is still running](https://github.com/openai/codex/issues/34866)**
   *Author:* @Rubicj • *Comments:* 5 • *👍:* 1
   Similar to #35613 but on Linux/CLI. The model thinks the task is finished while the child process continues.

10. **[#34619 – Restore GPT-5.6 Sol’s 372k context window, or provide an opt‑in setting](https://github.com/openai/codex/issues/34619)**
    *Author:* @Kl-11 • *Comments:* 5 • *👍:* 18
    Pro 20x users lost the large context window in a recent update. Requesting either restoration or a toggle to enable it for long‑context tasks.

## Key PR Progress
1. **[#37906 – Make gRPC code‑mode notifications fire‑and‑forget](https://github.com/openai/codex/pull/37906)**
   *Closed.* Sends notifications without waiting for client acknowledgment, preventing cell‑completion delays.

2. **[#37902 – Defer `view_image` processing to history insertion](https://github.com/openai/codex/pull/37902)**
   *Closed.* Moves image decoding/resizing into the shared history path, reducing duplication and handling invalid images gracefully.

3. **[#37898 – Add appearance metadata to thread sections](https://github.com/openai/codex/pull/37898)**
   *Closed.* Adds optional `icon` and `color` fields to custom thread sections, persisted in SQLite and exposed via the app‑server protocol.

4. **[#37896 – Add hermetic Windows SDK and MSVC runtime repositories](https://github.com/openai/codex/pull/37896)**
   *Closed.* Pin specific Windows SDK and MSVC runtime versions for reproducible builds on x64 and arm64. Requires explicit EULA acceptance.

5. **[#37895 – Add configurable Responses API request metadata](https://github.com/openai/codex/pull/37895)**
   *Closed.* Allows product‑owned key/value metadata per Responses API turn (max 16 entries, ASCII keys ≤64 chars). Includes parent and subagent requests.

6. **[#37892 – Validate images before returning `view_image` output](https://github.com/openai/codex/pull/37892)**
   *Closed.* Decodes images in the handler and returns a clear error for invalid input. Re‑encodes code‑mode images as PNG.

7. **[#37891 – Use thread configuration for `app/read`](https://github.com/openai/codex/pull/37891)**
   *Closed.* Adds an optional `threadId` parameter to `app/read` so that the effective thread configuration (feature gating, workspace policy, plugin attribution) is applied.

8. **[#37889 – Ignore Unix socket proxy settings on Windows](https://github.com/openai/codex/pull/37889)**
   *Closed.* Prevents Unix‑socket permission settings from clamping Windows proxy listeners to loopback or emitting warnings.

9. **[#37886 – Extend bundled package discovery and expose its version](https://github.com/openai/codex/pull/37886)**
   *Closed.* Recognizes executables under `codex-resources/` as part of a package layout and adds `InstallContext::package_manifest()` to parse the semantic version.

10. **[#37875 – Honor the configured Windows sandbox level for managed networking](https://github.com/openai/codex/pull/37875)**
    *Closed.* Fixes a bug where managed networking always used the elevated sandbox backend, ignoring the `WindowsSandboxLevel` setting.

## Feature Request Clusters
- **Large context window toggle** – Multiple users (e.g., #34619) ask for restoration of the 372k token context in GPT‑5.6 Sol, or an opt‑in setting.
- **Customizable sidebar behavior** – Requests to disable hover‑triggered sidebar reveal on Windows (#33362) and fix sidebar ordering after pin/unpin (#35090).
- **Improved Computer Use reliability on Windows** – Several issues (#37013, #37383, #28919) point to missing or broken Computer Use features on Windows.
- **Remote control parity** – Users want the “Control other devices” tab on Windows (#28919) and reliable notification delivery during remote sessions (#20930).
- **Safety false‑positive reduction** – Issue #28066 highlights that legitimate Chinese development prompts are incorrectly flagged, interrupting work mid‑run.
- **Rate‑limit reset transparency** – Issue #36170 reports that Plus accounts did not receive the July 29 rate‑limit reset, causing confusion.

## Developer Pain Points
- **Windows app instability** – Freezes, stutters, and full crashes (#20214, #35606) are the top complaint, consuming quotas and blocking workflows.
- **Extension loading failures** – The VS Code extension frequently fails to load its resources on Windows (#37458), requiring manual intervention.
- **Computer Use breakage on Windows** – Multiple reports (stale contexts, discovery errors) make the feature unusable on Windows for Pro subscribers.
- **Post‑update regressions** – The macOS remote‑control regression (#37403) and WebSocket “Broken pipe” errors (#37894, #32555) show that recent updates can break existing workflows.
- **MCP authentication friction** – Trailing‑slash stripping (#37373) and credential contention (#37866) are causing MCP server integration issues.
- **Context‑window reduction** – Users of Pro 20x lost the 372k context window without notice, impacting long‑running tasks.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

好的，这是为您生成的 Kimi Code 社区日报。

---

## Kimi Code 社区日报 - 2026-08-11

### 1. 今日更新简报

过去24小时内，Kimi Code 仓库活跃度极高，共收到 19 个新 Issue 和 19 个新 Pull Request。社区贡献者非常积极，围绕 TUI 卡死、OAuth 错误处理、工作区回滚、技能管理等多个痛点提交了大量修复和新功能 PR。同时，多个关键 Bug 和功能请求引发了集中讨论，显示了社区对稳定性和用户友好性的强烈需求。

### 2. 版本发布

无新版本发布。

### 3. 热点问题 (Hot Issues)

以下选取了 10 个值得关注的问题，涵盖了 Bug、增强和功能请求：

1.  **#108 - [enhancement] /rewind 功能相关**
    - **工作流程影响**: 用户希望在非 Git 项目中也能回退工作区修改，类似 Claude Code 的 `/rewind` 功能。
    - **分析与影响**: 该 Issue 获得 6 个 👍，表明社区对此需求强烈。它触及了 Agent 工作流的核心痛点：撤销对话很容易，但撤销文件修改很难。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/108](https://github.com/MoonshotAI/kimi-code/issues/108)

2.  **#2776 - [Bug] TUI 输入框一次性粘贴大量文字时整个界面完全卡死**
    - **工作流程影响**: 在 TUI 中粘贴大量代码或文本时，整个界面会冻结，需要强制重启。
    - **分析与影响**: 这是一个严重影响用户体验的 Bug，已在 macOS 和 Ubuntu 等平台复现。评论中已有贡献者提交了修复 PR (#2777)，社区响应迅速。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2776](https://github.com/MoonshotAI/kimi-code/issues/2776)

3.  **#2786 - OAuth 连接错误显示成 [internal] 而非 provider.connection_error，丢失 retryable 标志**
    - **工作流程影响**: 用户在运行长任务时，如果遇到 OAuth 服务器短暂不可达，会看到错误的 `[internal]` 错误信息，导致任务直接中断且无法重试。
    - **分析与影响**: 这是一个错误分类问题，导致用户无法正确判断错误来源，并丧失了自动重试的机会。作者已提交修复 PR (#2788)，显示了社区维护者自身对问题的快速跟进。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2786](https://github.com/MoonshotAI/kimi-code/issues/2786)

4.  **#2789 - OAuth 取 token 的重试预算太短且只覆盖 refresh，长任务遇瞬时故障直接断**
    - **工作流程影响**: 与 #2786 相关，但更侧重于重试策略的不足。长任务中，OAuth token 刷新失败导致整个任务终止。
    - **分析与影响**: 作者（与 #2786 相同）指出了重试机制的两个缺陷：预算不足且仅覆盖 refresh 操作。这暴露了 OAuth 流程在长耗时任务中的脆弱性。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2789](https://github.com/MoonshotAI/kimi-code/issues/2789)

5.  **#2781 - [Feature Request] 提交后收到回复前按 Esc 应还原输入框，而非留下 "Interrupted by user"**
    - **工作流程影响**: 用户在提交 prompt 后，在模型响应前按 Esc 取消，当前输入的内容会丢失，并被标记为中断。
    - **分析与影响**: 这是一个优秀的用户体验改进建议。当前行为会丢失用户已输入的内容，令人沮丧。作者已提交修复 PR (#2783)，将输入内容还原回输入框。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2781](https://github.com/MoonshotAI/kimi-code/issues/2781)

6.  **#2779 - 0.34.0 regression (macOS): interactive TUI never executes `[[hooks]]`**
    - **工作流程影响**: 升级到 0.34.0 后，用户配置的 `hooks`（如 `SessionStart`, `UserPromptSubmit`）在 TUI 中完全失效，但 `kimi -p` 模式正常工作。
    - **分析与影响**: 这是一个严重的回归 Bug，导致依赖于 hooks 的自动化工作流（如代码检查、自动提交）在交互模式下失效。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2779](https://github.com/MoonshotAI/kimi-code/issues/2779)

7.  **#2771 - [bug] 如果在网络共享目录运行 kimi 直接报错了**
    - **工作流程影响**: 在 Windows 的网络共享目录中运行 `kimi` 会立即报错 `ENOENT`。
    - **分析与影响**: 这限制了用户在 NAS 或网络驱动器等环境下的使用，可能由文件系统监听机制不兼容导致。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2771](https://github.com/MoonshotAI/kimi-code/issues/2771)

8.  **#2775 - Windows: recurring hard crash - V8 fatal 'Check failed: has_exception()'**
    - **工作流程影响**: 在 Windows 上长时间使用 TUI 会遭遇 V8 引擎致命错误，进程直接崩溃，终端被乱码污染。
    - **分析与影响**: 这是一个非常严重的稳定性问题，作者已遭遇 7-8 次，表明存在内存管理或异常处理方面的深层 Bug。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2775](https://github.com/MoonshotAI/kimi-code/issues/2775)

9.  **#1792 - Windows TUI prints raw ANSI escape sequences instead of rendering**
    - **工作流程影响**: 在 Windows Terminal、PowerShell、cmd 等环境下，TUI 无法正确渲染，而是输出原始 ANSI 转义字符。
    - **分析与影响**: 这是一个长期存在的 Windows 兼容性问题，严重影响 Windows 用户的使用体验。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/1792](https://github.com/MoonshotAI/kimi-code/issues/1792)

10. **#2328 - Anthropic provider: 400 on MCP tools with top-level oneOf/anyOf/allOf**
    - **工作流程影响**: 使用 Anthropic API 时，如果 MCP 工具的 `inputSchema` 包含顶层 `oneOf/anyOf/allOf`，会导致所有请求失败并返回 400 错误。
    - **分析与影响**: 这是一个与特定 AI 提供商的兼容性 Bug，限制了具有复杂 JSON Schema 的 MCP 工具的使用。已有相关修复 PR (#2662) 在审查中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/issues/2328](https://github.com/MoonshotAI/kimi-code/issues/2328)

### 4. 主要 PR 进展 (Key PR Progress)

以下选取了 10 个关键的 Pull Request，展现了社区维护者的活跃和贡献者的努力。

1.  **#2777 - fix(tui): collapse large pastes to prevent input freeze**
    - **描述**: 修复了 #2776 中粘贴大量文本导致 TUI 卡死的问题。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2777](https://github.com/MoonshotAI/kimi-code/pull/2777)

2.  **#2788 - fix(auth): classify OAuth token errors as connection/login, not internal**
    - **描述**: 修复了 #2786 中 OAuth token 错误分类的问题，确保连接错误被标记为可重试的 `provider.connection_error`。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2788](https://github.com/MoonshotAI/kimi-code/pull/2788)

3.  **#2783 - feat(tui): restore prompt to input box on pre-reply Esc cancel**
    - **描述**: 实现了 #2781 中的功能请求，在模型响应前按 Esc 取消，会将用户提交的 prompt 还原回输入框。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2783](https://github.com/MoonshotAI/kimi-code/pull/2783)

4.  **#2785 - feat: add workspace rewind checkpoints**
    - **描述**: 实现了 #108 中的 `/rewind` 功能，通过创建检查点来支持回退工作区文件修改，无需依赖 Git，配合 `/undo` 使用。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2785](https://github.com/MoonshotAI/kimi-code/pull/2785)

5.  **#2780 - feat: add skill discovery commands**
    - **描述**: 实现了 #60 中的功能请求，增加了 `/skills` 和 `kimi skills list` 命令，用于查看已加载的 Skills 及其来源、别名等信息。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2780](https://github.com/MoonshotAI/kimi-code/pull/2780)

6.  **#2782 - feat: show managed quota in footer**
    - **描述**: 实现了 #872 中的功能请求，在 TUI 底部状态栏中显示 5小时和每周的配额使用情况。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2782](https://github.com/MoonshotAI/kimi-code/pull/2782)

7.  **#2784 - feat: add remove-dir workspace management**
    - **描述**: 实现了 #396 功能请求的对称操作，添加了 `/remove-dir` 命令，用于移除已添加的会话目录。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2784](https://github.com/MoonshotAI/kimi-code/pull/2784)

8.  **#2770 - fix(kimi-code): honor --agent-file and --agent at TUI launch**
    - **描述**: 修复了 #2767 中的 Bug，确保在启动 TUI 时使用 `--agent-file` 或 `--agent` 参数能正确加载指定的 Agent 配置。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2770](https://github.com/MoonshotAI/kimi-code/pull/2770)

9.  **#2772 - fix(hooks): log external command failures**
    - **描述**: 修复了 #2766 中的问题，当外部 hooks 运行时失败（如超时、非零退出），现在会记录警告日志，便于排查问题。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2772](https://github.com/MoonshotAI/kimi-code/pull/2772)

10. **#2662 - fix(kosong,agent-core-v2): hoist type into anyOf/oneOf branches**
    - **描述**: 修复了 #2661 中的 Bug，解决了 MCP 工具 JSON Schema 中 `type` 与 `anyOf/oneOf` 并列导致 Anthropic API 400 错误的问题（与 #2328 相关）。
    - **状态**: 开放中。
    - **链接**: [https://github.com/MoonshotAI/kimi-code/pull/2662](https://github.com/MoonshotAI/kimi-code/pull/2662)

### 5. 功能请求簇 (Feature Request Clusters)

今日的 Issue 和 PR 清晰地反映了几个社区集中关注的功能集群：

- **会话和工作区管理增强**: 社区对会话和文件管理有强烈需求，包括：
    - **会话删除**: 多个 Issue 要求在 TUI (#1926) 和 Web 应用 (#2356) 中增加删除会话的功能。
    - **工作区目录管理**: 在 `/add-dir` 命令之后，社区提出了对称的 `/remove-dir` 命令 (#396, #2784)，以及用于回退工作区文件修改的 `/rewind` 功能 (#108, #2785)。
- **技能与配置可见性**: 用户希望更好地了解当前加载的配置，包括：
    - **技能列表**: 请求增加 `/skills` 命令来查看已加载的技能及其来源 (#60, #2780)。
    - **配额显示**: 请求在 TUI 底部栏直接显示 5 小时和每周的配额使用情况 (#872, #2782)。
- **跨会话记忆机制**: 有用户提出了一个通用的、后端无关的记忆提供者机制，用于实现跨会话的自动记忆集成，类似于 Hermes Agent 或 OpenClaw 的方案 (#2075)。

### 6. 开发者痛点 (Developer Pain Points)

今日数据揭示了开发者在使用 Kimi Code 时遇到的几个主要痛点：

- **Windows 兼容性问题**: 多个 Issue 集中在 Windows 平台，包括 TUI 渲染 ANSI 转义码 (#1792)、V8 引擎崩溃 (#2775) 以及在网络共享目录下运行报错 (#2771)。这表明 Windows 平台的稳定性和兼容性仍是重要短板。
- **OAuth 流程的脆弱性**: 长任务中由 OAuth token 刷新失败导致的任务中断是一个高频问题。社区贡献者（同时也是维护者）通过多个 Issue (#2786, #2787, #2789) 和 PR (#2788) 集中暴露并修复了错误分类、重试策略不足等深层问题。
- **TUI 稳定性与用户体验**: 输入卡死 (#2776)、取消操作丢失输入 (#2781) 等 Bug 直接影响了 TUI 的核心交互体验，社区贡献者迅速提交了修复 PR，显示了对这些痛点的快速响应。
- **回归 Bug 的困扰**: `0.34.0` 版本中 `hooks` 功能在 TUI 下完全失效 (#2779) 是一个典型的回归 Bug，影响了依赖于自动化工作流的用户，强调了持续集成和回归测试的重要性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-08-11

## Today’s Update Brief
OpenCode released **v1.18.16** with config parsing fixes and desktop improvements. The community remains active with **50 issues and 50 PRs** updated in the last 24 hours, including a long-running high-CPU thread (46 comments) and a new contributor‑led refactoring wave that moves filesystem logic out of core services. The maintainers merged several PRs from the `kitlangton` series targeting a cleaner separation between core and config‑side code.

## Releases
**v1.18.16** – Core bugfixes: unknown top‑level config fields are now ignored (instead of failing), and projects opened from Home are properly registered. Desktop improvements: right‑click opens the project menu in Home. Desktop bugfix: fallback listing on error.

📎 https://github.com/anomalyco/opencode/releases/tag/v1.18.16

## Hot Issues (Top 10 by Comment Count)

1. **#30086 – High CPU usage in newer versions**
   User reports CPU spiked dramatically ~7 days ago; 10 concurrent sessions now impossible, mouse lag. 46 comments, 22 👍.
   📎 https://github.com/anomalyco/opencode/issues/30086

2. **#26220 – Infinite loop after tool calls (Zen/big‑pickle)**
   Tool calls complete, then process enters infinite loop, unresponsive. 8 comments, 4 👍.
   📎 https://github.com/anomalyco/opencode/issues/26220

3. **#40958 – DeepSeek V4 Flash Free context capped at 200K instead of native 1M**
   Metadata configuration issue reduces utility for long‑context tasks. 4 comments.
   📎 https://github.com/anomalyco/opencode/issues/40958

4. **#26487 – `chunkTimeout` fails for AWS Bedrock / EventStream**
   Configuration option completely ineffective for non‑SSE streaming protocols. 3 comments.
   📎 https://github.com/anomalyco/opencode/issues/26487

5. **#35432 – `tool_call: false` does not disable tools**
   Config ignored; tools are unconditionally sent with `tool_choice: "auto"`. 3 comments.
   📎 https://github.com/anomalyco/opencode/issues/35432

6. **#36203 – Input box content cleared when switching conversations**
   Drafted messages lost when switching away and back. 2 comments.
   📎 https://github.com/anomalyco/opencode/issues/36203

7. **#40642 – MiMo V2.5 advertises video support but never receives video**
   Model responds “没收到” regardless of format. 2 comments.
   📎 https://github.com/anomalyco/opencode/issues/40642

8. **#41609 – Copy message as raw markdown (duplicate request)**
   Second issue for same feature; no way to copy LLM markdown as markdown. 2 comments.
   📎 https://github.com/anomalyco/opencode/issues/41609

9. **#38458 – SSE stream closes mid‑turn**
   SSE not persistent as documented; user couldn’t get it to work. 2 comments.
   📎 https://github.com/anomalyco/opencode/issues/38458

10. **#39339 – Intermittent “internal server error” during analysis**
    Frequent retry messages on Windows. 2 comments.
    📎 https://github.com/anomalyco/opencode/issues/39339

## Key PR Progress (Top 10)

1. **#41630 – fix(session): recover orphan reasoning stream parts**
   Closes #36241. AI SDK missing reasoning start now handled gracefully.
   📎 https://github.com/anomalyco/opencode/pull/41630

2. **#41624 – fix(tui): collapse execute child details**
   Keeps each `execute` child visible but constrained to one line; click to expand.
   📎 https://github.com/anomalyco/opencode/pull/41624

3. **#41629 – refactor(core): move instruction discovery to config side**
   Part of ongoing core‑service cleanup; `InstructionDiscovery` now stores values, not filesystem.
   📎 https://github.com/anomalyco/opencode/pull/41629

4. **#41627 – chore: run beta sync from v2**
   Prepares v2 beta publishing pipeline; serializes runs and uses job token.
   📎 https://github.com/anomalyco/opencode/pull/41627

5. **#41626 – feat(desktop): publish v2 beta builds**
   Builds beta branch from v2, publishes desktop releases with bundled V2 CLI.
   📎 https://github.com/anomalyco/opencode/pull/41626

6. **#14743 – fix(cache): improve Anthropic prompt cache hit rate**
   Closes #5416, #5224. Fixes cross‑repo and cross‑session cache misses.
   📎 https://github.com/anomalyco/opencode/pull/14743

7. **#40977 – fix(i18n): use 词元 instead of 令牌 for token in zh locale**
   Closes #40976. Replaces API‑credential term with LLM‑appropriate term.
   📎 https://github.com/anomalyco/opencode/pull/40977

8. **#41622 – refactor(core): skill service stores values, config plugin owns filesystem**
   Continues core‑service filesystem‑free direction.
   📎 https://github.com/anomalyco/opencode/pull/41622

9. **#41619 – fix(util): no filesystem side effects at global module load**
   Prevents disk writes when importing `@opencode-ai/util/global`; enables Cloudflare workerd.
   📎 https://github.com/anomalyco/opencode/pull/41619

10. **#41625 – fix(app): wire desktop menu accelerators to renderer commands**
    Closes #41592. Fixes non‑native menu accelerators on Windows/Linux.
    📎 https://github.com/anomalyco/opencode/pull/41625

## Feature Request Clusters

- **Copy message as raw markdown** – Two issues (#14041, #41609) request the ability to copy the LLM’s markdown response as markdown (not rendered text).
- **VS Code extension install clarity** – Multiple issues (#10517, #31500) report ambiguous manual install instructions and difficulty finding the correct extension in the marketplace.
- **Worktree‑based workspace switching** – #36048 proposes CLI commands for worktree create/list/remove with stash‑based warp.
- **Opt‑out of exit splash** – #38010 (closed) and #36609 request a config option to disable the exit splash for embedded/white‑label use.
- **Big Pickle / model context tuning** – #41573 asks about “big pickle” (rumored to be GLM 4.6) and suggests switching to a model with a larger context window.

## Developer Pain Points

- **High CPU usage** (#30086) – sudden spike, making multi‑session workflows impossible.
- **Infinite loop after tool calls** (#26220) – process becomes unresponsive, halting work.
- **Ignored `tool_call: false` config** (#35432) – prevents using models without tool‑call support.
- **SSE stream instability** (#38458) – mid‑turn closures contradict documented persistence.
- **Desktop focus issues** (#40866) – form inputs lose focus, Tab/click broken.
- **Context cap misconfiguration** (#40958) – DeepSeek V4 Flash limited to 200K instead of native 1M.
- **Streaming protocol gaps** (#26487) – `chunkTimeout` ineffective for EventStream‑based providers (AWS Bedrock, Google Vertex).
- **Unbounded part‑table growth** (#40816) – edit tool snapshots bloat sessions, slowing every prompt.

</details>