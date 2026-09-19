import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
    title: "Cookie Policy — ExportMS",
    description:
        "Learn how ExportMS uses cookies and similar technologies on our website and platform.",
};

export default function CookiePolicyPage() {
    return (
        <LegalPage
            title="Cookie Policy"
            lastUpdated="September 18, 2026"
            intro="This Cookie Policy explains how ExportMS uses cookies and similar technologies to recognize you when you visit our website and platform. This is placeholder text for development purposes and should be reviewed by a legal professional before going live."
            sections={[
                {
                    heading: "1. What Are Cookies",
                    body: "Cookies are small text files placed on your device that help websites remember information about your visit, such as your preferred settings and login state.",
                },
                {
                    heading: "2. How We Use Cookies",
                    body: "We use cookies to keep you signed in, remember your preferences (such as light/dark theme), and understand how our platform is used so we can improve it.",
                },
                {
                    heading: "3. Types of Cookies We Use",
                    body: "Essential cookies: required for core functionality like authentication.\nPreference cookies: remember settings such as theme.\nAnalytics cookies: help us understand usage patterns (if enabled).",
                },
                {
                    heading: "4. Managing Cookies",
                    body: "Most browsers allow you to control cookies through their settings. Disabling essential cookies may affect the functionality of ExportMS.",
                },
                {
                    heading: "5. Contact Us",
                    body: "If you have questions about this Cookie Policy, please contact us at hello@exportms.com.",
                },
            ]}
        />
    );
}