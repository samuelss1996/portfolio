'use strict';

const Article = require('../model/article');
const Utils = require('./utils');

const ArticleController = {

    getArticlesByCategory: function(req, res) {
        const categories = req.params.categories.split(',');

        Article.find({category: {$in: categories}}, (err, articles) => {
            return Utils.sendJson(res, err, articles);
        });
    },

    getArticleById: function(req, res) {
        const id = req.params.id;

        Article.find({_id: id}, (err, article) => {
            return Utils.sendJson(res, err, article);
        });
    }
};

module.exports = ArticleController;
