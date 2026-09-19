import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
    title: "Terms of Service — ExportMS",
    description:
        "Read the ExportMS Terms of Service governing your use of our export management platform.",
};

export default function TermsPage() {
    return (
        <LegalPage
            title="Terms of Service"
            lastUpdated="September 18, 2026"
            intro="These Terms of Service ('Terms') govern your access to and use of ExportMS. By using our platform, you agree to be bound by these Terms. This is placeholder text for development purposes and should be reviewed by a legal professional before going live."
            sections={[
                {
                    heading: "1. Acceptance of Terms",
                    body: "By creating an account or using ExportMS, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the platform.",
                },
                {
                    heading: "2. Use of the Platform",
                    body: "You agree to use ExportMS only for lawful purposes related to managing your export business, and not to misuse the platform or attempt to disrupt its operation.",
                },
                {
                    heading: "3. Account Responsibility",
                    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
                },
                {
                    heading: "4. Subscription & Payment",
                    body: "Paid plans are billed on a recurring basis as described on our Pricing page. You may cancel your subscription at any time, effective at the end of the current billing period.",
                },
                {
                    heading: "5. Data Ownership",
                    body: "You retain ownership of all data you enter into ExportMS, including exporter, order, product, and container information.",
                },
                {
                    heading: "6. Limitation of Liability",
                    body: "ExportMS is provided 'as is' without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
                },
                {
                    heading: "7. Termination",
                    body: "We may suspend or terminate your access to ExportMS if you violate these Terms.",
                },
                {
                    heading: "8. Contact Us",
                    body: "If you have questions about these Terms, please contact us at hello@exportms.com.",
                },
            ]}
        />
    );
}