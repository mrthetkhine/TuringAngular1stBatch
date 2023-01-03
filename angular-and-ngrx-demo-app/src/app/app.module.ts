import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counter/counter.reducer';
import { CounterComponent } from './features/counter/counter/counter.component';
import { AnotherCounterViewComponent } from './features/counter/another-counter-view/another-counter-view.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AnotherCounterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
