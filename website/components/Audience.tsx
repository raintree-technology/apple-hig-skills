import { Code2, Palette, Building2, Bot } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const audiences = [
  {
    icon: Code2,
    title: "Indie iOS developers",
    description:
      "Ship faster with design decisions handled. Ask your AI agent instead of searching through hundreds of HIG pages.",
  },
  {
    icon: Palette,
    title: "Design teams using AI tools",
    description:
      "Give Claude, Cursor, or Copilot the same HIG knowledge your senior designers have. Consistent guidance across your team.",
  },
  {
    icon: Building2,
    title: "Agencies and consultancies",
    description:
      "Deliver Apple-quality design advice to clients without memorizing every guideline. Your AI becomes your HIG reference.",
  },
  {
    icon: Bot,
    title: "Teams building AI features",
    description:
      "Need your AI-generated UI to feel native? These skills ensure your agent knows what Apple expects.",
  },
];

export default function Audience() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2
            id="audience-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            Built for how you work.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re a solo developer or a full team, these skills
            meet you where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {audiences.map((audience) => (
            <Card
              key={audience.title}
              className="transition-colors hover:bg-accent/50"
            >
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-2">
                  <audience.icon
                    className="h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-base">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {audience.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
