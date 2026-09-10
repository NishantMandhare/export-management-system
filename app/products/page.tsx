import { auth } from "@/auth";
import { deleteProductAction } from "@/lib/actions";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";

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
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <Button asChild>
                    <Link href="/products/new">Add Product</Link>
                </Button>
            </div>

            {products.length === 0 ? (
                <p className="text-muted-foreground">No products yet.</p>
            ) : (
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader className="bg-muted">
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Exporter</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Packing</TableHead>
                                <TableHead>Unit</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{product.exporter.companyName}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{product.type}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{product.packingType}</Badge>
                                    </TableCell>
                                    <TableCell>{product.unit}</TableCell>
                                    <TableCell>{product.defaultPrice}</TableCell>
                                    <TableCell className="text-right space-x-3">
                                        <Link
                                            href={`/products/${product.id}/edit`}
                                            className="text-sm underline"
                                        >
                                            Edit
                                        </Link>
                                        {canDelete && (
                                            <form
                                                action={deleteProductAction.bind(null, product.id)}
                                                className="inline"
                                            >
                                                <button
                                                    type="submit"
                                                    className="text-sm underline text-destructive"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}