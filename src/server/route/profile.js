'use strict';

const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/profile');

router.get("/about", ProfileController.getProfileData);
router.get("/experience", ProfileController.getExperience);
router.get("/skills", ProfileController.getSkills);

module.exports = router;
