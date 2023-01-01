import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoBackendService} from "../../services/to-do-backend.service";
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: 'app-to-do-detail-page',
  templateUrl: './to-do-detail-page.component.html',
  styleUrls: ['./to-do-detail-page.component.scss']
})
export class ToDoDetailPageComponent {
  id:string ='';
  item !: ToDoItem;
  constructor(private activateRoute:ActivatedRoute,
              private todoService: ToDoBackendService) {

  }
  ngOnInit()
  {
    this.activateRoute.params.subscribe(params=>{
      this.id = params['todoId'];
      console.log('ToDo detail id ',this.id);

      this.todoService.getToDoById(this.id).subscribe((todo)=>{
        this.item = todo;
      });
    });
  }

}
