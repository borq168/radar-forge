# OpenClaw 生态日报 2026-06-21

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-21 00:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，以下是基于您提供的 OpenClaw 项目 GitHub 数据生成的 2026-06-21 项目动态日报。

---

# OpenClaw 项目动态日报 — 2026-06-21

## 今日活动概览

过去 24 小时，项目社区保持高度活跃，共产生 500 条 Issues 更新和 500 条 PR 更新。但其中有 480 个新 Issues 仍在活跃讨论中，仅 20 个被关闭；同时有 471 个 PR 等待合并，仅 29 个被合并或关闭，体现了较大的维护积压。未发布新版本，社区的主要精力集中在大量处于讨论和开发阶段的 P1/P2 级别的 Bug 修复与功能提案上。

## 版本发布

无新版本发布。

## 项目进展

今日合并/关闭的重要 PR 不多，但标志着一些长期问题的解决或功能推进的暂停。

- **PR #68936 (CLOSED, size: XL):** 一个大型 PR，旨在为 Windows 添加 PR review 自动修复流水线和守护进程。该 PR 已被关闭，但关闭原因（合并或放弃）未在摘要中明确，其功能设想仍为未来可能的自动化维护工作提供了参考。
- **PR #94087 (CLOSED, size: XS):** 该 PR 修复了一个在 `message_tool_only` 模式下，心跳（heartbeat）运行器可能向 Telegram 泄露私人回复的问题。这个问题的修复对于使用特定流模式限制消息可见性的用户至关重要，关闭状态意味着修复已合并。

## 社区热点

今日讨论最活跃的 Issues 集中在底层的架构迁移和高影响的性能回归问题，反映出社区对项目稳定性和长期技术债的强烈关注。

