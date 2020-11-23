'use strict';

const express = require('express');
const router = express.Router();

const profileRouter = require("./profile");
const articleRouter = require("./article");
const Utils = require("../controller/utils");

router.use("/profile", profileRouter);
router.use("/article", articleRouter);
router.all("/*", Utils.sendNotFound);

module.exports = router;
