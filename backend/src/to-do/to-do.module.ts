import { Module } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';

@Module({
  controllers: [ToDoController],
  providers: [ToDoService]
})
export class ToDoModule {}
