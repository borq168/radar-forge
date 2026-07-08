# AI CLI 工具社区动态日报 2026-07-08

> 生成时间: 2026-07-08 00:55 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# 2026-07-08 AI CLI 工具社区横向对比报告

## 今日横向概览
过去24小时，Claude Code 连续发布两个修复版本，聚焦会话稳定性；OpenAI Codex 推出两个 Rust CLI alpha 预发布版，GPT‑5.5 推理 token 聚类问题继续引发热烈讨论；Gemini CLI 发布 nightly 版本修复沙盒与转义问题，社区以 50 个 Issue 更新和 19 个 PR 成为代码贡献最活跃的项目之一；GitHub Copilot CLI 发布 v1.0.69 系列，重点强化沙箱策略与审批绕过；Qwen Code 密集发布了 3 个版本，同时涌现 50 个 PR 和 33 个 Issue，围绕 daemon 多工作区与通道集成快速迭代；OpenCode 发布 1.17.15 修正版，并推进 session 恢复、插件钩子等多项重构；Kimi Code CLI 今日仅有 1 条旧 Issue 更新，社区几乎沉寂。

## 各工具活跃度对比
| 工具 | Issues 数 | PR 数 | Release 情况 |
|------|-----------|-------|---------------|
| Claude Code | 10 (热点，总数未披露) | 3 | v2.1.203 / v2.1.204（2 个修复） |
| OpenAI Codex | 10 (热点，总数未披露) | 10 | rust‑v0.143.0‑alpha.38/39（2 个预发布） |
| Gemini CLI | 50 | 19 | v0.51.0‑nightly.20260707（1 个夜间版） |
| GitHub Copilot CLI | 29 | 0 | v1.0.69 / v1.0.69‑3（2 个正式版） |
| Kimi Code CLI | 1 | 0 | 无 |
| OpenCode | 10 (代表性讨论，总数未披露) | 10 | v1.17.15（1 个修正版） |
| Qwen Code | 33 | 50 | v0.19.7 / v0.19.6‑preview.0 / nightly（3 个） |

> 说明：Claude Code、OpenAI Codex、OpenCode 的 Issue 数采用日报选取的热点/代表性议题数量，实际更新的 Issue 可能更多。

## 共同出现的功能方向
- **Token 成本与计量透明度**
  Claude Code（#41506 Token 用量飙升、#38029 恢复时额外消耗、#33978 提议 `claude usage` 命令）、OpenAI Codex（#30364 GPT‑5.5 推理 token 聚类导致性能下降）、OpenCode（#13003 希望 TUI 显示 token 用量）、Qwen Code（#6264 /review skill 消耗大量 token、#6265 工具搜索导致 KV 缓存失效）。多个社区同时要求更精细的用量可见性。

- **子代理/多代理执行可靠性**
  Claude Code（#75043 嵌套子代理必异步且通知丢失）、Gemini CLI（#22323 子代理误报成功、#21409 通用代理挂起）、GitHub Copilot CLI（#2729 /delegate 忽略用户分支指令、#1389 多智能体协作需求）、Qwen Code（#5176 请求限制子代理并行数、#6321 PreToolUse hook 决策失效）。代理调度的稳定性与行为可预测性是普遍痛点。

- **Hook/自动化扩展能力**
  OpenAI Codex（#21753 完全对标 Claude Code 的 Hook 系统）、GitHub Copilot CLI（#2643 preToolUse 无法静默重写命令）、Qwen Code（#6321 PreToolUse ask 决策静默失败、#6488 请求 MessageDisplay 流式 hook）、Claude Code（#41453 安全 Stop hook 示例）。社区希望 hook 能真正实现无交互自动化和精细拦截。

- **终端 UI/UX 与交互回归**
  Claude Code（#61021 VS Code 终端文本选择复制失效）、OpenCode（#6823 黑色主题对比度过低、#4461 输入框黑底黑字）、GitHub Copilot CLI（#4053 NFS/GPFS 下 TUI 卡死）。跨工具的终端交互缺陷直接影响日常编码效率。

- **Windows 平台兼容性**
  GitHub Copilot CLI（#4001 Windows 下钩子完全失效）、OpenCode（#27963 Windows 二进制损坏）、Qwen Code（#6298 Windows Shell 工具 stdout 处理错误）。多工具同时暴露出 Windows 环境适配不足的问题。

- **安全与沙箱策略演进**
  Claude Code（安全误报问题）、GitHub Copilot CLI（v1.0.69‑3 审批后绕过沙箱、沙箱策略标记）、Gemini CLI（#19873 零依赖沙盒提议、macOS 沙盒只读修复）。用户既要安全性，也要求不阻碍正常工作流。

## 差异化定位分析
- **Claude Code**：深度绑定 Anthropic 模型，社区对 Token 成本极其敏感；会话管理（/resume、后台任务）、Hook 系统成熟但仍在打磨；多见于 VS Code 集成与远程 worker 场景。
- **OpenAI Codex**：依托 OpenAI 新模型（GPT‑5.5），桌面端与 IDE 集成突出，注重远程、移动连接与 Git 工作流；Hook 方向还在追赶 Claude Code。
- **Gemini CLI**：Google 生态（Gemini 3 模型），关注子代理记忆、自动记忆提取与隐私；沙盒执行、零依赖执行等安全特性探索领先。
- **GitHub Copilot CLI**：紧密耦合 GitHub 生态，强调沙箱策略、插件热重载、Git 工作流自动化；旧命令移除引发社区信任危机，非 Git 场景支持薄弱。
- **Kimi Code CLI**：社区极不活跃，仅有的需求指向 Figma MCP 集成，功能范围窄，可能面向国内设计‑开发联动场景。
- **OpenCode**：通用多提供商终端客户端，支持插件、session 钩子，跨平台但终端 UI 问题突出；近期着力 session 持久化与 V2 数据模型重构。
- **Qwen Code**：阿里生态深度集成（企业微信、钉钉、QQ 通道），daemon 多工作区架构、SDK 双语言支持；PR 数量庞大，迭代速度极快，偏向企业级通信与审批集成。

## 社区活跃度记录
今日社区活跃度分层明显：
- **极高活跃**：Qwen Code（50 PR，33 Issue，3 Release）与 Gemini CLI（50 Issue，19 PR，1 Release）在代码贡献和需求讨论上显著领先。
- **稳定活跃**：OpenAI Codex（10 PR，10 热点 Issue，2 alpha）与 OpenCode（10 PR，10 热点 Issue，1 Release）保持稳健的技术迭代。Claude Code（3 PR，10 热点 Issue，2 修复版）讨论热烈但代码合并量相对较少。
- **讨论为主、无代码合并**：GitHub Copilot CLI（29 Issue，0 PR）社区诉求集中但无 PR 落地，官方主要通过版本发布回应。
- **几近沉寂**：Kimi Code CLI（1 Issue，0 PR，无发布）今日几乎无社区活动。

