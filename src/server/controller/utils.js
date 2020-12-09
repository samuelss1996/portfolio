'use strict';

const Utils = {

    sendJson: function(request, response, err, data) {
        if(err || data === null) {
            return response.status(500).send({status: 500, message: "Error while querying data", error: err});
        }

        const lang = request.query.lang;
        if(lang) {
            if(Array.isArray(data)) {
                for (let item of data) {
                    item.setLanguage(lang);
                }
            } else {
                data.setLanguage(lang);
            }
        }

        return response.send({status: 200, data: data});
    },

    sendNotFound: function(req, res) {
        return res.status(404).send({status: 404, message: "API method not found"});
    }
};

module.exports = Utils;
