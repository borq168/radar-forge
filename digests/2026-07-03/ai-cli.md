# AI CLI 工具社区动态日报 2026-07-03

> 生成时间: 2026-07-03 00:28 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具生态横向对比日报 (2026-07-03)

## 1. 今日横向概览
今日 Claude Code 与 OpenAI Codex 均发布了底层核心或功能迭代版本，重点修复了 TUI 交互超时与沙箱安全逃逸问题；Gemini CLI 与 Qwen Code 推进了 Nightly 版本，聚焦于 Agent 挂起修复与多渠道/子 Agent 嵌套集成；GitHub Copilot CLI 发布了小版本更新以完善 MCP 与沙盒体验，而 OpenCode 与 Kimi Code CLI 则主要围绕桌面端 Electron 稳定性、V2 架构重构及第三方模型兼容性进行 PR 评审与 Issue 讨论。整体来看，跨平台终端渲染兼容性、Agent 执行状态控制（防挂起/防超时）以及 API 计费透明度是今日各社区共同聚焦的核心议题。

## 2. 各工具活跃度对比

| 工具名称 | Release 情况 | Issues 更新/热点数 | PR 更新/核心数 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.199 | 50条更新 / 10个热点 | 少量 (2个核心) |
| **OpenAI Codex** | rust-v0.143.0-alpha.34/33 | 10个热点 | 10个核心 (安全加固) |
| **Gemini CLI** | v0.51.0-nightly | 10个热点 | 10个核心 |
| **GitHub Copilot CLI**| v1.0.69-0 | 31条更新 / 10个热点 | 2个 (非核心) |
| **OpenCode** | 无 | 10个热点 | 10个核心 (V2架构/桌面端) |
| **Qwen Code** | v0.19.5 & v0.19.4-nightly | 10个热点 | 10个核心 |
| **Kimi Code CLI** | 无 | 2条 | 1个 |

## 3. 共同出现的功能方向

