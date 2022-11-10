import { Component, OnInit } from '@angular/core';
import { OpenWeather } from 'src/app/models/open-weather';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-open-weather',
  templateUrl: './open-weather.component.html',
  styleUrls: ['./open-weather.component.css']
})
export class OpenWeatherComponent implements OnInit {

  city:string = "Detroit";
  openWeather:OpenWeather = {} as OpenWeather;
  constructor(private openWeatherService:OpenWeatherService) { }

  ngOnInit(): void {
    this.searchCity();
  }

  searchCity():void{
    this.openWeatherService.fetchRequestedWeather(this.city).subscribe((response:OpenWeather) =>{
      this.openWeather = response;
      console.log(response);
    });
  }

}
