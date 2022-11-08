import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo = {} as Todo;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  displayEdit:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  completeTodo():void{
    // this.todo.completed = true;
    this.complete.emit();
  }

  removeTodo():void{
    this.remove.emit();
  }

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }
}
