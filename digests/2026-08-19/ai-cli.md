# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-19 00:42 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具横向对比分析报告 | 2026-08-19

## 1. 今日横向概览

今日四款主流 AI CLI 工具均发布了新版本或大量补丁，社区活跃度处于高位。Claude Code 发布 v2.1.235 但遭遇 Intel Mac 上 Cowork 虚拟机回归性崩溃等严重 Bug；OpenAI Codex 发布 rust-v0.148.0 并合并了 50 个 PR，其中多数涉及安全加固与 OAuth 元数据验证；Kimi Code 连续发布 0.37.0/0.37.1/0.37.2 三个小版本，重点修复 media 解析和子代理展示；OpenCode 虽未发布新版本，但社区关于计费配额和会话持久化的问题最为集中，50 条 Issue 和 50 条 PR 表明其开发节奏依然紧凑。

## 2. 各工具活跃度对比

| 工具 | Issues 更新数 | PR 更新数 | Release 数 |
|------|--------------|-----------|------------|
| Claude Code | 10+（热点，未提供总数） | 1 | 1 |
| OpenAI Codex | 50 | 50 | 1 |
| Kimi Code | 20（2 个关闭） | 50（6 个合并） | 3 |
| OpenCode | 50 | 50 | 0 |

**说明**：Claude Code 摘要未公布全部 Issue 数量，仅列出 10 条热点；OpenCode 未提及 Release，但 PR 和 Issue 数量与其他工具持平。

## 3. 共同出现的功能方向

- **Windows 平台兼容性**：Claude Code 有 Windows 桌面版更新失败（#76357）；OpenAI Codex 有 Windows 内置浏览器插件初始化失败（#39136）和 WSL Git 识别问题（#35119）；OpenCode 有 Windows 后台进程导致 shell 挂起（#29831）。Windows 生态的稳定性是跨工具的共同痛点。

- **MCP 相关资源管理**：Claude Code 报告 MCP HTTP OAuth 自定义 scope 被忽略（#83679）；OpenAI Codex 有 MCP 服务器进程泄漏（#30408）和 Windows 下 MCP 进程不回收（#38754）；Kimi Code 有请求将第三方代理加入白名单（#3051）；OpenCode 有动态 MCP 工具桥接修复（#37684）。MCP 的进程管理、OAuth 配置和第三方集成是多个工具社区关注的热点。

- **会话稳定性与持久化**：Claude Code 存在跨会话消息“假死”（#86279）和自动更新后对话历史回滚（#87560）；OpenAI Codex 有子代理 UI 卡住（#23930）和归档会话失败（#28276）；Kimi Code 有 `/undo` 后 TodoList 不回滚（#3058）和 VS Code 新对话误清空所有（#3036）；OpenCode 有消息 ID 回绕导致会话排序错乱（#43303）和会话永久卡死（#43277）。会话数据的一致性和恢复能力是用户普遍诉求。

- **计费与配额透明化**：Claude Code 爆出已包含额度被二次收费（#81703）；Kimi Code 出现 CLI 返回 403 但仪表盘显示 0% 的矛盾（#3014）；OpenCode 有 Zen 余额未解除免费限制（#33495）和 Go 配额异常消耗（#42935）。配额计算逻辑和显示一致性在多个工具中引发信任危机。

## 4. 差异化定位分析

- **Claude Code**：侧重 **Agent 协作与虚拟机基础设施**，Cowork 功能和跨会话消息是核心卖点，但今日回归性 Bug 暴露了其 VM 在旧硬件（Intel Mac）上的兼容性短板。同时，VSCode 扩展焦点抢夺问题已持续数月（#32726），反映其对 IDE 集成细节的打磨尚需加强。目标用户偏向深度使用 Agent 工作流的开发者。

- **OpenAI Codex**：今日 PR 大量集中在 **安全基座加固**（OAuth 验证、Guardian V2 风险评分、环境隔离）和 **教育计划支持**（Edu Plus/Pro），表明其正积极拓展企业及高校场景。新引入的异步消息工具（`send_user_message_async`）为多轮交互提供了基础设施。社区对多账户登录（#20500，107 👍）需求强烈，但尚未实现。

- **Kimi Code**：迭代速度最快（今日 3 个版本），聚焦 **agent-core-v2 引擎的稳定性与体验**，修复了粘贴图片失败、子代理面板展示、媒体解析器优先级等问题。同时，实验性 Flow 功能（#3038）和 WaitFor 工具（#3060）正在探索多阶段任务声明式执行。TUI 交互改进（备选屏幕禁用、全屏模式、长输出折叠）是用户高频诉求，社区更偏向终端重度用户。

- **OpenCode**：社区热点集中在 **计费系统** 和 **本地模型兼容性**。用户对 Zen/Go 配额显示不信任，并强烈要求支持 Qwen3.8-27B 等开源模型（#42729）。此外，会话持久化问题（消息 ID 回绕、工具调用后无限等待）最为严重，影响日常使用。其定位更接近支持多种模型（包括本地推理引擎）的开放平台，但计费透明度和稳定性仍是瓶颈。

## 5. 社区活跃度记录

