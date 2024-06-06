import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Episode } from '../episode/episode.model';
import { User } from '../user/user.model';

@Schema()
export class Stream extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Episode' })
  episode_id: Episode;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: User;

  @Prop({required : true})
  time: string;
}

export const StreamModel = SchemaFactory.createForClass(Stream);

export type StreamDocument = Stream & Document;
