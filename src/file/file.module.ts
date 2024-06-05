import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { File, FileModel } from './file.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: File.name, schema: FileModel }])],
    controllers: [FileController],
    providers: [FileService],
    exports: [FileService],
})
export class FileModule {}