- **OpenAI Codex 和 OpenCode** 在 Issue 和 PR 数量上并列最多（各 50 条），且维护者响应积极（Codex 合并了 50 个 PR，OpenCode 有 10 条重要 PR 进展）。Codex 团队今日还合并了多个安全相关 PR，回应速度较快。
- **Kimi Code** 发布 3 个版本，合并 6 个 PR，开发节奏紧凑，但社区 Issue 中仍有多个未解决的兼容性 bug（如 #3059 VS Code 扩展 TodoList 不显示），维护者回应集中在 PR 而非 Issue 评论。
- **Claude Code** 虽然 Issue 总数未知，但单个 Bug 报告的评论数（如 Windows 更新失败 26 条评论）和点赞数（VSCode 焦点问题 52 👍）较高，表明社区讨论热度不低，但 PR 进展仅 1 条，版本修复力度相对较弱。

## 6. 有证据支撑的观察

1. **Windows 兼容性是跨工具最突出的稳定性短板**：Claude Code（更新锁死）、OpenAI Codex（浏览器 RPC 依赖、WSL Git 误判）、OpenCode（后台进程挂起）均出现 Windows 特有 Bug，而 Kimi Code 未提及 Windows 问题，可能与其主要面向 Unix 环境有关。

2. **MCP 生态的进程管理和认证配置普遍不成熟**：至少三个工具（Claude Code、Codex、OpenCode）报告了 MCP 进程泄漏、OAuth scope 忽略、工具桥接失败等问题，说明 MCP 协议的实现仍处于早期磨合阶段。

3. **计费/配额争议正在侵蚀用户信任**：Claude Code 的二次收费、Kimi Code 的 403 与仪表盘矛盾、OpenCode 的 Zen 余额未生效，均涉及用户直接经济利益，且社区反馈持续数周甚至数月未解决，此类问题可能影响用户对工具的长期依赖。

4. **会话稳定性是高频共性诉求**：四个工具均有关于会话卡死、回滚、消息丢失的严重 Bug 报告，且部分（如 Claude Code 的跨会话消息“假死”、OpenCode 的消息 ID 回绕）影响核心工作流，是当前最需要优先修复的 category。

5. **安全加固成为 Codex 和 Kimi Code 的 PR 重点，但 Claude Code 和 OpenCode 今日无相关行动**：Codex 合并了 5 个以上安全/认证 PR，Kimi Code 引入了双 OAuth 端点，而 Claude Code 和 OpenCode 的社区热点中未出现安全相关 Issue，可能反映不同工具的安全成熟度阶段差异。

**今日暂无明确跨工具信号**：未有足够证据表明某一工具在某种能力上已形成“事实标准”或“拐点”。各工具均处于快速迭代、问题暴露和修复的并行阶段。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是为您生成的 2026-08-19 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-08-19

## 今日更新概览

今日发布了 v2.1.235 版本，主要新增了拼写检查功能。社区活跃度极高，一天内涌现多个高热度 Bug 报告，核心焦点集中在 **Cowork 虚拟机在 Intel Mac 上的回归性崩溃** 以及 **Windows 桌面版更新失败** 两大问题上。此外，关于跨会话通信、计费争议和权限配置的讨论也持续发酵。

## 版本发布

**v2.1.235** 已发布，更新内容如下：
- **新增功能**：增加了可选的 `spellcheck` 设置，可利用系统安装的 `aspell`、`hunspell` 或 `ispell` 在输入提示时，为拼写错误的单词添加下划线。
- **Bug 修复**：
    - 修复了在会话中语言服务器断开或重连时，导致整个提示缓存失效的问题。
    - 修复了嵌套的 `m` 开头的相关问题。

## 社区热点 Issues

