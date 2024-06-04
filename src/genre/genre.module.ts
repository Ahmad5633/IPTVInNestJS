import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { Genre, GenreModel } from './genre.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Genre.name, schema: GenreModel }])],
    controllers: [GenreController],
    providers: [GenreService],
    exports: [GenreService],
})
export class GenreModule {}
