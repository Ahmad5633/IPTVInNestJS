import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { Genre, GenreModel } from './genre.model';
import { ConfigModule } from '@nestjs/config';
import {GenreSeries,GenreSeriesModel} from 'src/genreSeries/genreSeries.model';
import { Series, SeriesModel } from 'src/series/series.model';
import { Episode, EpisodeModel } from 'src/episode/episode.model';
import { Season, SeasonModel } from 'src/season/season.model';
import { Stream, StreamModel } from 'src/stream/stream.model';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Genre.name, schema: GenreModel },
      { name: GenreSeries.name, schema: GenreSeriesModel },
      { name: Series.name, schema: SeriesModel },
      { name: Episode.name, schema: EpisodeModel },
      { name: Season.name, schema: SeasonModel },
      { name: Stream.name, schema: StreamModel },
    ]),
  ],
  controllers: [GenreController],
  providers: [GenreService],
  exports: [GenreService],
})
export class GenreModule {}
