# Spec 002: hig-doctor Core Hardening

## Status: COMPLETE

## Goal
Improve `hig-doctor` reliability for real-world repositories by removing brittle assumptions in core validation behavior.

## Requirements
- `--version` output must always match `packages/hig-doctor/package.json` and never rely on a hardcoded fallback.
- `references/` validation must support nested markdown files (recursive traversal), not only top-level files.
- Nested reference links in `SKILL.md` must be validated correctly against files on disk.
- Existing behavior for missing referenced files must continue to return an error.

## Acceptance Criteria
- [ ] `node packages/hig-doctor/src/cli.js --version` prints the exact package version from `packages/hig-doctor/package.json`.
- [ ] A nested reference file like `references/platform/ios.md` is recognized as referenced when linked from `SKILL.md`.
- [ ] A linked nested reference path that does not exist still produces `skill/reference-file-exists`.
- [ ] `npm --prefix packages/hig-doctor test` passes.

## Completion Signal
Output `<promise>DONE</promise>` only when all criteria are implemented and verified.
