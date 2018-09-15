import { Component, OnInit, Input} from '@angular/core';
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  taskDone: Array<string>=[];

  constructor(private taskService: TaskService) {
    this.taskService.getDoneListObs().subscribe((task: Array<string>) =>{
      this.taskDone= task;
    });
  }

  ngOnInit() {
  }

}
