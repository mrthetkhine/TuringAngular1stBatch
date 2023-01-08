import { Component } from '@angular/core';
import {createSelector, Store} from "@ngrx/store";
import {getCompletedTodoItems, ToDoState} from "../todo.reducer";
import {Observable} from "rxjs";


@Component({
  selector: 'app-completed-todo-count',
  templateUrl: './completed-todo-count.component.html',
  styleUrls: ['./completed-todo-count.component.scss']
})
export class CompletedTodoCountComponent {
  count : number =0;
  todoList$!: Observable<ToDoState>;

  constructor(private store: Store<{ todo: ToDoState }>) {
    this.todoList$ = store.select(getCompletedTodoItems);

    this.todoList$.subscribe((data)=>{
      this.count = data.length;
    })
  }
}
