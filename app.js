const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const dbConnection = require('./lib/db');


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    dbConnection.query('SELECT * FROM Kunder', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.render('kunder', { data:rows });
        }
    });
});

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});