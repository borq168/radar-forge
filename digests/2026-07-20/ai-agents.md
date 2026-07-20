# OpenClaw 生态日报 2026-07-20

> Issues: 344 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-07-20 02:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报
**日期：2026-07-20**

---

## 1. 今日活动概览
过去24小时，项目共产生 **344 条 Issue 更新**（231 条新开/活跃，113 条关闭）和 **500 条 Pull Request 更新**（363 条待合并，137 条已合并/关闭）。无新版本发布。活跃讨论集中在跨平台桌面应用、安全机制、会话稳定性、通道能力增强等方向，多个长期悬置的议题进入密集审议。

---

## 2. 版本发布
无新版本发布。

---

## 3. 项目进展
今日已合并/关闭的 PR 中包含以下值得关注的修复与功能：

- **UI 支持拖拽附件** [#111530](https://github.com/openclaw/openclaw/pull/111530)：Web 控制台的“新建会话”输入框现在支持拖放图片等附件，与已有的粘贴和“+”按钮保持一致。
- **Chutes 用量计费修复** [#111253](https://github.com/openclaw/openclaw/pull/111253)：修正了 Chutes 提供商的缓存读取用量被误报为免费的问题，现按实际定价展示缓存命中费用。
- **QA 通道线程/编辑动作规范化** [#111070](https://github.com/openclaw/openclaw/pull/111070)：修复 QA 通道未能正确消费消息运行器发出的标准字段，使得 `threadName` 和 `edit` 动作可正常提交。
- **Nextcloud Talk 通道 URL 校验** [#111054](https://github.com/openclaw/openclaw/pull/111054)：阻止非交互式添加通道时保存非法 URL 方案，避免产生不可达的账户配置。
- **TLS 证书生成超时绑定** [#109139](https://github.com/openclaw/openclaw/pull/109139)：为自签名证书生成添加截止期限，防止 OpenSSL 挂起导致网关无限等待，并保护证书文件完整性。
- **macOS 遗留启动项清理强化** [#109116](https://github.com/openclaw/openclaw/pull/109116)：`openclaw doctor --fix` 不再无限等待卸载旧的 launchd 服务，并在卸载失败后保留 plist 文件供日后修复。

---

## 4. 社区热点
今日讨论最热烈的话题（按评论数排序，均已附链接）：

1. **Linux/Windows 桌面应用** [#75](https://github.com/openclaw/openclaw/issues/75)（114 评论，80 👍）
   用户持续呼吁提供与 macOS、iOS、Android 对等的 Linux 与 Windows 原生应用。该 Issue 已存活半年有余，长期位居项目焦点。

2. **内存信任源标记** [#7707](https://github.com/openclaw/openclaw/issues/7707)（17 评论）
   提议按信息来源（用户指令、网页抓取、第三方技能）为代理记忆条目打上信任级别，防止恶意指令通过不可信内容注入记忆，继而影响后续行为。

3. **屏蔽密钥系统** [#10659](https://github.com/openclaw/openclaw/issues/10659)（14 评论，4 👍）
   请求实现“可用但不可见”的 API 密钥机制，以避免代理在工具调用或响应中泄露原始凭证，防范提示注入攻击窃取密钥。

4. **硬性前置响应钩子** [#13583](https://github.com/openclaw/openclaw/issues/13583)（14 评论，2 👍）
   金融、安全等高敏场景需要强制代理在回答前必须调用特定工具，不能仅依赖提示词软约束，要求提供机械阻断能力。

5. **Cron 隔离代理丢失交付** [#94846](https://github.com/openclaw/openclaw/issues/94846)（12 评论，1 👍）
   用户报告定时任务中某个已恢复的工具错误仍被标记为致命，导致代理成功生成了最终输出却未送达用户，遭成消息丢失。

6. **子代理完成交付故障** [#92076](https://github.com/openclaw/openclaw/issues/92076)（10 评论）
   当请求方会话已驱逐/不活跃时，子代理的完成结果无法写入原会话，用户端仅看到通用错误，影响消息可靠性。

7. **Telegram 通道停止超时导致通道永久沉默** [#70024](https://github.com/openclaw/openclaw/issues/70024)（9 评论）
   超时未清理的通道快照与残余任务导致通道外观运行实则永远不响应，要求改善恢复逻辑。

8. **“万物皆 Cron”统一自动化** [#110950](https://github.com/openclaw/openclaw/issues/110950)（7 评论，2 👍）
   维护者发起，希望将心跳、监听器、计划任务等所有自动化概念统一为 Cron 作业，降低系统复杂度。

---

## 5. Bug 与稳定性
以下为今日数据中关注的 Bug 与回归问题，已按影响程度排序，并标注是否已有对应修复 PR：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 P1 | [#109490](https://github.com/openclaw/openclaw/issues/109490) | `codex app-server` 客户端委托工具结果导致代理中断，后续承诺工作永不执行 | 开放，无 PR |
| 🔴 P1 | [#108580](https://github.com/openclaw/openclaw/issues/108580) | Cron 工具模式与 llama.cpp 语法约束工具调用不兼容，致所有请求失败（2026.7.1 回归） | 开放，已有 PR #(未知) |
| 🔴 P1 | [#102006](https://github.com/openclaw/openclaw/issues/102006) | `exec` 工具被中止后，同一会话后续调用死锁（#94412 回归） | 开放，无 PR |
| 🔴 P1 | [#92076](https://github.com/openclaw/openclaw/issues/92076) | 子代理完成结果因请求方会话锁住而递送失败 | 开放，无 PR |
| 🔴 P1 | [#99910](https://github.com/openclaw/openclaw/issues/99910) | 记忆做梦运行占用网关事件循环约10分钟，短期记忆存储无法持久化 | 开放，无 PR |
| 🟡 P2 | [#93139](https://github.com/openclaw/openclaw/issues/93139) | `write` 和 `exec` 的 heredoc 将文字 `\n` 插入而非换行符 | 开放，无 PR |
| 🟡 P2 | [#110065](https://github.com/openclaw/openclaw/issues/110065) | `compaction.enabled` 字段被代码读取却被配置模式拒绝 | 开放，无 PR |
| 🟡 P2 | [#83337](https://github.com/openclaw/openclaw/issues/83337) | 核心与插件版本不同步导致通道静默失效，无明确兼容性告警 | 开放，无 PR |
| 🔵 | [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram 私聊回复因 DM 范围清理丢失归属（2026.7.2-beta.3 回归） | 开放，无 PR |
| 🔵 | [#111506](https://github.com/openclaw/openclaw/issues/111506) | 高频请求导致大上下文下的会话锁竞争 (`EmbeddedAttemptSessionTakeoverError`) | 开放，无 PR |

此外，已关闭的 Bug 包括 [#108075](https://github.com/openclaw/openclaw/issues/108075)（LLM 请求被拒绝）、[#89954](https://github.com/openclaw/openclaw/issues/89954)（Telegram getUpdates 409 级联）、[#108238](https://github.com/openclaw/openclaw/issues/108238)（上下文 token 计算错误）等。

---

## 6. 功能请求归类
今日浮现的功能请求涵盖以下方向，均来自真实场景诉求：

**安全与权限**
- **技能权限清单标准** [#12219](https://github.com/openclaw/openclaw/issues/12219)：要求 `skill.yaml` 声明所需权限，安装前用户可审查。
- **可注册的外部审批裁决层** [#97152](https://github.com/openclaw/openclaw/issues/97152)：提供能力级、跨沙盒、排他性的审批接口，供外部审批提供者集成。
- **执行审批黑名单** [#6615](https://github.com/openclaw/openclaw/issues/6615)（8 👍）：在现有白名单外增加黑名单，实现“允许全部、禁止指定命令”。

**会话与消息管理**
- **Webhook 会话复用（多轮支持）** [#11665](https://github.com/openclaw/openclaw/issues/11665)：修复 `sessionKey` 一致性时的会话复用逻辑，实现真正的多轮。
- **抑制子代理公告** [#8299](https://github.com/openclaw/openclaw/issues/8299)：增加配置项避免子代理完成后的冗余总结。
- **群聊合并到主会话** [#7524](https://github.com/openclaw/openclaw/issues/7524)（4 👍）：同群组的讨论可合并到单个会话，类似 `dmScope: "main"`。
- **`session:end` 内部钩子** [#10142](https://github.com/openclaw/openclaw/issues/10142)：会话结束时发出事件，便于与工作流引擎集成。
- **智能自动标题** [#99583](https://github.com/openclaw/openclaw/issues/99583)：利用廉价模型按需生成、主题感知地重命名会话。

**通道与集成**
- **WhatsApp 仅监听/钩子模式** [#78963](https://github.com/openclaw/openclaw/issues/78963)：接收消息触发插件钩子而不唤醒代理，用于归档/ETL 场景。
- **Telegram 机器人与机器人、宾客模式** [#79077](https://github.com/openclaw/openclaw/issues/79077)（8 👍）：适配 Telegram 2026 年 5 月新增的 Bot API。
- **WhatsApp 通话事件订阅** [#7540](https://github.com/openclaw/openclaw/issues/7540)（2 👍）：通过 Baileys 捕获语音/视频通话事件，改进联系检测。

**代理行为与性能**
- **最大轮次/工具调用限制** [#9912](https://github.com/openclaw/openclaw/issues/9912)：强制代理在一定步数后必须给出回应，防止某些模型忽略指令。
- **上下文溢出错误信息优化** [#9409](https://github.com/openclaw/openclaw/issues/9409)（3 👍）：提供具体 token 使用量和调整建议。
- **模型回退触发上下文超限** [#9986](https://github.com/openclaw/openclaw/issues/9986)：已配置备选模型时，上下文超出应自动切换而非冻结。
- **OpenRouter 用量成本暴露给代理** [#9016](https://github.com/openclaw/openclaw/issues/9016)：让代理能在回复中附加调用成本。
- **流式 TTS 语音通话管道** [#8355](https://github.com/openclaw/openclaw/issues/8355)：句子级 LLM→TTS→音频流化，降低首字延迟。

**开发者体验与工具**
- **TUI 支持 Shift+Enter 换行** [#10118](https://github.com/openclaw/openclaw/issues/10118)（4 👍）：终端聊天需要复合换行/发送机制。
- **回退链路测试命令** [#6599](https://github.com/openclaw/openclaw/issues/6599)：提供 `/models test-fallback` 验证模型回退配置。
- **内存/上下文改进大需求** [#11955](https://github.com/openclaw/openclaw/issues/11955)：包括全局语义搜索、对话链式连接、重启预加载等。

**PR 中的

---

## 横向生态对比

# 开源 AI 智能体项目社区动态横向观察

**日期：2026-07-20**

---

## 1. 今日横向概览

今日仅 **OpenClaw** 与 **Youdao Lobster** 两个项目有动态记录。OpenClaw 活动高度活跃，共产生 344 条 Issue 更新与 500 条 PR 更新，多个安全、会话可靠性与通道集成议题密集推进，并有 6 个修复合并入主分支。Youdao Lobster 今日完全无新的人类活动，所有 Issue/PR 动作均由 Stale 自动化流程触发（标记过期或关闭长期未活动条目），无代码合入与维护者回应。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues（新/活/关） | 今日 PRs（新/活/关） | 新 Release | 事实性备注 |
|------|------------------------|---------------------|-----------|-----------|
| **OpenClaw** | 344 (231 新活, 113 关) | 500 (363 待合并, 137 已合并/关闭) | 无 | 多项修复合并，安全与通道可靠性议题讨论热烈；桌面应用议题累计 114 条评论 |
| **Youdao Lobster** | 0 新, 2 旧保持 open, 1 被 stale 关闭 | 0 新, 2 旧保持 open, 1 被 stale 关闭 | 无 | 全天无人类活动；积压条目均被打 `stale` 标签，最小活动间隔已超过 3 个月 |

---

## 3. OpenClaw 与同类对照

由于今日仅有 OpenClaw 和 Lobster 具有动态，且 Lobster 处于停滞状态，此处仅能对比两者活动量级与讨论面：

- **活动量**：OpenClaw 单日即产生 800+ 条 Issue/PR 更新，Lobster 仅机器人操作 6 条。前者有明确的新代码合并与维护者参与，后者全无。
- **技术重点**：OpenClaw 当前聚焦于跨平台桌面应用（#75 获得 80 👍）、信任源标记与密钥屏蔽（#7707、#10659）、硬性前置钩子（#13583）、以及多个 P1 级别的会话/工具可靠性问题。Lobster 的遗留问题则停留在 UI 体验（代码折叠 #1289）和凭证校验缺失（#1287）。
- **社区讨论面**：OpenClaw 的讨论覆盖安全设计、通道可靠性、自动化统一、代理行为约束等数个方向；Lobster 无新讨论。

---

## 4. 共同出现的技术方向

今日 **无** 跨项目的共同技术方向出现。OpenClaw 的大量讨论集中在代理安全、通道故障恢复和桌面客户端补齐；Lobster 的唯二开放条目为 IM 机器人连通性校验缺失与代码块折叠 UI，二者无重叠。此为单日状态，不代表长期趋势。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Youdao Lobster |
|------|----------|----------------|
| 功能侧重 | 多通道、多模型智能体编排，强调安全策略（信任源、硬性前置钩子、密钥屏蔽）与复杂会话/工具链可靠性 | 面向轻量 AI 助手体验，集成 IM 机器人（如 Popo）与 skills 生成，偏重前端交互 |
| 目标用户 | 需高可控性、多通道部署的开发者与组织，对代理行为强制约束有强需求（金融、安全等） | 可能是企业内部工具或低门槛个人助手，强调对话与简单自动化 |
| 技术架构 | 插件化通道体系（Telegram、WhatsApp、Nextcloud Talk 等）、Cron 自动化统一化、多层次会话锁与子代理模型 | 依赖 skills 文件生成与页面级交互，技术栈含 Node.js 前端依赖（tailwindcss 等），但积压的依赖升级 PR 长期未动 |

---

## 6. 社区活跃度记录

- **高活跃**：**OpenClaw**。今日有超过 800 条 Issue/PR 更新量，包含用户密集讨论、维护者合并修复，以及多个跨领域新功能请求，处于非常活跃的迭代消化期。
- **极低活跃（近乎停滞）**：**Youdao Lobster**。全天零人类贡献，所有动态为 Stale 机器人触发；至少 3 个月无实质维护者参与，积压的 Bug 与 PR 面临自动关闭风险。

---

## 7. 有证据支撑的观察

1. **OpenClaw 的安全关注点从模型行为延伸至数据源头与凭证保护**
   今日同时出现三项独立的安全相关议题：按信息来源标记记忆信任度（#7707）、防止密钥泄露的屏蔽机制（#10659）、以及要求技能声明权限清单（#12219）。三者均聚焦于阻止不可信内容或未授权访问污染代理决策或泄露敏感信息，表明社区已从一般性的“提示注入”讨论进入具体设计阶段。

2. **OpenClaw 的远端通道与子代理交付可靠性问题以复数 P1 级 Bug 形式集中暴露**
   今日至少 4 个 P1 级 Bug 涉及消息未送达或承诺工作未执行，包括 Cron 隔离代理丢失最终输出（#94846）、子代理完成写入失败（#92076）、委托工具结果导致代理中断（#109490）和 Telegram 通道永久沉默（#70024）。这些全部指向“产出已生成但不可达”的通道/会话生命周期边界问题，且均无对应修复 PR 合并，是当日最显著的稳定性风险簇。

3. **OpenClaw 跨平台桌面应用仍是最高票诉求且处于长期未解决状态**
   Issue #75 以 114 条评论和 80 个 👍 长期占据热度榜首；今日无相关进展，仅作为持续数月的高票请求再次出现在日报中。

4. **Youdao Lobster 已进入无人维护的警示区间**
   今日数据中，所有条目均由 Stale 机器人操作，包括 4 个依赖升级 PR（#1285、#1286）与 2 个用户反馈的 Bug/体验问题超过 3 个月无任何人类回应。唯一有实质内容的新动静 — skills 文件生成阻塞的反馈 — 随 PR 被机器人关闭而彻底搁置。此状态若继续，项目将丧失社区信任。

5. **今日暂无明确跨项目信号**
   OpenClaw 与 Lobster 在关注方向、技术栈、活动量级上均无重叠，也无同一用户或维护者在双方社区交叉交流的可见证据，因此无法形成有支撑的生态级判断。

---

*报告依据：2026-07-20 OpenClaw 与 Youdao Lobster 社区动态摘要。所有结论严格基于当日数据，不包含长期趋势推测或未在今日出现的历史背景。*

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

**Youdao Lobster 项目日报**
**日期：2026-07-20**

---

### 1. 今日活动概览
过去 24 小时内，项目无新版本发布。Issues 与 Pull Requests 的活动均由 Stale 自动化流程触发：2 个旧 Issue 与 2 个旧 PR 被标记为 `stale` 后依旧保持开放，1 个旧 Issue 与 1 个旧 PR 因长期不活跃被机器人自动关闭。无新的议题创建或代码合入。

---

### 2. 版本发布
无新版本发布。

---

### 3. 项目进展
今日无重要代码合并。唯一被关闭的 PR [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350)（“skills 文件长时间生成阻塞无法感知，中间过程无展示”）因超过 3 个月无活动被 Stale 机器人关闭，该问题未得到修复或合并进主分支。

---

### 4. 社区热点
今日无新增讨论。仍在开放的 Issue [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) 提议为长代码块增加折叠/展开功能以改善阅读体验，虽然创建于 3 个月前且被标记 `stale`，但其诉求较明确，可能代表部分用户的持续痛点。

---

### 5. Bug 与稳定性
- **已关闭 Bug**
  [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) 任务对话框中，任务运行期间附件上传无响应。因长期无活动被自动关闭，未见修复 PR。

- **仍开放 Bug**
  [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) 设置 - IM 机器人对 Popo 进行连通性测试时，填入任意值（如全填 “1”）也会显示连接通过，存在凭证校验缺失问题。该 Issue 当前为 `Open` 但已被打上 `stale` 标签，无关联修复 PR。

---

### 6. 功能请求归类
- [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) 请求为 15~200 行的代码块添加自动折叠/展开功能，避免长代码块撑满整个会话视图，改善多轮对话的可读性。

---

### 7. 用户反馈摘要
来自已关闭 PR [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350) 的用户反馈：
- 使用 skill-creator 生成 skills 时，文件生成会长时间阻塞，期间既无进度提示也无错误信息，用户完全无法感知当前状态。
- 模型对同一提示词的理解存在偏差：相同模型在 Openclaw 中可以正常生成 skills，但在 LobsterAI 中结果不符合预期。
  该反馈随 PR 被 Stale 关闭而搁置，问题未得到回应或解决。

---

### 8. 待处理积压
以下条目已超过 3 个月无维护者回应，且均被标记 `stale`，面临后续自动关闭风险：
- **Bug:** [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) IM 机器人连通性测试无实际校验。
- **功能请求:** [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) 代码块折叠/展开。
- **依赖升级 PR:**
  - [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) `concurrently` 8.2.2 → 9.2.1
  - [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) `tailwindcss` 3.4.19 → 4.2.2

上述依赖升级 PR 由 Dependabot 自动创建，长期未合并可能影响依赖安全与兼容性，建议维护者评估后操作。

</details>