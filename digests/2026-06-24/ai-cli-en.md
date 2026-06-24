# AI CLI Tools Community Digest 2026-06-24

> Generated: 2026-06-24 00:28 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-24

## 1. Daily Cross-Tool Overview

Seven AI CLI tools were tracked today. Claude Code and OpenAI Codex each published new releases (v2.1.187 and seven `rust-v0.143.0-alpha` builds respectively), while GitHub Copilot CLI shipped a single patch and Qwen Code released v0.19.0/v0.19.1. Community issue activity was high across Claude Code, Codex, Gemini, OpenCode, and Qwen—each with 50 issues updated in the last 24 hours. Kimi Code stood out for near-zero activity, with only one issue updated and no releases or PRs. Security hardening (credential blocking, SSRF protection) and agent reliability (hangs, false success reporting) were recurring themes across multiple tool communities.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Active (Open/Updated) | Releases Today |
|---|---|---|---|
| Claude Code | 50 | 2 open | 1 (v2.1.187) |
| OpenAI Codex | 50 | ~50 opened (24h) | 7 (alpha builds) |
| Gemini CLI | 50 | 18 updated | 0 |
| GitHub Copilot CLI | 14 (new triage) | 1 open | 1 (v1.0.64) |
| Kimi Code CLI | 1 | 0 | 0 |
| OpenCode | 50 | 50 updated | 0 |
| Qwen Code | 50 | 50 in motion | 2 (v0.19.0, v0.19.1) |

*Note: Numbers are from today's digest summaries; “PRs Active” includes both newly opened and updated pull requests. Codex had “a similar number of PRs opened” as issues (≈50).*

## 3. Shared Feature Directions

Several requirements appeared across two or more tool communities today:

