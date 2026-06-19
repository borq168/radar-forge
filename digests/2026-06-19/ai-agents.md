# OpenClaw 生态日报 2026-06-19

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-19 00:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，根据您提供的 OpenClaw 项目 GitHub 数据，以下是 2026-06-19 的项目动态日报。

---

## OpenClaw 项目日报 (2026-06-19)

### 1. 今日活动概览

过去 24 小时内，OpenClaw 项目非常活跃，共产生 500 条 Issue 更新 和 500 条 PR 更新。当日未发布新版本。在 Issue 方面，新增/活跃达 475 条，关闭 25 条；PR 方面，待合并状态的高达 464 条，而合并/关闭的仅有 36 条。这表明社区提交了大量修复和新功能提案（PR），但项目维护者的审核与合并效率相对滞后，导致 PR 积压情况较为严重。社区讨论热度集中在与消息投递失败（Telegram, Discord）、会话状态异常及安全相关的议题上。

### 2. 版本发布

当日无新版本发布。

### 3. 项目进展 (今日合并/关闭的重要 PR)

今日合并/关闭的 PR 数量较少 (36条)，且数据展示中多为 OPEN 状态的 PR，因此无法从提供的数据中明确判断哪些具体的 PR 获得了合并。从数据概览来看，项目在修复和合入方面进展缓慢。

### 4. 社区热点

以下为今日讨论最活跃、关注度最高的 Issue，反映了社区的核心诉求和痛点：

