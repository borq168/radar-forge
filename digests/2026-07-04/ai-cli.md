# AI CLI 工具社区动态日报 2026-07-04

> 生成时间: 2026-07-04 00:27 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-07-04)

## 1. 今日横向概览
过去 24 小时内，Claude Code 连续发布两个版本，重点修复多智能体内存泄漏与用户交互确认机制；OpenAI Codex 社区聚焦 GPT-5.5 模型兼容性，维护者密集推进 Windows 沙盒安全与 Git 隔离 PR；Gemini CLI 与 Qwen Code 保持高频迭代，分别围绕 Agent 状态控制、Web Shell 体验及 KV-cache 优化展开；GitHub Copilot CLI 与 OpenCode 的讨论则集中于 MCP 插件集成缺陷、TUI 交互优化及计费鉴权稳定性，Kimi Code CLI 今日无活动。

## 2. 各工具活跃度对比

| 工具名称 | 更新 Issues 数 | 合并/更新 PR 数 | Release 发布数 |
| :--- | :--- | :--- | :--- |
| **Gemini CLI** | 50 | 22 | 1 |
| **GitHub Copilot CLI** | 31 | 0 | 0 |
| **Claude Code** | 10 (热点) | 3 (实质性) | 2 |
| **OpenAI Codex** | 10 (热点) | 10 | 1 |
| **OpenCode** | 10 (热点) | 10 | 0 |
| **Qwen Code** | 10 (热点) | 10 | 2 |
| **Kimi Code CLI** | 0 | 0 | 0 |

*(注：部分工具摘要仅提供热点/重要数量，已如实标注。)*

## 3. 共同出现的功能方向

- **子代理（Subagent）状态与资源管理**：Claude Code 关注深度嵌套导致的 OOM 与后台任务卡死（#74035, #73916）；Gemini CLI 聚焦子代理达到轮次限制后的错误状态报告与无限挂起（#22323, #21409）；OpenAI Codex 提出为子代理独立配置模型/Provider 的需求（#14039）。
- **安全沙盒与执行环境隔离**：OpenAI Codex 密集推进 Git 传输隔离、PowerShell 解析器信任及 Windows 路径沙盒加固（#28760, #30628, #30990）；Gemini CLI 探索零依赖 OS 沙盒并收紧 Shell 参数扩展权限（#19873, #28175）；Qwen Code 修复了数据处理脚本未强制执行子进程隔离的安全隐患（#6282, #6285）。
- **MCP 协议集成与生态扩展**：GitHub Copilot CLI 暴露了未遵循 `tools/list` 游标分页的规范兼容问题（#4006）；OpenCode 推进 MCP 生命周期 API 向 V2 架构迁移及 execute 工具接入（#34435, #35232）；Qwen Code 在 Web Shell 中优化了 MCP 服务器的 @ 引用与图标渲染（#6279）。
- **上下文管理与 Token/缓存优化**：Qwen Code 集中解决 `tool_search` 导致的 KV-cache 失效及提示缓存命中问题（#6265, #6225）；OpenAI Codex 反馈上下文自动压缩导致 AGENTS 规则遗忘及推理 Token 异常聚类（#25792, #30364）；Gemini CLI 则推进了开箱即用支持 `AGENTS.md` 上下文文件（#28240）。

## 4. 差异化定位分析

- **Claude Code**：侧重多智能体架构的深度应用与复杂代码库审计，当前技术重心在于解决子代理内存管理、长上下文安全护栏精准度，以及强化自动化决策的人工确认“刹车”机制。
- **OpenAI Codex**：侧重跨平台桌面端体验与底层执行安全，技术路线聚焦 Windows 沙盒兼容性、Git/PowerShell 安全隔离加固，以及对最新模型（GPT-5.5）推理行为的微调与路由控制。
- **Gemini CLI**：侧重 Agent 行为控制与终端原生交互，关注子代理状态机的严格管理（防止假成功/挂起）、Auto Memory 机制优化以及终端 UX 阻塞问题的修复。
- **GitHub Copilot CLI**：侧重企业级网络环境适配与 IDE 深度集成，当前痛点集中在 MCP 规范兼容性、企业 HTTP 代理支持、BYOK（自带密钥）认证以及跨项目上下文隔离。
- **OpenCode**：侧重 V2 架构下的工具链迁移与多端 UI/UX 优化，聚焦 MCP 生命周期管理、TUI 表单渲染、Shell 子进程管理以及第三方模型（如 OpenRouter）的额度适配。
- **Qwen Code**：侧重国内网络环境适配、企业级通道集成与推理成本优化，技术重心集中在 Web Shell 体验、企业微信机器人集成、KV-cache 保留机制及 Windows 编码兼容性。

## 5. 社区活跃度记录

- **高活跃度**：Gemini CLI（50 Issues, 22 PRs, 1 Release）和 Qwen Code（10 Issues, 10 PRs, 2 Releases）在过去 24 小时内代码提交与社区讨论最为密集；OpenAI Codex 和 OpenCode 均产出了 10 个实质性 PR，维护者响应迅速。
- **中等活跃度**：Claude Code 连续发布 2 个版本并合并 3 个核心 PR，社区对多智能体内存问题讨论热烈（单 Issue 超 100 评论）；GitHub Copilot CLI 有 31 个 Issue 更新，但无 PR 合并与版本发布，处于问题收集阶段。
- **低/无活跃度**：Kimi Code CLI 今日无活动记录。

## 6. 有证据支撑的观察

1. **子代理（Subagent）的可靠性与资源管理成为多智能体架构的核心痛点。** Claude Code 出现子代理内存泄漏与 OOM（#74035, #74001），Gemini CLI 面临子代理达到轮次限制后错误报告成功及无限挂起（#22323, #21409），OpenAI Codex 也有为子代理独立配置模型的需求（#14039）。这表明随着 Agent 复杂度的提升，运行时的状态机管理与资源回收机制亟待完善。
2. **CLI 工具正密集收紧本地执行环境的安全沙盒与隔离边界。** OpenAI Codex 维护者密集提交了针对 Git 配置、PowerShell 包装器及 Windows 路径命名空间的安全加固 PR（#28760, #30628, #30990）；Gemini CLI 推进 Shell 参数扩展的确认机制与零依赖 OS 沙盒（#28175, #19873）；Qwen Code 也迅速修复了数据处理脚本未强制执行子进程隔离的问题（#6282, #6285）。
3. **MCP（Model Context Protocol）生态集成进入深水区，规范兼容性与生命周期管理受到关注。** GitHub Copilot CLI 暴露了未遵循 `tools/list` 游标分页的规范兼容问题（#4006）；OpenCode 正在将 MCP 生命周期 API 迁移至 V2 架构并接入 execute 工具（#34435, #35232）；Qwen Code 则在 Web Shell 中优化了 MCP 的 @ 引用体验（#6279）。
4. **上下文缓存命中率与 Token 成本优化成为底层性能迭代的关键方向。** Qwen Code 社区集中反馈了 `tool_search` 导致 KV-cache 失效（#6265）及 `/review` 技能 Token 消耗过高的问题，维护者正通过代理工具模式和保留父对话 tools 数组来修复缓存命中问题（#6268, #6225）；OpenAI Codex 也出现了上下文压缩遗忘规则（#25792）和推理 Token 异常聚类（#30364）的反馈。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 (2026-07-04)

