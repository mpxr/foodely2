var MenuItem = require('../model/MenuItem')
var db = require("../config/db")
var Schema = require('mongoose').Schema

var Menu = db.model('Menu',{
    menuItem: [{
        type: Schema.Types.ObjectId,
        ref: 'MenuItem'

    }],
    weekNumber: Number
})

module.exports = Menu