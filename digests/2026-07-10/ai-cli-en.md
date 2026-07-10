# AI CLI Tools Community Digest 2026-07-10

> Generated: 2026-07-10 00:29 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross‑Tool Community Digest Comparison — 2026‑07‑10

## 1. Daily Cross‑Tool Overview
Activity on July 10 was concentrated around reliability fixes and a surge in community conversation. Claude Code had no new release but 50 active issues, with strong engagement on compound‑command permissions and a small set of documentation‑oriented PRs. OpenAI Codex pushed a critical hotfix (0.144.1) to restore broken CLI functionality and maintained 50 new issues and 50 PRs, while Kimi Code shipped a patch (0.23.4) to surface prepaid balances and closed a high number of PRs. OpenCode delivered three patch releases (1.17.16→1.17.18) addressing pricing crashes, model handling, and desktop UX, alongside 50 issue updates and 50 PRs. Across the board, cost transparency, permission granularity, and terminal stability were the most visible shared concerns.

## 2. Activity Comparison

| Tool         | Issues Today          | PRs Today | Releases (last 24 h) |
|--------------|-----------------------|-----------|----------------------|
| Claude Code  | 50 active issues      | 4         | None                 |
| OpenAI Codex | 50 new issues         | 50        | 0.144.1 (hotfix), 0.144.0 (feature), pre‑releases |
| Kimi Code    | 6 reported issues     | 23        | 0.23.4 (patch)       |
| OpenCode     | 50 updated issues     | 50        | 1.17.16, 1.17.17, 1.17.18 (three patches) |

## 3. Shared Feature Directions

