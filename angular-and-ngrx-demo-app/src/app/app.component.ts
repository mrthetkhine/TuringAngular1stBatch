import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ToDoState} from "./features/todolist/todo.reducer";
import {loadAllToDo} from "./features/todolist/todo.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-and-ngrx-demo-app';

  constructor(private store: Store<{ todo: ToDoState }>) {
    this.store.dispatch(loadAllToDo());
  }
}
