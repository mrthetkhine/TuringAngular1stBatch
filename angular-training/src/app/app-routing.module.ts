import { NgModule } from '@angular/core';
import {ResolveFn, RouterModule, Routes} from '@angular/router';
import {FirstPageComponent} from "./page/first-page/first-page.component";
import {SecondPageComponent} from "./page/second-page/second-page.component";
import {NotFoundPageComponent} from "./page/not-found-page/not-found-page.component";
import {ChildAPageComponent} from "./page/child-apage/child-apage.component";
import {ChildBPageComponent} from "./page/child-bpage/child-bpage.component";
import {AdminPageComponent} from "./page/admin-page/admin-page.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {ToDoDetailPageComponent} from "./page/to-do-detail-page/to-do-detail-page.component";
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
const routes: Routes = [
  {
    path: 'first-page', component: FirstPageComponent,
    children:[
      {
        path: 'child-a', // child route path
        title: resolvedChildATitle,
        component: ChildAPageComponent, // child route component that the router renders
      },
      {
        path: 'child-b', // child route path
        component: ChildBPageComponent, // child route component that the router renders
      },
    ]
  },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'another-page', redirectTo: '/first-page', pathMatch: 'full' },
  { path: 'admin-page', component: AdminPageComponent,canActivate:[AuthGuard] },
  { path: 'login-page', component: LoginPageComponent, },
  { path: 'todo-details-page/:todoId', component: ToDoDetailPageComponent, },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
