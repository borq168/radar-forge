# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-15 02:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-06-15

---

## 1. 今日活动概览

过去 24 小时（截止 2026-06-15），OpenClaw 项目持续活跃：**500 条 Issue 更新**（新开/活跃 413，已关闭 87），**500 条 PR 更新**（待合并 418，已合并/关闭 82）。**1 个新版本发布**：`v2026.6.8-beta.1`，重点改善 Telegram 和 WhatsApp 渠道的消息投递鲁棒性。社区讨论集中在**Codex 集成稳定性**（会话挂起、截断、fallback 失效）、**认证提供者问题**（DeepSeek Prompt Cache 失效、xAI OAuth 异常）以及**Session/消息丢失**等 P0/P1 Bug。

---

## 2. 版本发布

### v2026.6.8-beta.1

- **发布标签**：`v2026.6.8-beta.1`
- **发布说明**：主要优化了 Telegram 和 WhatsApp 渠道的消息投递：
  - Telegram 可发送结构化富文本（表格、列表、可折叠引用块），CLI 后端投递保留 prompt 提示，迁移旧的原生草稿机制，改进安全的多媒体边界。
  - WhatsApp 投递更健壮。
- **破坏性变更**：未提及，疑似无重大破坏性变更。
- **迁移注意**：升级后需注意 Telegram 和 WhatsApp 配置是否需同步调整。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

过去 24 小时共有 **82 个 PR 被合并或关闭**，以下为今日可见关闭状态的 PR（来自评论数最多的 30 条 PR 列表）：

