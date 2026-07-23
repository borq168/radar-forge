# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-23 03:54 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# 2026-07-23 AI CLI 工具社区动态横向对比

## 1. 今日横向概览

今日 Claude Code 发布了 v2.1.218，重点改进 `/code-review` 后台执行与屏幕阅读器支持；OpenAI Codex 短时间内连续推送 4 个 Rust alpha 版本，但未附详细说明；Kimi Code 发布 v0.29.0，率先在 ACP 客户端中支持思考深度选择；OpenCode 当日无版本发布。四家工具的 Issue 区均保持活跃，Claude Code 与 Codex 各更新 50 条 Issue，OpenCode 同样达 50 条 Issue 和 50 条 PR，Kimi Code 则有 32 条 Issue 与 50 条 PR 的更新记录。跨端工作流、沙箱兼容性、Windows 平台稳定性及自动化控制成为今日多个社区共同关注的话题。

## 2. 各工具活跃度对比

| 工具 | 今日 Issue 更新数 | 今日 PR 更新数 | 版本发布 | 最热 Issue（评论数） |
|------|------------------|----------------|----------|---------------------|
| Claude Code | 50 | 9 | v2.1.218 | #80002 macOS 桌面端工具调用失败（57 评论） |
| OpenAI Codex | 50 | 10+（合入） | rust-v0.146.0-alpha.1~4 | #28969 禁用 60 秒自动回答（53 评论） |
| Kimi Code | 32 | 50 | v0.29.0 | #2070 交互式会话忽略 hooks（数据截断） |
| OpenCode | 50 | 50 | 无 | 自定义系统提示与模型自动发现（高票，具体评论数未提供） |

> 注：Kimi Code 与 OpenCode 日报原文被截断，部分数据不完整，仅能反映已披露信息。

## 3. 共同出现的功能方向

- **跨端一致性与会话共享**：Claude Code 用户强烈要求从 Web 端到 CLI 的上下文传递（#13843，99 👍），桌面端缺乏 mid-task 消息注入（#71726）被反复提及；OpenAI Codex 也存在 VS Code 扩展与 CLI 行为不一致的问题，如 Remote-SSH 加载失败（#27597）、工作区隔离需求（#25319）。两个社区均反映出“端到端体验对齐”的诉求。

- **沙箱与权限兼容性**：Claude Code 的 v2.1.216 沙箱回归导致 Bash 工具调用全面失败（#79997），OpenAI Codex 则出现 Windows 桌面沙箱启动失败（#22428，`CreateProcessAsUserW` 错误）。沙箱机制在非标环境下的脆弱性是今日两家的共同痛点。

- **自动化行为控制**：Claude Code 用户关注会话恢复后模型静默切换（#76363），OpenAI Codex 用户强烈反对 `/plan` 模式下的 60 秒自动提交（#28969，151 👍），两者均要求对 AI 的自动决策提供更透明的控制与可配置性。

- **Windows 平台稳定性**：Claude Code 出现休眠恢复后 CPU 空转 200%（#80404），OpenAI Codex 则有 Windows 沙箱失败、webview 加载错误（#14745）、安装包启动失败等多起问题，Kimi Code 与 OpenCode 的已披露内容未涉及此方面。

## 4. 差异化定位分析

- **Claude Code**：侧重端到端 Agent 工作流与桌面端体验，社区反馈高度集中于桌面端功能补齐（steering、后台 agent、会话共享）、沙箱策略及认证计费稳定性，反映出其用户群对“原生桌面集成”和“复杂任务编排”有较高期待。插件生态处于早期，发布流程阻塞是当前薄弱环节。

- **OpenAI Codex**：拥有更庞大的多代理（v2）与插件体系，Rust 后端迭代极为频繁。今日 PR 多为自动化合入，涉及插件缓存、权限控制、线程置顶、分析刷新等基础设施打磨。社区争议集中在自动行为强制（60 秒自动回答）、资源消耗（SQLite 日志、周用量限制）以及 Windows 与远程开发场景的兼容性，显示出其功能广度与体验打磨之间的拉扯。

