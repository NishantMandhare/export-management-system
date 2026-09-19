"use client";

import { useActionState } from "react";
import { createContainerExpenseAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

export default function ExpenseForm({
    containerId,
}: {
    containerId: string;
}) {
    const actionWithId = createContainerExpenseAction.bind(null, containerId);

    const [errorMessage, formAction, isPending] = useActionState(
        actionWithId,
        undefined
    );

    const fields = [
        { name: "freight", label: "Freight" },
        { name: "customs", label: "Customs" },
        { name: "warehouse", label: "Warehouse" },
        { name: "parking", label: "Parking" },
        { name: "hamali", label: "Hamali" },
        { name: "transport", label: "Transport" },
        { name: "otherExpenses", label: "Other Expenses" },
        { name: "commissionPct", label: "Commission %" },
        { name: "profitMarginPct", label: "Profit Margin %" },
    ];

    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Container Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        {fields.map((field) => (
                            <div key={field.name} className="space-y-2">
                                <Label htmlFor={field.name}>{field.label}</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="number"
                                    step="0.01"
                                    required
                                />
                            </div>
                        ))}

                        {errorMessage && (
                            <p className="text-sm text-destructive">{errorMessage}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Saving..." : "Save Expenses"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}