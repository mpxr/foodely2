var User = require('../model/User')
var Food = require('../model/Food')
var db = require("../config/db")
var Schema = require('mongoose').Schema

OrderItem = db.model('OrderItem', {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    food: {
        type: Schema.Types.ObjectId,
        ref: 'Food'
    },
    date: Date
})

module.exports = OrderItem