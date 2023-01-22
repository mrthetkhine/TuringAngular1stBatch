import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo, ToDoDocument } from '../schemas/todo.schema';
import { Model } from 'mongoose';
import { Actor, ActorDocument } from '../schemas/actor.schema';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/udpate-actor.dto';

@Injectable()
export class ActorService {
  constructor(@InjectModel(Actor.name) private actorModel: Model<ActorDocument>) {
  }

  async findAll() {
    return this.actorModel.find().exec();
  }
  async findOne(id: string) {
    return this.actorModel.findById(id).exec();
  }

  async create(createActorDto: CreateActorDto) {
    let model = new this.actorModel(createActorDto);
    return model.save();
  }
  async update(id: string, updateActorDto: UpdateActorDto) {
    return this.actorModel.findByIdAndUpdate(id,updateActorDto,{new:true});
  }
  async delete(id: string) {
    return this.actorModel.findByIdAndDelete(id);
  }
}