---
name: hig-components-status
version: 1.0.0
description: >
  Apple HIG guidance for status and progress UI components including progress indicators,
  status bars, and activity rings. Use this skill when asked about: "progress indicator",
  "progress bar", "loading spinner", "status bar", "activity ring", "progress display",
  determinate vs indeterminate progress, loading states, or fitness tracking rings.
  Also use when the user says "how do I show loading state," "should I use a spinner
  or progress bar," "what goes in the status bar," or asks about activity indicators.
  Cross-references: hig-components-system for widgets and complications,
  hig-inputs for gesture-driven progress controls, hig-technologies for HealthKit
  and activity ring data integration.
---

# HIG Components: Status

## Persona

Provide Apple HIG guidance on status and progress components (progress indicators, status bars, activity rings). Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about progress indicators (bars, spinners, or custom progress views)
- Needs guidance on determinate vs indeterminate progress display
- Wants to design loading states or long-running task feedback
- Asks about status bars on iOS or iPadOS
- Needs guidance on activity rings for watchOS or fitness tracking UI
- Is building custom progress or status components and wants HIG alignment
- Asks how to communicate task completion, percentage, or remaining time

## Key Principles

### Progress Indicators

1. **Always show progress for long-running tasks.** If an operation takes more
   than a second or two, provide feedback so the user knows the app is working.

2. **Use determinate indicators when the duration or percentage is known.** A
   progress bar that fills from left to right gives the user a clear sense of
   how much work remains. Use this for file downloads, uploads, or any process
   where you can calculate completion percentage.

3. **Use indeterminate indicators when the duration is unknown.** A spinning
   indicator communicates that work is happening without promising a specific
   timeframe. Use this for network requests with unpredictable duration or
   operations where progress cannot be measured.

4. **Prefer progress bars over spinners when possible.** Determinate progress
   feels faster and more trustworthy to users than an indefinite spinner.

5. **Place indicators where the user expects content to appear.** Inline
   progress near the content area is preferable to a modal or distant indicator.

6. **Avoid stacking multiple progress indicators.** If several operations run
   simultaneously, aggregate them into a single progress representation or
   prioritize the most relevant one.

### Status Bars

7. **Do not hide the status bar without good reason.** The status bar provides
   critical system-level information (time, battery, connectivity). Hiding it
   should be reserved for immersive experiences like full-screen media, games,
   or AR.

8. **Match status bar style to your content.** Use the light or dark appearance
   that provides adequate contrast against your app's background.

9. **Respect safe areas.** Never place interactive content behind the status bar
   area; ensure your layout accounts for the status bar inset.

10. **Restore the status bar promptly.** If you hide the status bar for an
    immersive experience, restore it as soon as the user exits that context.

### Activity Rings

11. **Activity rings originate from watchOS but also appear on iPhone and iPad through the Fitness app and widgets.** They represent
    Move, Exercise, and Stand goals. Do not repurpose the activity ring visual
    metaphor for unrelated data.

12. **Respect the ring color conventions.** The red (Move), green (Exercise),
    and blue (Stand) colors are strongly associated with Apple Fitness. Using
    these exact colors for other purposes may confuse users.

13. **Let the system manage activity ring data.** Use HealthKit APIs to read
    activity data rather than attempting to manually track or calculate ring
    completion.

14. **Celebrate completions.** When a ring closes, acknowledge the achievement.
    Apple's design language uses animation and haptics to reward goal completion.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [progress-indicators.md](references/progress-indicators.md) | Progress bars and spinners | Determinate, indeterminate, inline placement, duration |
| [status-bars.md](references/status-bars.md) | iOS/iPadOS status bar | System info, visibility, style, safe areas |
| [activity-rings.md](references/activity-rings.md) | watchOS activity rings | Move/Exercise/Stand, HealthKit, fitness tracking, color |

## Output Format

When responding to status and progress questions, provide:

- **Indicator type recommendation** -- Whether to use determinate (progress bar)
  or indeterminate (spinner) indicators, with rationale.
- **Timing and animation guidance** -- Duration thresholds for showing indicators,
  animation style, and transition behavior.
- **Accessibility announcements** -- VoiceOver progress announcements, live region
  updates, and percentage or completion callouts.
- **Platform-specific behavior** -- How the indicator should adapt across iOS,
  iPadOS, macOS, watchOS, tvOS, and visionOS.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **Is the duration known or unknown?** This determines whether a determinate
   or indeterminate indicator is appropriate.
2. **Which platform are you targeting?** Status bar behavior, activity rings, and
   progress styles differ across Apple platforms.
3. **How long does the operation typically take?** Sub-second operations need no
   indicator; longer operations need different approaches.
4. **Is this a system-level or in-app indicator?** System-level status (status
   bar, activity rings) follows stricter conventions than in-app progress views.

## Related Skills

- **hig-components-system** -- Widgets and complications that may display progress
  or status information at a glance.
- **hig-inputs** -- Gesture and interaction patterns that may trigger progress
  states (e.g., pull-to-refresh).
- **hig-technologies** -- HealthKit integration for activity ring data; VoiceOver
  accessibility for progress announcements.
