import type { Metadata } from "next";
import "./globals.css";
const baseUrl = "https://hig.raintree.technology";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Apple HIG Skills — AI-ready Apple design guidance",
  description:
    "14 agent skills that give AI coding assistants deep knowledge of Apple's Human Interface Guidelines. Built for Claude Code and the Agent Skills spec.",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  keywords: [
    "apple",
    "human interface guidelines",
    "HIG",
    "agent skills",
    "claude code",
    "AI",
    "design",
    "iOS",
    "macOS",
    "SwiftUI",
    "UIKit",
  ],
  openGraph: {
    title: "Apple HIG Skills — AI-ready Apple design guidance",
    description:
      "14 agent skills that give AI coding assistants deep knowledge of Apple's Human Interface Guidelines. Works with Claude Code.",
    type: "website",
    siteName: "Apple HIG Skills",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apple HIG Skills — AI-ready Apple design guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
