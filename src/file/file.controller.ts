import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { FileService } from './file.service';
import { File } from './file.model';

@Controller('files')
export class FileController {
    constructor(private readonly fileService: FileService) {}

    @Post()
    async createFile(@Body() file: File): Promise<File> {
        return this.fileService.createFile(file);
    }

    @Get()
    async getAllFile(): Promise<File[]> {
        return this.fileService.getAllFile();
    }

    @Get(':id')
    async findFileById(@Param('id') id: string): Promise<File | null> {
        return this.fileService.findFileById(id);
    }

    @Patch(':id')
    async updateFile(@Param('id') id: string, @Body() updateFileDto: Partial<File>): Promise<File> {
        return this.fileService.updateFile(id, updateFileDto);
    }

    @Delete(':id')
    async deleteFile(@Param('id') id: string): Promise<File> {
        return this.fileService.deleteFile(id);
    }

}
