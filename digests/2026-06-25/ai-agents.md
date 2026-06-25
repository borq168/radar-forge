# OpenClaw 生态日报 2026-06-25

> Issues: 346 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-25 00:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-06-25)

## 今日活动概览
过去24小时内，OpenClaw 项目共产生 **346 条 Issues 更新**（新开/活跃 281 条，已关闭 65 条）和 **500 条 PR 更新**（待合并 447 条，已合并/关闭 53 条），并发布了 **2 个新版本**：`v2026.6.10` 和 `v2026.6.11-beta.1`。新版本引入了 Slack 中继模式、Mattermost `/oc_queue` 命令、每 DM 模型覆盖、对话快速模式自动切换以及更可靠的模型路由。社区活跃度集中在跨平台客户端需求、会话状态持久化缺陷、子代理生命周期管理以及通道平台兼容性修复上。

## 版本发布
### v2026.6.11-beta.1
- **亮点**：更强的频道控制能力，包括 Slack 中继模式、原生 Mattermost `/oc_queue` 命令以及每个 DM 的模型覆盖，使频道操作更易自动化和调整。感谢 @sjf-oa, @amknight, @xydigit-zt, @thomaszta, @gandalf-at-lerian。
- **相关 Issue/PR**：#94707, #95546, #95120。
- **注意**：Beta 版本，可能存在稳定性风险，建议在测试环境先行验证。

### v2026.6.10
- **亮点**：对话快速模式自动切换（短轮次快速响应，长轮次回退至正常模式），以及更可靠的模型路由（Zai 模型合成相关优化）。感谢 @alexph-dev, @vincentkoc。
- **相关 Issue**：#85104。

两个版本均无明确标记的破坏性变更，但建议升级前备份 `~/.openclaw` 目录，尤其关注 `memory` 和 `agents` 子目录的迁移行为（参考今日修复 #95495 中的内存存储重定位问题）。

## 项目进展
今日合并/关闭的 PR 中值得关注的有：
- **#96595** (ci): 默认成熟度证据改为 `all` 配置，使 QA Profile 工作流在手动触发时使用完整分类证据。
- **#96594** (docs): 明确成熟度评分卡的评分方式，将“覆盖率”从标题分数中分离，仅用“质量+完整性”计算成熟度分数。
- **#96227** (fix): 为 HTTP 入口流量（`/v1/responses`, `/v1/chat/completions`）发出 `model.usage` 诊断事件，填补了令牌和成本数据的空白。
- **#96152** (fix): 同样针对 HTTP 入口流量发出 `model.usage` 诊断事件（与 #96227 重复修复，均已被合并）。
- **#96599** (fix): 在频道中向上汇报提供商身份验证失败（404/401）给用户，而不是静默无响应（关联 #80040）。
- **#90419** (fix): 在 `dispose()` 时强制释放会话锁，防止孤儿锁导致会话永久阻塞。

这些合并表明维护者正在集中解决诊断可观测性缺陷、频道异常反馈以及资源锁释放问题。

## 社区热点
以下 Issues 今日讨论最为活跃（评论数10+），反映了用户的核心关切：

| Issue | 评论 | 主题 | 链接 |
|-------|------|------|------|
| #75 | 109 | **Linux/Windows Clawdbot Apps**：用户要求补齐桌面端，macOS/iOS/Android 已有，但 Linux 和 Windows 缺失。 | [链接](https://github.com/openclaw/openclaw/issues/75) |
| #88838 | 35 | **会话/转录 SQLite 迁移跟踪**：维护者正在推动文件后端接入适配器，但仍有多个直接调用点待改造。 | [链接](https://github.com/openclaw/openclaw/issues/88838) |
| #32473 | 17 | **控制 UI 要求 HTTPS 或 localhost 安全上下文**：用户在使用 VPS + Docker 时遇到 Brave 密钥配置问题，提示“control ui requires device identity”。 | [链接](https://github.com/openclaw/openclaw/issues/32473) |
| #22676 | 17 | **Signal 守护进程 SIGUSR1 重启竞态**：导致孤儿进程和发送失败，新实例在旧实例释放端口前启动。 | [链接](https://github.com/openclaw/openclaw/issues/22676) |
| #96148 | 17 | **iMessage 源-回复延迟追踪**：跟踪 iMessage 响应延迟和性能调查。 | [链接](https://github.com/openclaw/openclaw/issues/96148) |
| #29387 | 14 | **Bootstrap 文件（SOUL.md等）在 agentDir 中被忽略**：只加载 `workspace` 目录中的文件。 | [链接](https://github.com/openclaw/openclaw/issues/29387) |
| #57901 | 14 | **Safeguard 压缩忽略 `compaction.model` 配置**：使用会话主模型而非自定义模型。 | [链接](https://github.com/openclaw/openclaw/issues/57901) |

**分析**：跨平台（#75）和频道兼容性（#32473, #22676, #96148）是用户最迫切的痛点。其中 #75 自2026年1月开放已逾半年，仍无实质进展，社区呼声极高。会话状态相关的配置忽略（#29387, #57901）也吸引了大量关注。

## Bug 与稳定性
今日报告的严重 Bug（按影响范围排列，P1级别优先）：

