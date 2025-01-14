/*
  Warnings:

  - The primary key for the `Shops` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id_shop` on the `Products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_shop` on the `Shops` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_id_shop_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "id_shop",
ADD COLUMN     "id_shop" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shops" DROP CONSTRAINT "Shops_pkey",
DROP
COLUMN "id_shop",
ADD COLUMN     "id_shop" INTEGER NOT NULL,
ADD CONSTRAINT "Shops_pkey" PRIMARY KEY ("id_shop");

-- AddForeignKey
ALTER TABLE "Products"
    ADD CONSTRAINT "Products_id_shop_fkey" FOREIGN KEY ("id_shop") REFERENCES "Shops" ("id_shop") ON DELETE RESTRICT ON UPDATE CASCADE;
