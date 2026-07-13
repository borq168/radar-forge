# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-07-13 00:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报
**日期：2026-07-13**
**数据来源：github.com/openclaw/openclaw**

---

## 1. 今日活动概览
过去 24 小时内，OpenClaw 项目合计更新 **1,000 条**（Issues 与 PR 各 500 条）。其中 Issues 新增/活跃 299 条、关闭 201 条；PR 待合并 337 条、已合并/关闭 163 条。今日无新版本发布，社区讨论量保持高位，大量报障、功能请求与代码修复同时推进。

---

## 2. 版本发布
本日无新 Release 发布。上一个稳定版本仍为 2026.6.11（基于部分 Issue 提及的构建标识），未见后续版本 Tag 推送。

---

## 3. 项目进展
今日以下 PR 被确认合并或关闭，有效解决了若干问题：

- **[#105774] fix(cli): gateway startup no longer waits for claw animation** (closed)
  修复了起网关时因等待装饰性动画导致 1.3–2.1 秒的额外启动延迟，使网关模块提前加载，提升 CLI 使用体验。

- **[#105778] fix(ui): keep sessions visible when deletion is a no-op** (closed)
  避免 Web UI 在删除会话请求成功但实际未删除时错误地将会话从列表中移除，并修正批量删除条件下模型覆盖被错误清空的问题。

- **[#105773] fix(release): pin publish workflow refs** (closed)
  将发布工作流引用固定，防止因外部 Action 版本漂移导致的构建失败。

- 其他有价值合并的改动（可能已合并但未在快照中标记 Closed）包括：
  - [#105738] fix(sessions): 修复脏会话索引阻塞网关事件循环的问题，改为异步重建索引，提升网关稳定性。
  - [#105724] fix(codex): 保留 `sessions_yield` 后的子代理完成结果，防止会话间数据丢失。
  - [#105442] fix(config): 解决 APFS/Windows 卷大小写差异导致的虚假 `DuplicateAgentDirError` 启动拒绝（已等待作者响应）。
  - [#105560] [#105567] [#105564] 系列：统一将多个工具的参数由 `Type.Number` 收紧为 `Type.Integer`，防止浮点型输入导致的隐性行为差异。

---

## 4. 社区热点
今日讨论最活跃的 Issues 以评论数量排序如下：

| Issue | 标题 | 评论数 | 👍 | 核心诉求 |
|-------|------|--------|----|----------|
| [#75] | Linux/Windows Clawdbot Apps | 110 | 81 | 强烈要求提供与 macOS 功能对等的 Linux/Windows 原生桌面应用 |
| [#99241] | Tool outputs sometimes render as image attachments and become unreadable | 22 | 2 | 长时间运行或 ANSI 重输出场景下工具结果变为不可读的“(see attached image)”，代理失去上下文 |
| [#91588] | Critical: Gateway Memory Leak (350MB → 15.5GB OOM) | 19 | 1 | 网关进程内存泄漏导致反复 OOM 崩溃，P0 级别，严重影响可用性 |
| [#7707] | Feature Request: Memory Trust Tagging by Source | 16 | 0 | 按来源对代理记忆进行信任标记，防止恶意注入（security 议题） |
| [#10659] | Feature Request: Masked Secrets – Prevent Agent from Accessing Raw API Keys | 13 | 4 | 允许代理使用密钥但不可见明文，防止泄露与注入攻击 |
| [#87744] | Codex-backed Telegram turns repeatedly time out | 12 | 3 | Telegram 会话在 2026.5.27 版本后频繁超时未完成，影响回复可靠性 |
| [#104721] | All tool results return “(see attached image)” literal string instead of actual output | 12 | 1 | 回归问题，工具调用结果被替换为占位符字符串，数据完全丢失 |
| [#102020] | Second message in a session fails with “reply session initialization conflicted” | 11 | 1 | 跨渠道回话初始化冲突导致第二条消息失败，用户体验割裂 |

**热点洞察**：平台缺失（#75）长期积累大量关注，用户期盼补齐；工具输出退化（#99241, #104721）与网关内存泄漏（#91588）则是当前可靠性的头号痛点。

---

## 5. Bug 与稳定性
### 🔴 严重回归 / 崩溃（P0）

- **[#91588]** 网关内存泄漏（RSS 从 350MB 增至 15.5GB，2-3 天 OOM）
  - 影响：进程被 OS 终止后触发反复重启循环，服务不可用
  - 状态：暂无专门 Fix PR 提及，但 `clawsweeper:fix-shape-clear` 标签表明团队已识别形态
- **[#104721]** 所有工具结果返回 “(see attached image)” 字面字符串
  - 影响：工具输出数据完全不可读，功能彻底失效，属于回归
  - 状态：讨论活跃，未关联修复 PR
- **[#101290]** CLI 启动预检在运行中网管时破坏 SQLite 状态（Database disk image is malformed）
  - 影响：状态数据库损坏，可能导致数据丢失
  - 状态：标签无 `linked-pr-open`，等待重现与修复

### 🟠 高影响（P1）

- **[#99241]** 长会话/ANSI 重输出时工具结果被图像占位符替换，代理无法阅读文本
- **[#87744]** Telegram 会话更新至 2026.5.27 后频繁超时，无法完成回复
- **[#53408]** 长时间会话后 write/exec 工具参数静默丢失（空参数对象）
- **[#94939]** 6.x 状态迁移遗留空 channels 会话 SQLite 文件，破坏 Teams/Bot Framework 主动发送
- **[#91009]** Codex PreToolUse 钩子产生 CPU 占用极高进程并使网关 RPC 停滞
- **[#39476]** A2A 会话互发导致重复消息
- **[#102400]** 回话初始化冲突在 Slack/webchat 静默丢弃，用户无感知无恢复
- **[#89228]** 隔离 cron 会话中间歇性丢失 exec 能力（修复于 4.1 后再回归）

### 🟡 较为常见的稳定性退化

- **[#78562]** 工具循环导致持续自动压缩失败，用户反复看到“压缩中…”
- **[#90639]** 压缩 safeguard 模式与会话增长至 200K+ 令牌无法恢复
- **[#71689]** 任务注册表 SQLite 损坏，启动失败

**已有修复 PR 的 Bug**（部分）：
- [#105738] 修复脏会话索引阻塞网关事件循环
- [#105724] 修复子代理完成消息丢失
- [#105386] 修复持久化错误时 session reaper 无冷却重试导致 CPU 暴涨
- [#105442] 修复大小写文件名导致的启动拒绝
- 其他：多个工具参数类型收紧类 PR 虽为改进，但亦在消除隐性行为差异。

---

## 6. 功能请求归类
今日新出现或持续活跃的功能请求（评论 ≥ 4，创建早则持续关注）主要覆盖以下几个方向：

### 🖥️ 跨平台与渠道增强
- **[#75]** 提供 Linux/Windows 原生桌面应用（👍81，P2）
- **[#41657]** Slack 文件附件元数据传入代理（评论 4）

### 🔒 安全与信任控制
- **[

---

## 横向生态对比

# 开源 AI 助手生态动态横向对比 · 2026-07-13

## 1. 今日横向概览
今日 OpenClaw 继续保持超千条级别的极端活跃度，大量缺陷报告、功能请求与代码修复并行推进，但多个涉及内存泄漏和工具输出退化的严重问题仍在持续。相比之下，LobsterAI 活动极为清淡，仅有个位数历史项发生更新，焦点集中在多 Agent 场景下 USER.md 文件被错误覆盖的数据一致性问题，且未见维护者响应。两项目今日均无新版本发布，研发重心都在缺陷修复上。

## 2. 各项目活跃度对比

| 项目 | Issues 活跃/新增 | Issues 关闭 | PR 待合并 | PR 已合并/关闭 | 新 Release | 事实性备注 |
|------|------------------|-------------|-----------|----------------|------------|------------|
| OpenClaw | 299 条 | 201 条 | 337 条 | 163 条 | 无 | 多项修复合并（CLI 启动、会话索引、参数类型等），但 P0 内存泄漏与工具输出退化仍无独立修复 PR |
| LobsterAI | 1 条（历史更新） | 0 条 | 1 条 | 1 条（未合并关闭） | 无 | 唯一的活跃 Issue 为多 Agent 下 USER.md 覆盖；存在 stale PR 长时间无人审查 |

## 3. OpenClaw 与同类对照
基于今日数据，OpenClaw 的活跃量级是 LobsterAI 的数百倍，体现为高度并行的社区贡献与问题暴露。OpenClaw 的技术焦点分散在 CLI 启动优化、会话索引并发、Web UI 状态同步、代码执行工具参数类型收紧等底层组件；而 LobsterAI 今日仅涉及多 Agent 下的配置文件覆盖问题。社区讨论面上，OpenClaw 长期热点包括跨平台原生桌面应用（#75）、网关内存稳定性（#91588）、工具结果可读性回归（#99241, #104721）以及安全与记忆信任机制，话题多元且有明确用户诉求；LobsterAI 的讨论则高度集中在一个持续性数据损坏缺陷上，未形成跨议题对话。

## 4. 共同出现的技术方向
**多 Agent / 多会话下的数据隔离与一致性** 是两项目今日共同暴露的技术难题：

- **OpenClaw**：面临 A2A 会话重复消息（#39476）、跨渠道回话初始化冲突导致第二条消息失败（#102020）、会话索引阻塞网关事件循环（#105738）等，状态同步与并发控制频繁出现故障。
- **LobsterAI**：Issue #2293 显示多 Agent 场景下，任一 Agent 的 USER.md 修改会同步影响所有 Agent，重启后统一被主 Agent 覆盖，多实例间的用户配置完全失去隔离性。

这表明在不同架构的 AI 助手项目中，如何正确处理多实例、多会话场景下的状态归属和并发写入，仍是当前工程实现的薄弱环节。

## 5. 差异化定位分析
基于今日呈现的信息，两个项目在多个维度上存在显著差异：

- **功能侧重**：OpenClaw 覆盖 CLI 网关、Web UI、Telegram/Slack 等渠道集成、工具执行（codex）、会话管理及可与多种 LLM 对接的代理运行时，强调可编程性与后端稳定性；LobsterAI 围绕多 Agent 对话界面构建，提供“新建对话”等前端交互，并依赖 USER.md 进行 Agent 行为描述，偏重用户直接使用的前端体验。
- **目标用户**：OpenClaw 的大量议题来自开发者与自建服务用户，讨论内容涉及网关内存、数据库损坏、Hook 系统、CLI 参数等，目标用户明显为技术型个人或团队；LobsterAI 的反馈更多关注“为不同 Agent 设置独立需求描述”等终端使用者场景。
- **技术架构**：OpenClaw 暴露了 SQLite 状态存储、Session 索引、channel 抽象、Hook 机制等后端组件；LobsterAI 今日展现出 Agent ID 生成策略（短 UUID）、文件系统配置持久化（USER.md）以及可能基于 Electron 的桌面壳特征（悬停提示 PR），整体更偏向桌面应用框架。

## 6. 社区活跃度记录
按照今日原始数据量级，可将两个项目划分为两个活跃度层级：

- **超高活跃层**：OpenClaw —— 单日 Issues 与 PR 流转量均达数百条，社区贡献和报障密度极高，处于高频迭代和快速反馈的典型状态。
- **低活跃层**：LobsterAI —— 仅 1 条历史 Issue 和 2 条历史 PR 有更新，无新建事项，反应速度慢，存在超过 3 个月未被合并的 PR 和缺乏回应的缺陷。

以上仅基于今日快照记录，不引申为长期成熟度评价。

## 7. 有证据支撑的观察

1. **OpenClaw 正经历严重的可靠性回归，且跨组件关联明显**
   内存泄漏（#91588）、工具输出被占位符替换（#104721, #99241）、预检破坏数据库（#101290）等多条 P0/P1 议题同时处于活跃状态，且部分问题已指向“回归”性质（如 #104721）。这映射出近期版本更新可能引入了系统性缺陷，而非孤立偶发。

2. **OpenClaw 社区同时存在高修复吞吐量与高积压压力**
   今日有至少 5 个明确修复被合并（包括网关启动、会话可视性、子代理数据、参数类型等），但同时仍有大量严重 Bug 无关联修复 PR。社区完成度呈现“小问题快速修正，大风险持续暴露”的并存特征。

3. **LobsterAI 的项目维护响应能力成为当前风险点**
   多 Agent 配置覆盖 Bug 已暴露 6 天且用户提供了详细复现步骤，却无维护者确认或标签响应；同时一个体验改进 PR 因 stale 被搁置超 3 个月，反映出维护力量投入不足，可能延迟关键数据丢失问题的解决。

4. **两项目今日都无新功能发布，注意力集中于修复和报障**
   无论是活跃的 OpenClaw 还是低动的 LobsterAI，均未推送新 Release，社区议题完全由缺陷、请求和修复类 PR 构成，符合工作日以稳定性维护为主的节奏。

5. **（跨项目信号）多实例状态管理问题同时出现在两个独立项目中**
   OpenClaw 的会话冲突、重复消息与 LobsterAI 的配置文件覆盖，本质都属于多实体并行操作下的状态一致性问题。虽然架构和表现不同，但共同提示多 Agent/多会话的隔离机制是当前开源 AI 助手项目需要优先加固的公共技术领域。

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# youdao lobster 项目日报 | 2026-07-13

## 今日活动概览
过去 24 小时仓库没有新的 Issue 或 PR 创建，但有 1 条 Issue 和 2 条 Pull Request 发生了更新。唯一处于活跃状态的 Issue 涉及多 Agent 下的 USER.md 文件被错误覆盖的 Bug；两个 PR 中一个因长期未活动被关闭，另一个依然待合并，当日无新版本发布。

## 项目进展
- **已关闭 PR #2065**：该 PR 原本旨在通过短 UUID 代替名称生成 Agent ID，以解决删除 Agent 后重新创建同名 Agent 时旧数据意外复活的问题。PR 已于昨日（7 月 12 日）被关闭且未合并，推测因 `stale` 标记被自动关闭。相关数据清理问题（如会话未清理）在描述中仅标识为待后续修复，本次并未推进。
  https://github.com/netease-youdao/LobsterAI/pull/2065

## 社区热点
- **Issue #2293**（多 Agent 下 USER.md 被覆盖替换）
  该 Issue 创建自 7 月 7 日，昨日仍有更新，累计 4 条评论，成为当前讨论热点。用户报告在多 Agent 场景下，任一 Agent 的“关于你”设置或 USER.md 修改会同步到其他 Agent；更进一步测试发现，重启软件后所有 Agent 的 USER.md 都会被主 Agent 的 USER.md 内容强行覆盖，导致无法为不同 Agent 设置独立需求描述。作者怀疑是近期更新的引入缺陷。
  https://github.com/netease-youdao/LobsterAI/issues/2293

## Bug 与稳定性
- **严重：多 Agent 下 USER.md 被覆盖（数据一致性受损）**
  Issue #2293 报告了明显的数据覆盖 Bug：在软件运行时修改任一 Agent 的 USER.md 会同步影响其他 Agent，重启后所有 Agent 的 USER.md 被强制替换为主 Agent 的内容。该问题导致多 Agent 的个性化配置完全失效，且可能造成用户数据丢失。目前尚无已知的修复 PR。
  https://github.com/netease-youdao/LobsterAI/issues/2293

## 功能请求归类
今日无可识别的新增功能请求。PR #1325 为「新建对话」图标按钮添加悬停提示，属于体验优化类改进，但该 PR 已超过 3 个月未合并，未被标记为功能请求议题。

## 用户反馈摘要
从 Issue #2293 的讨论中提炼到的用户痛点：
- 多 Agent 场景是用户的实际使用方式，用户需要为不同 Agent 维护独立的需求说明（USER.md），但当前行为违背了这一基本预期。
- 用户通过手动修改 workspace 目录下的文件尝试绕过该问题，但重启后仍会被覆盖，说明数据被统一覆写可能发生在启动流程中，用户因此怀疑这是一个近期更新引入的回归缺陷。
- 用户已在评论中补充了更详细的复现步骤，希望得到确认或修复。

## 待处理积压
- **PR #1325**：[stale] 为新建对话图标按钮添加悬停提示。该 PR 创建于 2026 年 4 月 2 日，距今已 3 个月有余，长时间无 reviewer 响应，已标记为 stale，存在被自动关闭的风险。
  https://github.com/netease-youdao/LobsterAI/pull/1325
- **Issue #2293**：自 7 月 7 日报告以来尚未见维护者回应或确认标签，但社区有持续讨论，需优先关注是否确认为回归 Bug 并明确修复计划。
  https://github.com/netease-youdao/LobsterAI/issues/2293

</details>