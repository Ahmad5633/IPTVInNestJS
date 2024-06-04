import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Series {
    @Prop({required : true})
    name: string;

    @Prop({required : true})
    description: string;

    @Prop({required : true})
    trailer_id: string;

    @Prop({required : true})
    thumbnail_id: string;
}

export const SeriesModel = SchemaFactory.createForClass(Series);

export type SeriesDocument = Series & Document;
