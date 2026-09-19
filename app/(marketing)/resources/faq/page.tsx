import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "FAQ — ExportMS",
    description:
        "Frequently asked questions about ExportMS — features, pricing, security, and getting started with your export business.",
};

const faqCategories = [
    {
        category: "Getting Started",
        faqs: [
            {
                question: "What is ExportMS?",
                answer:
                    "ExportMS is an all-in-one export management system that helps you track exporters, orders, containers, and products, while keeping your sales and expenses in one place.",
            },
            {
                question: "How do I get started?",
                answer:
                    "Sign up for an account from the Get Started button, set up your workspace, and start adding your exporters and products. Most teams are up and running within a day.",
            },
            {
                question: "Do I need any technical knowledge to use it?",
                answer:
                    "No. ExportMS is designed to be simple and intuitive, so you can start managing your exports without any technical setup.",
            },
        ],
    },
    {
        category: "Pricing & Plans",
        faqs: [
            {
                question: "Can I change plans later?",
                answer:
                    "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.",
            },
            {
                question: "Is there a free trial?",
                answer:
                    "Contact our sales team to discuss trial options for your business size and needs.",
            },
        ],
    },
    {
        category: "Team & Access",
        faqs: [
            {
                question: "Can multiple team members use ExportMS?",
                answer:
                    "Yes. ExportMS supports user roles and permissions, so you can give your team the right level of access — from view-only to full admin.",
            },
            {
                question: "How many team members can I add?",
                answer:
                    "This depends on your plan — see our Pricing page for the exact limits on each tier, or choose Enterprise for unlimited team members.",
            },
        ],
    },
    {
        category: "Security",
        faqs: [
            {
                question: "Is my data secure?",
                answer:
                    "Yes. Your data is protected with secure authentication, and access is restricted based on user roles you define for your team.",
            },
            {
                question: "Who owns the data I enter into ExportMS?",
                answer:
                    "You do. We never sell your information, and you can request export or deletion of your data at any time.",
            },
        ],
    },
];

export default function FAQPage() {
    return (
        <section className="mx-auto max-w-3xl px-4 py-20">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Frequently asked questions
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Everything you need to know about ExportMS.
                </p>
            </div>

            <div className="mt-16 space-y-12">
                {faqCategories.map((group) => (
                    <div key={group.category}>
                        <h2 className="text-xl font-semibold">{group.category}</h2>
                        <Accordion type="single" collapsible className="mt-4 w-full">
                            {group.faqs.map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`${group.category}-${index}`}
                                >
                                    <AccordionTrigger className="text-left text-base font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </section>
    );
}