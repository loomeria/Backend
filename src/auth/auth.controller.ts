import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
  SetMetadata,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UsersService } from '../modules/users/users.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>) {
    try {
      //verify if the user exists
      const user = await this.usersService.findOne(signInDto.username);
      console.log(user);
      if (!user) {
        throw new UnauthorizedException();
      }

      return this.authService.signIn(signInDto.username, signInDto.password);
    } catch (error) {
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

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
