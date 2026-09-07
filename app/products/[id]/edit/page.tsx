import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditProductForm from "./edit-product-form";

export default async function EditProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = await prisma.product.findUnique({
        where: { id },
    });

    if (!product) {
        notFound();
    }

    const exporters = await prisma.exporter.findMany({
        orderBy: { companyName: "asc" },
    });

    return <EditProductForm product={product} exporters={exporters} />;
}