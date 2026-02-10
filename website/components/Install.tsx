"use client";

import { useState, useCallback } from "react";
import { Copy, Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MAIN_COMMAND =
  "git clone https://github.com/raintree-technology/apple-hig-skills.git .claude/apple-hig-skills";

const altMethods = [
  {
    label: "Copy files",
    command: "cp -r apple-hig-skills/skills/* .claude/skills/",
  },
  {
    label: "Submodule",
    command:
      "git submodule add https://github.com/raintree-technology/apple-hig-skills.git .claude/apple-hig-skills",
  },
  {
    label: "CLI",
    command: "npx skills add raintree-technology/apple-hig-skills",
  },
] as const;

const firstQuestions = [
  "How should I design the navigation for my iPad app?",
  "What colors should I use for dark mode?",
  "How do I add Apple Pay to my checkout flow?",
];

export default function Install() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  return (
    <section
      id="install"
      aria-labelledby="install-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="text-center pb-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                30 seconds to set up
              </p>
              <CardTitle className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Get started.
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-2">
                Clone into your project&apos;s{" "}
                <code className="px-1.5 py-0.5 rounded-md bg-muted text-sm">
                  .claude/
                </code>{" "}
                directory and start asking design questions.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main command */}
              <div className="flex items-center gap-2">
                <code
                  className="flex-1 px-4 py-3 rounded-lg bg-[#1d1d1f] dark:bg-[#0a0a0a] text-white/80 text-sm font-mono overflow-x-auto"
                  aria-label={`Install: ${MAIN_COMMAND}`}
                >
                  {MAIN_COMMAND}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(MAIN_COMMAND, "main")}
                  aria-label={
                    copied === "main"
                      ? "Copied to clipboard"
                      : "Copy install command"
                  }
                  aria-live="polite"
                >
                  {copied === "main" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* First question prompt */}
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium">
                    Then try your first question
                  </p>
                </div>
                <div className="space-y-2">
                  {firstQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleCopy(question, question)}
                      className="w-full text-left px-3 py-2 rounded-md bg-background border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer"
                      aria-label={
                        copied === question
                          ? "Copied to clipboard"
                          : `Copy: ${question}`
                      }
                    >
                      {copied === question ? (
                        <span className="text-green-600 dark:text-green-400">
                          Copied!
                        </span>
                      ) : (
                        <>
                          <span className="text-foreground">&gt;</span>{" "}
                          {question}
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Alt methods */}
              <Accordion type="single" collapsible>
                <AccordionItem value="alt" className="border-none">
                  <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground py-2 hover:no-underline">
                    More install options
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-1">
                      {altMethods.map((method, i) => (
                        <div
                          key={method.label}
                          className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-2.5 text-sm"
                        >
                          <span className="text-muted-foreground font-medium min-w-[80px]">
                            {method.label}
                          </span>
                          <code className="flex-1 font-mono text-xs truncate text-muted-foreground">
                            {method.command}
                          </code>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 shrink-0"
                            onClick={() =>
                              handleCopy(method.command, `alt-${i}`)
                            }
                            aria-label={
                              copied === `alt-${i}`
                                ? "Copied to clipboard"
                                : `Copy ${method.label} command`
                            }
                            aria-live="polite"
                          >
                            {copied === `alt-${i}` ? (
                              <Check className="h-3.5 w-3.5 text-green-500" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
