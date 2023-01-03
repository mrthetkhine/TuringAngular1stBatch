import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoBackendService} from "../../services/to-do-backend.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  name :any ;
  count = 0;
  constructor(private todoBackendService :ToDoBackendService,
              private route: ActivatedRoute) {
    this.todoBackendService.todos.subscribe(data=>{
      this.count = data.length;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log('Parameter name ',this.name);
    });
  }
}
