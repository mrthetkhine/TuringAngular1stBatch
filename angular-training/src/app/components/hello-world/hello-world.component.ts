import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  themeClass ="blue";
  currentCustomer = 'Maria';
  isUnchanged = true;
  angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png';
  constructor() {
    console.log('HelloWorld Component Constructor');
  }
  ngOnInit()
  {
    console.log('HelloWorld Component Initialized');
  }
  ngAfterContentInit()
  {
    console.log('HelloWorld Component ngAfterContentInit');
  }
  ngAfterContentChecked()
  {
    console.log('HelloWorld Component ngAfterContentChecked');
  }
  ngAfterViewInit()
  {
    console.log('HelloWorld Component ngAfterViewInit');
  }
  ngOnDestroy()
  {
    console.log('HelloWorld Component ngOnDestroy');
  }
  get color()
  {
    console.log('Get color');
    return "blue";
  }
}
