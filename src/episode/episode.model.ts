import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Season } from '../season/season.model';
import { File } from '../file/file.model';
@Schema()
export class Episode {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Season' })
    season_id: Season;

    @Prop({required : true})
    name: string;

    @Prop({required : true})
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'File' })
    thumbnail_id: File;
}

export const EpisodeModel = SchemaFactory.createForClass(Episode);

export type EpisodeDocument = Episode & Document;
