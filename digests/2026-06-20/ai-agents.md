# OpenClaw 生态日报 2026-06-20

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-20 00:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目 2026-06-20 动态日报。

---

# OpenClaw 项目动态日报 — 2026-06-20

## 1. 今日活动概览

过去 24 小时内，OpenClaw 社区活动量处于高位，共更新了 500 条 Issue 和 500 条 PR，显示项目维护和社区反馈仍然非常活跃。其中，新开/活跃的 Issue 占 442 条，而待合并的 PR 多达 457 条，说明维护团队在 Code Review 和合并方面仍面临巨大压力。项目发布了 `v2026.6.9-beta.1` 版本，主要亮点是增强了 Telegram 消息的富文本渲染能力。社区讨论的热点集中在多个 P0/P1 级别的严重 Bug 上，包括网关内存泄漏、会话状态丢失和 Cron 任务持续失败等问题。

## 2. 版本发布

- **[新版本] v2026.6.9-beta.1** ([查看详情](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9-beta.1))
  - **亮点**: 大幅提升了 Telegram 渠道的交付质量。现在 Telegram 能够发送富 HTML 消息，保留富 Markdown 和贴纸路径，更忠实地渲染进度草稿和命令输出，并确保提及和 spooled handlers 在正确的交付路径上。
  - **涉及 PR**: #93286, #93164, #93124, #93364, #9313

## 3. 项目进展

