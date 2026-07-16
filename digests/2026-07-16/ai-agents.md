# OpenClaw 生态日报 2026-07-16

> Issues: 476 | PRs: 500 | 覆盖项目: 2 个 | 生成时间: 2026-07-16 00:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [youdao lobster](https://github.com/netease-youdao/lobsterai)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 – 2026-07-16

## 1. 今日活动概览
过去24小时，项目 Issue 更新量达 **476** 条（新开/活跃 307 条，关闭 169 条），Pull Request 更新量达 **500** 条（开放 342 条，合并/关闭 158 条）。同时发布了新版本 **v2026.7.2-beta.1**，重点引入远程编码会话和原生自动化节点。社区焦点集中在昨日发布的 2026.7.1 正式版引发的多项 **P0 启动崩溃与数据迁移问题**，维护团队正通过十余个紧急 PR 及快速关闭的 Issue 进行应对。

## 2. 版本发布
### v2026.7.2-beta.1
*发布日期：2026-07-15*
发布摘要（截断）显示以下亮点：
- **远程编码会话**：可在云端 Worker 上运行 Control UI 会话，在所属主机的终端内打开 Codex、Claude 编录会话，并直接在终端恢复 OpenCode 与 Pi 会话。（关联 PR：#107670, #107086, #107200）
- **原生自动化与节点**：描述未完整给出，预计包含进一步的自动化能力与节点集成。

> **注意**：该版本为 beta 版，上述功能尚未锁定。由于昨日 2026.7.1 稳定版存在大量回归，建议用户关注该 beta 版后续修补，生产环境暂勿升级。

## 3. 项目进展（今日已关闭/合并的重要 PR）
今日共有 158 个 PR 被合并或关闭，以下是几项代表性进展：
- **QA 实验室**：合并 [#108465](https://github.com/openclaw/openclaw/pull/108465) 统一实时传输选择器合约，修复了 Telegram 心跳关闭导致凭据租约泄漏的问题。
- **飞书通道修复**：[#105549](https://github.com/openclaw/openclaw/pull/105549) 已合并，为飞书应用注册过程的 SSRF 保护请求正确传递超时参数，避免注册卡死。
- **LINE 通道精确控制**：[#107230](https://github.com/openclaw/openclaw/pull/107230) 修复了 LINE 群组中内联斜杠/感叹号标记误触发旁路提及检查的缺陷。
- **插件加载器重构**：[#108513](https://github.com/openclaw/openclaw/pull/108513) 与 [#108514](https://github.com/openclaw/openclaw/pull/108514) 将原本近 3000 行的插件加载器拆分为缓存、发现、注册等多个职责模块，降低维护风险。
- **Codex 文本提供者合并**：[#108474](https://github.com/openclaw/openclaw/pull/108474) 将冗余的 `codex/*` 文本提供者合并至统一的 OpenAI 提供者，并附带医生迁移步骤，此举旨在解决模型编录重复、路由错误等问题。
- **工作区 UI 稳定性**：[#108204](https://github.com/openclaw/openclaw/pull/108204) 修复了 Control UI 在重叠重载后可能停留在旧版本的问题。

## 4. 社区热点（评论数最多的 Issues/PRs）
今日讨论最集中的议题聚焦于 **2026.7.1 升级引发的连锁崩溃** 以及 **长期的功能缺失**：

- **[Linux/Windows 桌面应用](https://github.com/openclaw/openclaw/issues/75)** `#75`
  长达 7 个月的需求，113 条评论，81 个 👍。用户持续要求补充 macOS/iOS/Android 之外的 Linux 与 Windows 原生客户端，目前仍无明确的交付时间。

- **工具结果被替换为字符串 “(see attached image)”** `#104721`
  17 条评论，P0 级别。所有工具调用返回的实际内容被字面字符串替代，导致读写文件等操作完全不可用，属于功能性崩溃。

- **第二消息失败：跨通道会话冲突**

  `#102020`
  14 条评论。在 Signal 和另一个通道中，新会话的第二条消息总是触发 `reply session initialization conflicted`，影响基础的消息连续性。

- **Codex 本地钩子 CPU 飙升** `#91009`
  12 条评论，P1。`preToolUse` 钩子短时间产生大量 `openclaw-hooks` 进程并占满 CPU，导致网关 RPC 停滞。

- **Cron 通知触发 EmbeddedAttemptSessionTakeoverError** `#84583`
  12 条评论。用户主动聊天时，由 crontab 产生的会话结果通知会抢占主会话，引发会话状态冲突。

- **DeepSeek 缓存命中率暴跌** `#94518`
  9 条评论，10 个 👍。从 2026.5.28 升级至 2026.6.x 后，提示词缓存命中率从预期水平降至 <10%，直接影响成本和延迟。

- **Legacy 状态迁移警告循环** `#90213`
  11 条评论。`openclaw doctor --fix` 无法消除迁移警告，始终提示 SQLite 状态冲突。

**启动崩溃相关热点（全部为 P0）**：
- [#107220](https://github.com/openclaw/openclaw/issues/107220) – 8 评论，memory 侧边车 `meta`/`chunks` 冲突导致网关崩溃循环。
- [#107227](https://github.com/openclaw/openclaw/issues/107227) – 8 评论，启动迁移门致命冲突，`openclaw doctor` 无法修复。
- [#107694](https://github.com/openclaw/openclaw/issues/107694) – 7 评论，启动时 benign 迁移跳过被当作致命错误。
- [#103076](https://github.com/openclaw/openclaw/issues/103076) – 9 评论，额外遗留状态源阻止网关启动。
- [#107330](https://github.com/openclaw/openclaw/issues/107330) – 6 评论，Windows 更新后彻底崩溃。

这些用户共同表达了“升级无法使用，无有效恢复路径”的强烈不满。

## 5. Bug 与稳定性
### P0（升级阻断/数据丢失风险）
- **网关启动致命崩溃**：至少 5 个独立报告（`#107220`  `#107227` `#107694` `#103076` `#107330`），均与 2026.7.1 的遗留状态迁移逻辑相关。部分报告提到 `openclaw doctor` 无法修复，要求立即恢复上一版本才能启动。目前已有 PR `#108518` 尝试修复本地服务启动错误解码，但直接针对迁移门的修复尚未看到合并。
- **工具真实结果被字符串替换**（`#104721`）：读写文件等核心功能完全失效，现有工具调用返回无意义占位符。
- **模型选择器不持久化**（`#101763`）：Hosted Molty 实例上模型 ID 被错误携带点号，导致所有 API 请求失败。

### P1（高优先级功能受损）
- **原生钩子 CPU 风暴**（`#91009`），已关联 PR 但尚未合入。
- **Cron 工具 JSON Schema 不兼容 llama.cpp**（`#107449`），工具调用被拒绝，影响使用本地 LLM 的用户。
- **WebChat 会话历史覆盖**（`#77012`），每轮只保留最后一条消息，UX 严重退化。
- **模型回退链与配额耗尽问题**（`#85103` `#103734`），导致会话中断且无法自动切换提供商。
- **WhatsApp 图片处理卡死**（`#96834`），收到图片后主会话阻塞约 3 分钟。

### P2（功能异常/体验摩擦）
- **Cron 隔离会话误报失败**（`#91532`），实际成功的运行被标记错误，干扰监控。
- **Memory 核心搜索持续失败**（`#90414`），`memory_search` 始终返回元数据缺失错误。
- **`exec` 工具误插 `\n`**（`#93139`），写入文件和 exec heredocs 出现字面反斜杠 n。
- **Slack 读取请求超时缺失**（PR `#107195`），已有关联修复 PR 等待评审。

### 回归标注
今日 Bug 中有大量被作者标注为 **Regression（之前正常，现在失败）**，包括 #104721、#90213、#102020、#85773、#77012、#107227 等多个，表明近期版本的质量波动较大。

## 6. 功能请求归类
用户与开发者社区今日提出了以下明确的功能诉求（含相关 PR）：

- **Webhook 多轮会话支持**：[#11665](https://github.com/openclaw/openclaw/issues/11665) – 要求 `sessionKey` 一致时复用会话，而非每次生成新会话。当前实现的文档与行为不符。
- **子代理结果隔离**：[#96975](https://github.com/openclaw/openclaw/issues/96975) – 希望子代理完成后只返回状态摘要和会话链接，而非将大量子代理输出注入父会话，占用上下文。
- **MEMORY.md 生命周期管理**：[#87660](https://github.com/openclaw/openclaw/issues/87660) – 请求 LLM 驱动的记忆整理、过期和锚点保护，目前自动提升只做短时召回。
- **AI 安全与质量可观察性事件**：[#82548](https://github.com/openclaw/openclaw/issues/82548) – 需要注入提示注入、引用质量、人类反馈等安全信号，以支持合规审计。
- **智能多 LLM 路由**：[#107686](https://github.com/openclaw/openclaw/issues/107686) – 按任务类型（视觉、调试、通用等）自动选择最具成本效益的模型，降低 Token 开销。
- **插件协议扩展**：[#73274](https://github.com/openclaw/openclaw/issues/73274) – 请求将 `appendAssistantMessageToSessionTranscript` 暴露给插件 Runtime API，支持跨会话持久化消息。
- **iOS 应用的后台模式声明**：[#86217](https://github.com/openclaw/openclaw/issues/86217) – 询问是否应在 plist 中声明 `location` 后台模式以匹配代码行为。
- **关联 PR**：[#107805](https://github.com/openclaw/openclaw/pull/107805) 为 MCP 通道增加了受保护的协调写路由；[#108505](https://github.com/openclaw/openclaw/pull/108505) 正在实现通过 APNs 向配对的 iOS 设备推送插件审批通知；[#108510](https://github.com/openclaw/openclaw/pull/108510) 为 Slack 添加选项性的限定作用域在线状态事件。

## 7. 用户反馈摘要
- **升级焦虑**：多位用户（如 `#107227` 的 Marvinthebored 、`#107694` 的 HankSU7889、`#107330` 的 smelike）在尝试升级至 2026.7.1 后遭遇网关直接无法启动或 crash-loop，且 `openclaw doctor` 未能修复，不得不回滚或等待紧急补丁，引发对发布流程可靠性的质疑。
- **核心功能不可用**：`#104721` 报告所有文件读取结果变为文字占位符，被形容为“完全崩溃”；`#101763` 用户无法通过模型选择器正常对话，API 永远收到错误格式的模型 ID；`#77012` 指出 WebChat 历史消失，无法回顾讨论。
- **沉默的副作用**：`#85103` 中用户描述了从配额限制开始，引发一连串失败（回退链未触发、会话抢占、上下文丢失），认为错误处理链条薄弱。
- **对稳定性的期待**：多次出现“之前版本正常”的回归标记，表明社区已将 2026.5.x 视为一个相对稳定的基线，新版本的不稳定性正在消耗信任。
- **正面信号**：`#107686` 等特征请求仍在活跃提出，`#75` 对 Linux/Windows 客户端的持续需求（81 赞）说明用户群体在扩大，项目仍被视作有前景的个人 AI 助手平台。

## 8. 待处理积压
以下重要 Issue 长期未得到实质性响应，可能需要维护者关注：

- **[Linux/Windows 应用](https://github.com/openclaw/openclaw/issues/75)**（2026-01-01 创建，113 评论，

---

## 横向生态对比

# 开源 AI 助手项目横向对比日报（2026-07-16）

## 1. 今日横向概览
今日 OpenClaw 社区处于 2026.7.1 正式版发布后的紧急修复期，Issue 与 PR 更新量爆炸，大量用户因升级导致网关启动崩溃、核心工具失效等 P0 问题而密集反馈，维护者正通过十多个紧急 PR 抢修。LobsterAI 则处于平稳迭代节奏，发布了新版并合并了多项界面优化与更新体验改进，社区出现 1 条关于广告无关闭选项的新反馈。两者活跃度差异悬殊，且 OpenClaw 当前主要矛盾为版本质量与稳定性的信任危机。

## 2. 各项目活跃度对比

| 项目 | 过去24h Issue 更新（新开/活跃，关闭） | PR 更新（开放，合并/关闭） | 版本发布 | 事实性备注 |
|------|---------------------------------------|---------------------------|----------|------------|
| OpenClaw | 476 条（新开/活跃 307，关闭 169） | 500 条（开放 342，合并/关闭 158） | v2026.7.2-beta.1（昨日发布） | 社区集中在升级阻断性崩溃、数据迁移失败；至少 5 个 P0 启动崩溃报告；大量回归标记。 |
| LobsterAI | 6 条（新开 1，关闭 5） | 17 条（待合并 6，已合并/关闭 11） | LobsterAI 2026.7.15（昨日发布） | 1 条新反馈关于广告无法关闭；关闭的多为 stale issue；积压多个 dependabot PR。 |

## 3. OpenClaw 与同类对照
基于今日数据，OpenClaw 与 LobsterAI 的差异体现在三个层面：
- **活动量**：OpenClaw 单日 Issue 更新数是 LobsterAI 的 79 倍，PR 更新数约为 29 倍，维护压力完全不在一个量级。
- **技术重点**：OpenClaw 今日核心是处理回归与阻断性缺陷（状态迁移、启动崩溃、工具结果丢失、跨通道冲突），同时 beta 版引入远程编码会话、原生自动化节点等新能力；LobsterAI 集中于更新交互优化（覆盖层、设置页分组）、Windows 安装器实验选项以降低用户操作摩擦。
- **社区讨论面**：OpenClaw 今天多条 Issue 评论超 10 条，最长需求（Linux/Windows 客户端）已积攒 113 条评论，用户诉求覆盖崩溃修复、功能缺失、性能退化等多个维度；LobsterAI 仅有 1 条关于广告的即时反馈，且历史 issue 多为 stale 关闭，缺乏活跃对话。

## 4. 共同出现的技术方向
通过对两个项目今日动态的交叉比对，**未发现同时出现的技术方向或功能需求**。
OpenClaw 的目标侧重多通道通信、Cloud Worker 会话、自动化节点、插件生态与记忆/缓存优化；LobsterAI 则聚焦桌面客户端安装体验、界面组织和群聊机器人等协同功能。双方在用户诉求或技术路线今日无交集。

## 5. 差异化定位分析
- **功能侧重**：OpenClaw 定位为高度可扩展的个人 AI 助手平台，强调多通道接入（Telegram/Signal/LINE/飞书/Slack/WhatsApp 等）、插件体系、记忆管理、自动化与多模型路由；LobsterAI 侧重客户端协作体验，如桌面应用安装器、文件卡片交互、首页快捷场景、IM 会话协同。
- **目标用户**：OpenClaw 面对的是愿意自行托管、定制化要求高的技术型用户与开发者，需应对复杂部署和生产环境稳定性；LobsterAI 面向更通用的办公协同场景，用户更关注使用流畅度和低门槛安装。
- **技术架构**：OpenClaw 架构复杂度高，包含网关、侧边车、分布式状态迁移、MCP 通道及远程 Worker 等；LobsterAI 架构以 Electron 桌面应用为核心，涉及构建分发、UI 组件和本地/IM 会话管理。

## 6. 社区活跃度记录
- **极高活跃**：OpenClaw，单日 Issue 与 PR 更新量均接近 500，合并/关闭 PR 158 个，社区反馈密集且即时，多个 issue 参与人数超 10。
- **低活跃**：LobsterAI，单日 Issue 更新仅 6 条，PR 17 条，新反馈零星且历史遗留问题批量 stale 关闭，未见高密度讨论。

（今日数据仅反映日频波动，不宜据此推断长期社区健康度。）

## 7. 有证据支撑的观察
1. **OpenClaw 面临一次性大规模回归潮**
   今日至少出现 5 个独立的 P0 网关启动崩溃报告（#107220、#107227、#107694、#103076、#107330），均与 2026.7.1 的遗留状态迁移逻辑相关；同时大量 Issue 被标注为 Regression（#104721、#90213、#102020 等），表明近期版本稳定性出现了可追踪的集中倒退。

2. **OpenClaw 修复管线高压运转**
   单日合并/关闭 158 个 PR 中，直接针对崩溃、状态迁移、通道缺陷、插件加载器重构的修复数量显著。维护者通过快速迭代 PR（如 #108518、#108465、#108513/108514 等）应对，但尚未全部合入或验证，解决速度仍落后于问题涌现速度。

3. **LobsterAI 遭遇广告争议，界面策略可能影响用户感受**
   唯一新 issue（#2342）直指新版本引入左下角广告且无法永久关闭，引发用户反感。这可能反映项目在商业化探索中，原有免费工具定位被挑战。

4. **两个项目均在尝试降低新用户获取门槛**
   OpenClaw 持续被要求补全 Linux/Windows 客户端（#75，长期需求），而 LobsterAI 今日 release 明确增加了“Windows Web installer 实验选项”。两者共同指向扩大非 macOS 用户覆盖的意图。

5. **OpenClaw 的模型路由与记忆工程是热点，但落地仍在多次修补**
   #94518 的缓存命中率暴跌、#85103 的回退链失效、#90414 的 memory 搜索失败等问题，表明高级功能在实际部署中脆弱性高，今日仍在等待根本修复而非仅规避补丁。

（今日无跨项目信号表明两个项目在技术路线或社区诉求上趋同。）

---

## 同赛道项目详细报告

<details>
<summary><strong>youdao lobster</strong> — <a href="https://github.com/netease-youdao/lobsterai">netease-youdao/lobsterai</a></summary>

# LobsterAI 项目日报 (2026-07-16)

## 今日活动概览
过去24小时内，项目共有6条Issue更新（新开1条、关闭5条）、17条Pull Request更新（待合并6条、已合并/关闭11条），同时发布了 **LobsterAI 2026.7.15** 版本。该版本优化了文件卡片交互，新增Windows Web安装器实验选项，并对首页快捷操作场景进行了重构。社区新增1条关于广告展示的反馈，维护侧处理了多项设置分组、更新流程与模型支持相关的PR。

## 版本发布
**LobsterAI 2026.7.15**
*发布日期：2026-07-15*
更新内容（摘自 Release notes）：
- feat: optimize file card by @fisherdaddy in [#2322](https://github.com/netease-youdao/LobsterAI/pull/2322)
- feat(build): add opt-in Windows web installer target by @fisherdaddy in [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323)
- feat(cowork): revamp homepage quick-action scenar…（原文截断）
无破坏性变更说明，无需迁移操作。

## 项目进展
今日关闭或合并的重要PR包含以下功能推进与缺陷修复：
- **[新增模型与迁移路径]** #2332 为提供者添加 GPT‑5.6 与 Grok 4.5 默认模型，引入版本化模型迁移匹配逻辑，避免用户自定义的等效模型被重复添加。
- **[设置页重构]** #2336 将通用设置卡片化分组（基础、通知、数据与隐私），合并权限与问题通知开关，并修复 ThemedSelect 长标签溢出问题。
- **[更新体验提升]**
  - #2333 在用户触发更新时叠加覆盖层阻止应用交互，取消或失败后恢复交互。
  - #2338 优化更新覆盖层：进度居中、发布说明可滚动、增强错误恢复并添加渲染诊断，保持键盘焦点在覆盖层内。
  - #2339 修复更新卡片头部对齐，使窄侧边栏内标题完整显示并改善响应式布局。
- **[IM 会话状态修复]** #2334 恢复 IM 会话加载状态，订阅网关生命周期事件并轮询作为后备，避免计划任务等事件干扰加载状态。
- **[内容复制修复]** #2335 修复内容复制缺陷。
- **[修复回滚]** #2337 修复了“模型不允许”问题，但随后通过 #2340 被回滚。
- **[社区贡献]** #1372 由 @ZlsMzs 提交，修复了会话中多文件选择仅保留最后一个文件的问题（关联 Issue #1384），包含路径去重逻辑与单元测试，该PR状态为“stale”关闭，未显示合并。

## 社区热点
今日唯一新开 Issue 引发即时反馈：
**[#2342] 左下角广告可以彻底关闭吗** 由 @PYUDNG 提出，用户在升级至 v2026.7.15 后遭遇左下角广告弹窗，虽可手动关闭但无永久关闭设置。该反馈直接关联新版本引入的界面元素，成为当前用户关注焦点。
[查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/2342)

## Bug 与稳定性
1. **广告无法彻底关闭** [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)
   用户升级后出现广告，无设置开关，影响体验。尚无对应的修复提交。
2. **模型权限问题已回滚**
   #2337 的修复被 #2340 回滚，表明原改动可能引入新问题或存在设计分歧，当前模型权限状态需核实。
3. **历史遗留问题（已自动关闭）**
   - 上传多文件仅保留最后一个 [#1384](https://github.com/netease-youdao/LobsterAI/issues/1384)：虽有关联 PR #1372，但该 PR 处于 stale 关闭状态，是否合并不明。
   - 微信机器人消息同步异常 [#1383](https://github.com/netease-youdao/LobsterAI/issues/1383)、重复会话 [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) 等一批 stale Issue 今日被关闭，但未显示修复进展。

## 功能请求归类
今日无新增功能请求 Issue。历史已关闭的功能请求（均标记 stale）包括：
- 定时任务在同一会话内呈现结果 [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381)
- 修改日志导出红色提示 [#1382](https://github.com/netease-youdao/LobsterAI/issues/1382)
- 微信消息删除后历史清理 [#1385](https://github.com/netease-youdao/LobsterAI/issues/1385)
- 广告彻底关闭开关 [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)（可视为功能诉求）

## 用户反馈摘要
- **广告质疑**：用户 @PYUDNG 指出 v2026.7.15 版本中新出现的左下角广告此前未遇到，尝试设置中寻找关闭选项无果，希望获得永久关闭途径。
- **历史痛点**（近期 stale 关闭的问题反映出过往不满）：
  - 定时任务导致会话堆积，用户呼吁合并到同一会话。
  - 导出日志的红色提示被误认为失败操作。
  - 微信机器人存在消息同步不完整、删除后历史残留等问题。
  - 多文件上传仅显示最后一个，影响附件管理效率。

## 待处理积压
以下 PR 处于 Open 状态且长期未合并，建议维护者关注：
- [dependabot] 依赖升级系列（均创建于2026-06-15）：
  - [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) ci: bump actions/stale 9.1.0→10.3.0
  - [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) ci: bump dorny/paths-filter 3→4
  - [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) ci: bump actions/checkout 4→6
  - [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) ci: bump trufflesecurity/trufflehog
- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) chore(deps-dev): 更新 electron 组至 43.1.0（创建于2026-04-02）
- [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) fix(cowork): LLM 内存分级缓存真正的 LRU 逐出（创建于2026-04-02，已标记 stale）

</details>