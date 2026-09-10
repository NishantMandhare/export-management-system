import { auth } from "@/auth";
import { deleteContainerAction } from "@/lib/actions";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default async function ContainersPage() {
    const session = await auth();
    const canDelete =
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER";
    const containers = await prisma.container.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            items: true,
        },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Containers</h1>
                <Button asChild>
                    <Link href="/containers/new">Add Container</Link>
                </Button>
            </div>

            {containers.length === 0 ? (
                <p className="text-muted-foreground">No containers yet.</p>
            ) : (
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead>Container Number</TableHead>
                                <TableHead>BL Number</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {containers.map((container) => (
                                <TableRow key={container.id}>
                                    <TableCell className="font-medium">
                                        {container.containerNumber}
                                    </TableCell>
                                    <TableCell>{container.blNumber}</TableCell>
                                    <TableCell>{container.containerSize}</TableCell>
                                    <TableCell>{container.items.length}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{container.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-3">
                                        <Link
                                            href={`/containers/${container.id}/edit`}
                                            className="text-sm underline"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={`/containers/${container.id}/expense`}
                                            className="text-sm underline"
                                        >
                                            Expense
                                        </Link>
                                        <Link
                                            href={`/containers/${container.id}/sales`}
                                            className="text-sm underline"
                                        >
                                            Sales
                                        </Link>
                                        <Link
                                            href={`/containers/${container.id}/settlement`}
                                            className="text-sm underline"
                                        >
                                            Settlement
                                        </Link>
                                        {canDelete && (
                                            <form
                                                action={deleteContainerAction.bind(null, container.id)}
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