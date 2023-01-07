import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ToDo} from "../to-do.model";
import {removeToDo} from "../todo.actions";
import {ToDoState} from "../todo.reducer";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  todoList$!: Observable<ToDoState>;

  constructor(private store: Store<{ todo: ToDoState }>) {
    this.todoList$ = store.select('todo');
  }
  deleteHandler(todo:ToDo)
  {
    let deleteAction = removeToDo({
      payload: todo
    });
    this.store.dispatch(deleteAction);
  }

}
