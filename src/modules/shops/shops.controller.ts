import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ShopsService } from './shops.service';
import { Shops } from '@prisma/client';
import { ProductsService } from '../products/products.service';

@Controller('shops')
export class ShopsController {
  constructor(
    private readonly shopsService: ShopsService,
    private readonly productsService: ProductsService,
  ) {}

  @Post()
  create(@Body() shop: Shops) {
    return this.shopsService.create(shop);
  }

  @Get(':id/products')
  findAllProductsByIdShop(@Param('id') id: string) {
    return this.productsService.findAllByIdShop(+id);
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
