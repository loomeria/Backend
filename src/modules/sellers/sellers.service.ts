import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Sellers } from '@prisma/client';

@Injectable()
export class SellersService {
  constructor(private readonly prisma: PrismaService) {}

  create(seller: Sellers) {
    return this.prisma.sellers.create({
      data: seller,
    });
  }

  // findAll() {
  //   return this.prisma.sellers.findMany();
  // }

  findOneByIdSeller(id: number) {
    return this.prisma.sellers.findUnique({
      where: {
        id_seller: id,
      },
    });
  }

  findOneByIdUser(id: number) {
    return this.prisma.sellers.findFirst({
      where: {
        id_user: id,
      },
    });
  }

  async updateByIdUser(id: number, seller: Sellers) {
    return this.prisma.sellers.update({
      where: {
        id_user: id,
      },
      data: seller,
    });
  }


  removeByIdUser(id: number) {
    return this.prisma.sellers.delete({
      where: {
        id_user: id,
      },
    });
  }

  // update(id: number, updateSellerDto: UpdateSellerDto) {
  //   return this.prisma.sellers.update({
  //     where: {
  //       id_seller: id,
  //     },
  //     data: updateSellerDto,
  //   });
  // }
  //
  // remove(id: number) {
  //   return this.prisma.sellers.delete({
  //     where: {
  //       id_seller: id,
  //     },
  //   });
  // }
}
