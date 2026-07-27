# Skills 生态热点 2026-07-27

> 生成时间: 2026-07-27 00:26 UTC | 覆盖仓库: 2 个

数据来源:
- [Claude Skills](https://github.com/anthropics/skills)
- [Codex Skills](https://github.com/openai/plugins)

---

⚠️ 一个或多个 skills 仓库抓取失败，以下内容基于部分数据或缺失数据。

> Codex Skills: PR fetch failed: GitHub API error 404 (https://api.github.com/repos/openai/plugins/pulls): {"message":"Not Found","documentation_url":"https://docs.github.com/rest/pulls/pulls#list-pull-requests","status":"404"}

# Skills 社区热点报告

**数据截止**：2026-07-27
**数据来源**：github.com/anthropics/skills 的 50 条 PR 和 50 条 Issue
**分析范围**：展示前 20 条 PR 与前 15 条 Issue 的关键信息

---

## 1. 热门 Skills 排行

以下按社区讨论集中度（涉及的相关 Issue 数量、多 PR 交叉引用、Issue 评论数）选出 6 个当前最受关注的技能方向。

| 技能方向 | 代表 PR | 功能摘要 | 讨论热点 | 状态 |
|---------|---------|---------|---------|------|
| **skill-creator 评估修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 始终返回 0% 召回率的问题，使描述优化循环能正常工作 | 该问题在 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 条评论）、[#1169](https://github.com/anthropics/skills/issues/1169)（3 条评论）及多个 PR 中被反复报告，根因涉及触发检测、Windows 子进程、编码等，多个贡献者独立修复但未合并 | 多个相关 PR 仍为 Open（#1298、#1099、#1050、#1323），处于活跃讨论中，但尚未形成统一合并方案 |
| **文档排版质量** | [#514](https://github.com/anthropics/skills/pull/514) | 为 AI 生成文档提供排版质量控制：防止孤行、寡妇段落、编号错位 | 排版问题影响所有生成文档，用户通常不会主动要求，但技能可自动预防；讨论集中在是否应作为独立技能还是集成到现有文档技能中 | Open，最后一次更新于 2026-03-13 |
| **ODT 文档创建与模板填充** | [#486](https://github.com/anthropics/skills/pull/486) | 支持 OpenDocument 格式（.odt/.ods）的创建、读取、转换和模板填充 | 触发词覆盖 ODF、LibreOffice 等，社区对开源文档格式的支持需求明确；评论中可能涉及HTML解析的边界 | Open，更新于 2026-04-14 |
| **前端设计技能改进** | [#210](https://github.com/anthropics/skills/pull/210) | 重写前端设计技能，提升指令清晰度、可操作性和内部一致性 | 社区关注技能是否真正可被 Claude 在单次对话中执行，避免过于模糊的指导 | Open，更新于 2026-03-07 |
| **文档格式修复（DOCX 书签冲突）** | [#541](https://github.com/anthropics/skills/pull/541) | 修复 DOCX 技能添加修订时因 `w:id` 与现有书签冲突导致文档损坏的问题 | 该问题涉及 OOXML 共享 ID 空间，修复要求注意硬编码 ID 的风险；与 [#538](https://github.com/anthropics/skills/pull/538)（大小写引用修复）一起构成文档技能稳定性的系列改进 | Open，更新于 2026-04-16 |
| **色彩专家技能** | [#1302](https://github.com/anthropics/skills/pull/1302) | 提供色彩命名系统、色彩空间选择指南（OKLCH/OKLAB/CAM16）等综合色彩知识 | 封装了多种色彩标准，适合任何涉及颜色的任务，近期有更新 | Open，更新于 2026-07-21 |

---

## 2. 社区需求归类

从 Issue 中提炼出社区明确提出的新技能方向，按需求类型分组。每条均附 Issue 链接，仅反映已表达的需求，不推测趋势。

**文档与效率工具**
- **紧凑记忆**（[#1329](https://github.com/anthropics/skills/issues/1329)）：用符号化记号压缩长期代理的记忆，降低上下文占用。
- **推理质量门控流水线**（[#1385](https://github.com/anthropics/skills/issues/1385)）：任务前校准 → 对抗性审查 → 交付验证的三阶段质量门控，已有对应的 PR [#1367](https://github.com/anthropics/skills/pull/1367)。

**安全与治理**
- **代理治理**（[#412](https://github.com/anthropics/skills/issues/412)，已关闭）：提出安全模式（策略执行、威胁检测、信任评分、审计追踪），社区讨论集中在技能是否应内置此类约束。
- **信任边界滥用**（[#492](https://github.com/anthropics/skills/issues/492)，43 条评论）：社区技能以 `anthropic/` 命名空间分发，可能被误认为官方技能，引发安全讨论。

**企业集成**
- **组织内技能共享**（[#228](https://github.com/anthropics/skills/issues/228)，16 条评论）：要求在 Claude.ai 中直接共享技能给组织成员，避免手动下载和分发。
- **SharePoint Online 集成**（[#1175](https://github.com/anthropics/skills/issues/1175)，已关闭）：在 SKILL.md 中编写访问控制逻辑以处理 SPO 文档，引发安全与上下文窗口的讨论。

**跨平台与协议**
- **作为 MCP 暴露技能**（[#16](https://github.com/anthropics/skills/issues/16)）：建议将技能封装为 MCP 工具，以标准化接口对外提供服务。
- **Bedrock 支持**（[#29](https://github.com/anthropics/skills/issues/29)）：询问如何在 AWS Bedrock 上使用这些技能。

**其他新增技能**（来自 PR 但未合并，反映社区贡献方向）
- **测试模式**（[#723](https://github.com/anthropics/skills/pull/723)）：覆盖单元测试、组件测试、测试哲学等全栈测试指导。
- **Pyxel 复古游戏开发**（[#525](https://github.com/anthropics/skills/pull/525)）：基于 Pyxel 引擎的 Python 像素游戏开发流程。
- **SAP 预测分析**（[#181](https://github.com/anthropics/skills/pull/181)）：使用 SAP-RPT-1-OSS 模型进行表格数据预测。

---

## 3. 活跃待合并 Skills

选取近期有更新、且围绕同一问题有多个 PR 或 Issue 交织讨论的未合并 PR，说明当前状态。

- **skill-creator 评估管线修复系列**
  涉及 PR：[#1298](https://github.com/anthropics/skills/pull/1298)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#1323](https://github.com/anthropics/skills/pull/1323) 等。
  核心问题：`run_eval.py` 在 Windows 和 Linux 上均报告 0% 召回率，导致描述优化完全失效。根本原因包括触发检测逻辑错误、子进程调用不兼容 Windows、编码问题。多个贡献者从不同角度提供修复，但目前没有合并，社区仍在讨论最稳健的统一方案。相关 Issue [#556](https://github.com/anthropics/skills/issues/556) 和 [#1169](https://github.com/anthropics/skills/issues/1169) 持续有用户复现报告。

- **YAML 与 UTF-8 校验增强**
  涉及 PR：[#361](https://github.com/anthropics/skills/pull/361)、[#539](https://github.com/anthropics/skills/pull/539)、[#362](https://github.com/anthropics/skills/pull/362)。
  增加对 `description` 字段中未加引号 YAML 特殊字符的检测，修复多字节字符导致的 UTF-8 panic。这些修复能避免技能安装时的静默错误，但因与评估修复存在依赖或交叉，仍处于等待状态。

- **彩色专家技能**（[#1302](https://github.com/anthropics/skills/pull/1302)）
  封装了色彩命名、空间选择等专业知识，最近更新于 7 月 21 日，表明社区仍在维护，但尚未合并。

- **Pyxel 游戏开发技能**（[#525](https://github.com/anthropics/skills/pull/525)）
  由 Pyxel MCP 作者提交，提供完整的编写-运行-检查-迭代工作流，更新至 7 月 15 日，状态活跃。

---

## 4. 今日记录备注

1. **skill-creator 评估管线是当前最突出的技术问题**：10 个以上独立复现报告（Issue [#556](https://github.com/anthropics/skills/issues/556)）和至少 4 个修复 PR 指向同一个 0% 召回率缺陷，该问题已持续数月，严重影响技能描述优化的可用性，是社区贡献者投入最多的领域。
2. **安全与信任边界成为高讨论量话题**：Issue [#492](https://github.com/anthropics/skills/issues/492)（社区技能命名空间冒充官方）获得 43 条评论，是本期数据中评论数最高的条目，反映出用户对技能分发机制的信任担忧。
3. **新技能提案种类丰富，但多数 PR 未合并**：本次分析的 50 条 PR 中包含文档排版、游戏开发、测试模式、企业预测等多个新技能，但目前均处于 Open 状态，暂无明确的合并时间表，社区贡献活跃但整合速度尚未体现。