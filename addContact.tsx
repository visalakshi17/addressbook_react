import { IpersonDetails } from "./model";
import { contactList } from "./services";

function updateContact(contact:IpersonDetails){
    let updatedContacts=[...contactList];
    updatedContacts.map(updatedContact => {
      if(updatedContact.id=contact.id){
        updatedContact.name=contact.name;
        updatedContact.mail=contact.mail;
        updatedContact.mobile=contact.mobile;
        updatedContact.landline=contact.landline;
        updatedContact.website=contact.website;
        updatedContact.address=contact.address;
      }
    });
    //contacts(updatedContacts);
  }