## 有证据支撑的观察
1. **成本与 token 计量成为跨工具共性问题**
   Claude Code 多个高赞 Issue 质疑 Token 异常与静默计费变动，OpenAI Codex 聚焦 GPT‑5.5 token 聚类影响质量，OpenCode 和 Qwen Code 也分别提出用量显示与 token 优化需求。说明用户对 AI CLI 的成本透明度与可预测性要求已从“希望”变为“必须”。

2. **子代理/多代理执行的不稳定性普遍存在**
   Claude Code 的嵌套子代理通知丢失，Gemini CLI 的误报成功与挂起，Copilot CLI 的 /delegate 忽略指令，Qwen 的子代理限制需求——四种工具同时暴露代理调度缺陷，表明当前代理编排的成熟度仍不足以支撑复杂自动化工作流。

3. **Hook 系统看似强大，但实现与用户期望存在差距**
   OpenAI Codex 提出对标 Claude Code 的全面 Hook 需求，Copilot CLI 的 preToolUse 无法真正静默，Qwen Code 的 ask 决策不生效，共同反映出 Hook 的“可编程自动化”理想在实际环境中仍未落地，静默执行与可靠拦截仍是缺口。

4. **终端交互体验在多个工具中出现回归**
   Claude Code 的 VS Code 终端无法复制文本，OpenCode 的配色导致文字不可读，Copilot CLI 在 NFS 下卡死，Qwen Code 的流式表格渲染卡顿——跨工具的终端 UI 问题集中爆发，影响面广，亟需底层方案优化而非个案修补。

5. **Windows 兼容性成为多工具的共同短板**
   Copilot CLI 的钩子失效、OpenCode 的二进制损坏、Qwen Code 的 Shell 工具依赖缺失，在同一天出现，表明 AI CLI 工具在 Windows 平台的适配和测试仍明显落后于 macOS/Linux，对 Windows 用户形成系统性障碍。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 (2026-07-08)

## 今日更新概览
过去24小时内发布了两个版本修复（v2.1.203/204），主要修复了 headless 会话钩子流问题并新增了登录过期提醒与手动权限模式视觉标识。社区活跃，围绕 **Token 用量异常、会话恢复消耗、静默计费变动** 等成本类问题持续讨论，同时子代理嵌套、终端交互、安全误报等新缺陷开始涌现。

## 版本发布
### v2.1.204
- 修复：headless 会话中 SessionStart 钩子不流式输出事件的问题，该问题可能导致远程 worker 在钩子执行期间被闲置回收。

### v2.1.203
- 新增：登录即将过期时的警告提醒，避免后台会话因认证失效而中断。
- 新增：手动权限模式下，底部栏显示灰色 ⏸ 徽章，使当前模式始终可见。
- 新增：会话的附加工作目录信息展示。

