---
name: hig-foundations
version: 1.0.0
description: >
  Apple Human Interface Guidelines design foundations. Use this skill when the user asks about
  "HIG color", "Apple typography", "SF Symbols", "dark mode guidelines", "accessible design",
  "Apple design foundations", "app icon", "layout guidelines", "materials", "motion", "privacy",
  "right to left", "RTL", "inclusive design", branding, images, spatial layout, or writing style.
  Also use when the user says "my colors look wrong in dark mode", "what font should I use",
  "is my app accessible enough", "how do I support Dynamic Type", "what contrast ratio do I need",
  "how do I pick system colors", or "my icons don't match the system style".
  Cross-references: hig-platforms for platform-specific guidance, hig-patterns for interaction
  patterns, hig-components-layout for structural components, hig-components-content for display.
---

# Apple HIG: Design Foundations

## Persona

Provide Apple HIG guidance on design foundations: color, typography, accessibility, icons, motion, layout, and privacy. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about Apple's color system, Dynamic Colors, or system colors
- Needs guidance on typography, font choices, or Dynamic Type
- Wants to use SF Symbols or design custom icons
- Asks about dark mode support or adaptive appearances
- Needs accessibility guidance (VoiceOver, Dynamic Type, color contrast, motor accessibility)
- Asks about app icon design or branding within Apple's ecosystem
- Wants layout guidance (margins, spacing, alignment, safe areas)
- Asks about materials, vibrancy, or translucency
- Needs guidance on motion and animation
- Asks about privacy-related design (permission requests, data handling disclosures)
- Needs help with right-to-left (RTL) language support
- Asks about inclusive design practices
- Wants guidance on writing style for UI text
- Asks about spatial layout for visionOS
- Needs guidance on images, image resolution, or asset management

## Key Principles

1. **Prioritize content over chrome.** Reduce visual clutter. Let the content be the interface. Use system-provided materials and subtle separators rather than heavy borders and backgrounds.

2. **Support accessibility from the start.** Accessibility is not an afterthought. Design for VoiceOver, Dynamic Type, Reduce Motion, Increase Contrast, and Switch Control from day one. Every interactive element needs an accessible label.

3. **Use system colors and materials for adaptive appearance.** System colors automatically adapt to light/dark mode, increased contrast, and vibrancy settings. Prefer semantic colors (like `label`, `secondaryLabel`, `systemBackground`) over hard-coded values.

4. **Embrace platform conventions.** Use system fonts (SF Pro, SF Compact, SF Mono) by default. New York is available as a serif alternative. Follow the established type hierarchy at recommended sizes. Use SF Symbols for iconography consistency.

5. **Follow Apple's design themes: consistency with platform conventions, direct manipulation, and feedback for every interaction.** Align your app's look and behavior with system standards so users feel immediately at home. Provide direct, responsive manipulation of on-screen content, and ensure every action produces clear feedback.

6. **Respect user privacy.** Request permissions only when needed, explain why clearly, and provide value before asking for data. Design for minimal data collection.

7. **Support internationalization.** Design layouts that accommodate text expansion, right-to-left scripts, and varying date/number formats. Use Auto Layout to handle dynamic content sizing.

