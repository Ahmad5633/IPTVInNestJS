import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Genre } from '../genre/genre.model';
import { Series } from '../series/series.model';

@Schema({ timestamps: true })
export class GenreSeries extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' })
  genre_id: Genre;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Series' })
  series_id: Series;
}

export const GenreSeriesModel = SchemaFactory.createForClass(GenreSeries);


export type GenreSeriesDocument = GenreSeries & Document;
