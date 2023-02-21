import { IpersonDetails } from './model';
import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import { useState } from 'react';
import { contactList } from './services';

const DisplayPersonDetails=(id:string)=>{
    return(
    console.log('1')
    // let currentContact=findContact(id);
    // let index=contactList.indexOf(currentContact);
    // console.log(contactList[parseInt(id)].name);
    // let clas=document.getElementById(id) as HTMLElement;
    // clas.className="active";
    // console.log(clas.className);
    // let form=document.getElementById("form") as HTMLElement;
    // let details=document.getElementById("details") as HTMLElement;
    // details.style.display = 'block';
    // form.style.display = 'none';
    // let nameSection=document.getElementById("nameSection") as HTMLTextAreaElement;
    // nameSection.value = contactList[index].name;
    // nameSection.disabled = true;
    // let mailSection=document.getElementById("mailSection") as HTMLTextAreaElement;
    // mailSection.value = "Email: " +contactList[index].mail;
    // mailSection.disabled = true;
    // let mobileSection=document.getElementById("mobilSection") as HTMLTextAreaElement;
    // mobileSection.value = "Mobile: " +contactList[index].mobile;
    // mobileSection.disabled = true;
    // let landlineSection=document.getElementById("landlineSection") as HTMLTextAreaElement;
    // landlineSection.value = "Landline: " +contactList[index].landline;
    // landlineSection.disabled = true;
    // let addresSection=document.getElementById("addresSection") as HTMLTextAreaElement;
    // addresSection.value = "Address: " +contactList[index].address;
    // addresSection.disabled = true;
    // let dltBtn = document.getElementById("dltImg") as HTMLElement;
    // dltBtn.setAttribute('onclick','deleteContact(id)');
    // var i = id;
    // for(let j in contactList){
    //     if(j!=i && contactList[j]){
    //         let ele=document.getElementById(j) as HTMLElement;
    //         ele.className="variable";
    //     }
    // }
    // let editBtn = document.getElementById("editImg") as HTMLElement;
    // editBtn.setAttribute('onclick','contactServices.update(id)');
    // )}
    )}
export default DisplayPersonDetails