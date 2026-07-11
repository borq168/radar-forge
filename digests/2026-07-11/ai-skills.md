# Skills 生态热点 2026-07-11

> 生成时间: 2026-07-11 00:23 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# 跨仓库 Skills 生态热点报告

**报告日期：2026-07-11**
**数据范围：anthropics/skills、openai/skills 两个仓库，共 50 条 PR + 100 条 Issue**

---

## 1. 全生态热门 Skills

按 Issue 评论数 + 👍 反应综合排序，PR 评论数据本次未获取到（字段为 undefined），故以 Issue 热度为主、辅以关联 PR 活跃度：

| 序号 | Issue/PR | 仓库 | 评论 | 👍 | 主题 |
|------|----------|------|------|----|------|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | Claude | 34 | 2 | 社区技能以 `anthropic/` 命名空间分发，存在信任边界滥用风险 |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | Claude | 14 | 7 | 组织内技能共享需求：当前靠文件传输，缺乏直接共享机制 |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | Claude | 12 | 7 | `run_eval.py` 技能触发率为 0%，评估工具系统性失效 |
| 4 | [#62](https://github.com/anthropics/skills/issues/62) | Claude | 10 | 2 | 用户创建的 12 个技能全部消失，疑似文件重命名导致 |
| 5 | [#1329](https://github.com/anthropics/skills/issues/1329) | Claude | 9 | 0 | 提案 `compact-memory` 技能：用符号化表示压缩 agent 长期记忆 |
| 6 | [#202](https://github.com/anthropics/skills/issues/202) | Claude | 8 | 1 | `skill-creator` 风格偏向开发者文档而非可执行指令，token 效率低 |
| 7 | [#189](https://github.com/anthropics/skills/issues/189) | Claude | 6 | 9 | `document-skills` 与 `example-skills` 插件内容重复，导致技能冗余 |
| 8 | [#386](https://github.com/openai/skills/issues/386) | Codex | 4 | 4 | `playwright-interactive` 依赖已移除的 `js_repl` 功能 |
| 9 | [#153](https://github.com/openai/skills/issues/153) | Codex | 4 | 3 | 实验性技能路径不可达，用户无法发现 |
| 10 | [#491](https://github.com/openai/skills/issues/491) | Codex | 1 | 3 | 提案 `Skill Orchestrator` 元技能：去重和路由大规模技能目录 |

> **PR 备注**：Claude 仓库的 [#1298](https://github.com/anthropics/skills/pull/1298)（修复 `run_eval.py`）与 [#1099](https://github.com/anthropics/skills/pull/1099)（Windows 兼容修复）均直接对应热门 Issue #556，属于高关注度 PR，但评论数据未获取到。

---

## 2. 各仓库亮点

### anthropics/skills（Claude Skills）
该仓库贡献活跃度较高，PR 提交覆盖技能修复、新技能提案、评估工具改进三个方向。当前讨论热点集中在 **技能评估基础设施的可靠性**（#556 获得 12 条评论和 2 个独立修复 PR）、**社区技能的安全信任边界**（#492 获得 34 条评论，为全生态最高）、以及 **文档生成类技能的扩展**（ODT #486、排版 #514、DOCX 修复 #541）。社区贡献者来源分散，单个 PR/Issue 通常由不同作者驱动。

### openai/skills（Codex Skills）
该仓库本期 **PR 数量为 0**，所有活动集中在 Issue 区。讨论重心偏 **技能安装与发现基础设施**：安装器缺少更新/重装路径（[#127](https://github.com/openai/skills/issues/127)）、实验性技能不可达（[#153](https://github.com/openai/skills/issues/153)）、README 中存在失效引用（[#259](https://github.com/openai/skills/issues/259)）。另有对技能依赖管理（[#386](https://github.com/openai/skills/issues/386)）和元技能/编排层（[#491](https://github.com/openai/skills/issues/491)）的社区提案。整体呈现 **使用者在发现和安装环节遇到阻碍** 的特征。

---

## 3. 社区需求归类

以下基于两个仓库中出现的技能方向和诉求进行归纳，相近诉求合并记录，不推定趋势：

| 需求方向 | 出现次数 | 代表条目 | 说明 |
|----------|----------|----------|------|
| **技能评估与质量工具** | 4+ | Claude #556, #202, #83, #1367；Codex #121 | 覆盖评估脚本修复、skill-creator 风格改进、质量分析器、自我审计技能、linter/CLI 工具诉求 |
| **文档生成格式扩展** | 3 | Claude #514, #486, #541 | 排版质量控制、ODT 支持、DOCX 书签冲突修复，反映多格式办公文档生成的持续需求 |
| **技能安全与治理** | 3 | Claude #492, #412；Codex #491 | 信任边界、agent 治理模式、技能编排路由——安全/治理主题在两个仓库独立出现 |
| **技能安装与发现体验** | 4+ | Codex #127, #153, #259, #386；Claude #189, #228 | 安装器缺少更新路径、实验性技能不可达、插件内容重复、组织共享缺失 |
| **记忆/状态压缩** | 1 | Claude #1329 | 符号化压缩 agent 长对话状态，为单一独立提案 |
| **Windows 兼容性** | 2 | Claude #1298, #1099 | `run_eval.py` 在 Windows 上的流读取和子进程崩溃问题 |

> **观察**：技能安装/发现体验问题在两个仓库独立出现，Claude 侧偏向"共享与去重"（组织共享 #228、插件重复 #189），Codex 侧偏向"安装路径与依赖完整性"（更新路径 #127、实验性不可达 #153、功能依赖 #386）。两个方向共同指向技能分发生命周期管理尚不成熟。

---

## 4. 活跃待合并 Skills

以下 PR 目前均为 **OPEN 状态**，存在持续更新活动或关联高热度 Issue，但评论数据未获取到，无法判断讨论激烈程度：

- **[#1298](https://github.com/anthropics/skills/pull/1298) — fix(skill-creator): run_eval.py always reports 0% recall**
  解决被 10+ 次独立复现的评估脚本失效问题（对应 Issue #556），涉及 Windows 流读取、触发检测和并行 worker 修复。最新更新 2026-06-23。

- **[#514](https://github.com/anthropics/skills/pull/514) — Add document-typography skill**
  新增文档排版质量控制技能，防止孤行、寡行和编号不对齐。提出者认为这是 AI 生成文档的普遍问题且用户很少主动要求修复。

- **[#486](https://github.com/anthropics/skills/pull/486) — Add ODT skill**
  新增 OpenDocument 格式创建、模板填充和 ODT→HTML 转换技能。最新更新 2026-04-14。

- **[#541](https://github.com/anthropics/skills/pull/541) — fix(docx): prevent tracked change w:id collision**
  修复 DOCX 技能向含书签文档添加修订时，`w:id` 共享 ID 空间冲突导致的文档损坏。最新更新 2026-04-16。

- **[#1367](https://github.com/anthropics/skills/pull/1367) — feat(skills): add self-audit**
  新增 AI 输出交付前的自我审计技能，包含机械文件验证 + 四维度推理质量门禁。最新更新 2026-07-02。

- **[#83](https://github.com/anthropics/skills/pull/83) — Add skill-quality-analyzer and skill-security-analyzer**
  新增两个元技能到 marketplace：五维度质量分析和安全分析器。创建于 2025-11-06，至今未合并。

---

## 5. 跨仓库今日备注

**关注重点差异**：
- Claude 仓库本期主要流量集中在 **安全信任边界**（#492）和 **评估工具修复**（#556），同时有多个文档技能 PR 在排期。
- Codex 仓库本期无 PR 提交，Issue 区集中在 **安装基础设施** 的摩擦点（更新、发现、依赖声明）。

**贡献方式差异**：
- Claude 侧呈现明显的社区 PR 驱动特征，贡献者多样，涉及修复、新技能、元技能多个层面。
- Codex 侧本期以 Issue 提案和问题报告为主，缺少对应的 PR 实现。

**事实备注**：
1. Codex 的 `playwright-interactive` 技能依赖的 `js_repl` 功能已被标记为 `removed`（[#386](https://github.com/openai/skills/issues/386)），但技能未同步更新，说明 curated 技能的维护响应存在滞后。
2. Claude 的 `run_eval.py` 问题横跨至少 10 个独立复现报告和 2 个修复 PR（[#1298](https://github.com/anthropics/skills/pull/1298)、[#1099](https://github.com/anthropics/skills/pull/1099)），从 2026-05 持续到 2026-06，是本期跨度最长的技术问题。
3. 两个仓库均出现了"元技能"方向的社区提案（Claude 的质量/安全分析器 [#83](https://github.com/anthropics/skills/pull/83)、自我审计 [#1367](https://github.com/anthropics/skills/pull/1367)；Codex 的 Skill Orchestrator [#491](https://github.com/openai/skills/issues/491)），但均为独立贡献者的单点提案，暂不构成趋势。