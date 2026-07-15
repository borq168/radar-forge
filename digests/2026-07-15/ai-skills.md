# Skills 生态热点 2026-07-15

> 生成时间: 2026-07-15 00:20 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告（2026-07-15）

## 1. 全生态热门 Skills 议题
按评论与点赞综合热度排序，列出跨仓库最受关注的 Skills 相关讨论：

| 热度 | 条目 | 仓库 | 类型 | 链接 |
|------|------|------|------|------|
| 36 | 社区技能冒用 `anthropic/` 命名空间，引发信任边界滥用 (#492) | anthropics/skills | Issue | https://github.com/anthropics/skills/issues/492 |
| 21 | 组织内技能共享与共享库需求 (#228) | anthropics/skills | Issue | https://github.com/anthropics/skills/issues/228 |
| 19 | `run_eval.py` 始终无法触发技能，导致评估指标失效 (#556) | anthropics/skills | Issue | https://github.com/anthropics/skills/issues/556 |
| 15 | `document-skills` 与 `example-skills` 安装重复内容，造成技能冗余 (#189) | anthropics/skills | Issue | https://github.com/anthropics/skills/issues/189 |
| 12 | 上传技能批量消失且出现错误 (#62) | anthropics/skills | Issue | https://github.com/anthropics/skills/issues/62 |
| 9 | 提议新技能：紧凑记忆（符号化 agent 状态压缩）(#1329) | anthropics/skills | Issue | https://github.com/anthropics/skills/issues/1329 |
| 9 | `skill-creator` 应更新为可执行技能而非人类文档 (#202) | anthropics/skills | Issue (已关闭) | https://github.com/anthropics/skills/issues/202 |
| 8 | `playwright-interactive` 仍依赖已移除的 `js_repl` 功能 (#386) | openai/skills | Issue (已关闭) | https://github.com/openai/skills/issues/386 |
| 7 | 实验性技能无法被发现 (#153) | openai/skills | Issue | https://github.com/openai/skills/issues/153 |
| 6 | 提议技能：Agent 治理 — AI agent 安全模式 (#412) | anthropics/skills | Issue (已关闭) | https://github.com/anthropics/skills/issues/412 |

> 注：Claude 仓库仍有大量开放 PR 贡献新技能（如文档排版、ODT 生成、自审核等），虽暂无评论互动，但反映了持续的内容供给。

## 2. 各仓库亮点
**anthropics/skills**
当前焦点集中在技能基础设施的修复与治理：评估工具 `run_eval.py` 的 0% 召回问题（#1298、#556）、技能命名空间安全 (#492)、以及组织共享需求 (#228) 获得最多讨论。新技能 PR 活跃，覆盖文档排版、ODT、自审核、安全分析器等方向，但多数尚未被维护者评审或合并。社区对技能安装、重复内容及技能丢失等体验问题的反馈也较集中。

**openai/skills**
仓库热度明显低于 Claude 侧，过去一个周期未合并任何新 PR。讨论集中于技能兼容性（已移除的 `js_repl` 依赖 #386）、安装器缺乏更新路径 (#127) 以及实验性技能的可发现性问题 (#153)。用户提出了 Skill Orchestrator 等路由层技能构想 (#491)，整体偏向工具链稳定性和技能目录治理。

## 3. 社区需求归类
跨仓库反复出现的技能方向或痛点可归为以下类别，不夸大趋势：

- **文档与排版技能**：PDF 修复、OpenDocument 生成、文档排版质量控制（Claude #514、#486、#538、#541）——用户期望 AI 产出排版合规、跨格式兼容的文档。
- **技能质量与治理**：元技能分析器、自审核技能、技能创建器优化（Claude #83、#1367、#202、#539）；安全命名空间与信任边界（Claude #492）；Agent 治理模式（Claude #412）。
- **组织协作与分发**：组织内共享技能库（Claude #228）、避免重复安装（Claude #189）、实验性技能可见性（Codex #153）、安装器支持更新/覆盖（Codex #127）。
- **评估与工具链修复**：`run_eval.py` Windows 崩溃、触发检测（Claude #1298、#556、#1099）；Codex 的 linter/插件需求（Codex #121）；技能路由去重（Codex #491）。
- **记忆与状态压缩**：紧凑记忆符号（Claude #1329），旨在降低长任务 token 开销。

## 4. 活跃待合并 Skills
以下 PR 虽评论数较少（部分为 0），但包含实质修复或新技能，当前均处于 **Open** 状态，讨论主要体现在代码变更中：

- **修复 run_eval 评估失效** (#1298)：解决召回率恒为 0% 的问题，涉及 eval 工件安装、Win 流读取及并行工作线程。仓库：anthropics/skills。https://github.com/anthropics/skills/pull/1298
- **文档排版技能** (#514)：增加拼版控制，避免 AI 文档中孤行、寡行和编号错位。仓库：anthropics/skills。https://github.com/anthropics/skills/pull/514
- **ODT 技能** (#486)：支持 OpenDocument 创建、模板填充与 HTML 转换。仓库：anthropics/skills。https://github.com/anthropics/skills/pull/486
- **自审核技能** (#1367)：交付前实施机械文件校验与四维度推理审计。仓库：anthropics/skills。https://github.com/anthropics/skills/pull/1367
- **PDF 案例敏感修复** (#538) 和 **DOCX 追踪更改冲突修复** (#541)：修正文件引用和书签 ID 冲突，避免技能在特定文件系统下失败。仓库：anthropics/skills。https://github.com/anthropics/skills/pull/538、https://github.com/anthropics/skills/pull/541

以上均未合并，用途明确，讨论集中在维护者是否会采用这些改进或新增贡献。

## 5. 跨仓库今日备注
- Claude Skills 仓库的社区贡献量（大量 PR）与 Codex 仓库形成反差，但后者的 Issue 同样暴露了安装、兼容性等使用侧痛点。
- 两个仓库均未出现正式维护者反馈，多数 Issue 和 PR 由社区成员推动。
- 事实备注：
  - Claude 侧 `run_eval.py` 的评估准确性问题被至少 3 个独立修复 PR 和 1 个 Issue 覆盖，是该生态当前最突出的技术故障。
  - Codex 仓库技能目录中 `scripts/` 路径引用错误（#96、#386）造成功能降级，显示其技能对内部工具路径存在隐式耦合。
  - 两个仓库的社区都明确提出“技能路由/去重/质量审计”等元技能需求，但尚处提案阶段。