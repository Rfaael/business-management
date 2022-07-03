/*
  Warnings:

  - You are about to drop the column `permissions` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `permissions_list` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "permissions",
ADD COLUMN     "permissions_list" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Permissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "addNewEmployee" BOOLEAN NOT NULL,
    "deleteAnEmployee" BOOLEAN NOT NULL,
    "updateAnEmployee" BOOLEAN NOT NULL,
    "getCompanyProfile" BOOLEAN NOT NULL,
    "createAnewCostumerProfile" BOOLEAN NOT NULL,
    "getCostumerProfile" BOOLEAN NOT NULL,
    "createAnewSale" BOOLEAN NOT NULL,
    "createAnewService" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_permissions_list_fkey" FOREIGN KEY ("permissions_list") REFERENCES "Permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
