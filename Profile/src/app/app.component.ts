import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile';
  user:User = {
    name: "Yumi",
    age: 8,
    favoriteColor: "red",
    favoriteDrink: "Peppermint Mocha",
    gender: "Male"
  };
  displayEdit:boolean = true;

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }
}
