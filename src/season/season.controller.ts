import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { SeasonService } from './season.service';
import { Season } from './season.model';

@Controller('seasons')
export class SeasonController {
    constructor(private readonly seasonService: SeasonService) {}

    @Post()
    async createSeason(@Body() season: Season): Promise<Season> {
        return this.seasonService.createSeason(season);
    }

    @Get()
    async getAllSeason(): Promise<Season[]> {
        return this.seasonService.getAllSeason();
    }

    @Get(':id')
    async findSeasonById(@Param('id') id: string): Promise<Season | null> {
        return this.seasonService.findSeasonById(id);
    }

    @Patch(':id')
    async updateSeason(@Param('id') id: string, @Body() updateSeasonDto: Partial<Season>): Promise<Season> {
        return this.seasonService.updateSeason(id, updateSeasonDto);
    }

    @Delete(':id')
    async deleteSeason(@Param('id') id: string): Promise<Season> {
        return this.seasonService.deleteSeason(id);
    }
}
