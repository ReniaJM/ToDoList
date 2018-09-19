import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout();
    this.router.navigate(['./login'])
  }
}
