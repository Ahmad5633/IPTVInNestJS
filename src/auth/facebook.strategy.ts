import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: process.env.Facebook_Client_ID,
      clientSecret: process.env.Facebook_Client_Secret,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
    const user = {
      facebookId: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      photoUrl: profile.photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
