import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  // ten dekorator zezwala przyjmowanie o pustego tasklist danych

  taskList=[];


  remove(task:string){
    this.taskService.remove(task);
  }

  done(task:string){
    this.taskService.done(task);
  }

  getColor():string{
    return this.taskList.length >= 5 ? "red" :"green";

  }

  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe((task: Array<string>) =>{
    this.taskList= task;
    });
  }

  ngOnInit() {
  }

}
