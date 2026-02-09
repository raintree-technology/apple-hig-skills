---
name: hig-project-context
version: 1.0.0
description: >-
  Create or update a shared Apple design context document that other HIG skills
  use to tailor guidance. Use when the user says "set up my project context,"
  "what platforms am I targeting," "configure HIG settings," or when starting a
  new Apple platform project. Also activates when other HIG skills need project
  context but none exists yet. This skill creates .claude/apple-design-context.md
  so that hig-foundations, hig-platforms, hig-components-*, hig-inputs, and
  hig-technologies can provide targeted advice without repetitive questions.
---

# Apple HIG: Project Context

Create and maintain `.claude/apple-design-context.md` so other HIG skills can skip redundant questions.

## When to Use This Skill

Activate this skill when:

- The user starts a new Apple platform project and wants HIG-aligned design guidance
- The user explicitly asks to set up or update their project design context
- Another HIG skill needs context but `.claude/apple-design-context.md` does not exist
- The user's project requirements have changed (new platform target, design system update, accessibility audit)
- The user says "set up my design context," "configure HIG for my project," or "update my platform targets"

## How It Works

This skill creates and maintains `.claude/apple-design-context.md` -- a structured
document that every other HIG skill checks before asking questions. Once this file
exists, other skills will read it first and only ask for information not already
covered.

## Gathering Context

When creating or updating the context document, gather the following information.
If the user has a README, Package.swift, or project configuration, read those
first and pre-fill what you can. Only ask about what you cannot determine from
the codebase.

### 1. Product Overview
- What does the app do? (one sentence)
- What category? (productivity, social, health, game, utility, etc.)
- What stage? (concept, development, shipped, redesign)

### 2. Target Platforms
- Which Apple platforms? (iOS, iPadOS, macOS, tvOS, watchOS, visionOS)
- Minimum OS versions for each
- Is this a universal app or platform-specific?

### 3. Technology Stack
- UI framework: SwiftUI, UIKit, AppKit, or mixed?
- Architecture: single-window, multi-window, document-based?
- Any Apple technologies in use? (HealthKit, CloudKit, ARKit, etc.)

### 4. Design System
- Using system defaults or a custom design system?
- Existing brand colors, fonts, or icon style?
- Dark mode support status
- Dynamic Type support status

### 5. Accessibility Requirements
- Target accessibility level (baseline, enhanced, comprehensive)
- Specific accessibility considerations (VoiceOver, Switch Control, etc.)
- Any regulatory requirements (WCAG, Section 508)

### 6. User Context
- Primary user personas (1-3)
- Key use cases and environments (desk, on-the-go, glanceable, immersive)
- Known pain points or design challenges

### 7. Existing Design Assets
- Figma/Sketch files?
- Apple Design Resources in use?
- Existing component library?

## Context Document Template

Generate `.claude/apple-design-context.md` using this structure:

```markdown
# Apple Design Context

## Product
- **Name**: [App name]
- **Description**: [One sentence]
- **Category**: [Category]
- **Stage**: [Concept / Development / Shipped / Redesign]

## Platforms
| Platform | Supported | Min OS | Notes |
|----------|-----------|--------|-------|
| iOS      | Yes/No    |        |       |
| iPadOS   | Yes/No    |        |       |
| macOS    | Yes/No    |        |       |
| tvOS     | Yes/No    |        |       |
| watchOS  | Yes/No    |        |       |
| visionOS | Yes/No    |        |       |

## Technology
- **UI Framework**: [SwiftUI / UIKit / AppKit / Mixed]
- **Architecture**: [Single-window / Multi-window / Document-based]
- **Apple Technologies**: [List any: HealthKit, CloudKit, ARKit, etc.]

## Design System
- **Base**: [System defaults / Custom design system]
- **Brand Colors**: [List or reference]
- **Typography**: [System fonts / Custom fonts]
- **Dark Mode**: [Supported / Not yet / N/A]
- **Dynamic Type**: [Supported / Not yet / N/A]

## Accessibility
- **Target Level**: [Baseline / Enhanced / Comprehensive]
- **Key Considerations**: [List any specific needs]

## Users
- **Primary Persona**: [Description]
- **Key Use Cases**: [List]
- **Known Challenges**: [List]
```

## Auto-Discovery from Codebase

Before asking questions, attempt to discover context from:

1. **README.md** -- Product description, platform targets
2. **Package.swift / .xcodeproj** -- Supported platforms, minimum OS versions, dependencies
3. **Info.plist** -- App category, required capabilities, supported orientations
4. **Existing code** -- Import statements reveal frameworks (SwiftUI vs UIKit, HealthKit, etc.)
5. **Assets.xcassets** -- Color assets, icon sets, dark mode variants
6. **Accessibility audit** -- Grep for accessibility modifiers/attributes

Present your findings and ask the user to confirm or correct.

## Updating Context

When updating an existing context document:

1. Read the current `.claude/apple-design-context.md`
2. Ask what has changed
3. Update only the changed sections
4. Preserve all unchanged information

## Output Format

When creating or updating context:

1. **Summary of discovered information** -- What you found in the codebase
2. **Questions for missing information** -- Only ask about what you could not determine
3. **Generated context document** -- The complete `.claude/apple-design-context.md`
4. **Confirmation** -- Ask the user to review and confirm

## Task-Specific Questions

1. What does your app do in one sentence?
2. Which Apple platforms are you targeting?
3. Are you using SwiftUI, UIKit, or both?
4. Do you have existing brand guidelines or a design system?
5. What level of accessibility support are you targeting?
6. Who are your primary users and how do they use the app?

## Related Skills

- **hig-platforms** -- Uses project context to provide platform-specific guidance
- **hig-foundations** -- Uses project context for color, typography, and layout decisions
- **hig-patterns** -- Uses project context to recommend appropriate UX patterns
- **hig-components-*** -- All component skills use project context to tailor recommendations
- **hig-inputs** -- Uses project context to know which input methods to cover
- **hig-technologies** -- Uses project context to know which Apple technologies are relevant
