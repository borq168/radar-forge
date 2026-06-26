# AI CLI 工具社区动态日报 2026-06-26

> 生成时间: 2026-06-26 00:35 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比分析报告 | 2026-06-26

## 1. 今日横向概览

今日六款主流 AI CLI 工具中，Claude Code、OpenAI Codex、OpenCode 和 Qwen Code 均发布了新版本或夜间版，而 Copilot CLI 和 Kimi Code CLI 无版本更新。社区热点集中于**配额/计费异常**（Codex、Claude Code）、**代理/子代理行为不可控**（Gemini CLI、Claude Code）、**MCP 工具生态适配**（Kimi Code、Copilot CLI、OpenCode）以及**跨平台稳定性**（Windows Bun 段错误、macOS 权限回归、Linux inotify 限制）。Kimi Code CLI 社区活跃度最低，仅两条无回应的 Issue；其余工具 Issue/PR 活跃度均维持高位。

## 2. 各工具活跃度对比

| 工具             | 今日新 Issue 数 | 今日 PR 数 | 版本发布情况                                 |
|------------------|----------------|------------|----------------------------------------------|
| Claude Code      | ~50 条更新（含新 Issue） | 1（已合并） | v2.1.193（新增 autoMode 分类）               |
| OpenAI Codex     | 多个热点 Issue（估算 >20） | 10 条活跃   | rust-v0.142.2、v0.142.1 及多个 alpha         |
| Gemini CLI       | 多个热点 Issue（估算 >15） | 10 条活跃   | v0.49.0（正式版）、v0.50.0-preview.1          |
| GitHub Copilot CLI| 10 条热点 Issue         | 1（开放中） | 无                                           |
| Kimi Code CLI    | 2 条（均无回复）         | 0           | 无（最新仍为 v0.19.2）                       |
| OpenCode         | 10 条热点 Issue         | 10 条活跃   | v1.17.11（会话快照与回滚）                    |
| Qwen Code        | 多个热点 Issue（估算 >12） | 10 条活跃   | v0.19.2-nightly.20260625（web_fetch 修复）    |

## 3. 共同出现的功能方向

- **配额/计费透明性与异常告警**
  Claude Code 有两个 Issue 涉及计费切换（#71476）和 VS Code 扩展无声消耗配额（#71478）；OpenAI Codex 至少有 5 个 Issue（#28879 等）报告 5 小时预算在几分钟内耗尽，用户要求服务器端计费逻辑公开。

- **资源泄漏与性能异常**
  OpenCode 的 Windows Bun 段错误（#33742）、CPU 随机飙升（#33399）和内存泄漏 Megathread（#20695）；Qwen Code 的 PowerShell 进程泄漏（#5873）、Token 速度显示异常（#5722）；Claude Code 的会话转录丢失（#70219, #70632）。

- **MCP 工具数量限制与发现能力**
  Kimi Code 报告单个 MCP server 212 个工具（#2475）；Gemini CLI 在工具超过 128 个时返回 400 错误（#24246）；OpenCode 拆分 MCP 超时配置（PR #33977）；Copilot CLI 有 MCP 服务器启用/禁用需求（#2956, #3564）和策略拦截问题（#3934）。

- **Agent/子代理行为不可控与调试性不足**
  Gemini CLI 的通用 Agent 挂起（#21409）、子代理误报成功（#22323）、子代理轨迹无法分享（#22598）；Claude Code 的 TaskCreate 重复提醒无视 CLAUDE.md（#60323 等）；OpenCode 的规划模式限制 bash（PR #33967）。

- **跨平台兼容性**
  macOS: Claude Code 的 TUI 鼠标点击失效（#71465）、权限模式无法启用（#61415）；OpenAI Codex 的 syspolicyd 进程飙升（#25719）。
  Windows: Claude Code 的 Cowork 启动失败（#39636）；Copilot CLI 的滚动条错位（#3501）、WSL2 ARM64 复制失败（#3534）；OpenCode 的 Bun 段错误（#33399, #33938）。
  Linux: Gemini CLI 的 Wayland 浏览器子代理失败（#21983）；OpenCode 的 inotify 限制（#16610）。

## 4. 差异化定位分析

| 维度             | Claude Code                     | OpenAI Codex                 | Gemini CLI                       | Copilot CLI                  | Kimi Code CLI                 | OpenCode                        | Qwen Code                        |
|------------------|----------------------------------|------------------------------|----------------------------------|------------------------------|--------------------------------|----------------------------------|----------------------------------|
| **核心模型生态** | Anthropic Claude                 | OpenAI GPT-5 系列             | Google Gemini                    | GitHub Copilot（多模型）     | Moonshot Kimi（K2.7）         | 多模型（自带免费/可配置）        | 阿里巴巴千问                     |
| **主要场景**     | 深度代码编写、长上下文（1M）      | 代码辅助、任务自动化           | Agent 编排、子代理、Skill 系统   | 插件/MCP 生态、企业策略       | 轻量代码辅助                   | 开源全功能、会话快照/回滚         | 语言服务、记忆系统、扩展生态     |
| **功能侧重**     | 权限精细控制、自动模式分类         | 配额管理、MCP OAuth、市场插件  | Agent 追踪、对话状态管理、AST    | 斜杠命令、组策略、AppImage    | MCP 工具扩展、终端渲染         | 性能优化、桌面端、多提供商         | 上下文压缩、自动技能、守护进程   |
| **用户画像**     | 深度开发者、团队用户               | 高级开发者（Pro/Plus 付费）    | 实验性 Agent 开发者、开源贡献者  | 企业/团队、GitHub 生态用户    | 轻量需求用户、中文社区         | 开源自托管、多模型爱好者           | 中国开发者、企业级 AI 平台        |
| **技术路线**     | 闭源、定期发布                     | 闭源、高频 alpha/beta           | 开源、快速迭代、Agent 优先       | 开源、与 GitHub 生态深度绑定  | 闭源、更新节奏慢               | 开源、基于 Bun、社区驱动           | 开源、夜间版频繁、中文优先        |

## 5. 社区活跃度记录

- **最活跃（同时高 Issue 数 + 高 PR 数 + 有版本发布）**
  - **OpenAI Codex**：5—10 个热点 Issue + 10 个活跃 PR + 多个 alpha 发布，维护者对配额异常等高频问题有回应。
  - **OpenCode**：内存泄漏 Megathread 持续收集快照，PR 数量多（Bun canary、MCP 超时拆分等），v1.17.11 发布。
  - **Gemini CLI**：两个版本发布，10 个 PR 涉及安全修复和核心机制，Issue 热度高（子代理、Agent 挂起）。
  - **Claude Code**：v2.1.193 发布，但当天仅 1 个 PR（生命周期调整），Issue 讨论热度高但维护者回应有限。
  - **Qwen Code**：夜间版发布 + 10 个 PR，多个 Bug 被标记 P1。

- **中等活跃**
  - **Copilot CLI**：无版本发布，仅 1 个 PR，但 10 个热点 Issue 中部分有维护者回应（如 #3925 迅速关闭）。

- **低活跃**
  - **Kimi Code CLI**：0 PR、0 版本、2 条 Issue 均无官方回复或评论，社区互动几乎为零。

## 6. 有证据支撑的观察

1. **配额/计费问题已成为跨工具的普遍痛点**
   Claude Code 和 OpenAI Codex 均出现用户明确报告服务器端计费与本地感知严重不一致（Claude Code #71478, #71476；Codex #28879 等），且均涉及套餐切换或额度异常消耗，说明后端计量逻辑的透明度和可靠性急需优化。

2. **Agent / 子代理的行为可预测性仍是用户最大不满来源**
   Gemini CLI（#21409, #22323）、Claude Code（#60323）和 OpenCode（PR #33967 规划模式限制 bash）的反馈独立但方向一致：用户期望 Agent 不擅自执行危险操作、不重复无意义提示、不挂起；可配置性和执行中止机制是刚需。

3. **MCP 生态的规模化适配存在显著瓶颈**
   Kimi Code（212 工具 #2475）、Gemini CLI（128 工具限制 #24246）和 Copilot CLI（策略拦截 #3934）均提示当前 MCP 实现缺乏对大量工具的有效管理（发现、加载、超时、权限隔离），是制约扩展性的关键。

4. **跨平台稳定性在 Windows 和 macOS 上表现分化**
   macOS 上 Claude Code 的 TUI 鼠标回归（#71465）和权限模式 Bug（#61415）、OpenAI Codex 的 syspolicyd 异常（#25719）是高频回归点；Windows 上 OpenCode 的 Bun 段错误（#33742）和 Qwen Code 的 PowerShell 泄漏（#5873）则是性能/资源瓶颈。Linux 平台问题相对分散（inotify、Wayland、AppImage）。

