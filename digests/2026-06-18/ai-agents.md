# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-18 00:39 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，以下是根据您提供的 OpenClaw 项目 GitHub 数据生成的 2026 年 6 月 18 日项目动态日报。

---

## OpenClaw 项目动态日报 — 2026-06-18

### 1. 今日活动概览

过去24小时，OpenClaw 项目活动极为密集，共产生 500 个 Issue 和 500 个 PR 的更新。其中，Issue 方面以新议题和活跃讨论为主（489条），仅关闭11条；PR 方面则有大量待合并的工作（440条），合并或关闭了60条。截至今日，项目未发布新的版本。社区讨论高度集中在跨平台客户端需求、会话状态管理、核心系统稳定性与安全性增强上，反映出项目在功能扩展与系统健壮性之间的平衡挑战。

### 2. 版本发布

无

### 3. 项目进展

今日主要进展体现在大量 Pull Request 的提交和部分关键修复的推进，但多数 PR 仍处于待审查或等待作者回复状态。以下为今日提交的一些重要 PR：

- **跨渠道消息修复**：多个 PR 致力于修复特定消息渠道的 Bug，包括：
    - `#93823`：修复了 WhatsApp 自动回复多块消息时，首块内容因媒体附件失败而丢失的问题。
    - `#94320`：为 Discord 网关重连时增加了待发送消息队列的排空机制，防止消息丢失。
    - `#94107`：修复了 Telegram 渠道中，将 `self`、`current` 等保留字误解析为公共频道名的问题。
    - `#94051`：修复了 Telegram 消息中 `notify=false` 标记泄露到正文的问题。
- **核心功能与系统稳定性**：
    - `#91988`：修复了预置工作空间中 `BOOTSTRAP.md` 文件被自动清理的问题，这是 `#91931` 的修复。
    - `#88992`：提供了对 `message_tool_only` 模式下“搁浅回复”的恢复机制，修复了 `#85714` 中的关键Bug。
    - `#85651`：引入了“上下文压力感知”的持续工作信号（`continue_work` / `request_compaction`），这是一个大型特性（Size: XL），旨在让Agent能主动管理其上下文。
- **系统诊断与工具链**：
    - `#94253`：新增 `doctor --explain` 命令，用于生成更友好的诊断解释而非原始日志。
    - `#91089`：为 CI 增加 Windows 版本漂移检测脚本，预防 Windows 节点版本落后于主版本的潜在问题。

### 4. 社区热点

今日社区讨论热度极高，最受关注的话题集中在**平台兼容性**和**会话状态管理**上。

- **🔥 评论最多的话题：跨平台客户端缺失**
    - **Issue `#75`**：关于支持 **Linux/Windows 版 Clawdbot Apps** 的呼声仍然最高（109条评论，79个👍）。用户 `@steipete` 于半年前提出，至今仍是最活跃的讨论，显示社区对于桌面端全覆盖的强烈需求。
    - **Issue `#9443`**：紧随其后，顶帖众多（25条评论），社区要求发布**预编译的 Android APK**，以简化部署流程。

- **核心系统挑战的深度讨论**：
    - **Issue `#88838`**：关于“**追踪核心会话/转录的 SQLite 迁移**”的讨论，有30条评论。这是一个由维护者提出的 P0 级别议题，计划通过小步快跑的抽象分支模式，来降低大规模重构（会话/转录迁移）的风险。
    - **Issue `#22438`**：提出的“**分层启动文件加载**”功能获得了17条评论。用户希望控制不同场景（如子代理、定时任务）下的上下文预算，避免浪费 Token，这反映了社区对成本和效率的精细化管理的追求。

### 5. Bug 与稳定性

今日报告的 Bug 和回归问题集中在该项目的“心脏地带”——**会话状态**、**消息传递**和**安全性**上，问题等级普遍为 P1。

- **高严重性（P0/P1）Bug**:
    - **会话迁移（P0）**：`#88838` 虽然是一个特性议题，但其背景是为了解决高风险的大规模 SQLite 迁移问题，被标记为 P0。
    - **信号守护进程竞争条件（P1）**：**`#22676`** 描述了在 SIGUSR1 重启时，`signal-daemon` 因未等待旧进程退出，导致新进程无法绑定端口、配置锁等问题。该 Bug 影响 Gateway 的配置热加载。**已有关联的修复 PR**。
    - **编码代理卡死（P1）**：**`#62505`** 是一个回归问题，报告编码代理在 2026.4.2 版本后停止工作，仅提供模糊的状态更新。这表明最近的某次更新可能引入了严重的逻辑错误。
    - **文件写入安全（P1）**：**`#40001`** 指出 `write` 工具缺乏追加模式，造成隔离的定时任务可能会覆盖其他会话共享的 workspace 文件，导致数据丢失。
    - **子代理列表为空（P1）**：**`#75593`** 报告在 v2026.4.29 版本上，`/subagents list` 命令在子代理创建后仍显示为空，这是一个回归问题。
    - **内存搜索工具调用被中止（P1）**：**`#74586`** 描述了嵌入式 Runner 在执行 `memory_search` 工具调用时被中止，并被错误归类为超时。

- **中等与低严重性 Bug**:
    - **配置忽略（P2）**：`#57901` 中 `compaction.model` 配置被忽略；`#37966` 中 `cacheRetention` 配置被 LiteLLM 代理的模型忽略。
    - **环境变量路径嵌套（P2）**：**`#45765`** 报告 `OPENCLAW_HOME` 设置为 `~/.openclaw` 时会导致目录嵌套 `~/.openclaw/.openclaw`。
    - **模型调用报错（P1）**：**`#38327`** 报告在 Google Vertex 模型上出现“Cannot convert undefined or null to object”的错误。

