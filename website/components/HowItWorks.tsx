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
      "Your agent scans 14 skill descriptions to find the right one. Costs ~700 tokens total — barely a rounding error.",
  },
  {
    icon: FileText,
    title: "Activation",
    tokens: "~1,500 tokens",
    description:
      "The matching skill loads its key principles and reference index. Just enough to route to the right answer.",
  },
  {
    icon: Settings,
    title: "Context",
    tokens: "~200 tokens",
    description:
      "Your project context (platform, tech stack, constraints) tailors the guidance to your specific app.",
  },
  {
    icon: BookOpen,
    title: "Deep Reference",
    tokens: "~2,000 tokens",
    description:
      "Only the exact HIG topic you asked about loads. Not the entire guide — just the page you need.",
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
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            Load only what you need.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ~4,000 tokens per question instead of 50,000+ for the full HIG.
            Get the answer without burning your context window.
          </p>
        </div>

        {/* Token comparison chart */}
        <div className="mb-10 rounded-xl border bg-card/50 p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-8 sm:gap-12 mb-6">
            {/* Before: Full HIG */}
            <div className="text-center">
              <div className="relative h-48 sm:h-56 flex items-end justify-center mb-4">
                <div className="w-full max-w-[120px] relative">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-full rounded-t-lg bg-gradient-to-t from-red-500/20 to-red-500/10 border-2 border-red-500/30 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-0 right-0 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
                      50k+
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-semibold">Without HIG Skills</p>
                <p className="text-[13px] text-muted-foreground">Full HIG dump</p>
              </div>
            </div>

            {/* After: Progressive disclosure */}
            <div className="text-center">
              <div className="relative h-48 sm:h-56 flex items-end justify-center mb-4">
                <div className="w-full max-w-[120px] relative">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-[8%] rounded-t-lg bg-gradient-to-t from-green-500/30 to-green-500/20 border-2 border-green-500/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                      ~4k
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-semibold">With HIG Skills</p>
                <p className="text-[13px] text-muted-foreground">Progressive disclosure</p>
              </div>
            </div>
          </div>

          {/* Savings metric */}
          <div className="text-center pt-6 border-t border-border/30">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">
                92%
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Less context</div>
                <div className="text-[13px] text-muted-foreground">46,000 tokens saved</div>
              </div>
            </div>
          </div>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 mt-12">
          {steps.map((step, i) => (
            <li key={i}>
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <step.icon
                        className="h-5 w-5 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[13px] font-medium text-muted-foreground">
                          Step {i + 1}
                        </span>
                        <Badge variant="outline" className="text-[11px] font-mono shrink-0">
                          {step.tokens}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#skills">
              See what&apos;s included
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
