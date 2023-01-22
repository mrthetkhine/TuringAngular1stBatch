import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo, ToDoDocument } from '../schemas/todo.schema';
import { Model } from 'mongoose';
import { MovieDocument,Movie } from '../schemas/movie.schema';
import { Director, DirectorDocument } from '../schemas/director.schema';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/udpate-actor.dto';
import { CreateDirectorDto } from './dto/create-director.dto';

@Injectable()
export class DirectorService {
  constructor(@InjectModel(Director.name) private directorModel: Model<DirectorDocument>) {
  }
  async findAll() {
    return this.directorModel.find().exec();
  }
  async findOne(id: string) {
    return this.directorModel.findById(id).exec();
  }
  async create(dto: CreateDirectorDto) {
    let model = new this.directorModel(dto);
    return model.save();
  }
  async update(id: string, updateActorDto: CreateDirectorDto) {
    return this.directorModel.findByIdAndUpdate(id,updateActorDto,{new:true});
  }
  async delete(id: string) {
    return this.directorModel.findByIdAndDelete(id);
  }
}