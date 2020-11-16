'use strict';

const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require("path");
const app = express();

// Create a link to Angular directory
let distDir = path.join(__dirname, "../../dist/");
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
let db;

// Setup requests and responses
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    let server = app.listen(process.env.PORT || 8080, () => {
        let port = server.address().port;
        console.log("App now running on http://localhost:" + port);
    });
});

// Initialize routes
const apiRouter = require('./route/api');
app.use("/api", apiRouter);

app.all('/*', function(req, res) {
    res.sendFile('index.html', { root: distDir });
});

