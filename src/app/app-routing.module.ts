import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { BrowserModule } from '@angular/platform-browser'
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactViewComponent } from './contacts/contact-view/contact-view.component';
const routes: Routes = [
    { path: 'app-list', component: ListComponent },
    { path: 'app-add-contact', component: AddContactComponent},
    { path: 'app-contact-item/:id', component:  ContactItemComponent  },
    { path: 'app-contact-view/:id', component: ContactViewComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}