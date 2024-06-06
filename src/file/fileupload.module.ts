import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadController } from './fileupload.controller';
import { UploadService } from './fileupload.service'
import { FileModel } from './file.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: FileModel }]),
  ],
  controllers: [UploadController],
  providers: [UploadService],

})
export class FileUploadModule {}

