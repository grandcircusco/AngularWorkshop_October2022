import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  @Input() quote:Quote = {} as Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
