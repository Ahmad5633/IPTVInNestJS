import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { GenreSeriesService } from './genreSeries.service';
import { GenreSeries } from './genreSeries.model';

@Controller('genresSeries')
export class GenreSeriesController {
    constructor(private readonly genreSeriesService: GenreSeriesService) {}

    @Post()
    async createGenreSeries(@Body() genreSeries: GenreSeries): Promise<GenreSeries> {
        return this.genreSeriesService.createGenreSeries(genreSeries);
    }

    @Get()
    async getAllGenresSeries(): Promise<GenreSeries[]> {
        return this.genreSeriesService.getAllGenresSeries();
    }

    @Get(':id')
    async findGenreSeriesById(@Param('id') id: string): Promise<GenreSeries | null> {
        return this.genreSeriesService.findGenreSeriesById(id);
    }

    @Patch(':id')
    async updateGenreSeries(@Param('id') id: string, @Body() updateGenreSeriesDto: Partial<GenreSeries>): Promise<GenreSeries> {
        return this.genreSeriesService.updateGenreSeries(id, updateGenreSeriesDto);
    }

    @Delete(':id')
    async deleteGenreSeries(@Param('id') id: string): Promise<GenreSeries> {
        return this.genreSeriesService.deleteGenreSeries(id);
    }

    @Get('genreId/:genreId')
    async findByGenre(@Param('genreId') genreId: string): Promise<GenreSeries[]> {
      return this.genreSeriesService.findByGenre(genreId);
    }

    @Get('seriesId/:seriesId')
    async findBySeries(@Param('seriesId') seriesId: string): Promise<GenreSeries[]> {
      return this.genreSeriesService.findBySeries(seriesId);
    }
}