- **CLI 交互超时与自动提交控制**
  - **涉及工具**：Claude Code, OpenAI Codex
  - **具体诉求**：开发者强烈要求禁用或延长 CLI 在等待用户输入时的自动超时机制。Claude Code 社区爆发了关于 `AskUserQuestion` 60秒无响应或打字时自动推进导致输入丢弃的抗议（[#73125](https://github.com/anthropics/claude-code/issues/73125), [#73650](https://github.com/anthropics/claude-code/issues/73650)）；OpenAI Codex 用户也提出增加配置项以禁用 60 秒自动解决超时（[#28969](https://github.com/openai/codex/issues/28969)），以保留人工干预时间。
- **API 计费透明度与隐性消耗**
  - **涉及工具**：Claude Code, OpenAI Codex, OpenCode
  - **具体诉求**：解决配额异常消耗、上下文静默降级及后台隐性调用问题。包括 Claude Code 的 1M 上下文静默截断至 200K（[#73646](https://github.com/anthropics/claude-code/issues/73646)）与周限额飙升（[#69430](https://github.com/anthropics/claude-code/issues/69430)）、OpenAI Codex 的 Plus 订阅无活动掉额度（[#30918](https://github.com/openai/codex/issues/30918)），以及 OpenCode 配置特定模型后隐性调用 Haiku 并计费（[#10272](https://github.com/anomalyco/opencode/issues/10272)）。
- **跨平台终端渲染与事件处理兼容**
  - **涉及工具**：GitHub Copilot CLI, Kimi Code CLI, Qwen Code, Gemini CLI
  - **具体诉求**：解决特定操作系统终端下的渲染错位、剪贴板富文本/媒体粘贴及字符编码问题。如 Copilot CLI 的 Windows 滚动条文本未对齐（[#3501](https://github.com/github/copilot-cli/issues/3501)）与 macOS 图像粘贴失败（[#4013](https://github.com/github/copilot-cli/issues/4013)）、Kimi CLI 的 Windows BracketedPaste 媒体读取修复（[PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)）、Qwen Code 的 Windows 非 UTF-8 乱码（[#6214](https://github.com/QwenLM/qwen-code/issues/6214)）及 Gemini CLI 的 Emoji 截断乱码（[PR #28224](https://github.com/google-gemini/gemini-cli/pull/28224)）。
- **Agent 执行挂起与状态卡死**
  - **涉及工具**：Gemini CLI, OpenCode, Qwen Code
  - **具体诉求**：修复 Agent 在等待输入、执行 Shell 或调用外部工具时陷入无限期挂起。包括 Gemini CLI 的 Generalist Agent 无限挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）与 Shell 执行后卡死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、OpenCode 的 Windows 下 build 后永久挂起（[#35035](https://github.com/anomalyco/opencode/issues/35035)），以及 Qwen Code 的 YOLO 模式下 MCP 调用卡死（[#6131](https://github.com/QwenLM/qwen-code/issues/6131)）。

## 4. 差异化定位分析

- **Claude Code**：侧重于**复杂多会话协作与 TUI 深度交互**。今日热点集中在多 Agent 跨会话通信、层级仪表盘以及 TUI 输入超时控制，反映出其用户群正将其用于大型项目的并行开发，对终端交互的精细度要求极高。
- **OpenAI Codex**：侧重于**底层沙箱安全与系统资源控制**。今日大量 PR 集中于 Git/Shell 执行的安全加固（防沙箱逃逸），且 Issues 高度关注 SSD 磨损、GPU 占用等硬件级资源消耗，显示其作为重度本地执行工具的定位。
- **Gemini CLI**：侧重于**Agent 自主行为边界与内存管理**。社区焦点在于 Auto Memory 的隐私脱敏、Subagent 状态报告准确性以及限制递归推理轮数（15轮），体现出对长时运行 Agent 的可控性与安全护栏的探索。
- **GitHub Copilot CLI**：侧重于**MCP 生态集成与企业级定制 (BYOK)**。Issues 大量围绕 MCP 协议落地细节（分页、渲染）及自定义模型端点配置，表明其正积极拓展外部工具链并满足企业私有化部署需求。
- **OpenCode**：侧重于**桌面端 (Electron) 体验与多模型路由架构**。今日 PR 和 Issues 密集涉及 Electron 标签页管理、大型 Diff 渲染崩溃以及 xAI/DeepSeek 等特定厂商的 API 路由对齐，凸显其“桌面客户端+多模型聚合”的产品形态。
- **Qwen Code**：侧重于**多渠道分发与后台自动化调度**。今日核心 PR 包括企微/QQ Bot 通道集成、Sub-agent 嵌套及 Daemon 守护进程优化，显示其致力于将 CLI 能力向即时通讯工具和后台定时任务延伸。
- **Kimi Code CLI**：侧重于**第三方模型兼容与轻量级网络适配**。今日动态较少，主要围绕接入非官方模型时的死循环修复及 Tailscale 等复杂网络环境的连接支持。

## 5. 社区活跃度记录

- **高活跃度（Issues/PR 密集且有实质版本发布）**：
  - **Claude Code**：更新 50 条 Issues，发布 v2.1.199，社区对 TUI 超时 Bug 讨论极为热烈（单 Issue 超 200 赞）。
  - **OpenAI Codex**：发布 2 个 Rust 核心 alpha 版本，官方维护者集中合并了 10 个底层安全加固 PR，Issues 涉及大量性能与计费反馈。
  - **Qwen Code**：发布 v0.19.5 正式版及 nightly，合并 10 个核心 PR（含子 Agent 嵌套、多渠道集成），Issues 反馈覆盖前后端及跨平台细节。
- **中等活跃度（有版本发布或核心 PR 推进）**：
  - **Gemini CLI**：发布 nightly 版本，合并 10 个核心 PR（涉及安全、UI、推理限制），Issues 聚焦 Agent 挂起与状态异常。
  - **OpenCode**：无新版本，但推进了 10 个 V2 架构与桌面端核心 PR，Issues 讨论集中在 Electron 崩溃与计费路由。
  - **GitHub Copilot CLI**：发布 v1.0.69-0，更新 31 条 Issues，但 PR 仅有 2 个非核心提交，处于功能反馈收集期。
- **低活跃度**：
  - **Kimi Code CLI**：仅 2 条 Issues 和 1 个 PR 更新，无版本发布，社区互动较少。

## 6. 有证据支撑的观察

1. **CLI 工具的“60秒超时自动提交”机制正成为普遍的交互痛点。**
   - **证据**：Claude Code 社区爆发了关于 `AskUserQuestion` 60秒无响应或打字时自动推进导致输入丢弃的强烈抗议（[#73125](https://github.com/anthropics/claude-code/issues/73125), 206赞；[#73650](https://github.com/anthropics/claude-code/issues/73650)）；同时，OpenAI Codex 社区也有开发者明确提出需求，要求增加配置项以禁用 CLI 60秒自动解决超时（[#28969](https://github.com/openai/codex/issues/28969)）。这表明在复杂代码生成场景下，开发者需要更长的思考与干预时间，强制超时机制严重破坏了交互心流。
2. **API 计费逻辑的“黑盒化”与隐性消耗引发了跨社区的高度关注。**
   - **证据**：今日三个主流工具均出现了严重的计费/配额相关 Issue。Claude Code 用户反馈 1M 上下文被静默截断至 200K 且周限额异常飙升（[#73646](https://github.com/anthropics/claude-code/issues/73646), [#69430](https://github.com/anthropics/claude-code/issues/69430)）；OpenAI Codex 用户反馈 Plus 订阅在无活动情况下额度骤降（[#30918](https://github.com/openai/codex/issues/30918)）；OpenCode 用户发现配置特定模型后后台隐性调用 Haiku 并计费（[#10272](https://github.com/anomalyco/opencode/issues/10272)）。开发者对 Token 消耗和模型路由的透明度要求正在急剧上升。
3. **Agent 自主执行环境下的“沙箱逃逸”与“破坏性操作”促使安全护栏全面收紧。**
   - **证据**：OpenAI Codex 官方今日集中合并了多个针对 Git 操作和 Shell 执行的安全加固 PR（如阻止 Git filters、限制补丁路径、强化伪造 shell 审批）；Gemini CLI 修复了内存导入处理中的符号链接目录逃逸问题（[PR #28233](https://github.com/google-gemini/gemini-cli/pull/28233)），且社区呼吁增加安全护栏以阻止 Agent 使用 `git reset --force` 等危险命令（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）；GitHub Copilot CLI 也在修复 Linux 本地沙盒失效问题（[#3653](https://github.com/github/copilot-cli/issues/3653)）。这表明随着 Agent 获得更深的本地系统权限，防范恶意仓库配置和模型幻觉导致的破坏性执行已成为底层架构的优先级。
4. **跨平台终端的渲染与事件处理差异仍是 CLI 工具的兼容性挑战。**
   - **证据**：今日多个工具在 Windows 或跨平台终端下遇到特定的交互 Bug。GitHub Copilot CLI 遇到 Windows 滚动条导致文本未对齐（[#3501](https://github.com/github/copilot-cli/issues/3501)）及 macOS 图像粘贴失败（[#4013](https://github.com/github/copilot-cli/issues/4013)）；Kimi Code CLI 正在修复 Windows 终端 BracketedPaste 事件导致媒体粘贴失效的问题（[PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)）；Qwen Code 反馈了 Windows 非 UTF-8 控制台乱码（[#6214](https://github.com/QwenLM/qwen-code/issues/6214)）。这反映出 CLI 工具在向 Windows 及各类终端模拟器（如 Windows Terminal, VS Code 集成终端）扩展时，底层事件监听与字符编码仍需大量适配工作。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 (2026-07-03)

## 1. 今日更新概览
过去 24 小时内，Claude Code 发布了 v2.1.199 版本，主要优化了多技能堆叠调用与 SSL 证书错误处理。社区 Issues 活跃度较高（更新 50 条），讨论焦点集中在 TUI 交互的自动提交 Bug、多 Agent/多会话协作的状态管理，以及 Windows 平台的兼容性问题；PR 方面主要涉及防火墙配置调整与文档修正。

## 2. 版本发布
- **v2.1.199**
  - **多技能堆叠调用**：支持如 `/skill-a /skill-b do XYZ` 的堆叠斜杠技能调用，现在会加载所有前导技能（最多 5 个），而不仅仅是第一个。
  - **SSL 证书错误修复**：修复了 TLS 检查代理、缺少 `NODE_EXTRA_CA_CERTS` 或证书过期导致的 SSL 错误，避免了在显示可操作指导前无意义地消耗重试次数。

## 3. 社区热点 Issues
1. **[BUG] AskUserQuestion 60秒无响应后自动继续** ([#73125](https://github.com/anthropics/claude-code/issues/73125))
   - **场景与影响**：TUI 交互核心痛点。用户在思考或短暂离开时，系统超时自动提交默认答案，导致输入被丢弃。社区反响强烈（56 评论，206 赞）。
2. **[Enhancement] 多 Claude 工作流的跨会话通信** ([#24798](https://github.com/anthropics/claude-code/issues/24798))
   - **场景与影响**：用户希望在处理大型项目时，能让并行运行的多个 Claude 会话（针对不同模块）建立直接的工作流依赖与通信。
3. **[BUG] Windows 桌面端自动更新后消息内容丢失** ([#53717](https://github.com/anthropics/claude-code/issues/53717))
   - **场景与影响**：Windows 桌面端侧边栏显示会话，但 JSONL 文件未持久化内容，导致严重的历史数据丢失问题。
4. **[Enhancement] Agent 层级仪表盘** ([#24537](https://github.com/anthropics/claude-code/issues/24537))
   - **场景与影响**：请求在 TUI 和桌面端提供统一的多 Agent 工作流实时可视化面板，以便更好地监控复杂任务。
5. **[BUG] API 错误：响应中途连接关闭** ([#69415](https://github.com/anthropics/claude-code/issues/69415))
   - **场景与影响**：在 VSCode/WSL 环境下频繁发生连接中断，导致 Claude Code 几乎无法用于长文本或复杂任务（43 赞）。
6. **[BUG] Max20x 计划周限额在不到一小时内从 50% 飙升至 100%** ([#69430](https://github.com/anthropics/claude-code/issues/69430))
   - **场景与影响**：涉及计费和上下文消耗异常，用户对配额消耗速度过快表示担忧。
7. **[BUG] Fable 5 / native-1M 会话在 Max 计划下静默截断至 200K 上下文** ([#73646](https://github.com/anthropics/claude-code/issues/73646))
   - **场景与影响**：用户发现 1M 上下文模型实际只使用了 200K 且无任何 UI 提示或错误日志，影响长上下文开发场景。
8. **[BUG] macOS Apple Silicon 后台守护进程每 52 秒重启一次** ([#72233](https://github.com/anthropics/claude-code/issues/72233))
   - **场景与影响**：导致 Agent 频繁断开连接并显示“Reconnecting…”，后台任务随机失败。
9. **[BUG] 同一仓库的多个 Claude Code 会话会静默切换彼此的分支** ([#60295](https://github.com/anthropics/claude-code/issues/60295))
   - **场景与影响**：多会话并行开发时，一个会话的 `git checkout` 操作会污染另一个会话的工作树状态。
10. **[BUG] AskUserQuestion 在用户活跃输入时自动推进** ([#73650](https://github.com/anthropics/claude-code/issues/73650))
    - **场景与影响**：与 #73125 相关的 TUI 问题，倒计时自动提交机制在用户正在打字时触发，直接丢弃当前输入。

## 4. 重要 PR 进展
1. **fix: 从 `init-firewall.sh` 中移除 `statsig.anthropic.com`** ([#72451](https://github.com/anthropics/claude-code/pull/72451))
   - **内容**：因该域名不再解析，导致 devcontainer 启动时防火墙初始化脚本报错退出，此 PR 移除了该无效域名。
2. **docs: 修复 README 中 GitHub 的大小写拼写错误** ([#73476](https://github.com/anthropics/claude-code/pull/73476), [#72866](https://github.com/anthropics/claude-code/pull/72866))
   - **内容**：两位社区贡献者分别提交了将 README 中的 "Github" 修正为 "GitHub" 的文档优化 PR。
*(注：今日另有 1 条无实质描述的测试性 PR [#72543](https://github.com/anthropics/claude-code/pull/72543)，已省略。)*

## 5. 功能需求归类
- **多 Agent 与跨会话协作**：随着复杂项目的使用加深，用户强烈需求多 Agent 工作流的可视化与通信能力。包括跨会话通信（[#24798](https://github.com/anthropics/claude-code/issues/24798)）、Agent 层级仪表盘（[#24537](https://github.com/anthropics/claude-code/issues/24537)）以及解决多会话并行时的 Git 分支状态冲突（[#60295](https://github.com/anthropics/claude-code/issues/60295)）。
- **TUI 交互与快捷键优化**：要求改进终端交互体验，如添加运行时快捷键以切换权限模式（[#11825](https://github.com/anthropics/claude-code/issues/11825)）、修复全屏模式下的鼠标点击误触（[#71468](https://github.com/anthropics/claude-code/issues/71468)）。
- **上下文与计费透明度**：关注大上下文窗口的实际可用性及计费逻辑的透明度，如 1M 上下文静默降级问题（[#73646](https://github.com/anthropics/claude-code/issues/73646)）和周限额异常消耗（[#69430](https://github.com/anthropics/claude-code/issues/69430)）。

## 6. 开发者关注点
- **TUI 自动提交与输入丢失**：`AskUserQuestion` 的超时自动推进机制（60秒或倒计时）是当前社区反馈最集中的痛点。在用户仍在思考或打字时触发自动提交，严重破坏了交互体验（[#73125](https://github.com/anthropics/claude-code/issues/73125), [#73650](https://github.com/anthropics/claude-code/issues/73650)）。
- **多会话/后台 Agent 状态管理**：开发者在并行使用多个 Claude 会话或后台 Agent 时遇到较多状态同步问题。包括后台 Agent 状态卡死（[#73267](https://github.com/anthropics/claude-code/issues/73267), [#73400](https://github.com/anthropics/claude-code/issues/73400)）、守护进程频繁重启（[#72233](https://github.com/anthropics/claude-code/issues/72233)）以及并发写入导致消息丢失（[#53896](https://github.com/anthropics/claude-code/issues/53896)）。
- **平台兼容性与网络稳定性**：Windows 平台仍存在较多边缘 Bug，如桌面端数据未持久化（[#53717](https://github.com/anthropics/claude-code/issues/53717)）、Bash 命令无输出（[#72881](https://github.com/anthropics/claude-code/issues/72881)）；同时，VSCode/WSL 环境下的 API 连接中断（[#69415](https://github.com/anthropics/claude-code/issues/69415)）也影响了部分用户的开发连续性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-03)

## 1. 今日更新概览
今日 OpenAI Codex 仓库保持了较高的活跃度，发布了两个 Rust 核心的 alpha 版本。社区 Issues 方面，Windows 桌面端的稳定性、资源异常占用以及 Plus 订阅用量计费问题引发了大量用户反馈；Pull Requests 方面，官方维护者集中提交了数十个针对 Git 操作和 Shell 执行的安全加固补丁，以防范恶意仓库配置导致的沙箱逃逸风险。

## 2. 版本发布
- **rust-v0.143.0-alpha.34** 与 **rust-v0.143.0-alpha.33**：发布了两个 Rust 核心的 alpha 迭代版本，具体更新日志未详细披露，主要包含底层核心组件的常规迭代。

## 3. 社区热点 Issues
1. **Linux 桌面端应用需求**：由于 Mac 端存在功耗和可用性问题，用户强烈呼吁推出 Linux 原生桌面端应用，该 Issue 获得了 680 个点赞和 139 条评论。([#11023](https://github.com/openai/codex/issues/11023))
2. **SQLite 日志导致 SSD 严重磨损**：用户反馈 Codex 的反馈日志每年可写入约 640 TB，快速消耗 SSD 寿命。目前官方已合并多个 PR 减少了 85% 的日志写入。([#28224](https://github.com/openai/codex/issues/28224))
3. **WebSocket 连接被服务器策略关闭**：部分用户遇到 WebSocket 升级成功后立即被服务器以 1008 策略关闭，导致陷入重连循环并降级为 HTTPS 传输的问题。([#13041](https://github.com/openai/codex/issues/13041))
4. **多轮对话上下文错乱**：在使用 `gpt-5.2-xhigh` 等模型时，助手有时会回复对话中较早的消息，而不是最新的一条消息。([#8648](https://github.com/openai/codex/issues/8648))
5. **桌面端“思考”动画导致 GPU 占用过高**：用户反馈 Codex 桌面端在模型思考时，微小的 UI 动画会导致 GPU 使用率飙升并增加功耗。([#16857](https://github.com/openai/codex/issues/16857))
6. **CLI 请求禁用 60 秒自动解决超时**：开发者希望增加配置项，以禁用 CLI 在 60 秒后自动解决提问的行为，从而保留更多人工干预时间。([#28969](https://github.com/openai/codex/issues/28969))
7. **Windows 桌面端 Computer Use 工具未暴露**：在 Windows 桌面端启用 Chrome/Computer Use 插件后，`mcp__node_repl__js` 工具未能正确暴露给模型，阻断了相关功能。([#30486](https://github.com/openai/codex/issues/30486))
8. **GPT-5.5 模型性能与可靠性下降**：多位用户反馈 GPT-5.5 在近期的表现显著变差，多轮对话无法修复 Bug，甚至会破坏原有正常代码。([#24431](https://github.com/openai/codex/issues/24431))
9. **Plus 订阅用量限额异常快速消耗**：用户反馈在 7 月 2 日，ChatGPT Plus 的 5 小时用量限额在普通交互甚至无活动的情况下，几分钟内从 70% 骤降至 0%，疑似计费统计异常。([#30918](https://github.com/openai/codex/issues/30918), [#30943](https://github.com/openai/codex/issues/30943))
10. **桌面端多语言设置无效**：用户在配置文件和 GUI 中设置简体中文后，界面依然强制显示英文，多语言本地化功能未生效。([#30961](https://github.com/openai/codex/issues/30961))

## 4. 重要 PR 进展
1. **添加可配置的多智能体模式提示文本**：为 Multi-agent V2 增加配置项，允许部署时提供自定义的委托策略，替代基于推理努力程度的内置策略。([#30493](https://github.com/openai/codex/pull/30493))
2. **核心支持交错响应项 (Interleaved response items)**：在流式传输中通过 ID 跟踪响应项，确保推理摘要和最终答案事件交错时，TUI 输出保持完整且去重。([#30876](https://github.com/openai/codex/pull/30876))
3. **接入推理摘要交付配置**：新增 `reasoning_summary_delivery` 配置选项（支持 sequential/concurrent 等），并通过 HTTP 和 WebSocket 传递给 Responses API。([#30752](https://github.com/openai/codex/pull/30752))
4. **集中管理 Git helper 启动的仓库权限**：创建操作级权限上下文，避免在 Windows 上因多步操作重复构建信任而导致超时。([#30896](https://github.com/openai/codex/pull/30896))
5. **通过 Git 派生有效的补丁路径**：改进补丁安全检查，直接读取 Git 实际更改的路径，防止因重命名或无头补丁导致的路径解析错误。([#30837](https://github.com/openai/codex/pull/30837))
6. **在暂存补丁路径前阻止选定的 Git filters**：确保在 `git add` 之前阻断仓库配置的 clean/smudge 过滤器，防止其递归进入未检查的文件。([#30850](https://github.com/openai/codex/pull/30850))
7. **将暂存的补丁路径限制在父 worktree 内**：解析补丁路径的父目录，防止通过符号链接、junction 或子模块逃逸出父 worktree。([#30844](https://github.com/openai/codex/pull/30844))
8. **Windows 仅信任系统 PowerShell 解析器**：防止恶意仓库提供伪造的 `powershell.exe` 或 `pwsh.exe` 绕过命令安全解析。([#30628](https://github.com/openai/codex/pull/30628))
9. **强化伪造 shell 审批边界**：将执行命令的 shell 本身纳入安全边界，防止模型选择的 shell 包装器绕过内部命令的审批缓存。([#30631](https://github.com/openai/codex/pull/30631))
10. **要求对通用 Git 命令进行审批**：将 `git status` 或 `git diff` 等看似安全的命令纳入审批流程，防止其触发仓库配置的恶意 helper 程序。([#28714](https://github.com/openai/codex/pull/28714))

## 5. 功能需求归类
- **跨平台与桌面端体验优化**：用户持续呼吁完善 Linux 桌面端支持 ([#11023](https://github.com/openai/codex/issues/11023))，修复 Windows 端的卡顿与温度飙升问题 ([#20214](https://github.com/openai/codex/issues/20214), [#30055](https://github.com/openai/codex/issues/30055))，并期望 UI 多语言设置能正常生效 ([#30961](https://github.com/openai/codex/issues/30961))。
- **CLI 交互控制**：开发者希望获得更细粒度的 CLI 控制权，如禁用 60 秒自动解决超时 ([#28969](https://github.com/openai/codex/issues/28969))，以及修复 Windows 终端下多行粘贴立即执行的交互缺陷 ([#13729](https://github.com/openai/codex/issues/13729))。
- **Agent 工具与 MCP 集成**：社区期望 CLI 能原生支持 Computer Use 功能 ([#20851](https://github.com/openai/codex/issues/20851))，并修复桌面端在 WSL 环境下 MCP 工具（如 `node_repl`）和浏览器插件无法正确暴露的问题 ([#30486](https://github.com/openai/codex/issues/30486), [#29413](https://github.com/openai/codex/issues/29413))。

## 6. 开发者关注点
- **资源消耗与硬件损耗**：开发者对客户端的资源占用极为敏感。SQLite 日志频繁写入导致 SSD 寿命受损 ([#28224](https://github.com/openai/codex/issues/28224))、UI 动画导致 GPU 占用过高 ([#16857](https://github.com/openai/codex/issues/16857)) 以及 Windows 端引发系统温度飙升 ([#30055](https://github.com/openai/codex/issues/30055)) 是当前反馈最集中的性能痛点。
- **计费与配额统计异常**：Plus 订阅用户高度关注 5 小时和每周用量限额的消耗逻辑，近期多起“无活动却快速掉额度”的反馈 ([#30918](https://github.com/openai/codex/issues/30918), [#30943](https://github.com/openai/codex/issues/30943)) 引发了对计费系统准确性的质疑。
- **沙箱安全与执行隔离**：官方维护者今日集中处理了大量 Git 和 Shell 执行相关的安全 PR。这表明在 Agent 自动执行代码和补丁的场景下，防范恶意仓库通过 Git hooks、filters、merge drivers 或伪造 Shell 进行沙箱逃逸，是当前底层架构关注的核心安全命题。
- **模型上下文与推理质量**：用户反馈 GPT-5.5 性能下降 ([#24431](https://github.com/openai/codex/issues/24431)) 以及多轮对话中模型“回复旧消息”的上下文丢失问题 ([#8648](https://github.com/openai/codex/issues/8648))，显示出开发者对长上下文保持和模型稳定性的持续要求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-03)

## 1. 今日更新概览
过去 24 小时内，Gemini CLI 发布了最新的 nightly 版本，主要修复了内存导入处理中的符号链接目录逃逸问题。社区讨论和代码提交高度集中于 Agent 行为控制（如防挂起、防破坏性操作）、Auto Memory 机制的隐私与性能优化，以及终端 UI 渲染的稳定性修复。

## 2. 版本发布
- **v0.51.0-nightly.20260702.gff00dacd9**
  - **核心修复**：解决了内存导入处理器（memory import processor）中符号链接目录逃逸的安全与逻辑问题 ([PR #28233](https://github.com/google-gemini/gemini-cli/pull/28233))。

## 3. 社区热点 Issues
以下挑选了 10 个近期活跃且对使用体验影响较大的 Issue：

1. **Subagent 状态报告异常**：`codebase_investigator` 等 subagent 在达到最大轮数限制（MAX_TURNS）时，仍错误地报告 `status: "success"` 和 `GOAL` 终止原因，掩盖了实际的中断状态 ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))。
2. **Generalist Agent 无限挂起**：当 CLI 将任务委派给 generalist agent 时，即使是创建文件夹等简单操作也会导致进程永久挂起，用户需手动取消 ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))。
3. **Auto Memory 隐私脱敏优化**：Auto Memory 在读取本地 transcript 时，Secrets 已进入模型上下文后才进行脱敏。社区提议增加确定性脱敏机制并减少日志记录以防止敏感信息泄露 ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))。
4. **Auto Memory 无效重试问题**：Auto Memory 对低信号 session 会无限重试读取，提议增加机制阻止其对低价值会话的持续处理 ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))。
5. **Shell 命令执行后卡死**：执行简单的 CLI 命令后，界面常卡在 "Waiting input" 状态，尽管底层命令已执行完毕 ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))。
6. **Browser Agent Wayland 兼容性**：Browser subagent 在 Wayland 显示服务器环境下运行失败，无法正常完成目标 ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))。
7. **工具数量超限导致 400 错误**：当可用工具数量超过 128（或 400）时，Gemini CLI 会触发 API 400 错误，需优化 Agent 对工具作用域的动态限制 ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))。
8. **Agent 破坏性行为控制**：Agent 在处理复杂 Git 操作或数据库维护时，偶尔会使用 `git reset --force` 等危险命令，社区呼吁增加安全护栏以阻止破坏性行为 ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))。
9. **Browser Agent 忽略配置覆盖**：Browser Agent 未正确读取全局或项目级 `settings.json` 中的覆盖配置（如 `maxTurns`），导致行为不受控 ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))。
10. **Skills 与 Sub-agents 调度不积极**：用户反馈 Gemini 在自主执行任务时，极少主动调用自定义 skills 和 sub-agents，除非在 prompt 中显式强制要求 ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))。

## 4. 重要 PR 进展
以下挑选了 10 个近期更新的重要 Pull Request：

1. **修复 JSON/IPYNB 文件损坏**：绕过 `write_file` 和 `replace` 工具对 `.json` 和 `.ipynb` 文件的 LLM 自动修正，防止结构化文件被破坏 ([#28223](https://github.com/google-gemini/gemini-cli/pull/28223))。
2. **默认支持 AGENTS.md**：更新核心 `memoryTool`，将 `AGENTS.md` 与 `GEMINI.md` 一起作为开箱即用的默认上下文文件 ([#28240](https://github.com/google-gemini/gemini-cli/pull/28240))。
3. **限制递归推理轮数**：在核心推理引擎中实施单次请求 15 轮的严格递归推理限制，防止无限循环耗尽本地 CPU 和 API 额度 ([#28164](https://github.com/google-gemini/gemini-cli/pull/28164))。
4. **修复 OAuth 登录失败**：避免在 OAuth token 交换期间复用 keep-alive socket，解决了 Node.js 最新安全补丁（CVE-2026-48931）导致的 "Premature close" 登录报错 ([#28103](https://github.com/google-gemini/gemini-cli/pull/28103))。
5. **解决“思想泄漏”问题**：从 scrubbed history turns 中剥离模型的内部 thoughts，防止内部独白泄漏到纯文本历史中导致模型陷入无限循环 ([#27971](https://github.com/google-gemini/gemini-cli/pull/27971))。
6. **修复 Emoji 截断乱码**：修复 CLI 在截断显示字符串时，因按 UTF-16 代码单元计算长度而拆分 emoji 代理对导致的乱码问题 ([#28224](https://github.com/google-gemini/gemini-cli/pull/28224))。
7. **优化多行编辑 UI 提示**：在多行编辑代码片段的 UI 描述中增加省略号（`...`），避免多行修改被误认为单行修改 ([#28126](https://github.com/google-gemini/gemini-cli/pull/28126))。
8. **修复非 UTF-8 网页解码**：更新 `web-fetch` 工具，使其能够正确读取 `Content-Type` 头中的 `charset` 参数，解决中日韩及遗留网站的乱码问题 ([#27996](https://github.com/google-gemini/gemini-cli/pull/27996))。
9. **完善 ACP 模式 Token 统计**：在 ACP 服务器模式下，将 cached 和 thought tokens 计入 `PromptResponse.usage`，修复客户端成本估算虚高约 3 倍的问题 ([#27986](https://github.com/google-gemini/gemini-cli/pull/27986))。
10. **更新 Policy Engine 文档**：将快速入门文档中测试 deny 规则的危险命令 `rm -rf /` 替换为安全的测试命令 ([#28244](https://github.com/google-gemini/gemini-cli/pull/28244))。

## 5. 功能需求归类
从近期 Issues 中，可以观察到用户在以下几个功能方向上的集中诉求：

- **Agent 行为与调度控制**：用户期望 Agent 具备更准确的自我状态感知（如正确报告 MAX_TURNS 中断）、更主动的 Sub-agent/Skill 调度策略，以及在执行 Git/DB 操作时具备防破坏性的安全护栏。
- **Auto Memory 机制优化**：需求集中在提升后台提取的隐私安全性（确定性脱敏）、减少无效计算（停止低信号 session 重试）以及优雅处理无效补丁。
- **Browser Agent 增强**：涉及跨平台显示服务器兼容（Wayland）、配置文件的严格继承，以及浏览器会话锁死后的自动恢复机制。
- **上下文与工具管理**：探讨引入 AST 感知工具以优化代码读取和搜索的精准度，以及解决大规模工具注册导致的 API 上下文超限问题。

## 6. 开发者关注点
- **执行挂起与状态卡死**：这是目前反馈最密集的痛点。无论是 Shell 命令执行后的 "Waiting input" 假死、Generalist agent 的无限挂起，还是遇到交互式提示（如创建 Vite 应用）时的卡死，都严重阻断了自动化工作流。
- **安全与隐私保护**：开发者对 Auto Memory 提取过程中的 Secrets 泄漏风险保持高度警惕，同时对 Agent 自主执行高危命令（如 `rm -rf` 或 `git reset --force`）缺乏足够的安全拦截表示担忧。
- **终端 UI 与渲染稳定性**：包括终端窗口调整大小时的历史记录闪烁、退出外部编辑器后的画面损坏，以及宽字符/Emoji 截断导致的 UI 乱码，这些细节问题影响了重度终端用户的日常体验。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-07-03)

## 1. 今日更新概览
过去24小时，GitHub Copilot CLI 发布了 v1.0.69-0 版本，主要优化了沙盒路径补全并修复了会话与 MCP 加载的相关问题。社区 Issues 活跃度较高（更新31条），讨论焦点集中在 MCP 协议集成、BYOK（自带密钥）配置以及终端渲染兼容性上；PR 方面仅有少量非核心更新。

## 2. 版本发布
- **v1.0.69-0**
  - **新增**：为 `/sandbox` 路径条目添加文件和文件夹补全功能。
  - **修复**：更新后台会话工作目录变更时 Sessions 分屏视图中的分支标签；跳过返回已加载会话时不必要的 MCP 重新加载；防止 tgrep 索引器运行异常。

## 3. 社区热点 Issues
1. **模型可用性报错**：用户反馈在使用 agent 模式时遇到 `Model "gpt-5.3-codex" is not available` 错误，导致无法生成代码（[#3997](https://github.com/github/copilot-cli/issues/3997)）。
2. **上下文压缩无限循环**：高严重度 Bug，当上下文达到约 75% 时，agent 执行 compact 后重新读取摘要并重新规划，导致陷入 217 次循环且零执行（[#3158](https://github.com/github/copilot-cli/issues/3158)）。
3. **支持自定义模型端点**：用户呼吁 CLI 能够像 VS Code 一样支持配置本地或私有模型的自定义端点，以满足企业和本地开发需求（[#4003](https://github.com/github/copilot-cli/issues/4003)）。
4. **Linux 本地沙盒模式失效**：用户反馈在 Linux 环境下通过 `/sandbox enable` 启用本地沙盒后，受限访问的 shell 命令执行未能按预期工作（[#3653](https://github.com/github/copilot-cli/issues/3653)）。
5. **MCP 服务器添加时渲染混乱**：在 v1.0.69-0 中运行 `/mcp add` 添加服务器时，终端 UI 渲染出现严重错乱（[#4014](https://github.com/github/copilot-cli/issues/4014)）。
6. **MCP 工具列表分页未遵循**：CLI 未正确处理 MCP 服务器 `tools/list` 响应中的 `nextCursor`，导致仅加载第一页工具，违反 MCP 规范（[#4006](https://github.com/github/copilot-cli/issues/4006)）。
7. **Windows 滚动条导致文本未对齐**：引入垂直滚动条后，Windows 终端下的文本渲染出现错位，且 Copilot 自身无法通过提示词禁用该滚动条（[#3501](https://github.com/github/copilot-cli/issues/3501)）。
8. **macOS 原始图像数据粘贴失败**：在 macOS 下使用 Ctrl+V 粘贴剪贴板中的原始图像数据（如截图）时无响应，仅支持文件拖拽（[#4013](https://github.com/github/copilot-cli/issues/4013)）。
9. **编辑器中粘贴 Token 未展开**：启用 `compactPaste` 时，使用 Ctrl+G 在 `$EDITOR` 中编辑提示词，大段文本的折叠 Token 未被展开为完整文本（[#3936](https://github.com/github/copilot-cli/issues/3936)）。
10. **支持持久化命令拒绝规则**：用户建议在 `permissions-config.json` 中增加对特定命令族的持久化 deny（拒绝）规则，目前仅支持 allow 规则（[#3995](https://github.com/github/copilot-cli/issues/3995)）。

## 4. 重要 PR 进展
过去24小时内仅有 2 个 PR 更新，且均为非核心功能的测试或无关提交，暂无重要核心功能 PR 推进：
- [#3880](https://github.com/github/copilot-cli/pull/3880)：包含无关的 React UI 组件代码（`ArtistCard`），疑似无效提交。
- [#3873](https://github.com/github/copilot-cli/pull/3873)：添加初始控制台问候日志，属于基础测试类提交。

## 5. 功能需求归类
- **MCP (Model Context Protocol) 深度集成**：用户反馈了 MCP 服务器添加时的 UI 渲染问题（[#4014](https://github.com/github/copilot-cli/issues/4014)）、工具列表分页丢失（[#4006](https://github.com/github/copilot-cli/issues/4006)）、插件安装未自动注册 MCP 配置（[#4004](https://github.com/github/copilot-cli/issues/4004)）以及同名 MCP 服务器加载覆盖缺乏警告（[#3893](https://github.com/github/copilot-cli/issues/3893)）。
- **自定义模型与 BYOK 工作流**：开发者希望支持自定义模型端点（[#4003](https://github.com/github/copilot-cli/issues/4003)），并反馈了 BYOK 配置下 `reasoning effort` 参数报错（[#4012](https://github.com/github/copilot-cli/issues/4012)）以及切换 BYOK 后模型自动回退的问题（[#3978](https://github.com/github/copilot-cli/issues/3978)）。
- **权限控制与沙盒管理**：涉及 Linux 本地沙盒失效（[#3653](https://github.com/github/copilot-cli/issues/3653)）、复合 shell 命令无法自动批准（[#3165](https://github.com/github/copilot-cli/issues/3165)）、持久化拒绝规则需求（[#3995](https://github.com/github/copilot-cli/issues/3995)）以及 Windows 下 hooks 执行环境不兼容（[#4001](https://github.com/github/copilot-cli/issues/4001)）。
- **终端交互与无障碍体验**：包括 Windows 滚动条渲染与复制污染（[#3501](https://github.com/github/copilot-cli/issues/3501), [#4009](https://github.com/github/copilot-cli/issues/4009)）、主题设置未记忆（[#4015](https://github.com/github/copilot-cli/issues/4015)）以及屏幕阅读器无法回显输入字符（[#3993](https://github.com/github/copilot-cli/issues/3993)）。

## 6. 开发者关注点
- **MCP 协议落地的细节打磨**：MCP 相关 Issues 集中出现，表明开发者正在积极将外部工具通过 MCP 接入 CLI，但在分页处理、配置注册和 UI 渲染等基础协议实现上仍遇到阻碍，生态集成处于磨合期。
- **高级用户的模型自定义痛点**：使用 BYOK 和自定义端点的开发者对模型切换的稳定性（如意外回退）和高级参数（如推理努力程度）的支持提出了更高要求，这直接影响企业级和极客用户的定制化工作流。
- **跨平台终端兼容性**：Windows 下的滚动条渲染与复制问题、macOS 下的剪贴板图像粘贴限制，以及屏幕阅读器支持的缺失，反映出 CLI 工具在不同操作系统终端和辅助工具下的兼容性仍需持续优化。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-03)

## 1. 今日更新概览
过去 24 小时内，Kimi Code CLI 社区无新版本发布。社区活跃度主要集中在 Issue 讨论与代码贡献，共更新 2 个 Issue（1 个开放，1 个已关闭）和 1 个 Pull Request。今日动态主要涉及第三方模型接入时的 Agent 循环 Bug、Tailscale 网络环境连接问题，以及针对 Windows 终端剪贴板媒体粘贴体验的修复。

## 2. 社区热点 Issues
*注：今日过去 24 小时内更新的 Issue 共 2 条，以下为全部记录。*

- **#640 [OPEN] 读取文件陷入死循环问题**
  用户在使用自定义 Anthropic endpoint（配置 `mimo-v2-flash` 模型）和 Linux 平台时，遇到 CLI 反复读取同一文件并陷入死循环的问题。该 Issue 积累了 16 条评论，社区讨论较为热烈，主要涉及第三方模型在上下文处理或文件读取逻辑上的兼容性异常。
  [查看 Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)

- **#1111 [CLOSED] Tailscale WebSocket 连接错误**
  用户在 macOS (ARM64) 环境下使用 Kimi Code 1.12.0 时，遇到通过 Tailscale 进行 WebSocket 连接报错的问题。该 Issue 目前已被关闭，可能已通过本地配置调整解决或被确认为特定网络环境问题。
  [查看 Issue #1111](https://github.com/MoonshotAI/kimi-cli/issues/1111)

## 3. 重要 PR 进展
*注：今日过去 24 小时内更新的 PR 共 1 条，以下为全部记录。*

- **#2481 [OPEN] 修复 Windows 终端下 BracketedPaste 剪贴板媒体读取问题**
  该 PR 旨在解决 Windows Terminal 和 VS Code 集成终端中的粘贴失效问题。在上述终端中，`Ctrl+V` 会被终端自身处理为 `BracketedPaste` 事件，导致图片等二进制内容无法作为文本携带而静默失败。此修改调整了 `_handle_bracketed_paste()` 逻辑，使其优先尝试读取剪贴板媒体内容，从而完善多模态输入体验。
  [查看 PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)

## 4. 功能需求归类
基于今日更新的 Issues，社区诉求主要集中在以下方向：

- **第三方模型与自定义 Endpoint 兼容性**：Issue #640 反映了用户在通过 `config.toml` 接入非官方模型（如 `mimo-v2-flash`）时遇到的执行逻辑异常，表明社区对 CLI 工具在异构模型下的 Agent 循环控制稳定性有明确需求。
- **复杂网络环境支持**：Issue #1111 涉及 Tailscale 环境下的 WebSocket 连接，反映出开发者在异地组网或零信任网络架构下使用 CLI 工具时的网络连通性诉求。

## 5. 开发者关注点
- **跨平台终端交互细节**：PR #2481 凸显了开发者对 Windows 平台及特定终端（Windows Terminal、VS Code 集成终端）下交互体验的关注。特别是针对富文本和媒体内容（如图片）的粘贴功能，开发者致力于消除不同终端模拟器之间的事件处理差异。
- **第三方模型接入的鲁棒性**：结合 #640 的高评论数（16 条），开发者在尝试将 Kimi CLI 与其他开源或第三方模型结合使用时，高度关注文件读取、上下文截断等核心逻辑在非标模型下的表现，避免因模型输出格式差异导致工具陷入死循环。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-07-03)

## 1. 今日更新概览
过去 24 小时内 OpenCode 社区活跃度主要集中在桌面端（Desktop）交互体验优化、V2 核心架构（事件审计与 Session 日志重放）的底层推进，以及针对特定模型提供商（如 xAI、DeepSeek）的路由兼容性与计费问题修复。社区未发布新版本，但有多项针对 Electron 客户端性能和模型 API 对齐的 PR 进入评审阶段。

## 2. 版本发布
*今日无新版本发布。*

## 3. 社区热点 Issues
1. **[FEATURE] 调整 DeepSeek V4 Pro 降价后的 Go 订阅额度** ([#28846](https://github.com/anomalyco/opencode/issues/28846))
   - **场景/范围**：DeepSeek V4 Pro API 价格永久下调 75%，用户要求同步放宽 OpenCode Go 订阅的使用限制。该 Issue 获得了极高的社区关注（90 条评论，82 个赞）。
2. **[FEATURE] 集成 VS Code 以预览代码变更 (Diff Preview)** ([#8003](https://github.com/anomalyco/opencode/issues/8003))
   - **场景/范围**：在 TUI 中预览数百行代码的修改体验不佳，用户呼吁提供 VS Code 插件或集成方案以支持更直观的 Diff 预览（16 条评论，73 个赞）。
3. **[BUG] 隐性调用 Haiku 模型并计费** ([#10272](https://github.com/anomalyco/opencode/issues/10272))
   - **场景/范围**：用户明确配置使用 MiniMax M2.1，但日志显示后台静默调用并计费了 Claude Haiku 4.5。此路由/计费 Bug 引发了对模型调用准确性的担忧。
4. **[BUG] Zen API 端点在 CORS 预检 (OPTIONS) 时返回 404** ([#31041](https://github.com/anomalyco/opencode/issues/31041))
   - **场景/范围**：所有 Zen API 端点在处理浏览器 CORS 预检请求时返回 404 HTML 页面，直接阻塞了所有基于浏览器的客户端调用。
5. **[BUG] 启用新布局后无法切换 Plan/Build 模式** ([#31972](https://github.com/anomalyco/opencode/issues/31972))
   - **场景/范围**：在 Windows 10 环境下开启 "New Layout and Designs" 特性标志后，UI 切换按钮和 `Ctrl+.` 快捷键均失效，无法在 Plan 和 Build 模式间切换。
6. **[BUG] 桌面端将同一 Git 仓库的不同目录合并为一个项目** ([#29869](https://github.com/anomalyco/opencode/issues/29869))
   - **场景/范围**：在桌面端添加项目时，指向同一 Git 仓库的两个不同本地目录会被错误合并，其中一个被降级为沙盒（sandbox），不符合预期。
7. **[BUG] Windows 下 OpenCode Go 在 "build" 后永久挂起** ([#35035](https://github.com/anomalyco/opencode/issues/35035))
   - **场景/范围**：在 Windows 11 环境下使用 OpenCode CLI 1.17.13，调用 glm-5.2、qwen3.6-plus 等 OpenCode Go 订阅模型时，请求在 "build" 阶段后无限期挂起。
8. **[BUG] 桌面端渲染大型 Session Diff 摘要时挂起并崩溃** ([#33106](https://github.com/anomalyco/opencode/issues/33106))
   - **场景/范围**：macOS arm64 环境下，打开包含大量历史或重型上下文的现有 Session 时，Electron 主进程失去响应并最终崩溃。
9. **[BUG] xAI 请求缺失 Prompt Cache 路由标识** ([#35033](https://github.com/anomalyco/opencode/issues/35033) / [#35034](https://github.com/anomalyco/opencode/issues/35034))
   - **场景/范围**：xAI 的 Prompt Cache 按服务器存储，需要稳定的会话标识（如 `x-grok-conv-id`）来路由请求，当前 V2 runner 缺失对 `@ai-sdk/xai` 的原生路由支持。
10. **[BUG] 重复的 Webhook 交付导致免费发放额度** ([#28402](https://github.com/anomalyco/opencode/issues/28402))
    - **场景/范围**：Console 中的两个支付 Webhook 处理程序缺乏幂等性保护，Stripe 的重试机制会导致重复插入支付记录并错误发放额度。

## 4. 重要 PR 进展
1. **feat(core): 支持同步水印的确定性 Session 日志重放** ([#35040](https://github.com/anomalyco/opencode/pull/35040))
   - 替换了旧的移动边界标记，使重连安全的日志重放具备确定性，同时保留实时尾部事件交付。
2. **fix(session): 子 Agent 完成时通知父 Session** ([#35041](https://github.com/anomalyco/opencode/pull/35041))
   - 修复了子 Session 结束时向父 Session 发送合成任务结果的逻辑，确保后台完成流正确传递。
3. **feat(desktop): 重新打开关闭的标签页、Cmd+W 关闭及后台打开** ([#35010](https://github.com/anomalyco/opencode/pull/35010))
   - 为桌面端/V2 标签栏引入浏览器风格的标签页管理功能，支持快捷键恢复和后台打开。
4. **feat(desktop): 在主页添加“最近关闭的项目”** ([#34926](https://github.com/anomalyco/opencode/pull/34926))
   - 当服务器没有打开的项目时，在桌面端主页展示最近关闭的项目列表，优化项目切换体验。
5. **feat(app): 将工具调用 UI 与 V2 对齐** ([#34931](https://github.com/anomalyco/opencode/pull/34931))
   - 统一子 Agent 和工具调用的 UI 表现，使其符合 V2 架构的设计规范。
6. **feat(app): 改进模型搜索功能** ([#34954](https://github.com/anomalyco/opencode/pull/34954))
   - 优化 Composer 模型选择器的搜索逻辑，标准化分隔符和标点（如 `gpt 5`、`gpt-5`、`gpt5` 均可匹配）。
7. **fix(opencode): 发送 xAI Prompt Cache 路由键** ([#35030](https://github.com/anomalyco/opencode/pull/35030))
   - 修复 xAI 模型调用问题，确保每个请求携带稳定的会话标识以命中服务器端缓存。
8. **feat(core): 通过原生 Responses Runner 路由 xAI 模型** ([#35031](https://github.com/anomalyco/opencode/pull/35031))
   - 在 V2 runner 中增加对 `@ai-sdk/xai` 的分支处理，解决不支持的 API 错误并正确降级 `prompt_cache_key`。
9. **feat(opencode): 支持按变体 (Variant) 覆盖限制** ([#34815](https://github.com/anomalyco/opencode/pull/34815))
   - 允许在模型配置的变体中携带 `limit` 覆盖参数，使同一模型可以拥有不同上下文长度的预设。
10. **feat(tui): 双击 Escape 清除提示输入** ([#35036](https://github.com/anomalyco/opencode/pull/35036))
    - 在 TUI 中增加双击 Escape 清空当前输入框内容的功能，提升终端交互效率。

## 5. 功能需求归类
- **IDE 与编辑器集成**：用户提出在 VS Code 中直接预览 OpenCode 代码变更（Diff）的需求，以解决 TUI 在处理大型文件修改时预览体验不佳的问题（[#8003](https://github.com/anomalyco/opencode/issues/8003)）。
- **桌面端交互与项目管理**：需求集中在浏览器风格的标签页管理（[#35010](https://github.com/anomalyco/opencode/pull/35010)）、最近项目快速访问（[#34926](https://github.com/anomalyco/opencode/pull/34926)）以及项目目录选择器的优化（[#35039](https://github.com/anomalyco/opencode/issues/35039)）。
- **模型路由与特定厂商支持**：针对 xAI 的 Prompt Cache 路由标识（[#35033](https://github.com/anomalyco/opencode/issues/35033)）、Nvidia/Minimax 的 Thinking 变体支持（[#35027](https://github.com/anomalyco/opencode/issues/35027)），以及 Anthropic 环境变量解析对齐（[#35005](https://github.com/anomalyco/opencode/issues/35005)）提出了明确的适配需求。
- **计费与额度动态管理**：随着上游模型（如 DeepSeek V4 Pro）价格调整，用户要求动态调整订阅额度（[#28846](https://github.com/anomalyco/opencode/issues/28846)），并关注免费模型的 Token 限制提示（[#12219](https://github.com/anomalyco/opencode/issues/12219)）。

## 6. 开发者关注点
- **桌面端 (Electron) 稳定性与内存管理**：多个 Issue 指出桌面端在渲染大型 Session Diff 时发生崩溃（[#33106](https://github.com/anomalyco/opencode/issues/33106)）、重型 Session 导致渲染进程内存泄漏（[#35026](https://github.com/anomalyco/opencode/issues/35026)）以及主进程 JS 对象销毁异常（[#34969](https://github.com/anomalyco/opencode/issues/34969)）。Electron 端的性能优化和内存释放是当前的高频痛点。
- **API 路由准确性与隐性计费**：开发者对模型调用的确定性要求极高。配置特定模型却暗中调用其他模型并计费（[#10272](https://github.com/anomalyco/opencode/issues/10272)），以及网络中断后子 Agent 状态恢复失败（[#35029](https://github.com/anomalyco/opencode/issues/35029)）等问题，直接影响了开发者对工具可靠性的信任。
- **V2 核心架构演进**：核心维护者正在持续推进 V2 架构的底层重构，包括事件 Schema 审计与清理（[#35021](https://github.com/anomalyco/opencode/issues/35021), [#35020](https://github.com/anomalyco/opencode/issues/35020)）、确定性日志重放（[#35040](https://github.com/anomalyco/opencode/pull/35040)）以及将 Web 搜索作为一等公民集成（[#35038](https://github.com/anomalyco/opencode/issues/35038)）。底层数据流和事件总线的规范化是当前开发重心。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### 1. 今日更新概览
今日 Qwen Code 发布了 v0.19.5 正式版及最新 nightly 构建，主要强化了 daemon 管理的 channel worker 并优化了 web-shell 的会话创建逻辑。社区在后台自动化调度、多渠道集成（如企微、QQ Bot）以及 sub-agent 嵌套等方向推进了多个核心 PR，同时开发者对上下文 Token 计算、跨平台打包分发及 MCP 工具调用的稳定性反馈了较多具体问题。

### 2. 版本发布
- **v0.19.5 & v0.19.4-nightly**：
  - 强化了 daemon 管理的 channel worker 机制，提升后台通道稳定性（[PR #6098](https://github.com/QwenLM/qwen-code/pull/6098)）。
  - 修复了 web-shell 中的会话创建逻辑，将其延迟至首次 prompt 时执行，优化了前端资源加载（[PR #6098](https://github.com/QwenLM/qwen-code/pull/6098)）。

### 3. 社区热点 Issues
1. **[P1] Web-shell 移动端会话切换卡顿**：排查发现移动端抽屉关闭动画期间存在多层成本叠加（如侧边栏持续轮询、未压缩的全量历史加载），导致大会话切换时界面冻结数秒（[#6181](https://github.com/QwenLM/qwen-code/issues/6181)）。
2. **[P1] VSCode 插件发布失败**：`vsce` 打包时将内置的 Slack token 正则表达式误判为 secret，导致 VSCode IDE Companion 的 release workflow 阻断（[#6199](https://github.com/QwenLM/qwen-code/issues/6199)）。
3. **上下文窗口计算错误**：用户配置 Qwen3-Coder 64k 实例时，系统计算的 context window 大小不正确，影响长上下文场景的可用性（[#6144](https://github.com/QwenLM/qwen-code/issues/6144)）。
4. **模型思考过程显示异常**：使用 OpenAI 兼容模型时，思考时间标签始终显示 "Thought for 0s"，且思考内容不再以流式输出（[#6175](https://github.com/QwenLM/qwen-code/issues/6175)）。
5. **YOLO 模式下 MCP 调用卡死**：在 YOLO 模式下，若配置了 MCP，启动新 MCP 需要手动确认会导致系统无响应冻结（[#6131](https://github.com/QwenLM/qwen-code/issues/6131)）。
6. **`/auth` 修改配置后新会话仍报 401**：在会话中通过 `/auth` 修改模型供应商配置后，当前会话正常，但新会话仍使用旧配置并报错（[#5979](https://github.com/QwenLM/qwen-code/issues/5979)）。
7. **Follow-up 建议误判多句子**：包含缩写的单句（如 "Let's start with the Weeds vs. Wildflowers audit."）被错误识别为多句并被过滤（[#6077](https://github.com/QwenLM/qwen-code/issues/6077)）。
8. **QQ Bot Cron 与 blockStreaming 交互问题**：开启 `blockStreaming` 时，`onResponseChunk` 提前返回导致 `streamState` 未填充，引发 cron 文本处理异常（[#6094](https://github.com/QwenLM/qwen-code/issues/6094)）。
9. **Windows 非 UTF-8 控制台乱码**：在 Windows 下使用非 UTF-8 代码页时，`run_shell_command` 通过 `cmd.exe` 执行的输出会出现乱码（[#6214](https://github.com/QwenLM/qwen-code/issues/6214)）。
10. **第三方包管理渠道更新滞后**：多位用户反馈国内淘宝 npm 镜像源落后三个版本，且 Homebrew 升级时无法获取最新版本（[#6218](https://github.com/QwenLM/qwen-code/issues/6218), [#6187](https://github.com/QwenLM/qwen-code/issues/6187)）。

### 4. 重要 PR 进展
1. **支持 Sub-agent 嵌套**：允许 sub-agent 生成嵌套的 sub-agent，新增 `model.maxSubagentDepth` 配置项限制嵌套深度，默认最大 5 层（[#6189](https://github.com/QwenLM/qwen-code/pull/6189)）。
2. **TUI 树状展示嵌套 Sub-agent**：配合嵌套功能，在 CLI 的 TUI 界面中将 sub-agent 的层级关系以树状结构可视化展示（[#6191](https://github.com/QwenLM/qwen-code/pull/6191)）。
3. **新增企业微信 (WeCom) 通道**：内置企业微信自定义应用通道适配器，支持回调验证、解密及消息路由（[#6210](https://github.com/QwenLM/qwen-code/pull/6210)）。
4. **QQ Bot 群消息与 Cron 支持**：为 QQ Bot 适配器增加群消息处理、关键词触发、@提及检测及实验性的 cron-msg 支持（[#6206](https://github.com/QwenLM/qwen-code/pull/6206)）。
5. **QQ Bot 流式空闲刷新与工具调用保护**：优化 QQ Bot 的流式基础设施，增加 2 秒空闲刷新缓冲，并处理工具调用协调与过期回调保护（[#6204](https://github.com/QwenLM/qwen-code/pull/6204)）。
6. **Glob 遍历性能优化**：在 glob 遍历期间直接应用 `.gitignore` / `.qwenignore` 规则剪枝忽略目录，而非仅在后置过滤，提升文件发现性能（[#6123](https://github.com/QwenLM/qwen-code/pull/6123)）。
7. **保留 OpenAI 推理流原始内容**：将 OpenAI 兼容的 `reasoning_content` 作为原始流式思考描述保留，避免使用 Gemini 风格的结构化解析导致 Markdown 格式丢失（[#6192](https://github.com/QwenLM/qwen-code/pull/6192)）。
8. **新增数据可视化 (dataviz) 内置技能**：为 Artifact 工具添加图表和仪表盘设计指导技能，包含图表启发、调色板参考及本地调色板验证脚本（[#6198](https://github.com/QwenLM/qwen-code/pull/6198)）。
9. **工具调用超时控制**：在 `CoreToolScheduler` 层新增可选的单次工具调用执行超时机制，通过环境变量配置，超时触发 `AbortSignal`（[#6124](https://github.com/QwenLM/qwen-code/pull/6124)）。
10. **Autofix CI 迁移至专用 ECS Runner**：将繁重的 Qwen Autofix agent 任务路由至专用的自托管 ECS runner，提升 CI 稳定性并保留 ubuntu-latest 作为降级方案（[#6207](https://github.com/QwenLM/qwen-code/pull/6207)）。

### 5. 功能需求归类
- **后台自动化与守护进程 (Daemon/Scheduler)**：社区对本地常驻后台任务需求明确，包括支持无需交互会话的本地 `/schedule` 守护进程（[#6112](https://github.com/QwenLM/qwen-code/issues/6112)）、通过 `qwen serve --channel` 管理通道 worker（[#5976](https://github.com/QwenLM/qwen-code/issues/5976)），以及支持配置循环/定时任务的过期时间（[#6167](https://github.com/QwenLM/qwen-code/issues/6167)）。
- **多渠道集成与身份管理 (Channels)**：除企微和 QQ Bot 外，用户提出为通道循环增加钉钉主动发送支持（[#6168](https://github.com/QwenLM/qwen-code/issues/6168)），并建议实现通道级别的身份与任务生命周期基础，以支持多玩家 agent 场景（[#6103](https://github.com/QwenLM/qwen-code/issues/6103)）。
- **UI 交互与无障碍优化**：需求涵盖在 daemon UI 中支持选择视觉桥接模型（[#6195](https://github.com/QwenLM/qwen-code/issues/6195)），以及全面重构 web-shell 列表对话框的键盘导航与屏幕阅读器无障碍支持（[#6127](https://github.com/QwenLM/qwen-code/issues/6127)）。

### 6. 开发者关注点
- **上下文与 Token 开销管理**：开发者高度关注 Token 计算的准确性与系统开销。除了上下文窗口计算错误的 Bug 外，有反馈指出在极简输入下，系统提示词的固定开销高达约 22k tokens，导致信噪比极低（[#6097](https://github.com/QwenLM/qwen-code/issues/6097)）。
- **MCP 与工具调用稳定性**：MCP 集成的边缘场景体验仍需打磨，例如 YOLO 模式下的确认阻塞问题（[#6131](https://github.com/QwenLM/qwen-code/issues/6131)），以及开发者建议在 MCP 服务器能力发现阶段增加对瞬态网络错误的自动重试机制（[#6048](https://github.com/QwenLM/qwen-code/issues/6048)）。
- **跨平台兼容与分发渠道**：Windows 终端编码导致的乱码（[#6214](https://github.com/QwenLM/qwen-code/issues/6214)）、macOS sandbox 配置文件路径解析错误（[#6089](https://github.com/QwenLM/qwen-code/issues/6089)），以及 npm 淘宝镜像和 Homebrew 等第三方包管理渠道的更新滞后（[#6218](https://github.com/QwenLM/qwen-code/issues/6218), [#6187](https://github.com/QwenLM/qwen-code/issues/6187)），是当前影响多平台用户开箱体验的主要痛点。

</details>