import { Component } from '@angular/core';

@Component({
  selector: 'app-show-current-date',
  templateUrl: './show-current-date.component.html',
  styleUrls: ['./show-current-date.component.scss']
})
export class ShowCurrentDateComponent {
  now = new Date();
}
