# Apple HIG Skills for AI Agents

Apple [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) as [Agent Skills](https://agentskills.io). Works with Claude Code and similar AI agents.

## Skills

<!-- SKILLS:START -->
| Skill | Description |
|-------|-------------|
| [hig-project-context](skills/hig-project-context/) | Capture your app's platforms, tech stack, and design constraints so other skills skip redundant questions. Run first. |
| [hig-platforms](skills/hig-platforms/) | Platform-specific design for iOS, iPadOS, macOS, tvOS, visionOS, watchOS, and games. |
| [hig-foundations](skills/hig-foundations/) | Color, typography, layout, icons, materials, motion, accessibility, privacy. |
| [hig-patterns](skills/hig-patterns/) | Onboarding, navigation, modality, feedback, drag-and-drop, search, settings. |
| [hig-components-content](skills/hig-components-content/) | Charts, collections, image views, web views, activity views, lockups. |
| [hig-components-layout](skills/hig-components-layout/) | Sidebars, split views, tab bars, windows, lists, scroll views, ornaments. |
| [hig-components-menus](skills/hig-components-menus/) | Buttons, context menus, toolbars, menu bar, pop-up and pull-down buttons. |
| [hig-components-navigation](skills/hig-components-navigation/) | Search fields, page controls, path controls. |
| [hig-components-presentation](skills/hig-components-presentation/) | Alerts, action sheets, sheets, popovers, digit entry views. |
| [hig-components-selection](skills/hig-components-selection/) | Pickers, toggles, sliders, text fields, segmented controls, steppers. |
| [hig-components-status](skills/hig-components-status/) | Progress indicators, status bars, activity rings. |
| [hig-components-system](skills/hig-components-system/) | Widgets, Live Activities, notifications, App Clips, complications. |
| [hig-inputs](skills/hig-inputs/) | Gestures, keyboards, Apple Pencil, pointers, game controllers, Digital Crown. |
| [hig-technologies](skills/hig-technologies/) | Siri, Apple Pay, HealthKit, ARKit, Sign in with Apple, SharePlay, CarPlay. |
<!-- SKILLS:END -->

## Install

### Clone and copy

```bash
git clone https://github.com/raintree-technology/apple-hig-skills.git
cp -r apple-hig-skills/skills/* .claude/skills/
```

### Git submodule

```bash
git submodule add https://github.com/raintree-technology/apple-hig-skills.git .claude/apple-hig-skills
```

### CLI (coming soon)

```bash
npx skills add raintree-technology/apple-hig-skills
```

See [agentskills.io](https://agentskills.io) for CLI status.

## Usage

Ask your AI agent about Apple design:

```
"How should I design the tab bar for my iOS app?"
"What are Apple's color guidelines for dark mode?"
"How should onboarding work in my app?"
"What are the guidelines for widgets?"
"How does input work on visionOS?"
```

## Source

Content sourced from [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) (February 2025). Apple owns all original HIG content. This repository structures it for agent consumption under fair use.

## Contributing

PRs and issues welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) for repository structure and skill files. Apple HIG content remains Apple's intellectual property.
