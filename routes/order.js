var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createOrderMW = require('../middleware/order/createOrder')
var findOrdersByWeekMW = require('../middleware/order/findOrdersByWeek')
var deleteOrderMW = require('../middleware/order/deleteOrder')
var getCurrentWeekMW = require('../middleware/common/getCurrentWeek')
var renderMW = require("../middleware/common/renderMW")

var MenuItem = require('../model/MenuItem')
var OrderItem = require('../model/OrderItem')
var User = require('../model/User')
var Food = require('../model/Food')

var objectRepository = {
    orderItemModel: OrderItem,
    user: User,
    foodModel: Food
};

router.get('/', authMW(), getCurrentWeekMW(), findOrdersByWeekMW(objectRepository), renderMW("order"))

/**
 * Create a new OrderItem
 */
router.post('', authMW(), createOrderMW(objectRepository))

/**
 * Delete OrderItem
 */
router.delete('', authMW(), deleteOrderMW(objectRepository))

module.exports = router