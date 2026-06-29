# AI CLI 工具社区动态日报 2026-06-30

> 生成时间: 2026-06-29 22:49 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具生态社区动态横向对比日报 (2026-06-30)

## 1. 今日横向概览
今日 OpenAI Codex 和 Qwen Code 在社区互动和代码提交上最为活跃，集中处理了 Token 消耗异常、上下文压缩缺陷以及 TUI 渲染和后台 Daemon 稳定性问题。Gemini CLI 和 OpenCode 持续推进底层架构演进与 Agent 执行流的安全控制，发布了 Nightly 版本并合并了多项核心重构 PR。相比之下，Claude Code、GitHub Copilot CLI 和 Kimi Code CLI 的更新节奏较缓，主要聚焦于修复特定的跨平台兼容性 Bug、MCP 集成阻碍及终端交互体验优化。

## 2. 各工具活跃度对比

| 工具名称 | Issues 更新数 | PR 更新数 | Release 情况 |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 50 | 43 | `rust-v0.142.4` (日常维护) |
| **Qwen Code** | 32 | 50 | 无 (提及 v0.19.3 升级后问题) |
| **GitHub Copilot CLI**| 28 | 0 | `v1.0.66-2` |
| **Gemini CLI** | 10+ (热点) | 10+ (热点) | `v0.51.0-nightly.20260629` |
| **OpenCode** | 10+ (热点) | 10+ (热点) | 无 |
| **Claude Code** | 10+ (热点) | 2 | 无 |
| **Kimi Code CLI** | 1 | 0 | 无 |

*注：部分工具未披露绝对总数，表中“10+”表示官方日报列出的核心热点数量。*

## 3. 共同出现的功能方向

今日多个工具社区在以下三个技术方向上出现了高度重合的用户诉求与维护者动作：

