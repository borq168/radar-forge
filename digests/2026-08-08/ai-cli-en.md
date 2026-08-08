# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 00:58 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-08

## 1. Daily Cross-Tool Overview

Three of four tracked tools shipped releases today: Claude Code v2.1.224 (self-hosted runners, archive plugin source), OpenCode v1.18.15 (message chronology fixes), and OpenAI Codex rust-v0.147.0 (portable agent plugins, conversation organization) plus three alpha builds. Kimi Code had no release but processed 21 issues and 25 pull requests. The most discussed cross-cutting topics are Windows compatibility failures (all four tools), model reliability concerns (Claude Code Fable 5, OpenCode DeepSeek V4 identity mismatch), and the growing demand for cross-agent configuration standards (AGENTS.md at 4,526 👍 on Claude Code).

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Release Notes |
|------|---------------------|-------------------|----------------|---------------|
| **Claude Code** | 50 | 3 | 1 (v2.1.224) | Self-hosted runner environments, archive plugin source |
| **OpenAI Codex** | ~10 hot issues highlighted | ~10 key PRs highlighted | 4 (1 stable + 3 alphas) | Agent plugins, conversation organization (rust-v0.147.0) |
| **Kimi Code** | 21 | 25 | 0 | — |
| **OpenCode** | 50 | 50 | 1 (v1.18.15) | Message chronology/truncation fixes |

## 3. Shared Feature Directions

**Cross-agent configuration standards**: Claude Code's #6235 (AGENTS.md support, 4,526 👍) is the most-upvoted open request across any tool today. No equivalent issue exists on Codex, Kimi Code, or OpenCode, but the underlying need—single configuration file working across multiple AI coding agents—was raised as a general ecosystem concern.

