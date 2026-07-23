# Skills 生态热点 2026-07-23

> 生成时间: 2026-07-23 03:54 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告（2026-07-23）

## 1. 全生态热门 Skills
（按 Issue 评论数降序，关联 PR 作为同一话题列出）

| 话题 | 仓库 | 类型 | 评论 | 👍 |
|------|------|------|------|----|
| 社区技能冒充官方命名空间，信任边界被滥用 | anthropics/skills | Issue #492 | 43 | 2 |
| 组织内技能共享需求 | anthropics/skills | Issue #228 | 14 | 7 |
| 技能评估工具 `run_eval.py` 永远报告 0% 触发率（关联 PR #1298、#1099） | anthropics/skills | Issue #556 | 12 | 7 |
| 已创建技能突然消失 | anthropics/skills | Issue #62 | 10 | 2 |
| 紧凑记忆技能提案（符号化代理状态） | anthropics/skills | Issue #1329 | 9 | 0 |
| `skill-creator` 应更新至最佳实践 | anthropics/skills | Issue #202 (已关闭) | 8 | 1 |
| `playwright-interactive` 技能依赖已移除的 `js_repl` 功能 | openai/skills | Issue #386 (已关闭) | 4 | 4 |
| 实验性技能无法被找到 | openai/skills | Issue #153 | 4 | 3 |

> 注：Claude Skills 的 PR 评论数未采集，但多个 PR 直指上述 Issue，构成实质讨论热点。

## 2. 各仓库亮点

**anthropics/skills**
- 评估工具可靠性成为焦点：`run_eval.py` 的 0% 触发率 bug（#556）催生了至少两个修复 PR（#1298、#1099），影响技能描述优化循环。
- 安全与治理讨论升温：社区技能混入 `anthropic/` 命名空间引发信任危机（#492，43 评论），同时有 agent-governance 技能提案（#412，已关闭）。
- 新技能提案活跃：文档排版（#514）、ODT 创建（#486）、自我审计（#1367）等 PR 持续提交，但多数保持开放，合并进度缓慢。

**openai/skills**
- 技能依赖管理暴露问题：`playwright-interactive` 仍引用已移除的 `js_repl` 功能（#386，已关闭），表明 curated 技能与 CLI 版本脱节。
- 技能安装器体验不佳：安装路径冲突无更新/重装路径（#127），实验性技能无法被安装器发现（#153），阻碍用户使用。
- 社区贡献较低：无 PR 提交，Issue 评论数均未超过 4，讨论活跃度远低于 Claude 生态。

## 3. 社区需求归类
跨仓库诉求可归纳为以下方向，但单一仓库的重复出现尚不构成全生态趋势。

- **技能评估与测试工具**
  Claude 的 `run_eval.py` 修复（#556、#1298、#1099）与 `skill-quality-analyzer` 提案（#83）均指向对技能触发、质量自动化评估的需求。
- **文档生成与格式技能**
  文档排版（#514）、ODT 模板填充（#486）以及 PDF 文件引用修复（#538）呈现对专业文档输出的持续需求。
- **安全与治理**
  信任边界（#492）、agent-governance 提案（#412）和技能安全分析器（#83）共同反映对 Agent 安全运行的关注。
- **技能管理与共享**
  组织内共享（#228）、插件重复安装（#189）、技能消失（#62）和 Codex 的安装/更新限制（#127）均指向技能生命周期管理不足。
- **技能开发工具**
  skill-creator 最佳实践（#202）、YAML 校验（#539）和 Codex 的 linter/IDE 诉求（#121）提示技能作者缺乏配套工具链。
- **记忆与状态压缩**
  compact-memory 提案（#1329）试图用符号记法降低长时间代理的上下文成本。

## 4. 活跃待合并 Skills
以下 PR 处于开放状态，涉及实际功能改进或新技能，当前讨论多为技术细节，尚未合并。

- **修复技能评估工具**
  - #1298：修复 `run_eval.py` 的 0% recall 问题，涉及 eval artifact 安装、Windows 流读取、触发检测与并行 worker，是解决 #556 的主要方案。
  - #1099：专门修复 Windows 下 `run_eval.py` 子进程管道读取崩溃，与 #1298 互补。
  状态：两者均开放，前者更新至 6-23，后者至 5-24。
- **文档排版技能**
  - #514：新增 `document-typography` 技能，解决 AI 生成文档的孤行、寡行、编号对齐问题。
  状态：3-13 后无进一步活动，但属于新技能提案。
- **ODT 技能**
  - #486：新增 OpenDocument 格式创建、模板填充与解析能力。
  状态：4-14 更新，仍在等待。
- **自我审计技能**
  - #1367：在输出交付前进行机械文件验证与四维度推理质量审计（v1.3.0）。
  状态：7-2 更新，较新提案。
- **DOCX 跟踪修订 ID 冲突修复**
  - #541：修复 `w:id` 与现有书签冲突导致的文档损坏。
  状态：4-16 更新，专注 OOXML 细节。
- **skill-creator 描述 YAML 校验**
  - #539：检测未引用的 `description` 字段中的特殊字符，防止 YAML 解析错误。
  状态：4-16 更新。

## 5. 跨仓库今日备注
- Claude 生态以技能扩展和评估工具修复为核心，社区贡献量大但合并缓慢；Codex 生态则聚焦于技能安装器的体验缺陷和依赖清理，贡献活跃度较低。
- 两个仓库均出现技能管理痛点：Claude 的插件重复安装（#189）与技能消失（#62），Codex 的安装无更新路径（#127），反映技能生命周期工具不成熟。
- 事实备注：
  1. Claude 的 `run_eval.py` 问题（#556）已关联 10+ 独立复现，其修复 PR 是当前维护优先级最高的待办项之一。
  2. Codex 的 `playwright-interactive` 技能因依赖已移除的 `js_repl` 而无法使用（#386），已关闭但未说明修复计划。
  3. 跨仓库的安全关注正在上升：Claude 的信任边界漏洞（#492）与 agent-governance 提案（#412）均指向 Agent 安全治理缺口。