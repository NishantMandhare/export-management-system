import Link from "next/link";
import { ArrowRight, Package, Ship, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBannerSlider } from "@/components/marketing/hero-banner-slider";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Soft background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
            />


            {/* Floating cards (desktop only) */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 hidden lg:block"
            >
                <div className="animate-float absolute top-24 left-[8%] flex items-center gap-3 rounded-xl border bg-background p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Total Orders</div>
                        <div className="font-semibold">128</div>
                    </div>
                </div>

                <div className="animate-float-delayed absolute top-16 right-[10%] flex items-center gap-3 rounded-xl border bg-background p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Ship className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Containers Shipped</div>
                        <div className="font-semibold">42</div>
                    </div>
                </div>

                <div className="animate-float-slow absolute bottom-16 left-[14%] flex items-center gap-3 rounded-xl border bg-background p-4 shadow-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div className="text-sm font-medium">Order #1042 Delivered</div>
                </div>

                <div className="animate-float absolute bottom-24 right-[12%] flex items-center gap-3 rounded-xl border bg-background p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Net Profit</div>
                        <div className="font-semibold text-green-600">+₹48,200</div>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center md:py-32">
                <span className="mb-4 rounded-full border bg-muted px-4 py-1 text-sm text-muted-foreground">
                    Built for growing export businesses
                </span>

                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                    Manage your entire export business,{" "}
                    <span className="text-primary">all in one place</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Track exporters, orders, containers, and products effortlessly.
                    Replace scattered spreadsheets with one simple, powerful system
                    built for global trade.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" asChild>
                        <Link href="/dashboard">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/features">Learn More</Link>
                    </Button>
                </div>
                <HeroBannerSlider />
            </div>
        </section>
    );
}