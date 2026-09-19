import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Export Glossary — ExportMS",
    description:
        "A glossary of common export and international trade terms, from Bill of Lading to Letter of Credit, explained simply.",
};

const terms = [
    {
        term: "Bill of Lading (B/L)",
        definition:
            "A legal document issued by a carrier to a shipper, detailing the type, quantity, and destination of goods being shipped. It also serves as a receipt and title of goods.",
    },
    {
        term: "Container Load",
        definition:
            "A shipment that fills an entire shipping container, as opposed to a partial or shared load (LCL — Less than Container Load).",
    },
    {
        term: "Customs Declaration",
        definition:
            "A document that lists details of goods being imported or exported, submitted to customs authorities for clearance.",
    },
    {
        term: "Exporter of Record",
        definition:
            "The entity legally responsible for ensuring an export shipment complies with all relevant laws and regulations.",
    },
    {
        term: "FOB (Free on Board)",
        definition:
            "A trade term indicating that the seller is responsible for goods until they are loaded onto the shipping vessel, after which responsibility transfers to the buyer.",
    },
    {
        term: "Incoterms",
        definition:
            "A set of internationally recognized rules that define the responsibilities of buyers and sellers in international trade transactions.",
    },
    {
        term: "Letter of Credit (LC)",
        definition:
            "A payment guarantee issued by a bank on behalf of a buyer, ensuring the seller receives payment once shipment terms are met.",
    },
    {
        term: "Packing List",
        definition:
            "A document detailing the contents, weight, and dimensions of a shipment, used by customs and freight handlers.",
    },
    {
        term: "Shipping Manifest",
        definition:
            "A document listing all cargo being carried on a particular shipment, used for customs and logistics tracking.",
    },
    {
        term: "Trade Compliance",
        definition:
            "The practice of ensuring export and import activities follow applicable laws, tariffs, and regulations in both origin and destination countries.",
    },
];

export default function GlossaryPage() {
    return (
        <section className="mx-auto max-w-3xl px-4 py-20">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Export Glossary
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Common export and international trade terms, explained simply.
                </p>
            </div>

            <div className="mt-16 divide-y">
                {terms.map((item) => (
                    <div key={item.term} className="py-6">
                        <h2 className="text-lg font-semibold">{item.term}</h2>
                        <p className="mt-2 text-muted-foreground">{item.definition}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}