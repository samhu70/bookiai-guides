---
title: "AI-Assisted Journal Entry"
summary: "How the AI entry flow works, what each step is for, and where to place supporting screenshots."
tags: ["guides","ledger","ai"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/en/06-ai-journal-entry.md"
hero_image: "" # optional; place the main AI flow screenshot here (e.g., ../assets/ai_journal/hero.png)
status: "draft"
---

# AI-Assisted Journal Entry

> Let AI read your documents, pick accounts, and draft balanced entries. This section shows the flow and where screenshots belong.

<div align="center">
  <img src="../assets/ai_journal/hero.png" alt="AI-assisted journal entry hero" />
</div>

## 1. Upload documents
- Supported: JPG/PNG/PDF invoices, receipts, bills, bank statements.
- Use “Upload invoice/receipt” on the journal screen; you can attach multiple files.
- AI runs OCR, extracts supplier/date/amount/tax, and keeps files in the Attachments tab.

## 2. AI recognition & account selection
- AI maps extracted data to existing accounts; if missing, it suggests creating a new account with code/name/type.
- You approve or adjust the suggested account before it is added.
- A summary table shows extracted fields, proposed accounts, amounts, and rationale.

<div align="center">
  <img src="../assets/ai_journal/recognition.png" alt="AI recognition results" />
</div>

## 3. Guided entry creation
- AI pre-fills debit/credit lines; edit amounts, split lines, or add allocations.
- Attachments stay linked to each line for audit traceability.
- Use “Test recognition” to re-run OCR/LLM if the result needs improvement.
- Post the entry or save as Draft when ready.

## 4. Next steps
- Review created entries in [Ledger Journal Entries](./05-ledger-journal-entries.md).
- Adjust or expand your chart of accounts based on AI recommendations before processing more uploads.

---
