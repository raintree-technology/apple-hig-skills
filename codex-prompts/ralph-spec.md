---
description: Execute the Ralph loop for a SINGLE specification.
argument-hint: "SPEC_NAME=<spec-folder-name>"
---

# Ralph Wiggum Loop: Single Spec

You are implementing a single specification for this project.

## Spec to Implement

**Spec Name**: $ARGUMENTS

Read the spec from: `specs/$ARGUMENTS/spec.md`

## Before You Start

Read these files first:
1. `RALPH_PROMPT.md` - Master instructions
2. `.specify/memory/constitution.md` - Core principles
3. `AGENTS.md` - Development guidelines
4. `history.md` - See what's been done already (if present)

## Your Process

1. **Read the spec file** thoroughly
2. **Understand acceptance criteria** in the Completion Signal section
3. **Implement the feature** step by step
4. **Run tests** as specified in the Completion Signal
5. **Fix any issues** that arise
6. **Commit and push** with meaningful messages
7. **Update history** if required

## Autonomy Rules

- You have FULL autonomy - commit, push, deploy without asking
- Use hosting tools to deploy if required
- Use browser tools to visually verify UI when relevant
- Test everything before marking complete

## Iteration

If tests fail or acceptance criteria aren't met:
1. Analyze the failure
2. Fix the issue
3. Re-run tests
4. Repeat until passing

Maximum iterations: 30 (or as specified in arguments)

## Completion Signal

When the spec is fully implemented and all tests pass, output:

```
<promise>DONE</promise>
```
