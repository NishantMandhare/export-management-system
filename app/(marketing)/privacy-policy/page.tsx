import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
    title: "Privacy Policy — ExportMS",
    description:
        "Read the ExportMS Privacy Policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            lastUpdated="September 18, 2026"
            intro="This Privacy Policy explains how ExportMS ('we', 'us', or 'our') collects, uses, and protects your information when you use our export management platform. Please note: this is placeholder text for development purposes and should be reviewed by a legal professional before going live."
            sections={[
                {
                    heading: "1. Information We Collect",
                    body: "We collect information you provide directly to us, such as your name, email address, company details, and any data you enter into the platform related to exporters, orders, products, and containers.",
                },
                {
                    heading: "2. How We Use Your Information",
                    body: "We use the information we collect to provide, maintain, and improve ExportMS, to communicate with you about your account, and to ensure the security of our platform.",
                },
                {
                    heading: "3. Data Sharing",
                    body: "We do not sell your personal information. We may share data with trusted service providers who help us operate the platform, subject to confidentiality obligations.",
                },
                {
                    heading: "4. Data Security",
                    body: "We implement reasonable technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure.",
                },
                {
                    heading: "5. Your Rights",
                    body: "You may request access to, correction of, or deletion of your personal data by contacting us at hello@exportms.com.",
                },
                {
                    heading: "6. Changes to This Policy",
                    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page.",
                },
                {
                    heading: "7. Contact Us",
                    body: "If you have questions about this Privacy Policy, please contact us at hello@exportms.com.",
                },
            ]}
        />
    );
}