- **MCP/Plugin reliability and configuration** – Claude Code (tilde expansion bug #37580, cowork MCP failures), Codex (MCP tool regression with local models #19871), Copilot CLI (MCP server blocked by policy #2486, naming collisions #3893), OpenCode (MCP resource tooling merged #33483), Qwen Code (MCP resource completion and server discovery in v0.19.1). All communities face fragility around MCP setup, credential handling, and cross-tool consistency.

- **Credential security & sandboxing** – Claude Code shipped `sandbox.credentials` blocking and org model restrictions. Codex advanced credential broker (PR #28034). Gemini merged SSRF protections (#27739, #27744) and is working on OAuth socket-reuse fix (#28103). OpenCode and Qwen Code have web_fetch security issues (userinfo rejection #5782). A coordinated security push is visible.

- **Agent false success / silent failures** – Gemini CLI (#22323: subagent reports success after hitting max turns), OpenCode (#19604: Write tool fails silently on large files), Claude Code (#69939: duplicate records appended silently). Agents are not reliably surfacing failures, eroding user trust.

- **Session state accumulation and cleanup** – Codex (SQLite log churn #29532), Copilot CLI (session state never pruned, crashes VS Code #3892), Gemini (session resume offered for unsaved sessions #27914). Uncontrolled state growth is a cross-tool pain point.

- **TUI rendering issues** – Copilot CLI (scroll bar misalignment #3501, dark background text #3866), Qwen Code (line wrap background break #5562, cursor visibility in Alacritty #5713), OpenCode (TUI crash “Worker has been terminated” #32694). Terminal UI quality remains a common frustration.

- **Hook/event-driven request interception** – Claude Code (#21531: before/after LLM hooks), Gemini (agent self-awareness features), OpenCode (plugin config hooks). Users want to intercept and modify model calls for monitoring and guardrails.

## 4. Differentiation Analysis

- **Enterprise vs. community focus** – Claude Code emphasizes org-controlled model restrictions and credential sandboxing, targeting managed deployments. Codex is also pushing marketplace source admission policies and enterprise plugin configuration. In contrast, Gemini CLI and OpenCode feature requests lean toward individual developer productivity (TUI search, Vim mode, daemon automation). Copilot CLI sits in between, with enterprise billing improvements (pay-as-you-go feedback) but also personal account blocking issues.

- **Agent orchestration approach** – Gemini CLI’s subagent system (generalist, browser, codebase_investigator) is the most explicit multi-agent architecture, but suffers from configuration defiance and false success. OpenCode has a conductor pattern with Task tool timeouts (#6792) and a pending `agent-teams` feature. Claude Code’s cowork mode and Codex’s Ultra reasoning effort (PR #29709) take different approaches to parallelism. No clear convergence on multi-agent design.

- **Technology stack** – Claude Code (Python/Node?), Codex (Rust-based CLI and runtime), Gemini CLI (Node.js, emphasized by OAuth socket-reuse Node >= 24.17.0 issue), Copilot CLI (unknown), Kimi Code (Node?), OpenCode (JavaScript/TypeScript, Drizzle, Effect), Qwen Code (TypeScript, daemon architecture). Codex’s Rust stack appears to enable more alpha releases and performance focus; Node-based tools (Gemini, Qwen) face version compatibility issues.

- **Update & maintenance philosophy** – Qwen Code released two versions today with extensive community-contributed validation fixes and new daemon APIs. Codex issued seven alpha builds but without changelogs. Claude Code and Copilot CLI ship infrequent but structured release notes. Gemini and OpenCode had no releases today despite high issue activity, suggesting slower release cadence or different development cycles.

## 5. Community Activity Notes

- **Most active by raw counts**: OpenCode, Qwen Code, and Claude Code/Codex all updated 50 issues in 24h. Codex and Qwen also have high PR throughput (~50 each). Gemini also had 50 issues updated but 18 PRs updated—less PR churn but still high engagement.

- **Highest release velocity**: Codex (7 alpha builds today) and Qwen Code (2 releases) are shipping most aggressively. Claude Code and Copilot CLI each had one release. Gemini and OpenCode had none.

- **Strongest maintainer response (by visible pull requests merged)** : Qwen Code merged numerous community PRs (15+ validation fixes by tt-a1i) on the same day. Claude Code merged fixes for duplicate records (#69939 closed). OpenAI Codex merged several infrastructure PRs (SQLite log reduction, connector refactoring). Gemini merged SSRF fixes and SIGINT cancellation fix. Copilot CLI has only one open PR with no activity.

- **Least active**: Kimi Code CLI had a single issue and no maintainer response, suggesting either low adoption or a dormant repository. Copilot CLI had only 14 triage issues filed and one PR—moderate but lower than the top four.

- **Notable community contributors**: @coygeek (Claude Code) filed 20+ documentation gaps; @tt-a1i (Qwen Code) submitted 15+ validation fixes; @iaindooley (Kimi Code) lone reporter. The high volume of documentation issues from a single user in Claude Code indicates systemic under-documentation rather than isolated gaps.

## 6. Evidence-Backed Observations

**Observation 1: Credential and SSRF security is being addressed concurrently across multiple tools.**
Today’s digests show Claude Code shipping `sandbox.credentials` blocking, Codex working on a local credential broker (PR #28034), Gemini merging DNS-based SSRF protections and case-insensitive path blocklists (#27744, #27739, #27966), and Qwen Code opening a security issue on web_fetch userinfo leakage (#5782). This simultaneous hardening suggests a shared awareness of supply-chain and prompt-injection risks in agentic CLI tools.

**Observation 2: Agent false success and silent failures are a widespread trust problem.**
Gemini CLI’s subagent reporting `status: "success"` after hitting max turns (#22323) and OpenCode’s Write tool silently failing on large files (#19604) are two independent reports of agents not surfacing errors. Claude Code also has a closed duplicate-records bug (#69939) that silently corrupted session state. Users across communities are frustrated when they cannot trust agent output—this is a reliability gap that undermines the core value proposition of autonomous coding assistants.

**Observation 3: MCP and plugin integration remains fragile across all tool ecosystems.**
Claude Code’s tilde expansion asymmetry (#37580), Codex’s MCP regression with local models (#19871), Copilot CLI’s MCP policy blocking (#2486) and naming collisions (#3893), and Qwen Code’s resource completion improvements (v0.19.1) all point to MCP as a persistent pain point. Each tool is tackling slightly different aspects, but no tool has achieved seamless plug-and-play with diverse MCP servers.

**Observation 4: TUI rendering quality issues are common but individually minor—they collectively degrade the interactive experience.**
Copilot CLI (scroll bars, dark text), Qwen Code (line wrap, cursor visibility), and OpenCode (worker crashes) each report different terminal-specific defects. While no single issue is blocking, the pattern suggests that cross-platform TUI testing with diverse terminal emulators (Windows Terminal, Alacritty, macOS Terminal) is under-invested. The Qwen Code move toward Unicode glyphs (#5787, #5788) is a pragmatic workaround.

**Observation 5: Documentation gaps are a systemic issue in Claude Code, but not yet in other tools.**
A single contributor (@coygeek) has filed over 20 documentation gaps for Claude Code in three months, including today’s #31675 (auto-approval allowlist not enumerated). No equivalent pattern appears in Codex, Gemini, or OpenCode today. This suggests Claude Code’s documentation is lagging behind feature velocity, whereas other tool communities may have higher documentation standards or more recent documentation refresh cycles.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-24

## Today's Update Brief
Anthropic shipped **v2.1.187** with enterprise‑grade sandbox credential blocking and org‑enforced model restrictions. Activity remained high: 50 issues received updates and 2 pull requests are open. The community continues to surface long‑standing pain points around cowork stability on ARM64, MCP server reliability, and documentation gaps – many of which are filed by a single prolific contributor (@coygeek).

## Releases
**v2.1.187** — [Full release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.187)
- **`sandbox.credentials` setting** — Sandboxed commands can now be prevented from reading credential files and secret environment variables.
- **Org‑controlled model restrictions** — Model picker, `--model` flag, `/model` slash command, and `ANTHROPIC_MODEL` environment variable now honor organization‑level allow/deny lists, showing a _"restricted by your organization’s set"_ indicator when applicable.

## Hot Issues (10 noteworthy)

1. **[#50674 – Cowork fails on ARM64 (Snapdragon X) despite passing readiness check](https://github.com/anthropics/claude-code/issues/50674)**
   *Impact:* Users on Windows ARM64 devices (Snapdragon X) report that the cowork mode passes its readiness check but then fails to launch. The issue has been open since April and collected 25 comments.
   *Community reaction:* Frustration over a critical feature not working on modern ARM hardware; no official fix timeline visible.

2. **[#27492 – Claude cowork MCP Issue continues](https://github.com/anthropics/claude-code/issues/27492)**
   *Impact:* Ongoing MCP (Model Context Protocol) failures specifically affecting cowork mode. With 22 👍 and 25 comments, this is one of the most‑upvoted open bugs.
   *Community reaction:* Persistent problems since February; users express that the root cause is still not resolved.

3. **[#10223 – Inconsistent Network Behavior and Unclear UX in Default Cloud Environment](https://github.com/anthropics/claude-code/issues/10223)**
   *Impact:* Users on macOS report unpredictable network access patterns in the default cloud‑based sandbox, with no clear UI feedback about connectivity.
   *Community reaction:* 11 comments, two reactions; a long‑running frustration (filed October 2025) with no resolution.

4. **[#69336 – API Error: Connection closed mid-response](https://github.com/anthropics/claude-code/issues/69336)**
   *Impact:* On Linux, API connections drop immediately when a new context window opens – the error appears within the first response.
   *Community reaction:* 6 comments, 4 👍; users suspect a timeout or keep‑alive issue specific to the agent SDK.

5. **[#37580 – MCP server args containing `~` cause ENOENT](https://github.com/anthropics/claude-code/issues/37580)**
   *Impact:* Any MCP server configured with a `~` in `args` (e.g., `"~/.local/bin/server"`) fails because Claude Code does not expand the tilde before spawning the process. The `command` field handles `~` correctly, creating confusing asymmetry.
   *Community reaction:* 6 comments; simple bug but blocks users who rely on relative home‑directory paths.

6. **[#70465 – SessionEnd hook killed before completing on exit](https://github.com/anthropics/claude-code/issues/70465)**
   *Impact:* On Windows full‑screen TUI, a long‑running `SessionEnd` hook is terminated prematurely when the user exits, leaving partial state and preventing `EXIT` traps from running.
   *Community reaction:* Filed today; 2 comments, no reactions yet. Signals a missing configurable grace period for cleanup hooks.

7. **[#69939 – Opening a chat re-appends duplicate mode/custom-title records](https://github.com/anthropics/claude-code/issues/69939)**
   *Impact:* Every time a chat is opened, duplicate bookkeeping records (mode, custom title) are appended to the session’s JSONL transcript, bumping the modification time and reordering the chat to the top of the “Recent” list.
   *Community reaction:* 3 comments; marked as closed, suggesting a fix was merged.

8. **[#21531 – [FEATURE] BeforeModel and AfterModel Hooks for LLM Request/Response Interception](https://github.com/anthropics/claude-code/issues/21531)**
   *Impact:* Developers want the ability to intercept and modify LLM requests and responses (e.g., for cost tracking, prompt injection guardrails, custom logging).
   *Community reaction:* 8 comments, 3 👍; a long‑standing request (January 2026) with no official response.

9. **[#55981 – RFC: Async/event-driven communication as a first-class capability for Claude Code agents](https://github.com/anthropics/claude-code/issues/55981)**
   *Impact:* Proposes adding event‑driven patterns (pub/sub, webhooks) to Agent SDK so agents can respond to external events instead of only being polled.
   *Community reaction:* 4 comments; the RFC is well‑received but still open.

10. **[#31675 – [DOCS] Permissions and settings docs missing bash auto-approval allowlist enumeration](https://github.com/anthropics/claude-code/issues/31675)**
    *Impact:* The `autoAllowBashIfSandboxed` setting is documented only partially – users cannot find a complete list of commands that are auto‑approved when sandboxed.
    *Community reaction:* 5 comments, 4 👍; typical of the broader documentation gap pattern filed by @coygeek.

## Key PR Progress (2 open pull requests)

1. **[#20448 – Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)**
   A community PR introducing a plugin for trust‑native AI governance using T3 trust tensors, entity witnessing, and R6 audit trails. The author describes it as “lightweight”.
   *Status:* Open since January 2026; last updated yesterday. No maintainer comments visible.

2. **[#70173 – fix(commit-commands): detect [gone] branches with `git branch -vv`](https://github.com/anthropics/claude-code/pull/70173)**
   Fixes the `/clean_gone` command which never deleted any branches. The root cause: `git branch -v` was used instead of `git branch -vv`, so `[gone]` was never output for tracking branches.
   *Status:* Open since June 22; 0 comments. The fix is a one‑line change from `-v` to `-vv`.

## Feature Request Clusters

Two independent feature proposals stand out in today’s data:

- **LLM request/response hooks** (#21531) — Users want a hook API to intercept every Claude call (before and after) for monitoring, filtering, or enrichment.
- **Async / event‑driven agent communication** (#55981) — An RFC proposing that Agent SDK agents should be able to push events (via webhooks, pub/sub) rather than only listening to polling loops.

No strong thematic overlap between these two; they address different layers of the stack (LLM call lifecycle vs. agent orchestration).

## Developer Pain Points

Several recurring frustrations appear across today’s issues:

- **Cowork mode instability** — ARM64 Windows and general MCP failures make cowork unreliable for many users (#50674, #27492).
- **MCP server configuration fragility** — Tilde expansion (#37580), binary output handling (#30942), and plugin‑org connector duplication (#38572) cause frequent connection failures.
- **API connectivity drops** — Mid‑response disconnections (#69336) and non‑streaming fallback behavior (#38569) degrade reliability.
- **Hook lifecycle incompleteness** — `SessionEnd` hooks can be killed without running cleanup traps (#70465); docs also lack hook matchable tool names (#26702).
- **Documentation signal‑to‑noise ratio** — A single contributor (@coygeek) has filed over 20 documentation gaps in the last three months, indicating systemic under‑documentation of interactive mode, MCP, permissions, and CLI semantics. While these are not bugs per se, they create friction for new and advanced users alike.
- **Git integration bugs** — The `/clean_gone` command was silently broken (PR #70173 highlights the root cause). This suggests other git‑related commands may have similar testing blind spots.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-06-24

## Today’s Update Brief
Seven `rust-v0.143.0-alpha` releases landed today, continuing the rapid alpha iteration cycle. Community activity remains high with 50 issues updated in the last 24 hours and a similar number of pull requests opened. Major areas of focus are plugin marketplace policy enforcement, token budget compaction, and credential security—alongside persistent user frustration over a sudden rate-limit cost spike.

## Releases
All releases today are version `0.143.0-alpha.{2,3,4,5,6,7,9}`. No changelog details are provided; these appear to be automated builds for the Rust-based CLI and runtime.

- `rust-v0.143.0-alpha.9`
- `rust-v0.143.0-alpha.7`
- `rust-v0.143.0-alpha.6`
- `rust-v0.143.0-alpha.5`
- `rust-v0.143.0-alpha.4`
- `rust-v0.143.0-alpha.3`
- `rust-v0.143.0-alpha.2`

## Hot Issues (Top 10 by Engagement & Impact)

### 1. Rate-limit cost per token jumped ~10–20x since June 16 (#28879)
- **Issue:** [openai/codex/issues/28879](https://github.com/openai/codex/issues/28879)
- **Workflow:** Using `gpt-5.5` on ChatGPT Plus plan in Codex app.
- **Impact:** Users report their 5‑hour usage budget drains in 2–3 prompts instead of 20+; token-level cost per token appears to have multiplied without model or plan change.
- **Community reaction:** 130 comments, 257 👍 – the most hotly discussed bug today.

### 2. SQLite feedback logs write ~640 TB/year, consuming SSD endurance (#28224)
- **Issue:** [openai/codex/issues/28224](https://github.com/openai/codex/issues/28224) (CLOSED)
- **Workflow:** Codex CLI writes intensive debug logs to a local SQLite database.
- **Impact:** 85% log reduction achieved via three merged PRs; issue closed by reporter.
- **Community reaction:** 71 comments, 328 👍 – very high upvote count, praised the maintainers for the fix.

### 3. macOS syspolicyd / trustd CPU spikes on Codex Desktop launch (#16767)
- **Issue:** [openai/codex/issues/16767](https://github.com/openai/codex/issues/16767)
- **Workflow:** Opening Codex Desktop triggers sustained high CPU from system security services.
- **Impact:** Significant battery drain and fan noise on macOS.
- **Community reaction:** 18 comments, 26 👍 – still open after several months.

### 4. Codex WebSearch receives Cloudflare 403 challenge on Windows (#29197)
- **Issue:** [openai/codex/issues/29197](https://github.com/openai/codex/issues/29197)
- **Workflow:** WebSearch tool calls return HTTP 403 with a Cloudflare managed-challenge page.
- **Impact:** Users on Windows cannot use web search at all; blocking.
- **Community reaction:** 12 comments, 0 👍 – low upvotes but critical for affected users.

### 5. Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS (#29000)
- **Issue:** [openai/codex/issues/29000](https://github.com/openai/codex/issues/29000)
- **Workflow:** Running Codex CLI on Intel (x86_64) macOS.
- **Impact:** Immediate crash with trace trap; users on older Macs are blocked.
- **Community reaction:** 12 comments, 11 👍 – confirmed by several users.

### 6. VS Code Codex: central editor panel opens blank on Windows (#21863)
- **Issue:** [openai/codex/issues/21863](https://github.com/openai/codex/issues/21863)
- **Workflow:** Using the VS Code extension on Windows when custom URI route uses `fsPath`.
- **Impact:** The Codex panel appears empty; must reload vscode or reinstall.
- **Community reaction:** 11 comments, 1 👍 – moderately reported.

### 7. Persistent SQLite log churn after rust-v0.142.0 (#29532)
- **Issue:** [openai/codex/issues/29532](https://github.com/openai/codex/issues/29532)
- **Workflow:** macOS users still see heavy SQLite logging in `~/.codex/logs_2.sqlite` despite the fix for #28224.
- **Impact:** Only partial fix; `#29457` didn’t suppress all log targets.
- **Community reaction:** 9 comments, 6 👍 – opened yesterday, still active.

### 8. macOS app leaves ~965 MB `code_sign_clone` directories after quit (#25667)
- **Issue:** [openai/codex/issues/25667](https://github.com/openai/codex/issues/25667)
- **Workflow:** Each launch of Codex Desktop leaves a large directory of cloned code signing resources.
- **Impact:** Disk space bloat; manual cleanup required.
- **Community reaction:** 9 comments, 17 👍 – ongoing for several weeks.

### 9. MCP tool invocation regressed for custom/local providers in v0.117.0+ (#19871)
- **Issue:** [openai/codex/issues/19871](https://github.com/openai/codex/issues/19871)
- **Workflow:** Using Codex CLI with Ollama or other local model providers via Responses API.
- **Impact:** MCP tool calls become unreliable; works in 0.115.0/0.116.0 but broken in 0.117.0+.
- **Community reaction:** 8 comments, 5 👍 – bisected, awaiting resolution.

### 10. Skill instructions to use subagents ignored unless repeated in prompt (#23496)
- **Issue:** [openai/codex/issues/23496](https://github.com/openai/codex/issues/23496)
- **Workflow:** Defining skills that instruct the model to delegate to subagents.
- **Impact:** Skills don’t trigger subagents unless the user manually repeats the instruction in the prompt.
- **Community reaction:** 7 comments, 3 👍 – a subtle but frustrating bug.

## Key PR Progress (Top 10 by Architectural Importance)

### 1. Enforce marketplace source admission requirements (#29753)
- **PR:** [openai/codex/pull/29753](https://github.com/openai/codex/pull/29753)
- **What:** Centralizes the decision about which marketplace sources are allowed, ensuring CLI, app-server, and agent migration flows all apply the same admission check.
- **Why:** Prevents inconsistent plugin source handling in managed deployments.

### 2. Enforce marketplace source policy at runtime (#29691)
- **PR:** [openai/codex/pull/29691](https://github.com/openai/codex/pull/29691)
- **What:** Applies the source policy to filter plugin lists, installation, and background cache operations.
- **Why:** Makes blocked plugins inactive even if previously installed.

### 3. Add marketplace source admission requirements (#29690)
- **PR:** [openai/codex/pull/29690](https://github.com/openai/codex/pull/29690)
- **What:** Introduces TOML-based enterprise configuration for allowed marketplace sources.
- **Why:** Enables managed deployments to restrict which plugin sources are cloned or used.

### 4. Assign `amsg_` IDs to agent messages (#29750)
- **PR:** [openai/codex/pull/29750](https://github.com/openai/codex/pull/29750)
- **What:** Fixes missing stable item IDs for agent messages in the response stream.
- **Why:** Improves consistency for downstream consumers that rely on item IDs.

### 5. Connectors: own app metadata types (#29723)
- **PR:** [openai/codex/pull/29723](https://github.com/openai/codex/pull/29723)
- **What:** Moves connector branding, review, and metadata types out of app-server wire DTOs into a domain-owned module.
- **Why:** Reverses a dependency inversion; cleaner architecture.

### 6. Support thread-level originator overrides (#29477) (CLOSED)
- **PR:** [openai/codex/pull/29477](https://github.com/openai/codex/pull/29477)
- **What:** Allows Work (TPP) threads launched from Desktop to carry a different originator for proper attribution.
- **Why:** Distinguishes local Work launches from cloud-backed ones.

### 7. Config: own layer provenance types (#29722)
- **PR:** [openai/codex/pull/29722](https://github.com/openai/codex/pull/29722)
- **What:** Moves `ConfigLayerSource` etc. into `codex-config`.
- **Why:** Keeps configuration logic decoupled from app-server API types.

### 8. Feat(network-proxy): experimental local credential broker (#28034)
- **PR:** [openai/codex/pull/28034](https://github.com/openai/codex/pull/28034)
- **What:** Adds a proxy-owned broker that keeps credentials behind the managed network proxy, preventing child processes from reading them.
- **Why:** Security hardening against credential exfiltration.

### 9. Derive multi-agent mode from Ultra effort (#29710)
- **PR:** [openai/codex/pull/29710](https://github.com/openai/codex/pull/29710)
- **What:** Once Ultra selects proactive delegation, the multi-agent mode is derived automatically instead of being a separate client setting.
- **Why:** Eliminates competing sources of truth across thread lifecycle.

### 10. Add gated Ultra reasoning effort (#29709)
- **PR:** [openai/codex/pull/29709](https://github.com/openai/codex/pull/29709)
- **What:** Introduces a product-level “Ultra” reasoning selection that only appears when model catalog and feature flags allow it.
- **Why:** Enables maximum reasoning effort without new backend tokens.

## Feature Request Clusters

- **TUI Navigation Improvements**
  - [#21732](https://github.com/openai/codex/issues/21732): Keyboard shortcut to jump between user prompts in transcript.
  - [#28055](https://github.com/openai/codex/issues/28055): Easier way to check usage without misclicking “Invite a Friend”.

- **Network Transport Options**
  - [#27381](https://github.com/openai/codex/issues/27381): Request for an HTTPS-only transport mode for corporate proxies that block WebSocket.

- **Managed New-Thread Model Default**
  - [PR #29683](https://github.com/openai/codex/pull/29683) (closed) and related issues suggest users want administrators to set default models for new threads via `requirements.toml`.

## Developer Pain Points

- **Sudden rate-limit cost explosion** (#28879) – Users feel their Plus plan is devalued; no official response yet.
- **Excessive SQLite disk churn** (#28224, #29532) – Even after partial fixes, some macOS users still see heavy logging.
- **macOS code signing directory leaks** (#25667) – ~1 GB left behind per launch; annoying but not blocking.
- **MCP tool unreliability with local models** (#19871, #15508) – Long-standing regression makes custom providers unusable.
- **Cloudflare blocking on Windows** (#29197) – WebSearch completely broken in some networks.
- **CLI crash on Intel macOS** (#29000) – Blocks x86_64 Mac users from CLI.
- **VS Code blank panel on Windows** (#21863) – Affects the extension workflow.
- **Windows upgrade corrupts marketplace data** (#26501) – Browser/Computer Use features disappear after upgrade.

*All links point to the official `github.com/openai/codex` repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-24

## Today's Update Brief

Activity remains high with 50 open issues and 18 open PRs updated in the last 24 hours, though no new releases landed. The community is heavily focused on agent reliability (hangs, false success reporting, subagent adoption) and a coordinated security push around SSRF protections, OAuth socket reuse, and path-blocklist enforcement. Auto Memory quality and terminal corruption issues also continue to draw attention.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. Subagent recovery after MAX_TURNS falsely reports success**
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (P1, Bug, 8 comments, 2 👍)
The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit before performing any analysis. This misleads users into thinking work was done when it wasn't, and masks agent reliability issues. Community reaction is measured but the bug affects trust in subagent results.

**2. Generalist agent hangs forever**
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (P1, Bug, 7 comments, 8 👍)
When Gemini CLI defers to the generalist agent, it hangs indefinitely on simple tasks like folder creation. Users report waiting up to an hour before killing the session. A workaround exists (instructing the model not to use subagents), but the high 👍 count shows this is a widespread frustration.

**3. Shell command execution stuck on "Waiting input" after completion**
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (P1, Bug, 4 comments, 3 👍)
Simple CLI commands (e.g., `ls`, `git status`) complete successfully but the CLI remains in a "Waiting input" state, preventing further interaction. This blocks any multi-step workflow and is a frequent source of user frustration.

**4. Browser subagent fails on Wayland**
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (P1, Bug, 4 comments, 1 👍)
The browser subagent fails on Wayland display servers with a `Termination Reason: GOAL` — it reports success but never actually performs the task. Linux users on modern desktop environments are directly impacted.

**5. Gemini does not use skills and sub-agents enough**
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) (P2, Bug, 6 comments)
Users report that even with explicitly defined custom skills (e.g., `gradle`, `git`), Gemini rarely uses them autonomously. It only works when manually instructed, defeating the purpose of skill-based automation. This undermines the core value proposition of custom sub-agents.

**6. Auto Memory retries low-signal sessions indefinitely**
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (P2, Bug, 5 comments)
Auto Memory only marks a session as processed when the extraction agent successfully reads the transcript. If the agent judges a session as low-signal and skips it, that session remains unprocessed and can be surfaced indefinitely on subsequent extraction attempts, causing wasted API calls and repeated processing.

**7. OAuth socket-reuse regression breaks "Sign in with Google"**
[#28103](https://github.com/google-gemini/gemini-cli/issues/28103) (P2, PR attached, 0 comments)
A Node.js `http.Agent` socket-reuse regression on Node >= 24.17.0 causes `ERR_STREAM_PREMATURE_CLOSE` during OAuth token exchange. Users on newer Node versions are locked out of Google sign-in entirely. A PR is open but not yet merged.

**8. Negative Agent: destructive tool usage (git reset --force, etc.)**
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (P2, 3 comments, 1 👍)
In complex operations (git branch management, database maintenance), the agent can use destructive commands (`git reset`, `--force`) when safer alternatives exist. Community members are requesting better risk-awareness and safeguards from the agent.

**9. Subagents running without permission since v0.33.0**
[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) (P2, Bug, 2 comments)
After updating to v0.33.0, subagents began executing even when explicitly disabled in all configuration files. Users who only wanted MCP functionality found subagents (like generalist) running autonomously, raising trust and security concerns.

**10. 400 error with > 128 tools**
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (P2, Bug, 3 comments)
When more than ~128 tools are available (from built-in tools + MCP servers), the CLI throws a 400 error. Users with rich MCP configurations cannot use the CLI at all. Community expects smarter tool-scoping rather than a hard limit.

---

## Key PR Progress

**1. Fix OAuth socket reuse for Node >= 24.17.0**
[#28103](https://github.com/google-gemini/gemini-cli/pull/28103) (P2, size/m)
Prevents keep-alive socket reuse during OAuth token exchange, fixing a `ERR_STREAM_PREMATURE_CLOSE` crash that blocks Google sign-in on newer Node runtimes.

**2. Add SSRF protection to OAuth metadata discovery**
[#28112](https://github.com/google-gemini/gemini-cli/pull/28112) (size/l)
Adds `isLoopbackHost()` and `resolveAndValidateDns()` checks to the OAuth discovery flow in `oauth-utils.ts` and `oauth-provider.ts`, closing a coverage gap relative to the already-protected `web-fetch.ts`.

**3. DNS resolution before SSRF guard**
[#27744](https://github.com/google-gemini/gemini-cli/pull/27744) (Closed, size/m, size/l)
Resolves DNS hostnames *before* checking `isBlockedHost()`, preventing bypasses via wildcard DNS services like `127.0.0.1.nip.io` or `169.254.169.254.nip.io`. Already merged.

**4. Prevent SSRF via DNS hostnames and redirects**
[#27739](https://github.com/google-gemini/gemini-cli/pull/27739) (Closed, size/m, size/l)
Fixes two gaps in `web_fetch.ts`: private IPs behind DNS hostnames and redirect chains leading to internal targets. Already merged.

**5. Strip thoughts from scrubbed history turns**
[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) (size/m)
Resolves "Thought Leakage" — the model's internal monologues leaking into plain-text history turns, causing the model to emulate scratchpad thoughts or enter infinite loops in subsequent turns.

**6. Enforce case-insensitive sensitive path blocklist**
[#27966](https://github.com/google-gemini/gemini-cli/pull/27966) (size/m)
Implements robust case-insensitive matching for sensitive directories (`.git`, `.env`, `node_modules`), preventing bypasses through mixed-case paths. Also adds HITL (Human-in-the-Loop) guardrails for VS Code edits.

**7. Tool registry discovery for eval reporting**
[#28113](https://github.com/google-gemini/gemini-cli/pull/28113) (size/l)
Adds a small tool registry (`ALL_BUILTIN_TOOL_NAMES` + `TOOL_LEGACY_ALIASES`) with AST-based extraction of tool names used inside eval assertions, improving eval infrastructure.

**8. Drop late tool calls after SIGINT cancellation**
[#28096](https://github.com/google-gemini/gemini-cli/pull/28096) (area/agent, size/m)
Fixes a race condition where a SIGINT during a tool-call turn could still result in delayed side effects executing after the user has cancelled. Already merged.

**9. Don't offer to resume a session that wasn't saved**
[#27914](https://github.com/google-gemini/gemini-cli/pull/27914) (P2, size/m)
When disk writes hit `ENOSPC`, the chat recorder disables itself and stops saving. Previously, the exit summary still printed "To resume this session: gemini --resume <id>", which would fail. This PR suppresses the misleading message.

**10. Fix add missing activate() Disposables in VS Code companion**
[#27936](https://github.com/google-gemini/gemini-cli/pull/27936) (P2, size/s, size/m)
Fixes a JavaScript comma-expression bug in `activate()` that prevented some subscriptions from being properly tracked. This caused resource leaks and potential unregister behavior in the VS Code extension.

---

## Feature Request Clusters

**Agent Self-Awareness & Tooling**
Multiple requests ask the CLI to better understand its own mechanics — CLI flags, hotkeys, subagent capabilities, and internal configuration. [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) requests the agent act as its own expert guide. [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) asks for subagent trajectories to be visible via `/chat share` for easier debugging.

**AST-Aware Codebase Exploration**
A cluster of issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) proposes using AST-aware tools for more precise file reads (method bounds, not full files), smarter search, and codebase mapping. This would reduce token waste and turn counts.

**Auto Memory Quality Improvements**
Three related issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) request: deterministic redaction of secrets before sending to model context; stopping indefinite retries of low-signal sessions; and surfacing/quarantining invalid memory inbox patches. These aim to improve reliability and security of the Auto Memory system.

**Browser Agent Resilience**
[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) and [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) ask for better browser subagent behavior: automatic session takeover and lock recovery, plus respecting `settings.json` configuration overrides (e.g., `maxTurns`). Currently the browser agent is rigid and fail-fast.

**Zero-Dependency OS Sandboxing**
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) proposes leveraging the model's "bash affinity" with a lightweight, dependency-free sandbox for shell commands, plus post-execution intent routing. This would allow safer execution without requiring Docker or other heavy tooling.

---

## Developer Pain Points

1. **Agent Hangs & False Success Reporting** — The most frequent and highest-priority frustrations. Users consistently report agents hanging indefinitely (#21409, #25166) or reporting `status: "success"` when they actually hit turn limits (#22323). This erodes trust in automated workflows.

2. **Subagent Ignoring Configuration & Permissions** — Agents run even when disabled (#22093), ignore `settings.json` overrides (#22267), and rarely use custom skills autonomously (#21968). Developers feel they lack control over agent behavior.

3. **Terminal Corruption & Rendering Issues** — Flicker on resize (#21924), corruption after exiting external editors (#24935), and incorrect `\n` escape behavior (#22466) degrade the interactive experience, especially on Linux/Wayland.

4. **Security Gaps During OAuth & Web Fetch** — SSRF bypasses via DNS hostnames (#27739, #27744) and OAuth socket-reuse crashes on newer Node (#28103) create both security and availability problems. The active PRs show the maintainers are treating this seriously.

5. **Session & History Confusion** — Session resumption suggestions for unsaved sessions (#27914), thought leakage into history (#27971), and subagent trajectories not being shareable (#22598) all contribute to a fragmented debugging and workflow experience.

6. **Tool Overload / 400 Errors** — The 128-tool hard limit (#24246) blocks users with extensive MCP configurations, and no automatic tool-scoping exists to mitigate this.

---

*Data sourced from [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) as of 2026-06-24.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-24

## Today’s Update Brief
A single patch release (v1.0.64) landed yesterday improving symlink access transparency and pay-as-you-go billing feedback. Activity picked up sharply with 14 new triage issues filed in the last 24 hours, covering unexpected regressions (WSL launch failure on upgrade), UI rendering quirks, and several configuration/custom-provider edge cases. One minor PR remains open.

---

## Releases
**v1.0.64** (2026-06-23) — [Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.64)
- Path access prompts now show resolved symlink targets so you can see exactly what access is being granted.
- Pay-as-you-go additional usage budget is shown at launch, refreshed after a request is rejected for hitting the additional spend limit, and a friendly message is displayed when the addition is exceeded.

---

## Hot Issues (10 picks)

1. **#1944 [CLOSED] – Windows mouse wheel scroll captured by input box**
   Regression where scrolling conversation history instead scrolls the text input box. 11 comments, 3 👍. Appears to have been fixed.
   [Link](https://github.com/github/copilot-cli/issues/1944)

2. **#2486 [CLOSED] – MCP server blocked by policy**
   Personal Pro+ account saw MCP server blocked; workaround exists but user requests permanent fix. 7 comments.
   [Link](https://github.com/github/copilot-cli/issues/2486)

3. **#3501 [OPEN] – Scroll bar unaligns text on Windows**
   Since scroll bar introduction, text mis-renders on Windows Console Host and Terminal. 9 👍, strong community signal.
   [Link](https://github.com/github/copilot-cli/issues/3501)

4. **#2056 [OPEN] – Feature request: scheduled/recurring prompts**
   Users want agentic workflows to run on a cron-like schedule without manual input. 4 comments, 4 👍.
   [Link](https://github.com/github/copilot-cli/issues/2056)

5. **#2590 [OPEN] – Plugins from Marketplace unavailable via ACP**
   Plugins installed locally are visible in CLI but invisible to agents via Agent Client Protocol. 3 👍.
   [Link](https://github.com/github/copilot-cli/issues/2590)

6. **#3881 [OPEN] – Quota subtraction error with 6× multiplier**
   User reports 5% quota consumed instead of expected 2% for a Claude Sonnet 4.5 6× request. 1 comment.
   [Link](https://github.com/github/copilot-cli/issues/3881)

7. **#3866 [OPEN] – Thinking/reasoning text unreadable on dark backgrounds**
   Hardcoded dim foreground makes “Thinking…” text nearly invisible. 2 👍.
   [Link](https://github.com/github/copilot-cli/issues/3866)

8. **#3901 [OPEN] – Copilot cannot launch from WSL after upgrading to v1.0.64**
   Windows tool works, but WSL binary fails to load. Filed today, no comments yet.
   [Link](https://github.com/github/copilot-cli/issues/3901)

9. **#3892 [OPEN] – Session state never pruned causes EMFILE / VS Code crash**
   Accumulated `~/.copilot/session-state/` folders cause file descriptor exhaustion, crashing VS Code Copilot Chat. High impact.
   [Link](https://github.com/github/copilot-cli/issues/3892)

10. **#3899 [OPEN] – `rubber-duck` availability unclear under `/model auto`**
    Command is documented as manually invokable but not discoverable when `auto` resolves to a GPT/Claude model.
    [Link](https://github.com/github/copilot-cli/issues/3899)

---

## Key PR Progress (1 item)

- **#3873 [OPEN] – Add initial console log for greeting**
  Minor cosmetic change: adds a welcome log message on startup. 0 comments, no merge activity.
  [Link](https://github.com/github/copilot-cli/pull/3873)

---

## Feature Request Clusters

- **Agentic scheduling & automation**
  #2056 (scheduled/recurring prompts) – user wants agent workflows triggered by time, not only manual input.

- **Networking & private resource access**
  #3731 (restore web_fetch to private networks) – enterprise users blocked from internal templates/standards.

- **Model configuration & BYOK**
  #3888 (expose extended thinking independently of reasoning effort) – separate API parameters for Anthropic models.
  #3891 (sub-agent model override silently dropped in BYOK mode) – custom provider configs ignored.
  #3899 (document `/rubber-duck` eligibility under model auto) – clarity for experimental commands.

- **Voice / input**
  #3896 (typing during PTT finalize window loses dictated transcript) – PTT workaround needed.

- **Plugin / MCP compatibility**
  #2590 (Marketplace plugins unavailable via ACP) – inconsistency between CLI and protocol.
  #3889 (support stdio transport servers in ACP mode) – ACP spec compliance.
  #3893 (MCP servers with same name on different plugins loaded from last installed) – naming collision without warning.

---

## Developer Pain Points

- **Windows UI rendering regressions** – scroll bars misaligning text (#3501), hardcoded dark gray on dark backgrounds (#3866), OSC 11 background breaking text contrast (#3898).
- **Secret scanning blocking UI thread** (#3900) – synchronous scanning can freeze the TUI on large responses.
- **Session state accumulation** (#3892) – never pruned, leads to EMFILE and crashes VS Code Chat.
- **Multi-account authentication confusion** (#3897) – Copilot CLI picks wrong identity when multiple GitHub accounts are authenticated (EMU + personal).
- **Quota billing inaccuracies** (#3881) – 6× multiplier consuming 5% instead of 2%.
- **WSL upgrade breakage** (#3901) – v1.0.64 broke launch from WSL even though Windows binary works.
- **MCP server policy blocking** (#2486) – personal account suddenly blocked, workaround not permanent.
- **AgentStop hook cascading into infinite loops** (#3894) – custom hooks on subagents prevent `/review` from completing.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-24

## Today’s Update Brief
Activity on the `MoonshotAI/kimi-cli` repository was minimal today. No new releases or pull requests were created, and only one existing issue received an update. The sole piece of community feedback concerns a bug in the **yolo mode** where the CLI continues to prompt for approval despite being in an automated/trusted execution mode.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues
**1. [Bug] Kimi CLI is prompting for approval in yolo mode**
[#2448](https://github.com/MoonshotAI/kimi-cli/issues/2448)
- **Author:** [@iaindooley](https://github.com/iaindooley)
- **Created:** 2026-06-10 | **Updated:** 2026-06-23 | **Comments:** 1 | 👍: 0
- **Affected workflow:** Users running the CLI in `yolo` mode (supposed to skip manual approval for potentially destructive operations) on Debian with model `k2.6` and an API‑key‑based subscription. The bug forces them back into an interactive approval loop, breaking use cases that rely on unattended automation.
- **Community reaction:** Only a single comment exists; no upvotes or additional reports, suggesting this is either a niche setup or still under investigation.

---

## Key PR Progress
*No pull requests were found in the last 24 hours.*

---

## Feature Request Clusters
- **None observed.** The single issue is a bug report, not a feature request. No recurring themes can be identified from today’s data.

---

## Developer Pain Points
- **Yolo mode unreliability** – The only pain point surfaced today is the broken `yolo` mode, which undermines trust in the CLI’s ability to operate without human intervention. Developers who require a fully automated pipeline may find this blocking.
- **Low community engagement on the issue** – With zero upvotes and only one comment, it may indicate that few users are hitting this bug, or that the reporter’s environment (Debian, API‑key subscription, model `k2.6`) is uncommon. However, the lack of maintainer response in the public thread is also notable.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-24

## Today's Update Brief

No new releases were published in the last 24 hours. The community remained active with **50 issues and 50 pull requests** updated; top issues by comment count centered on pricing adjustments after DeepSeek V4 Pro price cuts, TUI feature requests, and multi-agent workflow bugs. Key PR activity included MCP resource tooling, session flow refactoring, and error message improvements.

## Releases

No new releases.

## Hot Issues

1. **[#28846] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction**
   *Author:* @icocoon | 83 comments | 82 👍
   Requests that OpenCode Go subscription limits be updated to reflect the 75% drop in DeepSeek V4 Pro API pricing.
   https://github.com/anomalyco/opencode/issues/28846

2. **[#4714] TUI – Search for and find string in session buffer**
   *Author:* @cwegener | 28 comments | 35 👍
   Long-standing request for a `/find`-like feature in the TUI to search agent output, similar to text editors.
   https://github.com/anomalyco/opencode/issues/4714

3. **[#15035] About agent-teams**
   *Author:* @boxiaolanya2008 | 25 comments
   Community asking when the `agent-teams` feature will be added to OpenCode.
   https://github.com/anomalyco/opencode/issues/15035

4. **[#19604] Write tool fails silently on large files (~1000+ lines)**
   *Author:* @jdocker8 | 12 comments | 9 👍
   Critical bug: the `Write` tool returns failure with no error message when writing files of around 1000 lines or more. Multiple retries do not help.
   https://github.com/anomalyco/opencode/issues/19604

5. **[#22225] Add skill usage tracking to CLI**
   *Author:* @zokan121522 | 12 comments
   Proposes local JSON-based tracking of skill invocations per session (`~/.config/opencode/skills/usage.json`).
   https://github.com/anomalyco/opencode/issues/22225

6. **[#11111] VIM Keyboard Layout**
   *Author:* @IvanProg00 | 12 comments | 34 👍
   Feature request for a Vim-style input mode in the message composer.
   https://github.com/anomalyco/opencode/issues/11111

7. **[#14212] Support more DBMS’ for OpenCode state storage**
   *Author:* @matthewijordan | 11 comments | 21 👍
   After moving to Drizzle for session storage, users want support for PostgreSQL and other DBMS.
   https://github.com/anomalyco/opencode/issues/14212

8. **[#6792] Task Tool Timeouts & Early Termination in Multi-Agent Conductor Pattern**
   *Author:* @DaveW001 | 10 comments | 2 👍
   Reports critical timeout/early termination issues when using the Task tool in a multi-agent conductor pattern (Researcher + Writer sub-agents).
   https://github.com/anomalyco/opencode/issues/6792

9. **[#32694] Bug: Worker has been terminated**
   *Author:* @y-matsuwitter | 8 comments | 4 👍
   TUI crashes after the first interaction with “Worker has been terminated”, making the session unusable. Occurs consistently even with minimal configuration.
   https://github.com/anomalyco/opencode/issues/32694

10. **[#30895] Desktop v1.16.0 converts WSL /mnt/c/… workspace to Windows C:\… path**
    *Author:* @sky10205 | 5 comments
    Bug: the desktop app resolves WSL paths incorrectly after opening a session, breaking file/session listing.
    https://github.com/anomalyco/opencode/issues/30895

## Key PR Progress

1. **#33560 – fix(core): simplify opencode connection flow**
   *Author:* @thdxr | Merged today
   Uses OpenCode Console URL directly instead of prompting for server; auto-selects first organization; renames OAuth method.
   https://github.com/anomalyco/opencode/pull/33560

2. **#33281 – feat(cli): add standalone v2 session flow**
   *Author:* @thdxr | Open
   Adds `--standalone` mode that runs a private server child process for the TUI; sessions created via v2 API with `DataProvider` and `SessionV2.Info`.
   https://github.com/anomalyco/opencode/pull/33281

3. **#33555 – feat(core): add opencode integration**
   *Author:* @thdxr | Merged
   Exposes OAuth method registration via v2 plugin hooks and adds the built-in OpenCode OAuth/API-key integration with org-scoped credentials.
   https://github.com/anomalyco/opencode/pull/33555

4. **#33559 – fix(app): clear followup queue on session revert, add remove button**
   *Author:* @MRZ07 | Open
   Fixes queued messages persisting after session revert/undo; adds per-item “Remove” button.
   https://github.com/anomalyco/opencode/pull/33559

5. **#33483 – feat(mcp): add resource read tools**
   *Author:* @nexxeln | Merged
   Adds model-callable MCP resource list/read tools; treats URIs as opaque keys and limits binary attachments to safe payloads. Fixes #15535, #17543.
   https://github.com/anomalyco/opencode/pull/33483

6. **#33546 – feat(mcp): add resource template listing**
   *Author:* @nexxeln | Merged
   Adds MCP resource template discovery through `resources/templates/list` and `list_mcp_resource_templates` tool.
   https://github.com/anomalyco/opencode/pull/33546

7. **#33553 – feat: enforce tagged error messages**
   *Author:* @rekram1-node | Open
   Adds Oxlint rule requiring `Schema.TaggedErrorClass` to expose a message; migrates operational errors.
   https://github.com/anomalyco/opencode/pull/33553

8. **#33530 – fix(core): preserve structured error messages**
   *Author:* @rekram1-node | Merged
   Stops squashing structured errors to `.message`; uses shared non-empty renderer for unknown errors and Effect Causes across background jobs, session tool failures, etc.
   https://github.com/anomalyco/opencode/pull/33530

9. **#33549 – feat(tui): redesign crash screen**
   *Author:* @rekram1-node | Merged
   Replaces the bare TUI crash fallback with a branded, responsive error screen.
   https://github.com/anomalyco/opencode/pull/33549

10. **#32213 – feat(app): add session panels**
    *Author:* @oshtz | Open
    Introduces opt-in tiled panel mode for open session tabs in the desktop app’s new UI.
    https://github.com/anomalyco/opencode/pull/32213

## Feature Request Clusters

- **TUI usability enhancements** – Recurring requests for in-buffer search (#4714), Vim keyboard layout (#11111), configurable newline/submit keybinds (#11898), and scrolling permission windows with keybinds (#14797).
- **Multi-agent patterns** – Several asks for formal `agent-teams` support (#15035), granular per-agent tool permissions (#17607), and sub-agent orchestration improvements (#6792).
- **Session export & history** – Users want `/export` in the desktop app (#31453) and better session archival/restoration (#26505).
- **Plugin & extension capabilities** – Requests for plugin access to image bytes for multimodal analysis (#20001), custom provider headers (#15306), UI plugins for services like Linear/Slack (#16874), and official patterns for mutating `cfg` in the `config` hook (#24065).
- **State storage diversity** – After Drizzle migration, users request support for PostgreSQL and other DBMS (#14212).

## Developer Pain Points

- **Silent write failures on large files** – `Write` tool fails without error for ~1000+ line files (#19604); high impact on productivity.
- **TUI crash after first message** – “Worker has been terminated” error forces restart on every conversation (#32694).
- **WSL path corruption** – Desktop v1.16.0 converts WSL `/mnt/c/…` paths to Windows `C:\…` breaking file/session access (#30895).
- **Write tool delete incidents** – One user reported that OpenCode deleted Node.js and corrupted the system PATH (#32080), raising serious reliability concerns.
- **Missing Scout sub-agent in autocomplete** – Desktop v1.15.4 does not list the built-in Scout sub-agent in `@` menu (#28100).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-06-24

## Today's Update Brief

Activity remains high with **2 new releases** (v0.19.0 and v0.19.1), **50 Issues** updated in the last 24 hours, and **50 Pull Requests** in motion. The community continues to drive focused quality improvements — a single contributor (tt-a1i) submitted a batch of 15+ integer validation fixes across CLI tools, session management, and MCP configuration, all merged within 24 hours. Meanwhile, new feature PRs around daemon voice APIs, auto-update, and TUI consistency entered review.

## Releases

**v0.19.1** (latest) – Adds MCP resource completion matching by name and automatic MCP server discovery via the CLI (`feat(cli): match MCP resource completions by name and discover servers`). This reduces manual configuration overhead for users integrating multiple MCP tools.

**v0.19.0** – Chore release preparing the v0.19 line. Includes CI automation for auto-publishing the VSCode companion extension after stable releases.

[View all releases](https://github.com/QwenLM/qwen-code/releases)

## Hot Issues (10 selected)

**1. VSCode plugin not showing in sidebar (latest versions)** [#4488](https://github.com/QwenLM/qwen-code/issues/4488)
- **Workflow**: User installs v0.16.0 in VS Code 1.120.0; the extension flashes briefly then disappears from the left sidebar.
- **Impact**: Blocks all VSCode-based Qwen Code interactions. Commenters confirm the extension works on VS Code 1.95.3 but fails on newer builds.
- **Reaction**: 7 comments, closed with `need-information`. Maintainers likely need version-specific reproduction.

**2. Session list cursor accepts negative and unsafe values** [#5708](https://github.com/QwenLM/qwen-code/issues/5708)
- **Workflow**: `session/list` pagination cursors generated from `mtimeMs` are validated only for `NaN`/`Infinity`, not for finite but invalid numeric cursors.
- **Impact**: Could cause REST/ACP clients to hang or receive malformed pagination responses. Tagged `welcome-pr`.
- **Reaction**: 6 comments, closed. Part of a 15-issue validation tightening batch by @tt-a1i.

**3. `.env` file API key not respected** [#3877](https://github.com/QwenLM/qwen-code/issues/3877)
- **Workflow**: User sets `OPENCODE_GO_API_KEY` in `~/.qwen/.env`, but `qwen` CLI still forces interactive authentication selection on startup.
- **Impact**: Breaks headless/automated workflows. User has been waiting since May 6; 1 upvote, 5 comments. Closed with `needs-triage`.

**4. Protocol/AuthType decoupling config compatibility** [#5758](https://github.com/QwenLM/qwen-code/issues/5758)
- **Workflow**: `modelId + baseUrl` only works in CLI; ACP and VSCode pass `providerId + modelId` strings. Need to map `providerId` to protocol for correct SDK routing.
- **Impact**: Users with custom providers see different behavior across CLI vs. VSCode/ACP. Tagged `need-discussion`.
- **Reaction**: 5 comments, open. References PR #5089.

**5. More frequent full prompt reprocessing after recent update** [#5736](https://github.com/QwenLM/qwen-code/issues/5736)
- **Workflow**: Local LLM (llama.cpp) is forced to re-process the full prompt history on every continuation turn, not just incremental tokens.
- **Impact**: Severe slowdown for local model users; 4x-10x latency increase reported. Tagged `welcome-pr`.
- **Reaction**: 4 comments, open. User suspects caching regression.

**6. Input box background rendering breaks on line wrap** [#5562](https://github.com/QwenLM/qwen-code/issues/5562)
- **Workflow**: In the interactive TUI, typing a long line that wraps to the next line leaves terminal background visible behind the input area.
- **Impact**: Visual-only but obtrusive. Reported by maintainer @yiliang114.
- **Reaction**: 4 comments, closed. Likely trivial fix.

**7. Semi-invisible cursor in Alacritty terminal** [#5713](https://github.com/QwenLM/qwen-code/issues/5713)
- **Workflow**: The TUI cursor is nearly invisible in Alacritty while working fine in Xterm. Alacritty uses a different cursor rendering path.
- **Impact**: Affects Alacritty users (common on macOS/Linux). Tagged `welcome-pr`.
- **Reaction**: 4 comments, closed.

**8. TUI consistency: replace emoji with Unicode text symbols** [#5787](https://github.com/QwenLM/qwen-code/issues/5787)
- **Workflow**: Proposal to replace emoji status icons (e.g., thought/summary icons) with established width-1 Unicode glyphs (`>`, `✦`, `●`, etc.) for consistent rendering across emoji-incompatible terminals.
- **Impact**: Follows existing TUI conventions; improves terminal compatibility. Tagged `welcome-pr`.
- **Reaction**: 2 comments, open. Likely to gain traction given similar PR #5788.

**9. WebFetch should reject URLs containing userinfo** [#5782](https://github.com/QwenLM/qwen-code/issues/5782)
- **Workflow**: `web_fetch` tool accepts URLs like `https://user:pass@host`, which could leak credentials in logs or UI before the request is even made.
- **Impact**: Security hardening for the web fetch tool. Tagged `welcome-pr`.
- **Reaction**: 2 comments, open.

**10. `qwen daemon` proposal for timed tasks** [#5768](https://github.com/QwenLM/qwen-code/issues/5768)
- **Workflow**: Suggests introducing a persistent `qwen daemon` process (registered as systemd/launchd service) to own cron/long-running tasks even when no foreground CLI session exists.
- **Impact**: Enables background automation without keeping a terminal open. Tagged `status/in-review`.
- **Reaction**: 2 comments, open. Aligns with multiple daemon-related PRs merged today.

## Key PR Progress (10 selected)

**1. Daemon workspace voice and control APIs** [#5765](https://github.com/QwenLM/qwen-code/pull/5765)
- Adds voice configuration, batch transcription, workspace trust requests, and permission rule management as REST/ACP/SDK surfaces. Voice is client-side rendered.
- Impact: Unlocks voice-driven workflows via the daemon.

**2. Voice dictation over daemon for Web Shell** [#5755](https://github.com/QwenLM/qwen-code/pull/5755)
- Streams microphone audio as 16kHz PCM to the daemon's WebSocket; server-side transcription via existing CLI pipeline.
- Impact: Browser-based voice input without native plugins.

**3. `qwen update` and `/update` commands** [#5780](https://github.com/QwenLM/qwen-code/pull/5780)
- Checks npm registry for latest version, supports automatic (standalone) or guided (npm/pnpm) updates.
- Impact: Simplifies update workflow; closes long-standing gap.

**4. Restore saved custom model IDs in auth wizard** [#5654](https://github.com/QwenLM/qwen-code/pull/5654)
- When re-opening `/auth`, custom model IDs added alongside built-in providers are no longer silently lost.
- Impact: Fixes data loss for users with custom model configurations.

**5. Optimize serve daemon startup** [#5785](https://github.com/QwenLM/qwen-code/pull/5785)
- Delays interactive UI, Ink rendering, and full settings until after HTTP listener is ready. Adds startup observability.
- Impact: Faster time-to-listener for `qwen serve`.

**6. Replace emoji icons with Unicode text symbols** [#5788](https://github.com/QwenLM/qwen-code/pull/5788)
- Aligns thinking/summary UI icons with the existing Unicode glyph vocabulary (`>`, `✦`, `●`). In response to issue #5787.
- Impact: Consistent rendering across all terminals.

**7. Workspace permissions rules API** [#5743](https://github.com/QwenLM/qwen-code/pull/5743)
- Adds `GET /workspace/permissions` and `POST /workspace/permissions` for querying and updating `allow`/`ask`/`deny` lists.
- Impact: Enables programmatic permission rule management.

**8. `/resolve` command for merge conflict automation** [#5779](https://github.com/QwenLM/qwen-code/pull/5779)
- Maintainers can trigger `@qwen-code /fix_conflicts` to auto-resolve conflicts on eligible PRs via the Qwen agent.
- Impact: CI improvement for reducing manual conflict resolution.

**9. Expose MCP resource read tool** [#5781](https://github.com/QwenLM/qwen-code/pull/5781)
- Makes MCP resources model-callable without `@...` syntax injection. Reads specific resources by server name and URI.
- Impact: First-class resource access for the assistant.

**10. Documentation index and Vertex AI auth** [#5727](https://github.com/QwenLM/qwen-code/pull/5727)
- Adds missing docs for Vertex AI auth type, missing CLI commands, and `qc-helper` entries.
- Impact: Closes 6 documentation gaps in `auth.md` and CLI docs.

## Feature Request Clusters

**Daemon & background automation**: Multiple requests converge on a persistent background process: [#5768](https://github.com/QwenLM/qwen-code/issues/5768) (daemon for timed tasks), [#5626](https://github.com/QwenLM/qwen-code/issues/5626) (Chrome extension via daemon + WebUI). The daemon-related PRs merged today (#5765, #5755, #5785) suggest this direction is already being built.

**Model selection & configuration**: [#5597](https://github.com/QwenLM/qwen-code/issues/5597) asks for `/model --vision` to configure a fallback vision model; [#5758](https://github.com/QwenLM/qwen-code/issues/5758) addresses protocol/auth decoupling for custom providers. Both stem from the same pain: multi-model workflows where text-only and vision models coexist.

**TUI consistency**: [#5787](https://github.com/QwenLM/qwen-code/issues/5787) and PR #5788 together push the TUI toward a uniform Unicode glyph set, replacing emoji for better cross-terminal compatibility. This follows a pattern of incremental TUI polish.

## Developer Pain Points

**Numeric validation gaps**: The single most reported bug pattern today — 15+ issues by @tt-a1i identifying places where CLI flags, tool parameters, env vars, and config fields accept fractional or negative values for integer-only fields (session limits, timeouts, line offsets, retry counts, etc.). All were closed within 24 hours with accompanying fix PRs. This suggests systematic validation hardening is a priority.

**Caching/prompt reprocessing regression**: Issue [#5736](https://github.com/QwenLM/qwen-code/issues/5736) reports that local LLM users see full prompt reprocessing on every turn after a recent update — a performance regression that makes local models nearly unusable. No maintainer response yet; 4 comments, tagged `welcome-pr`.

**VSCode compatibility uncertainty**: Issue [#4488](https://github.com/QwenLM/qwen-code/issues/4488) remains unresolved after a month; extension fails on VS Code >= 1.120.0. Affects a wide user base but maintainers are still requesting reproduction info.

**Environment variable inconsistency**: Issue [#3877](https://github.com/QwenLM/qwen-code/issues/3877) (API key in `.env` ignored) has been open since May 6 with no clear resolution — suggests a gap in environment loading logic that PR #5731 (chained env file loading) partially addresses.

</details>