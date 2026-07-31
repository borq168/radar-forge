# AI CLI 工具社区动态日报 2026-07-31

> 生成时间: 2026-07-31 00:26 UTC | 覆盖工具: 4 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Kimi Code](https://github.com/MoonshotAI/kimi-code)
- [OpenCode](https://github.com/anomalyco/opencode)

---

## 横向对比

## 1. 今日横向概览

今日四个 AI CLI 工具均未出现重大版本更新，但社区反馈活跃。Claude Code 无新发布，50 个 Issue 更新反映 Cowork 协作、后台代理、定时任务等稳定性问题，PR 量极少。OpenAI Codex 发布 `rust-v0.147.0-alpha.2`，Issue 和 PR 更新均超 50 条，Windows 桌面卡顿、OAuth 认证失败、MCP 工具兼容性成为焦点。Kimi Code 发布 v0.31.0（插件自定义代理），29 个 Issue 和 47 个 PR 凸显 UI 交互缺陷、工具死循环及跨平台资源泄漏。OpenCode 发布 v1.18.10，核心为模型自动发现与桌面交互优化，GPT-5.6 Sol 过载和本地模型配置问题最受关注。

## 2. 各工具活跃度对比

| 工具 | 今日 Issue 更新数 | 今日 PR 更新数 | 新版本发布 | 备注 |
|------|------------------|---------------|------------|------|
| Claude Code | 50 | 1（已关闭，无实质内容） | 无 | 社区反馈集中在功能请求与稳定性缺陷 |
| OpenAI Codex | 50+ | 50+ | `rust-v0.147.0-alpha.2` | 多个 PR 涉及企业自动化、执行隔离、工具并行调用 |
| Kimi Code | 29 | 47 | `v0.31.0`（插件自定义代理） | PR 修复大量 UI、工具、跨平台问题 |
| OpenCode | 热点 10（总数未披露） | 热点 10（总数未披露） | `v1.18.10`（自动发现 Modal 模型） | 桌面端与 TUI 会话管理修复为主 |

## 3. 共同出现的功能方向

**MCP 工具链兼容性与认证**
- Claude Code：Cowork GitHub 连接器 OAuth 不支持、`ugrep` 引擎内存爆炸。
- OpenAI Codex：非 OpenAI 接口下 MCP 工具无法调用、Slack MCP 登录失败、OAuth 颁发者验证错误。
- Kimi Code：Anthropic Provider 对 MCP 工具 `oneOf/anyOf/allOf` 返回 400 错误、`[tools].disabled` 过滤失效。
- OpenCode：为 Figma MCP 预配置 OAuth 客户端，侧面反映 MCP 集成需求。

**Windows 平台稳定性**
- Claude Code：Cowork 触发 `KERNEL_MODE_HEAP_CORRUPTION` 内核崩溃。
- OpenAI Codex：桌面应用频繁卡顿/冻结、浏览器组件崩溃、拼写检查失效。
- Kimi Code：browser-use 代理泄漏句柄导致 `explorer.exe` 和 `dwm.exe` 桌面冻结。
- OpenCode：npm 全局安装出现 16 位兼容性错误、快捷键冲突。

**会话/状态管理可靠性**
- Claude Code：自动更新擦除 Cowork 会话磁盘数据、iOS 会话自动归档。
- OpenAI Codex：VS Code 扩展的完整 Diff 页面崩溃、Diff 视图显示错误。
- Kimi Code：TUI 权限批准后滚动位置重置、Web 端 `@` 文件提及无匹配、Edit 死循环删空文件。
- OpenCode：Web UI 会话列表为空、会话标签页读取陈旧数据、文件树裁剪问题。

**资源消耗控制与成本可见性**
- Claude Code：子代理不随父代理终止，消耗约 75 万 token 且无可见性；后台任务恢复时强制重算上下文。
- Kimi Code：Goal 模式空闲时无限触发 token 消耗循环、Cron 在暂停状态下仍发起完整 LLM 调用（单次约 7M token）。
- OpenAI Codex：新周限速被指消耗过快，用户质疑计费逻辑。

## 4. 差异化定位分析

- **Claude Code**：强依赖 Anthropic 生态，重心在**多人协作（Cowork）**与**后台代理自动化**，移动端体验是其延展方向，但稳定性问题突出。
- **OpenAI Codex**：深度绑定 OpenAI 模型与 API，重点投入 **Windows 桌面应用、IDE 扩展（VS Code）** 及**企业级执行隔离**，PR 中可见大量后端架构演进。
- **Kimi Code**：侧重**多代理（Swarm+Goal）**与**插件扩展**体系，UI 交互（TUI/Web）和跨平台兼容性是其当前主攻方向，v0.31.0 已支持插件贡献自定义代理。
- **OpenCode**：聚焦**桌面端与 TUI 交互体验**，积极拥抱**本地模型（Ollama）**和**第三方模型（Modal）**，插件体系较为开放（会话请求钩子、局域网发现）。

## 5. 社区活跃度记录

- **Issue 反馈量**：Claude Code 和 OpenAI Codex 均超 50 条，前者以单条高热度功能请求（#36151 达 148 评论）为特征，后者问题分布更广。Kimi Code 29 条，OpenCode 热点 10 条。
- **PR 合并与维护者响应**：OpenAI Codex 和 Kimi Code 均有大量 PR 直接修复 Issue 反馈（如 Codex 的企业计划、代码执行隔离、MCP 过滤；Kimi Code 的滚动回溯、工具超时描述、MCP 兼容性修复），维护者响应可见。OpenCode 的 PR 集中于会话管理和插件增强。Claude Code 今日的唯一 PR 无实质内容，无可见维护者介入。
- **发布节奏**：Kimi Code 和 OpenCode 发布稳定版本，OpenAI Codex 为 alpha 预发布，Claude Code 无版本更新。

## 6. 有证据支撑的观察

1. **Windows 平台成为多个工具的体验短板**
   今日 Claude Code、OpenAI Codex、Kimi Code 均出现 Windows 特有崩溃或桌面冻结，涉及内核模式堆损坏、浏览器组件崩溃、系统句柄泄漏，且不少问题已存在数月，说明跨平台底层稳定性仍为普遍挑战。

2. **MCP 工具链的兼容性缺口在多个工具中暴露**
   认证失败（OAuth 不支持）、输入架构不兼容（`oneOf`/`anyOf`/`allOf`）、第三方提供商下工具不可用等问题同时出现在 Claude Code、OpenAI Codex 和 Kimi Code 的反馈中，表明 MCP 生态的标准化与互操作性尚需加强。

3. **会话与状态管理的一致性问题普遍存在**
   从数据丢失（Cowork 会话被更新擦除）、UI 状态错乱（滚动重置、Web 会话列表为空）、到 IDE 视图崩溃，四个工具均反映出会话持久化、状态同步与 UI 更新的可靠性不足，直接影响开发者的连续工作流。

4. **资源消耗的“隐形浪费”引发用户关注**
   多个工具出现子代理不终止、后台空闲轮询、Cron 任务在暂停状态下仍大量消耗 token 的现象，且用户往往缺乏实时可见性，提示成本控制机制与用量透明度已成为跨工具的共性需求。

5. **多代理/子代理控制逻辑的确定性不足**
   Claude Code 子代理拒绝停止、OpenAI Codex 模型标记错误导致子代理拒绝、Kimi Code 子代理配额耗尽后静默失败，均表明多代理编排的异常处理与确定性执行仍有较大改进空间。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 | 2026-07-31

## 今日更新概览
过去 24 小时仓库无新版本发布，但社区反馈活跃，共更新 50 个 Issue，其中一条功能请求（#36151）评论数达 148 条、👍 530 次，成为绝对焦点。多数 Issue 围绕 Cowork 协作、移动端、后台代理及定时任务可靠性展开，反映现行版本在复杂工作流中的稳定性问题。今日唯一的 Pull Request（#82555）已关闭且无实质内容。

## 社区热点 Issues（10 条）

1. **#36151 [FEATURE] 多账户切换**
   🔗 [#36151](https://github.com/anthropics/claude-code/issues/36151) | 评论 148 · 👍 530
   用户希望在 Claude Mobile 应用中支持多账户切换，避免共享邮箱带来的混合使用问题。该请求长期未解决，社区投票极高，涉及移动端身份管理核心体验。

2. **#77730 后台代理任务 ID 无法恢复，导致 token 重烧**
   🔗 [#77730](https://github.com/anthropics/claude-code/issues/77730)
   背景代理跨越会话身份边界后，旧 task ID 无法解析，用户被迫完整重放上下文，造成大量 token 浪费。影响长时间运行的后台工作流。

3. **#43719 自动更新擦除 Cowork 会话磁盘**
   🔗 [#43719](https://github.com/anthropics/claude-code/issues/43719)
   自动更新后用户 Cowork 会话数据丢失，标记为回归与数据丢失，影响依赖会话持久化的协作项目。

4. **#59854 Cowork GitHub 连接器不可用**
   🔗 [#59854](https://github.com/anthropics/claude-code/issues/59854)
   OAuth DCR 不支持，UI 状态误导，且“断开连接”按钮失效，使 Cowork 模式下的 GitHub 集成完全无法使用，👍 12。

5. **#71616 iOS 上新建 Code 会话自动归档**
   🔗 [#71616](https://github.com/anthropics/claude-code/issues/71616)
   所有新创建的 Code 会话在 iOS 端立即自动归档，移动端无法访问，阻断移动办公场景。

6. **#82728 定时 one-shot 全部失败**
   🔗 [#82728](https://github.com/anthropics/claude-code/issues/82728)
   6 个预定会话中 3 个未被调度且永久保持“已武装”状态，3 个在工具调用中被杀死并误报成功，严重破坏定时任务可靠性。

7. **#82104 TaskStop 不停止子代理，导致 750k token 计费**
   🔗 [#82104](https://github.com/anthropics/claude-code/issues/82104)
   父代理被终止后子代理继续运行，消耗约 75 万 token 且无用量可见性，无法有效控制成本。

8. **#78834 ugrep 搜索 64KB 文件时内存分配 4-17 GB**
   🔗 [#78834](https://github.com/anthropics/claude-code/issues/78834)
   正则表达式包含 `. {N}` 时，内置 ugrep 引擎内存暴涨，足以耗尽系统资源，影响 Linux/WSL 环境下的 Grep 工具稳定性。

9. **#77549 AskUserQuestion 在 Web/异步会话恢复后中断**
   🔗 [#77549](https://github.com/anthropics/claude-code/issues/77549)
   工具权限询问在异步会话恢复后要么立即中止，要么需重复回答 2–7 次才生效，破坏交互式审批流程。

10. **#72377 Cowork 导致 Windows 内核堆损坏 (KERNEL_MODE_HEAP_CORRUPTION)**
    🔗 [#72377](https://github.com/anthropics/claude-code/issues/72377)
    特定 Cowork 构建触发 Windows 内核崩溃，标记为高优先级回归，影响生产环境稳定性。

## 重要 PR 进展
今日仅有一个 Pull Request 更新：
- **#82555** 已关闭，作者 @batuhunca-del，标题 “Claude/youtube instagram mcp yn2u6s”，无任何描述或代码变更，推测为无效或测试提交。

## 功能需求归类
从近期的 Issue 中可归纳出以下高频功能方向（不涉及路线图预测）：

- **多账户与身份管理**：要求移动端/桌面端支持多账户快速切换，避免共享邮箱。
- **Cowork 协作增强**：修复 GitHub 连接器、防止会话数据丢失、解决内核崩溃等稳定性问题。
- **移动端体验改进**：修复 iOS 端会话自动归档、移动端权限审批不可用等。
- **后台/定时任务可靠性**：正确停止子代理、确保定时任务调度不丢失、避免误报成功。
- **工具与内存安全**：解决 ugrep 内存爆炸、自定义主题被重置、参数校验不一致等。
- **交互与权限流程完善**：修复异步会话的 AskUserQuestion 行为、/fork 权限逻辑反转等。

## 开发者关注点
- **成本与资源控制**：子代理无法随父代理终止而停止，导致隐性 token 消耗；背景代理恢复时强制重算上下文，浪费大量 token。
- **数据持久化与安全**：自动更新可能擦除 Cowork 会话，后台任务输出缺少内存存储选项，敏感数据有落盘风险。
- **协作功能稳定性**：Cowork 模式在 Windows 上引发内核崩溃，GitHub 连接器实际不可用，影响团队协作。
- **工具行为一致性**：`--agents` 参数接受无效 JSON 而无报错，部分工具权限恢复逻辑异常，需统一校验与提示。
- **移动端与定时任务**：iOS 会话自动归档、定时任务成功率低，使移动办公和自动化场景难以落地。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-07-31 OpenAI Codex 社区动态日报

## 今日更新概览
过去 24 小时内，社区发布了 1 个新版本 `rust-v0.147.0-alpha.2`，同时有 50+ 个 Issues 和 50+ 个 PR 获得更新。开发者反馈集中在 Windows 桌面应用性能与稳定性、OAuth 认证失败、速率限制争议以及 MCP 工具兼容性等问题上，多个高热度 Issue 反映出用户对当前体验的强烈诉求。

## 版本发布
- **rust-v0.147.0-alpha.2**
  发布 `0.147.0-alpha.2` 版本，未提供详细变更说明。
  链接：https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.2

## 社区热点 Issues（10 个）

1. **Windows 桌面应用频繁卡顿/冻结**
   [#20214](https://github.com/openai/codex/issues/20214) 在 Windows 11 Pro 上，Codex App 即使系统资源充足也频繁出现卡顿和未响应，83 条评论、77 个 👍，长期未解决，严重影响日常工作流。

2. **OAuth 认证失败：颁发者验证错误**
   [#31573](https://github.com/openai/codex/issues/31573) CLI 0.143.0 中 OAuth 认证在 issuer 验证环节失败，31 条评论、66 个 👍，导致无法使用 MCP 服务，影响 Free 和付费用户。

3. **Windows 上 Browser Use 打开页面时浏览器主进程崩溃**
   [#32683](https://github.com/openai/codex/issues/32683) 使用内置浏览器功能时，`chrome.dll` 中发生访问违规（0xC0000005），导致应用崩溃，29 条评论，Pro 订阅用户反馈。

4. **非 OpenAI 接口下 MCP 工具无法调用**
   [#26234](https://github.com/openai/codex/issues/26234) 当使用 Ollama、LM Studio、OpenRouter 等非 OpenAI Responses API 时，MCP 工具被序列化为命名空间而无法被模型调用，27 条评论、40 个 👍，限制本地模型和网关用户。

5. **新周限速消耗过快，宛如旧 5 小时限制**
   [#33685](https://github.com/openai/codex/issues/33685) 移除 5 小时限制后，周限速消耗速度几乎相同，24 条评论，用户质疑计费逻辑，影响 Plus 和 Pro 订阅者的使用体验。

6. **Windows 桌面拼写检查显示“无建议”**
   [#26478](https://github.com/openai/codex/issues/26478) 拼写检查能检测错误但建议菜单始终显示“No Guesses Found”，18 条评论、25 个 👍，虽然系统拼写正常，但应用内失效。

7. **Slack 官方 MCP 的 `codex mcp login` 失败**
   [#13200](https://github.com/openai/codex/issues/13200) 动态客户端注册不支持，导致无法登录 Slack MCP 服务器，10 条评论、58 个 👍，影响企业用户集成。

8. **VS Code 扩展：完整 Review Diff 页面崩溃**
   [#35362](https://github.com/openai/codex/issues/35362) 在 VS Code 中，Codex 的完整 Diff 视图显示错误，而内联 Diff 正常，10 条评论、13 个 👍，影响代码审查工作流。

9. **VS Code 中 Codex Diff 显示“Oops，发生错误”**
   [#35481](https://github.com/openai/codex/issues/35481) 打开 Diff 视图时内容无法加载，6 条评论、31 个 👍，影响 Plus 用户，阻碍代码对比功能。

10. **gpt-5.6-luna 被标记为 MultiAgent V1，导致 V2 子代理拒绝**
    [#35097](https://github.com/openai/codex/issues/35097) CLI 0.145.0 中，新模型 `gpt-5.6-luna` 被错误标记，导致 MultiAgent V2 的 `spawn_agent` 拒绝使用，6 条评论、13 个 👍，影响高级用户的多代理工作流。

## 重要 PR 进展（10 个）

1. **支持企业自动化账户计划**
   [#36228](https://github.com/openai/codex/pull/36228) 识别并暴露 `enterprise_cbp_automation` 计划，涉及认证、后台响应和速率限制 API，已关闭合入。

2. **代码模式独立主机运行**
   [#36217](https://github.com/openai/codex/pull/36217) 将 V8 代码执行迁移到专用 `codex-code-mode-runtime` 箱，移除嵌入运行时的回退逻辑，提升隔离性和可维护性。

3. **添加无工具线程模式**
   [#31922](https://github.com/openai/codex/pull/31922) 为轻量级辅助线程（如标题生成）提供 `tool_free` 选项，避免启动 MCP 和工具枚举开销，减少资源竞争。

4. **启用 Codex Apps 并行工具调用**
   [#31591](https://github.com/openai/codex/pull/31591) 添加默认关闭的特性标志，允许 Codex Apps 的 MCP 服务器进行并行工具调用，提升响应速度。

5. **exec-server：路由远程网络策略决策**
   [#31458](https://github.com/openai/codex/pull/31458) 将执行器本地代理策略未命中回传至进程级核心策略决定器，保留环境、命令和工具调用属性，确保 Guardian 决策的一致性。

6. **暴露外部代理检测中的连接器候选**
   [#36218](https://github.com/openai/codex/pull/36218) 在 `ExternalAgentConfigDetectResponse` 中新增 `connectors` 数组，提供检测到的连接器名称、会话数和来源，增强集成可见性。

7. **从配置时钟刷新环境日期**
   [#36187](https://github.com/openai/codex/pull/36187) 使 `<current_date>` 环境上下文与主机提供的外部时钟同步，避免时间偏差。

8. **避免流式输出缓冲区字节移位**
   [#36194](https://github.com/openai/codex/pull/36194) 优化流式输出处理，改用非移位方式缓冲解码数据，减少包含大量无效 UTF-8 字节时的性能开销。

9. **合并并发远程元数据请求**
   [#36184](https://github.com/openai/codex/pull/36184) 对同一远程路径的并发 `fs/getMetadata` 请求进行共享，避免重复 RPC，提升远程文件系统操作的效率。

10. **记录标准化沙箱违规事件**
    [#36207](https://github.com/openai/codex/pull/36207) 为文件系统拒绝和托管网络阻止提供统一的结构化事件格式，便于下游消费和审计，已关闭。

## 功能需求归类
从近期 Issues 中可归纳出以下高频功能方向（不构成路线图预测）：

- **Windows 桌面稳定性与性能**：卡顿、崩溃（包括浏览器组件崩溃）、拼写检查失效、沙箱命令执行失败等问题反复出现，用户普遍要求改善 Windows 原生体验。
- **MCP 工具与认证**：OAuth 登录失败、非 OpenAI 提供商下工具不可用、命名空间扁平化需求强烈，社区希望降低集成门槛。
- **速率限制与配额透明度**：新周限速机制引发大量不满，用户要求提高限速或提供更细粒度的控制，尤其对 Plus 用户。
- **IDE 扩展增强**：VS Code 扩展需要通知支持（任务完成、审批请求）、Diff 视图稳定性修复、以及更完善的代码审查功能。
- **多代理与子代理**：模型标记错误、子代理恢复时的配置丢失等问题表明，用户正在深入使用多代理能力，并对一致性有更高期待。
- **云存储集成（OneDrive）**：当 OneDrive 降级时，工作空间流断开，影响依赖云同步的开发环境，需要更优雅的降级处理。

## 开发者关注点
- **Windows 端体验堪忧**：大量 Windows 特定 Bug（卡顿、崩溃、沙箱、拼写）长期未决，成为开发者吐槽焦点，部分问题已存在数月。
- **认证与工具链兼容性**：OAuth 和 MCP 登录失败阻碍了与 Slack 等主流服务的集成，对生产力和企业采用构成障碍。
- **速率限制争议**：用户普遍认为新周限速不合理，消耗速度与旧 5 小时限制无异，但信息透明度不足，引发了公平性质疑。
- **IDE 扩展可靠性**：Diff 页面崩溃、错误提示等问题直接影响代码审查和日常开发，开发者期望更稳定的扩展体验。
- **多代理执行确定性**：模型标记、子代理恢复逻辑等细节问题，反映出高级用户对多代理工作流可预测性的强烈需求。

（注：以上所有链接均来自 github.com/openai/codex）

</details>

<details>
<summary><strong>Kimi Code</strong> — <a href="https://github.com/MoonshotAI/kimi-code">MoonshotAI/kimi-code</a></summary>

# Kimi Code 社区动态日报 | 2026-07-31

## 1. 今日更新概览

今日社区活跃度较高，共有 29 个 Issues 更新和 47 个 PR 更新。Kimi Code 发布了 v0.31.0 版本，新增对插件贡献自定义代理的支持。大量 Issue 集中在 UI 交互体验（滚动位置重置、TUI 闪烁、Web 端代码块渲染）、工具链行为（MCP 工具过滤、Anthropic 兼容性、编辑死循环）以及跨平台适配（Windows 桌面冻结、WSL 问题）等方面。

## 2. 版本发布

**@moonshot-ai/kimi-code@0.31.0**
- 新增功能：支持插件贡献的自定义代理（plugin-contributed custom agents），可被自动发现。
- 相关 PR：[#2365](https://github.com/MoonshotAI/kimi-code/pull/2365) by [@7Sageer](https://github.com/7Sageer)
- 变更详情：此次为 Minor Changes，属于次要功能更新。

## 3. 社区热点 Issues（10 条）

1. **AI 输出时无法查看历史内容，滚动条反复跳回顶部**
   - [#2212](https://github.com/MoonshotAI/kimi-code/issues/2212) | 7 评论 | 2 👍
   - 用户在使用 Linux 终端时，AI 输出过程中无法拖动滚动条查看历史内容，窗口会频繁跳转到顶部显示最早的内容。该问题已持续近一周，影响用户阅读长输出。

2. **TUI 批准工具权限后滚动位置重置到顶部**
   - [#2296](https://github.com/MoonshotAI/kimi-code/issues/2296) | 3 评论
   - 在长会话中，每当批准一个工具权限提示后，TUI 的滚动位置会重置到顶部，用户无法继续阅读后续内容。此问题与 #2212 同属滚动体验类 Bug。

3. **Anthropic Provider 对 MCP 工具的 oneOf/anyOf/allOf 输入架构返回 400 错误**
   - [#2328](https://github.com/MoonshotAI/kimi-code/issues/2328) | 2 评论
   - 当 MCP 服务器暴露的工具 inputSchema 包含顶层 oneOf/anyOf/allOf 组合器时，Anthropic API 会拒绝整个请求，导致即使是不相关的提示也无法运行。同时发现 `[tools].disabled` 配置未能过滤 MCP 工具。

4. **Web 端新会话中 `@` 文件提及始终显示"无匹配"**
   - [#2422](https://github.com/MoonshotAI/kimi-code/issues/2422) | 1 评论
   - v0.31.0 Web 端，在新会话的 composer 中使用 `@` 提及文件时，始终显示"无匹配"，无法正常引用文件。

5. **Edit 失败后陷入死循环，反复"编辑失败 → 重读 → 再失败"并逐步删空文件内容**
   - [#2427](https://github.com/MoonshotAI/kimi-code/issues/2427) | 0 评论
   - 在 Kimi Web 网页端，Edit 操作失败后会陷入死循环，多次重试后不仅未修复，反而将文件的多个章节逐步删空。用户切换模型（K2.7 Coding → K3-256K）也无法解决。

6. **Swarm + Goal 模式：配额 403 后所有子代理静默失败，会话闲置数小时无错误提示**
   - [#2389](https://github.com/MoonshotAI/kimi-code/issues/2389) | 0 评论
   - 在 /goal + /swarm 模式下，当订阅配额耗尽时，API 返回 403 错误，所有子代理和主代理的轮次均失败，但会话完全静默，无任何错误提示，用户无法感知任务已中断。

7. **Windows 下 browser-use 代理的 Playwright headless Chrome 泄漏句柄到 explorer.exe 和 dwm.exe，导致桌面冻结**
   - [#2388](https://github.com/MoonshotAI/kimi-code/issues/2388) | 0 评论
   - browser-use 代理长时间运行后，explorer.exe 和 dwm.exe 累积句柄和线程，导致 Windows 桌面 shell 无响应。虽 CPU 和内存看起来正常，但桌面完全冻结。

8. **Goal 模式：空闲时持续触发 token 消耗循环，等待外部条件时无限燃烧 token 和上下文**
   - [#1977](https://github.com/MoonshotAI/kimi-code/issues/1977) | 1 评论
   - 在 goal 模式下，当代理等待外部条件（如远程训练任务完成）时，goal continuation 每几秒不断触发，每次重新注入完整 goal 上下文，导致大量 token 被无意义消耗。

9. **Cron 触发的提示在 goal 暂停时仍进行完整 LLM 调用（约 7M token 用于回答"goal 已暂停"）**
   - [#2390](https://github.com/MoonshotAI/kimi-code/issues/2390) | 0 评论
   - 在 goal 暂停期间，cron 任务仍持续触发，每次产生完整的 LLM 调用，但输出仅告知"goal 仍暂停"。在一个会话中，此类浪费发生了 14 次。

10. **希望简化思考过程在界面上的显示，改善视觉体验**
    - [#2397](https://github.com/MoonshotAI/kimi-code/issues/2397) | 0 评论
    - 用户建议学习 Claude Code，将思考过程的刷屏改为"ran 6 commands, edit ..."这样的简略表达，以提升视觉体验。

## 4. 重要 PR 进展（10 条）

1. **修复 Agent 工具超时描述与实际默认值不一致**
   - [#2428](https://github.com/MoonshotAI/kimi-code/pull/2428) by [@mangeshraut712](https://github.com/mangeshraut712)
   - 将 v1 Agent 工具描述中的"固定 30 分钟超时"更新为实际的 2 小时默认值，并更新了相关单元测试。

2. **修复 TUI 关闭权限提示对话框时保留滚动回溯**
   - [#2414](https://github.com/MoonshotAI/kimi-code/pull/2414) by [@mangeshraut712](https://github.com/mangeshraut712)
   - 关闭权限提示/AskUserQuestion 等对话框时，不再强制全重绘（包含 ESC[3J），保留终端滚动回溯，解决 #2296。

3. **修复 CLI 从已知第三方 Provider 获取目录失败时回退到内置 models.dev 目录**
   - [#2416](https://github.com/MoonshotAI/kimi-code/pull/2416) by [@mangeshraut712](https://github.com/mangeshraut712)
   - 当 `https://models.dev/api.json` 不可达时（部分区域常见），自动回退到发布版本中嵌入的精简目录快照，修复 #2298。

4. **修复 Anthropic Provider 工具架构兼容性问题**
   - [#2338](https://github.com/MoonshotAI/kimi-code/pull/2338) by [@ousamabenyounes](https://github.com/ousamabenyounes)
   - 检测并移除 inputSchema 中包含 oneOf/anyOf/allOf 的 MCP 工具，避免 Anthropic API 400 错误，解决 #2328。

5. **修复 MCP 工具禁用的过滤逻辑**
   - [#2423](https://github.com/MoonshotAI/kimi-code/pull/2423) by [@Correctover](https://github.com/Correctover)
   - 在 registerMcpServer 中应用 mcpDenyPatterns 过滤，确保 `[tools].disabled` 配置对 MCP 工具生效，解决 #2421。

6. **修复 Web 端注册 /usage 斜杠命令**
   - [#2429](https://github.com/MoonshotAI/kimi-code/pull/2429) by [@mangeshraut712](https://github.com/mangeshraut712)
   - 将 /usage 命令添加到 kimi-web 的斜杠命令菜单和处理程序，打开状态面板显示上下文 token 和会话成本。

7. **修复 kimi upgrade 在 macOS 上误检测为"native (windows)"，导致自动更新禁用**
   - [#2391](https://github.com/MoonshotAI/kimi-code/issues/2391) 为待修复 Issue
   - 该问题涉及 macOS 脚本安装被误判为 Windows 原生安装，影响多个版本（0.23.4 至 0.29.2）。

8. **feat: 自动生成会话标题（通过托管 chat_title 工具）**
   - [#2351](https://github.com/MoonshotAI/kimi-code/pull/2351) by [@7Sageer](https://github.com/7Sageer)
   - 利用托管平台的 chat_title 工具自动生成有意义的会话标题，替代当前截断首条用户提示到 200 字符的方式。

9. **feat(agent-core-v2): 引入 Workspace 域和 agent-profile 注册表扩展点**
   - [#2366](https://github.com/MoonshotAI/kimi-code/pull/2366) by [@sailist](https://github.com/sailist)（已关闭）
   - 在 v2 引擎的 scope 树中新增 Workspace 层级，统一管理工作区级别的共享技能、代理配置文件、AGENTS.md、MCP 连接等。

10. **feat(agent-core-v2): 通过系统提醒通知环境漂移**
    - [#2316](https://github.com/MoonshotAI/kimi-code/pull/2316) by [@7Sageer](https://github.com/7Sageer)
    - 在长时间会话中，系统提示的渲染环境可能与实际环境漂移（如日期过时、新技能未注入），通过系统提醒通知代理环境变化。

## 5. 功能需求归类

**UI/UX 优化**
- 滚动体验：多起 Issue 反映 TUI 和 Web 端滚动位置异常重置（#2212, #2296）
- 思考过程显示：用户希望简化显示，以摘要形式替代刷屏（#2397）
- 状态栏定制：用户希望可自定义状态栏（#2276），支持 sub-second 刷新率（#2396），并在状态栏中暴露 thinkingEffort（#2394）
- Web 端体验：聊天栏宽度自适应、Ctrl+Enter 提交、代码块行号显示（#2369）

**工具与代理行为改进**
- 编辑死循环：Edit 失败后陷入重试循环并破坏文件内容（#2427）
- 后台任务生命周期：TaskStop 语义不明确，停止本地任务不等于停止远程任务（#2424）
- Auto 权限模式：用户希望引入分类器支持的更安全 Auto 模式（#2406）
- Prompt 模式工具限制：需要非实验性方式拒绝工具调用（#2398）

**跨平台兼容性**
- Windows：资源泄漏导致桌面冻结（#2388）、插件更新失败（#2430）
- WSL：VS Code 扩展中 Bash 工具 stdout 为空（#2426）、图片粘贴问题（#2425）
- macOS：升级检测错误（#2391）

**可定制性与扩展性**
- MCP 频道推送支持：希望将 Discord 式桥接功能推广到实验性 v2 引擎之外（#2431）
- 插件自定义代理：v0.31.0 已实现（#2365）

## 6. 开发者关注点

- **UI 交互稳定性**：滚动位置重置、TUI 闪烁、Web 端组件渲染回退等问题直接影响开发者日常使用体验，是当前社区反馈最集中的领域。
- **工具行为语义清晰度**：TaskStop 的本地/远程差异、Edit 死循环的破坏性操作、Agent 超时描述与实现不符等，表明工具行为需要更明确的语义定义和错误保护。
- **跨平台体验一致性**：Windows 下的资源泄漏和桌面冻结、WSL 下的工具输出异常、macOS 升级检测误判等问题说明跨平台适配仍需加强。
- **资源消耗的可观测性和控制**：Goal 模式空转消耗 token、Cron 在暂停状态下仍触发完整 LLM 调用、配额耗尽后静默失败等，开发者需要更好的资源消耗可见性和保护机制。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-31

## 今日更新概览
今日发布 **v1.18.10**，核心更新为自动发现 Modal 模型，并带来多项桌面端交互优化。社区 Issues 集中在 GPT-5.6 Sol 服务器过载、本地模型配置、模式切换故障等高频问题上，PR 则以 TUI 与桌面端会话管理修复为主，提交活跃。

## 版本发布
### v1.18.10
- **Core**：自动发现可用的 Modal 模型（@devennavani）
- **Desktop 改进**：防止重复添加同一附件；始终显示新会话按钮；优化 Toast 通知的堆叠、关闭与移动端布局；细化标签页悬停与激活样式。

## 社区热点 Issues（10 条）
1. **#39653 GPT-5.6 Sol 服务器过载错误**
   用户反馈使用 Sol 模型时频繁出现服务器过载，而 Pi、Codex 模型正常。影响付费用户正常使用，社区反响强烈，👍10，💬16。
   [链接](https://github.com/anomalyco/opencode/issues/39653)

2. **#37762 Ollama 本地模型响应异常**
   用户配置 Ollama 后使用 OpenCode Desktop 时遭遇响应缓慢或失败，怀疑限速问题，提供详细环境配置（Win11, 64GB RAM, 4GB VRAM），寻求无限制的本地模型使用方案。
   [链接](https://github.com/anomalyco/opencode/issues/37762)

3. **#39288 升级至 1.18.8 后 AutoScroller 插件错误**
   桌面端升级后报错 `AutoScroller plugin depends on Scroller plugin`，导致主界面无法正常使用，影响较多用户。
   [链接](https://github.com/anomalyco/opencode/issues/39288)

4. **#38655 最新版本无法在 Plan 与 Build 模式间切换**
   用户报告更新后模式默认锁定在 Build，无法切换回 Plan，干扰了仅规划不执行代码的工作流。
   [链接](https://github.com/anomalyco/opencode/issues/38655)

5. **#37628 npm 全局安装 opencode-ai 出现 16 位兼容性问题**
   在 Windows 下通过 `npm install -g` 安装后，二进制文件提示不兼容当前 Windows 版本，Node v26.5.0 环境，阻碍 CLI 用户更新。
   [链接](https://github.com/anomalyco/opencode/issues/37628)

6. **#37579 中文用户反馈长时间无响应**
   用户描述“花钱用不了”，附日志文件，模型长时间无任何输出，严重影响付费体验。
   [链接](https://github.com/anomalyco/opencode/issues/37579)

7. **#39256 特性请求：澄清模型文档中 `variants` 子配置的命名规则**
   开发者指出文档未说明子配置应使用 camelCase 还是 snake_case，造成集成困惑。
   [链接](https://github.com/anomalyco/opencode/issues/39256)

8. **#39491 Plan 模式可通过 bash 写入文件**
   用户发现 Plan 模式虽禁用 write tool，但模型仍能通过 bash 命令（如 `cat > file`）写入文件，模式隔离失效，存在安全风险。
   [链接](https://github.com/anomalyco/opencode/issues/39491)

9. **#27837 Web UI 会话列表显示为空**
   在 Web 服务器模式下，左侧面板会话列表始终为空，但后端 `/api/session` 接口正常返回数据，前端 SSE 事件驱动逻辑存在缺陷。
   [链接](https://github.com/anomalyco/opencode/issues/27837)

10. **#39655 Web UI 显示“No folders found”**
     `opencode web` 启动后，项目列表显示找不到文件夹，后端 API 实际已返回项目，问题出在 Web UI 前端渲染。
    [链接](https://github.com/anomalyco/opencode/issues/39655)

## 重要 PR 进展（10 个）
1. **#39753 [TUI] 新会话继承当前会话目录**
   修复 V2 TUI 中 `/new` 创建会话时目录不一致的问题，使其与桌面端行为对齐。
   [链接](https://github.com/anomalyco/opencode/pull/39753)

2. **#39774 [TUI] 列表更新时保留当前选中项**
   修复会话选择器在异步加载后高亮与实际选中项错位的问题。
   [链接](https://github.com/anomalyco/opencode/pull/39774)

3. **#39748 [Session] 标题生成失败后自动重试**
   提升自动标题生成的健壮性，失败后使用原始用户提示重试，避免会话标题缺失。
   [链接](https://github.com/anomalyco/opencode/pull/39748)

4. **#39747 [Session] 生成标题设为可选**
   会话在生成标题成功前保持无标题，API 合约中当标题缺失时省略字段，涉及 App、TUI、CLI、导出等全链路。
   [链接](https://github.com/anomalyco/opencode/pull/39747)

5. **#39767 [App] 防止会话标签页读取陈旧数据**
   修复会话和项目导航时，标题栏内容在 Solid 过渡期间仍显示旧页面信息的问题。
   [链接](https://github.com/anomalyco/opencode/pull/39767)

6. **#39770 [App] 防止文件树标签页被裁剪**
   调整桌面端文件树最小宽度，确保“Files Changed”标签页不被遮挡。
   [链接](https://github.com/anomalyco/opencode/pull/39770)

7. **#39764 [Plugin] 新增会话请求钩子**
   向插件体系暴露 `session.request` 钩子，允许插件在最终 HTTP 请求头与序列化请求体上做修改，增强集成能力。
   [链接](https://github.com/anomalyco/opencode/pull/39764)

8. **#27554 [Core] 本地局域网提供者发现与自动发现模型**
   通过 mDNS 等方式实现局域网内 OpenAI 兼容服务器的自动发现，并支持联网模型自动发现，长期功能 PR。
   [链接](https://github.com/anomalyco/opencode/pull/27554)

9. **#38360 [Core] 配置 Figma MCP OAuth 客户端**
   将 OpenCode 注册的 OAuth 客户端 ID 内建为 Figma MCP 服务器的默认配置，简化 Figma 集成设置。
   [链接](https://github.com/anomalyco/opencode/pull/38360)

10. **#26861 [TUI] 修复长会话中旧消息消失**
    通过懒加载滚动机制，防止长会话中历史消息意外丢失，提升 TUI 使用体验。
    [链接](https://github.com/anomalyco/opencode/pull/26861)

## 功能需求归类
- **模型服务稳定性与速率限制**：多起关于 GPT-5.6 Sol 过载、NVIDIA API 路由 429 错误、DeepSeek 放弃响应等，用户对模型可用性高度敏感。
- **本地模型集成**：Ollama 用户希望无缝使用本地模型并避免限速，需改进配置指引与错误提示。
- **模式与工作流**：Plan/Build 模式切换异常、Plan 模式仍可写入文件，影响工作流安全与逻辑。
- **Web UI 完善**：会话列表不显示、项目文件夹为空等问题，需求前端状态同步修复。
- **桌面端与移动端体验**：附件重复、Toast 通知混乱、侧边栏自动关闭、主题自动切换等交互细节。
- **可访问性**：屏幕阅读器用户请求 TUI 适配，去除动画、提供快捷键等。
- **文档与国际化**：法语文档翻译错误、模型配置命名规则不明确，要求改进文档。
- **Windows 兼容性**：npm 安装二进制不兼容、16 位错误、快捷键冲突（Win+A 被系统占用）等。
- **认证与计费**：GitHub OAuth 登录失败、订阅后仍提示免费额度用尽、代币消耗不符预期等。

## 开发者关注点
- **服务端过载与模型稳定性**是今日最突出的痛点，GPT-5.6 Sol 的频繁错误直接影响开发效率。
- **模式隔离与安全**：Plan 模式通过 bash 绕过限制成为安全隐患，应尽快修复。
- **会话与 UI 状态管理**：从 TUI 列表选中错位、App 标签页陈旧数据读取，到 Web 会话列表为空，状态同步问题多发。
- **插件与扩展体系**：AutoScroller 依赖缺失导致启动失败，提示插件依赖管理需加强；新增会话请求钩子则反映扩展需求旺盛。
- **全平台一致性**：Windows 二进制兼容性、快捷键冲突、主题跟随等，需持续打磨桌面端体验。

---

*日报基于 GitHub 数据自动生成，反映截至 2026-07-31 的社区动态，仅供参考。*

</details>