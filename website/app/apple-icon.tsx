import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f1012 100%)",
        borderRadius: "40px",
      }}
    >
      <svg
        width="100"
        height="100"
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
    </div>,
    { ...size },
  );
}
