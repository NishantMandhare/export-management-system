import { prisma } from "@/lib/prisma";

export default async function ExportersPage() {
    const exporters = await prisma.exporter.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Exporters</h1>

            {exporters.length === 0 ? (
                <p className="text-muted-foreground">No exporters yet.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-left">
                            <th className="p-2">Company Name</th>
                            <th className="p-2">Country</th>
                            <th className="p-2">Currency</th>
                            <th className="p-2">Commission %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exporters.map((exporter) => (
                            <tr key={exporter.id} className="border-b">
                                <td className="p-2">{exporter.companyName}</td>
                                <td className="p-2">{exporter.country}</td>
                                <td className="p-2">{exporter.currency}</td>
                                <td className="p-2">{exporter.commissionPct}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}