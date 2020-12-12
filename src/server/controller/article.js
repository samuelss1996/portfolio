'use strict';

const Article = require('../model/article');
const Utils = require('./utils');
const sanitize = require('mongo-sanitize');

const ArticleController = {

    getArticlesByCategory: function(req, res) {
        const categoriesStr = sanitize(req.params.categories);
        const categories = categoriesStr.split(',');

        Article.find({category: {$in: categories}}, (err, articles) => {
            return Utils.sendJson(req, res, err, articles);
        });
    },

    getArticleById: function(req, res) {
        const id = sanitize(req.params.id);

        Article.findOne({_id: id}, (err, article) => {
            Utils.injectLocalizedHtml('article/', req, article, 'content', () => {
                return Utils.sendJson(req, res, err, article);
            });
        });
    }
};

module.exports = ArticleController;
