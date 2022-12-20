import { Component } from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";
import {ToDoBackendService} from "../../services/to-do-backend.service";

@Component({
  selector: 'app-table-parent',
  templateUrl: './table-parent.component.html',
  styleUrls: ['./table-parent.component.scss']
})
export class TableParentComponent {

  id = 201;
  todos:Array<ToDoItem> = [
  ];

  constructor(private todoBackendService: ToDoBackendService)
  {}

  ngOnInit()
  {
    this.todoBackendService.todos
      .subscribe(data=>{
        this.todos = data;
    });
  }

  onToDoDeleteEvent(todoItem:ToDoItem)
  {
    console.log("Delete todoitem ",todoItem);
    this.todoBackendService.deleteTodo(todoItem);
  }
  addNewToDo()
  {
    let todo = {
      userId : 0,
      id : this.id++,
      title : 'New To Do ',
      completed: false
    };
    this.todoBackendService.addNewToDo(todo);
  }
}
