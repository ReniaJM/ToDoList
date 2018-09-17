import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;


// usuwamy Emitter i output ktory wminitowałą emitask

  constructor(private taskService: TaskService) { }
  // wstrzykujemy do konstruktowa serwis

  ngOnInit() {
  }
  add(){
    /* to jest task typu szago interfejsu*/
    const task: Task = ({name: this.newTask, created: new Date().toLocaleString(),isDone: false});
    this.taskService.add(task);
    this.newTask= '';

  }
}
