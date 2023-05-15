const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
var urlencodedParser = bodyParser.urlencoded( {extended: false} );


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


app.post('/getAllPharmacies', urlencodedParser, (req, res) => {

    res.send(req.query);
});


/*

con.connect((err) => { if (err) { console.log(err) } });


con.end()
*/

app.listen(5000, () => console.log(`Server started on ${port}`));
