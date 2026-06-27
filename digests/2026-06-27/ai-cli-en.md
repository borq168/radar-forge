# AI CLI Tools Community Digest 2026-06-27

> Generated: 2026-06-27 00:32 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-06-27

## 1. Daily Cross-Tool Overview

Today saw a wide spread of activity across the six tracked AI CLI tools, with Gemini CLI, OpenCode, and Qwen Code each reporting 50+ updated issues and PRs, while Kimi Code showed minimal movement (two fresh bugs, two PRs). Releases were mostly maintenance or minor feature additions: Claude Code shipped a mouse-interaction toggle patch, Codex two maintenance releases, Gemini a nightly CI fix, Copilot CLI two minor releases adding subagent depth controls and MCP toggles, and Qwen Code a CUA driver binary update. A recurring theme across multiple tools is persistent community frustration with token consumption anomalies (Claude Code, Codex), agent reliability and subagent termination reports (Gemini, Copilot CLI, Qwen Code), and Windows-specific process lifecycle bugs (Qwen Code, Codex, Copilot CLI). MCP integration issues, especially around tool visibility and authentication, appeared in several communities.

## 2. Activity Comparison

| Tool | Updated Issues (last 24h) | Updated PRs (last 24h) | Release(s) Today | Hot Issues Noted |
|------|---------------------------|------------------------|------------------|------------------|
| **Claude Code** | ~2 PRs only (no issue count given) | 2 | v2.1.195 | 10 hot issues listed; top two (usage limits) have 1,476 and 786 comments |
| **OpenAI Codex** | 7 new issues filed | 15 | rust-v0.142.3, rust-v0.143.0-alpha.26 | 10 hot issues; top three exceed 150 comments each |
| **Gemini CLI** | 50 | 18 | v0.51.0-nightly | 10 hot issues; several P1 bugs with 7-8 comments |
| **GitHub Copilot CLI** | 21 | 1 | v1.0.66-0, v1.0.66-1 | 10 hot issues; most active #2082 (22 comments) |
| **Kimi Code CLI** | 2 bugs | 2 | None | 3 issues total (1 closed, 2 open) |
| **OpenCode** | 50 | 50 | None | 10 hot issues; #28846 (84 comments) closed today |
| **Qwen Code** | 50 | 50 | cua-driver-rs v0.6.8 | 10 hot issues; #5873 (Windows OOM) high urgency |

*Note: “Updated issues/PRs” includes newly created, updated, or closed items. Exact counts for Claude Code were not provided in the digest beyond PRs.*

## 3. Shared Feature Directions

