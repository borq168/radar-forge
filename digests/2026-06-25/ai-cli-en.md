# AI CLI Tools Community Digest 2026-06-25

> Generated: 2026-06-25 00:33 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# AI CLI Tools Cross‑Tool Comparison Report — 2026-06-25

## 1. Daily Cross-Tool Overview

Seven AI CLI tools saw active community engagement today, with Claude Code shipping two patches, OpenAI Codex pushing five consecutive Rust alpha releases, and Qwen Code releasing four versions including a security patch. Cross‑tool activity clusters around token/rate‑limit economics, MCP integration reliability, session state management, and subagent orchestration failures. Two security vulnerabilities (SSRF in Claude Code, path traversal in Qwen Code) received same‑day PR responses, suggesting heightened maintainer attention to exploit vectors. Community frustration with opaque billing and unexpected model upgrades appeared across multiple tool communities independently.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Releases Today | Notable Maintainer Activity |
|------|---------------------|-------------------|----------------|------------------------------|
| Claude Code | 50 | 5 | 2 (v2.1.191, v2.1.190) | Two critical security PRs open; no PRs merged |
| OpenAI Codex | ~40+ | 10+ | 5 alpha releases | Ultra reasoning effort, MCP auth infrastructure merged |
| Gemini CLI | 50 | 43 | 0 | Tool registry discovery, Cloud Run webhook, security PRs |
| GitHub Copilot CLI | 50 | 1 | 1 (v1.0.65) | One merged PR for automated issue classification |
| Kimi Code CLI | 5 | 2 | 0 | MCP config propagation PR merged after multi-week review |
| OpenCode | 50 | 50 | 1 (v1.17.10) | MCP stacked PRs from community contributor Nomadcxx |
| Qwen Code | 25 | 50 | 4 (incl. nightly) | Path traversal security fix, CI pipeline improvements |

**Note:** Activity is measured by issues and PRs receiving updates in the last 24 hours, not unique items created today.

## 3. Shared Feature Directions

The following needs appeared across **two or more** tool communities in today's data:

