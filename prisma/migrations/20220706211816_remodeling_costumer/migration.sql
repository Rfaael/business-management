/*
  Warnings:

  - You are about to drop the column `costumer_id` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `Costumer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `last_name` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costumer_id_online` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costumer_id_presencial` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_costumer_id_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "last_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "costumer_id",
ADD COLUMN     "costumer_id_online" TEXT NOT NULL,
ADD COLUMN     "costumer_id_presencial" TEXT NOT NULL;

-- DropTable
DROP TABLE "Costumer";

-- CreateTable
CREATE TABLE "Costumer_presencial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "adress" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Costumer_presencial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Costumer_online" (
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

    CONSTRAINT "Costumer_online_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_costumer_id_presencial_fkey" FOREIGN KEY ("costumer_id_presencial") REFERENCES "Costumer_presencial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_costumer_id_online_fkey" FOREIGN KEY ("costumer_id_online") REFERENCES "Costumer_online"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
