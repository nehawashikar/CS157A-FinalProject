import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';


function CustomerPrescriptionInfo(props) {
    const [pName, setPName] = useState("");
    const [pID, setPID] = useState(0);
    const [pQuantity, setPQuantity] = useState(0);
    const [pFrequency, setPFrequency] = useState(0);

    useEffect(() => {
        async function actual() {
            async function getPrescriptionInfo() {
                //get name
                return ["zyrtec",1,20,1];
            }
            let x = await getPrescriptionInfo();
            await setPName(x[0]);
            await setPID(x[1]);
            await setPQuantity(x[2]);
            await setPFrequency(x[3]);
        }
        actual();
    }, []);

    return (
        <div style={{color:"#EF984B"}}>
            <h1>Prescription Information</h1>
            <h3>Prescription Name: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{pFrequency}</h3>
            <h3>Prescription ID: &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{pID}</h3>
            <h3>Prescription Quantity: &ensp;&ensp;&ensp;{pQuantity}</h3>
            <h3>Prescription Frequency: &ensp;&ensp;&ensp;{pFrequency}</h3>
            <button><Link to="/customer-homepage">Go Back To Homepage</Link></button>
            
        </div>
    );
}

export default CustomerPrescriptionInfo;