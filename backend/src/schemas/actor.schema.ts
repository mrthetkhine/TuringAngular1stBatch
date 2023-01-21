import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActorDocument = HydratedDocument<Actor>;

@Schema()
export class Actor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gender: string;

}

export const ActorSchema = SchemaFactory.createForClass(Actor);