### P1 / P0 级别
| Issue | 描述 | 影响 | 是否有修复 PR |
|-------|------|------|---------------|
| #22676 | Signal 守护进程 SIGUSR1 重启竞态——孤儿进程和发送失败 | 消息丢失、崩溃循环 | 无（linked-pr-open 未标记） |
| #29387 | Bootstrap 文件在 agentDir 中被忽略 | 会话状态缺失、配置失效 | 有（标记 `linked-pr-open`，但未指明 PR） |
| #48003 | Steer 模式未在回合中注入消息 | 消息丢失、会话状态不一致 | 有（标记 `linked-pr-open`） |
| #40001 | Write 工具缺少追加模式，孤立 cron 会话覆盖共享文件 | 数据丢失 | 有（标记 `linked-pr-open`） |
| #86996 | Active Memory + Codex 应用服务器路径导致长延迟、钩子超时、启动中止、事件循环停滞 | 用户体验严重下降，简单Telegram DM变慢 | 无（标记 `linked-pr-open` 未具体） |
| #85030 | MCP 工具未注入子代理会话（`sessions_spawn`） | 子代理功能受限 | 无（标记 `linked-pr-open`? 实际未标） |
| #94228 | 原生 Anthropic 路径：回放历史 `thinking` 块阻塞长工具链会话（`Invalid signature` 400） | 会话永久不可用 | 无 |
| #87109 | macOS 上网关堆内存增长至1073MB+，空闲状态下 cron 任务静默失败 | 资源耗尽、任务丢失 | 无 |
| #85844 | 自动更新后网关使用旧散列包导入导致运行时错误 | 更新后功能异常 | 无 |

### P2 级值得关注
- #95495（已关闭）：v2026.6.9 静默迁移内存存储位置，导致全量重嵌入（1499文件）。虽然已标记为关闭，但迁移策略需要改进。
- #45765：`OPENCLAW_HOME` 设置为 `~/.openclaw` 时产生嵌套目录 `~/.openclaw/.openclaw`。有修复 PR #87255 待合并。
- #37966：`cacheRetention` 对 LiteLLM 代理的 Anthropic 模型无效。
- #72031：`image` 工具在 Bedrock `aws-sdk` 认证模式下因 `requireApiKey` 失败。
- #58514：Google Chat 空间/群组消息静默忽略（DM正常）。
- #53486：Feishu 卡 JSON 被作为纯文本发送（回归）。
- #91804：内部推理泄漏到用户响应（v2026.6.5 回归）。
- #39847：回声污染——`stripInboundMetadata` 未在出站交付管道中调用。

## 功能请求归类
以下为今日活跃的功能请求（`enhancement` 标签或类似描述），按领域分组：

| 领域 | Issue | 摘要 | 链接 |
|------|-------|------|------|
| **跨平台** | #75 | 提供 Linux/Windows Clawdbot 应用（评论最多） | [链接](https://github.com/openclaw/openclaw/issues/75) |
| **频道增强** | #12602 | Slack Block Kit 支持，实现富交互响应 | [链接](https://github.com/openclaw/openclaw/issues/12602) |
| | #20786 | Telegram Business Bot 支持（business_message/business_connection） | [链接](https://github.com/openclaw/openclaw/issues/20786) |
| | #17840 | 反应触发 Agent 回合（emoji 投票等） | [链接](https://github.com/openclaw/openclaw/issues/17840) |
| | #33413 | Slack 显示工具级进度（替代静态“typing…”） | [链接](https://github.com/openclaw/openclaw/issues/33413) |
| **安全与权限** | #7722 | 文件系统沙箱配置（`tools.fileAccess`） | [链接](https://github.com/openclaw/openclaw/issues/7722) |
| | #6615 | exec-approvals 的拒绝名单功能 | [链接](https://github.com/openclaw/openclaw/issues/6615) |
| | #12678 | 基于能力的技能/工具权限模型（默认拒绝高风险操作） | [链接](https://github.com/openclaw/openclaw/issues/12678) |
| **运维与可靠性** | #13616 | 备份/恢复工具（配置、cron、会话历史） | [链接](https://github.com/openclaw/openclaw/issues/13616) |
| | #12855 | 内置自动更新（可配置计划、确认、通知） | [链接](https://github.com/openclaw/openclaw/issues/12855) |
| | #14747 | 可配置通道等待诊断阈值（当前硬编码2秒） | [链接](https://github.com/openclaw/openclaw/issues/14747) |
| | #86881 | Gateway-lite 模式（不含 AI 引擎的轻量部署） | [链接](https://github.com/openclaw/openclaw/issues/86881) |
| **子代理/日志** | #38626 | 子代理生命周期可观测性与异步监督控制 | [链接](https://github.com/openclaw/openclaw/issues/38626) |
| | #33962 | slug生成器使用轻量模型而非主模型，避免通道拥塞 | [链接](https://github.com/openclaw/openclaw/issues/33962) |

这些请求体现了用户在跨平台覆盖、安全管控、运维自动化与频道交互丰富度方面的长期需求，目前尚无明确排期。

## 用户反馈摘要
从 Issues 评论中提取的真实用户痛点：

- **“I'm using a Hostinger VPS and Docker, and after configuring the Brave key, I'm receiving the reported error: control ui requires device identity。”**（#32473）——用户无法在非 HTTPS 环境下使用控制 UI，反馈无安全上下文。
- **“During SIGUSR1 gateway restarts, the signal daemon sends SIGTERM to signal-cli but does not wait for the process to exit... resulting in orphaned processes and send failures。”**（#22676）——用户报告重启竞态导致消息丢失。
- **“When per-agent `agentDir` is configured... placing bootstrap `.md` files inside that directory has **no effect**。”**（#29387）——用户配置被静默忽略。
- **“Isolated cron sessions using the `write` tool overwrite shared workspace files... causing silent data loss when multiple sessions run concurrently。”**（#40001）——用户因缺少追加模式丢失数据。
- **“OpenClaw becomes very slow/unreliable for simple Telegram direct messages when using active-memory + openclaw-honcho + lossless-claw。”**（#86996）——用户反馈性能退化到无法使用。
- **“After upgrading from 2026.6.8 to 2026.6.9, memory vector store relocated... forcing a full re-embed (1499 files) with zero upgrade-time warning。”**（#95495）——用户抱怨无预警迁移。
- **“Feishu messages received but dispatch to agent fails: TypeError: Cannot read properties of undefined (reading 'run')。”**（#88073）——Feishu 频道完全不可用。
- **“After an OpenClaw auto-update, the running gateway process can continue using cached modules that reference old hashed bundle

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的资深技术分析师，我已审阅您提供的各项目2026-06-25动态。以下是根据今日数据生成的横向对比分析报告。