### 6. 功能请求归类

- **平台与部署**：
    - **Linux/Windows 桌面 App** (`#75`)，**预编译 Android APK** (`#9443`)。
    - **AWS 部署指南** (`#13597`)：请求添加 EC2、ECS、Lambda 的云部署文档。
    - **容器环境检测**：PR `#94310` 实现了对容器化环境的检测，并自动禁用不持久的本地更新建议。

- **安全与隐私**：
    - **Masked Secrets 系统** (`#10659`)：提议创建一个机制，让 Agent “用” API 密钥但不 “看” API 密钥，防止泄漏和提示注入。
    - **内存信任标签** (`#7707`)：按来源（用户、网页、三方技能）标记内存条目的信任等级，防止内存投毒。
    - **路径作用域权限系统** (`#39979`)：提议用路径相关的读写执行权限（类似 Unix DAC）替代现有的二进制级执行允许列表。
    - **沙箱可写性** (`#37634`)：要求当 `workspaceAccess` 设为 `none` 时，隔离的工作区目录应为可写，当前状态是只读的。
    - **拒绝列表支持** (`#6615`)：为 exec-approval 系统增加“允许一切，但阻止 X”的拒绝列表模式。

- **用户体验与工作流**：
    - **Slack Block Kit 支持** (`#12602`)。
    - **会话快照/存档** (`#13700`)：需求是能保存和加载会话上下文检查点，支持回滚和分支测试。
    - **UI 中显示工具执行进度** (`#33413`)：在 Slack 状态中动态显示当前正在执行的工具名。
    - **回退批准模式** (`#33975`)：当模型回退时，期望用户能授予明确批准，并显示使用了哪个模型。

- **核心系统优化**：
    - **分层加载启动文件** (`#22438`)，**减少工具 Schema Token 开销** (`#14785`)。
    - **完善的备份/恢复工具** (`#13616`)：请求一个标准化的备份恢复方案。
    - **子Agent完成后的 Hook** (`#22358`)：允许在子Agent完成后自动生成结构化任务报告。

### 7. 用户反馈摘要

- **痛点与不满**：
    - 用户对**跨平台客户端缺失**感到不满，问题 `#75` 和 `#9443` 长期未解决，成为社区最强烈的呼声，`steipete` 称 macOS/iOS/Android 上已有应用，但“Linux 和 Windows 缺失”。
    - 用户对**核心功能的回归问题**感到沮丧。`#62505` 的提交者 `@drpau` 抱怨：“Coding Agent 以前工作良好，现在什么也不做，只发模糊的状态更新和道歉。” 另一用户 `@RafaelLee` 对控制 UI 提出设备身份要求感到困惑和无助。
    - **配置繁多且部分失效**是另一个痛点。`#57901`、`#37966` 等 Issue 表明，部分配置项被系统默默忽略，导致用户预期与实际行为不符。

- **真实使用场景与期望**：
    - 用户期望 Agent 能**安全且成本可控**地运行。`#10659`（Masked Secrets）和 `#22438`（分层加载）背后的用户，都在寻求更精细的成本和安全控制，而不是简单的“开启”或“关闭”。
    - 用户试图**简化部署与运维**。`#9443` 的提出者期望“从 GitHub Release 下载预编译 APK”，而 `#13597` 和 `#13616` 则代表了用户希望将 ClawdBot 投入正式生产环境的强烈需求，包括云部署和灾难恢复。

### 8. 待处理积压

以下是一些长时间未解决或关闭的核心议题与 PR，值得维护者关注：

- **Issue `#75`**：**Linux/Windows Clawdbot Apps**（创建于2026-01-01）。作为社区最热门的需求，至今无实质性进展，风险较高。
- **Issue `#9443`**：**预编译 Android APK**（创建于2026-02-05）。被列为 P2 但长达4个多月未解决。
- **PR `#16544`**：**结构化的 MockFn for harness exports**（创建于2026-02-14）。一个维护者提出的测试重构 PR，已停滞4个月，处于“等待作者”状态。
- **PR `#68389`**：**插件允许列表警告优化**（创建于2026-04-18）。一个等待了很久的 PR，今天刚刚被重新标记为“ready for maintainer look”（待维护者关注），建议尽快审查。
- **Issue `#85103`**：**模型回退链在配额耗尽时未被触发**（创建于2026-05-21）。这是一个影响会话状态的 P1 级Bug，目前为止没有关联的修复 PR，急需处理。
- **Issue `#92201`**：**代理处理 Anthropic Thinking 签名无效**（创建于2026-06-11）。这个影响回复可靠性的问题尚未被关联修复 PR。

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，以下是基于您提供的 2026-06-18 各项目动态生成的横向对比分析报告。

---

## AI 智能体开源项目横向对比日报 — 2026-06-18

### 1. 今日横向概览

今日，四大开源项目均保持了高度活跃的开发与社区互动。OpenClaw 以压倒性的 Issues/PR 数量（各 500 条）凸显其庞大的社区生态，但同时也暴露出大量待处理积压和严重的回归问题。NanoBot 与 Zeroclaw 活动量适中，均聚焦于通道集成、核心稳定性及平台扩展（Windows/移动端）。PicoClaw 虽体量较小，但修复了关键的 SSRF 安全漏洞并解决了 Gemini 多模型兼容性问题，社区对新网关（如 Delta Chat）和加密库替换的关注度上升。**安全性、通道兼容性和用户体验优化是今日共同的技术主线**。

### 2. 各项目活跃度对比

