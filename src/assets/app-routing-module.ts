// tu musimy osbsługiwać nasz routing

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TodoTaskComponent} from "../app/todo-task/todo-task.component";
import {DoneTaskComponent} from "../app/done-task/done-task.component";
import {LoginComponent} from "../app/auth/login/login.component";
import {AuthGuardService} from "../app/auth/auth-guard.service";

// to jest tablica routingu, w której definjujemy routing
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/todoTask',
    pathMatch: 'full'
    // to jest reguła
    // to jest przekirowanie na pustą ścieżkę , odniesiebie bedzie na todoTask
  },
  {
    path: 'todoTask',
    component: TodoTaskComponent,
    canActivate:[AuthGuardService]
    // nie bedziemy mogli wejsc na ta zakładke jak nie bedziemy zalogowani

  },

  {
    path: 'doneTask',
    component: DoneTaskComponent,
    canActivate:[AuthGuardService]
    // nie bedziemy mogli wejsc na ta zakładke jak nie bedziemy zalogowani
  },
  {
    path: 'login',
    component: LoginComponent
  }

  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {
}