1.  **[BUG] Cowork VM 在 Intel Mac 上大规模连接超时**
    - **影响场景**：使用 Cowork 功能的 Intel Mac 用户。
    - **问题范围**：多个报告指出，在更新到最新版本后，Cowork 虚拟机在 Intel Mac (x86_64) 上无法启动，表现为内核不识别 NVMe 磁盘、VSock 连接超时，最终导致 VM 不可用。
    - **社区反应**：已有多条独立报告，开发者已标记为 `regression`（回归问题）。这可能是当天最严重、影响最广的 Bug。
    - 链接: [#87503](https://github.com/anthropics/claude-code/issues/87503), [#87512](https://github.com/anthropics/claude-code/issues/87512), [#87642](https://github.com/anthropics/claude-code/issues/87642), [#87759](https://github.com/anthropics/claude-code/issues/87759)

2.  **[BUG] Windows 桌面版更新失败，应用无法启动**
    - **影响场景**：所有 Windows (MSIX) 用户。
    - **问题范围**：系统更新时，旧版应用的 AppX 容器被孤儿进程锁定，导致更新程序报错 `Another program is currently using this file`，应用无法启动，只能重启电脑解决。
    - **社区反应**：此问题已持续一个多月，评论数高达 26 条，是当前社区反应最强烈的 Bug 之一。
    - 链接: [#76357](https://github.com/anthropics/claude-code/issues/76357), [#73107](https://github.com/anthropics/claude-code/issues/73107)

3.  **[BUG] 跨会话消息发送功能存在严重缺陷**
    - **影响场景**：使用 Agent 多会话协作功能的用户。
    - **问题范围**：`send_message` 功能在许多情况下失效：消息在目标会话的 UI 上显示，但模型从未收到或处理，导致目标会话“假死”；或者消息发送成功，但目标会话无响应。该功能在 Windows 上问题尤为突出。
    - 链接: [#86279](https://github.com/anthropics/claude-code/issues/86279), [#87323](https://github.com/anthropics/claude-code/issues/87323), [#87694](https://github.com/anthropics/claude-code/issues/87694)

4.  **[BUG] macOS 沙盒模式因 `ARG_MAX` 限制完全不可用**
    - **影响场景**：使用 Git 且有大量 worktree 的 macOS 用户。
    - **问题范围**：`sandbox-exec` 生成的 Seatbelt 配置文件过长，导致任何 Bash 命令都无法执行（包括 `printf ok`），沙盒功能完全失效。
    - 链接: [#73468](https://github.com/anthropics/claude-code/issues/73468)

5.  **[BUG] 自动更新后，桌面版对话历史回滚**
    - **影响场景**：所有桌面版用户。
    - **问题范围**：应用自动更新后，导航历史记录中的 `active` 索引被保存为过期值，导致对话视图回退到之前的会话，用户可能丢失当前的上下文。
    - 链接: [#87560](https://github.com/anthropics/claude-code/issues/87560)

6.  **[BUG] 自动模式 (Auto Mode) 在 CLI 中被拒绝，但在桌面版可用**
    - **影响场景**：希望使用“自动模式”的 Claude Pro 用户。
    - **问题范围**：同一个 Pro 账户，在 CLI 中提示“自动模式不可用”，但在桌面版应用中却可以正常选择和运行，存在权限不一致的问题。
    - 链接: [#87534](https://github.com/anthropics/claude-code/issues/87534)

7.  **[BUG] 计费争议：已包含额度被二次收费**
    - **影响场景**：受 7 月 17 日计费事件影响的用户。
    - **问题范围**：用户在计划额度内使用服务，却被计入付费使用额度并自动充值，导致产生数千美元的非预期费用，且用户反馈未能及时解决。
    - 链接: [#81703](https://github.com/anthropics/claude-code/issues/81703), [#83062](https://github.com/anthropics/claude-code/issues/83062)

8.  **[BUG] MCP HTTP OAuth 流程忽略自定义 scope**
    - **影响场景**：使用 MCP 配置了自定义 OAuth scope 的开发者。
    - **问题范围**：`.mcp.json` 文件中配置的自定义 `scope` 被忽略，程序始终发送硬编码的默认 scope，导致 OAuth 流程可能不符合服务端要求。
    - 链接: [#83679](https://github.com/anthropics/claude-code/issues/83679)

9.  **[BUG] VSCode 扩展面板持续抢夺焦点**
    - **影响场景**：VSCode 扩展用户。
    - **问题范围**：当 Claude 产生输出时，其面板会自动弹出并抢夺焦点，打断用户在其他编辑器标签页中的工作流。该问题已存在数月，社区呼声很高（52 个点赞）。
    - 链接: [#32726](https://github.com/anthropics/claude-code/issues/32726)

10. **[FEATURE] 允许在输入为空时，一键发送建议文本**
    - **影响场景**：所有 TUI 用户。
    - **问题范围**：当 Claude 基于上下文给出建议的输入文本（placeholder text）时，用户现在需要手动复制粘贴，希望能直接通过回车或点击发送。
    - 链接: [#87801](https://github.com/anthropics/claude-code/issues/87801)

## 重要 PR 进展

- **#41611** [OPEN] 为 Claude Code 添加缺失的源代码。
    - 链接: [#41611](https://github.com/anthropics/claude-code/pull/41611)

## 功能需求归类

从近期 Issues 中，可以归类出以下用户反复提及的功能方向：

- **IDE 集成与体验优化**：用户持续要求 VSCode 扩展能提供更符合原生编辑器行为的体验，尤其是“不抢夺焦点”的选项。
- **跨会话与 Agent 协作**：跨会话消息发送功能是当前的热点，但存在大量稳定性问题，用户对 Agent 间可靠通信有强烈需求。
- **Cowork 功能稳定性**：Cowork 虚拟机在特定硬件平台（Intel Mac）上的回归问题，表明用户对此功能已有较高依赖，稳定性是首要诉求。
- **模型行为与安全配置**：用户希望自定义安全回退模型（如从 Fable 5 回退到 Opus 5），以及解决模型在长会话中“遗忘”或忽略指令的问题。
- **平台兼容性**：Windows 更新流程作为高频痛点，用户最关心的是基础安装和升级的可靠性。macOS 沙盒与大量 worktree 的兼容性问题也值得关注。

## 开发者关注点

- **稳定性是社区第一痛点**：Cowork VM 的回归、Windows 更新锁死、跨会话消息假死等严重 Bug 是当前社区讨论最多、抱怨最强烈的点。这些功能一旦被用户使用，其稳定性直接决定了用户对工具的信任度。
- **计费争议引发信任危机**：多起计费 Bug 报告显示出用户对自动充值、额度计算等功能的敏感度极高。此类问题需要快速、透明地解决，否则可能严重损害品牌声誉。
- **基础功能细节仍需打磨**：从“输入框建议文本一键发送”到“VSCode 焦点控制”，这些看似微小的功能点实际上是影响开发者日常使用流畅度的关键。社区对这类细节优化的呼声很高。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-19

## 今日更新概览

今日发布了 `rust-v0.148.0` 正式版，新增 TUI 会话导出为 Markdown、会话分支（fork）与归档/恢复等关键功能。社区反馈集中在 Windows 内置浏览器插件初始化失败（#39136）、MCP 服务器进程泄漏（#30408）等稳定性问题上，同时有大量 PR 围绕安全加固（Guardian V2、认证、环境隔离）合并。过去 24 小时内共更新 50 条 Issue 和 50 条 PR，讨论活跃。

## 版本发布

- **rust-v0.148.0**（正式版）
  - 新增 `/export` 命令，可将完整 TUI 对话导出为 Markdown（支持剪贴板或新文件）。
  - 新增 `codex exec fork` 实现会话分支，支持从 TUI 恢复选择器中归档/恢复会话。
  - 允许在 TUI 初始化期间起草提示（Draft prompts）。
- **rust-v0.148.0-alpha.23** / **rust-v0.148.0-alpha.22**：仅版本号标记，无详细变更日志。

## 社区热点 Issues（10 条）

1. **#39136** – Windows 内置浏览器插件初始化失败：`Trusted RPC dependency` 不在可信代码路径内。
   - 影响：Windows 用户无法使用应用内浏览器功能。
   - 社区反应：63 条评论，20 👍，开发团队已标记为“Open”。
   [链接](https://github.com/openai/codex/issues/39136)

2. **#32041** – VS Code 扩展 26.5707.* 在 Linux 上打开空白 webview，旧版 26.5623 正常但缺少 5.6-Sol 模型。
   - 影响：Linux 用户无法正常使用 IDE 扩展。
   - 社区反应：56 条评论，3 👍，持续关注。
   [链接](https://github.com/openai/codex/issues/32041)

3. **#30408** – MCP 服务器进程泄漏：每个线程产生完整进程集，但从不清理，累积 RSS 超 9 GB。
   - 影响：多会话场景下内存暴涨，影响性能。
   - 社区反应：29 条评论，8 👍，开发团队已确认。
   [链接](https://github.com/openai/codex/issues/30408)

4. **#20500** – 功能请求：支持同一个应用/连接器下多个独立账户登录。
   - 影响：需要同时管理多个账户（如个人/工作）的用户。
   - 社区反应：28 条评论，107 👍，需求强烈。
   [链接](https://github.com/openai/codex/issues/20500)

5. **#25928** – VS Code/Cursor 扩展中提交的 Prompt 随机消失，未进入队列。
   - 影响：Windows 上 Cursor 扩展用户输入丢失。
   - 社区反应：27 条评论，18 👍。
   [链接](https://github.com/openai/codex/issues/25928)

6. **#23930** – 子代理卡片在关闭后仍卡在 UI 中，但 readback 报告无活跃代理。
   - 影响：App 界面交互混乱，用户无法确认子代理状态。
   - 社区反应：26 条评论，5 👍。
   [链接](https://github.com/openai/codex/issues/23930)

7. **#35119** – Windows + WSL 中，26.721.3404 将有效 WSL 仓库标记为“非 Git”并报“Git 不可用”。
   - 影响：WSL 用户无法正常使用 Git 集成。
   - 社区反应：23 条评论，17 👍。
   [链接](https://github.com/openai/codex/issues/35119)

8. **#39173** – 浏览器控制失败（Chrome 或应用内浏览器），错误同上（Trusted RPC）。
   - 影响：Windows 用户浏览器控制功能完全失效。
   - 社区反应：21 条评论，10 👍，已关闭（可能重复）。
   [链接](https://github.com/openai/codex/issues/39173)

9. **#28276** – 归档会话失败，且出现“没有任何存在理由”的线程。
   - 影响：会话管理不可靠，影响用户体验。
   - 社区反应：19 条评论，3 👍。
   [链接](https://github.com/openai/codex/issues/28276)

10. **#38754** – Windows 上本地 stdio MCP 服务器在单个任务中反复生成且不回收。
    - 影响：MCP 相关任务性能下降，资源浪费。
    - 社区反应：7 条评论，2 👍，新进 Issue。
    [链接](https://github.com/openai/codex/issues/38754)

## 重要 PR 进展（10 条）

1. **#39322** – 强制对 header 认证实施 workspace 限制。
   - 内容：验证外部 header 凭证是否符合 ChatGPT Workspace 限制，拒绝不匹配的 account ID。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39322)

2. **#39320** – 扩展 OAuth metadata 重定向测试覆盖。
   - 内容：覆盖同源跳转、跨源拒绝、重定向循环超时等场景。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39320)

3. **#39319** – 新增异步用户消息工具 `send_user_message_async`。
   - 内容：允许根代理在不结束当前轮次的情况下异步发送用户消息。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39319)

4. **#39316** – 支持 Edu Plus 与 Edu Pro 账户计划。
   - 内容：在认证、速率限制、账户 schema 中识别 `edu_plus` 和 `edu_pro` 计划。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39316)

5. **#39315** – 以可缓存块的形式驱逐 Guardian 转录条目。
   - 内容：采用缓冲池策略，保留较新的转录条目，优化缓存稳定性。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39315)

6. **#39314** – 使用捕获的会话环境运行钩子。
   - 内容：在创建钩子注册表时捕获进程环境，后续配置重载时复用快照，避免环境泄露。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39314)

7. **#39312** – 为代理消息添加异步投递元数据。
   - 内容：在消息事件中增加 `delivery` 字段，标记是否为异步消息。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39312)

8. **#39311** – 将统一的 exec 审批绑定到 shell 可执行文件。
   - 内容：执行审批时检查不熟悉的可执行文件，防止信任内部命令而忽略真正的外壳。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39311)

9. **#39309** – 将执行器技能调用归因到插件。
   - 内容：MCP 发现时携带插件身份，技能目录条目标注插件 ID 和用户作用域。
   - 状态：已合并。
   [链接](https://github.com/openai/codex/pull/39309)

10. **#39307** – Guardian V2 风险评分错误时“失败关闭”。
    - 内容：配置、序列化、查找等出错时直接视为高风险，而不再沿用上一次低风险结果。
    - 状态：已合并。
    [链接](https://github.com/openai/codex/pull/39307)

## 功能需求归类

从近期 Issue 中可归纳出以下用户反复提及的功能方向（按反馈热度排序）：

- **IDE 集成稳定性**：VS Code 扩展在 Linux 上异常（#32041）、Cursor 扩展 prompt 丢失（#25928）等。
- **Windows 平台兼容性**：浏览器插件初始化失败（#39136）、WSL Git 识别（#35119）、MCP 进程泄漏（#38754）等。
- **MCP 性能与资源管理**：服务器进程泄漏（#30408）、重复生成（#38754）、OAuth 令牌刷新失败（#39054）。
- **多账户支持**：#20500 获得 107 👍，需求强烈。
- **会话管理改进**：归档失败（#28276）、子代理状态卡住（#23930）、Voice Chat Fork 丢失上下文（#39269）。
- **导出与格式化**：TUI 导出 Markdown 已实现（#2880 关闭），但仍有用户要求更多导出选项（如 JSON、原生集成）。
- **上下文与模型**：长上下文分配不一致（#39144）、自定义模型 + MCP 工具不兼容（#31354）。

## 开发者关注点

- **Windows 生态问题集中**：今日多个高热度 Issue 均与 Windows 相关，包括浏览器 RPC 依赖、WSL 集成、MCP 进程管理、Chrome 插件修复无效等，表明 Windows 平台的稳定性仍是当前主要痛点。
- **MCP 资源泄漏持续**：#30408 和 #38754 均指向 MCP 服务器进程未被正确清理，导致内存膨胀，开发者期待尽快修复。
- **安全与认证加固**：今日合并的多项 PR（#39322、#39320、#39307）聚焦 OAuth 元数据验证、Guardian V2 错误处理、环境变量隔离，表明团队正在加强安全基座。
- **教育计划支持**：新增 Edu Plus/Pro 账户计划（#39316），反映 Codex 在高校场景的拓展。
- **异步消息基础设施**：新增 `send_user_message_async` 及投递元数据（#39319、#39312），为未来更复杂的多轮交互铺路。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 | 2026-08-19

## 今日更新概览

过去 24 小时内，Kimi Code 发布了 0.37.0、0.37.1、0.37.2 三个版本，涵盖多技能激活、粘贴图片修复、子代理详情面板优化等更新。社区活跃度较高，共有 20 个 Issue 更新（其中 2 个被关闭）和 50 个 PR 更新（其中 6 个被合并）。用户反馈集中在 TUI 交互体验、配额显示、VS Code 扩展兼容性以及自定义 provider 的问题上。

## 版本发布

### @moonshot-ai/kimi-code@0.37.2
- **补丁内容**：Web 界面中，子代理详情面板现在完整展示工作过程（working process）。
- 贡献者：@wbxl2000 ([#3061](https://github.com/MoonshotAI/kimi-code/pull/3061))

### @moonshot-ai/kimi-code@0.37.1
- **补丁内容**：修复首次发送粘贴图片时图片无法到达模型的问题。
- 贡献者：@7Sageer ([#3053](https://github.com/MoonshotAI/kimi-code/pull/3053))

### @moonshot-ai/kimi-code@0.37.0
- **次要更新**：支持在单个提示中激活多个技能。在空白后输入 `/` 即可触发。
- 贡献者：@chengluyu ([#2935](https://github.com/MoonshotAI/kimi-code/pull/2935))

## 社区热点 Issues

以下挑选了 10 个在过去 24 小时内更新且值得关注的 Issue：

1. **#3014 CLI 返回 403 使用限制，但仪表盘显示 0%**
   - 作者：@rschafer777 | 评论：6 | 👍：4
   - 摘要：用户报告 CLI 中 `Login Device` 调用消耗了每周配额，导致实际 API 调用被拒，但仪表盘显示未使用。影响使用托管订阅的用户。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/3014)

2. **#872 在状态栏显示 5 小时和每周配额剩余**
   - 作者：@MAB2908 | 评论：4 | 👍：4
   - 摘要：目前底栏仅显示上下文用量，建议将 `/status` 命令中的配额信息（5 小时滑动窗口、每周配额）也集成到状态行，方便实时监控。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/872)

3. **#2195 禁用备选屏幕以支持终端滚动（SSH 场景）**
   - 作者：@rudidev08 | 评论：3 | 👍：0
   - 摘要：TUI 使用备选屏幕缓冲区，导致 SSH 连接时无法回滚查看历史。建议提供类似 Claude Code 的选项。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/2195)

4. **#2721 全屏 TUI 模式并支持鼠标选中/复制文本**
   - 作者：@zsj555 | 评论：2 | 👍：0
   - 摘要：建议引入类似 Claude Code 的全屏 TUI 模式（可切换），并支持鼠标选择文本后复制，提升终端交互体验。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/2721)

5. **#3059 VS Code 扩展 0.7.0：TodoList 卡片展开后不显示内容，上下文使用率冻结**
   - 作者：@passportermsn | 评论：0 | 👍：0
   - 摘要：升级到 0.7.0（agent-core-v2 默认）后，展开“Update Todo list”卡片只显示“Todo list updated”，无具体条目；上下文使用率百分比不更新。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/3059)

6. **#3058 `/undo` 后 TodoList 不回滚**
   - 作者：@dhnihaoya | 评论：0 | 👍：0
   - 摘要：执行 `/undo` 撤销回合后，TodoList 中写入的待办状态仍保留，未回滚到撤销前的状态。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/3058)

7. **#3051 请求将 `omp` 加入 Kimi Code 认可的编码代理白名单**
   - 作者：@dlivxpr | 评论：0 | 👍：0
   - 摘要：开源终端编码代理 `omp`（oh-my-pi）希望被列入 `api.kimi.com/coding` 的白名单，以便用户使用 Kimi Coding 会员身份而不必模拟其他客户端。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/3051)

8. **#2979 粘贴视频作为 `file://` URL 发送，导致请求永久失败并污染会话**
   - 作者：@alex-ca1123 | 评论：0 | 👍：0
   - 摘要：粘贴视频时，模型收到未解析的 `file://` URL，后续请求因该错误记录而永远失败，会话被污染。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/2979)

9. **#3036 VS Code 侧边栏的“New Conversation”会清空所有 Kimi 对话**
   - 作者：@Win-Hao | 评论：0 | 👍：0
   - 摘要：点击侧边栏的“New Conversation”按钮，不仅创建新对话，还会清空包括编辑器标签页中正在进行的对话在内的所有对话。
   - [链接](https://github.com/MoonshotAI/kimi-code/issues/3036)

10. **#3017 错误：OpenAIMessage 缺少 `content` 字段**
    - 作者：@bamecho | 评论：0 | 👍：0
    - 摘要：使用自定义 provider（兼容 OpenAI Chat Completions）时，助手消息包含 `tool_calls` 但缺少 `content` 字段，导致请求被拒。
    - [链接](https://github.com/MoonshotAI/kimi-code/issues/3017)

## 重要 PR 进展

以下挑选了 10 个在过去 24 小时内更新且值得关注的 PR：

1. **#3038 feat(agent-core-v2): 添加实验性 Flow 功能**
   - 作者：@RealKai42
   - 内容：引入 Flow 机制，将多阶段任务中的执行与验收分离，支持用户声明式定义阶段并通过记录审计。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/3038)

2. **#2943 feat(hooks): 允许 hooks 回答工具审批**
   - 作者：@rullerzhou-afk
   - 内容：扩展 `PermissionRequest` hook，使其不仅能观察工具审批，还能直接回答（允许/拒绝），实现外部审批流程。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/2943)

3. **#3060 feat(agent-core-v2): 添加 WaitFor 工具，用于等待后台任务**
   - 作者：@chengluyu
   - 内容：在目标模式下，模型可以派发后台任务（子代理或后台 bash），通过 WaitFor 工具等待任务完成，避免因轮询导致的无意义循环。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/3060)

4. **#3053 fix(agent-core-v2): 修复旧视频解析器遮蔽媒体解析器的问题**
   - 作者：@7Sageer
   - 内容：修复首次发送粘贴图片失败的问题，原因是 v2 引擎中旧视频解析器优先级高于通用媒体解析器。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/3053)

5. **#3056 fix(kimi-code): 在助手工具调用消息中包含 `content` 字段**
   - 作者：@PaiduiXiaowangzi
   - 内容：解决 #3017，当助手消息只有 `tool_calls` 但没有文本时，仍发送 `content: null` 而非省略字段，兼容 OpenAI 网关。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/3056)

6. **#3054 feat(tui): 折叠长 `!` shell 命令输出**
   - 作者：@Grapedge
   - 内容：在 TUI 中，对于 `!` 命令产生的长输出（如构建日志），默认折叠，避免刷屏导致对话难以阅读。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/3054)

7. **#2862 feat(kimi-code): 支持双 OAuth 登录端点**
   - 作者：@liruifengv
   - 内容：将 OAuth 登录端点从硬编码改为可配置，以支持 `.com` 和 `.cn` 两个部署，满足不同区域用户。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/2862)

8. **#3057 feat(agent-core-v2): 拒绝重复的 scoped 服务注册**
   - 作者：@sailist
   - 内容：当同一个 scope 中存在重复的依赖注册时，现在会抛出错误而非静默覆盖，避免隐式 bug。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/3057)

9. **#2995 feat(tui): 添加层级化技能组选择器，支持标签页导航**
   - 作者：@creatiVision
   - 内容：优化 `/skill` 命令，将技能按目录树分组，支持标签页切换分类，提升多技能管理体验。
   - [链接](https://github.com/MoonshotAI/kimi-code/pull/2995)

10. **#3050 feat(agent-core-v2): 通过实验性标志启用 Tower 功能**
    - 作者：@bj456736
    - 内容：注册 `KIMI_CODE_EXPERIMENTAL_TOWER` 环境变量，用于控制 Tower 功能的启用，同时添加注册接线守卫。
    - [链接](https://github.com/MoonshotAI/kimi-code/pull/3050)

## 功能需求归类

从近期 Issue 的用户反馈中，可以归纳出以下反复出现的功能方向：

- **TUI 交互改进**：输入框固定底部（#875、#891、#2959）、全屏模式与鼠标选择（#2721）、备选屏幕可禁用（#2195）、mosh 连接下的滚动支持（#3035）。
- **配额可视化**：在状态栏直接显示 5 小时滑动窗口和每周配额剩余（#872、#2435），避免用户误判使用量。
- **VS Code 扩展稳定性**：TodoList 卡片展开后内容不显示（#3059）、上下文使用率更新冻结、New Conversation 误清空对话（#3036）、/undo 后 TodoList 不回滚（#3058）。
- **自定义 provider 兼容性**：助手消息缺少 `content` 字段导致 400 错误（#3017），以及多 provider 切换时子代理 provider 不更新（#3041）。
- **数据迁移与持久化**：数据库迁移后对话列表可见但内容为空（#3045），提示前端缓存/索引未同步。
- **第三方代理白名单**：请求将 `omp` 等开源代理加入 Kimi Code 的编码连接白名单（#3051），以便使用会员身份。

## 开发者关注点

综合社区反馈与 PR 讨论，当前开发者主要关注以下痛点：

1. **配额限制与显示不透明**：CLI 返回 403 但仪表盘显示 0%（#3014），用户无法准确判断实际配额消耗，导致工作流中断。开发者希望有更直观的实时配额可视化。
2. **粘贴媒体文件（图片/视频）兼容性**：图片首次发送失败（#3053）、视频被错误解析为 `file://` 并污染会话（#2979），严重影响多模态输入体验。
3. **TUI 交互体验不佳**：输入框滚动时离开底部、长输出刷屏、SSH 下无法回滚等，成为高频抱怨点，用户期望类似 Claude Code 的成熟 TUI 设计。
4. **VS Code 扩展回归问题**：agent-core-v2 默认启用后，TodoList 和上下文百分比冻结等 bug 影响了日常使用，开发者希望团队尽快修复并增强回归测试。
5. **自定义 provider 的兼容性修复**：OpenAI 兼容网关对 `content` 字段的严格校验导致助手消息被拒，社区已提交修复 PR（#3056），但需确认是否覆盖所有场景。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-08-19

## 今日更新概览
过去 24 小时内，OpenCode 社区共更新 50 条 Issue 和 50 条 Pull Request。计费配额问题（Zen 余额未生效、Go 配额异常消耗）成为当前最集中的用户反馈热点，同时新增了 Qwen3.8-27B 模型支持请求、消息 ID 回绕等严重 bug 报告。PR 方面，修复了图片附件解码失败导致会话卡死、Git worktree 分支显示错误等问题。

---

## 社区热点 Issues（10 条）

### 1. 计费/配额异常：Zen 余额未解除免费限制
- **#33495** [OPEN] Zen 用户仍受 200 次免费请求限制，即使有余额仍收到 429 错误。多位用户报告类似问题。
- 链接：https://github.com/anomalyco/opencode/issues/33495

### 2. Go 配额在 20 分钟内耗尽
- **#42935** [OPEN] 用户在 DeepSeek V4 Flash 模型下，缓存命中率突然降为 0，导致 Go 配额在 20 分钟内从 11% 耗尽至 100%。
- 链接：https://github.com/anomalyco/opencode/issues/42935

### 3. 消息 ID 回绕导致会话排序错乱
- **#43303** [OPEN] 消息 ID 的 48 位时间戳在 2026-08-14 回绕，新消息排序到旧消息之前，会话静默，回滚后历史丢失。
- 链接：https://github.com/anomalyco/opencode/issues/43303

### 4. 请求无响应：OpenCode 停止处理后续请求
- **#32149** [OPEN] 提交提示后应用显示“thinking”状态，但最终无响应，无法继续使用。
- 链接：https://github.com/anomalyco/opencode/issues/32149

### 5. 请求支持 Qwen3.8-27B 模型
- **#42729** [OPEN] 用户请求将 Qwen3.8-27B 开源模型加入 OpenCode Go 订阅目录。
- 链接：https://github.com/anomalyco/opencode/issues/42729

### 6. 性能问题：模式切换或上下文压缩时缓存失效
- **#37489** [OPEN] 使用本地 LLM 时，模式切换或 compaction 导致上下文缓存反复重建，Token 消耗剧增。
- 链接：https://github.com/anomalyco/opencode/issues/37489

### 7. TUI 滚动行为：新消息流入时自动滚动无法关闭
- **#7648** [CLOSED] 用户希望在 Agent 工作流中阅读已有消息，但新消息流入时屏幕自动滚动，影响阅读体验。
- 链接：https://github.com/anomalyco/opencode/issues/7648

### 8. 会话永久卡死，重启后无法恢复
- **#43277** [OPEN] 多个会话在正常使用中突然卡死，重启系统和应用后仍无法恢复，影响持续工作。
- 链接：https://github.com/anomalyco/opencode/issues/43277

### 9. 工具调用成功后 OpenCode 无限等待
- **#43315** [OPEN] 工具调用成功（PowerShell 端已完成），但 OpenCode 仍等待，不继续后续步骤。
- 链接：https://github.com/anomalyco/opencode/issues/43315

### 10. 项目目录移动后路径未更新
- **#34737** [OPEN] 项目从 C 盘移动到 D 盘后，OpenCode 仍引用旧路径，导致无法正确打开项目。
- 链接：https://github.com/anomalyco/opencode/issues/34737

---

## 重要 PR 进展（10 条）

### 1. 修复图片附件解码失败导致会话卡死
- **#43314** [OPEN] 用户消息中包含无法解码的图片格式（AVIF、HEIC 等）时，现在会降级并继续，而非整个提示失败。
- 链接：https://github.com/anomalyco/opencode/pull/43314

### 2. 修复 Git worktree 分支显示
- **#42978** [OPEN] 手动创建的 Git worktree 在 Desktop 中打开时，分支显示错误，现修复为正确显示当前工作分支。
- 链接：https://github.com/anomalyco/opencode/pull/42978

### 3. 移除 Qwen 采样默认值
- **#43310** [CLOSED] 不再强制为 Qwen 模型设置 `temperature: 0.55` 和 `top_p: 1`，改用服务端默认或插件配置。
- 链接：https://github.com/anomalyco/opencode/pull/43310

### 4. 使生成的会话标题长度可配置
- **#43309** [OPEN] 新增 `title_max_words` 配置项，允许用户控制自动生成的标题最大字数。
- 链接：https://github.com/anomalyco/opencode/pull/43309

### 5. 限制拖拽状态仅作用于文件
- **#43308** [OPEN] 修复普通文本或链接拖拽（如子代理会话卡片）被错误识别为 prompt 附件的问题，文件拖拽正常。
- 链接：https://github.com/anomalyco/opencode/pull/43308

### 6. 修复子代理工具缺少有效 agent ID 列表
- **#43282** [OPEN] `subagent` 工具描述中未列出可用的 agent 类型，现在提供有效 ID 列表，降低模型调用错误。
- 链接：https://github.com/anomalyco/opencode/pull/43282

### 7. 修复 Windows 下后台进程导致 shell 命令挂起
- **#29831** [OPEN] 当命令启动后台进程时，子进程保持输出流导致 agent 无限等待，现改为在命令退出时标记完成。
- 链接：https://github.com/anomalyco/opencode/pull/29831

### 8. 添加 SuperCompress MCP 服务器文档示例
- **#43306** [OPEN] 在 MCP 服务器文档中新增 SuperCompress 示例，提供一键设置和手动配置指南。
- 链接：https://github.com/anomalyco/opencode/pull/43306

### 9. 将运行时新增的 MCP 工具桥接到核心工具注册表
- **#37684** [CLOSED] 修复动态添加的 MCP 工具无法在用户会话中正常调用的问题，确保主线功能可用。
- 链接：https://github.com/anomalyco/opencode/pull/37684

### 10. 文档：添加 SCX.ai 提供商
- **#42520** [OPEN] 在 provider 文档中新增 SCX.ai 支持说明，已有模型注册。
- 链接：https://github.com/anomalyco/opencode/pull/42520

---

## 功能需求归类

- **新模型支持**：Qwen3.8-27B（#42729）、CommandCode（#26338，已关闭）等用户持续请求集成更多第三方模型。
- **计费/配额透明化**：Zen 余额未生效（#33495）、Go 配额消耗异常（#43023、#42935）、TUI 与 Web 显示价格不一致（#39891）等，反映用户对计费系统准确性的强烈关注。
- **性能优化**：上下文缓存失效（#37489）、事件表存储全量快照导致 db 膨胀（#41175）、消息更新时序列化 diff 导致写入量平方增长（#42748）。
- **UI/UX 改进**：TUI 自动滚动开关（#7648）、设置页面滚动条缺失（#43299）、Web UI V2 控件重叠（#43295）、拖拽状态误触发（#43308）。
- **会话稳定性**：会话卡死无法恢复（#43277）、工具调用后无限等待（#43315）、消息 ID 回绕（#43303）等严重 bug 影响日常使用。

---

## 开发者关注点

- **计费问题成高频痛点**：Zen 和 Go 用户的配额判定逻辑异常，多个独立 Issue 报告类似现象，社区期待官方给出明确解释和修复。
- **本地模型兼容性**：使用本地推理引擎（vLLM、Ollama）时，上下文缓存反复失效，导致 Token 消耗远超预期，亟需 compaction 策略优化。
- **会话与数据持久化**：消息 ID 回绕、项目路径未更新、会话永久卡死等 bug 破坏工作连续性，用户对数据安全性和恢复能力提出更高要求。
- **模型默认参数硬编码**：Qwen 采样参数被强制覆盖（#42775），社区推动移除硬编码默认值，改为由服务端或用户配置决定。

</details>