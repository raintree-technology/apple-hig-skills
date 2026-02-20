# Ralph Build Mode

Based on Geoffrey Huntley's Ralph Wiggum methodology.

---

## Phase 0: Orient

Read `.specify/memory/constitution.md` to understand project principles and constraints.

---

## Phase 1: Discover Work Items

Search for incomplete work from these sources (in order):

1. **specs/ folder** — Look for `.md` files NOT marked `## Status: COMPLETE`
2. **IMPLEMENTATION_PLAN.md** — If exists, find unchecked `- [ ]` tasks
3. **GitHub Issues** — Check for open issues (if this is a GitHub repo)
4. **Any task tracker** — Jira, Linear, etc. if configured

Pick the **HIGHEST PRIORITY** incomplete item:
- Lower numbers = higher priority (001 before 010)
- `[HIGH]` before `[MEDIUM]` before `[LOW]`
- Bugs/blockers before features

Before implementing, search the codebase to verify it's not already done.

---

## Phase 1b: Re-Verification Mode (No Incomplete Work Found)

**If ALL specs appear complete**, don't just exit — do a quality check:

1. **Randomly pick** one completed spec from `specs/`
2. **Strictly re-verify** ALL its acceptance criteria:
   - Run the actual tests mentioned in the spec
   - Manually verify each criterion is truly met
   - Check edge cases
   - Look for regressions
3. **If any criterion fails**: Unmark the spec as complete and fix it
4. **If all pass**: Output `<promise>DONE</promise>` to confirm quality

This ensures the codebase stays healthy even when "nothing to do."

---

## Phase 2: Implement

Implement the selected spec/task completely:
- Follow the spec's requirements exactly
- Write clean, maintainable code
- Add tests as needed

---

## Phase 3: Validate

Run the project's test suite and verify:
- All tests pass
- No lint errors
- The spec's acceptance criteria are 100% met

---

## Phase 4: Commit & Update

1. Mark the spec/task as complete (add `## Status: COMPLETE` to spec file)
2. `git add -A`
3. `git commit` with a descriptive message
4. `git push`

---

## Completion Signal

**CRITICAL:** Only output the magic phrase when the work is 100% complete.

Check:
- [ ] Implementation matches all requirements
- [ ] All tests pass
- [ ] All acceptance criteria verified
- [ ] Changes committed and pushed
- [ ] Spec marked as complete

**If ALL checks pass, output:** `<promise>DONE</promise>`

**If ANY check fails:** Fix the issue and try again. Do NOT output the magic phrase.
