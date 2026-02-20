import {mkdir, readdir, rm, writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(scriptDir, "..");
const ralphRoot = path.join(demoRoot, "ralph-loop");
const versionsDir = path.join(ralphRoot, "versions");
const bestVersionPath = path.join(versionsDir, "version-25.json");
const scoreboardPath = path.join(ralphRoot, "scoreboard.json");
const bestScriptPath = path.join(demoRoot, "src", "data", "ralph-best-script.json");

const kickers = [
  "APPLE HIG SKILLS, IN PRACTICE",
  "WHAT THIS REPO ACTUALLY DOES",
  "FROM HIG SOURCE TO AGENT GUIDANCE",
  "APPLE DESIGN GUIDANCE, OPERATIONALIZED",
  "HIG KNOWLEDGE, STRUCTURED FOR AGENTS"
];

const headlines = [
  "Apple HIG as\nagent skills",
  "14 HIG skills,\none system",
  "Design guidance\nthat scales",
  "Codified HIG\nfor AI workflows",
  "From docs to\nactionable skills"
];

const subheads = [
  "This repository packages Apple's Human Interface Guidelines into 14 scoped skills so coding agents can discover, activate, and load only the reference depth they need.",
  "Apple HIG content is organized into 14 skills with progressive disclosure, so agents stay accurate without flooding context windows with unnecessary reference files.",
  "Apple HIG guidance is split into 14 practical skills that map to real product questions, then progressively load deeper reference docs only when needed.",
  "The project turns Apple HIG into 14 production-ready skills and keeps guidance efficient through progressive disclosure instead of loading the full corpus up front.",
  "It converts Apple HIG into 14 interoperable skills and uses progressive disclosure to keep prompts lean while still enabling deep topic-specific reference loading."
];

const whatItDoesBullets = [
  [
    "Sources Apple Human Interface Guidelines content (February 2025) for agent use.",
    "Defines 14 skills across foundations, components, patterns, inputs, platforms, and technologies.",
    "Uses progressive disclosure: discovery -> SKILL.md activation -> targeted references/."
  ],
  [
    "Curates Apple's HIG into a structured skill library with stable frontmatter metadata.",
    "Provides focused SKILL.md instructions and deep reference files loaded only on demand.",
    "Keeps context efficient so agents answer with precision instead of broad generic advice."
  ],
  [
    "Transforms Apple's design documentation into reusable skill modules for AI coding tools.",
    "Maps skills to concrete UI topics like layout, controls, dialogs, search, status, and system surfaces.",
    "Optimizes token usage through progressive disclosure while preserving detailed source coverage."
  ],
  [
    "Packages Apple HIG design rules into 14 discoverable skill entry points.",
    "Separates concise operational instructions from large reference material for reliability.",
    "Lets agents load only the files required for the current platform or component task."
  ],
  [
    "Creates a complete Apple HIG skill set for Claude Code, Cursor, and similar agents.",
    "Ensures each skill has clear when-to-use triggers and scoped reference indexes.",
    "Applies progressive disclosure so deep content is precise, timely, and context-efficient."
  ]
];

const doctorBullets = [
  [
    "Validates SKILL.md schema, frontmatter, naming rules, and section requirements.",
    "Checks references integrity, VERSIONS.md consistency, marketplace entries, and README drift.",
    "Outputs prioritized agent TODO tasks that can drive score recovery to 100/100."
  ],
  [
    "Runs repository-level and skill-level validation with explicit rule IDs.",
    "Finds structural regressions in references, versions tables, plugin manifests, and docs.",
    "Produces machine-readable TODO actions with scope, files, and verification commands."
  ],
  [
    "Audits mandatory skill structure and detects invalid metadata before publishing.",
    "Cross-checks skill directories against VERSIONS.md, README tables, and marketplace config.",
    "Converts findings into an actionable TODO sequence aimed at a 100/100 score."
  ],
  [
    "Enforces consistent SKILL.md quality across every skill folder.",
    "Verifies repository wiring: references, version rows, manifest paths, and readme coverage.",
    "Ends each run with an agent-focused remediation plan and pass/fail clarity."
  ],
  [
    "Catches schema, content, and repository alignment issues with deterministic rules.",
    "Summarizes errors and warnings by scope so owners can fix the highest-impact problems first.",
    "Generates TODO items that define done-when criteria and verify commands for closure."
  ]
];

const agentPathTitles = [
  "Agent Path to 100/100",
  "Deterministic Recovery to 100/100",
  "Execution Plan for Score 100",
  "Remediation Loop to Perfect Score",
  "Operational TODO Path"
];

const outroHeadlines = [
  "From Apple HIG source to operational agent behavior.",
  "From reference corpus to validated, agent-ready execution.",
  "From design doctrine to measurable repository health.",
  "From structured skills to reliable 100/100 checks.",
  "From guidance to action, with quality gates built in."
];

const outroSublines = [
  "Apple HIG Skills defines what to do. hig-doctor verifies it stays true.",
  "The skills system encodes guidance; the doctor enforces consistency.",
  "Content stays grounded in Apple HIG while quality stays measurable.",
  "Agents can use the TODO list directly to close every finding.",
  "This is documentation transformed into an executable quality workflow."
];

const requiredChecks = [
  {
    id: "mentions_14_skills",
    test: (text) => /\b14\s+skills\b/i.test(text)
  },
  {
    id: "mentions_apple_hig",
    test: (text) => /apple\s+human\s+interface\s+guidelines/i.test(text)
  },
  {
    id: "mentions_date",
    test: (text) => /february\s+2025/i.test(text)
  },
  {
    id: "mentions_progressive_disclosure",
    test: (text) => /progressive\s+disclosure/i.test(text)
  },
  {
    id: "mentions_hig_doctor",
    test: (text) => /hig-doctor/i.test(text)
  },
  {
    id: "mentions_validation_scope",
    test: (text) => /frontmatter|references|versions|marketplace|readme/i.test(text)
  },
  {
    id: "mentions_todo_path",
    test: (text) => /todo/i.test(text) && /100\/100/.test(text)
  }
];

const candidateText = (candidate) => {
  const parts = [
    candidate.kicker,
    candidate.headline,
    candidate.subhead,
    candidate.whatItDoesTitle,
    ...candidate.whatItDoesBullets,
    candidate.doctorTitle,
    ...candidate.doctorBullets,
    candidate.agentPathTitle,
    candidate.outroHeadline,
    candidate.outroSubline
  ];
  return parts.join("\n");
};

const evaluateCandidate = (candidate) => {
  const text = candidateText(candidate);
  const checks = requiredChecks.map((check) => ({id: check.id, pass: check.test(text)}));

  let score = 0;
  for (const check of checks) {
    if (check.pass) score += 12;
  }

  const bulletLengths = [...candidate.whatItDoesBullets, ...candidate.doctorBullets].map((line) => line.length);
  const averageBulletLength = bulletLengths.reduce((sum, value) => sum + value, 0) / bulletLengths.length;

  if (candidate.subhead.length >= 120 && candidate.subhead.length <= 190) score += 8;
  if (averageBulletLength >= 75 && averageBulletLength <= 120) score += 8;
  if (!/\b(revolutionary|magic|game[- ]changer|disrupt)\b/i.test(text)) score += 6;
  if (candidate.outroSubline.length <= 85) score += 4;

  return {
    score,
    checks,
    averageBulletLength: Number(averageBulletLength.toFixed(2))
  };
};

const buildCandidate = (version) => {
  const i0 = (version - 1) % 5;
  const i1 = Math.floor((version - 1) / 5) % 5;
  const i2 = Math.floor((version - 1) / 3) % 5;
  const i3 = Math.floor((version - 1) / 2) % 5;
  const i4 = (version + 1) % 5;
  const i5 = (version + 2) % 5;

  return {
    version,
    kicker: kickers[i0],
    headline: headlines[i1],
    subhead: subheads[i2],
    whatItDoesTitle: "What Apple HIG Skills actually does",
    whatItDoesBullets: whatItDoesBullets[i3],
    doctorTitle: "What hig-doctor validates",
    doctorBullets: doctorBullets[i4],
    agentPathTitle: agentPathTitles[i5],
    outroHeadline: outroHeadlines[(i2 + i4) % 5],
    outroSubline: outroSublines[(i1 + i3) % 5]
  };
};

await mkdir(versionsDir, {recursive: true});

const runRows = [];
for (let version = 1; version <= 25; version += 1) {
  const candidate = buildCandidate(version);
  const evaluation = evaluateCandidate(candidate);

  const row = {
    version,
    score: evaluation.score,
    averageBulletLength: evaluation.averageBulletLength,
    checks: evaluation.checks,
    candidate
  };
  runRows.push(row);

  const versionPath = path.join(versionsDir, `version-${String(version).padStart(2, "0")}.json`);
  await writeFile(versionPath, `${JSON.stringify(row, null, 2)}\n`, "utf8");
}

runRows.sort((a, b) => b.score - a.score || b.version - a.version);
const bestRaw = runRows[0];

const promotedBest = {
  ...bestRaw,
  version: 25,
  promotedFromVersion: bestRaw.version,
  selectedAt: new Date().toISOString(),
  ralphLoop: {
    iterations: 25,
    deletedVersions: 24,
    method: "score-based selection with acceptance criteria checks"
  }
};

for (const file of await readdir(versionsDir)) {
  await rm(path.join(versionsDir, file), {force: true});
}

await writeFile(bestVersionPath, `${JSON.stringify(promotedBest, null, 2)}\n`, "utf8");

const scoreboard = {
  generatedAt: new Date().toISOString(),
  iterations: 25,
  selectedVersion: 25,
  promotedFromVersion: bestRaw.version,
  topFive: runRows.slice(0, 5).map((row) => ({version: row.version, score: row.score})),
  acceptanceCriteria: requiredChecks.map((check) => check.id)
};
await writeFile(scoreboardPath, `${JSON.stringify(scoreboard, null, 2)}\n`, "utf8");

await mkdir(path.dirname(bestScriptPath), {recursive: true});
await writeFile(
  bestScriptPath,
  `${JSON.stringify({
    selectedVersion: 25,
    promotedFromVersion: bestRaw.version,
    score: bestRaw.score,
    script: promotedBest.candidate
  }, null, 2)}\n`,
  "utf8"
);

process.stdout.write(`Ralph loop complete: 25 versions generated, 24 deleted, best kept as version 25 (from v${bestRaw.version}, score ${bestRaw.score}).\n`);
process.stdout.write(`Best script: ${bestScriptPath}\n`);
process.stdout.write(`Best version file: ${bestVersionPath}\n`);
