import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ShopsService } from '../shops/shops.service';

@Module({
  controllers: [SellersController],
  providers: [SellersService, PrismaService, ShopsService],
})
export class SellersModule {}
