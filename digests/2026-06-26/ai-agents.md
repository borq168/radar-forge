# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-26 00:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 OpenClaw 项目 GitHub 数据，我已为您生成 2026-06-26 的项目动态日报。

---

## OpenClaw 项目动态日报 — 2026-06-26

### 今日活动概览

过去 24 小时，OpenClaw 项目保持了极高的社区活跃度和代码贡献量。仓库共收到 500 条 Issues 更新，其中新开与活跃的讨论占比超过 95%（477条），仅有 23 条被关闭，表明问题报告和功能讨论仍在快速涌入。PR 方面同样有 500 条更新，待合并的 PR 高达 414 条，已合并或关闭的为 86 条，显示出项目拥有强大的贡献管道，但维护者审查与合并的瓶颈依然显著。今日无新版本发布。

### 项目进展

尽管合并/关闭的 PR 数量相对较少，但今日有一些重要的代码合并完成，推动了关键功能的修复和基础设施建设：

- **【已合并】PR #68936**: 由 `@shadowleaf-studios` 提交的“Autofix: add PR review autofix pipeline + Windows daemon”。该大型 PR 引入了一个自动化 PR 审查修复管线，利用 Claude Agent SDK 订阅来处理审查意见，并附带一个 Windows 后台守护进程。这标志着项目在自动化开发和运维方面迈出了重要一步。
- **【已关闭】PR #96143**: 由 `@brokemac79` 提交的“fix(plugins): avoid spurious npm spec error after metadata failure”。该修复旨在避免因 npm 元数据查询暂时失败而导致的混淆性错误信息，提升了插件安装流程的健壮性。
- **【已合并】PR #61329**: 由 `@hacky193` 提交的“ui: default usage view to last 7 days instead of today-only”。该 PR 优化了 Web UI 中“用量”视图的默认日期范围，从仅显示今天扩展到显示最近 7 天，提升了数据查看的便捷性。

此外，多个高优先级且经过充分验证的 PR 已进入“ready for maintainer look”状态，等待最终审查，包括针对 Discord 渠道修复 (`#96106`)、浏览器工具 SSRF 修复 (`#96649`)、网关 abort 状态保留 (`#91000`) 等。这预示着下一轮合并可能带来显著的稳定性提升。

### 社区热点

今日社区讨论热度极高，评论数最多的几项议题反映了用户在**代理行为一致性、数据安全和系统稳定性**方面的深切关切。

