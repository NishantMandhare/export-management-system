import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Export Guides — ExportMS",
    description:
        "Practical guides to help you navigate export documentation, container shipping, pricing, and compliance for your export business.",
};

const guides = [
    {
        title: "A Beginner's Guide to Export Documentation",
        description:
            "Understand the key documents every export shipment needs — from invoices to bills of lading — and why they matter.",
    },
    {
        title: "How to Choose Between FCL and LCL Shipping",
        description:
            "A practical comparison of full container load and less-than-container load shipping, and when to use each.",
    },
    {
        title: "Pricing Your Products for Export",
        description:
            "Learn how to factor in freight, duties, and margins when setting export prices for international buyers.",
    },
    {
        title: "Staying Compliant with Trade Regulations",
        description:
            "An overview of common compliance requirements exporters should be aware of before shipping internationally.",
    },
    {
        title: "Managing Multiple Exporters Without Losing Track",
        description:
            "Practical tips for keeping exporter relationships, documents, and communication organized as your business grows.",
    },
    {
        title: "Reading a Letter of Credit: A Practical Walkthrough",
        description:
            "Break down the key sections of a Letter of Credit so you know exactly what you're agreeing to before you ship.",
    },
];

export default function ExportGuidesPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Export Guides
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Practical, no-fluff guides to help you navigate the export process
                    with confidence.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {guides.map((guide) => (
                    <div
                        key={guide.title}
                        className="flex gap-4 rounded-xl border bg-background p-6 shadow-sm"
                    >
                        <FileText className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                            <h3 className="font-semibold">{guide.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {guide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}