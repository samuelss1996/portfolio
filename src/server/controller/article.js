'use strict';

const Article = require('../model/article');
const Utils = require('./utils');
const fs = require('fs');

const ArticleController = {

    getArticlesByCategory: function(req, res) {
        const categories = req.params.categories.split(',');

        Article.find({category: {$in: categories}}, (err, articles) => {
            return Utils.sendJson(req, res, err, articles);
        });
    },

    getArticleById: function(req, res) {
        const id = req.params.id;

        Article.findOne({_id: id}, (err, article) => {
            fs.readFile('src/server/assets/html/article/' + article.content, 'utf8', (fileError, data) => {
               if(!fileError) {
                   article.content = data;
               } else {
                   article.content = 'Error';
               }

               return Utils.sendJson(req, res, err, article);
            });
        });
    }
};

module.exports = ArticleController;
