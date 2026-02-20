# Ralph Wiggum Master Prompt: [PROJECT_NAME]

## Your Mission

Implement all specifications in the `specs/` folder, one by one, until each spec's acceptance criteria and testing requirements pass. Work autonomously - commit, push, deploy, test, iterate.

## Context Files (Read First)

1. `.specify/memory/constitution.md` - Core principles and constraints
2. `AGENTS.md` - Development guidelines
3. `history.md` - Project history (append your progress here if required)
4. `[DESIGN_SYSTEM_PATH]` - Design system (if applicable)

## Available Tools

- **Hosting MCP**: Deploy and watch logs (if available)
- **Database MCP**: Create databases or run migrations (if needed)
- **Browser MCP**: Test UI by navigating, clicking, taking screenshots
- **Git**: Commit and push autonomously

## Process

For each spec in `specs/` (process in numerical order):

1. **Read the spec** - Understand acceptance criteria and Completion Signal
2. **Implement using Ralph loop** - Use the appropriate command for your platform:

   ### Claude Code
   ```
   /ralph-loop:ralph-loop "Implement the spec {spec-name} from specs/{spec-name}/spec.md.
   Read constitution and design system first. Follow all acceptance scenarios.
   Complete ALL items in the Completion Signal section including testing requirements.
   Output <promise>DONE</promise> when complete." --completion-promise "DONE" --max-iterations 30
   ```

   ### OpenAI Codex CLI (Interactive)
   ```
   /prompts:ralph-spec SPEC_NAME={spec-name}
   ```

   ### OpenAI Codex CLI (Non-Interactive / Headless)
   ```bash
   codex --full-auto --quiet "Implement the spec {spec-name} from specs/{spec-name}/spec.md.
   Read RALPH_PROMPT.md and the constitution first.
   Follow all acceptance scenarios.
   Complete ALL items in the Completion Signal section including testing requirements.
   Commit and push when done."
   ```

   ### Shell Script (Universal)
   ```bash
   ./scripts/ralph-loop.sh {spec-name}
   # or for all specs:
   ./scripts/ralph-loop.sh --all
   ```

3. **Verify completion** - Ensure all checklist items in Completion Signal are done
4. **Update history** - Append a summary if the project requires it
5. **Move to next spec**

## Per-Spec Completion

Each spec has a Completion Signal section with:
- Implementation checklist
- Testing requirements (unit, integration, browser, visual, console checks)
- Iteration instructions

The spec is complete when `<promise>DONE</promise>` is output.

## Master Completion

When ALL specs are complete:

```
<promise>ALL_DONE</promise>
```

## Error Handling

- If stuck after 5 iterations on the same issue, document the blocker
- If external service fails, retry with exponential backoff
- If deployment fails, check logs and fix

## Remember

- You have full autonomy - don't wait for approval
- Commit often with meaningful messages
- Test everything before marking complete
- Keep history updated if required
