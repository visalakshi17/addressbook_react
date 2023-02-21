import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import { useState } from 'react';
import displayContactsStyles from './displayContacts.module.css';
import displayPersonDetails from './displayPersonDetails'
import { IpersonDetails } from './model';

const DisplayContacts = () => {
    return (
        <div className={displayContactsStyles.contactSection}>
            <div className={displayContactsStyles.contacts}>
                <p>CONTACTS</p>
            </div>
            <div id="chk"></div>
        </div>)
}
export default DisplayContacts