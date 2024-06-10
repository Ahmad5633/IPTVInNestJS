import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Genre, GenreDocument } from './genre.model';
import { GenreSeries } from 'src/genreSeries/genreSeries.model';
import { Series } from 'src/series/series.model';
import { Season } from 'src/season/season.model';
import { Episode } from 'src/episode/episode.model';
import { Stream } from 'stream';
import mongoose  from 'mongoose';
@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre.name) private readonly genreModel: Model<GenreDocument>,
    @InjectModel(GenreSeries.name) private genreSeriesModel: Model<GenreSeries>,
    @InjectModel(Series.name) private seriesModel: Model<Series>,
    @InjectModel(Season.name) private seasonModel: Model<Season>,
    @InjectModel(Episode.name) private episodeModel: Model<Episode>,
    @InjectModel(Stream.name) private streamModel: Model<Stream>,
  ) {}
  async createGenre(genre: Genre): Promise<Genre> {
    const createdGenre = new this.genreModel(genre);
    return await createdGenre.save();
  }

  async findGenreById(id: string): Promise<Genre | null> {
    return this.genreModel.findById(id).exec();
  }

  async updateGenre(
    id: string,
    updateGenreDto: Partial<Genre>,
  ): Promise<Genre> {
    return this.genreModel
      .findByIdAndUpdate(id, updateGenreDto, { new: true })
      .exec();
  }

  async deleteGenre(id: string): Promise<Genre> {
    return this.genreModel.findByIdAndDelete(id).exec();
  }

  async getAllGenres(): Promise<Genre[]> {
    return this.genreModel.find().exec();
  }

  async getSeriesWithDetailsByGenre(genre: string) {

    return this.genreSeriesModel.aggregate([
      { $match: { genre_id: new mongoose.Types.ObjectId(genre) } },
      {
        $lookup: {
          from: 'series',
          localField: 'series_id',
          foreignField: '_id',
          as: 'series',
        },
      },
      { $unwind: '$series' },
      {
        $lookup: {
          from: 'seasons',
          localField: 'series._id',
          foreignField: 'series_id',
          as: 'series.seasons',
        },
      },
      {
        $unwind: { path: '$series.seasons', preserveNullAndEmptyArrays: true },
      },
      {
        $lookup: {
          from: 'episodes',
          localField: 'series.seasons._id',
          foreignField: 'season_id',
          as: 'series.seasons.episodes',
        },
      },
      {
        $unwind: {
          path: '$series.seasons.episodes',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'streams',
          localField: 'series.seasons.episodes._id',
          foreignField: 'episode_id',
          as: 'series.seasons.episodes.streams',
        },
      },
      {
        $group: {
          _id: '$series._id',
          title: { $first: '$series.title' },
          seasons: { $push: '$series.seasons' },
        },
      },
    ]);
  }
}
