import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';
import { Stream, StreamModel } from './stream.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Stream.name, schema: StreamModel }])],
    controllers: [StreamController],
    providers: [StreamService],
    exports: [StreamService],
})
export class StreamModule {}
