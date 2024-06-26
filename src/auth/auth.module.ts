import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { FacebookStrategy } from './facebook.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [    ConfigModule.forRoot(),
        PassportModule,PassportModule.register({ defaultStrategy: 'facebook' }),
    ],
    controllers: [AuthController],
    providers: [GoogleStrategy,FacebookStrategy],
})
export class AuthModule {}


