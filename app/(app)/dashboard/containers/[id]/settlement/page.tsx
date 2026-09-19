import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { createSettlementAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

export default async function ContainerSettlementPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const container = await prisma.container.findUnique({
        where: { id },
        include: {
            settlement: true,
        },
    });

    if (!container) {
        notFound();
    }

    const settlement = container.settlement;
    const calculateAction = createSettlementAction.bind(null, container.id);

    return (
        <div className="p-8 flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Settlement — {container.containerNumber}</CardTitle>
                </CardHeader>
                <CardContent>
                    {!settlement ? (
                        <form action={calculateAction}>
                            <p className="text-muted-foreground mb-4">
                                No settlement calculated yet.
                            </p>
                            <Button type="submit">Calculate Settlement</Button>
                        </form>
                    ) : (
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Total Sales</span>
                                <span>{settlement.totalSales.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Expenses</span>
                                <span>{settlement.totalExpenses.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Commission</span>
                                <span>{settlement.totalCommission.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Average Selling Price</span>
                                <span>{settlement.averageSellingPrice.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Net Settlement</span>
                                <span>{settlement.netSettlement.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}