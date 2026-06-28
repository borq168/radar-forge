# OpenClaw 生态日报 2026-06-28

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-28 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是根据您提供的 OpenClaw 项目 GitHub 数据生成的 2026-06-28 项目动态日报。

---

## OpenClaw 项目日报 — 2026-06-28

### 1. 今日活动概览

今日项目无新版本发布。过去24小时内，社区活跃度极高，共产生了500条Issue和500条PR更新。尽管数量庞大，但Issue的关闭率（14条，约2.8%）和PR的合并/关闭率（53条，约10.6%）均处于较低水平，表明项目在核心功能修复和决策方面进展缓慢，大量讨论和代码变更仍处于积压状态。社区主要关注会话状态持久性、消息投递可靠性以及多编码文件名处理等长期存在的架构性问题。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日新合并/关闭了少量PR，显示了部分推进方向：

*   **会话状态持久化修复**: PR [#68936](https://github.com/openclaw/openclaw/pull/68936) (未合并) 和 [#97075](https://github.com/openclaw/openclaw/pull/97075) (已合并) 代表了维护者对提升系统稳定性的努力。前者引入了PR评论自动修复流水线和Windows守护进程，后者则扩展了 `Doctor` 命令以暴露网关运行时状态，增强了可观测性。
*   **UI修复**: PR [#97337](https://github.com/openclaw/openclaw/pull/97337) (已合并-更正: 状态为OPEN) 是一个Web UI的小型修复，解决了在快速创建Cron任务时无法选择模型的问题，并改进了任务列表的模型信息展示。此PR取代了旧的PR [#95341](https://github.com/openclaw/openclaw/pull/95341)。
*   **守护进程可靠性**: PR [#97334](https://github.com/openclaw/openclaw/pull/97334) (已关闭) 尝试通过CLI标志固定Node堆上限来解决托管服务的可靠性问题，虽然已关闭，但议题本身 (#96203) 表明了对特定场景下内存管理的关注。
*   **文档修复**: PR [#97336](https://github.com/openclaw/openclaw/pull/97336) (开放中) 是一个社区贡献的文档错误修复，更正了Discord设置指南中的路径说明。

### 4. 社区热点

今日讨论最活跃的议题主要集中在长期未解决的架构性问题上，社区对承诺的功能与实现现状之间的差距感到不满。

*   **档案化文件名编码处理**：[#48788](https://github.com/openclaw/openclaw/issues/48788) (18条评论) 社区倡导创建一个集中的文件名编码处理工具，以解决多编码场景（如Shift-JIS, GB18030）下的问题。评论者和作者都认为现行方案（PR #48578）过于局部，无法应对所有渠道适配器的需求，要求一种更系统、彻底的架构解决方案。
*   **子代理状态不同步**：[#58450](https://github.com/openclaw/openclaw/issues/58450) (15条评论) 用户报告了子代理在视觉上“看起来”已完成但后台工作并未实际启动的严重问题。这破坏了用户对“后续跟进”功能的信任，被认为是会话状态管理中的一个关键缺陷。
*   **嵌入运行器的Antropic推理签名无效**：[#92201](https://github.com/openclaw/openclaw/issues/92201) (15条评论) 一个在Slack插件中发现的棘手问题：Anthropic模型的推理签名在回放时变得无效，且错误恢复机制因错误文本被泛化而失效。这暴露了系统在处理特定AI模型输出时的脆弱性和健壮性不足。
*   **社区技能生态的落差**：[#50090](https://github.com/openclaw/openclaw/issues/50090) (15条评论) 用户对ClawHub技能市场的现状感到失望，认为其“承诺与现实的差距很大”。社区的挫败感来自技能市场缺乏治理、文档不一致以及整体生态系统不成熟，尽管许多人认为“技能”是OpenClaw成长的关键。

### 5. Bug 与稳定性

今日报告的Bug中，回归问题和关键稳定性问题占据了主导。

*   **P1 级 - 编码智能体完全失效 (回归)**: [#62505](https://github.com/openclaw/openclaw/issues/62505) 用户报告编码Agent完全无法完成任务，仅提供模糊的状态更新。这是一个严重的回归问题，影响了核心功能。当前状态为 **待fix PR** (标记有 `clawsweeper:linked-pr-open`)。
*   **P1 级 - 硬重置循环与上下文溢出**: [#63216](https://github.com/openclaw/openclaw/issues/63216) 系统在特定会话键上持续进行硬上下文溢出重置，即使配置了高内存缓冲区阈值也无法阻止，并导致引导上下文被重复注入，形成死循环。暂无关联的fix PR。
*   **P1 级 - 网关OOM (内存泄漏)**: [#55334](https://github.com/openclaw/openclaw/issues/55334) `sessions.json`文件无限增长，导致网关内存耗尽。每个会话条目重复存储整个`skillsSnapshot`。这是一个长期存在的稳定性问题，暂无fix PR。
*   **P1 级 - 子代理锁文件问题**: [#95833](https://github.com/openclaw/openclaw/issues/95833) (已关闭) 子代理终止机制未能释放`.jsonl.lock`文件，导致会话永久性损坏。此问题已关闭，说明可能有修复或绕过方案。
*   **P1 级 - 模型切换静默失败**: [#58957](https://github.com/openclaw/openclaw/issues/58957) 当会话上下文过大时，切换模型会静默失败，用户看不到任何错误提示。暂无fix PR。
*   **P2 级 - 多编码文件名处理**: [#48788](https://github.com/openclaw/openclaw/issues/48788) 对多编码`Content-Disposition`的处理需要根本性的架构改进，当前局部修复（PR #48578）被认为不够。暂无fix PR。
*   **P2 级 - 会话清理误删有效会话**: [#50248](https://github.com/openclaw/openclaw/issues/50248) 会话清理命令 `--fix-missing` 错误地将有有效记录的新Cron任务会话标记为缺失并清理，导致数据丢失。暂无fix PR。
*   **P2 级 - 工作路径被硬编码**: [#51429](https://github.com/openclaw/openclaw/issues/51429) 用户发现开发者的工作路径被硬编码进代码并发布，导致新安装的用户目录被错误创建。这是一个低级但影响广泛的错误，暂无fix PR。

### 6. 功能请求归类

用户提出的新功能需求多样，反映了对更先进、更安全、更灵活系统的期望。

*   **社区与市场**
    *   **社区技能开发与ClawHub**: [#50090](https://github.com/openclaw/openclaw/issues/50090) 社区希望建立一个更完善、更有治理的ClawHub生态，让开发者能发布并共享技能。

*   **安全与隐私**
    *   **敏感数据脱敏**: [#64046](https://github.com/openclaw/openclaw/issues/64046) 用户要求在配置文件、日志和UI中对API密钥、Token等敏感信息进行加密或脱敏处理。
    *   **不可绕过的出站策略**: [#56349](https://github.com/openclaw/openclaw/issues/56349) 需要一个统一的、强制性的预发送验证/修改机制，以确保所有出站消息都经过安全策略检查。

*   **功能增强**
    *   **按Agent配置知识库**: [#63829](https://github.com/openclaw/openclaw/issues/63829) 在多Agent场景下，允许每个Agent拥有自己独立的知识维基，而不是共享一个全局知识库。
    *   **多槽位记忆架构**: [#60572](https://github.com/openclaw/openclaw/issues/60572) 提议用多个专用记忆槽位替代单个记忆插件，以支持更精细的记忆分层和提供者。
    *   **Telegram内联查询支持**: [#54794](https://github.com/openclaw/openclaw/issues/54794) 期望支持`@botname query`模式的内联查询，提升在Telegram中的使用体验。
    *   **长任务持久化状态界面**: [#52640](https://github.com/openclaw/openclaw/issues/52640) 为Discord等渠道的长耗时任务提供一个可靠、持久的状态展示界面。

### 7. 用户反馈摘要

从今日活跃的Issues中可以提炼出以下用户痛点：

*   **对核心功能的严重不满**: 编码Agent的完全失效 (#62505) 和子代理“假完成” (#58450) 严重破坏了用户对平台核心执行能力的信任。
*   **对承诺与现实的落差感到失望**: 关于ClawHub (#50090) 和多功能知识管理 (#35203) 的讨论显示出，用户对市场宣传的功能有很大期待，但实际实现和体验远未达到预期，挫伤了社区建设者的热情。
*   **稳定性和可靠性是首要关注点**: 内存泄漏 (#55334)、会话锁定 (#95833, #49603) 和硬重置 (#63216) 等问题表明，在添加新功能之前，系统的基础稳定性和可靠性是需要优先解决的核心问题。
*   **基础功能的缺失令人困扰**: 诸如UI中数学公式渲染问题 (#42840)、多编码文件名处理 (#48788) 以及硬编码工作路径 (#51429) 等基础功能的缺失或bug，影响了用户的日常使用体验。

### 8. 待处理积压

以下为长期开放、评论数较多且无明确fix PR的核心议题，需要维护者高度关注。

*   **[#50090](https://github.com/openclaw/openclaw/issues/50090) (P2, 创建于2026-03-19)**: 社区技能开发与ClawHub。这是一个生态层面的基础诉求，涉及开发者体验和市场信任，已积压超过3个月无实质性进展。
*   **[#62505](https://github.com/openclaw/openclaw/issues/62505) (P1, 创建于2026-04-07)**: 编码Agent回归性Bug。这是导致核心功能“编码Agent”完全失效的P1级回归问题，严重阻塞用户工作流，亟需排查和修复。
*   **[#42995](https://github.com/openclaw/openclaw/pull/42995) 及系列长期未合入PR**: 如PR [#53821](https://github.com/openclaw/openclaw/pull/53821) (按Agent沙箱可见性, 约3个月), [#52664](https://github.com/openclaw/openclaw/pull/52664) (暴露原始消息体, 约3个月) 等，这些PR解决了社区明确提出的需求，但长时间等待合并，加剧了社区的挫败感。
*   **[#55334](https://github.com/openclaw/openclaw/issues/55334) (P1, 创建于2026-03-26)**: 网关OOM。这是一个严重的稳定性问题，已积压三个月，可能导致大规模服务中断。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的资深技术分析师，以下是根据您提供的2026-06-28各项目动态日报生成的横向对比分析报告。

---

### 跨项目横向对比分析报告 (2026-06-28)

#### 1. 今日横向概览

今日各项目活动量呈现明显分化。**OpenClaw** 社区活跃度极高（500条Issue、500条PR更新），但核心进展缓慢，关闭率低，社区讨论聚焦于会话状态持久性和生态治理等长期顽疾。**NanoBot** 同样活跃但效率更高，大量Bug（特别是会话安全和流处理）被快速修复，社区关注点从“超轻量”定位转向实际体验与Agent可靠性。**Zeroclaw** 活动量中等，社区讨论呈现明显的“架构加固”特征，供应链安全与Wasm运行时等RFC获得深入探讨。**PicoClaw** 活动量最小，以常规维护和少量Bug修复为主，暂无重大社区讨论热点。

#### 2. 各项目活跃度对比

| 项目 | 今日Issue更新数 | 今日PR更新数 | 今日Release | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 0 | 高活跃，但关闭率低（Issue关闭率约2.8%），讨论密度高 |
| **NanoBot** | 8 | 47 | 0 | 高活跃，但Issue/PR关闭率高（87.5% / 61.7%），修复效率高 |
| **Zeroclaw** | 46 | 50 | 0 | 中活跃，以RFC讨论和架构性工作为主 |
| **PicoClaw** | 3 | 7 | 0 | 低活跃，日常维护和小型修复 |

**事实性备注**:
- OpenClaw的数据为“更新数”，而非“新增数”，表明大量现存的Issue和PR被重新讨论或更新状态。
- NanoBot的Bug修复（如#4057、#4063）与安全修复（#4521）从提出到提交修复PR的响应周期较短。
- Zeroclaw的#8177和#8135等RFC收到了社区深度参与（10条以上评论），反映了社区对架构议题的关注。

#### 3. OpenClaw 与同类对照

- **活动量与关注度**: OpenClaw 的议题讨论量远超其他项目（500条 vs 8-46条），但其Issue和PR的关闭率（2.8%，10.6%）显著低于NanoBot（87.5%，61.7%），表明其社区生态更为庞大但也更混乱，核心决策和代码合入效率低下。
- **技术重点差异**: OpenClaw 今日重点集中在**长期存在的系统架构问题**，如会话状态持久化、文件名编码处理、内存泄漏（OOM）等。相比之下，NanoBot 和 Zeroclaw 则更多关注**短期可修复的Bug**（如特定提供商的API兼容性、路径错误）和**前瞻性架构设计**（如Wasm、供应链安全）。
- **社区讨论面**: OpenClaw 的社区讨论充满了对**承诺与现实落差**的挫败感（如ClawHub、编码Agent回归），反映了其作为一个成熟但陷入“遗留债务”问题的项目现状。NanoBot 和 Zeroclaw 的社区则显得更加正面，讨论集中在安全、功能增强和架构改进上。

#### 4. 共同出现的技术方向

今日数据显示，以下技术方向被多个项目社区共同关注：

- **安全强化**:
    - **OpenClaw**: 用户提出敏感数据脱敏、不可绕过的出站策略等功能请求。
    - **NanoBot**: 报告并修复了shell命令绕过和敏感信息泄露的安全漏洞。
    - **Zeroclaw**: 深度讨论了供应链安全签名与硬件PGP支持的RFC。
    - **共同诉求**: 开发者对AI Agent系统的安全边界、密钥管理和代码供应链安全性的关注度正在提升。

- **AI Agent可靠性**:
    - **OpenClaw**: 用户严重抱怨编码Agent完全失效和子代理“假完成”问题。
    - **NanoBot**: 社区PR明确提出需要Agent提供者恢复机制和验证检查点，以应对提供者短暂错误。
    - **共同诉求**: Agent在复杂或高负载场景下的执行可靠性、状态同步和故障恢复能力是用户的共同痛点。

- **社区生态与治理**:
    - **OpenClaw**: 用户对ClawHub技能市场“承诺与现实的落差”感到失望。
    - **Zeroclaw**: 通过RFC积极讨论插件权限模型、Wasm-first插件运行时等生态建设问题。
    - **共同诉求**: 项目方如何通过清晰的文档、标准化的SDK和有效的治理机制来赋能社区开发者，是跨越特定生态问题的普遍挑战。

#### 5. 差异化定位分析

基于今日数据，各项目的差异化特征如下：

- **OpenClaw**: **全能型平台，但背负技术债务**。功能覆盖最广（编程、聊天、渠道），用户基数最大，但也因此积累了最多的遗留Bug和未解决的长期架构问题。其社区讨论已出现对核心功能的信任危机。

- **NanoBot**: **轻量级个人助手，迭代快速**。项目在修复已报告Bug上表现高效，社区反馈良好。其“超轻量”宣称虽因Node.js依赖存在争议，但整体开发节奏聚焦于提升用户体验（WebUI修复）和Agent基本能力（ask_clarification工具）。

- **Zeroclaw**: **企业级安全与架构探索者**。其社区讨论和RFC明显侧重于供应链安全、Wasm沙箱、权限模型等更底层的架构和安全议题，表明其目标用户群对安全性和基础设施的健壮性要求更高。

- **PicoClaw**: **嵌入式/轻量终端，维护为主**。项目活动量最低，功能侧重特定渠道（Telegram、Matrix）的兼容性修复。其角色更偏向于完整版（OpenClaw）在资源受限环境下的一个分支或补充。

#### 6. 社区活跃度记录

- **第一梯队（极活跃）**: **OpenClaw**（议题/讨论数量级远超其他，但并非健康的高效活跃）。
- **第二梯队（非常活跃）**: **NanoBot**、**Zeroclaw**（皆有中等数量的讨论与开发活动，且进展可见）。
- **第三梯队（一般活跃）**: **PicoClaw**（活动量较低，以维护性修复为主）。

#### 7. 有证据支撑的观察

1.  **“基础稳定性”是跨项目的核心痛点**：多个项目都出现了影响核心功能的Bug。OpenClaw的编码Agent失效（#62505）和子代理假完成（#58450）、NanoBot的WebUI流式卡死（#4500）和会话冲突（#4057），均直接指向基础执行和状态管理的可靠性不足。
2.  **“安全”正从功能需求升级为架构要求**：今日，Zeroclaw 和 NanoBot 均报告或讨论了高优先级的修复和RFC。OpenClaw社区也提出了安全相关的功能请求。这表明社区对AI Agent安全性的关注已不再满足于被动修补，而是开始要求从架构层面进行设计（如供应链签名、Wasm沙箱、强制性策略）。
3.  **项目生命周期分化信号显现**：OpenClaw呈现 **“高存量、低吞吐”** 的特征，大量议题积压，修复效率低下，社区情绪出现挫败感。与之对比，NanoBot和Zeroclaw则处于 **“高流迭代”** 或 **“架构加固”** 阶段，社区讨论正面且具有前瞻性。这种分化可能预示着未来社区活跃度的迁移。
4.  **“通用框架承诺”与“实际体验落差”是共性挑战**：OpenClaw的ClawHub、编码Agent承诺与实现不符，NanoBot“超轻量”宣称与Node.js依赖矛盾，Zeroclaw的默认32k上下文预算无法覆盖实际工作负载（#5808），都指向了项目在设定用户期望与实际交付能力之间存在的共性差距。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的NanoBot GitHub数据生成的2026-06-28项目动态日报。

---

### NanoBot 项目日报 (2026-06-28)

**分析师**: AI 智能体与个人 AI 助手领域开源项目分析师
**数据来源**: [NanoBot GitHub 仓库](https://github.com/HKUDS/nanobot)

---

#### 1. 今日活动概览

过去24小时内，NanoBot 项目活动非常活跃。Issues 方面有8条更新，其中大部分（7条）已关闭，仅剩1条活跃讨论。Pull Requests (PR) 方面更新高达47条，其中29条已被合并或关闭，18条仍在等待审查合并。值得注意的是，昨日没有新版本发布。整体社区侧重于修复先前报告的 Bug，特别是流处理、会话安全和 AI 提供商兼容性问题，同时也有多重安全漏洞被标记和修复。

#### 2. 版本发布

无新版本发布。

#### 3. 项目进展

今日有多个重要的 Bug 修复 PR 被合并，以下是关键进展：

- **会话与流处理稳定性修复**: 开发人员 [@axelray-dev](https://github.com/axelray-dev) 合并了三个关键的 Bug 修复：
    - `fix: prevent session key collision on disk (#4057)` (PR [#4533](https://github.com/HKUDS/nanobot/pull/4533)): 修复了因文件名无害化处理导致的不同会话 ID 在磁盘上发生冲突的问题。
    - `fix: include _stream_id in stream delta coalescing key (#4063)` (PR [#4531](https://github.com/HKUDS/nanobot/pull/4531)): 修复了流式传输过程中，不同流的数据块可能被错误合并的问题。
    - `fix: deduplicate tool call IDs in non-stream parser (#4059)` (PR [#4530](https://github.com/HKUDS/nanobot/pull/4530)): 确保非流式解析器与流式解析器一样，能对重复的`tool_call_id`进行去重。

- **AI 提供商兼容性修复**:
    - `fix: validate content block type in Anthropic assistant blocks (#4060)` (PR [#4532](https://github.com/HKUDS/nanobot/pull/4532)): 确保发送给 Anthropic API 的内容块始终携带必需的`type`字段。

- **功能增强与测试改进**:
    - `feat(cron): add silent mode and lock_recipient for scheduled jobs` (PR [#4225](https://github.com/HKUDS/nanobot/pull/4225)): 为定时任务增加了“静默模式”和“锁定接收者”功能，使后台监控任务更灵活。
    - `test: fix flaky test_keeps_n_most_recent due to identical mtimes` (PR [#4523](https://github.com/HKUDS/nanobot/pull/4523)): 修复了一个因文件系统时间戳精度不够导致的测试不稳定性问题。

#### 4. 社区热点

- **#4500 WebUI 流式处理卡死问题**: 此 Issue 是昨日社区讨论的热点，获得了2条评论。用户 [@zpljd258](https://github.com/zpljd258) 报告了 WebUI 在机器人自重启后页面卡在“处理中”状态，且停止按钮失效的 Bug。该问题已引起开发者重视，对应的修复 PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) 已经提交，体现了社区发现问题、开发者快速响应的良性循环。

- **#660 “超轻量”宣称与依赖的矛盾**: 尽管该 Issue 已关闭，但作为最早的“feature request”之一，它获得了14条评论和5个 👍。用户 [@besoeasy](https://github.com/besoeasy) 的核心诉求是项目自称为“超轻量”，但实际依赖了 Node.js，这引发了对项目定位和文档准确性的讨论。此 Issue 的活跃记录反映出社区对项目资源占用和简洁性的高度关注。

#### 5. Bug 与稳定性

昨日新增和解决的 Bug 主要集中在安全、会话与流处理、以及 AI 提供商兼容性方面。

**高严重性 (安全)**:
- **#4521 (已关闭)**: 报告了 `exec.allowPatterns` 配置存在 shell 链式命令绕过漏洞，允许执行未授权的命令。
    - **状态**: 已关闭。有对应修复 PR [#4562](https://github.com/HKUDS/nanobot/pull/4562) 正在待合并状态，该 PR 旨在对命令的每个段进行校验。
- **#4518 (已关闭)**: 报告了 `exec` 工具执行命令时，因默认使用登录shell，可能从用户的 shell 启动文件中泄露敏感信息（如密钥）。
    - **状态**: 已关闭。

**中高严重性 (功能性)**:
- **#4500 (开放中)**: WebUI 在 WebSocket 重连后，界面状态与服务器状态不同步，导致“流式传输卡死”和“停止按钮失效”。
    - **状态**: 已提出修复 PR [#4565](https://github.com/HKUDS/nanobot/pull/4565)，待合并。
- **#4063 (已关闭)**: 流式数据合并时未使用 `_stream_id` 作为键，导致同一聊天内的不同流被错误混合。
    - **状态**: 已修复 (PR [#4531](https://github.com/HKUDS/nanobot/pull/4531))。
- **#4057 (已关闭)**: 会话文件存储时，文件名处理逻辑导致不同会话 ID 可能映射到同一文件。
    - **状态**: 已修复 (PR [#4533](https://github.com/HKUDS/nanobot/pull/4533))。

**低严重性 (代码质量/测试)**:
- **#4060 (已关闭)**: Anthropic 提供商的响应内容块缺少必需的类型字段。
    - **状态**: 已修复 (PR [#4532](https://github.com/HKUDS/nanobot/pull/4532))。
- **#4059 (已关闭)**: 非流式解析器未对重复的 `tool_call_id` 进行去重。
    - **状态**: 已修复 (PR [#4530](https://github.com/HKUDS/nanobot/pull/4530))。

#### 6. 功能请求归类

昨日新增和活跃的功能请求主要集中在以下方面：

- **Web前端体验**: PR [#4565](https://github.com/HKUDS/nanobot/pull/4565) 旨在修复 WebUI 重连后的流式状态问题，提升用户交互体验。
- **Web搜索集成**: PR [#4406](https://github.com/HKUDS/nanobot/pull/4406) 请求增加 [Serper.dev](http://serper.dev) 作为新的网络搜索后端提供商。
- **Agent 能力增强**:
    - PR [#4527](https://github.com/HKUDS/nanobot/pull/4527) 请求增加一个内置的 `ask_clarification` 工具，让 AI 能主动向用户提问以澄清需求。
    - PR [#4534](https://github.com/HKUDS/nanobot/pull/4534) 提出了为 Agent 循环增加验证检查点和提供者恢复机制的通用可靠性层。
- **记忆与技能管理**: PR [#4554](https://github.com/HKUDS/nanobot/pull/4554) 旨在为“Dream”模块添加写保护，防止创建重复的技能；PR [#4556](https://github.com/HKUDS/nanobot/pull/4556) 则为 Dream 的整合过程增加模型覆盖功能。
- **会话个性化**: PR [#4555](https://github.com/HKUDS/nanobot/pull/4555) 提出了为每个会话单独设置模型预设（model preset），实现对话级别的模型选择。

#### 7. 用户反馈摘要

从昨日的 Issues 和 PR 评论中可以提炼出以下用户反馈：

- **痛点: “超轻量”与现实的矛盾**: Issue #660 虽然已关闭，但其 14 条评论和 5 个 👍 代表了部分用户对项目定位的困惑。用户认为 Node.js 依赖与“超轻量”描述不符，希望项目能更清晰地说明其技术栈和资源需求。
- **痛点: WebUI 不稳定**: Issue #4500 反映了 WebUI 在后端服务重启后出现的卡死和操作无响应问题，是影响用户实际使用体验的明显痛点。
- **反馈: 感谢安全修复**: 两个安全相关 Issue (#4521, #4518) 在报告后迅速被关闭，虽然没有直接的感激评论，但快速响应和修复反映出项目对安全问题的重视，并间接给社区以信心。
- **反馈: 关注 Agent 的可靠性与“废话”问题**: PR #4534 的摘要中明确提到，其动机是 Agent 在遇到提供者暂时性错误时容易丢失任务，并且在弱验证后停止，或“花费额外回合阅读自己持久化的输出”。这反映了用户对 Agent 执行可靠性和执行效率的不满，希望 Agent 能更智能、更少冗余操作。

#### 8. 待处理积压

以下是一些可能需要维护团队关注的长期未响应或重要的待办项：

- **WebUI 流式处理修复 (PR [#4565](https://github.com/HKUDS/nanobot/pull/4565))**: 此 PR 直接响应了 Issue #4500 中报告的 WebUI 卡死问题，对用户体验影响较大，建议优先审查和合并。
- **安全漏洞修复 (PR [#4562](https://github.com/HKUDS/nanobot/pull/4562))**: 此 PR 尝试修复 Issue #4521 中报告的 shell 链式命令绕过漏洞，属于高优先级的安全修复，应尽快审查。
- **多项功能增强 PRs**: 如#4555 (per-session model preset)、#4527 (ask_clarification tool)、#4534 (agent reliability) 等 PR，虽然不在 P0 级别，但反映了社区对 Agent 能力和个性化配置的强烈需求，建议维护者在下一个开发周期中讨论其优先级。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目 GitHub 数据生成的 2026-06-28 项目动态日报。

---

# Zeroclaw 项目日报 2026-06-28

## 今日活动概览

项目今日活跃度极高，共产生 46 条 Issue 更新和 50 条 PR 更新。社区讨论与开发主要集中在安全增强、基础设施优化和新功能探索三大方向。虽然没有新版本发布，但多项针对供应链安全、Wasm 插件运行时及运维自动化（如 SOP）的 RFC 和 PR 取得显著进展，表明项目正进入深度架构加固阶段。

## 版本发布

今日无新版本发布。

## 项目进展

今日合并/关闭的 PR 主要为常规维护和修复。值得关注的部分进展包括：

- **依赖清理与 CI 修复**：PR [#8225](https://github.com/zeroclaw-labs/zeroclaw/pull/8225) 合并了 `lru` 和 `strum` 库的版本，精简了依赖锁文件。PR [#8344](https://github.com/zeroclaw-labs/zeroclaw/pull/8344) 修复了 Docs Pages 部署流程，将稳定版标签检查延迟至部署时，防止因标签未创建导致的构建失败。
- **标志性功能推进**：PR [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) 开始处理多智能体场景下技能（skills）安装/列表/移除逻辑感知技能包（bundle）的问题，以解决运行时路径不匹配的 Bug。

## 社区热点

- **#8177 RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)）
  - **动态**：该 RFC 获得 10 条评论，是今日讨论最热烈的话题。它提出为容器镜像和 Release 二进制文件增加供应链签名和 SLSA 溯源支持。
  - **背后诉求**：社区对软件供应链安全的关注度极高。开发者希望确保从构建到分发的整个链路都是可信的，防止篡改和恶意注入。

- **#8371 ~ #8378 系列 Issue（如 [#8372](https://github.com/zeroclaw-labs/zeroclaw/issues/8372)）**
  - **动态**：由用户 `@arun-raze19` 提交的一系列关于 `[002-dms-gst-extraction]` 的 Issue 在短时间内创建并关闭。每个 Issue 描述了实现特定用户故事的详细任务。
  - **背后诉求**：这展示了团队采用“任务驱动”的开发模式，将大型功能拆解为可执行的 Issue，并快速推进。这可能是一个新的功能模块（GST 数据提取）的立项与落地。

## Bug 与稳定性

以下为今日报告的较为严重的 Bug，按严重程度排列：

- **S1 - 工作流阻塞**：
  - **#5808** [OPEN]: 默认 32k 上下文预算在首次迭代时即被系统提示和工具定义超出，导致无限期的预裁剪。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5808))
  - **#6434** [CLOSED]: 在`[autonomy] level = "full"` 配置下，shell 工具调用被拒绝。该 Bug 已于今日关闭，表明已有修复。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6434))

- **S2 - 行为降级**：
  - **#6360** [OPEN]: 在 Telegram 频道中提示缓存（Prompt Caching）不生效，导致每次请求都须全量重新处理。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6360))
  - **#8047** [CLOSED]: `ReadSkillTool` 在错误的数据目录查找技能文件。该 Bug 也于今日关闭。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8047))

## 功能请求归类

今日用户提出的新功能请求主要围绕以下主题：

- **插件与安全模型**：
  - **#8398** RFC: 提出了关于插件权限、配置和机密模型（Permission Model）的开放性问题。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8398))
  - **#8135** RFC: 提出 Wasm-first 插件运行时作为默认选项，并强调能力强制和签名分发。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8135))

- **通道与集成能力**：
  - **#8379** 为 WhatsApp Web 群聊添加选择性的被动上下文支持。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8379))

- **运维与管理**：
  - **#8303** RFC: 提出“目标模式（Goal mode）”，支持有边界的自主会话工作。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303))
  - **#8397** 提议在 CLI 和 `cron_add/cron_update` 工具中暴露每个定时任务是否使用内存的标志。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8397))
  - **#8138** 提议在 OpenRouter 提供商配置中支持模型回退数组。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8138))

- **架构优化**：
  - **#8396** RFC: 提出“先线协议后提供商模型”，将 `wire_api` 作为主要组织轴线。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8396))

## 用户反馈摘要

- **配置复杂度与默认值问题**：用户 `@JordanTheJet` 在 Issue [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) 中报告，默认的 32k 上下文预算完全不适应复杂的系统提示场景，导致功能上几乎无法正常工作。这反映了默认配置未能考虑到实际复杂Agent工作负载的情况。
- **对安全性和架构升级的期待**：用户在 RFC [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) 和 [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) 中的深入讨论表明，社区非常重视供应链安全和运行时架构的现代化（如Wasm）。他们希望项目能够建立业界最佳实践。

## 待处理积压

以下为一些长期未响应或重要度较高的待处理项，提醒维护者关注：

- **PR #5187** [feat(ci): add arm64 docker target] - 此 PR 自 2026-04-02 开启，已标记为 `needs-author-action`，但为社区期待的 arm64 支持铺平道路。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5187))
- **PR #6966** [feat(obs): capture prompt/completion content on llm.call spans] - 自 2026-05-27 开启，已被标记为 `needs-author-action` 和 `stale-candidate`。此功能对于OpenTelemetry下的可观测性至关重要，能够捕捉完整的提示/完成内容。 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6966))

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-28

## 1. 今日活动概览

过去 24 小时内，PicoClaw 仓库共更新 **3 条 Issues**（1 条新开、2 条关闭）和 **7 条 Pull Requests**（5 条待处理、2 条关闭）。无新版本发布。社区最活跃的讨论集中在已关闭的 Windows 路径兼容性 Bug（#2472，7 条评论）。新开放的 Issue #3194 报告了 Matrix 通道加密消息无法处理的潜在安全配置问题，目前尚无维护者回应。PR 方面，昨天有 2 条 PR 被关闭（#3048 MCP 参数解析修复、#2937 Agent 协作功能），另有 5 条新 PR 提交，涵盖新通道支持、代码清理与国际化同步。

## 2. 版本发布

无

## 3. 项目进展

- **[CLOSED] #3048 — fix(mcp): reject unknown pre-positional flags in add**
  修复了 `mcp add` 命令在接收 `--no-color` 等根级持久标志时被错误解析为位置参数的问题。该 PR 被关闭，但未明确标注是否已合并。
  [链接](https://github.com/sipeed/picoclaw/pull/3048)

- **[CLOSED] #2937 — Feat/agent collaboration**
  引入了 Agent 间协作总线，包含独立邮箱、协作线程、结构化消息信封及权限感知路由。该 PR 已被关闭，可能已合并到主分支。
  [链接](https://github.com/sipeed/picoclaw/pull/2937)

## 4. 社区热点

- **#2472 [CLOSED] — [BUG] list_dir 在 Windows 上因路径分隔符问题返回 "invalid argument"**
  该 Issue 在过去 24 小时内获得最多关注（7 条评论、1 个👍）。用户报告 `list_dir` 函数将 Windows 反斜杠直接传入 `os.Root` 导致失败。尽管 Issue 已于 6 月 27 日关闭，但评论区可能包含修复讨论或用户反馈。
  [链接](https://github.com/sipeed/picoclaw/issues/2472)

- **其他 Issues/PRs 的评论数均为 2 或 0，无特别的讨论热点。**

## 5. Bug 与稳定性

- **[OPEN] #3194 — [BUG] Received encrypted message but crypto is not enabled** (严重程度: 中)
  用户报告在 Matrix 通道上收到加密消息时，PicoClaw 日志显示“crypto is not enabled”。根据描述，该行为可能导致消息无法解密或处理，影响使用加密功能的用户。目前无维护者回复，也无关联 Fix PR。
  [链接](https://github.com/sipeed/picoclaw/issues/3194)

- **[CLOSED] #2472 — Windows 路径分隔符 Bug**（详见上文，已关闭）
  该 Bug 曾在 v0.2.6 版本中存在，现已标记为关闭，推测已在当前代码中修复。

## 6. 功能请求归类

- **[CLOSED] #3114 — [Future Request] Telegram 渠道按对话类型权限分级控制**
  用户请求为 Telegram 通道增加基于对话类型（私聊/群组/频道）的权限控制，以避免群组成员执行危险操作。该 Issue 已于 6 月 27 日关闭，标记为 stale，但未说明是否计划实现。
  [链接](https://github.com/sipeed/picoclaw/issues/3114)

- **[OPEN] #3193 — Added simplex channel type** (类型: 新功能)
  新增一个 `simplex` 通道类型（具体用途待 PR 详细描述）。尚未合并，需要维护者 review。
  [链接](https://github.com/sipeed/picoclaw/pull/3193)

## 7. 用户反馈摘要

- **Windows 路径问题（#2472）**：用户 `@ut2or1` 在 Windows 环境下使用 `list_dir` 时遭遇“invalid argument”，定位为 `os.Root` 对路径分隔符的严格要求。该问题已关闭，但反映了跨平台文件路径处理仍需更统一的转换逻辑。
- **Matrix 加密消息（#3194）**：用户 `@Damian-o2` 报告收到加密消息但 PicoClaw 提示 crypto 未启用，表明在加密配置缺失或未启用时，系统未能优雅降级或给出清晰错误提示。用户对期望行为的描述在 Issue 中尚不完整。
- **Telegram 权限控制（#3114）**：用户 `@v2up-32mb` 提出 Telegram 通道缺少按对话类型的权限边界，若将机器人加入群组，可能导致未授权执行 shell 命令或文件操作。该反馈暗示当前安全模型需更细粒度的策略。

## 8. 待处理积压

- **长期未响应的 Issue**：今日无超过 2 周无维护者回应的开放 Issues。新 Issue #3194 刚创建，但尚未有评论，建议维护者尽快确认问题并给出初步回应。
- **待合并的 PR**：昨天提交的 5 条 PR（#3193、#3189、#3192、#3191、#3190）均为新开且无维护者评论，其中 #3193 新通道功能和 #3189 LINE 通道修复可能具有较高优先级，建议 review。

</details>