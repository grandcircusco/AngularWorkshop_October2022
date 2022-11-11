import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/people';
import { PeopleService } from 'src/app/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  staff:People[] = [];
  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
    //NOT AN OBSERVABLE/API CALL, NO NEED TO SUBSCRIBE
    this.staff = this.peopleService.staff;
  }

}
