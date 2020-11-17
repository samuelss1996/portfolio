'use strict';

const Profile = require('../model/profile');
const Utils = require('./utils');

const ProfileController = {

    getProfileData: function(req, res) {
        Profile.findOne({}, (err, profile) => {
            return Utils.sendJson(res, err, profile);
        });
    },

    getExperience: function(req, res) {
        return res.send([
            {
                position: "Research Support Superior Technician",
                company: "Centro Singular de Investigación en Tecnologías Inteligentes (USC)",
                date_start: "2020/08/24",
                date_end: "2020/12/14",
                icon: "/assets/img/placeholder-icon.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                position: "Research Support Superior Technician",
                company: "Centro Singular de Investigación en Tecnologías Inteligentes (USC)",
                date_start: "2020/08/24",
                date_end: "2020/12/14",
                icon: "/assets/img/placeholder-icon.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                position: "Research Support Superior Technician",
                company: "Centro Singular de Investigación en Tecnologías Inteligentes (USC)",
                date_start: "2020/08/24",
                date_end: "2020/12/14",
                icon: "/assets/img/placeholder-icon.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ]);
    },

    getSkills: function(req, res) {
        return res.send([
            {
                group_title: "General purpose languages",
                group_icon: "/assets/img/placeholder-icon.png",
                items: [
                    "Java",
                    "Kotlin",
                    "C++",
                    "Python",
                ],
            },
            {
                group_title: "General purpose languages",
                group_icon: "/assets/img/placeholder-icon.png",
                items: [
                    "Java",
                    "Kotlin",
                    "C++",
                    "Python",
                ],
            },
            {
                group_title: "General purpose languages",
                group_icon: "/assets/img/placeholder-icon.png",
                items: [
                    "Java",
                    "Kotlin",
                    "C++",
                    "Python",
                ],
            },
            {
                group_title: "General purpose languages",
                group_icon: "/assets/img/placeholder-icon.png",
                items: [
                    "Java",
                    "Kotlin",
                    "C++",
                    "Python",
                ],
            },
            {
                group_title: "General purpose languages",
                group_icon: "/assets/img/placeholder-icon.png",
                items: [
                    "Java",
                    "Kotlin",
                    "C++",
                    "Python",
                ],
            },
            {
                group_title: "General purpose languages",
                group_icon: "/assets/img/placeholder-icon.png",
                items: [
                    "Java",
                    "Kotlin",
                    "C++",
                    "Python",
                ],
            }
        ]);
    },
};

module.exports = ProfileController;
