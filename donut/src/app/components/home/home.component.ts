import { Component, OnInit } from '@angular/core';
import { DonutList } from 'src/app/models/donut-list';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  donutList:DonutList = {} as DonutList;
  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
    this.donutService.fetchAllDonuts().subscribe((response:DonutList)=>{
      // console.log(response);
      this.donutList = response;
    });
  }

}