**Plugin/tool customization**: Claude Code (#14920, per-skill disable, 83 👍) and Kimi Code (#2140, per-call model/thinking parameters for subagents) both request granular control over which tools or models are active in specific contexts. OpenCode (#38853, subfolder organization for skills) reflects similar organizational pressure.

**Windows platform compatibility**: All four tools have active Windows-specific bugs. Claude Code: ECONNRESET streaming (#84072), MSIX crashes (#83028), livelock on KVM guests (#77208). Codex: sandbox failures (#10090, #37043), Bubblewrap on Linux (#29908). Kimi Code: PowerShell detection (#2715), Git Bash compatibility (#2717), WSL clipboard (#2735), Zed ACP documentation (#2732). OpenCode: paste in PowerShell TUI (#6560, fixed).

**Subagent/session safety**: Claude Code (#13354, session limit continuation, 191 👍) and Kimi Code (#2725, infinite subagent recursion) both address the risk of unbounded agent execution. No equivalent on Codex or OpenCode today.

**Persistent TUI elements**: Kimi Code (#2712, sticky input box) and OpenCode (#41106, queue messages during generation) both request UI improvements that prevent loss of user input or context during agent activity.

## 4. Differentiation Analysis

**Claude Code** is the most enterprise-oriented today: self-hosted runner environments (Team/Enterprise only), the AGENTS.md conversation (cross-tool standardization), and security-focused PRs (YAML injection fix #84711, hookify scope enforcement #84747). Its community is vocal about model reliability (Fable 5 issues #81853, #79247) and session management failures.

**OpenAI Codex** is the most plugin/ecosystem-focused: portable agent plugin catalogs, MCP event discovery (#37494), tool namespace inventory (#37492), and code-mode host gRPC protocol (#37510). Its community struggles with MCP provider incompatibility for non-OpenAI models (#26234) and Windows sandbox fragility.

**Kimi Code** is the most Windows-focused in today's data: five of ten hot issues and three of ten key PRs are Windows-specific (Git Bash, PowerShell, WSL, Computer Use installer). It also has the strongest subagent orchestration feature in development (tower command #2633, AgentSwarm). The community is pushing for TUI parity with Claude Code (fullscreen mode, sticky input, terminal title status).

**OpenCode** is the most billing/provider-focused: the top issue is a 401 upstream provider error (#38257, 45 comments), followed by billing discrepancies (#41146, #41166) and model identity mismatches (DeepSeek V4 returns V3, #40409). Its feature requests are the most operational (crypto payments, npm install skip, workspace unblock endpoint).

## 5. Community Activity Notes

**Most active by issue count**: Claude Code and OpenCode both updated 50 issues in 24 hours, suggesting high community engagement and unresolved bugs.

**Most active by PR count**: OpenCode (50 PRs) and Kimi Code (25 PRs) show strong maintainer investment. Claude Code had only 3 PRs updated, reflecting a more centralized release model.

**Most active by release**: Claude Code (v2.1.224) and Codex (rust-v0.147.0 + 3 alphas) shipped the most notable releases. Kimi Code had no release.

**Maintainer response quality**: Codex merged several infrastructure PRs (sandbox delegation, MCP event routing, Nagle's algorithm disable). Claude Code merged security fixes. Kimi Code merged Windows compatibility fixes quickly. OpenCode fixed a DeepSeek model identity issue (#40409) and closed a TUI paste bug (#6560).

## 6. Evidence-Backed Observations

**1. Windows remains the weakest platform across all tools.** Every tool has active, unresolved Windows-specific bugs. Claude Code: ECONNRESET (#84072), MSIX crashes (#83028), KVM guest livelock (#77208). Codex: sandbox CreateProcessAsUserW failure (#10090), Computer Use EnumWindows failure (#37043). Kimi Code: PowerShell detection (#2715), Git Bash compatibility (#2718), WSL clipboard (#2722). OpenCode: paste in TUI fixed (#6560), but no other Windows-specific issues in today's hot list. The observation is that no tool has achieved parity with macOS/Linux on Windows.

**2. Model reliability after release is a recurring concern.** Claude Code's Fable 5 returns text hidden in mixed responses (#81853, critical) and claims completion of 12-step pipelines while only completing 1 of 46 steps (#79247, detailed post-mortem). OpenCode's DeepSeek V4 Flash returns V3.2 with old knowledge cutoff (#40409, closed with fix). These are separate models but the same pattern: users pay for a new model that doesn't deliver expected behavior.

**3. Cross-agent interoperability is gaining traction as a community demand.** The AGENTS.md request (#6235, 4,526 👍) on Claude Code is the single most-supported issue across all tools today. It explicitly references Cursor, Codex, Amp, and other tools. No equivalent issue exists on Codex or Kimi Code, but the number of comments (347) and upvotes suggests this is an ecosystem-level request, not tool-specific.

**4. Plugin and skill ecosystems are maturing but creating fragmentation.** All four tools have plugin systems, but each uses different configuration formats, permission models, and installation mechanisms. Claude Code users want per-skill disable (#14920) and archive plugin sources (shipped today). Codex introduced portable agent plugins and catalog search. Kimi Code users want private repo support (#2738) and auto-updates (#2737). OpenCode users want subfolder organization (#38853). No cross-tool plugin standard exists.

**5. Billing and access issues erode trust in paid tiers.** OpenCode's 401 upstream provider error (#38257, 45 comments) and billing discrepancies (#41146, $7.50 charged despite $30 limit) are the most active cross-tool complaint today. Claude Code's Fable 5 post-mortem (#79247) also raises value-for-money concerns about paying for a model that fails at multi-step tasks. This is a trust-reliability issue, not a feature gap.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-08

## Today's Update Brief

A new release (v2.1.224) shipped today introducing self-hosted runner environments for Team/Enterprise plans and an `archive` plugin source for HTTPS-based zip installs. The issue tracker remains highly active at 50 updated items, with the AGENTS.md standardization request (#6235) continuing to dominate community discussion at 4,526 👍 and 347 comments, while a cluster of bug reports around Fable 5 model behavior, session management, and platform-specific stability issues emerged.

---

## Releases

**v2.1.224** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.224)

- **Self-hosted environments**: `claude self-hosted-runner` lets teams run Claude Code web, mobile, and desktop sessions on their own machines or containers (Team and Enterprise plans only).
- **`archive` plugin source**: Plugins can now be installed from a zip file over HTTPS without requiring a git repository.

---

## Hot Issues

1. **[#6235 — Feature Request: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)**
   *Enhancement · Area: Core, Memory*
   The community's most-upvoted open request (4,526 👍, 347 comments). Users want Claude Code to adopt the emerging AGENTS.md standard (https://agents.md/) for cross-agent codebase understanding, arguing that CLAUDE.md is too Claude-specific and doesn't interoperate with Cursor, Codex, Amp, or other tools. **Impact**: Developers working in multi-agent ecosystems face fragmented configuration files.

2. **[#13354 — Feature: Continue when session limit reached](https://github.com/anthropics/claude-code/issues/13354)**
   *Enhancement · Area: TUI*
   191 👍, 73 comments. Users want the ability to continue a session transparently when hitting Claude's token/context limit, rather than losing work mid-task. **Impact**: Long-running development sessions frequently hit hard limits, forcing context loss and manual restarts.

3. **[#14920 — Feature Request: Disable individual plugin skills](https://github.com/anthropics/claude-code/issues/14920)**
   *Enhancement · Platform: macOS, Area: Core*
   83 👍. Users want granular control over which plugin skills are active (e.g., disable `commit-commands:commit-push-pr` while keeping `:commit`). **Impact**: Plugin bloat forces unwanted tool suggestions; no per-skill toggle exists.

4. **[#81853 — Bug: Fable 5 text+tool-call responses hide text](https://github.com/anthropics/claude-code/issues/81853)**
   *Bug · Model: Fable 5*
   When a Fable 5 response contains both explanatory text and a tool call, only the tool call renders in the terminal. Text is visible in detailed transcript (Ctrl+O) but invisible in normal use. Works correctly with Opus 4.8. **Impact**: Critical for any workflow where the model explains its reasoning before acting.

5. **[#72495 — Bug: Prompt suggestions silently suppressed on rate-limit warning](https://github.com/anthropics/claude-code/issues/72495)**
   *Bug · Platform: Linux, Area: TUI*
   A strict-equality gate in the binary causes prompt suggestions to disappear entirely when the client-derived rate-limit status is `allowed_warning`. The user located the gate in the shipped binary and confirmed the suppression live. **Impact**: Confusing UX — users think suggestions are broken, but they silently resume when the warning clears.

6. **[#84945 — Bug: Local peer-messaging inbox socket fails to bind](https://github.com/anthropics/claude-code/issues/84945)**
   *Bug · Platform: macOS, Area: Cross-session messaging*
   Two identical CLI sessions on the same Mac fail to establish `/tmp/cc-socks` peer connections for `SendMessage`/`ListAgents`. **Impact**: Multi-agent workflows and cross-session communication broken on macOS.

7. **[#84072 — Bug: ECONNRESET on Windows during API stream](https://github.com/anthropics/claude-code/issues/84072)**
   *Bug · Platform: Windows*
   First chunk arrives, then stream resets with ECONNRESET. Reproduced in VS Code extension, terminal, and claude.ai. **Impact**: Windows users experience persistent streaming failures across all interfaces.

8. **[#77208 — Bug: Claude Code ≥ 2.1.205 livelocks at 100% CPU on KVM guests](https://github.com/anthropics/claude-code/issues/77208)**
   *Bug · Platform: Linux, Area: Packaging, Desktop*
   Even `--version` hangs at 100% CPU on KVM guests with generic CPU model (kvm64). Breaks the Code tab in Linux desktop beta entirely. **Impact**: Linux users in virtualized environments (CI runners, VPS, VMs) cannot use recent versions.

9. **[#82179 — Bug: Bash-tool grep shim OOM on 20 KB file](https://github.com/anthropics/claude-code/issues/82179)**
   *Bug · Area: Bash tool*
   The built-in `grep` replacement (ugrep emulation) causes catastrophic backtracking on patterns with `-o` and bounded quantifiers. 6.6 GB RSS / OOM kill on a trivial 20 KB input. **Impact**: Any `grep` call with certain patterns silently kills the session.

10. **[#79247 — Post-mortem: Fable model productivity failure](https://github.com/anthropics/claude-code/issues/79247)**
    *Enhancement · Area: Cost, Model, Agents*
    A detailed user report: 19 days into Fable's return, a 12-step pipeline is claimed "built, tested, verified" but only 1 of 46 dates reaches step 2. The model repeatedly asserts completion while nothing actually works. **Impact**: Raises serious concerns about Fable 5 reliability for multi-step autonomous workflows.

---

## Key PR Progress

*Only 3 PRs were updated in the last 24 hours.*

1. **[#84854 — Docs: fix stale hooks documentation link](https://github.com/anthropics/claude-code/pull/84854)**
   Fixes an outdated URL in `bash_command_validator_example.py` that pointed to `docs.anthropic.com/en/docs/claude-code/hooks` instead of the current `code.claude.com/docs/en/hooks`. 46 other occurrences across the repo already use the correct URL.

2. **[#84747 — fix(hookify): enforce proper rule evaluation scope and secure file read](https://github.com/anthropics/claude-code/pull/84747)**
   Two critical security fixes in the `hookify` plugin: prevents `load_rules()` from bypassing the event filter when `event` is `None`, and ensures tools without explicit event mappings (e.g., `Read`, `Browser`) only trigger `all`-scoped rules.

3. **[#84711 — fix(security): address yaml injection and symlink credential overwrites](https://github.com/anthropics/claude-code/pull/84711)**
   Fixes #76580. Adds defensive checks to prevent YAML injection and symlink-based credential overwrite attacks in plugin scripts.

---

## Feature Request Clusters

### Cross-Platform Agent Interoperability
- **AGENTS.md support** (#6235, 4,526 👍) — the most vocal request. Users want a single configuration file that works across Claude Code, Cursor, Codex, Amp, and other AI coding agents. The current CLAUDE.md format is viewed as vendor-locked.

### Session Lifecycle Management
- **Continue on session limit** (#13354, 191 👍) — seamless continuation when context limits are hit.
- **Rename session titles after creation** (#51791, 7 👍) — closed as stale but still requested.
- **Remove stale Remote Control environments** (#50884, 26 👍) — ghost environments persist in the UI.

### Plugin & Tool Customization
- **Disable individual plugin skills** (#14920, 83 👍) — per-skill toggles, not all-or-nothing plugin management.
- **Raise /goal character limit** (#84953) — 4,000 character limit on `/goal` conditions is too restrictive for complex goals.
- **Support pasting images from clipboard** (#84961) — friction in sharing screenshots without saving to disk first.

### Security & Permissions
- **Show device/session info on Authorization Tokens page** (#84949) — users want to identify which tokens belong to which sessions.
- **Auto-deny / timeout for background agent permission prompts** (#78487) — spawned agents block indefinitely on unanswered prompts.

---

## Developer Pain Points

- **Fable 5 model reliability**: Multiple reports (#81853, #79247, #84625) show the model hiding text in mixed responses, failing to complete promised multi-step workflows, and silently killing background tasks. The "claims done, isn't done" pattern is a recurring frustration.
- **Session management failures**: Stale environments can't be deleted (#50884, #77372), sessions hit limits with no recovery path (#13354), and cross-session messaging is broken on macOS (#84945).
- **Windows/Desktop stability**: ECONNRESET streaming failures (#84072), MSIX crashes on Intel integrated GPUs (#83028), relaunch file-lock conflicts (#76192), and desktop browser pane crashes (#84951) make Windows a second-class experience.
- **Plugin system friction**: No per-skill disabling (#14920), silent dependency installation (#84939), and security vulnerabilities in plugin scripts (#84711, #84747) undermine trust in the plugin ecosystem.
- **Documentation gaps**: Stale URLs (#84854), incorrect TTL claims in tool descriptions (#74149), and undocumented plugin installation behavior (#84939) force users to reverse-engineer the system.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-08

## Today's Update Brief
The project saw moderate activity: one stable release (`rust-v0.147.0`) with portable agent plugins and conversation organisation, plus three alpha releases for the upcoming 0.148.0. Bug reports remain heavily focused on Windows sandbox, MCP provider compatibility, and memory/resource leaks, while maintainers merged dozens of PRs improving sandbox delegation, MCP event routing, and diagnostic logging.

## Releases
- **rust-v0.147.0** – New features:
  - Install portable Agent Plugins and search across local, personal, workspace, and remote plugin catalogs ([#36544](https://github.com/openai/codex/issues/36544), [#36409](https://github.com/openai/codex/issues/36409), [#36919](https://github.com/openai/codex/issues/36919), [#36796](https://github.com/openai/codex/issues/36796))
  - Organise conversations into persistent, manually ordered sections and browse long transcripts incrementally ([#35722](https://github.com/openai/codex/issues/35722), [#36007](https://github.com/openai/codex/issues/36007), [#36380](https://github.com/openai/codex/issues/36380), [#36948](https://github.com/openai/codex/issues/36948))
- **rust-v0.148.0-alpha.1/2/4** – Pre-release builds; no changelog details provided.

## Hot Issues (10 selected)

1. **#8648 – Codex replies to earlier messages instead of latest**
   *[OPEN, bug, context, agent]*
   In multi-message conversations, the assistant sometimes responds to a historical message. Affects Pro users on gpt-5.2-xhigh with 82 comments and 58 👍.
   [https://github.com/openai/codex/issues/8648](https://github.com/openai/codex/issues/8648)

2. **#12491 – MCP child processes not reaped: 1300+ zombies, 37GB memory leak**
   *[CLOSED, bug, mcp, app, plugins]*
   Codex.app GUI failed to reap MCP child processes, causing massive memory bloat. Closed after fix. 38 comments, 5 👍.
   [https://github.com/openai/codex/issues/12491](https://github.com/openai/codex/issues/12491)

3. **#26234 – MCP tools not callable for non-OpenAI providers**
   *[OPEN, bug, mcp, CLI, custom-model, aws-bedrock]*
   When using Ollama, LM Studio, OpenRouter, or AWS Bedrock, MCP tools are serialised inside a proprietary `{"type": "namespace"}` wrapper that the model cannot call. 32 comments, 41 👍.
   [https://github.com/openai/codex/issues/26234](https://github.com/openai/codex/issues/26234)

4. **#35481 – Codex Diff shows “Oops, an error has occurred” in VS Code**
   *[CLOSED, bug, code-review, windows-os, extension]*
   Opening the Codex Diff view fails on Windows. Closed with a fix. 26 comments, 54 👍.
   [https://github.com/openai/codex/issues/35481](https://github.com/openai/codex/issues/35481)

5. **#10090 – Windows sandbox: `elevated_windows_sandbox` causes all agent commands to fail**
   *[OPEN, bug, windows-os, sandbox]*
   `CreateProcessAsUserW failed: 5` leaves agents with no output. 24 comments, 7 👍.
   [https://github.com/openai/codex/issues/10090](https://github.com/openai/codex/issues/10090)

6. **#37043 – Windows Computer Use fails at EnumWindows with 0x80070003**
   *[OPEN, bug, windows-os, app, computer-use]*
   The bundled helper cannot list windows or apps. 17 comments, 3 👍.
   [https://github.com/openai/codex/issues/37043](https://github.com/openai/codex/issues/37043)

7. **#14599 – Allow `trust_level = "trusted"` for any projects**
   *[OPEN, enhancement, TUI]*
   Request to skip the manual approval prompt for trusted projects. 16 comments, 57 👍.
   [https://github.com/openai/codex/issues/14599](https://github.com/openai/codex/issues/14599)

8. **#29908 – Bubblewrap loopback/userns errors on Ubuntu 24.04**
   *[OPEN, bug, sandbox, CLI, tool-calls]*
   `apply_patch` and managed sandbox commands fail before execution due to Bubblewrap setup. 14 comments.
   [https://github.com/openai/codex/issues/29908](https://github.com/openai/codex/issues/29908)

9. **#34663 – Resume renders full thread history instead of bootstrapping latest turn**
   *[OPEN, enhancement, windows-os, TUI, performance]*
   Resuming a session forces full re-render of the entire history, which is slow on Windows. 7 comments, 5 👍.
   [https://github.com/openai/codex/issues/34663](https://github.com/openai/codex/issues/34663)

10. **#37425 – Regression in v0.147.0 with LiteLLM provider: streaming fails**
    *[OPEN, bug, CLI, custom-model, connectivity]*
    After upgrading to 0.147.0, all streaming requests via LiteLLM fail. 4 comments, 3 👍.
    [https://github.com/openai/codex/issues/37425](https://github.com/openai/codex/issues/37425)

## Key PR Progress (10 selected)

1. **#37513 – Reuse parent compactions in Guardian review sessions**
   Restarts Guardian review sessions after parent history rewrites, seeding with latest encrypted compaction.
   [https://github.com/openai/codex/pull/37513](https://github.com/openai/codex/pull/37513)

2. **#37511 – Enforce automatic review for managed models**
   Forces listed models to use `on-request` approvals with `auto_review` requirement.
   [https://github.com/openai/codex/pull/37511](https://github.com/openai/codex/pull/37511)

3. **#37510 – Define the code-mode host gRPC protocol**
   Adds protobuf API for managing code-mode sessions, executions, and tool callbacks.
   [https://github.com/openai/codex/pull/37510](https://github.com/openai/codex/pull/37510)

4. **#37507 – Include sandbox mode in response metadata**
   Adds effective permission profile (`sandbox_mode`) to turn metadata, reserving the field from client override.
   [https://github.com/openai/codex/pull/37507](https://github.com/openai/codex/pull/37507)

5. **#37505 – Remove the `codex-core-skills` crate**
   Moves `SkillLoadOutcome` and indexing into `codex-skills-extension`, reducing crate count.
   [https://github.com/openai/codex/pull/37505](https://github.com/openai/codex/pull/37505)

6. **#37504 – Disable Nagle’s algorithm for code-mode WebSockets**
   Enables `TCP_NODELAY` on outbound and inbound WebSocket connections to reduce latency.
   [https://github.com/openai/codex/pull/37504](https://github.com/openai/codex/pull/37504)

7. **#37494 – Add MCP event discovery and subscriptions**
   Exposes hosted Plugin Runtime event definitions and adds cancellable `events/stream` subscriptions.
   [https://github.com/openai/codex/pull/37494](https://github.com/openai/codex/pull/37494)

8. **#37492 – Include tool namespace inventory in turn metadata**
   Opt-in metadata (`tool_namespaces_info`) describing each model-visible function’s namespace and exposure.
   [https://github.com/openai/codex/pull/37492](https://github.com/openai/codex/pull/37492)

9. **#37486 – Expose runtime activity in server diagnostics**
   Adds lifecycle-backed gauges for in-flight requests, pending messages, active turns, and MCP connections.
   [https://github.com/openai/codex/pull/37486](https://github.com/openai/codex/pull/37486)

10. **#37485 – Keep response streams alive through connection failures**
    Retries HTTP connection failures with exponential backoff (5–60s) and shows “Reconnecting…” status.
    [https://github.com/openai/codex/pull/37485](https://github.com/openai/codex/pull/37485)

## Feature Request Clusters
- **Trusted project configuration** – Multiple requests ask for a persistent `trust_level = "trusted"` setting to avoid repeated manual approvals ([#14599](https://github.com/openai/codex/issues/14599), [#21839](https://github.com/openai/codex/issues/21839)).
- **MCP server configuration and secrets** – Users want a supported way to provide user secrets/environment variables to MCP servers bundled in plugins ([#24401](https://github.com/openai/codex/issues/24401), [#35253](https://github.com/openai/codex/issues/35253)).
- **Cross-platform consistency** – Requests for macOS Intel Computer Use support ([#24437](https://github.com/openai/codex/issues/24437), [#26842](https://github.com/openai/codex/issues/26842)) and Windows Desktop app feature parity (moving chats between projects, [#34300](https://github.com/openai/codex/issues/34300), [#34499](https://github.com/openai/codex/issues/34499)).
- **Global hold-to-dictate** – Users want the Codex Micro mic key to trigger global dictate, not just the composer ([#34812](https://github.com/openai/codex/issues/34812)).

## Developer Pain Points
- **Windows sandbox fragility** – Multiple issues report `CreateProcessAsUserW failed: 5` when using elevated sandbox or Computer Use, often tied to WindowsApps ACL permissions ([#10090](https://github.com/openai/codex/issues/10090), [#13965](https://github.com/openai/codex/issues/13965), [#37415](https://github.com/openai/codex/issues/37415), [#37484](https://github.com/openai/codex/issues/37484)).
- **MCP provider incompatibility** – Non-OpenAI providers (Ollama, LM Studio, OpenRouter, AWS Bedrock) cannot call MCP tools because of serialisation into a namespace wrapper ([#26234](https://github.com/openai/codex/issues/26234)). Also, OAuth DCR scope misalignment ([#35253](https://github.com/openai/codex/issues/35253)) and “Transport Closed” errors ([#35486](https://github.com/openai/codex/issues/35486)).
- **Sandbox failures on Linux** – Bubblewrap loopback/userns errors on Ubuntu 24.04 block `apply_patch` and managed commands ([#29908](https://github.com/openai/codex/issues/29908)).
- **Memory and performance regressions** – macOS app OOM-crashing due to external-agent-import parsing 1.73 GB of Claude Desktop data ([#36523](https://github.com/openai/codex/issues/36523)); Windows Desktop crashes from image-heavy subagent rollouts ([#35799](https://github.com/openai/codex/issues/35799)); and full thread history re-render on resume ([#34663](https://github.com/openai/codex/issues/34663)).
- **Regression in v0.147.0** – LiteLLM streaming broke after the upgrade ([#37425](https://github.com/openai/codex/issues/37425)), and a separate issue reports that the `gpt-5.6-sol` model is not supported for usage limits ([#36082](https://github.com/openai/codex/issues/36082)).

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

Here is the Kimi Code community digest for 2026-08-08.

---

## Kimi Code Community Digest — 2026-08-08

### 1. Today's Update Brief

Activity is high, with 21 issues and 25 pull requests updated in the last 24 hours, though no new releases were published. The community is heavily focused on Windows compatibility fixes (PowerShell detection, Git Bash, WSL clipboard, and Computer Use installation), TUI/UX improvements, and enhancing the agent core with better subagent controls and MCP authentication. Several long-standing PRs around MCP schema handling and ACP session persistence are also seeing renewed activity.

### 2. Releases

None in the last 24 hours.

### 3. Hot Issues

- **#2709: Arabic/RTL text reversed in TUI**
  User reports that Arabic text renders in the wrong visual order and is not reliably shaped in the interactive terminal. The underlying Unicode is correct, but the terminal paint is broken. This is a significant accessibility blocker for RTL language users.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2709)

- **#2140: Per-call model and thinking_level parameters for Agent/AgentSwarm**
  A feature request to allow subagents spawned via `Agent` and `AgentSwarm` tools to inherit specific model and thinking effort parameters, rather than always using the parent's configuration. Has 1 👍 and is linked to the variable thinking efforts in Kimi K3.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2140)

- **#1885: Mirror working state into terminal title (OSC 0)**
  Users on Windows/VSCode want a visual indicator of whether Kimi Code is "working" in terminals that don't support the standard OSC 9;4 progress bar. The request is to write status to the terminal title bar via OSC 0.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/1885)

- **#2732: Windows: Zed ACP documentation is misleading; port management is chaotic**
  A detailed complaint from a Windows user about the poor experience. The documentation recommends Zed for ACP, but it's essentially non-functional on Windows. The user also reports confusing behavior with `kimi web` instance and port management.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2732)

- **#2448: Support multi-line output from `status_line.command`**
  Feature request to align with Claude Code's contract, where `status_line.command` renders all stdout lines, enabling multi-line HUD-style status bars. Currently only the first line is shown.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2448)

- **#2669: 400 error from text-only providers when history contains images**
  A critical bug for users with custom OpenAI-compatible providers. If a session history contains an image (e.g., from a previous turn with a multimodal model), subsequent turns with a text-only provider fail with a 400 error because the provider receives an `image_url` content block it cannot parse. This poisons the entire conversation.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2669)

- **#2721: Feature request for fullscreen TUI mode with mouse text selection**
  Inspired by Claude Code, users want a fullscreen alternate-screen-buffer mode and the ability to select/copy text with the mouse. The current TUI behavior is seen as too tightly coupled to the parent terminal.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2721)

- **#2715: Windows: Computer Use install fails due to hardcoded PowerShell path**
  Kimi Computer Use fails to install on Windows because it looks for PowerShell 7 at a hardcoded path (`C:\Program Files\PowerShell\7\pwsh.exe`), which is incorrect for MSIX installations via `winget`. The error is a plain `spawn ENOENT`.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2715)

- **#2725: Subagent infinite recursion with no depth limit**
  A critical design issue: subagents spawned via `Agent`/`AgentSwarm` tools can infinitely spawn deeper subagents, creating long chains of delegation that consume tokens without producing output. There is no depth limit or duplicate task detection.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2725)

- **#2712: TUI input box does not stay visible when scrolling history**
  A common UX complaint: when scrolling up to read long conversation history (code diffs, agent reasoning), the input box scrolls off the bottom of the screen. Users must scroll all the way back down to type, breaking flow. The request is for a sticky/persistent input area.
  [Link](https://github.com/MoonshotAI/kimi-code/issues/2712)

### 4. Key PR Progress

- **#2707: Fix `downgradeUnsupportedMedia` for unknown capabilities**
  Fixes a bug where `UNKNOWN_CAPABILITY` (e.g., from `SingleModelProvider`) was incorrectly treated as text-only, causing media stripping. The fix ensures stripping only happens for explicit capability matrices.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2707)

- **#2735: Fix WSL clipboard image paste**
  Resolves #2722. The root cause was that the temporary image path was not forwarded across the WSL interop boundary. The fix adds the path to `WSLENV`.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2735)

- **#2733: Fix VS Code high-contrast dark theme**
  The webview previously only treated `vscode-dark` as dark, causing high-contrast dark themes to render with the light theme. This PR treats `vscode-high-contrast` as dark.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2733)

- **#2724: Refactor `btw` into a feature unit**
  Moves the "btw" (side-question) child-agent capability from the session domain into the `src/features/` directory, aligning with the established architecture pattern.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2724)

- **#2723: Fix idle-session steer in agent-core-v2**
  Fixes a bug where sending a message to an idle session in v2 would fail with a spurious `prompt.not_found` error. The fix aligns the behavior with v1, treating an idle steer like a prompt launch.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2723)

- **#2716: ACP usage reporting for Kimi account**
  Adds `usage_update` events to the ACP protocol, exposing coding plan quota and API usage billing to the client. This allows clients to display real usage metrics.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2716)

- **#2717: Windows Git Bash command compatibility layer**
  A human-reviewed PR that adds a pre-processing layer for Bash commands on Windows. It translates Windows-style paths (`C:\x\y`), cmd-style commands, and Git Bash missing commands (like `tasklist`) into valid shell commands.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2717)

- **#2719: Fix PowerShell 7 detection and Windows installer probes**
  Resolves the Computer Use install failure (#2715) by detecting PowerShell 7 via `PATH` instead of a hardcoded path, and fixing the installer probe logic.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2719)

- **#2633: `tower` command for multi-agent orchestration**
  A new command to orchestrate multiple agents working on the same repository simultaneously. Agents can communicate with each other to avoid conflicts (e.g., not writing to the same file). Uses `AgentSwarm` under the hood.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/2633)

- **#830: Sanitize MCP JSON Schemas for Moonshot MFJS validator**
  A long-running PR (since June) that addresses MCP servers whose tool schemas contain standard JSON Schema features (circular refs, `allOf`, `anyOf`) that crash the Moonshot MFJS validator. The fix sanitizes these schemas during discovery.
  [Link](https://github.com/MoonshotAI/kimi-code/pull/830)

### 5. Feature Request Clusters

- **TUI and UX Improvements**
  Multiple requests center on making the terminal UI more user-friendly and feature-rich: a fullscreen mode with mouse selection (#2721), a persistent input box that doesn't scroll away (#2712), multi-line status bar support (#2448), and terminal title status updates (#1885). These are all inspired by the Claude Code experience.

- **Windows Platform Support**
  A strong cluster of issues and PRs is dedicated to making Kimi Code work reliably on Windows. Specific problems include: Zed ACP incompatibility (#2732), Git Bash command failures (#2718), Computer Use installer failures (#2715), and WSL clipboard paste issues (#2722). The community is vocal about the gap between documentation and actual Windows support.

- **Agent and Plugin Extensibility**
  Users are requesting more granular control over agents: per-call model and thinking parameters for subagents (#2140). On the plugin side, the community wants support for installing plugins from private GitHub repos (#2738) and automatic updates for plugins from custom marketplaces (#2737). The request to re-open source the web frontend (#2714) also fits this theme of ecosystem openness.

### 6. Developer Pain Points

- **Windows Compatibility is a Major Pain Point**
  Multiple issues this week highlight a consistent pattern of broken Windows support. The sum of reports suggests that the Windows experience is significantly worse than macOS/Linux, particularly around tooling (Zed, Git Bash, PowerShell) and installation (Computer Use). The community is frustrated by documentation that doesn't reflect the reality of Windows support.

- **Agent Safety and Stability**
  The discovery of infinite subagent recursion (#2725) is a serious concern, as it can silently consume tokens and system resources. Combined with the race condition in auto compaction (#2720) and the "This operation was aborted" error, it suggests that the agent loop's concurrency and safety mechanisms need hardening.

- **Ecosystem Integration Friction**
  Issues with non-Kimi providers (#2669) and MCP server schemas (#830) highlight that the integration surface with external tools and models is fragile. The `image_url` variant error is particularly painful because it poisons the entire session, and the MCP schema issue has been open for months.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## Today’s Update Brief

OpenCode v1.18.15 shipped with three core bugfixes around message chronology and truncation cleanup. Community activity remains high: 50 issues and 50 pull requests were updated in the last 24 hours. The most discussed topics are a **401 blocked upstream provider error on OpenCode Go**, recurring **DeepSeek V4 Flash model identity mismatches**, and **billing/usage discrepancies** that are frustrating paying users.

## Releases

**v1.18.15** — [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.15)

- Chronological message ordering now stays correct even when imported or legacy message IDs are out of order.
- Revert and fork actions now use real message chronology instead of message ID ordering.
- Truncation cleanup now removes stale files by file timestamp more reliably.

## Hot Issues

1. **#38257 – [OPEN] OpenCode Go: return 401 Request blocked by upstream provider**
   [Link](https://github.com/anomalyco/opencode/issues/38257)
   *45 comments, 11 👍*
   All models under OpenCode Go return `401 Request blocked by upstream provider` on `chat/completions` while `/v1/models` works. User reports a server-side issue affecting Go subscriptions. High impact for Go plan users.

2. **#5359 – [OPEN] Unable to read images for some models**
   [Link](https://github.com/anomalyco/opencode/issues/5359)
   *18 comments*
   Image pasting fails on OpenCode ≥1.0.137; works on 1.0.134. Stack: LiteLLM + Vertex AI. Affects users relying on multimodal workflows.

3. **#23153 – [OPEN] [FEATURE]: Pay Go with crypto**
   [Link](https://github.com/anomalyco/opencode/issues/23153)
   *17 comments, 37 👍*
   Request to add crypto payment support for OpenCode Go. Strong community support.

4. **#14332 – [CLOSED] Amazon Bedrock Opus 4.6 compaction failure**
   [Link](https://github.com/anomalyco/opencode/issues/14332)
   *16 comments, 8 👍*
   Error: `thinking` or `redacted_thinking` blocks in latest assistant message cannot be modified during compaction. Affects long agentic sessions on Bedrock.

5. **#40409 – [CLOSED] OpenCode Go `deepseek-v4-flash` is NOT serving DeepSeek V4 Flash 0731**
   [Link](https://github.com/anomalyco/opencode/issues/40409)
   *14 comments*
   The model returns V3.2 with knowledge cutoff 2025-05 instead of V4 Flash. Billing/quality mismatch – users pay for V4 but receive V3. Closed with a fix.

6. **#6560 – [CLOSED] [bug, opentui, windows] Paste into Powershell OpenCode instance not working**
   [Link](https://github.com/anomalyco/opencode/issues/6560)
   *13 comments, 2 👍*
   Right-click paste and Ctrl+V fail inside OpenCode TUI on Windows 11 Pro. Closed after fix.

7. **#24334 – [CLOSED] [bug, core, acp] Error from provider (DeepSeek): The `reasoning_content` in the thinking mode must be passed back to the API**
   [Link](https://github.com/anomalyco/opencode/issues/24334)
   *10 comments, 2 👍*
   DeepSeek API rejects requests missing `reasoning_content` in assistant messages during thinking mode. Closed after fix.

8. **#34780 – [OPEN] [bug, 2.0] V2: Snowflake Cortex OAuth login not supported**
   [Link](https://github.com/anomalyco/opencode/issues/34780)
   *4 comments*
   V2 branch lacks Snowflake OAuth provider login method. V1 supports it. Part of a systemic V2 provider-login gap.

9. **#37888 – [OPEN] [FEATURE]: add OPENCODE_DISABLE_INSTALL env var to skip npm installs at startup**
   [Link](https://github.com/anomalyco/opencode/issues/37888)
   *3 comments, 2 👍*
   Running `opencode run` in Docker/CI installs `@opencode-ai/plugin` and npm dependencies every time. Request for an environment variable to skip this.

10. **#38853 – [OPEN] [FEATURE]: Support subfolders for skills to better organize them**
    [Link](https://github.com/anomalyco/opencode/issues/38853)
    *3 comments, 1 👍*
    Skills are flat in `~/.config/opencode/skills/`. Users want subfolder organization as the number of custom skills grows.

## Key PR Progress

1. **#41170 – [OPEN] feat(console): add workspace unblock endpoint**
   [Link](https://github.com/anomalyco/opencode/pull/41170)
   Adds a Support API endpoint (authenticated with `SUPPORT_API_KEY`) to clear `workspace.is_blocked`. Idempotent.

2. **#41147 – [CLOSED] fix(tui): show external worktree session labels**
   [Link](https://github.com/anomalyco/opencode/pull/41147)
   Restores session-directory labels for sessions outside the canonical project directory (e.g., sibling Git worktrees). Avoids hiding labels unintentionally.

3. **#41169 – [OPEN] fix(lsp): match wildcard root markers like *.cabal**
   [Link](https://github.com/anomalyco/opencode/pull/41169)
   `Filesystem.up` now probes glob markers (e.g., `*.cabal`) for language server root detection, instead of failing on literal `exists`.

4. **#41113 – [OPEN] feat(tui): render Mermaid diagrams**
   [Link](https://github.com/anomalyco/opencode/pull/41113)
   Renders Mermaid flowcharts, sequence diagrams, and state diagrams directly in the TUI session transcript. Vendored as `@opencode-ai/merman`. Built-in plugin.

5. **#41167 – [OPEN] feat(opencode): let web users avoid browser launches**
   [Link](https://github.com/anomalyco/opencode/pull/41167)
   Adds `opencode web --no-open` for users who want the web UI without automatically opening a browser tab.

6. **#41158 – [OPEN] fix(app): default project picker to home**
   [Link](https://github.com/anomalyco/opencode/pull/41158)
   Returns server home directory from location endpoint and hydrates V2 app path state. Defaults both Open Project dialogs to home directory.

7. **#41160 – [OPEN] feat(tool): add Synthetic web search backend to websearch tool**
   [Link](https://github.com/anomalyco/opencode/pull/41160)
   Adds `"synthetic"` as a third web search backend alongside `exa` and `parallel`. Closes #41164.

8. **#41161 – [OPEN] fix(session): extract tool-result media for models without attachment capability**
   [Link](https://github.com/anomalyco/opencode/pull/41161)
   `supportsMediaInToolResult` was returning `true` unconditionally for Anthropic/OpenAI SDKs. Now correctly handles models that cannot attach media. Closes #41162.

9. **#41159 – [OPEN] fix(provider): propagate config-level npm override to inherited models**
   [Link](https://github.com/anomalyco/opencode/pull/41159)
   A config-level `npm` override (e.g., `provider.synthetic.npm = "@ai-sdk/anthropic"`) was silently dropped. Now propagated to inherited models. Closes #41162.

10. **#41118 – [CLOSED] feat(server): add modal environment driver**
    [Link](https://github.com/anomalyco/opencode/pull/41118)
    First hosted binding of the Environment contract: a Modal sandbox driver in `@opencode-ai/server`. Includes a live-gated conformance suite.

## Feature Request Clusters

- **Payment methods** – Crypto support for OpenCode Go (#23153) continues to receive strong community support (37 👍). Also, reports of Go plan overcharging (#41146) and balance not updating after payment (#41166) suggest billing infrastructure needs attention.
- **Skills organization** – Subfolders for skills (#38853) and better project/skill management.
- **Environment variables** – Request for `OPENCODE_DISABLE_INSTALL` (#37888) to skip npm installs in CI/Docker.
- **UX improvements** – Queue user messages during generation instead of cancelling in-flight turn (#41106), default project picker to home (#41158), and show external worktree labels (#41147).
- **Provider support** – Snowflake Cortex OAuth login in V2 (#34780) and improved provider login gaps.
- **Subagent model override** – Runtime model override for task tool subagents (#17595, closed but feature request).

## Developer Pain Points

- **OpenCode Go 401 errors** – Issue #38257 (45 comments) is the most active today. Users cannot use chat/completions despite `/v1/models` working; appears to be a server-side Go subscription issue.
- **DeepSeek V4 model identity** – Multiple reports (#40409, #40607) that `deepseek-v4-flash` returns V3.x with old knowledge cutoff. Even official API key users are affected. Misleading billing.
- **Billing and usage discrepancies** – Users report weekly limits exhausted at $7.50 despite $30 limit (#41146), usage above 100% with compaction blocked (#41102), and balance not updating after successful payment (#41166). These erode trust in the subscription model.
- **Copilot re-authentication** – Every session prompts re-auth despite stored credentials (#40183). Student package users affected.
- **Image reading failures** – Issue #5359 persists for many models; regression from v1.0.134 to v1.0.137.
- **Web app blank state** – Fresh `opencode web` sessions show “Nothing here yet” (#41156, #41155) because the client only reads local bookmarks, not server projects. Two PRs (#41154, #41153) aim to fix this.

</details>