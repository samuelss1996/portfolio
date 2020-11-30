'use strict';

const Document = require('../model/document');
const Utils = require('./utils');

const DocumentController = {

    getDocuments: function(req, res) {
        Document.find({}, (err, documents) => {
           return Utils.sendJson(res, err, documents);
        });
    }
};

module.exports = DocumentController;
