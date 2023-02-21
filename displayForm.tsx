import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import { useState } from 'react';
import formStyles from './displayForm.module.css'
import { IpersonDetails } from './model';
import React from 'react';
import { getContact } from './services';
import { addContact } from './services';

const DisplayForm = () => {
    const [details, setDetails] = useState({
        id: "",
        name: "",
        mail: "",
        mobile: "",
        landline: "",
        website: "",
        address: "",
    });
    // const data = {
    //     name: name.current.valueOf,
    //     mail: mail.current.value,
    //     phno: phno.current.value,
    //   }
    const [form, setForm] = useState(true);
    const handlerInputChange = (e: any) => {
        const { name, value } = e.target;
        setDetails((prevState: any) => ({ ...prevState, [name]: value }))

    }

    const submitForm = (e: any) => {
        
        e.preventDefault()
        if (details.name === "" || details.mail === "" || details.mobile === "" || details.landline === "" || details.website === "" || details.address === "") {
            alert("Please Enter all the Details")
            return (false)

        }
        else {
            setForm(false);
            return (addContact(details))
        }   // getContact(details)
    }
    return (
        // this.state = {
        //     customer: {
        //       firstName: props.firstName,
        //       lastName: props.lastName,
        //       status: props.status
        //     }
        //   }
        <div className={formStyles.displaySection}>
            <form action="" id="form" className={formStyles.form}>
                <div className={formStyles.section}>
                    <div className="label" id='section1'>
                        <label>Name</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="nameLabel" name='name' onChange={handlerInputChange} className={formStyles.nameLabel} />
                        <p id="nameError"></p>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Email</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="email" name='mail' onChange={handlerInputChange} className={formStyles.email} />
                        <p id="mailError"></p>
                    </div>
                </div>
                <div className="mobileSection">
                    <div className={formStyles.section}>
                        <div className="label">
                            <label>mobile</label>
                        </div>
                        <div className="textBox">
                            <input type="text" id="mobile" name='mobile' onChange={handlerInputChange} className={formStyles.mobile} />
                            <p id="phnoError"></p>
                        </div>
                    </div>
                    <div className={formStyles.section} id="landline">
                        <div className="label">
                            <label>landline</label>
                        </div>
                        <div className="textBox">
                            <input type="text" id="landlineText" name='landline' onChange={handlerInputChange} className={formStyles.landlineText} />
                            <p id="landlineError"></p>
                        </div>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>Website</label>
                    </div>
                    <div className="textBox">
                        <input type="text" id="website" name='website' onChange={handlerInputChange} className={formStyles.website} />
                        <p id="nameError"></p>
                    </div>
                </div>
                <div className={formStyles.section}>
                    <div className="label">
                        <label>address</label>
                        <p id="addressError"></p>
                    </div>
                    <div className="textBox">
                        <input type="text" id="address" name='address' onChange={handlerInputChange} className={formStyles.address} />
                    </div>
                </div>
                <div className={formStyles.button}>
                    <button onClick={submitForm}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default DisplayForm