5. **Kimi Code CLI 活跃度远低于其他工具，可能影响用户信心**
   其更新频率低（最新版仍为 v0.19.2）、今日无任何 PR/版本、两条 Issue 零回应，与其余六工具的密集响应形成鲜明对比。在 MCP 工具数量问题上，用户已在主动寻求替代方案（如备注中提到“尝试通过删除重复工具解决”），若无改善，可能加速用户流失。

---

*今日暂无明确跨工具信号关于“LLM 模型能力降级”或“统一富文本编辑标准”等强趋势。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是为你准备的 2026-06-26 Claude Code 社区动态日报。

---

## Claude Code 社区动态日报 | 2026-06-26

### 今日更新概览
Anthropic 于今日发布了 v2.1.193 版本，新增了 Shell 命令的自动模式分类功能。社区反馈活跃，共有 50 条 Issue 更新，其中关于在 macOS 桌面版权限模式无法启用的问题持续引发 63 条讨论，同时新版 (2.1.193) 中 TUI 鼠标点击失效的回归 Bug 也已上报。此外，一个关于仓库生命周期（Stale/Autoclose）超时时间调整的 PR 已关闭。

### 版本发布

- **v2.1.193**: 新增 `autoMode.classifyAllShell` 设置，允许将所有 Bash/PowerShell 命令（而非仅任意代码执行模式）路由至自动模式分类器。同时，在对话记录、拒绝提示以及 `/permissions` 最近拒绝记录中增加了自动模式拒绝原因的显示。

### 社区热点 Issues

1.  **[BUG] Desktop: Bypass Permissions mode can't be enabled on macOS — reverts to Accept Edits**
    - **摘要**: 在 macOS 桌面版 (v2.1.148) 中，用户无法启用“绕过权限”模式，该模式会自动回退至“接受编辑”状态，并提示“权限模式无法更改”。
    - **影响**: 严重阻碍了需要完全控制权限以进行自动化操作的用户。
    - **链接**: https://github.com/anthropics/claude-code/issues/61415

2.  **[Bug] Anthropic API Error: Usage credits required for 1M context window with opus-plan model**
    - **摘要**: 选择 opus-plan 模型并试图使用 1M 上下文窗口时，即使有配额，也收到 API 错误，要求开启使用积分。
    - **影响**: 影响了使用大模型和长上下文进行深度任务处理的用户。
    - **链接**: https://github.com/anthropics/claude-code/issues/61869

3.  **[BUG] VS Code extension resumes huge sessions without warning and rapidly exhausts Max usage**
    - **摘要**: VS Code 扩展在恢复会话时未发出警告，导致用户迅速消耗完 Max 使用额度。
    - **影响**: 影响 VS Code 用户的使用成本和体验，是成本管控的痛点。
    - **链接**: https://github.com/anthropics/claude-code/issues/71478

4.  **[Bug] Mouse clicks not responding in TUI on Terminal.app v2.1.193**
    - **摘要**: 新版本 v2.1.193 中，macOS Terminal.app 的 TUI 界面鼠标点击失效，包括点击链接和切换代理模式。
    - **影响**: 直接影响终端用户的交互体验，属于回归性 Bug。
    - **链接**: https://github.com/anthropics/claude-code/issues/71465

5.  **[BUG] Desktop GUI SSH: opening multiple Claude Code sessions on the same remote host invalidates each other's auth token**
    - **摘要**: macOS 桌面版 GUI SSH 功能中，对同一远程主机开启第二个会话会使所有会话的认证令牌失效，导致会话挂起。
    - **影响**: 妨碍了需要多会话并发管理同一远程服务器的开发者。
    - **链接**: https://github.com/anthropics/claude-code/issues/54179

6.  **[BUG] tmux/psmux auto-detection disables session transcript persistence — .jsonl never written**
    - **摘要**: 当 Claude Code 启动于 tmux 会话内时，其自动检测功能会阻止会话转录文件 (.jsonl) 的写入，导致会话记录丢失。
    - **影响**: 影响依赖会话记录进行审计或历史回顾的用户。
    - **链接**: https://github.com/anthropics/claude-code/issues/70219

7.  **[BUG] 2.1.190 Linux: active session transcript .jsonl not written until session exit; hooks get empty transcript_path mid-session**
    - **摘要**: 在 Linux 上 (v2.1.190)，活动的会话转录文件在会话结束前不会被写入，导致 hooks 在运行中获取到的转录路径为空。
    - **影响**: 影响依赖实时转录数据进行自动化的开发者。
    - **链接**: https://github.com/anthropics/claude-code/issues/70632

8.  **[Bug] Team subscription Claude Code billing to API credits instead of Team plan after forced re-login**
    - **摘要**: 用户在强制重新登录后，其团队订阅的计费方式被错误地切换到了 API 积分模式，而非继续使用团队计划额度。
    - **影响**: 直接导致团队用户产生预期外的 API 费用，是计费相关的严重问题。
    - **链接**: https://github.com/anthropics/claude-code/issues/71476

