import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import SalesEntryForm from "./sales-entry-form";

export default async function ContainerSalesPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const container = await prisma.container.findUnique({
        where: { id },
        include: {
            salesEntries: {
                orderBy: { saleDate: "desc" },
            },
        },
    });

    if (!container) {
        notFound();
    }

    const totalSales = container.salesEntries.reduce(
        (sum, entry) => sum + entry.quantitySold * entry.sellingRate,
        0
    );

    return (
        <div className="p-8 max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">
                Sales Entries — {container.containerNumber}
            </h1>

            <SalesEntryForm containerId={container.id} />

            <div>
                <h2 className="font-semibold mb-2">Recorded Sales</h2>
                {container.salesEntries.length === 0 ? (
                    <p className="text-muted-foreground">No sales entries yet.</p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="p-2">Date</th>
                                <th className="p-2">Quantity</th>
                                <th className="p-2">Rate</th>
                                <th className="p-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {container.salesEntries.map((entry) => (
                                <tr key={entry.id} className="border-b">
                                    <td className="p-2">
                                        {entry.saleDate.toLocaleDateString()}
                                    </td>
                                    <td className="p-2">{entry.quantitySold}</td>
                                    <td className="p-2">{entry.sellingRate}</td>
                                    <td className="p-2">
                                        {(entry.quantitySold * entry.sellingRate).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <p className="font-semibold mt-2">
                    Total Sales: {totalSales.toFixed(2)}
                </p>
            </div>
        </div>
    );
}