'use strict';

const Utils = {

    sendJson: function(response, err, data) {
        if(err || data === null) {
            return response.status(500).send({status: 1, message: "Error while querying data", error: err});
        }

        return response.send({status: 0, data: data});
    }
};

module.exports = Utils;