## 社区热点 Issues （10 个）
1. **#41506 – Max 计划 Token 用量飙升 3~5 倍**
   @Commandershadow9 报告自 3 月底起，同样工作负载下 Token 消耗无故增长数倍，影响长时间编码会话。51 条评论、26 个点赞反映了广泛共鸣。
   [链接](https://github.com/anthropics/claude-code/issues/41506)

2. **#38029 – 会话恢复时异常消耗**
   @kokemizawa 发现从 `/resume` 恢复会话时会产生严重额外的 Token 消耗，疑似计费漏洞。23 条评论、33 赞。
   [链接](https://github.com/anthropics/claude-code/issues/38029)

3. **#28927 – v2.1.51 静默凭据变动：1M 上下文模型移出订阅配额**
   @paulseongminpark 升级后所有 1M 上下文模型开始消耗 Extra Usage，未在 changelog 中说明，且费用未实时反映。16 条评论、19 赞。
   [链接](https://github.com/anthropics/claude-code/issues/28927)

4. **#33978 – 请求内置 `claude usage` 分析命令**
   @mp719lkh 提议增加统一的使用量查看命令，以解决十余个相关 Issues 中反映的 Token 可见性不足问题。18 条评论、10 赞。
   [链接](https://github.com/anthropics/claude-code/issues/33978)

5. **#75043 – 嵌套子代理均被强行为异步执行**
   @mof086999-code 发现子代理派生的子代理必异步运行，导致完成通知无法到达父代理，且恢复后会抛出所有权错误。已复现，涉及多模型。
   [链接](https://github.com/anthropics/claude-code/issues/75043)

6. **#61021 – VS Code 终端内无法正常选择/复制文本**
   @Amnesiac9 指出最近更新导致 VS Code 终端中 Claude Code 的文本划选与 Ctrl+C 复制失效，影响日常操作。9 条评论、7 赞。
   [链接](https://github.com/anthropics/claude-code/issues/61021)

7. **#45810 – 插件市场“更新”按钮灰化不可点击**
   @DojoGenesis 发现虽检测到插件版本更新，但 UI 中按钮始终不可用。13 条评论、5 赞。
   [链接](https://github.com/anthropics/claude-code/issues/45810)

8. **#23579 – 月度费用上限未生效，实际消费超出限额**
   @shahnaman 设置的 $50 月限额未阻止超额计费，暴露预算控制机制缺陷。4 条评论。
   [链接](https://github.com/anthropics/claude-code/issues/23579)

9. **#74529 – `/resume` 无法重开会话（含有活跃后台任务）**
   @davetbo-ai 报告若会话内有正在运行的后台 Bash 或 Monitor，`/resume` 会拒绝重开，被迫改用 `claude agents`。影响作业连续性。
   [链接](https://github.com/anthropics/claude-code/issues/74529)

10. **#66887 – Fable 5 思考块在 VS Code 扩展中渲染为空不可点击占位块**
    @karthiksurandai 升级到 v2.1.170 后，Fable 5 模型的 thinking blocks 在扩展界面中无法查看内容。
    [链接](https://github.com/anthropics/claude-code/issues/66887)

## 重要 PR 进展
- **#73476** docs: 修正 README 中 “GitHub” 大小写
  由 @Elmahditcham 提交，仅文档修改。
  [链接](https://github.com/anthropics/claude-code/pull/73476)

- **#75252** docs: 澄清插件 MCP 配置作用域
  由 @andrewmuratov 重开，说明插件 `mcpServers` 与用户级 MCP 清单的差异。
  [链接](https://github.com/anthropics/claude-code/pull/75252)

- **#41453** examples(hooks): 添加带有 PID 锁定与超时的安全 Stop hook 示例
  由 @m4cd4r4 提交，针对 Stop hook 运行后台任务时进程失控问题提供参考实现。
  [链接](https://github.com/anthropics/claude-code/pull/41453)

## 功能需求归类
- **计费与成本透明度**：多起 Token 消耗异常、静默计费改动及限额失效问题，催生了 `claude usage` 命令、更细粒度的用量统计等需求。
- **模型配置与计费准确性**：项目级模型锁定与 `/model` 选择器冲突、模型从订阅配额中被意外移除，用户要求更明确的通知与控制。
- **插件与 MCP 生态**：市场更新按钮不可用、MCP 配置说明不清，表明开发者对插件升级与管理流程有优化期待。
- **终端 UI/UX 交互**：文本选择复制、shell mode 光标错位、终端查询码泄漏等问题频发，指向交互回归修复需求。
- **会话与子代理管理**：嵌套子代理行为异常、`/resume` 失败、后台任务可见性，需要更健壮的并发与恢复机制。
- **安全过滤准确性**：cyber 误报阻止合法开发、web dev 被标记为 safeguard，社区呼吁减少误拦截。
- **文档与帮助**：`--teleport` 等隐藏参数缺少文档、 agent view 版本历史过时等，待补充。

## 开发者关注点
- **成本异常是当前最尖锐的痛点**：多个高互动 Issue 均指向 Token 用量无故暴增、恢复时额外消耗以及订阅范围悄悄缩水，开发者对计费机制的可靠性和透明度信任度下降。
- **交互回归降低效率**：VS Code 内文本无法选择复制、shell mode 光标错位、插件更新按钮失效等直接影响日常操作的 bug，妨碍流畅的编码体验。
- **子代理嵌套与后台任务稳定性堪忧**：嵌套子代理必异步且通知丢失、`/resume` 受阻，使复杂的自动化工作流难以可靠运行。
- **Fable 5 的集成体验不佳**：thinking blocks 渲染空白、工具调用标签错误等，影响新模型的实际可用性。
- **安全过滤误报困扰合法开发**：合法项目分析被误判为网络安全威胁或受保护数据处理，打断正常工作流，需更智能的检测策略。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-08

## 今日更新概览
过去 24 小时，Codex 仓库新增 2 个 alpha 版本（Rust CLI），Issue 与 PR 活跃度维持高位。社区焦点依然集中在 GPT-5.5 推理 token 边界聚类导致的性能退化问题上（#30364，154 条评论），同时多起 Windows/Mac 桌面端稳定性问题（会话丢失、MCP 进程泄漏、Computer Use 故障）引发持续反馈。

## 版本发布
- **rust-v0.143.0-alpha.38 / alpha.39**
  连续发布两个 Rust CLI alpha 预发布版本，未附带具体变更说明，与主线 `main` 分支的快速迭代同步。

## 社区热点 Issues（10 个）
1. **[GPT-5.5 Codex 推理 token 聚类在 516/1034/1552 处或导致复杂任务性能下降](https://github.com/openai/codex/issues/30364)**
   `@vguptaa45` 发现 `gpt-5.5` 响应中 `reasoning_output_tokens` 高度集中在 516、1034、1552 等固定边界，与复杂任务上的推理质量下降相关。目前 154 条评论、251 个 👍，是今日最热议题。

2. **[完全对标 Claude Code 的 Hook 系统（29+ 种事件）](https://github.com/openai/codex/issues/21753)**
   `@oxysoft` 提出将 Codex 的 Hook 机制提升至与 Claude Code hook 同等的全面自动化表面，覆盖生命周期、工具调用、审批等场景。26 条评论，19 个 👍。

3. **[动态加载嵌套的 AGENTS.md](https://github.com/openai/codex/issues/12115)**
   `@kszlim` 建议像 Claude Code 那样，在进入子目录时按需加载对应的 AGENTS.md 上下文规则。83 个 👍，长期呼声很高。

4. **[Codex 命令超时问题](https://github.com/openai/codex/issues/7353)**
   CLI 0.63.0 版本在 AWS Linux 上出现模型思考片段后无响应，用户质疑超时机制。19 条评论。

5. **[Codex IDE 扩展导致桌面 Chromium 浏览器中 code-server 侧边栏冻结](https://github.com/openai/codex/issues/28726)**
   `@SMOKE-19` 反映 macOS/Chrome 环境下打开 Codex 侧边栏时整个 code-server 界面无响应，Android 浏览器下较正常。14 条评论。

6. **[上下文压缩遗忘 AGENTS 规则：进度从 97% 回跳至 42%](https://github.com/openai/codex/issues/25792)**
   `@GGBondBlueWhale` 描述长时间任务中自动压缩上下文导致 Codex 丢失规则指令，任务进度发生剧烈倒退。13 条评论，影响 Pro 用户。

7. **[增加“关闭 60 秒自动解决”的选项](https://github.com/openai/codex/issues/28969)**
   `@antoyo` 请求为 CLI 添加禁用 60 秒自动确认提问的设置项，避免交互中断。88 个 👍。

8. **[macOS 锁屏状态下 Computer Use 报 cgWindowNotFound](https://github.com/openai/codex/issues/24086)**
   Mac mini M4 + Studio Display 在锁屏时调用 Computer Use 失败，解锁后正常。10 条评论，9 个 👍。

9. **[Windows 桌面 app-server 重复创建 MCP stdio 进程池（183 个 node.exe / 13 GB 内存）](https://github.com/openai/codex/issues/31499)**
   `@xxH7r` 报告 Windows 版 Codex 反复启动重复的 `cmd -> npx -> node.exe` 树，导致大量内存泄漏。今日新 Issue，已引发讨论。

10. **[Codex 桌面端展示不可恢复/归档的幽灵会话](https://github.com/openai/codex/issues/29868)**
    UI 中残留已不存在的会话 ID，点击后提示 `no rollout found`，且无法归档清除，影响会话管理体验。

## 重要 PR 进展（10 个）
1. **[支持禁用 SQLite 的降级运行模式](https://github.com/openai/codex/pull/31509)**
   恢复 `sqlite = false` 功能开关，使 Codex 能在 NFS 等不适合本地数据库的环境安全运行，跳过状态初始化与完整性检查。

2. **[将 code-mode 迁移为“托管模式”并默认启用](https://github.com/openai/codex/pull/31500)**
   将 `code_mode_host` 提升为稳定特性，默认通过独立主机进程运行 code-mode；保留 `features.code_mode_host = false` 的退出开关。

3. **[加速反向历史搜索](https://github.com/openai/codex/pull/30887)**
   将反向历史搜索从每次读取一条记录（反复打开锁定 `history.jsonl`）改造为批量加载，显著减少 I/O 开销。

4. **[支持外部提供的 Codex 认证](https://github.com/openai/codex/pull/31274)**
   新增内存中的外部认证快照，通过 `ExternalAuth` 接口注入运行时权能，并包含完整单元测试。

5. **[检测 Vite+ 管理的安装](https://github.com/openai/codex/pull/30880)**
   `@charliemarsh-oai` 识别 Vite+ 全局安装的包布局，使 `codex doctor` 和更新流程能使用 `vp install -g` 而非 npm 命令进行修复。

6. **[批量远程技能发现读取](https://github.com/openai/codex/pull/31507)**
   新增 `ExecutorFileSystem::read_files` 批量 RPC，避免远程线程启动时为每个技能文件发起单独 RPC，提升启动性能。

7. **[添加 ACK-based Noise 中继重试机制](https://github.com/openai/codex/pull/31457)**
   解决因 WebSocket 丢包导致 Noise 加密流无法恢复的问题，通过基于 ACK 的重试保证 JSON-RPC 流可靠性。

8. **[统一工具审批路由](https://github.com/openai/codex/pull/31460)**
   重构审批决策路径，在 PermissionRequest hooks、Guardian 及用户审核之间统一路由，严格遵循 hook 优先逻辑。

9. **[添加 RUST_LOG 工具搜索管道诊断日志](https://github.com/openai/codex/pull/31466)**
   为受影响的用户提供临时诊断能力，排查插件服务返回工具而 Codex 认为丢失的不一致问题。

10. **[CI: 运行 V8 源码构建于 Windows 2025 镜像](https://github.com/openai/codex/pull/31356)**
    将 V8 源码构建矩阵从 `windows-2022` 迁移至 `windows-2025`，适配 Dev Drive 设置，并修正缓存命名空间。

## 功能需求归类
- **模型行为与可靠性**：GPT-5.5 token 聚类、上下文压缩失忆、超时行为
- **桌面与 IDE 集成稳定性**：Windows/Mac 会话丢失、冻结、MCP 进程泄漏、幽灵会话
- **代理与自动化能力**：对标 Claude Code 的 Hook 系统、可信访问状态反馈
- **远程与移动连接**：SSH 密钥认证优化、移动端连接稳定性
- **上下文与规则管理**：嵌套 AGENTS.md 按需加载、内存写入行为明确化
- **CI/工具链适配**：Vite+、pnpm 安装检测、SQLite 禁用模式
- **性能**：LSP 支持改善跨文件理解、inotify 监控泄漏、历史搜索加速

## 开发者关注点
开发者当前最关心的问题是 **GPT-5.5 模型在推理 token 分配上的固定边界可能造成的性能瓶颈**，该 Issue 获得了大量工程师的共鸣和实验验证。其次，**上下文压缩导致长任务规则丢失、进度倒退**成为影响信任的关键痛点。桌面端（尤其是 Windows 和 macOS）的稳定性缺陷（内存泄漏、会话意外消失、Computer Use 锁屏故障）也困扰着日常重度用户。在工具链方面，社区希望 Codex 进一步对齐 Claude Code 的 Hook 与记忆机制，同时改善远程开发场景下的认证与通知体验。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# 2026-07-08 Gemini CLI 社区动态日报

## 今日更新概览
过去 24 小时，Gemini CLI 社区保持高度活跃，共有 50 个 Issue 更新、19 个 PR 提交。维护者发布了一个 Nightly 版本，修复了 macOS 沙盒与字符串转义问题。多个热门议题集中在子代理行为、自动记忆机制以及 Shell/浏览器执行稳定性等方向。

## 版本发布
**v0.51.0-nightly.20260707.g15a9429b6**
- 修复 macOS 沙盒中将 `~/.gitconfig` 设为只读的安全配置问题。
- 修复现代模型下字符串字面量中保留转义序列的核心行为。
  （相关 PR: [#28301](https://github.com/google-gemini/gemini-cli/pull/28301)）

## 社区热点 Issues (按评论数及关注度选取)
1. **[Subagent recovery 以 GOAL success 误报中断](https://github.com/google-gemini/gemini-cli/issues/22323)**
   `codebase_investigator` 子代理在达到 MAX_TURNS 后仍报告成功，隐藏了真实中断状态，影响自动化分析准确性。 (10 💬 | 👍 2)

2. **[利用模型 bash 亲和力实现零依赖沙盒](https://github.com/google-gemini/gemini-cli/issues/19873)**
   建议利用 Gemini 3 模型对 POSIX 工具的原生操控能力，构建无外部依赖的沙盒执行与路由机制。 (8 💬 | 👍 1)

3. **[通用代理挂起问题](https://github.com/google-gemini/gemini-cli/issues/21409)**
   当任务委派给 generalist 子代理时，CLI 会无限挂起（即使只是创建文件夹），手动禁止子代理可规避。 (7 💬 | 👍 8)

4. **[Gemini 不主动使用自定义技能和子代理](https://github.com/google-gemini/gemini-cli/issues/21968)**
   即便 skill/sub-agent 描述高度相关，模型仍需显式指令才会调用，影响自动化体验。 (6 💬)

5. **[Shell 命令执行后卡在 “Waiting input”](https://github.com/google-gemini/gemini-cli/issues/25166)**
   简单 CLI 命令完成执行后，界面仍显示等待用户输入，导致流程卡死。 (4 💬 | 👍 3)

6. **[Wayland 下浏览器子代理失败](https://github.com/google-gemini/gemini-cli/issues/21983)**
   在 Wayland 环境中 browser subagent 报 GOAL 终止，但实际未执行有效操作。 (4 💬 | 👍 1)

7. **[自动记忆对低信号会话无限制重试](https://github.com/google-gemini/gemini-cli/issues/26522)**
   背景提取代理持续捞取低质量会话，造成资源浪费，且不标记为已处理。 (5 💬)

8. **[自动记忆需确定性脱敏并减少日志](https://github.com/google-gemini/gemini-cli/issues/26525)**
   记忆提取将明文内容送至模型，仅在 Prompt 层做脱敏，存在隐私与日志泄露风险。 (3 💬)

9. **[无效记忆补丁未被妥善隔离](https://github.com/google-gemini/gemini-cli/issues/26523)**
   格式有误或越界的记忆补丁被静默跳过，但汇总仍计入，干扰记忆质量。 (3 💬)

10. **[Browser Agent 忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267)**
   `maxTurns` 等配置在 browser 子代理中不生效，Agent 注册表虽正确读取却未应用。 (3 💬)

## 重要 PR 进展
1. **[feat(caretaker-triage): 实现 LLM 编排器、GCS 日志及容器构建](https://github.com/google-gemini/gemini-cli/pull/28307)** (closed)
   引入基于 Antigravity SDK 的 LLM 分类主流程、结构化 Cloud Storage 调试日志与 Cloud Run 构建定义。

2. **[feat(caretaker-triage): worker 主循环与 Pub/Sub 动作发布](https://github.com/google-gemini/gemini-cli/pull/28306)** (open)
   完成 Triage Worker 的 Cloud Run Job 入口，集成 Pub/Sub 出站动作发布器。

3. **[feat(caretaker-egress): 实现 Octokit GitHub 动作处理器](https://github.com/google-gemini/gemini-cli/pull/28303)** (open)
   为 Egress 服务增加 GitHub App 认证下的 Issue 评论与标签自动化处理。

4. **[fix(privacy): 无 Code Assist 套餐时展示清晰提示](https://github.com/google-gemini/gemini-cli/pull/28304)** (open)
   `/privacy` 命令在企业/Workspace 账户下不再暴露底层错误，而是给出用户可理解的指引。

5. **[fix(core): 剥离历史轮次中的思考内容，防止思维泄露](https://github.com/google-gemini/gemini-cli/pull/27971)** (closed)
   解决模型内部推理文本泄露至历史记录，导致后续轮次混淆或无限独白的缺陷。

6. **[feat(evals): 增加工具调用格式化与失败摘要](https://github.com/google-gemini/gemini-cli/pull/28305)** (open)
   在评测失败时自动打印代理工具调用的时间线与错误信息，加速问题定位。

7. **[refactor: 排除 CI 临时凭证文件以免污染工作区上下文](https://github.com/google-gemini/gemini-cli/pull/28216)** (closed)
   将 `gha-creds-*.json` 等 GitHub Actions 动态凭证从 WorkspaceContext 中移除，避免误导代理。

8. **[fix(extensions): 扩展更新时重试目录清理失败](https://github.com/google-gemini/gemini-cli/pull/27200)** (open)
   解决 Windows 上文件锁导致的临时目录删除失败，使扩展更新更可靠。

9. **[docs(policy-engine): 用安全命令替代 rm -rf / 进行测试](https://github.com/google-gemini/gemini-cli/pull/28244)** (open)
   快速入门指南中移除危险的测试范例，改为无害命令，防止用户误操作。

10. **[feat(evals): 增加 eval 覆盖率报告命令](https://github.com/google-gemini/gemini-cli/pull/28169)** (open)
   新增 `eval:coverage` 命令，交叉分析工具注册表与评测清单，输出内置工具覆盖率。

## 功能需求归类
- **子代理可靠性**：大量反馈指向子代理误报成功、挂起、不主动调用、配置不生效等，社区强烈期望提升代理调度与状态透明度。
- **自动记忆系统**：涉及无限制重试、确定性脱敏、无效补丁隔离、隐私控制等多个角度，记忆机制的质量与安全性成为焦点。
- **执行环境稳定性**：Shell 卡死等待输入、Wayland 下 browser 失效、交互式提示阻塞等，暴露了多种运行环境的适配问题。
- **安全与沙盒**：macOS 沙盒只读挂载、零依赖沙盒提案、危险命令阻拦等，安全约束与执行力之间的平衡需求增多。
- **评测与可观测性**：从组件级评测、工具调用格式化、覆盖率报告到子代理轨迹共享，可观测性与评估闭环的呼声很高。
- **工作区清洁与上下文管理**：临时脚本散落、CI 凭证污染等问题，用户希望代理能更好地管理生成物与上下文边界。

## 开发者关注点
- **子代理误报与挂起**：`codebase_investigator` 超轮次仍报成功，generalist 代理无限挂起（👎 8），是社区最直接的痛点。
- **模型自主调用能力不足**：自定义技能和子代理难以自动触发，需硬编码指令，削弱了智能体自主性。
- **隐私与记忆安全**：背景提取将明文送到模型，缺乏真实脱敏，且低质量会话被反复处理，开发者对内部数据安全十分关切。
- **多平台兼容性**：Wayland 浏览器代理失败、Windows 扩展更新文件锁等问题，跨平台行为一致性问题仍需持续修复。
- **配置穿透性差**：`settings.json` 中 maxTurns 等关键参数被 browser 代理忽略，影响用户对工具行为的精细控制。
- **工具溢出错误**：工具数量超过 128/400 时出现 400 错误，提示需更智能的工具范围管理。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-08

## 今日更新概览
过去24小时，Copilot CLI 发布了 v1.0.69 与 v1.0.69-3 两个版本，重点围绕沙箱策略标记、内置文件编辑审批绕过与插件热重载。社区议题活跃，共29条 Issue 更新，大部分集中在代理行为、工具可靠性、平台兼容与权限控制方面，无新 Pull Request。

## 版本发布
- **v1.0.69**（2026-07-07）
  - 内置文件编辑标记改为 “(sandbox policy)” 徽章（原 “(sandboxed)”），反映其遵循尽力而为的沙箱策略而非操作系统级沙箱。
  - 支持会话内重新加载已安装插件扩展，无需重启。
  - 新增 `/plugins` 仪表板用于管理插件。

- **v1.0.69-3**（2026-07-07）
  - 新增：审批后允许内置文件编辑绕过沙箱。
  - `web_fetch` 工具遵循当前沙箱网络策略（阻止被禁的出站或本机目标），并在沙箱配置 `sandbox.allowBypass` 开启时允许用户在抓取提示中一次性地批准绕过。

## 社区热点 Issues
1. **#53 - 社区强烈要求恢复原始 CLI 命令，已自行开发替代方案**
   用户因旧版 `gh copilot` 命令被移除导致工作流中断，在长达6个月无官方明确回应后，社区自主发布了 `shell-ai` 等替代工具。该 Issue 反应最强烈，获 75 个 👍，37 条评论。
   https://github.com/github/copilot-cli/issues/53

2. **#1389 - 多智能体协作工作流功能请求（已关闭）**
   提出构建协作式 AI 团队完成端到端开发（架构、产品管理、研发等），尽管 Issue 已关闭，但仍获 18 个赞，反映了用户对多代理编排的持续需求。
   https://github.com/github/copilot-cli/issues/1389

3. **#2643 - `preToolUse` 钩子无法静默重写命令**
   即使通过 `updatedInput` 设置 `permissionDecision: allow`，Copilot CLI v1.0.24 仍弹出交互确认框，导致自动化场景无处可逃。12 条评论讨论无官方修复。
   https://github.com/github/copilot-cli/issues/2643

4. **#2729 - `/delegate` 命令忽略用户指定的源分支或分支名**
   用户明确要求基于特定分支或命名创建新分支，代理却无视指令，影响 Git 工作流自动化。
   https://github.com/github/copilot-cli/issues/2729

5. **#3123 - `/research` 代理无法写入研究报告**
   代理完成研究后提示 `create` 工具不可用，无法将 Markdown 报告保存到文件，直接破坏研究型工作流。
   https://github.com/github/copilot-cli/issues/3123

6. **#4001 - Windows 下 `.claude/settings.json` 钩子完全失效**
   钩子通过 PowerShell 执行而非 bash，且未设置 `$CLAUDE_PROJECT_DIR`，导致所有仓库级钩子失败并阻止会话启动，对 Windows 用户影响广泛。
   https://github.com/github/copilot-cli/issues/4001

7. **#4053 - TUI 在 NFS/GPFS 文件系统上卡死（`Loading: N skills`）**
   根因是 `which gh` 子进程触发 SIGCHLD 竞争条件，导致会话挂起。问题影响所有网络文件系统用户，已标记 triage。
   https://github.com/github/copilot-cli/issues/4053

8. **#4054 - `/resume` 对非 Git 仓库会话完全失效**
   非 Git 目录创建的会话存储 `repository = '/'`，导致恢复选取器的 git 门控使其无法选择，跨项目用户受影响严重。
   https://github.com/github/copilot-cli/issues/4054

9. **#3954 - `explore` 工具硬编码模型 `gpt-5.4-mini` 忽略自定义 API 配置**
   使用自定义模型（如 DeepSeek）时，该工具仍发送 `gpt-5.4-mini` 给 API，导致调用失败，削弱了 BYOK 模式可靠性。
   https://github.com/github/copilot-cli/issues/3954

10. **#4038 - 非交互模式：MCP 服务器延迟连接注入空用户消息，模型返回系统提示而非实际回答**
    当 MCP 服务器暴露 7 个以上工具时，CLI 在真实提示后追加空消息，导致模型针对空轮次回应，破坏自动化流水线。
    https://github.com/github/copilot-cli/issues/4038

（注：另有 #4055 反馈免费版稳定性失控、#4049 提及 Docker stdio MCP 服务器重复启动等新 Issue，也开始引起讨论。）

## 重要 PR 进展
过去24小时无合并或更新的 Pull Request。

## 功能需求归类
从近期 Issue 中可归纳出以下重复出现的方向（非路线图）：
- **多智能体与代理编排**：用户期望内置多角色协作机制，例如自动分工的架构师、开发、测试代理。
- **静默/非交互自动化**：钩子需要真正的静默执行能力，`ask_user` 希望支持外部编辑器长文本输入，非交互模式亟需修复空消息、MCP 稳定性问题。
- **平台与环境兼容性**：Windows 下钩子支持、NFS/GPFS 等特殊文件系统适配、终端渲染与通知机制（macOS 后台）被多次提及。
- **模型与配置灵活性**：客户强烈要求 `explore` 等工具不再硬编码特定模型，完整支持自定义 API 和 ACP 模式下的 BYOK。
- **插件与 MCP 管理**：插件热重载已实现，但仍需解决 Docker MCP 重复启动、企业级插件同步失败、交互式输入变量等细节。
- **沙箱策略增强**：v1.0.69-3 已允许审批绕过，但用户继续关注沙箱在不同平台（如 Windows 特定版本）的稳定性和平台差异文档。

## 开发者关注点
- **旧命令移除后的工作流断裂**：社区已自行 fork 替代工具，官方未沟通路线图，引发信任危机。
- **非 Git 场景被边缘化**：`/resume` 失效、`repository` 路径硬编码等问题表明许多功能依赖 Git 上下文，非代码目录用户持续碰壁。
- **自动化与权限控制矛盾**：`preToolUse` 无法彻底绕开交互，非交互模式工具链易出 bug，制约 CI/脚本集成。
- **模型锁定与自定义冲突**：多个工具绕过配置使用硬编码模型，让自托管 API 用户无法正常使用，降低企业采用信心。
- **Windows 开发者体验待补课**：钩子系统基于 Linux 契约设计，Windows 适配远未完成，Desktop 版本也出现渲染、通知问题。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-08**

## 今日更新概览
过去 24 小时，仓库无新版本发布，无新增或合并的 Pull Request。社区侧仅有 1 条 3 个月前创建的 enhancement issue 被更新，讨论 Figma MCP 支持需求。

## 社区热点 Issues

### #1604 [enhancement] Figma MCP Support
作者 [@maoxian-1](https://github.com/maoxian-1) 请求集成 Figma MCP 能力，指出 Figma 侧 MCP 需要预先注册，希望 CLI 可以提供配套支持。该 issue 当前处于 OPEN 状态，已有 1 条评论和 2 个 👍。
- **影响场景**：前端开发者或设计师希望通过 Kimi Code CLI 直接与 Figma 设计文件交互。
- **社区反应**：尚无官方回应，但获得少量社区赞同。
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/1604

## 功能需求归类
本期仅有一条有效需求，归类如下：
- **外部工具 / MCP 集成**：用户期望支持 Figma MCP 的预注册与调用，使得 CLI 能与 Figma 设计工具联动。

## 开发者关注点
- **Figma MCP 支持**：开发者关注在 CLI 中引入设计工具链路，但当前该需求尚未进入开发阶段，讨论活跃度较低。后续需关注是否会有更多同类工具集成需求出现。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-07-08**

---

## 1. 今日更新概览

过去 24 小时，OpenCode 发布了 1.17.15 修正版本，重点修复了上下文窗口错误分类与配置目录异常处理。社区方面，问题讨论集中在终端颜色对比度、资源占用回升、Windows 二进制损坏等长期痛点，多个老问题被集中关闭；同时，核心团队在 session 恢复、插件钩子、V2 模型序列化等领域提交了一系列重构与修复 PR，开发者生态活跃。

---

## 2. 版本发布

**v1.17.15**
- **Core 修复**：
  - 优化 Z.ai 上下文窗口超限错误的分类，避免误报故障模式。
  - 处理配置目录不可访问时的异常，防止崩溃。
- **Desktop 改进**：
  - 模型选择面板中恢复模型详情工具提示。

---

## 3. 社区热点 Issues （选取 10 个代表性讨论）

1. **CLI 黑色/Pro 主题下文字对比度过低（#6823）**
   使用 macOS 终端 Pro 黑色主题时，CLI 文字几乎不可读。帖子获 17 赞，16 条评论，今日关闭。
   [链接](https://github.com/anomalyco/opencode/issues/6823)

2. **macOS 终端输入框黑底黑字（#4461）**
   在相同环境下，输入文字显示为黑色，完全看不见。13 条评论，今日关闭。
   [链接](https://github.com/anomalyco/opencode/issues/4461)

3. **Windows 下 1.15.3 版本可执行文件损坏（#27963）**
   二进制文件无法启动，系统提示“不是有效的应用程序”。10 条评论，5 赞，仍在调查中。
   [链接](https://github.com/anomalyco/opencode/issues/27963)

4. **1.17.13 升级后资源占用激增（#35009）**
   升级后内存升至 1GB，虚拟内存 75GB，CPU 占用 22%。用户反馈正常对话场景下资源异常。
   [链接](https://github.com/anomalyco/opencode/issues/35009)

5. **企业 Copilot 第三方模型不可用（#34030）**
   连接 GitHub Copilot Enterprise 后，无法读取企业添加的自定义模型。需要企业特性适配。
   [链接](https://github.com/anomalyco/opencode/issues/34030)

6. **【FEATURE】TUI 中显示 token 使用量（#13003）**
   请求在界面中实时展示输入/输出 token 消耗。42 赞，8 条评论，需求呼声高。
   [链接](https://github.com/anomalyco/opencode/issues/13003)

7. **Xcode 27 Beta 2 中 ACP 忽略 opencode.json 模型配置（#34743）**
   通过 ACP 与 Xcode 集成时，始终使用默认模型，不遵循用户指定的 LMStudio/Ollama 模型。
   [链接](https://github.com/anomalyco/opencode/issues/34743)

8. **GNU screen 下 OSC52 剪贴板写入失效（#28590）**
   `writeOsc52` 错误地对 GNU screen 也使用 tmux 的 DCS 格式，缺少分块支持。8 条评论，被认为需要单独修复。
   [链接](https://github.com/anomalyco/opencode/issues/28590)

9. **1.17.x 升级导致旧会话被隐藏（#35750）**
   从 1.14.29 升级后，会话选择器只展示少量新会话，旧数据因缺少 `path` 列迁移而不可见。
   [链接](https://github.com/anomalyco/opencode/issues/35750)

10. **Desktop v1.17.14 每次启动 provider.list() 崩溃（#35772）**
    Windows 桌面版启动时抛出 `TypeError`，UI 不显示任何模型/提供商。3 条评论，影响基本功能。
    [链接](https://github.com/anomalyco/opencode/issues/35772)

---

## 4. 重要 PR 进展（选取 10 个）

1. **fix(core): resume sessions after restart（#35820）**
   持久化 Session 执行生命周期，服务重启后自动恢复被中断的会话，避免工具侧效应丢失。
   [链接](https://github.com/anomalyco/opencode/pull/35820)

2. **test(core): reproduce explorer tool leak（#35755）**
   增加针对 #35556 的回归测试，验证插件未就绪时不会向 LLM 暴露工具泄露问题。
   [链接](https://github.com/anomalyco/opencode/pull/35755)

3. **refactor(schema): apply session review decisions（#35793）**
   标准化 V2 Session、Message、Agent、Skill 等数据模型，调整运行时行为与持久化行格式。
   [链接](https://github.com/anomalyco/opencode/pull/35793)

4. **fix(core): preserve AI SDK provider metadata（#35812）**
   确保向 AI SDK 转换 LLM 消息时保留 provider 元数据（如思维链签名），保证流式推理连续性。
   [链接](https://github.com/anomalyco/opencode/pull/35812)

5. **fix(core): preserve provider metadata namespaces（#35817）**
   保留完整 provider 元数据命名空间，解决三角洲事件中推理数据合并丢失问题。
   [链接](https://github.com/anomalyco/opencode/pull/35817)

6. **fix(tui): prevent stale shell counts（#35814）**
   修复终端 UI 中 shell 计数器因竞态条件回退到过期值的问题。
   [链接](https://github.com/anomalyco/opencode/pull/35814)

7. **fix(desktop): apply stale remote session fallback on all platforms（#35815）**
   修复远程会话 URL 失效导致桌面崩溃的跨平台回退逻辑。
   [链接](https://github.com/anomalyco/opencode/pull/35815)

8. **fix(tui): sync durable session model changes（#35804）**
   使 TUI 实时响应持久化模型变更，保持本地未发送选择与远程状态同步。
   [链接](https://github.com/anomalyco/opencode/pull/35804)

9. **feat(plugin): add session request hook（#35794）**
   新增 `session.hook("request", ...)` 插件钩子，允许插件在每次请求前修改系统提示、消息和工具列表。
   [链接](https://github.com/anomalyco/opencode/pull/35794)

10. **fix(core): steer manual compaction（#35819）**
    完善手动触发上下文压缩的机制，中断活跃会话并立即执行压缩，避免重复请求。
    [链接](https://github.com/anomalyco/opencode/pull/35819)

---

## 5. 功能需求归类

从今日更新的 Issues 中可以归纳出几类反复出现的诉求：

- **终端外观与可访问性**：大量报告 macOS 终端（Pro 主题）下对比度低、文字不可见，涉及 CLI 和 TUI 颜色渲染兼容性。
- **资源与性能**：高内存占用、CPU 飙升，升级后资源退化问题屡次被提及。
- **企业集成**：Copilot 企业版自定义模型支持、Xcode ACP 模型配置缺失。
- **会话管理**：暂停/恢复执行、会话重命名改进、旧版本会话迁移隐藏问题。
- **Windows 稳定性**：可执行文件损坏、启动时 provider 崩溃。
- **LSP 支持**：Kotlin LSP 名称错误导致不可用，超时配置僵化。
- **UI 交互**：显示 token 用量、语音输入、最小化到系统托盘等桌面体验增强。

---

## 6. 开发者关注点

- **多平台终端兼容性**：macOS 终端（尤其是老款 MacBook）的颜色缺陷成为高频输入问题，虽已关闭多个旧 Issue，但仍需底层渲染方案适配。
- **资源退化问题**：部分版本升级后资源占用量翻倍，影响日常使用流畅度，需重视性能回归测试。
- **Windows 二进制分发完整性**：出现“不是有效应用程序”错误，暴露构建签名或打包流程缺陷。
- **会话持久化与恢复**：从版本迁移到服务重启，会话丢失或不可见已成为信任敏感点，相关 PR 正在密集修复。
- **插件体系完善**：session 请求钩子的加入受到期待，生态插件（如 Copilot 配额监控）开始涌现，对生命周期钩子的需求更加明确。

---

*本日报基于 [OpenCode 仓库](https://github.com/anomalyco/opencode) 2026-07-08 的公开数据生成，仅供社区参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code 社区动态日报 | 2026-07-08

### 1. 今日更新概览
过去 24 小时，社区完成了三个版本发布（v0.19.7、v0.19.6-preview.0 及最新的 nightly），新增/更新 50 个 Pull Request，并产生了 33 条 Issues 讨论。核心主题集中在 daemon 多工作区支持、token 消耗优化、工具交互健壮性以及多个通道（WeCom、钉钉、QQ）的功能增强。

### 2. 版本发布
- **v0.19.7** (正式版) / **v0.19.6-preview.0** / **v0.19.7-nightly.20260708**: 三个版本均包含了文档更新——在企业微信通道概览中加入 WeCom 智能机器人支持 ([#6490](https://github.com/QwenLM/qwen-code/pull/6490))。其余更新内容暂未全部展开。

### 3. 社区热点 Issues（选取 10 个）
1. **RFC：单个 qwen serve 守护进程支持多工作区**
   [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | 评论 19 | 作者 @doudouOUC
   提出在保持现有单工作区行为的前提下，让一个 daemon 进程管理多个工作区，引发了关于架构与兼容性的广泛讨论。

2. **/review skill 消耗大量 token**
   [#6264](https://github.com/QwenLM/qwen-code/issues/6264) | 评论 8 | 作者 @pumano
   用户发现使用审查技能时 token 消耗异常高，可能影响成本与性能，讨论中正在等待更多信息。

3. **追踪：降低 daemon 会话创建的每会话开销**
   [#6312](https://github.com/QwenLM/qwen-code/issues/6312) | 评论 5 | 作者 @doudouOUC
   指出 daemon 在创建或加载新会话时会重复执行同步 I/O 和对象构造，造成不必要的开销，计划进行优化。

4. **Windows 下 Shell 工具无法正确处理 stdout 输出**
   [#6298](https://github.com/QwenLM/qwen-code/issues/6298) | 评论 5 | 已关闭
   Windows 环境中 `run_shell_command` 依赖 `cat` 导致命令失败，已修复。

5. **`tool_search` 每次延迟加载工具都会导致 LLM 服务器 KV 缓存失效**
   [#6265](https://github.com/QwenLM/qwen-code/issues/6265) | 评论 5 | 已关闭
   发现工具搜索流程会重复调用 `setTools()`，破坏了推理缓存的连续性，影响响应速度。

6. **环境变量配置的模型导致 “hard limit: 0” 错误**
   [#6384](https://github.com/QwenLM/qwen-code/issues/6384) | 评论 5 | 作者 @tanzhenxin
   某些模型配置下，上下文窗口计算异常，出现无法发送请求的情况。

7. **/compress 后无法使用 /rewind**
   [#6318](https://github.com/QwenLM/qwen-code/issues/6318) | 评论 4 | 已关闭
   压缩历史后，回退到未压缩位置的操作被阻止，已被修复。

8. **PreToolUse hook 返回 “ask” 权限决策时被静默拒绝**
   [#6321](https://github.com/QwenLM/qwen-code/issues/6321) | 评论 3 | 作者 @system0shock
   Hook 文档虽支持 `ask` 决策，但实际运行时从未弹出确认提示，工具调用直接被拒绝。

9. **请求：限制子代理最大并行数，多余任务排队**
   [#5176](https://github.com/QwenLM/qwen-code/issues/5176) | 评论 4 | 已关闭
   在本地 LLM 资源有限时，希望控制并行子代理数量，已作为功能请求被接纳。

10. **Feature: 添加 MessageDisplay hook 事件，支持流式消息中间拦截**
    [#6488](https://github.com/QwenLM/qwen-code/issues/6488) | 评论 3 | 作者 @yanchenko
    目前没有 hook 能在助理响应流式输出过程中触发，新的提案旨在填补这一空白，适用于 CLI 和 ACP 场景。

### 4. 重要 PR 进展（选取 10 个）
1. **Web Shell 仪表盘统计 daemon 会话数**
   [#6493](https://github.com/QwenLM/qwen-code/pull/6493) | 作者 @wenshao
   修复了 Web Shell 状态页面只统计持久化记录的问题，现在也会计入 daemon 和未 /clear 的会话。

2. **为 qwen serve 添加环境隔离与准入控制**
   [#6416](https://github.com/QwenLM/qwen-code/pull/6416) | 作者 @doudouOUC
   引入多工作区安全的运行时环境快照及准入检查，为未来多工作区特性奠定基础。

3. **修复发布脚本：处理缺失的 NPM dist-tags**
   [#6481](https://github.com/QwenLM/qwen-code/pull/6481) | 作者 @qwen-code-dev-bot
   解决了当 NPM 没有对应 dist-tag 时发布工作流失败的问题，提高了自动化发布的鲁棒性。

4. **限制 daemon 会话的 replay 快照历史大小**
   [#6482](https://github.com/QwenLM/qwen-code/pull/6482) | 作者 @doudouOUC
   为活会话的 replay 窗口增加字节数上限，避免内存膨胀，老的回放会被裁剪。

5. **SDK 暴露传输和查询选项（fork_session, max_tool_calls 等）**
   [#6491](https://github.com/QwenLM/qwen-code/pull/6491) | 作者 @juhuan
   将多个纯 SDK 侧的选项一次性加入 Python/TypeScript SDK，方便以编程方式控制会话行为。

6. **修复流式表格渲染卡顿问题**
   [#6421](https://github.com/QwenLM/qwen-code/pull/6421) | 作者 @MikeWang0316tw
   解决了宽表格输出时终端锁定、延迟批量转储及表头闪烁等三个渲染缺陷，提升了 CLI 体验。

7. **添加模型切换快捷键 (Alt+S / Ctrl+F)**
   [#6486](https://github.com/QwenLM/qwen-code/pull/6486) | 作者 @Aleks-0
   实现了一个可配置的快捷键，能在当前模型和预设的备用模型之间快速切换，状态会在界面标题中反映。

8. **为钉钉通道添加交互式卡片**
   [#6443](https://github.com/QwenLM/qwen-code/issues/6443) 对应的 PR 或相关功能 (PR #6446 通道权限中继)
   选取 PR [#6446](https://github.com/QwenLM/qwen-code/pull/6446)：中继 ACP 权限请求到频道聊天，增强钉钉及类似通道的交互能力（允许用户在聊天内审批权限）。

9. **SDK 添加控制请求方法（set_effort, models, usage, context）**
   [#6492](https://github.com/QwenLM/qwen-code/pull/6492) | 作者 @juhuan
   运行时支持设置推理投入等级等控制指令，提升 SDK 的精细化管理能力。

10. **CLI 中渲染 LaTeX 数学公式**
    [#3439](https://github.com/QwenLM/qwen-code/pull/3439) | 作者 @reidliu41
    将终端中的 `$...$` 与 `$$...$$` 公式渲染为可读文本，对技术文档输出场景有显著改善。

### 5. 功能需求归类
根据今日 Issues 的诉求，社区高频需求方向包括：
- **Daemon 与多工作区**：支持单 daemon 管理多工作区，并降低会话创建开销。
- **Token 与性能优化**：减少不必要的 KV 缓存失效、避免大文件直接注入 prompt 导致超限、控制审查等技能的 token 消耗。
- **Hook 与权限交互增强**：实现流式 MessageDisplay hook，修复 PreToolUse 的 “ask” 决策静默失败。
- **平台兼容性**：完善 Windows 下 Shell 命令执行、扩展安装等问题。
- **通道与通知**：WeCom 智能机器人、钉钉交互式卡片、QQ 群消息处理等集成扩展。
- **内存与状态管理**：改进工作树下的记忆隔离、修复 /rewind 与压缩冲突、session 自动标题污染问题。
- **模型与控制**：全局/项目模型解耦、模型切换快捷键、子代理并行限制等灵活性配置。

### 6. 开发者关注点
- **多工作区架构**：daemon 模式下如何安全、高效地复用资源是当前讨论最激烈的话题，涉及环境隔离、回放生命周期管理等。
- **推理缓存失效**：`tool_search` 等操作导致 LLM 服务器 KV 缓存被频繁清空，直接损害响应速度和成本控制。
- **交互一致性缺陷**：Hook 的 `ask` 权限决策不生效、会话列表在加载后重新排序等问题，反映出现有交互路径存在文档与实现不符的“静默失败”。
- **Windows 环境适配**：仍存在 shell 工具缺失、扩展安装失败等平台特有问题，社区欢迎相关修复。
- **超大文件处理**：大文本或 PDF 文件读取直接塞满上下文窗口，缺乏分段读取或截断保护，导致任务失败。

</details>