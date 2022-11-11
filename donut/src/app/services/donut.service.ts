import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutDetail } from '../models/donut-detail';
import { DonutList } from '../models/donut-list';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  //CART
  cart:DonutDetail[] = [];
  addDonut(d:DonutDetail){
    this.cart.push(d);
    console.log(this.cart);
  }
  removeDonut(donut:DonutDetail){
    let index:number = this.cart.findIndex(d => d == donut);
    this.cart.splice(index,1);
  }

  //API
  url:string = "https://grandcircusco.github.io/demo-apis/donuts";
  ending:string = ".json";
  constructor(private http:HttpClient) { }

  fetchAllDonuts():Observable<DonutList>{
    return this.http.get<DonutList>(`${this.url}${this.ending}`);
  }
  fetchDonutById(id:number):Observable<DonutDetail>{
    return this.http.get<DonutDetail>(`${this.url}/${id}${this.ending}`);
  }
}
