import path from "node:path";

const severityOrder = {
  error: 0,
  warning: 1
};

const truncate = (value, maxLength) => {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 1))}…`;
};

const formatLocation = (rootDirectory, filePath) => {
  if (!filePath) return "";
  const relative = path.relative(rootDirectory, filePath);
  return ` (${relative || "."})`;
};

const buildScopeSummary = (result) => {
  if (!result.stats || !Array.isArray(result.stats.scopes) || result.stats.scopes.length === 0) {
    return [];
  }

  const topScopes = result.stats.scopes.slice(0, 5);
  return topScopes.map((scope) => {
    const label = scope.scope === "repo" ? "repo" : scope.scope;
    return `${label}: ${scope.errors}e/${scope.warnings}w`;
  });
};

const getFindingsForText = (result, verbose) => {
  const findings = verbose
    ? result.findings
    : result.findings.filter((finding) => finding.severity === "error");

  return [...findings].sort((left, right) => {
    const severityDelta = severityOrder[left.severity] - severityOrder[right.severity];
    if (severityDelta !== 0) return severityDelta;
    const scopeLeft = left.skill ?? "repo";
    const scopeRight = right.skill ?? "repo";
    if (scopeLeft !== scopeRight) return scopeLeft.localeCompare(scopeRight);
    if (left.ruleId !== right.ruleId) return left.ruleId.localeCompare(right.ruleId);
    return left.message.localeCompare(right.message);
  });
};

export const formatTextResult = (result, options = {}) => {
  const verbose = Boolean(options.verbose);
  const lines = [];

  lines.push("hig-doctor");
  lines.push(`Directory: ${result.directory}`);
  lines.push(`Skills scanned: ${result.skillCount}`);
  lines.push(`Score: ${result.summary.score}/100 (${result.summary.label})`);
  lines.push(`Errors: ${result.summary.errors}  Warnings: ${result.summary.warnings}`);

  const scopeSummary = buildScopeSummary(result);
  if (scopeSummary.length > 0) {
    lines.push(`Top scopes: ${scopeSummary.join(" | ")}`);
  }

  lines.push("");

  if (result.findings.length === 0) {
    lines.push("No issues found.");
    return lines.join("\n");
  }

  const findings = getFindingsForText(result, verbose);

  for (const finding of findings) {
    const level = finding.severity.toUpperCase();
    const scope = finding.skill ?? "repo";
    const message = truncate(finding.message, 180);
    lines.push(
      `[${level}] [${scope}] ${finding.ruleId}: ${message}${formatLocation(result.directory, finding.file)}`
    );
  }

  if (!verbose) {
    const hiddenWarnings = result.findings.filter((finding) => finding.severity === "warning").length;
    if (hiddenWarnings > 0) {
      lines.push("");
      lines.push(`Use --verbose to view ${hiddenWarnings} warning(s).`);
    }
  }

  return lines.join("\n");
};
