import { ArrowRight, BookOpen, FileText, Search, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            Your agent loads only what it needs.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A typical question uses ~4,000 tokens — not the 50,000+ that dumping
            the full HIG would cost.
          </p>
        </div>

        {/* Savings callout */}
        <div className="mb-6 rounded-xl border bg-card/50 px-8 py-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-muted-foreground/40 line-through decoration-2">
                50,000+
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Full HIG dump
              </p>
            </div>
            <div className="text-2xl text-muted-foreground">&rarr;</div>
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
          {/* Visual gauge */}
          <div
            className="mt-5 pt-4 border-t border-border/30"
            role="img"
            aria-label="Visual comparison: ~4,000 tokens used out of 50,000, representing 92% savings"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-muted-foreground shrink-0 w-12 text-right">
                50k
              </span>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[8%] rounded-full bg-green-600 dark:bg-green-400" />
              </div>
              <span className="text-[11px] text-muted-foreground shrink-0 w-8">
                4k
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          That means faster responses, lower costs, and room in the context
          window for your agent to focus on your actual code.
        </p>

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

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-3">
            See how efficient it is for yourself.
          </p>
          <Button size="lg" asChild>
            <a href="#install">
              Install now — it&apos;s free
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
