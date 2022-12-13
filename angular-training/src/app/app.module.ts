import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
