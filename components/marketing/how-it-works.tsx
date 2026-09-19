import { UserPlus, Building2, ClipboardList, BarChart3 } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: UserPlus,
        title: "Sign Up",
        description:
            "Create your account and set up your export business workspace in minutes.",
    },
    {
        number: "02",
        icon: Building2,
        title: "Add Exporters & Products",
        description:
            "Bring in your exporters, buyers, and product catalog — all organized in one place.",
    },
    {
        number: "03",
        icon: ClipboardList,
        title: "Create & Track Orders",
        description:
            "Raise orders, assign containers, and follow every shipment from start to finish.",
    },
    {
        number: "04",
        icon: BarChart3,
        title: "Monitor & Grow",
        description:
            "See sales, expenses, and profit at a glance — and make faster, smarter decisions.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        How it works
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From sign-up to shipment, ExportMS keeps your whole workflow in
                        one place.
                    </p>
                </div>

                <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Connecting line (desktop only) */}
                    <div
                        aria-hidden
                        className="absolute top-6 left-0 hidden h-px w-full bg-border lg:block"
                    />

                    {steps.map((step) => (
                        <div key={step.number} className="relative flex flex-col items-center text-center">
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <span className="mt-4 text-sm font-semibold text-muted-foreground">
                                STEP {step.number}
                            </span>
                            <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}