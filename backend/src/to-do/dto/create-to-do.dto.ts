import * as Joi from 'joi';
import { ObjectSchema } from 'joi';
import { IsString } from 'class-validator';

//console.log('Joi ',Joi, ' ObjectSchema ');
export class CreateToDoDto {
  @IsString()
  id?: string;

  @IsString()
  title?:string;
}
export const CreateToDoSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
}).options({
  abortEarly: false,
});