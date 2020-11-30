'use strict';

const Utils = {

    sendJson: function(response, err, data) {
        if(err || data === null) {
            return response.status(500).send({status: 500, message: "Error while querying data", error: err});
        }

        return response.send({status: 200, data: data});
    },

    sendNotFound: function(req, res) {
        return res.status(404).send({status: 404, message: "API method not found"});
    }
};

module.exports = Utils;
