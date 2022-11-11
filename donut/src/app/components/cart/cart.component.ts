import { Component, OnInit } from '@angular/core';
import { DonutDetail } from 'src/app/models/donut-detail';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:DonutDetail[] = [];
  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
    this.cart = this.donutService.cart;
  }

  removeDonut(d:DonutDetail):void{
    this.donutService.removeDonut(d);
  }

  getCalories():number{
    return this.cart.reduce((t,c) => t += c.calories,0);
  }

  getTotal():number{
    return this.cart.length;
  }

  getCartDistinct():DonutDetail[] {
    return [...new Map(this.cart.map(item =>[item.id, item])).values()];
  }

  getQuantity(donut:DonutDetail):number{
    return this.cart.reduce((t,c) =>{
      if(c.id == donut.id){
        return t+1;
      }
      else{
        return t;
      }
    } ,0)
  }

}
