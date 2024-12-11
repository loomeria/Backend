/*
  Warnings:

  - The primary key for the `Sellers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id_seller` on the `Chats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_seller` on the `Sellers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_seller` on the `Shops` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_id_seller_fkey";

-- DropForeignKey
ALTER TABLE "Shops" DROP CONSTRAINT "Shops_id_seller_fkey";

-- AlterTable
ALTER TABLE "Chats" DROP COLUMN "id_seller",
ADD COLUMN     "id_seller" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sellers" DROP CONSTRAINT "Sellers_pkey",
DROP COLUMN "id_seller",
ADD COLUMN     "id_seller" INTEGER NOT NULL,
ADD CONSTRAINT "Sellers_pkey" PRIMARY KEY ("id_seller");

-- AlterTable
ALTER TABLE "Shops" DROP COLUMN "id_seller",
ADD COLUMN     "id_seller" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Shops" ADD CONSTRAINT "Shops_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "Sellers"("id_seller") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "Sellers"("id_seller") ON DELETE RESTRICT ON UPDATE CASCADE;
