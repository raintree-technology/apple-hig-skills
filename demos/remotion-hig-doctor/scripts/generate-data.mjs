import {execFileSync} from "node:child_process";
import {mkdir, writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(scriptDir, "..");
const repoRoot = path.resolve(demoRoot, "..", "..");
const doctorCli = path.resolve(repoRoot, "packages", "hig-doctor", "src", "cli.js");
const brokenFixture = path.resolve(demoRoot, "fixtures", "broken-repo");
const outputPath = path.resolve(demoRoot, "src", "data", "report-data.json");

const runDoctor = (targetDir) => {
  try {
    const rawOutput = execFileSync(process.execPath, [doctorCli, targetDir, "--json"], {
      encoding: "utf8"
    });
    return JSON.parse(rawOutput);
  } catch (error) {
    if (error instanceof Error && "stdout" in error) {
      const stdout = error.stdout;
      if (typeof stdout === "string" && stdout.trim().startsWith("{")) {
        return JSON.parse(stdout);
      }
      if (Buffer.isBuffer(stdout)) {
        const text = stdout.toString("utf8");
        if (text.trim().startsWith("{")) {
          return JSON.parse(text);
        }
      }
    }
    throw error;
  }
};

const toTopRules = (report, limit = 5) => Object.entries(report.stats.rules)
  .map(([ruleId, count]) => ({ruleId, count}))
  .sort((a, b) => b.count - a.count)
  .slice(0, limit);

const toScopeBreakdown = (report, limit = 6) => report.stats.scopes
  .map((scope) => ({
    scope: scope.scope,
    errors: scope.errors,
    warnings: scope.warnings,
    total: scope.errors + scope.warnings
  }))
  .sort((a, b) => b.total - a.total)
  .slice(0, limit);

const baseline = runDoctor(repoRoot);
const broken = runDoctor(brokenFixture);

const scoreStep = Math.round((baseline.summary.score + broken.summary.score) / 2);

const output = {
  generatedAt: new Date().toISOString(),
  baseline: {
    directory: baseline.directory,
    skillCount: baseline.skillCount,
    summary: baseline.summary,
    todo: baseline.todo ?? []
  },
  broken: {
    directory: broken.directory,
    skillCount: broken.skillCount,
    summary: broken.summary,
    topRules: toTopRules(broken),
    scopeBreakdown: toScopeBreakdown(broken),
    sampleFindings: broken.findings.slice(0, 6),
    todo: (broken.todo ?? []).slice(0, 10),
    todoCounts: {
      high: (broken.todo ?? []).filter((item) => item.priority === "high").length,
      medium: (broken.todo ?? []).filter((item) => item.priority === "medium").length,
      low: (broken.todo ?? []).filter((item) => item.priority === "low").length
    }
  },
  scoreTimeline: [
    {
      label: "Broken fixture",
      score: broken.summary.score
    },
    {
      label: "After fixes",
      score: scoreStep
    },
    {
      label: "Current repo",
      score: baseline.summary.score
    }
  ]
};

await mkdir(path.dirname(outputPath), {recursive: true});
await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");

process.stdout.write(`Wrote ${outputPath}\n`);
