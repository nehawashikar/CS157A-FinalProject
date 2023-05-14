import React from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';

class UserSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pharmacyID: 0,
            pharmacyName: "",
            pharmacyPhoneNumber: "",
            pharmacyWebsite: "",
        }
    }

    componentDidMount() {
        let newState = {
            pharmacyID:  window.location.pathname.split("/")[2],
            pharmacyName: "CVS Pharmacy",
            pharmacyPhoneNumber: "123-456-7890",
            pharmacyWebsite: "www.cvs.com",
        }
        this.setState(newState);
    }

    render() {
        return (
            <div style={{color:"#EF984B"}}>
                <div>
                    <h1>{this.state.pharmacyName} Portal</h1>
                </div>
                <div>
                    <h3>{this.state.pharmacyPhoneNumber}</h3>
                    <h3>{this.state.pharmacyWebsite}</h3>
                    <h1>  </h1>
                </div>
                <div>
                    <h5><Link style={{color:"#9544A2"}} to="/employee-login">Employee Login</Link></h5>
                    <h5><Link style={{color:"#9544A2"}} to="/customer-login">Customer Login</Link></h5>
                </div>
            </div>
        );
    }
}
export default UserSelect;