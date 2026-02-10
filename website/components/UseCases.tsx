import {
  Tablet,
  CreditCard,
  Accessibility,
  Glasses,
  Paintbrush,
  Bell,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: Tablet,
    question: "Building an iPad app?",
    answer:
      "Get guidance on sidebars vs. tab bars, split views, multitasking support, and pointer interactions — all specific to iPadOS conventions.",
    skills: ["Platforms", "Layout", "Inputs"],
  },
  {
    icon: CreditCard,
    question: "Adding Apple Pay?",
    answer:
      "Instant guidance on payment button placement, flow design, error states, and the specific UX patterns Apple requires for approval.",
    skills: ["Technologies", "Patterns"],
  },
  {
    icon: Accessibility,
    question: "Making your app accessible?",
    answer:
      "Know the exact Dynamic Type sizes, contrast ratios, VoiceOver requirements, and accessibility patterns Apple expects.",
    skills: ["Foundations", "Technologies"],
  },
  {
    icon: Glasses,
    question: "Designing for visionOS?",
    answer:
      "Understand ornaments, volumes, immersive spaces, eye tracking, and spatial interaction patterns for Apple Vision Pro.",
    skills: ["Platforms", "Inputs", "Layout"],
  },
  {
    icon: Paintbrush,
    question: "Getting dark mode right?",
    answer:
      "System colors, material backgrounds, elevation, and vibrancy — the full set of rules for a dark mode that feels native.",
    skills: ["Foundations", "Content"],
  },
  {
    icon: Bell,
    question: "Designing notifications?",
    answer:
      "Notification grouping, Live Activities, action buttons, and how to respect user attention without being intrusive.",
    skills: ["System", "Patterns"],
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2
            id="use-cases-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            Ask a question, get the right answer.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real design decisions, grounded in Apple&apos;s guidelines. Your
            agent loads only the specific guidance it needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase) => (
            <Card
              key={useCase.question}
              className="transition-colors hover:bg-accent/50"
            >
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3">
                  <useCase.icon
                    className="h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-lg">{useCase.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mb-4">
                  {useCase.answer}
                </CardDescription>
                <div className="flex flex-wrap gap-1.5">
                  {useCase.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[11px]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
