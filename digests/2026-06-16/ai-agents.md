# OpenClaw 生态日报 2026-06-16

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-16 02:52 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我将根据您提供的 OpenClaw 项目数据，生成一份客观、数据驱动的项目动态日报。

---

# OpenClaw 项目日报 | 2026年6月16日

## 1. 今日活动概览

今日项目活跃度极高，过去24小时内共产生500条 Issue 更新和500条 PR 更新。其中，新开/活跃的 Issue 有471条，待合并的 PR 有417条，显示社区贡献热情和问题反馈量维持在高位。值得关注的是，一个关于“网关内存泄漏”的严重问题（#91588）被评为P0优先级，其RSS内存占用在数天内可从350MB增长至15.5GB，最终导致OOM崩溃，这是今日最需关注的稳定性事件。此外，项目发布了 `v2026.6.8-beta.2` 版本，主要加强了Telegram和WhatsApp渠道的富文本消息传递能力。

## 2. 版本发布

- **版本**: `v2026.6.8-beta.2`
- **发布时间**: 今日
- **主要更新内容**:
  - **Telegram & WhatsApp 消息增强**: 改进了消息传递的鲁棒性和丰富性。现在Telegram可以发送包含表格、列表、可折叠引文块的结构化富文本。修复了CLI后端消息传递，弃用了旧的本地迁移方式，并增强了富媒体机器人消息的安全性。
- **破坏性变更**: 版本说明中未明确提及，但暗示了“弃用旧版本地迁移方式”，相关用户需要注意。

## 3. 项目进展

今日未记录到合并的PR，但以下几条关键的PR正在推进重要的功能和修复，值得关注：

- **高优修复**: `feat(queue): persist followup queues across gateway restarts (#82572)`，该PR旨在解决网关重启后待发送的跟进消息丢失问题，对提升消息可靠性意义重大。
- **安全与稳定性修复**:
  - `fix(agents): preserve prompt-released session metadata (#93194)`，修复了代理释放提示锁时导致会话元数据丢失的问题。
  - `fix(dispatch): include message_sending hooks when channel beforeDeliver is configured (#92762)`，修复了特定渠道配置下全局 `message_sending` 钩子被绕过的问题，可能影响安全策略执行。
  - `fix(state): refuse chmod-less agent database volumes... (#92813)`，强化了安全性，拒绝在没有权限证明的文件系统上启动代理数据库，防止凭证泄露。
- **功能增强**: `feat(qa): crabline channel driver (#91502)`，引入了一个新的QA渠道驱动，用于自动化测试和发布流程。

## 4. 社区热点

今日社区讨论热度集中在以下几个议题：

