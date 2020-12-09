'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
    title: {type: String, intl: true},
    category: String,
    tags: [String],
    picture: String,
    description: {type: String, intl: true},
    external_links: [{icon: String, url: String}],
    content: {type: String, intl: true}
}, {
    toJSON: {
        virtuals: true,
    }
});

module.exports = mongoose.model("Article", ArticleSchema);
