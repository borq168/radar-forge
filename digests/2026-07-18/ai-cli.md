# AI CLI 工具社区动态日报 2026-07-18

> 生成时间: 2026-07-18 00:22 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

以下是基于各工具 2026-07-18 社区动态摘要的横向对比分析。

### 1. 今日横向概览
今日 Claude Code 发布 v2.1.212 对协作与自动化模式进行重要调整，OpenAI Codex 则通过 47 个 PR 密集推进 Rust 组件和后端能力，Kimi Code 推出 0.27.0 版本新增剪切板命令并集中修复流式挂起，OpenCode 虽无用户侧版本更新但社区对 UI 回退和远程连接的讨论热度高涨。四款工具共同反映出远程开发、子代理控制与权限精细化管理是当前开发者最关切的交叉领域。

### 2. 各工具活跃度对比

| 工具          | 今日热点 Issues 数 | 今日重要 PR 数 | 新发布版本                                     |
|---------------|-------------------|---------------|------------------------------------------------|
| Claude Code   | 10                | 9             | v2.1.212（功能更新）                           |
| OpenAI Codex  | 10                | 10（总 PR 47）| rust-v0.145.0-alpha.20/22/23（预发布通道）     |
| Kimi Code     | 10                | 10            | @moonshot-ai/kimi-code@0.27.0（功能更新）      |
| OpenCode      | 10                | 10            | 4 个视觉回归验证临时版本（非用户侧更新）       |

*注：OpenAI Codex 总提交 PR 数为 47，表中仅列入文档中详述的 10 项重要 PR；其余工具均按文中列出的重要 PR 统计。*

### 3. 共同出现的功能方向

- **远程开发与跨环境连接**
  Claude Code（#49790 要求 SSH 会话断开后能重连/恢复）、OpenAI Codex（#27597 VS Code Remote‑SSH 下扩展加载失败）、OpenCode（#7790 要求桌面客户端原生 SSH 连接远程服务）均出现远程场景的连续性和易用性问题，反映远程开发已成为跨工具的普遍工作模式。

- **子代理/多代理的并发与控制**
  Claude Code（#77599 子代理回复误投到错误会话）、OpenAI Codex（#30813 CLI 缺少子代理线程选择器）、Kimi Code（#1800 希望子代理指定协作模型）、OpenCode（#33028 子代理在快速 bash 调用后无限挂起）四款工具同时暴露子代理在调度、隔离和恢复上的缺陷，多代理工作流的健壮性是共同短板。

- **权限与自动化行为透明度**
  Claude Code（#74949 auto‑mode 分类器 fail‑closed 阻塞 Shell 命令）、Kimi Code（#1866/#1859 权限模式命名矛盾、#1819 希望禁止自动 EnterPlanMode）、OpenAI Codex（#29702 请求禁用 AI 自动关闭/解决问题）均触及用户对自动化决策的可见性与可控性诉求，尤其当默认行为会中断关键任务时。

- **Windows 平台稳定性**
  Claude Code（#50674/#47327 Cowork 在 ARM64 和 x64 上不可用）、OpenAI Codex（#17229 孤儿进程、#33780 主线程因 HID 设备枚举挂起）、OpenCode（#36902 Windows 路径破坏 WSL 服务）集中出现，表明各工具在 Windows 上的体验依然参差不齐。

### 4. 差异化定位分析

- **Claude Code**
  侧重企业级协作与安全合规。今日动态中 Cowork 协作、OAuth 无 DCR 集成、插件路径遍历防御、SSH 会话持久化等均为团队/企业场景设计，权限与安全加固是其核心叙事。

- **OpenAI Codex**
  面向广泛开发者的全能型工具，强调桌面端覆盖、LSP 深度集成与多模型上下文管理。大量 PR 落在协议支持、音频输入、发布流水线和 ChatGPT 品牌对齐上，同时 Rust 组件持续迭代，显示出平台化与性能优化的长期路线。

- **Kimi Code**
  聚焦个人开发者与中小团队的生产力闭环。今日更新集中在剪贴板命令、VSCode 嵌入、worktree 隔离和流式稳定性修补，权限模式与长期记忆等需求体现出对用户“体感”与行为干预的高度关注。

- **OpenCode**
  社区驱动的开源方案，强调可定制性和自托管能力。SSH 直连桌面、旧版 UI 保留、OpenAI 兼容端点自动发现以及插件即时 TUI 命令等需求，均指向让用户按自己方式组装开发环境的自由度。

