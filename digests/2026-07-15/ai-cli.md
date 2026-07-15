# AI CLI 工具社区动态日报 2026-07-15

> 生成时间: 2026-07-15 00:20 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

以下是基于 2026-07-15 社区动态的横向对比分析。

---

## 1. 今日横向概览

今日四个主流 AI CLI 工具均保持高频迭代。Claude Code 三连发版本重点修复模型可用性与对话框拦截，并新增屏幕阅读模式；OpenAI Codex 在发布稳定补丁的同时，通过 4 个 alpha 预发布快速推进底层模型迁移和 MCP 工具复用；Kimi Code 以 50 个 PR 的合并量集中打磨 goal 引擎与 Web UI 细节；OpenCode 则刚完成桌面 v2 迁移，新布局的摩擦立刻成为社区焦点。跨工具看，“子/多 Agent 控制”“桌面 UI 可靠性”“模型行为透明可控”是当日共同浮现的关注方向。

## 2. 各工具活跃度对比

| 工具 | Issues 数（活跃/新增） | PR 数（合并/重要） | Release 情况 |
|------|------------------------|---------------------|--------------|
| Claude Code | 50 条活跃 Issue，最热话题 83 评论、153 👍 | 9 个重要 PR（插件、Hook、安全文档） | 3 个版本（v2.1.208~210） |
| OpenAI Codex | 约 50 条 Issue 活跃/新增 | 20 余个 PR 合并（支出控制、MCP、模型迁移等） | 1 个稳定补丁 + 4 个 alpha 预发布 |
| Kimi Code | 8 条 Issue 更新 | 50 个 PR 合并（goal 引擎、Web/TUI 修复等） | 2 个版本（v0.24.0~0.24.1） |
| OpenCode | 未披露总量，热门 Issue ≥10 条 | 未披露总量，重要 PR ≥10 个 | 2 个版本（v1.18.0~1.18.1） |

## 3. 共同出现的功能方向

- **子代理/多 Agent 控制**：Claude Code 请求跨机器 Agent 协作协议（#28300）；OpenAI Codex 受困于子代理被迫与主代理同模型（#31814）；Kimi Code 明确拒绝子 agent 使用 goal 工具（PR #1697）；OpenCode 也涉及达到步数上限时的 agent 提示角色修正（PR #36970）。各方均在摸索 agent 层级的行为边界。

- **桌面/IDE 集成可靠性与 UI 体验**：OpenCode 桌面 v2 布局导致标签截断、模式选择器消失等问题引发大量回退要求；OpenAI Codex 桌面端浏览器插件崩溃、静默创建文件夹、快捷键丢失等反复被提起；Claude Code 的 VSCode 扩展存在会话重命名不同步问题；Kimi Code Web 端则修复了对话框 Escape 误触发会话中断的错误。

- **模型行为透明与可控性**：OpenAI Codex 用户实测发现 GPT‑5.6 Sol 上下文窗口严重缩水（#32806），特定模型不支持某些推理参数（#31846）；Claude Code 的 Fable 5 顾问在所有会话中不可用（#73365）；Kimi Code 的 plan 模式会自动关闭（#1585），goal 状态管理需多方修复。社区普遍要求模型能力和平台行为可预期、可配置。

- **交互安全与权限（自动确认/远程控制）**：Claude Code 远程控制会话中 AskUserQuestion 自动超时解析至推荐选项可能跳过人工确认（#77602）；OpenAI Codex 用户长期要求禁用 60 秒自动回答以防范误操作（#28969）。两个工具都面临自动决策跳过用户审查的风险。

- **工作区与配置文件本地化**：Claude Code 希望将项目记忆文件从全局移入项目 `.claude` 目录（#25947）；Kimi Code 则遇到项目级 `.kimi/skills/` 未被自动加载的问题（#1653）；OpenCode 用户抱怨新文件需重启才能被 @-提及（#32747）。项目级上下文与文件发现的实时性、可共享性是共同诉求。

## 4. 差异化定位分析

- **Claude Code**：侧重 **Hook/权限/规则引擎** 的深度定制，插件生态活跃（今日 PR 多为 hook 修复、安全文档同步），且持续补强 Windows 适配和无障碍支持。适合对工具链流程控制有高要求的开发者。

- **OpenAI Codex**：模型供应链和计费控制是核心，今天大量 PR 围绕支出控制、模型退役迁移、Bedrock 登录等企业级需求；同时多 Agent 能力正在强推但灵活性不足。偏向与 OpenAI 生态深度融合的专业/企业用户。

- **Kimi Code**：精力投入在 **goal 引擎与 ACP 协议**，今日 50 个 PR 近半与 goal 生命周期、代理隔离、会话导出相关，Web / TUI 体验打磨细致。定位更偏向提供结构化任务执行和第三方编辑器集成能力。

