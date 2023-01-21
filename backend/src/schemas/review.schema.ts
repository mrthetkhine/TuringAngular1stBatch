import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({ required: true })
  rating: number;

  @Prop()
  review: string;

}

export const ReviewSchema = SchemaFactory.createForClass(Review);