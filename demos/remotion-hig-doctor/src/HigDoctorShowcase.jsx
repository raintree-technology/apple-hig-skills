import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import reportData from "./data/report-data.json";
import ralphBestScript from "./data/ralph-best-script.json";

const copyOverrides = {
  kicker: "HIG-DOCTOR AGENT WORKFLOW",
  headline: "Failing repo in.\n100/100 plan out.",
  subhead:
    "hig-doctor converts repository validation into deterministic TODO items with priority, rule IDs, and done-when criteria so an agent can execute fixes to completion.",
  whatItDoesTitle: "What this demo proves",
  whatItDoesBullets: [
    "Runs the same checks on a broken fixture and a healthy repository.",
    "Outputs explicit TODO tasks with scope, files, and verification commands.",
    "Lets an agent close findings in order and verify a clean 100/100 run."
  ],
  doctorTitle: "Validation output an agent can execute",
  doctorBullets: [
    "Each finding includes a rule ID and scope, so ownership and file targets are unambiguous.",
    "TODO items include priority and done-when criteria to prevent partial fixes.",
    "--json output is stable for CI and autonomous remediation loops."
  ],
  agentPathTitle: "Top TODOs to unblock score",
  outroHeadline: "Structured findings in. Deterministic 100/100 out.",
  outroSubline:
    "A clear fix queue, explicit completion checks, and a verifiable finish line."
};

const scriptCopy = {...ralphBestScript.script, ...copyOverrides};

const palette = {
  background: "#0b0c0f",
  foreground: "#f2f2f4",
  mutedForeground: "rgba(229, 231, 236, 0.7)",
  subtleForeground: "rgba(229, 231, 236, 0.5)",
  card: "hsla(225, 10%, 11%, 0.56)",
  cardSoft: "hsla(225, 10%, 13%, 0.52)",
  border: "hsla(0, 0%, 100%, 0.09)",
  chart1: "#9bb2d5",
  chart2: "#9ec6b8",
  chart3: "#d5c29f",
  chart4: "#b9add1",
  chart5: "#d2aebe",
  success: "#9fbeaa",
  error: "#d7a0a0",
  warning: "#d5c09a",
  ring: "rgba(255,255,255,0.1)"
};

const sceneFade = (frame, durationInFrames) => interpolate(frame, [0, 16, durationInFrames - 18, durationInFrames], [0, 1, 1, 0], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp"
});

const glassCard = {
  background: palette.card,
  border: `1px solid ${palette.border}`,
  borderRadius: 18,
  backdropFilter: "blur(28px) saturate(140%)",
  boxShadow: "0 0 0 0.5px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.14), 0 10px 28px rgba(0,0,0,0.24)"
};

