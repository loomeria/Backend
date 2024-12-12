import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
  Res,
  SetMetadata,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../modules/users/users.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Response } from 'express';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>, @Res() res: Response) {
    try {
      //verify if the user exists
      const user = await this.usersService.findOne(signInDto.username);
      console.log(user);

      if (!user) {
        throw new UnauthorizedException();
      }

      const token = await this.authService.signIn(
        signInDto.username,
        signInDto.password,
      );

      console.log(token);
      // Set the token in the response header
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 3600000,
      });

      // Optionally send a response body or just end the response
      return res.status(200).send({ message: 'Login successful' });
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

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }
}