### 5. 社区活跃度记录
从数量与实质产出看，OpenAI Codex 在 PR 总量上遥遥领先（47 个提交），尽管以内部迭代和基础设施为主；Claude Code 和 Kimi Code 均交付了面向终端用户的功能版本并快速响应安全与稳定性问题，维护活跃度较高；OpenCode 则在没有官方功能发布的情况下，社区 Issue 和 PR 仍保持高强度讨论，显示出健康的自组织生态。综合来看，今日 Claude Code 与 Kimi Code 在“用户可见的功能修复与交付”方面最为直接，而 OpenAI Codex 在底层工程投入上更重。

### 6. 有证据支撑的观察

1. **远程开发体验割裂成为多工具共同痛点**
   Claude Code 要求 SSH 断连可恢复、OpenAI Codex 在 Remote‑SSH 下扩展失效、OpenCode 强烈呼吁桌面端原生 SSH，三条独立证据表明远程/混合开发环境的衔接已是开发者选择工具的核心考量之一。

2. **子代理的并发安全与可观测性普遍缺失**
   四款工具在同日均出现子代理回复串扰、无线程选择器、挂起无超时等问题，说明“多代理并行”虽被宣传，但在实现上均有明显的隔离与监控盲区。

3. **自动决策的 fail‑closed 策略正在引发广泛摩擦**
   Claude Code 的分类器阻塞、Kimi Code 的自动进入计划模式、OpenAI Codex 的自动关闭问题，均以“避免出错”的名义牺牲了用户掌控力，社区对此提出大量相反诉求，表明需要在安全缺省与用户自治间重新平衡。

4. **Windows 平台支持仍是短板**
   三个工具社区同时出现 Windows 特定问题（Cowork 不可用、孤儿进程与 HID 挂起、WSL 路径冲突），且部分问题已持续数月，反映出跨平台一致性尚未达到生产级标准。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-18

## 今日更新概览
过去24小时社区集中在 **Cowork（协作）功能的 Windows 兼容性** 与 **自动化模式（auto-mode）稳定性** 两大议题。新发布的 v2.1.212 优化了 `/fork` 与后台会话的交互模型，同时数个关于内存占用、MCP 连接及插件安全的修复 PR 处于活跃状态。

## 版本发布
**v2.1.212**
- `/fork` 现在将当前对话复制到一个新的后台会话（在 `claude agents` 中表现为独立条目），而原本在会话内启动的子代理由新的 `/subtask` 命令承担。
- 新增 `claude auto-mode reset` 命令，用于恢复自动模式的默认配置，并包含二次确认。

## 社区热点 Issues
1. **#50674 Cowork 在 ARM64（Snapdragon X）上通过就绪检查后仍失败**
   多名 Windows on ARM 用户反馈 Cowork 功能反复报错，尽管硬件满足要求，该问题已积累 40 条讨论。
   https://github.com/anthropics/claude-code/issues/50674

2. **#47327 Windows 11 Pro x64 下 Cowork 标签页被禁用（yukonSilver 不支持）**
   自 2026 年 3 月起持续出现，多位企业用户受困于协作入口无法启用，点赞量高。
   https://github.com/anthropics/claude-code/issues/47327

3. **#40043 允许从 Cowork 项目上下文移除本地文件夹**
   高频功能缺失：当文件夹被移出项目后，上下文仍锁定旧引用，无法手动清理，获 56 个 👍。
   https://github.com/anthropics/claude-code/issues/40043

4. **#26675 支持预配置 OAuth 客户端凭据，无需动态客户端注册（DCR）**
   企业 OAuth 提供商（如 Azure AD/Entra ID）因强制 DCR 而无法集成 MCP，31 个 👍 反映刚性需求。
   https://github.com/anthropics/claude-code/issues/26675

5. **#78193 Streamable-HTTP MCP 连接器 405 错误导致“客户端服务器能力不可用”反复弹窗**
   影响 Atlassian 远程连接器等 Streamable-HTTP 传输场景，错误发生在客户端传输层，阻断正常使用。
   https://github.com/anthropics/claude-code/issues/78193

6. **#49790 SSH 远程会话应在客户端断开后能重连/恢复**
   当前断开 SSH 即终止远端 Claude Code 进程，开发者希望在网络抖动或关闭笔记本盖子后能够无缝接续。
   https://github.com/anthropics/claude-code/issues/49790

