import { Module } from '@nestjs/common';
import { WhishlistsService } from './whishlists.service';
import { WhishlistsController } from './whishlists.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [WhishlistsController],
  providers: [WhishlistsService, PrismaService],
})
export class WhishlistsModule {}
