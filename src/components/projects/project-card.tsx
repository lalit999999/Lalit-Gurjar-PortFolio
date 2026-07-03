import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconExternalLink, IconCode } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import type { portfolioData } from "@/lib/portfolio-data";

type Project = (typeof portfolioData)["projects"][number];

const gradients = [
  "from-cyan-500/40 to-blue-600/40",
  "from-purple-500/40 to-pink-600/40",
  "from-emerald-500/40 to-teal-600/40",
  "from-orange-500/40 to-red-600/40",
  "from-indigo-500/40 to-violet-600/40",
  "from-yellow-500/40 to-orange-600/40",
  "from-blue-500/40 to-cyan-600/40",
];

const MAX_VISIBLE_TAGS = 4;

export function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) {
  const gradient = gradients[project.id % gradients.length];
  const hasLiveDemo = project.live !== project.github;
  const visibleTech = project.tech.slice(0, MAX_VISIBLE_TAGS);
  const overflowCount = project.tech.length - visibleTech.length;

  return (
    <Card className="flex flex-col overflow-hidden">
      {/* NOTE: no `image` field exists on project data yet — this gradient panel
          stands in for a screenshot. Swap for an actual <Image> once one is added. */}
      <div
        className={cn(
          "flex h-28 items-center justify-center bg-gradient-to-br px-4",
          gradient
        )}
      >
        <div className="flex items-center gap-2 text-center font-heading text-sm font-semibold text-white">
          <IconCode className="size-5 shrink-0" />
          {project.title}
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col gap-3 py-4">
        <div className="flex flex-wrap gap-2">
          {featured && <Badge>Featured</Badge>}
        </div>
        <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {visibleTech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
          {overflowCount > 0 && (
            <Badge variant="outline">+{overflowCount}</Badge>
          )}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <Button asChild variant="outline" size="sm">
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <IconBrandGithub /> Source Code
            </Link>
          </Button>
          {hasLiveDemo ? (
            <Button asChild size="sm">
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <IconExternalLink /> Live Demo
              </Link>
            </Button>
          ) : (
            <span className="text-sm text-muted-foreground">Source Only</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
