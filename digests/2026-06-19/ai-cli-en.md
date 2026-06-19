# AI CLI Tools Community Digest 2026-06-19

> Generated: 2026-06-19 00:42 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison — 2026-06-19

## 1. Daily Cross-Tool Overview

Today saw moderate to high community activity across most AI CLI tools, with Claude Code and Qwen Code each tracking 50 issues and a combined ~120 pull requests in motion. OpenAI Codex shipped a stable release with encrypted remote executors, Gemini CLI v0.47.0 landed with a backend definition fix, and Qwen Code pushed a nightly patch to fix file history tracking. No releases were published for Claude Code, Copilot CLI, Kimi Code, or OpenCode. Developer pain points cluster around agent reliability (hangs, false success reporting), MCP/server integration fragility, and cross‑platform regressions — particularly on Windows and Linux (WSL2, musl, `systemd‑inhibit`). Memory and session retention continue to erode trust in longer workflows.

## 2. Activity Comparison

| Tool | Issues (updated/opened today) | PRs (updated today) | Release today? | Key release version |
|------|-------------------------------|---------------------|----------------|----------------------|
| **Claude Code** | 50 open (tracked), 10 hot items | 7 (3 merged) | No | v2.1.181 (prior) |
| **OpenAI Codex** | 30 updated | 20 updated | Yes | `rust-v0.141.0` |
| **Gemini CLI** | 10 selected (top issues) | 10 selected | Yes | v0.47.0 |
| **GitHub Copilot CLI** | 38 updated | 1 updated | No | v1.0.63 (prior) |
| **Kimi Code CLI** | 3 new/updated | 1 open PR | No | v1.43.0 (prior) |
| **OpenCode** | 30 open/updated | 20 (10 selected) | No | (none) |
| **Qwen Code** | 50 open/updated | 50 in motion (10 selected) | Yes | v0.18.3-nightly |

*Notes:* Qwen Code’s 50 PRs include many with automated management. Copilot CLI had only a single PR, the lowest contributor activity today. Claude Code’s 50 open issues are cumulative, but 10 high‑impact bugs were highlighted.

## 3. Shared Feature Directions

The following requirements emerged across multiple tool communities today. Only requirements appearing in two or more tools are listed.

