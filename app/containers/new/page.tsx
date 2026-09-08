import { prisma } from "@/lib/prisma";
import NewContainerForm from "./new-container-form";

export default async function NewContainerPage() {
    const orderItems = await prisma.orderItem.findMany({
        include: {
            product: true,
            order: true,
        },
    });

    return <NewContainerForm orderItems={orderItems} />;
}