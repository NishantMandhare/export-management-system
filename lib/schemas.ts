import { z } from "zod";

export const exporterSchema = z.object({
    companyName: z.string().min(2, "Company name must be at least 2 characters"),
    country: z.string().min(2, "Country is required"),
    currency: z.string().min(3, "Currency is required"),
    commissionPct: z.coerce.number().min(0).max(100),
    profitMarginPct: z.coerce.number().min(0).max(100),
    vatPct: z.coerce.number().min(0).max(100),
    paymentTerms: z.string().min(2, "Payment terms are required"),
});

export const productSchema = z.object({
    name: z.string().min(2, "Product name must be at least 2 characters"),
    type: z.enum(["PERISHABLE", "NON_PERISHABLE"]),
    packingType: z.enum(["LOOSE", "PACKED"]),
    unit: z.string().min(1, "Unit is required"),
    defaultPrice: z.coerce.number().min(0),
    defaultCost: z.coerce.number().min(0),
    quantityPerContainer: z.coerce.number().min(0),
    exporterId: z.string().min(1, "Please select an exporter"),
});