### MCP / Plugin Integration Reliability
- **Claude Code (#69324)**: Built‑in design MCP auto‑injects and fails with 401; no opt‑out.
- **Copilot CLI (#3838, #3582, #3812)**: OAuth credentials not attached after successful reauth; disabled MCP servers ignored; sub‑agents lose access to MCP tools.
- **Gemini CLI (#24246)**: HTTP 400 errors when >128 tools registered; asks for smarter scoping.
- **OpenCode (#25630, #28186, #28472)**: Plugin provider hook broken; MCP tool progress not sent causing timeouts; object parameters serialized as strings.
- **Qwen Code (#5365, #5322)**: `FileTokenStorage` fails on first save; empty argument handling for MCP prompts.

**Shared need**: Consistent, reliable MCP lifecycle — credential propagation, opt‑out controls, timeout prevention, and sub‑agent tool access.

### Agent Reliability (Hangs, False Reporting, Destructive Actions)
- **Claude Code (#68721)**: Team management tools removed (likely accidental); power users blocked.
- **Gemini CLI (#21409, #22323, #25166, #22672)**: Agent hangs forever; subagents report success after MAX_TURNS interruption; shell commands stuck; destructive git operations.
- **Copilot CLI (#3853)**: `/pr auto` misses review threads (incomplete agent output).
- **OpenCode (#30680)**: Auto‑compaction loop stops generation.

**Shared need**: Consistent behavior in agent execution — no silent hangs, accurate success/failure reporting, and guardrails against destructive operations.

### Windows Platform Parity
- **Claude Code (#59736, #69318, #58304)**: Desktop sessions disappear, crashes with `stream‑json`, copy/paste failures.
- **OpenAI Codex (#26158, #24040, #16815)**: Sandbox regression, registry key missing, WSL agent mode fails.
- **Copilot CLI (#3700)**: High‑CPU idle spin on WSL2, frozen TUI.
- **Kimi Code (#2462)**: VS Code extension fails on Git Bash (zip extraction silent failure).
- **OpenCode (#30697, #28072, #28251)**: Stale project paths after move; self‑update corruption; path normalization needed.
- **Qwen Code (#5244, #5324)**: Ghost session entries; tilde path expansion and sandbox image parsing.

**Shared need**: Reliable first‑class Windows support — installation, sessions, file paths, sandbox, and TUI rendering.

### Session & Data Retention
- **Claude Code (#59248, #59736)**: Silent transcript deletion; sessions lost after restart.
- **Copilot CLI (#3518, #3856)**: Archived sessions unrecoverable; duplicate resume splits sessions.
- **OpenCode (#30680, #30855)**: Auto‑compaction loops; plugin‑registered agents lost after update.
- **Qwen Code (#5147)**: OOM on `/quit` during auto‑memory extraction.

**Shared need**: User‑controlled session persistence with recovery mechanisms and prevention of silent data loss.

## 4. Differentiation Analysis

| Tool | Notable differentiation today |
|------|-----------------------------|
| **Claude Code** | Heavy focus on TUI customization and agent skill visibility; highest‑voted feature (skill tracking, 29 👍). Team management regression suggests reliance on advanced agent teamwork. Desktop app still lags CLI in polish. |
| **OpenAI Codex** | Shipping encrypted Noise relay channels and cross‑platform remote execution — infrastructure for secure distributed agents. Active PR work on token budgets, checkpoint‑backed resume, and proxy systems. Strong focus on remote/SSH connectivity features. |
| **Gemini CLI** | Most active on agent reliability bugs (3 P1 hangs/stalls). Auto‑Memory system under scrutiny (secrets exposure, infinite retries). Large dependency pinning PR merged (14‑day cooldown). Browser agent platform gaps (Wayland, settings ignored). |
| **GitHub Copilot CLI** | Lowest PR activity; only one design‑doc PR. Authentication and MCP OAuth are dominant pain points. Performance regressions on WSL2. Sidekick memory agent spawns even when disabled — configuration system trust issues. |
| **Kimi Code CLI** | Smallest community footprint today. One critical bug (system proxy ignored) with a community fix PR. Windows extraction failure blocks onboarding. Closed feedback on fragmented onboarding experience. |
| **OpenCode** | High feature‑request activity: per‑session goals (two concurrent PRs), multi‑auth profiles, task‑based model routing. Most community‑driven feature development. Startup crashes (musl, inotify, self‑update) are prominent. |
| **Qwen Code** | Highest volume of edge‑case bug reports (20 from one contributor @tt‑a1i). Rapid maintainer response on fixes (IME cursor, OOM, workspace trust). Focus on input validation and parser robustness. Emerging MCP extensions manager PR. |

## 5. Community Activity Notes

- **Highest issue volume**: Claude Code and Qwen Code each track 50 issues, but Qwen Code also has 50 PRs in motion, indicating a more active development cycle today.
- **Most releases**: OpenAI Codex (stable + alphas), Gemini CLI (v0.47.0), and Qwen Code (nightly) pushed releases. The other four tools had none.
- **Highest maintainer responsiveness**: Qwen Code merged several fixes within hours (IME cursor restore, OOM prevention). OpenAI Codex closed a long‑standing Zellij scrolling bug and a Windows sandbox regression. Claude Code merged an infrastructure workflow fix after 53 days of failure but left multiple high‑impact bugs unaddressed.
- **Lowest contributor engagement**: Copilot CLI had only 1 PR (a design doc with no maintainer review). Kimi Code had 1 community PR but no maintainer response.
- **Most vocal community**: Claude Code’s API regression issue (#69358) gained 11 👍 in under 24 hours. Copilot CLI’s Ollama compatibility issue (#3839) reached 7 👍 quickly. OpenCode’s task‑based model routing (#8456) remains the highest‑voted feature at 37 👍.

## 6. Evidence-Backed Observations

1. **Agent reliability is the single most common pain point across all tools.** Six of seven tracked tools (all except Kimi Code, which has a smaller sample) report agent hangs, false success, forgotten tools, or destructive actions. No tool appears to have solved sub‑agent governance or stall recovery.

2. **Windows support remains the largest platform gap.** Every tool that has a desktop or CLI component (all except possibly Gemini CLI) reported Windows‑specific bugs today, ranging from installation failures to session corruption to high‑CPU regressions. None reported a Windows‑exclusive fix.

3. **MCP / extension integration is fragile and lacks standardization.** Issues around credential propagation, tool availability to sub‑agents, forced injection, and silent timeouts appear in Claude Code, Copilot CLI, OpenCode, and Qwen Code. No tool has a fully reliable MCP lifecycle.

4. **Session persistence and data loss anxiety are growing.** Claude Code’s silent retention cleanup, Copilot CLI’s irreversible archive, OpenCode’s auto‑compaction loops, and Qwen Code’s OOM on quit all undermine confidence in long‑running workflows. Users want opt‑in controls and recoverability.

5. **Developer tool contribution volume is uneven.** Copilot CLI and Kimi Code saw minimal PR activity, suggesting lower community investment or higher barrier to contribution. In contrast, OpenCode and Qwen Code have active community PRs and feature requests, with maintainers merging fixes rapidly.

*No clear cross‑tool signal emerges for pricing transparency, accessibility features, or terminal rendering innovations — these topics appear in only one tool each today.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-19

## Today's Update Brief

No new releases were published in the last 24 hours. The community remained active with 50 open issues, highlighted by a high-impact API regression affecting Linux users (11 👍 in under 24 hours) and a critical data-loss bug around silent retention cleanup (16 comments). One infrastructure PR was merged to fix a workflow that had been failing for 53 consecutive days.

---

## Releases

No new releases in the last 24 hours. Latest known version remains v2.1.181 for CLI and v2.1.141 for the Cursor extension.

---

## Hot Issues

### 1. [JetBrains IDE integration request (#47166)](https://github.com/anthropics/claude-code/issues/47166)
- **Type:** Feature (OPEN, 25 comments)
- **Impact:** Users want a native JetBrains plugin ("real Claude AI Assist interface"), not just the terminal-based workflow. The request has been open since April and remains one of the most-discussed items.
- **Community reaction:** Broad agreement; user @dmxt argues the TUI experience is "painful" compared to Cursor/VS Code integrations.

### 2. [Silent retention cleanup deletes transcripts without warning (#59248)](https://github.com/anthropics/claude-code/issues/59248)
- **Type:** Bug (OPEN, 16 comments, 6 👍)
- **Impact:** Users lose all conversation transcripts older than the current session with no opt-in or recovery path. Affects the Cursor extension on macOS. Cross-listed with data-loss label.
- **Community reaction:** High frustration — users report losing "critical debugging history" and "yesterday's entire planning session."

### 3. [Team management tools regression in 2.1.178 (#68721)](https://github.com/anthropics/claude-code/issues/68721)
- **Type:** Bug (OPEN, 14 comments, 5 👍)
- **Impact:** `TeamCreate` and `TeamDelete` tools were removed (likely accidentally) in the 2.1.178 release on Linux. Users relying on agent teams workflows are blocked.
- **Community reaction:** Calls for an urgent patch; regression is confirmed by multiple users.

### 4. [Accessibility: built-in text-to-speech (#58429)](https://github.com/anthropics/claude-code/issues/58429)
- **Type:** Feature (OPEN, 13 comments, 3 👍)
- **Impact:** Blind and low-vision users request a native option for Claude to speak responses aloud in the desktop app. Two patterns proposed: user setting or auto-activation on accessibility API detection.
- **Community reaction:** Supportive; blind users note current workarounds (screen readers on TUI) are suboptimal.

### 5. [Desktop sessions disappear after restart on Windows (#59736)](https://github.com/anthropics/claude-code/issues/59736)
- **Type:** Bug (OPEN, 10 comments, 1 👍)
- **Impact:** 3rd-party-code sessions created in the desktop app vanish from the UI after restart, even though JSONL transcript files remain on disk.
- **Community reaction:** Users are wary of relying on desktop sessions for long-running work; some report workaround by re-importing JSONL manually.

### 6. [Checksum mismatch on macOS Sequoia (#68514)](https://github.com/anthropics/claude-code/issues/68514)
- **Type:** Bug (OPEN, 10 comments, 1 👍)
- **Impact:** `rootfs.img.zst` checksum mismatch during installation on macOS Sequoia ARM64. Appears to be a transient infrastructure issue but blocks installation.
- **Community reaction:** Multiple macOS users affected; no official response yet.

### 7. [API regression: "No Response" on Linux (#69358)](https://github.com/anthropics/claude-code/issues/69358)
- **Type:** Bug (OPEN, 2 comments, 11 👍 in <24h)
- **Impact:** After upgrade to 2.1.181, the API constantly returns no response on Linux. High-velocity upvote suggests widespread impact.
- **Community reaction:** Urgent; users report "unusable" state. Possibly a deployment-side issue rather than client bug.

### 8. [Built-in design MCP auto-injects and 401s (#69324)](https://github.com/anthropics/claude-code/issues/69324)
- **Type:** Bug (OPEN, 2 comments)
- **Impact:** `claude_design` MCP server is auto-injected at launch even when the `frontend-design` plugin is disabled. Fails with HTTP 401, showing a "Failed to connect" dialog every session.
- **Community reaction:** Annoyance at forced injection; no opt-out mechanism.

### 9. [/config dialog broken on macOS (#69466)](https://github.com/anthropics/claude-code/issues/69466)
- **Type:** Bug (CLOSED, 2 comments)
- **Impact:** `/config` dialog in CLI does not persist any setting changes. Toggling an option with Enter toggles it instead of saving/closing. Only Escape works, which discards changes. Likely regression in 2.1.181.
- **Community reaction:** Reported by two independent macOS users on the same version; frustration at inability to change config interactively.

### 10. [Desktop app crashes on Windows with `stream-json` error (#69318)](https://github.com/anthropics/claude-code/issues/69318)
- **Type:** Bug (CLOSED, 2 comments)
- **Impact:** Claude Code desktop app crashes instantly on launch with "script not found stream-json" error. Blocking all desktop usage on affected Windows machines.
- **Community reaction:** No fix mentioned; status changed to closed, unclear if resolved or accepted.

---

## Key PR Progress

1. **[#69470 – Fix lock-closed-issues workflow](https://github.com/anthropics/claude-code/pull/69470)** *(CLOSED, merged)*
   - Fixes a GitHub Actions workflow that had been failing for **53 consecutive days** (since 2026-04-27) due to pagination issues in the stale-issue locking job. Uses search API instead of offset pagination.

2. **[#69226 – Update frontend-design skill](https://github.com/anthropics/claude-code/pull/69226)** *(CLOSED, merged)*
   - Bumps the `frontend-design` plugin to v1.1.0 with "some improvements." Affects the design-related MCP tools that generated the auto-injection issue above.

3. **[#68673 – Fix pagination break condition in scripts](https://github.com/anthropics/claude-code/pull/68673)** *(OPEN)*
   - Fixes pagination logic to break when a page is not full, rather than only when empty. Likely related to the infrastructure fix in #69470.

4. **[#45553 – Resolve duplicate IPs](https://github.com/anthropics/claude-code/pull/45553)** *(OPEN, since April)*
   - Titled "resolve duplicate IPs." No body; appears to be an incomplete or abandoned PR. Still open after 2+ months.

5. **[#41611 – Add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611)** *(OPEN, since March)*
   - Short PR: "add missing source to claude code." No additional context. Open for ~2.5 months.

6. **[#41447 – feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)** *(OPEN, since March)*
   - Ambitious PR claiming to open-source Claude Code. References 5 closed issues (#59, #456, #2846, #22002, #41434). Still unmerged after nearly 3 months; likely a symbolic/trolling PR.

7. **[#23972 – fix: hookify Python 3.8 compat and cwd-independent rule loading](https://github.com/anthropics/claude-code/pull/23972)** *(OPEN, since February)*
   - Two fixes for the `hookify` plugin: Python 3.8 compatibility (`from __future__ import annotations`) and cwd-independent rule loading. Open for ~4.5 months with no maintainer review.

---

## Feature Request Clusters

**TUI Customization & Theming (3+ requests)**
- Custom border/frame colors in settings ([#44423](https://github.com/anthropics/claude-code/issues/44423))
- Configurable user-input color in conversation display ([#60786](https://github.com/anthropics/claude-code/issues/60786))
- Per-project persistent color/theme settings ([#43216](https://github.com/anthropics/claude-code/issues/43216), 5 👍)
- Strong visual cue for window state (running/prompt/idle) ([#52160](https://github.com/anthropics/claude-code/issues/52160), 2 👍)
- *Common theme: developers want to visually distinguish multiple concurrent TUI sessions and improve readability.*

**Desktop UI Enhancements (4+ requests)**
- Sort project groups by recent activity ([#55225](https://github.com/anthropics/claude-code/issues/55225), 3 👍)
- Configurable "Open in" submenu (vs. hardcoded VS Code/Cursor/Zed) ([#53427](https://github.com/anthropics/claude-code/issues/53427), 2 👍)
- Built-in speak-aloud option ([#58429](https://github.com/anthropics/claude-code/issues/58429), 3 👍)
- Show agent/subagent progress in TUI ([#48246](https://github.com/anthropics/claude-code/issues/48246), 1 👍)
- *Common theme: Desktop app lacks polish and configurability compared to CLI.*

**Agent/Team Tools Visibility**
- Skill invocation tracking and analytics ([#35319](https://github.com/anthropics/claude-code/issues/35319), 29 👍 — highest total 👍 in this digest)
- Agent/subagent task progress parity with third-party tools ([#48246](https://github.com/anthropics/claude-code/issues/48246))
- TeamCreate/TeamDelete regression (see #68721)
- *Common theme: Power users need transparency into what agents are doing and which skills are being used.*

**Data Retention & Recovery**
- Silent retention cleanup ([#59248](https://github.com/anthropics/claude-code/issues/59248), 6 👍)
- Desktop sessions lost after restart ([#59736](https://github.com/anthropics/claude-code/issues/59736))
- `/resume` should work for compacted conversations ([#60594](https://github.com/anthropics/claude-code/issues/60594))
- *Common theme: Users want control over session persistence and confidence that transcripts won't disappear.*

**MCP Server Integration Issues**
- stdio MCP server tools dropped during slow initialize ([#60224](https://github.com/anthropics/claude-code/issues/60224))
- Built-in design MCP auto-injects and 401s ([#69324](https://github.com/anthropics/claude-code/issues/69324))
- Microsoft 365 Connector auth failure ([#51385](https://github.com/anthropics/claude-code/issues/51385))
- *Common theme: MCP server lifecycle is fragile — silent failures, forced injections, and auth issues persist.*

---

## Developer Pain Points

- **Data loss anxiety:** The silent retention cleanup (#59248) and session disappearance after restart (#59736) erode trust in the tool for persistent work. Users want opt-in controls and recovery options.
- **Silent failures in MCP integration:** Servers that fail to initialize (timeout, 401, auth errors) are either silently dropped or produce confusing "Connected" status. Developers lose time debugging phantom integration issues.
- **Regressions in core tools:** The TeamCreate/TeamDelete regression (#68721) and /config dialog breakage (#69466) suggest inadequate regression testing in recent releases.
- **Windows Desktop instability:** Multiple crashes (#69318), copy/paste failures (#58304), and session persistence bugs (#59736) make the Windows desktop app feel unreliable compared to macOS/Linux.
- **Configuration UX friction:** The `/config` dialog being broken (no persistence) and lack of per-project theming force developers to edit JSON files manually — a downgrade from expected DX.
- **Dependency/install issues:** Checksum mismatches on macOS (#68514) and the `stream-json` crash on Windows (#69318) point to CI/CD pipeline fragility.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-19

## 1. Today’s Update Brief

The Codex repository saw moderate activity on June 19. One stable release (`rust-v0.141.0`) landed with encrypted remote executors and cross‑platform working directory preservation. 30 issues and 20 pull requests were updated in the last 24 hours, with notable community attention on a recently closed Zellij scrolling bug (#2558) and a growing Windows sandbox regression thread (#26158). Several credential‑ and proxy‑related PRs from the platform team continued to move forward.

## 2. Releases

**rust-v0.141.0**
- Remote executors now use authenticated, end‑to‑end encrypted **Noise relay channels** (#26242, #26245).
- Cross‑platform remote execution preserves executor‑native working directories, shells, and filesystem permission paths across app‑server and exec‑server boundaries.

Also published today: `rust-v0.142.0-alpha.{1,2,3}` and `rust-v0.141.0-alpha.7` – these are placeholder alpha tags without changelog details.

## 3. Hot Issues

*(Selected 10 from the top 30 by comment count; includes both open and recently closed items.)*

| Issue | Title | Status | Impact & Community |
|-------|-------|--------|-------------------|
| [#2558](https://github.com/openai/codex/issues/2558) | [TUI] Codex client output truncated when scrolling in Zellij | **CLOSED** | 66 comments, 114 👍. A long‑standing bug that caused output history to display incorrectly inside Zellij sessions. Now closed – likely resolved. |
| [#21719](https://github.com/openai/codex/issues/21719) | Chrome plugin native host connects to different socket than browser‑use pipe and times out | OPEN | 12 comments. Blocks `@chrome` tasks when using the Codex Desktop app; the extension’s native messaging host picks a wrong socket. |
| [#28422](https://github.com/openai/codex/issues/28422) | `image_gen` regression in 0.140.0: valid generated image not saved when status remains “generating” | OPEN | 11 comments, 8 👍. Users on Windows report that generated images are lost if the model’s status does not flip to “completed” quickly enough. |
| [#26158](https://github.com/openai/codex/issues/26158) | Windows sandbox regression in 0.138.0: setup refresh fails with OS error 740 | **CLOSED** | 11 comments, 5 👍. A sandbox failure on Windows that forced users to stay on 0.132.0. Now closed – fix likely included in v0.141.0. |
| [#13730](https://github.com/openai/codex/issues/13730) | Copy/pasted text from Word documents pasted as attached image | OPEN | 11 comments, 4 👍. MacOS bug: plain text from Microsoft Word becomes an image in the Codex chat, breaking copy‑paste workflows. |
| [#16815](https://github.com/openai/codex/issues/16815) | WSL agent mode fails: `AbsolutePathBuf deserialized without a base path` | OPEN | 9 comments, 7 👍. Windows + WSL users cannot use the agent environment. Error appears to be a path deserialization issue. |
| [#22857](https://github.com/openai/codex/issues/22857) | Better key authentication on SSH host remote connections | OPEN | 9 comments, 10 👍. Enhancement request: SSH key auth is missing from the iOS app and desktop remote connection UI. |
| [#24040](https://github.com/openai/codex/issues/24040) | Chrome plugin: Native Messaging Host registry key missing on Windows | OPEN | 8 comments. After installation the registry key is absent, so Chrome cannot find the native host. |
| [#25247](https://github.com/openai/codex/issues/25247) | Browser plugin bootstrap fails: `browser-client is not trusted` | OPEN | 8 comments. In‑app browser automation fails with a trust error during bootstrap, blocking plugin functionality. |
| [#28988](https://github.com/openai/codex/issues/28988) | Full Access mode keeps asking for permission (26.614.11602 on macOS) | OPEN | 6 comments, 4 👍. New regression in the latest Desktop app update; “Full Access” triggers repeated permission prompts. |

## 4. Key PR Progress

*(Selected 10 PRs updated in the last 24h, based on significance and discussion.)*

| PR | Title | Status | What It Does |
|----|-------|--------|--------------|
| [#28707](https://github.com/openai/codex/pull/28707) | abort turns when rollout budgets expire (token budget 3/3) | OPEN | Propagates shared rollout‑budget exhaustion to abort active turns, preventing runaway usage across threads. |
| [#29005](https://github.com/openai/codex/pull/29005) | Skip curated repo sync for remote plugins | OPEN | Speeds up startup by skipping the legacy `openai-curated` sync when remote plugins are enabled. Falls back for API‑key/unauthenticated sessions. |
| [#28806](https://github.com/openai/codex/pull/28806) | optimize resume and fork history | OPEN | Implements checkpoint‑backed resume and copy‑on‑write fork to reduce cold `thread/resume` and `thread/fork` work. |
| [#26707](https://github.com/openai/codex/pull/26707) | PAC 2 - Add shared auth system proxy contract | OPEN | Moves Codex‑owned auth and startup HTTP clients through a common route‑aware boundary. Prepares for Windows/macOS system proxy resolution. |
| [#29006](https://github.com/openai/codex/pull/29006) | Preserve skill descriptions outside model context | OPEN | Fixes a bug where skills with descriptions >1024 chars were skipped during metadata loading. Full description retained for non‑model consumers. |
| [#28814](https://github.com/openai/codex/pull/28814) | Assign response item IDs when recording history | **CLOSED** | Client‑created response items now receive IDs at the history‑recording boundary, preventing identity loss across rollouts and resume. |
| [#28489](https://github.com/openai/codex/pull/28489) | Add indexed web search mode | OPEN | Introduces `web_search = "indexed"` alongside existing modes; sends `index_gated_web_access: true` for hosted search. |
| [#28996](https://github.com/openai/codex/pull/28996) | Avoid duplicate ImageGen Markdown output | OPEN | Prevents generated images from being rendered both as markup inline and as separate “open in” nuggets. |
| [#22680](https://github.com/openai/codex/pull/22680) | Tell model about credentialed routes | OPEN | Seeds the managed proxy with initial credentialed routes and informs the model which HTTPS prefixes can use stored credentials. |
| [#28967](https://github.com/openai/codex/pull/28967) | Snapshot managed proxy child environments | OPEN | Captures a coherent view of proxy and MITM state before launching child environments, preventing races from concurrent reloads. |

## 5. Feature Request Clusters

- **Remote & SSH Connectivity** (#22857, #26846, #26641) – Users want better SSH key authentication, and the ability to direct the Codex Desktop app to connect to a headless Codex host running on another machine. The “remote host” feature is appreciated but currently limited.
- **Windows Platform Parity** – Multiple threads (e.g., #24040, #16815, #28112, #28676) request that Windows‑specific workflows (Chrome plugin, WSL, sandbox, file handling) receive first‑class support and faster bug fixes.
- **Rate Limit Transparency** (#28879, #28811) – Users experiencing sudden cost jumps or unexpected reset behavior are asking for clearer budgeting controls and reset‑banking policies that match announced messaging.
- **Image Generation Workflow** (#28422, #28996) – Issues with image saving and duplicate output suggest that the image generation pipeline needs more robust status handling and deduplication.

## 6. Developer Pain Points

- **Windows sandbox instability** (#26158, #28982, #28971) – The sandbox on Windows has suffered multiple regressions, including setup failures, permissions issues, and conflict with antivirus software (Bitdefender). Users frequently roll back to older versions.
- **macOS code signing and permissions** (#28572, #28988, #28583) – A string of reports about app bundle codesign failures and repeated permission prompts for “Full Access” mode erode trust in the desktop update mechanism.
- **Log file bloat** (#28997) – `logs_2.sqlite-wal` grows into tens of gigabytes on Linux, causing disk pressure without an obvious cleanup mechanism.
- **Duplicate / missing image outputs** (#28422, #28996) – CLI image generation remains unreliable: images either are not saved because the status is stuck, or are rendered multiple times, cluttering the conversation.
- **Plugin & extension incompatibility** (#28330, #25247) – Third‑party plugins (e.g., `ngs-analysis`) can break the VS Code extension, and in‑app browser plugins fail bootstrap due to trust or registry misconfiguration.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-19

## Today's Update Brief

The project shipped **v0.47.0** with a backend definition fix, while maintainers continue to hammer on **agent reliability issues** — generalist agent hangs, subagent false-success reporting, and shell command stalling remain contentious topics with high community engagement. A major **dependency pinning PR** (#27948) was merged to enforce 14-day update cooldowns, signaling a push for build stability. The **Auto Memory system** is drawing increasing scrutiny, with three new issues filed by core contributor @SandyTao520 surfacing redaction gaps and infinite retry loops.

---

## Releases

**v0.47.0** — Released 2026-06-19
[Full Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0)

Changes:
- Version bump to 0.47.0 (nightly.20260602)
- `Respect backend def` — backend definition handling fix
- Changelog for v0.46.0-preview.0 included

No detailed patch notes beyond the changelog automation were provided in the release data.

---

## Hot Issues (10 selected)

### 1. Generalist agent hangs forever (#21409)
[Issue](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1, Bug** | 8 👍, 7 comments

**Workflow:** Users running `gemini-cli` find that any task deferring to the generalist sub-agent hangs indefinitely — even simple folder creation. The only workaround is explicitly instructing the model not to use sub-agents.

**Impact:** Critical for multi-agent workflows. The issue has been open since March 6 and is marked `status/need-retesting`, suggesting a fix may exist but hasn't been validated by the reporter.

**Community:** Multiple users corroborate the hang; the 8 upvotes make this the most-requested fix in today's data.

---

### 2. Subagent reports GOAL success after MAX_TURNS interruption (#22323)
[Issue](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1, Bug** | 2 👍, 6 comments

**Workflow:** The `codebase_investigator` subagent hits its turn limit during analysis but reports `status: "success"` with `Termination Reason: "GOAL"`. The user (@matei-anghel) discovered this while investigating two local repositories.

**Impact:** Silent failures erode trust in subagent outputs. Downstream systems relying on success flags would proceed with incomplete data.

**Community:** Maintainers have labeled `status/need-retesting` — a fix may be deployed but needs community verification.

---

### 3. Shell command execution gets stuck on "Waiting input" after completion (#25166)
[Issue](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1, Bug, effort/medium** | 3 👍, 4 comments

**Workflow:** After executing trivial shell commands (e.g., `ls`, `mkdir`), the CLI remains in "Awaiting user input" state even though the command has already finished. User @rnett reports this is a recurring issue.

**Impact:** Blocks all subsequent task execution until manual cancellation. Affects automated pipelines and CI-like usage.

**Community:** Three upvotes and "effort/medium" label suggest this is a known pain point with moderate engineering complexity.

---

### 4. Browser subagent fails on Wayland (#21983)
[Issue](https://github.com/google-gemini/gemini-cli/issues/21983) | **P1, Bug** | 1 👍, 4 comments

**Workflow:** On Wayland display servers, the browser subagent fails immediately with `Termination Reason: GOAL` but no meaningful output. Linux users with modern desktop environments are affected.

**Impact:** Excludes a significant Linux user base. Marked `status/need-retesting`, so a potential fix may be awaiting validation.

---

### 5. Gemini doesn't use skills and sub-agents automatically (#21968)
[Issue](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2, Bug** | 0 👍, 6 comments

**Workflow:** Custom skills (e.g., "gradle", "git") with clear descriptions are ignored by the agent unless explicitly instructed to use them. User @rnett reports the agent will perform manual operations that a skill already automates.

**Impact:** Undermines the value proposition of custom skill authoring. Users expect the agent to self-discover available tools.

**Community:** Six comments suggest active discussion on prompt engineering approaches to improve discovery.

---

### 6. 400 error when >128 tools are registered (#24246)
[Issue](https://github.com/google-gemini/gemini-cli/issues/24246) | **P2, Bug** | 0 👍, 3 comments

**Workflow:** Users with substantial MCP tool registrations or custom skills encounter HTTP 400 errors when tool count exceeds 400 (reported) or 128 (API limit suspected).

**Impact:** Power users with extensive toolchains are blocked. Community member @gundermanc suggests the agent should "be smarter about limiting tools in scope."

---

### 7. Auto Memory sends secrets to model before redaction (#26525)
[Issue](https://github.com/google-gemini/gemini-cli/issues/26525) | **P2, Bug, security** | 0 👍, 5 comments

**Workflow:** The Auto Memory extraction prompt instructs the model to redact secrets, but content is already in the model context before redaction occurs. @SandyTao520 also flags that existing skill transcripts may be logged without redaction.

**Impact:** Security concern — transient exposure of secrets to the model during extraction, even if final output is clean.

**Community:** Filed by a core maintainer, indicating this is a recognized internal priority.

---

### 8. Auto Memory retries low-signal sessions indefinitely (#26522)
[Issue](https://github.com/google-gemini/gemini-cli/issues/26522) | **P2, Bug** | 0 👍, 5 comments

**Workflow:** The extraction agent only marks a session as "processed" when it successfully reads the transcript with `read_file`. If the agent judges a session "low signal" and skips it, that session remains unprocessed and can be surfaced on subsequent runs.

**Impact:** Infinite retries for low-value sessions, wasting API calls and creating redundant processing work.

---

### 9. Agent performs destructive git operations (#22672)
[Issue](https://github.com/google-gemini/gemini-cli/issues/22672) | **P2, Bug, customer-issue** | 1 👍, 3 comments

**Workflow:** During complex git operations, the model uses `git reset` or `--force` flags when safer alternatives exist. The concern extends to database and infrastructure resource management.

**Impact:** Risk of data loss or irreversible state changes. Community member @abhipatel12 requests better guardrails for destructive operations.

**Community:** Marked `kind/customer-issue`, indicating real-world user impact reported through support channels.

---

### 10. Terminal display corruption after external editor exit (#24935)
[Issue](https://github.com/google-gemini/gemini-cli/issues/24935) | **P2, Bug, effort/medium** | 0 👍, 1 comment

**Workflow:** After exiting an external editor in `terminalBuffer` mode, the terminal display can remain corrupted. Maintainer @jacob314 notes a full screen refresh is needed on the Ink side.

**Impact:** Degraded UX for users who prefer external editors. Affects adoption among vim/emacs users.

---

## Key PR Progress (10 selected)

### 1. Fix Jupyter Notebook and JSON corruption in write_file (#28000)
[PR](https://github.com/google-gemini/gemini-cli/pull/28000) | **size/m, OPEN**

A critical fix for `write_file` that silently corrupted `.ipynb` and JSON files, causing JupyterLab/Colab to discard changes. The PR implements safer serialization for structured file formats. Still under review.

---

### 2. Cloud Run webhook ingestion service for Caretaker Agent (#28015)
[PR](https://github.com/google-gemini/gemini-cli/pull/28015) | **size/l, OPEN**

Implements a complete webhook ingestion pipeline: signature verification, Firestore storage, and Pub/Sub publishing. This is infrastructure for the Caretaker Agent to respond to GitHub events. Substantial new functionality.

---

### 3. web-fetch: decode response body using correct charset (#27996)
[PR](https://github.com/google-gemini/gemini-cli/pull/27996) | **area/agent, size/m, OPEN**

Fixes `web-fetch` to respect the `charset` parameter in HTTP `Content-Type` headers. Previously all responses were decoded as UTF-8, causing garbled text for CJK and legacy-encoded sites. Important for international users.

---

### 4. Fix $-pattern corruption in prompt substitutions (#28013)
[PR](https://github.com/google-gemini/gemini-cli/pull/28013) | **area/agent, size/s, OPEN**

Fixes `applySubstitutions` where skill/sub-agent descriptions containing `$` (e.g., `$variable`, `$PATH`) were interpreted as JavaScript replacement patterns, causing silent corruption. A small but high-impact fix for anyone using descriptions with dollar signs.

---

### 5. Sync footer branch name on filesystems without fs.watch events (#28012)
[PR](https://github.com/google-gemini/gemini-cli/pull/28012) | **P2, area/core, size/m, OPEN**

Resolves a bug where the footer **Branch** indicator doesn't update after `git checkout` on WSL mounts and network shares (filesystems lacking `fs.watch` support). @manumishra12 adds polling-based fallback detection.

---

### 6. Add eval:inventory CLI command (#28009)
[PR](https://github.com/google-gemini/gemini-cli/pull/28009) | **size/l, OPEN**

Adds `npm run eval:inventory` to scan `evals/` directory and produce a stable text report of all eval cases grouped by policy. Useful for CI pipelines and eval auditing.

---

### 7. New `gemini models` command to list available models (#27848)
[PR](https://github.com/google-gemini/gemini-cli/pull/27848) | **P3, area/non-interactive, size/l, OPEN**

Adds a `gemini models` command exposing available models, context window limits, and tiers (Pro/Flash). Supports JSON output for scripting. Still open after 8 days — awaiting review.

---

### 8. Fix macOS symlink path mismatches in EditTool/WriteFileTool tests (#27990)
[PR](https://github.com/google-gemini/gemini-cli/pull/27990) | **size/m, OPEN**

Fixes test failures on macOS where `/var` symlinks to `/private/var` cause path resolution mismatches between production code (which resolves real paths) and test expectations. Important for macOS developer onboarding.

---

### 9. Fix nightly release workflow variable fallbacks (#28016)
[PR](https://github.com/google-gemini/gemini-cli/pull/28016) | **P1, area/non-interactive, size/s, CLOSED (merged)**

Quick fix for nightly releases where scheduled runs (using `internal` environment) lacked package name variables, causing `npm publish` to fail. Merged same day.

---

### 10. Pin all dependencies and enforce 14-day update cooldown (#27948)
[PR](https://github.com/google-gemini/gemini-cli/pull/27948) | **size/xl, CLOSED (merged)**

A large-scale dependency management PR that converts all `^`/`~` ranges to exact version pins and enforces a 14-day cooldown for automated Dependabot updates. Signals a move toward build repeatability and reduced supply-chain risk.

---

## Feature Request Clusters

### Agent Self-Awareness & Behavior Control
Multiple requests aim to make the agent more predictable and transparent:
- **#21432**: CLI should know its own hotkeys, flags, and configuration
- **#22672**: Agent should avoid destructive git/database operations
- **#21968**: Agent should proactively discover and use available skills

### AST-Aware Code Understanding
Two related issues track investigations into Abstract Syntax Tree-powered tooling:
- **#22745** (Epic): Assess impact of AST-aware file reads, search, and codebase mapping
- **#22746**: Use AST-aware CLI tools (tilth, glyph) to improve `codebase_investigator`

### Browser Agent Enhancements
- **#22232**: Automatic session takeover and lock recovery for browser profiles
- **#22267**: Browser agent ignores `settings.json` overrides like `maxTurns`

### Evaluation Infrastructure
- **#24353** (Epic): Robust component-level evaluations — follow-up from issue #15300
- **#23166**: Stabilize and enhance internal project evaluations

---

## Developer Pain Points

**1. Agent Hangs and Stalls (3 P1 bugs)**
Issues #21409, #25166, and #22465 all report the CLI freezing — during generalist agent execution, after shell command completion, or at interactive prompts. These are the highest-severity user-facing problems in the tracker.

**2. Memory System Reliability**
Four issues from @SandyTao520 (#26516, #26522, #26523, #26525) highlight systemic problems in the Auto Memory system: infinite retries, silent skip of invalid patches, and secrets exposure before redaction. This appears to be an active refactoring area.

**3. Subagent False Reporting**
Issue #22323 reveals that subagents can report success when they actually hit constraints (MAX_TURNS). Combined with #22093 (subagents running without permission since v0.33.0), agent governance is a persistent concern.

**4. Browser Agent Fragility**
Issues #21983 (Wayland), #22267 (settings override ignored), and #22232 (lock recovery) show the browser subagent has several platform-specific and configuration-handling gaps.

**5. Terminal and Rendering Issues**
Issues #21924 (flicker on resize), #24935 (corruption after external editor), and #22466 (incorrect `\n` escape behavior) reflect ongoing UI/UX polish needs in the terminal rendering layer.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-06-19

## Today's Update Brief
No new releases were published in the last 24 hours. Community activity remained high, with 38 issues and 1 pull request updated. The most discussed topics involve authentication failures in MCP OAuth flows, a high‑severity CPU regression on WSL2, and multiple reports of ignored configuration settings (disabled MCP servers, memory off flags not being respected). A single PR adds a design document for plan‑review fallback on strict OpenAI‑compatible backends.

## Releases
*No new versions were published in the last 24 hours.*

---

## Hot Issues (10 noteworthy items)

1. **[#3838 – Drive MCP OAuth not attached: tools fail with 'missing required authentication credential' after successful reauth](https://github.com/github/copilot-cli/issues/3838)**
   *Area: authentication/MCP* – OAuth browser flow reports success and local cache files are created, but Drive tool calls still lack auth credentials. 7 comments, no upvotes. Affects v1.0.63 via Homebrew.

2. **[#1974 – After upgrading Copilot CLI 1.0.3, generated Markdown links are not clickable](https://github.com/github/copilot-cli/issues/1974)**
   *Area: installation* – Long‑standing issue (opened March 2026) still unresolved. 5 comments, 1 👍.

3. **[#3700 – [High severity] 1.0.60 WSL2 regression: CLI MainThread spins at ~215% CPU while idle, TUI output frozen](https://github.com/github/copilot-cli/issues/3700)**
   *Area: Windows/terminal rendering* – Reports a fresh‑session regression; TUI becomes unusable until restart. 2 comments, 2 👍. Reproduces consistently on WSL2.

4. **[#3296 – v1.0.46 fails to start MCP server on Ubuntu 20.04 due to glibc 2.33 dependency](https://github.com/github/copilot-cli/issues/3296)**
   *Area: Linux/MCP* – Runtime binary compiled for newer glibc, preventing MCP server startup on Ubuntu 20.04. 2 comments.

5. **[#3518 – Feature request: archive / restore archived project sessions](https://github.com/github/copilot-cli/issues/3518)**
   *Area: sessions* – User accidentally archived a long‑running orchestrator session and cannot restore it. 2 comments, 5 👍. High demand for session lifecycle improvements.

6. **[#3839 – Ollama Cloud Does Not Support custom_tool_call Payload Used by Copilot CLI](https://github.com/github/copilot-cli/issues/3839)**
   *Area: agents/models* – Fleet Mode with BYOK model via Ollama fails with `400 BadRequestError` due to `custom_tool_call`. 1 comment, 7 👍 (highest upvotes in recent issues).

7. **[#3861 – Docs present local sandbox capabilities as working, but they do not](https://github.com/github/copilot-cli/issues/3861)**
   *Triage* – Per‑host filtering (`allowedHosts` / `blockedHosts`) and cross‑platform isolation are documented but not functional. 0 comments, opened today.

8. **[#3859 – Copilot Subconscious sidekick keeps spawning per‑prompt even with memory disabled](https://github.com/github/copilot-cli/issues/3859)**
   *Area: agents/context‑memory/plugins* – Memory “voting” agent spawns on every prompt despite `/memory off` and `"memory": false`. 1 comment.

9. **[#3856 – Repeated Enter in the /resume picker splits a session; extension session.send wakes invisible context](https://github.com/github/copilot-cli/issues/3856)**
   *Area: sessions/context‑memory* – Pressing Enter multiple times during session resume creates multiple active contexts; tools are lost. 0 comments, opened today.

10. **[#3853 – /pr auto misses review threads](https://github.com/github/copilot-cli/issues/3853)**
    *Area: agents/tools* – `gh api graphql` query fails to detect unresolved review threads, leading to incomplete PR summaries. 0 comments.

---

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **[#3847 – Plan review: add compatibility fallback design + test vectors](https://github.com/github/copilot-cli/pull/3847)**
  *Author: @nguyenhoangduc0707-lang* – Adds a design document and test vectors for a fallback parsing strategy (JSON‑first, then YAML, then heuristics) when using strict OpenAI‑compatible backends that lack `function_call` metadata. No maintainer comments yet. Merged? (Status is open.)

No other pull requests were active. Community contributions remain low; the majority of activity is in issue discussions.

---

## Feature Request Clusters

1. **Session lifecycle management**
   Multiple requests for unarchiving/restoring archived sessions ([#3518]) and for better isolation of session contexts ([#3856]). Users want the ability to recover accidentally archived sessions and prevent context pollution from duplicate `/resume` actions.

2. **Plugin stability and sharing**
   Requests for lock‑file based plugin installations ([#3136]) and allowing plugins to include instruction files ([#2727]) indicate a desire for reproducible, distributable plugin configurations.

3. **Model switching & enterprise model support**
   Users want programmatic/automatic model switching based on task complexity ([#2896]) and support for enterprise‑managed custom models in the CLI ([#3730]).

4. **MCP configuration improvements**
   Issues around MCP server disabling being ignored ([#3582]) and MCP tools not accessible to subagents ([#3812]) point to a need for more reliable and configurable MCP tool exposure.

5. **Input shortcuts & terminal ergonomics**
   Reports of `@` file expansion breaking ([#3854], [#3834]), Ctrl+Backspace not working on Windows ([#3858]), and scrolling not working ([#3855]) form a cluster of keyboard/terminal usability issues.

---

## Developer Pain Points

- **Authentication & MCP OAuth failures** – The most commented issue today ([#3838]) shows that successful OAuth flows still result in unauthenticated tool calls, breaking the core MCP workflow. This is a blocking problem for users relying on third‑party MCP tools.

- **Performance regressions on WSL2** – The high‑CPU idle spin and frozen TUI ([#3700]) make the CLI unusable on Windows Subsystem for Linux without a restart. No fix has been released since v1.0.60.

- **Ignored configuration flags** – Multiple reports that `"disabled": true` for MCP servers ([#3582]) and `"memory": false` / `/memory off` for memory agents ([#3859]) are silently ignored. This erodes trust in the configuration system.

- **Session poisoning and state corruption** – A malformed attachment can poison a whole session ([#3791]), and repeated key presses in the `/resume` picker can split sessions into invisible contexts ([#3856]). These bugs undermine long‑lived sessions, a key use case.

- **Platform compatibility gaps** – The glibc 2.33 dependency ([#3296]) prevents Ubuntu 20.04 users from running MCP servers, while Windows users lack standard keyboard shortcuts ([#3858]).

- **Documentation mismatch** – The sandbox feature docs claim capabilities (per‑host filtering, cross‑platform isolation) that are not implemented ([#3861]), leading to confusion and wasted debugging time.

- **Subagent tool access regression** – Subagents losing access to MCP tools ([#3812]) broke a previously working feature, and downgrading does not restore it.

**Reminder:** This digest reflects a single day of activity. Long‑standing issues may have been reported earlier and remain unresolved. All links point to the respective GitHub items.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-19

## Today's Update Brief

Activity is moderate today with no new releases. One new bug surfaced (Windows + Git Bash extraction failure), while a community-contributed PR directly addresses a long-standing proxy configuration issue. A closed feedback issue provides detailed onboarding friction points that the maintainers may act on.

## Releases

No new releases in the last 24 hours. Latest stable version remains **1.43.0**.

## Hot Issues

### 1. [#2455 — FetchURL does not read system proxy](https://github.com/MoonshotAI/kimi-cli/issues/2455)
- **Affected workflow**: CLI network calls (FetchURL, WebSearch) in proxy- or firewall-restricted environments (e.g., corporate networks, certain geopolitical regions).
- **Impact**: Users who set `HTTP_PROXY`/`HTTPS_PROXY` system env vars find that `Shell` and `curl` work fine, but Kimi Code CLI’s HTTP calls fail. This breaks all external API communication behind proxies.
- **Community reaction**: Issue opened 4 days ago, updated yesterday. Two comments. A direct fix PR (#2461) was submitted simultaneously.

### 2. [#2462 — Windows + Git Bash: VS Code extension fails to extract bundled CLI](https://github.com/MoonshotAI/kimi-cli/issues/2462)
- **Affected workflow**: Installing/running Kimi Code via VS Code extension on Windows when using Git Bash (MSYS2) as terminal.
- **Impact**: The extension bundles a CLI zip, but `tar` in Git Bash cannot handle zip archives. The extraction silently fails, leaving no CLI binary to execute. Platform incompatibility blocks first-run experience.
- **Community reaction**: Opened today, zero comments yet. No maintainer response visible.

### 3. [#2460 — Onboarding and configuring MCP servers, plugins, and sub-skills is harder than it needs to be](https://github.com/MoonshotAI/kimi-cli/issues/2460)
- **Affected workflow**: Initial setup of Kimi Code with MCP server(s), plugins, and user-defined skill bundles.
- **Impact**: Once wired up, the tool works well, but the configuration process is fragmented and requires manual steps. User documents a specific session of setting up `cua-driver`, several MCP servers, plugins, and sub-skill bundles.
- **Community reaction**: Closed by author shortly after opening. Feedback is detailed and actionable—could be taken as a signal for improving the setup DX.

## Key PR Progress

### 1. [#2461 — fix(net): honour system proxy env vars in aiohttp sessions](https://github.com/MoonshotAI/kimi-cli/pull/2461)
- **Description**: Direct fix for issue #2455. The PR identifies that all outbound HTTP goes through a single `aiohttp.ClientSession` factory which ignores proxy environment variables (`HTTP_PROXY`, `HTTPS_PROXY`). It integrates `aiohttp.ClientSession`’s built-in proxy support via `trust_env=True` or explicit proxy injection.
- **Impact**: If merged, users behind corporate or regional proxies would regain network connectivity without manual `fetch_url_proxy` configuration. This is the most actionable fix in today’s digest.
- **Status**: Open, no maintainer review yet. The author appears to be a community contributor.

## Feature Request Clusters

No clear clusters emerged from today’s single-day data. The closed feedback (#2460) is a standalone onboarding improvement request rather than a recurring pattern. No other feature requests were present in today’s issue set.

## Developer Pain Points

**1. Network proxy compatibility**
Issue #2455 and its corresponding fix PR #2461 highlight a recurring pain point: Kimi Code CLI ignores system proxy variables. Developers in restricted networks (corporate proxies, domestic firewalls) cannot use core fetch/web search functionality even when their shell / curl / other tools work. This is the highest-priority developer pain point today.

**2. Windows environment compatibility**
Issue #2462 shows that the VS Code extension’s bundled CLI delivery method (zip + `tar` extraction) does not account for Git Bash (MSYS2) on Windows. Users on that common development setup hit a silent installation failure. This reveals a lack of cross-platform testing for the extension’s bootstrap path.

**3. Onboarding configuration burden**
The feedback in #2460, though closed, indicates that setting up MCP servers, plugins, and skill bundles requires more hand-holding than developers expect. The user was able to succeed, but the experience was described as fragmented and harder than necessary. This is a usability friction point for new adopters.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-19

## Today's Update Brief

No new releases were published in the past 24 hours. Community activity remains high with 30 open/updated issues and 20 pull requests, centered on regressions (Alpine Linux TUI crash, plugin hook failures, auto-compaction loops), long-standing feature requests (per-session goals, multi-auth profiles, task-based model selection), and a wave of automated PR cleanups merging bug fixes from contributors.

## Releases

None in the last 24 hours.

## Hot Issues

(10 selected from top 30 by comment count)

1. **[#27589 — TUI fails on Alpine Linux (musl) in 1.14.50: getcontext symbol not found](https://github.com/anomalyco/opencode/issues/27589)**
   Regression: TUI crashes on musl-based Linux distros. Worked in 1.14.48, broken in 1.14.50. 35 comments, high community attention (12 👍). No fix visible yet.

2. **[#14289 — model "claude-opus-4.6" not supported for vision](https://github.com/anomalyco/opencode/issues/14289)**
   Closed issue: Claude Opus 4.6 lacks vision support in OpenCode despite being listed on Azure catalog. 19 comments, 5 👍. Raises ongoing concern about model capability parity.

3. **[#450 — Support for reasoning_effort parameter in UI](https://github.com/anomalyco/opencode/issues/450)**
   Long-running feature request (since Jun 2025). 14 comments, 26 👍. Users want UI controls for `reasoning_effort` across OpenAI, Gemini, DeepSeek, etc.

4. **[#25630 — Regression: plugin provider.models() hook no longer populates custom providers (post #25167)](https://github.com/anomalyco/opencode/issues/25630)**
   Open regression: custom providers declared in `opencode.jsonc` no longer receive models from plugins after PR #25167. 12 comments, 3 👍. Affects users with local/private model providers.

5. **[#16610 — Opencode hangs at startup if a .git repo is present and inotify user instances run out](https://github.com/anomalyco/opencode/issues/16610)**
   Open: startup hang when inotify limits are low. 11 comments, 7 👍. A PR (#32854) now attempts to fix this by making file watcher failures non-fatal.

6. **[#5391 — [FEATURE]: multiple auth profiles per provider](https://github.com/anomalyco/opencode/issues/5391)**
   Reopened from #893. 11 comments, 31 👍. High demand: users want to switch API keys/profiles within the same provider without config edits.

7. **[#8456 — [FEATURE]: opencode could automatically use different models based on task type](https://github.com/anomalyco/opencode/issues/8456)**
   9 comments, 37 👍. Leading feature request: route code generation to one model, debugging to another, etc. Referenced as inspiration for agentic model routing.

8. **[#30680 — OpenCode immediately enters auto-compaction loop and stops generating responses](https://github.com/anomalyco/opencode/issues/30680)**
   Closed: user reports infinite auto-compaction loop consuming tokens. 7 comments. Affects responsive generation, resolved in later version.

9. **[#30697 — Move project folder to path B and delete old path A But OpenCode still opens and navigates to old path A](https://github.com/anomalyco/opencode/issues/30697)**
   Open: stale project path persists after folder move/delete on Windows. 6 comments. Duplicates symptoms seen in #31888.

10. **[#28072 — OpenCode fails to open after updating itself](https://github.com/anomalyco/opencode/issues/28072)**
    Closed: self-update on Windows x64 leaves corrupted `opencode.exe`. 6 comments, 5 👍. Critical for Windows users relying on auto-update.

## Key PR Progress

(10 selected from top 20 by comment count)

1. **[#32924 — Draft: Add native /goal foundation](https://github.com/anomalyco/opencode/pull/32924)**
   Introduces a native `/goal` domain model with typed state machine. Draft state; intentionally large and may be split. Companion to #32743.

2. **[#32743 — feat(session): native per-session goals with /goal and autonomous pursuit](https://github.com/anomalyco/opencode/pull/32743)**
   Adds `/goal` command with persisted active/paused/completed states. Closes #27167 and #29445. Aims to replace ad-hoc goal setting with first-class support.

3. **[#32854 — fix(core): tolerate file watcher startup failures](https://github.com/anomalyco/opencode/pull/32854)**
   Makes file watcher non-fatal: logs warning instead of crashing/hanging. Directly addresses #16610 and related issues (#26842, #23190). Merged.

4. **[#32914 — docs: add GMI Cloud provider entry to providers directory](https://github.com/anomalyco/opencode/pull/32914)**
   Adds GMI Cloud documentation for provider setup and model selection. Documentation contribution.

5. **[#32919 — fix: type safety and code hygiene improvements](https://github.com/anomalyco/opencode/pull/32919)**
   Extracts OpenAI-compatible chat chunk schema, adds explicit types, removes TODOs. Closes #32764. Bug fix.

6. **[#32922 — fix: /unshare does not remove share link from TUI display](https://github.com/anomalyco/opencode/pull/32922)**
   Fixes share link persisting after `/unshare` by updating local sync store and suppressing orphaned stderr. Still open.

7. **[#28251 — fix: normalize forward slashes to backslashes for Windows directory matching](https://github.com/anomalyco/opencode/pull/28251)**
   Closes #28242. Normalizes paths in web UI on Windows to fix directory matching. Merged.

8. **[#28250 — fix(config): guard env-var JSON parsing against invalid input](https://github.com/anomalyco/opencode/pull/28250)**
   Prevents crash on malformed env-var JSON. Distinguishes safety boundaries (fail loud on perms, silent default on others). Merged.

9. **[#28246 — fix: pass onprogress to callTool so progressToken is set and long-running MCP tools don't time out](https://github.com/anomalyco/opencode/pull/28246)**
   Fixes MCP tool timeout by ensuring progress notifications are sent. Closes #28186. Merged.

10. **[#28245 — fix(session): include friendly provider name in system identity prompt](https://github.com/anomalyco/opencode/pull/28245)**
    Adds the provider's friendly name to the system prompt instead of raw id. Improves model context. Merged.

## Feature Request Clusters

- **Multiple authentication profiles per provider** (#5391, #893): Users want to swap API keys/endpoints without editing config. 31 👍 across issues.
- **Task-based automatic model selection** (#8456, #21495): Route code generation, debugging, file editing to different models automatically. 37 👍 on #8456 alone.
- **Per-session goals** (#27167, #29445, #32743, #32924): Persistent goals with `/goal` command — active/paused/completed states and autonomous pursuit. Two concurrent PRs (#32743 and #32924) indicate active development.
- **MCP tool improvements** (#28472, #26328): Object parameters serialized as strings; progress indicators for long-running MCP calls. Small but recurring friction points.
- **Model/marketplace expansion** (#14289, #11787, #32116, #32904): Missing models (Claude Opus 4.6 vision, NanoGPT models, Go subscription model diversity). Users expect model parity with provider APIs.
- **Pricing transparency** (#32116): Go subscription pricing table lacks markup disclosure between V4 Flash vs V4 Pro — 4x markup invisible to users.

## Developer Pain Points

- **Startup hangs and crashes**: Inotify limits (#16610), self-update corruption (#28072), broken TUI on musl (#27589) — multiple environmental failure modes.
- **Stale project/path state**: Moving or deleting projects leaves OpenCode stuck on old paths on Windows (#30697, #31888). Files created after startup not indexed (#32747, #32915).
- **Plugin ecosystem regressions**: Custom providers broken by #25167 (#25630); plugin-registered agents lost after desktop update (#30855).
- **Token waste and rate limiting**: Auto-compaction loops consuming tokens (#30680); DeepSeek overbilling on v1.17.x (#32911); false rate-limit errors for paid users (#32846).
- **Input lag and UI stutters**: Severe TUI input delay on macOS even without plugins (#32859); missing "Modified Files" sidebar in v1.16.0 (#30877).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-19

## Today's Update Brief

Today saw a high volume of activity with a nightly patch release, 50 open or updated issues, and 50 pull requests in motion. The community is heavily focused on input/output parsing bugs, session management reliability, and OAuth/token storage edge cases, with a notable surge in reports from contributor @tt-a1i covering dozens of small but critical validation gaps. The development team responded rapidly with fixes for workspace trust propagation, IME cursor restoration, and OOM prevention during session teardown.

---

## Releases

- **v0.18.3-nightly.20260618.bc3e0b405** — Chore release with one key fix:
  - `fix(core): Track supported sed edits in file history` by @doud — Improves file editing reliability by ensuring sed operations are properly recorded in session history.

[View release](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3-nightly.20260618.bc3e0b405)

---

## Hot Issues (Top 10)

1. **#4987 — PR #4779 silently reverted #4652 (IME cursor positioning)**
   - **Workflow:** Input/IME
   - **Impact:** A merged feature (IME physical cursor positioning) was reverted without explanation in an unrelated PR, breaking CJK text input.
   - **Reaction:** 5 comments; the reporter (@zzhenyao) called out the lack of conflict resolution discipline. [Issue](https://github.com/QwenLM/qwen-code/issues/4987)

2. **#5147 — OOM after `/quit` when managed auto-memory builds transcript**
   - **Workflow:** Session management
   - **Impact:** Short sessions can crash with `JavaScript heap out of memory` during `/quit`, even after previous fixes for history cloning. Root cause appears to be the auto-memory background task.
   - **Reaction:** 3 comments; community identified the problematic path is `buildTranscriptMessages()`. [Issue](https://github.com/QwenLM/qwen-code/issues/5147)

3. **#5365 — `FileTokenStorage` cannot create token file on first save**
   - **Workflow:** OAuth authentication
   - **Impact:** New users hitting MCP OAuth flows encounter silent failures because `setCredentials()` calls `loadTokens()` before the token file exists.
   - **Reaction:** 3 comments; tagged `status/ready-for-agent`. [Issue](https://github.com/QwenLM/qwen-code/issues/5365)

4. **#5370 — Grep drops matches from file paths containing colons**
   - **Workflow:** File search / tools
   - **Impact:** Files with colons in their path (e.g., `dir:name/file.txt`) are silently dropped from grep output because the parser splits on the first two colons.
   - **Reaction:** 2 comments; opened today. [Issue](https://github.com/QwenLM/qwen-code/issues/5370)

5. **#5368 — MCP and extension commands ignore untrusted workspace state**
   - **Workflow:** Security / workspace trust
   - **Impact:** `isWorkspaceTrusted()` returns a `TrustResult` object, but several CLI paths coerce it with `!!`, making all workspaces appear trusted.
   - **Reaction:** 2 comments; opened today, security-critical. [Issue](https://github.com/QwenLM/qwen-code/issues/5368)

6. **#5201 — Feature request: QQ Bot channel adapter**
   - **Workflow:** Messaging / integration
   - **Impact:** Community PR ready to add QQ Bot as a first-party channel adapter alongside Telegram/WeChat/DingTalk/Feishu.
   - **Reaction:** 3 comments; PR already prepared. [Issue](https://github.com/QwenLM/qwen-code/issues/5201)

7. **#5244 — Windows desktop: empty `(session)` entries in session list**
   - **Workflow:** UI / session management
   - **Impact:** After running skills/tools, the session list on Windows displays ghost entries named `(session)` with no readable content.
   - **Reaction:** 2 comments; screenshots show the problem clearly. [Issue](https://github.com/QwenLM/qwen-code/issues/5244)

8. **#5261 — Collapsible thinking block broken after v0.18.2 upgrade**
   - **Workflow:** TUI / rendering
   - **Impact:** Upgrade to v0.18.2 (which introduced collapsible thinking blocks) makes model thinking invisible; only "Thought for 1s" is shown with no expand shortcut.
   - **Reaction:** 4 comments; screen recording attached. [Issue](https://github.com/QwenLM/qwen-code/issues/5261)

9. **#5281 — TUI unresponsive when `systemd-inhibit` triggers authentication**
   - **Workflow:** CLI / Linux
   - **Impact:** SSH sessions into Linux desktops trigger PolKit authentication prompts that corrupt the TUI display and capture input focus.
   - **Reaction:** 2 comments; regression from PR #4434 (sleep prevention). [Issue](https://github.com/QwenLM/qwen-code/issues/5281)

10. **#5159 — Trackpad scroll in tmux triggers prompt history instead of viewport scrolling**
    - **Workflow:** CLI / macOS
    - **Impact:** Inside tmux on macOS, trackpad scroll cycles through previous prompts instead of scrolling conversation history, making navigation impossible.
    - **Reaction:** 3 comments; affects all tmux users on macOS. [Issue](https://github.com/QwenLM/qwen-code/issues/5159)

---

## Key PR Progress (Top 10)

1. **#5369 — fix(cli): preserve workspace trust state for extensions**
   - **Fix:** Passes actual `TrustResult.isTrusted` boolean instead of the object to `ExtensionManager`, closing the security gap in #5368.
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/5369)

2. **#5367 — fix(core): create token file on first save**
   - **Fix:** Allows the write path to start from an empty token map when no file exists, fixing #5365.
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/5367)

3. **#5362 — fix(core): honor ripgrep builtin setting at runtime**
   - **Fix:** Passes `tools.useBuiltinRipgrep` to the execution path and caches selection correctly.
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/5362)

4. **#5358 — fix(cli): validate restore checkpoints before mutation**
   - **Fix:** Validates checkpoint structure (especially `toolCall`) before rewinding files or replacing history.
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/5358)

5. **#5318 — fix(core): pass `--no-ask-password` to systemd-inhibit**
   - **Fix:** Prevents TUI corruption on Linux by suppressing PolKit auth prompts during sleep inhibition (addresses #5281).
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/5318)

6. **#5245 — fix: hide empty native sessions on Windows**
   - **Fix:** Two Windows fixes: expands tilde paths (e.g., `~\Documents`) on Windows, and hides empty ghost sessions.
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/5245)

7. **#5181 — fix(core): prevent OOM in auto-memory extraction during `/quit`**
   - **Fix:** Reduces memory pressure by trimming whitespace in transcript messages before string concatenation (fixes #5147).
   - **Status:** Closed (merged). [PR](https://github.com/QwenLM/qwen-code/pull/5181)

8. **#4850 — feat(extensions): interactive multi-tab `/extensions` manager**
   - **Feature:** Three-tab UI (Installed, Discover, Sources) for finding, installing, configuring, and removing extensions and MCP servers.
   - **Status:** Open. [PR](https://github.com/QwenLM/qwen-code/pull/4850)

9. **#4993 — fix(input): restore IME cursor positioning reverted in #4779**
   - **Fix:** Restores PR #4652 (IME physical cursor positioning) that was silently reverted; closes #4987.
   - **Status:** Closed (merged). [PR](https://github.com/QwenLM/qwen-code/pull/4993)

10. **#3975 — feat(cli): add `/directory remove` subcommand**
    - **Feature:** Adds the ability to remove directories from workspace context, complementing `/directory add`, with sandbox and scope checks.
    - **Status:** Open (since May 8). [PR](https://github.com/QwenLM/qwen-code/pull/3975)

---

## Feature Request Clusters

- **Input/Output Validation & Parsing** — Multiple requests for stricter parsing: cron fields accepting trailing junk (#5348), malformed timeout strings in ACP settings (#5313), and terminal sequence parsers accepting invalid OSC codes (#5304). These cluster around the theme of "silent acceptance of invalid input."
- **Authentication & Token Management** — Requests for daily token usage statistics (#4479) and proper handling of `expires_in=0` in OAuth responses (#5355) indicate growing community interest in metering and transparency.
- **Cross-Platform Compatibility** — Windows-specific issues persist: tilde path expansion, ghost sessions, and sandbox image name parsing for registry ports (#5324). macOS/tmux scroll behavior is another recurring concern.
- **MCP / Extension Ecosystem** — The QQ Bot channel adapter PR (#5201) and empty argument handling for MCP prompts (#5322) show active community investment in the MCP/extension layer.

---

## Developer Pain Points

1. **Edge Case Bugs in Parsers** — The single most dominant theme today: @tt-a1i alone filed ~20 bugs covering missing-validation scenarios (cron, terminal sequences, grep, GIF dimensions, OAuth headers, sandbox names, session metadata, and more). This suggests the codebase needs more systematic input validation.

2. **Silent Reverts and Merge Conflicts** — Issue #4987 (IME cursor positioning silently reverted) and the subsequent fix PR #4993 highlight friction in the contribution process, where merged features can be accidentally dropped during conflict resolution without notice.

3. **Cross-Environment TUI Degradation** — The `systemd-inhibit` TUI corruption (#5281), tmux scroll interference (#5159), and Windows ghost sessions (#5244) point to systemic challenges in maintaining TUI behavior across different terminal emulators and operating systems.

4. **Memory Management Under History Load** — The OOM on `/quit` (#5147) and file search cache reusing prefix results for glob patterns (#5363) show that large conversations and file-heavy workflows push against memory limits, especially on lower-end machines.

</details>