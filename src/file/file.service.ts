import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from './file.model';

@Injectable()
export class FileService {
    constructor(@InjectModel(File.name) private readonly fileModel: Model<FileDocument>) {}
    async createFile(file: File): Promise<File> {
        const createdFile = new this.fileModel(file);
        return await createdFile.save();
      }

    async findFileById(id: string): Promise<File | null> {
        return this.fileModel.findById( id ).exec();
    }

    async updateFile(id: string, updateFileDto: Partial<File>): Promise<File> {
        return this.fileModel.findByIdAndUpdate(id, updateFileDto, { new: true }).exec();
    }

    async deleteFile(id: string): Promise<File> {
        return this.fileModel.findByIdAndDelete(id).exec();
    }

    async getAllFile(): Promise<File[]> {
        return this.fileModel.find().exec();
    }

}
