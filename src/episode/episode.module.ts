import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import { Episode, EpisodeModel } from './episode.model';
import { StreamModel } from '../stream/stream.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Episode.name, schema: EpisodeModel }]),
        MongooseModule.forFeature([{ name: 'Stream', schema: StreamModel }]),
    ],
    controllers: [EpisodeController],
    providers: [EpisodeService],
    exports: [EpisodeService],
})
export class EpisodeModule {}
