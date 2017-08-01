import { NgModule } from '@angular/core';
import { Contacts } from '@ionic-native/contacts';
import { IonicModule } from 'ionic-angular';
import { AddContactPage } from './add-contact.page';
import { ContactDetailsPage } from './contact-details.page';

import { ContactsPage } from './contacts.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ContactsPage, ContactDetailsPage, AddContactPage],
	entryComponents: [ContactsPage, ContactDetailsPage, AddContactPage],
	providers: [Contacts]
})
export class ContactsModule {

}