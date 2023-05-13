const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors({
    origin: true,
    maxAge: 86400
}));


const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "yourpassword",
    database: "pharmacy",
});

con.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connection successful");
    }
});


con.end()
