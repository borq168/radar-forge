# OpenClaw 生态日报 2026-06-17

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-17 00:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，以下是为 OpenClaw 项目生成的 2026-06-17 项目动态日报。

***

# OpenClaw 项目动态日报 | 2026-06-17

## 今日活动概览

过去 24 小时内，OpenClaw 项目活动极为活跃。共产生 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 466 条，待合并 PR 362 条。项目发布了两个新版本（v2026.6.8 及其 beta 版），重点改进了 Telegram 和 WhatsApp 渠道的消息渲染稳定性。社区对 Linux/Windows 客户端、子代理可靠性及编码 Agent 回归问题的讨论热度最高。

## 版本发布

今日发布了两个版本，均为 v2026.6.8（正式版与 beta.2 版），其核心更新内容一致。

- **v2026.6.8 / v2026.6.8-beta.2**
  - **核心亮点**：增强了渠道交付的健壮性。
    - **Telegram**：现在能够正确渲染包含表格、列表、可展开引用块、保留有意换行的结构化文本，并支持基于 CLI 的回复。
    - **WhatsApp**：现在能够正确遵循配置的 ACP 绑定。
  - **相关 PR**：#92679, #931
  - **下载链接**: https://github.com/openclaw/openclaw/releases

## 项目进展

以下为今日被合并或关闭的重要 Pull Request，它们推进了关键功能的修复与完善。

