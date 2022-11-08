import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  //dependency injection
  constructor(private http:HttpClient) { }
  url:string = "https://dwolverton.github.io/juneteenth/public/api/quotes.json";

  fetchQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url);
  }
}
