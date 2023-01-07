import {createAction, props} from '@ngrx/store';
import {ToDo} from "./to-do.model";

export const addToDo = createAction('[ToDo Component] Add', props<{ payload: ToDo }> ());
export const removeToDo = createAction('[ToDo Component] Remove',props<{ payload: ToDo }>());
