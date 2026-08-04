# AI CLI 工具社区动态日报 2026-08-04

> 生成时间: 2026-08-04 01:00 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具横向对比分析报告 | 2026-08-04

---

## 1. 今日横向概览

今日四个主流 AI CLI 工具均保持活跃更新。Claude Code 发布 v2.1.221 小版本，新增 VSCode Focus View，同时社区围绕跨会话通信、macOS 网络错误和 GitHub 集成可靠性展开激烈讨论。OpenAI Codex 发布两个 Rust alpha 版本，50 个 Issue 和 36 个 PR 获得更新，Windows 平台稳定性与模型兼容性问题是主要焦点。Kimi Code 无版本发布，但 27 个 Issue 和 33 个 PR 被更新，Web/TUI 内存泄漏和会话恢复后状态丢失成为社区高频反馈。OpenCode 发布 v1.18.12 修复 Azure 推理和桌面卡顿，同时 50 个 Issue 和 50 个 PR 被更新，连接错误处理和 UI 交互细节改进是核心方向。

---

## 2. 各工具活跃度对比

| 工具 | 过去 24 小时更新 Issues 数 | 过去 24 小时更新 PR 数 | 版本发布 | 热点 Issues 数（本文选取） | 重要 PR 数（本文选取） |
|------|---------------------------|------------------------|----------|---------------------------|------------------------|
| Claude Code | 未明确（报告选取10个） | 未明确（报告选取2个） | 1（v2.1.221） | 10 | 2 |
| OpenAI Codex | 50 | 36 | 2（rust-v0.147.0-alpha.6, rust-v0.147.0-alpha.1.2） | 10 | 10 |
| Kimi Code | 27 | 33 | 0 | 10 | 10 |
| OpenCode | 50 | 50 | 1（v1.18.12） | 10 | 10 |

**说明**：Claude Code 报告未提供 Issue/PR 总数，仅列出热点。OpenCode 和 Codex 今日更新数量最高，Kimi Code 紧随其后。

---

## 3. 共同出现的功能方向

以下需求在多个工具社区中同时出现，构成跨工具信号：

| 共同方向 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **跨会话/会话持久化** | Claude Code（#24798、#76727）、OpenCode（#16077）、Kimi Code（#2582 重连后状态丢失） | 希望在多个独立会话间共享状态、任务编排，或重启后恢复上下文。 |
| **连接错误处理与重试透明性** | Claude Code（#5674 ECONNRESET）、OpenCode（#40319 持续重试无错误提示）、Kimi Code（#2025 429 限流无反馈） | 用户要求网络或限流错误时有明确提示，而非无声挂起或无限重试。 |
| **模型兼容性与上下文窗口限制** | OpenAI Codex（#35097 模型标记错误、#31860 上下文窗口限制）、OpenCode（v1.18.12 修复 Azure GPT-5.5+ 推理）、Kimi Code（#2570 多步 Agent 卡住与 TTFT） | 新模型（如 GPT-5.5+、DeepSeek V4）引入兼容性问题，且上下文窗口实际可用规格低于宣称。 |
| **UI 性能与稳定性** | Claude Code（新增 Focus View 减少视觉干扰）、Kimi Code（#2548 DOM 泄露、#2556 TUI 内存泄漏）、OpenCode（#38932 粘贴长文本挂起、#20600 随机滚动） | 长会话、大文本粘贴、图表渲染等场景下出现卡顿、内存泄漏或滚动异常。 |
| **成本/配额透明化** | Claude Code（#13585 CLI 配额查询、#65687 空闲 Token 消耗）、OpenAI Codex（#33685 限额消耗速度质疑） | 用户希望在 CLI 中直接查看 API 使用量，并对意外消耗有预警机制。 |
| **权限控制与执行干预** | Claude Code（#30492 实时干预）、OpenCode（#13715 子 agent 权限挂起）、Kimi Code（#2582 重连后 yolo 模式丢失） | 在执行过程中动态调整行为、自动审批模式，或解决嵌套 agent 权限请求阻塞问题。 |

---

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Kimi Code | OpenCode |
|------|-------------|--------------|-----------|----------|
| **功能侧重** | VSCode 深度集成 + GitHub 协作 | 多代理架构 + 高级模型能力 | Web/TUI 双端 + Agent 自定义 | 桌面端 + 插件生态 + 企业级兼容 |
| **目标用户** | 重度 VSCode 用户、GitHub 协作开发者 | 需要多 agent 编排、高上下文窗口的 Pro 用户 | 偏好轻量 CLI 和 Web 端、重视隐私的开发者 | 企业级桌面工作流、Azure/OAuth 用户 |
| **技术路线** | 沙箱凭证掩码、Focus View 减少干扰 | Rust 构建、MCP 客户端一致性、双 WebSocket 传输 | Agent Core v2 引擎、ACP 服务器、--effort 参数 | 插件钩子系统、请求级模型切换、浏览器预览 |
| **近期痛点** | macOS 网络错误、GitHub 集成失效 | Windows 卡顿、WSL 兼容性、模型上下文限制 | 内存泄漏、429 无声错误、重连状态丢失 | 连接不可达时挂起、嵌套 agent 权限死锁 |
| **社区诉求特点** | 高度关注“编排”与“控制” | 强调“模型能力”与“平台稳定性” | 聚焦“性能”与“自定义” | 重视“兼容性”与“UI 体验” |

---

## 5. 社区活跃度记录

- **OpenCode**：今日更新 50 个 Issue 和 50 个 PR，并发布 v1.18.12，在数量上领先。维护者响应较快，多个 PR 已合并或标注状态。
- **OpenAI Codex**：更新 50 个 Issue 和 36 个 PR，发布 2 个 alpha 版本，PR 涉及多种架构改进（双 WebSocket、MCP 测试、Git 进程树等），维护者回应积极。
- **Kimi Code**：更新 27 个 Issue 和 33 个 PR，无版本发布，但 PR 数量充沛，且多个 PR 关联社区 Issue（如修复设备头转发、Mermaid 溢出），体现对反馈的跟进。
- **Claude Code**：仅发布 1 个小版本，热点 Issue 数量虽少但评论和点赞数高（如 #13585 有 115 赞），社区讨论深度强，但维护者今日未在报告中体现明显回应。

**活跃度排序**：OpenCode > OpenAI Codex > Kimi Code > Claude Code（基于 Issue/PR 更新数量）。

