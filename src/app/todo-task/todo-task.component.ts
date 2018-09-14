import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  // ten dekorator zezwala przyjmowanie o pustego tasklist danych
  @Input()
  taskList=[];

  @Output()
  emitDone= new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();


  remove(task:string){
    this.emitRemove.emit(task)
  }

  done(task:string){
    this.emitDone.emit(task)

  }

  getColor():string{
    return this.taskList.length >= 5 ? "red" :"green";

  }

  constructor() { }

  ngOnInit() {
  }

}
