import { Controller, Post, Body, Get, Param, Delete, Patch,Query } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.model';
@Controller('genres')
export class GenreController {
    constructor(private readonly genreService: GenreService,) {}

    @Post()
    async createGenre(@Body() genre: Genre): Promise<Genre> {
        return this.genreService.createGenre(genre);
    }

    @Get()
    async getAllGenres(): Promise<Genre[]> {
        return this.genreService.getAllGenres();
    }

    @Get(':id')
    async findGenreById(@Param('id') id: string): Promise<Genre | null> {
        return this.genreService.findGenreById(id);
    }

    @Patch(':id')
    async updateGenre(@Param('id') id: string, @Body() updateGenreDto: Partial<Genre>): Promise<Genre> {
        return this.genreService.updateGenre(id, updateGenreDto);
    }

    @Delete(':id')
    async deleteGenre(@Param('id') id: string): Promise<Genre> {
        return this.genreService.deleteGenre(id);
    }
    @Get('details/:genre')
    async getSeriesDetails(@Param('genre') genre: string) {
      return this.genreService.getSeriesWithDetailsByGenre(genre);
    }
}
