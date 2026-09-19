import type { Metadata } from "next";
import { Lock, ShieldCheck, KeyRound, Server, Eye, FileCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Security — ExportMS",
    description:
        "Learn how ExportMS protects your export business data with secure authentication, role-based access, and industry-standard practices.",
};

const securityPoints = [
    {
        icon: Lock,
        title: "Encrypted Data",
        description:
            "All data is encrypted in transit using industry-standard protocols, protecting your information as it moves between your device and our servers.",
    },
    {
        icon: KeyRound,
        title: "Secure Authentication",
        description:
            "Accounts are protected with secure, session-based authentication to keep unauthorized users out of your workspace.",
    },
    {
        icon: ShieldCheck,
        title: "Role-Based Access",
        description:
            "Every team member only sees what they're permitted to — from view-only access to full admin control, defined by you.",
    },
    {
        icon: Server,
        title: "Reliable Infrastructure",
        description:
            "ExportMS runs on modern, reliable infrastructure designed for uptime and consistent performance.",
    },
    {
        icon: Eye,
        title: "Activity Visibility",
        description:
            "Track key actions across exporters, orders, and containers, so you always have visibility into what's changed.",
    },
    {
        icon: FileCheck,
        title: "Data Ownership",
        description:
            "Your data belongs to you. We never sell your information, and you can request export or deletion at any time.",
    },
];

export default function SecurityPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Security you can trust
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Your export business data is sensitive. We take its protection
                    seriously, at every layer of ExportMS.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {securityPoints.map((point) => (
                    <div
                        key={point.title}
                        className="rounded-xl border bg-background p-6 shadow-sm"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <point.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {point.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-auto mt-16 max-w-2xl rounded-2xl border bg-muted/30 p-8 text-center">
                <h2 className="text-xl font-semibold">Have a security question?</h2>
                <p className="mt-2 text-muted-foreground">
                    Reach out to our team at{" "}
                    <a href="mailto:hello@exportms.com" className="text-primary underline">
                        hello@exportms.com
                    </a>{" "}
                    — we&apos;re happy to answer any questions about how we protect
                    your data.
                </p>
            </div>
        </section>
    );
}