- **Kimi Code**：更新节奏轻快，v0.29.0 率先落地 ACP 客户端思考深度选择，PR 活跃度（50）显著高于 Issue 数（32），表明维护团队正积极合并功能。已披露的 Issue #2070 涉及交互式会话与 hooks 权限，可能指向其关注的安全与可定制性。受限于信息截断，更深差异无法判断。

- **OpenCode**：今日无版本发布，但 Issue 与 PR 各 50 条，社区活跃度不低。讨论集中在自定义系统提示、模型自动发现与多模型兼容性（Qwen、Kimi 故障），桌面端内存占用与连接稳定性也被提及。这些信号指向其社区的“多模型接入”与“个性化提示”需求强烈，与 Codex 的集成生态、Claude Code 的桌面 Agent 路线形成差异。

## 5. 社区活跃度记录

以今日 Issue 更新量计，Claude Code、OpenAI Codex 和 OpenCode 均更新 50 条 Issue，处于同一活跃水平，Kimi Code 稍低（32 条）。PR 方面，OpenCode 和 Kimi Code 均达到 50 条，显著高于 Claude Code（9 条）和 OpenAI Codex（约 10 条已合入 PR），但后两者 PR 质量与功能影响不可仅凭数量衡量。版本发布上，Claude Code 和 Kimi Code 均发布了带有明确 Changelog 的版本，Codex 发布了 4 个 alpha 版本但无说明，OpenCode 无发布。维护者回应方面，Claude Code 热门 Issue #80002 已关闭但讨论未息，Codex 则通过自动化工具密集合入 PR，社区反馈的 Issue 多数未显示已解决；Kimi Code 与 OpenCode 的维护者回应情况因信息截断不明。

## 6. 有证据支撑的观察

1. **桌面端体验成为 Claude Code 与 Codex 的共同短板**：Claude Code 桌面端文件系统工具调用静默失败、无法中途注入消息，Codex 桌面端沙箱启动失败、webview 错误，两个社区均出现多个相关 Issue，且 Windows 平台问题尤为集中。这并非孤立抱怨，而是跨工具的普遍现象。

2. **用户对 AI 自动行为的控制需求在增强**：Claude Code 的“模型静默切换”和 Codex 的“60 秒自动回答”均获得大量投票与讨论，说明开发者在高频使用中对 AI 行为的可预测性、成本透明度和自主控制权提出了更高要求。

3. **沙箱机制在非标准环境下的脆弱性显露**：Claude Code 的沙箱回归导致非 root 安装下 Bash 工具全部失效，Codex 的 Windows 沙箱调用 `CreateProcessAsUserW` 失败，两者均指向沙箱策略在路径权限、用户上下文等边界场景下的测试不足，可能成为后续版本稳定性修复的重点。

4. **插件生态的发布流程存在结构性摩擦**：Claude Code 的插件发布后未出现在目录（#80263），Codex 则通过自动化 PR 优化插件缓存与元数据加载，形成对比：前者在发布环节卡顿，后者在积极优化加载体验，但两者都反映出插件分发链路仍需打磨。

5. **今日暂无明确跨工具信号**：除上述观察外，各工具在认证、计费、远程开发等方向的反馈虽有重叠，但未形成足够多的独立证据链来支撑新的趋势判断，更多体现为各自社区的历史遗留问题延续。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-23

## 今日更新概览
今日社区发布 v2.1.218 版本，重点优化了 `/code-review` 后台执行与屏幕阅读器辅助功能。过去 24 小时共更新 50 个 Issue 和 9 个 PR，其中 macOS 桌面端工具调用失败问题（#80002）引发 57 条讨论，成为当日最热议题；跨端会话共享、模型切换提示、沙箱兼容性等痛点持续受关注。

