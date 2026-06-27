# OpenClaw Ecosystem Digest 2026-06-27

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-27 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-27

## Today's Activity Brief

The OpenClaw repository saw extremely high activity in the last 24 hours, with 500 issues and 500 pull requests updated. Of those issues, 469 remain open/active and 31 were closed; on the PR side, 451 are open and 49 were merged or closed. No new official releases were cut today. The overwhelming majority of activity is concentrated on stability bugs (session state management, message loss, security boundaries, OAuth auth provider issues) and security hardening changes, with a smaller volume of PRs addressing platform-specific gaps (Android localization, GTK Linux app) and infrastructure improvements (bounded response reads to prevent OOM/hangs). No new releases were published. The `clawsweeper:no-new-fix-pr` label appears on most issues, indicating that many open bugs have not yet had a fix PR created.

---

## Releases

**None** — No releases were published on 2026-06-27.

---

## Project Progress

No PRs were merged or closed among the top 30 most-commented items today. The following notable open PRs are actively pending maintainer review or awaiting author updates:

- **`feat(android): localize native app locale matrix`** (#97111) — Adds full Android locale parity beyond English, Russian, and Hindi; size XL, waiting on author.
- **`feat(i18n): add native app locale inventory`** (#97110) — Adds deterministic inventory for Android Compose and Apple SwiftUI/UIKit UI strings; size XL, ready for maintainer look.
- **`fix(vydra): bound control response reads`** (#96875) — Prevents unbounded body buffering on Vydra success-path; size S, ready for maintainer.
- **`fix(minimax): bound video control response reads`** (#96889) — Size S, P1 diamond lobster, ready for maintainer.
- **`fix(openrouter): bound video response reads`** (#96873) — Size XS, ready for maintainer.
- **`fix(fal): bound music/video generation response reads`** (#96886) — Size S, ready for maintainer.
- **`fix(openai-responses): bound SSE response reads`** (#97068) — Size XS, waiting on proof.
- **`fix(azure-openai-responses): bound SSE response reads`** (#97070) — Size XS, waiting on proof.

A substantial cluster of "bound reads" fixes by @Alix-007 and @wangmiao0668000666 across Vydra, MiniMax, OpenRouter, FAL, OpenAI, and Azure providers reflect a coordinated security/stability hardening campaign. These are all small or very small PRs targeting unbounded JSON body reads that could lead to OOM or hangs.

---

## Community Hot Topics

The following issues generated the most community engagement (comments and reactions) today:

- **#75 — Linux/Windows Clawdbot Apps** (109 comments, 81 👍) — Open since January, still the highest-traffic issue. Requests native desktop companion apps for Linux and Windows, with feature parity to the existing macOS app. A related PR (#59859, "cute GTK-native Linux App") is open but remains unmerged.
- **#9443 — Request: Prebuilt Android APK releases** (25 comments, 2 👍) — User asks for precompiled Android APK downloads in GitHub Releases, as the Android source in `apps/android` requires building from source.
- **#77598 — Track live dev agent behavior and trajectory** (22 comments, 1 👍) — A maintainer-run 24-hour observational watch of a dev agent's behavior; not a bug report but a running log of agent trajectory observations.
- **#86538 — Session write-lock timeouts block subagent delivery lanes** (16 comments, 1 👍) — Diamond lobster severity; session JSONL write-lock timeouts block main, cron-nested, and subagent lanes, surfacing as delivery/lifecycle failures without sufficient diagnostics.
- **#10659 — Feature Request: Masked Secrets** (13 comments, 4 👍) — Diamond lobster; requests a system where agents can use API keys without seeing them, preventing leaks and prompt injection extraction of credentials.
- **#78308 — Channel-mediated approval for MCP tool calls** (13 comments, 1 👍) — Diamond lobster; proposes an `/approve <id>` pipeline for MCP tools that mutate external state (email, vault entries), mirroring shell-exec approvals.
- **#43367 — Multi-agent orchestration unstable** (13 comments, 1 👍) — Diamond lobster; reports concurrent agent add/config overwrites, session-lock failures, and detached child work making multi-agent runs unreliable.
- **#74484 — Gateway pairing scope deadlock** (12 comments, 2 👍) — Platinum hermit; CLI is in a scope deadlock where it cannot approve/reject auto-reissued repair requests because it has insufficient gateway scopes.

**Underlying need:** Community members are deeply invested in multi-agent orchestration reliability, platform coverage (Linux/Windows/Android), and security boundaries around secrets and tool approvals. The conversation around #75 shows sustained demand for desktop companion apps on non-Apple platforms.

---

## Bugs & Stability

### Critical / Platinum Hermit Severity

- **#94228 — Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads** — P1, platinum hermit. Long tool-use sessions permanently break with HTTP 400 "Invalid signature in thinking block" on the `anthropic-messages` path. No fix PR linked; needs live repro.
- **#76042 — Clean install of new versions since 2026.5.xx is not possible** — P1, platinum hermit. Regression where fresh installations stall or fail; works in 2026.3.xx. No fix PR linked.
- **#77642 — [5.3 regression] duplicate answers + missing tool result in session history** — P1, platinum hermit. Two related failures: duplicate answers on follow-up questions and synthetic "missing tool result" errors. Needs live repro.
- **#77012 — WebChat session transcript overwritten on every turn (5.2 regression)** — P1, platinum hermit. Session JSONL transcript only retains latest exchange; page refresh loses all history.
- **#74586 — AM embedded run aborts `memory_search` tool calls** — P1, platinum hermit. Active-memory plugin embedded runs classify successful tool completions as timeouts.
- **#76038 — Stuck Session Recovery mechanism double failure** — P1, platinum hermit. Sessions stuck in `processing` state with event loop blocked; recovery mechanism disabled due to "active_reply_work" reason.
- **#69799 — Ship bundled Node binary for macOS TCC** — P1, platinum hermit. Security issue: macOS Full Disk Access/Accessibility permissions granted to shared `node` binary apply to all Node processes, not just OpenClaw.
- **#74484 — Gateway pairing scope deadlock** — P1, platinum hermit. Scope deadlock preventing CLI approval/rejection of repair requests.
- **#75782 — Embedded-run auth stage takes 10–15s synchronously** — P1, platinum hermit. Auth stage blocks event loop regardless of auth profile state.

### High / Diamond Lobster Severity

- **#86538 — Session write-lock timeouts block subagent delivery** — P1, diamond lobster. Has a linked open PR.
- **#43367 — Multi-agent orchestration unstable** — P1, diamond lobster. Linked open PR exists.
- **#75593 — Subagents list still empty after spawn** — P1, diamond lobster. Appears to be a fix that didn't actually resolve #71495.
- **#72015 — Active-memory blocks replies; QMD boot initialization overloads gateways** — P1, diamond lobster. Source repro available.
- **#77930 — Discord channel not loaded in 2026.5.4 (regression)** — P2, diamond lobster. Works in beta.1 and 2026.4.29; broken in beta.2 and 5.4.
- **#75380 — `provider-payload.jsonl` and `cache-trace.jsonl` grow unbounded** — P1, diamond lobster. No rotation/max-size policy; disk usage concern.
- **#76171 — Stale openclaw worker process accumulation** — P1, diamond lobster. Accumulated workers drive load average to 25–31; 2–3 minute response times.
- **#76042 — Clean install impossible since 2026.5.xx** — P1, platinum hermit. Already listed above.
- **#75621 — Gateway lazy-spawns duplicate stdio MCP children** — P1, platinum hermit (closed as stale today).

### Significant Regressions

- **Discord channel load regression** (#77930): Works in 2026.4.29 and 5.4-beta.1; broken in 5.4 and 5.3.x.
- **Persona greeting regression** (#77733): Bare `/new` and `/reset` no longer trigger persona greeting in 2026.5.3.
- **WebChat session overwrite** (#77012): 5.2 regression caused by SessionManager removal.
- **Duplicate answers + missing tool results** (#77642): 5.3 regression.

**Fix PRs available:** Multiple bounded-read PRs (#96875, #96889, #96873, #96886, #97068, #97070) address security/stability issues but do not directly fix the above bugs.

---

## Feature Request Clusters

### Platform Support
- **Linux/Windows Clawdbot Apps** (#75) — 81 reactions, 109 comments. The most requested feature. Related PR #59859 (GTK-native Linux app) is open but unmerged.
- **Prebuilt Android APK releases** (#9443) — User wants official precompiled APKs in GitHub Releases rather than building from source.

### Security & Secret Management
- **Masked Secrets** (#10659) — 4 reactions. Request to prevent agents from reading raw API keys.
- **Filesystem Sandboxing Config** (#7722) — 4 reactions. Configuration-level file access restrictions.
- **Denylist support for exec-approvals** (#6615) — 7 reactions. "Allow everything except X" policies for shell commands.
- **Channel-mediated approval for MCP tool calls** (#78308) — Request for `/approve` pipeline for MCP tools.
- **Bundled Node binary for macOS TCC** (#69799) — Scope macOS permissions to OpenClaw only.

### Model & Provider
- **Fully dynamic model discovery** (#10687) — Request for real-time model catalog fetching from OpenRouter, replacing static catalog.
- **Expose resolved backend model in session_status** (#51441) — Agents currently see only model aliases, not actual backend model used via LiteLLM.

### Multi-Agent & Session
- **Suppress sub-agent announce** (#8299) — Config option to disable automatic sub-agent completion announcements.
- **Subagent announce can deliver stale output** (#78055) — Bug/feature to fix history contamination.

### Platform-Specific
- **WhatsApp sticker send support** (#7476) — Sending `.webp` files delivers as images, not stickers.
- **WebChat inline button support** (#46656) — `buttons` parameter works on Telegram but not WebChat.
- **TUI: Shift+Enter for newline** (#10118) — Multi-line message composition in TUI.
- **TUI: Disable emojis/unicode for accessibility** (#9637) — Screenreader-friendly mode.

---

## User Feedback Summary

### Positive / Satisfied
- No explicit positive feedback appears in today's top issues, but the continued high engagement suggests a large and active user base.

### Pain Points / Dissatisfaction

**Multi-agent orchestration unreliable** (#43367, #75593, #86538, #78055):
- "I tried to orchestrate a small parallel coding batch from the OpenClaw CLI... hit a cluster of failures that make multi-agent runs unreliable in practice."
- "`/subagents list` still returns an empty list even immediately after a subagent has been spawned."

**Regressions breaking existing workflows** (#77642, #77012, #77733, #77930):
- "After upgrading to OpenClaw 5.2 (persists in 5.3.1)... duplicate answers when the user asks a follow-up question."
- "Webchat session JSONL transcript is **overwritten on every turn** — only the latest message exchange survives."

**Installation and onboarding friction** (#76042):
- "Previous versions 2026.3.xx i can install in ~20 min. Right now i am not able to start 2026.4.29 in normal waiting time, i can wait 5 min... nothing happens."

**High cost surprises** (#73182):
- "An OpenClaw update around April 2026 silently flipped the default reasoning level for Claude models from `off` to `on`... doubles Anthropic spend."

**Diagnostic blind spots** (#76492, #86538):
- "When `openclaw agent` cannot reach the running gateway, the CLI silently spawns an in-process embedded fallback agent... masking gateway behavior."
- "Session JSONL write-lock timeouts block... without enough owner diagnostics."

**Security concerns** (#69799, #10659):
- macOS TCC permissions apply to every Node process, not just OpenClaw.
- "Currently, secrets stored in `~/.openclaw/.env` are fully accessible to agents."

### Use Cases
- Multi-agent parallel coding batches (#43367)
- Running cron jobs that intentionally produce no output (#76159)
- Discord multi-account bot setups (#77429)
- Bedrock/Amazon provider users with IAM roles (#72031)
- Screenreader users of TUI (#9637)

---

## Backlog Watch

### Long-Unanswered Important Issues (Needing Maintainer Review)

- **#75 — Linux/Windows Clawdbot Apps** (since Jan 1, 109 comments, 81 👍) — The oldest and most active open issue. Still labeled `needs-product-decision` and `needs-maintainer-review`. A GTK-native PR (#59859) has been open since April but is also awaiting review.
- **#10659 — Masked Secrets** (since Feb 6, 13 comments, 4 👍) — Needs maintainer review and product decision.
- **#7722 — Filesystem Sandboxing Config** (since Feb 3, 9 comments, 4 👍) — Needs maintainer review and product decision.
- **#6615 — Denylist support for exec-approvals** (since Feb 1, 7 comments, 7 👍) — Needs maintainer review and product decision.
- **#14785 — Reduce tool schema token overhead** (since Feb 12, 8 comments) — Needs maintainer review and product decision.
- **#9443 — Prebuilt Android APK** (since Feb 5, 25 comments) — Needs maintainer review and product decision.
- **#77012 — WebChat session transcript overwritten** (since May 4, P1 platinum hermit, still needs live repro) — No fix PR linked despite being a critical regression.
- **#76042 — Clean install impossible** (since May 2, P1 platinum hermit) — Needs live repro; maintainer attention required urgently given the severity.

### Stale Issues Closed Today
- **#33106 — Runtime trust verification via TrustChain** (closed as `stale`)
- **#75621 — Gateway duplicate stdio MCP children** (closed as `stale`)
- **#73274 — Expose `appendAssistantMessageToSessionTranscript` in Plugin API** (closed as `stale`)

Several high-severity bugs remain open without fix PRs, including critical install failures (#76042), session recovery deadlocks (#76038), and Anthropic thinking block signature errors (#94228). The large number of `needs-live-repro` and `needs-maintainer-review` labels suggests maintainer bandwidth is a bottleneck for triaging and confirming reproductions.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-27

## 1. Daily Cross-Project Overview

Today’s activity across the four tracked projects shows OpenClaw dominating in raw volume (500 issues and 500 PRs updated), but with a large backlog of open items and no new release. ZeroClaw shipped a minor release (v0.8.2) with A2A agent discovery and skills, while merging 11 PRs. NanoBot saw a burst of feature PRs from its maintainer, including a plugin system and TTS, alongside closed security reports. PicoClaw merged 14 small hygiene PRs and an SSRF fix, but had the lowest overall ticket activity. Security hardening and multi-agent reliability are recurring themes across all projects.

## 2. Activity Comparison

| Project | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Release Status | Activity Note |
|---------|------------------------------|---------------------------|----------------|---------------|
| **OpenClaw** | 500 (469 open, 31 closed) | 500 (451 open, 49 merged) | No release | Extremely high volume; 94% of issues and 90% of PRs remain open. Backlog dominated by stability/security bugs and platform feature requests. |
| **NanoBot** | 28 (18 open, 10 closed) | 46 (39 open, 7 merged) | No release | Moderate volume; feature PRs from maintainer (@dajiaohuang) and 5 shell-allowlist bypass issues closed. |
| **ZeroClaw** | 50 (48 open, 2 closed) | 50 (39 open, 11 merged) | **v0.8.2 released** | High volume with structured RFCs; 22% of PRs merged today. New release includes A2A and skills. |
| **PicoClaw** | 5 (4 open, 1 closed) | 18 (4 open, 14 merged) | No release | Low issue volume but high merge rate: 78% of PRs merged. Focus on error handling and dependency bumps. |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 1000 combined issue/PR updates dwarf the other projects. However, its open‑to‑closed ratio is significantly worse (469 open issues vs 48 for ZeroClaw, 18 for NanoBot, 4 for PicoClaw), indicating a maintainer bottleneck.
- **Technical focus**: OpenClaw’s top items are stability regressions (session transcript overwrite, install failures) and security hardening (bounded reads campaign). NanoBot and ZeroClaw are more feature‑driven today (plugin system, heartbeat improvements, A2A discovery). PicoClaw is in a maintenance/small‑fixes phase.
- **Community surface area**: OpenClaw’s most‑commented issue (#75 – Linux/Windows apps) has 109 comments and 81 reactions, far exceeding any single thread in the other projects. This suggests a broader user base with strong platform demands.

## 4. Shared Technical Focus Areas

### Security Hardening
- **OpenClaw**: Bounded read PRs across multiple providers (Vydra, MiniMax, OpenRouter, FAL, Azure, OpenAI) to prevent OOM/hangs; masked secrets request (#10659).
- **NanoBot**: Five shell‑allowlist bypass reports closed; MCP scope bypass (#4519) closed; fix PR #4562 implements segment‑by‑segment validation.
- **ZeroClaw**: Supply chain signing RFC (#8177), `execute_pipeline` tool‑gating bypass (#7947), SBOM generation PR (#8158) merged.
- **PicoClaw**: SSRF bypass fixed (ISATAP literal) in PR #3143; request to replace unmaintained `libolm` with `vodozemac` (#3088).

### Multi-Agent Reliability
- **OpenClaw**: Critical bugs #43367 (unstable orchestration), #75593 (empty subagent list), #86538 (write‑lock timeouts). Subagent announce issues (#78055).
- **NanoBot**: PR #4559 adds `agent_delegate` tool for calling external AI agents.
- **ZeroClaw**: Independent delegate mode request (#8238); per‑agent custom environment variables (#8226).
- **PicoClaw**: Duplicate subagent messages fixed (issue #3094 closed). WhatsApp reconnect PR (#3179) addresses stability.

### Platform Coverage
- **OpenClaw**: Top issue #75 (Linux/Windows desktop apps); Android APK request (#9443); macOS TCC security issue (#69799).
- **NanoBot**: Windows restart bug (#4513), shell inconsistency (#4544) – both with fix PRs.
- **ZeroClaw**: Nix build broken (#8336), macOS keybinding misleading (#7800).
- **PicoClaw**: Android launch failure (#3182); WhatsApp timeout (#3178).

### Session & State Persistence
- **OpenClaw**: Session transcript overwrite (#77012), write‑lock timeouts (#86538), stuck sessions (#76038).
- **NanoBot**: Cron session reuse fixed (#4082 → PR #4550).
- **ZeroClaw**: Session TTL feature request (#8134); heartbeat reads wrong workspace (#8366).
- **PicoClaw**: Memory loss bug (#3150) with unclear reproducibility.

## 5. Differentiation Analysis

| Aspect | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|--------|----------|---------|----------|----------|
| **Primary language(s)** | Python, Node.js | Python, Node.js | Rust (implied by Wasm migration plans) | Go |
| **Target user** | Power users, devops, multi‑agent orchestrators | Developers wanting quick CLI/AI assistant deployment | Teams needing governance, inter‑agent protocols (ACP/ACL) | Embedded/edge, messaging gateway (WhatsApp, Delta Chat) |
| **Feature emphasis** | Stability, security hardening, platform expansion | Plugin system, TTS, web extraction, heartbeat | A2A discovery, supply chain, skills, work lanes | SSRF protection, lightweight runtime, multiple chat backends |
| **Release cadence** | No release today; heavy backlog | Feature PRs in flight but no release | V0.8.2 shipped today | No release; many micro‑fixes merged |
| **Community governance** | Issues labelled with severity/status (needs‑repro, needs‑review) – many unaddressed | Single maintainer driving feature PRs; some community issues (#660) unanswered | Structured RFC process (work lanes, supply chain) – blocked items noted | Smaller community; few issues, quick merges |

## 6. Community Activity Tiers

Based solely on today’s counts, new release activity, and engagement volume:

- **Tier 1 – Very High**: **OpenClaw** (500 issues, 500 PRs, 109‑comment thread, 31 closed issues, 49 merged PRs – but low merge ratio relative to total).
- **Tier 2 – High**: **ZeroClaw** (50 issues, 50 PRs, one new release v0.8.2, 11 merged PRs, structured RFCs with maintainer involvement).
- **Tier 3 – Moderate**: **NanoBot** (28 issues, 46 PRs, 7 merged, multiple feature PRs from maintainer, security reports closed quickly).
- **Tier 4 – Low**: **PicoClaw** (5 issues, 18 PRs, 14 merged, but low discussion volume; no new release).

## 7. Evidence-Backed Observations

1. **Security hardening is a cross‑project priority** – OpenClaw’s bounded reads campaign (6 PRs), NanoBot’s shell‑allowlist bypass closure and fix PR, ZeroClaw’s supply chain signing RFC and `execute_pipeline` bypass, and PicoClaw’s SSRF fix all indicate that maintainers across the ecosystem are actively addressing security gaps.

2. **Multi‑agent reliability remains an unsolved pain point** – OpenClaw has three critical bugs (#43367, #75593, #86538) with subagent issues. NanoBot introduced an `agent_delegate` tool. ZeroClaw received an independent delegate mode request (#8238). PicoClaw closed a duplicate‑message bug (#3094). No project has fully solved this area.

3. **Platform coverage gaps persist** – OpenClaw’s top issue is Linux/Windows desktop apps (#75). NanoBot tackled Windows service manager and shell bugs. ZeroClaw has broken Nix builds and macOS keybinding issues. PicoClaw saw an Android launch failure. All projects would benefit from dedicated platform testing.

4. **Maintainer bandwidth is uneven** – OpenClaw has 469 open issues with many labelled `needs‑maintainer‑review` or `needs‑live‑repro`. NanoBot’s oldest open issue (#660) has no maintainer response since February. ZeroClaw’s supply chain signing RFC is blocked. PicoClaw has open PRs awaiting review (#3063 Delta Chat gateway). The small number of core maintainers relative to community size appears to slow triage and decision‑making.

5. **Feature development pace varies sharply** – NanoBot and ZeroClaw show active feature work (plugin system, A2A, skills, TTS) with PRs landing the same day as related issues. OpenClaw’s activity is dominated by stability fixes and bug reports, with fewer new feature implementations evident in today’s merges. PicoClaw is focused on maintenance and dependency upgrades rather than new capabilities.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-27

## Today's Activity Brief

Twenty-eight issues were updated in the last 24 hours (18 open, 10 closed) and 46 pull requests were updated (39 open, 7 merged/closed). No new releases were published. A burst of feature pull requests landed from maintainer @dajiaohuang, including a plugin system, per‑session model overrides, heartbeat improvements, text‑to‑speech, and external agent delegation. On the security side, five shell‑allowlist bypass reports (#4514, #4515, #4516, #4520, #4519) were closed, with fix PR #4562 still open. Windows‑specific bugs around restart and shell semantics also received targeted fixes.

## Releases

No new releases.

## Project Progress

Seven pull requests were merged or closed today:

- **#4561 (merged)** — Adds optional Crawl4AI web extraction (Fixes #2700). *feat(web): add Crawl4AI as a web fetch extractor* ([PR](https://github.com/HKUDS/nanobot/pull/4561))

Other notable PRs opened today (not yet merged) demonstrate active feature development:

- #4558 — Plugin system with manifest loader (Fixes #2231)
- #4559 — `agent_delegate` tool for calling external AI agents (Fixes #3436, #3024)
- #4560 — TTS tool for voice output (Fixes #4010)
- #4555 — Per‑session model preset (Fixes #4253)
- #4552 — Reasoning effort escalation support (Fixes #4419)
- #4550 — Fix cron session reuse (Fixes #4082)
- #4549 — Heartbeat model override (Fixes #4431)
- #4546, #4547 — Windows restart & PID file fixes (Fixes #4513, #4511)
- #4545 — Default Windows shell to PowerShell (Fixes #4544)
- #4562 — Validate each shell segment against `exec.allowPatterns` (security fix)
- #4548 — Require API key on public binding (Fixes #4490)

## Community Hot Topics

- **#660** (open, 12 comments, 5 👍) – *"Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency"* by @besoeasy. The issue challenges the project's self‑description, noting that the Dockerfile requires both Python and Node.js. It has been open since February and remains one of the most debated items. ([Issue](https://github.com/HKUDS/nanobot/issues/660))

- **#2439** (closed, 6 comments, 4 👍) – *"Security: Malicious data‑exfiltration code found in litellm_init.pth bundled with nanobot‑ai v0.1.4.post5"* by @xiaomukuaier. This critical security report was resolved (closed) today. The malicious `.pth` file was removed from the PyPI package. ([Issue](https://github.com/HKUDS/nanobot/issues/2439))

- **#143** (closed, 3 comments, 4 👍) – *"Filesystem tools do not enforce restrict_to_workspace"* by @skhsu4321. Though closed, it has drawn sustained interest; the underlying path‑security issue was also raised again in #4073 (closed today). ([Issue](https://github.com/HKUDS/nanobot/issues/143))

## Bugs & Stability

Multiple bugs were reported and addressed today, with severity ranging from critical (security) to moderate (platform inconsistencies).

**Security – Critical** (all closed today, with fix PRs still open or pending):
- **#4514, #4515, #4516, #4520** – Four separate reports of `exec.allowPatterns` allowlist bypass via chained commands, comment‑tail injection, and wrapper prefix tricks. All closed, fix PR #4562 implements segment‑by‑segment validation. ([#4514](https://github.com/HKUDS/nanobot/issues/4514), [#4515](https://github.com/HKUDS/nanobot/issues/4515), [#4516](https://github.com/HKUDS/nanobot/issues/4516), [#4520](https://github.com/HKUDS/nanobot/issues/4520), [PR #4562](https://github.com/HKUDS/nanobot/pull/4562))
- **#4519** – MCP `enabledTools` scope bypass exposing resource/prompt wrappers (closed, fix included in same security batch). ([Issue](https://github.com/HKUDS/nanobot/issues/4519))
- **#4073** – Filesystem `extra_allowed_dirs` treated as writable roots (closed). ([Issue](https://github.com/HKUDS/nanobot/issues/4073))

**Windows Compatibility – Moderate:**
- **#4511** – Gateway PID state file not updating after restart on Windows. Fix PR #4547. ([Issue](https://github.com/HKUDS/nanobot/issues/4511), [PR #4547](https://github.com/HKUDS/nanobot/pull/4547))
- **#4513** – Service manager (nssm) restart causes port‑occupied loops or inconsistent state. Fix PR #4546. ([Issue](https://github.com/HKUDS/nanobot/issues/4513), [PR #4546](https://github.com/HKUDS/nanobot/pull/4546))
- **#4544** – `exec` uses `cmd.exe` for single‑line, PowerShell for multi‑line, causing cross‑platform confusion. Fix PR #4545 defaults to PowerShell and adds `shell` parameter. ([Issue](https://github.com/HKUDS/nanobot/issues/4544), [PR #4545](https://github.com/HKUDS/nanobot/pull/4545))

**Other Bugs:**
- **#4539** (closed) – Telegram messages not rendering on web (v0.2.2). Fix likely included in a prior hotfix. ([Issue](https://github.com/HKUDS/nanobot/issues/4539))
- **#4082** – Cron jobs reuse fixed session key across runs. Fix PR #4550 adds per‑run session isolation. ([Issue](https://github.com/HKUDS/nanobot/issues/4082), [PR #4550](https://github.com/HKUDS/nanobot/pull/4550))

## Feature Request Clusters

Several feature requests from recent weeks saw corresponding pull requests opened today, indicating active implementation:

- **Plugin System** – #2231 (requested 2026-03-18) → PR #4558 adds plugin manifest loading from `~/.nanobot/plugins/` and `entry_points`. ([Issue](https://github.com/HKUDS/nanobot/issues/2231), [PR #4558](https://github.com/HKUDS/nanobot/pull/4558))
- **External AI Agent Delegation** – #3436 and #3024 → PR #4559 implements `agent_delegate` tool for calling Claude Code, Codex, opencode. ([Issue #3436](https://github.com/HKUDS/nanobot/issues/3436), [PR #4559](https://github.com/HKUDS/nanobot/pull/4559))
- **Text‑to‑Speech** – #4010 (2026-05-26) → PR #4560 adds TTS tool supporting edge‑tts, macOS `say`, espeak‑ng, Windows SAPI. ([Issue](https://github.com/HKUDS/nanobot/issues/4010), [PR #4560](https://github.com/HKUDS/nanobot/pull/4560))
- **Crawl4AI Web Fetch** – #2700 (2026-04-01) → PR #4561 merged today. ([Issue](https://github.com/HKUDS/nanobot/issues/2700), [PR #4561](https://github.com/HKUDS/nanobot/pull/4561))
- **Per‑Conversation Model Override** – #4253 (2026-06-08) → PR #4555 stores model preset in session metadata. ([Issue](https://github.com/HKUDS/nanobot/issues/4253), [PR #4555](https://github.com/HKUDS/nanobot/pull/4555))
- **Heartbeat Improvements** – #4431 (model override), #4418 (fixed delivery channel), #1899 (shared session option) → PRs #4549, #4553, #4551 respectively. ([#4431](https://github.com/HKUDS/nanobot/issues/4431), [#4418](https://github.com/HKUDS/nanobot/issues/4418), [#1899](https://github.com/HKUDS/nanobot/issues/1899))
- **Reasoning Effort Escalation** – #4419 (2026-06-20) → PR #4552 adds configurable escalation levels. ([Issue](https://github.com/HKUDS/nanobot/issues/4419), [PR #4552](https://github.com/HKUDS/nanobot/pull/4552))
- **In‑line TUI** – #4329 (2026-06-13) – PR still open, adds a terminal UI for `nanobot agent`. ([PR #4329](https://github.com/HKUDS/nanobot/pull/4329))

## User Feedback Summary

- **Lightweight claim contradiction** – @besoeasy (#660) pointed out the disconnect between the “ultra‑lightweight” tagline and the requirement for both Python and Node.js in the Dockerfile. The issue has drawn 12 comments and 5 reactions, indicating strong feeling among users.
- **Security trust** – Users @xiaomukuaier and @YLChen‑007 reported malicious code in a PyPI package and multiple allowlist bypasses, respectively. The maintainers responded quickly by closing the issues and developing fixes, but the volume of security reports may erode user confidence.
- **Windows usability** – @Quincy‑Zh (#4511, #4513) and @chengyongru (#4544) highlighted real pain points in Windows deployment (service manager bugs, inconsistent shell behavior). The dedicated fix PRs show that the project is responsive to platform‑specific needs.
- **Desired features** – Users @andrader (plugins), @rombert (per‑conversation model), @orrinwitt (heartbeat routing, reasoning escalation), @olgagaga (TTS), and @limdingwen (Crawl4AI) all voiced needs that were addressed by PRs today—suggesting strong alignment between community requests and maintainer roadmap.
- **Overall satisfaction** – No overtly negative sentiment is present; the large number of concurrent feature PRs indicates an active and well‑resourced development cycle, which is likely viewed positively.

## Backlog Watch

| Issue | Created | Last Updated | Comments | Status | Maintainer Attention Needed |
|-------|---------|--------------|----------|--------|-----------------------------|
| [#660](https://github.com/HKUDS/nanobot/issues/660) – Ultra‑lightweight claim contradiction | 2026-02-14 | 2026-06-26 | 12 | **Open** | High – oldest open issue with sustained community engagement; no maintainer response visible. |
| [#2700](https://github.com/HKUDS/nanobot/issues/2700) – Crawl4AI support | 2026-04-01 | 2026-06-26 | 1 | **Closed** (via PR #4561) | Resolved today – no longer a backlog item. |
| [#1899](https://github.com/HKUDS/nanobot/issues/1899) – Heartbeat isolated session | 2026-03-11 | 2026-06-26 | 2 | **Open** (PR #4551 open) | Addressed by PR – needs review and merge. |
| [#3096](https://github.com/HKUDS/nanobot/issues/3096) – Parallel tool call scheduling | 2026-04-13 | 2026-06-26 | 2 | **Open** (PR #4557 open) | Addressed by PR – needs review. |
| [#4082](https://github.com/HKUDS/nanobot/issues/4082) – Cron session reuse | 2026-05-29 | 2026-06-26 | 1 | **Open** (PR #4550 open) | Addressed by PR – needs review. |
| [#4508](https://github.com/HKUDS/nanobot/issues/4508) – `ask_clarification` tool | 2026-

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-27

## Today's Activity Brief
Activity remained high: 50 issues and 50 PRs were updated in the last 24 hours, of which 48 issues remain open and 2 closed. On the PR side 39 are open, with 11 merged or closed. One new release, v0.8.2, shipped, adding A2A agent discovery and richer skill configuration. Work continues across governance, supply-chain security, channel parity, and multiple bug fixes.

## Releases
- **v0.8.2** — published today. New features:
  - **A2A agent discovery** for agent-to-agent interoperability.
  - **Skills** – user-configured extra registries and typed slash‑command options.
  - Security hardening across plugins, channels, and other surfaces.
  No breaking changes or migration steps were noted in the release notes.

## Project Progress
Merged/closed PRs in the last 24 hours:
- [#8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) – `fix(observability): CLI one-shot loses telemetry and token totals on exit` (merged).
- [#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) – `ci(workflows): add CycloneDX SBOM generation for Rust and npm` (merged).
- [#8299](https://github.com/zeroclaw-labs/zeroclaw/pull/8299) – `test(channels): cover allowlist wildcard matcher short-circuit` (merged, test-only).
- [#8300](https://github.com/zeroclaw-labs/zeroclaw/pull/8300) – `test(discord): cover custom id kind escaping` (merged, test-only).

Several large features remain in open PRs: per‑turn output routing ([#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)), herdr observability ([#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)), context‑window display ([#7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)), and an end‑to‑end onboard flow ([#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)).

## Community Hot Topics
Most discussed issues and PRs (by comment count):

- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (11 comments) – **RFC: Work Lanes, Board Automation, and Label Cleanup**. Accepted and rollout in progress; aims to reduce manual routing for maintainers.
- [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (9 comments) – **RFC: Supply chain signing** – hardware PGP, hermetic builds, SLSA provenance. Blocked, needs maintainer review.
- [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) (4 comments) – **Independent delegate mode** for specialist handoffs. The existing bounded delegation is insufficient for some use cases.
- [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) (4 comments) – **Per‑agent custom environment variables** to manage identity, parameters, and token multi‑tenancy.
- [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) (3 comments) – **In‑app upgrade with supervised restart** from the web dashboard – accepted RFC.

Underlying needs: maintainers want clearer workflow automation; security‑conscious users are pushing for signed releases; power users need finer‑grained control over sub‑agent tool sets and environment isolation.

## Bugs & Stability
Bugs reported or updated in the last 24 hours, ranked by severity:

- **S0 – Security risk**:
  - [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) – `execute_pipeline` bypasses per‑agent tool gating (confused deputy). No fix PR yet.
- **S1 – Workflow blocked**:
  - [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) (closed) – Telegram bot ignores replies when `mention_only=true`. Closed (fixed).
- **S2 – Degraded behavior**:
  - [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) – `fill‑translations` leak‑repair leaves stale entries that re‑ship leaked text (silent data loss, narrow trigger).
  - [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) – Heartbeat engine reads `HEARTBEAT.md` from `data_dir` instead of agent workspace.
  - [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) – CLI secret prompts give no feedback after paste.
  - [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) – `mcp_bundles` parsed but never enforced (silent no‑op). A regression‑test PR ([#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370)) exists but is still open.
  - [#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) – Channel turns ignore runtime‑profile strict/parallel tool flags.
  - [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) – Anthropic provider added in Quickstart is unavailable in chat until reset (S0 severity claimed, but likely S2 – no data loss reported).

Fix PRs exist for some: #8146 (merged) fixed telemetry loss; #5866 was closed (fix presumed merged earlier). No fix PRs are yet linked for #8312, #8366, #7808, #7809.

## Feature Request Clusters
Multiple feature requests share related themes:

- **Agent delegation & environment** – [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) (independent delegation), [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) (per‑agent env vars), [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (goal mode for bounded autonomous work).
- **Channel enhancements** – [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) (DingTalk streaming), [#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849) (Discord thread mode), [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) (auto‑truncate stale session history via `session_ttl_hours`).
- **Wasm & plugin migration** – [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) (Wasm‑first plugin runtime, default‑on), [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) (Replace React/Vite web UI with Rust→Wasm framework), [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) (capability‑gated WASI hardware host functions).
- **Supply chain & CI** – [#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) (zerocode pre‑submission gate), [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) (policy cleanup for `deny.toml`), [#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) (already merged SBOM generation).
- **ACP / inter‑agent** – [#8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338) (ACP elicitation, multiple‑choice), [#8237](https://github.com/zeroclaw-labs/zeroclaw/pull/8237) (MCP support for standalone ACP sessions).
- **Cost & observability** – [#8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233) (live gateway pricing), [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) (herdr agent reporting).

No strong signal which will ship next; several remain in RFC or needs‑maintainer‑review state.

## User Feedback Summary
Recurring pain points visible in today’s data:

- **Security isolation gaps**: The `mcp_bundles` silent no‑op ([#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)) and `execute_pipeline` bypass ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)) erode trust in per‑agent boundaries.
- **Channel behavior inconsistencies**: Telegram replies ignored ([#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866)), Discord thread mode missing ([#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849)), DingTalk no streaming ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)) – users want fluent conversational experiences across platforms.
- **Onboarding friction**: Quickstart Anthropic provider not immediately usable ([#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)); CLI secret prompts lack feedback ([#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808)); Scoop manifest missing `zerocode.exe` ([#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275)).
- **Platform parity**: macOS users report misleading keybindings ([#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)); Nix builds are broken ([#8336](https://github.com/zeroclaw-labs/zeroclaw/pull/8336)).

Satisfaction signals: the v0.8.2 release with A2A discovery and skills was well‑received (no negative feedback in today’s data). The merged telemetry fix (#8146) addresses a common source of data loss.

## Backlog Watch
Issues and PRs that have been open for some time, are blocked, or need maintainer attention:

- [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) – ACP bridge auto‑pairing (opened 2026-05-18, no recent maintainer comment).
- [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) – Wasm‑first plugin runtime (needs‑maintainer‑review, blocked).
- [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) – Replace React/Vite with Rust→Wasm (needs‑author‑action, priority p3).
- [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) – SkillForge orphaned – needs decision to wire or remove (needs‑maintainer‑review).
- [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) – OpenRouter model fallbacks (needs‑maintainer‑review).
- [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) – Supply chain signing RFC (blocked, high risk).
- [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) – Policy cleanup (in progress, accepted).

These items have not seen significant maintainer response recently and may slow adoption for users relying on those capabilities.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-27

## Today's Activity Brief
In the last 24 hours, 5 issues were updated (4 still open, 1 closed) and 18 pull requests were updated (4 open, 14 merged/closed). No new releases were published. The majority of merged PRs are hygiene fixes that explicitly ignore secondary `Close()` errors, alongside a critical SSRF guard fix and a batch of dependency bumps. New issues report a WhatsApp WebSocket timeout, an Android launch failure, and a stale memory-loss bug. One open PR adds automatic WhatsApp reconnection, and another open PR introduces a Delta Chat gateway.

## Releases
No new releases today.

## Project Progress
14 pull requests were merged or closed today. Notable changes include:

- **SSRF Fix** – [#3143](https://github.com/sipeed/picoclaw/pull/3143) `fix(web): block private IPv4 embeds in ISATAP literals` – Addresses a bypass in `web_fetch` by teaching the shared IP classifier to recognise ISATAP IPv6 literals that embed private/loopback IPv4 addresses.
- **Gateway Stability** – [#3181](https://github.com/sipeed/picoclaw/pull/3181) `fix(gateway): guard startup info assertions` – Prevents crashes from missing or malformed startup info sections.
- **Error Handling Hygiene** – A series of PRs from @chengzhichao-xydt explicitly ignore `resp.Body.Close()` and `json.Encode` errors in error paths and retry loops where the primary error provides sufficient context: [#3187](https://github.com/sipeed/picoclaw/pull/3187), [#3188](https://github.com/sipeed/picoclaw/pull/3188), [#3186](https://github.com/sipeed/picoclaw/pull/3186), [#3185](https://github.com/sipeed/picoclaw/pull/3185), [#3184](https://github.com/sipeed/picoclaw/pull/3184), [#3183](https://github.com/sipeed/picoclaw/pull/3183), [#3172](https://github.com/sipeed/picoclaw/pull/3172), [#3170](https://github.com/sipeed/picoclaw/pull/3170). These reduce noise from linters and improve code clarity.
- **Dependency Bumps** – Merged: `telego` v1.10.0 ([#3176](https://github.com/sipeed/picoclaw/pull/3176)), `fyne.io/systray` v1.12.2 ([#3175](https://github.com/sipeed/picoclaw/pull/3175)), `line-bot-sdk-go` v8.20.1 ([#3174](https://github.com/sipeed/picoclaw/pull/3174)), `modernc.org/sqlite` v1.53.0 ([#3173](https://github.com/sipeed/picoclaw/pull/3173)).

## Community Hot Topics
- **#3088** – *[Feature] use vodozemac instead of libolm* – Opened 2026-06-09, updated 2026-06-26, 2 👍, 3 comments. Community support for replacing the unmaintained and insecure `libolm` with the official `vodozemac` library. Labelled `help wanted, priority: high`. [Link](https://github.com/sipeed/picoclaw/issues/3088)
- **#3150** – *[stale] [BUG] it gave itself amnesia* – Opened 2026-06-19, updated 2026-06-26, 3 comments. Reports that PicoClaw loses its memory/state. No reactions yet. [Link](https://github.com/sipeed/picoclaw/issues/3150)
- **#3094** – *[closed] [Bug] Duplicate messages from async sub-agent (spawn)* – Closed today with 3 comments. The issue described that when a spawned sub-agent completes, `ForUser` field causes both a direct push and the main agent’s summary, resulting in duplicate messages. The fix was likely included in earlier merged work. [Link](https://github.com/sipeed/picoclaw/issues/3094)

## Bugs & Stability
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android version cannot launch service – user reports inability to change path from settings, with screenshot showing full permissions granted. No comments yet. | None yet |
| **Medium** | [#3178](https://github.com/sipeed/picoclaw/issues/3178) | WhatsApp WebSocket timeout – occurs after adding a scheduler on Docker with launchpad. Environment: v0.2.9, Go 1.25.11, deepseek-v4-pro. | Open PR [#3179](https://github.com/sipeed/picoclaw/pull/3179) adds automatic reconnect after websocket drops |
| **Medium** | [#3150](https://github.com/sipeed/picoclaw/issues/3150) | “Memory loss” – agent forgets context, unclear reproducibility. Labelled stale but still open. | None visible |
| **Low** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Duplicate messages from spawn subagents – closed. | Likely fixed by earlier merged work |

Additionally, the SSRF bypass (issue [#3074](https://github.com/sipeed/picoclaw/issues/3074)) was fixed by today’s merged PR [#3143](https://github.com/sipeed/picoclaw/pull/3143).

## Feature Request Clusters
- **Security / cryptography** – Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) requests replacing `libolm` with `vodozemac`. No assignee, labelled `help wanted` and `priority: high`. No related PR yet.
- **New gateway** – PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) (open) adds a Delta Chat gateway. Author @trufae, last updated 2026-06-26, no maintainer comments.
- **Dependency upgrade** – PR [#3177](https://github.com/sipeed/picoclaw/pull/3177) (open) bumps `github.com/github/copilot-sdk/go` from v0.2.0 to v1.0.4 – a major version jump that may require API changes. Awaiting review.

## User Feedback Summary
- **Android platform frustration**: User @Monessem reports that the Android app cannot start service due to path configuration issues despite full permissions. No workaround shared.
- **WhatsApp instability**: User @Jh123x experiences WebSocket timeout after setting up a scheduler; connection appears to degrade over time.
- **Memory/state loss**: User @svier0 reports the agent “gives itself amnesia”, suggesting state persistence or context window problems.
- **Duplicate message annoyance** (fixed): User @v2up-32mb reported that async sub-agent results caused redundant messages on channels like Feishu/Telegram – this was addressed and the issue closed.
- **SSRF bypass concern** (fixed): The community-identified SSRF guard bypass in `web_fetch` (ISATAP) has been patched.

## Backlog Watch
- **#3088** – *Use vodozemac instead of libolm* – Open for 18 days with 2 👍, labelled `priority: high` and `help wanted`, no assignee. [Link](https://github.com/sipeed/picoclaw/issues/3088)
- **#3063** – *Add Delta Chat gateway* – Open PR since 2026-06-08, last updated 2026-06-26, no reviewer activity. [Link](https://github.com/sipeed/picoclaw/pull/3063)
- **#3150** – *Memory loss bug* – Stale label applied, but still open and unresolved. Could benefit from maintainer reproduction guidance. [Link](https://github.com/sipeed/picoclaw/issues/3150)
- **#3177** – *Copilot SDK bump to v1.0.4* – Major dependency update awaits review. [Link](https://github.com/sipeed/picoclaw/pull/3177)

</details>