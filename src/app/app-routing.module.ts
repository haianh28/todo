import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './service/router-guard.service';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent,canActivate:[RouterGuardService]},
  {path:"todos",component: ListTodoComponent,canActivate:[RouterGuardService]},
  {path:"welcome/:name",component: WelcomeComponent,canActivate:[RouterGuardService]},
{path:'**' ,component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
