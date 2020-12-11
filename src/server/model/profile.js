'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = Schema({
    id: false,
    icon: String,
    text: {type: String, intl: true}
}, {
    toJSON: {
        virtuals: true
    }
});

const ProfileSchema = Schema({
    name: String,
    surname: String,
    description: {type: String, intl: true},
    interests: [InterestSchema],
}, {
    toJSON: {
        virtuals: true
    }
});

module.exports = mongoose.model("Profile", ProfileSchema);
