import {Component, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, Validators} from "@angular/forms";
import {ToDoBackendService} from "../../services/to-do-backend.service";
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  closeResult = '';
  modalRef?: BsModalRef;
  @ViewChild(TemplateRef<any>) template!: TemplateRef<any>;

  editMode = false;
  todoForm;
  constructor(
    private modalService: BsModalService,
    private fb:FormBuilder,
    private todoBackendService: ToDoBackendService)
  {
    this.todoForm = fb.nonNullable.group({
      "userId": [0, Validators.required],
      "id":[0, Validators.required],
      "title":["", Validators.required],
      "completed":[false, Validators.required]
    });
  }
  showNewToDoModal()
  {
    this.editMode = false;
    this.openModal(this.template);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.todoForm.reset();
  }
  closeModal()
  {
    this.modalRef?.hide();
  }
  onSubmit()
  {
    let todoItem = this.formValueToModel();

    if(this.editMode)
    {
      this.todoBackendService.editToDo(todoItem);
    }
    else
    {
      console.log('New ToDoItem ',todoItem);
      this.todoBackendService.addNewToDo(todoItem);
    }

    this.closeModal();

  }
  get form()
  {
    return this.todoForm.controls;
  }
  private formValueToModel() {
    let json = this.todoForm.value;

    //let completed:boolean = json.completed==='true'?true:false;
    let todoItem: ToDoItem = {
      id: json.id,
      userId: json.userId,
      title: json.title,
      completed: json.completed,
    }
    return todoItem;
  }
  onToDoEditHandler(todoItem:ToDoItem)
  {
    console.log('Second page edit todo ',todoItem);
    this.editMode = true;
    this.openModal(this.template);
    this.todoForm.patchValue({
      ... todoItem,
    });
    //console.log('Form json ',this.todoForm.value);

  }

}