7. **#77327 非交互式系统提示被错误注入到 VSCode 交互会话**
   导致 IDE 内的对话被无意义提示污染，影响指令准确度。
   https://github.com/anthropics/claude-code/issues/77327

8. **#74949 自动模式分类器间歇“暂时不可用”导致几乎所有 Bash 复合命令被阻止**
   故障模式为 fail-closed（默认拒绝），高峰期大量管道、重定向类指令无法执行。
   https://github.com/anthropics/claude-code/issues/74949

9. **#67021 内置 ugrep 在处理带有 `{0,N}` 区间的正则时导致主机严重内存溢出**
   解析阶段即可占满数 GB 内存，影响 Linux 下所有触发搜索的工具流。
   https://github.com/anthropics/claude-code/issues/67021

10. **#77599 多个会话并发运行子代理时，回复被误投到错误会话（Windows）**
    不同项目目录的并行会话存在子代理回复交错，产生安全与数据串扰风险。
    https://github.com/anthropics/claude-code/issues/77599

## 重要 PR 进展
今日共 9 个活跃 PR，主要集中在插件安全加固、基础设施修复和文档修正：

- **#78532** gateway/gcp 示例：增加可选内部 ALB 并修复 PG16 Cloud SQL 版本导致部署失败的问题。
- **#76581** 加强官方插件脚本对 YAML 注入、路径遍历及符号链接覆盖的防御。
- **#78446** 为 `plugin-dev` 补充缺失的 `.claude-plugin/plugin.json` 清单，与其他 12 个插件保持一致。
- **#78445** 修正插件目录中 `security-guidance` 等多个插件描述与实际行为不符的错误。
- **#78441** 修复开发容器 PowerShell 脚本中对原生命令失败检测失效的问题（`$LASTEXITCODE`）。
- **#78425** 将 `/code-review` 插件设为仅限手动调用，防止模型或子代理自动触发完整多代理审查流程。
- **#77427** 限制 `pr-review-toolkit` 代码审查者权限为仓库只读工具，防止其递归调用其他代理。
- **#78371** 加固 `ralph-wiggum` 循环插件：增加迭代上限、推送/发布拦截及停止钩子。
- **#29460** （已合并）优化值班 triage 命令的时效性与互动标准，提高高参与度问题的发现率。

## 功能需求归类
- **Cowork 协作与权限**：ARM64/Windows 支持、文件夹上下文移除、项目粒度控制。
- **企业集成**：OAuth 无 DCR 模式、SSH 会话持久化、MCP 连接稳定性（Streamable-HTTP）。
- **IDE 与终端体验**：VSCode 扩展的文本搜索、斜杠命令补全行为、TUI 内容展开。
- **自动化与安全**：auto-mode 分类器降级策略、误报 refusals 管道改善、插件 skillOverrides 生效。
- **性能与工具**：ugrep 内存爆炸的替代方案、内置 `find`/`grep` 替换的可选择退出机制。
- **多会话隔离**：子代理响应路由、后台任务通知可靠性。

## 开发者关注点
- **Windows 生态体验断层**：Cowork 在 x64 和 ARM64 上均有长期未决问题，拖累跨平台协作流程。
- **自动模式脆弱性**：分类器 fail-closed 策略在生产高峰期直接阻塞 Shell 工作流，缺乏自动降级。
- **隐蔽的工具劫持**：内置 `grep`/`find` 被静默替换为 `ugrep`/`bfs`，且无简单退出机制，资源失控风险高。
- **MCP/RPC 可靠性**：Streamable-HTTP 连接错误未优雅处理，且 `additionalProperties` 规范化错误破坏工具 schema。
- **插件与代理边界**：插件 skill 覆盖静默失效、子代理跨会话串扰，静默错误导致调试成本上升。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-18

## 1. 今日更新概览

过去 24 小时，Codex 仓库新增 3 个 Rust 组件的 alpha 预发布版本（0.145.0-alpha.20、22、23），同时有 47 个 PR 提交，其中多数与后端能力铺开、Windows 修复和模型配置调整相关。Issue 侧依旧以 Windows 桌面端性能/稳定性、速率限制显示错误和 LSP 集成需求为最热门讨论点。

## 2. 版本发布

- **rust-v0.145.0-alpha.20 / 22 / 23**
  连续三个 Rust 侧 alpha 版本发布，无公开 changelog。按照版本号习惯推断，可能为内部迭代或实验性 release 通道。

## 3. 社区热点 Issues （10 项）

