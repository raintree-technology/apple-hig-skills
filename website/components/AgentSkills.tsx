import { ExternalLink, GitBranch, Package, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: Package,
    title: "Portable",
    description:
      "Works with any AI agent that reads files — Claude Code, Cursor, Copilot, Windsurf, and custom agents.",
  },
  {
    icon: GitBranch,
    title: "Versionable",
    description:
      "Semantic versioning, update checking, and git-based distribution. Install via clone, submodule, or the CLI.",
  },
  {
    icon: Globe,
    title: "Universal",
    description:
      "One format instead of fragmented .cursorrules, CLAUDE.md, and copilot-instructions.md files.",
  },
];

const compatibleAgents = [
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "Windsurf",
  "Custom Agents",
];

export default function AgentSkills() {
  return (
    <section
      id="agent-skills"
      aria-labelledby="agent-skills-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 gap-1.5 text-xs">
            Open Standard
          </Badge>
          <h2
            id="agent-skills-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            Built on Agent Skills.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Agent Skills is a universal spec for packaging reusable knowledge
            for AI agents. Think of it as plugins for AI — but instead of code
            libraries, they package expertise.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://agentskills.io/specification"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the specification
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-2">
                  <feature.icon
                    className="h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="mb-12" />

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Compatible with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {compatibleAgents.map((agent) => (
              <Badge key={agent} variant="secondary" className="text-sm py-1.5 px-3">
                {agent}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
