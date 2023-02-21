import ReactDOM from 'react-dom/client';
import { Component, ReactNode } from 'react';
import './details.css';
export default class Details extends Component {
    render() {
        return(
            <div className="details" id="details">
                <div className="topSection">
                    <div className="nameSection"><input type="text" id="nameSection"/></div>
                    <div className="edit"><a href="#editImg"><img src={process.env.PUBLIC_URL + "/edit1.jpg"}/></a><p>EDIT</p></div>
                    <div className="delete" id="dlt"><a href="#dltImg"> <img src={process.env.PUBLIC_URL + "/delete1.png"} id="dltImg"/></a><p id="dltText">DELETE</p></div>
                </div>
                <div className="mailSection">
                    <input type="text" id="mailSection"/>
                    <p id="mailError"></p>
                </div>
                <div className="mobileSection">
                    <input type="text" id="mobilSection"/>
                    <p id="phnoError"></p>
                    <input type="text" id="landlineSection"/>
                    <p id="landlineError"></p>
                </div>
                <div className="websiteSection">
                    <input type="text" id="websiteSection"/>
                    <p id="websiteError"></p>
                </div>
                <div className="addressSection">
                    <input type="text" id="addresSection"/>
                    <p id="websiteError"></p>
                </div>
            </div>
                )
    }
}