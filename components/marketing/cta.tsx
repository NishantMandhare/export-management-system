import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-24">
                <div className="rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to simplify your export business?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                        Join growing export businesses that have replaced spreadsheets
                        with ExportMS. Set up your workspace in minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/dashboard">
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                            asChild
                        >
                            <Link href="/contact">Talk to Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}