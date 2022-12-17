import { Component } from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: 'app-table-parent',
  templateUrl: './table-parent.component.html',
  styleUrls: ['./table-parent.component.scss']
})
export class TableParentComponent {

  todos:Array<ToDoItem> = [
    {
      text : 'Task1'
    },
    {
      text : 'Task2'
    },
  ];

}
