'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
    title: String,
    category: String,
    tags: [String],
    picture: String,
    description: [String],
    external_links: [{icon: String, url: String}],
    content: String
});

module.exports = mongoose.model("Article", ArticleSchema);
