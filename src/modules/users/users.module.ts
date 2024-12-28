import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './users.service';
import { AddressService } from '../address/address.service';
import { SellersService } from '../sellers/sellers.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AddressService, SellersService],
})
export class UsersModule {}
