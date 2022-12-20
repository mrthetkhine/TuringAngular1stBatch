import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";

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

  onDeleteClick()
  {
    this.deleteEvent.emit(this.todo);
  }
}
