import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ForgetPasswordModule } from './resetPassword/forget-password.module';
import { AuthModule } from './auth/auth.module';
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_IPTV'),
        UserModule,
        ForgetPasswordModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
