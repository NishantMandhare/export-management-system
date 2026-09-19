"use client";

import { useState } from "react";
import { useActionState } from "react";
import { createOrderAction } from "@/lib/actions";
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

type OrderLineItem = {
    productId: string;
    quantity: string;
    sellingPrice: string;
};

export default function NewOrderForm({
    exporters,
    products,
}: {
    exporters: Exporter[];
    products: Product[];
}) {
    const [selectedExporterId, setSelectedExporterId] = useState("");
    const [lineItems, setLineItems] = useState<OrderLineItem[]>([
        { productId: "", quantity: "", sellingPrice: "" },
    ]);

    const [errorMessage, formAction, isPending] = useActionState(
        createOrderAction,
        undefined
    );

    const filteredProducts = products.filter(
        (product) => product.exporterId === selectedExporterId
    );

    function addLineItem() {
        setLineItems([
            ...lineItems,
            { productId: "", quantity: "", sellingPrice: "" },
        ]);
    }

    function removeLineItem(index: number) {
        setLineItems(lineItems.filter((_, i) => i !== index));
    }

    function updateLineItem(
        index: number,
        field: keyof OrderLineItem,
        value: string
    ) {
        const updated = [...lineItems];
        updated[index][field] = value;
        setLineItems(updated);
    }
    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Create New Order</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="orderNumber">Order Number</Label>
                            <Input id="orderNumber" name="orderNumber" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="exporterId">Exporter</Label>
                            <Select
                                name="exporterId"
                                required
                                value={selectedExporterId}
                                onValueChange={setSelectedExporterId}
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
                            <Label htmlFor="currency">Currency</Label>
                            <Input
                                id="currency"
                                name="currency"
                                placeholder="e.g. USD"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="expectedShippingDate">
                                Expected Shipping Date
                            </Label>
                            <Input
                                id="expectedShippingDate"
                                name="expectedShippingDate"
                                type="date"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Products</Label>
                            {lineItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-2 items-end border p-3 rounded-md"
                                >
                                    <div className="flex-1 space-y-1">
                                        <Label className="text-xs">Product</Label>
                                        <Select
                                            value={item.productId}
                                            onValueChange={(value) =>
                                                updateLineItem(index, "productId", value)
                                            }
                                            items={filteredProducts.map((product) => ({
                                                value: product.id,
                                                label: product.name,
                                            }))}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select product" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {filteredProducts.map((product) => (
                                                    <SelectItem key={product.id} value={product.id}>
                                                        {product.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="w-24 space-y-1">
                                        <Label className="text-xs">Quantity</Label>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateLineItem(index, "quantity", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-28 space-y-1">
                                        <Label className="text-xs">Price</Label>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            value={item.sellingPrice}
                                            onChange={(e) =>
                                                updateLineItem(index, "sellingPrice", e.target.value)
                                            }
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => removeLineItem(index)}
                                        disabled={lineItems.length === 1}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            ))}

                            <Button type="button" variant="outline" onClick={addLineItem}>
                                + Add Product
                            </Button>
                        </div>

                        <input
                            type="hidden"
                            name="items"
                            value={JSON.stringify(lineItems)}
                        />

                        {errorMessage && (
                            <p className="text-sm text-destructive">{errorMessage}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Saving..." : "Save Order"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}