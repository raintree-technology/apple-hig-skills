# Spec 003: hig-doctor CLI Integration Tests

## Status: COMPLETE

## Goal
Raise confidence in the published CLI by covering end-to-end argument handling and exit-code behavior.

## Requirements
- Add integration tests that execute the CLI binary (`src/cli.js`) in subprocesses.
- Cover success output modes (`--score`, default text mode, `--json` as needed) and failure modes.
- Verify strict-mode behavior returns non-zero when warnings exist.
- Verify invalid flag combinations and unknown flags fail with clear errors.

## Acceptance Criteria
- [x] Tests verify `--score` returns a numeric score and exits with code `0` on clean fixtures.
- [x] Tests verify unknown options return a non-zero exit code and include an actionable error message.
- [x] Tests verify `--tui` with `--score` (or `--json`) fails with non-zero exit code and clear message.
- [x] Tests verify strict mode returns non-zero when only warnings are present.
- [x] `npm --prefix packages/hig-doctor test` passes.

## Completion Signal
Output `<promise>DONE</promise>` only when all criteria are implemented and verified.
