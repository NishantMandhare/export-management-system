import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
    title: "Blog — ExportMS",
    description:
        "Practical articles on export operations, container tracking, Incoterms, and scaling your export business.",
};

export default function BlogPage() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Blog
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Practical articles on running a modern export business.
                </p>
            </div>

            <div className="mt-16 space-y-6">
                {blogPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/resources/blog/${post.slug}`}
                        className="block rounded-xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="text-xs text-muted-foreground">
                            {post.date} · {post.author}
                        </div>
                        <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {post.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}