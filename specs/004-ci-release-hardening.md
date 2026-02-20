# Spec 004: CI and Release Hardening

## Status: COMPLETE

## Goal
Make `hig-doctor` product quality enforceable in CI before publish.

## Requirements
- Add a dedicated CI workflow for `packages/hig-doctor` that runs on push and pull requests for relevant paths.
- CI must run package tests and smoke-check core CLI modes.
- Keep existing skill validation workflow intact.
- Document the new CI workflow behavior in repository docs.

## Acceptance Criteria
- [x] `.github/workflows/hig-doctor-ci.yml` exists and triggers on PR/push changes affecting `packages/hig-doctor`, `action.yml`, and related docs/workflows.
- [x] CI workflow runs `npm ci`, `npm test`, and smoke checks for `--verbose`, `--score`, and `--strict`.
- [x] README includes a short section describing how `hig-doctor` CI validates package and CLI behavior.
- [x] `node packages/hig-doctor/src/cli.js . --verbose` still reports healthy results for this repository.

## Completion Signal
Output `<promise>DONE</promise>` only when all criteria are implemented and verified.
