# AI CLI 工具社区动态日报 2026-07-19

> 生成时间: 2026-07-19 00:23 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

# AI CLI 工具社区横向对比日报
**日期：2026-07-19**

---

## 1. 今日横向概览
今日 Claude Code 发布 v2.1.214 修复多项安全与平台问题，社区反馈集中在 Windows 崩溃和自动化流程稳定性。OpenAI Codex 发布 rust-v0.144.6 修正 GPT-5.6 上下文窗口值，同时“永久取消 5 小时限制”呼声强烈。Kimi Code 无新版本，但审批弹窗频次、终端兼容性（iTerm2 卡死、中文 IME 闪烁）等问题被密集反馈，PR 侧推进了静态资源缓存、会话恢复等修复。OpenCode 同样无发布，社区依托 Memory Megathread 集中排查内存问题，桌面端体验和本地模型自动发现是今日讨论热点。

---

## 2. 各工具活跃度对比

| 工具 | Issues（今日更新/新增） | Pull Requests（今日） | 新版本发布 |
|------|-------------------------|------------------------|-------------|
| Claude Code | 50 个 Issue 被更新 | 4 个开启的 PR | v2.1.214（修复版） |
| OpenAI Codex | 未公布总数（日报列出 10 条热点） | 未公布总数（日报列出 10 条重要 PR） | rust-v0.144.6（修复版） + 预发布 alpha |
| Kimi Code | 22 个 Issue 新增/更新 | 19 个 PR 新增/更新 | 无 |
| OpenCode | 未公布总数（日报列出 10 条热点） | 未公布总数（日报列出 10 条重要 PR） | 无 |

*注：OpenAI Codex、OpenCode 今日未提供 Issue/PR 总量，数值依据日报所列热点条数。*

---

## 3. 共同出现的功能方向

- **权限与安全策略精细化**
  Claude Code：PreToolUse 钩子未覆盖子代理、CLAUDE.md 禁止规则被忽略、需更细粒度 auto-approve。
  Kimi Code：deny 通配符 “*” 覆盖前面 allow 规则、审批弹窗过于频繁。
  用户均要求权限控制可预测、可调节，且策略执行不失效。

- **Windows 平台稳定性质疑**
  Claude Code：Claude.exe 触发 Wof.sys 蓝屏、PowerShell 权限绕过。
  OpenAI Codex：Windows 桌面版频繁无响应、周期性 ~15 秒挂起。
  Kimi Code：Windows VS Code 插件环境弹窗过多影响使用、中文 IME 闪烁。
  三个工具均出现 Windows 特有缺陷，部分已触及系统级崩溃。

- **长期运行 / 后台任务资源泄漏**
  Claude Code：MCP 子进程无限泄漏、headless 空闲连接永久挂起、空闲 TUI 吃 CPU。
  OpenCode：Memory Megathread 集中采集 heap snapshot，历史内存问题持续跟进。
  两者都面临长时间会话的资源不可回收问题。

- **会话管理与恢复体验**
  Claude Code：/rename 未持久化到 /resume、headless 模式挂起导致会话僵尸化。
  Kimi Code：终端崩溃后恢复会话报 400 错误、请求增加 /rewind 能力。
  OpenCode：桌面端缺乏“查看已归档会话”入口、撤回内容时误伤其他会话代码。
  跨工具均存在会话状态不可靠、回溯困难的问题。

- **自定义 API / 本地模型接入诉求**
  Kimi Code：希望接入 NewAPI 等第三方端点、支持 API 请求体压缩。
  OpenCode：自动发现 Ollama/LM Studio 模型呼声最高（👍182），模型 limit 覆盖失效。
  OpenAI Codex：用户因使用限制和计费逻辑质疑，间接推高对可控后端的需求。

---

## 4. 差异化定位分析

- **Claude Code**
  侧重安全和钩子系统，面向高度自动化与 CI/CD 场景。今日动态表明其深度嵌入权限审批、子代理控制和 headless 集成，但在 Windows 稳定性、长时间连接健壮性上短板明显。

- **OpenAI Codex**
  背靠 OpenAI 模型矩阵，强调多模态（音频输出）和实时交互，但使用限制与计费透明度是主要摩擦点。桌面与 IDE 集成体验（VS Code 扩展、Windows 桌面）仍有待打磨。

