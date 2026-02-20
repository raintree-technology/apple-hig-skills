# Apple HIG Skills

Apple Human Interface Guidelines as agent skills for Claude Code, Cursor, and other AI coding agents.

14 skills covering the complete Apple HIG — foundations, components, patterns, inputs, platforms, and technologies. Source: [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) (February 2025).

## Install

```bash
npx skills add raintree-technology/apple-hig-skills
```

Or install via Claude Code plugin:

```
/plugin marketplace add raintree-technology/apple-hig-skills
```

## HIG Doctor

This repository includes `hig-doctor`, a CLI + TUI validator for skill structure and repository consistency with a health score.

Run from this repository:

```bash
npm --prefix packages/hig-doctor install
node packages/hig-doctor/src/cli.js . --verbose
```

After publishing to npm:

```bash
npx -y hig-doctor@latest . --verbose
```

Open the interactive TUI:

```bash
node packages/hig-doctor/src/cli.js . --tui
```

TUI controls: `j/k` or arrows to move, `f` to filter, `g` to toggle grouping, `q` to quit.

Use as a GitHub Action in other repositories:

```yaml
- uses: actions/checkout@v4
- uses: raintree-technology/apple-hig-skills@main
  with:
    directory: .
    verbose: "true"
    strict: "true"
```

Publish flow: this repo includes `.github/workflows/publish-hig-doctor.yml`. It publishes on `hig-doctor-v*` tags or manual dispatch (requires `NPM_TOKEN` secret).

CI flow: `.github/workflows/hig-doctor-ci.yml` runs on push and pull requests when `hig-doctor`, `action.yml`, and related docs/workflow files change. It runs `npm ci`, `npm test`, and CLI smoke checks for `--verbose`, `--score`, and `--strict`.

## Ralph Loop

This repo is also bootstrapped for Ralph Wiggum-style autonomous spec loops.

Run with Codex:

```bash
./scripts/ralph-loop-codex.sh
```

Planning mode (optional):

```bash
./scripts/ralph-loop-codex.sh plan
```

Configuration files:
- Constitution: `.specify/memory/constitution.md`
- Build prompt: `PROMPT_build.md`
- Plan prompt: `PROMPT_plan.md`
- Seed spec: `specs/001-ralph-bootstrap.md`

## Skills

| Skill | Description |
|-------|-------------|
| `hig-foundations` | Color, typography, SF Symbols, dark mode, accessibility, layout, motion, privacy, branding, icons |
| `hig-platforms` | Platform-specific design for iOS, iPadOS, macOS, tvOS, watchOS, visionOS |
| `hig-patterns` | UX patterns: onboarding, navigation, search, feedback, drag and drop, modality, settings |
| `hig-inputs` | Gestures, Apple Pencil, keyboards, game controllers, pointers, Digital Crown, eye tracking |
| `hig-technologies` | Siri, Apple Pay, HealthKit, ARKit, machine learning, Sign in with Apple, SharePlay |
| `hig-project-context` | Shared design context document for tailored guidance across skills |
| `hig-components-content` | Charts, collections, image views, web views, color wells, lockups |
| `hig-components-controls` | Pickers, toggles, sliders, steppers, segmented controls, text fields |
| `hig-components-dialogs` | Alerts, action sheets, popovers, sheets, digit entry views |
| `hig-components-layout` | Sidebars, split views, tab bars, scroll views, windows, lists, tables |
| `hig-components-menus` | Menus, context menus, toolbars, buttons, menu bar, pop-up buttons |
| `hig-components-search` | Search fields, page controls, path controls |
| `hig-components-status` | Progress indicators, status bars, activity rings |
| `hig-components-system` | Widgets, live activities, notifications, complications, app clips, app shortcuts |

## How it works

Skills use progressive disclosure to minimize token usage:

1. **Discovery** — Claude reads skill names and descriptions to decide relevance
2. **Activation** — The full SKILL.md loads with key principles and a reference index
3. **Deep reference** — Specific files from `references/` load on demand for detailed guidance

Each skill stays under 500 lines. Detailed HIG content lives in 156 reference documents loaded only when needed.

## Structure

```
skills/
  hig-foundations/
    SKILL.md
    references/
      color.md
      typography.md
      accessibility.md
      ...
  hig-components-layout/
    SKILL.md
    references/
      sidebars.md
      tab-bars.md
      ...
  ...
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding or improving skills.

## License

MIT (repository structure and skill files). Apple HIG content in `references/` is Apple's intellectual property, referenced here for AI agent guidance.
