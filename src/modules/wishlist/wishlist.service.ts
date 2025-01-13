import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Wishlists } from '@prisma/client';

@Injectable()
export class WishlistService {
  constructor(private prisma: PrismaService) {}

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlists> {
    return this.prisma.wishlists.create({
      data: createWishlistDto,
    });
  }

  async findAll(): Promise<Wishlists[]> {
    return this.prisma.wishlists.findMany();
  }

  async findOne(id: string): Promise<Wishlists | null> {
    return this.prisma.wishlists.findUnique({
      where: { id_wishlist: id },
    });
  }

  async update(
    id: string,
    updateWishlistDto: UpdateWishlistDto,
  ): Promise<Wishlists> {
    return this.prisma.wishlists.update({
      where: { id_wishlist: id },
      data: updateWishlistDto,
    });
  }

  async remove(id: string): Promise<Wishlists> {
    return this.prisma.wishlists.delete({
      where: { id_wishlist: id },
    });
  }
}
