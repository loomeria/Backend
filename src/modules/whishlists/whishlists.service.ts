import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WhishlistsHasProducts, Wishlists } from '@prisma/client';

@Injectable()
export class WhishlistsService {
  constructor(private readonly prisma: PrismaService) {}

  create(wishlists: Wishlists) {
    return this.prisma.wishlists.create({
      data: wishlists,
    });
  }

  create_entry(whishlistsHasProducts: WhishlistsHasProducts) {
    this.prisma.whishlistsHasProducts.create({
      data: whishlistsHasProducts,
    });
  }

  findOne(id: string) {
    return this.prisma.wishlists.findUnique({
      where: {
        id_wishlist: id,
      },
    });
  }

  findAll() {
    return this.prisma.wishlists.findMany();
  }

  update(id: string, wishlists: Wishlists) {
    return this.prisma.wishlists.update({
      where: {
        id_wishlist: id,
      },
      data: wishlists,
    });
  }

  remove(id: string) {
    return this.prisma.wishlists.delete({
      where: {
        id_wishlist: id,
      },
    });
  }

  remove_entry(id_wishlist: string, id_product: number) {
    return this.prisma.whishlistsHasProducts.delete({
      where: {
        id_wishlist_id_product: {
          id_wishlist: id_wishlist,
          id_product: id_product,
        },
      },
    });
  }
}
