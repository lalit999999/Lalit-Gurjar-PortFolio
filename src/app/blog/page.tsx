import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/blog-posts";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Lalit Gurjar",
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Writing
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-muted-foreground">
          Notes on full-stack development, published on Hashnode.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {blogPosts.map((post) => (
          <Link key={post.url} href={post.url} target="_blank" rel="noopener noreferrer">
            <Card className="transition-colors hover:bg-muted/50">
              <CardContent className="flex flex-col gap-2 py-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold">
                    {post.title}
                  </h3>
                  <IconArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline">{post.publication}</Badge>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
