import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weather:Weather = {} as Weather;
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.fetchWeather().subscribe((response:Weather) => {
      console.log(response);
      this.weather = response;
    });
  }

}
