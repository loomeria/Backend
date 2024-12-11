import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Address, Sellers, Users } from '@prisma/client';
import { AddressService } from '../address/address.service';
import * as path from 'node:path';
import { SellersService } from '../sellers/sellers.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly addressService: AddressService,
    private readonly sellersService: SellersService,
  ) {}

  @Post()
  async createUser(
    @Body()
    createUserDto: Users,
  ): Promise<Users> {
    return this.usersService.createUser({ data: createUserDto });
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<Users> {
    return this.usersService.getUserById(id);
  }

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.getAllUsers();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: Partial<Users>,
  ): Promise<Users> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<Users> {
    return this.usersService.deleteUser(id);
  }

  @Get(':id/address')
  async getUserAddress(@Param('id') id: number): Promise<Address[]> {
    return this.addressService.findAllByUserId(id);
  }

  @Get(':id/address/:idAddress')
  async getUserAddressById(
    @Param('id') id: number,
    @Param('idAddress') idAddress: number,
  ): Promise<Address> {
    return this.addressService.findOne(idAddress);
  }

  @Patch(':id/address/:idAddress')
  async updateUserAddress(
    @Param('id') id: number,
    @Param('idAddress') idAddress: number,
    @Body() updateAddressDto: Address,
  ): Promise<Address> {
    return this.addressService.update(idAddress, updateAddressDto);
  }

  @Delete(':id/address/:idAddress')
  async deleteUserAddress(
    @Param('id') id: number,
    @Param('idAddress') idAddress: number,
  ): Promise<Address> {
    return this.addressService.remove(idAddress);
  }

  @Post(':id/sellers')
  async createSeller(
    @Param('id') id: number,
    @Body() seller: Sellers,
  ): Promise<Sellers> {
    return this.sellersService.create(seller);
  }

  @Get(':id/sellers')
  async getSellerByUserId(@Param('id') id: number): Promise<Sellers> {
    return this.sellersService.findOneByIdUser(id);
  }

  @Patch(':id/sellers')
  async updateSellerByUserId(
    @Param('id') id: number,
    @Body() seller: Sellers,
  ): Promise<Sellers> {
    return this.sellersService.updateByIdUser(id, seller);
  }

  @Delete(':id/sellers')
  async deleteSellerByUserId(@Param('id') id: number): Promise<Sellers> {
    return this.sellersService.removeByIdUser(id);
  }
}
