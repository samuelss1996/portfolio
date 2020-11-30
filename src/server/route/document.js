'use strict';

const express = require('express');
const router = express.Router();
const DocumentController = require('../controller/document');

router.get("/all", DocumentController.getDocuments);

module.exports = router;
