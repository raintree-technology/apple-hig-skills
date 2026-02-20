# Apple HIG Skills Constitution

> Apple Human Interface Guidelines as agent skills for Claude Code, Codex, Cursor, and other coding agents.

**Version:** 1.0.0

---

## Ralph Wiggum

**Source:** https://github.com/fstandhartinger/ralph-wiggum
**Commit:** 22b6c3c4fad47d8e5a5824ac2093b8d58ab057ff
**Installed:** 2026-02-19

### Auto-Update

At session start, check for updates:
1. Run:

```bash
git ls-remote https://github.com/fstandhartinger/ralph-wiggum.git HEAD
```

2. If hash differs: refresh scripts/templates and update this file.

---

## Context Detection

**Ralph Loop Mode** (started by ralph-loop scripts):
- Focus on one highest-priority incomplete spec.
- Complete all acceptance criteria.
- Run validation (tests/lint/checks) before completion signal.
- Commit and push when complete.
- Output `<promise>DONE</promise>` only when 100% complete.

**Interactive Mode**:
- Help with architecture, spec writing, and implementation decisions.
- Keep repository standards from `AGENTS.md` enforced.

---

## Core Principles

### I. Source Fidelity
Keep HIG content accurate and traceable to Apple sources.

### II. Verifiable Quality
Every change should be validated by deterministic checks and reproducible commands.

### III. Simplicity
Prefer clear markdown/docs and minimal complexity over speculative abstractions.

---

## Technical Stack

- Primary: Markdown skill content (`skills/*`)
- Validation: `hig-doctor` (`packages/hig-doctor`)
- Website: Next.js/Bun (`website/`)

---

## Autonomy

**YOLO Mode:** ENABLED
- Codex flag: `--dangerously-bypass-approvals-and-sandbox`

**Git Autonomy:** ENABLED
- Commit and push can be automated after criteria pass.

---

## Work Items

Work source priority:
1. `specs/*.md`
2. `IMPLEMENTATION_PLAN.md` (optional)
3. Open GitHub issues (when requested)

Each spec must include clear acceptance criteria and completion checks.

---

## Running Ralph

```bash
# Codex loop
./scripts/ralph-loop-codex.sh

# Claude loop
./scripts/ralph-loop.sh

# Max iterations
./scripts/ralph-loop-codex.sh 20
```

---

## Completion Signal

A task is complete only when:
1. Acceptance criteria are verified.
2. Required checks pass.
3. Changes are committed and pushed.
4. Agent outputs:

```xml
<promise>DONE</promise>
```

Do not output this phrase before true completion.
