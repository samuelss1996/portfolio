'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = Schema({
    name: String,
    surname: String,
    description: [String],
    interests: [String],
});

module.exports = mongoose.model("Profile", ProfileSchema);