| 项目 | 活跃 Issues | 关闭 Issues | 待合并 PR | 合并/关闭 PR | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 489 | 11 | 440 | 60 | 无 | 活动量级为其他项目 5-10 倍；社区核心诉求（桌面端 App）持续高热。 |
| **NanoBot** | 7 | 3 | 12 | 18 | 无 | 开发者响应迅速，关键 Bug（安装器、代理）修复快。 |
| **Zeroclaw** | 49 | 1 | 40 | 10 | 无 | 聚焦平台扩展与架构演进，桌面交互 RFC 和 WASM 插件 API 讨论深入。 |
| **PicoClaw** | 2 | 2 | 4 | 6 | 1 个 Nightly | 体量最小但修复精准，包含 SSRF 漏洞修复；社区聚焦于安全与去中心化网关。 |

### 3. OpenClaw 与同类对照

- **活动量级与社区规模**：OpenClaw 今日的活动量（1000 条 Issue/PR 更新）远超其他项目，是其 10-20 倍。这体现了其作为“核心参照”的庞大社区规模和问题复杂度，但也说明其面临**严重的积压审查瓶颈**（440 个待合并 PR）。
- **技术侧重点**：OpenClaw 在**核心系统稳定性**上投入巨大，议题涉及会话迁移（P0）、上下文压力感知（XL 级 PR）和信号守护进程竞争条件等深层次架构问题。而 NanoBot 和 Zeroclaw 则更多集中在**通道功能修复**（如 WhatsApp 回执、Discord 重连）和**可观察性**（如 NanoBot 的初始化向导、Zeroclaw 的 ACP 事件可见性）上。
- **社区讨论深度**：OpenClaw 的社区争论更为激烈和宏观，例如“跨平台客户端缺失”（110 条评论）直接关系到项目顶层战略。相比之下，NanoBot 的热点更偏具体使用问题（如 iOS 浏览器 Bug），Zeroclaw 的热点则围绕“桌面交互”和“原生 GitHub 集成”等新特性讨论。

### 4. 共同出现的技术方向

基于今日数据，以下方向获得了多个项目的共同关注：

- **通道与集成**
    - **具体诉求**：增强对 WhatsApp、Telegram、Discord、飞书等主流渠道的支持和 bug 修复，以及对 GitHub、Delta Chat、SimpleX 等开发/去中心化通道的新集成。
    - **涉及项目**：**OpenClaw**（WhatsApp、Telegram、Discord 修复），**NanoBot**（飞书扫码、WhatsApp 回执），**Zeroclaw**（GitHub 原生频道 RFC），**PicoClaw**（Delta Chat PR、SimpleX/Tox 网关请求）。

- **安全加固**
    - **具体诉求**：防止 SSRF 攻击、API 密钥（Secrets）的精细管理、沙箱权限的细化，以及对过时或存在安全隐患的依赖库进行替换。
    - **涉及项目**：**OpenClaw**（Masked Secrets、路径作用域权限），**Zeroclaw**（DNS 安全验证），**PicoClaw**（修复 OneBot SSRF 漏洞、替换 libolm）。

- **配置灵活性与用户引导**
    - **具体诉求**：用户希望能按模型、任务或场景精细化配置行为（如上下文预算、模型切换），同时降低新手配置门槛。
    - **涉及项目**：**OpenClaw**（分层启动文件加载、模型回退链），**NanoBot**（用户友好初始化向导、按模型配置上下文窗口），**Zeroclaw**（配置验证、Windows Shell 选择），**PicoClaw**（无直接匹配，但社区讨论较少）。

### 5. 差异化定位分析

- **OpenClaw**：**全能型企业级 Agent 框架**。功能全面，社区庞大，问题库极深。今日动态显示其在努力解决大规模部署下的会话、安全和成本控制等企业级难题。缺点是复杂度和维护负担极大，用户对关键平台（Linux/Windows 桌面端）缺失的呼声最高。
- **NanoBot**：**快速迭代的轻量级集成助手**。项目聚焦于“快速修复”和“顺手的新功能”，开发者响应积极。从社区反馈看，用户关注的是“开箱即用”的体验、多模型兼容和直观的 UI 交互。其多租户网关请求暗示了向小型团队应用场景发展的潜力。
- **Zeroclaw**：**面向开发者的高度可扩展平台**。从 RFC 的集中讨论（桌面交互、WASM 插件、A2A 发现）可以看出，其目标用户是希望构建和自定义 Agent 功能的开发者，注重生态的可扩展性和架构的先进性。
- **PicoClaw**：**专注特定场景的轻量级安全 Agent**。项目体量最小但针对性强，今日修复了安全问题，且社区明显关注去中心化、轻量级的通信协议（Delta Chat, SimpleX）。其 Nightly 版本发布模式也表明它更灵活，但稳定性风险更高。

### 6. 社区活跃度记录

基于今日的 Issues/PR 数量，将各项目社区活跃度分为三个梯队：

- **极高活跃度生态系统**：**OpenClaw**（1000 条更新）。其社区规模、问题复杂度和争议话题深度远超其他项目。
- **中等活跃度，健康发育**：**Zeroclaw**（90 条更新），**NanoBot**（40 条更新）。项目处于积极的功能迭代和问题修复阶段，社区讨论能有效推动改进。
- **低活跃度，但具特色**：**PicoClaw**（14 条更新）。虽然绝对数量少，但贡献者和维护者之间的交互质量高，能迅速解决关键问题（如 SSRF 漏洞）。

*注：以上活跃度分层仅基于今日数据，不构成对整个项目成熟度的评分。*

### 7. 有证据支撑的观察

