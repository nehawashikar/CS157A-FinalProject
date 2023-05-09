//DB username: root password: CS157A

const mysql = require('mysql2');


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Thatguy1234",
    database: "MedicalTest",
});
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connection to db established");
    }
});

let x = "SELECT * FROM Persons";
db.query(x, (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});

