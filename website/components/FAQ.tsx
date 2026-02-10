"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "I'm a designer with no terminal experience. Can I use this?",
    a: "Yes. Copy-paste one line into a terminal and you're done. No configuration, no build steps. If you get stuck, open an issue and we'll help.",
  },
  {
    q: "Will this work with my AI tool?",
    a: "If your tool reads files, it works. Claude Code, Cursor, Copilot, Windsurf, and custom agents are all supported. No plugins needed.",
  },
  {
    q: "What happens when Apple updates the HIG?",
    a: "We publish a new version. Run git pull to get it, or sign up for email notifications. Zero maintenance on your end.",
  },
  {
    q: "Is this official from Apple?",
    a: "No. It's a community project based on Apple's official Human Interface Guidelines. Apple doesn't endorse or maintain it.",
  },
  {
    q: "How much context does this use?",
    a: "~4,000 tokens per question instead of 50,000+ for the full HIG. Your agent only loads the specific reference file it needs.",
  },
  {
    q: "Does this cover visionOS, watchOS, and macOS?",
    a: "All five Apple platforms: iOS, iPadOS, macOS, watchOS, and visionOS. Each skill gives platform-specific answers, not generic advice.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            Common questions.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, i) => (
            <AccordionItem key={i} value={`q-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
