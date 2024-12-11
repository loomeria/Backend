import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import databaseConfig from '../config/database.config';
import { AuthService } from './auth/auth.service';
import { UsersService } from './modules/users/users.service';
import { PrismaService } from './modules/prisma/prisma.service';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { AddressModule } from './modules/address/address.module';
import { SellersModule } from './modules/sellers/sellers.module';
import { ShopsModule } from './modules/shops/shops.module';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
      load: [databaseConfig],
      cache: true,
    }),
    UsersModule,
    AuthModule,
    PermissionsModule,
    AddressModule,
    SellersModule,
    ShopsModule,
  ],
  controllers: [],
  providers: [AppService, AuthService, PrismaService, UsersService],
})
export class AppModule {}
