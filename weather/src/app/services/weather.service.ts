import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url:string = "https://api.weather.gov/gridpoints/DTX/65,33/forecast";
  constructor(private http:HttpClient) { }

  fetchWeather():Observable<Weather>{
    return this.http.get<Weather>(this.url);
  }
}
