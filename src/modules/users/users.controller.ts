import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Address, Sellers, Users } from '@prisma/client';
import { AddressService } from '../address/address.service';
import { SellersService } from '../sellers/sellers.service';
import { UserCreateDto } from './dto/create-users.dto';
import { UserUpdateDto } from './dto/update-users.dto';

const ERROR_MESSAGE_PASSWORD_INVALIDE =
  'The password must be at least 8 characters long, include at least one lowercase letter, one uppercase letter, one number, and one special character (@, $, !, %, *, ?, &, -, _, or #), and must not contain spaces.';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly addressService: AddressService,
    private readonly sellersService: SellersService,
  ) {}

  @Post()
  async createUser(@Body() user: Users): Promise<Users> {
    try {
      if (UserCreateDto.safeParse(user).success === false) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Invalid data',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (UsersService.passwordIsValid(user.password) === false) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: ERROR_MESSAGE_PASSWORD_INVALIDE,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (await this.usersService.usernameAlreadyExists(user.username)) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Username already exists',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.usersService.createUser({ data: user });
    } catch (error) {
      // If the error is already an HttpException, rethrow it
      if (error instanceof HttpException) {
        throw error;
      }

      // Otherwise, wrap the error in an INTERNAL_SERVER_ERROR
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'An unexpected error occurred',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<Users> {
    try {
      const user = await this.usersService.getUserById(Number(id));

      if (!user) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'User not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'An unexpected error occurred',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @Get()
  // async getAllUsers(): Promise<Users[]> {
  //   return this.usersService.getAllUsers();
  // }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: Partial<Users>,
  ): Promise<Users> {
    try {
      if (UserUpdateDto.safeParse(user).success === false) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Invalid data',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (
        await this.usersService.usernameAlreadyExistsExceptCurrentUsername(
          user.username,
          Number(id),
        )
      ) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Username already exists',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.usersService.updateUser(Number(id), user);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'An unexpected error occurred',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<Users> {
    try {
      if (!(await this.usersService.userExistsById(Number(id)))) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'User not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      return this.usersService.deleteUser(Number(id));
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'An unexpected error occurred',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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

  @Patch(':id/password')
  async updatePassword(
    @Param('id') id: number,
    @Body('password') password: string,
  ): Promise<Users> {
    try {
      if (UsersService.passwordIsValid(password) === false) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: ERROR_MESSAGE_PASSWORD_INVALIDE,
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        return this.usersService.UpdatePassword(Number(id), password);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message || 'An unexpected error occurred',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
