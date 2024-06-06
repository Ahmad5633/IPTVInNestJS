import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Episode } from './episode.model';
import { Stream } from '../stream/stream.model'
@Controller('episode')
export class EpisodeController {
    constructor(private readonly episodeService: EpisodeService) {}

    @Post()
    async createEpisode(@Body() episode: Episode): Promise<Episode> {
        return this.episodeService.createEpisode(episode);
    }

    @Get()
    async getAllEpisode(): Promise<Episode[]> {
        return this.episodeService.getAllEpisode();
    }

    @Get(':id')
    async findEpisodeById(@Param('id') id: string): Promise<Episode | null> {
        return this.episodeService.findEpisodeById(id);
    }

    @Patch(':id')
    async updateEpisode(@Param('id') id: string, @Body() updateEpisodeDto: Partial<Episode>): Promise<Episode> {
        return this.episodeService.updateEpisode(id, updateEpisodeDto);
    }

    @Delete(':id')
    async deleteEpisode(@Param('id') id: string): Promise<Episode> {
        return this.episodeService.deleteEpisode(id);
    }

    @Get(':episodeId/streams')
    async findStreamsByEpisodeId(@Param('episodeId') episodeId: string): Promise<Stream[]> {
      return this.episodeService.findStreamsByEpisodeId(episodeId.trim());
    }

    @Get('season/:seasonId')
    async findAllBySeasonId(@Param('seasonId') seasonId: string): Promise<Episode[]> {
      return this.episodeService.findAllEpisodesBySeasonId(seasonId);
    }

}
