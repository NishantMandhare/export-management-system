import { auth } from "@/auth";
import { deleteOrderAction } from "@/lib/actions";
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

export default async function OrdersPage() {
    const session = await auth();
    const canDelete =
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER";
    const orders = await prisma.order.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            exporter: true,
            items: true,
        },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Orders</h1>
                <Button asChild>
                    <Link href="/orders/new">Add Order</Link>
                </Button>
            </div>

            {orders.length === 0 ? (
                <p className="text-muted-foreground">No orders yet.</p>
            ) : (
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead>Order Number</TableHead>
                                <TableHead>Exporter</TableHead>
                                <TableHead>Currency</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Shipping Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">
                                        {order.orderNumber}
                                    </TableCell>
                                    <TableCell>{order.exporter.companyName}</TableCell>
                                    <TableCell>{order.currency}</TableCell>
                                    <TableCell>{order.items.length}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{order.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        {order.expectedShippingDate.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-right space-x-3">
                                        <Link
                                            href={`/orders/${order.id}/edit`}
                                            className="text-sm underline"
                                        >
                                            Edit
                                        </Link>
                                        {canDelete && (
                                            <form
                                                action={deleteOrderAction.bind(null, order.id)}
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