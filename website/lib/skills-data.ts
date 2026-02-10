export interface Skill {
  name: string;
  displayName: string;
  description: string;
  topics: string[];
  references: string[];
  refCount: number;
}

export interface Category {
  name: string;
  skills: Skill[];
}

export const categories: Category[] = [
  {
    name: "Setup",
    skills: [
      {
        name: "hig-project-context",
        displayName: "Project Context",
        description:
          "Creates a shared design context document so other HIG skills can tailor guidance to your app without repetitive questions.",
        topics: ["Project setup", "Platform targeting", "Design constraints"],
        references: [],
        refCount: 0,
      },
    ],
  },
  {
    name: "Platforms",
    skills: [
      {
        name: "hig-platforms",
        displayName: "Platforms",
        description:
          "Platform-specific design guidance for iOS, iPadOS, macOS, tvOS, visionOS, watchOS, and games.",
        topics: [
          "iOS",
          "iPadOS",
          "macOS",
          "tvOS",
          "visionOS",
          "watchOS",
          "Games",
        ],
        references: [
          "Designing for Games",
          "Designing for iOS",
          "Designing for iPadOS",
          "Designing for macOS",
          "Designing for tvOS",
          "Designing for visionOS",
          "Designing for watchOS",
        ],
        refCount: 7,
      },
    ],
  },
  {
    name: "Foundations",
    skills: [
      {
        name: "hig-foundations",
        displayName: "Foundations",
        description:
          "Visual design foundations including color, typography, layout, icons, materials, motion, accessibility, and more.",
        topics: [
          "Color",
          "Typography",
          "Accessibility",
          "Icons",
          "Dark Mode",
          "Layout",
          "Motion",
          "Materials",
          "Privacy",
        ],
        references: [
          "Accessibility",
          "App Icons",
          "Branding",
          "Color",
          "Dark Mode",
          "Icons",
          "Images",
          "Immersive Experiences",
          "Inclusion",
          "Layout",
          "Materials",
          "Motion",
          "Privacy",
          "Right to Left",
          "SF Symbols",
          "Spatial Layout",
          "Typography",
          "Writing",
        ],
        refCount: 18,
      },
    ],
  },
  {
    name: "Patterns",
    skills: [
      {
        name: "hig-patterns",
        displayName: "Patterns",
        description:
          "UX patterns for onboarding, navigation, modality, feedback, drag-and-drop, searching, settings, and more.",
        topics: [
          "Onboarding",
          "Loading",
          "Search",
          "Modality",
          "Feedback",
          "Drag & Drop",
          "Notifications",
          "Settings",
        ],
        references: [
          "Charting Data",
          "Collaboration and Sharing",
          "Drag and Drop",
          "Entering Data",
          "Feedback",
          "File Management",
          "Going Full Screen",
          "Launching",
          "Live Viewing Apps",
          "Loading",
          "Managing Accounts",
          "Managing Notifications",
          "Modality",
          "Multitasking",
          "Offering Help",
          "Onboarding",
          "Playing Audio",
          "Playing Haptics",
          "Playing Video",
          "Printing",
          "Ratings and Reviews",
          "Searching",
          "Settings",
          "Undo and Redo",
          "Workouts",
        ],
        refCount: 25,
      },
    ],
  },
  {
    name: "Components",
    skills: [
      {
        name: "hig-components-content",
        displayName: "Content",
        description:
          "Content display components: charts, collections, image views, web views, and more.",
        topics: ["Charts", "Collections", "Image Views", "Web Views"],
        references: [
          "Activity Views",
          "Charts",
          "Collections",
          "Color Wells",
          "Image Views",
          "Image Wells",
          "Lockups",
          "Web Views",
        ],
        refCount: 8,
      },
      {
        name: "hig-components-layout",
        displayName: "Layout",
        description:
          "Layout and organization: sidebars, split views, tab bars, windows, lists, and more.",
        topics: [
          "Sidebars",
          "Split Views",
          "Tab Bars",
          "Windows",
          "Lists",
          "Scroll Views",
        ],
        references: [
          "Boxes",
          "Column Views",
          "Lists and Tables",
          "Ornaments",
          "Outline Views",
          "Panels",
          "Scroll Views",
          "Sidebars",
          "Split Views",
          "Tab Bars",
          "Tab Views",
          "Windows",
        ],
        refCount: 12,
      },
      {
        name: "hig-components-menus",
        displayName: "Menus & Actions",
        description:
          "Menus and actions: buttons, context menus, toolbars, menu bar, pop-up buttons, and more.",
        topics: ["Menus", "Context Menus", "Toolbars", "Buttons", "Menu Bar"],
        references: [
          "Action Button",
          "Buttons",
          "Context Menus",
          "Disclosure Controls",
          "Dock Menus",
          "Edit Menus",
          "Menus",
          "Pop-up Buttons",
          "Pull-down Buttons",
          "The Menu Bar",
          "Toolbars",
        ],
        refCount: 11,
      },
      {
        name: "hig-components-navigation",
        displayName: "Navigation",
        description:
          "Navigation and search: search fields, page controls, path controls.",
        topics: ["Search Fields", "Page Controls", "Path Controls"],
        references: ["Page Controls", "Path Controls", "Search Fields"],
        refCount: 3,
      },
      {
        name: "hig-components-presentation",
        displayName: "Presentation",
        description:
          "Presentation components: alerts, action sheets, sheets, popovers, dialogs.",
        topics: ["Alerts", "Action Sheets", "Sheets", "Popovers"],
        references: [
          "Action Sheets",
          "Alerts",
          "Digit Entry Views",
          "Popovers",
          "Sheets",
        ],
        refCount: 5,
      },
      {
        name: "hig-components-selection",
        displayName: "Selection & Input",
        description:
          "Selection and input controls: pickers, toggles, sliders, text fields, segmented controls, and more.",
        topics: [
          "Pickers",
          "Toggles",
          "Sliders",
          "Text Fields",
          "Segmented Controls",
        ],
        references: [
          "Combo Boxes",
          "Controls",
          "Gauges",
          "Labels",
          "Pickers",
          "Rating Indicators",
          "Segmented Controls",
          "Sliders",
          "Steppers",
          "Text Fields",
          "Text Views",
          "Toggles",
          "Token Fields",
          "Virtual Keyboards",
        ],
        refCount: 14,
      },
      {
        name: "hig-components-status",
        displayName: "Status",
        description:
          "Status and progress: progress indicators, status bars, activity rings.",
        topics: ["Progress Indicators", "Status Bars", "Activity Rings"],
        references: ["Activity Rings", "Progress Indicators", "Status Bars"],
        refCount: 3,
      },
      {
        name: "hig-components-system",
        displayName: "System",
        description:
          "System experiences: widgets, Live Activities, notifications, App Clips, complications, and more.",
        topics: [
          "Widgets",
          "Live Activities",
          "Notifications",
          "App Clips",
          "Complications",
        ],
        references: [
          "App Clips",
          "App Shortcuts",
          "Complications",
          "Home Screen Quick Actions",
          "Live Activities",
          "Notifications",
          "Top Shelf",
          "Watch Faces",
          "Widgets",
        ],
        refCount: 9,
      },
    ],
  },
  {
    name: "Inputs",
    skills: [
      {
        name: "hig-inputs",
        displayName: "Inputs",
        description:
          "Input methods: gestures, keyboards, Apple Pencil, pointers, game controllers, Digital Crown, and more.",
        topics: [
          "Gestures",
          "Keyboards",
          "Apple Pencil",
          "Pointers",
          "Game Controllers",
          "Digital Crown",
        ],
        references: [
          "Apple Pencil and Scribble",
          "Camera Control",
          "Digital Crown",
          "Eyes",
          "Focus and Selection",
          "Game Controls",
          "Gestures",
          "Gyro and Accelerometer",
          "Keyboards",
          "Nearby Interactions",
          "Pointing Devices",
          "Remotes",
          "Spatial Interactions",
        ],
        refCount: 13,
      },
    ],
  },
  {
    name: "Technologies",
    skills: [
      {
        name: "hig-technologies",
        displayName: "Technologies",
        description:
          "Apple technology integrations: Siri, Apple Pay, HealthKit, ARKit, Sign in with Apple, and more.",
        topics: [
          "Siri",
          "Apple Pay",
          "HealthKit",
          "ARKit",
          "Machine Learning",
          "Sign in with Apple",
        ],
        references: [
          "AirPlay",
          "Always On",
          "Apple Pay",
          "Augmented Reality",
          "CareKit",
          "CarPlay",
          "Game Center",
          "Generative AI",
          "HealthKit",
          "HomeKit",
          "iCloud",
          "ID Verifier",
          "iMessage Apps and Stickers",
          "In-App Purchase",
          "Live Photos",
          "Mac Catalyst",
          "Machine Learning",
          "Maps",
          "NFC",
          "Photo Editing",
          "ResearchKit",
          "SharePlay",
          "ShazamKit",
          "Sign in with Apple",
          "Siri",
          "Tap to Pay on iPhone",
          "VoiceOver",
          "Wallet",
        ],
        refCount: 28,
      },
    ],
  },
];

export const totalSkills = categories.reduce(
  (sum, cat) => sum + cat.skills.length,
  0,
);

export const totalReferences = categories.reduce(
  (sum, cat) => sum + cat.skills.reduce((s, skill) => s + skill.refCount, 0),
  0,
);
