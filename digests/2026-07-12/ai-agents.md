# OpenClaw 生态日报 2026-07-12

> Issues: 461 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-07-12 00:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报（2026-07-12）

## 1. 今日活动概览
- 仓库在过去 24 小时内有 **461 条 Issue 更新**（新开/活跃 225 条，关闭 236 条）和 **500 条 PR 更新**（待合并 233 条，已合并/关闭 267 条）。
- 发布 **1 个新版本**：`v2026.7.1-beta.5`，重点引入对话式引导流程（Conversational onboarding）等改进。
- 大量会话状态、消息丢失、网关稳定性相关的 Bug 报告和修复 PR 仍占据讨论主流，同时安全、多平台支持等特性需求保持活跃。

## 2. 版本发布
**OpenClaw v2026.7.1-beta.5** (2026.7.1)
- **对话式引导 (Conversational onboarding)**：Crestodian 现在在 CLI、Web 安装流程和 macOS 应用中运行真实的 agent-loop 设置，提供 AI 引导的提供商配置、基于模型判定且绑定到具体操作的审批、掩码凭据提示，并在无模型可用时提供确定性回退。
  *（完整 Highlights 文本较长，以上为截取摘要）*
  链接：见 GitHub Releases 页面。

## 3. 项目进展（今日合并/关闭的重要 PR）
以下为样本中已关闭的 PR，推测可能在今日或近日被合并/关闭：
- **[#101912] improve(android): show provider-configured model details**
  让 Android 设置界面显示提供商配置的具体模型 ID，修正了之前只显示可提供性而看不到模型列表的问题。
- **[#103704] fix(mcp): bound short-lived OAuth requests**
  为短生命周期的 MCP OAuth HTTP 请求增加了超时限制，防止请求无限期挂起。
- **[#90625] docs: add supported iOS install path when public beta is full**
  文档补充了当 TestFlight 公测版满员时，从源码构建 iOS 应用的官方支持路径。
- **[#104795] fix(sessions): read zstd transcript archives through a materialized cache**
  修复了 zstd 压缩的会话归档文件无法读取的问题，使压缩归档能够正常被索引和解析。
- **[#101912] 已关闭 (见上方)**；其他少量关闭 PR 可能因 Stale 等原因被关。

## 4. 社区热点（评论最多的 Issues/PRs）
今日讨论热度最高的 Issues（按评论数排序）：
- **[#75] Linux/Windows Clawdbot Apps** (110 💬, 81 👍)
  用户对缺少 Linux 和 Windows 原生桌面应用表达强烈诉求，期望获得与 macOS 类似的功能集。
- **[#88838] Track core session/transcript SQLite migration** (37 💬，已关闭)
  核心会话/转录存储迁移至 SQLite 的工程跟踪 Issue，已通过实现 PR 完成。
- **[#99241] Tool outputs sometimes render as image attachments** (21 💬, 2 👍)
  ANSI 重负载工具流中，工具结果被错误渲染为 `(see attached image)` 占位符，导致 Agent 无法读取实际输出。
- **[#86538] Session write-lock timeouts block subagent delivery lanes** (19 💬，已关闭)
  JSONL 写入锁超时阻塞了整个主代理、cron 和子代理的交付通道。
- **[#7707] Feature Request: Memory Trust Tagging by Source** (17 💬)
  提议根据来源（用户指令、网页抓取、第三方技能）对记忆进行信任标记，防止记忆注入攻击。
- **[#102175] embedded prompt cache breaks across room-event, policy, and Responses boundaries** (16 💬)
  长期嵌入式会话跨多种边界时丢失提示缓存复用，导致模型可见工具数量不一致。

高热度 PR：
- **[#104717] feat: unify external sessions with native catalog pagination** (多标签，评论较多)
  统一 Claude Code / Codex 等外部会话到原生会话目录，并修复分页上限问题。
- **[#104693] refactor(config): retire legacy flat streaming keys to doctor-owned migration** (XL PR)
  废弃旧版扁平流式控制配置，改为统一由 `openclaw doctor --fix` 迁移。
- **[#104757] feat(ui): editable file panel with CodeMirror and hash-CAS writes**
  为 Control UI 文件面板增加编辑功能，支持通过 CodeMirror 编辑器直接修改文件。

## 5. Bug 与稳定性
今日可见的高严重度 Bug / 回归（按优先级排列）：
- **P0**:
  - **[#104721] All tool results return "(see attached image)" literal string** (open, 2026-07-11 创建)
    工具输出完全损坏，文件读取直接返回字符串占位符而非真实内容，被标记为回归。尚无直接关联的修复 PR，但相关报告 [#99241] 仍处于待修复状态。
- **P1**:
  - **[#99241] Tool outputs rendering as image attachments**（open）
    ANSI 工具流中输出变为不可读的图片占位，可能触发 Agent 误判。
  - **[#84903] A single stalled agent session blocks the entire Gateway event loop**（已关闭）
    已通过修复解决隔离失败问题，但仍值得持续关注。
  - **[#86538] Session write-lock timeouts block subagent delivery**（已关闭）
    已修复。
  - **[#85251] Codex app-server goes silent after notification:turn/started**（open）
    导致嵌入式运行长时间停止，直到卡死会话恢复机制触发强制中止。尚无修复 PR。
  - **[#102175] Embedded prompt cache breaks across boundaries**（open）
    关联 PR **[#102189]** 已提交，针对嵌入式提示缓存的稳定性修复。
  - **[#55334] sessions.json unbounded growth causes gateway OOM**（已关闭）
    会话快照膨胀问题已通过 SQLite 迁移间接解决。
  - **[#92057] Gateway becomes slow under multi-session load**（已关闭）
    已关闭（Stale）。
- **P2 及以下**的稳定性问题：
  - **[#87109] Gateway heap grows to 1073MB+ at idle on macOS**（open）
    空闲内存持续增长，cron 任务静默失败。
  - **[#54155] Gateway memory leak: 389MB → 14.7GB**（已关闭）
    巨大内存泄漏已关闭。
  - **[#76042] Clean install of new versions not possible**（已关闭）
    安装问题已关闭。

值得注意的修复 PR：
- **[#104690] fix(msteams): reset sessions on app removal lifecycle** 解决 Teams 移除应用后会话复用问题。
- **[#104580] fix(discord): add timeout to guarded gateway metadata fetches** 避免 Discord 元数据拉取挂起。
- **[#104121] fix(discord): add timeouts to PluralKit lookup requests** 同上类修复。
- **[#104663] fix(feishu): bound stalled docx image URL reads** 防止飞书文档图片读取卡死。

## 6. 功能请求归类
用户通过 Issues 大量提出功能增强，按领域分：
- **多平台与分发**：
  - [#75] 要求 Linux/Windows 桌面应用。
  - [#42026] 提议分布式 Agent 运行时（控制平面与计算分离）。
- **安全与隐私**：
  - [#10659] 掩码密钥，防止 Agent 获取原始 API 密钥。
  - [#7722] 文件系统沙盒配置（tools.fileAccess）。
  - [#6615] exec-approvals 支持拒绝列表。
  - [#7707] 记忆信任标记。
- **会话与数据管理**：
  - [#45003] 恢复由每日重置归档的会话历史。
  - [#11665] Webhook hook 会话应复用已有会话实现多轮对话。
  - [#10142] 增加 session:end 内部钩子事件。
- **集成与通道增强**：
  - [#7476] WhatsApp 贴纸发送支持。
  - [#12602] Slack Block Kit 支持。
  - [#9865] 后台任务使用 Batch API 以降低成本。
  - [#9986] 上下文溢出时自动触发模型回退。
  - [#8673] OAuth 令牌刷新增加重试逻辑。
- **界面与体验**：
  - [#9637] 可访问性选项：禁用 TUI 中的 Emoji 和 Unicode 符号。
  - [#8355] 语音通话流式 TTS 管道（句子级合成）。
  - [#9409] 改进上下文溢出错误消息，提供更多诊断信息。
  - [#8299] 增加配置项以抑制子代理通告。
  - [#7403] 演示和内容创作的私有模式。
- **功能 PR 亮点**：
  - [#104717] 统一外部会话到原生目录并分页。
  - [#104757] 可编辑文件面板，支持 CodeMirror 编辑与哈希内容寻址写入。
  - [#69039] MCP 应用支持（提供 MCP 服务器 UI 元数据）。
  - [#104251] 重新设计 Cron 页面为侧边栏主-详视图。
  - [#104815] sessions_send 注册显式状态变更观察者。

## 7. 用户反馈摘要
- **对稳定性不满**：多个用户报告工具输出丢失（`(see attached image)` 字串）、网关内存泄漏、单个会话卡死拖垮整个服务，这些激怒了重度使用者。
- **缺失桌面平台**：Issue [#75] 已是长期诉求，81 个 👍 表明 Linux / Windows 应用是社区最渴望的特性之一。
- **安全顾虑**：用户多次要求掩码密钥、沙盒文件系统和命令拒绝列表，说明在生产环境中对密钥泄露和注入攻击的担忧强烈。
- **文档与安装问题**：新版本无法顺利安装（[#76042]）、迁移后遗留警告反复出现（[#90213]）让用户体验不佳，官方通过文档更新和 doctor 工具修复在逐步缓解。
- **会话管理混乱**：定时重置导致历史丢失（[#45003]）、Webhook 无法多轮对话（[#11665]），用户期望更连贯的会话体验。
- **功能缺失**：WhatsApp 贴纸、Slack Block Kit、语音流式 TTS 等细化集成需求反映出用户在实际业务场景中的具体阻碍。

## 8. 待处理积压
以下为长期未关闭、讨论较多且可能未被及时关注的重要 Issue/PR：
- **[#75] Linux/Windows 应用**（超过 7 个月，110 条评论，标记 P2 / help wanted，无明确固定 PR）。
- **[#7707] 记忆信任标记**（5 个月，P2，17 评论，安全相关，仍在讨论产品决策）。
- **[#7722] 文件系统沙盒**（5 个月，P2，安全相关，需要产品和安全评审）。
- **[#10659] 掩码密钥**（5 个月，P1，14 评论，安全，等待维护者决策）。
- **[#42026] 分布式运行时**（4 个月，P2，8 评论，标记为 no-new-fix-pr，处于早期 RFC 阶段）。
- **[#69039] MCP 应用支持 PR**（近 3 个月，size XL，多次修改，仍在等待维护者审查和概念证明）。
- **[#38844] 浏览器文件上载流程不稳定**（4 个月，标记为 no-stale，有队列修复标记，但未关闭）。

---

*注：以上信息基于提供的样本数据（50 条最高评论 Issue 和 30 条最高评论 PR），实际 24 小时更新数量更大（Issues 461 条，PR 500 条），完整列表请查阅对应链接。*

---

## 横向生态对比

# 开源 AI 助手项目横向对比日报

**日期**：2026-07-12
**分析对象**：OpenClaw、有道 LobsterAI
**数据基础**：各项目 2026-07-12 社区动态摘要

---

## 1. 今日横向概览

OpenClaw 今日更新量极大（461 条 Issue、500 条 PR），为近期活跃度的峰值区间，并发布了引入对话式引导流程的 `v2026.7.1-beta.5`。社区讨论高度集中在稳定性缺陷（工具输出损坏、网关卡死）和桌面平台缺失，安全与多通道集成需求持续累积。有道 LobsterAI 今日仅 3 条 Issue 和 1 条 PR 的 stale 标记更新，无新讨论、无合并，其 7 月 10 日发布的 `2026.7.10` 版本新增子代理协作，但现有用户反馈（交互效率、通知缺陷）超 3 个月未获回应，项目处于极低活动状态。两者在规模、节奏和社区响应上差异悬殊，无明显跨项目联动信号。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 新版本/发布 | 事实性备注 |
|------|------------|---------|-------------|------------|
| **OpenClaw** | 461 条（新开 225 / 关闭 236） | 500 条（待合并 233 / 已关闭 267） | `v2026.7.1-beta.5`（今日） | P0 渲染 bug、桌面版诉求（110 评论/81 👍）、多项安全与集成需求 |
| **LobsterAI** | 3 条（均 open/stale） | 1 条（open/stale） | `2026.7.10`（7 月 10 日） | 所有动态项为 stale 标记；通知渠道空列表 bug 未修复；无维护者回应 |

---

## 3. OpenClaw 与同类对照

**活动量级**：OpenClaw 单日 Issue/PR 更新数是 LobsterAI 的 150 倍以上，合并/关闭操作频繁，显示出高节奏的工程迭代；LobsterAI 今日无任何实质性代码流转。

**技术重点**：OpenClaw 当前重心为修复网关稳定性、会话同步与工具调用渲染回归，同步推进桌面应用、安全加固和多平台集成；LobsterAI 的可见缺陷停留在交互便利性与基础功能可用性（通知渠道空列表），无并行工程迹象。

**社区讨论面**：OpenClaw 涉及 7 大功能领域（桌面端、安全、会话、集成、UI 等），最高评论议题达 110 条；LobsterAI 所有议题均为单条评论（stale 提醒），议题范围仅覆盖俩个 UI 增强和一个 bug。

---

## 4. 共同出现的技术方向

今日两个项目均有涉及**工具调用的交互体验**，但程度和性质不同：

- **OpenClaw**：出现严重回归（P0）——工具结果被错误渲染为 `(see attached image)` 字符串，导致 Agent 无法读取真实输出。社区另有 ANSI 工具流中类似问题的讨论（#99241）。
- **LobsterAI**：用户请求增加“批量展开/折叠工具调用块”按钮，以减少逐个操作的繁琐度（#1326，有 PR #1327 但未合并）。

两者共同指向：在多工具调用场景下，用户与 Agent 对工具输出的可读性、可操作性均有更高要求，但 OpenClaw 面临的是数据正确性损坏，LobsterAI 则是 UI 效率缺陷。除此以外，今日无其他同时出现的清晰技术方向。

---

## 5. 差异化定位分析

**OpenClaw**：定位为**个人 AI 助手网关框架**，核心能力包括多渠道接入（Discord、Slack、WhatsApp 等）、会话持久化与代理路由、工具调用、嵌入式代码执行等。面向开发者与高级用户，强调可扩展性、自托管与多平台覆盖，当前架构挑战集中在会话一致性和大规模网关吞吐。

**LobsterAI**：定位为**协作式 AI 代理工具**，近期版本明确引入“委托子代理协作”和“可最小化权限提示”，暗示其聚焦于多人协作环境中的代理分工与权限控制。社区反馈寥寥，且仅有的功能请求（工具调用展开、错误状态徽标）偏向轻量 UI 优化，未触及架构层面的深度需求。

**差异点**：OpenClaw 是通道型、网关型的重型基础设施；LobsterAI 则偏向垂直协作场景，目前从功能广度和社区体量来看，尚处于不同发展阶段。

---

## 6. 社区活跃度记录

基于今日数据，项目活跃度可直观分层：

- **极高活跃**：**OpenClaw** — 单日 461 Issues + 500 PRs，有新版发布，高频合并与关闭，多议题讨论热烈，维护者响应迅速。
- **极低/停滞**：**LobsterAI** — 仅 3 stale 标记交互，无新回复、无 review 或合并，社区反馈积压超过 3 个月，无明显维护介入。

（注：活跃度仅基于今日快照，不构成对项目成熟度或未来发展潜力的判断。）

---

## 7. 有证据支撑的观察

1. **OpenClaw 面临严重的稳定性回归与可靠性信任危机**
   P0 工具输出损坏（#104721）、多个 P1 异常（会话写锁阻塞、嵌入式缓存断裂、网关 OOM 等）在同日被集中讨论。用户明确表达“被怒怒的”情绪，表明快速增长中质量管理压力陡增，且部分修复仍未完全落地。

2. **跨平台桌面应用是 OpenClaw 社区最强烈且持续的特性诉求**
   Issue #75 超过 7 个月未关闭，积累 110 条讨论与 81 个 👍，远超其他议题。结合当日大量 Windows/Linux 用户反馈，反映出 macOS 单平台策略已成为用户扩展的关键瓶颈。

3. **LobsterAI 项目处于事实上的响应停滞状态**
   所有待办项均标记 stale 且无维护者回应，包括一个功能实现的 PR (#1327)。尽管项目仍有版本发布，但社区反馈闭环中断，无证据表明近期有活跃的工程决策或投入。

4. **工具调用交互在两类项目中以不同形态成为关注点，但无直接关联**
   OpenClaw 的 bug 属于数据完整性问题，LobsterAI 的诉求属于 UI 便捷性。二者仅在“工具调用的使用者体验”这一宽泛主题上有所交集，尚未构成可互相借鉴的明确趋势。

5. **今日暂无明确跨项目信号**
   未发现两个项目在技术栈、架构方案或社区议题上存在交叉引用、互相影响或共同推进的轨迹。各自社区独立演进，规模与节奏差异显著。

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# 有道 LobsterAI 项目日报 | 2026-07-12

## 1. 今日活动概览
过去 24 小时内项目共产生 3 条 Issue 更新和 1 条 Pull Request 更新，均处于开放状态且被标记为 `stale`（长期未活跃），无合并或关闭记录。与此同时，7 月 10 日发布了新版本 `LobsterAI 2026.7.10`，引入了委托子代理协作和可最小化权限提示等能力。整体来看，社区反馈集中在交互效率缺陷与通知渠道缺失两个方面。

## 2. 版本发布
**LobsterAI 2026.7.10** (发布于 2026-07-10)
- 支持委托子代理协作 (delegated subagent collaboration) (#2285)
- 新增可最小化的权限提示 (minimizable permission prompts) (#2296)
- 另有至少一项 `feat(cowork)` 改进，变更详情未完整列出

该版本未提及破坏性变更，建议使用者查阅完整 Release Notes 以确认是否影响现有协作文档与代理调用方式。
[Release 链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.10)

## 3. 项目进展
过去 24 小时无 PR 被合并或关闭，唯一待合并的 PR #1327 对应功能增强需求 #1326，当前仍为 `open` 且处于 `stale` 状态，尚未进入 review 或 merge 流程。
[PR #1327](https://github.com/netease-youdao/LobsterAI/pull/1327)

## 4. 社区热点
本日无高评论量或高反应量议题，所有动态 Issue 均仅有 1 条评论，推测为 stale bot 自动标记提醒。其中：
- **#1326 批量展开/折叠工具调用块** 是用户对交互效率的直接诉求，并已附带一个实现 PR，但长时间未推进，值得关注。
  [Issue #1326](https://github.com/netease-youdao/LobsterAI/issues/1326)
- **#1330 会话列表错误状态红点标识** 同样来自用户 @MaoQianTu，期望通过红色徽标一眼识别出错会话，减少排查成本。
  [Issue #1330](https://github.com/netease-youdao/LobsterAI/issues/1330)

## 5. Bug 与稳定性
- **#1329 定时任务通知渠道不可选**
  严重程度：中等（功能不可用）
  现象：新建定时任务时通知渠道下拉列表为空，只能选择“不通知”，影响用户及时获知任务执行结果。
  环境版本：`v2026.4.1`
  当前状态：开放，无修复 PR 关联。
  [Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329)

## 6. 功能请求归类
- **工具调用块批量操作**（#1326）：要求在 AI 回合包含多个工具调用时，提供“展开全部/折叠全部”按钮，减少逐个操作的繁琐步骤。已有 PR #1327 实现。
- **错误状态可视化标识**（#1330）：要求为 Cowork 会话列表中的 `error` 状态增加红色圆点徽标，以便快速定位故障会话。无对应 PR。

## 7. 用户反馈摘要
三位用户均因 stale bot 标记而重新获得关注，其初始反馈集中在 2026 年 4 月 2 日：
- @MaoQianTu 详细描述了工具调用区块逐个展开的糟糕体验，并提出了具体的组件级实现方案，反馈含明确技术路径，期待度高。
- @gongfen0121 通过截图直观展示了通知渠道缺失的缺陷，语气中包含对基本功能不可用的不满。
- @MaoQianTu 的另一条需求聚焦于错误可见性，指出当前仅 `running` 和未读消息有指示器，`error` 状态完全缺失提示，影响日常运维效率。

## 8. 待处理积压
下表列出当前所有 stale 状态的 Issue 和 PR，均已超过 3 个月无实质性进展，建议维护者评估是否继续跟进或关闭：

| 编号 | 类型 | 标题 | 作者 | 链接 |
|------|------|------|------|------|
| #1326 | Issue | 功能增强：ToolUse 工具调用块批量展开/折叠 | @MaoQianTu | [Link](https://github.com/netease-youdao/LobsterAI/issues/1326) |
| #1329 | Issue | 新建的定时任务通知渠道没有选项，只能选不通知 | @gongfen0121 | [Link](https://github.com/netease-youdao/LobsterAI/issues/1329) |
| #1330 | Issue | 功能增强：会话列表错误状态红点徽标 | @MaoQianTu | [Link](https://github.com/netease-youdao/LobsterAI/issues/1330) |
| #1327 | PR | 功能增强：ToolUse 工具调用块批量展开/折叠 | @MaoQianTu | [Link](https://github.com/netease-youdao/LobsterAI/pull/1327) |

以上积压项均因 `stale` 标签提醒重新进入视野，尚无维护者回应或调度迹象。

</details>