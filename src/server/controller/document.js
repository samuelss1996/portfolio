'use strict';

const Document = require('../model/document');
const Utils = require('./utils');

const ArticleController = {

    getDocuments: function(req, res) {
        Document.find({}, (err, documents) => {
           return Utils.sendJson(res, err, documents);
        });
    }
};

module.exports = ArticleController;
