'use strict';

const Article = require('../model/article');
const Utils = require('./utils');

const ArticleController = {

    getArticlesByCategory: function(req, res) {
        const categories = req.params.categories.split(',');

        Article.find({category: {$in: categories}}, (err, articles) => {
            return Utils.sendJson(res, err, articles);
        });
    }
};

module.exports = ArticleController;