---

### AI智能体项目横向对比分析日报 (2026-06-25)

#### 1. 今日横向概览

今日，OpenClaw 项目保持着极高的社区活跃度，发布了两个新版本，并集中处理了会话持久化和跨平台客户端等核心诉求。NanoBot 社区矛盾凸显，一方面因新功能（Rich Messages）导致严重兼容性问题引发用户不满，另一方面“超轻量”宣传与实际技术栈的差异受到质疑。Zeroclaw 则聚焦于多租户安全隔离与身份认证等生产级架构问题，并修复了一个严重的MCP权限孤立漏洞。相比之下，PicoClaw 项目社区活跃度较低，但处理了一批积压的安全报告并提交了多项修复PR。

#### 2. 各项目活跃度对比

| 项目 | 活跃 Issues (新开/更新) | 关闭 Issues | 待合并 PRs | 合并/关闭 PRs | 新版本发布 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **281** | **65** | **447** | **53** | **2** (v2026.6.10, v2026.6.11-beta.1) | 活动量远超其他项目，社区讨论激烈，跨平台需求(#75)呼声极高。 |
| **NanoBot** | 10 | 8 | 27 | 19 | 0 | 社区讨论热度高，但矛盾集中，围绕安全漏洞与新功能兼容性存在争议。 |
| **Zeroclaw** | 44 | 6 | 46 | 4 | 0 | 活动量中等，议题聚焦于安全架构和身份认证等长期生产需求。 |
| **PicoClaw** | 0 | 13 (含12个安全报告) | 8 | 0 | 0 | 今日活跃度最低，主要为处理积压安全报告和提交修复PR。 |

#### 3. OpenClaw 与同类对照

*   **活动量与广度**：**OpenClaw 是今日绝对核心**。其 Issues 和 PR 数量均是其他项目的数倍甚至数十倍，展示了最活跃的社区生态和维护节奏。相比之下，其他项目更聚焦于特定问题的修复或讨论。
*   **技术重点**：
    *   **OpenClaw**：重点在于 **功能扩展与体验优化**，如发布新版本（Slack中继、快速模式切换）、解决会话持久化缺陷、提升诊断可观测性。
    *   **NanoBot**：重点在于 **安全修复与兼容性问题**，如MCP安全绕过、Telegram Rich Messages回归问题。
    *   **Zeroclaw**：重点在于 **生产级安全架构**，如多租户RBAC、OIDC认证、MCP权限隔离。
    *   **PicoClaw**：重点在于 **兼容层与稳定性修复**，如修复OpenAI兼容接口问题、心跳优化。
*   **社区讨论焦点**：
    *   **OpenClaw的社区痛点** 高度聚焦于 **跨平台客户端缺失**（#75），该Issue开放半年仍无实质进展，社区呼声最高。
    *   **NanoBot的社区矛盾** 更 **多元化**，既有对定位的质疑（#660“超轻量”之辩），也有对新功能影响核心体验的强烈不满。
    *   **Zeroclaw的社区诉求** 则更加 **“企业级”**，用户关注的是生产环境中多租户、安全隔离、身份认证等高级功能。

#### 4. 共同出现的技术方向

今日数据中，多个项目都出现了以下共同的技术方向：

*   **跨平台与客户端需求**：
    *   **OpenClaw**：Issue #75（Linux/Windows Clawdbot Apps）是目前社区呼声最高的诉求。
    *   **NanoBot**：多个Issue和PR关注WebUI移动端体验（#4479 PWA、#4388 iOS输入框）、Telegram客户端兼容性（#4488, #4499）。
    *   **Zeroclaw**：RFC #5982 讨论多租户角色权限，同样可被视为一种跨工作空间的平台能力。
*   **安全漏洞与权限控制**：
    *   **OpenClaw**：Bug清单中存在大量P1级别的安全相关Bug，如子代理API密钥转发、原生Anthropic路径问题。
    *   **NanoBot**：严重Bug #4434、#4435直接指向前端开发中MCP安全机制的逻辑漏洞。
    *   **Zeroclaw**：严重Bug #7733（MCP权限配置无效）与功能请求#7141（OIDC认证）共同指向安全与权限管理的核心地位。
    *   **PicoClaw**：今日关闭的12个安全报告中，涉及SSRF、授权绕过、CSRF等多种类型。
*   **新平台/渠道集成**：
    *   **OpenClaw**：新版本重点增强了Slack和Mattermost的频道控制能力。
    *   **NanoBot**：有请求或PR支持Mattermost（#4459）、Webhook（#4502）。
    *   **Zeroclaw**：有请求支持Telegram webhook（#8046）和DingTalk流式输出（#8228）。
    *   **PicoClaw**：新增了DeltaChat网关（PR #3063）。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | **综合性AI助手平台**，强调多渠道、多模型、自动化（如快速模式切换）和强大的频道控制能力。 | **集成开发辅助Agent**，与代码编辑器、MCP生态深度绑定，强调“轻量”和“本地优先”。 | **生产级/企业级多租户Agent网关**，核心是安全隔离、RBAC、身份认证、供应链安全。 | **嵌入式/边缘计算Agent**，强调资源占用小、硬件兼容性（Sipeed），核心是OpenAI兼容层和Pico WebSocket协议。 |
| **目标用户** | 追求功能全面、跨平台个人和团队用户，重视自动化部署和运维。 | 开发者，尤其是进行AI编程、代码审查、项目管理的软件工程师。 | 企业组织，有严格的安全合规、多租户管理、高可用性要求的IT运维和平台团队。 | **硬件开发者**和**嵌入式系统爱好者**，以及在资源受限设备上运行AI Agent的用户。 |
| **技术架构** | 模块化，有“网关-客户端-Agent”的清晰分层，支持丰富的模型路由和工具调用。 | 技术栈存在**争议**（Python + Node.js），虽有“轻量”之名，但架构复杂度不低。核心依赖MCP进行工具集成。 | 强调**身份与安全架构**，如OIDC、SCIM（推测）、RBAC等企业级“骨架”。配置驱动，`mcp_bundles`是其MCP隔离的关键概念。 | **极简**，聚焦于核心兼容层（OpenAI兼容）和硬件协议（Pico WebSocket），依赖外部服务如LLM API完成智能任务。 |

#### 6. 社区活跃度记录

基于今日的数据，可将项目活跃度分为三个层级：

*   **第一梯队（极高活跃度）**：**OpenClaw**
    *   **证据**：346条Issues更新、500条PR更新、发布2个新版本。社区讨论覆盖了从功能请求、Bug修复到用户痛点的广泛议题。
*   **第二梯队（中高活跃度）**：**NanoBot** 和 **Zeroclaw**
    *   **证据**：两者在Issues和PR数量上相近，但**NanoBot**因特定问题（安全、兼容性）导致社区讨论热度高且矛盾集中；**Zeroclaw**的讨论则更聚焦于架构设计和长期功能规划。
*   **第三梯队（低活跃度）**：**PicoClaw**
    *   **证据**：今日活跃Issues为0，PR数量少且无合并，主要活动是关闭积压的安全报告。这表明项目进入周期性的沉寂阶段，或社区主要活动不在GitHub Issues/PR板块。

#### 7. 有证据支撑的观察

*   **安全问题成为跨项目、高优先级公敌**：从OpenClaw的P1漏洞列表，到NanoBot的MCP绕过，再到Zeroclaw的MCP权限失效和PicoClaw的海量安全报告，今日四个项目均曝出了严重安全缺陷。这表明当前AI Agent开源领域在模型路由、工具调用、多租户隔离等核心机制上仍处于安全“补课”阶段。
*   **跨平台客户端是用户最迫切的基础设施缺口**：OpenClaw的#75和NanoBot的#4388、#4499，都指向用户对统一、稳定、多端一致的客户端体验的强烈渴望。这不仅是功能缺失，更是制约项目从小众开发者工具走向大众化应用的关键瓶颈。
*   **MCP生态正在经历“规范化”阵痛**：NanoBot和Zeroclaw今日都暴露了MCP集成机制的安全漏洞（权限绕过、配置失效），而PicoClaw也在修复OpenAI兼容层的XML工具调用问题。这表明随着MCP的普及，其安全模型、配置解析和跨平台兼容性正成为开发者必须解决的关键挑战。
*   **性能与“轻量”的平衡是持续的技术难题**：NanoBot用户对“超轻量”定义的质疑（#660）以及OpenClaw用户报告的内存泄漏（#87109）和全重嵌入问题（#95495），共同揭示了AI Agent在追求功能丰富和易用性的同时，与资源占用、性能稳定性之间的矛盾。用户对“轻量”的期望，正在成为验证项目技术优越性的硬指标。
*   **Zeroclaw的项目定位使其社区讨论呈现“企业级”特征**：与其他三个项目关注个人开发者体验不同，Zeroclaw的Issues讨论更侧重于RBAC、OIDC、SLSA溯源等企业级安全与治理议题。这使其社区氛围更像一个技术架构的讨论组，而非用户反馈的窗口，体现了其作为企业级基础平台的项目定位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域的开源项目分析师，我已根据您提供的NanoBot (github.com/HKUDS/nanobot) GitHub数据，为您生成了2026年6月25日的项目动态日报。

---

### NanoBot 项目动态日报 | 2026年6月25日

#### 1. 今日活动概览

过去24小时，NanoBot项目活动活跃，社区提交了大量反馈和代码。共更新了18条Issues，其中新开10条，关闭8条；PR方面有46条更新，待合并27条，已合并或关闭19条。项目无新版本发布。社区讨论主要集中在安全漏洞修复、Telegram Web兼容性问题以及Rich Messages功能引入的回归问题这三个方面。

#### 3. 项目进展

今日合并或关闭了多个关键修复和功能PR，有效推进了项目进展。

- **MCP安全漏洞修复**：针对社区报告的两个MCP安全漏洞（`#4434` 和 `#4435`），维护者已合并相关修复PR `#4436`和 `#4452`，确保 `enabledTools` 配置对resources和prompts也生效，并支持真正的“拒绝全部”策略。
- **Kimi Coding Plan支持**：PR `#4464` 已完成合并，为订阅用户新增了 `kimi_coding` 提供商，通过 Anthropic Messages API 端点连接 Kimi Coding Plan。
- **OpenCode新提供商支持**：PR `#4475` 已合并，正式加入 **OpenCode Zen** 和 **OpenCode Go** 两个新的模型提供商。
- **WebUI多项修复**：
    - PR `#4487` 修复了 `apply_patch` 在多文件编辑场景下，文件编辑记录被覆盖的Bug。
    - PR `#4498` 可能是一个同步分支的无效PR，已被关闭。
- **Telegram Rich Messages兼容性**：PR `#4505` 和 `#4495` 已提交，旨在解决Rich Messages功能在Telegram Web和Telegram X客户端上的兼容性问题，通过添加配置开关和降级方案来应对。

#### 4. 社区热点

今日社区讨论最活跃的议题集中在两个矛盾的诉求上：**性能优化** 与 **功能扩展**。

- **关于“超轻量”定义的质疑**：[Issue #660](https://github.com/HKUDS/nanobot/issues/660) 成为了社区争议焦点，获得5个👍和11条评论。用户 `@besoeasy` 指出，项目虽自称“超轻量”，但Dockerfile中同时依赖Python和Node.js，这种技术矛盾引发了社区对项目定位和资源消耗的讨论。这是一个长期存在但未解决的痛点，背后是用户对“轻量级”实际表现的高期望与现实之间的落差。
- **Rich Messages功能引发的兼容性问题**：围绕Telegram Rich Messages的多个Issue (`#4413`, `#4488`, `#4470`) 和对应PR联动，形成了今日第二大热点。用户对v0.2.2版本引入的Rich Messages功能既有期待，也因导致Telegram Web端无法显示消息、换行失效等问题表达了强烈不满。这显示了新功能在带来更丰富格式的同时，也因兼容性不足影响了核心用户体验。
- **MCP安全漏洞**：[Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) 和 `#4435` 虽然技术性强，但因其直接关联到MCP安全机制的核心，引起了核心贡献者的高度关注。这两个漏洞揭示了 `enabledTools` 配置存在逻辑缺陷，可能导致模型绕过白名单控制。

#### 5. Bug 与稳定性

今日报告的Bug主要集中在新功能的兼容性和核心组件稳定性上。

- **严重 - MCP安全机制绕过** (Issues `#4434`, `#4435`)：`enabledTools` 的拒绝全部和允许列表功能均存在绕过漏洞，可导致MCP的resources和prompts在未授权情况下暴露给模型。**已有PR `#4436` 和 `#4452` 修复**。
- **严重 - 流式响应导致会话中毒** (Issue `#4442`)：使用Anthropic系列提供商时，流式响应可能出现重复的 `tool_use` ID，导致后续请求被API拒绝，Agent静默停止响应。**已于昨日关闭**，表明已有修复。
- **高 - Telegram Web消息空白/不兼容** (Issues `#4499`, `#4488`)：
    - Agent在Telegram频道中可能发送空消息。
    - Telegram Web客户端显示“该消息不受支持”，仅Android客户端正常。
    **已有PR `#4505` 和 `#4495` 提供修复方案。**
- **中 - 多个回归问题**：
    - `#4470` 报告v0.2.2后Telegram消息换行失效。
    - `#4500` 报告WebUI首页发送消息不跳转、停止按钮失效。
    - `#4465` 报告WebUI未能正确渲染 `<thinking>` 标签。
- **中 - WebUI移动端体验**：
    - `#4388` 报告iOS Safari输入框仍触发页面自动放大，虽之前有修复，但问题依旧。
    - `#4492` 报告小米MiMo ASR因WebM格式不被支持导致转录音失败。**已有对应修复PR `#4493`**。
- **中 - DingTalk集成Bug** (Issue `#4497`)：
    - 不支持富文本格式 `richText`。
    - 发送文件时发生HTTP超时错误。**已有对应修复PR `#4501`**。

#### 6. 功能请求归类

今日用户提出的功能请求类型多样，涵盖新平台集成、新模型提供商、用户界面增强及开发者配置便利性。

- **新平台/渠道集成**：
    - `#4479` 请求WebUI支持PWA（渐进式Web应用）和移动端侧滑手势。
    - `#4459` (PR) 请求新增 **Mattermost** 频道支持。
    - `#4502` (PR) 请求新增 **Webhook触发器**功能，作为网关的入站触发方式。
- **新模型/服务提供商**：
    - `#4463` (已关闭) 请求支持 **Kimi Coding Plan**。 (已通过PR `#4464` 实现)
    - `#4475` (已关闭) 请求支持 **OpenCode Zen** 和 **OpenCode Go**。 (已通过同名PR实现)
- **新功能/工具**：
    - `#4440` 请求添加只读的 `search_history` 工具用于回忆记忆。 (有对应PR `#4439`)
    - `#4429` 请求允许自定义提供商配置其思考风格（thinking style）。 (有对应PR `#4482`)
    - `#4491` (PR) 请求为Workspace的Dream功能添加prompt覆盖能力。
    - `#4496` (PR) 请求将CLI Agent的跨频道消息转发到网关，解决CLI模式下消息丢失问题。
    - `#4503` 提议在README中添加来自第三方 `HVTracker` 的信任徽章。
- **开发者/配置体验**：
    - `#4438` (PR) 修复CLI引导向导中搜索引擎列表显示错误的问题。
    - `#4490` 请求为OpenAI兼容API添加认证，当绑定到非本机接口时强制鉴权。
    - `#4504` (PR) 请求支持skills在子目录中组织，以便于管理。

#### 7. 用户反馈摘要

从今日的Issues评论中，可以提炼出以下几点核心用户反馈：

- **性能与体验的矛盾**：用户对“超轻量”的声明显然抱有极高期待，任何与预期不符的地方，如额外的Node.js依赖（`#660`），都会引发强烈不满。这表明在项目定位宣传上，需更精确地定义“轻量”边界。
- **对新功能兼容性的强烈关注**：Rich Messages功能（`#4488`, `#4470`, `#4499`, `#4495`）的引入，因破坏了Telegram Web和Telegram X部分用户的正常使用，引发了大量投诉。用户反馈的核心诉求是“新功能好，但别影响现有核心功能”，这提醒维护者新功能的全面兼容性测试至关重要。
- **对WebUI体验的持续追求**：多个关于WebUI的Bug (`#4465`, `#4500`, `#4388`) 和功能请求 (`#4479`)，反映出用户对WebUI作为核心交互界面的体验要求很高，从移动端手势、PWA支持到基本的渲染逻辑，任何细微的不顺畅都会被发现。
- **对安全机制的高度敏感**：MCP安全旁路Issue (`#4434`, `#4435`) 虽技术性强，但用户与贡献者均积极参与讨论和提交修复PR。这表明社区对于涉及模型权限和资源暴露的安全问题非常警觉，反馈质量高。

#### 8. 待处理积压

以下为长期未得到解决或需维护者关注的重要议题：

- **`#660` [OPEN] 项目“超轻量”声明与实际依赖不符**：此Issue自2026年2月提出，已有11条评论和5个👍，反映了社区对项目技术栈选择的持续关注和讨论。目前处于开放状态，未见维护者明确回复或解决方案，建议维护者予以回应，澄清或讨论改进方向。
- **`#4434` 和 `#4435` [OPEN] MCP安全漏洞**：尽管已有对应的修复PR (`#4436`, `#4452`)，但这两个关键安全问题仍处于Open状态。建议尽快将其与对应的PR进行关联，或者关闭以表明已修复，避免后续混淆。
- **`#4388` [CLOSED] iOS Safari页面放大问题**：此Bug被标记为已关闭，但从用户报告看问题依然存在。维护者可能需要重新打开该Issue或发布一个更新的修复版本。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，以下是基于您提供的 Zeroclaw 项目数据生成的 2026-06-25 项目动态日报。

---

# Zeroclaw 项目动态日报 | 2026年6月25日

## 1. 今日活动概览

过去24小时内，Zeroclaw 项目社区活跃度极高，共产生 50 条 Issue 和 50 条 PR 更新。Issue 方面，有 44 个新开或活跃讨论，6 个被关闭；PR 方面，有 46 个处于待合并状态，4 个被合并或关闭。项目未发布新版本。社区讨论焦点集中在**多租户安全隔离**、**身份认证与授权**以及**供应链安全**等核心架构问题上，多个高优先级的功能请求和 Bug 修复处于活跃开发或审查阶段。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展 (重要PR合并/关闭)

今日有 4 个 PR 被合并/关闭，以下为关键进展：

- **MCP 权限孤立问题修复**：PR [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747)（`fix(runtime): wire mcp_bundles into agent loop`）被合并。该 PR 解决了之前在 Issue [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 中报告的严重安全漏洞：`mcp_bundles` 配置在解析后未被运行时强制执行，导致所有 Agent 均可访问所有 MCP 服务器，使按 Agent 隔离 MCP 功能的配置形同虚设。此修复确保了 `mcp_bundles` 配置在 Agent 循环中被正确实施。

## 4. 社区热点 (高讨论度/评论数最多的Issues/PRs)

今日社区讨论最热烈的议题集中在安全性与可扩展性，反映了用户对生产级部署的迫切需求。

- **#5982: 多租户角色权限控制 (RBAC)**：该 Issue ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)) 以 9 条评论位居讨论榜首。用户 `@metalmon` 提出为单实例多租户部署添加基于发送者的 RBAC，实现工作空间、工具集、速率限制和系统提示的完全隔离。这被视为生产环境部署的核心功能，虽然提出已有一段时间，但讨论热度不减。

- **#7141: OIDC 认证提供者支持**：作为安全架构的关键一环，此 RFC ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) 拥有 6 条评论。它旨在引入可插拔的 OIDC 认证支持，是构建统一身份认证体系的基础。

- **#6289: 缺失技能/插件的自动安装推荐**：该功能 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)) 收获了 5 条评论，反映了用户对提升 Agent 易用性和可发现性的需求。当用户提出请求但系统未安装所需技能时，Agent 应能主动推荐并引导安装，而非简单地回复“无法执行”。

- **#8177: 供应链签名与SLSA溯源 (RFC)**：此 RFC ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)) 同样获得 5 条评论，表明社区对软件供应链安全的关注度正在提升。提案要求引入硬件 PGP 密钥、可重现构建和 SLSA 证明，以增强对发布包和容器镜像的信任。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在运行时、安全和配置领域，部分问题已有对应修复。

- **高危 Bug - MCP 子进程泄漏**：[#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) 报告，当 `heartbeat.enabled = true` 时，每个心跳周期会产生一个孤立的 MCP 子进程，长期运行后导致进程累积。此问题可能导致资源耗尽，目前尚无修复PR。

- **高危 Bug - MCP 权限配置无效**：Issue [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 指出 `mcp_bundles` 配置在运行时未强制执行，这是一个安全相关的静默误操作。**已于今日通过 PR [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) 修复并合并**。

- **高危 Bug - 子代理API密钥转发**：[#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) 报告，委托给需要 OAuth 认证的子代理时，`resolve_brain` 错误地转发了主协调器的 API 密钥，导致认证失败。该问题被标记为 P1 优先级，目前状态为“进行中”。

- **高危 Bug - 模型范围权限逃逸**：[#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) 指出，`/model --agent` 命令允许任何用户更改整个 Agent 的模型，缺乏按发送者授权的检查，存在权限覆盖风险。该问题已被接受。

## 6. 功能请求归类

用户提出的新功能请求主要集中在以下几个方向：

- **安全与身份认证**：
    - 请求添加 OIDC 认证支持 ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))。
    - 请求为本地浏览器登录添加用户名/密码认证提供者 ([#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076))。
    - 请求实现按 Agent 的自定义环境变量配置，用于处理多租户下的密钥与身份管理 ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226))。

- **平台与API集成**：
    - 请求支持 Telegram webhook 模式作为当前长轮询的替代方案 ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046))。
    - 请求支持 DingTalk (钉钉) 频道流式消息输出，以改善长响应场景下的用户体验 ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228))。
    - 请求支持 OpenRouter 模型的 fallback 数组配置，以提升模型调用可靠性 ([#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138))。

- **可扩展性与易用性**：
    - 提出“目标模式”，允许 Agent 在有限资源下自动执行用户设定的目标，直至完成或失败 ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303))。
    - 请求在 Agent 技能界面 (Agent Skills) 的官方客户端列表中添加 ZeroClaw 的 Logo ([#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262))。

## 7. 用户反馈摘要

今日的 Issue 和评论中，用户反馈了以下真实痛点和使用场景：

- **生产环境稳定性**：多个 Issue 反映了部署生产环境时遇到的严重问题。例如，用户 `@rordd` 报告了后台 MCP 子进程不断泄漏，影响长期运行稳定性 ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903))。另一个用户 `@shahar3000` 反馈子代理密钥转发问题导致业务流程受阻 ([#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623))。

- **安全配置的复杂性**：用户 `@metalmon` 发现 `mcp_bundles` 的安全隔离配置虽然存在，但在运行时完全无效，暴露出高安全风险 ([#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733))。

- **快速启动流程的体验**：用户 `@singlerider` 在 [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) 中指出，快速启动流程中的默认限制性风险配置导致新用户体验不佳，建议自动应用“yolo”预设。

- **对高级认证方式的需求**：用户 `@vinitasher` 在 [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) 中提出，希望 ZeroClaw 能利用 OpenRouter 的高级功能（如模型自动切换），并建议增加 `fallback_models` 配置项，以提升 API 调用的可靠性。

## 8. 待处理积压

以下为长期未解决或近期获得关注但尚未有实质性进展的重要问题，建议维护者关注：

- **[#5607] 预检查跳过门 (Blocked)**：虽然状态为“已接受”，但添加定时任务和 SOP 触发器前置条件检查的功能请求持续 2 个多月未有新的讨论或分配，仍处于“阻塞”状态。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5607))

- **[#8078] zerocode 本地预提交门 (RFC)**：此 RFC 旨在引入一个本地检查子系统，在代码离开开发者机器前强制执行贡献者标准。虽已被标记为“已接受”，但尚无 PR 关联。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8078))

- **[#8173] Web仪表盘内的应用内升级 (PR)**：此 PR 实现了从 Web 仪表盘一键检测、升级和重启的功能，体量较大（`size:L`），已开放 2 天，正等待维护者审查。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8173))

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-25)

## 今日活动概览

过去 24 小时内，项目共更新 13 条 Issues，全部已关闭（其中 12 条为安全相关报告）；8 条 Pull Requests 处于开放待合并状态，无新版本发布。关闭的 Issues 主要涉及一批在 6 月 9 日提交的安全漏洞报告（标记为 stale 后关闭），以及一条功能增强建议和一条用户咨询。新提交的 PR 集中在 OpenAI 兼容层修复（Seed XML 工具调用、日志修复、模型列表读取错误处理）以及心跳优化等方向。

---

## 项目进展

**今日无合并或关闭的 PR**，但有多条 PR 新提交或保持开放，以下是核心贡献：

- **fix(openai_compat): recover Seed XML tool calls** ([#3165](https://github.com/sipeed/picoclaw/pull/3165))
  恢复火山引擎豆包 Seed 模型通过 OpenAI 兼容接口返回的 `<seed:tool_call>` XML 格式工具调用，并抑制用户可见内容中的泄漏。

- **fix(openai_compat): use structured logger for native_search warning** ([#3166](https://github.com/sipeed/picoclaw/pull/3166))
  修复 `openai_compat` 包中因使用 `log.Printf` 导致的构建失败，改用包内结构化日志。

- **fix(model): handle error response read failures** ([#3168](https://github.com/sipeed/picoclaw/pull/3168))
  改进 OpenAI 兼容模型列表获取失败时的错误处理，返回实际的 body 读取错误而非空消息，并添加回归测试。

- **fix(evolution): skip cold path for heartbeat turns** ([#3169](https://github.com/sipeed/picoclaw/pull/3169))
  在进化草稿模式下跳过心跳回合的冷路径调度，避免不必要的 token 开销。

- **Fix inline data URL media extraction for generic tool output** ([#3115](https://github.com/sipeed/picoclaw/pull/3115))
  修复普通工具输出（如 `read_file`、`exec`）中的 `data:image/...;base64,...` 被误识别为媒体附件导致会话历史损坏的问题。

- **Add remote Pico WebSocket mode to picoclaw agent** ([#3118](https://github.com/sipeed/picoclaw/pull/3118))
  为 `picoclaw agent` 命令添加可选的远程模式（通过 `--remote` 参数连接 Pico WebSocket），本地行为不变。

- **fix(pico): complete turn.done lifecycle signaling** ([#3116](https://github.com/sipeed/picoclaw/pull/3116))
  补全 Pico `turn.done` 生命周期信号，修复三个实现缺口，包括为队列中 steering/follow-up 消息保留 `request_id`。

- **feat: add deltachat gateway** ([#3063](https://github.com/sipeed/picoclaw/pull/3063))
  新增 DeltaChat 网关支持（新功能 + 文档更新）。

---

## 社区热点

- **Issue #2404** ([link](https://github.com/sipeed/picoclaw/issues/2404))
  该 enhancement 请求添加 streaming HTTP 请求配置（在配置文件中加入 `"streaming": true` 以支持 LLM 流式调用），共获得 13 条评论和 1 个 👍。尽管今日被关闭，但关于流式传输的需求在实际使用中讨论较多，体现了用户对实时响应能力（如 OpenAI 流式客户端）的迫切需求。

- **Issue #3167** ([link](https://github.com/sipeed/picoclaw/issues/3167))
  用户 @Wavekip 咨询 PageAgent 对 Vue 等 MVVM 架构的适配方案或规划，背景是 Vue 2 + Element UI 企业后台系统中依赖 `v-model`、组件 state、watcher 等，期望 PageAgent 能更好地理解动态 DOM 变化。该问题获得 0 评论但内容详实，反映了前端框架适配在实际业务场景中的痛点。

---

## Bug 与稳定性

### 严重安全漏洞报告（今日关闭，共 12 条）

以下 Issues 均由 @YLChen-007 于 2026-06-09 提交，今日被标记为 stale 后关闭。摘要显示多个模块存在安全绕过风险，包括：

| Issue | 标题 | 链接 |
|-------|------|------|
| #3082 | Feishu reply-context 扩展绕过 `allow_from` 检查 | [link](https://github.com/sipeed/picoclaw/issues/3082) |
| #3081 | Approval hook `cwd` 符号链接竞争条件导致 `exec` 执行目录绕过 | [link](https://github.com/sipeed/picoclaw/issues/3081) |
| #3079 | `exec` 命令白名单允许通过跳过 deny-pattern 暴露 jq 环境 | [link](https://github.com/sipeed/picoclaw/issues/3079) |
| #3078 | `web_fetch` SSRF 保护可通过环境配置的 HTTP 代理绕过 | [link](https://github.com/sipeed/picoclaw/issues/3078) |
| #3076 | 企业微信群触发策略绕过 | [link](https://github.com/sipeed/picoclaw/issues/3076) |
| #3075 | 不可信仓库本地 `skills/` 元数据自动加载到系统提示 | [link](https://github.com/sipeed/picoclaw/issues/3075) |
| #3074 | `web_fetch` SSRF 保护通过 ISATAP IPv6 地址绕过 | [link](https://github.com/sipeed/picoclaw/issues/3074) |
| #3073 | LINE 签名 webhook 重放导致重复事件执行 | [link](https://github.com/sipeed/picoclaw/issues/3073) |
| #3072 | Launcher 首次密码设置存在 CSRF 漏洞 | [link](https://github.com/sipeed/picoclaw/issues/3072) |
| #3071 | 已验证的 Pico WebSocket 客户端可通过 `/reload` 触发未授权的配置重载 | [link](https://github.com/sipeed/picoclaw/issues/3071) |
| #3068 | MQTT `allow_from` 授权可通过伪造 topic `client_id` 绕过 | [link](https://github.com/sipeed/picoclaw/issues/3068) |

**严重性**：涉及 SSRF、授权绕过、目录穿越、CSRF、重放攻击等，风险较高。
**修复进展**：这些 Issues 今日被关闭，但对应 PR 或提交尚未出现在数据中，建议维护者确认已修复或计划修复，并补充修复措施说明。

### 其他 Bug 修复 PR

- **#3165**：修复 Seed XML 工具调用未被正确提取的问题（已提交 PR）
- **#3166**：修复构建失败（`log.Printf` 导致 `undefined: log`）
- **#3168**：修复模型列表读取失败时错误信息为空
- **#3169**：修复进化草稿模式下心跳回合 token 浪费
- **#3115**：修复会话历史被 inline data URL 污染

这些 PR 均处于开放状态，尚未合并。

---

## 功能请求归类

| 功能描述 | 来源 | 链接 |
|----------|------|------|
| 配置中添加 `"streaming": true` 支持 LLM 流式 HTTP 请求 | Issue #2404（已关闭，增强请求） | [link](https://github.com/sipeed/picoclaw/issues/2404) |
| PageAgent 对 Vue 等 MVVM 框架的适配方案或规划 | Issue #3167（咨询，0 回复） | [link](https://github.com/sipeed/picoclaw/issues/3167) |
| 新增 DeltaChat 网关 | PR #3063（待合并） | [link](https://github.com/sipeed/picoclaw/pull/3063) |
| 添加远程 Pico WebSocket 模式 | PR #3118（待合并） | [link](https://github.com/sipeed/picoclaw/pull/3118) |

---

## 用户反馈摘要

- **Issue #3167** 用户详细描述了在 Vue 2 + Element UI 后台系统中测试 PageAgent 的痛点：页面大量依赖 `v-model`、组件内部 state、watcher 等动态机制，希望 PageAgent 能理解并正确操作。目前无维护者回复，说明该适配需求尚未得到明确回应。
- **Issue #2404** 合并了 13 条评论，用户明确希望像 OpenAI 客户端一样通过配置文件开启 stream 模式，说明当前缺乏流式传输配置是影响使用体验的痛点。
- 多条安全报告虽已关闭，但未公开修复细节，可能影响社区对项目安全性的信任。

---

## 待处理积压

以下 PR 和 Issue 虽仍开放，但已被标记为 `[stale]`，建议维护者关注：

- **PR #3063**（DeltaChat 网关，创建于 6月8日，已 stale 17天）
- **PR #3116**（turn.done 生命周期补全，创建于 6月12日，已 stale 13天）
- **PR #3115**（inline data URL 修复，创建于 6月12日，已 stale 13天）
- **PR #3118**（远程 WebSocket 模式，创建于 6月12日，已 stale 13天）
- **Issue #2404**（流式配置，虽已关闭，但讨论活跃，建议跟踪实际合并情况）

此外，今日关闭的 12 条安全报告未显示对应的修复 PR，建议维护者补充相关信息或说明处理状态。

</details>