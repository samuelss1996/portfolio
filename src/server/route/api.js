'use strict';

const express = require('express');
const router = express.Router();

const profileRouter = require("./profile");
const articleRouter = require("./article");

router.use("/profile", profileRouter);
router.use("/article", articleRouter);

module.exports = router;