- **[#93773] fix(ui): scope Skill Workshop proposals to selected agent**
  - **状态**：已合并
  - **摘要**：修复了控制 UI 中“技能工坊”提案系统，使其操作范围限制在用户当前选中的 Agent，而不是作用于整个网关默认设置。解决了 #93760。
  - **链接**: https://github.com/openclaw/openclaw/pull/93773
- **[#93779] fix(webchat): skip textarea resize during IME composition to eliminate typing lag**
  - **状态**：已合并
  - **摘要**：修复了在输入法（IME）组合输入过程中导致的输入延迟问题。通过跳过 IME 合成阶段的文本框自动调整高度操作，显著提升了中文、日文等用户的输入流畅度。解决了 #90800。
  - **链接**: https://github.com/openclaw/openclaw/pull/93779
- **[#68936] Autofix: add PR review autofix pipeline + Windows daemon**
  - **状态**：已关闭（内容提及）
  - **摘要**：该 PR 旨在增加一个基于 Claude Agent SDK 的自动修复流水线，以自动处理 PR 审查意见，并包含一个 Windows 后台守护进程。今日被关闭，未显示合并后后续动作。

## 社区热点

以下 Issue 和 PR 在今日引发了最广泛的讨论，反映了社区的核心关切。

1. **Linux/Windows 桌面客户端需求**
   - **[#75] Linux/Windows Clawdbot Apps**（评论：109，👍：79）
   - **分析**：这是项目历史上最活跃的 Issue 之一，尽管创建于年初，今日仍有大量讨论。用户强烈希望项目能提供与 macOS 和 iOS/Android 功能相近的 Linux 和 Windows 原生客户端，显示出社区对跨平台支持的高度渴求。
   - **链接**: https://github.com/openclaw/openclaw/issues/75

2. **子代理任务完成结果丢失**
   - **[#44925] [Bug]: Subagent completion silently lost**（评论：19，👍：1）
   - **分析**：用户报告了一个严重的可靠性问题：子代理在多种故障模式下（如超时、通知失败）会静默丢失结果，没有重试、没有通知。这影响了多 Agent 协作的可靠性，是当前系统稳定性的一个关键痛点。
   - **链接**: https://github.com/openclaw/openclaw/issues/44925
   - **已有修复 PR**: #67777 (开放中，专注于修复直接交付、超时场景下的丢失问题)

3. **编码 Agent 完全失效（回归）**
   - **[#62505] [Bug]: Coding Agent never completes anything**（评论：14，👍：1）
   - **分析**：这是一个严重的回归问题，用户报告之前在 2026.4.2 版本上工作的编码 Agent 在更新后完全停止工作，仅产生模糊的状态更新。这直接影响核心用户的价值产出，引发了大量关注和不满。
   - **链接**: https://github.com/openclaw/openclaw/issues/62505

## Bug 与稳定性

今日报告了多个严重 Bug，按严重程度排列如下。其中部分已有修复 PR 与之关联。

- **P0 (最高)**
  - **会话/转录 SQLite 迁移追踪**：通过访问器 seam 追踪核心会话/转录运行时状态到 SQLite 的迁移。**已有 PR**? (#88838)
- **P1 (高)**
  - **[回归] 编码 Agent 无法完成任何工作**：从 2026.4.2 起出现，导致编码自动化完全失效。**已有修复 PR**? (#62505)
  - **子代理完成静默丢失**：在超时、清理等情况下结果丢失。**已有修复 PR**: #67777
  - **信号守护进程 SIGUSR1 重启竞争条件**：导致孤儿进程和发送失败。**已有修复 PR**? (#22676)
  - **Steer 模式无法在回合中注入消息**：`messages.queue.mode: "steer"` 在会话中不起作用。**已有修复 PR**? (#48003)
  - **写入工具缺少追加模式**：导致隔离的 cron 会话覆盖共享文件。**已有修复 PR**? (#40001)
  - **Gateway 内存泄漏**：4 天内内存从 389MB 增长至 14.7GB。**已有修复 PR**? (#54155)
- **P2 (中)**
  - **Agent 承诺后续行动但未执行**：Agent 声称会进行后续操作，但并未实际启动任何任务。**已有修复 PR**? (#58450)
  - **敏感数据明文存储**：配置文件和日志中的 API 密钥、Token 未脱敏。 (#64046)
  - **控制 UI 原始模式禁用**：自 2026.3.31 起，配置编辑器无法使用原始模式。**已有修复 PR**: #59336

## 功能请求归类

用户今日提出了多项新功能需求，主要聚焦于安全性、可观测性和配置灵活性。

- **安全与审批**
  - **[#78308] MCP 工具调用的渠道审批**：允许 MCP 工具调用通过 `/approve <id>` 渠道进行审批，防止未授权的状态变更。
  - **[#39604] 允许私有网络访问**：为 `web_fetch` 工具增加 `allowPrivateNetwork` 配置，以便在明确授权下访问内网资源。
  - **[#64046] 敏感数据脱敏**：希望项目能对配置文件、日志和 UI 中的 API Key、Token 等敏感信息进行脱敏处理。
  - **[#54531] 强制回复原始渠道**：确保在 Telegram/Discord/WhatsApp 等渠道发起的对话，回复能被正确发送回该渠道。
- **可观测性与持久化**
  - **[#52640] 持久化任务状态面板**：为长时间运行的任务提供一个持久化的状态显示，当前在 Discord 上的打字提示等反馈不够可靠。
  - **[#11665] Webhook 会话多轮对话支持**：修复 Webhook hooks 会话无法基于 `sessionKey` 维持多轮对话的缺陷。
- **个性化与隔离**
  - **[#63829] 每个 Agent 的独立知识库**：支持为多 Agent 设置中的每个 Agent 配置独立的 `memory-wiki`，避免知识共享。
  - **[#66252] 每个 Agent 的 TTS/STT 配置**：允许为不同 Agent 配置不同的语音、语言或 TTS/STT 提供商。

## 用户反馈摘要

本日社区反馈揭示了用户在使用 OpenClaw 过程中的几个核心问题：

- **对核心功能回归的不满**：多位用户报告了编码 Agent、会话上下文等核心功能在新版本中出现倒退，特别是 **#62505** (编码 Agent 完全失效) 的评论表达了用户对自动化工作流中断的强烈不满。
- **对系统稳定性和可靠性的担忧**：大量 Issue 描述了子代理结果丢失 (**#44925**)、会话上下文混淆 (**#32296**)、内存泄漏 (**#54155**) 和守护进程崩溃 (**#22676**) 等问题，表明系统的健壮性是目前用户最大的痛点。
- **对中国区用户的直接影响**：中文用户报告了硬编码工作路径 (**#51429**)、环境变量导致的目录嵌套 (**#45765**) 以及敏感数据未脱敏 (**#64046**) 等问题，影响了其使用体验和安全性。
- **对配置和迁移的困惑**：配置文件因钩子函数注入 `undefined` key 导致原始模式失效 (**#59330**)，以及 `OPENCLAW_HOME` 环境变量处理导致目录嵌套 (**#45765**)，反映出配置系统的健壮性和易理解性有待提升。

## 待处理积压

以下为长时间未关闭且具有重要影响的 Issue 或 PR，建议项目维护者予以关注。

- **长期未解决的关键 Issue**
  - **[#75] Linux/Windows Clawdbot Apps**：已开放近 6 个月，评论超 100 条，是社区呼声最高的功能需求，但目前仍缺乏实质进展。
  - **[#32296] [Bug]: Agent replies to previous message instead of current message**：会话上下文混乱的核心问题，今日显示为“已关闭”，但需确认其修复方案是否已彻底解决，避免再次回归。
- **长时间等待响应的 PR**
  - **[#50520] fix(outbound): strip inbound metadata before delivery**：该 PR 旨在修复 LLM 回复中携带内部元数据泄露给用户的安全问题，已开放 3 个月，涉及安全边界，但状态仍为 `triage: needs-real-behavior-proof`。
  - **[#39065] Security: add configurable unpaired DM responses**：旨在为未配对私信提供可配置的响应策略，已开放超 3 个月，对安全性有提升，但目前状态为等待作者响应。
  - **大量标记为 `status: ⏳ waiting on author` 的 P1/P2 级别 PR**：包括 `#60212`、`#85505`、`#59336` 等多个涉及兼容性、安全性或 Session 状态的关键 PR 均停滞在等待作者回应阶段，需跟进推动。

---

## 横向生态对比

# 开源 AI 智能体项目横向对比分析报告 | 2026-06-17

## 1. 今日横向概览

- **OpenClaw** 在四个项目中活动量最大（500+ Issue/PR 更新），并发布 v2026.6.8 正式版与 beta.2 版，重点修复 Telegram/WhatsApp 渠道渲染及输入法延迟问题；社区焦点集中于跨平台客户端缺失、子代理结果丢失和编码 Agent 回归。
- **NanoBot** 保持中高活跃度（9 Issues, 23 PRs），无版本发布，但合并了多项稳定性修复（安装器 macOS 兼容、空闲自动压缩、Token 估算等），社区关注安装脚本兼容性及 Dream 功能异常。
- **Zeroclaw** 活跃度较高（35 Issues, 37 PRs），未发布新版本；社区围绕 v0.8.0 预编译包缺少通道功能、文档质量差、MCP 工具在部分模型上不可用等严重回归问题进行密集讨论。
- **PicoClaw** 活跃度中等（15 Issues, 16 PRs），发布 nightly 构建；当天接收 13 个安全漏洞报告（SSRF、授权绕过等），且无对应修复 PR；同时修复了 Telegram 论坛话题、上下文压缩配置等关键 Bug。

## 2. 各项目活跃度对比

| 项目 | 当日 Issue 更新数 | 当日 PR 更新数 | 版本发布 | 事实性备注 |
|------|------------------|----------------|----------|-----------|
| OpenClaw | 500 （含新开/活跃466） | 500 （待合并362） | v2026.6.8 及 beta.2 | 数据量远高于其他项目，可能包含自动化或聚合统计；社区讨论最活跃 |
| NanoBot | 9 （新开5） | 23 （合并/关闭14） | 无 | 重点在 Bug 修复与体验优化，无重大功能发布 |
| Zeroclaw | 35 | 37 | 无 | 社区集中讨论回归问题，无版本发布 |
| PicoClaw | 15 | 16 | v0.2.9-nightly | 安全报告批量涌入，维护者尚未回应 |

## 3. OpenClaw 与同类对照

- **活动量差异**：OpenClaw 今日 Issue/PR 更新数量为 NanoBot、Zeroclaw、PicoClaw 的 10–50 倍，但其 500 条数据可能包含大量自动标签或跟踪更新；即使排除噪音，其社区讨论密度仍远高于其他项目。
- **技术重点差异**：OpenClaw 聚焦于**渠道交付健壮性**（Telegram/WhatsApp 渲染修复、WebSocket 稳定性）和**编码 Agent 回归**（Issue #62505）；NanoBot 偏重安装器兼容性（#4368）和 Dream 功能逻辑（#4242）；Zeroclaw 集中在**多模型工具兼容**（#7756）、**预编译包完整性**（#7787）和**文档缺失**（#7758）；PicoClaw 则因安全研究员批量报告而面临安全体系审查压力。
- **社区讨论面差异**：OpenClaw 社区讨论面最广，包含跨平台客户端（#75 长尾需求）、子代理可靠性、内存泄漏、配置原始模式失效等。Zeroclaw 社区则对 v0.8.0 的回归和文档质量表现出强烈不满（标题直白）。NanoBot 和 PicoClaw 讨论相对集中。

## 4. 共同出现的技术方向

| 方向 | 涉及项目 | 具体诉求 / 问题 |
|------|----------|----------------|
| **跨平台/安装兼容性** | OpenClaw, NanoBot | OpenClaw 社区高频要求 Linux/Windows 原生客户端（#75）；NanoBot 用户报告 Docker/Perl 安装脚本失败（#4360, #4368） |
| **子代理/任务可靠性** | OpenClaw, Zeroclaw | OpenClaw 子代理结果静默丢失（#44925）；Zeroclaw 直接 Agent 回合忽略运行时约束（#7796） |
| **安全与权限控制** | PicoClaw, Zeroclaw | PicoClaw 今日收到13个安全漏洞报告（SSRF、授权绕过等）；Zeroclaw 无直接安全报告，但 MCP 工具不可用可能隐含安全边界问题 |
| **文档与配置易用性** | Zeroclaw, OpenClaw | Zeroclaw 用户直批“文档太烂”（#7758）；OpenClaw 配置原始模式因钩子注入 undefined 失效（#59330） |
| **模型兼容性 / 回归** | Zeroclaw, OpenClaw | Zeroclaw MCP 工具在 OpenAI Responses/Anthropic 模型上不可用（#7756）；OpenClaw 编码 Agent 完全失效（#62505） |

## 5. 差异化定位分析

- **OpenClaw**：功能覆盖面最广，强调“核心参照”地位，但今日多个回归问题（编码 Agent、子代理丢失）显示其在快速迭代中稳定性承压。目标用户偏向重度 AI 自动化开发者，对跨平台、编码 Agent 等有较高依赖。
- **NanoBot**：侧重**易安装、轻量级**和**A2A/MCP 生态集成**。今日修复了 PEP 668 安装问题、自动压缩、Token 估算等，体现出对“开箱即用”体验的执着。同时外部团队主动提交 A2A 兼容声明，显示其作为标准接入平台的吸引力。
- **Zeroclaw**：定位偏“专业通道与运行时管控”，社区讨论聚焦于 Discord/Slack 通道的持久化、技能元数据编辑、配置文件级联删除等高级功能。其架构似乎更强调配置文件与运行时 profile 的细粒度控制，但今日被 v0.8.0 的预编译包缺陷和文档难题所困扰。
- **PicoClaw**：作为 Sipeed 驱动的项目，可能偏向**嵌入式或轻量边缘场景**。今日发布 nightly，修复了 Telegram 论坛话题等通道问题，但安全漏洞批量报告暴露了安全审查的滞后性，与项目小巧灵活的特点形成对比。

## 6. 社区活跃度记录

| 活跃度分层 | 项目 | 判定依据 |
|-----------|------|----------|
| **极高** | OpenClaw | 单日 500+ 条更新、2 个版本发布、多个讨论过百的 Issue |
| **高** | Zeroclaw | 35+ Issues、37+ PRs，RFC 和回归 Bug 引发密集讨论 |
| **中高** | NanoBot | 9 Issues、23 PRs，合并多个修复，但讨论深度一般 |
| **中等** | PicoClaw | 15 Issues、16 PRs，安全报告集中但无对应回复，整体热度一般 |

> 注意：OpenClaw 的 500 条数据可能与自动化统计有关，但即使剔除部分噪声，其社区规模仍是其他项目的数倍。

## 7. 有证据支撑的观察

1. **回归问题在各项目中普遍出现**：OpenClaw 的编码 Agent、Zeroclaw 的 v0.8.0 预编译包、NanoBot 的 Dream 功能异常，均为原版本正常而新版本失效的案例。这表明多项目在快速迭代中缺乏足够的回归测试覆盖。

2. **安全与文档是当前最明显的短板**：PicoClaw 单日接收13个安全漏洞报告且无修复，Zeroclaw 有用户直呼“文档是垃圾”，OpenClaw 也有敏感数据明文存储（#64046）和配置原始模式失效问题。安全与文档输入输出成为跨项目的通用痛点。

3. **社区对跨平台客户端的呼声高度一致**：OpenClaw 的 Issue #75 已积累109条评论、79 个赞，是项目历史上最活跃的 Issue，且今日仍有大量讨论。NanoBot 的安装脚本兼容性问题也反映了用户对跨环境部署的强烈需求。

4. **子代理/任务可靠性是核心稳定性的共同瓶颈**：OpenClaw 有子代理结果静默丢失（#44925），Zeroclaw 有 Agent 回合忽略运行时配置（#7796），说明多 Agent 协作的容错和状态一致性仍是未解决的共性问题。

5. **A2A/MCP 生态集成正成为差异化竞争点**：NanoBot 今日收到外部团队的 A2A/MCP 兼容声明（#4362），Zeroclaw 也有关注 MCP 工具在特定模型上的不可用问题（#7756）。协议兼容性开始影响用户体验，但项目间尚未形成统一的实现标准。

> **今日暂无明确跨项目信号**：未发现所有项目同时指向某一统一的技术趋势（如 Agent 间通信协议、统一安全模型等）。各项目仍处于各自独立解决个性问题的阶段。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 NanoBot 项目动态日报。

---

### NanoBot 项目动态日报 (2026-06-17)

**分析师**: AI 智能体与个人 AI 助手领域开源项目分析师
**项目**: NanoBot (github.com/HKUDS/nanobot)

#### 1. 今日活动概览

过去24小时，NanoBot 项目社区活跃度维持高位，共产生9条 Issue 和23条 PR 更新。尽管无新版本发布，但项目侧重于修复稳定性 Bug 和合并社区贡献，其中5个新 Issue 被打开，14个 PR 被合并或关闭。讨论焦点集中在安装器兼容性、功能配置行为异常以及工作区权限模型上。

#### 2. 版本发布

无

#### 3. 项目进展

今日项目进展主要体现在一系列 Bug 修复和功能优化的 PR 被成功合并，显著提升了产品的稳定性与可用性。

- **核心功能修复与优化**:
    - **WebUI 自动化管理**: PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) 已合并，新增了 WebUI 自动化管理视图，允许用户对自动化任务进行筛选、排序、运行、暂停等操作，同时保护系统级任务。
    - **安装器兼容性**: PR [#4368](https://github.com/HKUDS/nanobot/pull/4368) 已合并，修复了 macOS 系统因 PEP 668 规范导致的一键安装脚本失败问题，现在将优先使用虚拟环境。
    - **空闲自动压缩**: PR [#4370](https://github.com/HKUDS/nanobot/pull/4370) 已合并，将 `idleCompactAfterMinutes` 的默认值从 `0` (禁用) 改为 `15` 分钟，使系统空闲时自动压缩对话历史，改善长对话性能。
    - **Dream 功能体验**: PR [#4369](https://github.com/HKUDS/nanobot/pull/4369) 已合并，改进了 Dream 功能的用户反馈，当无新历史可供处理时，系统会给出明确解释，替代了之前的无响应/报错。
- **Bug 修复**:
    - **API 空响应导致重复轮次**: PR [#4358](https://github.com/HKUDS/nanobot/pull/4358) 已合并，修复了当 API 返回空响应并重试时，会错误地重复记录用户输入的问题。
    - **Token 估算准确性**: PR [#4352](https://github.com/HKUDS/nanobot/pull/4352) 已合并，将对话摘要的文字长度限制从字符数改为 Token 数，避免了中/日/韩等语言文本因 Token 过多而撑爆系统提示词的情况。
    - **Stream 超时配置**: PR [#4363](https://github.com/HKUDS/nanobot/pull/4363) 已合并，集中处理了流式传输超时配置，现在非法的配置值会被优雅处理，而不是直接崩溃。

#### 4. 社区热点

今日讨论最活跃、最受关注的热点问题如下：

- **安装器兼容性问题** ([#4360](https://github.com/HKUDS/nanobot/pull/4360)): 该 Issue 获得了 6 条评论，是目前最受关注的话题。用户 @The-Markitecht 报告了在 Debian:13 Docker 容器中使用官方安装脚本会因语法错误 (`Syntax error: end of file unexpected`) 而失败。社区正在积极排查是否与容器环境或安装脚本的特定版本有关。

- **Dream 功能行为异常** ([#4242](https://github.com/HKUDS/nanobot/issues/4242)): 用户 @skyline75489 报告的 Bug 引起了维护者重视，涉及 `dream.enabled` 设为 `false` 时，系统提示词中仍然会注入大量对话历史。此问题已被计划修复。

- **A2A/MCP 集成发现** ([#4362](https://github.com/HKUDS/nanobot/issues/4362)): 外部团队 @adminmetavision-rgb 主动提交，声明其 MetaVision AI 工具已与 NanoBot 的 A2A/MCP 标准兼容。此 Issue 虽然简短，但体现了 NanoBot 作为 Agent 交互标准平台的生态吸引力。

#### 5. Bug 与稳定性

今日报告的 Bug 主要集中在新功能体验和配置边界问题上，其中部分已有修复方案。

- **[严重] Git 命令执行被工作区安全策略阻止** (`#4375`): 用户 @jjmanrique 报告，在工作区子目录执行 `git add`、`commit`、`push` 等操作时，会被工作区安全守卫拦截，尽管操作发生在已授权的工作区内。此问题影响了 Git 工作流的核心功能。
- **[中等] 项目工作区读写路径不对称** (`#4374`): 用户 @maximilize 报告，WebUI 的项目工作区功能在读取系统提示文件 (`SOUL.md`, `USER.md`) 时方向正确，但写入时却错误地写回到了默认工作区，导致配置丢失。
- **[低] 本地模型服务器受主机代理影响** (`#4366`): 用户 @Struggle1992 报告，当主机设置了 HTTP 代理时，`httpx.AsyncClient` 会将本应指向本地 Ollama 等模型的请求也路由出去，导致连接失败。**今日已有修复 PR `#4367` 被提出**。
- **[已修复] Stream 超时配置和 API 重试问题** (`#4065`, `#4079`): 这两个较老的问题今日被关闭，其修复 PR (`#4363`, `#4358`) 已被合并，提升了系统的健壮性。

#### 6. 功能请求归类

用户提出的新功能需求和相关 PR 主要集中在 Agent 互联互通和能力扩展上。

- **A2A/MCP 生态集成** (`#4362`): 外部项目提出将其 AI 工具通过 A2A 和 MCP 协议与 NanoBot 集成，属于 Agent 生态的横向扩展。
- **系统提示词缓存优化** (`#4371`): PR 提出在系统提示词中增加断点，以固定前缀部分进行缓存，避免每次对话轮次都重新计算，属于性能优化类功能。
- **本地模型代理配置** (`#4366`): 用户提出需要为连接本地模型的请求设置代理绕过策略，属于对网络配置的需求增强。

#### 7. 用户反馈摘要

从今日活跃的 Issue 中可以提炼出具体的用户痛点和使用场景：

- **安装部署痛点**: 用户在干净的 Docker 和特定 Linux 发行版上安装失败，暴露出安装脚本对不同环境的兼容性仍需加强。用户期待一个“零摩擦”的安装体验。
- **功能配置的预期不符**: 用户期望 `dream.enabled: false` 能完全禁用 Dream 功能，但系统仍因游标未被处理而自动加载历史。这表明功能的开关模型可能不够清晰，存在“开启/关闭”与实际“生效/无效”的预期差。
- **工作区权限的精确性需求**: 用户期望在工作区内的 Git 操作和对关键配置文件的修改能被准确处理。当前的安全策略和路径解析在复杂场景下出现误判，影响了用户对 Agent 自主能力的信任。

#### 8. 待处理积压

以下为长期未响应或未解决的重要 Issue/PR，提醒维护者关注。

- **网络 Token 估算的离线依赖** ([#3662](https://github.com/HKUDS/nanobot/pull/3662)): 该 PR 于2026-05-06 发起，旨在解决 Token 估算时的网络加载问题，是重要的离线/内网环境体验优化，目前仍未合并，值得关注。
- **文件系统写入路径安全** ([#4053](https://github.com/HKUDS/nanobot/pull/4053)): 该 PR 旨在将只读目录与可写目录的逻辑分离，提升工具调用的安全性，已有三周未合并。
- **Dream 功能逻辑问题** ([#4242](https://github.com/HKUDS/nanobot/issues/4242)): 虽然有关联 PR 被合并，但该 Issue 本身仍处于 OPEN 状态，其核心逻辑问题可能并未完全解决，需要明确后续计划。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据您提供的 Zeroclaw 项目数据，生成 2026-06-17 的项目动态日报如下。

---

# Zeroclaw 项目动态日报 | 2026-06-17

## 1. 今日活动概览

过去24小时内，Zeroclaw 项目社区活跃度极高。Issue 和 PR 的更新数量均达到近期高点，其中新开及活跃的 Issue 有 35 条，待合并的 PR 有 37 条。值得注意的是，今日未发布新版本，但社区正围绕 v0.8.0 版本的回归问题、文档质量以及多项高风险的运行时 Bug 展开密集讨论和修复，项目整体处于高强度的开发和问题排查阶段。

## 2. 版本发布

无。

## 3. 项目进展

今日有多个重要 PR 被合并或处于高优先级推进状态，主要聚焦于通道稳定性、技能管理和配置系统的改进。

- **#7784**: **`fix(discord): persist slash reconcile state + read shared stores from data_dir`** (已合并)。该 PR 合并了两个关键的 Discord 通道修复：一是持久化斜杠命令的协调状态，确保重启后命令识别不中断；二是正确地从 `data_dir` 读取共享存储，解决了数据持久化问题。
- **#7734**: **`feat(skills): expose frontmatter tags in the editor + slash-command toggle`** (已合并)。该 PR 允许用户在编辑器中查看和修改技能（Skill）的前置元数据标签（frontmatter tags），并新增了斜杠命令切换功能，提升了技能管理的可视化与便捷性。
- **#7786**: **`perf(skills): cache skill-directory loads`** (进行中)。社区正在审查一项性能优化，该优化旨在缓存技能目录的加载结果（带内容校验），以避免每次构建提示词都进行完整的磁盘读取和安全审计，对 I/O 密集型操作有明显性能提升。
- **#7785**: **`feat(config): find_all_references/plan_delete foundation for typed delete-with-cascade`** (进行中)。此 PR 是 Issue #7175 的基础实现，为配置系统引入了引用发现（reference discovery）功能，为后续带级联删除的配置项管理奠定基础。

## 4. 社区热点

今日讨论最激烈、评论最多的 Issue 反映了社区对项目长期治理和核心功能的极大关注。

- **#6808**: **`[RFC]: Work Lanes, Board Automation, and Label Cleanup`** (11条评论)。该 RFC 提案旨在通过“工作泳道”和看板自动化来优化项目的工作流和标签管理。经过数周的讨论，目前状态已被标记为“accepted”（已采纳）并进入 rollout 阶段。这体现了社区对项目长期可持续发展及治理结构的深度参与。
- **#7758**: **`[Bug]: It doesn't matter how good the code is if the documentation is crap.`** (2条评论)。尽管评论数不多，但该 Issue 以极其直白甚至是情绪化的标题，犀利地指出了文档质量的严重问题。用户反馈无法编写配置文件，说明文档缺失或错误直接构成了工作流阻断（Workflow blocked）级别的障碍。
- **#7756**: **`[Bug]: native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns`** (进行中)。一个关于模型兼容性的严重问题：用户报告在使用 Anthropic 和 OpenAI 的某些模型时，原生/MCP 工具无法被模型识别和使用。这触及了多模型与工具协同这一核心功能，引发了维护者和用户的高度关注。

## 5. Bug 与稳定性

今日报告的 Bug 数量众多，其中高风险（risk: high）问题尤为突出，主要集中在运行时、通道和 TUI 界面。按严重程度排列如下：

**工作流阻断（S1）：**
- **#7756**: `native/MCP tools unavailable on OpenAI/Antbropic turns`。关键功能阻断，已获维护者关注。
- **#7758**: `Documentation is crap`。文档缺失导致配置困难。该 Issue 已关闭，但用户痛点明确。
- **#7787**: `Prebuilt v0.8.0 binaries ship without Slack/Discord channel features`。这是一个严重的回归问题，官方发布的 v0.8.0 预编译包缺少了 Slack 和 Discord 通道功能，而 v0.7.5 正常，确认是构建配置或代码问题。已有 fix request。
- **#7796**: `Direct agent turns ignore runtime-profile max_tool_iterations`。运行时 Profiling 功能失效，使用高级配置的用户工作流被阻断。
- **#7804**: `Code history can send non-alternating Anthropic messages`。历史消息格式错误导致下游 Anthropic API 返回 400 错误，直接阻塞工作流。

**降级行为（S2）：**
- **#7809**: `Channel turns ignore runtime-profile strict/parallel tool flags`。通道运行上下文未正确加载运行时配置。
- **#7799**: `Resumed Code sessions reopen with a blank transcript`。会话恢复功能（resume）存在数据丢失问题。
- **#7803**: `Active Code sessions cannot switch agents directly`。TUI 交互中断，在会话中无法切换 Agent。

## 6. 功能请求归类

用户今日提出了多项新功能需求，覆盖了核心运行时、Web 界面和通道扩展。

- **运行时与 Agent 控制**:
    - **#7759**: [Feature] 解耦网关 WebSocket 生命周期与 Agent turn 生命周期，支持后台运行和断线重连后恢复 turn。
    - **#7794**: [Feature] 实现基于 Agent 粒度的“Dream Mode”（梦境模式）开关，并增加 `/dream` 聊天命令和 Web 视图。
    - **#7762**: [Enhancement] 为 Cron 功能增加文档，并允许指定 Cron 任务运行的特定模型。
- **Web/Gateway 界面增强**:
    - **#7776**: [Feature] 在 Gateway WebSocket 通道上支持原生 `ask_user` 功能，代替当前的“快速失败”。
- **通道扩展**:
    - **#7811**: [PR] 为 WhatsApp 通道提供原生媒体标记支持，如 `[IMAGE:]`, `[VIDEO:]`。

## 7. 用户反馈摘要

从 Issue 的评论和标题中，可以提炼出以下真实的用户声音：

- **“文档太烂了”**：这是最强烈的负面反馈（#7758）。用户明确表示“代码再好在烂文档面前也没用”，并指出“写配置文件是不可能的”。这表明入门体验（Quickstart）和核心配置指南存在严重缺失，直接导致了用户流失的风险。
- **“预编译的包居然是坏的”**：用户 @SeungYong-Baek 指出 v0.8.0 的预编译包缺少了 Slack 和 Discord 功能（#7787），对比 v0.7.5 正常，这直接影响了用户对新版本的信任。
- **“我想省钱但没法指定模型”**：用户 @touhidurrr 希望在 Cron 任务中能指定便宜的模型来完成低优先级任务（#7762），这反映了用户在生产环境中对成本控制的现实需求。

## 8. 待处理积压

以下为长期存在但今日仍有更新或评论，需维护者高度关注的重要 Issue/PR：

- **#5266**: **`fix(gateway): no pairing code shown when running gateway start on alternate port`** (风险:高，优先级:p1)。**自 2026-04-03 起已开放超过 70 天**。该 Bug 报告了在非默认端口启动 Gateway 时，配对码不显示的问题，属于安全和配置的严重缺陷。今日 PR #7798 已提交修复，建议尽快合并。
- **#6643**: **`[Bug]: Thoughts merge into final message using GLM-5.1`** (风险:中)。**自 2026-05-13 起已开放 30 余天**。GLM-5.1 模型存在思考过程混入最终消息的 Bug，影响对话质量。用户强烈要求重新关注此问题。
- **#6648**: **`[Bug]: cron session_target=main still runs in an isolated cron session`** (风险:高)。**自 2026-05-14 起开放**。Cron 任务的关键功能存在逻辑错误，导致 `session_target=main` 参数失效，该 Bug 直接影响定期任务与主会话的交互。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-17

## 今日活动概览

过去24小时内，PicoClaw 项目保持高度活跃，共产生15条 Issues 更新和16条 PR 更新。项目发布了最新的 `v0.2.9-nightly` 构建版本。值得注意的是，今日处理了大量（13条）由同一安全研究员提交的安全相关 Issues，但尚未有对应的修复 PR 合并。同时，社区贡献者活跃，修复了包括 Telegram 论坛话题支持、上下文压缩配置、goroutine 恐慌恢复等多个关键 Bug。

## 版本发布

项目发布了新的 nightly 构建版本 **v0.2.9-nightly.20260616.c1ff5aa6**。这是一个自动化构建版本，可能不稳定，建议谨慎使用。完整的变更日志可查看 [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) 的对比。

## 项目进展

今日合并/关闭了多个重要的功能增强和 Bug 修复 PR，体现了项目在稳定性和功能扩展方面的持续投入：

- **远程 Cron 命令控制**：PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) 合并，新增 `tools.cron.command_allowed_remotes` 配置，允许管理员限制哪些远程频道或用户可执行定时任务，增强了权限控制。
- **Telegram 论坛话题修复**：PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) 合并，解决了在 Telegram 论坛模式下，机器人回复消息时忽略 `message_thread_id`，错误地发送到 `#General` 话题的 Bug。此修复直接对应 Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110)。
- **核心稳定性增强**：PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) 合并，为核心路径上的 goroutine 添加了 `defer-recover` 保护，防止单个 goroutine 恐慌导致整个进程崩溃。
- **Go 错误处理规范**：多个 PR（如 [#3127](https://github.com/sipeed/picoclaw/pull/3127)，[#3129](https://github.com/sipeed/picoclaw/pull/3129)，[#3130](https://github.com/sipeed/picoclaw/pull/3130)）合并，显式忽略了目录文件描述符和 JSON 序列化等操作中的关闭/错误，遵循了 Go 语言的最佳实践，提升了代码质量。
- **上下文压缩配置修复**：PR [#2988](https://github.com/sipeed/picoclaw/pull/2988) 合并，修复了 `/context` 命令始终显示固定压缩阈值的问题，使其正确读取 `summarize_token_percent` 配置。

## 社区热点

- **最活跃的功能请求 Issue**：[#2404](https://github.com/sipeed/picoclaw/issues/2404) —— “[Feature] Add in config to send streaming HTTP request”。该 Issue 已存在超过两个月，拥有12条评论和1个赞，社区仍在持续讨论。用户希望增加一个配置选项，以便像 OpenAI 的 Python 客户端那样，向 LLM 后端发送流式 HTTP 请求，从而获得更好的实时响应体验。

- **安全报告潮**：用户 [@YLChen-007](https://github.com/YLChen-007) 今日提交了13个新的安全相关的 Issue（如 [#3070](https://github.com/sipeed/picoclaw/issues/3070) 至 [#3082](https://github.com/sipeed/picoclaw/issues/3082)），涉及 SSRF 保护绕过、命令白名单绕过、授权策略绕过等多个方面。这构成了今日社区讨论的绝对热点，虽然每条评论数不多，但问题数量多、覆盖面广，对项目安全性提出了严峻挑战。

## Bug 与稳定性

- **严重 - 安全漏洞系列**：由 [@YLChen-007](https://github.com/YLChen-007) 报告的13个安全问题，涵盖了 SSRF、授权绕过、权限提升等多种漏洞，严重性高，目前均处于 `[OPEN]` 状态，**未见对应的修复 PR**。
    - 例如：[#3079](https://github.com/sipeed/picoclaw/issues/3079) 报告了 `exec` 命令白名单可被 `jq` 绕过，导致环境信息泄露。
    - [#3078](https://github.com/sipeed/picoclaw/issues/3078) 报告了 `web_fetch` 的 SSRF 保护可通过环境变量配置的 HTTP 代理绕过。

- **中等 - Telegram 论坛话题 Bug**：Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110) “Bug: Telegram adapter ignores message_thread_id”，**已有对应修复 PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) 已合并**，问题已解决。

- **低 - `su -c` 命令支持**：Issue [#3134](https://github.com/sipeed/picoclaw/issues/3134) 报告了在 agent gateway 环境下无法正确执行 `su -c 'echo OK'` 命令的问题。该 Issue 已关闭，但未提及具体修复方案。

## 功能请求归类

- **流式 HTTP 请求**：[#2404](https://github.com/sipeed/picoclaw/issues/2404) 请求增加配置以支持向 LLM 后端发送流式 HTTP 请求。目前无直接关联 PR。
- **插件频道支持**：PR [#3120](https://github.com/sipeed/picoclaw/pull/3120) 实现了 `RegisterChannelSettings` 钩子，允许第三方频道插件通过外部模块注册配置，无需 fork 项目代码。**该 PR 已合并**。
- **远程 Cron 命令**：PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) 新增了 `command_allowed_remotes` 配置，允许限制远程执行定时任务的来源。**该 PR 已合并**。

## 用户反馈摘要

- 用户 [@Giordano10](https://github.com/Giordano10) 在 Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110) 中反馈，其在使用 Telegram 论坛模式时，机器人虽然能正确在对应话题显示“正在输入”，但最终回复消息却发送到了 `#General` 话题。此问题已通过 [PR #3135](https://github.com/sipeed/picoclaw/pull/3135) 修复。
- 用户 [@nongwoluanlai666](https://github.com/nongwoluanlai666) 在 Issue [#3134](https://github.com/sipeed/picoclaw/issues/3134) 中报告，在 agent gateway 环境下执行 `su -c` 命令会导致报错退出。该 Issue 已被关闭，但记录了这个使用场景的局限性。

## 待处理积压

- **长期未响应的功能请求**：
    - **Issue #2404**：关于添加流式 HTTP 请求配置的功能请求，已存在超过两个月，讨论活跃但无实质性进展或被采纳的迹象。
- **大量未修复的安全报告**：
    - **Issues #3070 - #3082**：由 [@YLChen-007](https://github.com/YLChen-007) 报告的13个安全漏洞，虽然已有几天（从6月9日到今日），且今天有更新，但依然**没有任何相关的修复 PR 被提出**。考虑到这些问题的严重性，建议维护者尽快评估并分类处理，优先安排修复。

</details>