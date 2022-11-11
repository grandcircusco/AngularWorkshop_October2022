import { Injectable } from '@angular/core';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  staff:People[] = [
    {
      id:0,
      name:"Justin",
      role:"Manager",
      salary:70000,
      department: "Snack Department"
    },
    {
      id:1,
      name:"Nicholas",
      role:"Ceo",
      salary:1000000,
      department: "Games Department"
    },
    {
      id:2,
      name:"April",
      role:"Head Manager",
      salary:800000,
      department: "Games Department"
    },
    {
      id:3,
      name:"Bryan",
      role:"Janitor",
      salary:40000,
      department: "Snacks Department"
    },
    {
      id:4,
      name:"David",
      role:"Employee",
      salary:60000,
      department: "Snacks Department"
    },
  ];

  getById(id:number):People{
    let index:number = this.staff.findIndex(s => s.id == id);
    return this.staff[index];
  }
}
