import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output() newContact = new EventEmitter<Contact>();
  
  contact:Contact = {} as Contact;
  pictures:picture[] = [
    {name:"Formal Women", url: "https://i.pravatar.cc/150?img=1"},
    {name:"Old man", url: "https://i.pravatar.cc/150?img=17"},
    {name:"Covered Woman", url: "https://i.pravatar.cc/150?img=47"},
    {name:"Young Music Fan", url:"https://i.pravatar.cc/150?img=7"},
    {name:"Bathing Asian", url:"https://i.pravatar.cc/150?img=62"}
  ]
  
  constructor() { }


  ngOnInit(): void {
  }

  addContact(): void{
    let result:Contact = { ...this.contact };
    this.newContact.emit(result);
    this.contact = {} as Contact;
  }

  
}

interface picture{
  name: string;
  url: string;
}
