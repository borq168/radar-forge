# Skills 生态热点 2026-08-03

> 生成时间: 2026-08-03 00:25 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

好的，这是根据您提供的 GitHub 数据生成的 Skills 社区热点报告。

---

## Skills 社区热点报告 (2026-08-03)

### 1. 热门 Skills 排行

以下是根据 PR 讨论热度、关注度及功能定位筛选出的 5 个热门 Skill 或 Skill 修复。

1.  **`fix(skill-creator): run_eval.py always reports 0% recall` (PR #1298)**
    *   **功能**: 修复 skill-creator 工具链中 `run_eval.py` 的核心缺陷。该缺陷导致技能评估时始终报告 0% 的召回率，使开发者无法有效优化技能描述。
    *   **讨论热点**: 该问题已被至少 10 个独立用户复现，是影响 skill-creator 可用性的严重阻塞。讨论集中在修复方案，包括将 eval artifact 安装为真实技能以解决触发检测机制。
    *   **当前状态**: 开放中，有多份代码提交，是当前社区修复的核心焦点。
    *   **链接**: https://github.com/anthropics/skills/pull/1298

2.  **`Add document-typography skill` (PR #514)**
    *   **功能**: 新增一个专注于文档排版质量控制的技能，旨在解决 AI 生成文档中常见的孤字、孤行、标题位于页面底部等排版问题。
    *   **讨论热点**: 这是一个针对 AI 生成内容“最后一步”的实用技能，讨论集中在如何定义规则和触发条件，以使其对用户透明且有效。
    *   **当前状态**: 开放中，等待进一步审查和合并。
    *   **链接**: https://github.com/anthropics/skills/pull/514

3.  **`Add ODT skill — OpenDocument text creation and template filling` (PR #486)**
    *   **功能**: 新增对 OpenDocument 格式 (.odt, .ods) 的支持，包括创建、填充模板、读取和转换。
    *   **讨论热点**: 社区对开源办公文档格式有明确需求，该技能填补了生态空白。讨论围绕其触发条件和功能边界。
    *   **当前状态**: 开放中，持续更新中。
    *   **链接**: https://github.com/anthropics/skills/pull/486

4.  **`feat: add testing-patterns skill` (PR #723)**
    *   **功能**: 新增一个全面覆盖测试模式的技能，包括单元测试、React 组件测试、集成测试和测试哲学。
    *   **讨论热点**: 该技能试图为 AI 提供一套完整的测试编写指南，讨论焦点在于其内容是否足够具体和可操作，以避免给出泛泛的指导。
    *   **当前状态**: 开放中，评论活跃。
    *   **链接**: https://github.com/anthropics/skills/pull/723

5.  **`Add pyxel skill for retro game development` (PR #525)**
    *   **功能**: 为 Pyxel 复古游戏引擎添加技能支持，使 AI 能辅助用户创建像素风格、8-bit 游戏。
    *   **讨论热点**: 这是一个面向特定技术栈的“小而美”技能，社区讨论其工作流定义，如“编写→运行→捕获→迭代”的闭环。
    *   **当前状态**: 开放中，已获得关注。
    *   **链接**: https://github.com/anthropics/skills/pull/525

### 2. 社区需求归类

从 Issues 中归类出社区提出的新 Skill 方向，这些需求尚待满足，不构成趋势判断。

*   **安全与治理**: 社区明确提出了对 AI Agent 系统的安全治理需求。Issue #492 指出了社区技能伪装成官方技能带来的信任边界风险；Issue #412 则提议创建一个专门关于 Agent 安全模式（如策略执行、威胁检测、审计追踪）的技能。
    *   **链接**: https://github.com/anthropics/skills/issues/492, https://github.com/anthropics/skills/issues/412

*   **组织级共享与管理**: 用户希望 Skills 能在组织内直接分享，而不是通过手动下载和上传文件的方式。Issue #228 提议建立一个共享技能库或直接分享链接，以简化团队协作流程。
    *   **链接**: https://github.com/anthropics/skills/issues/228

*   **工具链稳定性与兼容性**: 多个 Issue 反映了 skill-creator 工具链在 **Windows 平台**上的兼容性问题，以及 `run_eval.py` 的普遍性故障。Issue #556、#1061、#1169 等都指向了召回率始终为 0% 这一核心缺陷，表明开发者对稳定、可靠的开发工具有强烈的需求。
    *   **链接**: https://github.com/anthropics/skills/issues/556, https://github.com/anthropics/skills/issues/1061

### 3. 活跃待合并 Skills

以下 PR 评论活跃，但尚未被合并到主分支，当前状态聚焦于代码审查和方案讨论。

*   **PR #1298 - fix(skill-creator): run_eval.py always reports 0% recall**: 这是当前最活跃的修复 PR，针对 skill-creator 的核心故障。多名贡献者提出了不同的修复路径，社区仍在讨论最优方案。该 PR 的进展直接影响到其他依赖 `run_eval.py` 的工具（如 `run_loop.py`）。
    *   **链接**: https://github.com/anthropics/skills/pull/1298

*   **PR #1099 & #1050 - Windows compatibility fixes**: 这两个 PR 都专注于修复 skill-creator 在 Windows 上的兼容性问题，包括子进程启动和编码问题。它们的活跃度高，表明平台兼容性是社区急需解决的痛点，且多个贡献者正在独立解决。
    *   **链接**: https://github.com/anthropics/skills/pull/1099, https://github.com/anthropics/skills/pull/1050

*   **PR #1367 - feat(skills): add self-audit skill**: 该 PR 提议新增一个“自我审计”技能，在 AI 输出交付前进行机械文件验证和推理质量审核。这个想法引起了社区关于 AI 输出质量控制链的讨论。
    *   **链接**: https://github.com/anthropics/skills/pull/1367

*   **PR #509 - docs: add CONTRIBUTING.md**: 这是一个旨在提升社区健康度的文档 PR，旨在为新贡献者提供清晰的指引。其活跃度反映了社区对规范化贡献流程的普遍需求。
    *   **链接**: https://github.com/anthropics/skills/pull/509

### 4. 今日记录备注

*   **skill-creator 工具链的稳定性是当前社区最核心的焦点**：多个高活跃度的 PR 和 Issue 都指向了 `run_eval.py` 的触发检测故障问题，导致召回率始终为 0%，这是工具链无法正常工作的根本原因。社区正在投入大量精力修复此问题。
*   **Windows 兼容性是一个持续存在的痛点**：多个独立贡献者提交了针对 Windows 平台的修复 PR，说明当前工具链的开发主要基于 Unix 环境，未充分考虑 Windows 用户的体验。
*   **社区对安全、组织和质量控制的诉求在增加**：除了基础功能，用户开始关注技能生态的安全治理（如 #492）、组织级共享（如 #228）以及 AI 输出的质量控制（如 #1367），表明社区正在从“能用”向“好用、安全、可控”发展。