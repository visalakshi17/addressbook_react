import React, { useState } from 'react';
import './App.css';
import { Component } from 'react';
import { addContact, contactList } from './services';
import { IpersonDetails } from './model';
import Header from './header';
import DisplayContacts from './displayContacts';
import Contacts from './contacts';
import DisplayForm from './displayForm';
import Details from './details';
import { getContact } from './services';

interface IAppState{
  show:boolean;
  displayContactDetails:boolean;
  currentContacts:IpersonDetails[];
}

export default class App extends Component<{},IAppState>{
  constructor(props:{}) {
    super(props);
    this.state = {show: false,
      displayContactDetails:false,
      currentContacts:contactList,
      };
  }
 
  toggleContactDetails=(isVisible:boolean)=>{this.setState({displayContactDetails:isVisible})}
  toggleForm=(isVisible:boolean)=>{this.setState({show:isVisible})}
  // setkey=(setkey:string)=>{this.setState({key:setkey})}
  // (id:string){
  //   this.setState({ activeContact:getContact(this.state.contactList,id),showContactInfo:true,showForm:false,initialPage:true});
  // }
  render(){
  return(
    <React.Fragment>
      <Header toggleForm={this.toggleForm} toggleContactDetails={this.toggleContactDetails}/>
      <div className='Display'>
        <div className='contactDisplay'>
          <DisplayContacts/>
          <Contacts contactList={contactList}/>
          {/* <Contacts toggleContactDetails={this.toggleContactDetails} contactList={contactList}/> */}
          {/* <DisplayPersonDetails /> */}
          {/* {this.state.show && <DisplayPersonDetails/>} */}
          {/* {this.state.show && <DisplayPersonDetails setkey={this.setkey}/>} */}
        </div>
        <div>{this.state.show && <DisplayForm />}</div>
      </div>
      <Details/>
      
      {/* {
        this.state.show && <DisplayDetails/>
      }
      <button onClick={()=>this.setState({show:true})}>button</button> */}
    </React.Fragment>
  )}
  }
