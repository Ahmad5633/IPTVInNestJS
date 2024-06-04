import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { GenreModule } from  './genre/genre.module'
import { ForgetPasswordModule } from './resetPassword/forget-password.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_IPTV'),
        UserModule,
        GenreModule,
        ForgetPasswordModule,
        AuthModule,
        EventsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
