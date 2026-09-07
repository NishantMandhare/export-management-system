"use client";

import { useActionState } from "react";
import { updateExporterAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import type { Exporter } from "@/app/generated/prisma/client";

export default function EditExporterForm({
    exporter,
}: {
    exporter: Exporter;
}) {
    const updateActionWithId = updateExporterAction.bind(null, exporter.id);

    const [errorMessage, formAction, isPending] = useActionState(
        updateActionWithId,
        undefined
    );

    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Edit Exporter</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name</Label>
                            <Input
                                id="companyName"
                                name="companyName"
                                defaultValue={exporter.companyName}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input
                                id="country"
                                name="country"
                                defaultValue={exporter.country}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="currency">Currency</Label>
                            <Input
                                id="currency"
                                name="currency"
                                defaultValue={exporter.currency}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="commissionPct">Commission %</Label>
                            <Input
                                id="commissionPct"
                                name="commissionPct"
                                type="number"
                                step="0.01"
                                defaultValue={exporter.commissionPct}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="profitMarginPct">Profit Margin %</Label>
                            <Input
                                id="profitMarginPct"
                                name="profitMarginPct"
                                type="number"
                                step="0.01"
                                defaultValue={exporter.profitMarginPct}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="vatPct">VAT %</Label>
                            <Input
                                id="vatPct"
                                name="vatPct"
                                type="number"
                                step="0.01"
                                defaultValue={exporter.vatPct}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="paymentTerms">Payment Terms</Label>
                            <Input
                                id="paymentTerms"
                                name="paymentTerms"
                                defaultValue={exporter.paymentTerms}
                                required
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-sm text-destructive">{errorMessage}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Saving..." : "Update Exporter"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}