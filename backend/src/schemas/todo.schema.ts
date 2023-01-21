import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ToDoDocument = HydratedDocument<ToDo>;

@Schema()
export class ToDo {
  @Prop({ required: true })
  title: string;

  @Prop()
  completed: boolean;

}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);