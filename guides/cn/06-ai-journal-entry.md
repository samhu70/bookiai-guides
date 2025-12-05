---
title: "AI 辅助分录"
summary: "了解 AI 分录流程、各步骤用途，并标注支持截图的位置。"
tags: ["guides","ledger","ai"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/cn/06-ai-journal-entry.md"
hero_image: "" # optional; 在此放 AI 流程主截图（例：../assets/ai_journal/hero.png）
status: "draft"
---

# AI 辅助分录

> 让 AI 读取单据、匹配科目，并草拟平衡分录。下面说明流程及截图放置位置。

<div align="center">
  <img src="../assets/ai_journal/hero.png" alt="AI 辅助分录主截图" />
</div>

## 1. 上传单据
- 支持 JPG/PNG/PDF 的发票、收据、账单、银行对账单。
- 在分录页点击 “Upload invoice/receipt”，可为一条分录附多份文件。
- AI 自动 OCR，提取供应商/日期/金额/税额，并将文件存入 Attachments 选项卡。

## 2. AI 识别与科目选择
- AI 将提取的数据映射到已有科目；如缺失，会建议创建带编码/名称/类型的新科目。
- 你可在创建前批准或调整建议。
- 汇总表展示提取字段、建议科目、金额与理由，确保可控。

<div align="center">
  <img src="../assets/ai_journal/recognition.png" alt="AI 识别结果" />
</div>

## 3. 引导式分录
- AI 预填借贷行；可编辑金额、拆分或追加分摊。
- 附件与行保持关联，方便审计追溯。
- 结果不理想可点 “Test recognition” 重跑 OCR/LLM。
- 满意后可 Post，或先保存为 Draft。


## 4. 下一步
- 在 [账簿分录](./05-ledger-journal-entries.md) 中查看已创建的分录。
- 在处理更多上传前，根据 AI 建议调整或扩展你的科目表。

---