## 1. 今日更新概览
过去 24 小时内，Claude Code 连续发布了 v2.1.200 和 v2.1.201 两个版本，核心调整了用户交互确认机制（取消 `AskUserQuestion` 默认自动继续）并将默认权限模式改为“手动”。社区 Issues 讨论活跃，焦点主要集中在多智能体（Subagent）内存管理、安全护栏误报以及跨端配置同步等问题。

## 2. 版本发布
- **v2.1.201**: 移除了 Claude Sonnet 5 会话中用于 harness 提醒的对话中途 system role。([Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.201))
- **v2.1.200**:
  - 更改 `AskUserQuestion` 对话框行为，默认不再自动继续，用户可通过 `/config` 选择开启空闲超时。
  - 将 CLI、`--help`、VS Code 和 JetBrains 中的“默认”权限模式统一更改为“Manual”（手动）。([Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.200))

## 3. 社区热点 Issues
1. **[BUG] AskUserQuestion 60秒无响应后自动继续**：社区反馈最热烈的问题（109条评论，353赞），直接促使了 v2.1.200 的机制修复。([#73125](https://github.com/anthropics/claude-code/issues/73125))
2. **[BUG] 深度嵌套子代理导致内存无限增长引发 OOM**：由 Claude 自身分析 crash 日志提交的报告，指出多子代理扇出导致主机级 OOM。([#74035](https://github.com/anthropics/claude-code/issues/74035))
3. **[BUG] 多子代理负载下 CLI 进程内存膨胀至 6.5GB**：另一份关于子代理内存泄漏的报告，指出 CliGovernor 在内存压力下未能有效驱逐进程。([#74001](https://github.com/anthropics/claude-code/issues/74001))
4. **[FEATURE] 在 Claude Desktop 和 CLI 之间同步 Skills**：高赞需求（125赞），希望解决两端技能配置不一致的问题。([#20697](https://github.com/anthropics/claude-code/issues/20697))
5. **[FEATURE] 支持对比 main 以外分支的 diff**：开发者希望在 IDE 集成中能够灵活选择 diff 对比的基准分支，而非仅限于 main。([#23626](https://github.com/anthropics/claude-code/issues/23626))
6. **[BUG] Worktree 隔离导致环境变量超出 ARG_MAX 限制**：使用 worktree 隔离的子代理会导致后续 Bash 工具调用因参数列表过长（E2BIG）而失败。([#74032](https://github.com/anthropics/claude-code/issues/74032))
7. **[BUG] Desktop 应用忽略 permissions.allow 规则**：桌面端未正确读取权限白名单，导致频繁弹出授权提示，甚至包括 Claude 自身的配置目录。([#73587](https://github.com/anthropics/claude-code/issues/73587))
8. **[BUG] Sonnet 5 模型行为报告：过度自信与幻觉**：用户反馈模型在长上下文中出现幻觉、擅自修改配置，并提交了详细的复现记录。([#70315](https://github.com/anthropics/claude-code/issues/70315))
9. **[BUG] 内容安全护栏对合法请求产生误报**：多位用户反馈常规的代码审查和基础设施任务被安全护栏错误拦截，影响正常开发。([#74047](https://github.com/anthropics/claude-code/issues/74047))
10. **[BUG] 子代理生成的后台任务在父任务完成后永远显示 "Running"**：后台任务状态管理存在缺陷，任务结束后状态未更新，且无法通过 TaskStop 终止。([#73916](https://github.com/anthropics/claude-code/issues/73916))

## 4. 重要 PR 进展
*(注：过去24小时仅有3个实质性 Open PR，其余为 Closed 或无意义提交，故仅列出以下3个。)*
1. **fix(security-guidance): 允许 StructuredOutput schema 中 findings 为 null**：修复了 agentic commit reviewer 在未找到漏洞时输出 `null` 导致 schema 校验失败并浪费额外 turn 重试的问题。([#74021](https://github.com/anthropics/claude-code/pull/74021))
2. **enhance(feature-dev): 为 code-architect agent 添加系统设计模式与边界情况上下文**：增强了 feature-dev 插件中的架构设计代理，弥合高层设计与代码库特定架构之间的差距。([#74010](https://github.com/anthropics/claude-code/pull/74010))
3. **fix(plugin-dev): 统一 skill 描述中的措辞**：将 plugin-dev 中遗漏的 "wants to" 统一修改为 "asks to"，保持插件文档的一致性。([#74009](https://github.com/anthropics/claude-code/pull/74009))

## 5. 功能需求归类
- **交互与权限控制**：用户高度关注 AI 在无人值守时的行为边界。包括 `AskUserQuestion` 的超时与自动继续机制（[#73125](https://github.com/anthropics/claude-code/issues/73125), [#73487](https://github.com/anthropics/claude-code/issues/73487)），以及默认权限模式向“手动”的回归。
- **多智能体（Subagent）资源与状态管理**：随着 Agent 工具的使用增加，子代理的内存泄漏（[#74035](https://github.com/anthropics/claude-code/issues/74035), [#74001](https://github.com/anthropics/claude-code/issues/74001)）、环境变量溢出（[#74032](https://github.com/anthropics/claude-code/issues/74032)）和后台任务状态卡死（[#73916](https://github.com/anthropics/claude-code/issues/73916)）成为核心诉求。
- **跨端体验与 IDE 集成**：开发者期望 CLI 与 Desktop 端的配置（如 Skills）能够无缝同步（[#20697](https://github.com/anthropics/claude-code/issues/20697)），并在 IDE 中获得更灵活的 Diff 对比能力（[#23626](https://github.com/anthropics/claude-code/issues/23626)）。

## 6. 开发者关注点
- **多智能体架构的稳定性**：多个高优 Bug 指向子代理（Subagent）在并发和深度嵌套场景下的内存管理问题。开发者在利用 Agent 工具进行复杂任务分发时，遭遇了 OOM 和进程僵死，这表明多智能体运行时的资源回收和隔离机制仍需优化。
- **自动化决策的“刹车”机制**：v2.1.200 对 `AskUserQuestion` 和默认权限模式的修改，直接回应了开发者对“AI 擅自做主”的担忧。开发者更倾向于在关键节点保留人工确认权，而非追求极致的自动化流转。
- **安全护栏的精准度**：多位开发者反馈常规代码审查被安全策略误拦截（[#74047](https://github.com/anthropics/claude-code/issues/74047), [#74045](https://github.com/anthropics/claude-code/issues/74045)）。在长上下文和复杂代码库审计场景下，降低 Guardrails 的假阳性是提升开发体验的关键。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-04)

## 1. 今日更新概览
过去 24 小时内，OpenAI Codex 社区的讨论焦点集中在 GPT-5.5 模型在特定 API 端点下的兼容性报错、推理 Token 异常聚类，以及 Windows 平台桌面端的沙盒与性能问题。维护者侧则密集推进了底层 Git 操作的安全隔离、PowerShell 执行策略加固以及模型容量重试机制的代码审查与合并。

## 2. 版本发布
- **rust-v0.143.0-alpha.35**：发布了 Rust 核心组件的 0.143.0-alpha.35 预览版本，主要包含常规的底层迭代与修复。([Release 页面](https://github.com/openai/codex/releases))

## 3. 社区热点 Issues
以下是过去 24 小时内更新且讨论度较高的 10 个 Issue，反映了当前用户的核心使用场景与痛点：

1. **Responses-Lite 端点模型兼容性报错**：多名用户反馈在 Codex App 中使用 `X-OpenAI-Internal-Codex-Responses-Lite` 时，GPT-5.5 会返回“模型不支持”错误，而 GPT-5.4 正常。([#30224](https://github.com/openai/codex/issues/30224), [#30406](https://github.com/openai/codex/issues/30406))
2. **GPT-5.5 推理 Token 聚类导致性能下降**：用户通过元数据分析发现，GPT-5.5 的 `reasoning_output_tokens` 异常集中在 516/1034/1552 等固定边界，导致复杂任务的推理质量下降。([#30364](https://github.com/openai/codex/issues/30364))
3. **VSCode 插件无法回滚代码更改**：在 macOS 和 VSCode 环境下，Codex 插件生成的代码修改在尝试 Revert 时失败，影响开发者的代码审查工作流。([#7291](https://github.com/openai/codex/issues/7291))
4. **Windows 11 桌面端频繁卡顿与冻结**：在硬件资源充足（如 32GB RAM）的 Windows 11 Pro 环境下，Codex App 仍出现明显的 UI 冻结和卡顿现象。([#20214](https://github.com/openai/codex/issues/20214))
5. **Windows 沙盒环境导致 `apply_patch` 失败**：在 Windows 平台上，文件编辑操作因沙盒权限或路径解析问题触发错误，导致补丁应用失败。([#30009](https://github.com/openai/codex/issues/30009))
6. **上下文压缩遗忘 AGENTS 规则**：在长任务中，上下文自动压缩后模型会遗忘 `AGENTS.md` 中的规则，导致任务进度从 97% 大幅回退至 42%。([#25792](https://github.com/openai/codex/issues/25792))
7. **macOS CLI 认证路由错误**：相同的 ChatGPT 账号在 Windows 上正常，但在 macOS CLI 中被错误路由至 Responses-Lite 端点并导致认证失败。([#30595](https://github.com/openai/codex/issues/30595))
8. **桌面端重启后 Computer Use 插件失效**：在 macOS 桌面端，重启应用后 Computer Use 插件状态丢失，显示不可用，需手动恢复。([#26429](https://github.com/openai/codex/issues/26429))
9. **需求：允许为子代理独立配置模型/Provider**：开发者提议允许生成的 Subagent 使用与父会话不同的模型、Provider 或 Profile，以实现更灵活的成本与能力路由。([#14039](https://github.com/openai/codex/issues/14039))
10. **用户反馈 GPT-5.5 智力主观下降**：部分 Pro 订阅用户反馈近两日 GPT-5.5 的代码生成与逻辑推理能力出现明显退化，表现类似早期版本。([#30137](https://github.com/openai/codex/issues/30137))

## 4. 重要 PR 进展
维护者在过去 24 小时内重点推进了安全隔离、容错机制与 CLI 体验优化，以下是 10 个关键 PR：

1. **重试模型容量错误**：在核心层增加对模型容量失败（HTTP 503）的结构化重试机制，包含 30 秒、2 分钟和 5 分钟的抖动延迟。([#31058](https://github.com/openai/codex/pull/31058))
2. **阻止三方补丁应用前的自定义合并驱动**：在 `git apply --3way` 前阻断仓库自定义的 merge driver，防止反向应用破坏无关的暂存工作。([#30854](https://github.com/openai/codex/pull/30854))
3. **CLI 兑换选择器显示重置详情**：在 CLI 的 Redeem 界面展示重置积分的具体到期时间和消耗顺序。([#30488](https://github.com/openai/codex/pull/30488))
4. **CLI `/usage` 添加推荐邀请功能**：在 CLI 的 `/usage` 命令中集成临时的客户端推荐邀请流程，复用现有的 ChatGPT 认证会话。([#30313](https://github.com/openai/codex/pull/30313))
5. **默认分支发现保持本地引用**：将默认分支的发现机制限制在本地 refs，避免触发远程 SSH 或凭证助手等网络操作。([#28761](https://github.com/openai/codex/pull/28761))
6. **隔离市场 Git 传输与工作区配置**：防止 Marketplace 操作继承不受信任工作区的 URL 重写、SSH 命令或自定义 Git 协议。([#28760](https://github.com/openai/codex/pull/28760))
7. **集中 Git 助手启动的仓库权限**：创建统一的操作域来管理 Git 可执行文件的信任链，避免多步操作中权限校验不一致。([#30896](https://github.com/openai/codex/pull/30896))
8. **信任受保护的 PowerShell 解析器**：在 Windows 上检查 PowerShell 命令时，使用受保护的解析器，拒绝执行不受信任的包装器。([#30628](https://github.com/openai/codex/pull/30628))
9. **允许扩展管理的 Apps 认证**：为 IDE 扩展提供托管 Codex Apps 认证状态的能力。([#30982](https://github.com/openai/codex/pull/30982))
10. **强化命名空间感知的可执行文件策略匹配**：修复 Windows 下带有尾随句号或空格的设备路径绕过沙盒basename `Allow` 权限的安全隐患。([#30990](https://github.com/openai/codex/pull/30990))

## 5. 功能需求归类
基于近期 Issues 的反馈，用户的功能需求主要集中在以下三个方向：
- **多模型与子代理路由控制**：用户希望更精细地控制模型调用，包括为子代理指定独立的模型/Provider（[#14039](https://github.com/openai/codex/issues/14039)），以及解决特定模型（如 GPT-5.5）在内部轻量级端点（Responses-Lite）的兼容性问题（[#30224](https://github.com/openai/codex/issues/30224)）。
- **上下文管理与长任务可靠性**：针对长上下文场景，用户要求修复上下文自动压缩导致的规则遗忘（[#25792](https://github.com/openai/codex/issues/25792)）和状态丢失（[#31033](https://github.com/openai/codex/issues/31033)），并期望实现 Codex App 与 Client 之间的实时状态同步（[#31062](https://github.com/openai/codex/issues/31062)）。
- **工作区与 IDE 深度集成**：开发者呼吁支持包含多个独立 Git 仓库的父级工作区目录（[#26338](https://github.com/openai/codex/issues/26338)），并修复 VSCode 插件在代码回滚（[#7291](https://github.com/openai/codex/issues/7291)）和审批提示（[#30821](https://github.com/openai/codex/issues/30821)）方面的体验缺陷。

## 6. 开发者关注点
- **Windows 平台的稳定性与沙盒兼容性**：Windows 环境是当前 Bug 报告的重灾区。开发者频繁遭遇桌面端 UI 卡顿（[#20214](https://github.com/openai/codex/issues/20214)）、沙盒导致 `apply_patch` 失败（[#30009](https://github.com/openai/codex/issues/30009)）、WSL 环境下 Computer Use 插件不可用（[#25301](https://github.com/openai/codex/issues/25301)），以及后台进程轮询导致 PowerShell 窗口闪烁（[#26613](https://github.com/openai/codex/issues/26613)）等问题。
- **GPT-5.5 模型行为与配额管理**：开发者对 GPT-5.5 的实际表现保持高度敏感。除了推理 Token 异常聚类（[#30364](https://github.com/openai/codex/issues/30364)）和主观智力下降（[#30137](https://github.com/openai/codex/issues/30137)）外，桌面端闲置时异常消耗 Exec 配额（[#31054](https://github.com/openai/codex/issues/31054)）以及 Web 端与客户端限额不同步（[#23192](https://github.com/openai/codex/issues/23192)）也引发了对计费准确性的担忧。
- **安全边界与沙盒逃逸防护**：从维护者密集提交的 PR 可以看出，当前开发重心之一是收紧本地执行环境的安全边界。重点防范通过 Git 配置（[#28760](https://github.com/openai/codex/pull/28760)）、PowerShell 包装器（[#30628](https://github.com/openai/codex/pull/30628)）以及 Windows 特殊路径命名空间（[#30990](https://github.com/openai/codex/pull/30990)）绕过沙盒限制的安全隐患。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-04)

## 1. 今日更新概览
过去 24 小时内，Gemini CLI 社区保持了较高的活跃度，共更新了 50 个 Issues 和 22 个 Pull Requests。社区讨论和代码贡献主要集中在 Agent 行为控制（如子代理挂起、状态报告错误）、Auto Memory 机制优化、终端交互体验修复以及安全与权限边界收紧等方面。

## 2. 版本发布
- **v0.51.0-nightly.20260703.gf7af4e518**
  - **更新内容**：引入了 caretaker egress cloud run service 骨架，用于处理通过 Cloud Pub/Sub 推送的验证操作事件消息。
  - **详情**：[Release v0.51.0-nightly.20260703.gf7af4e518](https://github.com/google-gemini/gemini-cli/pull/28167)

## 3. 社区热点 Issues
以下是过去 24 小时内更新且值得关注的 10 个 Issues，反映了当前用户的核心诉求与遇到的痛点：

1. **Subagent 达到 MAX_TURNS 后错误报告成功**：`codebase_investigator` 子代理在达到最大轮次限制时，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
2. **Generalist agent 无限挂起**：当 CLI 将任务延迟给 generalist agent 时，即使是创建文件夹等简单操作也会永久挂起。[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
3. **Shell 命令执行后卡在 "Waiting input"**：执行简单的 CLI 命令后，终端界面仍显示命令处于活动状态并等待用户输入，导致流程阻塞。[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
4. **利用模型 Bash 亲和力实现零依赖 OS 沙盒**：提议利用 Gemini 3 模型原生使用 POSIX 工具的能力，结合零依赖 OS 沙盒和后置执行意图路由，以提升代码探索效率并保障安全。[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
5. **Auto Memory 无限重试低信号会话**：Auto Memory 提取代理在判断会话为低信号后未将其标记为已处理，导致后续不断重试。[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
6. **Browser subagent 在 Wayland 环境下失败**：浏览器子代理在 Wayland 显示服务器下无法正常终止或执行。[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
7. **工具数量超过 128 个时触发 400 错误**：当可用工具超过 400 个（或 128 个限制）时，CLI 会遭遇 API 400 错误，需要更智能的工具作用域限制机制。[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
8. **Agent 应停止或阻止破坏性行为**：模型在执行复杂 Git 操作或数据库维护时，偶尔会使用 `git reset --force` 等危险命令，需要增加安全拦截。[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
9. **Browser Agent 忽略 settings.json 配置覆盖**：浏览器代理完全忽略全局或项目级 `settings.json` 中的配置（如 `maxTurns`）。[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
10. **Auto Memory 需要确定性脱敏并减少日志**：Auto Memory 在将本地转录内容发送给后台提取代理时，存在敏感信息泄露风险，需在进入模型上下文前进行确定性脱敏。[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)

## 4. 重要 PR 进展
以下是近期更新且对系统稳定性、安全性和体验有重要影响的 10 个 Pull Requests：

1. **修复 Thought 泄漏问题**：从清理的历史轮次中剥离模型的内部思考（thoughts），防止其泄漏到纯文本历史中导致模型陷入无限循环或模仿草稿本行为。[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
2. **要求对 Shell 参数扩展进行确认**：在交互模式下，将包含 shell 参数扩展的白名单命令降级为需要确认；在非交互（YOLO）模式下直接拒绝，防止注入风险。[#28175](https://github.com/google-gemini/gemini-cli/pull/28175)
3. **开箱即用支持 AGENTS.md**：修复了 `AGENTS.md` 上下文文件默认被忽略的问题，将其与 `GEMINI.md` 一同加入默认上下文数组。[#28240](https://github.com/google-gemini/gemini-cli/pull/28240)
4. **按服务器解析 MCP 资源防止跨服务器混淆**：修复了当两个 MCP 服务器暴露相同 URI 资源时，`read_mcp_resource` 返回错误服务器内容的问题。[#28143](https://github.com/google-gemini/gemini-cli/pull/28143)
5. **VS Code 伴侣扩展保留终端焦点**：修复了在 VS Code 中批准文件编辑后，关闭后台 diff 预览会窃取集成终端键盘焦点的问题。[#28183](https://github.com/google-gemini/gemini-cli/pull/28183)
6. **延迟检测可用编辑器以避免启动缓慢**：将启动时同步探测所有已知编辑器的逻辑改为延迟检测，显著改善 Windows 等进程创建昂贵系统上的启动性能。[#28144](https://github.com/google-gemini/gemini-cli/pull/28144)
7. **忽略会话重置后过期的 update_topic 调用**：修复了用户在执行 `/clear` 时，模型最后发出的 `update_topic` 工具调用污染新会话状态的问题。[#28153](https://github.com/google-gemini/gemini-cli/pull/28153)
8. **要求批准的 bot patch 产物**：在 CI 发布流程中增加显式批准标记，确保发布作业仅应用与批准标记配对的非空 patch，保持推理到发布的边界封闭。[#28178](https://github.com/google-gemini/gemini-cli/pull/28178)
9. **通过相对路径匹配 ls ignore globs**：修复了 `ls` 忽略模式在包含路径分隔符时仅匹配 basename 的问题，使 `**` 等 glob 模式按预期工作。[#28247](https://github.com/google-gemini/gemini-cli/pull/28247)
10. **文档：解释 MCP 环境变量扩展**：补充了 MCP 服务器路径和环境变量扩展的文档，明确了支持的语法（如 `$VAR`, `${VAR:-fallback}`）及不支持的语法。[#28248](https://github.com/google-gemini/gemini-cli/pull/28248)

## 5. 功能需求归类
根据近期 Issues 的讨论，社区的功能需求主要集中在以下几个方向：

- **Agent 行为与子代理控制**：用户要求更精确的子代理状态报告（如 MAX_TURNS 处理）、解决 Generalist/Browser agent 挂起问题、强制 Agent 使用自定义技能，以及限制破坏性命令（如 `git reset --force`）。
- **Auto Memory 与上下文管理**：需求集中在优化 Auto Memory 的重试逻辑（避免低信号会话死循环）、增强隐私脱敏机制、处理无效补丁，以及原生支持 `AGENTS.md` 等上下文文件。
- **终端 UX 与 IDE 集成**：包括修复 Shell 命令执行后的 UI 卡死、终端调整大小时的闪烁问题、外部编辑器退出后的屏幕损坏，以及改善 VS Code 集成时的焦点管理。
- **安全、权限与沙盒**：探讨引入零依赖 OS 沙盒、收紧 Shell 参数扩展的执行权限、限制工具数量上限以避免 API 报错，以及加强 CI/CD 流程中的产物审批机制。

## 6. 开发者关注点
- **Agent 可靠性与状态透明度**：开发者对 Agent（尤其是子代理）在达到限制或遇到错误时“假装成功”或“无限挂起”的行为较为敏感。这直接影响了自动化工作流的信任度，社区正推动更严格的状态机管理和终止原因报告。
- **终端交互的阻塞与性能**：CLI 工具的日常使用体验是开发者关注的核心。命令执行后 UI 未正确释放、启动时同步探测编辑器导致的延迟、以及特定环境（Wayland、WSL）下的兼容性问题，是当前反馈的高频痛点。
- **自主操作的安全边界**：随着 Agent 自主执行 Shell 和 Git 命令的能力增强，开发者对潜在的破坏性操作和注入风险（如 Shell 参数扩展）表达了明确担忧，要求在“非交互模式”下实施更严格的白名单和确认机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### 今日更新概览
过去 24 小时内，GitHub Copilot CLI 仓库未发布新版本或合并新的 Pull Request，但社区在 Issues 讨论上保持活跃，共更新了 31 条 Issue。当前社区的讨论焦点主要集中在终端 TUI 渲染异常、MCP（Model Context Protocol）插件集成缺陷、Agent 调度与上下文管理问题，以及企业级网络环境下的代理配置痛点。

### 社区热点 Issues
以下是过去 24 小时内值得关注的 10 个核心 Issue，涵盖了稳定性、功能缺陷与用户诉求：

1. **终端渲染：Alt-screen 视图引发问题**
   用户反馈近期引入的 alt-screen 视图导致了若干终端显示问题，寻求关闭该模式并恢复原始渲染方式的方法，该问题引发了较多社区讨论。
   [Issue #1799](https://github.com/github/copilot-cli/issues/1799)
2. **模型可用性：`gpt-5.3-codex` 模型调用失败**
   用户在 Copilot Web 中尝试调用 `gpt-5.3-codex` 模型时遇到运行时错误（`session.create failed`），导致 Agent 模式无法正常工作。
   [Issue #3997](https://github.com/github/copilot-cli/issues/3997)
3. **个性化配置：请求支持自定义主题**
   用户提议允许创建自定义主题并通过 JSON 文件进行分享，该功能请求获得了 20 个赞，反映了社区对 CLI 界面个性化的需求。
   [Issue #1504](https://github.com/github/copilot-cli/issues/1504)
4. **客户端稳定性：Windows 原生运行时频繁崩溃**
   用户报告在 Windows 平台下 CLI 原生运行时频繁且不可预测地崩溃，该问题自 2026 年 5 月起跨越多个版本（v1.0.15 至 v1.0.53+）仍未解决。
   [Issue #4026](https://github.com/github/copilot-cli/issues/4026)
5. **状态管理：新会话召回历史出现跨项目串扰**
   由于本地会话状态（`~/.copilot/session-state.json`）按全局时间排序，新 CLI 会话在召回近期工作时，错误地返回了同一机器上其他项目的历史记录。
   [Issue #4025](https://github.com/github/copilot-cli/issues/4025)
6. **多模态输入：语音模式 ASR 模型静默失败**
   在 `/voice` 模式下，所有内置的自动语音识别（ASR）模型转录均返回空结果，疑为 Foundry Local Core 中 MultiModalProcessor 的路由 Bug。
   [Issue #4024](https://github.com/github/copilot-cli/issues/4024)
7. **Agent 调度：Headless 模式下工具别名解析为空**
   在 headless 模式下调度 Agent 时，`web` 或 `search` 工具类别别名静默解析为空，导致工具调用失败且无任何错误提示。
   [Issue #4023](https://github.com/github/copilot-cli/issues/4023)
8. **企业网络：内置 `web_fetch` 不支持 HTTP 代理**
   在企业 WSL 环境中，内置的 `web_fetch` 工具无法通过强制 HTTP 代理进行网络访问，导致 `/research` 命令和 URL 检索功能失效。
   [Issue #4019](https://github.com/github/copilot-cli/issues/4019)
9. **MCP 兼容性：未遵循 `tools/list` 游标分页**
   CLI 未遵循 MCP 规范中 `tools/list` 的游标分页（nextCursor）机制，仅加载首页工具，导致后续页面的工具被静默忽略。
   [Issue #4006](https://github.com/github/copilot-cli/issues/4006)
10. **BYOK 认证：`--acp` 模式下自带密钥被拒绝**
    使用环境变量配置自带密钥（BYOK）时，`--acp` 模式下的 `session/new` 仍要求 GitHub 登录，属于 1.0.61-1.0.68 版本的回归 Bug。
    [Issue #4016](https://github.com/github/copilot-cli/issues/4016)

### 功能需求归类
从近期的 Issues 中，可以观察到用户在以下几个功能方向上的集中诉求：

- **MCP 与插件生态集成**：涉及插件安装时配置文件未合并（[#2709](https://github.com/github/copilot-cli/issues/2709)）、MCP 工具列表分页未遵循（[#4006](https://github.com/github/copilot-cli/issues/4006)）、添加 MCP 服务器时终端渲染错乱（[#4014](https://github.com/github/copilot-cli/issues/4014)），以及插件注册状态管理逻辑矛盾（[#4021](https://github.com/github/copilot-cli/issues/4021)）。
- **终端 UI 与交互体验**：包括关闭 alt-screen 视图（[#1799](https://github.com/github/copilot-cli/issues/1799)）、自定义主题支持及持久化（[#1504](https://github.com/github/copilot-cli/issues/1504), [#4015](https://github.com/github/copilot-cli/issues/4015)）、TUI 滚动速度配置（[#4018](https://github.com/github/copilot-cli/issues/4018)）、鼠标选择复制时受滚动条字符干扰（[#4009](https://github.com/github/copilot-cli/issues/4009)）以及触控滚动失效（[#3570](https://github.com/github/copilot-cli/issues/3570)）。
- **Agent 调度与自动化**：支持非交互式运行 `/init` 命令以适配 Shell 脚本（[#4011](https://github.com/github/copilot-cli/issues/4011)）、修复 headless 模式下工具类别别名解析问题（[#4023](https://github.com/github/copilot-cli/issues/4023)）、以及请求只读斜杠命令（如 `/mcp show`）异步执行（[#3829](https://github.com/github/copilot-cli/issues/3829)）。
- **多模态与模型参数支持**：修复语音模式 ASR 模型失效（[#4024](https://github.com/github/copilot-cli/issues/4024)）、解决 BYOK 配置下特定模型（如 `glm-5.2`）不支持 `reasoning effort` 参数的问题（[#4012](https://github.com/github/copilot-cli/issues/4012)），以及修复 macOS 下剪贴板原始图像数据粘贴失败（[#4013](https://github.com/github/copilot-cli/issues/4013)）。

### 开发者关注点
综合社区反馈，当前开发者在使用 Copilot CLI 时的核心痛点集中在以下方面：

- **企业级与复杂网络环境适配**：开发者在企业环境中使用 CLI 时遇到网络代理支持不足的问题（如 `web_fetch` 不支持 HTTP 代理 [#4019](https://github.com/github/copilot-cli/issues/4019)），以及在 VS Code Dev Container / WSL2 等隔离环境中的设备码认证挂起问题（[#1112](https://github.com/github/copilot-cli/issues/1112)）。
- **上下文隔离与状态管理**：本地会话状态存储按全局时间排序，导致跨项目召回历史时出现上下文串扰（[#4025](https://github.com/github/copilot-cli/issues/4025)）；此外，IDE 自动连接在会话 fork/关闭后误判为“被占用”而跳过连接（[#4020](https://github.com/github/copilot-cli/issues/4020)）。
- **底层稳定性与跨平台兼容性**：Windows 平台原生运行时的长期未决崩溃问题严重影响体验（[#4026](https://github.com/github/copilot-cli/issues/4026)）；同时，macOS 平台下存在特定的剪贴板交互痛点（如图像粘贴 [#4013](https://github.com/github/copilot-cli/issues/4013)、文本复制提示误导 [#4010](https://github.com/github/copilot-cli/issues/4010)）。
- **BYOK (Bring Your Own Key) 体验**：自带密钥用户在非交互模式（`--acp`）下遭遇认证拦截的回归问题（[#4016](https://github.com/github/copilot-cli/issues/4016)），以及在配置特定第三方模型时参数兼容性报错（[#4012](https://github.com/github/copilot-cli/issues/4012)），影响了高级用户的自定义工作流。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### 今日更新概览
今日 OpenCode 社区活跃度较高，核心讨论集中在 V2 架构下的 MCP 与 CodeMode 工具链迁移、TUI 交互优化以及 Shell 子进程挂起问题的修复。此外，多位用户反馈了 OpenCode Go 订阅状态异常及免费模型额度耗尽的问题，引发了社区对计费与鉴权稳定性的关注。

### 社区热点 Issues
1. **免费模型余额不足报错**：大量用户在使用 DeepSeek V4 Flash Free 等免费模型时遇到余额不足提示，引发广泛讨论。[#35142](https://github.com/anomalyco/opencode/issues/35142)
2. **新版本 CPU 占用飙升**：用户反馈近期更新后 CPU 占用大幅增加，导致多开会话时系统卡顿。[#30086](https://github.com/anomalyco/opencode/issues/30086)
3. **Web UI 自动同步项目**：建议在新设备或浏览器打开 Web UI 时，自动从服务器拉取并同步项目列表。[#13626](https://github.com/anomalyco/opencode/issues/13626)
4. **PowerShell 中 `/exit` 误退终端**：在 PowerShell 中使用 `/exit` 命令会直接导致整个终端窗口关闭，而非仅退出 OpenCode。[#26038](https://github.com/anomalyco/opencode/issues/26038)
5. **GitHub Copilot 提供商鉴权失效**：部分用户反馈清除缓存并重新授权后，仍无法获取 GitHub Copilot 模型列表。[#33696](https://github.com/anomalyco/opencode/issues/33696)
6. **OpenRouter 免费模型 Token 限制**：使用 Kimi 2.5 Free 模型时，因 OpenRouter 额度或 max_tokens 限制导致请求失败。[#12219](https://github.com/anomalyco/opencode/issues/12219)
7. **V2 架构迁移 MCP 生命周期 API**：跟踪将 MCP 生命周期、状态及连接/断开 API 迁移至 V2 架构的进度。[#34435](https://github.com/anomalyco/opencode/issues/34435)
8. **TUI 无法以纯文本粘贴图片路径**：在 TUI 中粘贴图片路径时，会被自动解析为图片格式，导致不支持图片的模型无法获取纯文本路径。[#19892](https://github.com/anomalyco/opencode/issues/19892)
9. **`pkill -f` 导致 Bash 工具挂起**：在 TUI 中执行带有 `-f` 参数的 `pkill` 命令会导致 Bash 工具调用挂起直至超时。[#25664](https://github.com/anomalyco/opencode/issues/25664)
10. **SKILL.md 支持禁用模型调用**：建议在 `SKILL.md` 前置元数据中支持 `disable-model-invocation: true`，以限制特定技能下的模型调用行为。[#34498](https://github.com/anomalyco/opencode/issues/34498)

### 重要 PR 进展
1. **修复中断工具错误文本**：在 LLM 恢复时暴露 `task_id`，使 Agent 能够通过 Task 工具恢复被中断的子 Agent。[#35222](https://github.com/anomalyco/opencode/pull/35222)
2. **V2 MCP 接入 execute 工具**：将 execute 工具接入 V2 MCP，并保留子调用元数据以供 TUI 展示和授权。[#35232](https://github.com/anomalyco/opencode/pull/35232)
3. **修复终端面板未聚焦时的输入问题**：恢复在终端面板打开但未聚焦时的输入组合功能，同时保留终端自身的输入焦点逻辑。[#35249](https://github.com/anomalyco/opencode/pull/35249)
4. **Zen API 限制 10MB 请求体**：为 Zen API 添加 10MB 请求体大小限制，防止超大上下文负载耗尽控制台资源。[#35237](https://github.com/anomalyco/opencode/pull/35237)
5. **修复 Bash 工具挂起问题**：通过作用域拆除（scope teardown）替代多重超时机制，解决子进程继承 stdio 导致的 `close` 事件不触发问题。[#35245](https://github.com/anomalyco/opencode/pull/35245)
6. **TUI 紧凑 Shell 进度输出**：将 Shell 工具的进度输出渲染为紧凑的 TUI 进度条，减少原始重绘刷屏。[#35247](https://github.com/anomalyco/opencode/pull/35247)
7. **运行时应用配置模型成本覆盖**：修复配置中的模型价格覆盖在运行时未生效的问题。[#17645](https://github.com/anomalyco/opencode/pull/17645)
8. **TUI 渲染表单并路由 question 工具**：将 V2 Form 服务集成到 TUI，并将 question 工具迁移至该表单服务。[#35189](https://github.com/anomalyco/opencode/pull/35189)
9. **CodeMode 添加 OpenAPI 工具适配器**：新增 OpenAPI 3.x 文档到 CodeMode 工具子树的适配器，支持按操作生成工具。[#35192](https://github.com/anomalyco/opencode/pull/35192)
10. **文档更新：添加 oh-my-loop 到生态**：在中英文生态文档的 Projects 部分添加外部循环控制器 oh-my-loop。[#35075](https://github.com/anomalyco/opencode/pull/35075)

### 功能需求归类
- **UI/UX 与交互优化**：用户期望改善多端体验，包括 Web UI 项目自动同步 (#13626)、TUI 进度条紧凑输出 (#35247)、TUI 表单渲染 (#35189) 以及支持标记会话为未读 (#30348)。
- **Agent 行为与工具控制**：社区关注对 Agent 自主性的精细控制，如支持在 SKILL.md 中禁用模型调用 (#34498)、在计划执行前增加人工审批 (HITL) 机制 (#35239)，以及防止 Agent 擅自修改无关文件 (#35244)。
- **多端与跨平台兼容性**：涉及 PowerShell 中 `/exit` 命令行为修正 (#26038) 以及 Desktop (Electron) 环境下自定义 Provider 初始化失败的修复 (#31909)。
- **生态与集成扩展**：包括将 MCP 生命周期 API 迁移至 V2 (#34435)、新增 OpenAPI 工具适配器 (#35192) 以及将 oh-my-loop 纳入生态文档 (#35251)。

### 开发者关注点
- **订阅与计费系统稳定性**：多位用户反馈 OpenCode Go 订阅状态异常，提示“免费额度耗尽”或付费模型无法使用 (#35191, #35252, #35215)；同时免费模型余额不足报错 (#35142) 也是今日最高频的 Issue。
- **资源消耗与性能表现**：新版本引发的 CPU 占用飙升问题 (#30086) 影响了多开体验；Zen API 请求体大小限制 (#35237) 则体现了服务端对大上下文负载的资源保护机制。
- **Shell 与子进程管理**：Bash 工具在执行特定命令（如 `pkill -f`）或产生子进程时容易挂起 (#25664)，相关 PR 正通过改进进程生命周期管理来修复此问题 (#35245)。
- **上下文与输入处理**：TUI 中图片路径被错误解析为图片 (#19892)，以及使用 OpenRouter 免费模型时遭遇 Token 限制报错 (#12219)，反映了输入解析与上下文额度管理的细节问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-04)

## 1. 今日更新概览
过去24小时，Qwen Code 社区主要围绕 Web Shell 体验优化、企业微信通道集成以及底层性能（如 KV-cache 保留与 Token 消耗）展开迭代。维护者发布了 v0.19.6 正式版及多个底层驱动更新，同时针对国内镜像源同步、Windows 编码兼容及子进程安全隔离等痛点进行了集中修复。

## 2. 版本发布
- **v0.19.6 & v0.19.5-nightly**：主要修复了 Web Shell 在移动端切换 session 时的卡顿问题（通过记忆化时间线签名和优先重放调度），并解决了 macOS 下的 seat 相关问题。([v0.19.6 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6))
- **cua-driver-rs v0.7.0**：发布了相对坐标分支的预编译二进制文件，支持 macOS（已签名和公证的通用二进制）、Linux 和 Windows，启用相对坐标功能。([cua-driver-rs-v0.7.0 Release](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.0))

## 3. 社区热点 Issues
1. **#6144** [OPEN] **上下文窗口计算错误**：用户反馈配置 Qwen3-Coder 64k 实例时，上下文窗口计算不正确，影响长文本处理。([#6144](https://github.com/QwenLM/qwen-code/issues/6144))
2. **#6265** [OPEN] **`tool_search` 导致 KV-cache 失效**：每次加载延迟工具时都会使 LLM 服务端的 KV-cache 失效，严重影响推理性能。([#6265](https://github.com/QwenLM/qwen-code/issues/6265))
3. **#6264** [OPEN] **`/review` 技能消耗大量 Token**：用户反馈使用代码审查技能时 Token 消耗过高，引发对使用成本的担忧。([#6264](https://github.com/QwenLM/qwen-code/issues/6264))
4. **#6218** [CLOSED] **淘宝镜像源未更新**：国内用户反馈淘宝 npm 镜像源落后了三个版本，影响安装体验（已关闭处理）。([#6218](https://github.com/QwenLM/qwen-code/issues/6218))
5. **#6282** [OPEN] **`transform_data` 未强制执行子进程隔离**：指出数据处理脚本未应用现有的文件系统或网络隔离包装器，存在安全隐患。([#6282](https://github.com/QwenLM/qwen-code/issues/6282))
6. **#6249** [OPEN] **空参数流式工具调用被静默丢弃**：当 OpenAI 兼容提供商流式传输空参数的工具调用时，解析器会丢弃该调用，导致“空响应”重试循环。([#6249](https://github.com/QwenLM/qwen-code/issues/6249))
7. **#6208** [OPEN] **添加企业微信智能机器人通道**：需求增加内置的企微智能机器人 API 模式适配器，简化企业内网集成。([#6208](https://github.com/QwenLM/qwen-code/issues/6208))
8. **#4421** [OPEN] **改进 debug txt 本地诊断质量**：提出本地优先的诊断方案，通过环形缓冲区记录 API/SSE 异常，解决用户难以提供有效排查信息的问题。([#4421](https://github.com/QwenLM/qwen-code/issues/4421))
9. **#6231** [OPEN] **追踪 npm 包体积**：在打包原生音频捕获后，需要追踪并控制 npm 包体积，避免超出 npmmirror 默认的 80MiB 限制。([#6231](https://github.com/QwenLM/qwen-code/issues/6231))
10. **#6195** [CLOSED] **守护进程 UI 支持选择视觉桥接模型**：要求在 Daemon UI 中增加选择和持久化视觉桥接模型的功能，与 CLI 保持一致。([#6195](https://github.com/QwenLM/qwen-code/issues/6195))

## 4. 重要 PR 进展
1. **#6268** [OPEN] **使用代理工具方法保留 `tool_search` 的 KV-cache**：通过通用调度代理工具替换原有的工具列表修改方式，确保 LLM 服务端的 KV-cache 前缀在工具发现时保持不变。([#6268](https://github.com/QwenLM/qwen-code/pull/6268))
2. **#6273** [OPEN] **模型回退链（Model fallback chain）**：在主对话路径中添加可配置的模型回退链，当主模型过载或不可用时，自动按顺序切换到备用模型。([#6273](https://github.com/QwenLM/qwen-code/pull/6273))
3. **#6224** [OPEN] **添加企业微信智能机器人通道**：重写企微通道实现，使用官方 SDK 和 WebSocket 客户端连接，无需用户自建应用回调。([#6224](https://github.com/QwenLM/qwen-code/pull/6224))
4. **#6285** [OPEN] **强制执行 `transform_data` 隔离**：使数据处理脚本通过现有的会话工具隔离包装器运行，确保网络隔离和文件系统写入隔离。([#6285](https://github.com/QwenLM/qwen-code/pull/6285))
5. **#6272** [OPEN] **Web Shell 添加守护进程状态页**：在侧边栏新增状态页，实时展示守护进程的健康状态、分类问题列表及运行信息。([#6272](https://github.com/QwenLM/qwen-code/pull/6272))
6. **#6225** [OPEN] **修复 Anthropic 提示缓存命中问题**：在侧边查询（如建议模式）中保留父对话的 `tools` 数组，确保缓存键一致，避免缓存未命中。([#6225](https://github.com/QwenLM/qwen-code/pull/6225))
7. **#6284** [OPEN] **修复更改 API key 后持续 401 的问题**：解决了空字符串环境变量阻塞、设置未正确覆盖等导致修改 API key 后依然报 401 错误的故障模式。([#6284](https://github.com/QwenLM/qwen-code/pull/6284))
8. **#6278** [OPEN] **CLI 支持多文件夹工作区边界检查**：修复了在多文件夹 VSCode 工作区中，对非终端 cwd 目录进行文件操作时被错误拒绝的问题。([#6278](https://github.com/QwenLM/qwen-code/pull/6278))
9. **#6216** [OPEN] **为 Windows cmd.exe 添加 UTF-8 前缀**：修复了在非 UTF-8 控制台代码页（如 CP936）下运行 shell 命令时输出乱码的问题。([#6216](https://github.com/QwenLM/qwen-code/pull/6216))
10. **#6279** [OPEN] **Web Shell 添加 MCP 提及和图标化 @ 引用**：在 `@` 补全中增加 MCP 服务器提及，并在 Web Shell 中优化了分组结果、图标和标签渲染体验。([#6279](https://github.com/QwenLM/qwen-code/pull/6279))

## 5. 功能需求归类
- **通道与企业集成**：用户和开发者积极拓展外部通信渠道，如企业微信智能机器人集成（#6208, #6224），以及对 Chrome 扩展架构和 Browser SDK 方向的调研（#5936）。
- **性能与 Token 成本优化**：围绕减少 Token 消耗和提升缓存命中率的需求集中，包括修复 `tool_search` 导致的 KV-cache 失效（#6265, #6268）、优化 Anthropic 提示缓存（#6225），以及关注 `/review` 技能的高 Token 消耗（#6264）。
- **可观测性与本地诊断**：强调本地优先的排障能力，如改进 debug txt 诊断质量（#4421, #6277），以及为 Web Shell 增加守护进程状态可视化面板（#6252, #6272）。
- **多端兼容与部署分发**：关注跨平台与网络环境下的安装体验，包括追踪 npm 包体积以防超出镜像源限制（#6231）、修复国内淘宝镜像源同步延迟（#6218），以及 Windows 终端编码兼容（#6216）。

## 6. 开发者关注点
- **Token 成本与上下文稳定性**：开发者对上下文窗口计算错误（#6144）和特定技能（如 `/review`）的 Token 消耗过高（#6264）反馈明确。同时，底层机制如 `tool_search` 破坏 KV-cache（#6265）直接增加了推理成本，维护者正通过代理工具模式（#6268）积极解决此类隐性成本问题。
- **安全沙箱与隔离边界**：随着工具调用能力的增强，开发者对执行环境的安全性保持警惕。`transform_data` 未强制执行子进程隔离的问题（#6282）被迅速指出并修复（#6285），反映出社区对文件系统与网络隔离边界的严格要求。
- **国内网络与工程化部署痛点**：国内开发者在依赖安装时面临镜像源版本落后（#6218）和包体积过大（#6231）的实际阻碍。维护者正在通过追踪包体积和优化 CI/CD 流程来改善分发体验。

</details>