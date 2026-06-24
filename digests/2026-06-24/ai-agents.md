# OpenClaw 生态日报 2026-06-24

> Issues: 187 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-24 00:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是基于 OpenClaw 项目 GitHub 数据生成的 2026-06-24 项目动态日报。

---

## OpenClaw 项目日报 ｜ 2026-06-24

### 1. 今日活动概览

过去24小时，OpenClaw 项目保持高度活跃，共产生 **187 条 Issue 更新**（其中新开/活跃 141 条，关闭 46 条）和 **500 条 PR 更新**（其中待合并 472 条，已合并/关闭 28 条）。社区讨论焦点集中在会话数据可靠性与跨模型兼容性上，多个涉及会话状态丢失和消息传递失败的严重问题持续获得高关注。项目今日无新版本发布，但开发者提交了大量修复性 PR，尤其在子代理（subagent）完成交付、会话锁释放和运行时稳定性方面。同时，PR 积压情况依然显著，待合并数量高达 472 条，维护者审核速度面临压力。

### 2. 版本发布

无

### 3. 项目进展

今日无 PR 被合并。高评论数 PR 均处于打开状态，等待审核或作者更新。不过，多个与严重 bug 相关的已关闭 Issue 暗示了近期的修复工作，例如：
- 涉及 `acpx` 运行时类型错误、Windows 平台 `spawn EINVAL`、以及 NVIDIA Build 提供者流式中断等问题的 Issue 已关闭，可能已有修复 PR 与之对应。

### 4. 社区热点

过去24小时内，有几个 Issue 和 PR 引发了广泛讨论，反映出用户对核心会话可靠性、性能监控和特定平台兼容性的高度关注。

