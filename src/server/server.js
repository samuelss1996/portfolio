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
app.use(express.urlencoded({extended: false}));

mongoose.plugin(mongooseIntl, {languages: ['en', 'es'], defaultLanguage: 'en'});
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection successful");
        let server = app.listen(process.env.PORT || 8080, () => {
            let port = server.address().port;
            console.log("App now running on http://localhost:" + port);
        });
    })
    .catch(e => console.log(e));


// Force HTTPS
if (app.get('env') === 'production') {
    app.use(function (req, res, next) {
        if ((req.get('X-Forwarded-Proto') !== 'https')) {
            res.redirect('https://' + req.get('Host') + req.url);
        } else {
            next();
        }
    });
}

// Initialize routes
const apiRouter = require('./route/api');
app.use("/api", apiRouter);

app.all('/*', function (req, res) {
    res.sendFile('index.html', {root: distDir});
});

