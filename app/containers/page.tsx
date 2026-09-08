import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ContainersPage() {
    const containers = await prisma.container.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            items: true,
        },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Containers</h1>
                <Link href="/containers/new" className="underline text-sm">
                    + Add Container
                </Link>
            </div>

            {containers.length === 0 ? (
                <p className="text-muted-foreground">No containers yet.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-left">
                            <th className="p-2">Container Number</th>
                            <th className="p-2">BL Number</th>
                            <th className="p-2">Size</th>
                            <th className="p-2">Items</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {containers.map((container) => (
                            <tr key={container.id} className="border-b">
                                <td className="p-2">{container.containerNumber}</td>
                                <td className="p-2">{container.blNumber}</td>
                                <td className="p-2">{container.containerSize}</td>
                                <td className="p-2">{container.items.length}</td>
                                <td className="p-2">{container.status}</td>
                                <td className="p-2">
                                    <Link
                                        href={`/containers/${container.id}/expense`}
                                        className="underline"
                                    >
                                        Expense
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}