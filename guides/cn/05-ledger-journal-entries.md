---
title: "5.账簿分录"
summary: "了解分录页面的用途、如何浏览/过账，并标注截图位置。"
slug: "/cn000005"
tags: ["guides", "ledger", "journals"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/05-ledger-journal-entries.md"
hero_image: "" # optional; 在此放主分录列表截图（例：../assets/ledger_journal_entries/hero.png）
status: "draft"
---

# 5.账簿分录

> 说明如何查看分录、用筛选快速定位，并在需要时录入新分录；同时标出截图应放的位置。

## 观看视频
<div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", borderRadius:"12px", boxShadow:"0 12px 30px rgba(0,0,0,0.25)"}}>
  <iframe
    src="https://www.youtube.com/embed/QdU2FWIDtIc"
    title="账簿分录演示"
    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
<p style={{marginTop:"0.6rem"}}>需要链接？<a href="https://www.youtube.com/watch?v=QdU2FWIDtIc">在 YouTube 打开</a>。</p>

## 1. 页面用途
- 在一个页面浏览所选账簿的全部分录记录。
- 支持查询筛选，并按时间区间查看分录数量与金额汇总。
- 页面顶部提供 “New Journal Entry” 与 “AI 辅助创建分录” 按钮，便于快速开启录入。
- 提供过账、编辑（如有权限）、预览等快捷操作，便于结账前检查。

<div align="center">
  <img src="/assets/ledger_journal_entries/hero.png" alt="Journal entries overview" />
</div>

## 2. 分录列表
- 主表显示日期、参考号、描述、借/贷合计、状态与附件标识。
- 行级操作：预览、编辑（如允许）、添加附件或过账。
- 对账/审批状态可见，方便识别待处理项。

## 3. 筛选与搜索
- 按日期范围、科目、状态（草稿/已发布）或标签筛选。
- 按参考号、描述或附件名搜索。
- 组合筛选以锁定月末待处理分录，或定位触达特定科目的分录。

## 4. 新建分录
- 点击 “New Journal Entry” 打开分录表单。
- 头部：日期、参考号、描述、币种，可选关联发票。
- 明细行：选择科目、录入借/贷金额、税额、附件；确认借贷平衡。
- 可保存为 Draft 供复核，或平衡后直接 Post。

<div align="center">
  <img src="/assets/ledger_journal_entries/create.png" alt="Create journal entry" />
</div>

## 5. 修改分录
- 行内的 Edit 图标按钮可打开分录编辑页面，查看并修改分录细节。
- 行内的 Delete 图标按钮用于删除分录（若已过账则需按规则限制）。
- 完成修改后可再次保存为草稿或直接过账。

<div align="center">
  <img src="/assets/ledger_journal_entries/edit.png" alt="编辑分录" />
</div>

## 6. 下一步
- 需要 AI 辅助起草？前往 [AI 辅助分录](./06-ai-journal-entry.md)。

---

> 下一篇：[AI 辅助分录](./06-ai-journal-entry.md)
