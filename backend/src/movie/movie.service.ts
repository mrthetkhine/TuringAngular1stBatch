import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo, ToDoDocument } from '../schemas/todo.schema';
import { Model } from 'mongoose';
import { MovieDocument,Movie } from '../schemas/movie.schema';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {

  }

  create(createMovieDto: CreateMovieDto) {
    let model = new this.movieModel(createMovieDto);
    return model.save();
  }

  async findAll() {
    return this.movieModel
      .find()
      //.populate('actors')
      //.populate('directors')
      .exec();
  }

  async findOne(id: string) {
    return this.movieModel.findById(id)
      .populate('actors')
      .populate('directors').exec();
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.findByIdAndUpdate(id,updateMovieDto,{new:true})
  }

  async remove(id: string) {
    return this.movieModel.findByIdAndDelete(id);
  }
}
