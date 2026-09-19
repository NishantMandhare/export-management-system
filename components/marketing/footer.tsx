import Link from "next/link";

const footerLinks = {
    Company: [
        { href: "/about", label: "About" },
        { href: "/features", label: "Features" },
        { href: "/solutions", label: "Solutions" },
        { href: "/industries", label: "Industries" },
        { href: "/pricing", label: "Pricing" },
    ],
    Resources: [
        { href: "/resources/blog", label: "Blog" },
        { href: "/resources/export-guides", label: "Export Guides" },
        { href: "/resources/faq", label: "FAQ" },
        { href: "/resources/glossary", label: "Glossary" },
        { href: "/case-studies", label: "Case Studies" },
    ],
    Legal: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookie-policy", label: "Cookie Policy" },
        { href: "/disclaimer", label: "Disclaimer" },
        { href: "/security", label: "Security" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Logo + description */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-xl font-bold">
                            ExportMS
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Manage exporters, orders, containers, and products with ease.
                        </p>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold">{title}</h3>
                            <ul className="mt-4 space-y-2">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} ExportMS. All rights reserved.
                </div>
            </div>
        </footer>
    );
}