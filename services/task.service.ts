import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/index";
import {Task} from "../models/task";
import {HttpService} from "./http.service";

@Injectable()
export class TaskService{
  title = 'ToDoList';
  // private taskList: Array<Task>=[];
  // private taskDone: Array<Task>=[];
  // suwamy listę ponieważ isDone informuje nas czy task zostal zrobiony czy nie

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  // private taskDoneObs = new BehaviorSubject<Array<Task>>(this.taskList);
  // BehaviorSubject postwał dlatego bo juz cos zostało wrzucone do listy a pozniej zasubskrybowalismy, podłaczylismy sie za popzno do naszego subjecta, observable nie wysłął juz nam ten informacji dlatego powstal ten BehaviorSubject, dlatego wtedy i tak dostamy ta ostania informcje
  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(list =>{
    this.taskListObs.next(list);
    });
    // gdy nasz taskservice bedzie sie ladowal do zwraca sie do httpservice, tam wezmie metoge getTasks(), subskrybujac otrzyma ta liste tasków, ktora wrzuce do taskListObs


    // const taskList=
    //   [
    //   {name:'sprzatnie piwnicy', created: new Date().toLocaleString(), isDone: false},
    //   {name:'ćwiczenia', created: new Date().toLocaleString(), isDone: false},
    //   {name:'koszenie trawy', created: new Date().toLocaleString(), isDone: false},
    //   {name:'spacer z psem', created: new Date().toLocaleString(), isDone: false},
    //   {name:'lenistwo', created: new Date().toLocaleString(),end: new Date().toLocaleString(), isDone: true}
    //   ];
    // te sringi musimy pozamieniac na obiekty js, jest to lista obiektów task
    // musimy dodac przy datach .toLocaleString() aby nie bylo konflikutu z interfesejsem i lokalna baza danych na chmurze
    // construktor inicjalizuje liste, ktora jest propagowna przez BehaviorSubject
    // this.taskListObs.next(taskList);
  }


  add(task:Task){
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);
  }

  remove(task:Task){
    const list = this.taskListObs.getValue().filter(e => e !== task);
    // sparwdzzamy czy element e jest rózny od tego taska co przechodzi jezli warunek jest sprawdzony czyli true to zachowa ten element jesli bedzie odwronie to go usuwa
    this.taskListObs.next(list);
    // usunelismy liste zadan i kolejen amusi byc nasluchiwana dlatego jest wyowałanie
  }
  done(task:Task){
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
    // this.taskDone.push(task);
    // this.remove(task);
    // this.taskDoneObs.next(this.taskDone);
// tutaj przychodza taski ktore zostały wykonane
//     pobieramy wartosc tej listy, która jest obserwowana
//     metoda next sluży do ropopagowania informcji sa nowe lementy w subjectach i nalezy je rozpopagowac i wszytkie metody ktore to subskrybuja tego subjecta pobiara soebie te informacje
  }

  getTaskListObs(): Observable<Array<Task>>{
    return this.taskListObs.asObservable();
  }

  // getDoneListObs(): Observable<Array<Task>>{
  //   return this.taskDoneObs.asObservable();
  //
  // }

  saveTasksDB(){
  this.httpService.saveTasks(this.taskListObs.getValue());
    // pobieramy wartosci listy aby zapisac je w bazie danych
  }
}
