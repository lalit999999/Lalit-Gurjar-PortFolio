import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RetroGridLoader from "@/components/landing/retro-grid-loader";
import { portfolioData } from "@/lib/portfolio-data";
import { IconBrandGithub } from "@tabler/icons-react";

// Featured project id — bump this constant to feature a different project.
const FEATURED_PROJECT_ID = 1;

const stats = [
  {
    label: "Projects Shipped",
    value: portfolioData.projects.length,
  },
  {
    label: "Live Deployments",
    value: portfolioData.projects.filter((p) => p.live !== p.github).length,
  },
  {
    label: "Technologies",
    value: portfolioData.skills.reduce((sum, c) => sum + c.items.length, 0),
  },
  {
    label: "Certifications",
    value: portfolioData.certifications.length,
  },
];

export default function Home() {
  const featuredProject = portfolioData.projects.find(
    (p) => p.id === FEATURED_PROJECT_ID
  )!;
  const heroDescription =
    portfolioData.personalInfo.description.split(".").slice(0, 2).join(".").trim() +
    ".";
  const closingLines =
    "Looking to collaborate on AI-powered applications, backend optimization, and full-stack engineering challenges. Open to opportunities in AI engineering, backend development, and system architecture roles.";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        <RetroGridLoader />
        <Badge variant="outline" className="mb-6">
          Available for opportunities
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-6xl">
          {portfolioData.personalInfo.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {portfolioData.personalInfo.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {heroDescription}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90"
          >
            <Link
              href={portfolioData.personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </section>

      {/* By the numbers */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="items-center text-center">
              <CardContent className="flex flex-col items-center gap-1 py-6">
                <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured project */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Featured Project
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold">
            What I&apos;ve been building
          </h2>
        </div>
        <Card className="mx-auto max-w-3xl">
          <CardContent className="flex flex-col gap-4 py-6">
            <h3 className="font-heading text-xl font-semibold">
              {featuredProject.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub /> Source Code
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={featuredProject.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Link>
              </Button>
              <Button asChild variant="link" size="sm" className="ml-auto">
                <Link href="/projects">View All Projects →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-muted-foreground">{closingLines}</p>
        <div className="mt-8 flex items-center justify-center gap-6">
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="size-6" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
