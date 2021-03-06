import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {User} from "firebase";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 user: User;

// służy do rejestracji logowania
  constructor(public angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user =>{
      this.user= user;
    });
  }


  login(email: string, password: string){
    this.angularFire.auth
      .signInWithEmailAndPassword(email, password)
      // to jest promiss
      .then(user =>{
        this.router.navigate(['/todoTask']);
      })
      .catch(err =>{
        console.log(err)
      });
  }

  signup(email: string, password: string){
    this.angularFire.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user =>{
        console.log(user)
      })
      .catch(err =>{
        console.log(err)
      });
  }

  logout(){
    this.angularFire.auth.signOut();
  }
}

