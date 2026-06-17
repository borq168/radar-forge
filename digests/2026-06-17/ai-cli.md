# AI CLI 工具社区动态日报 2026-06-17

> 生成时间: 2026-06-17 00:38 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比分析报告（2026-06-17）

## 1. 今日横向概览

今日各工具活动分布不均：**Claude Code** 发布 1 个 patch 版本，社区 Issue 达 50 条；**OpenAI Codex** 密集发布 4 个 Alpha 版本，Automations 新功能进入建设阶段；**Qwen Code** 发布 2 个版本，PR 数量高达 50 条，社区最为活跃；**Copilot CLI** 发布 1 个修复版本，但 19 个 Issue 中 16 个为新开；**Gemini CLI** 和 **OpenCode** 无新版本发布，但分别有 10+ 个活跃 Issue 和 PR；**Kimi Code CLI** 活跃度最低，仅 4 个 Issue 和 1 个 PR。社区共同关注点集中在**子代理规则继承**、**MCP 工具兼容性**、**会话历史可靠性**和**配额成本透明**四个方向。

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues 数 | 活跃 PR 数 | 版本发布数 | 备注 |
|------|---------------|------------|-----------|------|
| **Claude Code** | 50 条（含 14 条新开） | 18 条（全部外部贡献） | 1（v2.1.179） | Issue 和 PR 均有明确数字 |
| **OpenAI Codex** | ≥10 条热点（未列总数） | ≥10 条热点 | 4（rust-v0.141.0-alpha.1~4） | 仅列出热点，实际更多 |
| **Gemini CLI** | ≥10 条热点 | 10 条 | 0 | 社区热点明确 10 条 |
| **GitHub Copilot CLI** | 19 条（16 条新开） | 0 | 1（v1.0.63） | 数据明确 |
| **Kimi Code CLI** | 4 条（1 条新开） | 1 条 | 0 | 数据明确 |
| **OpenCode** | ≥10 条热点 | ≥10 条 | 0 | 仅列出热点 |
| **Qwen Code** | 25 条更新 | 50 条更新 | 2（preview.0 + nightly） | 数据明确 |

**说明**：Issues 和 PR 数为“更新”或“热点”条目，非仓库全部总量。Qwen Code 在 PR 数量上大幅领先，Claude Code 在 Issues 数量上领先。

## 3. 共同出现的功能方向

### 3.1 子代理规则继承与配置传播
- **Claude Code**：多个 Issue（#19471, #59309, #29423）反映 CLAUDE.md 指令在上下文压缩后丢失、子代理不继承规则。
- **Gemini CLI**：#21409 通用 Agent 挂起，#22323 子 Agent 状态误报，#21968 Agent 不使用预设技能。
- **Qwen Code**：#5180 多 Agent 任务中途崩溃，#5176 请求子 Agent 并行数控制。
- **趋势**：社区对“父会话→子代理”的规则链条可靠性有强烈需求，直接影响自动化工作流稳定性。

### 3.2 MCP 工具/服务器兼容性问题
- **Claude Code**：#68933 技能评估器 fork 大量 MCP 子进程导致内存泄漏。
- **Copilot CLI**：#3812 子代理突然无法访问 MCP 工具。
- **Kimi Code CLI**：#2457 删除 MCP 服务器后自动发现导致 400 错误。
- **OpenCode**：#32489 修复 MCP 工具 JSON Schema 元组样式兼容性。
- **趋势**：MCP 生态快速扩张，但各工具在自动发现、延迟加载、资源隔离方面的实现缺陷集中暴露。

### 3.3 会话历史丢失或管理缺陷
- **OpenAI Codex**：#27353 更新后项目聊天历史丢失，#28606 新版丢失全部历史且无法保存设置，#21128 会话超过50条后自动隐藏。
- **Claude Code**：Worktree 多会话冲突（#62309, #62431）导致数据丢失风险。
- **Copilot CLI**：#3518 无法恢复已归档会话。
- **趋势**：数据持久化和会话生命周期管理成为用户信任基石，新版回归 Bug 频发加剧焦虑。

### 3.4 配额/成本透明性争议
- **Claude Code**：#65514 Pro 计划无法使用 1M 上下文，#52135 Max 计划配额异常消耗。
- **OpenAI Codex**：#14593 令牌消耗异常快（269 👍，612 评论）。
- **Qwen Code**：#3203 OAuth 免费策略调整引发 136 条评论。
- **趋势**：付费用户对计费逻辑不透明、消耗速度不可控的不满已成为高赞共性问题。

### 3.5 终端/平台兼容性
- **Claude Code**：WSL2 鼠标滚轮回归修复。
- **Copilot CLI**：Windows ARM64 高负载崩溃（#3687）、VS Code Terminal 日文乱码（#3813）。
- **OpenAI Codex**：macOS 文件描述符泄漏（#26341）、Windows 全屏显示问题（#25154）。
- **Gemini CLI**：Wayland 下浏览器 Agent 失败（#21983）。
- **Qwen Code**：退出后终端 SGR 鼠标模式残留（#5212）。
- **趋势**：跨平台兼容性是所有工具的持续痛点，Windows 和 macOS 特定 Bug 反复出现。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
|------|---------|---------|-------------|
| **Claude Code** | 深度项目配置（CLAUDE.md）、多 Agent 自治、Worktree 多会话能力。 | 大型项目团队、高级开发者、自动化运维。 | 强调规则驱动和长时间运行自治，社区对规则继承的投诉最多，说明其规则体系复杂而脆弱。 |
| **OpenAI Codex** | 平台化集成（Automations、技能市场）、Desktop + VS Code/CLI 多端统一。 | 企业用户、平台开发者、需要 CI/CD 集成的团队。 | 正构建持久化自动化引擎（Automations），同时暴露会话历史丢失等基础设施稳定性问题。 |
| **Gemini CLI** | Agent 安全性（路径遍历、令牌泄漏修复）、多后端支持（Vertex AI/Gateway）。 | 安全敏感型开发者、多模型用户。 | 安全加固投入明显，但核心 Agent 挂起和状态误报表明智能体框架仍在早期。 |
| **GitHub Copilot CLI** | 深度绑定 GitHub 生态（Enterprise 自定义模型、MCP 工具接入）。 | 已有 GitHub 订阅的企业开发者。 | 功能迭代保守，重点放在稳定性修复（ARM64 崩溃）、以及与企业配置的兼容性上。 |
| **Kimi Code CLI** | 简单痛点修复（默认步数、新用户引导、MCP 自动发现）。 | 入门用户、对配置要求不高的开发者。 | 功能成熟度最低，社区规模小，Issue 和 PR 数量均很少。 |
| **OpenCode** | 开源多模型支持（MiniMax、Azure 等）、自定义 UI 布局、会话目标/循环需求。 | 开源爱好者、多模型切换频繁的开发者。 | 社区功能请求活跃（原生会话目标获 87 👍），但在 CPU 密集和无限循环方面有性能隐患。 |
| **Qwen Code** | 多 Agent 协作控制、渠道扩展（QQ 机器人）、OAuth 策略。 | 中国开发者群体、多 Agent 实验者。 | PR 数量最多，社区贡献活跃，但安全扫描报毒和 OAuth 免费策略调整引发争议。 |

## 5. 社区活跃度记录

- **最高 Issue 活跃度**：Claude Code（50 条更新）和 Qwen Code（25 条），前者问题讨论更深（条均评论多），后者覆盖更广。
- **最高 PR 活跃度**：Qwen Code（50 条更新）远超其他工具，社区贡献者参与度最高。
- **最多版本发布**：OpenAI Codex（4 个 Alpha），反映底层 Rust CLI 快速迭代；Claude Code 和 Qwen Code 各有 1~2 个版本。
- **维护者回应速度**：Claude Code 对 #19471 标记 `memory` 相关并关闭，对 #68578 采纳意见；Gemini CLI 对 #25166 标记优先修复；Copilot CLI 无新增 PR 且 Issue 多未获官方回复；Kimi Code CLI 和 OpenCode 回应不明确。
- **社区情绪警示**：OpenAI Codex 的 #14593（令牌消耗）和 Claude Code 的 #54393（多Agent协调缺陷）评论中体现明显不满；Qwen

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-06-17

## 今日更新概览
昨日（UTC 2026-06-16 至 2026-06-17）共发布 **1 个 patch 版本（v2.1.179）**，修复了流式连接中断、WSL2 鼠标滚轮和沙箱权限问题。GitHub Issues 区有 50 条更新条目（含 14 条新开），PR 区 18 条全部由外部贡献者提交，主要集中在内部脚本安全加固和 Windows 兼容性修补。社区讨论热度最高的方向仍然是 **CLAUDE.md 指令传播失效**、**Worktree 多会话冲突** 和 **MCP 子进程泄漏**。

## 版本发布

### v2.1.179 (2026-06-16)
- **修复**：流式连接中断时，部分响应不再丢失原始错误，而是保留已生成内容，且 spinner 不再卡在 "running tool" 状态。
- **修复**：WSL2 下 Windows Terminal 和 VS Code 中的鼠标滚轮滚动问题（v2.1.172 回归）。
- **修复**：沙箱 `denyR`（疑似权限目录）相关逻辑。

