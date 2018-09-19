import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { CheckedDirective } from 'shared/checked.directive';
import { DateDirective } from 'shared/date.directive';
import { TransformTaskPipe } from '../../shared/transform-task.pipe';
import { SortNamePipe } from '../../shared/sort-name.pipe';
import {TaskService} from "../../services/task.service";
import {HttpService} from "../../services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../assets/app-routing-module";
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";


const config = environment.config;

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,

  ],
  providers: [TaskService, HttpService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
