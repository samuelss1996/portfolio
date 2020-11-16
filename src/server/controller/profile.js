'use strict'

const ProfileController = {
    getProfileData: function(req, res) {
        return res.send({message: "Hello"});
    }
};

module.exports = ProfileController;
