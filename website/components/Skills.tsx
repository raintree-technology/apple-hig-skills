"use client";

import React, { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { categories, totalSkills, totalReferences } from "@/lib/skills-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const REPO = "https://github.com/raintree-technology/apple-hig-skills/blob/main";

function refToSlug(ref: string) {
  return ref.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Skills() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const allSkills = categories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.name,
    })),
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2
            id="skills-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            What&apos;s included.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {totalSkills} skills covering {totalReferences} reference topics
            from Apple&apos;s Human Interface Guidelines.
          </p>
        </div>

        <div className="rounded-xl border glass overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="text-base">
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="text-sm uppercase tracking-wider pl-5 pr-2 py-4 w-8" />
                  <TableHead className="text-sm uppercase tracking-wider px-4 py-4">
                    Skill
                  </TableHead>
                  <TableHead className="text-sm uppercase tracking-wider px-4 py-4 hidden sm:table-cell">
                    Category
                  </TableHead>
                  <TableHead className="text-sm uppercase tracking-wider px-4 py-4 hidden md:table-cell">
                    Description
                  </TableHead>
                  <TableHead className="text-sm uppercase tracking-wider px-5 py-4 text-right">
                    Refs
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allSkills.map((skill) => {
                  const isOpen = expanded.has(skill.name);
                  const hasRefs = skill.references.length > 0;
                  return (
                    <React.Fragment key={skill.name}>
                      <TableRow
                        className={`border-border/30 ${hasRefs ? "cursor-pointer" : ""} ${isOpen ? "bg-accent/20" : "hover:bg-accent/30"}`}
                        onClick={() => hasRefs && toggle(skill.name)}
                      >
                        <TableCell className="pl-5 pr-2 py-3.5 w-8">
                          {hasRefs && (
                            <ChevronRight
                              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                            />
                          )}
                        </TableCell>
                        <TableCell className="px-4 py-3.5 font-medium whitespace-nowrap">
                          {skill.displayName}
                        </TableCell>
                        <TableCell className="px-4 py-3.5 text-sm text-muted-foreground whitespace-nowrap hidden sm:table-cell">
                          {skill.category}
                        </TableCell>
                        <TableCell className="px-4 py-3.5 text-sm text-muted-foreground hidden md:table-cell">
                          {skill.description}
                        </TableCell>
                        <TableCell className="px-5 py-3.5 text-right tabular-nums text-muted-foreground">
                          {skill.refCount || "\u2014"}
                        </TableCell>
                      </TableRow>
                      {isOpen && (
                        <tr key={`${skill.name}-refs`}>
                          <td
                            colSpan={5}
                            className="border-b border-border/30 bg-accent/10"
                          >
                            <div className="px-5 py-4 pl-11">
                              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                                Reference files
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5">
                                {skill.references.map((ref) => (
                                  <a
                                    key={ref}
                                    href={`${REPO}/skills/${skill.name}/references/${refToSlug(ref)}.md`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    <FileText className="h-3.5 w-3.5 shrink-0 opacity-50" />
                                    {ref}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
