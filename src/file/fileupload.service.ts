import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileDocument } from './file.model';

@Injectable()
export class UploadService {
  constructor(@InjectModel('File') private fileModel: Model<FileDocument>) {}

  async create(fileInfo: any): Promise<FileDocument> {
    const createdFile = new this.fileModel(fileInfo);
    return createdFile.save();
  }

  async findAll(): Promise<FileDocument[]> {
    return this.fileModel.find().exec();
  }
}