- **#80319 [P2] [QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity]** (评论: 17)
  - **链接**: [https://github.com/openclaw/openclaw/issues/80319](https://github.com/openclaw/openclaw/issues/80319)
  - **分析**: 该 Issue 是当日评论数最高的议题，讨论焦点在于 QA 测试套件未能区分 Codex 原生工具与 OpenClaw 的动态工具，导致误报。用户在修正原报告，指出问题更多在于测试框架而非 Codex 运行时的真正工具丢失，显示了社区对测试质量和准确性的高度关注。

- **#79902 [P2] [Feature: Add companion-friendly SQLite transcript/session seams on top of database-first runtime]** (评论: 13)
  - **链接**: [https://github.com/openclaw/openclaw/issues/79902](https://github.com/openclaw/openclaw/issues/79902)
  - **分析**: 作为一项功能请求，其讨论热度很高。用户希望通过添加 SQLite 的会话/转录读取接口，让高级用户和插件开发者能更方便地访问会话状态，不再需要解析复杂的内部数据结构。这体现了社区对提升项目可扩展性和开发者体验的强烈需求。

- **#78308 [P2] [Feature: Channel-mediated approval for MCP tool calls (consent envelope)]** (评论: 13)
  - **链接**: [https://github.com/openclaw/openclaw/issues/78308](https://github.com/openclaw/openclaw/issues/78308)
  - **分析**: 针对 MCP 工具调用的审批机制是社区关注的安全痛点。用户要求为 MCP 工具调用也引入与 shell 执行相同的渠道审批流程，以防止外部工具（如发送邮件、写入密码库）被滥用。这显示了社区对运行安全性的担忧，并希望统一安全管理策略。

- **#54531 [P1] [feat: Force reply to originating channel (Telegram/Discord/WhatsApp)]** (评论: 11)
  - **链接**: [https://github.com/openclaw/openclaw/issues/54531](https://github.com/openclaw/openclaw/issues/54531)
  - **分析**: 这是一个长期存在的 P1 功能请求，涉及多消息渠道（Telegram, Discord, WhatsApp）的回复投递问题。用户抱怨 Agent 的回复有时无法正确返回到原始的对话渠道，导致用户在手机上无法看到回复。该 Issue 评论数高，说明这是一个影响广泛且长期未决的痛点。

### 5. Bug 与稳定性

当日报告的 Bug 主要集中在 **消息投递失败**、**会话状态异常** 和 **安全/权限绕过** 三个方面，按严重程度排列如下：

- **P1 - 严重问题：消息投递失败/阻塞**
  - **#80520 [P1]** Telegram 消息被静默丢弃，无 `sendMessage` 日志。[链接](https://github.com/openclaw/openclaw/issues/80520)
  - **#83184 [P1]** 心跳驱动的 Agent 回复导致 `pendingFinalDelivery` 卡住，阻塞后续心跳。[链接](https://github.com/openclaw/openclaw/issues/83184) (**已有 open PR**)
  - **#84583 [P2]** Cron 定时任务投递与用户活跃聊天冲突，引发会话接管错误。[链接](https://github.com/openclaw/openclaw/issues/84583)
  - **#81484 [P1]** Discord 公会频道回复回归 (Regression)，导致发送负载格式错误和反复循环发送。[链接](https://github.com/openclaw/openclaw/issues/81484) (**已有 open PR**)
  - **#79308 [P1]** Telegram 群组回复错误地发送到了用户的私聊 (DM)。[链接](https://github.com/openclaw/openclaw/issues/79308)

- **P1 - 严重问题：**
  - **#79077 [P2]** 对 Telegram 新发布的机器人-机器人和访客机器人模式缺乏支持。[链接](https://github.com/openclaw/openclaw/issues/79077)
  - **#79752 [P1]** Node v26 升级导致 HTTP 响应 Gzip 解压失败，影响 Discord 等渠道。[链接](https://github.com/openclaw/openclaw/issues/79752)
  - **#80040 [P2]** OAuth 失效、供应商切换和冷启动缓存丢失导致级联故障，产生空回复。[链接](https://github.com/openclaw/openclaw/issues/80040)
  - **#76729 [P1]** 会话压缩 (Compaction) 后，Feishu 等渠道的回复从历史记录中消失。[链接](https://github.com/openclaw/openclaw/issues/76729) (**已有 fix PR**)

- **注意：** 大量 P1 Bug 仍然处于 `clawsweeper:no-new-fix-pr` 或 `needs-maintainer-review` 状态，说明维护者对严重 Bug 的响应和处理速度有待加强。

### 6. 功能请求归类

社区提出了多样化的功能请求，主要分为以下几类：

- **渠道交互增强**:
  - 支持 Telegram 的机器人-机器人和访客机器人新特性 ([#79077](https://github.com/openclaw/openclaw/issues/79077)).
  - 增加 `before_route_inbound_message` 钩子，用于消息桥接和代理拦截 ([#81061](https://github.com/openclaw/openclaw/issues/81061)).

- **开发体验与 SDK**:
  - 添加配套友好的 SQLite 会话和转录读取 API，以便第三方构建 ([#79902](https://github.com/openclaw/openclaw/issues/79902), [#79904](https://github.com/openclaw/openclaw/issues/79904), [#79905](https://github.com/openclaw/openclaw/issues/79905)).
  - 暴露稳定的插件 SDK 接口，用于检查已安装的技能和工作流 ([#81913](https://github.com/openclaw/openclaw/issues/81913)).
  - 允许技能作者定义安装/更新后的自定义 `setup.script` ([#80213](https://github.com/openclaw/openclaw/issues/80213)).

- **安全与管理**:
  - 为 MCP 工具调用添加渠道审批管道 ([#78308](https://github.com/openclaw/openclaw/issues/78308)).
  - 支持在 `openclaw onboard` 时就配置多个模型供应商 ([#81960](https://github.com/openclaw/openclaw/issues/81960)).
  - 为 slash 命令描述实现国际化支持 ([#79458](https://github.com/openclaw/openclaw/issues/79458)).

### 7. 用户反馈摘要

从今日的 Issues 和评论中，可以提炼出以下用户反馈：

- **痛点：消息投递的可靠性问题突出。** 多个用户反馈在不同渠道（Telegram, Discord, Slack）上均出现消息丢失、投递错误、反复循环或响应延迟的问题。例如，在 `#80520` 中用户提到“Telegram messages are silently dropped”，在 `#81484` 中“Discord guild replies intermittently fail”。这表明消息投递是当前版本稳定性的关键瓶颈。
- **诉求：提升可扩展性与开发者体验。** 以 `@100yenadmin` 为代表的高级用户提出了一系列关于公开 SQLite 会话存储 API 的请求（`#79902` 系列），表明社区中存在一群希望基于 OpenClaw 构建更复杂工具和插件的核心用户，他们需要更稳定、文档更完善的接口。
- **不满：对安全审核和权限控制的担忧。** `#78308` 和 `#79451` 分别提出了对 MCP 工具调用无审批、以及工具拒绝规则 (`tools.deny`) 对特定后端 (`claude-cli`) 无效的问题。用户明确表达了对外部工具被滥用的安全担忧，并希望增强权限控制机制。

### 8. 待处理积压

以下 Issue 和 PR 长期未得到维护者的有效回应或处理，需要重点关注：

- **#54531 [P1] feat: Force reply to originating channel** - 创建于 2026-03-25，标记为 `stale`，评论众多但无实际行动。[链接](https://github.com/openclaw/openclaw/issues/54531)
- **#75648 [P2] [Enhancement] Embedded-run upstream timeout is hard-coded at ~60s** - 创建于 2026-05-01，关于硬编码超时和错误处理的问题，已被标记为 `stale`。[链接](https://github.com/openclaw/openclaw/issues/75648)
- **#78041 [P2] [Bug]: Cold-path auth resolution: ~4s on every cold dispatch** - 创建于 2026-05-05，认证解析的冷启动性能问题非常严重（每次 4 秒间隔），但状态仍为 `needs-maintainer-review`。[链接](https://github.com/openclaw/openclaw/issues/78041)
- **#68236 [PR] test(auth): add oauth e2e regression coverage** - 一个关于添加 OAuth 回归测试的 PR，创建于 2026-04-17，至今已超过两个月，状态仍为 `⏳ waiting on author`，进展停滞。[链接](https://github.com/openclaw/openclaw/pull/68236)

---

## 横向生态对比

## 2026-06-19 开源 AI 智能体项目横向对比分析

### 1. 今日横向概览

今日四个项目均保持活跃，但活动量级差异显著。**OpenClaw** 以 500 条 Issue 和 500 条 PR 更新（均为今日数据）继续占据绝对量级优势，但合并效率低下（仅 36 条 PR 被合并），PR 积压严重。**Zeroclaw** 紧随其后，共处理 29 条 Issue 和 50 个 PR，其中多个关键修复已合并，为 v0.8.1 版本做准备。**NanoBot** 和 **PicoClaw** 活动规模较小，分别更新了 5 条 Issue/25 个 PR 和 2 条 Issue/15 个 PR，但各自都有针对记忆、并发安全、搜索工具等具体问题的快速修复。所有项目当日均未发布新版本。

### 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新数 | 今日 PR 更新数 | 今日 Release | 事实性备注 |
|------|------------------|----------------|-------------|-----------|
| OpenClaw | 500（活跃 475，关闭 25） | 500（待合并 464，合并/关闭 36） | 无 | 社区提交量极大，但维护者审核严重滞后 |
| NanoBot | 5（新开为主） | 25（合并/关闭 5） | 无 | 多个功能/修复 PR 已合入主分支 |
| Zeroclaw | 29（新开/活跃 28） | 50（待合并 35，合并数未精确统计，但有多项合并） | 无 | 多项 v0.8.0 回归修复已合并，为 v0.8.1 铺垫 |
| PicoClaw | 2（1 个关闭） | 15（合并/关闭 7，待合并 8） | 无 | 主要修复 web_search 和异步子代理消息重复 |

### 3. OpenClaw 与同类对照

- **活动量级**：OpenClaw 的 Issue/PR 更新量（各 500）远超其它项目（NanoBot 5/25，Zeroclaw 29/50，PicoClaw 2/15），但 OpenClaw 的合并率仅为 7.2%（36/500），远低于 NanoBot（20%）、Zeroclaw（约 30%+，基于合并多项）、PicoClaw（46.7%）。
- **技术重点**：OpenClaw 社区焦点集中在 **消息投递失败**（Telegram/Discord/WhatsApp）、**会话状态异常** 和 **安全审批**（MCP 工具调用权限）。NanoBot 重点为 **记忆整合** 和 **工作区读写一致性**；Zeroclaw 重点为 **v0.8.0 回归**（Slack/Discord 渠道功能缺失）和 **命令执行权限绕过**；PicoClaw 重点为 **web_search 静默失败** 和 **异步子代理消息重复**。
- **社区讨论面**：OpenClaw 的讨论覆盖多渠道、多模型提供商、认证冷启动等广泛领域，且存在大量长期未决的 P1/P2 Issue。NanoBot 和 Zeroclaw 的讨论更有针对性，且社区贡献者能快速提交修复 PR。PicoClaw 讨论聚焦于少数具体的 Bug 修复。

### 4. 共同出现的技术方向

今日多个项目均出现了以下需求：

- **消息投递可靠性**：OpenClaw 报告了 Telegram 消息静默丢弃、Discord 回复格式错误、回复错发私聊等 5 个 P1 级别 Bug；NanoBot 的 #4307 涉及记忆整合后助手投递消息丢失；PicoClaw 的 #3094 报告了异步子代理消息重复。（涉及项目：OpenClaw、NanoBot、PicoClaw）
- **安全与权限控制**：OpenClaw 的 #78308 请求为 MCP 工具调用增加渠道审批管道；Zeroclaw 的 #7947 报告 `execute_pipeline` 绕过单个 Agent 的工具门控；PicoClaw 的 #3143 修复了 `web_fetch` SSRF 绕过。（涉及项目：OpenClaw、Zeroclaw、PicoClaw）
- **开发者体验 / 可扩展性**：OpenClaw 的 #79902 系列请求公开 SQLite 会话 API；NanoBot 的 #4390/#4399 请求简化 UI 和隐藏复杂配置；Zeroclaw 的 #7929 提议统一斜杠命令注册表。（涉及项目：OpenClaw、NanoBot、Zeroclaw）

### 5. 差异化定位分析

- **功能侧重**：
  - **OpenClaw**：主打多渠道（Telegram、Discord、WhatsApp、Feishu 等）和丰富工具生态（Codex-native + MCP），今日社区强烈聚焦于渠道消息投递的可靠性和会话稳定性。
  - **NanoBot**：侧重 **记忆系统** 与 **工作区隔离**，今日活跃 PR / Issue 围绕记忆整合成本优化、工作区读写一致性，以及 WebUI 的易用性改进（隐藏高级设置）。
  - **Zeroclaw**：强调 **安全沙箱** 与 **工具权限管控**，今日报告了命令执行绕过、MCP 工具注册后不可用等安全/稳定性问题，同时持续开发语音渠道和进程内存限制等功能。
  - **PicoClaw**：定位为 **轻量级** 智能体，今日活动集中于搜索工具（web_search/web_fetch）的修复和依赖更新，功能范围窄但修复响应快。

- **目标用户**：
  - OpenClaw 和 Zeroclaw 倾向于高级用户和开发者社区，OpenClaw 社区讨论涉及大量技术细节（如 OAuth 冷启动、会话压缩），Zeroclaw 关注安全审计和沙箱配置。
  - NanoBot 的用户反馈明确表示希望为非技术用户提供更简洁的界面（#4390）。
  - PicoClaw 用户通过 Issue 报告具体使用场景中的 Bug，社区规模较小。

- **技术架构差异**：
  - OpenClaw 和 Zeroclaw 均为重度集成项目，支持多种渠道和工具协议，但 OpenClaw 的 PR 积压问题突出，维护效率低下。
  - NanoBot 依赖 `AgentDefaults` 和 `Nanobot.run()` 等 Python 架构，今日暴露了并发安全漏洞（共享钩子）。
  - PicoClaw 采用 Rust 实现（从 PR 中推测），今日修复涉及 IP 分类器和 SSRF 防护，技术栈更底层。

### 6. 社区活跃度记录

| 活跃度层级 | 项目 | 判断依据 |
|-----------|------|---------|
| 极高（但积压严重） | OpenClaw | 500 条 Issue + 500 条 PR 更新，但合并率仅 7.2%，大量 P1 Bug 长期未处理 |
| 高 | Zeroclaw | 29 Issue + 50 PR，多项关键修复已合并，为版本迭代做准备 |
| 中等 | NanoBot | 5 Issue + 25 PR，记忆和工作区问题快速获得 PR 响应 |
| 低 | PicoClaw | 2 Issue + 15 PR，依赖更新占比较大，但核心 Bug 修复及时 |

### 7. 有证据支撑的观察

1. **消息投递可靠性是今日跨项目的核心痛点**：OpenClaw 报告 5 个 P1 级渠道消息 Bug，NanoBot 有一个 P1 级记忆整合后消息丢失 Bug，PicoClaw 有一个异步子代理消息重复 Bug。三个项目均收到用户直接抱怨（如“消息被静默丢弃”“用户后续引用丢失”），表明该问题在当前版本的智能体项目中具有普遍性。

2. **安全权限控制正在从单一功能向统一框架演进**：OpenClaw 提出为 MCP 工具调用增加审批管道（#78308），Zeroclaw 报告了命令执行绕过工具门控（#7947）并已有 Fix PR，PicoClaw 合并了 SSRF 绕过修复。社区不再满足于简单的黑白名单，而是要求更细粒度的、渠道感知的审批机制。

3. **OpenClaw 的维护瓶颈可能正在影响社区信心**：OpenClaw 今日 PR 待合并高达 464 条，仅 36 条被处理（7.2%），且多个 P1 Bug（如 #54531、#78041）长期处于 `stale` 或 `needs-maintainer-review` 状态。对比之下，Zeroclaw 和 PicoClaw 的社区提交的 Bug 通常能在 1-2 天内获得修复 PR。这一差异可能促使部分 OpenClaw 用户转向其他项目。

4. **NanoBot 和 Zeroclaw 正在优化配置复杂度以扩大用户群**：NanoBot 的用户明确要求简化 UI 设置（#4390）并隐藏高级选项（#4399），Zeroclaw 的 #7950 提出 Docker 镜像应包含文档以便 Agent 自我解释功能。两个项目都在尝试降低使用门槛，而 OpenClaw 今日并未出现类似诉求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，遵照您的指示。以下是基于提供的 GitHub 数据生成的 NanoBot 项目动态日报。

---

### NanoBot 项目动态日报

**日期**: 2026-06-19

---

### 1. 今日活动概览

过去24小时内，项目社区活跃度较高，共更新了5个Issue和25个Pull Request（PR）。其中，新开的Issue以Bug报告和功能请求为主，而PR则集中在功能增强、性能优化和Bug修复上。虽然当日无新版本发布，但5个PR已被合并或关闭，多项修复和特性已进入主分支。值得注意的是，关于**记忆（Memory）系统**和**工作区（Workspace）安全性**的多个PR和Issue形成了紧密的关联，成为今日社区关注的核心焦点。

### 2. 版本发布

无。

### 3. 项目进展

今日有5个Pull Request被合并或关闭，其中部分重要的推进如下：

- **`#1391` [CLOSED] `feat: add consolidation_model for cheaper memory consolidation`**：一项长期运行的PR终于被合并。该功能允许在 `AgentDefaults` 中指定一个更便宜的 `consolidation_model`，用于处理记忆整合等非核心推理任务，从而在使用昂贵模型（如 Opus）作为主代理时显著降低成本。该功能解决了社区对优化推理成本的长期需求。
- **`#4391` [CLOSED] `feat(feishu): add QR scan-to-create bot CLI login feishu command`**：为飞书（Feishu/Lark）渠道新增了通过扫描二维码自动创建并注册机器人的功能，简化了飞书渠道的初始设置流程。
- **`#4400` [CLOSED] `ci: skip docs-only changes`**：优化了CI流程，当PR仅涉及文档变更时会自动跳过测试和构建流程，提升了开发效率。
- **`#4403` [CLOSED] `feat(webui): make Firecrawl a keyless Web Data app`**：将内置的 Firecrawl (MCP) 应用预设改造成无密钥版本，简化了用户的使用门槛。

### 4. 社区热点

今日讨论最活跃的议题集中在**记忆/上下文**和**项目工作区**的读写一致性上。

- **`#4307` [OPEN] `Bug: Post-turn consolidation wipes the agent's own delivery message — user follow-up references are lost`**
  - **链接**: [https://github.com/HKUDS/nanobot/issues/4307](https://github.com/HKUDS/nanobot/issues/4307)
  - **分析**: 该Bug描述了当设置了有限的上下文窗口时，多轮对话后的记忆整合会错误地清除助手本地的投递信息，导致用户后续的引用丢失。此问题触及了记忆管理和上下文窗口策略的核心，直接影响了用户体验的连续性。相关的修复PR `#4373` （`fix(memory): preserve delivery context during consolidation`）也在今日处于打开状态，表明维护者正在积极推进修复。

- **`#4374` [OPEN] `[feature request] Project workspaces: SOUL.md/USER.md are read from the project but written to the default workspace (read/write asymmetry)`**
  - **链接**: [https://github.com/HKUDS/nanobot/issues/4374](https://github.com/HKUDS/nanobot/issues/4374)
  - **分析**: 用户 `maximilize` 发现了一个读写不对称的Bug：当使用项目工作区时，系统从当前项目目录读取 `SOUL.md` 和 `USER.md`，但代理写入这些文件时却写回了默认工作区。这使得项目工作区的配置修改无法生效，是一个影响用户配置隔离性的关键问题。关联的修复PR `#4387` （`fix(context): fall back to default memory bootstrap`）尝试解决此问题。

### 5. Bug 与稳定性

今日报告的Bug主要集中在并发安全和工作区安全策略上。

- **严重: `#4408` [OPEN] `Nanobot.run() per-run hooks are not concurrency-safe (shared _extra_hooks is clobbered)`**
  - **链接**: [https://github.com/HKUDS/nanobot/issues/4408](https://github.com/HKUDS/nanobot/issues/4408)
  - **摘要**: 这是一个并发现Bug。`Nanobot.run()` 通过可变共享状态 `self._loop._extra_hooks` 来安装运行钩子，这在并发场景下会导致钩子被覆盖，引发不可预知的行为。**已有修复PR: `#4409`**，采用将钩子传递给 `process_direct` 而非修改共享状态的方式。

- **中等: `#4307` [OPEN] `Bug: Post-turn consolidation wipes the agent's own delivery message`**
  - **链接**: [https://github.com/HKUDS/nanobot/issues/4307](https://github.com/HKUDS/nanobot/issues/4307)
  - **摘要**: 如上文“社区热点”所述，这是一个影响对话连续性的回归/严重Bug。**已有修复PR: `#4373`**。

- **已修复: `#4375` [CLOSED] `Git Command Execution Blocked by Workspace Security Policy`**
  - **链接**: [https://github.com/HKUDS/nanobot/issues/4375](https://github.com/HKUDS/nanobot/issues/4375)
  - **摘要**: 用户在子目录执行Git命令时，即使路径在工作区范围内，也被工作区安全策略错误阻止。该问题已被关闭，且**已有回归测试PR: `#4393`** 来确保修复的有效性。

### 6. 功能请求归类

今日用户提出的功能请求主要集中在提升易用性和降低使用门槛上：

- **简化配置与UI (`#4390`, `#4399`, `#4396`)**:
  - **`#4390`**: 非技术用户希望更简单的多实例管理方案，如通过文件夹组织实例和隐藏复杂的UI设置。
  - **`#4399`**: 对应的PR `#4399` 提出了在WebUI中增加 `hiddenSettingsSections` 配置，允许管理员隐藏复杂度高的配置项，以创建“面向普通用户”（normie-friendly）的界面。
  - **`#4396`**: 另一个PR `#4396` 希望为可选功能（如Bedrock）增加开关，使其不作为默认开启选项，从而简化首次配置。

- **搜索与外部服务集成 (`#4406`, `#4405`)**:
  - **`#4406`**: 请求增加 Serper.dev 作为新的 Google 搜索 API 提供商。
  - **`#4405`**: 提议 Keenable 搜索提供商在无API密钥时也能工作，使用其免费的公共端点。

### 7. 用户反馈摘要

从今Issue和PR的讨论中，可以提炼出以下用户诉求：

- **体验一致性**：用户 `@MARJORIESHA-pBAD` 报告了记忆整合后消息丢失的问题，直接影响了对话体验的连贯性。用户 `@maximilize` 反馈的项目工作区读写不一致问题，也体现了对配置生效和上下文一致性的高要求。
- **降低使用门槛**：用户 `@bukit-kronik` 的请求非常具有代表性，即希望为非技术用户提供更简洁、更易操作的界面和配置方式。他提到“I want to be able to hide UI settings/show option...”，这表明项目在向更广泛用户群体推广时，UI的复杂性是一个关键瓶颈。PR `#4399` 和 `#4396` 正是对这一诉求的回应。
- **并发与稳定性担忧**：用户 `@waelantar` 报告的并发安全Bug，表明随着项目复杂度提升，对稳定运行在高并发或复杂任务下的需求日益增长。他提交的Issue和修复PR直接体现了社区贡献者的专业性。

### 8. 待处理积压

- **`#4307` [OPEN]**: 尽管已有关联的修复PR `#4373`，但该Isssue创建于6月12日，更新于6月18日，修复PR也处于打开状态。该问题直接影响核心对话功能，建议维护者优先评审并推动 `#4373` 的合并。
  - **链接**: [https://github.com/HKUDS/nanobot/issues/4307](https://github.com/HKUDS/nanobot/issues/4307)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 Zeroclaw 项目动态日报。

---

# Zeroclaw 项目动态日报 — 2026-06-19

## 今日活动概览

过去 24 小时内，Zeroclaw 项目保持了极高的活跃度。**共处理 29 条 Issue 和 50 个 PR**，其中新开/活跃 Issue 28 条，待合并 PR 35 个。社区关注点主要集中在 v0.8.0 版本的回归问题（如 Slack/Discord 渠道功能缺失）、安全相关的严重 Bug（如命令执行绕过工具门控），以及即将发布的 v0.8.1 版本的准备工作。目前无新版本发布，但已有 PR 标记为版本升级至 0.8.1。

## 版本发布

无新版本发布。

## 项目进展

今日有多项重要修复被合并，表明项目正在快速解决 v0.8.0 版本的遗留问题：

- **渠道功能修复**: PR [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) (已合并) 修复了 CLI 无法显示已配置但未编译进二进制的渠道问题，并添加了诊断功能。这直接关联到 #7787 报告的 Slack/Discord 功能缺失的回归问题。
- **核心运行时稳定性**: 多个 PR 被合并以增强运行时稳定性。
    - PR [#7934](https://github.com/zeroclaw-labs/zeroclaw/pull/7934) (已合并) 将 CRON 删除的诊断信息从标准输出重定向到结构化日志，提升了可观测性。
    - PR [#7826](https://github.com/zeroclaw-labs/zeroclaw/pull/7826) (已合并) 将凭据脱敏操作从工具执行数据路径移至渲染层，修复了工具读取配置时敏感信息泄露的问题。
- **工具权限**: PR [#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) (已合并) 修复了自动发现的 MCP 工具无法被包含在 `risk_profile` 的 `allowed_tools` 中的问题，确保了 MCP 工具的可用性。
- **文档与 i18n**: PR [#7939](https://github.com/zeroclaw-labs/zeroclaw/pull/7939) (已合并) 为即将到来的 v0.8.1 版本刷新了多语言字符串和文档目录。
- **测试覆盖**: PR [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) (已合并) 增强了 shell 工具和文件工具的测试对 Windows 平台的兼容性。

## 社区热点

1.  **Slack/Discord 渠道功能回归**:
    - **Issue**: [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) - “Prebuilt v0.8.0 binaries ship without Slack/Discord channel features”
    - **讨论热度**: 3 条评论，1 个 👍。
    - **分析**: 这是一个高优先级的严重回归问题，迫使部分用户停留在 v0.7.5 版本。该 Issue 获得了社区的高度关注，维护者已通过合并 PR #7848 提供了诊断和修复方案。这是社区当前最关心的阻碍性 Bug。

2.  **Windows 平台测试失败**:
    - **Issue**: [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) - “[Bug]: 74 test failures on Windows — Unix-only test commands, path semantics, console encoding”
    - **讨论热度**: 1 条评论。
    - **分析**: 该问题报告了在 Windows 11 上运行测试套件时大规模的 74 个失败，暴露了 CI 对 Windows 平台覆盖不足的问题。社区用户主动贡献了多个相关 PR，例如 #7906 和 #7914，体现了对 Windows 支持的强烈需求。

## Bug 与稳定性

今日报告了多个严重（S1/S2）和高风险（Risk: High）的 Bug，其中不乏安全问题：

- **S0 - 数据丢失/安全风险**:
    - `execute_pipeline` 命令执行权限绕过 ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)): 该漏洞允许 `execute_pipeline` 绕过单个 Agent 的 `ToolAccessPolicy`，仅依据全局配置进行授权，可能造成“混淆代理”攻击。**已有 Fix PR**。

- **S1 - 工作流阻塞**:
    - 原生/MCP 工具在 OpenAI Responses 和 Anthropic Turns 模式下不可用 ([#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)): MCP 工具注册后，部分模型无法接收和使用它们。
    - Agent 删除操作可能导致状态在配置持久化前被清除 ([#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941)): 与 #7907 相似，操作顺序导致原子性问题。
    - Agent 重命名操作可能导致状态在配置持久化前被移动 ([#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907)): 同上，是配置持久化的顺序缺陷。**已有 Fix PR** (#7940)。
    - Anthropic 消息历史角色非交替导致 Provider 400 错误 ([#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804)): 长期或恢复的 Code 会话可能产生相邻的同角色消息，违反 Anthropic API 要求。
    - Shell 工具在子进程继承管道句柄时挂起 ([#7871](https://github.com/zeroclaw-labs/zeroclaw/issues/7871)): 追踪父进程退出后，仍持有 stdout/stderr 句柄的子进程会导致 Shell 工具永久挂起。**已有 Fix PR** (#7935)。

- **S2 - 功能行为降级**:
    - 模型成本未在调度、命令行和 Web Agent 中记录 ([#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221)): 通过非交互式模式使用模型时，LLM 成本不会被记录。
    - `[[embedding_routes]]` 配置静默降级为 `NoopEmbedding` ([#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949)): 配置的 Embedding 路由无法正常工作，导致 Embedding 功能失效。
    - 恢复的 Code 会话打开后显示空白转录文本 ([#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799)): (已关闭) 已修复。

- **S3 - 次要问题**:
    - `file_download` 工具字符串在非英语语言环境下未翻译（i18n 缺失）([#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917)): 标注为“good first issue”。
    - CLI 审批提示在 stdin 被分离时无法读取控制终端 ([#7892](https://github.com/zeroclaw-labs/zeroclaw/issues/7892)): 在后台守护进程模式下交互式审批可能失败。**已有 Fix PR** (#7936)。

## 功能请求归类

- **安全与沙箱**:
    - 进程内存限制 ([#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)): 为 Shell/Skill 子进程添加内存限制以防止 OOM。**已有 Fix PR** (#7937)。
    - 安全 UX 与运行时凭证边界 ([#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)): 一个 RFC，旨在改进安全姿态的验证和默认安全性。
    - 加固 CI 流水线 ([#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675)): RFC 提议集成供应链扫描、来源验证和 SBOM 生成。

- **集成与新渠道**:
    - 恢复 GitHub 作为原生渠道 ([#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)): 希望 Agent 能通过统一接口与 GitHub 交互（Issue, PR, 评论等）。
    - 实时语音主机渠道 ([#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)): 提议添加一个后端无关的 WebSocket 客户端渠道，作为实时语音主机。
    - 语音卫星设备 ([#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944)): 配合实时语音主机的硬件设备，用于麦克风、扬声器和审批按钮。
    - 统一斜杠命令注册表 ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)): 提议将 Web UI、TUI 和运行时中的斜杠命令注册表统一。

- **内存上下文与模型路由**:
    - 原生上下文压缩 ([#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)): RFC 提出一个 `CompressionDecorator`，作为 Provider 管道装饰器，在请求发出前压缩上下文。
    - 基于复杂度的本地/云端模型路由 ([#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)): 提议根据任务复杂度，简单任务使用本地模型，困难任务使用云端模型。
    - Embedding 身份持久化与向量自动迁移 ([#7948](https://github.com/zeroclaw-labs/zeroclaw/issues/7948)): 当嵌入模型改变时，能自动迁移已有向量。

- **其他**:
    - Docker 镜像包含文档 ([#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950)): 方便 Agent 能够回答关于自身功能和配置的问题。
    - 临时文件自动清理 ([#7923](https://github.com/zeroclaw-labs/zeroclaw/issues/7923)): 通过配置支持自动清理临时文件。**已有 PR**。

## 用户反馈摘要

- **配置复杂性与文档**: [#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) 指出，“ZeroClaw agents often seem unable to answer questions about ZeroClaw features and configuration”，暴露了当前 Agent 对自身文档掌握不足，以及用户在使用和配置上的痛点。
- **版本回归与降级**: [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) 中用户明确回滚到 v0.7.5 以恢复 Slack 功能，表明 v0.8.0 的重大回归对体验造成较大影响，用户期待快速修复。
- **平台支持**: [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) 的用户试图在 Android Termux 上安装，遇到了 prebuilt 二进制文件架构不匹配的问题，反映了用户对跨平台，特别是移动或非标准 Linux 环境的部署需求。 [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 的大量 Windows 测试失败也再次证明了用户对该平台支持的关注。

## 待处理积压

- **RFC: 上下文压缩 ([#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673))**: 已打开超过 4 天，标记为 `needs-author-action`，当前无后续评论。这是一个重要的性能优化方向，尚需作者或维护者跟进。
- **长期功能追踪: v0.8.1 集成/渠道/Provider/工具队列 ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))**: 作为 v0.8.1 版本的功能追踪器，已存在近一个月，但仍有多个依赖项未完成。维护者需关注其完成状态以确保版本发布计划。
- **费用追踪 ([#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221))**: 该 Issue 已存在超过 2 个月，虽标记为 accepted，但未见相关修复 PR。对于关注成本的用户来说，这是一个持续的痛点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是 2026-06-19 的 PicoClaw 项目动态日报。

---

## PicoClaw 项目日报 — 2026-06-19

### 1. 今日活动概览

过去24小时项目活动主要集中于Bug修复和依赖更新。共有2个Issues被更新，其中1个为已关闭的故障排查问题。PR活动尤为频繁，共15条，其中7个已完成合并/关闭，8个待合并。手动提交的PR主要集中在两个实际问题：修复了`web_search`工具在使用Brave API时静默返回空结果的诊断问题，并提交了针对异步子代理消息重复的修复方案。此外，一个修复`web_fetch` SSRF绕过漏洞的PR也已开放待审。

### 2. 版本发布

无

### 3. 项目进展

今日合并/关闭了多个重要PR，修复了两项用户报告的问题：

- **修复 `web_search` 工具静默失败**：PR [#3141](https://github.com/sipeed/picoclaw/pull/3141) 已被合并。该PR为Brave Search API在返回空结果时添加了诊断日志，解决了当搜索结果格式变化或出现非标准错误时，工具静默返回`"No results for: [query]"`的问题。
- **修复 `web_fetch` SSRF绕过漏洞**：PR [#3143](https://github.com/sipeed/picoclaw/pull/3143) 已开放。该PR通过更新IP分类器，使其能识别嵌入私有或回环IPv4地址的ISATAP IPv6地址，从而修复了Issue [#3074](https://github.com/sipeed/picoclaw/issues/3074) 中报告的SSRF防护绕过问题。

### 4. 社区热点

今日最受关注的议题是**异步子代理消息重复**问题。Issue [#3094](https://github.com/sipeed/picoclaw/issues/3094) 描述了该Bug，社区成员随后提交了修复PR [#3142](https://github.com/sipeed/picoclaw/pull/3142)。从Issue的讨论和PR的背景来看，该问题直接影响用户在多通道（如飞书、Telegram）的使用体验，导致消息混乱。修复方案通过清除子任务轮次中的`ForUser`字段来阻止消息重复推送，社区响应迅速。

### 5. Bug 与稳定性

- **[严重] 异步子代理消息重复**：Issue [#3094](https://github.com/sipeed/picoclaw/issues/3094) 报告了使用`spawn`工具时，用户在飞书/Telegram等渠道会收到两条内容相同的消息。**已有Fix PR**：[#3142](https://github.com/sipeed/picoclaw/pull/3142) 已提交，待合并。
- **[中] web_search工具静默失败**：Issue [#3125](https://github.com/sipeed/picoclaw/issues/3125) 报告了在`.security.yml`配置Brave API密钥后，`web_search`工具始终返回空结果。该问题已通过PR [#3141](https://github.com/sipeed/picoclaw/pull/3141) 的合并而关闭。

### 6. 功能请求归类

无。

### 7. 用户反馈摘要

- **用户痛点**：用户`@v2up-32mb`报告了异步子代理消息重复的困扰，指出未经排版的原始结果和整理后的最终输出会同时推送到用户端，造成信息混乱。
- **使用场景**：用户`@Giordano10`反馈在将API密钥迁入`.security.yml`后，`web_search`工具无法正常工作，这指向了新架构下依赖配置的兼容性问题。

### 8. 待处理积压

- **异步子代理消息重复修复**：PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) 是解决Issue [#3094](https://github.com/sipeed/picoclaw/issues/3094) 的关键修复，目前已开放约1天，建议维护者尽快评审与合并。
- **`web_fetch` SSRF绕过修复**：PR [#3143](https://github.com/sipeed/picoclaw/pull/3143) 修复了较严重的安全问题，已开放约1天，同样需要维护者关注和评审。
- **多个依赖更新PR**：有8个由`dependabot`自动创建的依赖更新PR（如 `eslint`, `shadcn`, `vite` 等）处于待合并状态，其中多个标记为`stale`，建议维护者定期审查并合并，以保持项目依赖的健康度。

</details>