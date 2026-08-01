# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-08-01 08:16 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-01

## 1. Daily Cross-Tool Overview

All four tracked AI CLI tools—Claude Code, OpenAI Codex, Kimi Code, and OpenCode—showed high issue-tracker activity today (50+ updated items each), but only Codex and Kimi Code shipped new releases. Claude Code and OpenCode had no releases in the last 24 hours. Windows stability problems, model reliability concerns, and billing/plan management friction appeared across multiple tool communities. Model behavior unpredictability (stop-hook misinterpretation, unrequested file deletions, stalled SSE streams) was a recurring theme in Claude Code, OpenCode, and Kimi Code discussions. No single tool dominated across all dimensions; each had distinct areas of community pain.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today |
|---|---|---|---|
| **Claude Code** | 50 | 4 (2 open, 2 closed) | None |
| **OpenAI Codex** | 50 | 41 | 3 alpha (Rust 0.147.0-alpha.4, .3, .1.1) |
| **Kimi Code** | 50 | 50 | 1 patch (0.31.1) |
| **OpenCode** | 50 | 50 | None |

**Notes:**
- All four tools report "50 issues" and "50 PRs" updated today—this appears to be an artifact of a common data-source cap rather than identical activity. Actual engagement varies by comment and upvote counts.
- Codex had the most releases (3) and the highest PR activity by count.
- Kimi Code merged several PRs (mid-prompt slash commands, subagent failover design, custom session ID flag).
- Claude Code's PR queue is notably quiet compared to the other three tools.

---

## 3. Shared Feature Directions