9.  **TaskCreate / TaskUpdate system-reminder fires repeatedly despite explicit directive in CLAUDE.md (多个关联 Issue)**
    - **摘要**: 即使开发者在 `CLAUDE.md` 中明确指示不要使用 `TaskCreate`/`TaskUpdate`，系统仍会反复注入提示。另有多个 Issue (#64192, #62323) 也指出该提醒在长会话中频繁弹出，缺乏抑制机制。
    - **影响**: 影响用户自定义工作流，并可能因无用 Token 消耗导致成本增加。
    - **链接 (主要)**: https://github.com/anthropics/claude-code/issues/60323
    - **关联 Issue**:
        - https://github.com/anthropics/claude-code/issues/64192
        - https://github.com/anthropics/claude-code/issues/62323

10. **[DOCS] OpenTelemetry docs omit `claude_code.assistant_response` and `OTEL_LOG_ASSISTANT_RESPONSES`**
    - **摘要**: OpenTelemetry 监测文档遗漏了关于 `claude_code.assistant_response` 和 `OTEL_LOG_ASSISTANT_RESPONSES` 的说明。
    - **影响**: 增加了用户使用 OpenTelemetry 进行详细监控和调试的难度。
    - **链接**: https://github.com/anthropics/claude-code/issues/71457

### 重要 PR 进展

- **#63686 Bump stale and autoclose timeouts from 14 to 90 days**
    - **摘要**: 一个生命周期管理相关的 PR 已合并，将 Issue 标记为“过时”和自动关闭的超时时间从 14 天延长至 90 天。
    - **影响**: 这意味着长期无人更新的 Issue 和 PR 将获得更长的活跃期，但减缓了仓库的清理速度。
    - **链接**: https://github.com/anthropics/claude-code/pull/63686

（注意：过去 24 小时内仅有一条 PR 更新。根据日报写作边界，此处无法提供 10 条 PR 摘要。）

### 功能需求归类
根据社区近期的 Issue 反馈，用户的核心功能需求集中在以下几个方向：

1.  **权限与安全控制**: 用户希望更精细、更可靠的权限控制，包括绕过权限模式 (Bypass Permissions) 无法稳定使用 (#61415)，以及提升 auto-mode 分类器的正确性。
2.  **模型与成本控制**:
    - 用户反馈 Opus 模型近期性能下降、响应变慢 (#70267)。
    - 多个 Issue 反映出对 Token 消耗和成本的担忧，包括 VS Code 扩展无警告恢复大会话 (#71478)、任务系统持续推送无用消耗 Token 的提示 (#60323, #64192, #62323)、以及计费方式从团队计划意外切换到 API 积分 (#71476)。
3.  **跨平台兼容性与稳定性**:
    - 多个 Bug 指向特定平台，如 macOS 桌面版 GUI SSH 认证失效 (#54179)、Windows 下 Cowork 虚拟机启动失败 (#39636) 和 TUI 鼠标点击问题 (#67576, #71465)。
    - Linux 和 tmux 环境下会话转录丢失的 Bug (#70219, #70632) 也是高频痛点。
4.  **Workflow 自动化与任务管理**: 用户希望系统能更好地理解和遵守 `CLAUDE.md` 中的指令，并希望抑制重复的 `TaskCreate` 提示，允许用户自定义工作流而不被干扰。
5.  **Agent 与子代理可视化**: 社区呼吁为 Agent/Task 工具生成的子代理提供稳定的、在运行时分发的标签，以便在 Agent 视图中更好地区分和管理 (#71292)。

### 开发者关注点
- **会话转录丢失**: 在 tmux (跨平台) 和 Linux 环境下，会话转录.jsonl文件无法在会话期间实时写入是关键痛点，这对自动化流程和事后审查构成障碍。
- **“大版本”引发的回归**: v2.1.193 发布后，macOS Terminal.app 的鼠标点击功能立即失效，这提醒社区需要更充分的回归测试。
- **成本与资源滥用**: 开发者集中抱怨系统内置的“任务管理”提醒无视用户配置、频繁触发，造成不必要的 Token 消耗，这被视为一种资源滥用行为。
- **计费错误**: 从团队订阅到 API 积分的计费方式跳变，引起了社区对计费系统稳定性和准确性的严重关切。
- **VS Code 扩展消耗**: VS Code 扩展在无警告下恢复大会话，直接耗尽配额，凸显了扩展在资源使用透明度和控制权方面存在的不足。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是为您生成的2026-06-26 OpenAI Codex社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-26

## 今日更新概览

今日Codex社区聚焦于**配额消耗异常**的严重问题，多个用户报告Pro/Plus计划下的5小时预算在极短时间内被消耗殆尽，相关Issue讨论热烈。同时，官方发布了多个版本更新，重点改进了代理支持和系统代理功能。在开发方面，团队正在推进MCP工具发现、插件市场支持以及代码模式进程管理等重要功能的开发。

## 版本发布

- **rust-v0.142.2**: 主要新功能是，MCP工具现在默认在支持的情况下使用工具搜索（tool search）**（#29486）**，提升了工具发现能力，同时保持与旧模型和提供商的兼容性。此外，macOS认证客户端在启用`respect_system_proxy`后，能够遵循系统代理、PAC和WPAD设置 **（#26709）**。
- **rust-v0.142.1**: 新增了对Windows系统的可选代理支持，包括PAC、WPAD、静态代理和绕过规则 **（#26708）**。
- 此外，还发布了多个Alpha版本：`rust-v0.143.0-alpha.25`、`rust-v0.143.0-alpha.22`、`rust-v0.143.0-alpha.21`、`rust-v0.143.0-alpha.16` 以及 `codex-zsh-v0.1.0`。

## 社区热点 Issues

1.  **配额消耗异常飙升（#28879, #29955, #30002, #30034, #30086）**
    - **摘要**: 这是今日最严重的问题群。自6月16日以来，多名用户报告ChatGPT Plus和Pro计划的Codex 5小时预算在2-3个提示词内就被耗尽，消耗速率较之前增长了10-20倍。用户日志显示，服务器端对令牌的“费率限制消耗”计量远高于本地的实际令牌计数。
    - **链接**: [#28879](https://github.com/openai/codex/issues/28879)

2.  **无法验证遗留电话号码导致账户锁定（#25749）**
    - **摘要**: 用户通过Google OAuth登录后，Codex要求验证一个已不可访问的旧手机号，且不提供更换手机号的路径，导致用户无法使用Codex，尽管他们可以正常使用ChatGPT。
    - **链接**: [#25749](https://github.com/openai/codex/issues/25749)

3.  **用户强烈要求恢复 `/undo` 功能（#9203）**
    - **摘要**: 该Issue累计获得296个赞。用户指出，当Codex意外删除未被git追踪的文件或修改未提交的代码时，缺少撤销功能会造成严重问题。这是一个长期诉求。
    - **链接**: [#9203](https://github.com/openai/codex/issues/9203)

4.  **macOS桌面版导致系统进程CPU和内存失控（#25719, #28071）**
    - **摘要**: 多个用户反馈，Codex Desktop在macOS上会反复触发`syspolicyd` / `trustd` 进程，导致CPU和内存持续攀升，最终需要重启系统才能解决。
    - **链接**: [#25719](https://github.com/openai/codex/issues/25719)

5.  **自动上下文压缩导致模型“忘记任务”（#5957）**
    - **摘要**: 用户报告，自动上下文压缩（Auto compaction）功能会导致GPT-5-Codex模型丢失任务执行的上下文，忘记它正在编辑的文件或正在执行的任务，从而停止工作。该问题影响企业版用户。
    - **链接**: [#5957](https://github.com/openai/codex/issues/5957)

6.  **桌面App 26.616版本MCP新对话失败（#28978）**
    - **摘要**: 新版本桌面App中，启动任何新的对话都会报错“Invalid request: missing field `inputSchema`”，而相同配置的CLI则工作正常。用户需回退版本或使用CLI。
    - **链接**: [#28978](https://github.com/openai/codex/issues/28978)

7.  **MCP OAuth令牌不能自动刷新（#17265）**
    - **摘要**: Codex虽然保存了MCP服务器的`refresh_token`，但不会在`access_token`过期时自动刷新，导致工具调用因认证错误而失败。直到手动重新认证或删除凭证文件。
    - **链接**: [#17265](https://github.com/openai/codex/issues/17265)

8.  **Windows桌面版应用补丁触发沙箱安装对话框（#29200）**
    - **摘要**: 更新后，每次执行`apply_patch`都会弹出`codex-windows-sandbox-setup.exe`的错误对话框，即使补丁本身成功执行。这严重干扰了Windows用户的工作流。
    - **链接**: [#29200](https://github.com/openai/codex/issues/29200)

9.  **VS Code Remote-SSH扩展加载卡死（#26951）**
    - **摘要**: Codex IDE扩展在与VS Code Remote-SSH配合使用时，会卡在加载界面，而CLI可以正常工作。这影响了使用远程Linux开发环境的Windows用户。
    - **链接**: [#26951](https://github.com/openai/codex/issues/26951)

10. **用户感知到模型智能下降（#30137）**
    - **摘要**: 有用户抱怨自6月25日发布的版本（26.623）起，GPT-5.5模型的智能“显著下降”，感觉像是被降级了。
    - **链接**: [#30137](https://github.com/openai/codex/issues/30137)

## 重要 PR 进展

1.  **整合CI门控（#30146）**
    - **摘要**: 计划用一个稳定的、版本控制的门控CI工作流替换多个分散的GitHub Actions状态检查，以简化开发流程。
    - **链接**: [#30146](https://github.com/openai/codex/pull/30146)

2.  **复用文件遍历结果获取环境技能元数据（#30145）**
    - **摘要**: 优化环境技能发现流程：已执行的`fs/walk`操作返回了所有文件路径，核心逻辑将直接复用此结果来查找`SKILL.md`，避免重复查询执行器。
    - **链接**: [#30145](https://github.com/openai/codex/pull/30145)

3.  **支持npm市场插件源（#29375）**
    - **摘要**: 修复了市场插件源反序列化问题，现在可以正确识别和加载npm来源的插件，允许用户通过`plugin list`和`plugin add`命令管理npm插件。
    - **链接**: [#29375](https://github.com/openai/codex/pull/29375)

4.  **MCP调用路由至实时运行时（#30127）**
    - **摘要**: 解决环境可用性变更时，旧的MCP运行时仍在处理调用而导致状态不一致的问题。该PR确保新的MCP调用被正确地路由到最新的实时运行时。
    - **链接**: [#30127](https://github.com/openai/codex/pull/30127)

5.  **添加托管的新线程模型设置（#29683）**
    - **摘要**: 新增管理端功能，允许管理员为桌面App的新线程设置默认模型、推理力度和服务层级，同时允许用户在使用时覆盖这些设置。
    - **链接**: [#29683](https://github.com/openai/codex/pull/29683)

6.  **实现独立的代码模式进程宿主（#30111, #30112）**
    - **摘要**: 正在开发独立的`codex-code-mode-host`进程，通过stdio管理会话和单元格，旨在将代码执行逻辑与主进程解耦，提升稳定性和安全性。
    - **链接**: [#30111](https://github.com/openai/codex/pull/30111)

7.  **让Codex查阅用户级别的代码审查技能（#30143）**
    - **摘要**: 修改了技能发现逻辑，使得Codex除了项目内的`code-review-*`技能外，也能读取和使用用户个人目录（`$CODEX_HOME/skills/`）下的自定义审查技能。
    - **链接**: [#30143](https://github.com/openai/codex/pull/30143)

8.  **将Codex Apps原型化为虚拟HTTP MCP服务器（#30000）**
    - **摘要**: 提出一种新架构，将Codex Apps抽象为运行在本地环回地址上的流式HTTP MCP端点，从而无需为Apps设计特殊的启动和执行流程。
    - **链接**: [#30000](https://github.com/openai/codex/pull/30000)

9.  **修复终端日志的持久性漏洞（#30144）**
    - **摘要**: 修复了在日志持久化过程中，终端事件可能在`TurnComplete`之前被提前写入并下发，导致状态不一致的问题。
    - **链接**: [#30144](https://github.com/openai/codex/pull/30144)

10. **按线程发起者属性化app-server分析数据（#29935）**
    - **摘要**: 修复了分析归因问题。原本Work线程的活动被错误地归因于桌面App的连接，现在将改为归因于线程实际的发起者。
    - **链接**: [#29935](https://github.com/openai/codex/pull/29935)

## 功能需求归类

- **配额与计费透明性**: 大量用户（#28879, #29955, #30002, #30034, #30086）报告配额消耗异常，核心诉求是**服务器端的计费逻辑应公开透明**，并能与客户端本地统计进行核对。
- **认证与账户恢复流程**: 多个Issue（#25749, #20320）集中在用户被卡在电话号码验证环节无法前进。主要需求是提供一个**安全的、可用的账户恢复或电话号码更换路径**。
- **MCP生态与插件系统**: 用户和开发者围绕MCP提出了多种需求，包括：**自动刷新OAuth令牌**（#17265）、提升工具发现能力（#29486）、以及支持**npm作为插件源**（#29375）。
- **桌面应用稳定性**: 针对macOS的`syspolicyd`问题（#25719, #28071）和Windows的沙箱安装对话框问题（#29200, #30009），用户强烈呼吁**修复影响系统稳定性和工作流程的性能与兼容性问题**。
- **用户体验与辅助功能**: 持续存在的需求包括：**恢复`/undo`命令**（#9203）、**允许禁用自动更新**（#18546）、以及**增加屏幕阅读器友好的TUI模式**（#20489）。

## 开发者关注点

- **配额异常是首要痛点**: 服务器端配额计量与客户端不符，预算在几分钟内耗尽，直接导致高付费用户无法使用服务。这是当前社区情绪最激烈的问题，优先度极高。
- **MCP用户体验瓶颈**: MCP的令牌刷新问题严重阻碍了其作为连接外部工具桥梁的可靠性。同时，新版本因缺少`inputSchema`字段导致MCP完全无法使用，暴露了版本兼容性测试的不足。
- **桌面应用频繁拖累系统**: 无论是macOS的进程失控还是Windows的沙箱错误对话框，开发者都将Codex Desktop视为一个影响其主系统稳定性的“麻烦”，而非一个单纯的工具。
- **远程与认证流程的障碍**: VS Code Remote-SSH的兼容性问题和对遗留电话号码的依赖，正在将部分开发者（尤其是企业用户和特定工作流用户）排除在门外。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是基于您提供的 GitHub 数据生成的 2026-06-26 Gemini CLI 社区动态日报。

---

## Gemini CLI 社区动态日报 — 2026-06-26

**日报编者：** AI 开发工具技术分析师
**数据来源：** github.com/google-gemini/gemini-cli

### 1. 今日更新概览

过去 24 小时内，Gemini CLI 项目发布了 v0.49.0 正式版和 v0.50.0-preview.1 预览版，其中 v0.49.0 包含了安全修复。社区讨论依旧围绕 Agent 的稳定性、子代理（Subagent）行为和工具执行可靠性展开，大量关于 Agent 挂起、误报成功和系统兼容性的 Issue 持续活跃，反映出开发者在实际使用中对 Agent 自主行为的可控性与透明度的强烈需求。项目维护者提交了多项针对安全（路径遍历、MCP 资源隔离、信任对话框）、核心机制（话题状态、编辑器检测）和 CI/CD 流程的关键修复 PR。

### 2. 版本发布

- **v0.49.0 (正式版)**: 发布了包含多项修复和改进的稳定版本。变更内容包括通过 `npm ci --ignore-scripts` 修复发布验证问题，以及为 npm 依赖包引入冷却期（cooldown period）的 CI 优化。值得注意的是，此版本包含一个修复，旨在防止在 skill 安装过程中的路径遍历漏洞。
  - 链接: https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0

- **v0.50.0-preview.1**: 发布了最新的预览版。此版本主要侧重于 CI/CD 流程的修复与改进，包括修复发布验证中工作区二进制文件冲突的问题，以及引入工具注册表依赖注入（`Feat/tool registry di`）的初始工作。
  - 链接: https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1

### 3. 社区热点 Issues

1.  **[Bug] 子代理达到最大轮次后误报为“目标达成” (#22323)**
    - **影响场景**: 当子代理在分析过程中达到预设的最大对话轮次时，系统将其终止原因错误地报告为“GOAL（目标达成）”和“成功”，从而掩盖了实际的中断。这会导致用户对任务状态产生误判，尤其影响如代码库调查等复杂任务。
    - **社区反应**: 该问题被标记为 P1 优先级和 Bug，已有 8 条评论。社区成员认为此行为破坏了任务的可靠性，并可能导致后续工作基于错误的前提进行。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22323

2.  **[Bug] 通用 Agent 挂起 (#21409)**
    - **影响场景**: 当 `gemini-cli` 将任务转交给通用 Agent（Generalist Agent）处理时，Agent 会无限期挂起，即使是执行创建文件夹等简单操作。用户报告已等待长达一小时仍未完成。
    - **社区反应**: 这是社区反馈最强烈的问题之一（👍: 8），被标记为 P1 优先级。用户反馈指示模型“不要转交给子代理”可以绕过此问题。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21409

3.  **[Bug] Shell 命令执行完成后卡住，显示“等待输入” (#25166)**
    - **影响场景**: 在 Gemini CLI 执行完一个简单的 CLI 命令后，系统会卡住，显示 shell 命令仍在活动并等待用户输入，尽管命令已经完成。该问题频繁发生。
    - **社区反应**: P1 优先级，有 3 个 👍 赞成。这是影响核心交互流程的严重问题，直接阻碍了自动化流程的连续性。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/25166

4.  **[Bug] Gemini 不充分使用自定义 Skill 和子代理 (#21968)**
    - **影响场景**: 尽管用户已定义并描述清楚“gradle”和“git”等自定义 Skill，Gemini 在遇到相关任务时（执行构建或 Git 操作）依然不会主动使用它们，仅在用户明确指示时才会调用。
    - **社区反应**: 开发者对此非常困惑，认为核心的 Agent 编排逻辑未能有效将任务与预定义工具集进行匹配。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21968

5.  **[Bug/Feature] AST 感知的文件读写与代码库映射评估 (#22745)**
    - **影响场景**: 这是一个追踪 EPIC，旨在评估通过 AST（抽象语法树）感知的文件读取、搜索和映射能否提升 Agent 的效率。例如，精确读取函数边界以减少 Token 消耗和对话次数，以及提升导航准确性。
    - **社区反应**: 该议题的讨论反映出社区对 Agent “代码理解”深度的更高期待，不仅仅是文本模式匹配。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22745

6.  **[Bug] 浏览器子代理在 Wayland 环境下失败 (#21983)**
    - **影响场景**: 在 Wayland 显示服务器协议下运行 Gemini CLI 时，浏览器子代理会失败并无法正常执行任务。
    - **社区反应**: 尽管标记为 P1，但评论较少。此问题对于使用 Linux 和 Wayland 环境的开发者至关重要，限制了 Gemini CLI 的跨平台兼容性。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/21983

7.  **[Bug] 遭遇 128 个以上工具时返回 400 错误 (#24246)**
    - **影响场景**: 当 Agent 可用的工具总数超过 128 个时，Gemini CLI 在处理请求时会遇到 400 错误，导致任务失败。
    - **社区反应**: 用户期望 Agent 能够更智能地在可用工具中进行筛选和排序，而非被数量限制所困扰。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/24246

8.  **[Bug] Agent 应停止/减少破坏性行为 (#22672)**
    - **影响场景**: 在某些复杂操作（如 Git 分支管理）中，模型会倾向于使用 `git reset` 或 `--force` 等危险命令，而更安全的替代方案是存在的。在处理数据库等资源时，模型也缺乏对潜在风险的认知。
    - **社区反应**: 这是一个关键的用户体验和安全问题，开发者希望 Agent 在执行具有破坏性潜力的操作前能更加谨慎。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22672

9.  **[Bug] 浏览器 Agent 忽略 settings.json 配置覆盖 (#22267)**
    - **影响场景**: 用户在全局或项目级 `settings.json` 中为浏览器 Agent 设置的自定义参数（如 `maxTurns`）完全无效。虽然 `AgentRegistry` 正确读取了配置，但 Agent 自身在执行时并未应用。
    - **社区反应**: 此问题直接导致用户的自定义策略无法生效，降低了工具的灵活性和可配置性。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22267

10. **[Feature] 子代理轨迹应在 `/chat share` 中可见 (#22598)**
    - **影响场景**: 子代理的执行轨迹（trajectory）虽被记录，但无法通过 `/chat share` 功能方便地分享。这使得团队成员或评估者难以审查和理解子代理的具体操作步骤。
    - **社区反应**: 开发者认为这对于子代理行为的调试、评估和协作至关重要。
    - 链接: https://github.com/google-gemini/gemini-cli/issues/22598

### 4. 重要 PR 进展

1.  **修复 Skill 资源列表忽略 .gitignore/.geminiignore (#28149)**
    - **内容**: 修复了当 Skill 被激活时，其可用的文件资源列表未能遵循 `.gitignore` 或 `.geminiignore` 规则的问题，避免将不应模型访问的文件暴露给 Agent。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28149

2.  **修复 MCP 资源跨服务器返回错误内容 (#28143)**
    - **内容**: 修复了一个关键 Bug，当两个 MCP 服务器暴露同名资源 URI 时，`read_mcp_resource` 可能会返回错误服务器的内容。通过按服务器解析资源端点解决了此混淆问题。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28143

3.  **修复 Vertex AI 使用 API Key 时忽略 GOOGLE_CLOUD_LOCATION (#28142)**
    - **内容**: 修复了当使用 API Key 鉴权访问 Vertex AI 时，`GOOGLE_CLOUD_LOCATION` 环境变量被忽略，请求被路由到全局端点的问题。现在将正确使用配置的区域端点。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28142

4.  **修复清理话题时忽略过时的 update_topic 调用 (#28153)**
    - **内容**: 修复了当用户在 Agent 发出 `update_topic` 调用前后立即执行 `/clear` 命令时，过时的调用仍会错误地覆盖已重置的话题状态，导致状态不一致的问题。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28153

5.  **延迟检测可用编辑器以避免启动缓慢 (#28144)**
    - **内容**: 改进了启动性能。之前会在启动时立即检查所有已知编辑器的可用性（在 Windows 上尤其慢），现在改为惰性检测，仅在需要使用时才进行探测。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28144

6.  **修复信任对话框显示未实际运行的 Hook (#27915)**
    - **内容**: 修复了一个安全相关的 Bug，项目信任对话框显示的 Hook 命令与其实际运行的命令相反，这可能导致用户对真正的安全风险缺乏认知。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27915

7.  **为 read_mcp_resource 输出添加 wrapUntrusted() (#27979)**
    - **内容**: 为了与 MCP 工具的行为保持一致，对 `read_mcp_resource` 返回的资源文本应用 `wrapUntrusted()` 包装，增强了从 MCP 服务器读取数据的安全性。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/27979

8.  **实现 Caretaker Agent 的 Cloud Run  Webhook 服务 (#28015)**
    - **内容**: 一个涉及较大改动的新功能 PR，旨在为 Caretaker Agent（一个用于管理仓库的机器人）引入 Cloud Run  Webhook 服务，以支持更复杂的自动化任务。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28015

9.  **更新 Vertex AI 官方端点路由 (#28145)**
    - **内容**: 一个已合并的 PR，将 Gemini CLI 与 Vertex AI 的默认 API 路由更新为官方代表端点，确保请求能被正确路由到对应地理区域的 AI 平台。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28145

10. **修复 Docker 构建镜像复制打包产物 (#28148)**
    - **内容**: 修复了 `Dockerfile` 多阶段构建中的一个 Bug，确保了运行时阶段能正确地从构建阶段复制 NPM 打包产物，而不会复制空的目录。
    - 链接: https://github.com/google-gemini/gemini-cli/pull/28148

### 5. 功能需求归类

从今日的活跃 Issue 和 PR 来看，社区反馈的功能需求主要集中在以下方向：

- **Agent 行为的透明性与可调试性**：
    - 用户希望子代理的轨迹（trajectory）能够被分享（#22598）和包含在 Bug 报告中（#21763），以便于审查和调试。
    - 用户要求 Agent 能提供关于自身功能的准确信息，包括 CLI 参数和热键（#21432），增强 Agent 的“自我认知”。

- **安全性与权限控制**：
    - 多个议题集中在防止破坏性行为上，用户希望 Agent 在执行危险操作（如 `git reset`）时更加谨慎（#22672）。
    - 新增的安全修复 PR 关注于 MCP 资源隔离（#27979, #28143）和信任对话框的准确性（#27915），反映了对第三方集成安全性的重视。

- **上下文与性能优化**：
    - 社区对更智能的上下文管理有强烈需求，如使 Agent 具备 AST 感知能力以减少 Token 消耗（#22745）。
    - 对工具数量限制（#24246）和 Skill 自动匹配（#21968）的讨论，反映出社区希望 Agent 能更高效地管理和使用其能力集，而非简单罗列。

- **系统兼容性与稳定性**：
    - 浏览器子代理在 Wayland 环境下的失败（#21983），以及命令执行后卡住（#25166）等问题，突显了提升跨平台兼容性和核心执行稳定性的重要性。

### 6. 开发者关注点

- **子代理行为的不透明性**：开发者抱怨子代理经常挂起（#21409）、误报成功（#22323）或不按预期执行（#21968），且缺乏有效的调试和追踪手段（#22598, #21763）。这导致开发者对 Agent 的“黑盒”行为感到不安，难以信任其任务执行结果。
- **不当修正工作的风险**：开发者强烈关注 Agent 在执行代码或系统操作时的潜在破坏性（#22672），以及因缺乏上下文而导致的文件误写（#23571）。他们需要 Agent 能更“细心地”工作，并能提供一个安全的撤销机制。
- **工具与能力的限制**：超过 128 个工具即报错（#24246）的限制，以及自定义 Skill 不被自动使用（#21968），表明开发者希望 Agent 的“工具箱”不仅是数量上的扩展，更需要在复杂环境下具备智能识别和调用的能力。
- **Bash 转义与交互程序兼容问题**：命令执行后的“等待输入”假死（#25166）以及创建项目时在交互式提示符处卡住（#22465）等问题，频繁打断工作流。开发者需要 Agent 对终端程序的行为有更鲁棒的处理逻辑。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是 2026 年 6 月 26 日的 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-26

## 今日更新概览

过去 24 小时内，社区讨论和反馈高度活跃，共产生 31 条被更新的 Issue 和 1 个 Pull Request。主要焦点集中在**会话恢复后的模型列表加载失败**、**插件系统的静默命令重写问题**，以及 **MCP（模型上下文协议）服务器的策略拦截与UX改进**。

## 社区热点 Issues

**1. 会话恢复后无法加载模型列表 (#3596, #3680)**
- **影响场景**: 通过 `--resume` 恢复会话后，执行 `/model` 命令查看模型列表时失败。
- **问题范围**: 至少两位用户报告了此问题。系统返回错误 `Error loading model list: Error: Not authenticated`，但会话中的其他功能（如对话）正常。新创建的会话无此问题。
- **社区反应**: Issue #3596 获得 11 个赞，位列今日热度第一，表明该问题影响了较多用户。社区正在寻求该场景下认证状态的修复。
- **链接**: [#3596](https://github.com/github/copilot-cli/issues/3596), [#3680](https://github.com/github/copilot-cli/issues/3680)

**2. 插件 preToolUse 无法静默重写命令 (#2643)**
- **影响场景**: 开发者编写 `preToolUse` 钩子（Hook）来自动重写命令并设置 `permissionDecision: allow`，期望无需用户确认。
- **问题范围**: 即使权限已声明，CLI 仍然弹出确认对话框。该问题已存在两个月，影响自动化工作流和插件开发。
- **社区反应**: 12 条评论讨论，开发者希望获得更细粒度的权限控制，实现“静默重写”。
- **链接**: [#2643](https://github.com/github/copilot-cli/issues/2643)

**3. 请求列表所有支持的模型 (#700)**
- **影响场景**: 用户希望能查询 Copilot CLI 当前支持的所有模型列表及其乘数（multiplier）信息。
- **问题范围**: 这是一个长期存在的功能需求，自 2025 年 12 月起已获得 14 条评论和 4 个赞。社区提议增加 `copilot --list-models` 命令。
- **链接**: [#700](https://github.com/github/copilot-cli/issues/700)

**4. MCP 服务器在 `show` 菜单中无法启用/禁用 (#2956, #3564)**
- **影响场景**: 使用 `/mcp show` 交互菜单时，只能添加或删除 MCP 服务器，缺乏临时启用/禁用的选项。
- **问题范围**: 该功能请求由不同用户在 4 月和 5 月提出，6 月 25 日仍有更新。用户期望提升 MCP 服务器管理的便捷性。
- **社区反应**: 多个 Issue 表达类似诉求，社区共识强烈。
- **链接**: [#2956](https://github.com/github/copilot-cli/issues/2956), [#3564](https://github.com/github/copilot-cli/issues/3564)

**5. Windows 滚动条导致文本错位 (#3501)**
- **影响场景**: 在 Windows 终端中，引入垂直滚动条后，UI 文本渲染出现对齐问题。
- **问题范围**: 影响 Windows 控制台主机和 Windows Terminal 用户，与滚动条 UI 元素冲突。
- **社区反应**: 5 条评论，9 个赞，是严重的 UI/UX 问题。
- **链接**: [#3501](https://github.com/github/copilot-cli/issues/3501)

**6. WSL2 (ARM64) `/copy` 命令因 `clip.exe` 引号问题失败 (#3534)**
- **影响场景**: 在 ARM64 架构的 WSL2 环境中，执行 `/copy` 命令将内容复制到 Windows 剪贴板时失败。
- **问题范围**: 底层原因是 `cmd.exe` 包装器在处理引号时存在 Bug，导致 `clip.exe` 退出码为 1。
- **社区反应**: 4 条评论，4 个赞，影响 ARM64 设备用户。
- **链接**: [#3534](https://github.com/github/copilot-cli/issues/3534)

**7. 企业级集中配置管理需求 (#3909)**
- **影响场景**: 企业管理员无法向开发者的本地 Copilot CLI 实例统一推送配置，特别是环境变量。
- **问题范围**: 目前仅支持云端环境的机密配置，本地 CLI 配置缺乏组织级管理手段。
- **社区反应**: 一个高质量的功能请求，获得了 2 条评论。
- **链接**: [#3909](https://github.com/github/copilot-cli/issues/3909)

**8. Linux AppImage 使用系统 Git 时因库污染导致错误 (#3925)**
- **影响场景**: Linux 用户使用 Copilot Desktop AppImage 时，AppImage 的 `LD_LIBRARY_PATH` 泄露到内部 Git 进程，导致 Git 执行 `fetch` 时因符号查找失败。
- **问题范围**: 影响 AppImage 分发版本的 HTTPS 通信和会话创建。
- **社区反应**: 该 Bug 昨日上报并迅速关闭，说明维护者已高度关注或已找到快速修复方向。
- **链接**: [#3925](https://github.com/github/copilot-cli/issues/3925)

**9. 用户自定义技能在更新后丢失 (#3938)**
- **影响场景**: 从 Claude Code 迁移到 Copilot CLI 的用户，其自定义的斜杠命令（Slash commands）在 CLI 更新后丢失。
- **问题范围**: 问题在于更新过程可能覆盖了全局技能的作用域。
- **社区反应**: 1 条评论，表明这是一个新出现的回归问题。
- **链接**: [#3938](https://github.com/github/copilot-cli/issues/3938)

**10. 自定义 MCP 服务器被“策略”拦截 (#3934)**
- **影响场景**: 企业在 VSCode 和 IntelliJ 中可以正常使用的本地 MCP 服务器，在 Copilot CLI 中提示 `MCP server is blocked by policy`。
- **问题范围**: 用户无法明确是什么策略导致了拦截，且该策略与 IDE 插件中的行为不一致，给企业用户带来困惑。
- **社区反应**: 一个新提交的 Bug，显示出企业环境下 MCP 策略执行的不透明性。
- **链接**: [#3934](https://github.com/github/copilot-cli/issues/3934)

## 重要 PR 进展

今日 PR 数量较少，仅 1 个。

**1. [OPEN] 添加 .gitignore 和设置配置 (#3928)**
- **内容**: 一个基础的仓库配置 PR，旨在为项目添加标准的 `.gitignore` 文件和全局设置文件。
- **状态**: 昨日创建，目前仍处于开放状态。
- **链接**: [#3928](https://github.com/github/copilot-cli/pull/3928)

## 功能需求归类

从今日的 Issues 中可以归纳出以下几个用户反复提及的功能方向：

- **模型管理**: 需要提供统一的模型列表查询命令（如 `copilot --list-models`），并支持在 `/model` 中显示配额使用情况（#700, #3932）。
- **插件与 MCP 机制优化**: 用户要求 MCP 和插件的管理交互更加便捷（启用/禁用），以及更灵活的自动化权限控制（静默执行）（#2643, #2956, #3564, #3829）。
- **会话系统改进**: 提升会话管理的可见性，包括显示消息时间戳和统一会话恢复机制（#3930, #3931）。
- **企业级管理**: 要求提供服务器端配置下发的能力，特别是针对本地 CLI 的环境变量和策略管理（#3909, #3934）。

## 开发者关注点

- **认证状态的割裂感**: 会话恢复后模型列表无法加载的问题，暴露了 CLI 内部认证状态可能与应用整体认证状态不一致，这是开发者当前体验中最突出的痛点。
- **跨环境一致性**: 开发者期望在 IDE 插件（VSCode、IntelliJ）与 CLI 之间的体验保持一致，例如 MCP 服务器的策略执行、主题渲染、AIC 配额显示等。
- **平台兼容性**: Windows（滚动条、WSL2）和 Linux（AppImage 库污染）的特定 Bug 持续被提出，表明开发者在广泛的平台配置上遇到问题。
- **工具迁移平滑度**: 从 Claude Code 等竞品迁移技能的稳定性，以及迁移后被更新覆盖的问题，是用户从其他工具转向 Copilot CLI 时的主要顾虑。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-26

## 今日更新概览
过去 24 小时内，Kimi Code CLI 项目无新版本发布、无新增 Pull Request。社区提交了 2 条新 Issue（均于 2026-06-25 创建并最后更新），分别涉及 MCP 工具支持数量限制和终端界面渲染异常问题。截至统计时，两条 Issue 均尚无官方回复或评论。

---

## 版本发布
无（最新版本仍为 v0.19.2）。

---

## 社区热点 Issues

### 1. [#2475] [bug] MCP tools — 工具数量过多导致问题
- **作者**：[@ptyll](https://github.com/ptyll)
- **创建/更新**：2026-06-25 | **评论**：0 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2475
- **摘要**：用户运行 Kimi Code v0.19.2，使用订阅平台、模型 k2.7，在 Windows 上配置了一个包含 **212 个工具**的 MCP server。工具带有描述，但未明确说明具体异常表现（推测为工具列表加载/选择问题）。
- **影响场景**：使用大量 MCP 工具进行代码辅助开发的场景；暴露了 CLI 对工具数量上限或处理逻辑的潜在限制。

### 2. [#2474] [bug] CLI 界面抖动/反复重新渲染
- **作者**：[@yudichimiantiao](https://github.com/yudichimiantiao)
- **创建/更新**：2026-06-25 | **评论**：0 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2474
- **摘要**：用户在使用 v0.19.2，模型 K2.7 Code thinking，Linux 环境下（内核 5.10.134-18.0.11.lifsea8.x86_64）出现整体界面不断震动、无理由从头重新渲染整个对话的情况。
- **影响场景**：长对话或实时推理场景下终端 UI 稳定性问题，可能导致用户无法正常查看/操作。

---

## 重要 PR 进展
无（过去 24 小时内无 PR 更新或创建）。

---

## 功能需求归类
基于今日 2 条 Issue，可观察到两个用户反复提及的方向：

| 需求方向 | 对应 Issue | 具体表现 |
|----------|------------|----------|
| **MCP 工具生态支持** | #2475 | 用户报告单个 server 包含 212 个工具的配置，暗示工具发现/加载能力需要优化或扩容 |
| **终端 UI 渲染性能与稳定性** | #2474 | 界面抖动、全量重绘，可能与增量更新逻辑、输入处理或渲染引擎有关 |

以上仅为单日观察样本，未形成多来源交叉验证的趋势。

---

## 开发者关注点
- **工具规模限制**：MCP 工具数量的扩展性（#2475）是连接 IDE/自动化工作流时的关键瓶颈。用户已遇到超过 200 个工具的场景，可能影响工具选择速度或导致超时错误。
- **界面稳定性**：#2474 描述的“全对话从头重新渲染”在长时间终端会话中可能频繁触发，严重干扰注意力。Linux 环境下的渲染机制需排查。

两条 Issue 均未有官方标签或回应，建议社区关注后续动态。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 今日更新概览

OpenCode 于今日发布 v1.17.11 小版本，重点引入**会话快照与回滚**功能，并修复了 MCP OAuth 链接打印问题。社区过去 24 小时保持活跃，累计产生 50 条 Issue 和 50 个 PR，其中 Windows 平台下的 Bun 段错误（#33742）和内存泄漏集中排查（#20695）成为讨论热点。此外，桌面应用升级后出现的配置错误（#33938）以及多模型/多账号支持的相关需求也有较多关注。

## 版本发布

**v1.17.11** 主要更新内容：

- **Core**
  - 新增会话快照与回滚控制，允许用户将会话回退到较早的消息（包含文件变更）。
  - 修复：始终打印 MCP OAuth URL，确保手动登录在浏览器流程打开时仍能正常使用。
- **Desktop**
  - 改进：添加“Chrome-sty...”样式更新（原文不完整，推测为界面样式调整）。

## 社区热点 Issues

1. **#20695 - Memory Megathread [OPEN]**
   *影响场景*：多用户报告内存问题，项目组集中收集堆快照以定位泄漏。
   *社区反应*：103 条评论，74 个 👍，核心维护者要求用户不要猜测 LLM 原因，只需提供快照数据。
   [链接](https://github.com/anomalyco/opencode/issues/20695)

2. **#33742 - v1.17.10 Windows Bun 段错误 [OPEN]**
   *影响场景*：升级后 OpenCode 在 Windows 上因 Bun 1.3.14 原生段错误崩溃，降级至 v1.17.9 可规避。
   *社区反应*：45 条评论，40 个 👍，用户质疑为 Bun 回归。
   [链接](https://github.com/anomalyco/opencode/issues/33742)

3. **#15585 - 免费模型“free usage exceed”错误 [CLOSED]**
   *影响场景*：使用内置免费模型时出现用量超限提示，用户怀疑存在隐藏限制。
   *社区反应*：52 条评论，13 个 👍，最终已关闭。
   [链接](https://github.com/anomalyco/opencode/issues/15585)

4. **#16610 - inotify 用户实例耗尽导致启动挂起 [OPEN]**
   *影响场景*：系统中 inotify 用户实例数过低时，OpenCode 在有 .git 仓库的目录下启动停滞。
   *社区反应*：14 条评论，7 个 👍，用户建议增加友好提示或自适应限制。
   [链接](https://github.com/anomalyco/opencode/issues/16610)

5. **#17935 - 浅色模式下代码示例不可见 [OPEN]**
   *影响场景*：终端使用浅色主题时，代码块显示为黑色不可见，选中文本全黑。
   *社区反应*：7 条评论，11 个 👍，影响视觉可访问性。
   [链接](https://github.com/anomalyco/opencode/issues/17935)

6. **#8145 - 多账户 Codex OAuth 登录及轮询负载均衡 [OPEN]**
   *影响场景*：用户希望支持多个 Codex 账号并实现轮询负载均衡以提高 API 利用率。
   *社区反应*：7 条评论，19 个 👍，需求强烈。
   [链接](https://github.com/anomalyco/opencode/issues/8145)

7. **#33399 - CPU 利用率随机飙至 99-100% [OPEN]**
   *影响场景*：OpenCode CLI 进程周期性地占满 CPU，导致风扇狂转且键盘无响应。
   *社区反应*：6 条评论，用户称该问题从 1.3.3 版本后出现。
   [链接](https://github.com/anomalyco/opencode/issues/33399)

8. **#33828 - Windows 安装后显示空白屏幕 [OPEN]**
   *影响场景*：在 Windows 上通过 `npm install -g opencode-ai` 安装后，运行只显示空白屏，Ctrl+C 后出现异常状态。
   *社区反应*：6 条评论，0 个 👍，疑似环境或终端兼容问题。
   [链接](https://github.com/anomalyco/opencode/issues/33828)

9. **#33775 - 切换提供商时被反复要求输入 API Key [OPEN]**
   *影响场景*：用户已连接过某提供商并存储了密钥，但通过 `/connect` 切换后仍弹出输入框。
   *社区反应*：4 条评论，用户认为应该直接复用已存密钥。
   [链接](https://github.com/anomalyco/opencode/issues/33775)

10. **#33938 - 桌面版升级后显示 ConfigInvalidError，侧栏无会话 [OPEN]**
    *影响场景*：升级到 v1.17.11 后，在 Windows 非 Git 目录中出现配置错误，侧栏项目列表不完整。
    *社区反应*：3 条评论，已初步定位为 Windows 路径处理和 Bun `process.argv` 相关错误。
    [链接](https://github.com/anomalyco/opencode/issues/33938)

## 重要 PR 进展

1. **[PR #33822] feat(ci): 使用 Bun canary 作为 beta 通道**
   *内容*：由于 Bun 1.3.14 在 Windows 上频繁段错误，改用 Rust 重写后的 canary 版本，以提高稳定性。
   [链接](https://github.com/anomalyco/opencode/pull/33822)

2. **[PR #33979] fix(app): 稳定标题栏标签对齐**
   *内容*：修复 v2 标题栏在首次标签导航后对齐错乱的问题，保持 4px 视觉偏移。
   [链接](https://github.com/anomalyco/opencode/pull/33979)

3. **[PR #33918] fix(skill): 将 v2 插件技能包含进旧版技能列表**
   *内容*：使 `/skills` 命令和实例技能 API 能正确列出 v2 插件注册的技能，关闭 #33896。
   [链接](https://github.com/anomalyco/opencode/pull/33918)

4. **[PR #33974] fix(app): 在会话设置中启用自动接受**
   *内容*：修复设置对话框未能正确解析当前活动会话的问题，使自动接受功能生效。
   [链接](https://github.com/anomalyco/opencode/pull/33974)

5. **[PR #33978] refactor(app): 使用下拉组件重构项目选择器**
   *内容*：基于 #32015 的备选实现，将项目选择器迁移至标准下拉组件，改善交互一致性。
   [链接](https://github.com/anomalyco/opencode/pull/33978)

6. **[PR #33971] docs: 明确本地和全局 AGENTS.md 都会加载**
   *内容*：更新规则文档，说明本地、全局和 Claude Code 三层规则均会被加载，澄清优先级。
   [链接](https://github.com/anomalyco/opencode/pull/33971)

7. **[PR #33969] fix(tui): 修复紧凑数字格式化中的四舍五入溢出**
   *内容*：`1000.0K` 显示问题，当值在 999,950~999,999 时错误显示为 K 而非 M。
   [链接](https://github.com/anomalyco/opencode/pull/33969)

8. **[PR #33967] fix(plan-mode): 禁止 bash 并限制子代理权限继承**
   *内容*：规划模式下之前仅禁用了编辑权限，bash 工具未被限制，现通过权限系统阻止 bash 执行。
   [链接](https://github.com/anomalyco/opencode/pull/33967)

9. **[PR #12721] feat(tui): 在响应底部显示每秒 token 数**
   *内容*：新增 tok/s 计数器，显示在消息持续时间之后，帮助用户直观比较不同模型的速度。
   [链接](https://github.com/anomalyco/opencode/pull/12721)

10. **[PR #33977] feat(core): 拆分 MCP 超时配置**
    *内容*：将原来单一的 MCP 超时拆分为 `timeout.startup` 和 `timeout.request`，允许独立调整，并支持部分服务器覆盖。
    [链接](https://github.com/anomalyco/opencode/pull/33977)

## 功能需求归类

从过去 24 小时的 Issue 中可归纳出以下用户反复提及的功能方向：

- **性能与稳定性**：内存泄漏（#20695）、CPU 高占用（#33399）、启动慢（#22227）、Bun 段错误（#33742）等是用户最关注的痛点。
- **多账号/多提供商支持**：多 Codex 账号轮询（#8145）、切换提供商时复用密钥（#33775）、OAuth 回调主机可配置（#33966）。
- **UI/UX 改进**：浅色模式修复（#17935）、会话重命名（#33932）、TUI 会话切换事件（#31051）、键盘快捷键转发（#27006）。
- **模型集成**：LM Studio 自动检测模型（#23327）、GLM-5.1 提示缓存异常（#31348）、MCP 超时配置细化（#33977）。
- **配置与秘密管理**：密钥存储迁移到系统凭据存储（#4318）、提供商黑/白名单文档（PR #33972）。
- **窗口兼容性**：Windows 空白屏幕（#33828）、桌面版配置错误（#33938）、Linux 剪贴板选择（PR #32370）。

## 开发者关注点

- **Windows 平台稳定性是当前最大的痛点**：Bun 段错误（#33742）和桌面版升级后配置错误（#33938）占据了大量社区讨论，开发者已尝试通过使用 Bun canary 版本来缓解（PR #33822）。
- **内存与性能问题持续存在**：尽管有专门的 Memory Megathread 收集快照，但 CPU 随机飙升和启动缓慢仍影响日常使用。
- **配置与密钥管理体验不佳**：切换提供商后反复要求输入 API Key（#33775）以及凭据明文存储（#4318）的呼声较高，反映出用户对安全性和便利性的双重需求。
- **模型提供商特定差异**：不同模型对可选参数的处理（如 GPT 将空字符串传给 MCP）和提示缓存行为不同，导致跨提供商的体验不一致。
- **UI 细节修复持续推进**：从标题栏对齐、数字格式化溢出到技能列表兼容性，社区提交了大量小补丁，表明项目在精细化改进上保持活跃。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026 年 6 月 26 日 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 - 2026-06-26

## 今日更新概览

Qwen Code 发布了 v0.19.2-nightly.20260625 版本，主要修复了 `web_fetch` 工具在 JSON 解析失败时的回退问题。社区反馈活跃，多个关于流式超时、工具资源泄漏和会话管理的问题受到关注，同时有数个增强自动补全、语音输入和会话状态查询的功能性 PR 正在推进。

## 版本发布

- **v0.19.2-nightly.20260625**：修复了核心模块中 `web_fetch` 工具在 JSON 解析失败时的回退逻辑，提升了数据抓取的稳健性。
  - [发布详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735)
  - [修复 PR](https://github.com/QwenLM/qwen-code/pull/5660)

## 社区热点 Issues

1. **流式设置超时与 Powershell 资源泄漏**（#401, #5873）
   - **影响范围**：核心API与Windows平台。
   - **问题摘要**：用户反馈在 CLI 中调用 API 时遭遇 6 秒的流式超时错误（#401），建议减少输入或增加超时配置。更严重的是，有开发者报告在 Windows 上使用工具（如 Shell）时，每次调用都会创建一个新的 Powershell 进程且不关闭，最终导致内存溢出（OOM）（#5873），官方已标记为 P1 优先级确认中。
   - [查看 Issue #401](https://github.com/QwenLM/qwen-code/issues/401)
   - [查看 Issue #5873](https://github.com/QwenLM/qwen-code/issues/5873)

2. **自动生成技能与记忆持久化**（#5263）
   - **影响范围**：核心功能、记忆系统。
   - **问题摘要**：用户提出，对于一次性操作（如项目重构），自动生成的技能（Skill）价值不大。建议在落盘持久化前增加确认提示，让用户决定是否保留，以减少无用技能的积累。
   - [查看 Issue #5263](https://github.com/QwenLM/qwen-code/issues/5263)

3. **Agent 超时与 Shell 工具重复提交**（#5838, #5641）
   - **影响范围**：工具、Shell 功能。
   - **问题摘要**：多个用户关注 Agent 超时设置。#5838 请求提供用户可配置的 Agent 发起命令超时。#5641 则报告了一个确定可复现的 Bug：当使用 OpenAI 兼容的提供者时，Qwen Code 会重复提交已经完成的 Shell 工具结果。
   - [查看 Issue #5838](https://github.com/QwenLM/qwen-code/issues/5838)
   - [查看 Issue #5641](https://github.com/QwenLM/qwen-code/issues/5641)

4. **VSCode 连接错误**（#5840）
   - **影响范围**：UI、VSCode 集成。
   - **问题摘要**：用户反馈在最新版 VSCode 中使用 Qwen Code Copmanion 扩展时，出现 “Internal error: Connection error.” 的内部连接错误。
   - [查看 Issue #5840](https://github.com/QwenLM/qwen-code/issues/5840)

5. **上下文压缩与 Token 速度显示问题**（#5861, #5722）
   - **影响范围**：性能、Token 管理。
   - **问题摘要**：#5861 指出上下文压缩请求使用非流式模式，可能导致长上下文汇总超时，建议强制使用流式。#5722 汇总了多个 Token 速度（tok/s）显示异常，包括思考阶段不显示、工具调用期间卡死、数值不准确等问题。
   - [查看 Issue #5861](https://github.com/QwenLM/qwen-code/issues/5861)
   - [查看 Issue #5722](https://github.com/QwenLM/qwen-code/issues/5722)

6. **会话恢复与状态查询功能请求**（#5759, #5855, #5863）
   - **影响范围**：UI、会话管理与守护进程。
   - **问题摘要**：社区对会话管理体验提出多项改进。#5759 提议在恢复折叠的会话时，预览最近 N 条消息而非全部折叠。#5855 和 #5863 请求扩展守护进程 HTTP 接口，以支持查询单个会话的实时状态，包括当前阶段、活跃工具、待处理权限等。
   - [查看 Issue #5759](https://github.com/QwenLM/qwen-code/issues/5759)
   - [查看 Issue #5855](https://github.com/QwenLM/qwen-code/issues/5855)
   - [查看 Issue #5863](https://github.com/QwenLM/qwen-code/issues/5863)

7. **WebFetch 安全与自动记忆团队层级**（#5782, #5867）
   - **影响范围**：安全性、核心功能。
   - **问题摘要**：#5782 提出 WebFetch 工具应拒绝包含用户信息（如密码）的 URL 以防止信息泄露。#5867 则为自动记忆功能提出新层级，建议增加一个基于 Git 共享的“团队”层级，使得存储在项目中的记忆能被团队成员共享。
   - [查看 Issue #5782](https://github.com/QwenLM/qwen-code/issues/5782)
   - [查看 Issue #5867](https://github.com/QwenLM/qwen-code/issues/5867)

## 重要 PR 进展

1. **扩展创建与自动补全增强**（#5828, #5849）
   - **内容**：#5828 新增了一个内置的 `extension-creator` 技能，可引导 Agent 自动化地创建和测试 Qwen Code 扩展。#5849 则增强了 CLI 的输入自动补全，新增对 `@extension` 的支持，可在输入 `@` 时显示已安装扩展。
   - [查看 PR #5828](https://github.com/QwenLM/qwen-code/pull/5828)
   - [查看 PR #5849](https://github.com/QwenLM/qwen-code/pull/5849)

2. **提供者模型保留与自动压缩配置**（#5835, #5868）
   - **内容**：#5835 修复了重新应用提供者安装计划时（如重连、刷新令牌）模型选择被重置的问题。#5868 引入了可配置的自动上下文压缩阈值，并允许在压缩前通过 Hook 确认，为用户提供更多控制权。
   - [查看 PR #5835](https://github.com/QwenLM/qwen-code/pull/5835)
   - [查看 PR #5868](https://github.com/QwenLM/qwen-code/pull/5868)

3. **守护进程优化与 CI 改进**（#5874, #5860）
   - **内容**：#5874 优化了 `qwen serve` 命令的启动性能，通过直接内联加载替代 `spawnSync`，减少了一次完整的 Node.js 进程启动开销。#5860 调整了自动修复 CI 工作流的问题筛选器，使其能更准确地找到并自动修复积压的 Bug。
   - [查看 PR #5874](https://github.com/QwenLM/qwen-code/pull/5874)
   - [查看 PR #5860](https://github.com/QwenLM/qwen-code/pull/5860)

4. **桌面端语音输入与会话恢复预览**（#5856, #5848）
   - **内容**：#5856 为桌面应用带来了 `/voice` 语音输入功能，与 CLI 和 Web Shell 保持一致。#5848 实现了 Issue #5759 中提议的功能，新增 `ui.history.collapsePreviewCount` 设置，允许在恢复折叠的会话时预览最近的 N 轮对话。
   - [查看 PR #5856](https://github.com/QwenLM/qwen-code/pull/5856)
   - [查看 PR #5848](https://github.com/QwenLM/qwen-code/pull/5848)

5. **工具 Hook 与路由重构**（#5629, #5809）
   - **内容**：#5629 使 `PreToolUse` Hook 的 “ask” 返回值可在 TUI 中触发原生确认弹窗，而非直接拒绝。#5809 对 `qwen serve` 守护进程的路由进行了模块化重构，将处理逻辑拆分到独立模块，保持主程序简洁。
   - [查看 PR #5629](https://github.com/QwenLM/qwen-code/pull/5629)
   - [查看 PR #5809](https://github.com/QwenLM/qwen-code/pull/5809)

6. **安全增强与会话流恢复**（#5829, #5852）
   - **内容**：#5829 增强了桌面端安全性，确保删除源（Source）时拒绝路径形式的恶意输入（如 `../sessions`）。#5852 修复了 ACP 会话事件流的恢复能力，使重连后可以基于 `Last-Event-ID` 从断点处继续接收事件。
   - [查看 PR #5829](https://github.com/QwenLM/qwen-code/pull/5829)
   - [查看 PR #5852](https://github.com/QwenLM/qwen-code/pull/5852)

## 功能需求归类

- **系统稳定性与超时配置**：多个 Issue 集中反映了 Agent 超时、工具调用超时、流式设置超时等问题（如 #401, #5838, #5861）。用户强烈要求增加可配置的超时选项。
- **性能与资源泄漏**：Windows 平台下的 Powershell 进程泄漏是当前最为严重的性能问题（#5873），此外 Token 速度显示不准确也影响了使用体验（#5722）。
- **会话管理与 UI**：社区对会话的“折叠/恢复”体验（#5759）和守护进程的状态查询接口（#5855, #5863）有明确需求，希望提升日常使用的可控性和透明度。
- **自动记忆与技能管理**：用户希望获得对自动生成内容（如记忆和技能）的更多控制权，包括落盘前的确认（#5263）和团队级共享的提议（#5867）。
- **工具安全与功能增强**：对 WebFetch 工具的安全性提出了更高要求（#5782），同时请求增强技能命令的自动补全匹配逻辑（#5875）。
- **语音功能的持续推广**：项目正努力将语音输入功能从 CLI 扩展到桌面应用（#5856），显示了该功能的优先级。

## 开发者关注点

- **核心痛点**：**性能与稳定性**是开发者的首要关注点。特别是 Windows 平台的内存泄漏问题（#5873）和代理重复提交工具结果（#5641）这两个确定可复现的 Bug，对日常开发工作流造成了直接影响。
- **高频需求**：**可配置的超时机制**是呼声最高的功能需求。无论是流式 API 调用还是 Agent 执行命令，开发者都需要更灵活的超时控制来适配不同复杂度的任务和网络环境。
- **体验优化**：开发者对**会话管理的精细度**要求提升，希望有更智能的折叠（预览最近 N 条）和更强大的状态查询能力，以便在复杂会话中更好地导航和调试。
- **安全与协作**：**WebFetch 工具的安全配置**和 **Auto-Memory 的团队级共享**体现了开发者对安全性和协作效率的日益增长的需求。

</details>