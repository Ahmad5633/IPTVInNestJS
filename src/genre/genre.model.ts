import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Genre {
    @Prop({required : true})
    name: string;
}

export const GenreModel = SchemaFactory.createForClass(Genre);

export type GenreDocument = Genre & Document;
