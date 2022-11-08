import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  filter:string = "";
  filteredTodo:Todo[] = [];
  todos: Todo[] = [
    {
      task:"Eat Dinner",
      completed: false
    },
    {
      task:"Caffeinate",
      completed:  true
    },
    {
      task: "Feed Yumi",
      completed: true
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.filteredTodo = this.todos;
  }

  getFiltered():Todo[] {
    return this.todos.filter(t => t.task.toLowerCase().includes(this.filter.toLowerCase()));
  }

  findIndex(target:Todo):number{
    return this.todos.findIndex(t => t.task == target.task && t.completed == target.completed);
  }

  setComplete(target:Todo):void{
    this.todos[this.findIndex(target)].completed = true;
  }

  removeTodo(target:Todo):void{
    this.todos.splice(this.findIndex(target), 1);
  }

  addTodo(target:Todo):void{
    this.todos.push(target);
  }

  displayCongrats():boolean {
    let result:boolean = true;

    //if more than 1, check complete
    if(this.todos.length >= 1){
      this.todos.forEach(t => {
        if(t.completed == false){
          result = false;
        }
      });
    }
    //else there is none
    return result;
  }
}
