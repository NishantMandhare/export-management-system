-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('PERISHABLE', 'NON_PERISHABLE');

-- CreateEnum
CREATE TYPE "PackingType" AS ENUM ('LOOSE', 'PACKED');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "packingType" "PackingType" NOT NULL,
    "unit" TEXT NOT NULL,
    "defaultPrice" DOUBLE PRECISION NOT NULL,
    "defaultCost" DOUBLE PRECISION NOT NULL,
    "quantityPerContainer" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "exporterId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_exporterId_fkey" FOREIGN KEY ("exporterId") REFERENCES "Exporter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
