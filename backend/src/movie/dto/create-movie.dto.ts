import { IsArray, IsNumber, IsString } from 'class-validator';
import { Actor } from '../../schemas/actor.schema';
import { Director } from '../../schemas/director.schema';

export class CreateMovieDto {
  @IsString()
  title?:string;

  @IsNumber()
  year?:number;

  @IsArray()
  genres:Array<string>;

  @IsArray()
  actors: Array<Actor>;

  @IsArray()
  directors:Array<Director>;
}
