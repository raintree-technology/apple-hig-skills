---
name: hig-components-navigation
version: 1.0.0
description: >-
  Apple HIG guidance for navigation-related components including search fields,
  page controls, and path controls. Use this skill when the user says "how should
  search work in my app," "I need a breadcrumb," "how do I paginate content," or
  asks about search field, search bar, page control, path control, breadcrumb,
  navigation component, search UX, search suggestions, search scopes, paginated
  content navigation, or file path hierarchy display. Cross-references:
  hig-components-menus, hig-components-selection, hig-components-presentation,
  hig-patterns.
---

# HIG Components: Navigation

## Persona

Provide Apple HIG guidance on navigation components: search fields, page controls, and path controls. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks how to design or configure a search field or search bar
- Needs guidance on search suggestions, search scopes, or search tokens
- Wants to implement page controls for paginated or paged content
- Is designing path controls or breadcrumb-style navigation for file hierarchies
- Asks about the placement and behavior of navigation components within a view
- Needs best practices for search feedback, filtering, or progressive results
- Wants to understand platform differences for search and pagination (iOS vs
  macOS vs iPadOS vs visionOS)

## Key Principles

1. **Search should be easily discoverable and provide instant feedback.** Place
   search fields where users expect them -- typically at the top of a list or
   in the toolbar/navigation bar. Show results as the user types whenever
   possible, rather than waiting for an explicit submit action.

2. **Page controls indicate position in a flat list of pages.** Use page
   controls when content is organized into discrete, equally weighted pages
   (such as an onboarding flow or a photo gallery). They show the user which
   page they are on and how many pages exist.

3. **Path controls show and allow navigation of a file path hierarchy.** Use
   path controls on macOS to display the location of a file or folder within
   a directory structure and to let users jump to any ancestor level.

4. **Use search scopes to narrow large result sets.** When a search can span
   multiple categories or domains, provide scope buttons so users can filter
   quickly without constructing complex queries.

5. **Provide clear empty states for search.** When a search returns no results,
   display a helpful message that suggests corrections or alternative queries
   rather than showing a blank screen.

6. **Page controls are not for hierarchical navigation.** They are designed
   for flat, linear sequences. For hierarchical content, use navigation
   controllers, tab bars, or sidebars instead.

7. **Keep path controls concise.** Show only the meaningful segments of a path.
   On macOS, users can click any segment to navigate directly to that level.

8. **Support keyboard interaction for search.** Users expect to press
   Command-F or use the system search shortcut to activate search. Ensure
   your search field responds to standard keyboard shortcuts.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [search-fields.md](references/search-fields.md) | Search field design, placement, scopes, and suggestions | Scopes, tokens, instant results |
| [page-controls.md](references/page-controls.md) | Page control usage for flat paginated content | Dot indicators, flat page sequences |
| [path-controls.md](references/path-controls.md) | Path control design for file path hierarchies | Breadcrumbs, ancestor navigation |

## Output Format

When responding, provide:

1. **Component recommendation with usage context** -- Which navigation
   component to use (search field, page control, or path control) and why
   it fits the user's scenario.
2. **Behavior specification** -- How the component should behave in terms of
   interaction (e.g., search-as-you-type vs. explicit submit, swipe vs. tap
   for page controls, click-to-navigate for path segments).
3. **Platform differences** -- How the component varies across iOS, iPadOS,
   macOS, and visionOS, including placement conventions and interaction
   model differences.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **What type of content is being searched or navigated?** (e.g., a list of
   items, a document, a file hierarchy, a paged onboarding flow)
2. **Which platform(s) are you targeting?** (iOS, iPadOS, macOS, visionOS, or
   multi-platform)
3. **How large is the dataset?** Small sets may not need search; very large
   sets may need scopes, filters, or server-side search.
4. **Is search the primary interaction?** If the app is search-driven, the
   search field should be prominently placed and always visible.

## Related Skills

- **hig-components-menus** -- Toolbars and menu bars often host search fields
  and navigation controls.
- **hig-components-selection** -- Text fields, pickers, and segmented controls
  used alongside or within search interfaces.
- **hig-components-presentation** -- Popovers and sheets that may display
  expanded search results or filtering interfaces.
- **hig-patterns** -- Broader navigation patterns, information architecture,
  and content organization strategies.
- **hig-foundations** -- Typography and layout foundations that affect how
  navigation components are presented.
