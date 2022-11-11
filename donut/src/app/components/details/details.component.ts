import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetail } from 'src/app/models/donut-detail';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  donut:DonutDetail = {} as DonutDetail;
  constructor(private donutService:DonutService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    let id:number = Number(params.get("id"));
    // console.log(id);
    this.donutService.fetchDonutById(id).subscribe((response:DonutDetail)=>{
      // console.log(response);
      this.donut = response;
    });
  }

  purchaseDonut():void{
    this.donutService.addDonut(this.donut);
  }

}
