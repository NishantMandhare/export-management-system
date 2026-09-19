const stats = [
    { value: "500+", label: "Exporters Managed" },
    { value: "10,000+", label: "Orders Tracked" },
    { value: "2,500+", label: "Containers Shipped" },
    { value: "99.9%", label: "Uptime" },
];

export function Stats() {
    return (
        <section className="border-t bg-primary py-16 text-primary-foreground">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold tracking-tight md:text-4xl">
                            {stat.value}
                        </div>
                        <div className="mt-2 text-sm text-primary-foreground/80">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}