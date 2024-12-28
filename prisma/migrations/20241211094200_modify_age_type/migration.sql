/*
  Warnings:

  - The primary key for the `Categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Preferencies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id_categories` on the `Categories` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_preference` on the `Customers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_preference` on the `Preferencies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_categories` on the `Preferencies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_categories` on the `Products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Customers" DROP CONSTRAINT "Customers_id_preference_fkey";

-- DropForeignKey
ALTER TABLE "Preferencies" DROP CONSTRAINT "Preferencies_id_categories_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_id_categories_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_pkey",
DROP
COLUMN "id_categories",
ADD COLUMN     "id_categories" INTEGER NOT NULL,
ADD CONSTRAINT "Categories_pkey" PRIMARY KEY ("id_categories");

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "id_preference",
ADD COLUMN     "id_preference" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Preferencies" DROP CONSTRAINT "Preferencies_pkey",
DROP
COLUMN "id_preference",
ADD COLUMN     "id_preference" INTEGER NOT NULL,
DROP
COLUMN "id_categories",
ADD COLUMN     "id_categories" INTEGER NOT NULL,
ADD CONSTRAINT "Preferencies_pkey" PRIMARY KEY ("id_preference");

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "id_categories",
ADD COLUMN     "id_categories" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Preferencies"
    ADD CONSTRAINT "Preferencies_id_categories_fkey" FOREIGN KEY ("id_categories") REFERENCES "Categories" ("id_categories") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers"
    ADD CONSTRAINT "Customers_id_preference_fkey" FOREIGN KEY ("id_preference") REFERENCES "Preferencies" ("id_preference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products"
    ADD CONSTRAINT "Products_id_categories_fkey" FOREIGN KEY ("id_categories") REFERENCES "Categories" ("id_categories") ON DELETE RESTRICT ON UPDATE CASCADE;
