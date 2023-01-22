import { IsArray, IsNumber, IsString } from 'class-validator';
import { Actor } from '../../schemas/actor.schema';
import { Director } from '../../schemas/director.schema';

export class CreateDirectorDto {
  @IsString()
  name?:string;

  @IsString()
  gender?:number;

  @IsString()
  address?:number;
}
