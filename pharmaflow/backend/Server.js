const DBPath = './Cock.db';
const sql = require('sqlite3').verbose();

function createDbConnection() {
    const db = new sql.Database('./../../Medical.db', (error) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been established");
    return db;
}

const db = createDbConnection();

db.exec(`INSERT INTO Customer (customerID, name, address, phoneNumber, email, dateOfBirth) VALUES (1, "John Smith", "123 Example St.", "123-456-7890", "john@gmail.com", "2023-05-09")`);








