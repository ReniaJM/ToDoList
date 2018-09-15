import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TaskService} from "../../../services/task.service";

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
    this.taskService.add(this.newTask)
    this.newTask= '';

  }
}
