---
title: LLM Agents in Real Business Systems
sidebar_label: Overview
---

# LLM Agents in Real Business Systems

This series documents how **BookiAI** designs, governs, and gradually
automates **LLM agents inside a real accounting system**.

Unlike demo-style AI agents or prompt-based automations, this series
focuses on **responsibility, auditability, and system-level control**.

LLMs are powerful at generating suggestions.  
Business systems, however, must own decisions.

This series explains how we bridge that gap.

---

## Why this series exists

Most AI agent examples assume:
- The model can decide
- The system should trust the output
- Users will correct mistakes if something goes wrong

That approach breaks down immediately in **financial and regulated systems**.

In BookiAI:
- Every write has side effects
- Every decision must be explainable
- Automation must be earned, not assumed

This series captures the architectural thinking behind that approach.

---

## What you will learn

By following this series, you will learn:

- Why LLMs should **not** directly write business records
- How to separate **generation, review, and execution**
- How to design object-based contracts such as  
  *Proposal → Review Report → Decision*
- How to build a **Controller** that governs AI behavior
- How to start with **manual execution** and safely evolve toward automation
- How prompts become **configuration**, not business logic

---

## Who this is for

This series is written for:

- Founders building AI-native products
- Engineers integrating LLMs into real systems
- Architects designing controllable AI workflows
- Anyone interested in **AI governance beyond demos**

No accounting background is required, but familiarity with
software systems and APIs will help.

---

## Recommended reading order

1. [Introduction](./00-introduction.md)
2. [Why LLMs cannot write ledgers directly](./01-why-llm-cannot-write-ledgers.md)
3. [Generate / Review / Controller model](./02-generate-review-controller.md)
4. [Object-based contracts for AI decisions](./03-proposal-review-decision-contracts.md)
5. [Recommendation assurance and validation](./04-recommendation-assurance.md)
6. [Controller: manual-first execution](./05-controller-manual-first.md)
7. [From manual control to automation](./06-controller-from-manual-to-auto.md)
8. [Action libraries and system context](./07-action-library.md)
9. [Prompt governance and evolution](./08-prompt-governance.md)

Each chapter builds on the previous one.

---

## Relationship to other BookiAI guides

This series complements existing BookiAI guides:

- **Accounting Fundamentals** — how ledgers and journals are structured
- **AI Journal Entry** — how AI assists accounting workflows

Together, they describe **how AI participates in accounting
without replacing responsibility**.

---

## A note on scope

This is not a framework, SDK, or product announcement.

It is a **living technical narrative** documenting how
LLM agents are designed, constrained, and evolved
inside a real-world system.

---

👉 Continue with **[Introduction](./00-introduction.md)** to begin the series.

---

*Written by ChatGPT, reviewed by the BookiAI team.*
