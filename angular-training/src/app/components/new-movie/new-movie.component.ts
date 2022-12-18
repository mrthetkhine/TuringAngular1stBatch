import { Component } from '@angular/core';
import {AbstractControl, Form, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export function mustStartWithCapitalLetter(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    console.log('mustStartWithCapitalLetter ',value);
    if(value !=="" && value.length > 1 )
    {
      if(value.charAt(0).toString().toUpperCase() !== value.charAt(0))
      {
        return {'muststartwithcapital': {value: control.value}};
      }
    }
    return null;
  };
}
@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})

export class NewMovieComponent {
  movieForm :FormGroup;

  generes = ["Action","Drama","Horror","Crime","Sci-Fi"];

  constructor(fb:FormBuilder) {
    this.movieForm = fb.group({
      "name": ["", [
                    Validators.required,
                    Validators.minLength(3),
                    mustStartWithCapitalLetter()
                  ]
        ],
      "director": ["", Validators.required],
      "year": [0, [
        Validators.required,
        Validators.pattern("^[0-9]{4}$")
        ]
      ],
      "genre": ["", Validators.required],
    });

    this.name?.valueChanges?.subscribe((value:any)=>{
      console.log('Name Change ',value);
    });
  }
  get form()
  {
    return this.movieForm.controls;
  }
  get name()
  {
    //console.log('Name getter');
    return this.movieForm.get('name');
  }
  onSubmit()
  {
    console.log('MovieForm ',this.movieForm.value);
  }
}
