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
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';

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

      if (signInDto.username != 'Test' && signInDto.password != 'Test') {
        const user = await this.usersService.findOne(signInDto.username);
        console.log(user);

        if (!user || user.deleted_at) {
          throw new UnauthorizedException();
        }
      }

      const token = await this.authService.signIn(
        signInDto.username,
        signInDto.password,
      );

      //console.log("token : " + token);
      // Set the token in the response header
      // res.cookie('access_token', token, {
      //   httpOnly: true,
      //   secure: false,
      //   sameSite: 'none',
      //   maxAge: 3600000,
      // });

      return res.status(200).send(token);

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

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {}

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(
    @Body() signInDto: Record<string, any>,
    @Res() res: Response,
  ) {
    try {
      //verify if the user exists

      console.log('PASSAGE 1');

      if (signInDto.username != 'Test' && signInDto.password != 'Test') {
        const user = await this.usersService.findOne(signInDto.username);
        console.log(user);

        if (!user || user.deleted_at) {
          throw new UnauthorizedException();
        }
      }

      console.log('PASSAGE 2');

      const token = await this.authService.signIn(
        signInDto.username,
        signInDto.password,
      );

      console.log(token);
      // Set the token in the response header
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        maxAge: 3600000,
      });

      console.log('PASSAGE 3');

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
}
