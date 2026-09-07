import { auth } from "@/auth";
import { deleteProductAction } from "@/lib/actions";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
    const session = await auth();
    const canDelete =
        session?.user?.role === "ADMIN" || session?.user?.role === "MANAGER";
    const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            exporter: true,
        },
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Link href="/products/new" className="underline text-sm">
                    + Add Product
                </Link>
            </div>

            {products.length === 0 ? (
                <p className="text-muted-foreground">No products yet.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-left">
                            <th className="p-2">Name</th>
                            <th className="p-2">Exporter</th>
                            <th className="p-2">Type</th>
                            <th className="p-2">Packing</th>
                            <th className="p-2">Unit</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="p-2">{product.name}</td>
                                <td className="p-2">{product.exporter.companyName}</td>
                                <td className="p-2">{product.type}</td>
                                <td className="p-2">{product.packingType}</td>
                                <td className="p-2">{product.unit}</td>
                                <td className="p-2">{product.defaultPrice}</td>
                                <td className="p-2 space-x-3">
                                    <Link
                                        href={`/products/${product.id}/edit`}
                                        className="underline"
                                    >
                                        Edit
                                    </Link>
                                    {canDelete && (
                                        <form
                                            action={deleteProductAction.bind(null, product.id)}
                                            className="inline"
                                        >
                                            <button type="submit" className="underline text-destructive">
                                                Delete
                                            </button>
                                        </form>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}