import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  templateUrl: './zippy-basic.component.html',
  styleUrls: ['./zippy-basic.component.scss']
})
export class ZippyBasicComponent {
  expanded = false;
  contentId = 'my-content-id';
}
