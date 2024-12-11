import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Shops } from '@prisma/client';

@Injectable()
export class ShopsService {
  constructor(private readonly prisma: PrismaService) {}

  create(shop: Shops) {
    return this.prisma.shops.create({
      data: shop,
    });
  }

  // findAll() {
  //   return this.prisma.shops.findMany();
  // }

  findAllByIdSeller(id: number) {
    return this.prisma.shops.findMany({
      where: {
        id_seller: id,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.shops.findUnique({
      where: {
        id_shop: id,
      },
    });
  }

  update(id: number, shops: Shops) {
    return this.prisma.shops.update({
      where: {
        id_shop: id,
      },
      data: shops,
    });
  }

  remove(id: number) {
    return this.prisma.shops.delete({
      where: {
        id_shop: id,
      },
    });
  }
}
