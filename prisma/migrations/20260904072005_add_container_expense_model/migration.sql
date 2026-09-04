-- CreateTable
CREATE TABLE "ContainerExpense" (
    "id" TEXT NOT NULL,
    "freight" DOUBLE PRECISION NOT NULL,
    "customs" DOUBLE PRECISION NOT NULL,
    "warehouse" DOUBLE PRECISION NOT NULL,
    "parking" DOUBLE PRECISION NOT NULL,
    "hamali" DOUBLE PRECISION NOT NULL,
    "transport" DOUBLE PRECISION NOT NULL,
    "otherExpenses" DOUBLE PRECISION NOT NULL,
    "commissionPct" DOUBLE PRECISION NOT NULL,
    "profitMarginPct" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "containerId" TEXT NOT NULL,

    CONSTRAINT "ContainerExpense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContainerExpense_containerId_key" ON "ContainerExpense"("containerId");

-- AddForeignKey
ALTER TABLE "ContainerExpense" ADD CONSTRAINT "ContainerExpense_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
