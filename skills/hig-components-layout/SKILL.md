---
name: hig-components-layout
version: 1.0.0
description: >
  Apple Human Interface Guidelines for layout and navigation components. Use this skill when the user
  asks about "sidebar", "split view", "tab bar", "tab view", "scroll view", "window design", "panel",
  "list view", "table view", "column view", "outline view", "navigation structure", "app layout",
  "boxes", "ornaments", or organizing content hierarchically in Apple apps.
  Also use when the user says "how should I organize my app", "what navigation pattern should I use",
  "my layout breaks on iPad", "how do I build a sidebar", "should I use tabs or a sidebar",
  or "my app doesn't adapt to different screen sizes".
  Cross-references: hig-foundations for layout/spacing principles, hig-platforms for platform-specific
  navigation, hig-patterns for multitasking and full-screen, hig-components-content for content display.
---

# Apple HIG: Layout and Navigation Components

## Persona

Provide Apple HIG guidance on layout and navigation components: sidebars, split views, tab bars, scroll views, windows, panels, lists, and ornaments. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about sidebars, sidebar navigation, or source lists
- Wants to implement split views or multi-column layouts
- Needs guidance on tab bars or tab views for top-level navigation
- Asks about scroll views, scrolling behavior, or content scrolling
- Wants to design windows or panels for macOS or visionOS
- Asks about lists, tables, or outline views for data presentation
- Needs column view navigation (Finder-style browsing)
- Asks about boxes or grouped content containers
- Wants to use ornaments (visionOS toolbar attachments)
- Needs to choose between navigation patterns (flat vs. hierarchical vs. content-driven)
- Asks about adapting navigation across iPhone, iPad, and Mac
- Wants to know how layout components behave in multitasking or different size classes

## Key Principles

1. **Organize content hierarchically.** Structure information in a clear hierarchy from broad categories to specific details. Use navigation patterns that reveal this hierarchy naturally -- sidebars for top-level sections, lists for browsable items, detail views for individual content.

2. **Use standard navigation patterns.** Tab bars provide flat navigation between peer sections (ideal for iPhone). Sidebars provide deep, hierarchical navigation (ideal for iPad and Mac). Choose the pattern that matches your information architecture and target platform.

3. **Adapt layout to screen size.** A three-column layout on iPad collapses to a single-column stack on iPhone. Use size classes and adaptive APIs (NavigationSplitView) to provide the right layout for each context automatically.

4. **Support multitasking on iPad.** Layout components must respond gracefully to Split View, Slide Over, and Stage Manager. Test at every split ratio and size class transition.

5. **Maintain spatial consistency on visionOS.** Windows, volumes, and ornaments exist in shared space. Position them predictably. Use ornaments to attach toolbars and controls to windows without occluding content.

6. **Use scroll views for content that exceeds the viewport.** Enable paging for discrete content units. Support pull-to-refresh where appropriate. Ensure scroll indicators are visible and content insets respect safe areas.

7. **Keep navigation predictable.** Users should always know where they are, how they got there, and how to go back. Use back buttons, breadcrumbs, and clear section titles to maintain orientation.

8. **Prefer system components over custom implementations.** UINavigationController, UISplitViewController, NavigationSplitView, and TabView provide built-in adaptivity, accessibility, and state restoration. Custom navigation risks breaking user expectations.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [sidebars.md](references/sidebars.md) | Sidebars | Source lists, sidebar appearance, selection state, collapsible sections, iPad/Mac sidebar patterns |
| [column-views.md](references/column-views.md) | Column Views | Finder-style browsing, progressive disclosure through columns, hierarchical data navigation |
| [outline-views.md](references/outline-views.md) | Outline Views | Expandable/collapsible hierarchies, disclosure triangles, tree structures, macOS outline style |
| [split-views.md](references/split-views.md) | Split Views | Two/three column layouts, NavigationSplitView, column visibility, adaptive collapse behavior |
| [tab-views.md](references/tab-views.md) | Tab Views | Segmented tab views, page-style tabs, macOS tab grouping, tab customization |
| [tab-bars.md](references/tab-bars.md) | Tab Bars | Bottom tab bars (iOS), tab bar items, badge counts, tab bar customization, maximum tab count |
| [scroll-views.md](references/scroll-views.md) | Scroll Views | Scrolling direction, paging, scroll indicators, content insets, pull-to-refresh, rubber banding |
| [windows.md](references/windows.md) | Windows | macOS/visionOS window management, window sizing, full-screen windows, window restoration, scenes |
| [panels.md](references/panels.md) | Panels | Inspector panels, utility panels, floating panels, macOS panel conventions, panel lifecycle |
| [lists-and-tables.md](references/lists-and-tables.md) | Lists and Tables | Plain/grouped/inset-grouped styles, swipe actions, row accessories, section headers, table editing |
| [boxes.md](references/boxes.md) | Boxes | Content grouping containers, box borders, labeled boxes, macOS grouping conventions |
| [ornaments.md](references/ornaments.md) | Ornaments | visionOS toolbar attachments, ornament positioning, bottom ornaments, ornament visibility |

