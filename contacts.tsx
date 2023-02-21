import contactStyles from "./contacts.module.css"
import { IpersonDetails } from "./model";
interface IContactState{
  // toggleContactDetails:(isVisible:boolean)=>void;
  contactList:IpersonDetails[];
}
const Contacts=(props:IContactState)=> {
    console.log(props.contactList);
    const contacts = props.contactList.map(contact =>
      // <div className={contactStyles.person} key={contact.id} onClick={(key)=>props.toggleContactDetails(true)}></div>
      <div className={contactStyles.person} key={contact.id}>
        <div className={contactStyles.name}>{contact.name}</div>
        <div className={contactStyles.mail}>{contact.mail}</div>
        <div className={contactStyles.phNo}>{contact.mobile}</div>
      </div>
    );
    return (<div className={contactStyles.contactSection}>{contacts}</div>);
  }
export default Contacts