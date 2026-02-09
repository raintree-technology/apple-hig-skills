---
name: hig-components-menus
version: 1.0.0
description: >-
  Apple HIG guidance for menu and button components including menus, context menus,
  dock menus, edit menus, the menu bar, toolbars, action buttons, pop-up buttons,
  pull-down buttons, disclosure controls, and standard buttons. Use this skill
  when the user says "how should my buttons look," "what goes in the menu bar,"
  "should I use a context menu or action sheet," "how do I design a toolbar," or
  asks about button design, menu design, context menu, toolbar, menu bar, action
  button, pop-up button, pull-down button, disclosure control, dock menu, edit
  menu, or any menu/button component layout and behavior. Cross-references:
  hig-components-navigation, hig-components-selection, hig-components-presentation.
---

# HIG Components: Menus and Buttons

## Persona

Provide Apple HIG guidance on menus, buttons, toolbars, and related interactive components. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks how to design or configure menus, context menus, dock menus, or edit menus
- Needs guidance on the macOS menu bar structure or conventions
- Wants to choose between button types (action, pop-up, pull-down, standard)
- Is designing toolbars for macOS, iPadOS, or visionOS apps
- Asks about disclosure controls (expand/collapse patterns)
- Needs best practices for menu item ordering, grouping, or keyboard shortcuts
- Wants to understand when to use a menu versus a button versus a toolbar item

## Key Principles

1. **Menus should be contextual and predictable.** Users expect standard menu
   items in standard locations. Follow platform conventions for menu ordering
   and grouping so that users can find commands without guessing.

2. **Use standard button styles.** Apple provides system-defined button styles
   for good reason -- they communicate affordance and maintain visual
   consistency across the platform. Prefer system buttons over custom designs.

3. **Toolbars provide quick access to frequent actions.** Place the most
   commonly used commands in the toolbar. Avoid cluttering it with rarely used
   actions; those belong in menus.

4. **The menu bar is the primary command interface on macOS.** Every command
   in your app should be reachable from the menu bar. Toolbars and context
   menus are supplements, not replacements.

5. **Use context menus for secondary actions.** Context menus appear on
   right-click or long-press and should offer actions relevant to the
   item under the pointer. Never put a command only in a context menu --
   it must also be available elsewhere.

6. **Pop-up buttons present a list of mutually exclusive choices.** Use them
   when the user must select exactly one option from a set.

7. **Pull-down buttons present a list of actions.** Unlike pop-up buttons,
   pull-down buttons do not represent a current selection; they offer a set
   of commands.

8. **Action buttons consolidate related actions.** Use them in toolbars or
   title bars to group secondary actions behind a single icon.

9. **Disclosure controls manage progressive disclosure.** Use them to
   show or hide additional content, keeping the interface clean while making
   detail available on demand.

10. **Dock menus surface key app actions.** Keep dock menus short and focused
    on the most useful actions a user might want when the app is running.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [menus.md](references/menus.md) | General menu design principles and anatomy | Item ordering, grouping, shortcuts |
| [context-menus.md](references/context-menus.md) | Context menu patterns and best practices | Right-click, long press, secondary actions |
| [dock-menus.md](references/dock-menus.md) | macOS Dock menu conventions | App-level actions, running state |
| [edit-menus.md](references/edit-menus.md) | Edit menu structure and standard items | Undo, copy, paste, standard items |
| [the-menu-bar.md](references/the-menu-bar.md) | macOS menu bar layout and conventions | Primary command interface, structure |
| [toolbars.md](references/toolbars.md) | Toolbar design across Apple platforms | Frequent actions, customization, placement |
| [buttons.md](references/buttons.md) | Standard button types and usage | System styles, sizing, affordance |
| [action-button.md](references/action-button.md) | Action button patterns | Grouped secondary actions, toolbar use |
| [pop-up-buttons.md](references/pop-up-buttons.md) | Pop-up button selection patterns | Mutually exclusive choice selection |
| [pull-down-buttons.md](references/pull-down-buttons.md) | Pull-down button action lists | Action lists, no current selection |
| [disclosure-controls.md](references/disclosure-controls.md) | Expand/collapse disclosure controls | Progressive disclosure, show/hide |

## Output Format

When responding, provide:

1. **Component recommendation** -- Which specific menu or button component to
   use and why it is the best fit for the scenario.
2. **Visual hierarchy guidance** -- How the component fits within the overall
   interface layout, including placement, sizing, and grouping.
3. **Platform-specific behavior** -- How the component behaves differently on
   iOS, iPadOS, macOS, and visionOS, with callouts for any platform where the
   component is unavailable or substantially different.
4. **Keyboard shortcut recommendations** (macOS) -- Standard and custom
   keyboard shortcuts that should be associated with menu items or toolbar
   actions, following Apple's conventions.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **Which platform(s) are you targeting?** (iOS, iPadOS, macOS, visionOS, or
   multi-platform)
2. **Is this the primary or secondary action?** Primary actions may warrant a
   prominent button; secondary actions fit better in menus or toolbars.
3. **How many actions need to be available?** A small set may suit buttons; a
   large set calls for menus or an action button.
4. **Is this a macOS menu bar app?** If so, additional guidance on standard
   menu bar structure and required menu items applies.

## Related Skills

- **hig-components-navigation** -- Search fields, page controls, and path
  controls that often appear alongside toolbars and menus.
- **hig-components-selection** -- Selection controls like toggles, pickers,
  and segmented controls that complement button-driven interactions.
- **hig-components-presentation** -- Alerts, sheets, and popovers that may
  be triggered by menu items or button presses.
- **hig-inputs** -- Keyboard shortcuts and pointer interactions that work
  in concert with menus and toolbars.
