import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
    title: "Disclaimer — ExportMS",
    description:
        "Read the ExportMS disclaimer regarding the use of information and services provided on our platform.",
};

export default function DisclaimerPage() {
    return (
        <LegalPage
            title="Disclaimer"
            lastUpdated="September 18, 2026"
            intro="The information and services provided by ExportMS are for general business management purposes. This is placeholder text for development purposes and should be reviewed by a legal professional before going live."
            sections={[
                {
                    heading: "1. No Professional Advice",
                    body: "ExportMS is a business management tool and does not provide legal, financial, customs, or trade-compliance advice. Consult qualified professionals for guidance specific to your export operations.",
                },
                {
                    heading: "2. Accuracy of Information",
                    body: "While we strive to keep the platform accurate and up to date, we make no guarantees about the completeness or reliability of any data, reports, or content generated through ExportMS.",
                },
                {
                    heading: "3. Third-Party Links",
                    body: "Our website may contain links to third-party websites. We are not responsible for the content or practices of any linked third-party sites.",
                },
                {
                    heading: "4. Limitation of Liability",
                    body: "ExportMS shall not be held liable for any losses or damages arising from decisions made based on information within the platform.",
                },
                {
                    heading: "5. Contact Us",
                    body: "If you have questions about this Disclaimer, please contact us at hello@exportms.com.",
                },
            ]}
        />
    );
}