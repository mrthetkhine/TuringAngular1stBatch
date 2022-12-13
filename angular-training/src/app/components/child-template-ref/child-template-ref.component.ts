import { Component } from '@angular/core';

@Component({
  selector: 'app-child-template-ref',
  templateUrl: './child-template-ref.component.html',
  styleUrls: ['./child-template-ref.component.scss']
})
export class ChildTemplateRefComponent {

  addNewItem(item:string)
  {
    console.log('Add new item ',item);
  }
}
