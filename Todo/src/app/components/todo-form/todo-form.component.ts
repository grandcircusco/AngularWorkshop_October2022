import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo:Todo = {} as Todo;
  @Output() save = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }


  submitTodo():void{
    let newTodo:Todo = {
      task: this.todo.task,
      completed: false
    };

    this.save.emit(newTodo);
  }
}
