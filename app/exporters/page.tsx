import { auth } from "@/auth";
import { deleteExporterAction } from "@/lib/actions";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ExportersPage() {
    const session = await auth();
    const canDelete = session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER";
    const exporters = await prisma.exporter.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Exporters</h1>
                <Link href="/exporters/new" className="underline text-sm">
                    + Add Exporter
                </Link>
            </div>

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
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exporters.map((exporter) => (
                            <tr key={exporter.id} className="border-b">
                                <td className="p-2">{exporter.companyName}</td>
                                <td className="p-2">{exporter.country}</td>
                                <td className="p-2">{exporter.currency}</td>
                                <td className="p-2">{exporter.commissionPct}%</td>
                                <td className="p-2 space-x-3">
                                    <Link
                                        href={`/exporters/${exporter.id}/edit`}
                                        className="underline"
                                    >
                                        Edit
                                    </Link>
                                    {canDelete && (
                                        <form
                                            action={deleteExporterAction.bind(null, exporter.id)}
                                            className="inline"
                                        >
                                            <button type="submit" className="underline text-destructive">
                                                Delete
                                            </button>
                                        </form>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}