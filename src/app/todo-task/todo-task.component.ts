import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/task";
import {listener} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  // ten dekorator zezwala przyjmowanie o pustego tasklist danych

  taskList:Array<Task>= [];


  remove(task:Task){
    this.taskService.remove(task);
  }

  done(task:Task){
    // nie ma inicjalizacji nowej daty musimy dlatego musimy tu wpisac
    // task.end = new Date().toLocaleString();
    this.taskService.done(task);
  }

  getColor():string{
    return this.taskList.length >= 5 ? "red" :"green";

  }

  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe((task: Array<Task>) =>{
    this.taskList= task.filter(t => t.isDone === false);
    // lista zadan pobierana jest z serwisu, angular nie jest w stanie wykryc czy cos pojawilo sie w naszej liscie, on tylko sparwdza czy nasza lista nie ma nowej referencji, czy całkowicei nie pojawiala sie zupełnei nowa lista, jeslei zmieniala sie referecja w naszym komponencie to on odświezy caly widok aplikacji, ale ejstli odbieramy ta sama referencje, ta referecja zawiera nowe taski, to angular nie jest w stanie wykryc ze cos sie tu zmienilo, dlatego przy pobieraniu naszej listy, mozemy uzyc metody slice (), ktora zwroci nowa "ta sama " tablice ale nowa listę z nowa referencja, wtedy nagular wykryje ze pojawia sie nowa lista i wtedy moze pure w pie ustawic na true
    //   wtedy gdy dodaje do mojej listy robimy na niej slice() z zwraca jest nowa referencja do tej listy podmieniana w naszym komponencie, angulat wtedy wyłapuje to i odzwiza nasz komponent, Gdy nie bylo tego slice pojawia sie co chwile ta sama lista z ta sama referencja dlatego nazy unkac inpure pipe
      // tutaj musilismy filtrowac tablice taskow czy sa na false
    });
  }

  ngOnInit() {
  }
  save(){
    this.taskService.saveTasksDB();
  }


}
