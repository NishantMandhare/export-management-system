import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ExpenseForm from "./expense-form";

export default async function ContainerExpensePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const container = await prisma.container.findUnique({
        where: { id },
    });

    if (!container) {
        notFound();
    }

    return <ExpenseForm containerId={container.id} />;
}