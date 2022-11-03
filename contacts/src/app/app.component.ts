import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts';
  contacts:Contact[] = [
    {
      name:"Justin Jones",
      email:"Justin@grandcircus.co",
      image:"https://i.pravatar.cc/150?img=15"
    },
    {
      name: "Nicholas Maassen",
      email: "Nicholas@grandcircus.co",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  addNewContact(newContact:Contact):void{
    this.contacts.push(newContact);
  }

  deleteContact(contact:Contact):void{
    let index:number = this.contacts.findIndex(c => (c.name == contact.name) && (c.email == contact.email) && (c.image == contact.image));
    this.contacts.splice(index, 1);
  }
}
