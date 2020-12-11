'use strict';

const Profile = require('../model/profile');
const Education = require('../model/education');
const Job = require('../model/job');
const Skill = require('../model/skill');

const Utils = require('./utils');

const ProfileController = {

    getProfileData: function(req, res) {
        Profile.findOne({}, (err, profile) => {
            Utils.injectLocalizedHtml('about/', req, profile, 'description', () => {
                return Utils.sendJson(req, res, err, profile);
            });
        });
    },

    getExperience: function(req, res) {
        Job.find({}, (err, jobs) => {
            return Utils.sendJson(req, res, err, jobs);
        });
    },

    getSkills: function(req, res) {
        Skill.find({}, (err, skills) => {
            return Utils.sendJson(req, res, err, skills);
        });
    },

    getEducation: function(req, res) {
        Education.find({}, (err, profile) => {
            return Utils.sendJson(req, res, err, profile);
        });
    },
};

module.exports = ProfileController;
