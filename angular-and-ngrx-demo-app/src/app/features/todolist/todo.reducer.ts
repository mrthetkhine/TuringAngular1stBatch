import {createReducer, createSelector, on} from '@ngrx/store';
import {addToDo, loadAllToDoSuccess, removeToDo} from './todo.actions';
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
  on(loadAllToDoSuccess, (state:ToDoState,action) =>[...action.payload]),
  on(addToDo, (state:ToDoState,action) =>[...state,action.payload]),

  on(removeToDo, (state:ToDoState,action) =>
                      state.filter((todo:ToDo)=>todo.id !== action.payload.id) ),

);
export const getRootState = (state:any) => state.todo;

export const getCompletedTodoItems = createSelector(
  getRootState,
  (state: any) => state.filter((todo:any)=>todo.completed)
);
