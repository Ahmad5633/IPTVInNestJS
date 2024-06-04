import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreSeriesController } from './genreSeries.controller';
import { GenreSeriesService } from './genreSeries.service';
import { GenreSeries, GenreSeriesModel } from './genreSeries.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: GenreSeries.name, schema: GenreSeriesModel }])],
    controllers: [GenreSeriesController],
    providers: [GenreSeriesService],
    exports: [GenreSeriesService],
})
export class GenreSeriesModule {}
