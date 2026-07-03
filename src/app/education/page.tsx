import { TimelineCard } from "@/components/shared/timeline-card";
import { portfolioData } from "@/lib/portfolio-data";
import { IconSchool } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Lalit Gurjar",
};

export default function EducationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Academic Background
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold">Education</h1>
        <p className="mt-4 text-muted-foreground">
          My academic journey so far.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {portfolioData.education.map((edu) => (
          <TimelineCard
            key={edu.id}
            icon={IconSchool}
            title={edu.title}
            subtitle={edu.institution}
            meta={"board" in edu ? edu.board : undefined}
            period={edu.year}
          />
        ))}
      </div>
    </div>
  );
}
