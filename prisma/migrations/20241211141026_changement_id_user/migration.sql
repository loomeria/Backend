/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_id_user_key" ON "Users" ("id_user");
