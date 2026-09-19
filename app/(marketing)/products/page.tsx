import type { Metadata } from "next";
import Link from "next/link";
import {
    Building2,
    ClipboardList,
    Container,
    Package,
    BarChart3,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Products — ExportMS",
    description:
        "Explore the ExportMS product suite — Exporter Management, Order Management, Container Tracking, Product Catalog, and Reports — built for export businesses.",
};

const products = [
    {
        icon: Building2,
        title: "Exporter Management",
        tagline: "One home for every exporter relationship.",
        description:
            "Store exporter profiles, documents, and communication history in a single, searchable workspace — no more digging through email threads to find the right file.",
    },
    {
        icon: ClipboardList,
        title: "Order Management",
        tagline: "From confirmation to delivery, fully tracked.",
        description:
            "Create, assign, and follow orders through every stage. Know exactly what's pending, in progress, or delivered — without chasing updates manually.",
    },
    {
        icon: Container,
        title: "Container Tracking",
        tagline: "Know where every shipment stands.",
        description:
            "Track container loading and shipment status in real time, and link containers directly to the orders and exporters they belong to.",
    },
    {
        icon: Package,
        title: "Product Catalog",
        tagline: "A clean, searchable catalog of what you export.",
        description:
            "Maintain accurate product records that plug directly into your orders, so every shipment reflects exactly what was agreed.",
    },
    {
        icon: BarChart3,
        title: "Reports & Insights",
        tagline: "Sales, expenses, and profit — at a glance.",
        description:
            "See your business performance without spreadsheets. Automatic sales, expense, and net profit calculations, always up to date.",
    },
];

export default function ProductsPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    One product suite, built for exporters
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Every part of ExportMS is designed to work together — so your
                    exporters, orders, containers, and reports stay in sync.
                </p>
            </div>

            <div className="mt-16 space-y-6">
                {products.map((product) => (
                    <div
                        key={product.title}
                        className="flex flex-col gap-6 rounded-xl border bg-background p-8 sm:flex-row sm:items-start"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <product.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="mt-1 text-sm font-medium text-primary">
                                {product.tagline}
                            </p>
                            <p className="mt-3 text-muted-foreground">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mx-auto mt-16 max-w-2xl text-center">
                <Button size="lg" asChild>
                    <Link href="/dashboard">
                        See it in action
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}