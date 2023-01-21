import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { ToDo, ToDoDocument } from '../schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ToDoService {
  constructor(@InjectModel(ToDo.name) private todoModel: Model<ToDoDocument>) {

  }
  async create(createToDoDto: CreateToDoDto):Promise<ToDo> {
    console.log('Todo ',createToDoDto);
    const todo = new this.todoModel(createToDoDto);
    return todo.save();
  }

  async findAll() {
    return this.todoModel.find().exec();
  }
  async findAllCompleted()
  {
    return this.todoModel.find({
      completed:true
    }).exec();
  }

  async findOne(id: string) {
    return this.todoModel.findById(id);
  }

  async update(id: string, updateToDoDto: UpdateToDoDto) {
    return this.todoModel.findByIdAndUpdate(id,updateToDoDto,{new: true});
  }

  async remove(id: string) {
    return this.todoModel.findByIdAndRemove(id);
  }
}
