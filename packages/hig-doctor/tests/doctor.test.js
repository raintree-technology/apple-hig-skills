import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { diagnose } from "../src/doctor.js";

const execFileAsync = promisify(execFile);
const testFilePath = fileURLToPath(import.meta.url);
const packageRoot = path.resolve(path.dirname(testFilePath), "..");
const cliPath = path.join(packageRoot, "src", "cli.js");

const runCli = async (args, options = {}) => {
  try {
    const { stdout, stderr } = await execFileAsync(process.execPath, [cliPath, ...args], {
      cwd: packageRoot,
      ...options
    });

    return {
      code: 0,
      stdout,
      stderr
    };
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      "stdout" in error &&
      "stderr" in error
    ) {
      return {
        code: typeof error.code === "number" ? error.code : 1,
        stdout: typeof error.stdout === "string" ? error.stdout : "",
        stderr: typeof error.stderr === "string" ? error.stderr : ""
      };
    }

    throw error;
  }
};

const writeRepoCommonFiles = async (rootDirectory, skillNames) => {
  await mkdir(path.join(rootDirectory, ".claude-plugin"), { recursive: true });

  const marketplace = {
    name: "apple-hig-skills",
    plugins: [
      {
        name: "apple-hig-skills",
        source: "./",
        skills: skillNames.map((name) => `./skills/${name}`)
      }
    ]
  };

  await writeFile(
    path.join(rootDirectory, ".claude-plugin", "marketplace.json"),
    `${JSON.stringify(marketplace, null, 2)}\n`,
    "utf8"
  );

  const versionsRows = skillNames
    .map((name) => `| ${name} | 1.0.0 | 2025-02-02 |`)
    .join("\n");

  await writeFile(
    path.join(rootDirectory, "VERSIONS.md"),
    `| Skill | Version | Last Updated |\n| --- | --- | --- |\n${versionsRows}\n`,
    "utf8"
  );

  const readmeRows = skillNames
    .map((name) => `| \`${name}\` | Description |`)
    .join("\n");

  await writeFile(
    path.join(rootDirectory, "README.md"),
    `# Test\n\n## Skills\n\n| Skill | Description |\n| --- | --- |\n${readmeRows}\n`,
    "utf8"
  );
};

const createSampleSkill = async (rootDirectory) => {
  const skillDirectory = path.join(rootDirectory, "skills", "hig-sample");
  await mkdir(path.join(skillDirectory, "references"), { recursive: true });

  const skillContent = `---
name: hig-sample
version: 1.0.0
description: Use this skill when the user says sample things.
---

# Apple HIG: Sample Skill

Check for \`.claude/apple-design-context.md\` before asking questions.

## Key Principles

1. Keep it clear.

## Reference Index

| Reference | Topic |
| --- | --- |
| [example.md](references/example.md) | Example |

## Output Format

1. Be structured.

## Questions to Ask

1. What does the user need?

## Related Skills

- **hig-sample** -- Self reference for test fixture.
`;

  await writeFile(path.join(skillDirectory, "SKILL.md"), skillContent, "utf8");
  await writeFile(path.join(skillDirectory, "references", "example.md"), "Example reference", "utf8");
};

const createProjectContextSkill = async (rootDirectory) => {
  const skillDirectory = path.join(rootDirectory, "skills", "hig-project-context");
  await mkdir(skillDirectory, { recursive: true });

  const skillContent = `---
name: hig-project-context
version: 1.0.0
description: Use this skill when the user says set up project context.
---

# Apple HIG: Project Context

Check for \`.claude/apple-design-context.md\` before asking questions.

## Gathering Context

1. Read known files.

## Context Document Template

Use a template.

## Related Skills

- **hig-sample** -- Foundation linkage.
`;

  await writeFile(path.join(skillDirectory, "SKILL.md"), skillContent, "utf8");
};

const createValidRepo = async () => {
  const rootDirectory = await mkdtemp(path.join(os.tmpdir(), "hig-doctor-test-"));
  await mkdir(path.join(rootDirectory, "skills"), { recursive: true });

  await createSampleSkill(rootDirectory);
  await createProjectContextSkill(rootDirectory);
  await writeRepoCommonFiles(rootDirectory, ["hig-sample", "hig-project-context"]);

  return rootDirectory;
};

