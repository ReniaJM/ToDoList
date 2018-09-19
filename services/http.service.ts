import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Task} from "../models/task";
import {Observable} from "rxjs/index";
import {AuthService} from "../src/app/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly URL_DB = 'https://api.mlab.com/api/1/databases/todolist-angular/collections/tasks';
  readonly param: HttpParams

  constructor(private http: HttpClient, private authService: AuthService) {
   console.log(HttpService)
    }

    getParams(): HttpParams {
      const uid = this.authService.user.uid;
      const query = {'userId': uid}
      return new HttpParams().set('apiKey','t4OFF0b9B101IDDGKq6pD1lZttne-yG8').append('q', JSON.stringify(query));
    }


  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params:this.getParams()});

  }
// tutaj zamiast post powinna byc put, poniwaz jesli cos istanio w bazie bedzie to napisywac, metoda post bedzie wywalala blad jak juz podobnego cos istnieje
  saveTasks(list: Array<Task>){
    this.http.put(this.URL_DB,list,{params:this.getParams()}).subscribe(data =>{
      console.log(data)
    });

  }
}

// tutaj bedziemy implementowac zapytania do naszaego APi