- **Kimi Code**
  更贴近中文开发者，终端交互细节（浏览器交互模式、中文输入法、剪贴板处理）和第三方国内 API 接入是其差异化方向。当前痛点在于审批交互干扰编码流、终端外部兼容性（iTerm2）。

- **OpenCode**
  鲜明的本地优先和开源生态特色，通过插件、多后端支持（LM Studio、Ollama）降低对云端模型依赖。桌面端体验和国际化是当前打磨重点，内存治理仍是长期工程。

---

## 5. 社区活跃度记录
- **Claude Code** 以 50 个 Issue 更新和 4 个 PR 展现较高的反馈密度，且有紧急修复版本发布，维护者响应较快（BSOD、规则忽略等安全问题被重点关注）。
- **OpenAI Codex** 社区讨论量大（移除限制单条 👍 62），PR 活动覆盖音频、渲染优化、上下文修复，显出多线并进，但 Issue/PR 总数未披露，无法直接比较绝对量。
- **Kimi Code** 以 22 Issue、19 PR 的明确数字成为今日数据透明度最高的项目，修复与功能 PR 活跃（静态资源、会话恢复、/diff 命令等），维护者推动力较强。
- **OpenCode** 的 Memory Megathread（113 评论、90 👍）聚合了大量用户协作，桌面端和模型自动发现议题的 👍 数也反映社区规模较大，但整体 Issue/PR 总数未知。

---

## 6. 有证据支撑的观察

1. **权限策略成为跨工具的信任瓶颈**
   Claude Code 的规则忽略、钩子失效与 Kimi Code 的 deny 通配覆盖、弹窗过多，均说明当前权限模型在“自动批准—安全阻断”之间缺乏可预测的中粒度控制。两个社区都在要求更精细的规则语义和可审计的策略执行。

2. **Windows 平台尚未达到生产级稳定度**
   Claude Code 引发系统蓝屏、OpenAI Codex 桌面挂起、Kimi Code 弹窗干扰及输入法问题，三条独立证据指向同一个方向：Windows 兼容性是多工具的共同短板，可能影响企业环境中 Windows 用户的采纳。

3. **CI/CD 与无人值守场景的可靠性缺口显著**
   Claude Code 的 headless 连接挂起、Kimi Code 的无头模式 deny 规则错误、OpenCode 的 Agent 构建成功后挂起，均表明自动化流程中的超时、重试、资源回收机制仍不成熟，降低在流水线中的可用性。

4. **本地模型与自定义后端的互操作性需求持续上升**
   Kimi Code 对 NewAPI 等自定义端点的适配 PR、OpenCode 的自动发现模型功能请求（👍182）、以及模型配置覆盖失效问题，反映出用户希望摆脱单一云厂商限制，获得更灵活的推理后端组合。

5. **会话管理的可恢复性普遍不足**
   多款工具出现会话状态丢失或无法回溯：Claude Code 的 /rename 不持久、Kimi Code 崩溃后无法恢复、OpenCode 撤回误操作和归档查看缺失，说明围绕会话生命周期的元数据管理和恢复能力尚未成为标配。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区日报 | 2026-07-19

## 1. 今日更新概览
过去 24 小时，社区新增 4 个 Pull Request，50 个 Issue 被更新。新发布的 v2.1.214 修复了目录自动批准、Windows 权限绕过及 Bash 权限检查等问题。热门讨论集中在 Windows 蓝屏死机、权限审批缺失、headless 模式挂起和 MCP 会话僵死等稳定性与安全议题上。

## 2. 版本发布
**v2.1.214** 本次更新重点修复：
- 单段通配符规则 `dir/**` 如 `Edit(src/**)` 仅限在 `<cwd>/dir` 下自动批准，避免意外写入其他位置的同名目录。
- 修复 Windows PowerShell 5.1 会话中的权限检查绕过。
- 修复 Bash 权限相关 c（原文截断，推测为权限校验逻辑）。

## 3. 社区热点 Issues（Top 10）

