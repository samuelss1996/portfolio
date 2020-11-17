'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = Schema({
    group_title: String,
    group_icon: String,
    items: [String]
});

module.exports = mongoose.model("Skill", SkillSchema);
