# Skills 生态热点 2026-07-17

> 生成时间: 2026-07-17 00:24 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/skills)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/skills/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

## 跨仓库 Skills 生态热点报告
**日期：2026-07-17**

### 1. 全生态热门 Skills / Skill 议题
按评论与点赞综合热度排序，列出 10 个最受关注的议题（含 Issue 及关联度极高的 PR）。

1. **Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse**
   [anthropics/skills#492](https://github.com/anthropics/skills/issues/492) | 💬 34 👍 2
   社区技能在 `anthropic/` 命名空间分发，导致用户误以为官方技能而赋予过高权限，构成信任边界漏洞。

2. **Enable org-wide skill sharing in Claude.ai**
   [anthropics/skills#228](https://github.com/anthropics/skills/issues/228) | 💬 14 👍 7
   用户强烈要求组织内直接共享技能，避免通过文件传输手动安装。

3. **run_eval.py: claude -p never triggers skills/commands (0% trigger rate across all queries)**
   [anthropics/skills#556](https://github.com/anthropics/skills/issues/556) | 💬 12 👍 7
   技能评估脚本无法触发任何技能，导致描述优化循环失效。

4. **document-skills and example-skills plugins install identical content, causing duplicate skills**
   [anthropics/skills#189](https://github.com/anthropics/skills/issues/189) | 💬 6 👍 9
   两个官方插件安装相同技能内容，在 Claude Code 中造成重复与上下文浪费。

5. **All my skills have disappeared and now I get errors**
   [anthropics/skills#62](https://github.com/anthropics/skills/issues/62) | 💬 10 👍 2
   用户创建的自定义技能突然全部丢失，可能与文件重命名有关。

6. **Proposing a second skill: compact-memory (symbolic notation for compact agent state)**
   [anthropics/skills#1329](https://github.com/anthropics/skills/issues/1329) | 💬 9 👍 0
   提出“紧凑记忆”技能，用符号表示替代冗长自然语言以节省长期代理的上下文。

7. **skill-creator should be updated to best practice**
   [anthropics/skills#202](https://github.com/anthropics/skills/issues/202) (CLOSED) | 💬 8 👍 1
   指出 skill-creator 更像人类文档而非操作技能，令牌效率低，需按最佳实践重构。

8. **Skill proposal: agent-governance — safety patterns for AI agent systems**
   [anthropics/skills#412](https://github.com/anthropics/skills/issues/412) (CLOSED) | 💬 6 👍 0
   建议新增代理治理技能，涵盖策略执行、可信度评分、审计跟踪等。

9. **playwright-interactive skill still depends on removed js_repl feature**
   [openai/skills#386](https://github.com/openai/skills/issues/386) (CLOSED) | 💬 4 👍 4
   Codex 的 `playwright-interactive` 技能引用已移除的 `js_repl` 功能，导致不可用。

10. **Experimental skills not found**
    [openai/skills#153](https://github.com/openai/skills/issues/153) | 💬 4 👍 3
    用户无法找到实验性技能，技能安装器对实验路径引用有误。

### 2. 各仓库亮点
**Claude Skills (anthropics/skills)**
当前生态焦点集中在技能评估工具链的可用性修复（`run_eval.py` 触发率为零，多个 PR 试图解决）、安全与分发治理（信任边界、组织内共享、重复安装）。社区贡献活跃，既涌现出文档排版（ODT/PDF）、自我审计、紧凑记忆等新技能提案，也持续报出技能消失、元技能规范等长期维护问题。Issue 讨论热度高，但大量 PR 处于长期 Open 状态，合并进度偏慢。

**Codex Skills (openai/skills)**
重点停留在技能兼容性维护与安装体验修补：`playwright-interactive` 因依赖移除而失效，技能安装器缺乏更新/重装路径，实验性技能路径引用混乱。社区提出 Skill Orchestrator 等元技能构想，但整体活跃度较低，无外部 PR，仅以 Issue 反馈 bug 和需求，维护响应可见但规模较小。

### 3. 社区需求归类
综合两个仓库，浮现若干相似诉求，按方向合并如下：

- **技能评估与质量保障**
  `run_eval.py` 无法工作（Claude #556、PR #1298 #1099），skill-creator 需按最佳实践重写（Claude #202），YAML 特殊字符校验（Claude PR #539），Skill 质量/安全分析器（Claude #83），自我审计技能（Claude PR #1367）。Codex 则出现安装无更新路径问题（#127），以及技能依赖移除导致损坏（#386）。

- **安全与分发治理**
  社区技能冒充官方命名空间的风险（Claude #492），组织内技能共享（Claude #228），重复安装（Claude #189），技能文件丢失/管理混乱（Claude #62）。Codex 侧出现实验技能无法发现（#153），技能目录重叠（#491）。

- **文档与排版技能**
  提出 `document-typography` 自动排版（Claude PR #514），ODT 模板填充与转换（Claude PR #486），PDF 文档大小写链接修复（Claude PR #538），以及跟踪修订 ID 冲突修复（Claude PR #541）。

- **元技能与编排代理**
  紧凑记忆符号化（Claude #1329），代理治理（Claude #412），Skill Orchestrator 路由层（Codex #491），自我审计（Claude PR #1367），前端设计技能清晰化（Claude PR #210）。这些试图提升技能本身或代理行为的质量、效率与安全。

- **跨仓库共性痛点**
  技能重复/冲突问题在 Claude（#189）和 Codex（#491）分别出现；技能消失或不可用反馈在两个仓库均有体现；对技能安装、发现路径的改进需求持续存在。

### 4. 活跃待合并 Skills
以下 PR 均处于 Open 状态，虽然直接评论数未记录，但从关联 Issue 热度和近期更新可见其活跃度与实用价值：

- **fix(skill-creator): run_eval.py always reports 0% recall** [PR #1298](https://github.com/anthropics/skills/pull/1298)
  直接解决 #556，修正评估工件安装、Windows 流读取、触发检测等，10+ 次独立复现报告，是当前质量保障的关键修复。

- **Add document-typography skill** [PR #514](https://github.com/anthropics/skills/pull/514)
  新增技能，预防 AI 生成文档中的孤行、寡行、编号错位等排版问题，用户需求明确。

- **Add ODT skill — OpenDocument text creation and template filling** [PR #486](https://github.com/anthropics/skills/pull/486)
  提供 ODF 文档创建、模板填充与 HTML 转换，填补开源文档格式技能空白。

- **feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate** [PR #1367](https://github.com/anthropics/skills/pull/1367)
  新增自我审计技能，先机械验证文件再按严重性进行四维度推理审计，v1.3.0 版本，具有跨项目通用性。

- **Multiple fixes by Lubrsy706**：
  [PR #538](https://github.com/anthropics/skills/pull/538) 修复 PDF 技能大小写引用，[PR #539](https://github.com/anthropics/skills/pull/539) 增加描述字段 YAML 预检，[PR #541](https://github.com/anthropics/skills/p