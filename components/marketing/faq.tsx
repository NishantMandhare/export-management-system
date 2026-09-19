import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ExportMS?",
    answer:
      "ExportMS is an all-in-one export management system that helps you track exporters, orders, containers, and products, while keeping your sales and expenses in one place.",
  },
  {
    question: "Who is ExportMS built for?",
    answer:
      "ExportMS is built for growing export businesses that currently rely on spreadsheets, WhatsApp messages, or manual tracking to manage exporters, orders, and shipments.",
  },
  {
    question: "Can multiple team members use ExportMS?",
    answer:
      "Yes. ExportMS supports user roles and permissions, so you can give your team the right level of access — from view-only to full admin.",
  },
  {
    question: "Do I need any technical knowledge to use it?",
    answer:
      "No. ExportMS is designed to be simple and intuitive, so you can start managing your exports without any technical setup.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your data is protected with secure authentication, and access is restricted based on user roles you define for your team.",
  },
];

export function FAQ() {
  return (
    <section className="border-t py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about ExportMS.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
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
    </section>
  );
}