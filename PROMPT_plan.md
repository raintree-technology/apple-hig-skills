# Ralph Planning Mode (OPTIONAL)

This mode is OPTIONAL. Most projects work fine directly from specs.

Only use this when you want a detailed breakdown of specs into smaller tasks.

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
- What has issues or bugs?

---

## Phase 2: Create Plan

Create `IMPLEMENTATION_PLAN.md` with a prioritized task list:

```markdown
# Implementation Plan

> Auto-generated breakdown of specs into tasks.
> Delete this file to return to working directly from specs.

## Priority Tasks

- [ ] [HIGH] Task description - from spec NNN
- [ ] [HIGH] Task description - from spec NNN  
- [ ] [MEDIUM] Task description
- [ ] [LOW] Task description

## Completed

- [x] Completed task
```

Prioritize by:
1. Dependencies (do prerequisites first)
2. Impact (high-value features first)
3. Complexity (mix easy wins with harder tasks)

---

## Completion Signal

When the plan is complete and saved:

`<promise>DONE</promise>`
