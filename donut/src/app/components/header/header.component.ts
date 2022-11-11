import { Component, OnInit } from '@angular/core';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
  }

  getCartCount():number{
    return this.donutService.cart.length;
  }
}
