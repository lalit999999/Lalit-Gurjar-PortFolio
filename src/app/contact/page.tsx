import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { portfolioData } from "@/lib/portfolio-data";
import { IconClock, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lalit Gurjar",
};

// NOTE: email and location aren't in portfolio-data.ts — these are inferred
// placeholders (see build spec §9) and should be confirmed/replaced by Lalit.
const inferredEmail = "hello@lalitgurjar.in";
const inferredLocation = "Balotra, Rajasthan, India";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Get in Touch
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-muted-foreground">
          Have a project in mind or just want to say hi? Send a message.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
              <IconClock className="size-5 text-primary" />
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Typically responds within 24 to 48 hours.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <a
                href={`mailto:${inferredEmail}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {inferredEmail}
              </a>
              {portfolioData.socials
                .filter((s) => s.name !== "Blog")
                .map((social) => (
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
              <IconMapPin className="size-5 text-primary" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {inferredLocation}
              <br />
              UTC +5:30 IST
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
