"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources/blog", label: "Resources" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    ExportMS
                </Link>

                {/* Nav Links (desktop) */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA (desktop) */}
                <div className="hidden items-center gap-2 md:flex">
                    <ThemeToggle />
                    <Button variant="ghost" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/dashboard">Get Started</Link>
                    </Button>
                </div>

                {/* Hamburger (mobile) */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden hover:bg-accent hover:text-accent-foreground">
                        <Menu className="h-6 w-6" />
                    </SheetTrigger>
                    <SheetContent side="right" className="w-72">
                        <SheetTitle className="text-left">ExportMS</SheetTitle>
                        <nav className="mt-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Theme</span>
                                    <ThemeToggle />
                                </div>
                                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild onClick={() => setOpen(false)}>
                                    <Link href="/dashboard">Get Started</Link>
                                </Button>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}