/*
  Warnings:

  - You are about to drop the `Costumer_online` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Costumer_presencial` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_costumer_id_online_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_costumer_id_presencial_fkey";

-- DropTable
DROP TABLE "Costumer_online";

-- DropTable
DROP TABLE "Costumer_presencial";

-- CreateTable
CREATE TABLE "CostumerPresencial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "adress" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostumerPresencial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostumerOnline" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "adress" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostumerOnline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_costumer_id_presencial_fkey" FOREIGN KEY ("costumer_id_presencial") REFERENCES "CostumerPresencial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_costumer_id_online_fkey" FOREIGN KEY ("costumer_id_online") REFERENCES "CostumerOnline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
