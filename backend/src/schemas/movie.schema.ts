import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Actor } from './actor.schema';
import { Director } from './director.schema';
import { Review } from './review.schema';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  year: number;

  @Prop([String])
  genres: Array<string>;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }] })
  actors: Actor[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }] })
  directors: Director[];

  @Prop()
  reviews: Array<Review>;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);