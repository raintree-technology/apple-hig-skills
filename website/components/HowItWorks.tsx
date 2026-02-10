import { Search, FileText, Settings, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    tokens: "~50 tokens",
    description:
      "The agent reads skill names and descriptions to find the right guidance. With 14 skills, this costs only ~700 tokens.",
  },
  {
    icon: FileText,
    title: "Activation",
    tokens: "~1,500 tokens",
    description:
      "The matching SKILL.md loads with key principles, reference index, and output format — just the routing layer.",
  },
  {
    icon: Settings,
    title: "Context",
    tokens: "~200 tokens",
    description:
      "Checks your project context for platform, tech stack, and constraints to tailor advice to your specific app.",
  },
  {
    icon: BookOpen,
    title: "Deep Reference",
    tokens: "~2,000 tokens",
    description:
      "Only the exact HIG topic you asked about loads on demand. Not the entire guide — just what's relevant.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <h2
            id="how-it-works-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            Skip the noise.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your agent loads only the specific guidance it needs. A typical
            question uses ~4,000 tokens — not the 50,000+ that dumping the
            full HIG would cost.
          </p>
        </div>

        {/* Savings callout */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-16">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-muted-foreground/40 line-through decoration-2">
              50,000+
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Full HIG dump
            </p>
          </div>
          <div className="text-2xl text-muted-foreground">
            &rarr;
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
              ~4,000
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              With progressive disclosure
            </p>
          </div>
          <div className="text-center pl-4 sm:pl-6 border-l">
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-green-600 dark:text-green-400">
              92%
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Less context used
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
          {steps.map((step, i) => (
            <li key={i}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <step.icon
                          className="h-4 w-4 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Step {i + 1}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono">
                      {step.tokens}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
