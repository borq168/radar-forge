# AI CLI 工具社区动态日报 2026-06-30

> 生成时间: 2026-06-30 00:32 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-06-30)

## 1. 今日横向概览
今日各 AI CLI 工具社区活动分化明显。OpenAI Codex、Gemini CLI、OpenCode 与 Qwen Code 在底层架构重构、安全沙盒加固及多模型协议适配方面提交了密集的 PR；Claude Code 与 GitHub Copilot CLI 发布了新版本，但社区反馈主要集中在沙盒性能瓶颈、Windows 平台兼容性及会话状态管理异常；Kimi Code CLI 今日活跃度较低，仅有一项关于多端输入交互的讨论。整体来看，长任务上下文管理、沙盒安全与性能的平衡、以及终端 UI 跨平台渲染是今日跨工具的共同焦点。

## 2. 各工具活跃度对比

| 工具名称 | Release 情况 | 热点 Issues 数 | 重要 PR 数 | 核心动态标签 |
| :--- | :--- | :---: | :---: | :--- |
| **Claude Code** | v2.1.196 (1个) | 10 | 3 | 组织级配置、沙盒性能、安全误报 |
| **OpenAI Codex** | v0.142.4, v0.143.0-alpha.31 (2个) | 10 | 10 | 沙盒边界加固、上下文压缩、资源泄漏 |
| **Gemini CLI** | v0.51.0-nightly (1个) | 10 | 10 | Agent 护栏、Auto Memory、递归限制 |
| **GitHub Copilot CLI**| v1.0.66-2 (1个) | 10 | 0 | Windows MCP 兼容、会话卡死、TUI 渲染 |
| **OpenCode** | 无 | 10 | 10 | V2 架构迁移、多模型网关、可观测性 |
| **Qwen Code** | 无 | 10 | 10 | Daemon 自动化、流式稳定性、协议适配 |
| **Kimi Code CLI** | 无 | 1 | 0 | 多端输入交互 |

## 3. 共同出现的功能方向

