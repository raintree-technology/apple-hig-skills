---
name: hig-patterns
version: 1.0.0
description: >
  Apple Human Interface Guidelines interaction and UX patterns. Use this skill when the user asks about
  "onboarding flow", "user onboarding", "app launch", "loading state", "drag and drop", "search pattern",
  "settings design", "notifications", "modality", "multitasking", "feedback pattern", "haptics",
  "undo redo", "file management", data entry, sharing, collaboration, full screen, audio, video,
  haptic feedback, ratings, printing, help, or account management in Apple apps.
  Also use when the user says "how should onboarding work", "my app takes too long to load",
  "should I use a modal here", "how do I handle errors", "when should I ask for permissions",
  "how to show progress", or "what's the right way to confirm a delete".
  Cross-references: hig-foundations for underlying principles, hig-platforms for platform specifics,
  hig-components-layout for navigation, hig-components-content for data display.
---

# Apple HIG: Interaction Patterns

## Persona

Provide Apple HIG guidance on interaction patterns: onboarding, search, notifications, data entry, modality, feedback, and other UX workflows. Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about onboarding or first-run experiences
- Needs guidance on app launch behavior or launch screens
- Wants to implement loading states or progress indicators
- Asks about drag and drop interactions
- Needs search UI or search behavior guidance
- Wants to design a settings screen
- Asks about notifications (local or push, permission requests, grouping)
- Needs guidance on modality (sheets, alerts, popovers, full-screen modal)
- Asks about multitasking behavior (iPad Split View, Stage Manager)
- Wants to provide user feedback (alerts, haptics, sounds, visual indicators)
- Asks about undo/redo implementation
- Needs file management patterns (document browser, file providers)
- Asks about data entry forms, pickers, or input validation
- Wants to implement sharing or collaboration features
- Asks about managing user accounts or authentication flows
- Needs guidance on playing audio, video, or haptics
- Asks about ratings and reviews prompts
- Wants to implement help or support within the app
- Asks about printing or going full screen

## Key Principles

1. **Minimize modality.** Modal experiences interrupt flow. Use modality only when it is critical to get the user's attention, when a task must be completed or abandoned before continuing, or when saving changes is essential. Prefer non-modal alternatives.

2. **Provide clear feedback.** Every user action should produce a visible, audible, or haptic response. Use activity indicators for indeterminate waits, progress bars for determinate processes, and haptics for physical confirmation.

3. **Support undo.** Destructive actions should be reversible whenever possible. Use confirmation dialogs sparingly -- undo is often a better pattern than "Are you sure?" prompts.

4. **Launch quickly.** Display a launch screen that transitions seamlessly into the first screen. Avoid splash screens with logos or loading animations. Restore the user's previous state.

5. **Defer sign-in.** Let users explore the app before requiring account creation. When authentication is needed, support Sign in with Apple and passkeys for a frictionless experience.

6. **Keep onboarding brief.** Show no more than three onboarding screens. Let users skip onboarding. Teach through progressive disclosure and contextual hints rather than front-loading instruction.

7. **Use progressive disclosure.** Show essential information first and let users drill into details. Avoid overwhelming users with every option on a single screen.

