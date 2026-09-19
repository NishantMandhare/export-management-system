import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return { title: "Post Not Found — ExportMS" };
    }

    return {
        title: `${post.title} — ExportMS Blog`,
        description: post.excerpt,
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-2xl px-4 py-20">
            <Link
                href="/resources/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
            </Link>

            <div className="mt-8 text-sm text-muted-foreground">
                {post.date} · {post.author}
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                {post.title}
            </h1>

            <div className="mt-8 space-y-6">
                {post.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </article>
    );
}