test("diagnose returns no issues for a valid repository", async () => {
  const repoPath = await createValidRepo();
  try {
    const result = await diagnose(repoPath);
    assert.equal(result.summary.errors, 0);
    assert.equal(result.summary.warnings, 0);
    assert.equal(result.summary.passed, true);
    assert.equal(result.summary.score, 100);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("diagnose reports missing required section in a standard skill", async () => {
  const repoPath = await createValidRepo();
  try {
    const skillPath = path.join(repoPath, "skills", "hig-sample", "SKILL.md");
    const original = await readFile(skillPath, "utf8");
    await writeFile(skillPath, original.replace(/## Questions to Ask[\s\S]*?## Related Skills/, "## Related Skills"), "utf8");

    const result = await diagnose(repoPath);
    assert.ok(result.findings.some((finding) => finding.ruleId === "skill/required-section"));
    assert.ok(result.summary.errors > 0);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("diagnose reports marketplace mismatch", async () => {
  const repoPath = await createValidRepo();
  try {
    const marketplacePath = path.join(repoPath, ".claude-plugin", "marketplace.json");
    const marketplace = JSON.parse(await readFile(marketplacePath, "utf8"));
    marketplace.plugins[0].skills.push("./skills/hig-missing");
    await writeFile(marketplacePath, `${JSON.stringify(marketplace, null, 2)}\n`, "utf8");

    const result = await diagnose(repoPath);
    assert.ok(result.findings.some((finding) => finding.ruleId === "repo/marketplace-skill-exists"));
    assert.ok(result.summary.errors > 0);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("strict mode fails when only warnings are present", async () => {
  const repoPath = await createValidRepo();
  try {
    const readmePath = path.join(repoPath, "README.md");
    const readme = await readFile(readmePath, "utf8");
    await writeFile(readmePath, readme.replace("| `hig-sample` | Description |", ""), "utf8");

    const nonStrict = await diagnose(repoPath, { strict: false });
    assert.equal(nonStrict.summary.errors, 0);
    assert.ok(nonStrict.summary.warnings > 0);
    assert.equal(nonStrict.summary.passed, true);

    const strict = await diagnose(repoPath, { strict: true });
    assert.equal(strict.summary.errors, 0);
    assert.ok(strict.summary.warnings > 0);
    assert.equal(strict.summary.passed, false);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("diagnose includes agent todo items when findings are present", async () => {
  const repoPath = await createValidRepo();
  try {
    const skillPath = path.join(repoPath, "skills", "hig-sample", "SKILL.md");
    const original = await readFile(skillPath, "utf8");
    await writeFile(skillPath, original.replace("## Output Format", "## Output Format Removed"), "utf8");

    const result = await diagnose(repoPath);
    assert.ok(result.findings.length > 0);
    assert.ok(Array.isArray(result.todo));
    assert.ok(result.todo.length > 0);
    assert.equal(result.todo[0].priority, "high");
    assert.match(result.todo[0].task, /^Fix /);
    assert.ok(Array.isArray(result.todo[0].files));
    assert.ok(result.todo[0].files.length > 0);
    assert.match(result.todo[0].doneWhen, /100\/100/);
    assert.match(result.todo[0].verifyCommand, /--json/);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("cli text output includes an Agent TODO section", async () => {
  const repoPath = await createValidRepo();
  try {
    const result = await runCli([repoPath]);
    assert.equal(result.code, 0);
    assert.equal(result.stderr, "");
    assert.match(result.stdout, /Agent TODO/m);
    assert.match(result.stdout, /goal: 100\/100/m);
    assert.match(result.stdout, /No fixes required/m);
    assert.match(result.stdout, /Verify: .*--score/m);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("cli --json includes machine-readable todo items", async () => {
  const repoPath = await createValidRepo();
  try {
    const result = await runCli([repoPath, "--json"]);
    assert.equal(result.code, 0);
    assert.equal(result.stderr, "");
    const report = JSON.parse(result.stdout);
    assert.ok(Array.isArray(report.todo));
    assert.ok(report.todo.length > 0);
    assert.equal(report.todo[0].task, "No fixes required");
    assert.equal(Array.isArray(report.todo[0].files), true);
    assert.match(report.todo[0].verifyCommand, /--score/);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("todo list is not truncated for large finding sets", async () => {
  const repoPath = await createValidRepo();
  try {
    const skillPath = path.join(repoPath, "skills", "hig-sample", "SKILL.md");
    await writeFile(
      skillPath,
      `---
name: bad--skill
version: one
description: Tiny description.
---

# Broken Skill

## Placeholder

[Missing reference](references/nope.md)
`,
      "utf8"
    );

    const result = await diagnose(repoPath);
    const uniqueRuleScopePairs = new Set(result.findings.map((finding) => `${finding.ruleId}:${finding.skill ?? "repo"}`));
    assert.ok(uniqueRuleScopePairs.size > 8);
    assert.equal(result.todo.length, uniqueRuleScopePairs.size);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("nested reference markdown files are discovered recursively", async () => {
  const repoPath = await createValidRepo();
  try {
    const skillDirectory = path.join(repoPath, "skills", "hig-sample");
    const skillPath = path.join(skillDirectory, "SKILL.md");
    const nestedReferencePath = path.join(skillDirectory, "references", "platform", "ios.md");

    await mkdir(path.dirname(nestedReferencePath), { recursive: true });
    await writeFile(nestedReferencePath, "Nested reference", "utf8");

    const skillContent = await readFile(skillPath, "utf8");
    await writeFile(
      skillPath,
      skillContent.replace("references/example.md", "references/platform/ios.md"),
      "utf8"
    );

    await rm(path.join(skillDirectory, "references", "example.md"), { force: true });

    const result = await diagnose(repoPath);
    assert.equal(
      result.findings.some(
        (finding) => finding.ruleId === "skill/references-directory-has-files" && finding.skill === "hig-sample"
      ),
      false
    );
    assert.equal(
      result.findings.some(
        (finding) => finding.ruleId === "skill/reference-file-exists" && finding.skill === "hig-sample"
      ),
      false
    );
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("missing nested reference links still report skill/reference-file-exists", async () => {
  const repoPath = await createValidRepo();
  try {
    const skillPath = path.join(repoPath, "skills", "hig-sample", "SKILL.md");
    const skillContent = await readFile(skillPath, "utf8");
    await writeFile(
      skillPath,
      skillContent.replace("references/example.md", "references/platform/missing.md"),
      "utf8"
    );

    const result = await diagnose(repoPath);
    assert.equal(
      result.findings.some(
        (finding) =>
          finding.ruleId === "skill/reference-file-exists" &&
          finding.skill === "hig-sample" &&
          finding.message.includes("references/platform/missing.md")
      ),
      true
    );
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("cli --version matches packages/hig-doctor/package.json", async () => {
  const packageJsonPath = path.join(packageRoot, "package.json");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

  const { stdout, stderr } = await runCli(["--version"]);

  assert.equal(stderr, "");
  assert.equal(stdout.trim(), packageJson.version);
});

test("cli --score returns a numeric score and exits 0 on a clean fixture", async () => {
  const repoPath = await createValidRepo();
  try {
    const result = await runCli([repoPath, "--score"]);
    assert.equal(result.code, 0);
    assert.equal(result.stderr, "");
    assert.match(result.stdout.trim(), /^[0-9]+$/);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});

test("cli unknown option exits non-zero with actionable error message", async () => {
  const result = await runCli(["--not-a-real-flag"]);
  assert.notEqual(result.code, 0);
  assert.match(result.stderr, /^hig-doctor: Unknown option: --not-a-real-flag/m);
});

test("cli rejects --tui when combined with --score or --json", async () => {
  for (const args of [["--tui", "--score"], ["--tui", "--json"]]) {
    const result = await runCli(args);
    assert.notEqual(result.code, 0);
    assert.match(result.stderr, /^hig-doctor: --tui cannot be combined with --json or --score/m);
  }
});

test("cli strict mode exits non-zero when repository has warnings only", async () => {
  const repoPath = await createValidRepo();
  try {
    const readmePath = path.join(repoPath, "README.md");
    const readme = await readFile(readmePath, "utf8");
    await writeFile(readmePath, readme.replace("| `hig-sample` | Description |", ""), "utf8");

    const baseline = await runCli([repoPath, "--json"]);
    assert.equal(baseline.code, 0);
    assert.equal(baseline.stderr, "");
    const baselineReport = JSON.parse(baseline.stdout);
    assert.equal(baselineReport.summary.errors, 0);
    assert.ok(baselineReport.summary.warnings > 0);

    const strict = await runCli([repoPath, "--strict", "--score"]);
    assert.notEqual(strict.code, 0);
    assert.equal(strict.stderr, "");
    assert.match(strict.stdout.trim(), /^[0-9]+$/);
  } finally {
    await rm(repoPath, { recursive: true, force: true });
  }
});