1.  **#8745 — LSP 集成需求（自动检测 + 自动安装）**
    `[enhancement, agent]` | 58💬 | 👍426
    用户希望 CLI 内置 Language Server Protocol 支持，以利用诊断和符号信息提升代码理解与生成质量，是获赞最高的功能请求。
    [链接](https://github.com/openai/codex/issues/8745)

2.  **#17229 — Windows 桌面端反复生成 `git.exe` 和 `conhost.exe` 孤儿进程**
    `[bug, windows-os, app]` | 22💬 | 👍5
    大量 Windows 用户发现 Codex App 持续执行 `git status --porcelain=v1 -z`，并残留未清理的子进程。
    [链接](https://github.com/openai/codex/issues/17229)

3.  **#33780 — Windows 应用启动后“无响应”，主线程被 HID 设备枚举永久阻塞**
    `[bug, windows-os, app, performance]` | 19💬 | 👍2
    新 issue，今日刚出现，开发者报告一台无响应 HID 设备会导致 Electron 主线程卡死在 `hid.dll` 设备枚举中。
    [链接](https://github.com/openai/codex/issues/33780)

4.  **#27915 — Linux 用户无法访问/兑换预存的用量重置（已关闭）**
    `[bug, rate-limits, app]` | 17💬 | 👍41
    Linux 平台上仅桌面端支持新的 flexible rate limit 重置，CLI 和 TUI 用户被排除在外，引发广泛不满。
    [链接](https://github.com/openai/codex/issues/27915)

5.  **#30813 — CLI `/agent` 列出活跃子代理但缺少线程选择器**
    `[bug, TUI, CLI, subagent]` | 13💬 | 👍6
    用户无法在 CLI 中选取具体的子代理线程进行交互，削弱了多代理工作流的可用性。
    [链接](https://github.com/openai/codex/issues/30813)

6.  **#29702 — 请求增加禁用 AI 问题限时自动解决/关闭的设置**
    `[app]` | 6💬 | 👍19
    Codex 会在用户未及时响应时自动关闭或解决某些问题，长流程任务中容易丢失上下文，用户需要自主控制权限。
    [链接](https://github.com/openai/codex/issues/29702)

7.  **#32791 — Plus 账户 5 小时用量限制消失，仅显示每周限制**
    `[bug, rate-limits, app]` | 7💬 | 👍2
    多次出现，速率限制界面未显示原先的 5 小时滚动窗口，用户对剩余额度感知混乱。
    [链接](https://github.com/openai/codex/issues/32791)

8.  **#27597 — VS Code 远程 SSH 下 IDE 扩展加载失败，CLI 正常**
    `[bug, extension, remote]` | 8💬 | 👍3
    影响使用 Remote-SSH 的开发者，扩展一直停留在加载状态，迫使用户回退到 CLI。
    [链接](https://github.com/openai/codex/issues/27597)

9.  **#26889 — 设计：为保护跨压缩的重要上下文提供线程“图钉”**
    `[enhancement, context, app-server]` | 5💬 | 👍0
    长会话自动压缩后关键信息丢失，提案建议允许用户固定特定上下文条目以在压缩时保留。
    [链接](https://github.com/openai/codex/issues/26889)

10. **#26250 — 阿拉伯语与英语混合文本的 RTL/LTR 渲染问题**
    `[bug, app]` | 9💬 | 👍0
    双向文本在 Codex 界面中排版错乱，影响多语言用户的正常使用。
    [链接](https://github.com/openai/codex/issues/26250)

## 4. 重要 PR 进展（10 项）

1.  **#31817 — 更新 models.json**
    调整 GPT-5.6 系列上下文窗口（372k→272k），强化破坏性操作安全提示与环境变量指导；GPT-5.4 系列重新可见。
    [链接](https://github.com/openai/codex/pull/31817)

2.  **#33930 — 跟踪继承的分页 rollout 前缀**
    为分页线程历史增加 `HistoryPosition` 和可选继承前缀，支持跨线程追溯。
    [链接](https://github.com/openai/codex/pull/33930)

3.  **#33919 — 允许稳定的 Python SDK 发布**
    修复 release 流水线仅接受 beta 标签的问题，正式支持 `python-v0.144.4` 稳定版本发布。
    [链接](https://github.com/openai/codex/pull/33919)

4.  **#33926 — 修复 Windows 上带引号的钩子命令执行**
    解决路径含空格的 Windows 钩子命令因引号转义而失败的问题。
    [链接](https://github.com/openai/codex/pull/33926)

5.  **#33925 — 在 TUI 中渲染内联可视化链接**
    当助手生成内联可视化时，TUI 可识别标记并生成浏览器可打开的链接。
    [链接](https://github.com/openai/codex/pull/33925)

6.  **#33923 — 为用户输入协议添加音频变体**
    在核心和应用服务端协议中支持远程、本地音频输入，并生成对应 Schema。
    [链接](https://github.com/openai/codex/pull/33923)

7.  **#33901 — 支持 ChatGPT 品牌桌面构建**
    macOS 上同时探测 `ChatGPT` 和 `Codex` 可执行文件，CLI 发现不再依赖单一名称。
    [链接](https://github.com/openai/codex/pull/33901)

8.  **#33908 — 允许通过分享更新发布插件**
    增加 `LISTED` 发现状态，插件可经远程分享 API 公开发布。
    [链接](https://github.com/openai/codex/pull/33908)

9.  **#33895 — 添加 SessionEnd 钩子用于线程销毁**
    支持在根线程关闭、存档、删除或空闲卸载时执行清理 hook。
    [链接](https://github.com/openai/codex/pull/33895)

10. **#33903 — 按响应通道路由 V3 实时握手**
    为 V3 实时会话增加 `codexResponseHandoffMode`，支持将思维、评论、BEM 标签分发到不同通道。
    [链接](https://github.com/openai/codex/pull/33903)

## 5. 功能需求归类

- **LSP 集成**（#8745）：持续高票，用户期望 CLI 获得原生代码智能。
- **上下文管理**（#26889 等）：要求上下文“图钉”、可控压缩，避免长会话信息丢失。
- **多代理控制增强**（#30813、#24951）：子代理选择、超时控制和工作流可视化是 CLI 高频需求。
- **速率限制透明度**（#27915、#32791、#32840 等）：多处界面（桌面、CLI、扩展）显示不一致，用户要求统一且准确的额度查看。
- **国际化和文本渲染**（#26250）：RTL 语言支持越来越迫切。
- **跨平台稳定性**：Windows 性能与进程管理（#17229、#33780、#29499 等）、Linux/SSH 远程支持（#27597、#25595 等）持续涌现。

## 6. 开发者关注点

- **Windows 桌面端性能与稳定性**：启动挂起、孤儿进程、Microsoft Defender/WMI 高 CPU 占用等问题密集报告，直接影响日常使用。
- **速率限制显示错误**：5 小时滚动窗口消失或数据不一致，导致 Pro/Plus 用户无法准确评估剩余可用额度。
- **远程开发体验割裂**：VS Code Remote-SSH 下扩展频繁加载失败，而 CLI 正常，开发者被迫切换工具。
- **上下文丢失**：自动压缩、长时间阻塞和缺少人工固定机制，让长任务中的关键上下文容易丢失。
- **多代理工作流粗糙**：子代理线程难以选择、超时机制不可靠，限制了复杂任务的自动化。

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报（2026-07-18）

## 1. 今日更新概览
今日社区围绕 0.27.0 版本发布与多项稳定性修复展开。新增 `/copy` 斜杠命令，同时开发者集中反馈了权限模式文案混淆、流式响应挂起、ACP 适配器 token 用量缺失等关键问题。PR 侧出现 VSCode 扩展、worktree 隔离、重试进度可视化等特性贡献。

## 2. 版本发布
**@moonshot-ai/kimi-code@0.27.0**
- 新增 `/copy` 命令，可复制最后一条助手消息到剪贴板 ([#1822](https://github.com/MoonshotAI/kimi-code/pull/1822))。

## 3. 社区热点 Issues

1. **自定义 system.md 提示词** [#517](https://github.com/MoonshotAI/kimi-code/issues/517)
   用户希望设置个性化系统提示，认为新版默认 prompt 效果不及旧版 kimi-cli。已持续讨论近一个月，评论区不乏相同诉求。

2. **消息总大小超过 API 限制导致报错** [#1862](https://github.com/MoonshotAI/kimi-code/issues/1862)
   0.26.0 下对话上下文超过 2MB 时报 400 错误，“total message size 2100954 exceeds limit 2097152”，用户在长对话场景中遭遇阻断。

3. **自动长期记忆功能请求** [#1810](https://github.com/MoonshotAI/kimi-code/issues/1810)
   期望 CLI 在会话中自动识别并持久化偏好、项目约定等信息，跨会话自动加载，减少手动维护 `AGENTS.md` 的负担。

4. **权限模式命名及文案矛盾** [#1866](https://github.com/MoonshotAI/kimi-code/issues/1866) [#1859](https://github.com/MoonshotAI/kimi-code/issues/1859)
   用户指出 `/auto` 与 `/yolo` 的描述在 TUI 和 Web 端相互矛盾，且“Auto”实际上比“YOLO”更激进，命名与直觉相反，可能引发误操作。

5. **流式补全静默挂起** [#1798](https://github.com/MoonshotAI/kimi-code/issues/1798)
   SSE 流在接收响应体中途卡住会导致整个 turn 永久挂起，无错误提示，0.26.0 中重现。

6. **HTTP 429 限流导致无限挂起** [#1796](https://github.com/MoonshotAI/kimi-code/issues/1796)
   遇到 429 错误时 CLI 丢弃错误并无限等待，无重试、无日志，表现与 #1798 类似。

7. **配额耗尽 429 被静默重试约 3 分钟，UI 无反馈** [#1860](https://github.com/MoonshotAI/kimi-code/issues/1860)
   组织 token 配额用尽后，任何输入都使 TUI 旋转约 3 分钟后才报错，用户体验冻结。

8. **ACP 适配器不报告 token 用量** [#1855](https://github.com/MoonshotAI/kimi-code/issues/1855)
   通过 ACP 协议使用 Kimi Code 的客户端（如 Multica、OpenCode）无法获取 token 消耗和费用信息。

9. **希望可选禁用自动 EnterPlanMode** [#1819](https://github.com/MoonshotAI/kimi-code/issues/1819)
   代理有时未经用户请求就自主调用 `EnterPlanMode`，用户期望一个开关来控制此行为。

10. **VSCode 插件技能选择流程问题** [#1854](https://github.com/MoonshotAI/kimi-code/issues/1854)
    在 VSCode 插件中输入 `/` 弹出命令列表后，选择一项会立即发送，而不是将命令填入输入框，使用不便。

## 4. 重要 PR 进展

1. **VSCode 扩展嵌入 Web UI** [#1780](https://github.com/MoonshotAI/kimi-code/pull/1780)
   以 webview 壳方式将现有 Web UI 完整嵌入 VSCode，探索了与官方 SDK 扩展不同的集成路径，留作参考。

2. **统一 YOLO 与 Auto 权限模式描述** [#1867](https://github.com/MoonshotAI/kimi-code/pull/1867)
   修复 TUI 和 Web 端权限描述不一致问题，明确 `manual` < `yolo` < `auto` 的阶梯，减少混淆。

3. **worktree 隔离会话支持** [#818](https://github.com/MoonshotAI/kimi-code/pull/818)
   添加 `-w, --worktree [name]` 标志，允许在同一仓库运行多个隔离的 Kimi Code 会话，避免文件冲突。

4. **TUI 重试进度实时显示** [#1861](https://github.com/MoonshotAI/kimi-code/pull/1861)
   配合引擎侧快速失败修复，在活动窗格中展示 LLM 重试（`turn.step.retrying`）的尝试次数和延迟。

5. **配额耗尽 429 快速失败** [#1857](https://github.com/MoonshotAI/kimi-code/pull/1857)
   修改 kosong 引擎，对配额类 429 错误不再重试，立即失败并给出反馈。

6. **ACP 适配器报告 token 用量** [#1858](https://github.com/MoonshotAI/kimi-code/pull/1858)
   补全 ACP 协议中 `PromptResponse.usage`，使下游 ACP 客户端能获得 token 消耗数据。

7. **流式补全静默挂起修复** [#1799](https://github.com/MoonshotAI/kimi-code/pull/1799)
   为流式读取增加看门狗和重试机制，防止 SSE 流中途停滞导致 turn 无限阻塞。

8. **web 命令前台运行** [#1853](https://github.com/MoonshotAI/kimi-code/pull/1853)
   将 `kimi web` 和 TUI 的 `/web` 命令改为默认前台运行，避免后台守护进程难以管理。

9. **内联 LaTeX 渲染设置** [#1848](https://github.com/MoonshotAI/kimi-code/pull/1848)
   在 Web UI 中添加可选的内联 `$...$` LaTeX 渲染，需手动开启以避免与普通美元符号文本冲突。

10. **VSCode 扩展：对话撤销与同步刷新** [#1839](https://github.com/MoonshotAI/kimi-code/pull/1839)
    实现对话撤销功能，采用独占锁和广播推送机制保持多窗口 transcript 一致。

## 5. 功能需求归类
从近期 Issue 中可观察到用户反复提及的需求方向：
- **权限与安全**：清晰的权限阶梯、沙箱写入限制、工具调用二次审查（#1864，#1863，#1859）
- **会话管理**：自定义 system prompt、长期记忆、worktree 隔离（#517，#1810，#818）
- **UI/UX 改进**：TUI 可定制键绑定、屏幕阅读器支持、禁用内联图片渲染、使用量状态栏（#1524，#1846，#1844，#1835）
- **集成与协议**：子代理指定模型协作、ACP 功能补全、VSCode 插件优化（#1800，#1855，#1854）
- **稳定性**：防护消息大小溢出、流挂起、429 处理等（#1862，#1798，#1860）

## 6. 开发者关注点
- **静默失败与无反馈**：流停滞和 429 限流导致的无限挂起成为本周集中投诉点，直接影响使用信心。
- **权限模式歧义**：大量反馈认为“Auto”命名易误解，实际行为比“YOLO”更激进，需统一文案和交互。
- **费用与配额感知**：用户希望在不退出对话的情况下查看用量限制，ACP 适配器缺少 token 报告也阻碍第三方客户端集成。
- **IDE 集成体验断层**：VS Code 插件在新版不兼容、技能选择流程反直觉等问题，社区正在通过 PR 探索原生 webview 嵌入方案。
- **自主行为控制**：代理自动进入计划模式、偏离用户意图的情况引发对行为可配置性的需求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 – 2026-07-18

## 今日更新概览
过去24小时内，社区新增4个用于 PR 视觉验证的发布版本，无正式客户端更新。Issue 区共更新50条，讨论集中在模型兼容性、远程连接、UI 布局变更及2.0版本迁移问题；PR 侧则提交了多项服务生命周期修复、事件日志压缩以及工具链集成改进。

## 版本发布
仅发布了4个与特定 PR 截图验证相关的临时版本：
- pr-37526-screenshots、pr-37516-screenshots、pr-37510-spinner、pr-37510-screenshots
均用于视觉回归验证，非面向用户的功能更新。

## 社区热点 Issues（Top 10）

1. **#6231 自动发现 OpenAI 兼容端点的模型清单**
   本地 OpenAI 兼容服务（LM Studio、Ollama 等）需手动配置模型列表，社区希望实现自动发现。👍182 💬21
   https://github.com/anomalyco/opencode/issues/6231

2. **#5305 插件钩子：即时 TUI 命令**
   为插件新增无需 agent 调用的即时 TUI 命令钩子，以便扩展快捷键和交互。👍14 💬19
   https://github.com/anomalyco/opencode/issues/5305

3. **#7790 SSH 远程连接 OpenCode Desktop**
   要求桌面客户端原生支持通过 SSH 连接远程 opencode 服务，方便在远程开发环境使用。👍73 💬15
   https://github.com/anomalyco/opencode/issues/7790

4. **#31119 数据库字段缺失错误 “no such column: name”**
   升级后应用无法使用，报 SQLite 列名错误，疑似自动升级导致 schema 不匹配。👍11 💬13
   https://github.com/anomalyco/opencode/issues/31119

5. **#37012 请求保留旧版布局选项**
   新版 UI 移除了旧版中“几乎所有功能都在主窗口”的便利设计，用户强烈希望保留切换入口。👍17 💬13
   https://github.com/anomalyco/opencode/issues/37012

6. **#31041 Zen API CORS 预检返回 404**
   所有 `/zen/v1/*` 接口的 OPTIONS 请求均返回 HTML 404，导致浏览器客户端彻底被阻断。👍10 💬10
   https://github.com/anomalyco/opencode/issues/31041

7. **#33028 子代理在快速 bash 工具调用后无限挂起**
   子代理及主代理在简单 bash 调用后流式调用永远不超时，仅 Esc 可中断，影响多模型环境。👍3 💬6
   https://github.com/anomalyco/opencode/issues/33028

8. **#24876 老旧 Intel Mac 指令集兼容性崩溃（AVX2）**
   `opencode` 在旧款 Intel Mac 上启动时因非法指令崩溃，阻碍老设备用户使用。👍0 💬6
   https://github.com/anomalyco/opencode/issues/24876

9. **#27303 官方 VSCode Copilot BYOK 语言模型扩展**
   要求提供供 VSCode Copilot 使用的 OpenCode Go/Zen 模型提供器扩展，推进 BYOK 生态。👍5 💬5
   https://github.com/anomalyco/opencode/issues/27303

10. **#37430 新版 UI 无法切换 build/plan 模式**
     v1.18.1/1.18.3 中缺失模式切换按钮，用户在会话中无法更改模式，严重影响工作流。👍2 💬5
    https://github.com/anomalyco/opencode/issues/37430

## 重要 PR 进展（Top 10）

1. **#37578 禁止无 Git 项目使用撤销功能**
   只对有 Git 的会话启用撤销/重做/消息恢复，并对非 Git 项目给出说明提示，避免错误操作。
   https://github.com/anomalyco/opencode/pull/37578

2. **#37559 通过会话 blob 限制工具和事件负载大小**
   为大负载的工具调用和事件引入 blob 存储绑定，解决 #36444 相关内存膨胀问题。
   https://github.com/anomalyco/opencode/pull/37559

3. **#37577 忽略纯评论中产生的空文本块**
   修复仅含评论的 prompt 导致的后端空文本错误，消除错误提示音。
   https://github.com/anomalyco/opencode/pull/37577

4. **#37574 修复 GitHub 审查回复线程定位**
   让 OpenCode 在 `pull_request_review_comment` 触发器下正确回复到对应的审查线程。
   https://github.com/anomalyco/opencode/pull/37574

5. **#37573 插件接口暴露当前监听 URL**
   为插件提供服务器实际绑定的地址，便于插件调用 OpenCode 内部 API。
   https://github.com/anomalyco/opencode/pull/37573

6. **#37571 单独打包 TUI 解析器 worker**
   解决 OpenTUI 0.4.5 的 `type: "file"` 引入冲突，修复 worker 路径问题（#37556）。
   https://github.com/anomalyco/opencode/pull/37571

7. **#35953 文档自动生成 llms.txt**
   升级文档至 Astro 7 并自动产出 `llms.txt`，方便大模型检索项目文档（#8816）。
   https://github.com/anomalyco/opencode/pull/35953

8. **#37567 向生态项目表添加 Agent Sessions 应用**
   收录一个读取 OpenCode 本地会话历史的 macOS 应用，丰富生态展示。
   https://github.com/anomalyco/opencode/pull/37567

9. **#36710 事件日志有界压缩（只读+演习）**
   实现事件日志状态检查与可控压缩，支持按会话或全局应用，避免日志无限增长（#33356）。
   https://github.com/anomalyco/opencode/pull/36710

10. **#37575 恢复问题分页导航的视觉颜色**
    使用 V2 背景令牌保证非活跃分页段仍可见，解决主题对比度问题。
    https://github.com/anomalyco/opencode/pull/37575

## 功能需求归类
- **远程与跨设备使用**：SSH 直连桌面客户端（#7790, #33273）、远程开发环境支持
- **UI/UX 回退与定制**：保留旧布局（#37012）、恢复模式切换按钮（#37430）、亮度对比度调整（#37428）
- **模型发现与提供商兼容**：OpenAI 兼容端点自动发现（#6231）、Anthropic 原生嵌套参数修复（#34652）、xAI 工具调用杂音（#37399）
- **插件与扩展能力**：TUI 命令钩子（#5305）、IME 输入法适配（#37167）、VSCode Copilot 集成（#27303）
- **稳定性与错误修复**：子代理挂起（#33028）、CORS 预检失败（#31041）、Windows 路径破坏 WSL 服务（#36902）、数据库迁移缺失列（#31119, #35403）
- **2.0 版本适配**：配置文件模型限制忽略（#37544）、插件列表崩溃（#37533）、自定义提供器挂起（#36834）

## 开发者关注点
主要痛点集中在三方面：
1. **远程开发体验割裂**：大量开发者依赖 SSH 远程环境，当前桌面客户端缺乏原生连接能力，工作区在本地与远端之间难以切换。
2. **UI 破坏性变更的反抗**：新版界面移除了计划/构建模式切换，且改变了功能按键布局，部分用户感到效率下降并强烈要求提供旧版保留或快速切换入口。
3. **2.0 版本及 OpenAI 兼容层稳定性**：用户持续反馈基于 `ai-sdk/openai-compatible` 的提供器配置后出现模型不可用、流式推理缺失、上下文限制失效等问题，服务自更新也引发后台锁残留和客户端挂起，说明迁移期仍有较多边界场景未覆盖。

</details>