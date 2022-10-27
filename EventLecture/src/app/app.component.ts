import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventLecture';
  newName:string = "";
  names:string[] = [
    "Fred", "Julie", "Sam", "Olivia", "Adam", "Jennifer"
  ];
  changeTitle(newTitle:string):void{
    this.title = newTitle;
  }

  addName(){
    this.names.push(this.newName);
  }
}
