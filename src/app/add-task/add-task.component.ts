import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/task";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;

  // dodajemy formularz


// usuwamy Emitter i output ktory wminitowałą emitask

  constructor(private taskService: TaskService, private authService: AuthService) { }
  // wstrzykujemy do konstruktowa serwis

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm(){
    return new FormGroup({
      // tutaj ustawiamy jego rozne własciwosći
      taskName: new FormArray([new FormControl(null, Validators.required)])
      // do FormArray przekazujemy tablice kontrolek
    });
  }

  add(){
    // tutaj dostaniejmy pełan listę tasków poprzedz przycisk dodaj wszystkie
    const taskList = this.createTaskList();
    this.taskService.add(taskList);
    this.addForm = this.initForm();
    // wywołanie tej funcji restartuje poczatkowy stan listy czyli jedna pozycja
  }

  createTaskList(): Array<Task>{
    const tasksList = new Array<Task>();
    const tasksArr= <[string]>this.addForm.get('taskName').value;
    tasksArr.forEach(taskName => {
     const task=  {name: taskName, userId: this.authService.user.uid,created: new Date().toLocaleString(),isDone: false}
      tasksList.push(task)
    });

    return tasksList;
  }


  addField(){
    const arr = <FormArray>this.addForm.get('taskName');
    // to jest rzutowanie listy na formArray, jest to lista typu Formarray
    arr.push(new FormControl (null,Validators.required));
  }
}
