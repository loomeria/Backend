import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WhishlistsService } from './whishlists.service';
import { WhishlistsHasProducts, Wishlists } from '@prisma/client';
import { ApiBody } from '@nestjs/swagger';

@Controller('whishlists')
export class WhishlistsController {
  constructor(private readonly whishlistsService: WhishlistsService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
    },
  })
  @Post()
  create(@Body() wishlists: Wishlists) {
    return this.whishlistsService.create(wishlists);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id_wishlist: { type: 'number' },
        id_product: { type: 'number' },
      },
    },
  })
  @Post('entry')
  create_entry(@Body() whishlistsHasProducts: WhishlistsHasProducts) {
    return this.whishlistsService.create_entry(whishlistsHasProducts);
  }

  @Get()
  findAll() {
    return this.whishlistsService.findAll();
  }

  @Get(':id_wishlist')
  findOne(@Param('id_wishlist') id_wishlist: string) {
    return this.whishlistsService.findOne(id_wishlist);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        id_wishlist: { type: 'number' },
      },
    },
  })
  @Patch(':id_wishlist')
  update(
    @Param('id_wishlist') id_wishlist: string,
    @Body() wishlists: Wishlists,
  ) {
    return this.whishlistsService.update(id_wishlist, wishlists);
  }

  @Delete(':id_wishlist')
  remove(@Param('id_wishlist') id_wishlist: string) {
    return this.whishlistsService.remove(id_wishlist);
  }

  @Delete('entry/:id_wishlist/:id_product')
  remove_entry(
    @Param('id_wishlist') id_wishlist: string,
    @Param('id_product') id_product: number,
  ) {
    return this.whishlistsService.remove_entry(id_wishlist, id_product);
  }
}
