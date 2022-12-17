import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent {

  /*loginForm = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });*/
  loginForm;
  userNameInUpperCase : string = ''
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      "firstName": ["", Validators.required],
      "password":["", Validators.required]
    });
    this.loginForm.valueChanges.pipe(
        map((value:any) => {
          value.firstName = value.firstName.toUpperCase();
          this.userNameInUpperCase = value.firstName;
          return value;
        }),
        filter((value:any) => this.loginForm.valid)
      ).subscribe((value:any) => {
        console.log("Reactive Form valid value: vm = ",
          JSON.stringify(value));
      });

  }
  fullUpdate() {
    this.loginForm.setValue({firstName: 'Partial', password: 'monkey'});
  }

  partialUpdate() {
    this.loginForm.patchValue({firstName: 'Partial'});
  }
  reset() {
    this.loginForm.reset();
  }
  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.loginForm.value);
  }
}
