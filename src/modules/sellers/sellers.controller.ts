import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Sellers } from '@prisma/client';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

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
