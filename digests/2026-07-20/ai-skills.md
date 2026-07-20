# Skills 生态热点 2026-07-20

> 生成时间: 2026-07-20 02:58 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告（2026-07-20）

## 1. 全生态热门 Skills / Skill 提案
按 Issue 评论量与点赞量综合排序，选取最受关注的 8 项（同一仓库的相同方向不重复计入）：

| # | 议题 | 仓库 | 评论 | 👍 | 核心关注点 |
|---|------|------|------|----|------------|
| 1 | [#492 社区技能冒充官方命名空间致信任边界漏洞](https://github.com/anthropics/skills/issues/492) | anthropics/skills | 39 | 2 | 安全/信任 |
| 2 | [#228 请求组织内共享技能库](https://github.com/anthropics/skills/issues/228) | anthropics/skills | 14 | 7 | 企业分发 |
| 3 | [#556 skill-creator 评估脚本 never triggers 技能导致 0% 召回](https://github.com/anthropics/skills/issues/556) | anthropics/skills | 12 | 7 | 开发者工具 |
| 4 | [#62 用户创建的 12 个复杂技能全部消失](https://github.com/anthropics/skills/issues/62) | anthropics/skills | 10 | 2 | 稳定性/存储 |
| 5 | [#1329 提议 compact-memory 技能：符号化压缩代理状态](https://github.com/anthropics/skills/issues/1329) | anthropics/skills | 9 | 0 | 记忆/效率 |
| 6 | [#189 同时安装 document-skills 和 example-skills 导致重复技能](https://github.com/anthropics/skills/issues/189) | anthropics/skills | 6 | 9 | 安装体验 |
| 7 | [#386 playwright-interactive 技能依赖已移除的 js_repl 功能](https://github.com/openai/skills/issues/386) | openai/skills | 4 | 4 | 技能可用性 |
| 8 | [#153 实验性技能无法被找到](https://github.com/openai/skills/issues/153) | openai/skills | 4 | 3 | 技能发现 |

另有 [#202 建议更新 skill-creator 至最佳实践](https://github.com/anthropics/skills/issues/202)（8 评论，已关闭）、[#412 提议 agent-governance 技能](https://github.com/anthropics/skills/issues/412)（6 评论，已关闭）同样获得不少讨论。

## 2. 各仓库亮点

### anthropics/skills
社区贡献活跃，收到大量文档处理类技能 PR（typography、ODT、PDF 修复、DOCX 修复）与开发者工具链改进（skill-creator 评估修复、YAML 校验、质量分析）。热议集中在技能信任边界安全、企业共享机制缺失、以及 skill-creator 评估管道不可靠导致的描述优化无效。整体呈现“贡献多、工具链痛点多”的状态，维护侧回应尚未在数据中体现。

### openai/skills
没有发现新的技能 PR，仓库活跃度较低。现有 Issue 主要反映技能安装器缺少更新路径、实验性技能入口不可达、以及 curated 技能与已移除平台功能不兼容（如 playwright-interactive 依赖 js_repl）。社区更聚焦于基础可用性修复，而非新技能方向扩展。

## 3. 社区需求归类
基于两个仓库中同时出现或相近的诉求，汇总成以下方向（不表示趋势强度）：

- **技能发现、安装与生命周期管理**
  `anthropics/skills` #228（组织共享）、#189（重复安装）、#62（技能消失）；`openai/skills` #127（无更新/重装路径）、#153（实验技能不可见）、#259（README 引用错误）。共同指向技能分发与版本管理机制不完善。

- **技能开发工具链与质量评估**
  `anthropics/skills` PR #1298、#1099（修复 eval 管道的 Windows 崩溃与 0% 召回），PR #539（YAML 前置校验），PR #83（质量/安全分析器），PR #1367（自审技能）；`openai/skills` #121（请求 linter/LSP 工具）。开发者亟需可工作的评估、校验与自检手段。

- **办公文档生成与格式控制**
  `anthropics/skills` PR #514（typography）、#486（ODT）、#538（PDF 大小写引用）、#541（DOCX 书签冲突）。均为确保生成文档的排版正确性与模板兼容性的技能提案。

- **安全与信任边界**
  `anthropics/skills` #492（命名空间冒充）、已关闭 #412（agent-governance 安全模式）。关注技能来源可信度和代理系统治理。

- **代理记忆与状态压缩**
  `anthropics/skills` #1329（compact-memory 符号记法）。追求长对话下的 token 高效持久化。

- **平台功能兼容性**
  `openai/skills` #386（js_repl 移除后技能报错）、#96/#495（gh-address-comments 脚本路径与 fork PR 解析问题）。聚焦代码执行环境变动与技能脚本硬编码导致的失效。

## 4. 活跃待合并 Skills
（注：所有 PR 未展示评论数，故仅基于是否存在关联 Issue 讨论或修复紧迫性列出；不预测合并时间。）

- **[anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298) — fix(skill-creator): run_eval.py 始终报告 0% recall**
  直接回应热门 Issue #556。修复评估流程中命令行工具无法触发技能、Windows 管道读取失败及并行 worker 问题。是解锁描述优化循环的关键补丁，社区多人复现，状态 Open。

- **[anthropics/skills#1099](https://github.com/anthropics/skills/pull/1099) — fix run_eval.py 在 Windows 上的子进程管道崩溃**
  与 #1298 部分重叠，专注 Windows 兼容。说明该问题已从不同角度被多次提交，状态 Open。

- **[anthropics/skills#1367](https://github.com/anthropics/skills/pull/1367) — feat: 自审技能（机械验证 + 四维度推理质量门）**
  提供交付前输出文件存在性检查与推理维度排序审查，意图成为通用质量闸门，状态 Open。

- **[anthropics/skills#514](https://github.com/anthropics/skills/pull/514) — 文档 typography 技能**
  预防 AI 生成文档中的孤行、寡段与编号错位，实用性强，状态 Open。

- **Codex 仓库无活跃技能 PR**，所有讨论停留在 Issue 层面。

## 5. 跨仓库今日备注
- Claude Skills 生态的贡献主力来自社区外部，提交涵盖新技能与工具链修复；Codex Skills 几乎无新建技能 PR，更聚焦现有技能的环境兼容性报错。
- 技能分发与安装体验（共享、去重、更新、可见性）在两个仓库都是主要摩擦点。
- Claude 社区对安全属性和企业级功能的需求（命名空间信任、组织共享、治理技能）更为突出；Codex 侧则出现与平台特性退役同步不上的问题。

*事实备注：*
- 数据仅覆盖 2026-07-20 两个仓库的快照，Claude 50 PR/100 Issue，Codex 0 PR/50 Issue。
- Claude `skill-creator` 评估管道问题已催生至少 3 个独立 PR 和 1 个长篇 Issue，是当日最集中的技术故障点。
- Codex 仓库在统计期内无任何合并或讨论中的新技能 PR，社区活跃度明显低于 Claude。