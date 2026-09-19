import type { Metadata } from "next";
import { Target, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us — ExportMS",
    description:
        "Learn about ExportMS's mission to help export businesses replace spreadsheets and manual tracking with one simple, powerful system.",
};

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description:
            "To give every export business — big or small — the tools to run their operations with the same clarity and control as an enterprise.",
    },
    {
        icon: Heart,
        title: "Built for Exporters",
        description:
            "We work closely with real export businesses to understand their daily workflow, not just build features in isolation.",
    },
    {
        icon: Zap,
        title: "Simple by Design",
        description:
            "Powerful doesn't have to mean complicated. Every feature in ExportMS is designed to be intuitive from day one.",
    },
];

export default function AboutPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    About ExportMS
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    We&apos;re building the operating system for modern export
                    businesses — replacing spreadsheets and scattered messages with one
                    simple, powerful platform.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {values.map((value) => (
                    <div
                        key={value.title}
                        className="rounded-xl border bg-background p-6 shadow-sm"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-auto mt-20 max-w-3xl rounded-2xl border bg-muted/30 p-8 text-center md:p-12">
                <h2 className="text-2xl font-bold tracking-tight">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                    ExportMS started with a simple observation: most export businesses
                    were still running on a patchwork of spreadsheets, WhatsApp
                    messages, and manual follow-ups to track exporters, orders, and
                    shipments. We set out to build a single, purpose-built system that
                    brings all of that together — so teams can spend less time
                    tracking, and more time growing.
                </p>
            </div>
        </section>
    );
}