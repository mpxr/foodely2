var User = require('../model/User')
var Food = require('../model/Food')

OrderItem = {
    user: User,
    food: Food,
    date: Date
}

module.exports = OrderItem