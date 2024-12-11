import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShopsService } from './shops.service';
import { Shops } from '@prisma/client';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post()
  create(@Body() shop: Shops) {
    return this.shopsService.create(shop);
  }

  // @Get()
  // findAll() {
  //   return this.shopsService.findAll();
  // }

  // @Get(':id')
  // findAllByIdSeller(@Param('id') id: string) {
  //   return this.shopsService.findAllByIdSeller(+id);
  // }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.shopsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() shops: Shops) {
    return this.shopsService.update(+id, shops);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopsService.remove(+id);
  }
}
