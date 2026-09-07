import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
    const orders = await prisma.order.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            exporter: true,
            items: true,
        },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Orders</h1>
                <Link href="/orders/new" className="underline text-sm">
                    + Add Order
                </Link>
            </div>

            {orders.length === 0 ? (
                <p className="text-muted-foreground">No orders yet.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-left">
                            <th className="p-2">Order Number</th>
                            <th className="p-2">Exporter</th>
                            <th className="p-2">Currency</th>
                            <th className="p-2">Items</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Shipping Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b">
                                <td className="p-2">{order.orderNumber}</td>
                                <td className="p-2">{order.exporter.companyName}</td>
                                <td className="p-2">{order.currency}</td>
                                <td className="p-2">{order.items.length}</td>
                                <td className="p-2">{order.status}</td>
                                <td className="p-2">
                                    {order.expectedShippingDate.toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}