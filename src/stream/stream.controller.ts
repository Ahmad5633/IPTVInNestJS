import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { StreamService } from './stream.service';
import { Stream } from './stream.model';
import { User } from '../user/user.model';
@Controller('streams')
export class StreamController {
    constructor(private readonly streamService: StreamService) {}

    @Post()
    async createStream(@Body() stream: Stream): Promise<Stream> {
        return this.streamService.createStream(stream);
    }

    @Get()
    async getAllStream(): Promise<Stream[]> {
        return this.streamService.getAllStream();
    }

    @Get(':id')
    async findStreamById(@Param('id') id: string): Promise<Stream | null> {
        return this.streamService.findStreamById(id);
    }

    @Patch(':id')
    async updateStream(@Param('id') id: string, @Body() updateStreamDto: Partial<Stream>): Promise<Stream> {
        return this.streamService.updateStream(id, updateStreamDto);
    }

    @Delete(':id')
    async deleteStream(@Param('id') id: string): Promise<Stream> {
        return this.streamService.deleteStream(id);
    }
   
  @Get('userId/:userId')
  async findByUserId(@Param('userId') userId: string): Promise<Stream[]> {
    return this.streamService.findByUserId(userId);
    }

    @Get(':streamId/user')
    async findUserByStreamId(@Param('streamId') streamId: string): Promise<User> {
      return this.streamService.findUserByStreamId(streamId);
    }
}
