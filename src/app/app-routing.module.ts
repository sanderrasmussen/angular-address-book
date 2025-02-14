import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contacts/list/list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { BrowserModule } from '@angular/platform-browser'
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
const routes: Routes = [
    { path: 'app-list', component: ListComponent },
    { path: 'app-add-contact', component: AddContactComponent},
    { path: 'app-contact-item', component:  ContactItemComponent  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}