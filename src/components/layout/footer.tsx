import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/lib/portfolio-data";

const exploreLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-lg font-bold">
              {portfolioData.personalInfo.name}
            </div>
            <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Building full-stack AI applications that integrate large language
              models into production.
            </p>
            <Button asChild className="w-fit rounded-full bg-white text-black hover:bg-white/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Explore</h3>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="size-4" />
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 {portfolioData.personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
