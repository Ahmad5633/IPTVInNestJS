// import {
//     Controller,
//     Post,
//     UploadedFile,
//     UseInterceptors,
//     BadRequestException,
//     Get,
//   } from '@nestjs/common';
//   import { FileInterceptor } from '@nestjs/platform-express';
//   import { diskStorage } from 'multer';
//   import { extname } from 'path';
//   import { v4 as uuidv4 } from 'uuid';
//   import { Express } from 'express';
  
//   @Controller('upload')
//   export class UploadController {
//     @Post()
//     @UseInterceptors(
//       FileInterceptor('file', {
//         storage: diskStorage({
//           destination: './uploads',
//           filename: (req, file, cb) => {
//             const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
//             const fileExtName = extname(file.originalname);
//             const randomName = `${uniqueSuffix}${fileExtName}`;
//             cb(null, randomName);
//           },
//         }),
//       }),
//     )
//     uploadFile(@UploadedFile() file: Express.Multer.File) {
//       if (!file) {
//         throw new BadRequestException('File is not provided or invalid');
//       }
//       const fileId = uuidv4(); 
//       console.log('Uploaded file:', file);
//       return {
//         id: fileId,
//         current_name: file.filename,
//         original_name: file.originalname,
//         type: file.mimetype,
//         size: file.size,
//         path: file.path,
//       };
//     }
//   }

import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from './fileupload.service';
import { Express } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
          const fileExtName = extname(file.originalname);
          const randomName = `${uniqueSuffix}${fileExtName}`;
          cb(null, randomName);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is not provided or invalid');
    }
    const fileId = uuidv4();
    const fileInfo = {
      id: fileId,
      current_name: file.filename,
      original_name: file.originalname,
      type: file.mimetype,
      size: file.size,
      path: file.path,
    };
    const savedFile = await this.uploadService.create(fileInfo);
    return savedFile;
  }

  @Get('files')
  async getAllFilesInfo() {
    return this.uploadService.findAll();
  }
}

