# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-22 00:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的 OpenClaw 项目 2026-06-22 动态日报。

---

# 2026-06-22 OpenClaw 项目动态日报

## 今日活动概览
过去 24 小时项目活动非常活跃，共产生 500 条 Issue 更新和 500 条 PR 更新。其中，新开/活跃的 Issue 共 478 条，待合并的 PR 共 479 条，反映出社区在反馈问题和贡献代码方面都保持了极高的热情。发布了 2 个新版本，包括一个 Beta 版 (`v2026.6.10-beta.1`) 和一个小版本更新 (`v2026.6.9`)，主要聚焦于修复会话（Session）状态一致性、子代理（Subagent）交付可靠性以及消息渠道（如 Telegram）的表现问题。此外，社区报告了一个严重的回归问题：升级到 v2026.6.9 后，Memory 存储路径被静默迁移，导致用户需要重新嵌入（re-embed）数据。

## 版本发布
### `v2026.6.10-beta.1`
- **关键改进**: 此 Beta 版本旨在提升系统代理（Agent）轮次和会话状态的可靠性。
    - **修复**: 保留了待处理的子代理完成通知，确保聊天历史记录不为空，维持了媒体索引对齐，重新启动了休眠的后续任务，并一致性地解决了压缩模型别名的问题。
    - **链接**: [Release v2026.6.10-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.10-beta.1)

