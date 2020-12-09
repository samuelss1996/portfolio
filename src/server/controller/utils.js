'use strict';

const Utils = {

    sendJson: function(request, response, err, data) {
        if(err || data === null) {
            return response.status(500).send({status: 500, message: "Error while querying data", error: err});
        }

        Utils.setLanguage(request, data);
        return response.send({status: 200, data: data});
    },

    sendNotFound: function(req, res) {
        return res.status(404).send({status: 404, message: "API method not found"});
    },

    setLanguage: function(request, field) {
        const lang = request.query.lang;

        if(lang) {
            if(Array.isArray(field)) {
                for (let item of field) {
                    item.setLanguage(lang);
                }
            } else {
                field.setLanguage(lang);
            }
        }
    }
};

module.exports = Utils;
