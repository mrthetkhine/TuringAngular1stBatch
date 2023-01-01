import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";
import {Router} from "@angular/router";

@Component({
  selector: '[app-table-child]',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.scss']
})
export class TableChildComponent {
  @Input()
  todo!:ToDoItem;

  @Output()
  deleteEvent : EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();

  constructor(private router : Router) {
  }
  onDeleteClick()
  {
    this.deleteEvent.emit(this.todo);
  }
  onDetailClick()
  {
    this.router.navigate([`/todo-details-page/${this.todo.id}`]);
  }
}
