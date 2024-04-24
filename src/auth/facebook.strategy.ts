import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
// import googleData from '../env/env';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      // clientID: googleData.facebookclientID,
      // clientSecret: googleData.facebookclientID,

      clientID: '1888437871591715',
      clientSecret: '89a1927abffb26ffeac3f77f67826c7d',
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
