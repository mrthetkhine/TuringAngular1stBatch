export class MovieDto {
  _id?:string ='';
  title:string ='';
  year: number = 0;
  genres: Array<string> = [];

}
export class Actor
{
  _id?:string ='';
  name:string ='';
  gender:string ='';
}
export class Director extends Actor
{
  address:string ='';
}
export class Review
{
  rating:number =0;
  review:string ='';
}
export class MovieDetails extends MovieDto
{
  actors:Array<Actor> =[];
  directors: Array<Director> =[];
  reviews:Array<Review> = [];
}
