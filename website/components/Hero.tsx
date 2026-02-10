"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Copy, Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const terminalLines = [
  { type: "prompt", content: "claude" },
  { type: "blank", content: "" },
  {
    type: "user",
    content: "> How should I design the tab bar for my iPad app?",
  },
  { type: "blank", content: "" },
  { type: "system", content: "Loading hig-components-layout..." },
  { type: "system", content: "Reading references/tab-bars.md" },
  { type: "blank", content: "" },
  { type: "response", content: "Based on Apple's HIG for iPadOS tab bars," },
  {
    type: "response",
    content: "use a sidebar instead of a bottom tab bar.",
  },
  {
    type: "response",
    content: "iPadOS has more screen space, so a sidebar",
  },
  {
    type: "response",
    content: "gives users persistent, scannable navigation.",
  },
] as const;

const INSTALL_COMMAND =
  "git clone https://github.com/raintree-technology/apple-hig-skills.git .claude/apple-hig-skills";

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion.current) {
      setVisibleLines(terminalLines.length);
      return;
    }

    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 350);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 px-3 py-1 text-xs"
          >
            <Zap className="h-3 w-3" />
            Built on the Agent Skills spec
          </Badge>

          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-[80px] font-semibold tracking-tight leading-[1.05] mb-5"
          >
            Your AI agent just learned
            <br />
            Apple&apos;s design language.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium tracking-tight max-w-3xl mx-auto mb-4">
            Ask any design question. Get instant, platform-specific guidance
            grounded in Apple&apos;s Human Interface Guidelines — without
            reading 500 pages yourself.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8">
            Works with Claude Code, Cursor, Copilot, and any agent that reads
            files. Built on the open{" "}
            <a
              href="https://agentskills.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Agent Skills
            </a>{" "}
            specification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Button size="lg" asChild>
              <a href="#install">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#use-cases">See what it does</a>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2">
            <code className="px-4 py-2.5 rounded-lg border bg-muted/50 text-sm font-mono text-muted-foreground">
              git clone ...apple-hig-skills.git
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              aria-label={
                copied ? "Copied to clipboard" : "Copy install command"
              }
              aria-live="polite"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Terminal demo */}
        <div
          className="max-w-3xl mx-auto rounded-xl border glass overflow-hidden shadow-lg"
          role="img"
          aria-label="Terminal showing Claude Code loading HIG skills to answer a design question about iPad tab bars"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
            </div>
            <span className="flex-1 text-center text-xs text-muted-foreground font-medium">
              Claude Code
            </span>
            <div className="w-[54px]" />
          </div>
          <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed min-h-[240px] bg-[#1d1d1f] dark:bg-[#0a0a0a]">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={cn(
                  "mb-0.5",
                  line.type === "prompt" && "text-white",
                  line.type === "user" && "text-white font-medium",
                  line.type === "system" && "text-white/40",
                  line.type === "response" && "text-white/70",
                  line.type === "blank" && "h-5",
                )}
              >
                {line.type === "prompt" && (
                  <span className="text-white/40">$ </span>
                )}
                {line.content}
              </div>
            ))}
            {visibleLines < terminalLines.length && (
              <span
                className="inline-block w-2 h-4 bg-white/60 animate-pulse"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
