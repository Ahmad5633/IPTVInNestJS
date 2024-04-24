import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ForgetPasswordModule } from './resetPassword/forget-password.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_IPTV'),
        UserModule,
        ForgetPasswordModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
