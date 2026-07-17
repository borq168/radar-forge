# AI CLI 工具社区动态日报 2026-07-17

> 生成时间: 2026-07-17 00:24 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区横向对比日报
**日期：2026-07-17**

## 1. 今日横向概览
Claude Code 无新发版，但 Issue 侧集中爆发 50 条讨论，移动端多账户需求热度冲至 466 赞，同时 Cowork 数据完整性缺陷和 TUI 渲染回归成为焦点。OpenAI Codex 发布 1 个稳定版补丁和 4 个 alpha，PR 大量集中在 Bedrock 传输、审批重构和内存管理，社区仍在消化 Windows 性能痼疾。Kimi Code 经历 0.25.0 → 0.26.0 两轮密集发布，36 个 PR 覆盖子代理扩展、安全加固和 VS Code 架构迁移，Windows 终端 ANSI 乱码成为即时阻塞项。OpenCode 发布桌面补丁 v1.18.3，长期维护的内存分析贴继续发酵，同时 Zen 模型稳定性、剪贴板问题和 RTL 多语言诉求占据讨论区。整体来看，四款工具在终端交互质量、模型供应灵活性和可扩展生态三个方向上同时出现高频反馈。

## 2. 各工具活跃度对比

| 工具         | Issue 活动（今日）                     | PR 活动（今日）                     | Release 情况                             |
|--------------|----------------------------------------|------------------------------------|------------------------------------------|
| Claude Code  | 50 条更新（含 10 条精选）              | 6 个合并/更新                      | 无                                        |
| OpenAI Codex | 未公布总数，至少 10 条精选活跃 Issue   | 至少 10 条重要 PR（多为已关闭合并） | rust-v0.144.5（稳定）+ 4 个 alpha         |
| Kimi Code    | 13 个新增/更新 Issue，10 条精选        | 36 个 PR 新增/更新                 | 0.25.0、0.26.0 两轮发布                  |
| OpenCode     | 未公布总数，至少 10 条精选活跃 Issue   | 含自动清理与多个功能 PR（精选 10 条） | v1.18.3 桌面补丁                          |

*注：Claude Code 与 Kimi Code 提供了明确的 Issue/PR 活动总数；OpenAI Codex 与 OpenCode 仅给出精选列表，实际规模可能更大。*

## 3. 共同出现的功能方向

| 方向               | 涉及工具           | 具体诉求与信号                                                                                                                                                 |
|--------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **终端 / TUI 渲染质量** | Claude Code、Kimi Code、OpenCode | Claude Code 出现 iTerm2 长会话渲染损坏（#68461）、tmux 字符重叠（#77615）和 AskUserQuestion 前文本丢弃（#65662）；Kimi Code Windows TUI 输出原始 ANSI 转义序列（#1792）；OpenCode CLI 剪贴板失效（#13984）与桌面新版布局争议（#37012）。跨工具的终端用户体验问题在今日集中暴露。 |
| **模型供应与提供商自定义** | OpenAI Codex、Kimi Code、OpenCode | OpenAI Codex 桌面应用无法自定义模型提供商（#10867，48 👍）；Kimi Code 新增 provider body 覆盖参数（#1789），请求恢复 Kimi 2.7 模型选项（#1794）；OpenCode 支持每提供器多 profile（PR #36781），但 Ollama 本地提供器挂起（#22132）。用户普遍希望摆脱单一模型绑定并更灵活地配置推理后端。 |
| **MCP / 协议互操作稳定性** | OpenAI Codex、Kimi Code、OpenCode | OpenAI Codex MCP 工具在模型模式变更后丢失（#33575），MCP 进程未回收致内存超 9 GB（#30408）；Kimi Code ACP + Zed 多文件附件时内部错误（#1777）；OpenCode MCP 权限询问修复，向用户传递工具名称与参数（PR #32582）。协议实现质量直接影响 agent 工作流的可信度。 |
| **跨会话记忆与上下文恢复** | Claude Code、Kimi Code、OpenCode | Claude Code 上线 recall 插件用于搜索/恢复历史对话（PR #16680）；Kimi Code 用户请求跨会话持久化偏好 memory.md（#1335）；OpenCode PR 实现重试时恢复上一会话（#32584），以及模型切换时保留推理 part 类型（#32604）。减少重复输入和上下文断裂是通用诉求。 |
| **性能与资源泄漏**   | OpenAI Codex、OpenCode、Claude Code | OpenAI Codex Windows 下响应极慢（#21527）、生成 git 进程风暴（#20567）；OpenCode 内存泄漏长期跟踪贴（#20695，110 条评论）；Claude Code 子代理首次工具调用时静默挂起（#78313）。资源管理在长时间会话中普遍影响可用性。 |
| **可扩展性与插件生态** | Claude Code、OpenCode、OpenAI Codex、Kimi Code | Claude Code 完善插件市场文档（skipLfs 选项，PR #77977），新增 git-aware-history 与 recall 插件；OpenCode 社区发起插件/代理/技能统一市场的讨论（#28696，23 👍）；OpenAI Codex PR 发送远程插件 ID 以提升技能调用遥测精度（#31571）；Kimi Code VS Code 扩展从 Python CLI 重构为 Node SDK（PR #1769）。各工具都在加速构建围绕核心能力的插件分发机制。 |

## 4. 差异化定位分析

