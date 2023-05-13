import React from 'react';
import {useState, use} from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';
import Dropdown from 'react-dropdown';

import './SelectPharmacy.css'


function SelectPharmacy() {
    const[pharmacyNames, setPharmacyNames] = useState([]);
    const[selectedPharmacy, setSelectedPharmacy] = useState("");


    if (pharmacyNames.length == 0) {
        //get list of pharmacies 
        setPharmacyNames(["CVS Pharmacy", "Walgreens", "SJSU Pharmacy"]);
    }
    return (
        <div className = "page">
            <h1>PharmaFlow</h1>
            <Dropdown className="dropdown" 
                      onChange={async (event) => await setSelectedPharmacy(event.value)}  
                      options={pharmacyNames} 
                      value={"<  Click to select pharmacy  >"} 
            />
            <button><Link to={`/homepage/${selectedPharmacy}`}>Go To Pharmacy Homepage</Link></button>
        </div>
    );
}

export default SelectPharmacy;

