import { Bot, ExternalLink, GitBranch, Globe, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: Package,
    title: "Portable",
    description:
      "Switch AI tools without rebuilding your setup. Works with Claude Code, Cursor, Copilot, Windsurf, and custom agents.",
  },
  {
    icon: GitBranch,
    title: "Versionable",
    description:
      "Get updates when Apple updates the HIG. Semantic versioning and git-based distribution keep you current.",
  },
  {
    icon: Globe,
    title: "Universal",
    description:
      "One install, every tool. A single format instead of fragmented .cursorrules, CLAUDE.md, and copilot-instructions.md files.",
  },
];

const compatibleAgents = [
  { name: "Claude Code", domain: "claude.ai" },
  { name: "Cursor", domain: "cursor.com" },
  { name: "GitHub Copilot", domain: "github.com" },
  { name: "Windsurf", domain: "windsurf.com" },
  { name: "Custom Agents", domain: null },
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
            Works everywhere. Updates automatically.
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
              Learn about Agent Skills
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
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
          <p className="text-sm text-muted-foreground mb-4">Compatible with</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {compatibleAgents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/40 py-2 px-4 text-sm text-muted-foreground"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background shrink-0">
                  {agent.domain ? (
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${agent.domain}&sz=64`}
                      alt=""
                      width={14}
                      height={14}
                      className="rounded-sm"
                      loading="lazy"
                    />
                  ) : (
                    <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </span>
                {agent.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
