'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = Schema({
    degree: {type: String, intl: true},
    university: {type: String, intl: true},
    year_start: String,
    year_end: String
}, {
    toJSON: {
        virtuals: true
    }
});

module.exports = mongoose.model("Education", EducationSchema);
