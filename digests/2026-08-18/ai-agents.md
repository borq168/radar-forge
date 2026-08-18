# OpenClaw 生态日报 2026-08-18

> Issues: 500 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-08-18 00:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-08-18

## 1. 今日活动概览

过去 24 小时内，OpenClaw 仓库共收到 **500 条 Issue 更新**（新开/活跃 483 条，关闭 17 条）和 **500 条 PR 更新**（待合并 377 条，已合并/关闭 123 条）。无新版本发布。社区讨论集中在 Codex 集成导致的 CPU 高负载、流式看门狗超时、以及多通道消息丢失等长期问题上。维护者合并了多个针对 CLI、UI 和 Codex 引擎的修复 PR，并有多项重要的安全策略和功能改进进入就绪状态。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有 **123 个 PR 被合并/关闭**，以下为其中较为重要的变更：

- **[fix(codex): degraded-engine continuity no longer projects the whole context window per turn](https://github.com/openclaw/openclaw/pull/125324)**（已合并）
  修复 Codex 引擎降级时每轮投射整个上下文窗口的问题，减少 token 浪费。

- **[fix(cli): accept --port across automation commands](https://github.com/openclaw/openclaw/pull/125474)**（已合并）
  使 `openclaw automations` 等命令支持 `--port` 参数，方便非默认端口场景。

- **[feat(ui): review install policy warnings](https://github.com/openclaw/openclaw/pull/120900)**（已合并）
  为 Control UI 增加安装策略警告审查功能，管理员可在界面中确认继续安装。

- **[feat(security): require acknowledgement for install policy warnings](https://github.com/openclaw/openclaw/pull/116489)**（已合并）
  在 CLI 和 Gateway 层面强制要求用户确认安装策略警告，提升安全性。

此外，多个中等规模的 PR 已进入维护者审查阶段，包括：

- **[fix(queue): arbitrate shared capacity across grouped lanes](https://github.com/openclaw/openclaw/pull/122764)**（等待维护者审查）
  解决共享容量下队列阻塞问题。

- **[fix(sessions): track context window provenance](https://github.com/openclaw/openclaw/pull/124303)**（等待维护者审查）
  为上下文窗口添加来源追踪，提升调试和恢复能力。

## 4. 社区热点

以下 Issue 和 PR 在今日讨论最为活跃，反映了用户关注的焦点：

| 编号 | 标题 | 评论数 | 核心诉求 |
|------|------|--------|----------|
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | Track live dev agent behavior and trajectory | 23 | 对 Pash 的 dev agent 进行 24 小时观察，记录行为轨迹，避免干预 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse native hook relay spawns CPU-bound processes | 20 | Codex 集成导致 `openclaw-hooks` 进程占用 100% CPU，阻塞网关 RPC |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | Configurable streaming watchdog timeout threshold | 15 | 流式看门狗在长思考模型（如 DeepSeek-R1）下频繁触发，需要可配置超时 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent never completes anything (regression in 2026.4.2) | 15 | 编码代理完全停止工作，只能输出模糊状态，用户生产受阻 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview | 14 | 升级到 2026.3.2 后嵌入代理崩溃，回归问题 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM embedded run aborts memory_search tool calls; misclassifies as timeout | 14 | 内存搜索工具调用被异常终止，尽管模型已完成 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | Umbrella: duplicate transcript, replay, and context assembly across channels | 14 | 多通道（MSTeams、webchat、Telegram）下重复转录、重放和上下文组装错误 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp: Backfill missed messages after reconnection | 13 | WhatsApp 断线期间消息丢失，请求回填机制 |

**分析**：用户对 **Codex 集成稳定性**、**流式超时策略**、**核心代理回归** 和 **多通道可靠性** 的诉求最为迫切。其中 #91009 和 #62505 为用户生产环境直接受阻的 P1 级问题。

## 5. Bug 与稳定性

以下为今日报告或更新的重要 Bug（按严重程度排列，P0 最严重）：

- **P0**：[#70903](https://github.com/openclaw/openclaw/issues/70903) **Persistent file-based provider cooldown blocks user for hours after billing recovery**
  提供者返回 402 后写入持久化冷却时间，即使用户充值后仍被阻塞数小时。标签 `stale`，无 fix PR。

- **P1**：[#91009](https://github.com/openclaw/openclaw/issues/91009) **Codex PreToolUse hook relay spawns CPU-bound processes**
  已描述，无 fix PR。

- **P1**：[#62505](https://github.com/openclaw/openclaw/issues/62505) **Coding Agent never completes anything (regression)**
  已描述，无 fix PR。

- **P1**：[#38327](https://github.com/openclaw/openclaw/issues/38327) **"Cannot convert undefined or null to object"**
  已描述，无 fix PR。

- **P1**：[#97616](https://github.com/openclaw/openclaw/issues/97616) **Zombie process accumulation from hook/tool execution**
  OpenClaw 泄漏子进程导致僵尸进程累积、运行时性能下降。标签 `bug, regression, P1`，无 fix PR。

- **P1**：[#78493](https://github.com/openclaw/openclaw/issues/78493) **sudo openclaw update creates mixed ownership, doctor overwrites config**
  macOS 下 `sudo update` 导致文件所有者混合，后续 `doctor` 覆盖配置。无 fix PR。

- **P1**：[#71689](https://github.com/openclaw/openclaw/issues/71689) **SQLite corruption in tasks/runs.sqlite causes startup failure**
  任务注册表 SQLite 损坏导致网关启动失败。无 fix PR。

- **P1**：[#53540](https://github.com/openclaw/openclaw/issues/53540) **"Network connection lost" on large tool call parameters**
  LLM 生成大参数工具调用时超时，嵌入 runner 错误断开。无 fix PR。

- **P1**：[#53408](https://github.com/openclaw/openclaw/issues/53408) **Write/exec tool parameters silently dropped after long conversations**
  长时间对话后工具参数静默丢失。无 fix PR。

- **P1**：[#45224](https://github.com/openclaw/openclaw/issues/45224) **Unhandled Playwright assertion error crashes Gateway**
  Playwright 断言错误未捕获导致网关进程退出。无 fix PR。

**注意**：上述 P1 Bug 大多无关联 fix PR，且部分已存在数周或数月，可能积累了大量用户影响。

## 6. 功能请求归类

以下为用户提出的新功能需求及相关 PR（按主题分类）：

### 流式与超时
- [#68596](https://github.com/openclaw/openclaw/issues/68596) 可配置流式看门狗超时阈值

### 内存与上下文
- [#67413](https://github.com/openclaw/openclaw/issues/67413) 每代理独立梦境（dreaming）配置
- [#63990](https://github.com/openclaw/openclaw/issues/63990) 多索引嵌入内存，支持模型感知故障切换
- [#60572](https://github.com/openclaw/openclaw/issues/60572) 多槽内存架构（Multi-Slot Memory）
- [#56781](https://github.com/openclaw/openclaw/issues/56781) 回退模型链用于压缩和 LCM summaryModel

### 多语言与国际化
- [#66252](https://github.com/openclaw/openclaw/issues/66252) 每代理 TTS/STT 配置覆盖，支持多语言
- [#79458](https://github.com/openclaw/openclaw/issues/79458) 为斜杠命令描述添加 i18n 字段

### 配置与 UI
- [#45758](https://github.com/openclaw/openclaw/issues/45758) 支持 YAML 配置文件格式
- [#75947](https://github.com/openclaw/openclaw/issues/75947) 基于 UX 评分的 UI 质量更新
- [#71142](https://github.com/openclaw/openclaw/issues/71142) Control UI 可配置上传大小限制
- [#42840](https://github.com/openclaw/openclaw/issues/42840) 在 Control UI 中添加 MathJax/LaTeX 渲染支持

### 渠道与消息
- [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 断线后回填丢失消息
- [#71058](https://github.com/openclaw/openclaw/issues/71058) 支持单个 Gateway 上多个 Azure/Teams 机器人
- [#52640](https://github.com/openclaw/openclaw/issues/52640) 持久化任务状态显示（长期运行频道会话）
- [#41366](https://github.com/openclaw/openclaw/issues/41366) 持久化自然语言规则学习及多提及回复语义

### 其他
- [#50199](https://github.com/openclaw/openclaw/issues/50199) 技能优先级配置
- [#49259](https://github.com/openclaw/openclaw/issues/49259) 清理仪表板中孤立会话
- [#73537](https://github.com/openclaw/openclaw/issues/73537) 为发布添加生产就绪稳定性标签
- [#63930](https://github.com/openclaw/openclaw/issues/63930) 支持 Anthropic advisor 工具（beta 服务端工具）
- [#71195](https://github.com/openclaw/openclaw/issues/71195) macOS Talk 模式添加 OpenAI Realtime 语音到语音路径

## 7. 用户反馈摘要

从 Issue 评论和摘要中提炼的真实用户痛点：

- **编码代理完全失效**（#62505）：用户报告“编码代理已经几周正常工作，现在什么都不做，只输出模糊的状态更新和道歉”。这是一个回归问题，严重影响自动化工作流。
- **流式看门狗误报**（#68596）：使用 Kimi-k2.5、DeepSeek-R1 等长思考模型时，每 30 秒触发一次警告，导致状态重置。用户希望可配置超时时间。
- **工作路径硬编码**（#51429）：中文用户发现 openclaw 在 `/Users/wangtao` 下创建文件夹，质疑代码中硬编码了某人的工作路径并合并发布。该 Issue 获得多个赞同。
- **配置损坏**（#78493）：macOS 用户使用 `sudo openclaw update` 后文件所有者混乱，`doctor` 命令覆盖了原有配置，导致需要重新设置。
- **提供者冷却时间过长**（#70903）：Anthropic 返回 402 后，`disabledUntil` 被写入文件并持久化，即使充值后仍被阻塞数小时。用户反馈“即使重启网关也无法解决”。
- **RTL 文本渲染问题**（#68105）：希伯来语/阿拉伯语标点符号在网关输出中显示在错误一侧，TUI 已修复但网关输出未修复，影响多语言用户。
- **数学公式显示**（#42840）：用户需要 LaTeX 渲染支持，当前公式显示为纯文本，影响学术和科学交流场景。
- **稳定性标签需求**（#73537）：用户表示“OpenClaw 已成为家庭和业务助手（Telegram、自动化、Home Assistant 控制）”，但希望发布版本能标记稳定性，以便生产环境选用。

## 8. 待处理积压

以下为长期未响应或未解决的重要 Issue

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的 2026-08-18 社区动态摘要，为您生成一份横向对比分析报告。

---

### 2026-08-18 AI 智能体与个人助手开源项目横向对比分析报告

#### 1. 今日横向概览

今日，AI 智能体领域两个代表性项目呈现截然不同的活动节奏。**OpenClaw** 作为核心框架，社区活动量极为庞大，Issue 与 PR 总数均达到 500 条，但活跃讨论集中在 Codex 引擎稳定性、核心代理回归及多通道可靠性等长期存在的生产环境问题，Bug 积压严重。相比之下，**youdao lobster** 作为上层应用套件，社区规模较小，活动量适中，但 PR 合并效率极高，今日主要聚焦于 UI/UX 细节优化、DSH 引擎集成及多语言支持修复，展现出快速迭代的产品风格。两个项目的共同点在于，社区都对 Agent 的精细化管理（如独立工作目录、配置持久化）和跨平台/跨 Agent 通信能力表现出了明确需求。

#### 2. 各项目活跃度对比

| 项目名称 | 今日 Issues 数 | 今日 PR 数 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 条更新 (新开/活跃 483，关闭 17) | 500 条更新 (待合并 377，合并/关闭 123) | 无 | 活动量巨大，Bug 积压严重，社区讨论聚焦于核心引擎稳定性修复。 |
| **youdao lobster** | 7 条 (新开/活跃) | 21 条 (合并/关闭 18，待合并 3) | 无 | 活动量适中，PR 合并率极高 (85.7%)，集中于 UI/UX 优化与功能集成。 |

#### 3. OpenClaw 与同类对照

基于今日数据，两者在项目规模和阶段上存在显著差异：

- **活动量与复杂度**：**OpenClaw** 的活动量是 **youdao lobster** 的数十倍，其 Issue 和 PR 讨论涉及更深层的架构问题，如 Codex 集成、流式处理、上下文窗口管理等。**youdao lobster** 的活动则更偏向应用层，如 Electron 修复、国际化、按钮布局等，复杂性较低。
- **技术重点**：**OpenClaw** 今日的合并 PR（如 Context Window 修复、安全策略强化）和社区热点（如 CPU 高负载、看门狗超时）均指向**核心引擎的稳定性与性能**。**youdao lobster** 的重点则在于**前端用户体验打磨**（如右键菜单、弹窗关闭、会话分组）和**上层功能集成**（如 DSH 引擎、OrcaRouter 网关）。
- **社区讨论面**：**OpenClaw** 社区讨论的“面”更宽，覆盖了从底层引擎、CLI 到多通道（Teams、WhatsApp）的广泛问题，且用户反馈的问题多为生产环境受阻的 P1 级 Bug。**youdao lobster** 的讨论则更聚焦于单个功能点（如配置覆盖、Ollama 模型兼容性）和社区提案（如 VOKO 集成）。

**小结**：OpenClaw 是一个功能丰富但正处于“稳定性踩油门”阶段的核心基础设施，用户基数大，但维护压力与 Bug 积压也成正比。youdao lobster 则是一个在 OpenClaw 基础上快速迭代、注重用户体验的上层应用，更像一个“试验田”和“产品层”，更新节奏快，但核心功能稳定性仍依赖上游。

#### 4. 共同出现的技术方向

今日，两个项目均出现了以下技术需求，表明社区对 Agent 能力进阶的普遍期待：

- **Agent 精细化管理**：
    - **OpenClaw**：用户提出“每代理独立梦境（dreaming）配置”（[#67413](https://github.com/openclaw/openclaw/issues/67413)）。
    - **youdao lobster**：今日合并的 PR [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) 实现了“为 Agent 添加独立工作目录配置”。
    - **共同诉求**：用户希望不再将 Agent 视为单一实体，而是希望为不同 Agent 配置独立的运行环境、上下文或策略。

- **跨平台/跨 Agent 通信**：
    - **OpenClaw**：用户长期反映“多通道（MSTeams、webchat、Telegram）下重复转录、上下文组装错误”（[#69208](https://github.com/openclaw/openclaw/issues/69208)），本质是跨渠道会话的一致性问题。
    - **youdao lobster**：社区成员提出 **VOKO** 项目，旨在解决“AI Agent 跨平台通信与群协作问题”（[#2500](https://github.com/netease-youdao/LobsterAI/issues/2500)）。
    - **共同诉求**：社区对 Agent 在多个渠道或与多个 Agent 之间进行**无缝、一致地协同工作**的需求日益强烈。

- **内容展示与交互优化**：
    - **OpenClaw**：用户请求在 Control UI 中添加“MathJax/LaTeX 渲染支持”（[#42840](https://github.com/openclaw/openclaw/issues/42840)），并反馈“RTL 文本渲染问题”（[#68105](https://github.com/openclaw/openclaw/issues/68105)）。
    - **youdao lobster**：今日合并了多项 UI 交互细节优化，如“工具执行结果增加一键复制按钮”（[#1640](https://github.com/netease-youdao/LobsterAI/pull/1640)）。
    - **共同诉求**：用户对 AI 助手的输出内容（如数学公式、多语言文本、工具结果）的**精确呈现和便捷操作**提出了更高要求。

#### 5. 差异化定位分析

- **功能侧重**：
    - **OpenClaw**：核心引擎与基础架构。侧重**安全策略**（安装警告确认）、**性能优化**（减少 token 浪费）、**运行时稳定性**（修复看门狗、队列阻塞）。
    - **youdao lobster**：应用层产品体验。侧重**UI/UX 细节**（右键菜单、会话分组、弹窗关闭）、**功能集成**（DSH 引擎、LLM 网关）、**用户体验**（日志脱敏、模型提供商迁移）。

- **目标用户**：
    - **OpenClaw**：开发者、技术团队、希望深度定制和自托管 AI 智能体的高级用户。其 CLI 和 Gateway 的使用方式，以及对安全策略的审查要求，都指向了技术用户。
    - **youdao lobster**：更广泛的终端用户，包括非技术用户。其丰富的 UI 交互优化、多语言支持以及对“一键复制”、“Esc 关闭”等细节的打磨，显示出对普通用户友好度的追求。

- **技术架构**：
    - **OpenClaw**：模块化、可扩展的底层架构，核心是引擎（Codex）、运行时、CLI 和 Gateway。它允许通过插件和配置进行深度定制，但这也带来了更高的复杂性和潜在的兼容性问题（如今日多个 P1 回归问题）。
    - **youdao lobster**：基于 OpenClaw 运行时构建的上层应用，深度集成了 Electron 和复杂的前端 UI。它更像是一个“开箱即用”的个人 AI 助手套件，通过集成上层功能（如 DSH 引擎、VOKO 通信）来降低用户使用门槛。

#### 6. 社区活跃度记录

基于今日数据，对两个项目的社区活跃度进行分层：

- **高活跃度**：**OpenClaw**
    - **证据**：单日 500 条 Issue 更新、500 条 PR 更新，讨论量巨大。123 个 PR 被合并，说明社区贡献者投入度极高。
    - **特征**：大型社区，维护者与贡献者互动频繁，但 Bug 积压和用户反馈的“生产受阻”问题也表明社区处于“高活跃、高压力”状态。

- **中等活跃度**：**youdao lobster**
    - **证据**：单日 7 条 Issue 和 21 条 PR，但 PR 合并率达到 85.7%，且多数为实质性改进（UI 修复、功能集成）。
    - **特征**：小型但效率高的社区。贡献者主要集中在核心功能改进和用户体验打磨上，项目迭代节奏快，但长期未解决的 Issue（如配置覆盖、Ollama 兼容）也表明维护者对核心 Bug 的响应速度有待提升。

#### 7. 有证据支撑的观察

1.  **OpenClaw 的稳定性瓶颈正在加剧用户信任危机**：今日多个 P1 级 Bug（如编码代理完全失效 [#62505]、CPU 高负载 [#91009]、SQLite 损坏 [#71689]）均为长期未修复的回归问题，且无关联 fix PR。结合用户反馈“编码代理几周正常工作，现在什么都不做”、“用户生产受阻”，这表明核心功能的稳定性退化已成为当前项目最突出的风险。

2.  **youdao lobster 正通过高频迭代和社区提案应对生态碎片化**：一方面，项目通过合并大量 UI/UX 修复 PR（如右键菜单、i18n、弹窗关闭）来提升用户体验一致性；另一方面，社区积极提出 VOKO 和 OrcaRouter 等集成提案，试图在其应用层之上建立一个更开放的通信和模型调用生态，以应对底层（OpenClaw）和外部模型带来的碎片化问题。

3.  **Agent 的“独立人格”与“协作意识”成为多项目社区的共同关注点**：OpenClaw 的“每代理独立配置”和 youdao lobster 的“Agent 独立工作目录”及“VOKO 跨 Agent 通信”，都指向了社区对 Agent 发展的共同预期：从“单一通用助手”向“多 Agent 协作的、各有专长的专业团队”转变。用户不再满足于一个 Agent 完成所有事，而是希望用一个 Agent 团队来管理复杂工作流。

4.  **中文用户社区的真实需求正在被项目正视**：OpenClaw 中“工作路径硬编码”（[#51429]）和“RTL 文本渲染”（[#68105]）的 Issue，以及 youdao lobster 中大量关于“i18n 修复”和“模型提供商从灵积迁移至百炼”（[#1667]）的 PR，都表明项目维护者和社区贡献者开始更多关注并解决非英语、特别是中文用户的实际使用痛点。

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

好的，遵照您的要求，以下是为您生成的 youdao lobster 项目动态日报。

---

### youdao lobster 项目日报 — 2026-08-18

**项目名称:** LobsterAI
**项目链接:** https://github.com/netease-youdao/LobsterAI

#### 1. 今日活动概览

- 今日社区活跃度显著提升，共处理**7条**新/活跃的Issues和**21条**Pull Requests，其中**18条PR**已合并或关闭，**3条**仍待合并。
- 无新版本发布。多组PR完成了深水炸弹（DSH）引擎集成、Electron右键菜单修复、i18n国际化修复等实质性工作，但多个长期存在的Issues仍未得到解决。
- 社区开始出现新的集成提案，如VOKO（跨平台Agent通信）和OrcaRouter（LLM网关），显示出项目在生态扩展上的潜力。

#### 2. 版本发布
- 无

#### 3. 项目进展 (今日合并/关闭的重要PR)

- **DSH引擎集成**：一组由 `@fisherdaddy` 提交的PR（[#2505](https://github.com/netease-youdao/LobsterAI/pull/2505), [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502), [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506)）完成了DSH进程启动器和运行设置文档的合并，标志着DSH引擎的集成已进入实质性阶段。
- **Electron体验优化**：`@liuzhq1986` 提交的PR [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) 修复了Electron窗口中文本输入框缺乏“剪切/复制/粘贴”右键菜单的问题，提升了基础的用户体验。
- **UI/UX改进与修复**：多组PR完成合并，包括：
    - 技能升级进度条全局覆盖修复 ([#2501](https://github.com/netease-youdao/LobsterAI/pull/2501))
    - Cowork聊天窗口“滚动到底部”按钮 ([#1636](https://github.com/netease-youdao/LobsterAI/pull/1636))
    - AI回复消息“重新生成”按钮 ([#1637](https://github.com/netease-youdao/LobsterAI/pull/1637))
    - 多处按钮Tooltip的i18n国际化修复 ([#1639](https://github.com/netease-youdao/LobsterAI/pull/1639))
    - 工具执行结果增加一键复制按钮 ([#1640](https://github.com/netease-youdao/LobsterAI/pull/1640))
    - 所有弹窗统一支持Esc键关闭 ([#1641](https://github.com/netease-youdao/LobsterAI/pull/1641))
    - 设置页模型提供商体验修复 ([#1669](https://github.com/netease-youdao/LobsterAI/pull/1669))
- **功能与修复**：
    - 为Agent添加独立工作目录配置，增强Agent管理灵活性 ([#1668](https://github.com/netease-youdao/LobsterAI/pull/1668))
    - 脱敏导出日志中的敏感信息，提升安全性 ([#1661](https://github.com/netease-youdao/LobsterAI/pull/1661))
    - 升级OpenClaw运行时至v2026.4.12 ([#1663](https://github.com/netease-youdao/LobsterAI/pull/1663))
    - 将Qwen控制台链接从灵积迁移至百炼 ([#1667](https://github.com/netease-youdao/LobsterAI/pull/1667))
    - Cowork会话列表按时间区间分组展示，提升历史会话查找效率 ([#1675](https://github.com/netease-youdao/LobsterAI/pull/1675))

#### 4. 社区热点

- **新的集成邀约与生态扩展**：`@271912980` 提出的Issues [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) 带来了其开源项目 **VOKO**，旨在解决AI Agent跨平台通信与群协作问题。该Issue获得了社区成员的关注，体现了社区对Agent间互联互通（A2A）的期待。
- **配置持久化问题引关注**：`@zjm79` 提出的Issues [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) 反映`groupPolicy`配置会周期性被覆盖。此问题自4月提出至今未解决，最新的“stale”标签和社区成员的评论表明，该问题对用户依赖的配置持久化功能造成了困扰，讨论热度较高。

#### 5. Bug 与稳定性

- **严重（配置持久化）**：`groupPolicy`配置被覆盖（[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)）。该问题长期存在且影响用户自定义策略，暂无相关fix PR提交。
- **严重（模型兼容性）**：Ollama本地模型无法使用（[#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)）。用户报告从Qwen3到Gemma4等多个模型均报错，但Ollama和其他客户端使用正常，表明集成存在问题。暂无相关fix PR。
- **中等（功能异常）**：
    - 手动创建定时任务保存时提示“还有内容未保存”（[#1643](https://github.com/netease-youdao/LobsterAI/issues/1643)）。
    - 非SSE协议的MCP无法使用（[#1662](https://github.com/netease-youdao/LobsterAI/issues/1662)）。
    - md文件转word时因“sse response finish reason: full”中断（[#1671](https://github.com/netease-youdao/LobsterAI/issues/1671)）。
- **（修复已合并）**：今日合并的PR [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) 修复了日志中敏感信息泄露的问题。

#### 6. 功能请求归类

- **Agent协作与管理**：
    - 用户希望Main Agent能感知并调度其他Agent，实现基于MD的工作流，共同完成复杂任务 ([#1644](https://github.com/netease-youdao/LobsterAI/issues/1644))。
    - 相关PR [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) 已合并，为每个Agent增加了独立工作目录配置，部分满足了精细化管理需求。
- **跨平台与通信**：
    - 社区成员提出VOKO项目，旨在成为AI Agent的跨平台通信层，解决不同Agent框架和IM渠道间的互通问题 ([#2500](https://github.com/netease-youdao/LobsterAI/issues/2500))。
- **UI/UX增强**：
    - 今日合并了多个用户提出的UI/UX改进PR，包括：聊天窗口滚动到底部按钮、AI回复重新生成按钮、工具结果复制、弹窗Esc关闭、会话列表时间分组等，体现了社区对交互细节的重视。
- **外部集成**：
    - 社区提交了PR [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504)，提议将**OrcaRouter**（一个兼容Anthropic/OpenAI的LLM网关）作为一级提供商集成，以扩展模型选择。

#### 7. 用户反馈摘要

- **配置覆盖问题持续困扰用户**：`@zjm79` 在[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)中明确表达了“每次过一会就会被覆盖”的无奈，这表明配置的持久化和稳定性是当前的核心痛点之一。
- **本地模型使用者受阻**：`@zhahongan-ctrl` 在[#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)中详细描述了Ollama模型无法使用的情况，并附上了截图，指出其他客户端正常，说明问题定位在LobsterAI的集成逻辑上，而非模型本身。
- **对Agent协作能力的期待**：`@orion0608` 在[#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)中通过对话示例，生动展示了当前Agent间无法感知和协作的局限，并提出了基于MD的工作流需求，反映了用户对更高级Agent编排能力的渴望。

#### 8. 待处理积压

- **高优先级Issue**：`groupPolicy`配置被覆盖（[#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)）和Ollama本地模型无法使用（[#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)）均为自4月提出的未解决问题，已标记为“stale”，但问题本身对用户影响较大，建议维护者优先处理。
- **长期未合并的依赖更新PR**：`dependabot` 提交的PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 旨在将Electron从40.2.1升级至43.4.0，该PR自4月2日创建，已停滞超过4个月。长期不更新依赖可能引入安全风险或兼容性问题，建议评估合并。

</details>