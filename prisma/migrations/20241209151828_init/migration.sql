-- CreateTable
CREATE TABLE "Baskets"
(
    "id_basket"  INTEGER      NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Baskets_pkey" PRIMARY KEY ("id_basket")
);

-- CreateTable
CREATE TABLE "Permissions"
(
    "id_permission" INTEGER      NOT NULL,
    "name"          VARCHAR(50)  NOT NULL,
    "created_at"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"    TIMESTAMP(3),
    "deleted_at"    TIMESTAMP(3),

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("id_permission")
);

-- CreateTable
CREATE TABLE "Collections"
(
    "id_collection" INTEGER     NOT NULL,
    "name"          VARCHAR(50) NOT NULL,
    "description"   VARCHAR(50),

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id_collection")
);

-- CreateTable
CREATE TABLE "Discounts"
(
    "id_discount" INTEGER     NOT NULL,
    "name"        VARCHAR(50) NOT NULL,
    "description" VARCHAR(50),
    "active"      BOOLEAN     NOT NULL,
    "percent"     VARCHAR(50) NOT NULL,
    "created_at"  TIMESTAMP(3),
    "updated_at"  TIMESTAMP(3),
    "deleted_at"  TIMESTAMP(3),

    CONSTRAINT "Discounts_pkey" PRIMARY KEY ("id_discount")
);

-- CreateTable
CREATE TABLE "Status"
(
    "id_state"    INTEGER NOT NULL,
    "name"        VARCHAR(50),
    "description" VARCHAR(50),

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id_state")
);

-- CreateTable
CREATE TABLE "Categories"
(
    "id_categories" VARCHAR(50)   NOT NULL,
    "internal_id"   DECIMAL(2, 1) NOT NULL,
    "name"          VARCHAR(50)   NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id_categories")
);

