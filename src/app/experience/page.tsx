import { TimelineCard } from "@/components/shared/timeline-card";
import { experienceData } from "@/lib/experience-data";
import { IconBriefcase } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Lalit Gurjar",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Career So Far
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold">Experience</h1>
        <p className="mt-4 text-muted-foreground">
          Roles and contributions along the way.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experienceData.map((exp) => (
          <TimelineCard
            key={exp.id}
            icon={IconBriefcase}
            title={exp.title}
            subtitle={exp.institution}
            meta={exp.location}
            period={exp.year}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </div>
  );
}
