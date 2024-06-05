import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Season, SeasonDocument } from './season.model';

@Injectable()
export class SeasonService {
    constructor(@InjectModel(Season.name) private readonly seasonModel: Model<SeasonDocument>) {}
    async createSeason(season: Season): Promise<Season> {
        const createdSeason = new this.seasonModel(season);
        return await createdSeason.save();
      }

    async findSeasonById(id: string): Promise<Season | null> {
        return this.seasonModel.findById( id ).exec();
    }

    async updateSeason(id: string, updateSeasonDto: Partial<Season>): Promise<Season> {
        return this.seasonModel.findByIdAndUpdate(id, updateSeasonDto, { new: true }).exec();
    }

    async deleteSeason(id: string): Promise<Season> {
        return this.seasonModel.findByIdAndDelete(id).exec();
    }

    async getAllSeason(): Promise<Season[]> {
        return this.seasonModel.find().exec();
    }
}
