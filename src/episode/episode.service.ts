import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode, EpisodeDocument } from './episode.model';
import { Stream, StreamDocument } from '../stream/stream.model';

@Injectable()
export class EpisodeService {
    constructor(
        @InjectModel(Episode.name) private readonly episodeModel: Model<EpisodeDocument>,
        @InjectModel(Stream.name) private readonly streamModel: Model<StreamDocument>
    ) {}
    async createEpisode(episode: Episode): Promise<Episode> {
        const createdEpisode = new this.episodeModel(episode);
        return await createdEpisode.save();
      }

    async findEpisodeById(id: string): Promise<Episode | null> {
        return this.episodeModel.findById( id ).exec();
    }

    async updateEpisode(id: string, updateEpiosdeDto: Partial<Episode>): Promise<Episode> {
        return this.episodeModel.findByIdAndUpdate(id, updateEpiosdeDto, { new: true }).exec();
    }

    async deleteEpisode(id: string): Promise<Episode> {
        return this.episodeModel.findByIdAndDelete(id).exec();
    }

    async getAllEpisode(): Promise<Episode[]> {
        return this.episodeModel.find().exec();
    }

    async findStreamsByEpisodeId(episodeId: string): Promise<Stream[]> {
        return this.streamModel.find({ episode_id: episodeId }).populate('episode_id').exec();
    }

    async findAllEpisodesBySeasonId(seasonId: string): Promise<Episode[]> {
        return this.episodeModel.find({ seasonId }).populate('seasonId').exec();
      }

      

}
