import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() delete = new EventEmitter<Contact>();
  @Input() contact:Contact = {} as Contact;
  constructor() { }

  ngOnInit(): void {
  }

  deleteContact(): void {
    this.delete.emit(this.contact)
  }

}
