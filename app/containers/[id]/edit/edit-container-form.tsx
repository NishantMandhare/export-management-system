"use client";

import { useState } from "react";
import { useActionState } from "react";
import { updateContainerAction } from "@/lib/actions";
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
import type {
    Container,
    ContainerItem,
    OrderItem,
    Product,
    Order,
} from "@/app/generated/prisma/client";

type ContainerWithItems = Container & { items: ContainerItem[] };
type OrderItemWithRelations = OrderItem & { product: Product; order: Order };

type ContainerLineItem = {
    id?: string;
    orderItemId: string;
    quantityAssigned: string;
};

export default function EditContainerForm({
    container,
    orderItems,
}: {
    container: ContainerWithItems;
    orderItems: OrderItemWithRelations[];
}) {
    const [lineItems, setLineItems] = useState<ContainerLineItem[]>(
        container.items.map((item) => ({
            id: item.id,
            orderItemId: item.orderItemId,
            quantityAssigned: String(item.quantityAssigned),
        }))
    );

    const updateActionWithId = updateContainerAction.bind(null, container.id);

    const [errorMessage, formAction, isPending] = useActionState(
        updateActionWithId,
        undefined
    );

    function addLineItem() {
        setLineItems([
            ...lineItems,
            { orderItemId: "", quantityAssigned: "" },
        ]);
    }

    function removeLineItem(index: number) {
        setLineItems(lineItems.filter((_, i) => i !== index));
    }

    function updateLineItem(
        index: number,
        field: keyof ContainerLineItem,
        value: string
    ) {
        const updated = [...lineItems];
        updated[index] = { ...updated[index], [field]: value };
        setLineItems(updated);
    }

    const orderItemOptions = orderItems.map((item) => ({
        value: item.id,
        label: `${item.order.orderNumber} — ${item.product.name}`,
    }));

    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Edit Container</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="containerNumber">Container Number</Label>
                            <Input
                                id="containerNumber"
                                name="containerNumber"
                                defaultValue={container.containerNumber}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="blNumber">BL Number</Label>
                            <Input
                                id="blNumber"
                                name="blNumber"
                                defaultValue={container.blNumber}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="containerSize">Container Size</Label>
                            <Input
                                id="containerSize"
                                name="containerSize"
                                defaultValue={container.containerSize}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Order Items</Label>
                            {lineItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-2 items-end border p-3 rounded-md"
                                >
                                    <div className="flex-1 space-y-1">
                                        <Label className="text-xs">Order — Product</Label>
                                        <Select
                                            value={item.orderItemId}
                                            onValueChange={(value) =>
                                                updateLineItem(index, "orderItemId", value)
                                            }
                                            items={orderItemOptions}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select order item" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {orderItems.map((oi) => (
                                                    <SelectItem key={oi.id} value={oi.id}>
                                                        {oi.order.orderNumber} — {oi.product.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="w-28 space-y-1">
                                        <Label className="text-xs">Quantity</Label>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            value={item.quantityAssigned}
                                            onChange={(e) =>
                                                updateLineItem(
                                                    index,
                                                    "quantityAssigned",
                                                    e.target.value
                                                )
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
                                + Add Item
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
                            {isPending ? "Saving..." : "Update Container"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}