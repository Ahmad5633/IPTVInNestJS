import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stream, StreamDocument } from './stream.model';

@Injectable()
export class StreamService {
    constructor(@InjectModel(Stream.name) private readonly streamModel: Model<StreamDocument>) {}
    async createStream(stream: Stream): Promise<Stream> {
        const createdStream = new this.streamModel(stream);
        return await createdStream.save();
      }

    async findStreamById(id: string): Promise<Stream | null> {
        return this.streamModel.findById( id ).exec();
    }

    async updateStream(id: string, updateStreamDto: Partial<Stream>): Promise<Stream> {
        return this.streamModel.findByIdAndUpdate(id, updateStreamDto, { new: true }).exec();
    }

    async deleteStream(id: string): Promise<Stream> {
        return this.streamModel.findByIdAndDelete(id).exec();
    }

    async getAllStream(): Promise<Stream[]> {
        return this.streamModel.find().exec();
    }

  async findByUserId(userId: string): Promise<Stream[]> {
    return this.streamModel.find({ userId }).populate('userId').exec();
  }
}
