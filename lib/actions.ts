"use server";
import bcrypt from "bcryptjs";
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

import { exporterSchema, productSchema, orderSchema, containerSchema, containerExpenseSchema, salesEntrySchema, userSchema } from "@/lib/schemas";
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

export async function updateOrderAction(
    orderId: string,
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const itemsRaw = formData.get("items") as string;
    let items: { id?: string; productId: string; quantity: string; sellingPrice: string }[];
    try {
        items = JSON.parse(itemsRaw);
    } catch {
        return "Invalid product items.";
    }

    const orderNumber = formData.get("orderNumber") as string;
    const currency = formData.get("currency") as string;
    const expectedShippingDate = formData.get("expectedShippingDate") as string;

    if (!orderNumber || !currency || !expectedShippingDate) {
        return "Please fill in all order fields.";
    }

    if (items.length === 0) {
        return "Add at least one product.";
    }

    const existingItems = await prisma.orderItem.findMany({
        where: { orderId },
    });

    const submittedIds = items.filter((i) => i.id).map((i) => i.id as string);
    const idsToDelete = existingItems
        .filter((i) => !submittedIds.includes(i.id))
        .map((i) => i.id);

    try {
        await prisma.$transaction([
            prisma.order.update({
                where: { id: orderId },
                data: {
                    orderNumber,
                    currency,
                    expectedShippingDate: new Date(expectedShippingDate),
                },
            }),
            ...(idsToDelete.length > 0
                ? [prisma.orderItem.deleteMany({ where: { id: { in: idsToDelete } } })]
                : []),
            ...items
                .filter((i) => i.id)
                .map((i) =>
                    prisma.orderItem.update({
                        where: { id: i.id },
                        data: {
                            productId: i.productId,
                            quantity: Number(i.quantity),
                            sellingPrice: Number(i.sellingPrice),
                        },
                    })
                ),
            ...items
                .filter((i) => !i.id)
                .map((i) =>
                    prisma.orderItem.create({
                        data: {
                            orderId,
                            productId: i.productId,
                            quantity: Number(i.quantity),
                            sellingPrice: Number(i.sellingPrice),
                        },
                    })
                ),
        ]);
    } catch {
        return "Could not update order. It may be linked to a container.";
    }

    redirect("/orders");
}

export async function deleteOrderAction(id: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("You must be logged in.");
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "MANAGER") {
        throw new Error("You don't have permission to delete orders.");
    }

    try {
        await prisma.order.delete({
            where: { id },
        });
    } catch {
        throw new Error(
            "Could not delete order. It may be linked to a container."
        );
    }

    redirect("/orders");
}

export async function updateContainerAction(
    containerId: string,
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    const itemsRaw = formData.get("items") as string;
    let items: {
        id?: string;
        orderItemId: string;
        quantityAssigned: string;
    }[];
    try {
        items = JSON.parse(itemsRaw);
    } catch {
        return "Invalid container items.";
    }

    const containerNumber = formData.get("containerNumber") as string;
    const blNumber = formData.get("blNumber") as string;
    const containerSize = formData.get("containerSize") as string;

    if (!containerNumber || !blNumber || !containerSize) {
        return "Please fill in all container fields.";
    }

    if (items.length === 0) {
        return "Add at least one item.";
    }

    const existingItems = await prisma.containerItem.findMany({
        where: { containerId },
    });

    const submittedIds = items.filter((i) => i.id).map((i) => i.id as string);
    const idsToDelete = existingItems
        .filter((i) => !submittedIds.includes(i.id))
        .map((i) => i.id);

    try {
        await prisma.$transaction([
            prisma.container.update({
                where: { id: containerId },
                data: { containerNumber, blNumber, containerSize },
            }),
            ...(idsToDelete.length > 0
                ? [
                    prisma.containerItem.deleteMany({
                        where: { id: { in: idsToDelete } },
                    }),
                ]
                : []),
            ...items
                .filter((i) => i.id)
                .map((i) =>
                    prisma.containerItem.update({
                        where: { id: i.id },
                        data: {
                            orderItemId: i.orderItemId,
                            quantityAssigned: Number(i.quantityAssigned),
                        },
                    })
                ),
            ...items
                .filter((i) => !i.id)
                .map((i) =>
                    prisma.containerItem.create({
                        data: {
                            containerId,
                            orderItemId: i.orderItemId,
                            quantityAssigned: Number(i.quantityAssigned),
                        },
                    })
                ),
        ]);
    } catch {
        return "Could not update container.";
    }

    redirect("/containers");
}

export async function deleteContainerAction(id: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("You must be logged in.");
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "MANAGER") {
        throw new Error("You don't have permission to delete containers.");
    }

    try {
        await prisma.container.delete({
            where: { id },
        });
    } catch {
        throw new Error("Could not delete container.");
    }

    redirect("/containers");
}
export async function createUserAction(
    prevState: string | undefined,
    formData: FormData
): Promise<string | undefined> {
    const session = await auth();

    if (!session?.user?.id) {
        return "You must be logged in.";
    }

    if (session.user.role !== "ADMIN") {
        return "Only Admins can create new users.";
    }

    const result = userSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
    });

    if (!result.success) {
        return result.error.issues[0].message;
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: result.data.email },
    });

    if (existingUser) {
        return "A user with this email already exists.";
    }

    const hashedPassword = await bcrypt.hash(result.data.password, 10);

    await prisma.user.create({
        data: {
            name: result.data.name,
            email: result.data.email,
            password: hashedPassword,
            role: result.data.role,
        },
    });

    redirect("/users");
}