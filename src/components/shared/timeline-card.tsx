import { Card, CardContent } from "@/components/ui/card";

interface TimelineCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  meta?: string;
  period: string;
  bullets?: string[];
}

export function TimelineCard({
  icon: Icon,
  title,
  subtitle,
  meta,
  period,
  bullets,
}: TimelineCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 py-6 sm:flex-row sm:gap-5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="size-6" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-heading text-lg font-semibold">{title}</h3>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {subtitle}
            {meta ? ` · ${meta}` : ""}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
