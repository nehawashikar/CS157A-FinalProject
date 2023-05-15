import React from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';

class SearchCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            res: []
        };
    }

    async handleClick() {
        ///send this.state.input
        let x = [
            {
                name: "John Smith",
                id: 1,
                email: "johnsmith@gmail.com"
            },
            {
                name: "Anita Pee",
                id: 2,
                email: "funnyname@gmail.com"
            }
        ];

        await this.setState({res: x});
    }

    render() {
        return (
            <div style={{color:"#9544A2"}}>
                <h1>Search for Customer</h1>

                <div>
                    <p>Enter query like this</p>
                    <p>identifier: value</p>
                    <p>Valid identifiers are id, name, and email. Click on a customer's <span style={{color:"#EF984B"}}>name</span> to edit their prescription information</p>
                    
                    <span style={{}}>
                        <input style={{width:900, borderWidth: 4, borderColor:"#EF984B"}} placeholder='ex. name: John Smith'></input>
                        <button style={{width:100, borderWidth: 4, borderColor:"#EF984B"}}onClick ={async () => await this.handleClick()}>Search</button>
                    </span>
                </div>

                <div>
                    { 
                        (this.state.res.length != 0) ? (
                            <ol>
                                {this.state.res.map((customer, index) => (
                                    <p key={index}>{customer.id}  <Link style={{color:"#EF984B"}} to={`/edit-prescription-info/${customer.id}`}>{customer.name}</Link>    {customer.email}</p>
                                ))}
                            </ol>
                        ) : (
                            <p></p>
                        )

                    }
                </div>
                <button><Link to="/employee-homepage">Go Back To Homepage</Link></button>
            </div>
        );
    }
}

export default SearchCustomer;


/*
<ol>
                                {this.state.res.map((cust, index) => {
                                    <li key={index}>{index}. {cust.name} <p>{cust.email}  {cust.id}</p></li>
                                })}
                            </ol>
*/