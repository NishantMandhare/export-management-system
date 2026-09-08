"use client";

import { useActionState } from "react";
import { createSalesEntryAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

export default function SalesEntryForm({
    containerId,
}: {
    containerId: string;
}) {
    const actionWithId = createSalesEntryAction.bind(null, containerId);

    const [errorMessage, formAction, isPending] = useActionState(
        actionWithId,
        undefined
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add Sales Entry</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="flex gap-2 items-end flex-wrap">
                    <div className="space-y-1">
                        <Label htmlFor="quantitySold" className="text-xs">
                            Quantity Sold
                        </Label>
                        <Input
                            id="quantitySold"
                            name="quantitySold"
                            type="number"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="sellingRate" className="text-xs">
                            Selling Rate
                        </Label>
                        <Input
                            id="sellingRate"
                            name="sellingRate"
                            type="number"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="saleDate" className="text-xs">
                            Sale Date
                        </Label>
                        <Input id="saleDate" name="saleDate" type="date" required />
                    </div>

                    <Button type="submit" disabled={isPending}>
                        {isPending ? "Adding..." : "Add Entry"}
                    </Button>
                </form>
                {errorMessage && (
                    <p className="text-sm text-destructive mt-2">{errorMessage}</p>
                )}
            </CardContent>
        </Card>
    );
}