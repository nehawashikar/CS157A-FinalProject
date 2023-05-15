import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';

function CustomerHomepage(props) {
    const [name, setName] = useState("");

    useEffect(() => {
        async function actual() {
            async function getName() {
                //get name
                return "Joe";
            }
            let x = await getName();
            setName(x);
        }
        actual();
    }, []);

    return (
        <div style={{color:"#EF984B"}}>
            <h2>Welcome {name}!</h2>
            <h4 ><Link style={{color:"#9544A2"}} to="/customer-update-info">Update Personal Information</Link></h4>
            <h4 ><Link style={{color:"#9544A2"}} to="/customer-prescription-info">View Prescription Information</Link></h4>
            <button onClick={async () => await props.setuid(null)}><Link to="/">Logout</Link></button>
        </div>
    );
}

export default CustomerHomepage;