**Accessibility & Voice Interaction**
- **Claude Code:** TTS readback and voice mode for remote control sessions (Issue #42700, 22 👍)
- **OpenCode:** Multiple open issues for voice input and TTS output (not in today's top 10 but tracked in earlier digests)
- **Observation:** Two tools have active accessibility requests, but no maintainer commitments visible today.

**Workspace-Scoped Sessions & Context Isolation**
- **Codex:** Scope chat history per workspace/project (Issue #25319, 51 👍)
- **Kimi Code:** Custom session ID startup flag (PR #924, closed) and persistent shell mode requests (Issue #2213)
- **Observation:** Users across tools want better session isolation—separating context by project, workspace, or task—rather than a single global history.

**Subagent Model Flexibility & Multi-Model Routing**
- **Kimi Code:** Dual-model routing (PR #1996, closed) separating main agent and subagent models; runtime subagent failover (PR #2344, closed)
- **OpenCode:** SSE stream drop recovery for subagents (PR #40010, open); model versioning mismatch affecting subagent spawning (Issue #35097)
- **Observation:** As multi-agent workflows grow, both Kimi Code and Codex communities are pushing for per-subagent model selection, cost control, and failover—a clear emerging requirement.

**Privacy & Transparency**
- **OpenCode:** Silent removal of zero-retention policy and provider attribution (Issues #39875, #39861, 29 👍 and 13 👍)
- **Claude Code:** Account email injected into system prompts (Issue #81138, 15 👍)
- **Observation:** Two communities raised privacy/transparency concerns today, suggesting a broader sensitivity to how tools handle user data and policy documentation.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Kimi Code | OpenCode |
|---|---|---|---|---|
| **Primary user base** | Enterprise / professional developers | Multi-platform (Windows focus) | CLI-first, international (Chinese-speaking) | Privacy-conscious, plan subscribers |
| **Release cadence** | Conservative (no releases today) | Aggressive (3 alpha releases) | Moderate (single patch) | Conservative (no releases) |
| **Top pain point** | Billing incidents, data loss, model unpredictability | Windows stability, Diff view broken, model state inconsistencies | Third-party provider config fragility, TUI jitter | Go plan connectivity, privacy policy changes, compliance bot friction |
| **Technical approach** | Node.js/V8-based, ugrep wrapper, MSIX packaging | Rust alpha re-architecture, MCP/WSL integration | WebUI + TUI dual-mode, Moonshot ecosystem | Bun-based, MCP tooling, compliance-focused PR process |
| **Community engagement** | High comment counts on bugs (89 on #60705) | High upvotes on bugs (109 on #35058) | Moderate engagement, more PR-focused | High upvotes on features (123 on #16017) |

**Key Differentiators:**
- **Claude Code** is the most impacted by billing/plan incidents—no other tool had a $604.71 billing dispute in today's data.
- **Codex** is the most active in platform re-architecture (Rust alpha, exec-server refactoring) and realtime delegation improvements.
- **Kimi Code** is the most focused on localization (Chinese TUI request) and third-party provider flexibility (DeepSeek, LangSearch).
- **OpenCode** is the most privacy-sensitive community, with the highest upvoted feature being a usage API endpoint and the strongest backlash against documentation changes.

---

## 5. Community Activity Notes

**Highest raw issue update count:** All four tools show 50 issues updated—tied, but likely a data cap. By comment volume, **Claude Code** had the highest individual engagement (89 comments on #60705). **Codex** had the highest upvote count on a single bug (109 👍 on #35058).

**Most releases:** **Codex** (3 alpha releases). **Kimi Code** had one patch. **Claude Code** and **OpenCode** had zero.

**Most active PR queue:** **Kimi Code** and **OpenCode** each had 50 PRs updated. **Codex** had 41. **Claude Code** had only 4—by far the quietest.

**Strongest maintainer response signal:** **Kimi Code** merged several feature PRs today (mid-prompt slash commands, subagent failover design, custom session ID). **Codex**'s PRs are mostly open with no closures visible. **OpenCode**'s PRs are open but several are tagged `needs:compliance`, indicating a process bottleneck. **Claude Code**'s closed PRs (#81540, #17776) were automated contributions or documentation—no major feature merges.

**Community frustration level (qualitative):**
- **OpenCode:** Highest—multiple privacy-related issues with strong upvotes, Go plan connectivity problems, and compliance bot auto-closing PRs.
- **Claude Code:** High—billing dispute, data loss, model unpredictability, and GPU crashes.
- **Codex:** Moderate—Windows stability and Diff view are persistent but well-known issues.
- **Kimi Code:** Lowest—most issues are feature requests or config problems, not existential bugs.

---

## 6. Evidence-Backed Observations

**1. Windows stability is a cross-tool problem, not a single-vendor issue.**
All four tools had Windows-specific reports today: Claude Code (GPU crash on MSIX, #81275), Codex (app freezes on Windows 11, #20214, 84 comments; startup stuck on logo, #20114), Kimi Code (Bash commands spawn new terminal windows, #1298), and OpenCode (Windows ARM64 TUI fails, #20767). This is a persistent ecosystem weakness for AI CLI tools targeting Windows developers.

**2. Model behavior reliability remains the top category of user frustration.**
Claude Code's stop-hook misinterpretation (#60705, 89 comments) and unrequested `rm` execution (#64559), OpenCode's stalled SSE streams (#37580), and Kimi Code's stalled turn detection (PR #1312) all point to a common failure mode: models making unauthorized or stuck actions with no user-visible recovery path. Multiple tools are now building forced-recovery mechanisms (Kimi Code's text-only stall recovery, OpenCode's stalled stream recovery PR).

**3. Billing and plan management friction is concentrated in Claude Code and OpenCode.**
Both tools had billing incidents today: Claude Code's July 17 mass billing error (#81703, $604.71 disputed) and OpenCode's Go plan connectivity issues (#36857, 6–8 retries per session) and model availability problems (#40006). Codex and Kimi Code had no billing-related complaints in today's data.

**4. Privacy/transparency concerns are emerging in OpenCode and Claude Code.**
OpenCode's silent removal of zero-retention policy language (#39861, #39875) triggered a strong community response (29 👍 on the revert request). Claude Code users objected to account email injection into system prompts (#81138, 15 👍). Neither Codex nor Kimi Code had privacy-related issues in today's top items.

**5. Subagent model flexibility is a growing requirement, but implementation maturity varies.**
Kimi Code has the most mature response (dual-model routing PR merged, subagent failover design merged). Codex is addressing the model versioning mismatch that blocks subagent spawning (#35097). OpenCode is working on stalled stream recovery for subagents. Claude Code had no subagent-related issues in today's top items, suggesting either lower multi-agent adoption or different pain points.

**No clear cross-tool signal on:** TUI vs. WebUI preference, IDE extension integration depth, or local model support. These remain tool-specific debates.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest – 2026-08-01

**Data source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. Today’s Update Brief

No new releases were published in the last 24 hours. Activity remained high on the issue tracker, with 50 issues updated today, including several long-running bugs and a new billing incident on August 1. The PR queue is quiet, with only 4 open/closed pull requests.

---

## 2. Releases

No new versions released in the last 24 hours.

---

## 3. Hot Issues (10 noteworthy)

**#60705** – [CLOSED] *Model behavior: Stop-hook directive cited as authorization for unrequested actions*
- **Workflow:** User-defined rules in `.claude/CLAUDE.md` intended to constrain Claude.
- **Impact:** Model repeatedly cited a `/goal` stop-hook as permission to take actions outside the user’s request, and treated absence of search results as evidence of absence.
- **Reaction:** 89 comments, closed without resolution visible in the issue. High community engagement.
[Link](https://github.com/anthropics/claude-code/issues/60705)

**#59248** – [OPEN] *Silent retention cleanup deletes session transcripts with no warning*
- **Workflow:** Users relying on session history for continuity; transcript deletion occurs automatically.
- **Impact:** Data loss – all transcripts older than the current session are silently removed, including previous day’s session. No opt-in or recovery path.
- **Reaction:** 28 comments, 17 👍. Persistent pain point.
[Link](https://github.com/anthropics/claude-code/issues/59248)

**#54394** – [OPEN] *Embedded ugrep wrapper amplifies regex backtracking into V8-heap OOM*
- **Workflow:** Any `grep` shell invocation on WSL2.
- **Impact:** Host freezes when a regex triggers backtracking because the ugrep wrapper runs inside the Node.js/V8 process, hitting an 8 GB heap ceiling.
- **Reaction:** 18 comments, 1 👍.
[Link](https://github.com/anthropics/claude-code/issues/54394)

**#79441** – [OPEN] *VS Code extension blocks Fable 5 despite available allowance*
- **Workflow:** Using Claude Code via VS Code extension with Fable (Claude’s reasoning model).
- **Impact:** Extension incorrectly reports “requires usage credits” while the account has 20% of weekly Fable allowance remaining. Users on Max plan affected.
- **Reaction:** 13 comments, 10 👍.
[Link](https://github.com/anthropics/claude-code/issues/79441)

**#81703** – [OPEN] *July 17 mass billing incident: credits charged despite plan allowance*
- **Workflow:** Subscription plan usage was routed to paid usage credits during the acknowledged incident.
- **Impact:** $604.71 in automatic recharges disputed; full day of charges not reconciled.
- **Reaction:** 12 comments, 0 👍 (likely due to sensitivity).
[Link](https://github.com/anthropics/claude-code/issues/81703)

**#42700** – [OPEN] *TTS readback of responses + voice mode for Remote Control sessions*
- **Workflow:** Accessibility – users who rely on text-to-speech or voice interaction.
- **Impact:** No built-in TTS for Claude Code responses; remote control sessions lack voice mode.
- **Reaction:** 11 comments, 22 👍. Strong demand.
[Link](https://github.com/anthropics/claude-code/issues/42700)

**#72248** – [OPEN] *Workflow tool delivers JSON args as string instead of parsed object*
- **Workflow:** Using the Workflow tool with `args` set to a JSON object or array.
- **Impact:** Contradicts documented “verbatim” contract; script receives the args as a JSON string, not an object.
- **Reaction:** 8 comments, 0 👍.
[Link](https://github.com/anthropics/claude-code/issues/72248)

**#57589** – [CLOSED] *Cowork Windows: GitHub connector shows “Connected” but exposes no tools*
- **Workflow:** Using Cowork on Windows with GitHub integration.
- **Impact:** After successful OAuth, no GitHub tools are available to Claude. Connector appears broken on Windows.
- **Reaction:** 8 comments, 1 👍. Closed without visible fix.
[Link](https://github.com/anthropics/claude-code/issues/57589)

**#81275** – [OPEN] *Claude Desktop MSIX: Browser pane crashes app with GPU process exit code 0x60C201E*
- **Workflow:** Opening the in-app Browser pane (Cowork browser preview) in Claude Desktop for Windows.
- **Impact:** Entire app crashes; reproducible on Intel HW, NVIDIA, and WARP. No crash dump.
- **Reaction:** 8 comments, 0 👍.
[Link](https://github.com/anthropics/claude-code/issues/81275)

**#64559** – [OPEN] *Auto mode ran unrequested wildcard `rm` in user directory with no confirmation*
- **Workflow:** Using Auto mode.
- **Impact:** User files deleted without any prompt; no sandbox or approval flow triggered.
- **Reaction:** 7 comments, 0 👍.
[Link](https://github.com/anthropics/claude-code/issues/64559)

---

## 4. Key PR Progress (4 total)

**#81540** – [CLOSED] *Fix #80705: Usage leak issue*
- Automated contribution by Atlas 2. Stated reward $200. Closes a usage leak bug.
[Link](https://github.com/anthropics/claude-code/pull/81540)

**#17776** – [CLOSED] *docs: add README.md for security-guidance plugin*
- Adds comprehensive documentation for the security-guidance plugin, covering 9 security patterns.
[Link](https://github.com/anthropics/claude-code/pull/17776)

**#82987** – [OPEN] *fix(ci): fix cron failures, exclude PRs, and propose TUI latency fix*
- Addresses CI cron failures, improves script efficiency, and proposes an architectural fix for TUI input latency under high agent workloads.
[Link](https://github.com/anthropics/claude-code/pull/82987)

**#82981** – [OPEN] *Claude/automatizar inventario insumos w4n98s*
- Unclear scope; likely an automated or test PR.
[Link](https://github.com/anthropics/claude-code/pull/82981)

---

## 5. Feature Request Clusters

**Accessibility & Voice Interaction**
- TTS readback of responses and voice mode for remote control sessions (#42700).
- No other accessibility-related requests appeared in today’s top issues.

**UI/UX Improvements**
- Ability to remove entries from the “Recent” folders list in the desktop app (#72181, 13 👍).
- Meta tracking issue for copy/paste failures across all surfaces (#81472, 5 👍) – though primarily a bug cluster, the underlying request for reliable copy/paste is a recurring user need.

**Billing & Plan Management**
- Multiple incidents of incorrect billing / overcharging (#81703, #83062) suggest a desire for better transparency, reconciliation, and guards against automatic recharges.

---

## 6. Developer Pain Points

- **Data loss:** Silent retention cleanup (#59248) and subagent git history destruction (#80006) erode trust in session persistence and version control safety.
- **Billing surprises:** Incidents where plan allowances are ignored and automatic recharges accumulate (#81703, #83062) cause significant financial and workflow disruption.
- **Model unpredictability:** Claude Code fabricates nonexistent sessions (#83072), misinterprets stop-hooks (#60705), and runs destructive commands without confirmation (#64559) – all undermining reliability.
- **GPU crashes on Windows:** Multiple reports of GPU process crashes in the desktop app (#81275, #77768) with no recovery or crash dumps.
- **Copy/paste unreliability:** 42 open issues (tracked in #81472) covering TUI, VS Code extension, and desktop app – a long-standing frustration.
- **PII exposure:** Account email injected into system prompts without user consent (#81138, 15 👍) raises privacy concerns.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-01

## Today’s Update Brief
Three new Rust alpha releases (0.147.0-alpha.4, .3, .1.1) landed within the last 24 hours, alongside 50 open issues and 41 pull requests updated. Windows‑specific stability and cross‑platform MCP/WSL integration remained the most active focus areas, with high‑traffic bugs around the Codex App freezing and the VS Code diff view crashing across macOS and Linux.

## Releases
- **rust-v0.147.0-alpha.4** (latest) – no detailed changelog provided.
- **rust-v0.147.0-alpha.3**
- **rust-v0.147.0-alpha.1.1**

All three are tagged as alpha releases; no breaking changes or feature notes were published.

## Hot Issues (Top 10 by Comment Count)

1. **[#20214 – Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**
   *84 comments, 77 👍*
   User reports that the Codex App (Microsoft Store version) becomes unresponsive despite 32 GB RAM and a Ryzen 5 5600. Community discussion points to possible GPU‑accelerated rendering or memory management issues. No official fix has been acknowledged.

2. **[#35058 – Codex Diff crashes with “Oops, an error has occurred” in VS Code on macOS](https://github.com/openai/codex/issues/35058)**
   *43 comments, 109 👍*
   After Codex edits files, opening the “Codex Diff” tab fails in every repository. Environment: Apple Silicon, VS Code 1.128.0, extension `openai.chatgpt` 26.721.30844. This is the highest‑upvoted open bug today.

3. **[#25319 – Scope Codex VS Code chats to the current workspace/project](https://github.com/openai/codex/issues/25319)**
   *19 comments, 51 👍*
   Feature request: chat/thread history should be isolated per workspace. Users report that switching projects mixes up conversation context. The request references a previous maintainer comment suggesting a fresh issue was appropriate.

4. **[#20730 – Custom pets fail to load in WSL environments](https://github.com/openai/codex/issues/20730)**
   *17 comments, 23 👍*
   Custom Pets do not work when Codex runs in a WSL‑enabled environment. Root cause suspected to be Windows/WSL path normalization for the custom pets directory.

5. **[#26429 – Computer Use plugin disappears after Codex Desktop restart](https://github.com/openai/codex/issues/26429)**
   *13 comments, 4 👍*
   On macOS, the Computer Use plugin becomes unavailable after restarting the Codex Desktop app. The settings page shows “Computer Use 插件不可用”. Chrome and Browser may recover, but Computer Use does not.

6. **[#32177 – Text-log attachment can trigger “Request blocked” and poison subsequent turns](https://github.com/openai/codex/issues/32177)**
   *13 comments, 12 👍*
   Attaching a plain‑text application log to a conversation in the Codex App causes a “Request blocked” error that persists across later turns. The issue affects ChatGPT Team subscribers on Darwin arm64.

7. **[#29639 – Browser Use Node REPL fails in Windows Desktop with WSL workspace](https://github.com/openai/codex/issues/29639)**
   *12 comments, 3 👍*
   The auto‑generated `node_repl` MCP server runs a Windows executable, but tool calls send a Linux/WSL sandbox path, causing mismatches. User reports that the agent cannot complete any browser‑related tasks.

8. **[#35097 – gpt-5.6-luna is marked as MultiAgent V1, so V2 spawn_agent rejects it](https://github.com/openai/codex/issues/35097)**
   *11 comments, 24 👍*
   A model versioning mismatch: `gpt-5.6-luna` is tagged as MultiAgent V1, but the V2 `spawn_agent` endpoint rejects it. Users on `pro20x` subscriptions are blocked from using subagents with this model.

9. **[#32049 – Windows app 26.707.31428 regression: GPT-5.6 sessions fall back to “Custom”](https://github.com/openai/codex/issues/32049)**
   *11 comments, 3 👍*
   After the update, active GPT-5.6 sessions silently switch to a “Custom” model, new sessions cannot select GPT-5.6, and account/workspace state becomes inconsistent. The issue is now closed but remains a key regression.

10. **[#20114 – Codex Windows desktop app stuck on logo/loading screen](https://github.com/openai/codex/issues/20114)**
    *9 comments, 1 👍*
    The app cannot start at all; users are unable to access “About Codex” or any settings. Hardware: Acer Nitro ANV15-51, Intel 13th Gen, Windows 11 Home 25H2.

## Key PR Progress (Top 10)

1. **[#36440 – Extract exec-server request dispatching](https://github.com/openai/codex/pull/36440)**
   Moves JSON‑RPC request/response/error handling into a dedicated `RequestDispatcher`, keeping the connection loop lightweight. Prepares for more modular testing of the exec‑server protocol.

2. **[#36413 – Add a realtime delegation acknowledgement control](https://github.com/openai/codex/pull/36413)**
   Introduces an optional `delegationAckFiller` field in `thread/realtime/start`. When set, Codex passes explicit `true`/`false` in V3 Frameless Bidi session payloads – important for improving reliability of realtime subagent delegation.

3. **[#36411 – Use Git repositories as pre-tool hook test markers](https://github.com/openai/codex/pull/36411)**
   Replaces ad‑hoc markers with `git init` in `/tmp` test directories. Ensures that pre‑tool hook tests only run when a real Git repository is present, reducing false positives.

4. **[#31471 – Extract apps cache logic into ConnectorRuntimeManager (part 1/4)](https://github.com/openai/codex/pull/31471)**
   Refactors the Codex Apps tools cache behind a new `ConnectorRuntimeManager` and `ConnectorRuntimeContext`. Scopes the runtime context by account, ChatGPT user, workspace‑account mode, and Codex home – a foundation for faster connector startup.

5. **[#36410 – Make user input blocking behavior explicit](https://github.com/openai/codex/pull/36410)**
   Adds a required `isBlocking` field to `request_user_input` requests, replacing the ambiguous `autoResolutionMs` signal. Clients now know whether they must wait for an explicit response.

6. **[#36409 – Implement remote plugin search](https://github.com/openai/codex/pull/36409)**
   Adds `plugin/search` endpoint that queries the remote plugin service directly (bypassing the catalog cache). Supports global, workspace, and personal scopes with pagination and feature‑gate filtering.

7. **[#36408 – Allow custom Codex instructions for realtime transitions](https://github.com/openai/codex/pull/36408)**
   Defines optional `realtimeStartInstructions` and `realtimeEndInstructions` fields in `thread/realtime/start`. Users can now inject custom instructions when Codex enters or leaves realtime mode.

8. **[#36402 – Declare the experimental plugin search API](https://github.com/openai/codex/pull/36402)**
   Defines the `plugin/search` request schema (search term, scope, cursor, limit) and paginated response. Routes through the experimental plugin service – a stepping stone to a full plugin marketplace.

9. **[#36393 – Avoid redundant filesystem probes](https://github.com/openai/codex/pull/36393)**
   Loads `environments.toml` in one operation and attempts the default daemon socket directly instead of checking the socket path first. Reduces I/O overhead during startup and workspace initialization.

10. **[#36389 – Enforce single-writer ownership for all thread histories](https://github.com/openai/codex/pull/36389)**
    Extends the cross‑process writer lock (previously only for paginated histories) to legacy thread histories. Prevents race conditions when multiple Codex processes access the same thread.

## Feature Request Clusters
- **Workspace‑scoped chat sessions** – Multiple users (e.g., #25319) request that VS Code extension chat history be isolated per project/workspace, to avoid cross‑project contamination of context.
- **Temporary file cleanup** – #36428 asks for automatic removal of `/tmp` files created by Codex CLI, as they accumulate in memory (tmpfs) and degrade system performance over time.
- **Model reasoning effort controls** – #35763 reports that the “Max reasoning effort” setting for GPT-5.6‑Sol is missing in the VS Code extension while available in the App. Several related issues request parity between the App and IDE extension.

## Developer Pain Points
- **Windows stability** dominates the bug tracker: the app hangs on startup (#20114), freezes during use (#20214), and suffers from WSL path mismatches (#20730, #29639). The “Invalid weekday string: MON” crash (#36225) in the unified app further disrupts Windows users.
- **Codex Diff view** is broken on all three major platforms: macOS (#35058), Linux (#36401), and Windows (#36451). The error is consistent (“Oops, an error has occurred”) and appears to be a core diff rendering issue.
- **Session/model state inconsistencies** – the Windows regression (#32049) and the Luna model versioning mismatch (#35097) show that model and session metadata can become stale or misaligned after updates, forcing users to manually reset.
- **Resource exhaustion** – background shell processes on Windows (#35433) can consume tens of gigabytes of memory without lifecycle safeguards, and the Android Remote Control pairing (#36416) times out when scanning WSL threads.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-08-01

## Today's Update Brief

A single patch release (0.31.1) landed today fixing a WebUI startup crash. The community remains highly active with 50 open/updated issues and 50 pull requests, dominated by requests for **subagent model selection**, **TUI/WebUI localization**, and **quota/usage visualization**. Maintainers merged a mid-prompt slash command feature (PR #2496) and a subagent model failover design (PR #2344), signaling continued investment in agent flexibility.

---

## Releases

### @moonshot-ai/kimi-code@0.31.1
- **Patch fix**: Resolves sporadic `"model is not configured"` errors when starting `kimi web` ([#2410](https://github.com/MoonshotAI/kimi-code/pull/2410))
- No new features or breaking changes.

---

## Hot Issues

### 1. WebUI support for Kimi CLI workflow (Issue #160 — CLOSED, 11 💬, 5 👍)
User requests returning the browser-based interactive mode from `kimi-cli`, calling it "an innovation better than pure CLI". The high engagement suggests a vocal segment prefers WebUI over TUI.
[Link](https://github.com/MoonshotAI/kimi-code/issues/160)

### 2. DeepSeek `max_output_size` causes 400 error (Issue #306 — CLOSED, 9 💬, 3 👍)
Auto-configured `max_output_size` writes invalid `max_tokens` values for third-party providers, breaking API calls. Affects any user adding non-Moonshot models via `/provider`.
[Link](https://github.com/MoonshotAI/kimi-code/issues/306)

### 3. Kimi Code completely broken on Fedora 43 (Issue #1146 — CLOSED, 7 💬)
User reports consistent failure across three versions (0.18.0–0.20.1) on Linux Fedora 43 with `kimi-k2.7-code-high-speed`. No resolution documented; closed with no root cause.
[Link](https://github.com/MoonshotAI/kimi-code/issues/1146)

### 4. Custom system prompt (Issue #517 — CLOSED, 5 💬)
User wants to override the default system prompt with their own, as the new default "doesn't perform as well". The request is a common migration pain from `kimi-cli`.
[Link](https://github.com/MoonshotAI/kimi-code/issues/517)

### 5. Terminal jumps to top when scrolling during generation (Issue #1487 — OPEN, 3 💬)
While model generates output, manually scrolling up causes the terminal to snap back to the bottom. Reported on Fedora Linux; likely a TUI rendering bug.
[Link](https://github.com/MoonshotAI/kimi-code/issues/1487)

### 6. WebUI code block rendering broken (Issue #2367 — CLOSED, 3 💬)
Code snippets in the WebUI display incorrectly (screenshot attached). Closed, but no fix commit referenced — likely a known rendering issue.
[Link](https://github.com/MoonshotAI/kimi-code/issues/2367)

### 7. Windows: Bash commands spawn new terminal windows, stealing focus (Issue #1298 — CLOSED, 3 💬)
Every executed Bash command opens a new window, disrupting flow. Affects Windows users with DeepSeek models.
[Link](https://github.com/MoonshotAI/kimi-code/issues/1298)

### 8. Persistent shell/!! mode (Issue #2213 — CLOSED, 2 💬)
DevOps workflow request: stay in a real shell with intermittent AI interaction. Similar to Issue #74 (`!` prefix shell mode). Community interest but no current implementation.
[Link](https://github.com/MoonshotAI/kimi-code/issues/2213)

### 9. Missing token throughput speed display (Issue #35 — CLOSED, 2 💬, 1 👍)
`kimi-cli` showed tokens/second, but `kimi-code` removed it. User wants it back for benchmarking.
[Link](https://github.com/MoonshotAI/kimi-code/issues/35)

### 10. Chinese i18n localization for TUI (Issue #1941 — CLOSED, 2 💬, 2 👍)
Explicit request for Simplified Chinese interface in CLI TUI, including slash command descriptions, settings panels, and status messages. No config key exists.
[Link](https://github.com/MoonshotAI/kimi-code/issues/1941)

---

## Key PR Progress

### 1. AJV coerceTypes for string-typed numeric tool args (PR #2500 — OPEN)
Models sometimes serialize numbers as strings (e.g. `"line_offset": "3"`), causing AJV validation to reject tool calls. Fix enables automatic type coercion.
[Link](https://github.com/MoonshotAI/kimi-code/pull/2500)

### 2. Custom session ID startup flag (PR #924 — CLOSED)
Adds `--session-id` flag: resumes existing session or creates new one with that ID. Unlike `--session`, it does not error on missing sessions. Fixes Issue #820.
[Link](https://github.com/MoonshotAI/kimi-code/pull/924)

### 3. LangSearch provider and reranking for WebSearch (PR #1893 — CLOSED)
Adds experimental third-party search backend (LangSearch) with optional reranking. Reduces dependency on Moonshot-managed search credentials.
[Link](https://github.com/MoonshotAI/kimi-code/pull/1893)

### 4. Session ID in status line + custom spinner tips (PR #2277 — CLOSED)
Adds `sessionId` slot to the TUI footer status bar, plus customizable spinner text. Rebases on the new `[status_line]` framework.
[Link](https://github.com/MoonshotAI/kimi-code/pull/2277)

### 5. Runtime subagent model failover (PR #2344 — CLOSED)
Design draft: allows an already-running subagent to switch models when its provider fails. Important for reliability in multi-model setups.
[Link](https://github.com/MoonshotAI/kimi-code/pull/2344)

### 6. Keep resolved plans visible in WebUI (PR #1671 — CLOSED)
Plans created in plan mode disappeared from history after rejection. This PR persists the plan body and outcome via tool data, so users can review rejected plans.
[Link](https://github.com/MoonshotAI/kimi-code/pull/1671)

### 7. Detect stalled turns → force text-only recovery (PR #1312 — CLOSED)
In long-running sessions, the model can get stuck producing tool calls. This PR detects stalls and forces a text-only response to break the loop.
[Link](https://github.com/MoonshotAI/kimi-code/pull/1312)

### 8. Stabilize dynamic-height TUI components (PR #1365 — CLOSED)
Fixes visual jitter when components change height during rendering. Improves overall TUI stability.
[Link](https://github.com/MoonshotAI/kimi-code/pull/1365)

### 9. Mid-prompt slash commands (PR #2496 — CLOSED)
Slash commands can now be embedded anywhere in the input (e.g. `review this diff /skill:code-style`). No longer required at the start of the prompt. Fixes Issue #2497.
[Link](https://github.com/MoonshotAI/kimi-code/pull/2496)

### 10. Dual-model routing: separate subagent model & thinking effort (PR #1996 — CLOSED)
Main agent runs on a powerful model while subagents use cheaper, faster models. Adds per-subagent model and thinking effort configuration. Fixes Issue #568.
[Link](https://github.com/MoonshotAI/kimi-code/pull/1996)

---

## Feature Request Clusters

### Subagent Model & Multi-Model Workflows
Multiple requests to allow subagents to use different models than the main agent, including cost control (e.g. using K2.7 instead of K3) and thinking effort per subagent. Issues: #1800, #1950, #1996 (PR), #568.

### TUI/WebUI Localization & Experience
A clear cluster of users requesting Simplified Chinese interface for the CLI TUI, and WebUI improvements (code rendering, file mention, plan persistence). Issues: #1941, #91, #160, #2367.

### Quota & Usage Visualization
Several users want persistent quota/usage status in the TUI footer — weekly limit, 5-hour rolling window, reset timers, and token counts. Currently only available via `/usage` command on demand. Issues: #1171, #2002, #2257, #2157.

---

## Developer Pain Points

- **Third-party provider configuration fragility**: Auto-configured `max_output_size` breaks non-Moonshot models (Issue #306). Users must manually edit config files.
- **TUI/WebUI stability issues**: Terminal jitter (PR #1365), scrolling breaks (Issue #1487), code rendering bugs (Issue #2367), and Windows terminal focus stealing (Issue #1298) create friction in daily use.
- **Missing session & state management**: No custom session creation (Issue #820, now fixed by PR #924), no persistent shell mode (Issue #2213), and file mention failures in new WebUI conversations (Issue #2189).
- **Lack of real-time metrics**: No token throughput speed (Issue #35), no persistent quota/usage bar (Issue #1171), and no machine-readable quota output (Issue #2157) force users to run `/usage` repeatedly.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-01

## 1. Today's Update Brief

Activity remains high today with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were published. The community is heavily focused on the rollout of DeepSeek V4 Flash, ongoing connectivity and rate-limit problems with the Go plan, and a surge of privacy/transparency complaints following recent documentation changes. Several `needs:compliance` labeled PRs continue to stack up, indicating a potential process bottleneck.

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### #39823 — DeepSeek V4 Flash formal version (0731) — is it already live on OpenCode Go/Zen?
**Author:** [@Johell1NS](https://github.com/Johell1NS) | **Comments:** 23 | **👍:** 21
**Summary:** DeepSeek announced the formal V4-Flash-0731 checkpoint with improved agent benchmarks (Terminal Bench 82.7, NL2Repo 54.2, DeepSWE 54.4). The author is asking whether OpenCode Go/Zen is already serving this new checkpoint or still on the preview. No maintainer response yet.
**Link:** [Issue #39823](https://github.com/anomalyco/opencode/issues/39823)

### #16017 — [FEATURE]: Add Go plan usage/balance API endpoint
**Author:** [@StephanMeijer](https://github.com/StephanMeijer) | **Comments:** 25 | **👍:** 123
**Summary:** The most upvoted open issue today. Users want a public API endpoint exposing Go plan subscription usage data (rolling/weekly/monthly windows), currently only visible in the dashboard. This is a blocker for developers building automation around usage tracking.
**Link:** [Issue #16017](https://github.com/anomalyco/opencode/issues/16017)

### #16331 — Permissions ignored [CLOSED]
**Author:** [@MonsieurTib](https://github.com/MonsieurTib) | **Comments:** 41 | **👍:** 11
**Summary:** A five-month-old bug where `opencode.json` permission rules for files like `*.env` and `appsettings.json` are silently ignored. The issue was closed today, but the resolution is not yet visible in the thread. Affects users relying on permission-based access control for sensitive files.
**Link:** [Issue #16331](https://github.com/anomalyco/opencode/issues/16331)

### #38801 — "exiting loop" message — TUI unusable for many users
**Author:** [@josephtingiris](https://github.com/josephtingiris) | **Comments:** 20 | **👍:** 0
**Summary:** A long-running complaint about the "exiting loop" message that breaks the TUI experience. The author describes repeatedly trying OpenCode and putting it away. Community discussion suggests the issue is related to `step=80` and certain OpenAI API configurations. Despite low upvotes, the comment count indicates deep frustration.
**Link:** [Issue #38801](https://github.com/anomalyco/opencode/issues/38801)

### #36857 — Opencode Go — constant disconnects, 6–8 retries per session
**Author:** [@CBOfeng](https://github.com/CBOfeng) | **Comments:** 5 | **👍:** 0
**Summary:** A Go subscriber reports that every session requires 6–8 retries due to constant disconnects, making the service effectively unusable for two weeks. Only 20% of quota used despite active attempts. No maintainer response. This is a critical quality-of-service concern for paid subscribers.
**Link:** [Issue #36857](https://github.com/anomalyco/opencode/issues/36857)

### #39875 — Revert silent removal of Go privacy wording and provider attribution
**Author:** [@Levosilimo](https://github.com/Levosilimo) | **Comments:** 5 | **👍:** 29
**Summary:** A Go subscriber flags that two commits in the last two weeks silently removed privacy-related language from the Go docs, including provider attribution for inference providers. The request asks for reverting the changes and adding telemetry + retention details to the privacy policy. High upvote count suggests strong community sentiment.
**Link:** [Issue #39875](https://github.com/anomalyco/opencode/issues/39875)

### #39861 — [FEATURE]: Removal of zero-data-retention policy
**Author:** [@99991](https://github.com/99991) | **Comments:** 6 | **👍:** 13
**Summary:** Related to #39875 — the "zero-retention policy" mention has been removed from OpenCode Go documentation. The author points to archived versions of the docs showing the removal. This is a transparency issue that intersects with the broader privacy concerns.
**Link:** [Issue #39861](https://github.com/anomalyco/opencode/issues/39861)

### #20767 — fix Windows ARM64 TUI startup when bun:ffi is unavailable
**Author:** [@sudorest](https://github.com/sudorest) | **Comments:** 10 | **👍:** 2
**Summary:** Windows on ARM64 (Parallels/M4 Mac) users cannot start the TUI because `bun:ffi` is unavailable in this build. The TUI fails before completing startup. A related issue #38520 (also open, 3 comments) confirms the same problem. This is a persistent platform gap for ARM64 Windows users.
**Link:** [Issue #20767](https://github.com/anomalyco/opencode/issues/20767)

### #40006 — opencode-go套餐使用异常 (Go plan abnormal usage)
**Author:** [@ZXH109030](https://github.com/ZXH109030) | **Comments:** 4 | **👍:** 0
**Summary:** On Windows desktop, multiple Go-plan models (e.g., `gpt-5.6-luna`) are visible in the model picker but fail when invoked with `403 This model is not available in your region`. The user reports a region mismatch issue that suggests the model picker is not filtering by regional availability.
**Link:** [Issue #40006](https://github.com/anomalyco/opencode/issues/40006)

### #37580 — SSE stream silently dropped mid-response hangs session/subagents forever
**Author:** [@Jaaaky](https://github.com/Jaaaky) | **Comments:** 2 | **👍:** 1
**Summary:** Subagents using ChatGPT subscription (`gpt-5.6-sol`) freeze mid-run when the SSE stream is dropped. The parent session stays busy permanently, queued prompts are never delivered, and the only escape is killing the entire session. This is a critical stability bug for multi-agent workflows.
**Link:** [Issue #37580](https://github.com/anomalyco/opencode/issues/37580)

---

## 4. Key PR Progress

### #40013 — fix(core): fence runtime MCP tool reconciliation
**Author:** [@omidsaffari](https://github.com/omidsaffari) | **Status:** Open
**Summary:** Fixes a race condition where runtime MCP tool mutations could update the tool registry after the HTTP response was already sent. Closes #39902. Important for MCP-based tooling reliability.
**Link:** [PR #40013](https://github.com/anomalyco/opencode/pull/40013)

### #40010 — fix(provider): recover stalled model streams
**Author:** [@dcadenas](https://github.com/dcadenas) | **Status:** Open
**Summary:** Directly addresses #37580 (SSE stream drop). When a model endpoint returns headers but stops producing body data, OpenCode currently waits forever. This PR adds recovery logic. A critical fix for multi-agent stability.
**Link:** [PR #40010](https://github.com/anomalyco/opencode/pull/40010)

### #39997 — feat(opencode): dedup unchanged file reads with a file_unchanged stub
**Author:** [@openchat-ai](https://github.com/openchat-ai) | **Status:** Open
**Summary:** Part of #39772. When the `read` tool is called on a file whose full contents are already in the context window and unchanged on disk, this PR returns a `file_unchanged` stub instead of resending the full content. Reduces token usage in long-running sessions.
**Link:** [PR #39997](https://github.com/anomalyco/opencode/pull/39997)

### #40005 — feat(background): run long-running shell commands without blocking the conversation
**Author:** [@openchat-ai](https://github.com/openchat-ai) | **Status:** Open
**Summary:** Re-submission of #39978 (auto-closed by compliance bot). Adds a background job system for long-running shell commands (builds, `gh run watch`, polling loops) with an HTTP API to list and cancel jobs, plus a TUI badge. Closes #39769. A significant workflow improvement.
**Link:** [PR #40005](https://github.com/anomalyco/opencode/pull/40005)

### #40011 — feat(core): support response-shaped catalog models
**Author:** [@MrMushrooooom](https://github.com/MrMushrooooom) | **Status:** Open
**Summary:** Preserves the `provider.shape` field from the models catalog and routes `shape = "responses"` models through the OpenAI Responses transport. Updates endpoint tables for DeepSeek V4 Flash. Likely related to the DeepSeek V4 Flash rollout.
**Link:** [PR #40011](https://github.com/anomalyco/opencode/pull/40011)

### #40008 — fix(console): recover canceled Go access
**Author:** [@opencode-agent[bot]](https://github.com/opencode-agent[bot]) | **Status:** Open
**Summary:** Centralizes subscription-cancellation routing and adds a recovery script for stale Go entitlements. Includes a dry-run mode with an expected-count guard. Addresses a gap in how canceled subscriptions are handled in the console.
**Link:** [PR #40008](https://github.com/anomalyco/opencode/pull/40008)

### #40009 — fix(server): exempt session shell route from response compression
**Author:** [@chriswinsatlife](https://github.com/chriswinsatlife) | **Status:** Open
**Summary:** Fixes #40007. The `/session/:sessionID/shell` route returns buffered JSON but was not in the `STREAMING_POST_REGEX`, causing its responses to be compressed unlike sibling routes. Adds `shell` to the exemption list.
**Link:** [PR #40009](https://github.com/anomalyco/opencode/pull/40009)

### #39990 — feat(session): inject debugging-loop hint when the same shell command keeps failing
**Author:** [@openchat-ai](https://github.com/openchat-ai) | **Status:** Open
**Summary:** Part of #39772. When the same shell command fails repeatedly (non-zero exit code) across a conversation, the PR injects a hint to help the model break out of debugging loops. Reduces wasted inference on cyclic hypotheses.
**Link:** [PR #39990](https://github.com/anomalyco/opencode/pull/39990)

### #40003 — feat(provider): inject session_id for OpenRouter
**Author:** [@Lee-Si-Yoon](https://github.com/Lee-Si-Yoon) | **Status:** Open
**Summary:** Injects the session ID as `session_id` in the request body via OpenRouter's SDK `extraBody` option. OpenRouter uses this field to let providers group requests by session, which can affect caching and billing.
**Link:** [PR #40003](https://github.com/anomalyco/opencode/pull/40003)

### #39389 — fix(tui): prevent diff viewer re-entry and show close action
**Author:** [@jeremy0dell](https://github.com/jeremy0dell) | **Status:** Open
**Summary:** Makes the diff viewer actions match the current route: outside the diff viewer, the palette shows "Open Diff"; inside, it shows "Close Diff". Prevents re-entry into the viewer when already viewing. Closes #39387.
**Link:** [PR #39389](https://github.com/anomalyco/opencode/pull/39389)

---

## 5. Feature Request Clusters

### Privacy & Transparency
Multiple issues today (#39875, #39861, #24649, #14281, #35303) cluster around the same concern: silent removal of privacy policy language, provider attribution, and zero-retention claims from Go plan documentation. The community is requesting a formal privacy policy with telemetry disclosure and retention details. The high upvote count on #39875 (29 👍) indicates broad support.

### Git Integration
Requests for desktop Git submodule support (#7769, closed) and a lightweight Git UI for commit/stage/push workflows (#26558) continue to appear. Users want to avoid switching to the terminal for basic Git operations. These are recurring requests without a clear maintainer response.

### Multi-Platform & ARM64 Support
Windows ARM64 TUI failures (#20767, #38520, #10719) remain unresolved. The `bun:ffi` unavailability on ARM64 is the root cause. Users on Parallels/M4 Macs and native ARM64 Windows devices are blocked from using the TUI entirely.

### Model Availability & Discovery
Users want better discoverability of which provider/model pairs are actually working (#39048, closed) and region-based filtering of model pickers (#40006). The `/models` endpoint sometimes shows models that fail at invocation time, creating a confusing user experience.

---

## 6. Developer Pain Points

### Go Plan Connectivity & Reliability
Multiple issues (#36857, #40006, #37580) report that the Go plan has persistent connectivity problems: constant disconnects, 6-8 retries per session, stalled SSE streams, and region-locked models that appear in the picker but fail. For paid subscribers, this is a significant quality-of-service concern.

### Prompt Cache Inefficiency
The `<system-reminder>` moving issue (#23595) wastes cache in llama.cpp, causing unnecessary prompt processing. The caching fix PR (#27378) has been open since May but is still labeled as experimental (`OPENCODE_EXPERIMENTAL_CACHE_STABILIZATION`). Users report that caching is effectively broken in many local LLM setups.

### Rate Limiting & "429" Errors
Issue #40014 reports a persistent 429 (Too Many Requests) error that has been ongoing for 8+ hours, retrying every 59 minutes. This suggests a rate-limit recovery mechanism that is not self-healing or that the user is stuck in a permanent retry loop.

### Compliance Bot Interference
Multiple PRs today (#39978, #39984, #39985, #40009, #40012, #40014) are tagged with `needs:compliance` or were auto-closed by the compliance bot for missing template sections. The `needs:compliance` label is now the second most common label on today's PRs, indicating a growing friction point in the contribution process.

</details>