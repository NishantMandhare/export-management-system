import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
    title: "Contact Us — ExportMS",
    description:
        "Get in touch with the ExportMS team. We're happy to answer questions about features, pricing, or setting up your export business workspace.",
};

const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@exportms.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: MapPin, label: "Office", value: "Mumbai, Maharashtra, India" },
];

export default function ContactPage() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Get in touch
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Have a question about ExportMS? Fill out the form and our team will
                    get back to you shortly.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-5">
                {/* Contact form */}
                <form className="space-y-6 md:col-span-3">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your export business" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="How can we help you?"
                            required
                            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        />
                    </div>

                    <Button type="submit" size="lg">
                        Send Message
                    </Button>
                </form>

                {/* Contact info */}
                <div className="space-y-6 md:col-span-2">
                    {contactInfo.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <div className="text-sm font-medium">{item.label}</div>
                                <div className="text-sm text-muted-foreground">
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}