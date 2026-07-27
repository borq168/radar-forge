# AI CLI Tools Community Digest 2026-07-27

> Generated: 2026-07-27 00:26 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

## Cross-Tool Comparison Report – 2026-07-27

### 1. Daily Cross-Tool Overview
No new releases were published by any of the tracked AI CLI tools today. Despite the release lull, issue and PR activity remained strong across all four repositories. Community attention concentrated on Windows stability, model reasoning transparency, and billing/usage fairness. The largest single focus was on making thinking/reasoning output visible and streamed in real time, a demand echoed by users of Claude Code and Kimi Code.

### 2. Activity Comparison

| Tool              | Issues Updated | PRs Opened/Updated | Releases |
|-------------------|----------------|---------------------|----------|
| Claude Code       | 50             | 7                   | None     |
| OpenAI Codex      | 50             | 16                  | None     |
| Kimi Code         | 16             | 18                  | None     |
| OpenCode          | 50             | 20                  | None*    |

*OpenCode digest was incomplete; no release was mentioned in the available portion.

### 3. Shared Feature Directions

- **Thinking/Reasoning Transparency**
  Claude Code users are pushing hard for always‑on thinking visibility (#8477, 324 👍) and real‑time streaming of reasoning tokens (#30660). Kimi Code users similarly request thinking display in the Web UI (#2214), noting the CLI already supports it. The demand for visible, progressive reasoning is a clear cross‑tool requirement today.

- **Windows Platform Hardening**
  All three tools with complete digests saw significant Windows‑specific friction. Claude Code: background service resource usage (#57371), CLI hangs (#81484), and crash‑corrupted MSIX packages (#81306). Codex: process storms freezing machines (#34260), in‑app browser crashes (#32683, #34133). Kimi Code: CLI hangs (#2219), Git Bash path resolution failures (#2199), and TUI scroll jitter. Windows reliability is a shared pain point.

- **TUI/Terminal UX Improvements**
  Claude Code users want thinking streaming to replace the spinner (#30660). Kimi Code users request a persistent shell mode (#2213), an option to disable the alternate screen for SSH scrollback (#2195), and mouse text selection in the prompt editor (#2202). Codex improved TUI responsiveness by skipping inactive threads (#35525). Enhancing terminal‑based UX is a cross‑tool direction.

- **Billing and Usage Fairness**
  Claude Code has multiple reports of unexplained usage spikes and idle‑time token leaks (#80199, #80705). OpenCode’s community is actively requesting quota adjustments after DeepSeek V4 Pro’s permanent 75% price cut (#28846). Users are demanding more transparent, fair billing across providers.

### 4. Differentiation Analysis

- **Claude Code** focuses on agent orchestration reliability and security. Today’s top issues include foreground subagent interrupts (#78915), tool‑use edge cases, and firewall/devcontainer security fixes (#81423, #81426). The community is also deeply concerned about privacy controls (email visibility, URL handler path) and usage tracking opacity.

- **OpenAI Codex** is strongly oriented toward cross‑platform desktop support and authentication. The most‑upvoted issue is a Linux desktop app request (#11023, 852 👍). Today’s PRs heavily target MCP OAuth serialisation and token management (#30295, #30416, etc.), and many issues revolve around Windows desktop process management and in‑app browser crashes.

- **Kimi Code** addresses a multi‑surface (CLI, Web, VS Code, desktop) user base with a notable Chinese‑language community. Pain points today included Web UI parity with the CLI (missing thinking stream, broken file mentions), Windows Git Bash interoperability, and documentation drift between Chinese and English docs. PRs were highly responsive to reported issues, with several direct fixes for the same day’s bugs.

- **OpenCode** (from the available snippet) shows a subscription‑sensitive user base concerned with quota fairness after upstream model price cuts. The only detailed issue indicates a service‑blocking 401 error for Go subscribers.

### 5. Community Activity Notes

- **Raw issue volume**: Codex, Claude Code, and OpenCode all recorded 50 issue updates each; Kimi Code had 16.
- **PR throughput**: Kimi Code led with 18 PR updates, many of them direct fixes for reported issues. Codex had 16 PRs, OpenCode 20, Claude Code 7.
- **Releases**: None across any tool on this date.
- **Maintainer responsiveness**: Kimi Code’s PRs closed several reported bugs within the same day (e.g., #1918, #1919, #2210, #2204). Codex advanced OAuth improvements and TUI fixes. Claude Code merged documentation and security fixes. OpenCode’s digest was incomplete, so maintainer activity cannot be assessed fully.

### 6. Evidence-Backed Observations

1. **Windows is the least reliable platform for AI CLI tooling today.** Three independent tools—Claude Code, Codex, and Kimi Code—all had multiple active Windows‑specific bugs ranging from process storms and crashes to path resolution failures and TUI glitches. This is not a single‑tool problem.

2. **Users want to see the model’s reasoning in real time, not just a spinner.** Claude Code’s two thinking‑related issues collectively have over 366 👍 and 110 comments. Kimi Code’s Web UI thinking request (#2214) reinforces the demand. This is a clear, multi‑tool user expectation.

3. **Usage and billing transparency is becoming a shared concern.** Claude Code users report unexplained token consumption and post‑update spikes. OpenCode users argue that subscription quotas should reflect upstream price cuts. Both communities are asking for tools to audit or justify consumption.

4. **Terminal UX enhancements are being actively developed across tools.** Kimi Code PRs added mouse text selection (#2202) and optimized redraws (#2205). Codex improved TUI thread management (#35525). Claude Code’s thinking streaming request is a terminal UX demand. The terminal remains a primary interface and is receiving focused attention.

5. **No tool released a new version today, but issue and PR velocity remained high.** This suggests a period of active development and bug fixing without a release milestone, with communities providing steady feedback and maintainers engaging in code changes.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-27

## Today's Update Brief

A moderate-activity day with 7 community PRs opened and 50 issues updated. No new releases shipped. The most active issue remains the long-standing request for visible thinking output (#8477, now at 92 comments and 324 👍). Several Windows stability and usage-tracking bugs surfaced, alongside a cluster of stale issues being auto-closed by the bot.

---

## Releases

*No new releases in the past 24 hours.*

---

## Hot Issues

1. **[#8477 [FEATURE] Add Option to Always Show Claude's Thinking](https://github.com/anthropics/claude-code/issues/8477)**
   - **92 comments | 324 👍 | Opened 2025-09-30**
   - Users want an option to always display the model's extended thinking/reasoning tokens in the TUI, rather than only seeing a spinner. The request gained renewed attention after v2.0.0 changed thinking visibility behavior. This is the highest-engagement open issue on the repo.

2. **[#30660 Stream extended thinking output in real-time during interactive mode](https://github.com/anthropics/claude-code/issues/30660)**
   - **18 comments | 42 👍 | Opened 2026-03-04**
   - A companion to #8477: users request that reasoning tokens stream progressively during the thinking phase rather than appearing all at once after completion. Particularly relevant for long reasoning chains where the spinner provides no progress indication.

3. **[#57371 Disable bundled Cowork background service on Windows](https://github.com/anthropics/claude-code/issues/57371)**
   - **14 comments | 39 👍 | Opened 2026-05-08**
   - Windows users who don't use the Cowork collaboration feature are asking for a way to disable the `CoworkVMService` background process. The service runs regardless of whether Cowork is configured, consuming resources unnecessarily.

4. **[#41015 Allow configuring or disabling the URL Handler app install location](https://github.com/anthropics/claude-code/issues/41015)**
   - **9 comments | 34 👍 | Opened 2026-03-30**
   - On macOS, Claude Code's URL Handler is hardcoded to install into `~/Applications/`. Users with managed environments, custom app layouts, or those who simply don't want apps in that directory want a configuration option or the ability to disable this entirely.

5. **[#44380 Channel messages don't wake idle sessions](https://github.com/anthropics/claude-code/issues/44380)**
   - **11 comments | 5 👍 | Opened 2026-04-06**
   - When using `--channels plugin:telegram`, incoming messages display in the terminal but do not interrupt the idle REPL prompt to trigger processing. The session waits for manual keyboard input, defeating the purpose of async channel notifications.

6. **[#80199 Max X5 Usage Instantly Reaches 100% After Software Update](https://github.com/anthropics/claude-code/issues/80199)**
   - **5 comments | Opened 2026-07-22**
   - A user reports that immediately after updating Claude Code, their Max X5 usage counter jumped to 100% with no actual usage. This suggests a possible accounting bug triggered by the update process itself.

7. **[#80705 Usage Leak Problem](https://github.com/anthropics/claude-code/issues/80705)**
   - **5 comments | Opened 2026-07-23**
   - Another usage tracking complaint: a user describes unexplained consumption of their Max plan limits, with tokens being consumed even during idle periods. No clear repro steps yet.

8. **[#64479 Edit tool fails on mixed literal/escape Unicode in multi-line old_string](https://github.com/anthropics/claude-code/issues/64479)**
   - **5 comments | Opened 2026-06-01**
   - A lingering bug where the Edit tool fails when the `old_string` spans a region containing both literal Unicode codepoints and `\uXXXX` escape sequences. The whole-string swap fallback also fails in this scenario. Reportedly a continuation of #52813.

9. **[#81306 Windows Desktop crash wedged MSIX package; recovery required manual package removal](https://github.com/anthropics/claude-code/issues/81306)**
   - **3 comments | Opened 2026-07-26**
   - A crash on Windows Desktop (MSIX install) left the package in a corrupted state. Recovery required manual removal via PowerShell, which destroyed local app data including code-tab group assignments and crash dumps used for debugging.

10. **[#78915 "[Request interrupted by user for tool use]" on foreground subagent dispatch with no user interrupt](https://github.com/anthropics/claude-code/issues/78915)**
    - **2 comments | Opened 2026-07-18**
    - A puzzling agent bug: foreground `Task`/subagent dispatches return the exact string "[Request interrupted by user for tool use]" despite no user interaction occurring. The reporter cross-linked three related but distinct open issues (#78255, #74514, #74116).

---

## Key PR Progress

1. **[#81500 Fix 404 walkthrough links in the AWS gateway example](https://github.com/anthropics/claude-code/pull/81500)** — Community contributor fixes 7 broken documentation links across the AWS gateway example files. All pointed to a URL returning 404.

2. **[#81421 Fix bash-sandbox example to fail closed when sandbox unavailable](https://github.com/anthropics/claude-code/pull/81421)** — Adds `failIfUnavailable` to the bash-sandbox settings example, ensuring the sandbox enforcement is strict by default. Addresses a gap between the documented behavior ("Bash tool must run inside of sandbox") and the actual config.

3. **[#81423 Fix devcontainer: block IPv6 egress to close firewall allowlist bypass](https://github.com/anthropics/claude-code/pull/81423)** — Critical security fix: the devcontainer firewall only configured `iptables` (IPv4), leaving IPv6 traffic completely unfiltered on dual-stack Docker networks. This PR adds `ip6tables` rules to close the bypass.

4. **[#81426 Fix security-guidance: support Windows venv layout for agentic reviewer](https://github.com/anthropics/claude-code/pull/81426)** — The agentic commit reviewer in the security-guidance toolkit was unavailable on Windows because the bootstrap script returned `SKIP_WIN32` early. This PR adds Windows venv path detection to enable the reviewer on win32.

5. **[#68693 Fix duplicate label handling: add labels additively, don't replace existing](https://github.com/anthropics/claude-code/pull/68693)** — When the `closeIssueAsDuplicate` script applied the `[duplicate]` label, it used a PATCH that replaced the entire label set, silently erasing platform/area/priority labels. This fix appends the label instead.

6. **[#38167 Devcontainer: use authenticated GitHub API requests if GH_TOKEN is set](https://github.com/anthropics/claude-code/pull/38167)** — Prevents the devcontainer firewall init script from hitting GitHub API rate limits in shared-IP environments by using a bearer token when available.

7. **[#20448 Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)** — A community plugin proposal adding trust-native governance features (T3 trust tensors, entity witnessing, R6 audit trails) for organizations needing cryptographic provenance and verifiable accountability in their AI workflows.

---

## Feature Request Clusters

- **Thinking/Reasoning Transparency** (#8477, #30660): Users consistently want to see model reasoning in real time. The two issues together represent over 366 👍 and 110 comments, making this the most-demanded UX improvement.

- **Windows Platform Polish** (#57371, #81484, #81371, #81306): A wave of Windows-specific issues covering background service control, CLI hangs, crash recovery, and missing HCS services. Windows users are expressing frustration with reliability and resource management.

- **Usage & Billing Visibility** (#80199, #80705, #70758): Multiple reports of usage counters behaving unexpectedly — jumping to 100% after updates, leaking during idle periods, and depleting faster than normal. Users lack tools to audit or understand their consumption.

- **Privacy & Configuration Control** (#63024, #41015): Requests to hide the email address from the welcome banner and to configure the URL Handler install path reflect a desire for more control over what Claude Code exposes and where it places files.

---

## Developer Pain Points

1. **Windows reliability gaps**: From CLI hangs (#81484) to crash-corrupted MSIX packages (#81313) and missing HCS services (#81371), Windows users face a higher friction experience compared to macOS/Linux. The Cowork background service (#57371) adds resource overhead that users can't opt out of.

2. **Opaque usage tracking**: Multiple reports of usage counters behaving unexpectedly — spiking after updates, leaking during idle, or depleting 3-4x faster than normal — with no user-facing tools to audit token consumption. This erodes trust in billing accuracy.

3. **Agent tooling edge cases**: Foreground subagent dispatches returning spurious interrupt messages (#78915), Bedrock 503 errors permanently halting autonomous sessions (#74514), and `/exit` warning about phantom background agents (#74116) suggest the agent orchestration layer has several unresolved race conditions and state management bugs.

4. **Silent failure modes**: Hook launch failures (#81458) and channel message notifications (#44380) can fail without any visible error, leaving users unaware that guardrails or integrations aren't working until they manually inspect transcripts.

5. **Thinking visibility**: The sustained volume of engagement on #8477 and #30660 indicates that the current "spinner only" approach to extended thinking is a significant workflow friction point, particularly for debugging prompt engineering and understanding model behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest – 2026-07-27

### 1. Today’s Update Brief
No new releases surfaced in the past 24 hours. The repository saw a high volume of activity with 50 issues updated and 16 pull requests closed or advanced, many addressing critical crashes, authentication, and storage/performance problems. Community attention is heavily focused on Linux desktop support, Windows stability, and MCP OAuth improvements.

---

### 2. Releases
*None in the last 24 hours.*

---

### 3. Hot Issues
1. **Linux desktop app request** [#11023](https://github.com/openai/codex/issues/11023)
   *Affected workflow:* Linux users who want to use the Codex desktop app without relying on macOS or Windows. The mac app is reportedly “almost unusable” due to another issue (#10432), driving demand for a native Linux client.
   *Impact:* 187 comments and 852 👍 reactions make this the most upvoted open issue.
   *Community reaction:* Strong, coordinated support; many users detail their hardware and workflows to justify the need.

2. **Windows taskkill.exe/conhost.exe process storm** [#34260](https://github.com/openai/codex/issues/34260)
   *Affected workflow:* Windows desktop sessions that spawn hundreds of lingering `taskkill.exe`/`conhost.exe` processes, exhausting WMI (Windows Management Instrumentation) quota and freezing the entire machine.
   *Impact:* 32 comments, 10 👍 – users report complete system unresponsiveness until a reboot.
   *Community reaction:* Frustration; some have built workarounds (manual process cleanup scripts) while waiting for a fix.

3. **Excessive SQLite WAL writes from TRACE logs ignoring RUST_LOG** [#17320](https://github.com/openai/codex/issues/17320)
   *Affected workflow:* Codex IDE extension (VSCodium) on Linux writes excessive write-ahead log (WAL) data during streaming, causing high disk I/O and degraded performance.
   *Impact:* 27 comments, 39 👍 – noticeable slowdowns and shortened SSD endurance.
   *Community reaction:* Users are manually clearing WAL files or setting restrictive environment variables, but request a proper fix.

4. **Windows App crash when Browser Use opens a page** [#32683](https://github.com/openai/codex/issues/32683)
   *Affected workflow:* On Windows, Codex App crashes with `0xC0000005` in `chrome.dll` when the in-app browser is used, particularly during agent tasks.
   *Impact:* 26 comments, 8 👍 – reproducible on version 26.707.8168.0 with Pro subscriptions.
   *Community reaction:* Several users report being unable to use the browser feature at all; some ask for a rollback.

5. **OAuth authentication fails at issuer validation** [#31573](https://github.com/openai/codex/issues/31573)
   *Affected workflow:* CLI (v0.143.0) and MCP OAuth flows fail with issuer validation errors, blocking authentication for services that rely on strict issuer checks.
   *Impact:* 24 comments, 55 👍 – prevents use of OAuth-protected MCP servers.
   *Community reaction:* Developers are sharing workarounds involving custom issuer normalization, but a proper fix is anticipated.

6. **GPU crash due to Code Integrity block on vk_swiftshader.dll** [#34133](https://github.com/openai/codex/issues/34133)
   *Affected workflow:* Windows 10, Codex 26.715.4045.0 – when the in-app browser captures a screenshot, the GPU process crashes because Windows Code Integrity rejects the bundled SwiftShader DLL.
   *Impact:* 20 comments, 0 👍 (but a detailed technical analysis).
   *Community reaction:* Users note that the issue also affects session recovery and can cause freezes; some are disabling hardware acceleration.

7. **Multiple named accounts per app/connector** [#20500](https://github.com/openai/codex/issues/20500)
   *Affected workflow:* Developers who need to use multiple separate accounts for the same service (e.g., personal and work GitHub, Slack) within a single Codex session.
   *Impact:* 19 comments, 89 👍 – high demand for explicit account selection and privacy boundaries.
   *Community reaction:* Several users mention this is a dealbreaker for enterprise adoption; they describe detailed use cases.

8. **GPT-5.6 serializes independent Code Mode calls; batching reduces usage** [#35050](https://github.com/openai/codex/issues/35050)
   *Affected workflow:* The model often serializes independent tool calls that could be executed in parallel, increasing token consumption and latency. Manual batching by the user lowered weighted usage by 27–45%.
   *Impact:* 13 comments, 14 👍 – users on Pro and Business plans see unnecessary cost and slower responses.
   *Community reaction:* Requests for a model improvement or a “parallelism hint” in the API.

9. **Explicit deletion controls for archived Codex cloud sessions** [#24610](https://github.com/openai/codex/issues/24610)
   *Affected workflow:* Privacy-conscious developers find that archived cloud sessions cannot be permanently deleted, only archived, leaving sensitive project context accessible.
   *Impact:* 13 comments, 17 👍 – strong sentiment about data retention and compliance.
   *Community reaction:* Comparisons to other tools’ data deletion policies; calls for a “forget” feature.

10. **Remote control Windows to Android not working** [#31786](https://github.com/openai/codex/issues/31786)
    *Affected workflow:* Codex desktop on Windows fails to establish a remote control session with an Android phone; pairing appears to succeed but remains stuck on “connecting”.
    *Impact:* 12 comments, 0 👍 – blocks the promised cross-device experience.
    *Community reaction:* Users are checking network configurations and Bluetooth; no workaround found.

---

### 4. Key PR Progress
1. **Track model and personality in world state** [#35530](https://github.com/openai/codex/pull/35530)
   Adds model and personality sections to the persisted world-state snapshot, enabling accurate replay of model-switch instructions.

2. **Skip inactive TUI threads without pending user interaction** [#35525](https://github.com/openai/codex/pull/35525)
   Prevents buffered requests from inactive threads from being considered when surfacing pending interactions, improving TUI responsiveness.

3. **Preserve terminal turn errors in replayed history** [#35524](https://github.com/openai/codex/pull/35524)
   Ensures that errors embedded in turn completion events are retained during replay, so failed retries are not restored as completed turns.

4. **Shut down the in-process outbound router explicitly** [#35523](https://github.com/openai/codex/pull/35523)
   Adds an explicit shutdown signal to prevent the in-process app-server’s outbound router from hanging during shutdown due to lingering senders.

5. **Serialize MCP OAuth login and logout** [#30295](https://github.com/openai/codex/pull/30295)
   Ensures that MCP OAuth login and logout operations are serialized to avoid race conditions (part of the OAuth stack).

6. **Report MCP OAuth Auto store drift** [#30296](https://github.com/openai/codex/pull/30296)
   Introduces drift detection and reporting for the OAuth store, helping diagnose inconsistencies.

7. **Route MCP OAuth recovery through Codex** [#30294](https://github.com/openai/codex/pull/30294)
   Routes all OAuth recovery flows through a central Codex component, improving reliability.

8. **Serialize authoritative MCP OAuth refresh transactions** [#30416](https://github.com/openai/codex/pull/30416)
   Adds serialisation for refresh token transactions to ensure atomicity and prevent token corruption.

9. **Raise the MCP server recursion limit** [#35414](https://github.com/openai/codex/pull/35414)
   Bumps the Rust recursion limit for MCP server crates to 256, avoiding stack overflows in deeply nested operations.

10. **Let idle auto-attached threads unload** [#30985](https://github.com/openai/codex/pull/30985) (open)
    Introduces a distinction between implicit observer attachments and explicit subscriptions, allowing idle core-created threads to unload after 30 minutes, reducing resource usage.

---

### 5. Feature Request Clusters
- **Linux & cross-platform desktop support** – [#11023](https://github.com/openai/codex/issues/11023) (Linux app), [#35119](https://github.com/openai/codex/issues/35119) (WSL repository detection) reflect a strong desire for flawless Linux and WSL experiences.
- **Account management & privacy** – [#20500](https://github.com/openai/codex/issues/20500) (multiple named accounts), [#24610](https://github.com/openai/codex/issues/24610) (session deletion) highlight the need for granular control over accounts and data retention.
- **Model behavior & context window** – [#35050](https://github.com/openai/codex/issues/35050) (parallel tool calls), [#34619](https://github.com/openai/codex/issues/34619) (restore 372k context window) point to tuning the model’s efficiency and configurability.
- **Windows reliability & performance** – Multiple open issues [#34260](https://github.com/openai/codex/issues/34260), [#33368](https://github.com/openai/codex/issues/33368), [#31989](https://github.com/openai/codex/issues/31989) cluster around

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-27

## Today’s Update Brief
No new releases shipped in the past 24 hours, but the repository saw high activity with 16 issue updates and 18 pull request updates. The community focus is on bug fixes across the CLI, Web, VS Code, and desktop surfaces, along with several feature requests targeting terminal workflows and Web UI parity. Several PRs directly address reported issues, including fixes for Windows path resolution, VS Code markdown links, and agent step‑limit behaviour.

## Releases
None in the past 24 hours.

## Hot Issues
1. **Feature Request: Continuous/Persistent Shell Mode (!! mode)** [#2213](https://github.com/MoonshotAI/kimi-code/issues/2213)
   A user requested a persistent terminal session inside the CLI where the AI can be invoked intermittently without leaving the shell. The use‑case targets DevOps workflows that blend manual commands with AI assistance. Two comments so far.

2. **[BUG] Windows x64: Kimi Code CLI v0.29.1 hangs forever on every prompt** [#2219](https://github.com/MoonshotAI/kimi-code/issues/2219)
   A Windows 11 user reported that the CLI hangs indefinitely on every prompt when using the Kimi Platform API key and `kimi-k2.6` model. The issue was closed today (1 comment).

3. **[Docs] Chinese help documentation outdated and inconsistent with English docs** [#2215](https://github.com/MoonshotAI/kimi-code/issues/2215)
   The Chinese documentation at `kimi.com` still references `~/.kimi/config.toml` and other paths that no longer match the current CLI behaviour, creating confusion for Chinese‑speaking users. One comment.

4. **Feature request: option to disable alternate screen for terminal scrollback (SSH use case)** [#2195](https://github.com/MoonshotAI/kimi-code/issues/2195)
   The TUI renders in the alternate screen buffer, preventing native terminal scrollback. This is a significant pain point for users accessing Kimi Code over SSH. One comment.

5. **kimi-web: @ file mention shows no matches in the initial prompt of a new conversation** [#2189](https://github.com/MoonshotAI/kimi-code/issues/2189)
   In the web frontend, the `@` file mention feature returns no results before the first message is sent, breaking the workflow of starting a conversation by referencing a file. One comment.

6. **[enhancement] Web UI should display reasoning/thinking content like Shell mode** [#2214](https://github.com/MoonshotAI/kimi-code/issues/2214)
   The Web UI does not show the model’s intermediate reasoning stream, while the CLI shell mode already supports `show_thinking_stream` since v1.34.0. No comments yet.

7. **[Bug] Web: pasted images intermittently dropped; model only receives placeholder** [#2209](https://github.com/MoonshotAI/kimi-code/issues/2209)
   Images pasted into Kimi Code Web are sometimes lost, with the model seeing only `[image omitted for provider compatibility]`. This happens unpredictably even within the same session. No comments.

8. **[bug] Windows: file tools cannot resolve Git Bash POSIX paths (`/tmp`, `/home`) produced by shell commands** [#2199](https://github.com/MoonshotAI/kimi-code/issues/2199)
   On Windows, Git Bash paths generated by the Bash tool are not understandable by the file tools, causing operations to fail. No comments.

9. **[Bug] Kimi Work desktop: Swarm mode selection no longer reaches the runtime** [#2198](https://github.com/MoonshotAI/kimi-code/issues/2198)
   A regression in Kimi Work desktop (app 3.1.4+) prevents Swarm mode from being injected into the session, despite the session still running as a swarm agent. No comments.

10. **[bug] Markdown file links in assistant output are never clickable in the VS Code extension** [#2194](https://github.com/MoonshotAI/kimi-code/issues/2194)
    The VS Code extension renders local file links as plain text; only `https://` links work. This affects users on Fedora Linux containers via VSCodium. No comments.

## Key PR Progress
1. **fix(vscode): preserve multi-question answers** [#1918](https://github.com/MoonshotAI/kimi-code/pull/1918) (closed)
   Fixes an issue where the VS Code dialog would submit the first answer immediately, dropping remaining questions in an `AskUserQuestion` request. Now walks through all questions before submitting.

2. **fix(cli): flush stream-json output** [#1919](https://github.com/MoonshotAI/kimi-code/pull/1919) (closed)
   Ensures that headless stream‑JSON output is fully flushed before process exit, preventing missing final messages when piped to slow consumers.

3. **fix(web): reconcile subagents stuck at “running”** [#1969](https://github.com/MoonshotAI/kimi-code/pull/1969) (open)
   Addresses a bug where the web UI keeps a subagent row in the `running` state even after the subagent has finished, often triggered by reconnection.

4. **fix(agent-core): continue goal pursuit when a goal turn hits the per-turn step limit** [#2210](https://github.com/MoonshotAI/kimi-code/pull/2210) (closed)
   Prevents a goal from being paused when a turn hits `max_steps_per_turn`; the agent now continues the goal across turns as expected.

5. **fix(agent-core): suppress the spurious error event for step-capped goal turns** [#2217](https://github.com/MoonshotAI/kimi-code/pull/2217) (open)
   Follow‑up to #2210: removes the red error banner that the TUI would incorrectly show when a goal turn was self‑limited by the step cap after the fix.

6. **feat(tui): support mouse text selection in prompt editor** [#2202](https://github.com/MoonshotAI/kimi-code/pull/2202) (open)
   Adds mouse‑based text selection in the TUI prompt editor, improving editing of long multi‑line prompts without disrupting native terminal selection.

7. **fix(agent-core): only send prompt_cache_key to official OpenAI endpoints** [#2203](https://github.com/MoonshotAI/kimi-code/pull/2203) (open)
   Stops sending the `prompt_cache_key` parameter to non‑OpenAI providers that reject unknown parameters (e.g., NVIDIA NIM), fixing `400` errors.

8. **fix(tui): skip destructive redraw for in-place changes above the viewport** [#2205](https://github.com/MoonshotAI/kimi-code/pull/2205) (open)
   Optimises TUI rendering when subagent status headers tick above the visible area, preventing unnecessary full redraws and improving performance.

9. **fix(vscode): make markdown file links in assistant output clickable** [#2204](https://github.com/MoonshotAI/kimi-code/pull/2204) (open)
   Directly fixes issue #2194 by enabling `file://` and `vscode://file/` links in the VS Code extension’s webview, so local file references become clickable.

10. **fix(kaos): resolve Git Bash POSIX paths for file tools on Windows** [#2200](https://github.com/MoonshotAI/kimi-code/pull/2200) (open)
    Implements a shell‑path bridge that translates between Windows paths and Git Bash’s POSIX dialect, resolving issue #2199 so file tools can use paths generated by Bash commands.

## Feature Request Clusters
- **Persistent & integrated terminal experiences**
  Multiple requests ask for a persistent shell mode inside the CLI (#2213), an option to disable the alternate screen buffer for scrollback (#2195), and an integrated terminal panel in the Web UI (#2218). Together they reflect a strong desire for more seamless CLI‑to‑AI handoffs and better SSH workflows.

- **Web UI parity with the CLI**
  Users want the Web UI to display reasoning/thinking content like the shell mode (#2214), support multiple backend machines in a single page (#2206), and fix the `@` file‑mention that fails on the first prompt (#2189). These requests indicate that the Web experience is not yet on par with the shell.

## Developer Pain Points
- **Windows cross‑platform friction**
  Git Bash POSIX paths are not resolved by file tools (#2199), the CLI hangs on Windows (#2219), and scrolling in the TUI jumps unpredictably (#2212, #2193). These issues make the Windows experience noticeably less reliable.

- **Web UI inconsistencies**
  Images pasted into chat are silently dropped (#2209), the reasoning stream is missing (#2214), and file‑mention breaks on the first message (#2189). Users often fall back to the CLI for a more predictable experience.

- **Documentation drift**
  The Chinese help documentation is outdated, referencing legacy paths and mechanisms (#2215), which misleads users and increases support burden.

- **Desktop regression**

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 2026-07-27 OpenCode Community Digest

### Today’s Update Brief
A high‑activity day with 50 issues updated and 20 pull requests in flight. The community is focused on a desktop‑breaking update, a wave of sub‑agent feature requests, and billing fairness after DeepSeek V4 Pro’s permanent 75% price cut. Multiple PRs target type safety, error propagation, and UI polish.

### Hot Issues

1. **[#28846 [CLOSED] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction](https://github.com/anomalyco/opencode/issues/28846)**
   *95 comments, 83 👍*
   Users request that OpenCode Go subscription quotas be updated to reflect the massive permanent price drop of the DeepSeek V4 Pro API. The thread shows strong community agreement that the current limits are now out of proportion.

2. **[#38257 [OPEN] Go: 401 Request blocked by upstream provider — chat/completions blocked while /v1/models works](https://github.com/anomalyco/opencode/issues/38257)**
   *39 comments, 10 👍*
   Since 2026-07-22, all models under an OpenCode Go subscription return `401 Request blocked by upstream provider` on `chat/completions`. The `/v1/models` endpoint works, pointing to a server‑side configuration issue that has left Go subscribers unable to use the service.

3. **[#

</details>