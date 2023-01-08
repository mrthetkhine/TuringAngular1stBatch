import {createAction, props} from '@ngrx/store';
import {ToDo} from "./to-do.model";

export const loadAllToDo = createAction('[ToDo Component] LoadAllToDo');
export const loadAllToDoSuccess = createAction('[ToDo Component] LoadAllToDoSuccess',props<{ payload: Array<ToDo> }> ());
export const addToDo = createAction('[ToDo Component] Add', props<{ payload: ToDo }> ());
export const removeToDo = createAction('[ToDo Component] Remove',props<{ payload: ToDo }>());