## 版本发布
**v2.1.218**
- `/code-review` 改为后台子代理运行，审核内容不再占用主对话且可锁定堆叠的斜杠命令为审查目标。
- 增加屏幕阅读器对删除文本的播报支持（`Option+Delete`、`Ctrl+W`、`Cmd+Backspace`）。
🔗 [Release v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

## 社区热点 Issues（Top 10）
1. **macOS 桌面端 Filesystem 扩展工具调用静默失败** [#80002](https://github.com/anthropics/claude-code/issues/80002)
   `tools/list` 成功但 `tools/call` 无任何日志输出，影响桌面端与 MCP 文件系统交互。57 条评论，25 👍，已关闭但仍为社区焦点。

2. **从 Claude.ai 到 Claude Code 共享会话上下文** [#13843](https://github.com/anthropics/claude-code/issues/13843)
   用户希望将 Web 端规划好的项目上下文无缝迁移到 CLI/IDE，99 👍 反映出强烈的跨端工作流需求。

3. **Max 计划中途降级为 Free 计划** [#56897](https://github.com/anthropics/claude-code/issues/56897)
   订阅状态下账户异常降级，影响付费用户权益，9 条讨论，3 👍。

4. **桌面端不支持任务中途注入消息（steering）** [#71726](https://github.com/anthropics/claude-code/issues/71726)
   桌面端消息在任务完成后才送达，而 CLI 可在工具调用间插入，16 👍 凸显桌面端与 CLI 功能差异的痛点。

5. **Linux/IntelliJ OAuth 登录循环** [#77966](https://github.com/anthropics/claude-code/issues/77966)
   认证流程中 state 参数丢失导致反复登录，影响 Linux 平台及 IDE 插件用户，8 条评论。

6. **插件发布后未出现在目录中** [#80263](https://github.com/anthropics/claude-code/issues/80263)
   提交状态显示“Published”但实际未公开，重复提交仍堵塞，打击插件开发者积极性，5 条评论。

7. **休眠恢复后 CPU 空转 200% 及输入延迟** [#80404](https://github.com/anthropics/claude-code/issues/80404)
   Windows 下 libuv 事件循环超时归零，导致自旋和界面卡顿，4 条评论，怀疑与旧版 #62308 同源。

8. **日本地区 API 额度购买失败** [#80055](https://github.com/anthropics/claude-code/issues/80055)
   信用卡授权通过但支付失败，可能涉及地区支付通道，3 条评论，直接影响使用。

9. **v2.1.216 沙箱回归：/opt/.claude 目录创建失败** [#79997](https://github.com/anthropics/claude-code/issues/79997)
   非 root 安装下沙箱拒绝写入，致使所有 Bash 工具调用失败，2 👍，亟待修复。

10. **会话恢复后模型静默切换** [#76363](https://github.com/anthropics/claude-code/issues/76363)
    `--resume` 不提示模型变更，用户可能从 Opus 切换到更廉价模型且未察觉，1 👍，关注成本与行为透明性。

## 重要 PR 进展
1. **feat(plugins): 添加 `/planwith` 命令** [#18217](https://github.com/anthropics/claude-code/pull/18217)（已关闭）
   支持内联计划提示，无需先切换模式再输入，简化计划工作流。

2. **docs(gcp): 校验和失败时停止部署** [#80353](https://github.com/anthropics/claude-code/pull/80353)
   在 GCP 网关部署脚本中增加二进制校验和检查，防止损坏文件继续执行。

3. **添加 account-profiles 插件** [#80326](https://github.com/anthropics/claude-code/pull/80326)
   提供多账户隔离启动环境管理，方便个人、工作、客户账户切换。

4. **修复文档失效链接** [#80294](https://github.com/anthropics/claude-code/pull/80294)
   通过 archive.org 快照修复 README 中 1 个断链。另 [#80229](https://github.com/anthropics/claude-code/pull/80229) 同样修复断链。

5. **修复控制台文本追加时滚动到顶部的问题** [#80241](https://github.com/anthropics/claude-code/pull/80241)
   解决控制台输出新内容时意外跳回历史顶部的 UI 缺陷。

6. **修复自动压缩未触发（上下文 100% 仍不压缩）** [#80196](https://github.com/anthropics/claude-code/pull/80196)
   针对 Max 订阅下 200K 模式未能自动压缩的问题，提出修复方案。

7. **修复 Max 订阅瞬间达到用量上限** [#80195](https://github.com/anthropics/claude-code/pull/80195)
   尝试解决付费用户遭遇的异常速率限制。

8. **devcontainer 防火墙初始化增加 DNS 容错** [#80112](https://github.com/anthropics/claude-code/pull/80112)
   避免单次 DNS 解析失败导致整个防火墙设置中断，提升开发容器稳定性。

## 功能需求归类
- **跨端工作流与会话共享**：从 Claude.ai 到 Claude Code 的上下文传递（#13843），桌面端 mid-task 消息注入（#71726），以及会话恢复后模型不变提示（#76363）。
- **桌面端与 CLI 体验对齐**：桌面端 steering 缺失（#71726、#77724），后台 agent 会话管理（#66202），以及桌面端 webview 崩溃（#80403）。
- **沙箱与权限兼容性**：沙箱回归导致 Bash 工具失效（#79997）、沙箱文件列表过大触发 E2BIG（#78253）、Cowork 安全根目录权限问题（#78368）。
- **认证与计费稳定性**：OAuth 循环（#77966）、凭证令牌过期未刷新（#79688）、MCP OAuth 存储被清空（#80422）、购买额度失败（#80055）、订阅降级（#56897）。
- **插件与 MCP 生态**：插件发布流程阻塞（#80263、#80423），MCP 连接器状态报告错误（#79319）。
- **性能与资源管理**：休眠后 CPU 空转（#80404）、Windows 桌面端安装包启动失败（#80426）、CoworkVM 服务孤立导致重装失败（#80419）。

## 开发者关注点
- **沙箱兼容性**：v2.1.216 引入的沙箱策略导致多起工具调用失败，在非标准安装路径下尤为严重，需紧急修复。
- **桌面端功能短板**：无法在任务执行中实时注入指令，且与 CLI 行为不一致，影响了 Agent 交互的实时性。
- **认证流程脆弱性**：OAuth 状态丢失、令牌不刷新、MCP 认证被清空等问题频繁出现，跨平台（Linux/Windows/IntelliJ）修复需求迫切。
- **插件发布堵塞**：多个插件提交后状态为“Published”但实际未上架，打击开发者贡献热情，需尽快清理重复条目并修复底层冲突。
- **模型切换透明性**：会话恢复或 Cowork 调度时可能静默切换模型，用户对成本控制和行为预期缺失表达不满。
- **Windows 端稳定性**：休眠恢复后 CPU 空转、MSIX 安装包启动失败、安装/卸载残留等问题集中爆发，Windows 用户基础体验受影响。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-23

## 1. 今日更新概览
今日社区发布了 Rust 侧 4 个 alpha 版本（v0.146.0-alpha.1 至 alpha.4），但未提供详细变更说明。 Issues 区活跃，新增及更新了 50 条讨论，其中关于 CLI 自动解决机制、Windows 平台稳定性、多代理可用性等反馈热度较高。Merge 队列由自动化工具密集合入多项功能 PR，涉及插件缓存、权限控制、线程置顶、分析刷新等。

## 2. 版本发布
- **rust-v0.146.0-alpha.1 / alpha.2 / alpha.3 / alpha.4**
  短时间内连续发布 4 个 alpha 版本，官方未附 Release Notes，推测为内部迭代或修复链，具体变更需查看提交记录。

## 3. 社区热点 Issues
选取过去 24 小时评论/反馈最集中的 10 个 Issue，覆盖 CLI、IDE 扩展、桌面应用、Windows 兼容性、多代理等场景。

1. **#28969 添加设置项以禁用 60 秒自动回答问题**
   作者请求允许在 CLI 配置中关闭 `/plan` 模式下的 60 秒自动提交行为，认为严重破坏计划模式使用体验。53 条评论，151 个 👍，是当前呼声最高的功能请求。
   🔗 [github.com/openai/codex/issues/28969](https://github.com/openai/codex/issues/28969)

2. **#29532 macOS 下 SQLite 日志持续输出问题未完全修复**
   升级到 rust-v0.142.0 后，`~/.codex/logs_2.sqlite` 仍存在大量日志写入，尽管部分模块已有改善，但整体性能损耗未彻底解决。44 条评论。
   🔗 [github.com/openai/codex/issues/29532](https://github.com/openai/codex/issues/29532)

3. **#17827 可定制状态栏**
   用户希望 CLI 能像 Claude Code 一样通过 shell 脚本自定义状态栏，实时显示 token 用量、模型名、Git 分支等信息。31 条讨论，119 个 👍。
   🔗 [github.com/openai/codex/issues/17827](https://github.com/openai/codex/issues/17827)

4. **#31573 OAuth 认证在 issuer 验证阶段失败**
   使用 CLI 0.143.0 时 OAuth 流程无法通过 issuer 校验，影响 MCP 服务器连接。19 评论，45 👍。
   🔗 [github.com/openai/codex/issues/31573](https://github.com/openai/codex/issues/31573)

5. **#33685 周用量限制消耗速度与旧 5 小时限制相同**
   用户反馈在正常使用 GPT-5.5 High 时，新的周用量限制下降速度与已被移除的 5 小时限制几乎一样快，疑似计费或限流逻辑未调整。19 评论。
   🔗 [github.com/openai/codex/issues/33685](https://github.com/openai/codex/issues/33685)

6. **#25319 将 VS Code 扩展聊天限定在当前工作区/项目**
   希望会话历史及聊天上下文按项目隔离，避免跨项目串扰。17 评论，47 👍。
   🔗 [github.com/openai/codex/issues/25319](https://github.com/openai/codex/issues/25319)

7. **#32031 多代理 v2 下子代理模型覆盖不可用且调用失败**
   在 gpt-5.6-sol 等多代理 v2 界面中，子代理模型选择无法发现，默认调用形状会报错，被视为严重回归。5 评论，14 👍。
   🔗 [github.com/openai/codex/issues/32031](https://github.com/openai/codex/issues/32031)

8. **#27597 VS Code Remote-SSH 中 IDE 扩展加载失败，CLI 正常**
   扩展版本 26.602.71036 在 Remote-SSH 环境下无法加载，影响远程开发工作流。16 评论。
   🔗 [github.com/openai/codex/issues/27597](https://github.com/openai/codex/issues/27597)

9. **#22428 Windows 桌面沙箱启动失败（setup refresh failed）**
   Windows 11 桌面应用在执行沙箱命令时提示 `CreateProcessAsUserW` 失败，涉及普通沙箱执行。15 评论，10 👍。
   🔗 [github.com/openai/codex/issues/22428](https://github.com/openai/codex/issues/22428)

10. **#14745 Windows 下 VS Code 扩展 webview 加载失败（ServiceWorker 错误）**
    扩展 26.x 在 Windows 10 / Server 2016 上 webview 无法渲染，影响 UI 交互。13 评论。
    🔗 [github.com/openai/codex/issues/14745](https://github.com/openai/codex/issues/14745)

## 4. 重要 PR 进展
以下 10 个 PR 多由自动化工具 `copyberry[bot]` 提交并快速合入，反映了后台持续的功能增强和稳定性修复。

1. **#34851 使用批量元数据获取插件应用摘要**
   改为通过认证批量 API 加载插件应用元数据，每批 100 个，失败时保留缓存，提升插件列表响应效率。
   🔗 [github.com/openai/codex/pull/34851](https://github.com/openai/codex/pull/34851)

2. **#34850 禁用免费计划账户的图像生成**
   当检测到账户为 Free 计划时，跳过注册 `image_generation` 工具，避免未授权使用。
   🔗 [github.com/openai/codex/pull/34850](https://github.com/openai/codex/pull/34850)

3. **#34849 按作用域缓存远程插件目录**
   为全局、用户、工作区级别的远程插件目录提供磁盘缓存，TTL 3 小时，后台刷新，加速启动和列表查询。
   🔗 [github.com/openai/codex/pull/34849](https://github.com/openai/codex/pull/34849)

4. **#34847 审查会话使用 Guardian 模型限制**
   修复 Guardian 审查时可能误用父窗口上下文窗口和自动压缩配置的问题，确保使用正确的模型限制。
   🔗 [github.com/openai/codex/pull/34847](https://github.com/openai/codex/pull/34847)

5. **#34846 允许自定义提供商选择加入独立网络搜索**
   新增 `supports_standalone_web_search` 设置项，开启后自定义 Responses 提供商可获得 `web.run` 工具。
   🔗 [github.com/openai/codex/pull/34846](https://github.com/openai/codex/pull/34846)

6. **#34845 在世界状态中追踪多代理模式**
   将多代理模式指令持久化到世界状态中，使其在历史变更时仍可保留，避免重复发送无关设置提示。
   🔗 [github.com/openai/codex/pull/34845](https://github.com/openai/codex/pull/34845)

7. **#34840 为应用服务器添加持久化线程置顶功能**
   增加 `isPinned` 字段和过滤参数，支持线程的置顶/取消置顶及分页查询，提升会话管理体验。
   🔗 [github.com/openai/codex/pull/34840](https://github.com/openai/codex/pull/34840)

8. **#34839 MCP 启动中断时保留用户输入**
   修复在 MCP 工具启动期间中断轮次可能导致用户输入丢失的问题，将工具列表和路由保留到步骤快照中。
   🔗 [github.com/openai/codex/pull/34839](https://github.com/openai/codex/pull/34839)

9. **#34835 在轮次分析中追踪压缩耗时**
   将手动和自动压缩耗时计入 `compaction_ms` 指标，完善轮次性能分析数据。
   🔗 [github.com/openai/codex/pull/34835](https://github.com/openai/codex/pull/34835)

10. **#34819 在 Codex 各入口启用 Git 归属**
    将 git 归属扩展安装到应用服务器、MCP 服务器和调试工具中，使模型输出的提交和 PR 描述能遵循工作区策略。
    🔗 [github.com/openai/codex/pull/34819](https://github.com/openai/codex/pull/34819)

## 5. 功能需求归类
从今日 Issues 中可提取出以下反复出现的诉求方向（仅基于事实，非路线图预测）：

- **Windows 平台稳定性**
  多个 Issue 反映 Windows 桌面应用沙箱、扩展 webview、远程 SSH、进程泄漏等问题，数量居各平台之首。

- **配置与自动化控制**
  强烈要求禁用 60 秒自动回答（#28969、#34310）、自定义状态栏（#17827）、调整计划模式限制等。

- **性能与资源消耗**
  持续关注 SQLite 日志写入（#29532）、周用量消耗过快（#33685）、上下文膨胀（#24336）、Ultra 模式浪费（#34743）等。

- **多代理与模型选择**
  多代理 v2 的易用性不足（#32031），子代理模型覆盖难以发现，引发用户质疑。

- **IDE 扩展与远程开发**
  Remote-SSH 加载失败（#27597）、工作区范围隔离（#25319）、Codespace 崩溃（#27892）等远程场景问题突出。

- **国际化（RTL）**
  要求增加阿拉伯语、希伯来语从右到左文本方向支持（#19504）。

## 6. 开发者关注点
今日反馈中，开发者的主要痛点与高频需求包括：

- **Windows 生态体验割裂**：无论是桌面应用沙箱、VS Code 扩展 webview 还是 Remote-SSH，Windows 用户频繁遭遇功能不可用，影响日常

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# 2026-07-23 Kimi Code 社区动态日报

## 1. 今日更新概览
今日发布 v0.29.0，支持从 ACP 客户端选择思考深度。社区 Issue 活跃度仍较高，过去 24 小时内有 32 条 Issue 更新，其中多个长期存在的配置与性能问题获持续讨论；同时有 50 个 PR 处于活跃状态，涵盖多实例可靠性、子代理模型分离、ACP 错误暴露等多个重要修复与功能增强。

## 2. 版本发布
**@moonshot-ai/kimi-code@0.29.0**
- 支持 ACP 客户端选择思考努力水平（thinking effort level）。
- 对应 PR [#1992](https://github.com/MoonshotAI/kimi-code/pull/1992)，由 [@RealKai42](https://github.com/RealKai42) 贡献。

## 3. 社区热点 Issues（10 个）
1. **#2070 交互式会话忽略 hooks 与权限规则**
   @

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-07-23

## 1. 今日更新概览
过去 24 小时仓库活跃度较高，累计更新 Issues 50 条、PRs 50 条。社区讨论集中在自定义系统提示、模型自动发现两大高票需求，以及多款模型（Qwen、Kimi）的兼容性故障。桌面端稳定性问题（内存占用、本地连接丢失）也持续受到关注。今日无新版本发布，仅有一个用于 PR #38252 的验证视频。

## 2. 版本发布
无

</details>