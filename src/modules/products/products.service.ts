import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(product: Products) {
    return this.prisma.products.create({
      data: product,
    });
  }

  findAllByIdShop(id: number) {
    return this.prisma.products.findMany({
      where: {
        id_shop: id,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.products.findUnique({
      where: {
        id_product: id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.products.update({
      where: {
        id_product: id,
      },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.products.delete({
      where: {
        id_product: id,
      },
    });
  }
}
