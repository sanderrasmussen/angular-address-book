import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACTS } from '../data/contact';
import { Contact } from '../types';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';


@Injectable({
  providedIn: 'root',
})

@NgModule({
  declarations: [ListComponent, ContactItemComponent, AddContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactsModule {
  public contacts: Contact[] = CONTACTS;

  public GetContactById(id: number): Contact | undefined {
    return this.contacts.find((c) => c.id ===id);
  }
  public AddContact(contact: Contact){
    contact.id=this.contacts.length+1; 
    this.contacts.push(contact);

  }
 }