- **OpenCode**：当前焦点是 **桌面端现代化与多模型供应商兼容**（v2 布局迁移、xAI OAuth、推理选项扩展），同时社区对性能和高扩展性呼声很高。适合跨模型、重视桌面体验的开发者。

## 5. 社区活跃度记录

**Kimi Code** 以单日 50 个合并 PR 成为代码变更最活跃的项目，但 Issue 数量仅 8 条，呈现“快速修复与特性合并”的状态。**Claude Code** 和 **OpenAI Codex** Issue 活跃度相当（均约 50 条），但 Codex 的 PR 合并数（20+）和版本迭代（5 个包）略高于 Claude Code（9 PR，3 版本）。**OpenCode** 未公布总量，但从 10 条热门 Issue 和 10 个精选 PR 看，社区讨论集中在桌面 v2 摩擦和性能问题上，更新实为 2 个桌面版本。整体来看，今日 Claude Code 和 Codex 的社区交互量领先，Kimi Code 在代码产出上更为激进。

## 6. 有证据支撑的观察

- **桌面与 IDE 界面改动极易触发用户反弹**：OpenCode 桌面 v2 布局一天内引发多个 Issue（标签截断、模式切换失效），用户甚至直接回退版本；OpenAI Codex 桌面端的浏览器插件挂起、快捷键丢失等问题长期积累。实验性界面更新若缺乏保留旧版的平滑切换，会立刻招致集中抱怨。

- **Agent 层级管理是共同难题**：Claude Code 的跨机器 Agent 协议需求、Codex 的子代理模型不可指定、Kimi Code 明令禁止子代理操作 goal，不同工具在同一天都对 agent 边界进行讨论或限制，表明目前的自主 agent 编排尚缺乏通用控制原语。

- **模型能力声明与实际行为脱节引发信任危机**：Codex 的上下文窗口缩水（1.05M → 258K）和特定参数报错、Claude Code 的 Fable 5 全平台不可用，用户依靠模型声明做设计决策，实际体验落差直接转化为高票 Issues。

- **远程/后台会话的自动决策机制亟需安全开关**：Claude Code 远程控制自动选择推荐选项可能导致人工确认被跳过，Codex 的 60 秒自动回答长期被要求可禁用。两个工具都需提供取消自动决策的配置入口，否则会限制在自动化工作流中的信任范围。

- **无障碍与本地化投入正在形成差异化**：Claude Code 专门推出屏幕阅读器模式，Codex 社区持续要求朗读回复功能，这部分需求虽点赞数不高，但已从零星请求变为多个工具的功能对比点。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-15

## 今日更新概览
过去 24 小时内发布了 3 个版本（v2.1.208 ~ v2.1.210），主要改进包括实时耗时计数器、屏幕阅读器支持、Vim 插入模式快捷键，以及修复了后台对话中对话框被拦截的问题。社区共产生 50 条活跃 Issue，一条关于 Fable 5 顾问不可用的 Bug 引发 83 条讨论和 153 个 👍，成为当日最热话题。提交的 9 个 PR 集中在插件、Hook 规则修复和安全文档同步。

## 版本发布
- **v2.1.210**：在收缩的工具摘要行添加实时计时器，让长时间调用可见“跳动”；为Write、NotebookEdit、Glob权限规则添加启动警告。
- **v2.1.209**：修复 `/model` 及其他对话框在 `claude agents` 后台会话中被错误拦截的问题（回退了过度严格的守卫）。
- **v2.1.208**：新增屏幕阅读器模式（`--ax-screen-reader` 参数或环境变量/设置文件开启）；增加 `vimInsertModeRemaps` 设置，支持将 `jj` 等双键序列映射为 Escape。

## 社区热点 Issues（Top 10）

