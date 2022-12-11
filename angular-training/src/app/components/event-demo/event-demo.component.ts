import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.scss']
})
export class EventDemoComponent {

  hasBorder = true;
  data = 1;
  bgColor = "gray";
  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
  /*
  classNames = {
    "class-1":true,
    "class-2":false
  }
  */
  classNames = ['class-1','class-2'];
  onClickHandler(event:any)
  {
    console.log('OnClick Handler ',event);
    this.data++;
  }
  onToggleBorderHandler()
  {
    this.hasBorder = !this.hasBorder;
  }
  ngDoCheck()
  {
    console.log('Check ngDoCheck');
  }

  ngOnChanges()
  {
    console.log('EventDemo on change');
  }
}
