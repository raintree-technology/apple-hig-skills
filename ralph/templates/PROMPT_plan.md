# Ralph Planning Mode (OPTIONAL)

> ⚠️ **This mode is OPTIONAL.** Most projects work fine directly from specs.
>
> Only use this when you want a detailed breakdown of large specs into smaller tasks.
>
> **Preferred workflow:** Just run `./scripts/ralph-loop.sh` — it works directly from specs.

---

## When to Use Planning Mode

Use this ONLY if:
- You have very large specs that need breakdown into subtasks
- You want a detailed task list beyond what specs provide
- You're combining multiple specs into a prioritized backlog

**If your specs are already well-defined, skip this and run build mode directly.**

---

## Phase 0: Orient

0a. Read `.specify/memory/constitution.md` for project principles.

0b. Study `specs/` to learn all feature specifications.

---

## Phase 1: Gap Analysis

Compare specs against current codebase:
- What's fully implemented?
- What's partially done?
- What's not started?

---

## Phase 2: Create Plan (if needed)

Create `IMPLEMENTATION_PLAN.md` with a prioritized task list:

```markdown
# Implementation Plan

> Optional breakdown of specs into smaller tasks.
> Delete this file to return to working directly from specs.

## Tasks

- [ ] [HIGH] Task description - from spec NNN
- [ ] [MEDIUM] Task description - from spec NNN

## Completed

- [x] Completed task
```

---

## Completion Signal

When done: `<promise>DONE</promise>`
