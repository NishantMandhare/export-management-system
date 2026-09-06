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