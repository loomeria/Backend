import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Address } from '@prisma/client';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Address) {
    return this.prisma.address.create({
      data: data,
    });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({
      where: { id_address: id },
    });
  }

  findAllByUserId(id: number) {
    return this.prisma.address.findMany({
      where: { id_user: id },
    });
  }

  update(id: number, updateAddressDto: Address) {
    return this.prisma.address.update({
      where: { id_address: id },
      data: updateAddressDto,
    });
  }

  remove(id: number) {
    return this.prisma.address.delete({
      where: { id_address: id },
    });
  }
}
