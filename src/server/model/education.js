'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = Schema({
    degree: String,
    university: String,
    year_start: String,
    year_end: String
});

module.exports = mongoose.model("Education", EducationSchema);
