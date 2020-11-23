'use strict';

const express = require('express');
const router = express.Router();
const ArticleController = require('../controller/article');

router.get("/all/:categories", ArticleController.getArticlesByCategory);

module.exports = router;
