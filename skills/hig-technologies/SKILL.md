---
name: hig-technologies
version: 1.0.0
description: >
  Apple HIG guidance for Apple technology integrations: Siri, Apple Pay, HealthKit,
  HomeKit, ARKit, machine learning, generative AI, iCloud, Sign in with Apple,
  SharePlay, CarPlay, Game Center, in-app purchase, NFC, Wallet, VoiceOver, Maps,
  Mac Catalyst, and more. Use when asked about: "Siri integration", "Apple Pay",
  "HealthKit", "HomeKit", "ARKit", "augmented reality", "machine learning",
  "generative AI", "iCloud sync", "Sign in with Apple", "SharePlay", "CarPlay",
  "in-app purchase", "NFC", "VoiceOver", "Maps", "Mac Catalyst". Also use when
  the user says "how do I integrate Siri," "what are the Apple Pay guidelines,"
  "how should my AR experience work," "how do I use Sign in with Apple," or asks
  about any Apple framework or service integration.
  Cross-references: hig-inputs for input methods, hig-components-system for widgets.
---

# HIG Technologies

## Persona

Provide Apple HIG guidance on Apple technology integrations (Siri, Apple Pay, HealthKit, HomeKit, ARKit, ML, iCloud, Sign in with Apple, SharePlay, CarPlay, and others). Reference the material below.

## Before Providing Guidance