- **#88838 - [Diamond Lobster] Core session/transcript SQLite migration via accessor seam**
  链接：[https://github.com/openclaw/openclaw/issues/88838](https://github.com/openclaw/openclaw/issues/88838)
  **讨论: 35 条评论**
  - **诉求分析**：该 Issue 讨论了通过访问器机制将核心会话与转录数据迁移至 SQLite 的后端架构变更。35条的高讨论量表明这是一个复杂且关键的基础设施改造，社区和开发者对其实现路径、对现有会话的影响以及回滚策略存在大量技术探讨。

- **#96148 - Track iMessage source-reply latency instrumentation**
  链接：[https://github.com/openclaw/openclaw/issues/96148](https://github.com/openclaw/openclaw/issues/96148)
  **讨论: 17 条评论**
  - **诉求分析**：用户明确要求追踪 iMessage 源回复的延迟。这反映出社区对特定渠道（iMessage）的实时性有较高要求，用户希望通过标准化的性能监控手段量化并改进迟延问题，而非零散的临时补丁。

- **#92201 - [Diamond Lobster] Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic)**
  链接：[https://github.com/openclaw/openclaw/issues/92201](https://github.com/openclaw/openclaw/issues/92201)
  **讨论: 14 条评论**
  - **诉求分析**：关于 Anthropic 模型 `thinking` 签名的间歇性无效问题。这表明在使用嵌入运行器和 Anthropic 模型的复杂交互场景中，序列化与反序列化的兼容性问题是社区的主要痛点，直接导致回话打断和回复失败。

- **#90991 - Cron scheduled trigger contaminates global runtime state**
  链接：[https://github.com/openclaw/openclaw/issues/90991](https://github.com/openclaw/openclaw/issues/90991)
  **讨论: 14 条评论（已关闭）**
  - **诉求分析**：该 Issue 分析并定位了一个严重问题：定时触发任务会污染全局运行时状态，导致系统过载。尽管已关闭，但14条评论显示其诊断过程复杂，社区对这类影响系统整体稳定性的边缘情况具有高度敏感性。

### 5. Bug 与稳定性

今日报告了多个影响会话状态、消息丢失和安全性的严重 Bug，部分已有相关修复 PR。

#### 严重 (P1/影响: session-state, message-loss, crash-loop)

- **#92201 - Anthropic thinking 签名无效 (已分析，待修复)**：[链接](https://github.com/openclaw/openclaw/issues/92201)
  嵌入运行器在重放 Anthropic 的 `thinking` 块时签名无效，导致回复失败。
- **#92043 - 180s 压缩超时 (已分析，待决策)**：[链接](https://github.com/openclaw/openclaw/issues/92043)
  压缩超时是单个全局计时器，真正常耗时的压缩操作每次都会失败。
- **#92460 - 孤立 Cron 补全交付失败 (已分析，待修复)**：[链接](https://github.com/openclaw/openclaw/issues/92460)
  特定路径下，cron 任务的补全完成消息未能正确携带交付通道。
- **#94228 - Anthropic thinking 历史块回放导致 400 错误 (待复现)**：[链接](https://github.com/openclaw/openclaw/issues/94228)
  在多轮工具调用中重放历史 `thinking` 块会导致永久性故障。
- **#92057 - 多会话/多代理负载下网关性能缓慢 (待复现)**：[链接](https://github.com/openclaw/openclaw/issues/92057)
  高并发场景下网关出现延迟和超时。
- **#94251 - Ollama 远程提供者流式传输未消费 (待复现)**：[链接](https://github.com/openclaw/openclaw/issues/94251)
  使用远程 Ollama 提供者时，session 停留在 `model_call:started` 状态。
- **#95833 - 子代理中止未释放 `.jsonl.lock` 锁 (已分析，待决策)**：[链接](https://github.com/openclaw/openclaw/issues/95833)
  子代理超时后被中止，但文件锁未释放，导致整个 session 永久损坏。
- **#90288 - 非 Anthropic 模型输出工具调用为纯文本 (待复现)**：[链接](https://github.com/openclaw/openclaw/issues/90288)
  兼容层下的模型未能输出结构化的 `tool_use` 块。

#### 重要 (P1/P2/影响: auth-provider, crash-loop, data-loss)

- **#94032 - exec 无法访问私有局域网 (待安全审查)**：[链接](https://github.com/openclaw/openclaw/issues/94032)
  通过 `exec` 执行的命令无法访问私有局域网主机，但同一账户的 GUI 应用可以。
- **#93465 - Windows 平台 ACPX 运行时启动失败 (已关闭)**：[链接](https://github.com/openclaw/openclaw/issues/93465)
  ACP 运行时在 Windows 上因 `spawn EINVAL` 完全无法使用。
- **#94939 - 6.x 状态迁移导致频道会话数据库为空 (待复现)**：[链接](https://github.com/openclaw/openclaw/issues/94939)
  升级后，部分频道的会话 SQLite 数据库未被正确填充，导致消息发送失败。

### 6. 功能请求归类

社区提出的功能需求主要集中在改善兼容性、用户体验和系统可观测性。

| 类别 | 需求描述 | Issue/PR 链接 | 相关 PR |
| :--- | :--- | :--- | :--- |
| **UI/UX** | 为 WebChat/Control UI 添加 LaTeX 公式渲染支持。 | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 无 |
| **UI/UX** | 为 WebChat 增加 `/label` 或 `/new` 命令用于会话命名。 | [#93422](https://github.com/openclaw/openclaw/issues/93422) | 有 |
| **兼容性** | 允许为 exec 工具配置 shell 覆盖（例如 Windows 上替换 PowerShell）。 | [#49931](https://github.com/openclaw/openclaw/issues/49931) | 无 |
| **兼容性** |支持将压缩（compaction）提供者配置为 MCP 服务器。 | [#96156](https://github.com/openclaw/openclaw/issues/96156) | 无 |
| **系统管理** | 允许代理在运行时创建/修改自己的定时任务，且具有防伪造的出处记录。 | [#71712](https://github.com/openclaw/openclaw/issues/71712) | 无 |
| **系统管理** | 添加全局 SSRF 策略配置，统一管理私有网络访问规则。 | [#93068](https://github.com/openclaw/openclaw/issues/93068) | 无 |
| **可观测性** | 工具执行失败时，应向用户呈现失败原因和重试确认信息。 | [#46548](https://github.com/openclaw/openclaw/issues/46548) | 无 |
| **集成** | 升级 Cloudflare AI Gateway 提供者到新的 REST API。 | [#91945](https://github.com/openclaw/openclaw/issues/91945) | 无 |

### 7. 用户反馈摘要

从 Issue 评论和描述中，可以提炼出以下真实用户痛点和使用场景：

- **“无法排查的失败”**：多个 Issue（如 [#46548](https://github.com/openclaw/openclaw/issues/46548)、[#86034](https://github.com/openclaw/openclaw/issues/86034)）指出，当工具调用或消息发送失败时，用户只能看到“failed”或“Something went wrong”，无法获得具体原因，这严重阻碍了问题诊断和系统使用。用户希望看到明确的失败原因（如文件修改冲突、网络错误）。
- **“不可预测的重置”**：`stuck-session` 恢复机制（[#88870](https://github.com/openclaw/openclaw/issues/88870)）和压缩（[#92043](https://github.com/openclaw/openclaw/issues/92043)）在不合适的时机打断长时间运行的任务（如带深度思考的代码审查），用误导性的信息（如“被用户取消”）中断工作流。用户需要一个更智能、能感知任务是否在进行的生命周期管理。
- **“配置的复杂性”**：从 Discord 提及别名处理（[#90643](https://github.com/openclaw/openclaw/issues/90643)）到 SSRF 策略（[#93068](https://github.com/openclaw/openclaw/issues/93068)），系统高度可配置，但部分配置行为的副作用难以预测（如 `mentionAliases` 会影响到代码块内的内容）。用户希望配置的边界更清晰、副作用更可控。
- **“跨组件状态不一致”**：多位用户遇到了状态不一致的问题，例如，子代理完成但交付失败（[#92076](https://github.com/openclaw/openclaw/issues/92076)）、自动更新后进程使用旧模块（[#85844](https://github.com/openclaw/openclaw/issues/85844)）、以及模型切换后上下文丢失（[#79047](https://github.com/openclaw/openclaw/issues

---

## 横向生态对比

好的，这是基于您提供的四个开源项目日报数据，生成的横向对比分析报告。

---

## 横向对比分析报告：AI智能体与个人AI助手开源生态（2026-06-24）

**报告日期**: 2026-06-24
**数据来源**: OpenClaw, NanoBot, Zeroclaw, PicoClaw 项目 GitHub 动态

### 1. 今日横向概览

今日，四个项目均保持活跃，但活动量级和焦点差异显著。**OpenClaw** 社区讨论最为激烈，集中在会话数据可靠性（如 `thinking` 签名无效、SQLite 迁移）和严重 Bug 上，但其 PR 合并速度滞后。**Zeroclaw** 和 **NanoBot** 在修复与安全、架构一致性和 Bug 修复上投入了大量精力，表现出较强的工程执行力。**PicoClaw** 项目规模较小，但修复了多个特定平台的兼容性 Bug，并积极引入新功能。共同趋势是，**安全加固**（如 SSRF 防护）和**跨组件状态一致性**（如工具在 TUI 与 API 间不可见）成为了跨项目的普遍关注点。

### 2. 各项目活跃度对比

| 项目 | 今日 Issues 更新 (新开/活跃/关闭) | 今日 PR 更新 (待合并/已合并关闭) | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 187条 (141新开/活跃，46关闭) | 500条 (472待合并，28已合并关闭) | 无 | 社区讨论热度最高，PR积压严重，多个严重Bug待修复。 |
| **NanoBot** | 11条 (7新开/活跃，4关闭) | 39条 (32待合并，7已合并关闭) | **v0.2.2** | 发布新版本带来重大功能介绍，但也引入回归Bug。修复工作集中在Telegram和WebUI。 |
| **Zeroclaw** | 33条 (20新开/活跃，13关闭) | 50条 (31待合并，19已合并关闭) | 无 | 修复与合并效率高，重点在安全加固和架构统一（如合并crate）。 |
| **PicoClaw** | 3条 (2新开，1关闭) | 17条 (11待合并，6已合并关闭) | 无 | 项目规模最小，今日修复了特定模型与通道的Bug，有多个功能PR待合并。 |

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与其他三个项目在多个维度上表现出显著差异：

- **活动量与讨论深度**：OpenClaw 的 Issue 和 PR 数量级是其他项目的数倍至数十倍，社区讨论的复杂性也更高（如 #88838 的 SQLite 架构变更讨论）。这反映了其作为核心参照项目的体量和影响力，但也暗示了更高的维护与审查压力。
- **技术重点差异**：
    - **OpenClaw** 的重点在于**基础设施可靠性**（会话状态迁移、压缩超时、运行时稳定）和**跨模型兼容性**（Anthropic 签名问题）。
    - **NanoBot** 和 **Zeroclaw** 则更聚焦于**新平台集成、渠道兼容性**（Telegram、Matrix）以及**用户体验打磨**（PWA、快捷键冲突）。
    - **PicoClaw** 专注于解决特定模型的工具调用解析问题（Doubao Seed）和特定客户端（Android/Termux）的稳定性。
- **社区讨论焦点**：OpenClaw 社区讨论多围绕**架构决策和深层技术问题**（如访问器 seam、全局状态污染）。相比之下，其他项目的社区讨论更直接，多集中在**具体 Bug 修复和功能实现**上。

### 4. 共同出现的技术方向

今日数据中，以下技术方向在多个项目中被明确提及：

- **模型/提供者兼容性**：多个项目面临模型兼容挑战。
    - **OpenClaw**: 报告了 Anthropic `thinking` 签名在重放时无效 (#92201)，以及 Ollama 远程提供者流式传输失败 (#94251)。
    - **PicoClaw**: 修复了 Doubao Seed 模型工具调用泄露问题 (#3154)。
    - **NanoBot**: 集成了新的模型提供商 (Kimi Coding, OpenCode) 并修复了其工具调用 ID 冲突 Bug (#4474)。
    - **共同诉求**: 社区期望系统能更稳定地处理不同模型返回的异质化数据（如 `thinking` 块、工具调用格式），保证会话的连续性和正确性。

- **跨组件状态一致性**：各组件间状态不一致导致的Bug频发。
    - **Zeroclaw**: MCP工具在TUI会话中不可见 (#8193)，而 API 正常。
    - **PicoClaw**: 连续提问时，AI重复执行前一个任务 (#3159)，暗示了会话上下文状态管理问题。
    - **OpenClaw**: 子代理完成但交付失败 (#92076)，以及跨组件状态不一致的用户反馈。
    - **共同诉求**: 用户期望在所有交互界面（TUI、WebUI、API、渠道）获得一致、可预测的AI行为。

- **平台兼容性与性能**：特定平台（Windows, 移动端）的问题持续出现。
    - **OpenClaw**: Windows 平台 `spawn EINVAL` 运行时崩溃 (#93465)。
    - **NanoBot**: iOS Safari 输入框自动缩放 (#4471)。
    - **PicoClaw**: 启动报告 Android/Termux 网关崩溃 (#3164)。
    - **共同诉求**: 跨平台部署的稳定性与原生体验是用户的基础要求。

### 5. 差异化定位分析

基于今日数据，可以观察到这些项目的差异化定位：

- **OpenClaw (核心底座)**：定位为最底层的核心框架与运行时。其技术讨论深度最高，涉及架构重构和核心可靠性。目标用户应为高级开发者、系统集成商。
    - **功能侧重**：会话数据管理、运行时稳定性、跨模型兼容层。
    - **架构特征**：高度模块化与可配置，但组件间耦合复杂，导致状态一致性问题突出。

- **Zeroclaw (企业/本地ISV)**：定位为面向智能体环境与本地硬件的安全、可扩展平台。其在安全插件（WASM沙箱）和硬件访问（GPIO）上的投入，以及“统一命令注册表”的架构提议，都指向了需要强安全隔离和自定义能力的场景。
    - **功能侧重**：WASM插件系统、硬件控制、安全策略管理、TUI/CLI工具链。
    - **架构特征**：强调安全隔离（插件沙箱）和本地自治，架构分层明确，但多个独立路径（TUI与API）的一致性仍是痛点。

- **NanoBot (用户友好型助手)**：定位为追求开箱即用、快速集成的个人AI助手。其版本发布频繁，快速迭代用户体验（PWA、Dream 功能），并积极适配新模型提供商。
    - **功能侧重**：多平台集成（Telegram, WebUI）、耐久性（对话保存）、易用性（PWA、命令简化）。
    - **架构特征**：追求快速迭代和功能堆叠，版本发布引入回归是主要风险。

- **PicoClaw (轻量/边缘AI)**：定位为轻量级、专注于特定场景（如移动端、低成本模型）的解决方案。处理 Doubao Seed 模型和 Android/Termux 崩溃，显示其目标场景明确。
    - **功能侧重**：特定商业模型（Doubao）、低成本/本地模型集成、移动端部署（Termux）。
    - **架构特征**：项目规模小，决策链路短，但功能覆盖和社区活跃度相对较低。

### 6. 社区活跃度记录

基于今日的Issue/PR数量和发布记录，进行活跃度分层：

- **极高活跃度**: **OpenClaw**。其 Issue 和 PR 数量级远超其他项目，社区讨论深度与广度最高。但高活跃度伴随高积压。
- **高度活跃**: **Zeroclaw**。虽然数量级较小，但PR合并率高，功能推进和Bug修复速度快，同时有架构级RFC提出，属于高效型活跃。
- **较活跃**: **NanoBot**。发布了新版本并围绕此产生大量讨论和Bug报告，社区跟进迅速。
- **中等活跃**: **PicoClaw**。活动数量有限，但专注于解决特定问题，节奏稳定。

### 7. 有证据支撑的观察

1.  **安全与架构已成为当前生态基础设施级别的焦点**：今日同时有多个项目（Zeroclaw, PicoClaw）提交了与安全强相关的PR（如SSRF防护、拒绝跨站请求、WASM环境变量白名单），同时Zeroclaw和OpenClaw均出现了架构变更的讨论（合并crate、统一命令注册表）。这表明，随着核心功能的逐步完善，社区注意力正在向更深层次的基础设施问题转移。

2.  **“多模型兼容”是普遍的持续挑战，而非特例问题**：从OpenClaw的Anthropic签名问题到NanoBot的Kimi Coding ID冲突，再到PicoClaw的Doubao Seed泄露，几乎所有主流项目都报告了与特定模型提供商相关的问题。这表明，抽象层虽然存在，但模型的特殊行为（如非标准响应、流式中断）仍然是导致系统不稳定和用户困惑的主要来源。

3.  **“用户期望一致性”是跨项目的最强共识**：无论是Zeroclaw用户遇到的“MCP工具在TUI不可见”，还是OpenClaw用户抱怨的“子代理完成但无反馈”，都指向了同一个核心诉求：AI助手的内部状态和行为在所有交互界面（UI、API、频道）上应当是统一和可预测的。今日暂无项目能完全解决此问题，但已有多个项目（如Zeroclaw的#7929）开始从架构层面着手解决。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是为您生成的 NanoBot 项目 2026-06-24 动态日报。

---

# NanoBot 项目日报 - 2026-06-24

## 今日活动概览
NanoBot 项目在6月23日至24日期间保持高度活跃。共收到 **11 条 Issue 更新**（新开/活跃 7 条，关闭 4 条），以及 **39 条 PR 更新**（待合并 32 条，已合并/关闭 7 条）。核心活动集中在 **Bug 修复**（特别是新版本 v0.2.2 引入的 Telegram 和 WebUI 问题）、**新 Provider 集成**（OpenCode、Kimi Coding）以及 **PWA 支持** 等功能开发上。昨日发布的 **v0.2.2 版本** 带来了显著的耐久性改进，但也引发了部分回归问题。

## 版本发布
### v0.2.2 版本更新
- **链接**: [v0.2.2 Release](https://github.com/HKUDS/nanobot/releases/tag/v0.2.2)
- **核心内容**: 此版本合并了 140 个 PR，新增 21 位贡献者，主要改进方向为 **耐久性 (Durability)**。WebUI 的对话记录现在被分段存储，而非单一脆弱文件；分叉对话的消息保存更可靠；活跃对话的保存更持久。
- **潜在问题**: 根据今日的 Issue 报告，该版本引入了 **Telegram 显示 Bug**（换行符不生效、消息闪烁，参考 #4470）以及 **WebUI 中 `<thinking/>` 标签渲染为可见文本** 的问题（参考 #4465）。

## 项目进展
今日共有 **7 项 PR 被合并或关闭**，以下为关键合并项：
- **[关闭] feat(webui): add PWA support** (#4458, #4474): 贡献者 `zpljd258` 提交的 PWA 支持 PR 后续版本 (#4480) 已优化并重新打开。原 PR #4458 虽然标记为 `invalid` 但相关改进被采纳，同时并行的针对 **Kimi Coding** 端点的 `tool_use` ID 去重修复 PR (#4474) 已被合并。
- **[关闭] test(exec): cover git commands in workspace subdirectories** (#4393): 作者 `yu-xin-c`，为 `git` 命令在子目录下的执行增加了端到端回归测试，确保生产行为不变。
- **[关闭] fix(context): fall back to default memory bootstrap** (#4387): 修复了当项目缺少 `SOUL.md` 和 `USER.md` 文件时的回退逻辑，确保能正常加载默认内存引导。
- **[关闭] [CI/CD] test(mcp): use resolvable timeout regression URL** (#4417): 改进了 MCP 超时回归测试的稳定性，避免依赖可能无法解析的主机名。

## 社区热点
- **[热点 Issue] #2298: Breaking endless tool calling loops** [OPEN]
  - **链接**: https://github.com/HKUDS/nanobot/issues/2298
  - **热度**: 5条评论，创建于2026-03-20，至今仍保持活跃。
  - **诉求**: 用户反映使用小型/本地模型时，NanoBot 会进入无限的工具调用循环。核心诉求是希望项目加入逻辑来判断并打破这类死循环，例如检测重复的工具调用请求。这是一个长期存在的痛点，社区对稳定性提升有持续期待。

- **[热点 Issue/PR] #4470 & #4472: Telegram display bug** [OPEN]
  - **链接**: https://github.com/HKUDS/nanobot/issues/4470
  - **详情**: 用户报告了 v0.2.2 版本更新后 Telegram 消息存在两个严重 Bug：1) 换行符被忽略；2) 消息闪烁（不断编辑）。开发者 `axelray-dev` 已经提交了修复 PR #4472，通过在存在流式预览时跳过 `sendRichMessage` 方法来解决问题。

## Bug 与稳定性
1. **Telegram 显示 Bug** [严重]
   - **报告**: #4470。v0.2.2 版本导致 Telegram 消息换行符丢失及消息闪烁。
   - **修复状态**: 已有修复性 PR **#4472**，等待合并。

2. **WebUI `<thinking/>` 标签渲染问题** [中/高]
   - **报告**: #4465。WebUI 将模型的 `<thinking>` 标签作为可见文本显示，而非作为思考/推理内容渲染，泄露了模型控制文本。
   - **修复状态**: 暂无明确的修复 PR，但相关 Issue (#2305) 在2026-03-20曾请求支持隐藏推理步骤。

3. **升级后 LLM 误发消息** [中]
   - **报告**: #4410（已关闭）。用户从 v0.15 升级后，即使要求 LLM “不要发送消息”，它仍然会发送。问题定位在 `agent/loop.py`。
   - **修复状态**: 已关闭，但未发现关联的修复 PR，可能是通过其他代码调整解决。

4. **Kimi Coding Provider tool_use ID 冲突** [中]
   - **报告**: #4473（已关闭）。Kimi Coding 端点流式输出时产生重复的 `tool_use.id`，导致 Anthropic API 报错。相关修复 PR **#4474** 已合并。

5. **iOS Safari 输入框自动缩放** [低]
   - **报告**: #4471。iOS Safari 浏览器中 WebUI 的输入框会因字体大小小于16px而自动缩放，影响体验。
   - **修复状态**: 已有修复性 PR **#4471**，通过强制设置字体大小为16px解决。

## 功能请求归类
- **新 Provider 集成**: 社区希望集成更多模型提供商。今日涉及：
  - **OpenCode Zen 和 Go**: PR **#4476** 请求添加这两个低成本和高质量的编程模型提供商。
  - **Kimi Coding Plan**: Issue **#4463** 请求为订阅用户增加 Moonshot AI 的“Kimi Coding”计划支持。相关修复 PR #4474 已解决集成过程中的技术障碍。
- **PWA 支持**: Issue **#4457** 和 PR **#4480** 为 WebUI 添加了 PWA 支持，允许移动端用户安装成桌面应用，提升原生体验。
- **Dream 功能增强**: Issue **#4467** 请求 Dream 系统在更新已有 workspace 技能时能无缝覆盖，而不是每次都创建新的技能副本，避免冗余。
- **Sidebar 移动端手势**: PR **#4480** 同时为 WebUI 的侧边栏增加了移动端滑动打开/关闭的手势支持。
- **Cron 任务模型预设**: PR **#4416** 提议为定时任务增加独立的模型预设，使其可以不使用主 Agent 的模型。
- **Subagent 模型覆盖**: PR **#4415** 增强了子 Agent 功能，允许在 `spawn` 指令中指定使用的模型。

## 用户反馈摘要
- **稳定性是核心诉求**: 从 #2298（无限循环）和 #4410（误发消息）等 Issue 可以看出，用户对 Agent 在遇到异常情况时的行为鲁棒性有很高要求，期望其能自行恢复或打破死循环。
- **版本升级的阵痛**: v0.2.2 的发布带来了重要的耐久性改进，但同时引入的 Telegram 显示 Bug (#4470) 和 WebUI 渲染问题 (#4465) 表明，新功能的发布需要更充分的回归测试。
- **Dream 功能的“智能”期望**: 用户 `songsong-hui` 在 #4467 中表达了对 Dream 功能更智能行为的期望，希望它能识别并更新现有技能，而不是每次都创建新文件，这反映了用户对“持久化”和“增量改进”工作流的真实需求。

## 待处理积压
- **Issue #2298: Breaking endless tool calling loops**
  - **链接**: https://github.com/HKUDS/nanobot/issues/2298
  - **状态**: 自 2026-03-20 创建以来，虽然有5条评论，但未获得官方解决方案或明确的技术方向。这是一个影响 Agent 自主可用性的核心问题，建议项目维护者重点评估并给出规划。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目数据生成的 2026-06-24 项目动态日报。

---

# Zeroclaw 项目动态日报

**日期:** 2026-06-24
**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师

---

### 1. 今日活动概览

过去24小时内，Zeroclaw项目保持了极高的社区活跃度。共产生33条Issue更新（其中20条为新开或活跃，13条已关闭）和50条PR更新（其中19条已合并或关闭）。尽管无新版本发布，但社区在**安全加固**、**架构重构**及**TUI/CLI体验优化**上投入了大量精力。值得关注的是，关于**插件系统的安全限制**（如环境变量访问和SSRF防护）以及**统一命令注册表**的讨论成为今日热点。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日有19个Pull Request被合并或关闭，标志着多项重要功能的推进和修复：

- **Matrix频道管理功能恢复**: `#8068` [已合并] 恢复了Matrix频道的创建和邀请功能，这是对之前因大量提交回滚而丢失功能的修复，意味着Agent现在可以在Matrix上管理房间。
- **核心Bug修复**:
    - `#8074` [已关闭] 修复了网关配置删除时，提供者和频道别名未能级联删除，导致悬空引用的Bug。
    - `#8011` [已关闭] 恢复了在每个频道会话中，按发送者用户单独设置“思考”级别（`/thinking`）的覆盖功能。
- **测试与稳定性**:
    - `#8242` [开放中] 修复了控制面PID存活性测试的不确定性，通过使用更可靠的PID判断逻辑来避免测试假阳/假阴，提升了CI稳定性。
    - `#8250`, `#8248`, `#8246`, `#8245`, `#8244`, `#8243` 等一系列以 `test(api)`, `test(eval)`, `test(hardware)`, `test(config)` 开头的PR正在为API、评估框架、硬件及配置模块添加单元测试，表明项目正在系统性地提升代码质量。

### 4. 社区热点

以下问题引发了最热烈的讨论：

- **#8193 [已关闭]: MCP工具在TUI会话中丢失**: 该Bug导致了工作流阻塞（S1级严重性）。用户报告称，MCP服务器连接并暴露了工具，但Zerocode TUI会话无法获取这些工具，而网关API却能返回。此问题涉及到了运行时、网关和TUI之间的数据同步一致性，经过激烈讨论后已被关闭，推测已有修复方案。

- **#8043 [开放中]: 提议合并独立crate `aardvark-sys`**: 这是一项架构层面的RFC。贡献者建议将独立的硬件相关crate `aardvark-sys` 合并进 `zeroclaw-hardware` 以减少维护负担和依赖复杂性。该提案拥有3条评论，社区正就该变更对现有硬件插件生态的影响进行评估。

- **#7929 [开放中]: 统一斜杠命令注册表**: 作为架构级别的RFC，该提议旨在将Web UI、Zerocode TUI和频道运行时中三个独立的硬编码斜杠命令注册表统一为一个由网关提供的数据源。这反映了社区对跨平台功能一致性的核心诉求。

**分析**: 从这些活跃讨论可以看出，社区当前最关注的痛点是**功能一致性**（如工具在TUI和API间同步）和**架构清晰度**（如简化依赖、统一命令注册）。这暗示随着项目功能日益丰富，维护多个独立路径的成本和用户困惑正在增加。

### 5. Bug 与稳定性

今日报告的Bug主要集中在运行时一致性和特定渠道/提供者的兼容性问题上：

- **S1 - 工作流阻塞**:
    - `#8193` [已关闭]: MCP工具在Zerocode TUI中不可见 (修复已合并)。
    - `#8151` [开放中]: Matrix频道中，延迟处理的图片附件在历史缓存中失去引用，导致机器人后续无法识别该图片。
    - `#8202` [开放中，状态:in-progress]: 新会话 (`/new`) 未能加载`bundled_skill`，导致新会话缺少技能包中的捆绑技能。
    - `#8219` [开放中，状态:in-progress]: 在Groq上运行 `gpt-oss-120b` 模型时，多轮工具调用循环在第二回合失败。

- **S2 - 功能降级**:
    - `#8236` [开放中]: `voice_wake.rs` 文件中构造 `ChannelMessage` 时缺少 `subject` 字段，导致 `--all-features` 构建失败。
    - `#8186` [已关闭]: Zerocode TUI在连接时未检测与后台守护进程的版本不匹配，可能导致意外行为。
    - `#7742` [已关闭]: 运行时在工具调度器发生变更后，未刷新系统提示，导致Agent历史中存有过时的工具指令。

**结论**: 今日Bug修复效率较高，多个S1/S2级问题已有关联的fix PR或已被关闭。但S1级Bug数量较多，特别是涉及多组件（频道、提供者、运行时）交互的失败场景，显示了跨模块集成的复杂性。

### 6. 功能请求归类

- **安全增强**:
    - `#5919` [已关闭]: 限制WASM插件对环境变量的访问权限（白名单机制）。
    - `#5918` [已关闭]: 为WASM插件的HTTP请求功能增加SSRF防护。
    - `#8226` [开放中]: 支持每个Agent独立的、声明式的环境变量配置，以便安全隔离。

- **架构优化**:
    - `#8043` [开放中]: 提议合并 `aardvark-sys` crate 到 `zeroclaw-hardware`。
    - `#7929` [开放中]: 统一Web UI、TUI和频道的斜杠命令注册表。
    - `#7897` [开放中]: 实现安全策略和频道配置的热更新，避免完全重启守护进程。

- **新渠道/功能**:
    - `#8228` [开放中]: 为钉钉频道增加流式消息支持，减少长回复的等待时间。
    - `#8187` [开放中]: 为WASM插件设计基于能力的硬件（如GPIO、I2C）访问接口。
    - `#8251` [开放中]: 将“关系记忆”功能（知识图谱）作为面向用户的可见工作流。

- **用户体验**:
    - `#8238` [开放中]: 为专家Agent的委托模式增加独立的操作模式，使其拥有独立的策略和工具集。
    - `#8075` [开放中]: 解决Zerocode TUI的默认快捷键与MacOS系统全局快捷键冲突的问题。

### 7. 用户反馈摘要

- **MCP工具不一致**: 在 Issue #8193 的讨论中，用户明确表达了对“MCP服务器正常，但TUI看不到工具”这一现象的困惑和沮丧。这表明用户期望在所有交互表面（TUI、API、频道）获得一致的AI能力。
- **工具可用性困惑**: 在 Issue #8054 中，用户（开发者）反馈系统提示词错误地告诉推理模型“没有可用的工具”，而实际上模型收到了本地/MCP工具。这直接导致模型错误地拒绝执行任务，影响了AI的自主决策。
- **跨平台快捷键**：在 Issue #8075 中，MacOS用户反馈了TUI快捷键与操作系统全局快捷键（如`ctrl+up`）冲突的问题，体现了对桌面应用良好原生体验的需求。

### 8. 待处理积压

以下为长期开放或近期风险较高的待处理项，建议维护者关注：

- **#8043 [RFC]**: 关于合并 `aardvark-sys` 的RFC已开放4天且获得关注，需要核心维护者给出初步指导意见或纳入路线图讨论。
- **#8054 [Bug]**: 系统提示词与有效工具不匹配的问题，虽然已有针对直接运行时路径的PR (#8053) 修复，但Issue本身仍开放，跟踪着其他入口点（如WebSocket、多模态）的同类问题，属于“治标不治本”的隐患。
- **#6074 [开放性跟踪]**: 跟踪因大规模回滚而丢失的153个提交。虽然Issue状态为“in-progress”，但已开放两个月，是项目长期稳定性的关键风险点，需要持续关注恢复进度。
- **#7432 [Tracker]**: 作为 v0.9.0 的变更跟踪器，其下有134个开放项（含18个PR），是项目未来走向的核心协调面。维护者需要定期更新其状态，避免成为信息孤岛。
- **#7897, #8170, #8187**: 这些新的RFC提案（热更新、应用内升级、硬件访问）风险等级高，且需要架构评审，建议尽快排期评审，以避免积压。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目 2026-06-24 动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-24

## 今日活动概览

过去24小时内，PicoClaw 项目保持活跃，共更新了3个Issue和17个PR。其中，2个新报告的Bug分别聚焦于Android/Termux环境的进程钩子崩溃和任务重复执行。PR方面，有6个修复被合并或关闭，包括针对OpenAI兼容接口的Doubao Seed模型修复、WhatsApp通道的重连机制改进，以及几个代码清理工作。另有11个PR处于待合并状态，涵盖功能增强（如AWS Bedrock提示缓存、Android ADB远程操作）和安全修复。

## 版本发布

无新版本发布。

## 项目进展

以下为今日合并或关闭的重要PR，展示了项目在稳定性和兼容性方面的改进：

- **修复 Doubao Seed 模型工具调用泄露**： PR #3154 已合并。该修复解决了火山引擎 Doubao Seed 模型在长对话或工具密集场景下，将工具调用以原始 XML 标签形式泄露到 `message.content` 字段，而非标准 `tool_calls` 字段的问题。这使得 PicoClaw 能够正确解析并执行此类模型返回的工具调用。
- **改进 WhatsApp 通道稳定性**： PR #3162 已合并。此修复通过引入异步消息处理、Pong响应、读取超时和自动重连（带指数退避）机制，解决了WhatsApp WebSocket连接在路由器保活场景下自动断开的问题。
- **代码清理与测试覆盖**： 多个标记为 `[stale]` 的PR今日被关闭，包括显式忽略错误路径中的 `Close()` 错误（#3059）、为LINE通道的 `sync.Map` 类型断言添加安全检查（#3054），以及修复Web前端会话详情无法显示完整历史记录的问题（#3047）。此外，PR #3158 为沙盒文件系统在Windows路径处理上增加了回归测试覆盖。

## 社区热点

今日暂无单个Issue或PR出现大量评论或投票。讨论集中在明确的Bug报告和功能实现上：

- **开发者对安全性的持续关注**： 从PR #3160（拒绝跨站点Launcher设置请求）和#3161（修复自定义允许规则跳过拒绝模式的漏洞）可以看出，社区贡献者正在主动识别并修复潜在的安全风险。这反映了项目在安全加固上的积极态势。
- **功能提案推动中**： PR #3163（AWS Bedrock提示缓存）是一个重要的新功能F，它旨在利用Bedrock的缓存能力来降低长上下文的API调用成本。这表明社区在根据不同的后端服务特性优化使用体验。

## Bug 与稳定性

今日报告的Bug严重程度如下：

1. **严重：Android/Termux 进程钩子导致网关崩溃** (#3164)
    - **描述**：在Android/Termux环境下，启动任何进程钩子（即使是“hello world”测试钩子）都会导致 `picoclaw gateway` 在启动后两秒内崩溃。
    - **状态**：新开，无评论，无关联修复PR。等待维护者关注。
    - **链接**：https://github.com/sipeed/picoclaw/issues/3164

2. **中等：AI任务重复执行** (#3159)
    - **描述**：用户报告在连续提问不同话题（如美国新闻、法国新闻）时，AI会在回答第二个问题时再次执行第一个问题的任务。该问题出现在使用 `deepseek-v4-flash-free` 模型和 Web UI 时。
    - **状态**：新开，无评论，无关联修复PR。可能是模型或提示管理上的Bug。
    - **链接**：https://github.com/sipeed/picoclaw/issues/3159

3. **低：Windows QQ频道连接失败** (#3015)
    - **描述**：在Windows构建版本中，`picoclaw gateway` 因获取App Access Token超时而无法连接QQ频道。该问题已被标记为 `stale` 并已关闭。
    - **状态**：已关闭。修复可能已在其他PR中完成。
    - **链接**：https://github.com/sipeed/picoclaw/issues/3015

## 功能请求归类

今日无新增功能请求Issue，但有多个相关的功能实现PR仍在待合并状态：

- **新通道/远程操作**： PR #3157 新增实验性的 Android ADB 远程操作工具 (#3157)，PR #3118 为 `picoclaw agent` 添加远程Pico WebSocket模式 (#3118)。
- **平台集成优化**： PR #3163 为 AWS Bedrock 的 Converse API 添加提示缓存支持 (#3163)，PR #2975 让 Telegram 群聊中回复机器人消息等同于 `@` 提及 (#2975)。
- **依赖更新**： 多个由 `dependabot` 发起的PR正在更新前端依赖，如 `shadcn` (PR #3104)、`typescript-eslint` (PR #3103) 和 `@vitejs/plugin-react` (PR #3100)。

## 用户反馈摘要

- **Android/Termux 用户受阻**： Issue #3164 的用户报告，在主流移动端Linux环境（Termux）中无法使用进程钩子功能，这直接影响了其在使用 `picoclaw gateway` 时集成外部程序的能力。该问题与v0.2.9版本相关。
- **任务执行逻辑困惑**： Issue #3159 的用户描述了AI在连续对话中错误地重做上一次任务的情况，这可能影响用户对PicoClaw作为AI助手可靠性的判断，尤其是在处理多步骤或顺序任务时。

## 待处理积压

以下为长期未响应或待合并的重要Issue/PR，提醒维护者关注：

- **PR #2975：Telegram 回复触发改进**： 该PR为Telegram机器人增加了“回复即@提及”的功能，已等待近一个月未合并。此功能对提升Telegram群聊体验至关重要。
    - 链接：https://github.com/sipeed/picoclaw/pull/2975
- **PR #3118 & #3115：远程模式和媒体提取修复**： 这两个由 `@jp39` 贡献的PR（增加远程Agent模式和修复媒体提取）已等待超过10天，对功能性和稳定性有较大影响。
    - 链接：https://github.com/sipeed/picoclaw/pull/3118
    - 链接：https://github.com/sipeed/picoclaw/pull/3115
- **Issues #3164：Android/Termux 网关崩溃**： 当前最严重的Bug之一，至今无人回复或分配，需要尽快定位。
    - 链接：https://github.com/sipeed/picoclaw/issues/3164

</details>