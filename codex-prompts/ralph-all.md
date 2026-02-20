---
description: Execute the Ralph loop to process ALL specifications in specs/ folder sequentially.
argument-hint: "[--max-iterations=<number>]"
---

# Ralph Wiggum Loop: Process All Specs

You are implementing all specifications in the `specs/` folder for this project.

## Before You Start

Read these files first:
1. `RALPH_PROMPT.md` - Master instructions
2. `.specify/memory/constitution.md` - Core principles
3. `AGENTS.md` - Development guidelines
4. `history.md` - Project history (if present)

## Your Process

For each spec in `specs/` (process in numerical order: 001, 002, 003, etc.):

1. **Read the spec file**: `specs/{spec-name}/spec.md`
2. **Implement the feature** following acceptance criteria
3. **Run tests** required by the Completion Signal
4. **Commit and push** with meaningful commit messages
5. **Update history** if required
6. **Move to the next spec**

## Autonomy Rules

- You have FULL autonomy - commit, push, deploy without asking
- Use hosting tools to deploy and check logs if required
- Use browser tools to visually verify the UI when relevant
- Test everything before marking complete

## Completion Signal

When ALL specs are complete and verified, output:

```
<promise>ALL_DONE</promise>
```

## Arguments

$ARGUMENTS
