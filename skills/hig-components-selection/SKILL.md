---
name: hig-components-selection
version: 1.0.0
description: >-
  Apple HIG guidance for selection and input controls including pickers, toggles,
  sliders, steppers, segmented controls, combo boxes, text fields, text views,
  labels, token fields, virtual keyboards, rating indicators, and gauges. Use
  this skill when the user says "picker or segmented control," "how should my
  form look," "what keyboard type should I use," "toggle vs checkbox," or asks
  about picker design, toggle, switch, slider, stepper, text field, text input,
  segmented control, combo box, label, token field, virtual keyboard, rating
  indicator, gauge, form design, input validation, or control state management.
  Cross-references: hig-components-menus, hig-components-presentation,
  hig-components-navigation.
---

# HIG Components: Selection and Input Controls

## Persona

Provide Apple HIG guidance on selection and input controls (pickers, toggles, sliders, steppers, segmented controls, text fields). Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks how to design forms or input interfaces with Apple-style controls
- Needs to choose between different selection controls (picker vs segmented
  control vs toggle vs slider)
- Wants guidance on text field or text view design, validation, or behavior
- Is implementing combo boxes or token fields on macOS
- Asks about virtual keyboard configuration for different input types
- Needs best practices for sliders, steppers, or continuous value controls
- Wants to use rating indicators or gauges to display values
- Asks about control states (enabled, disabled, focused, selected)
- Needs guidance on labeling and accessibility for input controls
- Wants to understand when to use which type of selection control

## Key Principles

1. **Selection controls should have clear current state.** Users must always
   be able to tell at a glance what value is currently selected. Toggles
   should clearly show on/off, segmented controls should highlight the active
   segment, and pickers should display the current selection prominently.

2. **Prefer standard system controls for familiarity.** Apple's built-in
   controls are designed for consistency and accessibility. Users already
   know how they work. Custom controls introduce a learning curve and may
   break accessibility features. Use system controls unless you have a
   compelling reason not to.

3. **Toggles are for binary states.** Use a toggle (switch) when the user
   needs to turn something on or off. In Settings-style screens, toggle
   changes should take effect immediately. Within modal forms, changes may
   be committed when the user confirms.

4. **Segmented controls are for mutually exclusive options.** Use segmented
   controls when the user must choose one option from a small set (typically
   2-5 items). Each segment should be roughly equal in importance and the
   labels should be short.

5. **Sliders are for continuous values.** Use sliders when the user needs to
   select a value from a continuous range and precise numeric input is not
   critical. Provide minimum and maximum labels or icons to indicate the
   range endpoints.

6. **Pickers are for long option lists.** When there are too many options for
   a segmented control or set of radio buttons, use a picker. Pickers work
   well for dates, times, and other structured data with many possible values.

7. **Steppers are for small, precise adjustments.** Use steppers when the
   user needs to increment or decrement a value in fixed steps. Always
   display the current value next to the stepper and define reasonable
   minimum and maximum bounds.

8. **Text fields are for short, single-line input.** Use text fields for
   names, email addresses, and other brief text. Use text views for
   multi-line content like comments or descriptions. Configure the keyboard
   type to match the expected input (email, URL, number, etc.).

9. **Combo boxes combine text input with a selection list.** Available on
   macOS, combo boxes let the user either type a value or choose from a
   predefined list. Use them when the set of valid values is large but the
   user may also need to enter a custom value.

10. **Token fields represent discrete values as tokens.** On macOS, token
    fields turn entered text into visual tokens (chips). Use them for
    email recipients, tags, or other collections of discrete items.

11. **Gauges and rating indicators display values, not collect input.**
    Gauges show a value within a range (like a progress or level indicator).
    Rating indicators display a rating, often as stars. Use these for
    display purposes; for user input of ratings, use an interactive variant.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [controls.md](references/controls.md) | General control principles, states, and best practices | States, affordance, system controls |
| [toggles.md](references/toggles.md) | Toggle (switch) design for binary on/off states | On/off, immediate effect |
| [segmented-controls.md](references/segmented-controls.md) | Segmented control design for mutually exclusive options | 2-5 options, equal weight |
| [sliders.md](references/sliders.md) | Slider design for continuous value selection | Continuous range, min/max labels |
| [steppers.md](references/steppers.md) | Stepper design for incremental value adjustment | Fixed steps, bounded values |
| [pickers.md](references/pickers.md) | Picker design for selecting from long lists | Dates, times, long option sets |
| [combo-boxes.md](references/combo-boxes.md) | Combo box design combining text input and selection | macOS, type or select, custom values |
| [text-fields.md](references/text-fields.md) | Single-line text field design and validation | Short input, keyboard types, validation |
| [text-views.md](references/text-views.md) | Multi-line text view design | Comments, descriptions, long text |
| [labels.md](references/labels.md) | Label placement, content, and accessibility | Descriptive text, VoiceOver support |
| [token-fields.md](references/token-fields.md) | Token field design for discrete value collections | macOS, chips, tags, recipients |
| [virtual-keyboards.md](references/virtual-keyboards.md) | Virtual keyboard types and configuration | Email, URL, number, keyboard types |
| [rating-indicators.md](references/rating-indicators.md) | Rating indicator display patterns | Star ratings, display-only values |
| [gauges.md](references/gauges.md) | Gauge design for value-within-range display | Level indicators, range display |

## Output Format

When responding, provide:

1. **Control recommendation with rationale** -- Which specific control to use
   (picker, toggle, segmented control, slider, stepper, text field, etc.) and
   why it is the best fit compared to alternatives.
2. **State management guidance** -- How the control communicates its current
   state to the user (selected, unselected, disabled, error) and whether
   changes should apply immediately or require explicit confirmation.
3. **Validation approach** -- How to validate user input, when to show error
   states, and how to communicate validation rules clearly.
4. **Accessibility labels** -- Recommended accessibility label text, traits,
   and hints to ensure the control works well with VoiceOver and other
   assistive technologies.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **What type of data is being collected?** (e.g., a boolean on/off, a
   choice from a fixed set, a numeric value, free-form text)
2. **How many options are there?** Two options suit a toggle or segmented
   control; many options call for a picker or combo box.
3. **Which platform(s) are you targeting?** (iOS, iPadOS, macOS, visionOS, or
   multi-platform -- some controls like combo boxes and token fields are
   macOS-only)
4. **Is this a settings screen or an inline form?** Settings screens follow
   different conventions (grouped list rows with toggles) than inline forms
   (stacked fields with labels).

## Related Skills

- **hig-components-menus** -- Buttons and pop-up buttons that complement
  selection controls in forms and toolbars.
- **hig-components-presentation** -- Sheets and popovers that contain forms
  built with selection and input controls.
- **hig-components-navigation** -- Search fields that share text input patterns
  with text fields and combo boxes.
- **hig-inputs** -- Keyboard, pointer, and gesture interactions that affect
  how users interact with selection controls.
- **hig-foundations** -- Typography, color, and layout principles that govern
  how controls are styled and positioned.