const monoFont = "SF Mono, SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, monospace";
const uiFont = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const Backdrop = () => {
  const frame = useCurrentFrame();
  const driftX = Math.sin(frame / 80) * 18;
  const driftY = Math.cos(frame / 90) * 12;

  return (
    <AbsoluteFill style={{background: palette.background, overflow: "hidden"}}>
      <div
        style={{
          position: "absolute",
          inset: -80,
          transform: `translate(${driftX}px, ${driftY}px) scale(1.04)`,
          backgroundImage: `url(${staticFile("orchard.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "saturate(75%) contrast(90%) brightness(63%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8,10,14,0.76) 0%, rgba(10,11,15,0.82) 48%, rgba(9,9,12,0.88) 100%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 16%, rgba(155,178,213,0.14) 0%, transparent 28%), radial-gradient(circle at 82% 12%, rgba(210,174,190,0.1) 0%, transparent 24%), radial-gradient(circle at 68% 82%, rgba(158,198,184,0.1) 0%, transparent 25%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 0.45px, transparent 0.55px)",
          backgroundSize: "7px 7px"
        }}
      />
    </AbsoluteFill>
  );
};

const StatPill = ({label, value, accent}) => (
  <div
    style={{
      borderRadius: 999,
      border: `1px solid ${palette.border}`,
      background: "rgba(255,255,255,0.04)",
      padding: "7px 11px",
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }}
  >
    <span style={{width: 7, height: 7, borderRadius: 999, background: accent}} />
    <span style={{fontFamily: uiFont, fontSize: 12, color: palette.subtleForeground, letterSpacing: 0.15}}>{label}</span>
    <span style={{fontFamily: uiFont, fontSize: 12, color: palette.foreground, fontWeight: 600}}>{value}</span>
  </div>
);

const BrandFooter = () => (
  <div
    style={{
      position: "absolute",
      left: 84,
      right: 84,
      bottom: 22,
      ...glassCard,
      borderRadius: 14,
      padding: "10px 14px",
      background: "hsla(225, 10%, 10%, 0.66)",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: 14
    }}
  >
    <div style={{display: "flex", alignItems: "center", gap: 10}}>
      <Img
        src={staticFile("raintree-icon.png")}
        style={{
          width: 22,
          height: 22,
          objectFit: "contain",
          filter: "invert(1) opacity(0.78)"
        }}
      />
      <span style={{fontFamily: uiFont, fontSize: 13, color: palette.mutedForeground, fontWeight: 560, letterSpacing: 0.08}}>
        Raintree Technology™
      </span>
    </div>

    <div style={{height: 1, background: palette.border}} />

    <div style={{display: "flex", alignItems: "center", gap: 16, fontFamily: monoFont, fontSize: 12, color: palette.subtleForeground}}>
      <span>raintree.technology</span>
      <span>github.com/raintree-technology</span>
    </div>
  </div>
);

const IntroScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);
  const rise = spring({frame, fps, config: {damping: 135}});

  return (
    <AbsoluteFill style={{opacity: fade, padding: "68px 84px 96px", justifyContent: "center"}}>
      <div
        style={{
          ...glassCard,
          display: "grid",
          gridTemplateColumns: "1.22fr 0.78fr",
          gap: 18,
          padding: 28,
          transform: `translateY(${interpolate(rise, [0, 1], [12, 0])}px)`
        }}
      >
        <div>
          <div
            style={{
              fontFamily: uiFont,
              color: palette.chart1,
              fontSize: 14,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              fontWeight: 560
            }}
          >
            {scriptCopy.kicker}
          </div>
          <div
            style={{
              fontFamily: uiFont,
              color: palette.foreground,
              fontSize: 58,
              lineHeight: 0.99,
              letterSpacing: "-0.024em",
              fontWeight: 600,
              marginTop: 8,
              whiteSpace: "pre-line"
            }}
          >
            {scriptCopy.headline}
          </div>
          <div
            style={{
              fontFamily: uiFont,
              color: palette.mutedForeground,
              fontSize: 22,
              lineHeight: 1.34,
              letterSpacing: "-0.012em",
              marginTop: 14,
              maxWidth: 860
            }}
          >
            {scriptCopy.subhead}
          </div>

          <div
            style={{
              ...glassCard,
              marginTop: 16,
              padding: "14px 16px",
              borderRadius: 14,
              background: palette.cardSoft
            }}
          >
            <div
              style={{
                fontFamily: uiFont,
                fontSize: 12,
                color: palette.chart2,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                fontWeight: 600
              }}
            >
              {scriptCopy.whatItDoesTitle}
            </div>
            <div style={{marginTop: 8, display: "grid", gap: 6}}>
              {scriptCopy.whatItDoesBullets.map((line) => (
                <div key={line} style={{display: "grid", gridTemplateColumns: "12px 1fr", gap: 7, alignItems: "start"}}>
                  <span style={{width: 6, height: 6, borderRadius: 999, background: palette.chart2, marginTop: 8}} />
                  <span style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 17, lineHeight: 1.34}}>{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14}}>
            <StatPill label="skills" value={String(reportData.baseline.skillCount)} accent={palette.chart1} />
            <StatPill label="broken score" value={`${reportData.broken.summary.score}/100`} accent={palette.error} />
            <StatPill label="target score" value={`${reportData.baseline.summary.score}/100`} accent={palette.success} />
            <StatPill label="high-priority TODO" value={String(reportData.broken.todoCounts.high)} accent={palette.warning} />
          </div>
        </div>

        <div style={{...glassCard, borderRadius: 14, overflow: "hidden"}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 12px",
              borderBottom: `1px solid ${palette.border}`,
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <span style={{width: 9, height: 9, borderRadius: 999, background: palette.error, opacity: 0.82}} />
            <span style={{width: 9, height: 9, borderRadius: 999, background: palette.warning, opacity: 0.82}} />
            <span style={{width: 9, height: 9, borderRadius: 999, background: palette.success, opacity: 0.82}} />
            <span
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: uiFont,
                color: palette.subtleForeground,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.35
              }}
            >
              hig-doctor output
            </span>
            <span style={{width: 22}} />
          </div>

          <div
            style={{
              background: "#1d1d1f",
              minHeight: 438,
              padding: "14px 15px",
              fontFamily: monoFont,
              fontSize: 13,
              lineHeight: 1.42,
              color: "rgba(255,255,255,0.86)"
            }}
          >
            {[
              "$ node packages/hig-doctor/src/cli.js fixtures/broken-repo --json",
              `Score: ${reportData.broken.summary.score}/100 (${reportData.broken.summary.label})`,
              `Errors: ${reportData.broken.summary.errors}  Warnings: ${reportData.broken.summary.warnings}`,
              "",
              "Agent TODO (goal: 100/100, 0 errors, 0 warnings)",
              `1. [HIGH] Resolve ${reportData.broken.todoCounts.high} high-priority tasks first`,
              "   Done when: rerun doctor and score is 100/100"
            ].map((line, index) => (
              <div
                key={line}
                style={{
                  color: line.startsWith("$")
                    ? "rgba(255,255,255,0.96)"
                    : line.startsWith("Score")
                      ? palette.success
                      : line.startsWith("Agent TODO")
                        ? palette.chart1
                        : "rgba(255,255,255,0.78)",
                  transform: `translateY(${interpolate(frame, [0, 24 + index * 2], [8, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}px)`,
                  opacity: interpolate(frame, [0, 18 + index * 3], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})
                }}
              >
                {line || "\u00A0"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const SeverityScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);
  const findingStats = [
    {label: "Errors", value: reportData.broken.summary.errors, color: palette.error},
    {label: "Warnings", value: reportData.broken.summary.warnings, color: palette.warning}
  ];
  const todoStats = [
    {label: "High", value: reportData.broken.todoCounts.high, color: palette.error},
    {label: "Medium", value: reportData.broken.todoCounts.medium, color: palette.warning},
    {label: "Low", value: reportData.broken.todoCounts.low, color: palette.success}
  ];

  const maxValue = Math.max(...findingStats.map((s) => s.value), 1);
  const totalFindings = findingStats.reduce((sum, s) => sum + s.value, 0);
  const totalTodo = Math.max(1, todoStats.reduce((sum, s) => sum + s.value, 0));
  const scoreTimeline = reportData.scoreTimeline ?? [];
  const radius = 120;
  const strokeWidth = 28;
  const circumference = 2 * Math.PI * radius;
  let consumed = 0;

  return (
    <AbsoluteFill style={{opacity: fade, padding: "68px 84px 96px", justifyContent: "center"}}>
      <div style={{...glassCard, padding: 24}}>
        <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 52, letterSpacing: "-0.022em", fontWeight: 600}}>Broken run: prioritized for execution</div>
        <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 21, letterSpacing: "-0.012em", marginTop: 6}}>
          {`${reportData.broken.summary.errors} errors, ${reportData.broken.summary.warnings} warnings, and ${totalTodo} generated TODO items. Fix high-priority items first, then verify to 100/100.`}
        </div>

        <div style={{marginTop: 16, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 14}}>
          <div style={{...glassCard, borderRadius: 14, padding: 14, minHeight: 438}}>
            <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", fontWeight: 600}}>{`Findings by severity (${totalFindings})`}</div>
            <div style={{position: "relative", height: 312, marginTop: 12}}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: i * 78,
                    borderTop: `1px solid ${palette.ring}`
                  }}
                />
              ))}

              <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "space-evenly"}}>
                {findingStats.map((item, index) => {
                  const grow = spring({frame, fps, delay: index * 10, config: {damping: 190}});
                  const height = interpolate(item.value / maxValue, [0, 1], [24, 248]) * grow;
                  return (
                    <div key={item.label} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 7}}>
                      <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 40, fontWeight: 600}}>{item.value}</div>
                      <div
                        style={{
                          width: 164,
                          height,
                          borderRadius: "14px 14px 8px 8px",
                          background: `linear-gradient(180deg, ${item.color}, ${item.color}8f)`,
                          boxShadow: `0 8px 20px ${item.color}3a`
                        }}
                      />
                      <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 22}}>{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{display: "grid", gridTemplateRows: "1fr auto", gap: 10}}>
            <div style={{...glassCard, borderRadius: 14, padding: 14, minHeight: 352, display: "flex", flexDirection: "column"}}>
              <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", fontWeight: 600}}>TODO priority mix</div>
              <div style={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
                <svg width="360" height="360" viewBox="0 0 360 360">
                  <circle cx="180" cy="180" r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth={strokeWidth} fill="none" />
                  {todoStats.map((item) => {
                    const progress = interpolate(frame, [0, 98], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.out(Easing.cubic)
                    });
                    const fraction = item.value / totalTodo;
                    const segmentLength = circumference * fraction;
                    const offset = interpolate(progress, [0, 1], [segmentLength, 0]);
                    const rotation = (consumed / totalTodo) * 360 - 90;
                    consumed += item.value;
                    return (
                      <circle
                        key={item.label}
                        cx="180"
                        cy="180"
                        r={radius}
                        stroke={item.color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${segmentLength} ${circumference}`}
                        strokeDashoffset={offset}
                        transform={`rotate(${rotation} 180 180)`}
                      />
                    );
                  })}
                </svg>
                <div style={{position: "absolute", textAlign: "center"}}>
                  <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 16}}>agent TODO</div>
                  <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 54, fontWeight: 600}}>{totalTodo}</div>
                </div>
              </div>
            </div>

            <div style={{...glassCard, borderRadius: 14, padding: "10px 12px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 7}}>
              {scoreTimeline.map((point, index) => (
                <div
                  key={point.label}
                  style={{
                    borderRadius: 10,
                    border: `1px solid ${palette.border}`,
                    background: "rgba(255,255,255,0.035)",
                    padding: "7px 8px"
                  }}
                >
                  <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.9, fontWeight: 600}}>
                    {point.label}
                  </div>
                  <div style={{fontFamily: uiFont, color: index === 0 ? palette.error : index === scoreTimeline.length - 1 ? palette.success : palette.warning, fontSize: 22, fontWeight: 600, marginTop: 2}}>
                    {point.score}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const RulesScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);
  const topRules = reportData.broken.topRules;
  const maxCount = Math.max(...topRules.map((r) => r.count), 1);

  return (
    <AbsoluteFill style={{opacity: fade, padding: "68px 84px 96px", justifyContent: "center"}}>
      <div style={{...glassCard, padding: 24, display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 14}}>
        <div>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 50, letterSpacing: "-0.022em", fontWeight: 600}}>{scriptCopy.doctorTitle}</div>
          <div style={{marginTop: 10, display: "grid", gap: 6}}>
            {scriptCopy.doctorBullets.map((line) => (
              <div key={line} style={{display: "grid", gridTemplateColumns: "12px 1fr", gap: 7, alignItems: "start"}}>
                <span style={{width: 6, height: 6, borderRadius: 999, background: palette.chart1, marginTop: 8}} />
                <span style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 18, lineHeight: 1.34}}>{line}</span>
              </div>
            ))}
          </div>

          <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, letterSpacing: 1.1, textTransform: "uppercase", fontWeight: 600, marginTop: 13}}>
            Most frequent failing rules
          </div>
          <div style={{marginTop: 14, display: "grid", gap: 8}}>
            {topRules.map((rule, index) => {
              const grow = spring({frame, fps, delay: index * 7, config: {damping: 200}});
              const width = interpolate(grow, [0, 1], [0, (rule.count / maxCount) * 100]);
              return (
                <div key={rule.ruleId} style={{...glassCard, borderRadius: 12, padding: "10px 12px", background: palette.cardSoft}}>
                  <div style={{display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center"}}>
                    <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 17, fontWeight: 500}}>{rule.ruleId}</div>
                    <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 26, fontWeight: 600}}>{rule.count}</div>
                  </div>
                  <div style={{marginTop: 7, height: 8, borderRadius: 999, background: "rgba(255,255,255,0.1)", overflow: "hidden"}}>
                    <div style={{height: "100%", width: `${width}%`, background: `linear-gradient(90deg, ${palette.chart1}, ${palette.chart2})`, borderRadius: 999}} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{...glassCard, borderRadius: 14, padding: 14}}>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em"}}>{scriptCopy.agentPathTitle}</div>
          <div style={{marginTop: 8, display: "grid", gap: 7}}>
            {reportData.broken.todo.slice(0, 5).map((todo, index) => {
              const rise = spring({frame, fps, delay: index * 5, config: {damping: 190}});
              const priorityColor = todo.priority === "high" ? palette.error : todo.priority === "medium" ? palette.warning : palette.success;
              return (
                <div
                  key={todo.id}
                  style={{
                    borderRadius: 10,
                    border: `1px solid ${palette.border}`,
                    padding: "9px 10px",
                    background: "rgba(255,255,255,0.035)",
                    transform: `translateY(${interpolate(rise, [0, 1], [10, 0])}px)`,
                    opacity: rise
                  }}
                >
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8}}>
                    <div style={{fontFamily: uiFont, color: palette.chart1, fontSize: 12, fontWeight: 600}}>{todo.ruleId}</div>
                    <div style={{borderRadius: 999, padding: "2px 7px", border: `1px solid ${priorityColor}88`, color: priorityColor, fontFamily: uiFont, fontSize: 10, textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.55}}>
                      {todo.priority}
                    </div>
                  </div>
                  <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 15, lineHeight: 1.32, marginTop: 3}}>{todo.task}</div>
                  <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 12, marginTop: 5, lineHeight: 1.24}}>{todo.doneWhen}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const OutroScene = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = sceneFade(frame, durationInFrames);
  const punch = spring({frame, fps, delay: 6, config: {damping: 130}});

  return (
    <AbsoluteFill style={{opacity: fade, padding: "80px 96px 102px", justifyContent: "center"}}>
      <div
        style={{
          ...glassCard,
          padding: "28px 32px",
          transform: `scale(${interpolate(punch, [0, 1], [0.97, 1])})`,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 22,
          alignItems: "center"
        }}
      >
        <div>
          <div style={{fontFamily: uiFont, color: palette.foreground, fontSize: 54, lineHeight: 1, letterSpacing: "-0.022em", fontWeight: 600}}>{scriptCopy.outroHeadline}</div>
          <div style={{fontFamily: uiFont, color: palette.mutedForeground, fontSize: 22, lineHeight: 1.32, letterSpacing: "-0.012em", marginTop: 10}}>{scriptCopy.outroSubline}</div>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(160px, 1fr))", gap: 8}}>
          {[
            {label: "Broken", value: `${reportData.broken.summary.score}/100`, color: palette.error},
            {label: "Healthy", value: `${reportData.baseline.summary.score}/100`, color: palette.success},
            {label: "Errors", value: String(reportData.baseline.summary.errors), color: palette.chart1},
            {label: "Warnings", value: String(reportData.baseline.summary.warnings), color: palette.chart4}
          ].map((item) => (
            <div key={item.label} style={{...glassCard, borderRadius: 12, padding: "9px 11px", background: "rgba(255,255,255,0.04)"}}>
              <div style={{fontFamily: uiFont, color: palette.subtleForeground, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600}}>{item.label}</div>
              <div style={{fontFamily: uiFont, color: item.color, fontSize: 30, fontWeight: 600, letterSpacing: "-0.014em", marginTop: 2}}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const HigDoctorShowcase = () => {
  return (
    <AbsoluteFill style={{fontFamily: uiFont}}>
      <Backdrop />

      <Sequence from={0} durationInFrames={180}>
        <IntroScene durationInFrames={180} />
      </Sequence>

      <Sequence from={154} durationInFrames={220}>
        <SeverityScene durationInFrames={220} />
      </Sequence>

      <Sequence from={346} durationInFrames={190}>
        <RulesScene durationInFrames={190} />
      </Sequence>

      <Sequence from={506} durationInFrames={124}>
        <OutroScene durationInFrames={124} />
      </Sequence>

      <BrandFooter />
    </AbsoluteFill>
  );
};
