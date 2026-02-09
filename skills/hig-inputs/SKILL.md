---
name: hig-inputs
version: 1.0.0
description: >
  Apple HIG guidance for input methods and interaction patterns: gestures, Apple Pencil,
  keyboards, game controllers, pointers, Digital Crown, eye tracking, focus system,
  remotes, spatial interactions, gyroscope, accelerometer, and nearby interactions.
  Use when asked about: "gesture design", "Apple Pencil", "keyboard shortcuts",
  "game controller", "pointer support", "mouse support", "trackpad", "Digital Crown",
  "eye tracking", "visionOS input", "focus system", "remote control", "gyroscope",
  "spatial interaction". Also use when the user says "what gestures should I support,"
  "how do I add keyboard shortcuts," "how does input work on Apple TV," "should I
  support Apple Pencil," or asks about input device handling.
  Cross-references: hig-components-status, hig-components-system,
  hig-technologies for VoiceOver and Siri.
---

# HIG Inputs

## Persona

Provide Apple HIG guidance on input methods and interaction patterns (gestures, Apple Pencil, keyboards, pointers, Digital Crown, eye tracking, game controllers, motion sensors). Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about gesture design (tap, swipe, pinch, long press, rotation, drag)
- Needs Apple Pencil or Scribble integration guidance
- Wants to implement keyboard shortcuts or keyboard navigation
- Asks about game controller support or MFi controller mapping
- Needs pointer, mouse, or trackpad support guidance for iPadOS or macOS
- Asks about Digital Crown interaction on watchOS
- Wants to design for eye tracking or hand gestures on visionOS
- Needs focus and selection system guidance for tvOS or visionOS
- Asks about Siri Remote or other remote control interaction
- Wants to use gyroscope, accelerometer, or motion data
- Asks about spatial interactions in visionOS
- Needs guidance on nearby interactions (UWB / U1 chip)
- Is building a multi-input experience that adapts to available input methods

## Key Principles

### General

1. **Support multiple input methods and never require only one.** Users interact
   through touch, pointer, keyboard, pencil, voice, eyes, hands, and game
   controllers. Design for the inputs available on each platform and adapt
   gracefully when multiple are present. On iPadOS, for example, support both
   touch and pointer; on macOS, support both pointer and keyboard navigation.

2. **Provide consistent feedback.** Every input action should produce a visible,
   audible, or haptic response so users know their input was received.

### Gestures

3. **Standard gestures must behave consistently.** Tap to activate, swipe to
   scroll or navigate, pinch to zoom, long press for context menus, and drag to
   move. Do not override system gestures (edge swipes for back, Home, and
   notifications are owned by the system).

4. **Use standard gesture recognizers; keep custom gestures discoverable.**
   Apple's built-in recognizers handle edge cases, accessibility, and
   simultaneous gesture coordination. If you add non-standard gestures, provide
   onboarding hints or coaching overlays to teach them.

### Apple Pencil

5. **Apple Pencil enables precision drawing, markup, and selection.** Support
   pressure, tilt, and hover on compatible devices. Distinguish finger from
   Pencil when appropriate (e.g., finger pans while Pencil draws) and use
   tool-picker patterns to let users control this mapping.

6. **Support Scribble in text fields.** Users expect to write with Apple Pencil
   in any text input and have it converted to typed text automatically.

### Keyboards

7. **Provide keyboard shortcuts and full keyboard navigation.** On iPadOS and
   macOS, use standard system shortcuts (Cmd+C, Cmd+V, Cmd+Z) and register
   custom ones so they appear in the iPadOS Command key overlay. Tab order
   should be logical and predictable so users can accomplish primary tasks
   without lifting their hands from the keyboard.

8. **Respect the software keyboard.** On iOS and iPadOS, adjust your layout
   when the keyboard appears. Use keyboard-avoidance APIs to keep content
   visible and accessible.

### Game Controllers

9. **Support MFi controllers with on-screen fallbacks.** Map controls to the
   extended gamepad profile, provide sensible defaults, and let users remap
   buttons. Always offer touch or keyboard alternatives for users without a
   controller.

### Pointer and Trackpad

10. **Pointer and trackpad support should feel native.** Use hover effects,
    pointer shape adaptation, and standard cursor behaviors. Support two-finger
    scroll, pinch to zoom, and swipe to navigate on trackpad-connected iPads
    and all Macs.

### Digital Crown

