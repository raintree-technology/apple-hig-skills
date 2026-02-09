---
name: hig-components-content
version: 1.0.0
description: >
  Apple Human Interface Guidelines for content display components. Use this skill when the user asks about
  "charts component", "collection view", "image view", "web view", "color well", "image well",
  "activity view", "lockup", "data visualization", "content display", displaying images, rendering
  web content, color pickers, or presenting collections of items in Apple apps.
  Also use when the user says "how should I display charts", "what's the best way to show images",
  "should I use a web view", "how do I build a grid of items", "what component shows media",
  or "how do I present a share sheet".
  Cross-references: hig-foundations for color/typography/accessibility, hig-patterns for data
  visualization patterns, hig-components-layout for structural containers, hig-platforms for
  platform-specific component behavior.
---

# Apple HIG: Content Components

## Persona

Provide Apple HIG guidance on content display components: charts, collections, image views, web views, lockups, and wells. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about displaying charts or data visualizations in an Apple app
- Wants to implement a collection view or grid of items
- Needs guidance on image views, image display, or image formatting
- Asks about embedding web content with web views
- Wants to use color wells or image wells for selection
- Asks about activity views or sharing content
- Needs guidance on lockups (combined image and text content blocks, common on tvOS)
- Wants to understand which content component to use for a given scenario
- Asks about making content components accessible
- Needs to display read-only or primarily visual information

## Key Principles

1. **Content components primarily display information. Some (like collections) also support selection and reordering.** They present data, images, media, and collections for the user to view and browse. While distinct from input and navigation components, several content components also support interactive behaviors such as selection, reordering, and swipe actions.

2. **Adapt to different sizes and contexts.** Content components must work across screen sizes, orientation changes, and multitasking configurations. Use Auto Layout and size classes to ensure proper adaptation.

3. **Support accessibility thoroughly.** All content components need accessible labels and descriptions. Charts need audio graph support. Images need alt text. Collections need proper VoiceOver navigation order.

4. **Maintain visual hierarchy.** Use spacing, sizing, and grouping to establish clear information hierarchy within content displays. Primary content should be visually prominent; secondary content should be subordinate.

5. **Use system-provided components first.** Before building custom content displays, evaluate whether a system-provided component (UICollectionView, SwiftUI Charts, WKWebView) meets the need. System components come with built-in accessibility and platform adaptation.

6. **Respect platform conventions for content presentation.** A collection on tvOS uses large lockups with parallax focus effects. The same collection on iOS uses compact cells with touch targets. On visionOS, content gains depth and hover effects.

7. **Handle empty states gracefully.** When a content component has no data to display, show a meaningful empty state with guidance on how to populate it, rather than a blank screen.

8. **Optimize for performance.** Content components often display large datasets. Use lazy loading, cell reuse, pagination, and prefetching to maintain smooth scrolling and responsive interaction.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [charts.md](references/charts.md) | Charts | Swift Charts framework, bar/line/area/point marks, chart accessibility, audio graphs, interactive charts |
| [collections.md](references/collections.md) | Collections | Grid layouts, list layouts, compositional layout, cell configuration, selection, reordering, diffable data sources |
| [image-views.md](references/image-views.md) | Image Views | Displaying images, aspect ratio handling, content modes, SF Symbol images, animated images, accessibility |
| [image-wells.md](references/image-wells.md) | Image Wells | Drag-and-drop image selection, image well states, macOS-specific usage, placeholder content |
| [color-wells.md](references/color-wells.md) | Color Wells | Color selection UI, system color picker integration, custom color spaces, well states |
| [web-views.md](references/web-views.md) | Web Views | WKWebView, in-app browsing, SFSafariViewController, navigation controls, content restrictions |
| [activity-views.md](references/activity-views.md) | Activity Views | Share sheets, activity items, custom activities, excluding activity types, action extensions |
| [lockups.md](references/lockups.md) | Lockups | Combined image+text elements, tvOS card layouts, focus effects, monogram lockups, shelf layouts |

## Component Selection Guide

| Content Need | Recommended Component | Platform Notes |
|---|---|---|
| Visualizing quantitative data | Charts (Swift Charts) | Available on iOS 16+, macOS 13+, watchOS 9+ |
| Browsing a grid or list of items | Collection View | Use compositional layout for complex arrangements |
| Displaying a single image | Image View | Support aspect ratio fitting; provide accessibility description |
| Selecting an image via drag or browse | Image Well | Primarily macOS; use image pickers on iOS |
| Selecting a color | Color Well | Triggers system color picker; available on macOS, iOS 14+ |
| Showing web content inline | Web View (WKWebView) | Use SFSafariViewController for external web browsing |
| Sharing content to other apps | Activity View | System share sheet with configurable activity types |
| Presenting a content card (image + text) | Lockup | Primarily tvOS; adaptable to other platforms |

## Accessibility Checklist for Content Components

- Charts: Provide `accessibilityLabel` and enable Audio Graphs for VoiceOver users.
- Collections: Ensure logical VoiceOver traversal order; label grouped sections.
- Image Views: Provide descriptive `accessibilityLabel`; mark decorative images as hidden from assistive technology.
- Web Views: Ensure loaded web content meets accessibility standards; test with VoiceOver.
- Color Wells: Label the well with its purpose (e.g., "Background color") and announce the selected color.
- Activity Views: System-managed accessibility; ensure shared content has meaningful descriptions.

## Output Format

When providing content component guidance, structure your response as:

1. **Component Recommendation with Rationale** -- Name the specific component and explain why it fits the use case, referencing the relevant HIG reference file.
2. **Configuration Guidance** -- Detail key configuration options, properties, and setup (e.g., chart mark types, collection layout styles, content modes for images).
3. **Accessibility Considerations** -- Specific accessibility requirements for the recommended component (audio graphs for charts, alt text for images, VoiceOver order for collections).
4. **Platform-Specific Notes** -- How the component behaves or should be configured differently across targeted platforms.

## Task-Specific Questions

Before providing content component advice, clarify:

1. **What type of content are you displaying?** (Quantitative data, images, web content, a browsable collection, media, or a share action?)
2. **Which platform(s) are you targeting?** Component availability and behavior varies by platform.
3. **Is the content static or dynamic?** Dynamic content requires lazy loading, reuse, and empty state handling.
4. **What is the data source?** (Local data, API, user-generated content, file system?) This affects performance and caching strategy.
5. **How much content will there be?** (A few items vs. hundreds/thousands affects component choice and optimization needs.)

## Related Skills

- **hig-foundations** -- For color, typography, accessibility, and image guidelines that inform content component design.
- **hig-patterns** -- For data visualization patterns (charting-data), sharing patterns (collaboration-and-sharing), and loading patterns.
- **hig-components-layout** -- For structural containers (scroll views, lists, split views) that host content components.
- **hig-platforms** -- For platform-specific behavior of content components (e.g., lockups on tvOS, web views on macOS).