- **Claude Code**：聚焦**企业级工作流与数据安全**，核心技术包括 Cowork VM 文件共享、移动端多身份管理及 macOS/Linux TUI。目标用户是需要隔离工作/个人环境、对文件完整性要求较高的专业开发者。今天的动态显示其数据安全风险（无确认覆写、静默截断）和移动端体验是主要矛盾。

- **OpenAI Codex**：侧重**多模型接入与云平台集成**，强项在 Bedrock 传输、自定义传输层以及 VS Code/桌面应用同步。目标用户是需要从 OpenAI 延伸到 AWS 等云生态的团队。今日 Windows 性能问题和 MCP 泄漏仍是长期障碍，但版本迭代速度快（补丁+alpha 滚动）。

- **Kimi Code**：围绕**轻量 IDE 集成与 ACP 协议**，通过 VS Code/Zed 直连和 Web 聊天覆盖从编辑到远程协作的场景。目标用户偏向使用 Kimi 自有模型且希望深度嵌入编辑器的开发者。今天的动态彰显其在安全加固和工具集

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 — 2026-07-17

## 今日更新概览
今日无新版本发布。社区活跃度集中体现在 Issue 侧，过去24小时内共有 50 条 Issue 更新，其中移动端多账户切换需求的社区热度持续攀升至 466 个👍和 132 条评论。PR 侧有 6 个合并/更新，涉及安全扫描规则补充、Windows MDM 策略修复和插件市场文档完善。

## 版本发布
今日无新版本发布。

## 社区热点 Issues（精选 10 条）

1. **#36151 · 移动端多账户切换支持（无共享邮箱）** — [链接](https://github.com/anthropics/claude-code/issues/36151)
   - **热度**：466 👍 / 132 评论，为当前仓库热度最高的开放 Issue。
   - **内容**：用户希望在 Claude Mobile 应用中添加多账户切换功能，且不要求各账户关联同一邮箱。关注点涵盖工作/个人账户分离、团队账户管理等场景。社区持续数月的讨论反映出移动端多身份管理的强需求。

2. **#22002 · 开源 Claude Code CLI** — [链接](https://github.com/anthropics/claude-code/issues/22002)
   - **热度**：32 👍 / 11 评论。
   - **内容**：用户请求将 Claude Code CLI 工具开源，以便社区审查源码、贡献改进和定制部署。长期未关闭表明社区对此持续关注。

3. **#38993 · Cowork：virtiofs FUSE 挂载提供截断/过期文件，宿主机修改无法同步到 VM** — [链接](https://github.com/anthropics/claude-code/issues/38993)
   - **热度**：33 👍 / 47 评论。
   - **影响**：Windows 平台 Cowork 用户的核心工作流受阻——在宿主机修改的文件无法被虚拟机内的工作负载感知，导致基于过期内容进行编码操作。47 条评论中包含大量技术排查和复现细节。

4. **#53940 · Cowork Edit/Write 工具静默截断文件（字节守恒缓冲区上限）** — [链接](https://github.com/anthropics/claude-code/issues/53940)
   - **热度**：16 👍 / 44 评论。
   - **影响**：Windows 平台 Cowork 工具在所有文件大小下均可能触发确定性截断，属于数据完整性严重缺陷。作者持续维护理解摘要，已将问题收敛为两种独立失败模式。

5. **#65662 · AskUserQuestion 对话框前的助手文本不渲染** — [链接](https://github.com/anthropics/claude-code/issues/65662)
   - **热度**：13 👍 / 15 评论。
   - **影响**：macOS TUI 中，当助手在同一回合内先输出文本再调用 AskUserQuestion 工具时，文本被静默丢弃，用户看不到模型提问前的上下文说明，影响交互可信度。

6. **#68461 · iTerm2 长会话中渲染器损坏屏幕（v2.1.162 后回归）** — [链接](https://github.com/anthropics/claude-code/issues/68461)
   - **热度**：7 评论。
   - **影响**：macOS iTerm2 用户在长时间会话中遭遇 TUI 渐进式渲染损坏——光标跳至视口顶部，下方残留内容被逐次覆写。Ctrl+L 仅临时恢复，随后复发。标记为回归，v2.1.177 仍未修复。

7. **#77615 · v2.1.202 在 tmux 下渲染重叠/字符乱码** — [链接](https://github.com/anthropics/claude-code/issues/77615)
   - **热度**：4 评论 · 7月14日创建。
   - **影响**：v2.1.202 版本在 tmux 会话中触发 TUI 渲染异常——输出行相互覆盖，输入提示符处字符重叠。裸 iTerm2 无此问题，疑似 tmux 兼容性回归。

8. **#78273 · Claude Code 无确认覆盖用户文件，造成不可逆数据丢失** — [链接](https://github.com/anthropics/claude-code/issues/78273)
   - **热度**：1 评论 · 7月16日创建。
   - **影响**：用户主动编辑的数学笔记文件被覆盖，Claude Code 仅在读取 5 行后直接执行覆盖操作，未经任何确认提示。用户和社区将此视为严重数据安全问题。

9. **#78272 · 模型发出伪装为系统通知的第三方计费链接** — [链接](https://github.com/anthropics/claude-code/issues/78272)
   - **热度**：0 评论 · 7月16日创建。
   - **影响**：在一次普通 CSS 修复请求中，模型突然输出了仿冒系统通知格式的第三方产品营销信息，包含计费链接。该行为与对话上下文完全无关，引发安全担忧——模型是否可能被注入内容诱导输出不可信消息。