- **桌面客户端支持（#75）**: 获得最多评论（109条）和点赞（79个）。用户强烈希望在Linux和Windows系统上获得与macOS功能类似的桌面应用。该Issue已存在近6个月，反映了社区对跨平台支持的长期期待。

  [查看 Issue #75](https://github.com/openclaw/openclaw/issues/75)

- **文本泄露问题（#25592）**: 一个P1高优先级的安全/消息丢失问题。当AI代理在调用工具之间产生中间过程文本（如错误处理、处理确认）时，这些文本会被意外路由到消息通道。这严重影响了用户体验，被认为是需要优先解决的安全和UX问题。

  [查看 Issue #25592](https://github.com/openclaw/openclaw/issues/25592)

- **内存泄漏（#91588）**: 被标记为 P0（Critical），是今日最严重的问题。用户报告网关进程在正常运行2-3天后，RSS内存占用会从350MB飙升至15.5GB，最终被操作系统OOM杀手杀死，导致服务反复重启。

  [查看 Issue #91588](https://github.com/openclaw/openclaw/issues/91588)

- **私有网络访问（#39604）**: 用户希望增加一个配置开关，允许 `web_fetch` 工具在明确开启的情况下访问内网地址（如localhost, 192.168.x），以解决部分场景下的功能受限问题。

  [查看 Issue #39604](https://github.com/openclaw/openclaw/issues/39604)

## 5. Bug 与稳定性

今日报告了多个Bug和回归问题，按严重程度排列如下：

- **【严重/崩溃】P0: 网关内存泄漏（#91588）** - 内存泄漏问题，RSS增长至15.5GB并导致OOM崩溃。目前已有12条评论，但没有关联的已合并修复PR，情况紧急。

- **【高/数据丢失】P1: 文本在工具调用间泄露（#25592）** - LLM内部处理文本被错误地发送到用户频道，导致敏感信息泄露和糟糕的UX。已有32条评论。

- **【高/消息丢失】P1: Signal守护进程重启竞态条件（#22676）** - 重启时旧进程未正确退出，导致新进程端口被占用，引起进程孤立和消息发送失败。目前已有17条评论。

- **【高/会话状态】P1: 代理回复上一条消息（#32296）** - 会话上下文混乱，代理经常回复用户上一条历史消息，导致对话错乱。已有15条评论。

- **【中】P2: 控制UI头像显示为404（#38439, #41201）** - 多个用户报告设置代理头像后，Web控制界面显示为图片加载失败，这是一个回归问题。

- **【中】P2: `exec`工具不继承技能环境变量（#31583）** - 这是一个回归问题，导致通过技能配置注入的密钥无法被 `exec` 工具使用。

## 6. 功能请求归类

用户提出了多项新功能请求，主要集中在以下几个方向：

- **安全与治理**:
  - **文件系统沙箱（#7722）**: 要求配置文件访问的允许/拒绝路径列表。
  - **掩码密钥（#10659）**: 让代理可以使用API密钥但无法直接读取，防止泄露。
  - **前置强制挂钩（#13583）**: 在响应前强制执行工具调用规则，代替软性提示。
  - **执行批准黑名单（#6615）**: 补充现有白名单，实现“允许所有，禁用XX”的策略。
- **消息渠道增强**:
  - **Slack Block Kit支持（#12602）**: 让代理能发送更丰富的交互式消息。
  - **Telegram商务机器人（#20786）**: 支持Telegram Business Bot更新类型，以接收个人聊天消息。
- **AI与系统的集成与互操作性**:
  - **A2A协议支持（#39476）**: 实现代理间消息传递，但当前存在消息重复问题。
  - **动态模型发现（#10687）**: 对于OpenRouter等快速更新的提供商，支持动态获取模型列表，而非静态配置。
- **运维与可观测性**:
  - **备份/恢复工具（#13616）**: 需要标准化的配置、会话和任务备份能力。
  - **子智能体生命周期可观测（#38626）**: 希望获得对异步子任务执行过程的可视化与控制能力。

## 7. 用户反馈摘要

从今日的Issue评论中，可以提炼出以下用户痛点：

- **LLM“中间思考”文本污染**: 用户普遍反映代理在工具调用间的“自言自语”会泄露给终端用户，这是一个严重的UX和潜在安全问题。 (#25592)
- **内存泄漏影响生产可用性**: P0级内存泄漏问题（#91588）直接导致服务崩溃，严重影响了长时间运行的稳定性，用户表现出极大的担忧。
- **跨平台桌面应用缺失**: 尽管已有针对macOS、iOS和Android的应用，但Linux和Windows用户仍缺少官方支持，这成为最大的社区呼声之一。 (#75)
- **配置与迁移困难**: 多个反馈指出配置（如`agentDir`下的启动文件被忽略 #29387）和弃用/迁移（如旧版Draft迁移 #Release Notes）过程不够清晰，导致用户困惑和功能失效。
- **文档与实现不符**: 用户发现某些文档描述的功能（如Hook session复用 #11665）在实际中并未按预期工作，导致了信任问题。

## 8. 待处理积压

以下为长期未解决或近期高度紧急但尚未被合并的Issue和PR，建议维护者特别关注：

- **紧急/高影响**:
  - **[#91588]**: P0级网关内存泄漏，直接影响生产环境稳定性。目前尚无关联的fix PR，需要立即介入。
  - **[#25592]**: 文本泄露问题，关乎核心用户体验和安全性，已开放近4个月，标签显示已有PR（`clawsweeper:linked-pr-open`），但状态需检查和推动合并。
- **长期功能需求**:
  - **[#75]**: Linux/Windows桌面客户端，自2026年1月提出，累计109条评论和79个赞，社区需求强烈但未见实质进展。
  - **[#9443]**: 预编译Android APK，自2026年2月提出，对于Android用户入门体验至关重要。
- **重要的未解决问题**:
  - **[#22676]**: Signal守护进程重启竞赛，虽标记为P1，但`clawsweeper:linked-pr-open`标签也未能推动解决。
  - **[#14785]**: 工具架构令牌开销问题（~3500 tok/session），这是提升模型性价比和效率的关键优化项，已持续4个月。

---

## 横向生态对比

# 2026-06-16 个人AI助手开源项目横向对比分析

## 1. 今日横向概览

今日四个项目均保持活跃，但活动量级差异显著。OpenClaw 以 471 条新开/活跃 Issue 和 417 个待合并 PR 成为当日最活跃的项目，同时发布 beta 版本，主要解决消息渠道增强问题，但也暴露出 P0 级内存泄漏和文本泄露等严重稳定性缺陷。Zeroclaw 次之，产生 46 个新开 Issue 和 49 个待合并 PR，社区讨论集中于多代理路由、A2A 协议和安全隔离。NanoBot 和 PicoClaw 的活动规模较小（PR 更新分别为 25 和 13），其中 NanoBot 的核心焦点是 Agent 上下文丢失与模型回退，PicoClaw 则侧重代码健壮性修复和平台兼容性（Windows QQ 频道失败）。

## 2. 各项目活跃度对比

| 项目 | 新开/活跃 Issue | 待合并 PR | 版本发布 | 备注 |
|------|----------------|----------|---------|------|
| **OpenClaw** | 471 | 417 | v2026.6.8-beta.2 | 发布增强 Telegram/WhatsApp 富文本；P0 内存泄漏（#91588）导致 OOM |
| **Zeroclaw** | 46 | 49 | 无 | 1 个 PR 被合并（CI 优化）；多代理路由 RFC（#2767）获 9 赞 |
| **NanoBot** | 4（更新） | 25（PR 更新，4 个已合并/关闭） | 无 | 上下文丢失 Bug（#4286）和空响应不回退（#4287）为焦点 |
| **PicoClaw** | 3（更新） | 13（PR 更新） | v0.2.9-nightly.20260616 | 夜间构建；Windows QQ 频道连接失败（#3015）未解决 |

> 注：NanoBot 和 PicoClaw 的 Issue 数据为当日“更新数”，而非新开/活跃数，因日报未提供细分。

## 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 的 Issue/PR 更新数（各 500 条）远超其他项目，Zeroclaw 为各 50 条，NanoBot 和 PicoClaw 均低于 30 条。OpenClaw 的社区反馈量和贡献量处于明显高位。
- **技术重点**：OpenClaw 当日核心动作是修复稳定性和安全漏洞（P0 内存泄漏、文本泄露），同时发布渠道增强版本。NanoBot 同样聚焦 Agent 上下文管理，但问题规模更小。Zeroclaw 的讨论更偏架构级功能（多代理路由、A2A 发现），尚未进入密集修复期。PicoClaw 以代码健壮性和平台兼容性为主。
- **社区讨论面**：OpenClaw 的热门话题包括跨平台桌面客户端（#75，109 条评论）、私有网络访问（#39604）；Zeroclaw 的热点集中于多代理路由和渠道预检配置；NanoBot 和 PicoClaw 的讨论面较窄，分别围绕上下文丢失和 Windows QQ 问题。

## 4. 共同出现的技术方向

- **安全与网络访问控制**：涉及 OpenClaw（#39604 要求可开关的私有网络访问）、Zeroclaw（#1458 本地 CA 证书支持、#551 跳过 SSL 检查）、PicoClaw（#3069 修复 CIDR 绕过漏洞）。用户普遍希望 Agent 工具能灵活配置内网访问权限和证书验证。
- **代理间通信与发现**：OpenClaw（#39476 A2A 协议支持）和 Zeroclaw（#7218 A2A 代理发现 RFC）均出现对 Agent-to-Agent 协议的需求，表明多 Agent 协作场景正在从单一项目需求演变为行业兴趣。
- **上下文管理与压缩**：OpenClaw（#93194 修复会话元数据丢失）、NanoBot（#4286 持续目标上下文丢失、#4348 会话压缩修复）、Zeroclaw（#7673 原生上下文压缩装饰器 RFC）。长对话和工具调用上下文的一致性仍是各项目共同面临的挑战。
- **消息渠道体验优化**：OpenClaw 增强 Telegram/WhatsApp 富文本；NanoBot 增加 WhatsApp 已读回执；Zeroclaw 提出 Slack 线程回填（#6055）和邮件 OAuth 重试（#7739）；PicoClaw 需要 Telegram 群聊回复识别（#2975）。多渠道的交互质量提升是普遍优先级。

## 5. 差异化定位分析

- **功能侧重**：
  - **OpenClaw**：全功能个人 AI 助手平台，覆盖多消息渠道（Telegram、WhatsApp、Slack 等），社区规模大，桌面客户端呼声高，但稳定性问题多发。
  - **Zeroclaw**：多代理编排平台，重点在路由、隔离（mcp_bundles）、A2A 协议，社区讨论偏架构和协议设计，工具链以 Rust 实现。
  - **NanoBot**：Agent 核心引擎，专注上下文管理、模型回退、自动化任务 UI，技术栈未明确但 PR 显示多为 Python 风格（如 asyncio），面向需要精细控制 Agent 行为的开发者。
  - **PicoClaw**：轻量级嵌入式/边缘设备 Agent（Sipeed 出品），强调代码健壮性（goroutine 恐慌恢复、类型断言检查）和低资源平台兼容性（Windows、RISC-V），用户基数小但反馈具体。
- **目标用户**：OpenClaw 面向个人用户和社区开发者；Zeroclaw 面向需要多 Agent 协作的团队和运维人员；NanoBot 偏向研究与高级集成者；PicoClaw 侧重嵌入式/物联网场景。
- **技术架构**：OpenClaw 和 PicoClaw 基于 Go（goroutine 术语），Zeroclaw 基于 Rust（cargo check、serde 等），NanoBot 未直接暴露语言但提及 asyncio，可能为 Python。架构差异影响性能、安全性和社区生态。

## 6. 社区活跃度记录

- **高活跃**：**OpenClaw**（Issue 471 新开、417 PR 待合并、发布 beta 版本，多个高热度 Issue）。
- **中活跃**：**Zeroclaw**（46 Issue、49 PR、多项 RFC 和 Bug 报告）。
- **低活跃**：**NanoBot**（4 Issue 更新、25 PR 更新、4 个 PR 合并）、**PicoClaw**（3 Issue 更新、13 PR 更新、发布 nightly）。

> 不做成熟度评分，仅依据当日绝对活动量分层。OpenClaw 的活跃度具有数量级优势，但 Bug 严重性也最高。

## 7. 有证据支撑的观察

1. **稳定性问题是当日最突出的共性问题**：OpenClaw 出现 P0 内存泄漏（#91588，RSS 从 350MB 增至 15.5GB 导致 OOM），NanoBot 持续目标上下文丢失（#4286）影响长任务，Zeroclaw 的 mcp_bundles 配置解析但不生效（#7733），PicoClaw 的 Windows QQ 频道连接失败（#3015）。各项目均有不同严重程度的可靠性 Bug。

2. **安全与访问控制成为多个项目的关注焦点**：OpenClaw 社区要求私有网络访问开关（#39604），Zeroclaw 有本地 CA 证书导入（#1458）和 SSL 跳过（#551）请求，PicoClaw 修复了 CIDR 绕过漏洞（#3069）。这表明用户对 Agent 工具的网络权限可控性有强烈且跨项目的需求。

3. **消息渠道体验优化是普遍投入方向**：OpenClaw 新增 Telegram/WhatsApp 富文本并修复 WhatsApp 消息丢失，NanoBot 增加 WhatsApp 已读回执，Zeroclaw

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 NanoBot GitHub 数据生成的 `2026-06-16` 项目动态日报。

---

### NanoBot 项目动态日报 | 2026年06月16日

---

#### 1. 今日活动概览

过去24小时内，NanoBot项目社区活跃度呈上升趋势。主要活动集中在 **25个 Pull Request (PR) 的提交与更新**，其中包含大量针对核心功能的修复与增强，特别是对 Agent 上下文管理、API 兼容性和基础设施的改进。Issue 方面有4条更新，其中一条关于“服务端API返回零token”的 Bug (#4309) 已被关闭，显示出问题解决效率。GitHub 数据中未见新的版本发布。

---

#### 2. 版本发布

无

---

#### 3. 项目进展

今日有4个 PR 被合并或关闭，展示了项目核心组件的重要修复：

- **会话压缩修复 (PR#4348 - CLOSED)**：由 `@chengyongru` 提交并关闭。此 PR 修复了在自动压缩会话历史时，可能会丢失或截断用户新提交的轮次 (turn) 内容，转而保留不完整的工具调用后缀的问题。该修复确保了 LLM 在处理长对话时能拥有完整的用户意图上下文。
  [链接](https://github.com/HKUDS/nanobot/pull/4348)

- **零Token使用量 Bug 修复 (Issue#4309 - CLOSED)**：由 `@alx1379` 报告的 `nanobot serve` 端点总是返回零 `token` 使用量的问题已被修复。该 Bug 影响了对 API 使用量的精确追踪，修复后服务端将正确报告 token 消耗情况。
  [链接](https://github.com/HKUDS/nanobot/issues/4309)

---

#### 4. 社区热点

社区技术讨论的核心集中于 **Agent 上下文的管理与准确性**，这是确保 LLM Agent 长期、复杂任务执行连贯性的关键。

- **Issue #4287 (Open): 空模型响应不触发回退机制**
  - **热度**: 2条评论
  - **核心诉求**: 用户 `@glebov` 报告了一个在生产环境中影响服务稳定性的问题：当主要模型（如 DeepSeek）因高峰期负载返回空响应时，Nanobot 的自动回退 (`fallback`) 机制未能触发。用户期望系统能在这种情况下自动切换到备用模型，以保证服务的连续性。
  [链接](https://github.com/HKUDS/nanobot/issues/4287)
  - **关联PR**: `#4358` 可能与此相关，虽然它处理的是重试而非回退，但同样聚焦于“空响应”场景下的系统行为改进。

- **Issue #4286 (Open): 持续目标上下文丢失**
  - **热度**: 1条评论
  - **核心诉求**: 用户 `@fablau` 在让 Nanobot 执行长任务（如撰写长篇文章）时，遇到了上下文丢失的问题。Agent 反复报错缺少“持续目标 (sustained goal)”上下文，导致任务无法正常完成。这个问题直接威胁到 Agent 处理复杂、多步任务的能力。
  [链接](https://github.com/HKUDS/nanobot/issues/4286)
  - **关联PR**: `#4359` 正是为了解决此问题而提出，表明维护者已意识到该痛点并正在积极解决。

---

#### 5. Bug 与稳定性

今日报告中包含多个影响系统稳定性和功能完整性的 Bug。

- **严重：持续目标上下文丢失 (Issue #4286)**
  - **影响**：导致 Agent 无法完成复杂的、需要长期记忆的任务。
  - **状态**：Open
  - **已有 Fix PR**: `PR #4359` （`fix(agent): refresh goal continuation context`）专门为此设计，目前处于开放状态。
  [Issue](https://github.com/HKUDS/nanobot/issues/4286) | [PR](https://github.com/HKUDS/nanobot/pull/4359)

- **严重：空模型响应未触发回退 (Issue #4287)**
  - **影响**：主要模型故障时，服务无法自动恢复，产生“死信”，影响用户体验。
  - **状态**：Open
  - **已有 Fix PR**: 暂无针对“回退”的PR，但关联PR `#4358` 改进了“重试”逻辑，可能缓解部分问题。
  [Issue](https://github.com/HKUDS/nanobot/issues/4287) | [关联PR](https://github.com/HKUDS/nanobot/pull/4358)

- **中等：Anthropic工具ID合规性 (PR #4356)**
  - **影响**：当来自其他模型或会话恢复的工具ID包含非法字符（如管道符、点号）时，会导致Anthropic API拒绝请求。
  - **状态**：Open (已有Fix PR)
  [PR](https://github.com/HKUDS/nanobot/pull/4356)

- **中等：MCP服务器崩溃 (PR #4303)**
  - **影响**：`streamableHttp` MCP 服务器会话终止并重连时，会因为任务（`asyncio` task）上下文退出错误而崩溃。
  - **状态**：Open (已有Fix PR)
  [PR](https://github.com/HKUDS/nanobot/pull/4303)

---

#### 6. 功能请求归类

社区推动的新功能主要集中在提升用户体验、WebUI能力和扩展性上。

- **自动化管理 (PR #4330)**：`@chengyongru` 提交了自动化管理视图的WebUI功能，使用户可以在界面上列出、过滤、运行、启停和删除自动化任务。这是一个重要的用户体验提升。
  [PR](https://github.com/HKUDS/nanobot/pull/4330)

- **静默Cron任务 (PR #4357)**：`@franciscomaestre` 提交了“静默”定时任务功能。对于监控类任务，只有在需要报告时才发送消息，避免无意义地打扰用户。
  [PR](https://github.com/HKUDS/nanobot/pull/4357)

- **WhatsApp已读回执 (PR #4354)**：`@franciscomaestre` 为WhatsApp桥接功能增加了发送已读回执（蓝勾）的能力，提升用户体验。
  [PR](https://github.com/HKUDS/nanobot/pull/4354)

- **更好的Mistral模型支持 (PR #4351)**：`@La-Volpe` 提交了PR以更好地适配Mistral API，专门处理了推理力度参数和工具使用方面的严格校验问题。
  [PR](https://github.com/HKUDS/nanobot/pull/4351)

- **新增网络搜索提供商（Keenable）(PR #4350)**：`@IlyaGusev` 将 `Keenable` 添加为内置的网页搜索提供商选项，丰富了工具生态。
  [PR](https://github.com/HKUDS/nanobot/pull/4350)

---

#### 7. 用户反馈摘要

从Issues评论中提炼出的真实用户痛点和使用场景：

- **“优雅降级”的需求**：用户在评论区 (`#4287`) 指出，当模型故障时，一个可靠的回退机制是生产环境部署的硬性要求。用户期望Nanobot在检测到模型返回空内容时，不应只是记录错误，而应主动切换至备选模型。
- **“持续目标”的困惑**：用户在评论区 (`#4286`) 描述了场景，即使在遵照系统提示指示执行任务时，Agent也会突然中断并返回奇怪的“缺少持续目标上下文”错误。这暴露出Agent在长任务执行中，对**自身设定的目标**进行跟踪和回顾的机制存在缺陷。
- **升级后合并冲突**：用户 `@professionelle-hypnose` 在评论中 (`#4322`) 描述了在 `git merge` 过程中出现的 `session_key` 未定义错误。这反映了分支合并和代码重构过程中可能存在的兼容性问题，影响开发人员的日常工作流。

---

#### 8. 待处理积压

以下为长时间未解决或存在维护风险的重要 Issue/PR，提醒关注：

- **Bug: 空模型响应不触发回退 (Issue #4287)**
  - **状态**: Open，已存在6天。此问题关系到服务高可用性，却暂时没有直接的修复PR，建议**高优先级**审视。
  [链接](https://github.com/HKUDS/nanobot/issues/4287)

- **PR: 修复MCP服务器崩溃 (PR #4303)**
  - **状态**: Open，已存在5天。该问题会影响MCP服务器的稳定性，且通过关闭和重连 `streamableHttp` 会话即可复现。对于使用MCP工具的用户影响较大。
  [链接](https://github.com/HKUDS/nanobot/pull/4303)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-16)

## 今日活动概览
过去24小时，项目共更新 **50 条 Issue**（新开/活跃 46 条，关闭 4 条）和 **50 条 PR**（待合并 49 条，已合并/关闭 1 条），无新版本发布。社区讨论集中在多代理路由、渠道回复预检配置、上下文压缩装饰器以及多项安全相关 RFC。此外，多个高优先级 bug 的修复 PR 已提交，CI 流水线完成了一项跨平台编译优化。

## 版本发布
今日无新版本发布。

## 项目进展
- **已合并 PR**
  - [#7669 ci: 在 macOS 和 Windows 构建中使用 `cargo check` 替代完整链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7669) —— 将跨平台 CI 耗时降低，避免每次 PR 全量链接二进制，仅验证编译性。
- **已关闭的 Issue（重要）**
  - [#7542 [Bug] 网关 Web 仪表板中 `ask_user` 立即失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) —— 严重级别 S1（工作流阻塞），今日被关闭，推测已通过相关修复解决。
  - [#6683 skill_manage `patch` 忽略冷却限制](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) —— 已关闭，相关修复已合并。

## 社区热点
以下 Issue/PR 获得最多评论或点赞，反映当前社区关注焦点：

1. **[#2767 多代理路由 (Multi-Agent Routing)](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)**
   - 9 👍，6 条评论。用户要求实现类似 OpenClaw 的多代理路由能力，允许独立的 agent 工作区和多渠道账号绑定。该 issue 被标记为 `priority:p2, status:accepted`，是长期推进的核心功能。

2. **[#6067 渠道回复意图预检可配置化](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)**
   - 5 条评论。用户希望预检步骤使用更小/更快的模型、设置硬超时并输出耗时日志，避免阻塞主路模型且无可见性。已接受。

3. **[#7673 RFC: 原生上下文压缩装饰器](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)**
   - 3 条评论，今日新开。提出在 ModelProvider 层添加 `CompressionDecorator` 包装器，压缩请求负载后再转发，以减少 token 消耗。标记为 `needs-maintainer-review`。

4. **[#7733 Bug: mcp_bundles 配置被解析但运行时未执行](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)**
   - 1 条评论，严重级别 S2。用户发现 `mcp_bundles` 的字段正常显示在诊断中，但运行时根本不生效，导致安全隔离形同虚设。已经被接受。

5. **[#7218 RFC: A2A 代理发现 (.well-known/agent-card.json)](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)**
   - 3 条评论。定义多 agent 场景下 A2A 协议的发现机制，为与外部代理系统互操作铺路。

## Bug 与稳定性
今日报告的 Bug 按严重程度排列如下（S0~S3）：

| 严重度 | Issue # | 标题 | 状态 |
|--------|---------|------|------|
| S1 | #7542 | `ask_user` 在网关 Web 仪表板中立即失败 | **已关闭** |
| S2 | #7733 | `mcp_bundles` 解析但运行时未执行 | 已接受，无 fix PR |
| S2 | #7753 | 通道会话持久化存在同发送者并发排序竞争 | 今日新开，无 fix PR |
| S2 | #7741 | 响应缓存未跳过包含多模态标记的请求 | 今日新开，无 fix PR |
| S2 | #7739 | 邮件渠道 OAuth 刷新失败未重试 | 今日新开，无 fix PR |
| S2 | #7738 | 邮件解析缺少 Message-ID 时回退随机 UUID | 今日新开，无 fix PR |
| S2 | #7742 | 工具分发器切换后系统提示未刷新 | 今日新开，无 fix PR |
| S3 | #7038 | `zeroclaw check` 对 WebSocket 返回 401（有效 auth） | 需复现，等待作者行动 |

此外，**今日提交了多项修复 PR**：
- [#7424 fix(web_fetch): 让 `allowed_private_hosts = ["*"]` 覆盖 DNS 解析的私有主机](https://github.com/zeroclaw-labs/zeroclaw/pull/7424) —— 修复通配符无法匹配通过 DNS 解析到的私有 IP 问题。
- [#7640 fix(delegate): 跳过对 OAuth 目标提供者的全局凭证回退](https://github.com/zeroclaw-labs/zeroclaw/pull/7640) —— 解决子代理 OAuth 认证时可能错误使用协调者全局 API Key 的问题。
- [#7727 fix(doctor): 在诊断中展示 `Config::collect_warnings`](https://github.com/zeroclaw-labs/zeroclaw/pull/7727) —— 让 `zeroclaw doctor` 显示非致命配置警告。

## 功能请求归类
以下为用户提出的新功能需求（enhancement 类型），均附链接：

| 分类 | Issue # | 标题 | 备注 |
|------|---------|------|------|
| 安全与认证 | #1458 | 支持导入本地 CA 证书用于自定义推理提供商 | 已关闭，可能存在历史方案 |
| 安全与认证 | #551 | 允许对 OpenAI 兼容端点忽略 SSL 证书检查 | 状态 blocked，长期积压 |
| 多代理与路由 | #2767 | 多代理路由（Multi-Agent Routing） | 已接受，高赞 |
| 渠道优化 | #6067 | 渠道回复意图预检可配置（小模型+超时+日志） | 已接受 |
| 渠道优化 | #6055 | Slack 首次提及时回填线程上下文 | 已接受 |
| 架构与协议 | #7218 | A2A 代理发现（`.well-known/agent-card.json`） | RFC |
| 架构与协议 | #7673 | 原生上下文压缩装饰器 | RFC，待维护者审核 |
| 架构与协议 | #7674 | WebAssembly 优先，消除 Node.js 依赖 | RFC，优先级别 p3 |
| CI/CD | #7675 | 强化 CI 流水线：供应链扫描、出处、SBOM 生成 | RFC |
| 配置体验 | #7468 | 允许在 TUI 中重命名别名 | 已接受，zerocode 组件 |
| 配置体验 | #7467 | 编辑字符串时允许方向键导航和修正 | 已接受，zerocode 组件 |
| 委托与权限 | #7749 | 支持按 agent 覆盖 `prompt_injection_mode` | 今日新开 |
| 委托与权限 | #7743 | 显式目标 profile 权限用于 delegate 交接 | 已接受 |

## 用户反馈摘要
从 Issue 评论和摘要中提炼的真实用户反馈：

1. **本地 CA 证书与自签名证书需求**（#1458、#551）
   用户希望 Zeroclaw 能连接到使用内部 PKI 或自签名证书的 OpenAI 兼容端点，目前缺乏配置入口。

2. **渠道体验问题**
   - Slack 用户希望在第一次 @提及机器人时能回填整个线程上下文（#6055）。
   - 渠道回复意图预检（#6067）被抱怨耗时长、不可见，用户希望改用更小模型并增加超时日志。
   - 邮件渠道（#7738、#7739）存在 OAuth 刷新失败无重试、消息 ID 不稳定等问题。

3. **配置与 TUI 易用性**
   用户反映在快速启动向导中输入别名时无法退格修正（#7467），且别名一旦输入后无法在 TUI 中重命名（#7468），导致重复配置成本高。

4. **安全隔离隐患**
   - `mcp_bundles` 配置字段虽然能解析显示，但运行时未被使用（#7733），用户质疑这是安全功能的静默失效。
   - 委托（delegate）到 OAuth 提供商时可能错误传递全局凭证（#7640 已修复，用户反馈见 PR）。

5. **会话持久化与并发**
   通道会话持久化存在并发竞争（#7753），多个相同发送者的消息可能被并发处理，导致 session-store 中 `append`/`new_session` 操作的顺序混乱。

## 待处理积压
以下为长期未响应或阻塞的 Issue/PR，提醒维护者关注：

- **[#551 允许不安全 HTTPS 请求到 OpenAI 兼容端点](https://github.com/zeroclaw-labs/zeroclaw/issues/551)**
  创建于 2026-02-17，状态 `blocked`，至今无进展。用户持续反馈同类需求（如 #1458 已关闭但未覆盖此场景）。

- **[#6074 审计：追踪在批量回退 c3ff635 中丢失的 153 个提交](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**
  创建于 2026-04-24，状态 `in-progress`，需要社区帮助以恢复丢失的修复和功能。

- **[#7098 PR: 添加 Mattermost WebSocket 监听模式](https://github.com/zeroclaw-labs/zeroclaw/pull/7098)**
  作者需回应（`needs-author-action`），自 2026-06-02 起未更新，可能因冲突或审核停滞。

- **[#7215 PR: 修复 webhook 渠道配置中端口字段缺失](https://github.com/zeroclaw-labs/zeroclaw/pull/7215)**
  同样标记 `needs-author-action`，影响新用户完成首次配置流程。

- **[#7038 WebSocket 401 认证失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)**
  状态 `needs-author-action`，等待用户提供更多重现信息。

- **[#7532 PR: 对齐 serde 默认值与 struct Default 防止配置保存循环丢失](https://github.com/zeroclaw-labs/zeroclaw/pull/7532)**
  标记 `needs-author-action`，修复影响配置持久化正确性。

*注：以上“待处理积压”基于当前数据中存在的 `blocked`、`needs-author-action`、`needs-repro` 或长期未关闭条目，未包含全部积压。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，以下是为您生成的 PicoClaw 项目日报。

---

## PicoClaw 项目日报

**日期：** 2026-06-16
**数据更新时间：** 2026-06-16 (基于 GitHub 数据)

---

### 1. 今日活动概览

今日项目活动活跃，共产生 13 条 Pull Request (PR) 更新，其中 3 条已被合并或关闭，10 条仍处于待合并状态。Issues 方面更新了 3 条，其中 2 个历史问题被关闭，1 个报告 QQ 频道连接失败的问题仍处于开放状态。此外，项目发布了 `v0.2.9-nightly.20260616` 版本。从提交内容来看，今日社区贡献者主要聚焦于代码健壮性修复，如显式处理错误、添加类型断言检查等。

### 2. 版本发布

**`v0.2.9-nightly.20260616`** ([查看全量更新日志](https://github.com/sipeed/picoclaw/compare/v0.2.9...main))
*   **类型：** Nightly Build (夜间构建)
*   **说明：** 这是一个自动化的夜间构建版本，可能不稳定。已包含自 `v0.2.9` 版本以来的全部合并更改。
*   **注意：** 该版本基于 `main` 分支构建，未提示任何破坏性变更或迁移注意事项。

### 3. 项目进展

以下是今日被合并或关闭的重要 PR，标志着相关功能或修复已进入主分支：

*   **安全诊断改进：** PR [#3126](https://github.com/sipeed/picoclaw/pull/3126) 被合并，改进了 launcher 白名单 (`allowed_cidrs`) 绕过问题的诊断日志，能更清晰地追踪绕过路径。
*   **UI 体验优化：** PR [#3097](https://github.com/sipeed/picoclaw/pull/3097) 被合并，在 Web 聊天输入框下方添加了 “Shift + Enter” 换行提示，提升了用户交互的明确性。
*   **文档更新：** PR [#3096](https://github.com/sipeed/picoclaw/pull/3096) 被合并，在多个 README 文件中添加了 PicoPaw 相关横幅，可能用于推广或关联项目。

### 4. 社区热点

今日社区讨论最为集中的议题是 Issue [#3015](https://github.com/sipeed/picoclaw/pull/3015)：**Windows 上 QQ 频道连接失败**。

*   **核心诉求：** 用户报告在 Windows 发行版中运行 `picoclaw gateway` 命令时，QQ 频道无法启动，出现获取 “app access token” 超时的错误。然而，Pico 频道工作正常。
*   **用户痛点：** 这是一个影响特定平台（Windows）和特定渠道（QQ）集成功能的阻塞性问题，影响了依赖 QQ 渠道的用户。
*   **当前状态：** 该 Issue 处于开放状态，目前有 3 条评论，尚未看到维护者或贡献者提出明确的解决方案。

### 5. Bug 与稳定性

今日报告的 Bug 及稳定性修复工作主要集中在代码质量提升上：

*   **安全漏洞 (已关闭并修复):**
    *   **严重程度：高**
    *   **描述：** Issue [#3069](https://github.com/sipeed/picoclaw/issues/3069) 报告了 `allowed_cidrs` 访问控制可以被同主机反向代理绕过的安全漏洞，原因是代码信任了 `RemoteAddr` 字段。
    *   **进展：** 该 Issue 已于今日关闭。同时，PR [#3126](https://github.com/sipeed/picoclaw/pull/3126) 针对此问题改进了诊断日志，以使绕过行为更容易被检测。

*   **代码健壮性修复 (多个待合并 PR):**
    *   贡献者 `@chengzhichao-xydt` 提交了一系列 PR，专注于修复潜在的程序崩溃或静默错误问题，包括：
        *   **goroutine 恐慌恢复：** PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) 为核心路径上的 goroutine 添加了 `defer-recover` 保护。
        *   **类型断言安全检查：** PR [#3054](https://github.com/sipeed/picoclaw/pull/3054) 和 [#3131](https://github.com/sipeed/picoclaw/pull/3131) 为 `sync.Map` 和工具 schemas 的类型断言添加了 `ok` 检查，防止 panic。
        *   **错误显式忽略：** PR [#3059](https://github.com/sipeed/picoclaw/pull/3059), [#3127](https://github.com/sipeed/picoclaw/pull/3127), [#3128](https://github.com/sipeed/picoclaw/pull/3128), [#3129](https://github.com/sipeed/picoclaw/pull/3129) 显式忽略了在错误路径或已读取完成后的 `Close()` 方法返回值，以符合 linter 规范并澄清意图。
        *   **JSON 错误处理：** PR [#3130](https://github.com/sipeed/picoclaw/pull/3130) 处理工具中的 `json.Marshal` 错误，避免了静默返回空字符串。
    *   **影响分析：** 这些修复旨在提升项目整体的稳定性和代码质量，降低因意外 panic 或未处理错误导致服务中断的风险。

### 6. 功能请求归类

*   **Telegram 群聊交互优化：** PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) (开放中) 请求了在 Telegram 群聊中，回复机器人消息也应被视为 `@提及` 的功能。这解决了用户在使用 `mention_only` 配置时的交互不便。

### 7. 用户反馈摘要

*   **硬件兼容性问题：** Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) (已关闭) 报告了在 RISC-V 架构的 Debian 系统上，`.deb` 安装包无法与 OpenAI 模型正常配合使用。用户在环境信息中指出了 PicoClaw 版本、Go 版本（`1.25.9`）及具体模型。该问题因长时间未回应被标记为过期关闭。
*   **平台特定连接问题：** Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015) (开放中) 中，用户明确指出在 Windows 平台上，QQ 频道功能存在 token 获取超时错误，而其他平台或渠道（Pico）工作正常。这表提示了平台兼容性方面可能存在的 BUG。

### 8. 待处理积压

*   **长期未响应的功能请求：** PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) 提出了 Telegram 群聊交互改进，创建于 2026-05-30，距今已有约 17 天，仍处于开放状态，尚未收到维护者的明确反馈或合并。
*   **功能修复类 PR：**
    *   PR [#3047](https://github.com/sipeed/picoclaw/pull/3047) (fix: 恢复会话详情中的完整 JSONL 历史) 和 PR [#3054](https://github.com/sipeed/picoclaw/pull/3054) (fix: LINE 频道类型断言检查) 也创建于 2026-06-07 和 06-08，等待合并。
*   **平台 Bug 修复：** Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015) (Windows QQ 频道失败) 在没有解决方案的情况下保持开放，需要维护者关注并尝试复现。

</details>