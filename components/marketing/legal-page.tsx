type LegalSection = {
    heading: string;
    body: string;
};

type LegalPageProps = {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: LegalSection[];
};

export function LegalPage({
    title,
    lastUpdated,
    intro,
    sections,
}: LegalPageProps) {
    return (
        <section className="mx-auto max-w-3xl px-4 py-20">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {lastUpdated}
            </p>

            <p className="mt-8 text-muted-foreground">{intro}</p>

            <div className="mt-10 space-y-10">
                {sections.map((section) => (
                    <div key={section.heading}>
                        <h2 className="text-xl font-semibold">{section.heading}</h2>
                        <p className="mt-3 whitespace-pre-line text-muted-foreground">
                            {section.body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}