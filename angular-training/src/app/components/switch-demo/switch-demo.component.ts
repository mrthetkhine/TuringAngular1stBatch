import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html',
  styleUrls: ['./switch-demo.component.scss']
})
export class SwitchDemoComponent {

  cityNames = ["Yangon","Mandalay","TaungGyi","Kalaw","Bago","Sagai"];
  city = 'mdy';
  styleObj = {
    color:'black',
    'background-color':'gray'
  };
  styleClass = {
    container1:false,
    container2 : true,
  };
  get entries()
  {
    return Object.entries(this.styleClass);
  }
}