- **MCP (Model Context Protocol) 集成与认证工程化**：
  MCP 已成为各工具扩展能力的标配，但跨平台与并发场景下的落地痛点集中爆发。Claude Code 遭遇 MCP OAuth 认证失败阻碍外部集成 (#3433)；GitHub Copilot CLI 出现 Windows 下 MCP 启动与 OAuth 端口绑定失败 (#3958, #3973)；OpenCode 正在处理 V2 MCP OAuth 并发刷新竞态与 stdio 子进程清理 (#34523, #34525)；Qwen Code 则修复了 MCP 安装内存溢出并扩展了 Glob 配置能力 (#6004, #6012)。
- **上下文压缩 (Context Compaction) 与长任务可靠性**：
  随着 Agent 任务复杂度提升，上下文管理策略直接影响任务成功率。OpenAI Codex 用户大量反馈自动上下文压缩导致任务丢失和进度回退 (#5957, #29356)；Qwen Code 提出使用低成本模型执行压缩并修复了阈值计算 Bug (#5956, #5957)；OpenCode 限制了 compaction payload 防止长上下文溢出 (#29860)；Claude Code 用户也反馈 `/clear` 命令未能真正从磁盘重置上下文 (#62784)。
- **TUI 终端渲染与跨平台交互适配**：
  非标准终端或特定 OS 显示服务器下的 UI 适配仍是基础体验短板。GitHub Copilot CLI 面临 alt-screen 适配、触控板冲突及鼠标乱码问题 (#1799, #3957, #3972)；Qwen Code 修复了长文本覆盖、Linux 滚动刷屏及宽字符对齐 (#5800, #5971, #5974)；Claude Code 和 OpenCode 均处理了 Wayland 环境下的终端粘贴失效问题 (#62340, #29881)。

## 4. 差异化定位分析

基于今日社区数据，各工具在功能侧重与技术路线上呈现出明显的差异化特征：

- **Claude Code**：侧重于外部生态集成（MCP）与复杂虚拟化环境（WSL2/Cowork VM）的兼容性，用户对精细化成本管控（上下文窗口大小、单次模型切换）诉求强烈。
- **OpenAI Codex**：聚焦于重度开发场景下的长任务可靠性与本地资源安全（Git 隔离、SSD 写入保护），当前面临较高的 Token 消耗与 Rate-limit 争议。
- **Gemini CLI**：技术路线偏向多 Agent 协同与底层推理引擎优化，重点解决子代理挂起、递归推理死循环及思维泄漏等执行流稳定性问题，并推进 Caretaker Agent 基础设施。
- **GitHub Copilot CLI**：深度绑定 GitHub 生态与企业级工作流，当前重点在于完善企业配置下发、仓库会话管理（Worktree 文件树）以及修复 Windows 平台的兼容性回归。
- **OpenCode**：处于 V2 架构迁移的关键期，侧重于底层服务层重构、多模型网关兼容性（GLM/Ollama）以及 MCP 并发状态管理。
- **Qwen Code**：强调 Daemon 后台服务化能力（`qwen serve`、`/loop` 自主模式）与多模型协议适配，高频迭代 TUI 渲染细节与流式输出稳定性。
- **Kimi Code CLI**：当前处于低频迭代状态，主要关注多端（特别是移动端与桌面端）输入交互逻辑的统一与优化。

## 5. 社区活跃度记录

- **高活跃度**：**OpenAI Codex**（50 Issues, 43 PRs）和 **Qwen Code**（32 Issues, 50 PRs）今日数据产出最密集，维护者对底层 Bug 和架构优化的响应速度极快，代码合并量大。
- **中等活跃度**：**GitHub Copilot CLI**（28 Issues）保持了稳定的 Issue 讨论热度，但今日无 PR 合并；**OpenCode** 和 **Gemini CLI** 虽未披露绝对总数，但均列出了 10 个深度技术 PR/Issue，且 Gemini CLI 发布了 Nightly 版本，显示出持续的底层开发投入。
- **低活跃度**：**Claude Code**（2 PRs，主要清理历史 Issue）和 **Kimi Code CLI**（1 Issue，0 PR）今日社区互动和代码提交较少，处于常规维护状态。

## 6. 有证据支撑的观察

1. **MCP 生态的扩张正带来显著的集成与认证工程痛点**
   *证据*：Claude Code (#3433)、GitHub Copilot CLI (#3958, #3973)、OpenCode (#34523, #34525) 和 Qwen Code (#6004, #6012) 今日均暴露出 MCP 在 OAuth 认证、跨平台启动、并发竞态及内存管理方面的具体 Bug。这表明 MCP 协议在从“可用”向“生产级稳定”过渡的过程中，各工具仍需大量工程化修补。
2. **长上下文与自动压缩机制是当前 Agent 可靠性的核心瓶颈**
   *证据*：OpenAI Codex (#5957, #29356)、Qwen Code (#5956, #5957)、OpenCode (#29860) 和 Claude Code (#62784) 的社区均反馈或修复了上下文压缩导致的任务中断、状态丢失或阈值计算错误。这说明在长耗时 Coding Agent 工作流中，上下文管理策略的鲁棒性直接决定了工具的可用性。
3. **开发者对隐性 Token 消耗与成本归因的敏感度显著提升**
   *证据*：OpenAI Codex 社区抗议 Rate-limit 成本飙升及后台建议静默消耗 Token (#28879, #30390)；Claude Code 用户要求单次提示模型覆盖以避免强制 1M 上下文耗尽额度 (#72362, #62114)；Qwen Code 反馈提示缓存未命中导致成本增加 (#5942)；OpenCode 请求显示包含 sub-agents 的 Session 总成本 (#4925)。在常态化使用下，精细化成本管控与透明度已成为开发者的核心诉求。
4. **终端 TUI 渲染的跨平台兼容性仍是 CLI 工具的基础体验短板**
   *证据*：GitHub Copilot CLI (#1799, #3957, #3972)、Qwen Code (#5800, #5971)、Claude Code (#62340) 和 OpenCode (#29881) 今日均处理了 alt-screen 适配、触控板冲突、Wayland 粘贴失效或长文本覆盖等 UI 问题。这反映出在多样化的现代终端模拟器与显示服务器环境下，CLI 工具的交互层仍需持续的兼容性维护。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 (2026-06-30)

## 今日更新概览
过去 24 小时内，Claude Code 仓库无新版本发布，社区活跃度主要集中在 Issues 的讨论与历史问题清理（大量 Issue 被标记为 stale 或 closed）。今日新增和更新的 Issue 主要围绕 MCP 认证、Cowork 文件同步、Bash 工具执行异常以及 TUI/CLI 交互体验展开；PR 方面仅有 2 个涉及文档完善和 GCP 部署示例的更新。

## 社区热点 Issues
以下挑选了 10 个值得关注的 Issue，涵盖了当前社区讨论度较高或影响核心工作流的问题：

1. **MCP OAuth 认证失败**：[#3433](https://github.com/anthropics/claude-code/issues/3433) [OPEN] Claude Code 无法使用 OAuth 认证连接 GitHub 的远程 MCP 服务器（Linux 环境）。该问题积累了 57 条评论和 138 个赞，是当前社区关注度最高的问题，直接阻碍了外部工具链的集成。
2. **Cowork 虚拟机文件同步异常**：[#38993](https://github.com/anthropics/claude-code/issues/38993) [OPEN] 在 Windows 平台上，Cowork 的 virtiofs FUSE 挂载提供截断或陈旧的文件，主机侧的文件更改未能实时反映在 VM 中，影响协同开发体验。
3. **WSL2 环境部署架构冲突**：[#69641](https://github.com/anthropics/claude-code/issues/69641) [OPEN] Desktop SSH remote BinaryDeployment 将 `linux-x64-musl` 二进制文件部署到基于 glibc 的 WSL2 主机，导致 `statx: symbol not found` 错误而无法运行。
4. **安全过滤器误报阻断常规工作**：[#72350](https://github.com/anthropics/claude-code/issues/72350) [OPEN] 网络安全（cyber）安全过滤器出现误报，导致无人机遥测/视频地面站 HUD 的常规 GUI 开发工作被意外中断。
5. **Agent 循环执行导致状态损坏**：[#72356](https://github.com/anthropics/claude-code/issues/72356) [OPEN] 在 macOS/IntelliJ 环境下，处于循环执行状态的 Agent 出现状态损坏问题，影响长期运行的自动化任务。
6. **桌面端强制 1M 上下文导致可用性阻断**：[#62114](https://github.com/anthropics/claude-code/issues/62114) [CLOSED] 桌面端应用强制 Sonnet 模型使用 1M 上下文，未提供标准 200k 上下文选项。当用户额度不足时，会导致 Sonnet 完全无法使用。
7. **Linux/Wayland 终端粘贴失效**：[#62340](https://github.com/anthropics/claude-code/issues/62340) [CLOSED] 在 2.1.150 版本中，GNOME Terminal (Ubuntu/Wayland) 下的粘贴快捷键 (Ctrl+Shift+V) 失效，属于影响基础输入的回归 Bug。
8. **`/clear` 命令未真正重置上下文**：[#62784](https://github.com/anthropics/claude-code/issues/62784) [CLOSED] 用户反馈 `/clear` 命令仅重置历史记录，但未从磁盘重新加载上下文，导致模型仍保留陈旧的世界状态，影响多会话工作流。
9. **后台 Agent 停止按钮失效**：[#63022](https://github.com/anthropics/claude-code/issues/63022) [CLOSED] 后台 Agent UI 的 Stop 按钮点击无效，卡住的 Agent 进程持续运行并消耗 token，直到整个会话被手动重置。
10. **请求单次提示的模型覆盖功能**：[#72362](https://github.com/anthropics/claude-code/issues/72362) [OPEN] 按 token 付费的用户希望能在不切换会话的情况下，为单次复杂提示临时指定高级模型（如 Opus），随后继续使用默认模型（如 Sonnet）。

## 重要 PR 进展
今日仅有 2 个 PR 更新，主要集中在文档和部署示例的完善：

1. **添加 GCP 部署示例资产**：[#72361](https://github.com/anthropics/claude-code/pull/72361) [CLOSED] 为在 Google Cloud 上运行 Claude Gateway 提供参考部署工件（包含 Terraform 配置），以配合官方发布的部署指南。
2. **完善 Bash Hook 文档说明**：[#72264](https://github.com/anthropics/claude-code/pull/72264) [OPEN] 在 `bash_command_validator_example.py` 钩子示例中添加注释，明确说明 `PreToolUse` Bash payload 除了 `command` 外，还暴露了 `run_in_background`、`description` 和 `timeout` 字段。

## 功能需求归类
从近期的 Issue 反馈中，可以观察到用户在以下几个功能方向上的集中诉求：

- **上下文与会话状态管理**：用户期望对上下文窗口和会话生命周期有更精细的控制。包括请求单次提示的模型覆盖（[#72362](https://github.com/anthropics/claude-code/issues/72362)）、指出 `/clear` 命令未真正清理上下文（[#62784](https://github.com/anthropics/claude-code/issues/62784)），以及项目内存和会话上下文在目录重命名/移动时变成孤立状态的问题（[#72359](https://github.com/anthropics/claude-code/issues/72359)）。
- **Agent 与后台任务控制**：开发者高度关注后台 Agent 的稳定性和资源控制。反馈集中在后台 Agent Stop 按钮失效导致持续消耗 token（[#63022](https://github.com/anthropics/claude-code/issues/63022)），以及 Agent 执行循环导致状态损坏（[#72356](https://github.com/anthropics/claude-code/issues/72356)）。
- **终端与 TUI 交互体验**：对 CLI/TUI 的交互细节有持续优化的需求。例如请求通过 hook 或 CLI 标志设置会话显示名称以支持多会话工作流（[#62754](https://github.com/anthropics/claude-code/issues/62754)），全屏 TUI 阻止 iTerm2 历史回滚（[#72360](https://github.com/anthropics/claude-code/issues/72360)），以及 `/powerup` 命令仅显示部分课程缺乏分页（[#63136](https://github.com/anthropics/claude-code/issues/63136)）。

## 开发者关注点
综合今日数据，开发者当前的痛点和高频关注点主要集中在以下三个方面：

1. **外部工具链集成与认证阻碍**：MCP（Model Context Protocol）是扩展 Claude Code 能力的关键，但 OAuth 认证在连接 GitHub 远程 MCP 服务器时存在严重阻碍（[#3433](https://github.com/anthropics/claude-code/issues/3433)）。这是目前社区点赞最多的问题，反映出打通外部生态的迫切需求。
2. **成本控制与资源消耗敏感度**：开发者对 token 消耗和上下文窗口大小非常敏感。强制 1M 上下文导致额度耗尽（[#62114](https://github.com/anthropics/claude-code/issues/62114)）、后台 Agent 无法停止持续扣费（[#63022](https://github.com/anthropics/claude-code/issues/63022)），以及希望按需单次调用高级模型（[#72362](https://github.com/anthropics/claude-code/issues/72362)）等反馈，表明在追求模型性能的同时，精细化的成本管控是核心诉求。
3. **跨平台与复杂环境兼容性**：Windows 下的 Cowork 文件同步（[#38993](https://github.com/anthropics/claude-code/issues/38993)）、Linux/Wayland 下的粘贴失效（[#62340](https://github.com/anthropics/claude-code/issues/62340)）、WSL2 下的 glibc/musl 部署冲突（[#69641](https://github.com/anthropics/claude-code/issues/69641)）以及 macOS 下的安全策略误报（[#56188](https://github.com/anthropics/claude-code/issues/56188)），显示出在多样化的现代开发环境（尤其是虚拟化和非标准终端环境）中，基础兼容性仍是维护的重点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-30)

## 1. 今日更新概览
过去 24 小时内，OpenAI Codex 社区保持较高活跃度，共更新 50 个 Issues 和 43 个 Pull Requests。社区讨论主要集中在 Windows 平台的性能与兼容性 Bug、GPT-5.5/5.4 模型的 Token 消耗与 Rate-limit 异常，以及长上下文压缩导致的任务中断问题。维护者团队在 PR 中重点推进了 Git 操作的安全隔离、WebSocket 连接优化及多 Agent 通信机制的完善。

## 2. 版本发布
- **rust-v0.142.4**：发布了新版本，但仅为日常维护（Chores），无用户可见变更（No user-facing changes）。([Compare Link](https://github.com/openai/codex/compare/rust-v0.142.3...rust-v0.142.4))

## 3. 社区热点 Issues
1. **Token 消耗过快**：大量用户反馈在使用 IDE 扩展时 Token 消耗速度异常，该 Issue 积累了极高的讨论热度。([#14593](https://github.com/openai/codex/issues/14593))
2. **GPT-5.5 Rate-limit 成本飙升**：用户指出自 6 月 16 日起，Plus 计划下 GPT-5.5 的单 Token 速率限制成本增加了 10-20 倍，导致 5 小时预算在 2-3 个提示内耗尽。([#28879](https://github.com/openai/codex/issues/28879))
3. **呼吁推出 Linux 桌面端**：由于 Mac 端的功耗和兼容性问题，社区强烈请求推出原生的 Linux 版 Codex 桌面应用。([#11023](https://github.com/openai/codex/issues/11023))
4. **SQLite 日志写穿 SSD 风险**：CLI 的 SQLite 反馈日志写入量过大（预估 ~640 TB/年），快速消耗 SSD 寿命，目前相关修复 PR 已合并。([#28224](https://github.com/openai/codex/issues/28224))
5. **上下文压缩导致任务丢失**：自动上下文压缩机制导致 GPT-5-Codex 在长任务中遗忘当前进度、丢失文件编辑状态并意外停止。([#5957](https://github.com/openai/codex/issues/5957))
6. **桌面端上下文压缩破坏操作连续性**：桌面应用在处理长任务时，上下文压缩会导致操作中断，用户建议保留最后 5 个操作步骤的原文。([#29356](https://github.com/openai/codex/issues/29356))
7. **Windows 桌面端 Git 进程残留**：Windows 桌面端在非 Git 项目中创建空 `.git` 文件夹，并重复生成 `git.exe` 轮询进程，导致资源泄漏。([#29492](https://github.com/openai/codex/issues/29492))
8. **模型容量满载报错**：多位用户反馈在选择 GPT-5.4 mini 等模型时，频繁遇到“Selected model is at capacity”的错误提示。([#30575](https://github.com/openai/codex/issues/30575))
9. **Intel macOS 工具调用崩溃**：在 Intel (x86_64) macOS 上，`codex-cli` 0.142.3 在调用 `web_search` 或本地 shell 工具时触发 `SIGTRAP` 崩溃。([#30306](https://github.com/openai/codex/issues/30306))
10. **后台建议静默消耗 Token**：Windows 桌面端的 `ambient_suggestions`（环境建议）功能在后台静默消耗了约 70k tokens，引发用户对隐性成本的担忧。([#30390](https://github.com/openai/codex/issues/30390))

## 4. 重要 PR 进展
1. **拒绝本地 Git 操作的隐式传输**：防止仅检查或修改本地仓库状态的 Git 命令在缺少对象时，通过配置的传输助手跨越网络边界。([#29470](https://github.com/openai/codex/pull/29470))
2. **通用 Git 命令需审批**：收紧“只读 Git”分类的安全策略，要求对可能受仓库配置影响的通用 Git 命令进行审批。([#28714](https://github.com/openai/codex/pull/28714))
3. **Windows 仅信任系统 PowerShell 解析器**：防止仓库控制的 `pwsh.exe` 在审批和沙盒边界之前执行，避免 AST 解析器被伪造。([#30628](https://github.com/openai/codex/pull/30628))
4. **迁移至共享 ElicitationService**：解决 Code-mode 工具结果在 MCP elicitation 等待用户输入时提前返回给模型的问题，确保会话级视图一致性。([#30627](https://github.com/openai/codex/pull/30627))
5. **修复 tool-search rollout 污染**：防止格式错误的 `tool_search_call.arguments` 被持久化并在后续冷启动时重放，避免会话永久不可用。([#30618](https://github.com/openai/codex/pull/30618))
6. **禁用 Rendezvous WebSockets 的 Nagle 算法**：无条件禁用 Nagle 算法以优化 exec-server 的 WebSocket 连接延迟。([#30269](https://github.com/openai/codex/pull/30269))
7. **app-server WebSocket Token 认证**：为 app-server WebSocket 监听器添加 256 位 URL 安全的连接 Token 认证机制。([#30315](https://github.com/openai/codex/pull/30315))
8. **可配置的多 Agent 模式提示文本**：允许部署时提供自定义的委托策略提示文本，替代基于推理努力（reasoning effort）的内置默认行为。([#30493](https://github.com/openai/codex/pull/30493))
9. **目标继续前应用当前权限**：在 `thread/goal/set` 中扩展审批和沙盒策略上下文，确保在目标状态对生命周期钩子可见前应用权限。([#30604](https://github.com/openai/codex/pull/30604))
10. **app-server 出站请求超时边界**：将 `currentTime/read` 的等待入队时间纳入总请求预算，修复背压（backpressure）下导致的超时行为异常。([#30611](https://github.com/openai/codex/pull/30611))

## 5. 功能需求归类
- **跨平台与桌面端体验**：用户强烈呼吁推出 Linux 版桌面应用（[#11023](https://github.com/openai/codex/issues/11023)），并反馈 Windows 桌面端存在线程切换慢（[#29187](https://github.com/openai/codex/issues/29187)）、Git 进程残留（[#29408](https://github.com/openai/codex/issues/29408)）以及中文输入法光标丢失（[#26494](https://github.com/openai/codex/issues/26494)）等体验问题。
- **会话管理与上下文控制**：开发者希望引入类似 Claude 的 `/recap` 命令来总结会话（[#18884](https://github.com/openai/codex/issues/18884)），并支持类似 Claude Code 的 `/remote-control` 移动端同步控制功能（[#27565](https://github.com/openai/codex/issues/27565)）。
- **成本归因与企业级集成**：企业用户提出在使用 Amazon Bedrock 时缺乏针对特定工作负载或团队的成本归因机制（[#27613](https://github.com/openai/codex/issues/27613)），并遇到 Azure OpenAI 端点处理 `oneOf` JSON 时的兼容性报错（[#30132](https://github.com/openai/codex/issues/30132)）。

## 6. 开发者关注点
- **Token 消耗与 Rate-limit 异常**：这是目前社区反馈最密集的痛点。多位用户指出 GPT-5.5 和 GPT-5.4 模型的 Token 消耗速度异常，Rate-limit 成本飙升 10-20 倍（[#28879](https://github.com/openai/codex/issues/28879)），甚至后台建议功能也会静默消耗大量 Token（[#30390](https://github.com/openai/codex/issues/30390)），导致预算快速耗尽。
- **长任务上下文压缩（Context Compaction）缺陷**：自动上下文压缩机制在处理长任务时表现不稳定，导致模型遗忘 AGENTS 规则、丢失任务进度（如从 97% 掉回 42%）以及中断文件编辑状态（[#5957](https://github.com/openai/codex/issues/5957), [#29356](https://github.com/openai/codex/issues/29356), [#25792](https://github.com/openai/codex/issues/25792)），严重影响复杂代码生成任务的可靠性。
- **本地资源占用与硬件损耗**：CLI 和桌面端的某些后台行为对本地硬件造成了意外压力，例如 SQLite 反馈日志写入量过大可能写穿 SSD（[#28224](https://github.com/openai/codex/issues/28224)），以及 Windows 下重复生成 `git.exe` 轮询进程导致资源泄漏（[#29408](https://github.com/openai/codex/issues/29408), [#29492](https://github.com/openai/codex/issues/29492)）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-30)

## 1. 今日更新概览
过去24小时内，Gemini CLI 社区主要围绕 Agent 执行稳定性、安全边界控制以及上下文管理进行了密集讨论与修复。维护者重点处理了子代理挂起、递归推理死循环以及思维泄漏（Thought Leakage）等影响核心体验的问题，并持续推进 Caretaker Agent 的基础设施建设与组件级评估体系。

## 2. 版本发布
- **v0.51.0-nightly.20260629.gae0a3aa7b**：发布了最新的 Nightly 构建版本，包含了近期的核心修复与自动化版本升级。([Release Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b))

## 3. 社区热点 Issues
1. **子代理达到最大轮数后误报成功**：`codebase_investigator` 子代理在达到 `MAX_TURNS` 限制时，错误地报告 `GOAL` 成功，掩盖了任务中断的事实，影响长任务的可靠性。([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
2. **通用代理（Generalist agent）频繁挂起**：当 CLI 延迟调用通用代理时，即使是创建文件夹等简单操作也会无限期挂起，部分用户需显式禁用子代理来规避此问题。([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
3. **Shell 命令执行后卡在“等待输入”**：执行简单的 CLI 命令后，界面仍显示命令活跃并等待用户输入，导致自动化流程阻塞。([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
4. **利用模型 Bash 亲和力与零依赖 OS 沙箱**：提议利用 Gemini 3 模型原生使用 POSIX 工具链的能力，结合零依赖 OS 沙箱和意图路由，以提升代码探索效率并保障安全。([#19873](https://github.com/google-gemini/gemini-cli/issues/19873))
5. **评估 AST 感知文件读取与搜索的影响**：探讨引入 AST 感知工具以精确读取方法边界、减少 Token 噪音，并优化代码库映射能力。([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
6. **Agent 应阻止破坏性行为**：在复杂 Git 操作或数据库维护中，模型偶尔会使用 `git reset --force` 等危险命令，社区呼吁增加安全护栏。([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
7. **Auto Memory 安全与脱敏优化**：Auto Memory 在读取本地记录时，敏感信息已进入模型上下文，需增加确定性脱敏并减少后台日志记录。([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
8. **工具数量过多导致 400 错误**：当可用工具超过 128（或 400）个时，CLI 会触发 API 400 错误，需优化作用域内的工具限制逻辑。([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
9. **浏览器子代理在 Wayland 环境下失败**：Browser Agent 在 Wayland 显示服务器下运行失败，且终止原因被错误标记为 GOAL。([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))
10. **构建稳健的组件级评估体系**：作为行为评估（behavioral evals）的后续，计划为支持的 Gemini 模型生成和运行更细粒度的组件级测试。([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))

## 4. 重要 PR 进展
1. **限制单次请求的递归推理轮数**：在核心推理引擎中实施严格的 15 轮递归推理限制，防止无限循环消耗本地 CPU 和 API 配额。([#28164](https://github.com/google-gemini/gemini-cli/pull/28164))
2. **修复思维泄漏（Thought Leakage）问题**：清理历史轮次中的模型内部独白/推理思维，防止其泄漏到纯文本历史中导致模型在后续轮次中模仿或陷入无限循环。([#27971](https://github.com/google-gemini/gemini-cli/pull/27971))
3. **实现 Caretaker Agent 的 Cloud Run Webhook 摄取服务**：为 Caretaker Agent 构建入口点，验证 GitHub webhook 签名，使用 Firestore 存储 issue 并发布到 Pub/Sub。([#28015](https://github.com/google-gemini/gemini-cli/pull/28015))
4. **修复 `@` 引用文件的防御性路径解析**：解决当模型传递带 `@` 前缀的路径（如 `@policies/new-policies.txt`）时，文件系统工具报“文件未找到”的生产环境 Bug。([#28053](https://github.com/google-gemini/gemini-cli/pull/28053))
5. **强化文件写入范围以防止沙箱逃逸**：阻止沙箱/自动接受模式下对 `.gemini` 和 `.gitconfig` 的写入，防止 Agent 修改自身配置以获取更高权限。([#28215](https://github.com/google-gemini/gemini-cli/pull/28215))
6. **限制 Web 搜索工具延迟**：为 `google_web_search` 增加 120 秒本地超时，超时后中止请求并返回明确错误，避免 Agent 无限等待。([#27910](https://github.com/google-gemini/gemini-cli/pull/27910))
7. **多行编辑片段显示省略号**：优化 `EditToolInvocation` 的 UI 描述，当多行编辑隐藏了内容时追加 `...`，避免用户误以为是单行修改。([#28126](https://github.com/google-gemini/gemini-cli/pull/28126))
8. **排除临时 CI 配置文件**：更新 `WorkspaceContext` 路径验证，显式排除 GitHub Actions 动态生成的凭证文件（`gha-creds-*.json`）。([#28216](https://github.com/google-gemini/gemini-cli/pull/28216))
9. **修复信任对话框未显示实际运行的 Hook**：修复工作区信任对话框显示与实际执行相反的 Hook 形状的问题，防止隐藏执行任意 Shell 命令的安全风险。([#27915](https://github.com/google-gemini/gemini-cli/pull/27915))
10. **重启时转发信号给子进程**：修复在通过子进程重启 CLI 时，`SIGINT`/`SIGTERM` 等信号未转发导致父进程退出而子进程成为孤儿进程的问题。([#28202](https://github.com/google-gemini/gemini-cli/pull/28202))

## 5. 功能需求归类
- **Agent 行为控制与安全护栏**：用户要求限制 Agent 的破坏性操作（如 `git reset --force`）（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)），并防止通过自动接受写入配置文件导致的权限提升（[#28215](https://github.com/google-gemini/gemini-cli/pull/28215)）。
- **代码感知与上下文优化**：探索 AST 感知的代码读取与搜索能力以减少 Token 噪音（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)），以及利用模型原生的 Bash 工具链亲和力进行代码探索（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）。
- **可观测性与评估体系**：推进组件级行为评估测试（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)），并要求在 `/chat share` 和 Bug 报告中包含子代理的执行轨迹与上下文（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。
- **Auto Memory 机制优化**：集中反馈 Auto Memory 的脱敏处理、低信号会话的无限重试以及无效补丁的处理问题（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）。

## 6. 开发者关注点
- **执行流阻塞与死锁**：开发者频繁遭遇 Agent 执行流卡死的问题，包括 Shell 命令执行后假死等待输入（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、通用子代理挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）以及递归推理陷入无限循环（[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)）。
- **上下文污染导致幻觉**：模型内部的“思维（Thoughts）”泄漏到纯文本历史记录中，导致模型在后续交互中产生混乱或模仿行为，维护者已通过清理历史轮次进行修复（[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)）。
- **安全边界与权限管理**：开发者对 Agent 在 Auto-accept 模式下的文件写入范围表示担忧，特别是写入 `.gemini` 目录可能引发的沙箱逃逸风险（[#28215](https://github.com/google-gemini/gemini-cli/pull/28215)），以及信任对话框未能正确披露 Hook 执行细节的安全隐患（[#27915](https://github.com/google-gemini/gemini-cli/pull/27915)）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-30)

## 1. 今日更新概览
过去 24 小时内，GitHub Copilot CLI 发布了 v1.0.66-2 版本，重点优化了插件技能共存、集成设置读写及 LSP 日志查看能力。社区 Issues 活跃度较高（共 28 条更新），讨论焦点集中在会话生命周期管理、终端 TUI 渲染异常、Windows 平台 MCP 兼容性回归以及企业级配置下发等具体使用场景。今日无新增 Pull Requests 更新。

## 2. 版本发布
**v1.0.66-2** 主要包含以下新增特性：
- 允许不同插件中同名的技能（skills）共存。
- 允许集成（integrations）读取和写入 CLI 用户设置。
- 支持在 `/lsp logs` 和 `read_agent` 中查看 LSP 服务器日志。
- 在 GitHub 仓库中缺失 `gh` CLI 时，增加提示安装逻辑。
- 为提示渲染（prompt rendering）添加 GitHub 附件变体。

## 3. 社区热点 Issues
以下是过去 24 小时内值得关注的 10 个 Issues：

1. **[OPEN] 关闭 alt-screen 视图诉求** ([#1799](https://github.com/github/copilot-cli/issues/1799))
   用户反馈新引入的 alt-screen 视图导致较多问题，希望提供切换回原始终端模式的配置项。（7 👍，10 评论）
2. **[CLOSED] [Critical] Copilot Agent 会话无限运行** ([#2364](https://github.com/github/copilot-cli/issues/2364))
   企业版组织仓库中的 Coding Agent 会话卡死在初始计划阶段，无法停止或发送回复，影响企业级自动化流程。
3. **[OPEN] 企业/组织集中管理本地 CLI 设置** ([#3909](https://github.com/github/copilot-cli/issues/3909))
   请求允许组织管理员向开发者的**本地** Copilot CLI 集中推送配置（特别是环境变量），弥补当前仅支持云端环境 Secrets 的不足。
4. **[OPEN] Windows 下 v1.0.66 启动带参数的 .bat/.cmd MCP 服务器失败** ([#3958](https://github.com/github/copilot-cli/issues/3958))
   v1.0.66 版本的回归 Bug，导致 Windows 平台上命令为 `.bat`/`.cmd` 且带有参数的 stdio MCP 服务器无法启动，子进程立即退出。
5. **[OPEN] Windows 下 MCP OAuth 重新认证反复失败** ([#3973](https://github.com/github/copilot-cli/issues/3973))
   当缓存的回环重定向端口处于系统排除的 TCP 端口范围内时，HTTP MCP 服务器的 OAuth 重新认证会陷入持续失败状态。
6. **[OPEN] Ctrl+G 在 $EDITOR 中展开粘贴 Token** ([#3936](https://github.com/github/copilot-cli/issues/3936))
   请求在启用 `compactPaste` 时，使用 Ctrl+G 在外部编辑器中打开提示词时，能将折叠的粘贴块（如 `[Paste #N]`）展开为完整文本，以对齐 Claude Code 的体验。
7. **[OPEN] 本地会话同步时 `session_store_sql` 静默返回空** ([#2654](https://github.com/github/copilot-cli/issues/2654))
   当会话同步设置为“仅本地”时，该工具仍被注入 Agent 系统提示词中，但查询返回 0 行且未告知 Agent 云存储为空，导致 Agent 行为异常。
8. **[OPEN] 为仓库支持的会话提供完整文件树浏览器** ([#3971](https://github.com/github/copilot-cli/issues/3971))
   请求在 repository-backed session（worktree）的侧边栏中显示完整的文件树，而不是仅显示 Git Changes 视图，以便直接导航和打开文件。
9. **[CLOSED] MBP 触控板无法滚动历史记录** ([#3957](https://github.com/github/copilot-cli/issues/3957))
   在 Ghostty 终端中使用触控板滚动时，触发了选择之前提示词的逻辑，而非滚动窗口查看历史消息。
10. **[OPEN] UI 经常显示代表鼠标移动的连续字符流** ([#3972](https://github.com/github/copilot-cli/issues/3972))
    首次加载时，TUI 界面未能正常渲染，而是输出大量代表鼠标移动事件的乱码字符。

## 4. 重要 PR 进展
过去 24 小时内无 Pull Requests 更新。

## 5. 功能需求归类
根据近期 Issues，用户的功能需求主要集中在以下方向：

- **会话管理与组织**：用户希望更精细地管理多会话工作流。包括显示会话保留/过期日期 ([#3963](https://github.com/github/copilot-cli/issues/3963))、在会话列表添加计划状态指示器/徽章 ([#3969](https://github.com/github/copilot-cli/issues/3969))、支持用户自定义标签以便搜索和过滤 ([#3970](https://github.com/github/copilot-cli/issues/3970))，以及完善仓库会话的文件树浏览体验 ([#3971](https://github.com/github/copilot-cli/issues/3971))。
- **终端渲染与交互优化**：涉及 TUI 界面的底层适配与交互细节。包括提供 alt-screen 视图的开关 ([#1799](https://github.com/github/copilot-cli/issues/1799))、修复触控板滚动冲突 ([#3957](https://github.com/github/copilot-cli/issues/3957))、解决删除文本后的视觉伪影 ([#3959](https://github.com/github/copilot-cli/issues/3959))，以及修复鼠标事件乱码问题 ([#3972](https://github.com/github/copilot-cli/issues/3972))。
- **企业级配置下发**：企业用户强烈需求组织级别的本地配置管理能力，特别是环境变量的集中推送 ([#3909](https://github.com/github/copilot-cli/issues/3909))。
- **MCP 与插件生态完善**：解决同名 MCP 服务器加载覆盖缺乏提示的问题 ([#3893](https://github.com/github/copilot-cli/issues/3893))，以及修复 GUI 中添加 MCP HTTP Headers 不生效的 Bug ([#2849](https://github.com/github/copilot-cli/issues/2849))。

## 6. 开发者关注点
- **会话稳定性与生命周期管理**：多个 Critical 级别的 Issue 指出 Agent 会话无限运行 ([#2364](https://github.com/github/copilot-cli/issues/2364)) 或产生长期运行的孤儿会话 ([#3600](https://github.com/github/copilot-cli/issues/3600))。同时，开发者对会话数据的本地/云端同步逻辑 ([#2654](https://github.com/github/copilot-cli/issues/2654), [#3904](https://github.com/github/copilot-cli/issues/3904)) 及数据过期策略 ([#3963](https://github.com/github/copilot-cli/issues/3963)) 存在疑虑，影响了长时间任务的可靠性。
- **Windows 平台的兼容性回归**：v1.0.66 在 Windows 平台上引入了 MCP 服务器启动失败 ([#3958](https://github.com/github/copilot-cli/issues/3958)) 和 OAuth 端口绑定失败 ([#3973](https://github.com/github/copilot-cli/issues/3973)) 的问题。此外，Windows 下 Git 符号链接的解析支持 ([#2286](https://github.com/github/copilot-cli/issues/2286)) 仍是插件安装过程中的痛点。
- **终端 UI 渲染与输入体验**：TUI 渲染在特定终端模拟器（如 Ghostty）或特定操作下出现异常。alt-screen 适配 ([#1799](https://github.com/github/copilot-cli/issues/1799))、触控板滚动冲突 ([#3957](https://github.com/github/copilot-cli/issues/3957))、视觉伪影 ([#3959](https://github.com/github/copilot-cli/issues/3959)) 和鼠标事件乱码 ([#3972](https://github.com/github/copilot-cli/issues/3972)) 等问题直接干扰了开发者的核心交互体验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-30)

### 1. 今日更新概览
过去 24 小时内，Kimi Code CLI 仓库无新版本发布与 PR 更新。社区活跃度较低，新增 1 条 Issue，反馈主要集中在客户端多端输入交互体验的优化诉求上。

### 2. 社区热点 Issues
- **#2479 [enhancement] 优化桌面与移动端的回车/换行交互逻辑**：用户 @Dealazer 反馈当前移动端按 Enter 键会直接发送 Prompt，导致在手机上进行多行文本编辑极为困难；同时桌面端需使用 Shift+Enter 才能换行。用户建议重新评估并优化多端输入框的快捷键行为，以提升文本编辑的可用性。([#2479](https://github.com/MoonshotAI/kimi-cli/issues/2479))

### 3. 重要 PR 进展
今日无新增或更新的 PR。

### 4. 功能需求归类
- **多端交互与输入体验**：优化 CLI 或客户端在不同设备（特别是移动端和桌面端）上的文本输入逻辑，解决回车发送与换行快捷键的冲突与体验割裂问题。

### 5. 开发者关注点
- **移动端输入可用性痛点**：开发者在移动场景下使用时，虚拟键盘回车键默认的“发送”行为严重阻碍了多行 Prompt 的编辑，导致移动端长文本输入体验不佳。
- **跨端交互习惯差异**：桌面端（Shift+Enter 换行）与移动端（Enter 发送）的输入逻辑差异增加了用户的操作成本，开发者期望输入组件能提供更符合直觉或支持自定义配置的跨端交互方案。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### 今日更新概览
过去 24 小时内，OpenCode 社区主要围绕 V2 架构迁移、MCP (Model Context Protocol) 并发处理与进程清理、以及多模型（特别是 GLM 系列和本地 Ollama）的兼容性问题展开讨论与修复。核心维护者提交了多项针对 V2 TUI 客户端迁移和底层服务层重构的 PR，同时社区对 GLM-5.x 系列的 Prompt Cache 失效及计费异常反馈较为集中。

### 社区热点 Issues
1. **证书验证错误**：用户反馈切换多个 AI 模型时出现 `unknown certificate verification error`，且 Gemini 3 无法登录，影响多模型切换场景。[#8601](https://github.com/anomalyco/opencode/issues/8601)
2. **Ollama 本地 provider 挂起**：使用 `@ai-sdk/openai-compatible` 配置本地 Ollama 时，即使是简单 prompt 也会导致 OpenCode 1.4.3 挂起，但直接调用 API 正常。[#22132](https://github.com/anomalyco/opencode/issues/22132)
3. **GLM-5.2 Prompt Cache 随机掉落**：用户反馈通过 opencode-go 网关调用 GLM-5.2 时，Prompt Cache 随机掉落至 ~500 tokens，导致成本异常。[#33998](https://github.com/anomalyco/opencode/issues/33998)
4. **GLM-5.1 Prompt Cache 掉落至 0**：与上述问题类似，长运行 coding agent 工作流中切换至 GLM-5.1 后 cache reads 随机归零，而 DeepSeek V4 Flash 表现稳定。[#31348](https://github.com/anomalyco/opencode/issues/31348)
5. **GLM-5.2 拒绝 `instructions` 字段**：通过 OpenCode Go 订阅调用 GLM-5.2 时，因 provider 传递了额外的 `instructions` 字段导致 API 报错。[#33490](https://github.com/anomalyco/opencode/issues/33490)
6. **TUI 迁移至 `@opencode-ai/client`**：核心维护者追踪 V2 TUI 从旧版 SDK 迁移到新生成的 Promise client 的进度，涉及大量调用点重构。[#34359](https://github.com/anomalyco/opencode/issues/34359)
7. **V2 MCP OAuth 并发刷新竞态**：在设计 V2 MCP OAuth 时，发现跨位置/跨进程的凭证刷新存在竞态条件，目前作为后续硬化任务追踪。[#34523](https://github.com/anomalyco/opencode/issues/34523)
8. **显示 Session 总成本**：用户建议在包含 sub-agents 的 session 中，右侧成本显示应包含所有 agent 的 token 消耗，而不仅仅是 primary agent。[#4925](https://github.com/anomalyco/opencode/issues/4925)
9. **Desktop 重置 profile 后丢失历史记录**：macOS 用户反馈 Desktop 1.17.11 在重置 profile 修复 "Interrupted" 错误后，导致本地 `opencode.db` 中的历史 session 在 UI 中无法显示。[#34471](https://github.com/anomalyco/opencode/issues/34471)
10. **支持 `disable-model-invocation` frontmatter**：用户请求在 `SKILL.md` 中支持 `disable-model-invocation: true`，以防止技能被模型自动调用，对齐 Claude Code 行为。[#34498](https://github.com/anomalyco/opencode/issues/34498)

### 重要 PR 进展
1. **清理 MCP stdio 子进程**：在关闭 SDK client 或 transport 前，终止 stdio MCP transports 的子进程，复用失败启动的清理路径，防止进程残留。[#34525](https://github.com/anomalyco/opencode/pull/34525)
2. **清理注册的工具名称**：使用现有的 MCP 风格替换规则清理核心工具名称，确保应用和位置作用域的工具注册使用清理后的名称。[#34512](https://github.com/anomalyco/opencode/pull/34512)
3. **暴露 models.dev modes 为独立模型**：将 models.dev 实验性 modes 投影为独立的 model ID 而非 variants，保留 mode 请求覆盖和特定成本计算。[#34521](https://github.com/anomalyco/opencode/pull/34521)
4. **修复 Wayland 系统粘贴**：在 Wayland 系统且无 xsel/xclip 时，为 `prompt.paste` 添加 `wl-paste` 文本读取支持。[#29881](https://github.com/anomalyco/opencode/pull/29881)
5. **序列化 mcp-auth.json 写入**：修复 `McpAuth.set()` 和 `remove()` 的无保护读写模式，防止并发 token 刷新导致文件损坏。[#29820](https://github.com/anomalyco/opencode/pull/29820)
6. **并行分发子任务**：修改 `runLoop`，使由用户消息生成的多个 subtasks 能够并行运行，而非逐个等待，提升多 Agent 执行效率。[#29819](https://github.com/anomalyco/opencode/pull/29819)
7. **限制 compaction 请求 payload**：修改 `/compact` 逻辑，使超大 session 在压缩时不易溢出，提高长上下文压缩成功率。[#29860](https://github.com/anomalyco/opencode/pull/29860)
8. **重构 PTY 环境路由**：保持 `PluginPtyEnvironment.layer` 作为显式的 PTY 环境异常，移除嵌入式 HTTP 路由中冗余的通用 PTY 环境 provider。[#34519](https://github.com/anomalyco/opencode/pull/34519)
9. **移除核心服务层导出**：内部化服务实现层，移除剩余的 foundational opencode `defaultLayer` 导出，优化底层架构。[#34518](https://github.com/anomalyco/opencode/pull/34518)
10. **跳过持久化空文本部分**：当模型直接进行 tool call 而无 `text-delta` 时，避免向 SQLite 写入空文本部分，防止 UI 渲染异常。[#29815](https://github.com/anomalyco/opencode/pull/29815)

### 功能需求归类
- **V2 架构与 API 演进**：多项需求围绕 V2 版本展开，包括 TUI 迁移至新 client ([#34359](https://github.com/anomalyco/opencode/issues/34359))、暴露 V2 config 更新端点 ([#34450](https://github.com/anomalyco/opencode/issues/34450))、实现 V2 session fork API ([#34430](https://github.com/anomalyco/opencode/issues/34430))、以及 V2 shell 后台运行语义定义 ([#34366](https://github.com/anomalyco/opencode/issues/34366))。
- **模型兼容性与成本控制**：用户高度关注特定模型（如 GLM-5.x）的 Prompt Cache 稳定性 ([#33998](https://github.com/anomalyco/opencode/issues/33998), [#31348](https://github.com/anomalyco/opencode/issues/31348))、参数字段兼容性 ([#33490](https://github.com/anomalyco/opencode/issues/33490))，以及多 Agent 场景下的总成本统计 ([#4925](https://github.com/anomalyco/opencode/issues/4925)) 和 per-agent compaction 控制 ([#34510](https://github.com/anomalyco/opencode/issues/34510))。
- **Skill 与 Agent 行为控制**：请求在 `SKILL.md` 中支持 `disable-model-invocation` 字段 ([#11972](https://github.com/anomalyco/opencode/issues/11972), [#34498](https://github.com/anomalyco/opencode/issues/34498))，以精细控制技能是否允许被模型自动调用。
- **TUI 与桌面端体验优化**：包括 TUI 中的 LaTeX 渲染 ([#11655](https://github.com/anomalyco/opencode/issues/11655))、键盘导航用户消息 ([#29931](https://github.com/anomalyco/opencode/pull/29931))、禁用新 session 自动恢复草稿 ([#34446](https://github.com/anomalyco/opencode/issues/34446))，以及 Desktop 端打开配置文件 ([#29812](https://github.com/anomalyco/opencode/pull/29812)) 和设置面板修复 ([#34507](https://github.com/anomalyco/opencode/issues/34507))。

### 开发者关注点
- **本地模型与网关稳定性**：开发者在使用本地 Ollama ([#22132](https://github.com/anomalyco/opencode/issues/22132)) 和第三方网关（如 opencode-go 调用 GLM）时，遇到挂起、缓存失效和字段不兼容等问题，直接影响长上下文工作流的连贯性和开发成本。
- **并发与状态管理**：MCP OAuth 凭证刷新 ([#34523](https://github.com/anomalyco/opencode/issues/34523))、`mcp-auth.json` 写入 ([#29820](https://github.com/anomalyco/opencode/pull/29820)) 以及子任务分发 ([#29819](https://github.com/anomalyco/opencode/pull/29819)) 等底层并发问题受到关注，表明在多进程和长连接场景下，状态一致性与资源竞争是底层架构需要持续优化的方向。
- **V2 迁移的平滑度**：随着 V2 架构的推进，TUI 客户端迁移 ([#34359](https://github.com/anomalyco/opencode/issues/34359))、核心服务层重构 ([#34518](https://github.com/anomalyco/opencode/pull/34518)) 以及 API 端点暴露 ([#34450](https://github.com/anomalyco/opencode/issues/34450)) 成为维护者当前的核心工作，开发者也在密切关注新架构下配置更新和 session 管理的 API 设计。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### 今日更新概览
过去24小时内，Qwen Code 社区保持高频迭代，共新增或更新 32 个 Issue 和 50 个 Pull Request。开发重心集中在修复 TUI 终端渲染缺陷、优化 Daemon 后台服务稳定性，以及完善多模型供应商的 Token 管理与状态控制。

### 社区热点 Issues
1. **MCP 安装过程内存溢出闪退**：在 macOS 环境下安装特定 MCP 时触发 GC 分配失败导致闪退，影响工具链扩展流程。[#6004](https://github.com/QwenLM/qwen-code/issues/6004)
2. **TUI 长文本渲染覆盖问题**：在默认 Static 模式下，当助手回复高度超过终端高度时，最后一行内容在输出完成后会被覆盖或隐藏。[#5800](https://github.com/QwenLM/qwen-code/issues/5800)
3. **流式输出无活动超时错误**：升级至 v0.19.3 后，用户频繁遭遇 `No stream activity for 120000ms` 错误，导致长思考或复杂任务中断。[#5975](https://github.com/QwenLM/qwen-code/issues/5975)
4. **Anthropic 提示缓存未命中导致成本增加**：路由至 Anthropic 协议端点时，由于侧边查询前缀不同及会话断点设置问题，导致 prompt-cache 频繁失效。[#5942](https://github.com/QwenLM/qwen-code/issues/5942)
5. **支持配置上下文压缩模型**：用户提议增加 `model.compactionModel` 配置，允许使用低成本模型执行上下文压缩，避免昂贵模型消耗自身上下文窗口。[#5956](https://github.com/QwenLM/qwen-code/issues/5956)
6. **Yolo 模式异常回退至 Plan 模式**：在 Yolo 模式下执行任务时，Agent 意外切换至 Plan 模式并因权限问题导致任务失败，疑似旧版 Bug 回归。[#5970](https://github.com/QwenLM/qwen-code/issues/5970)
7. **Linux 环境下 TUI 滚动刷屏**：在 Anolis OS 等 Linux 环境中，长对话输出时 TUI 窗口会从第一次聊天开始持续滚动，造成视觉上的刷屏效果。[#5971](https://github.com/QwenLM/qwen-code/issues/5971)
8. **GLM-5.2 思考标签泄漏**：使用 OpenAI 兼容协议接入 GLM-5.2 时，内部思考文本（thinking text）及 `</think>` 标签被作为正常输出打印。[#6007](https://github.com/QwenLM/qwen-code/issues/6007)
9. **`/auth` 配置修改未在新会话生效**：在会话中通过 `/auth` 修改模型供应商配置后，当前会话正常，但开启新会话仍报 401 认证错误。[#5979](https://github.com/QwenLM/qwen-code/issues/5979)
10. **文件读取日志降级**：新版本 UI 中，Agent 读取文件时不再显示具体文件名，仅显示 `read 1 file`，降低了操作透明度。[#6014](https://github.com/QwenLM/qwen-code/issues/6014)

### 重要 PR 进展
1. **优化 Serve 健康检查响应**：延迟加载较重的运行时图，确保 `qwen serve` 在启动初期的 `/health` 探针能够快速响应。[#6013](https://github.com/QwenLM/qwen-code/pull/6013)
2. **修复 ACP read_file 本地根目录处理**：使 ACP 支持的 `read_file` 工具能够正确读取技能指令、临时输出等受管本地根目录下的文件。[#6021](https://github.com/QwenLM/qwen-code/pull/6021)
3. **支持 /acp 会话流断点续传**：将 `/acp` Streamable-HTTP 会话事件流接入 Daemon 的事件重放引擎，支持通过 `Last-Event-ID` 恢复连接。[#5852](https://github.com/QwenLM/qwen-code/pull/5852)
4. **修复上下文压缩阈值计算**：在计算自动压缩阈值时，从上下文窗口中减去保留的输出 Token 数，防止因超出限制导致 API 400 错误。[#5957](https://github.com/QwenLM/qwen-code/pull/5957)
5. **TUI 备用屏幕模式支持鼠标交互**：在启用虚拟历史（alternate-screen）模式时，为选择菜单和对话框添加鼠标点击与悬停支持。[#6011](https://github.com/QwenLM/qwen-code/pull/6011)
6. **为 /loop 添加自主模式**：允许无参数的 `/loop` 命令启动自定进度的自主循环，支持 Agent 在后台自动维护任务。[#5991](https://github.com/QwenLM/qwen-code/pull/5991)
7. **默认加载 Browser MCP 工具**：在 `qwen serve` 会话中默认启用浏览器 MCP 路径及 CDP 隧道，提升 Web 自动化开箱即用体验。[#6006](https://github.com/QwenLM/qwen-code/pull/6006)
8. **修复 TUI 宽字符对齐与思考图标**：将存在宽度歧义的 `✦` 替换为 `◆`，并增加数学推理符号作为思考状态指示器，优化 East Asian 字符排版。[#5974](https://github.com/QwenLM/qwen-code/pull/5974)
9. **MCP 允许/排除列表支持 Glob 模式**：在 `mcp.allowed` 和 `mcp.excluded` 配置中引入通配符支持，简化多 MCP 服务器的管理。[#6012](https://github.com/QwenLM/qwen-code/pull/6012)
10. **修复子代理退出 Plan 模式的问题**：修正子代理审批模式覆盖逻辑，使其在 `exit_plan_mode` 成功后能够正确离开 Plan 模式。[#6026](https://github.com/QwenLM/qwen-code/pull/6026)

### 功能需求归类
- **Daemon 与后台自动化**：社区对 `qwen serve` 的后台运行能力提出更多要求，包括支持热重载通道（[#6010](https://github.com/QwenLM/qwen-code/issues/6010)）、通过命令行管理通道工作进程（[#5976](https://github.com/QwenLM/qwen-code/issues/5976)），以及完善 `/loop` 的无人值守自主模式（[#5990](https://github.com/QwenLM/qwen-code/issues/5990)）。
- **UI/UX 与终端交互优化**：用户持续关注 TUI 的细节体验，如 Web Shell 的移动端侧边栏适配（[#6000](https://github.com/QwenLM/qwen-code/issues/6000)）、代码块复制时排除行号（[#6024](https://github.com/QwenLM/qwen-code/issues/6024)），以及修复各类滚动和渲染异常。
- **Token 管理与成本控制**：随着长上下文使用的增加，开发者对成本优化提出具体方案，如分离压缩模型（[#5956](https://github.com/QwenLM/qwen-code/issues/5956)）和修复 Anthropic 缓存未命中问题（[#5942](https://github.com/QwenLM/qwen-code/issues/5942)）。

### 开发者关注点
- **TUI 渲染与交互稳定性**：终端环境下的长文本覆盖、滚动刷屏、鼠标滚轮跳跃等渲染问题被多次报告（[#5800](https://github.com/QwenLM/qwen-code/issues/5800), [#5971](https://github.com/QwenLM/qwen-code/issues/5971), [#5941](https://github.com/QwenLM/qwen-code/issues/5941)），表明跨平台终端 UI 的兼容性仍是当前影响基础体验的痛点。
- **长连接与流式输出超时**：在处理复杂任务时，流式输出超时（[#401](https://github.com/QwenLM/qwen-code/issues/401), [#5975](https://github.com/QwenLM/qwen-code/issues/5975)）频繁打断工作流，开发者对长耗时任务的连接保活和超时配置有较高诉求。
- **多模型兼容性与状态机管理**：第三方模型（如 GLM-5.2）的思考标签泄漏（[#6007](https://github.com/QwenLM/qwen-code/issues/6007)）、`/auth` 状态未持久化（[#5979](https://github.com/QwenLM/qwen-code/issues/5979)）以及 Yolo/Plan 模式切换异常（[#5970](https://github.com/QwenLM/qwen-code/issues/5970)），反映出在支持多样化模型供应商和复杂会话状态流转时，边界条件的处理仍需进一步收敛。

</details>