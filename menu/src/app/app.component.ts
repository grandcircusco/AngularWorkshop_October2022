import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  discountedPercent:number = .5;
  title = 'menu';
  Menu:MenuItem[] = [
    {
      name:"Chicken Fingers",
      category: "Dinner",
      price:11.99,
      discounted: true
    },
    {
      name:"Pizza",
      category: "Dinner",
      price:11.99,
      discounted: false
    },
    {
      name:"Wings",
      category: "Sides",
      price: 8.99,
      discounted: true
    },
    {
      name:"Breadsticks",
      category: "Sides",
      price: 4.99,
      discounted: false
    },
    {
      name:"Ceasar Salad",
      category: "Salads",
      price:5.99,
      discounted: false
    },
    {
      name:"Cinnamon Roll",
      category: "Dessert",
      price: 8.99,
      discounted: false
    }
  ];
}