1. **Windows 蓝屏死机：Claude.exe 触发 Wof.sys**
   [#32870](https://github.com/anthropics/claude-code/issues/32870)
   Windows 平台上调用 `NtQueryDirectoryFileEx` 时导致系统崩溃。影响所有使用 Claude.exe 的场景，已获 28 条评论，属高严重性 bug，尚未关闭。

2. **`/rename` 命令未持久化到 `/resume` 列表**
   [#31394](https://github.com/anthropics/claude-code/issues/31394) (已关闭，👍 6)
   会话重命名后，退出再 `/resume` 仍显示原名。用户需手动识别会话，影响日常工作流，已修复。

3. **Goal 功能导致无限循环**
   [#59827](https://github.com/anthropics/claude-code/issues/59827) (已关闭)
   当 agent 等待任务完成时，Goal 函数反复检查导致循环，甚至自身崩溃。已关闭，系 agent 控制逻辑 bug。

4. **桌面应用：会话时间过滤器仅在 Group by = State 时显示**
   [#78775](https://github.com/anthropics/claude-code/issues/78775) (回归，👍 3)
   Windows/macOS 桌面版 UI 回归问题，过滤器 UI 元素丢失，影响会话管理体验。

5. **Claude Code 忽略 CLAUDE.md 中的禁止规则，直接推送到受保护分支**
   [#78544](https://github.com/anthropics/claude-code/issues/78544)
   在权限模式为 auto 且分支保护开启时，仍无视显式禁用规则进行推送。严重安全/合规问题，已引发社区高度关注。

6. **本地 stdio MCP 服务器子进程无限制泄漏**
   [#78961](https://github.com/anthropics/claude-code/issues/78961)
   长时间会话中，Python MCP 服务器进程不断累积而不重用/终止，导致内存与进程资源耗尽。影响自动化流水线。

7. **Headless `-p` 模式在空闲 keep-alive 连接上永久挂起**
   [#78966](https://github.com/anthropics/claude-code/issues/78966)
   执行长时间工具后复用已关闭的 HTTP 连接时，无超时、无重试，进程死锁，彻底阻断 CI/CD 集成。

8. **空闲 TUI 会话持续 10–40% CPU**
   [#78969](https://github.com/anthropics/claude-code/issues/78969)
   当终端界面残留动画元素（spinner、计时器）时，claude 会话占用大量 CPU，影响多会话并行与笔记本续航。

9. **PreToolUse Bash 钩子未对子代理（agent）调用触发**
   [#78970](https://github.com/anthropics/claude-code/issues/78970)
   配置于 `~/.claude/settings.json` 的 PreToolUse 钩子，对通过 Agent 工具分派的子代理无效，导致安全策略被绕过。

10. **claude.ai 连接器 MCP 会话在闲置 ~15 分钟后无响应**
    [#78911](https://github.com/anthropics/claude-code/issues/78911)
    云连接器（如 Atlassian）在长空闲后接收请求但永不返回，无错误事件，客户端阻塞 300 秒。影响依赖云工具的长时任务。

## 4. 重要 PR 进展
（本日仅有 4 个开启的 PR，全部列出）

- **修复 hookify 插件在带版本号目录下导入失败**
  [#78963](https://github.com/anthropics/claude-code/pull/78963) 修复所有 hook 脚本在加载时因路径假设 `hookify` 为目录名而引发的模块导入错误。

- **为 hookify 添加 `regex_not_match` / `not_regex_match` 操作符**
  [#78715](https://github.com/anthropics/claude-code/pull/78715) 补全规则引擎的否定匹配能力，避免因未知操作符引起的规则落地失败。

- **添加 Claude Code 的缺失源代码**
  [#41611](https://github.com/anthropics/claude-code/pull/41611) 提交遗漏的源码部分（长期开启）。

- **记录 VS Code 中 Claude CLI 的 RTL 语言支持方案**
  [#6754](https://github.com/anthropics/claude-code/pull/6754) 新增文档说明如何在 VS Code 集成终端中正确显示希伯来语/阿拉伯语/波斯语等从右向左文本。

## 5. 功能需求归类
从近期 Issue 标签与描述看，用户反复提及的方向包括：

- **权限与安全控制增强**：更细粒度的 auto-approve 规则、钩子对子代理的覆盖、防止项目规则被绕过。
- **Windows 平台稳定性**：BSOD、终端渲染异常、远程控制连接失败等，Windows 问题密度高。
- **长时间运行可靠性**：空闲连接挂起、MCP 连接僵死、子进程泄漏，要求增加超时与自动恢复。
- **性能与资源占用**：空闲 CPU 使用率、浏览器屏幕截图超时、headless 模式资源泄漏。
- **自动化与 CI/CD 集成**：headless `-p` 模式可靠性、钩子系统对后台 session 的支持、退出码与超时机制。
- **桌面应用体验**：UI 控件可见性（过滤器、Dispatch 面板）、Cowork 协作工件固定等。
- **模型安全过滤准确度**：减少 PDF 文本、代码审计等场景下的误检，以及正常学术提问被拒的情况。

## 6. 开发者关注点
- **Windows 环境痛点集中爆发**：从系统崩溃(BSOD)到 TUI 乱码，再到 PowerShell 权限漏洞和进程泄漏，开发者普遍反映 Windows 上的 Claude Code 尚未达到生产级稳定度。
- **自动化流程脆弱**：headless 模式严重依赖网络连接状态，一个闲置连接即可导致整个作业僵尸化，缺乏心跳或重试机制，严重影响 CI/CD 采纳。
- **安全与策略执行不一致**：项目根文件（CLAUDE.md）中的明确禁止条款被忽略，且钩子对子代理不触发，让安全自动化形同虚设。
- **长期会话资源泄漏**：MCP 服务进程和 keep-alive 连接在无活动期间未正确回收，表明生命周期管理需要系统性加固。
- **UI/UX 细节打磨**：从会话重命名不持久、过滤器 UI 回归到空闲 CPU 占用，社区期待更精致的终端与桌面交互。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-07-19**

---

## 1. 今日更新概览

今天发布了修复版本 `rust-v0.144.6`，主要更正了 GPT-5.6 Sol、Terra、Luna 的上下文窗口至 272,000 token，并刷新了捆绑的系统指令。同时社区活跃度高涨，围绕使用限制、Windows 桌面性能、VS Code 扩展可靠性等话题展开了大量讨论，其中“永久取消 5 小时限制”的请求获得 62 个 👍。

---

## 2. 版本发布

- **rust-v0.144.6**
  修复了 GPT-5.6 Sol、Terra、Luna 的上下文窗口数据，统一修正为 272,000 token，并刷新了捆绑的模型指令。相关 PR：#33972、#34009。

- **rust-v0.145.0-alpha.24**
  预发布版本，尚未披露详细变更。

---

## 3. 社区热点 Issues（10 条）

1. **#34035 [OPEN] 请永久移除 5 小时使用限制**
   用户呼吁将当前临时取消的 5 小时限制永久化，适用于 Plus、Pro、Business 计划。👍 62，💬 8。
   [链接](https://github.com/openai/codex/issues/34035)

2. **#28969 [OPEN] 增加设置以禁用 60 秒自动解决问题**
   CLI 环境下系统会自动将未回复的问题标记为已解决，开发者强烈希望提供开关。👍 137，💬 40。
   [链接](https://github.com/openai/codex/issues/28969)

3. **#32806 [CLOSED] GPT-5.6 Sol 上下文严重缩水：353K → 258K**
   实际可用上下文远低于宣传的 1.05M，本次版本已修复为 272K，引发用户对模型能力准确性的担忧。👍 34，💬 26。
   [链接](https://github.com/openai/codex/issues/32806)

4. **#33873 [OPEN] Windows 桌面版频繁无响应**
   更新至最近版本后，应用周期性地卡死，影响正常编码。👍 6，💬 13。
   [链接](https://github.com/openai/codex/issues/33873)

5. **#33685 [OPEN] 每周限额消耗速度与旧 5 小时限制相当**
   移除 5 小时限制后，正常工作的每周额度下降速度异常快，用户怀疑计费逻辑。👍 0，💬 9。
   [链接](https://github.com/openai/codex/issues/33685)

6. **#34061 [OPEN] 子代理导致磁盘使用量剧增**
   Codex CLI 0.144.6 中 subagent 产生大量临时数据，磁盘写入激增。💬 5。
   [链接](https://github.com/openai/codex/issues/34061)

7. **#32530 [OPEN] Linux 下 VS Code 面板间歇性卡加载**
   本地 webview 资源加载失败（`net::ERR_FAILED`），影响 Linux 用户的 IDE 体验。👍 12，💬 7。
   [链接](https://github.com/openai/codex/issues/32530)

8. **#33884 [OPEN] Windows 端出现周期性 ~15 秒应用挂起**
   桌面进入挂起-响应循环，开发效率严重受损。💬 9。
   [链接](https://github.com/openai/codex/issues/33884)

9. **#26429 [OPEN] Computer Use 插件重启后消失**
   macOS 桌面版重启后该功能显示“不可用”，需手动修复，影响自动化工作流。💬 12。
   [链接](https://github.com/openai/codex/issues/26429)

10. **#34078 [OPEN] 希望增加中文界面支持**
    用户呼吁桌面应用支持中文简体 UI，降低使用门槛。💬 2。
    [链接](https://github.com/openai/codex/issues/34078)

---

## 4. 重要 PR 进展（10 个）

1. **#34085 [CLOSED] 支持分页线程历史的传统视图**
   确保使用全量历史恢复的客户端在分页线程上也能一致工作。
   [链接](https://github.com/openai/codex/pull/34085)

2. **#34080 [CLOSED] 为动态工具和代码模式增加音频输出支持**
   新增 `inputAudio` 内容项及 `audio()` 代码助手，推进多模态交互。
   [链接](https://github.com/openai/codex/pull/34080)

3. **#34067 [CLOSED] 为实时 V3 会话注入初始文本项**
   允许启动实时会话时预置用户/助手/开发者文本，增强引导能力。
   [链接](https://github.com/openai/codex/pull/34067)

4. **#34049 [CLOSED] 避免流式输出时的冗余 TUI 重绘**
   仅在可见尾部行真正变化时才触发重绘，降低终端闪烁和 CPU 消耗。
   [链接](https://github.com/openai/codex/pull/34049)

5. **#34045 [CLOSED] 增量渲染流式 Markdown**
   保留已完成块的渲染结果，仅追加新内容，提升流式响应流畅度。
   [链接](https://github.com/openai/codex/pull/34045)

6. **#34009 [CLOSED] 将 0.144 热修复范围收窄至 GPT-5.6 提示与上下文**
   回滚无关的模型目录变更，确保修复精准匹配本次上下文窗口问题。
   [链接](https://github.com/openai/codex/pull/34009)

7. **#33972 [CLOSED] 向 0.144 分支回填刷新的模型元数据**
   更新上下文窗口值并修正模型指令，是 v0.144.6 的直接基础。
   [链接](https://github.com/openai/codex/pull/33972)

8. **#33950 [CLOSED] 允许用户记住恢复会话的工作目录**
   新增 `tui.resume_cwd` 配置，在恢复/分支会话时保持之前的工作路径。
   [链接](https://github.com/openai/codex/pull/33950)

9. **#33938 [CLOSED] 集中化 SQLite 连接配置**
   统一数据库连接池、WAL、自动真空等设置，提升多线程访问可靠性。
   [链接](https://github.com/openai/codex/pull/33938)

10. **#31781 [OPEN] 执行器控制的 HTTP 响应缓冲限制**
    防止远程 exec-server 通过超大帧导致 app-server 内存暴涨，安全增强。
    [链接](https://github.com/openai/codex/pull/31781)

---

## 5. 功能需求归类

- **使用限制与计费**
  永久取消 5 小时限制、周额度消耗过快、重置日期不明等，用户希望限制策略

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报
**日期：2026-07-19**

---

## 今日更新概览
过去 24 小时无新版本发布。社区新增/更新 22 个 Issue 与 19 个 Pull Request，集中反馈了权限弹窗频率、终端兼容性（iTerm2 卡死、中文 IME 闪烁）、Web CLI 交互回归、第三方 API 接入等需求；同时有多个修复提交改善了会话恢复、静态资源缓存与 UI 主题问题。

---

## 版本发布
无新 Release。

---

## 社区热点 Issues
1. **#160 请求恢复 Kimi CLI 浏览器交互模式**
   用户希望重新支持在浏览器中与 CLI 交互的方式，认为这是优于纯命令行的创新。已有 11 条讨论，5 个 👍。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/160)

2. **#108 要求加入 /rewind 功能（无需依赖 Git）**
   期望像 Claude Code 那样回退会话，不强制要求项目使用 Git。获 6 条评论、6 个 👍。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/108)

3. **#1404 终端崩溃后恢复会话报 400 错误（DeepSeek）**
   终端崩溃重启后恢复会话时，空 assistant 消息引发 `400 Invalid assistant message`，无法继续。可通过 `/undo` 恢复，但影响流程。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1404)

4. **#1891 权限规则：deny 通配符 “*” 覆盖了前面的 allow 规则**
   在 `--prompt` 无头模式下，按文档应该顺序匹配，但 deny `*` 覆盖了更具体的 allow，与文档行为矛盾。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1891)

5. **#1892 iTerm2 中审批弹窗导致整个 TUI 卡死**
   iTerm2 下工具审批弹窗出现时界面高速闪烁、键鼠无响应，只能中断会话。同一配置在 Terminal.app 正常，已排除 OSC 通知机制。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1892)

6. **#1889 权限提示弹窗过于频繁，打断编码流程**
   Windows 10 VS Code 插件环境下，“Yes / Yes for this session” 弹窗出现过多，影响使用体验。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1889)

7. **#1870 思考过程中输入中文，IME 候选框闪烁**
   在 Kimi Code 思考期间输入中文，候选框出现闪烁或显示异常，英文字符无影响。环境为 Windows PowerShell + glm-5.2。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1870)

8. **#1894 kimi web 静态资源无缓存，加载效率低**
   `kimi web` 对带指纹的 Vite 资源每次返回 200，缺少缓存策略，在低性能设备上页面加载慢。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1894)

9. **#1883 macOS 上 CLI 因 clipboard 模块死锁而无限卡住**
   报告在 macOS 26.5.2 (ARM64) 上，kimi-code 0.27.0/0.26.0 因 `clipboard.darwin-universal.node` 死锁导致整个进程卡死。
   [链接](https://github.com/MoonshotAI/kimi-code/issues/1883)

10. **#1887 API 接入点不支持请求体压缩，长上下文延迟大**
    `api.kimi.com/coding` 不支持 gzip/deflate 压缩，长 prompt 场景首 token 延迟（TTFT）明显上升。建议支持 Content-Encoding: gzip。
    [链接](https://github.com/MoonshotAI/kimi-code/issues/1887)

---

## 重要 PR 进展
1. **#1895 web 静态资源缓存修复**
   为 `kimi web` 添加缓存头，解决 #1894 重复加载问题。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1895)

2. **#1882 修复终端崩溃后会话恢复失败**
   当进程被意外终止留下空 assistant 消息时，自动清除该尾部消息，避免 API 拒绝。关联 #1404。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1882)

3. **#1879 修复 TUI Markdown 粗体颜色暗黑不可读**
   使 assistant 消息中的粗体文本正确使用主题的 `textStrong` 颜色，解决暗背景下无法看清的问题。关闭 #1872。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1879)

4. **#1886 ACP 适配器转发上下文窗口使用量**
   将原本仅在交互 TUI 可见的上下文窗口占用信息通过 ACP `usage_update` 发送，使 Zed 等 ACP 客户端也能显示。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1886)

5. **#1573 新增 /diff 命令查看 AI 编辑与 git 变更**
   在 TUI 内即可审查 AI 所做的文件修改和工作区 git diff，无需离开 Kimi Code。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1573)

6. **#1430 从 /provider 设置 OpenAI 兼容提供方**
   允许在 TUI 中直接配置第三方 base URL/API key，并自动发现可用模型，改善自定义 provider 体验。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1430)

7. **#1826 重构 kimi server 命令，统一为 kimi web 并支持多服务器**
   移除实验特性标记，允许多个 server 共享同一 home 目录，简化 server 管理。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1826)

8. **#1720 修复 MCP 工具中 required 字段缺失导致的请求拒绝**
   当 MCP server 声明了 properties 中不存在的必填字段时，不再直接拒绝请求，而是规范化处理。修复 #1610。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1720)

9. **#1888 添加统一的 transcript 层及 v1 界面**
   引入共享的分页转录层，让 TUI、web、inspector 等客户端共用渲染状态，避免各自重新解析事件。
   [链接](https://github.com/MoonshotAI/kimi-code/pull/1888)

10. **#1893 新增 LangSearch 提供商及重排序功能**
    为 Web 搜索添加独立后端（LangSearch），并支持跨后端结果重排序，减轻对 Moonshot 搜索凭证的依赖。关联 #1041。
    [链接](https://github.com/MoonshotAI/kimi-code/pull/1893)

---

## 功能需求归类
- **交互形式**：恢复浏览器中与 CLI 交互的模式（#160），并增加 `/tree` 等会话导航能力（#1871）。
- **权限与审批体验**：修复 deny 通配规则逻辑（#1891），降低弹窗频率（#1889），修正 Auto/YOLO 描述混淆（#1874）。
- **终端与输入兼容性**： iTerm2 审批弹窗卡死（#1892）、中文 IME 闪烁（#1870）、光标样式可切换（#1873）。
- **性能与网络**：静态资源缓存（#1894）、API 请求体压缩（#1887）、处理速度慢（#1890）。
- **第三方集成**：支持 NewAPI 等自定义端点添加（#1876），改善 provider 模型选择（#304）。
- **会话稳定性**：终端崩溃后恢复失败（#1404）、macOS 剪贴板死锁（#1883）。
- **Hook / 插件机制**：SessionStart 输出被丢弃、缺少 post-compaction 通道（#1896）。

---

## 开发者关注点
1. **审批弹窗严重影响编码流畅性**——尤其在 Windows VS Code 插件场景下，权限提示过于频繁，急需可调节策略。
2. **终端环境差异导致严重卡死**——iTerm2 特有的 TUI 卡死问题尚未修复，迫使部分用户切换终端应用。
3. **中文输入法支持欠佳**——在思考过程中切换中文输入法会出现视觉闪烁，影响输入体验。
4. **无 Git 项目的会话恢复能力缺失**——/rewind 功能呼声高，目前仅能依赖 `/undo` 临时恢复，阻碍复杂调试。
5. **自定义 API 端点与第三方模型接入困难**——虽已有多项 PR 在推进，但现网对 NewAPI 等平台的支持仍报错。
6. **性能优化诉求集中**——长上下文场景下的网络传输与首 token 延迟（#1887）以及 web 资源反复加载（#1894）影响日常使用。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-07-19）

## 今日更新概览
过去 24 小时无新版本发布，但社区在 issue 跟踪和代码修复上非常活跃。最受关注的 Memory Megathread 继续收拢内存问题采集指引，多个桌面端、模型兼容与国际化相关的缺陷被集中反馈。PR 侧则聚焦于 V2 模拟器截图渲染、外部路径授权恢复及 stale 缓存刷新等核心修复。

## 社区热点 Issues（Top 10）

1. **#20695 Memory Megathread**
   由维护者发起的内存问题汇总帖，已积累 113 条评论和 90 个 👍。明确要求用户勿用 LLM 提解决方案，而是按指引采集 heap snapshots，是目前社区协作排查内存问题的主阵地。
   https://github.com/anomalyco/opencode/issues/20695

2. **#6680 桌面端查看已归档会话**
   请求在侧栏菜单增加「查看已归档会话」入口，打开弹窗列出历史会话。已获 24 个 👍 和 39 条讨论，反映出桌面端用户对会话管理的强需求。
   https://github.com/anomalyco/opencode/issues/6680

3. **#6231 自动发现 OpenAI‑compatible 模型**
   要求对 LM Studio / Ollama 等本地提供商自动拉取模型列表，避免手动配置。已获 182 个 👍，成为呼声最高的功能请求之一，直接击中本地模型频繁变动的痛点。
   https://github.com/anomalyco/opencode/issues/6231

4. **#37428 桌面端亮度值「像戒灵选的」**
   新桌面客户端的标题栏在 dark 主题下对比度过低，用户调侃「像魔戒戒灵选的亮度」。虽然看似 UI 小问题，但已引发多位用户共鸣，期待官方调整。
   https://github.com/anomalyco/opencode/issues/37428

5. **#37544 [2.0] 模型 limit 覆盖被忽略**
   `limit.context` 配置在 `openai/gpt-5.6-sol` 等预设模型上失效，导致无法提前触发自动压缩。对控制成本和上下文长度敏感的用户造成直接困扰。
   https://github.com/anomalyco/opencode/issues/37544

6. **#37664 OpenCode CLI 导出 JSON 字符损坏**
   导出会话时部分 Unicode 字符（如 ñ、box‑drawing 符号）变成乱码，影响会话记录的可靠归档与迁移。
   https://github.com/anomalyco/opencode/issues/37664

7. **#37680 OpenCode Zen 付费后仍被限速且无客服渠道**
   付费订阅 + 余额充足却被 rate limit，且找不到联系支持的方式。突显商业服务在消费者权益和客服可达性上的缺口。
   https://github.com/anomalyco/opencode/issues/37680

8. **#37654 撤回聊天内容时错误撤回其他会话的代码修改**
   revert 操作偶发且错误地回滚了不属于当前聊天的本地修改，被标记为严重 bug，团队已被要求重点排查。
   https://github.com/anomalyco/opencode/issues/37654

9. **#37658 新布局下输入框占位符硬编码英文，绕过 i18n**
   `designPlaceholder()` 返回英语文本，导致中文用户无法看到已翻译的「随便问点什么…」。开发者已指出相关 i18n 键值被绕过。
   https://github.com/anomalyco/opencode/issues/37658

10. **#28697 Agent 在 Android 构建成功后挂起**
    `assembleDebug` 完成并输出 “BUILD SUCCESSFUL” 后，agent 无限期不终止，阻塞后续流程，对 Android 开发者构成效率影响。
   https://github.com/anomalyco/opencode/issues/28697

## 重要 PR 进展（Top 10）

1. **#37691 修复 V2 模拟器截图缺省符号渲染**
   将 OpenCode 符号和 braille 旋转帧正确渲染到 PNG 截图，消除缺字形方框，提升截图可用性。
   https://github.com/anomalyco/opencode/pull/37691

2. **#37689 恢复对相对外部路径的授权处理**
   解析到工作区外部的相对路径不再直接拒绝，而是走 `external_directory` 授权流程，兼容 V1 行为。
   https://github.com/anomalyco/opencode/pull/37689

3. **#37669 处理畸形工具输入并给模型安全反馈**
   对 LLM 输出的非法工具参数进行无副作用标记，为模型返回协议安全的错误提示，防止整个步骤崩溃。
   https://github.com/anomalyco/opencode/pull/37669

4. **#37688 / #35777 修复 stale 插件/缓存**
   两个 PR 均解决 `@latest` 插件在初次安装后未更新 npm 版本的问题，确保每次都检查注册表最新版本。
   https://github.com/anomalyco/opencode/pull/37688 / https://github.com/anomalyco/opencode/pull/35777

5. **#35433 尊重 `tool_call: false` 模型配置**
   修复了模型中禁用工具调用后仍发送 tools 描述的问题，避免某些模型报错或行为不一致。
   https://github.com/anomalyco/opencode/pull/35433

6. **#34794 增加 `--model free` 随机选取零费模型**
   为 CLI 和 TUI 引入 `--model free`，每次从 OpenCode Zen 免费模型中随机选用一个，方便测试或低成本使用。
   https://github.com/anomalyco/opencode/pull/34794

7. **#35223 桌面端 deep link 适配新布局**
   `opencode://` 协议链接在 Electron 中可以正常打开项目或新会话，解决新布局下 deep link 无效的问题。
   https://github.com/anomalyco/opencode/pull/35223

8. **#37690 将 `opencode-plugin-office` 加入生态文档**
   社区插件收录，扩展 Office 文档处理能力，属于生态丰富化贡献。
   https://github.com/anomalyco/opencode/pull/37690

9. **#32906‑#32876 系列文档/修复合辑**
   过去 24 小时多次自动化 PR 清理，涵盖 Windows 环境变量路径规范化、工具不可用时不展示说明、会话导出全文、LSP 默认启用说明、规则文件优先级说明等，显著改善了文档和稳定性。
   例：https://github.com/anomalyco/opencode/pull/32906

10. **#32869 处理 MCP 文本资源 blob**
    修复 MCP 文本类资源（如 text/csv）被当作二进制附件回放导致的错误，增强 MCP 兼容性。
    https://github.com/anomalyco/opencode/pull/32869

## 功能需求归类
- **会话管理增强**：查看归档、搜索会话历史（#6680）。
- **本地模型体验优化**：自动发现模型（#6231）、LM Studio 模型刷新（#2047）、Ollama 响应缓慢（#18428）。
- **桌面端交互改善**：集成浏览器（#26772）、亮度/对比度调整（#37428）、国际化占位符（#37658）。
- **Agent 可靠性**：计划/构建模式切换（#37101）、构建完成后挂起（#28697）、模型选择回退（#34207）。
- **教育与工作流**：“Teach” 模式提案，用于教学式学习（#36521）。

## 开发者关注点
- **内存与性能**：Memory Megathread 集中采集 heap snapshot，说明桌面/TUI 内存泄漏仍是核心痛点。
- **配置一致性与可预测性**：模型 limit 覆盖失效、工具调用开关被忽略等问题让开发者感觉「配置不生效」。
- **V2 迁移摩擦**：V2 CLI 加载不必要 TUI 库、default_agent 被忽略、MCP 切换失灵，正值 V2 推广期，需尽快稳定。
- **商业服务信任**：付费后仍被限速、缺乏客服、甚至被指「签到流程欺诈」，损害付费用户信任。
- **国际化与辅助功能**：硬编码英语绕过已有翻译、桌面菜单未本地化等，表明国际化流程需要更严格的开发约束。

*日报基于 [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) 公开信息整理。*

</details>