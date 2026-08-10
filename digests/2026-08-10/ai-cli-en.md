# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 01:03 UTC | Tools covered: 4

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report — 2026-08-10

## 1. Daily Cross-Tool Overview

Across the four tracked AI CLI tools, community activity was moderate to high, with no new releases published for any tool. OpenCode led in volume with 50 issues and 50 PRs updated, while Kimi Code saw 21 PRs updated and 15 issues. Claude Code experienced a notable flood of 28+ near-identical bug reports from a single user regarding ClAudit safety filter false positives. OpenAI Codex had 30 issues updated and 7 PRs merged, indicating responsive maintainer activity. Common themes across tools include session/conversation management friction, MCP integration gaps, and safety/permission enforcement issues.

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated/Opened (24h) | Releases |
|------|----------------------|--------------------------|----------|
| Claude Code | 30+ (estimated) | 4 open PRs | None |
| OpenAI Codex | 30 | 7 merged (6 closed, 1 open) | None |
| Kimi Code | 15 | 21 | None |
| OpenCode | 50 | 50 | None |

*Note: Claude Code’s digest did not provide an explicit total; estimate includes the 28+ ClAudit report swarm plus older issues receiving comments.*

## 3. Shared Feature Directions

**MCP (Model Context Protocol) Lifecycle and Integration**
Three tools saw requests or fixes related to MCP tool management:
- **Claude Code** (#66084): `tools/list_changed` notifications ignored, requiring session restart to refresh tool index.
- **OpenAI Codex** (#15299): Users want inbound MCP notifications routed into active CLI sessions (15 comments, 14 👍).
- **Kimi Code** (#2748): PR to reconnect dropped streamable-HTTP MCP sessions on tool call (resolves #2742).

**Session and Conversation Management**
All four tools have active issues around session portability, state synchronization, or data loss:
- **Claude Code**: #28745 (conversation tied to start directory, 76 👍), #85008 (fork broken in VSCode), #81100 (30-day retention deletes transcripts).
- **OpenAI Codex**: #11011 (slow thread switching, 19 👍), #37398 (5-second owner-discovery timeout).
- **Kimi Code**: #2673 (ghost sub-agent entries), #2720 (auto compaction race condition).
- **OpenCode**: #4283 (clipboard copy not working, 110 👍), #41284 (TUI freeze at startup).

**UI/UX Customization and Polish**
Multiple communities are requesting more control over terminal or desktop interface behavior:
- **OpenAI Codex**: #17827 (customizable status line, 150 👍), #37709 (composer whitespace fix).
- **OpenCode**: #4283 (clipboard), #41350 (animated loading indicator).
- **Kimi Code**: #2763 (web sidebar sorting).
- **Claude Code**: #85240 (Remote Control blank on iPad Safari/Chrome).

**Safety Filter and Permission Enforcement**
Concerns about incorrect or bypassable safety/security controls appear in three tools:
- **Claude Code**: 28+ ClAudit false-positive reports (#85375+), #83760 (denied tool call executed anyway).
- **Kimi Code**: #2756 (compound bash commands bypass deny rules), #2765 (agent profile disallowedTools ignored).
- **OpenCode**: #13715 (nested subagent permission hang, fixed in PR #36046 today).

## 4. Differentiation Analysis

**Claude Code** continues to emphasize enterprise-grade safety (ClAudit) and plugin/skill extensibility, but today’s digest shows that safety filter false positives are a major community friction point. Its conversation management features (directory-tied sessions, data retention) are a double-edged sword—providing structure but causing data loss when misconfigured.

**OpenAI Codex** is focused on desktop app performance and multi-platform reach (Windows, mobile

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-08-10

## Today's Update Brief

Activity was moderate, with no new releases in the last 24 hours and only 4 open PRs. The issue tracker saw a large influx of 28+ near-identical bug reports from a single user (@sworrl) documenting ClAudit (cybersecurity safety filter) false positives that halt sessions across multiple work domains. Older issues on conversation directory portability (#28745) and safety-classifier model switching (#67246) continued to attract comments.

## Releases

No new versions were published in the last 24 hours.

## Hot Issues

1. **[#67246 – Safety-classifier model switch (Fable 5 → Opus 4.8) fires on benign content and can't be overridden with /model](https://github.com/anthropics/claude-code/issues/67246)**
   *Workflow:* Mid-session the safety classifier silently switches the active model. The notice acknowledges false positives are expected, but `/model` does not let users revert.
   *Impact:* Blocks normal engineering discussions (e.g., cybersecurity or biology topics). Community reaction: 12 comments, 3 👍, open since June.

2. **[#28745 – Allow resuming conversations from different directories](https://github.com/anthropics/claude-code/issues/28745)**
   *Workflow:* Conversations are tied to the start directory; if the directory is deleted or renamed, the conversation is unrecoverable.
   *Impact:* Lost work when cleaning up git worktrees or moving projects. 11 comments, 76 👍 – highest community upvote among open items.

3. **[#85240 – Remote Control: responses never render in browser until manual page refresh](https://github.com/anthropics/claude-code/issues/85240)**
   *Workflow:* Using Remote Control on iPad Safari/Chrome or macOS Safari, every assistant response stays blank until the page is manually reloaded.
   *Impact:* Makes Remote Control unusable on those browsers. 5 comments, reported 2026-08-09.

4. **[#66084 – tools/list_changed doesn't refresh the deferred-tool / ToolSearch index in interactive sessions](https://github.com/anthropics/claude-code/issues/66084)**
   *Workflow:* After adding or modifying MCP tools, `tools/list_changed` notifications are ignored in interactive sessions, so the tool index remains stale.
   *Impact:* Forces users to restart sessions to pick up new tools. 4 comments, 2 👍, still reproduces on 2.1.165.

5. **[#81658 – Cross-platform sync failure (Desktop/Web/Android) causing Cowork conversations and chats to disappear](https://github.com/anthropics/claude-code/issues/81658)**
   *Workflow:* Conversations and chats vanish across Desktop, Web, and Android. Suspected server-side incident.
   *Impact:* Data loss for users relying on cross-device sync. 4 comments, 3 👍.

6. **[#85008 – VSCode: forking copies the conversation but never attaches the new tab – blank chat, fork invisible](https://github.com/anthropics/claude-code/issues/85008)**
   *Workflow:* Forking a conversation in VSCode extension 2.1.226 creates a blank chat and the fork does not appear in the session list.
   *Impact:* Forking effectively broken. 2 comments, triggered while idle (not a race condition as previously thought).

7. **[#81100 – Desktop app: 30-day retention sweep deletes the only copy of Desktop transcripts, leaving ghost entries](https://github.com/anthropics/claude-code/issues/81100)**
   *Workflow:* The 30-day retention policy deletes local transcripts without a backup, leaving unopenable ghost entries in the session list.
   *Impact:* Permanent data loss; distinct from CLI data-loss issues (#59248) but related. 2 comments.

8. **[#83760 – Denied tool call was executed anyway (PowerShell tool ran despite "deny")](https://github.com/anthropics/claude-code/issues/83760)**
   *Workflow:* User denied a tool call via the approval prompt, but the tool (PowerShell) still executed.
   *Impact:* Security and trust concern – approval bypass. 2 comments.

9. **[#84880 – Claude in Chrome file_upload rejects scheduled-task sessions on Windows](https://github.com/anthropics/claude-code/issues/84880)**
   *Workflow:* File uploads fail in Chrome when using scheduled-task sessions on Windows.
   *Impact:* Blocks file-dependent workflows. 2 comments, 1 👍. Similar to closed #63334.

10. **ClAudit false-positive swarm (28+ issues, e.g., [#85375](https://github.com/anthropics/claude-code/issues/85375), [#85378](https://github.com/anthropics/claude-code/issues/85378), [#85391](https://github.com/anthropics/claude-code/issues/85391))**
    *Workflow:* The cybersecurity safety filter (ClAudit) halts sessions on benign content such as task notifications, project discussions, or Active Directory operations. Flagging model is Opus 4.8 (or Opus 5 in two cases).
    *Impact:* Repeated session halts for authorized work; user @sworrl filed 28+ individual reports covering domains like `defensive-hardening`, `cloud-iam`, and `general`. Each has 1 comment. Community reaction: no upvotes yet, but the sheer volume signals a systemic issue.

## Key PR Progress

1. **[#85409 – security-guidance: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5](https://github.com/anthropics/claude-code/pull/85409)**
   Updates the security-guidance plugin's README and hook code to reference current models. Opened 2026-08-10.

2. **[#85323 – fix(plugin-dev): parse block scalar agent descriptions](https://github.com/anthropics/claude-code/pull/85323)**
   Fixes YAML block-scalar parsing defect from #83803. `validate-agent.sh` now correctly handles multiline descriptions using `|` or `>`. Opened 2026-08-09.

3. **[#17395 – [Plugin] Add `agent-session-commit` plugin to incrementally iterate on `AGENTS.md`](https://github.com/anthropics/claude-code/pull/17395)**
   Adds `AGENTS.md` as authoritative instructions, updates `CLAUDE.md` to point to it, and introduces a `/session-commit` plugin. Closed 2026-08-09 (merged or superseded? Status CLOSED).

4. **[#85243 – fix(skills): use spec-conformant names in the plugin-dev and hookify skills](https://github.com/anthropics/claude-code/pull/85243)**
   Fixes eight bundled skills that used spaces in their `name:` field, which violates the spec. Opened 2026-08-09.

## Feature Request Clusters

- **Conversation portability and persistence**
  - #28745: Resume conversations from any directory (not tied to original directory).
  - #62104: Prevent archiving/deleting pinned sessions.
  - #85008: Forked conversations should attach to a new tab and appear in the session list.

- **Safety classifier controls**
  - #67246: Allow overriding the safety-classifier model switch with `/model`.
  - The ClAudit false-positive swarm (28+ issues) implicitly requests a mechanism to whitelist or bypass the filter for benign work.

- **MCP tool lifecycle management**
  - #66084: Refresh the tool index dynamically after `tools/list_changed` without restarting the session.

- **Cross-platform reliability**
  - #81658: Fix sync failures causing conversation disappearance.
  - #85240: Fix Remote Control rendering on iPad Safari/Chrome and macOS Safari.
  - #84880: Fix file uploads for scheduled-task sessions on Windows.

- **Data retention and safety**
  - #81100: Provide backup or prevent deletion of the only copy of Desktop transcripts; clarify retention behavior.

## Developer Pain Points

- **Safety filter false positives** – The most frequently reported problem today, with 28+ issues from a single user spanning diverse work domains. The classifier (especially Opus 4.8) halts sessions on innocuous content, and there is no working override. Multiple users have raised this across separate issues (#67246, #85375+).
- **Conversation management friction** – Tying conversations to a starting directory (#28745) is a long-standing frustration (76 👍). Pinned sessions can still be archived (#62104). Forking in VSCode is broken (#85008).
- **Data loss risks** – The 30-day retention sweep removes the only copy of Desktop transcripts (#81100), and cross-platform sync can cause conversations to disappear entirely (#81658).
- **MCP tool index staleness** – Adding tools mid-session requires a restart (#66084), breaking iterative development workflows.
- **Security/trust issues** – A denied tool call was executed anyway (#83760), undermining the approval prompt.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-08-10

## Today’s Update Brief
Activity is moderate, with 30 issues updated in the last 24 hours and 7 pull requests merged (all but one closed). No new releases were published. The community continues to surface **Windows-specific crashes** (Computer Use, WSL terminal, silent exit loops) and **performance regressions** in the desktop app (slow thread switching, owner-discovery delays). A strong feature request cluster around **TUI customization** and **MCP inbound notifications** is gaining traction.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues

1. **#17827 – Customizable status line**
   [Issue](https://github.com/openai/codex/issues/17827)
   *Affected workflow:* Terminal UI users want to display real-time info (token usage, model, git branch) at the bottom of the terminal, similar to Claude Code.
   *Impact:* 150 👍 and 39 comments indicate strong demand. The feature is currently blocked by design decisions.
   *Community reaction:* Users are actively sharing shell scripts and config snippets as workarounds.

2. **#11011 – Slow thread switching**
   [Issue](https://github.com/openai/codex/issues/11011)
   *Affected workflow:* Switching between chat threads in the desktop app became unresponsive after a recent update.
   *Impact:* 21 comments, 19 👍. A regression that affects daily app usage.
   *Community reaction:* Users report it’s “almost unusable” for multi-thread workflows.

3. **#15299 – Inbound MCP notifications**
   [Issue](https://github.com/openai/codex/issues/15299)
   *Affected workflow:* Codex CLI can call MCP tools but cannot receive external push messages (e.g., channel events).
   *Impact:* 15 comments, 14 👍. Users want bidirectional MCP integration for real-time updates.
   *Community reaction:* Several commenters propose using the `notifications` MCP method; maintainers have acknowledged the request.

4. **#23527 – Mobile SSH remote projects not visible**
   [Issue](https://github.com/openai/codex/issues/23527)
   *Affected workflow:* Codex mobile can connect to a macOS host, but SSH remote projects that are usable on the Mac do not appear in the mobile project selector.
   *Impact:* 13 comments, 19 👍. Blocks remote work from mobile devices.
   *Community reaction:* Users consider this a critical missing piece for the “remote control” feature.

5. **#5349 – Password prompt broken**
   [Issue](https://github.com/openai/codex/issues/5349)
   *Affected workflow:* Running `sudo` commands in the CLI fails because the password prompt is not captured.
   *Impact:* 8 comments, 3 👍. A long-standing bug (filed Oct 2025).
   *Community reaction:* Users still encounter it; a workaround using `-S` flag is suggested but not ideal.

6. **#24195 – Bundled skill validator fails (PyYAML missing)**
   [Issue](https://github.com/openai/codex/issues/24195)
   *Affected workflow:* Windows users cannot validate bundled skills because the Codex-provided Python lacks PyYAML.
   *Impact:* 7 comments, 3 👍. Blocks skill development on Windows.
   *Community reaction:* Users request either bundling the dependency or providing a clear error message.

7. **#37104 – WSL integrated terminal silent failure**
   [Issue](https://github.com/openai/codex/issues/37104)
   *Affected workflow:* On Windows, the integrated terminal in Codex Desktop fails silently before PTY/WSL startup; bottom and side panels cannot open.
   *Impact:* 6 comments, 1 👍. A “Papercuts 2026” labeled bug affecting WSL users.
   *Community reaction:* Users report the issue is local to the renderer – no model dependency.

8. **#37398 – Owner discovery timeout on local chat**
   [Issue](https://github.com/openai/codex/issues/37398)
   *Affected workflow:* Opening any unloaded local chat in Codex Desktop waits ~5 seconds on a fixed timeout before displaying the content.
   *Impact:* 6 comments, 6 👍. The actual read is <200ms, making the delay purely a UX bug.
   *Community reaction:* Users find this “frustrating” and point to a fallback logic flaw.

9. **#19265 – Background exec deletes skills directory**
   [Issue](https://github.com/openai/codex/issues/19265)
   *Affected workflow:* The `~/.codex/skills/.system` directory disappears intermittently, removing bundled skills (imagegen, openai‑tools, etc.) from new turns.
   *Impact:* 5 comments, 6 👍. A data-loss bug that disrupts all skill-based workflows.
   *Community reaction:* Users report skills reappear later, but the inconsistency is hard to debug.

10. **#34248 – Goal auto-continuation infinite loop**
    [Issue](https://github.com/openai/codex/issues/34248)
    *Affected workflow:* Codex Goal auto-continuation enters a no-progress loop, generating thousands of duplicate turns when the active task waits on an external process.
    *Impact:* 3 comments, 1 👍. Rapidly consumes rate limits and logs.
    *Community reaction:* User suspects a race condition between `task_complete` and `task_started` (5–8ms apart).

## Key PR Progress

1. **#37747 – Bound Cursor project path resolution**
   [PR](https://github.com/openai/codex/pull/37747) (closed)
   *Change:* Probing a bounded set of path candidates instead of recursively scanning large directory trees when resolving the working directory encoded in a Cursor project name.
   *Impact:* Prevents performance hangs on large repositories.

2. **#31817 – Update models.json**
   [PR](https://github.com/openai/codex/pull/31817) (open)
   *Change:* Automated update of the model metadata file.
   *Impact:* Keeps model availability in sync with backend changes.

3. **#37745 – Add gRPC TCP transport to code-mode host**
   [PR](https://github.com/openai/codex/pull/37745) (closed)
   *Change:* Accept `grpc://IP:PORT` endpoints via `--listen` and serve the existing code-mode gRPC service over TCP; prints the bound HTTP endpoint to stdout.
   *Impact:* Enables remote code-mode connections over the network.

4. **#37723 – Report I/O subtypes for session config import failures**
   [PR](https://github.com/openai/codex/pull/37723) (closed)
   *Change:* Appends a stable `std::io::ErrorKind` category to `failed_to_load_session_config` subtypes (e.g., `invalid_data`, `not_found`, `permission_denied`).
   *Impact:* Improves error diagnostics for users and automated tooling.

5. **#37709 – Keep wrapped composer whitespace with following text**
   [PR](https://github.com/openai/codex/pull/37709) (closed)
   *Change:* Adds composer-specific grapheme-safe wrapping so that overflowing whitespace does not occupy a separate blank row.
   *Impact:* Fixes a visual artifact in the TUI composer.

6. **#37654 – Advertise environment config read support**
   [PR](https://github.com/openai/codex/pull/37654) (closed)
   *Change:* Adds `environmentConfigRead` to exec-server capabilities, defaulting to `false` for legacy executors.
   *Impact:* Enables future features that require reading environment configuration from the executor.

7. **#37645 – Improve plugin install failure analytics**
   [PR](https://github.com/openai/codex/pull/37645) (closed)
   *Change:* Adds HTTP status subtypes for remote catalog, mutation, and bundle download failures.
   *Impact:* Provides stable, low-cardinality error details without relying on error messages.

## Feature Request Clusters

- **TUI Customization** – Multiple requests for a configurable status line (token usage, model, git branch) and generally more flexible terminal UI. The top-voted issue (#17827) has 150 👍 and 39 comments.

- **MCP / External Integration** – Users want inbound MCP notifications routed into active CLI sessions (#15299), as well as model alias mappings for enterprise gateway names (#21594). Both focus on bidirectional communication with external systems.

- **Multi-Agent Steering** – A growing cluster asks for the ability to send corrections and steering messages to child agents in a multi-agent session (#33885, #36211). The current architecture makes sub-agent threads read-only.

- **Automations and Offline Recovery** – Feature requests for automations to catch up on missed runs after app/computer sleep (#24327) and for session config import failure diagnostics (#37723). Users want more robust scheduled execution and error reporting.

## Developer Pain Points

- **Windows-specific crashes and silent exits** – Computer Use functions (`list_windows`, `get_window_state`) fail with `EnumWindows` error 0x80070003 on Windows 11 (#37595, #37281, #37734). The desktop app also silently exits ~25s after launch in an endless crash loop on some Windows devices (#37752). These issues are currently blocking Windows users from the full feature set.

- **Performance regressions in the desktop app** – Thread switching is slow (#11011) and opening any local chat incurs a 5-second owner-discovery timeout (#37398). Both are regressions from recent updates, causing frustration for everyday use.

- **Data loss and silent failures** – The `~/.codex/skills/.system` directory is intermittently deleted (#19265), and Goal auto-continuation can enter an infinite loop generating thousands of duplicate turns (#34248). These issues erode trust in the background execution system.

- **Missing dependencies on Windows** – The bundled Python lacks PyYAML, breaking skill validation (#24195). The WSL integrated terminal fails silently before PTY startup (#37104). Both are Windows-specific deployment problems.

- **Network reconnection gaps** – The CLI reuses a dead Responses WebSocket after network loss during idle, breaking the next turn (#33163). Connectivity issues are not gracefully handled.

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code Community Digest – 2026-08-10

## 1. Today's Update Brief

No new releases were published today. However, the repository saw **15 issues** and **21 pull requests** updated in the last 24 hours, indicating active community reporting and maintainer response. Bug reports dominate, with several high-impact defects around agent lifecycle, stream handling, and permission enforcement.

## 2. Releases

None.

## 3. Hot Issues (10 selected)

### [#2758 – [bug] usage Manipulation](https://github.com/MoonshotAI/kimi-code/issues/2758)
- **Author:** @3xp10its | **Comments:** 3 | **👍:** 0
- **Summary:** Reports that usage metrics can be manipulated (details vague but “a lot of people are de…”). Likely a billing/usage fraud vector. Community reaction moderate; maintainers haven’t replied yet.
- **Affected workflow:** All users on K3 model via VS Code extension.

### [#1566 – [Feature Request] Open marketplace JSON submission/review process](https://github.com/MoonshotAI/kimi-code/issues/1566)
- **Author:** @yuanhang45127 | **Comments:** 2 | **👍:** 1
- **Summary:** Requests an open submission & review process for community plugins, currently limited to personal/team use via `KIMI_CODE_PLUGIN_MARKETPLACE_URL`. Stale since July 12 but updated today.
- **Impact:** Plugin ecosystem growth; no official response yet.

### [#2673 – bug: 因后台任务上限被拒绝启动的子 Agent 在任务面板显示为永久「运行中」且无法停止](https://github.com/MoonshotAI/kimi-code/issues/2673)
- **Author:** @liuj66794-sys | **Comments:** 1 | **👍:** 1
- **Summary:** Sub-agents rejected by the background task limit appear as ghost “running” entries in the task panel, cannot be stopped. Reproduced on Windows 11.
- **Impact:** Users lose visibility of real task state; requires manual cleanup.

### [#2720 – Auto compaction cancelled at commit time (historySafeToCompact race with running loop)](https://github.com/MoonshotAI/kimi-code/issues/2720)
- **Author:** @Highlander22ru | **Comments:** 1 | **👍:** 0
- **Summary:** Race condition between auto compaction and running loop leads to compaction cancellation and process kill with “This operation was aborted”. Confirmed on 0.32.0 and 0.34.0.
- **Impact:** Session loss, data corruption risk.

### [#2767 – TUI ignores --agent-file at launch](https://github.com/MoonshotAI/kimi-code/issues/2767)
- **Author:** @mohidmakhdoomi | **Comments:** 0 | **👍:** 0
- **Summary:** `--agent-file` works in `-p` print mode but is ignored in TUI startup; session binds default agent instead.
- **Impact:** Users can’t launch custom agents via TUI; workaround requires manual switching.

### [#2766 – Hook command spawn failures are completely silent](https://github.com/MoonshotAI/kimi-code/issues/2766)
- **Author:** @gon0801 | **Comments:** 0 | **👍:** 0
- **Summary:** If a `[[hooks]]` command fails to spawn or exits non-zero, no error is logged, `kimi doctor` reports OK. Zero diagnostic.
- **Impact:** Silent failures break CI/CD or custom workflows; debugging impossible.

### [#2765 – Agent profile tools/disallowedTools ignored in interactive mode](https://github.com/MoonshotAI/kimi-code/issues/2765)
- **Author:** @warelik | **Comments:** 0 | **👍:** 0
- **Summary:** Custom agent profiles with `tools`/`disallowedTools` are respected in `-p` mode with experimental flag, but ignored in normal interactive mode.
- **Impact:** Profile restrictions are effectively broken for daily use.

### [#2763 – [bug] web侧边栏工作区排序问题](https://github.com/MoonshotAI/kimi-code/issues/2763)
- **Author:** @QuantumLiu | **Comments:** 0 | **👍:** 0
- **Summary:** Web sidebar workspace sorting is only drag-reorderable, with no logical default (old folders appear first). Users expect most-recently-active-first.
- **Impact:** UX annoyance for web-mode users.

### [#2762 – ACP/print 流式响应静默挂死](https://github.com/MoonshotAI/kimi-code/issues/2762)
- **Author:** @ai-agent-workbench | **Comments:** 0 | **👍:** 0
- **Summary:** ACP streaming responses sometimes hang after all content is received, missing `[DONE]` frame. No idle timeout. Subsequent message silently replaces the hung turn; wire.jsonl never written.
- **Impact:** Lost session data, missing usage records.

### [#2759 – 不支持图片的模型在上下文压缩时因 image_url 内容报 400 错误](https://github.com/MoonshotAI/kimi-code/issues/2759)
- **Author:** @countryless | **Comments:** 0 | **👍:** 0
- **Summary:** Text-only models reject `image_url` blocks during context compaction, causing 400 errors. Retry logic doesn’t strip images in this code path.
- **Impact:** Session breaks on compaction for multi-modal sessions with text-only providers.

## 4. Key PR Progress (10 selected)

### [#2768 – feat(hooks): include final assistant message in Stop payload](https://github.com/MoonshotAI/kimi-code/pull/2768)
- **Author:** @ousamabenyounes | **Status:** CLOSED (merged)
- **Summary:** Adds `last_assistant_message` to Stop hook input, enabling validation or conditional rejection of the assistant response. Resolves #2123.

### [#2769 – fix(acp): stream engine-triggered follow-up turns](https://github.com/MoonshotAI/kimi-code/pull/2769)
- **Author:** @haveanicedavid | **Status:** OPEN
- **Summary:** Fixes ACP streaming for background task follow-up turns that were not displayed in TUI after the main turn finished.

### [#2764 – fix(agent-core): recover from unsupported image_url variants](https://github.com/MoonshotAI/kimi-code/pull/2764)
- **Author:** @030611 | **Status:** OPEN
- **Summary:** Addresses #2759 by classifying the “unknown variant image_url” diagnostic as an image-format error, enabling media-stripped retry during compaction.

### [#2761 – fix(agent-core): gate prompt_cache_key behind isOfficialOpenAIBaseUrl](https://github.com/MoonshotAI/kimi-code/pull/2761)
- **Author:** @creatiVision | **Status:** OPEN
- **Summary:** Restricts `prompt_cache_key` to official OpenAI endpoints only, fixing HTTP 400 errors on third-party providers that reject unknown params.

### [#2755 – fix(agent-core): block turns during auto compaction](https://github.com/MoonshotAI/kimi-code/pull/2755)
- **Author:** @030611 | **Status:** OPEN
- **Summary:** Prevents the race condition in #2720 by waiting for in-flight compaction to complete before starting the next agent step, even when context is below threshold.

### [#2757 – fix(agent-core-v2): evaluate Bash permission rules per sub-command](https://github.com/MoonshotAI/kimi-code/pull/2757)
- **Author:** @Win-Hao | **Status:** OPEN
- **Summary:** Decomposes compound bash commands (`&&`, `|`, `$(...)`) so each sub-command is evaluated individually against permission rules. Resolves #2756.

### [#2749 – fix(agent-core-v2): emit subagent.failed when background task registration fails](https://github.com/MoonshotAI/kimi-code/pull/2749)
- **Author:** @tarikermis | **Status:** OPEN
- **Summary:** Fixes ghost “running” entries (#2673) by emitting `subagent.failed` event when the task limit prevents registration, allowing the UI to remove the entry.

### [#2752 – fix(tui): drop misleading /login hint in /usage and /status before first message](https://github.com/MoonshotAI/kimi-code/pull/2752)
- **Author:** @nothankyouzzz | **Status:** OPEN
- **Summary:** Prevents `requireSession()` from failing on v2 engine’s lazy session creation, fixing the misleading “No active session. Send /login” message (#2751).

### [#2754 – feat(agent-core-v2): add visual model assignment for image inspection](https://github.com/MoonshotAI/kimi-code/pull/2754)
- **Author:** @zikzak-ai | **Status:** OPEN
- **Summary:** Implements a dedicated visual model config (similar to `[secondary]` for sub-agents) so users can assign a vision-capable model for image analysis while using a text-only coding model. Closes #2750.

### [#2748 – fix(agent-core): reconnect dropped streamable-HTTP MCP sessions on tool call](https://github.com/MoonshotAI/kimi-code/pull/2748)
- **Author:** @tarikermis | **Status:** OPEN
- **Summary:** Detects stale MCP transport sessions and re-establishes them on tool call, preventing persistent failures after server restart. Resolves #2742.

## 5. Feature Request Clusters

- **Open Plugin Marketplace & Review Process**
  [#1566](https://github.com/MoonshotAI/kimi-code/issues/1566) requests an open submission and review pipeline for community plugins. No official response yet.

- **Dedicated Visual Model Assignment**
  [#2753](https://github.com/MoonshotAI/kimi-code/issues/2753) and [#2750](https://github.com/MoonshotAI/kimi-code/issues/2750) (duplicate) ask for a configurable “visual model ID” separate from the coding model, similar to the existing `[secondary]` sub-agent model. A PR (#2754) implementing this is already open.

- **Bash Permission Rule Improvements**
  [#2756](https://github.com/MoonshotAI/kimi-code/issues/2756) highlights that compound commands bypass deny rules; a related PR (#2757) implements per-sub-command evaluation. A second PR (#2747) fixes glob matching path semantics.

- **Task Panel & Session State Clarity**
  Multiple issues (#2673, #2762, #2751) point to confusing state synchronization: ghost sub-agents, streaming hangs, and misleading login prompts. PRs #2749, #2769, #2752 address these.

## 6. Developer Pain Points

- **Silent Failures** – Hook command failures (#2766) and ACP stream hangs (#2762) provide zero diagnostic output, making debugging nearly impossible.
- **Agent Profile / Config Ignorance** – Interactive mode ignores `--agent-file` (#2767) and agent profile `tools`/`disallowedTools` (#2765), forcing users to use `-p` mode workarounds.
- **Permission Rule Bypass** – Compound bash commands (#2756) can bypass deny rules, a security concern for sandboxed workflows.
- **Session Corruption** – Auto compaction race (#2720) and image compaction errors (#2759) can break sessions or lose data.
- **Billing / Usage Ambiguity** – Manipulation claim (#2758) and misleading `/usage`/`/status` prompts (#2751) erode user trust in account state reporting.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-08-10

## Today’s Update Brief
No new releases were published in the last 24 hours. Community activity remained high, with 50 issues and 50 PRs updated. The most active threads involve a long-standing clipboard copy bug (#4283, 122 comments), a feature request for native model fallback (#7602, 29 comments), and a cluster of DeepSeek V4 Flash connectivity issues on the Go subscription. Several important bug fixes landed as PRs, including nested subagent permission rendering and Ollama reasoning field support.

---

## Releases
*(None in the last 24 hours)*

---

## Hot Issues (Top 10 by Community Impact)

1. **#4283 – Copy to Clipboard not working**
   [Link](https://github.com/anomalyco/opencode/issues/4283)
   **Author:** @maheshmuttintidev · **Updated:** 2026-08-09 · **Comments:** 122 · 👍 110
   *Workflow:* Selecting text from a response fails to copy to clipboard on certain OS configurations.
   *Impact:* Affects basic productivity – users cannot copy code or output.
   *Community:* High confidence (110 👍) that this is a widespread regression.

2. **#7602 – [FEATURE] Native Model Fallback / Failover Support**
   [Link](https://github.com/anomalyco/opencode/issues/7602)
   **Author:** @arisgrout · **Updated:** 2026-08-09 · **Comments:** 29 · 👍 107
   *Workflow:* No way to define fallback between different models when one errors or rate-limits.
   *Impact:* Long-running agents break on provider issues.
   *Community:* Strong demand (107 👍) for multi-model failover.

3. **#13715 – Permission asks from nested subagent sessions silently hang**
   [Link](https://github.com/anomalyco/opencode/issues/13715)
   **Author:** @ro-hansolo · **Updated:** 2026-08-09 · **Comments:** 11 · 👍 24
   *Workflow:* A subagent that spawns another subagent requiring permission (e.g., bash) never renders the prompt → session hangs forever.
   *Impact:* Blocks multi-agent workflows.
   *Community:* Noted as a critical bug; a fix PR (#36046) was merged today.

4. **#39838 – DeepSeek V4 Flash has suddenly stopped working**
   [Link](https://github.com/anomalyco/opencode/issues/39838)
   **Author:** @shanyan-wcx · **Updated:** 2026-08-09 · **Comments:** 9 · 👍 11
   *Workflow:* Using deepseek-v4-flash model returns errors.
   *Impact:* Affects many users relying on this model.
   *Community:* Related to a cluster of issues with leading spaces in model names (#41300, #41306, #41322, #41314) – likely a gateway bug.

5. **#30221 – [BUG] “terminated” error**
   [Link](https://github.com/anomalyco/opencode/issues/30221)
   **Author:** @healerovski · **Updated:** 2026-08-09 · **Comments:** 9 · 👍 4
   *Workflow:* All active sessions under OpenCode Go terminate with “terminated” error.
   *Impact:* Makes the Go subscription unusable for some users.
   *Community:* Still open; no clear root cause yet.

6. **#12472 – Native Claude Code hooks compatibility (PreToolUse, PostToolUse, Stop)**
   [Link](https://github.com/anomalyco/opencode/issues/12472)
   **Author:** @ArtyMcLabin · **Updated:** 2026-08-09 · **Comments:** 17 · 👍 38
   *Workflow:* OpenCode already supports Claude Code rules and skills, but not the hooks system.
   *Impact:* Limits migration from Claude Code for users relying on custom hooks.
   *Community:* Moderate demand (38 👍).

7. **#34743 – opencode ACP from Xcode 27 beta 2 uses default model ignoring config**
   [Link](https://github.com/anomalyco/opencode/issues/34743)
   **Author:** @velouria · **Updated:** 2026-08-09 · **Comments:** 15 · 👍 0
   *Workflow:* Custom ACP agent in Xcode ignores `opencode.json` model setting and always uses “big-pickle”.
   *Impact:* Breaks Xcode integration for users with local models.
   *Community:* Active discussion but low 👍 – possibly niche.

8. **#41300 – Leading space in model name when using opencode-go/deepseek-v4-flash**
   [Link](https://github.com/anomalyco/opencode/issues/41300)
   **Author:** @lcobos-dev · **Updated:** 2026-08-09 · **Comments:** 6 · 👍 1
   *Workflow:* The Go relay injects a leading space into the model string, causing HTTP 400.
   *Impact:* Blocks all DeepSeek V4 Flash usage on Go.
   *Community:* Part of a larger bug cluster; several duplicate issues filed.

9. **#41430 – [Billing/Subscription] OpenCode Go payment processed but subscription inactive**
   [Link](https://github.com/anomalyco/opencode/issues/41430)
   **Author:** @naikkarthik06 · **Updated:** 2026-08-09 · **Comments:** 3 · 👍 0
   *Workflow:* Payment goes through Stripe but workspace dashboard still shows “Subscribe to Go”.
   *Impact:** Directly affects new Go subscribers.
   *Community:* Only a few reports, but serious for those affected.

10. **#41284 – TUI freezes on blank screen at startup, requires force-kill**
    [Link](https://github.com/anomalyco/opencode/issues/41284)
    **Author:** @herve-coulon · **Updated:** 2026-08-09 · **Comments:** 2 · 👍 1
    *Workflow:* After running `opencode`, the TUI shows a blank screen and hangs.
    *Impact:* Blocks the primary interface for some macOS users.
    *Community:* Recent report; no fix yet.

---

## Key PR Progress (Top 10 by Community Interest)

1. **#37584 – fix(session): bound consecutive overflow compaction cycles in the prompt loop**
   [Link](https://github.com/anomalyco/opencode/pull/37584)
   **Author:** @a692570 · **Merged/Open:** Open
   *Fixes* #27924 – prevents infinite loop when a provider rejects a turn with context overflow.
   *Impact:* Stabilizes long sessions.

2. **#41460 – [contributor] chore: merge dev into v2**
   [Link](https://github.com/anomalyco/opencode/pull/41460)
   **Author:** opencode-agent[bot] · **Open**
   *Syncs* V2 branch with latest dev changes including RTL, localization, chronological ordering, and native V2 session export.
   *Impact:* Keeps V2 up to date.

3. **#40427 – [beta] some experimental perf improvements**
   [Link](https://github.com/anomalyco/opencode/pull/40427)
   **Author:** @Hona · **Open**
   *Reduces* initial renderer entry from 7.45 MB to 1.82 MB (-75.5%).
   *Impact:* Faster startup and lower memory usage.

4. **#41350 – feat(app): add animated BusyWave loading indicator**
   [Link](https://github.com/anomalyco/opencode/pull/41350)
   **Author:** @Victozee26 · **Open**
   *Replaces* shimmering “Thinking” label with a busy wave effect.
   *Impact:* UI polish.

5. **#39358 – [contributor] feat(session): add durable session archival**
   [Link](https://github.com/anomalyco/opencode/pull/39358)
   **Author:** @kitlangton · **Open**
   *Adds* first-class archive operation to V2, idempotent and separate from delete.
   *Impact:* Enables persistent session management.

6. **#41452 – fix(core): align Copilot response continuation**
   [Link](https://github.com/anomalyco/opencode/pull/41452)
   **Author:** @rekram1-node · **Closed**
   *Aligns* stateless response continuation with official VS Code Copilot client.
   *Impact:* Improves interoperability with Copilot-style workflows.

7. **#40997 – refactor(core): replace integration prompts with forms**
   [Link](https://github.com/anomalyco/opencode/pull/40997)
   **Author:** @rekram1-node · **Open**
   *Replaces* integration-specific prompt schemas with shared `Form.Fields` definitions.
   *Impact:* Simplifies adding new provider integrations.

8. **#41450 – fix(core): derive fallback message for empty AI SDK provider errors**
   [Link](https://github.com/anomalyco/opencode/pull/41450)
   **Author:** @rekram1-node · **Open**
   *Ensures* structured error details (statusCode, responseBody) are displayed when `error.message` is empty.
   *Impact:* Better error diagnostics in TUI and logs.

9. **#41455 – fix(tui): include attachment path in model context**
   [Link](https://github.com/anomalyco/opencode/pull/41455)
   **Author:** @cakeni · **Open**
   *Preserves* local attachment file path for path-based MCP tools (e.g., image readers).
   *Impact:* Fixes broken image attachment workflows.

10. **#36046 – [automated-pr-cleanup] fix(tui): show permission prompts from nested subagent chains** (merged)
    [Link](https://github.com/anomalyco/opencode/pull/36046)
    **Author:** @NaturalSelect · **Closed**
    *Fixes* #13715 – renders permission prompts from subagents spawned by another subagent.
    *Impact:* Resolves a long-standing multi-agent hang.

---

## Feature Request Clusters

- **Model Fallback & Failover** (#7602, #41453) – Users want automatic retry with different models upon error, and persistent session daemons with memory recall.
- **UI/UX Improvements** (#785: disable streaming, #16226: send with button only, #31791: drag-and-drop images in question tool, #38392: `/clear` command, #35093: default code concealment state) – Multiple requests for more control over input and output behaviour.
- **Claude Code Compatibility** (#12472) – Requests for native hooks support (PreToolUse, PostToolUse, Stop) to ease migration.
- **Multi-Window / Multi-Server** (#14657) – Desktop app users want tabs or separate windows for different servers.
- **Session Management** (#41453) – Persistent daemon with zero-tool-call memory recall.

---

## Developer Pain Points (Recurring Frustrations)

- **Clipboard copy failures** (#4283) – Long-standing, widely upvoted, still unresolved.
- **DeepSeek V4 Flash on Go subscription** – Multiple bugs (leading space in model name, “terminated” errors, truncated output) make the model unreliable.
- **TUI freezes and hangs** (#41284, #41436) – On macOS and Windows, with no error output, requiring force-kill or admin elevation.
- **Nested subagent permission hangs** (#13715) – Bug fixed in today’s PR #36046, but had been open for months.
- **Billing and subscription glitches** (#41430, #32971, #41448) – Payments not syncing, free tier limits incorrectly applied.
- **Reasoning options not forwarded** (#27361, #41294) – Custom providers lose `reasoning.effort` settings, especially in headless mode.
- **Xcode ACP model override** (#34743) – Ignoring explicit configuration.
- **VS Code extension copy/paste** (#39588) – No clipboard support in the beta extension.

</details>