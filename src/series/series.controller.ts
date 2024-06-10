import { Controller, Post, Body, Get, Param, Put, Delete, Patch } from '@nestjs/common';
import { SeriesService } from './series.service';
import { Series } from './series.model';

@Controller('series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) {}

    @Post()
    async createSeries(@Body() series: Series): Promise<Series> {
        return this.seriesService.createSeries(series);
    }

    @Get()
    async getAllSeries(): Promise<Series[]> {
        return this.seriesService.getAllSeries();
    }

    @Get(':id')
    async findSeriesById(@Param('id') id: string): Promise<Series | null> {
        return this.seriesService.findSeriesById(id);
    }

    @Patch(':id')
    async updateSeries(@Param('id') id: string, @Body() updateSeriesDto: Partial<Series>): Promise<Series> {
        return this.seriesService.updateSeries(id, updateSeriesDto);
    }

    @Delete(':id')
    async deleteSeriees(@Param('id') id: string): Promise<Series> {
        return this.seriesService.deleteSeries(id);
    }

}
