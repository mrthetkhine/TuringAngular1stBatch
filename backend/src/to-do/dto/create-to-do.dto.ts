import * as Joi from 'joi';
import { ObjectSchema } from 'joi';
import { IsBoolean, IsString } from 'class-validator';

//console.log('Joi ',Joi, ' ObjectSchema ');
export class CreateToDoDto {

  @IsString()
  title?:string;

  @IsBoolean()
  completed?:boolean;
}
export const CreateToDoSchema = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean()
}).options({
  abortEarly: false,
});