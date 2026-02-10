import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Apple HIG Skills — AI-ready Apple design guidance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0f1012 0%, #1a1a2e 50%, #0f1012 100%)",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20.5c-4.5 0-7.5-4-7.5-8 0-3.5 2.5-5.5 5-5.5 1.2 0 2 .5 2.5.5s1.3-.5 2.5-.5c2.5 0 5 2 5 5.5 0 4-3 8-7.5 8z" />
          <path d="M12 7V3" />
          <path d="M12 3c1.5 0 3 1 3 2.5" />
        </svg>
      </div>
      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          color: "white",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        Apple HIG Skills
      </div>
      <div
        style={{
          fontSize: "28px",
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          maxWidth: "700px",
          lineHeight: 1.4,
        }}
      >
        AI-ready Apple design guidance for Claude Code
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginTop: "40px",
          fontSize: "20px",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        <span>14 skills</span>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
        <span>156 reference topics</span>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
        <span>Agent Skills spec</span>
      </div>
    </div>,
    { ...size },
  );
}
