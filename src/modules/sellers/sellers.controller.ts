import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { ShopsService } from '../shops/shops.service';
import { Shops } from '@prisma/client';

@Controller('sellers')
export class SellersController {
  constructor(
    private readonly sellersService: SellersService,
    private readonly shopService: ShopsService,
  ) {}

  @Get(':id/shops')
  getAllShopsByIdSeller(@Param('id') id: string) {
    return this.shopService.findAllByIdSeller(+id);
  }

  @Post(':id/shops')
  createShopByIdSeller(@Param('id') id: string, @Body() shop: Shops) {
    return this.shopService.create(shop);
  }

  // @Post()
  // create(@Body() seller: Sellers) {
  //   return this.sellersService.create(seller);
  // }

  // @Get()
  // findAll() {
  //   return this.sellersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sellersService.findOne(+id);
  // }

  // @Get(':id')
  // findOneByIdUser(@Param('id') id: string) {
  //   return this.sellersService.findOneByIdUser(+id);
  // }
  //
  // @Patch(':id')
  // updateByIdUser(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
  //   return this.sellersService.u(+id, updateSellerDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSellerDto: UpdateSellerDto) {
  //   return this.sellersService.update(+id, updateSellerDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sellersService.remove(+id);
  // }
}
