'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema({
    id: false,
    item: {type: String, intl: true}
}, {
    toJSON: {
        virtuals: true,
    }
});

const SkillSchema = Schema({
    group_title: {type: String, intl: true},
    group_icon: String,
    items: [ItemSchema]
}, {
    toJSON: {
        virtuals: true,
    }
});

module.exports = mongoose.model("Skill", SkillSchema);
