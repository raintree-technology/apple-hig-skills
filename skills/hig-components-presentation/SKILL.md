---
name: hig-components-presentation
version: 1.0.0
description: >-
  Apple HIG guidance for presentation components including alerts, action sheets,
  popovers, sheets, and digit entry views. Use this skill when the user says
  "should I use an alert or a sheet," "how do I show a confirmation dialog,"
  "when should I use a popover," "my modals are annoying users," or asks about
  alert design, action sheet, popover, sheet, modal, dialog, digit entry,
  confirmation dialog, warning dialog, modal presentation, non-modal content,
  destructive action confirmation, or overlay UI patterns. Cross-references:
  hig-components-menus, hig-components-selection, hig-components-navigation,
  hig-patterns.
---

# HIG Components: Presentation

## Persona

Provide Apple HIG guidance on presentation components (alerts, action sheets, popovers, sheets, digit entry views). Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks how to design alerts, confirmation dialogs, or warning dialogs
- Needs guidance on when to use an action sheet versus an alert
- Wants to implement popovers for non-modal content on iPad or Mac
- Is designing sheets for focused tasks that maintain parent context
- Asks about digit entry views for PIN or verification code input
- Needs best practices for modal versus non-modal presentation
- Wants to understand how to handle destructive actions with confirmations
- Asks about button ordering, title wording, or message text in alerts
- Needs to decide between different presentation styles for a given scenario

## Key Principles

1. **Use alerts sparingly for important information requiring acknowledgment.**
   Alerts interrupt the user's workflow and demand a response. Reserve them for
   critical situations: errors that need attention, destructive actions that
   need confirmation, or important information the user must acknowledge before
   continuing.

2. **Sheets are for focused tasks that maintain context.** A sheet slides in
   from the edge of the screen (or appears attached to a window on macOS) and
   lets the user complete a task without losing sight of where they came from.
   Use sheets for creating new items, editing settings, or completing multi-step
   forms.

3. **Popovers are for non-modal content on iPad and Mac.** Popovers appear
   next to the element that triggered them and can be dismissed by tapping
   outside. They are ideal for displaying additional information, options,
   or controls without taking over the screen.

4. **Action sheets are for choosing among a set of actions.** Present an action
   sheet when the user needs to pick from multiple actions related to the
   current context, especially when one of the options is destructive. On
   iPhone, action sheets slide up from the bottom; on iPad, they appear as
   popovers.

5. **Minimize interruptions.** Every modal presentation is an interruption.
   Before reaching for an alert or sheet, consider whether the information
   could be presented inline or whether the action could be made undoable
   instead of requiring confirmation.

6. **Keep alert text concise and actionable.** Use a short, descriptive title.
   If a message body is needed, make it brief. Button labels should clearly
   describe the action they perform -- prefer specific verbs like "Delete"
   or "Save" over generic labels like "OK."

7. **Mark destructive actions clearly.** In both alerts and action sheets,
   use the destructive button style (red text) for actions that delete data
   or cannot be undone. Place destructive buttons on the left side of alerts,
   where users are less likely to tap reflexively.

8. **Provide a cancel option for alerts and action sheets that present choices.** Single-button acknowledgment alerts use OK or a similar dismissal.
   For alerts and action sheets that offer multiple actions, include a cancel
   option so the user can back out without committing. On action sheets, the
   cancel button appears at the bottom, separated from the other options.

9. **Digit entry views should be focused and accessible.** When asking for
   a PIN or verification code, present a dedicated entry view with
   appropriately sized input fields, automatic advancement between digits,
   and support for paste and autofill.

10. **Adapt presentation style to the platform.** The same conceptual
    interaction may use different presentation components on iPhone, iPad,
    Mac, and visionOS. Follow each platform's conventions for how modals,
    popovers, and sheets appear and behave.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [alerts.md](references/alerts.md) | Alert design, button ordering, title and message text | Confirmation, destructive actions, wording |
| [action-sheets.md](references/action-sheets.md) | Action sheet patterns and destructive action handling | Multiple actions, cancel option |
| [popovers.md](references/popovers.md) | Popover design for non-modal content on iPad and Mac | Non-modal, dismiss on tap outside |
| [sheets.md](references/sheets.md) | Sheet presentation for focused tasks | Modal task, context preservation |
| [digit-entry-views.md](references/digit-entry-views.md) | Digit/PIN entry view design and accessibility | PIN input, autofill, auto-advance |

## Output Format

When responding, provide:

1. **Recommended presentation type with rationale** -- Which component (alert,
   action sheet, popover, sheet, or digit entry view) best fits the scenario,
   and why alternatives are less suitable.
2. **Content guidelines** -- How to write the title, message body, and button
   labels for the chosen component, following Apple's tone and brevity rules.
3. **Dismiss behavior** -- How the user dismisses the presentation (explicit
   button, tap outside, swipe down) and what happens on dismissal (save,
   discard, or cancel).
4. **Alternative approaches** -- When the scenario might not need a modal
   presentation at all (e.g., inline feedback, undo support, or progressive
   disclosure instead).

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **What information or action does the presentation need?** (e.g., confirm
   a destructive action, display an error, collect input, show options)
2. **Is it blocking or non-blocking?** Blocking presentations (alerts) demand
   attention; non-blocking ones (popovers) let users continue interacting.
3. **Which platform(s) are you targeting?** (iOS, iPadOS, macOS, visionOS, or
   multi-platform -- action sheets become popovers on iPad, for example)
4. **How often does this appear?** Frequent presentations frustrate users;
   consider whether the trigger can be reduced or the interaction redesigned.

## Related Skills

- **hig-components-menus** -- Buttons, menus, and toolbar items that trigger
  alerts, sheets, and popovers.
- **hig-components-selection** -- Input controls (text fields, pickers, toggles)
  commonly used within sheets and popovers.
- **hig-components-navigation** -- Search fields and navigation controls that
  may appear inside presented views.
- **hig-patterns** -- Broader guidance on modality, interruptions, and user
  flow management.
- **hig-foundations** -- Color, typography, and layout principles that apply
  to all presentation components.
