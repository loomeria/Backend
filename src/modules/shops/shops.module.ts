import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';

@Module({
  controllers: [ShopsController],
  providers: [ShopsService, PrismaService, ProductsService],
})
export class ShopsModule {}
