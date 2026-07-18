# Skills 生态热点 2026-07-18

> 生成时间: 2026-07-18 00:22 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

## 跨仓库 Skills 生态热点报告
**覆盖仓库：** `anthropics/skills` · `openai/skills`
**统计周期内更新：** 2026‑07‑18 纳入 100 Issues / 50 PRs

---

### 1. 全生态热门 Skills / 技能相关议题
按评论数与 👍 反应综合排序，列出跨仓库关注度最高的项目（均为 Issue，PR 侧无显著互动数据）。

1.  **Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse**
    → `anthropics/skills` [#492](https://github.com/anthropics/skills/issues/492) — 34 评论 · 2 👍
2.  **Enable org-wide skill sharing in Claude.ai**
    → `anthropics/skills` [#228](https://github.com/anthropics/skills/issues/228) — 14 评论 · 7 👍
3.  **run_eval.py: claude -p never triggers skills/commands (0% trigger rate)**
    → `anthropics/skills` [#556](https://github.com/anthropics/skills/issues/556) — 12 评论 · 7 👍
4.  **All my skills have disappeared and now i get errors**
    → `anthropics/skills` [#62](https://github.com/anthropics/skills/issues/62) — 10 评论 · 2 👍
5.  **Proposing compact-memory skill (symbolic notation for compact agent state)**
    → `anthropics/skills` [#1329](https://github.com/anthropics/skills/issues/1329) — 9 评论
6.  **document-skills and example-skills plugins install identical content, causing duplicate skills**
    → `anthropics/skills` [#189](https://github.com/anthropics/skills/issues/189) — 6 评论 · 9 👍
7.  **skill-creator should be updated to best practice**
    → `anthropics/skills` [#202](https://github.com/anthropics/skills/issues/202) — 8 评论 · 1 👍
8.  **playwright-interactive skill still depends on removed js_repl feature**
    → `openai/skills` [#386](https://github.com/openai/skills/issues/386) — 4 评论 · 4 👍
9.  **Experimental skills not found**
    → `openai/skills` [#153](https://github.com/openai/skills/issues/153) — 4 评论 · 3 👍
10. **Skill Orchestrator: meta-skill for deduplicating and routing large Codex skill catalogs**
    → `openai/skills` [#491](https://github.com/openai/skills/issues/491) — 1 评论 · 3 👍

> 注：以上议题热度基于评论数与表情反应；PR 侧无可见互动数据，故未列入。

---

### 2. 各仓库亮点

**anthropics/skills（Claude Skills）**
社区贡献极度活跃，50 条 PR 覆盖新技能提议、bug 修复和工具改进。讨论热点集中在技能信任与安全（#492）、企业内部共享（#228）及技能评估工具缺陷（#556、#202）。Issues 中反映的技能重复安装（#189）、技能突然消失（#62）等问题也获得较高关注，说明用户对技能可靠性和管理功能的期待强烈。

**openai/skills（Codex Skills）**
本期无社区 PR，Issues 主要围绕技能路径错误、依赖失效等可用性问题。`playwright-interactive` 因 CLi 移除 `js_repl` 而不可用（#386），实验性技能路径模糊（#153、#259）以及无更新安装路径（#127）持续困扰用户。同时出现了对技能开发工具（linter， #121）和编排层（Skill Orchestrator， #491）的初步需求，但整体维护互动较少。

---

### 3. 社区需求归类

多个仓库出现重叠诉求，汇总如下：

- **安全与信任**
  Claude 侧强烈关注社区技能伪装成官方命名空间的安全风险（#492），并有代理治理技能提议（#412）。

- **技能评估与质量保障**
  Claude 的 `run_eval.py` 持续不可用催生多次修复尝试（#556、#1298、#202）；另有社区提交 `skill-quality-analyzer`（#83）。Codex 侧则呼吁 linter/CLI 工具辅助技能编写（#121）。

- **技能去重与编排**
  Claude 的 `document-skills` 与 `example-skills` 重复安装（#189），Codex 出现“Skill Orchestrator”提议（#491），说明技能数量增长后，用户面临管理冲突和冗余的痛点。

- **文档与格式处理技能**
  多个 PR 试图扩展文档能力：document-typography（#514）、ODT 技能（#486）、前端设计技能优化（#210）以及 DOCX 跟踪修订修复（#541）。

- **技能分发与发现**
  组织级共享缺失（Claude #228）、安装后无更新/重装路径（Codex #127）、实验性技能路径混乱（Codex #153）等指向分发机制不够成熟。

---

### 4. 活跃待合并 Skills

由于本期 PR 的评论数据缺失，无法直接判定讨论活跃度。以下列出处于 OPEN 状态、并试图解决高频问题或引入新能力的 PR，供跟踪参考：

- **[#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall**
  尝试解决评估工具长期返回 0% 召回率的根因，包括 Windows 兼容修复、触发检测和并行 worker 调整。直接影响技能描述优化循环的可靠性。

- **[#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill**
  针对 AI 生成文档的排版质量控制（孤行、寡段、编号对齐）。

- **[#1367](https://github.com/anthropics/skills/pull/1367) feat(skills): add self-audit – mechanical verification + reasoning quality gate**
  在交付前对输出进行文件存在性机械验证与四维度推理审计，通用型技能。

- **[#210](https://github.com/anthropics/skills/pull/210) Improve frontend-design skill clarity and actionability**
  重写前端设计技能，使指令更具体、可操作。

- **[#83](https://github.com/anthropics/skills/pull/83) Add skill-quality-analyzer and skill-security-analyzer**
  两个元技能，分别用于五维度质量分析和安全审查。

以上 PR 均为未合并状态，未发现维护者明确回应或时间线信息。

---

### 5. 跨仓库今日备注

- **关注重点差异**
  Claude 社区围绕信任边界、评估工具可靠性和组织共享展开高频讨论，贡献形式包含大量 PR 与 Issue 提案。Codex 侧则更多是依赖失效和路径暴露的可用性问题，贡献以 Issue 报告为主。

- **共同的方向迹象**
  两个仓库均出现“去重/编排”和“技能开发辅助工具”的需求，但 Claude 侧已有对应的 PR（quality-analyzer），Codex 侧尚停留在 Issue 讨论阶段。

**事实备注：**
1.  Claude Skills 的 `run_eval.py` 至少从 2026‑03 起就被报告完全无法触发技能评估（#556），相关 PR #1298 仍在开放，评估优化闭环暂不可用。
2.  Codex 的 `playwright-interactive` 技能因 `js_repl` 特性在 codex-cli 0.128.0 中被标记为 `removed` 而彻底失效（#386），揭示了技能与 CLI 版本强耦合的风险。
3.  社区技能冒充 `anthropic/` 命名空间的安全议题（#492）截至 2026‑07‑02 仍有新评论，反映用户对技能信任模型的高度敏感。