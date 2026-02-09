---
name: hig-components-system
version: 1.0.0
description: >
  Apple HIG guidance for system experience components: widgets, live activities,
  notifications, complications, home screen quick actions, top shelf, watch faces,
  app clips, and app shortcuts. Use when asked about: "widget design", "live activity",
  "notification design", "complication", "home screen quick action",
  "top shelf", "watch face", "app clip", "app shortcut", "system experience".
  Also use when the user says "how do I design a widget," "what should my notification
  look like," "how do Live Activities work," "should I make an App Clip," or asks about
  surfaces outside the main app.
  Cross-references: hig-components-status for progress in widgets, hig-inputs for
  interaction patterns, hig-technologies for Siri and system integration.
---

# HIG Components: System Experiences

## Persona

Provide Apple HIG guidance on system experience components (widgets, live activities, notifications, complications, quick actions, app clips, app shortcuts). Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about designing widgets for Home Screen, Lock Screen, or StandBy
- Needs guidance on Live Activities for real-time event tracking
- Wants to design notification content, grouping, or interaction
- Asks about watchOS complications or watch face integration
- Needs guidance on Home Screen quick actions (Haptic Touch)
- Asks about tvOS top shelf content or design
- Wants to build an App Clip for lightweight, instant experiences
- Asks about App Shortcuts and Siri integration for quick actions
- Is designing any experience that lives outside the main app window

## Key Principles

### General

1. **System experiences extend your app with glanceable, immediate value.**
   They bring your app's most important content and actions to surfaces the
   user sees without launching your app. Design for seconds of attention, not
   minutes -- every system experience should communicate its purpose at a glance.

2. **Respect the platform context.** A widget on the Lock Screen has different
   constraints than one on the Home Screen. A complication on a watch face is
   far smaller than a top shelf item on tvOS.

### Widgets

3. **Show glanceable, relevant information.** Widgets should display the most
   useful subset of your app's data, updated appropriately. Avoid cramming too
   much content into a widget.

4. **Support multiple sizes with distinct layouts.** Offer small, medium, and
   large widget families where it makes sense. Each size should present a
   thoughtfully designed layout, not just a scaled version of another size.

5. **Tapping a widget should deep-link.** When the user taps a widget, take them
   to the relevant content in your app, not the app's root screen.

### Live Activities

6. **Track real-time events that have a clear start and end.** Use Live
   Activities for deliveries, sports scores, timers, and ride tracking. Design
   for both the Dynamic Island and Lock Screen, as each has distinct size and
   layout requirements.

7. **Keep Live Activities updated and timely.** Stale data undermines trust.
   End the Live Activity promptly when the tracked event concludes.

### Notifications

8. **Respect user attention.** Only send notifications for information the user
   genuinely cares about. Avoid promotional or low-value notifications that
   train users to disable them.

9. **Provide actionable, self-contained content.** Include enough context for
   the user to understand and act without opening the app. Support notification
   actions so users can respond, approve, or dismiss directly from the banner
   or expanded view. Use threading and grouping to prevent overload.

### Complications

10. **Complications show focused data on the watch face.** Design for the
    smallest useful representation of your app's information. Support multiple
    complication families (different shapes and sizes) and use budgeted updates
    wisely, as the system limits update frequency to preserve battery life.

### Home Screen Quick Actions

11. **Offer 3-4 of the most common tasks.** Quick actions should surface the
    most frequent or time-sensitive actions. Use short titles, optional
    subtitles, and relevant SF Symbol icons.

### Top Shelf

12. **Top shelf is a tvOS showcase.** Use it to feature content that entices
    the user to open your app: new episodes, featured items, or recent content.

### App Clips

13. **App Clips provide instant, focused functionality within a strict size
    budget.** They load quickly without a full App Store download. Include only
    what is needed for the immediate task, then offer a clear path to install
    the full app afterward.

### App Shortcuts

14. **App Shortcuts surface key actions to Siri and Spotlight.** Define
    shortcuts for tasks users perform frequently or want voice access to. Use
    natural, conversational trigger phrases that feel like something a user
    would actually say.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [widgets.md](references/widgets.md) | Widget design | Glanceable info, sizes, deep linking, timeline |
| [live-activities.md](references/live-activities.md) | Live Activities | Real-time tracking, Dynamic Island, Lock Screen |
| [notifications.md](references/notifications.md) | Notification design | Attention, actions, grouping, content |
| [complications.md](references/complications.md) | watchOS complications | Watch face data, families, budgeted updates |
| [home-screen-quick-actions.md](references/home-screen-quick-actions.md) | Home Screen quick actions | Haptic Touch, common tasks, SF Symbols |
| [top-shelf.md](references/top-shelf.md) | tvOS top shelf | Featured content, showcase, enticing imagery |
| [app-clips.md](references/app-clips.md) | App Clips | Instant use, lightweight, focused task, NFC/QR |
| [app-shortcuts.md](references/app-shortcuts.md) | App Shortcuts | Siri, Spotlight, voice triggers, frequent actions |

## Output Format

When responding to system experience questions, provide:

- **System experience recommendation** -- Which system surface (widget, Live
  Activity, notification, complication, App Clip, etc.) best fits the use case.
- **Content strategy** -- What information to display, how to prioritize it, and
  what to omit for the glanceable context.
- **Update frequency guidance** -- How often the content should refresh, including
  system budget constraints and timeline considerations.
- **Size and family variants** -- Which sizes or families to support and how
  the layout adapts across each variant.
- **Deep link behavior** -- Where tapping should take the user in the full app.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **What information needs to surface outside the app?** This determines which
   system experience is the best fit.
2. **Which platform are you targeting?** Widgets, complications, top shelf, and
   Live Activities are platform-specific.
3. **How frequently does the data update?** Real-time data suits Live Activities;
   periodic data suits widgets and complications.
4. **What is the user's primary glanceable need?** Understanding the quick-look
   use case shapes content hierarchy and layout decisions.

## Related Skills

- **hig-components-status** -- Progress indicators and status bars that may appear
  within widgets or Live Activities.
- **hig-inputs** -- Interaction and gesture patterns for navigating system
  experiences (e.g., Digital Crown for complications).
- **hig-technologies** -- Siri integration for App Shortcuts, HealthKit for
  complications, NFC for App Clip invocation.
