import type { Metadata } from "next";
import {
    Building2,
    ClipboardList,
    Container,
    Package,
    BarChart3,
    Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Features — ExportMS",
    description:
        "Explore ExportMS features: exporter management, order tracking, container tracking, product catalog, reports, and user roles — all in one platform.",
};

const features = [
    {
        icon: Building2,
        title: "Exporter Management",
        description:
            "Keep every exporter's profile, documents, and history organized in one searchable place — no more digging through email threads.",
        points: [
            "Centralized exporter profiles",
            "Document storage per exporter",
            "Full activity history",
        ],
    },
    {
        icon: ClipboardList,
        title: "Order Tracking",
        description:
            "Track every order from confirmation to delivery, with full status visibility for you and your team.",
        points: [
            "Real-time order status",
            "Order-to-container linking",
            "Automatic status updates",
        ],
    },
    {
        icon: Container,
        title: "Container Tracking",
        description:
            "Monitor container loading, shipment status, and active shipments — know exactly where every container stands.",
        points: [
            "Active container dashboard",
            "Loading & shipment status",
            "Container-to-order mapping",
        ],
    },
    {
        icon: Package,
        title: "Product Catalog",
        description:
            "Maintain a clean, searchable catalog of every product you export, ready to attach to any order.",
        points: [
            "Searchable product database",
            "Quick add to orders",
            "Product-level history",
        ],
    },
    {
        icon: BarChart3,
        title: "Sales & Expense Reports",
        description:
            "See total sales, expenses, and net profit at a glance — no spreadsheets, no manual calculations.",
        points: [
            "Automatic profit calculation",
            "Sales & expense breakdown",
            "At-a-glance dashboard stats",
        ],
    },
    {
        icon: Users,
        title: "User Roles & Permissions",
        description:
            "Give your team the right level of access, from view-only to full admin, so everyone sees exactly what they need.",
        points: [
            "Role-based access control",
            "Admin & team member roles",
            "Secure, permission-based views",
        ],
    },
];

export default function FeaturesPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Everything you need, in one platform
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    ExportMS brings every part of your export workflow together — so
                    you can stop switching between spreadsheets and start growing.
                </p>
            </div>

            <div className="mt-20 space-y-20">
                {features.map((feature, index) => (
                    <div
                        key={feature.title}
                        className={cn(
                            "grid grid-cols-1 items-center gap-10 md:grid-cols-2",
                            index % 2 === 1 && "md:[&>*:first-child]:order-2"
                        )}
                    >
                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="mt-4 text-2xl font-semibold">{feature.title}</h2>
                            <p className="mt-3 text-muted-foreground">
                                {feature.description}
                            </p>
                            <ul className="mt-4 space-y-2">
                                {feature.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-center gap-2 text-sm text-muted-foreground"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Placeholder visual */}
                        <div className="flex aspect-video items-center justify-center rounded-xl border bg-muted/30">
                            <feature.icon className="h-16 w-16 text-muted-foreground/30" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}