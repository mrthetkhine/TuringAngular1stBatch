import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDoItem} from "../model/to-do-item.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoBackendService {

  private _todos: BehaviorSubject<ToDoItem[]>;
  todoDataStore :Array<ToDoItem>  = [];

  constructor(public http: HttpClient) {
    this._todos = <BehaviorSubject<ToDoItem[]>>new BehaviorSubject<ToDoItem[]>([]);

    this.loadToDos();
  }
  get todos() {
    return this._todos.asObservable();
  }
  loadToDos()
  {
    this.getTodos().subscribe(data=>{
      this.todoDataStore = data;
      this._todos.next(this.todoDataStore);
    });
  }
 getToDoById(id:string)
 {
   return this.http.get<ToDoItem>(`https://jsonplaceholder.typicode.com/todos/${id}`);
 }
  getTodos()
  {
    return this.http.get<Array<ToDoItem>>('https://jsonplaceholder.typicode.com/todos');
  }
  deleteTodo(item:ToDoItem)
  {
    return this.http.delete<ToDoItem>('https://jsonplaceholder.typicode.com/todos/'+item.id)
      .subscribe(data=>{
        this.todoDataStore = this.todoDataStore.filter(ele=>ele.id != item.id);
        this._todos.next(this.todoDataStore);
      });

  }
  addNewToDo(item:ToDoItem)
  {
    return this.http.post<ToDoItem>('https://jsonplaceholder.typicode.com/todos',item)
      .subscribe(data=>{
        this.todoDataStore.unshift(data);
        this._todos.next(this.todoDataStore);
      });

  }
}
