import { auth } from "@/auth";
import { deleteExporterAction } from "@/lib/actions";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


export default async function ExportersPage() {
    const session = await auth();
    const canDelete =
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER";
    const exporters = await prisma.exporter.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Exporters</h1>
                <Button asChild>
                    <Link href="/exporters/new">Add Exporter</Link>
                </Button>
            </div>

            {exporters.length === 0 ? (
                <p className="text-muted-foreground">No exporters yet.</p>
            ) : (
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead>Company Name</TableHead>
                                <TableHead>Country</TableHead>
                                <TableHead>Currency</TableHead>
                                <TableHead>Commission %</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {exporters.map((exporter) => (
                                <TableRow key={exporter.id}>
                                    <TableCell className="font-medium">
                                        {exporter.companyName}
                                    </TableCell>
                                    <TableCell>{exporter.country}</TableCell>
                                    <TableCell>{exporter.currency}</TableCell>
                                    <TableCell>{exporter.commissionPct}%</TableCell>
                                    <TableCell className="text-right space-x-3">
                                        <Link
                                            href={`/exporters/${exporter.id}/edit`}
                                            className="text-sm underline"
                                        >
                                            Edit
                                        </Link>
                                        {canDelete && (
                                            <form
                                                action={deleteExporterAction.bind(null, exporter.id)}
                                                className="inline"
                                            >
                                                <button
                                                    type="submit"
                                                    className="text-sm underline text-destructive"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}