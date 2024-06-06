import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { File } from '../file/file.model';
@Schema({ timestamps: true })
export class Series {
    @Prop({required : true})
    name: string;

    @Prop({required : true})
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'File' })
    trailer_id: File;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'File' })
    thumbnail_id: File;

}

export const SeriesModel = SchemaFactory.createForClass(Series);

export type SeriesDocument = Series & Document;





