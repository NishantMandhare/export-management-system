"use client";

import { useActionState } from "react";
import { createExporterAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

export default function NewExporterPage() {
    const [errorMessage, formAction, isPending] = useActionState(
        createExporterAction,
        undefined
    );

    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Add New Exporter</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name</Label>
                            <Input id="companyName" name="companyName" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input id="country" name="country" required />
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
                            <Label htmlFor="commissionPct">Commission %</Label>
                            <Input
                                id="commissionPct"
                                name="commissionPct"
                                type="number"
                                step="0.01"
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
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="paymentTerms">Payment Terms</Label>
                            <Input
                                id="paymentTerms"
                                name="paymentTerms"
                                placeholder="e.g. Net 30"
                                required
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-sm text-destructive">{errorMessage}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Saving..." : "Save Exporter"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}