import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from '../schemas/todo.schema';
import { Movie,MovieSchema } from '../schemas/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])
  ],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