## 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 要点 |
|---|------|------|------|------|
| [#19471](https://github.com/anthropics/claude-code/issues/19471) | CLAUDE.md 指令在上下文压缩后完全被忽略 | 已关闭 | 27 | 提交者提供了完整复现步骤，社区 9 个 👍。上下文压缩会导致项目自定义规则丢失，重载后无法恢复。维护者已标记 `memory` 相关。 |
| [#47166](https://github.com/anthropics/claude-code/issues/47166) | JetBrains 缺乏原生 AI 助手插件 | 开放 | 24 | 长期呼声，但被标记为 duplicate（可能与其他 JetBrains 请求重复）。用户希望 JetBrains 获得类似 VS Code 的深度集成，而非仅使用通用 CLI。 |
| [#65514](https://github.com/anthropics/claude-code/issues/65514) | Pro 计划在仅用 17% 配额时被阻止使用 1M 上下文 | 开放 | 16 | 用户购买 Pro 计划但无法启用 1M 上下文，系统提示需要 "Usage credits" 且直接阻断请求。涉及配额计费逻辑不透明问题。 |
| [#54393](https://github.com/anthropics/claude-code/issues/54393) | 一次通宵自治运行暴露 12 个多智能体协调缺陷 | 开放 | 15 | 详细的故障复盘，涵盖子代理指令丢失、任务分派冲突、死锁等。标记 `area:agents`，尚无官方回复。 |
| [#52135](https://github.com/anthropics/claude-code/issues/52135) | Max (20x) 计划周配额耗用异常——过半配额在会话重置后数分钟内耗尽 | 已关闭 | 14 | 用户报告配额消耗速度远高于预期，怀疑计费模型存在 bug。已标记 `stale` 但未公布 root cause。 |
| [#59309](https://github.com/anthropics/claude-code/issues/59309) | CLAUDE.md 规则不传播到 Agent 子代理，并在压缩后弱化 | 已关闭 | 12 | 与 #19471 高度关联：子代理不继承父会话的 CLAUDE.md，压缩后规则遵从度显著下降。 |
| [#29423](https://github.com/anthropics/claude-code/issues/29423) | Task 子代理不加载项目 CLAUDE.md 或 `.claude/rules/` | 已关闭 | 11 | 明确描述了子代理开发时项目配置被静默忽略的现象，6 个 👍。 |
| [#32508](https://github.com/anthropics/claude-code/issues/32508) | 系统提示 "Output efficiency" 导致先行动后理解偏见 | 已关闭 | 11 | 社区认为该提示鼓励模型急于输出而忽略深入理解，降低代码质量。9 个 👍。官方未确认调整。 |
| [#68933](https://github.com/anthropics/claude-code/issues/68933) | `skill-creator` 评估器泄漏 MCP 子进程导致内存耗尽重启 | 开放 | 3 | 新提交（2026-06-16）。每个测试查询会 fork 一次 `claude -p`，从而启动所有 MCP 服务器，在项目中配置多个 MCP 时迅速占满内存。 |
| [#68578](https://github.com/anthropics/claude-code/issues/68578) | "Fable 5 不可用" 横幅无法关闭且与禁用选择器冗余 | 已关闭 | 2 | 4 个 👍 的 UI 优化型 issue。用户要求移除冗余横幅或提供关闭按钮。维护者已采纳并关闭。 |

## 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 更新日期 | 内容要点 |
|---|------|------|----------|----------|
| [#46351](https://github.com/anthropics/claude-code/pull/46351) | 在 macOS/Linux 上有 pwsh 时启用 PowerShell 工具 | 已关闭 | 06-16 | 取消 PowerShell 工具仅限 Windows 的限制，允许用户在 macOS/Linux 上通过 `CLAUDE_CODE_USE_POWERSHELL_TOOL=1` 启用。 |
| [#68707](https://github.com/anthropics/claude-code/pull/68707) | 新增 `/bug` 命令：终端内直接提交 GitHub Issue | 开放 | 06-16 | 功能型 PR：允许用户在会话中输入 `/bug`，自动收集环境信息并引导创建 Issue，旨在降低反馈门槛。 |
| [#68786](https://github.com/anthropics/claude-code/pull/68786) | `test-hook.sh` 避免 shell 注入（stdin 重定向） | 开放 | 06-16 | 修复 `bash -c` 中外层 shell 展开导致注入风险的问题，改用管道 stdin 传递。 |
| [#68785](https://github.com/anthropics/claude-code/pull/68785) | 修复三个示例 hook 脚本的 JSON 输出、通配符和 CI 检测 | 开放 | 06-16 | `validate-bash.sh` 错误地将 JSON 写入 stderr；`su/*` 通配符过宽；CR/LF 处理问题。 |
| [#68689](https://github.com/anthropics/claude-code/pull/68689) | 阻止扩展性配置读取中的符号链接逃逸 | 开放 | 06-15 | 安全加固：在读取用户插件配置前检查路径是否为符号链接，防止跨目录读取敏感文件。 |
| [#68694](https://github.com/anthropics/claude-code/pull/68694) | 在 Windows 上规范化 `CLAUDE_PLUGIN_ROOT` 路径分隔符 | 开放 | 06-15 | 解决 Windows 下混合使用 `/` 和 `\` 导致路径解析失败的问题。 |
| [#68699](https://github.com/anthropics/claude-code/pull/68699) | `hookify` 增加 Python 封装器并规范化 Windows 插件根路径 | 开放 | 06-15 | 为 hookify 工具添加 Python 层，同时修复 Windows 路径归一化。 |
| [#68679](https://github.com/anthropics/claude-code/pull/68679) | `ralph-wiggum` 在 promise 比较前剥离控制字符 | 开放 | 06-15 | 修复因异常字符导致 promise 状态误判的 bug。 |
| [#68678](https://github.com/anthropics/claude-code/pull/68678) | 分类流水线不应将 Claude Desktop 问题标记为无效 | 开放 | 06-15 | 修复自动分类规则，避免错误地把桌面端 Issue 标记为 `invalid`。 |
| [#68673](https://github.com/anthropics/claude-code/pull/68673) | 分页逻辑：当页面未满时也应中断翻页 | 开放 | 06-15 | 防止空页面后继续分页请求，节省 API 调用。 |

## 功能需求归类

从过去 24 小时更新的 Issues 中，用户反复提出的功能需求集中在以下方向：

| 方向 | 示例 Issue | 用户诉求摘要 |
|------|------------|--------------|
| **IDE 集成** | #47166 (JetBrains 插件), #61306 (桌面应用支持 `/ide`) | 要求 JetBrains 获得原生插件，让桌面应用能像 CLI 一样连接到任意 IDE。 |
| **远程控制** | #60699 | 允许在已运行的会话中动态开启/关闭远程控制，无需启动时指定。 |
| **MCP 工具优化** | #68921 | 为 MCP 工具响应增加 diff/delta 机制，减少上下文窗口浪费（尤其是浏览器截图等大响应）。 |
| **Worktree 多会话** | #62309, #62431, #65216 | 希望 `--worktree` 的行为更可预测：分支名与聊天名一致、退出时检测其他活跃会话、背景代理会话能正常恢复。 |
| **配额透明与调整** | #65514, #52135 | 改善 Pro/Max 计划的配额消耗可视化，减少“用量异常”误报，提供更细粒度的限制。 |
| **CLAUDE.md 持久化** | #19471, #29423, #59309, #44166 | 请求在上下文压缩后保留 CLAUDE.md 指令，并让子代理继承父项目规则；提供“免压缩例外”选项。 |
| **自动化/确定性** | #58933 | 提供环境变量或标志来控制 CLI 行为的确定性和最大 effort 级别，便于脚本使用。 |
| **平台兼容性** | #68484 (macOS Tahoe 扩展安装), #60027 (bash `!` 注入问题) | 修复 macOS 新版本和 Linux 特定 shell 行为的兼容性问题。 |

## 开发者关注点

1. **CLAUDE.md 指令传播是持续痛点**：多个高互动 Issue（#19471、#59309、#29423）均指向同一问题——上下文压缩或子代理场景下项目自定义规则丢失。这直接影响代码风格、工作流约束等关键配置的可靠性，是当前社区呼声最高的 bug 集群。

2. **多智能体协调稳定性不足**：#54393 披露了 12 种不同的协调缺陷，说明 Agent 模式在生产级自治任务中远未成熟。用户需要在单会话内运行多个子代理时，规则继承、任务分派、死锁避免等方面获得实质性改善。

3. **配额计费模型引起普遍困惑**：Pro 用户无法使用 1M 上下文（#65514）、Max 计划配额快速耗尽（#52135）——用户对“使用积分”的定义和消耗规则缺乏清晰文档，且问题长期未解决。

4. **Worktree 功能存在多处行为不一致**：#62309、#62431、#65216 分别暴露了分支命名、会话退出检测、背景代理恢复等问题。Worktree 是大规模并行开发的利器，但当前实现容易导致数据丢失或会话崩溃。

5. **MCP 子进程泄漏是新的性能风险**：#68933 指出 `skill-creator` 在评估阶段会 fork 大量 headless 进程，叠加 MCP 服务器启动后迅速耗尽内存。建议用户谨慎使用 skill 自动优化功能，直到官方修复。

6. **JetBrains 生态缺失成为持续不满**：#47166 在 2 个月内积累 24 条评论，用户认为相比 VS Code 的深度集成，JetBrains 用户只能通过 CLI 间接使用，体验差距大。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是为你准备的 2026-06-17 OpenAI Codex 社区动态日报。

***

# OpenAI Codex 社区动态日报 | 2026-06-17

## 今日更新概览

过去24小时内，Codex 社区活跃度极高。官方发布了 **4 个 Rust CLI 的 Alpha 版本**，显示底层迭代进入密集期。社区方面，关于**速率限制**和**模型容量**的讨论热度持续攀升，同时**会话历史丢失**与**应用性能**问题成为用户新的集中投诉点。在 PR 方面，OpenAI 团队提交了多项关于 **“Automations”** 新功能的基础建设工作，预示着平台自动化能力将有重大更新。

## 版本发布

**Rust CLI (codex-cli)**
- 发布了四个新的 Alpha 版本，版本号分别为 `v0.141.0-alpha.1` 至 `v0.141.0-alpha.4`。目前暂无详细发布说明，但从版本号的跳跃来看，可能包含了一系列关键修复或新功能的初步尝试。
    - `rust-v0.141.0-alpha.1` ([链接](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.1))
    - `rust-v0.141.0-alpha.2` ([链接](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.2))
    - `rust-v0.141.0-alpha.3` ([链接](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.3))
    - `rust-v0.141.0-alpha.4` ([链接](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.4))

## 社区热点 Issues

1.  **[#14593] 令牌消耗异常快 ([OPEN])**
    这是一个已持续三个月的重大问题。用户报告 Business 订阅在 VS Code 扩展中令牌消耗速度极快。该 Issue 今日获得大量新评论，总数达 **612** 条，并获得 **269** 个 👍，是目前社区吐槽最猛烈的技术问题。
    *链接:* https://github.com/openai/codex/issues/14593

2.  **[#23794] Codex Desktop 上下文/令牌用量指示器消失 ([CLOSED])**
    用户反馈在桌面端更新后，可视化的上下文/令牌用量指示器消失。该 Issue 拥有 169 条评论和 168 个 👍，反映了这并非个别用户的困扰，而是普遍存在的需求。
    *链接:* https://github.com/openai/codex/issues/23794

3.  **[#28507] 所选模型已满，请尝试其他模型 ([OPEN])**
    在新版本 `26.609.71450` 中，Pro 5x 订阅用户频繁遇到“模型容量不足”的提示，导致无法正常工作。这再次引发了关于付费用户优先级和模型稳定性的担忧。
    *链接:* https://github.com/openai/codex/issues/28507

4.  **[#21128] 桌面端项目会话历史超过50条后自动隐藏 ([OPEN])**
    用户指出 Codex Desktop 在项目会话超过50条后，旧会话会从 UI 中消失，导致应用无法作为可靠的“工作记忆”使用。问题持续一个多月，用户仍在等待解决方案。
    *链接:* https://github.com/openai/codex/issues/21128

5.  **[#27353] 更新后项目聊天历史消失 ([OPEN])**
    **这是一个新出现的、影响严重的问题。** 用户报告在 6月9日更新应用后，项目相关的所有聊天历史记录丢失，对工作流造成重大影响。反映了数据持久化方面可能存在 Bug。
    *链接:* https://github.com/openai/codex/issues/27353

6.  **[#26341] macOS 上导致系统文件描述符泄漏 ([OPEN])**
    技术性较强的 Bug。用户发现 Codex 会导致 macOS 的 `syspolicyd` 进程文件描述符泄漏，最终导致所有下载的 DMG 文件被系统报告为“损坏”。这暴露出应用与操作系统交互的潜在稳定性问题。
    *链接:* https://github.com/openai/codex/issues/26341

7.  **[#25154] Windows 桌面端全屏显示问题 ([OPEN])**
    Free 订阅用户反馈在 Windows 上进入全屏模式后 UI 显示异常，影响了基础使用体验。虽非核心功能，但用户基础和热度较高（20个 👍）。
    *链接:* https://github.com/openai/codex/issues/25154

8.  **[#28190] CLI 中的 `rg` 命令被 macOS 阻止 ([OPEN])**
    用户反馈在 macOS 上使用 Codex CLI 时，内置的 `rg` (ripgrep) 命令被系统安全策略拦截，导致代码搜索功能失效。这是一个典型的跨平台兼容性问题。
    *链接:* https://github.com/openai/codex/issues/28190

9.  **[#21211] 线程导航/加载缓慢 ([OPEN])**
    技术讨论深入的性能 Bug。用户指出线程元数据（如标题）的膨胀和激进的历史加载策略导致浏览和加载对话线程的速度随着时间推移急剧下降。
    *链接:* https://github.com/openai/codex/issues/21211

10. **[#28606] 最新版丢失全部聊天历史且无法保存设置 ([OPEN])**
    又一个严重的回归 Bug。`26.611.61049` 版本被反馈会导致所有聊天历史清零，且无法保存任何应用设置，对用户的工作流程是毁灭性打击。
    *链接:* https://github.com/openai/codex/issues/28606

## 重要 PR 进展

1.  **[#28628] 修复无效的技能（Skill）前置元数据标量 ([OPEN])**
    针对社区技能市场审计中发现的大量 YAML 格式错误问题，如字符串中未加引号的冒号等。此 PR 旨在提升技能文件的健壮性和解析成功率。
    *链接:* https://github.com/openai/codex/pull/28628

2.  **[#28629] 核心：恢复绝对路径的工作目录 ([OPEN])**
    修复了 `TurnContextItem.cwd` 字段因内部重构 `PathUri` 而导致的持久化和反序列化兼容性问题，确保不同版本间的会话记录路径数据一致。
    *链接:* https://github.com/openai/codex/pull/28629

3.  **[#28609] Automations: 添加服务基础和概述 ([OPEN])**
    这是一个**巨大的、由8个PR组成的系列工作栈的起点**。该 PR 引入了“Automations”服务的核心概念和基础代码，预示着 Codex 将支持创建可持久化、可调度的自动化任务，如定时运行、CRUD 操作等。
    *链接:* https://github.com/openai/codex/pull/28609

4.  **[#28624] 并发加载插件和技能根目录 ([OPEN])**
    性能优化 PR。将插件和技能的加载过程改为并发执行（最多8个并发），并保持了顺序确定性，旨在显著提升应用启动时的初始化速度。
    *链接:* https://github.com/openai/codex/pull/28624

5.  **[#28494] 添加共享会话令牌预算 ([OPEN])**
    引入了针对“代理会话”的可选令牌预算功能。这允许用户为整个工作会话（包括其子线程）设置一个总令牌消耗上限，有助于更好地控制和预测成本。
    *链接:* https://github.com/openai/codex/pull/28494

6.  **[#27982] 在父会话启动时启动 Guardian 子会话 ([OPEN])**
    性能优化。将原本在首次执行自动审查时才创建的 Guardian 子会话，提前到父会话启动时初始化。这可以利用初始化阶段的热连接，减少用户首次使用审查功能时的延迟。
    *链接:* https://github.com/openai/codex/pull/27982

7.  **[#28148] 添加实验性的 Amazon Bedrock 登录和退出 ([OPEN])**
    扩展了 AI 模型接入能力。此 PR 允许用户使用 Codex 管理的 AWS 凭证登录和登出 Amazon Bedrock 服务，为使用非 OpenAI 模型提供了路径。
    *链接:* https://github.com/openai/codex/pull/28148

8.  **[#28409] 强制执行严格托管配置值 ([OPEN])**
    针对企业级管理场景，此 PR 允许管理员通过 `requirements.toml` 文件对一些关键配置（如 SQLite 路径、日志目录、更新检查等）进行强制锁定，即使用户也无权修改，增强部署一致性。
    *链接:* https://github.com/openai/codex/pull/28409

9.  **[#28411] 向配置添加键式 Shell 环境规则 ([OPEN])**
    改进了 Shell 环境变量的过滤策略配置。支持以键值对形式（如 `"CORP_*" = "include"`）明确指定哪些环境变量可以被代理访问，比之前的数组模式更清晰、强大。
    *链接:* https://github.com/openai/codex/pull/28411

10. **[#28625] 通过认证门控远程插件目录 ([CLOSED])**
    改进了插件市场的加载逻辑。当用户使用非官方认证时，将不会再尝试加载远程的全局插件目录，减少不必要的网络请求和启动延迟，同时可能也与授权和收费策略有关。
    *链接:* https://github.com/openai/codex/pull/28625

## 功能需求归类

从今日的 Issue 动态中，可以归纳出用户反复提到的几个功能方向：

1.  **速率限制与模型可用性：** 用户对 Token 消耗过快和被限制使用高容量模型表达了强烈不满，这也是获得最多评论和点赞的议题。核心诉求是希望付费订阅能获得更稳定、可预测的资源。
2.  **应用核心功能与性能：** “会话历史丢失/隐藏”、“上下文指示器消失”、“内存泄漏”和“初始化缓慢”是近期投诉的焦点。用户对应用的稳定性和数据可靠性要求极高。
3.  **平台兼容性与特定功能：** 反复出现 Windows 和 macOS 上的特定问题，如“全屏显示”、“`rg` 命令被拦截”、“Computer Use”不可用。这表明跨平台适配依然是需要持续投入的领域。
4.  **文档与用户指南：** 出现了关于如何卸载 CLI 工具的明确文档需求，显示新用户在入门阶段存在障碍。
5.  **开发者工具与最佳实践：** 对“导出会话”、“会话预算控制”和“PreToolUse 权限钩子”的请求，表明高级用户和开发者正在寻求更精细的控制和更强大的工作流集成能力。

## 开发者关注点

-   **Token 成本控制与资源稳定性是最强烈的痛点：** `#14593` 和 `#28507` 两个问题的高赞和高评论数，直接反映了开发者对不可控的成本和不可用的模型资源的焦虑。
-   **会话管理和历史数据可靠性是第二大焦点：** 多个 Issue（`#21128`, `#27353`, `#28606`）指向同一个问题：会话历史的可靠性和可见性。功能回归和新版本的 Bug 正在侵蚀用户对应用的信任。
-   **跨平台兼容性仍是持续的“硬骨头”：** 无论是 Windows 上的 WSL 支持、Computer Use 问题，还是 macOS 上的文件泄漏和安全策略问题，都说明在多个操作系统上保持一致、无错的体验是一项挑战。
-   **性能“债”开始显现：** `#21211` 和 `#26341` 这类问题表明，随着功能堆叠，应用的深层性能和资源管理问题正在浮出水面，影响到了长期使用的流畅度和系统健康。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，以下是为您准备的 2026-06-17 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-17

## 今日更新概览

今日社区活跃度集中在 Agent 核心能力的修复与安全加固上。开发者关注的焦点包括：通用 Agent 挂起问题、子 Agent 状态报告不准确、以及 Shell 命令执行后卡死等顽固性 bug。安全方面，社区提交了多项关于路径遍历、令牌泄露和 MCP OAuth 等关键问题的修复，体现了项目对安全性的高度重视。此外，社区对 Agent 自主性（如使用技能和子 Agent）的讨论仍然热烈，反映出用户对更智能、更自主的 Agent 行为的期待。

## 社区热点 Issues

1.  **通用 Agent 挂起问题**
    -   **影响场景**: 用户在 CLI 内进行简单操作（如创建文件夹）时，一旦需要“通用 Agent”接手，就会无限期挂起。用户需等待一小时以上才能取消。
    -   **问题范围**: 影响所有依赖通用 Agent 执行常规任务的场景，是严重的阻塞性问题。
    -   **社区反应**: 该 Issue 获得了 8 个👍，表明受影响的开发者较多。用户通过指令禁止使用子 Agent 作为临时规避方案。
    -   **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

2.  **子 Agent 恢复后状态误报**
    -   **影响场景**: 当子 Agent（如 `codebase_investigator`）因达到 `MAX_TURNS` 而中断时，父系统错误地将其恢复状态报告为“成功 (GOAL)”，隐藏了实际的中断原因。
    -   **问题范围**: 影响 Agent 执行的可靠性和调试过程的准确性，可能导致用户误以为任务已完成。
    -   **社区反应**: 开发者指出这是一个需要优先修复的 bug，因为它会误导对 Agent 性能的判断。
    -   **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3.  **Agent 使用技能和子 Agent 不足**
    -   **影响场景**: 即使用户配置了自定义技能（如 Gradle、Git 命令），Agent 也不会主动调用，除非明确指令。
    -   **问题范围**: 影响 CLI 的自动化和智能化潜力，用户期望 Agent 能根据上下文自主选择合适的工具。
    -   **社区反应**: 这是社区反馈的高频需求，开发者认为是一个经验性观察，但尚未有明确修复。
    -   **链接**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

4.  **Shell 命令执行后卡死**
    -   **影响场景**: Shell 命令已执行完毕并退出，但 CLI 仍显示“Awaiting user input”，导致流程无法继续。
    -   **问题范围**: 影响所有需要执行 Shell 命令的任务，如编译、测试、文件操作等，是核心交互流程的 bug。
    -   **社区反应**: 该 Issue 获得 3 个👍，被标记为优先修复，开发者正在努力复现和定位根因。
    -   **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

5.  **自动记忆系统 (Auto Memory) 问题**
    -   **影响场景**: `Auto Memory` 功能存在多个问题，包括：未能确定性过滤机密、对低信息量的 session 进行无限重试、以及静默跳过无效的内存补丁（patch）。
    -   **问题范围**: 影响自动记忆功能的可靠性、安全性和效率，可能导致隐私泄漏或资源浪费。
    -   **社区反应**: 多个关联 Issue 被创建，开发者正在系统性解决记忆系统的问题。
    -   **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)

6.  **浏览器子 Agent 在 Wayland 下失败**
    -   **影响场景**: `browser` 子 Agent 在 Wayland 显示服务器上运行失败，受影响的主要是 Linux 用户。
    -   **问题范围**: 限制了特定平台的可用性，需要开发者修复跨平台兼容性问题。
    -   **社区反应**: 用户报告此问题，但关注度相对较低。
    -   **链接**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

7.  **Agent 应阻止破坏性行为**
    -   **影响场景**: Agent 在执行复杂操作（如 Git 分支管理、数据库维护）时，可能会使用 `git reset --force` 等危险命令。
    -   **问题范围**: 这是一个通用的安全问题，用户希望 Agent 在执行潜在破坏性操作前能更加谨慎，或提供更安全的替代方案。
    -   **社区反应**: 用户呼吁增加安全机制，体现了对 Agent 安全性的关注。
    -   **链接**: [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

8.  **模型创建临时脚本混乱**
    -   **影响场景**: 当限制模型只能通过 Shell 执行时，它会在各个目录下生成大量临时编辑脚本，造成工作目录混乱。
    -   **问题范围**: 影响代码管理和清理工作，用户期望模型能更有序地管理其临时产物。
    -   **社区反应**: 用户反馈这是一个反直觉的行为，增加了额外的工作量。
    -   **链接**: [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

9.  **超过 128 个工具时遇到 400 错误**
    -   **影响场景**: 当启用的 Agent 和工具数量超过 128 个时，CLI 会返回 400 错误。
    -   **问题范围**: 影响使用大量自定义工具的高级用户，表明当前的工具管理机制存在上限问题。
    -   **社区反应**: 用户期望 Agent 能智能地筛选和适配当前上下文下的工具，而不是直接报错。
    -   **链接**: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

10. **Agent 的自认知能力提升**
    -   **影响场景**: Agent 对自己的 CLI 标志、快捷键和执行方式不够了解，无法作为自身的“专家指南”为用户提供帮助。
    -   **问题范围**: 影响用户体验和 Agent 的可用性，用户希望 Agent 能像“使用手册”一样指导用户使用它自己。
    -   **社区反应**: 这是一个功能需求，旨在提升 Agent 的智能水平和自我解释能力。
    -   **链接**: [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)

## 重要 PR 进展

1.  **修复思想部分泄露致无限循环**
    -   **内容**: 修复了模型内部`思想`（thinking/reasoning）泄露到历史记录中，导致模型在后续轮次中困惑并陷入自说自话的无限循环。
    -   **影响**: 直接影响所有会话的稳定性和智能水平，是核心层的修复。
    -   **链接**: [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)

2.  **修复路径穿越与安全敏感路径**
    -   **内容**: 对 LLM 生成的文件路径进行防御性处理和清理，并强制执行不区分大小写的敏感目录（如 `.git`、`.env`）黑名单。
    -   **影响**: 显著提升文件读写操作的安全性，防止潜在的安全漏洞。
    -   **链接**: [#27943](https://github.com/google-gemini/gemini-cli/pull/27943), [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)

3.  **MCP OAuth 令牌原子写入与刷新修复**
    -   **内容**: 修复 MCP OAuth 令牌写入非原子操作的问题，并修复了自动发现服务的刷新路径。
    -   **影响**: 提升 MCP 集成功能的可靠性和安全性，防止令牌损坏或刷新失败。
    -   **链接**: [#27664](https://github.com/google-gemini/gemini-cli/pull/27664), [#27889](https://github.com/google-gemini/gemini-cli/pull/27889)

4.  **上游工具设置迁移**
    -   **内容**: 将废弃的 `coreTools` 配置项迁移到新的 `tools.core` 嵌套结构。
    -   **影响**: 确保配置结构的兼容性和一致性，为未来的功能扩展做准备。
    -   **链接**: [#27947](https://github.com/google-gemini/gemini-cli/pull/27947)

5.  **多行文本截断修复**
    -   **内容**: 修复了 `truncateString` 函数在截断多行文本时错误地删除所有换行符的问题。
    -   **影响**: 提升文本渲染的准确性，影响所有需要显示或处理文本的场景。
    -   **链接**: [#27959](https://github.com/google-gemini/gemini-cli/pull/27959)

6.  **静态评估源码分析器**
    -   **内容**: 添加了第一个评估开发工具：一个用于解析 Eval 源文件的静态分析器，提取评估名称和行为元数据。
    -   **影响**: 为开发者提供了新的工具来分析评估代码，有望提升评估的质量和可维护性。
    -   **链接**: [#27631](https://github.com/google-gemini/gemini-cli/pull/27631)

7.  **`auto` 模型对非预览用户可见修复**
    -   **内容**: 修复了动态模型配置下，`auto` 模型别名对非预览用户不可见的问题。
    -   **影响**: 确保所有用户都能看到并使用 `auto` 模型选项，提升模型选择的易用性。
    -   **链接**: [#27718](https://github.com/google-gemini/gemini-cli/pull/27718)

8.  **Flash 模型名根据后端认证类型区分**
    -   **内容**: 修复了 Vertex AI 和 Gateway 后端使用不同 Flash 模型名（`gemini-3.5-flash` vs `gemini-3-flash`）的问题。
    -   **影响**: 确保不同后端的模型解析和调用正确，提升多后端支持的兼容性。
    -   **链接**: [#27760](https://github.com/google-gemini/gemini-cli/pull/27760)

9.  **MCP 资源跨服务器 URI 混淆修复**
    -   **内容**: 修复了多个 MCP 服务器返回相同 URI 时，资源查找可能返回错误服务器资源的安全问题。
    -   **影响**: 增强多 MCP 服务器环境下的资源隔离和访问安全性，防止信息泄露。
    -   **链接**: [#27964](https://github.com/google-gemini/gemini-cli/pull/27964)

10. **信任对话框 Hook 显示错误修复**
    -   **内容**: 修复了工作区信任对话框中，反向显示实际会执行的 Hook 命令的问题，避免了用户因信息失真而误允许恶意代码。
    -   **影响**: 修复了一个严重的安全 UI 问题，提高了安全性并防止用户被误导。
    -   **链接**: [#27915](https://github.com/google-gemini/gemini-cli/pull/27915)

## 功能需求归类

从今日的 Issues 中，可以归类出以下用户反复提及的功能方向：

-   **Agent 自主性与智能体**: 用户希望 Agent 能够更智能地判断何时使用技能、子 Agent 以及其他工具，而不是被动等待指令。这包括自动管理工具数量上限、自主选择更安全的操作等。
-   **可靠性/鲁棒性**: 用户多次报告 Agent 挂起、状态误报、Shell 命令执行卡死等严重问题，稳定性和可靠性是当前社区最核心的关切。
-   **安全性与权限管理**: 对 Agent 可能产生的破坏性操作 (如危险 Git 命令、操作数据库) 的担忧，以及对文件系统、内存等安全问题的关注，都指向了对更精细的权限控制和安全检查的需求。
-   **环境兼容性**: 包括在 Wayland 下的浏览器 Agent 失败、Tmux 环境下的背景检测错误等，表明用户对跨平台和环境兼容性有较高要求。
-   **开发工具与评估**: 用户和开发者都关注如何更好地开发、测试和评估 Agent 的行为。这包括对 AST 感知工具的研究、更可靠的内部评估系统等。

## 开发者关注点

-   **用户体验痛点**: 开发者对“Agent不听使唤”感到非常沮丧，尤其是在它不使用预设技能或陷入挂起时。高频反馈是“我需要明确指示才能让它使用工具”，这与“智能助手”的预期存在差距。
-   **调试与诊断困难**: 当子 Agent 失败时，系统报告“成功”导致开发者难以定位问题。这表明当前的错误处理和反馈机制需要改进，以便于更准确的诊断和排错。
-   **对安全性的高期待**: 开发者不仅关注外部安全威胁，也同样关心 Agent 自身行为的安全性，如防止其执行破坏性命令、防止内存泄漏等。这表明社区对 Agent 的信任度仍处于建立阶段。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-17

## 今日更新概览

过去 24 小时内，Copilot CLI 仓库有 1 个版本（v1.0.63）的发布信息，并出现了 **19 条活跃 Issue**（其中 16 条为今日新提交或更新）。社区反馈集中在 **Windows ARM64 崩溃**、**授权提示频繁**、**子代理丢失 MCP 工具访问** 以及 **模型配置静默降级** 等问题上，无新增 Pull Request。

---

## 版本发布

**v1.0.63**（2026-06-15 发布）
- 阻止的图像附件现在会提示用户操作指引（启用 vision 策略、切换支持 vision 的模型或更换图片），而非显示令人困惑的错误。
- `--help` 输出中的选项按字母顺序排序，包含含双短横线的选项。
🔗 [Release v1.0.63](https://github.com/github/copilot-cli/releases/tag/v1.0.63)

---

## 社区热点 Issues（10 条）

### 1. copilot.exe 在高负载下致命崩溃（Windows ARM64）
- **Issue #3687**：`copilot.exe` 在内存压力下（例如 Windows Terminal 标签页恢复时多个会话同时启动）出现 `BEX64 / 0xc0000409` 硬崩溃，非正常退出。影响版本 1.0.57 及 1.0.60。
- 社区反应：5 条评论，1 个 👍。
🔗 [https://github.com/github/copilot-cli/issues/3687](https://github.com/github/copilot-cli/issues/3687)

### 2. 单次请求授权提示过多（“授权疲劳”）
- **Issue #1168**：在单个高级请求（如分析 PR 失败原因）中，CLI 会弹出十余次授权确认，严重影响使用体验。已持续数月，至今未修复。
- 社区反应：2 条评论，2 个 👍。
🔗 [https://github.com/github/copilot-cli/issues/1168](https://github.com/github/copilot-cli/issues/1168)

### 3. VS Code Terminal 复制粘贴日文文本乱码
- **Issue #3813**：在 iTerm2 中复制日文输出正常，但在 VS Code Terminal 中复制后粘贴出现乱码。类似 #3776 问题。
- 社区反应：2 条评论，0 👍（更新于 2026-06-16）。
🔗 [https://github.com/github/copilot-cli/issues/3813](https://github.com/github/copilot-cli/issues/3813)

### 4. ContentExclusionFilter.isExcluded 崩溃
- **Issue #3828**：`rg` 工具在处理文件内容排除时崩溃，报 `TypeError: Cannot read properties of undefined (reading 'isExcluded')`。属于内部 JavaScript 错误。
- 社区反应：1 条评论，0 👍（新开）。
🔗 [https://github.com/github/copilot-cli/issues/3828](https://github.com/github/copilot-cli/issues/3828)

### 5. 恢复会话后执行 `/update` 导致标志冲突
- **Issue #3821**：使用 `copilot -r` 恢复会话后运行 `/update` 更新，CLI 重启时同时携带 `--session-id` 和 `-r/--resume` 两个冲突标志，导致会话无法恢复。
- 社区反应：1 条评论，0 👍（新开）。
🔗 [https://github.com/github/copilot-cli/issues/3821](https://github.com/github/copilot-cli/issues/3821)

### 6. 企业自定义模型支持
- **Feature Request #3730**：GitHub Copilot Enterprise 可在管理员后台配置自定义 AI 模型（OpenAI 兼容端点），但这些模型在 Copilot CLI 中不可用。用户希望在 CLI 中也能使用企业级自定义模型。
- 社区反应：1 条评论，**4 个 👍**。
🔗 [https://github.com/github/copilot-cli/issues/3730](https://github.com/github/copilot-cli/issues/3730)

### 7. 无法恢复/取消归档已归档的会话
- **Feature Request #3518**：用户不小心归档了一个包含多个子会话和检查点的长期项目会话后，找不到恢复/取消归档的入口。希望增加该功能。
- 社区反应：1 条评论，**3 个 👍**。
🔗 [https://github.com/github/copilot-cli/issues/3518](https://github.com/github/copilot-cli/issues/3518)

### 8. 子代理不再能访问 MCP 工具
- **Bug #3812**：自定义子代理（subagent）无法看到和使用 MCP 工具，而顶级代理仍可正常访问。推测与 MCP 工具的延迟加载有关。降级到旧版本也无法恢复。
- 社区反应：1 条评论，0 👍（新开）。
🔗 [https://github.com/github/copilot-cli/issues/3812](https://github.com/github/copilot-cli/issues/3812)

### 9. 取消操作时“Operation cancelled by user”被注入为新的用户消息
- **Bug #3826**：用户按 Esc / Ctrl-C 取消正在运行的 turn 后，字符串 “Operation cancelled by user” 被当作新的用户消息发送给模型，模型会“回复”该取消消息，造成逻辑混乱。
- 社区反应：0 条评论（新开）。
🔗 [https://github.com/github/copilot-cli/issues/3826](https://github.com/github/copilot-cli/issues/3826)

### 10. 推理努力度 “xhigh” 静默降级为 “medium”
- **Bug #3823**：当模型不支持 `xhigh`（如 claude-opus-4.6、claude-sonnet-4.6）时，CLI 并未自动回退到模型支持的最高级别（如 `max`），而是直接降为默认的 `medium`，且无任何提示。
- 社区反应：0 条评论（新开）。
🔗 [https://github.com/github/copilot-cli/issues/3823](https://github.com/github/copilot-cli/issues/3823)

---

## 重要 PR 进展

无。过去 24 小时内无新增或更新的 Pull Request。

---

## 功能需求归类

从今日活跃的 Issue 中可归纳出以下用户反复提及的改进方向：

| 方向 | 对应 Issue | 核心诉求 |
|------|------------|----------|
| **企业/自定义模型支持** | #3730 | 使 CLI 可用管理员配置的自定义 AI 模型 |
| **会话生命周期管理** | #3518 | 增加已归档会话的恢复/取消归档功能 |
| **MCP 工具兼容性与子代理** | #3812 | 修复子代理无法访问 MCP 工具的问题 |
| **只读命令异步执行** | #3829 | 让 `/mcp show` 等只读命令无需等待代理回合可立即执行 |
| **配置/插件改进** | #3822, #3820 | 支持 `skillDirectories` 在仓库级生效、为命令钩子添加文档 matcher 支持 |

---

## 开发者关注点

1. **稳定性与崩溃**：Windows ARM64 在负载下的硬崩溃（#3687）以及 ContentExclusionFilter 的 JS 崩溃（#3828）直接导致 CLI 无法使用，是当前最紧急的 bug。
2. **授权体验**：单请求多次授权（#1168）仍是长期未解决的痛点，影响自动化脚本和频繁使用场景。
3. **子代理与 MCP**：子代理突然丢失 MCP 工具访问（#3812）破坏了多代理协作工作流，用户反馈“降级也无效”，表明该问题深度绑定新版本逻辑。
4. **模型配置透明度**：推理努力度静默降级（#3823）、子代理使用不同模型（#3824）等缺乏用户通知，造成“明明配置了却未按预期工作”的困惑。
5. **键盘与终端**：VS Code Terminal 中日文复制乱码（#3813）和取消操作消息误注入（#3826）影响日常交互体验。
6. **会话恢复与更新冲突**：`/update` 在恢复会话中导致标志冲突（#3821），阻碍用户在线升级。

> 以上均为过去 24 小时内更新或新开的 Issue，数据截至 2026-06-17 日末。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-17

## 今日更新概览

过去 24 小时内，Kimi Code CLI 仓库共更新 **4 个 Issue**（其中 1 个为昨天新创建）、**1 个 Pull Request** 获得新活动。暂无新版本发布。社区反馈集中在默认步数限制过低、MCP 服务器自动发现导致 400 错误、新用户引导缺失以及隐藏思考过程的可选项需求上。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues

### 1. #1327 — [enhancement] More Steps per turn By Default
- **作者**: @sssxks
- **创建/更新**: 2026-03-03 / 2026-06-16
- **评论数**: 3
- **摘要**: 用户在使用过程中频繁遇到 `Max number of steps reached: 100` 错误，且上下文使用率仅 34.5% 时便停止。认为默认步数过低，希望提高默认值或让用户更容易调整。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1327

### 2. #1632 — [CLOSED] Feature Request: Option to hide thinking content while using thinking models
- **作者**: @yuantianyu177
- **创建/更新**: 2026-03-29 / 2026-06-16
- **评论数**: 2
- **👍**: 3
- **摘要**: 当前使用思考模型（如 kimi-k2-thinking-turbo）时，终端会实时显示思考过程。用户希望在获得更好推理质量的同时，能选择隐藏思考内容，以避免干扰。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1632

### 3. #2457 — [bug] Kimi Code CLI auto-discovers MCP server after user deleted it, causing unfixable 400 errors
- **作者**: @xavier2sy8827-cmyk
- **创建/更新**: 2026-06-16 / 2026-06-16
- **评论数**: 0
- **摘要**: 用户在删除 MCP 服务器后，Kimi Code CLI 仍自动发现并尝试连接该服务器，导致重复出现 400 错误，且无法通过常规方式修复。影响版本 v0.15.0，平台 Windows 10，使用模型 K2.7 Code。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2457

### 4. #2456 — Bug: Fresh install reports "LLM not set" with no guidance to run login
- **作者**: @lming112
- **创建/更新**: 2026-06-16 / 2026-06-16
- **评论数**: 0
- **摘要**: 通过 Homebrew 全新安装后（v1.47），执行任何命令（如 `kimi --print`）立即报错 `LLM not set`，未提示用户需要先执行 `kimi login`，导致新用户困惑。
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2456

---

## 重要 PR 进展

### #1771 — [OPEN] fix: always stringify tool message content in Chat Completions provider
- **作者**: @he-yufeng
- **创建/更新**: 2026-04-06 / 2026-06-16
- **摘要**: 修复 Issue #1762。OpenAI Chat Completions API 要求 `role: "tool"` 的消息 `content` 必须为字符串。当工具结果包含多个 `ContentPart`（如系统提醒 + 实际输出）时，代码保留了数组格式，导致返回 400 错误。本 PR 强制将数组扁平化为字符串。
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1771

---

## 功能需求归类

从过去 24 小时更新的 Issues 中，可归纳出以下用户反复提及的功能方向（基于有限样本）：

| 需求方向 | 相关 Issue | 说明 |
|---------|-----------|------|
| **默认步数/阈值调整** | #1327 | 用户希望提高默认 `Max steps` 值，或提供更直观的配置入口，减少因步数限制导致的中断。 |
| **思考过程可见性控制** | #1632 | 用户期望在使用推理模型时能够隐藏实时思考内容，以获得更干净的终端输出。 |
| **MCP 服务器管理修复** | #2457 | 用户删除 MCP 服务器后，CLI 仍自动发现并尝试连接，导致持续报错。需修复自动发现逻辑或提供清除缓存的机制。 |
| **新用户引导缺失** | #2456 | 全新安装后未提示用户登录，直接报错 `LLM not set`，缺乏友好的初始设置引导。 |

---

## 开发者关注点

- **新用户首次体验**：Issue #2456 反映了当前版本缺乏清晰的登录引导，可能阻碍新用户上手。Homebrew 用户尤其容易遇到此问题。
- **默认配置不合理**：Issue #1327 指出默认步数上限（100）远低于实际可用上下文容量，导致工具过早停止，影响连续任务效率。
- **MCP 自动发现副作用**：Issue #2457 表明自动发现功能在用户主动删除服务后仍持续报错，且无有效修复手段，属于潜在的数据一致性问题。
- **思考过程显示可配置化**：Issue #1632 获得 3 个 👍，说明部分用户希望在使用推理模型时能自主控制思考内容的可见性，以优化终端阅读体验。

以上所有条目均对应 GitHub 链接，可点击查看完整讨论。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，这是为您生成的 2026-06-17 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 ｜ 2026-06-17

## 今日更新概览

今日社区活跃度较高，虽无新版本发布，但在 Issues 和 PR 方面动作密集。**会话（Session）管理与多模型兼容性**是今日讨论的核心，多个关于 MiniMax 模型兼容性、会话无限循环以及推理过程异常的问题得到了修复或深入讨论。此外，关于**原生会话目标**以及**自动化迭代任务**的功能请求获得了社区大量关注和点赞。

## 社区热点 Issues

1.  **`#27167` [功能请求]: 添加原生会话目标 (`/goal`)** 🌟
    *   **摘要**: 社区呼声极高的一个功能。用户希望引入持久化的会话目标/生命周期特性，而不是仅依赖临时的斜杠命令。
    *   **影响**: 该请求获得了 **87 个赞** 和 **50 条评论**，表明开发者对更强大、更结构化的会话控制有强烈需求。
    *   **链接**: [Issue #27167](https://github.com/anomalyco/opencode/issues/27167)

2.  **`#25832` [Bug]: OpenCode 无法读取图片**
    *   **摘要**: 用户报告自 2026年4月29日 起，OpenCode 无法读取 `.png` 或 `.jpg` 图片文件，导致之前能够正常工作的“看图改代码”工作流失效。错误信息为 `Bad...`。
    *   **影响**: 直接影响了依赖多模态能力的开发者工作流，涉及图片分析和基于视觉的代码修改场景。
    *   **链接**: [Issue #25832](https://github.com/anomalyco/opencode/issues/25832)

3.  **`#21470` [Bug]: OpenCode 严重 CPU 密集**
    *   **摘要**: 用户反馈，与其他 AI 工具相比，OpenCode 在等待外部调用时，自身进程占用了极高的 CPU 资源，导致整体效率下降和成本增加。在消耗 300k tokens 后，OpenCode 进程自身耗时超过 1.5 毫秒。
    *   **影响**: 影响所有用户的本地性能体验，尤其是在处理长会话时，会造成更高的计算资源消耗和延迟。
    *   **链接**: [Issue #21470](https://github.com/anomalyco/opencode/issues/21470)

4.  **`#18001` [功能请求]: 实现 `/loop` 命令自动循环执行任务** 🌟
    *   **摘要**: 用户请求添加一个 `/loop` 命令，以便自动化执行重复性或基于时间的迭代任务，避免每次都使用冗长的自然语言提示。
    *   **影响**: 获得了 **27 个赞**，说明自动化迭代工作流是很多开发者期望拥有的特性，能显著提升特定场景下的效率。
    *   **链接**: [Issue #18001](https://github.com/anomalyco/opencode/issues/18001)

5.  **`#28957` [Bug]: "上游空闲超时" 错误**
    *   **摘要**: 在 macOS Tahoe 系统上，使用 `writing-plans` 技能时，会话因“上游连接空闲超时”而中断。这是一个基础设施层面的稳定性问题。
    *   **影响**: 影响使用特定模型服务（如自托管模型）的用户，尤其是在处理需要长时间思考或生成的任务时。
    *   **链接**: [Issue #28957](https://github.com/anomalyco/opencode/issues/28957)

6.  **`#8345` [Bug]: `zsh: illegal hardware instruction opencode`**
    *   **摘要**: 用户在终端打开 OpenCode 时遇到 `illegal hardware instruction` 错误，提示与硬件指令集不兼容。此问题已持续数月，仍在开放中。
    *   **影响**: 主要影响在较旧或特定型号硬件（尤其是 Apple Silicon）上运行 OpenCode 的用户，导致程序无法启动。
    *   **链接**: [Issue #8345](https://github.com/anomalyco/opencode/issues/8345)

7.  **`#29879` [Bug]: `@ai-sdk/azure` 响应 API 加密内容验证失败**
    *   **摘要**: 使用 Azure 的 Responses API 时，在多轮工具调用后，会持续出现“加密内容无法验证”的错误。问题与无状态模式 (`store: false`) 相关。
    *   **影响**: 影响使用 Azure OpenAI 服务的用户，导致多轮交互会话频繁中断。
    *   **链接**: [Issue #29879](https://github.com/anomalyco/opencode/issues/29879)

8.  **`#24879` [功能请求]: 推出 Pro 付费层级 ($20) 和首月折扣**
    *   **摘要**: 用户希望对 OpenCode Go 服务推出更高价位的 Pro 计划，以解决现有免费或低价计划每月额度不足的问题，并提供更清晰的预算控制。
    *   **影响**: 涉及到产品定价和用户分级策略，反映了部分重度用户对更高限额、付费服务的需求。
    *   **链接**: [Issue #24879](https://github.com/anomalyco/opencode/issues/24879)

9.  **`#16349` [功能请求]: 添加左右面板布局切换选项**
    *   **摘要**: 桌面版固定布局为“左侧聊天，右侧文件树”，用户请求增加一个可选方案，即交换左右面板的位置，以适应个人习惯或专注流。
    *   **影响**: 影响桌面版用户体验，是一个常见的 UI 自定义需求。
    *   **链接**: [Issue #16349](https://github.com/anomalyco/opencode/issues/16349)

10. **`#31972` [Bug]: 新布局与设计中，无法切换 Plan/Build 模式**
    *   **摘要**: 启用“新布局与设计”功能标志后，UI 上的 Plan/Build 模式切换按钮和快捷键 `Ctrl+.` 均失效。
    *   **影响**: 直接破坏核心工作流，导致用户无法在规划和构建模式间切换。该问题是关于新 UI 的回归 Bug。
    *   **链接**: [Issue #31972](https://github.com/anomalyco/opencode/issues/31972)

## 重要 PR 进展

1.  **`#32609` [修复]: 清理 MiniMax 工具结果文本**
    *   **内容**: 针对 MiniMax 模型拒绝带有工具调用历史会话的问题（`#32608`），该 PR 通过清理工具返回结果文本来修复。
    *   **重要性**: 直接解决了一个阻碍用户切换到 MiniMax 模型的兼容性 Bug。
    *   **链接**: [PR #32609](https://github.com/anomalyco/opencode/pull/32609)

2.  **`#32610` [修复]: 桌面版跳过对 `$HOME` 和根目录的文件监控**
    *   **内容**: 修复桌面版因监控整个 `$HOME` 或 `/` 目录导致 `inotify` 超时和 CPU 高占用的问题。
    *   **重要性**: 一个重要的性能修复，能显著减轻桌面版在大型文件系统下的资源消耗。
    *   **链接**: [PR #32610](https://github.com/anomalyco/opencode/pull/32610)

3.  **`#32489` [修复]: 清理 OpenAI MCP 工具架构**
    *   **内容**: MCP 服务器可能暴露复杂 JSON Schema 的工具，该 PR 修复了 OpenCode 在处理元组样式 (`items`) 时的兼容性问题。
    *   **重要性**: 提升了与 MCP（模型上下文协议）生态的兼容性和健壮性。
    *   **链接**: [PR #32489](https://github.com/anomalyco/opencode/pull/32489)

4.  **`#32604` [修复]: 修复模型切换时推理部分类型丢失**
    *   **内容**: 修复了在会话中切换模型时，因推理部分（reasoning part）类型处理不当导致的前缀缓存大规模失效和长时间延迟问题。
    *   **重要性**: 改善了频繁切换模型用户的体验，减少了切换带来的额外等待时间和 Token 消耗。
    *   **链接**: [PR #32604](https://github.com/anomalyco/opencode/pull/32604)

5.  **`#32612` [修复]: 从 ChatGPT 模型列表中排除 `-pro` 模型**
    *   **内容**: 修复了使用 ChatGPT OAuth 账户时，`gpt-5.5-pro` 等模型显示可选但请求失败的问题。
    *   **重要性**: 修复了用户界面与实际可用性不匹配的 Bug，提升了用户体验。
    *   **链接**: [PR #32612](https://github.com/anomalyco/opencode/pull/32612)

6.  **`#27554` [功能]: 本地局域网 (LAN) 提供商发现 + 自动发现模型**
    *   **内容**: 添加了通过 mDNS 等方式自动发现局域网内的 OpenAI 兼容服务器，并在 `/connect` 菜单中展示的功能。
    *   **重要性**: 一个长期开发的较大功能，简化了连接本地或局域网内模型服务的流程。
    *   **链接**: [PR #27554](https://github.com/anomalyco/opencode/pull/27554)

7.  **`#26861` [修复]: 修复长会话中旧消息消失的问题**
    *   **内容**: 为 TUI（终端用户界面）添加了懒加载滚动功能，解决了在超长会话中，向上滚动时旧消息丢失的问题。
    *   **重要性**: 核心 UI 修复，显著提升了长会话的用户体验。
    *   **链接**: [PR #26861](https://github.com/anomalyco/opencode/pull/26861)

8.  **`#32592` [修复]: 在 OpenAI OAuth 路径上以结构化消息发送系统上下文**
    *   **内容**: 修复了 OpenAI OAuth / Codex 路径错误地将系统上下文扁平化到 `instructions` 字段的问题，使其与非 OAuth 路径行为一致。
    *   **重要性**: 对使用 OAuth 登录 OpenAI 服务的用户至关重要，修复了潜在的兼容性 Bug。
    *   **链接**: [PR #32592](https://github.com/anomalyco/opencode/pull/32592)

9.  **`#32193` [修复]: 修复无法在隐藏文件夹中提及文件的问题**
    *   **内容**: 修复了在 `@` 文件提及功能中，无法找到并引用隐藏文件夹（如 `.config`）内文件的问题。
    *   **重要性**: 修复了一个隐蔽但影响特定配置文件管理工作流的 Bug。
    *   **链接**: [PR #32193](https://github.com/anomalyco/opencode/pull/32193)

10. **`#27936` [修复]: 添加 Service Worker 实现缓存优先的静态资源加载**
    *   **内容**: 为 Web UI 添加 Service Worker，实现缓存优先策略，以提升前端性能。
    *   **重要性**: 这是一个合并自自动化清理流程的优化，能提升 Web 端用户的加载速度和离线可用性。
    *   **链接**: [PR #27936](https://github.com/anomalyco/opencode/pull/27936)

## 功能需求归类

*   **会话与任务管理**: 用户强烈要求更强大的会话控制功能，如**原生会话目标** (`#27167`) 和**自动化迭代任务** (`#18001`)。这表明社区希望 OpenCode 能更好地支持长周期、结构化的开发任务。
*   **模型支持与兼容性**: 对**新模型（如 MiniMax M3, GLM-5.2）的兼容性**是近期的热点问题，包括工具调用、会话切换等 Bug。同时，也有对**自动切换模型** (`#32601`) 和付费计划 (`#24879`) 的讨论。
*   **性能与稳定性**: **CPU 占用过高** (`#21470`) 和**空闲超时** (`#28957`) 是影响基础体验的痛点。此外，**无限压缩循环** (`#32615`, `#27919`) 导致 Token 浪费的问题也得到了社区和开发者的重视。
*   **UI/UX 定制**: 包括**左右面板布局切换** (`#16349`)、**RTL 文本渲染** (`#32602`) 以及**新布局 Bug** (`#31972`) 等问题，反映了用户对界面可配置性和兼容性的需求。
*   **平台兼容性**: **Windows 平台** 上文件提及 (`#28824`) 和终端状态重置 (`#18901`) 的问题持续存在。**macOS** 上 `illegal hardware instruction` (`#8345`) 问题也仍未解决。
*   **插件与 MCP 生态**: 对**中间件插件管道** (`#5148`) 的提议和对 **MCP 工具架构** (`#32489`) 的修复，表明社区对扩展 OpenCode 能力的兴趣。

## 开发者关注点

*   **模型切换的兼容性阵痛**: 开发者尝试在不同模型间切换时（特别是转向 MiniMax 等新模型），经常遇到因历史工具调用格式不兼容而导致会话中断的问题。这表明跨模型会话的标准化处理是一个关键痛点。
*   **会话管理功能的缺失**: 在缺少类似 `/goal` 或 `/loop` 原生命令的情况下，用户需要编写冗长的 Prompt 来维持会话方向和重复执行任务，效率不高。社区对更高级的会话管理机制有明确需求。
*   **资源消耗与稳定性焦虑**: “CPU 密集型”和“无限循环”等 Bug 直接导致了 Token 和资金的浪费，并降低了开发者的使用体验和信任感。开发者对 OpenCode 自身的基础性能和资源管理提出了更高要求。
*   **新老特性体验不一致**: “新布局与设计”功能标志导致的 Plan/Build 模式切换失效，是一个典型的回归 Bug，给尝鲜新功能的用户带来了负面体验，也提醒社区关注新功能的稳定性测试。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，以下是根据您提供的 GitHub 数据生成的 2026-06-17 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-06-17

## 今日更新概览

今日 Qwen Code 发布了 `v0.18.1-preview.0` 和 `v0.18.1-nightly` 两个版本，主要修复了上下文超长警告和文档问题。社区讨论热烈，共产生 25 条更新过的 Issue 和 50 条更新过的 PR，重点关注 OAuth 免费策略调整、安全扫描警报以及 `/loop` 功能的持续对齐工作。

## 版本发布

### [v0.18.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-preview.0)
- **主要变更:**
    - **修复:** 对超出大小的上下文指令发出警告 (`@he-yufeng`)。
    - **文档:** 修复了过期的默认值、CLI 语法和工具命名不一致问题系列。

### [v0.18.1-nightly.20260616.a68b2e1e7](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-nightly.20260616.a68b2e1e7)
- **主要变更:**
    - 与 `v0.18.1-preview.0` 变更类似，包含上下文超长警告和文档修复。

## 社区热点 Issues

1.  **[#3203] Qwen OAuth Free Tier Policy Adjustment**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/3203
    - **摘要:** 社区用户 @pomelo-nwu 提议大幅调整 OAuth 免费策略，包括将每日免费请求数从 1000 次降至 100 次，并计划完全关闭 OAuth 免费接入点。此议题已产生 **136 条评论**，反映出社区对免费额度变化的强烈关注。

2.  **[#4615] Add project-scoped .mcp.json support with pending approval semantics**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/4615
    - **摘要:** 用户 @qqqys 提议新增项目级别的 `.mcp.json` 配置文件支持，并在启动 MCP 服务器前引入“待审批”状态，以增强安全性和配置管理。该请求涉及安全、配置和 MCP 工具范围。

3.  **[#5055] Trojan:JS/ShaiWorm.DBA!MTB**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5055
    - **摘要:** 用户 @ivancheg8 提交了一个 VSCode 扩展（`qwen-code-vscode-ide-companion-0.18.0`）被杀毒软件检测为木马的问题。此问题影响 Windows 用户对 IDE 扩展安全性的信任。

4.  **[#5160] bug(cli): /model lists discontinued qwen-oauth coder-model even when OAuth is not configured**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5160
    - **摘要:** 用户反馈 CLI 的 `/model` 命令在用户未配置 OAuth 时仍列出了已废弃的 OAuth 模型，造成混淆。该 bug 已被标记为欢迎贡献。

5.  **[#5212] fix: terminal stuck in SGR mouse mode after qwen exits**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5212
    - **摘要:** 新提交的 Bug，描述 Qwen Code 退出后终端仍处于 SGR 鼠标追踪模式，导致鼠标滚动失效。问题根源定位在 `useMouseEvents.ts` 中的 `exit` 处理程序。该 Issue 已关闭，并对应一个 PR 修复。

6.  **[#5210] 0.18.1-ExitPlanMode卡住**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5210
    - **摘要:** 中文用户 @czyt1988 报告在 0.18.1 版本中，退出计划模式（ExitPlanMode）卡住长达 7 小时，之前能正常切换到 YOLO 模式。该问题影响了核心工作流。

7.  **[#5206] Auto-update on 0.18.0 → 0.18.1 fails on older glibc**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5206
    - **摘要:** 用户报告在 CentOS 7 (glibc 2.17) 上自动更新失败。由于 npm 全局前缀不可写，自动更新静默地迁移到了独立安装程序，但该过程在新的 glibc 环境下出错，暴露了更新流程的兼容性问题。

8.  **[#5180] 了主会话作为项目经理、派发任务...但任务执行到一半就崩了**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5180
    - **摘要:** 用户报告在多 Agent 协作场景中，主会话作为项目经理派发任务后，子 Agent 在执行到一半时崩溃。会话持续 12 小时，暴露了长期运行的多 Agent 任务的稳定性问题。

9.  **[#5201] feat(channel): Add QQ Bot (QQ机器人) channel adapter**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5201
    - **摘要:** 社区开发者 @Eric-GoodBoy-Tech 提交了为 Qwen Code 增加 QQ 机器人渠道适配器的特性请求，并提供了相应的 PR。旨在整合 QQ 平台，与现有的 Telegram、微信等渠道并列。

10. **[#5176] request: allow sub-agent max parallel count setting**
    - **链接:** https://github.com/QwenLM/qwen-code/issues/5176
    - **摘要:** 用户 @fantasyz 提出请求，希望设置子 Agent 的最大并行运行数量，当数量超出时自动进入等待队列。这对于资源有限的本地模型运行场景至关重要。

## 重要 PR 进展

1.  **[#5213] fix(cli): use writeSync in exit handler to disable SGR mouse mode**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5213
    - **摘要:** 修复了 [#5212](https://github.com/QwenLM/qwen-code/issues/5212) 中描述的终端鼠标模式卡死问题。在退出处理程序中使用 `writeSync` 确保在进程退出前发送禁用 SGR 模式的控制序列。

2.  **[#5178] ci(autofix): prioritize recent unattended bugs over stale ones**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5178
    - **摘要:** 优化 CI 的自动修复工作流，将此前优先处理“最老旧”问题的策略改为优先处理“最近上报且已分类但无人处理”的 bug，以提高自动修复的时效性。

3.  **[#5197] feat(loop): wire prompt-only /loop to self-paced wakeups**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5197
    - **摘要:** 实现 `/loop <prompt>` 命令的自定步长循环功能。该命令立即执行任务，然后让模型自行调度一次未来唤醒，取代之前固定的循环安排。这是对齐 `/loop` 行为的第二步。

4.  **[#5182] feat(loop): add second-resolution session wakeup engine**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5182
    - **摘要:** 为自定步长 `/loop` 添加秒级分辨率的会话唤醒引擎，对齐 Claude Code 的 `ScheduleWakeup` 功能。这是对齐工作的第一个步骤。

5.  **[#5185] fix(plan-gate): isolate gate agent AbortSignal from parent signal chain**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5185
    - **摘要:** 修复了在 AUTO/YOLO 预计划模式下，计划审批门控 Agent 因继承父级 AbortSignal 而陷入无限重试循环的问题。该 PR 通过隔离信号链解决了退出计划模式卡死的问题。

6.  **[#5167] fix(cli): hide unconfigured discontinued OAuth model**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5167
    - **摘要:** 修复了 Issue [#5160](https://github.com/QwenLM/qwen-code/issues/5160)。当用户会话未使用 OAuth 认证时，交互式 `/model` 选择器将隐藏已废弃的 Qwen OAuth 模型，避免混淆。

7.  **[#5209] fix(core): read SHORT-typed TIFF dimensions correctly on big-endian files**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5209
    - **摘要:** 修复图像分词器中 TIFF 文件尺寸解析的逻辑错误，确保在大端序文件上能正确读取 `SHORT` 类型的宽高数值。

8.  **[#5202] feat(channel): add QQ Bot (QQ机器人) channel adapter**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5202
    - **摘要:** 新增 `@qwen-code/channel-qqbot` 包，为 Qwen Code 添加 QQ 机器人渠道适配器，包括 WebSocket 连接、消息处理等核心功能的初步实现。

9.  **[#5126] feat(vision-bridge): transcribe images to text for text-only models**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5126
    - **摘要:** 为纯文本模型增加“视觉桥接”功能。当纯文本模型收到图片时，会通过多模态模型将图片转述为文字，再传递给主模型。该功能默认关闭。

10. **[#5196] fix(permissions): do not model /dev/tcp and /dev/udp redirects as file I/O**
    - **链接:** https://github.com/QwenLM/qwen-code/pull/5196
    - **摘要:** 修复了一个权限解析漏洞。此前将 shell 重定向目标（如 `/dev/tcp/evil.com/9000`）错误地视为文件 I/O，导致网络重定向被误判为文件读取操作。该修复提升了安全性。

## 功能需求归类

从本期活跃的 Issues 中，社区反复提及如下功能方向：

- **多 Agent 协作与控制:** 包括允许设置子 Agent 并行数量限制 (#5176)、修复主/子会话任务中途崩溃 (#5180)、以及请求移植 Claude Code 的动态工作流特性 (#4721)。
- **闭环自动化 (Loop):** 社区持续跟进 `/loop` 功能的改进，包括唤醒引擎 (#5156)、与提示词结合的自定义循环 (#5184) 等，希望实现对 Claude Code 功能的完全对齐。
- **MCP 安全与配置:** 引入项目级 `.mcp.json` 配置并加入待审批语义（#4615），反映出用户对 MCP 环境安全性和可控性的进一步需求。
- **平台/渠道扩展:** 社区开发者活跃贡献新的渠道适配器，如 QQ 机器人 (#5201)。
- **终端/UI 本地化与行为优化:** 包括本地化硬编码的英文 UI 字符串 (#5186)、修复会话恢复时无法区分历史会话 (#3099)。

## 开发者关注点

- **安全警告与信任问题:** Issue #5055 中关于 VSCode 扩展被报毒的问题，直接影响用户对官方分发软件的信任，属于高优先级问题。
- **关键流程稳定性:** 退出计划模式卡死 (#5210)、多 Agent 任务崩溃 (#5180) 等 Bug 严重影响了核心工作流的体验，开发者对此抱怨较多。
- **更新与兼容性问题:** 旧版 glibc 系统上的自动更新失败 (#5206) 暴露了安装流程的兼容性短板，阻碍了用户升级。
- **空参数与误触发修复:** 多个 Issue 和 PR 针对 `exit_plan_mode` 的空参数 (#5177, #5188)、终端鼠标模式残留 (#5212) 等问题进行了修复，反映出社区对细节和鲁棒性的关注。
- **工作树与会话管理:** 工作树清理受阻 (#5208) 和会话恢复信息不明确 (#3099) 的问题，影响了用户日常的会话管理和项目组织。

</details>