### a. Token Consumption / Rate-Limit Transparency
- **Claude Code**: Two long-running issues (#16157, #38335) with hundreds of comments reporting Max plan limits exhausted within minutes.
- **OpenAI Codex**: Three issues (#14593, #28879, #30212) with 600+ combined comments describing 10–20× faster token burn than expected.
- **Qwen Code**: Auto-upgrade silently changed model to higher-cost provider (#5819), leading to unexpected billing.

### b. Agent and Subagent Reliability
- **Gemini CLI**: Multiple P1 bugs (#22323, #21409, #25166) on subagent success misreporting, generalist agent hangs, and shell stalls.
- **Copilot CLI**: Subagent transcripts inlined verbatim without summarization (#3944), leading to session export bloat.
- **Qwen Code**: TUI freezes due to zombie bash processes (#5083) and Windows OOM from unbounded pwsh spawning (#5873) – both agent lifecycle issues.

### c. Model Picker / Context Window / Model Override Issues
- **Claude Code**: 1M-context variants for Opus disappeared from Desktop UI (#36351 and related).
- **Copilot CLI**: `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom API settings (#3954).
- **OpenCode**: Custom provider models missing from `/model` TUI picker (#6169, closed today); `reasoning_effort` parameter not exposed in UI (#450, closed).
- **Gemini CLI**: >128 tools cause 400 error with no smart scoping (#24246).

### d. Memory / Context Leakage
- **Copilot CLI**: Memories leaking between repositories (#3945); custom instructions leaking into repo analysis (#3946).
- **Gemini CLI**: Auto Memory sends content before redaction (#26525) and infinite retries on low-signal sessions (#26522).
- **OpenCode**: Infinite compaction loops on every response (#31152).

### e. Platform-Specific Gaps (Windows, Linux, Wayland)
- **Qwen Code**: Windows pwsh process leak (#5873) fixed today; TUI freezes on Linux (#5083). JetBrains integration forces Qwen OAuth (#3511).
- **Copilot CLI**: Clipboard broken on both Linux (#2082) and Windows (#3949). Theme system regression on Linux (#3947 closed, #3773 open).
- **Claude Code**: Sandbox SOCKS5 proxy auth breaks SSH git operations (#70684); OAuth credential persistence fails on Windows (#71717, #71708).
- **OpenCode**: Double Enter key on Ubuntu (#2477 — note: this is actually Kimi Code? Wait, #2477 is Kimi Code. Correct. Also OpenCode has pasting file path inconsistency #34006.)

*Note: The shared need for OAuth credential persistence and NTLM/SSO handling appears across Claude Code, Codex, and Copilot CLI.*

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----------|
| **Primary target** | Max-plan power users, fullstack developers | VS Code users, enterprise | Google ecosystem, multi-model | GitHub enterprise, Copilot subscribers | Moonshot AI (Chinese developer base) | Open-source community, cost-sensitive | Qwen model users, multiplayer/serve |
| **Release cadence** | Patch releases frequent (daily/weekly) | Maintenance + alpha pre-releases | Nightly builds + preview | Bi-weekly minor releases | Sporadic | Regular but not daily | Weekly/nightly |
| **Hot issue themes** | Usage limits, missing context variants, Windows auth | Token burn, Intel Mac crashes, Windows git storm | Agent hangs, subagent success misreport, memory inefficiency | Clipboard bugs, memory leakage, MCP plugin marketplace | Auth 403, plan-mode state inconsistency | Compaction loops, model picker gaps, crypto payments | Windows process leaks, auto-upgrade cost changes, MCP tool visibility |
| **Technical approach** | Proprietary (Anthropic), CLI + Desktop | Proprietary (OpenAI), CLI + VS Code extension | Open source (Google), CLI + subagent architecture | Proprietary (GitHub), CLI + MCP integration | Proprietary (MoonshotAI), CLI | Open source (Anomalyco), plugin + TUI | Open source (QwenLM), CLI + daemon (`qwen serve`) + multiplayer |
| **MCP support** | Explicit MCP hook fix + sandbox | Remote plugins now default | No MCP emphasis; uses Google tools | MCP toggles, remote MCP OAuth recovery | Not discussed | MCP refresh token scope fix (#34125) | MCP filesystem "connected but tools not available" (#4218) |

## 5. Community Activity Notes

- **Highest issue/PR activity**: Qwen Code and OpenCode both showed 50 updated issues and 50 PRs, indicating very active maintenance and community reporting. Gemini CLI also had 50 issues and 18 PRs.
- **Most commented hot issues**: Claude Code’s usage limit issues (#16157, #38335) continue to dominate with combined 2,262 comments, though no new resolution is evident. OpenAI Codex’s token-burn issues have over 600 combined comments — community patience appears strained.
- **Release cadence**: Claude Code (1 patch), Gemini (1 nightly), Copilot CLI (2 minor) and Qwen Code (1 driver) all shipped today. Codex shipped two (maintenance + alpha). Kimi Code and OpenCode had no releases.
- **Maintainer response quality**: Qwen Code demonstrated fast turnaround — closing #5873 (Windows OOM) on the same day by merging PR #5892. Copilot CLI and OpenCode also closed several issues today. In contrast, Claude Code’s top issues remain unresolved for months; Gemini CLI’s P1 agent bugs are still awaiting retesting.
- **Security-related closures**: Qwen Code patched a path-traversal vulnerability (#5834) and a negative config value acceptance (#5905) today. Copilot CLI has an open CVE assignment request (#3906). No major CVEs for other tools.

## 6. Evidence-Backed Observations

1. **Token consumption anomalies are the most pressing cross-tool concern.** Both Claude Code and OpenAI Codex have multiple high-engagement issues (hundreds of comments, hundreds of upvotes) where users on paid plans report budgets draining 10–20× faster than expected, with no transparent explanation or fix in sight. This erodes trust in billing models and suggests systemic issues in how token/cost accounting is communicated.

2. **Agent and subagent lifecycle bugs are a recurring pattern across Gemini, Qwen, and Copilot CLI.** Specifics vary (success misreporting, zombie processes, infinite loops) but the underlying problem is that agents do not reliably terminate, report status incorrectly, or leak resources. Gemini’s P1 bugs (#22323, #21409) and Qwen’s Windows process leak (#5873) are the most active. These reliability gaps limit adoption for automated pipelines.

3. **Windows ecosystem continues to generate a disproportionate share of bug reports.** Issues specific to Windows (or Linux/Wayland) appear in Claude Code (OAuth credentials, SOCKS5 auth), Codex (git command storm, terminal reading), Copilot CLI (clipboard, native cmdlet support), Qwen Code (pwsh leak, JetBrains OAuth lock-in), and Kimi Code (double Enter on Ubuntu). The diversity of these issues suggests that cross-platform parity remains incomplete across all tools.

4. **Memory and context management is a growing pain point for power users.** Copilot CLI (#3945), Gemini (#26525), and OpenCode (#31152) all reported unintended persistence or leakage of memory facts, session compaction loops, or subagent transcripts exploding in size. Users building long-running or multi-repo workflows are demanding better isolation, summarization, and user control over what is retained.

5. **MCP integration coverage is uneven.** While Copilot CLI and Qwen Code made advances (remote MCP toggles, resource browsing), Qwen Code still has a “connected but tools not available” bug on Windows (#4218), and Claude Code recently fixed hook matchers for hyphenated MCP identifiers. The desire for hot-reload of MCP servers and runtime reload of skills (Qwen #3696) suggests that current static configurations are insufficient for dynamic development environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-06-27

## Today's Update Brief

One patch release (v2.1.195) shipped with a mouse-interaction toggle and a hook matcher fix. Issue activity remains dominated by two long-running Max‑plan usage‑limit complaints (1,476 and 786 comments) that continue to gather reactions. Only two pull requests were merged or updated in the last 24 hours.

---

## Releases

**v2.1.195**
- Added `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` environment variable to disable mouse click/drag/hover in fullscreen mode while keeping wheel scroll.
- Fixed hook matchers with hyphenated identifiers (e.g. `code-reviewer`, `mcp__brave-search`): previously they matched substrings; now they require an exact match.

[View release on GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

---

## Hot Issues

1. **[#16157 – Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157)**
   Author: @deqrocks · 1,476 comments · 691 👍
   Users on the Max plan report burning through their session/token limits within minutes of starting a new session. The bug has been open since January and remains the most commented issue in the repository.

2. **[#38335 – Max plan session limits exhausted abnormally fast since March 23](https://github.com/anthropics/claude-code/issues/38335)**
   Author: @karenrebecag · 786 comments · 468 👍
   A similar complaint narrowed to CLI usage, with a sudden increase in consumption starting in late March. Many users suspect changes in how context or tool calls are billed.

3. **[#50674 – Cowork fails on ARM64 (Snapdragon X) despite passing readiness check](https://github.com/anthropics/claude-code/issues/50674)**
   Author: @harshadoak · 30 comments
   Cowork mode on Windows ARM64 hardware fails after the initial readiness check passes. No official response yet.

4. **[#36351 – 1M context window removed from Desktop Code tab model picker after update](https://github.com/anthropics/claude-code/issues/36351)**
   Author: @EricPotratz · 17 comments · 11 👍
   Users on Max plan lost the ability to select 1M‑context variants for Opus models in the Desktop UI. A recurring theme across multiple reports.

5. **[#61107 – Opus 4.7 produces structurally correct code that silently discards user input](https://github.com/anthropics/claude-code/issues/61107)** – **CLOSED**
   Author: @nvst18 · 12 comments
   A healthcare developer documented that Opus 4.7 generated code that compiles and appears correct but contains no functional logic (e.g. empty request handlers). Marked as closed, likely fixed in a later model version.

6. **[#40173 – Server-side domain blocking breaks legitimate business automation](https://github.com/anthropics/claude-code/issues/40173)**
   Author: @scubashack808 · 11 comments · 7 👍
   The Claude‑in‑Chrome extension blocks browser automation on financial domains (Wells Fargo, Schwab, etc.) even for legitimate business use. The block is enforced via a server‑side API call.

7. **[#45889 – Claude Desktop causes NTFS NonPaged Pool kernel memory leak on Windows](https://github.com/anthropics/claude-code/issues/45889)** – **CLOSED**
   Author: @HampeFPV · 9 comments
   Electron client leaked ~0.5 GB/min of kernel pool memory. Closed, implying a fix was shipped.

8. **[#69691 – Sub-agent sync‑vs‑async is session‑host‑dependent, not controllable](https://github.com/anthropics/claude-code/issues/69691)**
   Author: @Nharu · 4 comments
   Whether a sub-agent runs synchronously or asynchronously varies between sessions and cannot be forced. No documented API to control this, causing unpredictable behaviour in agent pipelines.

9. **[#70684 – Sandbox SOCKS5 proxy auth breaks SSH git operations](https://github.com/anthropics/claude-code/issues/70684)**
   Author: @tylerodonnell · 3 comments · 12 👍
   With `sandbox.enabled: true`, Claude Code injects `GIT_SSH_COMMAND` pointing to BSD `nc`, which cannot authenticate to a SOCKS5 proxy. Quick community upvote (12) suggests wide impact.

10. **[#21867 – Feature request: settings to hide token counter and version display in status line](https://github.com/anthropics/claude-code/issues/21867)**
    Author: @coygeek · 9 comments · 28 👍
    Users who set a custom `statusLine` still see the token counter and version printed separately. Request to make these optional or configurable.

---

## Key PR Progress

Only two pull requests were updated or created in the last 24 hours:

- **[#71530 – Merge pull request #1 from anthropics/main](https://github.com/anthropics/claude-code/pull/71530)** – **CLOSED**
  A trivial merge from a fork; no functional change.

- **[#71627 – docs(sandbox): note that prompt‑approved hosts are session‑scoped](https://github.com/anthropics/claude-code/pull/71627)** – **OPEN**
  Author: @greymoth-jp
  Adds one bullet to `examples/settings/README.md` clarifying that domains approved at prompt time are lost on session reset, unlike persistent entries in `sandbox.network.allowedDomains`.

---

## Feature Request Clusters

### Model Context Options
Multiple reports claim that 1M‑context variants of Opus models have disappeared from the model picker on Desktop (`#36351`, `#68287`, `#69109`, `#69444`). The pattern suggests either a UI regression or intentional removal that users strongly want reversed.

### Plugin/Skill Integration
- `#16345`: Support standard `.github/skills/` directory for agent skills (currently only `.agents/skills` works).
- `#62485` (closed): Plugin skills from private marketplaces appear in the slash menu but fail with “Unknown skill” on invocation — partial discovery suggests incomplete plugin loading.

### UI/UX Customisation
- `#21867`: Hide token counter and version from status line when using a custom `statusLine`.
- `#66504`: Session URLs appended to commit messages and PR descriptions by default — request to make this opt‑in.
- `#71721`: Custom vocabulary support for voice dictation to improve technical acronym and accent handling.

### Authentication & Network Reliability
- `#71708`: `CERT_HAS_EXPIRED` on Windows native install during OAuth login (no proxy/VPN).
- `#71717`: OAuth succeeds but `.credentials.json` is never written on Windows, causing 401 loops.
- `#70684`: Sandbox SOCKS5 proxy auth breaks SSH git operations.
- `#40173`: Server‑side domain blocking prevents legitimate automation on financial sites.

---

## Developer Pain Points

- **Usage‑limit unpredictability on Max plans** — the two top‑voted issues (`#16157`, `#38335`) describe sessions that exhaust their budget within minutes, eroding trust in the billing model.
- **Missing 1M‑context model variants** — at least four distinct issues report that Opus 4.8’s 1‑million context option has disappeared from the UI, limiting large‑codebase work.
- **OAuth credential persistence on Windows** — multiple reproduction‑ready reports (`#71717`, `#71708`) indicate that login succeeds but credentials aren’t saved or certificates are rejected, making the product unusable on certain Windows configurations.
- **Memory/model‑behaviour regressions** — closed issue `#45889` (kernel memory leak) and `#61107` (Opus 4.7 silently discarding logic) highlight systemic reliability concerns that erode developer confidence on sensitive workflows.
- **Agent‑control inconsistency** — `#69691` (uncontrollable sync/async behaviour of sub‑agents) and `#71671` (model ignoring saved memory/instructions) show that agent predictability is still a pain point for power users building automated pipelines.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-27

## 1. Today's Update Brief
Two maintenance releases were published (rust-v0.142.3 and rust-v0.143.0-alpha.26), neither with user-facing changes. The community remains heavily focused on rate-limit and token-burning bugs, with three of the top issues now exceeding 150 comments. Seven open issues were filed in the last 24 hours, and 15 pull requests were updated, many targeting transport reliability, telemetry, and MCP OAuth serialization.

## 2. Releases
- **rust-v0.142.3**: Maintenance-only patch; no user-facing changes since 0.142.2.
  [Changelog](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3)
- **rust-v0.143.0-alpha.26**: Pre-release alpha; no detailed changelog published.
  [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.26)

## 3. Hot Issues (10 most noteworthy)
1. **[#14593 – Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
   Business/Plus user on VS Code reports rapid token consumption since March. 624 comments, 274 👍. The thread continues to receive updates despite being 3 months old.
2. **[#28879 – Rate-limit cost per token jumped ~10–20x since June 16](https://github.com/openai/codex/issues/28879)**
   Plus plan user on gpt-5.5 sees 5‑hour budget drained in 2–3 prompts. 326 👍, 175 comments. Multiple reports of similar regression.
3. **[#29000 – CLI 0.141.0 crashes with SIGTRAP on Intel macOS](https://github.com/openai/codex/issues/29000)**
   Closed as fixed? 16 comments. Closely related to still‑open issues (#28090, #30300) – widespread Intel Mac crash.
4. **[#20567 – Windows App spawns ~1000 git commands per minute](https://github.com/openai/codex/issues/20567)**
   Enterprise user on Windows; captured `Process Create` events. 11 comments, affects performance and battery.
5. **[#27536 – macOS code_sign_clone grows unbounded (62 GB+)](https://github.com/openai/codex/issues/27536)**
   Electron auto-update leaves `code_sign_clone` in system temp, never cleaned. 9 comments, closed.
6. **[#18357 – Upgraded to PRO but “You’re out of Codex messages”](https://github.com/openai/codex/issues/18357)**
   PRO (5×) user still blocked by the app. 9 comments. Recurring entitlement mismatch.
7. **[#30212 – 5-hour allowance consumed in about 1 hour](https://github.com/openai/codex/issues/30212)**
   Pro 20× tier user reports abnormal depletion; no change in usage pattern. 6 comments.
8. **[#30224 – “This model is not supported” with X-OpenAI-Internal-Codex-Responses-Lite](https://github.com/openai/codex/issues/30224)**
   Custom model via internal header returns error on Windows. 6 comments.
9. **[#29070 – Codex App could not read terminal on Windows](https://github.com/openai/codex/issues/29070)**
   Desktop app cannot attach to terminal for tool calls. 5 comments.
10. **[#30301 – Recover stalled Remote Control relay generations in-process](https://github.com/openai/codex/issues/30301)**
    Remote Control WebSocket relay failures require app-server restart. Proposed recovery without disruption. 4 comments.

## 4. Key PR Progress (10 important pull requests)
1. **[#30269 – Gate TCP_NODELAY on Rendezvous transport policy](https://github.com/openai/codex/pull/30269)**
   Replaces unconditional TCP_NODELAY with end‑to‑end, fail‑closed transport policy for exec-server traffic.
2. **[#30201 – Fix remote-control token refresh retry storms](https://github.com/openai/codex/pull/30201)**
   Discarding still‑valid tokens on transient `/server/refresh` errors caused reconnect storms; now retries are rate‑limited.
3. **[#30283 – Emit more turn items instead of legacy begin/end events](https://github.com/openai/codex/pull/30283)**
   Makes canonical `TurnItem` lifecycle the live source of truth for command execution, dynamic tool calls, collab agent, and sub-agent activity.
4. **[#30188 – Persist canonical items for paginated threads](https://github.com/openai/codex/pull/30188)**
   Final persistence layer for paginated rollouts; stores completed `TurnItem` snapshots instead of legacy item‑shaped events.
5. **[#30297 – Enable remote plugins by default](https://github.com/openai/codex/pull/30297)**
   Promotes the remote plugin feature from under‑development to stable; preserves existing override for disabling.
6. **[#30313 – Add referral invites to /usage](https://github.com/openai/codex/pull/30313)**
   Temporary client‑owned referral invite flow under `/usage`, binding invites to embedded session identity.
7. **[#30273 – Consume pushed exec-server process events](https://github.com/openai/codex/pull/30273)**
   Completes unified-exec processes from ordered event stream instead of final `process/read` – adds sandbox‑denial state.
8. **[#30302 – Preserve namespaces on custom tool calls](https://github.com/openai/codex/pull/30302)**
   Custom tool call namespaces are now preserved during deserialisation and app-server replay; adds regression tests.
9. **[#30286 – Overlap diff root discovery with world state](https://github.com/openai/codex/pull/30286)**
   Runs `record_context_updates_async` concurrently with world‑state construction to reduce cold‑turn latency.
10. **[#30291 – Expose environment info RPC](https://github.com/openai/codex/pull/30291)**
    Adds experimental `environment/info` RPC for named environments; returns shell/cwd metadata.

## 5. Feature Request Clusters
- **Configurability of providers and transport**
  - [#28902](https://github.com/openai/codex/issues/28902): Configurable `base_url` for the `amazon-bedrock` provider.
  - [#27381](https://github.com/openai/codex/issues/27381): HTTPS‑only transport option for networks blocking WebSocket.
  - [#30299](https://github.com/openai/codex/issues/30299): CLI commands to inspect, prune, delete, and scope memories (Windows).
- **UI/UX customisation**
  - [#30268](https://github.com/openai/codex/issues/30268): Configurable Codex pet animation duration for the floating overlay.
- **Remote Control resilience**
  - Multiple issues ask for in‑process recovery of stalled relay connections (e.g., #30301, #26786).

## 6. Developer Pain Points
- **Rate-limit and token consumption anomalies** remain the most pressing concerns: three issues (#14593, #28879, #30212) with over 600 combined comments report budgets draining 10–20× faster than expected, often without any usage shown in the daily graph. The community is demanding transparency on how token limits are calculated and why thresholds changed around mid‑June.
- **SIGTRAP crashes on Intel macOS** affect CLI users on `codex 0.139.0` through `0.142.2`. Several issues (#29000, #28090, #30300) remain open or have been closed without public root cause, leaving Intel Mac users unable to complete gpt-5.5 sessions.
- **Windows App spawning thousands of `git` commands** (#20567) and **source-control watcher causing CPU storms on macOS** (#29084) indicate aggressive git polling that degrades system performance.
- **Unbounded disk usage** from `code_sign_clone` (#27536) on macOS auto-updates has been closed but the underlying cleanup story is unresolved for users who hit 62 GB.
- **Entitlement mismatches** after upgrading subscriptions (#18357, #30212) suggest a gap in how Codex App synchronises plan changes with server-side limits.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-27

## Today's Update Brief

Activity remains high with 50 recently updated issues and 18 pull requests in the last 24 hours. A new nightly release (v0.51.0-nightly.20260626) shipped with CI pipeline fixes. Agent reliability continues to dominate community discussion, with several long-standing P1 bugs around subagent termination, generalist agent hangs, and shell execution stalls still awaiting retesting.

## Releases

**v0.51.0-nightly.20260626.gb14416447** — [View release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260626.gb14416447)
- Fix: CI pipeline improvements — prevents bad NPM releases and promotes job crashes (PR #28147 by @galdawave)
- Fix: `no_proxy` test updated (@jerrylin3321)
- Changelog for v0.50.0-preview.1 included

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, bug, 8 comments)
   `codebase_investigator` subagent incorrectly reports `status: "success"` with `Termination Reason: "GOAL"` when it actually hit the maximum turn limit. This masks interruptions and could mislead users into thinking analysis completed. Community reaction: 2 👍, awaiting retesting.

2. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (P1, customer-issue, 7 comments)
   EPIC tracking expansion of behavioral eval tests (currently 76 tests across 6 models). Community discussion focuses on coverage gaps. No community upvotes.

3. **[#22745 — AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2, feature EPIC, 7 comments)
   Investigating whether AST-aware tooling can reduce turns, improve read precision, and reduce token noise. Community sentiment: 1 👍, but active discussion suggests interest.

4. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, bug, 7 comments, 8 👍)
   Long-standing issue: deferring to the generalist agent causes indefinite hangs on simple tasks (e.g., folder creation). Workaround exists (instruct model not to use subagents). High community frustration, still awaiting retesting.

5. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, bug, 6 comments)
   Anecdotal but consistent: custom skills and sub-agents are ignored unless explicitly instructed. Community notes that even well-described skills (gradle, git) are bypassed.

6. **[#25166 — Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, bug, 4 comments, 3 👍)
   After simple CLI commands complete, the agent hangs displaying "Awaiting user input" while the shell has clearly finished. High-impact on automation workflows. Effort: medium.

7. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, bug, 4 comments, 1 👍)
   Browser agent reports `Termination Reason: GOAL` but actually fails on Wayland displays. Similar pattern to #22323. Awaiting retesting.

8. **[#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, bug, 3 comments)
   API returns 400 when more than 128 tools are available. Community expects smarter tool-scoping rather than a hard limit. Need-information status.

9. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, bug, security, 5 comments)
   Auto Memory sends transcript content to model context before redaction occurs. Secrets could leak into model context despite redaction instructions. Community: 0 👍, but security-critical.

10. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, bug, 5 comments)
    Sessions that the extraction agent chooses not to read remain unprocessed, causing infinite retry loops. Related to memory system efficiency.

## Key PR Progress

1. **[#28164 — Limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164)** (size/m, OPEN)
   Implements a strict 15-turn limit on recursive reasoning per user request, protecting CPU resources and API quotas from infinite loops. Customizable via `maxSessionTurns`.

2. **[#27971 — Strip thoughts from scrubbed history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** (size/m-l, OPEN)
   Resolves **thought leakage** where model internal monologues leak into plain-text history, causing confusion and infinite loop monologues in subsequent turns.

3. **[#28053 — Defensive path resolution for `@`-prefixed file references](https://github.com/google-gemini/gemini-cli/pull/28053)** (size/xl, OPEN)
   Fixes "File not found" errors when tools receive paths like `@policies/new-policies.txt`. Also fixes macOS tests.

4. **[#27966 — Case-insensitive sensitive path blocklist and VS Code HITL](https://github.com/google-gemini/gemini-cli/pull/27966)** (size/m, CLOSED)
   Security fix: enforces case-insensitive blocklist for `.git`, `.env`, `node_modules` to prevent bypass attacks. Also adds human-in-the-loop for VS Code edits.

5. **[#28163 — Caretaker Agent triage worker core foundation (part 1/2)](https://github.com/google-gemini/gemini-cli/pull/28163)** (size/l, OPEN)
   First part of the automated triage system for repository issues, built on Cloud Run.

6. **[#28015 — Cloud Run webhook ingestion service](https://github.com/google-gemini/gemini-cli/pull/28015)** (size/l-xl, OPEN)
   Implements the ingestion side of the Caretaker Agent — verifies GitHub webhook signatures, stores issues in Firestore, publishes to Pub/Sub.

7. **[#28162 — Buffer chat compression telemetry](https://github.com/google-gemini/gemini-cli/pull/28162)** (P2, size/m, OPEN)
   Wraps chat compression OTEL log emission in telemetry buffer for enterprise observability. Fixes #23445.

8. **[#27915 — Trust dialog discloses the hook shape that never runs](https://github.com/google-gemini/gemini-cli/pull/27915)** (P1, security, size/m, OPEN)
   Fixes an inverse disclosure bug: the workspace-trust dialog shows the **inverse** of hooks that actually execute. A `SessionStart` hook in the canonical shape could execute arbitrary shell on a single trust click without being displayed.

9. **[#28059 — Don't let unreadable `.env` (EACCES) break extension loading](https://github.com/google-gemini/gemini-cli/pull/28059)** (P2, size/m, OPEN)
   Fixes extension system failure when a workspace `.env` is unreadable under sandbox permissions. Root-cause fix with hardening on Cloud Shell path.

10. **[#28012 — Sync footer branch name on filesystems without `fs.watch` events](https://github.com/google-gemini/gemini-cli/pull/28012)** (P2, size/m, OPEN)
    The git branch indicator in the footer now updates after `git checkout` on WSL mounts and network shares, where `fs.watch` doesn't fire events.

## Feature Request Clusters

**AST-Aware Tooling**: Multiple issues (#22745, #22746) request AST-level awareness for file reading, searching, and codebase mapping — aiming to reduce turn count and improve token efficiency.

**Subagent Trajectory & Debuggability**: Requests for better subagent trajectory sharing (#22598), including subagent context in `/bug` reports (#21763), and making subagent behavior visible via `/chat share`.

**Agent Self-Awareness**: Issue #21432 requests that Gemini CLI accurately reports its own flags, hotkeys, and execution capabilities — essentially acting as its own expert guide.

## Developer Pain Points

- **Agent hangs and infinite loops** remain the most frequently reported frustration, appearing in at least 5 distinct active issues (#21409, #25166, #22186, #22465, #21968). A pattern of "apparent completion followed by persistent hang" is common.
- **Subagent termination reports are unreliable** — multiple issues demonstrate agents reporting `GOAL` success when they actually hit turn limits or failed (#22323, #21983).
- **Auto Memory system inefficiency** — concerns about infinite retries on low-signal sessions (#26522) and secrets leaking into model context before redaction (#26525) indicate the memory subsystem needs hardening.
- **Settings and permissions ignored** — agents bypassing `settings.json` overrides (#22267) and running subagents when explicitly disabled (#22093) undermines user trust in configuration.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-27

## Today’s Update Brief
Two minor releases (v1.0.66-0 and v1.0.66-1) shipped with new subagent depth controls, chronicle draft review, MCP server toggles, and OpenTelemetry configuration. Community activity was high: 21 issues and 1 PR were updated in the last 24 hours, with a clear spike in memory-leak and clipboard bugs across Linux and Windows.

## Releases

### v1.0.66-1 (latest) — June 26–27
- **Added:** Subagent concurrency and depth limits in `/settings` (usage-based billing users)
- **Added:** `/chronicle skills review` command to review draft skill changes with accept/reject/defer options
- **Added:** Desktop notifications for attention prompts and idle sessions

### v1.0.66-0 — June 26
- **Added:** Toggle to enable/disable MCP servers from the MCP list view
- **Added:** Experimental response budget controls in CLI settings
- **Added:** Managed settings can now configure OpenTelemetry export
- **Fixed:** MCP tools on OAuth-authenticated remote servers recover automatically after a mid-session token expiration

## Hot Issues (10 selected)

1. **[#2082] Ctrl+Shift+C no longer copies to clipboard on Linux**
   *[OPEN, area:platform-linux, area:input-keyboard]*
   Affected workflow: Copy-paste in terminal sessions on Ubuntu 24.04. Broken since v1.0.4. 22 comments, 10 👍.
   https://github.com/github/copilot-cli/issues/2082

2. **[#3944] Subagent transcripts inlined verbatim and uncapped into parent session export**
   *[OPEN, area:sessions, area:agents]*
   Impact: Session exports can balloon in size; full subagent tool-call output is embedded with no summarization.
   https://github.com/github/copilot-cli/issues/3944

3. **[#1928] Allow to pause copilot work mid-session**
   *[OPEN, area:sessions]*
   Request: Ability to pause a session, give additional instructions, and resume without losing context. 10 comments, 4 👍.
   https://github.com/github/copilot-cli/issues/1928

4. **[#3947] Theme system regression in 1.0.64 — alt-screen background always painted**
   *[CLOSED, area:theming-accessibility]*
   Issue: All theme options (including high-contrast) block terminal host background. Fixed shape discussed before closure.
   https://github.com/github/copilot-cli/issues/3947

5. **[#3906] CVE assignment request**
   *[OPEN, triage]*
   User has submitted a security report, received a GHSA ID, and requests CVE assignment while working on fixes.
   https://github.com/github/copilot-cli/issues/3906

6. **[#3951] Native PowerShell CLI compatibility**
   *[OPEN, area:platform-windows]*
   Feature request: Make the CLI a proper PowerShell cmdlet for automation and system administration.
   https://github.com/github/copilot-cli/issues/3951

7. **[#3940] Custom agent support for `skills` field to limit preloaded context**
   *[OPEN, area:agents, area:plugins]*
   Request: Allow `.github/agents/*.md` files to define a `skills` field so that only relevant skills are preloaded.
   https://github.com/github/copilot-cli/issues/3940

8. **[#3954] `explore` tool hardcodes model to `gpt-5.4-mini`, ignoring custom/DeepSeek API**
   *[OPEN, triage]*
   Impact: Custom model configurations are silently ignored when the agent uses the `explore` tool, causing API failures.
   https://github.com/github/copilot-cli/issues/3954

9. **[#3945] Memories leaking between repositories**
   *[OPEN, area:context-memory]*
   User reports previously stored facts from one repo appear in a brand-new repo with no `.copilot` directory.
   https://github.com/github/copilot-cli/issues/3945

10. **[#3950] Plugin marketplace error for already-installed plugins from private SSO repos**
    *[OPEN, area:authentication, area:plugins]*
    Error toast “failed to browse marketplace `<name>`” appears in Settings → Plugins for private SSO-enforced org repositories.
    https://github.com/github/copilot-cli/issues/3950

## Key PR Progress

Only one PR was updated in the last 24 hours:

### [#570] Add macOS installation instructions to README.md
*[CLOSED, WIP]*
Author: @Copilot. Original prompt requested macOS-specific installation instructions. PR description tracked progress via the Copilot Coding Agent suffix. No new activity in the last 24h aside from the update timestamp.
https://github.com/github/copilot-cli/pull/570

## Feature Request Clusters

**1. Session lifecycle controls**
Multiple users request pause/resume functionality (#1928) and the ability to inject instructions mid-session without restarting.

**2. Custom agent configuration**
Requests for a `skills` field in custom agents (#3940) and for limiting which skills are preloaded into context. Also requests for `--agent` to work with `--acp` (non-interactive mode) (#3942).

**3. Context and memory isolation**
Users want clear boundaries between repository memories (#3945) and for custom/local instructions not to leak into repository analysis (#3946). The uncapped subagent transcript in export (#3944) also relates to context management.

**4. Clipboard parity across operating systems**
Both Linux (#2082) and Windows (#3949) clipboard copy operations are reported broken, with high community engagement.

**5. MCP and plugin marketplace reliability**
Users ask for better handling of SSO-enforced plugin registries (#3950) and correct variable interpolation when installing MCP servers from registries (#3887, now closed).

## Developer Pain Points

- **Clipboard broken on both Linux and Windows** — #2082 (Linux, 22 comments) and #3949 (Windows 11) are the most active open bugs; users report the CLI states copy succeeded even when the clipboard is empty.
- **Memory and context leakage** — Two separate reports (#3945, #3946) show memory facts and custom instructions leaking across unrelated repositories, which can corrupt analysis and code generation.
- **Model hardcoding in tools** — The `explore` tool (#3954) ignores custom API endpoints and model selections, forcing `gpt-5.4-mini` even when DeepSeek or other providers are configured.
- **Theme and accessibility regressions** — #3947 (closed) and #3773 (open) both describe broken light/high-contrast themes that make text unreadable or block terminal background color.
- **Plugin marketplace errors with SSO orgs** — #3950 indicates that private SSO-enforced repositories trigger persistent “failed to browse marketplace” toasts, even for already-installed plugins.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-06-27

## Today's Update Brief
Activity was moderate with 2 open bugs and 2 open PRs updated in the last 24 hours. No new releases arrived today. A closed 403 auth bug (#2425) was revisited, and two fresh bugs surfaced around plan-mode inconsistency and input handling on Linux. Community contributions remain focused on doc improvements and API serialization fixes.

## Releases
No new releases in the last 24 hours.

## Hot Issues (3 items in last 24h, picking all)

1. **[#2425] [CLOSED] 403 Forbidden error for Kimi For Coding**
   Affected Workflow: Users receive a persistent 403 HTTP error on every message when using `kimi-for-coding` model with Kimi Code CLI v0.9.0 on macOS.
   Impact: Blocks all requests for users on the Kimi Code subscription tier.
   Community: 10 comments, 3 👍. Maintainer/closer activity visible on 2026-06-26.
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2425

2. **[#2478] [OPEN] ExitPlanMode reports "Not in plan mode" while system reminder claims plan mode is active**
   Affected Workflow: When the system reminder states "Plan mode is active" and provides a plan file path, calling `ExitPlanMode` returns `"Not in plan mode"`. The assistant cannot exit plan mode normally.
   Impact: Workflow deadlock for users relying on plan-mode toggling; forced workarounds required.
   Community: 1 comment, 0 👍. Author reports state inconsistency.
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2478

3. **[#2477] [OPEN] Double Enter Key & `/sessions` Feedback Loss**
   Affected Workflow: On Ubuntu 24.04.4 LTS with Kimi CLI v0.20.0, pressing Enter twice causes input duplication. Additionally, `/sessions` command fails to return session list feedback.
   Impact: Degraded CLI interactivity and session management for Linux users.
   Community: 0 comments, 0 👍. Fresh issue, no maintainer response yet.
   Link: https://github.com/MoonshotAI/kimi-cli/issues/2477

## Key PR Progress (2 items in last 24h, picking all)

1. **#2287 [OPEN] docs(readme): add prerequisites list to Development section**
   Feature: Adds a `### Prerequisites` subsection listing required tools before `make prepare`.
   Why: Addresses #2274 — contributors previously had no guidance on what to install first.
   Status: Open since 2026-05-14, updated 2026-06-26.
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2287

2. **#2476 [OPEN] fix(kosong): omit reasoning_effort instead of sending null when thinking is off**
   Feature: Fixes serialization bug where `thinking="off"` sent `"reasoning_effort": null` to OpenAI SDK. Now properly omits the field.
   Why: Prevents API rejection or unexpected behavior from explicit null values.
   Status: Open, created 2026-06-26.
   Link: https://github.com/MoonshotAI/kimi-cli/pull/2476

## Feature Request Clusters
No distinct feature request clusters emerged from today's data. All three updated issues are bug reports rather than feature requests.

## Developer Pain Points
- **Plan-mode state inconsistency** (#2478): Users report mismatch between system reminder claims and actual plan-mode state, making it impossible to exit plan mode via the intended API.
- **403 authorization errors** (#2425): Persistent auth failures for specific model/plan combinations on macOS—still relevant for users on older versions.
- **Terminal input quirks on Linux** (#2477): Double Enter key press and missing `/sessions` feedback degrade CLI experience on Ubuntu 24.04.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-06-27

### Today's Update Brief
No new releases were published in the last 24 hours. Issue and PR activity remained high, with 50 updated issues and 50 updated PRs. Several long-standing bugs around context compaction, model picker, and session handling saw renewed attention, while a cluster of PRs from an automated cleanup batch (May 26) were merged today.

### Releases
_No new versions in the past 24 hours._

### Hot Issues (10 notable)

1. **[#28846] [CLOSED] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction**
   _84 comments · 82 👍 · Closed_
   Community strongly requested the OpenCode Go subscription limits be updated to reflect the permanent 75% price cut on DeepSeek V4 Pro API. The issue is now closed, suggesting the team has acknowledged or implemented the adjustment.
   [Link](https://github.com/anomalyco/opencode/issues/28846)

2. **[#12598] [CLOSED] Windows: latest update won't launch (v1.1.53)**
   _16 comments_
   A recurring critical bug: after upgrading to v1.1.53 on Windows 10, the app fails to open—clicking the icon does nothing and CLI output is blank. Closed but remains a caution for upgrade paths.
   [Link](https://github.com/anomalyco/opencode/issues/12598)

3. **[#450] [CLOSED] Support reasoning_effort parameter in UI**
   _15 comments · 26 👍_
   Long-standing request to expose `reasoning_effort` (supported by OpenAI, Gemini, DeepSeek etc.) in the UI, similar to `/models` command. Closed after a year—likely implemented via recent UI changes.
   [Link](https://github.com/anomalyco/opencode/issues/450)

4. **[#6169] [CLOSED] /model TUI picker does not show all custom provider models**
   _12 comments · 1 👍_
   Custom models load correctly (`opencode models --verbose`) but many are missing from the `/model` picker. Only recently used models appear. Still closed, indicating a fix may have been merged.
   [Link](https://github.com/anomalyco/opencode/issues/6169)

5. **[#23153] [OPEN] Pay Go with crypto**
   _12 comments · 23 👍_
   Feature request to support cryptocurrency payments for OpenCode Go subscriptions. Open and actively upvoted, reflecting user demand for alternative payment methods.
   [Link](https://github.com/anomalyco/opencode/issues/23153)

6. **[#28202] [CLOSED] Plugin async prompts overlap with Web prompt_async causing duplicate assistant siblings**
   _7 comments · 4 👍_
   Bug in `opencode web` v1.15.4 where concurrent async prompts produced duplicate assistant messages under a single user message, corrupting session data. Closed with fix likely in recent release.
   [Link](https://github.com/anomalyco/opencode/issues/28202)

7. **[#32149] [OPEN] OpenCode stops processing requests without response**
   _6 comments · 2 👍_
   A persistent issue: after submitting a prompt, the app shows "thinking" but never returns a response. Affects both Go and Zen models. Repeated reports (see also #34087) indicate instability in the inference pipeline.
   [Link](https://github.com/anomalyco/opencode/issues/32149)

8. **[#19005] [OPEN] Make local file paths clickable in terminal output**
   _6 comments · 2 👍_
   Users want file paths generated by OpenCode (reports, images) to be clickable in the terminal, rather than requiring manual copy-paste.
   [Link](https://github.com/anomalyco/opencode/issues/19005)

9. **[#31152] [OPEN] Infinite compaction loop on every response**
   _4 comments_
   Even with minimal configuration, every response triggers an infinite compaction loop. Reproduced with empty sessions, no skills, no agents. A critical performance and data corruption bug.
   [Link](https://github.com/anomalyco/opencode/issues/31152)

10. **[#34006] [OPEN] Pasting local file path inconsistent between Desktop & Terminal**
    _3 comments_
    Pasting a file path (e.g. `C:\Users\...`) behaves differently in Desktop (auto-attach) vs Terminal (plain text). No option to paste as plain text in either mode. A UX inconsistency reported in the last 24h.
    [Link](https://github.com/anomalyco/opencode/issues/34006)

### Key PR Progress (10 important)

1. **[#34119] [OPEN] Refactor: separate layer node functionality and integrate into v2**
   By @jlongster. A core refactoring that pulls layer node logic out and integrates it into the v2 architecture. Not yet merged, but represents significant internal cleanup.
   [Link](https://github.com/anomalyco/opencode/pull/34119)

2. **[#34125] [OPEN] Fix MCP: request refresh token scope**
   By @rekram1-node. Backports MCP SEP-2207 scope selection to stable TypeScript SDK, ensuring `offline_access` is only requested when the server supports refresh tokens.
   [Link](https://github.com/anomalyco/opencode/pull/34125)

3. **[#34116] [OPEN] Fix app: question UX fixes and improvements**
   By @eXamadeus. Closes four issues (#14924, #32791, #15896, #15353) with whitespace-hidden diff. Improves question prompts in the UI.
   [Link](https://github.com/anomalyco/opencode/pull/34116)

4. **[#34123] [OPEN] Fix TUI: add plain text paste**
   By @ametel01. Adds `Ctrl+Alt+V` binding to paste clipboard as plain text, addressing #34006.
   [Link](https://github.com/anomalyco/opencode/pull/34123)

5. **[#33918] [OPEN] Fix skill: include v2 plugin skills in legacy list**
   By @tangtaizong666. Ensures v2 plugin-registered skills appear in `/skills` and the skill API, closing #33896.
   [Link](https://github.com/anomalyco/opencode/pull/33918)

6. **[#29457] [CLOSED] Fix plan: don't carry plan model into build agent on plan_exit**
   Automated PR (merged today). Prevents a stale plan model from leaking into the build agent session, fixing #9296.
   [Link](https://github.com/anomalyco/opencode/pull/29457)

7. **[#29446] [CLOSED] Fix OpenCode: bound Codex stream stalls**
   Automated PR (merged). Prevents SSE streams from hanging indefinitely when upstream stalls, closing #29129.
   [Link](https://github.com/anomalyco/opencode/pull/29446)

8. **[#29404] [CLOSED] Fix core: handle JSON parse failure gracefully in models-dev**
   Automated PR (merged). Catches network failures returning HTML instead of JSON to avoid crashing on startup, closing #29366.
   [Link](https://github.com/anomalyco/opencode/pull/29404)

9. **[#29393] [CLOSED] Fix CLI: show error message in `.fail()` handler**
   Automated PR (merged). Ensures error messages are written to stderr before showing help, closing #29390.
   [Link](https://github.com/anomalyco/opencode/pull/29393)

10. **[#29373] [CLOSED] Refactor app: migrate session timeline to TanStack Virtual**
    Automated PR (merged). Replaces virtua with TanStack Virtual for session timeline, improving scrolling performance and maintainability.
    [Link](https://github.com/anomalyco/opencode/pull/29373)

### Feature Request Clusters
- **Pricing & Payment**
  Requests to adjust Go subscription limits after DeepSeek V4 Pro price cut (#28846) and to add cryptocurrency payment support (#23153). Both reflect sensitivity to API cost and payment flexibility.
- **Session & Model Management**
  Persistent desire for per-chat model selection (#17873), preserving model choice across chats, and propagating session IDs to subprocesses (#15739). Also: exposing coding agent markers to shell commands (#34065).
- **UI/UX Polishing**
  Clickable file paths in terminal output (#19005), plain text paste for file paths (#34006), and restoring older UI features that some users consider lost (#34100).
- **Internationalization**
  Partial translation of Windows desktop menus (French locale — #34104) shows ongoing i18n gaps.

### Developer Pain Points
- **Context Compaction Bugs**
  Multiple reports of infinite or ignored compaction loops (#31152, #33128, #32385) causing session corruption or performance degradation, despite configuration and env vars to disable it.
- **Model/Provider Incompatibility**
  Qwen 3.7 via OpenRouter produces invalid tool calls (#33618); GitHub Copilot models list but fail with "model not supported" (#34048); GLM-5.2 session breaks after accidental image input (#34113).
- **Unresponsive Inference**
  Several users report OpenCode stops responding after "thinking" state with no output (#32149, #34087), pointing to potential stream or timeout handling failures.
- **Model Picker Gaps**
  Custom provider models still missing from `/model` TUI picker (#6169), and reasoning_effort parameter not exposed in UI (#450)—though the latter is now closed, indicating a fix.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-27

## Today’s Update Brief

Today’s activity is steady, with one minor release (cua-driver-rs v0.6.8) and 50 issues plus 50 pull requests updated in the last 24 hours. The community is actively reporting Windows-specific shell leaks and TUI rendering glitches, while maintainers are pushing fixes for the session collapse preview, MCP resource browsing, and a new `qwen tag` multiplayer agent design. Several security-adjacent bugs (source deletion path traversal, negative config values, stale CI contamination) were patched and closed today.

## Releases

**cua-driver-rs v0.6.8**
*A minor prebuilt-binaries release for the CUA driver (vendored under `packages/cua-driver/core`).*
- Adds relative-coordinate mode support (fork).
- Provides codesigned + notarized universal binary + `QwenCuaDriver.app` for **macOS**.
- Ships unsigned x86_64 + arm64 builds for **Linux** (glibc 2.31 floor) and **Windows**.
[Release details](https://github.com/QwenLM/qwen-code/releases)

## Hot Issues (10 noteworthy)

**1. [#5873 (open, P1 bug) – Windows OOM due to unbounded pwsh/powershell spawning**](https://github.com/QwenLM/qwen-code/issues/5873)
*Affected workflow:* Every tool call spawns a new PowerShell process that is never reaped. On Windows, this leaks processes until memory exhaustion. User reaction is emotional (“真的忍不住要爆粗口了”). This was fixed today via [#5892](https://github.com/QwenLM/qwen-code/pull/5892) which adds tree-kill for PTY shell trees.

**2. [#5083 (open, P2 bug) – TUI freezes, zombie bash process not reaped**](https://github.com/QwenLM/qwen-code/issues/5083)
*Affected workflow:* During a session, the TUI becomes completely unresponsive. Diagnostics show a zombie subprocess (bash) has been in Z state for ~4 minutes, not reaped by the main process. Related to the general process lifecycle issue observed on both Linux and Windows.

**3. [#5834 (closed, P1 security bug) – Source deletion accepts path-like slugs**](https://github.com/QwenLM/qwen-code/issues/5834)
*Affected workflow:* The `sourceDeletion` endpoint uses a user-provided `sourceSlug` as a filesystem path segment. A crafted slug with `../` can escape the workspace `sources` directory. Fixed via [#5829](https://github.com/QwenLM/qwen-code/pull/5829) which rejects unsafe slugs before resolution.

**4. [#5905 (closed, P2 bug) – POST /workspace/settings accepts negative cleanupPeriodDays**](https://github.com/QwenLM/qwen-code/issues/5905)
*Affected workflow:* The `general.cleanupPeriodDays` field accepts negative values (e.g., `-5`) without a `minimum` constraint. Such values are persisted and then silently clamped at runtime, creating inconsistent behavior. Fixed via [#5906](https://github.com/QwenLM/qwen-code/pull/5906) which adds `minimum: 0`.

**5. [#5819 (open, P2 bug) – Auto-upgrade silently changes model to higher-cost provider**](https://github.com/QwenLM/qwen-code/issues/5819)
*Affected workflow:* After an automatic self-update from v0.18.3 to v0.19.x, the `setting.json` model field was silently changed from `DeepSeek-4 flash` (low-cost) to `DeepSeek-4 pro` (high-cost). The user only discovered this after receiving a SMS balance warning from DeepSeek. Also reports that Chinese input is rendered in Traditional Chinese characters.

**6. [#5055 (closed, P1 security bug) – VSIX detected as Trojan:JS/ShaiWorm.DBA!MTB**](https://github.com/QwenLM/qwen-code/issues/5055)
*Affected workflow:* The VSIX file `qwenlm.qwen-code-vscode-ide-companion-0.18.0-win32-x64.vsix` was flagged by Windows Defender as a trojan. No response from maintainers was recorded in the issue. Likely a false positive from the packaging pipeline.

**7. [#4218 (open, bug) – MCP “filesystem” server shows connected but tools not available**](https://github.com/QwenLM/qwen-code/issues/4218)
*Affected workflow:* On Windows, after configuring the `@modelcontextprotocol/server-filesystem` MCP server, the UI shows “connected” but the AI model does not receive tool definitions. This blocks file-read/write operations. Root cause not yet identified.

**8. [#5800 (open, P2 bug) – Last line of tall replies overwritten in terminal (Static mode)**](https://github.com/QwenLM/qwen-code/issues/5800)
*Affected workflow:* In default TUI mode (Static render path), when an assistant reply exceeds terminal height, the last line is briefly printed then overwritten/hidden. User notes this is an upstream Ink bug (#973). Welcome for PR was marked.

**9. [#4175 (open, feature-request) – Mode B feature-priority roadmap toward v0.16 production-ready**](https://github.com/QwenLM/qwen-code/issues/4175)
*Affected workflow:* `qwen serve` (Mode B) is functionally runnable after Stage 1 daemon and workspace refactor. This tracking issue lists remaining work for production readiness. 42 comments — the most active discussion today.

**10. [#5882 (closed, P1 bug) – Agent CI jobs run un-isolated on shared ECS runner → cross-PR state contamination**](https://github.com/QwenLM/qwen-code/issues/5882)
*Affected workflow:* The `qwen-triage` workflow posted triage comments from PR #5872 onto the wrong PR (#5874) because CI containers on the shared ECS runner share state between runs. Fixed by adding per-run `QWEN_HOME` reset and cleanup.

## Key PR Progress (10 important PRs)

**1. [#5892 (closed) – fix(core): tree-kill PTY shell tree on Windows to stop pwsh leak**](https://github.com/QwenLM/qwen-code/pull/5892)
*Direct response to #5873.* Uses `tree-kill` to properly reap the entire process tree spawned by `node-pty` on Windows. Previously `ptyProcess.kill()` only killed the pseudo-console host, leaving `pwsh`/`powershell`/`cmd` processes alive.

**2. [#5890 (open) – feat(loop): inject a .qwen/loop.md task file at fire time via sentinels**](https://github.com/QwenLM/qwen-code/pull/5890)
*New feature for `/loop` commands.* Adds a durable, user-editable task file (`.qwen/loop.md`) that is re-read and injected on every tick. Allows long-running loops to carry a task list without re-stating the work each time.

**3. [#5888 (open) – feat(channels): qwen tag — RFC + Phase 0 (multiplayer channel-resident agent)**](https://github.com/QwenLM/qwen-code/pull/5888)
*Proposes a channel-resident multiplayer agent built on existing channel adapters and `qwen serve` daemon. Targets DingTalk first. Part of a larger “qwen tag” concept, with Phase 0 being a minimal viable design document + initial code.

**4. [#5778 (open) – feat(cli): add /model –vision for a fallback vision model**](https://github.com/QwenLM/qwen-code/pull/5778)
*Adds a flat `visionModel` setting similar to `/model –fast`. Allows users to configure an image-capable model that the vision bridge uses when the primary model cannot handle images. Includes a picker UI.

**5. [#5879 (closed) – feat(web-shell): browse MCP server resources in the /mcp dialog**](https://github.com/QwenLM/qwen-code/pull/5879)
*Brings the Web Shell’s `/mcp` dialog to parity with the TUI. Each MCP server row now shows resource and prompt counts, with expandable resources. Built on the same pattern as #5544 and #5635.

**6. [#5738 (open) – fix(cli): default to virtualized terminal history**](https://github.com/QwenLM/qwen-code/pull/5738)
*Turns on virtualized scrollable history by default in interactive sessions. Users can opt out via `ui.useTerminalBuffer: true`. Addresses long-requested usability improvement for browsing past output.

**7. [#5848 (open) – feat(ui): add ui.history.collapsePreviewCount to show last N turns when resuming**](https://github.com/QwenLM/qwen-code/pull/5848)
*When resuming a collapsed session, keeps the most recent N user turns visible while collapsing the rest. Defaults to 0 (all collapsed). Useful for maintaining context without overwhelming scroll.

**8. [#5780 (open) – feat: add `qwen update` and `/update` commands with auto-update support**](https://github.com/QwenLM/qwen-code/pull/5780)
*Adds a new CLI command and slash command to check for new releases and install automatically (standalone installs) or guide manual update (npm/pnpm). Queries the npm registry for latest version.

**9. [#5847 (open) – feat(serve): add runtime context injection for per-turn system-reminders**](https://github.com/QwenLM/qwen-code/pull/5847)
*Adds a per-session key-value store (`RuntimeContext`) that external callers can populate. Injected as `<system-reminder>` blocks on every turn. Allows dynamic context between the static system prompt and user messages.

**10. [#5884 (open) – feat(serve): add sessionless workspace remember**](https://github.com/QwenLM/qwen-code/pull/5884)
*Adds a daemon API for enqueueing a hidden memory-remember task without creating a user-visible session. Useful for background knowledge ingestion without disrupting active sessions.

## Feature Request Clusters

- **Hot-reload system**: Multiple issues request the ability to reload skills, extensions, MCP servers, and configuration at runtime without restarting the session. The tracking issue [#3696](https://github.com/QwenLM/qwen-code/issues/3696) collects remaining work. This is a recurring ask across several recent releases.

- **Slash-command completion improvements**: Two issues today ask for better skill command auto-complete: [#5875](https://github.com/QwenLM/qwen-code/issues/5875) requests mid-input fuzzy matching (not just prefix-based), and [#5898](https://github.com/QwenLM/qwen-code/pull/5898) lands a fix for mid-input skill completion.

- **Telegram bot feature parity**: [#5907](https://github.com/QwenLM/qwen-code/issues/5907) tracks completing Telegram bot command support to match the CLI menu. The goal is reliable remote chat workflow for session management and command handling.

- **Multiplayer / channel-resident agents**: [#5888](https://github.com/QwenLM/qwen-code/pull/5888) launches a “qwen tag” RFC for a DingTalk-resident multiplayer agent, suggesting growing interest in group-chat deployments beyond the single-user CLI.

- **Plan Approval Gate expansion**: [#5881](https://github.com/QwenLM/qwen-code/issues/5881) proposes opening the Plan Approval Gate (draft/review model) to all plan mode entries, not just model-initiated ones. This would allow user-triggered plan reviews as well.

## Developer Pain Points

1. **Windows process lifecycle bugs**: Two high-severity reports today (#5873, #5083) describe un-reaped child processes causing TUI freezes (zombie bash) or OOM (leaking PowerShell). The Windows-specific root cause (node-pty not killing the process tree) was fixed in [#5892](https://github.com/QwenLM/qwen-code/pull/5892).

2. **UI rendering glitches**: The terminal rendering bug [#5800](https://github.com/QwenLM/qwen-code/issues/5800) (last line of tall replies overwritten) and the history overscroll issue show that the TUI (Ink-based) still has edge cases in terminal height management.

3. **Configuration being silently mutated**: The auto-upgrade model-switch bug (#5819) where settings.json is silently rewritten to a higher-cost model is a significant trust issue. Users expect upgrades to preserve configuration.

4. **CI contamination**: The cross-PR state contamination in CI (reported in #5882 and also earlier #4805, #5665) shows a pattern where shared runners or stale CI checks lead to incorrect build/triage results. Maintainers have added per-run isolation in today’s fix.

5. **MCP tool visibility**: The “connected but tools not available” problem on Windows (#4218) and the “uint64 format ignored” schema warnings (#5897) both point to rough edges in the MCP integration layer, particularly on non-Linux platforms.

6. **JetBrains/IntelliJ integration friction**: Issue #3511 reports that JetBrains users cannot configure Qwen Code via API key alone — they are forced into Qwen OAuth. This blocks teams using self-hosted or third-party model providers behind an OpenAI-compatible endpoint.

</details>