| PR | 标题 | 状态 | 概要 |
|---|---|---|---|
| [#93132](https://github.com/openclaw/openclaw/pull/93132) | fix: resolve gateway token SecretRef against service env | CLOSED | 修复 Gateway token SecretRef 解析，解决 `openclaw doctor` 服务漂移检查中的环境变量问题。 |
| [#91076](https://github.com/openclaw/openclaw/pull/91076) | fix(codex): deliver assistant reply when orphan tool.call lacks result | CLOSED | 修复 2026.6.1 回归：当 Codex 嵌入 turn 有孤立 `tool.call` 但无结果时，正确投递 assistant 回复。 |

此外，今日有多条 Issue 被关闭（如 #80380, #81978, #84137, #83425, #90886, #91016, #85192, #91886, #50795, #80936），涉及模型升级、会话状态、认证提供者等问题，但对应的修复 PR 可能需要进一步查看发布历史。

---

## 4. 社区热点

以下 Issue/PR 评论数最活跃，反映社区当前关注焦点：

### 评论数最高的 Top 3 Issues

1. **#80380** [已关闭] — [Feature]: 更新使用 gemini-3.1-flash-lite 替代预览版
   - 评论数：14 | 👍 4
   - 诉求：Google 已发布 GA 版本，用户请求 OpenClaw 跟进迁移。维护者已处理关闭。
   - [链接](https://github.com/openclaw/openclaw/issues/80380)

2. **#84516** [开放] — Codex 长回复在 ~1000-1100 字符处静默截断
   - 评论数：11 | 👍 2
   - 描述：headless 调用 `openclaw message` 时，模型回复被截断但未触发 abort，stopReason 为 null。用户怀疑是 Gateway 层面问题，已带上 `clawsweeper:needs-live-repro` 标签。
   - [链接](https://github.com/openclaw/openclaw/issues/84516)

3. **#85103** [开放] — 模型 fallback 链在提供者配额耗尽时未触发
   - 评论数：9 | 👍 1
   - 问题：OpenAI Codex 配额用完后，配置的 fallback 链 (gpt-5.5 → deepseek-v4-pro 等) 未被调用，直接报错。
   - [链接](https://github.com/openclaw/openclaw/issues/85103)

### 其他高反应 Issue

- **#85030** — MCP 工具未注入子代理会话（subagent），点赞 3，评论 8。安全边界和工具可用性问题。
- **#84882** — memory-core 的 Dreaming 步骤静默删除每日记忆文件（P0）。点赞 2，评论 6。
- **#91016** — 升级 2026.6.1 后 DeepSeek Prompt Cache 完全失效，一小时烧掉约 $6（中文用户）。点赞 5，评论 5。社区强烈关注成本影响。

---

## 5. Bug 与稳定性

按严重程度（P0/P1/P2）排列，标注是否有 fix PR 开放或近期修复。

### P0 级别

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#84882](https://github.com/openclaw/openclaw/issues/84882) | memory-core Dreaming 静默删除 daily memory 文件（数据丢失） | OPEN | 未关联已合并 PR，但 #85598（memory-core 保护 workspace 边界）正在 review，可能间接涉及。 |
| [#84903](https://github.com/openclaw/openclaw/issues/84903) | 单个 agent 挂起阻塞整个 Gateway 事件循环 | OPEN | 未发现直接修复 PR。 |
| [#90886](https://github.com/openclaw/openclaw/issues/90886) | Gateway 在配置的提供者缺少凭证时挂起（回归） | CLOSED | 已关闭（可能已修复），但需确认修复版本。 |

### P1 级别（高影响）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 回复截断（stop=null） | OPEN | 标签 `clawsweeper:no-new-fix-pr`，尚无修复 PR。 |
| [#85103](https://github.com/openclaw/openclaw/issues/85103) | Fallback 链未触发 | OPEN | 同上，尚无修复 PR。 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex 应用服务器 `notification:turn/started` 后静默，会话挂死 | OPEN | 标签 `clawsweeper:no-new-fix-pr`。 |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入 subagent 会话 | OPEN | 无直接修复 PR。 |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | Heartbeat 驱动回复卡在 `pendingFinalDelivery` | OPEN | 标签 `clawsweeper:linked-pr-open`，有相关 PR 但未说明。 |
| [#91016](https://github.com/openclaw/openclaw/issues/91016) | DeepSeek Prompt Cache 失效（成本暴增） | CLOSED | 已关闭，可能已修复或需确认。 |
| [#84536](https://github.com/openclaw/openclaw/issues/84536) | 预上下文溢出静默杀掉嵌入会话 | OPEN | 无直接修复 PR。 |
| [#85246](https://github.com/openclaw/openclaw/issues/85246) | UI Update 按钮导致 Gateway 死锁（npm global + launchd） | OPEN | 无直接修复 PR。 |
| [#84771](https://github.com/openclaw/openclaw/issues/84771) | 启动时模型预热和锁同步阻塞事件循环（28-64秒） | OPEN | 无直接修复 PR。 |
| [#83964](https://github.com/openclaw/openclaw/issues/83964) | Codex 找不到包 'openclaw'（需本地安装） | OPEN | 无直接修复 PR。 |

### P2 级别（部分有进展）

- **#84569** WhatsApp 长模型调用导致会话 stall → 有 `linked-pr-open` 标签，但未显示具体 PR。
- **#82002** Telegram 群组回复丢失上下文 → 有 `linked-pr-open`。
- **#81484** Discord 频道回复回归（伪造发送负载）→ 有 `linked-pr-open`。
- **#83736** Gateway 应容忍子节点版本偏移 → 无修复 PR。
- **#81917** Dashboard 日志泄露 bare URL + 浏览器挂起 → 无修复 PR。
- **#84256** `plugins update --all` 降级手动更新插件 → 无修复 PR（但此问题涉及用户体验）。
- **#84674** Telegram spool 阻塞因 stale `.processing` 文件 → 无修复 PR。
- **#84662** Codex 运行时上下文导致 response.create 输入增长 → 有 `linked-pr-open`。
- **#84139** Compaction 导致 sessions_send 重复消息 → 无修复 PR。

### 稳定性趋势观察

多个 P1 Bug 均标记为 `clawsweeper:no-new-fix-pr` 且 `needs-maintainer-review`，**Codex 集成稳定性**（截断、闪回、会话挂死、fallback 失败）是当前最集中的风险区域。此外，**Prompt Cache 失效**（#91016）虽已关闭，但类似问题（#85192 DeepSeek thinking block 未正确处理）仍在开放。

---

## 6. 功能请求归类

以下为用户提出的新功能需求（来自开放 Issue），无相应合并 PR：

| Issue | 标题 | 背景/问题 | 相关 PR |
|---|---|---|---|
| [#74077](https://github.com/openclaw/openclaw/issues/74077) | 为当前会话添加 /stream 命令 | 用户希望无需编辑 config 即可切换流式预览模式 | 无 |
| [#81913](https://github.com/openclaw/openclaw/issues/81913) | 暴露稳定的插件 SDK 表面 | 插件开发者需要安全访问 skill 元数据并安全启动子进程 | 无 |
| [#92105](https://github.com/openclaw/openclaw/issues/92105) | memory-wiki 可配置页面分组 | 用户希望自定义索引目录和递归扫描，替代硬编码 | 无 |
| [#85461](https://github.com/openclaw/openclaw/issues/85461) | 捕获图像生成提供者的用量/成本元数据 | 用户希望跟踪不同类型模型的费用 | 无 |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | compaction/LCM 模型 fallback 链 | 用户希望 compaction 和 summary 模型也有 fallback 机制，避免单点故障 | 无 |
| [#85332](https://github.com/openclaw/openclaw/issues/85332) | Docker 镜像瘦身模式 + 可配置 APT 包 | 用户希望远程拉取镜像后无需进入容器安装系统包 | 无 |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | 标题感知的分块 + 实体提取 | 用户希望记忆检索更语义化，而非固定字符数 | 无 |

同时，有一些 PR 也在推进新功能（但尚未合并）：

- **#85522** — 为批准的 Gateway 执行发出命令输出事件（P2）。
- **#85664** — 将 `read` 编码工具接入 HTTP `/tools/invoke`（P2）。
- **#93102** — `sessions.create` 接受 `thinkingLevel/reasoningLevel`（P2）。
- **#93122** — 使 `maxSameModelRateLimitRetries` 可配置（P2）。
- **#85678** — Telegram 隔离入口发送打字指示（P2）。
- **#82148** — `sessions_spawn` 支持 `fastMode` 覆盖（P2）。
- **#85671** — 自动选择单个启用的消息账户（P2）。
- **#85598** — memory-core 保护 dreaming 工作区边界（P1，AI 辅助）。
- **#91988** — 预填充工作区中保留 `BOOTSTRAP.md`（P1）。
- **#92340** — Feishu 处理 VC 会议邀请（P2）。
- **#85583** — 控制平面加固（P2，扩展范围大）。

---

## 7. 用户反馈摘要（来自 Issue 评论）

- **#91016**（中文用户）：升级 2026.6.1 后 DeepSeek Prompt Cache 完全失效，一小时花费约 $6，用户强烈呼吁回退或紧急修复。
- **#83425**（已关闭）：xAI OAuth 提示 `redirect_uri does not match any registered URI`，用户反馈 2026.5.16-beta.6 版本问题，已标记为修复。
- **#83964**：用户升级后 Codex 插件报 `ERR_MODULE_NOT_FOUND openclaw`，必须本地安装才能恢复，提示自动修复能力不足。
- **#85126**：用户发现 Control UI 新建会话时自动选择了错误的认证 profile（deepseek 而非 minimax），抱怨配置逻辑混乱。
- **#84882**：用户报告 memory-core Dreaming 步骤静默删除了每日记忆文件，导致数据丢失，情绪较激动（“silently deletes daily memory files”）。
- **#84516**：用户调试 Codex 截断问题，指出 `assistantTexts[0]` 断在句子中间，怀疑 Gateway 有长度限制或超时，但 `aborted=false`，困惑且影响生产使用。
- **#85027**：macOS LaunchAgent 升级后 Gateway 不可恢复，用户不得不使用 Time Machine 恢复配置，对升级稳定性表达不满。
- **#84256**：`plugins update --all` 竟然将手动更新的 npm 插件降级到旧版本，用户质疑设计逻辑。
- **#83736**：用户反馈 Gateway 在子节点版本偏移时硬拒绝，希望更宽容以允许滚动升级。
- **#81917**：Dashboard 命令打印带有 token 的 bare URL 到日志，且 Linux/KDE 浏览器可能挂起，用户顾虑安全和可用性。

---

## 8. 待处理积压

以下为创建较早且至今未合并/关闭的重要 Issue 或 PR，提醒维护者关注：

| 编号 | 标题 | 创建日期 | 标签 | 备注 |
|---|---|---|---|---|
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent 任务在 LLM API 持续 500 时静

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目的资深技术分析师，以下是根据您提供的2026年6月15日各项目动态数据生成的横向对比分析报告。

---

### AI智能体与个人AI助手开源生态横向对比分析报告（2026-06-15）

#### 1. 今日横向概览

今日各项目均保持活跃，但活动重点和体量差异显著。**OpenClaw** 作为核心项目，社区讨论与代码活动量级最大，但问题集中在Codex集成稳定性与成本等P0/P1 Bug上，处理压力较大。**NanoBot** 和 **Zeroclaw** 则处于快速迭代期，除修复Bug外，各有涉及核心架构重构或新功能集成的重大PR被合并。**PicoClaw** 规模较小，活动集中于代码质量、错误处理优化和特定渠道Bug修复，整体节奏稳健。多项目同日都出现了针对**子代理/委托代理**行为的Bug修复或功能改进，这是一个值得关注的共同方向。

#### 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新总数 | 今日 PR 更新总数 | 新版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- |:--- |
| **OpenClaw** | 500 (新开/活跃 413，关闭 87) | 500 (待合并 418，已合并/关闭 82) | 1 (v2026.6.8-beta.1) | 社区讨论高度集中于Codex稳定性、成本暴增等高风险问题，维护压力大。 |
| **NanoBot** | 5 (新开5) | 45 (待合并 18，已合并/关闭 27) | 0 | 修复速度快，多个高优Bug报告后即有对应修复PR。 |
| **Zeroclaw** | 42 (新开/活跃 14，关闭 28) | 50 (待合并 47，已合并/关闭 3) | 0 | 合并了关于“代理引擎统一化”的重大特性PR，属架构级重构。 |
| **PicoClaw** | 5 (新开/活跃 4，关闭 1) | 9 (待合并 4，已合并/关闭 5) | 1 (Nightly) | 活动量最小，工作重点在代码质量与稳定性修复，有数个关键Bug待修复。 |

*注：OpenClaw的数据为“500条Issue更新”和“500条PR更新”，与“新开/活跃413”等数据可能为不同维度统计口径，此处优先使用其提供的总更新数量以体现活动量级。*

#### 3. OpenClaw 与同类对照

- **活动量与项目体量**：OpenClaw 今日的 Issue 和 PR 活动量（各约500条）远超其他三个项目，表明其社区规模、用户基数和代码复杂度均处领先地位。其他项目如 NanoBot 和 Zeroclaw 的活动量在一个数量级，而 PicoClaw 则更小。

- **技术重点**：
    - **OpenClaw**：核心关注点是**集成稳定性与可靠性**，尤其是 Codex 引擎的集成问题（截断、失败、成本）。社区热点集中在解决生产环境中遇到的严重Bug和成本控制问题。
    - **NanoBot**：重点在**会话管理和渠道集成的健壮性**，并快速响应了API兼容性和安全问题。
    - **Zeroclaw**：同期推进了**核心架构统一**（代理引擎统一化）和**多代理协作安全性**（delegate模式配置），技术重心偏向底层架构和复杂场景支持。

- **社区讨论面**：
    - **OpenClaw** 的社区讨论面最广，覆盖了从模型提供商集成、成本优化到数据丢失、认证异常等多方面，反映了其作为综合平台的复杂性。
    - **NanoBot** 和 **Zeroclaw** 的讨论更集中于特定功能点（如子代理、工具调用、配置易用性）。
    - **PicoClaw** 的社区反馈则更聚焦于特定渠道（Matrix）和CLI体验问题。

#### 4. 共同出现的技术方向

今日数据中，以下技术方向在多个项目中被提及或处理：

- **子代理/委托代理（Subagent/Delegate）层面的问题与修复**：
    - **OpenClaw (#85030)**：用户报告MCP工具未注入子代理会话，影响工具可用性。
    - **NanoBot (#4293, Open PR)**：存在一个修复子代理在特定调用下结果无法回传问题的待合并PR。
    - **Zeroclaw (#7470, #7640)**：报告了delegate模式下配置拒绝和OAuth认证凭据错误的问题，并有对应的修复PR。
    - **观察**：多项目在同一天都遇到了关于子代理/委托代理的行为、权限或数据传递问题，这表明多代理协作的复杂性和可靠性仍是当前AI Agent框架的共同挑战。

- **模型Fallback机制与成本监控**：
    - **OpenClaw (#85103, #91016)**：反馈了Fallback链未触发和DeepSeek Prompt Cache失效导致成本暴增问题，显示其对模型调用可靠性和成本控制的关切。
    - **NanoBot (#4309)**：报告了API端点Token统计为零的Bug，间接影响了成本计量。
    - **观察**：对模型调用链路的健壮性（Fallback）和成本可观测性（Token统计、缓存效率）是两个相互关联的热点。

- **容器镜像与部署体验**：
    - **OpenClaw (#85332)**：用户请求Docker镜像瘦身模式及可配置APT包。
    - **Zeroclaw (#3642)**：用户强烈请求提供“全功能”Docker镜像以降低上手门槛。
    - **PicoClaw**：虽然未直接提及，但其Nightly版本发布也反映了持续部署的需求。
    - **观察**：提供更灵活、更易用的Docker部署方案，是多个社区对非技术用户友好的共同呼声。

- **新模型/新服务的集成请求**：
    - **OpenClaw (#80380)**：请求更新使用Gemini-3.1-flash-lite正式版。
    - **Zeroclaw**：多个已关闭的Issue请求集成Arcee AI、SMS服务、智能家居IoT等新服务。
    - **观察**：社区对新模型和新外部服务的集成需求是持续的，尤其关注“开箱即用”的集成体验。

#### 5. 差异化定位分析

基于今日数据，各项目的关键差异体现在：

- **功能侧重与复杂性层级**：**OpenClaw** 和 **Zeroclaw** 都面临复杂的多代理、多渠道场景下的配置和安全问题，定位为面向专业用户和复杂部署场景的平台。**NanoBot** 则更侧重于提供稳定、易用的代理API和WebUI，更适合快速集成和轻量化应用。**PicoClaw** 体量最小，功能相对聚焦，其Claw和WebUI面板的定位更偏向个人或小团队使用。

- **目标用户**：**OpenClaw** 和 **Zeroclaw** 的贡献者和用户讨论更偏向于系统架构、配置优化和高级特性（如定时代理、Sanbox模式），用户画像更偏专业开发者。**NanoBot** 和 **PicoClaw** 的社区反馈更直接地关注于功能易用性、渠道兼容性和特定Bug修复，用户画像范围更广，可能包含更多轻度用户。

- **技术架构重点**：**Zeroclaw** 今日合并的“代理引擎统一化”PR表明其在持续重构核心架构，追求一致性和可维护性。**OpenClaw** 的讨论焦点在于解决集成层和网关层的稳定性问题，如Codex集成、Fallback机制，反映出其架构复杂度带来的维护挑战。**NanoBot** 和 **PicoClaw** 的改进则更侧重于局部模块（如WebUI、CLI、工具调用）的健壮性。

#### 6. 社区活跃度记录

基于今日数据，对各项目社区活跃度进行分层记录（不做比较评分）：

- **高活跃度**：**OpenClaw**
  社区讨论和代码贡献活动量级最大，但同时也伴随着大量的Bug反馈和稳定性讨论，反映出其项目生命周期中维护压力较大的阶段。

- **中高活跃度**：**NanoBot, Zeroclaw**
  两个项目均保持了合理的Issue和PR更新频率，且能在短时间内响应和修复高优Bug（如NanoBot的路径泄露问题）或合并重大特性（如Zeroclaw的引擎统一）。社区互动质量和速度都较高。

- **中低活跃度**：**PicoClaw**
  虽然也有Bug修复和Nightly发布，但无论是讨论量还是代码变更量都显著较低，项目规模较小，维护节奏稳健但节奏偏慢。今日有数个中等严重程度的Bug处于stale状态，等待维护者回应。

#### 7. 有证据支撑的观察

1.  **子代理/委托代理的多代理协作可靠性是今日的跨项目技术焦点**：OpenClaw、NanoBot、Zeroclaw 均出现了与子代理相关的问题（MCP工具注入、结果回传、OAuth认证、委托配置），这构成了一个有力的跨项目信号，表明随着Agent系统向多代理协作演进，子代理的权限、数据流和可靠性设计正成为社区普遍面临的挑战。

2.  **“一老一少”两个项目社区情绪分化**：**OpenClaw** 社区因Codex稳定性、成本暴增等问题表现出明显的焦虑和抱怨（“一小时$6”、“数据丢失”），处于“灭火期”。而 **Zeroclaw** 的社区虽有配置困惑，但也有关注新特性和架构升级的积极讨论，整体氛围更偏向“建设性”。这与项目所处阶段和面临的主要矛盾有关。

3.  **成本可观测性和控制是AI智能体项目进入生产阶段的关键痛点**：OpenClaw 遇到的Prompt Cache失效和Token统计问题，以及NanoBot报告的API Token统计为零，共同指向用户对AI Agent运行成本的高度敏感。当项目从原型走向生产，成本的可控性和透明度成为用户的核心诉求。

4.  **配置的易用性和健壮性是用户体验的普遍短板**：Zeroclaw 用户因TOML配置嵌套层级错误导致配置被默默丢弃，PicoClaw用户因CLI参数解析错误导致命令失败，OpenClaw用户抱怨UI中自动选择错误的认证profile。多个项目都暴露出，复杂的配置系统增加了用户的学习成本和使用挫折感，是影响用户留存和满意度的重要因素。

5.  **今日暂无明确跨项目信号**：关于是否存在统一的Agent协议标准、企业级部署的最佳实践（如K8s）、或新的通用工具调用范式等技术趋势，今日的数据不足以支撑相关判断。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 NanoBot 项目 GitHub 数据生成的 2026-06-15 项目动态日报。

---

## NanoBot 项目动态日报 | 2026-06-15

### 1. 今日活动概览

过去 24 小时内，NanoBot 项目在问题修复和代码合入方面相当活跃。社区报告了 5 个新 Issue，其中包含一个关于核心 API 端点返回零 Token 统计的 Bug 和一个图像处理中路径泄露的安全问题，但这两个问题均已迅速获得修复性 PR。项目共收到 45 个 Pull Request，其中 27 个已被合并或关闭，还有 18 个待处理。维护团队重点合入了一批关于会话管理、配置稳定性和 WebUI 体验优化的 PR，展现了较高的迭代效率。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日有 27 个 Pull Request 被合并或关闭，标志着多个功能和修复的完成。

- **会话与历史管理优化**：多个 PR 合入以解决会话隔离和数据一致性问题。
    - [#4274](https://github.com/HKUDS/nanobot/pull/4274) 实现了按会话范围筛选近期历史，避免不同对话间的信息串扰。
    - [#4299](https://github.com/HKUDS/nanobot/pull/4299) 将定时任务与具体会话绑定，解决了多会话模式下任务归属模糊的问题。
- **配置系统健壮性提升**：维护者通过引入快速失败机制和重构模块依赖，提升了配置加载的可靠性。
    - [#4275](https://github.com/HKUDS/nanobot/pull/4275) 合并，当配置文件格式有误时，项目会快速失败并给出明确错误，而非默默忽略。
    - [#4314](https://github.com/HKUDS/nanobot/pull/4314) 成功打破了工具配置模块间的循环依赖，为后续代码维护性打下基础。
- **WebUI 交互与显示改进**：WebUI 的后端与前端均有更新。
    - [#4248](https://github.com/HKUDS/nanobot/pull/4248) 修复了 Token 用量热力图的时区对齐和标签裁剪问题。
    - [#4339](https://github.com/HKUDS/nanobot/pull/4339) 提升了 WebUI 在移动设备上的响应式布局表现。
- **消息处理与渠道集成**：修复了若干消息处理逻辑和渠道集成的问题。
    - [#4277](https://github.com/HKUDS/nanobot/pull/4277) 优化了飞书渠道的 SDK 加载时机，变为按需懒加载，提升了启动速度。
    - [#4312](https://github.com/HKUDS/nanobot/pull/4312) 合入，加强了对附带媒体文件的消息格式校验，防止程序崩溃。
    - [#4210](https://github.com/HKUDS/nanobot/pull/4210) 修复了桌面端重启后 Token 刷新和消息回放丢失的问题。

### 4. 社区热点

今日最受关注的 Bug 和其修复 PR 形成了社区讨论的焦点。

- **[#4309] Bug：`/v1/chat/completions` 端点总是返回零 Token**：这是一个影响所有 API 用户的严重 Bug。用户 `@alx1379` 报告，所有通过该 OpenAI 兼容接口发起的请求，其响应中的 `usage` 字段（提示词 Token、补全 Token、总 Token）始终为零。这直接破坏了依赖 Token 统计进行计费或监控的第三方应用。
    - [Issue #4309](https://github.com/HKUDS/nanobot/issues/4309)
- **[#4345] Bug：图像加载失败时，模型行为异常并泄露本地文件路径**：用户 `@BearMett` 报告了一个严重的安全与功能问题。当模型无法处理图片而导致图像被剥离时，模型不仅会错误地“假装”看到了图片，还会在回复文本中泄露用户本地的图片文件绝对路径。这既可能导致 AI 幻觉，也构成了敏感信息泄露风险。
    - [Issue #4345](https://github.com/HKUDS/nanobot/issues/4345)
- **[#4346] 快速响应的修复 PR**：值得注意的是，`@BearMett` 在提交 Bug Issue 后，立即提交了修复 PR ([#4346](https://github.com/HKUDS/nanobot/pull/4346))，使用脱敏的占位文本取代了泄露的路径，实现了问题的“自提自修”，体现了社区极快的响应速度。

### 5. Bug 与稳定性

今日报告的 Bug 均较为严重，但已有对应的修复措施。

- **[严重] [Bug] API 端点 Token 统计为零**：该问题直接影响了与第三方工具集成的核心功能。目前尚无 PR 直接关联，但社区关注度较高。
    - [Issue #4309](https://github.com/HKUDS/nanobot/issues/4309)
- **[严重] [Bug] 图像剥离导致路径泄露和模型幻觉**：此 Bug 同时涉及了安全和模型行为正确性。已由报告者本人提交了修复 PR。
    - [Issue #4345](https://github.com/HKUDS/nanobot/issues/4345)
    - **[关联 PR]**: [PR #4346](https://github.com/HKUDS/nanobot/pull/4346) (Open)
- **[中] [Bug] Anthropic 新模型请求被拒**：报告指出，Anthropic 模型提供商对新模型（如 Cloude Opus 4-8）误发了已弃用的 `temperature` 参数，导致所有请求都返回 400 错误。此问题已被关闭，表明可能已经修复。
    - [Issue #4333](https://github.com/HKUDS/nanobot/issues/4333) (Closed)

### 6. 功能请求归类

以下是一些用户提出的功能请求及其进展。

- **功能请求**：用户希望在进入 Agent 模式时使用配置文件中的 `botIcon`，而非默认的“puppy”图标。此请求已被关闭，功能应已实现。
    - [Issue #4262](https://github.com/HKUDS/nanobot/issues/4262) (Closed)
- **功能/修复 PR**：有 PR 旨在严格校验工具调用参数，拒绝未知参数。
    - [PR #4343](https://github.com/HKUDS/nanobot/pull/4343) (Open)
- **功能/修复 PR**：有 PR 致力于修复子代理在特定调用方式下（如 Cron 任务）结果无法回传的问题。
    - [PR #4293](https://github.com/HKUDS/nanobot/pull/4293) (Open)
- **功能/特性 PR**：有 PR 正在增加 WebUI 的自动化管理视图，允许用户查看和管理自动化任务。
    - [PR #4330](https://github.com/HKUDS/nanobot/pull/4330) (Open)

### 7. 用户反馈摘要

- **核心 API 可用性**：对于 `/v1/chat/completions` 端点返回零 Token 的问题，用户表达了强烈的关切，因为这直接破坏了依赖于该端点进行费用核算或日志分析的工具。虽然尚无该 Issue 的直接评论，但问题本身具有高严重性。
- **敏感信息泄露担忧**：在 Issue [#4345](https://github.com/HKUDS/nanobot/issues/4345) 中，用户 `@BearMett` 明确指出了图片路径泄露的风险，并主动提交了用 `[Unviewable image]` 替代路径的修复方案，展现了用户对安全问题的重视和极高的参与度。
- **新模型兼容性**：Issue [#4333](https://github.com/HKUDS/nanobot/issues/4333) 表明用户正在尝试使用最新的 Anthropic 模型，并遇到了兼容性问题，这反映了社区对前沿模型支持的高需求。该问题已被快速关闭，表明维护者响应及时。

### 8. 待处理积压

- **[待合并] #4346**：修复路径泄露问题的 PR，合入后可直接关闭高优 Issue #4345。
    - [PR #4346](https://github.com/HKUDS/nanobot/pull/4346)
- **[待合并] #4293**：修复子代理在直接调用中结果注入的问题，对 Cron 等场景至关重要。
    - [PR #4293](https://github.com/HKUDS/nanobot/pull/4293)
- **[待合并] #4343**：拒绝未知内置工具参数，提升工具调用的健壮性。
    - [PR #4343](https://github.com/HKUDS/nanobot/pull/4343)
- **[待合并] #4330**：WebUI 自动化管理视图，属于新功能特性。
    - [PR #4330](https://github.com/HKUDS/nanobot/pull/4330)
- **[待合并] #4344**：重构配置与 Agent 循环边界，属于架构层面的优化。
    - [PR #4344](https://github.com/HKUDS/nanobot/pull/4344)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 Zeroclaw 项目 GitHub 数据，生成了 2026-06-15 的项目动态日报。

---

### Zeroclaw 项目动态日报 — 2026-06-15

---

#### 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目活动频繁。共处理 42 条 Issues（其中 14 条新开或活跃，28 条已关闭）和 50 条 Pull Requests（其中 47 条待合并，3 条已合并/关闭）。截至目前，项目无新版本发布。社区活动重点集中在修复 Bug、完善文档与国际化（i18n），以及清理大量积压的待合并 PR。值得关注的是，多项针对代理安全性与配置验证的修复（如 delegate 模式、provider 配置等）正在推进中。

---

#### 2. 版本发布

无新版本发布。

---

#### 3. 项目进展

今日有 3 个 PR 被合并/关闭，其中较为关键的有：

- **重大特性合并：代理引擎统一化** - **PR #7594**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7594)）: 合并了一个大型 PR，该 PR 对配置系统进行了根本性重构。通过类型驱动的别名选择器和自声明配置枚举，消除了硬编码的特殊情况及中央注册列表，简化了内部表示逻辑。此变更对磁盘 TOML 和运行时行为无影响。
- **新功能上线：定时任务暂停/恢复** - **PR #7384**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7384)）: 合并了为定时任务（Scheduled Tasks）添加暂停/恢复切换功能。此前数据模型已支持，但未在 API/Gateway 中暴露。**PR #7666**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7666)）在此基础上进一步在 Gateway 的 HTTP API 中支持了此功能。
- **RFC 实施闭包：三引擎统一** - **RFs #7415**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)）对应的 RFC 已通过单个合并 PR 完成执行，统一了代理的三个 turn 引擎（`run_tool_call_loop`、`turn_streamed`、`Agent::turn`）。

---

#### 4. 社区热点

今日讨论热度最高的议题反映了用户在**易用性**和**安全性**方面的核心诉求。

- **（评论最多）“全功能 Docker 镜像”需求** - **Issue #3642**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)）: 该 Issue 收到 13 条评论，社区对提供一个包含所有特性（如 WhatsApp）的“全量”Docker 镜像呼声很高。用户 @LaurensBosscher 指出，当前默认禁用部分功能以降低内存，但这增加了新用户和非技术用户的使用门槛。此需求体现了社区对**开箱即用**体验的强烈期待。
- **“代理委托安全性与配置”讨论** - **Issue #7470**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)）: 此 Bug 报告（7 条评论）详细描述了 delegate 代理模式下，当目标代理的 `allowed_tools` 配置为空时，系统拒绝工作。这直接关联到多代理协作场景下的安全策略配置体验，用户期望一个更灵活且文档清晰的配置方式。
- **“工作流看板与标签清理”RFC** - **Issue #6808**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）: 这个治理相关的 RFC 获得了 11 条评论，社区和管理员正在讨论如何通过轻量级PR看板、自动化看板和标签清理来优化工作流程，以减少维护负担。这表明项目在快速发展中，社区和开发团队都感受到了流程优化的重要性。

---

#### 5. Bug 与稳定性

今日活跃的 Bug 修复工作主要集中在运行时安全和配置坑点上，其中有两个高风险 Bug 正在修复中。

- **高风险（S1 - 工作流阻塞）**
    - **delegate 代理模式配置拒绝** - **Issue #7470**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)）: delegate 功能在 `agentic` 模式下，如目标代理的 `allowed_tools` 为空，会导致工作流阻塞。相关修复已在 **PR #7583**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7583)）和 **PR #7608**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7608)）中提交。
    - **OAuth 目标代理委托凭据错误** - **PR #7640**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7640)）: 修复了当委托给一个需要 OAuth 认证的子代理时，系统错误地回退到主代理的全局凭据，导致认证失败的问题。

- **中风险**
    - `show_tool_calls` 功能缺失 - **Issue #6856**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)）: 报告称在 Schema v3 的 `[channel]` 配置中，缺少显示工具调用详情的选项。此问题被标记为“处理中”。
    - Provider 配置无警告静默丢弃 - **PR #7580**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7580)）和 **PR #7617**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7617)）都针对用户在配置 provider 时因 TOML 多嵌套了一层，导致所有字段被 serde 静默丢弃的问题。这些 PR 为这种情况增加了警告信息，提升了配置的容错性。
    - **Musl libc 检测失败** - **PR #7614**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7614)）: 修复了安装脚本在 musl libc 的 Linux 系统上无法正确识别目标三元组的问题。

---

#### 6. 功能请求归类

用户提出的功能请求主要集中在**集成更多外部服务**和**改善部署体验**上。

- **模型/推理提供商集成**：用户 @theonlyhennygod 集中提交了多个合并/关闭的请求，旨在添加新的大模型提供商支持，包括：
    - [Arcee AI](https://github.com/zeroclaw-labs/zeroclaw/issues/6456)
    - [Inception Labs (Mercury)](https://github.com/zeroclaw-labs/zeroclaw/issues/6458)
    - [Lambda AI Inference](https://github.com/zeroclaw-labs/zeroclaw/issues/6457)
    - [Featherless AI](https://github.com/zeroclaw-labs/zeroclaw/issues/6455)
    - [Upstage Solar](https://github.com/zeroclaw-labs/zeroclaw/issues/6454)
- **SMS 渠道集成**：用户 @theonlyhennygod 提交了多个请求，为项目添加 Vonage、Sinch、Plivo、Telnyx 等 SMS 服务商作为通信渠道，这些请求均已被接受并关闭。
- **智能家居/IoT 工具**：用户 @theonlyhennygod 提交了添加 Sonos、Shazam、Spotify、8Sleep、Philips Hue 等流行服务和硬件集成的请求，均已合并/关闭。
- **部署与包管理**：
    - 一个用户请求改进 **Nix flake** 的暴露方式（**Issue #6906**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)）），期望它能正确输出 `zeroclaw` 包和模块。
    - 另一个用户请求提供“全功能”Docker 镜像（**Issue #3642**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)）），以降低用户上手门槛。
    - 还有用户贡献了更新 **Docker 文档** 的示例（**Issue #6760**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)））。

---

#### 7. 用户反馈摘要

- **对 WhatsApp 渠道的反馈**：用户在 **Issue #6847**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)）中热情地感谢了团队的努力，但立即遇到了 WhatsApp 渠道不显示 QR 码的问题，导致其无法完成绑定。这表明即使是成熟度较高的功能，其首次使用体验仍有优化空间。
- **对文档缺失的抱怨**：用户 **Issue #7470**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)）和 PR **#7592**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7592)）都指向一个核心问题：文档没有清晰描述 delegate 模式下 `allowed_tools` 的配置要求，导致用户难以理解和使用该功能。社区对**清晰、准确的配置文档**有迫切需求。
- **对复杂配置的困惑**：多个 Issues 和 PRs（如 **#7580**、**#7617**）都围绕“provider 别名嵌套错误”展开。用户很容易写出错误的 TOML 结构而不知，导致配置完全失效。这表明白月易错、难以自纠的配置方式是当前用户体验的一个重要痛点。

---

#### 8. 待处理积压

以下为长期未解决或状态阻塞的重要议题，需要维护者特别关注：

- **高风险特性 RFC：离线执行模式** - **Issue #6293**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)）: “Air-gapped execution mode with companion daemon over unix socket” 的 RFC 已存在一个多月，且状态为 `blocked`。这是一个关于安全架构的重大提议，涉及将代理分为在线/离线两个进程。其长期处于 `needs-maintainer-review` 状态，可能需要维护者投入时间进行决策。
- **重大回归恢复审计** - **Issue #6074**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)）: 跟踪从一次回滚中丢失的 153 个提交。该 Issue 已存在超过 50 天，仍标记为 `status:in-progress`，需要确认恢复工作的进展。
- **两个长期未更新的生产阻塞 Bug 修复 PR**：
    - **PR #5892**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5892)）: 修复了两个生产阻塞问题（空的 `tool_choice` 和孤立的 `tool_use`）。该 PR 已存在近两个月，虽已标记为 `needs-author-action`，但其修复的内容对系统稳定性至关重要。
    - **PR #6693**（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6693)）: 实现“梦”模式（Dream Mode），用于周期性记忆合并。该 PR 已存在一个月，同样被标记为 `needs-author-action`。这是一个重要的记忆管理功能，应推动其合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw 项目日报
**日期：2026-06-15**
**数据来源：GitHub (sipeed/picoclaw)**

---

### 1. 今日活动概览
过去24小时内，PicoClaw 共计更新 **5 条 Issues**（新开/活跃 4 条，关闭 1 条）和 **9 条 Pull Requests**（待合并 4 条，已合并/关闭 5 条）。维护者发布了 **1 个 Nightly 版本**（v0.2.9-nightly.20260615.13a38bd1），主要用于自动化构建验证。合并/关闭的 PR 主要集中在代码质量改进（错误处理显式化、日志结构化）和 Agent 循环稳定性修复。社区新提交了 1 个关于 Brave 搜索 API Key 迁移后失效的 Bug 报告，以及 1 个改进启动诊断的修复 PR。整体而言，项目保持较活跃的维护节奏，部分 stale 议题仍待跟进。

---

### 2. 版本发布
- **nightly**: Nightly Build
  `v0.2.9-nightly.20260615.13a38bd1`
  该版本为自动化构建，可能不稳定，请谨慎使用。
  **完整变更日志**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main

  无破坏性变更或迁移注意事项说明。

---

### 3. 项目进展
今日合并/关闭了以下 **5 个 PR**，推进了错误处理、稳定性与代码风格规范化：

- **#2904 – Fix agent loop reload and panic cleanup stability**
  （已合并，作者 @SiYue-ZO）
  修复 Agent 循环重载中可能的 goroutine 泄漏和 panic 问题，改用同步 defer/recover 流程。
  https://github.com/sipeed/picoclaw/pull/2904

- **#3124 – fix(tts): handle io.ReadAll error in error response path**
  （已合并，作者 @chengzhichao-xydt）
  修复 TTS API 返回非 200 状态时 `io.ReadAll` 错误被丢弃的问题，增加描述性降级消息。
  https://github.com/sipeed/picoclaw/pull/3124

- **#3123 – fix(filesystem): explicitly ignore Close() error on directory file descriptor**
  （已合并，作者 @chengzhichao-xydt）
  显式忽略目录文件描述符的 `Close()` 错误，与已有 `Sync()` 模式保持一致。
  https://github.com/sipeed/picoclaw/pull/3123

- **#3122 – fix(evolution): capture Close() error on write file in appendJSONLRecords**
  （已合并，作者 @chengzhichao-xydt）
  捕获写文件时 `Close()` 可能产生的延迟错误（如磁盘满、NFS 错误），改为命名 defer 记录。
  https://github.com/sipeed/picoclaw/pull/3122

- **#3121 – refactor(openai_compat): replace log.Printf with structured logger**
  （已合并，作者 @chengzhichao-xydt）
  将 `log.Printf` 替换为项目统一的 `logger.WarnCF`，移除 `log` 导入。
  https://github.com/sipeed/picoclaw/pull/3121

---

### 4. 社区热点
今日社区讨论整体较为平静，各 Issue/PR 评论数较少（最多 2 条）。以下为略有互动的条目：

- **#2978 – [CLOSED] Add omniroute as provider**
  用户请求添加第三方路由 OmniRoute 作为 provider，维护者在评论后将其标记为 stale 并关闭（2 条评论）。
  https://github.com/sipeed/picoclaw/issues/2978

- **#3044 – [OPEN] Bug: allow_from fails for Matrix user IDs containing colon**
  用户反馈 Matrix 频道中标准用户 ID（`@localpart:domain`）导致 `allow_from` 配置失效，消息被静默拒绝。有 1 条评论，未显示维护者回应。
  https://github.com/sipeed/picoclaw/issues/3044

---

### 5. Bug 与稳定性
今日收到 **4 个新活跃 Bug 报告**（均为尚未修复状态）：

| Issue | 标题 | 严重程度 | 是否有对应修复 PR |
|-------|------|----------|-------------------|
| #3125 | web_search tool fails silently when using Brave API key from .security.yml | **高**：关键工具功能失效，无错误提示 | 无 |
| #3044 | allow_from fails for Matrix user IDs containing colon | **高**：安全/权限配置错误 | 无 |
| #3041 | `mcp add` mis-parses global flags into positionals | **中**：功能使用错误，影响 CLI 体验 | 无 |
| #3090 | Panel does not work on Safari on iOS versions below 16.4 | **中**：兼容性问题，影响部分移动端用户 | 无 |

- **#3125**（新开，0 评论）
  用户报告在 API Key 迁移至 `.security.yml` 后，`web_search` 工具（使用 Brave API）始终返回 `No results` 字符串，后端未正确读取密钥。
  https://github.com/sipeed/picoclaw/issues/3125

- **#3044**（6月7日开启，stale 标签）
  配置 `allow_from` 且用户 ID 包含冒号时，消息被静默拒绝，可能影响 Matrix 频道权限控制。
  https://github.com/sipeed/picoclaw/issues/3044

- **#3041**（6月7日开启，stale 标签）
  `mcp add` 命令的参数解析错误，导致 HTTP/SSE 模式的 server 添加失败，stdio 模式加入时名称错误。
  https://github.com/sipeed/picoclaw/issues/3041

- **#3090**（6月10日开启）
  PicoClaw 面板在 iOS 16.4 以下版本的 Safari 上无法正常工作。
  https://github.com/sipeed/picoclaw/issues/3090

以上 Bug 目前均无已合并或待合并的修复 PR。

---

### 6. 功能请求归类
今日用户提出的新功能需求及相关 PR：

| Issue/PR | 标题 | 状态 | 摘要 |
|----------|------|------|------|
| #2978 (已关闭) | Add omniroute as provider | CLOSED | 请求添加第三方路由 OmniRoute 作为 provider，因 stale 被关闭 |
| #3118 (待合并) | Add remote Pico WebSocket mode to picoclaw agent | OPEN | 为 `picoclaw agent` 增加远程 WebSocket 模式，支持 `--remote` 参数 |
| #3120 (待合并) | feat(config): add RegisterChannelSettings hook for out-of-tree channels | OPEN | 为第三方通道提供配置注册钩子，使外部通道无需 fork 项目即可扩展 |
| #2975 (待合并, stale) | feat(telegram): treat reply to bot message as mention | OPEN | 在 Telegram 群组中，回复机器人消息应视为 @提及，需配合 `mention_only: true` |

- **#3118**（作者 @jp39）
  增加 `picoclaw agent --remote ws://...` 选项，保持本地行为不变。
  https://github.com/sipeed/picoclaw/pull/3118

- **#3120**（作者 @carlosprados）
  提供 `RegisterChannelSettings` 钩子，允许第三方通道在配置侧注册自己的设置结构。
  https://github.com/sipeed/picoclaw/pull/3120

- **#2975**（作者 @Jlan45）
  改进 Telegram 频道交互逻辑，已标记为 stale。
  https://github.com/sipeed/picoclaw/pull/2975

---

### 7. 用户反馈摘要
从今日 Issues 评论和描述中提取的用户痛点与使用场景：

- **Matrix 用户 ID 格式兼容性**（#3044）：用户采用 `@user:domain` 标准格式配置 `allow_from`，但消息被静默拒绝，导致权限控制失效。用户怀疑是冒号解析问题，期望得到明确支持。
- **CLI 参数解析困惑**（#3041）：用户使用 `picoclaw --no-color mcp add -t http ...` 时，全局标志 `--no-color` 意外被当作位置参数处理，导致命令错误。用户指出这种解析行为不符合预期，且 `stdio` 模式下的 server 名称被静默更改。
- **API Key 迁移后功能回归**（#3125）：用户已经按照新架构将 Brave API Key 配置到 `.security.yml`，但 `web_search` 工具无声失败，返回空结果。用户希望得到明确的错误提示或自动读取密钥的修复。
- **iOS 兼容性**（#3090）：用户运行在 Raspberry Pi OS 上的 PicoClaw 面板，在较低版本 iOS 的 Safari 上无法登录和使用，影响移动端管理体验。

---

### 8. 待处理积压
以下为长期未响应的、或带有 stale 标签的重要 Issue 和 PR，建议维护者关注：

| 编号 | 标题 | 最后更新 | 备注 |
|------|------|----------|------|
| #3044 | Bug: allow_from fails for Matrix user IDs containing colon | 2026-06-14 | stale 标签，1条评论，无维护者回复 |
| #3041 | `mcp add` mis-parses global flags into positionals | 2026-06-14 | stale 标签，1条评论，无维护者回复 |
| #3090 | Panel does not work on Safari on iOS versions below 16.4 | 2026-06-14 | 无回复，1条评论 |
| #2975 | feat(telegram): treat reply to bot message as mention | 2026-06-14 | stale 标签，PR 已打开 16 天，未收到 review |
| #3118 | Add remote Pico WebSocket mode to picoclaw agent | 2026-06-14 | PR 待合并，已 3 天，无 review |
| #3120 | feat(config): add RegisterChannelSettings hook | 2026-06-14 | PR 待合并，刚提交 1 天，可正常跟踪 |

上述 #3044、#3041 涉及功能 Bug 且已有明确复现步骤，建议优先处理。

</details>