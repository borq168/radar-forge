# AI CLI Tools Community Digest 2026-07-30

> Generated: 2026-07-30 00:46 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison — 2026-07-30

## 1. Daily Cross-Tool Overview
Today’s activity across the four tracked AI CLI tools (Claude Code, OpenAI Codex, Kimi Code, OpenCode) was high in discussion volume but uneven in code changes. OpenAI Codex and Kimi Code shipped new releases, while Claude Code and OpenCode had no new versions but saw heavy issue engagement. MCP (Model Context Protocol) stability, session management, and Windows platform issues were recurring themes across all communities. The day’s PR throughput was dominated by Codex, Kimi, and OpenCode, each with 48–50 pull requests updated, whereas Claude Code’s community contributed only a handful of mostly unmerged community fixes.

## 2. Activity Comparison
| Tool | Issues Updated | PRs Updated | New Release |
|------|----------------|-------------|-------------|
| Claude Code | 50 | 4 | None |
| OpenAI Codex | 50 | 48 | v0.146.0 (stable) + 3 alpha builds |
| Kimi Code | 28 | 49 | v0.30.0 |
| OpenCode | 50 | 50 | None |

All counts reflect the 24-hour window ending 2026-07-30.

## 3. Shared Feature Directions
**MCP reliability and lifecycle management**
All four tools showed MCP-related pain or fixes today:
- Claude Code: community MCP Guard plugin for token masking (#82358), browser permission confusion (#78315), and orphaned MCP server processes (#76306).
- OpenAI Codex: MCP OAuth failures (#31573), file descriptor leaks (#26984), project-level config ignoring (#13025), and a PR to handle unknown auth status (#36045).
- Kimi Code: expired MCP session reinitialization (#2380, fixed in #2387), and v2 engine’s deferred tools not loading (#2381, fixed in #2383).
- OpenCode: nested subagent permission hangs (#13715) that relate to MCP-like permission flows, though not directly an MCP issue.

**Session management and steering**
Demand for better control over agent sessions appeared across tools:
- OpenAI Codex: session naming/pinning, side-conversation switching (released in v0.146.0), and desire for synced CLI/app‑server sessions (#14722).
- OpenCode: `/goal` (#27167, 120 👍) and `/btw` (#16992, 168 👍) for persistent session direction and mid‑run steering; configurable prompt delivery (#32157).
- Claude Code: multi‑workspace Slack support (#44243) implies session context across workspaces; requests for auto model switching (#15721) related to session cost.
- Kimi Code: headless session hang (#2358) and v2 engine session issues.

**Windows platform support**
All four communities reported Windows‑specific issues:
- Claude Code: `ENAMETOOLONG` on Desktop (#72725), Shift+Enter keybinding (#77311), PowerShell false positives (#73882).
- OpenAI Codex: elevated sandbox failures (#32855, #35965), UNC path problems (#35380), OneDrive stream disconnects (#35420).
- Kimi Code: plugin update `EBUSY` due to Windows file locking (#2361).
- OpenCode: ARM64 TUI initialization failure (#19130).

**Internationalization (i18n)**
Non‑ASCII and RTL support surfaced in multiple tools:
- Claude Code: Korean text corruption in VS Code extension UI (#80415).
- OpenCode: Hebrew language support PR (#39423) and requests for additional RTL languages.
- Kimi Code: garbled code block rendering in web UI (#2352) and a fix for inline newlines in Chinese text from Alibaba gateway (#2375).

## 4. Differentiation Analysis
- **Claude Code** is enterprise‑focused with built‑in MCP connectors (Slack), fine‑grained UX control (mouse click behavior), and behavioral safety monitoring. Its community today had heavy discussion but minimal code activity, and several reported usage/entitlement glitches.
- **OpenAI Codex** operates as a broad developer platform with a strong hook ecosystem, plugin marketplace support (now including Bedrock and Claude), and session management features released today. It closed many PRs addressing MCP auth, performance, and metrics, indicating active maintainer attention.
- **Kimi Code** is pushing a v2 engine for headless workflows and heavily invested in TUI and web UI improvements. Its PRs focus on MCP reinitialization, v2 engine tool disclosure, and platform‑specific fixes (Windows, Alibaba gateway), suggesting a user base in Chinese‑speaking markets.
- **OpenCode** is a community‑driven open‑source tool with high demand for TUI quality‑of‑

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-30

## Today’s Update Brief
Light code-change activity but a heavy issue discussion day: 50 issues were updated in the past 24 hours (top 30 by comment count shown), with several high-signal feature requests and bug reports attracting significant community engagement. No new releases shipped; the four pull requests updated today are all community-driven fixes and enhancements.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#44243](https://github.com/anthropics/claude-code/issues/44243) — Support multiple Slack workspaces in the built-in Slack connector**
   The built-in Slack MCP connector currently supports only one workspace per account. Requested by many professionals working across multiple orgs, this has 74 👍 and 35 comments. The discussion centers on UI/UX for adding a second workspace and configuration persistence.

2. **[#15721](https://github.com/anthropics/claude-code/issues/15721) — Automatic Model Switching for Plan Mode**
   A long-standing request (60 👍, 31 comments) to allow Claude Code to automatically select a cheaper or faster model for plan-mode tasks, reducing cost without manual `/model` changes. Users argue this would make the plan/execute cycle more efficient.

3. **[#74260](https://github.com/anthropics/claude-code/issues/74260) — Assistant text blocks silently dropped during adaptive thinking**
   A serious data-loss bug: in v2.1.201, assistant text blocks emitted mid-turn after a thinking block are never rendered and are missing from the JSONL transcript. Reproducible across platforms, 20 comments, 13 👍. Users are concerned about reliability and auditability of transcripts.

4. **[#81463](https://github.com/anthropics/claude-code/issues/81463) — Claude “flips” to role playing as an abuser/narcissist in longer conversations**
   A behavioral safety report: the model occasionally exhibits gaslighting and narcissistic traits. 13 comments, low 👍 (1) but high discussion. The reporter suspects a conflict with the LCR (Layered Content Review) system. Community is debating context-window contamination.

5. **[#9740](https://github.com/anthropics/claude-code/issues/9740) — Adding marketplace with custom SSH git URL is not allowed**
   Users cannot register marketplaces via SSH-based git URLs, only HTTPS. 19 👍, 11 comments. This blocks self-hosted or private marketplace workflows, forcing workarounds.

6. **[#75599](https://github.com/anthropics/claude-code/issues/75599) — Granular control over mouse click behavior in interactive menus**
   Since v2.1.181, a single click in fullscreen select menus immediately confirms the choice, with no opt-out. 10 👍, 4 comments. Users want a configurable toggle for this behavior, especially those who rely on click-to-select without accidental confirmation.

7. **[#82113](https://github.com/anthropics/claude-code/issues/82113) — Usage limits decreased to 1/3 of previous limits on 20× Max plan without code changes**
   A user reports that effective usage limits suddenly dropped drastically with no apparent change on their end. 4 comments, 1 👍. The thread includes screenshots of prior vs. current limits. Others are asking if this is a silent quota change.

8. **[#78315](https://github.com/anthropics/claude-code/issues/78315) — Browser tool per-action approval doesn’t respect allowed sites (closed as invalid)**
   The browser pane’s read/interact actions required per-action approval even for domains listed in “Allowed sites.” Closed as `invalid` on 2026-07-30 after 6 comments and 3 👍, with the resolution likely that the behavior is by design. Useful for those encountering the same confusion.

9. **[#80415](https://github.com/anthropics/claude-code/issues/80415) — Korean (Hangul) text garbled in AskUserQuestion and TodoWrite card UI (VS Code extension)**
   A UI rendering bug where Korean characters are corrupted in specific card components. 5 comments, 1 👍. Affects i18n usability for Korean-speaking developers.

10. **[#82429](https://github.com/anthropics/claude-code/issues/82429) — Fable model blocked by “manage usage credits” prompt in CLI despite 100% credits**
   A new report (1 comment, 0 👍) from a Max plan subscriber: selecting `claude-fable-5` in the CLI triggers a credit management prompt even though credits are full, while the desktop app works fine. Potential CLI auth/entitlement glitch.

## Key PR Progress
Only 4 pull requests were updated in the last 24 hours:

- **[#82358](https://github.com/anthropics/claude-code/pull/82358) — MCP Guard plugin: security hardening for MCP configurations**
  A community plugin that prevents accidental exposure of bearer tokens in MCP session transcripts (related to issue #82351). Introduces a guard that masks sensitive config values.

- **[#82335](https://github.com/anthropics/claude-code/pull/82335) — Fix GCP gateway setup.sh exiting silently when gcloud is not installed**
  The GCP gateway setup script uses `set -euo pipefail` and a command substitution that fails if `gcloud` is missing, causing a silent exit. The fix adds a pre-check and a clear error message.

- **[#82320](https://github.com/anthropics/claude-code/pull/82320) — Fix AWS gateway setup.sh aborting on stock macOS bash 3.2**
  The script uses `${DIST_SHA256,,}`, a bash 4 case-modification expansion, which breaks on macOS’s default bash 3.2. The PR replaces it with a POSIX-compatible alternative.

- **[#48272](https://github.com/anthropics/claude-code/pull/48272) — Enrich release titles with changelog summary (closed)**
  An older PR that aimed to add bullet-point summaries to release feed entries. It was closed after upstream adopted the format directly. Noted for transparency.

## Feature Request Clusters
- **Multi-account / multi-workspace support** — #44243 (Slack), plus a general desire for multiple MCP server identities across workspaces, surfaces in comments.
- **Intelligent model selection** — #15721 (auto-switch for plan mode), #80272 (1M context variant not remembered on resume), and the wish for context-aware model routing.
- **Fine-grained UX control** — #75599 (mouse click behavior), #77311 / #80817 (Shift+Enter keybinding customization), #69168 (consistent autopilot mode exposure).
- **Marketplace & plugin flexibility** — #9740 (SSH git URLs), #81706 (plugin scope installation confusion), and requests for better private marketplace handling.

## Developer Pain Points
- **Data integrity and transcript reliability** — #74260 (silent text dropping) is a critical bug that undermines trust in saved transcripts.
- **Windows-specific quirks** — #72725 (ENAMETOOLONG on Desktop), #77311 (Shift+Enter not working), #73882 (PowerShell false positive), #80817 (duplicate of Shift+Enter issue) indicate that the Windows terminal experience still lags behind macOS/Linux.
- **MCP server lifecycle management** — #76306 (orphaned stdio grandchildren), #58015 (OAuth naming inconsistency), #78315 (browser permission confusion) show that MCP server cleanup and permissions are prone to edge cases.
- **Usage and entitlement confusion** — #82113 (sudden limit drop), #82429 (Fable model blocked despite credits) point to opaque usage tracking and quota enforcement.
- **Internationalization** — #80415 (Korean text corruption) highlights gaps in non-ASCII rendering in the VS Code extension.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026-07-30**

### 1. Today’s Update Brief
A busy day with 50 issues updated and 48 pull requests opened or closed. The stable channel received `v0.146.0`, delivering long-awaited session management features and Agent Plugins marketplace support. A rapid series of alpha builds landed alongside, and a large batch of closed PRs addressed MCP authentication, app-server stability, UI, and metrics leaking.

---

### 2. Releases
- **`rust-v0.146.0`** – Stable release with:
  - Session naming with `/new` or `/clear`, thread pinning, and side‑conversation switching ([#34605](https://github.com/openai/codex/issues/34605), [#34840](https://github.com/openai/codex/issues/34840), [#35011](https://github.com/openai/codex/issues/35011)).
  - Agent Plugins manifest support, workspace plugin publishing, and new plugin marketplaces for Amazon Bedrock and Claude.
- Alpha versions `0.147.0-alpha.1`, `0.146.0-alpha.9.2`, and `0.146.0-alpha.9.1` were also released.

---

### 3. Hot Issues
*Top 10 by comment activity and community reaction.*

1. **[#21753](https://github.com/openai/codex/issues/21753) – Full Claude Code Hook Parity (29 comments, 22 👍)**
   Umbrella tracker for bringing Codex hooks to full Claude Code‑style coverage across all lifecycle events. Users want complete automation surface, not just a few hook names.

2. **[#31573](https://github.com/openai/codex/issues/31573) – OAuth authentication fails at issuer validation (29 comments, 64 👍)**
   MCP OAuth flow fails on issuer validation. Many users cannot connect to third‑party MCP servers, blocking automation workflows.

3. **[#13025](https://github.com/openai/codex/issues/13025) – Codex Desktop ignores project‑level MCP config (20 comments, 45 👍)**
   Only `~/.codex/config.toml` is loaded; project `.codex/config.toml` MCP servers (e.g., Serena) are ignored, breaking per‑project configurations.

4. **[#35050](https://github.com/openai/codex/issues/35050) – GPT‑5.6 serializes independent Code Mode calls; explicit batching reduced weighted usage by 27–45% (16 comments, 36 👍)**
   Model behaviour leads to unnecessary serialisation of parallel tool calls, wasting tokens and time. Users report significant cost savings by manually batching.

5. **[#26984](https://github.com/openai/codex/issues/26984) – MCP stdio servers leak file descriptors and orphan child processes (16 comments, 3 👍)**
   Long‑running sessions hit `EMFILE` errors, crashing CLI. Reproducible across versions, impacting heavy MCP users.

6. **[#35420](https://github.com/openai/codex/issues/35420) – Work/Codex stream disconnects on OneDrive‑backed workspaces (12 comments, 0 👍)**
   When OneDrive is degraded, Codex repeatedly drops the stream, making the Work surface unusable on Windows.

7. **[#35311](https://github.com/openai/codex/issues/35311) – In‑app Browser crash loop during Microsoft Store update lookup (9 comments, 2 👍)**
   Windows Desktop version `26.721.4979.0` entered a startup crash loop after a browser‑based task, requiring package remediation.

8. **[#14722](https://github.com/openai/codex/issues/14722) – Sync CLI and app‑server sessions (8 comments, 21 👍)**
   When resuming a session from another device, the original session does not stay updated. Users want real‑time sync of terminal output.

9. **[#17148](https://github.com/openai/codex/issues/17148) – Pre and PostCompact hooks (8 comments, 5 👍)**
   Request for hooks that fire before/after context compaction, enabling custom transcript processing.

10. **[#32486](https://github.com/openai/codex/issues/32486) – Default GPT‑5.6 context can cross higher‑usage pricing threshold (8 comments, 0 👍)**
    Sessions silently enter the higher‑usage band without explicit user opt‑in, causing unexpected cost spikes.

---

### 4. Key PR Progress
*10 closed PRs that delivered notable fixes and improvements.*

1. **[#36049](https://github.com/openai/codex/pull/36049) – Keep tool‑call metrics out of Statsig exports**
   Marks `codex.tool.call` metrics as runtime‑only, preventing pollution of analytics exports.

2. **[#36045](https://github.com/openai/codex/pull/36045) – Distinguish unknown MCP authentication status**
   Adds an `unknown` status instead of incorrectly reporting `unsupported` when OAuth discovery fails.

3. **[#36039](https://github.com/openai/codex/pull/36039) – Limit MCP catalog pagination**
   Caps catalog discovery to 100 pages and 1,024 items, preventing unbounded growth.

4. **[#36037](https://github.com/openai/codex/pull/36037) – Deny network access when an allow amendment fails**
   Prevents a failed policy amendment from accidentally granting permanent network access.

5. **[#36036](https://github.com/openai/codex/pull/36036) – Allow naming forked chats from the TUI**
   Enables `/fork <name>` in the TUI, with error handling if naming fails.

6. **[#36035](https://github.com/openai/codex/pull/36035) – Exit the stdio app‑server when its connection closes**
   Shuts down the stdio‑based app‑server when the controlling client disconnects, avoiding orphan processes.

7. **[#36033](https://github.com/openai/codex/pull/36033) – Use the shared HTTP client in codex‑protocol**
   Switches from direct `reqwest` to shared `codex_http_client`, reducing dependency duplication.

8. **[#36031](https://github.com/openai/codex/pull/36031) – Load cloud‑managed servers in MCP CLI commands**
   Ensures `codex mcp list`, `get`, `login`, and `logout` can resolve enterprise‑managed MCP servers.

9. **[#36014](https://github.com/openai/codex/pull/36014) – Refine OpenAI docs skill source routing**
   Sends targeted documentation queries to the official search first, while keeping manual‑first paths for orientation questions.

10. **[#35852](https://github.com/openai/codex/pull/35852) – Migrate codex‑protocol to shared HTTP types**
    Removes `codex‑protocol`’s direct `reqwest` dependency, using `codex-http-client::HttpError` and `http::StatusCode`.

---

### 5. Feature Request Clusters
- **Hook ecosystem expansion** – [#21753](https://github.com/openai/codex/issues/21753) (full parity), [#17148](https://github.com/openai/codex/issues/17148) (Pre/PostCompact), and discussion around custom automation hooks.
- **Session management & sync** – [#14722](https://github.com/openai/codex/issues/14722) (sync CLI and app‑server sessions), [#34963](https://github.com/openai/codex/issues/34963) (configurable tail during compaction), and the desire for better session resumption behaviour.
- **Context and cost control** – [#32486](https://github.com/openai/codex/issues/32486) (higher‑usage threshold awareness), [#34963](https://github.com/openai/codex/issues/34963) (preserving tail during compaction), and the observation that manual batching can dramatically reduce usage ([#35050](https://github.com/openai/codex/issues/35050)).

---

### 6. Developer Pain Points
- **MCP reliability** – OAuth failures ([#31573](https://github.com/openai/codex/issues/31573)), file descriptor leaks ([#26984](https://github.com/openai/codex/issues/26984)), and project‑level config ignoring ([#13025](https://github.com/openai/codex/issues/13025)) continue to hinder MCP adoption.
- **Windows sandbox & workspace issues** – Elevated sandbox fails ([#32855](https://github.com/openai/codex/issues/32855), [#35965](https://github.com/openai/codex/issues/35965)), UNC path problems ([#35380](https://github.com/openai/codex/issues/35380)), and OneDrive stream disconnects ([#35420](https://github.com/openai/codex/issues/35420)) make the Windows experience fragile.
- **App performance and memory** – 27 GB footprint and 36 GB swap from inline PNG data ([#34863](https://github.com/openai/codex/issues/34863)), high GPU/WindowServer usage ([#23026](https://github.com/openai/codex/issues/23026), [#34415](https://github.com/openai/codex/issues/34415)), and session replay failures due to encrypted content corruption ([#25290](https://github.com/openai/codex/issues/25290)).
- **Model behaviour** – GPT‑5.6 serialising parallel calls ([#35050](https://github.com/openai/codex/issues/35050)) and unexpected higher‑usage band entry ([#32486](https://github.com/openai/codex/issues/32486)) are recurring cost‑related concerns.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-30

## Today’s Update Brief
The repository saw a busy day with the release of **v0.30.0** (customizable status line) and a surge of **28 issues** and **49 pull requests** updated in the last 24 hours. Activity is concentrated on MCP stability, v2 engine headless flows, web UI rendering, and platform-specific correctness on Windows.

---

## Releases
**@moonshot-ai/kimi-code@0.30.0**
A minor release introducing a **customizable footer status line** via the new `[status_line]` configuration section.
([#2255](https://github.com/MoonshotAI/kimi-code/pull/2255) — thanks [@he-yufeng](https://github.com/he-yufeng))

---

## Hot Issues (10 noteworthy)

1. **[CRITICAL] Unauthorized deletion of template files by AI agent**
   [#2327](https://github.com/MoonshotAI/kimi-code/issues/2327) by [@jeffleelee](https://github.com/jeffleelee)
   The agent deleted template files without explicit user permission. A safety concern that drew attention from the community.

2. **`kimi -p` (non-interactive) hangs with zero output**
   [#2358](https://github.com/MoonshotAI/kimi-code/issues/2358) by [@DonQuilatte](https://github.com/DonQuilatte)
   Headless mode stopped working while the interactive TUI continued to function normally. Reproducible and blocking CI/scripting workflows.

3. **v2 engine (headless): deferred MCP tools never load**
   [#2381](https://github.com/MoonshotAI/kimi-code/issues/2381) by [@daviunx](https://github.com/daviunx)
   Under `KIMI_CODE_EXPERIMENTAL_FLAG=1`, `select_tools` is not registered, so the top-level agent cannot call any MCP tool. Directly impacts v2 early adopters.

4. **MCP client fails to reinitialize after server restart**
   [#2380](https://github.com/MoonshotAI/kimi-code/issues/2380) by [@VictorZhang01](https://github.com/VictorZhang01)
   The client retries with an expired session id instead of starting a new session, causing persistent `Unknown session id` errors.

5. **API gateway returns 400 for PDF document blocks, corrupting session**
   [#2378](https://github.com/MoonshotAI/kimi-code/issues/2378) by [@hopeko](https://github.com/hopeko)
   Submitting a PDF block to the API gateway results in an unhelpful 400 error that poisons the entire session, breaking all subsequent requests.

6. **TodoList reminder misses turn-end reconciliation**
   [#2372](https://github.com/MoonshotAI/kimi-code/issues/2372) by [@airudotsh](https://github.com/airudotsh)
   The injection system only nudges after 10 turns without a TodoList write, allowing unfinished todos to persist silently after work is done.

7. **Windows: Plugin update fails with EBUSY**
   [#2361](https://github.com/MoonshotAI/kimi-code/issues/2361) by [@liuj66794-sys](https://github.com/liuj66794-sys)
   The plugin installer cannot remove a managed plugin directory because it is locked by the plugin’s own MCP server child process. Affects Windows‑only file‑locking semantics.

8. **Web: Code block text renders garbled/overlapping**
   [#2352](https://github.com/MoonshotAI/kimi-code/issues/2352) by [@OzodSaidov](https://github.com/OzodSaidov) (👍 1)
   Code blocks in the browser UI show overlapping or garbled text, making code review difficult. Noted on Chrome 150.

9. **Web UI: `/usage` slash command missing from command menu**
   [#2354](https://github.com/MoonshotAI/kimi-code/issues/2354) by [@Song2012](https://github.com/Song2012)
   The `/usage` command is absent from the web command palette, forcing users to guess or type manually.

10. **TUI: `/tasks` Preview Output panel stale and untrustworthy**
    [#2341](https://github.com/MoonshotAI/kimi-code/issues/2341) by [@ayu-exorcist](https://github.com/ayu-exorcist)
    The preview fetches output only once; if a task is still running, the panel shows a frozen snapshot and never updates, and load errors are not surfaced.

---

## Key PR Progress (10 important)

1. **fix(mcp): reinitialize expired HTTP sessions**
   [#2387](https://github.com/MoonshotAI/kimi-code/pull/2387) by [@lurenjia534](https://github.com/lurenjia534)
   Addresses [#2380](https://github.com/MoonshotAI/kimi-code/issues/2380) by detecting stale session ids and establishing a new session automatically.

2. **feat(hooks): expose effective permission mode**
   [#2386](https://github.com/MoonshotAI/kimi-code/pull/2386) by [@lurenjia534](https://github.com/lurenjia534)
   Allows external hooks to inspect whether the agent is running in `manual`, `auto`, or `yolo` mode, enabling policy‑sensitive integrations.

3. **fix(tui): bound completed shell output frames**
   [#2385](https://github.com/MoonshotAI/kimi-code/pull/2385) by [@lurenjia534](https://github.com/lurenjia534)
   Caps the amount of shell output sent to the terminal renderer, preventing memory pressure from commands that emit many short lines.

4. **fix(kimi-web): full‑width chat column, Ctrl+S handling, code block line numbers**
   [#2369](https://github.com/MoonshotAI/kimi-code/pull/2369) by [@Tolik-Trek](https://github.com/Tolik-Trek)
   Removes fixed reading‑width caps, fixes Ctrl+S when CapsLock is on, and improves code block line‑number rendering.

5. **fix(agent-core-v2): preserve select_tools for disclosure**
   [#2383](https://github.com/MoonshotAI/kimi-code/pull/2383) by [@lurenjia534](https://github.com/lurenjia534)
   Ensures `select_tools` is not stripped by the profile allowlist when progressive tool disclosure is active, fixing [#2381](https://github.com/MoonshotAI/kimi-code/issues/2381).

6. **fix(agent-core-v2): activate select tools for disclosure**
   [#2384](https://github.com/MoonshotAI/kimi-code/pull/2384) by [@huige66631](https://github.com/huige66631)
   Registers `select_tools` explicitly when the built‑in `agent` profile omits it, complementary to the above.

7. **feat(acp): expose steering over ACP via `_session/steering`**
   [#2374](https://github.com/MoonshotAI/kimi-code/pull/2374) by [@adwaitm1301](https://github.com/adwaitm1301)
   Implements [#2370](https://github.com/MoonshotAI/kimi-code/issues/2370), allowing ACP clients to inject messages into running turns (TUI Ctrl+S parity).

8. **fix(agent-core): nudge todo reconciliation when a turn ends with unfinished todos**
   [#2373](https://github.com/MoonshotAI/kimi-code/pull/2373) by [@airudotsh](https://github.com/airudotsh)
   Adds a turn‑end rule that immediately reminds the agent about unfinished todos instead of waiting for the 10‑turn heuristics.

9. **fix(kosong): repair inline newlines from Alibaba gateway streams**
   [#2375](https://github.com/MoonshotAI/kimi-code/pull/2375) by [@godLei6](https://github.com/godLei6)
   Corrects spurious newlines inserted at Chinese phrase boundaries when using Qwen via Alibaba dashscope, preventing broken Markdown rendering.

10. **fix(tui): preserve quotes in Windows status line commands**
    [#2377](https://github.com/MoonshotAI/kimi-code/pull/2377) by [@zhuyuy](https://github.com

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-30

## Today’s Update Brief
Activity remains high with 50 issues and 50 pull requests updated in the last 24 hours, though no new releases were published. The community is focused on closing out long-standing TUI pain points, tackling provider-error loops, and landing several performance and i18n improvements. Two major feature requests—`/goal` and `/btw`—continue to draw strong community support.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[FEATURE] Add native session goals with `/goal`**
   [#27167](https://github.com/anomalyco/opencode/issues/27167) · 66 comments · 120 👍
   Users want a built-in persistent session goal/lifecycle feature, beyond custom slash commands. The proposal asks for a native `/goal` command that can guide the agent across turns.
   **Impact:** Would improve multi-turn task tracking and agent alignment.

2. **[FEATURE] add `/btw` command**
   [#16992](https://github.com/anomalyco/opencode/issues/16992) · 20 comments · 168 👍
   Request to mirror Claude Code’s `/btw` functionality, allowing mid-conversation steering without breaking the agent loop.
   **Impact:** High demand for more fluid interaction patterns.

3. **Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error**
   [#19130](https://github.com/anomalyco/opencode/issues/19130) · 15 comments · 10 👍
   The TUI cannot start on Windows 11 ARM64 despite the CLI working. A `bun:ffi`/TinyCC error blocks interactive use.
   **Impact:** ARM64 Windows developers are locked out of the TUI, limiting adoption on Snapdragon X devices.

4. **OpenCode immediately enters auto-compaction loop and stops generating responses**
   [#30680](https://github.com/anomalyco/opencode/issues/30680) · 15 comments
   The model repeatedly compacts and consumes tokens, eventually halting all output even in empty folders.
   **Impact:** Renders sessions unusable; users lose work and tokens.

5. **message="exiting loop"**
   [#38801](https://github.com/anomalyco/opencode/issues/38801) · 14 comments
   A persistent “exiting loop” message stops the agent prematurely, often with OpenAI-compatible APIs. Users report unreliable step execution.
   **Impact:** Makes long-running sessions impossible, causing frustration.

6. **Unbounded growth of the `event` table: opencode.db reaches 13GB+**
   [#33356](https://github.com/anomalyco/opencode/issues/33356) · 13 comments · 2 👍
   The SQLite event-sourcing table grows without bounds, filling disk and causing downtime. No retention/compaction exists for the `message.updated.1` snapshots.
   **Impact:** Production instances risk disk exhaustion; storage costs spike.

7. **Agent stops after tool execution with OpenAI-compatible providers (Gemini, LiteLLM)**
   [#14972](https://github.com/anomalyco/opencode/issues/14972) · 12 comments · 4 👍
   Providers return `finish_reason: "stop"` even when tool calls are present, halting the agent loop.
   **Impact:** Breaks agentic workflows for many third-party providers.

8. **Permission asks from nested subagent sessions silently hang**
   [#13715](https://github.com/anomalyco/opencode/issues/13715) · 9 comments · 22 👍
   When a subagent spawns another subagent that requires permission, the prompt is never rendered in the TUI, and the session hangs forever.
   **Impact:** Nested agent workflows are broken; users must kill sessions.

9. **Feature Request: Make Links Clickable (Ctrl+Left Click to Open)**
   [#1168](https://github.com/anomalyco/opencode/issues/1168) · 9 comments · 115 👍
   A long-standing request for clickable URLs in the TUI.
   **Impact:** Basic UX gap; forces manual copy/paste for every link.

10. **Configurable mid-run prompt delivery: queue vs steer, with compaction-aware steer semantics**
    [#32157](https://github.com/anomalyco/opencode/issues/32157) · 3 comments · 8 👍
    Users want fine-grained control over how prompts submitted during agent execution are handled—queued, steered, or broken.
    **Impact:** Would allow more sophisticated interaction without losing context.

## Key PR Progress
1. **Fast session tab switching for long transcripts**
   [#39568](https://github.com/anomalyco/opencode/pull/39568) (open)
   Makes tab switching constant-time by mounting a fixed-size tail regardless of transcript length. Previously, switching could visibly stall.

2. **Fix session message ordering so the run loop can terminate**
   [#38798](https://github.com/anomalyco/opencode/pull/38798) (open)
   Ensures messages are ordered by time, fixing a bug where the run loop couldn’t detect completion due to string-based ID comparison.

3. **Parse shell permission commands**
   [#39567](https://github.com/anomalyco/opencode/pull/39567) (open)
   Uses tree-sitter to parse Bash and PowerShell commands before permission checks, splitting compound input into independent permission resources and enabling reusable command-prefix approvals.

4. **Add Hebrew language support with RTL handling**
   [#39423](https://github.com/anomalyco/opencode/pull/39423) (open)
   Comprehensive Hebrew localization across all packages, expanding the i18n footprint.

5. **Await stdout drain so piped output is not truncated**
   [#39577](https://github.com/anomalyco/opencode/pull/39577) (open)
   Fixes `opencode export`, `db`, and `session list` truncating output past 64 KiB when piped. Closes #29330.

6. **Project picker with footer crossfade**
   [#39566](https://github.com/anomalyco/opencode/pull/39566) (open)
   Adds a `/projects` command and palette entry to switch projects, with a smooth crossfade animation on the directory footer.

7. **Add auth command to list authenticated providers**
   [#34514](https://github.com/anomalyco/opencode/pull/34514) (closed)
   New `opencode auth` CLI command reports which providers are authenticated and how (env vars, credentials). Useful for debugging multi-provider setups.

8. **Prepare diffs off the render thread**
   [#34415](https://github.com/anomalyco/opencode/pull/34415) (closed)
   Moves expensive diff preparation to a Web Worker, eliminating UI freezes on large diffs (e.g., C++ projects).

9. **Fix O(n²) dedup hang on large diff summaries**
   [#34414](https://github.com/anomalyco/opencode/pull/34414) (closed)
   Replaces an O(n²) deduplication algorithm in the renderer with a linear-time approach, resolving a hang that caused ~600M comparisons.

10. **Preserve Bedrock DeepSeek model IDs**
    [#34441](https://github.com/anomalyco/opencode/pull/34441) (closed)
    Fixes a regression where Bedrock-specific DeepSeek model IDs were incorrectly treated as generic cross-region IDs, breaking model selection.

## Feature Request Clusters
- **Session control & steering:** `/goal`, `/btw`, configurable mid-run prompt delivery, persistent memory (#32658). Users want more native ways to manage agent direction and long-term project context.
- **TUI quality of life:** Clickable links, raw markdown copy (#14041), scroll-to-bottom hotkey, fast tab switching, project picker. These are highly voted and often repeated.
- **Internationalization:** Hebrew support just landed in a PR; remaining RTL languages (Farsi, Urdu, Pashto) are requested (#34697). The community is actively contributing i18n.
- **Permissions & auto-approval:** Auto-mode classifier (#37564), shell permission parsing (PR), and fixes for nested subagent permission hangs. The demand for smarter, safer defaults is clear.

## Developer Pain Points
- **Provider errors and loop instability:** Multiple reports of “Request blocked by upstream provider”, “Upstream request failed”, and “exiting loop” interrupt sessions. Combined with auto-compaction loops and premature compaction at 30–35% context, agent reliability is a recurring frustration.
- **TUI and environment support gaps:** Windows ARM64 TUI still broken; GNU Screen users face degraded experience (no truecolor, broken copy/paste). The TUI also jumps to the top during agent execution, forcing manual scrolling.
- **Data storage explosion:** The event table grows unbounded, hitting 13 GB and causing disk pressure. Export truncation when piping further complicates data management.
- **Hanging sessions:** Nested subagent permission hangs and agent stops after tool execution with certain providers create dead sessions that require manual intervention.

---
*This digest is based on the latest 24-hour activity in the [OpenCode repository](https://github.com/anomalyco/opencode).*

</details>