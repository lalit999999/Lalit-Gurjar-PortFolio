"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/projects/project-card";

const FEATURED_PROJECT_ID = 1;

const allTech = Array.from(
  new Set(portfolioData.projects.flatMap((p) => p.tech))
).sort();

export function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return portfolioData.projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      const matchesTech = !activeTech || p.tech.includes(activeTech);
      return matchesQuery && matchesTech;
    });
  }, [query, activeTech]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Search projects by title, description, or tech..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-11"
        />
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setActiveTech(null)}>
            <Badge
              variant={activeTech === null ? "default" : "outline"}
              className={cn("cursor-pointer px-3 py-1")}
            >
              All
            </Badge>
          </button>
          {allTech.map((tech) => (
            <button key={tech} type="button" onClick={() => setActiveTech(tech)}>
              <Badge
                variant={activeTech === tech ? "default" : "outline"}
                className="cursor-pointer px-3 py-1"
              >
                {tech}
              </Badge>
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {filtered.length} project{filtered.length === 1 ? "" : "s"} found
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={project.id === FEATURED_PROJECT_ID}
          />
        ))}
      </div>
    </div>
  );
}
