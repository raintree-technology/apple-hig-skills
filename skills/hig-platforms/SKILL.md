---
name: hig-platforms
version: 1.0.0
description: >
  Apple Human Interface Guidelines for platform-specific design. Use this skill when the user asks about
  "designing for iOS", "iPad app design", "macOS design", "tvOS", "visionOS", "watchOS", "Apple platform",
  "which platform", platform differences, platform-specific conventions, or multi-platform app design.
  Also use when the user says "should I design differently for iPad vs iPhone", "how does my app work
  on visionOS", "what's different about macOS apps", "porting my app to another platform",
  "universal app design", or "what input methods does this platform use".
  Cross-references: hig-foundations for shared design foundations, hig-patterns for interaction patterns,
  hig-components-layout for navigation structures, hig-components-content for content display.
---

# Apple HIG: Platform Design

## Persona

Provide Apple HIG guidance on platform-specific design for iOS, iPadOS, macOS, tvOS, visionOS, and watchOS. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about designing for a specific Apple platform (iOS, iPadOS, macOS, tvOS, visionOS, watchOS)
- Wants to understand differences between Apple platforms
- Needs guidance on adapting an app for multiple platforms
- Asks about platform-specific interaction paradigms (touch, pointer, gaze, Digital Crown, remote)
- Wants to know which platform conventions to follow
- Is designing a game for Apple platforms
- Asks about screen sizes, safe areas, or platform-specific layout concerns

## Key Principles

1. **Each platform has a distinct identity.** Do not simply port a design from one platform to another. Respect the conventions, interaction models, and user expectations unique to each platform.

2. **iOS emphasizes touch.** Direct manipulation through gestures on a handheld screen. Apps should be optimized for one-handed use, with key actions within thumb reach. Navigation typically uses tab bars and push/pop stacks.

3. **iPadOS extends iOS with multitasking and larger canvas.** Support Split View, Slide Over, and Stage Manager. Use sidebars and multi-column layouts. Consider pointer and keyboard input alongside touch.

4. **macOS emphasizes pointer and keyboard.** Dense information display is acceptable. Use menubars, toolbars, and keyboard shortcuts extensively. Windows are resizable and users expect precise control.

5. **tvOS emphasizes remote and focus-based navigation.** Content is viewed from a distance. Design for the Siri Remote with a focus-based interface. Keep text large and layouts simple. Navigation should be linear and predictable.

6. **visionOS emphasizes spatial interaction with eyes and hands.** Design for a 3D environment using windows, volumes, and spaces. Use eye tracking for targeting and indirect gestures for interaction. Respect ergonomic comfort zones and depth placement.

7. **watchOS emphasizes glanceability and brevity.** Information should be consumable at a glance. Interactions must be brief. Use the Digital Crown, haptics, and complications to deliver timely, relevant content.

8. **Games have their own paradigm.** Game design on Apple platforms should still respect platform conventions for system interactions (notifications, accessibility, controllers) while being free to define in-game interaction models.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [designing-for-ios.md](references/designing-for-ios.md) | iOS Design | Touch interaction, tab bars, navigation stacks, gestures, screen sizes, safe areas |
| [designing-for-ipados.md](references/designing-for-ipados.md) | iPadOS Design | Multitasking, sidebars, pointer support, keyboard integration, Apple Pencil, Stage Manager |
| [designing-for-macos.md](references/designing-for-macos.md) | macOS Design | Menu bars, toolbars, window management, keyboard shortcuts, dense layouts, Dock integration |
| [designing-for-tvos.md](references/designing-for-tvos.md) | tvOS Design | Focus engine, Siri Remote, lean-back experience, content-forward design, parallax effects |
| [designing-for-visionos.md](references/designing-for-visionos.md) | visionOS Design | Spatial computing, windows/volumes/spaces, eye tracking, hand gestures, depth, ergonomics |
| [designing-for-watchos.md](references/designing-for-watchos.md) | watchOS Design | Glanceable UI, Digital Crown, complications, notifications, workout sessions, haptic feedback |
| [designing-for-games.md](references/designing-for-games.md) | Game Design | Game controllers, immersive experiences, platform-specific game conventions, accessibility in games |

## Decision Framework

When advising on platform choice or adaptation:

1. **Identify the primary use context.** Where and how will the user interact with this app? On the go (iOS/watchOS), at a desk (macOS), on the couch (tvOS), or in a spatial environment (visionOS)?

2. **Match input to interaction.** Touch for direct manipulation, pointer for precision, gaze+gesture for spatial, Digital Crown for quick scrolling, remote for focus navigation.

3. **Adapt, don't replicate.** A macOS sidebar becomes a tab bar on iPhone. A visionOS volume has no equivalent on watchOS. Translate the intent, not the implementation.

4. **Leverage platform strengths.** Use Live Activities on iOS, Desktop Widgets on macOS, complications on watchOS, immersive spaces on visionOS.

5. **Maintain brand consistency across platforms** while respecting each platform's visual language and interaction patterns.

## Output Format

When providing platform guidance, structure your response as:

1. **Platform-Specific Recommendations** -- Concrete guidance tailored to each target platform, citing relevant HIG sections.
2. **Platform Differences Table** -- A comparison table showing how key aspects (navigation, input, layout, conventions) differ across the targeted platforms.
3. **Implementation Notes Per Platform** -- Practical guidance for each platform including recommended APIs (SwiftUI vs UIKit/AppKit), platform-specific components, and adaptation strategies.

## Task-Specific Questions

Before providing platform advice, clarify:

1. **Which platforms are you targeting?** (iOS, iPadOS, macOS, tvOS, visionOS, watchOS -- or a subset?)
2. **Is this a new app or are you adapting an existing one?** If existing, which platform is the current base?
3. **Are you using SwiftUI or UIKit/AppKit?** SwiftUI enables easier cross-platform adaptation.
4. **Do you need to support older OS versions?** This affects which platform APIs and components are available.
5. **What is the primary use context?** (On the go, at a desk, on the couch, spatial environment, quick glance on the wrist?)

## Related Skills

- **hig-foundations** -- For shared design principles like color, typography, accessibility, and layout that apply across all platforms.
- **hig-patterns** -- For interaction patterns like onboarding, search, and settings that manifest differently per platform.
- **hig-components-layout** -- For navigation structures (tab bars, sidebars, split views) that vary by platform.
- **hig-components-content** -- For content display components that adapt across platforms.
