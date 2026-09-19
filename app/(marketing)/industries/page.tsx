import type { Metadata } from "next";
import {
    Shirt,
    Wheat,
    Cpu,
    Pill,
    Gem,
    Hammer,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Industries — ExportMS",
    description:
        "ExportMS supports export businesses across textiles, agriculture, electronics, pharmaceuticals, and more industries.",
};

const industries = [
    {
        icon: Shirt,
        title: "Textiles & Apparel",
        description:
            "Manage fabric and garment exporters, track bulk orders, and monitor container shipments across seasons and buyers.",
    },
    {
        icon: Wheat,
        title: "Agriculture & Food",
        description:
            "Track perishable-sensitive orders, coordinate with multiple exporters, and stay on top of container timelines.",
    },
    {
        icon: Cpu,
        title: "Electronics",
        description:
            "Keep detailed product catalogs, track high-value orders, and maintain visibility across complex supply chains.",
    },
    {
        icon: Pill,
        title: "Pharmaceuticals",
        description:
            "Maintain organized records for regulated products, with clear order and shipment tracking for compliance needs.",
    },
    {
        icon: Gem,
        title: "Handicrafts & Jewelry",
        description:
            "Manage smaller-batch, high-value orders with detailed exporter and product records in one place.",
    },
    {
        icon: Hammer,
        title: "Industrial Goods",
        description:
            "Track heavy or bulk shipments, manage multiple exporters, and keep sales and expenses under control.",
    },
];

export default function IndustriesPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Trusted across industries
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    ExportMS adapts to the way different export industries actually
                    work — not a one-size-fits-all tool.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {industries.map((industry) => (
                    <div
                        key={industry.title}
                        className="rounded-xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <industry.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{industry.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {industry.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}