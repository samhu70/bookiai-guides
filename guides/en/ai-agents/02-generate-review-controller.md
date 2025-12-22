---
title: Generate / Review / Controller
sidebar_label: Generate / Review / Controller
---

# Generate / Review / Controller

![Generate, Review, Controller hero](/assets/ai-agents/02-generate-review-controller-hero.png)

If LLMs cannot write ledgers directly,
then the system must answer a new question:

> How should AI participation be structured  
> **without collapsing responsibility and authority**?

In BookiAI, the answer is a deliberate separation
of roles and powers:

**Generate → Review → Controller**

This is not three prompts.
It is an architectural boundary.

---

## From actions to roles

Most AI agent designs treat the model as an actor:
- It reasons
- It decides
- It acts

This works only when mistakes are acceptable.

In a business system, we instead ask:
- Who proposes?
- Who validates?
- Who authorizes execution?

These are distinct responsibilities,
and they must not be blended.

---

## Generate: proposing, not deciding

The **Generate** role belongs to the LLM.

Its responsibility is to:
- Interpret input and context
- Infer possible actions
- Produce structured proposals
- State assumptions and uncertainty

A generated result is **never an instruction**.
It is a *proposal object*.

For example:
- Suggested journal entries
- Inferred accounts
- Estimated classifications

At this stage, nothing is written.
Nothing is executed.

---

## Review: validating recommendations

The **Review** role exists to answer a single question:

> Is this recommendation acceptable  
> **under known rules and constraints**?

Review may include:
- Schema validation
- Business rule checks
- Confidence assessment
- Secondary AI review (e.g. CPA-style reviewer)
- Human review

Review produces an explicit **Review Report**:
- What passed
- What failed
- What is uncertain
- Why the recommendation should or should not proceed

Importantly, review does not execute anything.

---

## Controller: owning authority

The **Controller** is not another LLM agent.

It represents the **system itself**.

Its responsibility is to:
- Interpret review outcomes
- Apply policy and thresholds
- Decide *whether* and *how* to proceed
- Require confirmation when needed
- Block unsafe actions

The Controller owns authority.
It may be implemented as:
- Deterministic logic
- Decision tables
- Policy engines
- Workflow orchestration

LLMs may inform the Controller,
but must not replace it.

---

## Why this separation matters

By separating Generate, Review, and Controller,
the system gains:

- Clear responsibility boundaries
- Auditable decision paths
- Safe failure modes
- Gradual automation capability

Most importantly, **no single component
can unilaterally change system state**.

---

## Objects, not conversations

This model works only if outputs are treated as objects.

Instead of:
- Chat messages
- Free-text explanations

We use:
- Proposal objects
- Review reports
- Explicit decisions

These objects can be:
- Logged
- Tested
- Replayed
- Audited
- Evolved

This turns AI behavior into something
the system can reason about.

---

## Manual-first is intentional

In early stages, the Controller may:
- Require explicit human confirmation
- Execute nothing automatically

This is not a limitation.
It is a design choice.

Automation is not removed —
it is **earned** through evidence.

---

## What comes next

With roles clearly separated,
the next challenge becomes quality:

> How do we assess whether a recommendation  
> is good enough to proceed?

👉 **Recommendation Assurance and validation**

---

*Written by ChatGPT, reviewed by the BookiAI team.*
