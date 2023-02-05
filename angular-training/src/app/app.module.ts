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
import { TodoListViewComponent } from './components/todo-list-view/todo-list-view.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { TotalCalculatorComponent } from './components/total-calculator/total-calculator.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import {AnalyticServiceService} from "./services/analytic-service.service";
import {AnalyticsImplementation} from "./analytics-implementation";
import {Metric} from "./model/metric.model";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ToDoCountComponent } from './components/to-do-count/to-do-count.component';
import { FirstPageComponent } from './page/first-page/first-page.component';
import { SecondPageComponent } from './page/second-page/second-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { ChildAPageComponent } from './page/child-apage/child-apage.component';
import { ChildBPageComponent } from './page/child-bpage/child-bpage.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import {AuthGuard} from "./auth/auth.guard";
import { LoginPageComponent } from './page/login-page/login-page.component';
import { ToDoDetailPageComponent } from './page/to-do-detail-page/to-do-detail-page.component';
import {ModalModule} from "ngx-bootstrap/modal";
import { MovieListComponent } from './page/movie-list/movie-list.component';
import { MovieTwoComponent } from './components/movie-two/movie-two.component';
import { MovieDetailComponent } from './page/movie-detail/movie-detail.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ReviewComponent } from './components/review/review.component';
import {TokenInterceptor} from "./auth/interceptor/TokenInterceptor";
import { LogoutPageComponent } from './page/logout-page/logout-page.component';

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
    TodoListViewComponent,
    TemplateDrivenFormExampleComponent,
    ReactiveFormExampleComponent,
    TotalCalculatorComponent,
    NewMovieComponent,
    ToDoCountComponent,
    FirstPageComponent,
    SecondPageComponent,
    NotFoundPageComponent,
    ChildAPageComponent,
    ChildBPageComponent,
    AdminPageComponent,
    LoginPageComponent,
    ToDoDetailPageComponent,
    MovieListComponent,
    MovieTwoComponent,
    MovieDetailComponent,
    MovieDetailsComponent,
    ReviewComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [
    {
      provide:AnalyticServiceService,
      useFactory:function () {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };
        return new AnalyticServiceService(loggingImplementation);
      }
    },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