---

## 6. 有证据支撑的观察

1. **跨会话管理是当前最突出的跨工具痛点**：Claude Code 的 #24798（跨会话通信）和 #76727（跨会话协调）共获得 70+ 评论，OpenCode 的 #16077（持久会话记忆）也持续获得关注，Kimi Code 的 #2582（重连后权限丢失）则从反面印证了同一问题。用户对“会话连续性”和“多会话编排”的需求正在从个例演变为普遍诉求。

2. **连接错误处理缺乏透明性**：Claude Code 的 macOS ECONNRESET（#5674，52 评论）、OpenCode 的不可达 provider 无错误提示（#40319）、Kimi Code 的 429 限流无声挂起（#2025）均指向同一问题：当网络或 API 出现异常时，工具未提供用户可见的反馈，导致任务假死。这已成为影响信任度的关键短板。

3. **模型兼容性随新模型发布频繁出现回归**：OpenAI Codex 今日出现 `gpt-5.6-luna` 被标记为 MultiAgent V1 导致调用失败（#35097），OpenCode 修复 Azure GPT-5.5+ 推理请求失败（v1.18.12），Kimi Code 的多步 Agent 卡住与 TTFT 过长（#2570）也涉及模型行为差异。新模型引入的频率加快，导致 CLI 工具需要更快的适配周期。

4. **UI 性能问题在 Web/TUI 端集中爆发**：Kimi Code 报告了 DOM 泄漏（#2548）、TUI 内存泄漏（#2556）和 Mermaid 溢出（#2577），OpenCode 报告了粘贴长文本挂起（#38932）和随机滚动（#20600）。这些均指向当会话内容增长或用户输入复杂时，UI 渲染层未做充分优化，影响长任务体验。

5. **成本透明化需求从“希望”变为“必须”**：Claude Code 的配额查询请求（#13585）获得 115 赞，是本文所有 Issues 中点赞数最高的；OpenAI Codex 的限额消耗速度质疑（#33685）也有 25 条评论；Kimi Code 虽未直接提及，但其 Token 计数服务 PR（#2563）反映了类似方向。用户对 API 费用的敏感度正在上升，CLI 工具需提供内置的计量与预警能力。

---

*以上分析基于 2026-08-04 各工具 GitHub 社区公开数据，未涉及内部决策或未公开信息。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，作为专注于AI开发工具的技术分析师，这是根据您提供的GitHub数据生成的2026-08-04 Claude Code社区动态日报。

---

# Claude Code 社区动态日报 | 2026-08-04

## 今日更新概览

Claude Code 今日发布了 v2.1.221 小版本更新，新增了 VSCode 的“Focus View”功能。社区讨论热度集中在跨会话协作、网络连接错误和 GitHub 集成问题上，其中关于“跨会话通信”和“实时干预”的功能请求获得了大量关注。

## 版本发布

### v2.1.221
- **新增【VSCode】Focus View（聚焦视图）**：这是一个可切换的聊天菜单，通过 `Ctrl+Alt+F` 或“Claude Code: Toggle Focus view”命令，可将工具活动隐藏在每个回合的可展开摘要中，并带有实时运行指示器，减少视觉干扰。
- **新增沙箱凭证文件模式**：为 Linux 系统增加了 `mode: "mask"` 支持，用于隐藏沙箱凭证文件。
- [查看发布详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)

## 社区热点 Issues

