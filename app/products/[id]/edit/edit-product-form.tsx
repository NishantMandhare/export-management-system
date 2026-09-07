"use client";

import { useActionState } from "react";
import { updateProductAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { Exporter, Product } from "@/app/generated/prisma/client";

export default function EditProductForm({
    product,
    exporters,
}: {
    product: Product;
    exporters: Exporter[];
}) {
    const updateActionWithId = updateProductAction.bind(null, product.id);

    const [errorMessage, formAction, isPending] = useActionState(
        updateActionWithId,
        undefined
    );

    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Edit Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="exporterId">Exporter</Label>
                            <Select
                                name="exporterId"
                                required
                                defaultValue={product.exporterId}
                                items={exporters.map((exporter) => ({
                                    value: exporter.id,
                                    label: exporter.companyName,
                                }))}
                            >
                                <SelectTrigger id="exporterId" className="w-full">
                                    <SelectValue placeholder="Select an exporter" />
                                </SelectTrigger>
                                <SelectContent>
                                    {exporters.map((exporter) => (
                                        <SelectItem key={exporter.id} value={exporter.id}>
                                            {exporter.companyName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                                id="name"
                                name="name"
                                defaultValue={product.name}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="type">Type</Label>
                            <Select
                                name="type"
                                required
                                defaultValue={product.type}
                                items={[
                                    { value: "PERISHABLE", label: "Perishable" },
                                    { value: "NON_PERISHABLE", label: "Non-Perishable" },
                                ]}
                            >
                                <SelectTrigger id="type" className="w-full">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PERISHABLE">Perishable</SelectItem>
                                    <SelectItem value="NON_PERISHABLE">
                                        Non-Perishable
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="packingType">Packing Type</Label>
                            <Select
                                name="packingType"
                                required
                                defaultValue={product.packingType}
                                items={[
                                    { value: "LOOSE", label: "Loose" },
                                    { value: "PACKED", label: "Packed" },
                                ]}
                            >
                                <SelectTrigger id="packingType" className="w-full">
                                    <SelectValue placeholder="Select packing type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="LOOSE">Loose</SelectItem>
                                    <SelectItem value="PACKED">Packed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="unit">Unit</Label>
                            <Input
                                id="unit"
                                name="unit"
                                defaultValue={product.unit}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="defaultPrice">Default Price</Label>
                            <Input
                                id="defaultPrice"
                                name="defaultPrice"
                                type="number"
                                step="0.01"
                                defaultValue={product.defaultPrice}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="defaultCost">Default Cost</Label>
                            <Input
                                id="defaultCost"
                                name="defaultCost"
                                type="number"
                                step="0.01"
                                defaultValue={product.defaultCost}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="quantityPerContainer">
                                Quantity Per Container
                            </Label>
                            <Input
                                id="quantityPerContainer"
                                name="quantityPerContainer"
                                type="number"
                                step="0.01"
                                defaultValue={product.quantityPerContainer}
                                required
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-sm text-destructive">{errorMessage}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Saving..." : "Update Product"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}