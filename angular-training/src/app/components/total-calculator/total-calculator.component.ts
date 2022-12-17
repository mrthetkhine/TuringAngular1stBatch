import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-total-calculator',
  templateUrl: './total-calculator.component.html',
  styleUrls: ['./total-calculator.component.scss']
})
export class TotalCalculatorComponent {
  totalForm : any;
  total = 0;
  onSubmit()
  {
    console.log('Total form ',this.totalForm);
  }
  constructor(private fb: FormBuilder) {
    this.totalForm = fb.group({
      "price": [0, Validators.required],
      "quantity": [0, Validators.required]
    });
    this.totalForm.valueChanges.subscribe((value:any) => {
      this.total = value.price * value.quantity;
      console.log("Reactive Form valid value: vm = ",
        JSON.stringify(value));
    });
  }
}
