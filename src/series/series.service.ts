import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Series, SeriesDocument } from './series.model';

@Injectable()
export class SeriesService {
    constructor(@InjectModel(Series.name) private readonly seriesModel: Model<SeriesDocument>) {}
    async createSeries(series: Series): Promise<Series> {
        const createdSeries = new this.seriesModel(series);
        return await createdSeries.save();
      }

    async findSeriesById(id: string): Promise<Series | null> {
        return this.seriesModel.findById( id ).exec();
    }

    async updateSeries(id: string, updateSeriesDto: Partial<Series>): Promise<Series> {
        return this.seriesModel.findByIdAndUpdate(id, updateSeriesDto, { new: true }).exec();
    }

    async deleteSeries(id: string): Promise<Series> {
        return this.seriesModel.findByIdAndDelete(id).exec();
    }

    async getAllSeries(): Promise<Series[]> {
        return this.seriesModel.find().exec();
    }

    // async getAllData():Promise<Series[]> {
    //     this.seriesModel.aggregate(){
    //         $match{
    //         }
    //     }
       
    //     return this.seriesModel.find({ser})
    //     return this.streamModel.find({ episode_id: episodeId }).populate('episode_id').exec();
    // }

    
}
