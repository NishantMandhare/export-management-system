export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    date: string;
    author: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "replacing-spreadsheets-export-business",
        title: "Why Export Businesses Are Replacing Spreadsheets",
        excerpt:
            "Spreadsheets get you started, but they break down fast as your order volume grows. Here's what most exporters run into.",
        date: "September 10, 2026",
        author: "ExportMS Team",
        content: [
            "Most export businesses start with spreadsheets — and for a while, they work fine. But as order volume grows, spreadsheets start to break down in predictable ways: version conflicts, missing updates, and no single source of truth for what's actually happening with a shipment.",
            "The tipping point usually comes when more than one person needs to update the same order at the same time, or when a container's status changes and three different files need to be updated to reflect it.",
            "A dedicated system like ExportMS solves this by giving every exporter, order, and container a single home — so there's one accurate view for the whole team, updated in real time.",
        ],
    },
    {
        slug: "container-tracking-best-practices",
        title: "5 Container Tracking Best Practices for Exporters",
        excerpt:
            "From loading to delivery, here's how to keep visibility over every container without manual check-ins.",
        date: "August 28, 2026",
        author: "ExportMS Team",
        content: [
            "Container tracking is one of the most operationally painful parts of running an export business — a single missed update can mean a missed deadline for your buyer.",
            "1. Link every container to its order from day one, so status updates flow through automatically.",
            "2. Standardize your status labels (Loading, In Transit, Delivered) across your whole team.",
            "3. Review active containers daily, not just when a buyer asks for an update.",
            "4. Keep documentation attached to the container record, not scattered across email.",
            "5. Use a system that gives you a single dashboard view of every active shipment.",
        ],
    },
    {
        slug: "understanding-incoterms",
        title: "Understanding Incoterms: A Practical Primer",
        excerpt:
            "Incoterms define who's responsible for what during shipping. Here's a plain-language breakdown for exporters.",
        date: "August 12, 2026",
        author: "ExportMS Team",
        content: [
            "Incoterms are a set of standardized trade terms that define exactly when responsibility for goods transfers from seller to buyer — and who pays for what along the way.",
            "The most common terms exporters encounter are FOB (Free on Board), CIF (Cost, Insurance, and Freight), and EXW (Ex Works), each shifting responsibility at a different point in the shipping process.",
            "Getting Incoterms right in your contracts avoids disputes later — both sides should agree on the exact term before goods ever leave the warehouse.",
        ],
    },
    {
        slug: "scaling-export-team-without-chaos",
        title: "Scaling Your Export Team Without the Chaos",
        excerpt:
            "Adding team members should make your operation faster, not messier. Here's how to scale without losing control.",
        date: "July 30, 2026",
        author: "ExportMS Team",
        content: [
            "As export businesses grow, adding team members often introduces more confusion, not less — duplicate updates, unclear ownership, and no clear record of who did what.",
            "The fix is usually structural: give every team member clearly defined roles and permissions, so responsibility is explicit rather than assumed.",
            "A shared system with role-based access lets you scale your team while keeping every exporter, order, and container update accountable to one person.",
        ],
    },
];