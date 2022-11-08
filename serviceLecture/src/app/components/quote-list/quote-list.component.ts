import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes:Quote[] = [];

  //dependency inject
  constructor(private quoteService:QuoteService) { }

  ngOnInit(): void {
    console.log(1);

    //subscribe is asynch
    this.quoteService.fetchQuotes().subscribe(
      //working call
      (response:Quote[]) => {
        
      console.log(response);
      this.quotes = response;
      }, 
      //error handling
      (err) =>{
        console.log(err);
      }
    );
      
    //because subscribe is asynch, this will appear b4 api data
    console.log(2)
  }

}
