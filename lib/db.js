// require('dotenv').config();

const mySQL = require('mysql');
const mySQLConnection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'kunde'

    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
})

mySQLConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
})

module.exports = mySQLConnection;