'use strict';

const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const mongoose = require("mongoose");
const mongooseIntl = require("mongoose-intl")

// Create a link to Angular directory
let distDir = path.join(__dirname, "../../dist/");
app.use(express.static(distDir));

// Setup requests and responses
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

app.use((req, res, next) => {
    res.header('Allow', 'GET');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.plugin(mongooseIntl, { languages: ['en', 'es'], defaultLanguage: 'en' });
mongoose.connect("mongodb+srv://read-only:K2oEk6dSbVnvZopU434chdcbKVasLc@portfolio.9ne2w.mongodb.net/portfolio?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection successful");
        let server = app.listen(process.env.PORT || 8080, () => {
            let port = server.address().port;
            console.log("App now running on http://localhost:" + port);
        });
    })
    .catch(e => console.log(e));

// Initialize routes
const apiRouter = require('./route/api');
app.use("/api", apiRouter);

app.all('/*', function(req, res) {
    res.sendFile('index.html', { root: distDir });
});

