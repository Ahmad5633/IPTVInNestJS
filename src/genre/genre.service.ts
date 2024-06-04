import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Genre, GenreDocument } from './genre.model';

@Injectable()
export class GenreService {
    constructor(@InjectModel(Genre.name) private readonly genreModel: Model<GenreDocument>) {}
    async createGenre(genre: Genre): Promise<Genre> {
        const createdGenre = new this.genreModel(genre);
        return await createdGenre.save();
      }

    async findGenreById(id: string): Promise<Genre | null> {
        return this.genreModel.findById( id ).exec();
    }

    async updateGenre(id: string, updateGenreDto: Partial<Genre>): Promise<Genre> {
        return this.genreModel.findByIdAndUpdate(id, updateGenreDto, { new: true }).exec();
    }

    async deleteGenre(id: string): Promise<Genre> {
        return this.genreModel.findByIdAndDelete(id).exec();
    }

    async getAllGenres(): Promise<Genre[]> {
        return this.genreModel.find().exec();
    }
}
