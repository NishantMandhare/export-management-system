import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditContainerForm from "./edit-container-form";

export default async function EditContainerPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const container = await prisma.container.findUnique({
        where: { id },
        include: {
            items: true,
        },
    });

    if (!container) {
        notFound();
    }

    const orderItems = await prisma.orderItem.findMany({
        include: {
            product: true,
            order: true,
        },
    });

    return <EditContainerForm container={container} orderItems={orderItems} />;
}