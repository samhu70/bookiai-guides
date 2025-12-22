---
title: Action Library and Controlled Context
sidebar_label: Action Library
---

# Action Library and Controlled Context

At this stage of the system, execution authority
has already been clearly defined.

The remaining challenge is not power,
but **context**.

> How does an AI understand the system  
> without being given unrestricted access to it?

BookiAI answers this with a deliberate abstraction:
the **Action Library**.

---

## The problem with raw context

Many AI systems expose context by:
- Dumping database records
- Injecting raw JSON
- Expanding prompts indefinitely

This creates several problems:
- Context becomes inconsistent
- Prompts become unmanageable
- AI behavior becomes unpredictable
- Security and privacy boundaries blur

More context does not mean better understanding.

Unstructured context is liability, not capability.

---

## What an Action Library is

An **Action Library** is a curated collection of
system-exposed capabilities that AI can invoke.

Each action:
- Has a clear name and purpose
- Accepts structured inputs
- Returns structured outputs
- Enforces strict scope and permissions

Crucially:
> **Actions expose intent, not implementation.**

AI never queries the database directly.
It asks the system to perform an action.

---

## Actions are read-only by default

In BookiAI, the Action Library starts with
**read-only actions**.

Examples include:
- Fetching a chart of accounts snapshot
- Retrieving recent ledger summaries
- Resolving currency or tax context
- Checking policy constraints

These actions:
- Provide necessary context
- Produce no side effects
- Are safe to call repeatedly

This ensures AI can reason
without modifying system state.

---

## Controlled context beats full access

By mediating access through actions,
the system gains control over:

- What information is visible
- How fresh the data is
- How much detail is exposed
- Which rules are enforced

The AI sees the system
**through a governed lens**,
not as an open surface.

This prevents:
- Data leakage
- Hallucinated assumptions
- Context drift across prompts

---

## Action logs as observability

Every action invocation is logged:
- Which action was called
- With what parameters
- At what time
- By which role (Generate or Review)

These logs enable:
- Debugging AI behavior
- Replaying decisions
- Auditing context usage
- Improving future prompts

Context usage becomes observable,
not implicit.

---

## Actions are not tools for execution

An important boundary must be respected:

> **Action Library ≠ execution engine**

Actions:
- Provide information
- Validate constraints
- Explain system state

They do not:
- Write ledgers
- Change balances
- Execute decisions

Execution remains exclusively
under the Controller’s authority.

---

## Why Action Libraries scale

Because actions are explicit and versioned:
- Prompts remain stable
- Context evolves safely
- New capabilities can be added incrementally

This prevents prompt explosion
and enables long-term maintenance.

The Action Library becomes the
**system’s contract with AI**.

---

## What comes next

With roles, contracts, assurance,
controllers, and context in place,
one final question remains:

> How do we manage prompts and instructions  
> as long-lived, governed assets?

👉 **Prompt Governance and Evolution**

---

*Written by ChatGPT, reviewed by the BookiAI team.*
