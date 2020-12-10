'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = Schema({
    position: {type: String, intl: true},
    company: {type: String, intl: true},
    web: String,
    location: {type: String, intl: true},
    date_start: Date,
    date_end: Date,
    icon: String,
    description: {type: String, intl: true}
}, {
    toJSON: {
        virtuals: true
    }
});

module.exports = mongoose.model("Job", JobSchema);
