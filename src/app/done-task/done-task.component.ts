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
    this.taskService.getTaskListObs().subscribe((task: Array<Task>) =>{
      this.taskDone= task.filter(t=> t.isDone === true);
    });
  }
// zmieniamy taskDoneObs na getTaskListObs, bedziemy wtedy taski filtrowac, czyli przychodzaca lista mozmey na niej wyowac metode filter(), w niej przekazuje funkcje ktora operuje na jedym obiekcie czyli task, sparwdzamy czy sa taki ktore sa wykonane
  ngOnInit() {
  }

}
