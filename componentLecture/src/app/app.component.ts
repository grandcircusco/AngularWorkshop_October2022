import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainName = "Justin";
  title = 'componentLecture';

  changeName(newName:string):void{
    this.mainName = newName;
  }
}
