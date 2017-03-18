var User = require('../model/User')
var Food = require('../model/Food')

Order ={
    user: User,
    food: Food
}

module.exports = Order