### `v2026.6.9`
- **关键改进**: 此版本显著增强了 Telegram 渠道的消息交付能力。
    - **Telegram 优化**: 现在支持发送富 HTML 消息，保留富 Markdown 和贴纸路径，更忠实地渲染进度草稿和命令输出，安全地标准化 HTML 表格，并确保提及和 spooled 处理器在正确的交付路径上。
    - **破坏性变更/迁移提醒**: 社区报告了一个严重的回归 (#95495)，此版本静默地将 Memory 向量存储从 `~/.openclaw/memory/main.sqlite` 迁移到 `~/.openclaw/agents/main/agent/openclaw-agent.sqlite`，且没有提供自动迁移路径，导致用户需要手动触发长时间的完整重新嵌入过程。
    - **链接**: [Release v2026.6.9](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9)

## 项目进展 (Recent PR Merges/Closes)
- **修复重试成功率状态同步** (`#95618`): 修复了当后台工作进程在遇到暂时性生命周期错误后成功完成时，可能出现的状态同步问题。此 PR 已关闭，有助于减少误报的失败状态。
- **自动化 PR 审查与修复流水线** (`#68936`): 新增了一个基于 Claude Agent SDK 的自动化修复管道，能够自动处理审查意见，并包含一个 Windows 后台守护进程，以优化开发流程。此 PR 已关闭。
- **Telegram 进度草案渲染优化** (`#95007`): 修复了 Telegram 上进度草稿的渲染问题，现在能够保持关键预览文本的可读性，同时利用原生的 HTML 传输通道。

## 社区热点
- **会话写锁超时导致消息交付阻塞** (`#86538`，12条评论): 这是当前讨论最激烈的问题。用户报告会话 JSONL 写锁超时会阻塞主、cron 和子代理的消息处理通道，且诊断信息不足。
    - **链接**: [Issue #86538](https://github.com/openclaw/openclaw/issues/86538)
- **Telegram 代理重复回复** (`#86519`，10条评论): 用户反馈在更新到 v2026.5.20 后，Telegram 上的代理对每条消息会发送 2-10 次重复回复。后续版本虽有所缓解，但问题并未完全解决，社区正积极讨论根因。
    - **链接**: [Issue #86519](https://github.com/openclaw/openclaw/issues/86519)
- **Memory 存储静默迁移引发数据风险** (`#95495`，6条评论): 社区对 v2026.6.9 版本中 Memory 存储位置被静默迁移且无迁移工具表示强烈担忧，认为这是一个严重的回归，可能导致用户数据丢失或服务中断。
    - **链接**: [Issue #95495](https://github.com/openclaw/openclaw/issues/95495)

## Bug 与稳定性 (按严重程度排列)
- **[P1] Memory 存储静默迁移与数据重嵌入** (`#95495`): v2026.6.9 的回归问题，存储路径被静默改变，强制用户进行完整重嵌入。目前无 Fix PR。
- **[P1] Telegram 代理重复回复** (`#86519`): 用户收到 2-10 条重复消息的回归问题，严重影响使用体验。目前无 Fix PR。
- **[P1] Telegram 轮询陷入静默崩溃循环** (`#93375`): 网络超时后 Telegram 轮询进程会静默退出，健康监控无法恢复，导致系统不可用。目前无 Fix PR。
- **[P1] 隔离 Cron 任务始终失败** (`#91363`): 隔离的 Cron 任务（`sessionTarget: “isolated”`）在执行模型调用时始终超时或失败，LLM 请求从未发送到提供商。目前无 Fix PR。
- **[P1] 子代理完成交付丢失** (`#92076`, `#92433`): 当请求会话已失效或子代理完成时请求代理的轮次已结束，子代理的完成结果可能被静默丢弃。目前无 Fix PR。
- **[P1] 会话模型快照不刷新** (`#92415`): 使用 `/model` 切换模型后，会话内部保存的模型快照未同步更新，影响后续推理路径。目前无 Fix PR。

## 功能请求归类
- **增强预压缩内存刷写** (`#90354`, [链接](https://github.com/openclaw/openclaw/issues/90354)): 用户请求为预压缩的内存刷写操作增加追加大小校验、写入后验证和静默失败处理等硬性防护措施。
- **话题会话家族** (`#90916`, [链接](https://github.com/openclaw/openclaw/issues/90916)): 用户提议为聊天助手引入“话题会话”模型，允许一个助手拥有多个隔离上下文的话题通道，同时共享记忆。
- **可配置默认 Agent ID** (`#51762`, [链接](https://github.com/openclaw/openclaw/pull/51762)): 社区有 PR 提议允许用户覆盖默认的 `main` 代理 ID，以支持单一自定义名称的代理，避免产生幽灵路径。
- **梦境日记多语言支持** (`#95620`, [链接](https://github.com/openclaw/openclaw/pull/95620)): 一个待审 PR 为 Dream Diary 功能添加了 `dreaming.language` 配置项，允许用户以非英语语言生成梦境记录。

## 用户反馈摘要
- **数据迁移痛点**: 用户 `@fenglanhua` 在升级到 v2026.6.9 后遭遇了数据存储路径的静默迁移，导致需要重新嵌入所有 Memory 文件，严重影响了正常使用，反映了用户对升级过程透明度和数据安全的高度关切。 ([#95495](https://github.com/openclaw/openclaw/issues/95495))
- **消息重复与丢失**: 用户 `@w3-design1` 和其他 Telegram 用户对升级后出现的消息重复问题感到困扰，同时部分用户（如 `@Enominera`）遭遇了 Gateway 重启后消息恢复机制因渠道未就绪而导致的静默消息丢失。 ([#86519](https://github.com/openclaw/openclaw/issues/86519), [#91212](https://github.com/openclaw/openclaw/issues/91212))
- **低资源运行体验**: 用户 `@abenarroch` 在 DigitalOcean 低配 Droplet 上运行 OpenClaw 时，因后台任务执行效率低、Cron 唤醒失败等问题，最终选择放弃使用，表明项目在低资源环境下的性能优化仍有提升空间。 ([#88087](https://github.com/openclaw/openclaw/issues/88087))

## 待处理积压
- **`[Bug]: Local assistant attachments shown as “Unavailable — Outside allowed folders” despite correct server config`** (`#67915`, 2026-04-17): 一个持续了两个月的 Bug，本地媒体附件（如 TTS 音频）即使在服务器配置正确的情况下，仍被错误地标记为“不允许访问”。需要维护者关注。
    - [链接](https://github.com/openclaw/openclaw/issues/67915)
- **`fix: drain inbound debounce buffer and followup queues before SIGUSR1 reload`** (`#46303`, 2026-03-14): 一个存在了近三个月的 PR，旨在防止 `SIGUSR1` 重载时静默丢弃内存中的入站消息缓冲区。因其涉及多个渠道和 Gateway 核心功能，合并风险高，但解决的是数据丢失的关键问题，建议重新评估。
    - [链接](https://github.com/openclaw/openclaw/pull/46303)

---

## 横向生态对比

# 2026-06-22 AI智能体与个人AI助手开源项目横向对比报告

## 1. 今日横向概览

今日四个项目活动量差异显著：**OpenClaw** 以近千条 Issue/PR 更新和两个版本发布的规模最为活跃，但伴随严重回归问题（Memory 存储静默迁移）；**NanoBot** 和 **Zeroclaw** 分别聚焦于安全漏洞修复（MCP 策略绕过）和工作流自动化治理，社区讨论深入但无新版本；**PicoClaw** 活动量最低，仅 9 条更新，但一个关于 Token 持续消耗的 Bug 引发用户焦虑。跨项目看，**消息交付可靠性**成为 OpenClaw 和 NanoBot 共同的痛点，而 **渠道扩展**（NapCat/QQ、Mattermost、SimpleX）在多个项目中均有呼声。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues 更新 | 今日 PR 更新 | 新版本发布 | 事实性备注 |
|------|------------------|--------------|------------|------------|
| **OpenClaw** | 500（新开/活跃478） | 500（待合并479） | 2 个（含 Beta） | 活动量最大；Memory 迁移回归为 P1 级事件 |
| **NanoBot** | 10（新开7，关闭3） | 34（待合并20，合并/关闭14） | 0 | 2 个严重安全/稳定性 Bug 已有修复 PR |
| **Zeroclaw** | 41（新开31，关闭10） | 50（待合并41，合并/关闭9） | 0 | 工作流管理 RFC 获社区 11 条评论 |
| **PicoClaw** | 5（关闭2，新开/活跃3） | 4（待合并2，合并/关闭2） | 1（nightly） | 活动量最低；2 个历史 Bug 被关闭，但新 Bug 关注度高 |

## 3. OpenClaw 与同类对照

- **活动量差异**：OpenClaw 的 Issue/PR 更新量是 NanoBot 的 50 倍、Zeroclaw 的 11 倍、PicoClaw 的 100 倍以上，反映其社区规模和维护投入明显更大。但高活跃也伴随问题集中爆发：同日出现 4 个 P1 级 Bug（Memory 迁移、Telegram 重复回复、轮询崩溃、隔离 Cron 失败）。
- **技术重点差异**：OpenClaw 今日主要聚焦于 **渠道交付可靠性**（Telegram HTML、子代理完成交付）和 **状态同步修复**，而 NanoBot 的核心关注点是 **MCP 安全机制**和 **流式响应稳定性**，Zeroclaw 则侧重 **配置发现**、**技能建议修复** 和 **工作流治理**。PicoClaw 仅涉及一个配置序列化修复和两个历史 Bug 关闭，未涉及核心运行时安全。
- **社区讨论面差异**：OpenClaw 的社区热点集中在 **数据安全与迁移透明性**（#95495，6条评论），以及 **重复回复/消息阻塞** 这类直接影响使用的体验问题。NanoBot 的讨论围绕 **安全绕过** 和 **会话毒化** 展开，维护者响应迅速（数小时内创建修复 PR）。Zeroclaw 的讨论更具治理色彩（工作流自动化 RFC、看板管理），并涉及离线用户对 **QQ 通道需求** 的持续呼吁（#2503，9条评论）。PicoClaw 唯一的活跃讨论是 **进化模式 Token 消耗**，用户担忧成本而不确定性未解决。

## 4. 共同出现的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **消息/事件交付可靠性** | OpenClaw、NanoBot | OpenClaw：子代理完成丢失、Telegram 重复回复；NanoBot：流式响应重复 tool_use ID 导致会话永久中断 |
| **MCP / 工具调用安全** | NanoBot、Zeroclaw | NanoBot：MCP enabledTools 绕过（拒绝全部/白名单均可绕过）；Zeroclaw：MCP 工具在主流模型中不可用 |
| **渠道扩展（多样化通讯协议）** | OpenClaw、NanoBot、Zeroclaw、PicoClaw | OpenClaw：Telegram 交付优化；NanoBot：Mattermost、Telegram 富消息；Zeroclaw：NapCat/OneBot QQ、Slack 附件、Mattermost WebSocket；PicoClaw：SimpleX/Wire/Tox 等 E2EE 通道 |
| **配置可发现性与灵活性** | OpenClaw、NanoBot、Zeroclaw、PicoClaw | OpenClaw：可配置默认 Agent ID；NanoBot：心跳模型覆盖、只读历史搜索；Zeroclaw：ModelRoute/EmbeddingRoute 配置可发现；PicoClaw：技能搜索输出安装指令 |
| **成本/资源优化** | OpenClaw、PicoClaw | OpenClaw：低资源环境下后台任务效率低（用户放弃使用）；PicoClaw：进化模式持续消耗 Token 引发成本焦虑 |

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 全栈个人 AI 助手，强调多渠道交付、子代理协同、内存管理 | 轻量级 Agent 框架，侧重 MCP 集成、流式响应、安全控制 | 智能体运行时与技能生态，强调工作流自动化、配置管理、可观测性 | 嵌入式/轻量级助手，侧重命令行工具、群聊网关、低资源运行 |
| **目标用户** | 追求功能完整的个人开发者、中小团队 | 对安全敏感、希望精细控制工具调用的开发者 | 企业级或高级用户，需要定制化工作流、私有技能仓库 | 边缘设备用户、QQ 群聊用户、对资源消耗敏感的轻量用户 |
| **技术架构关键差异** | 基于会话 (Session) 和子代理 (Subagent) 模型，采用 JSONL 写锁 | 基于 MCP (Model Context Protocol)，支持流式组装和 enabledTools 策略 | 基于运行时命令和配置路由，强调技能注册中心和 OTel 跟踪 | 基于网关和群聊模式，支持 Matrix 等去中心化协议，有 nightly 自动构建 |
| **今日重点问题类型** | 数据迁移风险、渠道交付 Bug、隔离任务失败 | 安全漏洞、会话稳定性 | 工作流自动化缺失、通道集成缺口、MCP 兼容性 | Token 消耗透明度、配置序列化细节 |

## 6. 社区活跃度记录

- **高活跃**（>100 更新）：**OpenClaw**——日更新量达 1000 条（Issue+PR），发布 2 个版本，社区讨论高热。
- **中活跃**（20-100 更新）：**Zeroclaw**（91 条更新）、**NanoBot**（44 条更新）——无版本发布，但有结构化的 RFC/安全响应。
- **低活跃**（<10 更新）：**PicoClaw**（9 条更新）——仅有 1 个 nightly 版本，活动集中在少数 Issues 上。

## 7. 有证据支撑的观察

1. **消息交付可靠性是多个项目当前的核心短板**：OpenClaw 报告了 Telegram 重复回复、子代理完成丢失、Gateway 重启消息静默丢失；NanoBot 报告了流式响应致会话永久中断。两个项目均有 P1 级 Bug 待修复，且均未在今日内合并修复 PR。

2. **MCP 安全机制成为 NanoBot 和 Zeroclaw 的交叉关注点**：NanoBot 出现 enabledTools 绕过漏洞（已有 PR #4436 修复），Zeroclaw 的 MCP 工具在主流模型中不可用（Issue #7756）。两者均涉及工具调用安全性与兼容性，但尚未出现跨项目解决思路（如共享安全审计）。

3. **渠道扩展需求跨越所有项目，但具体通道偏好存在地域/场景差异**：OpenClaw 和 NanoBot 聚焦 Telegram 优化；Zeroclaw 和 PicoClaw 则强烈要求 QQ（NapCat/OneBot）和去中心化协议（Mattermost、SimpleX），反映用户群体从国际社交平台向国内社群和自托管基础设施迁移的趋势。

4. **配置可发现性与透明性成为社区普遍期望**：OpenClaw 用户对 Memory 存储路径静默迁移强烈不满；Zeroclaw 通过 PR 让 ModelRoute 配置可被仪表盘发现；NanoBot 请求心跳模型覆盖；PicoClaw 请求技能搜索输出安装指令。用户不希望配置或行为“暗箱操作”。

5. **成本/资源消耗焦虑在低资源和小规模用户中显现**：OpenClaw 用户因后台任务效率低而放弃使用；PicoClaw 用户对进化模式每分钟消耗 Token 感到担忧。虽然 NanoBot 和 Zeroclaw 今日未直接出现此类反馈，但匿名请求中已包含对 Token 计费的优化需求（如 NanoBot #4420 的缓存优化）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，遵照您的指示。以下是基于提供的数据生成的 NanoBot 项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-22

## 1. 今日活动概览

过去24小时内，项目保持高度活跃。共更新了10条Issues（新开/活跃7条，关闭3条）和34条Pull Requests（待合并20条，已合并/关闭14条）。今日无新版本发布。社区讨论主要集中在两项重大安全漏洞（MCP `enabledTools` 绕过）和一项导致会话永久中断的流式响应Bug上，且均已出现对应的修复PR。

## 2. 版本发布

无

## 3. 项目进展

今日有14个PR被合并或关闭，推进了多项功能与修复，主要包括：

- **配置与环境变量解析修复**：Tobrien 提交的三个PR #4323、#4324、#4325 被合并，解决了转录（Transcription）和WebUI设置页面中 `${VAR}` 环境变量模板未正确解析导致的功能故障。
- **TTS系统落地**：`feat(tts): add TTS configuration system with multi-provider support` (#4316) 被合并，为项目带来了多供应商支持的文本转语音配置系统。

## 4. 社区热点

今日社区讨论焦点集中在安全与稳定性问题上。

- **核心议题：MCP `enabledTools` 安全机制绕过**
    - **Issues**: #4434, #4435
    - 用户 `@YLChen-007` 报告了两个严重的安全漏洞，指出 `enabledTools` 的“拒绝全部”策略 (`[]`) 和“允许列表”策略均能被绕过，导致 MCP 服务器的资源（Resources）和提示（Prompts）能力意外暴露给AI模型。
    - **维护者反应**: 维护者 `@michaelxer` 迅速响应，创建了修复PR #4436 (`fix(tools): gate MCP resource and prompt registration behind enabledTools`)，显示团队对该问题的重视程度很高。

- **核心议题：流式响应导致会话中断**
    - **Issue**: #4442
    - 用户 `@tedyyan` 报告了一个严重的稳定性Bug：当使用支持流式传输的Anthropic系列供应商时，由于流式组装错误导致 `tool_use` ID 重复，会永久性“毒化”会话，使后续所有请求都返回400错误，Agent静默失效。
    - **维护者反应**: 该问题引发了快速响应。`@tedyyan` 本人和另一名维护者 `@michaelxer` 几乎同时提交了修复PR，分别是 #4444 和 #4443，显示了社区和团队对修复此类关键问题的敏捷性。

- **链接**:
    - #4434: https://github.com/HKUDS/nanobot/issues/4434
    - #4435: https://github.com/HKUDS/nanobot/issues/4435
    - #4436: https://github.com/HKUDS/nanobot/pull/4436
    - #4442: https://github.com/HKUDS/nanobot/issues/4442
    - #4444: https://github.com/HKUDS/nanobot/pull/4444
    - #4443: https://github.com/HKUDS/nanobot/pull/4443

## 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **[严重] 流式响应重复 tool_use ID 导致会话永久中断 (Critical)**
    - **报告**: #4442 - 流式响应中重复的 `tool_use` ID 会“毒化”会话，导致后续请求被API拒绝。
    - **状态**: 已有两个修复PR在审查中：`@tedyyan` 的 #4444 和 `@michaelxer` 的 #4443。

- **[严重] MCP `enabledTools` 安全策略绕过 (High)**
    - **报告**: #4434 - 拒绝全部策略绕过；#4435 - 允许列表绕过。
    - **状态**: 已有修复PR #4436 在审查中。

- **[中等] 并发运行钩子非线程安全 (Medium)**
    - **报告**: #4408 - 已关闭。`Nanobot.run()` 修改共享的 `_extra_hooks` 存在并发问题。
    - **状态**: 已修复并关闭。

- **[低] DeepSeek 消息处理兼容性 (Low)**
    - **报告**: #3869 - 涉及 `null` 内容导致400错误、占位符泄漏等问题。
    - **状态**: 已有未合并的PR (#3869) 在等待审查。

**链接**:
- #4442: https://github.com/HKUDS/nanobot/issues/4442
- #4444: https://github.com/HKUDS/nanobot/pull/4444
- #4443: https://github.com/HKUDS/nanobot/pull/4443
- #4408: https://github.com/HKUDS/nanobot/issues/4408
- #3869: https://github.com/HKUDS/nanobot/issues/3869

## 6. 功能请求归类

- **新通信渠道集成**: `#1011` (Mattermost Bot)、`#4413` / `#4422` (Telegram Bot API 10.1 Rich Messages)。用户持续提出对更多样化、现代化通信平台的支持需求。
- **性能优化**: `#4420` 提出了对 `estimate_prompt_tokens` 函数进行缓存优化，避免每次调用都对工具定义进行重复的tiktoken编码，该请求已被关闭，推测已有对应优化合并或解决。
- **配置灵活性与资源管理**:
    - `#4431` (Heartbeat-specific model override): 请求让心跳服务可指定一个更便宜/专用的模型运行。
    - `#4440` (read-only `search_history` tool): 提议增加一个只读工具，用于搜索 `memory/history.jsonl` 文件中的历史会话。
- **相关PR**: 针对上述请求，`#4437` 提出了实现心跳触发命令的PR；`#4439` 是支持 `search_history` 功能的PR。

**链接**:
- #1011: https://github.com/HKUDS/nanobot/issues/1011
- #4413: https://github.com/HKUDS/nanobot/issues/4413
- #4422: https://github.com/HKUDS/nanobot/issues/4422
- #4420: https://github.com/HKUDS/nanobot/issues/4420
- #4431: https://github.com/HKUDS/nanobot/issues/4431
- #4440: https://github.com/HKUDS/nanobot/issues/4440
- #4437: https://github.com/HKUDS/nanobot/pull/4437
- #4439: https://github.com/HKUDS/nanobot/pull/4439

## 7. 用户反馈摘要

- **通信渠道偏好**: 在 #1011 的讨论中，用户 `@matthiasg` 表达了对Mattermost作为通信渠道的支持，并详细列举了不使用Discord、Telegram、Slack、WhatsApp等主流平台的具体顾虑（如设定复杂、隐私问题、需要商业账户等），反映了部分社区成员对去中心化/自托管通信方案的真实需求。
- **性能感知与优化**: `#4420` 的作者 `@codeLong1024` 描述了自己在“数字员工”项目中的真实痛点：因 `estimate_prompt_tokens` 的冗余计算导致“程序响应很慢”，并清晰指出了从问题定位到向上游提交优化建议的全过程，体现了社区开发者对项目性能的深入观察和贡献意愿。

## 8. 待处理积压

- **Issue #1011 - Mattermost Bot 支持**: 自2026年2月创建至今已有4个月，获得4个赞，但仍处于打开状态，无明确标签表明已规划。用户对自托管通信渠道的需求持续存在。
    - 链接: https://github.com/HKUDS/nanobot/issues/1011
- **PR #4092 - 修复 OpenAI 兼容工具调用解析**: 自5月底提交，至今已近一个月，虽在持续更新，但尚未合并。该PR旨在修复多个关于工具调用的解析问题。
    - 链接: https://github.com/HKUDS/nanobot/pull/4092
- **PR #4145 - 天气技能 (Weather Skill)**: 自6月初提交，包含示例、文档和测试，至今仍未合并，可能需维护者优先审查和决策。
    - 链接: https://github.com/HKUDS/nanobot/pull/4145

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，以下是基于您提供的 Zeroclaw 项目 GitHub 数据生成的 2026 年 6 月 22 日项目动态日报。

---

# Zeroclaw 项目日报 - 2026-06-22

## 1. 今日活动概览

过去24小时内，Zeroclaw项目社区活跃度很高。我们追踪到了 **41 条 Issue 更新**（其中 31 条新开或活跃，10 条关闭）和 **50 条 PR 更新**（其中 41 条待合并，9 条已合并或关闭）。虽然并无新版本发布，但项目在核心功能修复、配置发现、以及测试覆盖方面取得了显著进展。值得关注的是，多个关于工作流自动化、本地优先模式和安全增强的讨论持续升温，反映了社区正在推动项目向更成熟、更易用的方向发展。

## 2. 版本发布

无。

## 3. 项目进展

过去24小时内，多个重要的 PR 被合并或取得关键进展，主要集中在以下几方面：

*   **安装脚本修复**：PR [#8096](https://github.com/zeroclaw-labs/zeroclaw/pull/8096) 已合并，修复了 `install.sh` 为 Intel Mac 错误下载 ARM64 版本导致的“bad CPU type”问题。该 PR 通过检测 CPU 架构动态选择正确的预编译包。
*   **配置可发现性提升**：PR [#7855](https://github.com/zeroclaw-labs/zeroclaw/pull/7855) 状态为开放中，其主要工作是让 `ModelRouteConfig` 和 `EmbeddingRouteConfig` 实现 `Configurable` trait，从而使得网关 API 和仪表盘能够发现和展示这些配置项。
*   **全局功能修复**：
    *   PR [#7819](https://github.com/zeroclaw-labs/zeroclaw/pull/7819) 已合并，修复了缺失技能建议的错误。该修复确保建议功能以“当前回合可用的有效工具集”为基础，避免了因工具被排除在外而给出错误建议。
    *   PR [#7858](https://github.com/zeroclaw-labs/zeroclaw/pull/7858) 状态为开放中，旨在将核心运行时命令（如 `/new`、`/stop`、`/model`）的回复本地化，并已为中文提供了翻译，提升了多语言用户的体验。
*   **测试覆盖增强**：多个测试相关的 PR 被合并，包括 PR [#7845](https://github.com/zeroclaw-labs/zeroclaw/pull/7845)（验证中毒的互斥锁恢复路径）和 PR [#7859](https://github.com/zeroclaw-labs/zeroclaw/pull/7859)（覆盖空白输入被拒绝的场景）。

## 4. 社区热点

以下是过去24小时内讨论最热烈的几个议题：

*   **工作流管理与自动化 (RFC: Work Lanes, Board Automation, and Label Cleanup)**：[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
    *   **摘要**：这是一个关于如何优化项目工作流、看板自动化和标签清理的治理型RFC。目前有11条评论，并已被标记为“accepted/rollout in progress”。
    *   **诉求分析**：该项目正处于从0.8.0-beta-1向0.8.0过渡的关键时期，团队和社区显然意识到了当前的协作流程需要改进，以应对项目规模的增长。该RFC旨在建立一套无需维护者手动维护的自动化系统，反映了社区对于提升项目管理效率和透明度的强烈需求。

*   **通道集成需求 (Feature: where is napcat channel)**：[Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)
    *   **摘要**：用户强烈要求在Zeroclaw中集成NapCat或OneBot QQ机器人通道。该 Issue 获得了9条评论，状态为“accepted”且“no-stale”（不被标记为过期），反映出这是一个长期悬而未决但社区呼声很高的功能。
    *   **诉求分析**：该需求表明用户需要连接特定的第三方QQ机器人协议（NapCat/OneBot）以实现与QQ群的深度交互。Zeroclaw在支持用户群体的多样化通讯需求方面仍有缺口。

*   **私有源/注册中心配置 (feat(skills): user-configured extra skill registries)**：[PR #7827](https://github.com/zeroclaw-labs/zeroclaw/pull/7827)
    *   **摘要**：该PR提议增加一个“二级”技能注册中心，允许用户配置私有或自托管的技能仓库。这受到了社区的关注。
    *   **诉求分析**：这反映了社区中企业和高级用户对资产隔离和安全性的需求。他们希望在无需修改代码的情况下，从私有源安装和部署技能，这标志着用户对平台的定制化要求正在提升。

## 5. Bug 与稳定性

以下为过去24小时内报告的较严重的 Bug，按严重程度排列：

*   **S1 - 工作流阻塞**：
    *   [Issue #8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)：**新报告**。通过快速启动添加的 Anthropic 提供商在聊天窗口中不可用，需要重置后才能使用。用户报告严重程度为 S0（数据丢失/安全风险），维护者标记为 P2。尚无关联的 Fix PR。
    *   [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)：MCP 工具在 OpenAI 和 Anthropic 模型回合中不可用。严重阻碍了基于这些主流模型的多轮工具调用工作流。
    *   [Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)：上下文压缩在MiniMax等兼容OpenAI的提供者上，会错误地丢弃工具调用和工具结果消息，导致工具循环。该问题正在处理中（status:in-progress）。

*   **S2 - 降级行为**：
    *   [Issue #7896](https://github.com/zeroclaw-labs/zeroclaw/issues/7896)：**新报告**。发现 Groq 提供商的原生工具消息缺少 `name` 字段，这可能导致部分兼容性问题。
    *   [Issue #7898](https://github.com/zeroclaw-labs/zeroclaw/issues/7898)：`rust_native` 浏览器驱动下的快照和 `@ref` 选择器在 WebDriver 下失败。

另外，已有关联修复 PR 的 Bug：
*   [Issue #7810](https://github.com/zeroclaw-labs/zeroclaw/issues/7810) 关于 `git_operations` 工具在非 Git 仓库中错误提示不足的问题，已有关联 Fix PR [#7835](https://github.com/zeroclaw-labs/zeroclaw/pull/7835)（开放中）。
*   [Issue #8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095) 关于安装脚本的 Bug，已有关联 Fix PR [#8096](https://github.com/zeroclaw-labs/zeroclaw/pull/8096)（已合并）。

## 6. 功能请求归类

过去24小时内的功能请求主要集中在以下几个方向：

*   **通道扩展**：
    *   **Slack**: [PR #7170](https://github.com/zeroclaw-labs/zeroclaw/pull/7170) 增加了 Slack 频道上传附件（图片/文件）的能力，以支持更丰富的交互。
    *   **Mattermost**: [PR #7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) 增加了可选的 WebSocket 监听模式，替代现有的轮询模式，以降低延迟和服务器负载。
    *   **通用**: [Issue #8116](https://github.com/zeroclaw-labs/zeroclaw/issues/8116) (**新报告**) 提出为通道的历史记录修剪功能增加针对 `tool_call_id` 的测试覆盖，确保稳定性。

*   **技能与插件管理**：
    *   [Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) 提出了一个由提示词触发的安装建议功能，当用户请求一个尚未安装的技能时，系统可以自动建议安装。

*   **可观测性**：
    *   [Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 和 [Issue #6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) 继续推进 OTel 跟踪的改进，前者希望将 `llm.call`、`tool.call` 等跨度关联到单个“turn”跟踪下，后者希望捕获完整的 Prompt/Completion 负载。这表明社区对运行时监控和分析的需求很明确。

*   **安全与配置**：
    *   [Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 要求改进弱配对码（默认 6 位数字）的问题，建议允许设置任意长度的字母数字组合，并默认使用更长的安全码。这表明社区对安全性的担忧正在上升。
    *   [Issue #8105](https://github.com/zeroclaw-labs/zeroclaw/issues/8105) (**新报告**) 要求明确 Node.js 容器镜像的版本策略，以避免依赖更新的“默默升级”导致兼容性问题。

## 7. 用户反馈摘要

从过去24小时的 Issue 评论和摘要中，可以提炼出以下真实用户痛点：

*   **“希望集成但找不到”**：用户 `@irunmyway` 在 [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) 中表示：“我想连接 onebot，但是找不到 napcat 选项。” 反映了特定通道集成缺失带来的直接困扰。
*   **“用起来很慢，因为缓存不工作”**：用户 `@edgarkech` 在 [Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) 中抱怨通过 Telegram 聊天时，LLM服务器日志显示“forcing full prompt re-processing due to lack of cache data”，导致响应变慢且浪费 token。这指向了特定通道与核心功能（Prompt Caching）的集成问题。
*   **“被输出中的日志搞混了”**：用户 `@mikeyhew` 在 [Issue #4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) 中指出 CLI 工具错误地将日志写入 stdout 而非 stderr，导致像 `zeroclaw config schema` 这样的命令输出被日志污染，难以被管道传输或正确解析。这是一个影响开发者和自动化脚本使用的低级但重要的用户体验问题。

## 8. 待处理积压

以下为需引起维护者关注的长期未响应或进展缓慢的 Issue 和 PR：

*   [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) - **Feature: where is napcat channel**：虽然状态为 `accepted` 且 `no-stale`，但自 2026-03-02 创建以来已持续近4个月，用户在评论区仍在寻求进展。这是社区明确提出的、尚未得到落实的功能需求。
*   [PR #7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) - **feat(channel/mattermost): add optional WebSocket listener mode**：该 PR 自 2026-06-02 提交以来，因需要作者操作 (`needs-author-action`) 而处于停滞状态。这是一个对 Mattermost 用户有显著性能提升的功能，需要维护者或作者推动解决冲突或完成修改。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 PicoClaw GitHub 数据，现生成 2026-06-22 的项目动态日报如下。

---

# PicoClaw 项目动态日报 | 2026-06-22

## 今日活动概览
过去 24 小时内，项目活跃度平稳，共产生 5 条 Issue 更新和 4 条 PR 更新，并发布了一个新的 `nightly` 版本。具体来说，有 2 个历史 Issue 已被关闭，包括一个影响 Matrix 用户权限验证的 Bug 和涉及 `mcp add` 命令参数解析的 Bug。功能开发方面，有 1 个旨在提升用户体验的 PR 被提交，但尚无新的功能 PR 被合并。自动化依赖升级 PR 仍处于无人审核的积压状态。

## 版本发布
- **nightly: Nightly Build** (v0.3.0-nightly.20260621.287853ab)
  这是一个自动化的每日构建版本，**可能存在不稳定风险**。官方在描述中明确提示需谨慎使用。本次构建相比 v0.3.0 版本，包含了所有已合并至主分支的最新代码修订。
  - **变更日志**: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
  - **破坏性变更**: 未提及。

## 项目进展
- **config 修复被合并 (PR #2565)**：由 @stpwin 提交的关于 `GroupTriggerConfig.MentionOnly` 配置项在序列化时因 `omitempty` 标签导致布尔值 `false` 丢失的 Bug 已被修复。该 PR 于今日被成功合并并关闭。底层修复确保了当用户明确设置 `mention_only=false` 时，该配置能被正确加载，而非被默认值覆盖。([查看PR](https://github.com/sipeed/picoclaw/pull/2565))

## 社区热点
- **“进化”模式持续消耗 Token 引发困惑 (Issue #3012)**：该 Issue 是目前评论区最活跃的，有 5 条评论。用户 @xpader 报告在开启“进化” (Evolution) 功能后，系统会每分钟持续消耗 Token，即使在无交互状态下。社区成员和开发者正在此 Issue 下讨论其设计逻辑是否为预期行为，或是存在 Bug。这表明用户对后台自动消耗 Token 的机制感到担忧，需要维护者给予明确解释或优化。([查看Issue](https://github.com/sipeed/picoclaw/issues/3012))

## Bug 与稳定性
1.  **[严重] 进化模式持续消耗 Token (Issue #3012)**：用户报告在启用 `Evolution` 功能 (模式设为 Draft) 后，Token 会每分钟持续被消耗。该问题虽未标记为新的 Bug，但今日的活跃讨论显示用户对此抱怨较多，且影响用户成本和资源使用。
    - **状态**: 开放，未有明确的修复 PR。
    - **链接**: [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)

2.  **[中等] iOS Safari 面板兼容性问题 (Issue #3090)**：用户报告在 iOS 16.4 以下版本的 Safari 浏览器上访问 PicoClaw 面板时，页面无法正常工作。
    - **状态**: 开放，标记为 `stale`。
    - **链接**: [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)

3.  **[已解决] Matrix 用户 ID 包含冒号导致权限失败**：用户报告的 `allow_from` 配置因 Matrix 用户 ID 中合法的冒号 (`:`) 解析失败问题，已在今日被关闭，推测已通过某个 commit 或 PR 解决。([查看Issue](https://github.com/sipeed/picoclaw/issues/3044))
4.  **[已解决] `mcp add` 命令全局参数解析错误**：用户报告的 `--no-color` 等全局参数被错误解析为位置参数，导致添加 HTTP/SSE 服务失败的 Bug，已在今日被关闭。([查看Issue](https://github.com/sipeed/picoclaw/issues/3041))

## 功能请求归类
- **新网关支持请求 (Issue #3093)**：用户 @Damian-o2 请求增加对 **SimpleX**、**Wire** 或 **Tox** 等端到端加密通讯协议网关的支持。这表明部分用户对去中心化、高安全性的通信渠道有明确需求。([查看Issue](https://github.com/sipeed/picoclaw/issues/3093))
- **技能搜索增强 (PR #3152)**：用户 @phoeagon 提出了一项功能改进，建议优化 `picoclaw skills search` 命令的输出，**新增安装指令**，使用户在搜索到技能后能直接获知安装方法，提升易用性。该 PR 目前处于待合并状态。([查看PR](https://github.com/sipeed/picoclaw/pull/3152))

## 用户反馈摘要
- **对资源消耗敏感**：从 Issue #3012 可以看出，社区用户对 AI 模型的 Token 消耗非常敏感。开启“自动化”或“进化”功能后，任何非预期的后台调用都会引起用户担忧和反馈。
- **希望获得更直接的安装指引**：PR #3152 的提交说明，用户在使用命令行工具时，希望获得更即时、更完整的操作反馈，以减少查阅外部文档的成本，体现了对“开箱即用”体验的追求。

## 待处理积压
- **自动化依赖更新 PR 积压**：由 `dependabot` 自动提交的两个针对 `web/frontend` 子模块的依赖更新 PR (#3103: typescript-eslint, #3105: eslint) 已处于开放状态超过 11 天，均被标记为 `stale`。维护者需尽快对这些无关紧要但能保障构建安全的依赖更新进行审核与合并。([PR #3103](https://github.com/sipeed/picoclaw/pull/3103), [PR #3105](https://github.com/sipeed/picoclaw/pull/3105))
- **长期未解决的 Token 消耗问题**：Issue #3012 虽然今日活跃，但自 6月5日创建以来，维护者尚未给出明确答复或解决方案。建议开发者优先关注此问题，明确其是否属于 Bug，以消除社区疑虑。

</details>