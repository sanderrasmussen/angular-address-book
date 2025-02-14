import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACTS } from '../data/contact';
import { Contact } from '../types';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';


@Injectable({
  providedIn: 'root',
})

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContactsModule {
  public contacts: Contact[] = CONTACTS;

  public GetContactById(id: number): Contact | undefined {
    return this.contacts.find((c) => c.id ===id);
  }
 }
