import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable()
export class TaskService{
  title = 'ToDoList';
  private taskList: Array<string>=[];
  private taskDone: Array<string>=[];

  private taskListObs = new BehaviorSubject<Array<string>>(this.taskList);
  private taskDoneObs = new BehaviorSubject<Array<string>>(this.taskDone);
  // BehaviorSubject postwał dlatego bo juz cos zostało wrzucone do listy a pozniej zasubskrybowalismy, podłaczylismy sie za popzno do naszego subjecta, observable nie wysłął juz nam ten informacji dlatego powstal ten BehaviorSubject, dlatego wtedy i tak dostamy ta ostania informcje
  constructor() {
    this.taskList = ['sprzatnie', 'jedzenie', 'spanie', 'kochanie'];
    this.taskListObs.next(this.taskList);
  }


  add(task:string){
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }

  remove(task:string){
    this.taskList = this.taskList.filter(e => e !== task);
    // sparwdzzamy czy element e jest rózny od tego taska co przechodzi jezli warunek jest sprawdzony czyli true to zachowa ten element jesli bedzie odwronie to go usuwa
    this.taskListObs.next(this.taskList);
    // usunelismy liste zadan i kolejen amusi byc nasluchiwana dlatego jest wyowałanie
  }
  done(task:string){
    this.taskDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.taskDone);

  }

  getTaskListObs(): Observable<Array<string>>{
    return this.taskListObs.asObservable();
  }

  getDoneListObs(): Observable<Array<string>>{
    return this.taskDoneObs.asObservable();

  }
}
