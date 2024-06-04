import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenreSeries, GenreSeriesDocument } from './genreSeries.model';

@Injectable()
export class GenreSeriesService {
    constructor(@InjectModel(GenreSeries.name) private readonly genreSeriesModel: Model<GenreSeriesDocument>) {}
    async createGenreSeries(genreSeries: GenreSeries): Promise<GenreSeries> {
        const createdGenreSeries = new this.genreSeriesModel(genreSeries);
        return await createdGenreSeries.save();
      }

    async findGenreSeriesById(id: string): Promise<GenreSeries | null> {
        return this.genreSeriesModel.findById( id ).exec();
    }

    async updateGenreSeries(id: string, updateGenreSeriesDto: Partial<GenreSeries>): Promise<GenreSeries> {
        return this.genreSeriesModel.findByIdAndUpdate(id, updateGenreSeriesDto, { new: true }).exec();
    }

    async deleteGenreSeries(id: string): Promise<GenreSeries> {
        return this.genreSeriesModel.findByIdAndDelete(id).exec();
    }

    async getAllGenresSeries(): Promise<GenreSeries[]> {
        return this.genreSeriesModel.find().exec();
    }

    async findByGenre(genreId: string): Promise<GenreSeries[]> {
        return this.genreSeriesModel.find({ genre_id: genreId }).populate('genre_id series_id').exec();
    }

    async findBySeries(seriesId: string): Promise<GenreSeries[]> {
        return this.genreSeriesModel.find({ series_id: seriesId }).populate('series_id').exec();
    }
}
