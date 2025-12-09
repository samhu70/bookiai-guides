---
title: "Ledger Overview"
summary: "See how the Ledger Overview page is organized, what each area is for, and where screenshots belong."
slug: "/en000004"
tags: ["guides", "ledger", "dashboard"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/en/04-ledger-overview.md"
hero_image: "" # optional; place the main overview screenshot here (e.g., ../assets/ledger_overview/hero.png)
status: "draft"
---

# Ledger Overview

> This page explains what you see on the Ledger Overview screen, why each section exists, and where to add UI screenshots.

## Watch the walkthrough
<div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", borderRadius:"12px", boxShadow:"0 12px 30px rgba(0,0,0,0.25)"}}>
  <iframe
    src="https://www.youtube.com/embed/S-uVDh8DZdk"
    title="Ledger Overview"
    style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
<p style={{marginTop:"0.6rem"}}>Prefer the link? <a href="https://www.youtube.com/watch?v=S-uVDh8DZdk">Open on YouTube</a>.</p>

## 1. What this page is for
- Give every user a single place to scan ledger status: balances, storage usage, alerts, and quick actions.
- Separate operational ledgers from the system wallet ledger so billing and usage are transparent.
- Surface AI shortcuts for people who want auto-suggestions without digging into setup menus.

<div align="center">
  <img src="/assets/ledger_overview/hero.png" alt="Ledger overview hero" />
</div>

## 2. Sidebar navigation
- Shows the main areas: Overview, Transactions, Reports, Settings.
- Indicates which ledger you’re viewing and lets you switch ledgers quickly (system ledger is labeled “System”).
- Filter toggle to hide read-only or system ledgers when you only want active, editable books.

Sidebar menu items:
- Ledger Overview (this page)
- Transactions (Journal Entries List)
- Chart of Accounts
- Reports (not yet implemented)
- Settings (ledger-level settings)

## 3. Page header and company intro
- The top bar shows the ledger name on the left and a storage badge on the right (e.g., “620 MB of 1 GB used”).
- Storage may link to add-ons or expansion when you approach the cap.
- Beneath the header is a company intro card summarizing the business description provided during ledger setup.

## 4. Ledger Summary Card
- Cards are grouped into Balance Sheet (Assets / Liabilities / Equity) and P&L (Income / Expenses) so you can scan financial position vs. performance.
- Each card shows the ledger name and current total.
- Quick actions: open ledger, view AI overview, or jump to recent entries.

## 5. Account balance tables
- Below the cards, grouped tables list account codes (e.g., Cash 1010, Revenue 5000) with current balances under the right category.
- Expand/collapse arrows reveal child accounts; clicking a row opens that account’s detail view.
- Use this area to compare key balances at a glance, such as Accounts Receivable vs. Sales.

## 6. Next steps
- Go to “Ledger Journal Entries” to post or review transactions.
- Use the AI panel when you want a fresh Chart of Accounts recommendation or automated draft entries.

---

> Next: [Ledger Journal Entries](./05-ledger-journal-entries.md)
