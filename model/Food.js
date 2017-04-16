var Schema = require('mongoose').Schema
var db = require('../config/db')

var Food = db.model('Food', {
    name: String,
    allergens: [String],
    ingredients: [String],
    price: Number,
    menuItem: {type: Schema.Types.ObjectId, ref: 'MenuItem'}
})

module.exports = Food