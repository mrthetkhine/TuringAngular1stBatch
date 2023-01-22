import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from '../schemas/todo.schema';
import { Movie,MovieSchema } from '../schemas/movie.schema';
import { Actor, ActorSchema } from '../schemas/actor.schema';
import { ActorService } from './actor.service';
import { ActorController } from './actor/actor.controller';
import { Director, DirectorSchema } from '../schemas/director.schema';
import { DirectorController } from './director/director.controller';
import { DirectorService } from './director.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),
    MongooseModule.forFeature([{ name: Director.name, schema: DirectorSchema }])
  ],
  controllers: [MovieController,ActorController,DirectorController],
  providers: [MovieService,ActorService,DirectorService]
})
export class MovieModule {}
