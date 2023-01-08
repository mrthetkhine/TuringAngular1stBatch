import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ToDoService} from "../services/to-do.service";
import {Injectable} from '@angular/core';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {loadAllToDo, loadAllToDoSuccess} from "../todo.actions";

@Injectable()
export class TodoEffects
{
  constructor(private actions$:Actions,
              private todoService:ToDoService) {

  }
  loadAllTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllToDo),
      switchMap(() => this.todoService.loadAllToDo().pipe(
        map(todos => loadAllToDoSuccess({payload:todos})),
        catchError(() => [])
      ))
    )
  );

}
