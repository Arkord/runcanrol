import { Component } from '@angular/core';
import { isCordovaAvailable } from '../../services/is-cordova-available';
import { NavController, ModalController } from 'ionic-angular';
import { ContactDetailsPage } from './contact-details.page';
import { AddContactPage } from './add-contact.page';
import { Contacts, Contact, ContactField, ContactName, ContactFieldType } from '@ionic-native/contacts';

@Component({
	templateUrl: 'contacts.html'
})
export class ContactsPage {
	contacts: Contact[] = [];
	contactInfo: ContactFieldType = 'name';
	searchFilter: string;

	private nav: NavController;
	private modalController: ModalController;

	constructor(nav: NavController, modalController: ModalController, private cnts: Contacts) {
		this.nav = nav;
		this.modalController = modalController;
	}

	addContact() {
		let modal = this.modalController.create(AddContactPage);
		modal.onDidDismiss(newContact => {
			if (!newContact) {
				return;
			}

			let contact = this.cnts.create();
			contact.name = new ContactName(null, newContact.lastName, newContact.firstName);
			contact.phoneNumbers = [new ContactField('mobile', newContact.phoneNumber)];

			contact.save().then(() => {
				alert('Saved');
			}, (error) => {
				alert(error);
			})
		});
		modal.present();
	}

	findContacts() {
		if (!isCordovaAvailable()) {
			return false;
		}

		let options = {
			filter: this.searchFilter,
			multiple: true
		};
		this.contacts = [];

		this.cnts.find([this.contactInfo], options).then(response => {
			this.contacts = response;
		});
	}

	showDetails(contact: Contact) {
		console.log(contact);
		this.nav.push(ContactDetailsPage, {
			contact: contact
		});
	}
}