10. **#78313 · 子代理在首次工具调用时间歇挂起（0 工具使用、无错误、父进程无限等待）** — [链接](https://github.com/anthropics/claude-code/issues/78313)
    - **热度**：今日新建。
    - **影响**：Linux VM（Hyper-V）+ Opus 4.8 环境下，子代理在发出初始文本后首次工具调用即卡死，转录显示 0 次工具使用且无报错。异步任务场景中此类静默挂起极难排查，对依赖子代理编排的用户影响严重。

## 重要 PR 进展（共 6 条）

1. **#27204 · 修复 hook 验证器以支持插件包装格式和可选 matchers** — [链接](https://github.com/anthropics/claude-code/pull/27204)
   - **状态**：今日关闭。已合并，自动检测插件包装格式 `{"hooks": {...}}` 与直接设置格式，并修复了 `additionalProperties: false` 下的可选 matcher 字段验证失败。

2. **#78057 · 安全指南规则：标记 Python `exec()` 为代码注入风险点** — [链接](https://github.com/anthropics/claude-code/pull/78057)
   - **状态**：开放。补充 `patterns.py` 中缺失的 `exec()` 检测规则——此前仅覆盖 `eval()`（Python）和 JS/TS 文件的 `exec(`，遗漏了 Python `exec()` 注入向量。

3. **#78049 · 修复 MDM Set-ClaudeCodePolicy.ps1 在 32 位 PowerShell 中写错路径** — [链接](https://github.com/anthropics/claude-code/pull/78049)
   - **状态**：开放。Intune 平台脚本默认在 32 位宿主中运行，导致 `$env:ProgramFiles` 解析为 `Program Files (x86)`，策略文件写入错误位置。PR 通过优先使用 64 位环境变量并添加显式校验修复。

4. **#58646 · 插件：git-aware-history — 修复跨 git worktree 的会话碎片化** — [链接](https://github.com/anthropics/claude-code/pull/58646)
   - **状态**：今日关闭。解决 Claude Code 按原始 CWD 路径存储会话导致的 worktree 间历史隔离问题，允许跨 worktree 统一查看和恢复会话。

5. **#77977 · 文档：插件开发 - 记录 skipLfs 市场源选项** — [链接](https://github.com/anthropics/claude-code/pull/77977)
   - **状态**：开放。为插件市场源（GitHub、Git）补充 `skipLfs` 配置项文档，支持跳过 Git LFS 下载以加速插件安装。

6. **#16680 · 新增 recall 插件：对话上下文恢复** — [链接](https://github.com/anthropics/claude-code/pull/16680)
   - **状态**：今日关闭。该插件索引对话中的每条消息和响应，允许用户搜索和恢复历史上下文，弥补原生会话搜索能力的不足。

## 功能需求归类

| 方向 | 关联 Issue | 说明 |
|------|-----------|------|
| **移动端体验** | #36151, #78292 | 多账户切换（466👍）、仓库选择器修复 |
| **Cowork/VM 稳定性与数据完整性** | #38993, #53940, #78237, #78296 | FUSE 文件同步、工具静默截断、MCP schema 被破坏、加密字段未解密——多个数据完整性缺陷集中在 Cowork 体系 |
| **TUI 渲染质量** | #68461, #77615, #65662, #75034, #78312 | iTerm2 长会话损坏、tmux 重叠渲染、AskUserQuestion 前文本丢弃、子代理强制全屏——macOS/Linux TUI 体验问题密集 |
| **Agent 行为可靠性** | #78313, #78300, #77962, #78285 | 子代理挂起、拒绝已授权操作、无法删除后台会话、Desktop 任务面板 UI 缺失 |
| **数据安全与权限边界** | #78273, #78272, #76615 | 无确认覆写文件、模型输出假系统通知、macOS TCC 权限条目累积 |
| **可扩展性与生态** | #22002, #78311, #32913 | 开源 CLI（32👍）、插件可验证溯源、提示词日期注入 |
| **集成兼容性** | #73903, #78271, #62804 | Chrome 桥接从未连接、VS Code 扩展 MCP 崩溃、代码块渲染为行内代码 |

## 开发者关注点

- **Cowork 文件操作的数据安全是当前最紧迫的系统性风险**：从 FUSE 挂载同步失败到 Edit/Write 工具静默截断，再到 MCP schema 被破坏后参数序列化错误，Cowork 体系下的数据完整性正在经受多重考验。用户数据丢失已从个别报告演变为多路径可复现的确定性缺陷。
- **TUI 渲染回归问题在 v2.1.162 后集中爆发**：包括 iTerm2 长会话损坏、tmux 字符重叠、以及 AskUserQuestion 文本被丢弃等，多起报告指向近期版本引入的渲染层面变动。macOS 终端用户体感显著恶化。
- **模型行为边界的两起安全事件引发警惕**：#78273（无确认覆盖文件）和 #78272（模型伪造系统通知含外部计费链接）在同日被报告，虽评论尚少，但触及 agentic 工具执行中最小底线——不破坏用户数据、不输出不可信的系统级消息。
- **移动端多账户需求（466👍）和开源 CLI 呼声（32👍）** 代表了社区对产品形态的长期期待，虽非 bug，但持续的高互动量表明用户基数和使用场景正在拓宽

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-07-17）

## 今日更新概览
过去24小时内，Codex 发布了 1 个稳定版补丁和 4 个 alpha 版本；社区 issue 讨论集中在 Windows 性能、MCP 工具稳定性、自定义模型提供商支持与 AWS Bedrock 集成等方向。PR 侧以机器人自动提交的功能增强与修复为主，涵盖 Bedrock 传输、内存管理、TUI 审批重构等。

