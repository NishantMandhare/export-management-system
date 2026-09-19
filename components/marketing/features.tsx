import {
    Building2,
    ClipboardList,
    Container,
    Package,
    BarChart3,
    Users,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Exporter Management",
        description:
            "Keep every exporter's profile, documents, and history organized in one place.",
    },
    {
        icon: ClipboardList,
        title: "Order Tracking",
        description:
            "Track every order from confirmation to delivery, with full status visibility.",
    },
    {
        icon: Container,
        title: "Container Tracking",
        description:
            "Monitor container loading, shipment status, and active shipments in real time.",
    },
    {
        icon: Package,
        title: "Product Catalog",
        description:
            "Maintain a clean, searchable catalog of every product you export.",
    },
    {
        icon: BarChart3,
        title: "Sales & Expense Reports",
        description:
            "See total sales, expenses, and net profit at a glance — no spreadsheets needed.",
    },
    {
        icon: Users,
        title: "User Roles & Permissions",
        description:
            "Give your team the right level of access, from view-only to full admin.",
    },
];

export function Features() {
    return (
        <section className="border-t bg-muted/30 py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Everything you need to run your export business
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        One system to replace scattered spreadsheets, WhatsApp messages,
                        and manual tracking.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}