**Check for project context first:**
If `.claude/apple-design-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

## When to Use This Skill

Activate this skill when the user:

- Asks about Siri integration, SiriKit, or voice assistant design
- Needs Apple Pay or Tap to Pay implementation guidance
- Wants to integrate HealthKit or CareKit health data
- Asks about HomeKit smart home control interfaces
- Needs ARKit or augmented reality design guidance
- Asks about machine learning or Core ML integration patterns
- Wants guidance on generative AI features and responsible AI design
- Needs iCloud sync or CloudKit data design patterns
- Asks about Sign in with Apple implementation
- Wants to design SharePlay shared experiences
- Asks about CarPlay app design
- Needs Game Center integration for achievements or leaderboards
- Asks about in-app purchase flows or subscription design
- Wants NFC or Wallet integration guidance
- Needs VoiceOver or accessibility technology guidance
- Asks about Maps, Live Photos, photo editing extensions
- Wants to bring an iPad app to Mac with Mac Catalyst
- Asks about iMessage apps and stickers
- Needs ShazamKit audio recognition integration
- Asks about AirPlay streaming design
- Wants always-on display design guidance
- Asks about ResearchKit study design
- Needs ID Verifier or identity verification guidance

## Key Principles

### General

1. **Apple technologies extend app capabilities through system integration.**
   They let your app participate in system-wide experiences (Siri, Wallet,
   Control Center) and access powerful hardware and data (health sensors, UWB,
   camera, LiDAR). Each technology has established user-facing patterns;
   deviating from them creates confusion and erodes trust.

2. **Privacy and user control are paramount.** This is especially critical for
   health, payment, and identity technologies. Request only the data you need,
   explain why you need it, and respect the user's choices.

### Siri and Voice

3. **Siri features should feel natural, predictable, and recoverable.** Define
   clear, conversational intent phrases that complete quickly and confirm the
   result. Support App Shortcuts so the system can proactively suggest actions,
   and handle errors gracefully with clear fallbacks or redirects to the app.

### Payments and Commerce

4. **Make payments transparent and frictionless.** Display the Apple Pay button
   using standard styles and never ask for card details when Apple Pay is
   available. For in-app purchases, clearly describe what the user is buying,
   the price, and whether it is a one-time purchase or subscription. For Tap to
   Pay, follow the guided merchant and customer flows.

### Health and Fitness

5. **Health data is deeply personal -- request only what you need and explain
   why.** For HealthKit, explain the health benefit before requesting access.
   For CareKit, design care tasks that are encouraging and easy to complete.
   For ResearchKit, present informed consent flows that are thorough, readable,
   and respect participant autonomy.

### Smart Home

6. **HomeKit interfaces should be simple and reliable.** Users expect immediate
   response when controlling lights, locks, and thermostats. Show device state
   clearly and handle connectivity issues gracefully.

### Augmented Reality

7. **AR experiences should add genuine value, not serve as gimmicks.** Use AR
   when spatial context improves the user's understanding or experience. Guide
   users through setup (surface, lighting, space), and always provide a clear
   exit back to standard app interaction.

### Machine Learning and Generative AI

8. **ML features should enhance workflows without surprising the user.** Use
   machine learning for smart suggestions, image recognition, and text
   prediction. Clearly attribute AI-generated content, provide controls to
   edit, regenerate, or dismiss AI suggestions, and build interfaces that let
   users correct mistakes when model confidence is low.

### Identity and Authentication

9. **Offer Sign in with Apple as the top sign-in option.** Use standard button
   styles and respect the user's choice to hide their email. For ID Verifier,
   follow guided flows and never store sensitive identity data beyond what
   verification requires.

### Cloud and Data

10. **iCloud sync should be invisible and reliable.** Users expect their data to
    appear on all their devices without manual intervention. Handle conflicts
    gracefully and never lose data.

### Shared Experiences

11. **Design shared experiences for real-time participation.** For SharePlay,
    support multiple participants viewing or controlling content simultaneously,
    show participant presence, and handle latency. For AirPlay, provide
    appropriate Now Playing metadata for seamless streaming.

### Automotive

12. **CarPlay apps must prioritize driver safety.** Minimize interaction
    complexity, use large touch targets, and never present content that
    distracts from driving. Only audio, messaging, EV charging, navigation,
    parking, and quick food ordering app types are permitted.

### Accessibility

13. **Accessibility is a baseline requirement, not an enhancement.** Ensure
    every element has a meaningful VoiceOver label, trait, and action. Support
    Dynamic Type, Switch Control, and other assistive technologies. Test your
    app entirely with VoiceOver enabled.

## Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [siri.md](references/siri.md) | Siri integration | Intents, shortcuts, voice interaction, App Shortcuts |
| [apple-pay.md](references/apple-pay.md) | Apple Pay | Payment buttons, checkout flow, security |
| [tap-to-pay-on-iphone.md](references/tap-to-pay-on-iphone.md) | Tap to Pay on iPhone | Merchant flows, contactless payment acceptance |
| [in-app-purchase.md](references/in-app-purchase.md) | In-app purchase | Subscriptions, one-time purchases, transparency |
| [healthkit.md](references/healthkit.md) | HealthKit | Health data access, privacy, permissions |
| [carekit.md](references/carekit.md) | CareKit | Care plans, tasks, health management |
| [researchkit.md](references/researchkit.md) | ResearchKit | Studies, informed consent, data collection |
| [homekit.md](references/homekit.md) | HomeKit | Smart home control, device state, scenes |
| [augmented-reality.md](references/augmented-reality.md) | ARKit / AR experiences | Spatial context, surface detection, setup guidance |
| [machine-learning.md](references/machine-learning.md) | Core ML / machine learning | Predictions, smart features, confidence handling |
| [generative-ai.md](references/generative-ai.md) | Generative AI | Attribution, editing, responsible AI, uncertainty |
| [icloud.md](references/icloud.md) | iCloud sync | CloudKit, cross-device sync, conflict resolution |
| [sign-in-with-apple.md](references/sign-in-with-apple.md) | Sign in with Apple | Authentication, privacy, button styles |
| [id-verifier.md](references/id-verifier.md) | ID Verifier | Identity verification, document scanning |
| [shareplay.md](references/shareplay.md) | SharePlay | Shared experiences, participant presence, real-time |
| [airplay.md](references/airplay.md) | AirPlay | Media streaming, Now Playing, wireless display |
| [carplay.md](references/carplay.md) | CarPlay | Driver safety, permitted app types, large targets |
| [game-center.md](references/game-center.md) | Game Center | Achievements, leaderboards, multiplayer |
| [voiceover.md](references/voiceover.md) | VoiceOver | Screen reader, labels, traits, accessibility |
| [wallet.md](references/wallet.md) | Wallet | Passes, tickets, loyalty cards, timely info |
| [nfc.md](references/nfc.md) | NFC | Tag reading, quick interactions, App Clips |
| [maps.md](references/maps.md) | Maps / MapKit | Location display, annotations, directions |
| [mac-catalyst.md](references/mac-catalyst.md) | Mac Catalyst | iPad to Mac, menu bar, keyboard, pointer |
| [live-photos.md](references/live-photos.md) | Live Photos | Motion capture, playback, editing |
| [imessage-apps-and-stickers.md](references/imessage-apps-and-stickers.md) | iMessage apps and stickers | Messages extension, stickers, compact UI |
| [shazamkit.md](references/shazamkit.md) | ShazamKit | Audio recognition, music identification, feedback |
| [always-on.md](references/always-on.md) | Always-on display | Dimmed state, power efficiency, reduced updates |
| [photo-editing.md](references/photo-editing.md) | Photo editing extensions | System photo editor, filters, adjustments |

## Output Format

When responding to technology integration questions, provide:

- **Technology-specific implementation checklist** -- Step-by-step requirements
  for integrating the technology per Apple's guidelines.
- **Required vs optional features** -- Which capabilities are mandatory for
  approval and which are recommended enhancements.
- **Privacy and permission requirements** -- What data access is needed, how to
  request it, and what usage descriptions to provide.
- **User-facing flow description** -- The end-to-end user experience, from
  permission prompt through task completion.
- **Testing guidance** -- Key scenarios to validate, including edge cases and
  error states specific to the technology.

## Task-Specific Questions

Before providing detailed guidance, clarify:

1. **Which Apple technology are you integrating?** Each technology has its own
   guidelines, entitlements, and review requirements.
2. **What is the core use case?** Understanding the problem helps recommend the
   right technology and avoid over-engineering.
3. **Which platforms are you targeting?** Technology availability and behavior
   vary across iOS, iPadOS, macOS, watchOS, tvOS, and visionOS.
4. **Have you reviewed Apple's specific API requirements?** Some technologies
   require entitlements, merchant setup, or developer program enrollment.
5. **What data or permissions are needed?** Privacy-sensitive technologies
   require careful scoping and clear user-facing explanations.

## Related Skills

- **hig-inputs** -- Input methods that interact with technologies (e.g., voice
  for Siri, Apple Pencil for AR markup, gestures for Maps).
- **hig-components-system** -- Widgets, complications, and Live Activities that
  surface technology data (HealthKit in complications, Maps in widgets).
- **hig-components-status** -- Progress indicators for technology operations
  (iCloud sync progress, payment processing, AR loading).