1. **Fable 5 顾问始终“不可用”** [#73365](https://github.com/anthropics/claude-code/issues/73365)
   使用 Opus 4.8 主线时，Fable 5 advisor 在所有会话中均不可用，报错“unavailable”。83 条评论，+153 赞，大量 Windows 用户复现，是目前最受关注的模型可用性 Bug。

2. **跨机器多 Agent 协作协议** [#28300](https://github.com/anthropics/claude-code/issues/28300)
   请求设计 Agent-to-Agent 协议，使不同机器上的 Claude Code 子代理能直接协同。35 条讨论，社区反映现代软件团队对此需求强烈。

3. **Windows 下 jdtls-lsp 插件因文件 URI 格式错误而失败** [#17643](https://github.com/anthropics/claude-code/issues/17643)
   Claude Code 在 Windows 上发送反斜杠路径给 LSP 服务器，导致无效 URI，Java 项目无法使用该插件。17 条评论，+19 赞，Windows 开发者长期困扰。

4. **希望项目记忆文件存储在项目本地 `.claude` 目录** [#25947](https://github.com/anthropics/claude-code/issues/25947)
   当前 MEMORY.md 存储在全局 `~/.claude/projects/...`，用户希望改为 `<project>/.claude/memory/`，便于项目级版本控制和共享。6 条评论，+29 赞。

5. **Task 工具缺少 cwd 参数以支持 Git worktrees** [#12748](https://github.com/anthropics/claude-code/issues/12748)
   子代理无法指定工作目录，导致在 Git worktree 场景下路径错乱。13 条评论，+26 赞，影响多分支并行开发的用户。

6. **VSCode 扩展中通过侧边栏重命名会话后终端标签不同步** [#37628](https://github.com/anthropics/claude-code/issues/37628)
   重命名仅体现在侧边栏，终端标签不更新，且下次消息会覆盖自定义名称。10 条评论，+13 赞，IDE 集成体验细节问题。

7. **MCP claude.ai Microsoft 365 连接器拒绝个人账号** [#53408](https://github.com/anthropics/claude-code/issues/53408)
   捆绑的 Microsoft 365 连接器不支持 Hotmail/Outlook/Live 等个人账号，OAuth 报错。6 条评论，+16 赞，许多个人订阅用户无法使用。

8. **桌面应用的工作树池回收导致会话中 HEAD 分离** [#75911](https://github.com/anthropics/claude-code/issues/75911)
   后台工作树池在会话仍使用时回收目录，造成 Git HEAD 脱离，甚至影响主克隆。4 条评论，潜在数据风险。

9. **远程控制会话中 AskUserQuestion 自动选择推荐选项** [#77602](https://github.com/anthropics/claude-code/issues/77602)
   通过 `--remote-control` 启动的会话在无 `askUserQuestionTimeout` 设置时，自动超时解析至推荐选项，可能意外跳过人工确认。3 条评论，影响远程自动化工作流。

10. **桌面自动归档会杀死正在运行的会话及后台子代理** [#75548](https://github.com/anthropics/claude-code/issues/75548)
   自动归档直接终止进程，导致进行中的 Agent 任务丢失且无法恢复。2 条评论，可能造成工作丢失。

## 重要 PR 进展
- **#77613**：`claude-compare` 功能新增（作者 @1napz）。
- **#77556**：修复插件开发（plugin-dev）中 `validate-hook-schema.sh` 无法处理插件 `hooks.json` 格式的 Bug（@sorapallivenkatesh）。
- **#77492**：修复 hookify 匹配 Write 和 prompt 规则的问题，加强了文件内容检查与回归覆盖（@ShiroKSH）。
- **#77443**：修复 ralph-wiggum 插件 stop hook 在 `set -e` 下错误处理不可达的死代码（@Yigtwxx）。
- **#77442**：修复 issue-automation 遥测时间戳错误（1970 年）及 `days_back` 输入失效（@Yigtwxx）。
- **#77439**：同步 security-guidance 插件的市场列表与 v2.0.0 版本清单（@Yigtwxx）。
- **#77427**：将 pr-review-toolkit 的 code-reviewer 限制为仅仓库检查工具，防止其调用额外代理（@ZaunEkko）。
- **#77260**（已关闭）：hookify 匹配 Write 和 prompt 规则的早期修复（@ShiroKSH），被 #77492 取代。
- **#76298**（已关闭）：文档化远程控制后台任务面板，同步 v2.1.205 的任务状态同步行为（@Arnesh-Vimalraj）。

## 功能需求归类
- **多 Agent / 子代理控制**：跨机器 Agent 协议 (#28300)，子代理独立工作目录 (#12748)，子代理模型参数可靠性及回退策略 (#73931)。
- **工作空间与 Git 集成**：工作树池稳定性与管理 (#75911, #77609)，本地化项目记忆文件 (#25947)。
- **IDE 集成（VSCode）**：会话内文本搜索 (#65858)，重命名同步问题 (#37628)，模型选择器显示与实际不符 (#77374)。
- **Windows 平台适配**：LSP 路径格式兼容 (#17643)，桌面更新失败 (#49655)，安装崩溃 (#34481)。
- **无障碍与本地化**：屏幕阅读器模式（v2.1.208 已实现），会话标题语言可配置 (#72004)。
- **权限与规则系统**：`~/.claude/` 下的 Allow 规则不生效 (#57132)，Write/NotebookEdit 权限警告（v2.1.210 已加）。
- **远程控制与后台任务**：AskUserQuestion 自动解析行为 (#77602)，全局任务仪表盘 (#77531)，会话自动归档保护 (#75548)。

## 开发者关注点
1. **Windows 支持的稳定性短板**：LSP 工具链的路径格式问题、桌面更新失败、旧 CPU 崩溃等成系列痛点，Windows 用户反馈集中。
2. **工作树管理风险**：桌面应用自动回收与重复分配工作树可能引发 HEAD 脱离和数据冲突，开发者需要更可靠的隔离机制。
3. **Agent 生命周期与资源控制**：子代理模型参数被静默忽略、自动归档强杀进程、后台会话被误判阻塞，反映出 Agent 生命周期管理的细节仍不完善。
4. **IDE 体验差距**：VSCode 扩展缺乏会话内搜索、重命名同步缺失、模型选择器 UI 误导，说明插件深度整合仍有提升空间。
5. **个人开发者与团队需求的分化**：Microsoft 365 连接器限制个人账号、跨机器协作协议呼声高，显示 Claude Code 用户群正向多角色、多环境扩展。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### 今日更新概览
过去 24 小时内，Codex 发布了 1 个稳定补丁 `rust-v0.144.4`（仅含内部维护）和 4 个 `0.145.0` alpha 预发布版。社区 Issue 活跃，新增/更新 50 条，其中多人参与的严重问题包括 GPT-5.6 Sol 子代理强制同模型、桌面端浏览器插件崩溃、模型上下文隐性缩水等；同时有 20 余个 PR 被合并，主要涉及支出控制、MCP 工具复用、模型退役迁移与 AWS Bedrock 登录支持。

### 版本发布
- **rust‑v0.144.4**：仅包含 Chores，无用户可见变更。
  Full Changelog: [rust‑v0.144.3...rust‑v0.144.4](https://github.com/openai/codex/compare/rust-v0.144.3...rust-v0.144.4)
- **rust‑v0.145.0‑alpha.8 / alpha.9 / alpha.10 / alpha.11**：连续四个预发布包，均未提供具体说明，属于常规迭代快照。

### 社区热点 Issues
1. **#31814** GPT-5.6 Sol 无法指定子代理模型，所有子代理被迫使用 Sol
   模型元数据强制启用 MultiAgent V2 并隐藏底层模型选择，导致子代理无法使用更轻量的模型，浪费推理资源。获 148 👍，66 条评论。
   [链接](https://github.com/openai/codex/issues/31814)

2. **#32925** 桌面端 26.707.71524 内置浏览器及 Chrome 插件报 `Cannot redefine property: process`
   影响所有 macOS 下的浏览器集成特性（Browser Use），导致无法连接应用内浏览器。已关闭，但仍被频繁引用。
   [链接](https://github.com/openai/codex/issues/32925)

3. **#32806** GPT-5.6 Sol 上下文窗口再次缩水：承诺 1.05M 实际仅 258K
   开发者实测发现上下文从 353K 降至 258K，严重背离模型声明，已引起广泛关注（22 评论，23 👍）。问题已关闭。
   [链接](https://github.com/openai/codex/issues/32806)

4. **#28969** 请求增加设置以禁用 60 秒自动回答
   用户抱怨 CLI 交互中 60 秒超时自动发送“是”导致误操作，要求可配置化。累计 118 👍，34 条评论。
   [链接](https://github.com/openai/codex/issues/28969)

5. **#31846** GPT‑5.3 Codex Spark 模型抛出 `Unsupported parameter: reasoning.summary`
   在桌面端使用 Spark 模型时触发推理参数不兼容错误，影响付费 Pro 用户。
   [链接](https://github.com/openai/codex/issues/31846)

6. **#20880** 桌面端每次启动在 `~/Documents/Codex` 下静默创建空文件夹
   用户反复清理后仍会自动生成，干扰文件管理，社区反复提起（16 评论，36 👍）。
   [链接](https://github.com/openai/codex/issues/20880)

7. **#31573** CLI OAuth 认证在 issuer 验证阶段失败
   影响 Free 用户通过 MCP OAuth 连接外部服务，24 👍 反映普遍受阻。
   [链接](https://github.com/openai/codex/issues/31573)

8. **#32040** Windows 桌面端内置浏览器使用后挂起或关闭 Codex
   推测与 Picture‑in‑Picture 失败相关，影响 Windows 11 用户，已积累 25 条评论。
   [链接](https://github.com/openai/codex/issues/32040)

9. **#31925** macOS 端 ChatGPT/Codex 统一后丢失 Option+Space 快速聊天
   原 ChatGPT 桌面端的便捷快捷键被移除，用户希望恢复，10 👍 支持。
   [链接](https://github.com/openai/codex/issues/31925)

10. **#20957** 请求为 Codex Desktop 添加 ChatGPT 风格的“朗读回复”功能
    用户强调无障碍需求，称 ChatGPT 已有该功能而 Codex 缺失，7 👍。
    [链接](https://github.com/openai/codex/issues/20957)

### 重要 PR 进展
1. **#33187** 在速率限制处理中遵循工作区支出控制
   防止因延迟或乱序更新导致过时的限额覆盖工作区硬性停止，提升计费准确性。
   [链接](https://github.com/openai/codex/pull/33187)

2. **#33184** 跨会话重用 MCP 工具目录
   避免新建会话时等待 stdio MCP 服务器初始化，直接使用缓存目录，加快工具就绪速度。
   [链接](https://github.com/openai/codex/pull/33184)

3. **#33173** 将 GPT‑5.4 用途迁移至 GPT‑5.6 变体
   从模型选择中隐藏 `gpt-5.4`/`gpt-5.4-mini`，内部自动重定向至 `gpt-5.6-terra` 及 `luna`，并更新记忆/速率切换等系统任务所用模型。
   [链接](https://github.com/openai/codex/pull/33173)

4. **#33170** 应用服务器支持 Amazon Bedrock 登录
   处理 `account/login/start` 请求的 `amazonBedrock` 类型，验证并持久化托管凭据，打通 Bedrock 模型提供方。
   [链接](https://github.com/openai/codex/pull/33170)

5. **#33166** 延迟 Noise 环境连接直到注册
   将 Noise 环境注册改为显式就绪信号驱动，避免过早 WebSocket 连接，改善重连稳定性。
   [链接](https://github.com/openai/codex/pull/33166)

6. **#31343** 新增元数据专用 `app/read` 端点
   允许客户端快速读取应用元数据而无需重建连接器运行时，提升 app‑server 响应速度。
   [链接](https://github.com/openai/codex/pull/31343)

7. **#31466** 在 `/feedback` 中捕获工具搜索管道诊断信息
   用每线程快照取代手动 `RUST_LOG` 调试，为问题上报提供工具搜索过程的上下文。
   [链接](https://github.com/openai/codex/pull/31466)

8. **#33156** 将分离审查作为审查代理 turn 运行
   分离审查（detached review）现在如同普通分叉 turn，享有 steering、权限和 item 流等标准能力。
   [链接](https://github.com/openai/codex/pull/33156)

9. **#33152** 支持分页线程历史在 app‑server 列表 API
   `thread/turns/list` 可对分页线程按游标、排序和分隔时间进行翻页，改善长历史浏览性能。
   [链接](https://github.com/openai/codex/pull/33152)

10. **#33149** 在路由规划前构建 MCP 工具运行时
    将过滤后的 MCP 工具元数据预先转化为 `CoreToolRuntime`，统一工具规划路径，消除直接与延迟列表的分叉。
    [链接](https://github.com/openai/codex/pull/33149)

### 功能需求归类
- **子代理/多代理控制**：要求可独立指定子代理模型，而非强制与主代理一致（#31814）。
- **上下文窗口透明度**：希望模型实际可用上下文与宣称值一致，避免隐性缩减（#32806）。
- **交互配置增强**：增加禁用自动回答、恢复快速聊天快捷键等可选设置（#28969, #31925）。
- **桌面稳定性与集成**：内置浏览器、Chrome 插件、Git 进程残留及远程会话可见性等问题反复出现（#32925, #32040, #17229, #27284）。
- **无障碍与体验**：朗读回复、IDE 风格 Git 视图、静默文件夹清理等功能被多次提及（#20957, #30919, #20880）。
- **模型与参数兼容性**：特定模型（Spark）不支持某些参数，以及模型迁移后的平滑过渡（#31846, PR #33173）。
- **认证与连接**：OAuth 失败、网络频繁断开、远程控制会话丢失等连接质量问题（#31573, #32670, #32957）。

### 开发者关注点
- **模型行为的可控性**：多代理约束、上下文缩减、参数兼容性等底层行为直接影响开发流程，用户需要明确的文档和可配置接口。
- **桌面端可靠性**：macOS/Windows 上浏览器插件崩溃、网络恢复、会话丢失等高频问题严重干扰每日使用。
- **性能与资源管理**：MCP 工具复用（PR #33184）、分页历史（PR #33152）、启动预热追踪（PR #33155）等 PR 反映出对响应速度与资源消耗的持续优化。
- **计费与配额公平性**：Pro20x 用户反馈用量异常（#29968），以及速率限制改进（PR #33187），表明社区对订阅价值高度敏感。
- **跨平台一致性**：Windows 沙箱、Intel Mac 崩溃等平台特有问题仍是痛点，需进一步加固（#30306, #31220）。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 — 2026 年 7 月 15 日

## 今日更新概览
过去 24 小时，Kimi Code 发布了两个新版本（v0.24.1 与 v0.24.0），引入 v2 session 导出与 goal 完成摘要修复。社区共更新 8 个 Issue 和 50 个 PR，讨论集中在 goal 生命周期稳定性、Web UI 细节改进、终端体验优化以及 ACP 协议扩展等方向。

## 版本发布

- **@moonshot-ai/kimi-code@0.24.1**（Patch）
  修复：保留 goal 完成摘要，并正确显示未类型化的 LLM 错误信息（[#1678](https://github.com/MoonshotAI/kimi-code/pull/1678)）。

- **@moonshot-ai/kimi-code@0.24.0**（Minor）
  新增：v2 session 导出支持，可将诊断信息打包为 zip 归档（[#1441](https://github.com/MoonshotAI/kimi-code/pull/1441)）。

## 社区热点 Issues

1. **[Bug] 项目级 Skill 未自动加载**
   [#1653](https://github.com/MoonshotAI/kimi-code/issues/1653) 项目下的 `.kimi/skills/` 目录未被识别，导致自定义 Skill 无法出现在 Available Skills 列表中。使用场景为本地定制化技能集成，已获 2 条评论。

2. **功能建议：Kimi Code Web 支持无工作区启动**
   [#1717](https://github.com/MoonshotAI/kimi-code/issues/1717) 用户 @xifandev 希望在新建对话时可选择「无工作区」选项，避免因默认读取当前目录而干扰与项目无关的快速小任务。

3. **[已关闭] KimiWeb 工作区新建对话时模式按钮无响应**
   [#1541](https://github.com/MoonshotAI/kimi-code/issues/1541) 已于今日关闭，修复了 Web 端新建对话时点击模式按钮不弹出选择菜单的问题。

4. **openai_responses 应将最终 function-call 参数视为权威**
   [#1455](https://github.com/MoonshotAI/kimi-code/issues/1455) 当第三方 OpenAI Responses 兼容服务返回多次同名函数调用时，Kimi Code 应取最后一次调用参数作为最终值，以避免参数错乱。

5. **[Bug] plan 模式总是被自动关闭**
   [#1585](https://github.com/MoonshotAI/kimi-code/issues/1585) 使用 plan 模式时，大模型在用户未审阅计划的情况下即自动关闭计划，导致体验中断。

6. **[Bug] Windows 11 + PowerShell 7.6.3：鼠标向上滚轮跳至会话顶部**
   [#1705](https://github.com/MoonshotAI/kimi-code/issues/1705) 在任务执行过程中向上滚动查看历史对话时，视图会高概率跳回会话欢迎页，影响操作。

7. **ACP：暴露 undo 与 session fork/close 能力**
   [#1685](https://github.com/MoonshotAI/kimi-code/issues/1685) ACP 适配器目前只暴露了 `/compact` 命令，用户希望增加 undo、fork 和 close 等会话操作，方便嵌入其他宿主使用。

8. **支持按协议按模型配置额外请求参数**
   [#1674](https://github.com/MoonshotAI/kimi-code/issues/1674) 期望在 `config.toml` 中为不同模型指定安全的、与协议相关的额外请求体参数，例如 OpenAI 的 `service_tier: "priority"`。

## 重要 PR 进展

1. **修复 agent-core-v2：验证 goal 记录**
   [#1694](https://github.com/MoonshotAI/kimi-code/pull/1694) 对从持久化中恢复的 goal 记录增加 schema 校验，防止无效枚举、畸形结构或非法计数器进入运行时，提升 session 恢复的健壮性。

2. **修复 kap-server：在会话快照中携带 live subagent 列表**
   [#1719](https://github.com/MoonshotAI/kimi-code/pull/1719) 将之前已合入 v1 的 subagent 修复（#1589）移植至 v2 服务端，避免页面刷新后群组卡片丢失成员信息。

3. **修复 kimi-web：对话框打开时 Escape 不应中断 session**
   [#1718](https://github.com/MoonshotAI/kimi-code/pull/1718) 在 Web UI 中按 Escape 关闭对话框时，不再错误地触发会话中断（修复 #1538）。

4. **修复 tui：高亮 diff 预览行**
   [#1716](https://github.com/MoonshotAI/kimi-code/pull/1716) 为终端 diff 视图的增删行添加基于主题的背景色及分隔线，提高深色或图像背景终端下的可读性。

5. **修复 kimi-web：恢复暂停的 goal**
   [#1693](https://github.com/MoonshotAI/kimi-code/pull/1693) 修正 Web UI 中暂停 goal 恢复后未重新启动该 goal 逻辑回合的问题，使恢复操作实际生效。

6. **修复 agent-core-v2：拒绝子 agent 的 goal**
   [#1697](https://github.com/MoonshotAI/kimi-code/pull/1697) 仅在主 agent 中暴露 goal 模型工具，并阻止子 agent 不当使用 goal 生命周期，保证架构一致性。

7. **修复 web：纯 HTTP 环境下代码块复制功能恢复**
   [#1714](https://github.com/MoonshotAI/kimi-code/pull/1714) 在非 HTTPS 且浏览器未暴露 `navigator.clipboard` 的环境下，代码块不再静默复制失败，改用回退方案。

8. **新功能：keep print-mode goal runs alive 直到 goal 结束**
   [#1712](https://github.com/MoonshotAI/kimi-code/pull/1712) 在实验性引擎 (agent-core-v2) 上，使用 `kimi -p /goal …` 打印模式时，程序将保持运行直到 goal 达到终止状态，而非仅完成首轮即退出。

9. **新功能：遥测事件中附加 turn_id 和 agent_id**
   [#1675](https://github.com/MoonshotAI/kimi-code/pull/1675) 为 turn 和工具调用相关的遥测事件补充 agent 归属标识，方便会话内的行为归因。

10. **重构 agent-core-v2：合并 wire 服务**
    [#1680](https://github.com/MoonshotAI/kimi-code/pull/1680) 将 Agent 相关的前端服务（reducer、journal）统一为一个聚合服务，简化调用方的恢复与持久化协调逻辑。

## 功能需求归类

- **工作区与上下文隔离**
  #1717 无工作区启动；#818 增加 `--worktree` 多会话隔离标志；反映出用户在多项目、临时小任务场景下需要更灵活的上下文切换。

- **模型与协议扩展性**
  #1674 按模型配置协议特有参数；#1455 处理第三方 OpenAI 兼容服务函数调用结果；开发者对多后端适配的细粒度控制有持续需求。

- **ACP 客户端能力补全**
  #1685 要求暴露 undo / fork / close 等会话管理原语，说明在嵌入其他编辑器或宿主时，ACP 协议的现网暴露尚不完整。

- **Goal 与计划模式体验**
  #1585 plan 模式自动关闭；#1693、#1697、#1712 等一系列 goal 生命周期修复，表明用户对计划模式的交互一致性和可靠性有较高期望。

- **终端与 Web 界面细节**
  #1705 终端滚轮跳顶；#1716 diff 高亮；#1718 对话框 Escape 误触发；#1714 HTTP 下复制失效；显示界面在多种终端环境下的稳健性仍是打磨重点。

## 开发者关注点

- **Goal 引擎稳定性**：今日大量 agent-core-v2 相关修复（goal 校验、预算对齐、暂停恢复、子 agent 隔离、时间持久化）表明该模块正处于紧密打磨期，开发者需要关注升级后的行为变化。
- **无工作区模式**：多人提出需要脱离文件系统绑定的轻量对话方式，这可能是后续 Web 端体验优化的方向。
- **协议与模型适配**：在对接第三方 OpenAI 兼容服务时，参数解析和额外配置的灵活性不足，是使用自定义模型的用户面临的主要障碍。
- **ACP 控制平面**：缺少 undo / fork 等操作暴露，限制了外部编辑器集成的深度，开发者在扩展工具链时需持续关注此能力。
- **跨平台 UI 一致性**：Windows 终端滚动问题、纯 HTTP 环境复制失效等表明不同部署环境下仍需更多兼容性测试。

---

*数据来源：https://github.com/MoonshotAI/kimi-code（基于 2026-07-15 UTC 公开数据）*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026年7月15日**

---

## 今日更新概览

今日桌面端接连发布 v1.18.0 与 v1.18.1，完成桌面 v2 迁移并开放新旧布局切换，但新布局引发的标签显示不全、模式选择器缺失等问题迅速成为社区焦点。同时，高 CPU 占用、上游超时等长期问题仍在讨论，多个 PR 针对推理、会话管理、xAI OAuth 等进行了修复或增强。

---

## 版本发布

- **v1.18.1** — 修复设置中模型提供商分区之间的间距问题（Bugfix）。
- **v1.18.0** — 桌面端 v2 迁移完成，支持新旧布局切换；新增升级处理与首次启动引导；修复文件视图背景色错误。

---

## 社区热点 Issues（精选 10 条）

1. **#30086 高 CPU 占用**：近 7 天 CPU 飙升，从可同时开 10+ 会话降至 3 个即卡顿，严重影响使用。👍15 | [链接](https://github.com/anomalyco/opencode/issues/30086)
2. **#28957 “上游空闲超时”错误**：使用 writing-plans 技能时频繁出现 `Upstream idle timeout exceeded`，macOS 用户受影响。 | [链接](https://github.com/anomalyco/opencode/issues/28957)
3. **#12472 原生 Claude Code hooks 兼容**：请求支持 PreToolUse、PostToolUse、Stop 等 hooks，已获 37 👍。 | [链接](https://github.com/anomalyco/opencode/issues/12472)
4. **#25239 暴露 GitHub Copilot “Auto” 选项**：希望在模型选择器中加入 Copilot 的自动模型模式。👍14 | [链接](https://github.com/anomalyco/opencode/issues/25239)
5. **#22129 Skills 在 TUI 自动补全中缺失**：Web 端可用但 TUI 不显示，已定位代码并关闭。👍15 | [链接](https://github.com/anomalyco/opencode/issues/22129)
6. **#36936 新标签布局导致标题无法完整显示**：用户回退 1.17 解决，明确表达对 v2 布局的失望。👍5 | [链接](https://github.com/anomalyco/opencode/issues/36936)
7. **#32747 文件提及遗漏启动后创建的文件**：需重启才能 @ 新文件，干扰开发流程。👍8 | [链接](https://github.com/anomalyco/opencode/issues/32747)
8. **#31972 新布局下 Plan/Build 切换失效**：Windows 10 启用新设计后 UI 与快捷键均无响应。👍7 | [链接](https://github.com/anomalyco/opencode/issues/31972)
9. **#36971 首页会话历史未加载**：今日更新后历史列表空白，影响回访浏览。 | [链接](https://github.com/anomalyco/opencode/issues/36971)
10. **#36956 本地插件显示为原始文件路径**：长路径被截断，无法辨识插件名称。 | [链接](https://github.com/anomalyco/opencode/issues/36956)

---

## 重要 PR 进展（精选 10 个）

1. **#36542 修复 `ensureDir` 目录已存在错误**：提升启动稳定性。 | [链接](https://github.com/anomalyco/opencode/pull/36542)
2. **#36970 修正达到步数上限时的提示角色**：从 assistant 改为 user，确保模型可靠执行。 | [链接](https://github.com/anomalyco/opencode/pull/36970)
3. **#36894 扩展推理选项映射**：支持更多模型和条件变体，完善预算限制。 | [链接](https://github.com/anomalyco/opencode/pull/36894)
4. **#36969 / #36950 TUI 主题系统重构与 V2 主题**：为增量主题迁移搭建基础框架。 | [链接](https://github.com/anomalyco/opencode/pull/36969)、[#36950](https://github.com/anomalyco/opencode/pull/36950)
5. **#35405 修复 Gemini 工具调用参数扁平化**：解决 dot-bracket 记号导致的调用失败。 | [链接](https://github.com/anomalyco/opencode/pull/35405)
6. **#36964 系列（#36964–#36968）桌面 UX 改进**：新增一键压缩、分叉按钮、侧栏内联重命名、删除会话确认、归档浏览器。 | [链接](https://github.com/anomalyco/opencode/pull/36964) 等
7. **#36947 修复会话活跃时不刷新时间戳**：校正近期会话排序。 | [链接](https://github.com/anomalyco/opencode/pull/36947)
8. **#33160 修复 MCP 工具参数为 null 的问题**：兼容 OpenAI 类供应商。 | [链接](https://github.com/anomalyco/opencode/pull/33160)
9. **#36919 / #36955 恢复 xAI OAuth 支持**：v2 中重建浏览器和设备码登录流程。 | [链接](https://github.com/anomalyco/opencode/pull/36919)、[#36955](https://github.com/anomalyco/opencode/pull/36955)
10. **#36949 增加服务无响应时显式重启恢复**：防止主进程锁死。 | [链接](https://github.com/anomalyco/opencode/pull/36949)

---

## 功能需求归类

- **桌面体验**：垂直标签、内联文件编辑、一键压缩/分叉、会话管理，以及新布局缺失的 Plan/Build 切换。
- **性能与稳定性**：降低高 CPU 占用，解决上游空闲超时，避免模型内部服务错误。
- **插件生态**：本地插件友好命名，原生 Claude Code hooks 支持，新增模型供应商接入（如 Aurelo）。
- **模型与执行**：GitHub Copilot Auto 选项、推理思考内容显示修复、可配置的搜索提供商。
- **文件与索引**：实时更新 @-文件提及，Skills 在 TUI 的补全支持。

---

## 开发者关注点

- **v2 桌面布局摩擦**：标签标题截断、模式选择器消失、会话历史无法加载，大量用户要求回退或紧急修复。
- **持续性能问题**：高 CPU 占用已困扰社区一周以上，严重影响多会话体验。
- **连接可靠性**：上游空闲超时和模型内部错误导致长会话不稳定，需从基础设施和客户端策略两方面解决。
- **可扩展性对齐**：开发者期望补齐 Claude Code 的 hooks 能力，实现更细粒度的工具流控制。
- **插件可识别性**：本地插件以文件路径显示，影响管理效率，急需友好标签。
- **文件发现延迟**：新文件需重启才能被 @ 提及，减弱了实时开发体验。

</details>