以下为今日合并或取得重要进展的 PR：
- **[PR #95137] test(docker): stabilize build signal probe** ([链接](https://github.com/openclaw/openclaw/pull/95137)): 由维护者 `vincentkoc` 提交，旨在稳定 Docker 构建的信号探测测试。已合并，表明项目在持续改善 CI/CD 流程的稳定性。
- **[PR #93926] fix(matrix): recognize MiniMax mm: namespaced reasoning tags in monitor suppression** ([链接](https://github.com/openclaw/openclaw/pull/93926)): 修复了 Matrix 渠道的一个问题，现在可以正确识别并抑制 MiniMax 模型的推理标签，避免其被错误显示到监控信息中。状态为 `👀 ready for maintainer look`，表明修复已准备就绪。
- **[PR #94369] fix(memory-wiki): exclude durable reference pages from stale report** ([链接](https://github.com/openclaw/openclaw/pull/94369)): 修复了 `memory-wiki` 插件中，将持久化的参考页面（如概念页）错误地标记为“陈旧”的问题。状态为 `👀 ready for maintainer look`。
- **[PR #94401] fix(session-memory): skip transcript-only assistant messages in getRecentSessionContent** ([链接](https://github.com/openclaw/openclaw/pull/94401)): 修复了会话记忆文件中因模型推理产生的重复助手消息。状态为 `👀 ready for maintainer look`。

## 4. 社区热点

本周社区讨论最热烈的议题主要集中在数据可靠性、性能和稳定性方面：

- **核心会话/转录 SQLite 迁移（#88838）** ([链接](https://github.com/openclaw/openclaw/issues/88838)): 以 31 条评论成为今日讨论最激烈的 Issue。该 Issue 提议通过“分支抽象”模式，将核心会话和转录运行时状态分步迁移到 SQLite，以避免一次性重写带来的高风险。这反映了社区对核心数据持久化方案稳定性的高度关注。
- **Doctor --fix 性能严重退化（#85333）** ([链接](https://github.com/openclaw/openclaw/issues/85333)): 用户报告 `openclaw doctor --fix` 命令在更新后变慢 4-5 倍，从 55 秒飙升至 229 秒以上。13 条评论表明这是一个普遍且影响开发效率的性能回归问题。
- **网关内存泄漏导致 OOM 崩溃（#91588）** ([链接](https://github.com/openclaw/openclaw/issues/91588)): 这是一个被标记为 `P0` (最高优先级) 的严重问题。网关进程的 RSS 内存在几天内从 350MB 增长到 15.5GB，最终被系统 OOM Killer 杀死。该问题已获得 12 条评论和 `🦞 diamond lobster` 的最高评级。

## 5. Bug 与稳定性

以下为今日报告的严重 Bug，按优先级排列：

- **[P0] 网关内存泄漏（#91588）** ([链接](https://github.com/openclaw/openclaw/issues/91588)): 在正常使用 2-3 天后，RSS 从 350MB 增长至 15.5GB，导致进程被 OOM Killer 杀死。影响稳定性。暂无直接对应 fix PR。
- **[P0] Cron 任务迁移导致投递错误（#90378）** ([链接](https://github.com/openclaw/openclaw/issues/90378)): 从 5.28 升级到 6.1 后，Cron 存储静默迁移到 SQLite，但新作业默认使用 `delivery.mode=announce` 导致渠道错误。暂无直接对应 fix PR。
- **[P1] doctor --fix 性能退化（#85333）** ([链接](https://github.com/openclaw/openclaw/issues/85333)): `openclaw doctor --fix` 运行时间大幅增加，为性能回归问题。暂无直接对应 fix PR。
- **[P1] Cron 任务持续失败（#91363）** ([链接](https://github.com/openclaw/openclaw/issues/91363)): 隔离的 Cron 任务一致性地在 `model-call-started` 阶段失败，无法向 LLM 发送请求。暂无直接对应 fix PR。
- **[P1] Matrix 频道调度崩溃（#90325）** ([链接](https://github.com/openclaw/openclaw/issues/90325)): 在 v2026.6.1 中，Matrix 渠道处理每条入站消息时都会崩溃，是明显的回归问题。暂无直接对应 fix PR。

## 6. 功能请求归类

以下为今日用户提出的主要新功能需求：

- **工具/平台**
  - **Per-Agent Memory-Wiki 配置 (#63829)** ([链接](https://github.com/openclaw/openclaw/issues/63829)): 提出为多 Agent 系统中的每个 Agent 配置独立的记忆知识库，而不是共享全局模板库。获得 9 个 👍。
  - **Webchat 内联按钮支持 (#46656)** ([链接](https://github.com/openclaw/openclaw/issues/46656)): 提出为 Webchat (Control UI) 增加类似 Telegram 的内联按钮功能。
  - **Topic-Session 会话家族 (#90916)** ([链接](https://github.com/openclaw/openclaw/issues/90916)): 提出为一个 AI 助手创建多个命名的话题上下文通道，以便在不同话题间切换时保持隔离的近期上下文。
  - **Per-Channel/Group/DM 模型覆盖 (#53638)** ([链接](https://github.com/openclaw/openclaw/issues/53638)): 提出允许在 `openclaw.json` 的渠道、群组和私聊级别配置 `model` 字段，实现更精细的模型选择。

## 7. 用户反馈摘要

从今日的 Issue 和 PR 评论中，可以提炼出以下用户反馈：

- **性能退化困扰用户**: 多位用户报告了性能回归问题，特别是 `openclaw doctor --fix` 命令的显著变慢（#85333），这影响了日常的开发运维体验。
- **升级迁移带来困扰**: 用户对升级过程中的静默数据迁移感到困惑和不满，如 Cron 存储从 JSON 迁移到 SQLite 未提供清晰的用户通知（#90378），导致配置丢失和功能报错。
- **功能可用性退化**: Telegram 渠道在升级后出现“消息格式不支持”的错误（#93794），以及 `/usage` 命令失效（#93905），这些都直接影响了终端用户体验。
- **稳定性是最高优先级**: 从多个 P0/P1 的严重 Bug，如内存泄漏（#91588）和 Cron 任务彻底失败（#91363）来看，社区对网关和服务器的长期稳定运行表现出强烈需求。

## 8. 待处理积压

以下为长期未有效响应或进展缓慢的重要 Issue/PR，值得维护者关注：

- **[Issue #53638] Feature: per-channel / per-group / per-DM model override in config** ([链接](https://github.com/openclaw/openclaw/issues/53638)): 请求于 2026-03-24 提出，虽然有一个打开的 PR (#95120) 部分支持此功能，但核心 Issue 仍在讨论中，需推动统一解决方案。
- **[Issue #63829] [Feature]: Per-agent memory-wiki vault configuration** ([链接](https://github.com/openclaw/openclaw/issues/63829)): 功能请求于 4 月提出，拥有 9 个 👍，但对多 Agent 环境下记忆隔离的需求仍未得到满足。
- **[PR #80388] feat(plugins): add Control UI entry points** ([链接](https://github.com/openclaw/openclaw/pull/80388)): 一个 XL 大小的 PR，旨在让插件在 Control UI 中注册导航入口。该 PR 状态为 `⏳ waiting on author`，等待作者处理反馈已有一个多月。
- **[PR #82718] docs(telegram): clarify account-local group config** ([链接](https://github.com/openclaw/openclaw/pull/82718)): 关于 Telegram 多账户配置的文档改进 PR，状态为 `⏳ waiting on author`，等待作者更新。

---

## 横向生态对比

# 2026-06-20 开源 AI 智能体项目横向对比分析

## 1. 今日横向概览

今日四个项目均保持活跃，但活跃度差异显著。**OpenClaw** 以 500 条 Issue 和 500 条 PR 的体量继续主导社区讨论，并发布补丁版本 v2026.6.9-beta.1，重点修复 Telegram 富文本问题；**Zeroclaw** 发布 v0.8.1 聚合 207 次提交，但社区同时因预编译包缺少 Slack/Discord 功能而出现回归抱怨；**NanoBot** 以 9 条 Issue 和 33 条 PR 维持中等活跃度，核心讨论围绕 SuspendTurn 异步暂停和 Cron 空通知修复展开；**PicoClaw** 活动量最小（4 条 Issue、7 条 PR），但包含一项安全修复（SSRF 绕过）和多个 Windows 兼容性 Bug。整体上，成熟度越高的项目社区规模越大，但回归问题和默认配置缺陷成为跨项目的共同痛点。

## 2. 各项目活跃度对比

| 指标 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **活跃 Issue** | 500 条（442 新开/活跃） | 9 条（3 新开，6 关闭） | 50 条 | 4 条新活跃 |
| **活跃 PR** | 500 条（457 待合并） | 33 条（19 合并/关闭） | 50 条 | 7 条（1 合并） |
| **版本发布** | v2026.6.9-beta.1 | 无 | v0.8.1（207 次提交） | v0.3.0-nightly.20260619 |
| **高优先级 Bug（P0/P1/S1）** | 3 个（内存泄漏、Cron 投递错误、性能退化） | 1 个（升级后 Cron 空通知） | 5 个（Gemini 400、CRON 重复执行、上下文截断等） | 1 个（SSRF 绕过） |
| **社区讨论最热 Issue** | #88838（会话迁移）31 条评论 | #4410（Cron 空通知） | #7787（预编译包缺少通道）6 条评论 | #3150（记忆丢失）2 条评论 |

**事实性备注**：OpenClaw 的 Issue/PR 数字为“当日更新总数”，其他项目为具体统计；OpenClaw 待合并 PR 数（457）远高于其他项目，反映维护瓶颈。Zeroclaw 在 Bug 数量上最多，但 v0.8.1 修复了 123 个 Bug，显示快速迭代。

## 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 当日 Issue/PR 数量是 NanoBot 的 55 倍、Zeroclaw 的 10 倍、PicoClaw 的 125 倍，社区规模级差明显。
- **技术重点**：OpenClaw 今日工作聚焦**消息通道渲染增强**（Telegram 富文本）和**核心数据持久化**（SQLite 迁移讨论 #88838）；同类项目中，NanoBot 同样处理了 Telegram 富文本需求（#4413），但 OpenClaw 已发布版本实现该能力。Zeroclaw 主要精力在 v0.8.0 的稳定性补丁和 Discord 交互组件。
- **社区讨论面**：OpenClaw 的用户反馈集中在 P0/P1 级别的**稳定性回归**（内存泄漏、Cron 失败），而 NanoBot 和 Zeroclaw 的用户更多抱怨**默认配置不合理**（NanoBot 的 Cron 空通知、Zeroclaw 的 32K 上下文预算）。PicoClaw 的讨论面更窄，聚焦在边缘设备兼容性（Windows 路径、Termux 安装）和安全修复。

## 4. 共同出现的技术方向

以下方向在今日多个项目中均有明确诉求或 Bug 报告：

| 技术方向 | 涉及项目 | 具体表现 |
|----------|----------|----------|
| **Telegram 消息格式与交互** | OpenClaw（已发布富文本增强）、NanoBot（需求 #4413 支持 API 10.1）、PicoClaw（需求 #3114 权限分级） | 三个项目同时出现 Telegram 通道相关动态，说明 Telegram 是当前最活跃的 IM 渠道，各项目均在完善其消息渲染和权限模型。 |
| **Cron / 定时任务行为异常** | OpenClaw（#90378 迁移导致投递错误、#91363 持续失败）、NanoBot（#4410 升级后空通知）、Zeroclaw（#6037 重复执行） | 三个项目出现“任务触发后行为不符合预期”的 Bug，部分由版本升级或存储迁移引发，部分由调度逻辑本身导致。 |
| **会话 / 记忆管理问题** | OpenClaw（#94369 memory-wiki 陈旧报告、#94401 重复助手消息）、NanoBot（#4246 历史记录未彻底删除）、Zeroclaw（#5844 系统提示过度强调记忆）、PicoClaw（#3150 记忆丢失） | 所有四个项目在今日均有关于“记忆”或“会话状态”的 Bug 报告或修复，说明上下文管理仍是开源智能体项目的核心挑战。 |
| **上下文窗口预算与截断** | OpenClaw（监控上下文使用量）、Zeroclaw（#5808 默认 32K 预算导致持续截断）、NanoBot（#4389 fallback 模型独立 contextWindowTokens） | 多个项目关注上下文窗口的配置灵活性，尤其是默认预算不合理导致的用户体验下降。 |

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 多通道消息代理 + 核心运行时稳定性 | Agent 协作流程（SuspendTurn、子代理） + 可配置性 | 多智能体运行时 + 标准操作流程（SOP）抽象 | 轻量级嵌入式部署 + 安全边界控制 |
| **目标用户** | 社区运营者、高流量的多通道部署 | 开发者、需要定制对话工作流的团队 | 希望运行多 Agent 协同任务的高级用户 | IoT / 边缘设备用户、自托管新手 |
| **技术架构** | 插件化 + SQLite 迁移（#88838） | 模块化、强调工具和 MCP 集成 | Rust 实现、内置 Discord 重构、SOP 存储特质 | Go 实现、关注 Windows 兼容性与小体积 |
| **今日差异化行为** | 发布版本修复通道渲染，同时承受 P0 稳定性压力 | 无版本发布，但提出 SuspendTurn 这一独特异步暂停方案 | 大版本补丁发布，同时推进 Discord 交互组件和 onboard 向导 | 仅合并 1 个小修复，更多时间用于安全加固和边缘案例 |

**事实性观察**：OpenClaw 和 NanoBot 在 Agent 工具调用模型上方向不同——OpenClaw 偏向消息驱动，NanoBot 则引入 `SuspendTurn` 控制流，后者更接近工作流引擎。Zeroclaw 的 SOP 抽象（PR #8001）是今日唯一面向流程持久化的开发，PicoClaw 则因开发资源最少而专注于关键安全补丁。

## 6. 社区活跃度记录

基于今日数量和发布记录，按活跃度从高到低分层：

- **第一梯队**（每日 Issue+PR > 100，有版本发布）：**OpenClaw**（500+500，发布 beta）
- **第二梯队**（每日 Issue+PR 50~100，有版本发布）：**Zeroclaw**（50+50，发布 v0.8.1）
- **第三梯队**（每日 Issue+PR 10~50，无版本发布或有 nightly）：**NanoBot**（9+33，无发布）
- **第四梯队**（每日 Issue+PR < 10，有 nightly）：**PicoClaw**（4+7，nightly）

**注意**：活跃度不等同于代码质量或项目成熟度，仅反映当日社区投入。OpenClaw 的活跃量中包含大量待合并 PR，实际维护效率可能受瓶颈影响；PicoClaw 虽活跃度最低，但其安全修复（#3143）直接影响部署安全。

## 7. 有证据支撑的观察

以下观察均由今日多条数据共同支撑：

1. **Telegram 是当前跨项目最关注的渠道**：OpenClaw 专门发布版本增强其富文本能力；NanoBot 和 PicoClaw 分别提出新 API 支持和权限分级诉求。暂无其他渠道同时被三个项目提及。
2. **版本升级导致的回归问题已成为用户核心痛点**：OpenClaw 的 Cron 迁移（#90378）、Zeroclaw 的预编译包通道缺失（#7787）、NanoBot 的 Cron 空通知（#4410）均直接源于版本更新。这提示各项目在发布前应加强回归测试与迁移文档。
3. **上下文 / 记忆管理的 Bug 遍布所有项目**：四个项目今日均有相关报告，包括“记忆丢失”“重复助手消息”“陈旧页面标记”等。该领域暂无统一解决方案，各项目采取的修复策略（SQLite 迁移、过滤器、压缩优化）差异较大，尚未形成最佳实践。
4. **Cron 任务的行为一致性存在系统性缺陷**：三个项目同时出现 Cron 任务异常（投递错误、空通知、重复执行），且根源各不相同（迁移、升级、调度逻辑），表明 Cron 模块在跨版本兼容性和默认配置上缺乏统一规范。
5. **今日暂无明确跨项目信号**：没有证据显示四个项目在标准、协议或社区组织层面有合作或对齐趋势。每个项目的 Bug 修复和功能开发仍以各自路线图为驱动。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，以下是为您生成的 **NanoBot 项目动态日报**（2026-06-20）。

---

# NanoBot 项目动态日报 (2026-06-20)

## 1. 今日活动概览
过去24小时内，项目共处理9条Issue，其中3条为新开或活跃状态，6条已关闭；提交33个Pull Request，其中19个已被合并或关闭，14个仍在处理中。社区活跃度较高，主要集中在**模型 fallback 机制**、**cron 任务通知行为**以及**对话上下文管理**的讨论与修复上。此外，一项重要的新功能 `SuspendTurn` 被提出，旨在支持异步/人工介入场景的对话暂停。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
以下 PR 在过去24小时内被合并或关闭，推进了项目在功能修复和增强方面的发展：

- **[修复] 解决 MCP Streamable HTTP 超时问题** (`#4230, CLOSED`)
  - 修复了 MCP 连接中因 `httpx` 超时未设置可能导致无限等待的问题。
  - 作者: @lucndm | [链接](https://github.com/HKUDS/nanobot/pull/4230)

- **[修复] 彻底删除 Session 历史记录** (`#4246, CLOSED`)
  - 修复了 `delete_session` 仅清理工作区路径，而未删除旧版全局目录（`~/.nanobot/sessions/`）中的遗留文件，导致历史记录可被意外恢复的 Bug。
  - 作者: @yorkhellen | [链接](https://github.com/HKUDS/nanobot/pull/4246)

- **[增强] 为内置文件系统工具添加启用开关** (`#4138, CLOSED`)
  - 新增 `tools.file.enable` 配置项，允许用户关闭内置的文件系统工具 (`file_read`, `file_write` 等)，以配合仅使用 MCP 工具的安全部署场景。
  - 作者: @niradler | [链接](https://github.com/HKUDS/nanobot/pull/4138)

- **[修复] 适配 OpenAI 图片编辑 API** (`#4394, CLOSED`)
  - 修复了使用参考图进行 OpenAI 图片编辑时，请求路由错误的问题，将其正确指向 `/images/edits` 端点。
  - 作者: @sbyinin | [链接](https://github.com/HKUDS/nanobot/pull/4394)

- **[修复] 支持飞书 WebSocket 格式的卡片内容** (`#4342, CLOSED`)
  - 修复了飞书卡片通过 WebSocket 通道到达时，因数据结构差异导致内容为空的问题。
  - 作者: @JiajunBernoulli | [链接](https://github.com/HKUDS/nanobot/pull/4342)

- **[增强] Discord 通道重构** (`#2655, CLOSED`)
  - 对 Discord 通道进行了大规模重写，迁移至 `discord.py 2.x`，支持斜杠命令、UI 组件和 Discord 工具。
  - 作者: @Mihir-Null | [链接](https://github.com/HKUDS/nanobot/pull/2655)

## 4. 社区热点
- **`SuspendTurn` 功能的引入引发关注** (`#4411, OPEN`)
  - 该 PR 提议新增一种“暂停对话”机制，允许工具执行后暂停当前轮次，等待用户的下一条消息或外部流程完成后**非阻塞式**地恢复对话。这为构建需要人工审批的复杂工作流提供了关键能力。
  - [链接](https://github.com/HKUDS/nanobot/pull/4411)

- **Cron 任务通知行为讨论激烈** (`#4410, OPEN` & `#4412, OPEN`)
  - Bug `#4410` 指出，升级后 Cron 任务即使没有触发具体操作，也会向用户发送空消息。开发者社区快速响应，PR `#4412` 立即提出了修复方案，旨在抑制这些“例行公事”的无用通知。这体现了社区对维护良好用户体验的关注。
  - Bug链接: [4410](https://github.com/HKUDS/nanobot/issues/4410)
  - PR链接: [4412](https://github.com/HKUDS/nanobot/pull/4412)

## 5. Bug 与稳定性
- **严重: 升级后 Cron 任务生成空通知** (`#4410, OPEN`)
  - **现象**: 用户从 v0.15 升级后，Cron 任务（如Heartbeat）即使无信息需报告，也会发送不必要的消息。
  - **状态**: 已有关联修复 PR `#4412` 待审查。
  - [链接](https://github.com/HKUDS/nanobot/issues/4410)

- **中等: LLM 流式响应超时** (`#4013, CLOSED`)
  - **现象**: 用户升级到 v0.2.0 后，模型流式响应中断并报错 “stream stalled for more than 90 seconds”，导致无法进行长时间对话。
  - **状态**: 已于昨日关闭，但未在数据中明确合并了哪个修复 PR。
  - [链接](https://github.com/HKUDS/nanobot/issues/4013)

- **中等: 图片降级回退后模型幻觉** (`#4345, CLOSED`)
  - **现象**: 当模型不支持图片输入时，`_strip_image_content` 机制会将图片替换为“[Image]”文本，但该文本会误导模型，使其“幻觉”看到了它从未真正收到的图片内容，并附带文件路径信息。
  - **状态**: 昨日已关闭，修复细节待查。
  - [链接](https://github.com/HKUDS/nanobot/issues/4345)

- **中等: MCP 进度通知被拒绝** (`#4052, CLOSED`)
  - **现象**: MCP 服务器发送的 `notifications/progress` 消息因 Pydantic 验证错误被拒绝。
  - **状态**: 昨日已关闭。
  - [链接](https://github.com/HKUDS/nanobot/issues/4052)

## 6. 功能请求归类
- **对话流控制**:
  - 需求: 实现 `SuspendTurn`，让工具可以暂停当前对话，等待用户或外部事件响应 (`#4411`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/4411)
  - 需求: Heartbeat 任务结果应发送到任务添加的频道，而非最近活跃的频道 (`#4418`, OPEN)。[链接](https://github.com/HKUDS/nanobot/issues/4418)

- **模型与 API 增强**:
  - 需求: 支持为 Fallback 模型单独配置 `contextWindowTokens`，以适配不同模型的上下文窗口 (`#4389`, CLOSED)。[链接](https://github.com/HKUDS/nanobot/issues/4389)
  - 需求: 支持 Telegram Bot API 10.1 的富文本消息格式 (`#4413`, OPEN)。[链接](https://github.com/HKUDS/nanobot/issues/4413)
  - 需求: 为子代理（subagent）的 `spawn` 工具添加 `model` 参数，允许重写子代理使用的模型 (`#4415`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/4415)
  - 需求: 为 Cron Job 添加 `model_preset` 支持，允许不同任务使用不同的模型 (`#4416`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/4416)

- **功能与体验优化**:
  - 需求: 添加手动触发 Heartbeat 的命令 (`#3590`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/3590)
  - 需求: 限制 Dream 功能，允许用户禁用或限制其更新范围，避免技能漂移 (`#3591`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/3591)
  - 需求: 为 `nanobot agent` 命令添加内联 TUI（终端界面）(`#4329`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/4329)
  - 需求: 增加子代理聚合结果模式，将多个子代理结果合并为一条消息 (`#4414`, OPEN)。[链接](https://github.com/HKUDS/nanobot/pull/4414)

## 7. 用户反馈摘要
- **升级痛点**：用户 `@mxnbf` 在 `#4013` 中反馈，从 v0.1.5post2 升级到 v0.2.0 后出现模型流式响应超时，导致正常使用受阻，表明版本升级带来的回归问题对用户影响较大。[链接](https://github.com/HKUDS/nanobot/issues/4013)
- **行为回归**：用户 `@KennethYCK` 在 `#4410` 中反馈，升级后 Cron 任务行为改变，即使无所事事也会发送消息，这严重影响了使用体验，特别是对于部署有常规性任务的用户。[链接](https://github.com/HKUDS/nanobot/issues/4410)

## 8. 待处理积压
- **长期未合并的 PR**：
  - **XMPP 通道支持** (`#1945`, OPEN): 该 PR 由 @regularfay 提交于2026年3月，至今已近3个月，为添加 XMPP 协议支持。近期无评论或更新，建议维护者评估其成熟度。[链接](https://github.com/HKUDS/nanobot/pull/1945)
  - **手动触发 Heartbeat 命令** (`#3590`, OPEN) 与 **Dream 范围控制** (`#3591`, OPEN): 均由 @Jefsky 在5月初提交，已有部分分支衍生代码（如 `#3591` 相关讨论），但主 PR 仍处于开放状态，建议推进审查或合并。[链接1](https://github.com/HKUDS/nanobot/pull/3590) [链接2](https://github.com/HKUDS/nanobot/pull/3591)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 GitHub 数据，我为您生成了 2026-06-20 的 Zeroclaw 项目动态日报。

---

## Zeroclaw 项目动态日报 (2026-06-20)

### 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目发布了一个重要的补丁版本 **v0.8.1**，聚合了 207 次提交，重点修复了 v0.8.0 中的大量 Bug，并引入了部分新功能。社区活跃度极高，共有 50 条 Issues 和 50 条 PRs 处于活跃状态。其中，高优先级的回归问题（如预编译包缺少 Slack/Discord 功能）和稳定性 Bug（如上下文预算超限、CRON 任务重复执行）是讨论焦点。此外，多项旨在增强 Discord 通道交互能力、改善 TUI/Web 体验的重大功能 PR 正在进行中。

### 2. 版本发布

- **ZeroClaw v0.8.1 正式发布**：这是 v0.8.x 系列的第一个补丁版本，旨在稳定 v0.8.0 引入的多智能体运行时、通道和提供商栈。该版本由 45 位贡献者提交的 207 次提交组成，包含 123 个 Bug 修复和 46 个新功能。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.1

### 3. 项目进展

今日没有 PR 被合并，但社区提交了多项重要功能的 PR，展示了项目的活跃开发状态：

- **Discord 通道交互组件**：PR #7965 正在推进，旨在为 Discord 通道添加按钮、下拉菜单、弹窗、工具批准流和自动补全功能，完善其交互界面。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/7965
- **对话式命令行初始化向导**：PR #8033 重写了 `zeroclaw onboard` 命令，将其转变为基于聊天的引导式设置体验，旨在简化新用户的初次配置过程。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/8033
- **全新 SOP 运行时存储抽象**：PR #8001 引入了 `SopRunStore` 特质和其内存后端，为后续的标准操作流程（SOP）提供持久化、并发控制和可观测性基础设施。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/8001
- **统一的上下文窗口使用量显示**：PR #7946 为 `zerocode` TUI、网关 Web 聊天和命令行交互模式添加了模型上下文窗口使用量进度条，让用户能直观了解资源消耗情况。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/7946

### 4. 社区热点

本周讨论最热烈的话题集中在体验回归和缺省配置缺陷上：

- **v0.8.0 预编译包回归问题 (Issue #7787)**：用户反馈 v0.8.0 的预编译二进制包未启用 Slack 和 Discord 通道功能，降级到 v0.7.5 才能使用。这是影响用户迁移的重大回归，获得 6 条评论。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/7787
- **系统提示词过度强调记忆 (Issue #5844)**：用户观察到系统提示被过度干预，导致智能体在 CRON 任务等场景下更倾向于依赖过往记忆而非当前提示，影响任务执行效果，获得 6 条评论。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5844
- **默认 32K 上下文预算导致持续截断 (Issue #5808)**：用户报告默认的 32K 上下文预算在第一次对话迭代时就会被系统提示和工具定义超额消耗，导致智能体持续进行前置截断，严重影响正常工作流，有 3 条评论。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5808

### 5. Bug 与稳定性

项目今天有大量高优先级的 Bug 报告，其中部分已有修复 PR：

- **阻止工作流的 Bug (S1)**:
  - **Gemini 400 错误 (Issue #6302)**：与 Gemini 模型交互时，由于历史消息顺序问题（`assistant` 在 `user` 之前）导致请求被拒。
  - **智能体重命名/删除时状态持久化顺序问题 (Issue #7907 / #7941)**：在持久化配置文件之前就变更了外部状态，可能导致数据不一致或丢失。
  - **CRON 任务重复执行 (Issue #6037)**：当任务运行时间超过调度轮询间隔时，会被反复启动。
  - **多模态视觉提供商被忽略 (Issue #6841)**：配置的 `vision_provider` 未被使用，图片请求被错误路由到备用提供商。

- **降级行为的 Bug (S2)**：
  - **提供成本未被捕获 (Issue #5221，已关闭)**：通过调度、命令行和 Web 智能体与模型交互时，相关的 API 成本未被正确记录。

- **已有修复 PR 的 Bug**:
  - **上下文压缩总结模型 Fix (PR #7973)**：修复了上下文压缩功能在引用配置文件时，未能正确使用专用总结模型的问题。
    - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/7973
  - **成本配置热加载 Fix (PR #8004)**：修复了成本追踪器在启动后无法应用配置变更的问题。
    - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/8004
  - **流式叙述重复 Fix (PR #8014)**：修复了在原生工具调用前重复输出流式叙述文本的问题。
    - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/8014
  - **MCP 子进程泄漏 Fix (PR #8023)**：修复了在心跳检测中泄漏标准输入输出子进程的问题。
    - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/8023

### 6. 功能请求归类

用户提出的新功能需求主要集中在以下几个方面：

- **通道完善 (Discord)**：
  - **交互组件 (PR #7965)**：为 Discord 添加按钮、下拉菜单、弹窗等现代交互能力。
  - **命令本地化 (PR #7922)**：支持 Discord 斜杠命令的多语言描述和公会级注册。

- **安全与认证**：
  - **OIDC 认证支持 (Issue #7141)**：作为 v0.9.0 目标的一部分，引入可插拔的 OIDC 认证提供者。
  - **中间件级认证 (Issue #6250)**：将对 `/api/config` 等 API 路由的认证逻辑抽象为中间件层，而非在每个处理函数中重复。

- **可观测性与监控**：
  - **添加上下文窗口状态栏 (PR #7946)**：在多个对话界面添加模型上下文使用情况的显示。
  - **Slack 线程上下文补全 (Issue #6055)**：首次在 Slack 线程中被 @提及时，自动拉取整个线程历史作为上下文。

- **命令行与工具化**：
  - **对话式 onboard (PR #8033)**：提供更友好的引导式初始化工具。
  - **Docker 镜像包含文档 (Issue #7950)**：请求在 Docker 镜像中内置 ZeroClaw 文档，以便智能体能回答关于自身配置的问题。

### 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中可以提炼出以下用户反馈：

- **对回归问题反应强烈**：用户对 v0.8.0 版本无法使用 Slack/Discord 功能感到困扰，这直接导致其无法正常工作（#7787）。
- **对默认配置不满意**：用户认为系统的默认配置（如上下文预算、提示词权重）存在设计缺陷，导致频繁的截断和不符合预期的行为（#5808, #5844）。这表明开箱即用的体验需要优化。
- **需要更清晰的日志输出**：用户指出 zeroclaw 将日志信息输出到 stdout 而非 stderr，这破坏了标准输出重定向的可用性（#4721）。

### 8. 待处理积压

以下为长期存在或近期被标记为阻塞状态的关键问题，建议维护者重点关注：

- **安全性依赖问题 (Issue #5869)**：由于 `rumqttc` 库的依赖版本问题，项目存在多个 RUSTSEC 安全公告风险。该问题自 4 月中旬提出以来一直处于阻塞状态。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/5869
- **Android Termux 安装问题 (Issue #7911)**：用户在 Android Termux 上安装时遇到 `aarch64` 二进制文件兼容性问题，当前状态为 `needs-repro`，需要更多信息以复现和解决。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/7911
- **上下文压缩修复 PR (PR #7973)**：该 PR 修复了重要的上下文压缩功能，但目前标记为 `needs-author-action`，可能需要作者回应审查意见才能继续合入。
  - **链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/7973

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-20

## 1. 今日活动概览
过去24小时内，PicoClaw共收到4条新活跃Issues、7条Pull Requests，其中1个PR被合并/关闭。此外，项目发布了1个nightly版本（v0.3.0-nightly.20260619.287853ab）。社区讨论集中在Windows路径兼容性、Telegram渠道权限分级、以及AI记忆异常等话题。SSRF防护相关的PR（#3143）是今日最受关注的修复项。

## 2. 版本发布
- **nightly: Nightly Build**
  版本号：`v0.3.0-nightly.20260619.287853ab`
  （自动构建，可能不稳定）
  变更日志：https://github.com/sipeed/picoclaw/compare/v0.3.0...main
  无破坏性变更说明或迁移注意事项。

## 3. 项目进展
今日仅有1个PR被合并/关闭：
- **#2956** [merged] **fix: preserve channel enabled state when merging security.yml**
  作者：@yuxuan-7814
  修复了加载`.security.yml`后，配置为`enabled: true`的渠道被意外禁用的问题。
  链接：https://github.com/sipeed/picoclaw/pull/2956

## 4. 社区热点
- **#3150** [BUG] "它给自己整失忆了"
  中文报告，用户描述AI记忆丢失问题（创建于2026-06-19，2条评论）。虽未提供详细复现步骤，但引起关注。
  链接：https://github.com/sipeed/picoclaw/issues/3150

- **#2472** [BUG] list_dir在Windows上因路径分隔符不兼容返回"invalid argument"
  已有6条评论，投票1次。问题影响Windows用户使用`list_dir`工具，根因是Go的`fs.FS`要求正斜杠。
  链接：https://github.com/sipeed/picoclaw/issues/2472

- **#3114** [Future Request] Telegram渠道按对话类型权限分级控制
  获1票，1条评论。用户期望对私聊/群组/频道分别设置不同权限（如禁止在群组中执行shell命令）。
  链接：https://github.com/sipeed/picoclaw/issues/3114

- **#3143** [PR] fix(web): block private IPv4 embeds in ISATAP literals
  作者：@lc6464，解决SSRF防护绕过问题（#3074）。当日提交，未合并。
  链接：https://github.com/sipeed/picoclaw/pull/3143

## 5. Bug 与稳定性
按严重程度排列：

| Issue/PR | 类型 | 摘要 | 严重程度 | 关联修复PR |
|----------|------|------|----------|------------|
| #3150 | Bug | AI记忆丢失（未提供版本/环境） | 高（功能失效） | 无 |
| #2472 | Bug | Windows下`list_dir`返回"invalid argument" | 高（跨平台可用性） | 无 |
| #3143 | PR | 修复SSRF防护绕过（ISATAP IPv6嵌入私有IPv4） | 高（安全漏洞） | 有PR#3143（待合并） |
| #3048 | PR | `mcp add`解析未知前置标志 | 中 | 有PR#3048（待合并） |
| #3045 | PR | Matrix用户ID中含冒号导致`allow_from`误解析 | 中 | 有PR#3045（待合并） |
| #3053 | PR | `lockStoreFile`类型断言缺少ok检查可能panic | 中 | 有PR#3053（待合并） |
| #3091 | PR | `native_search`类型断言未处理非bool值 | 低 | 有PR#3091（待合并） |

## 6. 功能请求归类
- **渠道权限分级**
  #3114 请求在Telegram渠道中根据对话类型（私聊/群组/频道）设置不同的工具权限。无对应PR。

- **通用附件支持**
  #348 要求支持处理IM渠道（Telegram、Discord等）中的文件、文档、多媒体附件。已有4条评论，但进展缓慢。

- **Agent协作**
  #2937 PR（待合并）引入了内部的Agent协作总线，支持per-agent邮箱、协作线程、结构化消息。虽未合并，但已包含具体实现。

## 7. 用户反馈摘要
- **Windows路径问题**（#2472）：用户`@ut2or1`反馈`list_dir`在Windows上失败，原因是Go的`os.Root`要求正斜杠，而Windows使用反斜杠。社区维护者尚未回复。
- **记忆丢失**（#3150）：用户`@svier0`以中文描述“它给自己整失忆了”，未提供详细环境，可能是模型上下文丢失或状态管理bug。
- **权限控制**（#3114）：用户`@v2up-32mb`提出Telegram中缺乏按对话类型的权限边界，担心群组中任意成员可执行危险命令。

## 8. 待处理积压
- **Issues（长期未更新）**：
  - #2472（创建于2026-04-10，最后更新2026-06-19），至今无修复PR。
  - #348（创建于2026-02-17，最后更新2026-06-19），进度缓慢。

- **PRs（stale标记，超过10天未合并）**：
  - #2937 Feat/agent collaboration（2026-05-24创建）
  - #2956 已合并（作为参考）
  - #3045 fix(identity): allow_from fallthrough for Matrix（2026-06-07）
  - #3048 fix(mcp): reject unknown pre-positional flags（2026-06-07）
  - #3053 fix(evolution): add ok check for LoadOrStore（2026-06-08）
  - #3091 fix(openai_compat): add ok check for native_search（2026-06-10）

- **高风险安全修复**：
  - #3143（2026-06-18创建）修复SSRF绕过，建议尽快合并。

---

*注：日报数据基于PicoClaw GitHub仓库（github.com/sipeed/picoclaw）截至2026-06-20 UTC的公开信息。*

</details>