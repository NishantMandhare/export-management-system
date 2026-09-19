import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Pricing — ExportMS",
    description:
        "Simple, transparent pricing for export businesses of every size. Choose the ExportMS plan that fits your team.",
};

const plans = [
    {
        name: "Starter",
        price: "₹999",
        period: "/month",
        description: "For small export businesses just getting organized.",
        features: [
            "Up to 3 team members",
            "Up to 50 orders/month",
            "Exporter & product management",
            "Basic reports",
            "Email support",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Professional",
        price: "₹2,499",
        period: "/month",
        description: "For growing teams managing high order volumes.",
        features: [
            "Up to 15 team members",
            "Unlimited orders",
            "Container tracking",
            "Advanced sales & expense reports",
            "Priority support",
            "Role-based permissions",
        ],
        cta: "Get Started",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large export operations with custom needs.",
        features: [
            "Unlimited team members",
            "Unlimited orders",
            "Dedicated account manager",
            "Custom integrations",
            "SLA-backed support",
            "Onboarding assistance",
        ],
        cta: "Talk to Sales",
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Simple, transparent pricing
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Choose the plan that fits your export business. No hidden fees.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={cn(
                            "flex flex-col rounded-2xl border p-8",
                            plan.highlighted
                                ? "border-primary bg-primary/5 shadow-lg"
                                : "bg-background"
                        )}
                    >
                        {plan.highlighted && (
                            <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {plan.description}
                        </p>

                        <div className="mt-6 flex items-baseline gap-1">
                            <span className="text-4xl font-bold tracking-tight">
                                {plan.price}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                {plan.period}
                            </span>
                        </div>

                        <Button
                            className="mt-6"
                            variant={plan.highlighted ? "default" : "outline"}
                            asChild
                        >
                            <Link href={plan.cta === "Talk to Sales" ? "/contact" : "/dashboard"}>
                                {plan.cta}
                            </Link>
                        </Button>

                        <ul className="mt-8 space-y-3">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}