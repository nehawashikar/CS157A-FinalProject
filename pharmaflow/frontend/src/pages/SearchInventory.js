import React from 'react';
import {useState, use} from 'react';
import axios from 'axios';
import { Link }from 'react-router-dom';

class SearchInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productNumber: null,
            res: []
        };
    }

    async handleClick() {

    }

    render() {
        return (
            <div style={{color:"#9544A2"}}>
                <h1>Search Inventory</h1>

                <div>
                    <p>Enter Product Number</p>
                    
                    <span style={{}}>
                        <input style={{width:900, borderWidth: 4, borderColor:"#EF984B"}} placeholder='ex. 23'></input>
                        <button style={{width:100, borderWidth: 4, borderColor:"#EF984B"}}onClick ={async () => await this.handleClick()}>Search</button>
                    </span>
                </div>

                <div>
                    { 
                        (this.state.res.length != 0) ? (
                            <ol>
                                {this.state.res.map((product, index) => (
                                    <p key={index}>{product.number}  {product.name}</p>
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

export default SearchInventory;