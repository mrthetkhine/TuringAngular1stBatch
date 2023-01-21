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
    return this.movieModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
