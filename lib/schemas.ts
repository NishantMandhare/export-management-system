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

export const orderItemSchema = z.object({
    productId: z.string().min(1, "Please select a product"),
    quantity: z.coerce.number().min(0.01, "Quantity must be greater than 0"),
    sellingPrice: z.coerce.number().min(0, "Selling price cannot be negative"),
});

export const orderSchema = z.object({
    orderNumber: z.string().min(2, "Order number is required"),
    exporterId: z.string().min(1, "Please select an exporter"),
    currency: z.string().min(3, "Currency is required"),
    expectedShippingDate: z.coerce.date(),
    items: z.array(orderItemSchema).min(1, "Add at least one product"),
});

export const containerItemSchema = z.object({
    orderItemId: z.string().min(1, "Please select an order item"),
    quantityAssigned: z.coerce.number().min(0.01, "Quantity must be greater than 0"),
});

export const containerSchema = z.object({
    containerNumber: z.string().min(2, "Container number is required"),
    blNumber: z.string().min(2, "BL number is required"),
    containerSize: z.string().min(1, "Container size is required"),
    items: z.array(containerItemSchema).min(1, "Add at least one item"),
});