1. **跨会话通信与工作流协调** (#24798)
   - 现象：用户提出在运行多个隔离的 Claude Code 会话时，缺乏一种机制来编排有依赖关系的高级流程。
   - 影响：大型项目中并行处理不同模块时，无法实现跨会话的状态共享和任务调度。
   - 社区反应：61条评论，是目前最活跃的讨论之一。
   - [查看详情](https://github.com/anthropics/claude-code/issues/24798)

2. **macOS 网络连接 ECONNRESET 错误** (#5674)
   - 现象：在 macOS 上持续出现 `ECONNRESET` 错误，导致连接中断和任务失败，但同一网络下的 Windows 和 Linux 服务器无此问题。
   - 影响：严重影响了 Mac 用户正常使用 Claude Code 进行长时间任务。
   - 社区反应：52条评论，48个赞，表明这是一个普遍且严重的痛点。
   - [查看详情](https://github.com/anthropics/claude-code/issues/5674)

3. **GitHub 连接器无法访问仓库内容** (#71542)
   - 现象：GitHub 连接器成功连接后，Claude 无法访问任何仓库（公开或私有）的内容，被社区标记为近期回归问题。
   - 影响：完全阻断用户通过 GitHub 集成进行代码分析、审查等操作。
   - 社区反应：48条评论，42个赞，问题影响范围广。
   - [查看详情](https://github.com/anthropics/claude-code/issues/71542)

4. **实时干预：在执行过程中重定向 Claude** (#30492)
   - 现象：用户希望在 Claude Code 执行复杂多步骤工作流（如管道、多文件重构）时，能有一个“优先消息通道”来实时调整或纠正其行为。
   - 影响：当前缺乏在执行过程中进行干预的机制，导致任务失败后需要从头开始。
   - 社区反应：31条评论，60个赞，反映了用户对更高控制力的需求。
   - [查看详情](https://github.com/anthropics/claude-code/issues/30492)

5. **CLI 中增加配额信息查询** (#13585)
   - 现象：用户请求在 Claude Code CLI 中直接提供 API 使用配额信息，以便更好地管理成本。
   - 影响：开发者无法在终端内便捷地了解当前使用情况，存在成本超支风险。
   - 社区反应：24条评论，高达115个赞，是社区呼声最高的功能请求之一。
   - [查看详情](https://github.com/anthropics/claude-code/issues/13585)

6. **Windows 桌面应用崩溃** (#80468)
   - 现象：Claude Desktop 应用在最新更新后，在 Windows 上频繁崩溃。
   - 影响：直接影响 Windows 桌面用户的正常使用。
   - 社区反应：12条评论，影响面较广。
   - [查看详情](https://github.com/anthropics/claude-code/issues/80468)

7. **空闲时意外消耗 Token** (#65687)
   - 现象：在 Claude Code 处于非活动状态时，令牌使用量出现异常峰值和持续消耗。
   - 影响：导致用户账单出现意外费用，且难以排查原因。
   - 社区反应：10条评论，是一个值得关注的成本控制问题。
   - [查看详情](https://github.com/anthropics/claude-code/issues/65687)

8. **跨会话协调** (#76727)
   - 现象：当多个独立启动的 Claude Code 会话针对同一个仓库和共享工作树时，缺乏第一方协调机制。
   - 影响：用户只能依赖自定义的 `PreToolUse` hook 来避免冲突，但这种方法存在缺陷。
   - 社区反应：9条评论，与 #24798 呼应，共同指向“多会话管理”的痛点。
   - [查看详情](https://github.com/anthropics/claude-code/issues/76727)

9. **`--continue` 无法找到 `-p` 创建的会话** (#82536)
   - 现象：使用 `-p` 参数创建的会话，无法通过 `--continue` 命令恢复。
   - 影响：破坏了用户的工作流连续性，导致任务中断后无法恢复。
   - 社区反应：5条评论，是一个影响具体用法的 Bug。
   - [查看详情](https://github.com/anthropics/claude-code/issues/82536)

10. **GitHub 集成写入操作失败** (#80874)
    - 现象：GitHub 连接器授权后，所有写入操作都返回 `403 Resource not accessible by integration` 错误。
    - 影响：用户无法通过 Claude Code 创建 PR、提交 Issue 等协作操作。
    - 社区反应：3条评论，与 #71542 一起构成 GitHub 集成的双重重磅问题。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80874)

## 重要 PR 进展

1. **[文档] 完善插件开发的 MessageDisplay 流式语义** (#83374)
   - 内容：为插件开发文档补充了 `MessageDisplay` 事件的支持说明，包括触发描述、事件指导和快速参考表。
   - 影响：提高了插件开发文档的完整性，降低了开发者接入该事件的难度。
   - [查看详情](https://github.com/anthropics/claude-code/pull/83374)

2. **[文档] 补充 skipLfs 市场源说明** (#77977)
   - 内容：为 `github` 和 `git` 市场源对象增加了 `skipLfs` 选项的文档说明和示例，用于跳过 Git LFS 下载。
   - 影响：帮助开发者在使用市场源时更灵活地控制资源下载，避免不必要的 LFS 数据传输。
   - [查看详情](https://github.com/anthropics/claude-code/pull/77977)

## 功能需求归类

- **多会话与工作流管理**：社区对“跨会话通信”（#24798）和“跨会话协调”（#76727）的讨论表明，用户迫切需要更高级的编排能力，以支持复杂的、多步骤的项目开发流程。
- **配额与成本管理**：用户对在 CLI 中查询配额信息（#13585）和空闲时 Token 消耗（#65687）的反馈，显示出对成本和资源使用透明度的强烈需求。
- **执行控制与实时干预**：用户希望能够在任务执行过程中进行干预（#30492），这反映了对 Agent 行为更高控制权的需求，尤其是在复杂任务中进行动态调整。
- **平台稳定性与兼容性**：macOS 上的网络错误（#5674）和 Windows 桌面应用崩溃（#80468）是当前影响用户体验的主要平台问题。
- **GitHub 集成可靠性**：连接器无法访问内容（#71542）和写入操作失败（#80874）说明 GitHub 集成功能在当前版本中遇到了严重问题，是社区关注的焦点。

## 开发者关注点

- **GitHub 集成故障**：当前版本中，GitHub 连接器存在无法访问仓库内容和写入操作失败两个严重问题，开发者无法正常使用其核心的代码协作功能。
- **网络连接持续不稳定**：macOS 上反复出现的 `ECONNRESET` 错误是一个长期未解决的痛点，严重影响了开发者的工作流。
- **成本控制工具缺失**：开发者迫切需要官方提供在 CLI 中直接查看和管理 API 使用配额及成本的能力，以应对意外的 Token 消耗。
- **多会话管理混乱**：当运行多个 Claude Code 会话时，缺乏有效的协调机制，开发者面临冲突和资源浪费的风险，需要更完善的解决方案。
- **会话恢复功能不完善**：`--continue` 命令无法恢复 `-p` 参数创建的会话，这个 Bug 破坏了开发者希望保持工作流连续性的核心需求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，以下是基于您提供的 GitHub 数据生成的 2026-08-04 OpenAI Codex 社区动态日报。

---

# OpenAI Codex 社区动态日报 — 2026-08-04

## 今日更新概览

今日社区活跃度较高，共发布 2 个 Rust 版本的 Alpha 更新，同时有 50 个 Issue 和 36 个 Pull Request 在过去 24 小时内获得更新。Windows 平台的稳定性与兼容性问题依然是社区讨论的焦点，多个关于应用卡顿、WSL 集成以及模型兼容性的 Bug 报告获得了大量评论与关注。此外，关于多账户支持、RTL 文本支持等长期功能需求也持续收到用户反馈。

## 版本发布

- **rust-v0.147.0-alpha.6**: 发布 0.147.0-alpha.6 版本。
- **rust-v0.147.0-alpha.1.2**: 发布 0.147.0-alpha.1.2 版本。

## 社区热点 Issues

以下选取了 10 个值得关注的 Issue，涵盖性能、兼容性、功能缺失和模型问题：

1.  **[#20214] Codex App 在 Windows 11 Pro 上频繁卡顿/冻结**
    - **影响场景**: 用户在系统资源充足（Ryzen 5 5600, 32GB RAM）的情况下，Codex App 仍频繁出现卡顿和假死，严重影响日常使用。
    - **问题范围**: 该问题被标记为 `[bug, windows-os, app, performance]`，获得了 88 条评论和 78 个赞，表明这是 Windows 用户普遍遭遇的严重性能问题。
    - **社区反应**: 用户反馈强烈，开发者尚未给出明确解决方案。
    - **链接**: https://github.com/openai/codex/issues/20214

2.  **[#35420] OneDrive 备份工作区导致 Codex 流频繁断开**
    - **影响场景**: 当 Windows 工作区由 OneDrive 备份且状态异常时，ChatGPT Work / Codex 页面上的请求会反复断开并报错。
    - **问题范围**: 此 Bug 影响使用 OneDrive 同步项目的用户，与网络连接稳定性相关。
    - **社区反应**: 尽管点赞数不高，但 30 条评论表明该问题对特定用户群的困扰较大。
    - **链接**: https://github.com/openai/codex/issues/35420

3.  **[#33685] 新的周限额消耗速度与旧版 5 小时限额一样快**
    - **影响场景**: 自 5 小时限额取消后，用户发现新的周限额消耗速度并未变慢，正常使用模式下限额很快耗尽。
    - **问题范围**: 此问题与 Codex 的计费与限额策略直接相关，影响了 Plus 和 Pro 用户的正常使用体验。
    - **社区反应**: 25 条评论和 10 个赞，用户对限额计算逻辑表示困惑和不满。
    - **链接**: https://github.com/openai/codex/issues/33685

4.  **[#19504] 请求为阿拉伯语和希伯来语用户添加完整的 RTL 文本方向支持**
    - **影响场景**: 使用阿拉伯语或希伯来语的用户在 Codex 和 Chat 面板中无法正常渲染文本，存在对齐、标点等显示问题。
    - **问题范围**: 这是一个长期存在的无障碍功能请求，影响特定语言用户群体。
    - **社区反应**: 持续获得关注，但尚未被作为高优先级任务处理。
    - **链接**: https://github.com/openai/codex/issues/19504

5.  **[#35097] `gpt-5.6-luna` 模型被标记为 `MultiAgent V1`，导致 V2 的 `spawn_agent` 调用失败**
    - **影响场景**: 使用 `gpt-5.6-sol` 模型时，尝试通过 `spawn_agent` 调用子代理会遇到兼容性错误。
    - **问题范围**: 这是一个 CLI 工具中的模型兼容性问题，影响使用多代理功能的 Pro 用户。
    - **社区反应**: 14 条评论，37 个赞，表明此问题对使用高级模型和功能的用户影响较大。
    - **链接**: https://github.com/openai/codex/issues/35097

6.  **[#35119] Windows 应用更新后，将 WSL 仓库错误标记为非 Git 仓库**
    - **影响场景**: 使用 WSL2 工作区的用户在更新 Codex App 后，其 Git 仓库被误判，导致 Git 功能不可用。
    - **问题范围**: 此 Bug 针对 Windows + WSL 用户，严重影响依赖 Git 的版本控制流程。
    - **社区反应**: 14 条评论，13 个赞，用户反馈这个改动是明显的回归问题。
    - **链接**: https://github.com/openai/codex/issues/35119

7.  **[#31860] `GPT-5.6 Sol` 模型上下文窗口被限制在 372K，远低于模型规格的 1.05M**
    - **影响场景**: 使用 `GPT-5.6 Sol` 模型的用户无法充分利用其上下文窗口，导致处理大型项目或长文档时受限。
    - **问题范围**: 被标记为 `[Critical]`，是一个严重的性能限制问题，影响 Pro 用户的核心体验。
    - **社区反应**: 14 条评论，26 个赞，用户对此问题高度关注，认为这是严重的功能阉割。
    - **链接**: https://github.com/openai/codex/issues/31860

8.  **[#29908] `apply_patch` 和沙箱命令在 Ubuntu 24.04 上因 Bubblewrap 错误失败**
    - **影响场景**: 在 Ubuntu 24.04 系统上，尝试使用 `apply_patch` 或运行沙箱命令时，工具会在执行前因沙箱设置失败而报错。
    - **问题范围**: 此问题影响 Linux 用户，特别是使用新版本 Ubuntu 的开发者，导致核心功能无法使用。
    - **社区反应**: 13 条评论，但无点赞，表明该问题可能影响范围较窄，但对受影响用户来说非常严重。
    - **链接**: https://github.com/openai/codex/issues/29908

9.  **[#12029] 请求支持使用多个账户**
    - **影响场景**: 用户需要在同一台机器上同时使用个人和公司（企业）的 Codex 账户，但当前设计不支持多账户切换。
    - **问题范围**: 这是一个长期存在的功能增强请求，影响大量需要在不同组织间切换的开发者。
    - **社区反应**: 12 条评论，高达 62 个赞，反映了用户对多账户支持的强烈需求。
    - **链接**: https://github.com/openai/codex/issues/12029

10. **[#15477] Codex Cloud 自动代码审查存在多项 Bug**
    - **影响场景**: 用户在使用 Codex Cloud 的 GitHub 自动代码审查功能时，遇到静默失败、仪表盘显示额度可用但审查提示已达上限等多个问题。
    - **问题范围**: 此 Issue 报告了三个互相关联的 Bug，影响 CI/CD 流程的可靠性。
    - **社区反应**: 11 条评论，6 个赞，用户希望功能能稳定工作。
    - **链接**: https://github.com/openai/codex/issues/15477

## 重要 PR 进展

以下选取了 10 个重要的 Pull Request，反映了代码库的近期改进方向：

1.  **[#36815] 在 Token 预算上下文中按名称识别代理**
    - **内容**: 将环境上下文中的线程 ID 替换为规范的代理路径，以更好地追踪和区分不同子代理的 Token 消耗。
    - **链接**: https://github.com/openai/codex/pull/36815

2.  **[#36812] 为代码模式添加双 WebSocket 传输**
    - **内容**: 引入一个可选的 `dual-websocket-v1` 能力，为代码模式建立第二个 WebSocket 连接，以避免大型嵌套工具调用阻塞其他会话操作。
    - **链接**: https://github.com/openai/codex/pull/36812

3.  **[#36811] 尊重每环境的登录 Shell 策略**
    - **内容**: 存储每个环境（包括继承环境）的 `allow_login_shell` 设置，并在 shell 工具调用时根据环境策略决定是否使用登录 shell。
    - **链接**: https://github.com/openai/codex/pull/36811

4.  **[#36810] 添加 MCP 客户端一致性回归门**
    - **内容**: 新增一个测试框架，用于针对官方的 MCP 客户端一致性测试套件运行 Codex 可执行文件，覆盖不同协议版本、传输方式和 OAuth 场景。
    - **链接**: https://github.com/openai/codex/pull/36810

5.  **[#36809] 优先使用状态数据库进行 `exec resume --last`**
    - **内容**: 优化 `codex exec resume --last` 命令，使其优先查询状态数据库，而不是审计所有回滚文件，以提高查找效率。
    - **链接**: https://github.com/openai/codex/pull/36809

6.  **[#36807] 将音频预处理提取为工具包**
    - **内容**: 新增 `codex-utils-audio` 工作区 crate，用于统一处理音频输入规范化和 Token 估算，并从 `codex-core` 中解耦此功能。
    - **链接**: https://github.com/openai/codex/pull/36807

7.  **[#36800] 避免在命令批准后重新注入权限**
    - **内容**: 优化权限管理，将已批准的命令前缀与稳定的权限指令分开追踪，避免在每次命令批准后重复追加完整的权限信息。
    - **链接**: https://github.com/openai/codex/pull/36800

8.  **[#36797] 规范化 `rusty_v8` 校验和清单的行尾**
    - **内容**: 修复跨平台构建问题，确保生成的 `rusty_v8` 校验和清单在所有平台上都使用 LF 行尾，同时兼容现有的 Windows CRLF 构建。
    - **链接**: https://github.com/openai/codex/pull/36797

9.  **[#36796] 添加 Agent Plugins MCP 配置解析**
    - **内容**: 新增 `parse_agent_plugin_mcp_config` 函数，用于将 Agent Plugins v1 的 `mcp.json` 文件转换为 Codex 的 MCP 服务器配置，支持 `stdio` 和 HTTP 传输。
    - **链接**: https://github.com/openai/codex/pull/36796

10. **[#36793] 终止超时的 Git 进程树**
    - **内容**: 修复当 Git 命令超时时，其子进程可能残留的问题。通过在 Unix 上使用进程组、Windows 上使用作业对象，确保超时清理能终止整个进程树。
    - **链接**: https://github.com/openai/codex/pull/36793

## 功能需求归类

从今日的 Issues 中，可以归纳出以下用户反复提及的功能方向：

- **多账户/多身份支持**: 用户强烈希望 Codex 能支持在同一设备上同时登录和使用多个个人/企业账户（[#12029]）。
- **国际化与本地化**: 对 RTL 语言（如阿拉伯语、希伯来语）的完整支持是持续的呼声，涉及文本渲染、对齐等基础体验（[#19504]）。
- **更好的模型兼容性与选择**: 用户对特定模型（如 `gpt-5.6-luna`）的兼容性问题以及模型上下文窗口被限制表示不满，期望更透明和正确的模型能力支持（[#35097], [#31860]）。
- **更公平合理的限额机制**: 用户对新的周限额消耗速度提出质疑，希望限额计算逻辑更清晰、更符合实际使用情况（[#33685], [#32791]）。
- **增强的 MCP 功能**: 用户希望 MCP 工具能支持更复杂的场景，如 Gmail 连接器支持多账号（[#30418]），以及提供不依赖轮询的后台监控能力（[#29922]）。

## 开发者关注点

- **Windows 平台的稳定性是首要痛点**: 多个高热度 Issue 指向 Windows 应用（包括 App 和 CLI）的卡顿、冻结、与 WSL 集成不佳等问题。这表明 Windows 用户体验的优化是当前最迫切的需求。
- **模型选择与上下文窗口限制影响工作流**: 开发者对模型（如 `gpt-5.6-sol`）的实际可用上下文窗口远低于宣称规格感到困扰，这直接限制了其在大型项目中的使用。
- **WSL 集成问题频发**: 从 Git 仓库识别错误到沙箱路径问题，WSL 工作区相关的 Bug 报告数量较多，说明 WSL 环境的兼容性有待加强。
- **沙箱和 CLI 工具的可靠性**: 在特定 Linux 发行版（如 Ubuntu 24.04）上，沙箱功能（Bubblewrap）的失败，以及 CLI 工具中模型兼容性问题，影响了部分开发者的核心

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-08-04 Kimi Code 社区动态日报。

---

# Kimi Code 社区动态日报 | 2026-08-04

**数据来源**: [github.com/MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code)

## 今日更新概览

今日社区活跃度较高，共更新 27 个 Issue 和 33 个 Pull Request。核心关注点集中在 **Web UI 和 TUI 的性能与稳定性问题**（如内存泄漏、DOM 节点无限增长、界面卡顿），以及 **会话恢复与重连后的状态丢失** 问题。此外，围绕 **CLI 参数增强**（如 `--effort` 标志）和 **Agent 身份自定义** 的功能需求讨论也较为热烈。

## 版本发布

今日无新版本发布。

## 社区热点 Issues

以下挑选了 10 个值得关注的 Issue，涵盖 Bug 反馈、功能请求和社区讨论。

1.  **Web UI 性能危机：长会话导致 DOM 节点和内存泄漏**
    - **Issue**: [#2548](https://github.com/MoonshotAI/kimi-code/issues/2548)
    - **摘要**: 用户报告在长时间运行的 Web UI 会话中，DOM 节点、事件监听器和堆内存无限增长，存在明显的分离 DOM 泄露和列表虚拟化缺失问题。这直接影响了 Web 端在复杂任务场景下的稳定性和可用性。
    - **影响场景**: 使用 `kimi web` 进行长时间、多轮次对话的用户。

2.  **TUI 内存泄漏：`!` Shell 命令输出导致内存无限增长**
    - **Issue**: [#2556](https://github.com/MoonshotAI/kimi-code/issues/2556)
    - **摘要**: 用户发现，在 TUI 中频繁使用 `!` 执行 Shell 命令时，命令输出条目会在内存中无限制增长，且折叠后的条目不会被回收，构成内存泄漏隐患。
    - **影响场景**: 重度依赖 `!` 命令进行自动化操作的开发者。

3.  **VS Code 扩展：空闲后重连，权限规则被忽略，降级为手动模式**
    - **Issue**: [#2582](https://github.com/MoonshotAI/kimi-code/issues/2582)
    - **摘要**: 用户报告在 VS Code 扩展中，会话在约 80 分钟空闲后重新连接，会导致之前设置的 `yolo` 自动模式失效，所有 Bash 工具调用都需要手动确认，严重影响了自动化工作流。
    - **影响场景**: 使用 VS Code 扩展并依赖 `yolo` 模式的开发者。

4.  **多步 Agent 任务在无用户反馈时卡住数小时**
    - **Issue**: [#2570](https://github.com/MoonshotAI/kimi-code/issues/2570)
    - **摘要**: 用户反馈在执行多步 Agent 任务时，任务会莫名其妙地卡住数小时，期间无任何用户可见反馈。问题根源在于首字节时间（TTFT）过长、请求消失以及无声的 429 重试循环。
    - **影响场景**: 所有使用多步 Agent 任务的高阶用户。

5.  **Web UI 中 Mermaid 长标签溢出节点框**
    - **Issue**: [#2577](https://github.com/MoonshotAI/kimi-code/issues/2577)
    - **摘要**: 用户在 Web UI 中发现，Mermaid 图表中的长标签（尤其是中文字符）会溢出其所在的节点框，并与相邻节点标签重叠，导致图表无法正常阅读。
    - **影响场景**: 所有在 Web UI 中生成复杂图表（特别是含中文内容）的用户。

6.  **CLI: 请求 429 限流时，用户无任何反馈，界面假死**
    - **Issue**: [#2025](https://github.com/MoonshotAI/kimi-code/issues/2025)
    - **摘要**: 用户反馈当请求触发 API 限流（429 错误）时，CLI 界面无任何提示，仅显示一个旋转的加载图标，看起来像是程序挂死，用户无法得知是限流问题。
    - **影响场景**: 所有使用 CLI 并可能遇到限流的用户，尤其是在高峰时段。

7.  **AGENTS.md 文件在会话外工作时无法被 Agent 发现**
    - **关联 PR**: [#2545](https://github.com/MoonshotAI/kimi-code/pull/2545) (已关闭)
    - **摘要**: 社区提出，系统提示词只在会话启动时加载 `AGENTS.md` 文件。但 Agent 在运行中会进入 `cwd` 之外的目录（如 monorepo 的兄弟包），此时无法发现新的 `AGENTS.md`，导致 Agent 行为不符合预期。该问题已通过 PR 修复。
    - **影响场景**: 使用 `AGENTS.md` 管理复杂项目（如 monorepo）的开发者。

8.  **设备标识头被意外转发到第三方 Base URL**
    - **Issue**: [#2576](https://github.com/MoonshotAI/kimi-code/issues/2576)
    - **摘要**: 用户发现，当使用第三方兼容 API 网关并配置 `type = "kimi"` 时，`X-Msh-Device-Id` 等完整主机身份标识头会被转发给第三方服务，存在隐私泄露风险。
    - **影响场景**: 使用第三方代理或网关连接到 Kimi API 的用户。

9.  **Web UI 中 Markdown 表格过长导致页面水平滚动**
    - **Issue**: [#2560](https://github.com/MoonshotAI/kimi-code/issues/2560)
    - **摘要**: 用户反馈在 Web UI 中，内容较长的 Markdown 表格无法换行，导致页面出现水平滚动条，破坏了阅读体验。
    - **影响场景**: 所有在 Web UI 中查看包含宽表格内容的用户。

10. **MCP 工具结果丢失结构化数据，模型只能看到摘要文本**
    - **Issue**: [#2554](https://github.com/MoonshotAI/kimi-code/issues/2554)
    - **摘要**: 用户报告，当一个 MCP 工具声明了 `outputSchema` 并返回 `structuredContent` 时，CLI 会丢弃 `structuredContent`，只将摘要文本传递给模型，导致模型无法利用完整、精确的结构化输出。
    - **影响场景**: 所有使用 MCP 工具并期望获得结构化数据回传的开发者。

## 重要 PR 进展

以下挑选了 10 个重要的 PR，涵盖功能修复和新特性。

1.  **修复设备标识头转发安全问题**
    - **PR**: [#2581](https://github.com/MoonshotAI/kimi-code/pull/2581) (OPEN)
    - **关联 Issue**: [#2576](https://github.com/MoonshotAI/kimi-code/issues/2576)
    - **摘要**: 该 PR 修复了 `resolveOutboundHeaders` 的决策逻辑，确保主机标识头（如 `X-Msh-Device-Id`）仅在连接到官方端点时才会被转发，解决了第三方服务接收到用户设备标识的隐私泄露问题。

2.  **修复 Web UI 中 Mermaid 标签溢出问题**
    - **PR**: [#2578](https://github.com/MoonshotAI/kimi-code/pull/2578) (OPEN)
    - **关联 Issue**: [#2577](https://github.com/MoonshotAI/kimi-code/issues/2577)
    - **摘要**: 该 PR 通过调整 CSS 软换行逻辑，解决了 Mermaid 图表中长标签溢出节点框的问题，确保长标签能被正确包裹在节点内部。

3.  **支持 CLI 的 `--effort` 参数**
    - **PR**: 关联 Issue [#2535](https://github.com/MoonshotAI/kimi-code/issues/2535) 和 [#2569](https://github.com/MoonshotAI/kimi-code/issues/2569) (CLOSED)
    - **摘要**: 社区多次请求后，`--effort` 标志已被实现并合并。现在用户可以通过 `kimi --effort low` 或 `kimi -p "..." --effort max` 在启动时临时覆盖思考努力度，无需修改 `config.toml`。

4.  **添加 Agent 自定义身份功能**
    - **PR**: [#2573](https://github.com/MoonshotAI/kimi-code/pull/2573) (OPEN)
    - **摘要**: 该 PR 为 Agent 核心 v2 引擎添加了自定义身份功能，允许用户修改 Kimi Code 在系统提示词、`User-Agent` 以及向 MCP 服务器声明的客户端名称，便于将其集成到其他产品中。

5.  **修复 v2 引擎会话恢复后工具丢失的问题**
    - **PR**: [#2567](https://github.com/MoonshotAI/kimi-code/pull/2567) (CLOSED)
    - **摘要**: 该 PR 修复了 v2 引擎创建的会话在恢复后，由于 `profile.bind` 记录未被重放，导致工具列表为空的问题。修复后，恢复的会话能正确加载其工具集。

6.  **为 v2 引擎添加 ACP 服务器支持**
    - **PR**: [#2571](https://github.com/MoonshotAI/kimi-code/pull/2571) (OPEN)
    - **摘要**: 该 PR 为 `agent-core-v2` 引擎添加了实验性的 ACP 服务器，允许编辑器客户端（如 Zed）通过 `kimi acp-v2` 命令连接到新的 v2 引擎，而非仅局限于旧版 v1 引擎。

7.  **v2 引擎：添加 Token 计数服务**
    - **PR**: [#2563](https://github.com/MoonshotAI/kimi-code/pull/2563) (OPEN)
    - **摘要**: 该 PR 为 v2 引擎添加了可配置的 Token 计数服务，允许用户选择不同的计数策略（如基于字符估算、仅依赖提供商报告或使用测量锚点），并提供了更精细的控制。

8.  **`/fork` 命令不再自动切换到新分支**
    - **PR**: [#2565](https://github.com/MoonshotAI/kimi-code/pull/2565) (OPEN)
    - **摘要**: 该 PR 修改了 `/fork` 行为，使其不再自动切换到新创建的分支会话。这避免了因切换而关闭源会话，从而中断正在运行的后台任务（如构建、开发服务器）。

9.  **修复 CloudAppender 关闭时的数据持久性**
    - **PR**: [#2574](https://github.com/MoonshotAI/kimi-code/pull/2574) (OPEN)
    - **摘要**: 该 PR 通过序列化 `flush()` 操作、添加有截止时间的 `shutdown()` 以及将未发送事件持久化到存储，确保遥测数据在应用关闭时不会丢失，提高了数据上报的可靠性。

10. **添加 You.com 插件市场入口**
    - **PR**: [#2093](https://github.com/MoonshotAI/kimi-code/pull/2093) (OPEN)
    - **摘要**: 该 PR 将 You.com 插件添加到了 Kimi Code 的官方插件市场中，用户可以更方便地发现和安装该插件，扩展了 Kimi Code 的能力边界。

## 功能需求归类

从今日的 Issues 中，可以观察到用户反复提出的功能需求主要集中在以下几个方向：

- **CLI 参数增强**: 用户希望有更多运行时参数，例如 `--effort`（已实现），以及之前讨论过的模型选择等，以便在不修改配置文件的情况下快速切换行为。
- **Web UI 和 TUI 性能优化**: 大量反馈集中在 UI 的稳定性上，包括内存泄漏、DOM 节点无限增长、长会话卡顿等，用户对界面响应速度和资源占用有较高的要求。
- **会话管理与恢复**: 用户对会话恢复后的状态一致性（如 VS Code 中的权限模式、v2 引擎的工具列表）有明确诉求，期望能无缝、正确地继续之前的任务。
- **安全与隐私**: 社区对设备标识等隐私数据的转发非常敏感，要求明确区分官方和第三方服务，避免敏感信息泄露。
- **Agent 行为可配置性**: 用户期望能更灵活地控制 Agent 的行为，如配置思考努力度、自定义 Agent 身份、设置 MCP 工具结果处理方式等。

## 开发者关注点

综合今日数据，开发者反馈的主要痛点和高频需求如下：

1.  **性能与体验**: TUI 和 Web UI 的稳定性问题是当前最突出的痛点。内存泄漏和界面卡顿不仅影响使用体验，也限制了工具在复杂、长时间任务中的应用。
2.  **会话恢复的可靠性**: 空闲后或中断后重连，会话状态（如 `yolo` 模式）丢失是一个高频问题，这严重影响了自动化工作流的可靠性，开发者希望机制能更健壮。
3.  **无声的错误处理**: 429 限流和 Agent 卡住时，用户缺乏有效的反馈机制，导致无法判断是工具卡死还是正在等待资源。社区需要更清晰的错误提示和进度反馈。
4.  **UI 细节打磨**: 从 Mermaid 图表溢出、Markdown 表格过长到 `fork` 命令行为，开发者对 UI 的细节体验非常关注，这些细节问题直接影响了日常使用的流畅度。
5.  **安全合规**: 对于使用第三方 API 网关的用户，隐私合规性是必须解决的问题。今天关于设备头转发的讨论表明，社区对此类安全问题非常警觉。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-08-04

---

## 今日更新概览

- 发布 **v1.18.12**，修复 Azure GPT-5.5+ 推理请求失败、桌面版大图片粘贴拖拽卡顿等问题。
- 过去 24 小时内共有 **50 条 Issue 和 50 条 PR 被更新**，其中讨论最活跃的 Issue 集中在会话持久化、UI 改进和连接异常处理。
- 社区提交了多项功能 PR，包括请求级模型钩子、桌面端浏览器预览、权限快捷键自定义等。

---

## 版本发布

### v1.18.12

**Core**
- 修复：启用推理时 Azure GPT-5.5+ 的 completion 请求失败（@frederiknsgo）

**Desktop**
- 修复：当草稿包含大尺寸粘贴图片或附件时，降低 composer 卡顿
- 修复：项目搜索现在能匹配任意已知的最近项目，而不仅仅是前五个

> 完整发布说明：https://github.com/anomalyco/opencode/releases/tag/v1.18.12

---

## 社区热点 Issues

挑选了 10 个值得关注的问题，涵盖 Bug、功能请求和用户反馈。

### 1. #1168 功能请求：让链接可点击（Ctrl+左键打开）
- **评论：10 | 👍：118**
- 用户希望在 OpenCode 界面中直接 Ctrl+左键点击 URL 以在默认浏览器打开。这是编辑器/终端常见功能，目前缺失。
- https://github.com/anomalyco/opencode/issues/1168

### 2. #36942 功能请求：垂直标签页
- **评论：10 | 👍：16**
- 新 UI 强制水平标签，导致同时可见的会话标题不超过 5 个。用户强烈要求恢复/增加垂直标签选项。
- https://github.com/anomalyco/opencode/issues/36942

### 3. #13715 嵌套子 agent 的权限请求静默挂起
- **评论：10 | 👍：24**
- 当子 agent 再次生成子 agent 并需要权限（如 bash）时，权限提示从未在 TUI 中渲染，会话永久挂起。
- https://github.com/anomalyco/opencode/issues/13715

### 4. #16077 功能请求：持久会话记忆
- **评论：12 | 👍：3**
- 希望 OpenCode 能在启动时从本地文件加载之前的对话上下文，实现跨会话连续性。适合 CLI 辅助工具和开发者助手。
- https://github.com/anomalyco/opencode/issues/16077

### 5. #39207 GitHub OAuth 登录失败：参数 email 为空导致 SQL 错误
- **评论：4 | 👍：1**
- 使用 GitHub 登录 opencode.ai 时，OAuth 回调中的 email 参数为空，导致服务端更新失败。影响用户注册和登录。
- https://github.com/anomalyco/opencode/issues/39207

### 6. #40314 无法连接到第一个证书（MTN 宽带）
- **评论：4 | 👍：0**
- 用户使用 MTN 宽带时，每次请求都报“无法连接到第一个证书”，怀疑是网络或证书验证问题。
- https://github.com/anomalyco/opencode/issues/40314

### 7. #20600 桌面版 v1.3.13 聊天时随机滚动到中间
- **评论：4 | 👍：2**
- 用户在聊天过程中，桌面应用会随机跳转到对话中间位置，打断阅读体验。
- https://github.com/anomalyco/opencode/issues/20600

### 8. #40319 持续尝试连接不可达的 provider，不显示连接错误
- **评论：3 | 👍：0**
- 配置了不可用的自定义 OpenAI 兼容 provider 后，`opencode run` 持续重试超过 60 秒而不给出错误提示，直到 Debug 日志才显示失败。
- https://github.com/anomalyco/opencode/issues/40319

### 9. #38932 在提示框中粘贴长文本导致桌面应用挂起
- **评论：3 | 👍：0**
- 粘贴超过约 5000 字符的文本后，桌面应用完全无响应，UI 冻结。
- https://github.com/anomalyco/opencode/issues/38932

### 10. #40171 Go 服务 `/v1/responses` 返回不完整的 SSE 事件流
- **评论：2 | 👍：2**
- 流式响应缺少 `response.output_item.added` 和 `response.content_part.added` 事件，导致兼容 OpenAI Responses API 的客户端无法正常工作。
- https://github.com/anomalyco/opencode/issues/40171

---

## 重要 PR 进展

挑选了 10 个值得关注的 PR，涵盖 Bug 修复、新功能和测试。

### 1. #40144 fix(tui): 拒绝不可用的项目目标
- 修复：之前已删除的项目目录在 TUI 项目选择器中仍可被选中，现在会检查目录是否存在并拒绝。
- https://github.com/anomalyco/opencode/pull/40144

### 2. #40198 fix(opencode): 在补丁匹配中处理规范等价 Unicode
- 修复：当文件内容与补丁中的 Unicode 字符在规范上等价（如组合字符）时，补丁验证失败。添加最终规范等价匹配步骤。
- https://github.com/anomalyco/opencode/pull/40198

### 3. #36710 fix(core): 限制事件日志压缩范围
- 修复：为事件日志压缩添加只读状态和显式、默认 dry-run 的边界压缩选项（`--session` / `--all` / `--apply`），避免无限制压缩。
- https://github.com/anomalyco/opencode/pull/36710

### 4. #40340 test(opencode): 覆盖 Azure completion 推理分支
- 测试：在 GPT-5.5 和 GPT-5.6 推理测试中增加 Azure completion 路径的测试，并验证 Azure Responses API 继续使用默认 `medium` 推理努力。
- https://github.com/anomalyco/opencode/pull/40340

### 5. #40188 feat(plugin): 添加请求级 `chat.model` 钩子
- 新功能：插件可以在每个请求前替换模型，在 provider/model/auth 解析之前触发。允许动态切换模型。
- https://github.com/anomalyco/opencode/pull/40188

### 6. #18209 feat: App 构建时支持设置 base URL
- 新功能：通过 `VITE_BASE_URL` 环境变量在构建时设置应用基础路径，方便部署到子目录。
- https://github.com/anomalyco/opencode/pull/18209

### 7. #38790 feat(app): 为新布局添加工作区流程
- 新功能：为新会话添加本地/新建/现有工作区选择，支持持久化草稿、默认值、视图感知放置和 V2 设计规范。
- https://github.com/anomalyco/opencode/pull/38790

### 8. #40334 feat(tui): 使权限模式快捷键可配置
- 新功能：用户现在可以自定义切换 auto-approve 权限的快捷键，之前只能通过命令 `permission.mode` 切换。
- https://github.com/anomalyco/opencode/pull/40334

### 9. #40337 feat(desktop): 添加本地浏览器预览面板
- 新功能：桌面版增加内嵌浏览器预览，可直接查看当前会话的 dev server 运行效果，无需离开应用。
- https://github.com/anomalyco/opencode/pull/40337

### 10. #40316 fix(core): 为所有 agent 应用安全默认值
- 修复：将外部目录和 `.env` 读取策略移至通用 agent 默认值，确保内置和自定义 agent 都能正确管理工具输出、shell 输出、临时目录等。
- https://github.com/anomalyco/opencode/pull/40316

---

## 功能需求归类

从今日更新中反复出现的用户需求可以归纳为以下几个方向：

- **会话持久化 / 记忆**：多个 Issue 提到希望保存会话上下文，跨启动恢复对话（#16077），以及子 agent 状态恢复（#35222 相关 PR）。
- **UI 布局与交互优化**：垂直标签页（#36942）、可点击链接（#1168）、滚动稳定性（#20600、#29094）、长文本粘贴性能（#38932）。
- **桌面端功能补全**：缺少 skill 和 MCP 的 GUI（#31399）、MCP 服务器配置管理（#40335）、本地浏览器预览（#40337）。
- **连接与错误处理**：不可达 provider 无错误提示（#40319）、证书问题（#40314）、OAuth 登录失败（#39207）、SSE 流不完整（#40171）。
- **多语言 & 国际化**：RTL/双向文本渲染错误（#40286），Unicode 规范等价匹配（#40198）。
- **新模型支持**：Azure GPT-5.5+ 推理修复（v1.18.12）、DeepSeek V4 Flash 响应乱码（#40321）。

---

## 开发者关注点

根据 Issue 和 PR 中的讨论，开发者反馈的痛点和高频需求包括：

- **连接可靠性与错误可见性**：多个用户指出当 provider 不可达时，OpenCode 要么挂起（#40319、#40330），要么不显示清晰的错误信息，给调试带来困难。
- **桌面端性能与稳定性**：粘贴大文本、大图片导致卡顿或冻结（#38932、v1.18.12 修复）；聊天滚动跳跃（#20600、#17996）影响阅读体验。
- **权限与子 agent 管理**：嵌套子 agent 的权限请求无法渲染（#13715），导致会话挂起；子 agent 被中断后的状态恢复仍需改进（#35222）。
- **API 兼容性**：Go 服务的 SSE 流不完整（#40171）和缓存键丢失（#40278）影响与 OpenAI 生态工具的集成。
- **配置灵活性**：用户希望支持 `{cmd:}` 配置占位符（#12710）、自定义 provider 的 base URL 支持更多协议（#40319）、权限快捷键自定义（#40334）。

---

*以上为 2026-08-04 OpenCode 社区动态日报，基于 GitHub 公开数据整理。*

</details>