-- CreateTable
CREATE TABLE "Users"
(
    "id_user"       INTEGER      NOT NULL,
    "civility"      VARCHAR(50)  NOT NULL,
    "first_name"    VARCHAR(50)  NOT NULL,
    "last_name"     VARCHAR(50)  NOT NULL,
    "username"      VARCHAR(50)  NOT NULL,
    "mail"          VARCHAR(50)  NOT NULL,
    "verify_mail"   BOOLEAN      NOT NULL,
    "password"      VARCHAR(500) NOT NULL,
    "created_at"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"    TIMESTAMP(3),
    "deleted_at"    TIMESTAMP(3),
    "last_login"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_permission" INTEGER      NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Preferencies"
(
    "id_preference" VARCHAR(50) NOT NULL,
    "last_update"   TIMESTAMP(3),
    "id_categories" VARCHAR(50) NOT NULL,

    CONSTRAINT "Preferencies_pkey" PRIMARY KEY ("id_preference")
);

-- CreateTable
CREATE TABLE "Customers"
(
    "id_user"       INTEGER     NOT NULL,
    "id_preference" VARCHAR(50) NOT NULL,
    "id_basket"     INTEGER     NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Sellers"
(
    "id_seller" VARCHAR(50) NOT NULL,
    "siret"     VARCHAR(14) NOT NULL,
    "iban"      VARCHAR(34),
    "id_user"   INTEGER     NOT NULL,

    CONSTRAINT "Sellers_pkey" PRIMARY KEY ("id_seller")
);

-- CreateTable
CREATE TABLE "Address"
(
    "id_address" INTEGER        NOT NULL,
    "address"    VARCHAR(50)    NOT NULL,
    "address2"   VARCHAR(50),
    "city"       VARCHAR(50)    NOT NULL,
    "zipcode"    INTEGER        NOT NULL,
    "country"    VARCHAR(50),
    "phone"      DECIMAL(11, 0) NOT NULL,
    "created_at" TIMESTAMP(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "id_user"    INTEGER        NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id_address")
);

-- CreateTable
CREATE TABLE "Orders"
(
    "id_order"   INTEGER      NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shipping"   JSONB        NOT NULL,
    "provider"   VARCHAR(50)  NOT NULL,
    "id_user"    INTEGER      NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id_order")
);

-- CreateTable
CREATE TABLE "Shops"
(
    "id_shop"     VARCHAR(50)   NOT NULL,
    "name"        VARCHAR(50)   NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "address"     VARCHAR(100),
    "id_seller"   VARCHAR(50)   NOT NULL,

    CONSTRAINT "Shops_pkey" PRIMARY KEY ("id_shop")
);

-- CreateTable
CREATE TABLE "Wishlists"
(
    "id_wishlist" VARCHAR(50)  NOT NULL,
    "name"        INTEGER      NOT NULL,
    "created_at"  TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"  TIMESTAMP(3),
    "deleted_at"  TIMESTAMP(3),
    "id_user"     INTEGER      NOT NULL,

    CONSTRAINT "Wishlists_pkey" PRIMARY KEY ("id_wishlist")
);

-- CreateTable
CREATE TABLE "Chats"
(
    "id_chat"   VARCHAR(100) NOT NULL,
    "message"   VARCHAR(50)  NOT NULL,
    "id_user"   INTEGER      NOT NULL,
    "id_seller" VARCHAR(50)  NOT NULL,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("id_chat")
);

-- CreateTable
CREATE TABLE "Products"
(
    "id_product"    INTEGER       NOT NULL,
    "title"         VARCHAR(50)   NOT NULL,
    "description"   VARCHAR(1000),
    "price"         DECIMAL(6, 2) NOT NULL,
    "shipping"      DECIMAL(4, 2) NOT NULL,
    "quantity"      INTEGER       NOT NULL,
    "created_at"    TIMESTAMP(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at"    TIMESTAMP(3),
    "deleted_at"    TIMESTAMP(3),
    "id_categories" VARCHAR(50)   NOT NULL,
    "id_discount"   INTEGER,
    "id_collection" INTEGER       NOT NULL,
    "id_shop"       VARCHAR(50)   NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "Histories"
(
    "id_history" VARCHAR(50)  NOT NULL,
    "product_id" INTEGER      NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_read"    TIMESTAMP(3) NOT NULL,
    "id_user"    INTEGER      NOT NULL,

    CONSTRAINT "Histories_pkey" PRIMARY KEY ("id_history")
);

-- CreateTable
CREATE TABLE "Pictures"
(
    "id_picture" VARCHAR(50) NOT NULL,
    "url"        VARCHAR(100),
    "id_product" INTEGER     NOT NULL,

    CONSTRAINT "Pictures_pkey" PRIMARY KEY ("id_picture")
);

-- CreateTable
CREATE TABLE "Reviews"
(
    "id_review"  INTEGER       NOT NULL,
    "stars"      DECIMAL(1, 0) NOT NULL,
    "quote"      VARCHAR(50),
    "id_product" INTEGER       NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id_review")
);

-- CreateTable
CREATE TABLE "Messages"
(
    "id_message" INTEGER      NOT NULL,
    "is_seller"  BOOLEAN      NOT NULL,
    "is_read"    TIMESTAMP(3),
    "message"    VARCHAR(50)  NOT NULL,
    "id_chat"    VARCHAR(100) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id_message")
);

-- CreateTable
CREATE TABLE "Attachments"
(
    "id_attachment" INTEGER      NOT NULL,
    "url"           VARCHAR(100) NOT NULL,
    "id_message"    INTEGER      NOT NULL,

    CONSTRAINT "Attachments_pkey" PRIMARY KEY ("id_attachment")
);

-- CreateTable
CREATE TABLE "OrdersHasProducts"
(
    "id_order"   INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "OrdersHasProducts_pkey" PRIMARY KEY ("id_order", "id_product")
);

-- CreateTable
CREATE TABLE "BasketsHasProduct"
(
    "id_basket"  INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "BasketsHasProduct_pkey" PRIMARY KEY ("id_basket", "id_product")
);

-- CreateTable
CREATE TABLE "OrdersHasStatus"
(
    "id_order" INTEGER NOT NULL,
    "id_state" INTEGER NOT NULL,

    CONSTRAINT "OrdersHasStatus_pkey" PRIMARY KEY ("id_order", "id_state")
);

-- CreateTable
CREATE TABLE "WhishlistsHasProducts"
(
    "id_wishlist" TEXT    NOT NULL,
    "id_product"  INTEGER NOT NULL,

    CONSTRAINT "WhishlistsHasProducts_pkey" PRIMARY KEY ("id_wishlist", "id_product")
);

-- CreateTable
CREATE TABLE "_ChatsToUsers"
(
    "A" VARCHAR(100) NOT NULL,
    "B" INTEGER      NOT NULL,

    CONSTRAINT "_ChatsToUsers_AB_pkey" PRIMARY KEY ("A", "B")
);

-- CreateTable
CREATE TABLE "_HistoriesToUsers"
(
    "A" VARCHAR(50) NOT NULL,
    "B" INTEGER     NOT NULL,

    CONSTRAINT "_HistoriesToUsers_AB_pkey" PRIMARY KEY ("A", "B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_name_key" ON "Permissions" ("name");

-- CreateIndex
CREATE INDEX "_ChatsToUsers_B_index" ON "_ChatsToUsers" ("B");

-- CreateIndex
CREATE INDEX "_HistoriesToUsers_B_index" ON "_HistoriesToUsers" ("B");

-- AddForeignKey
ALTER TABLE "Users"
    ADD CONSTRAINT "Users_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "Permissions" ("id_permission") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preferencies"
    ADD CONSTRAINT "Preferencies_id_categories_fkey" FOREIGN KEY ("id_categories") REFERENCES "Categories" ("id_categories") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers"
    ADD CONSTRAINT "Customers_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers"
    ADD CONSTRAINT "Customers_id_preference_fkey" FOREIGN KEY ("id_preference") REFERENCES "Preferencies" ("id_preference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers"
    ADD CONSTRAINT "Customers_id_basket_fkey" FOREIGN KEY ("id_basket") REFERENCES "Baskets" ("id_basket") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sellers"
    ADD CONSTRAINT "Sellers_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address"
    ADD CONSTRAINT "Address_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders"
    ADD CONSTRAINT "Orders_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Customers" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shops"
    ADD CONSTRAINT "Shops_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "Sellers" ("id_seller") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlists"
    ADD CONSTRAINT "Wishlists_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Customers" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats"
    ADD CONSTRAINT "Chats_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Customers" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats"
    ADD CONSTRAINT "Chats_id_seller_fkey" FOREIGN KEY ("id_seller") REFERENCES "Sellers" ("id_seller") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products"
    ADD CONSTRAINT "Products_id_categories_fkey" FOREIGN KEY ("id_categories") REFERENCES "Categories" ("id_categories") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products"
    ADD CONSTRAINT "Products_id_discount_fkey" FOREIGN KEY ("id_discount") REFERENCES "Discounts" ("id_discount") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products"
    ADD CONSTRAINT "Products_id_collection_fkey" FOREIGN KEY ("id_collection") REFERENCES "Collections" ("id_collection") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products"
    ADD CONSTRAINT "Products_id_shop_fkey" FOREIGN KEY ("id_shop") REFERENCES "Shops" ("id_shop") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Histories"
    ADD CONSTRAINT "Histories_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Customers" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pictures"
    ADD CONSTRAINT "Pictures_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews"
    ADD CONSTRAINT "Reviews_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages"
    ADD CONSTRAINT "Messages_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "Chats" ("id_chat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachments"
    ADD CONSTRAINT "Attachments_id_message_fkey" FOREIGN KEY ("id_message") REFERENCES "Messages" ("id_message") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersHasProducts"
    ADD CONSTRAINT "OrdersHasProducts_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Orders" ("id_order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersHasProducts"
    ADD CONSTRAINT "OrdersHasProducts_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketsHasProduct"
    ADD CONSTRAINT "BasketsHasProduct_id_basket_fkey" FOREIGN KEY ("id_basket") REFERENCES "Baskets" ("id_basket") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketsHasProduct"
    ADD CONSTRAINT "BasketsHasProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersHasStatus"
    ADD CONSTRAINT "OrdersHasStatus_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Orders" ("id_order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersHasStatus"
    ADD CONSTRAINT "OrdersHasStatus_id_state_fkey" FOREIGN KEY ("id_state") REFERENCES "Status" ("id_state") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhishlistsHasProducts"
    ADD CONSTRAINT "WhishlistsHasProducts_id_wishlist_fkey" FOREIGN KEY ("id_wishlist") REFERENCES "Wishlists" ("id_wishlist") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhishlistsHasProducts"
    ADD CONSTRAINT "WhishlistsHasProducts_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products" ("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatsToUsers"
    ADD CONSTRAINT "_ChatsToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Chats" ("id_chat") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatsToUsers"
    ADD CONSTRAINT "_ChatsToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HistoriesToUsers"
    ADD CONSTRAINT "_HistoriesToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Histories" ("id_history") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HistoriesToUsers"
    ADD CONSTRAINT "_HistoriesToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
