---
title: Proposal / Review / Decision Contracts
sidebar_label: Proposal / Review / Decision
---

# Proposal / Review / Decision Contracts

In the previous chapter, we separated responsibilities into:

- Generate
- Review
- Controller

That separation only works if it is **enforced by structure**.

Without explicit contracts, role separation quickly collapses
back into free-form prompts and implicit assumptions.

This chapter explains how BookiAI uses **object-based contracts**
to make AI participation governable.

---

## Why conversations are not enough

Most LLM integrations rely on conversations:
- Prompts
- Responses
- Explanations in natural language

This is convenient for humans,
but hostile to systems.

Conversations are:
- Hard to validate
- Impossible to version safely
- Difficult to audit
- Not replayable

If AI output is meant to influence system state,
it must be **machine-verifiable**.

---

## The contract triangle

BookiAI formalizes AI interaction using three core objects:

1. **Proposal** – what the AI suggests
2. **Review Report** – how the suggestion was evaluated
3. **Decision** – what the system chooses to do

Each object has:
- A clear owner
- A clear responsibility
- A well-defined lifecycle

No object crosses role boundaries.

---

## Proposal: structured intent, not execution

A **Proposal** represents the output of the Generate role.

It answers:
- What is being suggested?
- Under which assumptions?
- With what confidence?

A proposal may include:
- Suggested journal entries
- Account selections
- Classifications or tags
- Supporting rationale

Critically:
- A proposal **cannot** modify system state
- A proposal **must** declare uncertainty
- A proposal is always incomplete by design

The proposal is an invitation to evaluate, not an instruction.

---

## Review Report: explicit evaluation

A **Review Report** is produced by the Review role.

It answers:
- What checks were applied?
- Which rules passed or failed?
- Where uncertainty remains?
- Is the proposal acceptable?

Review may involve:
- Deterministic validation
- Policy checks
- Secondary AI review
- Human oversight

The output is not “approved” or “rejected” alone,
but a **reasoned assessment**.

Nothing is executed at this stage.

---

## Decision: system-owned authority

A **Decision** is produced by the Controller.

It answers:
- Should this proposal proceed?
- Under what conditions?
- With what execution mode?

Typical decisions include:
- Execute automatically
- Require user confirmation
- Request additional information
- Reject and record reasons

The decision is the **only object**
that may authorize execution.

This ensures authority is centralized and auditable.

---

## Why explicit contracts matter

These contracts provide:

- Clear accountability boundaries
- Deterministic system behavior
- Explainable decision paths
- Safe retries and rollbacks
- Observability across AI behavior

Most importantly:
> **No system state change occurs  
> without an explicit Decision object**

---

## Contracts enable evolution

Because contracts are explicit and versioned:
- Prompts can change
- Models can change
- Review logic can evolve

Without breaking:
- Audit trails
- Historical behavior
- Trust guarantees

This is what allows BookiAI to move
from manual control toward automation safely.

---

## What comes next

Once contracts exist,
the next challenge is quality:

> How do we determine whether a proposal  
> is good enough to proceed?

👉 **Recommendation Assurance and validation**

---

*Written by ChatGPT, reviewed by the BookiAI team.*
