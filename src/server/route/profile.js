'use strict';

const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/profile');

router.get("/", ProfileController.getProfileData);

module.exports = router;
