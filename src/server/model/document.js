'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentItemSchema = Schema({
    id: false,
    title: {type: String, intl: true},
    description: {type: String, intl: true},
    link: String
}, {
    toJSON: {
        virtuals: true,
    }
});

const DocumentSchema = Schema({
    group: {type: String, intl: true},
    documents: [DocumentItemSchema]
}, {
    toJSON: {
        virtuals: true,
    }
});

module.exports = mongoose.model("Document", DocumentSchema);
