import {Component, TemplateRef} from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";
import {ToDoBackendService} from "../../services/to-do-backend.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.scss']
})
export class TodoListViewComponent {

  id = 201;
  todos:Array<ToDoItem> = [
  ];
  closeResult = '';
  modalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private todoBackendService: ToDoBackendService)
  {}

  ngOnInit()
  {
    this.todoBackendService.todos
      .subscribe(data=>{
        this.todos = data;
    });
  }

  onToDoDeleteEvent(todoItem:ToDoItem)
  {
    console.log("Delete todoitem ",todoItem);
    this.todoBackendService.deleteTodo(todoItem);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal()
  {
    this.modalRef?.hide();
  }
  addNewToDo()
  {
    let todo = {
      userId : 0,
      id : this.id++,
      title : 'New To Do ',
      completed: false
    };
    this.todoBackendService.addNewToDo(todo);
  }
}