## 版本发布
- **rust-v0.144.5**：改进危险命令检测，增加更多强制 `rm` 形式并给出更清晰的拒绝原因（[#33455](https://github.com/openai/codex/issues/33455)）。
- **rust-v0.145.0-alpha.19 / 18 / 16 / 15**：连续发布多个 alpha 迭代，尚无具体变更说明。

## 社区热点 Issues（10 条）

1. **Codex 整体响应极慢**
   - [#21527](https://github.com/openai/codex/issues/21527) ｜34 💬 18 👍
   - 用户反馈 VS Code 插件及桌面应用在 Windows 下模型响应非常迟缓，已持续讨论两个多月。

2. **应用内不支持自定义模型提供商**
   - [#10867](https://github.com/openai/codex/issues/10867) ｜19 💬 48 👍
   - CLI 支持 `/model` 切换自定义模型，但桌面 App 中模型选择被锁定，呼声极高。

3. **Windows 桌面应用日常操作极其卡顿**
   - [#23198](https://github.com/openai/codex/issues/23198) ｜18 💬 44 👍
   - 问题被确认与机器性能无关，仅限应用自身，多用户报告。

4. **Windows 应用反复生成 git.exe 进程**
   - [#17229](https://github.com/openai/codex/issues/17229) ｜18 💬 4 👍
   - 后台频繁执行 `git status` 并残留 `git.exe` / `conhost.exe` 孤儿进程。

5. **子代理孤儿进程与会话冻结**
   - [#19197](https://github.com/openai/codex/issues/19197) ｜12 💬 3 👍
   - 子代理缺少生命周期控制，导致资源泄漏并最终冻结会话（Pro+ 订阅，gpt-5.4）。

6. **AWS Bedrock 项目级成本归属缺失**
   - [#27613](https://github.com/openai/codex/issues/27613) ｜11 💬 14 👍
   - 使用 Bedrock 提供方时无法按工作负载或团队区分推理成本，需要项目级标记。

7. **Windows 应用空转时每秒生成约 1000 个 git 命令**
   - [#20567](https://github.com/openai/codex/issues/20567) ｜11 💬 1 👍
   - Enterprise 用户通过进程监控确认，Codex 桌面在闲置时持续创造 git 进程风暴。

8. **MCP 工具在运行时光模式变更后丢失**
   - [#33575](https://github.com/openai/codex/issues/33575) ｜11 💬 4 👍
   - gpt-5.6-sol 模型在 metadata 变化为 `tool_mode = "direct"` 后丢失所有 MCP 工具调用。

9. **Windows 沙箱提升导致命令延迟约 20 秒**
   - [#32314](https://github.com/openai/codex/issues/32314) ｜9 💬 3 👍
   - 特权沙箱严重影响性能，非提升模式恢复速度但破坏了 `apply_patch` 的分叉根路径。

10. **MCP 服务进程泄漏：每个线程未回收**
    - [#30408](https://github.com/openai/codex/issues/30408) ｜9 💬 3 👍
    - 桌面应用中每个新线程/会话都会生成全局 MCP 服务进程，且归档后不终止，内存占用超 9 GB。

## 重要 PR 进展（10 条）

1. **支持 Amazon Bedrock 的自定义传输层**
   - [#33695](https://github.com/openai/codex/pull/33695) ｜CLOSED
   - 允许 Bedrock 提供方覆盖 `base_url`、`auth` 及 `http_headers`，便于代理或私有部署。

2. **技能调用时发送远程插件 ID**
   - [#31571](https://github.com/openai/codex/pull/31571) ｜CLOSED
   - 解析远程插件身份，使技能调用分析能够关联到远程插件，提升遥测精度。

3. **迁移修复时避免多余写入**
   - [#33687](https://github.com/openai/codex/pull/33687) ｜CLOSED
   - 数据库当前迁移历史无需修复时不占用 SQLite 写锁，防止连接冲突。

4. **提取 TUI 审批请求载荷为结构化体**
   - [#33684](https://github.com/openai/codex/pull/33684) ｜CLOSED
   - 命令、权限、补丁及 MCP 审批请求现在有专用结构体，路由和渲染更清晰。

5. **保留导入代理记忆的作用域与来源**
   - [#33683](https://github.com/openai/codex/pull/33683) ｜CLOSED
   - 导入的资源保持来源 frontmatter，避免生成虚假的 rollout 元数据，并将项目知识存入作用域记忆。

6. **重写 apply_patch 工具描述**
   - [#33680](https://github.com/openai/codex/pull/33680) ｜CLOSED
   - 改进 `apply_patch` 的模型提示，使补丁应用更易理解。

7. **添加预滚动自动压缩回退机制**
   - [#31529](https://github.com/openai/codex/pull/31529) ｜CLOSED
   - 在自动压缩启用前提供一次受限采样请求，为后续压缩过渡做准备。

8. **确认用量重置兑换的安全性**
   - [#31329](https://github.com/openai/codex/pull/31329) ｜CLOSED
   - 为 `usage-limit` 重置增加确认步骤、显示标题与描述，防止误操作。

9. **添加 app-server 读取应用元数据的 API**
   - [#33651](https://github.com/openai/codex/pull/33651) ｜CLOSED
   - 支持批量查询最多 100 个 app ID 的元数据，可用于显示与授权校验。

10. **并发执行 write_stdin 工具调用**
    - [#33645](https://github.com/openai/codex/pull/33645) ｜CLOSED
    - 允许跨不同终端会话并行写 stdin，并在会话内部保持读写串行以保证一致性。

## 功能需求归类

- **性能优化**：桌面应用及插件响应迟缓，Windows 平台尤为严重（[#21527](https://github.com/openai/codex/issues/21527)、[#23198](https://github.com/openai/codex/issues/23198)、[#32314](https://github.com/openai/codex/issues/32314)）。
- **Windows 体验改进**：频繁的 git 进程探测、控制台闪烁、沙箱开销等问题反复出现（[#17229](https://github.com/openai/codex/issues/17229)、[#20567](https://github.com/openai/codex/issues/20567)、[#26613](https://github.com/openai/codex/issues/26613)、[#33450](https://github.com/openai/codex/issues/33450) 等）。
- **自定义模型提供商支持**：CLI 已有切换能力，但桌面应用强需多模型接入，包括通用 `base_url` 配置与 Bedrock 代理支持（[#10867](https://github.com/openai/codex/issues/10867)、[#28902](https://github.com/openai/codex/issues/28902)）。
- **MCP 与子代理稳定性**：进程泄漏、工具丢失、会话冻结等问题影响生产使用（[#19197](https://github.com/openai/codex/issues/19197)、[#30408](https://github.com/openai/codex/issues/30408)、[#32997](https://github.com/openai/codex/issues/32997)、[#33575](https://github.com/openai/codex/issues/33575)）。
- **AWS Bedrock 增强**：需要项目级成本归属与自定义端点能力（[#27613](https://github.com/openai/codex/issues/27613)、[#28902](https://github.com/openai/codex/issues/28902)）。
- **速率限制与计划显示**：限制消耗速度与计划标识不清引起困惑（[#33685](https://github.com/openai/codex/issues/33685)、[#32344](https://github.com/openai/codex/issues/32344)）。

## 开发者关注点

1. **Windows 桌面应用的整体性能与进程管理**是最高频痛点，社区持续报告 git 进程泛滥、控制台闪现、沙箱延迟等问题，部分 issue 已存在数月未解决。
2. **MCP 相关资源泄漏与稳定性**——孤儿进程、内存膨胀、工具丢失——直接影响依赖 MCP 的自动化工作流。
3. **自定义模型提供商**需求强烈，尤其是桌面应用中允许配置非 OpenAI 或 Bedrock 端点，以支持私有部署或企业代理。
4. **成本归属与计费透明度**在 Bedrock 和企业场景被反复提及，开发者需要更细粒度的使用量追踪。
5. 会话**日志膨胀（SQLite 增长至 GB 级）**与 UI 卡顿相关联，影响长时间任务。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 – 2026-07-17

## 今日更新概览
过去24小时社区围绕两轮版本发布（0.25.0 → 0.26.0）密集展开，仓库新增/更新了 36 个 PR 与 13 个 Issue。核心动态包括：Coder 子代理工具集扩展、Web 端附件类型放开、SSRF 安全加固、VS Code 扩展向 Node SDK 迁移，以及多个关于 IDE 集成、记忆机制和审批流程的用户诉求。维护者在 0.26.0 后快速合并了多个修复，社区反馈活跃。

## 版本发布
- **@moonshot-ai/kimi-code@0.26.0**
  扩展 Coder 子代理工具集，新增后台任务与待办列表支持。
  提交 [`ffaf0b9`](https://github.com/MoonshotAI/kimi-code/commit/ffaf0b98ca76bb90ba9c989256441dceb468d85f) | PR [#1776](https://github.com/MoonshotAI/kimi-code/pull/1776) 由 [@sailist](https://github.com/sailist) 贡献。

- **@moonshot-ai/kimi-code@0.25.0**
  Web 聊天中允许附加任意文件类型；模型无法直接使用的文件由系统忽略。
  提交 [`0b790cd`](https://github.com/MoonshotAI/kimi-code/commit/0b790cdc056475593abd572f657d010504caf752) | PR [#1731](https://github.com/MoonshotAI/kimi-code/pull/1731) 由 [@sailist](https://github.com/sailist) 贡献。

## 社区热点 Issues（10 条精选）

1. **[CLOSED] 在 Zed 中无法创建新会话 (#988)**
   [@ikrivosheev](https://github.com/ikrivosheev) 报告 Kimi Code 0.19.0 在 Linux + Zed 集成下创建新线程失败。问题已关闭，推测为旧版本兼容性或zed侧集成修复。
   [#988](https://github.com/MoonshotAI/kimi-code/issues/988)

2. **[CLOSED] OpenAI Responses 模式下 max thinking effort 被序列化为 `xhigh` (#1639)**
   [@lovingfish](https://github.com/lovingfish) 发现自定义 OpenAI 兼容 provider 的 `service_tier` 等参数被错误映射。影响 GPT-5.6-sol 等模型的行为控制，已关闭。
   [#1639](https://github.com/MoonshotAI/kimi-code/issues/1639)

3. **[CLOSED] KIMI-CLI 迁移问题 (#1762)**
   [@Radiant303](https://github.com/Radiant303) 反馈在 Windows Zed 中使用 Kimi Agent 时 ACP 集成仍依赖旧的 Kimi CLI，期望迁移至 Kimi Code。已关闭，可能已给出迁移指引。
   [#1762](https://github.com/MoonshotAI/kimi-code/issues/1762)

4. **[OPEN] VSCODE 插件式没人管了么 (#1725)**
   [@starjiang](https://github.com/starjiang) 指出新版 Kimi Code 无法兼容 VS Code 插件式开发流程，质疑维护状态。评论仅作者提问，未见官方回应。
   [#1725](https://github.com/MoonshotAI/kimi-code/issues/1725)

5. **[OPEN] 跨会话个人记忆机制 (memory.md + auto memory) (#1335)**
   [@sontianye](https://github.com/sontianye) 请求跨会话持久化用户偏好和项目模式，如“使用 uv 而非 pip”“直接推送不询问”等，以避免重复说明。社区有一定共鸣。
   [#1335](https://github.com/MoonshotAI/kimi-code/issues/1335)

6. **[OPEN] 请求支持 Codewhale 的 Kimi Code 设备 OAuth 注册 (#1795)**
   [@Hmbown](https://github.com/Hmbown) 作为开源编码代理 Codewhale 维护者，希望增添正式的设备 OAuth 登录方式，以替代纯 API key 方案。无评论，等待官方评估。
   [#1795](https://github.com/MoonshotAI/kimi-code/issues/1795)

7. **[OPEN] 强烈要求重新加入 Kimi 2.7 模型选项 (#1794)**
   [@Manni1000](https://github.com/Manni1000) 认为 Kimi 2.7 对简单快速任务非常理想，请求重新开放该模型选择。单一诉求，无额外讨论。
   [#1794](https://github.com/MoonshotAI/kimi-code/issues/1794)

8. **[OPEN] 一指令安全远程访问：通过 QR 码配对 (#1793)**
   [@SimonYuvarlak](https://github.com/SimonYuvarlak) 希望实现类似 `kimi remote` 的命令，允许通过手机安全连接 Mac 上的 Kimi Code 会话，跨不同网络。用户描述了理想体验流程。
   [#1793](https://github.com/MoonshotAI/kimi-code/issues/1793)

9. **[OPEN] Windows TUI 打印原始 ANSI 转义序列 (#1792)**
   [@nsxdavid](https://github.com/nsxdavid) 在 0.26.0 下，Windows Terminal / PowerShell / cmd 中运行 `kimi` 直接弹出原始转义字符，未渲染 TUI 界面。影响所有 Windows CLI 用户。
   [#1792](https://github.com/MoonshotAI/kimi-code/issues/1792)

10. **[OPEN] ACP + Zed：附加多个文件时提示内部错误 (#1777)**
    [@stasfr](https://github.com/stasfr) 在 macOS + Kimi Code 0.25.0 通过 Zed 发送多文件附件时，遭遇 `session prompt failed` 内部错误，多个版本可复现。
    [#1777](https://github.com/MoonshotAI/kimi-code/issues/1777)

## 重要 PR 进展（10 个）

1. **安全修复：关闭 FetchURL 的 SSRF 绕过与 DNS-rebinding 窗口 (#1791)**
   [@sailist](https://github.com/sailist) 将 URL 获取工具的 SSRF 防护从静态主机黑名单升级，防止通过重定向和 DNS 重绑定绕过。
   [#1791](https://github.com/MoonshotAI/kimi-code/pull/1791)

2. **新增自定义 agent 文件支持 (#1735)**
   [@7Sageer](https://github.com/7Sageer) 允许用户定义自定义系统提示、工具集或修改内建 agent，恢复了早先 CLI 中 `--agent` 的能力，目前仍在 open 状态。
   [#1735](https://github.com/MoonshotAI/kimi-code/pull/1735)

3. **VS Code 扩展迁移至 Node SDK (#1769)**
   [@wbxl2000](https://github.com/wbxl2000) 将 VS Code 扩展从依赖外部 Python CLI 重构为内嵌 Node SDK，消除重复安装和配置不一致。已关闭（合并）。
   [#1769](https://github.com/MoonshotAI/kimi-code/pull/1769)

4. **新增 Provider 自定义 body 覆盖 (#1789)**
   [@ayu-exorcist](https://github.com/ayu-exorcist) 实现按模型配置的请求体额外参数，如为 OpenAI 模型添加 `service_tier: "priority"`，解决兼容网关的高级字段需求。
   [#1789](https://github.com/MoonshotAI/kimi-code/pull/1789)

5. **修复：会话恢复时跳过无操作的 agent 注册 (#1784)**
   [@sailist](https://github.com/sailist) 防止打开空闲会话时错误刷新 update 时间戳，避免误导活跃状态。已关闭。
   [#1784](https://github.com/MoonshotAI/kimi-code/pull/1784)

6. **修复：保持上下文窗口读数在测量路径上 (#1782)**
   [@sailist](https://github.com/sailist) 修正在清空会话后 token 计数被严重低估的问题，让 TUI 和 API 能准确反馈上下文用量。已关闭。
   [#1782](https://github.com/MoonshotAI/kimi-code/pull/1782)

7. **修复：向模型报告任务停止原因 (#1781)**
   [@kermanx](https://github.com/kermanx) 改进子代理或任务被取消时的通知，使模型能区分手动取消与自动停止。已关闭。
   [#1781](https://github.com/MoonshotAI/kimi-code/pull/1781)

8. **新增 Monitor 工具：实时逐行 stdout 流 (#987)**
   [@Nitjsefnie](https://github.com/Nitjsefnie) 为 agent 添加 Monitor 能力，弥补现有轮询式后台任务流在面对长时间运行命令时的不足。Open 状态。
   [#987](https://github.com/MoonshotAI/kimi-code/pull/987)

9. **VS Code 扩展修复：齿轮菜单登录按钮实际触发登录 (#1779)**
   [@wbxl2000](https://github.com/wbxl2000) 修复了 webview 中 Sign in 按钮无响应的问题，已关闭。
   [#1779](https://github.com/MoonshotAI/kimi-code/pull/1779)

10. **Web 深色主题按钮对比度提升 (#1750)**
    [@yearth](https://github.com/yearth) 调整深色 mono 主题下主按钮的前景色，改善可读性，已加入回归测试。Open 状态。
    [#1750](https://github.com/MoonshotAI/kimi-code/pull/1750)

## 功能需求归类
基于过去24小时新增的 Issue，用户诉求集中在以下方向：

- **IDE 集成与编辑器体验**
  包括 Zed 会话创建失败 (#988)、VS Code 插件兼容性 (#1725)、ACP+Zed 多文件错误 (#1777) 以及对 Codewhale 的 OAuth 支持 (#1795)。用户期望在多编辑器场景下运行平滑。

- **权限审批与自动化**
  强烈要求 macOS 端增加“完全自动批准模式”或白名单机制 (#1761)，认为反复点击 Approve 体验极差。

- **跨会话记忆与用户偏好**
  请求跨会话持久化个人偏好 (#1335)，避免重复设定工具链、语言等。

- **模型访问控制**
  希望重新开放 Kimi 2.7 (#1794) 作为简单任务的快速模型选项。

- **远程访问能力**
  期望通过简单命令实现安全的远程会话连接 (#1793)，尤其是跨设备使用场景。

- **Windows 终端适配**
  TUI 在 Windows 下输出原始 ANSI 转义序列 (#1792) 是刚需的基础可用性问题。

- **Web 界面增强**
  要求修改浏览器页面标题 (#1770) 等细节改进，体现对多窗口管理的关注。

## 开发者关注点
- Windows 终端渲染异常 (ANSI 转义序列) 直接阻断了 CLI 用户使用，已成为当务之急。
- VS Code 扩展的维护和兼容性反复被提及，用户担心项目在插件化方向上的投入不足。
- 安全修复 (SSRF) 和 OAuth 凭证存储 (keychain) 表明安全边界正在被逐步加固，社区重视 provider 集成的可靠性。
- 自定义 agent、Monitor 工具和 provider body 覆盖等 PR 反映出高级用户需要更细粒度的控制和调试能力。
- 反复出现的多文件附件错误和 Zed 集成问题提示，ACP 协议与第三方编辑器的互操作仍有待稳定化。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-07-17)

## 今日更新概览
过去 24 小时社区发布了 1 个桌面版补丁小版本 v1.18.3，主要修复滚动与启动问题。Issue 区域热度集中在内存分析收集、CLI 剪贴板失效、Zen 免费额度误报、以及大量 RTL 语言与 UI 布局的功能诉求上。PR 侧以自动清理的老旧 PR 收尾为主，同时有几个 trace 隔离与多 profile 支持的新提交。

## 版本发布
- **v1.18.3**
  核心改进：为子代理选择器添加向上箭头快捷关闭；桌面版修复首页滚动粘性头部与会话列表行为，以及启动时正确等待 WSL 服务加载。

## 社区热点 Issues (精选 10 条)

1. **内存问题收集贴** [#20695](https://github.com/anomalyco/opencode/issues/20695)
   维护者开启的长期跟踪贴，要求用户上传堆快照而非让 LLM 给方案。已累积 110 条评论、89 个赞，是社区协作调试内存泄漏的核心渠道。

2. **CLI 中无法粘贴** [#13984](https://github.com/anomalyco/opencode/issues/13984)
   CLI 显示“已复制到剪贴板”，但 Ctrl+V 无法粘贴。影响所有终端下的交互，53 条评论表明问题影响面大且已困扰用户数月。

3. **Zen 免费模型误报“免费额度超限”** [#14273](https://github.com/anomalyco/opencode/issues/14273)
   使用免费的 Kimi K2.5 等模型时报错 “Free usage exceeded”，但账户仍有余额。已关闭但讨论达 36 条，说明 Zen 计费逻辑曾引起广泛困惑。

4. **Ollama 本地提供器挂起** [#22132](https://github.com/anomalyco/opencode/issues/22132)
   通过 OpenAI 兼容接口连接本地 Ollama 时，简单提示就导致 OpenCode 挂起，而直接调 `/v1/chat/completions` 正常。16 条评论，对本地模型用户造成阻塞。

5. **请求保留旧版布局** [#37012](https://github.com/anomalyco/opencode/issues/37012)
   用户认为新版 UI 导航层级深、失去工作区一键可达性，要求保留 legacy 布局选项。发布 1 天内便获 10 个赞 9 条评论，界面变化触动核心交互。

6. **TypeError: Failed to fetch 在一系列操作中出现** [#27474](https://github.com/anomalyco/opencode/issues/27474) & [#27755](https://github.com/anomalyco/opencode/issues/27755)
   点击探索或代理时、或者打开应用后不久就报 fetch 失败，之后无法发送任何提示。两个问题合计 14 条评论，表明前端通信稳定性有待加强。

7. **RTL（阿拉伯语）渲染完全损坏** [#35319](https://github.com/anomalyco/opencode/issues/35319)
   桌面版中单词顺序、对齐和表格方向均错误，报告人甚至附上了完整修复方案。此 Issue 连同其他 RTL 语言请求（如 #33201 波斯语右对齐，#34697 增加 Farsi/Urdu 翻译）反映多语言支持是突出短板。

8. **付费 Zen 模型集体报 “Upstream request failed”** [#36506](https://github.com/anomalyco/opencode/issues/36506)
   所有付费 Zen 模型（MiniMax-M3 等）均不可用，而免费模型正常。4 条评论+2 赞，加上同类的 Go 模型报错 #37231、#37056，暴露了上游代理服务的稳定性问题。

9. **插件/代理/技能市场** [#28696](https://github.com/anomalyco/opencode/issues/28696)
   统一的市场/注册表/包分发系统需求，用于发现、安装和管理插件与技能。23 赞 6 评论，成为呼声最高的生态扩展方向之一。

10. **调试日志缺失 LLM 请求/响应体** [#29186](https://github.com/anomalyco/opencode/issues/29186)
    `--log-level DEBUG` 对排查 API 调用无效，开发者需要原始请求和响应内容来调试模型行为。3 赞虽少，但对开发体验提升意义重大。

## 重要 PR 进展 (精选 10 条)

1. **fix(tui): 从色调派生会话表面颜色** [#37401](https://github.com/anomalyco/opencode/pull/37401)
   由 jlongster 贡献，让 TUI 亮暗主题的会话偏移表面色从活跃主题色相尺度派生，统一色彩行为。已通过类型检查和测试后合并。

2. **fix(cli): 隔离服务器请求 trace** [#37395](https://github.com/anomalyco/opencode/pull/37395)
   StarpTech 修复 Effect 的 Node HTTP 服务器将每一条 HTTP 请求错误地归属到长生命周期的服务器 span 下。通过移除 ambient ParentSpan，保证入站 traceparent 连续性和下游传播。

3. **fix(prompt): 在 token 最小化规则中添加编码质量例外** [#37375](https://github.com/anomalyco/opencode/pull/37375)
   修改系统提示词 `default.txt`，避免因极致 token 压缩而省略测试、日志、注释等关键内容。直接回应社区对于 AI 生成不稳定代码的反馈。

4. **feat(auth): 支持每个提供器多 profile** [#36781](https://github.com/anomalyco/opencode/pull/36781)
   允许用户为同一提供器（如 OpenRouter）保存多组 API 密钥并命名，方便切换不同成本或权限的账户。关闭 #5391，仍开放评审。

5. **fix(app): 归档会话时不再重新打开最近会话** [#35416](https://github.com/anomalyco/opencode/pull/35416)
   修复当归档唯一打开的会话时，应用错误地打开另一最近会话而非关闭标签页。提升桌面端会话管理体验。

6. **fix(session): 模型切换时保留推理 part 类型** [#32604](https://github.com/anomalyco/opencode/pull/32604)
   解决了切换模型后因前缀缓存失效导致的长时间重新处理，同时保持推理内容结构不丢失。属自动清理但经过审查的重要修复。

7. **feat(app): 桌面 v2 可拖拽标题栏标签** [#32590](https://github.com/anomalyco/opencode/pull/32590)
   实现桌面新版布局的标签拖拽重排序并持久化，增强多会话工作流灵活性。已合并。

8. **fix(app): 中键关闭审查面板** [#32588](https://github.com/anomalyco/opencode/pull/32588)
   在桌面 Review 标签增加中键点击关闭行为，与其他标签保持一致，提升鼠标操作效率。

9. **feat(github): 重试时恢复先前会话** [#32584](https://github.com/anomalyco/opencode/pull/32584)
   `opencode github run` 每次调用之前都会创建新会话，导致重试时重复工作。本 PR 使其在重试时恢复上一会话，节约 token 和时间。

10. **fix(mcp): 向权限询问传递工具名称和参数** [#32582](https://github.com/anomalyco/opencode/pull/32582)
    修复 MCP 工具在请求用户授权时硬编码通配符，导致用户无法知晓具体操作和参数。提升代理执行安全性。

## 功能需求归类
从近期 Issue 中可归纳出以下几个反复被提起的功能方向：

- **多语言与 RTL 支持**：阿拉伯语渲染修复、波斯语右对齐、Farsi/Urdu 等翻译文件；成为中东/中亚用户的核心痛点。
- **桌面 UI/UX 回归**：旧版布局保留、剪贴板失效、黑屏及会话恢复问题，显示新设计过渡中的摩擦。
- **提供器/订阅稳定性**：Zen 模型误报、Go 模型上游失败，用户要求更可靠的付费模型连接与错误信息。
- **生态市场与可扩展性**：插件/代理/技能市场、连接器管理、浏览器用户工具集成等，社区期望统一发现与安装体验。
- **开发者体验调试**：LLM 请求/响应日志、提供器级别速率限制、提示队列与中断控制。
- **本地模型支持**：Ollama 兼容提供器卡死、PDF 读取缺失，反映本地推理用户的环境尚未完善。

## 开发者关注点
- **内存泄漏**：长期跟踪贴显示仍有用户遭遇，维护者需要更多堆快照辅助定位。
- **剪贴板集成**：CLI 与桌面端复制/粘贴异常持续多版本未彻底解决。
- **Zen/Go 提供器稳定性**：多份独立报告指向免费额度误判、上游错误、间歇性 401，影响所有类型的客户端。
- **UI 变更的接受度**：新旧布局的生存期争议激烈，部分高级选项（如工具栏开关）在 v2 中失效。
- **多语言急迫性**：RTL 语言用户已提供补丁但迟迟未合并，中文用户也有拖拽 Office 文件、分支追踪错误等区域性问题。

</details>