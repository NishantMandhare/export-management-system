import type { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "Case Studies — ExportMS",
    description:
        "See how export businesses across textiles, agriculture, and electronics use ExportMS to streamline exporters, orders, and shipments.",
};

const caseStudies = [
    {
        company: "Sundar Textiles",
        industry: "Textiles & Apparel",
        result: "40% faster order turnaround",
        quote:
            "We went from tracking orders across three different spreadsheets to having everything in one dashboard. Our team saves hours every week.",
        person: "Operations Head, Sundar Textiles",
    },
    {
        company: "Greenfield Agro Exports",
        industry: "Agriculture & Food",
        result: "Zero missed shipment deadlines in 6 months",
        quote:
            "Container tracking alone was worth switching to ExportMS. We finally know exactly where every shipment stands, every day.",
        person: "Founder, Greenfield Agro Exports",
    },
    {
        company: "Nova Electro Traders",
        industry: "Electronics",
        result: "3x more orders managed with the same team size",
        quote:
            "ExportMS scaled with us. What used to take a full-time coordinator now takes a fraction of the time.",
        person: "Managing Director, Nova Electro Traders",
    },
];

export default function CaseStudiesPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Trusted by export businesses
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    See how teams across industries use ExportMS to run their export
                    operations more efficiently.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {caseStudies.map((study) => (
                    <div
                        key={study.company}
                        className="flex flex-col rounded-xl border bg-background p-6 shadow-sm"
                    >
                        <Quote className="h-8 w-8 text-primary/30" />
                        <p className="mt-4 flex-1 text-sm text-muted-foreground">
                            &ldquo;{study.quote}&rdquo;
                        </p>
                        <div className="mt-6 border-t pt-4">
                            <div className="text-sm font-semibold">{study.company}</div>
                            <div className="text-xs text-muted-foreground">
                                {study.industry}
                            </div>
                            <div className="mt-2 text-sm font-medium text-primary">
                                {study.result}
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                                — {study.person}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}