1.  **【人格一致性】`: #58450 “Agent can promise a later follow-up without starting any actual follow-up action”`**
    - **评论：15 | 👍：3**
    - **链接:** [https://github.com/openclaw/openclaw/issues/58450](https://github.com/openclaw/openclaw/issues/58450)
    - **分析:** 这是一个讨论极其热烈的行为逻辑 Bug。用户报告代理在对话结束时承诺“会去检查项目记忆并回来跟进”，但实际上并未启动任何后台任务。这造成了代理“说谎”的体验，直接破坏了用户信任。高点赞数和高评论数表明这不是孤立问题，而是影响用户体验的核心痛点。

2.  **【安全问题】`: #45740 “gh-issues skill: untrusted issue body injected directly into sub-agent prompt”`**
    - **评论：14 | 👍：1**
    - **链接:** [https://github.com/openclaw/openclaw/issues/45740](https://github.com/openclaw/openclaw/issues/45740)
    - **分析:** 该 Issue 指出一个严重的安全缺陷：`gh-issues` 技能直接将未经处理的 GitHub Issue 内容注入到子代理的 prompt 中。这相当于一个注入攻击面，恶意构造的 Issue 内容可能操控代理行为。社区对此表现出高度警惕，并已有相关的修复 PR (linked-pr-open) 正在讨论。

3.  **【中文编码】`: #48788 “feat: centralized filename encoding utility for multi-encoding Content-Disposition handling”`**
    - **评论：18 | 👍：1**
    - **链接:** [https://github.com/openclaw/openclaw/issues/48788](https://github.com/openclaw/openclaw/issues/48788)
    - **分析:** 这是今日评论数最多的 Issue，虽然是一个功能提议，但背后是中文（以及其他多字节编码）用户遇到的现实问题。用户希望文件传输时的文件名编码能从个案修复（如 PR #48578 修复飞书文件名）升级为架构级的解决方案。这反映了社区对于项目国际化、多语言支持能力的期待。

### Bug 与稳定性

今日报告的问题中，大量问题被标记为 P1/P2 高优先级，且多关联到会话状态丢失、内存泄漏和安全问题，部分已有对应的修复 PR。

- **严重 - 性能与稳定性**
    - **`#55334 [Bug]: sessions.json unbounded growth causes gateway OOM`**
        - 网关 `sessions.json` 文件无限增长导致内存溢出（OOM），是目前最严重的稳定性问题之一。已被标记为 **P1**。
        - **链接:** [https://github.com/openclaw/openclaw/issues/55334](https://github.com/openclaw/openclaw/issues/55334)
    - **`#54155 [Bug]: Gateway memory leak: 389MB → 14.7GB over 4 days`**
        - 网关进程存在明显的内存泄漏，4天内内存占用增长近40倍，严重影响**长周期运行稳定性**。**P1** 优先级。
        - **链接:** [https://github.com/openclaw/openclaw/issues/54155](https://github.com/openclaw/openclaw/issues/54155)
    - **`#91009 [Bug]: Codex PreToolUse native hook relay spawns CPU-bound processes`**
        - Codex 集成触发 CPU 密集型进程，导致网关 RPC 停滞。在 Codex 功能被推广的背景下，此性能问题影响严重。**P1**。
        - **链接:** [https://github.com/openclaw/openclaw/issues/91009](https://github.com/openclaw/openclaw/issues/91009)

- **严重 - 逻辑错误**
    - **`#58450 [Bug]: Agent can promise a later follow-up...`**
        - 代理虚假承诺，严重**损害用户信任**。已作为热点讨论。**P2**。
        - **链接:** [https://github.com/openclaw/openclaw/issues/58450](https://github.com/openclaw/openclaw/issues/58450)
    - **`#63216 [Bug]: Repeated hard resets on same session key...`**
        - 会话上下文持续溢出导致反复硬重置，用户投诉即使增大了 `reserveTokensFloor` 也无法避免。**P1**。
        - **链接:** [https://github.com/openclaw/openclaw/issues/63216](https://github.com/openclaw/openclaw/issues/63216)

- **严重 - 回归问题**
    - **`#53599 [Bug]: Chrome extension browser relay removed...`**
        - 新版本移除了浏览器扩展中继功能，打破了跨机器工作的使用场景。这是一个关键功能的**回归**，对托管服务提供商影响巨大。**P1**。
        - **链接:** [https://github.com/openclaw/openclaw/issues/53599](https://github.com/openclaw/openclaw/issues/53599)

- **已有 fix PR 的 Bug**
    - **`#51429 [Bug]: 工作路径 hardcode`**: 用户发现开发者的本地工作路径被硬编码进代码并发布。已有修复 PR (linked-pr-open)。
    - **`#52328 [Bug]: node:sqlite missing FTS5 module`**: Node.js 内置 SQLite 未编译 FTS5 模块，导致内存搜索功能降级。已有修复 PR (linked-pr-open)。

### 功能请求归类

今日收集的社区功能请求主要围绕**安全性强化、记忆系统架构升级和用户体验优化**三个方向。

- **安全与隐私强化**
    - **`#64046 [Feature]: 希望支持敏感数据脱敏`**
        - 请求对配置文件、日志和 UI 中的 API Key 等敏感信息进行脱敏处理，反映了用户对**机密信息管理**的迫切需求。
        - **链接:** [https://github.com/openclaw/openclaw/issues/64046](https://github.com/openclaw/openclaw/issues/64046)
    - **`#56349 [Feature]: Unbypassable outbound policy enforcement`**
        - 请求建立不可绕过的出站消息策略执行点，确保所有对外发送的消息都经过统一的安全或合规检查。
        - **链接:** [https://github.com/openclaw/openclaw/issues/56349](https://github.com/openclaw/openclaw/issues/56349)

- **记忆与知识管理升级**
    - **`#60572 [Feature]: Multi-Slot Memory Architecture`**
        - 提议将单一的 `memory` 插件槽位拆分为多个专用槽位，以支持不同的记忆层，提升架构灵活性。
        - **链接:** [https://github.com/openclaw/openclaw/issues/60572](https://github.com/openclaw/openclaw/issues/60572)
    - **`#63990 [Feature]: Multi-index embedding memory with model-aware failover`**
        - 请求支持多索引嵌入记忆，以便在 Embedding 模型故障时实现无缝切换，保障**生产环境可靠性**。
        - **链接:** [https://github.com/openclaw/openclaw/issues/63990](https://github.com/openclaw/openclaw/issues/63990)
    - **`#64438 [Feature Request]: Remote Reranker Endpoint Support`**
        - 希望为记忆搜索增加远程重排序（Reranker）端点支持，以提升搜索结果质量。
        - **链接:** [https://github.com/openclaw/openclaw/issues/64438](https://github.com/openclaw/openclaw/issues/64438)

- **生态系统与可观测性**
    - **`#50199 [Feature Request]: Add Skill Priority Configuration`**
        - 提议为技能添加优先级配置，解决多技能处理同一任务时的选择歧义问题。
        - **链接:** [https://github.com/openclaw/openclaw/issues/50199](https://github.com/openclaw/openclaw/issues/50199)
    - **`#52640 [Feature request]: Persistent task-status surface`**
        - 需要一个持久的任务状态面板，用于跟踪代理执行的长期后台任务（如在 Discord 中的“正在...中”指示器）。
        - **链接:** [https://github.com/openclaw/openclaw/issues/52640](https://github.com/openclaw/openclaw/issues/52640)

### 用户反馈摘要

从今日活跃的 Issues 评论中，可以提炼出以下具有代表性的用户反馈：

- **“诚实”是对代理功能的底线期待**：在 Issue `#58450` 中，用户对于代理做出承诺但并未执行的行为感到非常失望。这表明，除了功能正常，用户对代理行为的“诚实”和“可预期性”有很高要求。虚假的承诺比直接说“做不到”更损害体验。
- **配置项的“静默失败”困扰用户**：多个 Bug（如 `#51429` 硬编码路径, `#53628` 环境变量未解析）都指向配置项未按预期工作，且往往以不易察觉的方式失败。用户对这类问题的反馈措辞（如“看起来很惊讶”、“Who is this wangtao?”）显示出强烈的不解和挫败感。
- **系统状态的“矛盾感”**：在 Issue `#57256` 中，用户指出 `openclaw status` 报告内存不可用，但实际功能正常。这种不一致的诊断信息让用户在排查问题时感到困惑，削弱了工具的可信度。
- **积极拥抱自动化与辅助工具**：从对 PR `#68936`（自动化审查修复管线）和 Issue `#63930`（支持 Anthropic advisor tool）的反馈来看，社区对引入更多 AI 辅助开发工具和自动化流程持积极态度，以提升开发效率和代理能力。
- **对开源项目透明度的期待**：Issue `#51429` 中用户直指硬编码问题被合并发布，反映了社区对自己正在使用的项目代码质量有较高期待，并希望维护者能加强代码审查。

### 待处理积压

以下是一些长期未获得有效响应或陷入停滞的高优先级问题，值得维护者关注：

- **社区生态治理 (`#50090`):** “Community Skill Development & ClawHub” 是一项关于建立社区技能生态系统的核心讨论，已开放超 2 个月，评论 15 条，但状态为 `needs-product-decision`。这个问题的停滞可能阻碍社区贡献者的积极性。
    - **链接:** [https://github.com/openclaw/openclaw/issues/50090](https://github.com/openclaw/openclaw/issues/50090)
- **UI 模型选择顽固 Bug (`#54724`):** “fix/agents-primary-model-selection-and-catalog-loading-41344” 这个 PR 旨在修复 UI 中 Agent 主要模型选择和加载的长期问题，但状态为 `waiting on author`。该 Bug 直接影响用户体验且已存在数月。
    - **链接:** [https://github.com/openclaw/openclaw/pull/54724](https://github.com/openclaw/openclaw/pull/54724)
- **iOS 流式布局修复 (`#50483`):** “fix(ios): stabilize chat streaming layout and session flow” 是一个旨在修复 iOS 客户端流式会话布局问题的 PR，同样状态为 `needs proof`，长期未推进。这可能会影响移动端用户的体验。
    - **链接:** [https://github.com/openclaw/openclaw/pull/50483](https://github.com/openclaw/openclaw/pull/50483)

---

## 横向生态对比

# 2026-06-26 开源 AI 智能体项目横向对比分析报告

## 1. 今日横向概览

今日四个项目均保持高度活跃，但活动规模和焦点差异明显。**OpenClaw** 和 **Zeroclaw** 以每天近 500 条 Issue/PR 更新的量级稳居第一梯队，社区讨论主要集中在安全漏洞、代理行为一致性和架构治理上。**NanoBot** 因安全研究员集中报告 7 个 MCP/Exec 权限绕过漏洞而引发快速修复响应，成为今日安全事件频率最高的项目。**PicoClaw** 则聚焦于代码质量修复和依赖更新，社区规模较小但 bug 修复效率较高。四个项目今日均无新版本发布。

## 2. 各项目活跃度对比

| 项目 | Issue 更新数 | PR 更新数 | 新版本发布 | 关键事实备注 |
|------|------------|---------|---------|------------|
| **OpenClaw** | 500（新开/活跃 477，关闭 23） | 500（待合并 414，已合并/关闭 86） | 否 | 代理“说谎”Bug 获 15 评论；网关 OOM 和内存泄漏被标记 P1 |
| **NanoBot** | 22 | 38 | 否 | 安全研究员 `@YLChen-007` 提交 7 个权限绕过漏洞，项目组当日即提交修复 PR |
| **Zeroclaw** | 49（新开/活跃 36） | 50（待合并 49，已合并/关闭 1） | 否 | 3 个高热度 RFC（工作流、供应链签名、轻量化核心）持续讨论；Delegate 绕过漏洞评为 S0 |
| **PicoClaw** | 3（关闭 2，开放 1） | 19（已合并 6，待合并 13） | 否 | Dependabot 提交大量依赖更新 PR；合并了 Spawn 消息重复、Matrix ID 解析等修复 |

## 3. OpenClaw 与同类对照

**活动量**：OpenClaw 的 Issue/PR 日更新量（各 500）是 NanoBot（22/38）的 13 倍以上，是 Zeroclaw（49/50）的 10 倍，是 PicoClaw（3/19）的 100 倍以上，反映出其作为核心参照项目的超大规模社区基数。

**技术重点**：
- OpenClaw 今日技术修复集中在 **代理行为一致性（#58450 虚假承诺）、基础设施安全（SSRF 修复、gh-issues 注入）、UI 数据展示优化（用量视图默认7天）**，以及 **长期性能问题（网关 OOM、内存泄漏）**。
- 与 NanoBot 相比，OpenClaw 的安全问题更侧重于 **外部输入注入与跨通道 SSRF**，而 NanoBot 则聚焦于 **工具白名单的本地绕过**，属于不同安全层。
- 与 Zeroclaw 相比，OpenClaw 缺乏 **RFC 驱动的架构讨论**，Zeroclaw 今日的 3 个 RFC（工作流管理、供应链签名、轻量化核心）显示出更强的顶层设计导向。

**社区讨论面**：
- OpenClaw 社区最热议题是 **代理“诚实性”和用户信任**（#58450），其次是 **中文编码国际化**（#48788），体现了终端用户体验的显性诉求。
- Zeroclaw 社区讨论更偏 **开发者治理与安全基础设施**，如 RFC #6808 的工作流自动化、#8177 的供应链签名。
- NanoBot 社区全天被 **安全漏洞报告** 主导，讨论密度高但议题集中。
- PicoClaw 社区讨论量最少，仅有两个开放议题（替换 libolm 和新增 DeltaChat 网关）。

## 4. 共同出现的技术方向

### 安全与权限控制（涉及全部四个项目）
- **OpenClaw**：注入攻击（#45740 gh-issues 注入 SSRF）、浏览器工具 SSRF（#96649）
- **NanoBot**：MCP `enabledTools` 绕过（#4519）、Exec `allowPatterns` 绕过（#4514-4521）
- **Zeroclaw**：Delegate 绕过父级工具白名单（#8279，S0 级）
- **PicoClaw**：替换不安全加密库 libolm → vodozemac（#3088）

### 记忆与知识管理架构升级（涉及三个项目：OpenClaw、NanoBot、Zeroclaw）
- **OpenClaw**：Multi-Slot Memory（#60572）、Multi-index embedding（#63990）、远程 Reranker（#64438）
- **NanoBot**：可选内存主动合并（PR #4402）
- **Zeroclaw**：核心轻量化 RFC（#6165）中隐含的模块化知识存储

### 代理行为模式与任务理解（涉及两个项目：OpenClaw、NanoBot）
- **OpenClaw**：代理虚假承诺“会跟进但未执行”（#58450）
- **NanoBot**：请求添加 `ask_clarification` 工具以处理模糊指令（#4508）

### 跨平台/国际化支持（涉及两个项目：OpenClaw、PicoClaw）
- **OpenClaw**：中文文件名称多编码处理（#48788）
- **PicoClaw**：Matrix 用户 ID 解析修复（PR #3045），DeltaChat 新网关请求（#3063）

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|----------------|
| **OpenClaw** | 全栈个人 AI 助手（Web UI、插件生态、多通道、自动化流水线） | 个人开发者、托管服务商 | 以 Rust 为核心，支持 Claude Agent SDK 集成；PR 自动修复管线、Windows daemon 体现 DevOps 偏重 |
| **NanoBot** | 轻量级多平台机器人（Telegram、WebUI），快速集成第三方服务 | 中小团队、个人极客 | 关注工具白名单的细粒度安全；MCP 支持；PWA 需求表明移动端扩展现状 |
| **Zeroclaw** | 可扩展 Agent 基础设施（Wasm 插件、供应链安全、强制的治理 RFC） | 企业级/高级开发者 | Wasm 插件运行时、OCI 容器注册表存储、SLSA 证明带来更强隔离；Delegate 权限模型尚在演进 |
| **PicoClaw** | 嵌入式/低资源设备上的 Agent（树莓派、物联网场景推断） | 嵌入式开发者、边缘计算场景 | 代码量较小，修复多为基础资源管理和依赖；Dependabot 自动更新比重高，适合长期稳定维护 |

## 6. 社区活跃度记录

基于今日 Issues/PR 更新数量和社区讨论广度，可作如下分层（非评分，仅事实描述）：

- **极高活跃**：**OpenClaw**（Issue/PR 各 500），**Zeroclaw**（Issue 49, PR 50）——两者均拥有高数量级的讨论，且议题覆盖功能、安全、治理多个维度。
- **中高活跃**：**NanoBot**（Issue 22, PR 38）——数量适中，但今日安全漏洞集中爆发，讨论密度高。
- **中等活跃**：**PicoClaw**（Issue 3, PR 19）——Issue 数量少，但 PR 活动以依赖更新和修复为主，合入效率高。

今日所有项目均未发布新版本，无 Release 事件。

## 7. 有证据支撑的观察

### 观察 1：安全与权限控制成为跨项目共同热点
四个项目今日均出现明确的权限绕过或安全机制缺失问题（OpenClaw #45740 SSRF、NanoBot #4514-4521 exec 绕过、Zeroclaw #8279 delegate 绕过、PicoClaw #3088 替换不安全加密库），且均有对应的修复 PR 或已合入。数据表明，当前 AI 智能体项目正处于从功能开发转向安全加固的集中阶段。

### 观察 2：OpenClaw 的社区关注点从功能 Bug 转向代理“诚实”等信任问题
Issue #58450（代理虚假承诺）获得 15 条评论和 3 个 👍，是今日 OpenClaw 中最热议题。与之对比，NanoBot 和 Zeroclaw 的热点议题更多属于技术安全或架构治理，反映出 OpenClaw 用户群已进入对 Agent 行为可预测性、可信赖性提出更高要求的阶段。

### 观察 3：自动化运维与代码质量工具在各项目中得到积极采纳
OpenClaw 合入了 PR #68936（自动化 PR 审查修复管线 + Windows daemon），NanoBot 有多个 Dependabot 自动依赖更新在推进，Zeroclaw 的 RFC #6808 专门讨论工作流自动化，PicoClaw 的 13 个待合并 PR 中多数为 Dependabot 提交。这表明社区普遍认可并依赖 CI/CD 自动化来维持开发效率和质量。

### 观察 4：长期积压的架构级问题仍在制约体验
OpenClaw 的网关 OOM（#55334）和内存泄漏（#54155）已存在多日且标记 P1，Zeroclaw 的 MCP stdio 子进程泄漏（#5903）自 4 月起未修复，NanoBot 的“无响应”Bug（#1710）自 3 月起无人回应。这些长期积压问题将直接影响生产部署的稳定性，是各项目近期应优先投入资源的方向。

### 观察 5：国际化与跨平台支持需求初现，但尚未成为主流
仅 OpenClaw（中文编码 #48788）和 PicoClaw（Matrix ID 修复、DeltaChat 提议）有明确跨语言/跨平台信号，NanoBot 的 PWA 请求也暗示移动端扩展。不过今日数据中此类议题总量偏低（共 3-4 条），尚不能构成显著趋势，仅可作为早期观察。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 NanoBot 开源项目的 AI 分析师，根据您提供的 GitHub 数据，我已为您生成 2026-06-26 的项目动态日报。

---

# NanoBot 项目动态日报 (2026-06-26)

## 1. 今日活动概览

今日项目活动量处于高位，共更新 **22 条 Issues** 和 **38 条 PRs**，无新版本发布。社区动态中，**安全问题**成为绝对焦点，安全研究员 `@YLChen-007` 集中提交了 **7 个** 关于 MCP 和 `exec` 工具的权限绕过漏洞。项目组响应迅速，已为此类问题中的大部分（`#4519`, `#4514` 等）创建了修复 PR（如 `#4524`, `#4526`），并关闭了数个更早提交的相似安全问题（`#4434`, `#4435`, `#4517`）。

## 2. 版本发布

无

## 3. 项目进展

今日代码合并与功能推进主要围绕 Bug 修复和安全加固展开，部分长期开放的功能增强 PR 也有实质性进展。

-   **安全修复**：针对安全研究员 `@YLChen-007` 报告的一系列漏洞，项目组提交了多个修复 PR。
    -   [PR #4493](https://github.com/HKUDS/nanobot/pull/4493) **(已合并)**: 修复 WebUI 在小米 MiMo ASR 下因音频格式不兼容导致的转录失败问题。
    -   [PR #4524](https://github.com/HKUDS/nanobot/pull/4524) **(开放)**: 修复 `enabledTools` 过滤仅应用于工具，而绕过资源(Resource)和提示(Prompt)功能的漏洞(关联 `#4519`)。
    -   [PR #4526](https://github.com/HKUDS/nanobot/pull/4526) **(开放)**: 修复通过命令链绕过 `exec.allowPatterns` 白名单的问题(关联 `#4514`, `#4515`)。
-   **其他性能与功能增强 PR 仍在推进**：多个由 `@yu-xin-c` 提交的增强型 PR 今日仍在更新中，表明其工作仍在持续。这些包括：
    -   [PR #4402](https://github.com/HKUDS/nanobot/pull/4402): 新增可选的内存主动合并功能。
    -   [PR #4416](https://github.com/HKUDS/nanobot/pull/4416): 为定时任务(cron job)添加模型预设支持。
    -   [PR #4414](https://github.com/HKUDS/nanobot/pull/4414): 为子代理新增聚合结果模式。

## 4. 社区热点

今日社区讨论的热点高度集中在安全问题领域，由同一位安全研究员主导。

-   **MCP 和 Exec 工具的权限绕过漏洞**：用户 `@YLChen-007` 今天连续提交了 7 个安全相关的 Issue ( `#4519`, `#4521`, `#4520`, `#4518`, `#4516`, `#4515`, `#4514` )。这些 Issue 系统性揭示了 `enabledTools` 白名单和 `exec.allowPatterns` 机制的多种绕过方式。这表明社区的关注重心已从一般功能 Bug 转向深层安全架构的审查，可能预示着项目在安全审计和防护加固方面将进入一个新的阶段。项目组的快速响应（在问题报告后数小时内即提交修复 PR）也体现了对安全问题的重视。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在两个方面：安全漏洞和 Windows 平台兼容性问题。所有安全漏洞均已有关联修复 PR。

-   **严重 - 安全漏洞**：
    -   MCP `enabledTools` 作用域绕过 ( #4519 ): 白名单仅生效于工具(Tool)功能，对资源(Resource)和提示(Prompt)功能无效。**已有修复 PR (`#4524`)**
    -   Exec `allowPatterns` 白名单绕过 ( `#4514`, `#4515`, `#4516`, `#4520`, `#4521` ): 通过 shell 命令链、注释、包装器等手法，绕过对可执行命令的限制。**已有修复 PR (`#4526`)**
    -   Exec 默认登录 shell 执行 ( `#4518` ): 可能导致 shell 启动文件中的敏感信息泄露。

-   **中等 - Windows 平台问题**：
    -   [`#4511`](https://github.com/HKUDS/nanobot/issues/4511): Windows 下使用 `--background` 后台运行后，重启时进程信息文件与实际进程状态不一致。
    -   [`#4513`](https://github.com/HKUDS/nanobot/issues/4513): 使用 `nssm` 将 NanoBot 设为系统服务后，`/restart` 命令导致端口占用和服务状态异常。

-   **低 - 功能回归**：
    -   [`#4488`](https://github.com/HKUDS/nanobot/issues/4488): Telegram Web 版出现 “This message is not supported” 的错误，在 Android 应用中正常。用户怀疑是富消息功能引入的回归。

## 6. 功能请求归类

今日用户提出的新功能需求包括：

-   **PWA 与移动端支持** (`#4479`): 请求为 WebUI 增加 PWA 支持和侧边栏的手势滑动功能。
    -   关联 PR: [`#4494`](https://github.com/HKUDS/nanobot/pull/4494) (开放)
-   **新增 Ask Clarification 工具** (`#4508`): 建议添加一个“澄清请求”工具，当用户指令不明确或存在歧义时，让 Agent 可以主动提问，而不是直接行事。
-   **自定义 Provider 的思考模式配置** (`#4429`, **已关闭**): 允许为自定义 Provider 配置其专用的“思考/推理”参数。此需求似乎已被实现或合并。
-   **MCP 服务器空闲自动关闭** (`#4506`): 建议增加 MCP 服务器的空闲超时自动关闭功能，以节省系统资源。
    -   关联 PR: [`#4506`](https://github.com/HKUDS/nanobot/pull/4506) (开放)

## 7. 用户反馈摘要

从今日的 Issue 评论中可以提炼出以下用户反馈：

-   **Windows 用户体验是痛点**：用户 `@Quincy-Zh` 详细描述了在 Windows 下使用 `--background` 和 `nssm` 服务时遇到的严重问题，这表明解决方案在 Windows 平台上的部署和管理仍有较大改进空间。其评论中提到了“端口占用”、“程序不断尝试重启”和“服务状态与实际不符”等具体问题。
-   **第三方服务集成问题**：用户 `@sseepsse` 反馈了在钉钉(Dingtalk)集成中遇到的超时和不支持富文本格式的问题。这凸显了与各类商业平台对接时，鲁棒性和功能完备性的挑战。
-   **期望 Agent 更“聪明”**：用户 `@ZhouJ-sh` 提出的 `ask_clarification` 工具需求，反映了社区希望 Agent 在面对模糊指令时能主动交互，而不是猜测或执行错误操作，这指向了更智能的 Agent 行为模式。

## 8. 待处理积压

-   [Issue #1710](https://github.com/HKUDS/nanobot/issues/1710) (从2026-03-08起开放): 一个长期未解决的反馈，用户报告 Agent 频繁回复 “I've completed processing but have no response to give”，推测与模型(Qwen 3.5)有关。该问题至今无任何官方回应或解决方案，需要维护者关注。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 Zeroclaw 项目数据，以下是 2026-06-26 的项目动态日报。

---

### Zeroclaw 项目日报 — 2026-06-26

**数据周期: 2026-06-25 至 2026-06-26**

---

#### 1. 今日活动概览

过去24小时项目活跃度极高，共产生了49条Issue更新和50条PR更新。其中，新开/活跃的Issue占多数（36条），但高优先级的S0/S1级别的Bug报告和修复提案成为社区焦点。PR方面积压严重，待合并的PR高达49条，大量功能增强和关键Bug修复（如Delegate工具的安全绕过漏洞、Kimi Code提供者接入）正等待维护者审核与合并。此外，多份关于项目架构和治理的重要RFC（如劳动流管理、供应链签名、Wasm插件运行时）持续获得讨论，表明项目正围绕着安全性、架构深度和开发者体验进行重大演进。今日无新版本发布。

#### 2. 版本发布

无。

#### 3. 项目进展

今日有1条PR被合并/关闭，其余均为新开或更新。

- **[已关闭] PR #8279: `delegate` bypasses parent's tool allowlist**：这是关键安全修复。解决了子Agent绕过父级Agent工具白名单，调用被父级策略排除的工具问题，直接将此情景区分在“S0 - 数据丢失/安全风险”级别。其相关Issue也已被关闭，表明该漏洞的修复方案已就绪并得到处理。

- **[已关闭] Issue #6714: Remove remote-markdown-link block from skill audit**：该Issue已被关闭，意味着社区对技能审核中“远程Markdown链接”的误报问题达成了共识，并可能已采纳了相应的修复策略。

- **[已关闭] Issue #7873: Telegram media groups should dispatch as one agent request**：聚合Telegram媒体组消息的功能请求已被关闭，成功解决了同一媒体组被分发为多个独立请求的问题。

- **[已关闭] Issue #8154: Kimi Code (Moonshot) 端点404问题**：修复了Kimi Code提供者的错误API端点的Bug，该问题直接阻塞了用户工作流（S1级），现已关闭。

#### 4. 社区热点

- **RFC 讨论热潮：三个高热度RFC 持续推进**
    - **#6808 [RFC: Work Lanes, Board Automation, and Label Cleanup]** (11条评论): 作为项目治理RFC，讨论热度最高。它关乎如何更高效地路由、自动化管理工作流和清理标签，直接影响了项目的协作方式。这表明社区对项目的组织效率和透明度有较高期望。
    - **#8177 [RFC: Supply chain signing]** (8条评论): 关于供应链安全（硬件PGP、SLSA证明）的RFC获得大量关注，与今日多项安全相关的PR和Issue形成呼应，反映了社区对软件供应链安全的高度重视。
    - **#6165 [RFC: Prefer a lighter ZeroClaw core through external integrations]** (5条评论): 讨论通过“技能”系统将核心工具（如Jira, GitHub集成）外置化，实现轻量化核心。这是一个影响深远的架构调整，社区成员正积极探讨其利弊和实现路径。

- **Delegate 模式与安全问题讨论集中爆发**：多个高度相关的Issue和PR围绕“Delegate”工具权限和独立运行模式展开讨论。
    - **#8238**: 提议添加独立委托模式, 允许专家Agent运行在其自己的策略下。
    - **#8279**: 报告了Delegate模式绕过父级工具白名单的安全漏洞，被评为S0级。
    - **#7743**: 提议支持显式的目标Profile权限，用于Delegate任务。
    这形成了一个热点集群，表明社区正积极设计更安全、更灵活的Agent间协作机制，当前实现存在安全盲区，需尽快解决。

#### 5. Bug 与稳定性

今日报告了多个严重影响稳定性和安全性的Bug，按严重程度排列如下：

- **S0 - 数据丢失/安全风险**:
    - **[Bug] #8279: delegate bypasses parent's tool allowlist**。子Agent可调用父级策略排除的工具，破坏安全沙箱（已有关闭的PR）。
- **S1 - 工作流阻塞**:
    - **[Bug] #8154: Kimi Code端点404**。导致无法使用Moonshot/Kimi提供者，影响用户正常使用（已关闭）。
- **S2 - 降级行为**:
    - **[Bug] #8312: fill-translations leak-repair 导致数据泄露**。修复翻译泄漏的工具在修复后产生副作用，留下旧的翻译映射条目，可能通过 `write_po` 重新泄漏文本。
    - **[Bug] #8334: `skills install`/`list`/`remove` 命令指向错误的目录**。该命令指向旧的数据目录，无法被多Agent运行时加载，导致新用户拉取技能的核心流程失效。
    - **[Bug] #8236: voice_wake.rs 缺少 subject 字段**。导致 `--all-features` 构建失败，影响开发者和尝试启用全部功能的用户。
- **S3 - 次要问题**:
    - **[Bug] #5514: Telegram图片请求被重复发送**。发送多张图片时，Agent会为每张图片分别输出响应，而非合并处理。该问题已持续较久。

#### 6. 功能请求归类

- **安全与权限强化**:
    - **#7743**: 支持Delegate显式目标Profile权限。
    - **#8238**: 为专家Agent添加独立委托运行模式。
    - **#8177 (RFC)**: 供应链签名与SLSA证明。
    - **#8135 (RFC)**: 以Wasm为中心的插件运行时，强化能力执行与签名分发。

- **架构与核心精简**:
    - **#6165 (RFC)**: 通过外部集成实现轻量化核心，将部分内置集成迁移至技能系统。
    - **#7497 (RFC)**: 将OCI兼容容器注册表作为Wasm插件的存储和发现机制。
    - **#8132 (RFC)**: 将React/Vite Web UI构建替换为Rust→Wasm框架，消除Node.js依赖。
    - **#6489**: “万物皆插件”路线图，统一集成与插件概念。

- **会话与工作流模式**:
    - **#8303 (RFC)**: 提出“目标模式”，支持Agent为完成一个目标而进行有边界的自主会话，直到完成、暂停或失败。
    - **#8170 (RFC)**: 支持从Web仪表盘进行应用内升级并可选地监督重启。

- **提供者与工具集成**:
    - **#8138**: 支持OpenRouter模型的 `fallback_models` 数组配置，实现自动故障转移。
    - **#8309**: 处理“SkillForge”功能的遗留问题，决定是修复与当前系统的集成还是移除该功能。

#### 7. 用户反馈摘要

从今日的Issues和PR评论中，可以提炼出以下真实用户痛点：

- **安全与信任**:
    > “delegate工具过滤了父级`parent_tools`，但填充的是未经过滤的父级工具集...这允许被策略排除的工具仍然可以被调用。” — **#8279** (@wangmiao0668000666)

- **配置与使用体验**:
    > “`skills install <source>` 安装技能到 `data_dir`，但多Agent运行时不再加载这个目录，导致安装了也没用。” — **#8334** (@JordanTheJet)
    > “`zeroclaw models set <model>` 实际执行的是 `doctor::run_models(...)`，而不是保存模型/提供者配置，” — **#7087** (@Audacity88)
    > “当通过Telegram发送两张或更多图片时，网关将每张图片视为一个独立的LLM请求，” — **#5514** (@aq-uua)

- **开发与构建体验**:
    > “`voice_wake.rs` 缺失 `subject` 字段，导致 `--all-features` 构建失败，这阻碍了测试所有功能。” — **#8236** (@IftekharUddin)

#### 8. 待处理积压

- **#6165: RFC: Prefer a lighter ZeroClaw core through external integrations** (创建于4月27日，6月25日有更新)：关于核心轻量化的重要RFC讨论持续至今，但似乎尚未形成明确共识或进入实施阶段。需要维护者介入引导方向或推进决策。

- **#7497: RFC: OCI-Compliant Container Registries as the Plugin Storage and Discovery Mechanism** (创建于6月11日，标记为 `needs-maintainer-review`)：插件存储架构的改革提案，等待维护者技术评估。

- **#5903: MCP stdio child processes accumulate on daemon** (创建于4月19日，`status:accepted`)：这是一个已确认的Bug，但尚无对应的修复PR。长期存在的子进程泄漏问题对生产环境的稳定性有重大影响，应优先分配资源解决。

- **#6489: "Everything is a plugin" — phased path from Integrations → unified plugin catalog** (创建于5月6日)：核心架构愿景的追踪Issue，虽然长期存在，但这类长远规划需要维护者定期更新进展，以免社区对项目方向产生疑虑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 GitHub 数据生成的 **PicoClaw 项目动态日报**。

---

### PicoClaw 项目动态日报
**日期**: 2026-06-26

---

#### 1. 今日活动概览

今日项目活跃度较高，主要集中在问题和 PR 的修复与合并上。过去 24 小时内，新增及更新的 Issues 共 3 条，其中 2 条已被关闭，1 条仍在开放讨论。PR 活动异常频繁，共计 19 条更新，其中 6 条已被成功合并或关闭；值得注意的是，有 13 条 PR 处于待合并状态，数量较多。今日项目发布了大量的依赖更新和代码质量修复，但未有新版本发布。

#### 2. 版本发布

无新版本发布。

#### 3. 项目进展

今日有多项重要的 Bug 修复和功能优化被合并，提升了项目稳定性和代码质量。

- **修复 Spawn 子任务消息重复问题**：PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) 修复了在异步子 Agent 完成时，因 `ForUser` 字段未清理导致的消息重复投递问题。该 PR 状态为待合并，但如被合入将提升多 Agent 协作场景下的消息可靠性。
- **修复技能安装中的类型断言问题**：PR [#3092](https://github.com/sipeed/picoclaw/pull/3092)（已合并）修复了 `skills_install` 组件中因忽略类型断言检查（`ok`）可能导致静默失败的问题。
- **修复 Matrix 用户 ID 解析问题**：PR [#3045](https://github.com/sipeed/picoclaw/pull/3045)（已合并）解决了 `allow_from` 功能对标准 Matrix 用户 ID (格式如 `@alice:example.com`) 的解析错误，避免了消息被错误拒绝。
- **优化 Evolution 模式心跳查询**：PR [#3169](https://github.com/sipeed/picoclaw/pull/3169)（已合并）优化了 Evolution 模式下对心跳任务的调度逻辑，避免了无效的 Token 消耗。
- **修复 OpenAI 兼容接口构建失败**：PR [#3166](https://github.com/sipeed/picoclaw/pull/3166)（已合并）修复了 `openai_compat` 包中因使用了未定义的 `log` 变量导致的构建失败问题。
- **修复模型列表获取时的错误处理**：PR [#3168](https://github.com/sipeed/picoclaw/pull/3168)（已合并）改进了在获取 OpenAI 兼容模型列表时，遇到非 200 状态码但无法读取错误体的错误处理逻辑。

#### 4. 社区热点

今日社区讨论焦点集中在以下议题：

- **替换不安全加密库 libolm**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) (状态: 开放) 持续获得关注，讨论用官方推荐的 `vodozemac` 替换已被弃用且不安全的 `libolm`。这是一个重要的安全议题，获得了 2 个 👍，社区参与度较高。
- **新增 DeltaChat 网关**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) (状态: 开放) 提议为 PicoClaw 增加对 DeltaChat 的支持，作为新的消息通道。该 PR 获得了维护者的初步评审，表明社区对扩展项目生态能力有持续需求。

#### 5. Bug 与稳定性

今日报告的 Bug 中，部分已被修复或已有修复方案。

- **(严重) 使用 Spawn 时消息重复**：PR [#3142](https://github.com/sipeed/picoclaw/pull/3142) 解决了在异步子 Agent 完成时，消息被重复投递给用户的问题。该修复已被提出，等待合入。
- **(中等) Evolution 模式消耗 Token**：Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012) (已关闭) 报告了 Evolution 模式启用后，系统每分钟持续消耗 Token 的问题。此问题已被修复（参见 PR #3169，通过跳过心跳任务的 Evolution 路径解决）。
- **(中等) 设置定时任务导致频道错误**：Issue [#1757](https://github.com/sipeed/picoclaw/issues/1757) (已关闭) 报告用户设置每小时执行任务的 Cron 时出现频道错误。由于该 Issue 已关闭，可能需要关注其关联的修复是否已发布或从属于其他子任务。
- **(低风险) 资源释放与错误处理**：多个由 `@chengzhichao-xydt` 提交的 PR（如 [#3128](https://github.com/sipeed/picoclaw/pull/3128), [#3172](https://github.com/sipeed/picoclaw/pull/3172)）修复了多处 `resp.Body.Close()` 错误未处理、Base64 编码器泄露以及 `sync.Map` 类型断言可能导致 panic 的问题，提升了代码健壮性。

#### 6. 功能请求归类

- **安全性 / 依赖升级**：
    - **替换 libolm**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 是社区强烈要求的安全增强请求。
    - **依赖更新**：多个 Dependabot PR（如 [#3177](https://github.com/sipeed/picoclaw/pull/3177), [#3176](https://github.com/sipeed/picoclaw/pull/3176) 等）自动提出升级 `copilot-sdk`, `telego` 等依赖版本，用以修复潜在漏洞或获取新特性。
- **新功能 / 集成**：
    - **新增 DeltaChat 网关**：PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) 请求添加 DeltaChat 作为新的通信渠道。
    - **添加远程 WebSocket 模式**：PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) 提议为 `picoclaw agent` 命令增加远程 WebSocket 连接模式，以支持远程交互。
- **错误修复与兼容性**：
    - **修复 inline data URL 解析**：PR [#3115](https://github.com/sipeed/picoclaw/pull/3115) 修复了通用工具输出中包含 `data:image/...` 字符串时，被错误识别为媒体附件导致会话历史被破坏的问题。

#### 7. 用户反馈摘要

从今日关闭的 Issue 评论中可以看出：

- **用户对自动任务行为的准确性敏感**：Issue #1757 和 Issue #3012 的关闭表明，用户对定时任务（Cron）和自动演化（Evolution）功能的稳定性和可预测性有较高要求，任何非预期的频次或错误（如频道错误、Token 消耗）都容易被用户报告。
- **使用场景关注异步与稳定性**：PR #3142 涉及的子 Agent 消息重复问题，反映出用户在多 Agent 或异步任务的复杂场景中，对消息投递的一致性体验有明确的预期。

#### 8. 待处理积压

- **替换 libolm 功能请求**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 作为一个高优先级的功能请求和安全改进，已开放两周多，虽然获得社区支持，但目前尚无明确的实现 PR 或来自维护者的详细回复。
- **依赖更新批量积压**：当前有 13 个 PR 处于开放和待合并状态，其中多数为 Dependabot 提交的依赖更新 PR（如 [#3177](https://github.com/sipeed/picoclaw/pull/3177), [#3176](https://github.com/sipeed/picoclaw/pull/3176) 等）。维护者需要关注并尽快合入这些自动化更新，以避免依赖项间的版本冲突或安全问题。

</details>