- **上下文压缩与长任务稳定性**
  - **OpenAI Codex**：反馈自动上下文压缩导致模型丢失任务上下文和进度 (#5957)。
  - **OpenCode**：报告在空文件夹中也会陷入自动压缩死循环，导致停止响应 (#30680)。
  - **Qwen Code**：提议支持配置独立的上下文压缩模型以优化成本 (#5956)，并修复了压缩阈值计算 Bug (#5957)。
- **沙盒安全边界与权限控制**
  - **Claude Code**：反馈沙盒递归枚举 `node_modules` 导致 OOM (#72367)，以及 VS Code 忽略沙盒配置 (#64061)。
  - **OpenAI Codex**：维护者密集合并 PR，加固 Git 操作、Shell 解析和 PowerShell 执行的沙盒边界，防范命令注入 (#28714, #30631 等)。
  - **Gemini CLI**：强化文件写入沙盒安全，阻止 auto-accept 模式下对 `.gemini` 等配置的写入以防逃逸 (#28215)。
- **终端 UI (TUI) 渲染与交互体验**
  - **GitHub Copilot CLI**：请求关闭 alt-screen 视图以解决兼容性问题 (#1799)，修复触控板滚动被误识别的问题 (#3957)。
  - **Gemini CLI**：处理终端调整大小时的性能消耗与界面闪烁问题 (#21924)。
  - **Qwen Code**：修复 Linux TUI 窗口滚动刷屏 (#5971)，全面替换 Emoji 为 Unicode 符号以优化终端对齐 (#5999)。
- **多模型/Provider 兼容性与成本控制**
  - **OpenCode**：集中反馈 GLM 系列 Prompt Cache 随机失效 (#33998, #31348) 及 Ollama 本地 Provider 挂起 (#22132)。
  - **Qwen Code**：反馈 Anthropic 协议缓存未命中导致成本增加 (#5942)，以及 GLM-5.2 思考过程标签泄露 (#6007)。

## 4. 差异化定位分析

- **Claude Code**：当前侧重于企业级多租户管理（如组织默认模型）与 IDE/桌面端环境一致性。技术痛点集中在大型项目下的沙盒性能（目录遍历挂起）与安全过滤器的误报拦截。
- **OpenAI Codex**：侧重于底层安全边界的系统性加固（密集的 Git/Shell 沙盒 PR）与跨平台桌面端体验（Linux 桌面端需求高）。功能演进上关注多智能体模式与事件驱动 Agent 能力。
- **Gemini CLI**：侧重于 Agent 行为控制与护栏建设（限制递归轮数、Subagent 状态管理、Caretaker Agent 基础设施），高度关注 Auto Memory 机制的安全与上下文优化。
- **GitHub Copilot CLI**：侧重于企业级集成与插件生态兼容（企业本地配置、LSP 日志、MCP 服务器兼容）。当前受困于 Windows 平台的 MCP 兼容性与会话生命周期管理异常。
- **OpenCode**：侧重于 V2 架构迁移（TUI 重构、MCP OAuth 并发）与插件可观测性。作为多模型网关，高度关注不同 Provider（如 GLM、Ollama、Copilot）的协议适配与缓存命中率。
- **Qwen Code**：侧重于 Daemon 后台自动化（如 `/loop` 自主模式）与多端（Web Shell/TUI/QQ Bot）渲染适配，关注长任务流式输出的稳定性与多模型协议细节处理。

## 5. 社区活跃度记录

- **高活跃度（PR/Issue 密集，底层迭代快）**：**OpenAI Codex**（2个 Release，10 Issue，10 PR，底层安全加固密集）、**Gemini CLI**（1个 Nightly，10 Issue，10 PR，Agent 护栏与基础设施推进）、**OpenCode**（10 Issue，10 PR，V2 架构迁移与多模型适配）、**Qwen Code**（10 Issue，10 PR，Daemon 自动化与流式稳定性修复）。
- **中等活跃度（有版本发布，Issue 活跃但 PR 较少）**：**Claude Code**（1个 Release，10 Issue，3 PR，聚焦沙盒与配额反馈）、**GitHub Copilot CLI**（1个 Release，10 Issue，0 PR，集中反馈 Windows 兼容与会话卡死）。
- **低活跃度**：**Kimi Code CLI**（无 Release，1 Issue，0 PR）。

## 6. 有证据支撑的观察

1. **上下文压缩（Context Compaction）机制已成为长任务场景下的共性痛点。**
   - *证据*：OpenAI Codex 反馈自动压缩导致丢失任务上下文 (#5957)；OpenCode 出现自动压缩死循环 (#30680)；Qwen Code 提出配置独立压缩模型以降低成本 (#5956) 并修复了压缩阈值计算 Bug (#5957)。这表明随着 Agent 处理复杂长任务，上下文管理策略的可靠性与成本直接影响核心体验。
2. **沙盒（Sandbox）安全边界与性能表现存在难以兼顾的矛盾。**
   - *证据*：Claude Code 社区大量反馈沙盒递归遍历导致大型项目 OOM 或挂起 (#72367, #68587)；OpenAI Codex 维护者密集提交 PR 修补 Git/Shell 的沙盒逃逸漏洞 (#28714, #30631)；Gemini CLI 强化文件写入沙盒以防止配置覆写 (#28215)。工具在收紧安全边界的同时，引发了性能下降或配置不一致的副作用。
3. **第三方模型协议适配与缓存命中率直接影响多模型网关的可用性。**
   - *证据*：OpenCode 集中爆发 GLM 系列 Prompt Cache 随机失效及字段不兼容问题 (#33998, #33490)；Qwen Code 反馈 Anthropic 协议缓存未命中导致成本增加 (#5942) 及 GLM 思考标签泄露 (#6007)。这反映出在接入非原生模型时，协议转换层的细节处理（如缓存前缀、特殊标签过滤）仍是工程难点。
4. **终端 UI (TUI) 渲染在不同操作系统与终端模拟器下的兼容性仍需持续打磨。**
   - *证据*：GitHub Copilot CLI 反馈 alt-screen 视图兼容性与触控板滚动冲突 (#1799, #3957)；Gemini CLI 面临终端 resize 时的闪烁问题 (#21924)；Qwen Code 修复 Linux TUI 滚动刷屏并全面替换 Emoji 以优化对齐 (#5971, #5999)。TUI 作为 CLI 工具的核心交互层，其跨平台渲染稳定性仍是高频维护区域。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 (2026-06-30)

## 1. 今日更新概览
过去 24 小时内，Claude Code 发布了 v2.1.196 版本，主要引入了组织级默认模型支持和会话默认命名优化。社区 Issues 讨论保持活跃，开发者反馈主要集中在沙盒（Sandbox）机制的性能与兼容性、安全过滤器误拦截，以及配额 UI 透明度等问题。

## 2. 版本发布
- **v2.1.196**
  - **组织默认模型支持**：管理员可在组织控制台设置默认模型。当用户未手动选择模型时，`/model` 菜单中会显示为 "Org default"（或 "Role default"）。
  - **会话默认命名优化**：在会话开始时自动生成更具可读性的默认名称，提升多会话管理时的识别效率。

## 3. 社区热点 Issues
以下是过去 24 小时内值得关注的 10 个 Issues，涵盖了高赞需求与高频 Bug：

1. **[FEATURE] 支持在 Claude Desktop 中管理并轻松切换多个账户** ([#18435](https://github.com/anthropics/claude-code/issues/18435))
   - **场景/反应**：社区最高赞需求（616 👍，122 评论），用户强烈呼吁在多账号（如个人与工作账号）之间提供无缝切换能力。
2. **[BUG] Linux 下无法使用 OAuth 连接 GitHub 的远程 MCP server** ([#3433](https://github.com/anthropics/claude-code/issues/3433))
   - **场景/反应**：影响 Linux 环境下使用 MCP 协议对接 GitHub 的开发者，问题已存在较长时间（57 评论），阻碍了外部工具链集成。
3. **[BUG] Cowork: virtiofs FUSE mount 提供截断/陈旧文件** ([#38993](https://github.com/anthropics/claude-code/issues/38993))
   - **场景/反应**：主机侧的文件更改未能实时反映在 VM 中，影响 Cowork 模式下跨环境协同开发的文件一致性。
4. **[BUG] 会话使用量达 71% 时即触发 Rate Limit** ([#23030](https://github.com/anthropics/claude-code/issues/23030))
   - **场景/反应**：Max 计划（$200）用户反馈 `/usage` 显示未满但被限流，引发对计费与限流阈值一致性的疑问。
5. **[BUG] VS Code 扩展忽略 sandbox settings.json 配置** ([#64061](https://github.com/anthropics/anthropics/claude-code/issues/64061))
   - **场景/反应**：IDE 环境下沙盒配置不生效，导致开发者无法在 VS Code 中启用自动批准 Bash 命令的防疲劳机制。
6. **[BUG] 安全过滤器误报拦截无人机遥测/视频 GUI 常规开发** ([#72373](https://github.com/anthropics/claude-code/issues/72373))
   - **场景/反应**：开发者在编写涉及硬件遥测、视频流处理的常规代码时触发 `cyber` 安全拦截，导致会话强制中断（同日有多个类似重复 Issue 如 #72357, #72350）。
7. **[BUG] Sandbox 递归枚举 node_modules 导致内存无界增长与 OOM** ([#72367](https://github.com/anthropics/claude-code/issues/72367))
   - **场景/反应**：开启沙盒模式后，首次对话会深度遍历嵌套的 `node_modules`，导致大型前端/Node 项目直接 OOM 崩溃。
8. **[BUG] Opus 模型专属速率限制未反映在使用计量表中** ([#72372](https://github.com/anthropics/claude-code/issues/72372))
   - **场景/反应**：Pro 计划用户使用 Opus 模型时，UI 进度条显示有剩余容量但实际已触发限流，UX 存在误导。
9. **[BUG] Windows Desktop 交互式 shell 强制使用 PowerShell** ([#72389](https://github.com/anthropics/claude-code/issues/72389))
   - **场景/反应**：Windows 桌面端忽略了 `defaultShell:"bash"` 配置，强制调用 PowerShell，影响跨平台命令兼容性。
10. **[BUG] Sandbox 启动时同步全树目录遍历导致大型工作区挂起** ([#68587](https://github.com/anthropics/claude-code/issues/68587))
    - **场景/反应**：开启沙盒后，每次提示前都会在主线程进行单线程递归目录遍历，且不尊重 `.gitignore`，导致大型项目卡顿数分钟。

## 4. 重要 PR 进展
今日共有 3 个 PR 更新，主要涉及 GCP 部署示例与 Hook 文档完善：

1. **[CLOSED] Gateway GCP example: Agent Platform 品牌重塑和 README 清理** ([#72363](https://github.com/anthropics/claude-code/pull/72363))
   - **内容**：对 `examples/gateway/gcp/` 进行纯文本更新，将 Vertex AI 的相关描述重命名为 Agent Platform，保留首次提及的旧称以兼顾搜索可见性。
2. **[CLOSED] 添加 GCP 上的 Claude Gateway 示例部署资产** ([#72361](https://github.com/anthropics/claude-code/pull/72361))
   - **内容**：补充了在 Google Cloud 上运行 Claude Gateway 的参考部署工件（包含 Terraform 脚本），配合官方文档提供开箱即用的部署资产。
3. **[OPEN] docs(examples/hooks): 补充 Bash tool_input 暴露的额外字段说明** ([#72264](https://github.com/anthropics/claude-code/pull/72264))
   - **内容**：在 Hook 示例代码中增加注释，说明 `PreToolUse` 的 Bash payload 除了 `command` 外，还包含 `run_in_background`、`description` 和 `timeout` 等字段。

## 5. 功能需求归类
基于今日 Issues，用户的功能诉求与反馈可归为以下方向：

- **账户与多租户管理**：强烈需求桌面端多账户配置与快速切换能力（#18435）；组织级模型默认配置已在新版本中落地。
- **沙盒（Sandbox）机制优化**：要求修复沙盒模式下的性能瓶颈（启动遍历挂起 #68587、内存泄漏 #72367），并提升跨平台/跨 IDE 的配置一致性（VS Code #64061、Windows #72389）。
- **配额与计费 UI 透明度**：要求 UI 准确反映特定模型（如 Opus）的独立配额（#72372），并修复使用量显示与实际 Rate Limit 触发阈值不符的问题（#23030）。
- **安全策略调优**：呼吁优化 `cyber` 安全过滤器，减少对无人机、视频流等常规硬件/GUI 开发场景的误拦截（#72373 等）。

## 6. 开发者关注点
- **沙盒性能与大型项目兼容性**：Sandbox 是今日反馈最集中的痛点。当前的同步目录遍历和缺乏对 `.gitignore` 的尊重，使得该功能在包含深层 `node_modules` 或大型代码库的项目中几乎不可用（引发 OOM 或长时间卡顿）。开发者期望沙盒机制能更智能地处理工作区边界。
- **安全拦截对开发流的阻断**：多位开发者报告在处理非恶意但涉及底层系统、遥测或视频处理的代码时，被安全过滤器直接阻断（Session-halted）。这种“一刀切”的误报严重打断了正常的编码心流，开发者希望提供更细粒度的白名单或上下文感知能力。
- **IDE 与桌面端的环境一致性**：开发者注意到 CLI、VS Code 扩展和 Windows Desktop 在解析配置文件（如 `settings.json` 中的沙盒开关和默认 Shell 设置）时存在行为差异，期望各端能严格对齐配置解析逻辑。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-30)

## 1. 今日更新概览
过去 24 小时内，OpenAI Codex 发布了两个 Rust 版本（v0.142.4 和 v0.143.0-alpha.31），社区在 Issues 和 PR 方面保持高度活跃，共更新了 50 个 Issue 和 41 个 PR。当前的讨论与代码提交焦点集中在修复上下文压缩导致的长任务中断、解决 Windows/macOS 平台的性能与资源泄漏问题，以及针对 Git 操作和沙盒安全边界进行密集的底层加固。

## 2. 版本发布
- **[rust-v0.142.4](https://github.com/openai/codex/compare/rust-v0.142.3...rust-v0.142.4)**：常规维护版本，无面向用户的显著变更（Chores）。
- **[rust-v0.143.0-alpha.31](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.31)**：最新的 Alpha 测试版本发布。

## 3. 社区热点 Issues
1. **[Issue #14593](https://github.com/openai/codex/issues/14593) [bug, rate-limits] Token 消耗过快** (626 评论, 276 赞)
   大量 VS Code 插件（Business 订阅）用户反馈 Token 消耗速度异常，引发对速率限制和计费逻辑的广泛讨论。
2. **[Issue #11023](https://github.com/openai/codex/issues/11023) [enhancement, app] 呼吁推出 Linux 桌面端应用** (132 评论, 658 赞)
   社区强烈需求 Linux 原生桌面端，以解决部分用户在 Mac 上遇到的功耗和可用性问题，并期望在 Linux 桌面获得更好的性能。
3. **[Issue #28224](https://github.com/openai/codex/issues/28224) [bug, CLI, performance] SQLite 反馈日志过度写入消耗 SSD 寿命** (107 评论, 407 赞)
   用户发现 CLI 的反馈日志写入量极高（理论可达 640TB/年）。维护者已合并三个 PR 解决了 85% 的冗余日志写入。
4. **[Issue #5957](https://github.com/openai/codex/issues/5957) [bug, context] 自动上下文压缩导致 GPT-5-Codex 丢失任务上下文** (32 评论)
   在执行长任务时，自动压缩（Auto compaction）会导致模型忘记当前任务进度和已编辑的文件，直接中断工作流。
5. **[Issue #30002](https://github.com/openai/codex/issues/30002) [bug, rate-limits, app] 5h 配额重置后服务端过度报告消耗** (29 评论)
   Pro 用户反馈在 5 小时使用限额重置后，仅消耗约 1.35M tokens 就再次触发 `usage_limit_reached`，而此前同一窗口期内可消耗 156M tokens。
6. **[Issue #25744](https://github.com/openai/codex/issues/25744) [bug, mcp, performance] macOS 上 Computer Use/MCP 辅助进程泄漏** (10 评论)
   长时间运行的 Codex 会话会积累未回收的僵尸子进程，导致 macOS 出现 HID 延迟和 WindowServer 卡顿。
7. **[Issue #29492](https://github.com/openai/codex/issues/29492) [bug, windows-os, sandbox] Windows 桌面端异常创建 .git 并重复生成 git 进程** (9 评论)
   在非 Git 项目中，Windows 桌面端会创建空的 `.git` 文件夹并持续轮询生成 `git.exe` 进程，造成资源浪费。
8. **[Issue #30224](https://github.com/openai/codex/issues/30224) [bug, custom-model] 使用特定 Header 时自定义模型不受支持** (57 评论)
   在使用 `X-OpenAI-Internal-Codex-Responses-Lite` 时，API 返回模型不支持错误，影响自定义模型配置用户。
9. **[Issue #17827](https://github.com/openai/codex/issues/17827) [enhancement, TUI] 请求支持可定制的 TUI 状态栏** (20 评论, 78 赞)
   开发者希望像 Claude Code 一样，在终端 UI 底部通过脚本自定义显示 Token 使用量、模型名称、速率限制等实时信息。
10. **[Issue #29922](https://github.com/openai/codex/issues/29922) [enhancement, agent] 请求添加 `monitor` 工具以响应后台事件** (5 评论)
    建议引入事件驱动机制，使 Agent 能在不轮询的情况下被后台事件（如日志更新、CI 构建完成）唤醒。

## 4. 重要 PR 进展
1. **[PR #30618](https://github.com/openai/codex/pull/30618) [fix] 防止 tool-search rollout 污染**
   修复了格式错误的 `tool_search_call.arguments` 被持久化到 rollout 中，导致后续会话和冷启动永久不可用的问题。
2. **[PR #28714](https://github.com/openai/codex/pull/28714) [security] 要求对通用 Git 命令进行审批**
   修复了仅基于 argv 的“只读 Git”分类不安全的问题，防止仓库配置、环境或 TTY 状态使 `git status` 等命令执行恶意操作。
3. **[PR #27914](https://github.com/openai/codex/pull/27914) [security] 对可执行的 Git worktree 辅助工具采取默认拒绝策略**
   防止内部 Git worktree 操作执行由仓库选择的内容过滤器和合并驱动程序，阻断潜在的代码执行路径。
4. **[PR #29470](https://github.com/openai/codex/pull/29470) [security] 拒绝本地 Git 操作的隐式传输**
   防止本地 Git 操作在缺少对象时，通过配置的传输辅助工具（transport helper）跨越网络边界进行隐式拉取。
5. **[PR #30631](https://github.com/openai/codex/pull/30631) [security] 加固 fake shell 审批边界**
   防止模型选择的嵌套路径 shell 在审批分析时被简化为内部命令，从而错误继承内部命令的信任权限。
6. **[PR #30628](https://github.com/openai/codex/pull/30628) [security] 在 Windows 上仅信任系统 PowerShell 解析器**
   防止仓库控制的 `pwsh.exe` 或 `powershell.exe` 在审批和沙盒边界之前执行并伪造 AST 解析结果。
7. **[PR #30632](https://github.com/openai/codex/pull/30632) [perf] 追踪并降低远程首轮延迟**
   在 Core、exec-server RPC 和加密 Noise relay 之间传播 W3C trace context，添加 stage-level spans 并消除 profiling 中发现的可避免等待。
8. **[PR #30627](https://github.com/openai/codex/pull/30627) [fix] 将 elicitations 移至共享的 ElicitationService**
   解决了代码模式工具结果在 MCP elicitation 等待用户输入时提前返回给模型，导致模型在用户确认前继续执行的问题。
9. **[PR #30315](https://github.com/openai/codex/pull/30315) [feature] 为 app-server WebSockets 添加生成的 token 认证**
   为 WebSocket 监听器生成 256-bit URL-safe 连接 token，增强 app-server 的本地连接安全性。
10. **[PR #30493](https://github.com/openai/codex/pull/30493) [feature] 添加可配置的多智能体模式提示文本**
    允许部署方提供自定义的委托策略（delegation policy），替代基于推理努力（reasoning effort）的内置多智能体模式指令。

## 5. 功能需求归类
- **跨平台与桌面端体验**：用户对 Linux 原生桌面端有强烈诉求（[#11023](https://github.com/openai/codex/issues/11023)），同时持续反馈 Windows（[#29492](https://github.com/openai/codex/issues/29492), [#29187](https://github.com/openai/codex/issues/29187)）和 macOS（[#25744](https://github.com/openai/codex/issues/25744)）桌面端的特定性能、线程切换及资源泄漏问题。
- **CLI/TUI 交互增强**：开发者期望提升终端工作流的效率，包括引入可定制的 TUI 状态栏以显示实时指标（[#17827](https://github.com/openai/codex/issues/17827)），以及支持类似移动端的远程控制同步功能（[#27565](https://github.com/openai/codex/issues/27565)）。
- **Agent 事件驱动能力**：提出增加 `monitor` 工具，使 Agent 能够被动响应后台事件（如文件变化、CI 状态），减少主动轮询带来的资源浪费和延迟（[#29922](https://github.com/openai/codex/issues/29922)）。
- **UI 细节控制**：部分用户希望提供禁用自动滚动（autoscroll）的设置，以改善阅读长回复时的视觉体验（[#23517](https://github.com/openai/codex/issues/23517)）。

## 6. 开发者关注点
- **上下文压缩（Context Compaction）的可靠性**：这是当前长任务开发中最突出的痛点。多位开发者报告自动压缩会导致模型“丢失线索”、忘记 AGENTS 规则或任务进度大幅回退（[#5957](https://github.com/openai/codex/issues/5957), [#29356](https://github.com/openai/codex/issues/29356), [#25792](https://github.com/openai/codex/issues/25792)），严重影响复杂代码重构的连续性。
- **资源消耗与配额计算异常**：Token 消耗过快（[#14593](https://github.com/openai/codex/issues/14593)）以及 5 小时配额重置后迅速再次触达限额（[#30002](https://github.com/openai/codex/issues/30002)）引发了对计费准确性的担忧。此外，本地资源消耗问题如 SQLite 日志过度写入（[#28224](https://github.com/openai/codex/issues/28224)）和僵尸进程泄漏（[#25744](https://github.com/openai/codex/issues/25744)）也备受关注。
- **安全边界与沙盒逃逸风险**：从密集的 PR 提交（[#28714](https://github.com/openai/codex/pull/28714), [#27914](https://github.com/openai/codex/pull/27914), [#30631](https://github.com/openai/codex/pull/30631), [#30628](https://github.com/openai/codex/pull/30628)）可以看出，维护者正在系统性地修补 Git 操作、Shell 命令解析和 PowerShell 执行时的沙盒边界问题，重点防范通过仓库配置或隐式网络传输实现的命令注入。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-30)

## 1. 今日更新概览
过去24小时，Gemini CLI 发布了最新的 nightly 构建版本，社区在 Agent 行为控制、Auto Memory 机制优化以及终端 UI 稳定性方面保持了高频讨论。维护者集中处理了推理轮数限制、Thought 泄漏修复以及 Caretaker Agent 基础设施的建设。

## 2. 版本发布
- **v0.51.0-nightly.20260629.gae0a3aa7b**：发布了最新的每日构建版本，包含了近期的核心修复与自动化版本提升。([Release Link](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b) | [PR #28198](https://github.com/google-gemini/gemini-cli/pull/28198))

## 3. 社区热点 Issues
1. **Subagent 状态报告异常**：`codebase_investigator` 在达到最大轮数限制时仍报告成功，掩盖了中断事实，影响复杂代码库调查的可靠性。([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
2. **Generalist Agent 挂起问题**：当 CLI 延迟调用 generalist agent 处理简单任务（如创建文件夹）时会无限期挂起，用户需显式禁用 sub-agents 才能绕过。([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
3. **Auto Memory 安全与日志优化**：Auto Memory 在提取前将本地 transcript 送入模型上下文，存在秘密泄露风险，且后台提取器会无限重试低信号 session。([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
4. **Shell 命令执行假死**：执行简单的 CLI 命令后，界面常卡在 "Waiting input" 状态，尽管命令已在后台完成。([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
5. **AST 感知工具的价值评估**：探讨引入 AST 感知的文件读取和搜索工具，以减少 token 噪音并提高方法边界读取的精确度。([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
6. **工具数量超限导致 400 错误**：当可用工具超过限制（如 128 或 400 个）时，CLI 会触发 API 400 错误，需优化作用域内的工具限制逻辑。([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
7. **模型随意创建临时脚本**：在限制 shell 执行的情况下，模型倾向于在多个目录生成编辑脚本，增加了工作区清理和 commit 的负担。([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
8. **Browser Agent 配置覆盖失效**：Browser Agent 忽略了 `settings.json` 中的全局或项目级配置覆盖（如 `maxTurns`）。([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))
9. **终端调整大小时的性能与闪烁**：需要迁移到 `RenderStatic` 并分批更新历史记录，以解决终端窗口调整大小时的高性能消耗和界面闪烁问题。([#21924](https://github.com/google-gemini/gemini-cli/issues/21924))
10. **防止 Agent 执行破坏性命令**：在复杂 git 操作或数据库维护中，模型偶尔会使用 `git reset --force` 等危险命令，需增加安全护栏。([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))

## 4. 重要 PR 进展
1. **限制单次请求的递归推理轮数**：在核心推理引擎中实施严格的 15 轮递归推理限制，防止无限循环耗尽本地 CPU 和 API 配额。([#28164](https://github.com/google-gemini/gemini-cli/pull/28164))
2. **修复 Thought 泄漏问题**：从清理后的历史轮次中剥离模型的内部推理 thoughts，防止其污染后续对话或导致无限循环独白。([#27971](https://github.com/google-gemini/gemini-cli/pull/27971))
3. **Caretaker Agent Webhook 摄取服务**：实现 Cloud Run Webhook 服务，用于接收 GitHub webhooks、验证签名并将 issue 元数据发布到 Pub/Sub。([#28015](https://github.com/google-gemini/gemini-cli/pull/28015))
4. **修复 at-reference 文件的路径解析**：解决文件系统工具在处理带 `@` 前缀的路径时出现的 "File not found" 关键生产 bug。([#28053](https://github.com/google-gemini/gemini-cli/pull/28053))
5. **强化文件写入沙盒安全**：阻止 auto-accept 模式下对 `.gemini` 和 `.gitconfig` 的写入，防止通过 prompt 注入修改自身配置实现沙盒逃逸。([#28215](https://github.com/google-gemini/gemini-cli/pull/28215))
6. **多行编辑片段显示优化**：在 `EditToolInvocation` 中为隐藏内容的多行编辑片段添加省略号 `...`，提升 UI 可读性。([#28126](https://github.com/google-gemini/gemini-cli/pull/28126))
7. **限制 Web Search 工具延迟**：为 `google_web_search` 增加 120 秒本地超时，并在超时后中止请求，防止 Agent 无限等待。([#27910](https://github.com/google-gemini/gemini-cli/pull/27910))
8. **修复 Trust Dialog 显示逻辑**：修正工作区信任对话框显示与实际运行 hook 相反的问题，防止隐藏执行任意 shell 命令的安全风险。([#27915](https://github.com/google-gemini/gemini-cli/pull/27915))
9. **转发终止信号到子进程**：修复在 CLI 重启期间按 Ctrl+C 无法杀死子进程导致孤儿进程的问题。([#28202](https://github.com/google-gemini/gemini-cli/pull/28202))
10. **排除瞬态 CI 配置文件**：更新 `WorkspaceContext` 路径验证，显式排除 GitHub Actions 动态生成的凭证文件，避免污染工作区上下文。([#28216](https://github.com/google-gemini/gemini-cli/pull/28216))

## 5. 功能需求归类
- **Agent 行为与护栏控制**：用户要求限制 Agent 的破坏性行为（如 `git reset --force`）、控制 sub-agent 的自动调用逻辑，以及解决 Agent 挂起和无限循环问题。
- **Auto Memory 机制优化**：集中在减少低信号 session 的无效重试、处理无效 inbox patches，以及防止敏感信息在提取前进入模型上下文。
- **终端 UI 与交互体验**：需求包括解决终端 resize 时的闪烁、外部编辑器退出后的 buffer 损坏、以及 Shell 命令执行后的假死状态。
- **代码库感知与工具增强**：探索 AST 感知的文件读取和搜索工具，以及优化多行代码编辑片段的 UI 展示。

## 6. 开发者关注点
- **稳定性与资源消耗**：开发者频繁反馈 Agent 陷入无限循环、递归推理耗尽 API 配额、以及 Shell 命令执行后 UI 假死的问题，对本地资源和 API 成本造成负面影响。
- **安全与沙盒边界**：社区对 Auto Memory 的上下文泄露、Trust Dialog 的 hook 隐藏执行、以及 `.gemini` 配置被恶意覆写等安全边界问题保持高度警惕。
- **Sub-agent 调度黑盒**：Sub-agent（如 generalist, browser, codebase_investigator）的状态报告不准确、忽略配置覆盖、以及在 Wayland 环境下的兼容性问题，增加了调试和使用的摩擦力。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-30)

## 1. 今日更新概览
GitHub Copilot CLI 今日发布了 v1.0.66-2 版本，主要增强了插件兼容性、集成设置读写以及 LSP 日志查看功能。社区在过去 24 小时内更新了 28 个 Issues，焦点集中在会话管理异常、终端渲染缺陷以及 Windows 平台下的 MCP 兼容性问题，今日无新的 Pull Requests 更新。

## 2. 版本发布
**v1.0.66-2**
- 允许来自不同插件的同名 skills 共存。
- 允许集成（integrations）读写 CLI 用户设置。
- 支持在 `/lsp logs` 和 `read_agent` 中查看 LSP 服务器日志。
- 在 GitHub 仓库中缺少 `gh` CLI 时提示安装。
- 为提示渲染（prompt rendering）添加 GitHub 附件变体。

## 3. 社区热点 Issues
1. **[终端渲染] 请求关闭 alt-screen 视图** ([#1799](https://github.com/github/copilot-cli/issues/1799))
   用户反馈新引入的 alt-screen 视图引发了较多兼容性问题，请求提供切换回原始终端模式的配置项。该问题获得了 7 个点赞和 10 条评论，社区关注度较高。
2. **[会话管理] Agent 会话无限期卡死无法停止** ([#2364](https://github.com/github/copilot-cli/issues/2364))
   被标记为 Critical 的 Bug。企业版 Copilot Agent 会话在组织仓库中可能无限期运行，仅显示初始计划且无法停止或回复，严重影响工作流。
3. **[企业配置] 请求支持企业级本地 CLI 集中配置** ([#3909](https://github.com/github/copilot-cli/issues/3909))
   企业管理员提出目前无法向开发者的本地 Copilot CLI 集中推送配置（尤其是环境变量），现有的 Secrets 机制仅适用于云端环境，呼吁补齐本地管控能力。
4. **[网络/工具] `web_fetch` 工具调用持续失败** ([#3948](https://github.com/github/copilot-cli/issues/3948))
   用户报告在排除代理和环境变量问题后，`web_fetch` 依然报 `TypeError: fetch failed`，导致 Agent 无法获取网页内容，影响外部信息检索场景。
5. **[MCP/Windows] v1.0.66 启动带参数的 .bat/.cmd MCP 服务器失败** ([#3958](https://github.com/github/copilot-cli/issues/3958))
   这是一个回归 Bug。在 Windows 环境下，v1.0.66 无法启动命令为 `.bat/.cmd` 且带有参数的 stdio MCP 服务器，子进程会立即因语法错误而终止。
6. **[输入/键盘] 请求在外部编辑器中展开粘贴 Token** ([#3936](https://github.com/github/copilot-cli/issues/3936))
   用户希望在使用 `Ctrl+G` 将提示词发送到 `$EDITOR` 时，能将折叠的粘贴 Token（如 `[Paste #N - X lines]`）展开为完整文本，以对齐 Claude Code 的交互体验。
7. **[会话管理] 请求为 Repository-backed 会话提供文件树** ([#3971](https://github.com/github/copilot-cli/issues/3971))
   用户指出 Folder-backed 会话有完整的文件树浏览器，而 Repository-backed 会话仅显示 Git Changes 视图，请求统一侧边栏的文件浏览能力。
8. **[MCP/Windows] MCP OAuth 重新认证反复失败** ([#3973](https://github.com/github/copilot-cli/issues/3973))
   在 Windows 上，当缓存的 loopback 重定向端口位于系统排除的 TCP 端口范围内时，HTTP MCP 服务器的 OAuth 重新认证会陷入死循环，需手动清理缓存。
9. **[终端渲染] MBP 触控板滚动行为异常** ([#3957](https://github.com/github/copilot-cli/issues/3957))
   在 Ghostty 终端下，使用触控板滚动窗口时，CLI 会将其误识别为选择历史提示词，导致无法正常查看上方消息，获得 4 个点赞。
10. **[会话管理] `/chronicle standup` 因云端查询报错而失败** ([#3904](https://github.com/github/copilot-cli/issues/3904))
    当云端会话存储返回 `CloudQueryError` 时，即使本地有回退数据，`/chronicle standup` 命令依然会执行失败，本地容错机制未完全生效。

*(注：今日无 Pull Requests 更新，故省略“重要 PR 进展”部分)*

## 4. 功能需求归类
- **会话管理与组织优化**：用户希望提升多会话环境下的管理效率。具体诉求包括：为 repository-backed 会话添加文件树浏览器 ([#3971](https://github.com/github/copilot-cli/issues/3971))、在会话列表中增加计划状态指示器 ([#3969](https://github.com/github/copilot-cli/issues/3969))、支持用户自定义标签以便搜索和过滤 ([#3970](https://github.com/github/copilot-cli/issues/3970))，以及显示会话的保留/过期日期 ([#3963](https://github.com/github/copilot-cli/issues/3963))。
- **企业级配置与管控**：企业用户呼吁支持通过服务器集中下发本地 CLI 配置和环境变量 ([#3909](https://github.com/github/copilot-cli/issues/3909))，以弥补当前仅支持云端环境管理的不足，满足合规与统一开发环境的需求。
- **终端交互与渲染体验**：用户请求提供关闭 alt-screen 视图的选项 ([#1799](https://github.com/github/copilot-cli/issues/1799))、修复触控板滚动被误识别的问题 ([#3957](https://github.com/github/copilot-cli/issues/3957))、解决删除文本后的视觉残留（ghost characters）问题 ([#3959](https://github.com/github/copilot-cli/issues/3959))，以及优化大段文本粘贴在外部编辑器中的展开逻辑 ([#3936](https://github.com/github/copilot-cli/issues/3936))。

## 5. 开发者关注点
- **Windows 平台的兼容性回归**：v1.0.66 在 Windows 环境下暴露出明显的兼容性问题。特别是启动带参数的 `.bat/.cmd` MCP 服务器失败 ([#3958](https://github.com/github/copilot-cli/issues/3958))，以及 MCP OAuth 端口缓存导致的重新认证失败 ([#3973](https://github.com/github/copilot-cli/issues/3973))，直接影响了 Windows 用户的 MCP 集成与外部工具调用体验。
- **会话状态与生命周期异常**：多个 Critical 级别的 Bug 指向会话管理模块。包括 Agent 会话无限期卡死无法停止 ([#2364](https://github.com/github/copilot-cli/issues/2364))、孤儿会话无法清理 ([#3600](https://github.com/github/copilot-cli/issues/3600))，以及本地与云端会话同步时的静默失败 ([#2654](https://github.com/github/copilot-cli/issues/2654)) 和查询报错 ([#3904](https://github.com/github/copilot-cli/issues/3904))，表明会话状态的可靠性仍需加强。
- **终端 UI 渲染与输入冲突**：TUI（终端用户界面）的渲染和输入捕获存在痛点。包括 alt-screen 带来的副作用 ([#1799](https://github.com/github/copilot-cli/issues/1799))、触控板滚动冲突 ([#3957](https://github.com/github/copilot-cli/issues/3957))、以及鼠标移动被渲染为乱码字符 ([#3972](https://github.com/github/copilot-cli/issues/3972))，反映出底层终端适配和事件监听逻辑在不同终端模拟器中仍需进一步打磨。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### 今日更新概览
过去 24 小时内，Kimi Code CLI 仓库无新版本发布与 PR 提交。社区动态主要围绕 1 个新增的 Issue 展开，用户针对移动端与桌面端的文本输入交互逻辑提出了具体的优化诉求。

### 版本发布
今日无新版本发布。

### 社区热点 Issues
今日共更新 1 条 Issue，主要关注多端输入体验：
- **优化回车与换行交互逻辑**：用户指出当前移动端按 Enter 键会直接发送 Prompt，导致在手机上进行多行编辑极不实用；同时桌面端需使用 Shift+Enter 换行，体验不够直观。建议重新评估并优化多端环境下的发送与换行快捷键逻辑。([#2479](https://github.com/MoonshotAI/kimi-cli/issues/2479))

### 重要 PR 进展
今日无新增或更新的 Pull Request。

### 功能需求归类
基于今日社区反馈，用户需求主要集中在以下方向：
- **多端交互与输入体验**：期望改进移动端和桌面端的键盘输入行为（如回车发送与换行的快捷键映射），降低多行 Prompt 编辑的摩擦成本。

### 开发者关注点
- **跨端文本输入的痛点**：开发者在移动端使用工具时，受限于默认的“回车即发送”逻辑，难以进行复杂的 Prompt 编写与修改；桌面端的换行操作也被认为存在额外的操作成本。这反映出在 CLI 或客户端的多端适配中，基础的文本输入交互细节（如快捷键映射与多行编辑支持）是直接影响用户实际使用体验的关键因素。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-30)

## 1. 今日更新概览
今日 OpenCode 社区活跃度较高，核心开发团队正集中推进 V2 架构迁移（特别是 TUI 客户端重构与 MCP OAuth 并发处理），并持续完善插件可观测性与 MCP 协议支持。同时，社区反馈了大量关于特定模型（如 GLM 系列）缓存失效、本地 Provider 兼容性以及 Desktop 客户端会话管理的实际问题。

## 2. 版本发布
今日无新版本发布。

## 3. 社区热点 Issues
以下挑选了今日讨论较多或影响核心使用体验的 10 个 Issue：

- **自动压缩死循环导致停止响应**：[#30680](https://github.com/anomalyco/opencode/issues/30680) 报告 OpenCode 在空文件夹中也会陷入自动压缩（auto-compaction）循环，过度消耗 Token 并最终停止生成响应。
- **本地 Ollama Provider 挂起**：[#22132](https://github.com/anomalyco/opencode/issues/22132) 指出在使用 `@ai-sdk/openai-compatible` 配置本地 Ollama 时，即使是简单 Prompt 也会导致 OpenCode 挂起，但直接调用 `/v1/chat/completions` 正常。
- **GLM-5.2 Prompt Cache 随机失效**：[#33998](https://github.com/anomalyco/opencode/issues/33998) 反馈通过 OpenCode Go 网关调用 GLM-5.2 时，在 System Prompt 完全稳定的情况下，缓存 Token 数会随机掉落至约 500。
- **GLM-5.1 Prompt Cache 掉落至 0**：[#31348](https://github.com/anomalyco/opencode/issues/31348) 报告类似上述问题，切换至 GLM-5.1 后缓存读取随机归零，导致长对话工作流中出现意外的成本激增。
- **GLM-5.2 拒绝 `instructions` 字段**：[#33490](https://github.com/anomalyco/opencode/issues/33490) 指出 OpenCode Go 转发 GLM-5.2 请求时，因包含 `instructions` 字段被 Provider 拒绝，需进行字段过滤或兼容处理。
- **GitHub Copilot Provider 鉴权失效**：[#33696](https://github.com/anomalyco/opencode/issues/33696) 报告在清除缓存并重新授权 GitHub Copilot 后，仍无法发现可用模型，Provider 处于损坏状态。
- **TUI 迁移至新 Promise Client**：[#34359](https://github.com/anomalyco/opencode/issues/34359) 追踪 V2 TUI 从遗留的 `@opencode-ai/sdk/v2` 迁移至新生成的 `@opencode-ai/client` 的进度，涉及大量调用点重构。
- **V2 MCP OAuth Token 刷新竞态条件**：[#34523](https://github.com/anomalyco/opencode/issues/34523) 讨论了在 V2 架构下，跨位置/跨进程并发刷新 MCP OAuth Token 时可能引发的竞态问题，目前作为后续硬化任务追踪。
- **Desktop 重置配置后会话丢失**：[#34471](https://github.com/anomalyco/opencode/issues/34471) 报告在 macOS 上重置 Desktop Profile 以修复中断问题后，Desktop 和 Web 端的历史会话记录全部丢失（尽管本地 `opencode.db` 中数据仍存在）。
- **显示包含子 Agent 的 Session 总成本**：[#4925](https://github.com/anomalyco/opencode/issues/4925) 建议在使用子 Agent 运行 Session 时，右侧成本统计应包含所有 Agent 消耗的 Token 总成本，而非仅统计主 Agent。

## 4. 重要 PR 进展
以下挑选了今日更新或合并的 10 个重要 Pull Request：

- **添加 LLM 与 Session 可观测性 Hooks**：[#33523](https://github.com/anomalyco/opencode/pull/33523) 为插件 SDK 增加了四个可观测性 Hook，允许插件监听真实的 LLM 流、工具执行和 Agent 运行状态。
- **核心支持 MCP Prompts**：[#34531](https://github.com/anomalyco/opencode/pull/34531) 在核心 MCP 客户端封装中暴露了 Prompt 定义和 `getPrompt` 方法，实现了跨连接服务器的 `MCP.prompts()` 调用。
- **支持 `--model free` 解析免费模型**：[#34060](https://github.com/anomalyco/opencode/pull/34060) 在 `opencode run` 和 TUI 中增加 `--model free` 参数，可随机选择 OpenCode Zen 零成本模型进行推理。
- **暴露 Shell API 组**：[#34534](https://github.com/anomalyco/opencode/pull/34534) 将生成的 Client Shell 组暴露为复数 `api.shells`，并将 TUI 的 Shell 列表/移除操作迁移至新 Client。
- **修复 TUI 中断后 Prompt 排队问题**：[#34530](https://github.com/anomalyco/opencode/pull/34530) 修复了全屏 TUI 在当前 Session 仍在处理时，错误接受新普通 Prompt 的问题，改为将其加入队列。
- **清理 MCP stdio 子进程**：[#34525](https://github.com/anomalyco/opencode/pull/34525) 确保在关闭 SDK 客户端或传输层之前，终止 stdio MCP 传输的所有后代进程，防止僵尸进程。
- **将 models.dev modes 暴露为独立模型**：[#34521](https://github.com/anomalyco/opencode/pull/34521) 将 models.dev 的实验性模式（modes）映射为独立的模型 ID，保留模式请求覆盖和特定成本计算。
- **修复 V2 单元测试失败**：[#34527](https://github.com/anomalyco/opencode/pull/34527) 修复了 `@opencode-ai/core` 中导致 Linux 和 Windows 单元测试变红的两个独立根本原因（包括过时的 shell 期望和位置状态隔离问题）。
- **添加配置的 Web Servers 支持**：[#34528](https://github.com/anomalyco/opencode/pull/34528) 允许 Web 应用从 Vite 环境变量或注入配置中解析远程服务器，使托管实例无需重新构建即可预加载 OpenCode 服务器。
- **在 Promise Client 中暴露 fs read**：[#34504](https://github.com/anomalyco/opencode/pull/34504) 为生成的 Promise Client 增加对二进制 `Uint8Array` 响应的支持，并暴露 `files.read` 方法。

## 5. 功能需求归类
从今日的 Issues 和 PR 中，可以归纳出以下三个主要的功能演进方向：

- **成本监控与可观测性**：用户和开发者对 Token 消耗的精确度要求提高，需求包括统计子 Agent 成本（[#4925](https://github.com/anomalyco/opencode/issues/4925)），以及通过插件 Hook 获取 LLM 流和工具执行的底层观测数据（[#33523](https://github.com/anomalyco/opencode/pull/33523)）。
- **插件系统与 Skill 配置增强**：社区希望更精细地控制 Skill 的行为，例如在 `SKILL.md` 中通过 `disable-model-invocation: true` 阻止模型自动调用特定 Skill（[#11972](https://github.com/anomalyco/opencode/issues/11972), [#34498](https://github.com/anomalyco/opencode/issues/34498)），并要求向插件暴露 worktree 的生命周期事件（[#15680](https://github.com/anomalyco/opencode/issues/15680)）。
- **V2 架构与上下文管理**：V2 重构正在深入，重点包括 TUI 向新 Promise Client 迁移（[#34359](https://github.com/anomalyco/opencode/issues/34359)）、引入 Session 作用域的键控上下文贡献机制（[#34380](https://github.com/anomalyco/opencode/issues/34380)），以及完善 V2 配置更新端点（[#34450](https://github.com/anomalyco/opencode/issues/34450)）。

## 6. 开发者关注点
- **模型网关与 Provider 稳定性**：今日大量反馈集中在模型兼容性上。特别是 GLM 系列（5.1/5.2）在 OpenCode Go 网关下存在 Prompt Cache 随机失效及字段（如 `instructions`）不兼容问题，直接导致成本异常；此外，本地 Ollama 挂起和 GitHub Copilot 鉴权失效也反映出多 Provider 适配仍需打磨。
- **Desktop 客户端状态与会话管理**：Desktop 端出现了状态指示器异常（工具加载失败导致红点常驻，[#34532](https://github.com/anomalyco/opencode/issues/34532)）以及重置 Profile 后历史会话丢失（[#34471](https://github.com/anomalyco/opencode/issues/34471)）的问题，影响了桌面端用户的连续工作体验。
- **V2 重构期的并发与状态隔离**：在推进 V2 架构（如 MCP OAuth、TUI 迁移）的过程中，开发者高度关注跨进程/跨位置的 Token 刷新竞态条件（[#34523](https://github.com/anomalyco/opencode/issues/34523)），以及底层位置状态（Location state）隔离的单元测试修复（[#34527](https://github.com/anomalyco/opencode/pull/34527)），确保重构过程中的系统稳定性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### 今日更新概览
过去 24 小时内，Qwen Code 社区主要围绕 Daemon 后台自动化、TUI/Web Shell 多端渲染优化以及多模型兼容性修复展开讨论与代码提交。社区对长任务执行的稳定性（如流式超时、内存溢出）及上下文成本控制表现出较高关注，相关修复 PR 正在密集推进中。

### 社区热点 Issues
1. **MCP 安装过程内存溢出闪退**：在 macOS 环境下安装特定 MCP 时触发 GC 分配失败导致进程闪退，影响工具链扩展。[#6004](https://github.com/QwenLM/qwen-code/issues/6004)
2. **流式输出超时与卡死**：升级至 v0.19.3 后频繁出现 `No stream activity for 120000ms` 错误，导致长文本生成中断。[#5975](https://github.com/QwenLM/qwen-code/issues/5975)
3. **Anthropic 缓存未命中导致成本增加**：路由至 Anthropic 协议端点时，由于前缀和断点处理不当，导致 prompt-cache 命中率下降，增加 API 调用成本。[#5942](https://github.com/QwenLM/qwen-code/issues/5942)
4. **支持配置上下文压缩模型**：提议允许配置独立的 `compactionModel`，避免使用昂贵的主模型进行长上下文压缩，以优化成本。[#5956](https://github.com/QwenLM/qwen-code/issues/5956)
5. **Yolo 模式异常回退至 Plan 模式**：在 Yolo 模式下执行任务时，Agent 意外切换回 Plan 模式并请求权限，破坏了自动化工作流。[#5970](https://github.com/QwenLM/qwen-code/issues/5970)
6. **Linux TUI 窗口滚动刷屏**：在 Linux 环境下进行多轮对话时，TUI 窗口会从会话开头持续滚动至最新位置，造成视觉刷屏。[#5971](https://github.com/QwenLM/qwen-code/issues/5971)
7. **新版本隐藏了 Agent 读取的文件名**：UI 降级问题，`read_file` 操作仅显示读取数量而不显示具体文件名，降低了执行过程的可解释性。[#6014](https://github.com/QwenLM/qwen-code/issues/6014)
8. **GLM-5.2 思考过程泄露**：使用 OpenAI 兼容协议调用 GLM-5.2 时，内部思考文本和 `</think>` 标签作为正常输出泄露。[#6007](https://github.com/QwenLM/qwen-code/issues/6007)
9. **为 `/loop` 命令添加自主模式**：提议支持无参数的 `/loop` 命令，使 Agent 能够在无干预情况下自主维护进行中的任务（如修复 CI）。[#5990](https://github.com/QwenLM/qwen-code/issues/5990)
10. **`/auth` 配置修改未在新会话生效**：在会话中通过 `/auth` 修改模型供应商配置后，新开启的会话仍报 401 认证错误。[#5979](https://github.com/QwenLM/qwen-code/issues/5979)

### 重要 PR 进展
1. **修复 ACP `read_file` 本地根目录处理**：确保 ACP 支持的 `read_file` 保留对技能指令、临时输出等托管本地根目录的读取行为。[#6021](https://github.com/QwenLM/qwen-code/pull/6021)
2. **实现 `/loop` 自主模式**：为无参数的 `/loop` 添加自定步调的自主循环，支持固定间隔的自主循环模式。[#5991](https://github.com/QwenLM/qwen-code/pull/5991)
3. **QQ Bot 流式输出改进**：重构 QQ Bot 流式行为，引入 2 秒空闲刷新机制，移除 2000 字符限制，并修复 Markdown 表格检测。[#5902](https://github.com/QwenLM/qwen-code/pull/5902)
4. **TUI 渲染全面替换 Emoji 为 Unicode 符号**：清理所有 TUI 渲染路径，将宽度为 2 的 Emoji 替换为宽度为 1 的 Unicode 文本符号，优化终端对齐。[#5999](https://github.com/QwenLM/qwen-code/pull/5999)
5. **默认启用虚拟化终端历史**：为交互式 CLI 会话默认开启应用内可滚动的历史视口，优化长会话浏览体验。[#5738](https://github.com/QwenLM/qwen-code/pull/5738)
6. **修复 `/auth` 环境变量优先级**：确保通过 `/auth` 修改的环境变量优先于系统环境变量，解决新会话 401 认证错误。[#5980](https://github.com/QwenLM/qwen-code/pull/5980)
7. **Web Shell 移动端侧边栏抽屉**：为移动端视口引入覆盖式抽屉模式，解决小屏幕下无法切换会话的问题。[#6003](https://github.com/QwenLM/qwen-code/pull/6003)
8. **修复上下文压缩阈值计算**：在计算压缩阈值时减去保留的输出 token，避免 `max_tokens` 扩大时导致 API 400 错误。[#5957](https://github.com/QwenLM/qwen-code/pull/5957)
9. **清理子代理结果标签**：在子代理最终结果反馈给父代理前，清理 `<analysis>` 等内部标签，防止破坏 Daemon UI 的 Markdown 渲染。[#6027](https://github.com/QwenLM/qwen-code/pull/6027)
10. **支持 `/acp` 会话流断点续传**：将 `/acp` Streamable-HTTP 会话事件流接入 Daemon 的事件重放引擎，支持通过 `Last-Event-ID` 恢复连接。[#5852](https://github.com/QwenLM/qwen-code/pull/5852)

### 功能需求归类
- **Daemon 与后台自动化**：用户期望增强 Daemon 的后台管理能力，包括支持热重载 Channel ([#6010](https://github.com/QwenLM/qwen-code/issues/6010))、通过 `qwen serve --channel` 管理 Channel workers ([#5976](https://github.com/QwenLM/qwen-code/issues/5976))，以及赋予 `/loop` 命令无干预的自主执行能力 ([#5990](https://github.com/QwenLM/qwen-code/issues/5990))。
- **多端 UI/UX 适配**：针对 Web Shell 和 TUI 的交互优化需求集中，包括 Web Shell 移动端会话列表适配 ([#6000](https://github.com/QwenLM/qwen-code/issues/6000))、TUI 复制代码时排除行号 ([#6024](https://github.com/QwenLM/qwen-code/issues/6024))，以及改善 TUI 滚动和渲染表现 ([#5971](https://github.com/QwenLM/qwen-code/issues/5971), [#5941](https://github.com/QwenLM/qwen-code/issues/5941))。
- **上下文与成本优化**：开发者关注长上下文带来的 API 成本，提出支持配置独立的压缩模型 ([#5956](https://github.com/QwenLM/qwen-code/issues/5956))，并反馈 Anthropic 协议下的 prompt-cache 命中逻辑缺陷 ([#5942](https://github.com/QwenLM/qwen-code/issues/5942))。

### 开发者关注点
- **长任务与流式输出稳定性**：流式输出超时（`Streaming setup timeout`、`No stream activity`）和 MCP 安装时的内存溢出闪退是近期高频痛点，直接影响复杂任务和长文本生成的成功率。
- **多模型兼容与协议适配**：在接入第三方模型（如 GLM-5.2、Anthropic）时，暴露出思考标签泄露、缓存前缀处理不当导致成本增加、以及子代理 Token 计算不准确等协议适配细节问题。
- **会话状态与配置持久化**：运行时配置修改（如 `/auth` 切换供应商）未能正确持久化至新会话，以及 Yolo 模式意外回退、Daemon 记忆系统未正常保存等问题，影响了多会话和后台自动化场景的连贯性。

</details>