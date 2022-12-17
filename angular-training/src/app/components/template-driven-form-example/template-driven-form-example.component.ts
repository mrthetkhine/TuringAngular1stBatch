import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.scss']
})
export class TemplateDrivenFormExampleComponent {
  user = {
    firstName : 'Dummy',
    password :''
  }
  onSubmitTemplateBased(formValue:any) {
    console.log('Form submit ',formValue);
    console.log('Component user ',this.user);
  }
}
