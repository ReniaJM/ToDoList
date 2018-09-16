import { Component, OnInit, Input} from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/task";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  taskDone: Array<Task>=[];

  constructor(private taskService: TaskService) {
    this.taskService.getDoneListObs().subscribe((task: Array<Task>) =>{
      this.taskDone= task;
    });
  }

  ngOnInit() {
  }

}
