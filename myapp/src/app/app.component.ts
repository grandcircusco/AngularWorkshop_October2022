import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTitle:boolean = false;
  title = 'myapp';
  names:string[] = ["fred flintstone", "Julie", "Sam", "Olivia", "Adam", "Jennifer"];
  currentCash:number = 0.42;
  currentDate:Date = new Date();

  staff:Employee[] = [
    {
      id:1,
      name:"Justin"
    },
    {
      id:2,
      name:"Nicholas"
    },
    {
      id:3,
      name:"April"
    }
  ];
}
