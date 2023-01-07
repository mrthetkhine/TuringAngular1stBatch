import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ToDo} from "../to-do.model";
import {addToDo} from "../todo.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

type ToDoStore = { todo: Array<ToDo> };

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent {
  id = 3;
  todoForm : FormGroup;
  constructor(private store: Store<ToDoStore>,
              private fb:FormBuilder) {
    this.todoForm = fb.group(
      {
        "title":["", Validators.required]
      }

    );
  }
  private addToDoItem() {
    let todoForm = this.todoForm.value;
    let todo = {
      id: this.id,
      title: todoForm.title
    };
    this.id++;
    let action = addToDo({
      payload: todo
    });
    this.store.dispatch(action);
  }
  onSubmit()
  {
    this.addToDoItem();
    this.todoForm.reset();
  }


}
