# Skills 生态热点 2026-08-18

> 生成时间: 2026-08-18 00:42 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills 社区热点报告（2026-08-18）

## 1. 热门 Skills 排行

以下列出评论/关注度较高的 5 个 PR，按当前数据呈现。

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
- **功能**：修复 `run_eval.py` 中召回率始终为 0% 的 bug，涉及 `eval` 技能安装、Windows 流读取、触发检测和并行 worker 问题。
- **讨论热点**：该 bug 已有 10+ 独立复现报告（关联 #556），优化循环实际在基于噪声运行，影响所有消费 `run_eval.py` 信号的脚本。
- **状态**：OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/1298

**#514 — Add document-typography skill**
- **功能**：新增文档排版技能，防止 AI 生成文档中的孤词换行、寡妇段落、编号错位等常见排版问题。
- **讨论热点**：这些排版问题影响所有 Claude 生成文档，用户很少主动要求但实际需要。
- **状态**：OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/514

**#538 — fix(pdf): correct case-sensitive file references in SKILL.md**
- **功能**：修复 PDF 技能中 8 处大小写不匹配的文件引用（`REFERENCE.md` → `reference.md` 等）。
- **讨论热点**：大小写敏感文件系统上引用错误导致技能失效，属实际可用性问题。
- **状态**：OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/538

**#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks**
- **功能**：修复 DOCX 技能添加修订时与已有书签的 `w:id` 冲突，防止文档损坏。
- **讨论热点**：根因是 OOXML 中 `w:id` 是跨书签、修订、评论的共享 ID 空间，硬编码低 ID 易冲突。
- **状态**：OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/541

**#1099 — skill-creator: fix run_eval.py crash on Windows when reading from subprocess pipe**
- **功能**：修复 Windows 上 `run_eval.py` 从子进程管道读取时崩溃，导致每次查询记录为“未触发”，优化循环报告 `precision=100% recall=0%`。
- **讨论热点**：Windows 用户完全无法使用该脚本，触发检测机制失效。
- **状态**：OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/1099

## 2. 社区需求归类

从 Issues 数据中归类社区提出的新 Skill 方向，以下为明确提案类 Issue（非 bug 报告或功能咨询）：

**紧凑记忆技能（compact-memory）**
- **描述**：为长运行代理提供符号化表示法，替代长篇幅的 note 和记忆，减少上下文占用。
- **来源**：Issue #1329
- 链接：https://github.com/anthropics/skills/issues/1329

**代理治理技能（agent-governance）**
- **描述**：涵盖策略执行、威胁检测、信任评分、审计追踪等 AI 代理治理模式。
- **来源**：Issue #412（已关闭，但有 6 条评论，属社区讨论）
- 链接：https://github.com/anthropics/skills/issues/412

**推理质量门控管道（Reasoning Quality Gate Pipeline）**
- **描述**：三阶段流程：任务前校准 → 对抗性审查 → 交付验证，覆盖全会话生命周期的质量把关。
- **来源**：Issue #1385（4 条评论，提案状态）
- 链接：https://github.com/anthropics/skills/issues/1385

**说明**：以上三个方向均来自社区提案，但尚未有对应 PR 实现。其他 Issue 主要涉及安全信任边界（#492）、组织共享功能（#228）、技能重复安装（#189）等非新技能方向的需求。

## 3. 活跃待合并 Skills

以下为评论活跃但尚未合并的 PR，当前讨论焦点和状态如下：

**#1298**（前面已列）— 修复 run_eval.py 召回率 0% 问题，讨论集中在触发检测机制失效和 Windows 兼容性。关联 Issue #556 有 12 条评论。当前状态 OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/1298

**#514**（前面已列）— 文档排版技能，讨论集中在问题普遍性。当前状态 OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/514

**#538**（前面已列）— PDF 大小写引用修复，单次修改 8 处引用。当前状态 OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/538

**#541**（前面已列）— DOCX 修订 ID 冲突修复，硬编码 ID 是根本原因。当前状态 OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/541

**#1099**（前面已列）— Windows 子进程崩溃修复，影响所有 Windows 用户。当前状态 OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/1099

**#1050** — skill-creator Windows 子进程 + 编码修复。两个 1 行修复：`claude.cmd` 的 `PATHEXT` 问题和编码处理。讨论集中在 Windows 11 兼容性。当前状态 OPEN，未合并。
- 链接：https://github.com/anthropics/skills/pull/1050

**说明**：以上 PR 均处于 OPEN 状态，无合并时间线可预测。

## 4. 今日记录备注

1. **run_eval.py 的 bug 为当前最高频问题**：涉及至少 3 个 PR（#1298、#1099