1.  **移动端与桌面端体验仍是关键短板**：OpenClaw 的 `#75` 议题（109条评论）和 NanoBot 的 `#4388`（iOS Safari 放大 Bug）分别代表了跨平台桌面端和移动 Web 端的用户强烈不满，这是所有项目提升用户体验时必须优先解决的共性痛点。
2.  **从“能用”到“安全可控”的需求升级显著**：OpenClaw 和 PicoClaw 修复了 SSRF 漏洞，OpenClaw 和 Zeroclaw 提出了更精细的 Secrets 管理和沙箱权限设计。这表明社区已不再满足于 Agent“能运行”，而是要求其在复杂的网络和权限环境中“安全运行”。
3.  **对“轻量级/去中心化”通信协议的兴趣正在萌芽**：PicoClaw 社区明确提出了 Delta Chat、SimpleX、Tox 等邮件/去中心化网关请求，Zeroclaw 亦有相关讨论。这可能预示着部分开发者或极客用户正在探索除主流 IM 之外的 Agent 交互场景。
4.  **配置管理复杂度成为新用户的隐形门槛**：OpenClaw 的“分层启动文件”和 NanoBot 的“用户友好向导”都试图解决配置难的问题。同时，Zeroclaw 和 OpenClaw 的 Issue 均指出配置项被“静默忽略”的问题，表明项目在功能堆叠的同时，有必要加强配置验证和文档透明度。

**今日暂无明确跨项目信号**：今日各项目均未发布稳定版正式版本，且在“标准化的 Agent 间通信协议”（如 A2A）或“统一的 AI 模型路由策略”方面没有出现集中的、跨项目的显著进展。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 NanoBot GitHub 数据生成的 2026-06-18 项目动态日报。

---

# NanoBot 项目动态日报 | 2026-06-18

## 1. 今日活动概览

过去24小时内，项目保持了活跃的开发与社区互动。共处理了 10 条 Issue（其中 7 条为新开或活跃状态，3 条已关闭），并提交了 30 个 Pull Request（其中 18 个已合并或关闭，12 个仍在待合并状态）。社区反馈主要集中在 Bug 修复、用户体验改进以及功能请求上，开发者响应迅速，多个关键 Bug 已得到修复。当日无新版本发布。

## 3. 项目进展

今日有多个重要 Pull Request 被合并或关闭，持续推进了项目的功能完善与稳定性。

