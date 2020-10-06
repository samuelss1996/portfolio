const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require("path");

const app = express();
app.use(bodyParser.json());

// Create a link to Angular directory
let distDir = path.join(__dirname, "../../dist/");
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
let db;

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


app.get("/api/test", (req, res) => {
    res.status(200).json({message: "Hello test!"});
});
