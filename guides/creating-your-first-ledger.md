---
title: "Creating Your First Ledger"
summary: "Set up a new ledger, import your chart of accounts, and prepare opening balances."
tags: ["guides", "ledger", "setup"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/creating-your-first-ledger.md"
hero_image: "" # optional
status: "draft"
---

# Creating Your First Ledger

> Walkthrough for new users to create their first ledger, import accounts, and get ready for transactions.

## 1. Create a ledger
- **Where**: Dashboard → “Create ledger” (or “Add ledger” for members).
- **Fields**: Ledger name, base currency, fiscal start date.
- **Free vs member**: Free has 1 ledger; members can create up to their slot limit.
- **Screenshot**: ![Create ledger](./assets/createledger/create-ledger.png)

## 2. Import chart of accounts
- **Sources**: Upload CSV/Excel template or start from the default template.
- **Required columns**: Code, Name, Type; optional: Description, Parent, Currency (if multi-currency).
- **Validation**: System checks for duplicates and type mismatches before import.
- **Screenshot**: ![Import chart of accounts](./assets/createledger/import-coa.png)

## 3. Set opening balances
- **Where**: Ledger → Opening balances.
- **What to provide**: Account code, debit/credit amounts, opening date.
- **Checks**: Debits = Credits; multi-currency ledgers require currency per line.
- **Screenshot**: ![Opening balances](./assets/createledger/opening-balances.png)

## 4. Invite collaborators (optional)
- **Where**: Ledger → Members/Access.
- **Roles**: Viewer, Preparer, Approver (example).
- **Screenshot**: ![Invite members](./assets/createledger/invite-members.png)

## 5. Next steps
- Post your first journal entry or upload source documents for AI-assisted entries.
- (Optional) Configure automations and alerts.

---

> Next: posting journal entries with AI assistance (coming soon).
