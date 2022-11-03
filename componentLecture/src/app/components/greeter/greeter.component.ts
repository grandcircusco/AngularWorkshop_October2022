import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  @Input() name:string = "Fred";
  @Output() chosen = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chooseName():void{
    this.chosen.emit(this.name);
  }
}
