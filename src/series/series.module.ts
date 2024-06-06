import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { Series, SeriesModel } from './series.model';
import { ConfigModule } from '@nestjs/config';
@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forFeature([{ name: Series.name, schema: SeriesModel }])],
    controllers: [SeriesController],
    providers: [SeriesService],
    exports: [SeriesService],
})
export class SeriesModule {}
