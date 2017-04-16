var Food = require('../model/Food')
var db = require("../config/db")
var Schema = require('mongoose').Schema

var MenuItem = db.model('MenuItem', {
    foods: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'

    }],
    date: Date
})

module.exports = MenuItem