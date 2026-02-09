# Apple HIG Skills for AI Agents

A collection of AI agent skills based on Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/). Built for developers and designers who want AI coding assistants to provide Apple design guidance.

Built on the [Agent Skills](https://agentskills.io) specification. Works with Claude Code and similar AI agents.

**Contributions welcome.** Found a way to improve a skill or have a new one to add? [Open a PR](#contributing).

## What are Skills?

Skills are markdown files that give AI agents specialized knowledge and workflows for specific tasks. When you add these to your project, your AI agent can recognize when you're working on Apple platform design tasks and apply the right HIG guidelines and best practices.

## Available Skills

<!-- SKILLS:START -->
| Skill | Description |
|-------|-------------|
| [hig-project-context](skills/hig-project-context/) | Project context gathering — run first to capture your app's platforms, tech stack, and design constraints so other skills skip redundant questions. |
| [hig-platforms](skills/hig-platforms/) | Platform-specific design guidance for iOS, iPadOS, macOS, tvOS, visionOS, watchOS, and games. |
| [hig-foundations](skills/hig-foundations/) | Visual design foundations — color, typography, layout, icons, materials, motion, accessibility, and more. |
| [hig-patterns](skills/hig-patterns/) | UX patterns — onboarding, navigation, modality, feedback, drag-and-drop, searching, settings, and more. |
| [hig-components-content](skills/hig-components-content/) | Content display components — charts, collections, image views, web views, and more. |
| [hig-components-layout](skills/hig-components-layout/) | Layout and organization — sidebars, split views, tab bars, windows, lists, and more. |
| [hig-components-menus](skills/hig-components-menus/) | Menus and actions — buttons, context menus, toolbars, menu bar, pop-up buttons, and more. |
| [hig-components-navigation](skills/hig-components-navigation/) | Navigation and search — search fields, page controls, path controls. |
| [hig-components-presentation](skills/hig-components-presentation/) | Presentation — alerts, action sheets, sheets, popovers, dialogs. |
| [hig-components-selection](skills/hig-components-selection/) | Selection and input controls — pickers, toggles, sliders, text fields, segmented controls, and more. |
| [hig-components-status](skills/hig-components-status/) | Status and progress — progress indicators, status bars, activity rings. |
| [hig-components-system](skills/hig-components-system/) | System experiences — widgets, Live Activities, notifications, App Clips, complications, and more. |
| [hig-inputs](skills/hig-inputs/) | Input methods — gestures, keyboards, Apple Pencil, pointers, game controllers, Digital Crown, and more. |
| [hig-technologies](skills/hig-technologies/) | Apple technology integrations — Siri, Apple Pay, HealthKit, ARKit, Sign in with Apple, and more. |
<!-- SKILLS:END -->

## Installation

### Option 1: CLI Install (Recommended)

(Coming soon — see [agentskills.io](https://agentskills.io) for CLI status)

```bash
# Install all skills
npx skills add raintree-technology/apple-hig-skills

# Install specific skills
npx skills add raintree-technology/apple-hig-skills --skill hig-foundations hig-components-layout

# List available skills
npx skills add raintree-technology/apple-hig-skills --list
```

### Option 2: Clone and Copy

```bash
git clone https://github.com/raintree-technology/apple-hig-skills.git
cp -r apple-hig-skills/skills/* .claude/skills/
```

### Option 3: Git Submodule

```bash
git submodule add https://github.com/raintree-technology/apple-hig-skills.git .claude/apple-hig-skills
```

### Option 4: Fork and Customize

1. Fork this repository
2. Customize skills for your specific needs
3. Clone your fork into your projects

## Usage

Once installed, just ask your AI agent about Apple design:

```
"How should I design the tab bar for my iOS app?"
--> Uses hig-components-layout skill

"What are Apple's color guidelines for dark mode?"
--> Uses hig-foundations skill

"How should onboarding work in my app?"
--> Uses hig-patterns skill

"What are the guidelines for widgets?"
--> Uses hig-components-system skill

"How does input work on visionOS?"
--> Uses hig-inputs skill
```

## Source

All HIG content is sourced from [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) (February 2025). Apple owns all original content. This repository structures it for agent consumption under fair use for reference purposes.

## Contributing

Found a way to improve a skill? Have a new skill to suggest? PRs and issues welcome.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding or improving skills.

## License

[MIT](LICENSE) - The repository structure and SKILL.md files are MIT licensed. Apple HIG content remains Apple's intellectual property.
