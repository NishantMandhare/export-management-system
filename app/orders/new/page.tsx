import { prisma } from "@/lib/prisma";
import NewOrderForm from "./new-order-form";

export default async function NewOrderPage() {
    const exporters = await prisma.exporter.findMany({
        orderBy: { companyName: "asc" },
    });

    const products = await prisma.product.findMany({
        orderBy: { name: "asc" },
    });

    return <NewOrderForm exporters={exporters} products={products} />;
}