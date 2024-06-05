import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Series } from '../series/series.model';

@Schema()
export class Season {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Series' })
    series_id: Series;

    @Prop({required : true})
    name: string;

    @Prop({required : true})
    description: string;

}

export const SeasonModel = SchemaFactory.createForClass(Season);

export type SeasonDocument = Season & Document;