- **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (31 条评论):** 关于“核心 session/transcript 状态向 SQLite 迁移”的架构讨论最为热烈。这是项目底层的重大变更，社区关注如何通过“branch-by-abstraction”的低风险方式分步实施，避免一次性的高风险重写。背后诉求是提升数据持久化和恢复的可靠性。
- **[Issue #85333](https://github.com/openclaw/openclaw/issues/85333) (13 条评论):** 报告了 `openclaw doctor --fix` 命令在版本 2026.5.20 上出现了 4-5 倍的性能回归。社区用户`@samson1357924`提供了详细的性能数据和生产环境信息，深入分析了 session snapshot 路径遍历导致的瓶颈，体现了用户对 CLI 工具性能的敏感度和分析能力。
- **[Issue #92201](https://github.com/openclaw/openclaw/issues/92201) (10 条评论):** 讨论了嵌入式运行器在重放 Anthropic 模型的 thinking 签名时出现随机失败的问题。由于错误信息被通用化，导致恢复机制无法触发。这触及了日志记录与错误恢复机制的协同问题，是影响用户体验的关键细节。

## Bug 与稳定性

今日报告的 Bug 和稳定性问题数量众多，且集中于会话状态（session-state）和消息丢失（message-loss）等核心功能。以下按严重程度列出关键问题，部分问题已有对应的修复 PR。

**P1 级别（高优先级，可能导致数据丢失、服务崩溃）**

- **[Issue #85333](https://github.com/openclaw/openclaw/issues/85333)** (性能回归, **有 fix PR**): `openclaw doctor --fix` 性能慢 4-5 倍。关联 PR `#95414` 试图通过修复工具调用解析中的空格问题来解决。
- **[Issue #92201](https://github.com/openclaw/openclaw/issues/92201)** (消息丢失，无 fix PR): Anthropic thinking 签名重放无效，恢复机制失效。
- **[Issue #86519](https://github.com/openclaw/openclaw/issues/86519)** (消息丢失，无 fix PR): Telegram 频道上 agent 重复发送相同回复 2-10 次。
- **[Issue #92043](https://github.com/openclaw/openclaw/issues/92043)** (崩溃循环，无 fix PR): 180s 的 compaction 超时导致长任务无法成功，并陷入循环失败。
- **[Issue #92460](https://github.com/openclaw/openclaw/issues/92460)** (消息丢失，无 fix PR): 隔离的 cron 完成通知器在最终返回时可能丢失设定的 `delivery.channel`。
- **[Issue #93375](https://github.com/openclaw/openclaw/issues/93375)** (崩溃循环，无 fix PR): Telegram 轮询在遭遇网络超时后进入静默崩溃循环，健康监控无法恢复。

**P2 级别（中等优先级，影响功能或体验）**

- **[Issue #94032](https://github.com/openclaw/openclaw/issues/94032)** (安全问题，无 fix PR): `exec` 功能在 Mac mini 上无法访问私有 LAN 主机，但同一用户通过 GUI 可以访问。
- **[Issue #91931](https://github.com/openclaw/openclaw/issues/91931)** (数据丢失，无 fix PR): 预置文件导致 OpenClaw 错误地完成了引导流程并删除了用户提供的 `BOOTSTRAP.md`。
- **[Issue #91804](https://github.com/openclaw/openclaw/issues/91804)** (安全问题，无 fix PR): agent 的内部推理/思考过程被泄露给用户。

## 功能请求归类

用户提出的功能需求集中在提升系统可扩展性、可配置性和长期运行的健壮性。

- **可观测性与运维**: `#90916` 请求增加“主题-会话”族群功能，允许一个助手拥有多个独立上下文通道。
- **性能与资源管理**: `#90354` 请求为预压缩的内存刷新添加有界/验证的追加语义。`#86023` 建议 Codex 长会话使用语义线程/引导缓存所有权。
- **配置与扩展性**: `#92105` 请求为 memory-wiki 插件提供可配置的页面组。`#91455` 希望改进 Kubernetes 的部署文档。
- **会话管理**: `#90325` 报告了 Matrix 频道分发在 v2026.6.1 版本中断。
- **相关 PR**: `#95424` 和 `#95414` 等 PR 在修复 Bug 的同时，也隐式地增加了对非标准 LLM 输出的容错性，可视为对功能稳健性的增强。

## 用户反馈摘要

从 Issues 评论中可以提炼出用户当前的核心痛点和诉求：

- **性能敏感度**: 用户对 CLI 命令（如 `openclaw doctor --fix`）的性能变化非常敏感，并会主动进行详细的 root cause 分析（`#85333`）。这对于一个开发工具而言，是关键的体验指标。
- **配置易用性与一致性**: 用户在配置 Telegram 消息工具（`#92094`）、Kubernetes 部署（`#91455`）时遇到了困惑和错误，表明文档和配置逻辑仍有优化空间。`#90711` 报告了 `launchd` 文件将 stderr 重定向到 `/dev/null`，导致调试信息丢失，直接影响了用户的排错效率。
- **对新问题的容忍度**: 用户在升级到新版本（如 2026.6.x 系列）后，遇到了大量回归问题，如 Telegeram 重复回复、Matrix 频道中断等。这体现出社区用户对主版本稳定性的高要求，以及对快速迭代所带来不稳定风险的容忍度正在降低，更倾向于“稳定但稍旧”的版本。
- **安全的焦虑**: 多个泄露推理过程（`#91804`）和无法访问本地网络（`#94032`）的 bug，反映了用户对 AI 助理安全边界的焦虑，尤其是在敏感场景下的使用。

## 待处理积压

以下是一些在今日数据中已存在较长时间的 Issue 和 PR，因缺乏响应或进展缓慢而值得维护者特别关注：

- **[Issue #14785](https://github.com/openclaw/openclaw/issues/14785)** (创建于 2026-02-12): 一个 P2 级别的增强请求，要求减少工具 schema 的 token 开销。初始评论已有 8 条，但后续几个月缺乏进展。
- **[PR #84326](https://github.com/openclaw/openclaw/pull/84326)** (创建于 2026-05-19, 状态: ⏳ waiting on author): 一个关于 `doctor` 命令的 PR，旨在暴露沙箱注册表信息，但卡在等待作者响应状态近一个月。
- **[PR #86655](https://github.com/openclaw/openclaw/pull/86655)** (创建于 2026-05-25, size: XL, 状态: ⏳ waiting on author): 一个大型的功能性 PR，旨在添加 Claude 的 app-server 扩展。提交后便处于等待作者状态，内容架构宏大但推进缓慢。

---

## 横向生态对比

好的，作为资深技术分析师，现根据您提供的2026-06-21各项目动态数据，生成一份横向对比分析报告。

---

## 2026-06-21 AI智能体开源项目横向对比分析

### 1. 今日横向概览

今日各项目社区活动呈现明显分化。OpenClaw 社区体量庞大但维护积压严重，社区焦点集中在底层架构迁移（SQLite）和高影响的性能回归问题。NanoBot 和 Zeroclaw 社区活跃度中等，但互动效率高，社区能针对并发安全、性能瓶颈等具体问题快速形成修复或优化方案（今日均有对应PR提交）。PicoClaw 社区体量最小，活动较少，但出现一个关于Evolution模式下持续消耗token的潜在严重成本问题，尚未得到响应。

### 2. 各项目活跃度对比

| 项目 | Issues (新/更新/总处理) | PRs (新/更新/总处理) | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500条更新；480新/20关闭 | ~500条更新；471待合并/29关闭或合并 | 无 | 社区体量极大，但维护能力严重跟不上活动量，积压问题突出。 |
| **NanoBot** | 5新/0关闭 | 18处理中；4关闭或合并 | 无 | 活跃度适中，社区响应速度快，能迅速将Bug报告转化为修复PR。 |
| **Zeroclaw** | 约50条更新 | 约50个PR处理；10个关闭或合并 | 无 | 活跃度中等偏低，讨论涉及“梦镜模式”等高级概念，修复集中在兼容性和构建问题。 |
| **PicoClaw** | 2条更新 | 1条更新 | 1个nightly版本 | 社区体量最小，活动稀疏。 |

### 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 的活动量（Issue/PR更新数）是其他项目的 **10-100倍**，但其维护效率（关闭/合并比例）远低于 NanoBot 和 Zeroclaw。OpenClaw 面临严重的社区规模与管理能力不匹配问题。
- **技术重点**：OpenClaw 的技术讨论侧重于 **底层架构**（状态迁移至SQLite）、**核心稳定性**（会话状态丢失、崩溃循环）和 **大规模自动化**（PR审核自动化流水线）。NanoBot 和 Zeroclaw 的讨论更集中于 **具体功能**（iMessage频道、OIDC认证）和 **特定Bug修复**（并发钩子、Groq兼容性）。
- **社区讨论面**：OpenClaw 用户的讨论更关注 **技术债务、长期可靠性和性能回退**，带有强烈的“运维与工程化”视角。NanoBot 和 Zeroclaw 用户的讨论则更多围绕 **新功能探索、用户体验精细化**（富文本消息、Mac mini网络安全）和 **特定模型适配**。

### 4. 共同出现的技术方向

多个项目今日的活动共同指向以下技术需求：

- **并发与状态管理**：**OpenClaw**（#85333：session snapshot路径遍历导致的性能回归）、**NanoBot**（#4408：`run()` 钩子并发不安全）。表明在异步、多Agent或长会话场景下，如何安全、高效地管理共享状态和资源是普遍痛点。
- **可观测性与运维健壮性**：**OpenClaw**（#88838：状态迁移至SQLite）、**Zeroclaw**（#8065/#8066：LLM请求负载捕获、通过trace_id关联日志与成本）、**PicoClaw**（#3012：Evolution模式下token持续消耗，缺乏诊断手段）。说明随着Agent走向生产环境，对成本追踪、问题定位和系统状态持久化的需求日益迫切。
- **平台/渠道扩展**：**NanoBot**（#4422：Telegram富文本消息；#4426：iMessage频道）、**Zeroclaw**（#7531：流式卡片消息）。各项目均在通过扩展消息协议和适配新渠道，追求更原生的用户体验。

### 5. 差异化定位分析

- **OpenClaw（核心参照）**：定位为 **高度复杂、可扩展的通用Agent框架**。其技术架构庞大，社区贡献者也多关注宏观架构（如会话状态持久化）和深度集成（如Windows守护进程）。目标用户是寻求构建复杂、自托管AI助手系统的开发者或组织。
- **NanoBot**：定位为 **轻量、模块化的个人AI助手SDK/框架**。其社区讨论集中在Python SDK、CLI体验、特定插件（Memory-Wiki）和渠道桥接（iMessage）。目标用户是希望快速为个人或小型团队构建定制化助手的开发者。
- **Zeroclaw**：定位为 **面向智能体“认知”和长期运行的框架**。其社区讨论高度关注“梦镜模式”（周期性记忆整合）、“自我认知”（能否理解并调用自身cron功能）和上下文管理。这暗示其架构更强调智能体的长期记忆、自主学习和决策循环。
- **PicoClaw**：定位为 **资源受限环境下的轻量Agent/机器人**。**v0.3.0-nightly** 的版本号和小体量的社区活动表明其仍处于早期/实验阶段。其焦点在于WebSocket协议和Evolution模式，可能更侧重嵌入式或单服务应用。

### 6. 社区活跃度记录

基于今日活动量与发布记录，对社群活跃度进行分层：

- **高度活跃但管理压力大**：**OpenClaw**
- **中等活跃，互动高效**：**NanoBot**、**Zeroclaw**
- **低活跃，处于早期/探索期**：**PicoClaw**

### 7. 有证据支撑的观察

1.  **“质量问题”与“认知问题”成为社区讨论焦点**：NanoBot 和 Zeroclaw 社区中有多条数据表明，用户开始关注智能体更深层的“元能力”。例如，Zeroclaw 用户报告 Agent 不知道自己有 cron 功能（#5862）；NanoBot 用户则在性能分析中发现 `estimate_prompt_tokens` 函数的冗余计算（#4420）。这反映出社区正在从“能否连接模型”向“模型能否高效、智能地使用自身工具”迈进。

2.  **并发安全成为跨项目的“敏感神经”**：OpenClaw 和 NanoBot 今日均有涉及数据竞争或状态不一致的Bug报告（OpenClaw #85333，NanoBot #4408），且有多个项目（NanoBot）立即提出了不同的修复方案。这表明，随着Agent交互场景增多，并发安全是决定系统稳定性的关键瓶颈，也是社区贡献者高度关注的领域。

3.  **PicoClaw 社区存在成本风险但缺乏响应**：PicoClaw 的 #3012 报告了一个在Evolution模式下每分钟稳定消耗token的Bug，这直接关联用户成本。然而，目前无任何修复PR或维护者回复。鉴于这是一个明确的、高影响的问题，若持续无响应，可能损害项目信任。

4.  **OpenClaw 的维护效率瓶颈可能导致社区分化**：OpenClaw 今日有27项P1级别Bug无修复PR，480个新Issue保持开放，而471个PR等待合并。这种大规模的积压可能促使部分用户转向修复和合并效率更高的项目（如NanoBot），或自主维护分支。

今日暂无明确跨项目信号：关于“多框架统一标准”或“生态融合”的明确讨论或提案。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 NanoBot 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 2026 年 6 月 21 日的数据生成项目动态日报。

---

## NanoBot 项目动态日报 (2026-06-21)

### 1. 今日活动概览

过去 24 小时内，项目社区活跃度较高。共产生 5 个新 Issue，全部处于开放状态，无已关闭 Issue；同时有 18 个 Pull Request 被提交或更新，其中 4 个已被合并或关闭，14 个仍在待合并状态。无新版本发布。社区讨论热点集中在**并发安全、性能优化**和**新功能支持**三个方面，多个修复与提案已形成对应的实现 PR。

### 2. 版本发布

无

### 3. 项目进展

今日有 4 个 PR 被合并或关闭，标志着几项重要修复的完成：

- **[已合并] [fix] fix: advance dream cursor when Dream is disabled to prevent prompt bloat (#4321)**: 修复了当 Dream 功能禁用时，dream cursor 未推进导致提示词持续膨胀的 Bug。
- **[已关闭] [fix] fix(mcp): close tracked generators in _close_server to prevent GC crash (#4303)**: 修复了 `streamableHttp` MCP 服务器会话终止时因生成器未正确关闭导致的跨任务崩溃问题。
- **[已合并] [channel] feat(channels): add iMessage channel via Photon Spectrum (#4426)**: 新增了基于 Photon Spectrum 的 iMessage 频道，遵循与现有 WhatsApp 桥接相同的 Python 频道 + Node 边车模式，无需 Mac 中继或自托管。
- **[已合并] fix(webui): prevent iOS Safari auto-zoom on textarea focus (#4427)**: 修复了 iOS Safari 浏览器在聚焦文本输入框时自动放大的问题，提升了移动端 WebUI 使用体验。

此外，另有多项重要 PR 获得关键更新：
- **`feat(sdk): expand Python SDK runtime controls (#4296)`** 和 **`feat(cli): add inline TUI for nanobot agent (#4329)`** 仍在持续迭代中，预示着 SDK 和 CLI 交互体验将迎来重要升级。

### 4. 社区热点

今日社区讨论的核心集中在两个关键议题上：

- **并发安全问题引发高度关注**: `#4408` 报告了 `Nanobot.run()` 中的 per-run hooks 在并发场景下会相互覆盖（clobbered）的严重 Bug，导致数据竞争。该 Issue 获得了 2 条评论。针对此问题，社区迅速提出了两个不同的修复方案：`#4425` (使用 contextvars 重构) 和 `#4409` (通过修改方法签名传递 hooks)，其中 `#4425` 作为 `#4408` 的直接修复方案，被标记为关键。

- **性能优化成为社区共识**: `#4420` 明确指出 `estimate_prompt_tokens` 函数中工具定义重复编码的性能瓶颈，该 Issue 被广泛讨论。随后，社区贡献者 `michaelxer` 和 `yu-xin-c` 几乎同时提交了 `#4421` 和 `#4428` 两个 PR，均以不同的方式缓存工具定义的 token 估算，高度一致地回应该优化需求，体现了社区对性能问题的快速响应和解决方案的多样性。

- **链接**:
    - `#4408`: [Bug] Nanobot.run() per-run hooks 并发不安全: https://github.com/HKUDS/nanobot/issues/4408
    - `#4420`: [性能] `estimate_prompt_tokens` 冗余编码: https://github.com/HKUDS/nanobot/issues/4420
    - `#4425` (PR, 修复方案): https://github.com/HKUDS/nanobot/pull/4425
    - `#4421` (PR, 性能优化): https://github.com/HKUDS/nanobot/pull/4421
    - `#4428` (PR, 性能优化): https://github.com/HKUDS/nanobot/pull/4428

### 5. Bug 与稳定性

今日报告了 2 个主要 Bug，均已进入修复阶段：

- **[严重] `Nanobot.run()` 钩子并发竞争 (Issue #4408)**: 当并发调用 `run()` 时，共享的 `_extra_hooks` 列表会被错误地覆盖，属于数据竞争问题。两个修复 PR (`#4425`, `#4409`) 正在审查中。
- **[中等] `estimate_prompt_tokens` 性能瓶颈 (Issue #4420)**: 每轮对话中对不变的工具定义进行重复的 JSON 序列化和 tiktoken 编码，造成不必要的性能开销。两个优化 PR (`#4421`, `#4428`) 已提交。

**链接**:
- `#4408`: [Bug] Nanobot.run() per-run hooks 并发不安全: https://github.com/HKUDS/nanobot/issues/4408
- `#4420`: [性能] `estimate_prompt_tokens` 冗余编码: https://github.com/HKUDS/nanobot/issues/4420

### 6. 功能请求归类

社区提出的新功能请求活跃，涵盖了平台扩展、模型配置和智能调度等方面：

- **平台/渠道扩展**:
    - `#4426` (**已合并**): 新增 iMessage 频道。
    - `#4422`: 为 Telegram 频道增加 `sendRichMessage` 支持，以渲染表格、任务列表等富文本内容。
- **模型配置与推理控制**:
    - `#4429`: 请求允许自定义 Provider 配置思维链（thinking style）参数。
    - `#4419`: 请求支持自动推理努力度（reasoning effort）的等级划分与自动升级。
- **智能调度与记忆增强**:
    - `#4424` (PR): 在归档事实时引入来源上下文（provenance），提升记忆准确性。
    - `#4416` (PR): 支持定时任务（cron）的模型预设。

### 7. 用户反馈摘要

- **开发者痛点**:
    - **并发问题**: 用户 `@waelantar` 报告了在并发调用时，hook 机制会被破坏的 Bug（`#4408`）。这表明异步场景下的稳定性是用户关注的焦点。
    - **性能瓶颈**: 用户 `@codeLong1024` 在构建自己的数字员工项目时，通过性能分析定位到 `estimate_prompt_tokens` 的性能问题（`#4420`）。这反映出中间件性能细节会直接影响到终端应用的响应速度。
- **功能诉求**:
    - 用户 `@gkd2323c` 和 `@orrinwitt` 都围绕推理模型的配置提出了更灵活的需求（`#4429`, `#4419`），表明随着不同模型提供商的特有参数出现，用户需要更统一的抽象层来管理这些差异。
    - 用户 `@zpljd258` 关注 Telegram 渠道的富媒体展示能力（`#4422`），反映了对更丰富、原生化交互体验的期望。

### 8. 待处理积压

以下为部分更新较晚但仍未合并的重要 PR，建议社区维护者关注其进展：

- **`fix(memory): keep history cursor monotonic (#4256)`**: 该 PR 旨在修复 `MemoryStore` 中历史记录游标的单调性问题，已存在近两周但未合并，可能阻塞其他记忆系统相关的开发。
- **`feat(sdk): expand Python SDK runtime controls (#4296)`**: 这是一个对 SDK 进行重大升级的 PR，已存在 10 天，属于较大型的功能开发，但仍处于开放状态。

**链接**:
- `#4256`: https://github.com/HKUDS/nanobot/pull/4256
- `#4296`: https://github.com/HKUDS/nanobot/pull/4296

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Zeroclaw 项目 GitHub 数据，生成 2026-06-21 的项目动态日报。

---

## Zeroclaw 项目动态日报 | 2026-06-21

**数据统计时段**：2026-06-20 - 2026-06-21

### 1. 今日活动概览

今日项目活动活跃，共处理 50 条 Issue 和 50 个 PR。Issue 方面，新开了大量功能请求和 bug 报告，主要集中在安全认证、可观测性及技能平台等关键领域。PR 方面，有 10 个 PR 被合并或关闭，重点修复了 Docker 镜像构建、Groq 提供商兼容性等具体问题，并推进了 SOP（标准操作程序）运行时和 OIDC 认证等长期功能的基础设施建设。社区对“梦镜模式”和“上下文预算”等高级特性讨论热烈。

### 2. 版本发布

- **新版本发布：0 个**
- 今日无新版本发布。

### 3. 项目进展

今日有 10 个 PR 被合并或关闭，主要包括：
- `#7932` [已合并] **fix(docker): 修复 Node 24 摘要锁定。** 修复了 Docker 镜像构建过程。
- `#8036` [已合并] **test(runtime): 在缓存命中测试中固定系统提示词以消除日期波动。** 修复了测试的不稳定性。
- `#7616` [已合并] **fix(providers): 为 Groq 剥离推理模型输出中的 reasoning 内容。** 修复了与 Groq 提供商兼容性问题，确保了多轮对话的流畅性。
- `#7877` [已关闭] **Bug: 外部编码工具从守护进程当前工作目录解析相对路径。** 确认并关闭了一个配置路径解析问题。
- `#7795` [已关闭] **static_voice_peers 缓存了渠道句柄上的 voice peers 配置。** 修复了一个潜在的配置状态不一致问题。

### 4. 社区热点

今日讨论最活跃的议题集中在用户体验与核心功能的平衡上：
- **`#5849` [Feature]: Dream Mode — 周期性记忆整合与反思学习** (18 条评论)
  链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/5849`
  **分析**：该提案获得大量关注，讨论的是让 ZeroClaw 在空闲期进行后台记忆整合与反思，提升长期知识结构。这反映了用户对智能体超越简单指令执行，向更深层次自主学习和认知能力发展的期望。

- **`#5862` [Bug]: zeroclaw 不知道它可以添加 cron** (13 条评论)
  链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/5862`
  **分析**：用户报告 ZeroClaw 无法理解并使用自身的 `cron` 功能。这说明智能体在“自我认知”和“元工具使用”方面存在不足，无法将自身的能力（如设置定时任务）高效地暴露给用户，是智能体系统通用性的一个关键痛点。

### 5. Bug 与稳定性

今日报告了多个 Bug，按严重程度排列如下：

- **高风险 Bug：**
    - `#8047` [Bug]: ReadSkillTool 在 `data_dir` 中查找技能，但技能存在于智能体工作区。 (评论: 1)
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/8047`
    - `#5844` [Bug]: 过分强调记忆。 (评论: 6)
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/5844`
    - `#6037` [Bug]: 定时任务可重复启动，即使已经在运行。 (评论: 1)
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/6037`
- **中风险 Bug：**
    - `#6517` [Bug]: 上下文溢出导致幻觉/话题漂移。 (评论: 2)
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/6517`
    - `#6672` [Bug]: 小米思考模式模型在代理工具调用环路中未传回 `reasoning_content`。 (评论: 5)
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/6672`

**相关修复 PR（今日合并或活跃）：**
- `#8004` [OPEN] fix(cost): 使预算配置可重载，而非在启动时冻结。
  - 链接：`https://github.com/zeroclaw-labs/zeroclaw/pull/8004`
- `#7973` [OPEN] fix(agent): 自包含的上下文压缩摘要供应商。
  - 链接：`https://github.com/zeroclaw-labs/zeroclaw/pull/7973`

### 6. 功能请求归类

今日提出的新功能请求涉及多个关键领域：
- **安全 / 认证：**
    - `#8076` [Feature]: 本地用户名/密码认证提供者。
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/8076`
    - `#7141` [Feature]: OIDC 认证提供商支持。
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/7141`
- **可观测性 / 调试：**
    - `#8066` [PR] feat(observability): 可选的 LLM 请求负载捕获。
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/pull/8066`
    - `#8065` [PR] feat(observability): 通过 trace_id 关联日志并记录每次调用成本。
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/pull/8065`
- **用户体验 / 工作流：**
    - `#5944` [Feature]: 语音卫星设备。
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/7944`
    - `#7531` [Feature]: 为 QQ/钉钉等渠道支持流式卡片消息。
      - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/7531`

### 7. 用户反馈摘要

从 Issue 评论中提炼的用户痛点与诉求：
- **自我认知与内部工具：** 用户期望智能体能“知道”自身具备的底层能力（如 `cron`），并能主动调用/建议用户使用。当前的认知鸿沟导致用户发出看似合理的指令却失败。 (`#5862`)
- **上下文管理与稳定性：** 用户报告上下文预算限制、记忆权重过高、上下文溢出等“软性”Bug，表现为智能体行为退化（如话题漂移、错误执行、无限循环）。这提示系统在上下文窗口管理、工作内存与长期记忆的权重分配上需要更精细的算法。 (`#5844`, `#5808`, `#6517`, `#6036`)
- **文档与自助：** 用户反馈，智能体无法回答关于自身功能和配置的问题，建议在 Docker 镜像中包含项目文档，以实现功能上的“自举”，允许用户就地提问。 (`#7950`)

### 8. 待处理积压

以下 Issue 和 PR 标记为“blocked”、“needs-author-action”或“stale-candidate”，可能需要维护者关注：

- `#5862` [Bug] zeroclaw 不知道它可以添加 cron。 (已无作者响应，标记为 stale-candidate)
  - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/5862`
- `#6558` [Bug] 供应商错误。 (已标记为 needs-author-action, stale-candidate)
  - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/6558`
- `#6517` [Bug] 上下文溢出导致幻觉/话题漂移。 (已标记为 needs-author-action, stale-candidate)
  - 链接：`https://github.com/zeroclaw-labs/zeroclaw/issues/6517`
- `#7019` [PR] 修复渠道：将 Telegram TTS 转码为 Opus。 (已标记为 needs-author-action)
  - 链接：`https://github.com/zeroclaw-labs/zeroclaw/pull/7019`

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-21

## 1. 今日活动概览

过去 24 小时内，PicoClaw 项目发布了 1 个 nightly 版本（v0.3.0-nightly.20260620），新增 2 条 Issue 更新（均处于开放状态），1 条 PR 更新（仍待合并）。两个长期存在的 Issue 获得了新的讨论，分别涉及 Evolution 模式下持续消耗 token 的问题以及 WebSocket 客户端缺少显式结束信号的功能请求。开放已久的图像输入压缩 PR 也获得了维护者的二次评论。

## 2. 版本发布

- **nightly**
  标签：`v0.3.0-nightly.20260620.287853ab`
  说明：自动化构建的每日测试版本，可能不稳定。
  完整变更记录：https://github.com/sipeed/picoclaw/compare/v0.3.0...main
  无破坏性变更或迁移说明（未提供）。

## 3. 项目进展

今日无 PR 被合并或关闭。唯一活跃的 PR #2964（图像输入压缩）仍处于开放状态，最后一次更新于 2026-06-20，尚无合并决定。

## 4. 社区热点

- **#2984**：`[Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients`
  作者：@Brook-sys
  讨论：3 条评论，获得 2 个 👍
  链接：https://github.com/sipeed/picoclaw/issues/2984
  诉求：外部 WebSocket 客户端当前只能通过 `message.create`、`typing.stop` 等事件推断智能体处理结束，缺少确定性信号。用户希望协议层面增加一个显式“turn completion”消息，以便客户端准确判断对话轮次结束，优化交互逻辑。

- **#3012**：`[BUG] Continuous consumption of tokens every minutes when evolution is enabled`
  作者：@xpader
  讨论：4 条评论，无点赞
  链接：https://github.com/sipeed/picoclaw/issues/3012
  诉求：在 Evolution 功能开启后（Evolution Mode 设为 Draft，Code Path Trigger 设定），每分钟持续消耗 token，疑似存在循环调用或未正确终止的定时任务。用户提供了环境信息（v0.2.9，Go 1.25.10，MiniMax 模型，FreeBSD 15.0，Web 通道），但未给出完整复现步骤。

## 5. Bug 与稳定性

- **#3012**：Evolution 模式下 token 持续消耗（严重性：高，因涉及云成本），目前无关联修复 PR，维护者尚未分配或回复。

## 6. 功能请求归类

- **#2984**：WebSocket 协议显式结束信号（协议层功能改进）
- **#2964**（PR）：图像输入压缩（配置化多级压缩策略，属于图像管道功能增强）

两项需求均对应独立功能，无重复或冲突。暂无维护者明确承诺纳入路线图。

## 7. 用户反馈摘要

- 在 #3012 评论中，用户 @xpader 提到“token 消耗每分钟稳定增加”，并询问是否与 Evolution 的 Draft 模式下的自动轮询机制有关。社区尚未给出有效排查方向。
- #2984 的提出者 @Brook-sys 强调“当前实现中，客户端只能通过超时或事件间隔猜测结束”，这给实时性要求高的应用（如 UI 对话流控制）带来困难。

## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 最后更新 | 状态 | 备注 |
|------|------|----------|----------|------|------|
| #2964 | PR（图像压缩） | 2026-05-28 | 2026-06-20 | 开放 | 已 23 天未合并，维护者上周有评论但未推进 |
| #3012 | Bug（token 持续消耗） | 2026-06-05 | 2026-06-20 | 开放 | 严重性能/成本问题，尚无回复 |
| #2984 | Feature（WebSocket 结束信号） | 2026-06-02 | 2026-06-20 | 开放 | 社区关注度较高（2 👍），无维护者介入 |

以上积压建议维护者优先响应 #3012 的 bug 报告，并在 #2964 上给出明确下一步计划（要求修改或考虑合并）。

</details>