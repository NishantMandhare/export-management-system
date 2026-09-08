"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    try {
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/",
        });
    } catch (error) {
        if (error instanceof AuthError) {
            return "Invalid email or password.";
        }
        throw error;
    }
}

import { exporterSchema, productSchema, orderSchema, containerSchema, containerExpenseSchema, salesEntrySchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function createExporterAction(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const result = exporterSchema.safeParse({
        companyName: formData.get("companyName"),
        country: formData.get("country"),
        currency: formData.get("currency"),
        commissionPct: formData.get("commissionPct"),
        profitMarginPct: formData.get("profitMarginPct"),
        vatPct: formData.get("vatPct"),
        paymentTerms: formData.get("paymentTerms"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    await prisma.exporter.create({
        data: {
            ...result.data,
            createdById: session.user.id,
        },
    });

    redirect("/exporters");
}

export async function updateExporterAction(
    id: string,
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const result = exporterSchema.safeParse({
        companyName: formData.get("companyName"),
        country: formData.get("country"),
        currency: formData.get("currency"),
        commissionPct: formData.get("commissionPct"),
        profitMarginPct: formData.get("profitMarginPct"),
        vatPct: formData.get("vatPct"),
        paymentTerms: formData.get("paymentTerms"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    await prisma.exporter.update({
        where: { id },
        data: result.data,
    });

    redirect("/exporters");
}

export async function deleteExporterAction(id: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("You must be logged in.");
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "MANAGER") {
        throw new Error("You don't have permission to delete exporters.");
    }

    await prisma.exporter.delete({
        where: { id },
    });

    redirect("/exporters");
}

export async function createProductAction(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const result = productSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
        packingType: formData.get("packingType"),
        unit: formData.get("unit"),
        defaultPrice: formData.get("defaultPrice"),
        defaultCost: formData.get("defaultCost"),
        quantityPerContainer: formData.get("quantityPerContainer"),
        exporterId: formData.get("exporterId"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    await prisma.product.create({
        data: result.data,
    });

    redirect("/products");
}

export async function updateProductAction(
    id: string,
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const result = productSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
        packingType: formData.get("packingType"),
        unit: formData.get("unit"),
        defaultPrice: formData.get("defaultPrice"),
        defaultCost: formData.get("defaultCost"),
        quantityPerContainer: formData.get("quantityPerContainer"),
        exporterId: formData.get("exporterId"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    await prisma.product.update({
        where: { id },
        data: result.data,
    });

    redirect("/products");
}

export async function deleteProductAction(id: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("You must be logged in.");
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "MANAGER") {
        throw new Error("You don't have permission to delete products.");
    }

    await prisma.product.delete({
        where: { id },
    });

    redirect("/products");
}

export async function createOrderAction(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const itemsRaw = formData.get("items") as string;
    let items;
    try {
        items = JSON.parse(itemsRaw);
    } catch {
        return "Invalid product items.";
    }

    const result = orderSchema.safeParse({
        orderNumber: formData.get("orderNumber"),
        exporterId: formData.get("exporterId"),
        currency: formData.get("currency"),
        expectedShippingDate: formData.get("expectedShippingDate"),
        items,
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    const { items: orderItems, ...orderData } = result.data;

    await prisma.order.create({
        data: {
            ...orderData,
            items: {
                create: orderItems,
            },
        },
    });

    redirect("/orders");
}
export async function createContainerAction(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const itemsRaw = formData.get("items") as string;
    let items;
    try {
        items = JSON.parse(itemsRaw);
    } catch {
        return "Invalid container items.";
    }

    const result = containerSchema.safeParse({
        containerNumber: formData.get("containerNumber"),
        blNumber: formData.get("blNumber"),
        containerSize: formData.get("containerSize"),
        items,
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    const { items: containerItems, ...containerData } = result.data;

    await prisma.container.create({
        data: {
            ...containerData,
            items: {
                create: containerItems,
            },
        },
    });

    redirect("/containers");
}

export async function createContainerExpenseAction(
    containerId: string,
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const result = containerExpenseSchema.safeParse({
        freight: formData.get("freight"),
        customs: formData.get("customs"),
        warehouse: formData.get("warehouse"),
        parking: formData.get("parking"),
        hamali: formData.get("hamali"),
        transport: formData.get("transport"),
        otherExpenses: formData.get("otherExpenses"),
        commissionPct: formData.get("commissionPct"),
        profitMarginPct: formData.get("profitMarginPct"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    await prisma.containerExpense.create({
        data: {
            ...result.data,
            containerId,
        },
    });

    redirect("/containers");
}

export async function createSalesEntryAction(
    containerId: string,
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const result = salesEntrySchema.safeParse({
        quantitySold: formData.get("quantitySold"),
        sellingRate: formData.get("sellingRate"),
        saleDate: formData.get("saleDate"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    await prisma.salesEntry.create({
        data: {
            ...result.data,
            containerId,
        },
    });

    redirect(`/containers/${containerId}/sales`);
}

export async function createSettlementAction(containerId: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("You must be logged in.");
    }

    const container = await prisma.container.findUnique({
        where: { id: containerId },
        include: {
            salesEntries: true,
            expense: true,
        },
    });

    if (!container) {
        throw new Error("Container not found.");
    }

    if (!container.expense) {
        throw new Error("Please add container expenses first.");
    }

    const totalSales = container.salesEntries.reduce(
        (sum, entry) => sum + entry.quantitySold * entry.sellingRate,
        0
    );

    const totalQuantitySold = container.salesEntries.reduce(
        (sum, entry) => sum + entry.quantitySold,
        0
    );

    const averageSellingPrice =
        totalQuantitySold > 0 ? totalSales / totalQuantitySold : 0;

    const expense = container.expense;
    const totalExpenses =
        expense.freight +
        expense.customs +
        expense.warehouse +
        expense.parking +
        expense.hamali +
        expense.transport +
        expense.otherExpenses;

    const totalCommission = totalSales * (expense.commissionPct / 100);

    const netSettlement = totalSales - totalExpenses - totalCommission;

    await prisma.settlement.create({
        data: {
            containerId,
            remainingQuantity: 0,
            damagedQuantity: 0,
            averageSellingPrice,
            totalSales,
            totalExpenses,
            totalCommission,
            netSettlement,
        },
    });

    redirect(`/containers/${containerId}/settlement`);
}