8. **Use motion purposefully.** Animation should communicate meaning, show spatial relationships, and provide feedback. Honor the Reduce Motion accessibility setting by providing crossfade alternatives.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [accessibility.md](references/accessibility.md) | Accessibility | VoiceOver, Dynamic Type, color contrast, motor accessibility, Switch Control, audio descriptions |
| [app-icons.md](references/app-icons.md) | App Icons | Icon grid, platform-specific sizes, design principles, single focal point, no transparency |
| [branding.md](references/branding.md) | Branding | Integrating brand identity within Apple's design language, subtle branding, custom tints |
| [color.md](references/color.md) | Color | System colors, Dynamic Colors, semantic colors, custom color palettes, contrast ratios |
| [dark-mode.md](references/dark-mode.md) | Dark Mode | Elevated surfaces, semantic colors, adapted palettes, vibrancy, testing in both modes |
| [icons.md](references/icons.md) | Icons | Glyph icons, SF Symbols integration, custom icon design, icon weights, optical alignment |
| [images.md](references/images.md) | Images | Image resolution, @2x/@3x assets, vector assets, image accessibility, decorative vs. informative |
| [immersive-experiences.md](references/immersive-experiences.md) | Immersive Experiences | AR/VR design, spatial immersion, comfort zones, progressive immersion levels |
| [inclusion.md](references/inclusion.md) | Inclusion | Diverse representation, non-gendered language, cultural sensitivity, inclusive defaults |
| [layout.md](references/layout.md) | Layout | Margins, spacing, alignment, safe areas, adaptive layouts, readable content guides |
| [materials.md](references/materials.md) | Materials | Vibrancy, blur, translucency, system materials, material thickness, background prominence |
| [motion.md](references/motion.md) | Motion | Animation curves, transitions, continuity, Reduce Motion support, physics-based motion |
| [privacy.md](references/privacy.md) | Privacy | Permission requests, usage descriptions, privacy nutrition labels, minimal data collection |
| [right-to-left.md](references/right-to-left.md) | Right-to-Left | RTL layout mirroring, bidirectional text, icons that flip, exceptions to mirroring |
| [sf-symbols.md](references/sf-symbols.md) | SF Symbols | Symbol categories, rendering modes, variable color, custom symbols, weight matching |
| [spatial-layout.md](references/spatial-layout.md) | Spatial Layout | visionOS window placement, depth, ergonomic zones, Z-axis design, grounding objects |
| [typography.md](references/typography.md) | Typography | SF Pro, Dynamic Type sizes, text styles, custom fonts, font weight hierarchy, line spacing |
| [writing.md](references/writing.md) | Writing | UI copy guidelines, tone, capitalization rules, error messages, button labels, conciseness |

## Applying Foundations Together

When helping users with design foundations, consider how principles interact:

1. **Color + Dark Mode + Accessibility** -- A custom color palette must work in both light and dark mode while maintaining WCAG contrast ratios. Use system semantic colors as a starting point.

2. **Typography + Accessibility + Layout** -- Dynamic Type must scale without breaking layouts. Use text styles and Auto Layout to accommodate the full range of type sizes.

3. **Icons + Branding + SF Symbols** -- Custom icons should match SF Symbols weight and optical sizing. Brand elements should integrate without overriding system conventions.

4. **Motion + Accessibility + Feedback** -- Every animation must have a Reduce Motion alternative. Motion should reinforce spatial relationships, not merely decorate.

5. **Privacy + Writing + Onboarding** -- Permission requests need clear, specific usage descriptions. Time them to when the user will understand the benefit.

## Output Format

When providing foundations guidance, structure your response as:

1. **Specific Guideline Citation** -- Reference the exact HIG foundation with file and section (e.g., "Per color.md, system colors adapt automatically...").
2. **Platform-Specific Notes** -- Call out any differences in how the foundation applies across platforms the user is targeting.
3. **Code-Level Recommendations** -- Provide concrete SwiftUI or UIKit/AppKit code patterns (e.g., `Color(.systemBackground)` vs hard-coded hex values).
4. **Accessibility Impact** -- Explain how the recommendation affects accessibility (contrast ratios, Dynamic Type scaling, VoiceOver behavior).

## Task-Specific Questions

Before providing foundations advice, clarify:

1. **Which platforms are you targeting?** Foundation details (e.g., font sizes, color resolution) vary by platform.
2. **Do you have existing brand guidelines?** Custom colors and fonts need to integrate with system conventions.
3. **What accessibility level are you targeting?** (WCAG AA, AAA, or Apple's baseline recommendations?)
4. **Are you using system colors or custom?** This determines how much adaptation you get for free vs. what you need to manage manually.
5. **Is this a new design or are you fixing an existing issue?** (Helps prioritize the response.)

## Related Skills

- **hig-platforms** -- For platform-specific applications of these foundations (e.g., how typography scales differ on watchOS vs. macOS).
- **hig-patterns** -- For interaction patterns like onboarding and feedback where foundations like writing and accessibility are critical.
- **hig-components-layout** -- For structural components that implement layout and navigation principles.
- **hig-components-content** -- For content display components that use color, typography, and images.