- **代理和工具能力增强**：
    - **Mistral 模型支持优化**：PR [#4351](https://github.com/HKUDS/nanobot/pull/4351) 已合并，改进了对 Mistral API 的兼容性，解决了 `reasoning_effort` 参数严格规则和工具调用 `id` 字段格式限制等问题。
    - **工具结果微压缩可配置化**：PR [#4392](https://github.com/HKUDS/nanobot/pull/4392) 提出新增 `microcompactToolResults` 配置项，允许对缓存敏感的场景禁用动态工具结果压缩功能，增加了配置灵活性。
    - **工作区子目录 Git 命令支持**：PR [#4380](https://github.com/HKUDS/nanobot/pull/4380) 修复了在工作区子目录内执行 Git 命令时路径安全检查失败的问题，现已合并。
    - **文件系统写入策略对齐**：PR [#4202](https://github.com/HKUDS/nanobot/pull/4202) 已合并，清晰划分了文件系统工具的只读与可写路径，增强了安全性。

- **通道与集成**：
    - **飞书频道扫码登录**：PR [#4391](https://github.com/HKUDS/nanobot/pull/4391) 为飞书通道新增了扫码创建机器人的 CLI 命令，简化了配置流程。
    - **WhatsApp 已读回执**：PR [#4354](https://github.com/HKUDS/nanobot/pull/4354) 已合并，实现了 WhatsApp 消息的自动已读回执（蓝色勾选）功能。
    - **网络搜索服务新增**：PR [#4350](https://github.com/HKUDS/nanobot/pull/4350) 已合并，集成了 Keenable 作为内置的网页搜索提供商。

- **核心 Agent 与稳定性修复**：
    - **回话历史窗口修复**：PR [#4349](https://github.com/HKUDS/nanobot/pull/4349) 修复了回放窗口历史记录裁剪问题，确保 LLM 回放时不会从用户长对话的中间开始。
    - **身份验证错误修复**：PR [#4322](https://github.com/HKUDS/nanobot/pull/4322) 中提到的 `session_key` 未定义导致 Agent 启动崩溃的问题，已在本次周期内被关闭（该 Issue 标记为已关闭）。

## 4. 社区热点

- **#4360 [CLOSED]：安装器报错“end of file unexpected”**：是过去24小时内评论最多的 Issue（9 条评论）。
    - **诉求**：用户在官方的 Debian:13 Docker 容器中安装时，遇到 `pip: 20: Syntax error: end of file unexpected` 报错，怀疑与 `/root/...` 相关。该问题获得了社区广泛关注，并最终被关闭，意味着问题可能已定位或解决方案在沟通中。
    - **链接**：[#4360](https://github.com/HKUDS/nanobot/issues/4360)

- **#4388 [OPEN]：iOS Safari 点击输入框触发页面放大**
    - **诉求**：用户报告在最新代码（已包含移动端 UI 修复）的情况下，使用 iPhone 上的 Safari 浏览器访问 WebUI 时，点击输入框依然会导致页面自动放大和 UI 变形。这表明移动端适配问题仍需要进一步优化。
    - **链接**：[#4388](https://github.com/HKUDS/nanobot/issues/4388)

- **#4376 [OPEN]：用户友好的初始化向导**
    - **诉求**：有用户（并获得了 1 个 👍）提出，当前的 `nanobot onboard --wizard` 向导需要用户了解过多技术细节，对新手不友好。希望开发一个更简化的流程，帮助非技术用户轻松完成初始配置。
    - **链接**：[#4376](https://github.com/HKUDS/nanobot/issues/4376)

## 5. Bug 与稳定性

- **严重 Bug：安装器在特定环境下的语法错误**
    - **问题**：在 Debian:13 Docker 容器中安装时出现“Syntax error: end of file unexpected”错误，可能导致初始化失败。
    - **状态**：已关闭（[#4360](https://github.com/HKUDS/nanobot/issues/4360)）。

- **回归 Bug：iOS WebUI 点击输入框页面放大**
    - **问题**：即使应用了移动端 UI 修复，iOS Safari 浏览器在点击输入框时仍会触发页面自动放大，影响使用体验。
    - **状态**：活跃（[#4388](https://github.com/HKUDS/nanobot/issues/4388)），暂无关联的修复 PR。

- **Bug：本地模型服务器因代理设置被中断**
    - **问题**：当宿主机配置了 HTTP 代理时，向本地运行的模型服务器（如 Ollama）发送请求会经过代理而失败。
    - **状态**：已由 PR [#4367](https://github.com/HKUDS/nanobot/pull/4367) 修复（已关闭），修复内容为：对本地端点禁用代理，对云端请求则尊重环境代理。关联 Issue: [#4366](https://github.com/HKUDS/nanobot/issues/4366)

- **Bug：Anthropic API 工具调用 ID 格式错误**
    - **问题**：从其他提供商恢复的多轮对话中，工具调用 ID 可能包含 Anthropic API 不接受的字符（如管道符），导致 400 错误。
    - **状态**：已由 PR [#4356](https://github.com/HKUDS/nanobot/pull/4356) 修复（已关闭）。

## 6. 功能请求归类

- **多租户与多实例管理**：
    - **多租户网关**：请求实现一个单实例网关，以管理多个 Agent（[#936](https://github.com/HKUDS/nanobot/issues/936)）。
    - **多实例简化**：请求为普通用户简化多实例管理，例如按文件夹组织，并强化配置隐藏能力（[#4390](https://github.com/HKUDS/nanobot/issues/4390)）。

- **模型与配置灵活度**：
    - **按模型配置上下文窗口**：请求允许为备用模型单独配置 `contextWindowTokens`，以便在主模型和备用模型上下文窗口大小不一的情况下，自动调整提示词长度（[#4389](https://github.com/HKUDS/nanobot/issues/4389)）。
    - **Cron 级别模型/预设切换**：请求实现按计划任务（Cron）切换模型或预设的功能（[#4378](https://github.com/HKUDS/nanobot/issues/4378)）。

- **用户体验优化**：
    - **用户友好向导**：请求构建一个对新手更友好的初始化配置向导（[#4376](https://github.com/HKUDS/nanobot/issues/4376)）。
    - **按需心跳触发**：请求支持从特定频道上下文手动触发心跳，以便于调试 `HEARTBEAT.md` 逻辑，同时避免执行完整流程（[#3437](https://github.com/HKUDS/nanobot/issues/3437)）。

## 7. 用户反馈摘要

- **对安装体验的关注**：用户（[@The-Markitecht](https://github.com/The-Markitecht)）在 [#4360](https://github.com/HKUDS/nanobot/issues/4360) 中详细描述了在 Debian 容器中遇到的安装错误，反映了新用户的环境适应性问题。
- **对移动端体验的迭代诉求**：用户（[@zpljd258](https://github.com/zpljd258)）在 [#4388](https://github.com/HKUDS/nanobot/issues/4388) 中明确指出了移动端 UI 修复的不足，表明用户非常关注移动端的实际使用体验，且对细节的打磨有较高期待。
- **对代理/网络问题的困扰**：用户（[@Struggle1992](https://github.com/Struggle1992)）报告并提供了一个简单的修复方案（忽略代理），解决了因代理设置导致本地模型服务不可用的问题，相关 Issue [#4366](https://github.com/HKUDS/nanobot/issues/4366) 已被关闭，PR [#4367](https://github.com/HKUDS/nanobot/pull/4367) 已被合并。
- **对简化配置流程的呼声**：用户（[@chengyongru](https://github.com/chengyongru)）在 [#4376](https://github.com/HKUDS/nanobot/issues/4376) 中提出了构建新手向导的建议，并得到了其他用户的点赞，反映了社区对降低项目使用门槛的普遍需求。

## 8. 待处理积压

以下为一些存在时间较长、对项目发展有潜在重要性的 Issue 或 PR，建议维护者关注。

- **PR [#4021](https://github.com/HKUDS/nanobot/pull/4021)**：修复 OpenAI Codex 推理项去重问题 (AI-assisted)。该 PR 创建于 2026-05-27，旨在解决多轮对话中因重复发送 reasoning 项导致的 400 错误。PR 目前状态为 OPEN，已有一个多月，值得关注。
- **PR [#4205](https://github.com/HKUDS/nanobot/pull/4205)**：为子代理结果添加邮箱支持。该 PR 提议使用新的内存邮箱协议替代现有的合成入站消息模式，以提高子代理结果处理的可靠性。创建于 2026-06-05，目前仍为 OPEN 状态。
- **Issue [#936](https://github.com/HKUDS/nanobot/issues/936)**：请求添加多租户网关功能。该 Feature Request 创建于 2026-02-21，时间较长，虽然近期 (2026-06-17) 有更新，但尚未有对应的实现 PR，对于管理多个 Agent 的用户来说是一个重要的需求。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目数据生成的 2026-06-18 项目动态日报。

---

# Zeroclaw 项目动态日报 | 2026-06-18

## 今日活动概览

过去24小时，项目活跃度极高，共产生50条Issue更新和50条PR更新。其中，49个Issues处于活跃状态，仅有1个被关闭；PR方面，有40个待合并，10个已被合并或关闭。今日无新版本发布。社区焦点集中在扩展桌面交互、WASM插件API以及改善Windows平台兼容性等方向。同时，一个关键的“画布”存储回归问题（#7563）已通过相应的修复PR（#7678）得以关闭。

## 项目进展

今日有多个重要PR被合并或取得关键进展，主要集中在Bug修复和平台兼容性上。

*   **修复“画布”存储回归问题**：PR [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) 修复了由 #6986 引起的 WebSocket 会话中 `/canvas` 页面空白的问题（对应Issue #7563），现已合并至主分支。该修复确保了WS聊天、ACP会话和Web UI之间的画布状态同步。
*   **修复ACP事件可见性**：PR [#7684](https://github.com/zeroclaw-labs/zeroclaw/pull/7684) 被合并，修复了 ACP 会话中历史记录修剪器和取消操作不显示为可见事件的问题，改善了用户对Agent行为回溯的理解。
*   **配置级联重命名功能**：PR [#7840](https://github.com/zeroclaw-labs/zeroclaw/pull/7840) 作为6/8的系列PR，实现了配置项的级联重命名功能。该PR处于草稿状态，旨在分片审查后按顺序合并。

## 社区热点

今日讨论最热烈的Issues主要集中在三大核心功能扩展上。

1.  **桌面交互与控制**：Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)（6条评论）提出的RFC，旨在为ZeroClaw增加“Computer-use”能力，使Agent能像人一样操作桌面（截图、鼠标键盘事件）。该提议对标OpenAI Codex等工具，反映了社区对Agent自主操控桌面GUI的强烈需求。
2.  **GitHub原生频道**：Issue [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)（6条评论）建议将GitHub作为一等原生频道，允许Agent直接观察和操作仓库的Issues、PR等。这显示出用户希望将Agent深度集成到开发工作流中的诉求，以减少外部胶水代码的维护成本。
3.  **WASM插件API扩展**：Issue [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)（1条评论）提出了为WASM插件增加生命周期Hook订阅能力（`PluginCapability::Hook`），让插件能以沙盒化监听器的方式响应Agent事件。这标志着社区对插件生态的深度设计，旨在实现更强大且安全的自扩展能力。

## Bug 与稳定性

今日报告的Bug主要涉及UI、跨平台兼容性和配置管理，部分已有对应的修复PR。

*   **严重级别 - S1 (工作流阻塞)**：
    *   Issue [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) **（已关闭）**：WebSocket会话 (`/ws/chat`) 使用`canvas`工具后，Web UI的`/canvas`页面显示空白。该问题已在PR [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) 中得到修复并合并。

*   **严重级别 - S2 (行为降级)**：
    *   Issue [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737)：批准操作归因依赖于全局侧信道（`Channel::last_decision_channel()`），并发批准可能导致归因错误。目前暂无关联修复PR。
    *   Issue [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698)：Fluent 本地化文件（如 `zh-CN`）落后于英文源文件，部分语言版本的翻译缺失。
    *   Issue [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)：Agent对触发其运行的Cron任务内容缺乏上下文感知。

*   **其他已修复的严重问题**：
    *   PR [#7853](https://github.com/zeroclaw-labs/zeroclaw/pull/7853)：修复了Windows平台上 `zeroclaw update` 命令彻底无法工作的Bug，原因是Windows锁定了正在运行的进程文件，导致`swap_binary`失败。该PR还强化了整个更新管道的健壮性。

## 功能请求归类

今日涌现大量功能请求，主要集中在扩展平台能力、提升用户体验和加强平台安全性上。

*   **扩展平台能力**：
    *   **桌面交互**：[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: 支持桌面屏幕交互和输入控制。
    *   **GitHub 集成**：[#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) 将GitHub恢复为原生频道。
    *   **WASM 插件生命周期**：[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) RFC: WASM 插件生命周期钩子订阅。
    *   **定时任务路由**：[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC: 通过编排器消息管道路由定时任务。
    *   **Agent 评估工具**：[#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) 请求支持“重放”与“实时”模式的 Agent 评估监控工具。
    *   **图片生成 Provider**：[#7875](https://github.com/zeroclaw-labs/zeroclaw/issues/7875) 建议增加通过RunPod/ComfyUI进行图片生成的功能。
    *   **A2A 发现接口**：PR [#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763) 为v0.8.2准备了A2A Agent发现接口，允许Agent在网关处被目录化发布。

*   **提升用户体验与配置灵活性**：
    *   **Discord 富交互**：PR [#7844](https://github.com/zeroclaw-labs/zeroclaw/pull/7844) 为Discord频道增加了类型化的斜杠命令选项和分块的交互后续。
    *   **回复意图预检查**：[#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) 让频道回复意图预检查使用更小、更快的模型，并附带超时和性能日志，避免阻塞主模型。
    *   **Slack 线程上下文**：[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) 在首次提到Bot时，从Slack API反填历史线程上下文。
    *   **定时任务通知模式**：[#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) 为Cron任务添加“仅发送最终助理消息”的模式。
    *   **Windows Shell 配置**：[#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) 讨论是否将cmd.exe、PowerShell或Git Bash设为Windows的默认Shell，并使其可配置。
    *   **配置验证**：[#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) 希望快速启动时能验证`config.toml`，并对与Provider不兼容的设置发出警告。
    *   **安全策略热更新**：[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) 请求在不重启守护进程的情况下应用安全策略和频道配置更新。
    *   **Secret 输入反馈**：PR [#7856](https://github.com/zeroclaw-labs/zeroclaw/pull/7856) 在CLI的Secret密码输入后增加确认反馈，提高用户体验。
    *   **模型路由器**：[#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) 希望为llamacpp提供商增加模型路由器，以实现本地模型的快速切换。

*   **维护与基础架构**：
    *   **CI 构建缓存**：[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) 计划改进 Rust 构建缓存和CI关键路径，以缩短CI时间（当前约15-20分钟）。
    *   **日志轮转**：[#7878](https://github.com/zeroclaw-labs/zeroclaw/issues/7878) 为`zeroclaw-log`的JSONL持久化增加基于大小/日期/保留策略的日志轮转。
    *   **DNS 安全**：PR [#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902) 为`http_request`工具增加了DNS验证，以防止SSRF攻击。

## 用户反馈摘要

从今日的Issues中，可以提炼出一些真实的用户痛点和需求场景。

*   **对原生集成的渴望**：用户`@mits87`在Issue [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) 中详细描述了当前集成GitHub需要“自定义胶水代码（webhook解析、认证、事件路由、去重）”，并希望获得“一致的频道接口”，清晰表达了降低集成复杂度的需求。
*   **配置验证的痛点**：用户`@tidux`在Issue [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) 中指出了为新用户配置`llamacpp`提供商时的挫折感：“当他们发现配置文件看起来不错但实际却无法正常工作时，往往直到运行时报错才能察觉”，并认为“能提前预警这些问题会是巨大的加分项”。
*   **对本地化和翻译质量的关注**：用户`@Audacity88`在Issue [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) 中通过代码库检查，指出`zh-CN`本地化文件存在缺失（如缺少`tools.ftl`），并且对键的数量进行了统计，反映了非英语用户对翻译完整性和及时性的关注。
*   **对特定平台体验的追求**：用户`@NiuBlibing`在Issue [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) 中提出Windows平台的Shell选择问题，用户场景是“`cmd.exe`功能较弱，输出格式不稳定”，因此希望评估PowerShell或Git Bash，体现了Windows用户追求与Unix-like平台一致体验的诉求。

## 待处理积压

以下是一些创建时间较早或讨论度较高，但未见有直接PR响应的关键Issue，建议维护团队关注。

*   **[#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) [Feature]：将GitHub作为原生频道**：创建于2月27日，至今已近4个月，评论6条。这是一个重要的集成需求，但似乎仍停留在讨论阶段。
*   **[#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) [Bug]：Cron和心跳投递仍发送“NO_REPLY”哨兵文本**：同样创建于2月27日，是一个非常影响用户体验的Bug，会导致频道中出现无意义的“NO_REPLY”消息，至今尚未关闭。
*   **[#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) [Bug]：Fluent 本地化文件落后于英文源文件**：这是一个关于项目健康和全球化支持的持续性问题，虽然被标记为`status:in-progress`，但似乎进展缓慢。
*   **[#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) [Feature]：Agent 评估监控工具**：创建于6月1日，这是一个对框架成熟度至关重要的功能，目前暂无关联PR，需要评估其优先级和规划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-06-18

## 1. 今日活动概览

过去 24 小时（截至 2026-06-18 00:00 UTC），PicoClaw 仓库共更新 4 个 Issues（新开 2 个，关闭 2 个）和 10 个 Pull Requests（新开/待合并 4 个，已合并/关闭 6 个）。同时发布了一个 Nightly 版本 `v0.3.0-nightly.20260617.a16a1e15`。核心变化包括：修复了 Gemini 3.5 Flash 工具调用兼容性问题、修补了 OneBot 媒体 URL 导致的 SSRF 漏洞、社区提交了针对搜狗搜索解析失效、Sub-turn 重复消息等多项修复，以及新增 Delta Chat 网关和 NEAR AI Cloud 提供商的 PR 持续推进中。

## 2. 版本发布

- **nightly**: Nightly Build
  - 版本号：`v0.3.0-nightly.20260617.a16a1e15`
  - 说明：自动构建的 Nightly 版本，可能不稳定，仅供测试。
  - 完整变更日志：[v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
  - 注意：本次 Nightly 构建包含了当日合并的多项修复（如 OneBot SSRF、Gemini 兼容等），但未标注破坏性变更。生产环境建议等待正式发布。

## 3. 项目进展 — 今日合并/关闭的重要 PR

- **☑️ 修复 Gemini 3.5 Flash 工具调用失败**
  PR [#3136](https://github.com/sipeed/picoclaw/pull/3136)（作者 @ZOOWH）在工具调用请求体中同时设置 `thoughtSignature`（camelCase）和 `thought_signature`（snake_case）两个字段，解决了 Gemini 2.5（接受 camelCase）和 3.5 Flash（要求 snake_case）的兼容性问题。对应的 Issue [#3111](https://github.com/sipeed/picoclaw/issues/3111) 已关闭。

- **☑️ 修复 OneBot SSRF 漏洞**
  PR [#3140](https://github.com/sipeed/picoclaw/pull/3140)（作者 @lc6464）阻止 OneBot 通道从攻击者控制的 `message[].data.url` 字段向内网/本地地址发起 fetch，复用已有的 HTTP 守卫逻辑。对应安全 Issue [#3070](https://github.com/sipeed/picoclaw/issues/3070) 已关闭。

- **☑️ 更新搜狗搜索 HTML 解析**
  PR [#3139](https://github.com/sipeed/picoclaw/pull/3139)（作者 @SiYue-ZO）修正因搜狗 WAP 搜索结果页结构变化（如 class 属性加引号、clamp3→clamp2）导致的解析失败，使 web_search 工具恢复正常。

- **☑️ 修复 Web UI 会话历史显示不全**
  PR [#2990](https://github.com/sipeed/picoclaw/pull/2990)（stale，作者 @yuxuan-7814）修正 `readJSONLSession()` 函数误传 `meta.Skip` 导致只能看到最后一条用户消息的问题，现可正确显示完整会话历史。

- **☑️ 新增 NEAR AI Cloud 提供商**
  PR [#2917](https://github.com/sipeed/picoclaw/pull/2917)（作者 @PierreLeGuen）已合并，新增 OpenAI 兼容的 NEAR AI Cloud 提供商，支持 TEE 模型、模型列表获取等。

- **☑️ 添加韩语 `리뷰기능 추가`**
  PR [#3138](https://github.com/sipeed/picoclaw/pull/3138)（作者 @AhatLi）已合并，该 PR 内容为“添加评论功能”，具体实现细节需查看代码。

## 4. 社区热点

- **🔥 最受关注的 Issue：使用 vodozemac 替换 libolm**
  [#3088](https://github.com/sipeed/picoclaw/issues/3088)，标签 `help wanted, priority: high`，获得 2 个 👍，1 条评论。用户认为 libolm 已不受维护且存在安全问题，提议使用官方替代库 vodozemac，并希望设为编译时可选项。该需求反映了社区对端到端加密依赖安全性的高度关注，但目前尚无维护者公开回应或分配负责人。

- **🔥 讨论活跃的 PR：Delta Chat 网关**
  [#3063](https://github.com/sipeed/picoclaw/pull/3063)（作者 @trufae）仍处于开放状态，这是一个新功能 PR，为 PicoClaw 添加 Delta Chat 邮件网关支持。虽然未获得大量评论，但结合 Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) 对 SimpleX/Tox 网关的请求，可见社区对去中心化/轻量级通信协议接入的兴趣在增长。

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 |
|----------|------------|------|------|
| **严重** | [#3070](https://github.com/sipeed/picoclaw/issues/3070) | OneBot 入站媒体 URL 未作地址验证，可导致 host 侧任意 fetch（SSRF 漏洞） | 已关闭，PR [#3140](https://github.com/sipeed/picoclaw/pull/3140) 已修复并合并 |
| **中** | [#3111](https://github.com/sipeed/picoclaw/issues/3111) | Gemini 3.5 Flash 执行工具时返回 400，因缺少 `thought_signature` 字段 | 已关闭，PR [#3136](https://github.com/sipeed/picoclaw/pull/3136) 已修复 |
| **中** | [#3141](https://github.com/sipeed/picoclaw/pull/3141) | Brave 搜索 API 返回空结果时缺乏诊断日志，可能导致静默失败 | 开放，待合并 |
| **低** | [#3142](https://github.com/sipeed/picoclaw/pull/3142) | spawn sub-turn 中 `ToolResult` 的 `ForUser` 字段未清除，导致异步子代理完成时重复推送消息 | 开放，待合并 |
| **低** | [#3139](https://github.com/sipeed/picoclaw/pull/3139) | 搜狗搜索 HTML 结构变更导致解析失败 | 已合并 |

---

## 6. 功能请求归类

- **端到端加密改进**
  [#3088](https://github.com/sipeed/picoclaw/issues/3088) 提议用 vodozemac 替换 libolm，这是官方推荐的替代库，关联高优先级标签。目前无对应 PR。

- **新消息网关**
  - [#3093](https://github.com/sipeed/picoclaw/issues/3093)：用户请求 SimpleX / Tox 网关。
  - [#3063](https://github.com/sipeed/picoclaw/pull/3063)：Delta Chat 网关 PR 开放中。
  - 说明：社区对除常见 IM 协议之外的轻量/去中心化网关有明确兴趣，但维护者尚未集中回应。

- **技能安装类型断言安全**
  [#3092](https://github.com/sipeed/picoclaw/pull/3092) 修复 `skills_install.go` 中 `ok` 检查缺失问题，避免非字符串 version 和非布尔 force 参数静默失效。该 PR 目前处于 `stale` 状态，待 review。

## 7. 用户反馈摘要

- 用户 @pbsds 在 [#3088](https://github.com/sipeed/picoclaw/issues/3088) 中明确指出 libolm“unmaintained and insecure”，并提议使用 vodozemac，强调编译时可选性。这代表了部分熟悉 Matrix 生态的开发者对安全依赖的担忧。
- 用户 @Damian-o2 在 [#3093](https://github.com/sipeed/picoclaw/issues/3093) 简短请求“I need gateway SimpleX or Wire or Tox.”，未提供更多细节，表明此类需求目前停留在意愿表达阶段。
- 用户 @Giordano10 在 [#3111](https://github.com/sipeed/picoclaw/issues/3111) 反馈 Gemini 3.5 Flash 工具执行失败，并指出本地脚本可正常运行，说明后端 schema 适配不及时。该问题已通过 PR #3136 解决。

## 8. 待处理积压

以下 Issue / PR 已长期未响应或处于 `stale` 状态，提醒维护者关注：

| 项目 | 链接 | 最后更新 | 备注 |
|------|------|----------|------|
| `[help wanted, priority: high]` vodozemac 替换 libolm | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 2026-06-17 | 高优先级，无分配人 |
| SimpleX/Tox 网关请求 | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 2026-06-17 | 用户等待回应 |
| `stale` 技能安装类型安全修复 | [#3092](https://github.com/sipeed/picoclaw/pull/3092) | 2026-06-17 | 已有代码，待 Review |
| `stale` Delta Chat 网关 | [#3063](https://github.com/sipeed/picoclaw/pull/3063) | 2026-06-17 | 新功能 PR，长时间未合并 |

</details>