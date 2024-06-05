import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class File {
    @Prop({required : true})
    original_name: string;

    @Prop({required : true})
    current_name: string;

    @Prop({required : true})
    type: string;

    @Prop({required : true})
    path: string;

    @Prop({required : true})
    size: string;
}

export const FileModel = SchemaFactory.createForClass(File);

export type FileDocument = File & Document;
