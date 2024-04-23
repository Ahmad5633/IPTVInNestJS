import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ForgetPasswordModule } from './forget-password/forget-password.module';
import { UpdatePasswordModule } from './update-password/update-password.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_IPTV'),
        UserModule,
        ForgetPasswordModule,
        UpdatePasswordModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
