'use strict';

const express = require('express');
const router = express.Router();

const Utils = require("../controller/utils");

const profileRouter = require("./profile");
const articleRouter = require("./article");
const documentRouter = require("./document");

router.use("/profile", profileRouter);
router.use("/article", articleRouter);
router.use("/document", documentRouter);

router.all("/*", Utils.sendNotFound);

module.exports = router;
