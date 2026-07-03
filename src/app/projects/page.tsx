import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Lalit Gurjar",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Portfolio
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-muted-foreground">
          A collection of full-stack apps, real-time systems, and AI-powered tools.
        </p>
      </div>

      <ProjectsExplorer />
    </div>
  );
}
