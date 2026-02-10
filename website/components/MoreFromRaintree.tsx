import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    name: "DocPull",
    description:
      "Turn any documentation site into clean Markdown. Built for AI agents, RAG pipelines, and developer workflows.",
    url: "https://docpull.raintree.technology",
  },
  {
    name: "Claude Starter",
    description:
      "Production-ready configs and best practices for Claude Code. CLAUDE.md templates, tool permissions, and workflow patterns.",
    url: "https://github.com/raintree-technology/claude-starter",
  },
];

export default function MoreFromRaintree() {
  return (
    <section aria-labelledby="more-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 gap-1.5 text-xs">
            Raintree Technology
          </Badge>
          <h2
            id="more-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3"
          >
            More developer tools from Raintree
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open source projects for developers working with AI agents and Apple
            platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full transition-colors hover:border-foreground/20">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    {project.name}
                    <ExternalLink
                      className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href="https://raintree.technology"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            See all projects
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
