var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createOrderMW = require('../middleware/order/createOrder')
var findOrderByDate = require('../middleware/order/findOrderByDate')
var findOrdersByWeekMW = require('../middleware/order/findOrdersByWeek')
var editOrderMW = require('../middleware/order/editOrder')
var deleteOrderMW = require('../middleware/order/deleteOrder')
var getCurrentWeekMW = require('../middleware/common/getCurrentWeek')
var renderMW = require("../middleware/common/renderMW")

var MenuItem = require('../model/MenuItem')
var OrderItem = require('../model/OrderItem')
var User = require('../model/User')

var objectRepository = {
    menuItem: MenuItem,
    orderItemModel: OrderItem,
    user: User
};

router.get('/', getCurrentWeekMW(), findOrdersByWeekMW(objectRepository), renderMW("order"))

/**
 * Find OrderItem by week number
 */
router.get('/find', authMW(objectRepository),
    getCurrentWeekMW(),
    findOrdersByWeekMW(objectRepository))

/**
 * Find OrderItem by date
 */
router.get('/find', authMW(objectRepository), findOrdersByWeekMW(objectRepository), function(req, res){
    res.send(req.tpl)
})

/**
 * Create a new OrderItem
 */
router.post('', authMW(objectRepository), createOrderMW(objectRepository))

/**
 * Edit OrderItem
 */
router.put('', authMW(objectRepository), editOrderMW(objectRepository))

/**
 * Delete OrderItem
 */
router.delete('', authMW(objectRepository), deleteOrderMW(objectRepository))

module.exports = router