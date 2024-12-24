import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersModule } from '../modules/users/users.module';
import { jwtConstants } from './constant';
import { APP_GUARD } from '@nestjs/core';
import { UsersService } from '../modules/users/users.service';
import { PrismaService } from '../modules/prisma/prisma.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import {ConfigModule} from "@nestjs/config";
import googleOauthConfig from "./config/google-oauth.config";
import {GoogleStrategy} from "./stategies/google.stategy";

// export const IS_PUBLIC_KEY = 'isPublic';
// export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60000000s' },

    }),
    ConfigModule.forFeature(googleOauthConfig)
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    LocalStrategy,
    JwtStrategy,
    PrismaService,
    UsersService,
      GoogleStrategy
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