## Navigation Pattern Selection

| App Structure | Recommended Pattern | Platform Adaptation |
|---|---|---|
| 3-5 peer top-level sections | Tab Bar | iPhone: bottom tab bar. iPad: sidebar (with `.sidebarAdaptable` style, iPadOS 18+; otherwise stays as tab bar). Mac: sidebar or toolbar tabs |
| Deep hierarchical content | Sidebar + NavigationSplitView | iPhone: single column stack. iPad: two/three columns. Mac: full multi-column |
| Browsing a deep file/folder tree | Column View | Mac: Finder-style. iPad: adaptable. iPhone: push navigation |
| Flat list with detail | Split View (two column) | iPhone: push/pop stack. iPad/Mac: primary + detail columns |
| Document-based with inspectors | Window + Panels | Mac: main window with inspector panel. iPad: sheet or popover |
| Spatial app with tools | Window + Ornaments | visionOS: ornaments attached to window. Falls back to toolbars on other platforms |

## Layout Adaptation Checklist

When designing layout components, verify:

- [ ] **Compact width (iPhone portrait):** Does navigation collapse to a single stack? Are tab bars visible?
- [ ] **Regular width (iPad landscape, Mac):** Does navigation expand to sidebar + detail? Is space used effectively?
- [ ] **Multitasking (iPad):** Does the layout adapt at every split ratio? Does it work in Slide Over?
- [ ] **Accessibility:** Does the layout support Dynamic Type at all sizes? Is VoiceOver navigation order logical?
- [ ] **Orientation changes:** Does content reflow correctly between portrait and landscape?
- [ ] **visionOS:** Are windows positioned ergonomically? Do ornaments stay accessible? Is depth used meaningfully?

## Output Format

When providing layout and navigation guidance, structure your response as:

1. **Recommended Navigation Pattern** -- Name the pattern (tab bar, sidebar, split view, etc.) with rationale for why it fits the app's information architecture.
2. **Layout Hierarchy Diagram** -- Describe the view hierarchy from the root container down (e.g., TabView > NavigationSplitView > List > Detail), showing how components nest.
3. **Platform Adaptation Notes** -- Explain how the layout adapts across targeted platforms and size classes (compact vs. regular width, multitasking splits).
4. **Size Class Behavior** -- Detail what changes at each size class transition (e.g., sidebar collapses to tab bar, three columns become two, etc.).

## Task-Specific Questions

Before providing layout and navigation advice, clarify:

1. **What is your app's information architecture?** (How many sections, how deep is the hierarchy, what are the top-level categories?)
2. **How many top-level sections does your app have?** (This determines whether tab bar, sidebar, or another pattern is appropriate.)
3. **Which platforms are you targeting?** Navigation patterns differ fundamentally across iPhone, iPad, Mac, and visionOS.
4. **Do you need to support multitasking on iPad?** (Split View, Slide Over, and Stage Manager impose layout constraints.)
5. **Are you using SwiftUI or UIKit?** (NavigationSplitView vs UISplitViewController have different adaptation behaviors.)

## Related Skills

- **hig-foundations** -- For layout spacing, margins, safe areas, and alignment principles that inform structural component configuration.
- **hig-platforms** -- For platform-specific navigation conventions (tab bars on iOS, sidebars on macOS, ornaments on visionOS).
- **hig-patterns** -- For multitasking, full-screen, and launching patterns that interact with layout components.
- **hig-components-content** -- For the content (collections, charts, images) displayed within layout containers.
