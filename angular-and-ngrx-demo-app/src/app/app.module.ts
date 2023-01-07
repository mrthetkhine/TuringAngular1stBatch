import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counter/counter.reducer';
import { CounterComponent } from './features/counter/counter/counter.component';
import { AnotherCounterViewComponent } from './features/counter/another-counter-view/another-counter-view.component';
import { ToDoListComponent } from './features/todolist/to-do-list/to-do-list.component';
import {todoReducer} from './features/todolist/todo.reducer';
import { AddToDoComponent } from './features/todolist/add-to-do/add-to-do.component';
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AnotherCounterViewComponent,
    ToDoListComponent,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
        count: counterReducer,
        todo:todoReducer
      },
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
