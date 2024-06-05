import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserModel } from './user.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: User.name, schema: UserModel }])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
