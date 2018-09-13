import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  newTask: string;
  taskList: Array<string>=[];
  taskDone: Array<string>=[];

  add(){
    this.taskList.push(this.newTask);
    this.newTask = ''

  }
  remove(task:string){
    this.taskList = this.taskList.filter(e => e !== task);
    // sparwdzzamy czy element e jest rózny od tego taska co przechodzi jezli warunek jest sprawdzony czyli true to zachowa ten element jesli bedzie odwronie to go usuwa

  }
  done(task:string){
    this.taskDone.push(task);
    this.remove(task);

  }
}
