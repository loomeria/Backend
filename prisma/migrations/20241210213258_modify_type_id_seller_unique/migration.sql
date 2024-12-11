/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `Sellers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sellers_id_user_key" ON "Sellers"("id_user");
