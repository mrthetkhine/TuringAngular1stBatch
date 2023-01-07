import { createReducer, on } from '@ngrx/store';
import { addToDo, removeToDo } from './todo.actions';
import {ToDo} from "./to-do.model";


export type ToDoState = Array<ToDo>;
export const initialState:ToDoState = [
  {
    id : 1,
    title: 'Task1'
  },
  {
    id : 2,
    title: 'Task2'
  }
];

export const todoReducer = createReducer(
  initialState,
  on(addToDo, (state:ToDoState,action) =>[...state,action.payload]),

  on(removeToDo, (state:ToDoState,action) =>
                      state.filter((todo:ToDo)=>todo.id !== action.payload.id) ),

);
