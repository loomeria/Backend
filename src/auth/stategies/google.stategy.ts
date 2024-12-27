import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';

import { ConfigType } from '@nestjs/config';
import googleOauthConfig from '../config/google-oauth.config';
import { AuthService } from '../auth.service';
import { Users } from '@prisma/client';
import { UserCreateDto } from '../../modules/users/dto/create-users.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(googleOauthConfig.KEY)
    private googleConfiguration: ConfigType<typeof googleOauthConfig>,
    private authService: AuthService,
  ) {
    super({
      clientID: googleConfiguration.clientID,
      clientSecret: googleConfiguration.clientSecret,
      callbackURL: googleConfiguration.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log({ profile });

    const userData: Users = {
      id_user: null,
      civility: 'Mr',
      username: profile.name.givenName,
      mail: profile.emails[0].value,
      first_name: profile.name.givenName,
      last_name: profile.name.familyName,
      password: '',
      id_permission: 1,
      verify_mail: true,
      created_at: null,
      updated_at: null,
      deleted_at: null,
      last_login: null,
    };

    UserCreateDto.safeParse(userData);
    console.log('validate : ' + JSON.stringify(userData));

    const user = await this.authService.validateGoogleUser(userData);

    done(null, user);
  }
}
