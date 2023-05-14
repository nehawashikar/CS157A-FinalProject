import React from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';

class CustomerUpdateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_ID: props.customerID,
            name: "",
            address: "",
            phoneNumber: "",
            email: "",
            dob: "",
            msg: "",
            error: false
        }
    }

    componentDidMount() {
        //fetch data
        let newState = {
            name: "Joe",
            address: "123 example st",
            phoneNumber: "123-456-7890",
            email: "joe@gmail.com",
            dob: "01-01-2003"
        }
        this.setState(newState);
    }

    async handleSubmit() {
        //send state to API to update DB
        if (1) {
            await this.setState({msg: "Information Updated"});
        }
        else {
            await this.setState({msg: "Error Updating Information"});
            await this.setState({error: true});
        }
    }

    render() {
        return (
            <div style={{color:"#EF984B"}}>
                <h1>Update Information</h1>

                {
                    (this.state.error) ? (
                        <h3 style={{color:"red"}}>{this.state.msg}</h3>
                    ) : (
                        <h3 style={{color:"green"}}>{this.state.msg}</h3>
                    )
                }

                <div>
                    <span>
                        <p>Name: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<input placeholder={`${this.state.name}`} onChange={async (event) => await this.setState({name: event.target.value})}/></p> 
                    </span>
                </div>
                <div>
                    <span>
                        <p>Address: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<input placeholder={`${this.state.address}`} onChange={async (event) => await this.setState({address: event.target.value})}/></p> 
                    </span>
                </div>
                <div>
                    <span>
                        <p>Phone Number: &ensp;&ensp; <input placeholder={`${this.state.phoneNumber}`} onChange={async (event) => await this.setState({phoneNumber: event.target.value})}/></p> 
                    </span>
                </div>
                <div>
                    <span>
                        <p>Email: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input placeholder={`${this.state.email}`} onChange={async (event) => await this.setState({email: event.target.value})}/></p> 
                    </span>
                </div>

                <button onClick ={async () => await this.handleSubmit()}>Save And Submit New Info</button>
                <button><Link to="/customer-homepage">Go Back To Homepage</Link></button>
                
            </div>
        );
    }
}

export default CustomerUpdateInfo;