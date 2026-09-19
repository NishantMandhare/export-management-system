import { prisma } from "@/lib/prisma";
import NewProductForm from "./new-product-form";

export default async function NewProductPage() {
    const exporters = await prisma.exporter.findMany({
        orderBy: { companyName: "asc" },
    });

    return <NewProductForm exporters={exporters} />;
}