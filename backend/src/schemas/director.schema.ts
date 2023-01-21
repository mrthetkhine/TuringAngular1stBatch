import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DirectorDocument = HydratedDocument<Director>;

@Schema()
export class Director {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: string;

  @Prop()
  address: string;
}

export const DirectorSchema = SchemaFactory.createForClass(Director);