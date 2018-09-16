import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/index";
import {Task} from "../models/task";

@Injectable()
export class TaskService{
  title = 'ToDoList';
  private taskList: Array<Task>=[];
  private taskDone: Array<Task>=[];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);
  // BehaviorSubject postwał dlatego bo juz cos zostało wrzucone do listy a pozniej zasubskrybowalismy, podłaczylismy sie za popzno do naszego subjecta, observable nie wysłął juz nam ten informacji dlatego powstal ten BehaviorSubject, dlatego wtedy i tak dostamy ta ostania informcje
  constructor() {
    this.taskList = [
      {name:'sprzatnie', created: new Date()},
      {name:'jedzenie', created: new Date()},
      {name:'spanie', created: new Date()},
      {name:'kochanie', created: new Date()}];
    // te sringi musimy pozamieniac na obiekty js, jest to lista obiektów task
    this.taskListObs.next(this.taskList);
  }


  add(task:Task){
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }

  remove(task:Task){
    this.taskList = this.taskList.filter(e => e !== task);
    // sparwdzzamy czy element e jest rózny od tego taska co przechodzi jezli warunek jest sprawdzony czyli true to zachowa ten element jesli bedzie odwronie to go usuwa
    this.taskListObs.next(this.taskList);
    // usunelismy liste zadan i kolejen amusi byc nasluchiwana dlatego jest wyowałanie
  }
  done(task:Task){
    this.taskDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.taskDone);

  }

  getTaskListObs(): Observable<Array<Task>>{
    return this.taskListObs.asObservable();
  }

  getDoneListObs(): Observable<Array<Task>>{
    return this.taskDoneObs.asObservable();

  }
}
