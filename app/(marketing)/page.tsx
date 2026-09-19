import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { CTA } from "@/components/marketing/cta";
import { FAQ } from "@/components/marketing/faq";
import { Stats } from "@/components/marketing/stats";

export const metadata: Metadata = {
    title: "ExportMS — Export Management System",
    description:
        "Manage exporters, orders, containers, and products with ease. A complete export management solution for growing trade businesses.",
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <FAQ />
            <CTA />
        </>
    );
}