8. **Respect user attention.** Consolidate notifications, minimize interruptions, and give users control over what alerts them. Never use notifications for marketing.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [charting-data.md](references/charting-data.md) | Charting Data | Data visualization patterns, accessible charts, interactive chart elements |
| [collaboration-and-sharing.md](references/collaboration-and-sharing.md) | Collaboration & Sharing | Share sheets, activity views, collaborative editing indicators, shareplay |
| [drag-and-drop.md](references/drag-and-drop.md) | Drag and Drop | Drag sources, drop targets, spring loading, multi-item drag, visual feedback |
| [entering-data.md](references/entering-data.md) | Entering Data | Text fields, pickers, steppers, input validation, keyboard types, autofill |
| [feedback.md](references/feedback.md) | Feedback | Alerts, action sheets, haptic patterns, sound feedback, visual status indicators |
| [file-management.md](references/file-management.md) | File Management | Document browser, file providers, iCloud integration, document lifecycle |
| [going-full-screen.md](references/going-full-screen.md) | Going Full Screen | Full-screen transitions, immersive content, exiting full screen, toolbar visibility |
| [launching.md](references/launching.md) | Launching | Launch screens, state restoration, launch storyboards, cold vs. warm launch |
| [live-viewing-apps.md](references/live-viewing-apps.md) | Live Viewing Apps | Live content display, real-time updates, live activities, dynamic island |
| [loading.md](references/loading.md) | Loading | Activity indicators, progress views, skeleton screens, lazy loading, placeholder content |
| [managing-accounts.md](references/managing-accounts.md) | Managing Accounts | Sign in with Apple, passkeys, account creation, credential autofill, account deletion |
| [managing-notifications.md](references/managing-notifications.md) | Managing Notifications | Permission requests, notification grouping, actionable notifications, provisional delivery |
| [modality.md](references/modality.md) | Modality | Sheets, alerts, popovers, full-screen modals, when to use each modal type |
| [multitasking.md](references/multitasking.md) | Multitasking | iPad Split View, Slide Over, Stage Manager, responsive layout, size class transitions |
| [offering-help.md](references/offering-help.md) | Offering Help | Contextual tips, onboarding hints, help menus, support links, what's new screens |
| [onboarding.md](references/onboarding.md) | Onboarding | Welcome screens, feature highlights, progressive onboarding, skip options, permissions timing |
| [playing-audio.md](references/playing-audio.md) | Playing Audio | Audio sessions, background audio, Now Playing controls, audio routing, interruption handling |
| [playing-haptics.md](references/playing-haptics.md) | Playing Haptics | Core Haptics, UIFeedbackGenerator, haptic patterns, when to use haptics, custom haptics |
| [playing-video.md](references/playing-video.md) | Playing Video | Video player controls, picture-in-picture, AirPlay, full-screen video, video accessibility |
| [printing.md](references/printing.md) | Printing | Print dialogs, page setup, print formatting, AirPrint integration |
| [ratings-and-reviews.md](references/ratings-and-reviews.md) | Ratings & Reviews | SKStoreReviewController, timing prompts, frequency limits, in-app feedback alternatives |
| [searching.md](references/searching.md) | Searching | Search bars, search suggestions, scoped search, search results display, recents |
| [settings.md](references/settings.md) | Settings | In-app settings vs. Settings app, preference organization, toggles, defaults |
| [undo-and-redo.md](references/undo-and-redo.md) | Undo and Redo | Shake to undo, undo/redo stack, confirming destructive actions, multi-level undo |
| [workouts.md](references/workouts.md) | Workouts | Workout sessions, live metrics, Always On display, workout summaries, HealthKit integration |

## Pattern Selection Guide

When advising on which pattern to use:

| User Goal | Recommended Pattern | Avoid |
|---|---|---|
| First app experience | Brief onboarding (max 3 screens) + progressive disclosure | Long tutorials, mandatory sign-up |
| Waiting for content | Skeleton screens or progress indicators | Blocking spinners with no context |
| Confirming destructive action | Undo support | Excessive "Are you sure?" dialogs |
| Collecting user input | Inline validation, smart defaults, autofill | Modal forms for simple inputs |
| Requesting permissions | Contextual, just-in-time requests with explanation | Requesting all permissions at launch |
| Providing feedback | Haptics + visual indicator for interactions | Silent actions with no confirmation |
| Organizing preferences | In-app settings for frequent items | Burying all settings in the system Settings app |

## Output Format

When providing pattern guidance, structure your response as:

1. **Recommended Pattern with Rationale** -- Name the specific HIG pattern and explain why it fits the user's scenario, citing the relevant reference file.
2. **Step-by-Step Implementation** -- Walk through the pattern implementation in order, covering each screen or state the user will encounter.
3. **Platform Variations** -- Note how the pattern differs across targeted platforms (e.g., haptics on iPhone vs. Apple Watch, modality on iPad vs. Mac).
4. **Common Pitfalls to Avoid** -- List anti-patterns and mistakes that violate the HIG for this specific pattern.

## Task-Specific Questions

Before providing pattern advice, clarify:

1. **What is the user flow context?** Where in the app does this pattern appear? What comes before and after?
2. **Which platform(s) are you building for?** Pattern implementations vary significantly by platform.
3. **What is the current implementation?** Are you designing from scratch or improving an existing flow?
4. **Are there existing analytics on user behavior?** (e.g., drop-off rates, error frequencies, completion times)
5. **What is the severity or frequency of this interaction?** (Helps determine how much friction is appropriate.)
6. **Does this pattern involve sensitive actions?** (Destructive operations, payments, or permission requests require extra care.)

## Related Skills

- **hig-foundations** -- For the underlying principles of accessibility, color, typography, and privacy that inform every pattern.
- **hig-platforms** -- For platform-specific implementations of these patterns (e.g., haptics differ between iPhone and Apple Watch).
- **hig-components-layout** -- For the structural components (tab bars, sidebars, split views) used to implement navigation patterns.
- **hig-components-content** -- For content display components used within these patterns (charts in data visualization, collections in search results).
