'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = Schema({
    position: String,
    company: String,
    location: String,
    date_start: Date,
    date_end: Date,
    icon: String,
    description: String
});

module.exports = mongoose.model("Job", JobSchema);
