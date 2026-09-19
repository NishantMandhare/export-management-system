import type { Metadata } from "next";
import { Globe2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Global Markets — ExportMS",
    description:
        "ExportMS helps export businesses manage shipments and buyers across major global markets, from North America to Asia and beyond.",
};

const regions = [
    {
        name: "North America",
        countries: ["United States", "Canada", "Mexico"],
    },
    {
        name: "Europe",
        countries: ["Germany", "United Kingdom", "France", "Netherlands", "Italy"],
    },
    {
        name: "Middle East",
        countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
    },
    {
        name: "Asia Pacific",
        countries: ["Japan", "South Korea", "Singapore", "Australia", "Vietnam"],
    },
    {
        name: "Africa",
        countries: ["South Africa", "Egypt", "Nigeria", "Kenya"],
    },
    {
        name: "South America",
        countries: ["Brazil", "Argentina", "Chile", "Colombia"],
    },
];

export default function GlobalMarketsPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <Globe2 className="mx-auto h-10 w-10 text-primary" />
                <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                    Manage exports to markets worldwide
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Wherever your buyers are, ExportMS helps you keep every order,
                    exporter, and shipment organized across regions.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {regions.map((region) => (
                    <div
                        key={region.name}
                        className="rounded-xl border bg-background p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold">{region.name}</h3>
                        <ul className="mt-4 space-y-2">
                            {region.countries.map((country) => (
                                <li
                                    key={country}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {country}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}