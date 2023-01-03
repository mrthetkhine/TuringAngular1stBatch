import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-another-counter-view',
  templateUrl: './another-counter-view.component.html',
  styleUrls: ['./another-counter-view.component.scss']
})
export class AnotherCounterViewComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
