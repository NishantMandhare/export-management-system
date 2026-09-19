import type { Metadata } from "next";
import Link from "next/link";
import { Store, Factory, Ship, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions — ExportMS",
  description:
    "ExportMS solutions for small exporters, manufacturers, and trading companies — tailored to how your export business actually works.",
};

const solutions = [
  {
    icon: Store,
    title: "For Small Exporters",
    description:
      "Just starting out or still running on spreadsheets? Get organized fast — manage exporters, orders, and products without extra overhead.",
    points: [
      "Simple setup, no training needed",
      "Track your first orders in minutes",
      "Affordable Starter plan",
    ],
  },
  {
    icon: Factory,
    title: "For Manufacturers",
    description:
      "Connect your production and export workflow — link products directly to orders and track everything from factory to shipment.",
    points: [
      "Product catalog tied to orders",
      "Container-level shipment tracking",
      "Sales & expense visibility",
    ],
  },
  {
    icon: Ship,
    title: "For Trading Companies",
    description:
      "Manage multiple exporters, buyers, and high order volumes without losing track of a single shipment.",
    points: [
      "Unlimited orders on Professional+",
      "Multi-exporter management",
      "Role-based access for larger teams",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Built for how you export
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Whatever shape your export business takes, ExportMS adapts to your
          workflow — not the other way around.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="flex flex-col rounded-xl border bg-background p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <solution.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {solution.description}
            </p>
            <ul className="mt-4 space-y-2">
              {solution.points.map((point) => (
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
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-2xl text-center">
        <Button size="lg" asChild>
          <Link href="/contact">
            Not sure which fits? Talk to us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}