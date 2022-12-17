import {Component, Input} from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: '[app-table-child]',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.scss']
})
export class TableChildComponent {
  @Input()
  todo!:ToDoItem;
}
