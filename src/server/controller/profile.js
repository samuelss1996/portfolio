'use strict';

const ProfileController = {

    getProfileData: function(req, res) {
        return res.send({
            name: "Samuel",
            surname: "Soutullo",
            about_me: {
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                ],
                interests: [
                    "Videogames development",
                    "Android applications development",
                    "Web applications development"
                ],
                education: [
                    {
                        degree: "MsC in Game Design and Technology",
                        university: "University of Gothenburg",
                        year_start: 2018,
                        year_end: 2020,
                    },
                    {
                        degree: "BsC in Computer Engineering",
                        university: "University of Santiago de Compostela",
                        year_start: 2014,
                        year_end: 2018,
                    },
                ]
            }
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
