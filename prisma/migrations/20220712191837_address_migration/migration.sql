/*
  Warnings:

  - You are about to drop the column `adress` on the `CostumerOnline` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `CostumerPresencial` table. All the data in the column will be lost.
  - Added the required column `address` to the `CostumerOnline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `CostumerPresencial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CostumerOnline" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CostumerPresencial" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;
