import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ timestamps: true })
export class User {
    @Prop({required : true})
    first_name: string;

    @Prop({required : true})
    last_name: string;

    @Prop({required : true})
    email: string;

    @Prop({required : true})
    password: string;
}

export const UserModel = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
