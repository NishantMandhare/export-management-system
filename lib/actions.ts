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

import { exporterSchema } from "@/lib/schemas";
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