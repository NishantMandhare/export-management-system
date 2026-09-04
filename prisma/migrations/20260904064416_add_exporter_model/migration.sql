-- CreateTable
CREATE TABLE "Exporter" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "commissionPct" DOUBLE PRECISION NOT NULL,
    "profitMarginPct" DOUBLE PRECISION NOT NULL,
    "vatPct" DOUBLE PRECISION NOT NULL,
    "paymentTerms" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Exporter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exporter" ADD CONSTRAINT "Exporter_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
