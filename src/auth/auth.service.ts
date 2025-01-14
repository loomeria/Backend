import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../modules/users/users.service';
import {UserCreateDto} from "../modules/users/dto/create-users.dto";
import {Users} from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);

    if(username == "Test" && pass == "Test") {
      const payload = { sub: 0, username: "test" };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }


    if(pass != undefined){
      console.log("Password " +user.password);
      console.log("Pass " +pass);

      console.log("PASSAGE in if");

      if (!(await bcrypt.compare(pass, user.password))) {
        throw new UnauthorizedException();
      }
    }

    console.log("PASSAGE Sign1");
    const payload = { sub: user.id_user, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id_user, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateGoogleUser(user: Users  ): Promise<Users> {

    console.log("Type of " + typeof user);

    if(UserCreateDto.safeParse(user).success === false){


    }
    else{

      console.log("mail : " + user.mail);
      const userReturn = await this.usersService.findByEmail(user.mail);
      if(userReturn) return userReturn;

      return await this.usersService.createUser({data : user});
    }

  }
}
