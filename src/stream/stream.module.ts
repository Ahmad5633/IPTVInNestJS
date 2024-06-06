import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';
import { Stream, StreamModel } from './stream.model';
import { ConfigModule } from '@nestjs/config';
import { User, UserModel } from '../user/user.model';
@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Stream.name, schema: StreamModel }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
    ],
    controllers: [StreamController],
    providers: [StreamService],
    exports: [StreamService],
})
export class StreamModule {}
