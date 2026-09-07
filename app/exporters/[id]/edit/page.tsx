import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditExporterForm from "./edit-form";

export default async function EditExporterPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const exporter = await prisma.exporter.findUnique({
        where: { id },
    });

    if (!exporter) {
        notFound();
    }

    return <EditExporterForm exporter={exporter} />;
}