### Skills / Plugins Organization
- **Claude Code** (#10238, 159 👍): Support subdirectories in `.claude/skills`
- **GitHub Copilot CLI** (#1632, 21 👍): Sub‑folder support for skills
- Both communities report flat namespace becoming unwieldy with 10+ custom skills/plugins.

### Session Persistence & Resumption
- **Gemini CLI** (#28053, #27971): Auto Memory retry cycles, thought leakage
- **GitHub Copilot CLI** (#3913, #3913 fixed in v1.0.65): Session resumption loses model selection or working directory
- **Kimi Code CLI** (PR #1942): MCP configs not preserved on resume
- **Qwen Code** (#5836): Wish for persistent project-local TODOs/plans across devices
- **OpenCode** (PR #33281, #33226): Standalone session flow with revert/sharing

### MCP Configuration Reliability
- **Claude Code** (#24057): MCP servers should auto-reload on config change
- **Kimi Code** (#2469): MCP servers launched from wrong directory; PR #1942 propagates configs
- **Gemini CLI** (PR #27964): MCP resource shadowing prevention
- **OpenCode** (PRs #32478-#32943, #33722): MCP subscriptions, templates, OAuth fixes
- **Qwen Code**: No MCP-specific issues today, but LSP remote status route added

### Model & Token Cost Transparency
- **Claude Code**: Multi‑account switching (#36151), token consumption rate (#42249)
- **OpenAI Codex**: 10–20× rate‑limit spike (#28879), burning tokens (#14593)
- **Kimi Code**: Usage calculation confusion (#1994), billing feels "funny"
- **GitHub Copilot CLI**: Quota deduction error (#3881)
- **Qwen Code**: Silent model upgrade to more expensive tier (#5819)

### Subagent & Background Task Visibility
- **Claude Code**: Background agents not fully stopping (#69238)
- **OpenAI Codex**: subagent close_agent hangs (#24389), orphaned subagents (#19197)
- **Gemini CLI**: Generalist agent hangs (#21409), subagent false success (#22323)
- **Kimi Code**: No subagent issues reported today (PR #1942 enabled MCP for subagents)
- **Qwen Code**: Background cron tasks silent, no management UI (#5823)

### Context Window Management
- **Claude Code**: Self-initiated context compaction (#33026)
- **OpenAI Codex**: Compaction loses operational continuity (#29356)
- **Qwen Code**: Full prompt reprocessing regression (#5736)
- **Kimi Code**: Compaction wastes ~20k tokens by reloading system prompt (#2472, new)
- **GitHub Copilot CLI**: Agent-triggered `/compact` request (#3916)

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot | Kimi Code | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|----------------|-----------|----------|-----------|
| **Release cadence** | Daily patches | Multiple alphas/day | No daily release | Weekly patches | Slow | Weekly/sprint | Daily builds + patches |
| **MCP maturity** | Hooks, limited MCP | Growing MCP infrastructure | MCP + tool registry | Plugin hooks | MCP just added full subagent support | Full MCP client push | LSP remote status, no MCP |
| **Primary pain point** | Token burn, Windows | Rate‑limit cost explosion | Subagent hangs | Session resumption, quotas | Token billing opacity | DB migration, MCP OAuth | CI testing gaps, background tasks |
| **Security posture** | Two critical PRs today (SSRF, command injection) | No security PRs today | Path resolution hardening, redaction | Internal classification only | No security issues today | No security PRs today | Path traversal fixed same day |
| **Community contributor depth** | Modest (5 PRs) | Active (10+ PRs, internal and external) | Very active (43 PRs) | Low (1 PR) | Low (2 PRs) | High (50 PRs, Nomadcxx driving MCP) | High (50 PRs, multiple contributors) |
| **Enterprise features** | GitLab, multi‑account, JetBrains | Service tier, org config | Component evals, private model | Enterprise SSO, EMU telemetry | Custom endpoints | Entra auth, private server mode | Custom models, voice dictation |
| **Platform stability** | Windows regressions reported | macOS temp directory leak | Wayland browser agent broken | Linux AppImage library leak | Arch Linux loop bug | Windows segfaults | Terminal scroll/flicker issues |

## 5. Community Activity Notes

- **Most releases today:** OpenAI Codex (5 alpha releases), Qwen Code (4 releases including nightly). Claude Code shipped 2 patches.
- **Highest PR throughput:** OpenCode (50 PRs updated), Qwen Code (50 PRs), both showing sustained contributor activity.
- **Highest issue activity:** Claude Code (50 issues), GitHub Copilot CLI (50 issues), Gemini CLI (50 issues) — tied at the reporting ceiling.
- **Most maintainer‑visible response:** Claude Code closed #69238 ("No response from API") as fixed in v2.1.191; Qwen Code triaged a P1 security vulnerability (#5834) to PR #5829 within hours.
- **Most community frustration:** OpenAI Codex #14593 (620 comments, token burning) and #28879 (133 comments, 10–20× cost spike) continue to generate the most community engagement across all tools.
- **Least activity:** Kimi Code CLI (5 issues, 2 PRs, no release) — lowest activity among the seven tools today.

## 6. Evidence-Backed Observations

1. **Token consumption and rate‑limit opacity is the dominant cross‑tool user pain point.** Four tools (Claude Code, OpenAI Codex, Kimi Code, GitHub Copilot CLI) have active high‑engagement issues where users report unexpected billing behavior. OpenAI Codex shows the most severe — a 10–20× rate‑limit consumption increase in the past week (#28879). Kimi Code users report the model’s chain‑of‑thought burns quotas unexpectedly (#1994). No tool offers a transparent breakdown of per‑action token cost.

2. **Subagent and background automation reliability remains fragile across the board.** Gemini CLI (#21409, #22323), OpenAI Codex (#24389), Claude Code (#69238), and Qwen Code (#5823) all have open issues where background agents hang, report false success, or lack user control. The consistent pattern across tools: once multi‑agent capabilities exceed single turned interactions, recovery and observability degrade sharply.

3. **MCP integration is accelerating but unevenly adopted.** OpenCode (Nomadcxx’s stacked PRs: #32478, #32936, #32943) and Kimi Code (PR #1942) are making explicit MCP improvements this week. Gemini CLI has MCP resource scoping (PR #27964). Claude Code has open MCP auto‑reload request (#24057). Qwen Code has no MCP coverage — instead adding remote LSP status, a different integration pattern. This suggests the ecosystem is still deciding on a standard agent‑tool protocol.

4. **Windows and Linux platform stability is a recurring but secondary pain point.** Claude Code has multiple Windows issues (#67595, #54461, #69786, #67406). OpenCode has Windows segfaults (#31607, #28121). GitHub Copilot CLI has Linux AppImage issues (#3925). Kimi Code has a long‑standing Arch Linux loop bug (#640). These are lower‑volume than token issues but affect specific user segments significantly.

5. **CI/CD and test automation gaps are visible in mid‑maturity tools.** Qwen Code (#5219, #5665) and Gemini CLI (#24353) have open discussions about integration tests not running on PRs or needing expansion. This is notably absent from Claude Code and OpenAI Codex digests — likely because their internal CI processes are not surfaced to community. Tools with more contributor‑driven development (OpenCode, Qwen Code) expose these infrastructure gaps more visibly.

No clear cross‑tool signal for a single killer feature or paradigm shift emerged from today’s data. The dominant pattern is incremental reliability improvement and cost management — not architectural breakthroughs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-25

## Today's Update Brief

Two patch releases shipped today: v2.1.191 brings `/rewind` recovery after `/clear`, improved scroll behavior, and a background agent lifecycle fix. Community activity remains high with 50 updated issues and 5 new PRs, mostly focused on Windows reliability, authentication edge-cases, and model configuration regressions.

## Releases

- **[v2.1.191](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)** — `/rewind` support for resuming a conversation after `/clear`; fixed scroll position jumping to bottom during streaming; fixed background agents not fully stopping after being stopped from the tasks panel.
- **[v2.1.190](https://github.com/anthropics/claude-code/releases/tag/v2.1.190)** — Bug fixes and reliability improvements (no further details).

## Hot Issues

10 noteworthy items from the updated issues feed:

1. **[#36151](https://github.com/anthropics/claude-code/issues/36151) — Multi-account switching without shared email** (106 comments, 372 👍)
   Long-running request for mobile app account switching. No maintainer response in this update cycle.
   *Affected workflow: users with multiple Anthropic accounts (personal/work) who cannot switch without logging out.*

2. **[#52151](https://github.com/anthropics/claude-code/issues/52151) — Opus 4.7 via Bedrock: VSCode extension stream ends with 0 events** (48 comments, closed)
   Bug reproduces only in VSCode GUI, not CLI. Title labels suggest fixed or closed, but comment thread shows ongoing frustration with fallback rendering "Unhandled case: [object Object]".
   *Impact: enterprise users on AWS Bedrock get silent failures in VSCode.*

3. **[#10238](https://github.com/anthropics/claude-code/issues/10238) — Support subdirectories in skills** (45 comments, 159 👍)
   Community strongly wants nested skill organization. No maintainer update in this window.
   *Workflow: large teams with many .claude/skills files struggle with flat file limits.*

4. **[#12346](https://github.com/anthropics/claude-code/issues/12346) — GitLab integration** (44 comments, 108 👍)
   Request for repository connection, MRs, and mobile access for GitLab-hosted projects.
   *Pain point: GitLab-exclusive teams are locked out of current git integration features.*

5. **[#24057](https://github.com/anthropics/claude-code/issues/24057) — MCP servers/hooks/plugins should auto-reload on config change** (28 comments)
   User reports requiring three restarts in a single session to test config tweaks.
   *Workflow friction: breaks context and slows iterative configuration.*

6. **[#2254](https://github.com/anthropics/claude-code/issues/2254) — Disable welcome banner** (28 comments, 91 👍)
   Persistent request to suppress the startup screen and tips.
   *Affects: users who open Claude Code frequently and want a clean terminal upon launch.*

7. **[#47166](https://github.com/anthropics/claude-code/issues/47166) — JetBrains plugin** (26 comments)
   Request for a native JetBrains IDE plugin matching VSCode extension capabilities. Labeled `duplicate`, indicating existing tracking.
   *Impact: JetBrains users currently have no native integration.*

8. **[#42249](https://github.com/anthropics/claude-code/issues/42249) — Extreme token consumption** (25 comments, 17 👍)
   Normal dev tasks deplete daily quota in ~1 hour. No conclusive fix identified.
   *Pain point: quota burn rate feels abnormal; impacts heavy CLI users.*

9. **[#69238](https://github.com/anthropics/claude-code/issues/69238) — "No response from API" when Advisor triggers** (24 comments, 34 👍)
   Sonnet base + Opus 4.8 Advisor hits retry loops with "check your network" errors.
   *Workflow: Advisor feature effectively unusable for affected users.*

10. **[#12433](https://github.com/anthropics/claude-code/issues/12433) — macOS process name shows version number** (22 comments, 23 👍)
    Activity Monitor shows "2.0.53" instead of "claude". Low severity but affects process management.
    *Impact: confusing for users who monitor processes; makes `killall` harder.*

## Key PR Progress

Only 5 pull requests were updated in the last 24 hours. All remain open:

1. **[#70634](https://github.com/anthropics/claude-code/pull/70634)** — `fix: handle server rate limiting during normal usage`
   Addresses #70631. Implements backoff handling for server-side rate limits.

2. **[#70633](https://github.com/anthropics/claude-code/pull/70633)** — `fix: Handle rate limiting headers for Anthropic API`
   Companion to #70634; parses and reacts to rate limit headers.

3. **[#70582](https://github.com/anthropics/claude-code/pull/70582)** — `fix: the application accepts user-controlled urls... in llm.py`
   Critical severity security fix (V-001) in `plugins/security-guidance/hooks/llm.py`. Scanner-identified SSRF vulnerability.

4. **[#66854](https://github.com/anthropics/claude-code/pull/66854)** — `toekn` (title is likely a typo)
   No description. Low-signal PR; may be abandoned or test.

5. **[#70538](https://github.com/anthropics/claude-code/pull/70538)** — `fix: sanitize subprocess call in gitutil.py`
   Another critical security fix (V-001) in `plugins/security-guidance/hooks/gitutil.py`. Command injection prevention.

**Note:** No PRs were merged today. All five are open and awaiting review.

## Feature Request Clusters

Recurring themes from today’s issue set (not predictions, just observed groupings):

### Platform/IDE Integration Expansion
- **JetBrains plugin** (#47166) — duplicate issue tracking a native IntelliJ interface.
- **GitLab integration** (#12346) — repository connection, MRs, mobile access.
- **Multi-account switching** (#36151) — especially for mobile where shared email isn’t ideal.
- **Remote control attach** (#70699) — ability to attach local terminal to a session started from phone.

### Configuration & UX Refinements
- **Skills subdirectories** (#10238) — nesting support for `.claude/skills`.
- **Disable welcome banner** (#2254) — toggle for startup tips.
- **MCP/hooks auto-reload** (#24057) — avoid restart on config change.
- **Vim mode doc update** (#70705) — slash-command hint missing from docs.

### Model & Context Management
- **opusplan[1m] preset** (#53987) — 1M context for Sonnet 4.6 in plan mode.
- **Self-initiated context compaction** (#33026) — allow Claude to prepare before compaction is forced.

## Developer Pain Points

Recurring frustrations based on comment volume and issue replication reports:

- **Token consumption rates** — #42249 reports quotas draining within minutes under normal usage; multiple users concur (17 👍 in 24h).
- **API rate limits / Advisor errors** — #69238 (24 comments, 34 👍) shows that Advisor triggers cause retry loops; two PRs (#70634, #70633) attempt to improve handling.
- **Windows-specific regressions** — #67595 (plugin install EBUSY from Defender), #54461 (desktop app can’t change directory/open new chat), #69786 (subscription auth not recognized on Windows), #67406 (rendering stutter and orphan processes). Multiple labels and comments suggest Windows remains a trouble spot.
- **Model downgrade surprises** — #65512 (opusplan downgrades to Sonnet past 200k), #67942 (subagents inherit wrong model), #66407 (Windows app silently changed Cowork space model). Users report unexpected model switches without clear indication.
- **Scrollback and seek** — #70309 (1 comment but 2 👍) newly opened: native terminal scrollbar lost, in-app scroll painfully slow in macOS Terminal and Konsole over RDP.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-25

## Today’s Update Brief

The team pushed five consecutive Rust alpha releases (v0.143.0-alpha.11 through .15) in the last 24 hours, indicating active iteration on the CLI. Community activity remains high: the top two issues about token/rate-limit spikes together have over 750 comments and 540 reactions, while several new PRs land infrastructure for Ultra reasoning effort, MCP authentication, and clock sleep tooling. No release notes beyond version bumps were provided.

## Releases

- [rust-v0.143.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.11)
- [rust-v0.143.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.12)
- [rust-v0.143.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.13)
- [rust-v0.143.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.14)
- [rust-v0.143.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.15)

All are labelled “Release 0.143.0-alpha.X” with no further changelog. The high cadence likely addresses emergent bugs from the previous week.

## Hot Issues

1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
   Business plan user on VS Code reports their token budget drains in minutes. 620 comments, 271 👍. Remains open since March.

2. **[#28879 – Rate-limit cost per token jumped 10–20x since June 16](https://github.com/openai/codex/issues/28879)**
   Plus plan user shows budget for gpt-5.5 dropping from 20+ prompts to 2–3 prompts. Session logs confirm ~10–20× increase in limit consumption per token. 133 comments, 269 👍.

3. **[#13733 – Background process polling wastes tokens](https://github.com/openai/codex/issues/13733)**
   Running long builds (cargo build/test) triggers a polling loop that re-sends full conversation history on each status check, burning credits without meaningful progress. 29 comments, 23 👍.

4. **[#21753 – Full Claude Code Hook Parity](https://github.com/openai/codex/issues/21753)**
   Umbrella request for 29+ hook lifecycle events (pre-exec, post-exec, approval, etc.) matching Claude Code’s automation surface. 18 comments, 17 👍.

5. **[#29072 – Windows sandbox: apply_patch fails](https://github.com/openai/codex/issues/29072)**
   `apply_patch` calls fail because `codex-windows-sandbox-setup.exe` cannot launch from the app package path. 17 comments, 16 👍.

6. **[#2916 – OpenAI service tier support](https://github.com/openai/codex/issues/2916)**
   CLI lacks `service_tier` config to control API cost/latency. 17 comments, 50 👍. Request dates back to August 2025.

7. **[#15299 – Support inbound MCP notifications into active session](https://github.com/openai/codex/issues/15299)**
   External channels (e.g., chat) cannot push messages into a running CLI session via MCP. 14 comments.

8. **[#29356 – Context compaction loses operational continuity](https://github.com/openai/codex/issues/29356)**
   Pro user reports automatic compaction drops recent steps, breaking long-running tasks. Suggests preserving the last 5 verbatim. 13 comments.

9. **[#25667 – macOS app leaves 965MB code_sign_clone directories](https://github.com/openai/codex/issues/25667)**
   Every launch creates ~965MB of orphaned clone directories that persist after quit. 12 comments, 18 👍.

10. **[#24389 – multi_agent_v1.close_agent can hang for hours](https://github.com/openai/codex/issues/24389)**
    Closing an unresponsive subagent blocks the parent thread for >8 hours. 11 comments.

## Key PR Progress

1. **[#29924 – Represent MCP authentication with an enum](https://github.com/openai/codex/pull/29924)**
   Replaces boolean `use_chatgpt_auth` with an enum distinguishing OAuth vs ChatGPT-session flows. Stacked on #29733.

2. **[#29923 – Support external clock sleeps](https://github.com/openai/codex/pull/29923)**
   Routes `clock.sleep` through a configured current-time provider, raises max duration to 12h, adds `currentTime/sleep`/`wake` notifications for external clocks.

3. **[#29910 – Nest sleep config under current time reminder](https://github.com/openai/codex/pull/29910)**
   Moves `clock.sleep` enablement from top-level `[features]` into `[features.current_time_reminder]`, removes standalone `SleepTool` flag.

4. **[#29710 – Derive multi-agent mode from Ultra effort (closed, code-reviewed)](https://github.com/openai/codex/pull/29710)**
   Once Ultra selects proactive delegation, deriving the effective mode from the turn prevents conflicting sources of truth. Merged.

5. **[#29683 – Add managed new-thread model settings](https://github.com/openai/codex/pull/29683)**
   Admins get persistent defaults for model, reasoning effort, and service tier on new App threads, overriding config.toml but yielding to explicit user choices.

6. **[#29709 – Add gated Ultra reasoning effort (code-reviewed)](https://github.com/openai/codex/pull/29709)**
   Ultra reasoning effort is only discoverable when both model catalog and `multi_agent_mode` feature opt in, without introducing a new backend token.

7. **[#29907 – Namespace sleep under clock (closed, code-reviewed)](https://github.com/openai/codex/pull/29907)**
   Renames `sleep` to `clock.sleep` to align with `clock.curr_time` in the model-visible namespace. Merged.

8. **[#29030 – Respect image generation feature gate for standalone tool (closed)](https://github.com/openai/codex/pull/29030)**
   Reuses existing image generation availability predicate for the standalone `imagegen` extension, fixing a gap where hosted generation was gated but standalone wasn’t.

9. **[#26705 – TUI Plugin Sharing 5 – polish remote plugin catalog rows (code-reviewed)](https://github.com/openai/codex/pull/26705)**
   Final PR in the stack: admin-disabled plugins appear as blocked/view-only, admin-installed plugins count/sort correctly, plus UI polish.

10. **[#29754 – Preserve live turn history across reconnects (App Server)](https://github.com/openai/codex/pull/29754)**
    Running thread resumes now reconstruct a cumulative authoritative turn history from typed items and deltas, fixing loss of live progress on disconnect.

## Feature Request Clusters

### Hook and Automation Surface Parity
- [#21753](https://github.com/openai/codex/issues/21753) – Full Claude Code hook parity (29+ lifecycle hooks)
- [#2062](https://github.com/openai/codex/issues/2062) – Monitor background services
- [#22003](https://github.com/openai/codex/issues/22003) – Inject command output from background completion into active session

### MCP Integration Improvements
- [#15299](https://github.com/openai/codex/issues/15299) – Inbound MCP notifications into CLI sessions
- [#15355](https://github.com/openai/codex/issues/15355) – Opt-in local ingress for trusted controllers (bypass PTY emulation)

### Session Synchronization and Background Process Support
- [#14722](https://github.com/openai/codex/issues/14722) – Sync CLI and app-server sessions across devices
- [#14677](https://github.com/openai/codex/issues/14677) – Upgrade Alt+Up queue navigation into a full queued-message editor

### Cost / Rate-Limit Controls
- [#2916](https://github.com/openai/codex/issues/2916) – OpenAI service tier support for cost optimization
- [#13733](https://github.com/openai/codex/issues/13733) – Background polling wastes tokens (related to token efficiency)

## Developer Pain Points

- **Explosive token consumption**: Two high-traffic issues (#14593, #28879) report drastic rate-limit spikes and token burning, with the latter showing a 10–20× budget drain since mid-June. Community frustration is high; many report workflows becoming unusable.
- **Subagent reliability**: Orphaned subagents (#19197) and close_agent hanging for hours (#24389) break long-running multi-agent tasks.
- **Platform-specific bugs**: Windows sandbox setup fails for `apply_patch` (#29072) and macOS app leaves ~1GB of temporary directories per launch (#25667). These affect daily use for desktop app users.
- **Context compaction breaking long tasks**: Automatic compaction discards recent steps, forcing users to restart lengthy sessions (#29356). No workaround documented.
- **MCP tool regression for custom/local providers**: Since v0.117.0, MCP tool invocation is unreliable when using Ollama or other local models (#19871), blocking self-hosted setups.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-25

## Today's Update Brief

No new releases were published in the last 24 hours, but the project remains highly active with **50 open issues and 43 pull requests** receiving updates. The majority of activity centers on agent reliability (subagent hang/crash recovery, Auto Memory quality), security hardening (path resolution, redaction), and core UX fixes (terminal flicker, shell execution stalls). Several maintainer-only issues and PRs signal ongoing internal eval infrastructure work.

## Releases

No releases in the last 24 hours.

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**
   `codebase_investigator` subagent claims `status: "success"` and `Termination Reason: "GOAL"` even after hitting the turn limit before doing any analysis. This misreporting masks real failures and makes debugging agent behavior difficult. Community reaction: moderate engagement (8 comments, 2 👍). Affected workflow: subagent orchestration and reporting.

2. **[#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**
   An epic tracking expansion of the behavioral eval system from 76 tests to broader coverage across all 6 supported Gemini models. Maintainer-only discussion (7 comments) about eval infra scaling. Affected workflow: quality assurance and model regression testing.

3. **[#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**
   Epic investigating whether AST-aware tools can reduce turn count, token noise, and misaligned reads. 7 comments, 1 👍. Community interest from power users seeking more precise codebase navigation. Affected workflow: file editing and code search tools.

4. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**
   High-impact bug (8 👍, 7 comments) — Gemini CLI hangs forever when it defers to the generalist agent for simple tasks like folder creation. Users report one-hour waits before cancelling. A workaround (instructing the model not to use subagents) exists but is not obvious. Affected workflow: Any task involving the generalist agent.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**
   Community reports that even with well-described custom skills (e.g., gradle, git), Gemini rarely invokes them autonomously. Requires explicit instructions. 6 comments. Affected workflow: skill and subagent adoption in real-world use.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**
   Security concern: Auto Memory reads local transcripts and sends them to the model, relying on the extraction prompt to redact secrets — after content is already in model context. 5 comments. Affected workflow: memory-sensitive environments and data privacy.

7. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**
   Auto Memory only marks sessions as processed when the extraction agent reads the transcript. If the agent skips a low-signal session, it remains unprocessed and resurfaces indefinitely. 5 comments. Affected workflow: background memory extraction, causing wasted API calls.

8. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**
   Simple CLI commands (e.g., ls, echo) appear as "Awaiting user input" even after the subprocess has finished. 4 comments, 3 👍. Affected workflow: shell execution, a core primitive.

9. **[#21983 — browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
   Browser agent terminates with `GOAL` but fails silently on Wayland. 4 comments, 1 👍. Affected workflow: browser automation on Linux/Wayland systems.

10. **[#21000 — Experiment with using native file tools for creating and maintaining the task tracker](https://github.com/google-gemini/gemini-cli/issues/21000)**
    Proposal to replace the task tracker with native file tools. 4 comments, customer-issue label. Affected workflow: task management inside agent sessions.

## Key PR Progress

1. **[#28015 — feat(caretaker): implement Cloud Run webhook ingestion service](https://github.com/google-gemini/gemini-cli/pull/28015)**
   New Cloud Run webhook ingestion service for the Caretaker Agent. Verifies GitHub webhook signatures, stores issues via Firestore, and publishes metadata to Pub/Sub. Large PR (size/l, size/xl).

2. **[#28113 — Feat/tool registry discovery (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/28113)**
   Adds a small tool registry for eval reporting with AST extraction of tool names used in assertions. Groups built-in tools into categories. Supports automated eval generation.

3. **[#27966 — fix(security): enforce case-insensitive sensitive path blocklist and vscode hitl](https://github.com/google-gemini/gemini-cli/pull/27966)**
   Implements case-insensitive blocklist for `.git`, `.env`, `node_modules` to prevent path-traversal-style prompt injection. Also fixes VSCode Human-In-The-Loop handling.

4. **[#28132 — fix(ci): prevent workspace binary shadowing in release verification (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/28132)**
   Fixes a CI bug where `npm ci --ignore-scripts` caused integration tests to run against local source instead of the published NPM bundle.

5. **[#27636 — perf: optimize VirtualizedList and fix click handling](https://github.com/google-gemini/gemini-cli/pull/27636)**
   Optimizes rendering for large datasets, improves click handling for static items, and updates terminal rendering. Priority/p1, size/xl.

6. **[#27971 — fix(core): strip thoughts from scrubbed history turns and resolve thought leakage](https://github.com/google-gemini/gemini-cli/pull/27971)**
   Fixes "Thought Leakage" — model internal monologues leaking into plain-text history turns, causing infinite loops. Strips model thoughts from scrubbed history.

7. **[#28054 — fix(auth): strip URL punctuation in sign-in errors](https://github.com/google-gemini/gemini-cli/pull/28054)**
   Fixes clickable URLs in sign-in error messages by removing trailing periods from HTTP(S) URLs. Priority/p2, help wanted.

8. **[#28053 — fix(core-tools): resolve defensive path resolution for at-reference files and fix macOS tests](https://github.com/google-gemini/gemini-cli/pull/28053)**
   Defensive path resolution fix for `read_file`, `replace`, `write_file` when model passes paths prefixed with `@` (e.g., `@policies/new-policies.txt`). Large PR (size/xl).

9. **[#27964 — fix(mcp): scope resource resolution to prevent cross-server URI confusion (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/27964)**
   Prevents MCP resource shadowing: if two servers expose the same URI, resolution fails closed instead of silently returning the wrong resource.

10. **[#26680 — feat: implement ADK agent session (CLOSED)](https://github.com/google-gemini/gemini-cli/pull/26680)**
    Implements ADK (Agent Development Kit) agent session support. Large feature PR (size/xl, priority/p1).

## Feature Request Clusters

**AST-aware tooling** (issues #22745, #22746): Multiple requests to investigate AST-aware file reads, codebase mapping, and CLI tools for more precise method-level operations. No experimental results shared publicly yet.

**Auto Memory reliability** (issues #26516, #26522, #26523, #26525): A cluster of bugs and feature requests targeting the Auto Memory system — indefinite retries on low-signal sessions, invalid inbox patches not being quarantined, secret redaction happening after content is already in model context, and general quality improvements.

**Subagent trajectory transparency** (issues #22598, #21763): Requests to make subagent trajectories visible and shareable via `/chat share`, and for bug reports to include subagent context. Users want to debug and share full agent execution traces.

**Component-level evaluation infrastructure** (issues #24353, #21000, #23313): Continued investment in behavioral evals, including making the steering eval always pass, expanding the 76 existing tests, and experimenting with native file tools for task tracking.

## Developer Pain Points

- **Agent hangs and stalls**: Multiple reports of the generalist agent hanging indefinitely (#21409), shell commands stuck at "Waiting input" (#25166), and interactive prompts blocking progress (#22465). These make the CLI unreliable for unattended or batch workflows.
- **Subagent failure modes**: Subagents (browser, codebase_investigator) fail silently or report success on actual failures (#22323, #21983, #22267). This erodes trust in subagent outputs and requires manual verification.
- **Configuration and permission issues**: Subagents running despite being disabled in settings (#22093), browser agent ignoring `settings.json` overrides (#22267), and missing `settings.json` merge logic for `maxTurns`.
- **Security and redaction gaps**: Secrets sent to model before redaction (#26525), path traversal risk through case-insensitive blocklists (#27966), and thought leakage exposing internal reasoning (#27971).
- **Terminal UX regressions**: Terminal corruption after exiting external editors (#24935), high flicker on terminal resize (#21924), and inconsistent tool output borders (#24819).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-25

## Today's Update Brief

A single patch release (v1.0.65) went out yesterday, fixing working‑directory persistence and a false filesystem‑permission prompt. Issue activity remains high — 50 total issues updated in the last 24 hours, with several new bug reports around session resumption, quota miscalculation, and mobile/slash‑command gaps. One PR for automated issue classification was merged.

---

## Releases

### v1.0.65 (2026-06-24)
- `/cd` now persists the working directory when resuming a session and discovers custom agents in the new directory.
- Commands with slash‑prefixed string arguments (e.g. `--body "/azp run"`) no longer trigger spurious filesystem permission prompts.
- Fullscreen timeline stays anchored (details truncated in source).

---

## Hot Issues

Picked 10 issues that saw high engagement or represent recent regressions/feature blockers.

1. **[#2643 – preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow](https://github.com/github/copilot-cli/issues/2643)**
   *area:plugins* – Users writing `preToolUse` hooks cannot achieve silent rewrites; the CLI always shows a confirmation dialog. 11 comments, 2 👍. Workflow: automated tool‑calling pipelines where hooks should be invisible to the user.

2. **[#1632 – Support subfolders for skills to better organize them](https://github.com/github/copilot-cli/issues/1632)**
   *area:plugins* – Users with 10+ custom skills want to group them in sub‑directories. Flat structure is unwieldy. 9 comments, 21 👍 – strongest community demand in the list.

3. **[#3832 – All models show as 'Blocked/Disabled' after June 16 outage](https://github.com/github/copilot-cli/issues/3832)**
   *Bug* – Post‑outage (June 16) the model selection UI permanently shows all models as blocked. 6 comments, 13 👍. Closed, but the fix is not yet confirmed in release notes.

4. **[#3881 – GH Copilot CLI subtracted 5% for one request with 6x multiplier instead of 2%](https://github.com/github/copilot-cli/issues/3881)**
   *area:models* – User reports quota deduction of 5% for a 2%‑expected request; claims 3% overcharge. 3 comments. Workflow: premium‑tier accounting.

5. **[#3913 – model selection empty when resuming a session](https://github.com/github/copilot-cli/issues/3913)**
   *area:sessions, area:models* – Resuming a previous session leaves the model list empty; new sessions work fine. 3 comments, 1 👍. Reported against v1.0.64, now closed.

6. **[#2419 – Configurable Key Bindings (Enabling Fast Model Switching)](https://github.com/github/copilot-cli/issues/2419)**
   *area:models* – User wants F‑keys bound to `/model` commands to avoid memorizing model IDs. 2 comments, 5 👍. Recurring request alongside #1729.

7. **[#1729 – Configurable Keybinds](https://github.com/github/copilot-cli/issues/1729)**
   *area:input-keyboard* – General request for user‑defined keybindings, similar to #2419 but broader. 2 comments, 5 👍.

8. **[#3760 – CLI shows "ctrl+enter enqueue" but "ctrl+enter" adds a line break and "ctrl+q" is the enqueue command](https://github.com/github/copilot-cli/issues/3760)**
   *area:input-keyboard, area:platform-windows* – In‑app hint mismatches actual behaviour on Windows. 1 comment, 1 👍. Affects new users onboarding.

9. **[#3895 – CLI needs to be capturing restricted data for internal MSFT EMU users](https://github.com/github/copilot-cli/issues/3895)**
   *triage* – Enterprise feature request for telemetry on Microsoft EMU accounts. No reproduction steps; opened by internal employee.

10. **[#3909 – Feature: enterprise/org server-managed settings (incl. `env`) for the local Copilot CLI](https://github.com/github/copilot-cli/issues/3909)**
    *area:enterprise, area:configuration* – Org admins want to push centralized config (e.g. env vars) to local CLI installs, currently only possible in Codespaces. 1 comment.

---

## Key PR Progress

Only one pull request was updated in the last 24 hours:

- **[#2587 – Add automated issue classification with GitHub Agentic Workflows](https://github.com/github/copilot-cli/pull/2587)** (CLOSED)
  Author: @andyfeller – Introduces an AI‑powered workflow (`gh-aw`) that automatically applies `area:` labels and the `triage` label when issues are opened or reopened. Merged June 24. This is an internal process improvement, not a user‑facing change.

---

## Feature Request Clusters

Several recurring themes emerged from this day’s issues:

- **Configurable keybindings** – #2419 (fast model switching), #1729 (general key rebinding), #2680 (shell command history recall) all ask for user‑definable shortcuts to avoid memorising `/` commands or model IDs.
- **Better plugin/skill organisation** – #1632 (sub‑folders for skills) and #3917 (interactive plugin/marketplace selection) reflect growing pain with the flat plugin namespace.
- **Enterprise administration** – #3909 (server‑managed config for local CLI) and #3895 (EMU data capture) point to demand for centralized policy controls.
- **Model‑switching UX** – #2419, #3138 (switch model without losing draft), and the session‑resume bug #3913 all indicate friction in multi‑model workflows.
- **Agent‑initiated actions** – #3916 (agent‑triggered `/compact`) and #3914 (worktree branch‑naming guidelines) show users wanting the agent to manage context and repository structure autonomously.
- **Mobile remote‑session parity** – #3922 (slash commands), #3923 (file uploads), #3924 (`!` shell commands) from a single reporter highlight the gap between desktop and mobile remote session capabilities.

---

## Developer Pain Points

High‑signal frustrations that appear repeatedly or with strong community reaction:

- **Session resumption broken** – #3913 and the `/cd` fix in v1.0.65 suggest the session‑persistence area is still shaky for some workflows.
- **Quota accounting errors** – #3881 (incorrect multiplier) erodes trust in billing; users demand precise logging.
- **Hook/permission surprises** – #2643: hooks cannot suppress confirmation dialogs, forcing manual intervention in automated pipelines.
- **Keyboard mismatch** – #3760 (Ctrl+Enter vs Ctrl+Q on Windows) and #3918 (`/cd` autocomplete Enter behavior) degrade the TUI experience.
- **Proxy/network hurdles** – #2978 (headless SDK behind corporate proxy) and #523 (Kerberos support) remain unresolved for enterprise users.
- **Linux AppImage library leak** – #3925: bundled `LD_LIBRARY_PATH` breaks `git-remote-https`, blocking session creation. New, critical for Linux desktop users.
- **Markdown rendering quirks** – #3920 (double em‑dash triggers strikethrough) and #3921 (multi‑line answer UI truncation) hurt readability.

*All links are to specific GitHub issues/PRs as shown above.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the Kimi Code CLI community digest for 2026-06-25.

---

## Kimi Code CLI Community Digest — 2026-06-25

### 1. Today's Update Brief
Today is a relatively quiet day for Kimi Code CLI, with no new releases and only 2 PRs closed. However, community discussion remains active around a few long-standing bugs and feature requests, particularly concerning model usage calculation, MCP configuration propagation, and context window optimization. A significant quantity of issues (5) were updated in the last 24 hours, highlighting ongoing developer scrutiny of the tool.

### 2. Releases
No new versions were published in the last 24 hours. The latest available release remains at v0.76 as referenced in recent community reports.

### 3. Hot Issues
(All 5 issues updated in the last 24 hours are covered below)

- **#1994: kimiCode用量计算有问题 / Usage Calculation Problem** — **High Impact**
    - A user is reporting that the usage calculation for kimiCode is consuming the 2-hour token quota after just 2 tasks. The user points out that the model's (K2.6) long chain-of-thought is consuming tokens far too quickly, making the subscription feel "funny."
    - **Affected Workflow:** Subscription management and model usage cost prediction.
    - **Community Reaction:** This issue has the most upvotes (👍7), indicating widespread agreement about an opaque and inefficient billing model.
    - [link](https://github.com/MoonshotAI/kimi-cli/issues/1994)

- **#640: Kimi CLI stuck in reading one file again and again and stuck in a loop** — **High Impact**
    - A user running Kimi CLI v0.76 on Arch Linux reports a critical bug where it gets stuck reading a single file repeatedly, creating an infinite loop. The user was using a custom Anthropic endpoint (`mimo-v2-flash`) via `config.toml`.
    - **Affected Workflow:** Core file processing and model interaction.
    - **Community Reaction:** 14 comments suggest significant community troubleshooting, but the issue remains open since January.
    - [link](https://github.com/MoonshotAI/kimi-cli/issues/640)

- **#2472: [enhancement] Context compaction reloads system prompt, wasting ~20k tokens** — **New / Performance Impact**
    - A user reports that context compaction is not preserving the system prompt or project-level instructions (`AGENTS.md`), forcing them to be reloaded from scratch. This costs significant tokens (~20k) every time.
    - **Affected Workflow:** Long-running sessions where context window management is critical.
    - **Community Reaction:** Opened today; no comments yet, but the token waste is a clear pain point for heavy users.
    - [link](https://github.com/MoonshotAI/kimi-cli/issues/2472)

- **#2469: `kimi web` starts MCP servers from CLI installation directory, breaking workspace-relative MCP tools** — **Moderate Impact**
    - The `kimi web` command launches MCP servers from the global CLI installation directory, not the user's workspace. This breaks MCP tools that rely on workspace-relative paths.
    - **Affected Workflow:** MCP tool configuration and workspace management.
    - **Community Reaction:** No comments, but the precise bug report indicates a clear developer workflow regression.
    - [link](https://github.com/MoonshotAI/kimi-cli/issues/2469)

- **#2473: [CLOSED] [bug] web bug** — **Low Impact (Closed)**
    - A user reported an error when using the `/web` command. The issue was opened and closed on the same day.
    - **Affected Workflow:** Web search functionality in CLI.
    - **Community Reaction:** Closed without comments or a linked fix.
    - [link](https://github.com/MoonshotAI/kimi-cli/issues/2473)

### 4. Key PR Progress
(All 2 PRs updated in the last 24 hours are covered below)

- **#1942: fix(mcp): propagate MCP configs to subagents and resume immediately** — **Critical Fix**
    - This PR fixes a major structural issue where MCP tools were not available to subagents (e.g., `explore`, `coder`, `plan`). It also ensures MCP configs are preserved and usable when a session is resumed. This was a multi-week fix with complex review.
    - [link](https://github.com/MoonshotAI/kimi-cli/pull/1942)

- **#1377: feat: add vim-style j/k keyboard navigation for approval and question…** — **UX Enhancement**
    - This PR introduces vim-style `j`/`k` keyboard navigation for approval and question prompts, a high-demand feature for developers who prefer keyboard-driven workflows.
    - [link](https://github.com/MoonshotAI/kimi-cli/pull/1377)

### 5. Feature Request Clusters
No strong feature request clusters emerged from today's data. The single enhancement request is for **context compaction optimization**, which is a performance improvement rather than a new feature.

### 6. Developer Pain Points
The following pain points are clearly visible in today's data:

1.  **Opaque and Excessive Usage Billing (Issue #1994):** Developers are frustrated by the model's token consumption (especially K2.6's chain-of-thought), which depletes their subscription quota rapidly. The disconnect between promised "API request" limits and actual token consumption is causing user dissatisfaction.
2.  **MCP Configuration Fragility (Issue #2469, PR #1942):** Configuration for MCP tools is not consistently propagated to subagents or across resumption. This directly breaks multi-agent workflows and tool-based development.
3.  **Stability and Loop Issues (Issue #640):** A long-standing, unaddressed bug causing infinite loops during file reading erodes trust in the CLI for local file processing.
4.  **Context Window Inefficiency (Issue #2472):** The context compaction mechanism is wasteful, reloading static prompts and wasting tokens. This degrades the user experience for long, complex coding sessions.

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-25

## Today's Update Brief

OpenCode v1.17.10 shipped with significant MCP client improvements, including resource template listing, resource read tools, and a new `--mini` CLI mode. Community activity remains high: 50 issues and 50 PRs were updated in the last 24 hours, with major MCP feature work landing across several stacked pull requests. Two crash-related bugs (segfaults on Windows, TUI startup failures) continue to draw user reports.

---

## Releases

**v1.17.10** — released today
- **Core improvements:** MCP server instructions added to session context; OpenCode-managed provider integration support; MCP resource template listing and resource read tools; new `--mini` CLI mode.
- **Bugfix:** MCP resource template tools hidden when no templates available.

---

## Hot Issues

1. **#28567 – [FEATURE]: Full MCP client capabilities** (18 comments, 👍25, OPEN)
   *Impact:* Requests OpenCode catch up to latest MCP spec for resource subscriptions, templates, completions, and progress notifications. Active conversation driving multiple stacked PRs.
   → https://github.com/anomalyco/opencode/issues/28567

2. **#10416 – OpenCode is not private by default?** (59 comments, 👍39, CLOSED)
   *Impact:* User discovered session titles computed via outbound network even when using locally-hosted LLMs. Blocking outbound IPs broke session naming. Sparked privacy debate; resolved with v1.17.9 changes.
   → https://github.com/anomalyco/opencode/issues/10416

3. **#21090 – Always "error=Model tried to call unavailable tool"** (11 comments, 👍7, OPEN)
   *Impact:* Core workflow pain — model cannot use codebase analysis tools. User frustrated that OpenCode behaves like a generic chatbot despite advertised code interaction capabilities.
   → https://github.com/anomalyco/opencode/issues/21090

4. **#31119 – Error: no such column: name** (8 comments, 👍5, OPEN)
   *Impact:* Database schema migration failure after upgrading from v1.16.2. App completely unusable post-update. Affects users returning after hiatus.
   → https://github.com/anomalyco/opencode/issues/31119

5. **#24817 – Ctrl+Z closes/suspends OpenCode instead of undoing text input (Linux)** (7 comments, 👍4, OPEN)
   *Impact:* Linux users lose work when Ctrl+Z sends SIGTSTP instead of performing undo. Duplicates #19256.
   → https://github.com/anomalyco/opencode/issues/24817

6. **#12308 – Entra Authentication for MCP doesn't work** (17 comments, CLOSED)
   *Impact:* MCP OAuth flow includes incorrect `resource` parameter breaking Entra app registration. Azure AD users unable to authenticate remote MCP servers.
   → https://github.com/anomalyco/opencode/issues/12308

7. **#28365 – Unexpected error: An error occurred in Effect.tryPromise** (merged into #32706)
   *Impact:* TUI crashes on startup for Windows users on v1.17.0+; similar to #31607. Multiple reports across versions.
   → https://github.com/anomalyco/opencode/issues/32706

8. **#33721 – qwen3.7-max/plus service instability on OpenCode Go (Zen API)** (5 comments, CLOSED)
   *Impact:* Paid subscribers report 60-70% success rate, frequent timeouts, and extreme response time variance on Alibaba Qwen models via Zen API.
   → https://github.com/anomalyco/opencode/issues/33721

9. **#32678 – Why doesn't opencode follow AGENTS.md paths?** (7 comments, CLOSED)
   *Impact:* User configured root `.agents/AGENTS.md` instructions but model ignores them. Path resolution confusion between project root and `.agents/` directory.
   → https://github.com/anomalyco/opencode/issues/32678

10. **#28289 – kotlin-ls: JetBrains LSP initialization timeout on large Android projects** (2 comments, OPEN)
    *Impact:* Large Gradle projects fail LSP initialization within default timeout. User command overrides ineffective. Blocks Kotlin development workflow.
    → https://github.com/anomalyco/opencode/issues/28289

---

## Key PR Progress

1. **#33737 – fix(event): remove directory filter from SSE stream** *(OPEN, EZotoff)*
   Fixes silent message loss when session project directory differs from server startup directory. Events were filtered by exact directory match, causing invisible TUI messages.
   → https://github.com/anomalyco/opencode/pull/33737

2. **#32480 – feat(mcp): surface tool progress** *(OPEN, Nomadcxx)*
   Builds on #32477 to pipe MCP progress notifications into OpenCode's existing running-tool progress UI. Ref #28567.
   → https://github.com/anomalyco/opencode/pull/32480

3. **#33281 – feat(cli): add standalone v2 session flow** *(OPEN, thdxr)*
   New `--standalone` mode running an authenticated private server child process. Creates sessions via v2 API, persists share/revert state. Major internal architecture change.
   → https://github.com/anomalyco/opencode/pull/33281

4. **#32943 – feat(mcp): support templates and completion** *(OPEN, Nomadcxx)*
   Adds MCP resource templates list and completion support. Stacked on #32936. Ref #28567.
   → https://github.com/anomalyco/opencode/pull/32943

5. **#32936 – feat(mcp): support resource subscriptions** *(OPEN, Nomadcxx)*
   Allows OpenCode to subscribe to resource change events from MCP servers advertising `resources/subscribe`. Part of full MCP client feature landing.
   → https://github.com/anomalyco/opencode/pull/32936

6. **#32478 – feat(mcp): publish resource list change events** *(OPEN, Nomadcxx)*
   First slice of MCP resource notification support. Registers for server-side resource list changes and publishes events.
   → https://github.com/anomalyco/opencode/pull/32478

7. **#33226 – feat(core): add session snapshot and revert system** *(CLOSED, thdxr)*
   Adds backend-neutral Git service with revert and restore operations. Enables stateless revert preview and durable revert commits. Merged into mainline.
   → https://github.com/anomalyco/opencode/pull/33226

8. **#31860 – fix(cli): check for browser opener before spawning to avoid ENOENT in containers** *(CLOSED, kagura-agent)*
   Prevents crash when `opencode web` runs in Docker without desktop environment. Closes #31815.
   → https://github.com/anomalyco/opencode/pull/31860

9. **#33733 – fix(opencode): cap retry backoff when response headers lack retry-after** *(OPEN, 1volt12)*
   Fixes unbounded retry delay growth when API responses omit retry-after headers, restoring sane backoff limits.
   → https://github.com/anomalyco/opencode/pull/33733

10. **#33734 – feat(tui): publish tui.session.select on in-TUI session navigation** *(OPEN, santiperone)*
    Previously, switching sessions in the TUI did not emit a bus event, preventing plugins from reacting. Closes #31051.
    → https://github.com/anomalyco/opencode/pull/33734

---

## Feature Request Clusters

**Full MCP Client Capabilities** (multiple issues + stacked PRs)
Requests for resource subscriptions, templates/completions, and tool progress notifications — all tracked under #28567. Today's PRs #32478, #32936, #32943, and #32480 incrementally address this gap. Community contributor Nomadcxx is driving the implementation.

**OAuth / Authentication Fixes** (#12308, #5444, #26301, #16893, #28895)
Persistent theme: OAuth scopes ignored, Entra authentication broken, re-authentication not triggered after token loss, pre-registered client scopes missing. PR #33722 isolates MCP request headers to prevent cross-origin leakage.

**Ctrl+Z / Undo Behavior** (#24817, #19256)
Linux users consistently report Ctrl+Z closing the application instead of undoing text input. Feature request to remap or secure the SIGTSTP handling.

**Project-Local Configuration** (#17232, 👍8)
Support for `opencode.local.json` to allow per-project config overrides without modifying global config. Persistent demand with moderate community upvote count.

---

## Developer Pain Points

- **Database migration failures on upgrade**: Multiple users report SQLite schema errors (`no such column: name`) when updating from older versions, blocking access entirely (#31119).
- **Windows instability**: Segfaults on startup (#31607, #28121), PATH resolution issues (#14074), and OpenCode command recognition failures after first use (#20162) remain unaddressed.
- **MCP OAuth reliability**: Silent authentication failures, missing scope parameters, and browser not reopening for re-auth — consistently the highest concentration of bug reports.
- **Tool unavailability errors**: Users frequently see "Model tried to call unavailable tool" (#21090), indicating disconnect between tool registration and model invocation that persists across versions.
- **Third-party model service instability**: Paid Zen API subscribers report 60-70% success rates on qwen3.7 models (#33721, #33726), with Cloudflare 524 timeouts on long generations — not an OpenCode bug but affects user experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是基于你提供的 GitHub 数据生成的 Qwen Code 社区日报。

---

# Qwen Code 社区日报 | 2026-06-25

## 1. 今日更新简报

项目活动极为活跃，共发布 **4 个新版本**（含预览版和日构建版），并产生了 **25 个议题** 和 **50 个拉取请求**。社区聚焦点集中在远程 LSP 状态、CI/CD 流程优化、以及多项终端用户体验（终端UI）修复上。值得注意的是，一个关于**路径遍历漏洞**的安全议题 (#5834) 被标记为 P1 优先级，并已获得对应修复 PR (#5829)，响应迅速。

## 2. 版本发布

项目在今日发布了多个版本，核心变更均为引入远程 LSP 状态路由。

*   **v0.19.2 (正式版 & 预览版)** & **v0.18.5-preview.0**: 这三个版本的 changelog 主要包含一项新功能：`feat(serve): Add remote LSP status route`，由 [@doudouOUC] 贡献。此功能允许开发者远程查询语言服务器协议（LSP）的状态，对远程开发场景至关重要。
*   **v0.19.1-nightly.20260624**: 同样包含了上述 LSP 状态路由功能。日构建版通常用于快速验证和集成最新的代码提交。

## 3. 热点议题

以下是今日值得关注的 10 个议题：

1.  **#5834** - [P1/安全] [Source deletion accepts path-like slugs that can escape the sources directory (来源删除功能可因路径别名导致目录逃逸)](https://github.com/QwenLM/qwen-code/issues/5834)
    *   **影响**: 严重安全漏洞。攻击者可通过精心构造的 `sourceSlug`，使得删除操作指向工作区 `sources` 目录之外的文件，造成越界文件删除。
    *   **社区反应**: 已由 [@VectorPeak] 提交并迅速得到维护者响应，在议题下方可见 PR #5829 的关联。

2.  **#5837** - [P2/Bug] [Last response from agent get cut off (Agent的最后一个回复被截断)](https://github.com/QwenLM/qwen-code/issues/5837)
    *   **影响**: 用户在使用 Agent 模式时，回复内容的最后一部分（例如："Dependencies added:..."）未能完整显示，导致信息丢失。
    *   **社区反应**: 用户提供了截图和 Debug 日志，指出日志文件内容完整，证明是 UI 渲染问题，而非模型输出问题。

3.  **#5219** - [P2/增强] [CI: integration tests don't run on PR/merge (CI: 集成测试不在PR/合并时运行)](https://github.com/QwenLM/qwen-code/issues/5219)
    *   **影响**: 核心基础设施问题。集成测试仅在夜间发布流水线中运行，导致破坏性更改（回归）只能在发布时被发现，影响发布质量和修复效率。
    *   **社区反应**: [@yiliang114] 提交了该议题，并获得多人讨论，是一个持续存在的团队痛点。

4.  **#5836** - [P2/功能请求] [在创建任务清单（create todos）能否指定持久化到项目内以便跨设备同步？](https://github.com/QwenLM/qwen-code/issues/5836)
    *   **影响**: 用户工作流受阻。任务、计划、记忆等数据存储在本地 `~/.qwen/` 目录下，无法跟随 Git 仓库同步，切换设备或与同事协作时会丢失工作状态。
    *   **社区反应**: 用户期望能将数据持久化到项目目录内（如 `.qwen/todos`），以便跨设备共享。这是关于会话管理的核心社区需求。

5.  **#5819** - [P2/Bug] [升级后默认使用更高单价模型并自动修改setting.json (升级后默认改用高价模型并修改设置)](https://github.com/QwenLM/qwen-code/issues/5819)
    *   **影响**: 极具破坏性的用户体验问题。用户报告自动升级后，`settings.json` 中的模型配置被静默修改为更昂贵的模型（如从 flash 变更为 pro），导致不必要的费用消耗。
    *   **社区反应**: 用户表达了极大的困惑和不满，此问题对依赖成本控制的开发者影响很大。

6.  **#5800** - [P2/Bug] [Last line of replies taller than the terminal is overwritten (超出终端高度的回复最后一行被覆盖)](https://github.com/QwenLM/qwen-code/issues/5800)
    *   **影响**: 终端UI（TUI）严重渲染问题。当回复内容过长时，其最后一行会消失或被覆盖，用户无法看到完整的 Agent 回复。
    *   **社区反应**: 被标记为 `welcome-pr`，并关联到上游 Ink 库的问题，说明这是一个已知但棘手的前端渲染 Bug。

7.  **#5831** - [Bug] [Release Failed for v0.19.2 (v0.19.2 版本发布失败)](https://github.com/QwenLM/qwen-code/issues/5831)
    *   **影响**: 自动化流水线问题。由 GitHub Actions 自动创建的议题，显示 v0.19.2 的发布工作流失败，失败任务为 `publish`。这解释了为何同版本同时存在正式版和预览版。

8.  **#5736** - [Bug] [more full prompt reprocessing in recent update? (最近更新后更频繁的完整提示词重处理?)](https://github.com/QwenLM/qwen-code/issues/5736)
    *   **影响**: 性能退化。用户发现本地部署的 LLM 在对话过程中，会不必要地重新处理整个对话历史（完整提示词重处理），导致响应变慢且消耗更多计算资源。
    *   **社区反应**: 用户提供了 llama.cpp 的控制台日志作为证据，等待维护者进一步调查。

9.  **#5789** - [P3/功能请求] [Enable the built-in status line preset by default for new users (默认对新用户启用内置状态行预设)](https://github.com/QwenLM/qwen-code/issues/5789)
    *   **影响**: 新用户引导优化。`/statusline` 功能可以显示模型名、Git 分支、上下文使用量等信息，但默认未开启。新用户需要一个“开箱即用”的友好体验。
    *   **社区反应**: 社区成员建议默认启用此功能以改善新手引导。

10. **#5823** - [P2/Bug/功能请求] [/loop cron tasks fire silently with no visibility (/loop 定时任务静默执行且无可见性)](https://github.com/QwenLM/qwen-code/issues/5823)
    *   **影响**: 用户被自动化任务“惊吓”。`/loop` 的 Cron 任务在会话后台静默执行，用户（又称开发者）无法查看、管理或停止自己创建的计划任务，导致在后续会话中模型会“自动开始工作”，造成混乱。
    *   **社区反应**: 用户感到了困惑，反映了后台自动化功能在用户控制层面上的不足。

## 4. 关键拉取请求（PR）进展

1.  **#5829** - [修复(桌面)] [reject unsafe source slugs before deletion (在删除前拒绝不安全的来源别名)](https://github.com/QwenLM/qwen-code/pull/5829)
    *   **关键性**: 针对安全议题 #5834 的及时修复，防止路径遍历攻击。

2.  **#5808** - [修复(CLI)] [cancel pending self-paced loop wakeups on user abort (在用户中止时取消待处理的循环唤醒)](https://github.com/QwenLM/qwen-code/pull/5808)
    *   **关键性**: 解决 #5806 的问题。当用户通过 `Esc` 键中止 `/loop` 时，现在会正确取消后续的定时唤醒，防止循环静默恢复。

3.  **#5835** - [修复(核心)] [preserve the selected model when re-applying a provider install plan (在重新应用提供商安装计划时保留已选择的模型)](https://github.com/QwenLM/qwen-code/pull/5835)
    *   **关键性**: 解决用户升级后模型被意外重置的问题（与 #5819 相关），提升了配置变更的安全性。

4.  **#5817** - [功能(CLI)] [support a user-configurable keyterms file for voice dictation (支持语音听写的用户可配置关键词文件)](https://github.com/QwenLM/qwen-code/pull/5817)
    *   **关键性**: 响应社区请求（#5816），允许用户为语音听写功能定制关键词，以提升特定领域的语音识别准确率。

5.  **#5827** - [修复(核心)] [add streaming inactivity timeout to the OpenAI pipeline (为 OpenAI 管道添加流式不活动超时)](https://github.com/QwenLM/qwen-code/pull/5827)
    *   **关键性**: 修复了一个隐蔽的稳定性问题。OpenAI 客户端的流式响应在数据块之间可能无限期挂起，此 PR 增加了不活动超时机制，避免请求卡死。

6.  **#5799** - [修复(CLI)] [prevent scroll snap-back and flicker in non-VP mode (修复非VP模式下的滚动回弹和闪烁)](https://github.com/QwenLM/qwen-code/pull/5799)
    *   **关键性**: 终端UI的重要修复。解决了多 Agent 运行时，背景 Agent 启动/完成导致主内容区域滚动失控和屏幕闪烁的问题。

7.  **#5825** - [测试(CLI)] [add daemon startup benchmark (添加守护进程启动基准测试)](https://github.com/QwenLM/qwen-code/pull/5825)
    *   **关键性**: 基础设施增强。为守护进程添加性能基准测试，可量化启动时间变化，防止回归。

8.  **#5657** - [修复(CLI)] [stop repeated duplicate provider responses (阻止重复的提供商响应)](https://github.com/QwenLM/qwen-code/pull/5657)
    *   **关键性**: 修复了 Agent 陷入工具调用结果循环的问题。当提供商返回重复的工具调用时，此 PR 确保能正确中断并给出错误反馈，而非无限重试。

9.  **#5661** - [功能(TUI)] [partition tool display by type (按类型分区工具显示)](https://github.com/QwenLM/qwen-code/pull/5661)
    *   **关键性**: 终端UI的重大改进。将“读/搜索”类工具（如 ReadFile）折叠为摘要行，而“写”类工具（如 Edit）则逐个展示，极大减少了终端UI的杂乱感，提升了信息密度。

10. **#4943** - [功能(CLI)] [add --safe-mode flag to disable all customizations (添加 --safe-mode 标志用于禁用所有自定义项)](https://github.com/QwenLM/qwen-code/pull/4943)
    *   **关键性**: 强大的调试和故障排除工具。此标志可创建一个“干净”的会话，禁用所有 `QWEN.md`、Hooks、MCP 服务器等自定义配置，用于隔离问题来源。

## 5. 功能请求聚类

今日的议题中，社区需求呈现出几个清晰的聚类：

*   **会话状态持久化与跨设备同步**: 议题 #5836 和 #5823 都反映出用户对工作状态的便携性和可见性有强烈需求。用户希望能够将任务列表（TODOs）、计划（Plans）、记忆（Memories）以及后台定时任务（Cron Jobs）的状态与 Git 仓库绑定，或在多设备间同步，避免“换个设备就丢失项目状态”的困境。
*   **语音输入功能扩展**: 在 #5755 引入语音听写后，社区迅速提出了多项增强需求：自定义关键词库 (#5816, PR #5817 已响应)、对听写内容进行二次精炼优化 (#5770)、以及将该功能扩展到网页Shell和桌面端 (#5796)。
*   **CI/CD 与测试流程改进**: 这是一个开发流程痛点，由 @yiliang114 主导提出。核心诉求包括：集成测试必须在 PR 阶段运行 (#5219)、AI 辅助的 PR 应自动检查集成测试覆盖 (#5665)、以及缩短 PR 流水线时间（从约 25 分钟优化）(#5027)。
*   **终端UI（TUI）与信息呈现**: 尽管 TUI 近期有显著改进，但仍有细节待优化。用户希望默认开启状态行 (#5789)、统一终端图标风格 (#5787)，并完善对长回复和长列表的渲染 (#5800, #5837)。

## 6. 开发者痛点

综合今日数据，开发者的核心痛点主要集中在：

1.  **测试与发布的不确定性**: **集成测试流程的缺失** (#5219, #5665) 导致开发者无法在合并前获得充分信心，严重问题（如回归）只能等到发布时才被发现，增加了修复成本和发布风险。
2.  **配置变更的不可预测性**: 升级后模型被**静默切换为更昂贵的版本** (#5819)，以及重新认证时自定义模型 ID 丢失 (#5636)，都让用户感到对系统缺乏**控制感**，甚至可能造成经济损失。
3.  **后台任务缺乏用户控制**: `/loop` 命令的 Cron 任务在后台**静默运行且无法管理** (#5823)，给用户带来了意外和困惑，表明系统在执行自动化任务时，需要提供更好的用户可见性和控制能力。
4.  **终端体验与稳定性**: 长回复被截断 (#5800, #5837)、屏幕闪烁 (#5798)、滚动回弹 (#5798) 等渲染问题，直接影响开发者在终端中的日常工作流，是优先级最高的体验 Bug。

</details>