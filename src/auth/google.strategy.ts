import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// import googleData from "../env/env";
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
     
        super({            
      
            // clientID: googleData.googleClientId,
            // clientSecret: googleData.googleClientSecret,
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            name: name.givenName + ' ' + name.familyName,
            picture: photos[0].value,
            accessToken,
            refreshToken,
        };
        done(null, user);
    }
}