- **Cost visibility & usage control**
  Claude Code: disable automatic IDE context (#20944), model selection per routine (#72871), token‑usage discrepancies (#67506, #64961).
  Codex: rate‑limit cost spike erasing budgets (#28879), reasoning‑token clusters driving up consumption (#30364).
  Kimi Code: new fuel‑pack balance display in `/usage` (0.23.4).
  OpenCode: Copilot zero‑billing‑batch crash fix (1.17.18), `mercury‑alpha` null‑cost error (#36127).

- **Granular permission & safety models**
  Claude Code: parse compound Bash commands individually instead of as one block (#16561).
  Kimi Code: plan mode auto‑approval in YOLO (#1520), request for quick YOLO toggle (#1525).
  OpenCode: apply‑patch view shows only one file at a time (#36119), permission precedence cleanup (#36159).

- **Enterprise & MCP integration depth**
  Claude Code: private marketplace in Cowork (#28125), self‑hosted MCP gateway auth (#76209).
  Codex: MCP server memory leak (#30408), Azure `imagegen` dependency blocking code changes (#31775).
  Kimi Code: OAuth login for external subscriptions (#1523).
  OpenCode: LSP `processId: null` for containers (#36162), subagent model overrides for complex pipelines.

- **TUI/terminal stability & UX polish**
  Claude Code: daemon respawns every ~52 s (#68146), Windows context‑folder mount failure (#76187).
  Kimi Code: viewport jump during scroll (#1487).
  OpenCode: high CPU regression (#30086), copy‑to‑clipboard failures in Linux/tmux (#4283, #24713), old messages disappearing (#26861).

## 4. Differentiation Analysis

- **Claude Code** remains heavily focused on enterprise‑grade security, collaborative features (Cowork), and tight permission controls. Its community pushes for fine‑grained command authorisation and managed MCP setups more than any other tool today.
- **OpenAI Codex** is dominated by concerns around cloud‑side rate limits, model‑specific behaviour (gpt‑5.5 reasoning tokens), and Mac/Windows desktop performance. The rapid release cadence and heavy PR volume (including features like paginated thread history and async hooks) suggest a fast‑moving, professionally managed product.
- **Kimi Code** emphasises TUI convenience, bridging to other subscription providers (e.g., ChatGPT OAuth), and managing prepaid credits. Its PRs are often compact fixes (session resumption, image‑size limits, npm pinning) that close quickly, reflecting a pragmatic, user‑focused development pace.
- **OpenCode** positions itself as a multi‑provider, multi‑environment launcher with strong local‑model support (Ollama, custom providers). Today’s patches fix Copilot pricing, Meta model compatibility, and desktop UI—showcasing broad surface area. Tracing, compaction resilience, and subagent model overrides point toward observability and complex agentic workflows.

## 5. Community Activity Notes
OpenAI Codex and OpenCode were the most active projects by raw counts, each logging 50 issue updates and 50 PRs in the day. Claude Code had comparable issue activity (50) but only 4 PRs, indicating that user‑side engagement outpaces maintainer code activity. Kimi Code showed modest issue inflow (6) but converted 23 PRs, many of which were closed, indicating a high merge velocity. On the release front, Codex delivered a critical hotfix and feature release, OpenCode issued three successive patches, and Kimi Code shipped one patch. Maintainer responsiveness was visible in Codex (hotfix for broken CLI within a day) and Kimi Code (rapid closure of session‑resumption and tool‑call bugs). Claude Code’s development attention was limited to documentation and a stale‑sweep fix, while the community continued to amplify long‑standing requests.

## 6. Evidence‑Backed Observations

1. **Cost unpredictability is an acute cross‑tool stressor.** Every community saw cost‑related items today—from rate‑limit budget exhaustion (Codex #28879) and token consumption spikes (Claude Code #64961, #67506) to fuel‑pack display additions (Kimi Code 0.23.4) and pricing‑crash fixes (OpenCode 1.17.18, #36127). Users are actively monitoring and demanding transparency.

2. **Permission models are being pushed toward finer granularity.** Claude Code’s compound‑command permission parsing (#16561), Kimi Code’s YOLO‑mode toggle (#1525) and plan

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-07-10

## 1. Today’s Update Brief
No new releases were published in the past 24 hours. The repository saw sustained user reporting across 50 active issues and a small batch of 4 pull requests, all documentation or bug-fix oriented. The most engaged thread remains the longstanding compound‑command permission feature request (#16561), now at 46 comments and 173 upvotes.

---

## 2. Releases
No new releases were tagged in the last 24 hours.

---

## 3. Hot Issues (10 noteworthy items)

1. **#16561 — Feature: Parse compound Bash commands and match each component against permissions**
   *Area: tools/security • 46 comments • 👍 173*
   When Bash commands use `&&`, `|`, `;`, or `||`, the whole string is evaluated as one unit, forcing approval even if each sub‑command separately matches allowed patterns. This friction is especially painful for operators who chain safe commands. Community interest is very high.
   [View issue](https://github.com/anthropics/claude-code/issues/16561)

2. **#28125 — BUG: Cowork Can’t add private GitHub marketplace**
   *Platform: macOS • 33 comments • 👍 29*
   Users cannot register or use private GitHub Marketplace extensions within Cowork. The failure blocks team‑specific tooling, especially for enterprises that host internal plugins. Many reports confirm the bug with detailed logs.
   [View issue](https://github.com/anthropics/claude-code/issues/28125)

3. **#67506 — BUG: Token consumption with Fable 5 does not match its description**
   *Area: cost/model • 22 comments*
   Fable 5’s token usage is observed to be higher than documented, causing surprise bills on paid plans. Users are comparing metrics from the `/status` panel and provider billing, demanding clarity.
   [View issue](https://github.com/anthropics/claude-code/issues/67506)

4. **#20944 — Feature: Add Setting to Disable Automatic IDE Selection Context**
   *Area: IDE/cost • 19 comments • 👍 66*
   Claude Code automatically injects an IDE context blob that can be unwanted, polluting prompts, increasing costs, and slowing iteration. Requesters want a toggle to suppress it globally or per session. Strong upvote support indicates a widely‑felt need.
   [View issue](https://github.com/anthropics/claude-code/issues/20944)

5. **#68146 — BUG [Linux]: Transient daemon respawns/displaces every ~52s while `claude agents` is open**
   *Platform: Linux • 8 comments*
   In code‑server Docker environments, the daemon restarts every ~52 seconds, tearing down the claude.ai bridge and MCP connections each time. This makes the agent view unusable for long‑running collaborations.
   [View issue](https://github.com/anthropics/claude-code/issues/68146)

6. **#64961 — BUG: Opus 4.7/4.8 token usage regressed 2–3×, and Opus 4.8 disconnects frequently**
   *Area: cost/model • 6 comments • 👍 5*
   After a recent update, token consumption for Opus 4.7/4.8 doubled or tripled for the same prompts, and Opus 4.8 additionally suffers connection drops. Users are comparing against pre‑update logs and calling for an investigation.
   [View issue](https://github.com/anthropics/claude-code/issues/64961)

7. **#72871 — Feature: Scheduled tasks (routines): show and allow choosing the model per routine**
   *Area: routines • 3 comments*
   The `scheduled-tasks` MCP server does not expose or allow setting the model for a routine, making cost and quality control impossible for automated tasks. Request is for both visibility and setter.
   [View issue](https://github.com/anthropics/claude-code/issues/72871)

8. **#76187 — BUG: Cowork (Windows): project context folders never mount in new sessions; Add‑folder dialog cannot confirm**
   *Platform: Windows • 3 comments*
   Reproduced on two machines after the latest update. Context folders are missing in Cowork sessions, and the dialog to add them fails silently, breaking Windows‑based collaborative workflows.
   [View issue](https://github.com/anthropics/claude-code/issues/76187)

9. **#70124 — Stored /login credentials silently beat a valid `CLAUDE_CODE_OAUTH_TOKEN` (contradicts documented auth precedence)**
   *Platform: macOS • 2 comments*
   When both macOS Keychain login and an OAuth token environment variable are present, Claude Code uses the stored credentials, ignoring the env token. This violates the documented precedence and complicates automated CI/CD setups.
   [View issue](https://github.com/anthropics/claude-code/issues/70124)

10. **#76209 — BUG: 3P managedMcpServers ignores 401 WWW‑Authenticate discovery metadata — cannot connect to a spec‑compliant self‑hosted MCP gateway**
    *Area: MCP/enterprise • 2 comments*
    Third‑party managed MCP servers fail to connect to spec‑compliant gateways that return `401` with `WWW‑Authenticate` headers, blocking self‑hosted enterprise integrations. The issue was opened today and is marked invalid, but highlights a compliance gap.
    [View issue](https://github.com/anthropics/claude-code/issues/76209)

---

## 4. Key PR Progress (4 PRs updated today)

Only four pull requests were active in the past 24 hours; none were merged.

- **[#76023 — fix: detect GitHub Actions CI using directory test in load‑context example](https://github.com/anthropics/claude-code/pull/76023)**
  The SessionStart hook example incorrectly used `-f` on `.github/workflows` (a directory). This fix uses `-d` so that `HAS_CI` is correctly set for GitHub‑based projects.

- **[#75938 — fix(sweep): unstarve markStale via search API; snapshot listings before mutating](https://github.com/anthropics/claude-code/pull/75938)**
  The `markStale` function was effectively labelling nothing because a fixed pagination window was filled with permanent items that had to be skipped. This fix uses a search API to reach the truly stale issues and snapshots listings before mutation.

- **[#76028 — docs(plugin-dev): fix stale marketplace name in README install instructions](https://github.com/anthropics/claude-code/pull/76028)**
  Corrects an outdated marketplace name referenced in the plugin‑dev README (from `plugin-dev@claude-code-marketplace` to `plugin-dev@claude-code-plugins`), aligning it with other bundled plugin docs.

- **[#76029 — docs(plugin-dev): use flat format in .mcp.json example](https://github.com/anthropics/claude-code/pull/76029)**
  The advanced‑plugin example wrapped an MCP server config in an unnecessary `mcpServers` envelope that belongs to `plugin.json`, not `.mcp.json`. This fix uses the correct flat format, following the documentation in #63694.

---

## 5. Feature Request Clusters

- **Granular permission matching for compound commands**
  Multiple requests (e.g., #16561, #62602) highlight that the current all‑or‑nothing permission model for chained Bash commands forces unnecessary approvals. Users want each sub‑command to be checked against allowlists individually.

- **Cost/context control knobs**
  #20944 (disable automatic IDE context), #65476 (managed settings to control “Default” model label in picker), and #72871 (set model per routine) all point to a need for finer control over which context and model are used, both to manage token costs and to reduce prompt noise.

- **Enterprise & MCP integration gaps**
  #76209 (3P MCP gateway authentication), #28125 (private marketplace in Cowork), and the broader managed‑settings feature (#65476) reflect enterprise deployment friction around custom model names, self‑hosted MCP servers, and internal plugin distribution.

- **Screen management without context loss**
  #45878 (closed as duplicate) requests a visual clear that preserves conversation context, distinct from `/clear`. Interest persists even after closure.

---

## 6. Developer Pain Points

1. **Daemon instability on Linux and Windows**
   Issues #68146 (daemon respawns every 52s) and #76187 (Cowork folder mounts broken) erode trust in background services, causing dropped connections and unusable collaborative features.

2. **Token/cost unpredictability after model updates**
   Opus 4.7/4.8 token regression (#64961) and Fable 5 token mismatch (#67506) make it difficult for teams to forecast usage. Sudden spikes lead to billing surprises and reduced willingness to upgrade models.

3. **Authentication precedence confusion**
   #70124 reveals that stored credentials silently override an explicit `CLAUDE_CODE_OAUTH_TOKEN`, contradicting documentation and breaking headless/CI workflows where env‑based auth is expected.

4. **Compound‑command permission friction**
   The long‑standing #16561 (46 comments, 173 upvotes) remains a daily friction point for power users chaining safe commands; the constant approval prompts interrupt flow.

5. **Resource consumption on legacy hardware**
   #74805 reports kernel panics on Intel Macs with AMD dGPUs during heavy parallel usage, suggesting that the agent workload pushes system resources beyond safe limits in certain configurations.

6. **Slow responsiveness of stale‑issue management**
   The fix in PR #75938 indicates that internal tooling was starving the stale‑labelling process, which explains why many older issues remained untriaged for weeks.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-10

## Today’s Update Brief
The Codex repo saw intense activity with 50 new issues and 50 pull requests in the past day. A critical patch (0.144.1) landed to fix a broken CLI caused by missing binaries, while the community amplified long-standing threads about rate-limit cost spikes and reasoning-token behaviour. Several tracing, session-refresh, and sandbox robustness PRs moved forward, and a handful of alpha releases hint at more changes under development.

## Releases

**rust-v0.144.1** (hotfix)
- Fixed standalone installs failing when GitHub return compact or reordered release metadata (#31913).
- Ensured macOS package installs expose the `codex-code-mode-host` binary alongside `codex` (#31913).
- Kept code mode working when the companion host binary is unavailable by falling back gracefully.

**rust-v0.144.0** (feature release)
- Usage-limit reset credits now show their type and expiration, and let you choose which credit to redeem (#30488).
- Added a `writes` app-approval mode that allows declared read-only actions while prompting for writes (#30482).
- MCP tools can now request interactive authentication.

**Pre-releases**
- `rust-v0.145.0-alpha.2`, `rust-v0.145.0-alpha.1` — no detailed notes published.
- `rust-v0.144.0-alpha.4` — internal alpha for the 0.144.x line.

## Hot Issues
*Top 10 issues by engagement, impact, and community reaction.*

1. **#28879** [rate-limits, app] — `gpt-5.5` (Plus plan) rate-limit cost per token jumped ~10–20× since June 16, draining a 5h budget in 2–3 prompts.
   *Impact:* Pro users are locked out of heavy Codex sessions; high-signal issue with 204 comments and 354 👍.
   [View issue](https://github.com/openai/codex/issues/28879)

2. **#30364** [model-behavior, rate-limits] — `gpt-5.5` reasoning tokens cluster at multiples of 516 (516/1034/1552), suspected to degrade complex task performance.
   *Impact:* Reports of weaker reasoning results coincide with budget exhaustion; 176 comments, 279 👍.
   [View issue](https://github.com/openai/codex/issues/30364)

3. **#31831** [CLI, tool-calls] — 0.144.0 missing `codex-code-mode-host`; CLI fails with “I’m blocked … `~/.local/bin/codex-code-mode-host` is missing”.
   *Impact:* All CLI commands broken on macOS; 31 comments, 79 👍. Fixed in 0.144.1.
   [View issue](https://github.com/openai/codex/issues/31831)

4. **#31906** [CLI] — Homebrew cask install of 0.144.0 also missing `codex-code-mode-host`, resulting in “failed to spawn code-mode host” for every command.
   *Impact:* Enterprise users affected on macOS; 7 comments, 23 👍.
   [View issue](https://github.com/openai/codex/issues/31906)

5. **#20214** [app, performance] — Codex App frequently freezes/stutters on Windows 11 Pro despite 32 GB RAM and capable CPU.
   *Impact:* Persistent UI latency reported since April; 29 comments, 44 👍.
   [View issue](https://github.com/openai/codex/issues/20214)

6. **#28855** [app, performance] — Codex Desktop 26.611.8604.0 causes intermittent whole-system input lag on Windows, even with clean logs and plugins disabled.
   *Impact:* Mouse/keyboard lag makes the desktop app nearly unusable on affected machines; 10 comments, 12 👍.
   [View issue](https://github.com/openai/codex/issues/28855)

7. **#31664** [TUI, CLI] — Reasoning summary events render literal `<!-- -->` placeholders in the TUI and JSON output.
   *Impact:* Output is noisy and can confuse automated parsing; 3 comments, 13 👍.
   [View issue](https://github.com/openai/codex/issues/31664)

8. **#30408** [MCP, app-server, performance] — MCP server processes per thread never cleaned up, accumulating 9 GB+ RSS over time.
   *Impact:* System resource exhaustion for long-running Codex sessions; 5 comments, no thumbs-up but high severity.
   [View issue](https://github.com/openai/codex/issues/30408)

9. **#31532** [extension, rate-limits] — A Codex usage reset credit was consumed but the limit wasn’t reset; user left with no quota.
   *Impact:* Pro users waste their monthly resets; 6 comments, 3 👍.
   [View issue](https://github.com/openai/codex/issues/31532)

10. **#31775** [extension, Azure] — Codex requires an `imagegen` deployment even when only changing code, blocking Azure users.
    *Impact:* Pay-as-you-go users hit an artificial dependency; 11 comments, 3 👍.
    [View issue](https://github.com/openai/codex/issues/31775)

## Key PR Progress
*10 notable PRs opened or updated in the last 24 hours.*

1. **#31885** — Add a session-scoped runtime for async hooks (replaces #27771).
   Prepares for hooks that outlive the launching operation, with proper output eligibility.
   [View PR](https://github.com/openai/codex/pull/31885)

2. **#30131** — feat(state): add paginated thread history database.
   Introduces `thread_history` SQLite DB with schema for `thread_turns` and `thread_items`, storage foundation for paginated history.
   [View PR](https://github.com/openai/codex/pull/30131)

3. **#31945** — Support multiple external agent import sources.
   Routes external config detection through source-specific adapt

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest — 2026-07-10

## Today’s Update Brief
Activity on July 9 brought a patch release (`0.23.4`) surfacing prepaid fuel‑pack balances, plus 6 community‑reported issues and 23 pull requests merged or proposed. The focus spanned TUI convenience, agent‑core v2 parity, crash fixes for session resumes, and a new keyboard shortcut to toggle YOLO mode.

## Releases
- **@moonshot-ai/kimi-code@0.23.4**
  *Patch* — Displays Extra Usage (fuel pack / 加油包) balance in the `/usage` and `/status` commands, so users can see remaining prepaid credits.
  PR: [#1501](https://github.com/MoonshotAI/kimi-code/pull/1501)

## Hot Issues
1. **#1487 Terminal jumps to top when scrolling up during generation**
   *OP*: [@Olyno](https://github.com/Olyno) | *Status*: OPEN
   On Linux (Fedora), the TUI viewport resets while scrolling output, disrupting reading. One comment, no workaround yet.
   [Link](https://github.com/MoonshotAI/kimi-code/issues/1487)

2. **#1473 Ubuntu Kimi Code CLI not responding** (CLOSED)
   *OP*: [@xeta8](https://github.com/xeta8) | *Status*: CLOSED
   CLI was unresponsive on Ubuntu 22.04 with Allegretto subscription and kimi-k2.7-code thinking. Closed after resolution.

3. **#1524 feat: support custom keybindings via config** (OPEN)
   *OP*: [@yuanyuan06](https://github.com/yuanyuan06)
   Request to let users bind keys (e.g., for switching permission modes) beyond the few hard‑coded shortcuts like `Shift+Tab`.
   [Link](https://github.com/MoonshotAI/kimi-code/issues/1524)

4. **#1523 Support ChatGPT Plus/Pro OAuth as a login provider** (OPEN)
   *OP*: [@qipenglin](https://github.com/qipenglin)
   Users with active ChatGPT subscriptions want to use them inside Kimi Code without manually supplying an API key.
   [Link](https://github.com/MoonshotAI/kimi-code/issues/1523)

5. **#1520 Permission handling bug: plan mode auto‑approves in auto/yolo modes**
   *OP*: [@pedrorocha-net](https://github.com/pedrorocha-net) | *Status*: OPEN
   When using hybrid brainstorming/draft workflows, plan mode auto‑approves its own steps even when permissions should be manual, undermining trust.
   [Link](https://github.com/MoonshotAI/kimi-code/issues/1520)

6. **#1511 perf(tui): avoid redundant rebuilds in Agent and Read groups**
   *OP*: [@NarwhalChen](https://github.com/NarwhalChen) | *Status*: OPEN
   Code‑review finding: the TUI re‑creates parts of the interface unnecessarily, pointing to possible rendering lag.
   [Link](https://github.com/MoonshotAI/kimi-code/issues/1511)

## Key PR Progress
1. **#1441 Land agent-core-v2 engine and kap-server behind experimental flag** (OPEN)
   *Author*: [@sailist](https://github.com/sailist)
   Integrates the next‑generation agent core and tool‑server into the main codebase under a feature flag, paving the way for v2 rollout.

2. **#1525 Add Ctrl+Y shortcut to toggle YOLO mode** (OPEN)
   *Author*: [@yuanyuan06](https://github.com/yuanyuan06)
   Addresses the demand for quicker permission‑mode switching without typing slash commands.

3. **#1494 Add Kimi WebBridge install entry to /plugins panel** (CLOSED)
   *Author*: [@wbxl2000](https://github.com/wbxl2000)
   Surfaces the browser‑extension bridge inside the TUI, making it discoverable for users who want Kimi Code to control a real browser.

4. **#1526 Pin npm to 11.x in release workflow** (CLOSED)
   *Author*: [@wbxl2000](https://github.com/wbxl2000)
   Unblocked the `0.23.4` release after npm version mismatch caused publish failures.

5. **#1522 Stop sending prompts into a busy turn on the web UI** (CLOSED)
   *Author*: [@wbxl2000](https://github.com/wbxl2000)
   Fixed a race condition that threw “turn.agent_busy” errors when users queued prompts too quickly.

6. **#1521 Scope [image] config limits to the owning core** (CLOSED)
   *Author*: [@RealKai42](https://github.com/RealKai42)
   Prevented image size limits from leaking across multiple core instances (e.g., in the Node SDK’s multi‑core use).

7. **#1517 Resume sessions with missing workdir** (CLOSED)
   *Author*: [@chengluyu](https://github.com/chengluyu)
   Stopped an `ENOENT` crash when resuming a session whose temp directory had been removed.

8. **#1516 Keep prompt goals running until terminal** (CLOSED)
   *Author*: [@chengluyu](https://github.com/chengluyu)
   Fixed goal mode (`kimi -p "/goal ..."`) exiting after a single turn while the goal was still active.

9. **#1508 Keep image‑heavy sessions within provider request‑size limits** (CLOSED)
   *Author*: [@RealKai42](https://github.com/RealKai42)
   Added configurable max image edge pixels and read budgets to avoid HTTP 413 errors and session‑poisoning by unsupported image formats.

10. **#1518 Rewrite repeated tool call reminders to redirect instead of prohibit** (CLOSED)
    *Author*: [@RealKai42](https://github.com/RealKai42)
    Changed the wording when the agent repeats the same tool call, steering it toward alternative approaches instead of blocking.

## Feature Request Clusters
- **Customizable keybindings & shortcuts**
  Requests for user‑defined shortcuts (#1524) and direct toggles like Ctrl+Y for YOLO (#1525) highlight a desire for more control over the TUI without typing slash commands.
- **Third‑party subscription OAuth**
  Support for ChatGPT Plus/Pro OAuth (#1523) would let users bring their existing subscriptions into Kimi Code directly.
- **TUI rendering performance**
  Redundant rebuilds identified in #1511 suggest a developer appetite for smoother scrolling and lower CPU usage in the terminal interface.

## Developer Pain Points
- **Permission handling inconsistencies**
  Auto‑approval of plan steps in auto/yolo modes (#1520) erodes trust in safety modes, and the lack of quick toggles (addressed in #1525) creates friction.
- **TUI stability and UX glitches**
  Scrolling disruptions (#1487) and occasional CLI hangs (#1473, now closed) interrupt the workflow; the TUI still needs polish to feel reliable.
- **Session resumption robustness**
  Crashes caused by missing temp directories (#1517) and premature exit of goal mode (#1516) show that session lifecycle events remain fragile under edge conditions.
- **Repetitive tool‑call loops**
  The agent sometimes repeats the same tool call (#1518) requiring interrupt; the improved redirection message is a step toward less frustrating interactions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-10

## Today's Update Brief
Three patch releases landed this cycle (v1.17.16 → v1.17.18), delivering fixes for Copilot pricing crashes, Meta model handling, Grok reasoning variants, and several Desktop UX improvements. The issue queue saw 50 items updated in 24 hours, including multiple long‑standing clipboard and tool‑calling bugs, while 50 pull requests touched compaction, TUI anchoring, observability, and new documentation.

---

## Releases

**v1.17.18** *(Core)*
- Prevent crashes and bad pricing data when GitHub Copilot returns models with a zero billing batch size.
- Add a model‑specific system prompt for Meta Muse Spark.

**v1.17.17** *(Core + Desktop)*
- Core: improved Meta model handling for reasoning variants and provider requests.
- Desktop: fixed clipped descenders in model selector labels; added dismissible tabs intro popup and refreshed help entry point; updated sub‑agent task rows.

**v1.17.16** *(Core + Desktop)*
- Core: exposed reasoning effort variants for Grok models; improved xAI prompt cache routing and PDF support in Responses models.
- Desktop: added “Open containing folder” for projects on the home screen; added a composer add menu for files, commands, etc. (details truncated).

---

## Hot Issues
*Note: “ 👍 ” shows thumb‑ups.*

1. **[#4283] Copy To Clipboard is not working**
   https://github.com/anomalyco/opencode/issues/4283
   Selected text in terminal is not copied. 109 comments, 102 👍. Long‑standing, still open, affects many Linux/TUI users.

2. **[#20995] Gemma 4 (e4b) tool calling fails via Ollama**
   https://github.com/anomalyco/opencode/issues/20995
   Streaming `tool_calls` from Ollama‑served Gemma 4 are not recognized by OpenCode. 33 comments, 47 👍. Blocks local tool use for that model.

3. **[#30086] High CPU usage in newer versions**
   https://github.com/anomalyco/opencode/issues/30086
   CPU spikes dramatically (>3 sessions) after recent updates, causing system lag. 19 comments, 12 👍. Regression affecting power users.

4. **[#24713] Copy shows popup but clipboard unchanged on Linux terminal**
   https://github.com/anomalyco/opencode/issues/24713
   Copy feedback toast appears but clipboard remains empty; paste works elsewhere. 11 comments, 7 👍. Related to the broader clipboard gaps.

5. **[#33028] Subagents hang indefinitely after quick bash call**
   https://github.com/anomalyco/opencode/issues/33028
   Subagent stream never completes after a fast bash tool call; no timeout. 5 comments, 2 👍. Affects multi‑agent workflows.

6. **[#36119] Apply Patch/Edit permission view only shows first file**
   https://github.com/anomalyco/opencode/issues/36119
   When editing multiple files, users can only see the first; other file diffs are hidden. 5 comments, 0 👍. Security‑UX issue.

7. **[#36162] Support `processId: null` for language servers in containers**
   https://github.com/anomalyco/opencode/issues/36162
   LSPs in Docker fail because a PID is sent; request to allow null PID. 4 comments. Feature request for container‑native dev environments.

8. **[#36127] Error: Expected number, got null for mercury‑alpha cost** (closed)
   https://github.com/anomalyco/opencode/issues/36127
   Startup crash due to null cost input for new OpenAI models. 4 comments, 6 👍. Resolved quickly.

9. **[#36141] GPT‑5.6 models missing max reasoning effort variant**
   https://github.com/anomalyco/opencode/issues/36141
   `reasoning_effort` only offers up to `xhigh`, while the API supports `max`. 2 comments. Blocks advanced reasoning use.

10. **[#35432] Config `tool_call: false` does not disable tools**
    https://github.com/anomalyco/opencode/issues/35432
    The setting is ignored; tools are always sent, breaking models without tool support. 2 comments. Configuration mismatch.

---

## Key PR Progress

1. **[#36096] fix(tui): cycle model variants from default** *(closed)*
   https://github.com/anomalyco/opencode/pull/36096
   Fixed TUI variant cycling skipping variants when a model has a real `default` variant. Closes #36095.

2. **[#36163] fix(core): restore resilient compaction** *(closed)*
   https://github.com/anomalyco/opencode/pull/36163
   Manual compaction and overflow recovery now always attempt when session history exists; preserves errors and shows “Nothing to compact yet” when empty.

3. **[#36160] fix(app): preserve timeline bottom anchoring** *(open)*
   https://github.com/anomalyco/opencode/pull/36160
   Upgrades virtual list libraries to fix end‑anchored resize adjustments, preventing timeline jumps after new messages.

4. **[#35935] feat(observability): add v2 genai tracing** *(open)*
   https://github.com/anomalyco/opencode/pull/35935
   Adds OTLP‑based end‑to‑end tracing for V2 agent turns, tool calls, transport, compaction, and subagents; documents Dash0 setup.

5. **[#35925] fix(tui): forward environment to worker** *(closed)*
   https://github.com/anomalyco/opencode/pull/35925
   Restores `OPENCODE=1` and `AGENT=1` for commands launched by the TUI worker, fixing broken sub‑process environment.

6. **[#36159] fix(core): preserve agent permission precedence** *(open)*
   https://github.com/anomalyco/opencode/pull/36159
   Global permission rules now act as defaults before built‑in agent policy and per‑agent overrides, preventing `shell` re‑enable for Explore.

7. **[#30472] fix(tui): support copying over ssh with `set-clipboard on` in tmux** *(open)*
   https://github.com/anomalyco/opencode/pull/30472
   Enables copy in SSH/tmux sessions when tmux’s clipboard mode is `set-clipboard on`. Addresses multiple long‑standing copy reports.

8. **[#36158] feat(tui): hydrate pending session work** *(open)*
   https://github.com/anomalyco/opencode/pull/36158
   Pulls pending user inputs and compaction barriers into local message state so interrupted sessions resume gracefully.

9. **[#26861] fix(tui): Old messages disappearing during long sessions** *(open)*
   https://github.com/anomalyco/opencode/pull/26861
   Adds lazy‑scroll loading to fetch older messages when scrolling to the top; fixes message loss in long conversations.

10. **[#36129] refactor(form): model links as fields** *(open)*
    https://github.com/anomalyco/opencode/pull/36129
    Reworks model‑related URL requests as `link` fields in the form schema, allowing opening, copying, and manual completion in TUI.

---

## Feature Request Clusters

- **Clipboard robustness**
  Multiple open issues (#4283, #24713, and related PR #30472) highlight unreliable copy on Linux terminals, SSH, and tmux. Users want consistent clipboard integration across environments.

- **Ollama / local model tool‑calling compatibility**
  Issues #20995 and #35432 show that streaming tool calls from Ollama‑served models are often unrecognized, and the `tool_call: false` config toggle is ineffective, making local agents less capable.

- **Subagent model overrides**
  Several issues (#35126, #36132, #36147) report that subagent `model:` frontmatter is ignored, and there is a request for an environment variable (`OPENCODE_SUBAGENT_MODEL`) to control subagent model selection independently.

- **Container‑native language server support**
  #36162 requests support for `processId: null` to allow LSPs running inside Docker containers, aligning with dev‑container workflows.

- **Custom model auto‑discovery**
  #35855 asks for automatic fetching of model IDs from an OpenAI‑compatible `/v1/models` endpoint when adding custom providers.

---

## Developer Pain Points

- **Copy/paste reliability** remains a top complaint, especially in terminal‑based workflows (Linux, tmux, SSH). Users see a successful toast but no clipboard change.
- **Performance regression**: high CPU usage in recent versions (#30086) makes multi‑session usage impractical.
- **Provider/model compatibility gaps**: zero billing batch crashes (v1.17.18 fix), null cost errors (#36127), missing `max` reasoning effort (#36141), and TLS failures (#35365) break workflows when new models appear.
- **UI permission blind spots**: the Edit permission view only shows one file at a time (#36119), risking accidental acceptance of unseen changes.
- **Subagent instability**: indefinite hangs after simple commands (#33028) and ignored model overrides reduce trust in automated multi‑agent patterns.

</details>