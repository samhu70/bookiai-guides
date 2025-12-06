---
title: "Accounts & Access: From Sign-up to Billing"
summary: "Sign-up, login, email verification, password management, free quotas, upgrades/expansions, and downgrades."
tags: ["guides", "accounts", "billing"]
category: "guides"
github_url: "https://github.com/samhu70/bookiai-guides/blob/main/guides/en/02-accounts-and-access.md"
hero_image: "" # optional, use object storage URL if available
status: "draft"
---

# Accounts & Access: From Sign-up to Billing

> For first-time BookiAI users: how to create an account, log in, verify email, manage passwords, understand free quotas, when to upgrade/expand, and how to downgrade/cancel.

## Watch the walkthrough
- Video overview: [Accounts & Access (YouTube)](https://youtu.be/vSIR0BobKBs)

## 1. Sign-up and Login
- **Sign-up URL**: `https://bookiai.com.au/register` (or your regional domain).
<div align="center">
  <img src="/assets/account/signup.png" alt="Sign-up" />
</div>
- **Required fields**:
  - Email (must be valid)
  - Password (min 8 characters, must include upper/lowercase letters and a number)
  - Confirm Password (must match)
  - Full Name (optional; saved if provided)
- **Email verification**: Optional after sign-up. You can verify later in the user/profile center; the verification email can be resent from there.
- **Login URL**: `https://bookiai.com.au/login`.
<div align="center">
  <img src="/assets/account/login.png" alt="Login" />
</div>
- **Login methods**: Email + password. SSO currently supported: Google (follow the login page prompt).
- **Common errors**:
  - “Invalid credentials” → check email spelling and case; reset password if needed.
  - No verification email → check spam or whitelist `bookiai.com.au`; click “Resend verification email” on the login page.



## 5. Profile (free vs member) & why billing exists
- **Profile for all users**: Update name, avatar, password/security; view email verification status.
- **Free vs member mode**:
  - Free: 1 ledger @ 100 MB, basic features.
  - Member: 5 ledgers @ 1 GB each + membership ledger; advanced features and higher quotas.
  <div align="center">
    <img src="/assets/account/profile-free.png" alt="Profile (free)" />
  </div>
- **Upgrade/expand**:
  - Go to Billing/Subscription from Profile to upgrade membership.
  - Buy extra ledger slots if you need more than the included count.
  - Buy extra storage per ledger if you are near the cap.
- **Member controls** (Profile page buttons):
  - **Add Ledger Slots**: purchase additional ledger capacity beyond the included quota.
  - **Add Storage**: purchase extra storage for ledgers when approaching the cap.
  - **Manage in Stripe portal**: open the Stripe customer portal to update payment methods, view/download invoices, adjust plans, or manage cancellations.
- **Why fees**: Membership/ledger fees cover cloud costs (Google storage for ledger files, network bandwidth, and related services) and basic operations. The platform was built entirely with AI tools (OpenAI Codex, Stitch, Gemini, etc.), and we do not charge to recoup development; your payment primarily covers your own cloud usage.
- **Screenshots**: 
  <div align="center">
    <img src="/assets/account/profile-member.png" alt="Profile (member)" />
  </div>

## 6. AI Assistant (in app)
- **What it does**: Helps draft journal entries, classify transactions, and answer ledger questions using your configured AI model.
- **Entry points**: Available within ledgers (tasks/entries) and via the AI panel; uses your default model from AI Settings.
- **Permissions**: Respects your account/ledger access; outputs stay within your tenant.
- **Screenshot**:
  <div align="center">
    <img src="/assets/account/ai-assistant.png" alt="AI assistant" />
  </div>

## 7. Email Verification & Security
- **Immediate use**: After registering you become a free user and can log in/use the app right away.
- **How to verify (optional)**: In the user/profile center, resend the verification email and complete it from there; useful for enabling email-based notifications and strengthening account trust.
- **Security tips**: Even without mandatory verification, keep a strong password and enable MFA if available; never share your account.

> Screenshot:
> <div align="center">
>   <img src="/assets/account/email-verification.png" alt="Email verification" />
> </div>

## 8. Password Management
- **Change password**: In “Profile / Security”, provide current password and set a new one.
- **Forgot password**: On the login page click “Forgot password” and reset via email; check spam if you don’t see it.
- **Best practices**: Use a password manager; rotate periodically; avoid reuse; enable MFA if supported.

## 9. Accounts & Quotas (Free vs Paid)
- **Free tier** (example; update with latest pricing):
  - Ledgers: 1
  - Storage: 100 MB
  - Members: 1–2 (self/small team trial)
  - Features: core journals, limited AI suggestions, some automations disabled
  - Storage use: documents and images such as vouchers, invoices, receipts.
- **Paid tiers add**:
  - More ledgers and storage (plus add-on expansion)
  - Advanced AI/automation
  - Team collaboration (multi-user, approvals, comments)
  - Priority support and audit logs
- **When to upgrade**:
  - Need 2+ ledgers (multi-entity / multi-currency)
  - Storage near the cap; attachments blocked or slowed
  - Team collaboration, approvals, and audits required
  - Want advanced AI/automation and external reporting

> Table/visual:
> <div align="center">
>   <img src="/assets/account/plan-comparison.png" alt="Plan comparison" />
> </div>

## 10. Upgrades & Expansions
- **Where**: `Billing / Subscription` inside the app; pick a paid plan or customize add-ons.
- **Add-ons**:
  - Extra ledgers (per-ledger pricing)
  - Extra storage (per GB)
- **Billing & invoices**: Credit card/invoicing supported; invoices downloadable from Billing history.
- **Effective time**: Upgrades/expansions typically apply immediately; proration follows the billing page rules.

## 11. Downgrade / Cancel
- **Where**: `Billing / Subscription` → Manage → Downgrade/Cancel.
- **Effective time**: Usually end-of-current-cycle; paid benefits remain until then.
- **Data/limits after downgrade**:
  - You must choose one ledger to keep active after downgrade; other ledgers become read-only (no new entries).
  - Storage limit reverts to 100 MB for the remaining ledger; existing files remain accessible but no new uploads once over the cap.
  - If ledgers/storage exceed new limits, use the grace period to archive/export and reduce usage.
  - Export key data/attachments before downgrading.
- **Come back anytime**: You can re-upgrade later; data stays unless explicitly purged.

## 12. Quick self-check
- [ ] Email verified; can log in without prompts.
- [ ] Password updated; MFA enabled if available.
- [ ] Aware of current ledger/storage usage vs quota.
- [ ] Know where to upgrade/expand and how billing works.
- [ ] Understand downgrade timing and data/limit implications.

---

> Next: [Creating Your First Ledger](./03-creating-your-first-ledger.md) — create a ledger, import chart of accounts, set opening balances.
