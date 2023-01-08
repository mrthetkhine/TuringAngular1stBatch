import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDo} from "../to-do.model";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  loadAllToDo()
  {
    return this.http.get<Array<ToDo>>('https://jsonplaceholder.typicode.com/todos');
  }
}
