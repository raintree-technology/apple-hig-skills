# Ralph Build Mode

Based on Geoffrey Huntley's Ralph Wiggum methodology.

---

## Phase 0: Orient

0a. Read `.specify/memory/constitution.md` for project principles (if exists).

0b. Study `specs/` folder to understand all feature specifications.

---

## Phase 1: Select Work Item

**DEFAULT: Work directly from specs (no plan needed)**

Look at the `specs/` folder and find specs that are NOT yet complete.

A spec is incomplete if:
- It has unchecked acceptance criteria `- [ ]`
- It does NOT have `## Status: COMPLETE` at the top
- The codebase doesn't fully implement its requirements

Pick the **HIGHEST PRIORITY** incomplete spec:
- Lower spec numbers = higher priority (001 before 010)
- Or follow any priority hints in the spec itself
- **Exception:** If the highest priority spec seems unachievable or needs another spec as a precondition, choose that dependency instead

**OPTIONAL: If IMPLEMENTATION_PLAN.md exists AND has tasks**
You may use it to pick the next task. But this is optional — most projects just use specs directly.

Before implementing, search the codebase — don't assume the work isn't already done.

---

## Phase 1b: Track Attempts (NR_OF_TRIES)

After selecting a spec:

1. Look for `NR_OF_TRIES: N` at the bottom of the spec file
2. If found, increment N; if not found, add `NR_OF_TRIES: 1` at the very bottom
3. If NR_OF_TRIES > 0, check the `history/` folder for notes about previous attempts on this spec
4. **If NR_OF_TRIES = 10:** This spec is unachievable (too hard or too big). Split it into simpler specs and mark the original as superseded

This prevents the loop from getting stuck forever on one difficult spec.

---

## Phase 2: Implement

Implement the selected spec completely:
- Follow the spec's requirements exactly
- Write clean, maintainable code
- Add tests as needed
- Handle edge cases mentioned in the spec

---

## Phase 3: Validate

Run the project's test suite and verify:
- All existing tests still pass
- New functionality works as specified
- The spec's acceptance criteria are 100% met

---

## Phase 4: Record History

Add concise notes to `history/` folder (create if needed):
- What was learned during this implementation
- Any gotchas or issues encountered
- Decisions made and why

Keep notes brief — they help future iterations understand context.

---

## Phase 5: Commit & Mark Complete

1. Add `## Status: COMPLETE` to the top of the spec file
2. Check off all acceptance criteria in the spec: `- [x]`
3. `git add -A`
4. `git commit` with a descriptive message referencing the spec
5. `git push`
6. If this triggered a deploy (or deploy is needed), watch the deploy until successful — fix and re-commit/push/deploy as needed

---

## Phase 6: Completion Signal

**CRITICAL:** Only output the magic phrase when the spec is 100% complete.

Check:
- [ ] All requirements from the spec are implemented
- [ ] All acceptance criteria pass
- [ ] All tests pass
- [ ] Changes committed and pushed
- [ ] Spec marked as COMPLETE
- [ ] History notes recorded
- [ ] Deploy successful (if applicable)

**If ALL checks pass, output:** `<promise>DONE</promise>`

**If ANY check fails:** Fix the issue and try again. Do NOT output the magic phrase.
