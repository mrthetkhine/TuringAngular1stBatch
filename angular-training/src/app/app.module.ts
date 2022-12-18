import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { EventDemoComponent } from './components/event-demo/event-demo.component';
import { ListDemoComponent } from './components/list-demo/list-demo.component';
import { MovieComponent } from './components/movie/movie.component';
import { ChildTemplateRefComponent } from './components/child-template-ref/child-template-ref.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ZippyBasicComponent } from './components/zippy-basic/zippy-basic.component';
import { ShowCurrentDateComponent } from './components/show-current-date/show-current-date.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { SwitchDemoComponent } from './components/switch-demo/switch-demo.component';
import { TableChildComponent } from './components/table-child/table-child.component';
import { TableParentComponent } from './components/table-parent/table-parent.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { TotalCalculatorComponent } from './components/total-calculator/total-calculator.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EventDemoComponent,
    ListDemoComponent,
    MovieComponent,
    ChildTemplateRefComponent,
    ToDoListComponent,
    ToDoComponent,
    ZippyBasicComponent,
    ShowCurrentDateComponent,
    HighlightDirective,
    UnlessDirective,
    SwitchDemoComponent,
    TableChildComponent,
    TableParentComponent,
    TemplateDrivenFormExampleComponent,
    ReactiveFormExampleComponent,
    TotalCalculatorComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
