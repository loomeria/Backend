import {PassportStrategy} from "@nestjs/passport";
import {Strategy, VerifyCallback} from "passport-google-oauth20";
import {Inject, Injectable} from "@nestjs/common";

import {ConfigType} from "@nestjs/config";
import googleOauthConfig from "../config/google-oauth.config";
import {AuthService} from "../auth.service";
import {Users} from "@prisma/client";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(
        @Inject(googleOauthConfig.KEY)
        private googleConfiguration: ConfigType<typeof googleOauthConfig>,
        private authService: AuthService,
    ) {
        super({
            clientID:googleConfiguration.clientID,
            clientSecret:googleConfiguration.clientSecret,
            callbackURL:googleConfiguration.callbackURL,
            scope:['email','profile'],
        });
    }

    async validate(accessToken:string, refreshToken:string, profile:any, done:VerifyCallback){
        console.log({profile});

        const userData: Users = {
            id_user : 0,
            civility : "Mr",
            username : profile.name.givenName,
            mail: profile.emails[0].value,
            id_permission: 1,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            password: "",
            verify_mail : true,
            created_at : null,
            updated_at : null,
            deleted_at :null,
            last_login : null,
        };

        const user = await this.authService.validateGoogleUser({ data: userData });

        done(null, user);
    }
}