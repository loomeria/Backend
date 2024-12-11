import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ShopsController],
  providers: [ShopsService, PrismaService],
})
export class ShopsModule {}
