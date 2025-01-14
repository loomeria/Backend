-- DropIndex
DROP INDEX "Users_id_user_key";

-- AlterTable
CREATE SEQUENCE users_id_user_seq;
ALTER TABLE "Users"
    ALTER COLUMN "id_user" SET DEFAULT nextval('users_id_user_seq');
ALTER SEQUENCE users_id_user_seq OWNED BY "Users"."id_user";
