import { prisma } from "@/lib/prisma";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default async function DashboardPage() {
  const [
    totalOrders,
    totalExporters,
    totalContainers,
    activeContainers,
    allSalesEntries,
    allExpenses,
  ] = await Promise.all([
    prisma.order.count(),
    prisma.exporter.count(),
    prisma.container.count(),
    prisma.container.count({
      where: { status: { not: "COMPLETED" } },
    }),
    prisma.salesEntry.findMany(),
    prisma.containerExpense.findMany(),
  ]);

  const totalSales = allSalesEntries.reduce(
    (sum, entry) => sum + entry.quantitySold * entry.sellingRate,
    0
  );

  const totalExpenses = allExpenses.reduce(
    (sum, expense) =>
      sum +
      expense.freight +
      expense.customs +
      expense.warehouse +
      expense.parking +
      expense.hamali +
      expense.transport +
      expense.otherExpenses,
    0
  );

  const netProfit = totalSales - totalExpenses;

  const stats = [
    { label: "Total Orders", value: totalOrders },
    { label: "Total Exporters", value: totalExporters },
    { label: "Total Containers", value: totalContainers },
    { label: "Active Containers", value: activeContainers },
    { label: "Total Sales", value: totalSales.toFixed(2) },
    { label: "Total Expenses", value: totalExpenses.toFixed(2) },
    { label: "Net Profit", value: netProfit.toFixed(2) },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}