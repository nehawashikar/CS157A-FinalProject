import React from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';

class EditPrescriptionInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerID: null,
            employeeID: null,
            pName: "",
            pID: null,
            pQuantity: null,
            pFrequency: ""
        };
    }

    componentDidMount() {
        //get prescription info
        this.setState({
            customerID: window.location.pathname.split("/")[2],
            employeeID: this.props.employeeID,
            pName: "zyrtec",
            pID: 5,
            pQuantity: 20,
            pFrequency: 2
        });
    }

    render() {
        return (
            <div style={{color:"#EF984B"}}>
                <h1>EditPrescriptionInfo</h1>
                <div>
                    <span>
                        <p>Prescption ID: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input placeholder={`${this.state.pID}`} onChange={async (event) => await this.setState({pID: event.target.value})}/></p> 
                    </span>
                </div>
                <div>
                    <span>
                        <p>Prescription Name: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input placeholder={`${this.state.pName}`} onChange={async (event) => await this.setState({pName: event.target.value})}/></p> 
                    </span>
                </div>
                <div>
                    <span>
                        <p>Prescription Quantity: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input placeholder={`${this.state.pQuantity}`} onChange={async (event) => await this.setState({pQuantity: event.target.value})}/></p> 
                    </span>
                </div>
                <div>
                    <span>
                        <p>Prescription Frequency: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input placeholder={`${this.state.pFrequency}`} onChange={async (event) => await this.setState({pFrequency: event.target.value})}/></p> 
                    </span>
                </div>

                <button onClick ={async () => await this.handleSubmit()}>Save And Submit New Info</button>
                <button><Link to="/search-customer">Go Back To Customer Search</Link></button>
                <button><Link to="/employee-homepage">Go Back To Homepage</Link></button>
            </div>
        );
    }
}

export default EditPrescriptionInfo;