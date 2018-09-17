import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent {
  constructor(private taskService: TaskService){

}
  save(){
    this.taskService.saveTasksDB();
  }

}
