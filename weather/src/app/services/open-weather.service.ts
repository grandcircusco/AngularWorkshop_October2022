import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenWeather } from '../models/open-weather';
import { Secret } from '../models/secret';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http:HttpClient) { }
  url:string ="https://api.openweathermap.org/data/2.5/weather" //?q=Detroit&appid=f13d9a4c716f47f7fa06bc732c55e049&units=imperial
  apiKey:string = Secret.apiKey;

  fetchRequestedWeather(city:string):Observable<OpenWeather> {
    return this.http.get<OpenWeather>(`${this.url}?q=${city}&appid=${this.apiKey}&units=imperial`);
  }
}
