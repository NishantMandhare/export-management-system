import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditOrderForm from "./edit-order-form";

export default async function EditOrderPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const order = await prisma.order.findUnique({
        where: { id },
        include: {
            items: true,
        },
    });

    if (!order) {
        notFound();
    }

    const exporters = await prisma.exporter.findMany({
        orderBy: { companyName: "asc" },
    });

    const products = await prisma.product.findMany({
        orderBy: { name: "asc" },
    });

    return (
        <EditOrderForm order={order} exporters={exporters} products={products} />
    );
}