11. **The Digital Crown is the primary scrolling and value-adjustment input on
    watchOS.** Use it for scrolling lists, adjusting values, and navigating
    between views. Provide haptic feedback at detents so users feel discrete
    steps.

### Eyes and Spatial Interaction (visionOS)

12. **Eyes and hands are the primary visionOS input.** Users look at a target
    to focus it, then pinch to select (look-and-tap). Design generous hit
    targets because eye tracking is less precise than touch, avoid requiring
    sustained gaze for activation, and support direct hand manipulation in
    immersive experiences.

### Focus and Selection

13. **The focus system is critical for tvOS and visionOS.** Make focus movement
    predictable, ensure every interactive element is focusable, provide clear
    visual focus indicators (scale, highlight, or elevation), and organize
    focus groups so movement flows logically within sections.

### Remotes

14. **The Siri Remote is the primary tvOS input.** Design for its limited
    surface -- touch area for swiping, clickpad for selection, and a few
    physical buttons. Keep interactions simple; users hold the remote casually.

### Motion and Nearby Interactions

15. **Use gyroscope, accelerometer, and UWB data judiciously.** Motion input
    suits gaming, fitness, and AR but should not be required for essential tasks.
    Provide calibration and reset options. For nearby interactions (U1 chip),
    communicate distance and direction with clear visual or haptic cues.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [gestures.md](references/gestures.md) | Touch gestures | Tap, swipe, pinch, long press, drag, system gestures |
| [apple-pencil-and-scribble.md](references/apple-pencil-and-scribble.md) | Apple Pencil and Scribble | Precision, pressure, tilt, hover, handwriting |
| [keyboards.md](references/keyboards.md) | Keyboard input | Shortcuts, navigation, software keyboard, Command key |
| [game-controls.md](references/game-controls.md) | Game controllers | MFi, extended gamepad, remapping, on-screen fallbacks |
| [pointing-devices.md](references/pointing-devices.md) | Pointer, mouse, trackpad | Hover, cursor morphing, trackpad gestures |
| [digital-crown.md](references/digital-crown.md) | watchOS Digital Crown | Scrolling, value adjustment, haptic detents |
| [eyes.md](references/eyes.md) | Eye tracking (visionOS) | Look and tap, gaze targeting, hit target sizing |
| [spatial-interactions.md](references/spatial-interactions.md) | Spatial input (visionOS) | Hand gestures, direct manipulation, immersive input |
| [focus-and-selection.md](references/focus-and-selection.md) | Focus system | tvOS/visionOS navigation, focus indicators, groups |
| [remotes.md](references/remotes.md) | Siri Remote and remotes | Touch surface, clickpad, simple interactions |
| [gyro-and-accelerometer.md](references/gyro-and-accelerometer.md) | Motion sensors | Gyroscope, accelerometer, calibration, gaming |
| [nearby-interactions.md](references/nearby-interactions.md) | UWB nearby interactions | U1 chip, directional finding, proximity triggers |
| [camera-control.md](references/camera-control.md) | Camera Control button | iPhone camera hardware button, quick launch |

## Output Format

When responding to input and interaction questions, provide:

- **Input method recommendations by platform** -- Which input methods to support
  on each target platform and how they interact.
- **Gesture specification table** -- Standard and custom gestures with their
  expected behaviors, listed in a clear tabular format.
- **Keyboard shortcut recommendations** -- Recommended shortcuts for primary
  actions, following system conventions and the Command key overlay.
- **Accessibility input alternatives** -- Alternative input paths for users who
  rely on VoiceOver, Switch Control, or other assistive technologies.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **Which platforms and input devices are you targeting?** Input support varies
   significantly across iOS, iPadOS, macOS, watchOS, tvOS, and visionOS.
2. **Is this a productivity or casual app?** Productivity apps need deeper
   keyboard and pointer support; casual apps prioritize touch and gestures.
3. **Are there custom gestures in your design?** Custom gestures need
   discoverability strategies and must not conflict with system gestures.
4. **Do you need to support game controllers?** MFi controller support requires
   specific mapping and on-screen fallback considerations.

## Related Skills

- **hig-components-status** -- Progress indicators that respond to user input
  such as pull-to-refresh gestures.
- **hig-components-system** -- System experiences like widgets and complications
  that have unique input constraints.
- **hig-technologies** -- VoiceOver for accessible input, Siri for voice input,
  ARKit for spatial gesture context.
