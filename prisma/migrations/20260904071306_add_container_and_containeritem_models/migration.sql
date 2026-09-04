-- CreateEnum
CREATE TYPE "ContainerStatus" AS ENUM ('CREATED', 'PACKED', 'LOADED', 'SHIPPED', 'ARRIVED', 'CUSTOMS_CLEARANCE', 'WAREHOUSE', 'SALES_STARTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "Container" (
    "id" TEXT NOT NULL,
    "containerNumber" TEXT NOT NULL,
    "blNumber" TEXT NOT NULL,
    "containerSize" TEXT NOT NULL,
    "status" "ContainerStatus" NOT NULL DEFAULT 'CREATED',
    "documentUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContainerItem" (
    "id" TEXT NOT NULL,
    "quantityAssigned" DOUBLE PRECISION NOT NULL,
    "containerId" TEXT NOT NULL,
    "orderItemId" TEXT NOT NULL,

    CONSTRAINT "ContainerItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Container_containerNumber_key" ON "Container"("containerNumber");

-- AddForeignKey
ALTER TABLE "ContainerItem" ADD CONSTRAINT "ContainerItem_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContainerItem" ADD CONSTRAINT "ContainerItem_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
