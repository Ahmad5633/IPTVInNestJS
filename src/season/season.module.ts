import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import { Season, SeasonModel } from './season.model';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Season.name, schema: SeasonModel }])],
    controllers: [SeasonController],
    providers: [SeasonService],
    exports: [SeasonService],
})
export class SeasonModule {}
